"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(A35){let A36=2463534242;let EL=()=>{let x=A36;x^=x<<13;x^=x>>>17;x^=x<<5;A36=x;return x;};let BJ=(a,b)=>a>b?1:a<b? -1:a===b?0:1;let ED=(obj,cls)=>obj instanceof GR()&&!!obj.constructor.$meta&&A37(obj.constructor,cls);let A37=(from,
to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&A37(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(A37(supertypes[i],to)){return true;}}return false;};let A38=(obj,cls)=>{if(obj!==null&&!ED(obj,cls)){A39();}return obj;};let A3$=(obj,cls)=>{if(obj!==null&&!(obj instanceof cls)){A39();}return obj;};let Bf=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (Lz(cls))(data);};let N=(cls,init)=>A3_(cls,
init);let A3_=(cls,data)=>new (Lz(cls))(data);let A4a=(cls,sz)=>new (Lz(cls))(new Array(sz));let MO;let VR;if(typeof BigInt64Array!=='function'){MO=sz=>{let data=new Array(sz);let arr=new AXK(data);data.fill(Bi);return arr;};VR=init=>new AXK(init);}else {MO=sz=>new AXK(new BigInt64Array(sz));VR=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AXK(buffer);};}let H=sz=>new A1O(new Uint16Array(sz));let P2=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new A1O(buffer);};let Bz
=sz=>new AYj(new Int8Array(sz));let A4b=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new AYj(buffer);};let K9=sz=>new A0C(new Int16Array(sz));let A3R=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new A0C(buffer);};let Q=sz=>new AYo(new Int32Array(sz));let D_=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AYo(buffer);};let Na=sz=>new A1$(new Int8Array(sz));let A4c=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new A1$(buffer);};let B9
=sz=>new AY7(new Float32Array(sz));let A4d=data=>{let buffer=new Float32Array(data.length);buffer.set(data);return new AY7(buffer);};let ZR=sz=>new AXw(new Float64Array(sz));let A4e=data=>{let buffer=new Float64Array(data.length);buffer.set(data);return new AXw(buffer);};let Lz=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(GR()).call(this);this.data=data;}JavaArray.prototype=Object.create((GR()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};A4f(JavaArray.prototype,function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (Lz(this.type))(dataCopy);});let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[GR()],primitive:false,superclass:GR(),name:name,
binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let A4g=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};};let A4h=(name,binaryName)=>{let cls=A4g();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass
=null;return cls;};let I8=A4h("boolean","Z");let AHE=A4h("char","C");let A2n=A4h("byte","B");let A4i=A4h("short","S");let DC=A4h("int","I");let API=A4h("long","J");let EB=A4h("float","F");let AKI=A4h("double","D");let B4=A4h("void","V");let D=ex=>{throw AUa(ex);};let A4j=Symbol("javaException");let AUa=ex=>{let err=ex.$jsException;if(!err){let javaCause=A4k(ex);let jsCause=javaCause!==null?javaCause.$jsException:void 0;let cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new A4l("Java exception thrown",
cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[A4j]=ex;ex.$jsException=err;A4m(err,ex);}return err;};let A4m=(err,ex)=>{if(typeof A4n==="function"&&err.stack){let stack=A4n(err.stack);let javaStack=Bf(A4o(),stack.length);let elem;let noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=A4p(Be(element.className),Be(element.methodName),Be(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){A4q(ex,
javaStack);}}};let A4r=(cls,dimensions)=>{let first=0;for(let i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(let i=0;i<first;i=i+1|0){cls=Lz(cls);}if(first===dimensions.length -1){return Bf(cls,dimensions[first]);}}let arrays=new Array(A4s(dimensions,first));let firstDim=dimensions[first]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Bf(cls,firstDim);}return A4t(cls,arrays,dimensions,first);};let A10=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length
===0){return A4r(A2n,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Bz(firstDim);}return A4t(A2n,arrays,dimensions);};let A12=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length===0){return A4r(AHE,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=H(firstDim);}return A4t(AHE,arrays,dimensions,0);};let A4u=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length===0){return A4r(I8,dimensions);}let firstDim
=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Na(firstDim);}return A4t(I8,arrays,dimensions,0);};let AXM=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length===0){return A4r(A4i,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=K9(firstDim);}return A4t(A4i,arrays,dimensions,0);};let Zq=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length===0){return A4r(DC,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i
=i+1|0){arrays[i]=Q(firstDim);}return A4t(DC,arrays,dimensions,0);};let A16=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length===0){return A4r(API,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=MO(firstDim);}return A4t(API,arrays,dimensions,0);};let AZ$=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length===0){return A4r(EB,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=B9(firstDim);}return A4t(EB,
arrays,dimensions,0);};let AYf=dimensions=>{let arrays=new Array(A4s(dimensions,0));if(arrays.length===0){return A4r(AKI,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=ZR(firstDim);}return A4t(AKI,arrays,dimensions,0);};let A4s=(dimensions,start)=>{let val=dimensions[start+1]|0;for(let i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;};let A4t=(cls,arrays,dimensions,start)=>{let limit=arrays.length;for(let i=start+1|0;i
<dimensions.length;i=i+1|0){cls=Lz(cls);let dim=dimensions[i];let index=0;let packedIndex=0;while(index<limit){let arr=A4a(cls,dim);for(let j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];};let A4v=value=>{if(typeof value==='number'&&A4w(value)){throw "NaN";}return value;};let A4x=printFunction=>{let buffer="";let utf8Buffer=0;let utf8Remaining=0;let putCodePoint=ch=>{if(ch===0xA){printFunction(buffer);buffer
="";}else if(ch<0x10000){buffer+=A4y.fromCharCode(ch);}else {ch=ch -0x10000|0;let hi=(ch>>10)+0xD800;let lo=(ch&0x3FF)+0xDC00;buffer+=A4y.fromCharCode(hi,lo);}};return ch=>{if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch
&0x07;utf8Buffer=3;}};};let A1w=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof A4z==="object"?A4x(function(msg){A4z.info(msg);}):function(){};let AZu=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof A4z==="object"?A4x(function(msg){A4z.error(msg);}):function(){};let A4A=null;let A4B=data=>{let i=0;let packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++];let prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}A4A
=packages;};let A4C=data=>{let packages=A4A;let i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta;let className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype
={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName
=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j];let func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};let A4D=f=>function(){return f(this);};let A4E=f=>function(p1){return f(this,p1);};let A4F=f=>function(p1,p2){return f(this,p1,p2);};let A4G=f=>
function(p1,p2,p3){return f(this,p1,p2,p3,p3);};let A4H=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};let A11=f=>function(){let args=Array.prototype.slice.apply(arguments);A4I(function(){f.apply(this,args);});};let A4J=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=Bf(GR(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=Be(args[i]);}A4I(()=>{f.call(null,javaArgs);},callback);};let A4K;let A4L=strings=>{A4M();A4K=new Array(strings.length);for(let i=0;i<strings.length;++i){A4K[i]=A4N(Be(strings[i]));}};let B
=index=>A4K[index];let X=target=>target.$clinit=()=>{};let A4O=new ArrayBuffer(16);let A4P=new DataView(A4O);let A4Q=new Float32Array(A4O);let A4R=new Float64Array(A4O);let A4S=new Int32Array(A4O);let AWA;let A4T;if(typeof BigInt!=='function'){AWA=n=>{A4P.setFloat64(0,n,true);return new A4U(A4P.getInt32(0,true),A4P.getInt32(4,true));};A4T=n=>{A4P.setInt32(0,n.lo,true);A4P.setInt32(4,n.hi,true);return A4P.getFloat64(0,true);};}else if(typeof BigInt64Array!=='function'){AWA=n=>{A4P.setFloat64(0,n,true);let lo
=A4P.getInt32(0,true);let hi=A4P.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};A4T=n=>{A4P.setFloat64(0,n,true);let lo=A4P.getInt32(0,true);let hi=A4P.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let $rt_numberConversionLongArray=new BigInt64Array(A4O);AWA=n=>{A4R[0]=n;return $rt_numberConversionLongArray[0];};A4T=n=>{$rt_numberConversionLongArray[0]=n;return A4R[0];};}let Hz=n=>{A4Q[0]=n;return A4S[0];};let I0
=n=>{A4S[0]=n;return A4Q[0];};let A4V=(a,b)=>{if(a!==a){return b!==b;}A4R[0]=a;A4R[1]=b;return A4S[0]===A4S[2]&&A4S[1]===A4S[3];};let A4l;if(typeof A4W==='object'){let defaultMessage=Symbol("defaultMessage");A4l=function A4l(message,cause){let self=Reflect.construct(Error,[void 0,cause],A4l);Object.setPrototypeOf(self,A4l.prototype);self[defaultMessage]=message;return self;};A4l.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:A4l},message:{get:()=>{try {let javaException
=this[A4j];if(typeof javaException==='object'){let javaMessage=A4X(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(A4Y){return "Exception occurred trying to extract Java exception message: "+A4Y;}}}});}else {A4l=Error;}let A4Z=e=>e instanceof Error&&typeof e[A4j]==='object'?e[A4j]:null;let A40=e=>typeof e.$jsException==='object'?e.$jsException:null;let Bx=err=>{let ex=err[A4j];if(!ex){ex=A41(Be("(JavaScript) "+err.toString()));err[A4j]
=ex;ex.$jsException=err;A4m(err,ex);}return ex;};let A42=obj=>{let cls=obj.constructor;let arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName="";if(cls===I8){clsName="boolean";}else if(cls===A2n){clsName="byte";}else if(cls===A4i){clsName="short";}else if(cls===AHE){clsName="char";}else if(cls===DC){clsName="int";}else if(cls===A43){clsName="long";}else if(cls===EB){clsName="float";}else if(cls===AKI){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name
:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;};function A4U(lo,hi){this.lo=lo|0;this.hi=hi|0;}A4U.prototype.__teavm_class__=()=>{return "long";};let A44=a=>(a.hi&0x80000000)===0;let A45=a=>(a.hi&0x80000000)!==0;let A46=1<<18;let Bi;let E;let K;let BQ;let F5;let Hq;let T;if(typeof BigInt!=="function"){A4U.prototype.toString=function(){let result=[];let n=this;let positive=A44(n);if(!positive){n=GM(n);}let radix=new A4U(10,0);do {let divRem=A47(n,radix);result.push(String.fromCharCode(48
+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};A4U.prototype.valueOf=function(){return F5(this);};Bi=new A4U(0,0);K=val=>new A4U(val, -(val<0)|0);BQ=val=>val>=0?new A4U(val|0,val/0x100000000|0):GM(new A4U( -val|0, -val/0x100000000|0));E=(lo,hi)=>new A4U(lo,hi);F5=val=>0x100000000*val.hi+(val.lo>>>0);Hq=val=>val.hi;T=val=>val.lo;}else {Bi=BigInt(0);E=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)
<<BigInt(32)));K=val=>BigInt.asIntN(64,BigInt(val|0));BQ=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));F5=val=>Number(val);Hq=val=>Number(BigInt.asIntN(64,val>>BigInt(32)))|0;T=val=>Number(BigInt.asIntN(32,val))|0;}let Cj=Math.imul||function(a,b){let ah=a>>>16&0xFFFF;let al=a&0xFFFF;let bh=b>>>16&0xFFFF;let bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};let DQ=(a,b)=>(a>>>0)/(b>>>0)>>>0;let A0H=(a,b)=>(a>>>0)%(b>>>0)>>>0;let FM=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};let A48
=(index,array)=>{if(index<0||index>=array.length){A49();}return index;};let A4$=(index,array)=>{if(index>=array.length){A49();}return index;};let A4_=index=>{if(index<0){A49();}return index;};let F=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=GR();}return function(){superclass.call(this);};};let O=(array,offset,count)=>{let result="";let limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;};let A5a=array=>O(array,0,array.length);let AYr=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}};let AX8=string=>{let array=new Uint16Array(string.length);for(let i=0;i<array.length;++i){array[i]=string.charCodeAt(i);}return new A1O(array);};let A5b=(string,start,end)=>{if(start===0&&end===string.length){return string;}let result=start.substring(start,end -1)+start.substring(end -1,end);A5c=A5c+result.charCodeAt(result.length -
1)|0;};let A5c=0;let A4f=(target,method)=>target.s=method;let Br=cls=>A1q(cls);let Be=str=>str===null?null:ABy(str);let BP=str=>str===null?null:str.mX;let A5d=val=>{if(val===null){D(A5e());}return val;};let A4M=()=>P();let GR=()=>C;let A41=message=>A5f(message);let A4X=t=>ASZ(t);let A4k=t=>AS5(t);let A4o=()=>GR();let A49=()=>D(A41(Be("")));let A39=()=>D(A5g());let AFH=()=>{{return AFi();}};let Nh=t=>{{return ABM(t);}};let A4p=(className,methodName,fileName,lineNumber)=>{{return null;}};let A4q=(e,stack)=>{};let A4N;{A4N
=str=>str;}var A=Object.create(null);
function C(){this.oF=null;this.$id$=0;}
let A5h=()=>{let a=new C();CI(a);return a;}
let GT=b=>{let c;if(b.oF===null){c=new IR;CJ();c.oB=BV;b.oF=c;}b=b.oF;c=b.oB;if(c===null){CJ();b.oB=BV;}else{CJ();if(c!==BV){c=new BK;c.mZ=1;c.m0=1;c.m1=B(0);D(c);}}b.pb=b.pb+1|0;}
let D8=b=>{let c,d,e;if(!Ho(b)){c=b.oF;d=c.oB;CJ();if(d===BV){e=c.pb-1|0;c.pb=e;if(!e)c.oB=null;Ho(b);return;}}b=new I4;b.mZ=1;b.m0=1;D(b);}
let A1z=b=>{XU(b,1);}
let XU=(b,c)=>{let d,e,$p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.oF===null){d=new IR;CJ();d.oB=BV;b.oF=d;}d=b.oF;if(d.oB===null){CJ();d.oB=BV;}e=d.oB;CJ();if(e===BV){d.pb=d.pb+c|0;return;}$p=1;case 1:UH(b,c);if(GC()){break _;}return;default:C9();}}BO().s(b,c,d,e,$p);}
let AOi=(b,c,d)=>{let e,f,g;CJ();e=BV;f=b.oF;if(f===null){f=new IR;f.oB=e;b.oF=f;if(e!==e)BV=e;BV.q3=Fa();b=b.oF;b.pb=b.pb+c|0;b=null;d.r$.e(b);return;}if(f.oB===null){f.oB=e;if(e!==e)BV=e;BV.q3=Fa();b=b.oF;b.pb=b.pb+c|0;b=null;d.r$.e(b);return;}if(f.qR===null)f.qR=ANM();f=f.qR;g=new Q0;g.y6=e;g.y7=b;g.y4=c;g.y5=d;d=g;f.push(d);}
let A1J=b=>{AF_(b,1);}
let AF_=(b,c)=>{let d,e;if(!Ho(b)){d=b.oF;e=d.oB;CJ();if(e===BV){c=d.pb-c|0;d.pb=c;if(c>0)return;d.oB=null;d=d.qR;if(d!==null&&!(d.length?0:1)){d=new TO;d.zr=b;SA(d,0);}else Ho(b);return;}}b=new I4;b.mZ=1;b.m0=1;D(b);}
let ATB=b=>{let c,d,e;if(!Ho(b)){c=b.oF;if(c.oB===null){b=c.qR;if(b!==null&&!(b.length?0:1)){b=c.qR.shift();Bv();if(b!==null&&!(b instanceof GR()))b=Co(b);d=b;c.qR=null;b=d.y6;c=d.y7;e=d.y4;d=d.y5;CJ();if(BV!==b)BV=b;BV.q3=Fa();c=c.oF;c.oB=b;c.pb=c.pb+e|0;b=null;d.r$.e(b);}return;}}}
let Ho=a=>{let b,c;b=a.oF;if(b===null)return 1;a:{if(b.oB===null){c=b.qR;if(!(c!==null&&!(c.length?0:1))){b=b.xJ;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.oF=null;return 1;}
let CI=a=>{return;}
let ARk=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new B6;c.nn=b;d=c;b.classObject=d;}}return c;}
let AJY=a=>{let b,c;b=a;if(!b.$id$){c=EL();b.$id$=c;}return a.$id$;}
let APr=(a,b)=>{return a!==b?0:1;}
let AIw=a=>{let b,c,d,e;b=a;if(!b.$id$){c=EL();b.$id$=c;}d=Bm(a.$id$,4);b=new I;b.mY=H(16);G(b,b.mW,B(1));e=b.mW;if(d===null)d=B(2);G(b,e,d);return U(b);}
let T$=a=>{let b,c;b=a;if(!b.$id$){c=EL();b.$id$=c;}return a.$id$;}
let AOe=a=>{let b,c,d;if(!ED(a,FE)&&a.constructor.$meta.item===null){b=new Su;b.mZ=1;b.m0=1;D(b);}b=AFW(a);c=b;d=EL();c.$id$=d;return b;}
let MY=a=>{let b,c,d;b:{b=a.oF;if(b!==null){c=b.oB;CJ();if(c===BV){d=1;break b;}}d=0;}if(!d){b=new I4;b.mZ=1;b.m0=1;D(b);}b=b.xJ;if(b===null)return;while(!(b.length?0:1)){c=b.shift();Bv();if(c!==null&&!(c instanceof GR()))c=Co(c);c=c;if(!c.n())SA(c,0);}a.oF.xJ=null;}
let UH=(b,c)=>{let thread=BO();let javaThread=AFH();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Nh(javaThread);thread.resume();};callback.io=e=>{thread.attribute=AUa(e);Nh(javaThread);thread.resume();};callback=ZG(callback);thread.suspend(()=>{try {AOi(b,c,callback);;}catch(TW){callback.io(TW);}});return null;}
let ADr=F();
let A1o=b=>{let c;c=new Bu;c.sg=1.0;c.sf=0.0;AGW=c;c=new Bu;c.sg=0.0;c.sf=1.0;AGV=c;c=new Bu;c.sg=0.0;c.sf=0.0;AMm=c;ALj=new Bu;AP2=new Bu;ARU=new Bu;AR7=new Bu;AOD=new Bu;AOW=new Bu;AKE=new EA;AQy=new EA;AUb=0.10000000149011612;AEH();ALZ=Br(EB);AIj=Bf(HY,111);ARx=new Bu;ARP=new Bu;AKX=new C;YQ();AF9=Br(DC);W1();AI$=Br(API);AF8=Br(AHE);AR4=Bf(DF,128);UJ();AAE();R=1;ALG=new Bu;ALI=new Bu;ALK=new Bu;AP_=0.4000000059604645;AF6=0.10000000149011612;ATx=new Bu;ANc=new Bu;AOd=new Bu;AWQ=new Bu;AWU=new Bu;AWT=new Bu;WE();AB2();MR
=0.0;AMW=B9(3);Dn=1;AW0=new Kx;ALp=new Kw;c=new JD;c.vK=Bz(1);Dd=c;c=new Jj;c.vK=Bz(1);I1=c;AXa=Br(AKI);XW();AEO();c=new Cc;c.nI=0;c.nU=0;Dc=c;c=new Cc;c.nI=1;c.nU=0;C2=c;AUh=Bz(0);ABR();VF=1;Lp=null;Y8();ACb();c=new Fu;c.uz=1;AOr=c;c=new Fu;c.uz=0;APH=c;ALe=Br(I8);c=A3O(B(3));c.uV=512;c.sj=520;Wu(new Lu,new Q3,c);}
let Gr=F();
let AZC=0;let AZE=0;let AXQ=0;let A3P=0;let AYY=0;let A5i=()=>{A5i=X(Gr);ANk();}
let ANk=()=>{AZC=C0(Be(navigator.platform),B(4));AZE=C0(Be(navigator.platform),B(5));AXQ=C0(Be(navigator.platform),B(6));A3P=!C0(Be(navigator.platform),B(7))&&!C0(Be(navigator.platform),B(8))?0:1;AYY=!C0(Be(navigator.platform),B(9))&&!C0(Be(navigator.platform),B(10))&&!C0(Be(navigator.platform),B(11))?0:1;}
let Nl=F(0);
let LX=F();
let Dl=F(0);
let ADc=F(LX);
let Dq=F(0);
let F$=F();
let C8=F(0);
let BX=F(0);
function By(){let a=this;C.call(a);a.m9=null;a.m6=0;}
let AC5=a=>{return a.m6;}
let AMk=a=>{return a.m9;}
let EP=F(By);
let A2_=null;let A3J=null;let AZP=null;let AXx=null;let AZr=()=>{AZr=X(EP);ATl();}
let ATl=()=>{let b,c,d;b=new EP;AZr();b.m9=B(12);b.m6=0;A2_=b;c=new EP;c.m9=B(13);c.m6=1;A3J=c;d=new EP;d.m9=B(14);d.m6=2;AZP=d;AXx=N(EP,[b,c,d]);}
let Gf=F();
let L1=F(0);
let I5=F(Gf);
let ALj=null;let ANb=()=>{ALj=new Bu;}
let GH=F(0);
let D0=F(0);
let G6=F();
let GS=F(0);
let BT=F();
let AP2=null;let AVy=()=>{AP2=new Bu;}
let Ht=F(BT);
let ABr=F(Ht);
let Gh=F(By);
let APJ=null;let AVH=null;let ATt=null;let AVi=()=>{AVi=X(Gh);AGZ();}
let AGZ=()=>{let b,c;b=new Gh;AVi();b.m9=B(15);b.m6=0;APJ=b;c=new Gh;c.m9=B(16);c.m6=1;AVH=c;ATt=N(Gh,[b,c]);}
let MJ=F(0);
let Je=F(0);
let GP=F(0);
let DA=F();
let ACY=F(DA);
let Mt=F(G6);
let H7=F();
let ARU=null;let AR7=null;let ALn=()=>{ARU=new Bu;AR7=new Bu;}
let WK=F();
let Uh=F();
let TF=F(0);
let Lq=F();
let AA$=F(Lq);
let YF=F(F$);
let PW=F();
let AXG=null;let A5j=()=>{A5j=X(PW);AOS();}
let AOS=()=>{let b,c;AVi();b=Q((ATt.s()).data.length);c=b.data;AXG=b;c[APJ.m6]=1;c[AVH.m6]=2;}
let Z4=F();
let Ru=F();
let AXi=null;let A5k=()=>{A5k=X(Ru);AJa();}
let AJa=()=>{let b,c;AAq();b=Q((Wb.s()).data.length);c=b.data;AXi=b;c[Wz.m6]=1;c[U9.m6]=2;c[XO.m6]=3;}
let ACX=F(DA);
let FJ=F();
let Rr=F(FJ);
let GZ=F();
let A2z=0;let A3E=0;let A0U=0;let A3G=0;let AZX=0;let A5l=()=>{A5l=X(GZ);AVP();}
let AVP=()=>{A2z=C0(Be(navigator.platform),B(4));A3E=C0(Be(navigator.platform),B(5));A0U=C0(Be(navigator.platform),B(6));A3G=!C0(Be(navigator.platform),B(7))&&!C0(Be(navigator.platform),B(8))?0:1;AZX=!C0(Be(navigator.platform),B(9))&&!C0(Be(navigator.platform),B(10))&&!C0(Be(navigator.platform),B(11))?0:1;}
let LH=F();
let TA=F(Ht);
let AOD=null;let AN9=()=>{AOD=new Bu;}
let PB=F();
let AOW=null;let AWo=()=>{AOW=new Bu;}
let JX=F();
let AYX=null;let AXO=null;let A3L=null;let A5m=()=>{A5m=X(JX);AS7();}
let AS7=()=>{let b;b=new B7;b.nZ=1;b.ne=Bf(C,16);AYX=b;b=new Bg;CP();AXO=b;A3L=new EA;}
let My=F();
let IV=F(FJ);
let TB=F(FJ);
let DS=F(BT);
let AUb=0.0;let AUG=()=>{AUb=0.10000000149011612;}
let Tp=F(IV);
let V6=F(F$);
let KI=F(0);
let ZJ=F(F$);
let X0=F();
let Nf=F();
let AYp=null;let A5n=()=>{A5n=X(Nf);AUW();}
let AUW=()=>{let b,c;AAq();b=Q((Wb.s()).data.length);c=b.data;AYp=b;c[AHW.m6]=1;c[APg.m6]=2;c[AUi.m6]=3;c[Wz.m6]=4;c[U9.m6]=5;c[XO.m6]=6;c[AJL.m6]=7;c[ALq.m6]=8;c[AS9.m6]=9;c[AL3.m6]=10;}
let Cp=F(By);
let Wz=null;let U9=null;let XO=null;let AJL=null;let AS9=null;let AL3=null;let ALq=null;let AHW=null;let APg=null;let AUi=null;let Wb=null;let AAq=()=>{AAq=X(Cp);AI4();}
let AI4=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Cp;AAq();b.m9=B(17);b.m6=0;Wz=b;c=new Cp;c.m9=B(18);c.m6=1;U9=c;d=new Cp;d.m9=B(19);d.m6=2;XO=d;e=new Cp;e.m9=B(20);e.m6=3;AJL=e;f=new Cp;f.m9=B(21);f.m6=4;AS9=f;g=new Cp;g.m9=B(22);g.m6=5;AL3=g;h=new Cp;h.m9=B(23);h.m6=6;ALq=h;i=new Cp;i.m9=B(24);i.m6=7;AHW=i;j=new Cp;j.m9=B(25);j.m6=8;APg=j;k=new Cp;k.m9=B(26);k.m6=9;AUi=k;Wb=N(Cp,[b,c,d,e,f,g,h,i,j,k]);}
let Cb=F();
let Fj=F(Cb);
let Yr=F(Fj);
let AAX=F(Fj);
let CW=F(Cb);
let E8=F(CW);
let Us=F(E8);
let Vz=F();
let M2=F(Cb);
let Wc=F(M2);
let Xh=F(Cb);
let ZD=F(Cb);
let AB6=F(Cb);
let ACu=F();
let LA=F(Cb);
let Zk=F(LA);
let Wx=F(CW);
let ACS=F(CW);
let ADd=F(E8);
let ABn=F(Cb);
let ABw=F(E8);
let AD7=F(CW);
let ADH=F(CW);
let Xz=F(Cb);
let Y_=F(CW);
let Ze=F(Cb);
let XQ=F(Cb);
let Zl=F(Fj);
let U1=F(CW);
let AD$=F(Cb);
let AA5=F(E8);
let XE=F(Fj);
let AAD=F(Cb);
let VA=F(CW);
let YO=F(CW);
let ON=F();
let A0i=null;let AEH=()=>{A0i=N(B6,[Br(ET),Br(Bn),Br(QP),Br(Rr),Br(TB),Br(IV),Br(Tp),Br(GI),Br(Qj),Br(SG),Br(Sa),Br(PX),Br(Tc),Br(Kc),Br(Tn),Br(Rs),Br(N0),Br(S8),Br(GW),Br(QI),Br(SB),Br(QE),Br(P7),Br(Of)]);}
let C5=F(I5);
let De=F(C5);
let AX1=null;let A0l=null;let A2k=null;let A3S=null;let A1n=null;let AXl=null;let AZp=null;let A1b=null;let A5o=()=>{A5o=X(De);ATu();}
let ATu=()=>{let b,c;b=new Bn;EM();b.oe=0.0;b.od=0.0;b.oc=1.0;b.ob=1.0;Du(b);AX1=b;b=new Bn;b.oe=1.0;b.od=0.0;b.oc=0.0;b.ob=1.0;Du(b);A0l=b;b=new Bn;b.oe=0.0;b.od=1.0;b.oc=0.0;b.ob=1.0;Du(b);A2k=b;b=new Tu;c=new B7;c.nZ=0;c.ne=Bf(C,16);b.pf=c;b.q6=2147483647;A3S=b;b=new Tt;AFO();A1n=b;AXl=new Ts;AZp=new Tr;A1b=new Tq;}
let Go=F(De);
let Ll=F(Go);
let Wt=F(Ll);
let ACV=F(BT);
let L_=F(C5);
let Qp=F(0);
let E0=F();
let Xr=F(E0);
let Dm=F(Gf);
let U_=F(Dm);
let ACT=F(BT);
let BL=F();
let A23=null;let A18=null;let A2E=null;let AY1=null;let A0t=null;let A0a=null;let A13=null;let AFO=()=>{AFO=X(BL);AHG();}
let AHG=()=>{let b;b=new HY;AFO();b.Cp=0.0;A23=b;A18=new RA;A2E=new Rx;AY1=new Rw;A0t=new Rz;A0a=new Ry;A13=new Rv;}
let Rz=F(BL);
let ABa=F(BL);
let KD=F(DS);
let Zh=F(KD);
let Ts=F(BL);
let ADX=F(BT);
let HW=F(De);
let ARx=null;let ARP=null;let AI8=()=>{ARx=new Bu;ARP=new Bu;}
let ABb=F(BL);
let GG=F(0);
let EA=F();
let AKE=null;let AQy=null;let ATe=()=>{AKE=new EA;AQy=new EA;}
let Ec=F(EA);
let AXf=null;let AWm=()=>{AWm=X(Ec);UP();}
let A5p=()=>{let a=new Ec();Rd(a);return a;}
let Rd=a=>{AWm();}
let UP=()=>{let b,c,d,e,$$je;Py();b=Gs;c=CF(b,Br(Ec));b=c<0?null:b.oE.data[c];if(b===null){b=new IQ;d=new B7;d.nZ=0;d.ne=Bf(C,4);b.pf=d;b.q6=100;c:{try{d=Rb(Br(Ec),null);break c;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){}else{throw $$e;}}try{d=Pm(Br(Ec),null);Mn(d,1);break c;}catch($$e){$$je=Bx($$e);if($$je instanceof DL){}else{throw $$e;}}d=null;}b.qe=d;if(d===null){b=new BC;d=new I;d.mY=H(16);G(d,d.mW,B(27));if(Br(Ec).nB===null)Br(Ec).nB=Be(Br(Ec).nn.$meta.name);e=Br(Ec).nB;G(d,d.mW,e);e=U(d);b.mZ=1;b.m0
=1;b.m1=e;D(b);}BE(Gs,Br(Ec),b);}AXf=b;}
let Xu=F(E0);
let FD=F(Dm);
let ALG=null;let ALI=null;let ALK=null;let AP_=0.0;let AF6=0.0;let AV$=()=>{ALG=new Bu;ALI=new Bu;ALK=new Bu;AP_=0.4000000059604645;AF6=0.10000000149011612;}
let WC=F(FD);
let YT=F(BT);
let Ph=F(0);
let AB8=F();
let GI=F();
let GW=F(GI);
let Sa=F(GW);
let Mp=F(Dm);
let X$=F(Mp);
let AER=F(L_);
let KJ=F(C5);
let AFd=F(Go);
let MK=F(Dm);
let Tq=F(BL);
let SB=F();
let XM=F();
let Zi=F(BT);
let Z9=F(DA);
let Ys=F();
let ABS=F(BT);
let AED=F(DS);
let YR=F(H7);
let Rv=F(BL);
let Ry=F(BL);
let Q4=F(0);
let Kc=F();
let N0=F(Kc);
let Xs=F(E0);
let ACR=F(LH);
let ACW=F(My);
let ADY=F(BT);
let ADZ=F(DS);
let Tr=F(BL);
let Et=F();
let AZS=null;let A1k=null;let AZQ=null;let A1i=null;let AXj=null;let AYq=null;let A09=null;let AXt=null;let A1T=null;let A5q=()=>{A5q=X(Et);AJn();}
let AJn=()=>{let b;b=new J$;b.wo=0.0;AZS=b;b=new J$;b.wo=1.0;A1k=b;Fk();AZQ=Fv.data[128];Fk();b=Fv.data[129];A1i=b;AXj=b;Fk();AYq=Fv.data[130];Fk();A09=Fv.data[132];Fk();AXt=Fv.data[136];Fk();A1T=Fv.data[144];}
let Qj=F(GW);
let Y3=F(BT);
let Vj=F(DA);
let RA=F(BL);
let WM=F(C5);
let YS=F(BT);
let QE=F();
function HY(){BL.call(this);this.Cp=0.0;}
let AIj=null;let AUY=()=>{AIj=Bf(HY,111);}
let XN=F(KJ);
let Rw=F(BL);
let Qy=F(Dm);
let ATx=null;let AVd=()=>{ATx=new Bu;}
let Y0=F(Mt);
let S8=F();
let KQ=F(Dm);
let AXW=null;let AZc=null;let A5r=()=>{A5r=X(KQ);AGR();}
let AGR=()=>{let b,c;b=new Bn;EM();AXW=b;b=new Dw;Eh();c=new B7;c.nZ=1;c.ne=Bf(C,1);b.oD=c;c=new DE;c.pu=1;c.n1=Q(2);b.oh=c;AZc=b;}
let Of=F();
let ABc=F(BL);
let Tt=F(BL);
let ACA=F(HW);
let Rx=F(BL);
let PX=F();
let AEA=F();
let Dz=F(By);
let AZW=null;let AXZ=null;let A1C=null;let AXA=null;let AYh=null;let A2a=null;let A24=()=>{A24=X(Dz);ARB();}
let ARB=()=>{let b,c,d,e,f;b=new Dz;A24();b.m9=B(28);b.m6=0;AZW=b;c=new Dz;c.m9=B(29);c.m6=1;AXZ=c;d=new Dz;d.m9=B(30);d.m6=2;A1C=d;e=new Dz;e.m9=B(31);e.m6=3;AXA=e;f=new Dz;f.m9=B(32);f.m6=4;AYh=f;A2a=N(Dz,[b,c,d,e,f]);}
let AEJ=F(BL);
let YG=F(DA);
function Dk(){let a=this;C.call(a);a.q6=0;a.sV=0;a.pf=null;}
let IS=(a,b)=>{let c,d,e;if(b===null){b=new Bc;b.mZ=1;b.m0=1;b.m1=B(33);D(b);}c=a.pf;if(c.m7<a.q6){CH(c,b);d=a.sV;e=a.pf.m7;if(d>e)e=d;a.sV=e;if(ED(b,Dq))b.B();}else if(ED(b,Dq))b.B();}
let AEw=(a,b)=>{let c,d,e,f,g;if(b===null){b=new Bc;b.mZ=1;b.m0=1;b.m1=B(34);D(b);}c=a.pf;d=a.q6;e=0;f=b.m7;while(e<f){if(e>=b.m7){g=new L;c=new I;c.mY=H(16);G(c,c.mW,B(35));J(c,c.mW,e,10);G(c,c.mW,B(36));d=b.m7;J(c,c.mW,d,10);b=U(c);g.mZ=1;g.m0=1;g.m1=b;D(g);}g=b.ne.data[e];if(g!==null){if(c.m7<d){CH(c,g);if(ED(g,Dq))g.B();}else if(ED(g,Dq))g.B();}e=e+1|0;}d=a.sV;e=c.m7;if(d>e)e=d;a.sV=e;}
let Tu=F(Dk);
let Vc=F();
let Tc=F();
let QP=F();
let Rs=F();
let JZ=F(BT);
let ANc=null;let AGO=()=>{ANc=new Bu;}
let Vi=F(DA);
let AD0=F(MK);
let Vf=F(0);
let Y4=F(BT);
let AE6=F(C5);
let AAW=F(C5);
let Y1=F(DS);
let Mw=F();
let Xq=F(Mw);
let ADM=F(Gf);
let UR=F(BT);
let ACG=F(Go);
let AAo=F(BT);
let AEs=F(DS);
let SG=F(GI);
let AA0=F(C5);
let QI=F();
let P7=F();
let Z_=F(Dm);
let AEE=F(G6);
let US=F(BT);
let RS=F(C5);
let AOd=null;let AOv=()=>{AOd=new Bu;}
let AEQ=F(JZ);
let UT=F(De);
let Xt=F(E0);
let T2=F();
let Tn=F();
let D2=F();
let AYd=null;let AXS=null;let AYu=null;let A3q=null;let A3s=null;let A3r=null;let AY2=null;let AZy=null;let A3D=null;let AXN=null;let A3w=null;let A5s=()=>{A5s=X(D2);APb();}
let APb=()=>{let b;AYd=B9(16);b=new EG;Sf();b.rY=0.0;b.rV=0.0;b.rW=0.0;b.rX=1.0;AXS=b;b=new EG;b.rY=0.0;b.rV=0.0;b.rW=0.0;b.rX=1.0;AYu=b;b=new Bg;CP();A3q=b;A3s=new Bg;A3r=new Bg;AY2=new Bg;AZy=Fh();A3D=new Bg;AXN=new Bg;A3w=new Bg;}
let Bl=F();
let AX5=null;let A2f=null;let AY0=null;let A2i=null;let AYP=null;let AZl=null;let A0p=null;let AXz=null;let A0y=null;let AYO=null;let A02=null;let AY_=null;let AZk=null;let AXR=null;let AXr=null;let A1Z=null;let AZV=null;let AZn=null;let AYQ=null;let A1R=null;let AZm=null;let A29=null;let AZq=null;let A0F=null;let A22=null;let A0O=null;let AXh=null;let AXy=null;let A2e=null;let AZA=null;let A3T=null;let A1F=null;let A3i=null;let A0j=null;let A1W=null;let A30=null;let AZ4=null;let A0c=null;let AXC=null;let A2q
=null;let A3V=null;let A3p=null;let A1K=null;let A3X=null;let D1=()=>{D1=X(Bl);AH2();}
let AH2=()=>{let b,c;b=new R8;D1();AX5=b;A2f=new RZ;AY0=new RY;b=new R1;A2i=b;AYP=b;b=new E2;b.pA=2;AZl=b;b=new H$;b.pA=2;A0p=b;AXz=b;b=new H3;b.pA=2;A0y=b;AYO=b;A02=new R0;AY_=new R3;b=new E2;b.pA=3;AZk=b;b=new H$;b.pA=3;AXR=b;b=new H3;b.pA=3;AXr=b;A1Z=new R2;AZV=new R5;b=new E2;b.pA=4;AZn=b;b=new H$;b.pA=4;AYQ=b;b=new H3;b.pA=4;A1R=b;b=new E2;b.pA=5;AZm=b;b=new H$;b.pA=5;A29=b;b=new H3;b.pA=5;AZq=b;A0F=new R4;A22=new Rk;A0O=new Rm;b=new GU;b.tT=2.0;b.ub=10.0;c=Ju(2.0,(-10.0));b.uD=c;b.ud=1.0/(1.0-c);AXh=b;b
=new QB;b.tT=2.0;b.ub=10.0;c=Ju(2.0,(-10.0));b.uD=c;b.ud=1.0/(1.0-c);AXy=b;b=new TM;AA8(b,2.0,10.0);A2e=b;AZA=AYI(2.0,5.0);A3T=AZh(2.0,5.0);A1F=A1l(2.0,5.0);A3i=AZ3();A0j=AZv();A1W=A2r();A30=A2j(2.0,10.0,7,1.0);AZ4=AY4(2.0,10.0,6,1.0);A0c=A1D(2.0,10.0,7,1.0);AXC=AZN(1.5);A2q=A3A(2.0);A3V=A1m(2.0);A3p=A0d(4);A1K=A0$(4);A3X=AYU(4);}
function VJ(){Bl.call(this);this.C$=0.0;}
let A3A=a=>{let b=new VJ();AK8(b,a);return b;}
let AK8=(a,b)=>{D1();a.C$=b;}
let YI=F();
let R2=F(Bl);
let AEe=F();
function E2(){Bl.call(this);this.pA=0;}
let H$=F(E2);
let H3=F(E2);
let JL=F(0);
let Wf=F();
let R5=F(Bl);
let AC4=F();
let R1=F(Bl);
function H5(){let a=this;Bl.call(a);a.yg=0.0;a.wD=0.0;a.wK=0.0;a.xc=0.0;}
let A2j=(a,b,c,d)=>{let e=new H5();ANG(e,a,b,c,d);return e;}
let ANG=(a,b,c,d,e)=>{D1();a.yg=b;a.wD=c;a.wK=e;a.xc=d*3.1415927410125732*(d%2|0?(-1):1);}
let R0=F(Bl);
let RZ=F(Bl);
let JA=F();
let AWQ=null;let AWU=null;let AWT=null;let AJS=()=>{AWQ=new Bu;AWU=new Bu;AWT=new Bu;}
let Ug=F(Dk);
let Jm=F(0);
function Bu(){let a=this;C.call(a);a.sg=0.0;a.sf=0.0;}
let AGW=null;let AGV=null;let AMm=null;let AJj=()=>{let b;b=new Bu;b.sg=1.0;b.sf=0.0;AGW=b;b=new Bu;b.sg=0.0;b.sf=1.0;AGV=b;b=new Bu;b.sg=0.0;b.sf=0.0;AMm=b;}
let AAO=F(Bl);
let AZv=()=>{let a=new AAO();AQr(a);return a;}
let AQr=a=>{D1();}
function GU(){let a=this;Bl.call(a);a.tT=0.0;a.ub=0.0;a.uD=0.0;a.ud=0.0;}
let AYI=(a,b)=>{let c=new GU();AA8(c,a,b);return c;}
let AA8=(a,b,c)=>{D1();a.tT=b;a.ub=c;c=Ju(b, -c);a.uD=c;a.ud=1.0/(1.0-c);}
let Z$=F();
let R8=F(Bl);
let TM=F(GU);
let A1l=(a,b)=>{let c=new TM();AMN(c,a,b);return c;}
let AMN=(a,b,c)=>{D1();a.tT=b;a.ub=c;c=Ju(b, -c);a.uD=c;a.ud=1.0/(1.0-c);}
let XH=F();
let EU=F(By);
let AYV=null;let AZY=null;let A2y=null;let A08=null;let A2h=()=>{A2h=X(EU);AVg();}
let AVg=()=>{let b,c,d;b=new EU;A2h();b.m9=B(37);b.m6=0;AYV=b;c=new EU;c.m9=B(38);c.m6=1;AZY=c;d=new EU;d.m9=B(39);d.m6=2;A2y=d;A08=N(EU,[b,c,d]);}
let QN=F();
let A3t=null;let A5t=()=>{A5t=X(QN);ANY();}
let ANY=()=>{let b;b=new Bg;CP();A3t=b;}
function Iu(){let a=this;Bl.call(a);a.B_=null;a.BH=null;}
let AYU=a=>{let b=new Iu();PJ(b,a);return b;}
let PJ=(a,b)=>{let c,d,e,f,g;D1();if(b>=2&&b<=5){d:{c=B9(b);a.B_=c;d=B9(b);e=d.data;a.BH=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break d;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break d;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break d;default:break d;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bc;g=new I;g.mY=H(16);G(g,g.mW,B(40));J(g,g.mW,b,10);g=U(g);f.mZ=1;f.m0=1;f.m1=g;D(f);}
let YW=F(Iu);
let A0$=a=>{let b=new YW();ANR(b,a);return b;}
let ANR=(a,b)=>{PJ(a,b);}
let Rk=F(Bl);
let AAz=F();
let RY=F(Bl);
function D$(){let a=this;C.call(a);a.tO=0.0;a.tN=0.0;a.tP=0.0;a.tM=0.0;}
let A2R=null;let A2O=null;let A2P=null;let A2Q=null;let AYJ=null;let A1H=()=>{A1H=X(D$);AWr();}
let AWr=()=>{let b;b=new D$;A1H();b.tO=1.0;b.tN=0.0;b.tP=0.0;b.tM=0.0;A2R=b;b=new D$;b.tO=0.0;b.tN=1.0;b.tP=0.0;b.tM=0.0;A2O=b;b=new D$;b.tO=0.0;b.tN=0.0;b.tP=1.0;b.tM=0.0;A2P=b;b=new D$;b.tO=0.0;b.tN=0.0;b.tP=0.0;b.tM=1.0;A2Q=b;b=new D$;b.tO=0.0;b.tN=0.0;b.tP=0.0;b.tM=0.0;AYJ=b;}
let Ve=F(H5);
let AY4=(a,b,c,d)=>{let e=new Ve();AGN(e,a,b,c,d);return e;}
let AGN=(a,b,c,d,e)=>{D1();a.yg=b;a.wD=c;a.wK=e;a.xc=d*3.1415927410125732*(d%2|0?(-1):1);}
function Ym(){Bl.call(this);this.BR=0.0;}
let AZN=a=>{let b=new Ym();AHQ(b,a);return b;}
let AHQ=(a,b)=>{D1();a.BR=b*2.0;}
let V7=F();
let AE0=F();
let R3=F(Bl);
function ADS(){Bl.call(this);this.Cl=0.0;}
let A1m=a=>{let b=new ADS();AOl(b,a);return b;}
let AOl=(a,b)=>{D1();a.Cl=b;}
let AAP=F(Bl);
let A2r=()=>{let a=new AAP();AOG(a);return a;}
let AOG=a=>{D1();}
let Yh=F(H5);
let A1D=(a,b,c,d)=>{let e=new Yh();AJF(e,a,b,c,d);return e;}
let AJF=(a,b,c,d,e)=>{D1();a.yg=b;a.wD=c;a.wK=e;a.xc=d*3.1415927410125732*(d%2|0?(-1):1);}
let Kj=F();
let AZo=null;let AXL=null;let A3F=null;let A5u=()=>{A5u=X(Kj);AGl();}
let AGl=()=>{let b,c,d,e,f,g;AZo=Bf(Bg,15);b=Bf(Bg,8);AXL=b;c=Bf(Bg,9);d=c.data;A3F=c;e=0;f=d.length;while(e<f){g=new Bg;CP();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bg;CP();b[e]=g;e=e+1|0;}}
function KH(){let a=this;C.call(a);a.z0=null;a.z8=null;a.zG=null;a.z9=null;}
let AZd=null;let A32=()=>{A32=X(KH);ATa();}
let ABf=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.z0;e=b.m_;f=c.m_;if(e<f)f=e;e=b.nb;g=c.nb;if(e<g)g=e;e=b.na;h=c.na;if(e<h)h=e;d.m_=f;d.nb=g;d.na=h;i=a.z8;e=b.m_;g=c.m_;if(e>g)g=e;e=b.nb;h=c.nb;if(e>h)h=e;e=b.na;f=c.na;if(e>f)f=e;i.m_=g;i.nb=h;i.na=f;b=a.zG;h=d.m_;j=d.nb;k=d.na;b.m_=h;b.nb=j;b.na=k;e=i.m_;f=i.nb;g=i.na;h=h+e;j=j+f;k=k+g;b.m_=h;b.nb=j;b.na=k;f=h*0.5;g=j*0.5;e=k*0.5;b.m_=f;b.nb=g;b.na=e;b=a.z9;g=i.m_;h=i.nb;j=i.na;b.m_=g;b.nb=h;b.na=j;e=d.m_;f=d.nb;k=d.na;g=g-e;e=h-f;f=j-k;b.m_=g;b.nb=e;b.na=f;return a;}
let ATa=()=>{let b;b=new Bg;CP();AZd=b;}
function LD(){let a=this;C.call(a);a.BL=null;a.CO=null;}
let AXF=null;let A1f=()=>{A1f=X(LD);ATq();}
let ATq=()=>{let b;b=new Bg;CP();AXF=b;}
let Wh=F();
let UC=F();
let ABN=F();
let Yk=F();
let RK=F();
let AZ_=null;let AQQ=()=>{AQQ=X(RK);ANx();}
let ZK=b=>{AQQ();return Oq.data[(b*2607.594482421875|0)&16383];}
let Le=b=>{let c;AQQ();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let ANx=()=>{let b,c,d,e;b=new Ra;c=K$(CT(K(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),K(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(CN(c,Bi))c=E(0, 2147483648);d=V(Cu(c,Y(c,33)),E(3981806797, 4283543511));d=V(Cu(d,Y(d,33)),E(444984403, 3301882366));e=Cu(d,Y(d,33));d=V(Cu(e,Y(e,33)),E(3981806797, 4283543511));d=V(Cu(d,Y(d,33)),E(444984403, 3301882366));d=Cu(d,Y(d,33));b.Bn=e;b.Bo=d;AZ_=b;}
let Cl=F();
let AXo=null;let AXp=null;let AXq=null;let AYM=null;let A2I=null;let A0G=null;let AXX=null;let AXY=null;let A0x=null;let A0v=null;let AZI=null;let AZJ=null;let AZK=null;let AZL=null;let A0z=null;let A0w=null;let A0L=null;let AZ2=null;let A17=null;let AZ0=null;let A28=null;let A27=null;let A26=null;let A0g=null;let A5v=()=>{A5v=X(Cl);AJQ();}
let AJQ=()=>{let b,c;b=new Bg;CP();AXo=b;AXp=new Bg;AXq=new Bg;b=new JU;b.wc=1;b.n$=B9(16);AYM=b;b=new JU;b.wc=1;b.n$=B9(16);A2I=b;A0G=new Bu;AXX=new Bu;AXY=new Bu;A0x=new Bu;A0v=new Bu;AZI=new Bu;AZJ=new Bu;AZK=new Bu;AZL=new Bu;b=new J3;c=new Bg;b.qJ=c;b.rt=0.0;c.m_=0.0;c.nb=0.0;c.na=0.0;b.rt=0.0;A0z=b;A0w=new Bg;A0L=new Bg;AZ2=new Bg;A17=new Bg;AZ0=new Bg;A28=new Bg;A27=new Bg;A26=new Bg;A0g=new Bg;}
let Vm=F();
let Xv=F(Iu);
let A0d=a=>{let b=new Xv();APR(b,a);return b;}
let APR=(a,b)=>{PJ(a,b);}
function DO(){C.call(this);this.ov=null;}
let AGY=null;let A0S=null;let A2X=null;let Qe=null;let LC=null;let YP=null;let AU4=null;let AIM=null;let A1s=null;let A31=null;let A1u=null;let GL=()=>{GL=X(DO);AGL();}
let Fh=()=>{let a=new DO();ACe(a);return a;}
let ACe=a=>{let b,c;GL();b=B9(16);c=b.data;a.ov=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;}
let M$=(a,b)=>{return FT(a,b.ov);}
let FT=(a,b)=>{let c;c=b.data;b=a.ov.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;}
let Q2=(a,b)=>{let c,d,e,f,g;GL();c=AGY;d=c.data;e=a.ov.data;f=e[0];g=b.ov.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]
*g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return FT(a,c);}
let K8=a=>{let b;b=a.ov.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;}
let AAh=(a,b,c,d,e)=>{Q_(a,b,b+d,c,c+e,0.0,1.0);return a;}
let Q_=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;K8(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.ov.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;}
let W0=(a,b,c)=>{let d,e,f,g,h,i;GL();d=Qe;e=b.m_;f=b.nb;g=b.na;d.m_=e;d.nb=f;d.na=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/G0(f);f=d.m_*e;g=d.nb*e;e=d.na*e;d.m_=f;d.nb=g;d.na=e;}d=LC;e=b.m_;f=b.nb;g=b.na;d.m_=e;d.nb=f;d.na=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/G0(f);f=d.m_*e;g=d.nb*e;e=d.na*e;d.m_=f;d.nb=g;d.na=e;}b=O6(LC,c);e=b.m_;e=e*e;f=b.nb;e=e+f*f;f=b.na;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/G0(e);h=b.m_*g;e=b.nb*g;f=b.na*g;b.m_=h;b.nb=e;b.na=f;}b=YP;c=LC;e=c.m_;f=c.nb;g=c.na;b.m_=e;b.nb=f;b.na=g;b
=O6(b,Qe);e=b.m_;e=e*e;f=b.nb;e=e+f*f;f=b.na;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/G0(f);f=b.m_*e;g=b.nb*e;e=b.na*e;b.m_=f;b.nb=g;b.na=e;}K8(a);i=a.ov.data;b=LC;i[0]=b.m_;i[4]=b.nb;i[8]=b.na;b=YP;i[1]=b.m_;i[5]=b.nb;i[9]=b.na;b=Qe;i[2]= -b.m_;i[6]= -b.nb;i[10]= -b.na;return a;}
let Up=(b,c)=>{let d,e,f;GL();d=b.data;c=c.data;e=B9(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]
*c[5]+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];B$(e,0,b,0,16);}
let ADU=b=>{GL();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]
*b[10]*b[15]+b[0]*b[5]*b[10]*b[15];}
let Xd=b=>{let c,d,e;GL();c=B9(16);d=ADU(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;}
let Yw=(b,c,d)=>{let e,f,g,h,i,j,k,l;GL();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;}
let AGL=()=>{let b;AGY=B9(16);b=new EG;Sf();b.rY=0.0;b.rV=0.0;b.rW=0.0;b.rX=1.0;A0S=b;b=new EG;b.rY=0.0;b.rV=0.0;b.rW=0.0;b.rX=1.0;A2X=b;b=new Bg;CP();Qe=b;LC=new Bg;YP=new Bg;AU4=new Bg;AIM=Fh();A1s=new Bg;A31=new Bg;A1u=new Bg;}
let OD=F(0);
let H2=F();
function Ra(){let a=this;H2.call(a);a.Bn=Bi;a.Bo=Bi;}
let AAN=F(Bl);
let AZ3=()=>{let a=new AAN();AVj(a);return a;}
let AVj=a=>{D1();}
let R4=F(Bl);
function JO(){let a=this;C.call(a);a.r7=null;a.qI=null;a.v5=null;}
let A3Z=null;let AUR=null;let A1h=null;let ANn=()=>{ANn=X(JO);AN4();}
let A1P=()=>{let a=new JO();UF(a);return a;}
let UF=a=>{let b,c,d,e,f,g;ANn();b=Bf(J3,6);c=b.data;a.r7=b;b=Bf(Bg,8);d=b.data;e=new Bg;CP();d[0]=e;d[1]=new Bg;d[2]=new Bg;d[3]=new Bg;d[4]=new Bg;d[5]=new Bg;d[6]=new Bg;d[7]=new Bg;a.qI=b;a.v5=B9(24);f=0;while(f<6){e=new J3;g=new Bg;e.qJ=g;e.rt=0.0;g.m_=0.0;g.nb=0.0;g.na=0.0;e.rt=0.0;c[f]=e;f=f+1|0;}}
let AA6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;ANn();c=AUR;d=c.data;B$(c,0,a.v5,0,d.length);c=b.ov;e=a.v5;f=0;GL();g=0;while(g<8){Yw(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.qI.data[f];c=a.v5.data;j=h+1|0;i.m_=c[h];g=j+1|0;i.nb=c[j];h=g+1|0;i.na=c[g];f=f+1|0;}b=a.r7.data[0];c=a.qI.data;i=c[1];k=c[0];l=c[2];m=b.qJ;n=i.m_;o=i.nb;p=i.na;m.m_=n;m.nb=o;m.na=p;q=k.m_;r=k.nb;s=k.na;q=n-q;o=o-r;n=p-s;m.m_=q;m.nb=o;m.na=n;p=k.m_-l.m_;r=k.nb-l.nb;s=k.na-l.na;t=o*s-n*r;s=n*p-q*s;q=q*r-o*p;m.m_=t;m.nb=s;m.na
=q;p=t*t+s*s+q*q;if(p!==0.0&&p!==1.0){o=1.0/G0(p);p=m.m_*o;q=m.nb*o;o=m.na*o;m.m_=p;m.nb=q;m.na=o;}k=b.qJ;b.rt= -(i.m_*k.m_+i.nb*k.nb+i.na*k.na);b=a.r7.data[1];c=a.qI.data;i=c[4];k=c[5];l=c[7];m=b.qJ;r=i.m_;s=i.nb;n=i.na;m.m_=r;m.nb=s;m.na=n;o=k.m_;p=k.nb;q=k.na;o=r-o;p=s-p;q=n-q;m.m_=o;m.nb=p;m.na=q;AFe(Z6(m,k.m_-l.m_,k.nb-l.nb,k.na-l.na));b.rt= -ADE(i,b.qJ);b=a.r7.data[2];c=a.qI.data;Jn(b,c[0],c[4],c[3]);b=a.r7.data[3];c=a.qI.data;Jn(b,c[5],c[1],c[6]);b=a.r7.data[4];c=a.qI.data;Jn(b,c[2],c[3],c[6]);b=a.r7.data[5];c
=a.qI.data;Jn(b,c[4],c[0],c[1]);}
let AN4=()=>{let b,c,d,e,f,g,h,i,j;b=Bf(Bg,8);c=b.data;d=new Bg;CP();d.m_=(-1.0);d.nb=(-1.0);d.na=(-1.0);c[0]=d;d=new Bg;d.m_=1.0;d.nb=(-1.0);d.na=(-1.0);c[1]=d;d=new Bg;d.m_=1.0;d.nb=1.0;d.na=(-1.0);c[2]=d;d=new Bg;d.m_=(-1.0);d.nb=1.0;d.na=(-1.0);c[3]=d;d=new Bg;d.m_=(-1.0);d.nb=(-1.0);d.na=1.0;c[4]=d;d=new Bg;d.m_=1.0;d.nb=(-1.0);d.na=1.0;c[5]=d;d=new Bg;d.m_=1.0;d.nb=1.0;d.na=1.0;c[6]=d;d=new Bg;d.m_=(-1.0);d.nb=1.0;d.na=1.0;c[7]=d;A3Z=b;b=B9(24);e=b.data;AUR=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1
|0;e[f]=d.m_;j=i+1|0;e[i]=d.nb;f=j+1|0;e[j]=d.na;h=h+1|0;}A1h=new Bg;}
function EG(){let a=this;C.call(a);a.rY=0.0;a.rV=0.0;a.rW=0.0;a.rX=0.0;}
let AZ6=null;let AZ5=null;let Sf=()=>{Sf=X(EG);AMJ();}
let AMJ=()=>{let b;b=new EG;Sf();b.rY=0.0;b.rV=0.0;b.rW=0.0;b.rX=0.0;AZ6=b;b=new EG;b.rY=0.0;b.rV=0.0;b.rW=0.0;b.rX=0.0;AZ5=b;}
let Uc=F();
let AAT=F();
function Bg(){let a=this;C.call(a);a.m_=0.0;a.nb=0.0;a.na=0.0;}
let AYD=null;let AYE=null;let AYC=null;let A04=null;let A3B=null;let CP=()=>{CP=X(Bg);AHi();}
let AFe=a=>{let b,c,d;b=a.m_;b=b*b;c=a.nb;b=b+c*c;c=a.na;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/G0(c);c=a.m_*b;d=a.nb*b;b=a.na*b;a.m_=c;a.nb=d;a.na=b;return a;}return a;}
let ADE=(a,b)=>{return a.m_*b.m_+a.nb*b.nb+a.na*b.na;}
let O6=(a,b)=>{let c,d,e,f,g,h,i;c=a.nb;d=b.na;e=c*d;f=a.na;g=b.nb;h=e-f*g;e=b.m_;f=f*e;i=a.m_;d=f-i*d;c=i*g-c*e;a.m_=h;a.nb=d;a.na=c;return a;}
let Z6=(a,b,c,d)=>{let e,f,g,h;e=a.nb;f=e*d;g=a.na;h=f-g*c;g=g*b;f=a.m_;d=g-f*d;b=f*c-e*b;a.m_=h;a.nb=d;a.na=b;return a;}
let AHi=()=>{let b;b=new Bg;CP();b.m_=1.0;b.nb=0.0;b.na=0.0;AYD=b;b=new Bg;b.m_=0.0;b.nb=1.0;b.na=0.0;AYE=b;b=new Bg;b.m_=0.0;b.nb=0.0;b.na=1.0;AYC=b;b=new Bg;b.m_=0.0;b.nb=0.0;b.na=0.0;A04=b;A3B=Fh();}
let XL=F();
let WO=F(Dk);
let QB=F(GU);
let AZh=(a,b)=>{let c=new QB();APZ(c,a,b);return c;}
let APZ=(a,b,c)=>{D1();a.tT=b;a.ub=c;c=Ju(b, -c);a.uD=c;a.ud=1.0/(1.0-c);}
let ABd=F();
let Vw=F();
let ADf=F();
function J3(){let a=this;C.call(a);a.qJ=null;a.rt=0.0;}
let Jn=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=a.qJ;f=b.m_;g=b.nb;h=b.na;e.m_=f;e.nb=g;e.na=h;i=c.m_;j=c.nb;k=c.na;f=f-i;g=g-j;k=h-k;e.m_=f;e.nb=g;e.na=k;h=c.m_-d.m_;j=c.nb-d.nb;l=c.na-d.na;i=g*l-k*j;k=k*h-f*l;f=f*j-g*h;e.m_=i;e.nb=k;e.na=f;f=i*i+k*k+f*f;if(f!==0.0&&f!==1.0){k=1.0/G0(f);f=e.m_*k;g=e.nb*k;k=e.na*k;e.m_=f;e.nb=g;e.na=k;}c=a.qJ;a.rt= -(b.m_*c.m_+b.nb*c.nb+b.na*c.na);}
let Rm=F(Bl);
let ADh=F();
let Vy=F();
let ABI=F();
let ADe=F();
let AAu=F(0);
let XS=F();
let Sb=F();
let Oq=null;let WE=()=>{let b,c;Oq=B9(16384);b=0;while(b<16384){Oq.data[b]=SW((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=Oq.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);}
function Dw(){let a=this;C.call(a);a.oD=null;a.oh=null;a.oZ=0;a.xQ=0.0;a.vy=0.0;}
let FO=null;let Iq=null;let Eh=()=>{Eh=X(Dw);Wq();}
let A5w=()=>{let a=new Dw();Tw(a);return a;}
let A5x=(a,b)=>{let c=new Dw();Og(c,a,b);return c;}
let A5y=(a,b,c,d,e,f)=>{let g=new Dw();R6(g,a,b,c,d,e,f);return g;}
let A5z=(a,b,c,d,e,f,g,h,i)=>{let j=new Dw();Sn(j,a,b,c,d,e,f,g,h,i);return j;}
let Tw=a=>{let b;Eh();b=new B7;b.nZ=1;b.ne=Bf(C,1);a.oD=b;b=new DE;b.pu=1;b.n1=Q(2);a.oh=b;}
let Og=(a,b,c)=>{let d;Eh();d=new B7;d.nZ=1;d.ne=Bf(C,1);a.oD=d;d=new DE;d.pu=1;d.n1=Q(2);a.oh=d;Hn(a,b,c,0,c.X(),b.Y(),0.0,8,0,null);}
let R6=(a,b,c,d,e,f,g)=>{let h;Eh();h=new B7;h.nZ=1;h.ne=Bf(C,1);a.oD=h;h=new DE;h.pu=1;h.n1=Q(2);a.oh=h;Hn(a,b,c,0,c.X(),d,e,f,g,null);}
let Sn=(a,b,c,d,e,f,g,h,i,j)=>{let k;Eh();k=new B7;k.nZ=1;k.ne=Bf(C,1);a.oD=k;k=new DE;k.pu=1;k.n1=Q(2);a.oh=k;Hn(a,b,c,d,e,f,g,h,i,j);}
let Hn=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;SZ(a);k=b.uW;if(d==e){a.vy=k.qp;return;}if(i)g=J9(g,k.yk*3.0);l=!i&&j===null?0:1;m=Kh(f);AD4(a.oh,0,m);n=k.t5;if(n)Fs(Iq,m);o=0;p=0.0;q=k.uY;r=null;s=null;t=m;u=d;e:{f:{g:while(true){h:{v=0;if(d==e){if(u==e)break e;o=1;w=e;}else{i=d+1|0;if(d<0)break f;if(d>=c.mX.length)break f;i:{switch(c.mX.charCodeAt(d)){case 10:w=i-1|0;v=1;d=i;break h;case 91:if(!n){d=i;break i;}x=RL(a,c,i,e);if(x>=0){w=i-1|0;d=i+(x+1|0)|0;if(d==e){o=1;break h;}m
=Qw(Iq);break h;}if(x!=(-2)){d=i;break i;}d=i+1|0;break i;default:}d=i;}continue g;}}b=FO;f=b.pf;i=f.m7;if(!i)b=P6(b);else{if(!i){b=new BK;b.mZ=1;b.m0=1;b.m1=B(41);D(b);}i=i-1|0;f.m7=i;y=f.ne.data;b=y[i];y[i]=null;}z=b;z.p0=0.0;z.vB=p;OI(k,z,c,u,w,s);a.oZ=a.oZ+z.nY.m7|0;if(m!=t){b=a.oh;i=Gg(b,b.nD-2|0);ba=a.oZ;if(i!=ba){Fs(a.oh,ba);Fs(a.oh,m);}else{b=a.oh;Jx(b,b.nD-1|0,m);}t=m;}j:{if(!z.nY.m7){IS(FO,z);if(r===null)break j;}else if(r!==null){NN(r,z);IS(FO,z);}else{CH(a.oD,z);r=z;}if(!v&&!o){b=r.nY;ba=b.m7;if
(!ba)break g;s=b.ne.data[ba-1|0];}else{Mv(a,k,r);s=null;}if(l&&r.nY.m7&&!(!v&&!o)){bb=Pq(r.n_)+OU(r.n_,1);bc=2;while(bc<r.n_.nW){b=r.nY;i=bc-1|0;if(bb+KY(a,AD_(b,i),k)-9.999999747378752E-5<=g)bb=bb+r.n_.n$.data[bc];else{if(j!==null){N4(a,k,r,g,j);break e;}ba=T_(k,r.nY,bc);if(!(!ba&&r.p0===0.0)&&ba<r.nY.m7)i=ba;r=Sz(a,k,r,i);if(r===null)break j;CH(a.oD,r);p=p+q;r.p0=0.0;r.vB=p;bb=Pq(r.n_)+OU(r.n_,1);bc=1;}bc=bc+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.zn;}u=d;}b=new BK;AD8(b,B(41));D(b);}b=new S;b.mZ=1;b.m0
=1;D(b);}a.vy=k.qp+IK(p);Pf(a,k);Q7(a,g,h);if(n)Iq.nD=0;}
let Pf=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=0.0;d=a.oD;e=d.ne;f=0;g=d.m7;while(f<g){d=e.data[f];h=d.n_.n$.data;i=d.p0+h[0];j=0.0;k=d.nY;l=k.ne;m=0;n=k.m7;while(m<n){k=l.data[m];j=J9(j,i+(k.oY+k.pv|0)*b.rj-b.rI);m=m+1|0;i=i+h[m];}i=J9(i,j);j=d.p0;i=i-j;d.wf=i;c=J9(c,j+i);f=f+1|0;}a.xQ=c;}
let Q7=(a,b,c)=>{let d,e,f,g,h;b:{if(!(c&8)){d=!(c&1)?0:1;e=a.oD;f=e.ne;g=0;h=e.m7;while(true){if(g>=h)break b;e=f.data[g];e.p0=e.p0+(!d?b-e.wf:0.5*(b-e.wf));g=g+1|0;}}}}
let N4=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;f=c.nY.m7;Eh();g=FO;h=g.pf;i=h.m7;if(i){if(!i){b=new BK;b.mZ=1;b.m0=1;b.m1=B(41);D(b);}i=i-1|0;h.m7=i;j=h.ne.data;h=j[i];j[i]=null;}else k:{try{h=Nb(g.qe,null);break k;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){c=$$je;}else{throw $$e;}}e=new W;b=new I;b.mY=H(16);G(b,b.mW,B(42));g=g.qe.p4.pV;if(g.nB===null)g.nB=Be(g.nn.$meta.name);h=g.nB;G(b,b.mW,h);b=U(b);e.mZ=1;e.m0=1;e.m1=b;e.oy=c;D(e);}k=h;OI(b,k,e,0,e.X(),null);l=0.0;g=k.n_;m=g.nW;if(m>0){h=
k.nY;n=h.m7;if(!n){b=new BK;b.mZ=1;b.m0=1;b.m1=B(41);D(b);}h=h.ne.data[n-1|0];if(!h.uB)g.n$.data[m-1|0]=(h.oY+h.pv|0)*b.rj-b.rI;j=g.n$;o=1;while(o<m){l=l+j.data[o];o=o+1|0;}}d=d-l;n=0;p=c.p0;q=c.n_;j=q.n$;l:{while(true){if(n>=q.nW)break l;p=p+j.data[n];if(p>d)break;n=n+1|0;}}if(n<=1){r=c.nY;j=r.ne;i=0;n=r.m7;h=null;if(i>n){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(i<n){s=j.data;o=i+1|0;s[i]=h;i=o;}r.m7=0;q.nW=0;KA(q,g.n$,0,g.nW);}else{NJ(c.nY,n-1|0);h=c.n_;if(h.nW>n)h.nW=n;h=AEy(c.nY);if(!h.uB){g=c.n_;g.n$.data[g.nW
-1|0]=KY(a,h,b);}h=k.n_;i=h.nW;if(i>0)SP(c.n_,h,1,i-1|0);}m:{i=f-c.nY.m7|0;if(i>0){a.oZ=a.oZ-i|0;if(b.t5)while(true){b=a.oh;i=b.nD;if(i<=2)break m;if(Gg(b,i-2|0)<a.oZ)break m;b=a.oh;b.nD=b.nD-2|0;}}}X7(c.nY,k.nY);a.oZ=a.oZ+e.X()|0;IS(FO,k);}
let Sz=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.nY;f=e.m7;g=c.n_;h=d;b:{while(true){if(h<=0)break b;i=h-1|0;if(i>=f)break;n:{switch(e.ne.data[i].qN&65535){case 9:case 10:case 13:case 32:break;default:i=0;break n;}i=1;}if(!i)break b;h=h+(-1)|0;}c=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,i,10);G(b,b.mW,B(36));d=e.m7;J(b,b.mW,d,10);b=U(b);c.mZ=1;c.m0=1;c.m1=b;D(c);}o:{while(true){j=BJ(d,f);if(j>=0)break o;if(j>=0)break;l:{switch(e.ne.data[d].qN&65535){case 9:case 10:case 13:case 32:break;default:i
=0;break l;}i=1;}if(!i)break o;d=d+1|0;}c=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,d,10);G(b,b.mW,B(36));d=e.m7;J(b,b.mW,d,10);b=U(b);c.mZ=1;c.m0=1;c.m1=b;D(c);}k=null;if(j>=0){NJ(e,h);j=h+1|0;if(g.nW>j)g.nW=j;l=d-h|0;if(l>0){a.oZ=a.oZ-l|0;if(b.t5){m=a.oh;if(Gg(m,m.nD-2|0)>a.oZ){n=Qw(a.oh);while(true){m=a.oh;d=Gg(m,m.nD-2|0);i=a.oZ;if(d<=i)break;m=a.oh;m.nD=m.nD-2|0;}m=a.oh;Jx(m,m.nD-2|0,i);m=a.oh;Jx(m,m.nD-1|0,n);}}}}else{Eh();o=FO;m=o.pf;i=m.m7;if(!i)m=P6(o);else{if(!i){b=new BK;b.mZ=1;b.m0=1;b.m1
=B(41);D(b);}i=i-1|0;m.m7=i;p=m.ne.data;m=p[i];p[i]=null;}p:{k=m;m=k.nY;Uu(m,e,0,h);WB(e,0,d-1|0);c.nY=m;k.nY=e;o=k.n_;SP(o,g,0,h+1|0);Uj(g,1,d);g.n$.data[0]=S9(a,e,b);c.n_=o;k.n_=g;i=c.nY.m7;j=k.nY.m7;l=(f-i|0)-j|0;d=a.oZ-l|0;a.oZ=d;if(b.t5&&l>0){q=d-j|0;r=a.oh.nD-2|0;while(true){if(r<2)break p;s=Gg(a.oh,r);if(s<=q)break;Jx(a.oh,r,s-l|0);r=r+(-2)|0;}}}}if(h)Mv(a,b,c);else{Eh();IS(FO,c);UG(a.oD);}return k;}
let Mv=(a,b,c)=>{let d,e;d=c.nY;e=d.m7;if(!e){b=new BK;b.mZ=1;b.m0=1;b.m1=B(41);D(b);}d=d.ne.data[e-1|0];if(!d.uB){c=c.n_;c.n$.data[c.nW-1|0]=(d.oY+d.pv|0)*b.rj-b.rI;}}
let KY=(a,b,c)=>{return (b.oY+b.pv|0)*c.rj-c.rI;}
let S9=(a,b,c)=>{if(b.m7)return ( -b.ne.data[0].pv|0)*c.rj-c.vX;c=new BK;c.mZ=1;c.m0=1;c.m1=B(41);D(c);}
let RL=(a,b,c,d)=>{let e,f,g,h;if(c==d)return (-1);if(c>=0&&c<b.mX.length){switch(b.mX.charCodeAt(c)){case 35:e=0;f=c+1|0;q:{while(true){if(f>=d)break q;if(f<0)break;if(f>=b.mX.length)break;g=b.mX.charCodeAt(f);if(g==93){if(f<(c+2|0))break q;if(f<=(c+9|0)){c=f-c|0;if(c<8)e=e<<((9-c|0)<<2)|255;Eh();b=Iq;d=((e&(-16711936))>>>8|0)|(e&16711935)<<8;Fs(b,(d>>>16|0)+(d<<16)|0);return c;}break q;}e=(e<<4)+g|0;if(g>=48&&g<=57)e=e+(-48)|0;else if(g>=65&&g<=70)e=e+(-55)|0;else{if(g<97)break q;if(g>102)break q;e=e+(-87)
|0;}f=f+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}return (-1);case 91:break;case 93:Eh();b=Iq;c=b.nD;if(c>1)b.nD=c-1|0;return 0;default:f=c+1|0;r:{while(f<d){if(f<0)break r;if(f>=b.mX.length)break r;if(b.mX.charCodeAt(f)==93){b=BR(b,c,f);AK3();h=BU;d=CF(h,b);h=d<0?null:h.oE.data[d];if(h===null)return (-1);Eh();Fs(Iq,Kh(h));return f-c|0;}f=f+1|0;}return (-1);}b=new S;b.mZ=1;b.m0=1;D(b);}return (-2);}b=new S;b.mZ=1;b.m0=1;D(b);}
let SZ=a=>{let b,c,d,e,f,g,h;Eh();AEw(FO,a.oD);b=a.oD;c=b.ne;d=0;e=b.m7;f=null;if(d>e){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m7=0;a.oh.nD=0;a.oZ=0;a.xQ=0.0;a.vy=0.0;}
let AA4=a=>{let b,c,d,e,f,g,h;if(!a.oD.m7)return B(43);b=new I;b.mY=H(128);c=a.xQ;DT(b,b.mW,c);d=b.mW;Bb(b,d,d+1|0);b.mY.data[d]=120;c=a.vy;DT(b,b.mW,c);d=b.mW;Bb(b,d,d+1|0);b.mY.data[d]=10;e=0;d=a.oD.m7;while(e<d){f=a.oD;if(e>=f.m7){g=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,e,10);G(b,b.mW,B(36));e=f.m7;J(b,b.mW,e,10);b=U(b);g.mZ=1;g.m0=1;g.m1=b;D(g);}f=NX(f.ne.data[e]);G(b,b.mW,f);h=b.mW;Bb(b,h,h+1|0);b.mY.data[h]=10;e=e+1|0;}b.mW=b.mW-1|0;return U(b);}
let Wq=()=>{let b,c,d,e,$$je;Py();b=Gs;c=CF(b,Br(Di));b=c<0?null:b.oE.data[c];if(b===null){b=new IQ;d=new B7;d.nZ=0;d.ne=Bf(C,4);b.pf=d;b.q6=100;c:{try{d=Rb(Br(Di),null);break c;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){}else{throw $$e;}}try{d=Pm(Br(Di),null);Mn(d,1);break c;}catch($$e){$$je=Bx($$e);if($$je instanceof DL){}else{throw $$e;}}d=null;}b.qe=d;if(d===null){b=new BC;d=new I;d.mY=H(16);G(d,d.mW,B(27));if(Br(Di).nB===null)Br(Di).nB=Be(Br(Di).nn.$meta.name);e=Br(Di).nB;G(d,d.mW,e);e=U(d);b.mZ=1;b.m0
=1;b.m1=e;D(b);}BE(Gs,Br(Di),b);}FO=b;e=new DE;e.pu=1;e.n1=Q(4);Iq=e;}
function GX(){let a=this;C.call(a);a.uq=null;a.A1=0.0;a.A3=0.0;a.C9=0.0;a.C8=0.0;a.v1=0;a.ww=0;}
let ACP=(a,b,c,d,e)=>{let f,g,h;f=a.uq.rE;g=1.0/f.qX;h=1.0/f.qM;Vx(a,b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.v1=d;if(e<0)e= -e|0;a.ww=e;}
let Vx=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.uq.rE;g=f.qX;h=f.qM;i=IK(d-b);j=g;i=i*j;a.v1=i+E7(i)*0.5|0;k=IK(e-c);i=h;k=k*i;l=k+E7(k)*0.5|0;a.ww=l;if(a.v1==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.A1=b;a.A3=c;a.C9=d;a.C8=e;}
let AAK=F(GX);
function ET(){let a=this;C.call(a);a.uW=null;a.q_=null;a.tf=null;a.BI=0;a.Be=0;a.AD=0;}
let A5A=(a,b,c)=>{let d=new ET();XP(d,a,b,c);return d;}
let XP=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n;a.BI=b.xb;a.uW=b;a.Be=d;if(c!==null&&c.m7){a.q_=c;a.AD=0;}else{e=b.s$;if(e===null){b=new Bc;b.mZ=1;b.m0=1;b.m1=B(44);D(b);}f=e.data.length;c=new B7;c.nZ=1;c.ne=Bf(C,f);a.q_=c;g=0;while(g<f){h=b.Au;if(h!==null){i=Qs;c=b.s$.data[g];j=h.tC;k=AR0(i.v3,c,j);}else{c=Qs;h=b.s$.data[g];k=new JY;i=c.v3;L2();Li(k,i,h,Tz);}c=a.q_;h=new GX;l=new Mx;m=null;j=A0o(k,ASg(k),m,0);i=B3;m=i.m4.createTexture();n=i.tD;i.tD=n+1|0;Ch(i.sk,n,Co(m));AJm();k=AOT;l.u7=k;l.wg=k;AFz();k=ASQ;l.uK
=k;l.vb=k;l.ye=1.0;l.qL=3553;l.xh=n;ADP(l,j);k=Eb;i=AEW;if(k===null){i=i.oQ.data[0];while(i!==null&&i.pc!==null){i=i.pm;}}else{d=T$(k);e=i.oQ.data;i=e[d&(e.length-1|0)];while(i!==null&&!(i.q7==d&&AHl(k,i.pc))){i=i.pm;}}i=i===null?null:i.pL;if(i===null){i=new B7;i.nZ=1;i.ne=Bf(C,16);}CH(i,l);J1(AEW,k,i);h.uq=l;k=l.rE;ACP(h,0,0,k.qX,k.qM);CH(c,h);g=g+1|0;}a.AD=1;}a.tf=A2J(a,a.Be);AE1(a,b);}
let AE1=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.rH.data;d=c.length;e=0;a:while(true){if(e>=d){f=b.wR;if(f!==null){g=a.q_;d=f.s1;if(d>=g.m7){f=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,d,10);G(b,b.mW,B(36));d=g.m7;J(b,b.mW,d,10);b=U(b);f.mZ=1;f.m0=1;f.m1=b;D(f);}NQ(b,f,g.ne.data[d]);}return;}k:{h=c[e];if(h!==null){h=h.data;i=h.length;j=0;while(true){if(j>=i)break k;g=h[j];if(g!==null){f=a.q_;k=g.s1;if(k>=f.m7)break a;NQ(b,g,f.ne.data[k]);}j=j+1|0;}}}e=e+1|0;}g=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,
k,10);G(b,b.mW,B(36));d=f.m7;J(b,b.mW,d,10);b=U(b);g.mZ=1;g.m0=1;g.m1=b;D(g);}
let IJ=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,$$je;AA7(a.tf);i=a.tf;j=c.mX.length;k=null;Py();l=Gs;m=CF(l,Br(Dw));n=m<0?null:l.oE.data[m];if(n===null){n=new IQ;l=new B7;CI(l);l.nZ=0;l.ne=Bf(C,4);n.pf=l;n.q6=100;n:{try{l=Rb(Br(Dw),null);break n;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){}else{throw $$e;}}try{l=Pm(Br(Dw),null);Mn(l,1);break n;}catch($$e){$$je=Bx($$e);if($$je instanceof DL){}else{throw $$e;}}l=null;}n.qe=l;if(l===null){b=new BC;c=new I;KB(c,16);CZ(c,c.mW,B(27));if(Br(Dw).nB===null)Br(Dw).nB
=Be(Br(Dw).nn.$meta.name);l=Br(Dw).nB;CZ(c,c.mW,l);c=U(c);b.mZ=1;b.m0=1;b.m1=c;D(b);}BE(Gs,Br(Dw),n);}l:{l=n.pf;o=l.m7;if(o){if(!o){b=new BK;b.mZ=1;b.m0=1;b.m1=B(41);D(b);}o=o-1|0;l.m7=o;p=l.ne.data;l=p[o];p[o]=null;}else try{l=Nb(n.qe,null);break l;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){c=$$je;l=new W;b=new I;CI(b);b.mY=H(16);G(b,b.mW,B(42));i=n.qe.p4.pV;if(i.nB===null)i.nB=Be(i.nn.$meta.name);q=i.nB;G(b,b.mW,q);Zv(l,U(b),c);D(l);}else{throw $$e;}}}l=l;CH(i.vk,l);Hn(l,i.s8,c,0,j,i.x_,f,g,h,k);AAf(i,
l,d,e+i.s8.uW.vl);WN(a.tf,b);return l;}
let RN=F();
let AX$=null;let A5B=()=>{A5B=X(RN);AVn();}
let AVn=()=>{let b;b=new Bn;EM();AX$=b;}
function Bn(){let a=this;C.call(a);a.oe=0.0;a.od=0.0;a.oc=0.0;a.ob=0.0;}
let W8=null;let AMu=null;let AQn=null;let AWJ=null;let Yu=null;let AA1=0.0;let AGP=null;let AVx=null;let AF1=null;let AUx=null;let AVa=null;let AQ9=null;let ATW=null;let ALL=null;let ALo=null;let ASl=null;let AVM=null;let AUp=null;let AW3=null;let AGK=null;let AM0=null;let AWZ=null;let APq=null;let AVY=null;let AU1=null;let ATR=null;let APn=null;let AGg=null;let AO5=null;let ALB=null;let AMA=null;let AK$=null;let AOZ=null;let ARN=null;let ASy=null;let EM=()=>{EM=X(Bn);AFG();}
let Du=a=>{let b,c;b=a.oe;if(b<0.0)a.oe=0.0;else if(b>1.0)a.oe=1.0;c=a.od;if(c<0.0)a.od=0.0;else if(c>1.0)a.od=1.0;c=a.oc;if(c<0.0)a.oc=0.0;else if(c>1.0)a.oc=1.0;c=a.ob;if(c<0.0)a.ob=0.0;else if(c>1.0)a.ob=1.0;return a;}
let AKv=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b!==null){c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new B6;d.nn=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new B6;c.nn=e;f=c;e.classObject=f;}}if(d===c){c=b;return Kh(a)!=Kh(c)?0:1;}}return 0;}
let AOE=a=>{let b,c,d;b=a.oe;c=31*(b===0.0?0:(isNaN(b)?1:0)?2143289344:Hz(b))|0;b=a.od;c=31*(c+(b===0.0?0:(isNaN(b)?1:0)?2143289344:Hz(b))|0)|0;d=a.oc;c=31*(c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:Hz(d))|0)|0;d=a.ob;return c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:Hz(d))|0;}
let ADI=a=>{return I0(((255.0*a.ob|0)<<24|(255.0*a.oc|0)<<16|(255.0*a.od|0)<<8|255.0*a.oe|0)&(-16777217));}
let Kh=a=>{return (255.0*a.ob|0)<<24|(255.0*a.oc|0)<<16|(255.0*a.od|0)<<8|255.0*a.oe|0;}
let AJT=a=>{let b,c;b=Bm((255.0*a.oe|0)<<24|(255.0*a.od|0)<<16|(255.0*a.oc|0)<<8|255.0*a.ob|0,4);while(b.mX.length<8){c=new I;c.mY=H(16);G(c,c.mW,B(45));G(c,c.mW,b);b=U(c);}return b;}
let Cd=(b,c)=>{EM();b.oe=((c&(-16777216))>>>24|0)/255.0;b.od=((c&16711680)>>>16|0)/255.0;b.oc=((c&65280)>>>8|0)/255.0;b.ob=(c&255)/255.0;}
let AFG=()=>{let b;b=new Bn;EM();b.oe=1.0;b.od=1.0;b.oc=1.0;b.ob=1.0;Du(b);W8=b;b=new Bn;Cd(b,(-1077952513));AMu=b;b=new Bn;Cd(b,2139062271);AQn=b;b=new Bn;Cd(b,1061109759);AWJ=b;b=new Bn;b.oe=0.0;b.od=0.0;b.oc=0.0;b.ob=1.0;Du(b);Yu=b;AA1=ADI(W8);b=new Bn;b.oe=0.0;b.od=0.0;b.oc=0.0;b.ob=0.0;Du(b);AGP=b;b=new Bn;b.oe=0.0;b.od=0.0;b.oc=1.0;b.ob=1.0;Du(b);AVx=b;b=new Bn;b.oe=0.0;b.od=0.0;b.oc=0.5;b.ob=1.0;Du(b);AF1=b;b=new Bn;Cd(b,1097458175);AUx=b;b=new Bn;Cd(b,1887473919);AVa=b;b=new Bn;Cd(b,(-2016482305));AQ9
=b;b=new Bn;b.oe=0.0;b.od=1.0;b.oc=1.0;b.ob=1.0;Du(b);ATW=b;b=new Bn;b.oe=0.0;b.od=0.5;b.oc=0.5;b.ob=1.0;Du(b);ALL=b;b=new Bn;Cd(b,16711935);ALo=b;b=new Bn;Cd(b,2147418367);ASl=b;b=new Bn;Cd(b,852308735);AVM=b;b=new Bn;Cd(b,579543807);AUp=b;b=new Bn;Cd(b,1804477439);AW3=b;b=new Bn;Cd(b,(-65281));AGK=b;b=new Bn;Cd(b,(-2686721));AM0=b;b=new Bn;Cd(b,(-626712321));AWZ=b;b=new Bn;Cd(b,(-5963521));APq=b;b=new Bn;Cd(b,(-1958407169));AVY=b;b=new Bn;Cd(b,(-759919361));AU1=b;b=new Bn;Cd(b,(-1306385665));ATR=b;b=new Bn;Cd(b,
(-16776961));APn=b;b=new Bn;Cd(b,(-13361921));AGg=b;b=new Bn;Cd(b,(-8433409));AO5=b;b=new Bn;Cd(b,(-92245249));ALB=b;b=new Bn;Cd(b,(-9849601));AMA=b;b=new Bn;b.oe=1.0;b.od=0.0;b.oc=1.0;b.ob=1.0;Du(b);AK$=b;b=new Bn;Cd(b,(-1608453889));AOZ=b;b=new Bn;Cd(b,(-293409025));ARN=b;b=new Bn;Cd(b,(-1339006721));ASy=b;}
function Kk(){let a=this;C.call(a);a.qL=0;a.xh=0;a.u7=null;a.wg=null;a.uK=null;a.vb=null;a.ye=0.0;}
let MR=0.0;let ABC=(a,b,c,d)=>{if(b!==null&&!(!d&&a.uK===b)){B3.b4(a.qL,10242,b.uF);a.uK=b;}if(c!==null&&!(!d&&a.vb===c)){B3.b4(a.qL,10243,c.uF);a.vb=c;}}
let Uf=(a,b,c,d)=>{if(b!==null&&!(!d&&a.u7===b)){B3.b4(a.qL,10241,b.qr);a.u7=b;}if(c!==null&&!(!d&&a.wg===c)){B3.b4(a.qL,10240,c.qr);a.wg=c;}}
let XF=()=>{let b,c,d,e,f;b=MR;if(b>0.0)return b;if(!(BM.sl.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){MR=1.0;return 1.0;}if(!Dn){c=B9(16);d=c.data.length;e=new Ig;f=0+d|0;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=f;e.s9=0;e.tZ=0;e.sB=c;}else{e=new Cm;c=Bz(64);e.nd=(-1);e.ni=64;e.m2=64;B5();e.nE=B8;e.nM=0;e.nC=c;e.m3=0;e.m2=64;e.og=1;e.nR=0;e.nE=Da();e=FA(e);}BW(e,0);CE(e,e.ni);Bp.b9(34047,e);b=Qg(e,0);MR=b;return b;}
let AEo=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;if(c===null)return;if(!c.rQ)OS(c);AGm();if(AHj===ATK){c=new W;c.mZ=1;c.m0=1;c.m1=B(46);D(c);}if(!c.rQ){e=new W;e.mZ=1;e.m0=1;e.m1=B(47);D(e);}c.rQ=0;f=c.te;c.te=null;g=1;h=c.sp;e=f.nX;if(e===null){Hl();e=HK;}else e=Io(e.oi);if(h===e)e=f;else{e=new HZ;h=f.nX;J2(e,h===null?f.oU:h.oI,h===null?f.oX:h.oG,c.sp);J0();h=QD;e.tX=h;i=e.nX;if(i===null){FC(e);h=e.os;Ha();i=BP(G5.m9);h.globalCompositeOperation=i;}else{j=h!==h?1:0;RI(i.ox,j);}i=f.nX;k=i===null?f.oU:i.oI;l=i===
null?f.oX:i.oG;h=e.nX;if(h===null){FC(f);Km(e,f.qw,0,0,k,l,0,0,k,l);}else{g=i.ox;m=h.ox;MQ(g,m,0,0,k,l,0,0,k,l);}if(f.sA){e=new W;e.mZ=1;e.m0=1;e.m1=B(48);D(e);}JG();Il(JQ,f.tF);h=f.nX;if(h!==null)MI(h.ox);f.sA=1;g=1;}B3.ch(3317,1);if(c.zS)ACi(b,e,Ln(e),LT(e));else{h=B3;c=e.nX;if(c===null)n=6408;else s:{j=c.oi;switch(j){case 1:n=6406;break s;case 2:n=6410;break s;case 3:case 5:n=6407;break s;case 4:case 6:n=6408;break s;default:}c=new W;e=new I;e.mY=H(16);CZ(e,e.mW,C1(B(49)));J(e,e.mW,j,10);e=U(e);c.mZ=1;c.m0
=1;c.m1=e;D(c);}o=c===null?e.oU:c.oI;p=c===null?e.oX:c.oG;if(c===null)k=6408;else t:{k=c.oi;switch(k){case 1:k=6406;break t;case 2:k=6410;break t;case 3:case 5:k=6407;break t;case 4:case 6:k=6408;break t;default:}c=new W;e=new I;FS(e);Lx(e,B(49));Ei(e,k);Po(c,Cr(e));D(c);}h.cn(b,d,n,o,p,0,k,Sv(e),Sm(e));}if(g)OF(e);}
let AMz=()=>{MR=0.0;}
function Mx(){Kk.call(this);this.rE=null;}
let AEW=null;let ADP=(a,b)=>{let c,d;a.rE=b;if(!b.rQ)OS(b);B3.cr(a.qL,a.xh);AEo(3553,b,0);Uf(a,a.u7,a.wg,1);ABC(a,a.uK,a.vb,1);c=a.ye;d=XF();if(d!==1.0){c=ACo(c,d);Bp.cx(3553,34046,c);a.ye=c;}B3.cr(a.qL,0);}
let AP1=a=>{let b,c,d,e;b=a.rE;if(!(b instanceof K2)){b=a;if(!b.$id$){c=EL();b.$id$=c;}d=Bm(a.$id$,4);b=new I;b.mY=H(16);G(b,b.mW,B(1));e=b.mW;if(d===null)d=B(2);G(b,e,d);return U(b);}c=b;if(!c.$id$){d=EL();c.$id$=d;}d=Bm(b.$id$,4);b=new I;b.mY=H(16);G(b,b.mW,B(1));e=b.mW;if(d===null)d=B(2);G(b,e,d);return U(b);}
let AB2=()=>{let b,c,d,e;b=new Jh;c=J8(16);b.qH=0;d=Bf(Fz,c);e=d.data;b.oQ=d;b.uH=0.75;b.rG=e.length*0.75|0;AEW=b;}
function B7(){let a=this;C.call(a);a.ne=null;a.m7=0;a.nZ=0;a.wx=null;}
let A3z=()=>{let a=new B7();AIq(a);return a;}
let AIq=a=>{a.nZ=1;a.ne=Bf(C,16);}
let CH=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=a.ne;d=c.data;e=a.m7;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new B6;i.nn=h;f=i;h.classObject=f;}}f=DR(i);if(f===null){b=new CO;b.mZ=1;b.m0=1;D(b);}if(f===Br(B4)){b=new Bc;b.mZ=1;b.m0=1;D(b);}if(g<0){b=new Dp;b.mZ=1;b.m0=1;D(b);}f=D6(f.nn,g);j=f.data;k=a.m7;l=j.length;if(k<l)l=k;Ex(c,0,f,0,l);a.ne=f;}f=f.data;g=a.m7;a.m7=g+1|0;f[g]=b;}
let X7=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=b.ne;d=b.m7;e=a.ne;f=e.data;g=a.m7;h=g+d|0;if(h<=f.length)i=e;else{j=8;if(j<=h)j=h;g=g*1.75|0;if(j>g)g=j;i=e.constructor;if(i===null)b=null;else{b=i.classObject;if(b===null){b=new B6;b.nn=i;k=b;i.classObject=k;}}b=DR(b);if(b===null){b=new CO;b.mZ=1;b.m0=1;Bd(b);D(b);}if(b===Br(B4)){b=new Bc;b.mZ=1;b.m0=1;Bd(b);D(b);}if(g<0){b=new Dp;b.mZ=1;b.m0=1;Bd(b);D(b);}i=D6(b.nn,g);b=i.data;j=a.m7;l=b.length;if(j<l)l=j;Ex(e,0,i,0,l);a.ne=i;}Ex(c,0,i,a.m7,d);a.m7=h;}
let Uu=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if((c+d|0)>b.m7){e=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(50));J(f,f.mW,c,10);G(f,f.mW,B(51));J(f,f.mW,d,10);G(f,f.mW,B(52));c=b.m7;J(f,f.mW,c,10);b=U(f);e.mZ=1;e.m0=1;e.m1=b;D(e);}g=b.ne;h=a.ne;i=h.data;j=a.m7;k=j+d|0;if(k<=i.length)b=h;else{l=8;if(l<=k)l=k;j=j*1.75|0;if(l>j)j=l;e=h.constructor;if(e===null)b=null;else{b=e.classObject;if(b===null){b=new B6;b.nn=e;f=b;e.classObject=f;}}b=DR(b);if(b===null){b=new CO;b.mZ=1;b.m0=1;Bd(b);D(b);}if(b===Br(B4)){b=new Bc;b.mZ=
1;b.m0=1;Bd(b);D(b);}if(j<0){b=new Dp;b.mZ=1;b.m0=1;Bd(b);D(b);}b=D6(b.nn,j);e=b.data;l=a.m7;m=e.length;if(l<m)m=l;Ex(h,0,b,0,m);a.ne=b;}Ex(g,c,b,a.m7,d);a.m7=k;}
let AD_=(a,b)=>{let c,d;if(b<a.m7)return a.ne.data[b];c=new L;d=new I;d.mY=H(16);G(d,d.mW,B(35));J(d,d.mW,b,10);G(d,d.mW,B(36));b=a.m7;J(d,d.mW,b,10);d=U(d);c.mZ=1;c.m0=1;c.m1=d;D(c);}
let Wm=(a,b,c)=>{let d,e,f,g;a:{d=a.ne;if(!(!c&&b!==null)){e=0;f=a.m7;while(e<f){if(d.data[e]===b){RT(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.m7;while(true){if(e>=f)break a;g=d.data[e];if(b===g)c=1;else if(!(g instanceof M))c=0;else{g=g;c=b.mX!==g.mX?0:1;}if(c){RT(a,e);return 1;}e=e+1|0;}}}return 0;}
let RT=(a,b)=>{let c,d,e,f,g;c=a.m7;if(b<c){d=a.ne;e=d.data;f=e[b];c=c-1|0;a.m7=c;if(!a.nZ)e[b]=e[c];else B$(d,b+1|0,d,b,c-b|0);e[a.m7]=null;return f;}f=new L;g=new I;g.mY=H(16);G(g,g.mW,B(35));J(g,g.mW,b,10);G(g,g.mW,B(36));b=a.m7;J(g,g.mW,b,10);g=U(g);f.mZ=1;f.m0=1;f.m1=g;D(f);}
let WB=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m7;if(c>=d){e=new L;f=new I;f.mY=H(16);G(f,f.mW,B(53));J(f,f.mW,c,10);G(f,f.mW,B(36));b=a.m7;J(f,f.mW,b,10);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}if(b>c){e=new L;f=new I;f.mY=H(16);G(f,f.mW,B(54));J(f,f.mW,b,10);G(f,f.mW,B(55));J(f,f.mW,c,10);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}g=a.ne;h=(c-b|0)+1|0;i=d-h|0;if(a.nZ){j=b+h|0;B$(g,j,g,b,d-j|0);}else{j=c+1|0;if(i>j)j=i;B$(g,j,g,b,d-j|0);}j=i;while(j<d){g.data[j]=null;j=j+1|0;}a.m7=i;}
let UG=a=>{let b,c,d,e;b=a.m7;if(b){c=b-1|0;a.m7=c;d=a.ne.data;e=d[c];d[c]=null;return e;}e=new BK;e.mZ=1;e.m0=1;e.m1=B(41);D(e);}
let AEy=a=>{let b,c;b=a.m7;if(b)return a.ne.data[b-1|0];c=new BK;c.mZ=1;c.m0=1;c.m1=B(41);D(c);}
let WY=a=>{let b,c,d,e,f,g;b=a.ne;c=0;d=a.m7;e=null;if(c>d){e=new Bc;e.mZ=1;e.m0=1;D(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.m7=0;}
let ADu=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bc;d=new I;d.mY=H(16);G(d,d.mW,B(56));J(d,d.mW,b,10);d=U(d);c.mZ=1;c.m0=1;c.m1=d;D(c);}e=a.m7;f=e+b|0;g=a.ne;if(f>g.data.length){if(8>f)f=8;b=e*1.75|0;if(f>b)b=f;d=g.constructor;if(d===null)c=null;else{c=d.classObject;if(c===null){c=new B6;c.nn=d;h=c;d.classObject=h;}}c=DR(c);if(c===null){c=new CO;c.mZ=1;c.m0=1;D(c);}if(c===Br(B4)){c=new Bc;c.mZ=1;c.m0=1;D(c);}if(b<0){c=new Dp;c.mZ=1;c.m0=1;D(c);}d=D6(c.nn,b);c=d.data;f=a.m7;i=c.length;if(f<i)i=f;Ex(g,0,d,0,i);a.ne
=d;}return a.ne;}
let P_=a=>{let b;if(AGi){b=new Hu;b.pG=1;b.s5=a;b.vF=1;return b;}if(a.wx===null){b=new Od;b.xi=a;b.x7=1;a.wx=b;}return Yj(a.wx);}
let NJ=(a,b)=>{let c,d,e,f;if(b>=0){c=a.m7;if(c<=b)return;d=b;while(d<c){a.ne.data[d]=null;d=d+1|0;}a.m7=b;return;}e=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(57));J(f,f.mW,b,10);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}
let AHD=a=>{let b,c,d,e,f,g,h;if(a.nZ){b=a.ne;c=1;d=0;e=a.m7;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.cF()|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=EL();g.$id$=h;}return a.$id$;}
let AOa=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.nZ)return 0;if(!(b instanceof B7))return 0;c=b;if(!c.nZ)return 0;d=a.m7;if(d!=c.m7)return 0;e=a.ne;f=c.ne;g=0;c:{while(g<d){e:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cG(j))break e;else break c;}if(j!==null)break c;}g=g+1|0;}return 1;}return 0;}
let AUC=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.m7)return B(58);b=a.ne;c=new Ji;d=H(32);e=d.data;c.nN=d;f=c.nx;if(f==e.length)C3(c,f+1|0);b=b.data;e=c.nN.data;g=c.nx;c.nx=g+1|0;e[g]=91;h=b[0];if(h===null)JV(c);else{h=h.l();if(h===null)JV(c);else{i=h.mX.length;j=c.nx+i|0;if(j>c.nN.data.length)C3(c,j);Hw(h,0,i,c.nN,c.nx);c.nx=j;}}i=1;while(i<a.m7){g=B(59).mX.length;k=c.nx+g|0;if(k>c.nN.data.length)C3(c,k);Hw(B(59),0,g,c.nN,c.nx);c.nx=k;h=b[i];if(h===null)JV(c);else{h=h.l();if(h===null)JV(c);else{k=h.mX.length;j=c.nx
+k|0;if(j>c.nN.data.length)C3(c,j);Hw(h,0,k,c.nN,c.nx);c.nx=j;}}i=i+1|0;}f=c.nx;if(f==c.nN.data.length)C3(c,f+1|0);u:{b=c.nN;e=b.data;g=c.nx;f=g+1|0;c.nx=f;e[g]=93;if(!f)c=B(43);else{c=new M;P();g=e.length;if(f<0)break u;if(f>(g-0|0))break u;c.mX=O(b.data,0,f);}return c;}c=new L;c.mZ=1;c.m0=1;D(c);}
function Ki(){let a=this;C.call(a);a.rP=0;a.qf=null;a.oE=null;a.zB=0.0;a.yp=0;a.ur=0;a.un=0;}
let AKX=null;let Fi=(a,b)=>{let c=new Ki();AAb(c,a,b);return c;}
let AAb=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.zB=c;d=MD(b,c);a.yp=d*c|0;b=d-1|0;a.un=b;a.ur=FB(K(b));a.qf=Bf(C,d);a.oE=Bf(C,d);return;}e=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(60));DT(f,f.mW,c);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}
let CF=(a,b)=>{let c,d,e;if(b===null){c=new Bc;c.mZ=1;c.m0=1;c.m1=B(61);D(c);}d=a.qf;e=T(Y(V(K(b.cF()),E(2135587861, 2654435769)),a.ur));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cG(b))break;e=(e+1|0)&a.un;}return e;}
let BE=(a,b,c)=>{let d,e,f;d=CF(a,b);if(d>=0){e=a.oE.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.qf.data;e[d]=b;a.oE.data[d]=c;d=a.rP+1|0;a.rP=d;if(d>=a.yp)V5(a,e.length<<1);return null;}
let Vu=(a,b)=>{let c;c=CF(a,b);return c<0?null:a.oE.data[c];}
let ZL=(a,b)=>{let c,d,e,f,g,h,i,j;c=CF(a,b);if(c<0)return null;d=a.qf;e=a.oE.data;f=e[c];g=a.un;h=(c+1|0)&g;while(true){i=d.data;b=i[h];if(b===null)break;j=T(Y(V(K(b.cF()),E(2135587861, 2654435769)),a.ur));if(((h-j|0)&g)>((c-j|0)&g)){i[c]=b;e[c]=e[h];c=h;}h=(h+1|0)&g;}i[c]=null;e[c]=null;a.rP=a.rP-1|0;return f;}
let V5=(a,b)=>{let c,d,e,f,g,h,i,j;b:{c=a.qf.data.length;a.yp=b*a.zB|0;d=b-1|0;a.un=d;a.ur=FB(K(d));e=a.qf;f=a.oE;a.qf=Bf(C,b);a.oE=Bf(C,b);if(a.rP>0){d=0;while(true){if(d>=c)break b;g=e.data[d];if(g!==null){h=f.data[d];i=a.qf;b=T(Y(V(K(g.cF()),E(2135587861, 2654435769)),a.ur));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.un;}j[b]=g;a.oE.data[b]=h;}d=d+1|0;}}}}
let AKw=()=>{AKX=new C;}
let X4=F(Ki);
let AEz=F();
function DY(){let a=this;C.call(a);a.p1=0;a.oJ=0;a.pa=0;a.o8=0;a.qi=0;a.o2=null;a.p7=0;a.rb=0;}
let AP9=(a,b)=>{if(!(b instanceof DY))return 0;return XV(a,b);}
let XV=(a,b)=>{let c,d,e;b:{if(b!==null&&a.p1==b.p1&&a.oJ==b.oJ&&a.o8==b.o8&&a.pa==b.pa){c=a.o2;d=b.o2;if(c===d)e=1;else if(!(d instanceof M))e=0;else{d=d;e=c.mX!==d.mX?0:1;}if(e&&a.p7==b.p7){e=1;break b;}}e=0;}return e;}
let AJ6=a=>{let b,c,d;b:{b=541*((541*((a.rb<<8)+(a.p7&255)|0)|0)+a.oJ|0)|0;c=a.o2;if(!c.nT){d=0;while(true){if(d>=c.mX.length)break b;c.nT=(31*c.nT|0)+c.mX.charCodeAt(d)|0;d=d+1|0;}}}return b+c.nT|0;}
let AEI=F();
let Zb=F();
let AAM=F();
let ZU=F();
let P9=F();
let AXv=null;let A5C=()=>{A5C=X(P9);ANL();}
let ANL=()=>{let b,c,d;b=new KH;A32();c=new Bg;CP();b.z0=c;d=new Bg;b.z8=d;b.zG=new Bg;b.z9=new Bg;c.m_=0.0;c.nb=0.0;c.na=0.0;d.m_=0.0;d.nb=0.0;d.na=0.0;ABf(b,c,d);AXv=b;}
let UM=F();
let AAd=F();
let ZE=F();
let Z1=F();
let AC2=F();
let XR=F();
let ADQ=F();
let YX=F();
let VC=F();
let V_=F();
let Gk=F(By);
let A3U=null;let A3e=null;let AZG=null;let A0Y=()=>{A0Y=X(Gk);AMy();}
let AMy=()=>{let b,c;b=new Gk;A0Y();b.m9=B(62);b.m6=0;A3U=b;c=new Gk;c.m9=B(63);c.m6=1;A3e=c;AZG=N(Gk,[b,c]);}
let AAi=F();
let RQ=F(0);
let Dx=F();
let UW=F(Dx);
let UV=F(Dx);
let Zn=F(Dx);
let WL=F(Dx);
let ABP=F(Dx);
let LJ=F(Dx);
let WG=F(LJ);
let HT=F(0);
let W_=F();
let FH=F(0);
let ABH=F();
let ADN=F();
let VX=F();
let E9=F();
let ABi=F(E9);
let HO=F(E9);
let DN=F(HO);
let AZw=null;let A5D=()=>{A5D=X(DN);AHd();}
let AHd=()=>{let b;b=new Bg;CP();AZw=b;}
let ABB=F();
let AC1=F(DN);
let Y7=F(DN);
let Tx=F(E9);
let AMW=null;let ALg=()=>{AMW=B9(3);}
let Lf=F(E9);
let UI=F(Lf);
let WF=F(DN);
let G$=F(HO);
let ZP=F(G$);
let Y5=F(DN);
let Z3=F(DN);
let ZO=F(G$);
let EV=F(By);
let A0J=null;let A1x=null;let AZx=null;let AYK=null;let AZD=()=>{AZD=X(EV);AQv();}
let AQv=()=>{let b,c,d;b=new EV;AZD();b.m9=B(64);b.m6=0;A0J=b;c=new EV;c.m9=B(65);c.m6=1;A1x=c;d=new EV;d.m9=B(66);d.m6=2;AZx=d;AYK=N(EV,[b,c,d]);}
let Gm=F();
let Mm=F(Gm);
let T4=F(Mm);
let E1=F(By);
let A3c=null;let A3u=null;let AXe=null;let A3y=null;let A0q=()=>{A0q=X(E1);ANe();}
let ANe=()=>{let b,c,d;b=new E1;A0q();b.m9=B(67);b.m6=0;A3c=b;c=new E1;c.m9=B(68);c.m6=1;A3u=c;d=new E1;d.m9=B(69);d.m6=2;AXe=d;A3y=N(E1,[b,c,d]);}
let CU=F(Gm);
let In=F(CU);
let VS=F();
let E$=F(CU);
let A2L=null;let A2K=null;let A2M=null;let A3h=null;let A5E=()=>{A5E=X(E$);AOf();}
let AOf=()=>{let b;b=new Bg;CP();A2L=b;A2K=new Bg;A2M=new Bg;b=new EG;Sf();b.rY=0.0;b.rV=0.0;b.rW=0.0;b.rX=1.0;A3h=b;}
let EN=F(E$);
let Gp=F(EN);
let W$=F(Gp);
let H1=F(CU);
let AE2=F(H1);
let AC0=F(CU);
let FZ=F(CU);
let UQ=F(FZ);
let Hs=F(CU);
let W6=F(EN);
let Yf=F(EN);
let KT=F(CU);
let ABj=F(KT);
let Vs=F(FZ);
let Za=F(Gp);
let ABe=F(CU);
let Z8=F(FZ);
let ABm=F(CU);
let AB9=F(E$);
let Yl=F(Dk);
let VI=F(Dk);
let VQ=F(EN);
let ABv=F(Hs);
let AEd=F(In);
let AAC=F(In);
let AB0=F(Hs);
let Zz=F(Gp);
let AEu=F(H1);
let E5=F(Gm);
let ZS=F(E5);
let F7=F();
let ABF=F(F7);
let ACl=F(E5);
let ACZ=F(E5);
let ADv=F(F7);
let WX=F(E5);
let AC3=F(F7);
let Ky=F(0);
let Nj=F(0);
function B6(){let a=this;C.call(a);a.nB=null;a.nn=null;a.sG=null;}
let ATo=0;let A5F=a=>{let b=new B6();ATT(b,a);return b;}
let ATT=(a,b)=>{let c;a.nn=b;c=a;b.classObject=c;}
let A1q=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new B6;c.nn=b;d=c;b.classObject=d;}return c;}
let AOK=a=>{let b,c,d;b=a;if(!b.$id$){c=EL();b.$id$=c;}d=a.$id$;b=new I;b.mY=H(16);G(b,b.mW,B(70));J(b,b.mW,d,10);return U(b);}
let DR=a=>{let b,c,d;b=a.nn.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new B6;c.nn=b;d=c;b.classObject=d;}}return c;}
let ANX=()=>{Ec.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:function(obj,args){Rd(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:B4,callable:function(obj,args){AWm();UP();return null;}}];Di.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:function(obj,args){Xy(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[Di],returnType:B4,callable
:function(obj,args){NN(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:function(obj,args){Zf(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:M,callable:function(obj,args){return NX(obj);}}];Dw.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:function(obj,args){Tw(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[ET,D7],returnType:
B4,callable:function(obj,args){Og(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[ET,D7,Bn,EB,DC,I8],returnType:B4,callable:function(obj,args){R6(obj,args[0],args[1],args[2],GV(args[3]),Dg(args[4]),I6(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[ET,D7,DC,DC,Bn,EB,DC,I8,M],returnType:B4,callable:function(obj,args){Sn(obj,args[0],args[1],Dg(args[2]),Dg(args[3]),args[4],GV(args[5]),Dg(args[6]),I6(args[7]),args[8]);return null;}},
{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[ET,D7],returnType:B4,callable:function(obj,args){A2s(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[ET,D7,Bn,EB,DC,I8],returnType:B4,callable:function(obj,args){A0T(obj,args[0],args[1],args[2],GV(args[3]),Dg(args[4]),I6(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[ET,D7,DC,DC,Bn,EB,DC,I8,M],returnType:B4,callable:function(obj,args){Hn(obj,args[0],args[1],Dg(args[2]),
Dg(args[3]),args[4],GV(args[5]),Dg(args[6]),I6(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[F2],returnType:B4,callable:function(obj,args){Pf(obj,args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[EB,DC],returnType:B4,callable:function(obj,args){Q7(obj,GV(args[0]),Dg(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[F2,Di,EB,M],returnType:B4,callable:function(obj,args){N4(obj,args[0],args[1],
GV(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[F2,Di,DC],returnType:Di,callable:function(obj,args){return Sz(obj,args[0],args[1],Dg(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[F2,Di],returnType:B4,callable:function(obj,args){Mv(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[Ka,F2],returnType:EB,callable:function(obj,args){return KY(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers
:0,accessLevel:1,parameterTypes:[B7,F2],returnType:EB,callable:function(obj,args){return S9(obj,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[D7,DC,DC],returnType:DC,callable:function(obj,args){return RL(obj,args[0],Dg(args[1]),Dg(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:function(obj,args){SZ(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:M,callable:function(obj,args){return AA4(obj
);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:B4,callable:function(obj,args){Eh();Wq();return null;}}];}
let M6=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.nn.$meta.primitive?1:0)&&!(a.nn.$meta.item===null?0:1)){if(a.sG===null){if(!ATo){ATo=1;ANX();}b=a.nn.$meta.methods;a.sG=Bf(HS,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof GR())?e:e.nv;g=Be(f.name);if(g===B(71))h=1;else if(!(B(71) instanceof M))h=0;else{e=B(71);h=g.mX!==e.mX?0:1;}if(h){g=f.parameterTypes;i=Bf(B6,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new B6;e.nn=l;m
=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.sG.data;h=c+1|0;e=new HS;g=Be(f.name);k=f.modifiers;n=f.accessLevel;f=DD(f.callable,"call");e.pV=a;e.B$=g;e.t_=k;e.vr=n;e.q5=i;e.x0=f;j[c]=e;c=h;}d=d+1|0;}i=a.sG;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new B6;e.nn=b;f=e;b.classObject=f;}}b=DR(e);if(b===null){e=new CO;e.mZ=1;e.m0=1;D(e);}if(b===Br(B4)){e=new Bc;e.mZ=1;e.m0=1;D(e);}if(c<0){e=new Dp;e.mZ=1;e.m0=1;D(e);}i=i.data;f=D6(b.nn,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=i[c];c
=c+1|0;}a.sG=f;}return a.sG.s();}return Bf(HS,0);}
let AEk=a=>{let b,c,d,e,f,g,h,i,j,k;b=(M6(a)).data;c=b.length;d=Bf(HS,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Pl(h.t_,h.vr)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=BJ(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new B6;h.nn=j;k=h;j.classObject=k;}}j=DR(h);if(j===null){h=new CO;h.mZ=1;h.m0=1;D(h);}if(j===Br(B4)){h=new Bc;h.mZ=1;h.m0=1;D(h);}if(f<0){h=new Dp;h.mZ=1;h.m0=1;D(h);}k=D6(j.nn,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;}
let ACN=(a,b)=>{let c,d,e,f;c=(M6(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HC;f.mZ=1;f.m0=1;D(f);}f=c[e];if(ACM(f.q5.s(),b))break;e=e+1|0;}return f;}
let ACK=(a,b)=>{let c,d,e,f,g;c=(M6(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HC;f.mZ=1;f.m0=1;D(f);}f=c[e];g=!(Pl(f.t_,f.vr)&1)?0:1;if(g&&ACM(f.q5.s(),b))break;e=e+1|0;}return f;}
let Wd=F();
let ARM=b=>{let c,d,e,f,g;if(b===null)return null;c=Bz(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof GR())?g:g.nv;e=e+1|0;}return c;}
let B0=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();}
let DD=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;}
let VN=F();
let AFW=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;}
let Rp=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Rp(d[e],c))return 1;e=e+1|0;}return 0;}
let Gd=b=>{setTimeout(()=>{A11(Vh)(b);},0);}
let Vh=b=>{b.cV();}
let SA=(b,c)=>{setTimeout(()=>{Vh(b);},c);}
let ANM=()=>{return [];}
function Dr(){let a=this;C.call(a);a.m1=null;a.oy=null;a.mZ=0;a.m0=0;a.BY=null;}
let A5G=()=>{let a=new Dr();Z(a);return a;}
let A5H=a=>{let b=new Dr();J_(b,a);return b;}
let A5I=(a,b)=>{let c=new Dr();Zv(c,a,b);return c;}
let Z=a=>{a.mZ=1;a.m0=1;}
let J_=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
let Zv=(a,b,c)=>{a.mZ=1;a.m0=1;a.m1=b;a.oy=c;}
let Bd=a=>{return a;}
let ASZ=a=>{return a.m1;}
let ALW=a=>{return a.cW();}
let AS5=a=>{let b;b=a.oy;if(b===a)b=null;return b;}
let AMF=a=>{let b,c;if(Er===null){b=new CD;b.oq=I1;c=new I;c.mY=H(16);b.nF=c;b.oo=H(32);b.ow=0;CC();b.ot=CK;Er=b;}Ke(a,Er);}
let Ke=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new B6;d.nn=c;e=d;c.classObject=e;}}if(d.nB===null)d.nB=Be(d.nn.$meta.name);e=d.nB;c=b.nF;G(c,c.mW,e);CM(b);f=a.cW();if(f!==null){c=new I;c.mY=H(16);G(c,c.mW,B(72));G(c,c.mW,f);e=U(c);c=b.nF;G(c,c.mW,e);CM(b);}o:{g=b.oo;g.data[0]=10;Oa(b,g,0,1);g=a.BY;if(g!==null){g=g.data;h=g.length;i=0;while(true){if(i>=h)break o;d=g[i];c=b.nF;G(c,c.mW,B(73));CM(b);e=b.nF;G(e,e.mW,d===null?B(2):d.l());j=e.mW;Bb(e,j,j+
1|0);e.mY.data[j]=10;CM(b);i=i+1|0;}}}c=a.oy;if(c!==null&&c!==a){e=b.nF;G(e,e.mW,B(74));CM(b);Ke(a.oy,b);}}
let CA=F(Dr);
let A5J=()=>{let a=new CA();Dt(a);return a;}
let Dt=a=>{a.mZ=1;a.m0=1;}
let BC=F(CA);
let A5K=()=>{let a=new BC();Kz(a);return a;}
let A5f=a=>{let b=new BC();AD8(b,a);return b;}
let Kz=a=>{a.mZ=1;a.m0=1;}
let AD8=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
let Y2=F(BC);
let D7=F(0);
function M(){C.call(this);this.nT=0;}
let A3o=null;let APF=null;let AXs=null;let P=()=>{P=X(M);AUO();}
let A5L=a=>{let b=new M();UL(b,a);return b;}
let ABy=a=>{let b=new M();XI(b,a);return b;}
let VV=(a,b,c)=>{let d=new M();T0(d,a,b,c);return d;}
let UL=(a,b)=>{P();a.mX=O(b.data,0,b.data.length);}
let XI=(a,b)=>{a.mX=b;}
let T0=(a,b,c,d)=>{let e,f;P();e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.mX=O(b.data,c,d);return;}f=new L;f.mZ=1;f.m0=1;D(f);}
let CY=(a,b)=>{let c;if(b>=0&&b<a.mX.length)return a.mX.charCodeAt(b);c=new S;c.mZ=1;c.m0=1;D(c);}
let ES=a=>{return a.mX.length;}
let Hw=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.mX.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AYr(a.mX,b,d.data,e,g);return;}}h=new L;h.mZ=1;h.m0=1;D(h);}
let JJ=(a,b,c)=>{let d,e,f;if((c+b.mX.length|0)>a.mX.length)return 0;d=0;a:{d:{while(d<b.mX.length){if(d<0)break a;if(d>=b.mX.length)break a;e=b.mX.charCodeAt(d);f=c+1|0;if(c<0)break d;if(c>=a.mX.length)break d;if(e!=a.mX.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let Ft=(a,b)=>{if(a===b)return 1;return JJ(a,b,0);}
let Pr=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.mX.length>a.mX.length)return 0;c=0;d=a.mX.length-b.mX.length|0;d:{k:{while(d<a.mX.length){if(d<0)break d;if(d>=a.mX.length)break d;e=a.mX.charCodeAt(d);f=c+1|0;if(c<0)break k;if(c>=b.mX.length)break k;if(e!=b.mX.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let Ek=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.mX.length)return (-1);if(a.mX.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.mX.length-1|0))return (-1);if(a.mX.charCodeAt(c)==e&&a.mX.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;}
let WU=(a,b)=>{return Ek(a,b,0);}
let FQ=(a,b,c)=>{let d,e,f,g;d=a.mX.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.mX.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.mX.charCodeAt(d)==g){b=d-1|0;if(a.mX.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;}
let K5=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.mX.length-b.mX.length|0;d:{k:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.mX.length)break c;f=c+e|0;if(f<0)break d;if(f>=a.mX.length)break d;g=a.mX.charCodeAt(f);if(e<0)break k;if(e>=b.mX.length)break k;if(g!=b.mX.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let ABl=(a,b)=>{return K5(a,b,0);}
let Pn=(a,b,c)=>{let d,e,f;d=a.mX.length-b.mX.length|0;if(c<d)d=c;d:{k:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.mX.length)break c;f=d+e|0;if(f<0)break d;if(f>=a.mX.length)break d;f=a.mX.charCodeAt(f);if(e<0)break k;if(e>=b.mX.length)break k;if(f!=b.mX.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let BR=(a,b,c)=>{let d,e,f;d=a.mX.length;e=BJ(b,c);if(!e)return APF;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return ABy(a.mX.substring(b,c));f=new S;f.mZ=1;f.m0=1;D(f);}
let Jb=(a,b)=>{return BR(a,b,a.mX.length);}
let Pu=(a,b,c)=>{return BR(a,b,c);}
let C0=(a,b)=>{let c,d,e,f;c=a.mX.length-b.mX.length|0;d=0;b:{a:{while(d<=c){e=0;while(true){if(e>=b.mX.length)return 1;f=d+e|0;if(f<0)break b;if(f>=a.mX.length)break b;f=a.mX.charCodeAt(f);if(e<0)break a;if(e>=b.mX.length)break a;if(f!=b.mX.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let Mq=(a,b,c)=>{let d,e,f,g,h,i;d=new I;d.mY=H(16);e=a.mX.length-b.mX.length|0;f=0;a:{d:{k:while(true){if(f>e){b=BR(a,f,a.mX.length);g=d.mW;if(b===null)b=B(2);G(d,g,b);return U(d);}g=0;c:{while(g<b.mX.length){h=f+g|0;if(h<0)break d;if(h>=a.mX.length)break d;i=a.mX.charCodeAt(h);if(g<0)break k;if(g>=b.mX.length)break k;if(i!=b.mX.charCodeAt(g)){if(f<0)break a;if(f>=a.mX.length)break a;i=a.mX.charCodeAt(f);h=d.mW;Bb(d,h,h+1|0);d.mY.data[h]=i;break c;}g=g+1|0;}G(d,d.mW,c===null?B(2):c);f=f+(b.mX.length-1|0)|0;}f
=f+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let Zm=a=>{let b,c,d;b=0;c=a.mX.length-1|0;b:{while(true){if(b>c)break b;if(b<0)break;if(b>=a.mX.length)break;if(a.mX.charCodeAt(b)>32)break b;b=b+1|0;}d=new S;d.mZ=1;d.m0=1;D(d);}c:{while(b<=c){if(c<0)break c;if(c>=a.mX.length)break c;if(a.mX.charCodeAt(c)>32)break;c=c+(-1)|0;}return BR(a,b,c+1|0);}d=new S;d.mZ=1;d.m0=1;D(d);}
let C1=a=>{return a;}
let Wp=b=>{P();return b===null?B(2):b.l();}
let AAU=b=>{let c;P();c=new I;c.mY=H(16);J(c,c.mW,b,10);return U(c);}
let FG=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof M))return 0;c=b;return a.mX!==c.mX?0:1;}
let AAw=(a,b)=>{let c,$$je;b:{try{c=AAY(a,AGb(C1(b)));}catch($$e){$$je=Bx($$e);if($$je instanceof Ly){break b;}else if($$je instanceof Ia){break b;}else{throw $$e;}}return c;}b=new La;b.mZ=1;b.m0=1;D(b);}
let AAY=(a,b)=>{let c,d,e,f,g,h,$$je;c=AX8(a.mX);d=c.data.length;e=new I_;f=0+d|0;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=f;e.r3=0;e.tb=0;e.rK=c;b:{try{g=b.c6();D4();e=Pk(Tv(QF(g,EH),EH),e);break b;}catch($$e){$$je=Bx($$e);if($$je instanceof Gl){e=$$je;}else{throw $$e;}}g=new MT;g.mZ=1;g.m0=1;g.m1=B(75);g.oy=e;D(g);}h=e.m3;if(!h&&e.m2==e.ni)return e.nC;c=Bz(e.m2-h|0);O2(e,c,0,c.data.length);return c;}
let AQK=a=>{let b;b:{if(!a.nT){b=0;while(true){if(b>=a.mX.length)break b;a.nT=(31*a.nT|0)+a.mX.charCodeAt(b)|0;b=b+1|0;}}}return a.nT;}
let Zy=(a,b)=>{return IF(GA(b,0),a,0);}
let Td=(a,b,c)=>{return IF(GA(b,0),a,c);}
let W4=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;b=Px(GA(b,0),a);d=new KS;d.mY=H(16);b.ss=0;e=b.qZ.mX.length;b.vg=e;f=b.pg;g=b.qZ;h=b.ss;f.pk=0;f.sZ=2;i=f.n2.data;j=0;k=i.length;if(j>k){b=new Bc;Z(b);D(b);}while(j<k){l=j+1|0;i[j]=(-1);j=l;}i=f.nS.data;m=0;j=i.length;if(m>j){b=new Bc;Z(b);D(b);}while(m<j){k=m+1|0;i[m]=(-1);m=k;}if(g!==null)f.qt=g;if(h>=0){f.oW=h;f.nz=e;}f.p8=f.oW;b.vn=0;b.wH=null;f.s2=(-1);while(true){if(!HB(b)){c=b.qZ;b=BR(c,b.vn,c.mX.length);l=b.mX.length;QS(d,d.mW,b,0,l);return U(d);}b.wV=ABu(b,c);f
=b.qZ;j=b.vn;g=b.pg;if(!g.pk){b=new BK;Dt(b);D(b);}if(0>=g.pU){b=new L;c=new I;FS(c);KR(c,0);c=U(c);b.mZ=1;b.m0=1;b.m1=c;D(b);}f=BR(f,j,g.n2.data[0]);h=f.mX.length;QS(d,d.mW,f,0,h);f=b.wV;G(d,d.mW,f);f=b.pg;if(!f.pk)break;if(0>=f.pU){b=new L;c=new I;FS(c);KR(c,0);c=U(c);b.mZ=1;b.m0=1;b.m1=c;D(b);}b.vn=f.n2.data[1];}b=new BK;Dt(b);D(b);}
let AUO=()=>{let b;A3o=H(0);b=new M;P();b.mX="";APF=b;AXs=new Q6;}
let F4=F(Dr);
let Iz=F(F4);
let X9=F(Iz);
let Ea=F();
function EO(){Ea.call(this);this.pz=0;}
let AF9=null;let Fv=null;let K1=(b,c)=>{let d;if(!(c>=2&&c<=36))c=10;d=new Bh;d.mY=H(20);return (J(d,d.mW,b,c)).l();}
let KL=(b,c)=>{if(b!==null)return Tk(b,0,b.mX.length,c);b=new B_;b.mZ=1;b.m0=1;b.m1=B(76);D(b);}
let Tk=(b,c,d,e)=>{let f,g,h,i,j,k,l,m;if(c==d){b=new B_;b.mZ=1;b.m0=1;b.m1=B(77);D(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.mX.length){c:{switch(b.mX.charCodeAt(c)){case 43:g=c+1|0;break c;case 45:f=1;g=c+1|0;break c;default:}g=c;}h=0;if(g==d){b=new B_;b.mZ=1;b.m0=1;D(b);}g:{while(g<d){i=g+1|0;if(g<0)break g;if(g>=b.mX.length)break g;j=IP(b.mX.charCodeAt(g));if(j<0){k=new B_;b=BR(b,c,d);if(b===null)b=B(2);l=new I;l.mY=H(16);G(l,l.mW,B(78));G(l,l.mW,b);b=U(l);k.mZ=1;k.m0=1;k.m1=b;D(k);}if(j>=e){k=new B_;m=BR(b,
c,d);if(m===null)m=B(2);b=new I;b.mY=H(16);G(b,b.mW,B(79));J(b,b.mW,e,10);G(b,b.mW,B(72));G(b,b.mW,m);b=U(b);k.mZ=1;k.m0=1;k.m1=b;D(k);}h=Cj(e,h)+j|0;if(h<0){if(i==d&&h==(-2147483648)&&f)return (-2147483648);k=new B_;m=BR(b,c,d);if(m===null)m=B(2);b=new I;b.mY=H(16);DM(b,b.mW,B(80));Fy(b,m);LK(k,Cr(b));D(k);}g=i;}if(f)h= -h|0;return h;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new B_;k=new I;k.mY=H(16);G(k,k.mW,B(81));J(k,k.mW,e,10);k=U(k);b.mZ=1;b.m0=1;b.m1=k;D(b);}
let Cs=b=>{if(b!==null)return Tk(b,0,b.mX.length,10);b=new B_;b.mZ=1;b.m0=1;b.m1=B(76);D(b);}
let Hb=b=>{let c;if(b>=(-128)&&b<=127){Fk();return Fv.data[b+128|0];}c=new EO;c.pz=b;return c;}
let Fk=()=>{let b,c,d,e,f;b:{if(Fv===null){b=Bf(EO,256);c=b.data;Fv=b;d=0;e=c.length;while(true){if(d>=e)break b;f=new EO;f.pz=d-128|0;c[d]=f;d=d+1|0;}}}}
let Dg=a=>{return a.pz;}
let HI=a=>{return K(a.pz);}
let Kt=a=>{return a.pz;}
let Gw=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
let El=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
let ATH=()=>{AF9=Br(DC);}
function Bh(){let a=this;C.call(a);a.mY=null;a.mW=0;}
let A5M=()=>{let a=new Bh();FS(a);return a;}
let A5N=a=>{let b=new Bh();KB(b,a);return b;}
let FS=a=>{a.mY=H(16);}
let KB=(a,b)=>{a.mY=H(b);}
let Lx=(a,b)=>{G(a,a.mW,b===null?B(2):b.l());return a;}
let RC=(a,b)=>{return a.k(a.mW,b);}
let G=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.mW){if(c===null)c=B(2);else if(c.mX.length?0:1)return a;a.dk(a.mW+c.mX.length|0);d=a.mW-1|0;while(d>=b){a.mY.data[d+c.mX.length|0]=a.mY.data[d];d=d+(-1)|0;}a.mW=a.mW+c.mX.length|0;e=0;r:{while(e<c.mX.length){f=a.mY;d=b+1|0;if(e<0)break r;if(e>=c.mX.length)break r;f.data[b]=c.mX.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}
let KR=(a,b)=>{return J(a,a.mW,b,10);}
let J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}d:{if(FM(c,d)<0){if(e)Bb(a,b,b+1|0);else{Bb(a,b,b+2|0);f=a.mY.data;g=b+1|0;f[b]=45;b=g;}a.mY.data[b]=Iw(c,d);}else{h=1;i=1;j=DQ((-1),d);o:{while(true){k=Cj(h,d);if(FM(k,c)>0){k=h;break o;}i=i+1|0;if(FM(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bb(a,b,b+i|0);if(e)e=b;else{f=a.mY.data;e=b+1|0;f[b]=45;}while(true){if(!k)break d;f=a.mY.data;b=e+1|0;f[e]=Iw(DQ(c,k),d);c=A0H(c,k);k=DQ(k,d);e=b;}}}return a;}
let AD6=(a,b)=>{QV(a,a.mW,b,10);return a;}
let QV=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=1;if(FX(c,Bi)){e=0;c=GM(c);}d:{f=K(d);if(Ej(c,f)<0){if(e)Bb(a,b,b+1|0);else{Bb(a,b,b+2|0);g=a.mY.data;h=b+1|0;g[b]=45;b=h;}a.mY.data[b]=Iw(T(c),d);}else{i=1;j=K(1);k=DZ(K(-1),f);o:{while(true){l=V(j,f);if(Ej(l,c)>0){l=j;break o;}i=i+1|0;if(Ej(l,k)>0)break;j=l;}}if(!e)i=i+1|0;Bb(a,b,b+i|0);if(e)e=b;else{g=a.mY.data;e=b+1|0;g[b]=45;}while(true){if(CN(l,Bi))break d;g=a.mY.data;b=e+1|0;g[e]=Iw(T((DZ(c,l))),d);c=U2(c,l);l=DZ(l,f);e=b;}}}return a;}
let DT=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BJ(c,0.0);if(!d){if(1.0/c===Infinity){Bb(a,b,b+3|0);e=a.mY.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bb(a,b,b+4|0);e=a.mY.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bb(a,b,b+3|0);e=a.mY.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bb(a,b,b+8|0);d=b;}else{Bb(a,b,b+9|0);e=a.mY.data;d=b+1|0;e[b]=45;}e=a.mY.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AMd;AAr(c,f);d=f.w9;g=f.wS;h=f.yP;i=1;j=1;if(h)j=2;k=9;l=AT9(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Jc(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bb(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.mY.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.mY.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;p
=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.mY.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.mY.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
let O_=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BJ(c,0.0);if(!d){if(1.0/c===Infinity){Bb(a,b,b+3|0);e=a.mY.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bb(a,b,b+4|0);e=a.mY.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bb(a,b,b+3|0);e=a.mY.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bb(a,b,b+8|0);d=b;}else{Bb(a,b,b+9|0);e=a.mY.data;d=b+1|0;e[b]=45;}e=a.mY.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AKD;YE(c,f);g=f.xw;h=f.wE;i=f.yF;j=1;k=1;if(i)k=2;l=18;m=ARL(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Jc(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bb(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.mY.data;k=b+1|0;e[b]=45;}p=E(1569325056, 23283064);if(o){e=a.mY.data;b=k+1|0;e[k]=48;k=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(FY(p,Bi))d=0;else{d=T(Ct(g,p));g=CL(g,p);}e=a.mY.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=Ct(p,K(10));q=q+1|0;}if(h){e=a.mY.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
let AT9=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
let ARL=b=>{let c,d,e,f,g;c=K(1);d=0;e=16;f=AFC.data;g=f.length-1|0;while(g>=0){if(CN(CL(b,V(c,f[g])),Bi)){d=d|e;c=V(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
let Qi=(a,b)=>{return a.dw(a.mW,b);}
let DM=(a,b,c)=>{G(a,b,c===null?B(2):c.l());return a;}
let N$=(a,b)=>{let c,d,e,f,g,h;c=a.mY.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=H(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.mY=g;}
let U=a=>{let b,c,d,e,f;b=new M;c=a.mY;d=c.data;e=a.mW;P();f=d.length;if(e>=0&&e<=(f-0|0)){b.mX=O(c.data,0,e);return b;}b=new L;b.mZ=1;b.m0=1;D(b);}
let XY=a=>{return a.mW;}
let Ut=(a,b)=>{let c;if(b>=0&&b<a.mW)return a.mY.data[b];c=new L;c.mZ=1;c.m0=1;D(c);}
let AAp=(a,b,c,d,e)=>{let f,g;if(d<=e&&e<=c.mX.length&&d>=0){Bb(a,b,(b+e|0)-d|0);d:{while(d<e){f=a.mY;g=b+1|0;if(d<0)break d;if(d>=c.mX.length)break d;f.data[b]=c.mX.charCodeAt(d);d=d+1|0;b=g;}return a;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new L;c.mZ=1;c.m0=1;D(c);}
let Kv=(a,b,c,d,e)=>{let f,g,h,i;Bb(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.mY.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let S6=(a,b)=>{let c,d,e,f;if(b>=0){c=a.mW;if(b<c){c=c-1|0;a.mW=c;while(b<c){d=a.mY.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new S;f.mZ=1;f.m0=1;D(f);}
let AD5=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BJ(b,c);if(d<=0){e=a.mW;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.mW=e-(c-b|0)|0;g=0;while(g<f){h=a.mY.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new S;i.mZ=1;i.m0=1;D(i);}
let Bb=(a,b,c)=>{let d,e,f,g;d=a.mW;e=d-b|0;a.dk((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.mY.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.mW=a.mW+(c-b|0)|0;}
let HE=F(0);
let I=F(Bh);
let EE=()=>{let a=new I();AVX(a);return a;}
let AVX=a=>{a.mY=H(16);}
let Fy=(a,b)=>{G(a,a.mW,b===null?B(2):b.l());return a;}
let BF=(a,b)=>{G(a,a.mW,b);return a;}
let Ei=(a,b)=>{J(a,a.mW,b,10);return a;}
let DK=(a,b)=>{let c;c=a.mW;Bb(a,c,c+1|0);a.mY.data[c]=b;return a;}
let AEB=(a,b,c)=>{G(a,b,c===null?B(2):c.l());return a;}
let H6=(a,b,c)=>{Bb(a,b,b+1|0);a.mY.data[b]=c;return a;}
let AD3=(a,b,c)=>{AD5(a,b,c);return a;}
let F6=(a,b,c)=>{G(a,b,c);return a;}
let HU=(a,b)=>{a.mW=b;}
let ACc=(a,b,c)=>{let d,e,f,g;if(b<=c&&b>=0&&c<=a.mW){d=new M;e=a.mY;f=e.data;c=c-b|0;P();g=f.length;if(b>=0&&c>=0&&c<=(g-b|0)){d.mX=O(e.data,b,c);return d;}d=new L;Z(d);D(d);}d=new L;d.mZ=1;d.m0=1;D(d);}
let ANV=(a,b,c,d,e)=>{let f,g,h,i;Bb(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.mY.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AKk=(a,b,c,d)=>{let e,f,g,h,i;e=a.mW;Bb(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.mY.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let CB=a=>{return a.mW;}
let Cr=a=>{return U(a);}
let AN$=(a,b)=>{N$(a,b);}
let AO0=(a,b,c)=>{Bb(a,b,b+1|0);a.mY.data[b]=c;return a;}
let CZ=(a,b,c)=>{G(a,b,c);return a;}
let Ie=F(Iz);
let AA9=F(Ie);
let A5O=a=>{let b=new AA9();AIF(b,a);return b;}
let AIF=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
let XC=F(Ie);
let A5P=a=>{let b=new XC();AI_(b,a);return b;}
let AI_=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
function X2(){let a=this;C.call(a);a.yj=0;a.A7=0;a.xN=0;a.yZ=null;a.A0=0;a.A9=null;a.yx=0;a.Bf=null;a.uV=0;a.sj=0;a.wT=0;a.yo=0;a.zw=0;a.za=0;a.Av=0;a.zX=0;a.z5=0;a.x9=0;a.vM=0;}
let A3O=a=>{let b=new X2();AG9(b,a);return b;}
let ACa=a=>{return !a.uV&&!a.sj?1:0;}
let AG9=(a,b)=>{a.yj=0;a.A7=1;a.xN=0;a.A0=1;a.A9=B(43);a.yx=0;a.uV=(-1);a.sj=(-1);a.wT=0;a.yo=0;a.zw=0;a.za=0;a.Av=0;a.zX=0;a.z5=0;a.x9=0;a.vM=1;a.Bf=b;}
let OW=F(0);
function Lu(){let a=this;C.call(a);a.rh=null;a.t0=null;a.zu=null;a.z1=null;a.Cn=null;a.pM=null;a.u5=null;a.vc=null;a.uO=null;a.q8=null;a.s7=null;a.wu=0;a.x$=0;a.BC=null;a.sO=0;a.uR=null;a.BV=null;a.BF=null;a.ul=null;a.yr=null;a.rl=null;}
let Kl=null;let A5Q=(a,b)=>{let c=new Lu();Wu(c,a,b);return c;}
let Wu=(a,b,c)=>{let d;d=new B7;d.nZ=1;d.ne=Bf(C,4);a.uO=d;I2();a.s7=AEa;a.wu=(-1);a.x$=1;a.sO=1;a.BV=Fi(51,0.800000011920929);d=new B7;d.nZ=1;d.ne=Bf(C,16);a.ul=d;d=new B7;d.nZ=1;d.ne=Bf(C,16);a.yr=d;I9();a.q8=IO;a.pM=c;a.u5=b;ACy(a);}
let ACy=a=>{let b,c,d,e,f,g,h,i;Kl=APY();Lb();DV(JC,B(82),B(43));b=Be(Kl.userAgent);Lb();DV(JC,B(83),b);if(Kl.windows?1:0){Lb();DV(JC,B(84),B(85));}else if(Kl.macOS?1:0)RU(B(84),B(86));else if(!(Kl.linux?1:0))RU(B(84),B(87));else RU(B(84),B(7));c=new N6;d=a.pM.yx;c.Az=0;c.Bd=0;c.pi=1;c.pi=d;Jr=c;I9();b=Be(IO.pN.location.href);a.rl=b;if(C0(b,B(88))){c=Mq(a.rl,B(89),B(43));a.rl=c;a.rl=Mq(c,B(90),B(43));}e=Ek(a.rl,63,0);if(e>=0)a.rl=BR(a.rl,0,e);c=a.pM;Jl=c.A7;b=A1U(c);a.rh=b;c=A0_(a.rl,b.nJ,a);a.uR=c;d=a.pM.A0;f
=Jr;g=c.vh;h=new I;h.mY=H(16);i=h.mW;if(g===null)g=B(2);G(h,i,g);G(h,h.mW,B(91));h=U(h);g=new I;g.mY=H(16);i=g.mW;if(h===null)h=B(2);G(g,i,h);G(g,g.mW,B(92));h=U(g);g=new PE;g.th=c;g.yY=B(92);g.yV=d;UK(f,1,h,g);a.t0=AYc(a.rh.nJ);c=new Sh;c.v3=a.uR;a.zu=c;c=new RM;c.Ci=A2g(16,0.75);a.z1=c;a.BC=new PT;a.BF=A1c();if(a.pM.xN)ZT(a);Eb=a;c=a.rh;BM=c;b=c.sJ;B3=b;Bp=b;Ga=c.z2;Dj=a.t0;Qs=a.zu;A1X=a.z1;c=A3K();a.Cn=c;A0K=c;c=X6(a.q8);g=A2o(a);c.addEventListener("visibilitychange",B0(g,"handleEvent"));AC6(a.q8,a);if(ACa(a.pM))V$(a.q8,
B(93),AYA(a));}
let Yy=a=>{let b,c,d,e,f,g,h,$$je;b=a.s7;b:{try{a:{A1v();switch(AR$.data[AC5(b)]){case 1:c=YH(AFN());if(!c){I2();a.s7=QG;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break a;}e=a.uR.xo;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=EE();DK(Ei(g,f),37);h=Cr(g);d.setProperty("width",BP(h));}}break a;case 2:break;default:break a;}if(a.u5!==null){b=a.vc;if(b!==null){AAe(b);ABk(a.vc);}WT(a.t0,null);P$(a.t0);WY(a.ul);a.vc
=a.u5;a.u5=null;I2();a.s7=Uq;a.rh.v6=Bi;}UY(a,a.vc);}}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){h=$$je;break b;}else{throw $$e;}}b=a.q8;b.uZ=a;requestAnimationFrame(B0(b,"onAnimationFrame"));return;}if(Er===null){d=new CD;d.oq=I1;b=new I;b.mY=H(16);d.nF=b;d.oo=H(32);d.ow=0;CC();d.ot=CK;Er=d;}Ke(h,Er);D(h);}
let UY=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;Wj(a.rh);c=BM.nJ.width;d=BM.nJ.height;e=0;f=a.s7;I2();if(f===Uq){a.s7=QG;ADx(b);e=1;}if(!(c==a.wu&&d==a.x$&&!e)){a.wu=c;a.x$=d;B3.dY(0,0,c,d);g=b.ph;if(g!==null)g.dZ(c,d);}g=a.yr;f=a.ul;h=f.ne;d=f.m7;i=g.ne;j=i.data;k=g.m7;c=k+d|0;if(c<=j.length)l=i;else{m=8;if(m<=c)m=c;k=k*1.75|0;if(m>k)k=m;l=i.constructor;if(l===null)f=null;else{f=l.classObject;if(f===null){f=new B6;f.nn=l;n=f;l.classObject=n;}}l=f.nn.$meta.item;if(l===null)n=null;else{n=l.classObject;if(n===
null){n=new B6;n.nn=l;o=n;l.classObject=o;}}if(n===null){b=new CO;Z(b);D(b);}if(n===Br(B4)){b=new Bc;Z(b);D(b);}if(k<0){b=new Dp;Z(b);D(b);}l=D6(n.nn,k);f=l.data;e=g.m7;k=f.length;if(e<k)k=e;Ex(i,0,l,0,k);g.ne=l;}Ex(h,0,l,g.m7,d);g.m7=c;g=a.ul;h=g.ne;e=0;p=g.m7;f=null;if(e>p){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(e<p){i=h.data;d=e+1|0;i[e]=f;e=d;}g.m7=0;p=0;while(true){g=a.yr;e=g.m7;d=BJ(p,e);if(d>=0){h=g.ne;p=0;f=null;if(p>e){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(p<e){i=h.data;d=p+1|0;i[p]=f;p=d;}g.m7=0;g=a.rh;q
=Bk(g.v6,K(1));g.v6=q;if(WD(q,K(60)))YL(b);P$(a.t0);return;}if(d>=0)break;g.ne.data[p].cV();p=p+1|0;}f=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,p,10);G(b,b.mW,B(36));KR(b,g.m7);Ja(f,U(b));D(f);}
let ZT=a=>{let b,c,d,e,f;b=a.uR;c=new Ny;c.Br=a;d=Jr;b=b.vh;e=new I;e.mY=H(16);f=e.mW;if(b===null)b=B(2);G(e,f,b);G(e,e.mW,B(91));b=U(e);e=new I;e.mY=H(16);f=e.mW;if(b===null)b=B(2);G(e,f,b);G(e,e.mW,B(94));M5(d,1,U(e),c);}
let Ti=F(0);
function L6(){C.call(this);this.ph=null;}
let ABk=a=>{return;}
let AAe=a=>{return;}
let YL=a=>{let b;b=a.ph;if(b!==null)b.d2(BM.xu);}
let J7=(a,b)=>{a.ph=b;if(b!==null){b.d3();a.ph.dZ(BM.nJ.width,BM.nJ.height);}}
function Q3(){let a=this;L6.call(a);a.qd=null;a.oN=0;a.tK=null;a.to=null;}
let ADx=a=>{let b,c,d,e,f,g,h;Eb.sO=1;b=new ET;c=Qs;d=new JY;e=c.v3;L2();Li(d,e,B(95),Tz);XP(b,AXV(d,0),null,1);a.tK=b;EM();c=Yu;f=b.tf.x_;f.oe=c.oe;f.od=c.od;f.oc=c.oc;f.ob=c.ob;c=new MC;ACL();OJ(c,1000,null);a.to=c;g=Bf(Lv,4);h=g.data;c=new PQ;c.ru=MO(512);c.qV=Bi;c.tB=a;h[0]=c;c=new TT;c.rC=MO(512);c.qS=Bi;c.tg=a;h[1]=c;c=new NO;c.rR=MO(512);c.q0=Bi;c.tw=a;h[2]=c;c=new Oh;c.r5=MO(512);c.qO=Bi;c.tu=a;h[3]=c;a.qd=g;a.oN=0;c=h[0];a.ph=c;if(c!==null){c.d3();a.ph.dZ(BM.nJ.width,BM.nJ.height);}}
let ACt=F();
let Bm=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return B(45);d=1<<c;e=d-1|0;f=(((32-Gw(b)|0)+c|0)-1|0)/c|0;g=H(f);h=g.data;i=Cj(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=Iw((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new M;P();l.mX=O(g.data,0,h.length);return l;}
let Fd=F(By);
let AEa=null;let Uq=null;let QG=null;let ATN=null;let I2=()=>{I2=X(Fd);AOI();}
let AOI=()=>{let b,c,d;b=new Fd;I2();b.m9=B(96);b.m6=0;AEa=b;c=new Fd;c.m9=B(97);c.m6=1;Uq=c;d=new Fd;d.m9=B(98);d.m6=2;QG=d;ATN=N(Fd,[b,c,d]);}
let NC=F(0);
let Ce=F(0);
let P8=F(0);
function L4(){let a=this;C.call(a);a.pN=null;a.uZ=null;}
let IO=null;let I9=()=>{I9=X(L4);AL2();}
let X6=a=>{return a.pN.document;}
let AC6=(a,b)=>{a.uZ=b;requestAnimationFrame(B0(a,"onAnimationFrame"));}
let V$=(a,b,c)=>{let d;d=DD(c,"handleEvent");a.pN.addEventListener(BP(b),B0(d,"handleEvent"));}
let AL2=()=>{let b;b=new L4;I9();b.pN=window;IO=b;}
let ARq=(a,b)=>{let c;b;c=a.uZ;a.uZ=null;Yy(c);}
let ABo=F();
let PN=F();
let Gs=null;let Py=()=>{Py=X(PN);AQt();}
let AAI=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;Py();if(b===null){d=new Bc;d.mZ=1;d.m0=1;d.m1=B(34);D(d);}d=null;e=0;f=b.m7;while(e<f){if(e>=b.m7){g=new L;d=new I;d.mY=H(16);G(d,d.mW,B(35));J(d,d.mW,e,10);G(d,d.mW,B(36));c=b.m7;J(d,d.mW,c,10);b=U(d);g.mZ=1;g.m0=1;g.m1=b;D(g);}k:{h=b.ne.data[e];if(h!==null){if(d===null){g=Gs;i=h.constructor;if(i===null)j=null;else{j=i.classObject;if(j===null){j=new B6;j.nn=i;k=j;i.classObject=k;}}l=CF(g,j);d=l<0?null:g.oE.data[l];if(d===null)break k;}g=d.pf;if(g.m7<d.q6){CH(g,h);l=d.sV;m
=d.pf.m7;if(l>m)m=l;d.sV=m;if(ED(h,Dq))h.B();}else if(ED(h,Dq))h.B();if(!c)d=null;}}e=e+1|0;}}
let AQt=()=>{Gs=Fi(51,0.800000011920929);}
function J$(){Ea.call(this);this.wo=0.0;}
let ALZ=null;let GV=a=>{return a.wo;}
let Gb=b=>{let c,d,e,f,g,h,i,j,k,l,m;if(b.mX.length?0:1){b=new B_;b.mZ=1;b.m0=1;D(b);}c=0;d=b.mX.length;while(c>=0&&c<b.mX.length){if(b.mX.charCodeAt(c)>32){while(true){e=d-1|0;if(e<0)break;if(e>=b.mX.length)break;if(b.mX.charCodeAt(e)>32){f=0;if(c>=0&&c<b.mX.length){if(b.mX.charCodeAt(c)==45){c=c+1|0;f=1;}else if(CY(b,c)==43)c=c+1|0;if(c==d){b=new B_;Z(b);D(b);}q:{e=CY(b,c);g=0;h=(-1);i=100000000;j=0;if(e!=46){j=1;if(e>=48&&e<=57){v:{while(c<d){if(CY(b,c)!=48)break v;c=c+1|0;}}while(c<d){k=CY(b,c);if(k<48)break q;if
(k>57)break q;if(i>0){g=g+Cj(i,k-48|0)|0;i=DQ(i,10);}h=h+1|0;c=c+1|0;}}else{b=new B_;Z(b);D(b);}}}if(c<d&&CY(b,c)==46){c=c+1|0;j:{while(true){if(c>=d)break j;e=CY(b,c);k=BJ(e,48);if(k<0)break j;if(e>57)break;if(!g&&!k)h=h+(-1)|0;else if(i>0){g=g+Cj(i,e-48|0)|0;i=DQ(i,10);}c=c+1|0;j=1;}}if(!j)D(TV());}if(c<d){k=CY(b,c);if(k!=101&&k!=69)D(TV());k=c+1|0;l=0;if(k==d)D(TV());if(CY(b,k)==45){k=k+1|0;l=1;}else if(CY(b,k)==43)k=k+1|0;m=0;c=0;w:{while(true){if(k>=d)break w;e=CY(b,k);if(e<48)break w;if(e>57)break;m=(10
*m|0)+(e-48|0)|0;c=1;k=k+1|0;}}if(!c)D(TV());if(l)m= -m|0;h=h+m|0;}return AEq(g,h,f);}b=new S;b.mZ=1;b.m0=1;D(b);}d=d+(-1)|0;}b=new S;b.mZ=1;b.m0=1;D(b);}c=c+1|0;if(c==d){b=new B_;b.mZ=1;b.m0=1;D(b);}}b=new S;b.mZ=1;b.m0=1;D(b);}
let ARH=()=>{ALZ=Br(EB);}
function JU(){let a=this;C.call(a);a.n$=null;a.nW=0;a.wc=0;}
let OH=(a,b)=>{let c,d,e,f,g;c=a.n$;d=c.data;e=a.nW;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=B9(f);g=d.data.length;if(e<g)g=e;B$(c,0,d,0,g);a.n$=d;}c=d.data;f=a.nW;a.nW=f+1|0;c[f]=b;}
let SP=(a,b,c,d)=>{let e,f;if((c+d|0)<=b.nW){KA(a,b.n$,c,d);return;}e=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(99));J(f,f.mW,c,10);G(f,f.mW,B(51));J(f,f.mW,d,10);G(f,f.mW,B(52));c=b.nW;J(f,f.mW,c,10);b=U(f);e.mZ=1;e.m0=1;e.m1=b;D(e);}
let KA=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.n$;f=e.data;g=a.nW;h=g+d|0;if(h<=f.length)f=e;else{if(8>h)h=8;i=g*1.75|0;if(h>i)i=h;f=B9(i);j=f.data.length;if(g<j)j=g;B$(e,0,f,0,j);a.n$=f;}B$(b,c,f,a.nW,d);a.nW=a.nW+d|0;}
let OU=(a,b)=>{let c,d;if(b<a.nW)return a.n$.data[b];c=new L;d=new I;d.mY=H(16);G(d,d.mW,B(35));J(d,d.mW,b,10);G(d,d.mW,B(36));b=a.nW;J(d,d.mW,b,10);d=U(d);c.mZ=1;c.m0=1;c.m1=d;D(c);}
let Uj=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.nW;if(c>=d){e=new L;f=new I;f.mY=H(16);G(f,f.mW,B(53));J(f,f.mW,c,10);G(f,f.mW,B(36));b=a.nW;J(f,f.mW,b,10);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}if(b<=c){g=(c-b|0)+1|0;h=d-g|0;if(a.wc){i=a.n$;c=b+g|0;B$(i,c,i,b,d-c|0);}else{j=c+1|0;if(h>j)j=h;i=a.n$;B$(i,j,i,b,d-j|0);}a.nW=h;return;}e=new L;f=new I;f.mY=H(16);G(f,f.mW,B(54));J(f,f.mW,b,10);G(f,f.mW,B(55));J(f,f.mW,c,10);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}
let Pq=a=>{let b;if(a.nW)return a.n$.data[0];b=new BK;b.mZ=1;b.m0=1;b.m1=B(41);D(b);}
let ACp=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bc;d=new I;d.mY=H(16);G(d,d.mW,B(56));J(d,d.mW,b,10);d=U(d);c.mZ=1;c.m0=1;c.m1=d;D(c);}e=a.nW;f=e+b|0;g=a.n$;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=B9(h);b=i.data.length;if(e<b)b=e;B$(g,0,i,0,b);a.n$=i;}return a.n$;}
let Yq=F();
let SW=b=>{return Math.sin(b);}
let AG2=b=>{return Math.cos(b);}
let II=b=>{return Math.log(b);}
let G0=b=>{return Math.sqrt(b);}
let IW=b=>{return Math.ceil(b);}
let Ju=(b,c)=>{return Math.pow(b,c);}
let BZ=()=>{return Math.random();}
let Jc=(b,c)=>{if(b>c)c=b;return c;}
let ACo=(b,c)=>{return Math.min(b,c);}
let AUo=(b,c)=>{return ACo(b,c);}
let J9=(b,c)=>{return Math.max(b,c);}
let AIt=(b,c)=>{return J9(b,c);}
let IK=b=>{return Math.abs(b);}
let E7=b=>{return Math.sign(b);}
function Di(){let a=this;C.call(a);a.nY=null;a.n_=null;a.p0=0.0;a.vB=0.0;a.wf=0.0;}
let A5R=()=>{let a=new Di();Xy(a);return a;}
let Xy=a=>{let b;b=new B7;b.nZ=1;b.ne=Bf(C,16);a.nY=b;b=new JU;b.wc=1;b.n$=B9(16);a.n_=b;}
let NN=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.nY;d=b.nY;e=d.ne;f=d.m7;g=c.ne;h=g.data;i=c.m7;j=i+f|0;if(j<=h.length)d=g;else{k=8;if(k<=j)k=j;i=i*1.75|0;if(k>i)i=k;l=g.constructor;if(l===null)d=null;else{d=l.classObject;if(d===null){d=new B6;d.nn=l;m=d;l.classObject=m;}}l=DR(d);if(l===null){b=new CO;Z(b);D(b);}if(l===Br(B4)){b=new Bc;Z(b);D(b);}if(i<0){b=new Dp;Z(b);D(b);}d=D6(l.nn,i);l=d.data;k=c.m7;n=l.length;if(k<n)n=k;Ex(g,0,d,0,n);c.ne=d;}Ex(e,0,d,c.m7,f);c.m7=j;c=a.n_;o=c.nW;if(o<=0?0:1)c.nW=o-1|0;b
=b.n_;KA(c,b.n$,0,b.nW);}
let Zf=a=>{let b,c,d,e,f,g,h;b=a.nY;c=b.ne;d=0;e=b.m7;f=null;if(d>e){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m7=0;a.n_.nW=0;}
let NX=a=>{let b,c,d,e,f,g,h,i,j,k;b=new I;c=a.nY;d=c.m7;b.mY=H(d+32|0);e=0;while(true){if(e>=d){G(b,b.mW,B(59));f=a.p0;DT(b,b.mW,f);G(b,b.mW,B(59));f=a.vB;DT(b,b.mW,f);G(b,b.mW,B(59));f=a.wf;DT(b,b.mW,f);c=new M;g=b.mY;h=g.data;d=b.mW;P();i=h.length;if(d>=0&&d<=(i-0|0)){c.mX=O(g.data,0,d);return c;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}if(e>=c.m7)break;i=c.ne.data[e].qN&65535;j=b.mW;Bb(b,j,j+1|0);b.mY.data[j]=i;e=e+1|0;}k=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,e,10);G(b,b.mW,B(36));e=c.m7;J(b,b.mW,e,
10);c=new M;g=b.mY;h=g.data;d=b.mW;P();i=h.length;if(d>=0&&d<=(i-0|0)){c.mX=O(g.data,0,d);k.mZ=1;k.m0=1;k.m1=c;D(k);}b=new L;Z(b);D(b);}
function DE(){let a=this;C.call(a);a.n1=null;a.nD=0;a.pu=0;}
let Fs=(a,b)=>{let c,d,e,f,g;c=a.n1;d=c.data;e=a.nD;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Q(f);g=d.data.length;if(e<g)g=e;B$(c,0,d,0,g);a.n1=d;}c=d.data;f=a.nD;a.nD=f+1|0;c[f]=b;}
let AD4=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.n1;e=d.data;f=a.nD;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=Q(h);i=g.data.length;if(f<i)i=f;B$(d,0,g,0,i);a.n1=g;}e=g.data;j=a.nD;e[j]=b;e[j+1|0]=c;a.nD=j+2|0;}
let Gg=(a,b)=>{let c,d;if(b<a.nD)return a.n1.data[b];c=new L;d=new I;d.mY=H(16);G(d,d.mW,B(35));J(d,d.mW,b,10);G(d,d.mW,B(36));b=a.nD;J(d,d.mW,b,10);d=U(d);c.mZ=1;c.m0=1;c.m1=d;D(c);}
let Jx=(a,b,c)=>{let d,e;if(b<a.nD){a.n1.data[b]=c;return;}d=new L;e=new I;e.mY=H(16);G(e,e.mW,B(35));J(e,e.mW,b,10);G(e,e.mW,B(36));b=a.nD;J(e,e.mW,b,10);e=U(e);d.mZ=1;d.m0=1;d.m1=e;D(d);}
let Qw=a=>{return a.n1.data[a.nD-1|0];}
let AAQ=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bc;d=new I;d.mY=H(16);G(d,d.mW,B(56));J(d,d.mW,b,10);d=U(d);c.mZ=1;c.m0=1;c.m1=d;D(c);}e=a.nD;f=e+b|0;g=a.n1;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=Q(h);b=i.data.length;if(e<b)b=e;B$(g,0,i,0,b);a.n1=i;}return a.n1;}
let AOH=a=>{let b,c,d,e,f,g,h;if(a.pu){b=a.n1;c=1;d=0;e=a.nD;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=EL();g.$id$=h;}return a.$id$;}
let AU9=(a,b)=>{let c,d,e,f,g,h;if(b===a)return 1;if(!a.pu)return 0;if(!(b instanceof DE))return 0;c=b;if(!c.pu)return 0;d=a.nD;if(d!=c.nD)return 0;e=a.n1;f=c.n1;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
let AOj=a=>{let b,c,d,e,f,g,h,i;if(!a.nD)return B(58);b=a.n1;c=new Ji;d=H(32);e=d.data;c.nN=d;f=c.nx;if(f==e.length)C3(c,f+1|0);b=b.data;e=c.nN.data;g=c.nx;c.nx=g+1|0;e[g]=91;NT(c,b[0],0,48);h=1;while(h<a.nD){i=B(59).mX.length;f=c.nx+i|0;if(f>c.nN.data.length)C3(c,f);Hw(B(59),0,i,c.nN,c.nx);c.nx=f;NT(c,b[h],0,48);h=h+1|0;}f=c.nx;if(f==c.nN.data.length)C3(c,f+1|0);c:{b=c.nN;e=b.data;g=c.nx;f=g+1|0;c.nx=f;e[g]=93;if(!f)c=B(43);else{c=new M;P();g=e.length;if(f<0)break c;if(f>(g-0|0))break c;c.mX=O(b.data,0,f);}return c;}c
=new L;c.mZ=1;c.m0=1;D(c);}
let LV=F(0);
let KW=F();
let FE=F(0);
function Jh(){let a=this;KW.call(a);a.qH=0;a.oQ=null;a.wd=0;a.uH=0.0;a.rG=0;}
let A2g=(a,b)=>{let c=new Jh();AVK(c,a,b);return c;}
let J8=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let AVK=(a,b,c)=>{let d,e,f;if(b>=0&&c>0.0){b=J8(b);a.qH=0;d=Bf(Fz,b);e=d.data;a.oQ=d;a.uH=c;a.rG=e.length*c|0;return;}f=new Bc;f.mZ=1;f.m0=1;D(f);}
let Xi=(a,b,c,d)=>{let e,f;e=a.oQ.data[c];while(e!==null){if(e.q7==d){f=e.pc;if(b!==f&&!b.cG(f)?0:1)break;}e=e.pm;}return e;}
let J1=(a,b,c)=>{let d,e,f,g,h,i;if(b===null){d=a.oQ.data;e=d[0];while(e!==null&&e.pc!==null){e=e.pm;}if(e===null){a.wd=a.wd+1|0;f=null;e=new Fz;b=null;e.pc=f;e.pL=b;e.q7=0;e.pm=d[0];d[0]=e;g=a.qH+1|0;a.qH=g;if(g>a.rG)PK(a,d.length);}}else{h=b.cF();d=a.oQ.data;i=h&(d.length-1|0);e=d[i];while(e!==null){if(e.q7==h){f=e.pc;if(b!==f&&!b.cG(f)?0:1)break;}e=e.pm;}if(e===null){a.wd=a.wd+1|0;e=new Fz;f=null;e.pc=b;e.pL=f;e.q7=h;d=a.oQ.data;e.pm=d[i];d[i]=e;g=a.qH+1|0;a.qH=g;if(g>a.rG)PK(a,d.length);}}f=e.pL;e.pL=c;return f;}
let PK=(a,b)=>{let c,d,e,f,g,h,i,j;c=J8(!b?1:b<<1);d=Bf(Fz,c);e=d.data;f=0;c=c-1|0;while(true){g=a.oQ.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.q7&c;j=h.pm;h.pm=e[i];e[i]=h;h=j;}f=f+1|0;}a.oQ=d;a.rG=e.length*a.uH|0;}
let AHl=(b,c)=>{return b!==c&&!b.cG(c)?0:1;}
let TE=F(0);
let Q6=F();
let DF=F();
let AF8=null;let W9=null;let BY=null;let BS=null;let ABz=null;let AR4=null;let BB=null;let BH=null;let SD=null;let SE=null;let AD2=b=>{let c,d,e;c=new M;d=H(1);e=d.data;e[0]=b;P();c.mX=O(d.data,0,e.length);return c;}
let VK=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new L;e.mZ=1;e.m0=1;D(e);}
let ZF=b=>{return (55296|(b-65536|0)>>10&1023)&65535;}
let ADF=b=>{return (56320|b&1023)&65535;}
let Qa=()=>{if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}return BS;}
let NK=()=>{if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}return BY;}
let Cg=(b,c)=>{let d,e;d=b.zW.data;if(c<d.length)return c+d[c]|0;d=b.zM;e=AC7(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;}
let AC7=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=BJ(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;}
let IP=b=>{let c,d,e,f,g,h;if(W9===null){if(SD===null)SD=Ya();W9=AV0((SD.value!==null?Be(SD.value):null));}c=W9.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=BJ(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);}
let Iw=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
let Fr=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bc;c.mZ=1;c.m0=1;D(c);}if(b<65536){d=H(1);d.data[0]=b&65535;return d;}return P2([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);}
let CG=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(ABz===null){if(SE===null)SE=AEV();ABz=AW8((SE.value!==null?Be(SE.value):null));}e=ABz.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.xx)c=f+1|0;else{d=g.w6;if(b>=d)return g.w$.data[b-d|0];d=f-1|0;}}return 0;}
let HH=b=>{b:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break b;if(b>159)break b;}return 1;}return CG(b)!=16?0:1;}
let AGT=()=>{AF8=Br(AHE);AR4=Bf(DF,128);}
let DW=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
let En=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
let Ya=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
let AEV=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let Wy=F();
let APY=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
let JE=F();
let BA=null;let Er=null;let JC=null;let Ex=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mf(b)&&(e+f|0)<=Mf(d)){c:{o:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new B6;h.nn=g;i=h;g.classObject=i;}}j=DR(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new B6;h.nn=g;i=h;g.classObject=i;}}i=DR(h);if(j!==null&&i!==null){if(j===i)break o;if(!(j.nn.$meta.primitive?1:0)&&!(i.nn.$meta.primitive?1:0)){k=b;l=0;m
=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p=i.nn;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Rp(g.constructor,p)?1:0)){LI(b,c,d,e,l);b=new J4;b.mZ=1;b.m0=1;D(b);}l=l+1|0;m=o;}LI(b,c,d,e,f);return;}if(!(j.nn.$meta.primitive?1:0))break c;if(i.nn.$meta.primitive?1:0)break o;else break c;}b=new J4;b.mZ=1;b.m0=1;D(b);}}LI(b,c,d,e,f);return;}b=new J4;b.mZ=1;b.m0=1;D(b);}b=new L;b.mZ=1;b.m0=1;D(b);}d=new CO;d.mZ=1;d.m0=1;d.m1=B(100);D(d);}
let B$=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mf(b)&&(e+f|0)<=Mf(d)){LI(b,c,d,e,f);return;}b=new L;b.mZ=1;b.m0=1;D(b);}
let LI=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}}
let Fa=()=>{return BQ((new Date()).getTime());}
let Lb=()=>{let b,c;if(JC===null){b=new Mj;KV(b,11);DV(b,B(101),B(102));DV(b,B(84),B(103));DV(b,B(104),B(105));DV(b,B(106),B(107));DV(b,B(108),B(109));DV(b,B(110),B(111));DV(b,B(112),B(102));DV(b,B(113),B(105));c=new Mj;KV(c,11);c.CG=b;JC=c;}}
let RU=(b,c)=>{Lb();return DV(JC,b,c);}
let Ne=F(0);
function N6(){let a=this;C.call(a);a.nO=0;a.Az=0;a.Bd=0;a.pi=0;}
let YH=a=>{return a.nO;}
let V0=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;b:{A2F();switch(ATg.data[d.m6]){case 1:if(a.pi){if(BA===null){e=new CD;e.oq=Dd;d=new I;d.mY=H(16);e.nF=d;e.oo=H(32);e.ow=0;CC();e.ot=CK;BA=e;}e=BA;g=new I;g.mY=H(16);G(g,g.mW,B(114));G(g,g.mW,c===null?B(2):c);d=new M;h=g.mY;i=h.data;j=g.mW;P();k=i.length;if(j>=0&&j<=(k-0|0)){d.mX=O(h.data,0,j);g=e.nF;G(g,g.mW,d);j=g.mW;Bb(g,j,j+1|0);g.mY.data[j]=10;CM(e);}else{c=new L;Z(c);D(c);}}a.nO=a.nO+1|0;d=new G8;d.p3=a;d.rp=b;d.pW=c;d.qa=f;CJ();c=null;e=null;d.pt=new C;d.ps=1;d.qj
=e;d.qA=c;k=C4;C4=k+1|0;d.qx=K(k);c=new E_;c.ql=d;Gd(c);break b;case 2:d=null;g=new NE;g.uQ=a;g.tq=f;g.zj=d;g.A6=e;if(a.pi){if(BA===null){e=new CD;e.oq=Dd;d=new I;CI(d);d.mY=H(16);e.nF=d;e.oo=H(32);e.ow=0;CC();e.ot=CK;BA=e;}f=BA;d=new I;d.mY=H(16);CZ(d,d.mW,C1(B(114)));CZ(d,d.mW,c===null?B(2):C1(c));e=new M;h=d.mY;i=h.data;l=d.mW;Kf(0,l,i.length);e.mX=O(h.data,0,l);KX(f,e);}a.nO=a.nO+1|0;d=new G9;d.pX=a;d.rd=b;d.pT=c;d.qs=g;CJ();c=null;e=null;d.pt=new C;d.ps=1;d.qj=e;d.qA=c;k=C4;C4=k+1|0;d.qx=K(k);c=new E_;c.ql
=d;Gd(c);break b;case 3:break;case 4:OV(a,b,c,AYs(a,f));break b;case 5:Z0(f,c,null);break b;default:c=new W;e=new I;FS(e);Fy(Fy(e,B(115)),d);Po(c,Cr(e));D(c);}OV(a,b,c,f);}}
let UK=(a,b,c,d)=>{let e,f,g,h,i;if(a.pi){if(BA===null){e=new CD;e.oq=Dd;f=new I;f.mY=H(16);e.nF=f;e.oo=H(32);e.ow=0;CC();e.ot=CK;BA=e;}e=BA;f=new I;f.mY=H(16);G(f,f.mW,B(114));G(f,f.mW,c===null?B(2):c);g=U(f);f=e.nF;G(f,f.mW,g);h=f.mW;Bb(f,h,h+1|0);f.mY.data[h]=10;CM(e);}a.nO=a.nO+1|0;f=new G8;f.p3=a;f.rp=b;f.pW=c;f.qa=d;CJ();c=null;d=null;f.pt=new C;f.ps=1;f.qj=d;f.qA=c;i=C4;C4=i+1|0;f.qx=K(i);c=new E_;c.ql=f;Gd(c);}
let M5=(a,b,c,d)=>{let e,f,g,h;if(a.pi){if(BA===null){e=new CD;e.oq=Dd;f=new I;f.mY=H(16);e.nF=f;e.oo=H(32);e.ow=0;CC();e.ot=CK;BA=e;}e=BA;f=new I;f.mY=H(16);G(f,f.mW,B(116));G(f,f.mW,c===null?B(2):c);g=U(f);f=e.nF;G(f,f.mW,g);h=f.mW;Bb(f,h,h+1|0);f.mY.data[h]=10;CM(e);}a.nO=a.nO+1|0;e=new XMLHttpRequest();f=new ND;f.sY=a;f.rF=e;f.xk=b;f.vx=c;f.xX=d;f=B0(f,"handleEvent");e.onreadystatechange=f;f=new ID;f.x6=a;f.u2=d;d=B0(f,"handleEvent");e.onprogress=d;e.open("GET",BP(c),!!b);e.setRequestHeader("Content-Type",
"text/plain; charset=utf-8");e.send();}
let OV=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.pi){if(BA===null){e=new CD;e.oq=Dd;f=new I;f.mY=H(16);e.nF=f;e.oo=H(32);e.ow=0;CC();e.ot=CK;BA=e;}e=BA;f=new I;f.mY=H(16);G(f,f.mW,B(114));G(f,f.mW,c===null?B(2):c);g=new M;h=f.mY;i=h.data;j=f.mW;P();k=i.length;if(j>=0&&j<=(k-0|0)){g.mX=O(h.data,0,j);f=e.nF;G(f,f.mW,g);k=f.mW;Bb(f,k,k+1|0);f.mY.data[k]=10;CM(e);}else{c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}}a.nO=a.nO+1|0;f=new G9;f.pX=a;f.rd=b;f.pT=c;f.qs=d;CJ();c=null;d=null;f.pt=new C;f.ps=1;f.qj=d;f.qA=c;l=C4;C4=l+1|
0;f.qx=K(l);c=new E_;c.ql=f;Gd(c);}
let OZ=F();
let Jr=null;let AFN=()=>{return Jr;}
let Lk=F();
let Dn=0;let Jl=0;let AMH=()=>{Dn=1;}
let RE=F(0);
function KK(){let a=this;C.call(a);a.sl=null;a.nJ=null;a.AK=null;a.sJ=null;a.z2=null;a.BN=null;a.yq=0.0;a.wk=Bi;a.v6=Bi;a.xu=0.0;a.v0=0.0;a.yi=0;}
let AD9=0;let JQ=null;let JG=()=>{JG=X(KK);AHF();}
let A1U=a=>{let b=new KK();ZN(b,a);return b;}
let ZN=(a,b)=>{let c,d,e,f,g,h,i,j,k;JG();a.yq=0.0;a.wk=Fa();a.v6=K(-1);a.xu=0.0;a.v0=0.0;a.AK=b;I9();c=window.document;d=b.Bf;a.nJ=c.getElementById(BP(d));e=AKp();d=!!b.Av;e.alpha=d;d=!!b.za;e.antialias=d;d=!!b.zw;e.stencil=d;d=!!b.zX;e.premultipliedAlpha=d;d=!!b.z5;e.preserveDrawingBuffer=d;f=a.nJ;if(b.yj)a.sl=f.getContext("webgl2",e);a:{if(b.yj){d=a.sl;if(d!==null){if(!b.x9)f=A3l(d);else{f=new N7;T5(f,d);}a.z2=f;a.sJ=f;break a;}}f=f.getContext("webgl",e);a.sl=f;if(!b.x9)d=A2V(f);else{d=new Tg;Re(d,f);}a.sJ
=d;}d=a.sJ.ev(7938);c=a.sJ.ev(7936);g=a.sJ.ev(7937);f=new Ps;Nm();Zt(f,PZ,d,c,g);a.BN=f;h=b.uV;if(!(h<0&&b.sj<0)){if(h&&b.sj?1:0)Kr(a,h,b.sj);else{i=IO;h=i.pN.document.documentElement.clientWidth-b.wT|0;j=i.pN.document.documentElement.clientHeight-b.yo|0;k=!b.vM?1.0:devicePixelRatio||1;Kr(a,k*h|0,k*j|0);}}b=a.nJ;d=new RG;d.Bw=a;UE(b,B0(d,"fullscreenChanged"));}
let Wj=a=>{let b,c,d;b=Fa();c=F5(Ci(b,a.wk))/1000.0;a.xu=c;a.wk=b;c=a.v0+c;a.v0=c;d=a.yi+1|0;a.yi=d;if(c>1.0){a.yq=d;a.v0=0.0;a.yi=0;}}
let AEh=a=>{return a.nJ.width;}
let AE9=a=>{return a.nJ.height;}
let JF=a=>{return a.yq|0;}
let Kr=(a,b,c)=>{let d,e,f,g,h,i;d=a.nJ;e=b;d.width=e;d=a.nJ;e=c;d.height=e;if(a.AK.vM){f=devicePixelRatio||1;e=a.nJ.style;g=b/f;AIT();h=new I;h.mY=H(16);O_(h,h.mW,g);G(h,h.mW,B(117));i=U(h);e.setProperty("width",BP(i));f=c/f;h=new I;h.mY=H(16);O_(h,h.mW,f);G(h,h.mW,B(117));d=U(h);e.setProperty("height",BP(d));}}
let AHF=()=>{AD9=0;JQ=Dv(51,0.800000011920929);}
let UE=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}}
function Um(){let a=this;C.call(a);a.xH=null;a.tY=null;a.vJ=null;a.uh=null;a.um=null;a.zk=null;a.u8=null;a.xo=0;a.vh=null;}
let A0_=(a,b,c)=>{let d=new Um();ANS(d,a,b,c);return d;}
let ANS=(a,b,c,d)=>{let e;a.xH=Fi(51,0.800000011920929);a.tY=Fi(51,0.800000011920929);a.vJ=Fi(51,0.800000011920929);a.uh=Fi(51,0.800000011920929);a.um=Fi(51,0.800000011920929);a.zk=Fi(51,0.800000011920929);e=new B7;e.nZ=1;e.ne=Bf(C,16);a.u8=e;a.xo=(-1);a.vh=b;ACF(a,c,d);}
let ACF=(a,b,c)=>{let d,e,f;d=c.pM;if(d.yZ!==null){e=b.ownerDocument;f=new PG;f.Cx=a;e.addEventListener("dragenter",B0(f,"handleEvent"),!!0);f=new PH;f.CZ=a;e.addEventListener("dragover",B0(f,"handleEvent"),!!0);f=new PD;f.y2=a;f.yK=c;f.yz=d;e.addEventListener("drop",B0(f,"handleEvent"));}}
let Yi=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(Yt(a,b.xd)){b.vm=b.AR;b.uc=1;b.sv=0;b.p2=0;return 0;}if(b.p2)return 0;b.sv=0;b.uc=0;b.p2=1;c=b.xd;d=b.y8;e=b.y0;f=new PF;f.Db=a;f.pI=b;b=Jr;g=a.vh;h=new I;h.mY=H(16);i=h.mW;if(g===null)g=B(2);F6(h,i,g);F6(h,h.mW,B(91));g=new M;j=h.mY;k=j.data;l=h.mW;P();m=k.length;if(l>=0&&l<=(m-0|0)){g.mX=O(j.data,0,l);h=new I;h.mY=H(16);G(h,h.mW,g);G(h,h.mW,c===null?B(2):c);g=new M;k=h.mY;j=k.data;m=h.mW;i=j.length;if(m>=0&&m<=(i-0|0)){g.mX=O(k.data,0,m);h=new PC;h.vO=a;h.pQ=f;h.v2
=d;h.vu=c;V0(b,1,g,d,e,h);return 1;}b=new L;Z(b);D(b);}b=new L;Dt(b);D(b);}
let IC=(a,b,c,d)=>{b:{A3g();switch(AG5.data[b.m6]){case 1:break;case 2:BE(a.tY,c,d);break b;case 3:BE(a.um,c,d);break b;case 4:BE(a.vJ,c,d);break b;case 5:BE(a.xH,c,null);break b;default:break b;}BE(a.uh,c,d);}}
let VL=(a,b)=>{let c,d,e,f,$$je;if(CF(a.uh,b)<0?0:1){k:{try{c=AJU(AAw(Vu(a.uh,b),B(118)));}catch($$e){$$je=Bx($$e);if($$je instanceof La){break k;}else{throw $$e;}}return c;}return null;}if(CF(a.tY,b)<0?0:1){b=new Mz;d=Bz(1);e=d.data.length;b.tE=d;b.rc=0;b.xm=0;b.tA=0+e|0;return b;}if(CF(a.um,b)<0?0:1){c=a.um;f=CF(c,b);b=f<0?null:c.oE.data[f];c=new TI;c.xM=b;return c;}if(!(CF(a.vJ,b)<0?0:1))return null;b=new Mz;d=Bz(1);e=d.data.length;b.tE=d;b.rc=0;b.xm=0;b.tA=0+e|0;return b;}
let Yt=(a,b)=>{let c;c=CF(a.uh,b)<0?0:1;return !c&&!(CF(a.tY,b)<0?0:1)&&!(CF(a.um,b)<0?0:1)&&!(CF(a.vJ,b)<0?0:1)&&!(CF(a.xH,b)<0?0:1)?0:1;}
let DH=F();
let APv=(a,b)=>{return;}
let Rn=F(0);
let EI=F(0);
function AAk(){let a=this;C.call(a);a.n3=null;a.tn=0;a.qT=null;a.qo=null;a.on=null;a.om=null;a.u$=null;a.u_=null;a.vS=null;a.st=0;a.uU=null;a.vP=0;a.rL=null;a.yc=null;a.xp=null;a.o_=null;a.re=Bi;a.sU=0;}
let AYc=a=>{let b=new AAk();ARE(b,a);return b;}
let AWn=b=>{let c,d,e,f;c=Kl;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(IK(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
let ARE=(a,b)=>{a.tn=0;a.qT=Dv(20,0.800000011920929);a.qo=Na(20);a.on=Q(20);a.om=Q(20);a.u$=Q(20);a.u_=Q(20);a.vS=AHe(51,0.800000011920929);a.st=0;a.uU=Na(256);a.vP=0;a.rL=Na(256);a.yc=Na(5);a.xp=AHe(51,0.800000011920929);a.sU=1;a.n3=b;AAc(a);}
let AAc=a=>{let b;b=a.n3.ownerDocument;b.addEventListener("mousedown",B0(a,"handleEvent"),!!0);b.addEventListener("mouseup",B0(a,"handleEvent"),!!0);b.addEventListener("mousemove",B0(a,"handleEvent"),!!0);b.addEventListener("wheel",B0(a,"handleEvent"),!!0);b.addEventListener("keydown",B0(a,"handleEvent"),!!0);b.addEventListener("keyup",B0(a,"handleEvent"),!!0);b.addEventListener("keypress",B0(a,"handleEvent"),!!0);a.n3.addEventListener("touchstart",B0(a,"handleEvent"),!!1);a.n3.addEventListener("touchmove",
B0(a,"handleEvent"),!!1);a.n3.addEventListener("touchcancel",B0(a,"handleEvent"),!!1);a.n3.addEventListener("touchend",B0(a,"handleEvent"),!!1);}
let AAt=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b:{c=Be(b.type);if(FG(c,B(119))){window.focus();d=b.target;e=a.n3;if(d!==e?0:1){f=a.qo.data;if(!f[0]){a.sU=1;a.tn=1;f[0]=1;g=MA(b.button);Wk(a.vS,g);a.yc.data[g]=1;a.u$.data[0]=0;a.u_.data[0]=0;if(!L5(a)){h=HV(a,b,a.n3);i=Ic(a,b,a.n3);a.on.data[0]=h;a.om.data[0]=i;}else{f=a.on.data;f[0]=f[0]+b.movementX|0;f=a.om.data;f[0]=f[0]+b.movementY|0;}a.re=FU();j=a.o_;if(j!==null)j.eO(a.on.data[0],a.om.data[0],0,MA(b.button));b.preventDefault();b.stopPropagation();break b;}}k
=HV(a,b,e);l=Ic(a,b,a.n3);if(!(k>=0.0&&k<=AEh(BM)&&l>=0.0&&l<=AE9(BM)))a.sU=0;return;}if(FG(c,B(120))){if(!a.qo.data[0])return;ADK(a.vS,MA(b.button));f=a.qo;f.data[0]=a.vS.pS<=0?0:1;if(!L5(a)){F3(a,0,HV(a,b,a.n3)-a.on.data[0]|0,Ic(a,b,a.n3)-a.om.data[0]|0);a.on.data[0]=HV(a,b,a.n3);a.om.data[0]=Ic(a,b,a.n3);}else{F3(a,0,b.movementX|0,b.movementY|0);f=a.on.data;f[0]=f[0]+b.movementX|0;f=a.om.data;f[0]=f[0]+b.movementY|0;}a.re=FU();a.qo.data[0]=0;j=a.o_;if(j!==null)j.eR(a.on.data[0],a.om.data[0],0,MA(b.button));}
else if(!FG(c,B(121))){if(FG(c,B(122))){if(a.o_!==null){m=AWn(b);a.o_.eT(0.0,m|0);}a.re=FU();}else if(FG(c,B(123))){a.tn=1;n=b.changedTouches;o=0;p=n.length;while(o<p){j=n.item(o);q=j.identifier;e=a.qT;r=ADB(a);Ch(e,q,Hb(r));a.qo.data[r]=1;a.on.data[r]=HD(a,j,a.n3);a.om.data[r]=H_(a,j,a.n3);a.u$.data[r]=0;a.u_.data[r]=0;j=a.o_;if(j!==null)j.eO(a.on.data[r],a.om.data[r],r,0);o=o+1|0;}a.re=FU();b.preventDefault();}}else{if(!L5(a)){h=HV(a,b,a.n3);i=Ic(a,b,a.n3);F3(a,0,h-a.on.data[0]|0,i-a.om.data[0]|0);a.on.data[0]
=h;a.om.data[0]=i;}else{F3(a,0,b.movementX|0,b.movementY|0);f=a.on.data;f[0]=f[0]+b.movementX|0;f=a.om.data;f[0]=f[0]+b.movementY|0;}a.re=FU();j=a.o_;if(j!==null){if(!a.qo.data[0])j.eY(a.on.data[0],a.om.data[0]);else j.eZ(a.on.data[0],a.om.data[0],0);}}}if(FG(c,B(124))){n=b.changedTouches;o=0;p=n.length;while(o<p){s=n.item(o);q=s.identifier;t=Dg(M7(a.qT,q));F3(a,t,HD(a,s,a.n3)-a.on.data[t]|0,H_(a,s,a.n3)-a.om.data[t]|0);a.on.data[t]=HD(a,s,a.n3);a.om.data[t]=H_(a,s,a.n3);j=a.o_;if(j!==null)j.eZ(a.on.data[t],
a.om.data[t],t);o=o+1|0;}a.re=FU();b.preventDefault();}if(FG(c,B(125))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=Dg(M7(a.qT,q));Il(a.qT,q);a.qo.data[t]=0;h=HD(a,s,a.n3);i=H_(a,s,a.n3);F3(a,t,h-a.on.data[t]|0,i-a.om.data[t]|0);f=a.on.data;f[t]=h;v=a.om.data;v[t]=i;j=a.o_;if(j!==null)j.eR(f[t],v[t],t,0);o=o+1|0;}a.re=FU();b.preventDefault();}if(FG(c,B(126))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=Dg(M7(a.qT,q));Il(a.qT,q);a.qo.data[t]=0;h=HD(a,
s,a.n3);i=H_(a,s,a.n3);F3(a,t,h-a.on.data[t]|0,i-a.om.data[t]|0);f=a.on.data;f[t]=h;v=a.om.data;v[t]=i;j=a.o_;if(j!==null)j.eR(f[t],v[t],t,0);o=o+1|0;}a.re=FU();b.preventDefault();}}
let Ul=(a,b)=>{let c,d,e,f,g,h,i;c=Be(b.type);if(c===B(127))d=1;else if(!(B(127) instanceof M))d=0;else{e=B(127);d=c.mX!==e.mX?0:1;}if(d&&a.sU){e:{f=Zu(b.keyCode);g=0;switch(f){case 67:g=8;break e;case 112:g=127;break e;default:}}e=a.xp;if(!f)d=e.sL;else{h=e.q4;d=T(Y(V(K(f),E(2135587861, 2654435769)),e.sq));g:{while(true){i=h.data[d];if(!i){d= -(d+1|0)|0;break g;}if(i==f)break;d=(d+1|0)&e.qQ;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.o_;if(e!==null){e.e2(f);a.o_.e3(g);}}
else{h=a.uU.data;if(!h[f]){a.st=a.st+1|0;h[f]=1;a.vP=1;a.rL.data[f]=1;e=a.o_;if(e!==null)e.e2(f);}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===B(128))d=1;else if(!(B(128) instanceof M))d=0;else{e=B(128);d=c.mX!==e.mX?0:1;}if(d&&a.sU){d=b.charCode&65535;e=a.o_;if(e!==null)e.e3(d);if(d==9){b.preventDefault();b.stopPropagation();}}else{if(c===B(129))d=1;else if(!(B(129) instanceof M))d=0;else{e=B(129);d=c.mX!==e.mX?0:1;}if(d&&a.sU){f=Zu(b.keyCode);e=a.xp;if(!f)d=e.sL;else{h=e.q4;d=T(Y(V(K(f),
E(2135587861, 2654435769)),e.sq));x:{while(true){g=h.data[d];if(!g){d= -(d+1|0)|0;break x;}if(g==f)break;d=(d+1|0)&e.qQ;}}d=d<0?0:1;}if(d)b.preventDefault();h=a.uU.data;if(h[f]){a.st=a.st-1|0;h[f]=0;}e=a.o_;if(e!==null)e.e4(f);if(f==61){b.preventDefault();b.stopPropagation();}}}}}
let ADB=a=>{let b,c,d;b=0;while(true){if(b>=20)return (-1);c=a.qT;if(b>=(-128)&&b<=127){Fk();d=Fv.data[b+128|0];}else{d=new EO;d.pz=b;}if(!AEF(c,d,0))break;b=b+1|0;}return b;}
let P$=a=>{let b,c,d;b:{if(a.tn){a.tn=0;b=0;while(true){c=a.yc.data;if(b>=c.length)break b;c[b]=0;b=b+1|0;}}}d:{if(a.vP){a.vP=0;d=0;while(true){c=a.rL.data;if(d>=c.length)break d;c[d]=0;d=d+1|0;}}}}
let F3=(a,b,c,d)=>{a.u$.data[b]=c;a.u_.data[b]=d;}
let HV=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(NU(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Be(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.mX!==c.mX?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+E7(d)*0.5|0;}
let Ic=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(RJ(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Be(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.mX!==c.mX?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+E7(d)*0.5|0;}
let HD=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(NU(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Be(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.mX!==c.mX?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+E7(d)*0.5|0;}
let H_=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(RJ(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Be(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.mX!==c.mX?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+E7(d)*0.5|0;}
let RJ=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
let NU=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
let D3=(a,b)=>{if(b==(-1))return a.st<=0?0:1;if(b>=0&&b<=255)return a.uU.data[b];return 0;}
let WT=(a,b)=>{a.o_=b;}
let L5=a=>{return AUs(a.n3)?1:0;}
let AUs=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;}
let AGI=(a,b)=>{AAt(a,b);Ul(a,b);}
let QK=F(0);
function Sh(){C.call(this);this.v3=null;}
function RM(){C.call(this);this.Ci=null;}
let RF=F(0);
let PT=F();
let OA=F(0);
function ABt(){let a=this;C.call(a);a.Ck=0;a.vw=0;a.BM=null;a.xv=null;}
let A1c=()=>{let a=new ABt();AKx(a);return a;}
let AKx=a=>{let b;a.Ck=0;a.vw=1;b=new QR;b.va=a;a.BM=b;a.xv=B(43);}
let ACC=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}}
let Ez=F();
let Eb=null;let BM=null;let A0K=null;let Dj=null;let Qs=null;let A1X=null;let B3=null;let Bp=null;let Ga=null;let Sl=F(0);
let RO=F(0);
function Xc(){C.call(this);this.As=null;}
let A3K=()=>{let a=new Xc();AHP(a);return a;}
let AHP=a=>{a.As=null;a.As=A3a();}
function Un(){C.call(this);this.wh=null;}
let A2o=a=>{let b=new Un();AIZ(b,a);return b;}
let AIZ=(a,b)=>{a.wh=b;}
let WZ=(a,b)=>{let c,d,$$je;c=Be(a.wh.q8.pN.document.visibilityState);if(B(131)===c)d=1;else if(!(c instanceof M))d=0;else{c=c;d=B(131).mX!==c.mX?0:1;}if(!d){b=a.wh.uO;GT(b);e:{try{c=P_(b);while(Qh(c)){AAy(OQ(c));}D8(b);break e;}catch($$e){$$je=Bx($$e);c=$$je;}D8(b);D(c);}}else{b=a.wh.uO;GT(b);f:{try{c=P_(b);while(Qh(c)){ACI(OQ(c));}D8(b);break f;}catch($$e){$$je=Bx($$e);c=$$je;}D8(b);D(c);}}}
let ASc=(a,b)=>{WZ(a,b);}
function Uo(){C.call(this);this.tH=null;}
let AYA=a=>{let b=new Uo();AHB(b,a);return b;}
let AHB=(a,b)=>{a.tH=b;}
let AEX=(a,b)=>{let c,d,e,f,g;c=a.tH.q8.pN.document.documentElement.clientWidth;b=a.tH;d=c-b.pM.wT|0;e=b.q8.pN.document.documentElement.clientHeight;b=a.tH;f=b.pM;c=e-f.yo|0;if(d>0&&c>0){if(b.rh!==null){if(f.vM){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Kr(a.tH.rh,d,c);}return;}}
let AVQ=(a,b)=>{AEX(a,b);}
let Bc=F(BC);
let AO1=a=>{let b=new Bc();AE8(b,a);return b;}
let AE8=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
let ADn=F();
let Kf=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new L;e.mZ=1;e.m0=1;D(e);}
let Vt=F();
let MD=(b,c)=>{let d,e,f,g;if(b<0){d=new Bc;e=new I;e.mY=H(16);G(e,e.mW,B(132));J(e,e.mW,b,10);e=U(e);d.mZ=1;d.m0=1;d.m1=e;D(d);}f=IW(b/c)|0;if(2>f)f=2;g=Le(f);if(g<=1073741824)return g;d=new Bc;e=new I;e.mY=H(16);G(e,e.mW,B(133));J(e,e.mW,b,10);e=U(e);d.mZ=1;d.m0=1;d.m1=e;D(d);}
let Qv=F(Ea);
let AI$=null;let ADk=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new B_;b.mZ=1;b.m0=1;b.m1=B(77);D(b);}f=0;if(c>=0&&c<b.mX.length){e:{switch(b.mX.charCodeAt(c)){case 43:g=c+1|0;break e;case 45:f=1;g=c+1|0;break e;default:}g=c;}h=Bi;i=K(e);h:{while(g<d){j=g+1|0;if(g<0)break h;if(g>=b.mX.length)break h;k=IP(b.mX.charCodeAt(g));if(k<0){l=new B_;b=BR(b,c,d);if(b===null)b=B(2);m=new I;m.mY=H(16);G(m,m.mW,B(78));G(m,m.mW,b);b=new M;n=m.mY;o=n.data;d=m.mW;e=o.length;if(d>=0&&d<=(e-0|0)){b.mX=O(n.data,
0,d);l.mZ=1;l.m0=1;l.m1=b;D(l);}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}if(k>=e){l=new B_;p=BR(b,c,d);if(p===null)p=B(2);b=new I;KB(b,16);Lx(b,B(79));Fy(Fy(Ei(b,e),B(72)),p);LK(l,Cr(b));D(l);}h=Bk(V(i,h),K(k));if(FX(h,Bi)){if(j==d&&CN(h,E(0, 2147483648))&&f)return E(0, 2147483648);l=new B_;b=Wp(Pu(b,c,d));m=EE();Fy(Fy(m,B(80)),b);LK(l,Cr(m));D(l);}g=j;}if(f)h=GM(h);return h;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new B_;l=new I;l.mY=H(16);G(l,l.mW,B(81));J(l,l.mW,e,10);m=new M;n=l.mY;o=n.data;d
=l.mW;P();e=o.length;if(d>=0&&d<=(e-0|0)){m.mX=O(n.data,0,d);b.mZ=1;b.m0=1;b.m1=m;D(b);}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let FB=b=>{let c,d;if(CN(b,Bi))return 64;c=0;d=Y(b,32);if(Ed(d,Bi))c=32;else d=b;b=Y(d,16);if(CN(b,Bi))b=d;else c=c|16;d=Y(b,8);if(CN(d,Bi))d=b;else c=c|8;b=Y(d,4);if(CN(b,Bi))b=d;else c=c|4;d=Y(b,2);if(CN(d,Bi))d=b;else c=c|2;if(Ed(Y(d,1),Bi))c=c|1;return (64-c|0)-1|0;}
let DZ=(b,c)=>{return A1g(b,c);}
let U2=(b,c)=>{return AYG(b,c);}
let Ej=(b,c)=>{return A1e(b,c);}
let AMj=()=>{AI$=Br(API);}
let Zj=F();
let AKp=()=>{return {};}
let LQ=F(0);
function Ix(){let a=this;C.call(a);a.m4=null;a.rz=0;a.rr=0;a.o5=0;a.BS=0;a.BZ=0;a.tD=0;a.rN=0;a.n8=null;a.oL=null;a.pD=null;a.Cz=null;a.B6=null;a.sk=null;a.pe=null;a.pH=0;a.ut=null;a.rD=null;a.tr=null;a.uG=null;a.BA=null;}
let A2V=a=>{let b=new Ix();Re(b,a);return b;}
let Re=(a,b)=>{a.rz=1;a.rr=1;a.o5=1;a.BS=1;a.BZ=1;a.tD=1;a.rN=1;a.n8=Dv(51,0.800000011920929);a.oL=Dv(51,0.800000011920929);a.pD=Dv(51,0.800000011920929);a.Cz=Dv(51,0.800000011920929);a.B6=Dv(51,0.800000011920929);a.sk=Dv(51,0.800000011920929);a.pe=Dv(51,0.800000011920929);a.pH=0;a.ut=new Float32Array(40000);a.rD=new Int32Array(12000);a.tr=new Int16Array(12000);a.uG=new Int8Array(12000);a.BA=new Uint8Array(240000);a.m4=b;b.pixelStorei(37441,0);}
let M3=(a,b)=>{let c,d,e,f,g;if(Jl){c=(!ED(b,Ew)?null:b.ri.nC.data).buffer;d=b.m3;e=b.m2-d|0;return new Float32Array(c,d,e);}if((b.m2-b.m3|0)>a.ut.length)a.ut=new Float32Array(b.m2-b.m3|0);e=b.m3;d=0;while(true){f=b.m2;if(e>=f)break;c=a.ut;g=Qg(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.ut;e=f-b.m3|0;return c.subarray(0,e);}
let QA=(a,b)=>{let c,d,e,f,g;if(Jl){c=(!ED(b,Ew)?null:b.rf.nC.data).buffer;d=b.m3;e=b.m2-d|0;return new Int16Array(c,d,e);}if((b.m2-b.m3|0)>a.tr.length)a.tr=new Int16Array(b.m2-b.m3|0);e=b.m3;d=0;while(true){f=b.m2;if(e>=f)break;c=a.tr;g=AB5(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.tr;e=f-b.m3|0;return c.subarray(0,e);}
let Th=(a,b)=>{let c,d,e,f,g;if(Jl){c=(!ED(b,Ew)?null:b.fi()).buffer;d=b.m3;e=b.m2-d|0;return new Int32Array(c,d,e);}if((b.m2-b.m3|0)>a.rD.length)a.rD=new Int32Array(b.m2-b.m3|0);e=b.m3;d=0;while(true){f=b.m2;if(e>=f)break;c=a.rD;g=b.bh(e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.rD;e=f-b.m3|0;return c.subarray(0,e);}
let L0=(a,b)=>{let c,d,e,f,g;if(Jl)return !ED(b,Ew)?null:b.nC.data;if((b.m2-b.m3|0)>a.uG.length)a.uG=new Int8Array(b.m2-b.m3|0);c=b.m3;d=0;while(true){e=b.m2;if(c>=e)break;f=a.uG;g=T6(b,c);d;f[d]=g;c=c+1|0;d=d+1|0;}f=a.uG;c=e-b.m3|0;return f.subarray(0,c);}
let AVe=(a,b)=>{if((b.m2-b.m3|0)>a.rD.length)a.rD=new Int32Array(b.m2-b.m3|0);}
let AFA=(a,b)=>{let c,d,e,f,g;c=a.pe;d=a.pH;if(!d)c=!c.ns?null:c.nq;else{e=c.no;f=T(Y(V(K(d),E(2135587861, 2654435769)),c.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==d)break;f=(f+1|0)&c.nr;}}c=f<0?null:c.np.data[f];}c=c;if(!b)c=!c.ns?null:c.nq;else{e=c.no;d=T(Y(V(K(b),E(2135587861, 2654435769)),c.nt));q:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break q;}if(f==b)break;d=(d+1|0)&c.nr;}}c=d<0?null:c.np.data[d];}Bv();return c===null?null:c.nv;}
let AL_=(a,b,c)=>{let d,e,f,g,h,i;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();h=d===null?null:d.nv;d=a.oL;if(!c)d=!d.ns?null:d.nq;else{e=d.no;b=T(Y(V(K(c),E(2135587861, 2654435769)),d.nt));i:{while(true){g=e.data[b];if(!g){b= -(b+1|0)|0;break i;}if(g==c)break;b=(b+1|0)&d.nr;}}d=b<0?null:d.np.data[b];}i=d===null?null:d.nv;a.m4.attachShader(h,i);}
let AVI=(a,b,c)=>{let d,e,f,g,h;d=a.m4;e=a.pD;if(!c)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(c),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.bindBuffer(b,e);}
let AIR=(a,b,c)=>{let d,e,f,g,h;d=a.m4;e=a.sk;if(!c)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(c),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.bindTexture(b,e);}
let ALC=(a,b,c,d,e)=>{a.m4.blendFuncSeparate(b,c,d,e);}
let Pw=(a,b,c,d,e)=>{let f,g;if(d instanceof EC){f=a.m4;d=M3(a,d);f.bufferData(b,d,e);}else if(d instanceof Hg){f=a.m4;d=Th(a,d);f.bufferData(b,d,e);}else if(d instanceof Hk){f=a.m4;d=QA(a,d);f.bufferData(b,d,e);}else if(d instanceof Fn){f=a.m4;g=L0(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new W;f.mZ=1;f.m0=1;f.m1=B(134);D(f);}a.m4.bufferData(b,c,e);}}
let Pv=(a,b,c,d,e)=>{let f,g;if(e instanceof EC){f=a.m4;e=M3(a,e);f.bufferSubData(b,c,e);}else if(e instanceof Hg){f=a.m4;g=Th(a,e);f.bufferSubData(b,c,g);}else if(e instanceof Hk){f=a.m4;e=QA(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof Fn)){f=new W;f.mZ=1;f.m0=1;f.m1=B(134);D(f);}f=a.m4;e=L0(a,e);f.bufferSubData(b,c,e);}}
let AT0=(a,b)=>{a.m4.clear(b);}
let AI2=(a,b,c,d,e)=>{a.m4.clearColor(b,c,d,e);}
let AM5=(a,b)=>{let c,d,e,f;c=a.oL;if(!b)c=!c.ns?null:c.nq;else{d=c.no;e=T(Y(V(K(b),E(2135587861, 2654435769)),c.nt));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.nr;}}c=e<0?null:c.np.data[e];}Bv();c=c===null?null:c.nv;a.m4.compileShader(c);}
let AWl=a=>{let b,c;b=a.m4.createProgram();c=a.rz;a.rz=c+1|0;Ch(a.n8,c,Co(b));return c;}
let ARr=(a,b)=>{let c,d;c=a.m4.createShader(b);d=a.rr;a.rr=d+1|0;Ch(a.oL,d,Co(c));return d;}
let AT1=(a,b)=>{a.m4.depthMask(!!b);}
let ARc=(a,b)=>{a.m4.disable(b);}
let AP4=(a,b)=>{a.m4.disableVertexAttribArray(b);}
let AJE=(a,b,c,d)=>{a.m4.drawArrays(b,c,d);}
let ANC=(a,b,c,d,e)=>{let f,g;f=a.m4;g=e.m3;f.drawElements(b,c,d,g);}
let APD=(a,b,c,d,e)=>{a.m4.drawElements(b,c,d,e);}
let AVp=(a,b)=>{a.m4.enable(b);}
let AUz=(a,b)=>{a.m4.enableVertexAttribArray(b);}
let YD=a=>{let b,c;b=a.m4.createBuffer();c=a.o5;a.o5=c+1|0;Ch(a.pD,c,Co(b));return c;}
let AFy=(a,b)=>{a.m4.generateMipmap(b);}
let AVE=a=>{let b,c;b=a.m4.createTexture();c=a.tD;a.tD=c+1|0;Ch(a.sk,c,Co(b));return c;}
let NW=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.m4;g=a.n8;if(!b)g=!g.ns?null:g.nq;else{h=g.no;i=T(Y(V(K(b),E(2135587861, 2654435769)),g.nt));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.nr;}}g=i<0?null:g.np.data[i];}Bv();g=g===null?null:g.nv;g=f.getActiveAttrib(g,c);Ey(d,g.size);Ey(e,g.type);d.m3=0;d.m2=d.ni;d.nd=(-1);e.m3=0;e.m2=e.ni;e.nd=(-1);return Be(g.name);}
let Qm=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.m4;g=a.n8;if(!b)g=!g.ns?null:g.nq;else{h=g.no;i=T(Y(V(K(b),E(2135587861, 2654435769)),g.nt));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.nr;}}g=i<0?null:g.np.data[i];}Bv();g=g===null?null:g.nv;g=f.getActiveUniform(g,c);Ey(d,g.size);Ey(e,g.type);d.m3=0;d.m2=d.ni;d.nd=(-1);e.m3=0;e.m2=e.ni;e.nd=(-1);return Be(g.name);}
let AKH=(a,b,c)=>{let d,e,f,g,h;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();h=d===null?null:d.nv;return a.m4.getAttribLocation(h,BP(c));}
let LW=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new W;c.mZ=1;c.m0=1;c.m1=B(135);D(c);}MZ(c,0,a.m4.getParameter(b));c.m3=0;c.m2=c.ni;c.nd=(-1);}
let AWd=(a,b)=>{let c,d,e,f,g;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;return Be(c.getProgramInfoLog(d));}
let Q9=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.m4;f=a.n8;if(!b)f=!f.ns?null:f.nq;else{g=f.no;h=T(Y(V(K(b),E(2135587861, 2654435769)),f.nt));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.nr;}}f=h<0?null:f.np.data[h];}Bv();f=f===null?null:f.nv;Ey(d,e.getProgramParameter(f,c));}else{f=a.m4;e=a.n8;if(!b)e=!e.ns?null:e.nq;else{g=e.no;i=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));v:{while(true){h=g.data[i];if(!h){i= -(i+1|0)|0;break v;}if(h==b)break;i=(i
+1|0)&e.nr;}}e=i<0?null:e.np.data[i];}Bv();e=e===null?null:e.nv;Ey(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.m3=0;d.m2=d.ni;d.nd=(-1);}
let AN6=(a,b)=>{let c,d,e,f,g;c=a.m4;d=a.oL;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;return Be(c.getShaderInfoLog(d));}
let OT=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.m4;f=a.oL;if(!b)f=!f.ns?null:f.nq;else{g=f.no;h=T(Y(V(K(b),E(2135587861, 2654435769)),f.nt));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.nr;}}f=h<0?null:f.np.data[h];}Bv();f=f===null?null:f.nv;Ey(d,e.getShaderParameter(f,c));}else{f=a.m4;e=a.oL;if(!b)e=!e.ns?null:e.nq;else{g=e.no;h=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));v:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break v;}if(i==b)break;h=(h+1|0)&e.nr;}}e
=h<0?null:e.np.data[h];}Bv();e=e===null?null:e.nv;Ey(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.m3=0;d.m2=d.ni;d.nd=(-1);}
let ALm=(a,b)=>{return Be(a.m4.getParameter(b));}
let ALh=(a,b,c)=>{let d,e,f,g,h,i;d=a.m4;e=a.n8;if(!b)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d=d.getUniformLocation(e,BP(c));if(d===null)return (-1);c=a.pe;if(!b)c=!c.ns?null:c.nq;else{i=c.no;h=T(Y(V(K(b),E(2135587861, 2654435769)),c.nt));y:{while(true){g=i.data[h];if(!g){h= -(h+1|0)|0;break y;}if(g==b)break;h=(h+1|0)&c.nr;}}c=h<0?null
:c.np.data[h];}c=c;if(c===null){c=Dv(51,0.800000011920929);Ch(a.pe,b,c);}h=a.rN;a.rN=h+1|0;Ch(c,h,Co(d));return h;}
let AHt=(a,b)=>{let c,d,e,f,g;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.linkProgram(d);}
let AJD=(a,b,c)=>{a.m4.pixelStorei(b,c);}
let AFx=(a,b,c)=>{let d,e,f,g,h;d=a.m4;e=a.oL;if(!b)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.shaderSource(e,BP(c));}
let Rq=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.m4;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.m2>4){if(!Jl)l=!(j instanceof EC)?Uint8Array.from(L0(a,j)):M3(a,j);else{m=!ED(j,Ew)?null:j.nC.data;if(!(j instanceof EC)){n=j.m2-j.m3|0;o=m.byteOffset+j.m3|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.m2-j.m3|0;o=m.byteOffset+j.m3|0;l=new Float32Array(m.buffer,o,n);}}a.m4.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=AC$(j,0);JG();j=JQ;if(!p)j=!j.ns?null:j.nq;else{q=j.no;n=T(Y(V(K(p),E(2135587861, 2654435769)),
j.nt));q:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break q;}if(o==p)break;n=(n+1|0)&j.nr;}}j=n<0?null:j.np.data[n];}k=j;r=k.qw;if(r===null&&k.nX!==null?1:0){j=a.m4;s=k.nX.ux;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.so!==null?1:0){j=a.m4;s=k.so;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.ty!==null?1:0){j=a.m4;s=k.ty;j.texImage2D(b,c,d,h,i,s);}else{j=a.m4;FC(k);s=k.qw;j.texImage2D(b,c,d,h,i,s);}}}
let AOX=(a,b,c,d)=>{a.m4.texParameterf(b,c,d);}
let AQS=(a,b,c,d)=>{let e,f;e=a.m4;f=d;e.texParameterf(b,c,f);}
let ARb=(a,b,c)=>{let d,e,f,g,h,i;d=a.pe;e=a.pH;if(!e)d=!d.ns?null:d.nq;else{f=d.no;g=T(Y(V(K(e),E(2135587861, 2654435769)),d.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.nr;}}d=g<0?null:d.np.data[g];}d=d;if(!b)d=!d.ns?null:d.nq;else{f=d.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));q:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break q;}if(h==b)break;g=(g+1|0)&d.nr;}}d=g<0?null:d.np.data[g];}Bv();i=d===null?null:d.nv;a.m4.uniform1i(i,c);}
let ALl=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.pe;f=a.pH;if(!f)g=!g.ns?null:g.nq;else{h=g.no;i=T(Y(V(K(f),E(2135587861, 2654435769)),g.nt));n:{while(true){c=h.data[i];if(!c){i= -(i+1|0)|0;break n;}if(c==f)break;i=(i+1|0)&g.nr;}}g=i<0?null:g.np.data[i];}g=g;if(!b)g=!g.ns?null:g.nq;else{h=g.no;c=T(Y(V(K(b),E(2135587861, 2654435769)),g.nt));q:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break q;}if(f==b)break;c=(c+1|0)&g.nr;}}g=c<0?null:g.np.data[c];}Bv();j=g===null?null:g.nv;g=a.m4;k="uniformMatrix4fv";l=!!d;if
(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];c;m[c]=n;c=c+1|0;}}g[k](j,l,m);}
let AHw=(a,b)=>{let c,d,e,f,g;a.pH=b;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.useProgram(d);}
let AOt=(a,b,c,d,e,f,g)=>{a.m4.vertexAttribPointer(b,c,d,!!e,f,g);}
let AFX=(a,b,c,d,e)=>{a.m4.viewport(b,c,d,e);}
let QJ=F(0);
function M1(){let a=this;Ix.call(a);a.nA=null;a.C4=null;a.CM=0;a.BG=null;a.BX=0;a.Ce=null;a.Bl=0;a.uj=null;a.t6=0;a.CE=null;}
let A3l=a=>{let b=new M1();T5(b,a);return b;}
let T5=(a,b)=>{Re(a,b);a.C4=Dv(51,0.800000011920929);a.CM=1;a.BG=Dv(51,0.800000011920929);a.BX=1;a.Ce=Dv(51,0.800000011920929);a.Bl=1;a.uj=Dv(51,0.800000011920929);a.t6=1;a.CE=new Uint32Array(12000);a.nA=b;}
let ALP=(a,b)=>{let c,d,e,f,g;c=a.nA;d=a.uj;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.bindVertexArray(d);}
let APV=(a,b,c,d,e)=>{a.nA.drawArraysInstanced(b,c,d,e);}
let AWK=(a,b,c,d,e,f)=>{a.nA.drawElementsInstanced(b,c,d,e,f);}
let AQu=(a,b,c)=>{let d,e,f,g;d=c.m3;e=0;while(e<b){f=a.nA.createVertexArray();g=a.t6;a.t6=g+1|0;Ch(a.uj,g,Co(f));Ey(c,g);e=e+1|0;}BW(c,d);}
let ANI=(a,b,c)=>{if(b!=34045)LW(a,b,c);else{MZ(c,0,a.nA.getParameter(b));c.m3=0;c.m2=c.ni;c.nd=(-1);}}
let N7=F(M1);
let AKN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nA;d=a.uj;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.bindVertexArray(d);b=a.nA.getError();if(!b)return;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g-0|0)){i.mX
=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AH_=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nA.drawArraysInstanced(b,c,d,e);b=a.nA.getError();if(!b)return;f=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Z(f);D(f);}
let AVC=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.nA.drawElementsInstanced(b,c,d,e,f);b=a.nA.getError();if(!b)return;g=new W;h=Bm(b,4);i=new I;i.mY=H(16);G(i,i.mW,B(136));J(i,i.mW,b,10);G(i,i.mW,B(59));b=i.mW;if(h===null)h=B(2);G(i,b,h);j=new M;k=i.mY;l=k.data;c=i.mW;P();d=l.length;if(c>=0&&c<=(d-0|0)){j.mX=O(k.data,0,c);g.mZ=1;g.m0=1;g.m1=j;D(g);}g=new L;Z(g);D(g);}
let AHk=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.m3;e=0;while(e<b){f=a.nA.createVertexArray();g=a.t6;a.t6=g+1|0;Ch(a.uj,g,Co(f));Ey(c,g);e=e+1|0;}BW(c,d);b=a.nA.getError();if(!b)return;c=new W;h=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(h===null)h=B(2);G(f,b,h);i=new M;j=f.mY;k=j.data;e=f.mW;P();l=k.length;if(e>=0&&e<=(l-0|0)){i.mX=O(j.data,0,e);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AH6=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.m4;e=a.sk;if(!c)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(c),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.bindTexture(b,e);b=a.nA.getError();if(!b)return;d=new W;i=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.mY;k=f.data;c=e.mW;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.mX
=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=j;D(d);}d=new L;Z(d);D(d);}
let AT4=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.clear(b);b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AO2=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.m4.clearColor(b,c,d,e);f=a.nA.getError();if(!f)return;g=new W;h=Bm(f,4);i=new I;i.mY=H(16);G(i,i.mW,B(136));J(i,i.mW,f,10);G(i,i.mW,B(59));f=i.mW;if(h===null)h=B(2);G(i,f,h);j=new M;k=i.mY;l=k.data;m=i.mW;P();n=l.length;if(m>=0&&m<=(n-0|0)){j.mX=O(k.data,0,m);g.mZ=1;g.m0=1;g.m1=j;D(g);}g=new L;Z(g);D(g);}
let AHg=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.depthMask(!!b);b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AUD=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.disable(b);b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AKg=(a,b,c,d)=>{let e,f,g,h,i,j;a.m4.drawArrays(b,c,d);b=a.nA.getError();if(!b)return;e=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.mX=O(i.data,0,c);e.mZ=1;e.m0=1;e.m1=h;D(e);}e=new L;Z(e);D(e);}
let ARC=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.m4;g=e.m3;f.drawElements(b,c,d,g);b=a.nA.getError();if(!b)return;e=new W;h=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(h===null)h=B(2);G(f,b,h);i=new M;j=f.mY;k=j.data;c=f.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);e.mZ=1;e.m0=1;e.m1=i;D(e);}e=new L;Z(e);D(e);}
let AST=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.enable(b);b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AFm=(a,b)=>{return Be(a.m4.getParameter(b));}
let AGo=(a,b,c)=>{let d,e,f,g,h,i,j;a.m4.pixelStorei(b,c);b=a.nA.getError();if(!b)return;d=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=g;D(d);}d=new L;Z(d);D(d);}
let APt=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;Rq(a,b,c,d,e,f,g,h,i,j);b=a.nA.getError();if(!b)return;j=new W;k=Bm(b,4);l=new I;l.mY=H(16);G(l,l.mW,B(136));J(l,l.mW,b,10);G(l,l.mW,B(59));b=l.mW;if(k===null)k=B(2);G(l,b,k);m=new M;n=l.mY;o=n.data;c=l.mW;P();d=o.length;if(c>=0&&c<=(d-0|0)){m.mX=O(n.data,0,c);j.mZ=1;j.m0=1;j.m1=m;D(j);}j=new L;Z(j);D(j);}
let AJ7=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.m4.texParameterf(b,c,d);b=a.nA.getError();if(!b)return;e=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();k=j.length;if(c>=0&&c<=(k-0|0)){h.mX=O(i.data,0,c);e.mZ=1;e.m0=1;e.m1=h;D(e);}e=new L;Z(e);D(e);}
let ALF=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.m4.viewport(b,c,d,e);b=a.nA.getError();if(!b)return;f=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Z(f);D(f);}
let AN_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();h=d===null?null:d.nv;d=a.oL;if(!c)d=!d.ns?null:d.nq;else{e=d.no;b=T(Y(V(K(c),E(2135587861, 2654435769)),d.nt));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.nr;}}d=b<0?null:d.np.data[b];}i=d===null?null:d.nv;a.m4.attachShader(h,i);b
=a.nA.getError();if(!b)return;d=new W;j=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(j===null)j=B(2);G(h,b,j);i=new M;e=h.mY;k=e.data;c=h.mW;P();f=k.length;if(c>=0&&c<=(f-0|0)){i.mX=O(e.data,0,c);d.mZ=1;d.m0=1;d.m1=i;D(d);}d=new L;Z(d);D(d);}
let AU_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.m4;e=a.pD;if(!c)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(c),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.bindBuffer(b,e);b=a.nA.getError();if(!b)return;d=new W;i=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.mY;k=f.data;c=e.mW;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.mX
=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=j;D(d);}d=new L;Z(d);D(d);}
let AKO=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.m4.blendFuncSeparate(b,c,d,e);b=a.nA.getError();if(!b)return;f=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Z(f);D(f);}
let APh=(a,b,c,d,e)=>{let f,g,h,i,j;Pw(a,b,c,d,e);b=a.nA.getError();if(!b)return;d=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();e=j.length;if(c>=0&&c<=(e-0|0)){h.mX=O(i.data,0,c);d.mZ=1;d.m0=1;d.m1=h;D(d);}d=new L;Z(d);D(d);}
let AU6=(a,b,c,d,e)=>{let f,g,h,i,j;Pv(a,b,c,d,e);b=a.nA.getError();if(!b)return;e=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.mX=O(i.data,0,c);e.mZ=1;e.m0=1;e.m1=h;D(e);}e=new L;Z(e);D(e);}
let AQj=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.oL;if(!b)c=!c.ns?null:c.nq;else{d=c.no;e=T(Y(V(K(b),E(2135587861, 2654435769)),c.nt));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.nr;}}c=e<0?null:c.np.data[e];}Bv();g=c===null?null:c.nv;a.m4.compileShader(g);b=a.nA.getError();if(!b)return;c=new W;h=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(h===null)h=B(2);G(g,b,h);i=new M;d=g.mY;j=d.data;e=g.mW;P();f=j.length;if(e>=0&&e<=(f-0|0)){i.mX=O(d.data,
0,e);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AWk=a=>{let b,c,d,e,f,g,h,i,j;b=a.m4.createProgram();c=a.rz;a.rz=c+1|0;Ch(a.n8,c,Co(b));d=a.nA.getError();if(!d)return c;b=new W;e=Bm(d,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,d,10);G(f,f.mW,B(59));d=f.mW;if(e===null)e=B(2);G(f,d,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);b.mZ=1;b.m0=1;b.m1=g;D(b);}b=new L;Z(b);D(b);}
let ARZ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4.createShader(b);d=a.rr;a.rr=d+1|0;Ch(a.oL,d,Co(c));b=a.nA.getError();if(!b)return d;c=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;d=f.mW;P();j=i.length;if(d>=0&&d<=(j-0|0)){g.mX=O(h.data,0,d);c.mZ=1;c.m0=1;c.m1=g;D(c);}c=new L;Z(c);D(c);}
let AWa=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.disableVertexAttribArray(b);b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AHH=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.m4.drawElements(b,c,d,e);b=a.nA.getError();if(!b)return;f=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Z(f);D(f);}
let AR3=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.enableVertexAttribArray(b);b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AT7=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.generateMipmap(b);b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AMX=(a,b,c,d,e)=>{let f,g,h,i,j;f=NW(a,b,c,d,e);b=a.nA.getError();if(!b)return f;d=new W;g=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.mY;i=h.data;c=e.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=f;D(d);}d=new L;Z(d);D(d);}
let AT2=(a,b,c,d,e)=>{let f,g,h,i,j;f=Qm(a,b,c,d,e);b=a.nA.getError();if(!b)return f;d=new W;g=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.mY;i=h.data;c=e.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=f;D(d);}d=new L;Z(d);D(d);}
let APK=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();h=d===null?null:d.nv;b=a.m4.getAttribLocation(h,BP(c));f=a.nA.getError();if(!f)return b;c=new W;i=Bm(f,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,f,10);G(d,d.mW,B(59));b=d.mW;if(i===null)i=B(2);G(d,b,i);h=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g
-0|0)){h.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=h;D(c);}c=new L;Z(c);D(c);}
let AKU=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)LW(a,b,c);else{MZ(c,0,a.nA.getParameter(b));c.m3=0;c.m2=c.ni;c.nd=(-1);}b=a.nA.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AI6=(a,b,c,d)=>{let e,f,g,h,i,j;Q9(a,b,c,d);b=a.nA.getError();if(!b)return;d=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=g;D(d);}d=new L;Z(d);D(d);}
let AGn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c=Be(c.getProgramInfoLog(d));b=a.nA.getError();if(!b)return c;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=
(g-0|0)){i.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AWi=(a,b,c,d)=>{let e,f,g,h,i,j;OT(a,b,c,d);b=a.nA.getError();if(!b)return;d=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=g;D(d);}d=new L;Z(d);D(d);}
let AG1=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4;d=a.oL;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c=Be(c.getShaderInfoLog(d));b=a.nA.getError();if(!b)return c;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g
-0|0)){i.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AGp=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m4;e=a.n8;if(!b)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;c=d.getUniformLocation(e,BP(c));if(c===null)g=(-1);else{d=a.pe;if(!b)d=!d.ns?null:d.nq;else{f=d.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));v:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break v;}if(h==b)break;g=(g+1|0)&d.nr;}}d=g<0?
null:d.np.data[g];}d=d;if(d===null){d=Dv(51,0.800000011920929);Ch(a.pe,b,d);}g=a.rN;a.rN=g+1|0;Ch(d,g,Co(c));}b=a.nA.getError();if(!b)return g;c=new W;i=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.mY;j=f.data;g=d.mW;P();h=j.length;if(g>=0&&g<=(h-0|0)){e.mX=O(f.data,0,g);c.mZ=1;c.m0=1;c.m1=e;D(c);}c=new L;Z(c);D(c);}
let AVs=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.linkProgram(d);b=a.nA.getError();if(!b)return;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g-0|0)){i.mX=
O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AGk=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m4;e=a.oL;if(!b)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.shaderSource(e,BP(c));b=a.nA.getError();if(!b)return;c=new W;i=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.mY;j=f.data;g=d.mW;P();h=j.length;if(g>=0&&g<=(h-0|0))
{e.mX=O(f.data,0,g);c.mZ=1;c.m0=1;c.m1=e;D(c);}c=new L;Z(c);D(c);}
let AHs=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.m4;f=d;e.texParameterf(b,c,f);b=a.nA.getError();if(!b)return;e=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);e.mZ=1;e.m0=1;e.m1=i;D(e);}e=new L;Z(e);D(e);}
let AIo=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.pe;e=a.pH;if(!e)d=!d.ns?null:d.nq;else{f=d.no;g=T(Y(V(K(e),E(2135587861, 2654435769)),d.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.nr;}}d=g<0?null:d.np.data[g];}d=d;if(!b)d=!d.ns?null:d.nq;else{f=d.no;e=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.nr;}}d=e<0?null:d.np.data[e];}Bv();i=d===null?null:d.nv;a.m4.uniform1i(i,c);b=a.nA.getError();if
(!b)return;d=new W;i=Bm(b,4);j=new I;j.mY=H(16);G(j,j.mW,B(136));J(j,j.mW,b,10);G(j,j.mW,B(59));b=j.mW;if(i===null)i=B(2);G(j,b,i);k=new M;f=j.mY;l=f.data;c=j.mW;P();e=l.length;if(c>=0&&c<=(e-0|0)){k.mX=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=k;D(d);}d=new L;Z(d);D(d);}
let AWS=(a,b)=>{let c,d,e,f,g,h,i,j;a.pH=b;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.useProgram(d);b=a.nA.getError();if(!b)return;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g-0|0))
{i.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let ASv=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.m4.vertexAttribPointer(b,c,d,!!e,f,g);b=a.nA.getError();if(!b)return;h=new W;i=Bm(b,4);j=new I;j.mY=H(16);G(j,j.mW,B(136));J(j,j.mW,b,10);G(j,j.mW,B(59));b=j.mW;if(i===null)i=B(2);G(j,b,i);k=new M;l=j.mY;m=l.data;c=j.mW;P();d=m.length;if(c>=0&&c<=(d-0|0)){k.mX=O(l.data,0,c);h.mZ=1;h.m0=1;h.m1=k;D(h);}h=new L;Z(h);D(h);}
function Ps(){let a=this;C.call(a);a.ym=0;a.xI=0;a.xS=0;a.Bt=null;a.Cf=null;a.rn=null;a.Bi=B(137);}
let A5S=(a,b,c,d)=>{let e=new Ps();Zt(e,a,b,c,d);return e;}
let Zt=(a,b,c,d,e)=>{a.Bi=B(137);Nm();if(b===AEt){Gt();a.rn=RR;}else if(b===AB_){Gt();a.rn=RR;}else if(b===AS3){Gt();a.rn=S_;}else if(b===ARG){Gt();a.rn=S_;}else if(b!==PZ){Gt();a.rn=AOM;}else{Gt();a.rn=X8;}b=a.rn;Gt();if(b===RR)Lj(a,B(138),c);else if(b===X8)Lj(a,B(139),c);else if(b===S_)Lj(a,B(140),c);else{a.ym=(-1);a.xI=(-1);a.xS=(-1);d=B(43);e=B(43);}a.Bt=d;a.Cf=e;}
let Lj=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=Px(GA(b,0),c);if(HB(d)){b=d.pg;e=b.pk;if(!e){b=new BK;b.mZ=1;b.m0=1;Bd(b);D(b);}f=BJ(1,b.pU);if(f>=0){b=new L;P();c=new I;CI(c);c.mY=H(16);J(c,c.mW,1,10);c=U(c);b.mZ=1;b.m0=1;b.m1=c;D(b);}g=b.n2.data;if(g[2]<0)h=null;else{b=b.qt;if(!e){b=new BK;b.mZ=1;b.m0=1;Bd(b);D(b);}if(f>=0){b=new L;P();c=new I;CI(c);c.mY=H(16);J(c,c.mW,1,10);c=U(c);b.mZ=1;b.m0=1;b.m1=c;D(b);}i=g[2];if(!e)D(A1G());if(f>=0)D(A2u(AAU(1)));h=Pu(b,i,g[3]);}g=(Zy(h,B(141))).data;a.ym=Lc(a,g[0],2);j=g.length;a.xI
=j<2?0:Lc(a,g[1],0);a.xS=j<3?0:Lc(a,g[2],0);}else{h=Eb;b=new I;b.mY=H(16);G(b,b.mW,B(142));G(b,b.mW,c);k=U(b);if(h.sO>=2){if(BA===null){c=new CD;c.oq=Dd;b=new I;b.mY=H(16);c.nF=b;c.oo=H(32);c.ow=0;CC();c.ot=CK;BA=c;}h=BA;b=new I;b.mY=H(16);G(b,b.mW,B(137));G(b,b.mW,B(72));j=b.mW;if(k===null)k=B(2);G(b,j,k);c=U(b);b=h.nF;G(b,b.mW,c);i=b.mW;Bb(b,i,i+1|0);b.mY.data[i]=10;CM(h);}a.ym=2;a.xI=0;a.xS=0;}}
let Lc=(a,b,c)=>{let d,e,f,g,h,$$je;b:{try{d=Cs(b);}catch($$e){$$je=Bx($$e);if($$je instanceof B_){break b;}else{throw $$e;}}return d;}e=Eb;f=new I;f.mY=H(16);G(f,f.mW,B(143));G(f,f.mW,b);G(f,f.mW,B(144));J(f,f.mW,c,10);b=U(f);if(e.sO>=1){if(Er===null){e=new CD;e.oq=I1;f=new I;f.mY=H(16);e.nF=f;e.oo=H(32);e.ow=0;CC();e.ot=CK;Er=e;}e=Er;f=new I;f.mY=H(16);G(f,f.mW,B(145));G(f,f.mW,B(72));d=f.mW;if(b===null)b=B(2);G(f,d,b);g=U(f);b=e.nF;G(b,b.mW,g);h=b.mW;Bb(b,h,h+1|0);b.mY.data[h]=10;CM(e);}return c;}
let Dh=F(By);
let AEt=null;let AS3=null;let AYy=null;let ARG=null;let PZ=null;let AB_=null;let AZH=null;let Nm=()=>{Nm=X(Dh);AJt();}
let AJt=()=>{let b,c,d,e,f,g;b=new Dh;Nm();b.m9=B(4);b.m6=0;AEt=b;c=new Dh;c.m9=B(146);c.m6=1;AS3=c;d=new Dh;d.m9=B(147);d.m6=2;AYy=d;e=new Dh;e.m9=B(148);e.m6=3;ARG=e;f=new Dh;f.m9=B(149);f.m6=4;PZ=f;g=new Dh;g.m9=B(150);g.m6=5;AB_=g;AZH=N(Dh,[b,c,d,e,f,g]);}
let RV=F(0);
function RG(){C.call(this);this.Bw=null;}
let AJ_=a=>{return;}
let Tg=F(Ix);
let AVV=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.m4;e=a.sk;if(!c)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(c),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.bindTexture(b,e);b=a.m4.getError();if(!b)return;d=new W;i=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.mY;k=f.data;c=e.mW;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.mX
=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=j;D(d);}d=new L;Z(d);D(d);}
let AJc=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.clear(b);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AJ3=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.m4.clearColor(b,c,d,e);f=a.m4.getError();if(!f)return;g=new W;h=Bm(f,4);i=new I;i.mY=H(16);G(i,i.mW,B(136));J(i,i.mW,f,10);G(i,i.mW,B(59));f=i.mW;if(h===null)h=B(2);G(i,f,h);j=new M;k=i.mY;l=k.data;m=i.mW;P();n=l.length;if(m>=0&&m<=(n-0|0)){j.mX=O(k.data,0,m);g.mZ=1;g.m0=1;g.m1=j;D(g);}g=new L;Z(g);D(g);}
let APf=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.depthMask(!!b);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AWt=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.disable(b);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AM4=(a,b,c,d)=>{let e,f,g,h,i,j;a.m4.drawArrays(b,c,d);b=a.m4.getError();if(!b)return;e=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.mX=O(i.data,0,c);e.mZ=1;e.m0=1;e.m1=h;D(e);}e=new L;Z(e);D(e);}
let AV4=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.m4;g=e.m3;f.drawElements(b,c,d,g);b=a.m4.getError();if(!b)return;e=new W;h=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(h===null)h=B(2);G(f,b,h);i=new M;j=f.mY;k=j.data;c=f.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);e.mZ=1;e.m0=1;e.m1=i;D(e);}e=new L;Z(e);D(e);}
let AHL=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.enable(b);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let ANZ=(a,b)=>{return Be(a.m4.getParameter(b));}
let AQp=(a,b,c)=>{let d,e,f,g,h,i,j;a.m4.pixelStorei(b,c);b=a.m4.getError();if(!b)return;d=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=g;D(d);}d=new L;Z(d);D(d);}
let AKW=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;Rq(a,b,c,d,e,f,g,h,i,j);b=a.m4.getError();if(!b)return;j=new W;k=Bm(b,4);l=new I;l.mY=H(16);G(l,l.mW,B(136));J(l,l.mW,b,10);G(l,l.mW,B(59));b=l.mW;if(k===null)k=B(2);G(l,b,k);m=new M;n=l.mY;o=n.data;c=l.mW;P();d=o.length;if(c>=0&&c<=(d-0|0)){m.mX=O(n.data,0,c);j.mZ=1;j.m0=1;j.m1=m;D(j);}j=new L;Z(j);D(j);}
let AKo=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.m4.texParameterf(b,c,d);b=a.m4.getError();if(!b)return;e=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();k=j.length;if(c>=0&&c<=(k-0|0)){h.mX=O(i.data,0,c);e.mZ=1;e.m0=1;e.m1=h;D(e);}e=new L;Z(e);D(e);}
let AWe=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.m4.viewport(b,c,d,e);b=a.m4.getError();if(!b)return;f=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Z(f);D(f);}
let AGh=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();h=d===null?null:d.nv;d=a.oL;if(!c)d=!d.ns?null:d.nq;else{e=d.no;b=T(Y(V(K(c),E(2135587861, 2654435769)),d.nt));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.nr;}}d=b<0?null:d.np.data[b];}i=d===null?null:d.nv;a.m4.attachShader(h,i);b
=a.m4.getError();if(!b)return;d=new W;j=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(j===null)j=B(2);G(h,b,j);i=new M;e=h.mY;k=e.data;c=h.mW;P();f=k.length;if(c>=0&&c<=(f-0|0)){i.mX=O(e.data,0,c);d.mZ=1;d.m0=1;d.m1=i;D(d);}d=new L;Z(d);D(d);}
let AFl=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.m4;e=a.pD;if(!c)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(c),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.bindBuffer(b,e);b=a.m4.getError();if(!b)return;d=new W;i=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.mY;k=f.data;c=e.mW;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.mX
=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=j;D(d);}d=new L;Z(d);D(d);}
let AFh=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.m4.blendFuncSeparate(b,c,d,e);b=a.m4.getError();if(!b)return;f=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Z(f);D(f);}
let ANA=(a,b,c,d,e)=>{let f,g,h,i,j;Pw(a,b,c,d,e);b=a.m4.getError();if(!b)return;d=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();e=j.length;if(c>=0&&c<=(e-0|0)){h.mX=O(i.data,0,c);d.mZ=1;d.m0=1;d.m1=h;D(d);}d=new L;Z(d);D(d);}
let ALQ=(a,b,c,d,e)=>{let f,g,h,i,j;Pv(a,b,c,d,e);b=a.m4.getError();if(!b)return;e=new W;f=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.mY;j=i.data;c=g.mW;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.mX=O(i.data,0,c);e.mZ=1;e.m0=1;e.m1=h;D(e);}e=new L;Z(e);D(e);}
let AWC=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.oL;if(!b)c=!c.ns?null:c.nq;else{d=c.no;e=T(Y(V(K(b),E(2135587861, 2654435769)),c.nt));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.nr;}}c=e<0?null:c.np.data[e];}Bv();g=c===null?null:c.nv;a.m4.compileShader(g);b=a.m4.getError();if(!b)return;c=new W;h=Bm(b,4);g=new I;g.mY=H(16);G(g,g.mW,B(136));J(g,g.mW,b,10);G(g,g.mW,B(59));b=g.mW;if(h===null)h=B(2);G(g,b,h);i=new M;d=g.mY;j=d.data;e=g.mW;P();f=j.length;if(e>=0&&e<=(f-0|0)){i.mX=O(d.data,
0,e);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AQM=a=>{let b,c,d,e,f,g,h,i,j;b=a.m4.createProgram();c=a.rz;a.rz=c+1|0;Ch(a.n8,c,Co(b));d=a.m4.getError();if(!d)return c;b=new W;e=Bm(d,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,d,10);G(f,f.mW,B(59));d=f.mW;if(e===null)e=B(2);G(f,d,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);b.mZ=1;b.m0=1;b.m1=g;D(b);}b=new L;Z(b);D(b);}
let AWp=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4.createShader(b);d=a.rr;a.rr=d+1|0;Ch(a.oL,d,Co(c));b=a.m4.getError();if(!b)return d;c=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;d=f.mW;P();j=i.length;if(d>=0&&d<=(j-0|0)){g.mX=O(h.data,0,d);c.mZ=1;c.m0=1;c.m1=g;D(c);}c=new L;Z(c);D(c);}
let AQJ=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.disableVertexAttribArray(b);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AL4=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.m4.drawElements(b,c,d,e);b=a.m4.getError();if(!b)return;f=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Z(f);D(f);}
let AWu=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.enableVertexAttribArray(b);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let APS=(a,b)=>{let c,d,e,f,g,h,i,j;a.m4.generateMipmap(b);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AND=(a,b,c,d,e)=>{let f,g,h,i,j;f=NW(a,b,c,d,e);b=a.m4.getError();if(!b)return f;d=new W;g=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.mY;i=h.data;c=e.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=f;D(d);}d=new L;Z(d);D(d);}
let AH9=(a,b,c,d,e)=>{let f,g,h,i,j;f=Qm(a,b,c,d,e);b=a.m4.getError();if(!b)return f;d=new W;g=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.mY;i=h.data;c=e.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=f;D(d);}d=new L;Z(d);D(d);}
let AMa=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();h=d===null?null:d.nv;b=a.m4.getAttribLocation(h,BP(c));f=a.m4.getError();if(!f)return b;c=new W;i=Bm(f,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,f,10);G(d,d.mW,B(59));b=d.mW;if(i===null)i=B(2);G(d,b,i);h=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g
-0|0)){h.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=h;D(c);}c=new L;Z(c);D(c);}
let AF0=(a,b,c)=>{let d,e,f,g,h,i,j;LW(a,b,c);b=a.m4.getError();if(!b)return;c=new W;d=Bm(b,4);e=new I;e.mY=H(16);G(e,e.mW,B(136));J(e,e.mW,b,10);G(e,e.mW,B(59));b=e.mW;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
let AK1=(a,b,c,d)=>{let e,f,g,h,i,j;Q9(a,b,c,d);b=a.m4.getError();if(!b)return;d=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=g;D(d);}d=new L;Z(d);D(d);}
let AK6=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c=Be(c.getProgramInfoLog(d));b=a.m4.getError();if(!b)return c;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=
(g-0|0)){i.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AGx=(a,b,c,d)=>{let e,f,g,h,i,j;OT(a,b,c,d);b=a.m4.getError();if(!b)return;d=new W;e=Bm(b,4);f=new I;f.mY=H(16);G(f,f.mW,B(136));J(f,f.mW,b,10);G(f,f.mW,B(59));b=f.mW;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.mY;i=h.data;c=f.mW;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.mX=O(h.data,0,c);d.mZ=1;d.m0=1;d.m1=g;D(d);}d=new L;Z(d);D(d);}
let ASA=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4;d=a.oL;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c=Be(c.getShaderInfoLog(d));b=a.m4.getError();if(!b)return c;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g
-0|0)){i.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AUk=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m4;e=a.n8;if(!b)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;c=d.getUniformLocation(e,BP(c));if(c===null)g=(-1);else{d=a.pe;if(!b)d=!d.ns?null:d.nq;else{f=d.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));v:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break v;}if(h==b)break;g=(g+1|0)&d.nr;}}d=g<0?
null:d.np.data[g];}d=d;if(d===null){d=Dv(51,0.800000011920929);Ch(a.pe,b,d);}g=a.rN;a.rN=g+1|0;Ch(d,g,Co(c));}b=a.m4.getError();if(!b)return g;c=new W;i=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.mY;j=f.data;g=d.mW;P();h=j.length;if(g>=0&&g<=(h-0|0)){e.mX=O(f.data,0,g);c.mZ=1;c.m0=1;c.m1=e;D(c);}c=new L;Z(c);D(c);}
let AOz=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.linkProgram(d);b=a.m4.getError();if(!b)return;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g-0|0)){i.mX=
O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AV1=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.m4;e=a.oL;if(!b)e=!e.ns?null:e.nq;else{f=e.no;g=T(Y(V(K(b),E(2135587861, 2654435769)),e.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nr;}}e=g<0?null:e.np.data[g];}Bv();e=e===null?null:e.nv;d.shaderSource(e,BP(c));b=a.m4.getError();if(!b)return;c=new W;i=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.mY;j=f.data;g=d.mW;P();h=j.length;if(g>=0&&g<=(h-0|0))
{e.mX=O(f.data,0,g);c.mZ=1;c.m0=1;c.m1=e;D(c);}c=new L;Z(c);D(c);}
let AUd=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.m4;f=d;e.texParameterf(b,c,f);b=a.m4.getError();if(!b)return;e=new W;g=Bm(b,4);h=new I;h.mY=H(16);G(h,h.mW,B(136));J(h,h.mW,b,10);G(h,h.mW,B(59));b=h.mW;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.mY;k=j.data;c=h.mW;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.mX=O(j.data,0,c);e.mZ=1;e.m0=1;e.m1=i;D(e);}e=new L;Z(e);D(e);}
let AWj=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.pe;e=a.pH;if(!e)d=!d.ns?null:d.nq;else{f=d.no;g=T(Y(V(K(e),E(2135587861, 2654435769)),d.nt));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.nr;}}d=g<0?null:d.np.data[g];}d=d;if(!b)d=!d.ns?null:d.nq;else{f=d.no;e=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.nr;}}d=e<0?null:d.np.data[e];}Bv();i=d===null?null:d.nv;a.m4.uniform1i(i,c);b=a.m4.getError();if
(!b)return;d=new W;i=Bm(b,4);j=new I;j.mY=H(16);G(j,j.mW,B(136));J(j,j.mW,b,10);G(j,j.mW,B(59));b=j.mW;if(i===null)i=B(2);G(j,b,i);k=new M;f=j.mY;l=f.data;c=j.mW;P();e=l.length;if(c>=0&&c<=(e-0|0)){k.mX=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=k;D(d);}d=new L;Z(d);D(d);}
let AGy=(a,b)=>{let c,d,e,f,g,h,i,j;a.pH=b;c=a.m4;d=a.n8;if(!b)d=!d.ns?null:d.nq;else{e=d.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),d.nt));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nr;}}d=f<0?null:d.np.data[f];}Bv();d=d===null?null:d.nv;c.useProgram(d);b=a.m4.getError();if(!b)return;c=new W;h=Bm(b,4);d=new I;d.mY=H(16);G(d,d.mW,B(136));J(d,d.mW,b,10);G(d,d.mW,B(59));b=d.mW;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.mY;j=e.data;f=d.mW;P();g=j.length;if(f>=0&&f<=(g-0|0))
{i.mX=O(e.data,0,f);c.mZ=1;c.m0=1;c.m1=i;D(c);}c=new L;Z(c);D(c);}
let AIV=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.m4.vertexAttribPointer(b,c,d,!!e,f,g);b=a.m4.getError();if(!b)return;h=new W;i=Bm(b,4);j=new I;j.mY=H(16);G(j,j.mW,B(136));J(j,j.mW,b,10);G(j,j.mW,B(59));b=j.mW;if(i===null)i=B(2);G(j,b,i);k=new M;l=j.mY;m=l.data;c=j.mW;P();d=m.length;if(c>=0&&c<=(d-0|0)){k.mX=O(l.data,0,c);h.mZ=1;h.m0=1;h.m1=k;D(h);}h=new L;Z(h);D(h);}
function ABV(){let a=this;C.call(a);a.qu=0;a.no=null;a.np=null;a.nq=null;a.ns=0;a.zl=0.0;a.wn=0;a.nt=0;a.nr=0;}
let Dv=(a,b)=>{let c=new ABV();ALO(c,a,b);return c;}
let ALO=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.zl=c;d=MD(b,c);a.wn=d*c|0;b=d-1|0;a.nr=b;a.nt=FB(K(b));a.no=Q(d);a.np=Bf(C,d);return;}e=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(60));DT(f,f.mW,c);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}
let Ch=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.nq;a.nq=c;if(!a.ns){a.ns=1;a.qu=a.qu+1|0;}return d;}e=a.no;f=T(Y(V(K(b),E(2135587861, 2654435769)),a.nt));d:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.nr;}}if(f>=0){e=a.np.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.np.data[f]=c;b=a.qu+1|0;a.qu=b;if(b>=a.wn)ACO(a,g.length<<1);return null;}
let M7=(a,b)=>{let c,d,e;if(!b)return !a.ns?null:a.nq;c=a.no;d=T(Y(V(K(b),E(2135587861, 2654435769)),a.nt));k:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break k;}if(e==b)break;d=(d+1|0)&a.nr;}}return d<0?null:a.np.data[d];}
let Il=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.ns)return null;a.ns=0;c=a.nq;a.nq=null;a.qu=a.qu-1|0;return c;}d=a.no;e=V(K(b),E(2135587861, 2654435769));f=a.nt;g=T(Y(e,f));d:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break d;}if(i==b)break;g=(g+1|0)&a.nr;}}if(g<0)return null;j=a.np.data;k=j[g];l=a.nr;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=T(Y(V(K(n),E(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.qu=a.qu-1|0;return k;}
let AEF=(a,b,c)=>{let d,e,f,g;a:{d=a.np;if(b===null){if(a.ns&&a.nq===null)return 1;d=d.data;e=a.no;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.nq)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.ns){g=a.nq;if(b===g?1:g instanceof EO&&g.pz==b.pz?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof EO&&g.pz==b.pz?1:0)return 1;f=f+(-1)|0;}}return 0;}
let ACO=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.no.data.length;a.wn=b*a.zl|0;d=b-1|0;a.nr=d;d=FB(K(d));a.nt=d;e=a.no;f=a.np;g=Q(b);a.no=g;h=Bf(C,b);a.np=h;if(a.qu>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break b;k=e.data[j];if(k){l=f.data[j];b=T(Y(V(K(k),E(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.nr;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
function Zp(){let a=this;C.call(a);a.pS=0;a.q4=null;a.sL=0;a.A_=0.0;a.wG=0;a.sq=0;a.qQ=0;}
let AHe=(a,b)=>{let c=new Zp();AKr(c,a,b);return c;}
let AKr=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.A_=c;d=MD(b,c);a.wG=d*c|0;b=d-1|0;a.qQ=b;a.sq=FB(K(b));a.q4=Q(d);return;}e=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(60));DT(f,f.mW,c);f=U(f);e.mZ=1;e.m0=1;e.m1=f;D(e);}
let Wk=(a,b)=>{let c,d,e,f;if(!b){if(a.sL)return 0;a.sL=1;a.pS=a.pS+1|0;return 1;}c=a.q4;d=T(Y(V(K(b),E(2135587861, 2654435769)),a.sq));d:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break d;}if(f==b)break;d=(d+1|0)&a.qQ;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.pS+1|0;a.pS=b;if(b>=a.wG)Wr(a,e.length<<1);return 1;}
let ADK=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.sL)return 0;a.sL=0;a.pS=a.pS-1|0;return 1;}c=a.q4;d=V(K(b),E(2135587861, 2654435769));e=a.sq;f=T(Y(d,e));d:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.qQ;}}if(f<0)return 0;h=a.qQ;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=T(Y(V(K(b),E(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.pS=a.pS-1|0;return 1;}
let Wr=(a,b)=>{let c,d,e,f,g,h,i;b:{c=a.q4.data.length;a.wG=b*a.A_|0;d=b-1|0;a.qQ=d;d=FB(K(d));a.sq=d;e=a.q4;f=Q(b);a.q4=f;if(a.pS>0){f=f.data;g=0;while(true){if(g>=c)break b;h=e.data[g];if(h){i=T(Y(V(K(h),E(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.qQ;}f[i]=h;}g=g+1|0;}}}}
let Sx=F(0);
function QR(){C.call(this);this.va=null;}
let AGc=a=>{let b;b=a.va;b.vw=1;ACC(BP(b.xv));}
let AJN=a=>{let b;b=a.va;b.vw=1;ACC(BP(b.xv));}
let AFV=a=>{a.va.vw=0;}
let TD=F(0);
function TL(){let a=this;C.call(a);a.sW=null;a.x3=null;a.CP=null;}
let Rf=0;let A3a=()=>{let a=new TL();AUN(a);return a;}
let AUN=a=>{let b,c,d,e,f,$$je;b=AIz();a.sW=b;c=AQG(b);a.x3=c;b=new Qz;d=a.sW;e=new B7;e.nZ=0;e.ne=Bf(C,16);b.pf=e;b.q6=2147483647;b.BQ=d;b.B1=c;a.CP=b;b=Eb.uO;GT(b);b:{try{CH(b,a);D8(b);break b;}catch($$e){$$je=Bx($$e);d=$$je;}D8(b);D(d);}if(a.sW.state!=='running'?1:0){b=new NP;b.CN=a;AIS(a.sW,B0(b,"unlockFunction"));}else{if(!Rf&&Eb.sO>=2){if(BA===null){e=new CD;e.oq=Dd;c=new I;CI(c);c.mY=H(16);e.nF=c;e.oo=H(32);e.ow=0;CC();e.ot=CK;BA=e;}e=BA;c=new I;c.mY=H(16);CZ(c,c.mW,C1(B(151)));CZ(c,c.mW,C1(B(72)));CZ(c,
c.mW,C1(B(152)));d=U(c);b=e.nF;G(b,b.mW,d);f=b.mW;Bb(b,f,f+1|0);b.mY.data[f]=10;CM(e);}Rf=1;}}
let ACI=a=>{a.x3.disconnect(a.sW.destination);}
let AAy=a=>{a.x3.connect(a.sW.destination);}
let AIS=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});}
let AIz=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
let AQG=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function Ny(){DH.call(this);this.Br=null;}
let Su=F(CA);
function IQ(){Dk.call(this);this.qe=null;}
let P6=a=>{let b,c,d,e,f,$$je;b:{try{b=Nb(a.qe,null);}catch($$e){$$je=Bx($$e);if($$je instanceof CA){c=$$je;break b;}else{throw $$e;}}return b;}d=new W;b=new I;b.mY=H(16);G(b,b.mW,B(42));e=a.qe.p4.pV;if(e.nB===null)e.nB=Be(e.nn.$meta.name);f=e.nB;G(b,b.mW,f);b=U(b);d.mZ=1;d.m0=1;d.m1=b;d.oy=c;D(d);}
let L=F(BC);
let AHc=()=>{let a=new L();AII(a);return a;}
let A2u=a=>{let b=new L();Ja(b,a);return b;}
let AII=a=>{a.mZ=1;a.m0=1;}
let Ja=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
let Fx=F(0);
let O4=F(0);
let Qb=F(0);
let P4=F(0);
let Rl=F(0);
let Ty=F(0);
let R7=F(0);
let OC=F(0);
let KZ=F(0);
let U3=F();
let AQ5=(a,b)=>{b=a.bp(b);Bv();return b===null?null:b instanceof GR()&&b instanceof DG?b.nv:b;}
let ATL=(a,b,c)=>{a.fG(Be(b),DD(c,"handleEvent"));}
let AS$=(a,b,c)=>{a.fH(Be(b),DD(c,"handleEvent"));}
let AQY=(a,b,c,d)=>{a.fI(Be(b),DD(c,"handleEvent"),d?1:0);}
let AVk=(a,b)=>{return !!a.fJ(b);}
let AIX=a=>{return a.fK();}
let AFU=(a,b,c,d)=>{a.fL(Be(b),DD(c,"handleEvent"),d?1:0);}
let Ls=F();
function Ik(){let a=this;Ls.call(a);a.wt=0;a.rx=null;a.zQ=0.0;a.wJ=0;a.uE=0;a.t1=0;a.Bc=0;}
let AW0=null;let ALp=null;let A5T=a=>{let b=new Ik();KV(b,a);return b;}
let KV=(a,b)=>{let c,d,e;a.t1=(-1);if(b<0){c=new Bc;c.mZ=1;c.m0=1;D(c);}a.wt=0;if(!b)b=1;d=Bf(IX,b);e=d.data;a.rx=d;b=e.length;a.uE=b;a.zQ=0.75;a.wJ=b*0.75|0;}
let DV=(a,b,c)=>{let d,e,f,g,h,i,j;GT(a);try{if(b!==null&&c!==null){d:{if(!b.nT){d=0;while(true){if(d>=b.mX.length)break d;b.nT=(31*b.nT|0)+b.mX.charCodeAt(d)|0;d=d+1|0;}}}e=b.nT&2147483647;f=a.rx.data;g=e%f.length|0;h=f[g];while(h!==null){c:{d=h.z$;if(!b.nT){i=0;while(true){if(i>=b.mX.length)break c;b.nT=(31*b.nT|0)+b.mX.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.nT&&h.pc.cG(b)?1:0)break;h=h.vQ;}if(h!==null){j=h.pL;h.pL=c;return j;}a.Bc=a.Bc+1|0;d=a.wt+1|0;a.wt=d;if(d>a.wJ){ZW(a);g=e%a.rx.data.length|0;}if(g<a.uE)a.uE
=g;if(g>a.t1)a.t1=g;u:{j=new IX;j.pc=b;j.pL=c;if(!b.nT){d=0;while(true){if(d>=b.mX.length)break u;b.nT=(31*b.nT|0)+b.mX.charCodeAt(d)|0;d=d+1|0;}}}j.z$=b.nT;f=a.rx.data;j.vQ=f[g];f[g]=j;return null;}b=new CO;b.mZ=1;b.m0=1;D(b);}finally{D8(a);}}
let ZW=a=>{let b,c,d,e,f,g,h,i,j;b=(a.rx.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Bf(IX,b);e=d.data;f=a.t1+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.uE)break;h=a.rx.data[f];while(h!==null){i=(h.pc.cF()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.vQ;h.vQ=e[i];e[i]=h;h=j;}}a.uE=g;a.t1=c;a.rx=d;a.wJ=e.length*a.zQ|0;}
let AWq=()=>{AW0=new Kx;ALp=new Kw;}
function Mj(){Ik.call(this);this.CG=null;}
let XZ=F();
let Em=F(By);
let S_=null;let RR=null;let X8=null;let AOM=null;let A1Y=null;let Gt=()=>{Gt=X(Em);APm();}
let APm=()=>{let b,c,d,e;b=new Em;Gt();b.m9=B(153);b.m6=0;S_=b;c=new Em;c.m9=B(154);c.m6=1;RR=c;d=new Em;d.m9=B(149);d.m6=2;X8=d;e=new Em;e.m9=B(155);e.m6=3;AOM=e;A1Y=N(Em,[b,c,d,e]);}
let DI=F();
let WI=F(DI);
let Wi=F(DI);
let Zd=F(DI);
let AAG=F(DI);
let Yc=F(DI);
function PG(){C.call(this);this.Cx=null;}
let ANl=(a,b)=>{b.preventDefault();}
function PH(){C.call(this);this.CZ=null;}
let AV5=(a,b)=>{b.preventDefault();}
function PD(){let a=this;C.call(a);a.yK=null;a.yz=null;a.y2=null;}
let AAn=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new B7;e.nZ=1;e.ne=Bf(C,16);f=0;while(true){if(f>=d)break b;g=c[f];h=Be(g.name);i=FQ(h,46,h.mX.length-1|0);b=i==(-1)?B(43):BR(h,i+1|0,h.mX.length);j=b.mX.toLowerCase();if(j!==b.mX)b=ABy(j);if(AIa(b)){Fl();j=HN;}else{if(b===B(156))k=1;else if(!(B(156) instanceof M))k=0;else{j=B(156);k=b.mX!==j.mX?0:1;}h:{if(!k){if(b===B(157))k=1;else if(!(B(157) instanceof M))k=0;else{j=B(157);k=b.mX!==j.mX?0:1;}if(!k){if
(b===B(158))k=1;else if(!(B(158) instanceof M))k=0;else{j=B(158);k=b.mX!==j.mX?0:1;}if(!k){k=0;break h;}}}k=1;}if(k){Fl();j=G3;}else if(!AMZ(b)){Fl();j=Hh;}else{Fl();j=H0;}}l=new FileReader();b=new RB;b.vU=a;b.w4=j;b.yn=h;b.u0=e;b.ys=d;l.addEventListener("load",B0(b,"handleEvent"));Fl();if(j!==Hh&&j!==G3){if(j===HN)l.readAsDataURL(g);else if(j===H0)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}}
let ARO=(a,b)=>{AAn(a,b);}
function Qz(){let a=this;Dk.call(a);a.BQ=null;a.B1=null;}
let SC=F(0);
function NP(){C.call(this);this.CN=null;}
let AKC=a=>{let b,c,d,e,f,g,h,i;if(!Rf&&Eb.sO>=2){if(BA===null){b=new CD;c=Dd;CI(b);b.oq=c;c=new I;KB(c,16);b.nF=c;b.oo=H(32);b.ow=0;CC();b.ot=CK;BA=b;}b=BA;c=new I;c.mY=H(16);DM(c,c.mW,B(151));DM(c,c.mW,B(72));DM(c,c.mW,B(152));d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);i=b.nF;F6(i,i.mW,d);H6(i,i.mW,10);CM(b);}else D(AHc());}Rf=1;}
let Wa=F(DI);
function P1(){let a=this;C.call(a);a.nm=null;a.oR=0;a.wO=null;a.yH=0;a.sM=0;a.q9=0;a.oj=0;a.zU=null;}
let PL=(a,b)=>{return Px(a,b);}
let IF=(a,b,c)=>{let d,e,f,g,h,i,j;d=new IL;d.of=Bf(C,10);e=Px(a,b);f=0;g=0;if(!b.mX.length){h=Bf(M,1);h.data[0]=B(43);return h;}a:{while(true){if(!HB(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.pg;if(!j.pk){b=new BK;b.mZ=1;b.m0=1;Bd(b);D(b);}if(0>=j.pU){b=new L;d=new I;CI(d);d.mY=H(16);J(d,d.mW,0,10);d=U(d);b.mZ=1;b.m0=1;b.m1=d;D(b);}j=BR(b,g,j.n2.data[0]);IH(d,d.nK+1|0);h=d.of.data;g=d.nK;d.nK=g+1|0;h[g]=j;d.pn=d.pn+1|0;j=e.pg;if(!j.pk)break;if(0>=j.pU){b=new L;d=new I;CI(d);d.mY=H(16);J(d,d.mW,0,10);d=U(d);b.mZ
=1;b.m0=1;b.m1=d;D(b);}g=j.n2.data[1];f=i;}b=new BK;b.mZ=1;b.m0=1;Bd(b);D(b);}r:{b=BR(b,g,b.mX.length);IH(d,d.nK+1|0);h=d.of.data;g=d.nK;d.nK=g+1|0;h[g]=b;d.pn=d.pn+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break r;if(f<0)break;if(f>=d.nK)break;if(d.of.data[f].mX.length)break r;Sk(d,f);}b=new L;b.mZ=1;b.m0=1;D(b);}}if(f<0)f=0;return WV(d,Bf(M,f));}
let O7=a=>{return a.nm.oM;}
let GA=(b,c)=>{let d;if(b===null){b=new CO;b.mZ=1;b.m0=1;b.m1=B(159);D(b);}if(c&&(c|255)!=255){b=new Bc;b.mZ=1;b.m0=1;b.m1=B(43);D(b);}R=1;d=new P1;d.wO=Bf(Ds,10);d.sM=(-1);d.q9=(-1);d.oj=(-1);return Xf(d,b,c);}
let Xf=(a,b,c)=>{let d,e,f;a.nm=AZi(b,c);a.oR=c;b=TU(a,(-1),c,null);a.zU=b;d=a.nm;if(!d.oa&&!d.nk&&d.nl==d.o9&&!(d.n6===null?0:1)?1:0){if(a.yH)b.fV();return a;}b=new Do;e=d.oM;f=d.r_;b.mZ=1;b.m0=1;b.nV=(-1);b.o0=B(43);b.oP=e;b.nV=f;D(b);}
let AEf=(a,b)=>{let c,d,e,f,g,h;c=new Cx;d=a.oR;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;Bt();g=new Bq;g.nc=Q(64);c.ng=g;g=new Bq;g.nc=Q(2);c.nj=g;c.vI=e;c.wv=f;while(true){h=a.nm;d=h.oa;if(!d&&!h.nk&&h.nl==h.o9&&!(h.n6===null?0:1)?1:0)break;f=!d&&!h.nk&&h.nl==h.o9&&!(h.n6===null?0:1)?1:0;if(!(!f&&!(h.n6===null?0:1)&&(d<0?0:1)?1:0))break;f=h.nk;if(f&&f!=(-536870788)&&f!=(-536870871))break;Cq(h);CX(c,h.qP);g=a.nm;if(g.oa!=(-536870788))continue;Cq(g);}g=LL(a,c);g.fZ(b);return g;}
let TU=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new IL;e.of=Bf(C,10);f=a.oR;g=0;if(c!=f)a.oR=c;a:{switch(b){case -1073741784:h=new Qk;c=a.oj+1|0;a.oj=c;FI();i=R;R=i+1|0;d=new Bh;d.mY=H(20);h.nf=(J(d,d.mW,i,10)).l();h.or=c;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pj;j=a.oj+1|0;a.oj=j;FI();c=R;R=c+1|0;d=new Bh;d.mY=H(20);h.nf=(J(d,d.mW,c,10)).l();h.or=j;break a;case -33554392:h=new QW;k=a.oj+1|0;a.oj=k;FI();c=R;R=c+1|0;d=new Bh;d.mY=H(20);h.nf=(J(d,d.mW,c,10)).l();h.or=k;break a;default:c
=a.sM+1|0;a.sM=c;if(d===null){h=AZ9();g=1;}else{h=new Ds;FI();JR(h);h.or=c;}i=a.sM;if(i<=(-1))break a;if(i>=10)break a;a.wO.data[i]=h;break a;}h=new TN;FI();i=R;R=i+1|0;d=new Bh;d.mY=H(20);h.nf=(J(d,d.mW,i,10)).l();h.or=(-1);}while(true){if(TG(a.nm)&&Gv(a.nm)==(-536870788))l=AEf(a,h);else if(a.nm.oa==(-536870788)){l=JI(h);BN(a.nm);}else{l=OO(a,h);if(F8(a.nm)==(-536870788))BN(a.nm);}if(l!==null)Im(e,l);if(Lr(a.nm))break;if(F8(a.nm)==(-536870871))break;}if(W7(a.nm)==(-536870788))Im(e,JI(h));if(a.oR!=f&&!g){a.oR
=f;VH(a.nm,f);}switch(b){case -1073741784:break;case -536870872:return AYZ(e,h);case -268435416:return AXn(e,h);case -134217688:return AYR(e,h);case -67108824:return AZz(e,h);case -33554392:return AXU(e,h);default:switch(ABp(e)){case 0:break;case 1:return A1E(ACd(e,0),h);default:return A0u(e,h);}return JI(h);}return A3C(e,h);}
let ACn=a=>{let b,c,d,e,f,g,h,i,j,k;b=new KS;b.mY=H(16);while(true){c=a.nm;d=c.oa;if(!d&&!c.nk&&c.nl==c.o9&&!(c.n6===null?0:1)?1:0)break;e=!d&&!c.nk&&c.nl==c.o9&&!(c.n6===null?0:1)?1:0;if(!(!e&&!(c.n6===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.qn;e=f===null?0:1;if(!(!e&&!c.nk)){e=f===null?0:1;if(!(!e&&(c.nk<0?0:1))){g=c.nk;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Cq(c);d=c.qP;if(!(d>=65536&&d<=1114111
?1:0)){e=d&65535;d=b.mW;Bb(b,d,d+1|0);b.mY.data[d]=e;}else{h=(Fr(d)).data;e=0;d=h.length;g=b.mW;Bb(b,g,g+d|0);i=d+e|0;while(e<i){j=b.mY.data;k=g+1|0;d=e+1|0;j[g]=h[e];g=k;e=d;}}}d=a.oR;if(!((d&2)!=2?0:1))return A0h(b);if(!((d&64)!=64?0:1))return A34(b);c=new Nk;e=R;R=e+1|0;f=new Bh;f.mY=H(20);c.nf=(J(f,f.mW,e,10)).l();c.nH=1;f=new I;f.mY=H(16);e=0;while(e<XY(b)){d=Ut(b,e);d=Cg(NK(),d)&65535;Qi(f,Cg(Qa(),d)&65535);e=e+1|0;}c.t2=U(f);c.nH=f.mW;return c;}
let ACx=a=>{let b,c,d,e,f,g,h,i,j;b=Q(4);c=(-1);d=(-1);e=a.nm;f=e.oa;if(!(!f&&!e.nk&&e.nl==e.o9&&!(e.n6===null?0:1)?1:0)){g=!f&&!e.nk&&e.nl==e.o9&&!(e.n6===null?0:1)?1:0;if(!g&&!(e.n6===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Cq(e);c=e.qP;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=H(3);b=h.data;b[0]=c&65535;e=a.nm;i=e.oa;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Cq(e);e=a.nm;i=e.oa;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Cq(e);e=new IN;c=R;R=c+1|0;j=new Bh;j.mY=H(20);e.nf=(J(j,j.mW,c,10)).l();e.qB=h;e.uk=3;return e;}j=new IN;i
=R;R=i+1|0;e=new Bh;e.mY=H(20);j.nf=(J(e,e.mW,i,10)).l();j.qB=h;j.uk=2;return j;}c=a.oR;if(!((c&2)!=2?0:1)){e=new E6;i=b[0];c=R;R=c+1|0;e.nf=K1(c,10);e.nH=1;e.o6=i;return e;}if((c&64)!=64?0:1)return A14(b[0]);return AYw(b[0]);}h=b.data;c=1;while(c<4&&!Lr(a.nm)&&TG(a.nm)){i=c+1|0;e=a.nm;Cq(e);h[c]=e.qP;c=i;}if(c==1&&!AOL(h[0]))return TK(a,h[0]);if(!EF(a,2))return A3Y(b,c);if(EF(a,64))return A3f(b,c);return A0B(b,c);}
let OO=(a,b)=>{let c,d,e,f,g,h;c=a.nm;d=c.oa;e=!d&&!c.nk&&c.nl==c.o9&&!(c.n6===null?0:1)?1:0;e=!e&&!(c.n6===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.qn===null?0:1)&&(c.nk<0?0:1)){if(!((a.oR&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!ACg(c)?ACn(a):MX(a,b,TC(a,b));}else{f=ACx(a);g=a.nm;d=g.oa;if(!(!d&&!g.nk&&g.nl==g.o9&&!(g.n6===null?0:1)?1:0)&&!(d==(-536870871)&&!(b instanceof H4))&&d!=(-536870788)){e=!d&&!g.nk&&g.nl==g.o9&&!(g.n6===null?0:1)?1:0;if(!(!e&&!(g.n6===null?0:1)&&(d<0?0:1)?1:0))f=MX(a,b,f);}}}else if
(d!=(-536870871))f=MX(a,b,TC(a,b));else{if(b instanceof H4)D(Ev(B(43),Eu(c),FR(a.nm)));f=new SI;UN(f,b);f.nH=0;}c=a.nm;e=c.oa;h=!e&&!c.nk&&c.nl==c.o9&&!(c.n6===null?0:1)?1:0;if(!h&&!(e==(-536870871)&&!(b instanceof H4))&&e!=(-536870788)){g=OO(a,b);if(f instanceof DP&&!(f instanceof Gu)&&!(f instanceof DU)&&!(f instanceof Gq)){c=f;if(!g.gu(c.ny))f=AYF(c);}if((g.gw()&65535)!=43)f.fZ(g);else f.fZ(g.ny);}else{if(f===null)return null;f.fZ(b);}if((f.gw()&65535)!=43)return f;return f.ny;}
let MX=(a,b,c)=>{let d,e,f,g,h,i;d=a.nm;e=d.oa;if(c!==null&&!(c instanceof Cn)){switch(e){case -2147483606:Cq(d);d=new T1;f=R;R=f+1|0;g=new Bh;g.mY=H(20);d.nf=(J(g,g.mW,f,10)).l();d.m5=b;d.ny=c;d.n5=e;FI();c.fZ(MF);return d;case -2147483605:Cq(d);d=new Pg;e=R;R=e+1|0;g=new Bh;g.mY=H(20);d.nf=(J(g,g.mW,e,10)).l();d.m5=b;d.ny=c;d.n5=(-2147483606);FI();c.fZ(MF);return d;case -2147483585:Cq(d);d=new O1;e=R;R=e+1|0;g=new Bh;CI(g);g.mY=H(20);d.nf=(J(g,g.mW,e,10)).l();d.m5=b;d.ny=c;d.n5=(-536870849);FI();c.fZ(MF);return d;case -2147483525:g
=new NI;h=d.n6;Cq(d);d=h;f=a.q9+1|0;a.q9=f;i=R;R=i+1|0;g.nf=K1(i,10);g.m5=b;g.ny=c;g.n5=(-536870849);g.qk=d;g.py=f;FI();c.fZ(MF);return g;case -1073741782:case -1073741781:Cq(d);d=new Qf;Vp(d,c,b,e);c.fZ(d);return d;case -1073741761:Cq(d);d=AZe(c,b,(-536870849));c.fZ(b);return d;case -1073741701:h=new R9;d=Hj(d);e=a.q9+1|0;a.q9=e;AAH(h,d,c,b,(-536870849),e);c.fZ(h);return h;case -536870870:case -536870869:BN(d);d=c.gw()!=(-2147483602)?AYB(c,b,e):EF(a,32)?AZF(c,b,e):AYe(c,b,e,O3(a.oR));c.fZ(d);return d;case -536870849:BN(d);d
=A3I(c,b,(-536870849));c.fZ(b);return d;case -536870789:h=new Gz;d=Hj(d);e=a.q9+1|0;a.q9=e;Ui(h,d,c,b,(-536870849),e);c.fZ(h);return h;default:}return c;}g=null;if(c!==null)g=c;switch(e){case -2147483606:case -2147483605:BN(d);d=A2m(g,b,e);MN(g,d);return d;case -2147483585:BN(d);return AXJ(g,b,(-2147483585));case -2147483525:return A3b(Hj(d),g,b,(-2147483525));case -1073741782:case -1073741781:BN(d);d=A2Y(g,b,e);MN(g,d);return d;case -1073741761:BN(d);return A2A(g,b,(-1073741761));case -1073741701:return A0b(Hj(d),
g,b,(-1073741701));case -536870870:case -536870869:BN(d);d=A1S(g,b,e);MN(g,d);return d;case -536870849:BN(d);return A01(g,b,(-536870849));case -536870789:return AY9(Hj(d),g,b,(-536870789));default:}return c;}
let TC=(a,b)=>{let c,d,e,f,g,h,i,j;c=null;d=b instanceof H4;while(true){o:{e=a.nm;f=e.oa;if((f&(-2147418113))==(-2147483608)){Cq(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.oR=g;else{if(f!=(-1073741784))g=a.oR;c=TU(a,f,g,b);e=a.nm;if(e.oa!=(-536870871)){b=new Do;h=e.oM;i=e.r_;b.mZ=1;b.m0=1;b.nV=(-1);b.o0=B(43);b.oP=h;b.nV=i;D(b);}Cq(e);}}else{g:{h:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break h;case -2147483583:BN(e);c
=new P3;JR(c);break o;case -2147483582:BN(e);c=AUt(0);break o;case -2147483577:break;case -2147483558:BN(e);c=new Tl;j=a.oj+1|0;a.oj=j;AC9(c,j);break o;case -2147483550:BN(e);c=AUt(1);break o;case -2147483526:BN(e);c=A2N();break o;case -536870876:BN(e);a.oj=a.oj+1|0;if(EF(a,8)){if(EF(a,1)){c=AZ7(a.oj);break o;}c=AXH(a.oj);break o;}if(EF(a,1)){c=A0M(a.oj);break o;}c=A2w(a.oj);break o;case -536870866:BN(e);if(EF(a,32)){c=A3x();break o;}c=A2b(O3(a.oR));break o;case -536870821:BN(e);i=0;if(F8(a.nm)==(-536870818))
{i=1;BN(a.nm);}c=AAJ(a,i,b);if(F8(a.nm)!=(-536870819))D(Ev(B(43),Eu(a.nm),FR(a.nm)));OE(a.nm,1);BN(a.nm);break o;case -536870818:BN(e);a.oj=a.oj+1|0;if(!EF(a,8)){c=A20();break o;}c=A2S(O3(a.oR));break o;case 0:e=O8(e);if(e!==null)c=LL(a,e);else{if(Lr(a.nm)){c=JI(b);break o;}c=AKb(f&65535);}BN(a.nm);break o;default:break g;}BN(e);c=AY$();break o;}j=(f&2147483647)-48|0;if(a.sM<j)D(Ev(B(43),Eu(e),FR(a.nm)));BN(e);a.oj=a.oj+1|0;c=!EF(a,2)?AXT(j,a.oj):EF(a,64)?AZ8(j,a.oj):A3M(j,a.oj);a.wO.data[j].wL=1;a.yH=1;break o;}if
(f>=0&&!JK(e)){c=TK(a,f);BN(a.nm);}else if(f==(-536870788))c=JI(b);else{if(f!=(-536870871))D(Ev(!JK(a.nm)?AD2(f&65535):(O8(a.nm)).l(),Eu(a.nm),FR(a.nm)));if(d)D(Ev(B(43),Eu(a.nm),FR(a.nm)));c=JI(b);}}}if(f!=(-16777176))break;}return c;}
let AAJ=(a,b,c)=>{let d;d=LL(a,Hc(a,b));d.fZ(c);return d;}
let Hc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new Cx;d=a.oR;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;Bt();f=new Bq;f.nc=Q(64);c.ng=f;f=new Bq;f.nc=Q(2);c.nj=f;c.vI=e;c.wv=d;Ff(c,b);g=(-1);h=0;i=0;j=1;n:{e:{r:while(true){f=a.nm;if(!f.oa&&!f.nk&&f.nl==f.o9&&!JK(f)?1:0)break n;f=a.nm;b=f.oa;i=b==(-536870819)&&!j?0:1;if(!i)break n;i:{switch(b){case -536870874:if(g>=0)CX(c,g);g=BN(a.nm);if(F8(a.nm)!=(-536870874)){g=38;break i;}if(Gv(a.nm)==(-536870821)){BN(a.nm);h=1;g=(-1);break i;}BN(a.nm);if(j){c=Hc(a,0);break i;}if(F8(a.nm)
==(-536870819))break i;Ta(c,Hc(a,0));break i;case -536870867:if(!j&&Gv(f)!=(-536870819)&&Gv(a.nm)!=(-536870821)&&g>=0){BN(a.nm);d=F8(a.nm);if(JK(a.nm))break r;if(d<0&&Gv(a.nm)!=(-536870819)&&Gv(a.nm)!=(-536870821)&&g>=0)break r;z:{try{if(AMs(d))break z;d=d&65535;break z;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){break e;}else{throw $$e;}}}try{BI(c,g,d);}catch($$e){$$je=Bx($$e);if($$je instanceof CA){break e;}else{throw $$e;}}BN(a.nm);g=(-1);break i;}if(g>=0)CX(c,g);g=45;BN(a.nm);break i;case -536870821:if
(g>=0){CX(c,g);g=(-1);}BN(a.nm);e=0;f=a.nm;if(f.oa==(-536870818)){BN(f);e=1;}if(!h)T9(c,Hc(a,e));else Ta(c,Hc(a,e));h=0;BN(a.nm);break i;case -536870819:break;case -536870818:if(g>=0)CX(c,g);g=94;BN(a.nm);break i;case 0:if(g>=0)CX(c,g);f=a.nm.n6;if(f===null)g=0;else{AE5(c,f);g=(-1);}Cq(a.nm);break i;default:if(g>=0)CX(c,g);f=a.nm;Cq(f);g=f.qP;break i;}if(g>=0)CX(c,g);g=93;BN(a.nm);}j=0;}D(Ev(B(43),O7(a),FR(a.nm)));}D(Ev(B(43),O7(a),FR(a.nm)));}if(!i){if(g>=0)CX(c,g);return c;}c=new Do;k=a.nm;l=k.oM;b=k.r_-1
|0;c.mZ=1;c.m0=1;c.nV=(-1);c.o0=B(43);c.oP=l;c.nV=b;D(c);}
let TK=(a,b)=>{let c,d,e,f,g;c=b>=65536&&b<=1114111?1:0;d=a.oR;if((d&2)!=2?0:1){e:{if(!(b>=97&&b<=122)){if(b<65)break e;if(b>90)break e;}e=new Np;b=b&65535;f=R;R=f+1|0;g=new Bh;g.mY=H(20);e.nf=(J(g,g.mW,f,10)).l();e.nH=1;e.wa=b;e.wy=Hi(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Ni;f=R;R=f+1|0;g=new Bh;g.mY=H(20);e.nf=(J(g,g.mW,f,10)).l();e.nH=1;e.nH=2;if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}b=Cg(BY,b);if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==
null?Be(BB.value):null)));}e.xn=Cg(BS,b);return e;}if(b<=57343&&b>=56320?1:0){e=new Jt;b=b&65535;f=R;R=f+1|0;g=new Bh;g.mY=H(20);e.nf=(J(g,g.mW,f,10)).l();e.ra=b;return e;}if(b<=56319&&b>=55296?1:0)return AM$(b&65535);e=new To;b=b&65535;f=R;R=f+1|0;g=new Bh;g.mY=H(20);e.nf=(J(g,g.mW,f,10)).l();e.nH=1;b=Cg(NK(),b)&65535;e.uL=Cg(Qa(),b)&65535;return e;}}if(c)return AX7(b);if(AI7(b))return A1t(b&65535);if(!AOU(b))return AKb(b&65535);return AM$(b&65535);}
let LL=(a,b)=>{let c,d,e,f,g,h;if(!Z5(b)){if(!b.nP){if(b.gY())return AZ1(b);return A2T(b);}if(b.gY())return A1j(b);return A0m(b);}c=Va(b);d=new Nt;e=R;R=e+1|0;f=new Bh;f.mY=H(20);d.nf=(J(f,f.mW,e,10)).l();d.vj=c;d.wm=c.nw;if(!b.nP){if(!b.gY()){c=new HA;f=new EQ;b=IM(b);JR(f);f.nH=1;f.pK=b;f.xG=b.nw;VT(c);c.r1=f;c.rS=d;return c;}c=new HA;f=new OB;b=IM(b);e=R;R=e+1|0;g=new Bh;g.mY=H(20);f.nf=(J(g,g.mW,e,10)).l();f.nH=1;f.vq=b;f.xe=b.nw;e=R;R=e+1|0;b=new Bh;b.mY=H(20);c.nf=(J(b,b.mW,e,10)).l();c.r1=f;c.rS=d;return c;}if
(!b.gY()){c=new HA;f=new Ee;b=IM(b);e=R;R=e+1|0;g=new Bh;g.mY=H(20);f.nf=(J(g,g.mW,e,10)).l();f.o7=b;f.sE=b.nw;e=R;R=e+1|0;b=new Bh;b.mY=H(20);c.nf=(J(b,b.mW,e,10)).l();c.r1=f;c.rS=d;return c;}c=new HA;f=new Nu;g=IM(b);h=R;R=h+1|0;b=new Bh;b.mY=H(20);f.nf=(J(b,b.mW,h,10)).l();f.o7=g;f.sE=g.nw;e=R;R=e+1|0;b=new Bh;b.mY=H(20);c.nf=(J(b,b.mW,e,10)).l();c.r1=f;c.rS=d;return c;}
let Ws=b=>{return GA(b,0);}
let Hi=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
let EF=(a,b)=>{return (a.oR&b)!=b?0:1;}
let VB=F();
let Rb=(b,c)=>{let d,e,f,g,$$je;if(c!==null&&c.data.length){n:{c:{try{d=AIm(ACK(b,c));}catch($$e){$$je=Bx($$e);if($$je instanceof KP){d=$$je;break n;}else if($$je instanceof HC){d=$$je;break c;}else{throw $$e;}}return d;}e=new DL;if(b.nB===null)b.nB=Be(b.nn.$meta.name);f=b.nB;b=new I;b.mY=H(16);G(b,b.mW,B(160));g=b.mW;if(f===null)f=B(2);G(b,g,f);b=U(b);e.mZ=1;e.m0=1;e.m1=b;e.oy=d;D(e);}e=new DL;if(b.nB===null)b.nB=Be(b.nn.$meta.name);f=b.nB;b=new I;b.mY=H(16);G(b,b.mW,B(161));g=b.mW;if(f===null)f=B(2);G(b,g,
f);G(b,b.mW,B(162));b=U(b);e.mZ=1;e.m0=1;e.m1=b;e.oy=d;D(e);}c=(AEk(b)).data;if(c.length<=0)b=null;else{b=new OG;b.p4=c[0];}return b;}
let Pm=(b,c)=>{let d,e,f,g,h,$$je;a:{try{d=AIm(ACN(b,c));}catch($$e){$$je=Bx($$e);if($$je instanceof KP){d=$$je;break a;}else if($$je instanceof HC){d=$$je;e=new DL;if(b.nB===null)b.nB=Be(b.nn.$meta.name);b=b.nB;f=new I;f.mY=H(16);G(f,f.mW,B(160));g=f.mW;if(b===null)b=B(2);G(f,g,b);b=U(f);e.mZ=1;e.m0=1;e.m1=b;e.oy=d;D(e);}else{throw $$e;}}return d;}e=new DL;if(b.nB===null)b.nB=Be(b.nn.$meta.name);h=b.nB;b=new I;b.mY=H(16);G(b,b.mW,B(163));g=b.mW;if(h===null)h=B(2);G(b,g,h);b=U(b);e.mZ=1;e.m0=1;e.m1=b;e.oy=d;D(e);}
let DL=F(CA);
function DG(){C.call(this);this.nv=null;}
let A1N=null;let R$=null;let K4=null;let M_=null;let AVr=null;let AIE=null;let Bv=()=>{Bv=X(DG);AI9();}
let Co=b=>{let c,d,e,f,g,h,i;Bv();if(b===null)return null;d:{c=b;if(R$!==null){d=Be(typeof c);if(d===B(164))e=1;else if(!(B(164) instanceof M))e=0;else{b=B(164);e=d.mX!==b.mX?0:1;}if(!e){if(d===B(165))e=1;else if(!(B(165) instanceof M))e=0;else{b=B(165);e=d.mX!==b.mX?0:1;}if(!e){if(d===B(166))e=1;else if(!(B(166) instanceof M))e=0;else{b=B(166);e=d.mX!==b.mX?0:1;}if(e){f=K4.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DG;h.nv=c;i=h;K4.set(c,new WeakRef(i));N1(AVr,
i,c);return h;}if(d===B(167))e=1;else if(!(B(167) instanceof M))e=0;else{b=B(167);e=d.mX!==b.mX?0:1;}if(!e)break d;else{f=M_.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DG;h.nv=c;i=h;M_.set(c,new WeakRef(i));N1(AIE,i,c);return h;}}}f=R$.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DG;h.nv=c;R$.set(c,new WeakRef(h));return h;}}b=new DG;b.nv=c;return b;}
let AI9=()=>{A1N=new WeakMap();R$=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();K4=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();M_=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();AVr=K4===null?null:new FinalizationRegistry(B0(new OK,"accept"));AIE=M_===null?null:new FinalizationRegistry(B0(new OL,"accept"));}
let N1=(b,c,d)=>{return b.register(c,d);}
let Lm=F(0);
let Kx=F();
let JP=F(0);
let Kw=F();
let MM=F(0);
function ZQ(){let a=this;C.call(a);a.BU=null;a.AJ=null;a.qZ=null;a.pg=null;a.ss=0;a.vg=0;a.vn=0;a.wH=null;a.wV=null;a.q$=null;}
let Px=(a,b)=>{let c=new ZQ();AFo(c,a,b);return c;}
let ABu=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=a.wH;if(c!==null){if(c===b)d=1;else if(!(b instanceof M))d=0;else{e=b;d=c.mX!==e.mX?0:1;}if(d){if(a.q$===null)return a.wV;f=new I;f.mY=H(16);g=0;e:{while(true){b=a.q$;d=BJ(g,b.nK);if(d>=0)break;if(g<0)break e;if(d>=0)break e;b=b.of.data[g];G(f,f.mW,b===null?B(2):b.l());g=g+1|0;}return U(f);}b=new L;b.mZ=1;b.m0=1;D(b);}}a.wH=b;h=H(b.mX.length);i=h.data;j=0;k=i.length;while(true){if(j>=k){c=new I;c.mY=H(16);a.q$=null;j=0;l=0;m=0;u:{i:while(true){if(j>=k){ba:
{e=a.q$;if(e!==null){j=c.mW;d=BJ(l,j);if(d){if(d<=0&&l>=0&&j<=j){b=new M;n=c.mY;h=n.data;d=j-l|0;j=h.length;if(l>=0&&d>=0&&d<=(j-l|0)){b.mX=O(n.data,l,d);Im(e,b);break ba;}b=new L;Dt(b);D(b);}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}}}return U(c);}if(i[j]==92&&!m){m=1;j=j+1|0;}bb:{if(m){if(j>=k)break i;d=i[j];g=c.mW;Bb(c,g,g+1|0);c.mY.data[g]=d;m=0;}else if(i[j]!=36){o=i[j];d=c.mW;Bb(c,d,d+1|0);c.mY.data[d]=o;}else{if(a.q$===null){b=new IL;b.of=Bf(C,10);a.q$=b;}bc:{try{b=new M;j=j+1|0;T0(b,h,j,1);d=Cs(b);if(l==CB(c))break bc;Im(a.q$,
ACc(c,l,CB(c)));l=CB(c);break bc;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){break u;}else{throw $$e;}}}try{Im(a.q$,A0N(a,d));e=LY(a,d);l=l+ES(e)|0;BF(c,e);break bb;}catch($$e){$$je=Bx($$e);if($$je instanceof CA){break u;}else{throw $$e;}}}}j=j+1|0;}b=new L;b.mZ=1;b.m0=1;D(b);}b=new Bc;b.mZ=1;b.m0=1;b.m1=B(43);D(b);}if(j<0)break;if(j>=b.mX.length)break;i[j]=b.mX.charCodeAt(j);j=j+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}
let LY=(a,b)=>{let c,d,e,f,g,h,i;c=a.pg;d=c.pk;if(!d){c=new BK;c.mZ=1;c.m0=1;D(c);}if(b>=0){e=BJ(b,c.pU);if(e<0){k:{f=c.n2.data;g=b*2|0;if(f[g]<0)c=null;else{c=c.qt;if(!d){c=new BK;c.mZ=1;c.m0=1;D(c);}if(b>=0&&e<0){h=f[g];if(!d){c=new BK;c.mZ=1;c.m0=1;D(c);}if(b<0)break k;if(e>=0)break k;c=BR(c,h,f[g+1|0]);}else{c=new L;P();i=new I;i.mY=H(16);J(i,i.mW,b,10);i=U(i);c.mZ=1;c.m0=1;c.m1=i;D(c);}}return c;}c=new L;P();i=new I;i.mY=H(16);J(i,i.mW,b,10);i=U(i);c.mZ=1;c.m0=1;c.m1=i;D(c);}}c=new L;P();i=new I;i.mY=H(16);J(i,
i.mW,b,10);i=U(i);c.mZ=1;c.m0=1;c.m1=i;D(c);}
let No=(a,b)=>{let c,d,e,f,g,h,i;c=a.qZ.mX.length;if(b>=0&&b<=c){d=a.pg;d.pk=0;d.sZ=2;e=d.n2.data;f=0;g=e.length;if(f>g){d=new Bc;Z(d);D(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.nS.data;f=0;g=e.length;if(f>g){d=new Bc;Z(d);D(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.p8=d.oW;d.sZ=1;d.p8=b;c=d.s2;if(c<0)c=b;d.s2=c;b=a.AJ.g_(b,a.qZ,d);if(b==(-1))a.pg.o$=1;if(b>=0){d=a.pg;b=d.pk;if(b){e=d.n2.data;if(e[0]==(-1)){f=d.p8;e[0]=f;e[1]=f;}if(!b){d=new BK;d.mZ=1;d.m0=1;Bd(d);D(d);}if(0<d.pU){d.s2=e[1];return 1;}d=new L;i
=new I;CI(i);i.mY=H(16);J(i,i.mW,0,10);i=U(i);d.mZ=1;d.m0=1;d.m1=i;D(d);}}a.pg.p8=(-1);return 0;}d=new L;i=new I;i.mY=H(16);J(i,i.mW,b,10);i=U(i);d.mZ=1;d.m0=1;d.m1=i;D(d);}
let HB=a=>{let b,c,d,e,f,g,h,i,j;b=a.qZ.mX.length;c=a.pg;if(!c.vE)b=a.vg;if(c.p8>=0&&c.sZ==1){d=c.pk;if(!d){c=new BK;c.mZ=1;c.m0=1;D(c);}e=BJ(0,c.pU);if(e>=0){c=new L;f=new I;f.mY=H(16);J(f,f.mW,0,10);f=U(f);c.mZ=1;c.m0=1;c.m1=f;D(c);}g=c.n2.data;h=g[1];c.p8=h;if(!d){c=new BK;c.mZ=1;c.m0=1;D(c);}if(e>=0){c=new L;f=new I;f.mY=H(16);J(f,f.mW,0,10);f=U(f);c.mZ=1;c.m0=1;c.m1=f;D(c);}i=g[1];if(!d){c=new BK;c.mZ=1;c.m0=1;D(c);}if(e>=0){c=new L;f=new I;f.mY=H(16);J(f,f.mW,0,10);f=U(f);c.mZ=1;c.m0=1;c.m1=f;D(c);}if
(i==g[0])c.p8=h+1|0;j=c.p8;return j<=b&&No(a,j)?1:0;}return No(a,a.ss);}
let AFo=(a,b,c)=>{let d,e;a.ss=(-1);a.vg=(-1);a.BU=b;a.AJ=b.zU;a.qZ=c;a.ss=0;d=c.mX.length;a.vg=d;e=A2W(c,a.ss,d,b.sM,b.q9+1|0,b.oj+1|0);a.pg=e;e.rM=1;}
let B_=F(Bc);
let TV=()=>{let a=new B_();AHb(a);return a;}
let A5U=a=>{let b=new B_();LK(b,a);return b;}
let AHb=a=>{a.mZ=1;a.m0=1;}
let LK=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
function OG(){C.call(this);this.p4=null;}
let AIm=a=>{let b=new OG();AUZ(b,a);return b;}
let AUZ=(a,b)=>{a.p4=b;}
let Mn=(a,b)=>{return;}
let Nb=(a,b)=>{let c,d,e,f,g,$$je;if(b===null)b=Bf(C,0);d:{k:{c:{try{c=ACQ(a.p4,b);}catch($$e){$$je=Bx($$e);if($$je instanceof Bc){c=$$je;break c;}else if($$je instanceof L7){c=$$je;break d;}else if($$je instanceof Ko){c=$$je;break k;}else if($$je instanceof NR){c=$$je;d=new DL;e=a.p4.pV;if(e.nB===null)e.nB=Be(e.nn.$meta.name);e=e.nB;f=new I;f.mY=H(16);G(f,f.mW,B(168));g=f.mW;if(e===null)e=B(2);G(f,g,e);f=U(f);d.mZ=1;d.m0=1;d.m1=f;d.oy=c;D(d);}else{throw $$e;}}return c;}d=new DL;e=a.p4.pV;if(e.nB===null)e.nB
=Be(e.nn.$meta.name);e=e.nB;f=new I;f.mY=H(16);G(f,f.mW,B(169));g=f.mW;if(e===null)e=B(2);G(f,g,e);f=U(f);d.mZ=1;d.m0=1;d.m1=f;d.oy=c;D(d);}d=new DL;e=a.p4.pV;if(e.nB===null)e.nB=Be(e.nn.$meta.name);e=e.nB;f=new I;f.mY=H(16);G(f,f.mW,B(170));g=f.mW;if(e===null)e=B(2);G(f,g,e);f=U(f);d.mZ=1;d.m0=1;d.m1=f;d.oy=c;D(d);}d=new DL;e=a.p4.pV;if(e.nB===null)e.nB=Be(e.nn.$meta.name);e=e.nB;f=new I;f.mY=H(16);G(f,f.mW,B(170));g=f.mW;if(e===null)e=B(2);G(f,g,e);f=U(f);d.mZ=1;d.m0=1;d.m1=f;d.oy=c;D(d);}
let KP=F(BC);
let EW=F(CA);
let HC=F(EW);
let CO=F(BC);
function B1(){let a=this;C.call(a);a.m5=null;a.oV=0;a.nf=null;a.n5=0;}
let R=0;let JR=a=>{let b,c;b=R;R=b+1|0;c=new Bh;c.mY=H(20);a.nf=(J(c,c.mW,b,10)).l();}
let AJ9=(a,b,c,d)=>{let e;e=d.nz;while(true){if(b>e)return (-1);if(a.hc(b,c,d)>=0)break;b=b+1|0;}return b;}
let AL5=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.hc(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
let AJv=(a,b)=>{a.n5=b;}
let AIn=a=>{return a.n5;}
let APP=a=>{let b,c,d,e,f,g,h,i;b=a.nf;c=a.hd();d=new I;d.mY=H(16);e=d.mW;Bb(d,e,e+1|0);d.mY.data[e]=60;f=d.mW;if(b===null)b=B(2);G(d,f,b);e=d.mW;Bb(d,e,e+1|0);d.mY.data[e]=58;f=d.mW;if(c===null)c=B(2);G(d,f,c);e=d.mW;Bb(d,e,e+1|0);g=d.mY;h=g.data;h[e]=62;b=new M;e=d.mW;P();i=h.length;if(e>=0&&e<=(i-0|0)){b.mX=O(g.data,0,e);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let ASJ=a=>{let b,c,d,e,f,g,h,i;b=a.nf;c=a.hd();d=new I;d.mY=H(16);e=d.mW;Bb(d,e,e+1|0);d.mY.data[e]=60;f=d.mW;if(b===null)b=B(2);G(d,f,b);e=d.mW;Bb(d,e,e+1|0);d.mY.data[e]=58;f=d.mW;if(c===null)c=B(2);G(d,f,c);e=d.mW;Bb(d,e,e+1|0);g=d.mY;h=g.data;h[e]=62;b=new M;e=d.mW;P();i=h.length;if(e>=0&&e<=(i-0|0)){b.mX=O(g.data,0,e);return b;}b=new L;Z(b);D(b);}
let ATA=a=>{return a.m5;}
let MN=(a,b)=>{a.m5=b;}
let AUM=(a,b)=>{return 1;}
let AVW=a=>{return null;}
let Kp=a=>{let b;a.oV=1;b=a.m5;if(b!==null){if(!b.oV){b=b.he();if(b!==null){a.m5.oV=1;a.m5=b;}a.m5.fV();}else if(b instanceof HQ&&b.o4.wL)a.m5=b.m5;}}
let AWx=()=>{R=1;}
let AEl=F();
let Xm=F();
let AE7=F();
let K0=F(0);
let OK=F();
let AIP=(a,b)=>{let c;Bv();b=b===null?null:b instanceof GR()?b:Co(b);c=K4;b=b===null?null:b.nv;c.delete(b);}
let X5=F();
let OL=F();
let AFZ=(a,b)=>{let c;Bv();b=b===null?null:b instanceof GR()?b:Co(b);c=M_;b=b===null?null:b.nv;c.delete(b);}
let Ng=F(0);
function HP(){let a=this;C.call(a);a.pc=null;a.pL=null;}
function IX(){let a=this;HP.call(a);a.vQ=null;a.z$=0;}
function Ds(){let a=this;B1.call(a);a.wL=0;a.or=0;}
let MF=null;let FI=()=>{FI=X(Ds);AKS();}
let AHr=(a,b,c,d)=>{let e,f,g;e=a.or;f=d.n2.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.m5.hc(b,c,d);if(g<0){b=a.or;d.n2.data[(b*2|0)+1|0]=e;}return g;}
let APs=a=>{return a.or;}
let AMG=a=>{return B(171);}
let AH7=(a,b)=>{return 0;}
let AKS=()=>{let b,c,d;b=new Oe;c=R;R=c+1|0;d=new Bh;d.mY=H(20);b.nf=(J(d,d.mW,c,10)).l();MF=b;}
function Jz(){let a=this;C.call(a);a.n4=null;a.ou=0;a.q2=0;a.AN=0;a.qP=0;a.oa=0;a.nk=0;a.o9=0;a.n6=null;a.qn=null;a.nl=0;a.ok=0;a.r_=0;a.tW=0;a.oM=null;}
let AKT=null;let AX_=null;let A2p=0;let AZi=(a,b)=>{let c=new Jz();AUQ(c,a,b);return c;}
let AUQ=(a,b,c)=>{let d,e,f,g,h,i,j;a.q2=1;a.oM=b;if((c&16)>0){d=new I;d.mY=H(16);G(d,d.mW,B(172));e=0;while(true){f=K5(b,B(173),e);if(f<0)break;g=f+2|0;h=BR(b,e,g);G(d,d.mW,h);G(d,d.mW,B(174));e=g;}b=BR(b,e,b.mX.length);G(d,d.mW,b);G(d,d.mW,B(173));b=U(d);}a.n4=H(b.mX.length+2|0);i=H(b.mX.length);j=i.data;f=0;g=j.length;while(true){if(f>=g){B$(i,0,a.n4,0,b.mX.length);i=a.n4.data;g=i.length;i[g-1|0]=0;i[g-2|0]=0;a.o9=g;a.ou=c;Cq(a);Cq(a);return;}if(f<0)break;if(f>=b.mX.length)break;j[f]=b.mX.charCodeAt(f);f
=f+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}
let F8=a=>{return a.oa;}
let OE=(a,b)=>{if(b>0&&b<3)a.q2=b;if(b==1){a.nk=a.oa;a.qn=a.n6;a.nl=a.tW;a.tW=a.r_;Cq(a);}}
let VH=(a,b)=>{let c;a.ou=b;a.nk=a.oa;a.qn=a.n6;c=a.r_;a.nl=c+1|0;a.tW=c;Cq(a);}
let O8=a=>{return a.n6;}
let JK=a=>{return a.n6===null?0:1;}
let BN=a=>{Cq(a);return a.qP;}
let Hj=a=>{let b;b=a.n6;Cq(a);return b;}
let Gv=a=>{return a.nk;}
let W7=a=>{return a.qP;}
let Cq=a=>{let b,c,d,e,f,g,h,$$je;a.qP=a.oa;a.oa=a.nk;a.n6=a.qn;a.r_=a.tW;a.tW=a.nl;while(true){b=0;c=a.nl>=a.n4.data.length?0:Mu(a);a.nk=c;a.qn=null;if(a.q2==4){if(c!=92)return;c=a.nl;d=a.n4.data;c=c>=d.length?0:d[Eq(a)];a.nk=c;switch(c){case 69:break;default:a.nk=92;a.nl=a.ok;return;}a.q2=a.AN;a.nk=a.nl>(a.n4.data.length-2|0)?0:Mu(a);}u:{c=a.nk;if(c!=92){e=a.q2;if(e==1)switch(c){case 36:a.nk=(-536870876);break u;case 40:if(a.n4.data[a.nl]!=63){a.nk=(-2147483608);break u;}Eq(a);c=a.n4.data[a.nl];e=0;while(true)
{bd:{if(e){e=0;switch(c){case 33:break;case 61:a.nk=(-134217688);Eq(a);break bd;default:D(Ev(B(43),Eu(a),a.nl));}a.nk=(-67108824);Eq(a);}else{switch(c){case 33:break;case 60:Eq(a);c=a.n4.data[a.nl];e=1;break bd;case 61:a.nk=(-536870872);Eq(a);break bd;case 62:a.nk=(-33554392);Eq(a);break bd;default:f=AEP(a);a.nk=f;if(f<256){a.ou=f;f=f<<16;a.nk=f;a.nk=(-1073741784)|f;break bd;}f=f&255;a.nk=f;a.ou=f;f=f<<16;a.nk=f;a.nk=(-16777176)|f;break bd;}a.nk=(-268435416);Eq(a);}}if(!e)break;}break u;case 41:a.nk=(-536870871);break u;case 42:case 43:case 63:e
=a.nl;d=a.n4.data;switch(e>=d.length?42:d[e]){case 43:a.nk=c|(-2147483648);Eq(a);break u;case 63:a.nk=c|(-1073741824);Eq(a);break u;default:}a.nk=c|(-536870912);break u;case 46:a.nk=(-536870866);break u;case 91:a.nk=(-536870821);OE(a,2);break u;case 93:if(e!=2)break u;a.nk=(-536870819);break u;case 94:a.nk=(-536870818);break u;case 123:a.qn=ADO(a,c);break u;case 124:a.nk=(-536870788);break u;default:}else if(e==2)switch(c){case 38:a.nk=(-536870874);break u;case 45:a.nk=(-536870867);break u;case 91:a.nk=(-536870821);break u;case 93:a.nk
=(-536870819);break u;case 94:a.nk=(-536870818);break u;default:}}else{c=a.nl>=(a.n4.data.length-2|0)?(-1):Mu(a);be:{a.nk=c;switch(c){case -1:D(Ev(B(43),Eu(a),a.nl));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.nk
=AA2(a);break u;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.q2!=1)break u;a.nk=(-2147483648)|c;break u;case 65:a.nk=(-2147483583);break u;case 66:a.nk=(-2147483582);break u;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:D(Ev(B(43),Eu(a),a.nl));case 68:case 83:case 87:case 100:case 115:case 119:a.qn=
Qu(VV(a.n4,a.ok,1),0);a.nk=0;break u;case 71:a.nk=(-2147483577);break u;case 80:case 112:break be;case 81:a.AN=a.q2;a.q2=4;b=1;break u;case 90:a.nk=(-2147483558);break u;case 97:a.nk=7;break u;case 98:a.nk=(-2147483550);break u;case 99:c=a.nl;d=a.n4.data;if(c>=(d.length-2|0))D(Ev(B(43),Eu(a),a.nl));a.nk=d[Eq(a)]&31;break u;case 101:a.nk=27;break u;case 102:a.nk=12;break u;case 110:a.nk=10;break u;case 114:a.nk=13;break u;case 116:a.nk=9;break u;case 117:a.nk=Pi(a,4);break u;case 120:a.nk=Pi(a,2);break u;case 122:a.nk
=(-2147483526);break u;default:}break u;}g=AAA(a);h=0;if(a.nk==80)h=1;try{a.qn=Qu(g,h);}catch($$e){$$je=Bx($$e);if($$je instanceof Ku){D(Ev(B(43),Eu(a),a.nl));}else{throw $$e;}}a.nk=0;}}if(b)continue;else break;}}
let AAA=a=>{let b,c,d,e,f,g,h,i;b=new I;b.mY=H(10);c=a.nl;d=a.n4;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new M;a.ok=c;if(a.ou&4)Df(a);else a.nl=c+1|0;g=a.ok;P();if(g>=0&&1<=(f-g|0)){b.mX=O(d.data,g,1);h=new I;h.mY=H(16);G(h,h.mW,B(175));G(h,h.mW,b);return U(h);}b=new L;b.mZ=1;b.m0=1;D(b);}a.ok=c;if(a.ou&4)Df(a);else a.nl=c+1|0;c=0;r:{while(true){f=a.nl;d=a.n4.data;if(f>=(d.length-2|0))break;a.ok=f;if(a.ou&4)Df(a);else a.nl=f+1|0;c=d[a.ok];if(c==125)break r;f=b.mW;Bb(b,f,f+1|0);b.mY.data[f]=c;}}if(c
!=125){b=new Do;i=a.oM;f=a.nl;b.mZ=1;b.m0=1;b.nV=(-1);b.o0=B(43);b.oP=i;b.nV=f;D(b);}}if(!b.mW){b=new Do;i=a.oM;c=a.nl;b.mZ=1;b.m0=1;b.nV=(-1);b.o0=B(43);b.oP=i;b.nV=c;D(b);}h=U(b);if(h.mX.length==1){b=new I;b.mY=H(16);G(b,b.mW,B(175));G(b,b.mW,h);return U(b);}u:{i:{if(h.mX.length>3){if(h===B(175)?1:JJ(h,B(175),0))break i;if(h===B(176)?1:JJ(h,B(176),0))break i;}break u;}h=BR(h,2,h.mX.length);}return h;}
let ADO=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new I;c.mY=H(4);d=(-1);e=2147483647;b:{while(true){f=a.nl;g=a.n4.data;if(f>=g.length)break b;a.ok=f;if(a.ou&4)Df(a);else a.nl=f+1|0;b=g[a.ok];if(b==125)break b;if(b==44&&d<0)try{d=KL(Cr(c),10);AD3(c,0,CB(c));continue;}catch($$e){$$je=Bx($$e);if($$je instanceof B_){break;}else{throw $$e;}}h=b&65535;f=c.mW;Bb(c,f,f+1|0);c.mY.data[f]=h;}c=new Do;i=a.oM;b=a.nl;c.mZ=1;c.m0=1;c.nV=(-1);c.o0=B(43);c.oP=i;c.nV=b;D(c);}if(b!=125){c=new Do;i=a.oM;b=a.nl;c.mZ=1;c.m0=1;c.nV=(-1);c.o0
=B(43);c.oP=i;c.nV=b;D(c);}if(c.mW>0)h:{try{e=KL(Cr(c),10);if(d>=0)break h;d=e;break h;}catch($$e){$$je=Bx($$e);if($$je instanceof B_){}else{throw $$e;}}c=new Do;i=a.oM;b=a.nl;c.mZ=1;c.m0=1;c.nV=(-1);c.o0=B(43);c.oP=i;c.nV=b;D(c);}else if(d<0){c=new Do;i=a.oM;b=a.nl;c.mZ=1;c.m0=1;c.nV=(-1);c.o0=B(43);c.oP=i;c.nV=b;D(c);}if((d|e|(e-d|0))<0){c=new Do;i=a.oM;b=a.nl;c.mZ=1;c.m0=1;c.nV=(-1);c.o0=B(43);c.oP=i;c.nV=b;D(c);}f=a.nl;g=a.n4.data;h=f>=g.length?42:g[f];m:{switch(h){case 43:a.nk=(-2147483525);a.ok=f;if(a.ou
&4)Df(a);else a.nl=f+1|0;break m;case 63:a.nk=(-1073741701);a.ok=f;if(a.ou&4)Df(a);else a.nl=f+1|0;break m;default:}a.nk=(-536870789);}c=new NG;c.q1=d;c.qY=e;return c;}
let Eu=a=>{return a.oM;}
let Lr=a=>{return !a.oa&&!a.nk&&a.nl==a.o9&&!(a.n6===null?0:1)?1:0;}
let AMs=b=>{return b<0?0:1;}
let TG=a=>{let b,c;b=a.oa;c=!b&&!a.nk&&a.nl==a.o9&&!(a.n6===null?0:1)?1:0;return !c&&!(a.n6===null?0:1)&&(b<0?0:1)?1:0;}
let ACg=a=>{let b;b=a.oa;return b<=57343&&b>=56320?1:0;}
let AOU=b=>{return b<=56319&&b>=55296?1:0;}
let AI7=b=>{return b<=57343&&b>=56320?1:0;}
let Pi=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new I;c.mY=H(b);d=a.n4.data.length-2|0;e=0;while(true){f=BJ(e,b);if(f>=0)break;g=a.nl;if(g>=d)break;h=a.n4;a.ok=g;if(a.ou&4)Df(a);else a.nl=g+1|0;g=h.data[a.ok];i=c.mW;Bb(c,i,i+1|0);c.mY.data[i]=g;e=e+1|0;}if(!f)n:{try{b=KL(Cr(c),16);}catch($$e){$$je=Bx($$e);if($$je instanceof B_){break n;}else{throw $$e;}}return b;}c=new Do;j=a.oM;b=a.nl;c.mZ=1;c.m0=1;c.nV=(-1);c.o0=B(43);c.oP=j;c.nV=b;D(c);}
let AA2=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.n4.data;e=d.length-2|0;f=IP(d[a.nl]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.nl;a.ok=g;if(a.ou&4)Df(a);else a.nl=g+1|0;e:{while(true){if(c>=b)break e;h=a.nl;if(h>=e)break e;i=IP(a.n4.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.nl;a.ok=g;if(a.ou&4)Df(a);else a.nl=g+1|0;c=c+1|0;}}return f;}j=new Do;k=a.oM;b=a.nl;j.mZ=1;j.m0=1;j.nV=(-1);j.o0=B(43);j.oP=k;j.nV=b;D(j);}
let AEP=a=>{let b,c,d,e,f,g,h;b=1;c=a.ou;k:while(true){d=a.nl;e=a.n4.data;if(d>=e.length){f=new Do;g=a.oM;f.mZ=1;f.m0=1;f.nV=(-1);f.o0=B(43);f.oP=g;f.nV=d;D(f);}c:{f:{switch(e[d]){case 41:a.ok=d;if(a.ou&4)Df(a);else a.nl=d+1|0;return c|256;case 45:if(!b){h=new Do;g=a.oM;h.mZ=1;h.m0=1;h.nV=(-1);h.o0=B(43);h.oP=g;h.nV=d;D(h);}b=0;break c;case 58:break k;case 100:break f;case 105:c=b?c|2:(c^2)&c;break c;case 109:c=b?c|8:(c^8)&c;break c;case 115:c=b?c|32:(c^32)&c;break c;case 117:c=b?c|64:(c^64)&c;break c;case 120:c
=b?c|4:(c^4)&c;break c;default:}break c;}c=b?c|1:(c^1)&c;}a.ok=d;if(a.ou&4)Df(a);else a.nl=d+1|0;}a.ok=d;if(a.ou&4)Df(a);else a.nl=d+1|0;return c;}
let Eq=a=>{let b;b=a.nl;a.ok=b;if(a.ou&4)Df(a);else a.nl=b+1|0;return a.ok;}
let Df=a=>{let b,c,d,e;b=a.n4.data.length-2|0;a.nl=a.nl+1|0;b:while(true){c=a.nl;if(c<b){d:{c=a.n4.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break d;default:c:{switch(CG(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break d;}c=1;}if(c){a.nl=a.nl+1|0;continue;}}c=a.nl;if(c>=b)break;d=a.n4.data;if(d[c]!=35)break;a.nl=c+1|0;while(true){e=a.nl;if(e>=b)continue b;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue b;a.nl
=e+1|0;}}return c;}
let AJ5=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?D_([d,e]):D_([d,e,4519+f|0]);}return null;}
let AOL=b=>{return AX_.bh(b)==A2p?0:1;}
let ARw=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
let Mu=a=>{let b,c,d,e,f;b=a.n4;c=a.nl;a.ok=c;if(a.ou&4)Df(a);else a.nl=c+1|0;b=b.data;d=a.ok;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.n4.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.nl;a.ok=d;if(a.ou&4)Df(a);else a.nl=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;}
let FR=a=>{return a.r_;}
function Do(){let a=this;Bc.call(a);a.o0=null;a.oP=null;a.nV=0;}
let Ev=(a,b,c)=>{let d=new Do();AGS(d,a,b,c);return d;}
let AGS=(a,b,c,d)=>{a.mZ=1;a.m0=1;a.nV=(-1);a.o0=b;a.oP=c;a.nV=d;}
let AVR=a=>{let b,c,d,e,f,g,h,i,j,k;b=B(43);c=a.nV;if(c>=1){d=H(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new M;P();b.mX=O(d.data,0,f);}n:{h=a.o0;i=a.oP;if(i!==null&&i.mX.length){j=a.nV;i=a.oP;k=new I;k.mY=H(16);J(k,k.mW,j,10);G(k,k.mW,B(59));j=k.mW;if(i===null)i=B(2);G(k,j,i);G(k,k.mW,B(59));G(k,k.mW,b);b=new M;d=k.mY;e=d.data;c=k.mW;f=e.length;if(c>=0&&c<=(f-0|0)){b.mX=O(d.data,0,c);break n;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}b=B(43);}i=new I;i.mY=H(16);j
=i.mW;if(h===null)h=B(2);G(i,j,h);G(i,i.mW,b);b=new M;d=i.mY;e=d.data;c=i.mW;P();f=e.length;if(c>=0&&c<=(f-0|0)){b.mX=O(d.data,0,c);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let KO=F(0);
let LP=F();
let WV=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.nK;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new B6;b.nn=f;c=b;f.classObject=c;}}b=DR(b);if(b===null){b=new CO;b.mZ=1;b.m0=1;D(b);}if(b===Br(B4)){b=new Bc;b.mZ=1;b.m0=1;D(b);}if(d<0){b=new Dp;b.mZ=1;b.m0=1;D(b);}b=D6(b.nn,d);}e=0;g=0;h=a.pn;i=a.nK;d=BJ(h,h);f:{while(true){j=BJ(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new ML;b.mZ=1;b.m0=1;D(b);}k=g+1|0;if(g<0)break f;if(j>=0)break f;b.data[e]
=a.of.data[g];e=h;g=k;}return b;}b=new L;b.mZ=1;b.m0=1;D(b);}
let Qo=F(0);
let Nw=F(0);
function Hd(){LP.call(this);this.pn=0;}
let Mb=F(0);
function IL(){let a=this;Hd.call(a);a.of=null;a.nK=0;}
let IH=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.of;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new B6;i.nn=h;j=i;h.classObject=j;}}h=DR(i);if(h===null){i=new CO;i.mZ=1;i.m0=1;D(i);}if(h===Br(B4)){i=new Bc;i.mZ=1;i.m0=1;D(i);}if(f<0){i=new Dp;i.mZ=1;i.m0=1;D(i);}j=D6(h.nn,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.of=j;}}
let ACd=(a,b)=>{let c;if(b>=0&&b<a.nK)return a.of.data[b];c=new L;c.mZ=1;c.m0=1;D(c);}
let ABp=a=>{return a.nK;}
let Im=(a,b)=>{let c,d;IH(a,a.nK+1|0);c=a.of.data;d=a.nK;a.nK=d+1|0;c[d]=b;a.pn=a.pn+1|0;return 1;}
let YM=(a,b,c)=>{let d,e,f;if(b>=0){d=a.nK;if(b<=d){IH(a,d+1|0);d=a.nK;e=d;while(e>b){f=a.of.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.of.data[b]=c;a.nK=d+1|0;a.pn=a.pn+1|0;return;}}c=new L;c.mZ=1;c.m0=1;D(c);}
let Sk=(a,b)=>{let c,d,e,f;if(b>=0){c=a.nK;if(b<c){d=a.of.data;e=d[b];c=c-1|0;a.nK=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.pn=a.pn+1|0;return e;}}e=new L;e.mZ=1;e.m0=1;D(e);}
let Qk=F(Ds);
let AGv=(a,b,c,d)=>{let e,f;e=a.or;f=d.nS.data;f[e]=b-f[e]|0;return a.m5.hc(b,c,d);}
let AJO=a=>{return B(177);}
let AS4=(a,b)=>{return 0;}
let TN=F(Ds);
let AJs=(a,b,c,d)=>{return b;}
let ANu=a=>{return B(178);}
let Pj=F(Ds);
let AIk=(a,b,c,d)=>{let e;e=a.or;if(d.nS.data[e]!=b)b=(-1);return b;}
let AUH=a=>{return B(179);}
function QW(){Ds.call(this);this.yC=0;}
let AGM=(a,b,c,d)=>{let e,f;e=a.or;f=d.nS.data;f[e]=b-f[e]|0;a.yC=b;return b;}
let ATC=a=>{return B(180);}
let ARs=(a,b)=>{return 0;}
let H4=F(Ds);
let AZ9=()=>{let a=new H4();AUB(a);return a;}
let AUB=a=>{let b,c;FI();b=R;R=b+1|0;c=new Bh;c.mY=H(20);a.nf=(J(c,c.mW,b,10)).l();a.or=0;}
let AU7=(a,b,c,d)=>{if(d.sZ!=1&&b!=d.nz)return (-1);d.pk=1;d.n2.data[1]=b;return b;}
let AID=a=>{return B(181);}
function Cn(){B1.call(this);this.nH=0;}
let UN=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.m5=b;a.nH=1;a.n5=1;}
let AWD=(a,b,c,d)=>{let e;if((b+a.hp()|0)>d.nz){d.o$=1;return (-1);}e=a.hq(b,c);if(e<0)return (-1);return a.m5.hc(b+e|0,c,d);}
let AT5=a=>{return a.nH;}
let ANo=(a,b)=>{return 1;}
let SI=F(Cn);
let JI=a=>{let b=new SI();APC(b,a);return b;}
let APC=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.m5=b;a.nH=1;a.n5=1;a.nH=0;}
let ATs=(a,b,c)=>{return 0;}
let AK5=(a,b,c,d)=>{let e,f,g;e=d.nz;f=d.oW;b:{a:{while(true){g=BJ(b,e);if(g>0)return (-1);if(g<0){if(b<0)break a;if(b>=c.mX.length)break a;if(((c.mX.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break b;if(g>=c.mX.length)break b;if((c.mX.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.m5.hc(b,c,d)>=0)break;b=b+1|0;}return b;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AJb=(a,b,c,d,e)=>{let f,g,h;f=e.nz;g=e.oW;b:{a:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break a;if(c>=d.mX.length)break a;if(((d.mX.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break b;if(h>=d.mX.length)break b;if((d.mX.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.m5.hc(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new S;d.mZ=1;d.m0=1;D(d);}d=new S;d.mZ=1;d.m0=1;D(d);}
let AMI=a=>{return B(182);}
let AGH=(a,b)=>{return 0;}
function Ck(){let a=this;B1.call(a);a.n7=null;a.o4=null;a.n0=0;}
let A5V=()=>{let a=new Ck();VT(a);return a;}
let A0u=(a,b)=>{let c=new Ck();AQU(c,a,b);return c;}
let VT=a=>{let b,c;b=R;R=b+1|0;c=new Bh;c.mY=H(20);a.nf=(J(c,c.mW,b,10)).l();}
let AQU=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.n7=b;a.o4=c;a.n0=c.or;}
let AL7=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.n7;if(e===null)return (-1);f=a.n0;g=d.n2.data;h=f*2|0;i=g[h];g[h]=b;f=e.nK;j=0;a:{while(true){if(j>=f){b=a.n0;d.n2.data[b*2|0]=i;return (-1);}e=a.n7;if(j<0)break a;if(j>=e.nK)break a;h=e.of.data[j].hc(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new L;c.mZ=1;c.m0=1;D(c);}
let ARm=(a,b)=>{a.o4.m5=b;}
let ANy=a=>{return B(183);}
let AOy=(a,b)=>{let c,d,e,f,g;a:{d:{c=a.n7;if(c!==null){d=0;e=c.pn;f=c.nK;while(true){if(!(d>=f?0:1))break d;if(e<c.pn){b=new ML;b.mZ=1;b.m0=1;D(b);}g=d+1|0;if(d<0)break a;if(d>=c.nK)break a;if(c.of.data[d].gu(b))break;d=g;}return 1;}}return 0;}b=new L;b.mZ=1;b.m0=1;D(b);}
let ASf=(a,b)=>{let c,d,e;c=a.n0;d=b.n2.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;}
let AI3=a=>{let b,c,d,e;a.oV=1;b=a.o4;if(b!==null&&!b.oV)Kp(b);a:{d:{b=a.n7;if(b!==null){c=b.nK;d=0;while(true){if(d>=c)break d;b=a.n7;if(d<0)break a;if(d>=b.nK)break a;b=b.of.data[d];e=b.he();if(e===null)e=b;else{b.oV=1;Sk(a.n7,d);YM(a.n7,d,e);}if(!e.oV)e.fV();d=d+1|0;}}}if(a.m5!==null)Kp(a);return;}b=new L;b.mZ=1;b.m0=1;D(b);}
let M0=F(Ck);
let A3C=(a,b)=>{let c=new M0();AG6(c,a,b);return c;}
let AG6=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.n7=b;a.o4=c;a.n0=c.or;}
let AQ2=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.n0;f=d.nS.data;g=f[e];f[e]=b;h=a.n7.nK;e=0;b:{while(true){if(e>=h){b=a.n0;d.nS.data[b]=g;return (-1);}i=a.n7;if(e<0)break b;if(e>=i.nK)break b;j=i.of.data[e].hc(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new L;c.mZ=1;c.m0=1;D(c);}
let AOR=a=>{return B(184);}
let ASD=(a,b)=>{let c;c=a.n0;return !b.nS.data[c]?0:1;}
let Fg=F(M0);
let AXU=(a,b)=>{let c=new Fg();AM9(c,a,b);return c;}
let AM9=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.n7=b;a.o4=c;a.n0=c.or;}
let AKa=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.n0;f=d.nS.data;g=f[e];f[e]=b;h=a.n7.nK;i=0;b:{while(i<h){j=a.n7;if(i<0)break b;if(i>=j.nK)break b;if(j.of.data[i].hc(b,c,d)>=0)return a.m5.hc(a.o4.yC,c,d);i=i+1|0;}b=a.n0;d.nS.data[b]=g;return (-1);}c=new L;c.mZ=1;c.m0=1;D(c);}
let ASm=(a,b)=>{a.m5=b;}
let AGD=a=>{return B(184);}
let Ub=F(Fg);
let AYZ=(a,b)=>{let c=new Ub();ALV(c,a,b);return c;}
let ALV=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.n7=b;a.o4=c;a.n0=c.or;}
let ARe=(a,b,c,d)=>{let e,f,g;e=a.n7.nK;f=0;b:{while(f<e){g=a.n7;if(f<0)break b;if(f>=g.nK)break b;if(g.of.data[f].hc(b,c,d)>=0)return a.m5.hc(b,c,d);f=f+1|0;}return (-1);}c=new L;c.mZ=1;c.m0=1;D(c);}
let AUS=(a,b)=>{return 0;}
let AVU=a=>{return B(185);}
let ADb=F(Fg);
let AXn=(a,b)=>{let c=new ADb();AK4(c,a,b);return c;}
let AK4=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.n7=b;a.o4=c;a.n0=c.or;}
let AHV=(a,b,c,d)=>{let e,f,g;e=a.n7.nK;f=0;b:{while(true){if(f>=e)return a.m5.hc(b,c,d);g=a.n7;if(f<0)break b;if(f>=g.nK)break b;if(g.of.data[f].hc(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new L;c.mZ=1;c.m0=1;D(c);}
let AUg=(a,b)=>{return 0;}
let ALT=a=>{return B(186);}
let Yn=F(Fg);
let AYR=(a,b)=>{let c=new Yn();AT$(c,a,b);return c;}
let AT$=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.n7=b;a.o4=c;a.n0=c.or;}
let AIY=(a,b,c,d)=>{let e,f,g,h,i;e=a.n7.nK;f=d.vE?0:d.oW;d:{n:{g=a.m5.hc(b,c,d);if(g>=0){h=a.n0;d.nS.data[h]=b;h=0;while(true){if(h>=e)break n;i=a.n7;if(h<0)break d;if(h>=i.nK)break d;if(i.of.data[h].hs(f,b,c,d)>=0){b=a.n0;d.nS.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new L;c.mZ=1;c.m0=1;D(c);}
let AW7=(a,b)=>{return 0;}
let AQI=a=>{return B(187);}
let AAL=F(Fg);
let AZz=(a,b)=>{let c=new AAL();AGr(c,a,b);return c;}
let AGr=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.n7=b;a.o4=c;a.n0=c.or;}
let AFP=(a,b,c,d)=>{let e,f,g;e=a.n7.nK;f=a.n0;d.nS.data[f]=b;f=0;b:{while(true){if(f>=e)return a.m5.hc(b,c,d);g=a.n7;if(f<0)break b;if(f>=g.nK)break b;if(g.of.data[f].hs(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new L;c.mZ=1;c.m0=1;D(c);}
let ASU=(a,b)=>{return 0;}
let AIl=a=>{return B(188);}
function HQ(){Ck.call(this);this.pj=null;}
let A1E=(a,b)=>{let c=new HQ();AJM(c,a,b);return c;}
let AJM=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.pj=b;a.o4=c;a.n0=c.or;}
let AGd=(a,b,c,d)=>{let e,f,g;e=a.n0;f=d.n2.data;e=e*2|0;g=f[e];f[e]=b;e=a.pj.hc(b,c,d);if(e>=0)return e;e=a.n0;d.n2.data[e*2|0]=g;return (-1);}
let AO4=(a,b,c,d)=>{let e;e=a.pj.g_(b,c,d);if(e>=0){b=a.n0;d.n2.data[b*2|0]=e;}return e;}
let AS_=(a,b,c,d,e)=>{let f;f=a.pj.hs(b,c,d,e);if(f>=0){b=a.n0;e.n2.data[b*2|0]=f;}return f;}
let AOp=(a,b)=>{return a.pj.gu(b);}
let ARo=a=>{let b,c,d,e,f;b=new NH;c=a.pj;d=a.o4;e=R;R=e+1|0;f=new Bh;f.mY=H(20);b.nf=(J(f,f.mW,e,10)).l();b.pj=c;b.o4=d;b.n0=d.or;a.m5=b;return b;}
let AV2=a=>{let b;a.oV=1;b=a.o4;if(b!==null&&!b.oV)Kp(b);b=a.pj;if(b!==null&&!b.oV){b=b.he();if(b!==null){a.pj.oV=1;a.pj=b;}a.pj.fV();}}
let AAB=F();
let Mf=b=>{if(b===null||b.constructor.$meta.item==='undefined'){D(AYl());}return b.data.length;}
let A1V=(b,c)=>{if(b===null){b=new CO;b.mZ=1;b.m0=1;D(b);}if(b===Br(B4)){b=new Bc;b.mZ=1;b.m0=1;D(b);}if(c>=0)return D6(b.nn,c);b=new Dp;b.mZ=1;b.m0=1;D(b);}
let D6=(b,c)=>{if(b.$meta.primitive){switch(b){case A1$:return Na(c);case AYj:return Bz(c);case A0C:return K9(c);case A1O:return H(c);case AYo:return Q(c);case AXK:return MO(c);case AY7:return B9(c);case AXw:return ZR(c);}}return Bf(b,c);}
let J4=F(BC);
let H8=F();
function Bo(){let a=this;H8.call(a);a.nw=0;a.oS=0;a.ng=null;a.v_=null;a.wA=null;a.nP=0;}
let AKq=null;let Bt=()=>{Bt=X(Bo);AJR();}
let Lo=a=>{let b;Bt();b=new Bq;b.nc=Q(64);a.ng=b;}
let AH0=a=>{return null;}
let AG0=a=>{return a.ng;}
let Z5=a=>{return !a.oS?(Iv(a.ng,0)>=2048?0:1):ABE(a.ng,0)>=2048?0:1;}
let AMq=a=>{return a.nP;}
let ATV=a=>{return a;}
let Va=a=>{let b,c;if(a.wA===null){b=a.hv();c=new S1;c.CW=a;c.yM=b;b=new Bq;b.nc=Q(64);c.ng=b;a.wA=c;Ff(c,a.oS);}return a.wA;}
let IM=a=>{let b,c;if(a.v_===null){b=a.hv();c=new S0;c.CK=a;c.AB=b;c.AS=a;b=new Bq;b.nc=Q(64);c.ng=b;a.v_=c;Ff(c,a.nw);a.v_.nP=a.nP;}return a.v_;}
let AVT=a=>{return 0;}
let Ff=(a,b)=>{let c;c=a.nw;if(c^b){a.nw=c?0:1;a.oS=a.oS?0:1;}if(!a.nP)a.nP=1;return a;}
let AK9=a=>{return a.nw;}
let Qu=(b,c)=>{Bt();b=AD1(AKq,b);if(!c&&b.sP===null)b.sP=b.hx();else if(c&&b.sw===null)b.sw=Ff(b.hx(),1);return c?b.sw:b.sP;}
let AJR=()=>{let b;b=new Ih;ASS();AKq=b;}
function Cx(){let a=this;Bo.call(a);a.vI=0;a.wv=0;a.sN=0;a.xj=0;a.p6=0;a.pw=0;a.nj=null;a.nQ=null;}
let CX=(a,b)=>{let c;b:{if(a.vI){d:{if(!(b>=97&&b<=122)){if(b<65)break d;if(b>90)break d;}if(a.p6){Nc(a.nj,Hi(b&65535));break b;}Mi(a.nj,Hi(b&65535));break b;}if(a.wv&&b>128){a.sN=1;if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}b=Cg(BY,b);if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}b=Cg(BS,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.xj)Nc(a.ng,b-55296|0);else Mi(a.ng,b-55296|0);}if(a.p6)Nc(a.nj,b);else Mi(a.nj,
b);if(!a.nP&&(b>=65536&&b<=1114111?1:0))a.nP=1;return a;}
let AE5=(a,b)=>{let c,d,e;if(!a.nP&&b.nP)a.nP=1;if(a.xj){if(!b.oS)G1(a.ng,b.hv());else D5(a.ng,b.hv());}else if(!b.oS)GY(a.ng,b.hv());else{GJ(a.ng,b.hv());D5(a.ng,b.hv());a.oS=a.oS?0:1;a.xj=1;}if(!a.pw&&b.hE()!==null){if(a.p6){if(!b.nw)G1(a.nj,b.hE());else D5(a.nj,b.hE());}else if(!b.nw)GY(a.nj,b.hE());else{GJ(a.nj,b.hE());D5(a.nj,b.hE());a.nw=a.nw?0:1;a.p6=1;}}else{c=a.nw;d=a.nQ;if(d!==null){if(!c){e=new Ow;e.BK=a;e.A5=c;e.AL=d;e.AF=b;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}else{e=new Ox;e.De=a;e.zI=c;e.zC
=d;e.zq=b;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}}else{if(c&&!a.p6&&(a.nj.n9?0:1)){d=new Ot;d.Cv=a;d.zF=b;Bt();b=new Bq;b.nc=Q(64);d.ng=b;a.nQ=d;}else if(!c){d=new Or;d.xa=a;d.wj=c;d.y1=b;Bt();b=new Bq;b.nc=Q(64);d.ng=b;a.nQ=d;}else{d=new Os;d.xK=a;d.wq=c;d.AI=b;Bt();b=new Bq;b.nc=Q(64);d.ng=b;a.nQ=d;}a.pw=1;}}return a;}
let BI=(a,b,c)=>{let d;if(b>c){d=new Bc;d.mZ=1;d.m0=1;D(d);}a:{d:{if(!a.vI){if(c<55296)break d;if(b>57343)break d;}c=c+1|0;while(true){if(b>=c)break a;CX(a,b);b=b+1|0;}}if(a.p6)Uy(a.nj,b,c+1|0);else I$(a.nj,b,c+1|0);}return a;}
let T9=(a,b)=>{let c,d,e,f;if(!a.nP&&b.nP)a.nP=1;if(b.sN)a.sN=1;c=a.oS;if(!(c^b.oS)){if(!c)GY(a.ng,b.ng);else D5(a.ng,b.ng);}else if(c)G1(a.ng,b.ng);else{GJ(a.ng,b.ng);D5(a.ng,b.ng);a.oS=1;}o:{if(!a.pw){d=b.pw;if((!d?b.nj:null)!==null){c=a.nw;if(!(c^b.nw)){if(!c){GY(a.nj,!d?b.nj:null);break o;}D5(a.nj,!d?b.nj:null);break o;}if(c){G1(a.nj,!d?b.nj:null);break o;}GJ(a.nj,!d?b.nj:null);D5(a.nj,!b.pw?b.nj:null);a.nw=1;break o;}}c=a.nw;e=a.nQ;if(e!==null){if(c){f=new OR;f.BW=a;f.AU=c;f.yy=e;f.yE=b;Lo(f);a.nQ=f;}else
{f=new Ol;f.Bu=a;f.An=c;f.AH=e;f.AW=b;Bt();f.ng=ASo(2048);a.nQ=f;}}else{if(!a.p6&&(a.nj.n9?0:1)){if(!c){e=new Ou;e.Dj=a;e.zm=b;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}else{e=new Ov;e.B0=a;e.AQ=b;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}}else if(!c){e=new Oy;e.Ap=a;e.zR=b;e.zE=c;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}else{e=new Oz;e.zZ=a;e.z6=b;e.Aa=c;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}a.pw=1;}}}
let Ta=(a,b)=>{let c,d,e,f;if(!a.nP&&b.nP)a.nP=1;if(b.sN)a.sN=1;c=a.oS;if(!(c^b.oS)){if(!c)D5(a.ng,b.ng);else GY(a.ng,b.ng);}else if(!c)G1(a.ng,b.ng);else{GJ(a.ng,b.ng);D5(a.ng,b.ng);a.oS=0;}o:{if(!a.pw){d=b.pw;if((!d?b.nj:null)!==null){c=a.nw;if(!(c^b.nw)){if(!c){D5(a.nj,!d?b.nj:null);break o;}GY(a.nj,!d?b.nj:null);break o;}if(!c){G1(a.nj,!d?b.nj:null);break o;}GJ(a.nj,!d?b.nj:null);D5(a.nj,!b.pw?b.nj:null);a.nw=0;break o;}}c=a.nw;e=a.nQ;if(e!==null){if(c){f=new Oo;f.B8=a;f.Ae=c;f.yv=e;f.Am=b;Lo(f);a.nQ=f;}
else{f=new On;f.BJ=a;f.Ar=c;f.yL=e;f.zH=b;Bt();f.ng=ASo(2048);a.nQ=f;}}else{if(!a.p6&&(a.nj.n9?0:1)){if(!c){e=new Oj;e.B2=a;e.zd=b;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}else{e=new Ok;e.Dc=a;e.ze=b;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}}else if(!c){e=new Op;e.Bg=a;e.A4=b;e.z4=c;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}else{e=new Oi;e.z3=a;e.Ai=b;e.zJ=c;Bt();b=new Bq;b.nc=Q(64);e.ng=b;a.nQ=e;}a.pw=1;}}}
let AJh=(a,b)=>{let c;c=a.nQ;if(c!==null)return a.nw^c.hG(b);return a.nw^Cw(a.nj,b);}
let AW5=a=>{if(!a.pw)return a.nj;return null;}
let AKR=a=>{return a.ng;}
let AUF=a=>{let b,c;if(a.nQ!==null)return a;b=!a.pw?a.nj:null;c=new Om;c.Bq=a;c.ve=b;Bt();b=new Bq;b.nc=Q(64);c.ng=b;return Ff(c,a.nw);}
let AQf=a=>{let b,c,d,e,f,g,h,i,j,k;b=new I;b.mY=H(16);c=Iv(a.nj,0);while(c>=0){d=(Fr(c)).data;e=0;f=d.length;g=b.mW;Bb(b,g,g+f|0);f=f+e|0;while(e<f){h=b.mY.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.mW;Bb(b,g,g+1|0);b.mY.data[g]=124;c=Iv(a.nj,c+1|0);}e=b.mW;if(e>0)S6(b,e-1|0);k=new M;d=b.mY;h=d.data;e=b.mW;P();g=h.length;if(e>=0&&e<=(g-0|0)){k.mX=O(d.data,0,e);return k;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let ALa=a=>{return a.sN;}
function Ku(){let a=this;BC.call(a);a.C_=null;a.C0=null;}
function E3(){B1.call(this);this.ny=null;}
let Vp=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;}
let AWM=a=>{return a.ny;}
let ATb=(a,b)=>{return !a.ny.gu(b)&&!a.m5.gu(b)?0:1;}
let AU2=(a,b)=>{return 1;}
let APA=a=>{let b;a.oV=1;b=a.m5;if(b!==null&&!b.oV){b=b.he();if(b!==null){a.m5.oV=1;a.m5=b;}a.m5.fV();}b=a.ny;if(b!==null){if(!b.oV){b=b.he();if(b!==null){a.ny.oV=1;a.ny=b;}a.ny.fV();}else if(b instanceof HQ&&b.o4.wL)a.ny=b.m5;}}
function DP(){E3.call(this);this.nL=null;}
let A1S=(a,b,c)=>{let d=new DP();AQ6(d,a,b,c);return d;}
let AQ6=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;a.nL=b;}
let AFR=(a,b,c,d)=>{let e,f;e=0;b:{while((b+a.nL.hp()|0)<=d.nz){f=a.nL.hq(b,c);if(f<=0)break b;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.m5.hc(b,c,d);if(f>=0)break;b=b-a.nL.hp()|0;e=e+(-1)|0;}return f;}
let AI0=a=>{return B(189);}
function Gu(){DP.call(this);this.r0=null;}
let AY9=(a,b,c,d)=>{let e=new Gu();AOh(e,a,b,c,d);return e;}
let AOh=(a,b,c,d,e)=>{let f,g;f=R;R=f+1|0;g=new Bh;g.mY=H(20);a.nf=(J(g,g.mW,f,10)).l();a.m5=d;a.ny=c;a.n5=e;a.nL=c;a.r0=b;}
let AHv=(a,b,c,d)=>{let e,f,g,h,i;e=a.r0;f=e.q1;g=e.qY;h=0;while(true){if(h>=f){n:{while(h<g){if((b+a.nL.hp()|0)>d.nz)break n;i=a.nL.hq(b,c);if(i<1)break n;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.m5.hc(b,c,d);if(i>=0)break;b=b-a.nL.hp()|0;h=h+(-1)|0;}return i;}if((b+a.nL.hp()|0)>d.nz){d.o$=1;return (-1);}i=a.nL.hq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let AH5=a=>{return Rg(a.r0);}
let DU=F(E3);
let AYB=(a,b,c)=>{let d=new DU();ATO(d,a,b,c);return d;}
let ATO=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;}
let AGa=(a,b,c,d)=>{let e;if(!a.ny.hJ(d))return a.m5.hc(b,c,d);e=a.ny.hc(b,c,d);if(e>=0)return e;return a.m5.hc(b,c,d);}
let AM1=a=>{return B(190);}
let Gq=F(DP);
let A01=(a,b,c)=>{let d=new Gq();AO6(d,a,b,c);return d;}
let AO6=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;a.nL=b;}
let APe=(a,b,c,d)=>{let e;e=a.ny.hc(b,c,d);if(e<0)e=a.m5.hc(b,c,d);return e;}
let AW_=(a,b)=>{a.m5=b;a.ny.fZ(b);}
let ADt=F(DP);
let AYF=a=>{let b=new ADt();ANi(b,a);return b;}
let ANi=(a,b)=>{let c,d,e,f;c=b.ny;d=b.m5;e=b.n5;f=R;R=f+1|0;b=new Bh;b.mY=H(20);a.nf=(J(b,b.mW,f,10)).l();a.m5=d;a.ny=c;a.n5=e;a.nL=c;c.fZ(a);}
let AWs=(a,b,c,d)=>{while((b+a.nL.hp()|0)<=d.nz&&a.nL.hq(b,c)>0){b=b+a.nL.hp()|0;}return a.m5.hc(b,c,d);}
let AP7=(a,b,c,d)=>{let e,f,g;e=a.m5.g_(b,c,d);if(e<0)return (-1);f=e-a.nL.hp()|0;while(f>=b&&a.nL.hq(f,c)>0){g=f-a.nL.hp()|0;e=f;f=g;}return e;}
function Bs(){let a=this;C.call(a);a.sP=null;a.sw=null;}
let ASK=(a,b)=>{if(!b&&a.sP===null)a.sP=a.hx();else if(b&&a.sw===null)a.sw=Ff(a.hx(),1);if(b)return a.sw;return a.sP;}
function NG(){let a=this;H8.call(a);a.q1=0;a.qY=0;}
let Rg=a=>{let b,c,d,e,f,g,h;b=a.q1;c=a.qY;if(c==2147483647)d=B(43);else{d=new Bh;d.mY=H(20);d=(J(d,d.mW,c,10)).l();}e=new I;e.mY=H(16);c=e.mW;Bb(e,c,c+1|0);e.mY.data[c]=123;J(e,e.mW,b,10);b=e.mW;Bb(e,b,b+1|0);e.mY.data[b]=44;f=e.mW;if(d===null)d=B(2);G(e,f,d);b=e.mW;Bb(e,b,b+1|0);g=e.mY;h=g.data;h[b]=125;d=new M;b=e.mW;P();c=h.length;if(b>=0&&b<=(c-0|0)){d.mX=O(g.data,0,b);return d;}d=new L;d.mZ=1;d.m0=1;Bd(d);D(d);}
let Oe=F(B1);
let ANQ=(a,b,c,d)=>{return b;}
let ARa=a=>{return B(191);}
let ARl=(a,b)=>{return 0;}
function Bq(){let a=this;C.call(a);a.nc=null;a.n9=0;}
let ASo=a=>{let b=new Bq();AGe(b,a);return b;}
let AGe=(a,b)=>{let c;if(b>=0){a.nc=Q(((b+32|0)-1|0)/32|0);return;}c=new Dp;c.mZ=1;c.m0=1;D(c);}
let Mi=(a,b)=>{let c,d,e;if(b<0){c=new L;c.mZ=1;c.m0=1;D(c);}d=b/32|0;if(b>=a.n9){JH(a,d+1|0);a.n9=b+1|0;}e=a.nc.data;e[d]=e[d]|1<<(b%32|0);}
let I$=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BJ(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.n9){JH(a,e+1|0);a.n9=c;}if(d==e){f=a.nc.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.nc.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new L;i.mZ=1;i.m0=1;D(i);}
let Nc=(a,b)=>{let c,d,e,f,g;if(b<0){c=new L;c.mZ=1;c.m0=1;D(c);}d=b/32|0;e=a.nc.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.n9-1|0))Ij(a);}}
let Uy=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.n9;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.nc.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.nc.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}Ij(a);return;}i=new L;i.mZ=1;i.m0=1;D(i);}
let Cw=(a,b)=>{let c,d,e;if(b<0){c=new L;c.mZ=1;c.m0=1;D(c);}d=b/32|0;e=a.nc.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
let Iv=(a,b)=>{let c,d,e,f,g;if(b<0){c=new L;c.mZ=1;c.m0=1;D(c);}d=a.n9;if(b>=d)return (-1);e=b/32|0;f=a.nc.data;g=f[e]>>>(b%32|0)|0;if(g)return El(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+El(f[g])|0;g=g+1|0;}return (-1);}
let ABE=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new L;c.mZ=1;c.m0=1;D(c);}d=a.n9;if(b>=d)return b;e=b/32|0;f=a.nc.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return El(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+El(f[h]^(-1))|0;h=h+1|0;}return d;}
let JH=(a,b)=>{let c,d,e,f,g,h;c=a.nc.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=Q(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.nc=g;}
let Ij=a=>{let b,c,d;b=(a.n9+31|0)/32|0;a.n9=b*32|0;c=b-1|0;b:{while(true){if(c<0)break b;d=Gw(a.nc.data[c]);if(d<32)break;c=c+(-1)|0;a.n9=a.n9-32|0;}a.n9=a.n9-d|0;}}
let JB=(a,b)=>{let c,d,e,f,g;c=a.nc.data;d=c.length;e=b.nc.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;}
let D5=(a,b)=>{let c,d,e,f,g,h,i;c=a.nc.data;d=c.length;e=b.nc.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.n9;i=b.n9;if(h<i)i=h;a.n9=i;Ij(a);}
let G1=(a,b)=>{let c,d,e,f,g;c=a.nc.data;d=c.length;e=b.nc.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}Ij(a);}
let GY=(a,b)=>{let c,d,e,f,g;c=a.n9;d=b.n9;if(c>d)d=c;a.n9=d;JH(a,(d+31|0)/32|0);e=a.nc.data;c=e.length;f=b.nc.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}}
let GJ=(a,b)=>{let c,d,e,f,g;c=a.n9;d=b.n9;if(c>d)d=c;a.n9=d;JH(a,(d+31|0)/32|0);e=a.nc.data;c=e.length;f=b.nc.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}Ij(a);}
function Nt(){let a=this;Ck.call(a);a.vj=null;a.wm=0;}
let Yg=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.oW;f=d.nz;g=b+1|0;f=BJ(g,f);if(f>0){d.o$=1;return (-1);}if(b>=0&&b<c.mX.length){h=c.mX.charCodeAt(b);if(!a.vj.hG(h))return (-1);i=h&64512;j=i!=55296?0:1;o:{if(j){if(f>=0)break o;if(g>=0&&g<c.mX.length){if((c.mX.charCodeAt(g)&64512)!=56320?0:1)return (-1);break o;}c=new S;c.mZ=1;c.m0=1;D(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.mX.length){if(!((c.mX.charCodeAt(j)&64512)!=55296?0:1))break o;return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}}return a.m5.hc(g,c,d);}c=new S;c.mZ
=1;c.m0=1;D(c);}
let ARy=a=>{let b,c,d,e,f,g,h,i;b=!a.wm?B(192):B(193);c=a.vj.l();d=new I;d.mY=H(16);G(d,d.mW,B(194));G(d,d.mW,b);e=d.mW;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.mY;g=f.data;h=d.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.mX=O(f.data,0,h);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
function HA(){let a=this;Ck.call(a);a.r1=null;a.rS=null;}
let AHm=(a,b,c,d)=>{let e;e=a.r1.hc(b,c,d);if(e<0)e=Yg(a.rS,b,c,d);if(e>=0)return e;return (-1);}
let AQ0=(a,b)=>{a.m5=b;a.rS.m5=b;a.r1.fZ(b);}
let ARW=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.r1;P();if(b===null)b=B(2);else{c=b.nf;b=b.hd();d=new I;d.mY=H(16);e=d.mW;Bb(d,e,e+1|0);d.mY.data[e]=60;CZ(d,d.mW,c===null?B(2):C1(c));e=d.mW;Bb(d,e,e+1|0);d.mY.data[e]=58;CZ(d,d.mW,b===null?B(2):C1(b));e=d.mW;Bb(d,e,e+1|0);f=d.mY;g=f.data;g[e]=62;b=new M;e=d.mW;h=g.length;if(e>=0&&e<=(h-0|0))b.mX=O(f.data,0,e);else{b=new L;Kz(b);D(b);}}r:{c=a.rS;if(c===null)i=B(2);else{d=c.nf;i=!c.wm?B(192):B(193);j=c.vj.l();c=new I;c.mY=H(16);DM(c,c.mW,B(194));DM(c,c.mW,i);DM(c,c.mW,
j);i=new M;f=c.mY;g=f.data;e=c.mW;h=g.length;if(e>=0&&e<=(h-0|0)){i.mX=O(f.data,0,e);c=new I;c.mY=H(16);k=c.mW;Bb(c,k,k+1|0);c.mY.data[k]=60;CZ(c,c.mW,d===null?B(2):C1(d));h=c.mW;Bb(c,h,h+1|0);c.mY.data[h]=58;CZ(c,c.mW,C1(i));h=c.mW;Bb(c,h,h+1|0);f=c.mY;g=f.data;g[h]=62;i=new M;e=c.mW;h=g.length;if(e>=0&&e<=(h-0|0)){i.mX=O(f.data,0,e);break r;}b=new L;Kz(b);D(b);}D(AHc());}}c=new I;c.mY=H(16);G(c,c.mW,B(195));G(c,c.mW,b);G(c,c.mW,B(196));G(c,c.mW,i);b=new M;f=c.mY;g=f.data;e=c.mW;h=g.length;if(e>=0&&e<=(h-0
|0)){b.mX=O(f.data,0,e);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let AIs=(a,b)=>{return 1;}
let AHZ=(a,b)=>{return 1;}
function Ee(){let a=this;Ck.call(a);a.o7=null;a.sE=0;}
let A0m=a=>{let b=new Ee();ARQ(b,a);return b;}
let ARQ=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.o7=b.hM();a.sE=b.nw;}
let AKJ=(a,b,c,d)=>{let e,f,g,h;a:{e=d.nz;if(b<e){f=b+1|0;if(b>=0&&b<c.mX.length){g=c.mX.charCodeAt(b);if(a.hG(g)){h=a.m5.hc(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.mX.length){f=c.mX.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.hG(((g&1023)<<10|f&1023)+65536|0))break a;else return a.m5.hc(e,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}}return (-1);}
let AVJ=a=>{let b,c,d,e,f,g,h,i;b=!a.sE?B(192):B(193);c=a.o7.l();d=new I;d.mY=H(16);G(d,d.mW,B(194));G(d,d.mW,b);e=d.mW;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.mY;g=f.data;h=d.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.mX=O(f.data,0,h);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let ALr=(a,b)=>{return a.o7.hG(b);}
let AHa=(a,b)=>{let c,d,e;if(b instanceof Fm){c=a.o7;d=b.si;Bt();return c.hG(d);}if(b instanceof E6){c=a.o7;d=b.o6;Bt();return c.hG(d);}if(b instanceof Ee){c=a.o7;b=b.o7;Bt();return c.hE()!==null&&b.hE()!==null?JB(c.hE(),b.hE()):1;}if(!(b instanceof EQ))return 1;c=a.o7;e=b.pK;Bt();return c.hE()!==null&&e.hE()!==null?JB(c.hE(),e.hE()):1;}
let ANF=a=>{return a.o7;}
let ATP=(a,b)=>{a.m5=b;}
let AKY=(a,b)=>{return 1;}
let Nu=F(Ee);
let A1j=a=>{let b=new Nu();AJ2(b,a);return b;}
let AJ2=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.o7=b.hM();a.sE=b.nw;}
let ANp=(a,b)=>{let c;c=a.o7;if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}b=Cg(BY,b);if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}return c.hG(Cg(BS,b));}
let AV9=a=>{let b,c,d,e,f,g,h,i;b=!a.sE?B(192):B(193);c=a.o7.l();d=new I;d.mY=H(16);G(d,d.mW,B(197));G(d,d.mW,b);e=d.mW;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.mY;g=f.data;h=d.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.mX=O(f.data,0,h);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
function OB(){let a=this;Cn.call(a);a.vq=null;a.xe=0;}
let AZ1=a=>{let b=new OB();AQz(b,a);return b;}
let AQz=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;a.vq=b.hM();a.xe=b.nw;}
let ANT=(a,b,c)=>{let d;d=a.vq;if(b>=0&&b<c.mX.length){b=c.mX.charCodeAt(b);if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}b=Cg(BY,b)&65535;if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}return !d.hG(Cg(BS,b)&65535)?(-1):1;}c=new S;c.mZ=1;c.m0=1;D(c);}
let AIb=a=>{let b,c,d,e,f,g,h,i;b=!a.xe?B(192):B(193);c=a.vq.l();d=new I;d.mY=H(16);G(d,d.mW,B(197));G(d,d.mW,b);e=d.mW;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.mY;g=f.data;h=d.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.mX=O(f.data,0,h);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
function EQ(){let a=this;Cn.call(a);a.pK=null;a.xG=0;}
let A2T=a=>{let b=new EQ();AR1(b,a);return b;}
let AR1=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;a.pK=b.hM();a.xG=b.nw;}
let AFk=(a,b,c)=>{let d;d=a.pK;if(b>=0&&b<c.mX.length)return !d.hG(c.mX.charCodeAt(b))?(-1):1;c=new S;c.mZ=1;c.m0=1;D(c);}
let AN2=a=>{let b,c,d,e,f,g,h,i;b=!a.xG?B(192):B(193);c=a.pK.l();d=new I;d.mY=H(16);G(d,d.mW,B(194));G(d,d.mW,b);e=d.mW;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.mY;g=f.data;h=d.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.mX=O(f.data,0,h);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let ARn=(a,b)=>{let c,d,e;if(b instanceof E6){c=a.pK;d=b.o6;Bt();return c.hG(d);}if(b instanceof EQ){c=a.pK;b=b.pK;Bt();return c.hE()!==null&&b.hE()!==null?JB(c.hE(),b.hE()):1;}if(!(b instanceof Ee)){if(!(b instanceof Fm))return 1;return 0;}c=a.pK;e=b.o7;Bt();return c.hE()!==null&&e.hE()!==null?JB(c.hE(),e.hE()):1;}
function IN(){let a=this;Ck.call(a);a.qB=null;a.qv=null;a.uk=0;}
let APc=(a,b)=>{a.m5=b;}
let ASV=a=>{let b,c,d,e,f,g,h,i;if(a.qv===null){b=new M;c=a.qB;d=c.data;P();b.mX=O(c.data,0,d.length);a.qv=b;}e=a.qv;b=new I;b.mY=H(16);G(b,b.mW,B(198));f=b.mW;if(e===null)e=B(2);G(b,f,e);g=new M;c=b.mY;d=c.data;h=b.mW;P();i=d.length;if(h>=0&&h<=(i-0|0)){g.mX=O(c.data,0,h);return g;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let AFB=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.nz;f=Q(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.mX.length){j=c.mX.charCodeAt(b);k=AJ5(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.uk;if(b!=m)return (-1);while(true){if(l>=m)return a.m5.hc(i,c,d);if(f[l]!=a.qB.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.mX.length){j=c.mX.charCodeAt(i);g=j-4449|0;}else{c=new S;c.mZ=1;c.m0=1;D(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.mX.length){j
=c.mX.charCodeAt(b);h=j-4519|0;}else{c=new S;c.mZ=1;c.m0=1;D(c);}}if(h>=0&&h<28){bc:{b=b+1|0;k[2]=j;if(a.uk==3){m=k[0];f=a.qB.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.m5.hc(b,c,d);break bc;}}b=(-1);}return b;}p:{if(a.uk==2){m=k[0];f=a.qB.data;if(m==f[0]&&k[1]==f[1]){b=a.m5.hc(b,c,d);break p;}}b=(-1);}return b;}return (-1);}return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AIg=(a,b)=>{let c,d,e,f;b:{if(b instanceof IN){b=b;if(b.qv===null){c=new M;d=b.qB;e=d.data;P();c.mX=O(d.data,0,e.length);b.qv=c;}c=b.qv;if(a.qv===null){b=new M;d=a.qB;e=d.data;P();b.mX=O(d.data,0,e.length);a.qv=b;}b=a.qv;if(c===b)f=1;else if(!(b instanceof M))f=0;else{b=b;f=c.mX!==b.mX?0:1;}if(!f){f=0;break b;}}f=1;}return f;}
let AUJ=(a,b)=>{return 1;}
function E6(){Cn.call(this);this.o6=0;}
let AKb=a=>{let b=new E6();AR5(b,a);return b;}
let AR5=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;a.o6=b;}
let ANz=a=>{return 1;}
let AMn=(a,b,c)=>{let d;d=a.o6;if(b>=0&&b<c.mX.length)return d!=c.mX.charCodeAt(b)?(-1):1;c=new S;c.mZ=1;c.m0=1;D(c);}
let AKG=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof M){e=d.nz;while(true){if(b>=e)return (-1);f=Ek(c,a.o6,b);if(f<0)return (-1);g=a.m5;b=f+1|0;if(g.hc(b,c,d)>=0)break;}return f;}h=d.nz;c:{o:{while(true){if(b>h){b=(-1);break o;}i=b+1|0;if(i>d.nz){d.o$=1;e=(-1);}else{e=a.o6;if(b<0)break c;if(b>=c.mX.length)break c;e=e!=c.mX.charCodeAt(b)?(-1):1;e=e<0?(-1):a.m5.hc(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new S;Z(c);D(c);}
let ANH=(a,b,c,d,e)=>{let f;if(d instanceof M){a:{while(true){if(c<b)return (-1);c=FQ(d,a.o6,c);if(c<0)break a;if(c<b)break a;if(a.m5.hc(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}c:{o:{while(true){if(c<b){c=(-1);break o;}if((c+1|0)>e.nz){e.o$=1;f=(-1);}else{f=a.o6;if(c<0)break c;if(c>=d.mX.length)break c;f=f!=d.mX.charCodeAt(c)?(-1):1;f=f<0?(-1):a.m5.hc(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new S;Z(d);D(d);}
let AUX=a=>{let b,c,d,e,f,g,h;b=a.o6;c=new I;c.mY=H(16);d=c.mW;Bb(c,d,d+1|0);e=c.mY;f=e.data;f[d]=b;g=new M;d=c.mW;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.mX=O(e.data,0,d);return g;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let AUA=(a,b)=>{let c,d,e,f;if(b instanceof E6)return b.o6!=a.o6?0:1;if(!(b instanceof EQ)){if(b instanceof Ee)return b.hG(a.o6);if(!(b instanceof Fm))return 1;return 0;}b=b;c=a.o6;d=new M;e=H(1);f=e.data;f[0]=c;P();d.mX=O(e.data,0,f.length);b=b.pK;if(0>=d.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}return (!b.hG(d.mX.charCodeAt(0))?(-1):1)<=0?0:1;}
function To(){Cn.call(this);this.uL=0;}
let A14=a=>{let b=new To();AP3(b,a);return b;}
let AP3=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}b=Cg(BY,b)&65535;if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}a.uL=Cg(BS,b)&65535;}
let AFp=(a,b,c)=>{let d;d=a.uL;if(b>=0&&b<c.mX.length){b=c.mX.charCodeAt(b);if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}b=Cg(BY,b)&65535;if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}return d!=(Cg(BS,b)&65535)?(-1):1;}c=new S;c.mZ=1;c.m0=1;D(c);}
let AQZ=a=>{let b,c,d,e,f,g,h;b=a.uL;c=new I;c.mY=H(16);G(c,c.mW,B(199));d=c.mW;Bb(c,d,d+1|0);e=c.mY;f=e.data;f[d]=b;g=new M;d=c.mW;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.mX=O(e.data,0,d);return g;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
function Np(){let a=this;Cn.call(a);a.wa=0;a.wy=0;}
let AYw=a=>{let b=new Np();ASM(b,a);return b;}
let ASM=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;a.wa=b;a.wy=Hi(b);}
let AF7=(a,b,c)=>{let d;d=a.wa;if(b>=0&&b<c.mX.length){d:{k:{if(d!=c.mX.charCodeAt(b)){d=a.wy;if(b<0)break d;if(b>=c.mX.length)break d;if(d!=c.mX.charCodeAt(b)){b=(-1);break k;}}b=1;}return b;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AMO=a=>{let b,c,d,e,f,g,h;b=a.wa;c=new I;c.mY=H(16);G(c,c.mW,B(200));d=c.mW;Bb(c,d,d+1|0);e=c.mY;f=e.data;f[d]=b;g=new M;d=c.mW;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.mX=O(e.data,0,d);return g;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
function GB(){let a=this;Ck.call(a);a.rO=0;a.qg=null;a.rq=null;a.rm=0;}
let A3Y=(a,b)=>{let c=new GB();AHK(c,a,b);return c;}
let AHK=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.rO=1;a.rq=b;a.rm=c;}
let AVZ=(a,b)=>{a.m5=b;}
let AQ1=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=Q(4);f=d.nz;if(b>=f)return (-1);g=LB(a,b,c,f);h=b+a.rO|0;i=AKT.hQ(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;B$(i,0,e,0,b);b=0+b|0;}k:{if(h<f){i=e.data;g=LB(a,h,c,f);while(b<4){if(!ARw(g)){k=b+1|0;i[b]=g;}else{j=(AKT.hQ(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.rO|0;if(h>=f){b=k;break k;}g=LB(a,h,c,f);b=k;}}}if(b!=a.rm)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.m5.hc(h,c,d);if(j[g]!=a.rq.data[g])break;g
=g+1|0;}return (-1);}
let AQN=a=>{let b,c,d,e,f,g,h,i;if(a.qg===null){b=new I;b.mY=H(16);c=0;while(c<a.rm){d=Fr(a.rq.data[c]);e=d.data.length;Kv(b,b.mW,d,0,e);c=c+1|0;}f=new M;d=b.mY;g=d.data;h=b.mW;P();e=g.length;if(h>=0&&h<=(e-0|0)){f.mX=O(d.data,0,h);a.qg=f;}else{b=new L;Z(b);D(b);}}i=a.qg;b=new I;b.mY=H(16);G(b,b.mW,B(201));c=b.mW;if(i===null)i=B(2);G(b,c,i);f=new M;d=b.mY;g=d.data;h=b.mW;P();e=g.length;if(h>=0&&h<=(e-0|0)){f.mX=O(d.data,0,h);return f;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let LB=(a,b,c,d)=>{let e,f,g,h;b:{a.rO=1;if(b>=(d-1|0)){if(b>=0&&b<c.mX.length){e=c.mX.charCodeAt(b);break b;}c=new S;c.mZ=1;c.m0=1;D(c);}d=b+1|0;if(b>=0&&b<c.mX.length){e=c.mX.charCodeAt(b);if(d>=0&&d<c.mX.length){f=c.mX.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=H(2);h=g.data;h[0]=e;h[1]=f;e=VK(g,0,h.length);a.rO=2;}break b;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}return e;}
let ANU=(a,b)=>{let c,d,e,f,g,h,i;b:{if(b instanceof GB){b=b;if(b.qg===null){c=new I;c.mY=H(16);d=0;while(d<b.rm){e=Fr(b.rq.data[d]);f=e.data.length;Kv(c,c.mW,e,0,f);d=d+1|0;}g=new M;e=c.mY;h=e.data;i=c.mW;P();f=h.length;if(i>=0&&i<=(f-0|0)){g.mX=O(e.data,0,i);b.qg=g;}else{b=new L;Z(b);D(b);}}g=b.qg;if(a.qg===null){b=new I;b.mY=H(16);d=0;while(d<a.rm){e=Fr(a.rq.data[d]);f=e.data.length;Kv(b,b.mW,e,0,f);d=d+1|0;}c=new M;e=b.mY;h=e.data;f=b.mW;P();i=h.length;if(f>=0&&f<=(i-0|0)){c.mX=O(e.data,0,f);a.qg=c;}else
{b=new L;Z(b);D(b);}}b=a.qg;if(g===b)d=1;else if(!(b instanceof M))d=0;else{b=b;d=g.mX!==b.mX?0:1;}if(!d){d=0;break b;}}d=1;}return d;}
let ASp=(a,b)=>{return 1;}
let AEm=F(GB);
let A3f=(a,b)=>{let c=new AEm();AMV(c,a,b);return c;}
let AMV=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.rO=1;a.rq=b;a.rm=c;}
let ABh=F(GB);
let A0B=(a,b)=>{let c=new ABh();AIp(c,a,b);return c;}
let AIp=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.rO=1;a.rq=b;a.rm=c;}
let T1=F(DU);
let AJA=(a,b,c,d)=>{let e;while(true){e=a.ny.hc(b,c,d);if(e<=0)break;b=e;}return a.m5.hc(b,c,d);}
let Pg=F(DU);
let APT=(a,b,c,d)=>{let e;e=a.ny.hc(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.ny.hc(e,c,d);if(b<=e)break;e=b;}b=e;}return a.m5.hc(b,c,d);}
let Is=F(DU);
let A3I=(a,b,c)=>{let d=new Is();AFY(d,a,b,c);return d;}
let AFY=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;}
let ATJ=(a,b,c,d)=>{let e;if(!a.ny.hJ(d))return a.m5.hc(b,c,d);e=a.ny.hc(b,c,d);if(e>=0)return e;return a.m5.hc(b,c,d);}
let AVb=(a,b)=>{a.m5=b;a.ny.fZ(b);}
let O1=F(Is);
let ANE=(a,b,c,d)=>{let e;e=a.ny.hc(b,c,d);if(e<=0)e=b;return a.m5.hc(e,c,d);}
let AQq=(a,b)=>{a.m5=b;}
function Gz(){let a=this;DU.call(a);a.qk=null;a.py=0;}
let A5W=(a,b,c,d,e)=>{let f=new Gz();Ui(f,a,b,c,d,e);return f;}
let Ui=(a,b,c,d,e,f)=>{let g,h;g=R;R=g+1|0;h=new Bh;h.mY=H(20);a.nf=(J(h,h.mW,g,10)).l();a.m5=d;a.ny=c;a.n5=e;a.qk=b;a.py=f;}
let AW2=(a,b,c,d)=>{let e,f,g,h;e=a.py;e=d.pZ.data[e];if(!a.ny.hJ(d))return a.m5.hc(b,c,d);if(e>=a.qk.qY)return a.m5.hc(b,c,d);f=a.py;e=e+1|0;d.pZ.data[f]=e;g=a.ny.hc(b,c,d);if(g>=0){b=a.py;d.pZ.data[b]=0;return g;}g=a.py;e=e+(-1)|0;h=d.pZ.data;h[g]=e;if(e>=a.qk.q1)return a.m5.hc(b,c,d);h[g]=0;return (-1);}
let AVh=a=>{return Rg(a.qk);}
let NI=F(Gz);
let AM2=(a,b,c,d)=>{let e,f,g;e=0;f=a.qk.qY;b:{while(true){g=a.ny.hc(b,c,d);if(g<=b)break b;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.qk.q1)return (-1);return a.m5.hc(b,c,d);}
let Qf=F(DU);
let AWc=(a,b,c,d)=>{let e;if(!a.ny.hJ(d))return a.m5.hc(b,c,d);e=a.m5.hc(b,c,d);if(e>=0)return e;return a.ny.hc(b,c,d);}
let XG=F(Is);
let AZe=(a,b,c)=>{let d=new XG();ARz(d,a,b,c);return d;}
let ARz=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;}
let AIu=(a,b,c,d)=>{let e;if(!a.ny.hJ(d))return a.m5.hc(b,c,d);e=a.m5.hc(b,c,d);if(e<0)e=a.ny.hc(b,c,d);return e;}
let R9=F(Gz);
let A5X=(a,b,c,d,e)=>{let f=new R9();AAH(f,a,b,c,d,e);return f;}
let AAH=(a,b,c,d,e,f)=>{let g,h;g=R;R=g+1|0;h=new Bh;h.mY=H(20);a.nf=(J(h,h.mW,g,10)).l();a.m5=d;a.ny=c;a.n5=e;a.qk=b;a.py=f;}
let AGQ=(a,b,c,d)=>{let e,f,g;e=a.py;f=d.pZ.data[e];if(!a.ny.hJ(d))return a.m5.hc(b,c,d);g=a.qk;if(f>=g.qY){e=a.py;d.pZ.data[e]=0;return a.m5.hc(b,c,d);}if(f<g.q1){e=a.py;d.pZ.data[e]=f+1|0;e=a.ny.hc(b,c,d);}else{e=a.m5.hc(b,c,d);if(e>=0){b=a.py;d.pZ.data[b]=0;return e;}e=a.py;d.pZ.data[e]=f+1|0;e=a.ny.hc(b,c,d);}return e;}
let YV=F(E3);
let AZF=(a,b,c)=>{let d=new YV();AG7(d,a,b,c);return d;}
let AG7=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;}
let AWH=(a,b,c,d)=>{let e;e=d.nz;if(e>b)return a.m5.hs(b,e,c,d);return a.m5.hc(b,c,d);}
let ATY=(a,b,c,d)=>{let e;e=d.nz;if(a.m5.hs(b,e,c,d)>=0)return b;return (-1);}
let AR2=a=>{return B(202);}
function VG(){E3.call(this);this.vi=null;}
let AYe=(a,b,c,d)=>{let e=new VG();ARR(e,a,b,c,d);return e;}
let ARR=(a,b,c,d,e)=>{let f,g;f=R;R=f+1|0;g=new Bh;g.mY=H(20);a.nf=(J(g,g.mW,f,10)).l();a.m5=c;a.ny=b;a.n5=d;a.vi=e;}
let ARp=(a,b,c,d)=>{let e,f,g;e=d.nz;f=b;b:{while(true){if(f>=e){f=(-1);break b;}g=a.vi;if(f<0)break;if(f>=c.mX.length)break;if(g.hU(c.mX.charCodeAt(f)))break b;f=f+1|0;}c=new S;c.mZ=1;c.m0=1;D(c);}if(f>=0)e=f;if(e>b)return a.m5.hs(b,e,c,d);return a.m5.hc(b,c,d);}
let AFL=(a,b,c,d)=>{let e,f,g,h,i;e=d.nz;f=a.m5.g_(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.vi;if(g<0)break;if(g>=c.mX.length)break;if(h.hU(c.mX.charCodeAt(g)))break a;g=g+1|0;}c=new S;c.mZ=1;c.m0=1;D(c);}if(g>=0)e=g;g=a.m5.hs(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;h:{while(true){if(i<b){i=(-1);break h;}d=a.vi;if(i<0)break;if(i>=c.mX.length)break;if(d.hU(c.mX.charCodeAt(i)))break h;i=i+(-1)|0;}c=new S;c.mZ=1;c.m0=1;D(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;}
let AS1=a=>{return B(203);}
let F9=F();
let ANN=null;let AJr=null;let O3=b=>{let c;if(!(b&1)){c=AJr;if(c!==null)return c;c=new Sj;AJr=c;return c;}c=ANN;if(c!==null)return c;c=new Si;ANN=c;return c;}
let AFc=F(DP);
let A2m=(a,b,c)=>{let d=new AFc();ASq(d,a,b,c);return d;}
let ASq=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;a.nL=b;}
let AGU=(a,b,c,d)=>{let e;b:{while(true){if((b+a.nL.hp()|0)>d.nz)break b;e=a.nL.hq(b,c);if(e<1)break;b=b+e|0;}}return a.m5.hc(b,c,d);}
let ADp=F(Gq);
let AXJ=(a,b,c)=>{let d=new ADp();AV_(d,a,b,c);return d;}
let AV_=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;a.nL=b;}
let APO=(a,b,c,d)=>{let e;if((b+a.nL.hp()|0)<=d.nz){e=a.nL.hq(b,c);if(e>=1)b=b+e|0;}return a.m5.hc(b,c,d);}
let V4=F(Gu);
let A3b=(a,b,c,d)=>{let e=new V4();APL(e,a,b,c,d);return e;}
let APL=(a,b,c,d,e)=>{let f,g;f=R;R=f+1|0;g=new Bh;g.mY=H(20);a.nf=(J(g,g.mW,f,10)).l();a.m5=d;a.ny=c;a.n5=e;a.nL=c;a.r0=b;}
let ATf=(a,b,c,d)=>{let e,f,g,h,i;e=a.r0;f=e.q1;g=e.qY;h=0;while(true){if(h>=f){n:{while(true){if(h>=g)break n;if((b+a.nL.hp()|0)>d.nz)break n;i=a.nL.hq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.m5.hc(b,c,d);}if((b+a.nL.hp()|0)>d.nz){d.o$=1;return (-1);}i=a.nL.hq(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let Xx=F(DP);
let A2Y=(a,b,c)=>{let d=new Xx();AXb(d,a,b,c);return d;}
let AXb=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;a.nL=b;}
let ARg=(a,b,c,d)=>{let e;while(true){e=a.m5.hc(b,c,d);if(e>=0)break;if((b+a.nL.hp()|0)<=d.nz){e=a.nL.hq(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
let ABs=F(Gq);
let A2A=(a,b,c)=>{let d=new ABs();ALb(d,a,b,c);return d;}
let ALb=(a,b,c,d)=>{let e,f;e=R;R=e+1|0;f=new Bh;f.mY=H(20);a.nf=(J(f,f.mW,e,10)).l();a.m5=c;a.ny=b;a.n5=d;a.nL=b;}
let AG4=(a,b,c,d)=>{let e;e=a.m5.hc(b,c,d);if(e>=0)return e;return a.ny.hc(b,c,d);}
let Yp=F(Gu);
let A0b=(a,b,c,d)=>{let e=new Yp();ARF(e,a,b,c,d);return e;}
let ARF=(a,b,c,d,e)=>{let f,g;f=R;R=f+1|0;g=new Bh;g.mY=H(20);a.nf=(J(g,g.mW,f,10)).l();a.m5=d;a.ny=c;a.n5=e;a.nL=c;a.r0=b;}
let ATw=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.r0;f=e.q1;g=e.qY;h=0;while(true){if(h>=f){n:{while(true){i=a.m5.hc(b,c,d);if(i>=0)break;if((b+a.nL.hp()|0)<=d.nz){i=a.nL.hq(b,c);b=b+i|0;h=h+1|0;}if(i<1)break n;if(h>g)break n;}return i;}return (-1);}if((b+a.nL.hp()|0)>d.nz){d.o$=1;return (-1);}j=a.nL.hq(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
let P3=F(B1);
let A20=()=>{let a=new P3();AKd(a);return a;}
let AKd=a=>{let b,c;b=R;R=b+1|0;c=new Bh;c.mY=H(20);a.nf=(J(c,c.mW,b,10)).l();}
let AOs=(a,b,c,d)=>{if(b&&!(d.rM&&b==d.oW))return (-1);return a.m5.hc(b,c,d);}
let ANf=(a,b)=>{return 0;}
let APQ=a=>{return B(204);}
function WJ(){B1.call(this);this.AM=0;}
let AUt=a=>{let b=new WJ();ANt(b,a);return b;}
let ANt=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.AM=b;}
let AHU=(a,b,c,d)=>{let e,f,g;if(b>=d.nz)e=32;else if(b>=0&&b<c.mX.length)e=c.mX.charCodeAt(b);else{c=new S;c.mZ=1;c.m0=1;D(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.mX.length)f=c.mX.charCodeAt(f);else{c=new S;c.mZ=1;c.m0=1;D(c);}}g=d.vE?0:d.oW;return (e!=32&&!PM(a,e,b,g,c)?0:1)^(f!=32&&!PM(a,f,b-1|0,g,c)?0:1)^a.AM?(-1):a.m5.hc(b,c,d);}
let AIe=(a,b)=>{return 0;}
let AWY=a=>{return B(205);}
let PM=(a,b,c,d,e)=>{let f;b:{a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}f=1;break b;}f=0;}if(!f&&b!=95){n:{e:{if(CG(b)==6)while(true){c=c+(-1)|0;if(c<d)break e;if(c<0)break n;if(c>=e.mX.length)break n;bf:{l:{f=e.mX.charCodeAt(c);switch(CG(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break l;default:break l;}b=1;break bf;}b=0;}if(b)return 0;if(CG(f)!=6)return 1;}}return 1;}e=new S;e.mZ=1;e.m0=1;D(e);}return 0;}
let VD=F(B1);
let AY$=()=>{let a=new VD();ATS(a);return a;}
let ATS=a=>{let b,c;b=R;R=b+1|0;c=new Bh;c.mY=H(20);a.nf=(J(c,c.mW,b,10)).l();}
let ANs=(a,b,c,d)=>{if(b!=d.s2)return (-1);return a.m5.hc(b,c,d);}
let AWW=(a,b)=>{return 0;}
let AHz=a=>{return B(206);}
function Tl(){B1.call(this);this.tU=0;}
let A2w=a=>{let b=new Tl();AC9(b,a);return b;}
let AC9=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.tU=b;}
let AR8=(a,b,c,d)=>{let e,f,g;e=!d.rM?c.mX.length:d.nz;if(b>=e){f=a.tU;d.nS.data[f]=0;return a.m5.hc(b,c,d);}k:{e=e-b|0;if(e==2){if(b>=0&&b<c.mX.length){if(c.mX.charCodeAt(b)!=13)break k;g=b+1|0;if(g>=0&&g<c.mX.length){if(c.mX.charCodeAt(g)!=10)break k;f=a.tU;d.nS.data[f]=0;return a.m5.hc(b,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}}r:{bf:{if(e==1){if(b>=0&&b<c.mX.length){f=c.mX.charCodeAt(b);if(f==10)break r;if(f==13)break r;if(f==133)break r;if((f|1)!=8233)break bf;else break r;}c=new S;c.mZ
=1;c.m0=1;D(c);}}return (-1);}e=a.tU;d.nS.data[e]=0;return a.m5.hc(b,c,d);}
let AJl=(a,b)=>{let c,d,e;c=a.tU;d=b.nS.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let APl=a=>{return B(207);}
let ADG=F(B1);
let A2N=()=>{let a=new ADG();ANh(a);return a;}
let ANh=a=>{let b,c;b=R;R=b+1|0;c=new Bh;c.mY=H(20);a.nf=(J(c,c.mW,b,10)).l();}
let AQX=(a,b,c,d)=>{if(b<(!d.vE?d.nz:c.mX.length))return (-1);d.o$=1;d.CR=1;return a.m5.hc(b,c,d);}
let AFn=(a,b)=>{return 0;}
let AL6=a=>{return B(208);}
function UX(){B1.call(this);this.zO=null;}
let A2S=a=>{let b=new UX();AR_(b,a);return b;}
let AR_=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.zO=b;}
let AI1=(a,b,c,d)=>{let e,f;b:{a:{d:{if(b!=d.nz){if(!b)break a;if(d.rM&&b==d.oW)break a;e=a.zO;f=b-1|0;if(f>=0&&f<c.mX.length){f=c.mX.charCodeAt(f);if(b<0)break b;if(b>=c.mX.length)break b;if(!e.hW(f,c.mX.charCodeAt(b)))break d;else break a;}c=new S;c.mZ=1;c.m0=1;D(c);}}return (-1);}return a.m5.hc(b,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}
let ALJ=(a,b)=>{return 0;}
let AHf=a=>{return B(209);}
let ADA=F(Ck);
let A3x=()=>{let a=new ADA();AQD(a);return a;}
let AQD=a=>{let b,c;b=R;R=b+1|0;c=new Bh;c.mY=H(20);a.nf=(J(c,c.mW,b,10)).l();}
let AWh=(a,b,c,d)=>{let e,f,g,h,i;e=d.nz;f=b+1|0;if(f>e){d.o$=1;return (-1);}if(b>=0&&b<c.mX.length){g=BJ(c.mX.charCodeAt(b)&64512,55296);h=g?0:1;o:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.mX.length){h=c.mX.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break o;else return a.m5.hc(i,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}}}return a.m5.hc(f,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AKi=a=>{return B(210);}
let AIi=(a,b)=>{a.m5=b;}
let AQB=a=>{return (-2147483602);}
let AIh=(a,b)=>{return 1;}
function VW(){Ck.call(this);this.xr=null;}
let A2b=a=>{let b=new VW();AJi(b,a);return b;}
let AJi=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.xr=b;}
let AQO=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.nz;f=b+1|0;if(f>e){d.o$=1;return (-1);}if(b>=0&&b<c.mX.length){g=c.mX.charCodeAt(b);h=BJ(g&64512,55296);i=h?0:1;o:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.mX.length){i=c.mX.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break o;else return a.xr.hU(((g&1023)<<10|i&1023)+65536|0)?(-1):a.m5.hc(j,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}}}return a.xr.hU(g)?(-1):a.m5.hc(f,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AJy=a=>{return B(211);}
let AS0=(a,b)=>{a.m5=b;}
let AFf=a=>{return (-2147483602);}
let AWB=(a,b)=>{return 1;}
function ADq(){B1.call(this);this.vz=0;}
let A0M=a=>{let b=new ADq();ALA(b,a);return b;}
let ALA=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.vz=b;}
let AN0=(a,b,c,d)=>{let e,f;e=!d.rM?c.mX.length:d.nz;if(b>=e){e=a.vz;d.nS.data[e]=0;return a.m5.hc(b,c,d);}n:{if((e-b|0)==1){if(b>=0&&b<c.mX.length){if(c.mX.charCodeAt(b)!=10)break n;else{f=a.vz;d.nS.data[f]=1;return a.m5.hc(b+1|0,c,d);}}c=new S;c.mZ=1;c.m0=1;D(c);}}return (-1);}
let ALx=(a,b)=>{let c,d,e;c=a.vz;d=b.nS.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AOJ=a=>{return B(207);}
function AAg(){B1.call(this);this.vL=0;}
let AZ7=a=>{let b=new AAg();AMr(b,a);return b;}
let AMr=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.vL=b;}
let AQV=(a,b,c,d)=>{let e;if((!d.rM?c.mX.length-b|0:d.nz-b|0)<=0){e=a.vL;d.nS.data[e]=0;return a.m5.hc(b,c,d);}if(b>=0&&b<c.mX.length){if(c.mX.charCodeAt(b)!=10)return (-1);e=a.vL;d.nS.data[e]=1;return a.m5.hc(b+1|0,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}
let ALk=(a,b)=>{let c,d,e;c=a.vL;d=b.nS.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AGz=a=>{return B(212);}
function T8(){B1.call(this);this.s6=0;}
let AXH=a=>{let b=new T8();AW4(b,a);return b;}
let AW4=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.s6=b;}
let AM7=(a,b,c,d)=>{let e,f,g;e=!d.rM?c.mX.length-b|0:d.nz-b|0;if(!e){e=a.s6;d.nS.data[e]=0;return a.m5.hc(b,c,d);}k:{if(e<2){if(b>=0&&b<c.mX.length){f=c.mX.charCodeAt(b);g=97;break k;}c=new S;c.mZ=1;c.m0=1;D(c);}if(b>=0&&b<c.mX.length){f=c.mX.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.mX.length){g=c.mX.charCodeAt(e);break k;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.s6;d.nS.data[e]=0;return a.m5.hc(b,c,d);case 13:if(g!=10){e=a.s6;d.nS.data[e]=0;return a.m5.hc(b,
c,d);}e=a.s6;d.nS.data[e]=0;return a.m5.hc(b,c,d);default:}return (-1);}
let AJp=(a,b)=>{let c,d,e;c=a.s6;d=b.nS.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let ALM=a=>{return B(213);}
function Ii(){let a=this;Ck.call(a);a.tp=0;a.r6=0;}
let A3M=(a,b)=>{let c=new Ii();AI5(c,a,b);return c;}
let AI5=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.tp=b;a.r6=c;}
let AGX=(a,b,c,d)=>{let e,f,g,h,i;e=IU(a,d);if(e!==null&&(b+e.mX.length|0)<=d.nz){f=0;k:{n:{c:{o:{while(true){if(f>=e.mX.length){g=a.r6;d.nS.data[g]=e.mX.length;return a.m5.hc(b+e.mX.length|0,c,d);}if(f<0)break c;if(f>=e.mX.length)break c;h=e.mX.charCodeAt(f);i=b+f|0;if(i<0)break o;if(i>=c.mX.length)break o;if(h!=c.mX.charCodeAt(i)){if(f<0)break k;if(f>=e.mX.length)break k;g=Hi(e.mX.charCodeAt(f));if(i<0)break n;if(i>=c.mX.length)break n;if(g!=c.mX.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new S;c.mZ=1;c.m0
=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}return (-1);}
let ASk=(a,b)=>{a.m5=b;}
let IU=(a,b)=>{let c,d,e,f,g;c=a.tp;d=b.n2.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.qt.mX.length?BR(b.qt,f,g):null;}
let AGF=a=>{let b,c,d,e,f,g,h;b=a.n0;c=new I;c.mY=H(16);G(c,c.mW,B(214));J(c,c.mW,b,10);d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);return d;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let ASE=(a,b)=>{let c,d,e;c=a.r6;d=b.nS.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let ADw=F(Ii);
let AXT=(a,b)=>{let c=new ADw();AU3(c,a,b);return c;}
let AU3=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.tp=b;a.r6=c;}
let AJz=(a,b,c,d)=>{let e,f,g;e=IU(a,d);if(e!==null&&(b+e.mX.length|0)<=d.nz){f=!JJ(c,e,b)?(-1):e.mX.length;if(f<0)return (-1);g=a.r6;d.nS.data[g]=f;return a.m5.hc(b+f|0,c,d);}return (-1);}
let AUP=(a,b,c,d)=>{let e,f,g;e=IU(a,d);f=d.oW;if(e!==null&&(b+e.mX.length|0)<=f){while(true){if(b>f)return (-1);g=K5(c,e,b);if(g<0)return (-1);if(a.m5.hc(g+e.mX.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);}
let AGA=(a,b,c,d,e)=>{let f,g;f=IU(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Pn(d,f,c);if(g<0)break a;if(g<b)break a;if(a.m5.hc(g+f.mX.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
let APG=(a,b)=>{return 1;}
let AU$=a=>{let b,c,d,e,f,g,h;b=a.n0;c=new I;c.mY=H(16);G(c,c.mW,B(215));J(c,c.mW,b,10);d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);return d;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
function X_(){Ii.call(this);this.BB=0;}
let AZ8=(a,b)=>{let c=new X_();ALw(c,a,b);return c;}
let ALw=(a,b,c)=>{let d,e;d=R;R=d+1|0;e=new Bh;e.mY=H(20);a.nf=(J(e,e.mW,d,10)).l();a.tp=b;a.r6=c;}
let AOV=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.tp;f=d.n2.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.qt.mX.length?BR(d.qt,h,i):null;if(j!==null&&(b+j.mX.length|0)<=d.nz){i=0;o:{e:{while(true){if(i>=j.mX.length){e=a.r6;d.nS.data[e]=j.mX.length;return a.m5.hc(b+j.mX.length|0,c,d);}if(i<0)break o;if(i>=j.mX.length)break o;e=j.mX.charCodeAt(i);if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}e=Cg(BY,e)&65535;if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value)
:null)));}g=Cg(BS,e)&65535;h=b+i|0;if(h<0)break e;if(h>=c.mX.length)break e;e=c.mX.charCodeAt(h);if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}e=Cg(BY,e)&65535;if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}if(g!=(Cg(BS,e)&65535))break;i=i+1|0;}return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}return (-1);}
let AIf=a=>{let b,c,d,e,f,g,h;b=a.BB;c=new I;c.mY=H(16);G(c,c.mW,B(216));J(c,c.mW,b,10);d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);return d;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let KS=F(Bh);
let QS=(a,b,c,d,e)=>{AAp(a,b,c,d,e);return a;}
let ALc=(a,b,c,d,e)=>{let f,g,h,i;Bb(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.mY.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AH4=(a,b,c,d)=>{let e,f,g,h,i;e=a.mW;Bb(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.mY.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let AIC=(a,b)=>{N$(a,b);}
let AT3=(a,b,c)=>{Bb(a,b,b+1|0);a.mY.data[b]=c;return a;}
let AF2=(a,b,c)=>{G(a,b,c);return a;}
function Y6(){let a=this;Cn.call(a);a.oA=null;a.wZ=null;a.xA=null;}
let A0h=a=>{let b=new Y6();AJ1(b,a);return b;}
let AJ1=(a,b)=>{let c,d,e;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;a.oA=U(b);c=b.mW;a.nH=c;a.wZ=AQA(c);a.xA=AQA(a.nH);c=0;b:{a:{while(c<(a.nH-1|0)){b=a.wZ;d=a.oA;if(c<0)break b;if(c>=d.mX.length)break b;P5(b,d.mX.charCodeAt(c),(a.nH-c|0)-1|0);b=a.xA;d=a.oA;e=(a.nH-c|0)-1|0;if(e<0)break a;if(e>=d.mX.length)break a;P5(b,d.mX.charCodeAt(e),(a.nH-c|0)-1|0);c=c+1|0;}return;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let AJ8=(a,b,c)=>{let d,e,f,g;d=0;b:{a:{d:{while(d<a.nH){e=d+b|0;if(e<0)break b;if(e>=c.mX.length)break b;f=c.mX.charCodeAt(e);g=a.oA;if(d<0)break a;if(d>=g.mX.length)break a;if(f!=g.mX.charCodeAt(d)){b=0;break d;}d=d+1|0;}b=1;}return !b?(-1):a.nH;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AHM=(a,b,c,d)=>{let e,f;e=d.nz;while(true){if(b>e)return (-1);f=ADJ(a,c,b,e);if(f<0)return (-1);if(a.m5.hc(f+a.nH|0,c,d)>=0)break;b=f+1|0;}return f;}
let ALE=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AC8(a,d,b,c);if(c<0)return (-1);if(a.m5.hc(c+a.nH|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
let AQ8=a=>{let b,c,d,e,f,g,h;b=a.oA;c=new I;c.mY=H(16);G(c,c.mW,B(217));d=c.mW;if(b===null)b=B(2);G(c,d,b);b=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){b.mX=O(e.data,0,g);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let AMD=(a,b)=>{let c,d,e;if(b instanceof E6){c=b.o6;b=a.oA;if(0<b.mX.length)return c!=b.mX.charCodeAt(0)?0:1;b=new S;b.mZ=1;b.m0=1;D(b);}if(b instanceof EQ){b=b;d=BR(a.oA,0,1);b=b.pK;if(0>=d.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}return (!b.hG(d.mX.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof Ee)){if(!(b instanceof Fm))return 1;g:{if(a.oA.mX.length>1){e=b.si;b=a.oA;if(0>=b.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}c=b.mX.charCodeAt(0);b=a.oA;if(1>=b.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}if(e==(((c&1023)<<
10|b.mX.charCodeAt(1)&1023)+65536|0)){c=1;break g;}}c=0;}return c;}b=b;d=a.oA;if(0>=d.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}v:{m:{if(!b.hG(d.mX.charCodeAt(0))){if(a.oA.mX.length<=1)break m;d=a.oA;if(0>=d.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}c=d.mX.charCodeAt(0);d=a.oA;if(1>=d.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}if(!b.hG(((c&1023)<<10|d.mX.charCodeAt(1)&1023)+65536|0))break m;}c=1;break v;}c=0;}return c;}
let ADJ=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.oA;f=a.nH-1|0;if(f>=0&&f<e.mX.length){g=e.mX.charCodeAt(f);d:{k:{n:{while(true){f=a.nH;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break n;if(f>=b.mX.length)break n;h=b.mX.charCodeAt(f);if(h==g){f=0;bf:{while(f<a.nH){i=f+c|0;if(i<0)break d;if(i>=b.mX.length)break d;j=b.mX.charCodeAt(i);e=a.oA;if(f<0)break k;if(f>=e.mX.length)break k;if(j!=e.mX.charCodeAt(f)){f=0;break bf;}f=f+1|0;}f=1;}if(f)break;}c=c+QQ(a.wZ,h)|0;}return c;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=
1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let AC8=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.oA;if(0>=e.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}f=e.mX.charCodeAt(0);g=(b.mX.length-d|0)-a.nH|0;if(g<=0)d=d+g|0;k:{n:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.mX.length)break c;h=b.mX.charCodeAt(d);if(h==f){g=0;l:{while(g<a.nH){i=g+d|0;if(i<0)break k;if(i>=b.mX.length)break k;j=b.mX.charCodeAt(i);e=a.oA;if(g<0)break n;if(g>=e.mX.length)break n;if(j!=e.mX.charCodeAt(g)){g=0;break l;}g=g+1|0;}g=1;}if(g)break;}d=d-QQ(a.xA,h)|0;}return d;}b=new S;b.mZ=1;b.m0
=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
function Nk(){Cn.call(this);this.t2=null;}
let AO8=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{while(true){if(d>=a.t2.mX.length)return a.t2.mX.length;e=a.t2;if(d<0)break b;if(d>=e.mX.length)break b;f=e.mX.charCodeAt(d);g=b+d|0;if(g<0)break a;if(g>=c.mX.length)break a;h=c.mX.charCodeAt(g);if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}h=Cg(BY,h)&65535;if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}if(f!=(Cg(BS,h)&65535))break;d=d+1|0;}return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0
=1;D(c);}
let AMQ=a=>{let b,c,d,e,f,g,h;b=a.t2;c=new I;c.mY=H(16);G(c,c.mW,B(218));d=c.mW;if(b===null)b=B(2);G(c,d,b);b=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){b.mX=O(e.data,0,g);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
function UO(){Cn.call(this);this.sD=null;}
let A34=a=>{let b=new UO();AMp(b,a);return b;}
let AMp=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;a.sD=U(b);a.nH=b.mW;}
let ATj=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{d:{k:{while(true){if(d>=a.sD.mX.length)return a.sD.mX.length;e=a.sD;if(d<0)break d;if(d>=e.mX.length)break d;f=e.mX.charCodeAt(d);g=b+d|0;if(g<0)break k;if(g>=c.mX.length)break k;if(f!=c.mX.charCodeAt(g)){e=a.sD;if(d<0)break b;if(d>=e.mX.length)break b;h=Hi(e.mX.charCodeAt(d));if(g<0)break a;if(g>=c.mX.length)break a;if(h!=c.mX.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=
1;c.m0=1;D(c);}
let AUE=a=>{let b,c,d,e,f,g,h;b=a.sD;c=new I;c.mY=H(16);G(c,c.mW,B(219));d=c.mW;if(b===null)b=B(2);G(c,d,b);b=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){b.mX=O(e.data,0,g);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let AE_=F();
let Ih=F();
let UD=null;let YK=null;let ARK=null;let ASS=()=>{ASS=X(Ih);AKs();}
let AD1=(a,b)=>{let c,d,e,f,g;c=0;while(true){ASS();d=ARK.data;if(c>=d.length){e=new Ku;e.mZ=1;e.m0=1;e.m1=B(43);e.C_=B(43);e.C0=b;D(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof M))g=0;else{f=f;g=b.mX!==f.mX?0:1;}if(g)break;c=c+1|0;}return d[1];}
let AKs=()=>{UD=A2H();YK=A0r();ARK=N(Lz(C),[N(C,[B(220),A3N()]),N(C,[B(221),AXu()]),N(C,[B(222),A2G()]),N(C,[B(223),A3d()]),N(C,[B(224),YK]),N(C,[B(225),A0R()]),N(C,[B(226),A0k()]),N(C,[B(227),AX0()]),N(C,[B(228),AXP()]),N(C,[B(229),AX9()]),N(C,[B(230),AZf()]),N(C,[B(231),AX3()]),N(C,[B(232),A1Q()]),N(C,[B(233),AXm()]),N(C,[B(234),A21()]),N(C,[B(235),AZb()]),N(C,[B(236),A0P()]),N(C,[B(237),AY8()]),N(C,[B(238),A0Q()]),N(C,[B(239),AYi()]),N(C,[B(240),A3v()]),N(C,[B(241),AYL()]),N(C,[B(242),A07()]),N(C,[B(243),
A2C()]),N(C,[B(244),A2x()]),N(C,[B(245),A3k()]),N(C,[B(246),AYg()]),N(C,[B(247),A15()]),N(C,[B(248),UD]),N(C,[B(249),A1p()]),N(C,[B(250),AX2()]),N(C,[B(251),UD]),N(C,[B(252),AXg()]),N(C,[B(253),YK]),N(C,[B(254),AZO()]),N(C,[B(255),Ba(0,127)]),N(C,[B(256),Ba(128,255)]),N(C,[B(257),Ba(256,383)]),N(C,[B(258),Ba(384,591)]),N(C,[B(259),Ba(592,687)]),N(C,[B(260),Ba(688,767)]),N(C,[B(261),Ba(768,879)]),N(C,[B(262),Ba(880,1023)]),N(C,[B(263),Ba(1024,1279)]),N(C,[B(264),Ba(1280,1327)]),N(C,[B(265),Ba(1328,1423)]),N(C,
[B(266),Ba(1424,1535)]),N(C,[B(267),Ba(1536,1791)]),N(C,[B(268),Ba(1792,1871)]),N(C,[B(269),Ba(1872,1919)]),N(C,[B(270),Ba(1920,1983)]),N(C,[B(271),Ba(2304,2431)]),N(C,[B(272),Ba(2432,2559)]),N(C,[B(273),Ba(2560,2687)]),N(C,[B(274),Ba(2688,2815)]),N(C,[B(275),Ba(2816,2943)]),N(C,[B(276),Ba(2944,3071)]),N(C,[B(277),Ba(3072,3199)]),N(C,[B(278),Ba(3200,3327)]),N(C,[B(279),Ba(3328,3455)]),N(C,[B(280),Ba(3456,3583)]),N(C,[B(281),Ba(3584,3711)]),N(C,[B(282),Ba(3712,3839)]),N(C,[B(283),Ba(3840,4095)]),N(C,[B(284),
Ba(4096,4255)]),N(C,[B(285),Ba(4256,4351)]),N(C,[B(286),Ba(4352,4607)]),N(C,[B(287),Ba(4608,4991)]),N(C,[B(288),Ba(4992,5023)]),N(C,[B(289),Ba(5024,5119)]),N(C,[B(290),Ba(5120,5759)]),N(C,[B(291),Ba(5760,5791)]),N(C,[B(292),Ba(5792,5887)]),N(C,[B(293),Ba(5888,5919)]),N(C,[B(294),Ba(5920,5951)]),N(C,[B(295),Ba(5952,5983)]),N(C,[B(296),Ba(5984,6015)]),N(C,[B(297),Ba(6016,6143)]),N(C,[B(298),Ba(6144,6319)]),N(C,[B(299),Ba(6400,6479)]),N(C,[B(300),Ba(6480,6527)]),N(C,[B(301),Ba(6528,6623)]),N(C,[B(302),Ba(6624,
6655)]),N(C,[B(303),Ba(6656,6687)]),N(C,[B(304),Ba(7424,7551)]),N(C,[B(305),Ba(7552,7615)]),N(C,[B(306),Ba(7616,7679)]),N(C,[B(307),Ba(7680,7935)]),N(C,[B(308),Ba(7936,8191)]),N(C,[B(309),Ba(8192,8303)]),N(C,[B(310),Ba(8304,8351)]),N(C,[B(311),Ba(8352,8399)]),N(C,[B(312),Ba(8400,8447)]),N(C,[B(313),Ba(8448,8527)]),N(C,[B(314),Ba(8528,8591)]),N(C,[B(315),Ba(8592,8703)]),N(C,[B(316),Ba(8704,8959)]),N(C,[B(317),Ba(8960,9215)]),N(C,[B(318),Ba(9216,9279)]),N(C,[B(319),Ba(9280,9311)]),N(C,[B(320),Ba(9312,9471)]),
N(C,[B(321),Ba(9472,9599)]),N(C,[B(322),Ba(9600,9631)]),N(C,[B(323),Ba(9632,9727)]),N(C,[B(324),Ba(9728,9983)]),N(C,[B(325),Ba(9984,10175)]),N(C,[B(326),Ba(10176,10223)]),N(C,[B(327),Ba(10224,10239)]),N(C,[B(328),Ba(10240,10495)]),N(C,[B(329),Ba(10496,10623)]),N(C,[B(330),Ba(10624,10751)]),N(C,[B(331),Ba(10752,11007)]),N(C,[B(332),Ba(11008,11263)]),N(C,[B(333),Ba(11264,11359)]),N(C,[B(334),Ba(11392,11519)]),N(C,[B(335),Ba(11520,11567)]),N(C,[B(336),Ba(11568,11647)]),N(C,[B(337),Ba(11648,11743)]),N(C,[B(338),
Ba(11776,11903)]),N(C,[B(339),Ba(11904,12031)]),N(C,[B(340),Ba(12032,12255)]),N(C,[B(341),Ba(12272,12287)]),N(C,[B(342),Ba(12288,12351)]),N(C,[B(343),Ba(12352,12447)]),N(C,[B(344),Ba(12448,12543)]),N(C,[B(345),Ba(12544,12591)]),N(C,[B(346),Ba(12592,12687)]),N(C,[B(347),Ba(12688,12703)]),N(C,[B(348),Ba(12704,12735)]),N(C,[B(349),Ba(12736,12783)]),N(C,[B(350),Ba(12784,12799)]),N(C,[B(351),Ba(12800,13055)]),N(C,[B(352),Ba(13056,13311)]),N(C,[B(353),Ba(13312,19893)]),N(C,[B(354),Ba(19904,19967)]),N(C,[B(355),Ba(19968,
40959)]),N(C,[B(356),Ba(40960,42127)]),N(C,[B(357),Ba(42128,42191)]),N(C,[B(358),Ba(42752,42783)]),N(C,[B(359),Ba(43008,43055)]),N(C,[B(360),Ba(44032,55203)]),N(C,[B(361),Ba(55296,56191)]),N(C,[B(362),Ba(56192,56319)]),N(C,[B(363),Ba(56320,57343)]),N(C,[B(364),Ba(57344,63743)]),N(C,[B(365),Ba(63744,64255)]),N(C,[B(366),Ba(64256,64335)]),N(C,[B(367),Ba(64336,65023)]),N(C,[B(368),Ba(65024,65039)]),N(C,[B(369),Ba(65040,65055)]),N(C,[B(370),Ba(65056,65071)]),N(C,[B(371),Ba(65072,65103)]),N(C,[B(372),Ba(65104,65135)]),
N(C,[B(373),Ba(65136,65279)]),N(C,[B(374),Ba(65280,65519)]),N(C,[B(29),Ba(0,1114111)]),N(C,[B(375),AX4()]),N(C,[B(376),Ca(0,1)]),N(C,[B(377),J6(62,1)]),N(C,[B(378),Ca(1,1)]),N(C,[B(379),Ca(2,1)]),N(C,[B(380),Ca(3,0)]),N(C,[B(381),Ca(4,0)]),N(C,[B(382),Ca(5,1)]),N(C,[B(383),J6(448,1)]),N(C,[B(384),Ca(6,1)]),N(C,[B(385),Ca(7,0)]),N(C,[B(386),Ca(8,1)]),N(C,[B(387),J6(3584,1)]),N(C,[B(388),Ca(9,1)]),N(C,[B(389),Ca(10,1)]),N(C,[B(390),Ca(11,1)]),N(C,[B(391),J6(28672,0)]),N(C,[B(392),Ca(12,0)]),N(C,[B(393),Ca(13,
0)]),N(C,[B(394),Ca(14,0)]),N(C,[B(395),A0f(983040,1,1)]),N(C,[B(396),Ca(15,0)]),N(C,[B(397),Ca(16,1)]),N(C,[B(398),Ca(18,1)]),N(C,[B(399),A0I(19,0,1)]),N(C,[B(400),J6(1643118592,1)]),N(C,[B(401),Ca(20,0)]),N(C,[B(402),Ca(21,0)]),N(C,[B(403),Ca(22,0)]),N(C,[B(404),Ca(23,0)]),N(C,[B(405),Ca(24,1)]),N(C,[B(406),J6(2113929216,1)]),N(C,[B(407),Ca(25,1)]),N(C,[B(408),Ca(26,0)]),N(C,[B(409),Ca(27,0)]),N(C,[B(410),Ca(28,1)]),N(C,[B(411),Ca(29,0)]),N(C,[B(412),Ca(30,0)])]);}
function Ni(){Cn.call(this);this.xn=0;}
let ATn=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.mX.length){e=c.mX.charCodeAt(b);if(d>=0&&d<c.mX.length){d=c.mX.charCodeAt(d);b=a.xn;d=((e&1023)<<10|d&1023)+65536|0;if(BY===null){if(BH===null)BH=En();BY=Cv(Cz((BH.value!==null?Be(BH.value):null)));}d=Cg(BY,d);if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}return b!=Cg(BS,d)?(-1):2;}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AWX=a=>{let b,c,d,e,f,g;b=new M;c=Fr(a.xn);d=c.data;P();b.mX=O(c.data,0,d.length);e=new I;e.mY=H(16);G(e,e.mW,B(199));G(e,e.mW,b);b=new M;c=e.mY;d=c.data;f=e.mW;g=d.length;if(f>=0&&f<=(g-0|0)){b.mX=O(c.data,0,f);return b;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
function Jt(){Ck.call(this);this.ra=0;}
let A1t=a=>{let b=new Jt();AIx(b,a);return b;}
let AIx=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.ra=b;}
let ARd=(a,b)=>{a.m5=b;}
let OP=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.nz){d.o$=1;return (-1);}if(b>=0&&b<c.mX.length){k:{f=c.mX.charCodeAt(b);if(b>d.oW){b=b-1|0;if(b>=0&&b<c.mX.length){if(!((c.mX.charCodeAt(b)&64512)!=55296?0:1))break k;return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}}if(a.ra!=f)return (-1);return a.m5.hc(e,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AMw=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof M)){e=d.nz;a:{while(true){if(b>e){b=(-1);break a;}if(OP(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.oW;g=d.nz;c:{while(true){if(b>=g)return (-1);h=Ek(c,a.ra,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break c;if(b>=c.mX.length)break c;if((c.mX.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.m5;b=h+1|0;if(i.hc(b,c,d)>=0)break;}return h;}c=new S;c.mZ=1;c.m0=1;D(c);}
let AKf=(a,b,c,d,e)=>{let f,g;if(!(d instanceof M)){a:{while(true){if(c<b){c=(-1);break a;}if(OP(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.oW;c:{o:{while(true){if(c<b)return (-1);g=FQ(d,a.ra,c);if(g<0)break o;if(g<b)break o;if(g>f){c=g-1|0;if(c<0)break c;if(c>=d.mX.length)break c;if((d.mX.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.m5.hc(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new S;d.mZ=1;d.m0=1;D(d);}
let AT_=a=>{let b,c,d,e,f,g,h;b=a.ra;c=new I;c.mY=H(16);d=c.mW;Bb(c,d,d+1|0);e=c.mY;f=e.data;f[d]=b;g=new M;d=c.mW;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.mX=O(e.data,0,d);return g;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let AGt=(a,b)=>{if(b instanceof E6)return 0;if(b instanceof EQ)return 0;if(b instanceof Ee)return 0;if(b instanceof Fm)return 0;if(b instanceof L8)return 0;if(!(b instanceof Jt))return 1;return b.ra!=a.ra?0:1;}
let AUl=(a,b)=>{return 1;}
function L8(){Ck.call(this);this.rw=0;}
let AM$=a=>{let b=new L8();AQP(b,a);return b;}
let AQP=(a,b)=>{let c,d;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.rw=b;}
let AIA=(a,b)=>{a.m5=b;}
let Ns=(a,b,c,d)=>{let e,f,g;e=d.nz;f=b+1|0;e=BJ(f,e);if(e>0){d.o$=1;return (-1);}if(b>=0&&b<c.mX.length){k:{g=c.mX.charCodeAt(b);if(e<0){if(f>=0&&f<c.mX.length){if(!((c.mX.charCodeAt(f)&64512)!=56320?0:1))break k;return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}}if(a.rw!=g)return (-1);return a.m5.hc(f,c,d);}c=new S;c.mZ=1;c.m0=1;D(c);}
let ARI=(a,b,c,d)=>{let e,f;if(!(c instanceof M)){e=d.nz;a:{while(true){if(b>e){b=(-1);break a;}if(Ns(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.nz;c:{while(true){if(b>=e)return (-1);f=Ek(c,a.rw,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break c;if(b>=c.mX.length)break c;if((c.mX.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.m5.hc(b,c,d)>=0)break;}return f;}c=new S;c.mZ=1;c.m0=1;D(c);}
let ATh=(a,b,c,d,e)=>{let f,g;if(!(d instanceof M)){a:{while(true){if(c<b){c=(-1);break a;}if(Ns(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.nz;c:{o:{while(true){if(c<b)return (-1);g=FQ(d,a.rw,c);if(g<0)break o;if(g<b)break o;c=g+1|0;if(c<f){if(c<0)break c;if(c>=d.mX.length)break c;if((d.mX.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.m5.hc(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new S;d.mZ=1;d.m0=1;D(d);}
let AWf=a=>{let b,c,d,e,f,g,h;b=a.rw;c=new I;c.mY=H(16);d=c.mW;Bb(c,d,d+1|0);e=c.mY;f=e.data;f[d]=b;g=new M;d=c.mW;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.mX=O(e.data,0,d);return g;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let AJ$=(a,b)=>{if(b instanceof E6)return 0;if(b instanceof EQ)return 0;if(b instanceof Ee)return 0;if(b instanceof Fm)return 0;if(b instanceof Jt)return 0;if(!(b instanceof L8))return 1;return b.rw!=a.rw?0:1;}
let ARY=(a,b)=>{return 1;}
function Fm(){let a=this;Cn.call(a);a.r9=0;a.rB=0;a.si=0;}
let AX7=a=>{let b=new Fm();AWz(b,a);return b;}
let AWz=(a,b)=>{let c,d,e;c=R;R=c+1|0;d=new Bh;d.mY=H(20);a.nf=(J(d,d.mW,c,10)).l();a.nH=1;a.nH=2;a.si=b;e=(Fr(b)).data;a.r9=e[0];a.rB=e[1];}
let ASF=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.mX.length){e=c.mX.charCodeAt(b);if(d>=0&&d<c.mX.length){d=c.mX.charCodeAt(d);return a.r9==e&&a.rB==d?2:(-1);}c=new S;c.mZ=1;c.m0=1;D(c);}c=new S;c.mZ=1;c.m0=1;D(c);}
let AQi=(a,b,c,d)=>{let e,f,g,h;if(c instanceof M){e=d.nz;a:{while(b<e){b=Ek(c,a.r9,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.mX.length)break a;f=c.mX.charCodeAt(b);if(a.rB==f&&a.m5.hc(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new S;c.mZ=1;c.m0=1;D(c);}g=d.nz;e:{r:{bf:{while(true){if(b>g){b=(-1);break bf;}if((b+a.nH|0)>d.nz){d.o$=1;h=(-1);}else{h=b+1|0;if(b<0)break e;if(b>=c.mX.length)break e;e=c.mX.charCodeAt(b);if(h<0)break r;if(h>=c.mX.length)break r;f=c.mX.charCodeAt(h);h
=a.r9==e&&a.rB==f?2:(-1);h=h<0?(-1):a.m5.hc(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new S;Z(c);D(c);}c=new S;Z(c);D(c);}
let AIy=(a,b,c,d,e)=>{let f,g,h;if(d instanceof M){a:{d:{while(true){if(c<b)return (-1);c=FQ(d,a.rB,c)+(-1)|0;if(c<0)break d;if(c<b)break d;f=a.r9;if(c<0)break a;if(c>=d.mX.length)break a;if(f==d.mX.charCodeAt(c)&&a.m5.hc(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new S;d.mZ=1;d.m0=1;D(d);}e:{r:{bf:{while(true){if(c<b){c=(-1);break bf;}if((c+a.nH|0)>e.nz){e.o$=1;f=(-1);}else{g=c+1|0;if(c<0)break e;if(c>=d.mX.length)break e;h=d.mX.charCodeAt(c);if(g<0)break r;if(g>=d.mX.length)break r;g=d.mX.charCodeAt(g);f
=a.r9==h&&a.rB==g?2:(-1);f=f<0?(-1):a.m5.hc(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new S;Z(d);D(d);}d=new S;Z(d);D(d);}
let AVc=a=>{let b,c,d,e,f,g,h;b=a.r9;c=a.rB;d=new I;d.mY=H(16);e=d.mW;Bb(d,e,e+1|0);d.mY.data[e]=b;b=d.mW;Bb(d,b,b+1|0);f=d.mY;g=f.data;g[b]=c;h=new M;c=d.mW;P();e=g.length;if(c>=0&&c<=(e-0|0)){h.mX=O(f.data,0,c);return h;}d=new L;d.mZ=1;d.m0=1;Bd(d);D(d);}
let ASr=(a,b)=>{if(b instanceof Fm)return b.si!=a.si?0:1;if(b instanceof Ee)return b.hG(a.si);if(b instanceof E6)return 0;if(!(b instanceof EQ))return 1;return 0;}
let Si=F(F9);
let AIN=(a,b)=>{return b!=10?0:1;}
let ASx=(a,b,c)=>{return b!=10?0:1;}
let Sj=F(F9);
let ATy=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
let AVN=(a,b,c)=>{b:{a:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break a;if(c==10)break a;}b=1;break b;}b=0;}return b;}
function ABY(){let a=this;C.call(a);a.yh=null;a.wp=null;a.tx=0;a.Ba=0;}
let AQA=a=>{let b=new ABY();ANq(b,a);return b;}
let ANq=(a,b)=>{let c,d;while(true){c=a.tx;if(b<c)break;a.tx=c<<1|1;}d=c<<1|1;a.tx=d;d=d+1|0;a.yh=Q(d);a.wp=Q(d);a.Ba=b;}
let P5=(a,b,c)=>{let d,e,f,g;d=0;e=a.tx;f=b&e;while(true){g=a.yh.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.wp.data[f]=c;}
let QQ=(a,b)=>{let c,d,e,f;c=a.tx;d=b&c;e=0;while(true){f=a.yh.data[d];if(!f)break;if(f==b)return a.wp.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.Ba;}
let Wv=F();
let VM=F();
let AV0=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new Mr;d=H(b.mX.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.wM=d;f=Hf(c);d=Q(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=Hf(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=Hf(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.mX.length)break;e[f]=b.mX.charCodeAt(f);f=f+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}
let Cz=b=>{let c,d,e,f,g,h,i,j,k,l;c=new Mr;d=H(b.mX.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.wM=d;f=Hf(c);d=Q(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+Hf(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=Hf(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.mX.length)break;e[f]=b.mX.charCodeAt(f);f=f+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}
let Cv=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=Q(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bc;l.mZ=1;l.m0=1;D(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new Sy;l.zM=b;l.zW=c;return l;}
let LF=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
let AW8=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=Bf(IG,16384);d=c.data;e=Bz(16384).data;f=0;g=0;h=0;i=0;a:{d:{k:{while(true){if(i>=b.mX.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new B6;b.nn=j;k=b;j.classObject=k;}}b=DR(b);if(b===null){b=new CO;b.mZ=1;b.m0=1;D(b);}if(b===Br(B4)){b=new Bc;b.mZ=1;b.m0=1;D(b);}if(g<0){b=new Dp;b.mZ=1;b.m0=1;D(b);}k=D6(b.nn,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break k;if(i>=b.mX.length)break k;l
=LF(b.mX.charCodeAt(i));if(l==64){i=i+1|0;if(i<0)break d;if(i>=b.mX.length)break d;l=LF(b.mX.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.mX.length)break a;m=m|Cj(n,LF(b.mX.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.mX.length)break;m=LF(b.mX.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new IG;l=h+f|0;q=Bz(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.w6=h;j.xx=l;j.w$=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f
=0;}else{n=f+m|0;o=e.length;if(n<o)s=g;else{s=g+1|0;j=new IG;t=h+f|0;q=Bz(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.w6=h;j.xx=t;j.w$=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let Dp=F(BC);
let UU=F();
function Mr(){let a=this;C.call(a);a.wM=null;a.zA=0;}
let XX=F();
let Hf=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.wM.data;f=b.zA;b.zA=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Cj(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
let LR=F(Bs);
let A2H=()=>{let a=new LR();AM3(a);return a;}
let AM3=a=>{return;}
let AMY=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return CX(BI(b,9,13),32);}
let K3=F(Bs);
let A0r=()=>{let a=new K3();AUc(a);return a;}
let AUc=a=>{return;}
let AOY=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(b,48,57);}
let ABT=F(Bs);
let A3N=()=>{let a=new ABT();AL8(a);return a;}
let AL8=a=>{return;}
let AS2=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(b,97,122);}
let ACB=F(Bs);
let AXu=()=>{let a=new ACB();ANw(a);return a;}
let ANw=a=>{return;}
let AUm=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(b,65,90);}
let ACD=F(Bs);
let A2G=()=>{let a=new ACD();AHN(a);return a;}
let AHN=a=>{return;}
let AKK=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(b,0,127);}
let LN=F(Bs);
let A3d=()=>{let a=new LN();AJC(a);return a;}
let AJC=a=>{return;}
let AJf=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(BI(b,97,122),65,90);}
let Mh=F(LN);
let A0R=()=>{let a=new Mh();ANd(a);return a;}
let ANd=a=>{return;}
let ALs=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(BI(BI(b,97,122),65,90),48,57);}
let AE4=F(Bs);
let A0k=()=>{let a=new AE4();APW(a);return a;}
let APW=a=>{return;}
let AMv=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(BI(BI(b,33,64),91,96),123,126);}
let Nd=F(Mh);
let AX0=()=>{let a=new Nd();ASd(a);return a;}
let ASd=a=>{return;}
let AFt=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(BI(BI(BI(BI(BI(b,97,122),65,90),48,57),33,64),91,96),123,126);}
let YY=F(Nd);
let AXP=()=>{let a=new YY();ATU(a);return a;}
let ATU=a=>{return;}
let APB=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return CX(BI(BI(BI(BI(BI(BI(b,97,122),65,90),48,57),33,64),91,96),123,126),32);}
let ZH=F(Bs);
let AX9=()=>{let a=new ZH();ATk(a);return a;}
let ATk=a=>{return;}
let AJ0=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return CX(CX(b,32),9);}
let WA=F(Bs);
let AZf=()=>{let a=new WA();AVA(a);return a;}
let AVA=a=>{return;}
let APx=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return CX(BI(b,0,31),127);}
let Wg=F(Bs);
let AX3=()=>{let a=new Wg();AIc(a);return a;}
let AIc=a=>{return;}
let AVS=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(BI(BI(b,48,57),97,102),65,70);}
let ACH=F(Bs);
let A1Q=()=>{let a=new ACH();AHu(a);return a;}
let AHu=a=>{return;}
let AQw=a=>{let b,c;b=new Q1;b.Cq=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let AFb=F(Bs);
let AXm=()=>{let a=new AFb();ASu(a);return a;}
let ASu=a=>{return;}
let AFE=a=>{let b,c;b=new Nr;b.Cw=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let ABZ=F(Bs);
let A21=()=>{let a=new ABZ();AHS(a);return a;}
let AHS=a=>{return;}
let ANa=a=>{let b,c;b=new Qr;b.Ca=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;return b;}
let ABD=F(Bs);
let AZb=()=>{let a=new ABD();APz(a);return a;}
let APz=a=>{return;}
let ASI=a=>{let b,c;b=new Qq;b.B4=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;return b;}
let AC_=F(Bs);
let A0P=()=>{let a=new AC_();AJw(a);return a;}
let AJw=a=>{return;}
let AJX=a=>{let b,c;b=new Tb;b.CU=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;I$(c,0,2048);b.nP=1;return b;}
let Vg=F(Bs);
let AY8=()=>{let a=new Vg();AIH(a);return a;}
let AIH=a=>{return;}
let AKl=a=>{let b,c;b=new OM;b.CD=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let Uv=F(Bs);
let A0Q=()=>{let a=new Uv();AO3(a);return a;}
let AO3=a=>{return;}
let AVG=a=>{let b,c;b=new Ob;b.Da=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let AB$=F(Bs);
let AYi=()=>{let a=new AB$();APX(a);return a;}
let APX=a=>{return;}
let AFq=a=>{let b,c;b=new PR;b.Cs=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;return b;}
let ACq=F(Bs);
let A3v=()=>{let a=new ACq();AMP(a);return a;}
let AMP=a=>{return;}
let AN7=a=>{let b,c;b=new Nn;b.Bj=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let W3=F(Bs);
let AYL=()=>{let a=new W3();AGG(a);return a;}
let AGG=a=>{return;}
let AKt=a=>{let b,c;b=new Nq;b.CF=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let ZM=F(Bs);
let A07=()=>{let a=new ZM();AIW(a);return a;}
let AIW=a=>{return;}
let ALN=a=>{let b,c;b=new N8;b.CT=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let AEp=F(Bs);
let A2C=()=>{let a=new AEp();AOk(a);return a;}
let AOk=a=>{return;}
let AOb=a=>{let b,c;b=new O5;b.C2=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let ACm=F(Bs);
let A2x=()=>{let a=new ACm();AQm(a);return a;}
let AQm=a=>{return;}
let AUK=a=>{let b,c;b=new O$;b.Cc=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;return b;}
let X3=F(Bs);
let A3k=()=>{let a=new X3();AIK(a);return a;}
let AIK=a=>{return;}
let AR6=a=>{let b,c;b=new Rt;b.CI=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;return b;}
let W2=F(Bs);
let AYg=()=>{let a=new W2();ASL(a);return a;}
let ASL=a=>{return;}
let AQk=a=>{let b,c;b=new QL;b.Bm=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let AE$=F(Bs);
let A15=()=>{let a=new AE$();AML(a);return a;}
let AML=a=>{return;}
let ASW=a=>{let b,c;b=new Nz;b.Dk=a;Bt();c=new Bq;c.nc=Q(64);b.ng=c;b.nP=1;return b;}
let KF=F(Bs);
let A1p=()=>{let a=new KF();AKB(a);return a;}
let AKB=a=>{return;}
let AOx=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return CX(BI(BI(BI(b,97,122),65,90),48,57),95);}
let ADl=F(KF);
let AX2=()=>{let a=new ADl();AMU(a);return a;}
let AMU=a=>{return;}
let AP0=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;b=Ff(CX(BI(BI(BI(b,97,122),65,90),48,57),95),1);b.nP=1;return b;}
let Y$=F(LR);
let AXg=()=>{let a=new Y$();AVf(a);return a;}
let AVf=a=>{return;}
let AHI=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;b=Ff(CX(BI(b,9,13),32),1);b.nP=1;return b;}
let WW=F(K3);
let AZO=()=>{let a=new WW();ANP(a);return a;}
let ANP=a=>{return;}
let AMi=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;b=Ff(BI(b,48,57),1);b.nP=1;return b;}
function Wn(){let a=this;Bs.call(a);a.zx=0;a.zK=0;}
let Ba=(a,b)=>{let c=new Wn();AVD(c,a,b);return c;}
let AVD=(a,b,c)=>{a.zx=b;a.zK=c;}
let AOB=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(b,a.zx,a.zK);}
let WS=F(Bs);
let AX4=()=>{let a=new WS();AV3(a);return a;}
let AV3=a=>{return;}
let AVt=a=>{let b,c;b=new Cx;Bt();c=new Bq;c.nc=Q(64);b.ng=c;c=new Bq;c.nc=Q(2);b.nj=c;return BI(BI(b,65279,65279),65520,65533);}
function Yz(){let a=this;Bs.call(a);a.xY=0;a.wi=0;a.y3=0;}
let Ca=(a,b)=>{let c=new Yz();AJo(c,a,b);return c;}
let A0I=(a,b,c)=>{let d=new Yz();AVF(d,a,b,c);return d;}
let AJo=(a,b,c)=>{a.wi=c;a.xY=b;}
let AVF=(a,b,c,d)=>{a.y3=d;a.wi=c;a.xY=b;}
let ALf=a=>{let b,c,d;b=new Kb;c=a.xY;Bt();d=new Bq;d.nc=Q(64);b.ng=d;b.vN=c;if(a.y3)I$(d,0,2048);b.nP=a.wi;return b;}
function YZ(){let a=this;Bs.call(a);a.xW=0;a.wr=0;a.yD=0;}
let J6=(a,b)=>{let c=new YZ();AKu(c,a,b);return c;}
let A0f=(a,b,c)=>{let d=new YZ();AFs(d,a,b,c);return d;}
let AKu=(a,b,c)=>{a.wr=c;a.xW=b;}
let AFs=(a,b,c,d)=>{a.yD=d;a.wr=c;a.xW=b;}
let AFr=a=>{let b,c,d;b=new Ql;c=a.xW;Bt();d=new Bq;d.nc=Q(64);b.ng=d;b.vN=c;if(a.yD)I$(d,0,2048);b.nP=a.wr;return b;}
function Sy(){let a=this;C.call(a);a.zM=null;a.zW=null;}
function IG(){let a=this;C.call(a);a.w6=0;a.xx=0;a.w$=null;}
let Vk=F();
let Ef=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=b.length;if(d<=e){while(d<e){f=d+1|0;b[d]=c;d=f;}return;}g=new Bc;g.mZ=1;g.m0=1;D(g);}
let ARi=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bc;f.mZ=1;f.m0=1;D(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;}
let ASC=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bc;f.mZ=1;f.m0=1;D(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=BJ(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;}
let ACM=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;k:{while(true){if(e>=d){e=(-1);break k;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
let ACw=F();
function PE(){let a=this;DH.call(a);a.yY=null;a.yV=0;a.th=null;}
let ATZ=(a,b)=>{return;}
let AKz=(a,b)=>{let c,d,e,f,g,h,i,j;if(BA===null){c=new CD;c.oq=Dd;b=new I;b.mY=H(16);c.nF=b;c.oo=H(32);c.ow=0;CC();c.ot=CK;BA=c;}b=BA;c=a.yY;d=new I;d.mY=H(16);G(d,d.mW,B(413));e=d.mW;if(c===null)c=B(2);G(d,e,c);f=new M;g=d.mY;h=g.data;i=d.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);c=b.nF;G(c,c.mW,f);i=c.mW;Bb(c,i,i+1|0);c.mY.data[i]=10;CM(b);return;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let U0=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(IF(GA(B(109),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){bg:{b=a.th;b.xo=b.u8.m7;if(a.yV){e=0;while(true){b=a.th;c=b.u8;f=BJ(e,c.m7);if(f>=0)break bg;if(f>=0){g=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,e,10);G(b,b.mW,B(36));e=c.m7;J(b,b.mW,e,10);c=new M;d=b.mY;h=d.data;f=b.mW;P();i=h.length;if(f>=0&&f<=(i-0|0)){c.mX=O(d.data,0,f);g.mZ=1;g.m0=1;g.m1=c;D(g);}b=new L;Z(b);D(b);}Yi(b,c.ne.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(IF(GA(B(107),0),j,0)).data;if
(h.length!=4)break;k=h[0];l=Zm(h[1]);b=h[2];if(b===null){b=new B_;b.mZ=1;b.m0=1;b.m1=B(76);D(b);}m=ADk(b,0,b.mX.length,10);n=h[3];Fl();o=H0;if(k===B(414))i=1;else if(!(B(414) instanceof M))i=0;else{b=B(414);i=k.mX!==b.mX?0:1;}if(i)o=HN;if(k===B(415))i=1;else if(!(B(415) instanceof M))i=0;else{b=B(415);i=k.mX!==b.mX?0:1;}if(i)o=Hh;if(k===B(416))i=1;else if(!(B(416) instanceof M))i=0;else{b=B(416);i=k.mX!==b.mX?0:1;}if(i)o=G3;if(k===B(253))i=1;else if(!(B(253) instanceof M))i=0;else{b=B(253);i=k.mX!==b.mX?0:1;}if
(i)o=Tm;if(o===G3&&!Jr.Az)m=Bi;g=new QO;g.xd=l;g.y8=o;g.AR=m;g.y0=n;BE(a.th.zk,l,l);CH(a.th.u8,g);f=f+1|0;}b=new W;b.mZ=1;b.m0=1;b.m1=B(417);D(b);}
let AQa=(a,b,c)=>{return U0(a,b,c);}
let B2=F(By);
let AYx=null;let A1r=null;let AYT=null;let AYS=null;let AYz=null;let AYn=null;let AYb=null;let AYN=null;let AX6=null;let A0n=null;let AIT=()=>{AIT=X(B2);AGJ();}
let AGJ=()=>{let b,c,d,e,f,g,h,i,j;b=new SN;AIT();b.m9=B(418);b.m6=0;AYx=b;c=new SO;c.m9=B(419);c.m6=1;A1r=c;d=new SS;d.m9=B(420);d.m6=2;AYT=d;e=new ST;e.m9=B(421);e.m6=3;AYS=e;f=new SQ;f.m9=B(422);f.m6=4;AYz=f;g=new SR;g.m9=B(423);g.m6=5;AYn=g;h=new SK;h.m9=B(424);h.m6=6;AYb=h;i=new SL;i.m9=B(425);i.m6=7;AYN=i;j=new SJ;j.m9=B(426);j.m6=8;AX6=j;A0n=N(B2,[b,c,d,e,f,g,h,i,j]);}
function Fz(){let a=this;HP.call(a);a.q7=0;a.pm=null;}
let AEM=F(0);
let AIa=b=>{let c,d;if(b===B(427))c=1;else if(!(B(427) instanceof M))c=0;else{d=B(427);c=b.mX!==d.mX?0:1;}c:{if(!c){if(b===B(428))c=1;else if(!(B(428) instanceof M))c=0;else{d=B(428);c=b.mX!==d.mX?0:1;}if(!c){if(b===B(429))c=1;else if(!(B(429) instanceof M))c=0;else{d=B(429);c=b.mX!==d.mX?0:1;}if(!c){if(b===B(430))c=1;else if(!(B(430) instanceof M))c=0;else{d=B(430);c=b.mX!==d.mX?0:1;}if(!c){if(b===B(431))c=1;else if(!(B(431) instanceof M))c=0;else{d=B(431);c=b.mX!==d.mX?0:1;}if(!c){c=0;break c;}}}}}c=1;}return c;}
let AMZ=b=>{let c,d;if(b===B(432))c=1;else if(!(B(432) instanceof M))c=0;else{d=B(432);c=b.mX!==d.mX?0:1;}c:{e:{if(c)break e;if(b===B(433))c=1;else if(!(B(433) instanceof M))c=0;else{d=B(433);c=b.mX!==d.mX?0:1;}if(c)break e;if(b===B(434))c=1;else if(!(B(434) instanceof M))c=0;else{d=B(434);c=b.mX!==d.mX?0:1;}if(c)break e;if(b===B(435))c=1;else if(!(B(435) instanceof M))c=0;else{d=B(435);c=b.mX!==d.mX?0:1;}if(c)break e;if(b===B(436))c=1;else if(!(B(436) instanceof M))c=0;else{d=B(436);c=b.mX!==d.mX?0:1;}if(c)break e;if
(b===B(437))c=1;else if(!(B(437) instanceof M))c=0;else{d=B(437);c=b.mX!==d.mX?0:1;}if(c)break e;if(b===B(438))c=1;else if(!(B(438) instanceof M))c=0;else{d=B(438);c=b.mX!==d.mX?0:1;}if(c)break e;if(b===B(439))c=1;else if(!(B(439) instanceof M))c=0;else{d=B(439);c=b.mX!==d.mX?0:1;}if(c)break e;if(b===B(440))c=1;else if(!(B(440) instanceof M))c=0;else{d=B(440);c=b.mX!==d.mX?0:1;}if(!c){c=0;break c;}}c=1;}return c;}
let RX=F(0);
let WP=F();
let AVz=(a,b,c)=>{a.h_(Be(b),DD(c,"handleEvent"));}
let AQE=(a,b)=>{return !!a.ia(b);}
let AIB=(a,b,c)=>{a.dO(Be(b),DD(c,"handleEvent"));}
let ANJ=(a,b,c,d)=>{a.ib(Be(b),DD(c,"handleEvent"),d?1:0);}
let ATG=(a,b,c,d)=>{a.ic(Be(b),DD(c,"handleEvent"),d?1:0);}
function RB(){let a=this;C.call(a);a.w4=null;a.yn=null;a.u0=null;a.ys=0;a.vU=null;}
let AA3=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.w4;Fl();if(e!==Hh&&e!==G3){if(e===HN){b=window.document.createElement("img");d=BP(Be(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new IE;d.pl=c;d.xF=e;d.xO=b;}else if(e===H0)d=Be(c.result);}else{e=c.result;b=new Int8Array(e);d=new IE;d.pl=b;d.xF=e;}if(d!==null){IC(a.vU.y2,a.w4,a.yn,d);CH(a.u0,a.yn);if(a.u0.m7==a.ys){b=a.vU.yK;d=new NB;d.xt=a;CH(b.ul,d);}}}
let APk=(a,b)=>{AA3(a,b);}
function Dy(){By.call(this);this.uf=null;}
let HN=null;let G3=null;let H0=null;let Hh=null;let Tm=null;let AEx=null;let Fl=()=>{Fl=X(Dy);AQW();}
let AQW=()=>{let b,c,d,e,f;b=new Dy;Fl();b.m9=B(441);b.m6=0;b.uf=B(414);HN=b;c=new Dy;c.m9=B(442);c.m6=1;c.uf=B(416);G3=c;d=new Dy;d.m9=B(443);d.m6=2;d.uf=B(444);H0=d;e=new Dy;e.m9=B(445);e.m6=3;e.uf=B(415);Hh=e;f=new Dy;f.m9=B(446);f.m6=4;f.uf=B(253);Tm=f;AEx=N(Dy,[b,c,d,e,f]);}
let Lw=F();
let WQ=null;let AH3=null;let ADa=b=>{let c,d,e,f,g,h,i,j,k,l;c=new I;c.mY=H(16);d=ACr();e=0;f=AH3.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.mW;if(i>0){Bb(c,i,i+1|0);c.mY.data[i]=32;}j=d.data[e];G(c,c.mW,j);}e=e+1|0;h=h+1|0;}j=new M;d=c.mY;k=d.data;e=c.mW;P();l=k.length;if(e>=0&&e<=(l-0|0)){j.mX=O(d.data,0,e);return j;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let ACr=()=>{if(WQ===null)WQ=N(M,[B(447),B(448),B(449),B(450),B(451),B(452),B(453),B(454),B(455),B(456),B(457),B(458)]);return WQ;}
let UJ=()=>{AH3=D_([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
let Mg=F();
let Qd=F(0);
function HS(){let a=this;Mg.call(a);a.pV=null;a.B$=null;a.t_=0;a.vr=0;a.q5=null;a.x0=null;}
let AHo=a=>{let b,c,d,e,f,g,h;b=new I;b.mY=H(16);c=ADa(Pl(a.t_,a.vr));G(b,b.mW,c);d=b.mW;if(d>0){Bb(b,d,d+1|0);b.mY.data[d]=32;}c=a.pV;if(c.nB===null)c.nB=Be(c.nn.$meta.name);c=c.nB;G(b,b.mW,c);d=b.mW;Bb(b,d,d+1|0);b.mY.data[d]=40;e=a.q5.s();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.mW;Bb(b,h,h+1|0);b.mY.data[h]=44;}c=g[f];if(c.nB===null)c.nB=Be(c.nn.$meta.name);c=c.nB;G(b,b.mW,c);f=f+1|0;}d=b.mW;Bb(b,d,d+1|0);g=b.mY;e=g.data;e[d]=41;c=new M;d=b.mW;P();h=e.length;if(d>=0&&d<=(h-0|0)){c.mX=O(g.data,
0,d);return c;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let ACQ=(a,b)=>{let c,d,e,f,g;if(a.t_&1){c=new L7;c.mZ=1;c.m0=1;D(c);}if(a.x0===null){c=new Ko;c.mZ=1;c.m0=1;D(c);}d=b.data;e=d.length;if(e!=a.q5.data.length){c=new Bc;c.mZ=1;c.m0=1;D(c);}f=0;while(f<e){if(!(a.q5.data[f].nn.$meta.primitive?1:0)&&d[f]!==null){c=a.q5.data[f];g=d[f];c=c.nn;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&Rp(g.constructor,c)?1:0)){c=new Bc;c.mZ=1;c.m0=1;D(c);}}if((a.q5.data[f].nn.$meta.primitive?1:0)&&d[f]===null){c=new Bc;c.mZ=1;c.m0=1;D(c);}f=f+1|0;}c=b.data;g=
new(a.pV.nn);a.x0.call(g,c);return g;}
let S=F(L);
function S1(){let a=this;Bo.call(a);a.yM=null;a.CW=null;}
let AKP=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.oS^Cw(a.yM,c):0;}
function S0(){let a=this;Bo.call(a);a.AB=null;a.AS=null;a.CK=null;}
let AF$=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.oS^Cw(a.AB,c):0;return a.AS.hG(b)&&!d?1:0;}
function Om(){let a=this;Bo.call(a);a.ve=null;a.Bq=null;}
let AOn=(a,b)=>{return a.nw^Cw(a.ve,b);}
let ALY=a=>{let b,c,d,e,f,g,h,i,j,k;b=new I;b.mY=H(16);c=Iv(a.ve,0);while(c>=0){d=(Fr(c)).data;e=0;f=d.length;g=b.mW;Bb(b,g,g+f|0);f=f+e|0;while(e<f){h=b.mY.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.mW;Bb(b,g,g+1|0);b.mY.data[g]=124;c=Iv(a.ve,c+1|0);}e=b.mW;if(e>0)S6(b,e-1|0);k=new M;d=b.mY;h=d.data;e=b.mW;P();g=h.length;if(e>=0&&e<=(g-0|0)){k.mX=O(d.data,0,e);return k;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
function Ot(){let a=this;Bo.call(a);a.zF=null;a.Cv=null;}
let ASH=(a,b)=>{return a.zF.hG(b);}
function Or(){let a=this;Bo.call(a);a.wj=0;a.y1=null;a.xa=null;}
let ATm=(a,b)=>{return !(a.wj^Cw(a.xa.nj,b))&&!(a.wj^a.xa.p6^a.y1.hG(b))?0:1;}
function Os(){let a=this;Bo.call(a);a.wq=0;a.AI=null;a.xK=null;}
let AO7=(a,b)=>{return !(a.wq^Cw(a.xK.nj,b))&&!(a.wq^a.xK.p6^a.AI.hG(b))?1:0;}
function Ow(){let a=this;Bo.call(a);a.A5=0;a.AL=null;a.AF=null;a.BK=null;}
let AKn=(a,b)=>{return a.A5^(!a.AL.hG(b)&&!a.AF.hG(b)?0:1);}
function Ox(){let a=this;Bo.call(a);a.zI=0;a.zC=null;a.zq=null;a.De=null;}
let AFg=(a,b)=>{return a.zI^(!a.zC.hG(b)&&!a.zq.hG(b)?0:1)?0:1;}
function Ou(){let a=this;Bo.call(a);a.zm=null;a.Dj=null;}
let AL9=(a,b)=>{let c,d;c=a.zm;d=c.nQ;return d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b);}
function Ov(){let a=this;Bo.call(a);a.AQ=null;a.B0=null;}
let AO_=(a,b)=>{let c,d;c=a.AQ;d=c.nQ;return (d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b))?0:1;}
function Oy(){let a=this;Bo.call(a);a.zR=null;a.zE=0;a.Ap=null;}
let AUT=(a,b)=>{let c,d,e;c=a.zR;d=c.nQ;e=d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b);return !e&&!(a.zE^Cw(a.Ap.nj,b))?0:1;}
function Oz(){let a=this;Bo.call(a);a.z6=null;a.Aa=0;a.zZ=null;}
let AJJ=(a,b)=>{let c,d,e;c=a.z6;d=c.nQ;e=d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b);return !e&&!(a.Aa^Cw(a.zZ.nj,b))?1:0;}
function Ol(){let a=this;Bo.call(a);a.An=0;a.AH=null;a.AW=null;a.Bu=null;}
let AXd=(a,b)=>{let c,d;b:{if(!(a.An^a.AH.hG(b))){c=a.AW;d=c.nQ;if(!(d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b))){b=0;break b;}}b=1;}return b;}
function OR(){let a=this;Bo.call(a);a.AU=0;a.yy=null;a.yE=null;a.BW=null;}
let AMc=(a,b)=>{let c,d;b:{if(!(a.AU^a.yy.hG(b))){c=a.yE;d=c.nQ;if(!(d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b))){b=1;break b;}}b=0;}return b;}
function Oj(){let a=this;Bo.call(a);a.zd=null;a.B2=null;}
let AJG=(a,b)=>{let c,d;c=a.zd;d=c.nQ;return d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b);}
function Ok(){let a=this;Bo.call(a);a.ze=null;a.Dc=null;}
let ALv=(a,b)=>{let c,d;c=a.ze;d=c.nQ;return (d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b))?0:1;}
function Op(){let a=this;Bo.call(a);a.A4=null;a.z4=0;a.Bg=null;}
let ANv=(a,b)=>{let c,d,e;c=a.A4;d=c.nQ;e=d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b);return e&&a.z4^Cw(a.Bg.nj,b)?1:0;}
function Oi(){let a=this;Bo.call(a);a.Ai=null;a.zJ=0;a.z3=null;}
let AUu=(a,b)=>{let c,d,e;c=a.Ai;d=c.nQ;e=d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b);return e&&a.zJ^Cw(a.z3.nj,b)?0:1;}
function On(){let a=this;Bo.call(a);a.Ar=0;a.yL=null;a.zH=null;a.BJ=null;}
let AH8=(a,b)=>{let c,d;b:{if(a.Ar^a.yL.hG(b)){c=a.zH;d=c.nQ;if(d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b)){b=1;break b;}}b=0;}return b;}
function Oo(){let a=this;Bo.call(a);a.Ae=0;a.yv=null;a.Am=null;a.B8=null;}
let ARS=(a,b)=>{let c,d;b:{if(a.Ae^a.yv.hG(b)){c=a.Am;d=c.nQ;if(d!==null?c.nw^d.hG(b):c.nw^Cw(c.nj,b)){b=0;break b;}}b=1;}return b;}
function IR(){let a=this;C.call(a);a.qR=null;a.xJ=null;a.oB=null;a.pb=0;}
function Eg(){let a=this;C.call(a);a.Dg=null;a.qx=Bi;a.q3=Bi;a.pt=null;a.y9=null;a.qj=null;a.ps=0;a.qA=null;}
let Qx=null;let BV=null;let C4=0;let FK=0;let ANg=null;let CJ=()=>{CJ=X(Eg);AHC();}
let ZA=a=>{let b,c,$$je;b:{a:{d:{k:{try{CJ();FK=FK+1|0;ABM(a);a.cV();}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){b=$$je;break k;}else{b=$$je;break d;}}b=a.pt;GT(b);n:{try{MY(b);D8(b);break n;}catch($$e){$$je=Bx($$e);c=$$je;}D8(b);D(c);}a.ps=0;FK=FK-1|0;b=Qx;if(BV!==b)BV=b;BV.q3=Fa();break b;}try{U6(X1(a),a,b);break a;}catch($$e){$$je=Bx($$e);b=$$je;}}c=a.pt;GT(c);o:{try{MY(c);D8(c);break o;}catch($$e){$$je=Bx($$e);b=$$je;}D8(c);D(b);}a.ps=0;FK=FK-1|0;c=Qx;if(BV!==c)BV=c;BV.q3=Fa();D(b);}b=a.pt;GT(b);r:{try
{MY(b);D8(b);break r;}catch($$e){$$je=Bx($$e);c=$$je;}D8(b);D(c);}a.ps=0;FK=FK-1|0;b=Qx;if(BV!==b)BV=b;BV.q3=Fa();}}
let ABM=b=>{CJ();if(BV!==b)BV=b;BV.q3=Fa();}
let AFi=()=>{CJ();return BV;}
let IY=b=>{let $p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:CJ();$p=1;case 1:S7(b);if(GC()){break _;}return;default:C9();}}BO().s(b,$p);}
let WH=(b,c)=>{let d,e;CJ();d=BV;e=new Oc;e.Bh=d;e.AE=c;e.CX=SA(e,CS(b,K(2147483647))?2147483647:T(b));d.y9=e;}
let X1=a=>{let b;b=a.Dg;if(b!==null)return b;CJ();return ANg;}
let AHC=()=>{let b,c,d;b=new Eg;CJ();c=null;b.pt=new C;b.ps=1;b.qj=B(459);b.qA=c;d=C4;C4=d+1|0;b.qx=K(d);Qx=b;BV=b;C4=1;FK=1;ANg=new Qt;}
let S7=b=>{let thread=BO();let javaThread=AFH();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Nh(javaThread);thread.resume();};callback.io=e=>{thread.attribute=AUa(e);Nh(javaThread);thread.resume();};callback=ZG(callback);thread.suspend(()=>{try {WH(b,callback);;}catch(TW){callback.io(TW);}});return null;}
let BK=F(BC);
let A1G=()=>{let a=new BK();ATF(a);return a;}
let AZT=a=>{let b=new BK();ARh(b,a);return b;}
let ATF=a=>{a.mZ=1;a.m0=1;}
let ARh=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
let I4=F(BC);
function ACf(){let a=this;C.call(a);a.n2=null;a.nS=null;a.pZ=null;a.qt=null;a.pU=0;a.pk=0;a.oW=0;a.nz=0;a.p8=0;a.vE=0;a.rM=0;a.o$=0;a.CR=0;a.s2=0;a.sZ=0;}
let A2W=(a,b,c,d,e,f)=>{let g=new ACf();AQc(g,a,b,c,d,e,f);return g;}
let AQc=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.s2=(-1);h=e+1|0;a.pU=h;i=Q(h*2|0);a.n2=i;j=Q(g);k=j.data;a.nS=j;e=0;g=k.length;l=BJ(e,g);if(l>0){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.pZ=Q(f);i=i.data;h=0;m=i.length;e=BJ(h,m);if(e>0){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.pk=0;a.sZ=2;f=0;if(e>0){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.qt=b;if(c
>=0){a.oW=c;a.nz=d;}a.p8=a.oW;}
let ACj=F();
let Zu=b=>{bh:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break bh;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break bh;}return 67;}return 0;}
let MA=b=>{if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
let Xn=F();
let FU=()=>{return BQ(performance.now()*1000000.0);}
let Ux=F();
let Gx=F(0);
function TO(){C.call(this);this.zr=null;}
let AUV=a=>{ATB(a.zr);}
let SN=F(B2);
let SO=F(B2);
let SS=F(B2);
let ST=F(B2);
let SQ=F(B2);
let SR=F(B2);
let SK=F(B2);
let SL=F(B2);
let SJ=F(B2);
let NM=F(0);
let Qt=F();
let U6=(a,b,c)=>{let d;if(Er===null){d=new CD;d.oq=I1;b=new I;b.mY=H(16);d.nF=b;d.oo=H(32);d.ow=0;CC();d.ot=CK;Er=d;}Ke(c,Er);}
let XA=F();
let Qc=F(0);
function P0(){C.call(this);this.r$=null;}
let ZG=b=>{let c;c=new P0;c.r$=b;return c;}
let ANO=(a,b)=>{a.r$.e(b);}
let AV8=(a,b)=>{a.r$.io(b);}
function Q0(){let a=this;C.call(a);a.y6=null;a.y7=null;a.y4=0;a.y5=null;}
let NH=F(HQ);
let ALi=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.nz;b:{while(true){if(b>f){b=e;break b;}g=a.n0;h=d.n2.data;i=g*2|0;j=h[i];h[i]=b;e=a.pj.hc(b,c,d);if(e>=0)break;i=a.n0;d.n2.data[i*2|0]=j;b=b+1|0;}}return b;}
let AW1=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;b:{while(true){if(c<b){c=f;break b;}g=a.n0;h=e.n2.data;i=g*2|0;j=h[i];h[i]=c;f=a.pj.hc(c,d,e);if(f>=0)break;i=a.n0;e.n2.data[i*2|0]=j;c=c+(-1)|0;}}return c;}
let AJk=a=>{return null;}
function U7(){let a=this;C.call(a);a.Lm=0;a.Lr=0;a.GM=0;a.IF=0;a.Eu=null;}
function G8(){let a=this;Eg.call(a);a.rp=0;a.pW=null;a.qa=null;a.p3=null;}
let ARj=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Se;c.qW=a;c.sK=b;c=B0(c,"handleEvent");b.onreadystatechange=c;c=a.p3;d=a.qa;e=new ID;e.x6=c;e.u2=d;c=B0(e,"handleEvent");b.onprogress=c;d=a.pW;f=a.rp;b.open("GET",BP(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
let NA=F();
let AR$=null;let A1v=()=>{A1v=X(NA);ATc();}
let ATc=()=>{let b,c;I2();b=Q((ATN.s()).data.length);c=b.data;AR$=b;c[AEa.m6]=1;c[QG.m6]=2;}
let ADm=F();
let AOu=(a,b,c)=>{a.fG(Be(b),DD(c,"handleEvent"));}
let APw=(a,b,c)=>{a.fH(Be(b),DD(c,"handleEvent"));}
let AFT=(a,b,c,d)=>{a.fI(Be(b),DD(c,"handleEvent"),d?1:0);}
let AF4=(a,b)=>{return !!a.fJ(b);}
let AL$=(a,b,c,d)=>{a.fL(Be(b),DD(c,"handleEvent"),d?1:0);}
let G_=F(0);
function ND(){let a=this;C.call(a);a.rF=null;a.xk=0;a.vx=null;a.xX=null;a.sY=null;}
let TJ=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.rF.readyState==4){if(a.rF.status==200){if(a.sY.pi){if(BA===null){c=new CD;c.oq=Dd;b=new I;b.mY=H(16);c.nF=b;c.oo=H(32);c.ow=0;CC();c.ot=CK;BA=c;}d=BA;b=a.vx;c=new I;c.mY=H(16);G(c,c.mW,B(460));e=c.mW;if(b===null)b=B(2);G(c,e,b);f=new M;g=c.mY;h=g.data;i=c.mW;P();j=h.length;if(i>=0&&i<=(j-0|
0)){f.mX=O(g.data,0,i);b=d.nF;G(b,b.mW,f);i=b.mW;Bb(b,i,i+1|0);b.mY.data[i]=10;CM(d);}else{b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}}c=a.rF.response;I9();d=IO.pN.document;f=d.createElement("script");b=d.createTextNode(c);f.appendChild(b);d.body.appendChild(f);Be(a.rF.responseText);}else if(a.rF.status!=404&&a.rF.status!=403){try{k=K(100);$p=1;continue _;}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){}else{throw $$e;}}M5(a.sY,a.xk,a.vx,a.xX);}b=a.sY;b.nO=b.nO-1|0;}return;case 1:b:{try{IY(k);if(GC()){break _;}break b;}
catch($$e){$$je=Bx($$e);if($$je instanceof Dr){}else{throw $$e;}}}M5(a.sY,a.xk,a.vx,a.xX);b=a.sY;b.nO=b.nO-1|0;return;default:C9();}}BO().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
let YU=(a,b)=>{let $p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:TJ(a,b);if(GC()){break _;}return;default:C9();}}BO().s(a,b,$p);}
let Q5=F();
let AGi=0;function Hu(){let a=this;C.call(a);a.s5=null;a.vF=0;a.ts=0;a.pG=0;}
let Qh=a=>{let b;if(a.pG)return a.ts>=a.s5.m7?0:1;b=new W;b.mZ=1;b.m0=1;b.m1=B(461);D(b);}
let OQ=a=>{let b,c,d,e,f,g,h;b=a.ts;c=a.s5;if(b<c.m7){if(a.pG){d=c.ne.data;a.ts=b+1|0;return d[b];}c=new W;c.mZ=1;c.m0=1;c.m1=B(461);D(c);}c=new M8;P();e=new I;e.mY=H(16);J(e,e.mW,b,10);f=new M;d=e.mY;g=d.data;b=e.mW;h=g.length;if(b>=0&&b<=(h-0|0)){f.mX=O(d.data,0,b);c.mZ=1;c.m0=1;c.m1=f;D(c);}c=new L;Z(c);D(c);}
function Od(){let a=this;C.call(a);a.xi=null;a.x7=0;a.xD=null;a.xE=null;}
let Yj=a=>{let b,c,d;if(AGi){b=new Hu;c=a.xi;d=a.x7;b.pG=1;b.s5=c;b.vF=d;return b;}if(a.xD===null){b=new Hu;c=a.xi;d=a.x7;b.pG=1;b.s5=c;b.vF=d;a.xD=b;b=new Hu;b.pG=1;b.s5=c;b.vF=d;a.xE=b;}b=a.xD;if(b.pG){c=a.xE;c.ts=0;c.pG=1;b.pG=0;return c;}b.ts=0;b.pG=1;a.xE.pG=0;return b;}
function IE(){let a=this;C.call(a);a.xF=null;a.pl=null;a.xO=null;}
let ACh=a=>{let b,c,d,e,f,g,h,i,j;b=a.pl.length;c=new I;c.mY=H(((b*4|0)/3|0)+2|0);d=0;a:{d:{k:{n:{c:{while(true){if(d>=b){e=new M;f=c.mY;g=f.data;h=c.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){e.mX=O(f.data,0,h);return e;}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}j=b-d|0;if(j<3){if(j>=2){j=((a.pl[d]&255)<<16)+((a.pl[d+1|0]&255)<<8)|0;DK(c,CY(B(462),j>>18&63));DK(c,CY(B(462),j>>12&63));DK(c,CY(B(462),j>>6&63));BF(c,B(463));}else{i=(a.pl[d]&255)<<16;h=i>>18&63;if(h<0)break a;if(h>=B(462).mX.length)break a;h=B(462).mX.charCodeAt(h);j
=c.mW;Bb(c,j,j+1|0);c.mY.data[j]=h;h=i>>12&63;if(h<0)break;if(h>=B(462).mX.length)break;Qi(c,B(462).mX.charCodeAt(h));RC(c,B(464));}}else{j=(((a.pl[d]&255)<<16)+((a.pl[d+1|0]&255)<<8)|0)+(a.pl[d+2|0]&255)|0;h=j>>18&63;if(h<0)break d;if(h>=B(462).mX.length)break d;i=B(462).mX.charCodeAt(h);h=c.mW;Bb(c,h,h+1|0);c.mY.data[h]=i;h=j>>12&63;if(h<0)break k;if(h>=B(462).mX.length)break k;i=B(462).mX.charCodeAt(h);h=c.mW;Bb(c,h,h+1|0);c.mY.data[h]=i;h=j>>6&63;if(h<0)break n;if(h>=B(462).mX.length)break n;i=B(462).mX.charCodeAt(h);h
=c.mW;Bb(c,h,h+1|0);c.mY.data[h]=i;j=j&63;if(j<0)break c;if(j>=B(462).mX.length)break c;h=B(462).mX.charCodeAt(j);j=c.mW;Bb(c,j,j+1|0);c.mY.data[j]=h;}d=d+3|0;}e=new S;Z(e);D(e);}e=new S;e.mZ=1;e.m0=1;D(e);}e=new S;e.mZ=1;e.m0=1;D(e);}e=new S;e.mZ=1;e.m0=1;D(e);}e=new S;e.mZ=1;e.m0=1;D(e);}e=new S;e.mZ=1;e.m0=1;D(e);}
function NB(){C.call(this);this.xt=null;}
let AFM=a=>{let b,c,d,e,f,g,h;b=a.xt.u0;c=b.ne.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new B6;d.nn=c;e=d;c.classObject=e;}}f=d.nn.$meta.item;if(f===null)c=null;else{c=f.classObject;if(c===null){c=new B6;c.nn=f;d=c;f.classObject=d;}}g=b.m7;if(c===null){b=new CO;b.mZ=1;b.m0=1;Bd(b);D(b);}if(c===Br(B4)){b=new Bc;b.mZ=1;b.m0=1;Bd(b);D(b);}if(g<0){b=new Dp;b.mZ=1;b.m0=1;Bd(b);D(b);}d=D6(c.nn,g);Ex(b.ne,0,d,0,b.m7);h=d;a.xt.vU.yz.yZ.ir(h);}
let TQ=F(0);
let Jw=F(0);
let RW=F(0);
let HL=F();
function KG(){HL.call(this);this.oq=null;}
function CD(){let a=this;KG.call(a);a.ow=0;a.sC=0;a.nF=null;a.oo=null;a.ot=null;}
let Oa=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,$$je;e=b.data;d=d-c|0;f=new I_;g=e.length;h=c+d|0;f.nd=(-1);f.ni=g;f.m2=g;f.m3=c;f.m2=h;f.r3=0;f.tb=0;f.rK=b;i=1024;if(d<i)i=d;if(16>i)i=16;e=Bz(i);d=e.data.length;if(d>=0&&d<=(d-0|0)){j=new Cm;h=0+d|0;j.nd=(-1);j.ni=d;j.m2=d;B5();j.nE=B8;j.nM=0;j.nC=e;j.m3=0;j.m2=h;j.og=0;j.nR=0;k=AEj(a.ot);D4();l=EH;if(l===null){l=new Bc;l.mZ=1;l.m0=1;l.m1=B(465);D(l);}k.rZ=l;k.rJ=l;while(true){g=(KM(k,f,j,1)).nI!=1?0:1;i=j.m3;l=a.oq;if(l===null)a.sC=1;if(a.sC?0:1)u:{try{l.it(e,0,i);break u;}
catch($$e){$$je=Bx($$e);if($$je instanceof E4){}else{throw $$e;}}a.sC=1;}j.m3=0;j.m2=j.ni;j.nd=(-1);if(!g)break;}while(true){g=(Nv(k,j)).nI!=1?0:1;i=j.m3;l=a.oq;if(l===null)a.sC=1;if(a.sC?0:1)bi:{try{l.it(e,0,i);break bi;}catch($$e){$$je=Bx($$e);if($$je instanceof E4){}else{throw $$e;}}a.sC=1;}j.m3=0;j.m2=j.ni;j.nd=(-1);if(!g)break;}return;}k=new L;k.mZ=1;k.m0=1;D(k);}
let KX=(a,b)=>{let c,d;c=a.nF;G(c,c.mW,b);d=c.mW;Bb(c,d,d+1|0);c.mY.data[d]=10;CM(a);}
let CM=a=>{let b,c,d,e,f,g,h,i,j;b=a.nF;c=b.mW;d=a.oo;if(c>d.data.length)d=H(c);e=0;f=0;if(e>c){b=new L;b.mZ=1;b.m0=1;b.m1=B(466);D(b);}while(e<c){g=d.data;h=f+1|0;i=b.mY.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Oa(a,d,0,c);a.nF.mW=0;}
function Hr(){HL.call(this);this.vK=null;}
let JD=F(Hr);
let Dd=null;let ANB=(a,b,c,d)=>{let e;e=0;while(e<d){A1w(b.data[e+c|0]&255);e=e+1|0;}}
let ASb=()=>{let b;b=new JD;b.vK=Bz(1);Dd=b;}
function ID(){let a=this;C.call(a);a.u2=null;a.x6=null;}
let AQH=(a,b)=>{a.u2.iv(b.loaded);}
function Es(){let a=this;C.call(a);a.qF=null;a.su=null;}
let DX=b=>{let c,d,e;if(b.mX.length?0:1){c=new Ia;c.mZ=1;c.m0=1;c.wC=b;D(c);}if(0>=b.mX.length){b=new S;b.mZ=1;b.m0=1;D(b);}if(!ACk(b.mX.charCodeAt(0))){c=new Ia;c.mZ=1;c.m0=1;c.wC=b;D(c);}d=1;o:{while(d<b.mX.length){if(d<0)break o;if(d>=b.mX.length)break o;r:{e=b.mX.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(ACk(e))break r;else{c=new Ia;c.mZ=1;c.m0=1;c.wC=b;D(c);}}}d=d+1|0;}return;}b=new S;b.mZ=1;b.m0=1;D(b);}
let ACk=b=>{b:{a:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}b=1;break b;}b=0;}return b;}
let AGb=b=>{let c,d,e,f,g,h,i;if(b===null){b=new Bc;b.mZ=1;b.m0=1;b.m1=B(467);D(b);}DX(b);A0s();c=AEN;d=b.mX.toUpperCase();e=d===b.mX?b:ABy(d);k:{if(!e.nT){f=0;while(true){if(f>=e.mX.length)break k;e.nT=(31*e.nT|0)+e.mX.charCodeAt(f)|0;f=f+1|0;}}}g=e.nT;h=c.oQ.data;c=h[g&(h.length-1|0)];while(c!==null){if(c.q7==g){e:{d=c.pc;if(e!==d){if(e===d)i=1;else if(!(d instanceof M))i=0;else{d=d;i=e.mX!==d.mX?0:1;}if(!i){i=0;break e;}}i=1;}if(i)break;}c=c.pm;}c=c===null?null:c.pL;if(c!==null)return c;c=new Ly;c.mZ=1;c.m0
=1;c.Cr=b;D(c);}
let AQC=a=>{return a.qF;}
let AVO=(a,b)=>{let c,d,$$je;b:{try{c=a.c6();D4();b=Pk(Tv(QF(c,EH),EH),b);}catch($$e){$$je=Bx($$e);if($$je instanceof Gl){d=$$je;break b;}else{throw $$e;}}return b;}c=new MT;c.mZ=1;c.m0=1;c.m1=B(75);c.oy=d;D(c);}
let M4=F(Es);
let CK=null;let CC=()=>{CC=X(M4);AKL();}
let AEj=a=>{let b,c,d,e,f;b=new O9;c=Bz(1);d=c.data;d[0]=63;D4();e=FN;b.rZ=e;b.rJ=e;f=d.length;if(f&&f>=b.qC){b.uT=a;b.tS=c.s();b.ua=2.0;b.qC=4.0;b.tI=H(512);b.tv=Bz(512);return b;}e=new Bc;J_(e,B(468));D(e);}
let AKL=()=>{let b,c,d,e,f;b=new M4;CC();c=Bf(M,0);d=c.data;DX(B(118));e=d.length;f=0;while(f<e){DX(d[f]);f=f+1|0;}b.qF=B(118);b.su=c.s();CK=b;}
function Ia(){Bc.call(this);this.wC=null;}
let OY=F(0);
function MC(){let a=this;C.call(a);a.yb=null;a.tL=null;a.pP=0;a.uI=null;a.Bb=0.0;a.yG=0.0;a.qD=0;a.Aw=null;a.vT=null;a.v4=null;a.xT=0;a.Al=0;a.y$=0;a.zf=0;a.yt=0;a.sd=null;a.tk=null;a.By=0;a.Cy=null;a.CY=0.0;a.vd=0;a.w_=0;a.x8=0;}
let AWg=null;let ACL=()=>{ACL=X(MC);APM();}
let A5Y=(a,b)=>{let c=new MC();OJ(c,a,b);return c;}
let OJ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;ACL();a.pP=0;a.uI=null;a.Bb=0.0;a.yG=0.0;a.qD=0;a.Aw=Fh();a.vT=Fh();a.v4=Fh();a.xT=0;a.Al=770;a.y$=771;a.zf=770;a.yt=771;a.tk=null;d=new Bn;EM();d.oe=1.0;d.od=1.0;d.oc=1.0;d.ob=1.0;Du(d);a.Cy=d;a.CY=AA1;a.vd=0;a.w_=0;a.x8=0;if(b>8191){c=new Bc;d=new I;d.mY=H(16);G(d,d.mW,B(469));J(d,d.mW,b,10);e=new M;f=d.mY;g=f.data;h=d.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){e.mX=O(f.data,0,h);c.mZ=1;c.m0=1;c.m1=e;D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}if(Ga===null)j=AWg;else{PO();j
=YC;}k=new Js;l=b*4|0;m=b*6|0;g=Bf(DY,3);f=g.data;d=new DY;d.p1=1;d.oJ=2;d.o8=5126;d.pa=0;d.o2=B(470);d.p7=0;d.rb=El(1);f[0]=d;d=new DY;d.p1=4;d.oJ=4;d.o8=5121;d.pa=1;d.o2=B(471);d.p7=0;d.rb=El(4);f[1]=d;d=new DY;d.p1=16;d.oJ=2;d.o8=5126;d.pa=0;d.o2=B(472);d.p7=0;d.rb=El(16);f[2]=d;Tj(k,j,0,l,m,AMe(g));a.yb=k;AAh(a.vT,0.0,0.0,BM.nJ.width,BM.nJ.height);a.tL=B9(b*20|0);f=K9(m);g=f.data;i=0;n=0;while(n<m){g[n]=i;g[n+1|0]=(i+1|0)<<16>>16;b=n+2|0;h=(i+2|0)<<16>>16;g[b]=h;g[n+3|0]=h;g[n+4|0]=(i+3|0)<<16>>16;g[n+5
|0]=i;n=n+6|0;i=(i+4|0)<<16>>16;}V1(a.yb,f);if(c!==null)a.sd=c;else{a.sd=ABK();a.By=1;}}
let ABK=()=>{let b,c,d,e,f,g,h,i;ACL();b=Lh(B(473),B(474));if(b.o3)return b;c=new Bc;d=new I;d.mY=H(16);G(d,d.mW,B(475));if(!b.o3)e=b.oO;else{e=Bp.iE(b.oK);b.oO=e;}G(d,d.mW,e);b=new M;f=d.mY;g=f.data;h=d.mW;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.mX=O(f.data,0,h);c.mZ=1;c.m0=1;c.m1=b;D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let I7=a=>{let b,c;if(a.qD){b=new BK;b.mZ=1;b.m0=1;b.m1=B(476);D(b);}a.vd=0;B3.iF(0);c=a.tk;if(c!==null)c.iG();else{c=a.sd;b=Bp;if(c.nG){Cy(c,c.ol,c.op);c.nG=0;}b.iI(c.oK);}Pd(a);a.qD=1;}
let JW=a=>{let b,c;if(!a.qD){b=new BK;b.mZ=1;b.m0=1;b.m1=B(477);D(b);}if(a.pP>0)HM(a);a.uI=null;a.qD=0;c=B3;c.iF(1);if(a.xT?0:1)c.iL(3042);}
let Y9=(a,b,c,d,e)=>{let f,g;if(!a.qD){b=new BK;b.mZ=1;b.m0=1;b.m1=B(478);D(b);}f=a.tL.data.length;if(b!==a.uI){HM(a);a.uI=b;b=b.rE;a.Bb=1.0/b.qX;a.yG=1.0/b.qM;g=f;}else{g=f-a.pP|0;if(!g){HM(a);g=f;}}if(g>=e)g=e;B$(c,d,a.tL,a.pP,g);a.pP=a.pP+g|0;e=e-g|0;while(e>0){d=d+g|0;HM(a);g=f>=e?e:f;B$(c,d,a.tL,0,g);a.pP=a.pP+g|0;e=e-g|0;}}
let HM=a=>{let b,c,d,e,f,g;b=a.pP;if(!b)return;a.vd=a.vd+1|0;a.w_=a.w_+1|0;c=b/20|0;if(c>a.x8)a.x8=c;b=c*6|0;d=a.uI;B3.cr(d.qL,d.xh);d=a.yb;e=a.tL;f=a.pP;d.po.iM(e,0,f);g=d.oC.iN(1);BW(g,0);CE(g,b);if(a.xT)B3.iL(3042);else{B3.iO(3042);c=a.Al;if(c!=(-1))B3.iP(c,a.y$,a.zf,a.yt);}g=a.tk;if(g===null)g=a.sd;QY(d,g,4,0,b,d.u4);a.pP=0;}
let I3=(a,b)=>{if(a.qD)HM(a);FT(a.vT,b.ov);if(a.qD)Pd(a);}
let Pd=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Q2(FT(a.v4,a.vT.ov),a.Aw);b=a.tk;if(b!==null){b.iS(B(479),a.v4);a.tk.iT(B(480),0);}else{b=a.sd;c=a.v4;TR();d=Jo(b,B(479),L9);e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}f=c.ov;b=e.pe;g=e.pH;if(!g)b=!b.ns?null:b.nq;else{h=b.no;i=T(Y(V(K(g),E(2135587861, 2654435769)),b.nt));e:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break e;}if(j==g)break;i=(i+1|0)&b.nr;}}b=i<0?null:b.np.data[i];}b=b;if(!d)b=!b.ns?null:b.nq;else{h=b.no;j=T(Y(V(K(d),E(2135587861, 2654435769)),b.nt));y:{while
(true){i=h.data[j];if(!i){j= -(j+1|0)|0;break y;}if(i==d)break;j=(j+1|0)&b.nr;}}b=j<0?null:b.np.data[j];}Bv();k=b===null?null:b.nv;b=e.m4;e="uniformMatrix4fv";c=!!0;if(f===null)l=null;else{f=f.data;m=f.length;l=new Array(m);j=0;while(j<m){n=f[j];j;l[j]=n;j=j+1|0;}}b[e](k,c,l);b=a.sd;c=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}c.iV(Jo(b,B(480),L9),0);}}
let APM=()=>{PO();AWg=XD;}
let Lv=F(0);
let Fe=F();
let ALR=a=>{return;}
let AK_=a=>{return;}
let ALU=a=>{return;}
function PQ(){let a=this;Fe.call(a);a.yA=null;a.up=null;a.pJ=null;a.ru=null;a.qV=Bi;a.AO=null;a.vY=null;a.tB=null;}
let ARv=a=>{let b,c,d,e,f,g,h,i,j,k;a.AO=a.tB.tK;b=new It;c=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));d=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));e=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));f=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));b.sQ=c;b.sR=d;b.sS=e;b.sT=f;a.yA=b;a.up=a.tB.to;b=new HX;g=new Hx;JN(g);g.tt=1.0;h=new Bg;CP();g.ug=h;g.s3=0.0;b.vf=new Bg;b.qK
=1.0;b.qc=g;a.vY=b;b=new HF;i=Lh(Kn(0,1,0),LS(0,1,0));if(i.o3){Jq(b,1536,0,1,0,i);b.v9=1;a.pJ=b;j=a.ru.data;c=0;d=j.length;if(c>d){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(c<d){e=c+1|0;j[c]=Bi;c=e;}a.qV=Bi;return;}b=new W;g=new I;g.mY=H(16);G(g,g.mW,B(475));if(!i.o3)h=i.oO;else{h=Bp.iE(i.oK);i.oO=h;}G(g,g.mW,h);h=new M;j=g.mY;k=j.data;d=g.mW;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.mX=O(j.data,0,d);b.mZ=1;b.m0=1;b.m1=h;D(b);}b=new L;Dt(b);D(b);}
let ATv=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Dj.rL.data;if(c[71]){d=a.tB;e=d.oN;c=d.qd.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oN=e;g=c[e];d.ph=g;if(g!==null){g.d3();d.ph.dZ(BM.nJ.width,BM.nJ.height);}return;}if(c[72]){d=a.tB;e=d.oN+1|0;c=d.qd.data;e=e%c.length|0;d.oN=e;J7(d,c[e]);return;}if(c[111])return;B3.i1(1.0,1.0,1.0,1.0);B3.i2(16384);h=a.vY.qc;IA(h,1);if(D3(Dj,29)){Ef(a.ru,Bi);a.qV=Bi;}if(D3(Dj,30)){Ef(a.ru,Bi);a.qV=Bi;}if(D3(Dj,31)){Ef(a.ru,Bi);a.qV=Bi;}a.qV=Bk(a.qV,K(1));e=0;while(e<2097152){i=SW(IB(a.yA)
*512.0)*255.0+256.0|0;if(i>=0&&i<512){c=a.ru.data;c[i]=Bk(c[i],K(1));}e=e+1|0;}V3(a.pJ,h.px,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);C$(a.pJ,j);d=a.pJ;b=f;Db(d,b,0.0,0.0);C$(a.pJ,j);Db(a.pJ,b,0.0625*F5(a.ru.data[f])/F5(a.qV),0.0);f=f+1|0;}k=8;while(k<520){C$(a.pJ,(-6.221923240859403E37));d=a.pJ;j=k;Db(d,0.0,j,0.0);C$(a.pJ,(-6.221923240859403E37));Db(a.pJ,10.0,j,0.0);k=k+32|0;}S4(a.pJ);I3(a.up,h.px);I7(a.up);g=a.AO;h=a.up;c=Bf(C,1);c.data[0]=Hb(JF(BM));IJ(g,h,L3(B(481),c),
64.0,522.0,384.0,1,1);JW(a.up);}
let APU=(a,b,c)=>{let d,e,f;d=a.vY;d.ti=0;d.tj=0;d.t9=b;d.us=c;e=b;f=d.qK;e=e*f;f=c*f;d.uw=e;d.uy=f;FF(d,1);FF(a.vY,1);}
function TT(){let a=this;Fe.call(a);a.y_=null;a.tQ=null;a.pF=null;a.rC=null;a.qS=Bi;a.zo=null;a.vC=null;a.tg=null;}
let ATI=a=>{let b,c,d,e,f,g,h,i,j,k;a.zo=a.tg.tK;b=new It;c=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));d=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));e=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));f=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));b.sQ=c;b.sR=d;b.sS=e;b.sT=f;a.y_=b;a.tQ=a.tg.to;b=new HX;g=new Hx;JN(g);g.tt=1.0;h=new Bg;CP();g.ug=h;g.s3=0.0;b.vf=new Bg;b.qK
=1.0;b.qc=g;a.vC=b;b=new HF;i=Lh(Kn(0,1,0),LS(0,1,0));if(i.o3){Jq(b,1536,0,1,0,i);b.v9=1;a.pF=b;j=a.rC.data;c=0;d=j.length;if(c>d){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(c<d){e=c+1|0;j[c]=Bi;c=e;}a.qS=Bi;return;}b=new W;g=new I;g.mY=H(16);G(g,g.mW,B(475));if(!i.o3)h=i.oO;else{h=Bp.iE(i.oK);i.oO=h;}G(g,g.mW,h);h=new M;j=g.mY;k=j.data;d=g.mW;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.mX=O(j.data,0,d);b.mZ=1;b.m0=1;b.m1=h;D(b);}b=new L;Dt(b);D(b);}
let AMx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Dj.rL.data;if(c[71]){d=a.tg;e=d.oN;c=d.qd.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oN=e;g=c[e];d.ph=g;if(g!==null){g.d3();d.ph.dZ(BM.nJ.width,BM.nJ.height);}return;}if(c[72]){d=a.tg;e=d.oN+1|0;c=d.qd.data;e=e%c.length|0;d.oN=e;J7(d,c[e]);return;}if(c[111])return;B3.i1(1.0,1.0,1.0,1.0);B3.i2(16384);h=a.vC.qc;IA(h,1);if(D3(Dj,29)){Ef(a.rC,Bi);a.qS=Bi;}if(D3(Dj,30)){Ef(a.rC,Bi);a.qS=Bi;}if(D3(Dj,31)){Ef(a.rC,Bi);a.qS=Bi;}a.qS=Bk(a.qS,K(1));e=0;while(e<2097152){i=ZK(IB(a.y_)
*512.0)*255.0+256.0|0;if(i>=0&&i<512){c=a.rC.data;c[i]=Bk(c[i],K(1));}e=e+1|0;}d=a.pF;g=h.px;M$(d.sF,g);d.t8=1;f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);C$(a.pF,j);d=a.pF;b=f;Db(d,b,0.0,0.0);C$(a.pF,j);Db(a.pF,b,0.0625*F5(a.rC.data[f])/F5(a.qS),0.0);f=f+1|0;}k=8;while(k<520){C$(a.pF,(-6.221923240859403E37));d=a.pF;j=k;Db(d,0.0,j,0.0);C$(a.pF,(-6.221923240859403E37));Db(a.pF,10.0,j,0.0);k=k+32|0;}KU(a.pF);I3(a.tQ,h.px);I7(a.tQ);g=a.zo;l=a.tQ;c=Bf(C,1);c.data[0]=Hb(JF(BM));IJ(g,
l,L3(B(482),c),64.0,522.0,384.0,1,1);JW(a.tQ);}
let AP$=(a,b,c)=>{let d,e,f;d=a.vC;d.ti=0;d.tj=0;d.t9=b;d.us=c;e=b;f=d.qK;e=e*f;f=c*f;d.uw=e;d.uy=f;FF(d,1);FF(a.vC,1);}
function NO(){let a=this;Fe.call(a);a.zy=null;a.tJ=null;a.pO=null;a.rR=null;a.q0=Bi;a.Ad=null;a.v8=null;a.tw=null;}
let AN5=a=>{let b,c,d,e,f,g,h,i,j,k;a.Ad=a.tw.tK;b=new It;c=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));d=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));e=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));f=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));b.sQ=c;b.sR=d;b.sS=e;b.sT=f;a.zy=b;a.tJ=a.tw.to;b=new HX;g=new Hx;JN(g);g.tt=1.0;h=new Bg;CP();g.ug=h;g.s3=0.0;b.vf=new Bg;b.qK
=1.0;b.qc=g;a.v8=b;b=new HF;i=Lh(Kn(0,1,0),LS(0,1,0));if(i.o3){Jq(b,1536,0,1,0,i);b.v9=1;a.pO=b;j=a.rR.data;c=0;d=j.length;if(c>d){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(c<d){e=c+1|0;j[c]=Bi;c=e;}a.q0=Bi;return;}b=new W;g=new I;g.mY=H(16);G(g,g.mW,B(475));if(!i.o3)h=i.oO;else{h=Bp.iE(i.oK);i.oO=h;}G(g,g.mW,h);h=new M;j=g.mY;k=j.data;d=g.mW;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.mX=O(j.data,0,d);b.mZ=1;b.m0=1;b.m1=h;D(b);}b=new L;Dt(b);D(b);}
let AJV=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Dj.rL.data;if(c[71]){d=a.tw;e=d.oN;c=d.qd.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oN=e;g=c[e];d.ph=g;if(g!==null){g.d3();d.ph.dZ(BM.nJ.width,BM.nJ.height);}return;}if(c[72]){d=a.tw;e=d.oN+1|0;c=d.qd.data;e=e%c.length|0;d.oN=e;J7(d,c[e]);return;}if(c[111])return;B3.i1(1.0,1.0,1.0,1.0);B3.i2(16384);h=a.v8.qc;IA(h,1);if(D3(Dj,29)){Ef(a.rR,Bi);a.q0=Bi;}if(D3(Dj,30)){Ef(a.rR,Bi);a.q0=Bi;}if(D3(Dj,31)){Ef(a.rR,Bi);a.q0=Bi;}a.q0=Bk(a.q0,K(1));e=0;while(e<2097152){i=ADW(IB(a.zy)
*512.0)*255.0+256.0|0;if(i>=0&&i<512){c=a.rR.data;c[i]=Bk(c[i],K(1));}e=e+1|0;}d=a.pO;g=h.px;M$(d.sF,g);d.t8=1;f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);C$(a.pO,j);d=a.pO;b=f;Db(d,b,0.0,0.0);C$(a.pO,j);Db(a.pO,b,0.0625*F5(a.rR.data[f])/F5(a.q0),0.0);f=f+1|0;}k=8;while(k<520){C$(a.pO,(-6.221923240859403E37));d=a.pO;j=k;Db(d,0.0,j,0.0);C$(a.pO,(-6.221923240859403E37));Db(a.pO,10.0,j,0.0);k=k+32|0;}KU(a.pO);I3(a.tJ,h.px);I7(a.tJ);g=a.Ad;l=a.tJ;c=Bf(C,1);c.data[0]=Hb(JF(BM));IJ(g,
l,L3(B(483),c),64.0,522.0,384.0,1,1);JW(a.tJ);}
let AW$=(a,b,c)=>{let d,e,f;d=a.v8;d.ti=0;d.tj=0;d.t9=b;d.us=c;e=b;f=d.qK;e=e*f;f=c*f;d.uw=e;d.uy=f;FF(d,1);FF(a.v8,1);}
function Oh(){let a=this;Fe.call(a);a.Ag=null;a.uC=null;a.pB=null;a.r5=null;a.qO=Bi;a.zD=null;a.vW=null;a.tu=null;}
let ARX=a=>{let b,c,d,e,f,g,h,i,j,k;a.zD=a.tu.tK;b=new It;c=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));d=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));e=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));f=T(Cu(BQ((BZ()-0.5)*4.503599627370496E15),BQ((BZ()-0.5)*1.8446744073709552E19)));b.sQ=c;b.sR=d;b.sS=e;b.sT=f;a.Ag=b;a.uC=a.tu.to;b=new HX;g=new Hx;JN(g);g.tt=1.0;h=new Bg;CP();g.ug=h;g.s3=0.0;b.vf=new Bg;b.qK
=1.0;b.qc=g;a.vW=b;b=new HF;i=Lh(Kn(0,1,0),LS(0,1,0));if(i.o3){Jq(b,1536,0,1,0,i);b.v9=1;a.pB=b;j=a.r5.data;c=0;d=j.length;if(c>d){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(c<d){e=c+1|0;j[c]=Bi;c=e;}a.qO=Bi;return;}b=new W;g=new I;g.mY=H(16);G(g,g.mW,B(475));if(!i.o3)h=i.oO;else{h=Bp.iE(i.oK);i.oO=h;}G(g,g.mW,h);h=new M;j=g.mY;k=j.data;d=g.mW;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.mX=O(j.data,0,d);b.mZ=1;b.m0=1;b.m1=h;D(b);}b=new L;Dt(b);D(b);}
let AF5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Dj.rL.data;if(c[71]){d=a.tu;e=d.oN;c=d.qd.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oN=e;g=c[e];d.ph=g;if(g!==null){g.d3();d.ph.dZ(BM.nJ.width,BM.nJ.height);}return;}if(c[72]){d=a.tu;e=d.oN+1|0;c=d.qd.data;e=e%c.length|0;d.oN=e;J7(d,c[e]);return;}if(c[111])return;B3.i1(1.0,1.0,1.0,1.0);B3.i2(16384);h=a.vW.qc;IA(h,1);if(D3(Dj,29)){Ef(a.r5,Bi);a.qO=Bi;}if(D3(Dj,30)){Ef(a.r5,Bi);a.qO=Bi;}if(D3(Dj,31)){Ef(a.r5,Bi);a.qO=Bi;}a.qO=Bk(a.qO,K(1));e=0;while(e<2097152){i=AET(IB(a.Ag)
*512.0)*255.0+256.0|0;if(i>=0&&i<512){c=a.r5.data;c[i]=Bk(c[i],K(1));}e=e+1|0;}d=a.pB;g=h.px;M$(d.sF,g);d.t8=1;f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);C$(a.pB,j);d=a.pB;b=f;Db(d,b,0.0,0.0);C$(a.pB,j);Db(a.pB,b,0.0625*F5(a.r5.data[f])/F5(a.qO),0.0);f=f+1|0;}k=8;while(k<520){C$(a.pB,(-6.221923240859403E37));d=a.pB;j=k;Db(d,0.0,j,0.0);C$(a.pB,(-6.221923240859403E37));Db(a.pB,10.0,j,0.0);k=k+32|0;}KU(a.pB);I3(a.uC,h.px);I7(a.uC);g=a.zD;l=a.uC;c=Bf(C,1);c.data[0]=Hb(JF(BM));IJ(g,
l,L3(B(484),c),64.0,522.0,384.0,1,1);JW(a.uC);}
let AIJ=(a,b,c)=>{let d,e,f;d=a.vW;d.ti=0;d.tj=0;d.t9=b;d.us=c;e=b;f=d.qK;e=e*f;f=c*f;d.uw=e;d.uy=f;FF(d,1);FF(a.vW,1);}
let M8=F(BC);
let W=F(BC);
let APi=(a,b)=>{let c=new W();AGE(c,a,b);return c;}
let FP=a=>{let b=new W();Po(b,a);return b;}
let AGE=(a,b,c)=>{a.mZ=1;a.m0=1;a.m1=b;a.oy=c;}
let Po=(a,b)=>{a.mZ=1;a.m0=1;a.m1=b;}
let Ww=F();
let Pl=(b,c)=>{let d;b:{d=0;switch(c){case 1:d=2;break b;case 2:d=4;break b;case 3:d=1;break b;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function Q1(){Bo.call(this);this.Cq=null;}
let AU5=(a,b)=>{return CG(b)!=2?0:1;}
function Nr(){Bo.call(this);this.Cw=null;}
let AHA=(a,b)=>{return CG(b)!=1?0:1;}
function Qr(){Bo.call(this);this.Ca=null;}
let AG3=(a,b)=>{b:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break b;default:k:{switch(CG(b)){case 12:case 13:case 14:break;default:b=0;break k;}b=1;}break b;}b=1;}return b;}
function Qq(){Bo.call(this);this.B4=null;}
let ALd=(a,b)=>{return 0;}
function Tb(){Bo.call(this);this.CU=null;}
let ANj=(a,b)=>{return !CG(b)?0:1;}
function OM(){Bo.call(this);this.CD=null;}
let AU8=(a,b)=>{return CG(b)!=9?0:1;}
function Ob(){Bo.call(this);this.Da=null;}
let AQ7=(a,b)=>{return HH(b);}
function PR(){Bo.call(this);this.Cs=null;}
let ASR=(a,b)=>{b:{a:{if(!(b>=0&&b<=31)){if(b<127)break a;if(b>159)break a;}b=1;break b;}b=0;}return b;}
function Nn(){Bo.call(this);this.Bj=null;}
let AWv=(a,b)=>{b:{a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=HH(b);}return b;}
function Nq(){Bo.call(this);this.CF=null;}
let AKc=(a,b)=>{b:{a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=HH(b);}return b;}
function N8(){Bo.call(this);this.CT=null;}
let AVo=(a,b)=>{b:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break b;}b=1;}return b;}
function O5(){Bo.call(this);this.C2=null;}
let APu=(a,b)=>{b:{a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}b=1;break b;}b=0;}return b;}
function O$(){Bo.call(this);this.Cc=null;}
let ASh=(a,b)=>{b:{switch(CG(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}return b;}
function Rt(){Bo.call(this);this.CI=null;}
let AUU=(a,b)=>{return CG(b)!=3?0:1;}
function QL(){Bo.call(this);this.Bm=null;}
let AV6=(a,b)=>{b:{a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}b=1;break b;}b=HH(b);}return b;}
function Nz(){Bo.call(this);this.Dk=null;}
let AJZ=(a,b)=>{b:{a:{switch(CG(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}b=1;break b;}b=HH(b);}return b;}
function Kb(){Bo.call(this);this.vN=0;}
let AQ$=(a,b)=>{return a.nw^(a.vN!=CG(b&65535)?0:1);}
let Ql=F(Kb);
let ATQ=(a,b)=>{return a.nw^(!(a.vN>>CG(b&65535)&1)?0:1);}
function E_(){C.call(this);this.ql=null;}
let AHh=a=>{ZA(a.ql);}
let W5=F();
let TH=F();
let AG5=null;let A3g=()=>{A3g=X(TH);ATE();}
let ATE=()=>{let b,c;Fl();b=Q((AEx.s()).data.length);c=b.data;AG5=b;c[H0.m6]=1;c[HN.m6]=2;c[Hh.m6]=3;c[G3.m6]=4;c[Tm.m6]=5;}
let ML=F(BC);
let Jj=F(Hr);
let I1=null;let AK2=(a,b,c,d)=>{let e;e=0;while(e<d){AZu(b.data[e+c|0]&255);e=e+1|0;}}
let AXc=()=>{let b;b=new Jj;b.vK=Bz(1);I1=b;}
let Pb=F(Ea);
let AXa=null;let AJg=()=>{AXa=Br(AKI);}
let GQ=F();
let AXD=null;let AXI=null;let AFC=null;let AKD=null;let AMd=null;let YQ=()=>{AXD=D_([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AXI=VR([K(1),K(10),K(100),K(1000),K(10000),K(100000),K(1000000),K(10000000),K(100000000),K(1000000000),E(1410065408, 2),E(1215752192, 23),E(3567587328, 232),E(1316134912, 2328),E(276447232, 23283),E(2764472320, 232830),E(1874919424, 2328306),E(1569325056, 23283064),E(2808348672, 232830643)]);AFC=VR([K(1),K(10),K(100),K(10000),K(100000000),E(1874919424, 2328306)]);AKD
=new RH;AMd=new Sp;}
let JM=F();
let VU=Bi;let LU=null;let Nx=null;let YE=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AWA(b):E(0, 2146959360);c.yF=CN(Bj(d,E(0, 2147483648)),Bi)?0:1;e=Bj(d,E(4294967295, 1048575));f=T(Fq(d,52))&2047;if(CN(e,Bi)&&!f){c.xw=Bi;c.wE=0;return;}if(f)e=K$(e,E(0, 1048576));else{e=CT(e,1);while(CN(Bj(e,E(0, 1048576)),Bi)){e=CT(e,1);f=f+(-1)|0;}}g=Nx;h=ASC(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=Nx.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Jf(e,LU.data[i],j);if(FY(k,VU)){while(Ej(k,VU)<=0){h=h+(-1)|0;k=Bk(V(k,
K(10)),K(9));}g=Nx.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Jf(e,LU.data[i],j);}e=CT(e,1);d=Bk(e,K(1));g=LU.data;i=h+1|0;l=g[i];f=j-1|0;m=Jf(d,l,f);l=Jf(Ci(e,K(1)),LU.data[i],f);n=K(1);while(true){o=V(n,K(10));if(Ej(DZ(k,o),DZ(l,o))<=0)break;n=o;}p=K(1);while(true){q=V(p,K(10));if(Ej(DZ(k,q),DZ(m,q))>=0)break;p=q;}i=Ej(n,p);e=i>0?V(DZ(k,n),n):i<0?Bk(V(DZ(k,p),p),p):V(DZ(Bk(k,Ct(p,K(2))),p),p);if(Ej(e,E(2808348672, 232830643))>=0)while(true){h=h+1|0;e=DZ(e,K(10));if(Ej(e,E(2808348672, 232830643))<0)break;}else if(Ej(e,
E(1569325056, 23283064))<0){h=h+(-1)|0;e=V(e,K(10));}c.xw=e;c.wE=h-330|0;}
let Jf=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Bj(b,K(65535));f=Bj(Y(b,16),K(65535));g=Bj(Y(b,32),K(65535));h=Bj(Y(b,48),K(65535));i=Bj(c,K(65535));j=Bj(Y(c,16),K(65535));k=Bj(Y(c,32),K(65535));l=Bj(Y(c,48),K(65535));return Bk(Bk(Bk(CT(V(l,h),32+d|0),CT(Bk(V(l,g),V(k,h)),16+d|0)),CT(Bk(Bk(V(l,f),V(k,g)),V(j,h)),d)),Y(Bk(Bk(Bk(V(k,e),V(j,f)),V(i,g)),CT(Bk(Bk(Bk(V(l,e),V(k,f)),V(j,g)),V(i,h)),16)),32-d|0));}
let XW=()=>{VU=DZ(K(-1),K(10));LU=VR([E(3251292512, 2194092222),E(1766094183, 3510547556),E(553881887, 2808438045),E(443105509, 2246750436),E(3285949193, 3594800697),E(910772436, 2875840558),E(2446604867, 2300672446),E(2196580869, 3681075914),E(2616258154, 2944860731),E(1234013064, 2355888585),E(1974420903, 3769421736),E(720543263, 3015537389),E(1435428070, 2412429911),E(578697993, 3859887858),E(2180945313, 3087910286),E(885762791, 2470328229),E(3135207384, 3952525166),E(1649172448, 3162020133),E(3037324877, 2529616106),
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
E(3348809418, 2876309015),E(2679047534, 2301047212),E(850502218, 3681675540),E(680401775, 2945340432),E(3121301797, 2356272345),E(699115580, 3770035753),E(2277279382, 3016028602),E(103836587, 2412822882),E(1025131999, 3860516611),E(4256079436, 3088413288),E(827883168, 2470730631),E(3901593088, 3953169009)]);Nx=A3R([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function RH(){let a=this;C.call(a);a.xw=Bi;a.wE=0;a.yF=0;}
function F2(){let a=this;C.call(a);a.CC=null;a.s$=null;a.Au=null;a.xb=0;a.AT=0.0;a.rI=0.0;a.wP=0.0;a.vX=0.0;a.xP=0.0;a.qp=0.0;a.vl=0.0;a.sr=0.0;a.uY=0.0;a.zn=0.0;a.rj=0.0;a.A$=0.0;a.t5=0;a.rH=null;a.wR=null;a.yk=0.0;a.w5=0.0;a.CB=null;a.yX=null;a.zs=null;}
let AXV=(a,b)=>{let c=new F2();AP8(c,a,b);return c;}
let AP8=(a,b,c)=>{a.qp=1.0;a.zn=1.0;a.rj=1.0;a.A$=1.0;a.rH=Bf(Lz(Ka),128);a.w5=1.0;a.yX=P2([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.zs=P2([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.Au=b;a.xb=c;V2(a,b,c);}
let V2=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$$je;if(a.s$!==null)D(AZT(B(485)));a.CC=AEn(b);d=A1y(AYk(AAV(b)),512);a:{d:{try{e=Iy(d);if(e===null)D(FP(B(486)));e=Jb(e,ABl(e,B(487))+8|0);f=(Td(BR(e,0,WU(e,32)),B(488),4)).data;if(f.length!=4)D(FP(B(489)));a.AT=Cs(f[0]);a.rI=Cs(f[1]);a.wP=Cs(f[2]);a.vX=Cs(f[3]);g=a.AT+a.wP;e=Iy(d);if(e===null)D(FP(B(490)));f=(Td(e,B(192),9)).data;h=f.length;if(h<3)D(FP(B(491)));if(!Ft(f[1],B(492)))D(FP(B(493)));a.xP=Cs(Jb(f[1],11));if
(!Ft(f[2],B(494)))D(FP(B(495)));bf:{i=Cs(Jb(f[2],5));j=1;if(h<6)k=j;else if(f[5]===null)k=j;else if(!Ft(f[5],B(496)))k=j;else{try{k=Jc(1,Cs(Jb(f[5],6)));j=k;break bf;}catch($$e){$$je=Bx($$e);if($$je instanceof B_){}else{throw $$e;}}k=j;}}a.s$=Bf(M,k);h=0;q:{u:{i:{while(true){if(h>=k)break q;e=Iy(d);if(e===null)D(FP(B(497)));m:{l=PL(Ws(B(498)),e);if(HB(l)){m=LY(l,1);try{if(Cs(m)!=h)break i;break m;}catch($$e){$$je=Bx($$e);if($$je instanceof B_){n=$$je;break u;}else{throw $$e;}}}}e=PL(Ws(B(499)),e);if(!HB(e))break;o
=LY(e,1);a.s$.data[h]=W4(Ud(Ua(Uk(b),o)),B(500),B(105));h=h+1|0;}D(FP(B(501)));}try{D(FP(Cr(BF(BF(EE(),B(502)),m))));}catch($$e){$$je=Bx($$e);if($$je instanceof B_){n=$$je;}else{throw $$e;}}}D(APi(Cr(BF(BF(EE(),B(503)),m)),n));}a.sr=0.0;bb:{while(true){e=Iy(d);if(e===null)break;if(Ft(e,B(504)))break bb;if(Ft(e,B(505)))break bb;if(!Ft(e,B(506)))continue;p=AId();q=ADy(e,B(507));BG(q);BG(q);k=Cs(BG(q));if(k<=0)a.wR=p;else{if(k>65535)continue;TP(a,k,p);}p.qN=k;BG(q);p.yN=Cs(BG(q));BG(q);p.yO=Cs(BG(q));BG(q);p.oY
=Cs(BG(q));BG(q);p.pr=Cs(BG(q));BG(q);p.pv=Cs(BG(q));BG(q);if(c)p.tc=Cs(BG(q));else p.tc= -(p.pr+Cs(BG(q))|0)|0;BG(q);p.rA=Cs(BG(q));if(TX(q))BG(q);bj:{if(TX(q))try{p.s1=Cs(BG(q));break bj;}catch($$e){$$je=Bx($$e);if($$je instanceof B_){}else{throw $$e;}}}if(p.oY>0&&p.pr>0)a.sr=AUo(i+p.tc,a.sr);}}a.sr=a.sr+a.wP;bk:{while(true){e=Iy(d);if(e===null)break;if(!Ft(e,B(508)))break bk;q=ADy(e,B(507));BG(q);BG(q);r=Cs(BG(q));BG(q);s=Cs(BG(q));if(r<0)continue;if(r>65535)continue;if(s<0)continue;if(s>65535)continue;p
=Hm(a,r&65535);BG(q);t=Cs(BG(q));if(p!==null)ABJ(p,s,t);}}u=0;v=0.0;w=0.0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;if(e!==null&&Ft(e,B(505))){u=1;q=ADy(e,B(507));BG(q);BG(q);v=Gb(BG(q));BG(q);w=Gb(BG(q));BG(q);x=Gb(BG(q));BG(q);y=Gb(BG(q));BG(q);z=Gb(BG(q));BG(q);ba=Gb(BG(q));BG(q);bb=Gb(BG(q));}bc=Hm(a,32);if(bc===null){bc=AId();bc.qN=32;bd=Hm(a,108);if(bd===null)bd=QU(a);bc.rA=bd.rA;TP(a,32,bc);}if(!bc.oY){be=a.vX;bc.oY=be+bc.rA+a.rI|0;bc.pv= -be|0;}a.yk=bc.rA;bf=null;f=a.yX.data;k=f.length;h=0;bl:{while(h<k){bf=Hm(a,
f[h]);if(bf!==null)break bl;h=h+1|0;}}if(bf===null)bf=QU(a);a.w5=bf.pr-g;bg=null;f=a.zs.data;k=f.length;h=0;be:{while(h<k){bg=Hm(a,f[h]);if(bg!==null)break be;h=h+1|0;}}if(bg!==null)a.qp=bg.pr;else{bh=a.rH.data;j=bh.length;k=0;while(k<j){bm:{bi=bh[k];if(bi!==null){f=bi.data;h=f.length;r=0;while(true){if(r>=h)break bm;p=f[r];if(p!==null){s=p.pr;if(s&&p.oY)a.qp=AIt(a.qp,s);}r=r+1|0;}}}k=k+1|0;}}g=a.qp-g;a.qp=g;i=i-g;a.vl=i;g= -a.xP;a.uY=g;if(c){a.vl= -i;a.uY= -g;}if(u){a.vl=v;a.sr=w;a.uY=x;a.qp=y;a.xP=z;a.yk=
ba;a.w5=bb;}}catch($$e){$$je=Bx($$e);if($$je instanceof CA){n=$$je;break d;}else{b=$$je;break a;}}TS(d);return;}try{D(APi(Cr(Fy(BF(EE(),B(509)),b)),n));}catch($$e){$$je=Bx($$e);b=$$je;}}TS(d);D(b);}
let NQ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=c.uq.rE;e=1.0/d.qX;f=1.0/d.qM;g=0.0;h=0.0;i=c.A1;j=c.A3;k=c.v1;l=c.ww;if(c instanceof PI){m=c;g=m.Cu;h=(m.B7-m.CH|0)-m.Ct;}n=b.yN;o=n;p=b.oY;q=n+p|0;n=b.yO;r=n;s=b.pr;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.oY=p+o|0;b.pv=b.pv-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.oY=b.oY-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.pr=n;if(n<0)b.pr=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.pr=b.pr-u|0;b.tc=b.tc+u|0;}}b.yu=i+o*e;b.yU=i+k*e;if(!a.xb){b.wN=j+
r*f;b.wl=j+l*f;}else{b.wl=j+r*f;b.wN=j+l*f;}}
let TP=(a,b,c)=>{let d,e,f;d=a.rH.data;e=b/512|0;f=d[e];if(f===null){f=Bf(Ka,512);d[e]=f;}f.data[b&511]=c;}
let QU=a=>{let b,c,d,e,f,g,h,i;b=a.rH.data;c=b.length;d=0;a:while(true){if(d>=c){e=new W;e.mZ=1;e.m0=1;e.m1=B(510);D(e);}k:{f=b[d];if(f!==null){f=f.data;g=f.length;h=0;while(true){if(h>=g)break k;i=f[h];if(i!==null&&i.pr&&i.oY)break a;h=h+1|0;}}}d=d+1|0;}return i;}
let Hm=(a,b)=>{let c;c=a.rH.data[b/512|0];if(c===null)return null;return c.data[b&511];}
let OI=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.t5;i=a.rj;j=b.nY;k=b.n_;ADu(j,g);ACp(b.n_,g+1|0);d:{while(true){g=d+1|0;if(d<0)break;if(d>=c.mX.length)break;n:{l=c.mX.charCodeAt(d);if(l!=13){m=a.rH.data[l/512|0];n=m===null?null:m.data[l&511];if(n===null){n=a.wR;if(n===null)break n;}CH(j,n);if(f===null)o=n.uB?0.0:( -n.pv|0)*i-a.vX;else{q:{d=f.rA;m=f.vo;if(m!==null){m=m.data[l>>>9|0];if(m!==null){p=m.data[l&511];break q;}}p=0;}o=(d+p|0)*i;}OH(k,o);if(!h)f=n;else if(l!=91)f=n;else if(g>=
e)f=n;else{if(g<0)break d;if(g>=c.mX.length)break d;if(c.mX.charCodeAt(g)!=91)f=n;else{g=g+1|0;f=n;}}}}if(g>=e){if(f!==null)OH(k,f.uB?f.rA*i:(f.oY+f.pv|0)*i-a.rI);return;}d=g;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let T_=(a,b,c)=>{let d,e,f,g,h,i;b:{d=c-1|0;e=b.ne.data;f=e[d].qN&65535;switch(f){case 9:case 10:case 13:case 32:break;default:c=0;break b;}c=1;}if(c)return d;k:{g=a.CB;if(g===null)c=0;else{h=g.data;c=h.length;i=0;while(i<c){if(f==h[i]){c=1;break k;}i=i+1|0;}c=0;}}if(c)d=d+(-1)|0;bf:{while(d>0){f:{c=e[d].qN&65535;switch(c){case 9:case 10:case 13:case 32:break;default:f=0;break f;}f=1;}if(f)break bf;h:{if(g===null)c=0;else{h=g.data;f=h.length;i=0;while(i<f){if(c==h[i]){c=1;break h;}i=i+1|0;}c=0;}}if(c)break bf;d
=d+(-1)|0;}return 0;}return d+1|0;}
let Ep=F(By);
let XD=null;let AG8=null;let AO9=null;let YC=null;let ATz=null;let PO=()=>{PO=X(Ep);AVq();}
let AVq=()=>{let b,c,d,e;b=new Ep;PO();b.m9=B(511);b.m6=0;XD=b;c=new Ep;c.m9=B(512);c.m6=1;AG8=c;d=new Ep;d.m9=B(513);d.m6=2;AO9=d;e=new Ep;e.m9=B(514);e.m6=3;YC=e;ATz=N(Ep,[b,c,d,e]);}
function Js(){let a=this;C.call(a);a.po=null;a.oC=null;a.u4=0;a.sX=0;a.tV=null;a.uv=0;a.Aj=null;}
let MB=null;let A5Z=(a,b,c,d,e)=>{let f=new Js();Tj(f,a,b,c,d,e);return f;}
let Tj=(a,b,c,d,e,f)=>{let g,h,i,j,k;b:{d:{a.u4=1;a.uv=0;g=new Bg;CP();a.Aj=g;A1B();switch(AP5.data[b.m6]){case 1:a.po=AON(c,d,f);b=new HR;b.qz=1;b.sy=0;b.w2=1;if(!Dn){h=K9(e);e=h.data.length;f=new J5;i=0+e|0;CI(f);f.nd=(-1);f.ni=e;f.m2=e;f.m3=0;f.m2=i;f.ui=0;f.uM=0;f.tR=h;}else{d=e*2|0;if(d<0){b=new Bc;f=new I;f.mY=H(16);CZ(f,f.mW,C1(B(515)));J(f,f.mW,d,10);g=new M;h=f.mY;j=h.data;d=f.mW;e=j.length;if(d>=0&&d<=(e-0|0)){g.mX=O(h.data,0,d);b.mZ=1;b.m0=1;b.m1=g;D(b);}b=new L;Kz(b);D(b);}f=new Cm;h=Bz(d);f.nd=
(-1);f.ni=d;f.m2=d;B5();f.nE=B8;f.nM=0;f.nC=h;f.m3=0;f.m2=d;f.og=1;f.nR=0;f.nE=Da();f=Kg(f);}b.qb=f;f.m2=f.m3;f.m3=0;f.nd=(-1);f=Bp;g=f.m4.createBuffer();e=f.o5;f.o5=e+1|0;Ch(f.pD,e,Co(g));b.u1=e;b.t4=!c?35048:35044;a.oC=b;a.sX=0;break b;case 2:break;case 3:a.po=AN1(c,d,f);a.oC=AWy(c,e);a.sX=0;break b;case 4:break d;default:break d;}a.po=A3n(c,d,f);a.oC=AWy(c,e);a.sX=0;break b;}b=new N_;AAF(b,0,d,f);a.po=b;b=new Pc;b.qz=1;b.sy=0;b.w2=1;if(!Dn){h=K9(e);d=h.data.length;f=new J5;k=0+d|0;SH(f,d);f.m3=0;f.m2=k;f.ui
=0;f.uM=0;f.tR=h;}else{c=e*2|0;if(c<0){b=new Bc;f=new I;FS(f);Lx(f,B(515));Ei(f,c);AE8(b,Cr(f));D(b);}g=new Cm;h=Bz(c);CI(g);g.nd=(-1);g.ni=c;g.m2=c;B5();g.nE=B8;g.nM=0;g.nC=h;g.m3=0;g.m2=c;g.og=1;g.nR=0;So(g,Da());f=Kg(g);}b.qb=f;ADV(f);b.u1=YD(Bp);b.t4=35044;a.oC=b;a.sX=1;}Zc(Eb,a);}
let V1=(a,b)=>{let c;c=b.data;a.oC.jX(b,0,c.length);return a;}
let QY=(a,b,c,d,e,f)=>{let g,h,i,j;if(!e)return;if(f){g=null;h=null;a.po.jY(b,g);g=a.tV;if(g!==null&&g.jZ()>0)a.tV.jY(b,h);if(a.oC.j0()>0)a.oC.iG();}if(a.sX){if(a.oC.j0()<=0)Bp.j1(c,d,e);else{g=a.oC.iN(0);i=g.m3;BW(g,d);Bp.j2(c,e,5123,g);BW(g,i);}}else{j=0;if(a.uv)j=a.tV.jZ();if(a.oC.j0()<=0){if(a.uv&&j>0)Ga.j3(c,d,e,j);else Bp.j1(c,d,e);}else{if((e+d|0)>a.oC.j4()){b=new W;g=new I;g.mY=H(16);G(g,g.mW,B(516));J(g,g.mW,e,10);G(g,g.mW,B(517));J(g,g.mW,d,10);G(g,g.mW,B(518));c=a.oC.j4();J(g,g.mW,c,10);G(g,g.mW,
B(519));g=U(g);b.mZ=1;b.m0=1;b.m1=g;D(b);}if(a.uv&&j>0)Ga.j5(c,e,5123,d*2|0,j);else Bp.j6(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.po.j7(b,g);g=a.tV;if(g!==null&&g.jZ()>0)a.tV.j7(b,h);if(a.oC.j0()>0)a.oC.j8();}}
let GO=(a,b)=>{let c,d,e;c=(a.po.j9()).oT.data;d=c.length;e=0;while(e<d){if(c[e].p1==b)return c[e];e=e+1|0;}return null;}
let We=a=>{return a.po.j9();}
let Zc=(b,c)=>{let d,e,f,g,h;d=MB;if(b===null){d=d.oQ.data[0];while(d!==null&&d.pc!==null){d=d.pm;}}else{e=b;if(!e.$id$){f=EL();e.$id$=f;}g=b.$id$;h=d.oQ.data;d=h[g&(h.length-1|0)];while(d!==null){if(d.q7==g){f=d.pc;if(b!==f&&!(b!==f?0:1)?0:1)break;}d=d.pm;}}d=d===null?null:d.pL;if(d===null){d=new B7;d.nZ=1;d.ne=Bf(C,16);}CH(d,c);J1(MB,b,d);}
let AEO=()=>{let b,c,d,e;b=new Jh;c=J8(16);b.qH=0;d=Bf(Fz,c);e=d.data;b.oQ=d;b.uH=0.75;b.rG=e.length*0.75|0;MB=b;}
function Eo(){let a=this;C.call(a);a.ni=0;a.m3=0;a.m2=0;a.nd=0;}
let SH=(a,b)=>{a.nd=(-1);a.ni=b;a.m2=b;}
let AKA=a=>{return a.ni;}
let AQT=a=>{return a.m3;}
let BW=(a,b)=>{let c,d,e;if(b>=0&&b<=a.m2){a.m3=b;if(b<a.nd)a.nd=0;return a;}c=new Bc;d=a.m2;e=new I;e.mY=H(16);G(e,e.mW,B(520));J(e,e.mW,b,10);G(e,e.mW,B(521));J(e,e.mW,d,10);d=e.mW;Bb(e,d,d+1|0);e.mY.data[d]=93;e=U(e);c.mZ=1;c.m0=1;c.m1=e;D(c);}
let AUn=a=>{return a.m2;}
let CE=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.ni){if(a.nd>b)a.nd=(-1);a.m2=b;if(a.m3>b)a.m3=b;return a;}c=new Bc;d=a.ni;e=new I;e.mY=H(16);G(e,e.mW,B(522));J(e,e.mW,b,10);G(e,e.mW,B(521));J(e,e.mW,d,10);d=e.mW;Bb(e,d,d+1|0);f=e.mY;g=f.data;g[d]=93;h=new M;d=e.mW;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.mX=O(f.data,0,d);c.mZ=1;c.m0=1;c.m1=h;D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let AUv=a=>{return a.m2-a.m3|0;}
let LM=F(0);
let LZ=F(Eo);
let NZ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new L;i=new I;i.mY=H(16);G(i,i.mW,B(523));J(i,i.mW,g,10);G(i,i.mW,B(524));J(i,i.mW,f,10);i=U(i);h.mZ=1;h.m0=1;h.m1=i;D(h);}f=a.m2;j=a.m3;if((f-j|0)<d){h=new Id;h.mZ=1;h.m0=1;D(h);}if(d>=0){g=0;k=j;while(g<d){l=c+1|0;f=k+1|0;e[c]=a.rK.data[k+a.r3|0];g=g+1|0;c=l;k=f;}a.m3=j+d|0;return a;}h=new L;i=new I;i.mY=H(16);G(i,i.mW,B(525));J(i,i.mW,d,10);G(i,i.mW,B(526));i=U(i);h.mZ=1;h.m0=1;h.m1=i;D(h);}}b=b.data;h=new L;d=
b.length;i=new I;i.mY=H(16);G(i,i.mW,B(527));J(i,i.mW,c,10);G(i,i.mW,B(521));J(i,i.mW,d,10);d=i.mW;Bb(i,d,d+1|0);i.mY.data[d]=41;i=U(i);h.mZ=1;h.m0=1;h.m1=i;D(h);}
let AEZ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.tb){e=new D9;e.mZ=1;e.m0=1;D(e);}f=a.m2;g=a.m3;if((f-g|0)<d){e=new F1;e.mZ=1;e.m0=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new L;j=new I;j.mY=H(16);G(j,j.mW,B(528));J(j,j.mW,i,10);G(j,j.mW,B(524));J(j,j.mW,f,10);j=U(j);e.mZ=1;e.m0=1;e.m1=j;D(e);}if(d>=0){i=0;k=g;while(i<d){l=k+1|0;f=c+1|0;a.rK.data[k+a.r3|0]=h[c];i=i+1|0;k=l;c=f;}a.m3=g+d|0;return a;}e=new L;j=new I;j.mY=H(16);G(j,j.mW,B(525));J(j,j.mW,d,10);G(j,j.mW,B(526));j=U(j);e.mZ=1;e.m0
=1;e.m1=j;D(e);}}b=b.data;e=new L;d=b.length;j=new I;j.mY=H(16);G(j,j.mW,B(527));J(j,j.mW,c,10);G(j,j.mW,B(521));J(j,j.mW,d,10);d=j.mW;Bb(j,d,d+1|0);j.mY.data[d]=41;j=U(j);e.mZ=1;e.m0=1;e.m1=j;D(e);}
let KN=(a,b,c,d)=>{let e,f,g,h,i;if(a.tb){b=new D9;b.mZ=1;b.m0=1;D(b);}e=d-c|0;if((a.m2-a.m3|0)<e){b=new F1;b.mZ=1;b.m0=1;D(b);}if(c>=0&&c<=b.mX.length){if(d>b.mX.length){f=new L;g=b.mX.length;b=new I;b.mY=H(16);G(b,b.mW,B(528));J(b,b.mW,d,10);G(b,b.mW,B(529));J(b,b.mW,g,10);b=U(b);f.mZ=1;f.m0=1;f.m1=b;D(f);}if(c<=d){h=a.m3;o:{while(c<d){i=h+1|0;g=c+1|0;if(c<0)break o;if(c>=b.mX.length)break o;a.rK.data[h+a.r3|0]=b.mX.charCodeAt(c);h=i;c=g;}a.m3=a.m3+e|0;return a;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new L;f=new I;f.mY
=H(16);G(f,f.mW,B(530));J(f,f.mW,c,10);G(f,f.mW,B(531));J(f,f.mW,d,10);f=U(f);b.mZ=1;b.m0=1;b.m1=f;D(b);}f=new L;e=b.mX.length;b=new I;b.mY=H(16);G(b,b.mW,B(530));J(b,b.mW,c,10);G(b,b.mW,B(521));J(b,b.mW,e,10);d=b.mW;Bb(b,d,d+1|0);b.mY.data[d]=41;b=U(b);f.mZ=1;f.m0=1;f.m1=b;D(f);}
function Fn(){let a=this;Eo.call(a);a.nM=0;a.nC=null;a.nE=null;}
let O2=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new L;i=new I;i.mY=H(16);G(i,i.mW,B(532));J(i,i.mW,g,10);G(i,i.mW,B(524));J(i,i.mW,f,10);i=U(i);h.mZ=1;h.m0=1;h.m1=i;D(h);}f=a.m2;j=a.m3;if((f-j|0)<d){h=new Id;h.mZ=1;h.m0=1;D(h);}if(d>=0){g=j+a.nM|0;k=0;while(k<d){l=c+1|0;b=a.nC.data;f=g+1|0;e[c]=b[g];k=k+1|0;c=l;g=f;}a.m3=j+d|0;return a;}h=new L;i=new I;i.mY=H(16);G(i,i.mW,B(525));J(i,i.mW,d,10);G(i,i.mW,B(526));i=U(i);h.mZ=1;h.m0=1;h.m1=i;D(h);}}b=b.data;h=new L;g
=b.length;i=new I;i.mY=H(16);G(i,i.mW,B(527));J(i,i.mW,c,10);G(i,i.mW,B(521));J(i,i.mW,g,10);f=i.mW;Bb(i,f,f+1|0);i.mY.data[f]=41;i=U(i);h.mZ=1;h.m0=1;h.m1=i;D(h);}
let Tf=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.nR){e=new D9;e.mZ=1;e.m0=1;D(e);}f=a.m2;g=a.m3;if((f-g|0)<d){e=new F1;e.mZ=1;e.m0=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=g+a.nM|0;j=0;while(j<d){b=a.nC.data;k=i+1|0;f=c+1|0;b[i]=h[c];j=j+1|0;i=k;c=f;}a.m3=g+d|0;return a;}e=new L;l=new I;l.mY=H(16);G(l,l.mW,B(525));J(l,l.mW,d,10);DM(l,l.mW,B(526));Ja(e,U(l));D(e);}e=new L;l=new I;l.mY=H(16);G(l,l.mW,B(533));J(l,l.mW,i,10);G(l,l.mW,B(524));J(l,l.mW,f,10);m=new M;b=
l.mY;h=b.data;d=l.mW;P();f=h.length;if(d>=0&&d<=(f-0|0)){m.mX=O(b.data,0,d);e.mZ=1;e.m0=1;e.m1=m;D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}}b=b.data;e=new L;d=b.length;l=new I;l.mY=H(16);G(l,l.mW,B(527));J(l,l.mW,c,10);G(l,l.mW,B(521));J(l,l.mW,d,10);d=l.mW;Bb(l,d,d+1|0);b=l.mY;h=b.data;h[d]=41;m=new M;d=l.mW;P();f=h.length;if(d>=0&&d<=(f-0|0)){m.mX=O(b.data,0,d);e.mZ=1;e.m0=1;e.m1=m;D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}
let So=(a,b)=>{a.nE=b;return a;}
let ADs=a=>{a.m2=a.m3;a.m3=0;a.nd=(-1);return a;}
let ARA=(a,b)=>{CE(a,b);return a;}
let AGB=(a,b)=>{BW(a,b);return a;}
function FW(){C.call(this);this.x4=null;}
let AUe=null;let EH=null;let FN=null;let D4=()=>{D4=X(FW);APo();}
let APo=()=>{let b;b=new FW;D4();b.x4=B(534);AUe=b;b=new FW;b.x4=B(535);EH=b;b=new FW;b.x4=B(536);FN=b;}
let MG=F(0);
let S2=F(0);
function Oc(){let a=this;C.call(a);a.Bh=null;a.AE=null;a.Co=0;a.CX=0;}
let ASa=a=>{let b,c;if(!a.Co){b=a.Bh;b.y9=null;CJ();if(BV!==b)BV=b;BV.q3=Fa();c=a.AE;b=null;c.r$.e(b);}}
function Ka(){let a=this;C.call(a);a.qN=0;a.yN=0;a.yO=0;a.oY=0;a.pr=0;a.yu=0.0;a.wl=0.0;a.yU=0.0;a.wN=0.0;a.pv=0;a.tc=0;a.rA=0;a.vo=null;a.uB=0;a.s1=0;}
let AId=()=>{let a=new Ka();ATM(a);return a;}
let ATM=a=>{a.s1=0;}
let ABJ=(a,b,c)=>{let d,e,f;if(a.vo===null)a.vo=Bf(Lz(A2n),128);d=a.vo.data;e=b>>>9|0;f=d[e];if(f===null){f=Bz(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
let AMh=a=>{let b,c,d,e;b=a.qN&65535;c=new M;d=H(1);e=d.data;e[0]=b;P();c.mX=O(d.data,0,e.length);return c;}
function VE(){let a=this;C.call(a);a.oT=null;a.pd=0;a.BD=Bi;a.Cm=0;a.CL=0;}
let AMe=a=>{let b=new VE();APy(b,a);return b;}
let APy=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.BD=K(-1);a.Cm=(-1);a.CL=(-1);c=b.length;if(!c){d=new Bc;d.mZ=1;d.m0=1;d.m1=B(537);D(d);}e=Bf(DY,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.oT=e;c=0;h=0;while(h<f.length){k:{o:{d=f[h];d.qi=c;switch(d.o8){case 5120:case 5121:break;case 5122:case 5123:g=2*d.oJ|0;break k;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break o;case 5126:case 5132:g=4*d.oJ|0;break k;default:break o;}g=d.oJ;break k;}g=0;}c=c+g|0;h=h+1|0;}a.pd=c;}
function GK(){let a=this;C.call(a);a.oO=null;a.o3=0;a.uJ=null;a.zv=null;a.Ah=null;a.zN=null;a.p9=null;a.zL=null;a.At=null;a.zc=null;a.oK=0;a.w3=0;a.yw=0;a.C6=null;a.ol=null;a.op=null;a.nG=0;a.CV=0;a.pC=null;a.tm=null;}
let L9=0;let ADT=null;let ZC=null;let ADj=null;let A2t=null;let TR=()=>{TR=X(GK);ASs();}
let Lh=(a,b)=>{let c=new GK();AEL(c,a,b);return c;}
let AEL=(a,b,c)=>{let d,e,f,g,h;TR();a.oO=B(43);a.uJ=Jg(51,0.800000011920929);a.zv=Jg(51,0.800000011920929);a.Ah=Jg(51,0.800000011920929);a.p9=Jg(51,0.800000011920929);a.zL=Jg(51,0.800000011920929);a.At=Jg(51,0.800000011920929);a.CV=0;if(!Dn){d=Q(1);e=d.data.length;f=new GE;g=0+e|0;f.nd=(-1);f.ni=e;f.m2=e;f.m3=0;f.m2=g;f.rU=0;f.s_=0;f.rv=d;}else{h=new Cm;d=Bz(4);h.nd=(-1);h.ni=4;h.m2=4;B5();h.nE=B8;h.nM=0;h.nC=d;h.m3=0;h.m2=4;h.og=1;h.nR=0;h.nE=Da();f=G2(h);}a.pC=f;if(!Dn){d=Q(1);e=d.data.length;f=new GE;g=
0+e|0;f.nd=(-1);f.ni=e;f.m2=e;f.m3=0;f.m2=g;f.rU=0;f.s_=0;f.rv=d;}else{h=new Cm;d=Bz(4);h.nd=(-1);h.ni=4;h.m2=4;B5();h.nE=B8;h.nM=0;h.nC=d;h.m3=0;h.m2=4;h.og=1;h.nR=0;So(h,Da());f=G2(h);}a.tm=f;if(b===null)D(AO1(B(538)));if(c===null)D(AO1(B(539)));f=ADT;if(f!==null&&ES(f)>0)b=Cr(BF(BF(EE(),ADT),b));f=ZC;if(f!==null&&ES(f)>0)c=Cr(BF(BF(EE(),ZC),c));a.ol=b;a.op=c;a.C6=AQh(16);Cy(a,b,c);if(ADR(a)){Xe(a);Z7(a);ABq(a,Eb,a);}}
let Cy=(a,b,c)=>{let d;a.w3=TZ(a,35633,b);d=TZ(a,35632,c);a.yw=d;if(a.w3!=(-1)&&d!=(-1)){d=Bp.kf();if(!d)d=(-1);d=ADg(a,d);a.oK=d;if(d!=(-1)){a.o3=1;return;}a.o3=0;return;}a.o3=0;}
let TZ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bp;if(!Dn){e=Q(1);f=e.data.length;g=new GE;h=0+f|0;g.nd=(-1);g.ni=f;g.m2=f;g.m3=0;g.m2=h;g.rU=0;g.s_=0;g.rv=e;}else{g=new Cm;e=Bz(4);g.nd=(-1);g.ni=4;g.m2=4;B5();g.nE=B8;g.nM=0;g.nC=e;g.m3=0;g.m2=4;g.og=1;g.nR=0;g.nE=Da();g=G2(g);}i=d.kh(b);if(!i)return (-1);d.ki(i,c);d.kj(i);d.fw(i,35713,g);if(Fw(g,0))return i;j=d.kk(i);c=new I;c.mY=H(16);d=a.oO;G(c,c.mW,d);d=b!=35633?B(540):B(541);G(c,c.mW,d);d=new M;e=c.mY;k=e.data;i=c.mW;P();l=k.length;if(i>=0&&i<=(l-0|0)){d.mX=O(e.data,
0,i);a.oO=d;c=new I;c.mY=H(16);G(c,c.mW,d);G(c,c.mW,j);d=new M;e=c.mY;k=e.data;i=c.mW;l=k.length;if(i>=0&&i<=(l-0|0)){d.mX=O(e.data,0,i);a.oO=d;return (-1);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let ADg=(a,b)=>{let c,d,e,f;c=Bp;if(b==(-1))return (-1);c.kl(b,a.w3);c.kl(b,a.yw);c.km(b);d=new Cm;e=Bz(4);d.nd=(-1);d.ni=4;d.m2=4;B5();d.nE=B8;d.nM=0;d.nC=e;d.m3=0;d.m2=4;d.og=1;d.nR=0;d.nE=Da();f=G2(d);c.fv(b,35714,f);if(Fw(f,0))return b;a.oO=Bp.iE(b);return (-1);}
let ADR=a=>{return a.o3;}
let Jo=(a,b,c)=>{let d,e,f,g,h,i;d=a.uJ;e=(-2);f=Fo(d,b);if(f>=0)e=d.pp.data[f];if(e==(-2)){e=Bp.kn(a.oK,b);if(e==(-1)&&c){if(a.o3){d=new Bc;g=new I;g.mY=H(16);G(g,g.mW,B(542));G(g,g.mW,b);G(g,g.mW,B(543));b=new M;h=g.mY;i=h.data;e=g.mW;P();f=i.length;if(e>=0&&e<=(f-0|0)){b.mX=O(h.data,0,e);d.mZ=1;d.m0=1;d.m1=b;D(d);}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}b=new BK;d=new I;d.mY=H(16);G(d,d.mW,B(544));if(!a.o3)g=a.oO;else{g=Bp.iE(a.oK);a.oO=g;}G(d,d.mW,g);g=new M;h=d.mY;i=h.data;e=d.mW;P();f=i.length;if(e>=0&&e<=(f
-0|0)){g.mX=O(h.data,0,e);b.mZ=1;b.m0=1;b.m1=g;D(b);}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}Fb(a.uJ,b,e);}return e;}
let AEC=(a,b,c,d,e,f,g)=>{let h;h=Bp;if(a.nG){Cy(a,a.ol,a.op);a.nG=0;}h.kp(b,c,d,e,f,g);}
let ABG=(a,b)=>{let c;c=Bp;if(a.nG){Cy(a,a.ol,a.op);a.nG=0;}c.kq(b);}
let ABq=(a,b,c)=>{let d,e;TR();d=ADj;e=CF(d,b);d=e<0?null:d.oE.data[e];if(d===null){d=new B7;d.nZ=1;d.ne=Bf(C,16);}CH(d,c);BE(ADj,b,d);}
let Z7=a=>{let b,c,d,e,f;b=a.pC;b.m3=0;b.m2=b.ni;b.nd=(-1);Bp.fv(a.oK,35718,b);c=Fw(a.pC,0);a.zN=Bf(M,c);d=0;while(d<c){b=a.pC;b.m3=0;b.m2=b.ni;b.nd=(-1);S5(b,0,1);b=a.tm;b.m3=0;b.m2=b.ni;b.nd=(-1);e=Bp.fu(a.oK,d,a.pC,b);f=Bp.kn(a.oK,e);Fb(a.uJ,e,f);Fb(a.zv,e,Fw(a.tm,0));Fb(a.Ah,e,Fw(a.pC,0));a.zN.data[d]=e;d=d+1|0;}}
let Xe=a=>{let b,c,d,e,f;b=a.pC;b.m3=0;b.m2=b.ni;b.nd=(-1);Bp.fv(a.oK,35721,b);c=Fw(a.pC,0);a.zc=Bf(M,c);d=0;while(d<c){b=a.pC;b.m3=0;b.m2=b.ni;b.nd=(-1);S5(b,0,1);b=a.tm;b.m3=0;b.m2=b.ni;b.nd=(-1);e=Bp.ft(a.oK,d,a.pC,b);f=Bp.ks(a.oK,e);Fb(a.p9,e,f);Fb(a.zL,e,Fw(a.tm,0));Fb(a.At,e,Fw(a.pC,0));a.zc.data[d]=e;d=d+1|0;}}
let ASs=()=>{let b,c,d,e;L9=1;ADT=B(43);ZC=B(43);ADj=Fi(51,0.800000011920929);if(!Dn){b=Q(1);c=b.data.length;d=new GE;e=0+c|0;d.nd=(-1);d.ni=c;d.m2=c;d.m3=0;d.m2=e;d.rU=0;d.s_=0;d.rv=b;}else{d=new Cm;b=Bz(4);d.nd=(-1);d.ni=4;d.m2=4;B5();d.nE=B8;d.nM=0;d.nC=b;d.m3=0;d.m2=4;d.og=1;d.nR=0;d.nE=Da();d=G2(d);}A2t=d;}
let K6=F(LZ);
let U5=a=>{let b,c,d,e,f,g,h,i;if(a.tb){b=new D9;b.mZ=1;b.m0=1;D(b);}a:{c=a.m2;d=a.m3;e=c-d|0;if(d>0){f=0;while(true){if(f>=e)break a;c=d+1|0;g=a.rK.data;h=a.r3;i=g[d+h|0];g[f+h|0]=i;f=f+1|0;d=c;}}}a.m3=e;a.m2=a.ni;a.nd=(-1);return a;}
function I_(){let a=this;K6.call(a);a.tb=0;a.r3=0;a.rK=null;}
function LO(){let a=this;C.call(a);a.uT=null;a.tS=null;a.ua=0.0;a.qC=0.0;a.rZ=null;a.rJ=null;a.sx=0;}
let QF=(a,b)=>{let c;if(b!==null){a.rZ=b;return a;}c=new Bc;c.mZ=1;c.m0=1;c.m1=B(465);D(c);}
let AWb=(a,b)=>{return;}
let Tv=(a,b)=>{let c;if(b!==null){a.rJ=b;return a;}c=new Bc;c.mZ=1;c.m0=1;c.m1=B(465);D(c);}
let AM6=(a,b)=>{return;}
let KM=(a,b,c,d)=>{let e,f,g,h,i,j,k,$$je;b:{e=a.sx;if(e!=3){if(d)break b;if(e!=2)break b;}b=new BK;b.mZ=1;b.m0=1;D(b);}a.sx=!d?1:2;while(true){try{f=Vl(a,b,c);}catch($$e){$$je=Bx($$e);if($$je instanceof BC){g=$$je;b=new L$;b.mZ=1;b.m0=1;b.oy=g;D(b);}else{throw $$e;}}e=f.nI;if(e?0:1){if(!d)return f;e=b.m2-b.m3|0;if(e<=0)return f;f=new Cc;f.nI=2;f.nU=e;}else if(e!=1?0:1)break;h=!(f.nI!=3?0:1)?a.rZ:a.rJ;p:{D4();if(h!==EH){if(h===AUe)break p;else return f;}i=c.m2-c.m3|0;j=a.tS;e=j.data.length;if(i<e)return C2;Tf(c,
j,0,e);}k=b.m3;e=f.nI;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new GD;b.mZ=1;b.m0=1;D(b);}BW(b,k+f.nU|0);}return f;}
let Pk=(a,b)=>{let c,d,e,f,g,h,i;c=b.m2-b.m3|0;if(!c){b=new Cm;d=Bz(0);b.nd=(-1);b.ni=0;b.m2=0;B5();b.nE=B8;b.nM=0;b.nC=d;b.m3=0;b.m2=0;b.og=0;b.nR=0;return b;}a.sx=0;e=c*a.ua|0;if(e<0){b=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(515));J(f,f.mW,e,10);g=new M;d=f.mY;h=d.data;c=f.mW;P();i=h.length;if(c>=0&&c<=(i-0|0)){g.mX=O(d.data,0,c);b.mZ=1;b.m0=1;b.m1=g;D(b);}b=new L;Z(b);D(b);}f=new Cm;d=Bz(e);f.nd=(-1);f.ni=e;f.m2=e;B5();f.nE=B8;f.nM=0;f.nC=d;f.m3=0;f.m2=e;f.og=0;f.nR=0;while(true){g=KM(a,b,f,0);if(g===Dc)break;if
(g===C2){f=N2(a,f);continue;}if(!Zs(g))continue;ACz(g);}b=KM(a,b,f,1);c=b.nI;e=c!=2?0:1;e=!e&&!(c!=3?0:1)?0:1;q:{if(e){switch(c){case 0:b=new Lg;b.mZ=1;b.m0=1;D(b);case 1:b=new MV;b.mZ=1;b.m0=1;D(b);case 2:f=new Ms;e=b.nU;Z(f);f.yf=e;D(f);case 3:break;default:break q;}f=new Ld;e=b.nU;Dt(f);f.ya=e;D(f);}}while(true){b=Nv(a,f);if(b.nI?0:1)break;if(!ADL(b))continue;f=N2(a,f);}ADs(f);return f;}
let N2=(a,b)=>{let c,d,e,f,g,h,i;c=b.nC.data;d=c.length;e=d*2|0;f=Bz(e);if(e<d)d=e;g=f.data;e=0;while(e<d){g[e]=c[e];e=e+1|0;}d=g.length;if(d>=0&&d<=(d-0|0)){h=new Cm;i=0+d|0;h.nd=(-1);h.ni=d;h.m2=d;B5();h.nE=B8;h.nM=0;h.nC=f;h.m3=0;h.m2=i;h.og=0;h.nR=0;BW(h,b.m3);return h;}b=new L;b.mZ=1;b.m0=1;D(b);}
let Nv=(a,b)=>{let c,d;c=a.sx;if(c!=2&&c!=4){b=new BK;b.mZ=1;b.m0=1;D(b);}d=Dc;if(d===d)a.sx=3;return d;}
let APp=(a,b)=>{return Dc;}
let AF3=a=>{a.sx=0;return a;}
let AQ3=a=>{return;}
function Cc(){let a=this;C.call(a);a.nI=0;a.nU=0;}
let Dc=null;let C2=null;let AYa=(a,b)=>{let c=new Cc();Wl(c,a,b);return c;}
let Wl=(a,b,c)=>{a.nI=b;a.nU=c;}
let ADL=a=>{return a.nI!=1?0:1;}
let Zs=a=>{let b,c;b=a.nI;c=b!=2?0:1;return !c&&!(b!=3?0:1)?0:1;}
let ABg=b=>{let c;c=new Cc;c.nI=2;c.nU=b;return c;}
let ACz=a=>{let b,c;switch(a.nI){case 0:b=new Lg;b.mZ=1;b.m0=1;D(b);case 1:b=new MV;b.mZ=1;b.m0=1;D(b);case 2:b=new Ms;c=a.nU;b.mZ=1;b.m0=1;b.yf=c;D(b);case 3:b=new Ld;c=a.nU;b.mZ=1;b.m0=1;b.ya=c;D(b);default:}}
let AKF=()=>{let b;b=new Cc;b.nI=0;b.nU=0;Dc=b;b=new Cc;b.nI=1;b.nU=0;C2=b;}
function Sp(){let a=this;C.call(a);a.w9=0;a.wS=0;a.yP=0;}
let TY=F();
let AP5=null;let A1B=()=>{A1B=X(TY);ASY();}
let ASY=()=>{let b,c;PO();b=Q((ATz.s()).data.length);c=b.data;AP5=b;c[AG8.m6]=1;c[AO9.m6]=2;c[YC.m6]=3;c[XD.m6]=4;}
let Jy=F(0);
function LE(){let a=this;C.call(a);a.p_=null;a.r4=null;a.zV=0;a.C1=0;a.xg=0;a.uo=0;a.uS=0;}
let AON=(a,b,c)=>{let d=new LE();AAF(d,a,b,c);return d;}
let AAF=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.uo=0;a.uS=0;a.C1=b;a.p_=d;c=Cj(d.pd/4|0,c);if(!Dn){e=B9(c);f=e.data.length;d=new Ig;g=0+f|0;d.nd=(-1);d.ni=f;d.m2=f;d.m3=0;d.m2=g;d.s9=0;d.tZ=0;d.sB=e;}else{c=c*4|0;if(c<0){d=new Bc;h=new I;h.mY=H(16);F6(h,h.mW,B(515));J(h,h.mW,c,10);i=new M;e=h.mY;j=e.data;c=h.mW;P();k=j.length;if(c>=0&&c<=(k-0|0)){i.mX=O(e.data,0,c);d.mZ=1;d.m0=1;d.m1=i;D(d);}d=new L;Dt(d);D(d);}h=new Cm;e=Bz(c);h.nd=(-1);h.ni=c;h.m2=c;B5();h.nE=B8;h.nM=0;h.nC=e;h.m3=0;h.m2=c;h.og=1;h.nR=0;h.nE=Da();d
=FA(h);}a.r4=d;d.m2=d.m3;d.m3=0;d.nd=(-1);d=Bp;h=d.m4.createBuffer();k=d.o5;d.o5=k+1|0;Ch(d.pD,k,Co(h));a.zV=k;a.xg=!b?35048:35044;}
let ALH=a=>{return a.p_;}
let ASz=a=>{return a.r4.m2/(a.p_.pd/4|0)|0;}
let AQL=(a,b,c,d)=>{let e,f,g;a.uo=1;e=a.r4;f=null;g=e instanceof Fn;if(g)f=FA(e);else if(e instanceof EC)f=e;if(f===null){f=new W;f.mZ=1;f.m0=1;f.m1=B(545);D(f);}f.m3=0;f.m2=f.ni;f.nd=(-1);BW(e,0);Jv(f,b,c,d);BW(e,0);if(!g)CE(e,d);else CE(e,d<<2);BW(a.r4,0);CE(a.r4,d);if(a.uS){e=Bp;f=a.r4;e.fr(34962,f.m2,f,a.xg);a.uo=0;}}
let AKZ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bp;d.kB(34962,a.zV);if(a.uo){e=a.r4;d.fr(34962,e.m2,e,a.xg);a.uo=0;}a:{f=a.p_.oT.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.p_.oT.data[g];j=h[g];if(j>=0){e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}e.kq(j);k=i.oJ;l=i.o8;m=i.pa;n=a.p_.pd;o=i.qi;e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}e.kp(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.p_.oT.data[g];d=i.o2;e=b.p9;p=(-1);j=Fo(e,d);if(j>=0)p=e.pp.data[j];if(p>=0){e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG
=0;}e.kq(p);j=i.oJ;k=i.o8;l=i.pa;m=a.p_.pd;n=i.qi;e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}e.kp(p,j,k,l,m,n);}g=g+1|0;}}a.uS=1;}
let AHp=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bp;e=a.p_.oT.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}h.kC(g);}f=f+1|0;}}i=0;while(i<e){j=a.p_.oT.data[i].o2;k=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}l=Bp;h=b.p9;g=(-2);f=Fo(h,j);if(f>=0)g=h.pp.data[f];if(g==(-2)){g=l.ks(b.oK,j);Fb(b.p9,j,g);}if(g!=(-1))k.kC(g);i=i+1|0;}}d.kB(34962,0);a.uS=0;}
let KC=F(0);
function HR(){let a=this;C.call(a);a.qb=null;a.u1=0;a.w2=0;a.qz=0;a.sy=0;a.t4=0;}
let AMM=a=>{return a.qb.m2;}
let AGs=a=>{return a.qb.ni;}
let AQo=(a,b,c,d)=>{let e;a.qz=1;e=a.qb;e.m3=0;e.m2=e.ni;e.nd=(-1);SX(e,b,c,d);e=a.qb;c=e.m3;e.m2=c;e.m3=0;e.nd=(-1);if(a.sy){Bp.fr(34963,c,e,a.t4);a.qz=0;}}
let AG$=(a,b)=>{a.qz=a.qz|b;return a.qb;}
let AVm=a=>{let b,c,d;b=a.u1;if(!b){c=new W;c.mZ=1;c.m0=1;c.m1=B(546);D(c);}Bp.kB(34963,b);if(a.qz){c=Bp;d=a.qb;c.fr(34963,d.m2,d,a.t4);a.qz=0;}a.sy=1;}
let ASP=a=>{Bp.kB(34963,0);a.sy=0;}
function VY(){let a=this;C.call(a);a.p5=null;a.qh=null;a.qy=null;a.yB=0;a.yQ=0;a.Bx=0;a.wB=0;a.t7=0;a.u6=0;}
let A3n=(a,b,c)=>{let d=new VY();APE(d,a,b,c);return d;}
let APE=(a,b,c,d)=>{let e,f,g,h,i,j,k;b:{a.t7=0;a.u6=0;a.Bx=b;a.p5=d;c=Cj(d.pd,c);if(!Dn){e=Bz(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new Cm;g=0+f|0;d.nd=(-1);d.ni=f;d.m2=f;B5();d.nE=B8;d.nM=0;d.nC=e;d.m3=0;d.m2=g;d.og=0;d.nR=0;break b;}d=new L;d.mZ=1;d.m0=1;Bd(d);D(d);}if(c<0){d=new Bc;h=new I;h.mY=H(16);F6(h,h.mW,B(515));J(h,h.mW,c,10);i=new M;e=h.mY;j=e.data;c=h.mW;P();k=j.length;if(c>=0&&c<=(k-0|0)){i.mX=O(e.data,0,c);d.mZ=1;d.m0=1;d.m1=i;D(d);}d=new L;Dt(d);D(d);}d=new Cm;e=Bz(c);d.nd=(-1);d.ni=c;d.m2
=c;B5();d.nE=B8;d.nM=0;d.nC=e;d.m3=0;d.m2=c;d.og=1;d.nR=0;d.nE=Da();}a.qy=d;a.yQ=1;a.wB=!b?35048:35044;a.qh=FA(d);d=Bp;h=d.m4.createBuffer();f=d.o5;d.o5=f+1|0;Ch(d.pD,f,Co(h));Bp.kB(34962,f);Bp.fr(34962,a.qy.ni,null,a.wB);Bp.kB(34962,0);a.yB=f;d=a.qh;d.m2=d.m3;d.m3=0;d.nd=(-1);d=a.qy;d.m2=d.m3;d.m3=0;d.nd=(-1);}
let AIO=a=>{return a.p5;}
let AJP=a=>{return (a.qh.m2*4|0)/a.p5.pd|0;}
let AHT=(a,b,c,d)=>{let e,f,g;a.t7=1;if(!a.yQ){e=a.qh;e.m3=0;e.m2=e.ni;e.nd=(-1);Jv(e,b,c,d);e=a.qh;e.m2=e.m3;e.m3=0;e.nd=(-1);BW(a.qy,0);CE(a.qy,a.qh.m2<<2);}else{e=a.qy;f=null;g=e instanceof Fn;if(g)f=FA(e);else if(e instanceof EC)f=e;if(f===null){f=new W;f.mZ=1;f.m0=1;f.m1=B(545);D(f);}f.m3=0;f.m2=f.ni;f.nd=(-1);BW(e,0);Jv(f,b,c,d);BW(e,0);if(!g)CE(e,d);else CE(e,d<<2);BW(a.qh,0);CE(a.qh,d);}if(a.u6){e=Bp;f=a.qy;e.fs(34962,0,f.m2,f);a.t7=0;}}
let AQb=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bp;d.kB(34962,a.yB);if(a.t7){CE(a.qy,a.qh.m2*4|0);e=a.qy;d.fr(34962,e.m2,e,a.wB);a.t7=0;}a:{f=a.p5.oT.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.p5.oT.data[g];j=h[g];if(j>=0){e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}e.kq(j);k=i.oJ;l=i.o8;m=i.pa;n=a.p5.pd;o=i.qi;e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}e.kp(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.p5.oT.data[g];p=i.o2;e=b.p9;q=(-1);j=Fo(e,p);if(j>=0)q=e.pp.data[j];if(q>=0){e=Bp;if(b.nG)
{Cy(b,b.ol,b.op);b.nG=0;}e.kq(q);j=i.oJ;k=i.o8;l=i.pa;m=a.p5.pd;n=i.qi;e=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}e.kp(q,j,k,l,m,n);}g=g+1|0;}}a.u6=1;}
let AK0=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bp;e=a.p5.oT.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}h.kC(g);}f=f+1|0;}}i=0;while(i<e){j=a.p5.oT.data[i].o2;k=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}l=Bp;h=b.p9;g=(-2);f=Fo(h,j);if(f>=0)g=h.pp.data[f];if(g==(-2)){g=l.ks(b.oK,j);Fb(b.p9,j,g);}if(g!=(-1))k.kC(g);i=i+1|0;}}d.kB(34962,0);a.u6=0;}
function Zo(){let a=this;C.call(a);a.r2=null;a.qG=null;a.zY=0;a.Ch=0;a.r8=0;a.u9=0;a.Ak=0;}
let AWy=(a,b)=>{let c=new Zo();AKy(c,a,b);return c;}
let AKy=(a,b,c)=>{let d,e,f,g,h,i,j,k;b:{a.r8=1;a.u9=0;c=c*2|0;if(!Dn){d=Bz(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new Cm;g=0+e|0;f.nd=(-1);f.ni=e;f.m2=e;B5();f.nE=B8;f.nM=0;f.nC=d;f.m3=0;f.m2=g;f.og=0;f.nR=0;break b;}f=new L;f.mZ=1;f.m0=1;Bd(f);D(f);}if(c<0){f=new Bc;h=new I;h.mY=H(16);F6(h,h.mW,B(515));J(h,h.mW,c,10);i=new M;d=h.mY;j=d.data;c=h.mW;P();g=j.length;if(c>=0&&c<=(g-0|0)){i.mX=O(d.data,0,c);f.mZ=1;f.m0=1;f.m1=i;D(f);}f=new L;Dt(f);D(f);}f=new Cm;d=Bz(c);f.nd=(-1);f.ni=c;f.m2=c;B5();f.nE=B8;f.nM
=0;f.nC=d;f.m3=0;f.m2=c;f.og=1;f.nR=0;f.nE=Da();}a.qG=f;a.Ch=1;a.Ak=!b?35048:35044;f=Kg(f);a.r2=f;f.m2=f.m3;f.m3=0;f.nd=(-1);f=a.qG;f.m2=f.m3;f.m3=0;f.nd=(-1);f=Bp;h=f.m4.createBuffer();k=f.o5;f.o5=k+1|0;Ch(f.pD,k,Co(h));Bp.kB(34963,k);Bp.fr(34963,a.qG.ni,null,a.Ak);Bp.kB(34963,0);a.zY=k;}
let ASe=a=>{return a.r2.m2;}
let AFI=a=>{return a.r2.ni;}
let AM_=(a,b,c,d)=>{let e,f;a.r8=1;e=a.r2;e.m3=0;e.m2=e.ni;e.nd=(-1);SX(e,b,c,d);e=a.r2;e.m2=e.m3;e.m3=0;e.nd=(-1);BW(a.qG,0);CE(a.qG,d<<1);if(a.u9){e=Bp;f=a.qG;e.fs(34963,0,f.m2,f);a.r8=0;}}
let AUq=(a,b)=>{a.r8=a.r8|b;return a.r2;}
let ANK=a=>{let b,c,d;b=a.zY;if(!b){c=new W;c.mZ=1;c.m0=1;c.m1=B(547);D(c);}Bp.kB(34963,b);if(a.r8){CE(a.qG,a.r2.m2*2|0);c=Bp;d=a.qG;c.fs(34963,0,d.m2,d);a.r8=0;}a.u9=1;}
let AIr=a=>{Bp.kB(34963,0);a.u9=0;}
function Pz(){let a=this;C.call(a);a.qE=null;a.rg=null;a.xL=0;a.C5=0;a.xB=0;a.ue=0;a.we=0;a.wX=0;a.pY=null;}
let AAR=null;let AZB=()=>{AZB=X(Pz);AWN();}
let AN1=(a,b,c)=>{let d=new Pz();Wo(d,a,b,c);return d;}
let Wo=(a,b,c,d)=>{let e,f,g,h,i,j;AZB();a.ue=0;a.we=0;a.wX=(-1);e=new DE;e.pu=1;e.n1=Q(16);a.pY=e;a.C5=b;a.qE=d;c=Cj(d.pd/4|0,c);if(!Dn){f=B9(c);g=f.data.length;d=new Ig;h=0+g|0;d.nd=(-1);d.ni=g;d.m2=g;d.m3=0;d.m2=h;d.s9=0;d.tZ=0;d.sB=f;}else{c=c*4|0;if(c<0){d=new Bc;e=new I;e.mY=H(16);F6(e,e.mW,B(515));J(e,e.mW,c,10);i=new M;f=e.mY;j=f.data;c=e.mW;P();g=j.length;if(c>=0&&c<=(g-0|0)){i.mX=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=i;D(d);}d=new L;Dt(d);D(d);}e=new Cm;f=Bz(c);e.nd=(-1);e.ni=c;e.m2=c;B5();e.nE=B8;e.nM
=0;e.nC=f;e.m3=0;e.m2=c;e.og=1;e.nR=0;e.nE=Da();d=FA(e);}a.rg=d;d.m2=d.m3;d.m3=0;d.nd=(-1);d=Bp;e=d.m4.createBuffer();g=d.o5;d.o5=g+1|0;Ch(d.pD,g,Co(e));a.xL=g;a.xB=!b?35048:35044;d=AAR;d.m3=0;d.m2=d.ni;d.nd=(-1);Ga.kE(1,d);d=AAR;c=d.m3;if(c<d.m2){d.m3=c+1|0;a.wX=d.kF(c);return;}d=new Id;d.mZ=1;d.m0=1;D(d);}
let AHy=a=>{return a.qE;}
let AQg=a=>{return (a.rg.m2*4|0)/a.qE.pd|0;}
let AHO=(a,b,c,d)=>{let e,f,g;a.ue=1;e=a.rg;f=null;g=e instanceof Fn;if(g)f=FA(e);else if(e instanceof EC)f=e;if(f===null){f=new W;f.mZ=1;f.m0=1;f.m1=B(545);D(f);}f.m3=0;f.m2=f.ni;f.nd=(-1);BW(e,0);Jv(f,b,c,d);BW(e,0);if(!g)CE(e,d);else CE(e,d<<2);BW(a.rg,0);CE(a.rg,d);if(a.we){e=Bp;f=a.rg;e.fr(34962,f.m2,f,a.xB);a.ue=0;}}
let AT8=(a,b,c)=>{let d;d=Ga;d.kG(a.wX);ACJ(a,b,c);if(a.ue){d.kB(34962,a.xL);b=a.rg;CE(b,b.m2);b=a.rg;d.fr(34962,b.m2,b,a.xB);a.ue=0;}a.we=1;}
let ACJ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.pY.nD;e=!d?0:1;d:{f=a.qE.oT.data.length;if(e){if(c===null){d=0;c:{while(true){if(!e)break c;if(d>=f)break c;g=a.qE.oT.data[d].o2;h=b.p9;i=(-1);e=Fo(h,g);if(e>=0)i=h.pp.data[e];g=a.pY;if(d>=g.nD)break;e=i!=g.n1.data[d]?0:1;d=d+1|0;}h=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,d,10);G(b,b.mW,B(36));d=g.nD;J(b,b.mW,d,10);g=new M;c=b.mY;j=c.data;e=b.mW;P();f=j.length;if(e>=0&&e<=(f-0|0)){g.mX=O(c.data,0,e);h.mZ=1;h.m0=1;h.m1=g;D(h);}b=new L;Z(b);D(b);}}else{j=c.data;e
=j.length!=d?0:1;i=0;while(e){if(i>=f)break d;e=j[i]!=Gg(a.pY,i)?0:1;i=i+1|0;}}}}bb:{if(!e){B3.kB(34962,a.xL);if(a.pY.nD){k=a.qE.oT.data.length;d=0;while(d<k){g=a.pY;if(d>=g.nD){h=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,d,10);G(b,b.mW,B(36));d=g.nD;J(b,b.mW,d,10);g=new M;c=b.mY;j=c.data;e=b.mW;P();f=j.length;if(e>=0&&e<=(f-0|0)){g.mX=O(c.data,0,e);h.mZ=1;h.m0=1;h.m1=g;D(h);}b=new L;Dt(b);D(b);}i=g.n1.data[d];if(i>=0){g=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}g.kC(i);}d=d+1|0;}}a.pY.nD=0;d=0;while(true)
{if(d>=f)break bb;l=a.qE.oT.data[d];if(c!==null){j=c.data;Fs(a.pY,j[d]);}else{g=a.pY;h=l.o2;Fs(g,VO(b.p9,h,(-1)));}k=Gg(a.pY,d);if(k>=0){ABG(b,k);AEC(b,k,l.oJ,l.o8,l.pa,a.qE.pd,l.qi);}d=d+1|0;}}}}
let AKm=(a,b,c)=>{Ga.kG(0);a.we=0;}
let AWN=()=>{let b,c,d,e;if(!Dn){b=Q(1);c=b.data.length;d=new GE;e=0+c|0;d.nd=(-1);d.ni=c;d.m2=c;d.m3=0;d.m2=e;d.rU=0;d.s_=0;d.rv=b;}else{d=new Cm;b=Bz(4);d.nd=(-1);d.ni=4;d.m2=4;B5();d.nE=B8;d.nM=0;d.nC=b;d.m3=0;d.m2=4;d.og=1;d.nR=0;d.nE=Da();d=G2(d);}AAR=d;}
let N_=F(LE);
let Pc=F(HR);
function AB7(){let a=this;C.call(a);a.wz=0;a.ro=null;a.pp=null;a.zb=0.0;a.wQ=0;a.v7=0;a.vZ=0;}
let Jg=(a,b)=>{let c=new AB7();AMo(c,a,b);return c;}
let AMo=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.zb=c;d=MD(b,c);a.wQ=d*c|0;b=d-1|0;a.vZ=b;a.v7=FB(K(b));a.ro=Bf(C,d);a.pp=Q(d);return;}e=new Bc;f=new I;f.mY=H(16);G(f,f.mW,B(60));DT(f,f.mW,c);g=new M;h=f.mY;i=h.data;d=f.mW;P();j=i.length;if(d>=0&&d<=(j-0|0)){g.mX=O(h.data,0,d);e.mZ=1;e.m0=1;e.m1=g;D(e);}f=new L;f.mZ=1;f.m0=1;Bd(f);D(f);}
let Fo=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bc;c.mZ=1;c.m0=1;c.m1=B(61);D(c);}a:{d=a.ro;if(!b.nT){e=0;while(true){if(e>=b.mX.length)break a;b.nT=(31*b.nT|0)+b.mX.charCodeAt(e)|0;e=e+1|0;}}}f=T(Y(V(K(b.nT),E(2135587861, 2654435769)),a.v7));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof M))g=0;else{h=b;g=c.mX!==h.mX?0:1;}if(g)break;f=(f+1|0)&a.vZ;}return f;}
let Fb=(a,b,c)=>{let d,e;d=Fo(a,b);if(d>=0){a.pp.data[d]=c;return;}d= -(d+1|0)|0;e=a.ro.data;e[d]=b;a.pp.data[d]=c;c=a.wz+1|0;a.wz=c;if(c>=a.wQ)ADi(a,e.length<<1);}
let VO=(a,b,c)=>{let d;d=Fo(a,b);if(d>=0)c=a.pp.data[d];return c;}
let ADi=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.ro.data.length;a.wQ=b*a.zb|0;d=b-1|0;a.vZ=d;a.v7=FB(K(d));e=a.ro;f=a.pp;a.ro=Bf(C,b);a.pp=Q(b);if(a.wz>0){g=0;while(true){if(g>=c)break b;h=e.data[g];if(h!==null){k:{i=f.data[g];j=a.ro;if(!h.nT){k=0;while(true){if(k>=h.mX.length)break k;h.nT=(31*h.nT|0)+h.mX.charCodeAt(k)|0;k=k+1|0;}}}b=T(Y(V(K(h.nT),E(2135587861, 2654435769)),a.v7));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.vZ;}l[b]=h;a.pp.data[b]=i;}g=g+1|0;}}}}
let AB4=F();
let AQh=b=>{let c,d,e,f,g;if(!Dn){c=B9(b);d=c.data.length;e=new Ig;f=0+d|0;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=f;e.s9=0;e.tZ=0;e.sB=c;return e;}b=b*4|0;if(b>=0){e=new Cm;c=Bz(b);e.nd=(-1);e.ni=b;e.m2=b;B5();e.nE=B8;e.nM=0;e.nC=c;e.m3=0;e.m2=b;e.og=1;e.nR=0;e.nE=Da();return FA(e);}e=new Bc;g=new I;g.mY=H(16);G(g,g.mW,B(515));J(g,g.mW,b,10);g=U(g);e.mZ=1;e.m0=1;e.m1=g;D(e);}
let Ew=F(0);
function Cm(){let a=this;Fn.call(a);a.og=0;a.nR=0;}
let T6=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.m2)return a.nC.data[a.nM+b|0];c=new L;d=a.m2;e=new I;e.mY=H(16);G(e,e.mW,B(548));J(e,e.mW,b,10);G(e,e.mW,B(521));J(e,e.mW,d,10);d=e.mW;Bb(e,d,d+1|0);f=e.mY;g=f.data;g[d]=41;h=new M;d=e.mW;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.mX=O(f.data,0,d);c.mZ=1;c.m0=1;c.m1=h;D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let Z2=a=>{let b,c,d,e,f,g,h,i,j;if(a.nR){b=new D9;b.mZ=1;b.m0=1;D(b);}a:{c=a.m2;d=a.m3;e=c-d|0;if(d>0){c=a.nM;f=c+d|0;g=0;while(true){if(g>=e)break a;h=a.nC.data;i=c+1|0;j=f+1|0;h[c]=h[f];g=g+1|0;c=i;f=j;}}}a.m3=e;a.m2=a.ni;a.nd=(-1);return a;}
let Kg=a=>{let b,c,d,e,f,g;b=a.m2;c=a.m3;d=(b-c|0)/2|0;e=a.nE;B5();if(e!==B8){e=new NL;f=a.nM+c|0;c=a.nR;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=d;e.sH=f;e.rf=a;e.wW=c;return e;}e=new Pp;b=a.nM+c|0;g=a.nR;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=d;e.sH=b;e.rf=a;e.wW=g;return e;}
let AC$=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.m2){c=a.nC.data;b=a.nM+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;h=a.nE;B5();if(h!==B8)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new L;d=a.m2-3|0;i=new I;i.mY=H(16);G(i,i.mW,B(548));J(i,i.mW,b,10);G(i,i.mW,B(521));J(i,i.mW,d,10);d=i.mW;Bb(i,d,d+1|0);c=i.mY;j=c.data;j[d]=41;k=new M;d=i.mW;P();e=j.length;if(d>=0&&d<=(e-0|0)){k.mX=O(c.data,0,d);h.mZ=1;h.m0=1;h.m1=k;D(h);}h=new L;h.mZ=1;h.m0=1;Bd(h);D(h);}
let Xw=(a,b,c)=>{let d,e,f;if(a.nR){d=new D9;d.mZ=1;d.m0=1;D(d);}if(b>=0&&(b+3|0)<a.m2){d=a.nE;B5();if(d!==B8){e=a.nC.data;b=a.nM+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.nC.data;b=a.nM+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new L;c=a.m2-3|0;f=new I;f.mY=H(16);G(f,f.mW,B(548));J(f,f.mW,b,10);G(f,f.mW,B(521));J(f,f.mW,c,10);c=f.mW;Bb(f,c,c+1|0);f.mY.data[c]=41;f=U(f);d.mZ=1;d.m0=1;d.m1=f;D(d);}
let G2=a=>{let b,c,d,e,f,g;b=a.m2;c=a.m3;d=(b-c|0)/4|0;e=a.nE;B5();if(e!==B8){e=new N9;f=a.nM+c|0;c=a.nR;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=d;e.sn=f;e.sm=a;e.xs=c;return e;}e=new Q8;b=a.nM+c|0;g=a.nR;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=d;e.sn=b;e.sm=a;e.xs=g;return e;}
let FA=a=>{let b,c,d,e,f,g;b=a.m2;c=a.m3;d=(b-c|0)/4|0;e=a.nE;B5();if(e!==AEG){e=new NY;f=a.nM+c|0;c=a.nR;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=d;e.sb=f;e.ri=a;e.yd=c;return e;}e=new PU;b=a.nM+c|0;g=a.nR;e.nd=(-1);e.ni=d;e.m2=d;e.m3=0;e.m2=d;e.sb=b;e.ri=a;e.yd=g;return e;}
let AW9=a=>{return a.nC.data;}
let KE=F();
let Hg=F(Eo);
let AS6=a=>{a.m3=0;a.m2=a.ni;a.nd=(-1);return a;}
let AFF=(a,b)=>{BW(a,b);return a;}
let AP6=a=>{a.m3=0;a.m2=a.ni;a.nd=(-1);return a;}
function GF(){C.call(this);this.Ab=null;}
let B8=null;let AEG=null;let ZY=null;let B5=()=>{B5=X(GF);AWO();}
let Da=()=>{let b,c;B5();if(ZY===null){b=new ArrayBuffer(2);c=new Int16Array(b);0;c[0]=1;ZY=(new Int8Array(b))[0]?AEG:B8;}return ZY;}
let AWO=()=>{let b;b=new GF;B5();b.Ab=B(549);B8=b;b=new GF;b.Ab=B(550);AEG=b;}
let EC=F(Eo);
let Jv=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.kL()){e=new D9;e.mZ=1;e.m0=1;D(e);}f=a.m2;g=a.m3;if((f-g|0)<d){e=new F1;e.mZ=1;e.m0=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.kM(g,h[c]);i=i+1|0;g=j;c=f;}a.m3=a.m3+d|0;return a;}e=new L;k=new I;k.mY=H(16);G(k,k.mW,B(525));J(k,k.mW,d,10);G(k,k.mW,B(526));Ja(e,U(k));D(e);}e=new L;k=new I;k.mY=H(16);G(k,k.mW,B(551));J(k,k.mW,i,10);G(k,k.mW,B(524));J(k,k.mW,f,10);l=new M;b=k.mY;h=b.data;d=k.mW;P();f=h.length;if
(d>=0&&d<=(f-0|0)){l.mX=O(b.data,0,d);e.mZ=1;e.m0=1;e.m1=l;D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}}b=b.data;e=new L;d=b.length;k=new I;k.mY=H(16);G(k,k.mW,B(527));J(k,k.mW,c,10);G(k,k.mW,B(521));J(k,k.mW,d,10);d=k.mW;Bb(k,d,d+1|0);b=k.mY;h=b.data;h[d]=41;l=new M;d=k.mW;P();f=h.length;if(d>=0&&d<=(f-0|0)){l.mX=O(b.data,0,d);e.mZ=1;e.m0=1;e.m1=l;D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}
let APa=a=>{a.m3=0;a.m2=a.ni;a.nd=(-1);return a;}
let AHY=a=>{a.m2=a.m3;a.m3=0;a.nd=(-1);return a;}
let ALX=(a,b)=>{CE(a,b);return a;}
let AQs=(a,b)=>{BW(a,b);return a;}
let AMg=a=>{a.m2=a.m3;a.m3=0;a.nd=(-1);return a;}
let AWR=a=>{a.m3=0;a.m2=a.ni;a.nd=(-1);return a;}
let ARD=(a,b)=>{CE(a,b);return a;}
let AVL=(a,b)=>{BW(a,b);return a;}
let Yv=F();
let Hk=F(Eo);
let SX=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.kL()){e=new D9;e.mZ=1;e.m0=1;D(e);}f=a.m2;g=a.m3;if((f-g|0)<d){e=new F1;e.mZ=1;e.m0=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.kN(g,h[c]);i=i+1|0;g=j;c=f;}a.m3=a.m3+d|0;return a;}e=new L;k=new I;k.mY=H(16);G(k,k.mW,B(525));J(k,k.mW,d,10);G(k,k.mW,B(526));Ja(e,Cr(k));D(e);}e=new L;k=new I;k.mY=H(16);G(k,k.mW,B(552));J(k,k.mW,i,10);G(k,k.mW,B(524));J(k,k.mW,f,10);l=new M;b=k.mY;h=b.data;d=k.mW;P();f=h.length;if
(d>=0&&d<=(f-0|0)){l.mX=O(b.data,0,d);e.mZ=1;e.m0=1;e.m1=l;D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}}b=b.data;e=new L;d=b.length;k=new I;k.mY=H(16);G(k,k.mW,B(527));J(k,k.mW,c,10);G(k,k.mW,B(521));J(k,k.mW,d,10);d=k.mW;Bb(k,d,d+1|0);b=k.mY;h=b.data;h[d]=41;l=new M;d=k.mW;P();f=h.length;if(d>=0&&d<=(f-0|0)){l.mX=O(b.data,0,d);e.mZ=1;e.m0=1;e.m1=l;D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}
let AVl=a=>{a.m3=0;a.m2=a.ni;a.nd=(-1);return a;}
let ADV=a=>{a.m2=a.m3;a.m3=0;a.nd=(-1);return a;}
let ASB=(a,b)=>{CE(a,b);return a;}
let ATd=(a,b)=>{BW(a,b);return a;}
let AUr=a=>{a.m2=a.m3;a.m3=0;a.nd=(-1);return a;}
let AWw=a=>{a.m3=0;a.m2=a.ni;a.nd=(-1);return a;}
let APj=(a,b)=>{CE(a,b);return a;}
let AGw=(a,b)=>{BW(a,b);return a;}
let AAl=F();
let Rh=F(0);
function K2(){let a=this;C.call(a);a.zh=null;a.qX=0;a.qM=0;a.sp=null;a.te=null;a.zS=0;a.rQ=0;}
let A2$=0;let A0o=(a,b,c,d)=>{let e=new K2();AJq(e,a,b,c,d);return e;}
let AJq=(a,b,c,d,e)=>{a.qX=0;a.qM=0;a.rQ=0;a.zh=b;a.te=c;a.sp=d;a.zS=e;if(c!==null){b=Sw(a,c);a.te=b;c=b.nX;a.qX=c===null?b.oU:c.oI;a.qM=c===null?b.oX:c.oG;if(d===null){if(c===null){Hl();b=HK;}else b=Io(c.oi);a.sp=b;}}}
let OS=a=>{let b,c;if(a.rQ){b=new W;b.mZ=1;b.m0=1;b.m1=B(553);D(b);}if(a.te===null){b=Sw(a,ASg(a.zh));a.te=b;c=b.nX;a.qX=c===null?b.oU:c.oI;a.qM=c===null?b.oX:c.oG;if(a.sp===null){if(c===null){Hl();b=HK;}else b=Io(c.oi);a.sp=b;}}a.rQ=1;}
let Sw=(a,b)=>{let c,d,e,f,g,h,i,j;b:{if(Bp===null&&A2$){c=b.nX;d=c===null?b.oU:c.oI;e=c===null?b.oX:c.oG;f=Le(d);g=Le(e);if(d!=f)break b;if(e!=g)break b;}return b;}h=new HZ;c=b.nX;if(c===null){Hl();c=HK;}else c=Io(c.oi);J2(h,f,g,c);c=h.nX;if(c===null){FC(b);Km(h,b.qw,0,0,d,e,0,0,d,e);}else{i=b.nX.ox;j=c.ox;MQ(i,j,0,0,d,e,0,0,d,e);}if(b.sA){c=new W;c.mZ=1;c.m0=1;c.m1=B(48);D(c);}JG();Il(JQ,b.tF);c=b.nX;if(c!==null)MI(c.ox);b.sA=1;return h;}
function HZ(){let a=this;C.call(a);a.oU=0;a.oX=0;a.qw=null;a.os=null;a.tF=0;a.uu=null;a.AV=0;a.AX=0;a.AZ=0;a.AY=0.0;a.vv=null;a.tX=null;a.AG=null;a.CS=null;a.so=null;a.ty=null;a.yS=0;a.nX=null;a.sA=0;}
let XJ=null;let QZ=()=>{QZ=X(HZ);AN3();}
let ASg=a=>{let b=new HZ();Uz(b,a);return b;}
let A50=(a,b,c)=>{let d=new HZ();J2(d,a,b,c);return d;}
let Uz=(a,b)=>{let c,d,e,f,g;QZ();a.AV=255;a.AX=255;a.AZ=255;a.vv=Me(255,255,255,a.AY);J0();a.tX=U8;ABA();a.AG=ABU;a.yS=0;c=b.oH;d=b.tl.tY;e=CF(d,c);d=e<0?null:d.oE.data[e];if(Eb.pM.xN){f=ARM(d.pl);a.nX=A03(f,0,f.data.length,0);Ks(a,(-1),(-1),null,null);}else{Ks(a,(-1),(-1),d.xO,null);if(a.so===null){d=new W;g=b.oH;b=new I;b.mY=H(16);G(b,b.mW,B(554));e=b.mW;if(g===null)g=B(2);G(b,e,g);G(b,b.mW,B(555));b=U(b);d.mZ=1;d.m0=1;d.m1=b;D(d);}}}
let J2=(a,b,c,d)=>{QZ();a.AV=255;a.AX=255;a.AZ=255;a.vv=Me(255,255,255,a.AY);J0();a.tX=U8;ABA();a.AG=ABU;a.yS=0;Ks(a,b,c,null,null);}
let Ks=(a,b,c,d,e)=>{let f,g;if(e!==null){a.ty=e;a.oU=e.getWidth();a.oX=e.getHeight();}else if(d===null){a.oU=b;a.oX=c;}else{a.so=d;a.oU=d.width;a.oX=d.height;}if(Dn){d=new Cm;f=Bz(4);d.nd=(-1);d.ni=4;d.m2=4;B5();d.nE=B8;d.nM=0;d.nC=f;d.m3=0;d.m2=4;d.og=1;d.nR=0;d.nE=Da();}else{f=Bz(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new Cm;g=0+c|0;d.nd=(-1);d.ni=c;d.m2=c;B5();d.nE=B8;d.nM=0;d.nC=f;d.m3=0;d.m2=g;d.og=0;d.nR=0;}else{d=new L;d.mZ=1;d.m0=1;Bd(d);D(d);}}a.uu=d;JG();c=AD9;AD9=c+1|0;a.tF=c;Xw(d,0,c);Ch(JQ,
a.tF,a);}
let YB=a=>{let b,c;I9();b=IO.pN.document.createElement("canvas");a.qw=b;c=a.oU;b.width=c;b=a.qw;c=a.oX;b.height=c;b=a.qw.getContext("2d");a.os=b;QZ();Ha();c=BP(G5.m9);b.globalCompositeOperation=c;}
let Me=(b,c,d,e)=>{let f;QZ();f=new I;f.mY=H(16);G(f,f.mW,B(556));J(f,f.mW,b,10);b=f.mW;Bb(f,b,b+1|0);f.mY.data[b]=44;J(f,f.mW,c,10);b=f.mW;Bb(f,b,b+1|0);f.mY.data[b]=44;J(f,f.mW,d,10);c=f.mW;Bb(f,c,c+1|0);f.mY.data[c]=44;DT(f,f.mW,e);d=f.mW;Bb(f,d,d+1|0);f.mY.data[d]=41;return U(f);}
let FC=a=>{let b,c;if(a.qw===null){YB(a);if(a.so!==null){b=a.os;Ha();c=BP(Yd.o1);b.globalCompositeOperation=c;b=a.os;c=a.so;b.drawImage(c,0.0,0.0);b=a.os;c=BP(G5.o1);b.globalCompositeOperation=c;}if(a.ty!==null){c=a.os;Ha();b=BP(Yd.o1);c.globalCompositeOperation=b;b=a.os;c=a.ty;b.drawImage(c,0.0,0.0);b=a.os;c=BP(G5.o1);b.globalCompositeOperation=c;}}}
let ABQ=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m;k=a.nX;if(k===null){FC(b);Km(a,b.qw,c,d,e,f,g,h,i,j);}else{l=b.nX.ox;m=k.ox;MQ(l,m,c,d,e,f,g,h,i,j);}}
let Ln=a=>{let b;b=a.nX;if(b===null)return a.oU;return b.oI;}
let LT=a=>{let b;b=a.nX;if(b===null)return a.oX;return b.oG;}
let OF=a=>{let b,c;if(a.sA){b=new W;b.mZ=1;b.m0=1;b.m1=B(48);D(b);}JG();Il(JQ,a.tF);c=a.nX;if(c!==null)MI(c.ox);a.sA=1;}
let AAv=a=>{let b,c,d;b=a.nX;if(b===null)return 6408;d:{c=b.oi;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new W;d=new I;d.mY=H(16);CZ(d,d.mW,C1(B(49)));J(d,d.mW,c,10);d=U(d);b.mZ=1;b.m0=1;b.m1=d;D(b);}c=6406;}return c;}
let YN=a=>{let b,c,d;b=a.nX;if(b===null)return 6408;d:{c=b.oi;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new W;d=new I;d.mY=H(16);G(d,d.mW,B(49));J(d,d.mW,c,10);d=U(d);b.mZ=1;b.m0=1;b.m1=d;D(b);}c=6406;}return c;}
let Sv=a=>{let b,c,d;b=a.nX;if(b===null)return 5121;d:{c=b.oi;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break d;case 6:c=32819;break d;default:b=new W;d=new I;d.mY=H(16);G(d,d.mW,B(49));J(d,d.mW,c,10);d=U(d);b.mZ=1;b.m0=1;b.m1=d;D(b);}c=5121;}return c;}
let Sm=a=>{return a.uu;}
let Km=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;FC(a);k=a.tX;J0();if(k===QD){a:{l=a.os;k=BP(XJ);l.fillStyle=k;l=a.os;k=BP(XJ);l.strokeStyle=k;l=a.os;k="destination-out";l.globalCompositeOperation=k;a.os.beginPath();m=a.os;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);YJ();l=XB;FC(a);AZU();switch(AFj.data[l.m6]){case 1:break;case 2:a.os.stroke();break a;default:break a;}a.os.fill();}a.os.closePath();r=a.os;l=BP(a.vv);r.fillStyle=l;r=a.os;k=BP(a.vv);r.strokeStyle=k;r=a.os;Ha();l=BP(G5.o1);r.globalCompositeOperation
=l;}if(e&&f&&i&&j){l=a.os;n=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;l.drawImage(b,n,o,p,q,s,t,u,v);}a.CS=null;}
let AN3=()=>{XJ=Me(255,255,255,1.0);}
let HJ=F(Hg);
let AUw=a=>{let b,c;b=a.m3;if(b<a.m2){a.m3=b+1|0;return a.kF(b);}c=new Id;c.mZ=1;c.m0=1;D(c);}
let Ey=(a,b)=>{let c,d;if(a.kL()){c=new D9;c.mZ=1;c.m0=1;D(c);}d=a.m3;if(d<a.m2){a.m3=d+1|0;a.kU(d,b);return a;}c=new F1;c.mZ=1;c.m0=1;D(c);}
let Fw=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.m2)return a.kF(b);c=new L;d=a.m2;e=new I;e.mY=H(16);G(e,e.mW,B(548));J(e,e.mW,b,10);G(e,e.mW,B(521));J(e,e.mW,d,10);d=e.mW;Bb(e,d,d+1|0);f=e.mY;g=f.data;g[d]=41;h=new M;d=e.mW;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.mX=O(f.data,0,d);c.mZ=1;c.m0=1;c.m1=h;D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let S5=(a,b,c)=>{let d,e,f,g,h,i;if(a.kL()){d=new D9;d.mZ=1;d.m0=1;D(d);}if(b>=0&&b<a.m2){a.kU(b,c);return a;}d=new L;c=a.m2;e=new I;e.mY=H(16);G(e,e.mW,B(548));J(e,e.mW,b,10);G(e,e.mW,B(521));J(e,e.mW,c,10);c=e.mW;Bb(e,c,c+1|0);f=e.mY;g=f.data;g[c]=41;h=new M;c=e.mW;P();i=g.length;if(c>=0&&c<=(i-0|0)){h.mX=O(f.data,0,c);d.mZ=1;d.m0=1;d.m1=h;D(d);}d=new L;d.mZ=1;d.m0=1;Bd(d);D(d);}
let AOA=a=>{return a.kL();}
function GE(){let a=this;HJ.call(a);a.s_=0;a.rU=0;a.rv=null;}
let AQF=(a,b)=>{return a.rv.data[b+a.rU|0];}
let AOQ=(a,b,c)=>{a.rv.data[b+a.rU|0]=c;}
let AFv=a=>{return a.s_;}
let Hv=F(EC);
let Qg=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.m2)return a.kV(b);c=new L;d=a.m2;e=new I;e.mY=H(16);G(e,e.mW,B(548));J(e,e.mW,b,10);G(e,e.mW,B(521));J(e,e.mW,d,10);d=e.mW;Bb(e,d,d+1|0);f=e.mY;g=f.data;g[d]=41;h=new M;d=e.mW;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.mX=O(f.data,0,d);c.mZ=1;c.m0=1;c.m1=h;D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let MZ=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.kL()){d=new D9;d.mZ=1;d.m0=1;D(d);}if(b>=0&&b<a.m2){a.kM(b,c);return a;}d=new L;e=a.m2;f=new I;f.mY=H(16);G(f,f.mW,B(548));J(f,f.mW,b,10);G(f,f.mW,B(521));J(f,f.mW,e,10);e=f.mW;Bb(f,e,e+1|0);g=f.mY;h=g.data;h[e]=41;i=new M;e=f.mW;P();j=h.length;if(e>=0&&e<=(j-0|0)){i.mX=O(g.data,0,e);d.mZ=1;d.m0=1;d.m1=i;D(d);}d=new L;d.mZ=1;d.m0=1;Bd(d);D(d);}
let AJ4=a=>{return a.kL();}
function Ig(){let a=this;Hv.call(a);a.tZ=0;a.s9=0;a.sB=null;}
let ART=(a,b)=>{return a.sB.data[b+a.s9|0];}
let AQR=(a,b,c)=>{a.sB.data[b+a.s9|0]=c;}
let AQ4=a=>{return a.tZ;}
let Gi=F(By);
let QD=null;let U8=null;let A05=null;let J0=()=>{J0=X(Gi);AL1();}
let AL1=()=>{let b,c;b=new Gi;J0();b.m9=B(557);b.m6=0;QD=b;c=new Gi;c.m9=B(558);c.m6=1;U8=c;A05=N(Gi,[b,c]);}
let FL=F(By);
let AXE=null;let ABU=null;let A2B=null;let ABA=()=>{ABA=X(FL);ATr();}
let ATr=()=>{let b,c;b=new FL;ABA();b.m9=B(559);b.m6=0;AXE=b;c=new FL;c.m9=B(560);c.m6=1;ABU=c;A2B=N(FL,[b,c]);}
function JY(){let a=this;KE.call(a);a.tl=null;a.oH=null;a.tC=null;}
let AR0=(a,b,c)=>{let d=new JY();Li(d,a,b,c);return d;}
let Li=(a,b,c,d)=>{L2();if(d!==Tz&&d!==ALz&&d!==AAZ){b=new W;c=new I;c.mY=H(16);G(c,c.mW,B(561));G(c,c.mW,d===null?B(2):d.m9);G(c,c.mW,B(562));c=U(c);b.mZ=1;b.m0=1;b.m1=c;D(b);}a.tl=b;b=Mq(c,B(563),B(105));if(Pr(b,B(105)))b=BR(b,0,b.mX.length-1|0);a.oH=b;a.tC=d;}
let Ud=a=>{return a.oH;}
let AEn=a=>{let b,c,d;b=a.oH;c=FQ(b,47,b.mX.length-1|0);if(c<0)b=a.oH;else{b=a.oH;b=BR(b,c+1|0,b.mX.length);}d=FQ(b,46,b.mX.length-1|0);if(d==(-1))return b;return BR(b,0,d);}
let AAV=a=>{let b,c,d,e,f;b=a.tC;L2();if(b===AAZ){if(Lp===null){c=new NV;b=new JS;d=new PV;e=Eb.pM.A9;d.wU=window.localStorage;d.wF=e;A0Z();b.sz=d;c.zt=b;b=new JS;d=new Rj;e=new B7;e.nZ=1;e.ne=Bf(C,16);d.zz=e;d.x1=Fi(16,0.800000011920929);b.sz=d;c.wY=b;Lp=c;}b=Lp;return !ADo(b.wY,a)?S$(b.zt,a):S$(b.wY,a);}c=VL(a.tl,a.oH);if(c!==null)return c;c=new W;b=a.oH;d=new I;d.mY=H(16);f=d.mW;if(b===null)b=B(2);G(d,f,b);G(d,d.mW,B(564));b=U(d);c.mZ=1;c.m0=1;c.m1=b;D(c);}
let Ua=(a,b)=>{let c,d,e,f,g,h;c=new JY;d=a.tl;if(a.oH.mX.length?0:1)e=B(43);else{e=a.oH;f=!Pr(e,B(105))?B(105):B(43);g=new I;g.mY=H(16);G(g,g.mW,e);G(g,g.mW,f);e=U(g);}g=new I;g.mY=H(16);h=g.mW;if(e===null)e=B(2);G(g,h,e);h=g.mW;if(b===null)b=B(2);G(g,h,b);Li(c,d,U(g),a.tC);return c;}
let Uk=a=>{let b,c,d;b=a.oH;c=Pn(b,B(105),b.mX.length);d=B(43);if(c>0)d=BR(a.oH,0,c);return AR0(a.tl,d,a.tC);}
let AWP=a=>{return a.oH;}
function Zw(){let a=this;C.call(a);a.ox=0;a.oI=0;a.oG=0;a.oi=0;a.s4=null;a.ux=null;}
let A03=(a,b,c,d)=>{let e=new Zw();AJu(e,a,b,c,d);return e;}
let AZt=(a,b,c)=>{let d=new Zw();AWV(d,a,b,c);return d;}
let AJu=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=Q(4);a.s4=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];j;h[j]=k;j=j+1|0;}}a.ux=AUj(g,h,c,d);b=a.s4.data;a.ox=b[0];a.oI=b[1];a.oG=b[2];c=b[3];a.oi=c;if(e&&e!=c)VZ(a,e);}
let AWV=(a,b,c,d)=>{let e;e=Q(4);a.s4=e;a.ux=ASG(e.data,b,c,d);e=a.s4.data;a.ox=e[0];a.oI=e[1];a.oG=e[2];a.oi=e[3];}
let VZ=(a,b)=>{let c,d,e,f,g;c=AZt(a.oI,a.oG,b);RI(c.ox,0);d=a.oI;e=a.oG;f=a.ox;g=c.ox;MQ(f,g,0,0,d,e,0,0,d,e);MI(a.ox);a.ox=c.ox;a.oi=c.oi;a.oG=c.oG;a.s4=c.s4;a.ux=c.ux;a.oI=c.oI;}
let AUj=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let ASG=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let MI=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);}
let MQ=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
let RI=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
let If=F(Hk);
let AB5=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.m2)return a.k4(b);c=new L;d=a.m2;e=new I;e.mY=H(16);G(e,e.mW,B(548));J(e,e.mW,b,10);G(e,e.mW,B(521));J(e,e.mW,d,10);d=e.mW;Bb(e,d,d+1|0);f=e.mY;g=f.data;g[d]=41;h=new M;d=e.mW;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.mX=O(f.data,0,d);c.mZ=1;c.m0=1;c.m1=h;D(c);}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let ANW=a=>{return a.kL();}
function J5(){let a=this;If.call(a);a.uM=0;a.ui=0;a.tR=null;}
let ALy=(a,b)=>{return a.tR.data[b+a.ui|0];}
let ANr=(a,b,c)=>{a.tR.data[b+a.ui|0]=c;}
let AJW=a=>{return a.uM;}
let AAS=F();
function C6(){By.call(this);this.qr=0;}
let AOT=null;let A00=null;let A1I=null;let A0E=null;let A1A=null;let A3m=null;let AZR=null;let AZZ=null;let AJm=()=>{AJm=X(C6);AH$();}
let AH$=()=>{let b,c,d,e,f,g,h;b=new C6;AJm();b.m9=B(565);b.m6=0;b.qr=9728;AOT=b;c=new C6;c.m9=B(566);c.m6=1;c.qr=9729;A00=c;d=new C6;d.m9=B(567);d.m6=2;d.qr=9987;A1I=d;e=new C6;e.m9=B(568);e.m6=3;e.qr=9984;A0E=e;f=new C6;f.m9=B(569);f.m6=4;f.qr=9985;A1A=f;g=new C6;g.m9=B(570);g.m6=5;g.qr=9986;A3m=g;h=new C6;h.m9=B(571);h.m6=6;h.qr=9987;AZR=h;AZZ=N(C6,[b,c,d,e,f,g,h]);}
function Fc(){By.call(this);this.uF=0;}
let A2U=null;let ASQ=null;let A06=null;let A25=null;let AFz=()=>{AFz=X(Fc);AMR();}
let AMR=()=>{let b,c,d;b=new Fc;AFz();b.m9=B(572);b.m6=0;b.uF=33648;A2U=b;c=new Fc;c.m9=B(573);c.m6=1;c.uF=33071;ASQ=c;d=new Fc;d.m9=B(574);d.m6=2;d.uF=10497;A06=d;A25=N(Fc,[b,c,d]);}
let Xk=F();
let AWF=(a,b)=>{b=a.bp(b);Bv();return b===null?null:b instanceof GR()&&b instanceof DG?b.nv:b;}
let AIU=a=>{return a.fK();}
function Hy(){let a=this;Hv.call(a);a.ri=null;a.yd=0;a.sb=0;}
let ARf=a=>{return a.yd;}
let ASn=a=>{return a.ri.nC.data;}
let NY=F(Hy);
let AOo=(a,b)=>{let c;c=a.ri.nC.data;b=a.sb+(b*4|0)|0;return I0((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);}
let ASi=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Hz(c);e=a.ri.nC.data;b=a.sb+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;}
let PU=F(Hy);
let AFJ=(a,b)=>{let c;c=a.ri.nC.data;b=a.sb+(b*4|0)|0;return I0(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);}
let AOc=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Hz(c);e=a.ri.nC.data;b=a.sb+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;}
function He(){let a=this;If.call(a);a.rf=null;a.wW=0;a.sH=0;}
let AMB=a=>{return a.wW;}
let ASO=a=>{return a.rf.nC.data;}
let NL=F(He);
let AJH=(a,b)=>{let c;c=a.rf.nC.data;b=a.sH+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;}
let AIQ=(a,b,c)=>{let d;d=a.rf.nC.data;b=a.sH+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;}
let Pp=F(He);
let AQx=(a,b)=>{let c;c=a.rf.nC.data;b=a.sH+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;}
let AJK=(a,b,c)=>{let d;d=a.rf.nC.data;b=a.sH+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;}
let GD=F(BC);
let D9=F(GD);
function Ib(){let a=this;HJ.call(a);a.sm=null;a.xs=0;a.sn=0;}
let AOg=a=>{return a.xs;}
let N9=F(Ib);
let ALu=(a,b)=>{let c;c=a.sm.nC.data;b=a.sn+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;}
let AFu=(a,b,c)=>{let d;d=a.sm.nC.data;b=a.sn+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;}
let Q8=F(Ib);
let AT6=(a,b)=>{let c;c=a.sm.nC.data;b=a.sn+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;}
let AHq=(a,b,c)=>{let d;d=a.sm.nC.data;b=a.sn+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;}
let Id=F(BC);
let DJ=F(By);
let ALz=null;let Tz=null;let A0V=null;let AZs=null;let AAZ=null;let A1_=null;let L2=()=>{L2=X(DJ);AKM();}
let AKM=()=>{let b,c,d,e,f;b=new DJ;L2();b.m9=B(575);b.m6=0;ALz=b;c=new DJ;c.m9=B(576);c.m6=1;Tz=c;d=new DJ;d.m9=B(577);d.m6=2;A0V=d;e=new DJ;e.m9=B(578);e.m6=3;AZs=e;f=new DJ;f.m9=B(579);f.m6=4;AAZ=f;A1_=N(DJ,[b,c,d,e,f]);}
function EY(){let a=this;LO.call(a);a.tI=null;a.tv=null;}
let Vl=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=a.tI;e=0;f=0;g=a.tv;b:{while(true){if((e+32|0)>f){h=b.m3;i=b.m2;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;NZ(b,d,j,f-j|0);e=0;}}j=c.m3;m=c.m2;if(!(j>=m?0:1)){j=b.m3>=b.m2?0:1;n=!j&&e>=f?Dc:C2;break b;}k=g.data;h=m-j|0;m=k.length;if(h<m)m=h;o=new N3;o.se=b;o.qm=c;n=a.k6(d,e,f,g,0,m,o);e=o.s0;l=o.ta;if(n===null){j=b.m3>=b.m2?0:1;if(!j&&e>=f)n=Dc;else if(!(c.m3>=c.m2?0:1)&&e>=f)n=C2;}Tf(c,g,0,l);if
(n!==null)break;}}BW(b,b.m3-(f-e|0)|0);return n;}
let O9=F(EY);
let AN8=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;n=h.qm;if((n.m2-n.m3|0)<2?0:1)break b;i=C2;break b;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{o=l&64512;m=BJ(o,55296);c=m?0:1;if(!(!c&&!(o!=56320?0:1)?0:1)){if((f+3|0)>g){j=j+(-1)|0;n=h.qm;if((n.m2-n.m3|0)<3?0:1)break b;i=C2;break b;}k=e.data;c=f+1|0;k[f]=(224|l>>12)<<24>>24;f
=c+1|0;k[c]=(128|l>>6&63)<<24>>24;m=f+1|0;k[f]=(128|l&63)<<24>>24;}else{if(!(m?0:1)){i=new Cc;i.nI=2;i.nU=1;break b;}if(j>=d){n=h.se;if(n.m3>=n.m2?0:1)break b;i=Dc;break b;}p=j+1|0;m=k[j];if(!((m&64512)!=56320?0:1)){j=p+(-2)|0;i=new Cc;i.nI=2;i.nU=1;break b;}if((f+4|0)>g){j=p+(-2)|0;n=h.qm;if((n.m2-n.m3|0)<4?0:1)break b;i=C2;break b;}k=e.data;o=((l&1023)<<10|m&1023)+65536|0;m=f+1|0;k[f]=(240|o>>18)<<24>>24;c=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=c+1|0;k[c]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j
=p;}}c=j;f=m;}j=c;}h.s0=j;h.ta=f;return i;}
let E4=F(CA);
function Hp(){C.call(this);this.zg=null;}
function AAx(){let a=this;Hp.call(a);a.uA=null;a.vs=null;a.sa=0;a.u3=0;a.xC=0;a.Ax=0;}
let A1y=(a,b)=>{let c=new AAx();AKj(c,a,b);return c;}
let AKj=(a,b,c)=>{a.zg=new C;a.Ax=(-1);if(c<0){b=new Bc;b.mZ=1;b.m0=1;D(b);}a.uA=b;if(64>c)c=64;a.vs=H(c);}
let Zx=a=>{let b;b=a.uA;if(b!==null){b.xR.k7();a.uA=null;return;}b=new E4;b.mZ=1;b.m0=1;D(b);}
let Iy=a=>{let b,c,d,e;if(a.uA===null){b=new E4;b.mZ=1;b.m0=1;D(b);}if(a.xC&&a.sa>=a.u3)return null;b=new I;b.mY=H(16);d:{while(true){if(a.sa>=a.u3&&!QX(a,0))break d;c=a.vs.data;d=a.sa;e=d+1|0;a.sa=e;d=c[d];if(d==10)break;if(d==13){if(e>=a.u3&&!QX(a,0))break d;c=a.vs.data;e=a.sa;if(c[e]!=10)break d;a.sa=e+1|0;break d;}e=b.mW;Bb(b,e,e+1|0);b.mY.data[e]=d;}}return U(b);}
let QX=(a,b)=>{let c,d;if(a.xC)return 0;a:{while(true){c=a.vs;d=c.data.length;if(b>=d)break a;d=Yo(a.uA,c,b,d-b|0);if(d==(-1)){a.xC=1;break a;}if(!d)break;b=b+d|0;}}a.u3=b;a.sa=0;a.Ax=(-1);return 1;}
function Vn(){let a=this;Hp.call(a);a.xR=null;a.x5=null;a.Di=null;a.qq=null;a.B5=null;a.rT=null;a.v$=0;a.x2=0;}
let AYk=a=>{let b=new Vn();AFS(b,a);return b;}
let A51=(a,b)=>{let c=new Vn();AB3(c,a,b);return c;}
let AFS=(a,b)=>{let c,d;CC();c=CK;d=new Ri;AEU(d,c,0.3333333432674408,0.5);d.yR=Bz(512);d.Ac=H(512);D4();c=EH;if(c!==null){d.tz=c;d.xV=c;AB3(a,b,d);return;}c=new Bc;c.mZ=1;c.m0=1;c.m1=B(580);D(c);}
let AB3=(a,b,c)=>{let d,e,f,g,h,i;a.zg=new C;d=Bz(8192);e=d.data;a.Di=d;f=e.length;if(f>=0&&f<=(f-0|0)){g=new Cm;h=0+f|0;g.nd=(-1);g.ni=f;g.m2=f;B5();g.nE=B8;g.nM=0;g.nC=d;g.m3=0;g.m2=h;g.og=0;g.nR=0;a.qq=g;e=H(1024);d=e.data;a.B5=e;h=d.length;g=new I_;i=0+h|0;g.nd=(-1);g.ni=h;g.m2=h;g.m3=0;g.m2=i;g.r3=0;g.tb=0;g.rK=e;a.rT=g;a.xR=b;a.x5=c;BW(g,i);b=a.qq;BW(b,b.m2);return;}b=new L;b.mZ=1;b.m0=1;D(b);}
let Yo=(a,b,c,d)=>{let e,f,g,h;if(a.x2){e=a.rT;if(!(e.m3>=e.m2?0:1))return (-1);}f=0;k:{while(d>0){e=a.rT;g=e.m2-e.m3|0;if(d<g)g=d;NZ(e,b,c+f|0,g);d=d-g|0;f=f+g|0;e=a.rT;h=e.m3>=e.m2?0:1;if(!h&&!AEb(a))break k;}}return f;}
let AEb=a=>{let b,c,d;if(a.x2)return 0;U5(a.rT);a:{while(true){b=a.qq;c=b.m3>=b.m2?0:1;if(!c&&!R_(a))break a;d=(Xa(a.x5,a.qq,a.rT,a.v$)).nI;if(d!=1?0:1)break;if(d?0:1)R_(a);}}b=a.qq;c=b.m3>=b.m2?0:1;if(!c&&a.v$){b=a.x5;d=b.vp;if(d!=3&&d!=2){b=new BK;b.mZ=1;b.m0=1;D(b);}b.vp=3;if(Dc.nI?0:1)a.x2=1;}b=a.rT;b.m2=b.m3;b.m3=0;b.nd=(-1);return 1;}
let R_=a=>{let b,c,d;if(a.v$)return 0;Z2(a.qq);a:{while(true){b=a.qq;c=b.m3;d=b.m2;if(!(c>=d?0:1))break a;c=a.xR.lf(b.nC,c,d-c|0);if(c==(-1)){a.v$=1;break a;}b=a.qq;BW(b,b.m3+c|0);if(!c)break;}}b=a.qq;b.m2=b.m3;b.m3=0;b.nd=(-1);return 1;}
function T3(){let a=this;C.call(a);a.pq=null;a.qU=null;a.xZ=0;a.oz=0;}
let ADy=(a,b)=>{let c=new T3();AU0(c,a,b);return c;}
let AU0=(a,b,c)=>{if(b!==null){a.pq=b;a.qU=c;a.xZ=0;a.oz=0;return;}b=new CO;b.mZ=1;b.m0=1;D(b);}
let TX=a=>{let b,c,d,e;if(a.qU===null){b=new CO;b.mZ=1;b.m0=1;D(b);}a:{k:{c=a.pq.mX.length;d=a.oz;if(d<c){if(a.xZ)return 1;while(true){if(d>=c)break k;b=a.qU;e=a.pq;if(d<0)break a;if(d>=e.mX.length)break a;if(Ek(b,e.mX.charCodeAt(d),0)==(-1))return 1;d=d+1|0;}}}return 0;}b=new S;b.mZ=1;b.m0=1;D(b);}
let BG=a=>{let b,c,d,e,f,g,h;if(a.qU===null){b=new CO;b.mZ=1;b.m0=1;D(b);}c=a.oz;d=a.pq.mX.length;if(c<d){if(a.xZ){b=a.qU;e=a.pq;f=a.oz;if(f>=0&&f<e.mX.length){if(Ek(b,e.mX.charCodeAt(f),0)>=0){b=a.pq;c=a.oz;a.oz=c+1|0;if(c>=0&&c<b.mX.length){c=b.mX.charCodeAt(c);b=new M;g=H(1);h=g.data;h[0]=c;b.mX=O(g.data,0,h.length);return b;}b=new S;b.mZ=1;b.m0=1;D(b);}a.oz=a.oz+1|0;bf:{while(true){f=a.oz;if(f>=d){b=a.pq;return BR(b,c,b.mX.length);}b=a.qU;e=a.pq;if(f<0)break bf;if(f>=e.mX.length)break bf;if(Ek(b,e.mX.charCodeAt(f),
0)>=0)break;a.oz=a.oz+1|0;}return BR(a.pq,c,a.oz);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}h:{while(true){f=BJ(c,d);if(f>=0)break h;b=a.qU;e=a.pq;if(c<0)break;if(c>=e.mX.length)break;if(Ek(b,e.mX.charCodeAt(c),0)<0)break h;c=c+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}a.oz=c;if(f<0){a.oz=c+1|0;i:{while(true){f=a.oz;if(f>=d){b=a.pq;return BR(b,c,b.mX.length);}b=a.qU;e=a.pq;if(f<0)break i;if(f>=e.mX.length)break i;if(Ek(b,e.mX.charCodeAt(f),0)>=0)break;a.oz=a.oz+1|0;}return BR(a.pq,c,a.oz);}b=new S;b.mZ
=1;b.m0=1;D(b);}}b=new M8;b.mZ=1;b.m0=1;D(b);}
let PP=F();
let AUh=null;let TS=b=>{let $$je;b:{if(b!==null)try{Zx(b);break b;}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){}else{throw $$e;}}}}
let ATp=()=>{AUh=Bz(0);}
function Sr(){let a=this;C.call(a);a.s8=null;a.zi=0;a.yl=null;a.vk=null;a.A2=0;a.BP=0.0;a.BO=0.0;a.x_=null;a.B3=0.0;a.pR=null;a.rs=null;a.td=null;a.ws=null;}
let A33=null;let A0X=()=>{A0X=X(Sr);AOO();}
let A2J=(a,b)=>{let c=new Sr();AEc(c,a,b);return c;}
let AEc=(a,b,c)=>{let d,e,f,g,h,i;A0X();d=new B7;d.nZ=1;d.ne=Bf(C,16);a.yl=d;d=new B7;d.nZ=1;d.ne=Bf(C,16);a.vk=d;d=new Bn;EM();d.oe=1.0;d.od=1.0;d.oc=1.0;d.ob=1.0;Du(d);a.x_=d;a.s8=b;a.zi=c;e=b.q_.m7;if(!e){b=new Bc;b.mZ=1;b.m0=1;b.m1=B(581);D(b);}a:{a.pR=Bf(Lz(EB),e);a.rs=Q(e);if(e>1){f=Bf(DE,e);g=f.data;a.td=f;h=0;i=g.length;while(true){if(h>=i)break a;b=new DE;b.pu=1;b.n1=Q(16);g[h]=b;h=h+1|0;}}}a.ws=Q(e);}
let WN=(a,b)=>{let c,d,e,f,g,h,i;c=a.s8.q_;d=0;e=a.pR.data.length;while(d<e){f=a.rs.data;if(f[d]>0){g=a.pR.data[d];if(d>=c.m7){h=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,d,10);G(b,b.mW,B(36));i=c.m7;J(b,b.mW,i,10);b=U(b);h.mZ=1;h.m0=1;h.m1=b;D(h);}Y9(b,c.ne.data[d].uq,g,0,f[d]);}d=d+1|0;}}
let AA7=a=>{let b,c,d,e,f,g,h;a.BP=0.0;a.BO=0.0;AAI(a.vk,1);b=a.vk;c=b.ne;d=0;e=b.m7;f=null;if(d>e){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m7=0;b=a.yl;c=b.ne;d=0;e=b.m7;f=null;if(d>e){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.m7=0;e=0;c=a.rs.data;h=c.length;while(e<h){g=a.td;if(g!==null)g.data[e].nD=0;c[e]=0;e=e+1|0;}}
let U$=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{if(a.pR.data.length==1)Sd(a,0,b.oZ);else{c=a.ws.data;d=0;e=c.length;if(d>e){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(d<e){f=d+1|0;c[d]=0;d=f;}g=0;b=b.oD;d=b.m7;while(true){f=BJ(g,d);if(f>=0)break;if(f>=0){h=new L;i=new I;i.mY=H(16);G(i,i.mW,B(35));J(i,i.mW,g,10);G(i,i.mW,B(36));g=b.m7;J(i,i.mW,g,10);b=U(i);h.mZ=1;h.m0=1;h.m1=b;D(h);}i=b.ne.data[g].nY;j=i.ne;k=0;l=i.m7;while(k<l){f=j.data[k].s1;c[f]=c[f]+1|0;k=k+1|0;}g=g+1|0;}g=0;while(true){if(g>=e)break a;Sd(a,g,c[g]);g=
g+1|0;}}}}
let Sd=(a,b,c)=>{let d,e,f,g;d=a.td;if(d!==null){e=d.data;if(c>e[b].n1.data.length)AAQ(e[b],c-e[b].nD|0);}d=a.rs.data;f=d[b]+(c*20|0)|0;e=a.pR.data;g=e[b];if(g===null)e[b]=B9(f);else if(g.data.length<f){e=B9(f);B$(g,0,e,0,d[b]);a.pR.data[b]=e;}}
let V8=(a,b)=>{let c,d,e,f,g;c=Bf(Lz(EB),b);d=a.pR;B$(d,0,c,0,d.data.length);a.pR=c;e=Q(b);c=a.rs;B$(c,0,e,0,c.data.length);a.rs=e;d=Bf(DE,b);f=0;e=a.td;if(e!==null){f=e.data.length;B$(e,0,d,0,f);}e=d.data;while(f<b){g=new DE;g.pu=1;g.n1=Q(16);e[f]=g;f=f+1|0;}a.td=d;a.ws=Q(b);}
let AAf=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;e=b.oD.m7;if(!e)return;f=a.pR.data.length;g=a.s8.q_.m7;if(f<g)V8(a,g);CH(a.yl,b);U$(a,b);h=b.oh;i=0;j=0;g=0;k=0.0;l=0;while(l<e){m=b.oD;if(l>=m.m7){n=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,l,10);G(b,b.mW,B(36));f=m.m7;J(b,b.mW,f,10);b=U(b);n.mZ=1;n.m0=1;n.m1=b;D(n);}m=m.ne.data[l];n=m.nY;o=n.ne;p=m.n_.n$;q=c+m.p0;r=d+m.vB;s=0;t=n.m7;while(s<t){u=g+1|0;if(g==j){f=i+1|0;if(f>=h.nD){m=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,f,10);G(b,
b.mW,B(36));f=h.nD;J(b,b.mW,f,10);b=U(b);m.mZ=1;m.m0=1;m.m1=b;D(m);}k=I0(h.n1.data[f]&(-16777217));i=f+1|0;f=BJ(i,h.nD);if(f>=0)j=(-1);else{if(f>=0){m=new L;b=new I;b.mY=H(16);G(b,b.mW,B(35));J(b,b.mW,i,10);G(b,b.mW,B(36));f=h.nD;J(b,b.mW,f,10);b=U(b);m.mZ=1;m.m0=1;m.m1=b;D(m);}j=h.n1.data[i];}}v=p.data;w=o.data;q=q+v[s];ACs(a,w[s],q,r,k);s=s+1|0;g=u;}l=l+1|0;}EM();a.B3=AA1;}
let ACs=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.s8.uW;g=f.rj;h=f.A$;i=c+b.pv*g;j=d+b.tc*h;k=b.oY*g;l=b.pr*h;m=b.yu;n=b.yU;o=b.wl;p=b.wN;if(a.zi){i=i+E7(i)*0.5|0;j=j+E7(j)*0.5|0;k=k+E7(k)*0.5|0;l=l+E7(l)*0.5|0;}q=i+k;r=j+l;s=b.s1;t=a.rs.data;u=t[s];t[s]=t[s]+20|0;t=a.td;if(t!==null){b=t.data[s];v=a.A2;a.A2=v+1|0;Fs(b,v);}t=a.pR.data[s].data;v=u+1|0;t[u]=i;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=o;w=v+1|0;t[v]=i;s=w+1|0;t[w]=r;v=s+1|0;t[s]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=p;w=
v+1|0;t[v]=q;v=w+1|0;t[w]=r;w=v+1|0;t[v]=e;v=w+1|0;t[w]=n;w=v+1|0;t[v]=p;v=w+1|0;t[w]=q;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=n;t[w]=o;}
let AOO=()=>{let b;b=new Bn;EM();b.oe=1.0;b.od=1.0;b.oc=1.0;b.ob=1.0;Du(b);A33=b;}
let C7=F(By);
let AM8=null;let A2l=null;let AMC=null;let ASt=null;let AOw=null;let AL0=null;let HK=null;let A1M=null;let Hl=()=>{Hl=X(C7);AFw();}
let Io=b=>{let c,d;Hl();if(b==1)return AM8;if(b==2)return AMC;if(b==5)return ASt;if(b==6)return AOw;if(b==3)return AL0;if(b==4)return HK;c=new W;d=new I;d.mY=H(16);G(d,d.mW,B(582));J(d,d.mW,b,10);d=U(d);c.mZ=1;c.m0=1;c.m1=d;D(c);}
let AFw=()=>{let b,c,d,e,f,g,h;b=new C7;Hl();b.m9=B(223);b.m6=0;AM8=b;c=new C7;c.m9=B(583);c.m6=1;A2l=c;d=new C7;d.m9=B(584);d.m6=2;AMC=d;e=new C7;e.m9=B(585);e.m6=3;ASt=e;f=new C7;f.m9=B(586);f.m6=4;AOw=f;g=new C7;g.m9=B(587);g.m6=5;AL0=g;h=new C7;h.m9=B(588);h.m6=6;HK=h;A1M=N(C7,[b,c,d,e,f,g,h]);}
let IZ=F();
let Zg=0;let QH=null;let QC=null;let AAr=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:Hz(b);c.yP=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.w9=0;c.wS=0;return;}if(f)d=e|8388608;else{d=e<<1;while(CN(Bj(K(d),K(8388608)),Bi)){d=d<<1;f=f+(-1)|0;}}g=QC;h=ARi(g,0,g.data.length,f);if(h<0)h= -h|0;g=QC.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=QH.data[e];j=Bj(K(d),E(4294967295, 0));k=T(Y(V(j,Bj(K(e),E(4294967295, 0))),32-i|0));if(k<Zg){while(FM(k,Zg)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g
=QC.data;e=h+1|0;i=9+(f-g[e]|0)|0;k=T(Y(V(j,Bj(K(QH.data[e]),E(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=QH.data;f=h+1|0;e=g[f];m=i-1|0;n=V(Bj(K(l),E(4294967295, 0)),Bj(K(e),E(4294967295, 0)));e=32-m|0;o=T(Y(n,e));p=T(Y(V(Bj(K(d-1|0),E(4294967295, 0)),Bj(K(g[f]),E(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(FM(DQ(k,r),DQ(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(FM(DQ(k,l),DQ(o,l))>=0)break;m=l;}s=FM(q,m);d=s>0?Cj(DQ(k,q),q):s<0?Cj(DQ(k,m),m)+m|0:Cj(DQ((k+(m/2|0)|0),m),m);if(Ej(K(d),K(1000000000))
>=0)while(true){h=h+1|0;d=DQ(d,10);if(FM(d,1000000000)<0)break;}else if(FM(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.w9=d;c.wS=h-50|0;}
let W1=()=>{Zg=DQ((-1),10);QH=D_([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);QC=D_([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
let Kq=F();
let AGf=null;let AMS=null;let AEq=(b,c,d)=>{let e,f,g,h,i,j;e=50+c|0;if(b){f=AGf.data;if(e<=f.length&&e>=0){g=Hq(V(Bj(K(b),E(4294967295, 0)),Bj(K(f[e]),E(4294967295, 0))));h=AMS.data[e]-1|0;i=(32-Gw(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){c=( -c|0)+1|0;e=32;if(c<e)e=c;b=b>>e;c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return I0(j);}}return I0(!d?0:(-2147483648));}
let ABR=()=>{AGf=D_([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);AMS=D_([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
let F_=F(By);
let XB=null;let AIv=null;let ATX=null;let YJ=()=>{YJ=X(F_);AWL();}
let AWL=()=>{let b,c;b=new F_;YJ();b.m9=B(589);b.m6=0;XB=b;c=new F_;c.m9=B(590);c.m6=1;AIv=c;ATX=N(F_,[b,c]);}
function Cf(){By.call(this);this.o1=null;}
let Yd=null;let AYm=null;let AYH=null;let AXB=null;let A2D=null;let A3W=null;let AYv=null;let A0e=null;let A0D=null;let G5=null;let A19=null;let A2d=null;let Ha=()=>{Ha=X(Cf);ALS();}
let ALS=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new Cf;Ha();b.m9=B(591);b.m6=0;b.o1=B(592);Yd=b;c=new Cf;c.m9=B(593);c.m6=1;c.o1=B(594);AYm=c;d=new Cf;d.m9=B(595);d.m6=2;d.o1=B(596);AYH=d;e=new Cf;e.m9=B(597);e.m6=3;e.o1=B(598);AXB=e;f=new Cf;f.m9=B(599);f.m6=4;f.o1=B(600);A2D=f;g=new Cf;g.m9=B(601);g.m6=5;g.o1=B(602);A3W=g;h=new Cf;h.m9=B(603);h.m6=6;h.o1=B(604);AYv=h;i=new Cf;i.m9=B(605);i.m6=7;i.o1=B(606);A0e=i;j=new Cf;j.m9=B(607);j.m6=8;j.o1=B(608);A0D=j;k=new Cf;k.m9=B(609);k.m6=9;k.o1=B(610);G5=k;l=new Cf;l.m9
=B(611);l.m6=10;l.o1=B(612);A19=l;A2d=N(Cf,[b,c,d,e,f,g,h,i,j,k,l]);}
let FV=F(By);
let AHj=null;let ATK=null;let AY6=null;let AGm=()=>{AGm=X(FV);AJe();}
let AJe=()=>{let b,c;b=new FV;AGm();b.m9=B(613);b.m6=0;AHj=b;c=new FV;c.m9=B(614);c.m6=1;ATK=c;AY6=N(FV,[b,c]);}
let RD=F();
let VF=0;let ACi=(b,c,d,e)=>{let f,g,h,i,j,k,l;if(!VF){Pe(b,c,d,e);return;}Nm();f=PZ;if(f!==AEt&&f!==f&&f!==AB_)ABX(b,c,d,e);else{g=B3;f=c.nX;if(f===null)h=6408;else o:{e=f.oi;switch(e){case 1:h=6406;break o;case 2:h=6410;break o;case 3:case 5:h=6407;break o;case 4:case 6:h=6408;break o;default:}c=new W;g=new I;g.mY=H(16);DM(g,g.mW,B(49));J(g,g.mW,e,10);g=U(g);c.mZ=1;c.m0=1;c.m1=g;D(c);}i=f===null?c.oU:f.oI;j=f===null?c.oX:f.oG;if(f===null)k=6408;else y:{k=f.oi;switch(k){case 1:k=6406;break y;case 2:k=6410;break y;case 3:case 5:k
=6407;break y;case 4:case 6:k=6408;break y;default:}c=new W;g=new I;CI(g);g.mY=H(16);AEB(g,g.mW,B(49));J(g,g.mW,k,10);g=U(g);c.mZ=1;c.m0=1;c.m1=g;D(c);}if(f===null)l=5121;else bn:{l=f.oi;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break bn;case 6:l=32819;break bn;default:c=new W;g=new I;g.mY=H(16);DM(g,g.mW,B(49));J(g,g.mW,l,10);g=U(g);c.mZ=1;c.m0=1;c.m1=g;D(c);}l=5121;}g.cn(b,0,h,i,j,0,k,l,c.uu);Bp.lr(b);}}
let ABX=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=BM.sl.getExtension("GL_ARB_framebuffer_object")===null?0:1;k:{if(!f&&!(BM.sl.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bp.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new B6;h.nn=g;i=h;g.classObject=i;}}if(h.nB===null)h.nB=Be(h.nn.$meta.name);h=h.nB;if(h===B(615))f=1;else if(!(B(615) instanceof M))f=0;else{j=B(615);f=h.mX!==j.mX?0:1;}if(!f&&Ga===null){Pe(b,c,d,e);break k;}}j=B3;h=c.nX;if(h===null)f=6408;else m:{e=h.oi;switch(e)
{case 1:f=6406;break m;case 2:f=6410;break m;case 3:case 5:f=6407;break m;case 4:case 6:f=6408;break m;default:}c=new W;j=new I;j.mY=H(16);CZ(j,j.mW,C1(B(49)));J(j,j.mW,e,10);j=U(j);c.mZ=1;c.m0=1;c.m1=j;D(c);}k=h===null?c.oU:h.oI;l=h===null?c.oX:h.oG;if(h===null)m=6408;else bo:{m=h.oi;switch(m){case 1:m=6406;break bo;case 2:m=6410;break bo;case 3:case 5:m=6407;break bo;case 4:case 6:m=6408;break bo;default:}c=new W;j=new I;j.mY=H(16);DM(j,j.mW,B(49));J(j,j.mW,m,10);j=U(j);c.mZ=1;c.m0=1;c.m1=j;D(c);}if(h===null)n
=5121;else bp:{n=h.oi;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break bp;case 6:n=32819;break bp;default:c=new W;j=new I;j.mY=H(16);CZ(j,j.mW,C1(B(49)));J(j,j.mW,n,10);j=U(j);c.mZ=1;c.m0=1;c.m1=j;D(c);}n=5121;}j.cn(b,0,f,k,l,0,m,n,c.uu);Bp.lr(b);}}
let Pe=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;f=B3;g=c.nX;if(g===null)h=6408;else d:{i=g.oi;switch(i){case 1:h=6406;break d;case 2:h=6410;break d;case 3:case 5:h=6407;break d;case 4:case 6:h=6408;break d;default:}c=new W;f=new I;f.mY=H(16);CZ(f,f.mW,C1(B(49)));J(f,f.mW,i,10);f=U(f);c.mZ=1;c.m0=1;c.m1=f;D(c);}j=g===null?c.oU:g.oI;k=g===null?c.oX:g.oG;if(g===null)l=6408;else h:{l=g.oi;switch(l){case 1:l=6406;break h;case 2:l=6410;break h;case 3:case 5:l=6407;break h;case 4:case 6:l=6408;break h;default:}c=new W;f
=new I;f.mY=H(16);DM(f,f.mW,B(49));J(f,f.mW,l,10);f=U(f);c.mZ=1;c.m0=1;c.m1=f;D(c);}if(g===null)m=5121;else bq:{m=g.oi;switch(m){case 1:case 2:case 3:case 4:m=5121;break bq;case 5:m=33635;break bq;case 6:m=32819;break bq;default:}c=new W;f=new I;f.mY=H(16);CZ(f,f.mW,C1(B(49)));J(f,f.mW,m,10);f=U(f);c.mZ=1;c.m0=1;c.m1=f;D(c);}f.cn(b,0,h,j,k,0,l,m,c.uu);if(Bp===null&&d!=e){c=new W;c.mZ=1;c.m0=1;c.m1=B(616);D(c);}f=c.nX;n=(f===null?c.oU:f.oI)/2|0;i=(f===null?c.oX:f.oG)/2|0;h=1;while(n>0&&i>0){o=new HZ;f=c.nX;if
(f===null){Hl();f=HK;}else f=Io(f.oi);J2(o,n,i,f);J0();f=QD;o.tX=f;g=o.nX;if(g===null){FC(o);g=o.os;Ha();p=BP(G5.m9);g.globalCompositeOperation=p;}else{e=f!==f?1:0;RI(g.ox,e);}f=c.nX;ABQ(o,c,0,0,f===null?c.oU:f.oI,f===null?c.oX:f.oG,0,0,n,i);if(h>1)OF(c);B3.cn(b,h,YN(o),Ln(o),LT(o),0,AAv(o),Sv(o),Sm(o));n=Ln(o)/2|0;i=LT(o)/2|0;h=h+1|0;c=o;}}
let AOm=()=>{VF=1;}
let Ro=F();
let AFj=null;let AZU=()=>{AZU=X(Ro);AWI();}
let AWI=()=>{let b,c;YJ();b=Q((ATX.s()).data.length);c=b.data;AFj=b;c[XB.m6]=1;c[AIv.m6]=2;}
function MP(){let a=this;C.call(a);a.B9=null;a.Bk=0.0;a.Cg=0.0;a.ry=null;a.tz=null;a.xV=null;a.vp=0;}
let AEU=(a,b,c,d)=>{let e;a.ry=B(617);D4();e=FN;a.tz=e;a.xV=e;if(c<=0.0){b=new Bc;e=new I;e.mY=H(16);G(e,e.mW,B(618));DT(e,e.mW,c);e=U(e);b.mZ=1;b.m0=1;b.m1=e;D(b);}if(d>0.0){a.B9=b;a.Bk=c;a.Cg=d;return;}b=new Bc;e=new I;e.mY=H(16);G(e,e.mW,B(619));DT(e,e.mW,d);e=U(e);b.mZ=1;b.m0=1;b.m1=e;D(b);}
let Xa=(a,b,c,d)=>{let e,f,g,h,i,$$je;e=a.vp;if(!(e==2&&!d)&&e!=3){a.vp=d?2:1;while(true){try{f=ADD(a,b,c);}catch($$e){$$je=Bx($$e);if($$je instanceof BC){g=$$je;b=new L$;b.mZ=1;b.m0=1;b.oy=g;D(b);}else{throw $$e;}}e=f.nI;if(e!=1?0:1)break;if(e?0:1){if(d){d=b.m3;h=b.m2;if(d>=h?0:1){g=a.tz;D4();if(g===FN){h=h-d|0;b=new Cc;b.nI=2;b.nU=h;return b;}if((c.m2-c.m3|0)<=a.ry.mX.length)return C2;h=b.m3;BW(b,h+(b.m2-h|0)|0);if(a.tz===EH){b=a.ry;KN(c,b,0,b.mX.length);}}}return f;}if(e!=2?0:1){g=a.tz;D4();if(g===FN)return f;if
(g===EH){if((c.m2-c.m3|0)<a.ry.mX.length)return C2;g=a.ry;KN(c,g,0,g.mX.length);}i=b.m3;e=f.nI;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new GD;b.mZ=1;b.m0=1;D(b);}BW(b,i+f.nU|0);}else if(e!=3?0:1){g=a.xV;D4();if(g===FN)return f;if(g===EH){if((c.m2-c.m3|0)<a.ry.mX.length)return C2;g=a.ry;KN(c,g,0,g.mX.length);}i=b.m3;e=f.nI;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new GD;b.mZ=1;b.m0=1;D(b);}BW(b,i+f.nU|0);}}return f;}b=new BK;b.mZ=1;b.m0=1;D(b);}
let F1=F(BC);
let GN=F();
let Lp=null;let AHJ=()=>{Lp=null;}
let Ue=F();
function MU(){let a=this;C.call(a);a.xy=null;a.zP=null;a.Af=null;a.w7=null;a.xU=null;a.px=null;a.vt=null;a.s3=0.0;a.z_=0.0;a.w0=0.0;a.xz=0.0;a.z7=null;a.BT=null;a.Bz=null;}
let JN=a=>{let b,c,d;b=new Bg;CP();a.xy=b;b=new Bg;b.m_=0.0;b.nb=0.0;b.na=(-1.0);a.zP=b;b=new Bg;b.m_=0.0;b.nb=1.0;b.na=0.0;a.Af=b;a.w7=Fh();a.xU=Fh();a.px=Fh();a.vt=Fh();a.s3=1.0;a.z_=100.0;a.w0=0.0;a.xz=0.0;a.z7=A1P();a.BT=new Bg;b=new LD;A1f();c=new Bg;b.BL=c;d=new Bg;b.CO=d;c.m_=0.0;c.nb=0.0;c.na=0.0;d.m_=0.0;d.nb=0.0;d.na=0.0;a.Bz=b;}
let AFa=F();
let AQl=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=b.mX.length;e=0;f=new I;f.mY=H(d);g=0;b:{a:{while(g<d){if(g<0)break b;if(g>=b.mX.length)break b;k:{h=b.mX.charCodeAt(g);if(h!=37){i=f.mW;Bb(f,i,i+1|0);f.mY.data[i]=h;break k;}g=g+1|0;if(g<0)break a;if(g>=b.mX.length)break a;j=b.mX.charCodeAt(g);if(j==37){j=f.mW;Bb(f,j,j+1|0);f.mY.data[j]=37;break k;}if(j==115){k=c.data;i=e+1|0;l=K1(k[e].pz,10);G(f,f.mW,l);e=i;break k;}if(j==100){k=c.data;i=e+1|0;AD6(f,K(k[e].pz));e=i;break k;}if(j==102){k=c.data;i=e+1|0;m=Kt(k[e]);Ir();BF(f,
HG(ZZ(m),0,m>=0.0?5:6));e=i;break k;}if(j==48){g=g+1|0;if(CY(b,g)==88){k=c.data;Ir();l=MW;i=e+1|0;AES(l,f,HI(k[e]));e=i;break k;}Ir();i=LG(Gn,b,g,d);while(true){g=g+1|0;h=CY(b,g);if(h<48)break;if(h>57)break;}if(h==88){k=c.data;l=MW;j=e+1|0;BF(f,HG(PS(l,HI(k[e])),16-i|0,16));}else if(h!=100)j=e;else{k=c.data;l=Gn;j=e+1|0;l=PS(l,HI(k[e]));BF(f,HG(l,ES(l)-i|0,ES(l)));}e=j;break k;}if(j==46){g=g+1|0;if(CY(b,g)==102){k=c.data;Ir();l=Gn;i=e+1|0;Xg(l,f,Kt(k[e]));e=i;break k;}Ir();j=LG(Gn,b,g,d)+2|0;while(true){g=g
+1|0;i=CY(b,g);if(i<48)break;if(i>57)break;}if(i==102){k=c.data;i=e+1|0;n=Kt(k[e]);l=ABx(Gn,n);if(n<0.0)j=j+1|0;BF(f,HG(l,0,j));e=i;}break k;}if(j<49)break k;if(j>57)break k;Ir();i=LG(Gn,b,g,d);while(true){g=g+1|0;j=CY(b,g);if(j<48)break;if(j>57)break;}if(j==88){k=c.data;l=MW;j=e+1|0;l=Sq(l,HI(k[e]));BF(f,HG(l,ES(l)-i|0,ES(l)));}else if(j!=100)j=e;else{k=c.data;l=Gn;j=e+1|0;l=Sq(l,HI(k[e]));BF(f,HG(l,ES(l)-i|0,ES(l)));}e=j;}g=g+1|0;}return f;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let L3=(b,c)=>{let d,e,f,g;b=AQl(b,c);d=new M;c=b.mY;e=c.data;f=b.mW;P();g=e.length;if(f>=0&&f<=(g-0|0)){d.mX=O(c.data,0,f);return d;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let Ip=F();
let SY=null;let AAm=null;let St=null;let XT=null;let ADW=b=>{return SY.data[((b*2607.5945876176133+16384.5|0)-16384|0)&16383];}
let AET=b=>{let c,d,e,f;b=IK(b-1.5707963705062866)*2607.594482421875;c=b|0;d=c&16383;e=St.data;f=e[d];return f+(e[d+1|0]-f)*(b-c);}
let Y8=()=>{let b,c,d,e,f;SY=B9(16385);AAm=ZR(16385);St=B9(16385);XT=ZR(16385);b=0;while(b<16384){c=b/16384.0*6.283185307179586;d=SY.data;e=AAm.data;f=SW(c);e[b]=f;d[b]=f;d=St.data;e=XT.data;c=AG2(c);e[b]=c;d[b]=c;b=b+1|0;}e=SY.data;e[0]=0.0;e[16384]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e=AAm.data;e[0]=0.0;e[16384]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e=St.data;e[0]=1.0;e[16384]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;e=XT.data;e[0]=1.0;e[16384]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;}
let MS=F(H2);
function It(){let a=this;MS.call(a);a.sQ=0;a.sR=0;a.sS=0;a.sT=0;}
let UA=a=>{let b,c,d,e,f,g;b=a.sQ;c=a.sR;d=a.sS;e=a.sT;f=c^d;a.sQ=f<<26|(f>>>6|0);g=d^e;a.sR=g<<11|(g>>>21|0);a.sS=b^(c+d|0);a.sT=e+(-1380601499)|0;return d;}
let IB=a=>{return (UA(a)>>>8|0)*5.9604644775390625E-8;}
function M9(){let a=this;C.call(a);a.qc=null;a.uw=0.0;a.uy=0.0;a.ti=0;a.tj=0;a.t9=0;a.us=0;a.vf=null;}
let FF=(a,b)=>{let c,d,e,f;ZB(a.ti,a.tj,a.t9,a.us);c=a.qc;d=a.uw;c.w0=d;e=a.uy;c.xz=e;if(b){f=c.xy;d=d/2.0;e=e/2.0;f.m_=d;f.nb=e;f.na=0.0;}IA(c,1);}
function HX(){M9.call(this);this.qK=0.0;}
let OX=F(0);
function HF(){let a=this;C.call(a);a.t8=0;a.tG=0;a.Ay=0;a.BE=0;a.uX=0;a.p$=null;a.t3=null;a.v9=0;a.AP=0;a.zp=0;a.CJ=0;a.Ao=0;a.Bs=0;a.sF=null;a.vA=null;a.xl=null;}
let A52=(a,b,c,d,e)=>{let f=new HF();Jq(f,a,b,c,d,e);return f;}
let Jq=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m;a.sF=Fh();a.BE=b;a.AP=e;a.t3=f;g=Vq(a,c,d,e);h=new Js;h.u4=1;h.uv=0;f=new Bg;CP();h.Aj=f;f=AMe(g);h.po=Ga===null?AON(0,b,f):AN1(0,b,f);f=new HR;f.qz=1;f.sy=0;f.w2=1;if(!Dn){g=K9(0);d=g.data.length;i=new J5;j=0+d|0;SH(i,d);i.m3=0;i.m2=j;i.ui=0;i.uM=0;i.tR=g;}else{k=new Cm;g=Bz(0);CI(k);k.nd=(-1);k.ni=0;k.m2=0;B5();k.nE=B8;k.nM=0;k.nC=g;k.m3=0;k.m2=0;k.og=1;k.nR=0;k.nE=Da();i=Kg(k);}f.qb=i;i.m2=i.m3;i.m3=0;i.nd=(-1);i=Bp;k=i.m4.createBuffer();d=i.o5;i.o5=d+1|0;Ch(i.pD,
d,Co(k));f.u1=d;f.t4=35048;h.oC=f;h.sX=0;f=Eb;i=MB;if(f===null){i=i.oQ.data[0];while(i!==null&&i.pc!==null){i=i.pm;}}else{k=f;if(!k.$id$){l=EL();k.$id$=l;}m=f.$id$;i=Xi(i,f,m&(i.oQ.data.length-1|0),m);}i=i===null?null:i.pL;if(i===null)i=A3z();CH(i,h);J1(MB,f,i);a.p$=h;a.vA=B9(Cj(b,(h.po.j9()).pd/4|0));a.zp=(We(a.p$)).pd/4|0;a.CJ=GO(a.p$,8)===null?0:(GO(a.p$,8)).qi/4|0;a.Ao=GO(a.p$,4)===null?0:(GO(a.p$,4)).qi/4|0;a.Bs=GO(a.p$,16)===null?0:(GO(a.p$,16)).qi/4|0;a.xl=Bf(M,e);m=0;while(m<e){a.xl.data[m]=Cr(Ei(BF(EE(),
B(620)),m));m=m+1|0;}}
let Vq=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new B7;e.nZ=1;e.ne=Bf(C,16);f=new DY;f.p1=1;f.oJ=3;f.o8=5126;f.pa=0;f.o2=B(470);f.p7=0;f.rb=El(1);CH(e,f);if(b){g=new DY;g.p1=8;g.oJ=3;g.o8=5126;g.pa=0;g.o2=B(621);g.p7=0;g.rb=El(8);CH(e,g);}if(c){g=new DY;g.p1=4;g.oJ=4;g.o8=5121;g.pa=1;g.o2=B(471);g.p7=0;g.rb=El(4);CH(e,g);}h=0;while(true){if(h>=d){b=e.m7;i=Bf(DY,b);j=i.data;h=0;while(true){c=BJ(h,b);if(c>=0)break;if(c>=0){f=new L;g=new I;g.mY=H(16);G(g,g.mW,B(35));J(g,g.mW,h,10);G(g,g.mW,B(36));b=e.m7;J(g,g.mW,b,
10);e=new M;i=g.mY;j=i.data;c=g.mW;P();d=j.length;if(c>=0&&c<=(d-0|0)){e.mX=O(i.data,0,c);f.mZ=1;f.m0=1;f.m1=e;D(f);}e=new L;Z(e);D(e);}j[h]=e.ne.data[h];h=h+1|0;}return i;}g=new DY;f=new I;f.mY=H(16);G(f,f.mW,B(622));J(f,f.mW,h,10);k=new M;i=f.mY;j=i.data;l=f.mW;P();m=j.length;if(l<0)break;if(l>(m-0|0))break;k.mX=O(i.data,0,l);g.p1=16;g.oJ=2;g.o8=5126;g.pa=0;g.o2=k;g.p7=0;g.rb=El(16);CH(e,g);h=h+1|0;}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}
let V3=(a,b,c)=>{FT(a.sF,b.ov);a.t8=c;}
let C$=(a,b)=>{a.vA.data[a.tG+a.Ao|0]=b;}
let Db=(a,b,c,d)=>{let e,f;e=a.tG;f=a.vA.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.Ay=0;a.tG=e+a.zp|0;a.uX=a.uX+1|0;}
let S4=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!a.uX)return;b=a.t3;c=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}c.iI(b.oK);c=a.t3;d=a.sF;TR();e=Jo(c,B(623),L9);f=Bp;if(c.nG){Cy(c,c.ol,c.op);c.nG=0;}g=d.ov;b=f.pe;h=f.pH;if(!h)b=!b.ns?null:b.nq;else{i=b.no;j=T(Y(V(K(h),E(2135587861, 2654435769)),b.nt));e:{while(true){k=i.data[j];if(!k){j= -(j+1|0)|0;break e;}if(k==h)break;j=(j+1|0)&b.nr;}}b=j<0?null:b.np.data[j];}b=b;if(!e)b=!b.ns?null:b.nq;else{i=b.no;h=T(Y(V(K(e),E(2135587861, 2654435769)),b.nt));y:{while(true){j=i.data[h];if
(!j){h= -(h+1|0)|0;break y;}if(j==e)break;h=(h+1|0)&b.nr;}}b=h<0?null:b.np.data[h];}Bv();b=b===null?null:b.nv;c=f.m4;d="uniformMatrix4fv";l=!!0;if(g===null)f=null;else{g=g.data;m=g.length;f=new Array(m);h=0;while(h<m){n=g[h];h;f[h]=n;h=h+1|0;}}c[d](b,l,f);m=0;while(m<a.AP){b=a.t3;c=a.xl.data[m];d=Bp;if(b.nG){Cy(b,b.ol,b.op);b.nG=0;}d.iV(Jo(b,c,L9),m);m=m+1|0;}b=a.p$;g=a.vA;h=a.tG;b.po.iM(g,0,h);b=a.p$;QY(b,a.t3,a.t8,0,b.oC.j4()<=0?b.po.lO():b.oC.j0(),b.u4);a.Ay=0;a.tG=0;a.uX=0;}
let KU=a=>{S4(a);}
let Kn=(b,c,d)=>{let e,f,g,h,i,j,k;e=new I;e.mY=H(16);G(e,e.mW,B(624));f=!b?B(43):B(625);G(e,e.mW,f);f=!c?B(43):B(626);G(e,e.mW,f);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);i=0;while(true){if(i>=d){e=new I;e.mY=H(16);G(e,e.mW,f);G(e,e.mW,B(627));f=!c?B(43):B(628);G(e,e.mW,f);f=new M;g=e.mY;h=g.data;i=e.mW;j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);i=0;while(i<d){e=new I;e.mY=H(16);G(e,e.mW,f);G(e,e.mW,B(629));J(e,e.mW,i,10);G(e,e.mW,B(630));f=U(e);i=i+1|0;}e
=new I;e.mY=H(16);G(e,e.mW,f);G(e,e.mW,B(631));f=new M;g=e.mY;h=g.data;i=e.mW;j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);if(c){e=new I;FS(e);f=Cr(BF(BF(e,f),B(632)));}i=0;while(i<d){f=Cr(BF(Ei(BF(BF(Ei(BF(BF(EE(),f),B(633)),i),B(634)),B(622)),i),B(630)));i=i+1|0;}return Cr(BF(BF(EE(),f),B(635)));}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}e=new I;e.mY=H(16);G(e,e.mW,f);G(e,e.mW,B(636));J(e,e.mW,i,10);G(e,e.mW,B(630));f=new M;g=e.mY;h=g.data;j=e.mW;k=h.length;if(j<0)break;if(j
>(k-0|0))break;f.mX=O(g.data,0,j);i=i+1|0;}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}
let LS=(b,c,d)=>{let e,f,g,h,i,j,k;e=B(637);if(c){f=new I;f.mY=H(16);G(f,f.mW,e);G(f,f.mW,B(628));e=new M;g=f.mY;h=g.data;i=f.mW;P();j=h.length;if(i>=0&&i<=(j-0|0))e.mX=O(g.data,0,i);else{e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}}i=0;c:{while(true){if(i>=d){f=new I;f.mY=H(16);G(f,f.mW,e);G(f,f.mW,B(638));e=!c?B(639):B(640);G(f,f.mW,e);e=new M;g=f.mY;h=g.data;c=f.mW;P();i=h.length;if(c>=0&&c<=(i-0|0)){e.mX=O(g.data,0,c);if(d>0){f=new I;f.mY=H(16);G(f,f.mW,e);G(f,f.mW,B(641));e=VV(f.mY,0,f.mW);}i=0;c=d-1|0;while(i<d)
{e=i!=c?Cr(BF(Ei(BF(Ei(BF(BF(EE(),e),B(642)),i),B(643)),i),B(644))):Cr(BF(Ei(BF(Ei(BF(BF(EE(),e),B(642)),i),B(643)),i),B(519)));i=i+1|0;}f=new I;FS(f);RC(f,e);return Cr(BF(f,B(645)));}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}f=new I;f.mY=H(16);G(f,f.mW,e);G(f,f.mW,B(629));J(f,f.mW,i,10);G(f,f.mW,B(630));e=new M;g=f.mY;h=g.data;j=f.mW;P();k=h.length;if(j<0)break c;if(j>(k-0|0))break c;e.mX=O(g.data,0,j);f=new I;f.mY=H(16);G(f,f.mW,e);G(f,f.mW,B(646));J(f,f.mW,i,10);G(f,f.mW,B(630));e=new M;g=f.mY;h=g.data;j=f.mW;k=
h.length;if(j<0)break;if(j>(k-0|0))break;e.mX=O(g.data,0,j);i=i+1|0;}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}e=new L;e.mZ=1;e.m0=1;Bd(e);D(e);}
let Xb=F();
function PI(){let a=this;GX.call(a);a.Cu=0.0;a.Ct=0.0;a.CH=0;a.B7=0;}
let WR=F();
function Se(){let a=this;C.call(a);a.sK=null;a.qW=null;}
let S3=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sK.readyState==4){if(a.sK.status==200){b=a.qW;if(b.p3.pi){if(BA===null){c=new CD;c.oq=Dd;d=new I;d.mY=H(16);c.nF=d;c.oo=H(32);c.ow=0;CC();c.ot=CK;BA=c;}e=BA;b=b.pW;d=new I;d.mY=H(16);G(d,d.mW,B(647));f=d.mW;if(b===null)b=B(2);G(d,f,b);b=new M;g=d.mY;h=g.data;i
=d.mW;P();Kf(0,i,h.length);b.mX=O(g.data,0,i);KX(e,b);}b=a.qW;b.qa.er(b.pW,Be(a.sK.responseText));}else if(a.sK.status!=404&&a.sK.status!=403){try{j=K(100);$p=1;continue _;}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){}else{throw $$e;}}b=a.qW;d=b.p3;f=b.rp;c=b.pW;e=b.qa;if(d.pi){if(BA===null){k=new CD;k.oq=Dd;b=new I;b.mY=H(16);k.nF=b;k.oo=H(32);k.ow=0;CC();k.ot=CK;BA=k;}k=BA;b=new I;b.mY=H(16);G(b,b.mW,B(114));G(b,b.mW,c===null?B(2):c);l=new M;g=b.mY;h=g.data;m=b.mW;P();n=h.length;if(m>=0&&m<=(n-0|0)){l.mX
=O(g.data,0,m);b=k.nF;G(b,b.mW,l);n=b.mW;Bb(b,n,n+1|0);b.mY.data[n]=10;CM(k);}else{b=new L;Z(b);D(b);}}d.nO=d.nO+1|0;b=new G8;b.p3=d;b.rp=f;b.pW=c;b.qa=e;d=null;c=null;b.pt=new C;b.ps=1;b.qj=c;b.qA=d;i=C4;C4=i+1|0;b.qx=K(i);d=new E_;d.ql=b;Gd(d);}else{b=a.qW;b.qa.lP(b.pW);}b=a.qW.p3;b.nO=b.nO-1|0;}return;case 1:b:{try{IY(j);if(GC()){break _;}break b;}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){}else{throw $$e;}}}b=a.qW;d=b.p3;f=b.rp;c=b.pW;e=b.qa;if(d.pi){if(BA===null){k=new CD;k.oq=Dd;b=new I;b.mY=H(16);k.nF
=b;k.oo=H(32);k.ow=0;CC();k.ot=CK;BA=k;}k=BA;b=new I;b.mY=H(16);G(b,b.mW,B(114));G(b,b.mW,c===null?B(2):c);l=new M;g=b.mY;h=g.data;m=b.mW;P();n=h.length;if(m>=0&&m<=(n-0|0)){l.mX=O(g.data,0,m);b=k.nF;G(b,b.mW,l);n=b.mW;Bb(b,n,n+1|0);b.mY.data[n]=10;CM(k);}else{b=new L;Z(b);D(b);}}d.nO=d.nO+1|0;b=new G8;b.p3=d;b.rp=f;b.pW=c;b.qa=e;d=null;c=null;b.pt=new C;b.ps=1;b.qj=c;b.qA=d;i=C4;C4=i+1|0;b.qx=K(i);d=new E_;d.ql=b;Gd(d);b=a.qW.p3;b.nO=b.nO-1|0;return;default:C9();}}BO().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let Ye=(a,b)=>{let $p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:S3(a,b);if(GC()){break _;}return;default:C9();}}BO().s(a,b,$p);}
let ABO=F(0);
function Lt(){let a=this;MP.call(a);a.yR=null;a.Ac=null;}
let ADD=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.yR;e=0;f=0;g=a.Ac;b:{while(true){if((e+32|0)>f){h=b.m3;i=b.m2;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;O2(b,d,j,f-j|0);e=0;}}j=c.m3;l=c.m2;if(!(j>=l?0:1)){j=b.m3>=b.m2?0:1;m=!j&&e>=f?Dc:C2;break b;}k=g.data;l=l-j|0;h=k.length;if(l<h)h=l;n=new Sc;n.vG=b;n.AC=c;m=AEi(a,d,e,f,g,0,h,n);e=n.A8;if(m===null&&0==n.wI)m=Dc;AEZ(c,g,0,n.wI);if(m!==null)break;}}BW(b,b.m3-(f-e|0)|0);return m;}
let Ri=F(Lt);
let AEi=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,r,s;i=null;b:{o:{bf:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;n=h.vG;if((n.m2-n.m3|0)<2?0:1)break b;i=Dc;break b;}o=k+1|0;k=j[k];if(!((k&192)!=128?0:1)){c=o+(-2)|0;i=new Cc;i.nI=2;i.nU=1;break b;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=o;}else if((l&240)!=224){if((l&248)!=240){c=k+(-1)|0;i=AYa(2,1);break b;}if((k+3|0)>d){c=k+(-1)|0;if(Yx(h,4))break b;i=
Dc;break b;}if((f+2|0)>g){c=k+(-1)|0;if(Vv(h,2))break b;i=C2;break b;}o=k+1|0;m=j[k];c=o+1|0;o=j[o];k=c+1|0;p=j[c];if(!MH(a,m))break bf;if(!MH(a,o))break bf;if(!MH(a,p))break bf;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|p&63;c=f+1|0;j[f]=ZF(q);m=c+1|0;j[c]=ADF(q);}else{if((k+2|0)>d){c=k+(-1)|0;n=h.vG;if((n.m2-n.m3|0)<3?0:1)break b;i=Dc;break b;}c=k+1|0;r=j[k];k=c+1|0;o=j[c];if(!((r&192)!=128?0:1))break o;if(!((o&192)!=128?0:1))break o;s=((l&15)<<12|(r&63)<<6|o&63)&65535;m=s&64512;c=m!=55296?0:1;if(!c&&!(m!=
56320?0:1)?0:1){c=k+(-3)|0;i=new Cc;i.nI=2;i.nU=3;break b;}j=e.data;m=f+1|0;j[f]=s;}c=k;f=m;}break b;}c=k+(-3)|0;i=ABg(1);break b;}c=k+(-3)|0;i=new Cc;i.nI=2;i.nU=1;}h.A8=c;h.wI=f;return i;}
let MH=(a,b)=>{return (b&192)!=128?0:1;}
function NV(){let a=this;GN.call(a);a.zt=null;a.wY=null;}
function Hx(){let a=this;MU.call(a);a.tt=0.0;a.ug=null;}
let IA=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.w7;d=a.tt;e=a.w0;f=d* -e/2.0;e=d*e/2.0;g=a.xz;Q_(c,f,e,d* -(g/2.0),d*g/2.0,a.s3,a.z_);c=a.xU;h=a.xy;i=a.ug;d=h.m_;j=h.nb;f=h.na;i.m_=d;i.nb=j;i.na=f;k=a.zP;l=k.m_;e=k.nb;g=k.na;d=d+l;j=j+e;f=f+g;i.m_=d;i.nb=j;i.na=f;i=a.Af;k=AU4;k.m_=d;k.nb=j;k.na=f;l=h.m_;e=h.nb;g=h.na;l=d-l;e=j-e;g=f-g;k.m_=l;k.nb=e;k.na=g;W0(c,k,i);i=AIM;l= -h.m_;e= -h.nb;g= -h.na;K8(i);m=i.ov.data;m[12]=l;m[13]=e;m[14]=g;Q2(c,i);FT(a.px,a.w7.ov);Up(a.px.ov,a.xU.ov);if(b){FT(a.vt,a.px.ov);Xd(a.vt.ov);AA6(a.z7,
a.vt);}}
function JS(){GN.call(this);this.sz=null;}
let AYW=0;let A0Z=()=>{A0Z=X(JS);ALt();}
let S$=(a,b)=>{let c,d,e,f,$$je;c=a.sz;d=b.oH;e=new I;e.mY=H(16);G(e,e.mW,B(648));f=e.mW;if(d===null)d=B(2);G(e,f,d);c=c.l3(U(e));d:{try{e=AJU(YA(c));}catch($$e){$$je=Bx($$e);if($$je instanceof BC){e=$$je;break d;}else{throw $$e;}}return e;}c=a.sz;d=b.oH;b=new I;b.mY=H(16);G(b,b.mW,B(648));f=b.mW;if(d===null)d=B(2);G(b,f,d);c.l5(U(b));D(e);}
let ADo=(a,b)=>{let c,d,e,f,g;c=a.sz;d=b.oH;e=new I;e.mY=H(16);G(e,e.mW,B(649));f=e.mW;if(d===null)d=B(2);d:{G(e,f,d);if(c.l3(U(e))===null){c=a.sz;g=b.oH;b=new I;b.mY=H(16);G(b,b.mW,B(648));f=b.mW;if(g===null)g=B(2);G(b,f,g);if(c.l3(U(b))===null){f=0;break d;}}f=1;}return f;}
let ALt=()=>{AYW=B(648).mX.length;}
let Ma=F(0);
function PV(){let a=this;C.call(a);a.wU=null;a.wF=null;}
let AJx=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.wU;d=a.wF;e=new I;e.mY=H(16);f=e.mW;if(d===null)d=B(2);G(e,f,d);f=e.mW;if(b===null)b=B(2);G(e,f,b);d=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){d.mX=O(g.data,0,i);return Be(c.getItem(BP(d)));}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let ARu=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.wU;d=a.wF;e=new I;e.mY=H(16);f=e.mW;if(d===null)d=B(2);G(e,f,d);f=e.mW;if(b===null)b=B(2);G(e,f,b);d=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){d.mX=O(g.data,0,i);c.removeItem(BP(d));return;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
function Rj(){let a=this;C.call(a);a.zz=null;a.x1=null;}
let ARV=(a,b)=>{let c,d;c=a.x1;d=CF(c,b);return d<0?null:c.oE.data[d];}
let AUf=(a,b)=>{Wm(a.zz,b,0);ZL(a.x1,b);}
function CV(){let a=this;C.call(a);a.t$=null;a.uN=null;a.Bp=0;a.yJ=0;a.w1=0;a.Bv=0;a.sh=0;a.CA=0;a.Cb=0;a.wb=0;a.vH=0;a.sI=null;}
let AWE=null;let AWG=null;let Gn=null;let MW=null;let AVu=null;let AVw=null;let AJI=null;let AVB=null;let A3j=null;let A3Q=null;let A1a=null;let A1d=null;let AY5=null;let AZM=null;let AXk=null;let AZg=null;let AZj=null;let Ir=()=>{Ir=X(CV);AQ_();}
let F0=(a,b,c,d,e)=>{let f=new CV();Xl(f,a,b,c,d,e);return f;}
let Xl=(a,b,c,d,e,f)=>{let g,h,i,j,k;Ir();a.Bp=d;a.Bv=c;a.yJ=e;a.w1=f;g=H(b.mX.length);h=g.data;d=0;e=h.length;while(true){if(d>=e){a.t$=g;a.sh=e;g=Q(128);h=g.data;a.uN=g;e=0;f=h.length;if(e>f){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(e<f){i=e+1|0;h[e]=(-1);e=i;}i=0;while(true){d=a.sh;if(i>=d)break;j=a.t$.data[i];g=a.uN.data;g[j&127]=i;if(c){if(BS===null){if(BB===null)BB=DW();BS=Cv(Cz((BB.value!==null?Be(BB.value):null)));}g[Cg(BS,j)&65535&127]=i;}i=i+1|0;}k=1.0/II(d);a.CA=IW(II(256.0)*k)|0;a.Cb=IW(II(65536.0)*k)
|0;a.wb=IW(II(4.294967296E9)*k)|0;c=IW(II(1.8446744073709552E19)*k)|0;a.vH=c;c=c+1|0;d=32;if(c>d)d=c;a.sI=H(d);return;}if(d<0)break;if(d>=b.mX.length)break;h[d]=b.mX.charCodeAt(d);d=d+1|0;}b=new S;b.mZ=1;b.m0=1;D(b);}
let PS=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.vH;d=c-1|0;e=a.sh;f=e>>>1|0;g=0;h=K(f);i=K(e);while(g<=d){j=Ct(Y(b,1),h);a.sI.data[d-g|0]=a.t$.data[T(Ci(b,V(j,i)))];g=g+1|0;b=j;}k=a.sI;l=k.data;P();m=new M;f=l.length;if(c>=0&&c<=(f-0|0)){m.mX=O(k.data,0,c);return m;}m=new L;m.mZ=1;m.m0=1;D(m);}
let AES=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.vH;e=d-1|0;f=a.sh;g=f>>>1|0;h=0;i=K(g);j=K(f);while(h<=e){k=Ct(Y(c,1),i);a.sI.data[e-h|0]=a.t$.data[T(Ci(c,V(k,j)))];h=h+1|0;c=k;}l=a.sI;f=0;g=b.mW;Bb(b,g,g+d|0);h=d+f|0;while(f<h){m=l.data;n=b.mY.data;e=g+1|0;d=f+1|0;n[g]=m[f];g=e;f=d;}return b;}
let Sq=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.vH;d=Fq(b,(-1));b=GM(Cu(Bk(b,d),d));e=c;while(true){f=a.sI;g=f.data;h=a.t$.data;i=K(a.sh);g[e]=h[T(GM(CL(b,i)))];b=Ct(b,i);if(CN(b,Bi))break;e=e+(-1)|0;}if(Ed(d,Bi)){e=e+(-1)|0;g[e]=a.w1;}j=(c+1|0)-e|0;P();k=new M;c=g.length;if(e>=0&&j>=0&&j<=(c-e|0)){k.mX=O(f.data,e,j);return k;}k=new L;k.mZ=1;k.m0=1;D(k);}
let LG=(a,b,c,d)=>{let e,f,g,h,i,j;if(c>=0&&d>0&&(d-c|0)>0){e=b.mX.length;if((e-c|0)>0&&d<=e){if(c>=0&&c<b.mX.length){e=b.mX.charCodeAt(c);if(e==a.w1){f=(-1);g=0;h=a.wb+1|0;}else if(e==a.yJ){f=1;g=0;h=a.wb+1|0;}else{g=a.uN.data[e&127];if(g<0)return 0;f=1;h=a.wb;}i=c+1|0;r:{while(i<d&&i<(c+h|0)){j=a.uN;if(i<0)break r;if(i>=b.mX.length)break r;e=j.data[b.mX.charCodeAt(i)&127];if(e<0)return Cj(g,f);g=Cj(g,a.sh)+e|0;i=i+1|0;}return Cj(g,f);}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}}return 0;}
let ABx=(a,b)=>{let c,d,e,f,g,h;EZ();c=new I;c.mY=H(16);c=K_(c,b,(-10000));d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);return d;}c=new L;Z(c);D(c);}
let Xg=(a,b,c)=>{EZ();return K_(b,c,(-10000));}
let AQ_=()=>{let b,c;AWE=F0(B(650),1,36,43,45);AWG=F0(B(651),1,36,43,45);Gn=F0(B(652),1,36,43,45);MW=F0(B(653),1,112,43,45);AVu=F0(B(654),1,36,43,45);AVw=F0(B(462),0,61,42,45);AJI=F0(B(655),0,36,42,33);AVB=F0(B(656),0,36,43,45);b=F0(B(657),0,92,43,45);A3j=b;c=N(CV,[AWE,AWG,Gn,MW,AVu,AVw,AJI,AVB,b]);b=new NS;b.Cj=c;A3Q=b;A1a=A16([0,0]);A1d=Zq([0,0]);AY5=AXM([0,0]);AZM=A10([0,0]);AXk=A12([0,0]);AZg=AYf([0,0]);AZj=AZ$([0,0]);}
let ADC=F();
let HG=(b,c,d)=>{if(b!==null&&!(b.mX.length?0:1)){if(c<0)c=0;if(!(d>=0&&d<=b.mX.length))d=b.mX.length;if(c<d)return BR(b,c,d);return B(43);}return B(43);}
let Vr=F();
let ZX=F();
function NS(){Hd.call(this);this.Cj=null;}
let Ss=F();
let AMl=null;let A3H=()=>{A3H=X(Ss);AGC();}
let ZB=(b,c,d,e)=>{let f;A3H();b:{a:{f=AMl;ZI();if(f===ABL){if(BM.nJ.width!=BM.nJ.width)break a;if(BM.nJ.height!=BM.nJ.height)break a;}B3.dY(b,c,d,e);break b;}B3.dY(Cj(b,BM.nJ.width)/BM.nJ.width|0,Cj(c,BM.nJ.height)/BM.nJ.height|0,Cj(d,BM.nJ.width)/BM.nJ.width|0,Cj(e,BM.nJ.height)/BM.nJ.height|0);}}
let AGC=()=>{ZI();AMl=ABL;}
let JT=F();
let U4=null;let K7=null;let A2Z=null;let EZ=()=>{EZ=X(JT);AGu();}
let ZZ=b=>{let c,d,e,f,g,h;EZ();c=new I;c.mY=H(16);c=K_(c,b,(-10000));d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);return d;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let K_=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;EZ();if(isNaN(c)?1:0){a:{e=CB(b);BF(b,B(658));if(d!=(-10000)){if(FX(Bk(K(e),K(d)),K(CB(b))))HU(b,e+d|0);else{e=e+d|0;while(true){if(CB(b)>=e)break a;DK(b,32);}}}}return b;}if(c!==Infinity&&c!==(-Infinity)){f=ARJ(c);e=A0A(f,Bi);if(!e){g:{e=CB(b);BF(b,B(659));if(d!=(-10000)){if(FX(Bk(K(e),K(d)),K(CB(b))))HU(b,e+d|0);else{e=e+d|0;while(true){if(CB(b)>=e)break g;DK(b,48);}}}}return b;}if(CN(f,E(0, 2147483648))){i:{e=CB(b);BF(b,B(660));if
(d!=(-10000)){if(FX(Bk(K(e),K(d)),K(CB(b))))HU(b,e+d|0);else{e=e+d|0;while(true){if(CB(b)>=e)break i;DK(b,48);}}}}return b;}g=T(Bj(Y(f,52),K(2047)));h=Bj(f,E(4294967295, 1048575));if(!g)i=(-1074);else{i=(g-1023|0)-52|0;h=K$(h,E(0, 1048576));}j=e>=0?0:1;k=Ed(Bj(h,K(1)),Bi)?0:1;l=V(K(4),h);m=Bk(l,K(2));n=CN(h,E(0, 1048576))&&g!=1?0:1;o=Ci(Ci(l,K(1)),K(n));e=i+(-2)|0;p=0;q=0;if(e>=0){r=Jc(0,((e*78913|0)>>>18|0)-1|0);s=(( -e|0)+r|0)+((122+Q$(r)|0)-1|0)|0;t=Mo(l,r,s);u=Mo(m,r,s);v=Mo(o,r,s);if(r<=21){if(CN(CL(l,
K(5)),Bi))q=Md(l,r);else if(k)p=Md(o,r);else if(Md(m,r))u=Ci(u,K(1));}}else{w= -e|0;x=Jc(0,(Cj(w,732923)>>>20|0)-1|0);s=w-x|0;y=x-(Q$(s)-121|0)|0;t=Mc(l,s,y);u=Mc(m,s,y);v=Mc(o,s,y);r=x+e|0;if(x<=1){q=1;if(!k)u=Ci(u,K(1));else p=n!=1?0:1;}else if(x<63)q=Ed(Bj(l,Ci(CT(K(1),x-1|0),K(1))),Bi)?0:1;}z=Yb(u);w=(r+z|0)-1|0;ba=0;bb=0;if(!p&&!q){while(true){u=Ct(u,K(10));bc=Ct(v,K(10));if(FY(u,bc))break;bb=T(CL(t,K(10)));t=Ct(t,K(10));ba=ba+1|0;v=bc;}bc=Bk(t,K(Ed(t,v)&&bb<5?0:1));}else{while(true){u=Ct(u,K(10));h=Ct(v,
K(10));if(FY(u,h))break;p=p&(Ed(CL(v,K(10)),Bi)?0:1);q=q&(bb?0:1);bb=T(CL(t,K(10)));t=Ct(t,K(10));ba=ba+1|0;v=h;}if(p)while(CN(CL(v,K(10)),Bi)){q=q&(bb?0:1);bb=T(CL(t,K(10)));t=Ct(t,K(10));v=Ct(v,K(10));ba=ba+1|0;}if(q&&bb==5&&CN(Bj(t,K(1)),Bi))bb=4;bc=Bk(t,K(!(CN(t,v)&&!p)&&bb<5?0:1));}s=z-ba|0;bd=CB(b);if(j)DK(b,45);br:{if(w<0){BF(b,B(661));be=(-1);while(be>w){DK(b,48);be=be+(-1)|0;}bf=CB(b);be=0;while(be<s){H6(b,bf,T(Bk(K(48),CL(bc,K(10))))&65535);bc=Ct(bc,K(10));be=be+1|0;}}else{e=w+1|0;if(e>=s){j=CB(b);be
=0;while(be<s){H6(b,j,T(Bk(K(48),CL(bc,K(10))))&65535);bc=Ct(bc,K(10));be=be+1|0;}while(s<e){DK(b,48);s=s+1|0;}BF(b,B(662));}else{bf=CB(b);be=0;while(true){if(be>=s)break br;if(((s-be|0)-1|0)==w)H6(b,bf,46);H6(b,bf,T(Bk(K(48),CL(bc,K(10))))&65535);bc=Ct(bc,K(10));be=be+1|0;}}}}if(d!=(-10000)){while(ba>=(-1)){DK(b,48);ba=ba+(-1)|0;}if(FX(Bk(K(bd),K(d)),K(CB(b))))HU(b,bd+d|0);}return b;}e=CB(b);if(c!==(-Infinity))BF(b,B(663));else BF(b,B(664));r:{if(d!=(-10000)){if(FX(Bk(K(e),K(d)),K(CB(b))))HU(b,e+d|0);else{e
=e+d|0;while(true){if(CB(b)>=e)break r;DK(b,32);}}}}return b;}
let Q$=b=>{EZ();return (Cj(b,1217359)>>>19|0)+1|0;}
let Yb=b=>{EZ();if(CS(b,E(2808348672, 232830643)))return 19;if(CS(b,E(1569325056, 23283064)))return 18;if(CS(b,E(1874919424, 2328306)))return 17;if(CS(b,E(2764472320, 232830)))return 16;if(CS(b,E(276447232, 23283)))return 15;if(CS(b,E(1316134912, 2328)))return 14;if(CS(b,E(3567587328, 232)))return 13;if(CS(b,E(1215752192, 23)))return 12;if(CS(b,E(1410065408, 2)))return 11;if(CS(b,K(1000000000)))return 10;if(CS(b,K(100000000)))return 9;if(CS(b,K(10000000)))return 8;if(CS(b,K(1000000)))return 7;if(CS(b,K(100000)))return 6;if
(CS(b,K(10000)))return 5;if(CS(b,K(1000)))return 4;if(CS(b,K(100)))return 3;if(FX(b,K(10)))return 1;return 2;}
let Md=(b,c)=>{EZ();return ZV(b)<c?0:1;}
let ZV=b=>{let c,d,e,f,g,h,i,j;EZ();if(Ed(CL(b,K(5)),Bi))return 0;if(Ed(CL(b,K(25)),Bi))return 1;if(Ed(CL(b,K(125)),Bi))return 2;if(Ed(CL(b,K(625)),Bi))return 3;c=4;b=Ct(b,K(625));while(true){if(FY(b,Bi)){d=new Bc;e=new I;e.mY=H(16);G(e,e.mW,B(43));QV(e,e.mW,b,10);f=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.mX=O(g.data,0,i);d.mZ=1;d.m0=1;d.m1=f;D(d);}d=new L;d.mZ=1;d.m0=1;Bd(d);D(d);}if(Ed(CL(b,K(5)),Bi))break;b=Ct(b,K(5));c=c+1|0;}return c;}
let Mc=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;EZ();e=Y(b,31);f=Bj(b,K(2147483647));g=U4.data;h=V(e,K(g[c].data[0]));i=V(f,K(g[c].data[0]));j=V(e,K(g[c].data[1]));k=V(f,K(g[c].data[1]));l=V(e,K(g[c].data[2]));m=V(f,K(g[c].data[2]));n=V(e,K(g[c].data[3]));o=V(f,K(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Y(Bk(Y(Bk(Bk(Y(Bk(Bk(Y(Bk(Bk(Y(o,31),m),n),31),k),l),31),i),j),21),CT(h,10)),p);q=new Bc;r=new I;r.mY=H(16);G(r,r.mW,B(43));J(r,r.mW,p,10);s=new M;g=r.mY;t=g.data;d=r.mW;P();p=t.length;if(d>=0&&d<=
(p-0|0)){s.mX=O(g.data,0,d);q.mZ=1;q.m0=1;q.m1=s;D(q);}q=new L;q.mZ=1;q.m0=1;Bd(q);D(q);}
let Mo=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;EZ();e=Y(b,31);f=Bj(b,K(2147483647));g=K7.data;h=V(e,K(g[c].data[0]));i=V(f,K(g[c].data[0]));j=V(e,K(g[c].data[1]));k=V(f,K(g[c].data[1]));l=V(e,K(g[c].data[2]));m=V(f,K(g[c].data[2]));n=V(e,K(g[c].data[3]));o=V(f,K(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Y(Bk(Y(Bk(Bk(Y(Bk(Bk(Y(Bk(Bk(Y(o,31),m),n),31),k),l),31),i),j),21),CT(h,10)),p);q=new Bc;r=new I;r.mY=H(16);G(r,r.mW,B(43));J(r,r.mW,p,10);s=new M;g=r.mY;t=g.data;d=r.mW;P();p=t.length;if(d>=0&&d<=
(p-0|0)){s.mX=O(g.data,0,d);q.mZ=1;q.m0=1;q.m1=s;D(q);}q=new L;q.mZ=1;q.m0=1;Bd(q);D(q);}
let AGu=()=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;U4=Zq([4,326]);K7=Zq([4,291]);A2Z=H(32);BD();b=EJ;if(b.m$){c=(b.nh+0|0)+1|0;d=Q(c);DB(d,b.m8,0,31);e=new Bw;f=b.m$;e.nu=(-2);e.m$=f;e.nh=c;e.m8=d;CQ(e);b=e;}g=G7(b,EJ);e=EJ;if(e.m$){c=(e.nh+0|0)+1|0;d=Q(c);DB(d,e.m8,0,31);b=new Bw;f=e.m$;b.nu=(-2);b.m$=f;b.nh=c;b.m8=d;CQ(b);e=b;}e=G7(e,EJ);h=0;while(h<326){i=Rc(Gc(K(5)),h);j=AOC(i);EZ();f=(Cj(h,1217359)>>>19|0)+1|0;if(f!=j){b=new BK;e=new I;e.mY=H(16);J(e,e.mW,j,10);G(e,e.mW,B(665));J(e,e.mW,f,10);g=new M;d=e.mY;k
=d.data;h=e.mW;P();c=k.length;if(h>=0&&h<=(c-0|0)){g.mX=O(d.data,0,h);b.mZ=1;b.m0=1;b.m1=g;D(b);}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}l=0;m=j-121|0;while(l<4){n=U4.data[h];f=m+((3-l|0)*31|0)|0;if(f&&i.m$){if(f>0)b=EK(i,f);else{c= -f|0;o=c>>5;f=c&31;c=(i.nh+o|0)+(f?1:0)|0;d=Q(c);DB(d,i.m8,o,f);b=new Bw;f=i.m$;b.nu=(-2);b.m$=f;b.nh=c;b.m8=d;CQ(b);}}else b=i;d=n.data;b=Zr(b,g);d[l]=Cj(b.m$,b.m8.data[0]);l=l+1|0;}q:{if(h<K7.data.length){p=(j-1|0)+122|0;b=ABW(ADz(T7(EJ,p),i),EJ);c=0;while(true){if(c>=4)break q;if(!c)K7.data[h].data[c]
=QT(SF(b,(3-c|0)*31|0));else K7.data[h].data[c]=QT(UZ(SF(b,(3-c|0)*31|0),e));c=c+1|0;}}}h=h+1|0;}}
let H9=F();
let AUI=(a,b,c,d)=>{let e,f,g,h;e=0;while(e<d){f=a.mu();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
let AMt=a=>{return;}
function Mz(){let a=this;H9.call(a);a.tE=null;a.rc=0;a.xm=0;a.tA=0;}
let AJU=a=>{let b=new Mz();AH1(b,a);return b;}
let AH1=(a,b)=>{let c;c=b.data.length;a.tE=b;a.rc=0;a.xm=0;a.tA=0+c|0;}
let AJd=a=>{let b,c,d;b=a.rc;if(b>=a.tA)c=(-1);else{d=a.tE.data;a.rc=b+1|0;c=d[b]&255;}return c;}
let AV7=(a,b,c,d)=>{let e,f,g,h,i;e=a.tA-a.rc|0;if(d<e)e=d;f=0;while(f<e){g=b.data;d=c+1|0;h=a.tE.data;i=a.rc;a.rc=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
let AMK=a=>{return;}
let La=F(E4);
let Ge=F(By);
let ABL=null;let A0W=null;let AY3=null;let ZI=()=>{ZI=X(Ge);AHX();}
let AHX=()=>{let b,c;b=new Ge;ZI();b.m9=B(666);b.m6=0;ABL=b;c=new Ge;c.m9=B(667);c.m6=1;A0W=c;AY3=N(Ge,[b,c]);}
function Bw(){let a=this;Ea.call(a);a.m8=null;a.nh=0;a.m$=0;a.nu=0;}
let CR=null;let EJ=null;let AO$=null;let Kd=null;let ASj=null;let AA_=null;let BD=()=>{BD=X(Bw);AW6();}
let ANm=(a,b)=>{let c=new Bw();AAj(c,a,b);return c;}
let A2v=(a,b)=>{let c=new Bw();AE3(c,a,b);return c;}
let AAj=(a,b,c)=>{let d;BD();a.nu=(-2);a.m$=b;if(CN(Bj(c,E(0, 4294967295)),Bi)){a.nh=1;d=Q(1);d.data[0]=T(c);a.m8=d;}else{a.nh=2;a.m8=D_([T(c),Hq(c)]);}}
let AE3=(a,b,c)=>{let d,e;BD();d=c.data;a.nu=(-2);e=d.length;if(e){a.m$=b;a.nh=e;a.m8=c;CQ(a);}else{a.m$=0;a.nh=1;c=Q(1);c.data[0]=0;a.m8=c;}}
let Gc=b=>{BD();if(FX(b,Bi)){if(CN(b,K(-1)))return Kd;return ANm((-1),GM(b));}if(WD(b,K(10)))return ANm(1,b);return ASj.data[T(b)];}
let ABW=(a,b)=>{return Jd(a,b);}
let SF=(a,b)=>{let c,d,e,f;if(b&&a.m$){if(b>0)c=EK(a,b);else{b= -b|0;d=b>>5;b=b&31;e=(a.nh+d|0)+(b?1:0)|0;f=Q(e);DB(f,a.m8,d,b);c=new Bw;b=a.m$;BD();c.nu=(-2);c.m$=b;c.nh=e;c.m8=f;CQ(c);}return c;}return a;}
let T7=(a,b)=>{let c,d,e,f;if(b&&a.m$){if(b<=0)c=EK(a, -b|0);else{d=b>>5;b=b&31;e=(a.nh+d|0)+(b?1:0)|0;f=Q(e);DB(f,a.m8,d,b);c=new Bw;b=a.m$;BD();c.nu=(-2);c.m$=b;c.nh=e;c.m8=f;CQ(c);}return c;}return a;}
let Sg=(a,b)=>{let c,d,e,f,g,h;if(!b)return !(a.m8.data[0]&1)?0:1;if(b<0){c=new Jp;c.mZ=1;c.m0=1;c.m1=B(668);D(c);}d=b>>5;if(d>=a.nh)return a.m$>=0?0:1;e=a.m8.data;f=e[d];b=1<<(b&31);g=a.m$;if(g<0){if(a.nu==(-2)){if(!g)g=(-1);else{g=0;while(!e[g]){g=g+1|0;}}a.nu=g;}h=a.nu;if(d<h)return 0;f=h==d? -f|0:f^(-1);}return !(f&b)?0:1;}
let UZ=(a,b)=>{return Zr(a,b);}
let QT=a=>{return Cj(a.m$,a.m8.data[0]);}
let IT=(a,b)=>{let c,d,e;if(a===b)return 1;if(!(b instanceof Bw))return 0;d:{if(a.m$==b.m$){c=a.nh;if(c==b.nh){d=b.m8;c=c-1|0;while(c>=0){e=d.data;if(a.m8.data[c]!=e[c])break;c=c+(-1)|0;}if(c>=0?0:1){c=1;break d;}}}c=0;}return c;}
let Rc=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new Jp;c.mZ=1;c.m0=1;c.m1=B(669);D(c);}if(!b){BD();return EJ;}if(b!=1){BD();if(!IT(a,EJ)&&!IT(a,CR)){if(Sg(a,0))return Xp(a,b);d=1;while(!Sg(a,d)){d=d+1|0;}c=AEK(Cj(d,b));if(d&&a.m$){if(d>0)a=EK(a,d);else{d= -d|0;e=d>>5;d=d&31;f=(a.nh+e|0)+(d?1:0)|0;g=Q(f);DB(g,a.m8,e,d);h=new Bw;d=a.m$;h.nu=(-2);h.m$=d;h.nh=f;h.m8=g;CQ(h);a=h;}}h=Rc(a,b);if(!h.m$)c=CR;else if(!c.m$)c=CR;else{Fp();c=EX(c,h);}return c;}}return a;}
let ADz=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.m$;if(!c){b=new Jp;b.mZ=1;b.m0=1;b.m1=B(670);D(b);}d=b.nh;e=BJ(d,1);if(!e&&b.m8.data[0]==1?1:0){if(c<=0){c=a.m$;if(!c)b=a;else{b=new Bw;c= -c|0;f=a.nh;g=a.m8;BD();b.nu=(-2);b.m$=c;b.nh=f;b.m8=g;}a=b;}return a;}f=a.m$;h=a.nh;if((h+d|0)==2){i=Ct(Bj(K(a.m8.data[0]),E(4294967295, 0)),Bj(K(b.m8.data[0]),E(4294967295, 0)));if(f!=c)i=GM(i);return Gc(i);}j=BJ(h,d);j=!j?PA(a.m8,b.m8,h):j<=0?(-1):1;if(!j){if(f!=c){BD();b=Kd;}else{BD();b=EJ;}return b;}if(j==(-1)){BD();return CR;}k
=(h-d|0)+1|0;g=Q(k);l=f!=c?(-1):1;if(e)AOq(g,k,a.m8,h,b.m8,d);else AJB(g,a.m8,h,b.m8.data[0]);m=new Bw;BD();m.nu=(-2);m.m$=l;m.nh=k;m.m8=g;CQ(m);return m;}
let CQ=a=>{let b,c,d;while(true){b=a.nh;if(b<=0)break;c=a.m8.data;b=b-1|0;a.nh=b;if(c[b])break;}c=a.m8.data;d=a.nh;a.nh=d+1|0;if(!c[d])a.m$=0;}
let AEK=b=>{let c,d,e,f,g;BD();c=AA_.data;if(b<c.length)return c[b];d=b>>5;e=b&31;f=d+1|0;c=Q(f);c.data[d]=1<<e;g=new Bw;g.nu=(-2);g.m$=1;g.nh=f;g.m8=c;return g;}
let AW6=()=>{let b,c,d,e,f,g,h,i;b=new Bw;BD();b.nu=(-2);b.m$=0;b.nh=1;c=Q(1);c.data[0]=0;b.m8=c;CR=b;d=new Bw;d.nu=(-2);d.m$=1;d.nh=1;c=Q(1);c.data[0]=1;d.m8=c;EJ=d;e=new Bw;e.nu=(-2);e.m$=1;e.nh=1;c=Q(1);c.data[0]=10;e.m8=c;AO$=e;f=new Bw;f.nu=(-2);f.m$=(-1);f.nh=1;c=Q(1);c.data[0]=1;f.m8=c;Kd=f;c=Bf(Bw,11);g=c.data;g[0]=b;g[1]=d;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]=2;b.m8=h;g[2]=b;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]=3;b.m8=h;g[3]=b;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]
=4;b.m8=h;g[4]=b;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]=5;b.m8=h;g[5]=b;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]=6;b.m8=h;g[6]=b;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]=7;b.m8=h;g[7]=b;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]=8;b.m8=h;g[8]=b;b=new Bw;b.nu=(-2);b.m$=1;b.nh=1;h=Q(1);h.data[0]=9;b.m8=h;g[9]=b;g[10]=e;ASj=c;AA_=Bf(Bw,32);i=0;while(true){c=AA_.data;if(i>=c.length)break;c[i]=Gc(CT(K(1),i));i=i+1|0;}}
let Xj=F();
let ARJ=b=>{return !(isNaN(b)?1:0)?AWA(b):E(0, 2146959360);}
let L$=F(F4);
let Jp=F(BC);
let G4=F();
let AYt=null;let A2c=null;let SM=null;let Vb=null;let Fp=()=>{Fp=X(G4);AG_();}
let EX=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;Fp();if(c.nh<=b.nh){d=c;c=b;b=d;}if(b.nh<63)return VP(c,b);e=c.nh;f=(e&(-2))<<4;if(f&&c.m$){if(f>0)d=EK(c,f);else{g= -f|0;h=g>>5;g=g&31;e=(e+h|0)+(g?1:0)|0;i=Q(e);DB(i,c.m8,h,g);d=new Bw;h=c.m$;BD();d.nu=(-2);d.m$=h;d.nh=e;d.m8=i;CQ(d);}}else d=c;if(f&&b.m$){if(f>0)j=EK(b,f);else{e= -f|0;h=e>>5;e=e&31;g=(b.nh+h|0)+(e?1:0)|0;i=Q(g);DB(i,b.m8,h,e);j=new Bw;e=b.m$;BD();j.nu=(-2);j.m$=e;j.nh=g;j.m8=i;CQ(j);}}else j=b;if(f&&d.m$){if(f<=0)k=EK(d, -f|0);else{e=f>>5;h=f&31;g
=(d.nh+e|0)+(h?1:0)|0;i=Q(g);DB(i,d.m8,e,h);k=new Bw;e=d.m$;BD();k.nu=(-2);k.m$=e;k.nh=g;k.m8=i;CQ(k);}}else k=d;l=G7(c,k);if(f&&j.m$){if(f<=0)c=EK(j, -f|0);else{e=f>>5;h=f&31;g=(j.nh+e|0)+(h?1:0)|0;i=Q(g);DB(i,j.m8,e,h);c=new Bw;e=j.m$;BD();c.nu=(-2);c.m$=e;c.nh=g;c.m8=i;CQ(c);}}else c=j;m=G7(b,c);k=EX(d,j);n=EX(l,m);b=Jd(Jd(EX(G7(d,l),G7(m,j)),k),n);if(f&&b.m$){if(f<=0)b=EK(b, -f|0);else{e=f>>5;h=f&31;g=(b.nh+e|0)+(h?1:0)|0;i=Q(g);DB(i,b.m8,e,h);c=new Bw;e=b.m$;BD();c.nu=(-2);c.m$=e;c.nh=g;c.m8=i;CQ(c);b=
c;}}e=f<<1;if(e&&k.m$){if(e<=0)k=EK(k, -e|0);else{f=e>>5;e=e&31;h=(k.nh+f|0)+(e?1:0)|0;i=Q(h);DB(i,k.m8,f,e);c=new Bw;e=k.m$;BD();c.nu=(-2);c.m$=e;c.nh=h;c.m8=i;CQ(c);k=c;}}return Jd(Jd(k,b),n);}
let VP=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;Fp();d=b.nh;e=c.nh;f=d+e|0;g=b.m$==c.m$?1:(-1);if(f!=2){h=b.m8;i=c.m8;j=Q(f);ACv(h,d,i,e,j);k=new Bw;BD();k.nu=(-2);k.m$=g;k.nh=f;k.m8=j;CQ(k);return k;}l=Bk(Bk(V(Bj(K(b.m8.data[0]),E(4294967295, 0)),Bj(K(c.m8.data[0]),E(4294967295, 0))),Bi),Bi);m=T(l);n=Hq(l);if(!n){b=new Bw;BD();b.nu=(-2);b.m$=g;b.nh=1;h=Q(1);h.data[0]=m;b.m8=h;}else{b=new Bw;h=D_([m,n]);BD();b.nu=(-2);b.m$=g;b.nh=2;b.m8=h;}return b;}
let ACv=(b,c,d,e,f)=>{let g,h,i,j,k;Fp();if(c&&e){if(c==1){g=b.data[0];h=Bi;c=0;i=Bj(K(g),E(4294967295, 0));while(c<e){b=d.data;j=f.data;h=Bk(Bk(V(Bj(K(b[c]),E(4294967295, 0)),i),Bj(K(T(h)),E(4294967295, 0))),Bi);j[c]=T(h);h=Y(h,32);c=c+1|0;}f.data[e]=T(h);}else if(e!=1)UB(b,d,f,c,e);else{e=d.data[0];k=Bi;g=0;h=Bj(K(e),E(4294967295, 0));while(g<c){d=b.data;j=f.data;k=Bk(Bk(V(Bj(K(d[g]),E(4294967295, 0)),h),Bj(K(T(k)),E(4294967295, 0))),Bi);j[g]=T(k);k=Y(k,32);g=g+1|0;}f.data[c]=T(k);}return;}}
let UB=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;Fp();if(b===c&&e==f){PY(b,e,d);return;}g=0;while(g<e){h=b.data;i=Bi;j=h[g];k=0;l=Bj(K(j),E(4294967295, 0));while(k<f){h=c.data;m=d.data;j=h[k];n=g+k|0;o=m[n];p=T(i);i=Bk(Bk(V(l,Bj(K(j),E(4294967295, 0))),Bj(K(o),E(4294967295, 0))),Bj(K(p),E(4294967295, 0)));m[n]=T(i);i=Y(i,32);k=k+1|0;}d.data[g+f|0]=T(i);g=g+1|0;}}
let Xp=(b,c)=>{let d,e,f,g;Fp();BD();d=EJ;while(c>1){if(c&1)d=!b.m$?CR:!d.m$?CR:EX(d,b);e=b.nh;if(e!=1)f=A2v(1,PY(b.m8,e,Q(e<<1)));else{g=b.m$;f=!g?CR:!g?CR:EX(b,b);}c=c>>1;b=f;}return !b.m$?CR:!d.m$?CR:EX(d,b);}
let PY=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;Fp();e=0;while(e<c){f=Bi;g=e+1|0;h=g;while(h<c){i=b.data;j=d.data;k=i[e];l=i[h];m=e+h|0;n=j[m];o=T(f);f=Bk(Bk(V(Bj(K(k),E(4294967295, 0)),Bj(K(l),E(4294967295, 0))),Bj(K(n),E(4294967295, 0))),Bj(K(o),E(4294967295, 0)));j[m]=T(f);f=Y(f,32);h=h+1|0;}d.data[e+c|0]=T(f);e=g;}e=c<<1;k=0;h=0;while(h<e){i=d.data;l=i[h];i[h]=l<<1|k;k=l>>>31|0;h=h+1|0;}if(k)d.data[e]=k;f=Bi;e=0;k=0;while(e<c){i=b.data;j=d.data;g=i[e];h=i[e];m=j[k];l=T(f);f=Bk(Bk(V(Bj(K(g),E(4294967295, 0)),
Bj(K(h),E(4294967295, 0))),Bj(K(m),E(4294967295, 0))),Bj(K(l),E(4294967295, 0)));j[k]=T(f);p=Y(f,32);k=k+1|0;f=Bk(p,Bj(K(j[k]),E(4294967295, 0)));j[k]=T(f);f=Y(f,32);e=e+1|0;k=k+1|0;}return d;}
let AG_=()=>{let b,c,d,e,f,g;AYt=D_([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A2c=D_([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);SM=Bf(Bw,32);Vb=Bf(Bw,32);b=K(1);c=0;while(c<=18){Vb.data[c]=Gc(b);SM.data[c]=Gc(CT(b,c));b=V(b,K(5));c=c+1|0;}while(c<SM.data.length){d=Vb.data;e=c-1|0;f=d[e];g=d[1];if(!g.m$){BD();f=CR;}else if(!f.m$){BD();f=CR;}else{Fp();f=EX(f,g);}d[c]=f;d=SM.data;f=d[e];BD();g=AO$;if(!g.m$)f=CR;else if(!f.m$)f=CR;else{Fp();f
=EX(f,g);}d[c]=f;c=c+1|0;}}
let V9=F();
let AOC=b=>{let c,d,e,f,g,h;c=b.m$;if(!c)return 0;d=b.nh;e=d<<5;f=b.m8.data;g=d-1|0;h=f[g];if(c<0){if(b.nu==(-2)){if(!c)c=(-1);else{c=0;while(!f[c]){c=c+1|0;}}b.nu=c;}if(b.nu==g)h=h+(-1)|0;}return e-Gw(h)|0;}
let DB=(b,c,d,e)=>{let f,g,h,i,j,k;b:{if(!e)B$(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break b;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|(i[k]>>>g|0);f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}}
let EK=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;d=c>>5;c=c&31;e=b.nh;if(d>=e){if(b.m$>=0){BD();b=CR;}else{BD();b=Kd;}return b;}k:{e=e-d|0;f=e+1|0;g=Q(f);AEg(g,e,b.m8,d,c);h=b.m$;if(h>=0)f=e;else{i=0;while(true){j=BJ(i,d);if(j>=0)break;if(b.m8.data[i])break;i=i+1|0;}if(j>=0){if(c<=0){f=e;break k;}if(!(b.m8.data[i]<<(32-c|0))){f=e;break k;}}k=g.data;l=0;while(true){i=BJ(l,e);if(i>=0)break;if(k[l]!=(-1))break;k[l]=0;l=l+1|0;}if(i)f=e;k[l]=k[l]+1|0;}}m=new Bw;BD();m.nu=(-2);m.m$=h;m.nh=f;m.m8=g;CQ(m);return m;}
let AEg=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)B$(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=(i[c]>>>f|0)|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f|0;}return g;}
let ME=F();
let A1L=null;let AMT=null;let YA=b=>{let c,d,e,f,g,h,i,j;c=Bz(b.mX.length/2|0);d=c.data;e=0;f=d.length;b:{a:{while(e<f){g=e*2|0;if(g<0)break b;if(g>=b.mX.length)break b;h=b.mX.charCodeAt(g);g=g+1|0;if(g<0)break a;if(g>=b.mX.length)break a;i=b.mX.charCodeAt(g);j=AMT.data;d[e]=((j[h]<<4)+j[i]|0)<<24>>24;e=e+1|0;}return c;}b=new S;b.mZ=1;b.m0=1;D(b);}b=new S;b.mZ=1;b.m0=1;D(b);}
let ACb=()=>{let b,c,d,e;b=H(16);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;A1L=b;b=Q(128);d=b.data;AMT=b;e=0;while(e<c.length){d[c[e]]=e;if(c[e]>=65)d[(c[e]-65|0)+97|0]=e;e=e+1|0;}}
function Ly(){Bc.call(this);this.Cr=null;}
function TI(){let a=this;H9.call(a);a.xf=0;a.xM=null;}
let APd=a=>{let b,c;if(a.xf==a.xM.pl.length)return (-1);b=a.xM;c=a.xf;a.xf=c+1|0;return b.pl[c]&255;}
let Te=F();
let AEN=null;let A0s=()=>{A0s=X(Te);ATi();}
let ATi=()=>{let b,c,d,e,f;b=new Jh;c=J8(16);b.qH=0;d=Bf(Fz,c);e=d.data;b.oQ=d;b.uH=0.75;b.rG=e.length*0.75|0;AEN=b;e=Bf(Es,6).data;AZa();e[0]=AME;e[1]=AUy;e[2]=AR9;e[3]=ARt;e[4]=ASw;e[5]=ASX;c=e.length;f=0;while(f<c){b=e[f];J1(AEN,b.qF,b);f=f+1|0;}}
let Gj=F();
let AME=null;let AUy=null;let AR9=null;let ARt=null;let ASw=null;let ASX=null;let AZa=()=>{AZa=X(Gj);AQe();}
let AQe=()=>{let b,c,d,e,f,g,h,i;CC();AME=CK;b=new Qn;c=Bf(M,0);d=c.data;DX(B(671));e=d.length;f=0;while(f<e){DX(d[f]);f=f+1|0;}b.qF=B(671);b.su=c.s();AUy=b;b=new Pt;c=Bf(M,0);d=c.data;DX(B(672));e=d.length;f=0;while(f<e){DX(d[f]);f=f+1|0;}b.qF=B(672);b.su=c.s();AR9=b;g=new Jk;c=Bf(M,0);d=c.data;DX(B(673));h=d.length;i=0;while(i<h){DX(d[i]);i=i+1|0;}g.qF=B(673);g.su=c.s();g.vR=1;g.uP=0;ARt=g;b=new Jk;c=Bf(M,0);d=c.data;DX(B(674));h=d.length;i=0;while(i<h){DX(d[i]);i=i+1|0;}b.qF=B(674);b.su=c.s();b.vR=0;b.uP
=0;ASw=b;b=new Jk;c=Bf(M,0);d=c.data;DX(B(675));h=d.length;i=0;while(i<h){DX(d[i]);i=i+1|0;}b.qF=B(675);b.su=c.s();b.vR=0;b.uP=1;ASX=b;}
let Qn=F(Es);
let AFD=a=>{let b,c,d,e,f;b=new RP;c=Bz(1);d=c.data;d[0]=63;D4();e=FN;b.rZ=e;b.rJ=e;f=d.length;if(f&&f>=b.qC){b.uT=a;b.tS=c.s();b.ua=1.0;b.qC=1.0;b.tI=H(512);b.tv=Bz(512);return b;}e=new Bc;J_(e,B(468));D(e);}
let Pt=F(Es);
let ATD=a=>{let b,c,d,e,f;b=new SV;c=Bz(1);d=c.data;d[0]=63;D4();e=FN;b.rZ=e;b.rJ=e;f=d.length;if(f&&f>=b.qC){b.uT=a;b.tS=c.s();b.ua=1.0;b.qC=1.0;b.tI=H(512);b.tv=Bz(512);return b;}e=new Bc;J_(e,B(468));D(e);}
function Jk(){let a=this;Es.call(a);a.vR=0;a.uP=0;}
let AGq=a=>{let b,c,d,e,f,g,h;b=new O0;c=a.vR;d=a.uP;e=Bz(1);f=e.data;f[0]=63;D4();g=FN;b.rZ=g;b.rJ=g;h=f.length;if(h&&h>=b.qC){b.uT=a;b.tS=e.s();b.ua=2.0;b.qC=4.0;b.tI=H(512);b.tv=Bz(512);b.w8=c;b.xq=d;return b;}g=new Bc;J_(g,B(468));D(g);}
let ACE=F();
let PA=(b,c,d)=>{let e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=CS(Bj(K(b.data[e]),E(4294967295, 0)),Bj(K(c[e]),E(4294967295, 0)))?1:(-1);}return d;}
let Jd=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.m$;e=c.m$;if(!d)return c;if(!e)return b;f=b.nh;g=c.nh;if((f+g|0)==2){h=Bj(K(b.m8.data[0]),E(4294967295, 0));i=Bj(K(c.m8.data[0]),E(4294967295, 0));if(d!=e)return Gc(d>=0?Ci(h,i):Ci(i,h));j=Bk(h,i);k=T(j);l=Hq(j);if(!l){b=new Bw;BD();b.nu=(-2);b.m$=d;b.nh=1;m=Q(1);m.data[0]=k;b.m8=m;}else{b=new Bw;m=D_([k,l]);BD();b.nu=(-2);b.m$=d;b.nh=2;b.m8=m;}return b;}if(d==e){if(f<g){m=c.m8;n=b.m8;o=Q(g+1|0);Ml(o,m,g,n,f);}else{n=b.m8;m=c.m8;o=Q(f+1|0);Ml(o,n,f,m,g);}}else
{p=BJ(f,g);p=!p?PA(b.m8,c.m8,f):p<=0?(-1):1;if(!p){BD();return CR;}if(p!=1){m=c.m8;n=b.m8;o=Q(g);Mk(o,m,g,n,f);d=e;}else{m=b.m8;n=c.m8;o=Q(f);Mk(o,m,f,n,g);}}m=o.data;q=new Bw;e=m.length;BD();q.nu=(-2);q.m$=d;q.nh=e;q.m8=o;CQ(q);return q;}
let Ml=(b,c,d,e,f)=>{let g,h,i,j;g=b.data;b=e.data;c=c.data;h=Bk(Bj(K(c[0]),E(4294967295, 0)),Bj(K(b[0]),E(4294967295, 0)));g[0]=T(h);i=Fq(h,32);if(d<f){j=1;while(j<d){h=Bk(i,Bk(Bj(K(c[j]),E(4294967295, 0)),Bj(K(b[j]),E(4294967295, 0))));g[j]=T(h);i=Fq(h,32);j=j+1|0;}while(j<f){h=Bk(i,Bj(K(b[j]),E(4294967295, 0)));g[j]=T(h);i=Fq(h,32);j=j+1|0;}}else{j=1;while(j<f){h=Bk(i,Bk(Bj(K(c[j]),E(4294967295, 0)),Bj(K(b[j]),E(4294967295, 0))));g[j]=T(h);i=Fq(h,32);j=j+1|0;}while(j<d){h=Bk(i,Bj(K(c[j]),E(4294967295, 0)));g[j]
=T(h);i=Fq(h,32);j=j+1|0;}}if(Ed(i,Bi))g[j]=T(i);}
let G7=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=b.m$;e=c.m$;if(!e)return b;if(!d){if(!e)b=c;else{b=new Bw;d= -e|0;e=c.nh;f=c.m8;BD();b.nu=(-2);b.m$=d;b.nh=e;b.m8=f;}return b;}g=b.nh;h=c.nh;if((g+h|0)==2){i=Bj(K(b.m8.data[0]),E(4294967295, 0));j=Bj(K(c.m8.data[0]),E(4294967295, 0));if(d<0)i=GM(i);if(e<0)j=GM(j);return Gc(Ci(i,j));}k=BJ(g,h);l=!k?PA(b.m8,c.m8,g):k<=0?(-1):1;if(l==(-1)){k= -e|0;if(d==e){f=c.m8;m=b.m8;n=Q(h);Mk(n,f,h,m,g);}else{f=c.m8;m=b.m8;n=Q(h+1|0);Ml(n,f,h,m,g);}}else if(d!=e){f=b.m8;m=c.m8;n
=Q(g+1|0);Ml(n,f,g,m,h);k=d;}else{if(!l){BD();return CR;}f=b.m8;m=c.m8;n=Q(g);Mk(n,f,g,m,h);k=d;}f=n.data;o=new Bw;d=f.length;BD();o.nu=(-2);o.m$=k;o.nh=d;o.m8=n;CQ(o);return o;}
let Mk=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=Bi;h=0;while(h<f){i=b.data;j=e.data;k=Bk(g,Ci(Bj(K(c.data[h]),E(4294967295, 0)),Bj(K(j[h]),E(4294967295, 0))));i[h]=T(k);g=Fq(k,32);h=h+1|0;}while(h<d){l=b.data;k=Bk(g,Bj(K(c.data[h]),E(4294967295, 0)));l[h]=T(k);g=Fq(k,32);h=h+1|0;}}
let AAa=F();
let AOq=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=f.data;i=Q(e+1|0);j=Q(g+1|0);k=g-1|0;l=Gw(h[k]);if(l){DB(j,f,0,l);DB(i,d,0,l);}else{B$(d,0,i,0,e);B$(f,0,j,0,g);}h=j.data;f=i.data;m=h[k];n=c-1|0;o=g-2|0;p=Bj(K(m),E(4294967295, 0));while(n>=0){k:{if(f[e]==m)q=(-1);else{r=AK7(Bk(CT(Bj(K(f[e]),E(4294967295, 0)),32),Bj(K(f[e-1|0]),E(4294967295, 0))),m);q=T(r);s=Hq(r);if(q){t=0;q=q+1|0;while(true){q=q+(-1)|0;if(t)break;u=V(Bj(K(q),E(4294967295, 0)),Bj(K(h[o]),E(4294967295, 0)));v=K(s);r=Bk(CT(v,32),
Bj(K(f[e-2|0]),E(4294967295, 0)));w=Bk(Bj(v,E(4294967295, 0)),p);if(Gw(Hq(w))>=32)s=T(w);else t=1;if(FY(Cu(u,E(0, 2147483648)),Cu(r,E(0, 2147483648))))break k;}}}}if(q){c=e-g|0;if(AQd(i,c,j,g,q)){q=q+(-1)|0;v=Bi;x=0;while(x<g){k=c+x|0;v=Bk(v,Bk(Bj(K(f[k]),E(4294967295, 0)),Bj(K(h[x]),E(4294967295, 0))));f[k]=T(v);v=Y(v,32);x=x+1|0;}}}if(b!==null)b.data[n]=q;e=e+(-1)|0;n=n+(-1)|0;}if(l){AEg(j,g,i,0,l);return j;}B$(i,0,j,0,g);return i;}
let AJB=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=Bi;g=Bj(K(e),E(4294967295, 0));h=d-1|0;i=K(e>>>1|0);e=e&1;j=CT(g,1);while(h>=0){k=c.data;l=K$(CT(f,32),Bj(K(k[h]),E(4294967295, 0)));if(CS(l,Bi)){m=Ct(l,g);f=CL(l,g);}else{n=Y(l,1);m=Ct(n,i);f=Bk(CT(CL(n,i),1),Bj(l,K(1)));if(e){if(FY(m,f))f=Ci(f,m);else if(WD(Ci(m,f),g)){f=Bk(f,Ci(j,m));m=Ci(m,K(2));}else{f=Bk(f,Ci(g,m));m=Ci(m,K(1));}}}b.data[h]=T(Bj(m,E(4294967295, 0)));h=h+(-1)|0;}return T(f);}
let AK7=(b,c)=>{let d,e,f,g,h;d=Bj(K(c),E(4294967295, 0));if(CS(b,Bi)){e=Ct(b,d);f=CL(b,d);}else{g=Y(b,1);h=K(c>>>1|0);e=Ct(g,h);f=Bk(CT(CL(g,h),1),Bj(b,K(1)));if(c&1){if(FY(e,f))f=Ci(f,e);else if(FY(Ci(e,f),d)){f=Bk(f,Ci(d,e));e=Ci(e,K(1));}else{f=Bk(f,Ci(CT(d,1),e));e=Ci(e,K(2));}}}return K$(CT(f,32),Bj(e,E(4294967295, 0)));}
let AQd=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=Bi;h=Bi;i=0;j=Bj(K(f),E(4294967295, 0));while(i<e){k=d.data;l=b.data;f=k[i];m=T(g);Fp();g=Bk(Bk(V(Bj(K(f),E(4294967295, 0)),j),Bj(K(m),E(4294967295, 0))),Bi);m=c+i|0;n=Bk(Ci(Bj(K(l[m]),E(4294967295, 0)),Bj(g,E(4294967295, 0))),h);l[m]=T(n);h=Fq(n,32);g=Y(g,32);i=i+1|0;}b=b.data;c=c+e|0;j=Bk(Ci(Bj(K(b[c]),E(4294967295, 0)),g),h);b[c]=T(j);return Hq(j);}
function N3(){let a=this;C.call(a);a.se=null;a.qm=null;a.s0=0;a.ta=0;}
function QO(){let a=this;C.call(a);a.uc=0;a.sv=0;a.p2=0;a.vm=Bi;a.xd=null;a.y8=null;a.AR=Bi;a.y0=null;}
let AEY=F();
let Zr=(b,c)=>{if(c.m$&&b.m$){BD();if(IT(c,Kd))return b;if(IT(b,Kd))return c;if(b.m$>0){if(c.m$<=0)return ACU(b,c);return AVv(b,c);}if(c.m$>0)return ACU(c,b);if(b.nh<=c.nh)return AB1(c,b);return AB1(b,c);}BD();return CR;}
let AVv=(b,c)=>{let d,e,f,g,h,i,j;d=b.nh;e=c.nh;if(d<e)e=d;if(b.nu==(-2)){if(!b.m$)d=(-1);else{d=0;while(!b.m8.data[d]){d=d+1|0;}}b.nu=d;}f=b.nu;if(c.nu==(-2)){if(!c.m$)d=(-1);else{d=0;while(!c.m8.data[d]){d=d+1|0;}}c.nu=d;}g=c.nu;if(f>g)g=f;if(g>=e){BD();return CR;}h=Q(e);i=h.data;while(g<e){i[g]=b.m8.data[g]&c.m8.data[g];g=g+1|0;}j=new Bw;BD();j.nu=(-2);j.m$=1;j.nh=e;j.m8=h;CQ(j);return j;}
let ACU=(b,c)=>{let d,e,f,g,h,i,j;if(b.nu==(-2)){if(!b.m$)d=(-1);else{d=0;while(!b.m8.data[d]){d=d+1|0;}}b.nu=d;}e=b.nu;if(c.nu==(-2)){if(!c.m$)d=(-1);else{d=0;while(!c.m8.data[d]){d=d+1|0;}}c.nu=d;}f=c.nu;d=b.nh;if(f>=d){BD();return CR;}g=Q(d);if(e<=f)e=f;if(e==f){g.data[e]=( -c.m8.data[e]|0)&b.m8.data[e];e=e+1|0;}f=c.nh;h=f>=d?d:f;i=g.data;while(e<h){i[e]=(c.m8.data[e]^(-1))&b.m8.data[e];e=e+1|0;}i:{if(e>=f)while(true){if(e>=d)break i;i[e]=b.m8.data[e];e=e+1|0;}}j=new Bw;BD();j.nu=(-2);j.m$=1;j.nh=d;j.m8=
g;CQ(j);return j;}
let AB1=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;if(b.nu==(-2)){if(!b.m$)d=(-1);else{d=0;while(!b.m8.data[d]){d=d+1|0;}}b.nu=d;}e=b.nu;if(c.nu==(-2)){if(!c.m$)d=(-1);else{d=0;while(!c.m8.data[d]){d=d+1|0;}}c.nu=d;}f=c.nu;d=c.nh;if(e>=d)return b;g=BJ(f,e);if(g>0)e=f;h=g>0?( -c.m8.data[e]|0)&(b.m8.data[e]^(-1)):g>=0?( -c.m8.data[e]|0)&( -b.m8.data[e]|0):(c.m8.data[e]^(-1))&( -b.m8.data[e]|0);if(!h){e=e+1|0;i:{while(e<d){h=(b.m8.data[e]|c.m8.data[e])^(-1);if(h)break i;e=e+1|0;}}if(!h){bq:{while(true){g=b.nh;if(e>=g)break;h
=b.m8.data[e]^(-1);if(h)break bq;e=e+1|0;}}if(!h){d=g+1|0;i=Q(d);i.data[d-1|0]=1;j=new Bw;BD();j.nu=(-2);j.m$=(-1);j.nh=d;j.m8=i;return j;}}}k=b.nh;l=Q(k);m=l.data;m[e]= -h|0;h=e+1|0;while(h<d){m[h]=b.m8.data[h]|c.m8.data[h];h=h+1|0;}while(h<k){m[h]=b.m8.data[h];h=h+1|0;}j=new Bw;BD();j.nu=(-2);j.m$=(-1);j.nh=k;j.m8=l;return j;}
function Sc(){let a=this;C.call(a);a.vG=null;a.AC=null;a.A8=0;a.wI=0;}
let Yx=(a,b)=>{let c;c=a.vG;return (c.m2-c.m3|0)<b?0:1;}
let Vv=(a,b)=>{let c;c=a.AC;return (c.m2-c.m3|0)<b?0:1;}
let Gl=F(E4);
let MT=F(F4);
function PF(){let a=this;DH.call(a);a.pI=null;a.Db=null;}
function AAs(){let a=this;C.call(a);a.yW=0;a.C3=0;a.Aq=null;}
let A0N=(a,b)=>{let c=new AAs();AKh(c,a,b);return c;}
let AKh=(a,b,c)=>{a.Aq=b;a.C3=c;a.yW=c;}
let AOF=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.Aq;c=a.yW;b=b.pg;d=b.pk;if(!d){b=new BK;b.mZ=1;b.m0=1;Bd(b);D(b);}if(c>=0){e=BJ(c,b.pU);if(e<0){k:{f=b.n2.data;g=c*2|0;if(f[g]<0)b=null;else{b=b.qt;if(!d){b=new BK;b.mZ=1;b.m0=1;Bd(b);D(b);}if(c>=0&&e<0){h=f[g];if(!d){b=new BK;b.mZ=1;b.m0=1;Bd(b);D(b);}if(c<0)break k;if(e>=0)break k;b=BR(b,h,f[g+1|0]);}else{b=new L;P();i=new I;CI(i);i.mY=H(16);J(i,i.mW,c,10);j=new M;f=i.mY;k=f.data;h=i.mW;CI(j);Kf(0,h,k.length);j.mX=O(f.data,0,h);b.mZ=1;b.m0=1;Bd(b);b.m1=j;D(b);}}return b;}b
=new L;P();i=new I;CI(i);i.mY=H(16);J(i,i.mW,c,10);j=new M;f=i.mY;k=f.data;h=i.mW;CI(j);Kf(0,h,k.length);j.mX=O(f.data,0,h);b.mZ=1;b.m0=1;Bd(b);b.m1=j;D(b);}}b=new L;P();i=new I;CI(i);i.mY=H(16);J(i,i.mW,c,10);j=new M;f=i.mY;k=f.data;h=i.mW;CI(j);Kf(0,h,k.length);j.mX=O(f.data,0,h);b.mZ=1;b.m0=1;Bd(b);b.m1=j;D(b);}
let RP=F(EY);
let AMf=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j>=d){n=h.se;if(!((n.m2-n.m3|0)<2?0:1)){i=Dc;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new Cc;i.nI=2;i.nU=1;break b;}j=j+(-1)|0;i=new Cc;i.nI=3;i.nU=2;break b;}if(m!=56320?0:1){i=new Cc;i.nI=2;i.nU=1;}if(l>=128){i=new Cc;i.nI=3;i.nU=1;j=j+(-1)|0;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.s0=j;h.ta=f;return i;}
let SV=F(EY);
let AS8=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j==d){n=h.se;if(!((n.m2-n.m3|0)<2?0:1)){i=Dc;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new Cc;i.nI=2;i.nU=1;break b;}j=j+(-1)|0;i=new Cc;i.nI=3;i.nU=2;break b;}if(m!=56320?0:1){i=new Cc;i.nI=2;i.nU=1;}if(l>=256){j=j+(-1)|0;i=new Cc;i.nI=3;i.nU=1;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.s0=j;h.ta=f;return i;}
function O0(){let a=this;EY.call(a);a.w8=0;a.xq=0;}
let ASN=(a,b,c,d,e,f,g,h)=>{let i,j;if(a.w8){if((f+2|0)>g){h=h.qm;return !(h.m3>=h.m2?0:1)?C2:null;}a.w8=0;if(!a.xq){i=e.data;j=f+1|0;i[f]=(-2);f=j+1|0;i[j]=(-1);}else{i=e.data;j=f+1|0;i[f]=(-1);f=j+1|0;i[j]=(-2);}}return !a.xq?Vo(a,b,c,d,e,f,g,h):Vd(a,b,c,d,e,f,g,h);}
let Vd=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Cc;i.nI=2;i.nU=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.qm;if((m.m2-m.m3|0)<2?0:1)break b;i=C2;break b;}j=e.data;c=f+1|0;j[f]=(l&255)<<24>>24;f=c+1|0;j[c]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.se;if((m.m2-m.m3|0)<2?0:1)break b;i=Dc;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Cc;i.nI=2;i.nU=1;break b;}if((f+4|0)
>g){c=c+(-2)|0;m=h.qm;if((m.m2-m.m3|0)<4?0:1)break b;i=C2;break b;}j=e.data;k=f+1|0;j[f]=(l&255)<<24>>24;f=k+1|0;j[k]=l>>8<<24>>24;k=f+1|0;j[f]=(n&255)<<24>>24;f=k+1|0;j[k]=n>>8<<24>>24;}}}h.s0=c;h.ta=f;return i;}
let Vo=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Cc;i.nI=2;i.nU=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.qm;if((m.m2-m.m3|0)<2?0:1)break b;i=C2;break b;}j=e.data;c=f+1|0;j[f]=l>>8<<24>>24;f=c+1|0;j[c]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.se;if((m.m2-m.m3|0)<2?0:1)break b;i=Dc;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Cc;i.nI=2;i.nU=1;break b;}if((f+4|0)
>g){c=c+(-2)|0;m=h.qm;if((m.m2-m.m3|0)<4?0:1)break b;i=C2;break b;}j=e.data;k=f+1|0;j[f]=l>>8<<24>>24;f=k+1|0;j[k]=(l&255)<<24>>24;k=f+1|0;j[f]=n>>8<<24>>24;f=k+1|0;j[k]=(n&255)<<24>>24;}}}h.s0=c;h.ta=f;return i;}
function PC(){let a=this;DH.call(a);a.pQ=null;a.v2=null;a.vu=null;a.vO=null;}
let AHx=(a,b)=>{a.pQ.pI.vm=BQ(b);}
let AFQ=(a,b)=>{b=a.pQ.pI;b.sv=1;b.p2=0;}
let Z0=(a,b,c)=>{IC(a.vO,a.v2,a.vu,c);b=a.pQ.pI;b.uc=1;b.p2=0;return 0;}
function Ji(){let a=this;C.call(a);a.nN=null;a.nx=0;}
let ER=null;let C3=(a,b)=>{let c,d,e,f;c=a.nN;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=H(e);B$(c,0,f,0,a.nx);a.nN=f;}
let JV=a=>{let b,c,d;b=a.nx+4|0;if(b>a.nN.data.length)C3(a,b);c=a.nN.data;d=a.nx;b=d+1|0;a.nx=b;c[d]=110;d=b+1|0;a.nx=d;c[b]=117;b=d+1|0;a.nx=b;c[d]=108;a.nx=b+1|0;c[b]=108;}
let Gy=(a,b)=>{let c,d,e;c=a.nx;if(c==a.nN.data.length)C3(a,c+1|0);d=a.nN.data;e=a.nx;a.nx=e+1|0;d[e]=b;}
let NT=(a,b,c,d)=>{let e,f,g,h;if(b==(-2147483648)){e=B(676).mX.length;b=a.nx+e|0;if(b>a.nN.data.length)C3(a,b);Hw(B(676),0,e,a.nN,a.nx);a.nx=b;return a;}if(b<0){f=a.nx;if(f==a.nN.data.length)C3(a,f+1|0);g=a.nN.data;f=a.nx;a.nx=f+1|0;g[f]=45;b= -b|0;}c:{if(c>1){h=b>=0?1:2;f=b;while(true){f=f/10|0;if(!f)break;h=h+1|0;}e=c-h|0;while(true){if(e<=0)break c;c=a.nx;if(c==a.nN.data.length)C3(a,c+1|0);g=a.nN.data;h=a.nx;a.nx=h+1|0;g[h]=d;e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){c=ER.data[T(Ct(CL(K(b),E(1410065408, 2)),
K(1000000000)))];d=a.nx;if(d==a.nN.data.length)C3(a,d+1|0);g=a.nN.data;e=a.nx;a.nx=e+1|0;g[e]=c;}if(b>=100000000){c=ER.data[(b%1000000000|0)/100000000|0];d=a.nx;if(d==a.nN.data.length)C3(a,d+1|0);g=a.nN.data;e=a.nx;a.nx=e+1|0;g[e]=c;}if(b>=10000000){c=ER.data[(b%100000000|0)/10000000|0];d=a.nx;if(d==a.nN.data.length)C3(a,d+1|0);g=a.nN.data;e=a.nx;a.nx=e+1|0;g[e]=c;}if(b>=1000000){c=ER.data[(b%10000000|0)/1000000|0];d=a.nx;if(d==a.nN.data.length)C3(a,d+1|0);g=a.nN.data;e=a.nx;a.nx=e+1|0;g[e]=c;}if(b>=100000)Gy(a,
ER.data[(b%1000000|0)/100000|0]);Gy(a,ER.data[(b%100000|0)/10000|0]);}if(b>=1000)Gy(a,ER.data[(b%10000|0)/1000|0]);if(b>=100)Gy(a,ER.data[(b%1000|0)/100|0]);if(b>=10)Gy(a,ER.data[(b%100|0)/10|0]);Gy(a,ER.data[b%10|0]);return a;}
let AAE=()=>{ER=P2([48,49,50,51,52,53,54,55,56,57]);}
let Lg=F(BC);
let MV=F(BC);
function Ms(){Gl.call(this);this.yf=0;}
let AKV=a=>{let b,c,d,e,f,g,h;b=a.yf;c=new I;c.mY=H(16);G(c,c.mW,B(677));J(c,c.mW,b,10);d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);return d;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
function Ld(){Gl.call(this);this.ya=0;}
let AKe=a=>{let b,c,d,e,f,g,h;b=a.ya;c=new I;c.mY=H(16);G(c,c.mW,B(678));J(c,c.mW,b,10);d=new M;e=c.mY;f=e.data;g=c.mW;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.mX=O(e.data,0,g);return d;}c=new L;c.mZ=1;c.m0=1;Bd(c);D(c);}
let NF=F();
let ATg=null;let A2F=()=>{A2F=X(NF);AOP();}
let AOP=()=>{let b,c;Fl();b=Q((AEx.s()).data.length);c=b.data;ATg=b;c[H0.m6]=1;c[HN.m6]=2;c[Hh.m6]=3;c[G3.m6]=4;c[Tm.m6]=5;}
let L7=F(EW);
let Ko=F(EW);
let NR=F(EW);
function G9(){let a=this;Eg.call(a);a.rd=0;a.pT=null;a.qs=null;a.pX=null;}
let AIG=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new N5;c.rk=a;c.sc=b;c=B0(c,"handleEvent");b.onreadystatechange=c;c=a.pX;d=a.qs;e=new ID;e.x6=c;e.u2=d;c=B0(e,"handleEvent");b.onprogress=c;d=a.pT;f=a.rd;b.open("GET",BP(d),!!f);if(a.rd){d="arraybuffer";b.responseType=d;}b.send();}
function Ur(){let a=this;DH.call(a);a.vD=null;a.CQ=null;}
let AYs=(a,b)=>{let c=new Ur();AUL(c,a,b);return c;}
let AUL=(a,b,c)=>{a.CQ=b;a.vD=c;}
let AIL=(a,b)=>{a.vD.pQ.pI.vm=BQ(b);}
let APN=(a,b)=>{b=a.vD.pQ.pI;b.sv=1;b.p2=0;}
let AHn=(a,b,c)=>{c=a.vD;b=null;IC(c.vO,c.v2,c.vu,b);b=c.pQ.pI;b.uc=1;b.p2=0;return 0;}
let Xo=F();
function Fu(){C.call(this);this.uz=0;}
let AOr=null;let APH=null;let ALe=null;let I6=a=>{return a.uz;}
let AHR=()=>{let b;b=new Fu;b.uz=1;AOr=b;b=new Fu;b.uz=0;APH=b;ALe=Br(I8);}
let SU=F();
let BU=null;let AK3=()=>{AK3=X(SU);AFK();}
let AEv=()=>{let b,c,d,e,f,g;AK3();b=BU;if(b.rP){b.rP=0;c=b.qf.data;d=null;e=0;f=c.length;if(e>f){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}c=b.oE.data;d=null;e=0;f=c.length;if(e>f){b=new Bc;b.mZ=1;b.m0=1;D(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}}EM();BE(b,B(679),AGP);BE(BU,B(680),Yu);BE(BU,B(681),W8);BE(BU,B(682),AMu);BE(BU,B(683),AQn);BE(BU,B(684),AWJ);BE(BU,B(685),AVx);BE(BU,B(686),AF1);BE(BU,B(687),AUx);BE(BU,B(688),AVa);BE(BU,B(689),AQ9);BE(BU,B(690),ATW);BE(BU,B(691),ALL);BE(BU,B(692),ALo);BE(BU,
B(693),ASl);BE(BU,B(694),AVM);BE(BU,B(695),AUp);BE(BU,B(696),AW3);BE(BU,B(697),AGK);BE(BU,B(698),AM0);BE(BU,B(699),AWZ);BE(BU,B(700),APq);BE(BU,B(701),AVY);BE(BU,B(702),AU1);BE(BU,B(703),ATR);BE(BU,B(704),APn);BE(BU,B(705),AGg);BE(BU,B(706),AO5);BE(BU,B(707),ALB);BE(BU,B(708),AMA);BE(BU,B(709),AK$);BE(BU,B(710),AOZ);BE(BU,B(711),ARN);BE(BU,B(712),ASy);}
let AFK=()=>{BU=Fi(51,0.800000011920929);AEv();}
function NE(){let a=this;DH.call(a);a.tq=null;a.zj=null;a.A6=null;a.uQ=null;}
let ALD=(a,b)=>{a.tq.pQ.pI.vm=BQ(b);}
let AGj=(a,b)=>{b=a.tq.pQ.pI;b.sv=1;b.p2=0;}
let Uw=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.zj;if(e!==null)d.setAttribute("crossOrigin",BP(e));a:{e=a.uQ;e.nO=e.nO+1|0;e=new Pa;e.vV=a;e.Dd=b;e.AA=c;e.yI=d;d.addEventListener("load",B0(e,"handleEvent"),!!0);d.addEventListener("error",B0(e,"handleEvent"),!!0);if(!a.uQ.Bd){b=BP(b);d.src=b;}else{b=a.A6;c=ACh(c);e=new I;e.mY=H(16);G(e,e.mW,B(713));f=e.mW;if(b===null)b=B(2);G(e,f,b);G(e,e.mW,B(714));f=e.mW;if(c===null)c=B(2);G(e,f,c);b=new M;g=e.mY;h=g.data;i=e.mW;P();j=h.length;if
(i<0)break a;if(i>(j-0|0))break a;b.mX=O(g.data,0,i);b=BP(b);d.src=b;}return 0;}b=new L;b.mZ=1;b.m0=1;Bd(b);D(b);}
let AMb=(a,b,c)=>{return Uw(a,b,c);}
function N5(){let a=this;C.call(a);a.sc=null;a.rk=null;}
let QM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sc.readyState==4){if(a.sc.status==200){b=a.rk;if(b.pX.pi){if(BA===null){c=new CD;c.oq=Dd;d=new I;d.mY=H(16);c.nF=d;c.oo=H(32);c.ow=0;CC();c.ot=CK;BA=c;}e=BA;b=b.pT;d=new I;d.mY=H(16);G(d,d.mW,B(647));f=d.mW;if(b===null)b=B(2);G(d,f,b);KX(e,VV(d.mY,0,d.mW));}e
=a.sc.response;g=new Int8Array(e);b=a.rk;d=b.qs;c=b.pT;b=new IE;b.pl=g;b.xF=e;d.er(c,b);}else if(a.sc.status!=404&&a.sc.status!=403){try{h=K(100);$p=1;continue _;}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){}else{throw $$e;}}b=a.rk;d=b.pX;f=b.rd;c=b.pT;e=b.qs;if(d.pi){if(BA===null){g=new CD;g.oq=Dd;b=new I;b.mY=H(16);g.nF=b;g.oo=H(32);g.ow=0;CC();g.ot=CK;BA=g;}g=BA;b=new I;b.mY=H(16);G(b,b.mW,B(114));G(b,b.mW,c===null?B(2):c);i=new M;j=b.mY;k=j.data;l=b.mW;P();m=k.length;if(l>=0&&l<=(m-0|0)){i.mX=O(j.data,
0,l);b=g.nF;G(b,b.mW,i);m=b.mW;Bb(b,m,m+1|0);b.mY.data[m]=10;CM(g);}else{b=new L;Z(b);D(b);}}d.nO=d.nO+1|0;b=new G9;b.pX=d;b.rd=f;b.pT=c;b.qs=e;d=null;c=null;b.pt=new C;b.ps=1;b.qj=c;b.qA=d;n=C4;C4=n+1|0;b.qx=K(n);d=new E_;d.ql=b;Gd(d);}else{b=a.rk;b.qs.lP(b.pT);}b=a.rk.pX;b.nO=b.nO-1|0;}return;case 1:b:{try{IY(h);if(GC()){break _;}break b;}catch($$e){$$je=Bx($$e);if($$je instanceof Dr){}else{throw $$e;}}}b=a.rk;d=b.pX;f=b.rd;c=b.pT;e=b.qs;if(d.pi){if(BA===null){g=new CD;g.oq=Dd;b=new I;b.mY=H(16);g.nF=b;g.oo
=H(32);g.ow=0;CC();g.ot=CK;BA=g;}g=BA;b=new I;b.mY=H(16);G(b,b.mW,B(114));G(b,b.mW,c===null?B(2):c);i=new M;j=b.mY;k=j.data;l=b.mW;P();m=k.length;if(l>=0&&l<=(m-0|0)){i.mX=O(j.data,0,l);b=g.nF;G(b,b.mW,i);m=b.mW;Bb(b,m,m+1|0);b.mY.data[m]=10;CM(g);}else{b=new L;Z(b);D(b);}}d.nO=d.nO+1|0;b=new G9;b.pX=d;b.rd=f;b.pT=c;b.qs=e;d=null;c=null;b.pt=new C;b.ps=1;b.qj=c;b.qA=d;n=C4;C4=n+1|0;b.qx=K(n);d=new E_;d.ql=b;Gd(d);b=a.rk.pX;b.nO=b.nO-1|0;return;default:C9();}}BO().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let AEr=(a,b)=>{let $p,$z;$p=0;if(C_()){let $T=BO();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:QM(a,b);if(GC()){break _;}return;default:C9();}}BO().s(a,b,$p);}
function Pa(){let a=this;C.call(a);a.Dd=null;a.AA=null;a.yI=null;a.vV=null;}
let XK=(a,b)=>{let c,d;c=Be(b.type);if(c===B(715))d=1;else if(!(B(715) instanceof M))d=0;else{b=B(715);d=c.mX!==b.mX?0:1;}if(d){b=a.vV.tq.pQ.pI;b.sv=1;b.p2=0;}else{b=a.AA;b.xO=a.yI;c=a.vV.tq;IC(c.vO,c.v2,c.vu,b);b=c.pQ.pI;b.uc=1;b.p2=0;}b=a.vV.uQ;b.nO=b.nO-1|0;}
let AKQ=(a,b)=>{XK(a,b);}
A4B([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang"]);
A4C([C,0,0,[],0,3,0,0,["cF",A4D(AJY),"cG",A4E(APr),"l",A4D(AIw)],ADr,0,C,[],0,3,0,0,0,Gr,0,C,[],0,3,0,A5i,0,Nl,0,C,[],3,3,0,0,0,LX,0,C,[Nl],0,3,0,0,0,Dl,0,C,[],3,3,0,0,0,ADc,0,LX,[Dl],0,3,0,0,0,Dq,0,C,[],3,3,0,0,0,F$,0,C,[Dq],0,3,0,0,0,C8,0,C,[],3,3,0,0,0,BX,0,C,[],3,3,0,0,0,By,0,C,[C8,BX],1,3,0,0,["l",A4D(AMk)],EP,0,By,[],12,3,0,AZr,0,Gf,0,C,[],0,3,0,0,0,L1,0,C,[],3,3,0,0,0,I5,0,Gf,[L1],0,3,0,0,0,GH,0,C,[],3,3,0,0,0,D0,0,C,[],3,3,0,0,0,G6,0,C,[GH,D0],0,3,0,0,0,GS,0,C,[],3,3,0,0,0,BT,0,C,[GS],0,3,0,0,0,Ht,0,
BT,[],0,3,0,0,0,ABr,0,Ht,[],0,0,0,0,0,Gh,0,By,[],12,3,0,AVi,0,MJ,0,C,[],3,3,0,0,0,Je,0,C,[MJ],3,3,0,0,0,GP,0,C,[],3,3,0,0,0,DA,0,C,[GP],1,3,0,0,0,ACY,0,DA,[],0,0,0,0,0,Mt,0,G6,[],0,3,0,0,0,H7,0,C,[GS],0,3,0,0,0,WK,0,C,[],1,3,0,0,0,Uh,0,C,[],0,3,0,0,0,TF,0,C,[],3,3,0,0,0,Lq,0,C,[TF],0,3,0,0,0,AA$,0,Lq,[],0,0,0,0,0,YF,0,F$,[],0,3,0,0,0,PW,0,C,[],32,0,0,A5j,0,Z4,0,C,[],1,3,0,0,0,Ru,0,C,[],32,0,0,A5k,0,ACX,0,DA,[],0,0,0,0,0,FJ,0,C,[MJ],0,3,0,0,0,Rr,0,FJ,[Je],0,3,0,0,0,GZ,0,C,[],4,3,0,A5l,0,LH,0,C,[GS],1,3,0,0,0,TA,
0,Ht,[],0,3,0,0,0,PB,0,C,[],0,3,0,0,0,JX,0,C,[],0,3,0,A5m,0,My,0,C,[GS],1,3,0,0,0,IV,0,FJ,[Je],0,3,0,0,0]);
A4C([TB,0,FJ,[Je],0,3,0,0,0,DS,0,BT,[],0,3,0,0,0,Tp,0,IV,[],0,3,0,0,0,V6,0,F$,[],0,3,0,0,0,KI,0,C,[],3,3,0,0,0,ZJ,0,F$,[],0,3,0,0,0,X0,0,C,[Dq],4,3,0,0,0,Nf,0,C,[],32,0,0,A5n,0,Cp,0,By,[],12,3,0,AAq,0,Cb,0,C,[Dq],1,3,0,0,0,Fj,0,Cb,[],1,3,0,0,0,Yr,0,Fj,[],0,3,0,0,0,AAX,0,Fj,[],0,3,0,0,0,CW,0,Cb,[],1,3,0,0,0,E8,0,CW,[],1,3,0,0,0,Us,0,E8,[],0,3,0,0,0,Vz,0,C,[GS],0,0,0,0,0,M2,0,Cb,[],0,3,0,0,0,Wc,0,M2,[],0,3,0,0,0,Xh,0,Cb,[],0,3,0,0,0,ZD,0,Cb,[],0,3,0,0,0,AB6,0,Cb,[],0,3,0,0,0,ACu,0,C,[],0,3,0,0,0,LA,0,Cb,[],1,
3,0,0,0,Zk,0,LA,[],0,3,0,0,0,Wx,0,CW,[],0,3,0,0,0,ACS,0,CW,[],0,3,0,0,0,ADd,0,E8,[],0,3,0,0,0,ABn,0,Cb,[],0,3,0,0,0,ABw,0,E8,[],0,3,0,0,0,AD7,0,CW,[],0,3,0,0,0,ADH,0,CW,[],0,3,0,0,0,Xz,0,Cb,[],0,3,0,0,0,Y_,0,CW,[],0,3,0,0,0,Ze,0,Cb,[],0,3,0,0,0,XQ,0,Cb,[],0,3,0,0,0,Zl,0,Fj,[],0,3,0,0,0,U1,0,CW,[],0,3,0,0,0,AD$,0,Cb,[],0,3,0,0,0,AA5,0,E8,[],0,3,0,0,0,XE,0,Fj,[],0,3,0,0,0,AAD,0,Cb,[],0,3,0,0,0,VA,0,CW,[],0,3,0,0,0,YO,0,CW,[],0,3,0,0,0,ON,0,C,[Dl],0,3,0,0,0,C5,0,I5,[KI],0,3,0,0,0,De,0,C5,[],0,3,0,A5o,0,Go,0,De,
[GH],0,3,0,0,0,Ll,0,Go,[],0,3,0,0,0,Wt,0,Ll,[],0,3,0,0,0]);
A4C([ACV,0,BT,[],0,0,0,0,0,L_,0,C5,[],0,3,0,0,0,Qp,0,C,[],3,3,0,0,0,E0,0,C,[Qp],1,3,0,0,0,Xr,0,E0,[],0,0,0,0,0,Dm,0,Gf,[KI],0,3,0,0,0,U_,0,Dm,[],0,3,0,0,0,ACT,0,BT,[],0,0,0,0,0,BL,0,C,[],1,3,0,AFO,0,Rz,0,BL,[],0,0,0,0,0,ABa,0,BL,[],0,0,0,0,0,KD,0,DS,[],0,3,0,0,0,Zh,0,KD,[],0,3,0,0,0,Ts,0,BL,[],0,0,0,0,0,ADX,0,BT,[],0,0,0,0,0,HW,0,De,[],0,3,0,0,0,ABb,0,BL,[],0,0,0,0,0,GG,0,C,[],3,3,0,0,0,EA,0,C,[BX,GG],0,3,0,0,0,Ec,"Table$DebugRect",12,EA,[],0,3,0,AWm,0,Xu,0,E0,[],0,0,0,0,0,FD,0,Dm,[GH],0,3,0,0,0,WC,0,FD,[],
0,3,0,0,0,YT,0,BT,[],0,0,0,0,0,Ph,0,C,[],3,3,0,0,0,AB8,0,C,[Ph],0,3,0,0,0,GI,0,C,[],0,3,0,0,0,GW,0,GI,[],0,3,0,0,0,Sa,0,GW,[],0,3,0,0,0,Mp,0,Dm,[GH],0,3,0,0,0,X$,0,Mp,[],0,3,0,0,0,AER,0,L_,[],0,0,0,0,0,KJ,0,C5,[],0,3,0,0,0,AFd,0,Go,[],0,3,0,0,0,MK,0,Dm,[L1],0,3,0,0,0,Tq,0,BL,[],0,0,0,0,0,SB,0,C,[],0,3,0,0,0,XM,0,C,[GP],0,0,0,0,0,Zi,0,BT,[],0,0,0,0,0,Z9,0,DA,[],0,0,0,0,0,Ys,0,C,[],0,3,0,0,0,ABS,0,BT,[],0,0,0,0,0,AED,0,DS,[],0,0,0,0,0,YR,0,H7,[],0,0,0,0,0,Rv,0,BL,[],0,0,0,0,0,Ry,0,BL,[],0,0,0,0,0,Q4,0,C,[],3,
3,0,0,0,Kc,0,C,[],0,3,0,0,0,N0,0,Kc,[],0,3,0,0,0,Xs,0,E0,[],0,0,0,0,0]);
A4C([ACR,0,LH,[],0,0,0,0,0,ACW,0,My,[],0,0,0,0,0,ADY,0,BT,[],0,0,0,0,0,ADZ,0,DS,[],0,0,0,0,0,Tr,0,BL,[],0,0,0,0,0,Et,0,C,[Dq],0,3,0,A5q,0,Qj,0,GW,[],0,3,0,0,0,Y3,0,BT,[],0,0,0,0,0,Vj,0,DA,[],0,0,0,0,0,RA,0,BL,[],0,0,0,0,0,WM,0,C5,[],0,3,0,0,0,YS,0,BT,[],0,0,0,0,0,QE,0,C,[],0,3,0,0,0,HY,0,BL,[],0,3,0,0,0,XN,0,KJ,[],0,3,0,0,0,Rw,0,BL,[],0,0,0,0,0,Qy,0,Dm,[GH],0,3,0,0,0,Y0,0,Mt,[],0,0,0,0,0,S8,0,C,[],0,3,0,0,0,KQ,0,Dm,[],0,3,0,A5r,0,Of,0,C,[],0,3,0,0,0,ABc,0,BL,[],0,0,0,0,0,Tt,0,BL,[],0,0,0,0,0,ACA,0,HW,[],0,3,
0,0,0,Rx,0,BL,[],0,0,0,0,0,PX,0,C,[],0,3,0,0,0,AEA,0,C,[],0,3,0,0,0,Dz,0,By,[],12,3,0,A24,0,AEJ,0,BL,[],0,0,0,0,0,YG,0,DA,[],0,0,0,0,0,Dk,0,C,[],1,3,0,0,0,Tu,0,Dk,[],0,0,0,0,0,Vc,0,C,[Q4],0,3,0,0,0,Tc,0,C,[],0,3,0,0,0,QP,0,C,[],0,3,0,0,0,Rs,0,C,[],0,3,0,0,0,JZ,0,BT,[],0,3,0,0,0,Vi,0,DA,[],0,0,0,0,0,AD0,0,MK,[],0,0,0,0,0,Vf,0,C,[],3,3,0,0,0,Y4,0,BT,[],0,0,0,0,0,AE6,0,C5,[],0,3,0,0,0,AAW,0,C5,[],0,3,0,0,0,Y1,0,DS,[],0,0,0,0,0,Mw,0,C,[],0,3,0,0,0,Xq,0,Mw,[],0,0,0,0,0,ADM,0,Gf,[Dl],0,3,0,0,0,UR,0,BT,[],0,0,0,0,
0,ACG,0,Go,[],0,3,0,0,0,AAo,0,BT,[],0,0,0,0,0]);
A4C([AEs,0,DS,[],0,0,0,0,0,SG,0,GI,[],0,3,0,0,0,AA0,0,C5,[],0,3,0,0,0,QI,0,C,[],0,3,0,0,0,P7,0,C,[],0,3,0,0,0,Z_,0,Dm,[],0,3,0,0,0,AEE,0,G6,[],0,0,0,0,0,US,0,BT,[],0,0,0,0,0,RS,0,C5,[],0,3,0,0,0,AEQ,0,JZ,[],0,3,0,0,0,UT,0,De,[],0,0,0,0,0,Xt,0,E0,[],0,0,0,0,0,T2,0,C,[],1,3,0,0,0,Tn,0,C,[],0,3,0,0,0,D2,0,C,[BX],0,3,0,A5s,0,Bl,0,C,[],1,3,0,D1,0,VJ,0,Bl,[],0,3,0,0,0,YI,0,C,[],0,3,0,0,0,R2,0,Bl,[],0,0,0,0,0,AEe,0,C,[],0,3,0,0,0,E2,0,Bl,[],0,3,0,0,0,H$,0,E2,[],0,3,0,0,0,H3,0,E2,[],0,3,0,0,0,JL,0,C,[],3,3,0,0,0,Wf,
0,C,[JL],0,3,0,0,0,R5,0,Bl,[],0,0,0,0,0,AC4,0,C,[GG],0,3,0,0,0,R1,0,Bl,[],0,0,0,0,0,H5,0,Bl,[],0,3,0,0,0,R0,0,Bl,[],0,0,0,0,0,RZ,0,Bl,[],0,0,0,0,0,JA,0,C,[],4,3,0,0,0,Ug,0,Dk,[],0,0,0,0,0,Jm,0,C,[],3,3,0,0,0,Bu,0,C,[BX,Jm],0,3,0,0,0,AAO,0,Bl,[],0,0,0,0,0,GU,0,Bl,[],0,3,0,0,0,Z$,0,C,[],0,3,0,0,0,R8,0,Bl,[],0,0,0,0,0,TM,0,GU,[],0,3,0,0,0,XH,0,C,[Dq],0,3,0,0,0,EU,0,By,[],12,3,0,A2h,0,QN,0,C,[],0,3,0,A5t,0,Iu,0,Bl,[],0,3,0,0,0,YW,0,Iu,[],0,3,0,0,0,Rk,0,Bl,[],0,0,0,0,0,AAz,0,C,[BX],4,3,0,0,0,RY,0,Bl,[],0,0,0,0,0,D$,
0,C,[BX,Jm],0,3,0,A1H,0,Ve,0,H5,[],0,3,0,0,0]);
A4C([Ym,0,Bl,[],0,3,0,0,0,V7,0,C,[],0,3,0,0,0,AE0,0,C,[GG],0,3,0,0,0,R3,0,Bl,[],0,0,0,0,0,ADS,0,Bl,[],0,3,0,0,0,AAP,0,Bl,[],0,0,0,0,0,Yh,0,H5,[],0,3,0,0,0,Kj,0,C,[BX],0,3,0,A5u,0,KH,0,C,[BX],0,3,0,A32,0,LD,0,C,[BX],0,3,0,A1f,0,Wh,0,C,[BX],0,3,0,0,0,UC,0,C,[BX],0,3,0,0,0,ABN,0,C,[BX,GG],0,3,0,0,0,Yk,0,C,[JL],0,3,0,0,0,RK,0,C,[],4,3,0,AQQ,0,Cl,0,C,[],4,3,0,A5v,0,Vm,0,C,[],4,3,0,0,0,Xv,0,Iu,[],0,3,0,0,0,DO,0,C,[BX],0,3,0,GL,0,OD,0,C,[],3,3,0,0,0,H2,0,C,[OD,BX],0,3,0,0,0,Ra,0,H2,[],0,3,0,0,0,AAN,0,Bl,[],0,0,0,0,
0,R4,0,Bl,[],0,0,0,0,0,JO,0,C,[],0,3,0,ANn,0,EG,0,C,[BX],0,3,0,Sf,0,Uc,0,C,[],0,3,0,0,0,AAT,0,C,[],0,3,0,0,0,Bg,0,C,[BX,Jm],0,3,0,CP,0,XL,0,C,[BX,GG],0,3,0,0,0,WO,0,Dk,[],0,0,0,0,0,QB,0,GU,[],0,3,0,0,0,ABd,0,C,[JL],0,3,0,0,0,Vw,0,C,[],0,3,0,0,0,ADf,0,C,[BX],0,3,0,0,0,J3,0,C,[BX],0,3,0,0,0,Rm,0,Bl,[],0,0,0,0,0,ADh,0,C,[],0,3,0,0,0,Vy,0,C,[],0,3,0,0,0,ABI,0,C,[],0,3,0,0,0,ADe,0,C,[BX],0,3,0,0,0,AAu,0,C,[],3,3,0,0,0,XS,0,C,[BX],0,3,0,0,0,Sb,0,C,[],0,0,0,0,0,Dw,"GlyphLayout",14,C,[Dq],0,3,0,Eh,["B",A4D(SZ),"l",
A4D(AA4)],GX,0,C,[],0,3,0,0,0,AAK,0,GX,[],0,3,0,0,0,ET,"BitmapFont",14,C,[Dl],0,3,0,0,0,RN,0,C,[],0,3,0,A5B,0,Bn,"Color",13,C,[],0,3,0,EM,["cG",A4E(AKv),"cF",A4D(AOE),"l",A4D(AJT)]]);
A4C([Kk,0,C,[Dl],1,3,0,0,0,Mx,0,Kk,[],0,3,0,0,["l",A4D(AP1)],B7,"Array",8,C,[D0],0,3,0,0,["cF",A4D(AHD),"cG",A4E(AOa),"l",A4D(AUC)],Ki,0,C,[D0],0,3,0,0,0,X4,0,Ki,[],0,3,0,0,0,AEz,0,C,[D0],0,3,0,0,0,DY,0,C,[],4,3,0,0,["cG",A4E(AP9),"cF",A4D(AJ6)],AEI,0,C,[],0,3,0,0,0,Zb,0,C,[],0,3,0,0,0,AAM,0,C,[],0,3,0,0,0,ZU,0,C,[],0,3,0,0,0,P9,0,C,[],0,3,0,A5C,0,UM,0,C,[],0,3,0,0,0,AAd,0,C,[],0,3,0,0,0,ZE,0,C,[],0,3,0,0,0,Z1,0,C,[],0,3,0,0,0,AC2,0,C,[],0,3,0,0,0,XR,0,C,[],0,3,0,0,0,ADQ,0,C,[],0,3,0,0,0,YX,0,C,[],0,3,0,0,0,VC,
0,C,[],0,3,0,0,0,V_,0,C,[],0,3,0,0,0,Gk,0,By,[],12,3,0,A0Y,0,AAi,0,C,[],0,3,0,0,0,RQ,0,C,[],3,3,0,0,0,Dx,0,C,[],0,3,0,0,0,UW,0,Dx,[],0,3,0,0,0,UV,0,Dx,[],0,3,0,0,0,Zn,0,Dx,[],0,3,0,0,0,WL,0,Dx,[],0,3,0,0,0,ABP,0,Dx,[],0,3,0,0,0,LJ,0,Dx,[],0,3,0,0,0,WG,0,LJ,[],0,3,0,0,0,HT,0,C,[],3,3,0,0,0,W_,0,C,[Dl,HT],0,3,0,0,0,FH,0,C,[],3,3,0,0,0,ABH,0,C,[FH,HT],0,3,0,0,0,ADN,0,C,[FH],0,3,0,0,0,VX,0,C,[],0,3,0,0,0,E9,0,C,[FH],0,3,0,0,0,ABi,0,E9,[],0,3,0,0,0,HO,0,E9,[HT,FH],1,3,0,0,0,DN,0,HO,[],1,3,0,A5D,0,ABB,0,C,[],0,3,
0,0,0,AC1,0,DN,[],4,3,0,0,0,Y7,0,DN,[],4,3,0,0,0,Tx,0,E9,[],0,3,0,0,0,Lf,0,E9,[],0,3,0,0,0,UI,0,Lf,[],0,3,0,0,0,WF,0,DN,[],4,3,0,0,0]);
A4C([G$,0,HO,[],1,3,0,0,0,ZP,0,G$,[],4,3,0,0,0,Y5,0,DN,[],4,3,0,0,0,Z3,0,DN,[],4,3,0,0,0,ZO,0,G$,[],4,3,0,0,0,EV,0,By,[],12,3,0,AZD,0,Gm,0,C,[Dl,FH,HT],1,3,0,0,0,Mm,0,Gm,[FH],1,3,0,0,0,T4,0,Mm,[FH],0,3,0,0,0,E1,0,By,[],12,3,0,A0q,0,CU,0,Gm,[],1,3,0,0,0,In,0,CU,[],1,3,0,0,0,VS,0,C,[],0,3,0,0,0,E$,0,CU,[],1,3,0,A5E,0,EN,0,E$,[],1,3,0,0,0,Gp,0,EN,[],1,3,0,0,0,W$,0,Gp,[],0,3,0,0,0,H1,0,CU,[],1,3,0,0,0,AE2,0,H1,[],0,3,0,0,0,AC0,0,CU,[],0,3,0,0,0,FZ,0,CU,[],1,3,0,0,0,UQ,0,FZ,[],0,3,0,0,0,Hs,0,CU,[],1,3,0,0,0,W6,0,
EN,[],0,3,0,0,0,Yf,0,EN,[],0,3,0,0,0,KT,0,CU,[],1,3,0,0,0,ABj,0,KT,[],0,3,0,0,0,Vs,0,FZ,[],0,3,0,0,0,Za,0,Gp,[],0,3,0,0,0,ABe,0,CU,[],0,3,0,0,0,Z8,0,FZ,[],0,3,0,0,0,ABm,0,CU,[],0,3,0,0,0,AB9,0,E$,[],0,3,0,0,0,Yl,0,Dk,[],0,0,0,0,0,VI,0,Dk,[],0,0,0,0,0,VQ,0,EN,[],0,3,0,0,0,ABv,0,Hs,[],0,3,0,0,0,AEd,0,In,[],0,3,0,0,0,AAC,0,In,[],0,3,0,0,0,AB0,0,Hs,[],0,3,0,0,0,Zz,0,Gp,[],0,3,0,0,0,AEu,0,H1,[],0,3,0,0,0,E5,0,Gm,[],1,3,0,0,0,ZS,0,E5,[],0,3,0,0,0,F7,0,C,[],1,3,0,0,0,ABF,0,F7,[],0,3,0,0,0,ACl,0,E5,[],0,3,0,0,0,ACZ,
0,E5,[],0,3,0,0,0,ADv,0,F7,[],0,3,0,0,0,WX,0,E5,[],0,3,0,0,0]);
A4C([AC3,0,F7,[],0,3,0,0,0,Ky,0,C,[],3,3,0,0,0,Nj,0,C,[],3,3,0,0,0,B6,0,C,[Ky,Nj],0,3,0,0,["l",A4D(AOK)],Wd,0,C,[],4,0,0,0,0,VN,0,C,[],4,3,0,0,0,Dr,0,C,[],0,3,0,0,["cW",A4D(ASZ)],CA,0,Dr,[],0,3,0,0,0,BC,"RuntimeException",21,CA,[],0,3,0,0,0,Y2,"ClassCastException",21,BC,[],0,3,0,0,0,D7,"CharSequence",21,C,[],3,3,0,0,0,M,"String",21,C,[BX,C8,D7],0,3,0,P,["l",A4D(C1),"cG",A4E(FG),"cF",A4D(AQK)],F4,0,Dr,[],0,3,0,0,0,Iz,0,F4,[],0,3,0,0,0,X9,0,Iz,[],0,3,0,0,0,Ea,0,C,[BX],1,3,0,0,0,EO,0,Ea,[C8],0,3,0,0,0,Bh,0,C,[BX,
D7],0,0,0,0,["dk",A4E(N$),"l",A4D(U)],HE,0,C,[],3,3,0,0,0,I,0,Bh,[HE],0,3,0,0,["hS",A4H(ANV),"Cd",A4G(AKk),"l",A4D(Cr),"dk",A4E(AN$),"dw",A4F(AO0),"k",A4F(CZ)],Ie,0,Iz,[],0,3,0,0,0,AA9,0,Ie,[],0,3,0,0,0,XC,0,Ie,[],0,3,0,0,0,X2,0,C,[],0,3,0,0,0,OW,0,C,[],3,3,0,0,0,Lu,0,C,[OW,GP],0,3,0,0,["cV",A4D(Yy)],Ti,0,C,[],3,3,0,0,0,L6,0,C,[Ti],1,3,0,0,0,Q3,0,L6,[],0,3,0,0,0,ACt,0,C,[],4,3,0,0,0,Fd,0,By,[],12,3,0,I2,0,NC,0,C,[],3,3,0,0,0,Ce,0,C,[],3,3,0,0,0,P8,0,C,[Ce],3,3,0,0,0,L4,0,C,[NC,P8],0,3,0,I9,["Ir",A4E(ARq)],ABo,
0,C,[],0,3,0,0,0,PN,0,C,[],0,3,0,Py,0,J$,0,Ea,[C8],0,3,0,0,0,JU,0,C,[],0,3,0,0,0,Yq,0,C,[],4,3,0,0,0,Di,"GlyphLayout$GlyphRun",14,C,[Dq],0,3,0,0,["B",A4D(Zf),"l",A4D(NX)],DE,0,C,[],0,3,0,0,["cF",A4D(AOH),"cG",A4E(AU9),"l",A4D(AOj)],LV,0,C,[],3,3,0,0,0,KW,0,C,[LV],1,3,0,0,0,FE,0,C,[],3,3,0,0,0,Jh,0,KW,[FE,BX],0,3,0,0,0,TE,0,C,[],3,3,0,0,0,Q6,0,C,[TE],0,3,0,0,0,DF,0,C,[C8],0,3,0,0,0,Wy,0,C,[],0,3,0,0,0]);
A4C([JE,0,C,[],4,3,0,0,0,Ne,0,C,[],3,3,0,0,0,N6,0,C,[Ne],0,3,0,0,0,OZ,0,C,[],0,3,0,0,0,Lk,0,C,[],0,3,0,0,0,RE,0,C,[],3,3,0,0,0,KK,0,C,[RE],0,3,0,JG,0,Um,0,C,[],0,3,0,0,0,DH,0,C,[],0,3,0,0,["iv",A4E(APv)],Rn,0,C,[],3,3,0,0,0,EI,0,C,[Ce],3,3,0,0,0,AAk,0,C,[Rn,EI],0,3,0,0,["pE",A4E(AGI)],QK,0,C,[],3,3,0,0,0,Sh,0,C,[QK],0,3,0,0,0,RM,0,C,[RQ],0,3,0,0,0,RF,0,C,[],3,3,0,0,0,PT,0,C,[RF],0,3,0,0,0,OA,0,C,[],3,3,0,0,0,ABt,0,C,[OA],0,3,0,0,0,Ez,0,C,[],0,3,0,0,0,Sl,0,C,[],3,3,0,0,0,RO,0,C,[Sl],3,3,0,0,0,Xc,0,C,[RO],0,3,
0,0,0,Un,0,C,[EI],0,0,0,0,["pE",A4E(ASc)],Uo,0,C,[EI],0,0,0,0,["pE",A4E(AVQ)],Bc,"IllegalArgumentException",21,BC,[],0,3,0,0,0,ADn,0,C,[],4,3,0,0,0,Vt,0,C,[D0],0,3,0,0,0,Qv,0,Ea,[C8],0,3,0,0,0,Zj,0,C,[Ce],1,3,0,0,0,LQ,0,C,[],3,3,0,0,0,Ix,"TeaGL20",5,C,[LQ],0,3,0,0,["kl",A4F(AL_),"kB",A4F(AVI),"cr",A4F(AIR),"iP",A4H(ALC),"fr",A4H(Pw),"fs",A4H(Pv),"i2",A4E(AT0),"i1",A4H(AI2),"kj",A4E(AM5),"kf",A4D(AWl),"kh",A4E(ARr),"iF",A4E(AT1),"iL",A4E(ARc),"kC",A4E(AP4),"j1",A4G(AJE),"j2",A4H(ANC),"j6",A4H(APD),"iO",A4E(AVp),
"kq",A4E(AUz),"lr",A4E(AFy),"ft",A4H(NW),"fu",A4H(Qm),"ks",A4F(AKH),"b9",A4F(LW),"iE",A4E(AWd),"fv",A4G(Q9),"kk",A4E(AN6),"fw",A4G(OT),"ev",A4E(ALm),"kn",A4F(ALh),"km",A4E(AHt),"ch",A4F(AJD),"ki",A4F(AFx),"cn",function(b,c,d,e,f,g,h,i,j){Rq(this,b,c,d,e,f,g,h,i,j);},"cx",A4G(AOX),"b4",A4G(AQS),"iV",A4F(ARb),"iI",A4E(AHw),"kp",function(b,c,d,e,f,g){AOt(this,b,c,d,e,f,g);},"dY",A4H(AFX)],QJ,0,C,[LQ],3,3,0,0,0,M1,"TeaGL30",5,Ix,[QJ],0,3,0,0,["kG",A4E(ALP),"j3",A4H(APV),"j5",function(b,c,d,e,f){AWK(this,b,c,d,e,
f);},"kE",A4F(AQu),"b9",A4F(ANI)],N7,"TeaGL30Debug",5,M1,[],0,3,0,0,["kG",A4E(AKN),"j3",A4H(AH_),"j5",function(b,c,d,e,f){AVC(this,b,c,d,e,f);},"kE",A4F(AHk),"cr",A4F(AH6),"i2",A4E(AT4),"i1",A4H(AO2),"iF",A4E(AHg),"iL",A4E(AUD),"j1",A4G(AKg),"j2",A4H(ARC),"iO",A4E(AST),"ev",A4E(AFm),"ch",A4F(AGo),"cn",function(b,c,d,e,f,g,h,i,j){APt(this,b,c,d,e,f,g,h,i,j);},"cx",A4G(AJ7),"dY",A4H(ALF),"kl",A4F(AN_),"kB",A4F(AU_),"iP",A4H(AKO),"fr",A4H(APh),"fs",A4H(AU6),"kj",A4E(AQj),"kf",A4D(AWk),"kh",A4E(ARZ),"kC",A4E(AWa),
"j6",A4H(AHH),"kq",A4E(AR3),"lr",A4E(AT7),"ft",A4H(AMX),"fu",A4H(AT2),"ks",A4F(APK),"b9",A4F(AKU),"fv",A4G(AI6),"iE",A4E(AGn),"fw",A4G(AWi),"kk",A4E(AG1),"kn",A4F(AGp),"km",A4E(AVs),"ki",A4F(AGk),"b4",A4G(AHs),"iV",A4F(AIo),"iI",A4E(AWS),"kp",function(b,c,d,e,f,g){ASv(this,b,c,d,e,f,g);}],Ps,0,C,[],0,3,0,0,0,Dh,0,By,[],12,3,0,Nm,0,RV,0,C,[Ce],3,3,0,0,0,RG,0,C,[RV],0,0,0,0,["KN",A4D(AJ_)],Tg,"TeaGL20Debug",5,Ix,[],0,3,0,0,["cr",A4F(AVV),"i2",A4E(AJc),"i1",A4H(AJ3),"iF",A4E(APf),"iL",A4E(AWt),"j1",A4G(AM4),"j2",
A4H(AV4),"iO",A4E(AHL),"ev",A4E(ANZ),"ch",A4F(AQp),"cn",function(b,c,d,e,f,g,h,i,j){AKW(this,b,c,d,e,f,g,h,i,j);},"cx",A4G(AKo),"dY",A4H(AWe),"kl",A4F(AGh),"kB",A4F(AFl),"iP",A4H(AFh),"fr",A4H(ANA),"fs",A4H(ALQ),"kj",A4E(AWC),"kf",A4D(AQM),"kh",A4E(AWp),"kC",A4E(AQJ),"j6",A4H(AL4),"kq",A4E(AWu),"lr",A4E(APS),"ft",A4H(AND),"fu",A4H(AH9),"ks",A4F(AMa),"b9",A4F(AF0),"fv",A4G(AK1),"iE",A4E(AK6),"fw",A4G(AGx),"kk",A4E(ASA),"kn",A4F(AUk),"km",A4E(AOz),"ki",A4F(AV1),"b4",A4G(AUd),"iV",A4F(AWj),"iI",A4E(AGy),"kp",function(b,
c,d,e,f,g){AIV(this,b,c,d,e,f,g);}],ABV,0,C,[D0],0,3,0,0,0,Zp,0,C,[],0,3,0,0,0,Sx,0,C,[Ce],3,3,0,0,0,QR,0,C,[Sx],0,0,0,0,["DN",A4D(AGc),"G5",A4D(AJN),"Mc",A4D(AFV)],TD,0,C,[],3,3,0,0,0,TL,0,C,[TD],0,3,0,0,0,Ny,0,DH,[],0,0,0,0,0,Su,"CloneNotSupportedException",21,CA,[],0,3,0,0,0,IQ,0,Dk,[],0,3,0,0,0,L,"IndexOutOfBoundsException",21,BC,[],0,3,0,0,0]);
A4C([Fx,0,C,[Ce],3,3,0,0,0,O4,0,C,[Fx],3,3,0,0,0,Qb,0,C,[Fx],3,3,0,0,0,P4,0,C,[Fx],3,3,0,0,0,Rl,0,C,[Fx],3,3,0,0,0,Ty,0,C,[Fx],3,3,0,0,0,R7,0,C,[Fx,O4,Qb,P4,Rl,Ty],3,3,0,0,0,OC,0,C,[],3,3,0,0,0,KZ,0,C,[Ce],3,3,0,0,0,U3,0,C,[Ce,R7,OC,KZ],1,3,0,0,["C7",A4E(AQ5),"Fe",A4F(ATL),"Lx",A4F(AS$),"In",A4G(AQY),"Gx",A4E(AVk),"GI",A4D(AIX),"EI",A4G(AFU)],Ls,0,C,[],1,3,0,0,0,Ik,0,Ls,[LV,FE,BX],0,3,0,0,0,Mj,0,Ik,[],0,3,0,0,0,XZ,0,C,[],0,3,0,0,0,Em,0,By,[],12,3,0,Gt,0,DI,0,C,[Ce],1,3,0,0,0,WI,0,DI,[],1,3,0,0,0,Wi,0,DI,[],
1,3,0,0,0,Zd,0,DI,[],1,3,0,0,0,AAG,0,DI,[],1,3,0,0,0,Yc,0,DI,[],1,3,0,0,0,PG,0,C,[EI],0,0,0,0,["pE",A4E(ANl)],PH,0,C,[EI],0,0,0,0,["pE",A4E(AV5)],PD,0,C,[EI],0,0,0,0,["pE",A4E(ARO)],Qz,0,Dk,[],0,3,0,0,0,SC,0,C,[Ce],3,3,0,0,0,NP,0,C,[SC],0,0,0,0,["Et",A4D(AKC)],Wa,0,DI,[],1,3,0,0,0,P1,0,C,[BX],4,3,0,0,0,VB,0,C,[],4,3,0,0,0,DL,"ReflectionException",9,CA,[],0,3,0,0,0,DG,0,C,[],4,3,0,Bv,0,Lm,0,C,[],3,3,0,0,0,Kx,0,C,[Lm],0,0,0,0,0,JP,0,C,[],3,3,0,0,0,Kw,0,C,[JP],0,0,0,0,0,MM,0,C,[],3,3,0,0,0,ZQ,0,C,[MM],4,3,0,0,
0,B_,"NumberFormatException",21,Bc,[],0,3,0,0,0,OG,0,C,[],4,3,0,0,0,KP,0,BC,[],0,3,0,0,0,EW,0,CA,[],0,3,0,0,0,HC,"NoSuchMethodException",21,EW,[],0,3,0,0,0,CO,"NullPointerException",21,BC,[],0,3,0,0,0,B1,0,C,[],1,0,0,0,["g_",A4G(AJ9),"hs",A4H(AL5),"gw",A4D(AIn),"l",A4D(ASJ),"fZ",A4E(MN),"gu",A4E(AUM),"he",A4D(AVW),"fV",A4D(Kp)],AEl,0,C,[Ce],1,3,0,0,0,Xm,0,C,[Ce],1,3,0,0,0,AE7,0,C,[Ce],1,3,0,0,0,K0,0,C,[Ce],3,3,0,0,0,OK,0,C,[K0],0,3,0,0,["Df",A4E(AIP)]]);
A4C([X5,0,C,[Ce],1,3,0,0,0,OL,0,C,[K0],0,3,0,0,["Df",A4E(AFZ)],Ng,0,C,[],3,3,0,0,0,HP,0,C,[Ng,FE],0,0,0,0,0,IX,0,HP,[],0,0,0,0,0,Ds,0,B1,[],0,0,0,FI,["hc",A4G(AHr),"hd",A4D(AMG),"hJ",A4E(AH7)],Jz,0,C,[],0,0,0,0,0,Do,"PatternSyntaxException",17,Bc,[],0,3,0,0,["cW",A4D(AVR)],KO,0,C,[D0],3,3,0,0,0,LP,0,C,[KO],1,3,0,0,0,Qo,0,C,[KO],3,3,0,0,0,Nw,0,C,[Qo],3,3,0,0,0,Hd,0,LP,[Nw],1,3,0,0,0,Mb,0,C,[],3,3,0,0,0,IL,0,Hd,[FE,BX,Mb],0,3,0,0,0,Qk,0,Ds,[],0,0,0,0,["hc",A4G(AGv),"hd",A4D(AJO),"hJ",A4E(AS4)],TN,0,Ds,[],0,0,
0,0,["hc",A4G(AJs),"hd",A4D(ANu)],Pj,0,Ds,[],0,0,0,0,["hc",A4G(AIk),"hd",A4D(AUH)],QW,0,Ds,[],0,0,0,0,["hc",A4G(AGM),"hd",A4D(ATC),"hJ",A4E(ARs)],H4,0,Ds,[],0,0,0,0,["hc",A4G(AU7),"hd",A4D(AID)],Cn,0,B1,[],1,0,0,0,["hc",A4G(AWD),"hp",A4D(AT5),"hJ",A4E(ANo)],SI,0,Cn,[],0,0,0,0,["hq",A4F(ATs),"g_",A4G(AK5),"hs",A4H(AJb),"hd",A4D(AMI),"hJ",A4E(AGH)],Ck,0,B1,[],0,0,0,0,["hc",A4G(AL7),"fZ",A4E(ARm),"hd",A4D(ANy),"gu",A4E(AOy),"hJ",A4E(ASf),"fV",A4D(AI3)],M0,0,Ck,[],0,0,0,0,["hc",A4G(AQ2),"hd",A4D(AOR),"hJ",A4E(ASD)],Fg,
0,M0,[],0,0,0,0,["hc",A4G(AKa),"fZ",A4E(ASm),"hd",A4D(AGD)],Ub,0,Fg,[],0,0,0,0,["hc",A4G(ARe),"hJ",A4E(AUS),"hd",A4D(AVU)],ADb,0,Fg,[],0,0,0,0,["hc",A4G(AHV),"hJ",A4E(AUg),"hd",A4D(ALT)],Yn,0,Fg,[],0,0,0,0,["hc",A4G(AIY),"hJ",A4E(AW7),"hd",A4D(AQI)],AAL,0,Fg,[],0,0,0,0,["hc",A4G(AFP),"hJ",A4E(ASU),"hd",A4D(AIl)],HQ,0,Ck,[],0,0,0,0,["hc",A4G(AGd),"g_",A4G(AO4),"hs",A4H(AS_),"gu",A4E(AOp),"he",A4D(ARo),"fV",A4D(AV2)],AAB,0,C,[],4,3,0,0,0,J4,"ArrayStoreException",21,BC,[],0,3,0,0,0,H8,0,C,[],1,0,0,0,0,Bo,0,H8,
[],1,0,0,Bt,["hE",A4D(AH0),"hv",A4D(AG0),"hM",A4D(ATV),"gY",A4D(AVT)],Cx,0,Bo,[],0,0,0,0,["hG",A4E(AJh),"hE",A4D(AW5),"hv",A4D(AKR),"hM",A4D(AUF),"l",A4D(AQf),"gY",A4D(ALa)],Ku,"MissingResourceException",16,BC,[],0,3,0,0,0,E3,0,B1,[],1,0,0,0,["gu",A4E(ATb),"hJ",A4E(AU2),"fV",A4D(APA)],DP,0,E3,[],0,0,0,0,["hc",A4G(AFR),"hd",A4D(AI0)],Gu,0,DP,[],0,0,0,0,["hc",A4G(AHv),"hd",A4D(AH5)],DU,0,E3,[],0,0,0,0,["hc",A4G(AGa),"hd",A4D(AM1)],Gq,0,DP,[],0,0,0,0,["hc",A4G(APe),"fZ",A4E(AW_)],ADt,0,DP,[],0,0,0,0,["hc",A4G(AWs),
"g_",A4G(AP7)],Bs,0,C,[],1,0,0,0,0,NG,0,H8,[FE],0,0,0,0,["l",A4D(Rg)],Oe,0,B1,[],0,0,0,0,["hc",A4G(ANQ),"hd",A4D(ARa),"hJ",A4E(ARl)],Bq,0,C,[FE,BX],0,3,0,0,0,Nt,0,Ck,[],0,0,0,0,["hd",A4D(ARy)],HA,0,Ck,[],0,0,0,0,["hc",A4G(AHm),"fZ",A4E(AQ0),"hd",A4D(ARW),"hJ",A4E(AIs),"gu",A4E(AHZ)],Ee,0,Ck,[],0,0,0,0,["hc",A4G(AKJ),"hd",A4D(AVJ),"hG",A4E(ALr),"gu",A4E(AHa),"fZ",A4E(ATP),"hJ",A4E(AKY)],Nu,0,Ee,[],0,0,0,0,["hG",A4E(ANp),"hd",A4D(AV9)]]);
A4C([OB,0,Cn,[],0,0,0,0,["hq",A4F(ANT),"hd",A4D(AIb)],EQ,0,Cn,[],0,0,0,0,["hq",A4F(AFk),"hd",A4D(AN2),"gu",A4E(ARn)],IN,0,Ck,[],0,0,0,0,["fZ",A4E(APc),"hd",A4D(ASV),"hc",A4G(AFB),"gu",A4E(AIg),"hJ",A4E(AUJ)],E6,0,Cn,[],0,0,0,0,["hp",A4D(ANz),"hq",A4F(AMn),"g_",A4G(AKG),"hs",A4H(ANH),"hd",A4D(AUX),"gu",A4E(AUA)],To,0,Cn,[],0,0,0,0,["hq",A4F(AFp),"hd",A4D(AQZ)],Np,0,Cn,[],0,0,0,0,["hq",A4F(AF7),"hd",A4D(AMO)],GB,0,Ck,[],0,0,0,0,["fZ",A4E(AVZ),"hc",A4G(AQ1),"hd",A4D(AQN),"gu",A4E(ANU),"hJ",A4E(ASp)],AEm,0,GB,[],
0,0,0,0,0,ABh,0,GB,[],0,0,0,0,0,T1,0,DU,[],0,0,0,0,["hc",A4G(AJA)],Pg,0,DU,[],0,0,0,0,["hc",A4G(APT)],Is,0,DU,[],0,0,0,0,["hc",A4G(ATJ),"fZ",A4E(AVb)],O1,0,Is,[],0,0,0,0,["hc",A4G(ANE),"fZ",A4E(AQq)],Gz,0,DU,[],0,0,0,0,["hc",A4G(AW2),"hd",A4D(AVh)],NI,0,Gz,[],0,0,0,0,["hc",A4G(AM2)],Qf,0,DU,[],0,0,0,0,["hc",A4G(AWc)],XG,0,Is,[],0,0,0,0,["hc",A4G(AIu)],R9,0,Gz,[],0,0,0,0,["hc",A4G(AGQ)],YV,0,E3,[],0,0,0,0,["hc",A4G(AWH),"g_",A4G(ATY),"hd",A4D(AR2)],VG,0,E3,[],0,0,0,0,["hc",A4G(ARp),"g_",A4G(AFL),"hd",A4D(AS1)],F9,
0,C,[],1,0,0,0,0,AFc,0,DP,[],0,0,0,0,["hc",A4G(AGU)],ADp,0,Gq,[],0,0,0,0,["hc",A4G(APO)],V4,0,Gu,[],0,0,0,0,["hc",A4G(ATf)],Xx,0,DP,[],0,0,0,0,["hc",A4G(ARg)],ABs,0,Gq,[],0,0,0,0,["hc",A4G(AG4)],Yp,0,Gu,[],0,0,0,0,["hc",A4G(ATw)],P3,0,B1,[],4,0,0,0,["hc",A4G(AOs),"hJ",A4E(ANf),"hd",A4D(APQ)],WJ,0,B1,[],0,0,0,0,["hc",A4G(AHU),"hJ",A4E(AIe),"hd",A4D(AWY)],VD,0,B1,[],0,0,0,0,["hc",A4G(ANs),"hJ",A4E(AWW),"hd",A4D(AHz)],Tl,0,B1,[],4,0,0,0,["hc",A4G(AR8),"hJ",A4E(AJl),"hd",A4D(APl)],ADG,0,B1,[],0,0,0,0,["hc",A4G(AQX),
"hJ",A4E(AFn),"hd",A4D(AL6)],UX,0,B1,[],0,0,0,0,["hc",A4G(AI1),"hJ",A4E(ALJ),"hd",A4D(AHf)],ADA,0,Ck,[],0,0,0,0,["hc",A4G(AWh),"hd",A4D(AKi),"fZ",A4E(AIi),"gw",A4D(AQB),"hJ",A4E(AIh)],VW,0,Ck,[],4,0,0,0,["hc",A4G(AQO),"hd",A4D(AJy),"fZ",A4E(AS0),"gw",A4D(AFf),"hJ",A4E(AWB)],ADq,0,B1,[],4,0,0,0,["hc",A4G(AN0),"hJ",A4E(ALx),"hd",A4D(AOJ)],AAg,0,B1,[],0,0,0,0,["hc",A4G(AQV),"hJ",A4E(ALk),"hd",A4D(AGz)],T8,0,B1,[],0,0,0,0,["hc",A4G(AM7),"hJ",A4E(AJp),"hd",A4D(ALM)],Ii,0,Ck,[],0,0,0,0,["hc",A4G(AGX),"fZ",A4E(ASk),
"hd",A4D(AGF),"hJ",A4E(ASE)],ADw,0,Ii,[],0,0,0,0,["hc",A4G(AJz),"g_",A4G(AUP),"hs",A4H(AGA),"gu",A4E(APG),"hd",A4D(AU$)],X_,0,Ii,[],0,0,0,0,["hc",A4G(AOV),"hd",A4D(AIf)],KS,0,Bh,[HE],0,3,0,0,["hS",A4H(ALc),"Cd",A4G(AH4),"dk",A4E(AIC),"dw",A4F(AT3),"k",A4F(AF2)],Y6,0,Cn,[],0,0,0,0,["hq",A4F(AJ8),"g_",A4G(AHM),"hs",A4H(ALE),"hd",A4D(AQ8),"gu",A4E(AMD)],Nk,0,Cn,[],0,0,0,0,["hq",A4F(AO8),"hd",A4D(AMQ)],UO,0,Cn,[],0,0,0,0,["hq",A4F(ATj),"hd",A4D(AUE)],AE_,0,C,[],4,3,0,0,0,Ih,0,C,[],4,0,0,ASS,0,Ni,0,Cn,[],0,0,0,0,
["hq",A4F(ATn),"hd",A4D(AWX)],Jt,0,Ck,[],0,0,0,0,["fZ",A4E(ARd),"hc",A4G(OP),"g_",A4G(AMw),"hs",A4H(AKf),"hd",A4D(AT_),"gu",A4E(AGt),"hJ",A4E(AUl)],L8,0,Ck,[],0,0,0,0,["fZ",A4E(AIA),"hc",A4G(Ns),"g_",A4G(ARI),"hs",A4H(ATh),"hd",A4D(AWf),"gu",A4E(AJ$),"hJ",A4E(ARY)]]);
A4C([Fm,0,Cn,[],0,0,0,0,["hq",A4F(ASF),"g_",A4G(AQi),"hs",A4H(AIy),"hd",A4D(AVc),"gu",A4E(ASr)],Si,0,F9,[],0,0,0,0,["hU",A4E(AIN),"hW",A4F(ASx)],Sj,0,F9,[],0,0,0,0,["hU",A4E(ATy),"hW",A4F(AVN)],ABY,0,C,[],0,0,0,0,0,Wv,0,C,[],4,0,0,0,0,VM,0,C,[],4,3,0,0,0,Dp,"NegativeArraySizeException",21,BC,[],0,3,0,0,0,UU,0,C,[],0,0,0,0,0,Mr,0,C,[],0,3,0,0,0,XX,0,C,[],4,3,0,0,0,LR,0,Bs,[],0,0,0,0,["hx",A4D(AMY)],K3,0,Bs,[],0,0,0,0,["hx",A4D(AOY)],ABT,0,Bs,[],0,0,0,0,["hx",A4D(AS2)],ACB,0,Bs,[],0,0,0,0,["hx",A4D(AUm)],ACD,
0,Bs,[],0,0,0,0,["hx",A4D(AKK)],LN,0,Bs,[],0,0,0,0,["hx",A4D(AJf)],Mh,0,LN,[],0,0,0,0,["hx",A4D(ALs)],AE4,0,Bs,[],0,0,0,0,["hx",A4D(AMv)],Nd,0,Mh,[],0,0,0,0,["hx",A4D(AFt)],YY,0,Nd,[],0,0,0,0,["hx",A4D(APB)],ZH,0,Bs,[],0,0,0,0,["hx",A4D(AJ0)],WA,0,Bs,[],0,0,0,0,["hx",A4D(APx)],Wg,0,Bs,[],0,0,0,0,["hx",A4D(AVS)],ACH,0,Bs,[],0,0,0,0,["hx",A4D(AQw)],AFb,0,Bs,[],0,0,0,0,["hx",A4D(AFE)],ABZ,0,Bs,[],0,0,0,0,["hx",A4D(ANa)],ABD,0,Bs,[],0,0,0,0,["hx",A4D(ASI)],AC_,0,Bs,[],0,0,0,0,["hx",A4D(AJX)],Vg,0,Bs,[],0,0,0,0,
["hx",A4D(AKl)],Uv,0,Bs,[],0,0,0,0,["hx",A4D(AVG)],AB$,0,Bs,[],0,0,0,0,["hx",A4D(AFq)],ACq,0,Bs,[],0,0,0,0,["hx",A4D(AN7)],W3,0,Bs,[],0,0,0,0,["hx",A4D(AKt)],ZM,0,Bs,[],0,0,0,0,["hx",A4D(ALN)],AEp,0,Bs,[],0,0,0,0,["hx",A4D(AOb)],ACm,0,Bs,[],0,0,0,0,["hx",A4D(AUK)],X3,0,Bs,[],0,0,0,0,["hx",A4D(AR6)],W2,0,Bs,[],0,0,0,0,["hx",A4D(AQk)],AE$,0,Bs,[],0,0,0,0,["hx",A4D(ASW)],KF,0,Bs,[],0,0,0,0,["hx",A4D(AOx)],ADl,0,KF,[],0,0,0,0,["hx",A4D(AP0)],Y$,0,LR,[],0,0,0,0,["hx",A4D(AHI)],WW,0,K3,[],0,0,0,0,["hx",A4D(AMi)],Wn,
0,Bs,[],0,0,0,0,["hx",A4D(AOB)],WS,0,Bs,[],0,0,0,0,["hx",A4D(AVt)],Yz,0,Bs,[],0,0,0,0,["hx",A4D(ALf)],YZ,0,Bs,[],0,0,0,0,["hx",A4D(AFr)],Sy,0,C,[],0,3,0,0,0,IG,0,C,[],0,3,0,0,0,Vk,0,C,[],0,3,0,0,0]);
A4C([ACw,0,C,[],4,3,0,0,0,PE,0,DH,[],0,0,0,0,["iv",A4E(ATZ),"lP",A4E(AKz),"er",A4F(AQa)],B2,0,By,[],9,3,0,AIT,0,Fz,0,HP,[],0,0,0,0,0,AEM,0,C,[],3,3,0,0,0,RX,0,C,[Ce],3,3,0,0,0,WP,0,C,[RX,Ce],1,3,0,0,["DP",A4F(AVz),"Fa",A4E(AQE),"EF",A4F(AIB),"IN",A4G(ANJ),"La",A4G(ATG)],RB,0,C,[EI],0,0,0,0,["pE",A4E(APk)],Dy,0,By,[],12,3,0,Fl,0,Lw,0,C,[],0,3,0,0,0,Mg,0,C,[Ky],0,3,0,0,0,Qd,0,C,[],3,3,0,0,0,HS,0,Mg,[Qd],0,3,0,0,["l",A4D(AHo)],S,"StringIndexOutOfBoundsException",21,L,[],0,3,0,0,0,S1,0,Bo,[],0,0,0,0,["hG",A4E(AKP)],S0,
0,Bo,[],0,0,0,0,["hG",A4E(AF$)],Om,0,Bo,[],0,0,0,0,["hG",A4E(AOn),"l",A4D(ALY)],Ot,0,Bo,[],0,0,0,0,["hG",A4E(ASH)],Or,0,Bo,[],0,0,0,0,["hG",A4E(ATm)],Os,0,Bo,[],0,0,0,0,["hG",A4E(AO7)],Ow,0,Bo,[],0,0,0,0,["hG",A4E(AKn)],Ox,0,Bo,[],0,0,0,0,["hG",A4E(AFg)],Ou,0,Bo,[],0,0,0,0,["hG",A4E(AL9)],Ov,0,Bo,[],0,0,0,0,["hG",A4E(AO_)],Oy,0,Bo,[],0,0,0,0,["hG",A4E(AUT)],Oz,0,Bo,[],0,0,0,0,["hG",A4E(AJJ)],Ol,0,Bo,[],0,0,0,0,["hG",A4E(AXd)],OR,0,Bo,[],0,0,0,0,["hG",A4E(AMc)],Oj,0,Bo,[],0,0,0,0,["hG",A4E(AJG)],Ok,0,Bo,[],0,
0,0,0,["hG",A4E(ALv)],Op,0,Bo,[],0,0,0,0,["hG",A4E(ANv)],Oi,0,Bo,[],0,0,0,0,["hG",A4E(AUu)],On,0,Bo,[],0,0,0,0,["hG",A4E(AH8)],Oo,0,Bo,[],0,0,0,0,["hG",A4E(ARS)],IR,0,C,[],0,0,0,0,0,Eg,0,C,[GP],0,3,0,CJ,0,BK,"IllegalStateException",21,BC,[],0,3,0,0,0,I4,"IllegalMonitorStateException",21,BC,[],0,3,0,0,0,ACf,0,C,[MM],0,0,0,0,0,ACj,0,C,[],0,3,0,0,0,Xn,0,C,[],4,3,0,0,0,Ux,0,C,[Ce],1,3,0,0,0,Gx,0,C,[],3,3,0,0,0,TO,0,C,[Gx],0,3,0,0,["cV",A4D(AUV)],SN,0,B2,[],12,0,0,0,0,SO,0,B2,[],12,0,0,0,0,SS,0,B2,[],12,0,0,0,0,ST,
0,B2,[],12,0,0,0,0,SQ,0,B2,[],12,0,0,0,0,SR,0,B2,[],12,0,0,0,0]);
A4C([SK,0,B2,[],12,0,0,0,0,SL,0,B2,[],12,0,0,0,0,SJ,0,B2,[],12,0,0,0,0,NM,0,C,[],3,3,0,0,0,Qt,0,C,[NM],0,3,0,0,0,XA,0,C,[Ce],4,3,0,0,0,Qc,0,C,[],3,3,0,0,0,P0,0,C,[Qc],0,0,0,0,["e",A4E(ANO),"io",A4E(AV8)],Q0,0,C,[Gx],0,3,0,0,0,NH,0,HQ,[],0,0,0,0,["g_",A4G(ALi),"hs",A4H(AW1),"he",A4D(AJk)],U7,0,C,[JP],0,0,0,0,0,G8,0,Eg,[],0,0,0,0,["cV",A4D(ARj)],NA,0,C,[],32,0,0,A1v,0,ADm,0,C,[Ce,Fx],1,3,0,0,["JD",A4F(AOu),"LH",A4F(APw),"Fh",A4G(AFT),"Gj",A4E(AF4),"Jj",A4G(AL$)],G_,0,C,[Ce],3,3,0,0,0,ND,0,C,[G_],0,0,0,0,["pE",
A4E(YU)],Q5,0,C,[],0,3,0,0,0,Hu,0,C,[JP,D0],0,3,0,0,0,Od,0,C,[D0],0,3,0,0,0,IE,0,C,[],4,3,0,0,0,NB,0,C,[GP],0,0,0,0,["cV",A4D(AFM)],TQ,0,C,[],3,3,0,0,0,Jw,0,C,[TQ],3,3,0,0,0,RW,0,C,[],3,3,0,0,0,HL,0,C,[Jw,RW],1,3,0,0,0,KG,0,HL,[],0,3,0,0,0,CD,0,KG,[],0,3,0,0,0,Hr,0,HL,[],1,3,0,0,0,JD,0,Hr,[],0,3,0,0,["it",A4G(ANB)],ID,0,C,[G_],0,0,0,0,["pE",A4E(AQH)],Es,0,C,[C8],1,3,0,0,0,M4,0,Es,[],0,3,0,CC,["c6",A4D(AEj)],Ia,"IllegalCharsetNameException",19,Bc,[],0,3,0,0,0,OY,0,C,[Dl],3,3,0,0,0,MC,0,C,[OY],0,3,0,ACL,0,Lv,
0,C,[],3,3,0,0,0,Fe,0,C,[Lv],0,3,0,0,0,PQ,0,Fe,[],0,3,0,0,["d3",A4D(ARv),"d2",A4E(ATv),"dZ",A4F(APU)],TT,0,Fe,[],0,3,0,0,["d3",A4D(ATI),"d2",A4E(AMx),"dZ",A4F(AP$)],NO,0,Fe,[],0,3,0,0,["d3",A4D(AN5),"d2",A4E(AJV),"dZ",A4F(AW$)],Oh,0,Fe,[],0,3,0,0,["d3",A4D(ARX),"d2",A4E(AF5),"dZ",A4F(AIJ)],M8,"NoSuchElementException",16,BC,[],0,3,0,0,0,W,"GdxRuntimeException",8,BC,[],0,3,0,0,0,Ww,0,C,[],4,3,0,0,0,Q1,0,Bo,[],0,0,0,0,["hG",A4E(AU5)],Nr,0,Bo,[],0,0,0,0,["hG",A4E(AHA)],Qr,0,Bo,[],0,0,0,0,["hG",A4E(AG3)],Qq,0,Bo,
[],0,0,0,0,["hG",A4E(ALd)],Tb,0,Bo,[],0,0,0,0,["hG",A4E(ANj)],OM,0,Bo,[],0,0,0,0,["hG",A4E(AU8)]]);
A4C([Ob,0,Bo,[],0,0,0,0,["hG",A4E(AQ7)],PR,0,Bo,[],0,0,0,0,["hG",A4E(ASR)],Nn,0,Bo,[],0,0,0,0,["hG",A4E(AWv)],Nq,0,Bo,[],0,0,0,0,["hG",A4E(AKc)],N8,0,Bo,[],0,0,0,0,["hG",A4E(AVo)],O5,0,Bo,[],0,0,0,0,["hG",A4E(APu)],O$,0,Bo,[],0,0,0,0,["hG",A4E(ASh)],Rt,0,Bo,[],0,0,0,0,["hG",A4E(AUU)],QL,0,Bo,[],0,0,0,0,["hG",A4E(AV6)],Nz,0,Bo,[],0,0,0,0,["hG",A4E(AJZ)],Kb,0,Bo,[],0,0,0,0,["hG",A4E(AQ$)],Ql,0,Kb,[],0,0,0,0,["hG",A4E(ATQ)],E_,0,C,[Gx],0,3,0,0,["cV",A4D(AHh)],W5,0,C,[],4,3,0,0,0,TH,0,C,[],32,0,0,A3g,0,ML,"ConcurrentModificationException",
16,BC,[],0,3,0,0,0,Jj,0,Hr,[],0,3,0,0,["it",A4G(AK2)],Pb,0,Ea,[C8],0,3,0,0,0,GQ,0,C,[],0,0,0,0,0,JM,0,C,[],4,3,0,0,0,RH,0,C,[],0,3,0,0,0,F2,"BitmapFont$BitmapFontData",14,C,[],0,3,0,0,0,Ep,0,By,[],12,3,0,PO,0,Js,0,C,[Dl],0,3,0,0,0,Eo,0,C,[],1,3,0,0,0,LM,0,C,[],3,3,0,0,0,LZ,0,Eo,[C8,HE,D7,LM],1,3,0,0,0,Fn,0,Eo,[C8],1,3,0,0,["b8",A4E(ARA),"b7",A4E(AGB)],FW,0,C,[],0,3,0,D4,0,MG,0,C,[],3,3,0,0,0,S2,0,C,[],3,3,0,0,0,Oc,0,C,[Gx,MG,S2],0,0,0,0,["cV",A4D(ASa)],Ka,"BitmapFont$Glyph",14,C,[],0,3,0,0,["l",A4D(AMh)],VE,
0,C,[D0,C8],4,3,0,0,0,GK,0,C,[Dl],0,3,0,TR,0,K6,0,LZ,[],1,0,0,0,0,I_,0,K6,[],0,0,0,0,0,LO,0,C,[],1,3,0,0,0,Cc,0,C,[],0,3,0,0,0,Sp,0,C,[],0,3,0,0,0,TY,0,C,[],32,0,0,A1B,0,Jy,0,C,[Dl],3,3,0,0,0,LE,0,C,[Jy],0,3,0,0,["j9",A4D(ALH),"lO",A4D(ASz),"iM",A4G(AQL),"jY",A4F(AKZ),"j7",A4F(AHp)],KC,0,C,[Dl],3,3,0,0,0,HR,0,C,[KC],0,3,0,0,["j0",A4D(AMM),"j4",A4D(AGs),"jX",A4G(AQo),"iN",A4E(AG$),"iG",A4D(AVm),"j8",A4D(ASP)],VY,0,C,[Jy],0,3,0,0,["j9",A4D(AIO),"lO",A4D(AJP),"iM",A4G(AHT),"jY",A4F(AQb),"j7",A4F(AK0)],Zo,0,C,[KC],
0,3,0,0,["j0",A4D(ASe),"j4",A4D(AFI),"jX",A4G(AM_),"iN",A4E(AUq),"iG",A4D(ANK),"j8",A4D(AIr)],Pz,0,C,[Jy],0,3,0,AZB,["j9",A4D(AHy),"lO",A4D(AQg),"iM",A4G(AHO),"jY",A4F(AT8),"j7",A4F(AKm)],N_,0,LE,[],0,3,0,0,0,Pc,0,HR,[],0,3,0,0,0]);
A4C([AB7,0,C,[D0],0,3,0,0,0,AB4,0,C,[],4,3,0,0,0,Ew,0,C,[],3,3,0,0,0,Cm,0,Fn,[Ew],0,0,0,0,["fi",A4D(AW9)],KE,0,C,[],0,3,0,0,0,Hg,0,Eo,[C8],1,3,0,0,0,GF,0,C,[],4,3,0,B5,0,EC,0,Eo,[C8],1,3,0,0,["b8",A4E(ARD),"b7",A4E(AVL)],Yv,0,C,[],0,3,0,0,0,Hk,0,Eo,[C8],1,3,0,0,0,AAl,0,C,[Ce],1,3,0,0,0,Rh,0,C,[],3,3,0,0,0,K2,0,C,[Rh],0,3,0,0,0,HZ,0,C,[Dl],0,3,0,QZ,0,HJ,0,Hg,[],1,0,0,0,0,GE,0,HJ,[],0,0,0,0,["kF",A4E(AQF),"kU",A4F(AOQ),"kL",A4D(AFv)],Hv,0,EC,[],1,0,0,0,0,Ig,0,Hv,[],0,0,0,0,["kV",A4E(ART),"kM",A4F(AQR),"kL",A4D(AQ4)],Gi,
0,By,[],12,3,0,J0,0,FL,0,By,[],12,3,0,ABA,0,JY,0,KE,[],0,3,0,0,["l",A4D(AWP)],Zw,0,C,[Dl],0,3,0,0,0,If,0,Hk,[],1,0,0,0,0,J5,0,If,[],0,0,0,0,["k4",A4E(ALy),"kN",A4F(ANr),"kL",A4D(AJW)],AAS,0,C,[Ce],1,3,0,0,0,C6,0,By,[],12,3,0,AJm,0,Fc,0,By,[],12,3,0,AFz,0,Xk,0,C,[KZ],1,3,0,0,["C7",A4E(AWF),"K4",A4D(AIU)],Hy,0,Hv,[Ew],1,0,0,0,["kL",A4D(ARf),"fi",A4D(ASn)],NY,0,Hy,[],0,0,0,0,["kV",A4E(AOo),"kM",A4F(ASi)],PU,0,Hy,[],0,0,0,0,["kV",A4E(AFJ),"kM",A4F(AOc)],He,0,If,[Ew],1,0,0,0,["kL",A4D(AMB),"fi",A4D(ASO)],NL,0,He,
[],0,0,0,0,["k4",A4E(AJH),"kN",A4F(AIQ)],Pp,0,He,[],0,0,0,0,["k4",A4E(AQx),"kN",A4F(AJK)],GD,"UnsupportedOperationException",21,BC,[],0,3,0,0,0,D9,"ReadOnlyBufferException",18,GD,[],0,3,0,0,0,Ib,0,HJ,[Ew],1,0,0,0,["kL",A4D(AOg)],N9,0,Ib,[],0,0,0,0,["kF",A4E(ALu),"kU",A4F(AFu)],Q8,0,Ib,[],0,0,0,0,["kF",A4E(AT6),"kU",A4F(AHq)],Id,"BufferUnderflowException",18,BC,[],0,3,0,0,0,DJ,0,By,[],12,3,0,L2,0,EY,0,LO,[],1,3,0,0,0,O9,0,EY,[],0,3,0,0,["k6",function(b,c,d,e,f,g,h){return AN8(this,b,c,d,e,f,g,h);}],E4,"IOException",
20,CA,[],0,3,0,0,0,Hp,0,C,[Jw,LM],1,3,0,0,0,AAx,0,Hp,[],0,3,0,0,0,Vn,0,Hp,[],0,3,0,0,0,T3,0,C,[Lm],0,3,0,0,0,PP,0,C,[],4,3,0,0,0,Sr,0,C,[],0,3,0,A0X,0]);
A4C([C7,0,By,[],12,3,0,Hl,0,IZ,0,C,[],4,3,0,0,0,Kq,0,C,[],4,3,0,0,0,F_,0,By,[],12,0,0,YJ,0,Cf,0,By,[],12,3,0,Ha,0,FV,0,By,[],12,3,0,AGm,0,RD,0,C,[],0,3,0,0,0,Ro,0,C,[],32,0,0,AZU,0,MP,0,C,[],1,3,0,0,0,F1,"BufferOverflowException",18,BC,[],0,3,0,0,0,GN,0,C,[],1,3,0,0,0,Ue,0,C,[],4,3,0,0,0,MU,0,C,[],1,3,0,0,0,AFa,0,C,[],4,3,0,0,0,Ip,0,C,[],4,3,0,0,0,MS,0,H2,[],1,3,0,0,0,It,0,MS,[],0,3,0,0,0,M9,0,C,[],1,3,0,0,0,HX,0,M9,[],0,3,0,0,0,OX,0,C,[],3,3,0,0,0,HF,0,C,[OX],0,3,0,0,0,Xb,0,C,[],4,3,0,0,0,PI,0,GX,[],0,3,0,
0,0,WR,0,C,[],0,3,0,0,0,Se,0,C,[G_],0,0,0,0,["pE",A4E(Ye)],ABO,0,C,[Gx,MG],3,0,0,0,0,Lt,0,MP,[],1,3,0,0,0,Ri,0,Lt,[],0,3,0,0,0,NV,0,GN,[],4,3,0,0,0,Hx,0,MU,[],0,3,0,0,0,JS,0,GN,[],4,0,0,A0Z,0,Ma,0,C,[],3,3,0,0,0,PV,0,C,[Ma],0,0,0,0,["l3",A4E(AJx),"l5",A4E(ARu)],Rj,0,C,[Ma],0,0,0,0,["l3",A4E(ARV),"l5",A4E(AUf)],CV,0,C,[],0,3,0,Ir,0,ADC,0,C,[],4,3,0,0,0,Vr,0,C,[],0,0,0,0,0,ZX,0,C,[Ce],1,3,0,0,0,NS,0,Hd,[Mb],0,0,0,0,0,Ss,0,C,[],0,3,0,A3H,0,JT,0,C,[],4,0,0,EZ,0,H9,0,C,[Jw],1,3,0,0,["lf",A4G(AUI),"k7",A4D(AMt)],Mz,
0,H9,[],0,3,0,0,["mu",A4D(AJd),"lf",A4G(AV7),"k7",A4D(AMK)],La,"UnsupportedEncodingException",20,E4,[],0,3,0,0,0,Ge,0,By,[],12,3,0,ZI,0,Bw,0,Ea,[C8,BX],0,3,0,BD,0,Xj,0,C,[],4,3,0,0,0,L$,"CoderMalfunctionError",19,F4,[],0,3,0,0,0,Jp,"ArithmeticException",21,BC,[],0,3,0,0,0,G4,0,C,[],0,0,0,Fp,0]);
A4C([V9,0,C,[],0,0,0,0,0,ME,0,C,[],0,3,0,0,0,Ly,"UnsupportedCharsetException",19,Bc,[],0,3,0,0,0,TI,0,H9,[],0,0,0,0,["mu",A4D(APd)],Te,0,C,[],0,0,0,A0s,0,Gj,0,C,[],4,3,0,AZa,0,Qn,0,Es,[],0,3,0,0,["c6",A4D(AFD)],Pt,0,Es,[],0,3,0,0,["c6",A4D(ATD)],Jk,0,Es,[],0,3,0,0,["c6",A4D(AGq)],ACE,0,C,[],0,0,0,0,0,AAa,0,C,[],0,0,0,0,0,N3,0,C,[],0,3,0,0,0,QO,0,C,[],0,3,0,0,0,AEY,0,C,[],0,0,0,0,0,Sc,0,C,[],0,3,0,0,0,Gl,0,E4,[],0,3,0,0,0,MT,"AssertionError",21,F4,[],0,3,0,0,0,PF,0,DH,[],0,0,0,0,0,AAs,0,C,[],0,0,0,0,["l",A4D(AOF)],RP,
0,EY,[],0,3,0,0,["k6",function(b,c,d,e,f,g,h){return AMf(this,b,c,d,e,f,g,h);}],SV,0,EY,[],0,3,0,0,["k6",function(b,c,d,e,f,g,h){return AS8(this,b,c,d,e,f,g,h);}],O0,0,EY,[],0,3,0,0,["k6",function(b,c,d,e,f,g,h){return ASN(this,b,c,d,e,f,g,h);}],PC,0,DH,[],0,0,0,0,["iv",A4E(AHx),"lP",A4E(AFQ),"er",A4F(Z0)],Ji,0,C,[HE,D7],0,3,0,0,0,Lg,"BufferUnderflowException",19,BC,[],0,3,0,0,0,MV,"BufferOverflowException",19,BC,[],0,3,0,0,0,Ms,"MalformedInputException",19,Gl,[],0,3,0,0,["cW",A4D(AKV)],Ld,"UnmappableCharacterException",
19,Gl,[],0,3,0,0,["cW",A4D(AKe)],NF,0,C,[],32,0,0,A2F,0,L7,"InstantiationException",21,EW,[],0,3,0,0,0,Ko,"IllegalAccessException",21,EW,[],0,3,0,0,0,NR,0,EW,[],0,3,0,0,0,G9,0,Eg,[],0,0,0,0,["cV",A4D(AIG)],Ur,0,DH,[],0,0,0,0,["iv",A4E(AIL),"lP",A4E(APN),"er",A4F(AHn)],Xo,0,C,[],4,3,0,0,0,Fu,0,C,[BX,C8],0,3,0,0,0,SU,0,C,[],4,3,0,AK3,0,NE,0,DH,[],0,0,0,0,["iv",A4E(ALD),"lP",A4E(AGj),"er",A4F(AMb)],N5,0,C,[G_],0,0,0,0,["pE",A4E(AEr)],Pa,0,C,[EI],0,0,0,0,["pE",A4E(AKQ)]]);
let A1$=Lz(I8);let A1O=Lz(AHE);let AYj=Lz(A2n);let A0C=Lz(A4i);let AYo=Lz(DC);let AXK=Lz(API);let AY7=Lz(EB);let AXw=Lz(AKI);A4L(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none","all",
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
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Math.sin() at %d FPS","MathUtils.sin() at %d FPS","TrigTools.sin() at %d FPS",
"TrigTools.sinSmoother() at %d FPS","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","VertexArray","VertexBufferObject",
"VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","New position "," is outside of range [0;","New limit ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","attributes must be >= 1",
"vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","Index ","BIG_ENDIAN","LITTLE_ENDIAN","The last float in src ","The last short in src ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver",
"NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\"," does not exist","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","newAction must be non-null","The specified font must contain at least one texture page.","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE",
"COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ",
"u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex",";\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)",
"v_col"," * "," texture2D(u_sampler",",  v_tex",") *",";\n}","uniform sampler2D u_sampler","Asset loaded: ","file-f:","file-d:","01","01234567","0123456789","0123456789ABCDEF","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\'/!@#$%^&*()[]{}<>:?;|_=","NaN","0.0","-0.0","0.",".0","Infinity","-Infinity"," != ","Logical","Pixels",
"Negative bit address","Negative exponent","BigInteger divide by zero","US-ASCII","ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","-2147483648","Malformed input of length ","Unmappable characters of length ","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","data:",";base64,",
"error"]);
M.prototype.toString=()=>{return BP(this);};
M.prototype.valueOf=M.prototype.toString;C.prototype.toString=()=>{return BP(AIw(this));};
C.prototype.__teavm_class__=function(){return A42(this);};
let CN;let Ed;let WD;let CS;let FX;let FY;let A0A;let A1e;let Bk;let Ci;let A53;let A54;let V;let Ct;let CL;let A1g;let AYG;let GM;let Bj;let K$;let Cu;let CT;let Fq;let Y;let A55;if(typeof BigInt!=='function'){CN=(a,b)=>a.hi===b.hi&&a.lo===b.lo;Ed=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;WD=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};CS=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y
=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};FX=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};FY=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Bk=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return BQ(a.lo+b.lo);}else if(A56.abs(a.hi)<A46&&A56.abs(b.hi)<A46){return BQ(F5(a)+F5(b));}let a_lolo=a.lo&0xFFFF;let a_lohi
=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo+b_lolo|0;let lohi=a_lohi+b_lohi+(lolo>>16)|0;let hilo=a_hilo+b_hilo+(lohi>>16)|0;let hihi=a_hihi+b_hihi+(hilo>>16)|0;return new A4U(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};A53=a=>{let lo=a.lo+1|0;let hi=a.hi;if(lo===0){hi=hi+1|0;}return new A4U(lo,hi);};A54=a=>{let lo=a.lo -1|0;let hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new A4U(lo,
hi);};GM=a=>A53(new A4U(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));Ci=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return BQ(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo -b_lolo|0;let lohi=a_lohi -b_lohi+(lolo>>16)|0;let hilo=a_hilo -b_hilo+(lohi>>16)|0;let hihi=a_hihi -b_hihi+(hilo>>16)|0;return new A4U(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)
<<16);};A0A=(a,b)=>{let r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};A1e=(a,b)=>{let r=FM(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};V=(a,b)=>{let positive=A45(a)===A45(b);if(A45(a)){a=GM(a);}if(A45(b)){b=GM(b);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo
=0;let lohi=0;let hilo=0;let hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new A4U(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive
?result:GM(result);};Ct=(a,b)=>{if(A56.abs(a.hi)<A46&&A56.abs(b.hi)<A46){return BQ(F5(a)/F5(b));}return (Long_divRem(a,b))[0];};A1g=(a,b)=>{if(a.hi>=0&&a.hi<A46&&b.hi>=0&&b.hi<A46){return BQ(F5(a)/F5(b));}return (Long_udivRem(a,b))[0];};CL=(a,b)=>{if(A56.abs(a.hi)<A46&&A56.abs(b.hi)<A46){return BQ(F5(a)%F5(b));}return (Long_divRem(a,b))[1];};AYG=(a,b)=>{if(a.hi>=0&&a.hi<A46&&b.hi>=0&&b.hi<A46){return BQ(F5(a)/F5(b));}return (Long_udivRem(a,b))[1];};let Long_divRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive
=A45(a)===A45(b);if(A45(a)){a=GM(a);}if(A45(b)){b=GM(b);}a=new A57(a.lo,a.hi,0);b=new A57(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new A4U(a.lo,a.hi);q=new A4U(q.lo,q.hi);return positive?[q,a]:[GM(q),GM(a)];};let Long_udivRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new A57(a.lo,a.hi,0);b=new A57(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new A4U(a.lo,a.hi);q=new A4U(q.lo,q.hi);return [q,a];};Bj=(a,b)=>new A4U(a.lo&b.lo,a.hi&b.hi);K$=(a,b)=>new A4U(a.lo|b.lo,a.hi|b.hi);Cu=(a,b)=>new A4U(a.lo
^b.lo,a.hi^b.hi);CT=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new A4U(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new A4U(0,a.lo);}else {return new A4U(0,a.lo<<b -32);}};Fq=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new A4U(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new A4U(a.hi,a.hi>>31);}else {return new A4U(a.hi>>b -32,a.hi>>31);}};Y=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new A4U(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new A4U(a.hi,
0);}else {return new A4U(a.hi>>>b -32,0);}};A55=a=>new A4U(~a.hi,~a.lo);function A57(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let LongInt_mul=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0;let a_lohi=(a.lo>>>16)*b|0;let a_hilo=(a.hi&0xFFFF)*b|0;let a_hihi=(a.hi>>>16)*b|0;let sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;};let LongInt_sub=(a,b)=>{let a_lolo
=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_add=(a,b)=>{let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi
>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_inc=a=>{a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}};let LongInt_dec=a=>{a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup
=a.sup -1&0xFFFF;}}};let LongInt_ucompare=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};let LongInt_numOfLeadingZeroBits=a=>{let n=0;let d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;};let LongInt_shl=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup
=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}};let LongInt_shr=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup
=0;}};let LongInt_copy=a=>new A57(a.lo,a.hi,a.sup);let LongInt_div=(a,b)=>{let bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;let sz=1+(bits/16|0);let dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);let q=new A57(0,0,0);while(sz-->0){LongInt_shl(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup;let digitB=b.hi>>>16;let digit=digitA/digitB|0;let t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,
b); --digit;}}else {while(true){let nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;};}else {CN=(a,b)=>a===b;Ed=(a,b)=>a!==b;WD=(a,b)=>a>b;CS=(a,b)=>a>=b;FX=(a,b)=>a<b;FY=(a,b)=>a<=b;Bk=(a,b)=>BigInt.asIntN(64,a+b);A53=a=>BigInt.asIntN(64,a+1);A54=a=>BigInt.asIntN(64,a -1);GM=a=>BigInt.asIntN(64, -a);Ci=(a,b)=>BigInt.asIntN(64,a -b);A0A=(a,b)=>a<b? -1:a>b?1:0;A1e=(a,b)=>{a=BigInt.asUintN(64,
a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};V=(a,b)=>BigInt.asIntN(64,a*b);Ct=(a,b)=>BigInt.asIntN(64,a/b);A1g=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));CL=(a,b)=>BigInt.asIntN(64,a%b);AYG=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)%BigInt.asUintN(64,b));Bj=(a,b)=>BigInt.asIntN(64,a&b);K$=(a,b)=>BigInt.asIntN(64,a|b);Cu=(a,b)=>BigInt.asIntN(64,a^b);CT=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));Fq=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));Y=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));A55=a=>BigInt.asIntN(64,~a);}function A58(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}A58.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};A58.prototype.s=A58.prototype.push;A58.prototype.pop=function(){return this.stack.pop();};A58.prototype.l=A58.prototype.pop;A58.prototype.isResuming=function(){return this.status===2;};A58.prototype.isSuspending=
function(){return this.status===1;};A58.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};A58.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(A59!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};A58.prototype.resume=function(){if(A59!==null){throw new Error("Another thread is running");}this.status=2;this.run();};A58.prototype.run
=function(){A59=this;let result;try {result=this.runner();}catch(A4Y){result=A4Y;}finally {A59=null;}if(this.suspendCallback!==null){let self=this;let callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let GC=()=>{let thread=BO();return thread!=null&&thread.isSuspending();};let C_=()=>{let thread=BO();return thread!=null&&thread.isResuming();};let A5$=callback=>{let nativeThread=BO();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);};let A4I
=(runner,callback)=>(new A58(runner)).start(callback);let A59=null;let BO=()=>A59;let C9=()=>{throw new Error("Invalid recorded state");};A35.main=A4J(A1o);
A35.main.javaException=A4Z;
(function(){var c;c=L4.prototype;c.onAnimationFrame=c.Ir;c=AAk.prototype;c.handleEvent=c.pE;c=Un.prototype;c.handleEvent=c.pE;c=Uo.prototype;c.handleEvent=c.pE;c=RG.prototype;c.fullscreenChanged=c.KN;c=QR.prototype;c.denied=c.Mc;c.prompt=c.G5;c.granted=c.DN;c=U3.prototype;c.removeEventListener=c.In;c.dispatchEvent=c.Gx;c.get=c.C7;c.addEventListener=c.EI;Object.defineProperty(c,"length",{get:c.GI});c=PG.prototype;c.handleEvent=c.pE;c=PH.prototype;c.handleEvent=c.pE;c=PD.prototype;c.handleEvent=c.pE;c=NP.prototype;c.unlockFunction
=c.Et;c=OK.prototype;c.accept=c.Df;c=OL.prototype;c.accept=c.Df;c=WP.prototype;c.removeEventListener=c.La;c.dispatchEvent=c.Fa;c.addEventListener=c.IN;c=RB.prototype;c.handleEvent=c.pE;c=ADm.prototype;c.removeEventListener=c.Fh;c.dispatchEvent=c.Gj;c.addEventListener=c.Jj;c=ND.prototype;c.handleEvent=c.pE;c=ID.prototype;c.handleEvent=c.pE;c=Xk.prototype;c.get=c.C7;Object.defineProperty(c,"length",{get:c.K4});c=Se.prototype;c.handleEvent=c.pE;c=N5.prototype;c.handleEvent=c.pE;c=Pa.prototype;c.handleEvent=c.pE;})();
}));
