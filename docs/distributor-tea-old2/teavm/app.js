"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(Bg7){let Bg8=2463534242;let Ff=()=>{let x=Bg8;x^=x<<13;x^=x>>>17;x^=x<<5;Bg8=x;return x;};let B9=(a,b)=>a>b?1:a<b? -1:a===b?0:1;let Fm=(obj,cls)=>obj instanceof HM()&&!!obj.constructor.$meta&&Bg9(obj.constructor,cls);let Bg9=(from,
to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&Bg9(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(Bg9(supertypes[i],to)){return true;}}return false;};let Bg$=(obj,cls)=>{if(obj!==null&&!Fm(obj,cls)){Bg_();}return obj;};let Bha=(obj,cls)=>{if(obj!==null&&!(obj instanceof cls)){Bg_();}return obj;};let Bs=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (LA(cls))(data);};let S=(cls,init)=>Bhb(cls,
init);let Bhb=(cls,data)=>new (LA(cls))(data);let Bhc=(cls,sz)=>new (LA(cls))(new Array(sz));let Cu;let Sq;if(typeof BigInt64Array!=='function'){Cu=sz=>{let data=new Array(sz);let arr=new A_y(data);data.fill(M);return arr;};Sq=init=>new A_y(init);}else {Cu=sz=>new A_y(new BigInt64Array(sz));Sq=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new A_y(buffer);};}let H=sz=>new BbW(new Uint16Array(sz));let Tc=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new BbW(buffer);};let BX
=sz=>new A_T(new Int8Array(sz));let Bhd=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new A_T(buffer);};let MV=sz=>new Bbc(new Int16Array(sz));let BcZ=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new Bbc(buffer);};let X=sz=>new A_W(new Int32Array(sz));let E2=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new A_W(buffer);};let N1=sz=>new BfN(new Int8Array(sz));let Bhe=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new BfN(buffer);};let CU
=sz=>new Bd7(new Float32Array(sz));let Bhf=data=>{let buffer=new Float32Array(data.length);buffer.set(data);return new Bd7(buffer);};let LI=sz=>new A_t(new Float64Array(sz));let Be3=data=>{let buffer=new Float64Array(data.length);buffer.set(data);return new A_t(buffer);};let LA=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(HM()).call(this);this.data=data;}JavaArray.prototype=Object.create((HM()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};Bhg(JavaArray.prototype,function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (LA(this.type))(dataCopy);});let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[HM()],primitive:false,superclass:HM(),name:name,
binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let Bhh=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};};let Bhi=(name,binaryName)=>{let cls=Bhh();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass
=null;return cls;};let Kr=Bhi("boolean","Z");let AKf=Bhi("char","C");let Bch=Bhi("byte","B");let Bhj=Bhi("short","S");let Es=Bhi("int","I");let AQ8=Bhi("long","J");let Fu=Bhi("float","F");let A03=Bhi("double","D");let CO=Bhi("void","V");let E=ex=>{throw AUx(ex);};let Bhk=Symbol("javaException");let AUx=ex=>{let err=ex.$jsException;if(!err){let javaCause=Bhl(ex);let jsCause=javaCause!==null?javaCause.$jsException:void 0;let cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new Bhm("Java exception thrown",
cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[Bhk]=ex;ex.$jsException=err;Bhn(err,ex);}return err;};let Bhn=(err,ex)=>{if(typeof Bho==="function"&&err.stack){let stack=Bho(err.stack);let javaStack=Bs(Bhp(),stack.length);let elem;let noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=Bhq(Bv(element.className),Bv(element.methodName),Bv(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){Bhr(ex,
javaStack);}}};let Bhs=(cls,dimensions)=>{let first=0;for(let i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(let i=0;i<first;i=i+1|0){cls=LA(cls);}if(first===dimensions.length -1){return Bs(cls,dimensions[first]);}}let arrays=new Array(Bht(dimensions,first));let firstDim=dimensions[first]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Bs(cls,firstDim);}return Bhu(cls,arrays,dimensions,first);};let BfH=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length
===0){return Bhs(Bch,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=BX(firstDim);}return Bhu(Bch,arrays,dimensions);};let BfI=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length===0){return Bhs(AKf,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=H(firstDim);}return Bhu(AKf,arrays,dimensions,0);};let Bhv=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length===0){return Bhs(Kr,dimensions);}let firstDim
=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=N1(firstDim);}return Bhu(Kr,arrays,dimensions,0);};let Bdh=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length===0){return Bhs(Bhj,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=MV(firstDim);}return Bhu(Bhj,arrays,dimensions,0);};let AE3=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length===0){return Bhs(Es,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i
=i+1|0){arrays[i]=X(firstDim);}return Bhu(Es,arrays,dimensions,0);};let Bb4=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length===0){return Bhs(AQ8,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Cu(firstDim);}return Bhu(AQ8,arrays,dimensions,0);};let Ba0=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length===0){return Bhs(Fu,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=CU(firstDim);}return Bhu(Fu,
arrays,dimensions,0);};let A_P=dimensions=>{let arrays=new Array(Bht(dimensions,0));if(arrays.length===0){return Bhs(A03,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=LI(firstDim);}return Bhu(A03,arrays,dimensions,0);};let Bht=(dimensions,start)=>{let val=dimensions[start+1]|0;for(let i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;};let Bhu=(cls,arrays,dimensions,start)=>{let limit=arrays.length;for(let i=start+1|0;i
<dimensions.length;i=i+1|0){cls=LA(cls);let dim=dimensions[i];let index=0;let packedIndex=0;while(index<limit){let arr=Bhc(cls,dim);for(let j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];};let Bhw=value=>{if(typeof value==='number'&&Bhx(value)){throw "NaN";}return value;};let Bhy=printFunction=>{let buffer="";let utf8Buffer=0;let utf8Remaining=0;let putCodePoint=ch=>{if(ch===0xA){printFunction(buffer);buffer
="";}else if(ch<0x10000){buffer+=Bhz.fromCharCode(ch);}else {ch=ch -0x10000|0;let hi=(ch>>10)+0xD800;let lo=(ch&0x3FF)+0xDC00;buffer+=Bhz.fromCharCode(hi,lo);}};return ch=>{if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch
&0x07;utf8Buffer=3;}};};let BbJ=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof BhA==="object"?Bhy(function(msg){BhA.info(msg);}):function(){};let Bek=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof BhA==="object"?Bhy(function(msg){BhA.error(msg);}):function(){};let BhB=null;let BhC=data=>{let i=0;let packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++];let prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}BhB
=packages;};let BhD=data=>{let packages=BhB;let i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta;let className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype
={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName
=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j];let func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};let BhE=f=>function(){return f(this);};let BhF=f=>function(p1){return f(this,p1);};let BhG=f=>function(p1,p2){return f(this,p1,p2);};let BhH=f=>
function(p1,p2,p3){return f(this,p1,p2,p3,p3);};let BhI=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};let Bb2=f=>function(){let args=Array.prototype.slice.apply(arguments);BhJ(function(){f.apply(this,args);});};let BhK=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=Bs(HM(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=Bv(args[i]);}BhJ(()=>{f.call(null,javaArgs);},callback);};let BhL;let BhM=strings=>{BhN();BhL=new Array(strings.length);for(let i=0;i<strings.length;++i){BhL[i]=BhO(Bv(strings[i]));}};let C
=index=>BhL[index];let Bk=target=>target.$clinit=()=>{};let BhP=new ArrayBuffer(16);let BhQ=new DataView(BhP);let BhR=new Float32Array(BhP);let BhS=new Float64Array(BhP);let BhT=new Int32Array(BhP);let Ee;let E5;if(typeof BigInt!=='function'){Ee=n=>{BhQ.setFloat64(0,n,true);return new BhU(BhQ.getInt32(0,true),BhQ.getInt32(4,true));};E5=n=>{BhQ.setInt32(0,n.lo,true);BhQ.setInt32(4,n.hi,true);return BhQ.getFloat64(0,true);};}else if(typeof BigInt64Array!=='function'){Ee=n=>{BhQ.setFloat64(0,n,true);let lo=BhQ.getInt32(0,
true);let hi=BhQ.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};E5=n=>{BhQ.setFloat64(0,n,true);let lo=BhQ.getInt32(0,true);let hi=BhQ.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let $rt_numberConversionLongArray=new BigInt64Array(BhP);Ee=n=>{BhS[0]=n;return $rt_numberConversionLongArray[0];};E5=n=>{$rt_numberConversionLongArray[0]=n;return BhS[0];};}let H7=n=>{BhR[0]=n;return BhT[0];};let HA=n=>{BhT[0]
=n;return BhR[0];};let BhV=(a,b)=>{if(a!==a){return b!==b;}BhS[0]=a;BhS[1]=b;return BhT[0]===BhT[2]&&BhT[1]===BhT[3];};let Bhm;if(typeof BhW==='object'){let defaultMessage=Symbol("defaultMessage");Bhm=function Bhm(message,cause){let self=Reflect.construct(Error,[void 0,cause],Bhm);Object.setPrototypeOf(self,Bhm.prototype);self[defaultMessage]=message;return self;};Bhm.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:Bhm},message:{get:()=>{try {let javaException=this[Bhk];if
(typeof javaException==='object'){let javaMessage=BhX(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(BhY){return "Exception occurred trying to extract Java exception message: "+BhY;}}}});}else {Bhm=Error;}let BhZ=e=>e instanceof Error&&typeof e[Bhk]==='object'?e[Bhk]:null;let Bh0=e=>typeof e.$jsException==='object'?e.$jsException:null;let BH=err=>{let ex=err[Bhk];if(!ex){ex=Bh1(Bv("(JavaScript) "+err.toString()));err[Bhk]
=ex;ex.$jsException=err;Bhn(err,ex);}return ex;};let Bh2=obj=>{let cls=obj.constructor;let arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName="";if(cls===Kr){clsName="boolean";}else if(cls===Bch){clsName="byte";}else if(cls===Bhj){clsName="short";}else if(cls===AKf){clsName="char";}else if(cls===Es){clsName="int";}else if(cls===Bh3){clsName="long";}else if(cls===Fu){clsName="float";}else if(cls===A03){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name
:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;};function BhU(lo,hi){this.lo=lo|0;this.hi=hi|0;}BhU.prototype.__teavm_class__=()=>{return "long";};let Bh4=a=>(a.hi&0x80000000)===0;let Bh5=a=>(a.hi&0x80000000)!==0;let Bh6=1<<18;let M;let B;let I;let By;let Bz;let GF;let Z;if(typeof BigInt!=="function"){BhU.prototype.toString=function(){let result=[];let n=this;let positive=Bh4(n);if(!positive){n=HJ(n);}let radix=new BhU(10,0);do {let divRem=Bh7(n,radix);result.push(String.fromCharCode(48
+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};BhU.prototype.valueOf=function(){return Bz(this);};M=new BhU(0,0);I=val=>new BhU(val, -(val<0)|0);By=val=>val>=0?new BhU(val|0,val/0x100000000|0):HJ(new BhU( -val|0, -val/0x100000000|0));B=(lo,hi)=>new BhU(lo,hi);Bz=val=>0x100000000*val.hi+(val.lo>>>0);GF=val=>val.hi;Z=val=>val.lo;}else {M=BigInt(0);B=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)
<<BigInt(32)));I=val=>BigInt.asIntN(64,BigInt(val|0));By=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));Bz=val=>Number(val);GF=val=>Number(BigInt.asIntN(64,val>>BigInt(32)))|0;Z=val=>Number(BigInt.asIntN(32,val))|0;}let C7=Math.imul||function(a,b){let ah=a>>>16&0xFFFF;let al=a&0xFFFF;let bh=b>>>16&0xFFFF;let bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};let ED=(a,b)=>(a>>>0)/(b>>>0)>>>0;let BeZ=(a,b)=>(a>>>0)%(b>>>0)>>>0;let Gy=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};let Bh8
=(index,array)=>{if(index<0||index>=array.length){Bh9();}return index;};let Bh$=(index,array)=>{if(index>=array.length){Bh9();}return index;};let Bh_=index=>{if(index<0){Bh9();}return index;};let G=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=HM();}return function(){superclass.call(this);};};let R=(array,offset,count)=>{let result="";let limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;};let Bia=array=>R(array,0,array.length);let BdI=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}};let A_I=string=>{let array=new Uint16Array(string.length);for(let i=0;i<array.length;++i){array[i]=string.charCodeAt(i);}return new BbW(array);};let Bib=(string,start,end)=>{if(start===0&&end===string.length){return string;}let result=start.substring(start,end -1)+start.substring(end -1,end);Bic=Bic+result.charCodeAt(result.length -
1)|0;};let Bic=0;let Bhg=(target,method)=>target.t=method;let BI=cls=>BbF(cls);let Bv=str=>str===null?null:Zu(str);let Cp=str=>str===null?null:str.oh;let Bid=val=>{if(val===null){E(Bie());}return val;};let BhN=()=>U();let HM=()=>D;let Bh1=message=>Bif(message);let BhX=t=>ATA(t);let Bhl=t=>A7X(t);let Bhp=()=>HM();let Bh9=()=>E(Bh1(Bv("")));let Bg_=()=>E(Big());let AIK=()=>{{return AIx();}};let N5=t=>{{return ZI(t);}};let Bhq=(className,methodName,fileName,lineNumber)=>{{return null;}};let Bhr=(e,stack)=>{};let BhO;{BhO
=str=>str;}var A=Object.create(null);
function D(){this.qr=null;this.$id$=0;}
let Bih=()=>{let a=new D();Dm(a);return a;}
let Hq=b=>{let c;if(b.qr===null){c=new Js;Dq();c.ql=CG;b.qr=c;}b=b.qr;c=b.ql;if(c===null){Dq();b.ql=CG;}else{Dq();if(c!==CG){c=new Cb;c.oe=1;c.of=1;c.oi=C(0);E(c);}}b.qZ=b.qZ+1|0;}
let EV=b=>{let c,d,e;if(!H1(b)){c=b.qr;d=c.ql;Dq();if(d===CG){e=c.qZ-1|0;c.qZ=e;if(!e)c.ql=null;H1(b);return;}}b=new Ko;b.oe=1;b.of=1;E(b);}
let BbL=b=>{XG(b,1);}
let XG=(b,c)=>{let d,e,$p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.qr===null){d=new Js;Dq();d.ql=CG;b.qr=d;}d=b.qr;if(d.ql===null){Dq();d.ql=CG;}e=d.ql;Dq();if(e===CG){d.qZ=d.qZ+c|0;return;}$p=1;case 1:AB1(b,c);if(HB()){break _;}return;default:DU();}}Co().s(b,c,d,e,$p);}
let A3Z=(b,c,d)=>{let e,f,g;Dq();e=CG;f=b.qr;if(f===null){f=new Js;f.ql=e;b.qr=f;if(e!==e)CG=e;CG.tZ=F4();b=b.qr;b.qZ=b.qZ+c|0;b=null;d.wc.e(b);return;}if(f.ql===null){f.ql=e;if(e!==e)CG=e;CG.tZ=F4();b=b.qr;b.qZ=b.qZ+c|0;b=null;d.wc.e(b);return;}if(f.tb===null)f.tb=APn();f=f.tb;g=new Qc;g.Fu=e;g.Fv=b;g.Fs=c;g.Ft=d;d=g;f.push(d);}
let Bfx=b=>{AI5(b,1);}
let AI5=(b,c)=>{let d,e;if(!H1(b)){d=b.qr;e=d.ql;Dq();if(e===CG){c=d.qZ-c|0;d.qZ=c;if(c>0)return;d.ql=null;d=d.tb;if(d!==null&&!(d.length?0:1)){d=new Rv;d.G_=b;QU(d,0);}else H1(b);return;}}b=new Ko;b.oe=1;b.of=1;E(b);}
let ATX=b=>{let c,d,e;if(!H1(b)){c=b.qr;if(c.ql===null){b=c.tb;if(b!==null&&!(b.length?0:1)){b=c.tb.shift();BR();if(b!==null&&!(b instanceof HM()))b=C_(b);d=b;c.tb=null;b=d.Fu;c=d.Fv;e=d.Fs;d=d.Ft;Dq();if(CG!==b)CG=b;CG.tZ=F4();c=c.qr;c.ql=b;c.qZ=c.qZ+e|0;b=null;d.wc.e(b);}return;}}}
let H1=a=>{let b,c;b=a.qr;if(b===null)return 1;a:{if(b.ql===null){c=b.tb;if(!(c!==null&&!(c.length?0:1))){b=b.Du;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.qr=null;return 1;}
let Dm=a=>{return;}
let ASh=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new CN;c.oJ=b;d=c;b.classObject=d;}}return c;}
let A0r=a=>{let b,c;b=a;if(!b.$id$){c=Ff();b.$id$=c;}return a.$id$;}
let AQO=(a,b)=>{return a!==b?0:1;}
let AKY=a=>{let b,c,d,e;b=a;if(!b.$id$){c=Ff();b.$id$=c;}d=BB(a.$id$,4);b=new L;b.og=H(16);F(b,b.od,C(1));e=b.od;if(d===null)d=C(2);F(b,e,d);return Bi(b);}
let ABF=a=>{let b,c;b=a;if(!b.$id$){c=Ff();b.$id$=c;}return a.$id$;}
let APL=a=>{let b,c,d;if(!Fm(a,Gv)&&a.constructor.$meta.item===null){b=new QQ;b.oe=1;b.of=1;E(b);}b=AIW(a);c=b;d=Ff();c.$id$=d;return b;}
let NU=a=>{let b,c,d;b:{b=a.qr;if(b!==null){c=b.ql;Dq();if(c===CG){d=1;break b;}}d=0;}if(!d){b=new Ko;b.oe=1;b.of=1;E(b);}b=b.Du;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BR();if(c!==null&&!(c instanceof HM()))c=C_(c);c=c;if(!c.n())QU(c,0);}a.qr.Du=null;}
let AB1=(b,c)=>{let thread=Co();let javaThread=AIK();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;N5(javaThread);thread.resume();};callback.iP=e=>{thread.attribute=AUx(e);N5(javaThread);thread.resume();};callback=Yz(callback);thread.suspend(()=>{try {A3Z(b,c,callback);;}catch(RB){callback.iP(RB);}});return null;}
let AAy=G();
let Bfo=b=>{let c;c=new BQ;c.w6=1.0;c.w5=0.0;AJH=c;c=new BQ;c.w6=0.0;c.w5=1.0;AJF=c;c=new BQ;c.w6=0.0;c.w5=0.0;AN9=c;A1w=new BQ;A5s=new BQ;ASG=new BQ;ASQ=new BQ;AP6=new BQ;A4t=new BQ;A00=new Fj;A5V=new Fj;AUy=0.10000000149011612;AA_();ANQ=BI(Fu);AKH=Bs(Ig,111);A6u=new BQ;A6K=new BQ;A1f=new D;AEB();AXF=BI(Es);ADq();AZQ=BI(AQ8);AI2=BI(AKf);A6Y=Bs(Eu,128);AB3();AFF();Y=1;AND=new BQ;ANF=new BQ;ANH=new BQ;ARl=0.4000000059604645;AXE=0.10000000149011612;A8j=new BQ;AOO=new BQ;A3T=new BQ;AWB=new BQ;AWF=new BQ;AWE=new BQ;W1();AGs();Mk
=0.0;A2R=CU(3);Bm=1.0;Bp=1.0;BC=1.0;D0=1;AWH=new K9;A1A=new K8;c=new JJ;c.B6=BX(1);DX=c;c=new Kz;c.B6=BX(1);Km=c;AWS=BI(A03);XI();ABe();c=new CZ;c.pb=0;c.pA=0;DW=c;c=new CZ;c.pb=1;c.pA=0;DK=c;AUE=BX(0);ZN();Ww=1;M7=null;AEP();ADZ();AGP();ZW();XW();c=new Gc;c.yI=1;A37=c;c=new Gc;c.yI=0;AQ6=c;ANe=BI(Kr);c=BcY(C(3));c.Bm=512;c.wm=520;AC8(new M_,BcQ(),c);}
let He=G();
let BaC=0;let Beo=0;let Bdn=0;let BgU=0;let BdZ=0;let Bii=()=>{Bii=Bk(He);A3c();}
let A3c=()=>{BaC=DP(Bv(navigator.platform),C(4));Beo=DP(Bv(navigator.platform),C(5));Bdn=DP(Bv(navigator.platform),C(6));BgU=!DP(Bv(navigator.platform),C(7))&&!DP(Bv(navigator.platform),C(8))?0:1;BdZ=!DP(Bv(navigator.platform),C(9))&&!DP(Bv(navigator.platform),C(10))&&!DP(Bv(navigator.platform),C(11))?0:1;}
let RK=G(0);
let Np=G();
let DZ=G(0);
let AAt=G(Np);
let Ea=G(0);
let G7=G();
let DO=G(0);
let CI=G(0);
function BW(){let a=this;D.call(a);a.oq=null;a.on=0;}
let AAq=a=>{return a.on;}
let A2e=a=>{return a.oq;}
let FA=G(BW);
let BcC=null;let BcW=null;let BaM=null;let A_u=null;let Beh=()=>{Beh=Bk(FA);ATO();}
let ATO=()=>{let b,c,d;b=new FA;Beh();b.oq=C(12);b.on=0;BcC=b;c=new FA;c.oq=C(13);c.on=1;BcW=c;d=new FA;d.oq=C(14);d.on=2;BaM=d;A_u=S(FA,[b,c,d]);}
let G_=G();
let Nr=G(0);
let Kp=G(G_);
let A1w=null;let AON=()=>{A1w=new BQ;}
let HF=G(0);
let EK=G(0);
let HT=G();
let Hp=G(0);
let CB=G();
let A5s=null;let A9S=()=>{A5s=new BQ;}
let H4=G(CB);
let AGb=G(H4);
let GO=G(BW);
let AQ9=null;let A91=null;let ATU=null;let A9G=()=>{A9G=Bk(GO);AJK();}
let AJK=()=>{let b,c;b=new GO;A9G();b.oq=C(15);b.on=0;AQ9=b;c=new GO;c.oq=C(16);c.on=1;A91=c;ATU=S(GO,[b,c]);}
let Mh=G(0);
let Kv=G(0);
let Ho=G(0);
let Ek=G();
let AG8=G(Ek);
let L_=G(HT);
let In=G();
let ASG=null;let ASQ=null;let A1y=()=>{ASG=new BQ;ASQ=new BQ;}
let ADe=G();
let ABK=G();
let Vh=G(0);
let M8=G();
let AFY=G(M8);
let AEu=G(G7);
let S_=G();
let Bde=null;let Bij=()=>{Bij=Bk(S_);A4r();}
let A4r=()=>{let b,c;A9G();b=X((ATU.t()).data.length);c=b.data;Bde=b;c[AQ9.on]=1;c[A91.on]=2;}
let AFj=G();
let T7=G();
let A_j=null;let Bik=()=>{Bik=Bk(T7);AZS();}
let AZS=()=>{let b,c;AFz();b=X((ACS.t()).data.length);c=b.data;A_j=b;c[WW.on]=1;c[ACc.on]=2;c[ADT.on]=3;}
let AG7=G(Ek);
let GU=G();
let Ql=G(GU);
let Hs=G();
let Bcm=0;let BcT=0;let Be9=0;let BcU=0;let Bet=0;let Bb_=()=>{Bb_=Bk(Hs);A95();}
let BJ=()=>{let b;Bb_();b=Be.wk.data;return !b[59]&&!b[60]?0:1;}
let A95=()=>{Bcm=DP(Bv(navigator.platform),C(4));BcT=DP(Bv(navigator.platform),C(5));Be9=DP(Bv(navigator.platform),C(6));BcU=!DP(Bv(navigator.platform),C(7))&&!DP(Bv(navigator.platform),C(8))?0:1;Bet=!DP(Bv(navigator.platform),C(9))&&!DP(Bv(navigator.platform),C(10))&&!DP(Bv(navigator.platform),C(11))?0:1;}
let LD=G();
let Ve=G(H4);
let AP6=null;let A3O=()=>{AP6=new BQ;}
let S2=G();
let A4t=null;let AWi=()=>{A4t=new BQ;}
let KS=G();
let BdY=null;let Bdl=null;let BgS=null;let Bil=()=>{Bil=Bk(KS);A7Z();}
let A7Z=()=>{let b;b=new CQ;b.pD=1;b.ox=Bs(D,16);BdY=b;b=new Bf;BU();Bdl=b;BgS=new Fj;}
let ND=G();
let Ki=G(GU);
let Rn=G(GU);
let EE=G(CB);
let AUy=0.0;let A88=()=>{AUy=0.10000000149011612;}
let Re=G(Ki);
let WI=G(G7);
let Ld=G(0);
let YC=G(G7);
let XJ=G();
let N4=G();
let BdH=null;let Bim=()=>{Bim=Bk(N4);A9l();}
let A9l=()=>{let b,c;AFz();b=X((ACS.t()).data.length);c=b.data;BdH=b;c[AY1.on]=1;c[A4E.on]=2;c[AUF.on]=3;c[WW.on]=4;c[ACc.on]=5;c[ADT.on]=6;c[ALV.on]=7;c[ANm.on]=8;c[A71.on]=9;c[A13.on]=10;}
let Db=G(BW);
let WW=null;let ACc=null;let ADT=null;let ALV=null;let A71=null;let A13=null;let ANm=null;let AY1=null;let A4E=null;let AUF=null;let ACS=null;let AFz=()=>{AFz=Bk(Db);ALp();}
let ALp=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Db;AFz();b.oq=C(17);b.on=0;WW=b;c=new Db;c.oq=C(18);c.on=1;ACc=c;d=new Db;d.oq=C(19);d.on=2;ADT=d;e=new Db;e.oq=C(20);e.on=3;ALV=e;f=new Db;f.oq=C(21);f.on=4;A71=f;g=new Db;g.oq=C(22);g.on=5;A13=g;h=new Db;h.oq=C(23);h.on=6;ANm=h;i=new Db;i.oq=C(24);i.on=7;AY1=i;j=new Db;j.oq=C(25);j.on=8;A4E=j;k=new Db;k.oq=C(26);k.on=9;AUF=k;ACS=S(Db,[b,c,d,e,f,g,h,i,j,k]);}
let CX=G();
let F9=G(CX);
let X3=G(F9);
let Zi=G(F9);
let DE=G(CX);
let F2=G(DE);
let ABT=G(F2);
let ACt=G();
let Mp=G(CX);
let ACT=G(Mp);
let ADD=G(CX);
let Yy=G(CX);
let AGw=G(CX);
let AGN=G();
let Nd=G(CX);
let Yo=G(Nd);
let WV=G(DE);
let AG5=G(DE);
let AAu=G(F2);
let AF$=G(CX);
let Zt=G(F2);
let AHQ=G(DE);
let AAJ=G(DE);
let Xw=G(CX);
let Yi=G(DE);
let Yk=G(CX);
let ADV=G(CX);
let AEY=G(F9);
let AB8=G(DE);
let AAW=G(CX);
let AFV=G(F2);
let ADN=G(F9);
let Y_=G(CX);
let Wu=G(DE);
let AEz=G(DE);
let Sw=G();
let BeH=null;let AA_=()=>{BeH=S(CN,[BI(FC),BI(BD),BI(TC),BI(Ql),BI(Rn),BI(Ki),BI(Re),BI(Hl),BI(Tn),BI(QW),BI(Uu),BI(PB),BI(U8),BI(K0),BI(Rc),BI(T4),BI(R3),BI(Q3),BI(Hr),BI(Ty),BI(UH),BI(P4),BI(Tf),BI(Sd)]);}
let DM=G(Kp);
let D1=G(DM);
let A_F=null;let Ba8=null;let BfR=null;let BgW=null;let BbD=null;let A_m=null;let Bau=null;let Bfg=null;let Bin=()=>{Bin=Bk(D1);A8f();}
let A8f=()=>{let b,c;b=new BD;Fp();b.p0=0.0;b.pZ=0.0;b.pY=1.0;b.pX=1.0;Eh(b);A_F=b;b=new BD;b.p0=1.0;b.pZ=0.0;b.pY=0.0;b.pX=1.0;Eh(b);Ba8=b;b=new BD;b.p0=0.0;b.pZ=1.0;b.pY=0.0;b.pX=1.0;Eh(b);BfR=b;b=new Rj;c=new CQ;c.pD=0;c.ox=Bs(D,16);b.qD=c;b.sE=2147483647;BgW=b;b=new Ri;AIS();BbD=b;A_m=new Rh;Bau=new Rg;Bfg=new Rf;}
let GS=G(D1);
let Lu=G(GS);
let AC7=G(Lu);
let AAj=G(CB);
let LW=G(DM);
let PS=G(0);
let FZ=G();
let Xr=G(FZ);
let D8=G(G_);
let ACg=G(D8);
let AAi=G(CB);
let Cf=G();
let Bgn=null;let Bb5=null;let Bco=null;let Baj=null;let BeP=null;let BeC=null;let Bb3=null;let AIS=()=>{AIS=Bk(Cf);AYO();}
let AYO=()=>{let b;b=new Ig;AIS();b.Jt=0.0;Bgn=b;Bb5=new Ub;Bco=new T$;Baj=new T9;BeP=new Ua;BeC=new T_;Bb3=new T8;}
let Ua=G(Cf);
let AFZ=G(Cf);
let MC=G(EE);
let AEU=G(MC);
let Rh=G(Cf);
let AHJ=G(CB);
let I7=G(D1);
let A6u=null;let A6K=null;let AZM=()=>{A6u=new BQ;A6K=new BQ;}
let AF0=G(Cf);
let HE=G(0);
let Fj=G();
let A00=null;let A5V=null;let ATK=()=>{A00=new Fj;A5V=new Fj;}
let E4=G(Fj);
let A_g=null;let AWf=()=>{AWf=Bk(E4);VZ();}
let Bio=()=>{let a=new E4();Qh(a);return a;}
let Qh=a=>{AWf();}
let VZ=()=>{let b,c,d,e,$$je;M2();b=Gi;c=Dl(b,BI(E4));b=c<0?null:b.qg.data[c];if(b===null){b=new HX;d=new CQ;d.pD=0;d.ox=Bs(D,4);b.qD=d;b.sE=100;c:{try{d=LQ(BI(E4),null);break c;}catch($$e){$$je=BH($$e);if($$je instanceof Da){}else{throw $$e;}}try{d=MU(BI(E4),null);JO(d,1);break c;}catch($$e){$$je=BH($$e);if($$je instanceof Eo){}else{throw $$e;}}d=null;}b.ri=d;if(d===null){b=new B0;d=new L;d.og=H(16);F(d,d.od,C(27));if(BI(E4).oV===null)BI(E4).oV=Bv(BI(E4).oJ.$meta.name);e=BI(E4).oV;F(d,d.od,e);e=Bi(d);b.oe=
1;b.of=1;b.oi=e;E(b);}B3(Gi,BI(E4),b);}A_g=b;}
let Xu=G(FZ);
let Gf=G(D8);
let AND=null;let ANF=null;let ANH=null;let ARl=0.0;let AXE=0.0;let A$k=()=>{AND=new BQ;ANF=new BQ;ANH=new BQ;ARl=0.4000000059604645;AXE=0.10000000149011612;}
let WZ=G(Gf);
let AEF=G(CB);
let O$=G(0);
let AGy=G();
let Hl=G();
let Hr=G(Hl);
let Uu=G(Hr);
let L8=G(D8);
let XR=G(L8);
let AIf=G(LW);
let MF=G(DM);
let ABv=G(GS);
let NO=G(D8);
let Rf=G(Cf);
let UH=G();
let ADS=G();
let AEV=G(CB);
let YU=G(Ek);
let AEj=G();
let ZO=G(CB);
let AA7=G(EE);
let AEC=G(In);
let T8=G(Cf);
let T_=G(Cf);
let TL=G(0);
let K0=G();
let R3=G(K0);
let Xs=G(FZ);
let AAh=G(LD);
let AAk=G(ND);
let AHK=G(CB);
let AHL=G(EE);
let Rg=G(Cf);
let Fd=G();
let BaP=null;let Bfm=null;let BaN=null;let Bfk=null;let A_k=null;let A_X=null;let Bbw=null;let A_r=null;let BfC=null;let Bip=()=>{Bip=Bk(Fd);ALG();}
let ALG=()=>{let b;b=new KX;b.D6=0.0;BaP=b;b=new KX;b.D6=1.0;Bfm=b;Gj();BaN=Gr.data[128];Gj();b=Gr.data[129];Bfk=b;A_k=b;Gj();A_X=Gr.data[130];Gj();Bbw=Gr.data[132];Gj();A_r=Gr.data[136];Gj();BfC=Gr.data[144];}
let Tn=G(Hr);
let Yf=G(CB);
let Wk=G(Ek);
let Ub=G(Cf);
let ADh=G(DM);
let AED=G(CB);
let P4=G();
function Ig(){Cf.call(this);this.Jt=0.0;}
let AKH=null;let A9o=()=>{AKH=Bs(Ig,111);}
let XE=G(MF);
let T9=G(Cf);
let Tv=G(D8);
let A8j=null;let AVi=()=>{A8j=new BQ;}
let AEI=G(L_);
let Q3=G();
let MK=G(D8);
let Bds=null;let Bd_=null;let Biq=()=>{Biq=Bk(MK);AX$();}
let AX$=()=>{let b,c;b=new BD;Fp();Bds=b;b=new DH;E8();c=new CQ;c.pD=1;c.ox=Bs(D,1);b.qn=c;c=new Et;c.rf=1;c.pI=X(2);b.p1=c;Bd_=b;}
let Sd=G();
let AF1=G(Cf);
let Ri=G(Cf);
let AGQ=G(I7);
let T$=G(Cf);
let PB=G();
let AH_=G();
let Er=G(BW);
let BaS=null;let A_E=null;let BbN=null;let Bc_=null;let A_R=null;let BfO=null;let Bgo=()=>{Bgo=Bk(Er);ASs();}
let ASs=()=>{let b,c,d,e,f;b=new Er;Bgo();b.oq=C(28);b.on=0;BaS=b;c=new Er;c.oq=C(29);c.on=1;A_E=c;d=new Er;d.oq=C(30);d.on=2;BbN=d;e=new Er;e.oq=C(31);e.on=3;Bc_=e;f=new Er;f.oq=C(32);f.on=4;A_R=f;BfO=S(Er,[b,c,d,e,f]);}
let AIc=G(Cf);
let AEv=G(Ek);
function D6(){let a=this;D.call(a);a.sE=0;a.xt=0;a.qD=null;}
let VE=a=>{let b,c,d,e,f,g,h,$$je;a:{b=a.qD;c=b.oo;if(c){if(c){c=c-1|0;b.oo=c;d=b.ox.data;b=d[c];d[c]=null;break a;}b=new Cb;b.oe=1;b.of=1;b.oi=C(33);E(b);}try{b=K4(a.ri,null);break a;}catch($$e){$$je=BH($$e);if($$je instanceof Da){h=$$je;e=new Bc;b=new L;b.og=H(16);F(b,b.od,C(34));f=a.ri.rX.rw;if(f.oV===null)f.oV=Bv(f.oJ.$meta.name);g=f.oV;F(b,b.od,g);b=Bi(b);e.oe=1;e.of=1;e.oi=b;e.qd=h;E(e);}else{throw $$e;}}}return b;}
let Jt=(a,b)=>{let c,d,e;if(b===null){b=new V;b.oe=1;b.of=1;b.oi=C(35);E(b);}c=a.qD;if(c.oo<a.sE){Dj(c,b);d=a.xt;e=a.qD.oo;if(d>e)e=d;a.xt=e;if(Fm(b,Ea))b.D();}else if(Fm(b,Ea))b.D();}
let AA5=(a,b)=>{let c,d,e,f,g;if(b===null){b=new V;b.oe=1;b.of=1;b.oi=C(36);E(b);}c=a.qD;d=a.sE;e=0;f=b.oo;while(e<f){if(e>=b.oo){g=new O;c=new L;c.og=H(16);F(c,c.od,C(37));N(c,c.od,e,10);F(c,c.od,C(38));d=b.oo;N(c,c.od,d,10);b=Bi(c);g.oe=1;g.of=1;g.oi=b;E(g);}g=b.ox.data[e];if(g!==null){if(c.oo<d){Dj(c,g);if(Fm(g,Ea))g.D();}else if(Fm(g,Ea))g.D();}e=e+1|0;}d=a.xt;e=c.oo;if(d>e)e=d;a.xt=e;}
let Rj=G(D6);
let Wg=G();
let U8=G();
let TC=G();
let T4=G();
let KU=G(CB);
let AOO=null;let AJz=()=>{AOO=new BQ;}
let Wj=G(Ek);
let AHM=G(NO);
let Wh=G(0);
let Yg=G(CB);
let AIp=G(DM);
let Zh=G(DM);
let AEJ=G(EE);
let Mc=G();
let Xq=G(Mc);
let AHD=G(G_);
let V1=G(CB);
let AGW=G(GS);
let Y0=G(CB);
let AH4=G(EE);
let QW=G(Hl);
let Zk=G(DM);
let Ty=G();
let Tf=G();
let YV=G(D8);
let AA8=G(HT);
let V2=G(CB);
let Uo=G(DM);
let A3T=null;let A4b=()=>{A3T=new BQ;}
let ABf=G(KU);
let V3=G(D1);
let Xt=G(FZ);
let ABw=G();
let Rc=G();
let EM=G();
let BdE=null;let A_A=null;let BdJ=null;let BcI=null;let BcK=null;let BcJ=null;let Bd2=null;let Baz=null;let BgM=null;let Bdk=null;let BcN=null;let Bir=()=>{Bir=Bk(EM);A4y();}
let A4y=()=>{let b;BdE=CU(16);b=new Fw;QJ();b.uZ=0.0;b.uW=0.0;b.uX=0.0;b.uY=1.0;A_A=b;b=new Fw;b.uZ=0.0;b.uW=0.0;b.uX=0.0;b.uY=1.0;BdJ=b;b=new Bf;BU();BcI=b;BcK=new Bf;BcJ=new Bf;Bd2=new Bf;Baz=FP();BgM=new Bf;Bdk=new Bf;BcN=new Bf;}
let BA=G();
let Bdz=null;let Bcb=null;let Bd1=null;let Bcd=null;let BdU=null;let Bed=null;let BeM=null;let Bc$=null;let BeT=null;let Bac=null;let Bbs=null;let Bam=null;let Bec=null;let Bdo=null;let Bc5=null;let BfG=null;let Bes=null;let Bef=null;let BdV=null;let BfB=null;let Bee=null;let Bgt=null;let Bav=null;let BeX=null;let BcA=null;let Bbl=null;let A_i=null;let Bc9=null;let Bca=null;let BaA=null;let BgX=null;let BbO=null;let BgB=null;let Ba6=null;let BfD=null;let Bg4=null;let Bey=null;let BeE=null;let A_v=null;let BfV
=null;let BgZ=null;let BgF=null;let BbR=null;let Bc0=null;let EL=()=>{EL=Bk(BA);AY5();}
let AY5=()=>{let b,c;b=new QF;EL();Bdz=b;Bcb=new Qx;Bd1=new Qw;b=new Qz;Bcd=b;BdU=b;b=new FF;b.rh=2;Bed=b;b=new I9;b.rh=2;BeM=b;Bc$=b;b=new Ij;b.rh=2;BeT=b;Bac=b;Bbs=new Qy;Bam=new QB;b=new FF;b.rh=3;Bec=b;b=new I9;b.rh=3;Bdo=b;b=new Ij;b.rh=3;Bc5=b;BfG=new QA;Bes=new QD;b=new FF;b.rh=4;Bef=b;b=new I9;b.rh=4;BdV=b;b=new Ij;b.rh=4;BfB=b;b=new FF;b.rh=5;Bee=b;b=new I9;b.rh=5;Bgt=b;b=new Ij;b.rh=5;Bav=b;BeX=new QC;BcA=new TY;Bbl=new TZ;b=new HN;b.y_=2.0;b.ye=10.0;c=D7(2.0,(-10.0));b.yL=c;b.yg=1.0/(1.0-c);A_i=b;b
=new P1;b.y_=2.0;b.ye=10.0;c=D7(2.0,(-10.0));b.yL=c;b.yg=1.0/(1.0-c);Bc9=b;b=new Ru;Zn(b,2.0,10.0);Bca=b;BaA=BdQ(2.0,5.0);BgX=Bea(2.0,5.0);BbO=BbC(2.0,5.0);BgB=BaW();Ba6=Bel();BfD=BfW();Bg4=Bce(2.0,10.0,7,1.0);Bey=Bd4(2.0,10.0,6,1.0);BeE=Bft(2.0,10.0,7,1.0);A_v=BaJ(1.5);BfV=BgJ(2.0);BgZ=Bfn(2.0);BgF=Ba2(4);BbR=Bbx(4);Bc0=BdW(4);}
function Wy(){BA.call(this);this.J0=0.0;}
let BgJ=a=>{let b=new Wy();A1n(b,a);return b;}
let A1n=(a,b)=>{EL();a.J0=b;}
let AEw=G();
let QA=G(BA);
let AHW=G();
function FF(){BA.call(this);this.rh=0;}
let I9=G(FF);
let Ij=G(FF);
let JN=G(0);
let WP=G();
let QD=G(BA);
let AAo=G();
let Qz=G(BA);
function Il(){let a=this;BA.call(a);a.DT=0.0;a.CO=0.0;a.CU=0.0;a.Eu=0.0;}
let Bce=(a,b,c,d)=>{let e=new Il();APh(e,a,b,c,d);return e;}
let APh=(a,b,c,d,e)=>{EL();a.DT=b;a.CO=c;a.CU=e;a.Eu=d*3.1415927410125732*(d%2|0?(-1):1);}
let Qy=G(BA);
let Qx=G(BA);
let KJ=G();
let AWB=null;let AWF=null;let AWE=null;let AL2=()=>{AWB=new BQ;AWF=new BQ;AWE=new BQ;}
let ABI=G(D6);
let JC=G(0);
function BQ(){let a=this;D.call(a);a.w6=0.0;a.w5=0.0;}
let AJH=null;let AJF=null;let AN9=null;let AZY=()=>{let b;b=new BQ;b.w6=1.0;b.w5=0.0;AJH=b;b=new BQ;b.w6=0.0;b.w5=1.0;AJF=b;b=new BQ;b.w6=0.0;b.w5=0.0;AN9=b;}
let AFN=G(BA);
let Bel=()=>{let a=new AFN();A5P(a);return a;}
let A5P=a=>{EL();}
function HN(){let a=this;BA.call(a);a.y_=0.0;a.ye=0.0;a.yL=0.0;a.yg=0.0;}
let BdQ=(a,b)=>{let c=new HN();Zn(c,a,b);return c;}
let Zn=(a,b,c)=>{EL();a.y_=b;a.ye=c;c=D7(b, -c);a.yL=c;a.yg=1.0/(1.0-c);}
let AFn=G();
let QF=G(BA);
let Ru=G(HN);
let BbC=(a,b)=>{let c=new Ru();AOp(c,a,b);return c;}
let AOp=(a,b,c)=>{EL();a.y_=b;a.ye=c;c=D7(b, -c);a.yL=c;a.yg=1.0/(1.0-c);}
let XA=G();
let FV=G(BW);
let Bag=null;let Beu=null;let Bcl=null;let Bbv=null;let Bcc=()=>{Bcc=Bk(FV);A9F();}
let A9F=()=>{let b,c,d;b=new FV;Bcc();b.oq=C(39);b.on=0;Bag=b;c=new FV;c.oq=C(40);c.on=1;Beu=c;d=new FV;d.oq=C(41);d.on=2;Bcl=d;Bbv=S(FV,[b,c,d]);}
let P9=G();
let BcL=null;let Bis=()=>{Bis=Bk(P9);A3H();}
let A3H=()=>{let b;b=new Bf;BU();BcL=b;}
function Jh(){let a=this;BA.call(a);a.Iu=null;a.If=null;}
let BdW=a=>{let b=new Jh();Pt(b,a);return b;}
let Pt=(a,b)=>{let c,d,e,f,g;EL();if(b>=2&&b<=5){d:{c=CU(b);a.Iu=c;d=CU(b);e=d.data;a.If=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break d;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break d;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break d;default:break d;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new V;g=new L;g.og=H(16);F(g,g.od,C(42));N(g,g.od,b,10);g=Bi(g);f.oe=1;f.of=1;f.oi=g;E(f);}
let Yd=G(Jh);
let Bbx=a=>{let b=new Yd();A3A(b,a);return b;}
let A3A=(a,b)=>{Pt(a,b);}
let TY=G(BA);
let Y9=G();
let Qw=G(BA);
function E1(){let a=this;D.call(a);a.y7=0.0;a.y6=0.0;a.y9=0.0;a.y5=0.0;}
let Bgh=null;let Bge=null;let Bgf=null;let Bgg=null;let BdR=null;let BbP=()=>{BbP=Bk(E1);AWl();}
let AWl=()=>{let b;b=new E1;BbP();b.y7=1.0;b.y6=0.0;b.y9=0.0;b.y5=0.0;Bgh=b;b=new E1;b.y7=0.0;b.y6=1.0;b.y9=0.0;b.y5=0.0;Bge=b;b=new E1;b.y7=0.0;b.y6=0.0;b.y9=1.0;b.y5=0.0;Bgf=b;b=new E1;b.y7=0.0;b.y6=0.0;b.y9=0.0;b.y5=1.0;Bgg=b;b=new E1;b.y7=0.0;b.y6=0.0;b.y9=0.0;b.y5=0.0;BdR=b;}
let ACi=G(Il);
let Bd4=(a,b,c,d)=>{let e=new ACi();AJy(e,a,b,c,d);return e;}
let AJy=(a,b,c,d,e)=>{EL();a.DT=b;a.CO=c;a.CU=e;a.Eu=d*3.1415927410125732*(d%2|0?(-1):1);}
function X0(){BA.call(this);this.Ja=0.0;}
let BaJ=a=>{let b=new X0();AKm(b,a);return b;}
let AKm=(a,b)=>{EL();a.Ja=b*2.0;}
let WJ=G();
let ABk=G();
let QB=G(BA);
function AHF(){BA.call(this);this.IA=0.0;}
let Bfn=a=>{let b=new AHF();A31(b,a);return b;}
let A31=(a,b)=>{EL();a.IA=b;}
let AFO=G(BA);
let BfW=()=>{let a=new AFO();AP_(a);return a;}
let AP_=a=>{EL();}
let XY=G(Il);
let Bft=(a,b,c,d)=>{let e=new XY();ALS(e,a,b,c,d);return e;}
let ALS=(a,b,c,d,e)=>{EL();a.DT=b;a.CO=c;a.CU=e;a.Eu=d*3.1415927410125732*(d%2|0?(-1):1);}
let K3=G();
let Bat=null;let A_z=null;let BgN=null;let Bit=()=>{Bit=Bk(K3);AXP();}
let AXP=()=>{let b,c,d,e,f,g;Bat=Bs(Bf,15);b=Bs(Bf,8);A_z=b;c=Bs(Bf,9);d=c.data;BgN=c;e=0;f=d.length;while(e<f){g=new Bf;BU();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bf;BU();b[e]=g;e=e+1|0;}}
function Lc(){let a=this;D.call(a);a.FU=null;a.F3=null;a.FK=null;a.Hw=null;}
let Bao=null;let Bc2=()=>{Bc2=Bk(Lc);A74();}
let AF3=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.FU;e=b.os;f=c.os;if(e<f)f=e;e=b.ou;g=c.ou;if(e<g)g=e;e=b.ot;h=c.ot;if(e<h)h=e;d.os=f;d.ou=g;d.ot=h;i=a.F3;e=b.os;g=c.os;if(e>g)g=e;e=b.ou;h=c.ou;if(e>h)h=e;e=b.ot;f=c.ot;if(e>f)f=e;i.os=g;i.ou=h;i.ot=f;b=a.FK;h=d.os;j=d.ou;k=d.ot;b.os=h;b.ou=j;b.ot=k;e=i.os;f=i.ou;g=i.ot;h=h+e;j=j+f;k=k+g;b.os=h;b.ou=j;b.ot=k;f=h*0.5;g=j*0.5;e=k*0.5;b.os=f;b.ou=g;b.ot=e;b=a.Hw;g=i.os;h=i.ou;j=i.ot;b.os=g;b.ou=h;b.ot=j;e=d.os;f=d.ou;k=d.ot;g=g-e;e=h-f;f=j-k;b.os=g;b.ou=e;b.ot=f;return a;}
let A74=()=>{let b;b=new Bf;BU();Bao=b;}
function Nf(){let a=this;D.call(a);a.I$=null;a.JO=null;}
let Bdd=null;let Bfi=()=>{Bfi=Bk(Nf);ATS();}
let ATS=()=>{let b;b=new Bf;BU();Bdd=b;}
let ACX=G();
let VQ=G();
let ZJ=G();
let AEc=G();
let Qq=G();
let AEa=null;let LU=()=>{LU=Bk(Qq);AO_();}
let YD=b=>{LU();return ML.data[(b*2607.594482421875|0)&16383];}
let AGT=b=>{LU();return ML.data[((b+1.5707963705062866)*2607.594482421875|0)&16383];}
let Fv=()=>{let b,c,d;LU();b=AEa;c=b.un;d=b.uo;b.un=d;c=Bg(c,BP(c,23));c=Bg(Bg(Bg(c,d),Q(c,17)),Q(d,26));b.uo=c;return Bz(Q(T(c,d),40))*5.9604644775390625E-8;}
let M0=b=>{let c;LU();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let AO_=()=>{let b,c,d,e;b=new TS;c=B2(BP(I(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),I(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(Dh(c,M))c=B(0, 2147483648);d=W(Bg(c,Q(c,33)),B(3981806797, 4283543511));d=W(Bg(d,Q(d,33)),B(444984403, 3301882366));e=Bg(d,Q(d,33));d=W(Bg(e,Q(e,33)),B(3981806797, 4283543511));d=W(Bg(d,Q(d,33)),B(444984403, 3301882366));d=Bg(d,Q(d,33));b.un=e;b.uo=d;AEa=b;}
let C3=G();
let A_o=null;let A_p=null;let A_q=null;let Baa=null;let Bf9=null;let Bbe=null;let A_B=null;let A_C=null;let BeS=null;let BeQ=null;let BaF=null;let BaG=null;let BaH=null;let BaI=null;let BeU=null;let BeR=null;let Bbg=null;let Bex=null;let BfL=null;let BaU=null;let Bgs=null;let Bgr=null;let Bgq=null;let Ba3=null;let Biu=()=>{Biu=Bk(C3);AL0();}
let AL0=()=>{let b,c;b=new Bf;BU();A_o=b;A_p=new Bf;A_q=new Bf;b=new KQ;b.A7=1;b.pQ=CU(16);Baa=b;b=new KQ;b.A7=1;b.pQ=CU(16);Bf9=b;Bbe=new BQ;A_B=new BQ;A_C=new BQ;BeS=new BQ;BeQ=new BQ;BaF=new BQ;BaG=new BQ;BaH=new BQ;BaI=new BQ;b=new JZ;c=new Bf;b.s5=c;b.vl=0.0;c.os=0.0;c.ou=0.0;c.ot=0.0;b.vl=0.0;BeU=b;BeR=new Bf;Bbg=new Bf;Bex=new Bf;BfL=new Bf;BaU=new Bf;Bgs=new Bf;Bgr=new Bf;Bgq=new Bf;Ba3=new Bf;}
let Wm=G();
let ADI=G(Jh);
let Ba2=a=>{let b=new ADI();A5d(b,a);return b;}
let A5d=(a,b)=>{Pt(a,b);}
function EP(){D.call(this);this.qe=null;}
let AYe=null;let Be7=null;let Bcx=null;let Tj=null;let Ne=null;let AEA=null;let A9v=null;let AZD=null;let BbG=null;let Bc1=null;let Bfq=null;let HI=()=>{HI=Bk(EP);AX5();}
let FP=()=>{let a=new EP();ZX(a);return a;}
let ZX=a=>{let b,c;HI();b=CU(16);c=b.data;a.qe=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;}
let GC=(a,b)=>{let c;c=b.data;b=a.qe.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;}
let Qd=(a,b)=>{let c,d,e,f,g;HI();c=AYe;d=c.data;e=a.qe.data;f=e[0];g=b.qe.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]
*g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return GC(a,c);}
let Lr=a=>{let b;b=a.qe.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;}
let AFt=(a,b,c,d,e)=>{TR(a,b,b+d,c,c+e,0.0,1.0);return a;}
let TR=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Lr(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.qe.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;}
let Xa=(a,b,c)=>{let d,e,f,g,h,i;HI();d=Tj;e=b.os;f=b.ou;g=b.ot;d.os=e;d.ou=f;d.ot=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Ch(f);f=d.os*e;g=d.ou*e;e=d.ot*e;d.os=f;d.ou=g;d.ot=e;}d=Ne;e=b.os;f=b.ou;g=b.ot;d.os=e;d.ou=f;d.ot=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Ch(f);f=d.os*e;g=d.ou*e;e=d.ot*e;d.os=f;d.ou=g;d.ot=e;}b=SL(Ne,c);e=b.os;e=e*e;f=b.ou;e=e+f*f;f=b.ot;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Ch(e);h=b.os*g;e=b.ou*g;f=b.ot*g;b.os=h;b.ou=e;b.ot=f;}b=AEA;c=Ne;e=c.os;f=c.ou;g=c.ot;b.os=e;b.ou=f;b.ot=g;b
=SL(b,Tj);e=b.os;e=e*e;f=b.ou;e=e+f*f;f=b.ot;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Ch(f);f=b.os*e;g=b.ou*e;e=b.ot*e;b.os=f;b.ou=g;b.ot=e;}Lr(a);i=a.qe.data;b=Ne;i[0]=b.os;i[4]=b.ou;i[8]=b.ot;b=AEA;i[1]=b.os;i[5]=b.ou;i[9]=b.ot;b=Tj;i[2]= -b.os;i[6]= -b.ou;i[10]= -b.ot;return a;}
let VJ=(b,c)=>{let d,e,f;HI();d=b.data;c=c.data;e=CU(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]
*c[5]+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];CY(e,0,b,0,16);}
let AAR=b=>{HI();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]
*b[10]*b[15]+b[0]*b[5]*b[10]*b[15];}
let Xf=b=>{let c,d,e;HI();c=CU(16);d=AAR(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;}
let AEm=(b,c,d)=>{let e,f,g,h,i,j,k,l;HI();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;}
let AX5=()=>{let b;AYe=CU(16);b=new Fw;QJ();b.uZ=0.0;b.uW=0.0;b.uX=0.0;b.uY=1.0;Be7=b;b=new Fw;b.uZ=0.0;b.uW=0.0;b.uX=0.0;b.uY=1.0;Bcx=b;b=new Bf;BU();Tj=b;Ne=new Bf;AEA=new Bf;A9v=new Bf;AZD=FP();BbG=new Bf;Bc1=new Bf;Bfq=new Bf;}
let Sp=G(0);
function Hn(){let a=this;D.call(a);a.F0=0.0;a.Ej=0;}
function TS(){let a=this;Hn.call(a);a.un=M;a.uo=M;}
let AEf=a=>{let b,c;b=a.un;c=a.uo;a.un=c;b=Bg(b,BP(b,23));b=Bg(Bg(Bg(b,c),Q(b,17)),Q(c,26));a.uo=b;return Bz(Q(T(b,c),40))*5.9604644775390625E-8;}
let AFM=G(BA);
let BaW=()=>{let a=new AFM();A9I(a);return a;}
let A9I=a=>{EL();}
let QC=G(BA);
function JP(){let a=this;D.call(a);a.va=null;a.s4=null;a.Cm=null;}
let Bg3=null;let A9h=null;let BbB=null;let AO1=()=>{AO1=Bk(JP);A3N();}
let BfA=()=>{let a=new JP();ABZ(a);return a;}
let ABZ=a=>{let b,c,d,e,f,g;AO1();b=Bs(JZ,6);c=b.data;a.va=b;b=Bs(Bf,8);d=b.data;e=new Bf;BU();d[0]=e;d[1]=new Bf;d[2]=new Bf;d[3]=new Bf;d[4]=new Bf;d[5]=new Bf;d[6]=new Bf;d[7]=new Bf;a.s4=b;a.Cm=CU(24);f=0;while(f<6){e=new JZ;g=new Bf;e.s5=g;e.vl=0.0;g.os=0.0;g.ou=0.0;g.ot=0.0;e.vl=0.0;c[f]=e;f=f+1|0;}}
let AFW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;AO1();c=A9h;d=c.data;CY(c,0,a.Cm,0,d.length);c=b.qe;e=a.Cm;f=0;HI();g=0;while(g<8){AEm(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.s4.data[f];c=a.Cm.data;j=h+1|0;i.os=c[h];g=j+1|0;i.ou=c[j];h=g+1|0;i.ot=c[g];f=f+1|0;}b=a.va.data[0];c=a.s4.data;i=c[1];k=c[0];l=c[2];m=b.s5;n=i.os;o=i.ou;p=i.ot;m.os=n;m.ou=o;m.ot=p;q=k.os;r=k.ou;s=k.ot;q=n-q;o=o-r;n=p-s;m.os=q;m.ou=o;m.ot=n;p=k.os-l.os;r=k.ou-l.ou;s=k.ot-l.ot;t=o*s-n*r;s=n*p-q*s;q=q*r-o*p;m.os=t;m.ou=s;m.ot
=q;p=t*t+s*s+q*q;if(p!==0.0&&p!==1.0){o=1.0/Ch(p);p=m.os*o;q=m.ou*o;o=m.ot*o;m.os=p;m.ou=q;m.ot=o;}k=b.s5;b.vl= -(i.os*k.os+i.ou*k.ou+i.ot*k.ot);b=a.va.data[1];c=a.s4.data;i=c[4];k=c[5];l=c[7];m=b.s5;r=i.os;s=i.ou;n=i.ot;m.os=r;m.ou=s;m.ot=n;o=k.os;p=k.ou;q=k.ot;o=r-o;p=s-p;q=n-q;m.os=o;m.ou=p;m.ot=q;AIt(AFl(m,k.os-l.os,k.ou-l.ou,k.ot-l.ot));b.vl= -AAH(i,b.s5);b=a.va.data[2];c=a.s4.data;KB(b,c[0],c[4],c[3]);b=a.va.data[3];c=a.s4.data;KB(b,c[5],c[1],c[6]);b=a.va.data[4];c=a.s4.data;KB(b,c[2],c[3],c[6]);b=a.va.data[5];c
=a.s4.data;KB(b,c[4],c[0],c[1]);}
let A3N=()=>{let b,c,d,e,f,g,h,i,j;b=Bs(Bf,8);c=b.data;d=new Bf;BU();d.os=(-1.0);d.ou=(-1.0);d.ot=(-1.0);c[0]=d;d=new Bf;d.os=1.0;d.ou=(-1.0);d.ot=(-1.0);c[1]=d;d=new Bf;d.os=1.0;d.ou=1.0;d.ot=(-1.0);c[2]=d;d=new Bf;d.os=(-1.0);d.ou=1.0;d.ot=(-1.0);c[3]=d;d=new Bf;d.os=(-1.0);d.ou=(-1.0);d.ot=1.0;c[4]=d;d=new Bf;d.os=1.0;d.ou=(-1.0);d.ot=1.0;c[5]=d;d=new Bf;d.os=1.0;d.ou=1.0;d.ot=1.0;c[6]=d;d=new Bf;d.os=(-1.0);d.ou=1.0;d.ot=1.0;c[7]=d;Bg3=b;b=CU(24);e=b.data;A9h=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1
|0;e[f]=d.os;j=i+1|0;e[i]=d.ou;f=j+1|0;e[j]=d.ot;h=h+1|0;}BbB=new Bf;}
function Fw(){let a=this;D.call(a);a.uZ=0.0;a.uW=0.0;a.uX=0.0;a.uY=0.0;}
let BeA=null;let Bez=null;let QJ=()=>{QJ=Bk(Fw);AOm();}
let AOm=()=>{let b;b=new Fw;QJ();b.uZ=0.0;b.uW=0.0;b.uX=0.0;b.uY=0.0;BeA=b;b=new Fw;b.uZ=0.0;b.uW=0.0;b.uX=0.0;b.uY=0.0;Bez=b;}
let VB=G();
let AFQ=G();
function Bf(){let a=this;D.call(a);a.os=0.0;a.ou=0.0;a.ot=0.0;}
let A_5=null;let A_6=null;let A_4=null;let Bfc=null;let BgK=null;let BU=()=>{BU=Bk(Bf);AJ0();}
let AIt=a=>{let b,c,d;b=a.os;b=b*b;c=a.ou;b=b+c*c;c=a.ot;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/Ch(c);c=a.os*b;d=a.ou*b;b=a.ot*b;a.os=c;a.ou=d;a.ot=b;return a;}return a;}
let AAH=(a,b)=>{return a.os*b.os+a.ou*b.ou+a.ot*b.ot;}
let SL=(a,b)=>{let c,d,e,f,g,h,i;c=a.ou;d=b.ot;e=c*d;f=a.ot;g=b.ou;h=e-f*g;e=b.os;f=f*e;i=a.os;d=f-i*d;c=i*g-c*e;a.os=h;a.ou=d;a.ot=c;return a;}
let AFl=(a,b,c,d)=>{let e,f,g,h;e=a.ou;f=e*d;g=a.ot;h=f-g*c;g=g*b;f=a.os;d=g-f*d;b=f*c-e*b;a.os=h;a.ou=d;a.ot=b;return a;}
let AJ0=()=>{let b;b=new Bf;BU();b.os=1.0;b.ou=0.0;b.ot=0.0;A_5=b;b=new Bf;b.os=0.0;b.ou=1.0;b.ot=0.0;A_6=b;b=new Bf;b.os=0.0;b.ou=0.0;b.ot=1.0;A_4=b;b=new Bf;b.os=0.0;b.ou=0.0;b.ot=0.0;Bfc=b;BgK=FP();}
let XD=G();
let W4=G(D6);
let P1=G(HN);
let Bea=(a,b)=>{let c=new P1();A5o(c,a,b);return c;}
let A5o=(a,b,c)=>{EL();a.y_=b;a.ye=c;c=D7(b, -c);a.yL=c;a.yg=1.0/(1.0-c);}
let AF2=G();
let Wr=G();
let AHn=G();
function JZ(){let a=this;D.call(a);a.s5=null;a.vl=0.0;}
let KB=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=a.s5;f=b.os;g=b.ou;h=b.ot;e.os=f;e.ou=g;e.ot=h;i=c.os;j=c.ou;k=c.ot;f=f-i;g=g-j;k=h-k;e.os=f;e.ou=g;e.ot=k;h=c.os-d.os;j=c.ou-d.ou;l=c.ot-d.ot;i=g*l-k*j;k=k*h-f*l;f=f*j-g*h;e.os=i;e.ou=k;e.ot=f;f=i*i+k*k+f*f;if(f!==0.0&&f!==1.0){k=1.0/Ch(f);f=e.os*k;g=e.ou*k;k=e.ot*k;e.os=f;e.ou=g;e.ot=k;}c=a.s5;a.vl= -(b.os*c.os+b.ou*c.ou+b.ot*c.ot);}
let TZ=G(BA);
let AHp=G();
let ACs=G();
let AGl=G();
let AHm=G();
let Y4=G(0);
let ADW=G();
let Uv=G();
let ML=null;let W1=()=>{let b,c;ML=CU(16384);b=0;while(b<16384){ML.data[b]=NL((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=ML.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);}
function DH(){let a=this;D.call(a);a.qn=null;a.p1=null;a.qC=0;a.EP=0.0;a.Av=0.0;}
let GW=null;let Jf=null;let E8=()=>{E8=Bk(DH);AC4();}
let Biv=()=>{let a=new DH();Vc(a);return a;}
let Biw=(a,b)=>{let c=new DH();OF(c,a,b);return c;}
let Bix=(a,b,c,d,e,f)=>{let g=new DH();QE(g,a,b,c,d,e,f);return g;}
let Biy=(a,b,c,d,e,f,g,h,i)=>{let j=new DH();UC(j,a,b,c,d,e,f,g,h,i);return j;}
let Vc=a=>{let b;E8();b=new CQ;b.pD=1;b.ox=Bs(D,1);a.qn=b;b=new Et;b.rf=1;b.pI=X(2);a.p1=b;}
let OF=(a,b,c)=>{let d;E8();d=new CQ;d.pD=1;d.ox=Bs(D,1);a.qn=d;d=new Et;d.rf=1;d.pI=X(2);a.p1=d;Hi(a,b,c,0,c.Y(),b.Z(),0.0,8,0,null);}
let QE=(a,b,c,d,e,f,g)=>{let h;E8();h=new CQ;h.pD=1;h.ox=Bs(D,1);a.qn=h;h=new Et;h.rf=1;h.pI=X(2);a.p1=h;Hi(a,b,c,0,c.Y(),d,e,f,g,null);}
let UC=(a,b,c,d,e,f,g,h,i,j)=>{let k;E8();k=new CQ;k.pD=1;k.ox=Bs(D,1);a.qn=k;k=new Et;k.rf=1;k.pI=X(2);a.p1=k;Hi(a,b,c,d,e,f,g,h,i,j);}
let Hi=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;U0(a);k=b.xT;if(d==e){a.Av=k.sP;return;}if(i)g=J2(g,k.E6*3.0);l=!i&&j===null?0:1;m=J6(f);AHO(a.p1,0,m);n=k.zt;if(n)Gp(Jf,m);o=0;p=0.0;q=k.z2;r=null;s=null;t=m;u=d;e:{f:{g:while(true){h:{v=0;if(d==e){if(u==e)break e;o=1;w=e;}else{i=d+1|0;if(d<0)break f;if(d>=c.oh.length)break f;i:{switch(c.oh.charCodeAt(d)){case 10:w=i-1|0;v=1;d=i;break h;case 91:if(!n){d=i;break i;}x=Qr(a,c,i,e);if(x>=0){w=i-1|0;d=i+(x+1|0)|0;if(d==e){o=1;break h;}m
=Ts(Jf);break h;}if(x!=(-2)){d=i;break i;}d=i+1|0;break i;default:}d=i;}continue g;}}b=GW;f=b.qD;i=f.oo;if(!i)b=Te(b);else{if(!i){b=new Cb;b.oe=1;b.of=1;b.oi=C(33);E(b);}i=i-1|0;f.oo=i;y=f.ox.data;b=y[i];y[i]=null;}z=b;z.sc=0.0;z.Ax=p;OU(k,z,c,u,w,s);a.qC=a.qC+z.pG.oo|0;if(m!=t){b=a.p1;i=GN(b,b.o8-2|0);ba=a.qC;if(i!=ba){Gp(a.p1,ba);Gp(a.p1,m);}else{b=a.p1;KH(b,b.o8-1|0,m);}t=m;}j:{if(!z.pG.oo){Jt(GW,z);if(r===null)break j;}else if(r!==null){RW(r,z);Jt(GW,z);}else{Dj(a.qn,z);r=z;}if(!v&&!o){b=r.pG;ba=b.oo;if
(!ba)break g;s=b.ox.data[ba-1|0];}else{Mb(a,k,r);s=null;}if(l&&r.pG.oo&&!(!v&&!o)){bb=SW(r.pU)+SB(r.pU,1);bc=2;while(bc<r.pU.pC){b=r.pG;i=bc-1|0;if(bb+Lk(a,AHS(b,i),k)-9.999999747378752E-5<=g)bb=bb+r.pU.pQ.data[bc];else{if(j!==null){Oy(a,k,r,g,j);break e;}ba=Vy(k,r.pG,bc);if(!(!ba&&r.sc===0.0)&&ba<r.pG.oo)i=ba;r=QT(a,k,r,i);if(r===null)break j;Dj(a.qn,r);p=p+q;r.sc=0.0;r.Ax=p;bb=SW(r.pU)+SB(r.pU,1);bc=1;}bc=bc+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.FD;}u=d;}b=new Cb;Vb(b,C(33));E(b);}b=new Ba;b.oe=1;b.of
=1;E(b);}a.Av=k.sP+Jp(p);SR(a,k);TN(a,g,h);if(n)Jf.o8=0;}
let SR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=0.0;d=a.qn;e=d.ox;f=0;g=d.oo;while(f<g){d=e.data[f];h=d.pU.pQ.data;i=d.sc+h[0];j=0.0;k=d.pG;l=k.ox;m=0;n=k.oo;while(m<n){k=l.data[m];j=J2(j,i+(k.qK+k.rl|0)*b.tu-b.vL);m=m+1|0;i=i+h[m];}i=J2(i,j);j=d.sc;i=i-j;d.Cv=i;c=J2(c,j+i);f=f+1|0;}a.EP=c;}
let TN=(a,b,c)=>{let d,e,f,g,h;b:{if(!(c&8)){d=!(c&1)?0:1;e=a.qn;f=e.ox;g=0;h=e.oo;while(true){if(g>=h)break b;e=f.data[g];e.sc=e.sc+(!d?b-e.Cv:0.5*(b-e.Cv));g=g+1|0;}}}}
let Oy=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;f=c.pG.oo;E8();g=GW;h=g.qD;i=h.oo;if(i){if(!i){b=new Cb;b.oe=1;b.of=1;b.oi=C(33);E(b);}i=i-1|0;h.oo=i;j=h.ox.data;h=j[i];j[i]=null;}else k:{try{h=K4(g.ri,null);break k;}catch($$e){$$je=BH($$e);if($$je instanceof Da){c=$$je;}else{throw $$e;}}e=new Bc;b=new L;b.og=H(16);F(b,b.od,C(34));g=g.ri.rX.rw;if(g.oV===null)g.oV=Bv(g.oJ.$meta.name);h=g.oV;F(b,b.od,h);b=Bi(b);e.oe=1;e.of=1;e.oi=b;e.qd=c;E(e);}k=h;OU(b,k,e,0,e.Y(),null);l=0.0;g=k.pU;m=g.pC;if(m>0){h
=k.pG;n=h.oo;if(!n){b=new Cb;b.oe=1;b.of=1;b.oi=C(33);E(b);}h=h.ox.data[n-1|0];if(!h.yJ)g.pQ.data[m-1|0]=(h.qK+h.rl|0)*b.tu-b.vL;j=g.pQ;o=1;while(o<m){l=l+j.data[o];o=o+1|0;}}d=d-l;n=0;p=c.sc;q=c.pU;j=q.pQ;l:{while(true){if(n>=q.pC)break l;p=p+j.data[n];if(p>d)break;n=n+1|0;}}if(n<=1){r=c.pG;j=r.ox;i=0;n=r.oo;h=null;if(i>n){b=new V;b.oe=1;b.of=1;E(b);}while(i<n){s=j.data;o=i+1|0;s[i]=h;i=o;}r.oo=0;q.pC=0;K_(q,g.pQ,0,g.pC);}else{Om(c.pG,n-1|0);h=c.pU;if(h.pC>n)h.pC=n;h=AA6(c.pG);if(!h.yJ){g=c.pU;g.pQ.data[g.pC
-1|0]=Lk(a,h,b);}h=k.pU;i=h.pC;if(i>0)QY(c.pU,h,1,i-1|0);}m:{i=f-c.pG.oo|0;if(i>0){a.qC=a.qC-i|0;if(b.zt)while(true){b=a.p1;i=b.o8;if(i<=2)break m;if(GN(b,i-2|0)<a.qC)break m;b=a.p1;b.o8=b.o8-2|0;}}}XQ(c.pG,k.pG);a.qC=a.qC+e.Y()|0;Jt(GW,k);}
let QT=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.pG;f=e.oo;g=c.pU;h=d;b:{while(true){if(h<=0)break b;i=h-1|0;if(i>=f)break;n:{switch(e.ox.data[i].tK&65535){case 9:case 10:case 13:case 32:break;default:i=0;break n;}i=1;}if(!i)break b;h=h+(-1)|0;}c=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,i,10);F(b,b.od,C(38));d=e.oo;N(b,b.od,d,10);b=Bi(b);c.oe=1;c.of=1;c.oi=b;E(c);}o:{while(true){j=B9(d,f);if(j>=0)break o;if(j>=0)break;l:{switch(e.ox.data[d].tK&65535){case 9:case 10:case 13:case 32:break;default:i
=0;break l;}i=1;}if(!i)break o;d=d+1|0;}c=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,d,10);F(b,b.od,C(38));d=e.oo;N(b,b.od,d,10);b=Bi(b);c.oe=1;c.of=1;c.oi=b;E(c);}k=null;if(j>=0){Om(e,h);j=h+1|0;if(g.pC>j)g.pC=j;l=d-h|0;if(l>0){a.qC=a.qC-l|0;if(b.zt){m=a.p1;if(GN(m,m.o8-2|0)>a.qC){n=Ts(a.p1);while(true){m=a.p1;d=GN(m,m.o8-2|0);i=a.qC;if(d<=i)break;m=a.p1;m.o8=m.o8-2|0;}m=a.p1;KH(m,m.o8-2|0,i);m=a.p1;KH(m,m.o8-1|0,n);}}}}else{E8();o=GW;m=o.qD;i=m.oo;if(!i)m=Te(o);else{if(!i){b=new Cb;b.oe=1;b.of=1;b.oi
=C(33);E(b);}i=i-1|0;m.oo=i;p=m.ox.data;m=p[i];p[i]=null;}p:{k=m;m=k.pG;VM(m,e,0,h);WY(e,0,d-1|0);c.pG=m;k.pG=e;o=k.pU;QY(o,g,0,h+1|0);ABM(g,1,d);g.pQ.data[0]=U6(a,e,b);c.pU=o;k.pU=g;i=c.pG.oo;j=k.pG.oo;l=(f-i|0)-j|0;d=a.qC-l|0;a.qC=d;if(b.zt&&l>0){q=d-j|0;r=a.p1.o8-2|0;while(true){if(r<2)break p;s=GN(a.p1,r);if(s<=q)break;KH(a.p1,r,s-l|0);r=r+(-2)|0;}}}}if(h)Mb(a,b,c);else{E8();Jt(GW,c);AB0(a.qn);}return k;}
let Mb=(a,b,c)=>{let d,e;d=c.pG;e=d.oo;if(!e){b=new Cb;b.oe=1;b.of=1;b.oi=C(33);E(b);}d=d.ox.data[e-1|0];if(!d.yJ){c=c.pU;c.pQ.data[c.pC-1|0]=(d.qK+d.rl|0)*b.tu-b.vL;}}
let Lk=(a,b,c)=>{return (b.qK+b.rl|0)*c.tu-c.vL;}
let U6=(a,b,c)=>{if(b.oo)return ( -b.ox.data[0].rl|0)*c.tu-c.AR;c=new Cb;c.oe=1;c.of=1;c.oi=C(33);E(c);}
let Qr=(a,b,c,d)=>{let e,f,g,h;if(c==d)return (-1);if(c>=0&&c<b.oh.length){switch(b.oh.charCodeAt(c)){case 35:e=0;f=c+1|0;q:{while(true){if(f>=d)break q;if(f<0)break;if(f>=b.oh.length)break;g=b.oh.charCodeAt(f);if(g==93){if(f<(c+2|0))break q;if(f<=(c+9|0)){c=f-c|0;if(c<8)e=e<<((9-c|0)<<2)|255;E8();b=Jf;d=((e&(-16711936))>>>8|0)|(e&16711935)<<8;Gp(b,(d>>>16|0)+(d<<16)|0);return c;}break q;}e=(e<<4)+g|0;if(g>=48&&g<=57)e=e+(-48)|0;else if(g>=65&&g<=70)e=e+(-55)|0;else{if(g<97)break q;if(g>102)break q;e=e+(-87)
|0;}f=f+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}return (-1);case 91:break;case 93:E8();b=Jf;c=b.o8;if(c>1)b.o8=c-1|0;return 0;default:f=c+1|0;r:{while(f<d){if(f<0)break r;if(f>=b.oh.length)break r;if(b.oh.charCodeAt(f)==93){b=Cv(b,c,f);AM8();h=CC;d=Dl(h,b);h=d<0?null:h.qg.data[d];if(h===null)return (-1);E8();Gp(Jf,J6(h));return f-c|0;}f=f+1|0;}return (-1);}b=new Ba;b.oe=1;b.of=1;E(b);}return (-2);}b=new Ba;b.oe=1;b.of=1;E(b);}
let U0=a=>{let b,c,d,e,f,g,h;E8();AA5(GW,a.qn);b=a.qn;c=b.ox;d=0;e=b.oo;f=null;if(d>e){b=new V;b.oe=1;b.of=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oo=0;a.p1.o8=0;a.qC=0;a.EP=0.0;a.Av=0.0;}
let Zm=a=>{let b,c,d,e,f,g,h;if(!a.qn.oo)return C(43);b=new L;b.og=H(128);c=a.EP;ER(b,b.od,c);d=b.od;Bo(b,d,d+1|0);b.og.data[d]=120;c=a.Av;ER(b,b.od,c);d=b.od;Bo(b,d,d+1|0);b.og.data[d]=10;e=0;d=a.qn.oo;while(e<d){f=a.qn;if(e>=f.oo){g=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,e,10);F(b,b.od,C(38));e=f.oo;N(b,b.od,e,10);b=Bi(b);g.oe=1;g.of=1;g.oi=b;E(g);}f=Ot(f.ox.data[e]);F(b,b.od,f);h=b.od;Bo(b,h,h+1|0);b.og.data[h]=10;e=e+1|0;}b.od=b.od-1|0;return Bi(b);}
let AC4=()=>{let b,c,d,e,$$je;M2();b=Gi;c=Dl(b,BI(DY));b=c<0?null:b.qg.data[c];if(b===null){b=new HX;d=new CQ;d.pD=0;d.ox=Bs(D,4);b.qD=d;b.sE=100;c:{try{d=LQ(BI(DY),null);break c;}catch($$e){$$je=BH($$e);if($$je instanceof Da){}else{throw $$e;}}try{d=MU(BI(DY),null);JO(d,1);break c;}catch($$e){$$je=BH($$e);if($$je instanceof Eo){}else{throw $$e;}}d=null;}b.ri=d;if(d===null){b=new B0;d=new L;d.og=H(16);F(d,d.od,C(27));if(BI(DY).oV===null)BI(DY).oV=Bv(BI(DY).oJ.$meta.name);e=BI(DY).oV;F(d,d.od,e);e=Bi(d);b.oe
=1;b.of=1;b.oi=e;E(b);}B3(Gi,BI(DY),b);}GW=b;e=new Et;e.rf=1;e.pI=X(4);Jf=e;}
function HP(){let a=this;D.call(a);a.zD=null;a.Gu=0.0;a.Gw=0.0;a.JZ=0.0;a.JY=0.0;a.AX=0;a.CJ=0;}
let AG3=(a,b,c,d,e)=>{let f,g,h;f=a.zD.vI;g=1.0/f.tV;h=1.0/f.tI;Ws(a,b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.AX=d;if(e<0)e= -e|0;a.CJ=e;}
let Ws=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.zD.vI;g=f.tV;h=f.tI;i=Jp(d-b);j=g;i=i*j;a.AX=i+FJ(i)*0.5|0;k=Jp(e-c);i=h;k=k*i;l=k+FJ(k)*0.5|0;a.CJ=l;if(a.AX==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.Gu=b;a.Gw=c;a.JZ=d;a.JY=e;}
let AFK=G(HP);
function FC(){let a=this;D.call(a);a.xT=null;a.t7=null;a.s0=null;a.I7=0;a.H1=0;a.HN=0;}
let Biz=(a,b,c)=>{let d=new FC();ADU(d,a,b,c);return d;}
let ADU=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n;a.I7=b.C_;a.xT=b;a.H1=d;if(c!==null&&c.oo){a.t7=c;a.HN=0;}else{e=b.wV;if(e===null){b=new V;b.oe=1;b.of=1;b.oi=C(44);E(b);}f=e.data.length;c=new CQ;c.pD=1;c.ox=Bs(D,f);a.t7=c;g=0;while(g<f){h=b.Gb;if(h!==null){i=PV;c=b.wV.data[g];j=h.xX;k=ASH(i.AZ,c,j);}else{c=PV;h=b.wV.data[g];k=new JU;i=c.AZ;Ns();M3(k,i,h,Rm);}c=a.t7;h=new HP;l=new Md;m=null;j=BeK(k,ASZ(k),m,0);i=Cd;m=i.ol.createTexture();n=i.yY;i.yY=n+1|0;C6(i.wn,n,C_(m));ALE();k=AQl;l.Bw=k;l.A9=k;AW$();k=ATo;l.Bb
=k;l.Ad=k;l.E4=1.0;l.tH=3553;l.Ez=n;AAP(l,j);k=Eg;i=ABi;if(k===null){i=i.qv.data[0];while(i!==null&&i.q0!==null){i=i.q_;}}else{d=ABF(k);e=i.qv.data;i=e[d&(e.length-1|0)];while(i!==null&&!(i.t3==d&&AYz(k,i.q0))){i=i.q_;}}i=i===null?null:i.rv;if(i===null){i=new CQ;i.pD=1;i.ox=Bs(D,16);}Dj(i,l);JX(ABi,k,i);h.zD=l;k=l.vI;AG3(h,0,0,k.tV,k.tI);Dj(c,h);g=g+1|0;}a.HN=1;}a.s0=Bf$(a,a.H1);ABl(a,b);}
let ABl=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.uH.data;d=c.length;e=0;a:while(true){if(e>=d){f=b.CY;if(f!==null){g=a.t7;d=f.xA;if(d>=g.oo){f=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,d,10);F(b,b.od,C(38));d=g.oo;N(b,b.od,d,10);b=Bi(b);f.oe=1;f.of=1;f.oi=b;E(f);}RY(b,f,g.ox.data[d]);}return;}k:{h=c[e];if(h!==null){h=h.data;i=h.length;j=0;while(true){if(j>=i)break k;g=h[j];if(g!==null){f=a.t7;k=g.xA;if(k>=f.oo)break a;RY(b,g,f.ox.data[k]);}j=j+1|0;}}}e=e+1|0;}g=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,
b.od,k,10);F(b,b.od,C(38));d=f.oo;N(b,b.od,d,10);b=Bi(b);g.oe=1;g.of=1;g.oi=b;E(g);}
let Bw=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,$$je;T6(a.s0);i=a.s0;j=c.oh.length;k=null;M2();l=Gi;m=Dl(l,BI(DH));n=m<0?null:l.qg.data[m];if(n===null){n=new HX;l=new CQ;Dm(l);l.pD=0;l.ox=Bs(D,4);n.qD=l;n.sE=100;n:{try{l=LQ(BI(DH),null);break n;}catch($$e){$$je=BH($$e);if($$je instanceof Da){}else{throw $$e;}}try{l=MU(BI(DH),null);JO(l,1);break n;}catch($$e){$$je=BH($$e);if($$je instanceof Eo){}else{throw $$e;}}l=null;}n.ri=l;if(l===null){b=new B0;c=new L;Jo(c,16);DI(c,c.od,C(27));if(BI(DH).oV===null)BI(DH).oV
=Bv(BI(DH).oJ.$meta.name);l=BI(DH).oV;DI(c,c.od,l);c=Bi(c);b.oe=1;b.of=1;b.oi=c;E(b);}B3(Gi,BI(DH),n);}l:{l=n.qD;o=l.oo;if(o){if(!o){b=new Cb;b.oe=1;b.of=1;b.oi=C(33);E(b);}o=o-1|0;l.oo=o;p=l.ox.data;l=p[o];p[o]=null;}else try{l=K4(n.ri,null);break l;}catch($$e){$$je=BH($$e);if($$je instanceof Da){c=$$je;l=new Bc;b=new L;Dm(b);b.og=H(16);F(b,b.od,C(34));i=n.ri.rX.rw;if(i.oV===null)i.oV=Bv(i.oJ.$meta.name);q=i.oV;F(b,b.od,q);AE5(l,Bi(b),c);E(l);}else{throw $$e;}}}l=l;Dj(i.y3,l);Hi(l,i.ts,c,0,j,i.Cr,f,g,h,k);Qb(i,
l,d,e+i.ts.xT.y8);O_(a.s0,b);return l;}
let Qs=G();
let A_K=null;let BiA=()=>{BiA=Bk(Qs);A9K();}
let A9K=()=>{let b;b=new BD;Fp();A_K=b;}
function BD(){let a=this;D.call(a);a.p0=0.0;a.pZ=0.0;a.pY=0.0;a.pX=0.0;}
let ADu=null;let A2m=null;let A5M=null;let AWy=null;let AEk=null;let AFT=0.0;let AJB=null;let AVB=null;let AXz=null;let AUN=null;let A9B=null;let AR9=null;let A8H=null;let A1P=null;let A1z=null;let AS1=null;let AVM=null;let AUK=null;let A$8=null;let AX4=null;let A2V=null;let A$4=null;let A4O=null;let AVV=null;let AVc=null;let AT8=null;let AQM=null;let AI_=null;let AQx=null;let ANy=null;let A2r=null;let A1p=null;let AQp=null;let A6J=null;let A7q=null;let Fp=()=>{Fp=Bk(BD);AXf();}
let Eh=a=>{let b,c;b=a.p0;if(b<0.0)a.p0=0.0;else if(b>1.0)a.p0=1.0;c=a.pZ;if(c<0.0)a.pZ=0.0;else if(c>1.0)a.pZ=1.0;c=a.pY;if(c<0.0)a.pY=0.0;else if(c>1.0)a.pY=1.0;c=a.pX;if(c<0.0)a.pX=0.0;else if(c>1.0)a.pX=1.0;return a;}
let A0W=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b!==null){c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CN;d.oJ=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new CN;c.oJ=e;f=c;e.classObject=f;}}if(d===c){c=b;return J6(a)!=J6(c)?0:1;}}return 0;}
let AP7=a=>{let b,c,d;b=a.p0;c=31*(b===0.0?0:(isNaN(b)?1:0)?2143289344:H7(b))|0;b=a.pZ;c=31*(c+(b===0.0?0:(isNaN(b)?1:0)?2143289344:H7(b))|0)|0;d=a.pY;c=31*(c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:H7(d))|0)|0;d=a.pX;return c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:H7(d))|0;}
let AAK=a=>{return HA(((255.0*a.pX|0)<<24|(255.0*a.pY|0)<<16|(255.0*a.pZ|0)<<8|255.0*a.p0|0)&(-16777217));}
let J6=a=>{return (255.0*a.pX|0)<<24|(255.0*a.pY|0)<<16|(255.0*a.pZ|0)<<8|255.0*a.p0|0;}
let AL3=a=>{let b,c;b=BB((255.0*a.p0|0)<<24|(255.0*a.pZ|0)<<16|(255.0*a.pY|0)<<8|255.0*a.pX|0,4);while(b.oh.length<8){c=new L;c.og=H(16);F(c,c.od,C(45));F(c,c.od,b);b=Bi(c);}return b;}
let Xi=(b,c,d,e)=>{Fp();return HA(((255.0*e|0)<<24|(255.0*d|0)<<16|(255.0*c|0)<<8|255.0*b|0)&(-16777217));}
let C0=(b,c)=>{Fp();b.p0=((c&(-16777216))>>>24|0)/255.0;b.pZ=((c&16711680)>>>16|0)/255.0;b.pY=((c&65280)>>>8|0)/255.0;b.pX=(c&255)/255.0;}
let AXf=()=>{let b;b=new BD;Fp();b.p0=1.0;b.pZ=1.0;b.pY=1.0;b.pX=1.0;Eh(b);ADu=b;b=new BD;C0(b,(-1077952513));A2m=b;b=new BD;C0(b,2139062271);A5M=b;b=new BD;C0(b,1061109759);AWy=b;b=new BD;b.p0=0.0;b.pZ=0.0;b.pY=0.0;b.pX=1.0;Eh(b);AEk=b;AFT=AAK(ADu);b=new BD;b.p0=0.0;b.pZ=0.0;b.pY=0.0;b.pX=0.0;Eh(b);AJB=b;b=new BD;b.p0=0.0;b.pZ=0.0;b.pY=1.0;b.pX=1.0;Eh(b);AVB=b;b=new BD;b.p0=0.0;b.pZ=0.0;b.pY=0.5;b.pX=1.0;Eh(b);AXz=b;b=new BD;C0(b,1097458175);AUN=b;b=new BD;C0(b,1887473919);A9B=b;b=new BD;C0(b,(-2016482305));AR9
=b;b=new BD;b.p0=0.0;b.pZ=1.0;b.pY=1.0;b.pX=1.0;Eh(b);A8H=b;b=new BD;b.p0=0.0;b.pZ=0.5;b.pY=0.5;b.pX=1.0;Eh(b);A1P=b;b=new BD;C0(b,16711935);A1z=b;b=new BD;C0(b,2147418367);AS1=b;b=new BD;C0(b,852308735);AVM=b;b=new BD;C0(b,579543807);AUK=b;b=new BD;C0(b,1804477439);A$8=b;b=new BD;C0(b,(-65281));AX4=b;b=new BD;C0(b,(-2686721));A2V=b;b=new BD;C0(b,(-626712321));A$4=b;b=new BD;C0(b,(-5963521));A4O=b;b=new BD;C0(b,(-1958407169));AVV=b;b=new BD;C0(b,(-759919361));AVc=b;b=new BD;C0(b,(-1306385665));AT8=b;b=new BD;C0(b,
(-16776961));AQM=b;b=new BD;C0(b,(-13361921));AI_=b;b=new BD;C0(b,(-8433409));AQx=b;b=new BD;C0(b,(-92245249));ANy=b;b=new BD;C0(b,(-9849601));A2r=b;b=new BD;b.p0=1.0;b.pZ=0.0;b.pY=1.0;b.pX=1.0;Eh(b);A1p=b;b=new BD;C0(b,(-1608453889));AQp=b;b=new BD;C0(b,(-293409025));A6J=b;b=new BD;C0(b,(-1339006721));A7q=b;}
function J8(){let a=this;D.call(a);a.tH=0;a.Ez=0;a.Bw=null;a.A9=null;a.Bb=null;a.Ad=null;a.E4=0.0;}
let Mk=0.0;let Zy=(a,b,c,d)=>{if(b!==null&&!(!d&&a.Bb===b)){Cd.b4(a.tH,10242,b.yN);a.Bb=b;}if(c!==null&&!(!d&&a.Ad===c)){Cd.b4(a.tH,10243,c.yN);a.Ad=c;}}
let VD=(a,b,c,d)=>{if(b!==null&&!(!d&&a.Bw===b)){Cd.b4(a.tH,10241,b.sR);a.Bw=b;}if(c!==null&&!(!d&&a.A9===c)){Cd.b4(a.tH,10240,c.sR);a.A9=c;}}
let ADO=()=>{let b,c,d,e,f;b=Mk;if(b>0.0)return b;if(!(Bb.w8.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){Mk=1.0;return 1.0;}if(!D0){c=CU(16);d=c.data.length;e=new Jb;f=0+d|0;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=f;e.xF=0;e.zk=0;e.xe=c;}else{e=new C8;c=BX(64);e.ow=(-1);e.oD=64;e.oj=64;CP();e.o9=CR;e.pg=0;e.o4=c;e.ok=0;e.oj=64;e.pW=1;e.py=0;e.o9=DT();e=Ge(e);}CH(e,0);Ds(e,e.oD);Bq.b9(34047,e);b=PN(e,0);Mk=b;return b;}
let AH1=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;if(c===null)return;if(!c.vY)SA(c);AJe();if(AJ1===AT3){c=new Bc;c.oe=1;c.of=1;c.oi=C(46);E(c);}if(!c.vY){e=new Bc;e.oe=1;e.of=1;e.oi=C(47);E(e);}c.vY=0;f=c.xJ;c.xJ=null;g=1;h=c.wu;e=f.pE;if(e===null){IR();e=H_;}else e=Iy(e.p2);if(h===e)e=f;else{e=new Ih;h=f.pE;JY(e,h===null?f.qA:h.qq,h===null?f.qB:h.qo,c.wu);JV();h=P3;e.ze=h;i=e.pE;if(i===null){Gu(e);h=e.p_;IF();i=Cp(HS.oq);h.globalCompositeOperation=i;}else{j=h!==h?1:0;Ug(i.qi,j);}i=f.pE;k=i===null?f.qA:i.qq;l=i
===null?f.qB:i.qo;h=e.pE;if(h===null){Gu(f);K5(e,f.sU,0,0,k,l,0,0,k,l);}else{g=i.qi;m=h.qi;NR(g,m,0,0,k,l,0,0,k,l);}if(f.xd){e=new Bc;e.oe=1;e.of=1;e.oi=C(48);E(e);}JL();Jd(KO,f.y1);h=f.pE;if(h!==null)NK(h.qi);f.xd=1;g=1;}Cd.ch(3317,1);if(c.Hr)AGG(b,e,Lw(e),LJ(e));else{h=Cd;c=e.pE;if(c===null)n=6408;else s:{j=c.p2;switch(j){case 1:n=6406;break s;case 2:n=6410;break s;case 3:case 5:n=6407;break s;case 4:case 6:n=6408;break s;default:}c=new Bc;e=new L;e.og=H(16);DI(e,e.od,DJ(C(49)));N(e,e.od,j,10);e=Bi(e);c.oe
=1;c.of=1;c.oi=e;E(c);}o=c===null?e.qA:c.qq;p=c===null?e.qB:c.qo;if(c===null)k=6408;else t:{k=c.p2;switch(k){case 1:k=6406;break t;case 2:k=6410;break t;case 3:case 5:k=6407;break t;case 4:case 6:k=6408;break t;default:}c=new Bc;e=new L;F_(e);Nb(e,C(49));EX(e,k);Pd(c,Cx(e));E(c);}h.cn(b,d,n,o,p,0,k,QR(e),UB(e));}if(g)Ss(e);}
let AOg=()=>{Mk=0.0;}
function Md(){J8.call(this);this.vI=null;}
let ABi=null;let AAP=(a,b)=>{let c,d;a.vI=b;if(!b.vY)SA(b);Cd.cr(a.tH,a.Ez);AH1(3553,b,0);VD(a,a.Bw,a.A9,1);Zy(a,a.Bb,a.Ad,1);c=a.E4;d=ADO();if(d!==1.0){c=Z0(c,d);Bq.cx(3553,34046,c);a.E4=c;}Cd.cr(a.tH,0);}
let ARf=a=>{let b,c,d,e;b=a.vI;if(!(b instanceof Lm)){b=a;if(!b.$id$){c=Ff();b.$id$=c;}d=BB(a.$id$,4);b=new L;b.og=H(16);F(b,b.od,C(1));e=b.od;if(d===null)d=C(2);F(b,e,d);return Bi(b);}c=b;if(!c.$id$){d=Ff();c.$id$=d;}d=BB(b.$id$,4);b=new L;b.og=H(16);F(b,b.od,C(1));e=b.od;if(d===null)d=C(2);F(b,e,d);return Bi(b);}
let AGs=()=>{let b,c,d,e;b=new JA;c=J1(16);b.tF=0;d=Bs(Gt,c);e=d.data;b.qv=d;b.zO=0.75;b.uE=e.length*0.75|0;ABi=b;}
function CQ(){let a=this;D.call(a);a.ox=null;a.oo=0;a.pD=0;a.CL=null;}
let BcR=()=>{let a=new CQ();AKP(a);return a;}
let BdN=(a,b)=>{let c=new CQ();ALB(c,a,b);return c;}
let AKP=a=>{a.pD=1;a.ox=Bs(D,16);}
let ALB=(a,b,c)=>{a.pD=b;a.ox=Bs(D,c);}
let Dj=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=a.ox;d=c.data;e=a.oo;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CN;i.oJ=h;f=i;h.classObject=f;}}f=EQ(i);if(f===null){b=new Dv;b.oe=1;b.of=1;E(b);}if(f===BI(CO)){b=new V;b.oe=1;b.of=1;E(b);}if(g<0){b=new D_;b.oe=1;b.of=1;E(b);}f=EO(f.oJ,g);j=f.data;k=a.oo;l=j.length;if(k<l)l=k;Fh(c,0,f,0,l);a.ox=f;}f=f.data;g=a.oo;a.oo=g+1|0;f[g]=b;}
let XQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=b.ox;d=b.oo;e=a.ox;f=e.data;g=a.oo;h=g+d|0;if(h<=f.length)i=e;else{j=8;if(j<=h)j=h;g=g*1.75|0;if(j>g)g=j;i=e.constructor;if(i===null)b=null;else{b=i.classObject;if(b===null){b=new CN;b.oJ=i;k=b;i.classObject=k;}}b=EQ(b);if(b===null){b=new Dv;b.oe=1;b.of=1;Bt(b);E(b);}if(b===BI(CO)){b=new V;b.oe=1;b.of=1;Bt(b);E(b);}if(g<0){b=new D_;b.oe=1;b.of=1;Bt(b);E(b);}i=EO(b.oJ,g);b=i.data;j=a.oo;l=b.length;if(j<l)l=j;Fh(e,0,i,0,l);a.ox=i;}Fh(c,0,i,a.oo,d);a.oo=h;}
let VM=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if((c+d|0)>b.oo){e=new V;f=new L;f.og=H(16);F(f,f.od,C(50));N(f,f.od,c,10);F(f,f.od,C(51));N(f,f.od,d,10);F(f,f.od,C(52));c=b.oo;N(f,f.od,c,10);b=Bi(f);e.oe=1;e.of=1;e.oi=b;E(e);}g=b.ox;h=a.ox;i=h.data;j=a.oo;k=j+d|0;if(k<=i.length)b=h;else{l=8;if(l<=k)l=k;j=j*1.75|0;if(l>j)j=l;e=h.constructor;if(e===null)b=null;else{b=e.classObject;if(b===null){b=new CN;b.oJ=e;f=b;e.classObject=f;}}b=EQ(b);if(b===null){b=new Dv;b.oe=1;b.of=1;Bt(b);E(b);}if(b===BI(CO)){b=new V;b.oe=1;b.of
=1;Bt(b);E(b);}if(j<0){b=new D_;b.oe=1;b.of=1;Bt(b);E(b);}b=EO(b.oJ,j);e=b.data;l=a.oo;m=e.length;if(l<m)m=l;Fh(h,0,b,0,m);a.ox=b;}Fh(g,c,b,a.oo,d);a.oo=k;}
let AHS=(a,b)=>{let c,d;if(b<a.oo)return a.ox.data[b];c=new O;d=new L;d.og=H(16);F(d,d.od,C(37));N(d,d.od,b,10);F(d,d.od,C(38));b=a.oo;N(d,d.od,b,10);d=Bi(d);c.oe=1;c.of=1;c.oi=d;E(c);}
let WS=(a,b,c)=>{let d,e,f,g;a:{d=a.ox;if(!(!c&&b!==null)){e=0;f=a.oo;while(e<f){if(d.data[e]===b){Qt(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.oo;while(true){if(e>=f)break a;g=d.data[e];if(b===g)c=1;else if(!(g instanceof P))c=0;else{g=g;c=b.oh!==g.oh?0:1;}if(c){Qt(a,e);return 1;}e=e+1|0;}}}return 0;}
let Qt=(a,b)=>{let c,d,e,f,g;c=a.oo;if(b<c){d=a.ox;e=d.data;f=e[b];c=c-1|0;a.oo=c;if(!a.pD)e[b]=e[c];else CY(d,b+1|0,d,b,c-b|0);e[a.oo]=null;return f;}f=new O;g=new L;g.og=H(16);F(g,g.od,C(37));N(g,g.od,b,10);F(g,g.od,C(38));b=a.oo;N(g,g.od,b,10);g=Bi(g);f.oe=1;f.of=1;f.oi=g;E(f);}
let WY=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.oo;if(c>=d){e=new O;f=new L;f.og=H(16);F(f,f.od,C(53));N(f,f.od,c,10);F(f,f.od,C(38));b=a.oo;N(f,f.od,b,10);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}if(b>c){e=new O;f=new L;f.og=H(16);F(f,f.od,C(54));N(f,f.od,b,10);F(f,f.od,C(55));N(f,f.od,c,10);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}g=a.ox;h=(c-b|0)+1|0;i=d-h|0;if(a.pD){j=b+h|0;CY(g,j,g,b,d-j|0);}else{j=c+1|0;if(i>j)j=i;CY(g,j,g,b,d-j|0);}j=i;while(j<d){g.data[j]=null;j=j+1|0;}a.oo=i;}
let AB0=a=>{let b,c,d,e;b=a.oo;if(b){c=b-1|0;a.oo=c;d=a.ox.data;e=d[c];d[c]=null;return e;}e=new Cb;e.oe=1;e.of=1;e.oi=C(33);E(e);}
let AA6=a=>{let b,c;b=a.oo;if(b)return a.ox.data[b-1|0];c=new Cb;c.oe=1;c.of=1;c.oi=C(33);E(c);}
let ADo=a=>{let b,c,d,e,f,g;b=a.ox;c=0;d=a.oo;e=null;if(c>d){e=new V;e.oe=1;e.of=1;E(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.oo=0;}
let AAA=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new V;d=new L;d.og=H(16);F(d,d.od,C(56));N(d,d.od,b,10);d=Bi(d);c.oe=1;c.of=1;c.oi=d;E(c);}e=a.oo;f=e+b|0;g=a.ox;if(f>g.data.length){if(8>f)f=8;b=e*1.75|0;if(f>b)b=f;d=g.constructor;if(d===null)c=null;else{c=d.classObject;if(c===null){c=new CN;c.oJ=d;h=c;d.classObject=h;}}c=EQ(c);if(c===null){c=new Dv;c.oe=1;c.of=1;E(c);}if(c===BI(CO)){c=new V;c.oe=1;c.of=1;E(c);}if(b<0){c=new D_;c.oe=1;c.of=1;E(c);}d=EO(c.oJ,b);c=d.data;f=a.oo;i=c.length;if(f<i)i=f;Fh(g,0,d,0,i);a.ox
=d;}return a.ox;}
let PI=a=>{let b;if(AJc){b=new IU;b.rJ=1;b.xD=a;b.B2=1;return b;}if(a.CL===null){b=new Sb;b.Db=a;b.EZ=1;a.CL=b;}return AEb(a.CL);}
let Om=(a,b)=>{let c,d,e,f;if(b>=0){c=a.oo;if(c<=b)return;d=b;while(d<c){a.ox.data[d]=null;d=d+1|0;}a.oo=b;return;}e=new V;f=new L;f.og=H(16);F(f,f.od,C(57));N(f,f.od,b,10);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}
let AYM=a=>{let b,c,d,e,f,g,h;if(a.pD){b=a.ox;c=1;d=0;e=a.oo;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.cF()|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=Ff();g.$id$=h;}return a.$id$;}
let APK=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.pD)return 0;if(!(b instanceof CQ))return 0;c=b;if(!c.pD)return 0;d=a.oo;if(d!=c.oo)return 0;e=a.ox;f=c.ox;g=0;c:{while(g<d){e:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cG(j))break e;else break c;}if(j!==null)break c;}g=g+1|0;}return 1;}return 0;}
let AUQ=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.oo)return C(58);b=a.ox;c=new Kx;d=H(32);e=d.data;c.pj=d;f=c.o1;if(f==e.length)DQ(c,f+1|0);b=b.data;e=c.pj.data;g=c.o1;c.o1=g+1|0;e[g]=91;h=b[0];if(h===null)KR(c);else{h=h.l();if(h===null)KR(c);else{i=h.oh.length;j=c.o1+i|0;if(j>c.pj.data.length)DQ(c,j);H5(h,0,i,c.pj,c.o1);c.o1=j;}}i=1;while(i<a.oo){g=C(59).oh.length;k=c.o1+g|0;if(k>c.pj.data.length)DQ(c,k);H5(C(59),0,g,c.pj,c.o1);c.o1=k;h=b[i];if(h===null)KR(c);else{h=h.l();if(h===null)KR(c);else{k=h.oh.length;j=c.o1
+k|0;if(j>c.pj.data.length)DQ(c,j);H5(h,0,k,c.pj,c.o1);c.o1=j;}}i=i+1|0;}f=c.o1;if(f==c.pj.data.length)DQ(c,f+1|0);u:{b=c.pj;e=b.data;g=c.o1;f=g+1|0;c.o1=f;e[g]=93;if(!f)c=C(43);else{c=new P;U();g=e.length;if(f<0)break u;if(f>(g-0|0))break u;c.oh=R(b.data,0,f);}return c;}c=new O;c.oe=1;c.of=1;E(c);}
function J7(){let a=this;D.call(a);a.vX=0;a.sI=null;a.qg=null;a.Hf=0.0;a.DZ=0;a.zE=0;a.yx=0;}
let A1f=null;let F7=(a,b)=>{let c=new J7();AFo(c,a,b);return c;}
let AFo=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.Hf=c;d=NG(b,c);a.DZ=d*c|0;b=d-1|0;a.yx=b;a.zE=Ed(I(b));a.sI=Bs(D,d);a.qg=Bs(D,d);return;}e=new V;f=new L;f.og=H(16);F(f,f.od,C(60));ER(f,f.od,c);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}
let Dl=(a,b)=>{let c,d,e;if(b===null){c=new V;c.oe=1;c.of=1;c.oi=C(61);E(c);}d=a.sI;e=Z(Q(W(I(b.cF()),B(2135587861, 2654435769)),a.zE));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cG(b))break;e=(e+1|0)&a.yx;}return e;}
let B3=(a,b,c)=>{let d,e,f;d=Dl(a,b);if(d>=0){e=a.qg.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.sI.data;e[d]=b;a.qg.data[d]=c;d=a.vX+1|0;a.vX=d;if(d>=a.DZ)ACO(a,e.length<<1);return null;}
let ACp=(a,b)=>{let c;c=Dl(a,b);return c<0?null:a.qg.data[c];}
let YE=(a,b)=>{let c,d,e,f,g,h,i,j;c=Dl(a,b);if(c<0)return null;d=a.sI;e=a.qg.data;f=e[c];g=a.yx;h=(c+1|0)&g;while(true){i=d.data;b=i[h];if(b===null)break;j=Z(Q(W(I(b.cF()),B(2135587861, 2654435769)),a.zE));if(((h-j|0)&g)>((c-j|0)&g)){i[c]=b;e[c]=e[h];c=h;}h=(h+1|0)&g;}i[c]=null;e[c]=null;a.vX=a.vX-1|0;return f;}
let ACO=(a,b)=>{let c,d,e,f,g,h,i,j;b:{c=a.sI.data.length;a.DZ=b*a.Hf|0;d=b-1|0;a.yx=d;a.zE=Ed(I(d));e=a.sI;f=a.qg;a.sI=Bs(D,b);a.qg=Bs(D,b);if(a.vX>0){d=0;while(true){if(d>=c)break b;g=e.data[d];if(g!==null){h=f.data[d];i=a.sI;b=Z(Q(W(I(g.cF()),B(2135587861, 2654435769)),a.zE));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.yx;}j[b]=g;a.qg.data[b]=h;}d=d+1|0;}}}}
let AME=()=>{A1f=new D;}
let XO=G(J7);
let AH$=G();
function EI(){let a=this;D.call(a);a.sd=0;a.qs=0;a.qW=0;a.qU=0;a.sJ=0;a.qL=null;a.so=0;a.t8=0;}
let ARk=(a,b)=>{if(!(b instanceof EI))return 0;return XH(a,b);}
let XH=(a,b)=>{let c,d,e;b:{if(b!==null&&a.sd==b.sd&&a.qs==b.qs&&a.qU==b.qU&&a.qW==b.qW){c=a.qL;d=b.qL;if(c===d)e=1;else if(!(d instanceof P))e=0;else{d=d;e=c.oh!==d.oh?0:1;}if(e&&a.so==b.so){e=1;break b;}}e=0;}return e;}
let A0A=a=>{let b,c,d;b:{b=541*((541*((a.t8<<8)+(a.so&255)|0)|0)+a.qs|0)|0;c=a.qL;if(!c.pz){d=0;while(true){if(d>=c.oh.length)break b;c.pz=(31*c.pz|0)+c.oh.charCodeAt(d)|0;d=d+1|0;}}}return b+c.pz|0;}
let ABa=G();
let AES=G();
let AFL=G();
let AFg=G();
let PG=G();
let Bc8=null;let BiB=()=>{BiB=Bk(PG);APm();}
let APm=()=>{let b,c,d;b=new Lc;Bc2();c=new Bf;BU();b.FU=c;d=new Bf;b.F3=d;b.FK=new Bf;b.Hw=new Bf;c.os=0.0;c.ou=0.0;c.ot=0.0;d.os=0.0;d.ou=0.0;d.ot=0.0;AF3(b,c,d);Bc8=b;}
let VX=G();
let AFq=G();
let AE_=G();
let YR=G();
let AAm=G();
let XF=G();
let AAQ=G();
let Ye=G();
let ACv=G();
let ACQ=G();
let Hb=G(BW);
let BgY=null;let Bgy=null;let Beq=null;let Bbo=()=>{Bbo=Bk(Hb);A2p();}
let A2p=()=>{let b,c;b=new Hb;Bbo();b.oq=C(62);b.on=0;BgY=b;c=new Hb;c.oq=C(63);c.on=1;Bgy=c;Beq=S(Hb,[b,c]);}
let YX=G();
let Ul=G(0);
let Ep=G();
let V6=G(Ep);
let V5=G(Ep);
let Yp=G(Ep);
let ADg=G(Ep);
let ZL=G(Ep);
let LE=G(Ep);
let ADb=G(LE);
let I5=G(0);
let ADz=G();
let Gh=G(0);
let ZE=G();
let AAM=G();
let WE=G();
let FK=G();
let Zq=G(FK);
let Ic=G(FK);
let EB=G(Ic);
let Bax=null;let BiC=()=>{BiC=Bk(EB);AYt();}
let AYt=()=>{let b;b=new Bf;BU();Bax=b;}
let AGi=G();
let AHa=G(EB);
let AEO=G(EB);
let Rl=G(FK);
let A2R=null;let ANf=()=>{A2R=CU(3);}
let M1=G(FK);
let AB2=G(M1);
let AC_=G(EB);
let HW=G(Ic);
let YH=G(HW);
let AEL=G(EB);
let AFi=G(EB);
let YG=G(HW);
let FW=G(BW);
let Be0=null;let Bfr=null;let Bay=null;let A__=null;let Ben=()=>{Ben=Bk(FW);ARD();}
let ARD=()=>{let b,c,d;b=new FW;Ben();b.oq=C(64);b.on=0;Be0=b;c=new FW;c.oq=C(65);c.on=1;Bfr=c;d=new FW;d.oq=C(66);d.on=2;Bay=d;A__=S(FW,[b,c,d]);}
let Hc=G();
let L6=G(Hc);
let ABz=G(L6);
let F0=G(BW);
let Bgw=null;let BcM=null;let A_f=null;let BgI=null;let Ba$=()=>{Ba$=Bk(F0);A2_();}
let A2_=()=>{let b,c,d;b=new F0;Ba$();b.oq=C(67);b.on=0;Bgw=b;c=new F0;c.oq=C(68);c.on=1;BcM=c;d=new F0;d.oq=C(69);d.on=2;A_f=d;BgI=S(F0,[b,c,d]);}
let DC=G(Hc);
let Je=G(DC);
let ACH=G();
let FL=G(DC);
let Bgb=null;let Bga=null;let Bgc=null;let BgA=null;let BiD=()=>{BiD=Bk(FL);A3V();}
let A3V=()=>{let b;b=new Bf;BU();Bgb=b;Bga=new Bf;Bgc=new Bf;b=new Fw;QJ();b.uZ=0.0;b.uW=0.0;b.uX=0.0;b.uY=1.0;BgA=b;}
let Fz=G(FL);
let GT=G(Fz);
let ADy=G(GT);
let I8=G(DC);
let ABm=G(I8);
let AG$=G(DC);
let GZ=G(DC);
let V0=G(GZ);
let H3=G(DC);
let ADt=G(Fz);
let XV=G(Fz);
let Li=G(DC);
let AF6=G(Li);
let ACm=G(GZ);
let AER=G(GT);
let Zp=G(DC);
let AFm=G(GZ);
let AF9=G(DC);
let ZV=G(FL);
let AEd=G(D6);
let Wx=G(D6);
let WC=G(Fz);
let Zs=G(H3);
let AHV=G(Je);
let Y$=G(Je);
let AGr=G(H3);
let AE8=G(GT);
let AH7=G(I8);
let F1=G(Hc);
let YI=G(F1);
let G4=G();
let ZD=G(G4);
let AGJ=G(F1);
let AG9=G(F1);
let AAB=G(G4);
let W_=G(F1);
let AAn=G(G4);
let MB=G(0);
let RJ=G(0);
function CN(){let a=this;D.call(a);a.oV=null;a.oJ=null;a.wG=null;}
let A8a=0;let BiE=a=>{let b=new CN();A8E(b,a);return b;}
let A8E=(a,b)=>{let c;a.oJ=b;c=a;b.classObject=c;}
let BbF=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new CN;c.oJ=b;d=c;b.classObject=d;}return c;}
let AQc=a=>{let b,c,d;b=a;if(!b.$id$){c=Ff();b.$id$=c;}d=a.$id$;b=new L;b.og=H(16);F(b,b.od,C(70));N(b,b.od,d,10);return Bi(b);}
let AE1=a=>{if(a.oV===null)a.oV=Bv(a.oJ.$meta.name);return a.oV;}
let EQ=a=>{let b,c,d;b=a.oJ.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new CN;c.oJ=b;d=c;b.classObject=d;}}return c;}
let A3F=()=>{E4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){Qh(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:CO,callable:function(obj,args){AWf();VZ();return null;}}];DY.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){ADL(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[DY],returnType:CO,callable
:function(obj,args){RW(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){Ym(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:P,callable:function(obj,args){return Ot(obj);}}];DH.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){Vc(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FC,EU],returnType:
CO,callable:function(obj,args){OF(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FC,EU,BD,Fu,Es,Kr],returnType:CO,callable:function(obj,args){QE(obj,args[0],args[1],args[2],HO(args[3]),D3(args[4]),Kq(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FC,EU,Es,Es,BD,Fu,Es,Kr,P],returnType:CO,callable:function(obj,args){UC(obj,args[0],args[1],D3(args[2]),D3(args[3]),args[4],HO(args[5]),D3(args[6]),Kq(args[7]),args[8]);return null;}},
{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[FC,EU],returnType:CO,callable:function(obj,args){BfX(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[FC,EU,BD,Fu,Es,Kr],returnType:CO,callable:function(obj,args){Be8(obj,args[0],args[1],args[2],HO(args[3]),D3(args[4]),Kq(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[FC,EU,Es,Es,BD,Fu,Es,Kr,P],returnType:CO,callable:function(obj,args){Hi(obj,args[0],args[1],D3(args[2]),
D3(args[3]),args[4],HO(args[5]),D3(args[6]),Kq(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[GI],returnType:CO,callable:function(obj,args){SR(obj,args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[Fu,Es],returnType:CO,callable:function(obj,args){TN(obj,HO(args[0]),D3(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[GI,DY,Fu,P],returnType:CO,callable:function(obj,args){Oy(obj,args[0],args[1],
HO(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[GI,DY,Es],returnType:DY,callable:function(obj,args){return QT(obj,args[0],args[1],D3(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[GI,DY],returnType:CO,callable:function(obj,args){Mb(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[KZ,GI],returnType:Fu,callable:function(obj,args){return Lk(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers
:0,accessLevel:1,parameterTypes:[CQ,GI],returnType:Fu,callable:function(obj,args){return U6(obj,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[EU,Es,Es],returnType:Es,callable:function(obj,args){return Qr(obj,args[0],D3(args[1]),D3(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){U0(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:P,callable:function(obj,args){return Zm(obj
);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:CO,callable:function(obj,args){E8();AC4();return null;}}];}
let NY=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.oJ.$meta.primitive?1:0)&&!(a.oJ.$meta.item===null?0:1)){if(a.wG===null){if(!A8a){A8a=1;A3F();}b=a.oJ.$meta.methods;a.wG=Bs(I4,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof HM())?e:e.oW;g=Bv(f.name);if(g===C(71))h=1;else if(!(C(71) instanceof P))h=0;else{e=C(71);h=g.oh!==e.oh?0:1;}if(h){g=f.parameterTypes;i=Bs(CN,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new CN;e.oJ=l;m
=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.wG.data;h=c+1|0;e=new I4;g=Bv(f.name);k=f.modifiers;n=f.accessLevel;f=Em(f.callable,"call");e.rw=a;e.Jj=g;e.yc=k;e.BM=n;e.t1=i;e.DI=f;j[c]=e;c=h;}d=d+1|0;}i=a.wG;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new CN;e.oJ=b;f=e;b.classObject=f;}}b=EQ(e);if(b===null){e=new Dv;e.oe=1;e.of=1;E(e);}if(b===BI(CO)){e=new V;e.oe=1;e.of=1;E(e);}if(c<0){e=new D_;e.oe=1;e.of=1;E(e);}i=i.data;f=EO(b.oJ,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=i[c];c
=c+1|0;}a.wG=f;}return a.wG.t();}return Bs(I4,0);}
let AA0=a=>{let b,c,d,e,f,g,h,i,j,k;b=(NY(a)).data;c=b.length;d=Bs(I4,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Pb(h.yc,h.BM)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=B9(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new CN;h.oJ=j;k=h;j.classObject=k;}}j=EQ(h);if(j===null){h=new Dv;h.oe=1;h.of=1;E(h);}if(j===BI(CO)){h=new V;h.oe=1;h.of=1;E(h);}if(f<0){h=new D_;h.oe=1;h.of=1;E(h);}k=EO(j.oJ,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;}
let AG2=(a,b)=>{let c,d,e,f;c=(NY(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new IX;f.oe=1;f.of=1;E(f);}f=c[e];if(AG1(f.t1.t(),b))break;e=e+1|0;}return f;}
let AGZ=(a,b)=>{let c,d,e,f,g;c=(NY(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new IX;f.oe=1;f.of=1;E(f);}f=c[e];g=!(Pb(f.yc,f.BM)&1)?0:1;if(g&&AG1(f.t1.t(),b))break;e=e+1|0;}return f;}
let ACU=G();
let ASA=b=>{let c,d,e,f,g;if(b===null)return null;c=BX(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof HM())?g:g.oW;e=e+1|0;}return c;}
let CK=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();}
let Em=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;}
let ACB=G();
let AIW=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;}
let T2=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(T2(d[e],c))return 1;e=e+1|0;}return 0;}
let GL=b=>{setTimeout(()=>{Bb2(ACj)(b);},0);}
let ACj=b=>{b.cV();}
let QU=(b,c)=>{setTimeout(()=>{ACj(b);},c);}
let APn=()=>{return [];}
function Eb(){let a=this;D.call(a);a.oi=null;a.qd=null;a.oe=0;a.of=0;a.Io=null;}
let BiF=()=>{let a=new Eb();Bl(a);return a;}
let BiG=a=>{let b=new Eb();KY(b,a);return b;}
let BiH=(a,b)=>{let c=new Eb();AE5(c,a,b);return c;}
let Bl=a=>{a.oe=1;a.of=1;}
let KY=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
let AE5=(a,b,c)=>{a.oe=1;a.of=1;a.oi=b;a.qd=c;}
let Bt=a=>{return a;}
let ATA=a=>{return a.oi;}
let ANN=a=>{return a.cW();}
let A7X=a=>{let b;b=a.qd;if(b===a)b=null;return b;}
let A2w=a=>{let b,c;if(Fc===null){b=new Do;b.p$=Km;c=new L;c.og=H(16);b.o_=c;b.p7=H(32);b.qf=0;Dn();b.qa=Du;Fc=b;}J5(a,Fc);}
let J5=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CN;d.oJ=c;e=d;c.classObject=e;}}if(d.oV===null)d.oV=Bv(d.oJ.$meta.name);e=d.oV;c=b.o_;F(c,c.od,e);Dy(b);f=a.cW();if(f!==null){c=new L;c.og=H(16);F(c,c.od,C(72));F(c,c.od,f);e=Bi(c);c=b.o_;F(c,c.od,e);Dy(b);}o:{g=b.p7;g.data[0]=10;Sa(b,g,0,1);g=a.Io;if(g!==null){g=g.data;h=g.length;i=0;while(true){if(i>=h)break o;d=g[i];c=b.o_;F(c,c.od,C(73));Dy(b);e=b.o_;F(e,e.od,d===null?C(2):d.l());j=e.od;Bo(e,j,j
+1|0);e.og.data[j]=10;Dy(b);i=i+1|0;}}}c=a.qd;if(c!==null&&c!==a){e=b.o_;F(e,e.od,C(74));Dy(b);J5(a.qd,b);}}
let Da=G(Eb);
let BiI=()=>{let a=new Da();BZ(a);return a;}
let BZ=a=>{a.oe=1;a.of=1;}
let B0=G(Da);
let BiJ=()=>{let a=new B0();K$(a);return a;}
let Bif=a=>{let b=new B0();Vb(b,a);return b;}
let K$=a=>{a.oe=1;a.of=1;}
let Vb=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
let AEK=G(B0);
let EU=G(0);
function P(){D.call(this);this.pz=0;}
let BcH=null;let A43=null;let Bc6=null;let U=()=>{U=Bk(P);AU4();}
let BiK=a=>{let b=new P();AB5(b,a);return b;}
let Zu=a=>{let b=new P();XB(b,a);return b;}
let OT=(a,b,c)=>{let d=new P();Vq(d,a,b,c);return d;}
let AB5=(a,b)=>{U();a.oh=R(b.data,0,b.data.length);}
let XB=(a,b)=>{a.oh=b;}
let Vq=(a,b,c,d)=>{let e,f;U();e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.oh=R(b.data,c,d);return;}f=new O;f.oe=1;f.of=1;E(f);}
let Dz=(a,b)=>{let c;if(b>=0&&b<a.oh.length)return a.oh.charCodeAt(b);c=new Ba;c.oe=1;c.of=1;E(c);}
let FU=a=>{return a.oh.length;}
let H5=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.oh.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){BdI(a.oh,b,d.data,e,g);return;}}h=new O;h.oe=1;h.of=1;E(h);}
let KM=(a,b,c)=>{let d,e,f;if((c+b.oh.length|0)>a.oh.length)return 0;d=0;a:{d:{while(d<b.oh.length){if(d<0)break a;if(d>=b.oh.length)break a;e=b.oh.charCodeAt(d);f=c+1|0;if(c<0)break d;if(c>=a.oh.length)break d;if(e!=a.oh.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let Gq=(a,b)=>{if(a===b)return 1;return KM(a,b,0);}
let SX=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.oh.length>a.oh.length)return 0;c=0;d=a.oh.length-b.oh.length|0;d:{k:{while(d<a.oh.length){if(d<0)break d;if(d>=a.oh.length)break d;e=a.oh.charCodeAt(d);f=c+1|0;if(c<0)break k;if(c>=b.oh.length)break k;if(e!=b.oh.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let E$=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.oh.length)return (-1);if(a.oh.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.oh.length-1|0))return (-1);if(a.oh.charCodeAt(c)==e&&a.oh.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;}
let ADl=(a,b)=>{return E$(a,b,0);}
let GX=(a,b,c)=>{let d,e,f,g;d=a.oh.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.oh.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.oh.charCodeAt(d)==g){b=d-1|0;if(a.oh.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;}
let MT=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.oh.length-b.oh.length|0;d:{k:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.oh.length)break c;f=c+e|0;if(f<0)break d;if(f>=a.oh.length)break d;g=a.oh.charCodeAt(f);if(e<0)break k;if(e>=b.oh.length)break k;if(g!=b.oh.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let AF8=(a,b)=>{return MT(a,b,0);}
let Pc=(a,b,c)=>{let d,e,f;d=a.oh.length-b.oh.length|0;if(c<d)d=c;d:{k:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.oh.length)break c;f=d+e|0;if(f<0)break d;if(f>=a.oh.length)break d;f=a.oh.charCodeAt(f);if(e<0)break k;if(e>=b.oh.length)break k;if(f!=b.oh.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let Cv=(a,b,c)=>{let d,e,f;d=a.oh.length;e=B9(b,c);if(!e)return A43;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return Zu(a.oh.substring(b,c));f=new Ba;f.oe=1;f.of=1;E(f);}
let Jy=(a,b)=>{return Cv(a,b,a.oh.length);}
let Pg=(a,b,c)=>{return Cv(a,b,c);}
let DP=(a,b)=>{let c,d,e,f;c=a.oh.length-b.oh.length|0;d=0;b:{a:{while(d<=c){e=0;while(true){if(e>=b.oh.length)return 1;f=d+e|0;if(f<0)break b;if(f>=a.oh.length)break b;f=a.oh.charCodeAt(f);if(e<0)break a;if(e>=b.oh.length)break a;if(f!=b.oh.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let NB=(a,b,c)=>{let d,e,f,g,h,i;d=new L;d.og=H(16);e=a.oh.length-b.oh.length|0;f=0;a:{d:{k:while(true){if(f>e){b=Cv(a,f,a.oh.length);g=d.od;if(b===null)b=C(2);F(d,g,b);return Bi(d);}g=0;c:{while(g<b.oh.length){h=f+g|0;if(h<0)break d;if(h>=a.oh.length)break d;i=a.oh.charCodeAt(h);if(g<0)break k;if(g>=b.oh.length)break k;if(i!=b.oh.charCodeAt(g)){if(f<0)break a;if(f>=a.oh.length)break a;i=a.oh.charCodeAt(f);h=d.od;Bo(d,h,h+1|0);d.og.data[h]=i;break c;}g=g+1|0;}F(d,d.od,c===null?C(2):c);f=f+(b.oh.length-1|0)|
0;}f=f+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let AEZ=a=>{let b,c,d;b=0;c=a.oh.length-1|0;b:{while(true){if(b>c)break b;if(b<0)break;if(b>=a.oh.length)break;if(a.oh.charCodeAt(b)>32)break b;b=b+1|0;}d=new Ba;d.oe=1;d.of=1;E(d);}c:{while(b<=c){if(c<0)break c;if(c>=a.oh.length)break c;if(a.oh.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cv(a,b,c+1|0);}d=new Ba;d.oe=1;d.of=1;E(d);}
let DJ=a=>{return a;}
let AC3=b=>{U();return b===null?C(2):b.l();}
let AFR=b=>{let c;U();c=new L;c.og=H(16);N(c,c.od,b,10);return Bi(c);}
let Gg=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof P))return 0;c=b;return a.oh!==c.oh?0:1;}
let Y6=(a,b)=>{let c,$$je;b:{try{c=AFS(a,AI6(DJ(b)));}catch($$e){$$je=BH($$e);if($$je instanceof Nc){break b;}else if($$je instanceof Ir){break b;}else{throw $$e;}}return c;}b=new MX;b.oe=1;b.of=1;E(b);}
let AFS=(a,b)=>{let c,d,e,f,g,h,$$je;c=A_I(a.oh);d=c.data.length;e=new Jx;f=0+d|0;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=f;e.v5=0;e.xH=0;e.uL=c;b:{try{g=b.c6();EN();e=SU(Rk(P5(g,Fx),Fx),e);break b;}catch($$e){$$je=BH($$e);if($$je instanceof GQ){e=$$je;}else{throw $$e;}}g=new NS;g.oe=1;g.of=1;g.oi=C(75);g.qd=e;E(g);}h=e.ok;if(!h&&e.oj==e.oD)return e.o4;c=BX(e.oj-h|0);SF(e,c,0,c.data.length);return c;}
let A53=a=>{let b;b:{if(!a.pz){b=0;while(true){if(b>=a.oh.length)break b;a.pz=(31*a.pz|0)+a.oh.charCodeAt(b)|0;b=b+1|0;}}}return a.pz;}
let AE7=(a,b)=>{return Ka(Hz(b,0),a,0);}
let Q7=(a,b,c)=>{return Ka(Hz(b,0),a,c);}
let Xc=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;b=Pi(Hz(b,0),a);d=new Lh;d.og=H(16);b.wx=0;e=b.tX.oh.length;b.BD=e;f=b.qY;g=b.tX;h=b.wx;f.q3=0;f.xz=2;i=f.pJ.data;j=0;k=i.length;if(j>k){b=new V;Bl(b);E(b);}while(j<k){l=j+1|0;i[j]=(-1);j=l;}i=f.px.data;m=0;j=i.length;if(m>j){b=new V;Bl(b);E(b);}while(m<j){k=m+1|0;i[m]=(-1);m=k;}if(g!==null)f.sD=g;if(h>=0){f.qJ=h;f.o2=e;}f.sf=f.qJ;b.BI=0;b.CS=null;f.wS=(-1);while(true){if(!H9(b)){c=b.tX;b=Cv(c,b.BI,c.oh.length);l=b.oh.length;TF(d,d.od,b,0,l);return Bi(d);}b.C3=AGf(b,
c);f=b.tX;j=b.BI;g=b.qY;if(!g.q3){b=new Cb;BZ(b);E(b);}if(0>=g.r$){b=new O;c=new L;F_(c);Lg(c,0);c=Bi(c);b.oe=1;b.of=1;b.oi=c;E(b);}f=Cv(f,j,g.pJ.data[0]);h=f.oh.length;TF(d,d.od,f,0,h);f=b.C3;F(d,d.od,f);f=b.qY;if(!f.q3)break;if(0>=f.r$){b=new O;c=new L;F_(c);Lg(c,0);c=Bi(c);b.oe=1;b.of=1;b.oi=c;E(b);}b.BI=f.pJ.data[1];}b=new Cb;BZ(b);E(b);}
let AU4=()=>{let b;BcH=H(0);b=new P;U();b.oh="";A43=b;Bc6=new TM;}
let G2=G(Eb);
let Jl=G(G2);
let AD7=G(Jl);
let E3=G();
function FS(){E3.call(this);this.rG=0;}
let AXF=null;let Gr=null;let SH=(b,c)=>{let d;if(!(c>=2&&c<=36))c=10;d=new Bx;d.og=H(20);return (N(d,d.od,b,c)).l();}
let Le=(b,c)=>{if(b!==null)return Q$(b,0,b.oh.length,c);b=new CV;b.oe=1;b.of=1;b.oi=C(76);E(b);}
let Q$=(b,c,d,e)=>{let f,g,h,i,j,k,l,m;if(c==d){b=new CV;b.oe=1;b.of=1;b.oi=C(77);E(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.oh.length){c:{switch(b.oh.charCodeAt(c)){case 43:g=c+1|0;break c;case 45:f=1;g=c+1|0;break c;default:}g=c;}h=0;if(g==d){b=new CV;b.oe=1;b.of=1;E(b);}g:{while(g<d){i=g+1|0;if(g<0)break g;if(g>=b.oh.length)break g;j=Kg(b.oh.charCodeAt(g));if(j<0){k=new CV;b=Cv(b,c,d);if(b===null)b=C(2);l=new L;l.og=H(16);F(l,l.od,C(78));F(l,l.od,b);b=Bi(l);k.oe=1;k.of=1;k.oi=b;E(k);}if(j>=e){k=new CV;m=Cv(b,
c,d);if(m===null)m=C(2);b=new L;b.og=H(16);F(b,b.od,C(79));N(b,b.od,e,10);F(b,b.od,C(72));F(b,b.od,m);b=Bi(b);k.oe=1;k.of=1;k.oi=b;E(k);}h=C7(e,h)+j|0;if(h<0){if(i==d&&h==(-2147483648)&&f)return (-2147483648);k=new CV;m=Cv(b,c,d);if(m===null)m=C(2);b=new L;b.og=H(16);EA(b,b.od,C(80));CT(b,m);LF(k,Cx(b));E(k);}g=i;}if(f)h= -h|0;return h;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new CV;k=new L;k.og=H(16);F(k,k.od,C(81));N(k,k.od,e,10);k=Bi(k);b.oe=1;b.of=1;b.oi=k;E(b);}
let Dd=b=>{if(b!==null)return Q$(b,0,b.oh.length,10);b=new CV;b.oe=1;b.of=1;b.oi=C(76);E(b);}
let Cc=b=>{let c;if(b>=(-128)&&b<=127){Gj();return Gr.data[b+128|0];}c=new FS;c.rG=b;return c;}
let Gj=()=>{let b,c,d,e,f;b:{if(Gr===null){b=Bs(FS,256);c=b.data;Gr=b;d=0;e=c.length;while(true){if(d>=e)break b;f=new FS;f.rG=d-128|0;c[d]=f;d=d+1|0;}}}}
let D3=a=>{return a.rG;}
let A2P=a=>{return I(a.rG);}
let AI$=a=>{return a.rG;}
let AVv=a=>{let b,c;b=a.rG;c=new Bx;c.og=H(20);return (N(c,c.od,b,10)).l();}
let Ef=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
let EY=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
let A8r=()=>{AXF=BI(Es);}
function Bx(){let a=this;D.call(a);a.og=null;a.od=0;}
let BiL=()=>{let a=new Bx();F_(a);return a;}
let BiM=a=>{let b=new Bx();Jo(b,a);return b;}
let F_=a=>{a.og=H(16);}
let Jo=(a,b)=>{a.og=H(b);}
let Nb=(a,b)=>{F(a,a.od,b===null?C(2):b.l());return a;}
let LV=(a,b)=>{return a.k(a.od,b);}
let F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.od){if(c===null)c=C(2);else if(c.oh.length?0:1)return a;a.dk(a.od+c.oh.length|0);d=a.od-1|0;while(d>=b){a.og.data[d+c.oh.length|0]=a.og.data[d];d=d+(-1)|0;}a.od=a.od+c.oh.length|0;e=0;r:{while(e<c.oh.length){f=a.og;d=b+1|0;if(e<0)break r;if(e>=c.oh.length)break r;f.data[b]=c.oh.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}
let Lg=(a,b)=>{return N(a,a.od,b,10);}
let AB$=(a,b,c)=>{return N(a,a.od,b,c);}
let N=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}d:{if(Gy(c,d)<0){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);f=a.og.data;g=b+1|0;f[b]=45;b=g;}a.og.data[b]=Jj(c,d);}else{h=1;i=1;j=ED((-1),d);o:{while(true){k=C7(h,d);if(Gy(k,c)>0){k=h;break o;}i=i+1|0;if(Gy(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)e=b;else{f=a.og.data;e=b+1|0;f[b]=45;}while(true){if(!k)break d;f=a.og.data;b=e+1|0;f[e]=Jj(ED(c,k),d);c=BeZ(c,k);k=ED(k,d);e=b;}}}return a;}
let P$=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=1;if(GH(c,M)){e=0;c=HJ(c);}d:{f=I(d);if(E9(c,f)<0){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);g=a.og.data;h=b+1|0;g[b]=45;b=h;}a.og.data[b]=Jj(Z(c),d);}else{i=1;j=I(1);k=EJ(I(-1),f);o:{while(true){l=W(j,f);if(E9(l,c)>0){l=j;break o;}i=i+1|0;if(E9(l,k)>0)break;j=l;}}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)e=b;else{g=a.og.data;e=b+1|0;g[b]=45;}while(true){if(Dh(l,M))break d;g=a.og.data;b=e+1|0;g[e]=Jj(Z((EJ(c,l))),d);c=AB9(c,l);l=EJ(l,f);e=b;}}}return a;}
let ER=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B9(c,0.0);if(!d){if(1.0/c===Infinity){Bo(a,b,b+3|0);e=a.og.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bo(a,b,b+4|0);e=a.og.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bo(a,b,b+3|0);e=a.og.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bo(a,b,b+8|0);d=b;}else{Bo(a,b,b+9|0);e=a.og.data;d=b+1|0;e[b]=45;}e=a.og.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A1_;AFA(c,f);d=f.C9;g=f.C0;h=f.Fl;i=1;j=1;if(h)j=2;k=9;l=AUt(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Kt(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bo(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.og.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.og.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;p
=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.og.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.og.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
let MR=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B9(c,0.0);if(!d){if(1.0/c===Infinity){Bo(a,b,b+3|0);e=a.og.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bo(a,b,b+4|0);e=a.og.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bo(a,b,b+3|0);e=a.og.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bo(a,b,b+8|0);d=b;}else{Bo(a,b,b+9|0);e=a.og.data;d=b+1|0;e[b]=45;}e=a.og.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AML;X8(c,f);g=f.Dn;h=f.CP;i=f.Fg;j=1;k=1;if(i)k=2;l=18;m=ASy(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Kt(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bo(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.og.data;k=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.og.data;b=k+1|0;e[k]=48;k=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(Gb(p,M))d=0;else{d=Z(BS(g,p));g=Dx(g,p);}e=a.og.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=BS(p,I(10));q=q+1|0;}if(h){e=a.og.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
let AUt=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
let ASy=b=>{let c,d,e,f,g;c=I(1);d=0;e=16;f=AXb.data;g=f.length-1|0;while(g>=0){if(Dh(Dx(b,W(c,f[g])),M)){d=d|e;c=W(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
let Tm=(a,b)=>{return a.dv(a.od,b);}
let EA=(a,b,c)=>{F(a,b,c===null?C(2):c.l());return a;}
let R$=(a,b)=>{let c,d,e,f,g,h;c=a.og.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=H(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.og=g;}
let Bi=a=>{let b,c,d,e,f;b=new P;c=a.og;d=c.data;e=a.od;U();f=d.length;if(e>=0&&e<=(f-0|0)){b.oh=R(c.data,0,e);return b;}b=new O;b.oe=1;b.of=1;E(b);}
let AD1=a=>{return a.od;}
let VL=(a,b)=>{let c;if(b>=0&&b<a.od)return a.og.data[b];c=new O;c.oe=1;c.of=1;E(c);}
let AFy=(a,b,c,d,e)=>{let f,g;if(d<=e&&e<=c.oh.length&&d>=0){Bo(a,b,(b+e|0)-d|0);d:{while(d<e){f=a.og;g=b+1|0;if(d<0)break d;if(d>=c.oh.length)break d;f.data[b]=c.oh.charCodeAt(d);d=d+1|0;b=g;}return a;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new O;c.oe=1;c.of=1;E(c);}
let MA=(a,b,c,d,e)=>{let f,g,h,i;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.og.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let U5=(a,b)=>{let c,d,e,f;if(b>=0){c=a.od;if(b<c){c=c-1|0;a.od=c;while(b<c){d=a.og.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ba;f.oe=1;f.of=1;E(f);}
let AHP=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B9(b,c);if(d<=0){e=a.od;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.od=e-(c-b|0)|0;g=0;while(g<f){h=a.og.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Ba;i.oe=1;i.of=1;E(i);}
let Bo=(a,b,c)=>{let d,e,f,g;d=a.od;e=d-b|0;a.dk((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.og.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.od=a.od+(c-b|0)|0;}
let IZ=G(0);
let L=G(Bx);
let Dw=()=>{let a=new L();A$c(a);return a;}
let A$c=a=>{a.og=H(16);}
let CT=(a,b)=>{F(a,a.od,b===null?C(2):b.l());return a;}
let B5=(a,b)=>{F(a,a.od,b);return a;}
let EX=(a,b)=>{N(a,a.od,b,10);return a;}
let Ey=(a,b)=>{let c;c=a.od;Bo(a,c,c+1|0);a.og.data[c]=b;return a;}
let AIa=(a,b,c)=>{F(a,b,c===null?C(2):c.l());return a;}
let Im=(a,b,c)=>{Bo(a,b,b+1|0);a.og.data[b]=c;return a;}
let AAV=(a,b,c)=>{AHP(a,b,c);return a;}
let G3=(a,b,c)=>{F(a,b,c);return a;}
let I6=(a,b)=>{a.od=b;}
let AGC=(a,b,c)=>{let d,e,f,g;if(b<=c&&b>=0&&c<=a.od){d=new P;e=a.og;f=e.data;c=c-b|0;U();g=f.length;if(b>=0&&c>=0&&c<=(g-b|0)){d.oh=R(e.data,b,c);return d;}d=new O;Bl(d);E(d);}d=new O;d.oe=1;d.of=1;E(d);}
let A3D=(a,b,c,d,e)=>{let f,g,h,i;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.og.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AMs=(a,b,c,d)=>{let e,f,g,h,i;e=a.od;Bo(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.og.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let Dr=a=>{return a.od;}
let Cx=a=>{return Bi(a);}
let APG=(a,b)=>{R$(a,b);}
let AFu=(a,b,c)=>{F(a,b,c===null?C(2):c.l());return a;}
let A4v=(a,b,c)=>{Bo(a,b,b+1|0);a.og.data[b]=c;return a;}
let DI=(a,b,c)=>{F(a,b,c);return a;}
let Ja=G(Jl);
let AFX=G(Ja);
let BiN=a=>{let b=new AFX();AK6(b,a);return b;}
let AK6=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
let ADM=G(Ja);
let BiO=a=>{let b=new ADM();ALw(b,a);return b;}
let ALw=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
function XM(){let a=this;D.call(a);a.DV=0;a.Gz=0;a.EO=0;a.GW=null;a.HV=0;a.HY=null;a.GL=0;a.GF=null;a.Bm=0;a.wm=0;a.C1=0;a.E8=0;a.Hc=0;a.G2=0;a.HH=0;a.FR=0;a.Hu=0;a.DM=0;a.B7=0;}
let BcY=a=>{let b=new XM();AJQ(b,a);return b;}
let AGB=a=>{return !a.Bm&&!a.wm?1:0;}
let AJQ=(a,b)=>{a.DV=0;a.Gz=1;a.EO=0;a.HV=1;a.HY=C(43);a.GL=0;a.Bm=(-1);a.wm=(-1);a.C1=0;a.E8=0;a.Hc=0;a.G2=0;a.HH=0;a.FR=0;a.Hu=0;a.DM=0;a.B7=1;a.GF=b;}
let O0=G(0);
function M_(){let a=this;D.call(a);a.ug=null;a.zn=null;a.FH=null;a.FV=null;a.Jr=null;a.rR=null;a.Bt=null;a.Ag=null;a.zR=null;a.t4=null;a.wU=null;a.CG=0;a.DO=0;a.Ic=null;a.xs=0;a.zX=null;a.Jc=null;a.I5=null;a.ys=null;a.D1=null;a.tx=null;}
let J9=null;let BiP=(a,b)=>{let c=new M_();AC8(c,a,b);return c;}
let AC8=(a,b,c)=>{let d;d=new CQ;d.pD=1;d.ox=Bs(D,4);a.zR=d;Kn();a.wU=AAX;a.CG=(-1);a.DO=1;a.xs=1;a.Jc=F7(51,0.800000011920929);d=new CQ;d.pD=1;d.ox=Bs(D,16);a.ys=d;d=new CQ;d.pD=1;d.ox=Bs(D,16);a.D1=d;Jv();a.t4=Jq;a.rR=c;a.Bt=b;Z9(a);}
let Z9=a=>{let b,c,d,e,f,g,h,i;J9=A5n();MY();EG(JI,C(82),C(43));b=Bv(J9.userAgent);MY();EG(JI,C(83),b);if(J9.windows?1:0){MY();EG(JI,C(84),C(85));}else if(J9.macOS?1:0)Qu(C(84),C(86));else if(!(J9.linux?1:0))Qu(C(84),C(87));else Qu(C(84),C(7));c=new Oz;d=a.rR.GL;c.HK=0;c.GE=0;c.q1=1;c.q1=d;KF=c;Jv();b=Bv(Jq.ry.location.href);a.tx=b;if(DP(b,C(88))){c=NB(a.tx,C(89),C(43));a.tx=c;a.tx=NB(c,C(90),C(43));}e=E$(a.tx,63,0);if(e>=0)a.tx=Cv(a.tx,0,e);c=a.rR;KA=c.Gz;b=BbZ(c);a.ug=b;c=Bby(a.tx,b.oX,a);a.zX=c;d=a.rR.HV;f
=KF;g=c.BE;h=new L;h.og=H(16);i=h.od;if(g===null)g=C(2);F(h,i,g);F(h,h.od,C(91));h=Bi(h);g=new L;g.og=H(16);i=g.od;if(h===null)h=C(2);F(g,i,h);F(g,g.od,C(92));h=Bi(g);g=new Po;g.yO=c;g.Fr=C(92);g.Fp=d;VW(f,1,h,g);a.zn=BdD(a.ug.oX);c=new QL;c.AZ=a.zX;a.FH=c;c=new Ui;c.Iz=BfQ(16,0.75);a.FV=c;a.Ic=new Pz;a.I5=Bbz();if(a.rR.EO)AFf(a);Eg=a;c=a.ug;Bb=c;b=c.wI;Cd=b;Bq=b;GK=c.FW;Be=a.zn;PV=a.FH;BfE=a.FV;c=BgQ();a.Jr=c;Be1=c;c=AD5(a.t4);g=BfT(a);c.addEventListener("visibilitychange",CK(g,"handleEvent"));AHb(a.t4,a);if
(AGB(a.rR))ACP(a.t4,C(93),A_2(a));}
let AEq=a=>{let b,c,d,e,f,g,h,$$je;b=a.wU;b:{try{a:{BbI();switch(A64.data[AAq(b)]){case 1:c=X9(AIR());if(!c){Kn();a.wU=Tw;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break a;}e=a.zX.ED;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=Dw();Ey(EX(g,f),37);h=Cx(g);d.setProperty("width",Cp(h));}}break a;case 2:break;default:break a;}if(a.Bt!==null){b=a.Ag;if(b!==null){AFr(b);AF7(a.Ag);}W8(a.zn,null);PH(a.zn);ADo(a.ys);a.Ag
=a.Bt;a.Bt=null;Kn();a.wU=ABR;a.ug.A1=M;}V8(a,a.Ag);}}catch($$e){$$je=BH($$e);if($$je instanceof Eb){h=$$je;break b;}else{throw $$e;}}b=a.t4;b.Bn=a;requestAnimationFrame(CK(b,"onAnimationFrame"));return;}if(Fc===null){d=new Do;d.p$=Km;b=new L;b.og=H(16);d.o_=b;d.p7=H(32);d.qf=0;Dn();d.qa=Du;Fc=d;}J5(h,Fc);E(h);}
let V8=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;WR(a.ug);c=Bb.oX.width;d=Bb.oX.height;e=0;f=a.wU;Kn();if(f===ABR){a.wU=Tw;Z5(b);e=1;}if(!(c==a.CG&&d==a.DO&&!e)){a.CG=c;a.DO=d;Cd.dX(0,0,c,d);g=b.pF;if(g!==null)g.dY(c,d);}g=a.D1;f=a.ys;h=f.ox;d=f.oo;i=g.ox;j=i.data;k=g.oo;c=k+d|0;if(c<=j.length)l=i;else{m=8;if(m<=c)m=c;k=k*1.75|0;if(m>k)k=m;l=i.constructor;if(l===null)f=null;else{f=l.classObject;if(f===null){f=new CN;f.oJ=l;n=f;l.classObject=n;}}l=f.oJ.$meta.item;if(l===null)n=null;else{n=l.classObject;if(n===
null){n=new CN;n.oJ=l;o=n;l.classObject=o;}}if(n===null){b=new Dv;Bl(b);E(b);}if(n===BI(CO)){b=new V;Bl(b);E(b);}if(k<0){b=new D_;Bl(b);E(b);}l=EO(n.oJ,k);f=l.data;e=g.oo;k=f.length;if(e<k)k=e;Fh(i,0,l,0,k);g.ox=l;}Fh(h,0,l,g.oo,d);g.oo=c;g=a.ys;h=g.ox;e=0;p=g.oo;f=null;if(e>p){b=new V;b.oe=1;b.of=1;E(b);}while(e<p){i=h.data;d=e+1|0;i[e]=f;e=d;}g.oo=0;p=0;while(true){g=a.D1;e=g.oo;d=B9(p,e);if(d>=0){h=g.ox;p=0;f=null;if(p>e){b=new V;b.oe=1;b.of=1;E(b);}while(p<e){i=h.data;d=p+1|0;i[p]=f;p=d;}g.oo=0;g=a.ug;q
=T(g.A1,I(1));g.A1=q;if(W0(q,I(60)))AFH(b);PH(a.zn);return;}if(d>=0)break;g.ox.data[p].cV();p=p+1|0;}f=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,p,10);F(b,b.od,C(38));Lg(b,g.oo);Ks(f,Bi(b));E(f);}
let Mo=a=>{return;}
let AFf=a=>{let b,c,d,e,f;b=a.zX;c=new Oc;c.H7=a;d=KF;b=b.BE;e=new L;e.og=H(16);f=e.od;if(b===null)b=C(2);F(e,f,b);F(e,e.od,C(91));b=Bi(e);e=new L;e.og=H(16);f=e.od;if(b===null)b=C(2);F(e,f,b);F(e,e.od,C(94));Ms(d,1,Bi(e),c);}
let Q9=G(0);
function Nt(){D.call(this);this.pF=null;}
let AF7=a=>{return;}
let AFr=a=>{return;}
let Ce=(a,b)=>{a.pF=b;if(b!==null){b.d1();a.pF.dY(Bb.oX.width,Bb.oX.height);}}
function J$(){let a=this;Nt.call(a);a.o7=null;a.Gx=null;a.FG=null;a.GJ=null;a.FJ=null;a.E$=null;a.oz=0;a.DQ=null;a.zh=0;a.oU=null;a.pf=null;a.pc=null;}
let Bm=0.0;let Bp=0.0;let BC=0.0;let BcQ=()=>{let a=new J$();Zv(a);return a;}
let Zv=a=>{let b,c,d,e,f,g,h;b=Bs(Cg,18);c=b.data;d=new N7;ADv(d,Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));c[0]=d;d=new Tt;ABU(d,I(Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)))));c[1]=d;d=new Vm;e=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));f=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));g=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));h
=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));d.uS=e;d.uT=f;d.uU=g;d.uV=h;c[2]=d;d=new RU;BE();BE();d.HR=new Hn;c[3]=d;d=new SO;d.yv=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));d.yt=Px();d.yu=Px();d.yw=Px();c[4]=d;c[5]=BgG();c[6]=Bd3();c[7]=Bc3();c[8]=Bfd();c[9]=A_3();c[10]=A_$();c[11]=Bcp();c[12]=Bew();c[13]=Bbm();c[14]=Bf7();c[15]=Bg0();c[16]=Bc7();c[17]=BeI(M);a.DQ=b;a.zh=6;a.oU=c[6];}
let Z5=a=>{let b,c,d,e,f,g,h;Eg.xs=1;b=new FC;c=PV;d=new JU;e=c.AZ;Ns();M3(d,e,C(95),Rm);ADU(b,Bdr(d,0),null,1);a.pf=b;Fp();c=AEk;f=b.s0.Cr;f.p0=c.p0;f.pZ=c.pZ;f.pY=c.pY;f.pX=c.pX;c=new Mf;AAf();OV(c,1000,null);a.pc=c;c=new Rb;c.vy=Cu(512);c.ui=M;c.tr=a;a.Gx=c;c=new R1;c.vs=Cu(512);c.tQ=Cu(512);c.t0=Cu(512);c.re=M;c.ta=a;a.FG=c;c=new Ti;c.qx=Cu(512);c.ti=M;c.vq=0;c.s$=a;a.GJ=c;c=new Pl;c.sk=Cu(256);c.sK=M;c.vN=0;c.s9=a;a.FJ=c;a.E$=BgR(a);g=Bs(Lz,30);h=g.data;h[0]=Bf8(a);h[1]=BfS(a);h[2]=Bcz(a);h[3]=BfP(a);h[4]
=Bgp(a);h[5]=Bb1(a);h[6]=Bbk(a);h[7]=Bep(a);h[8]=Ba5(a);h[9]=Bbn(a);h[10]=BdT(a);h[11]=Bf_(a);h[12]=Bdi(a);h[13]=Beg(a);h[14]=A_L(a);h[15]=Be2(a);h[16]=A_D(a);h[17]=Bdc(a);h[18]=BeD(a);h[19]=Bct(a);h[20]=BeL(a);h[21]=BbT(a);h[22]=BdC(a);h[23]=Bev(a);h[24]=Bei(a);h[25]=Bgd(a);h[26]=Bci(a);h[27]=Bai(a);h[28]=Bdx(a);h[29]=Bfw(a);a.o7=g;a.oz=0;Ce(a,h[0]);}
let Dp=a=>{let b,c,d;b=a.oz+1|0;c=a.o7.data;b=b%c.length|0;a.oz=b;d=c[b];a.pF=d;if(d!==null){d.d1();a.pF.dY(Bb.oX.width,Bb.oX.height);}}
let D5=a=>{let b,c,d,e;b=a.oz;c=a.o7.data;d=c.length;b=((b+d|0)-1|0)%d|0;a.oz=b;e=c[b];a.pF=e;if(e!==null){e.d1();a.pF.dY(Bb.oX.width,Bb.oX.height);}}
let AFH=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je;b=a.pF;if(b!==null)b.d_(Bb.pN);c=Be;if(!c.wk.data[55]){if(c.ph.data[16]){d=a.DQ.data;e=a.zh;f=d.length;e=((e+f|0)-1|0)%f|0;a.zh=e;a.oU=d[e];Ce(a,a.o7.data[a.oz]);}else if(B7(c,7)){d=a.DQ.data;e=(a.zh+1|0)%d.length|0;a.zh=e;a.oU=d[e];Ce(a,a.o7.data[a.oz]);}}else{Cm(a.pc);c=a.pf;b=a.pc;g=Bb.Cw|0;h=a.oU.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CN;i.oJ=h;j=i;h.classObject=j;}}h=new L;h.og=H(16);N(h,h.od,g,10);F(h,h.od,C(96));e=
h.od;if(i===null)j=C(2);else{j=i;if(!j.$id$){k=Ff();j.$id$=k;}g=i.$id$;i=new L;Jo(i,16);AFu(i,i.od,C(70));AB$(i,g,10);j=OT(i.og,0,i.od);}F(h,e,j);l=new P;d=h.og;m=d.data;f=h.od;U();g=m.length;if(f>=0&&f<=(g-0|0)){l.oh=R(d.data,0,f);n=Bb.oX.height*0.5;o=Bb.oX.width;T6(c.s0);h=c.s0;p=l.oh.length;j=null;M2();k=Gi;q=Dl(k,BI(DH));r=q<0?null:k.qg.data[q];if(r===null){r=new HX;Dm(r);r.qD=BdN(0,4);r.sE=100;v:{try{k=LQ(BI(DH),null);break v;}catch($$e){$$je=BH($$e);if($$je instanceof Da){}else{throw $$e;}}try{k=MU(BI(DH),
null);JO(k,1);break v;}catch($$e){$$je=BH($$e);if($$je instanceof Eo){}else{throw $$e;}}k=null;}r.ri=k;if(k===null){c=new B0;b=new L;F_(b);LV(b,C(27));Vb(c,Cx(B5(b,AE1(BI(DH)))));E(c);}B3(Gi,BI(DH),r);}i=VE(r);Dj(h.y3,i);Hi(i,h.ts,l,0,p,h.Cr,o,1,0,j);WM(h,i,0.0,n);O_(c.s0,b);Cl(a.pc);}else{c=new O;c.oe=1;c.of=1;Bt(c);E(c);}}}
let A4j=()=>{Bm=1.0;Bp=1.0;BC=1.0;}
let Z6=G();
let BB=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return C(45);d=1<<c;e=d-1|0;f=(((32-Ef(b)|0)+c|0)-1|0)/c|0;g=H(f);h=g.data;i=C7(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=Jj((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new P;U();l.oh=R(g.data,0,h.length);return l;}
let Cg=G(Hn);
let Px=()=>{return Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let AYr=(a,b)=>{return Z((a.em()))>>>(32-b|0)|0;}
let AP$=a=>{return Bz(Q(a.em(),40))*5.9604644775390625E-8;}
let A5g=a=>{return Bz(Q(a.em(),11))*1.1102230246251565E-16;}
let A33=a=>{let b;b=a.em();return E5(B2(BP(B4(I(1022),I(Ed(b))),52),Bd(b,B(4294967295, 1048575))))+2.44140625E-4-2.44140625E-4;}
let A0B=(a,b,c)=>{return b+a.en()*(c-b);}
let A7g=a=>{let b;b=a.em();return E5(B2(BP(B4(I(1022),I(Ed(b))),52),Bd(b,B(4294967295, 1048575))));}
let ALo=a=>{let b;b=a.em();return E5(B2(BP(B4(I(1022),I(Ed(b))),52),Bd(B2(BP(b,63),Q(b,1)),B(4294967295, 2148532223))));}
let AJY=a=>{let b;b=a.em();return HA((126-Ed(b)|0)<<23|Z(b)&8388607);}
let A4L=a=>{return Ky(a.em());}
let A60=(a,b,c)=>{return b+c*a.ep();}
let A1m=b=>{let c,d;if(b>0.0&&b<1.0){if(b<0.02425){c=Ch((-2.0)*C$(b));return ((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}if(0.97575<b){c=Ch((-2.0)*C$(1.0-b));return  -((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462
*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}c=b-0.5;d=c*c;return ((((((-39.69683028665376)*d+220.9460984245205)*d-275.9285104469687)*d+138.357751867269)*d-30.66479806614716)*d+2.506628277459239)*c/((((((-54.47609879822406)*d+161.5858368580409)*d-155.6989798598866)*d+66.80131188771972)*d-13.28068155288572)*d+1.0);}return E5(B2(Bd(Ee((b-0.5)),B(0, 2147483648)),Bd(Ee(38.5),B(4294967295, 2147483647))));}
let AYE=(a,b,c)=>{return a.er(b,c,(b+c)*0.5);}
let AOr=(a,b,c,d)=>{let e,f,g;e=a.es();f=c-b;g=d-b;if(e<=g/f)return b+Ch(e*f*g);return c-Ch((1.0-e)*f*(c-d));}
function N7(){let a=this;Cg.call(a);a.sA=0;a.sz=0;a.sy=0;}
let A0h=a=>{return C(97);}
let ADv=(a,b)=>{let c,d,e,f,g;c=Z(b);d=GF(b);e=Z(Q(Bg(b,I(-1)),16));f=0;while(f<5){g=(d<<24|(d>>>8|0))+c|0;e=e+1|0;d=g^e;c=(c<<3|(c>>>29|0))^d;f=f+1|0;}a.sA=c;f=0;while(f<5){g=(d<<24|(d>>>8|0))+c|0;e=e+1|0;d=g^e;c=(c<<3|(c>>>29|0))^d;f=f+1|0;}a.sz=c;g=0;while(g<5){d=(d<<24|(d>>>8|0))+c|0;e=e+1|0;d=d^e;c=(c<<3|(c>>>29|0))^d;g=g+1|0;}a.sy=c;}
let A_b=a=>{let b,c,d,e,f;b=a.sA+(-1847521883)|0;a.sA=b;c=a.sz+(1821285621^Ef(b))|0;a.sz=c;d=a.sy+(2146121005^Ef(b&c))|0;a.sy=d;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;e=I((b<<3|(b>>>29|0))^((c<<24|(c>>>8|0))+b|0)^d);b=a.sA+(-1847521883)|0;a.sA=b;c=a.sz+(1821285621^Ef(b))|0;a.sz=c;d=a.sy+(2146121005^Ef(b&c))|0;a.sy=d;f=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^f;c=((f<<24|(f>>>8|0))+b|0)^d;b=(b<<
3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;return Bg(BP(e,32),Bd(I((b<<3|(b>>>29|0))^((c<<24|(c>>>8|0))+b|0)^d),B(4294967295, 0)));}
let A9z=(a,b)=>{let c,d,e,f,g;c=a.sA+(-1847521883)|0;a.sA=c;d=a.sz+(1821285621^Ef(c))|0;a.sz=d;e=a.sy+(2146121005^Ef(c&d))|0;a.sy=e;f=((d<<24|(d>>>8|0))+c|0)^e;d=(c<<3|(c>>>29|0))^f;c=((f<<24|(f>>>8|0))+d|0)^e;f=(d<<3|(d>>>29|0))^c;g=((c<<24|(c>>>8|0))+f|0)^e;c=(f<<3|(f>>>29|0))^g;return ((c<<3|(c>>>29|0))^((g<<24|(g>>>8|0))+c|0)^e)>>>(32-b|0)|0;}
let VA=a=>{let b,c,d;b=a.sA+(-1847521883)|0;a.sA=b;c=a.sz+(1821285621^Ef(b))|0;a.sz=c;d=a.sy+(2146121005^Ef(b&c))|0;a.sy=d;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;return (b<<3|(b>>>29|0))^((c<<24|(c>>>8|0))+b|0)^d;}
let AYg=a=>{return (VA(a)>>>8|0)*5.9604644775390625E-8;}
function Tt(){let a=this;Cg.call(a);a.tR=0;a.sL=0;a.sM=0;a.sN=0;}
let ALb=a=>{return C(98);}
let ABU=(a,b)=>{let c,d,e;a.tR=(-236298515);c=Z(b);if(Dh(b,I(c))){a.sN=c;a.sM=c;a.sL=c;d=0;while(d<20){Tk(a);d=d+1|0;}return;}e=W(Bg(b,Q(b,27)),B(732411475, 1014606921));e=W(Bg(e,Q(e,33)),B(1254403637, 476689399));a.sL=Z(Bg(e,Q(e,27)));b=T(b,B(2135587861, 2654435769));b=W(Bg(b,Q(b,27)),B(732411475, 1014606921));b=W(Bg(b,Q(b,33)),B(1254403637, 476689399));b=Bg(b,Q(b,27));a.sM=Z(b);a.sN=GF(b);}
let AQs=a=>{let b,c,d,e,f;b=a.tR;c=a.sL;b=b-(c<<27|(c>>>5|0))|0;d=a.sM;e=c^(d<<17|(d>>>15|0));a.tR=e;c=a.sN;d=d+c|0;a.sL=d;c=c+b|0;a.sM=c;f=b+e|0;a.sN=f;e=e-(d<<27|(d>>>5|0))|0;b=d^(c<<17|(c>>>15|0));a.tR=b;a.sL=c+f|0;a.sM=f+e|0;e=e+b|0;a.sN=e;return Bg(BP(I(f),32),Bd(I(e),B(4294967295, 0)));}
let ATT=(a,b)=>{let c,d,e,f;c=a.tR;d=a.sL;c=c-(d<<27|(d>>>5|0))|0;e=a.sM;f=d^(e<<17|(e>>>15|0));a.tR=f;d=a.sN;a.sL=e+d|0;a.sM=d+c|0;f=c+f|0;a.sN=f;return f>>>(32-b|0)|0;}
let Tk=a=>{let b,c,d,e,f;b=a.tR;c=a.sL;b=b-(c<<27|(c>>>5|0))|0;d=a.sM;c=c^(d<<17|(d>>>15|0));a.tR=c;e=a.sN;a.sL=d+e|0;a.sM=e+b|0;f=b+c|0;a.sN=f;return f;}
let ATF=a=>{return (Tk(a)>>>8|0)*5.9604644775390625E-8;}
function Vm(){let a=this;Cg.call(a);a.uS=0;a.uT=0;a.uU=0;a.uV=0;}
let AW_=a=>{return C(99);}
let AKE=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.uS;c=a.uT;d=a.uU;e=a.uV;f=c^d;f=f<<26|(f>>>6|0);g=d^e;g=g<<11|(g>>>21|0);h=b^(c+d|0);i=e+(-1380601499)|0;j=g^h;a.uS=j<<26|(j>>>6|0);k=h^i;a.uT=k<<11|(k>>>21|0);a.uU=f^(g+h|0);a.uV=i+(-1380601499)|0;return Bg(BP(I(d),32),I(h));}
let AVg=(a,b)=>{let c,d,e,f,g,h;c=a.uS;d=a.uT;e=a.uU;f=a.uV;g=d^e;a.uS=g<<26|(g>>>6|0);h=e^f;a.uT=h<<11|(h>>>21|0);a.uU=c^(d+e|0);a.uV=f+(-1380601499)|0;return e>>>(32-b|0)|0;}
let VO=a=>{let b,c,d,e,f,g;b=a.uS;c=a.uT;d=a.uU;e=a.uV;f=c^d;a.uS=f<<26|(f>>>6|0);g=d^e;a.uT=g<<11|(g>>>21|0);a.uU=b^(c+d|0);a.uV=e+(-1380601499)|0;return d;}
let AIN=a=>{return (VO(a)>>>8|0)*5.9604644775390625E-8;}
function RU(){Cg.call(this);this.HR=null;}
let AVT=a=>{return C(100);}
let A6A=a=>{return B2(BP(I(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),I(4.294967296E9*Math.random()+(-2.147483648E9)|0));}
let A1v=(a,b)=>{return (4.294967296E9*Math.random()+(-2.147483648E9)|0)>>>(32-b|0)|0;}
let A4M=a=>{return Math.random();}
let A4V=a=>{return Math.random();}
let AQ7=a=>{let b,c,d,e;b=a.HR;if(b.Ej){b.Ej=0;c=b.F0;}else{d=new UL;d.IS=b;e=(AWA(d)).data;b.Ej=1;b.F0=e[1];c=e[0];}return c;}
function SO(){let a=this;Cg.call(a);a.yv=M;a.yt=M;a.yu=M;a.yw=M;}
let ATB=a=>{return C(101);}
let AV3=a=>{let b,c,d,e;b=a.yv;c=a.yt;d=a.yu;a.yv=W(a.yw,B(778217925, 4046813930));a.yt=B2(BP(b,44),Q(b,20));a.yu=T(c,B(2135587861, 2654435769));e=Bg(b,d);a.yw=e;return e;}
let AIJ=(a,b)=>{let c,d,e,f;c=a.yv;d=a.yt;e=a.yu;a.yv=W(a.yw,B(778217925, 4046813930));a.yt=B2(BP(c,44),Q(c,20));a.yu=T(d,B(2135587861, 2654435769));f=Bg(c,e);a.yw=f;return Z(f)>>>(32-b|0)|0;}
function W6(){let a=this;Cg.call(a);a.ym=M;a.yj=M;a.yi=M;a.yl=M;a.yk=M;}
let BgG=()=>{let a=new W6();A7k(a);return a;}
let AZR=a=>{return C(102);}
let A7k=a=>{a.ym=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yj=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yi=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yl=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yk=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let A1D=a=>{let b,c,d,e,f,g;b=a.ym;c=a.yj;d=a.yi;e=a.yl;f=a.yk;a.ym=T(b,B(2135587861, 2654435769));a.yj=Bg(b,f);a.yi=T(c,e);a.yl=B2(BP(d,52),Q(d,12));g=B4(c,d);a.yk=g;return g;}
let ALu=(a,b)=>{let c,d,e,f,g,h;c=a.ym;d=a.yj;e=a.yi;f=a.yl;g=a.yk;a.ym=T(c,B(2135587861, 2654435769));a.yj=Bg(c,g);a.yi=T(d,f);a.yl=B2(BP(e,52),Q(e,12));h=B4(d,e);a.yk=h;return Z(h)>>>(32-b|0)|0;}
function AAc(){let a=this;Cg.call(a);a.v3=M;a.xx=M;a.xw=M;a.zA=M;}
let Bd3=()=>{let a=new AAc();A0L(a);return a;}
let A92=a=>{return C(103);}
let A0L=a=>{a.v3=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.xx=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.xw=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.zA=B2(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)),I(1));if(Dh(B2(B2(a.v3,a.xx),a.xw),M))a.v3=I(1);}
let AXk=a=>{let b,c,d,e;b=a.v3;c=a.xx;d=a.xw;e=a.zA;a.v3=W(d,e);a.xx=B2(BP(b,47),Q(b,17));a.xw=B4(c,b);a.zA=T(e,B(588569818, 3814593898));return d;}
let A0G=(a,b)=>{let c,d,e,f;c=a.v3;d=a.xx;e=a.xw;f=a.zA;a.v3=W(e,f);a.xx=B2(BP(c,47),Q(c,17));a.xw=B4(d,c);a.zA=T(f,B(588569818, 3814593898));return Z(e)>>>(32-b|0)|0;}
function YM(){let a=this;Cg.call(a);a.x1=M;a.xZ=M;a.x0=M;a.xY=M;}
let Bc3=()=>{let a=new YM();AL5(a);return a;}
let AWV=a=>{return C(104);}
let AL5=a=>{a.x1=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.xZ=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.x0=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.xY=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let A6C=a=>{let b,c,d,e;b=a.x1;c=a.xZ;d=a.x0;e=a.xY;a.x1=T(b,B(2135587861, 2654435769));a.xZ=W(e,B(3733122965, 3509855555));a.x0=Bg(b,c);a.xY=B2(BP(d,21),Q(d,43));return B4(e,d);}
let AI4=(a,b)=>{let c,d,e,f;c=a.x1;d=a.xZ;e=a.x0;f=a.xY;a.x1=T(c,B(2135587861, 2654435769));a.xZ=W(f,B(3733122965, 3509855555));a.x0=Bg(c,d);a.xY=B2(BP(e,21),Q(e,43));return Z(B4(f,e))>>>(32-b|0)|0;}
function X7(){let a=this;Cg.call(a);a.xP=M;a.CI=M;}
let Bfd=()=>{let a=new X7();A3a(a);return a;}
let A3a=a=>{a.xP=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.CI=B2(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)),I(1));}
let A7j=a=>{return C(105);}
let ATw=a=>{let b;b=T(W(a.xP,B(2405954229, 4156746688)),a.CI);a.xP=b;b=W(Bg(Bg(b,Q(b,23)),Q(b,47)),B(277803737, 2935059714));return Bg(b,Q(b,25));}
let AJL=(a,b)=>{let c;c=T(W(a.xP,B(2405954229, 4156746688)),a.CI);a.xP=c;c=W(Bg(Bg(c,Q(c,23)),Q(c,47)),B(277803737, 2935059714));return Z(Bg(c,Q(c,25)))>>>(32-b|0)|0;}
function AIo(){let a=this;Cg.call(a);a.v7=0;a.v8=0;a.sq=0;a.sr=0;}
let A_3=()=>{let a=new AIo();A0p(a);return a;}
let A0p=a=>{let b,c,d,e;b=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));c=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));d=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));e=Z(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)));a.v7=b;a.v8=c;a.sq=d;if(!(b|c|d|e))e=1;a.sr=e;}
let AOy=a=>{return C(106);}
let AOW=a=>{let b,c,d,e,f,g,h,i;b=a.v7;c=a.sr;d=b+c|0;d=(d<<7|(d>>>25|0))+b|0;e=a.sq;f=a.v8;g=e-f|0;h=(g<<13|(g>>>19|0))+e|0;i=f<<9;e=e^b;a.sq=e;c=c^f;a.sr=c;a.v8=f^e;a.v7=b^c;a.sq=e^i;a.sr=c<<11|(c>>>21|0);return Bg(BP(I(d),32),Bd(I(h),B(4294967295, 0)));}
let AMa=(a,b)=>{let c,d,e,f,g,h;c=a.v7;d=a.sr;e=c+d|0;e=(e<<7|(e>>>25|0))+c|0;f=a.v8;g=f<<9;h=a.sq^c;a.sq=h;d=d^f;a.sr=d;a.v8=f^h;a.v7=c^d;a.sq=h^g;a.sr=d<<11|(d>>>21|0);return e>>>(32-b|0)|0;}
let AGR=a=>{let b,c,d,e,f,g;b=a.v7;c=a.sr;d=b+c|0;e=(d<<7|(d>>>25|0))+b|0;f=a.v8;g=f<<9;d=a.sq^b;a.sq=d;c=c^f;a.sr=c;a.v8=f^d;a.v7=b^c;a.sq=d^g;a.sr=c<<11|(c>>>21|0);return e;}
let AVK=a=>{return (AGR(a)>>>8|0)*5.9604644775390625E-8;}
function AIk(){let a=this;Cg.call(a);a.qQ=M;a.qR=M;}
let A_$=()=>{let a=new AIk();A9f(a);return a;}
let A9f=a=>{a.qQ=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.qR=B2(Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19)),I(1));}
let AQB=a=>{return C(107);}
let ANq=(a,b)=>{let c,d;c=T(a.qQ,B(2461385507, 3334219670));a.qQ=c;d=Bg(c,Q(c,31));c=T(a.qR,B(2135587862, 2654435769));a.qR=c;c=W(d,c);return Z(Bg(Bg(c,Q(c,26)),Q(c,6)))>>>(32-b|0)|0;}
let A3K=a=>{let b,c;b=T(a.qQ,B(2461385507, 3334219670));a.qQ=b;c=Bg(b,Q(b,31));b=T(a.qR,B(2135587862, 2654435769));a.qR=b;b=W(c,b);return Bg(Bg(b,Q(b,26)),Q(b,6));}
let A7W=a=>{let b,c;b=T(a.qQ,B(2461385507, 3334219670));a.qQ=b;c=Bg(b,Q(b,31));b=T(a.qR,B(2135587862, 2654435769));a.qR=b;b=W(c,b);return Bz(Q(Bg(b,Q(b,6)),40))*5.9604644775390625E-8;}
let Y2=a=>{let b,c;b=T(a.qQ,B(2461385507, 3334219670));a.qQ=b;c=Bg(b,Q(b,31));b=T(a.qR,B(2135587862, 2654435769));a.qR=b;b=W(c,b);return Bz(Bg(Bg(Q(b,11),Q(b,37)),Q(b,17)))*1.1102230246251565E-16;}
let A5k=a=>{let b,c,d;b=T(a.qQ,B(2461385507, 3334219670));a.qQ=b;c=Bg(b,Q(b,31));b=T(a.qR,B(2135587862, 2654435769));a.qR=b;b=W(c,b);d=Bg(Bg(b,Q(b,26)),Q(b,6));return Bz(T(Q(W(Bd(d,B(4294967295, 0)),I(2097152)),32),W(Q(d,32),I(2097152))))*1.1102230246251565E-16;}
let AY6=(a,b,c)=>{let d,e;d=T(a.qQ,B(2461385507, 3334219670));a.qQ=d;e=Bg(d,Q(d,31));d=T(a.qR,B(2135587862, 2654435769));a.qR=d;d=W(e,d);e=Bg(Bg(d,Q(d,26)),Q(d,6));return b+Bz(T(Q(W(Bd(e,B(4294967295, 0)),I(2097152)),32),W(Q(e,32),I(2097152))))*1.1102230246251565E-16*(c-b);}
let A3L=a=>{let b,c,d;b=Y2(a);if(b===0.0)return (-38.5);if(b<0.02425){c=Ch((-2.0)*C$(b));return ((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}if(0.97575<b){c=Ch((-2.0)*C$(1.0-b));return  -((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462
*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}c=b-0.5;d=c*c;return ((((((-39.69683028665376)*d+220.9460984245205)*d-275.9285104469687)*d+138.357751867269)*d-30.66479806614716)*d+2.506628277459239)*c/((((((-54.47609879822406)*d+161.5858368580409)*d-155.6989798598866)*d+66.80131188771972)*d-13.28068155288572)*d+1.0);}
let A9L=(a,b,c)=>{return Wt(a,b,c,(b+c)*0.5);}
let Wt=(a,b,c,d)=>{let e,f,g,h,i;e=T(a.qQ,B(2461385507, 3334219670));a.qQ=e;e=Bg(e,Q(e,31));f=T(a.qR,B(2135587862, 2654435769));a.qR=f;e=W(e,f);g=Bz(Q(Bg(e,Q(e,6)),40))*5.9604644775390625E-8;h=c-b;i=d-b;if(g<=i/h)return b+Ch(g*h*i);return c-Ch((1.0-g)*h*(c-d));}
function AFb(){let a=this;Cg.call(a);a.yU=M;a.yT=M;}
let Bcp=()=>{let a=new AFb();AYs(a);return a;}
let AYs=a=>{a.yU=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yT=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let A3t=a=>{return C(108);}
let A8G=a=>{let b,c;b=T(a.yU,B(3516067075, 3518319154));a.yU=b;c=T(a.yT,B(792563159, 2360945575));a.yT=c;b=W(Bg(b,B2(BP(c,37),Q(c,27))),B(732411475, 1014606921));b=W(Bg(b,Q(b,33)),B(1254403637, 476689399));return Bg(b,Q(b,27));}
let A$B=(a,b)=>{let c,d;c=T(a.yU,B(3516067075, 3518319154));a.yU=c;d=T(a.yT,B(792563159, 2360945575));a.yT=d;c=W(Bg(c,B2(BP(d,37),Q(d,27))),B(732411475, 1014606921));c=W(Bg(c,Q(c,33)),B(1254403637, 476689399));return Z(Bg(c,Q(c,27)))>>>(32-b|0)|0;}
function AEW(){let a=this;Cg.call(a);a.yB=M;a.yC=M;a.yz=M;a.yA=M;}
let Bew=()=>{let a=new AEW();A4Z(a);return a;}
let A4Z=a=>{a.yB=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yC=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yz=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.yA=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let AY9=a=>{return C(109);}
let ANO=a=>{let b,c,d,e,f,g;b=a.yB;c=a.yC;d=a.yz;e=a.yA;f=Bg(c,d);g=Bg(d,e);a.yB=B2(BP(f,57),Q(f,7));a.yC=B2(BP(g,18),Q(g,46));b=T(b,f);a.yz=b;a.yA=T(e,B(3378872667, 3734071996));return b;}
let AOI=(a,b)=>{let c,d,e,f,g,h;c=a.yB;d=a.yC;e=a.yz;f=a.yA;g=Bg(d,e);h=Bg(e,f);a.yB=B2(BP(g,57),Q(g,7));a.yC=B2(BP(h,18),Q(h,46));c=T(c,g);a.yz=c;a.yA=T(f,B(3378872667, 3734071996));return Z(c)>>>(32-b|0)|0;}
function AEg(){Cg.call(this);this.xR=M;}
let Bbm=()=>{let a=new AEg();AVE(a);return a;}
let AVE=a=>{a.xR=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let AR6=a=>{return C(110);}
let A62=a=>{let b;b=T(a.xR,B(2135587861, 2654435769));a.xR=b;b=W(Bg(b,Q(b,27)),B(732411475, 1014606921));b=W(Bg(b,Q(b,33)),B(1254403637, 476689399));return Bg(b,Q(b,27));}
let A$a=(a,b)=>{let c;c=T(a.xR,B(2135587861, 2654435769));a.xR=c;c=W(Bg(c,Q(c,27)),B(732411475, 1014606921));c=W(Bg(c,Q(c,33)),B(1254403637, 476689399));return Z(Bg(c,Q(c,27)))>>>(32-b|0)|0;}
function Vr(){Cg.call(this);this.q$=M;}
let Bf7=()=>{let a=new Vr();APJ(a);return a;}
let APJ=a=>{a.q$=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let AZP=a=>{return C(111);}
let AJ2=a=>{let b;b=T(a.q$,B(2135587861, 2654435769));a.q$=b;return b;}
let AJk=(a,b)=>{let c;c=T(a.q$,B(2135587861, 2654435769));a.q$=c;return Z(Q(c,64-b|0));}
let AZq=a=>{let b,c;b=T(a.q$,B(2135587861, 2654435769));a.q$=b;c=Bz(Q(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return c;}
let A24=a=>{let b,c;b=T(a.q$,B(2135587861, 2654435769));a.q$=b;c=Bz(Q(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return E5(B2(Bd(Ee(Bz(BP(b,54))),B(0, 2147483648)),Bd(Ee(c),B(4294967295, 2147483647))));}
let AKF=a=>{let b,c;b=T(a.q$,B(2135587861, 2654435769));a.q$=b;c=Bz(Q(b,40))*5.9604644775390625E-8;if(c===0.0)c=2.9802322387695312E-8;return c;}
let A6I=a=>{let b;b=T(a.q$,B(2135587861, 2654435769));a.q$=b;return Ky(L2(b));}
function Yw(){Cg.call(this);this.q4=M;}
let Bg0=()=>{let a=new Yw();AOa(a);return a;}
let AOa=a=>{a.q4=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let AL4=a=>{return C(112);}
let AWw=a=>{let b;b=T(a.q4,I(1));a.q4=b;return HY(b);}
let AT1=(a,b)=>{let c;c=T(a.q4,I(1));a.q4=c;return Z(Q(HY(c),64-b|0));}
let A6U=a=>{let b,c;b=T(a.q4,I(1));a.q4=b;c=Bz(Q(HY(b),11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return c;}
let A0v=a=>{let b,c;b=T(a.q4,I(1));a.q4=b;b=HY(b);c=Bz(Q(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return E5(B2(Bd(Ee(Bz(BP(b,54))),B(0, 2147483648)),Bd(Ee(c),B(4294967295, 2147483647))));}
let A6w=a=>{let b,c;b=T(a.q4,I(1));a.q4=b;c=Bz(Q(HY(b),40))*5.9604644775390625E-8;if(c===0.0)c=2.9802322387695312E-8;return c;}
let A3h=a=>{let b;b=T(a.q4,I(1));a.q4=b;return Ky(L2(b));}
function ABS(){let a=this;Cg.call(a);a.CK=M;a.Dd=M;}
let Bc7=()=>{let a=new ABS();ARm(a);return a;}
let ARm=a=>{a.CK=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));a.Dd=Bg(By((BE()-0.5)*4.503599627370496E15),By((BE()-0.5)*1.8446744073709552E19));}
let AUT=a=>{return C(113);}
let A8B=a=>{let b,c,d;b=a.CK;c=T(a.Dd,B(2135587861, 2654435769));a.Dd=c;d=Bg(b,BP(I(1),Z(Q(c,58))));a.CK=d;return d;}
function ADf(){Cg.call(this);this.q8=M;}
let BeI=a=>{let b=new ADf();A4D(b,a);return b;}
let A4D=(a,b)=>{a.q8=b;}
let A5N=a=>{return C(114);}
let AUX=a=>{let b;b=T(a.q8,B(2135587861, 2654435769));a.q8=b;return W(Q(b,10),IH.data[Z(Bd(b,I(1023)))]);}
let A7x=(a,b)=>{let c;c=T(a.q8,B(2135587861, 2654435769));a.q8=c;return Z(Q(W(Q(c,10),IH.data[Z(Bd(c,I(1023)))]),64-b|0));}
let ARC=a=>{let b,c;b=T(a.q8,B(2135587861, 2654435769));a.q8=b;c=Bz(Q(W(Q(b,10),IH.data[Z(Bd(b,I(1023)))]),11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return c;}
let A8O=a=>{let b,c;b=T(a.q8,B(2135587861, 2654435769));a.q8=b;b=W(Q(b,10),IH.data[Z(Bd(b,I(1023)))]);c=Bz(Q(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return E5(B2(Bd(Ee(Bz(BP(b,54))),B(0, 2147483648)),Bd(Ee(c),B(4294967295, 2147483647))));}
let A49=a=>{let b,c;b=T(a.q8,B(2135587861, 2654435769));a.q8=b;c=Bz(Q(W(Q(b,10),IH.data[Z(Bd(b,I(1023)))]),40))*5.9604644775390625E-8;if(c===0.0)c=2.9802322387695312E-8;return c;}
let AZa=a=>{let b;b=T(a.q8,B(2135587861, 2654435769));a.q8=b;return Ky(W(Q(b,10),IH.data[Z(Bd(b,I(1023)))]));}
let FN=G(BW);
let AAX=null;let ABR=null;let Tw=null;let A8x=null;let Kn=()=>{Kn=Bk(FN);A4m();}
let A4m=()=>{let b,c,d;b=new FN;Kn();b.oq=C(115);b.on=0;AAX=b;c=new FN;c.oq=C(116);c.on=1;ABR=c;d=new FN;d.oq=C(117);d.on=2;Tw=d;A8x=S(FN,[b,c,d]);}
let Og=G(0);
let C4=G(0);
let Tg=G(0);
function LR(){let a=this;D.call(a);a.ry=null;a.Bn=null;}
let Jq=null;let Jv=()=>{Jv=Bk(LR);A12();}
let AD5=a=>{return a.ry.document;}
let AHb=(a,b)=>{a.Bn=b;requestAnimationFrame(CK(a,"onAnimationFrame"));}
let ACP=(a,b,c)=>{let d;d=Em(c,"handleEvent");a.ry.addEventListener(Cp(b),CK(d,"handleEvent"));}
let A12=()=>{let b;b=new LR;Jv();b.ry=window;Jq=b;}
let A6q=(a,b)=>{let c;b;c=a.Bn;a.Bn=null;AEq(c);}
let Zr=G();
let Pw=G();
let Gi=null;let M2=()=>{M2=Bk(Pw);A5R();}
let Zb=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;M2();if(b===null){d=new V;d.oe=1;d.of=1;d.oi=C(36);E(d);}d=null;e=0;f=b.oo;while(e<f){if(e>=b.oo){g=new O;d=new L;d.og=H(16);F(d,d.od,C(37));N(d,d.od,e,10);F(d,d.od,C(38));c=b.oo;N(d,d.od,c,10);b=Bi(d);g.oe=1;g.of=1;g.oi=b;E(g);}k:{h=b.ox.data[e];if(h!==null){if(d===null){g=Gi;i=h.constructor;if(i===null)j=null;else{j=i.classObject;if(j===null){j=new CN;j.oJ=i;k=j;i.classObject=k;}}l=Dl(g,j);d=l<0?null:g.qg.data[l];if(d===null)break k;}g=d.qD;if(g.oo<d.sE){Dj(g,h);l=d.xt;m
=d.qD.oo;if(l>m)m=l;d.xt=m;if(Fm(h,Ea))h.D();}else if(Fm(h,Ea))h.D();if(!c)d=null;}}e=e+1|0;}}
let A5R=()=>{Gi=F7(51,0.800000011920929);}
function KX(){E3.call(this);this.D6=0.0;}
let ANQ=null;let HO=a=>{return a.D6;}
let G9=b=>{let c,d,e,f,g,h,i,j,k,l,m;if(b.oh.length?0:1){b=new CV;b.oe=1;b.of=1;E(b);}c=0;d=b.oh.length;while(c>=0&&c<b.oh.length){if(b.oh.charCodeAt(c)>32){while(true){e=d-1|0;if(e<0)break;if(e>=b.oh.length)break;if(b.oh.charCodeAt(e)>32){f=0;if(c>=0&&c<b.oh.length){if(b.oh.charCodeAt(c)==45){c=c+1|0;f=1;}else if(Dz(b,c)==43)c=c+1|0;if(c==d){b=new CV;Bl(b);E(b);}q:{e=Dz(b,c);g=0;h=(-1);i=100000000;j=0;if(e!=46){j=1;if(e>=48&&e<=57){w:{while(c<d){if(Dz(b,c)!=48)break w;c=c+1|0;}}while(c<d){k=Dz(b,c);if(k<48)break q;if
(k>57)break q;if(i>0){g=g+C7(i,k-48|0)|0;i=ED(i,10);}h=h+1|0;c=c+1|0;}}else{b=new CV;Bl(b);E(b);}}}if(c<d&&Dz(b,c)==46){c=c+1|0;j:{while(true){if(c>=d)break j;e=Dz(b,c);k=B9(e,48);if(k<0)break j;if(e>57)break;if(!g&&!k)h=h+(-1)|0;else if(i>0){g=g+C7(i,e-48|0)|0;i=ED(i,10);}c=c+1|0;j=1;}}if(!j)E(Vn());}if(c<d){k=Dz(b,c);if(k!=101&&k!=69)E(Vn());k=c+1|0;l=0;if(k==d)E(Vn());if(Dz(b,k)==45){k=k+1|0;l=1;}else if(Dz(b,k)==43)k=k+1|0;m=0;c=0;x:{while(true){if(k>=d)break x;e=Dz(b,k);if(e<48)break x;if(e>57)break;m=
(10*m|0)+(e-48|0)|0;c=1;k=k+1|0;}}if(!c)E(Vn());if(l)m= -m|0;h=h+m|0;}return AH2(g,h,f);}b=new Ba;b.oe=1;b.of=1;E(b);}d=d+(-1)|0;}b=new Ba;b.oe=1;b.of=1;E(b);}c=c+1|0;if(c==d){b=new CV;b.oe=1;b.of=1;E(b);}}b=new Ba;b.oe=1;b.of=1;E(b);}
let ASx=()=>{ANQ=BI(Fu);}
function KQ(){let a=this;D.call(a);a.pQ=null;a.pC=0;a.A7=0;}
let St=(a,b)=>{let c,d,e,f,g;c=a.pQ;d=c.data;e=a.pC;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=CU(f);g=d.data.length;if(e<g)g=e;CY(c,0,d,0,g);a.pQ=d;}c=d.data;f=a.pC;a.pC=f+1|0;c[f]=b;}
let QY=(a,b,c,d)=>{let e,f;if((c+d|0)<=b.pC){K_(a,b.pQ,c,d);return;}e=new V;f=new L;f.og=H(16);F(f,f.od,C(118));N(f,f.od,c,10);F(f,f.od,C(51));N(f,f.od,d,10);F(f,f.od,C(52));c=b.pC;N(f,f.od,c,10);b=Bi(f);e.oe=1;e.of=1;e.oi=b;E(e);}
let K_=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pQ;f=e.data;g=a.pC;h=g+d|0;if(h<=f.length)f=e;else{if(8>h)h=8;i=g*1.75|0;if(h>i)i=h;f=CU(i);j=f.data.length;if(g<j)j=g;CY(e,0,f,0,j);a.pQ=f;}CY(b,c,f,a.pC,d);a.pC=a.pC+d|0;}
let SB=(a,b)=>{let c,d;if(b<a.pC)return a.pQ.data[b];c=new O;d=new L;d.og=H(16);F(d,d.od,C(37));N(d,d.od,b,10);F(d,d.od,C(38));b=a.pC;N(d,d.od,b,10);d=Bi(d);c.oe=1;c.of=1;c.oi=d;E(c);}
let ABM=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.pC;if(c>=d){e=new O;f=new L;f.og=H(16);F(f,f.od,C(53));N(f,f.od,c,10);F(f,f.od,C(38));b=a.pC;N(f,f.od,b,10);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}if(b<=c){g=(c-b|0)+1|0;h=d-g|0;if(a.A7){i=a.pQ;c=b+g|0;CY(i,c,i,b,d-c|0);}else{j=c+1|0;if(h>j)j=h;i=a.pQ;CY(i,j,i,b,d-j|0);}a.pC=h;return;}e=new O;f=new L;f.og=H(16);F(f,f.od,C(54));N(f,f.od,b,10);F(f,f.od,C(55));N(f,f.od,c,10);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}
let SW=a=>{let b;if(a.pC)return a.pQ.data[0];b=new Cb;b.oe=1;b.of=1;b.oi=C(33);E(b);}
let Z1=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new V;d=new L;d.og=H(16);F(d,d.od,C(56));N(d,d.od,b,10);d=Bi(d);c.oe=1;c.of=1;c.oi=d;E(c);}e=a.pC;f=e+b|0;g=a.pQ;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=CU(h);b=i.data.length;if(e<b)b=e;CY(g,0,i,0,b);a.pQ=i;}return a.pQ;}
let AEh=G();
let NL=b=>{return Math.sin(b);}
let Wb=b=>{return Math.cos(b);}
let AT0=b=>{return Math.tan(b);}
let Fl=b=>{return Math.exp(b);}
let C$=b=>{return Math.log(b);}
let Ch=b=>{return Math.sqrt(b);}
let GY=b=>{return Math.ceil(b);}
let AWR=(b,c)=>{return D7(b,c);}
let D7=(b,c)=>{return Math.pow(b,c);}
let AQv=b=>{return By(b+PQ(b)*0.5);}
let BE=()=>{return Math.random();}
let Kt=(b,c)=>{if(b>c)c=b;return c;}
let Yq=(b,c)=>{return Math.max(b,c);}
let ASP=(b,c)=>{return Yq(b,c);}
let Z0=(b,c)=>{return Math.min(b,c);}
let A8U=(b,c)=>{return Z0(b,c);}
let J2=(b,c)=>{return Math.max(b,c);}
let AKV=(b,c)=>{return J2(b,c);}
let Jp=b=>{return Math.abs(b);}
let Lv=b=>{return Math.abs(b);}
let PQ=b=>{return Math.sign(b);}
let FJ=b=>{return Math.sign(b);}
function DY(){let a=this;D.call(a);a.pG=null;a.pU=null;a.sc=0.0;a.Ax=0.0;a.Cv=0.0;}
let BiQ=()=>{let a=new DY();ADL(a);return a;}
let ADL=a=>{let b;b=new CQ;b.pD=1;b.ox=Bs(D,16);a.pG=b;b=new KQ;b.A7=1;b.pQ=CU(16);a.pU=b;}
let RW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.pG;d=b.pG;e=d.ox;f=d.oo;g=c.ox;h=g.data;i=c.oo;j=i+f|0;if(j<=h.length)d=g;else{k=8;if(k<=j)k=j;i=i*1.75|0;if(k>i)i=k;l=g.constructor;if(l===null)d=null;else{d=l.classObject;if(d===null){d=new CN;d.oJ=l;m=d;l.classObject=m;}}l=EQ(d);if(l===null){b=new Dv;Bl(b);E(b);}if(l===BI(CO)){b=new V;Bl(b);E(b);}if(i<0){b=new D_;Bl(b);E(b);}d=EO(l.oJ,i);l=d.data;k=c.oo;n=l.length;if(k<n)n=k;Fh(g,0,d,0,n);c.ox=d;}Fh(e,0,d,c.oo,f);c.oo=j;c=a.pU;o=c.pC;if(o<=0?0:1)c.pC=o-1|0;b
=b.pU;K_(c,b.pQ,0,b.pC);}
let Ym=a=>{let b,c,d,e,f,g,h;b=a.pG;c=b.ox;d=0;e=b.oo;f=null;if(d>e){b=new V;b.oe=1;b.of=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oo=0;a.pU.pC=0;}
let Ot=a=>{let b,c,d,e,f,g,h,i,j,k;b=new L;c=a.pG;d=c.oo;b.og=H(d+32|0);e=0;while(true){if(e>=d){F(b,b.od,C(59));f=a.sc;ER(b,b.od,f);F(b,b.od,C(59));f=a.Ax;ER(b,b.od,f);F(b,b.od,C(59));f=a.Cv;ER(b,b.od,f);c=new P;g=b.og;h=g.data;d=b.od;U();i=h.length;if(d>=0&&d<=(i-0|0)){c.oh=R(g.data,0,d);return c;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}if(e>=c.oo)break;i=c.ox.data[e].tK&65535;j=b.od;Bo(b,j,j+1|0);b.og.data[j]=i;e=e+1|0;}k=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,e,10);F(b,b.od,C(38));e=c.oo;N(b,b.od,e,
10);c=new P;g=b.og;h=g.data;d=b.od;U();i=h.length;if(d>=0&&d<=(i-0|0)){c.oh=R(g.data,0,d);k.oe=1;k.of=1;k.oi=c;E(k);}b=new O;Bl(b);E(b);}
function Et(){let a=this;D.call(a);a.pI=null;a.o8=0;a.rf=0;}
let Gp=(a,b)=>{let c,d,e,f,g;c=a.pI;d=c.data;e=a.o8;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=X(f);g=d.data.length;if(e<g)g=e;CY(c,0,d,0,g);a.pI=d;}c=d.data;f=a.o8;a.o8=f+1|0;c[f]=b;}
let AHO=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.pI;e=d.data;f=a.o8;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=X(h);i=g.data.length;if(f<i)i=f;CY(d,0,g,0,i);a.pI=g;}e=g.data;j=a.o8;e[j]=b;e[j+1|0]=c;a.o8=j+2|0;}
let GN=(a,b)=>{let c,d;if(b<a.o8)return a.pI.data[b];c=new O;d=new L;d.og=H(16);F(d,d.od,C(37));N(d,d.od,b,10);F(d,d.od,C(38));b=a.o8;N(d,d.od,b,10);d=Bi(d);c.oe=1;c.of=1;c.oi=d;E(c);}
let KH=(a,b,c)=>{let d,e;if(b<a.o8){a.pI.data[b]=c;return;}d=new O;e=new L;e.og=H(16);F(e,e.od,C(37));N(e,e.od,b,10);F(e,e.od,C(38));b=a.o8;N(e,e.od,b,10);e=Bi(e);d.oe=1;d.of=1;d.oi=e;E(d);}
let Ts=a=>{return a.pI.data[a.o8-1|0];}
let Ze=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new V;d=new L;d.og=H(16);F(d,d.od,C(56));N(d,d.od,b,10);d=Bi(d);c.oe=1;c.of=1;c.oi=d;E(c);}e=a.o8;f=e+b|0;g=a.pI;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=X(h);b=i.data.length;if(e<b)b=e;CY(g,0,i,0,b);a.pI=i;}return a.pI;}
let AQa=a=>{let b,c,d,e,f,g,h;if(a.rf){b=a.pI;c=1;d=0;e=a.o8;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=Ff();g.$id$=h;}return a.$id$;}
let A9y=(a,b)=>{let c,d,e,f,g,h;if(b===a)return 1;if(!a.rf)return 0;if(!(b instanceof Et))return 0;c=b;if(!c.rf)return 0;d=a.o8;if(d!=c.o8)return 0;e=a.pI;f=c.pI;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
let A30=a=>{let b,c,d,e,f,g,h,i;if(!a.o8)return C(58);b=a.pI;c=new Kx;d=H(32);e=d.data;c.pj=d;f=c.o1;if(f==e.length)DQ(c,f+1|0);b=b.data;e=c.pj.data;g=c.o1;c.o1=g+1|0;e[g]=91;Oq(c,b[0],0,48);h=1;while(h<a.o8){i=C(59).oh.length;f=c.o1+i|0;if(f>c.pj.data.length)DQ(c,f);H5(C(59),0,i,c.pj,c.o1);c.o1=f;Oq(c,b[h],0,48);h=h+1|0;}f=c.o1;if(f==c.pj.data.length)DQ(c,f+1|0);c:{b=c.pj;e=b.data;g=c.o1;f=g+1|0;c.o1=f;e[g]=93;if(!f)c=C(43);else{c=new P;U();g=e.length;if(f<0)break c;if(f>(g-0|0))break c;c.oh=R(b.data,0,f);}return c;}c
=new O;c.oe=1;c.of=1;E(c);}
let LL=G(0);
let Lj=G();
let Gv=G(0);
function JA(){let a=this;Lj.call(a);a.tF=0;a.qv=null;a.Ct=0;a.zO=0.0;a.uE=0;}
let BfQ=(a,b)=>{let c=new JA();A94(c,a,b);return c;}
let J1=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let A94=(a,b,c)=>{let d,e,f;if(b>=0&&c>0.0){b=J1(b);a.tF=0;d=Bs(Gt,b);e=d.data;a.qv=d;a.zO=c;a.uE=e.length*c|0;return;}f=new V;f.oe=1;f.of=1;E(f);}
let Xj=(a,b,c,d)=>{let e,f;e=a.qv.data[c];while(e!==null){if(e.t3==d){f=e.q0;if(b!==f&&!b.cG(f)?0:1)break;}e=e.q_;}return e;}
let JX=(a,b,c)=>{let d,e,f,g,h,i;if(b===null){d=a.qv.data;e=d[0];while(e!==null&&e.q0!==null){e=e.q_;}if(e===null){a.Ct=a.Ct+1|0;f=null;e=new Gt;b=null;e.q0=f;e.rv=b;e.t3=0;e.q_=d[0];d[0]=e;g=a.tF+1|0;a.tF=g;if(g>a.uE)S3(a,d.length);}}else{h=b.cF();d=a.qv.data;i=h&(d.length-1|0);e=d[i];while(e!==null){if(e.t3==h){f=e.q0;if(b!==f&&!b.cG(f)?0:1)break;}e=e.q_;}if(e===null){a.Ct=a.Ct+1|0;e=new Gt;f=null;e.q0=b;e.rv=f;e.t3=h;d=a.qv.data;e.q_=d[i];d[i]=e;g=a.tF+1|0;a.tF=g;if(g>a.uE)S3(a,d.length);}}f=e.rv;e.rv=c;return f;}
let S3=(a,b)=>{let c,d,e,f,g,h,i,j;c=J1(!b?1:b<<1);d=Bs(Gt,c);e=d.data;f=0;c=c-1|0;while(true){g=a.qv.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.t3&c;j=h.q_;h.q_=e[i];e[i]=h;h=j;}f=f+1|0;}a.qv=d;a.uE=e.length*a.zO|0;}
let AYz=(b,c)=>{return b!==c&&!b.cG(c)?0:1;}
let Ro=G(0);
let TM=G();
let Eu=G();
let AI2=null;let ADx=null;let CJ=null;let CA=null;let AGh=null;let A6Y=null;let B1=null;let B$=null;let UJ=null;let UK=null;let AAU=b=>{let c,d,e;c=new P;d=H(1);e=d.data;e[0]=b;U();c.oh=R(d.data,0,e.length);return c;}
let ACA=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new O;e.oe=1;e.of=1;E(e);}
let AFa=b=>{return (55296|(b-65536|0)>>10&1023)&65535;}
let AAI=b=>{return (56320|b&1023)&65535;}
let Th=()=>{if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return CA;}
let On=()=>{if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}return CJ;}
let C1=(b,c)=>{let d,e;d=b.Ht.data;if(c<d.length)return c+d[c]|0;d=b.FN;e=AHc(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;}
let AHc=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=B9(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;}
let Kg=b=>{let c,d,e,f,g,h;if(ADx===null){if(UJ===null)UJ=AD9();ADx=A$f((UJ.value!==null?Bv(UJ.value):null));}c=ADx.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=B9(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);}
let Jj=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
let Go=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new V;c.oe=1;c.of=1;E(c);}if(b<65536){d=H(1);d.data[0]=b&65535;return d;}return Tc([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);}
let Dt=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(AGh===null){if(UK===null)UK=ABh();AGh=AWN((UK.value!==null?Bv(UK.value):null));}e=AGh.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.Do)c=f+1|0;else{d=g.Ep;if(b>=d)return g.Es.data[b-d|0];d=f-1|0;}}return 0;}
let I0=b=>{b:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break b;if(b>159)break b;}return 1;}return Dt(b)!=16?0:1;}
let AYa=()=>{AI2=BI(AKf);A6Y=Bs(Eu,128);}
let ES=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
let Fa=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
let AD9=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
let ABh=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let AC$=G();
let A5n=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
let JK=G();
let BY=null;let Fc=null;let JI=null;let Fh=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Nz(b)&&(e+f|0)<=Nz(d)){c:{o:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CN;h.oJ=g;i=h;g.classObject=i;}}j=EQ(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CN;h.oJ=g;i=h;g.classObject=i;}}i=EQ(h);if(j!==null&&i!==null){if(j===i)break o;if(!(j.oJ.$meta.primitive?1:0)&&!(i.oJ.$meta.primitive?1:0)){k=b;l=0;m
=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p=i.oJ;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&T2(g.constructor,p)?1:0)){Ni(b,c,d,e,l);b=new J0;b.oe=1;b.of=1;E(b);}l=l+1|0;m=o;}Ni(b,c,d,e,f);return;}if(!(j.oJ.$meta.primitive?1:0))break c;if(i.oJ.$meta.primitive?1:0)break o;else break c;}b=new J0;b.oe=1;b.of=1;E(b);}}Ni(b,c,d,e,f);return;}b=new J0;b.oe=1;b.of=1;E(b);}b=new O;b.oe=1;b.of=1;E(b);}d=new Dv;d.oe=1;d.of=1;d.oi=C(119);E(d);}
let CY=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Nz(b)&&(e+f|0)<=Nz(d)){Ni(b,c,d,e,f);return;}b=new O;b.oe=1;b.of=1;E(b);}
let Ni=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}}
let F4=()=>{return By((new Date()).getTime());}
let MY=()=>{let b,c;if(JI===null){b=new L4;MM(b,11);EG(b,C(120),C(121));EG(b,C(84),C(122));EG(b,C(123),C(124));EG(b,C(125),C(126));EG(b,C(127),C(128));EG(b,C(129),C(130));EG(b,C(131),C(121));EG(b,C(132),C(124));c=new L4;MM(c,11);c.ID=b;JI=c;}}
let Qu=(b,c)=>{MY();return EG(JI,b,c);}
let RE=G(0);
function Oz(){let a=this;D.call(a);a.pu=0;a.HK=0;a.GE=0;a.q1=0;}
let X9=a=>{return a.pu;}
let WF=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;b:{Bf5();switch(ATL.data[d.on]){case 1:if(a.q1){if(BY===null){e=new Do;e.p$=DX;d=new L;d.og=H(16);e.o_=d;e.p7=H(32);e.qf=0;Dn();e.qa=Du;BY=e;}e=BY;g=new L;g.og=H(16);F(g,g.od,C(133));F(g,g.od,c===null?C(2):c);d=new P;h=g.og;i=h.data;j=g.od;U();k=i.length;if(j>=0&&j<=(k-0|0)){d.oh=R(h.data,0,j);g=e.o_;F(g,g.od,d);j=g.od;Bo(g,j,j+1|0);g.og.data[j]=10;Dy(e);}else{c=new O;Bl(c);E(c);}}a.pu=a.pu+1|0;d=new HU;d.sl=a;d.vh=b;d.r_=c;d.sG=f;Dq();c=null;e=null;d.rk=new D;d.rj=1;d.sv
=e;d.sZ=c;k=DL;DL=k+1|0;d.sV=I(k);c=new F3;c.sx=d;GL(c);break b;case 2:d=null;g=new Oi;g.zS=a;g.xO=f;g.G8=d;g.Gy=e;if(a.q1){if(BY===null){e=new Do;e.p$=DX;d=new L;Dm(d);d.og=H(16);e.o_=d;e.p7=H(32);e.qf=0;Dn();e.qa=Du;BY=e;}f=BY;d=new L;d.og=H(16);DI(d,d.od,DJ(C(133)));DI(d,d.od,c===null?C(2):DJ(c));e=new P;h=d.og;i=h.data;l=d.od;K1(0,l,i.length);e.oh=R(h.data,0,l);MN(f,e);}a.pu=a.pu+1|0;d=new HV;d.sa=a;d.tm=b;d.si=c;d.sS=g;Dq();c=null;e=null;d.rk=new D;d.rj=1;d.sv=e;d.sZ=c;k=DL;DL=k+1|0;d.sV=I(k);c=new F3;c.sx
=d;GL(c);break b;case 3:break;case 4:SC(a,b,c,A_Y(a,f));break b;case 5:YQ(f,c,null);break b;default:c=new Bc;e=new L;F_(e);CT(CT(e,C(134)),d);Pd(c,Cx(e));E(c);}SC(a,b,c,f);}}
let VW=(a,b,c,d)=>{let e,f,g,h,i;if(a.q1){if(BY===null){e=new Do;e.p$=DX;f=new L;f.og=H(16);e.o_=f;e.p7=H(32);e.qf=0;Dn();e.qa=Du;BY=e;}e=BY;f=new L;f.og=H(16);F(f,f.od,C(133));F(f,f.od,c===null?C(2):c);g=Bi(f);f=e.o_;F(f,f.od,g);h=f.od;Bo(f,h,h+1|0);f.og.data[h]=10;Dy(e);}a.pu=a.pu+1|0;f=new HU;f.sl=a;f.vh=b;f.r_=c;f.sG=d;Dq();c=null;d=null;f.rk=new D;f.rj=1;f.sv=d;f.sZ=c;i=DL;DL=i+1|0;f.sV=I(i);c=new F3;c.sx=f;GL(c);}
let Ms=(a,b,c,d)=>{let e,f,g,h;if(a.q1){if(BY===null){e=new Do;e.p$=DX;f=new L;f.og=H(16);e.o_=f;e.p7=H(32);e.qf=0;Dn();e.qa=Du;BY=e;}e=BY;f=new L;f.og=H(16);F(f,f.od,C(135));F(f,f.od,c===null?C(2):c);g=Bi(f);f=e.o_;F(f,f.od,g);h=f.od;Bo(f,h,h+1|0);f.og.data[h]=10;Dy(e);}a.pu=a.pu+1|0;e=new XMLHttpRequest();f=new Oh;f.xy=a;f.uD=e;f.De=b;f.BS=c;f.DG=d;f=CK(f,"handleEvent");e.onreadystatechange=f;f=new Jn;f.DL=a;f.Bp=d;d=CK(f,"handleEvent");e.onprogress=d;e.open("GET",Cp(c),!!b);e.setRequestHeader("Content-Type",
"text/plain; charset=utf-8");e.send();}
let SC=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.q1){if(BY===null){e=new Do;e.p$=DX;f=new L;f.og=H(16);e.o_=f;e.p7=H(32);e.qf=0;Dn();e.qa=Du;BY=e;}e=BY;f=new L;f.og=H(16);F(f,f.od,C(133));F(f,f.od,c===null?C(2):c);g=new P;h=f.og;i=h.data;j=f.od;U();k=i.length;if(j>=0&&j<=(k-0|0)){g.oh=R(h.data,0,j);f=e.o_;F(f,f.od,g);k=f.od;Bo(f,k,k+1|0);f.og.data[k]=10;Dy(e);}else{c=new O;c.oe=1;c.of=1;Bt(c);E(c);}}a.pu=a.pu+1|0;f=new HV;f.sa=a;f.tm=b;f.si=c;f.sS=d;Dq();c=null;d=null;f.rk=new D;f.rj=1;f.sv=d;f.sZ=c;l=DL;DL=l+1|
0;f.sV=I(l);c=new F3;c.sx=f;GL(c);}
let O2=G();
let KF=null;let AIR=()=>{return KF;}
let M5=G();
let D0=0;let KA=0;let A2z=()=>{D0=1;}
let Qo=G(0);
function MG(){let a=this;D.call(a);a.w8=null;a.oX=null;a.HQ=null;a.wI=null;a.FW=null;a.Ig=null;a.Cw=0.0;a.D4=M;a.A1=M;a.pN=0.0;a.Cj=0.0;a.E5=0;}
let AHR=0;let KO=null;let JL=()=>{JL=Bk(MG);AYN();}
let BbZ=a=>{let b=new MG();AFd(b,a);return b;}
let AFd=(a,b)=>{let c,d,e,f,g,h,i,j,k;JL();a.Cw=0.0;a.D4=F4();a.A1=I(-1);a.pN=0.0;a.Cj=0.0;a.HQ=b;Jv();c=window.document;d=b.GF;a.oX=c.getElementById(Cp(d));e=AMx();d=!!b.HH;e.alpha=d;d=!!b.G2;e.antialias=d;d=!!b.Hc;e.stencil=d;d=!!b.FR;e.premultipliedAlpha=d;d=!!b.Hu;e.preserveDrawingBuffer=d;f=a.oX;if(b.DV)a.w8=f.getContext("webgl2",e);a:{if(b.DV){d=a.w8;if(d!==null){if(!b.DM)f=BgC(d);else{f=new R7;ABA(f,d);}a.FW=f;a.wI=f;break a;}}f=f.getContext("webgl",e);a.w8=f;if(!b.DM)d=Bgj(f);else{d=new U$;TU(d,f);}a.wI
=d;}d=a.wI.eZ(7938);c=a.wI.eZ(7936);g=a.wI.eZ(7937);f=new Pe;RL();Yt(f,PD,d,c,g);a.Ig=f;h=b.Bm;if(!(h<0&&b.wm<0)){if(h&&b.wm?1:0)Mx(a,h,b.wm);else{i=Jq;h=i.ry.document.documentElement.clientWidth-b.C1|0;j=i.ry.document.documentElement.clientHeight-b.E8|0;k=!b.B7?1.0:devicePixelRatio||1;Mx(a,k*h|0,k*j|0);}}b=a.oX;d=new Ue;d.H_=a;VS(b,CK(d,"fullscreenChanged"));}
let WR=a=>{let b,c,d;b=F4();c=Bz(B4(b,a.D4))/1000.0;a.pN=c;a.D4=b;c=a.Cj+c;a.Cj=c;d=a.E5+1|0;a.E5=d;if(c>1.0){a.Cw=d;a.Cj=0.0;a.E5=0;}}
let AHY=a=>{return a.oX.width;}
let ABq=a=>{return a.oX.height;}
let SG=a=>{return a.oX.width;}
let Qm=a=>{return a.oX.height;}
let BV=a=>{return a.pN;}
let Ct=a=>{return a.Cw|0;}
let Mx=(a,b,c)=>{let d,e,f,g,h,i;d=a.oX;e=b;d.width=e;d=a.oX;e=c;d.height=e;if(a.HQ.B7){f=devicePixelRatio||1;e=a.oX.style;g=b/f;AZI();h=new L;h.og=H(16);MR(h,h.od,g);F(h,h.od,C(136));i=Bi(h);e.setProperty("width",Cp(i));f=c/f;h=new L;h.og=H(16);MR(h,h.od,f);F(h,h.od,C(136));d=Bi(h);e.setProperty("height",Cp(d));}}
let AYN=()=>{AHR=0;KO=Ei(51,0.800000011920929);}
let VS=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}}
function ABP(){let a=this;D.call(a);a.EL=null;a.x9=null;a.B5=null;a.zy=null;a.zB=null;a.G9=null;a.Aa=null;a.ED=0;a.BE=null;}
let Bby=(a,b,c)=>{let d=new ABP();A3B(d,a,b,c);return d;}
let A3B=(a,b,c,d)=>{let e;a.EL=F7(51,0.800000011920929);a.x9=F7(51,0.800000011920929);a.B5=F7(51,0.800000011920929);a.zy=F7(51,0.800000011920929);a.zB=F7(51,0.800000011920929);a.G9=F7(51,0.800000011920929);e=new CQ;e.pD=1;e.ox=Bs(D,16);a.Aa=e;a.ED=(-1);a.BE=b;AAd(a,c,d);}
let AAd=(a,b,c)=>{let d,e,f;d=c.rR;if(d.GW!==null){e=b.ownerDocument;f=new Pq;f.JA=a;e.addEventListener("dragenter",CK(f,"handleEvent"),!!0);f=new Pr;f.IK=a;e.addEventListener("dragover",CK(f,"handleEvent"),!!0);f=new Pn;f.GZ=a;f.Fk=c;f.GM=d;e.addEventListener("drop",CK(f,"handleEvent"));}}
let XZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(X4(a,b.Ew)){b.Ao=b.HT;b.zu=1;b.wz=0;b.se=0;return 0;}if(b.se)return 0;b.wz=0;b.zu=0;b.se=1;c=b.Ew;d=b.Fw;e=b.GX;f=new Pp;f.IR=a;f.rr=b;b=KF;g=a.BE;h=new L;h.og=H(16);i=h.od;if(g===null)g=C(2);G3(h,i,g);G3(h,h.od,C(91));g=new P;j=h.og;k=j.data;l=h.od;U();m=k.length;if(l>=0&&l<=(m-0|0)){g.oh=R(j.data,0,l);h=new L;h.og=H(16);F(h,h.od,g);F(h,h.od,c===null?C(2):c);g=new P;k=h.og;j=k.data;m=h.od;i=j.length;if(m>=0&&m<=(i-0|0)){g.oh=R(k.data,0,m);h=new Pm;h.B8=a;h.r5=f;h.AY
=d;h.BQ=c;WF(b,1,g,d,e,h);return 1;}b=new O;Bl(b);E(b);}b=new O;BZ(b);E(b);}
let Jm=(a,b,c,d)=>{b:{BcE();switch(AJO.data[b.on]){case 1:break;case 2:B3(a.x9,c,d);break b;case 3:B3(a.zB,c,d);break b;case 4:B3(a.B5,c,d);break b;case 5:B3(a.EL,c,null);break b;default:break b;}B3(a.zy,c,d);}}
let Wz=(a,b)=>{let c,d,e,f,$$je;if(Dl(a.zy,b)<0?0:1){k:{try{c=A0m(Y6(ACp(a.zy,b),C(137)));}catch($$e){$$je=BH($$e);if($$je instanceof MX){break k;}else{throw $$e;}}return c;}return null;}if(Dl(a.x9,b)<0?0:1){b=new NE;d=BX(1);e=d.data.length;b.y0=d;b.ua=0;b.Df=0;b.xW=0+e|0;return b;}if(Dl(a.zB,b)<0?0:1){c=a.zB;f=Dl(c,b);b=f<0?null:c.qg.data[f];c=new Rr;c.EM=b;return c;}if(!(Dl(a.B5,b)<0?0:1))return null;b=new NE;d=BX(1);e=d.data.length;b.y0=d;b.ua=0;b.Df=0;b.xW=0+e|0;return b;}
let X4=(a,b)=>{let c;c=Dl(a.zy,b)<0?0:1;return !c&&!(Dl(a.x9,b)<0?0:1)&&!(Dl(a.zB,b)<0?0:1)&&!(Dl(a.B5,b)<0?0:1)&&!(Dl(a.EL,b)<0?0:1)?0:1;}
let Ew=G();
let AQR=(a,b)=>{return;}
let T0=G(0);
let FQ=G(0);
function AFv(){let a=this;D.call(a);a.pK=null;a.yR=0;a.tf=null;a.sC=null;a.p6=null;a.p5=null;a.Ab=null;a.Ac=null;a.Cc=null;a.w_=0;a.wk=null;a.yf=0;a.ph=null;a.DR=null;a.Dh=null;a.qP=null;a.to=M;a.wN=0;}
let BdD=a=>{let b=new AFv();ASw(b,a);return b;}
let AWg=b=>{let c,d,e,f;c=J9;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(Jp(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
let ASw=(a,b)=>{a.yR=0;a.tf=Ei(20,0.800000011920929);a.sC=N1(20);a.p6=X(20);a.p5=X(20);a.Ab=X(20);a.Ac=X(20);a.Cc=AJZ(51,0.800000011920929);a.w_=0;a.wk=N1(256);a.yf=0;a.ph=N1(256);a.DR=N1(5);a.Dh=AJZ(51,0.800000011920929);a.wN=1;a.pK=b;AFp(a);}
let AFp=a=>{let b;b=a.pK.ownerDocument;b.addEventListener("mousedown",CK(a,"handleEvent"),!!0);b.addEventListener("mouseup",CK(a,"handleEvent"),!!0);b.addEventListener("mousemove",CK(a,"handleEvent"),!!0);b.addEventListener("wheel",CK(a,"handleEvent"),!!0);b.addEventListener("keydown",CK(a,"handleEvent"),!!0);b.addEventListener("keyup",CK(a,"handleEvent"),!!0);b.addEventListener("keypress",CK(a,"handleEvent"),!!0);a.pK.addEventListener("touchstart",CK(a,"handleEvent"),!!1);a.pK.addEventListener("touchmove",
CK(a,"handleEvent"),!!1);a.pK.addEventListener("touchcancel",CK(a,"handleEvent"),!!1);a.pK.addEventListener("touchend",CK(a,"handleEvent"),!!1);}
let AFC=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b:{c=Bv(b.type);if(Gg(c,C(138))){window.focus();d=b.target;e=a.pK;if(d!==e?0:1){f=a.sC.data;if(!f[0]){a.wN=1;a.yR=1;f[0]=1;g=Me(b.button);ACZ(a.Cc,g);a.DR.data[g]=1;a.Ab.data[0]=0;a.Ac.data[0]=0;if(!LS(a)){h=If(a,b,a.pK);i=Is(a,b,a.pK);a.p6.data[0]=h;a.p5.data[0]=i;}else{f=a.p6.data;f[0]=f[0]+b.movementX|0;f=a.p5.data;f[0]=f[0]+b.movementY|0;}a.to=GD();j=a.qP;if(j!==null)j.fg(a.p6.data[0],a.p5.data[0],0,Me(b.button));b.preventDefault();b.stopPropagation();break b;}}k
=If(a,b,e);l=Is(a,b,a.pK);if(!(k>=0.0&&k<=AHY(Bb)&&l>=0.0&&l<=ABq(Bb)))a.wN=0;return;}if(Gg(c,C(139))){if(!a.sC.data[0])return;AAL(a.Cc,Me(b.button));f=a.sC;f.data[0]=a.Cc.r9<=0?0:1;if(!LS(a)){GJ(a,0,If(a,b,a.pK)-a.p6.data[0]|0,Is(a,b,a.pK)-a.p5.data[0]|0);a.p6.data[0]=If(a,b,a.pK);a.p5.data[0]=Is(a,b,a.pK);}else{GJ(a,0,b.movementX|0,b.movementY|0);f=a.p6.data;f[0]=f[0]+b.movementX|0;f=a.p5.data;f[0]=f[0]+b.movementY|0;}a.to=GD();a.sC.data[0]=0;j=a.qP;if(j!==null)j.fj(a.p6.data[0],a.p5.data[0],0,Me(b.button));}
else if(!Gg(c,C(140))){if(Gg(c,C(141))){if(a.qP!==null){m=AWg(b);a.qP.fl(0.0,m|0);}a.to=GD();}else if(Gg(c,C(142))){a.yR=1;n=b.changedTouches;o=0;p=n.length;while(o<p){j=n.item(o);q=j.identifier;e=a.tf;r=AHy(a);C6(e,q,Cc(r));a.sC.data[r]=1;a.p6.data[r]=IY(a,j,a.pK);a.p5.data[r]=Iq(a,j,a.pK);a.Ab.data[r]=0;a.Ac.data[r]=0;j=a.qP;if(j!==null)j.fg(a.p6.data[r],a.p5.data[r],r,0);o=o+1|0;}a.to=GD();b.preventDefault();}}else{if(!LS(a)){h=If(a,b,a.pK);i=Is(a,b,a.pK);GJ(a,0,h-a.p6.data[0]|0,i-a.p5.data[0]|0);a.p6.data[0]
=h;a.p5.data[0]=i;}else{GJ(a,0,b.movementX|0,b.movementY|0);f=a.p6.data;f[0]=f[0]+b.movementX|0;f=a.p5.data;f[0]=f[0]+b.movementY|0;}a.to=GD();j=a.qP;if(j!==null){if(!a.sC.data[0])j.fq(a.p6.data[0],a.p5.data[0]);else j.fr(a.p6.data[0],a.p5.data[0],0);}}}if(Gg(c,C(143))){n=b.changedTouches;o=0;p=n.length;while(o<p){s=n.item(o);q=s.identifier;t=D3(Mt(a.tf,q));GJ(a,t,IY(a,s,a.pK)-a.p6.data[t]|0,Iq(a,s,a.pK)-a.p5.data[t]|0);a.p6.data[t]=IY(a,s,a.pK);a.p5.data[t]=Iq(a,s,a.pK);j=a.qP;if(j!==null)j.fr(a.p6.data[t],
a.p5.data[t],t);o=o+1|0;}a.to=GD();b.preventDefault();}if(Gg(c,C(144))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=D3(Mt(a.tf,q));Jd(a.tf,q);a.sC.data[t]=0;h=IY(a,s,a.pK);i=Iq(a,s,a.pK);GJ(a,t,h-a.p6.data[t]|0,i-a.p5.data[t]|0);f=a.p6.data;f[t]=h;v=a.p5.data;v[t]=i;j=a.qP;if(j!==null)j.fj(f[t],v[t],t,0);o=o+1|0;}a.to=GD();b.preventDefault();}if(Gg(c,C(145))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=D3(Mt(a.tf,q));Jd(a.tf,q);a.sC.data[t]=0;h=IY(a,
s,a.pK);i=Iq(a,s,a.pK);GJ(a,t,h-a.p6.data[t]|0,i-a.p5.data[t]|0);f=a.p6.data;f[t]=h;v=a.p5.data;v[t]=i;j=a.qP;if(j!==null)j.fj(f[t],v[t],t,0);o=o+1|0;}a.to=GD();b.preventDefault();}}
let VG=(a,b)=>{let c,d,e,f,g,h,i;c=Bv(b.type);if(c===C(146))d=1;else if(!(C(146) instanceof P))d=0;else{e=C(146);d=c.oh!==e.oh?0:1;}if(d&&a.wN){e:{f=Yu(b.keyCode);g=0;switch(f){case 67:g=8;break e;case 112:g=127;break e;default:}}e=a.Dh;if(!f)d=e.xn;else{h=e.th;d=Z(Q(W(I(f),B(2135587861, 2654435769)),e.wv));g:{while(true){i=h.data[d];if(!i){d= -(d+1|0)|0;break g;}if(i==f)break;d=(d+1|0)&e.tO;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.qP;if(e!==null){e.fu(f);a.qP.fv(g);}}
else{h=a.wk.data;if(!h[f]){a.w_=a.w_+1|0;h[f]=1;a.yf=1;a.ph.data[f]=1;e=a.qP;if(e!==null)e.fu(f);}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===C(147))d=1;else if(!(C(147) instanceof P))d=0;else{e=C(147);d=c.oh!==e.oh?0:1;}if(d&&a.wN){d=b.charCode&65535;e=a.qP;if(e!==null)e.fv(d);if(d==9){b.preventDefault();b.stopPropagation();}}else{if(c===C(148))d=1;else if(!(C(148) instanceof P))d=0;else{e=C(148);d=c.oh!==e.oh?0:1;}if(d&&a.wN){f=Yu(b.keyCode);e=a.Dh;if(!f)d=e.xn;else{h=e.th;d=Z(Q(W(I(f),
B(2135587861, 2654435769)),e.wv));y:{while(true){g=h.data[d];if(!g){d= -(d+1|0)|0;break y;}if(g==f)break;d=(d+1|0)&e.tO;}}d=d<0?0:1;}if(d)b.preventDefault();h=a.wk.data;if(h[f]){a.w_=a.w_-1|0;h[f]=0;}e=a.qP;if(e!==null)e.fw(f);if(f==61){b.preventDefault();b.stopPropagation();}}}}}
let AHy=a=>{let b,c,d;b=0;while(true){if(b>=20)return (-1);c=a.tf;if(b>=(-128)&&b<=127){Gj();d=Gr.data[b+128|0];}else{d=new FS;d.rG=b;}if(!AA9(c,d,0))break;b=b+1|0;}return b;}
let PH=a=>{let b,c,d;b:{if(a.yR){a.yR=0;b=0;while(true){c=a.DR.data;if(b>=c.length)break b;c[b]=0;b=b+1|0;}}}d:{if(a.yf){a.yf=0;d=0;while(true){c=a.ph.data;if(d>=c.length)break d;c[d]=0;d=d+1|0;}}}}
let GJ=(a,b,c,d)=>{a.Ab.data[b]=c;a.Ac.data[b]=d;}
let If=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Or(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(149))g=1;else if(!(C(149) instanceof P))g=0;else{c=C(149);g=f.oh!==c.oh?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+FJ(d)*0.5|0;}
let Is=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Qp(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(149))g=1;else if(!(C(149) instanceof P))g=0;else{c=C(149);g=f.oh!==c.oh?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+FJ(d)*0.5|0;}
let IY=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Or(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(149))g=1;else if(!(C(149) instanceof P))g=0;else{c=C(149);g=f.oh!==c.oh?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+FJ(d)*0.5|0;}
let Iq=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Qp(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(149))g=1;else if(!(C(149) instanceof P))g=0;else{c=C(149);g=f.oh!==c.oh?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+FJ(d)*0.5|0;}
let Qp=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
let Or=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
let Bu=(a,b)=>{if(b==(-1))return a.w_<=0?0:1;if(b>=0&&b<=255)return a.wk.data[b];return 0;}
let B7=(a,b)=>{if(b==(-1))return a.yf;if(b>=0&&b<=255)return a.ph.data[b];return 0;}
let W8=(a,b)=>{a.qP=b;}
let LS=a=>{return A8Y(a.pK)?1:0;}
let A8Y=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;}
let AJv=(a,b)=>{AFC(a,b);VG(a,b);}
let P7=G(0);
function QL(){D.call(this);this.AZ=null;}
function Ui(){D.call(this);this.Iz=null;}
let Ud=G(0);
let Pz=G();
let So=G(0);
function AGe(){let a=this;D.call(a);a.Jp=0;a.BR=0;a.I_=null;a.Dm=null;}
let Bbz=()=>{let a=new AGe();AMF(a);return a;}
let AMF=a=>{let b;a.Jp=0;a.BR=1;b=new TE;b.Bz=a;a.I_=b;a.Dm=C(43);}
let AGS=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}}
let Fi=G();
let Eg=null;let Bb=null;let Be1=null;let Be=null;let PV=null;let BfE=null;let Cd=null;let Bq=null;let GK=null;let UA=G(0);
let Uj=G(0);
function ADB(){D.call(this);this.F_=null;}
let BgQ=()=>{let a=new ADB();AKk(a);return a;}
let AKk=a=>{a.F_=null;a.F_=Bgv();}
function VH(){D.call(this);this.Cx=null;}
let BfT=a=>{let b=new VH();AZJ(b,a);return b;}
let AZJ=(a,b)=>{a.Cx=b;}
let ADp=(a,b)=>{let c,d,$$je;c=Bv(a.Cx.t4.ry.document.visibilityState);if(C(150)===c)d=1;else if(!(c instanceof P))d=0;else{c=c;d=C(150).oh!==c.oh?0:1;}if(!d){b=a.Cx.zR;Hq(b);e:{try{c=PI(b);while(Tl(c)){Y8(Sz(c));}EV(b);break e;}catch($$e){$$je=BH($$e);c=$$je;}EV(b);E(c);}}else{b=a.Cx.zR;Hq(b);f:{try{c=PI(b);while(Tl(c)){AAe(Sz(c));}EV(b);break f;}catch($$e){$$je=BH($$e);c=$$je;}EV(b);E(c);}}}
let A67=(a,b)=>{ADp(a,b);}
function VI(){D.call(this);this.x3=null;}
let A_2=a=>{let b=new VI();AKc(b,a);return b;}
let AKc=(a,b)=>{a.x3=b;}
let AIi=(a,b)=>{let c,d,e,f,g;c=a.x3.t4.ry.document.documentElement.clientWidth;b=a.x3;d=c-b.rR.C1|0;e=b.t4.ry.document.documentElement.clientHeight;b=a.x3;f=b.rR;c=e-f.E8|0;if(d>0&&c>0){if(b.ug!==null){if(f.B7){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Mx(a.x3.ug,d,c);}return;}}
let AVR=(a,b)=>{AIi(a,b);}
let V=G(B0);
let AQq=a=>{let b=new V();AIq(b,a);return b;}
let AIq=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
let AHt=G();
let K1=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new O;e.oe=1;e.of=1;E(e);}
let ACn=G();
let NG=(b,c)=>{let d,e,f,g;if(b<0){d=new V;e=new L;e.og=H(16);F(e,e.od,C(151));N(e,e.od,b,10);e=Bi(e);d.oe=1;d.of=1;d.oi=e;E(d);}f=GY(b/c)|0;if(2>f)f=2;g=M0(f);if(g<=1073741824)return g;d=new V;e=new L;e.og=H(16);F(e,e.od,C(152));N(e,e.od,b,10);e=Bi(e);d.oe=1;d.of=1;d.oi=e;E(d);}
let Tr=G(E3);
let AZQ=null;let AAw=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new CV;b.oe=1;b.of=1;b.oi=C(77);E(b);}f=0;if(c>=0&&c<b.oh.length){e:{switch(b.oh.charCodeAt(c)){case 43:g=c+1|0;break e;case 45:f=1;g=c+1|0;break e;default:}g=c;}h=M;i=I(e);h:{while(g<d){j=g+1|0;if(g<0)break h;if(g>=b.oh.length)break h;k=Kg(b.oh.charCodeAt(g));if(k<0){l=new CV;b=Cv(b,c,d);if(b===null)b=C(2);m=new L;m.og=H(16);F(m,m.od,C(78));F(m,m.od,b);b=new P;n=m.og;o=n.data;d=m.od;e=o.length;if(d>=0&&d<=(e-0|0)){b.oh=R(n.data,
0,d);l.oe=1;l.of=1;l.oi=b;E(l);}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}if(k>=e){l=new CV;p=Cv(b,c,d);if(p===null)p=C(2);b=new L;Jo(b,16);Nb(b,C(79));CT(CT(EX(b,e),C(72)),p);LF(l,Cx(b));E(l);}h=T(W(i,h),I(k));if(GH(h,M)){if(j==d&&Dh(h,B(0, 2147483648))&&f)return B(0, 2147483648);l=new CV;b=AC3(Pg(b,c,d));m=Dw();CT(CT(m,C(80)),b);LF(l,Cx(m));E(l);}g=j;}if(f)h=HJ(h);return h;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new CV;l=new L;l.og=H(16);F(l,l.od,C(81));N(l,l.od,e,10);m=new P;n=l.og;o=n.data;d
=l.od;U();e=o.length;if(d>=0&&d<=(e-0|0)){m.oh=R(n.data,0,d);b.oe=1;b.of=1;b.oi=m;E(b);}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let Ed=b=>{let c,d;if(Dh(b,M))return 64;c=0;d=Q(b,32);if(Ej(d,M))c=32;else d=b;b=Q(d,16);if(Dh(b,M))b=d;else c=c|16;d=Q(b,8);if(Dh(d,M))d=b;else c=c|8;b=Q(d,4);if(Dh(b,M))b=d;else c=c|4;d=Q(b,2);if(Dh(d,M))d=b;else c=c|2;if(Ej(Q(d,1),M))c=c|1;return (64-c|0)-1|0;}
let KT=b=>{b=T(Q(Bd(b,B(2863311530, 2863311530)),1),Bd(b,B(1431655765, 1431655765)));b=T(Q(Bd(b,B(3435973836, 3435973836)),2),Bd(b,B(858993459, 858993459)));b=T(Q(Bd(b,B(1886417008, 1886417008)),4),Bd(b,B(117901063, 117901063)));b=T(Q(Bd(b,B(251662080, 251662080)),8),Bd(b,B(983055, 983055)));b=T(Q(Bd(b,B(2031616, 2031616)),16),Bd(b,B(31, 31)));return Z(T(Q(Bd(b,B(0, 63)),32),Bd(b,I(63))));}
let HY=b=>{b=B2(Q(Bd(b,B(2863311530, 2863311530)),1),BP(Bd(b,B(1431655765, 1431655765)),1));b=B2(Q(Bd(b,B(3435973836, 3435973836)),2),BP(Bd(b,B(858993459, 858993459)),2));b=B2(Q(Bd(b,B(4042322160, 4042322160)),4),BP(Bd(b,B(252645135, 252645135)),4));b=B2(Q(Bd(b,B(4278255360, 4278255360)),8),BP(Bd(b,B(16711935, 16711935)),8));b=B2(Q(Bd(b,B(4294901760, 4294901760)),16),BP(Bd(b,B(65535, 65535)),16));return B2(Q(Bd(b,B(0, 4294967295)),32),BP(Bd(b,B(4294967295, 0)),32));}
let EJ=(b,c)=>{return Bfj(b,c);}
let AB9=(b,c)=>{return A_8(b,c);}
let E9=(b,c)=>{return BbA(b,c);}
let A2d=()=>{AZQ=BI(AQ8);}
let AEX=G();
let AMx=()=>{return {};}
let Nn=G(0);
function Jk(){let a=this;D.call(a);a.ol=null;a.vB=0;a.uq=0;a.qS=0;a.Ik=0;a.Jd=0;a.yY=0;a.vR=0;a.pS=null;a.qt=null;a.rp=null;a.JC=null;a.It=null;a.wn=null;a.q7=null;a.sh=0;a.zF=null;a.vG=null;a.yS=null;a.zN=null;a.I4=null;}
let Bgj=a=>{let b=new Jk();TU(b,a);return b;}
let TU=(a,b)=>{a.vB=1;a.uq=1;a.qS=1;a.Ik=1;a.Jd=1;a.yY=1;a.vR=1;a.pS=Ei(51,0.800000011920929);a.qt=Ei(51,0.800000011920929);a.rp=Ei(51,0.800000011920929);a.JC=Ei(51,0.800000011920929);a.It=Ei(51,0.800000011920929);a.wn=Ei(51,0.800000011920929);a.q7=Ei(51,0.800000011920929);a.sh=0;a.zF=new Float32Array(40000);a.vG=new Int32Array(12000);a.yS=new Int16Array(12000);a.zN=new Int8Array(12000);a.I4=new Uint8Array(240000);a.ol=b;b.pixelStorei(37441,0);}
let Mq=(a,b)=>{let c,d,e,f,g;if(KA){c=(!Fm(b,Fr)?null:b.uh.o4.data).buffer;d=b.ok;e=b.oj-d|0;return new Float32Array(c,d,e);}if((b.oj-b.ok|0)>a.zF.length)a.zF=new Float32Array(b.oj-b.ok|0);e=b.ok;d=0;while(true){f=b.oj;if(e>=f)break;c=a.zF;g=PN(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.zF;e=f-b.ok|0;return c.subarray(0,e);}
let P0=(a,b)=>{let c,d,e,f,g;if(KA){c=(!Fm(b,Fr)?null:b.ud.o4.data).buffer;d=b.ok;e=b.oj-d|0;return new Int16Array(c,d,e);}if((b.oj-b.ok|0)>a.yS.length)a.yS=new Int16Array(b.oj-b.ok|0);e=b.ok;d=0;while(true){f=b.oj;if(e>=f)break;c=a.yS;g=AGv(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.yS;e=f-b.ok|0;return c.subarray(0,e);}
let U_=(a,b)=>{let c,d,e,f,g;if(KA){c=(!Fm(b,Fr)?null:b.fM()).buffer;d=b.ok;e=b.oj-d|0;return new Int32Array(c,d,e);}if((b.oj-b.ok|0)>a.vG.length)a.vG=new Int32Array(b.oj-b.ok|0);e=b.ok;d=0;while(true){f=b.oj;if(e>=f)break;c=a.vG;g=b.bi(e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.vG;e=f-b.ok|0;return c.subarray(0,e);}
let Nq=(a,b)=>{let c,d,e,f,g;if(KA)return !Fm(b,Fr)?null:b.o4.data;if((b.oj-b.ok|0)>a.zN.length)a.zN=new Int8Array(b.oj-b.ok|0);c=b.ok;d=0;while(true){e=b.oj;if(c>=e)break;f=a.zN;g=Vw(b,c);d;f[d]=g;c=c+1|0;d=d+1|0;}f=a.zN;c=e-b.ok|0;return f.subarray(0,c);}
let AVj=(a,b)=>{if((b.oj-b.ok|0)>a.vG.length)a.vG=new Int32Array(b.oj-b.ok|0);}
let AIH=(a,b)=>{let c,d,e,f,g;c=a.q7;d=a.sh;if(!d)c=!c.oR?null:c.oP;else{e=c.oN;f=Z(Q(W(I(d),B(2135587861, 2654435769)),c.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==d)break;f=(f+1|0)&c.oQ;}}c=f<0?null:c.oO.data[f];}c=c;if(!b)c=!c.oR?null:c.oP;else{e=c.oN;d=Z(Q(W(I(b),B(2135587861, 2654435769)),c.oT));q:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break q;}if(f==b)break;d=(d+1|0)&c.oQ;}}c=d<0?null:c.oO.data[d];}BR();return c===null?null:c.oW;}
let ANZ=(a,b,c)=>{let d,e,f,g,h,i;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();h=d===null?null:d.oW;d=a.qt;if(!c)d=!d.oR?null:d.oP;else{e=d.oN;b=Z(Q(W(I(c),B(2135587861, 2654435769)),d.oT));i:{while(true){g=e.data[b];if(!g){b= -(b+1|0)|0;break i;}if(g==c)break;b=(b+1|0)&d.oQ;}}d=b<0?null:d.oO.data[b];}i=d===null?null:d.oW;a.ol.attachShader(h,i);}
let AVJ=(a,b,c)=>{let d,e,f,g,h;d=a.ol;e=a.rp;if(!c)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(c),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.bindBuffer(b,e);}
let AZH=(a,b,c)=>{let d,e,f,g,h;d=a.ol;e=a.wn;if(!c)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(c),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.bindTexture(b,e);}
let A1L=(a,b,c,d,e)=>{a.ol.blendFuncSeparate(b,c,d,e);}
let Ph=(a,b,c,d,e)=>{let f,g;if(d instanceof Fk){f=a.ol;d=Mq(a,d);f.bufferData(b,d,e);}else if(d instanceof IM){f=a.ol;d=U_(a,d);f.bufferData(b,d,e);}else if(d instanceof IQ){f=a.ol;d=P0(a,d);f.bufferData(b,d,e);}else if(d instanceof Gk){f=a.ol;g=Nq(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Bc;f.oe=1;f.of=1;f.oi=C(153);E(f);}a.ol.bufferData(b,c,e);}}
let SY=(a,b,c,d,e)=>{let f,g;if(e instanceof Fk){f=a.ol;e=Mq(a,e);f.bufferSubData(b,c,e);}else if(e instanceof IM){f=a.ol;g=U_(a,e);f.bufferSubData(b,c,g);}else if(e instanceof IQ){f=a.ol;e=P0(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof Gk)){f=new Bc;f.oe=1;f.of=1;f.oi=C(153);E(f);}f=a.ol;e=Nq(a,e);f.bufferSubData(b,c,e);}}
let A8J=(a,b)=>{a.ol.clear(b);}
let ALm=(a,b,c,d,e)=>{a.ol.clearColor(b,c,d,e);}
let AOH=(a,b)=>{let c,d,e,f;c=a.qt;if(!b)c=!c.oR?null:c.oP;else{d=c.oN;e=Z(Q(W(I(b),B(2135587861, 2654435769)),c.oT));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.oQ;}}c=e<0?null:c.oO.data[e];}BR();c=c===null?null:c.oW;a.ol.compileShader(c);}
let AWe=a=>{let b,c;b=a.ol.createProgram();c=a.vB;a.vB=c+1|0;C6(a.pS,c,C_(b));return c;}
let ASn=(a,b)=>{let c,d;c=a.ol.createShader(b);d=a.uq;a.uq=d+1|0;C6(a.qt,d,C_(c));return d;}
let AUj=(a,b)=>{a.ol.depthMask(!!b);}
let ASc=(a,b)=>{a.ol.disable(b);}
let A5v=(a,b)=>{a.ol.disableVertexAttribArray(b);}
let ALR=(a,b,c,d)=>{a.ol.drawArrays(b,c,d);}
let APd=(a,b,c,d,e)=>{let f,g;f=a.ol;g=e.ok;f.drawElements(b,c,d,g);}
let AQ4=(a,b,c,d,e)=>{a.ol.drawElements(b,c,d,e);}
let AVu=(a,b)=>{a.ol.enable(b);}
let A81=(a,b)=>{a.ol.enableVertexAttribArray(b);}
let AEt=a=>{let b,c;b=a.ol.createBuffer();c=a.qS;a.qS=c+1|0;C6(a.rp,c,C_(b));return c;}
let AIG=(a,b)=>{a.ol.generateMipmap(b);}
let AVH=a=>{let b,c;b=a.ol.createTexture();c=a.yY;a.yY=c+1|0;C6(a.wn,c,C_(b));return c;}
let R0=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.ol;g=a.pS;if(!b)g=!g.oR?null:g.oP;else{h=g.oN;i=Z(Q(W(I(b),B(2135587861, 2654435769)),g.oT));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.oQ;}}g=i<0?null:g.oO.data[i];}BR();g=g===null?null:g.oW;g=f.getActiveAttrib(g,c);Ft(d,g.size);Ft(e,g.type);d.ok=0;d.oj=d.oD;d.ow=(-1);e.ok=0;e.oj=e.oD;e.ow=(-1);return Bv(g.name);}
let Tp=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.ol;g=a.pS;if(!b)g=!g.oR?null:g.oP;else{h=g.oN;i=Z(Q(W(I(b),B(2135587861, 2654435769)),g.oT));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.oQ;}}g=i<0?null:g.oO.data[i];}BR();g=g===null?null:g.oW;g=f.getActiveUniform(g,c);Ft(d,g.size);Ft(e,g.type);d.ok=0;d.oj=d.oD;d.ow=(-1);e.ok=0;e.oj=e.oD;e.ow=(-1);return Bv(g.name);}
let A02=(a,b,c)=>{let d,e,f,g,h;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();h=d===null?null:d.oW;return a.ol.getAttribLocation(h,Cp(c));}
let LN=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Bc;c.oe=1;c.of=1;c.oi=C(154);E(c);}NV(c,0,a.ol.getParameter(b));c.ok=0;c.oj=c.oD;c.ow=(-1);}
let AV_=(a,b)=>{let c,d,e,f,g;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;return Bv(c.getProgramInfoLog(d));}
let TP=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.ol;f=a.pS;if(!b)f=!f.oR?null:f.oP;else{g=f.oN;h=Z(Q(W(I(b),B(2135587861, 2654435769)),f.oT));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.oQ;}}f=h<0?null:f.oO.data[h];}BR();f=f===null?null:f.oW;Ft(d,e.getProgramParameter(f,c));}else{f=a.ol;e=a.pS;if(!b)e=!e.oR?null:e.oP;else{g=e.oN;i=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));w:{while(true){h=g.data[i];if(!h){i= -(i+1|0)|0;break w;}if(h==b)break;i=(i
+1|0)&e.oQ;}}e=i<0?null:e.oO.data[i];}BR();e=e===null?null:e.oW;Ft(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.ok=0;d.oj=d.oD;d.ow=(-1);}
let APD=(a,b)=>{let c,d,e,f,g;c=a.ol;d=a.qt;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;return Bv(c.getShaderInfoLog(d));}
let OZ=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.ol;f=a.qt;if(!b)f=!f.oR?null:f.oP;else{g=f.oN;h=Z(Q(W(I(b),B(2135587861, 2654435769)),f.oT));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.oQ;}}f=h<0?null:f.oO.data[h];}BR();f=f===null?null:f.oW;Ft(d,e.getShaderParameter(f,c));}else{f=a.ol;e=a.qt;if(!b)e=!e.oR?null:e.oP;else{g=e.oN;h=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));w:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break w;}if(i==b)break;h=(h+1|0)&e.oQ;}}e
=h<0?null:e.oO.data[h];}BR();e=e===null?null:e.oW;Ft(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.ok=0;d.oj=d.oD;d.ow=(-1);}
let ANk=(a,b)=>{return Bv(a.ol.getParameter(b));}
let A1u=(a,b,c)=>{let d,e,f,g,h,i;d=a.ol;e=a.pS;if(!b)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d=d.getUniformLocation(e,Cp(c));if(d===null)return (-1);c=a.q7;if(!b)c=!c.oR?null:c.oP;else{i=c.oN;h=Z(Q(W(I(b),B(2135587861, 2654435769)),c.oT));v:{while(true){g=i.data[h];if(!g){h= -(h+1|0)|0;break v;}if(g==b)break;h=(h+1|0)&c.oQ;}}c=h<0?null
:c.oO.data[h];}c=c;if(c===null){c=Ei(51,0.800000011920929);C6(a.q7,b,c);}h=a.vR;a.vR=h+1|0;C6(c,h,C_(d));return h;}
let AYF=(a,b)=>{let c,d,e,f,g;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.linkProgram(d);}
let ALQ=(a,b,c)=>{a.ol.pixelStorei(b,c);}
let AW9=(a,b,c)=>{let d,e,f,g,h;d=a.ol;e=a.qt;if(!b)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.shaderSource(e,Cp(c));}
let T3=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.ol;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.oj>4){if(!KA)l=!(j instanceof Fk)?Uint8Array.from(Nq(a,j)):Mq(a,j);else{m=!Fm(j,Fr)?null:j.o4.data;if(!(j instanceof Fk)){n=j.oj-j.ok|0;o=m.byteOffset+j.ok|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.oj-j.ok|0;o=m.byteOffset+j.ok|0;l=new Float32Array(m.buffer,o,n);}}a.ol.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=AHh(j,0);JL();j=KO;if(!p)j=!j.oR?null:j.oP;else{q=j.oN;n=Z(Q(W(I(p),B(2135587861, 2654435769)),
j.oT));q:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break q;}if(o==p)break;n=(n+1|0)&j.oQ;}}j=n<0?null:j.oO.data[n];}k=j;r=k.sU;if(r===null&&k.pE!==null?1:0){j=a.ol;s=k.pE.zI;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.wt!==null?1:0){j=a.ol;s=k.wt;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.xV!==null?1:0){j=a.ol;s=k.xV;j.texImage2D(b,c,d,h,i,s);}else{j=a.ol;Gu(k);s=k.sU;j.texImage2D(b,c,d,h,i,s);}}}
let AQo=(a,b,c,d)=>{a.ol.texParameterf(b,c,d);}
let ART=(a,b,c,d)=>{let e,f;e=a.ol;f=d;e.texParameterf(b,c,f);}
let ASb=(a,b,c)=>{let d,e,f,g,h,i;d=a.q7;e=a.sh;if(!e)d=!d.oR?null:d.oP;else{f=d.oN;g=Z(Q(W(I(e),B(2135587861, 2654435769)),d.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.oQ;}}d=g<0?null:d.oO.data[g];}d=d;if(!b)d=!d.oR?null:d.oP;else{f=d.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));q:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break q;}if(h==b)break;g=(g+1|0)&d.oQ;}}d=g<0?null:d.oO.data[g];}BR();i=d===null?null:d.oW;a.ol.uniform1i(i,c);}
let ADE=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.q7;f=a.sh;if(!f)g=!g.oR?null:g.oP;else{h=g.oN;i=Z(Q(W(I(f),B(2135587861, 2654435769)),g.oT));n:{while(true){c=h.data[i];if(!c){i= -(i+1|0)|0;break n;}if(c==f)break;i=(i+1|0)&g.oQ;}}g=i<0?null:g.oO.data[i];}g=g;if(!b)g=!g.oR?null:g.oP;else{h=g.oN;c=Z(Q(W(I(b),B(2135587861, 2654435769)),g.oT));q:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break q;}if(f==b)break;c=(c+1|0)&g.oQ;}}g=c<0?null:g.oO.data[c];}BR();j=g===null?null:g.oW;g=a.ol;k="uniformMatrix4fv";l=!!d;if
(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];c;m[c]=n;c=c+1|0;}}g[k](j,l,m);}
let AJ$=(a,b)=>{let c,d,e,f,g;a.sh=b;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.useProgram(d);}
let A3_=(a,b,c,d,e,f,g)=>{a.ol.vertexAttribPointer(b,c,d,!!e,f,g);}
let AXt=(a,b,c,d,e)=>{a.ol.viewport(b,c,d,e);}
let Tz=G(0);
function NX(){let a=this;Jk.call(a);a.o3=null;a.IM=null;a.JM=0;a.I6=null;a.In=0;a.Jm=null;a.IX=0;a.yq=null;a.x_=0;a.JH=null;}
let BgC=a=>{let b=new NX();ABA(b,a);return b;}
let ABA=(a,b)=>{TU(a,b);a.IM=Ei(51,0.800000011920929);a.JM=1;a.I6=Ei(51,0.800000011920929);a.In=1;a.Jm=Ei(51,0.800000011920929);a.IX=1;a.yq=Ei(51,0.800000011920929);a.x_=1;a.JH=new Uint32Array(12000);a.o3=b;}
let A1S=(a,b)=>{let c,d,e,f,g;c=a.o3;d=a.yq;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.bindVertexArray(d);}
let A5h=(a,b,c,d,e)=>{a.o3.drawArraysInstanced(b,c,d,e);}
let A$U=(a,b,c,d,e,f)=>{a.o3.drawElementsInstanced(b,c,d,e,f);}
let A5S=(a,b,c)=>{let d,e,f,g;d=c.ok;e=0;while(e<b){f=a.o3.createVertexArray();g=a.x_;a.x_=g+1|0;C6(a.yq,g,C_(f));Ft(c,g);e=e+1|0;}CH(c,d);}
let A3o=(a,b,c)=>{if(b!=34045)LN(a,b,c);else{NV(c,0,a.o3.getParameter(b));c.ok=0;c.oj=c.oD;c.ow=(-1);}}
let R7=G(NX);
let A08=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.o3;d=a.yq;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.bindVertexArray(d);b=a.o3.getError();if(!b)return;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=(g-0|0)){i.oh
=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let AZc=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.o3.drawArraysInstanced(b,c,d,e);b=a.o3.getError();if(!b)return;f=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;Bl(f);E(f);}
let A9X=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.o3.drawElementsInstanced(b,c,d,e,f);b=a.o3.getError();if(!b)return;g=new Bc;h=BB(b,4);i=new L;i.og=H(16);F(i,i.od,C(155));N(i,i.od,b,10);F(i,i.od,C(59));b=i.od;if(h===null)h=C(2);F(i,b,h);j=new P;k=i.og;l=k.data;c=i.od;U();d=l.length;if(c>=0&&c<=(d-0|0)){j.oh=R(k.data,0,c);g.oe=1;g.of=1;g.oi=j;E(g);}g=new O;Bl(g);E(g);}
let AJ3=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.ok;e=0;while(e<b){f=a.o3.createVertexArray();g=a.x_;a.x_=g+1|0;C6(a.yq,g,C_(f));Ft(c,g);e=e+1|0;}CH(c,d);b=a.o3.getError();if(!b)return;c=new Bc;h=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(h===null)h=C(2);F(f,b,h);i=new P;j=f.og;k=j.data;e=f.od;U();l=k.length;if(e>=0&&e<=(l-0|0)){i.oh=R(j.data,0,e);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let AKx=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ol;e=a.wn;if(!c)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(c),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.bindTexture(b,e);b=a.o3.getError();if(!b)return;d=new Bc;i=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.og;k=f.data;c=e.od;U();g=k.length;if(c>=0&&c<=(g-0|0)){j.oh
=R(f.data,0,c);d.oe=1;d.of=1;d.oi=j;E(d);}d=new O;Bl(d);E(d);}
let AUm=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.clear(b);b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let AQt=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.ol.clearColor(b,c,d,e);f=a.o3.getError();if(!f)return;g=new Bc;h=BB(f,4);i=new L;i.og=H(16);F(i,i.od,C(155));N(i,i.od,f,10);F(i,i.od,C(59));f=i.od;if(h===null)h=C(2);F(i,f,h);j=new P;k=i.og;l=k.data;m=i.od;U();n=l.length;if(m>=0&&m<=(n-0|0)){j.oh=R(k.data,0,m);g.oe=1;g.of=1;g.oi=j;E(g);}g=new O;Bl(g);E(g);}
let AYw=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.depthMask(!!b);b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let A85=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.disable(b);b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let A0M=(a,b,c,d)=>{let e,f,g,h,i,j;a.ol.drawArrays(b,c,d);b=a.o3.getError();if(!b)return;e=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();d=j.length;if(c>=0&&c<=(d-0|0)){h.oh=R(i.data,0,c);e.oe=1;e.of=1;e.oi=h;E(e);}e=new O;Bl(e);E(e);}
let A6x=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.ol;g=e.ok;f.drawElements(b,c,d,g);b=a.o3.getError();if(!b)return;e=new Bc;h=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(h===null)h=C(2);F(f,b,h);i=new P;j=f.og;k=j.data;c=f.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);e.oe=1;e.of=1;e.oi=i;E(e);}e=new O;Bl(e);E(e);}
let A7I=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.enable(b);b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let AW1=(a,b)=>{return Bv(a.ol.getParameter(b));}
let AXQ=(a,b,c)=>{let d,e,f,g,h,i,j;a.ol.pixelStorei(b,c);b=a.o3.getError();if(!b)return;d=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=g;E(d);}d=new O;Bl(d);E(d);}
let A4R=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;T3(a,b,c,d,e,f,g,h,i,j);b=a.o3.getError();if(!b)return;j=new Bc;k=BB(b,4);l=new L;l.og=H(16);F(l,l.od,C(155));N(l,l.od,b,10);F(l,l.od,C(59));b=l.od;if(k===null)k=C(2);F(l,b,k);m=new P;n=l.og;o=n.data;c=l.od;U();d=o.length;if(c>=0&&c<=(d-0|0)){m.oh=R(n.data,0,c);j.oe=1;j.of=1;j.oi=m;E(j);}j=new O;Bl(j);E(j);}
let A0C=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.ol.texParameterf(b,c,d);b=a.o3.getError();if(!b)return;e=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();k=j.length;if(c>=0&&c<=(k-0|0)){h.oh=R(i.data,0,c);e.oe=1;e.of=1;e.oi=h;E(e);}e=new O;Bl(e);E(e);}
let ANB=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ol.viewport(b,c,d,e);b=a.o3.getError();if(!b)return;f=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;Bl(f);E(f);}
let A3P=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();h=d===null?null:d.oW;d=a.qt;if(!c)d=!d.oR?null:d.oP;else{e=d.oN;b=Z(Q(W(I(c),B(2135587861, 2654435769)),d.oT));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.oQ;}}d=b<0?null:d.oO.data[b];}i=d===null?null:d.oW;a.ol.attachShader(h,i);b
=a.o3.getError();if(!b)return;d=new Bc;j=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(j===null)j=C(2);F(h,b,j);i=new P;e=h.og;k=e.data;c=h.od;U();f=k.length;if(c>=0&&c<=(f-0|0)){i.oh=R(e.data,0,c);d.oe=1;d.of=1;d.oi=i;E(d);}d=new O;Bl(d);E(d);}
let AVh=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ol;e=a.rp;if(!c)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(c),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.bindBuffer(b,e);b=a.o3.getError();if(!b)return;d=new Bc;i=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.og;k=f.data;c=e.od;U();g=k.length;if(c>=0&&c<=(g-0|0)){j.oh
=R(f.data,0,c);d.oe=1;d.of=1;d.oi=j;E(d);}d=new O;Bl(d);E(d);}
let AMR=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ol.blendFuncSeparate(b,c,d,e);b=a.o3.getError();if(!b)return;f=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;Bl(f);E(f);}
let AQH=(a,b,c,d,e)=>{let f,g,h,i,j;Ph(a,b,c,d,e);b=a.o3.getError();if(!b)return;d=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();e=j.length;if(c>=0&&c<=(e-0|0)){h.oh=R(i.data,0,c);d.oe=1;d.of=1;d.oi=h;E(d);}d=new O;Bl(d);E(d);}
let AVe=(a,b,c,d,e)=>{let f,g,h,i,j;SY(a,b,c,d,e);b=a.o3.getError();if(!b)return;e=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();d=j.length;if(c>=0&&c<=(d-0|0)){h.oh=R(i.data,0,c);e.oe=1;e.of=1;e.oi=h;E(e);}e=new O;Bl(e);E(e);}
let ARv=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.qt;if(!b)c=!c.oR?null:c.oP;else{d=c.oN;e=Z(Q(W(I(b),B(2135587861, 2654435769)),c.oT));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.oQ;}}c=e<0?null:c.oO.data[e];}BR();g=c===null?null:c.oW;a.ol.compileShader(g);b=a.o3.getError();if(!b)return;c=new Bc;h=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(h===null)h=C(2);F(g,b,h);i=new P;d=g.og;j=d.data;e=g.od;U();f=j.length;if(e>=0&&e<=(f-0|0)){i.oh=R(d.data,
0,e);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let A$s=a=>{let b,c,d,e,f,g,h,i,j;b=a.ol.createProgram();c=a.vB;a.vB=c+1|0;C6(a.pS,c,C_(b));d=a.o3.getError();if(!d)return c;b=new Bc;e=BB(d,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,d,10);F(f,f.od,C(59));d=f.od;if(e===null)e=C(2);F(f,d,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);b.oe=1;b.of=1;b.oi=g;E(b);}b=new O;Bl(b);E(b);}
let A6S=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol.createShader(b);d=a.uq;a.uq=d+1|0;C6(a.qt,d,C_(c));b=a.o3.getError();if(!b)return d;c=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;d=f.od;U();j=i.length;if(d>=0&&d<=(j-0|0)){g.oh=R(h.data,0,d);c.oe=1;c.of=1;c.oi=g;E(c);}c=new O;Bl(c);E(c);}
let AV8=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.disableVertexAttribArray(b);b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let AYP=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ol.drawElements(b,c,d,e);b=a.o3.getError();if(!b)return;f=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;Bl(f);E(f);}
let A6V=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.enableVertexAttribArray(b);b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let A8N=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.generateMipmap(b);b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let AOz=(a,b,c,d,e)=>{let f,g,h,i,j;f=R0(a,b,c,d,e);b=a.o3.getError();if(!b)return f;d=new Bc;g=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.og;i=h.data;c=e.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){f.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=f;E(d);}d=new O;Bl(d);E(d);}
let AUk=(a,b,c,d,e)=>{let f,g,h,i,j;f=Tp(a,b,c,d,e);b=a.o3.getError();if(!b)return f;d=new Bc;g=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.og;i=h.data;c=e.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){f.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=f;E(d);}d=new O;Bl(d);E(d);}
let A48=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();h=d===null?null:d.oW;b=a.ol.getAttribLocation(h,Cp(c));f=a.o3.getError();if(!f)return b;c=new Bc;i=BB(f,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,f,10);F(d,d.od,C(59));b=d.od;if(i===null)i=C(2);F(d,b,i);h=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=(g
-0|0)){h.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=h;E(c);}c=new O;Bl(c);E(c);}
let AM0=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)LN(a,b,c);else{NV(c,0,a.o3.getParameter(b));c.ok=0;c.oj=c.oD;c.ow=(-1);}b=a.o3.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let ALs=(a,b,c,d)=>{let e,f,g,h,i,j;TP(a,b,c,d);b=a.o3.getError();if(!b)return;d=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=g;E(d);}d=new O;Bl(d);E(d);}
let AJf=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c=Bv(c.getProgramInfoLog(d));b=a.o3.getError();if(!b)return c;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let A$r=(a,b,c,d)=>{let e,f,g,h,i,j;OZ(a,b,c,d);b=a.o3.getError();if(!b)return;d=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=g;E(d);}d=new O;Bl(d);E(d);}
let AYh=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol;d=a.qt;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c=Bv(c.getShaderInfoLog(d));b=a.o3.getError();if(!b)return c;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let AJg=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ol;e=a.pS;if(!b)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;c=d.getUniformLocation(e,Cp(c));if(c===null)g=(-1);else{d=a.q7;if(!b)d=!d.oR?null:d.oP;else{f=d.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));w:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break w;}if(h==b)break;g=(g+1|0)&d.oQ;}}d=g<0?
null:d.oO.data[g];}d=d;if(d===null){d=Ei(51,0.800000011920929);C6(a.q7,b,d);}g=a.vR;a.vR=g+1|0;C6(d,g,C_(c));}b=a.o3.getError();if(!b)return g;c=new Bc;i=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.og;j=f.data;g=d.od;U();h=j.length;if(g>=0&&g<=(h-0|0)){e.oh=R(f.data,0,g);c.oe=1;c.of=1;c.oi=e;E(c);}c=new O;Bl(c);E(c);}
let A9N=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.linkProgram(d);b=a.o3.getError();if(!b)return;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=(g-0|0)){i.oh
=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let AXO=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ol;e=a.qt;if(!b)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.shaderSource(e,Cp(c));b=a.o3.getError();if(!b)return;c=new Bc;i=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.og;j=f.data;g=d.od;U();h=j.length;if(g>=0&&g<=(h-0|0))
{e.oh=R(f.data,0,g);c.oe=1;c.of=1;c.oi=e;E(c);}c=new O;Bl(c);E(c);}
let AJ8=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.ol;f=d;e.texParameterf(b,c,f);b=a.o3.getError();if(!b)return;e=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);e.oe=1;e.of=1;e.oi=i;E(e);}e=new O;Bl(e);E(e);}
let AKM=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.q7;e=a.sh;if(!e)d=!d.oR?null:d.oP;else{f=d.oN;g=Z(Q(W(I(e),B(2135587861, 2654435769)),d.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.oQ;}}d=g<0?null:d.oO.data[g];}d=d;if(!b)d=!d.oR?null:d.oP;else{f=d.oN;e=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.oQ;}}d=e<0?null:d.oO.data[e];}BR();i=d===null?null:d.oW;a.ol.uniform1i(i,c);b=a.o3.getError();if
(!b)return;d=new Bc;i=BB(b,4);j=new L;j.og=H(16);F(j,j.od,C(155));N(j,j.od,b,10);F(j,j.od,C(59));b=j.od;if(i===null)i=C(2);F(j,b,i);k=new P;f=j.og;l=f.data;c=j.od;U();e=l.length;if(c>=0&&c<=(e-0|0)){k.oh=R(f.data,0,c);d.oe=1;d.of=1;d.oi=k;E(d);}d=new O;Bl(d);E(d);}
let A$Z=(a,b)=>{let c,d,e,f,g,h,i,j;a.sh=b;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.useProgram(d);b=a.o3.getError();if(!b)return;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=(g-0|0))
{i.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let A7p=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.ol.vertexAttribPointer(b,c,d,!!e,f,g);b=a.o3.getError();if(!b)return;h=new Bc;i=BB(b,4);j=new L;j.og=H(16);F(j,j.od,C(155));N(j,j.od,b,10);F(j,j.od,C(59));b=j.od;if(i===null)i=C(2);F(j,b,i);k=new P;l=j.og;m=l.data;c=j.od;U();d=m.length;if(c>=0&&c<=(d-0|0)){k.oh=R(l.data,0,c);h.oe=1;h.of=1;h.oi=k;E(h);}h=new O;Bl(h);E(h);}
function Pe(){let a=this;D.call(a);a.E7=0;a.Dt=0;a.DB=0;a.I1=null;a.Jn=null;a.vf=null;a.H3=C(156);}
let BiR=(a,b,c,d)=>{let e=new Pe();Yt(e,a,b,c,d);return e;}
let Yt=(a,b,c,d,e)=>{a.H3=C(156);RL();if(b===AA4){Hf();a.vf=Un;}else if(b===AGA){Hf();a.vf=Un;}else if(b===A7U){Hf();a.vf=U7;}else if(b===A6B){Hf();a.vf=U7;}else if(b!==PD){Hf();a.vf=A4n;}else{Hf();a.vf=AD6;}b=a.vf;Hf();if(b===Un)M4(a,C(157),c);else if(b===AD6)M4(a,C(158),c);else if(b===U7)M4(a,C(159),c);else{a.E7=(-1);a.Dt=(-1);a.DB=(-1);d=C(43);e=C(43);}a.I1=d;a.Jn=e;}
let M4=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=Pi(Hz(b,0),c);if(H9(d)){b=d.qY;e=b.q3;if(!e){b=new Cb;b.oe=1;b.of=1;Bt(b);E(b);}f=B9(1,b.r$);if(f>=0){b=new O;U();c=new L;Dm(c);c.og=H(16);N(c,c.od,1,10);c=Bi(c);b.oe=1;b.of=1;b.oi=c;E(b);}g=b.pJ.data;if(g[2]<0)h=null;else{b=b.sD;if(!e){b=new Cb;b.oe=1;b.of=1;Bt(b);E(b);}if(f>=0){b=new O;U();c=new L;Dm(c);c.og=H(16);N(c,c.od,1,10);c=Bi(c);b.oe=1;b.of=1;b.oi=c;E(b);}i=g[2];if(!e)E(Bfv());if(f>=0)E(BfZ(AFR(1)));h=Pg(b,i,g[3]);}g=(AE7(h,C(160))).data;a.E7=MZ(a,g[0],2);j=g.length;a.Dt
=j<2?0:MZ(a,g[1],0);a.DB=j<3?0:MZ(a,g[2],0);}else{h=Eg;b=new L;b.og=H(16);F(b,b.od,C(161));F(b,b.od,c);k=Bi(b);if(h.xs>=2){if(BY===null){c=new Do;c.p$=DX;b=new L;b.og=H(16);c.o_=b;c.p7=H(32);c.qf=0;Dn();c.qa=Du;BY=c;}h=BY;b=new L;b.og=H(16);F(b,b.od,C(156));F(b,b.od,C(72));j=b.od;if(k===null)k=C(2);F(b,j,k);c=Bi(b);b=h.o_;F(b,b.od,c);i=b.od;Bo(b,i,i+1|0);b.og.data[i]=10;Dy(h);}a.E7=2;a.Dt=0;a.DB=0;}}
let MZ=(a,b,c)=>{let d,e,f,g,h,$$je;b:{try{d=Dd(b);}catch($$e){$$je=BH($$e);if($$je instanceof CV){break b;}else{throw $$e;}}return d;}e=Eg;f=new L;f.og=H(16);F(f,f.od,C(162));F(f,f.od,b);F(f,f.od,C(163));N(f,f.od,c,10);b=Bi(f);if(e.xs>=1){if(Fc===null){e=new Do;e.p$=Km;f=new L;f.og=H(16);e.o_=f;e.p7=H(32);e.qf=0;Dn();e.qa=Du;Fc=e;}e=Fc;f=new L;f.og=H(16);F(f,f.od,C(164));F(f,f.od,C(72));d=f.od;if(b===null)b=C(2);F(f,d,b);g=Bi(f);b=e.o_;F(b,b.od,g);h=b.od;Bo(b,h,h+1|0);b.og.data[h]=10;Dy(e);}return c;}
let D4=G(BW);
let AA4=null;let A7U=null;let BdM=null;let A6B=null;let PD=null;let AGA=null;let BaE=null;let RL=()=>{RL=Bk(D4);AZ4();}
let AZ4=()=>{let b,c,d,e,f,g;b=new D4;RL();b.oq=C(4);b.on=0;AA4=b;c=new D4;c.oq=C(165);c.on=1;A7U=c;d=new D4;d.oq=C(166);d.on=2;BdM=d;e=new D4;e.oq=C(167);e.on=3;A6B=e;f=new D4;f.oq=C(168);f.on=4;PD=f;g=new D4;g.oq=C(169);g.on=5;AGA=g;BaE=S(D4,[b,c,d,e,f,g]);}
let Up=G(0);
function Ue(){D.call(this);this.H_=null;}
let A0F=a=>{return;}
let U$=G(Jk);
let A9_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ol;e=a.wn;if(!c)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(c),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.bindTexture(b,e);b=a.ol.getError();if(!b)return;d=new Bc;i=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.og;k=f.data;c=e.od;U();g=k.length;if(c>=0&&c<=(g-0|0)){j.oh
=R(f.data,0,c);d.oe=1;d.of=1;d.oi=j;E(d);}d=new O;Bl(d);E(d);}
let AZU=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.clear(b);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let AL$=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.ol.clearColor(b,c,d,e);f=a.ol.getError();if(!f)return;g=new Bc;h=BB(f,4);i=new L;i.og=H(16);F(i,i.od,C(155));N(i,i.od,f,10);F(i,i.od,C(59));f=i.od;if(h===null)h=C(2);F(i,f,h);j=new P;k=i.og;l=k.data;m=i.od;U();n=l.length;if(m>=0&&m<=(n-0|0)){j.oh=R(k.data,0,m);g.oe=1;g.of=1;g.oi=j;E(g);}g=new O;Bl(g);E(g);}
let AQG=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.depthMask(!!b);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let A$E=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.disable(b);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let AOG=(a,b,c,d)=>{let e,f,g,h,i,j;a.ol.drawArrays(b,c,d);b=a.ol.getError();if(!b)return;e=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();d=j.length;if(c>=0&&c<=(d-0|0)){h.oh=R(i.data,0,c);e.oe=1;e.of=1;e.oi=h;E(e);}e=new O;Bl(e);E(e);}
let AV0=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.ol;g=e.ok;f.drawElements(b,c,d,g);b=a.ol.getError();if(!b)return;e=new Bc;h=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(h===null)h=C(2);F(f,b,h);i=new P;j=f.og;k=j.data;c=f.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);e.oe=1;e.of=1;e.oi=i;E(e);}e=new O;Bl(e);E(e);}
let AKi=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.enable(b);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let APy=(a,b)=>{return Bv(a.ol.getParameter(b));}
let ARA=(a,b,c)=>{let d,e,f,g,h,i,j;a.ol.pixelStorei(b,c);b=a.ol.getError();if(!b)return;d=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=g;E(d);}d=new O;Bl(d);E(d);}
let AM2=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;T3(a,b,c,d,e,f,g,h,i,j);b=a.ol.getError();if(!b)return;j=new Bc;k=BB(b,4);l=new L;l.og=H(16);F(l,l.od,C(155));N(l,l.od,b,10);F(l,l.od,C(59));b=l.od;if(k===null)k=C(2);F(l,b,k);m=new P;n=l.og;o=n.data;c=l.od;U();d=o.length;if(c>=0&&c<=(d-0|0)){m.oh=R(n.data,0,c);j.oe=1;j.of=1;j.oi=m;E(j);}j=new O;Bl(j);E(j);}
let A0S=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.ol.texParameterf(b,c,d);b=a.ol.getError();if(!b)return;e=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();k=j.length;if(c>=0&&c<=(k-0|0)){h.oh=R(i.data,0,c);e.oe=1;e.of=1;e.oi=h;E(e);}e=new O;Bl(e);E(e);}
let A$n=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ol.viewport(b,c,d,e);b=a.ol.getError();if(!b)return;f=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;Bl(f);E(f);}
let AJb=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();h=d===null?null:d.oW;d=a.qt;if(!c)d=!d.oR?null:d.oP;else{e=d.oN;b=Z(Q(W(I(c),B(2135587861, 2654435769)),d.oT));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.oQ;}}d=b<0?null:d.oO.data[b];}i=d===null?null:d.oW;a.ol.attachShader(h,i);b
=a.ol.getError();if(!b)return;d=new Bc;j=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(j===null)j=C(2);F(h,b,j);i=new P;e=h.og;k=e.data;c=h.od;U();f=k.length;if(c>=0&&c<=(f-0|0)){i.oh=R(e.data,0,c);d.oe=1;d.of=1;d.oi=i;E(d);}d=new O;Bl(d);E(d);}
let AIz=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.ol;e=a.rp;if(!c)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(c),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.bindBuffer(b,e);b=a.ol.getError();if(!b)return;d=new Bc;i=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.og;k=f.data;c=e.od;U();g=k.length;if(c>=0&&c<=(g-0|0)){j.oh
=R(f.data,0,c);d.oe=1;d.of=1;d.oi=j;E(d);}d=new O;Bl(d);E(d);}
let AIw=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ol.blendFuncSeparate(b,c,d,e);b=a.ol.getError();if(!b)return;f=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;Bl(f);E(f);}
let APb=(a,b,c,d,e)=>{let f,g,h,i,j;Ph(a,b,c,d,e);b=a.ol.getError();if(!b)return;d=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();e=j.length;if(c>=0&&c<=(e-0|0)){h.oh=R(i.data,0,c);d.oe=1;d.of=1;d.oi=h;E(d);}d=new O;Bl(d);E(d);}
let A1U=(a,b,c,d,e)=>{let f,g,h,i,j;SY(a,b,c,d,e);b=a.ol.getError();if(!b)return;e=new Bc;f=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.og;j=i.data;c=g.od;U();d=j.length;if(c>=0&&c<=(d-0|0)){h.oh=R(i.data,0,c);e.oe=1;e.of=1;e.oi=h;E(e);}e=new O;Bl(e);E(e);}
let AWu=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.qt;if(!b)c=!c.oR?null:c.oP;else{d=c.oN;e=Z(Q(W(I(b),B(2135587861, 2654435769)),c.oT));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.oQ;}}c=e<0?null:c.oO.data[e];}BR();g=c===null?null:c.oW;a.ol.compileShader(g);b=a.ol.getError();if(!b)return;c=new Bc;h=BB(b,4);g=new L;g.og=H(16);F(g,g.od,C(155));N(g,g.od,b,10);F(g,g.od,C(59));b=g.od;if(h===null)h=C(2);F(g,b,h);i=new P;d=g.og;j=d.data;e=g.od;U();f=j.length;if(e>=0&&e<=(f-0|0)){i.oh=R(d.data,
0,e);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let ARQ=a=>{let b,c,d,e,f,g,h,i,j;b=a.ol.createProgram();c=a.vB;a.vB=c+1|0;C6(a.pS,c,C_(b));d=a.ol.getError();if(!d)return c;b=new Bc;e=BB(d,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,d,10);F(f,f.od,C(59));d=f.od;if(e===null)e=C(2);F(f,d,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);b.oe=1;b.of=1;b.oi=g;E(b);}b=new O;Bl(b);E(b);}
let AWj=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol.createShader(b);d=a.uq;a.uq=d+1|0;C6(a.qt,d,C_(c));b=a.ol.getError();if(!b)return d;c=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;d=f.od;U();j=i.length;if(d>=0&&d<=(j-0|0)){g.oh=R(h.data,0,d);c.oe=1;c.of=1;c.oi=g;E(c);}c=new O;Bl(c);E(c);}
let ARO=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.disableVertexAttribArray(b);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let A14=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.ol.drawElements(b,c,d,e);b=a.ol.getError();if(!b)return;f=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;Bl(f);E(f);}
let AWn=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.enableVertexAttribArray(b);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let A5e=(a,b)=>{let c,d,e,f,g,h,i,j;a.ol.generateMipmap(b);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let A3m=(a,b,c,d,e)=>{let f,g,h,i,j;f=R0(a,b,c,d,e);b=a.ol.getError();if(!b)return f;d=new Bc;g=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.og;i=h.data;c=e.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){f.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=f;E(d);}d=new O;Bl(d);E(d);}
let AKA=(a,b,c,d,e)=>{let f,g,h,i,j;f=Tp(a,b,c,d,e);b=a.ol.getError();if(!b)return f;d=new Bc;g=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.og;i=h.data;c=e.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){f.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=f;E(d);}d=new O;Bl(d);E(d);}
let A16=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();h=d===null?null:d.oW;b=a.ol.getAttribLocation(h,Cp(c));f=a.ol.getError();if(!f)return b;c=new Bc;i=BB(f,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,f,10);F(d,d.od,C(59));b=d.od;if(i===null)i=C(2);F(d,b,i);h=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=(g
-0|0)){h.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=h;E(c);}c=new O;Bl(c);E(c);}
let AXx=(a,b,c)=>{let d,e,f,g,h,i,j;LN(a,b,c);b=a.ol.getError();if(!b)return;c=new Bc;d=BB(b,4);e=new L;e.og=H(16);F(e,e.od,C(155));N(e,e.od,b,10);F(e,e.od,C(59));b=e.od;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
let AM6=(a,b,c,d)=>{let e,f,g,h,i,j;TP(a,b,c,d);b=a.ol.getError();if(!b)return;d=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=g;E(d);}d=new O;Bl(d);E(d);}
let A1k=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c=Bv(c.getProgramInfoLog(d));b=a.ol.getError();if(!b)return c;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let AJm=(a,b,c,d)=>{let e,f,g,h,i,j;OZ(a,b,c,d);b=a.ol.getError();if(!b)return;d=new Bc;e=BB(b,4);f=new L;f.og=H(16);F(f,f.od,C(155));N(f,f.od,b,10);F(f,f.od,C(59));b=f.od;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.og;i=h.data;c=f.od;U();j=i.length;if(c>=0&&c<=(j-0|0)){g.oh=R(h.data,0,c);d.oe=1;d.of=1;d.oi=g;E(d);}d=new O;Bl(d);E(d);}
let A7t=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol;d=a.qt;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c=Bv(c.getShaderInfoLog(d));b=a.ol.getError();if(!b)return c;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let A8T=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ol;e=a.pS;if(!b)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;c=d.getUniformLocation(e,Cp(c));if(c===null)g=(-1);else{d=a.q7;if(!b)d=!d.oR?null:d.oP;else{f=d.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));w:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break w;}if(h==b)break;g=(g+1|0)&d.oQ;}}d=g<0?
null:d.oO.data[g];}d=d;if(d===null){d=Ei(51,0.800000011920929);C6(a.q7,b,d);}g=a.vR;a.vR=g+1|0;C6(d,g,C_(c));}b=a.ol.getError();if(!b)return g;c=new Bc;i=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.og;j=f.data;g=d.od;U();h=j.length;if(g>=0&&g<=(h-0|0)){e.oh=R(f.data,0,g);c.oe=1;c.of=1;c.oi=e;E(c);}c=new O;Bl(c);E(c);}
let AP3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.linkProgram(d);b=a.ol.getError();if(!b)return;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=(g-0|0)){i.oh
=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let AVW=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ol;e=a.qt;if(!b)e=!e.oR?null:e.oP;else{f=e.oN;g=Z(Q(W(I(b),B(2135587861, 2654435769)),e.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oQ;}}e=g<0?null:e.oO.data[g];}BR();e=e===null?null:e.oW;d.shaderSource(e,Cp(c));b=a.ol.getError();if(!b)return;c=new Bc;i=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.og;j=f.data;g=d.od;U();h=j.length;if(g>=0&&g<=(h-0|0))
{e.oh=R(f.data,0,g);c.oe=1;c.of=1;c.oi=e;E(c);}c=new O;Bl(c);E(c);}
let A8P=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.ol;f=d;e.texParameterf(b,c,f);b=a.ol.getError();if(!b)return;e=new Bc;g=BB(b,4);h=new L;h.og=H(16);F(h,h.od,C(155));N(h,h.od,b,10);F(h,h.od,C(59));b=h.od;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.og;k=j.data;c=h.od;U();d=k.length;if(c>=0&&c<=(d-0|0)){i.oh=R(j.data,0,c);e.oe=1;e.of=1;e.oi=i;E(e);}e=new O;Bl(e);E(e);}
let AWc=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.q7;e=a.sh;if(!e)d=!d.oR?null:d.oP;else{f=d.oN;g=Z(Q(W(I(e),B(2135587861, 2654435769)),d.oT));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.oQ;}}d=g<0?null:d.oO.data[g];}d=d;if(!b)d=!d.oR?null:d.oP;else{f=d.oN;e=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.oQ;}}d=e<0?null:d.oO.data[e];}BR();i=d===null?null:d.oW;a.ol.uniform1i(i,c);b=a.ol.getError();if
(!b)return;d=new Bc;i=BB(b,4);j=new L;j.og=H(16);F(j,j.od,C(155));N(j,j.od,b,10);F(j,j.od,C(59));b=j.od;if(i===null)i=C(2);F(j,b,i);k=new P;f=j.og;l=f.data;c=j.od;U();e=l.length;if(c>=0&&c<=(e-0|0)){k.oh=R(f.data,0,c);d.oe=1;d.of=1;d.oi=k;E(d);}d=new O;Bl(d);E(d);}
let AXY=(a,b)=>{let c,d,e,f,g,h,i,j;a.sh=b;c=a.ol;d=a.pS;if(!b)d=!d.oR?null:d.oP;else{e=d.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),d.oT));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oQ;}}d=f<0?null:d.oO.data[f];}BR();d=d===null?null:d.oW;c.useProgram(d);b=a.ol.getError();if(!b)return;c=new Bc;h=BB(b,4);d=new L;d.og=H(16);F(d,d.od,C(155));N(d,d.od,b,10);F(d,d.od,C(59));b=d.od;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.og;j=e.data;f=d.od;U();g=j.length;if(f>=0&&f<=(g-0|0))
{i.oh=R(e.data,0,f);c.oe=1;c.of=1;c.oi=i;E(c);}c=new O;Bl(c);E(c);}
let ALf=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.ol.vertexAttribPointer(b,c,d,!!e,f,g);b=a.ol.getError();if(!b)return;h=new Bc;i=BB(b,4);j=new L;j.og=H(16);F(j,j.od,C(155));N(j,j.od,b,10);F(j,j.od,C(59));b=j.od;if(i===null)i=C(2);F(j,b,i);k=new P;l=j.og;m=l.data;c=j.od;U();d=m.length;if(c>=0&&c<=(d-0|0)){k.oh=R(l.data,0,c);h.oe=1;h.of=1;h.oi=k;E(h);}h=new O;Bl(h);E(h);}
function ZQ(){let a=this;D.call(a);a.sF=0;a.oN=null;a.oO=null;a.oP=null;a.oR=0;a.FB=0.0;a.CC=0;a.oT=0;a.oQ=0;}
let Ei=(a,b)=>{let c=new ZQ();ANJ(c,a,b);return c;}
let ANJ=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.FB=c;d=NG(b,c);a.CC=d*c|0;b=d-1|0;a.oQ=b;a.oT=Ed(I(b));a.oN=X(d);a.oO=Bs(D,d);return;}e=new V;f=new L;f.og=H(16);F(f,f.od,C(60));ER(f,f.od,c);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}
let C6=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.oP;a.oP=c;if(!a.oR){a.oR=1;a.sF=a.sF+1|0;}return d;}e=a.oN;f=Z(Q(W(I(b),B(2135587861, 2654435769)),a.oT));d:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.oQ;}}if(f>=0){e=a.oO.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.oO.data[f]=c;b=a.sF+1|0;a.sF=b;if(b>=a.CC)AAg(a,g.length<<1);return null;}
let Mt=(a,b)=>{let c,d,e;if(!b)return !a.oR?null:a.oP;c=a.oN;d=Z(Q(W(I(b),B(2135587861, 2654435769)),a.oT));k:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break k;}if(e==b)break;d=(d+1|0)&a.oQ;}}return d<0?null:a.oO.data[d];}
let Jd=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.oR)return null;a.oR=0;c=a.oP;a.oP=null;a.sF=a.sF-1|0;return c;}d=a.oN;e=W(I(b),B(2135587861, 2654435769));f=a.oT;g=Z(Q(e,f));d:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break d;}if(i==b)break;g=(g+1|0)&a.oQ;}}if(g<0)return null;j=a.oO.data;k=j[g];l=a.oQ;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Z(Q(W(I(n),B(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.sF=a.sF-1|0;return k;}
let AA9=(a,b,c)=>{let d,e,f,g;a:{d=a.oO;if(b===null){if(a.oR&&a.oP===null)return 1;d=d.data;e=a.oN;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.oP)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.oR){g=a.oP;if(b===g?1:g instanceof FS&&g.rG==b.rG?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof FS&&g.rG==b.rG?1:0)return 1;f=f+(-1)|0;}}return 0;}
let AAg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.oN.data.length;a.CC=b*a.FB|0;d=b-1|0;a.oQ=d;d=Ed(I(d));a.oT=d;e=a.oN;f=a.oO;g=X(b);a.oN=g;h=Bs(D,b);a.oO=h;if(a.sF>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break b;k=e.data[j];if(k){l=f.data[j];b=Z(Q(W(I(k),B(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.oQ;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
function Yr(){let a=this;D.call(a);a.r9=0;a.th=null;a.xn=0;a.HZ=0.0;a.CR=0;a.wv=0;a.tO=0;}
let AJZ=(a,b)=>{let c=new Yr();A0U(c,a,b);return c;}
let A0U=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.HZ=c;d=NG(b,c);a.CR=d*c|0;b=d-1|0;a.tO=b;a.wv=Ed(I(b));a.th=X(d);return;}e=new V;f=new L;f.og=H(16);F(f,f.od,C(60));ER(f,f.od,c);f=Bi(f);e.oe=1;e.of=1;e.oi=f;E(e);}
let ACZ=(a,b)=>{let c,d,e,f;if(!b){if(a.xn)return 0;a.xn=1;a.r9=a.r9+1|0;return 1;}c=a.th;d=Z(Q(W(I(b),B(2135587861, 2654435769)),a.wv));d:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break d;}if(f==b)break;d=(d+1|0)&a.tO;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.r9+1|0;a.r9=b;if(b>=a.CR)AC5(a,e.length<<1);return 1;}
let AAL=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.xn)return 0;a.xn=0;a.r9=a.r9-1|0;return 1;}c=a.th;d=W(I(b),B(2135587861, 2654435769));e=a.wv;f=Z(Q(d,e));d:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.tO;}}if(f<0)return 0;h=a.tO;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Z(Q(W(I(b),B(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.r9=a.r9-1|0;return 1;}
let AC5=(a,b)=>{let c,d,e,f,g,h,i;b:{c=a.th.data.length;a.CR=b*a.HZ|0;d=b-1|0;a.tO=d;d=Ed(I(d));a.wv=d;e=a.th;f=X(b);a.th=f;if(a.r9>0){f=f.data;g=0;while(true){if(g>=c)break b;h=e.data[g];if(h){i=Z(Q(W(I(h),B(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.tO;}f[i]=h;}g=g+1|0;}}}}
let QS=G(0);
function TE(){D.call(this);this.Bz=null;}
let AXJ=a=>{let b;b=a.Bz;b.BR=1;AGS(Cp(b.Dm));}
let ALY=a=>{let b;b=a.Bz;b.BR=1;AGS(Cp(b.Dm));}
let AXs=a=>{a.Bz.BR=0;}
let Vg=G(0);
function Vi(){let a=this;D.call(a);a.wP=null;a.EW=null;a.JP=null;}
let TV=0;let Bgv=()=>{let a=new Vi();A9e(a);return a;}
let A9e=a=>{let b,c,d,e,f,$$je;b=AK4();a.wP=b;c=ARL(b);a.EW=c;b=new PZ;d=a.wP;e=new CQ;e.pD=0;e.ox=Bs(D,16);b.qD=e;b.sE=2147483647;b.Ij=d;b.Ip=c;a.JP=b;b=Eg.zR;Hq(b);b:{try{Dj(b,a);EV(b);break b;}catch($$e){$$je=BH($$e);d=$$je;}EV(b);E(d);}if(a.wP.state!=='running'?1:0){b=new RX;b.JN=a;ALd(a.wP,CK(b,"unlockFunction"));}else{if(!TV&&Eg.xs>=2){if(BY===null){e=new Do;e.p$=DX;c=new L;Dm(c);c.og=H(16);e.o_=c;e.p7=H(32);e.qf=0;Dn();e.qa=Du;BY=e;}e=BY;c=new L;c.og=H(16);DI(c,c.od,DJ(C(170)));DI(c,c.od,DJ(C(72)));DI(c,
c.od,DJ(C(171)));d=Bi(c);b=e.o_;F(b,b.od,d);f=b.od;Bo(b,f,f+1|0);b.og.data[f]=10;Dy(e);}TV=1;}}
let AAe=a=>{a.EW.disconnect(a.wP.destination);}
let Y8=a=>{a.EW.connect(a.wP.destination);}
let ALd=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});}
let AK4=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
let ARL=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function Oc(){Ew.call(this);this.H7=null;}
let QQ=G(Da);
function HX(){D6.call(this);this.ri=null;}
let Te=a=>{let b,c,d,e,f,$$je;b:{try{b=K4(a.ri,null);}catch($$e){$$je=BH($$e);if($$je instanceof Da){c=$$je;break b;}else{throw $$e;}}return b;}d=new Bc;b=new L;b.og=H(16);F(b,b.od,C(34));e=a.ri.rX.rw;if(e.oV===null)e.oV=Bv(e.oJ.$meta.name);f=e.oV;F(b,b.od,f);b=Bi(b);d.oe=1;d.of=1;d.oi=b;d.qd=c;E(d);}
let O=G(B0);
let AJW=()=>{let a=new O();AK9(a);return a;}
let BfZ=a=>{let b=new O();Ks(b,a);return b;}
let AK9=a=>{a.oe=1;a.of=1;}
let Ks=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
let Gs=G(0);
let SJ=G(0);
let PJ=G(0);
let Td=G(0);
let Qk=G(0);
let Vd=G(0);
let Ur=G(0);
let OQ=G(0);
let Ll=G(0);
let V_=G();
let AR4=(a,b)=>{b=a.bq(b);BR();return b===null?null:b instanceof HM()&&b instanceof Ev?b.oW:b;}
let A8t=(a,b,c)=>{a.f$(Bv(b),Em(c,"handleEvent"));}
let A72=(a,b,c)=>{a.f_(Bv(b),Em(c,"handleEvent"));}
let ARX=(a,b,c,d)=>{a.ga(Bv(b),Em(c,"handleEvent"),d?1:0);}
let AVq=(a,b)=>{return !!a.gb(b);}
let ALi=a=>{return a.gc();}
let AIV=(a,b,c,d)=>{a.gd(Bv(b),Em(c,"handleEvent"),d?1:0);}
let M$=G();
function Iw(){let a=this;M$.call(a);a.D8=0;a.uy=null;a.Hq=0.0;a.Ec=0;a.yM=0;a.zp=0;a.H0=0;}
let AWH=null;let A1A=null;let BiS=a=>{let b=new Iw();MM(b,a);return b;}
let MM=(a,b)=>{let c,d,e;a.zp=(-1);if(b<0){c=new V;c.oe=1;c.of=1;E(c);}a.D8=0;if(!b)b=1;d=Bs(Kj,b);e=d.data;a.uy=d;b=e.length;a.yM=b;a.Hq=0.75;a.Ec=b*0.75|0;}
let EG=(a,b,c)=>{let d,e,f,g,h,i,j;Hq(a);try{if(b!==null&&c!==null){d:{if(!b.pz){d=0;while(true){if(d>=b.oh.length)break d;b.pz=(31*b.pz|0)+b.oh.charCodeAt(d)|0;d=d+1|0;}}}e=b.pz&2147483647;f=a.uy.data;g=e%f.length|0;h=f[g];while(h!==null){c:{d=h.F4;if(!b.pz){i=0;while(true){if(i>=b.oh.length)break c;b.pz=(31*b.pz|0)+b.oh.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.pz&&h.q0.cG(b)?1:0)break;h=h.Ca;}if(h!==null){j=h.rv;h.rv=c;return j;}a.H0=a.H0+1|0;d=a.D8+1|0;a.D8=d;if(d>a.Ec){YK(a);g=e%a.uy.data.length|0;}if(g<a.yM)a.yM
=g;if(g>a.zp)a.zp=g;u:{j=new Kj;j.q0=b;j.rv=c;if(!b.pz){d=0;while(true){if(d>=b.oh.length)break u;b.pz=(31*b.pz|0)+b.oh.charCodeAt(d)|0;d=d+1|0;}}}j.F4=b.pz;f=a.uy.data;j.Ca=f[g];f[g]=j;return null;}b=new Dv;b.oe=1;b.of=1;E(b);}finally{EV(a);}}
let YK=a=>{let b,c,d,e,f,g,h,i,j;b=(a.uy.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Bs(Kj,b);e=d.data;f=a.zp+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.yM)break;h=a.uy.data[f];while(h!==null){i=(h.q0.cF()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.Ca;h.Ca=e[i];e[i]=h;h=j;}}a.yM=g;a.zp=c;a.uy=d;a.Ec=e.length*a.Hq|0;}
let A$y=()=>{AWH=new K9;A1A=new K8;}
function L4(){Iw.call(this);this.ID=null;}
let AD2=G();
let E_=G(BW);
let U7=null;let Un=null;let AD6=null;let A4n=null;let BfF=null;let Hf=()=>{Hf=Bk(E_);AQK();}
let AQK=()=>{let b,c,d,e;b=new E_;Hf();b.oq=C(172);b.on=0;U7=b;c=new E_;c.oq=C(173);c.on=1;Un=c;d=new E_;d.oq=C(168);d.on=2;AD6=d;e=new E_;e.oq=C(174);e.on=3;A4n=e;BfF=S(E_,[b,c,d,e]);}
let En=G();
let ADd=G(En);
let ACY=G(En);
let AET=G(En);
let AFI=G(En);
let XT=G(En);
function Pq(){D.call(this);this.JA=null;}
let A3d=(a,b)=>{b.preventDefault();}
function Pr(){D.call(this);this.IK=null;}
let A$h=(a,b)=>{b.preventDefault();}
function Pn(){let a=this;D.call(a);a.Fk=null;a.GM=null;a.GZ=null;}
let YZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new CQ;e.pD=1;e.ox=Bs(D,16);f=0;while(true){if(f>=d)break b;g=c[f];h=Bv(g.name);i=GX(h,46,h.oh.length-1|0);b=i==(-1)?C(43):Cv(h,i+1|0,h.oh.length);j=b.oh.toLowerCase();if(j!==b.oh)b=Zu(j);if(AZe(b)){F$();j=I2;}else{if(b===C(175))k=1;else if(!(C(175) instanceof P))k=0;else{j=C(175);k=b.oh!==j.oh?0:1;}h:{if(!k){if(b===C(176))k=1;else if(!(C(176) instanceof P))k=0;else{j=C(176);k=b.oh!==j.oh?0:1;}if(!k){if(b
===C(177))k=1;else if(!(C(177) instanceof P))k=0;else{j=C(177);k=b.oh!==j.oh?0:1;}if(!k){k=0;break h;}}}k=1;}if(k){F$();j=Hv;}else if(!AOC(b)){F$();j=IN;}else{F$();j=Ii;}}l=new FileReader();b=new Qn;b.AP=a;b.En=j;b.DY=h;b.z3=e;b.E_=d;l.addEventListener("load",CK(b,"handleEvent"));F$();if(j!==IN&&j!==Hv){if(j===I2)l.readAsDataURL(g);else if(j===Ii)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}}
let ASB=(a,b)=>{YZ(a,b);}
function PZ(){let a=this;D6.call(a);a.Ij=null;a.Ip=null;}
let UI=G(0);
function RX(){D.call(this);this.JN=null;}
let A0Y=a=>{let b,c,d,e,f,g,h,i;if(!TV&&Eg.xs>=2){if(BY===null){b=new Do;c=DX;Dm(b);b.p$=c;c=new L;Jo(c,16);b.o_=c;b.p7=H(32);b.qf=0;Dn();b.qa=Du;BY=b;}b=BY;c=new L;c.og=H(16);EA(c,c.od,C(170));EA(c,c.od,C(72));EA(c,c.od,C(171));d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);i=b.o_;G3(i,i.od,d);Im(i,i.od,10);Dy(b);}else E(AJW());}TV=1;}
let WN=G(En);
function Tb(){let a=this;D.call(a);a.oL=null;a.qy=0;a.CW=null;a.Fh=0;a.xq=0;a.t5=0;a.p3=0;a.FP=null;}
let S4=(a,b)=>{return Pi(a,b);}
let Ka=(a,b,c)=>{let d,e,f,g,h,i,j;d=new Kd;d.pV=Bs(D,10);e=Pi(a,b);f=0;g=0;if(!b.oh.length){h=Bs(P,1);h.data[0]=C(43);return h;}a:{while(true){if(!H9(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.qY;if(!j.q3){b=new Cb;b.oe=1;b.of=1;Bt(b);E(b);}if(0>=j.r$){b=new O;d=new L;Dm(d);d.og=H(16);N(d,d.od,0,10);d=Bi(d);b.oe=1;b.of=1;b.oi=d;E(b);}j=Cv(b,g,j.pJ.data[0]);Kc(d,d.pd+1|0);h=d.pV.data;g=d.pd;d.pd=g+1|0;h[g]=j;d.ra=d.ra+1|0;j=e.qY;if(!j.q3)break;if(0>=j.r$){b=new O;d=new L;Dm(d);d.og=H(16);N(d,d.od,0,10);d=Bi(d);b.oe
=1;b.of=1;b.oi=d;E(b);}g=j.pJ.data[1];f=i;}b=new Cb;b.oe=1;b.of=1;Bt(b);E(b);}r:{b=Cv(b,g,b.oh.length);Kc(d,d.pd+1|0);h=d.pV.data;g=d.pd;d.pd=g+1|0;h[g]=b;d.ra=d.ra+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break r;if(f<0)break;if(f>=d.pd)break;if(d.pV.data[f].oh.length)break r;QM(d,f);}b=new O;b.oe=1;b.of=1;E(b);}}if(f<0)f=0;return ADm(d,Bs(P,f));}
let SM=a=>{return a.oL.qw;}
let Hz=(b,c)=>{let d;if(b===null){b=new Dv;b.oe=1;b.of=1;b.oi=C(178);E(b);}if(c&&(c|255)!=255){b=new V;b.oe=1;b.of=1;b.oi=C(43);E(b);}Y=1;d=new Tb;d.CW=Bs(Ec,10);d.xq=(-1);d.t5=(-1);d.p3=(-1);return ADC(d,b,c);}
let ADC=(a,b,c)=>{let d,e,f;a.oL=Beb(b,c);a.qy=c;b=RA(a,(-1),c,null);a.FP=b;d=a.oL;if(!d.pT&&!d.oG&&d.oH==d.qV&&!(d.pM===null?0:1)?1:0){if(a.Fh)b.gn();return a;}b=new D$;e=d.qw;f=d.ve;b.oe=1;b.of=1;b.pB=(-1);b.qE=C(43);b.qu=e;b.pB=f;E(b);}
let AHX=(a,b)=>{let c,d,e,f,g,h;c=new Df;d=a.qy;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;BO();g=new BG;g.ov=X(64);c.oA=g;g=new BG;g.ov=X(2);c.oE=g;c.B3=e;c.CH=f;while(true){h=a.oL;d=h.pT;if(!d&&!h.oG&&h.oH==h.qV&&!(h.pM===null?0:1)?1:0)break;f=!d&&!h.oG&&h.oH==h.qV&&!(h.pM===null?0:1)?1:0;if(!(!f&&!(h.pM===null?0:1)&&(d<0?0:1)?1:0))break;f=h.oG;if(f&&f!=(-536870788)&&f!=(-536870871))break;Dc(h);DG(c,h.s_);g=a.oL;if(g.pT!=(-536870788))continue;Dc(g);}g=LG(a,c);g.gr(b);return g;}
let RA=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Kd;e.pV=Bs(D,10);f=a.qy;g=0;if(c!=f)a.qy=c;a:{switch(b){case -1073741784:h=new PO;c=a.p3+1|0;a.p3=c;Gw();i=Y;Y=i+1|0;d=new Bx;d.og=H(20);h.oB=(N(d,d.od,i,10)).l();h.qb=c;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pa;j=a.p3+1|0;a.p3=j;Gw();c=Y;Y=c+1|0;d=new Bx;d.og=H(20);h.oB=(N(d,d.od,c,10)).l();h.qb=j;break a;case -33554392:h=new P_;k=a.p3+1|0;a.p3=k;Gw();c=Y;Y=c+1|0;d=new Bx;d.og=H(20);h.oB=(N(d,d.od,c,10)).l();h.qb=k;break a;default:c
=a.xq+1|0;a.xq=c;if(d===null){h=BeB();g=1;}else{h=new Ec;Gw();KP(h);h.qb=c;}i=a.xq;if(i<=(-1))break a;if(i>=10)break a;a.CW.data[i]=h;break a;}h=new Vj;Gw();i=Y;Y=i+1|0;d=new Bx;d.og=H(20);h.oB=(N(d,d.od,i,10)).l();h.qb=(-1);}while(true){if(Rp(a.oL)&&Hw(a.oL)==(-536870788))l=AHX(a,h);else if(a.oL.pT==(-536870788)){l=KL(h);Cn(a.oL);}else{l=Sx(a,h);if(G5(a.oL)==(-536870788))Cn(a.oL);}if(l!==null)Ix(e,l);if(M9(a.oL))break;if(G5(a.oL)==(-536870871))break;}if(Xd(a.oL)==(-536870788))Ix(e,KL(h));if(a.qy!=f&&!g){a.qy
=f;ACz(a.oL,f);}switch(b){case -1073741784:break;case -536870872:return Bd0(e,h);case -268435416:return Bc4(e,h);case -134217688:return Bad(e,h);case -67108824:return Bem(e,h);case -33554392:return Bdq(e,h);default:switch(AF_(e)){case 0:break;case 1:return Bfu(AGD(e,0),h);default:return Ba_(e,h);}return KL(h);}return BcS(e,h);}
let AGL=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Lh;b.og=H(16);while(true){c=a.oL;d=c.pT;if(!d&&!c.oG&&c.oH==c.qV&&!(c.pM===null?0:1)?1:0)break;e=!d&&!c.oG&&c.oH==c.qV&&!(c.pM===null?0:1)?1:0;if(!(!e&&!(c.pM===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.sB;e=f===null?0:1;if(!(!e&&!c.oG)){e=f===null?0:1;if(!(!e&&(c.oG<0?0:1))){g=c.oG;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Dc(c);d=c.s_;if(!(d>=65536&&d<=1114111
?1:0)){e=d&65535;d=b.od;Bo(b,d,d+1|0);b.og.data[d]=e;}else{h=(Go(d)).data;e=0;d=h.length;g=b.od;Bo(b,g,g+d|0);i=d+e|0;while(e<i){j=b.og.data;k=g+1|0;d=e+1|0;j[g]=h[e];g=k;e=d;}}}d=a.qy;if(!((d&2)!=2?0:1))return Ba4(b);if(!((d&64)!=64?0:1))return Bg6(b);c=new N6;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);c.oB=(N(f,f.od,e,10)).l();c.pa=1;f=new L;f.og=H(16);e=0;while(e<AD1(b)){d=VL(b,e);d=C1(On(),d)&65535;Tm(f,C1(Th(),d)&65535);e=e+1|0;}c.zq=Bi(f);c.pa=f.od;return c;}
let AGO=a=>{let b,c,d,e,f,g,h,i,j;b=X(4);c=(-1);d=(-1);e=a.oL;f=e.pT;if(!(!f&&!e.oG&&e.oH==e.qV&&!(e.pM===null?0:1)?1:0)){g=!f&&!e.oG&&e.oH==e.qV&&!(e.pM===null?0:1)?1:0;if(!g&&!(e.pM===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Dc(e);c=e.s_;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=H(3);b=h.data;b[0]=c&65535;e=a.oL;i=e.pT;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Dc(e);e=a.oL;i=e.pT;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Dc(e);e=new Kf;c=Y;Y=c+1|0;j=new Bx;j.og=H(20);e.oB=(N(j,j.od,c,10)).l();e.tA=h;e.yr=3;return e;}j=new Kf;i
=Y;Y=i+1|0;e=new Bx;e.og=H(20);j.oB=(N(e,e.od,i,10)).l();j.tA=h;j.yr=2;return j;}c=a.qy;if(!((c&2)!=2?0:1)){e=new FI;i=b[0];c=Y;Y=c+1|0;e.oB=SH(c,10);e.pa=1;e.qM=i;return e;}if((c&64)!=64?0:1)return BfJ(b[0]);return BdL(b[0]);}h=b.data;c=1;while(c<4&&!M9(a.oL)&&Rp(a.oL)){i=c+1|0;e=a.oL;Dc(e);h[c]=e.s_;c=i;}if(c==1&&!AQd(h[0]))return Rt(a,h[0]);if(!Fn(a,2))return Bg2(b,c);if(Fn(a,64))return Bgz(b,c);return Bbb(b,c);}
let Sx=(a,b)=>{let c,d,e,f,g,h;c=a.oL;d=c.pT;e=!d&&!c.oG&&c.oH==c.qV&&!(c.pM===null?0:1)?1:0;e=!e&&!(c.pM===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.sB===null?0:1)&&(c.oG<0?0:1)){if(!((a.qy&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!AGF(c)?AGL(a):Mn(a,b,Vf(a,b));}else{f=AGO(a);g=a.oL;d=g.pT;if(!(!d&&!g.oG&&g.oH==g.qV&&!(g.pM===null?0:1)?1:0)&&!(d==(-536870871)&&!(b instanceof Ik))&&d!=(-536870788)){e=!d&&!g.oG&&g.oH==g.qV&&!(g.pM===null?0:1)?1:0;if(!(!e&&!(g.pM===null?0:1)&&(d<0?0:1)?1:0))f=Mn(a,b,f);}}}else if
(d!=(-536870871))f=Mn(a,b,Vf(a,b));else{if(b instanceof Ik)E(Fq(C(43),Fg(c),GB(a.oL)));f=new QX;AB6(f,b);f.pa=0;}c=a.oL;e=c.pT;h=!e&&!c.oG&&c.oH==c.qV&&!(c.pM===null?0:1)?1:0;if(!h&&!(e==(-536870871)&&!(b instanceof Ik))&&e!=(-536870788)){g=Sx(a,b);if(f instanceof EC&&!(f instanceof Hg)&&!(f instanceof EF)&&!(f instanceof Hd)){c=f;if(!g.gY(c.oZ))f=A_7(c);}if((g.g0()&65535)!=43)f.gr(g);else f.gr(g.oZ);}else{if(f===null)return null;f.gr(b);}if((f.g0()&65535)!=43)return f;return f.oZ;}
let Mn=(a,b,c)=>{let d,e,f,g,h,i;d=a.oL;e=d.pT;if(c!==null&&!(c instanceof C9)){switch(e){case -2147483606:Dc(d);d=new RD;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);d.oB=(N(g,g.od,f,10)).l();d.om=b;d.oZ=c;d.pO=e;Gw();c.gr(NI);return d;case -2147483605:Dc(d);d=new SS;e=Y;Y=e+1|0;g=new Bx;g.og=H(20);d.oB=(N(g,g.od,e,10)).l();d.om=b;d.oZ=c;d.pO=(-2147483606);Gw();c.gr(NI);return d;case -2147483585:Dc(d);d=new O3;e=Y;Y=e+1|0;g=new Bx;Dm(g);g.og=H(20);d.oB=(N(g,g.od,e,10)).l();d.om=b;d.oZ=c;d.pO=(-536870849);Gw();c.gr(NI);return d;case -2147483525:g
=new Ol;h=d.pM;Dc(d);d=h;f=a.t5+1|0;a.t5=f;i=Y;Y=i+1|0;g.oB=SH(i,10);g.om=b;g.oZ=c;g.pO=(-536870849);g.sw=d;g.rg=f;Gw();c.gr(NI);return g;case -1073741782:case -1073741781:Dc(d);d=new PM;Wp(d,c,b,e);c.gr(d);return d;case -1073741761:Dc(d);d=Bap(c,b,(-536870849));c.gr(b);return d;case -1073741701:h=new QG;d=IP(d);e=a.t5+1|0;a.t5=e;Za(h,d,c,b,(-536870849),e);c.gr(h);return h;case -536870870:case -536870869:Cn(d);d=c.g0()!=(-2147483602)?BdP(c,b,e):Fn(a,32)?BaD(c,b,e):A_O(c,b,e,SI(a.qy));c.gr(d);return d;case -536870849:Cn(d);d
=BgP(c,b,(-536870849));c.gr(b);return d;case -536870789:h=new Hy;d=IP(d);e=a.t5+1|0;a.t5=e;ABL(h,d,c,b,(-536870849),e);c.gr(h);return h;default:}return c;}g=null;if(c!==null)g=c;switch(e){case -2147483606:case -2147483605:Cn(d);d=Bcg(g,b,e);Mj(g,d);return d;case -2147483585:Cn(d);return Bdg(g,b,(-2147483585));case -2147483525:return BcD(IP(d),g,b,(-2147483525));case -1073741782:case -1073741781:Cn(d);d=Bgk(g,b,e);Mj(g,d);return d;case -1073741761:Cn(d);return Bf2(g,b,(-1073741761));case -1073741701:return Ba1(IP(d),
g,b,(-1073741701));case -536870870:case -536870869:Cn(d);d=BbY(g,b,e);Mj(g,d);return d;case -536870849:Cn(d);return Bbr(g,b,(-536870849));case -536870789:return Bd9(IP(d),g,b,(-536870789));default:}return c;}
let Vf=(a,b)=>{let c,d,e,f,g,h,i,j;c=null;d=b instanceof Ik;while(true){o:{e=a.oL;f=e.pT;if((f&(-2147418113))==(-2147483608)){Dc(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.qy=g;else{if(f!=(-1073741784))g=a.qy;c=RA(a,f,g,b);e=a.oL;if(e.pT!=(-536870871)){b=new D$;h=e.qw;i=e.ve;b.oe=1;b.of=1;b.pB=(-1);b.qE=C(43);b.qu=h;b.pB=i;E(b);}Dc(e);}}else{g:{h:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break h;case -2147483583:Cn(e);c
=new PE;KP(c);break o;case -2147483582:Cn(e);c=A8Z(0);break o;case -2147483577:break;case -2147483558:Cn(e);c=new Q_;j=a.p3+1|0;a.p3=j;AHg(c,j);break o;case -2147483550:Cn(e);c=A8Z(1);break o;case -2147483526:Cn(e);c=Bcs();break o;case -536870876:Cn(e);a.p3=a.p3+1|0;if(Fn(a,8)){if(Fn(a,1)){c=BaX(a.p3);break o;}c=A_x(a.p3);break o;}if(Fn(a,1)){c=Bbi(a.p3);break o;}c=Bck(a.p3);break o;case -536870866:Cn(e);if(Fn(a,32)){c=BcP();break o;}c=Bb7(SI(a.qy));break o;case -536870821:Cn(e);i=0;if(G5(a.oL)==(-536870818))
{i=1;Cn(a.oL);}c=Zc(a,i,b);if(G5(a.oL)!=(-536870819))E(Fq(C(43),Fg(a.oL),GB(a.oL)));Sr(a.oL,1);Cn(a.oL);break o;case -536870818:Cn(e);a.p3=a.p3+1|0;if(!Fn(a,8)){c=Bcy();break o;}c=Bgi(SI(a.qy));break o;case 0:e=O6(e);if(e!==null)c=LG(a,e);else{if(M9(a.oL)){c=KL(b);break o;}c=AMh(f&65535);}Cn(a.oL);break o;default:break g;}Cn(e);c=Bal();break o;}j=(f&2147483647)-48|0;if(a.xq<j)E(Fq(C(43),Fg(e),GB(a.oL)));Cn(e);a.p3=a.p3+1|0;c=!Fn(a,2)?Bdp(j,a.p3):Fn(a,64)?BaY(j,a.p3):BgT(j,a.p3);a.CW.data[j].Ed=1;a.Fh=1;break o;}if
(f>=0&&!JM(e)){c=Rt(a,f);Cn(a.oL);}else if(f==(-536870788))c=KL(b);else{if(f!=(-536870871))E(Fq(!JM(a.oL)?AAU(f&65535):(O6(a.oL)).l(),Fg(a.oL),GB(a.oL)));if(d)E(Fq(C(43),Fg(a.oL),GB(a.oL)));c=KL(b);}}}if(f!=(-16777176))break;}return c;}
let Zc=(a,b,c)=>{let d;d=LG(a,II(a,b));d.gr(c);return d;}
let II=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new Df;d=a.qy;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;BO();f=new BG;f.ov=X(64);c.oA=f;f=new BG;f.ov=X(2);c.oE=f;c.B3=e;c.CH=d;FO(c,b);g=(-1);h=0;i=0;j=1;n:{e:{r:while(true){f=a.oL;if(!f.pT&&!f.oG&&f.oH==f.qV&&!JM(f)?1:0)break n;f=a.oL;b=f.pT;i=b==(-536870819)&&!j?0:1;if(!i)break n;i:{switch(b){case -536870874:if(g>=0)DG(c,g);g=Cn(a.oL);if(G5(a.oL)!=(-536870874)){g=38;break i;}if(Hw(a.oL)==(-536870821)){Cn(a.oL);h=1;g=(-1);break i;}Cn(a.oL);if(j){c=II(a,0);break i;}if(G5(a.oL)
==(-536870819))break i;Q5(c,II(a,0));break i;case -536870867:if(!j&&Hw(f)!=(-536870819)&&Hw(a.oL)!=(-536870821)&&g>=0){Cn(a.oL);d=G5(a.oL);if(JM(a.oL))break r;if(d<0&&Hw(a.oL)!=(-536870819)&&Hw(a.oL)!=(-536870821)&&g>=0)break r;z:{try{if(A2k(d))break z;d=d&65535;break z;}catch($$e){$$je=BH($$e);if($$je instanceof Da){break e;}else{throw $$e;}}}try{Ca(c,g,d);}catch($$e){$$je=BH($$e);if($$je instanceof Da){break e;}else{throw $$e;}}Cn(a.oL);g=(-1);break i;}if(g>=0)DG(c,g);g=45;Cn(a.oL);break i;case -536870821:if
(g>=0){DG(c,g);g=(-1);}Cn(a.oL);e=0;f=a.oL;if(f.pT==(-536870818)){Cn(f);e=1;}if(!h)ABE(c,II(a,e));else Q5(c,II(a,e));h=0;Cn(a.oL);break i;case -536870819:break;case -536870818:if(g>=0)DG(c,g);g=94;Cn(a.oL);break i;case 0:if(g>=0)DG(c,g);f=a.oL.pM;if(f===null)g=0;else{AIn(c,f);g=(-1);}Dc(a.oL);break i;default:if(g>=0)DG(c,g);f=a.oL;Dc(f);g=f.s_;break i;}if(g>=0)DG(c,g);g=93;Cn(a.oL);}j=0;}E(Fq(C(43),SM(a),GB(a.oL)));}E(Fq(C(43),SM(a),GB(a.oL)));}if(!i){if(g>=0)DG(c,g);return c;}c=new D$;k=a.oL;l=k.qw;b=k.ve-
1|0;c.oe=1;c.of=1;c.pB=(-1);c.qE=C(43);c.qu=l;c.pB=b;E(c);}
let Rt=(a,b)=>{let c,d,e,f,g;c=b>=65536&&b<=1114111?1:0;d=a.qy;if((d&2)!=2?0:1){e:{if(!(b>=97&&b<=122)){if(b<65)break e;if(b>90)break e;}e=new N9;b=b&65535;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);e.oB=(N(g,g.od,f,10)).l();e.pa=1;e.A5=b;e.D_=IO(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new RI;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);e.oB=(N(g,g.od,f,10)).l();e.pa=1;e.pa=2;if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b);if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==
null?Bv(B1.value):null)));}e.Dg=C1(CA,b);return e;}if(b<=57343&&b>=56320?1:0){e=new KG;b=b&65535;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);e.oB=(N(g,g.od,f,10)).l();e.tj=b;return e;}if(b<=56319&&b>=55296?1:0)return A25(b&65535);e=new Rd;b=b&65535;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);e.oB=(N(g,g.od,f,10)).l();e.pa=1;b=C1(On(),b)&65535;e.Bc=C1(Th(),b)&65535;return e;}}if(c)return A_H(b);if(ALt(b))return BbH(b&65535);if(!AQm(b))return AMh(b&65535);return A25(b&65535);}
let LG=(a,b)=>{let c,d,e,f,g,h;if(!AFk(b)){if(!b.pv){if(b.hq())return BaV(b);return Bcu(b);}if(b.hq())return Bfl(b);return BeJ(b);}c=We(b);d=new N_;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);d.oB=(N(f,f.od,e,10)).l();d.Aj=c;d.D5=c.oY;if(!b.pv){if(!b.hq()){c=new H8;f=new FB;b=Ke(b);KP(f);f.pa=1;f.rM=b;f.Ds=b.oY;ACI(c);c.u5=f;c.vZ=d;return c;}c=new H8;f=new OP;b=Ke(b);e=Y;Y=e+1|0;g=new Bx;g.og=H(20);f.oB=(N(g,g.od,e,10)).l();f.pa=1;f.BL=b;f.Da=b.oY;e=Y;Y=e+1|0;b=new Bx;b.og=H(20);c.oB=(N(b,b.od,e,10)).l();c.u5=f;c.vZ=d;return c;}if
(!b.hq()){c=new H8;f=new E6;b=Ke(b);e=Y;Y=e+1|0;g=new Bx;g.og=H(20);f.oB=(N(g,g.od,e,10)).l();f.qN=b;f.wF=b.oY;e=Y;Y=e+1|0;b=new Bx;b.og=H(20);c.oB=(N(b,b.od,e,10)).l();c.u5=f;c.vZ=d;return c;}c=new H8;f=new RQ;g=Ke(b);h=Y;Y=h+1|0;b=new Bx;b.og=H(20);f.oB=(N(b,b.od,h,10)).l();f.qN=g;f.wF=g.oY;e=Y;Y=e+1|0;b=new Bx;b.og=H(20);c.oB=(N(b,b.od,e,10)).l();c.u5=f;c.vZ=d;return c;}
let AC6=b=>{return Hz(b,0);}
let IO=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
let Fn=(a,b)=>{return (a.qy&b)!=b?0:1;}
let ACu=G();
let LQ=(b,c)=>{let d,e,f,g,$$je;if(c!==null&&c.data.length){n:{c:{try{d=AKK(AGZ(b,c));}catch($$e){$$je=BH($$e);if($$je instanceof Lf){d=$$je;break n;}else if($$je instanceof IX){d=$$je;break c;}else{throw $$e;}}return d;}e=new Eo;if(b.oV===null)b.oV=Bv(b.oJ.$meta.name);f=b.oV;b=new L;b.og=H(16);F(b,b.od,C(179));g=b.od;if(f===null)f=C(2);F(b,g,f);b=Bi(b);e.oe=1;e.of=1;e.oi=b;e.qd=d;E(e);}e=new Eo;if(b.oV===null)b.oV=Bv(b.oJ.$meta.name);f=b.oV;b=new L;b.og=H(16);F(b,b.od,C(180));g=b.od;if(f===null)f=C(2);F(b,
g,f);F(b,b.od,C(181));b=Bi(b);e.oe=1;e.of=1;e.oi=b;e.qd=d;E(e);}c=(AA0(b)).data;if(c.length<=0)b=null;else{b=new OR;b.rX=c[0];}return b;}
let MU=(b,c)=>{let d,e,f,g,h,$$je;a:{try{d=AKK(AG2(b,c));}catch($$e){$$je=BH($$e);if($$je instanceof Lf){d=$$je;break a;}else if($$je instanceof IX){d=$$je;e=new Eo;if(b.oV===null)b.oV=Bv(b.oJ.$meta.name);b=b.oV;f=new L;f.og=H(16);F(f,f.od,C(179));g=f.od;if(b===null)b=C(2);F(f,g,b);b=Bi(f);e.oe=1;e.of=1;e.oi=b;e.qd=d;E(e);}else{throw $$e;}}return d;}e=new Eo;if(b.oV===null)b.oV=Bv(b.oJ.$meta.name);h=b.oV;b=new L;b.og=H(16);F(b,b.od,C(182));g=b.od;if(h===null)h=C(2);F(b,g,h);b=Bi(b);e.oe=1;e.of=1;e.oi=b;e.qd
=d;E(e);}
let Eo=G(Da);
function Ev(){D.call(this);this.oW=null;}
let BbU=null;let Us=null;let Lo=null;let N0=null;let A9M=null;let AZA=null;let BR=()=>{BR=Bk(Ev);AZO();}
let C_=b=>{let c,d,e,f,g,h,i;BR();if(b===null)return null;d:{c=b;if(Us!==null){d=Bv(typeof c);if(d===C(183))e=1;else if(!(C(183) instanceof P))e=0;else{b=C(183);e=d.oh!==b.oh?0:1;}if(!e){if(d===C(184))e=1;else if(!(C(184) instanceof P))e=0;else{b=C(184);e=d.oh!==b.oh?0:1;}if(!e){if(d===C(185))e=1;else if(!(C(185) instanceof P))e=0;else{b=C(185);e=d.oh!==b.oh?0:1;}if(e){f=Lo.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ev;h.oW=c;i=h;Lo.set(c,new WeakRef(i));Ow(A9M,
i,c);return h;}if(d===C(186))e=1;else if(!(C(186) instanceof P))e=0;else{b=C(186);e=d.oh!==b.oh?0:1;}if(!e)break d;else{f=N0.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ev;h.oW=c;i=h;N0.set(c,new WeakRef(i));Ow(AZA,i,c);return h;}}}f=Us.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ev;h.oW=c;Us.set(c,new WeakRef(h));return h;}}b=new Ev;b.oW=c;return b;}
let AZO=()=>{BbU=new WeakMap();Us=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Lo=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();N0=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();A9M=Lo===null?null:new FinalizationRegistry(CK(new OW,"accept"));AZA=N0===null?null:new FinalizationRegistry(CK(new OX,"accept"));}
let Ow=(b,c,d)=>{return b.register(c,d);}
let M6=G(0);
let K9=G();
let JQ=G(0);
let K8=G();
let Mi=G(0);
function AFe(){let a=this;D.call(a);a.Il=null;a.HP=null;a.tX=null;a.qY=null;a.wx=0;a.BD=0;a.BI=0;a.CS=null;a.C3=null;a.t6=null;}
let Pi=(a,b)=>{let c=new AFe();AIB(c,a,b);return c;}
let AGf=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=a.CS;if(c!==null){if(c===b)d=1;else if(!(b instanceof P))d=0;else{e=b;d=c.oh!==e.oh?0:1;}if(d){if(a.t6===null)return a.C3;f=new L;f.og=H(16);g=0;e:{while(true){b=a.t6;d=B9(g,b.pd);if(d>=0)break;if(g<0)break e;if(d>=0)break e;b=b.pV.data[g];F(f,f.od,b===null?C(2):b.l());g=g+1|0;}return Bi(f);}b=new O;b.oe=1;b.of=1;E(b);}}a.CS=b;h=H(b.oh.length);i=h.data;j=0;k=i.length;while(true){if(j>=k){c=new L;c.og=H(16);a.t6=null;j=0;l=0;m=0;u:{i:while(true){if(j>=k){ba:
{e=a.t6;if(e!==null){j=c.od;d=B9(l,j);if(d){if(d<=0&&l>=0&&j<=j){b=new P;n=c.og;h=n.data;d=j-l|0;j=h.length;if(l>=0&&d>=0&&d<=(j-l|0)){b.oh=R(n.data,l,d);Ix(e,b);break ba;}b=new O;BZ(b);E(b);}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}}}return Bi(c);}if(i[j]==92&&!m){m=1;j=j+1|0;}bb:{if(m){if(j>=k)break i;d=i[j];g=c.od;Bo(c,g,g+1|0);c.og.data[g]=d;m=0;}else if(i[j]!=36){o=i[j];d=c.od;Bo(c,d,d+1|0);c.og.data[d]=o;}else{if(a.t6===null){b=new Kd;b.pV=Bs(D,10);a.t6=b;}bc:{try{b=new P;j=j+1|0;Vq(b,h,j,1);d=Dd(b);if(l==Dr(c))break bc;Ix(a.t6,
AGC(c,l,Dr(c)));l=Dr(c);break bc;}catch($$e){$$je=BH($$e);if($$je instanceof Da){break u;}else{throw $$e;}}}try{Ix(a.t6,Bbj(a,d));e=LO(a,d);l=l+FU(e)|0;B5(c,e);break bb;}catch($$e){$$je=BH($$e);if($$je instanceof Da){break u;}else{throw $$e;}}}}j=j+1|0;}b=new O;b.oe=1;b.of=1;E(b);}b=new V;b.oe=1;b.of=1;b.oi=C(43);E(b);}if(j<0)break;if(j>=b.oh.length)break;i[j]=b.oh.charCodeAt(j);j=j+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}
let LO=(a,b)=>{let c,d,e,f,g,h,i;c=a.qY;d=c.q3;if(!d){c=new Cb;c.oe=1;c.of=1;E(c);}if(b>=0){e=B9(b,c.r$);if(e<0){k:{f=c.pJ.data;g=b*2|0;if(f[g]<0)c=null;else{c=c.sD;if(!d){c=new Cb;c.oe=1;c.of=1;E(c);}if(b>=0&&e<0){h=f[g];if(!d){c=new Cb;c.oe=1;c.of=1;E(c);}if(b<0)break k;if(e>=0)break k;c=Cv(c,h,f[g+1|0]);}else{c=new O;U();i=new L;i.og=H(16);N(i,i.od,b,10);i=Bi(i);c.oe=1;c.of=1;c.oi=i;E(c);}}return c;}c=new O;U();i=new L;i.og=H(16);N(i,i.od,b,10);i=Bi(i);c.oe=1;c.of=1;c.oi=i;E(c);}}c=new O;U();i=new L;i.og
=H(16);N(i,i.od,b,10);i=Bi(i);c.oe=1;c.of=1;c.oi=i;E(c);}
let N8=(a,b)=>{let c,d,e,f,g,h,i;c=a.tX.oh.length;if(b>=0&&b<=c){d=a.qY;d.q3=0;d.xz=2;e=d.pJ.data;f=0;g=e.length;if(f>g){d=new V;Bl(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.px.data;f=0;g=e.length;if(f>g){d=new V;Bl(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.sf=d.qJ;d.xz=1;d.sf=b;c=d.wS;if(c<0)c=b;d.wS=c;b=a.HP.hB(b,a.tX,d);if(b==(-1))a.qY.qO=1;if(b>=0){d=a.qY;b=d.q3;if(b){e=d.pJ.data;if(e[0]==(-1)){f=d.sf;e[0]=f;e[1]=f;}if(!b){d=new Cb;d.oe=1;d.of=1;Bt(d);E(d);}if(0<d.r$){d.wS=e[1];return 1;}d=new O;i
=new L;Dm(i);i.og=H(16);N(i,i.od,0,10);i=Bi(i);d.oe=1;d.of=1;d.oi=i;E(d);}}a.qY.sf=(-1);return 0;}d=new O;i=new L;i.og=H(16);N(i,i.od,b,10);i=Bi(i);d.oe=1;d.of=1;d.oi=i;E(d);}
let H9=a=>{let b,c,d,e,f,g,h,i,j;b=a.tX.oh.length;c=a.qY;if(!c.AD)b=a.BD;if(c.sf>=0&&c.xz==1){d=c.q3;if(!d){c=new Cb;c.oe=1;c.of=1;E(c);}e=B9(0,c.r$);if(e>=0){c=new O;f=new L;f.og=H(16);N(f,f.od,0,10);f=Bi(f);c.oe=1;c.of=1;c.oi=f;E(c);}g=c.pJ.data;h=g[1];c.sf=h;if(!d){c=new Cb;c.oe=1;c.of=1;E(c);}if(e>=0){c=new O;f=new L;f.og=H(16);N(f,f.od,0,10);f=Bi(f);c.oe=1;c.of=1;c.oi=f;E(c);}i=g[1];if(!d){c=new Cb;c.oe=1;c.of=1;E(c);}if(e>=0){c=new O;f=new L;f.og=H(16);N(f,f.od,0,10);f=Bi(f);c.oe=1;c.of=1;c.oi=f;E(c);}if
(i==g[0])c.sf=h+1|0;j=c.sf;return j<=b&&N8(a,j)?1:0;}return N8(a,a.wx);}
let AIB=(a,b,c)=>{let d,e;a.wx=(-1);a.BD=(-1);a.Il=b;a.HP=b.FP;a.tX=c;a.wx=0;d=c.oh.length;a.BD=d;e=Bcw(c,a.wx,d,b.xq,b.t5+1|0,b.p3+1|0);a.qY=e;e.vQ=1;}
let CV=G(V);
let Vn=()=>{let a=new CV();AYq(a);return a;}
let BiT=a=>{let b=new CV();LF(b,a);return b;}
let AYq=a=>{a.oe=1;a.of=1;}
let LF=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
function OR(){D.call(this);this.rX=null;}
let AKK=a=>{let b=new OR();AVa(b,a);return b;}
let AVa=(a,b)=>{a.rX=b;}
let JO=(a,b)=>{return;}
let K4=(a,b)=>{let c,d,e,f,g,$$je;if(b===null)b=Bs(D,0);d:{k:{c:{try{c=AG4(a.rX,b);}catch($$e){$$je=BH($$e);if($$je instanceof V){c=$$je;break c;}else if($$je instanceof LT){c=$$je;break d;}else if($$je instanceof Mv){c=$$je;break k;}else if($$je instanceof RZ){c=$$je;d=new Eo;e=a.rX.rw;if(e.oV===null)e.oV=Bv(e.oJ.$meta.name);e=e.oV;f=new L;f.og=H(16);F(f,f.od,C(187));g=f.od;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.oe=1;d.of=1;d.oi=f;d.qd=c;E(d);}else{throw $$e;}}return c;}d=new Eo;e=a.rX.rw;if(e.oV===null)e.oV
=Bv(e.oJ.$meta.name);e=e.oV;f=new L;f.og=H(16);F(f,f.od,C(188));g=f.od;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.oe=1;d.of=1;d.oi=f;d.qd=c;E(d);}d=new Eo;e=a.rX.rw;if(e.oV===null)e.oV=Bv(e.oJ.$meta.name);e=e.oV;f=new L;f.og=H(16);F(f,f.od,C(189));g=f.od;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.oe=1;d.of=1;d.oi=f;d.qd=c;E(d);}d=new Eo;e=a.rX.rw;if(e.oV===null)e.oV=Bv(e.oJ.$meta.name);e=e.oV;f=new L;f.og=H(16);F(f,f.od,C(189));g=f.od;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.oe=1;d.of=1;d.oi=f;d.qd=c;E(d);}
let Lf=G(B0);
let FX=G(Da);
let IX=G(FX);
let Dv=G(B0);
function CL(){let a=this;D.call(a);a.om=null;a.qI=0;a.oB=null;a.pO=0;}
let Y=0;let KP=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.og=H(20);a.oB=(N(c,c.od,b,10)).l();}
let AMc=(a,b,c,d)=>{let e;e=d.o2;while(true){if(b>e)return (-1);if(a.hE(b,c,d)>=0)break;b=b+1|0;}return b;}
let ANS=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.hE(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
let AZ6=(a,b)=>{a.pO=b;}
let AZo=a=>{return a.pO;}
let AQ_=a=>{let b,c,d,e,f,g,h,i;b=a.oB;c=a.eh();d=new L;d.og=H(16);e=d.od;Bo(d,e,e+1|0);d.og.data[e]=60;f=d.od;if(b===null)b=C(2);F(d,f,b);e=d.od;Bo(d,e,e+1|0);d.og.data[e]=58;f=d.od;if(c===null)c=C(2);F(d,f,c);e=d.od;Bo(d,e,e+1|0);g=d.og;h=g.data;h[e]=62;b=new P;e=d.od;U();i=h.length;if(e>=0&&e<=(i-0|0)){b.oh=R(g.data,0,e);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let ATl=a=>{let b,c,d,e,f,g,h,i;b=a.oB;c=a.eh();d=new L;d.og=H(16);e=d.od;Bo(d,e,e+1|0);d.og.data[e]=60;f=d.od;if(b===null)b=C(2);F(d,f,b);e=d.od;Bo(d,e,e+1|0);d.og.data[e]=58;f=d.od;if(c===null)c=C(2);F(d,f,c);e=d.od;Bo(d,e,e+1|0);g=d.og;h=g.data;h[e]=62;b=new P;e=d.od;U();i=h.length;if(e>=0&&e<=(i-0|0)){b.oh=R(g.data,0,e);return b;}b=new O;Bl(b);E(b);}
let ATW=a=>{return a.om;}
let Mj=(a,b)=>{a.om=b;}
let A9d=(a,b)=>{return 1;}
let A$b=a=>{return null;}
let K7=a=>{let b;a.qI=1;b=a.om;if(b!==null){if(!b.qI){b=b.hF();if(b!==null){a.om.qI=1;a.om=b;}a.om.gn();}else if(b instanceof I3&&b.qG.Ed)a.om=b.om;}}
let AWp=()=>{Y=1;}
let AA1=G();
let Xo=G();
let ABp=G();
let MO=G(0);
let OW=G();
let ALc=(a,b)=>{let c;BR();b=b===null?null:b instanceof HM()?b:C_(b);c=Lo;b=b===null?null:b.oW;c.delete(b);}
let AD4=G();
let OX=G();
let AXv=(a,b)=>{let c;BR();b=b===null?null:b instanceof HM()?b:C_(b);c=N0;b=b===null?null:b.oW;c.delete(b);}
let RF=G(0);
function Id(){let a=this;D.call(a);a.q0=null;a.rv=null;}
function Kj(){let a=this;Id.call(a);a.Ca=null;a.F4=0;}
function Ec(){let a=this;CL.call(a);a.Ed=0;a.qb=0;}
let NI=null;let Gw=()=>{Gw=Bk(Ec);A1a();}
let AJ7=(a,b,c,d)=>{let e,f,g;e=a.qb;f=d.pJ.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.om.hE(b,c,d);if(g<0){b=a.qb;d.pJ.data[(b*2|0)+1|0]=e;}return g;}
let A4P=a=>{return a.qb;}
let AOk=a=>{return C(190);}
let AKy=(a,b)=>{return 0;}
let A1a=()=>{let b,c,d;b=new Sc;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);b.oB=(N(d,d.od,c,10)).l();NI=b;}
function JG(){let a=this;D.call(a);a.pL=null;a.qc=0;a.tg=0;a.Gl=0;a.s_=0;a.pT=0;a.oG=0;a.qV=0;a.pM=null;a.sB=null;a.oH=0;a.p4=0;a.ve=0;a.zd=0;a.qw=null;}
let A1b=null;let BdB=null;let BfU=0;let Beb=(a,b)=>{let c=new JG();A9g(c,a,b);return c;}
let A9g=(a,b,c)=>{let d,e,f,g,h,i,j;a.tg=1;a.qw=b;if((c&16)>0){d=new L;d.og=H(16);F(d,d.od,C(191));e=0;while(true){f=MT(b,C(192),e);if(f<0)break;g=f+2|0;h=Cv(b,e,g);F(d,d.od,h);F(d,d.od,C(193));e=g;}b=Cv(b,e,b.oh.length);F(d,d.od,b);F(d,d.od,C(192));b=Bi(d);}a.pL=H(b.oh.length+2|0);i=H(b.oh.length);j=i.data;f=0;g=j.length;while(true){if(f>=g){CY(i,0,a.pL,0,b.oh.length);i=a.pL.data;g=i.length;i[g-1|0]=0;i[g-2|0]=0;a.qV=g;a.qc=c;Dc(a);Dc(a);return;}if(f<0)break;if(f>=b.oh.length)break;j[f]=b.oh.charCodeAt(f);f
=f+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}
let G5=a=>{return a.pT;}
let Sr=(a,b)=>{if(b>0&&b<3)a.tg=b;if(b==1){a.oG=a.pT;a.sB=a.pM;a.oH=a.zd;a.zd=a.ve;Dc(a);}}
let ACz=(a,b)=>{let c;a.qc=b;a.oG=a.pT;a.sB=a.pM;c=a.ve;a.oH=c+1|0;a.zd=c;Dc(a);}
let O6=a=>{return a.pM;}
let JM=a=>{return a.pM===null?0:1;}
let Cn=a=>{Dc(a);return a.s_;}
let IP=a=>{let b;b=a.pM;Dc(a);return b;}
let Hw=a=>{return a.oG;}
let Xd=a=>{return a.s_;}
let Dc=a=>{let b,c,d,e,f,g,h,$$je;a.s_=a.pT;a.pT=a.oG;a.pM=a.sB;a.ve=a.zd;a.zd=a.oH;while(true){b=0;c=a.oH>=a.pL.data.length?0:Ma(a);a.oG=c;a.sB=null;if(a.tg==4){if(c!=92)return;c=a.oH;d=a.pL.data;c=c>=d.length?0:d[E0(a)];a.oG=c;switch(c){case 69:break;default:a.oG=92;a.oH=a.p4;return;}a.tg=a.Gl;a.oG=a.oH>(a.pL.data.length-2|0)?0:Ma(a);}u:{c=a.oG;if(c!=92){e=a.tg;if(e==1)switch(c){case 36:a.oG=(-536870876);break u;case 40:if(a.pL.data[a.oH]!=63){a.oG=(-2147483608);break u;}E0(a);c=a.pL.data[a.oH];e=0;while(true)
{bd:{if(e){e=0;switch(c){case 33:break;case 61:a.oG=(-134217688);E0(a);break bd;default:E(Fq(C(43),Fg(a),a.oH));}a.oG=(-67108824);E0(a);}else{switch(c){case 33:break;case 60:E0(a);c=a.pL.data[a.oH];e=1;break bd;case 61:a.oG=(-536870872);E0(a);break bd;case 62:a.oG=(-33554392);E0(a);break bd;default:f=AIe(a);a.oG=f;if(f<256){a.qc=f;f=f<<16;a.oG=f;a.oG=(-1073741784)|f;break bd;}f=f&255;a.oG=f;a.qc=f;f=f<<16;a.oG=f;a.oG=(-16777176)|f;break bd;}a.oG=(-268435416);E0(a);}}if(!e)break;}break u;case 41:a.oG=(-536870871);break u;case 42:case 43:case 63:e
=a.oH;d=a.pL.data;switch(e>=d.length?42:d[e]){case 43:a.oG=c|(-2147483648);E0(a);break u;case 63:a.oG=c|(-1073741824);E0(a);break u;default:}a.oG=c|(-536870912);break u;case 46:a.oG=(-536870866);break u;case 91:a.oG=(-536870821);Sr(a,2);break u;case 93:if(e!=2)break u;a.oG=(-536870819);break u;case 94:a.oG=(-536870818);break u;case 123:a.sB=AAO(a,c);break u;case 124:a.oG=(-536870788);break u;default:}else if(e==2)switch(c){case 38:a.oG=(-536870874);break u;case 45:a.oG=(-536870867);break u;case 91:a.oG=(-536870821);break u;case 93:a.oG
=(-536870819);break u;case 94:a.oG=(-536870818);break u;default:}}else{c=a.oH>=(a.pL.data.length-2|0)?(-1):Ma(a);be:{a.oG=c;switch(c){case -1:E(Fq(C(43),Fg(a),a.oH));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.oG
=Zl(a);break u;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.tg!=1)break u;a.oG=(-2147483648)|c;break u;case 65:a.oG=(-2147483583);break u;case 66:a.oG=(-2147483582);break u;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:E(Fq(C(43),Fg(a),a.oH));case 68:case 83:case 87:case 100:case 115:case 119:a.sB=PX(OT(a.pL,
a.p4,1),0);a.oG=0;break u;case 71:a.oG=(-2147483577);break u;case 80:case 112:break be;case 81:a.Gl=a.tg;a.tg=4;b=1;break u;case 90:a.oG=(-2147483558);break u;case 97:a.oG=7;break u;case 98:a.oG=(-2147483550);break u;case 99:c=a.oH;d=a.pL.data;if(c>=(d.length-2|0))E(Fq(C(43),Fg(a),a.oH));a.oG=d[E0(a)]&31;break u;case 101:a.oG=27;break u;case 102:a.oG=12;break u;case 110:a.oG=10;break u;case 114:a.oG=13;break u;case 116:a.oG=9;break u;case 117:a.oG=ST(a,4);break u;case 120:a.oG=ST(a,2);break u;case 122:a.oG=
(-2147483526);break u;default:}break u;}g=AFD(a);h=0;if(a.oG==80)h=1;try{a.sB=PX(g,h);}catch($$e){$$je=BH($$e);if($$je instanceof Mz){E(Fq(C(43),Fg(a),a.oH));}else{throw $$e;}}a.oG=0;}}if(b)continue;else break;}}
let AFD=a=>{let b,c,d,e,f,g,h,i;b=new L;b.og=H(10);c=a.oH;d=a.pL;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new P;a.p4=c;if(a.qc&4)D2(a);else a.oH=c+1|0;g=a.p4;U();if(g>=0&&1<=(f-g|0)){b.oh=R(d.data,g,1);h=new L;h.og=H(16);F(h,h.od,C(194));F(h,h.od,b);return Bi(h);}b=new O;b.oe=1;b.of=1;E(b);}a.p4=c;if(a.qc&4)D2(a);else a.oH=c+1|0;c=0;r:{while(true){f=a.oH;d=a.pL.data;if(f>=(d.length-2|0))break;a.p4=f;if(a.qc&4)D2(a);else a.oH=f+1|0;c=d[a.p4];if(c==125)break r;f=b.od;Bo(b,f,f+1|0);b.og.data[f]=c;}}if
(c!=125){b=new D$;i=a.qw;f=a.oH;b.oe=1;b.of=1;b.pB=(-1);b.qE=C(43);b.qu=i;b.pB=f;E(b);}}if(!b.od){b=new D$;i=a.qw;c=a.oH;b.oe=1;b.of=1;b.pB=(-1);b.qE=C(43);b.qu=i;b.pB=c;E(b);}h=Bi(b);if(h.oh.length==1){b=new L;b.og=H(16);F(b,b.od,C(194));F(b,b.od,h);return Bi(b);}u:{i:{if(h.oh.length>3){if(h===C(194)?1:KM(h,C(194),0))break i;if(h===C(195)?1:KM(h,C(195),0))break i;}break u;}h=Cv(h,2,h.oh.length);}return h;}
let AAO=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new L;c.og=H(4);d=(-1);e=2147483647;b:{while(true){f=a.oH;g=a.pL.data;if(f>=g.length)break b;a.p4=f;if(a.qc&4)D2(a);else a.oH=f+1|0;b=g[a.p4];if(b==125)break b;if(b==44&&d<0)try{d=Le(Cx(c),10);AAV(c,0,Dr(c));continue;}catch($$e){$$je=BH($$e);if($$je instanceof CV){break;}else{throw $$e;}}h=b&65535;f=c.od;Bo(c,f,f+1|0);c.og.data[f]=h;}c=new D$;i=a.qw;b=a.oH;c.oe=1;c.of=1;c.pB=(-1);c.qE=C(43);c.qu=i;c.pB=b;E(c);}if(b!=125){c=new D$;i=a.qw;b=a.oH;c.oe=1;c.of=1;c.pB=(-1);c.qE
=C(43);c.qu=i;c.pB=b;E(c);}if(c.od>0)h:{try{e=Le(Cx(c),10);if(d>=0)break h;d=e;break h;}catch($$e){$$je=BH($$e);if($$je instanceof CV){}else{throw $$e;}}c=new D$;i=a.qw;b=a.oH;c.oe=1;c.of=1;c.pB=(-1);c.qE=C(43);c.qu=i;c.pB=b;E(c);}else if(d<0){c=new D$;i=a.qw;b=a.oH;c.oe=1;c.of=1;c.pB=(-1);c.qE=C(43);c.qu=i;c.pB=b;E(c);}if((d|e|(e-d|0))<0){c=new D$;i=a.qw;b=a.oH;c.oe=1;c.of=1;c.pB=(-1);c.qE=C(43);c.qu=i;c.pB=b;E(c);}f=a.oH;g=a.pL.data;h=f>=g.length?42:g[f];m:{switch(h){case 43:a.oG=(-2147483525);a.p4=f;if(a.qc
&4)D2(a);else a.oH=f+1|0;break m;case 63:a.oG=(-1073741701);a.p4=f;if(a.qc&4)D2(a);else a.oH=f+1|0;break m;default:}a.oG=(-536870789);}c=new RT;c.tY=d;c.tW=e;return c;}
let Fg=a=>{return a.qw;}
let M9=a=>{return !a.pT&&!a.oG&&a.oH==a.qV&&!(a.pM===null?0:1)?1:0;}
let A2k=b=>{return b<0?0:1;}
let Rp=a=>{let b,c;b=a.pT;c=!b&&!a.oG&&a.oH==a.qV&&!(a.pM===null?0:1)?1:0;return !c&&!(a.pM===null?0:1)&&(b<0?0:1)?1:0;}
let AGF=a=>{let b;b=a.pT;return b<=57343&&b>=56320?1:0;}
let AQm=b=>{return b<=56319&&b>=55296?1:0;}
let ALt=b=>{return b<=57343&&b>=56320?1:0;}
let ST=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new L;c.og=H(b);d=a.pL.data.length-2|0;e=0;while(true){f=B9(e,b);if(f>=0)break;g=a.oH;if(g>=d)break;h=a.pL;a.p4=g;if(a.qc&4)D2(a);else a.oH=g+1|0;g=h.data[a.p4];i=c.od;Bo(c,i,i+1|0);c.og.data[i]=g;e=e+1|0;}if(!f)n:{try{b=Le(Cx(c),16);}catch($$e){$$je=BH($$e);if($$je instanceof CV){break n;}else{throw $$e;}}return b;}c=new D$;j=a.qw;b=a.oH;c.oe=1;c.of=1;c.pB=(-1);c.qE=C(43);c.qu=j;c.pB=b;E(c);}
let Zl=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.pL.data;e=d.length-2|0;f=Kg(d[a.oH]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.oH;a.p4=g;if(a.qc&4)D2(a);else a.oH=g+1|0;e:{while(true){if(c>=b)break e;h=a.oH;if(h>=e)break e;i=Kg(a.pL.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.oH;a.p4=g;if(a.qc&4)D2(a);else a.oH=g+1|0;c=c+1|0;}}return f;}j=new D$;k=a.qw;b=a.oH;j.oe=1;j.of=1;j.pB=(-1);j.qE=C(43);j.qu=k;j.pB=b;E(j);}
let AIe=a=>{let b,c,d,e,f,g,h;b=1;c=a.qc;k:while(true){d=a.oH;e=a.pL.data;if(d>=e.length){f=new D$;g=a.qw;f.oe=1;f.of=1;f.pB=(-1);f.qE=C(43);f.qu=g;f.pB=d;E(f);}c:{f:{switch(e[d]){case 41:a.p4=d;if(a.qc&4)D2(a);else a.oH=d+1|0;return c|256;case 45:if(!b){h=new D$;g=a.qw;h.oe=1;h.of=1;h.pB=(-1);h.qE=C(43);h.qu=g;h.pB=d;E(h);}b=0;break c;case 58:break k;case 100:break f;case 105:c=b?c|2:(c^2)&c;break c;case 109:c=b?c|8:(c^8)&c;break c;case 115:c=b?c|32:(c^32)&c;break c;case 117:c=b?c|64:(c^64)&c;break c;case 120:c
=b?c|4:(c^4)&c;break c;default:}break c;}c=b?c|1:(c^1)&c;}a.p4=d;if(a.qc&4)D2(a);else a.oH=d+1|0;}a.p4=d;if(a.qc&4)D2(a);else a.oH=d+1|0;return c;}
let E0=a=>{let b;b=a.oH;a.p4=b;if(a.qc&4)D2(a);else a.oH=b+1|0;return a.p4;}
let D2=a=>{let b,c,d,e;b=a.pL.data.length-2|0;a.oH=a.oH+1|0;b:while(true){c=a.oH;if(c<b){d:{c=a.pL.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break d;default:c:{switch(Dt(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break d;}c=1;}if(c){a.oH=a.oH+1|0;continue;}}c=a.oH;if(c>=b)break;d=a.pL.data;if(d[c]!=35)break;a.oH=c+1|0;while(true){e=a.oH;if(e>=b)continue b;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue b;a.oH
=e+1|0;}}return c;}
let AL_=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?E2([d,e]):E2([d,e,4519+f|0]);}return null;}
let AQd=b=>{return BdB.bi(b)==BfU?0:1;}
let A6t=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
let Ma=a=>{let b,c,d,e,f;b=a.pL;c=a.oH;a.p4=c;if(a.qc&4)D2(a);else a.oH=c+1|0;b=b.data;d=a.p4;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.pL.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.oH;a.p4=d;if(a.qc&4)D2(a);else a.oH=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;}
let GB=a=>{return a.ve;}
function D$(){let a=this;V.call(a);a.qE=null;a.qu=null;a.pB=0;}
let Fq=(a,b,c)=>{let d=new D$();AX_(d,a,b,c);return d;}
let AX_=(a,b,c,d)=>{a.oe=1;a.of=1;a.pB=(-1);a.qE=b;a.qu=c;a.pB=d;}
let A97=a=>{let b,c,d,e,f,g,h,i,j,k;b=C(43);c=a.pB;if(c>=1){d=H(c);e=d.data;c=0;f=e.length;if(c>f){b=new V;b.oe=1;b.of=1;E(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new P;U();b.oh=R(d.data,0,f);}n:{h=a.qE;i=a.qu;if(i!==null&&i.oh.length){j=a.pB;i=a.qu;k=new L;k.og=H(16);N(k,k.od,j,10);F(k,k.od,C(59));j=k.od;if(i===null)i=C(2);F(k,j,i);F(k,k.od,C(59));F(k,k.od,b);b=new P;d=k.og;e=d.data;c=k.od;f=e.length;if(c>=0&&c<=(f-0|0)){b.oh=R(d.data,0,c);break n;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}b=C(43);}i=new L;i.og=H(16);j
=i.od;if(h===null)h=C(2);F(i,j,h);F(i,i.od,b);b=new P;d=i.og;e=d.data;c=i.od;U();f=e.length;if(c>=0&&c<=(f-0|0)){b.oh=R(d.data,0,c);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let MJ=G(0);
let Nm=G();
let ADm=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.pd;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new CN;b.oJ=f;c=b;f.classObject=c;}}b=EQ(b);if(b===null){b=new Dv;b.oe=1;b.of=1;E(b);}if(b===BI(CO)){b=new V;b.oe=1;b.of=1;E(b);}if(d<0){b=new D_;b.oe=1;b.of=1;E(b);}b=EO(b.oJ,d);}e=0;g=0;h=a.ra;i=a.pd;d=B9(h,h);f:{while(true){j=B9(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new NP;b.oe=1;b.of=1;E(b);}k=g+1|0;if(g<0)break f;if(j>=0)break f;b.data[e]
=a.pV.data[g];e=h;g=k;}return b;}b=new O;b.oe=1;b.of=1;E(b);}
let Tq=G(0);
let RR=G(0);
function IJ(){Nm.call(this);this.ra=0;}
let LX=G(0);
function Kd(){let a=this;IJ.call(a);a.pV=null;a.pd=0;}
let Kc=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.pV;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CN;i.oJ=h;j=i;h.classObject=j;}}h=EQ(i);if(h===null){i=new Dv;i.oe=1;i.of=1;E(i);}if(h===BI(CO)){i=new V;i.oe=1;i.of=1;E(i);}if(f<0){i=new D_;i.oe=1;i.of=1;E(i);}j=EO(h.oJ,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.pV=j;}}
let AGD=(a,b)=>{let c;if(b>=0&&b<a.pd)return a.pV.data[b];c=new O;c.oe=1;c.of=1;E(c);}
let AF_=a=>{return a.pd;}
let Ix=(a,b)=>{let c,d;Kc(a,a.pd+1|0);c=a.pV.data;d=a.pd;a.pd=d+1|0;c[d]=b;a.ra=a.ra+1|0;return 1;}
let AEy=(a,b,c)=>{let d,e,f;if(b>=0){d=a.pd;if(b<=d){Kc(a,d+1|0);d=a.pd;e=d;while(e>b){f=a.pV.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.pV.data[b]=c;a.pd=d+1|0;a.ra=a.ra+1|0;return;}}c=new O;c.oe=1;c.of=1;E(c);}
let QM=(a,b)=>{let c,d,e,f;if(b>=0){c=a.pd;if(b<c){d=a.pV.data;e=d[b];c=c-1|0;a.pd=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.ra=a.ra+1|0;return e;}}e=new O;e.oe=1;e.of=1;E(e);}
let PO=G(Ec);
let AXW=(a,b,c,d)=>{let e,f;e=a.qb;f=d.px.data;f[e]=b-f[e]|0;return a.om.hE(b,c,d);}
let A0k=a=>{return C(196);}
let A7V=(a,b)=>{return 0;}
let Vj=G(Ec);
let AZ2=(a,b,c,d)=>{return b;}
let A3f=a=>{return C(197);}
let Pa=G(Ec);
let AKI=(a,b,c,d)=>{let e;e=a.qb;if(d.px.data[e]!=b)b=(-1);return b;}
let A8_=a=>{return C(198);}
function P_(){Ec.call(this);this.GN=0;}
let AX7=(a,b,c,d)=>{let e,f;e=a.qb;f=d.px.data;f[e]=b-f[e]|0;a.GN=b;return b;}
let ATY=a=>{return C(199);}
let A6r=(a,b)=>{return 0;}
let Ik=G(Ec);
let BeB=()=>{let a=new Ik();A82(a);return a;}
let A82=a=>{let b,c;Gw();b=Y;Y=b+1|0;c=new Bx;c.og=H(20);a.oB=(N(c,c.od,b,10)).l();a.qb=0;}
let AVf=(a,b,c,d)=>{if(d.xz!=1&&b!=d.o2)return (-1);d.q3=1;d.pJ.data[1]=b;return b;}
let AZz=a=>{return C(200);}
function C9(){CL.call(this);this.pa=0;}
let AB6=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.om=b;a.pa=1;a.pO=1;}
let A$J=(a,b,c,d)=>{let e;if((b+a.hQ()|0)>d.o2){d.qO=1;return (-1);}e=a.hR(b,c);if(e<0)return (-1);return a.om.hE(b+e|0,c,d);}
let A8L=a=>{return a.pa;}
let AO2=(a,b)=>{return 1;}
let QX=G(C9);
let KL=a=>{let b=new QX();A42(b,a);return b;}
let A42=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.om=b;a.pa=1;a.pO=1;a.pa=0;}
let A8e=(a,b,c)=>{return 0;}
let A1j=(a,b,c,d)=>{let e,f,g;e=d.o2;f=d.qJ;b:{a:{while(true){g=B9(b,e);if(g>0)return (-1);if(g<0){if(b<0)break a;if(b>=c.oh.length)break a;if(((c.oh.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break b;if(g>=c.oh.length)break b;if((c.oh.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.om.hE(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}
let AZT=(a,b,c,d,e)=>{let f,g,h;f=e.o2;g=e.qJ;b:{a:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break a;if(c>=d.oh.length)break a;if(((d.oh.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break b;if(h>=d.oh.length)break b;if((d.oh.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.om.hE(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Ba;d.oe=1;d.of=1;E(d);}d=new Ba;d.oe=1;d.of=1;E(d);}
let AOl=a=>{return C(201);}
let AX2=(a,b)=>{return 0;}
function C2(){let a=this;CL.call(a);a.pR=null;a.qG=null;a.pH=0;}
let BiU=()=>{let a=new C2();ACI(a);return a;}
let Ba_=(a,b)=>{let c=new C2();ARU(c,a,b);return c;}
let ACI=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.og=H(20);a.oB=(N(c,c.od,b,10)).l();}
let ARU=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.pR=b;a.qG=c;a.pH=c.qb;}
let ANU=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pR;if(e===null)return (-1);f=a.pH;g=d.pJ.data;h=f*2|0;i=g[h];g[h]=b;f=e.pd;j=0;a:{while(true){if(j>=f){b=a.pH;d.pJ.data[b*2|0]=i;return (-1);}e=a.pR;if(j<0)break a;if(j>=e.pd)break a;h=e.pV.data[j].hE(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new O;c.oe=1;c.of=1;E(c);}
let ASi=(a,b)=>{a.qG.om=b;}
let APa=a=>{return C(202);}
let A4e=(a,b)=>{let c,d,e,f,g;a:{d:{c=a.pR;if(c!==null){d=0;e=c.ra;f=c.pd;while(true){if(!(d>=f?0:1))break d;if(e<c.ra){b=new NP;b.oe=1;b.of=1;E(b);}g=d+1|0;if(d<0)break a;if(d>=c.pd)break a;if(c.pV.data[d].gY(b))break;d=g;}return 1;}}return 0;}b=new O;b.oe=1;b.of=1;E(b);}
let ASY=(a,b)=>{let c,d,e;c=a.pH;d=b.pJ.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;}
let ALn=a=>{let b,c,d,e;a.qI=1;b=a.qG;if(b!==null&&!b.qI)K7(b);a:{d:{b=a.pR;if(b!==null){c=b.pd;d=0;while(true){if(d>=c)break d;b=a.pR;if(d<0)break a;if(d>=b.pd)break a;b=b.pV.data[d];e=b.hF();if(e===null)e=b;else{b.qI=1;QM(a.pR,d);AEy(a.pR,d,e);}if(!e.qI)e.gn();d=d+1|0;}}}if(a.om!==null)K7(a);return;}b=new O;b.oe=1;b.of=1;E(b);}
let NW=G(C2);
let BcS=(a,b)=>{let c=new NW();AYn(c,a,b);return c;}
let AYn=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.pR=b;a.qG=c;a.pH=c.qb;}
let AR0=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pH;f=d.px.data;g=f[e];f[e]=b;h=a.pR.pd;e=0;b:{while(true){if(e>=h){b=a.pH;d.px.data[b]=g;return (-1);}i=a.pR;if(e<0)break b;if(e>=i.pd)break b;j=i.pV.data[e].hE(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new O;c.oe=1;c.of=1;E(c);}
let AQk=a=>{return C(203);}
let A7v=(a,b)=>{let c;c=a.pH;return !b.px.data[c]?0:1;}
let F6=G(NW);
let Bdq=(a,b)=>{let c=new F6();AOL(c,a,b);return c;}
let AOL=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.pR=b;a.qG=c;a.pH=c.qb;}
let A0H=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pH;f=d.px.data;g=f[e];f[e]=b;h=a.pR.pd;i=0;b:{while(i<h){j=a.pR;if(i<0)break b;if(i>=j.pd)break b;if(j.pV.data[i].hE(b,c,d)>=0)return a.om.hE(a.qG.GN,c,d);i=i+1|0;}b=a.pH;d.px.data[b]=g;return (-1);}c=new O;c.oe=1;c.of=1;E(c);}
let A7c=(a,b)=>{a.om=b;}
let AJr=a=>{return C(203);}
let ABG=G(F6);
let Bd0=(a,b)=>{let c=new ABG();ANM(c,a,b);return c;}
let ANM=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.pR=b;a.qG=c;a.pH=c.qb;}
let ASd=(a,b,c,d)=>{let e,f,g;e=a.pR.pd;f=0;b:{while(f<e){g=a.pR;if(f<0)break b;if(f>=g.pd)break b;if(g.pV.data[f].hE(b,c,d)>=0)return a.om.hE(b,c,d);f=f+1|0;}return (-1);}c=new O;c.oe=1;c.of=1;E(c);}
let AU6=(a,b)=>{return 0;}
let A99=a=>{return C(204);}
let AHk=G(F6);
let Bc4=(a,b)=>{let c=new AHk();AM9(c,a,b);return c;}
let AM9=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.pR=b;a.qG=c;a.pH=c.qb;}
let AKs=(a,b,c,d)=>{let e,f,g;e=a.pR.pd;f=0;b:{while(true){if(f>=e)return a.om.hE(b,c,d);g=a.pR;if(f<0)break b;if(f>=g.pd)break b;if(g.pV.data[f].hE(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new O;c.oe=1;c.of=1;E(c);}
let A8Q=(a,b)=>{return 0;}
let ANL=a=>{return C(205);}
let AEe=G(F6);
let Bad=(a,b)=>{let c=new AEe();AUv(c,a,b);return c;}
let AUv=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.pR=b;a.qG=c;a.pH=c.qb;}
let ALj=(a,b,c,d)=>{let e,f,g,h,i;e=a.pR.pd;f=d.AD?0:d.qJ;d:{n:{g=a.om.hE(b,c,d);if(g>=0){h=a.pH;d.px.data[h]=b;h=0;while(true){if(h>=e)break n;i=a.pR;if(h<0)break d;if(h>=i.pd)break d;if(i.pV.data[h].hT(f,b,c,d)>=0){b=a.pH;d.px.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new O;c.oe=1;c.of=1;E(c);}
let A$_=(a,b)=>{return 0;}
let ARN=a=>{return C(206);}
let Zd=G(F6);
let Bem=(a,b)=>{let c=new Zd();AXS(c,a,b);return c;}
let AXS=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.pR=b;a.qG=c;a.pH=c.qb;}
let AXo=(a,b,c,d)=>{let e,f,g;e=a.pR.pd;f=a.pH;d.px.data[f]=b;f=0;b:{while(true){if(f>=e)return a.om.hE(b,c,d);g=a.pR;if(f<0)break b;if(f>=g.pd)break b;if(g.pV.data[f].hT(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new O;c.oe=1;c.of=1;E(c);}
let A7K=(a,b)=>{return 0;}
let AKJ=a=>{return C(207);}
function I3(){C2.call(this);this.q2=null;}
let Bfu=(a,b)=>{let c=new I3();ALW(c,a,b);return c;}
let ALW=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.q2=b;a.qG=c;a.pH=c.qb;}
let AI7=(a,b,c,d)=>{let e,f,g;e=a.pH;f=d.pJ.data;e=e*2|0;g=f[e];f[e]=b;e=a.q2.hE(b,c,d);if(e>=0)return e;e=a.pH;d.pJ.data[e*2|0]=g;return (-1);}
let AQw=(a,b,c,d)=>{let e;e=a.q2.hB(b,c,d);if(e>=0){b=a.pH;d.pJ.data[b*2|0]=e;}return e;}
let A73=(a,b,c,d,e)=>{let f;f=a.q2.hT(b,c,d,e);if(f>=0){b=a.pH;e.pJ.data[b*2|0]=f;}return f;}
let A35=(a,b)=>{return a.q2.gY(b);}
let A6p=a=>{let b,c,d,e,f;b=new Ok;c=a.q2;d=a.qG;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);b.oB=(N(f,f.od,e,10)).l();b.q2=c;b.qG=d;b.pH=d.qb;a.om=b;return b;}
let AVX=a=>{let b;a.qI=1;b=a.qG;if(b!==null&&!b.qI)K7(b);b=a.q2;if(b!==null&&!b.qI){b=b.hF();if(b!==null){a.q2.qI=1;a.q2=b;}a.q2.gn();}}
let AFE=G();
let Nz=b=>{if(b===null||b.constructor.$meta.item==='undefined'){E(A_U());}return b.data.length;}
let Bb0=(b,c)=>{if(b===null){b=new Dv;b.oe=1;b.of=1;E(b);}if(b===BI(CO)){b=new V;b.oe=1;b.of=1;E(b);}if(c>=0)return EO(b.oJ,c);b=new D_;b.oe=1;b.of=1;E(b);}
let EO=(b,c)=>{if(b.$meta.primitive){switch(b){case BfN:return N1(c);case A_T:return BX(c);case Bbc:return MV(c);case BbW:return H(c);case A_W:return X(c);case A_y:return Cu(c);case Bd7:return CU(c);case A_t:return LI(c);}}return Bs(b,c);}
let J0=G(B0);
let Io=G();
function BF(){let a=this;Io.call(a);a.oY=0;a.qH=0;a.oA=null;a.Cq=null;a.CM=null;a.pv=0;}
let AMy=null;let BO=()=>{BO=Bk(BF);AL1();}
let Lx=a=>{let b;BO();b=new BG;b.ov=X(64);a.oA=b;}
let AY4=a=>{return null;}
let AYf=a=>{return a.oA;}
let AFk=a=>{return !a.qH?(Ji(a.oA,0)>=2048?0:1):ZC(a.oA,0)>=2048?0:1;}
let A2i=a=>{return a.pv;}
let A8F=a=>{return a;}
let We=a=>{let b,c;if(a.CM===null){b=a.hW();c=new Q0;c.JR=a;c.GQ=b;b=new BG;b.ov=X(64);c.oA=b;a.CM=c;FO(c,a.qH);}return a.CM;}
let Ke=a=>{let b,c;if(a.Cq===null){b=a.hW();c=new QZ;c.IE=a;c.HL=b;c.Gn=a;b=new BG;b.ov=X(64);c.oA=b;a.Cq=c;FO(c,a.oY);a.Cq.pv=a.pv;}return a.Cq;}
let A98=a=>{return 0;}
let FO=(a,b)=>{let c;c=a.oY;if(c^b){a.oY=c?0:1;a.qH=a.qH?0:1;}if(!a.pv)a.pv=1;return a;}
let ANa=a=>{return a.oY;}
let PX=(b,c)=>{BO();b=AHN(AMy,b);if(!c&&b.wL===null)b.wL=b.hY();else if(c&&b.wA===null)b.wA=FO(b.hY(),1);return c?b.wA:b.wL;}
let AL1=()=>{let b;b=new Iu;ATr();AMy=b;}
function Df(){let a=this;BF.call(a);a.B3=0;a.CH=0;a.xr=0;a.Dc=0;a.sn=0;a.rm=0;a.oE=null;a.pw=null;}
let DG=(a,b)=>{let c;b:{if(a.B3){d:{if(!(b>=97&&b<=122)){if(b<65)break d;if(b>90)break d;}if(a.sn){N2(a.oE,IO(b&65535));break b;}L3(a.oE,IO(b&65535));break b;}if(a.CH&&b>128){a.xr=1;if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b);if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}b=C1(CA,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.Dc)N2(a.oA,b-55296|0);else L3(a.oA,b-55296|0);}if(a.sn)N2(a.oE,b);else L3(a.oE,
b);if(!a.pv&&(b>=65536&&b<=1114111?1:0))a.pv=1;return a;}
let AIn=(a,b)=>{let c,d,e;if(!a.pv&&b.pv)a.pv=1;if(a.Dc){if(!b.qH)Ht(a.oA,b.hW());else ET(a.oA,b.hW());}else if(!b.qH)HQ(a.oA,b.hW());else{HG(a.oA,b.hW());ET(a.oA,b.hW());a.qH=a.qH?0:1;a.Dc=1;}if(!a.rm&&b.h5()!==null){if(a.sn){if(!b.oY)Ht(a.oE,b.h5());else ET(a.oE,b.h5());}else if(!b.oY)HQ(a.oE,b.h5());else{HG(a.oE,b.h5());ET(a.oE,b.h5());a.oY=a.oY?0:1;a.sn=1;}}else{c=a.oY;d=a.pw;if(d!==null){if(!c){e=new Sk;e.I9=a;e.HX=c;e.Gj=d;e.Gg=b;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}else{e=new Sl;e.J2=a;e.FM=c;e.Hg
=d;e.G$=b;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}}else{if(c&&!a.sn&&(a.oE.pP?0:1)){d=new Sh;d.Jy=a;d.Hj=b;BO();b=new BG;b.ov=X(64);d.oA=b;a.pw=d;}else if(!c){d=new Sf;d.Et=a;d.D3=c;d.GY=b;BO();b=new BG;b.ov=X(64);d.oA=b;a.pw=d;}else{d=new Sg;d.Dv=a;d.CE=c;d.Gi=b;BO();b=new BG;b.ov=X(64);d.oA=b;a.pw=d;}a.rm=1;}}return a;}
let Ca=(a,b,c)=>{let d;if(b>c){d=new V;d.oe=1;d.of=1;E(d);}a:{d:{if(!a.B3){if(c<55296)break d;if(b>57343)break d;}c=c+1|0;while(true){if(b>=c)break a;DG(a,b);b=b+1|0;}}if(a.sn)ABY(a.oE,b,c+1|0);else Jw(a.oE,b,c+1|0);}return a;}
let ABE=(a,b)=>{let c,d,e,f;if(!a.pv&&b.pv)a.pv=1;if(b.xr)a.xr=1;c=a.qH;if(!(c^b.qH)){if(!c)HQ(a.oA,b.oA);else ET(a.oA,b.oA);}else if(c)Ht(a.oA,b.oA);else{HG(a.oA,b.oA);ET(a.oA,b.oA);a.qH=1;}o:{if(!a.rm){d=b.rm;if((!d?b.oE:null)!==null){c=a.oY;if(!(c^b.oY)){if(!c){HQ(a.oE,!d?b.oE:null);break o;}ET(a.oE,!d?b.oE:null);break o;}if(c){Ht(a.oE,!d?b.oE:null);break o;}HG(a.oE,!d?b.oE:null);ET(a.oE,!b.rm?b.oE:null);a.oY=1;break o;}}c=a.oY;e=a.pw;if(e!==null){if(c){f=new OY;f.Im=a;f.HU=c;f.Fc=e;f.Ff=b;Lx(f);a.pw=f;}
else{f=new OK;f.H9=a;f.F9=c;f.HO=e;f.Gq=b;BO();f.oA=A7e(2048);a.pw=f;}}else{if(!a.sn&&(a.oE.pP?0:1)){if(!c){e=new Si;e.J5=a;e.FC=b;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}else{e=new Sj;e.Je=a;e.HS=b;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}}else if(!c){e=new Sm;e.F$=a;e.FO=b;e.Hh=c;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}else{e=new Sn;e.FT=a;e.FZ=b;e.Hy=c;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}a.rm=1;}}}
let Q5=(a,b)=>{let c,d,e,f;if(!a.pv&&b.pv)a.pv=1;if(b.xr)a.xr=1;c=a.qH;if(!(c^b.qH)){if(!c)ET(a.oA,b.oA);else HQ(a.oA,b.oA);}else if(!c)Ht(a.oA,b.oA);else{HG(a.oA,b.oA);ET(a.oA,b.oA);a.qH=0;}o:{if(!a.rm){d=b.rm;if((!d?b.oE:null)!==null){c=a.oY;if(!(c^b.oY)){if(!c){ET(a.oE,!d?b.oE:null);break o;}HQ(a.oE,!d?b.oE:null);break o;}if(!c){Ht(a.oE,!d?b.oE:null);break o;}HG(a.oE,!d?b.oE:null);ET(a.oE,!b.rm?b.oE:null);a.oY=0;break o;}}c=a.oY;e=a.pw;if(e!==null){if(c){f=new ON;f.Jh=a;f.HA=c;f.GI=e;f.HE=b;Lx(f);a.pw=f;}
else{f=new OM;f.I8=a;f.HG=c;f.GP=e;f.FL=b;BO();f.oA=A7e(2048);a.pw=f;}}else{if(!a.sn&&(a.oE.pP?0:1)){if(!c){e=new OI;e.Iq=a;e.G4=b;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}else{e=new OJ;e.J1=a;e.Fz=b;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}}else if(!c){e=new OO;e.H2=a;e.HW=b;e.FY=c;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}else{e=new OH;e.FX=a;e.HD=b;e.Hk=c;BO();b=new BG;b.ov=X(64);e.oA=b;a.pw=e;}a.rm=1;}}}
let ALA=(a,b)=>{let c;c=a.pw;if(c!==null)return a.oY^c.h7(b);return a.oY^Dk(a.oE,b);}
let AWI=a=>{if(!a.rm)return a.oE;return null;}
let A0_=a=>{return a.oA;}
let AUS=a=>{let b,c;if(a.pw!==null)return a;b=!a.rm?a.oE:null;c=new OL;c.IY=a;c.BB=b;BO();b=new BG;b.ov=X(64);c.oA=b;return FO(c,a.oY);}
let A5E=a=>{let b,c,d,e,f,g,h,i,j,k;b=new L;b.og=H(16);c=Ji(a.oE,0);while(c>=0){d=(Go(c)).data;e=0;f=d.length;g=b.od;Bo(b,g,g+f|0);f=f+e|0;while(e<f){h=b.og.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.od;Bo(b,g,g+1|0);b.og.data[g]=124;c=Ji(a.oE,c+1|0);}e=b.od;if(e>0)U5(b,e-1|0);k=new P;d=b.og;h=d.data;e=b.od;U();g=h.length;if(e>=0&&e<=(g-0|0)){k.oh=R(d.data,0,e);return k;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let ANb=a=>{return a.xr;}
function Mz(){let a=this;B0.call(a);a.IP=null;a.JU=null;}
function FG(){CL.call(this);this.oZ=null;}
let Wp=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;}
let A$V=a=>{return a.oZ;}
let ATI=(a,b)=>{return !a.oZ.gY(b)&&!a.om.gY(b)?0:1;}
let A9s=(a,b)=>{return 1;}
let AQZ=a=>{let b;a.qI=1;b=a.om;if(b!==null&&!b.qI){b=b.hF();if(b!==null){a.om.qI=1;a.om=b;}a.om.gn();}b=a.oZ;if(b!==null){if(!b.qI){b=b.hF();if(b!==null){a.oZ.qI=1;a.oZ=b;}a.oZ.gn();}else if(b instanceof I3&&b.qG.Ed)a.oZ=b.om;}}
function EC(){FG.call(this);this.pe=null;}
let BbY=(a,b,c)=>{let d=new EC();AR5(d,a,b,c);return d;}
let AR5=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;a.pe=b;}
let AXq=(a,b,c,d)=>{let e,f;e=0;b:{while((b+a.pe.hQ()|0)<=d.o2){f=a.pe.hR(b,c);if(f<=0)break b;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.om.hE(b,c,d);if(f>=0)break;b=b-a.pe.hQ()|0;e=e+(-1)|0;}return f;}
let AZK=a=>{return C(208);}
function Hg(){EC.call(this);this.u4=null;}
let Bd9=(a,b,c,d)=>{let e=new Hg();APO(e,a,b,c,d);return e;}
let APO=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);a.oB=(N(g,g.od,f,10)).l();a.om=d;a.oZ=c;a.pO=e;a.pe=c;a.u4=b;}
let AYH=(a,b,c,d)=>{let e,f,g,h,i;e=a.u4;f=e.tY;g=e.tW;h=0;while(true){if(h>=f){n:{while(h<g){if((b+a.pe.hQ()|0)>d.o2)break n;i=a.pe.hR(b,c);if(i<1)break n;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.om.hE(b,c,d);if(i>=0)break;b=b-a.pe.hQ()|0;h=h+(-1)|0;}return i;}if((b+a.pe.hQ()|0)>d.o2){d.qO=1;return (-1);}i=a.pe.hR(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let AY8=a=>{return TW(a.u4);}
let EF=G(FG);
let BdP=(a,b,c)=>{let d=new EF();AT6(d,a,b,c);return d;}
let AT6=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;}
let AXI=(a,b,c,d)=>{let e;if(!a.oZ.h$(d))return a.om.hE(b,c,d);e=a.oZ.hE(b,c,d);if(e>=0)return e;return a.om.hE(b,c,d);}
let A2W=a=>{return C(209);}
let Hd=G(EC);
let Bbr=(a,b,c)=>{let d=new Hd();A4w(d,a,b,c);return d;}
let A4w=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;a.pe=b;}
let A4A=(a,b,c,d)=>{let e;e=a.oZ.hE(b,c,d);if(e<0)e=a.om.hE(b,c,d);return e;}
let AWQ=(a,b)=>{a.om=b;a.oZ.gr(b);}
let AAz=G(EC);
let A_7=a=>{let b=new AAz();AOY(b,a);return b;}
let AOY=(a,b)=>{let c,d,e,f;c=b.oZ;d=b.om;e=b.pO;f=Y;Y=f+1|0;b=new Bx;b.og=H(20);a.oB=(N(b,b.od,f,10)).l();a.om=d;a.oZ=c;a.pO=e;a.pe=c;c.gr(a);}
let A$D=(a,b,c,d)=>{while((b+a.pe.hQ()|0)<=d.o2&&a.pe.hR(b,c)>0){b=b+a.pe.hQ()|0;}return a.om.hE(b,c,d);}
let ARj=(a,b,c,d)=>{let e,f,g;e=a.om.hB(b,c,d);if(e<0)return (-1);f=e-a.pe.hQ()|0;while(f>=b&&a.pe.hR(f,c)>0){g=f-a.pe.hQ()|0;e=f;f=g;}return e;}
function BN(){let a=this;D.call(a);a.wL=null;a.wA=null;}
let A7A=(a,b)=>{if(!b&&a.wL===null)a.wL=a.hY();else if(b&&a.wA===null)a.wA=FO(a.hY(),1);if(b)return a.wA;return a.wL;}
function RT(){let a=this;Io.call(a);a.tY=0;a.tW=0;}
let TW=a=>{let b,c,d,e,f,g,h;b=a.tY;c=a.tW;if(c==2147483647)d=C(43);else{d=new Bx;d.og=H(20);d=(N(d,d.od,c,10)).l();}e=new L;e.og=H(16);c=e.od;Bo(e,c,c+1|0);e.og.data[c]=123;N(e,e.od,b,10);b=e.od;Bo(e,b,b+1|0);e.og.data[b]=44;f=e.od;if(d===null)d=C(2);F(e,f,d);b=e.od;Bo(e,b,b+1|0);g=e.og;h=g.data;h[b]=125;d=new P;b=e.od;U();c=h.length;if(b>=0&&b<=(c-0|0)){d.oh=R(g.data,0,b);return d;}d=new O;d.oe=1;d.of=1;Bt(d);E(d);}
let Sc=G(CL);
let APs=(a,b,c,d)=>{return b;}
let A6i=a=>{return C(210);}
let A6o=(a,b)=>{return 0;}
function BG(){let a=this;D.call(a);a.ov=null;a.pP=0;}
let A7e=a=>{let b=new BG();AXK(b,a);return b;}
let AXK=(a,b)=>{let c;if(b>=0){a.ov=X(((b+32|0)-1|0)/32|0);return;}c=new D_;c.oe=1;c.of=1;E(c);}
let L3=(a,b)=>{let c,d,e;if(b<0){c=new O;c.oe=1;c.of=1;E(c);}d=b/32|0;if(b>=a.pP){KK(a,d+1|0);a.pP=b+1|0;}e=a.ov.data;e[d]=e[d]|1<<(b%32|0);}
let Jw=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B9(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.pP){KK(a,e+1|0);a.pP=c;}if(d==e){f=a.ov.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.ov.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new O;i.oe=1;i.of=1;E(i);}
let N2=(a,b)=>{let c,d,e,f,g;if(b<0){c=new O;c.oe=1;c.of=1;E(c);}d=b/32|0;e=a.ov.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.pP-1|0))Iv(a);}}
let ABY=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.pP;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.ov.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.ov.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}Iv(a);return;}i=new O;i.oe=1;i.of=1;E(i);}
let Dk=(a,b)=>{let c,d,e;if(b<0){c=new O;c.oe=1;c.of=1;E(c);}d=b/32|0;e=a.ov.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
let Ji=(a,b)=>{let c,d,e,f,g;if(b<0){c=new O;c.oe=1;c.of=1;E(c);}d=a.pP;if(b>=d)return (-1);e=b/32|0;f=a.ov.data;g=f[e]>>>(b%32|0)|0;if(g)return EY(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+EY(f[g])|0;g=g+1|0;}return (-1);}
let ZC=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new O;c.oe=1;c.of=1;E(c);}d=a.pP;if(b>=d)return b;e=b/32|0;f=a.ov.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return EY(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+EY(f[h]^(-1))|0;h=h+1|0;}return d;}
let KK=(a,b)=>{let c,d,e,f,g,h;c=a.ov.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=X(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.ov=g;}
let Iv=a=>{let b,c,d;b=(a.pP+31|0)/32|0;a.pP=b*32|0;c=b-1|0;b:{while(true){if(c<0)break b;d=Ef(a.ov.data[c]);if(d<32)break;c=c+(-1)|0;a.pP=a.pP-32|0;}a.pP=a.pP-d|0;}}
let JH=(a,b)=>{let c,d,e,f,g;c=a.ov.data;d=c.length;e=b.ov.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;}
let ET=(a,b)=>{let c,d,e,f,g,h,i;c=a.ov.data;d=c.length;e=b.ov.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.pP;i=b.pP;if(h<i)i=h;a.pP=i;Iv(a);}
let Ht=(a,b)=>{let c,d,e,f,g;c=a.ov.data;d=c.length;e=b.ov.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}Iv(a);}
let HQ=(a,b)=>{let c,d,e,f,g;c=a.pP;d=b.pP;if(c>d)d=c;a.pP=d;KK(a,(d+31|0)/32|0);e=a.ov.data;c=e.length;f=b.ov.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}}
let HG=(a,b)=>{let c,d,e,f,g;c=a.pP;d=b.pP;if(c>d)d=c;a.pP=d;KK(a,(d+31|0)/32|0);e=a.ov.data;c=e.length;f=b.ov.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}Iv(a);}
function N_(){let a=this;C2.call(a);a.Aj=null;a.D5=0;}
let XX=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.qJ;f=d.o2;g=b+1|0;f=B9(g,f);if(f>0){d.qO=1;return (-1);}if(b>=0&&b<c.oh.length){h=c.oh.charCodeAt(b);if(!a.Aj.h7(h))return (-1);i=h&64512;j=i!=55296?0:1;o:{if(j){if(f>=0)break o;if(g>=0&&g<c.oh.length){if((c.oh.charCodeAt(g)&64512)!=56320?0:1)return (-1);break o;}c=new Ba;c.oe=1;c.of=1;E(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.oh.length){if(!((c.oh.charCodeAt(j)&64512)!=55296?0:1))break o;return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}}return a.om.hE(g,c,d);}c=new Ba;c.oe
=1;c.of=1;E(c);}
let A6v=a=>{let b,c,d,e,f,g,h,i;b=!a.D5?C(211):C(212);c=a.Aj.l();d=new L;d.og=H(16);F(d,d.od,C(213));F(d,d.od,b);e=d.od;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.og;g=f.data;h=d.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){b.oh=R(f.data,0,h);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
function H8(){let a=this;C2.call(a);a.u5=null;a.vZ=null;}
let AJ4=(a,b,c,d)=>{let e;e=a.u5.hE(b,c,d);if(e<0)e=XX(a.vZ,b,c,d);if(e>=0)return e;return (-1);}
let A6c=(a,b)=>{a.om=b;a.vZ.om=b;a.u5.gr(b);}
let A6P=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.u5;U();if(b===null)b=C(2);else{c=b.oB;b=b.eh();d=new L;d.og=H(16);e=d.od;Bo(d,e,e+1|0);d.og.data[e]=60;DI(d,d.od,c===null?C(2):DJ(c));e=d.od;Bo(d,e,e+1|0);d.og.data[e]=58;DI(d,d.od,b===null?C(2):DJ(b));e=d.od;Bo(d,e,e+1|0);f=d.og;g=f.data;g[e]=62;b=new P;e=d.od;h=g.length;if(e>=0&&e<=(h-0|0))b.oh=R(f.data,0,e);else{b=new O;K$(b);E(b);}}r:{c=a.vZ;if(c===null)i=C(2);else{d=c.oB;i=!c.D5?C(211):C(212);j=c.Aj.l();c=new L;c.og=H(16);EA(c,c.od,C(213));EA(c,c.od,i);EA(c,c.od,
j);i=new P;f=c.og;g=f.data;e=c.od;h=g.length;if(e>=0&&e<=(h-0|0)){i.oh=R(f.data,0,e);c=new L;c.og=H(16);k=c.od;Bo(c,k,k+1|0);c.og.data[k]=60;DI(c,c.od,d===null?C(2):DJ(d));h=c.od;Bo(c,h,h+1|0);c.og.data[h]=58;DI(c,c.od,DJ(i));h=c.od;Bo(c,h,h+1|0);f=c.og;g=f.data;g[h]=62;i=new P;e=c.od;h=g.length;if(e>=0&&e<=(h-0|0)){i.oh=R(f.data,0,e);break r;}b=new O;K$(b);E(b);}E(AJW());}}c=new L;c.og=H(16);F(c,c.od,C(214));F(c,c.od,b);F(c,c.od,C(215));F(c,c.od,i);b=new P;f=c.og;g=f.data;e=c.od;h=g.length;if(e>=0&&e<=(h-0
|0)){b.oh=R(f.data,0,e);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let AKS=(a,b)=>{return 1;}
let AKu=(a,b)=>{return 1;}
function E6(){let a=this;C2.call(a);a.qN=null;a.wF=0;}
let BeJ=a=>{let b=new E6();A6L(b,a);return b;}
let A6L=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.qN=b.ib();a.wF=b.oY;}
let A06=(a,b,c,d)=>{let e,f,g,h;a:{e=d.o2;if(b<e){f=b+1|0;if(b>=0&&b<c.oh.length){g=c.oh.charCodeAt(b);if(a.h7(g)){h=a.om.hE(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.oh.length){f=c.oh.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.h7(((g&1023)<<10|f&1023)+65536|0))break a;else return a.om.hE(e,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}}return (-1);}
let A93=a=>{let b,c,d,e,f,g,h,i;b=!a.wF?C(211):C(212);c=a.qN.l();d=new L;d.og=H(16);F(d,d.od,C(213));F(d,d.od,b);e=d.od;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.og;g=f.data;h=d.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){b.oh=R(f.data,0,h);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let ANo=(a,b)=>{return a.qN.h7(b);}
let AJU=(a,b)=>{let c,d,e;if(b instanceof Ga){c=a.qN;d=b.wl;BO();return c.h7(d);}if(b instanceof FI){c=a.qN;d=b.qM;BO();return c.h7(d);}if(b instanceof E6){c=a.qN;b=b.qN;BO();return c.h5()!==null&&b.h5()!==null?JH(c.h5(),b.h5()):1;}if(!(b instanceof FB))return 1;c=a.qN;e=b.rM;BO();return c.h5()!==null&&e.h5()!==null?JH(c.h5(),e.h5()):1;}
let APf=a=>{return a.qN;}
let A8z=(a,b)=>{a.om=b;}
let AM3=(a,b)=>{return 1;}
let RQ=G(E6);
let Bfl=a=>{let b=new RQ();AL9(b,a);return b;}
let AL9=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.qN=b.ib();a.wF=b.oY;}
let AO3=(a,b)=>{let c;c=a.qN;if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b);if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return c.h7(C1(CA,b));}
let AV7=a=>{let b,c,d,e,f,g,h,i;b=!a.wF?C(211):C(212);c=a.qN.l();d=new L;d.og=H(16);F(d,d.od,C(216));F(d,d.od,b);e=d.od;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.og;g=f.data;h=d.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){b.oh=R(f.data,0,h);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
function OP(){let a=this;C9.call(a);a.BL=null;a.Da=0;}
let BaV=a=>{let b=new OP();ARF(b,a);return b;}
let ARF=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;a.BL=b.ib();a.Da=b.oY;}
let A3C=(a,b,c)=>{let d;d=a.BL;if(b>=0&&b<c.oh.length){b=c.oh.charCodeAt(b);if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b)&65535;if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return !d.h7(C1(CA,b)&65535)?(-1):1;}c=new Ba;c.oe=1;c.of=1;E(c);}
let AZf=a=>{let b,c,d,e,f,g,h,i;b=!a.Da?C(211):C(212);c=a.BL.l();d=new L;d.og=H(16);F(d,d.od,C(216));F(d,d.od,b);e=d.od;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.og;g=f.data;h=d.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){b.oh=R(f.data,0,h);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
function FB(){let a=this;C9.call(a);a.rM=null;a.Ds=0;}
let Bcu=a=>{let b=new FB();ASI(b,a);return b;}
let ASI=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;a.rM=b.ib();a.Ds=b.oY;}
let AWY=(a,b,c)=>{let d;d=a.rM;if(b>=0&&b<c.oh.length)return !d.h7(c.oh.charCodeAt(b))?(-1):1;c=new Ba;c.oe=1;c.of=1;E(c);}
let APB=a=>{let b,c,d,e,f,g,h,i;b=!a.Ds?C(211):C(212);c=a.rM.l();d=new L;d.og=H(16);F(d,d.od,C(213));F(d,d.od,b);e=d.od;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.og;g=f.data;h=d.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){b.oh=R(f.data,0,h);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let ASj=(a,b)=>{let c,d,e;if(b instanceof FI){c=a.rM;d=b.qM;BO();return c.h7(d);}if(b instanceof FB){c=a.rM;b=b.rM;BO();return c.h5()!==null&&b.h5()!==null?JH(c.h5(),b.h5()):1;}if(!(b instanceof E6)){if(!(b instanceof Ga))return 1;return 0;}c=a.rM;e=b.qN;BO();return c.h5()!==null&&e.h5()!==null?JH(c.h5(),e.h5()):1;}
function Kf(){let a=this;C2.call(a);a.tA=null;a.sT=null;a.yr=0;}
let AQE=(a,b)=>{a.om=b;}
let ATu=a=>{let b,c,d,e,f,g,h,i;if(a.sT===null){b=new P;c=a.tA;d=c.data;U();b.oh=R(c.data,0,d.length);a.sT=b;}e=a.sT;b=new L;b.og=H(16);F(b,b.od,C(217));f=b.od;if(e===null)e=C(2);F(b,f,e);g=new P;c=b.og;d=c.data;h=b.od;U();i=d.length;if(h>=0&&h<=(i-0|0)){g.oh=R(c.data,0,h);return g;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let AII=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.o2;f=X(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.oh.length){j=c.oh.charCodeAt(b);k=AL_(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.yr;if(b!=m)return (-1);while(true){if(l>=m)return a.om.hE(i,c,d);if(f[l]!=a.tA.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.oh.length){j=c.oh.charCodeAt(i);g=j-4449|0;}else{c=new Ba;c.oe=1;c.of=1;E(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.oh.length){j
=c.oh.charCodeAt(b);h=j-4519|0;}else{c=new Ba;c.oe=1;c.of=1;E(c);}}if(h>=0&&h<28){bc:{b=b+1|0;k[2]=j;if(a.yr==3){m=k[0];f=a.tA.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.om.hE(b,c,d);break bc;}}b=(-1);}return b;}p:{if(a.yr==2){m=k[0];f=a.tA.data;if(m==f[0]&&k[1]==f[1]){b=a.om.hE(b,c,d);break p;}}b=(-1);}return b;}return (-1);}return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}
let AZk=(a,b)=>{let c,d,e,f;b:{if(b instanceof Kf){b=b;if(b.sT===null){c=new P;d=b.tA;e=d.data;U();c.oh=R(d.data,0,e.length);b.sT=c;}c=b.sT;if(a.sT===null){b=new P;d=a.tA;e=d.data;U();b.oh=R(d.data,0,e.length);a.sT=b;}b=a.sT;if(c===b)f=1;else if(!(b instanceof P))f=0;else{b=b;f=c.oh!==b.oh?0:1;}if(!f){f=0;break b;}}f=1;}return f;}
let AUY=(a,b)=>{return 1;}
function FI(){C9.call(this);this.qM=0;}
let AMh=a=>{let b=new FI();ASN(b,a);return b;}
let ASN=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;a.qM=b;}
let A3j=a=>{return 1;}
let AN$=(a,b,c)=>{let d;d=a.qM;if(b>=0&&b<c.oh.length)return d!=c.oh.charCodeAt(b)?(-1):1;c=new Ba;c.oe=1;c.of=1;E(c);}
let AMM=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof P){e=d.o2;while(true){if(b>=e)return (-1);f=E$(c,a.qM,b);if(f<0)return (-1);g=a.om;b=f+1|0;if(g.hE(b,c,d)>=0)break;}return f;}h=d.o2;c:{o:{while(true){if(b>h){b=(-1);break o;}i=b+1|0;if(i>d.o2){d.qO=1;e=(-1);}else{e=a.qM;if(b<0)break c;if(b>=c.oh.length)break c;e=e!=c.oh.charCodeAt(b)?(-1):1;e=e<0?(-1):a.om.hE(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new Ba;Bl(c);E(c);}
let APi=(a,b,c,d,e)=>{let f;if(d instanceof P){a:{while(true){if(c<b)return (-1);c=GX(d,a.qM,c);if(c<0)break a;if(c<b)break a;if(a.om.hE(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}c:{o:{while(true){if(c<b){c=(-1);break o;}if((c+1|0)>e.o2){e.qO=1;f=(-1);}else{f=a.qM;if(c<0)break c;if(c>=d.oh.length)break c;f=f!=d.oh.charCodeAt(c)?(-1):1;f=f<0?(-1):a.om.hE(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Ba;Bl(d);E(d);}
let AU$=a=>{let b,c,d,e,f,g,h;b=a.qM;c=new L;c.og=H(16);d=c.od;Bo(c,d,d+1|0);e=c.og;f=e.data;f[d]=b;g=new P;d=c.od;U();h=f.length;if(d>=0&&d<=(h-0|0)){g.oh=R(e.data,0,d);return g;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let AUP=(a,b)=>{let c,d,e,f;if(b instanceof FI)return b.qM!=a.qM?0:1;if(!(b instanceof FB)){if(b instanceof E6)return b.h7(a.qM);if(!(b instanceof Ga))return 1;return 0;}b=b;c=a.qM;d=new P;e=H(1);f=e.data;f[0]=c;U();d.oh=R(e.data,0,f.length);b=b.rM;if(0>=d.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}return (!b.h7(d.oh.charCodeAt(0))?(-1):1)<=0?0:1;}
function Rd(){C9.call(this);this.Bc=0;}
let BfJ=a=>{let b=new Rd();A5u(b,a);return b;}
let A5u=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b)&65535;if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}a.Bc=C1(CA,b)&65535;}
let AW3=(a,b,c)=>{let d;d=a.Bc;if(b>=0&&b<c.oh.length){b=c.oh.charCodeAt(b);if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b)&65535;if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return d!=(C1(CA,b)&65535)?(-1):1;}c=new Ba;c.oe=1;c.of=1;E(c);}
let A6b=a=>{let b,c,d,e,f,g,h;b=a.Bc;c=new L;c.og=H(16);F(c,c.od,C(218));d=c.od;Bo(c,d,d+1|0);e=c.og;f=e.data;f[d]=b;g=new P;d=c.od;U();h=f.length;if(d>=0&&d<=(h-0|0)){g.oh=R(e.data,0,d);return g;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
function N9(){let a=this;C9.call(a);a.A5=0;a.D_=0;}
let BdL=a=>{let b=new N9();ATm(b,a);return b;}
let ATm=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;a.A5=b;a.D_=IO(b);}
let AI0=(a,b,c)=>{let d;d=a.A5;if(b>=0&&b<c.oh.length){d:{k:{if(d!=c.oh.charCodeAt(b)){d=a.D_;if(b<0)break d;if(b>=c.oh.length)break d;if(d!=c.oh.charCodeAt(b)){b=(-1);break k;}}b=1;}return b;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}
let AOt=a=>{let b,c,d,e,f,g,h;b=a.A5;c=new L;c.og=H(16);F(c,c.od,C(219));d=c.od;Bo(c,d,d+1|0);e=c.og;f=e.data;f[d]=b;g=new P;d=c.od;U();h=f.length;if(d>=0&&d<=(h-0|0)){g.oh=R(e.data,0,d);return g;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
function Hj(){let a=this;C2.call(a);a.vV=0;a.st=null;a.up=null;a.ul=0;}
let Bg2=(a,b)=>{let c=new Hj();AKh(c,a,b);return c;}
let AKh=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.vV=1;a.up=b;a.ul=c;}
let A$e=(a,b)=>{a.om=b;}
let ARZ=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=X(4);f=d.o2;if(b>=f)return (-1);g=LB(a,b,c,f);h=b+a.vV|0;i=A1b.ig(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;CY(i,0,e,0,b);b=0+b|0;}k:{if(h<f){i=e.data;g=LB(a,h,c,f);while(b<4){if(!A6t(g)){k=b+1|0;i[b]=g;}else{j=(A1b.ig(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.vV|0;if(h>=f){b=k;break k;}g=LB(a,h,c,f);b=k;}}}if(b!=a.ul)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.om.hE(h,c,d);if(j[g]!=a.up.data[g])break;g
=g+1|0;}return (-1);}
let A55=a=>{let b,c,d,e,f,g,h,i;if(a.st===null){b=new L;b.og=H(16);c=0;while(c<a.ul){d=Go(a.up.data[c]);e=d.data.length;MA(b,b.od,d,0,e);c=c+1|0;}f=new P;d=b.og;g=d.data;h=b.od;U();e=g.length;if(h>=0&&h<=(e-0|0)){f.oh=R(d.data,0,h);a.st=f;}else{b=new O;Bl(b);E(b);}}i=a.st;b=new L;b.og=H(16);F(b,b.od,C(220));c=b.od;if(i===null)i=C(2);F(b,c,i);f=new P;d=b.og;g=d.data;h=b.od;U();e=g.length;if(h>=0&&h<=(e-0|0)){f.oh=R(d.data,0,h);return f;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let LB=(a,b,c,d)=>{let e,f,g,h;b:{a.vV=1;if(b>=(d-1|0)){if(b>=0&&b<c.oh.length){e=c.oh.charCodeAt(b);break b;}c=new Ba;c.oe=1;c.of=1;E(c);}d=b+1|0;if(b>=0&&b<c.oh.length){e=c.oh.charCodeAt(b);if(d>=0&&d<c.oh.length){f=c.oh.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=H(2);h=g.data;h[0]=e;h[1]=f;e=ACA(g,0,h.length);a.vV=2;}break b;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}return e;}
let APv=(a,b)=>{let c,d,e,f,g,h,i;b:{if(b instanceof Hj){b=b;if(b.st===null){c=new L;c.og=H(16);d=0;while(d<b.ul){e=Go(b.up.data[d]);f=e.data.length;MA(c,c.od,e,0,f);d=d+1|0;}g=new P;e=c.og;h=e.data;i=c.od;U();f=h.length;if(i>=0&&i<=(f-0|0)){g.oh=R(e.data,0,i);b.st=g;}else{b=new O;Bl(b);E(b);}}g=b.st;if(a.st===null){b=new L;b.og=H(16);d=0;while(d<a.ul){e=Go(a.up.data[d]);f=e.data.length;MA(b,b.od,e,0,f);d=d+1|0;}c=new P;e=b.og;h=e.data;f=b.od;U();i=h.length;if(f>=0&&f<=(i-0|0)){c.oh=R(e.data,0,f);a.st=c;}else
{b=new O;Bl(b);E(b);}}b=a.st;if(g===b)d=1;else if(!(b instanceof P))d=0;else{b=b;d=g.oh!==b.oh?0:1;}if(!d){d=0;break b;}}d=1;}return d;}
let A7f=(a,b)=>{return 1;}
let AA2=G(Hj);
let Bgz=(a,b)=>{let c=new AA2();A2Q(c,a,b);return c;}
let A2Q=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.vV=1;a.up=b;a.ul=c;}
let AF5=G(Hj);
let Bbb=(a,b)=>{let c=new AF5();AZr(c,a,b);return c;}
let AZr=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.vV=1;a.up=b;a.ul=c;}
let RD=G(EF);
let AZ$=(a,b,c,d)=>{let e;while(true){e=a.oZ.hE(b,c,d);if(e<=0)break;b=e;}return a.om.hE(b,c,d);}
let SS=G(EF);
let A5f=(a,b,c,d)=>{let e;e=a.oZ.hE(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.oZ.hE(e,c,d);if(b<=e)break;e=b;}b=e;}return a.om.hE(b,c,d);}
let Jg=G(EF);
let BgP=(a,b,c)=>{let d=new Jg();AXu(d,a,b,c);return d;}
let AXu=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;}
let A8s=(a,b,c,d)=>{let e;if(!a.oZ.h$(d))return a.om.hE(b,c,d);e=a.oZ.hE(b,c,d);if(e>=0)return e;return a.om.hE(b,c,d);}
let A9C=(a,b)=>{a.om=b;a.oZ.gr(b);}
let O3=G(Jg);
let APe=(a,b,c,d)=>{let e;e=a.oZ.hE(b,c,d);if(e<=0)e=b;return a.om.hE(e,c,d);}
let A5O=(a,b)=>{a.om=b;}
function Hy(){let a=this;EF.call(a);a.sw=null;a.rg=0;}
let BiV=(a,b,c,d,e)=>{let f=new Hy();ABL(f,a,b,c,d,e);return f;}
let ABL=(a,b,c,d,e,f)=>{let g,h;g=Y;Y=g+1|0;h=new Bx;h.og=H(20);a.oB=(N(h,h.od,g,10)).l();a.om=d;a.oZ=c;a.pO=e;a.sw=b;a.rg=f;}
let A$6=(a,b,c,d)=>{let e,f,g,h;e=a.rg;e=d.sj.data[e];if(!a.oZ.h$(d))return a.om.hE(b,c,d);if(e>=a.sw.tW)return a.om.hE(b,c,d);f=a.rg;e=e+1|0;d.sj.data[f]=e;g=a.oZ.hE(b,c,d);if(g>=0){b=a.rg;d.sj.data[b]=0;return g;}g=a.rg;e=e+(-1)|0;h=d.sj.data;h[g]=e;if(e>=a.sw.tY)return a.om.hE(b,c,d);h[g]=0;return (-1);}
let AVm=a=>{return TW(a.sw);}
let Ol=G(Hy);
let AOE=(a,b,c,d)=>{let e,f,g;e=0;f=a.sw.tW;b:{while(true){g=a.oZ.hE(b,c,d);if(g<=b)break b;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.sw.tY)return (-1);return a.om.hE(b,c,d);}
let PM=G(EF);
let AV$=(a,b,c,d)=>{let e;if(!a.oZ.h$(d))return a.om.hE(b,c,d);e=a.om.hE(b,c,d);if(e>=0)return e;return a.oZ.hE(b,c,d);}
let ADP=G(Jg);
let Bap=(a,b,c)=>{let d=new ADP();ASq(d,a,b,c);return d;}
let ASq=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;}
let AKW=(a,b,c,d)=>{let e;if(!a.oZ.h$(d))return a.om.hE(b,c,d);e=a.om.hE(b,c,d);if(e<0)e=a.oZ.hE(b,c,d);return e;}
let QG=G(Hy);
let BiW=(a,b,c,d,e)=>{let f=new QG();Za(f,a,b,c,d,e);return f;}
let Za=(a,b,c,d,e,f)=>{let g,h;g=Y;Y=g+1|0;h=new Bx;h.og=H(20);a.oB=(N(h,h.od,g,10)).l();a.om=d;a.oZ=c;a.pO=e;a.sw=b;a.rg=f;}
let AX9=(a,b,c,d)=>{let e,f,g;e=a.rg;f=d.sj.data[e];if(!a.oZ.h$(d))return a.om.hE(b,c,d);g=a.sw;if(f>=g.tW){e=a.rg;d.sj.data[e]=0;return a.om.hE(b,c,d);}if(f<g.tY){e=a.rg;d.sj.data[e]=f+1|0;e=a.oZ.hE(b,c,d);}else{e=a.om.hE(b,c,d);if(e>=0){b=a.rg;d.sj.data[b]=0;return e;}e=a.rg;d.sj.data[e]=f+1|0;e=a.oZ.hE(b,c,d);}return e;}
let Yb=G(FG);
let BaD=(a,b,c)=>{let d=new Yb();AJP(d,a,b,c);return d;}
let AJP=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;}
let A$S=(a,b,c,d)=>{let e;e=d.o2;if(e>b)return a.om.hT(b,e,c,d);return a.om.hE(b,c,d);}
let AUd=(a,b,c,d)=>{let e;e=d.o2;if(a.om.hT(b,e,c,d)>=0)return b;return (-1);}
let A6T=a=>{return C(221);}
function ACy(){FG.call(this);this.Ai=null;}
let A_O=(a,b,c,d)=>{let e=new ACy();A6M(e,a,b,c,d);return e;}
let A6M=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);a.oB=(N(g,g.od,f,10)).l();a.om=c;a.oZ=b;a.pO=d;a.Ai=e;}
let ASl=(a,b,c,d)=>{let e,f,g;e=d.o2;f=b;b:{while(true){if(f>=e){f=(-1);break b;}g=a.Ai;if(f<0)break;if(f>=c.oh.length)break;if(g.ik(c.oh.charCodeAt(f)))break b;f=f+1|0;}c=new Ba;c.oe=1;c.of=1;E(c);}if(f>=0)e=f;if(e>b)return a.om.hT(b,e,c,d);return a.om.hE(b,c,d);}
let AIO=(a,b,c,d)=>{let e,f,g,h,i;e=d.o2;f=a.om.hB(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.Ai;if(g<0)break;if(g>=c.oh.length)break;if(h.ik(c.oh.charCodeAt(g)))break a;g=g+1|0;}c=new Ba;c.oe=1;c.of=1;E(c);}if(g>=0)e=g;g=a.om.hT(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;h:{while(true){if(i<b){i=(-1);break h;}d=a.Ai;if(i<0)break;if(i>=c.oh.length)break;if(d.ik(c.oh.charCodeAt(i)))break h;i=i+(-1)|0;}c=new Ba;c.oe=1;c.of=1;E(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;}
let A7S=a=>{return C(222);}
let G6=G();
let A3r=null;let ALJ=null;let SI=b=>{let c;if(!(b&1)){c=ALJ;if(c!==null)return c;c=new Uz;ALJ=c;return c;}c=A3r;if(c!==null)return c;c=new Uy;A3r=c;return c;}
let AIs=G(EC);
let Bcg=(a,b,c)=>{let d=new AIs();AS4(d,a,b,c);return d;}
let AS4=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;a.pe=b;}
let AJD=(a,b,c,d)=>{let e;b:{while(true){if((b+a.pe.hQ()|0)>d.o2)break b;e=a.pe.hR(b,c);if(e<1)break;b=b+e|0;}}return a.om.hE(b,c,d);}
let AAx=G(Hd);
let Bdg=(a,b,c)=>{let d=new AAx();A$l(d,a,b,c);return d;}
let A$l=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;a.pe=b;}
let AQ$=(a,b,c,d)=>{let e;if((b+a.pe.hQ()|0)<=d.o2){e=a.pe.hR(b,c);if(e>=1)b=b+e|0;}return a.om.hE(b,c,d);}
let ACN=G(Hg);
let BcD=(a,b,c,d)=>{let e=new ACN();A4$(e,a,b,c,d);return e;}
let A4$=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);a.oB=(N(g,g.od,f,10)).l();a.om=d;a.oZ=c;a.pO=e;a.pe=c;a.u4=b;}
let A79=(a,b,c,d)=>{let e,f,g,h,i;e=a.u4;f=e.tY;g=e.tW;h=0;while(true){if(h>=f){n:{while(true){if(h>=g)break n;if((b+a.pe.hQ()|0)>d.o2)break n;i=a.pe.hR(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.om.hE(b,c,d);}if((b+a.pe.hQ()|0)>d.o2){d.qO=1;return (-1);}i=a.pe.hR(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let ADK=G(EC);
let Bgk=(a,b,c)=>{let d=new ADK();AWT(d,a,b,c);return d;}
let AWT=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;a.pe=b;}
let ASe=(a,b,c,d)=>{let e;while(true){e=a.om.hE(b,c,d);if(e>=0)break;if((b+a.pe.hQ()|0)<=d.o2){e=a.pe.hR(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
let AGc=G(Hd);
let Bf2=(a,b,c)=>{let d=new AGc();A1r(d,a,b,c);return d;}
let A1r=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.og=H(20);a.oB=(N(f,f.od,e,10)).l();a.om=c;a.oZ=b;a.pO=d;a.pe=b;}
let AJN=(a,b,c,d)=>{let e;e=a.om.hE(b,c,d);if(e>=0)return e;return a.oZ.hE(b,c,d);}
let X2=G(Hg);
let Ba1=(a,b,c,d)=>{let e=new X2();A6z(e,a,b,c,d);return e;}
let A6z=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.og=H(20);a.oB=(N(g,g.od,f,10)).l();a.om=d;a.oZ=c;a.pO=e;a.pe=c;a.u4=b;}
let A8h=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.u4;f=e.tY;g=e.tW;h=0;while(true){if(h>=f){n:{while(true){i=a.om.hE(b,c,d);if(i>=0)break;if((b+a.pe.hQ()|0)<=d.o2){i=a.pe.hR(b,c);b=b+i|0;h=h+1|0;}if(i<1)break n;if(h>g)break n;}return i;}return (-1);}if((b+a.pe.hQ()|0)>d.o2){d.qO=1;return (-1);}j=a.pe.hR(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
let PE=G(CL);
let Bcy=()=>{let a=new PE();AMj(a);return a;}
let AMj=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.og=H(20);a.oB=(N(c,c.od,b,10)).l();}
let A3$=(a,b,c,d)=>{if(b&&!(d.vQ&&b==d.qJ))return (-1);return a.om.hE(b,c,d);}
let A3b=(a,b)=>{return 0;}
let ARa=a=>{return C(223);}
function W3(){CL.call(this);this.Gk=0;}
let A8Z=a=>{let b=new W3();AO7(b,a);return b;}
let AO7=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.Gk=b;}
let AY0=(a,b,c,d)=>{let e,f,g;if(b>=d.o2)e=32;else if(b>=0&&b<c.oh.length)e=c.oh.charCodeAt(b);else{c=new Ba;c.oe=1;c.of=1;E(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.oh.length)f=c.oh.charCodeAt(f);else{c=new Ba;c.oe=1;c.of=1;E(c);}}g=d.AD?0:d.qJ;return (e!=32&&!S5(a,e,b,g,c)?0:1)^(f!=32&&!S5(a,f,b-1|0,g,c)?0:1)^a.Gk?(-1):a.om.hE(b,c,d);}
let AZg=(a,b)=>{return 0;}
let A$3=a=>{return C(224);}
let S5=(a,b,c,d,e)=>{let f;b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}f=1;break b;}f=0;}if(!f&&b!=95){n:{e:{if(Dt(b)==6)while(true){c=c+(-1)|0;if(c<d)break e;if(c<0)break n;if(c>=e.oh.length)break n;bf:{l:{f=e.oh.charCodeAt(c);switch(Dt(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break l;default:break l;}b=1;break bf;}b=0;}if(b)return 0;if(Dt(f)!=6)return 1;}}return 1;}e=new Ba;e.oe=1;e.of=1;E(e);}return 0;}
let ACx=G(CL);
let Bal=()=>{let a=new ACx();AT9(a);return a;}
let AT9=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.og=H(20);a.oB=(N(c,c.od,b,10)).l();}
let AO6=(a,b,c,d)=>{if(b!=d.wS)return (-1);return a.om.hE(b,c,d);}
let AWG=(a,b)=>{return 0;}
let AYK=a=>{return C(225);}
function Q_(){CL.call(this);this.x5=0;}
let Bck=a=>{let b=new Q_();AHg(b,a);return b;}
let AHg=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.x5=b;}
let A61=(a,b,c,d)=>{let e,f,g;e=!d.vQ?c.oh.length:d.o2;if(b>=e){f=a.x5;d.px.data[f]=0;return a.om.hE(b,c,d);}k:{e=e-b|0;if(e==2){if(b>=0&&b<c.oh.length){if(c.oh.charCodeAt(b)!=13)break k;g=b+1|0;if(g>=0&&g<c.oh.length){if(c.oh.charCodeAt(g)!=10)break k;f=a.x5;d.px.data[f]=0;return a.om.hE(b,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}}r:{bf:{if(e==1){if(b>=0&&b<c.oh.length){f=c.oh.charCodeAt(b);if(f==10)break r;if(f==13)break r;if(f==133)break r;if((f|1)!=8233)break bf;else break r;}c=new Ba;c.oe
=1;c.of=1;E(c);}}return (-1);}e=a.x5;d.px.data[e]=0;return a.om.hE(b,c,d);}
let AZZ=(a,b)=>{let c,d,e;c=a.x5;d=b.px.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let A4K=a=>{return C(226);}
let AHA=G(CL);
let Bcs=()=>{let a=new AHA();AOV(a);return a;}
let AOV=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.og=H(20);a.oB=(N(c,c.od,b,10)).l();}
let A5_=(a,b,c,d)=>{if(b<(!d.AD?d.o2:c.oh.length))return (-1);d.qO=1;d.JQ=1;return a.om.hE(b,c,d);}
let AW2=(a,b)=>{return 0;}
let ANT=a=>{return C(227);}
function AB7(){CL.call(this);this.Ho=null;}
let Bgi=a=>{let b=new AB7();A65(b,a);return b;}
let A65=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.Ho=b;}
let AZL=(a,b,c,d)=>{let e,f;b:{a:{d:{if(b!=d.o2){if(!b)break a;if(d.vQ&&b==d.qJ)break a;e=a.Ho;f=b-1|0;if(f>=0&&f<c.oh.length){f=c.oh.charCodeAt(f);if(b<0)break b;if(b>=c.oh.length)break b;if(!e.im(f,c.oh.charCodeAt(b)))break d;else break a;}c=new Ba;c.oe=1;c.of=1;E(c);}}return (-1);}return a.om.hE(b,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}
let ANG=(a,b)=>{return 0;}
let AYu=a=>{return C(228);}
let AAF=G(C2);
let BcP=()=>{let a=new AAF();A51(a);return a;}
let A51=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.og=H(20);a.oB=(N(c,c.od,b,10)).l();}
let AWb=(a,b,c,d)=>{let e,f,g,h,i;e=d.o2;f=b+1|0;if(f>e){d.qO=1;return (-1);}if(b>=0&&b<c.oh.length){g=B9(c.oh.charCodeAt(b)&64512,55296);h=g?0:1;o:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.oh.length){h=c.oh.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break o;else return a.om.hE(i,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}}}return a.om.hE(f,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}
let AMp=a=>{return C(229);}
let AZm=(a,b)=>{a.om=b;}
let A5Y=a=>{return (-2147483602);}
let AZl=(a,b)=>{return 1;}
function WD(){C2.call(this);this.Dj=null;}
let Bb7=a=>{let b=new WD();ALC(b,a);return b;}
let ALC=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.Dj=b;}
let A56=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.o2;f=b+1|0;if(f>e){d.qO=1;return (-1);}if(b>=0&&b<c.oh.length){g=c.oh.charCodeAt(b);h=B9(g&64512,55296);i=h?0:1;o:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.oh.length){i=c.oh.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break o;else return a.Dj.ik(((g&1023)<<10|i&1023)+65536|0)?(-1):a.om.hE(j,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}}}return a.Dj.ik(g)?(-1):a.om.hE(f,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}
let AZ8=a=>{return C(230);}
let A7R=(a,b)=>{a.om=b;}
let AIu=a=>{return (-2147483602);}
let AWt=(a,b)=>{return 1;}
function AHv(){CL.call(this);this.BV=0;}
let Bbi=a=>{let b=new AHv();A1J(b,a);return b;}
let A1J=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.BV=b;}
let APA=(a,b,c,d)=>{let e,f;e=!d.vQ?c.oh.length:d.o2;if(b>=e){e=a.BV;d.px.data[e]=0;return a.om.hE(b,c,d);}n:{if((e-b|0)==1){if(b>=0&&b<c.oh.length){if(c.oh.charCodeAt(b)!=10)break n;else{f=a.BV;d.px.data[f]=1;return a.om.hE(b+1|0,c,d);}}c=new Ba;c.oe=1;c.of=1;E(c);}}return (-1);}
let A1I=(a,b)=>{let c,d,e;c=a.BV;d=b.px.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AQb=a=>{return C(226);}
function AFs(){CL.call(this);this.AI=0;}
let BaX=a=>{let b=new AFs();A2j(b,a);return b;}
let A2j=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.AI=b;}
let ARV=(a,b,c,d)=>{let e;if((!d.vQ?c.oh.length-b|0:d.o2-b|0)<=0){e=a.AI;d.px.data[e]=0;return a.om.hE(b,c,d);}if(b>=0&&b<c.oh.length){if(c.oh.charCodeAt(b)!=10)return (-1);e=a.AI;d.px.data[e]=1;return a.om.hE(b+1|0,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}
let A1x=(a,b)=>{let c,d,e;c=a.AI;d=b.px.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AJn=a=>{return C(231);}
function ABD(){CL.call(this);this.xE=0;}
let A_x=a=>{let b=new ABD();A$9(b,a);return b;}
let A$9=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.xE=b;}
let A21=(a,b,c,d)=>{let e,f,g;e=!d.vQ?c.oh.length-b|0:d.o2-b|0;if(!e){e=a.xE;d.px.data[e]=0;return a.om.hE(b,c,d);}k:{if(e<2){if(b>=0&&b<c.oh.length){f=c.oh.charCodeAt(b);g=97;break k;}c=new Ba;c.oe=1;c.of=1;E(c);}if(b>=0&&b<c.oh.length){f=c.oh.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.oh.length){g=c.oh.charCodeAt(e);break k;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.xE;d.px.data[e]=0;return a.om.hE(b,c,d);case 13:if(g!=10){e=a.xE;d.px.data[e]=0;return a.om.hE(b,
c,d);}e=a.xE;d.px.data[e]=0;return a.om.hE(b,c,d);default:}return (-1);}
let ALI=(a,b)=>{let c,d,e;c=a.xE;d=b.px.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let ANI=a=>{return C(232);}
function Jc(){let a=this;C2.call(a);a.xN=0;a.u_=0;}
let BgT=(a,b)=>{let c=new Jc();ALq(c,a,b);return c;}
let ALq=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.xN=b;a.u_=c;}
let AJI=(a,b,c,d)=>{let e,f,g,h,i;e=Ju(a,d);if(e!==null&&(b+e.oh.length|0)<=d.o2){f=0;k:{n:{c:{o:{while(true){if(f>=e.oh.length){g=a.u_;d.px.data[g]=e.oh.length;return a.om.hE(b+e.oh.length|0,c,d);}if(f<0)break c;if(f>=e.oh.length)break c;h=e.oh.charCodeAt(f);i=b+f|0;if(i<0)break o;if(i>=c.oh.length)break o;if(h!=c.oh.charCodeAt(i)){if(f<0)break k;if(f>=e.oh.length)break k;g=IO(e.oh.charCodeAt(f));if(i<0)break n;if(i>=c.oh.length)break n;if(g!=c.oh.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new Ba;c.oe=1;c.of
=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}return (-1);}
let A6$=(a,b)=>{a.om=b;}
let Ju=(a,b)=>{let c,d,e,f,g;c=a.xN;d=b.pJ.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.sD.oh.length?Cv(b.sD,f,g):null;}
let AX1=a=>{let b,c,d,e,f,g,h;b=a.pH;c=new L;c.og=H(16);F(c,c.od,C(233));N(c,c.od,b,10);d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let ATh=(a,b)=>{let c,d,e;c=a.u_;d=b.px.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AHx=G(Jc);
let Bdp=(a,b)=>{let c=new AHx();A9u(c,a,b);return c;}
let A9u=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.xN=b;a.u_=c;}
let ALO=(a,b,c,d)=>{let e,f,g;e=Ju(a,d);if(e!==null&&(b+e.oh.length|0)<=d.o2){f=!KM(c,e,b)?(-1):e.oh.length;if(f<0)return (-1);g=a.u_;d.px.data[g]=f;return a.om.hE(b+f|0,c,d);}return (-1);}
let AU5=(a,b,c,d)=>{let e,f,g;e=Ju(a,d);f=d.qJ;if(e!==null&&(b+e.oh.length|0)<=f){while(true){if(b>f)return (-1);g=MT(c,e,b);if(g<0)return (-1);if(a.om.hE(g+e.oh.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);}
let AJo=(a,b,c,d,e)=>{let f,g;f=Ju(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Pc(d,f,c);if(g<0)break a;if(g<b)break a;if(a.om.hE(g+f.oh.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
let A45=(a,b)=>{return 1;}
let A9A=a=>{let b,c,d,e,f,g,h;b=a.pH;c=new L;c.og=H(16);F(c,c.od,C(234));N(c,c.od,b,10);d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
function AD8(){Jc.call(this);this.Ib=0;}
let BaY=(a,b)=>{let c=new AD8();ANs(c,a,b);return c;}
let ANs=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.og=H(20);a.oB=(N(e,e.od,d,10)).l();a.xN=b;a.u_=c;}
let AQn=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.xN;f=d.pJ.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.sD.oh.length?Cv(d.sD,h,i):null;if(j!==null&&(b+j.oh.length|0)<=d.o2){i=0;o:{e:{while(true){if(i>=j.oh.length){e=a.u_;d.px.data[e]=j.oh.length;return a.om.hE(b+j.oh.length|0,c,d);}if(i<0)break o;if(i>=j.oh.length)break o;e=j.oh.charCodeAt(i);if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}e=C1(CJ,e)&65535;if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value)
:null)));}g=C1(CA,e)&65535;h=b+i|0;if(h<0)break e;if(h>=c.oh.length)break e;e=c.oh.charCodeAt(h);if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}e=C1(CJ,e)&65535;if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}if(g!=(C1(CA,e)&65535))break;i=i+1|0;}return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}return (-1);}
let AZh=a=>{let b,c,d,e,f,g,h;b=a.Ib;c=new L;c.og=H(16);F(c,c.od,C(235));N(c,c.od,b,10);d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let Lh=G(Bx);
let TF=(a,b,c,d,e)=>{AFy(a,b,c,d,e);return a;}
let ANc=(a,b,c,d,e)=>{let f,g,h,i;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.og.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AY7=(a,b,c,d)=>{let e,f,g,h,i;e=a.od;Bo(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.og.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let AZy=(a,b)=>{R$(a,b);}
let A8K=(a,b,c)=>{Bo(a,b,b+1|0);a.og.data[b]=c;return a;}
let AXA=(a,b,c)=>{F(a,b,c);return a;}
function AEM(){let a=this;C9.call(a);a.qk=null;a.Ek=null;a.Dq=null;}
let Ba4=a=>{let b=new AEM();A0w(b,a);return b;}
let A0w=(a,b)=>{let c,d,e;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;a.qk=Bi(b);c=b.od;a.pa=c;a.Ek=A5X(c);a.Dq=A5X(a.pa);c=0;b:{a:{while(c<(a.pa-1|0)){b=a.Ek;d=a.qk;if(c<0)break b;if(c>=d.oh.length)break b;PF(b,d.oh.charCodeAt(c),(a.pa-c|0)-1|0);b=a.Dq;d=a.qk;e=(a.pa-c|0)-1|0;if(e<0)break a;if(e>=d.oh.length)break a;PF(b,d.oh.charCodeAt(e),(a.pa-c|0)-1|0);c=c+1|0;}return;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let AMb=(a,b,c)=>{let d,e,f,g;d=0;b:{a:{d:{while(d<a.pa){e=d+b|0;if(e<0)break b;if(e>=c.oh.length)break b;f=c.oh.charCodeAt(e);g=a.qk;if(d<0)break a;if(d>=g.oh.length)break a;if(f!=g.oh.charCodeAt(d)){b=0;break d;}d=d+1|0;}b=1;}return !b?(-1):a.pa;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}
let AYV=(a,b,c,d)=>{let e,f;e=d.o2;while(true){if(b>e)return (-1);f=AHB(a,c,b,e);if(f<0)return (-1);if(a.om.hE(f+a.pa|0,c,d)>=0)break;b=f+1|0;}return f;}
let A1N=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AHe(a,d,b,c);if(c<0)return (-1);if(a.om.hE(c+a.pa|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
let AR8=a=>{let b,c,d,e,f,g,h;b=a.qk;c=new L;c.og=H(16);F(c,c.od,C(236));d=c.od;if(b===null)b=C(2);F(c,d,b);b=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){b.oh=R(e.data,0,g);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let AOh=(a,b)=>{let c,d,e;if(b instanceof FI){c=b.qM;b=a.qk;if(0<b.oh.length)return c!=b.oh.charCodeAt(0)?0:1;b=new Ba;b.oe=1;b.of=1;E(b);}if(b instanceof FB){b=b;d=Cv(a.qk,0,1);b=b.rM;if(0>=d.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}return (!b.h7(d.oh.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof E6)){if(!(b instanceof Ga))return 1;g:{if(a.qk.oh.length>1){e=b.wl;b=a.qk;if(0>=b.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}c=b.oh.charCodeAt(0);b=a.qk;if(1>=b.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}if(e==(((c&1023)
<<10|b.oh.charCodeAt(1)&1023)+65536|0)){c=1;break g;}}c=0;}return c;}b=b;d=a.qk;if(0>=d.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}w:{m:{if(!b.h7(d.oh.charCodeAt(0))){if(a.qk.oh.length<=1)break m;d=a.qk;if(0>=d.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}c=d.oh.charCodeAt(0);d=a.qk;if(1>=d.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}if(!b.h7(((c&1023)<<10|d.oh.charCodeAt(1)&1023)+65536|0))break m;}c=1;break w;}c=0;}return c;}
let AHB=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.qk;f=a.pa-1|0;if(f>=0&&f<e.oh.length){g=e.oh.charCodeAt(f);d:{k:{n:{while(true){f=a.pa;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break n;if(f>=b.oh.length)break n;h=b.oh.charCodeAt(f);if(h==g){f=0;bf:{while(f<a.pa){i=f+c|0;if(i<0)break d;if(i>=b.oh.length)break d;j=b.oh.charCodeAt(i);e=a.qk;if(f<0)break k;if(f>=e.oh.length)break k;if(j!=e.oh.charCodeAt(f)){f=0;break bf;}f=f+1|0;}f=1;}if(f)break;}c=c+TD(a.Ek,h)|0;}return c;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe
=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let AHe=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.qk;if(0>=e.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}f=e.oh.charCodeAt(0);g=(b.oh.length-d|0)-a.pa|0;if(g<=0)d=d+g|0;k:{n:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.oh.length)break c;h=b.oh.charCodeAt(d);if(h==f){g=0;l:{while(g<a.pa){i=g+d|0;if(i<0)break k;if(i>=b.oh.length)break k;j=b.oh.charCodeAt(i);e=a.qk;if(g<0)break n;if(g>=e.oh.length)break n;if(j!=e.oh.charCodeAt(g)){g=0;break l;}g=g+1|0;}g=1;}if(g)break;}d=d-TD(a.Dq,h)|0;}return d;}b=new Ba;b.oe=
1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
function N6(){C9.call(this);this.zq=null;}
let AQy=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{while(true){if(d>=a.zq.oh.length)return a.zq.oh.length;e=a.zq;if(d<0)break b;if(d>=e.oh.length)break b;f=e.oh.charCodeAt(d);g=b+d|0;if(g<0)break a;if(g>=c.oh.length)break a;h=c.oh.charCodeAt(g);if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}h=C1(CJ,h)&65535;if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}if(f!=(C1(CA,h)&65535))break;d=d+1|0;}return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe
=1;c.of=1;E(c);}
let AOu=a=>{let b,c,d,e,f,g,h;b=a.zq;c=new L;c.og=H(16);F(c,c.od,C(237));d=c.od;if(b===null)b=C(2);F(c,d,b);b=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){b.oh=R(e.data,0,g);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
function VY(){C9.call(this);this.xf=null;}
let Bg6=a=>{let b=new VY();A2h(b,a);return b;}
let A2h=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;a.xf=Bi(b);a.pa=b.od;}
let A7$=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{d:{k:{while(true){if(d>=a.xf.oh.length)return a.xf.oh.length;e=a.xf;if(d<0)break d;if(d>=e.oh.length)break d;f=e.oh.charCodeAt(d);g=b+d|0;if(g<0)break k;if(g>=c.oh.length)break k;if(f!=c.oh.charCodeAt(g)){e=a.xf;if(d<0)break b;if(d>=e.oh.length)break b;h=IO(e.oh.charCodeAt(d));if(g<0)break a;if(g>=c.oh.length)break a;if(h!=c.oh.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe
=1;c.of=1;E(c);}
let A87=a=>{let b,c,d,e,f,g,h;b=a.xf;c=new L;c.og=H(16);F(c,c.od,C(238));d=c.od;if(b===null)b=C(2);F(c,d,b);b=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){b.oh=R(e.data,0,g);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let AIr=G();
let Iu=G();
let VR=null;let X$=null;let A6F=null;let ATr=()=>{ATr=Bk(Iu);AMz();}
let AHN=(a,b)=>{let c,d,e,f,g;c=0;while(true){ATr();d=A6F.data;if(c>=d.length){e=new Mz;e.oe=1;e.of=1;e.oi=C(43);e.IP=C(43);e.JU=b;E(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof P))g=0;else{f=f;g=b.oh!==f.oh?0:1;}if(g)break;c=c+1|0;}return d[1];}
let AMz=()=>{VR=Bcr();X$=BeN();A6F=S(LA(D),[S(D,[C(239),BcX()]),S(D,[C(240),A_s()]),S(D,[C(241),Bf6()]),S(D,[C(242),Bgx()]),S(D,[C(243),X$]),S(D,[C(244),Be6()]),S(D,[C(245),Ba7()]),S(D,[C(246),Bdu()]),S(D,[C(247),Bdm()]),S(D,[C(248),A_J()]),S(D,[C(249),Baq()]),S(D,[C(250),Bdw()]),S(D,[C(251),BbX()]),S(D,[C(252),A_n()]),S(D,[C(253),Bgm()]),S(D,[C(254),Ban()]),S(D,[C(255),Be4()]),S(D,[C(256),Bd8()]),S(D,[C(257),Be5()]),S(D,[C(258),A_S()]),S(D,[C(259),BgH()]),S(D,[C(260),BdS()]),S(D,[C(261),Bbu()]),S(D,[C(262),
Bf4()]),S(D,[C(263),Bf1()]),S(D,[C(264),BcG()]),S(D,[C(265),A_Q()]),S(D,[C(266),BfK()]),S(D,[C(267),VR]),S(D,[C(268),BbE()]),S(D,[C(269),Bdv()]),S(D,[C(270),VR]),S(D,[C(271),A_h()]),S(D,[C(272),X$]),S(D,[C(273),BaK()]),S(D,[C(274),Bn(0,127)]),S(D,[C(275),Bn(128,255)]),S(D,[C(276),Bn(256,383)]),S(D,[C(277),Bn(384,591)]),S(D,[C(278),Bn(592,687)]),S(D,[C(279),Bn(688,767)]),S(D,[C(280),Bn(768,879)]),S(D,[C(281),Bn(880,1023)]),S(D,[C(282),Bn(1024,1279)]),S(D,[C(283),Bn(1280,1327)]),S(D,[C(284),Bn(1328,1423)]),S(D,
[C(285),Bn(1424,1535)]),S(D,[C(286),Bn(1536,1791)]),S(D,[C(287),Bn(1792,1871)]),S(D,[C(288),Bn(1872,1919)]),S(D,[C(289),Bn(1920,1983)]),S(D,[C(290),Bn(2304,2431)]),S(D,[C(291),Bn(2432,2559)]),S(D,[C(292),Bn(2560,2687)]),S(D,[C(293),Bn(2688,2815)]),S(D,[C(294),Bn(2816,2943)]),S(D,[C(295),Bn(2944,3071)]),S(D,[C(296),Bn(3072,3199)]),S(D,[C(297),Bn(3200,3327)]),S(D,[C(298),Bn(3328,3455)]),S(D,[C(299),Bn(3456,3583)]),S(D,[C(300),Bn(3584,3711)]),S(D,[C(301),Bn(3712,3839)]),S(D,[C(302),Bn(3840,4095)]),S(D,[C(303),
Bn(4096,4255)]),S(D,[C(304),Bn(4256,4351)]),S(D,[C(305),Bn(4352,4607)]),S(D,[C(306),Bn(4608,4991)]),S(D,[C(307),Bn(4992,5023)]),S(D,[C(308),Bn(5024,5119)]),S(D,[C(309),Bn(5120,5759)]),S(D,[C(310),Bn(5760,5791)]),S(D,[C(311),Bn(5792,5887)]),S(D,[C(312),Bn(5888,5919)]),S(D,[C(313),Bn(5920,5951)]),S(D,[C(314),Bn(5952,5983)]),S(D,[C(315),Bn(5984,6015)]),S(D,[C(316),Bn(6016,6143)]),S(D,[C(317),Bn(6144,6319)]),S(D,[C(318),Bn(6400,6479)]),S(D,[C(319),Bn(6480,6527)]),S(D,[C(320),Bn(6528,6623)]),S(D,[C(321),Bn(6624,
6655)]),S(D,[C(322),Bn(6656,6687)]),S(D,[C(323),Bn(7424,7551)]),S(D,[C(324),Bn(7552,7615)]),S(D,[C(325),Bn(7616,7679)]),S(D,[C(326),Bn(7680,7935)]),S(D,[C(327),Bn(7936,8191)]),S(D,[C(328),Bn(8192,8303)]),S(D,[C(329),Bn(8304,8351)]),S(D,[C(330),Bn(8352,8399)]),S(D,[C(331),Bn(8400,8447)]),S(D,[C(332),Bn(8448,8527)]),S(D,[C(333),Bn(8528,8591)]),S(D,[C(334),Bn(8592,8703)]),S(D,[C(335),Bn(8704,8959)]),S(D,[C(336),Bn(8960,9215)]),S(D,[C(337),Bn(9216,9279)]),S(D,[C(338),Bn(9280,9311)]),S(D,[C(339),Bn(9312,9471)]),
S(D,[C(340),Bn(9472,9599)]),S(D,[C(341),Bn(9600,9631)]),S(D,[C(342),Bn(9632,9727)]),S(D,[C(343),Bn(9728,9983)]),S(D,[C(344),Bn(9984,10175)]),S(D,[C(345),Bn(10176,10223)]),S(D,[C(346),Bn(10224,10239)]),S(D,[C(347),Bn(10240,10495)]),S(D,[C(348),Bn(10496,10623)]),S(D,[C(349),Bn(10624,10751)]),S(D,[C(350),Bn(10752,11007)]),S(D,[C(351),Bn(11008,11263)]),S(D,[C(352),Bn(11264,11359)]),S(D,[C(353),Bn(11392,11519)]),S(D,[C(354),Bn(11520,11567)]),S(D,[C(355),Bn(11568,11647)]),S(D,[C(356),Bn(11648,11743)]),S(D,[C(357),
Bn(11776,11903)]),S(D,[C(358),Bn(11904,12031)]),S(D,[C(359),Bn(12032,12255)]),S(D,[C(360),Bn(12272,12287)]),S(D,[C(361),Bn(12288,12351)]),S(D,[C(362),Bn(12352,12447)]),S(D,[C(363),Bn(12448,12543)]),S(D,[C(364),Bn(12544,12591)]),S(D,[C(365),Bn(12592,12687)]),S(D,[C(366),Bn(12688,12703)]),S(D,[C(367),Bn(12704,12735)]),S(D,[C(368),Bn(12736,12783)]),S(D,[C(369),Bn(12784,12799)]),S(D,[C(370),Bn(12800,13055)]),S(D,[C(371),Bn(13056,13311)]),S(D,[C(372),Bn(13312,19893)]),S(D,[C(373),Bn(19904,19967)]),S(D,[C(374),Bn(19968,
40959)]),S(D,[C(375),Bn(40960,42127)]),S(D,[C(376),Bn(42128,42191)]),S(D,[C(377),Bn(42752,42783)]),S(D,[C(378),Bn(43008,43055)]),S(D,[C(379),Bn(44032,55203)]),S(D,[C(380),Bn(55296,56191)]),S(D,[C(381),Bn(56192,56319)]),S(D,[C(382),Bn(56320,57343)]),S(D,[C(383),Bn(57344,63743)]),S(D,[C(384),Bn(63744,64255)]),S(D,[C(385),Bn(64256,64335)]),S(D,[C(386),Bn(64336,65023)]),S(D,[C(387),Bn(65024,65039)]),S(D,[C(388),Bn(65040,65055)]),S(D,[C(389),Bn(65056,65071)]),S(D,[C(390),Bn(65072,65103)]),S(D,[C(391),Bn(65104,65135)]),
S(D,[C(392),Bn(65136,65279)]),S(D,[C(393),Bn(65280,65519)]),S(D,[C(29),Bn(0,1114111)]),S(D,[C(394),Bdy()]),S(D,[C(395),CW(0,1)]),S(D,[C(396),KW(62,1)]),S(D,[C(397),CW(1,1)]),S(D,[C(398),CW(2,1)]),S(D,[C(399),CW(3,0)]),S(D,[C(400),CW(4,0)]),S(D,[C(401),CW(5,1)]),S(D,[C(402),KW(448,1)]),S(D,[C(403),CW(6,1)]),S(D,[C(404),CW(7,0)]),S(D,[C(405),CW(8,1)]),S(D,[C(406),KW(3584,1)]),S(D,[C(407),CW(9,1)]),S(D,[C(408),CW(10,1)]),S(D,[C(409),CW(11,1)]),S(D,[C(410),KW(28672,0)]),S(D,[C(411),CW(12,0)]),S(D,[C(412),CW(13,
0)]),S(D,[C(413),CW(14,0)]),S(D,[C(414),BeG(983040,1,1)]),S(D,[C(415),CW(15,0)]),S(D,[C(416),CW(16,1)]),S(D,[C(417),CW(18,1)]),S(D,[C(418),Bbf(19,0,1)]),S(D,[C(419),KW(1643118592,1)]),S(D,[C(420),CW(20,0)]),S(D,[C(421),CW(21,0)]),S(D,[C(422),CW(22,0)]),S(D,[C(423),CW(23,0)]),S(D,[C(424),CW(24,1)]),S(D,[C(425),KW(2113929216,1)]),S(D,[C(426),CW(25,1)]),S(D,[C(427),CW(26,0)]),S(D,[C(428),CW(27,0)]),S(D,[C(429),CW(28,1)]),S(D,[C(430),CW(29,0)]),S(D,[C(431),CW(30,0)])]);}
function RI(){C9.call(this);this.Dg=0;}
let ATQ=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.oh.length){e=c.oh.charCodeAt(b);if(d>=0&&d<c.oh.length){d=c.oh.charCodeAt(d);b=a.Dg;d=((e&1023)<<10|d&1023)+65536|0;if(CJ===null){if(B$===null)B$=Fa();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}d=C1(CJ,d);if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return b!=C1(CA,d)?(-1):2;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}
let A$2=a=>{let b,c,d,e,f,g;b=new P;c=Go(a.Dg);d=c.data;U();b.oh=R(c.data,0,d.length);e=new L;e.og=H(16);F(e,e.od,C(218));F(e,e.od,b);b=new P;c=e.og;d=c.data;f=e.od;g=d.length;if(f>=0&&f<=(g-0|0)){b.oh=R(c.data,0,f);return b;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
function KG(){C2.call(this);this.tj=0;}
let BbH=a=>{let b=new KG();AKZ(b,a);return b;}
let AKZ=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.tj=b;}
let A6j=(a,b)=>{a.om=b;}
let Sy=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.o2){d.qO=1;return (-1);}if(b>=0&&b<c.oh.length){k:{f=c.oh.charCodeAt(b);if(b>d.qJ){b=b-1|0;if(b>=0&&b<c.oh.length){if(!((c.oh.charCodeAt(b)&64512)!=55296?0:1))break k;return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}}if(a.tj!=f)return (-1);return a.om.hE(e,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}
let AOf=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof P)){e=d.o2;a:{while(true){if(b>e){b=(-1);break a;}if(Sy(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.qJ;g=d.o2;c:{while(true){if(b>=g)return (-1);h=E$(c,a.tj,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break c;if(b>=c.oh.length)break c;if((c.oh.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.om;b=h+1|0;if(i.hE(b,c,d)>=0)break;}return h;}c=new Ba;c.oe=1;c.of=1;E(c);}
let A0K=(a,b,c,d,e)=>{let f,g;if(!(d instanceof P)){a:{while(true){if(c<b){c=(-1);break a;}if(Sy(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.qJ;c:{o:{while(true){if(c<b)return (-1);g=GX(d,a.tj,c);if(g<0)break o;if(g<b)break o;if(g>f){c=g-1|0;if(c<0)break c;if(c>=d.oh.length)break c;if((d.oh.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.om.hE(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Ba;d.oe=1;d.of=1;E(d);}
let AUw=a=>{let b,c,d,e,f,g,h;b=a.tj;c=new L;c.og=H(16);d=c.od;Bo(c,d,d+1|0);e=c.og;f=e.data;f[d]=b;g=new P;d=c.od;U();h=f.length;if(d>=0&&d<=(h-0|0)){g.oh=R(e.data,0,d);return g;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let AJi=(a,b)=>{if(b instanceof FI)return 0;if(b instanceof FB)return 0;if(b instanceof E6)return 0;if(b instanceof Ga)return 0;if(b instanceof Nu)return 0;if(!(b instanceof KG))return 1;return b.tj!=a.tj?0:1;}
let AUG=(a,b)=>{return 1;}
function Nu(){C2.call(this);this.ux=0;}
let A25=a=>{let b=new Nu();ARR(b,a);return b;}
let ARR=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.ux=b;}
let AZw=(a,b)=>{a.om=b;}
let N$=(a,b,c,d)=>{let e,f,g;e=d.o2;f=b+1|0;e=B9(f,e);if(e>0){d.qO=1;return (-1);}if(b>=0&&b<c.oh.length){k:{g=c.oh.charCodeAt(b);if(e<0){if(f>=0&&f<c.oh.length){if(!((c.oh.charCodeAt(f)&64512)!=56320?0:1))break k;return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}}if(a.ux!=g)return (-1);return a.om.hE(f,c,d);}c=new Ba;c.oe=1;c.of=1;E(c);}
let A6D=(a,b,c,d)=>{let e,f;if(!(c instanceof P)){e=d.o2;a:{while(true){if(b>e){b=(-1);break a;}if(N$(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.o2;c:{while(true){if(b>=e)return (-1);f=E$(c,a.ux,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break c;if(b>=c.oh.length)break c;if((c.oh.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.om.hE(b,c,d)>=0)break;}return f;}c=new Ba;c.oe=1;c.of=1;E(c);}
let ATM=(a,b,c,d,e)=>{let f,g;if(!(d instanceof P)){a:{while(true){if(c<b){c=(-1);break a;}if(N$(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.o2;c:{o:{while(true){if(c<b)return (-1);g=GX(d,a.ux,c);if(g<0)break o;if(g<b)break o;c=g+1|0;if(c<f){if(c<0)break c;if(c>=d.oh.length)break c;if((d.oh.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.om.hE(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Ba;d.oe=1;d.of=1;E(d);}
let A$o=a=>{let b,c,d,e,f,g,h;b=a.ux;c=new L;c.og=H(16);d=c.od;Bo(c,d,d+1|0);e=c.og;f=e.data;f[d]=b;g=new P;d=c.od;U();h=f.length;if(d>=0&&d<=(h-0|0)){g.oh=R(e.data,0,d);return g;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let AMe=(a,b)=>{if(b instanceof FI)return 0;if(b instanceof FB)return 0;if(b instanceof E6)return 0;if(b instanceof Ga)return 0;if(b instanceof KG)return 0;if(!(b instanceof Nu))return 1;return b.ux!=a.ux?0:1;}
let A6Q=(a,b)=>{return 1;}
function Ga(){let a=this;C9.call(a);a.wb=0;a.vD=0;a.wl=0;}
let A_H=a=>{let b=new Ga();AWq(b,a);return b;}
let AWq=(a,b)=>{let c,d,e;c=Y;Y=c+1|0;d=new Bx;d.og=H(20);a.oB=(N(d,d.od,c,10)).l();a.pa=1;a.pa=2;a.wl=b;e=(Go(b)).data;a.wb=e[0];a.vD=e[1];}
let A7w=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.oh.length){e=c.oh.charCodeAt(b);if(d>=0&&d<c.oh.length){d=c.oh.charCodeAt(d);return a.wb==e&&a.vD==d?2:(-1);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}
let A5G=(a,b,c,d)=>{let e,f,g,h;if(c instanceof P){e=d.o2;a:{while(b<e){b=E$(c,a.wb,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.oh.length)break a;f=c.oh.charCodeAt(b);if(a.vD==f&&a.om.hE(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Ba;c.oe=1;c.of=1;E(c);}g=d.o2;e:{r:{bf:{while(true){if(b>g){b=(-1);break bf;}if((b+a.pa|0)>d.o2){d.qO=1;h=(-1);}else{h=b+1|0;if(b<0)break e;if(b>=c.oh.length)break e;e=c.oh.charCodeAt(b);if(h<0)break r;if(h>=c.oh.length)break r;f=c.oh.charCodeAt(h);h
=a.wb==e&&a.vD==f?2:(-1);h=h<0?(-1):a.om.hE(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new Ba;Bl(c);E(c);}c=new Ba;Bl(c);E(c);}
let AK3=(a,b,c,d,e)=>{let f,g,h;if(d instanceof P){a:{d:{while(true){if(c<b)return (-1);c=GX(d,a.vD,c)+(-1)|0;if(c<0)break d;if(c<b)break d;f=a.wb;if(c<0)break a;if(c>=d.oh.length)break a;if(f==d.oh.charCodeAt(c)&&a.om.hE(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Ba;d.oe=1;d.of=1;E(d);}e:{r:{bf:{while(true){if(c<b){c=(-1);break bf;}if((c+a.pa|0)>e.o2){e.qO=1;f=(-1);}else{g=c+1|0;if(c<0)break e;if(c>=d.oh.length)break e;h=d.oh.charCodeAt(c);if(g<0)break r;if(g>=d.oh.length)break r;g=d.oh.charCodeAt(g);f
=a.wb==h&&a.vD==g?2:(-1);f=f<0?(-1):a.om.hE(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Ba;Bl(d);E(d);}d=new Ba;Bl(d);E(d);}
let A9D=a=>{let b,c,d,e,f,g,h;b=a.wb;c=a.vD;d=new L;d.og=H(16);e=d.od;Bo(d,e,e+1|0);d.og.data[e]=b;b=d.od;Bo(d,b,b+1|0);f=d.og;g=f.data;g[b]=c;h=new P;c=d.od;U();e=g.length;if(c>=0&&c<=(e-0|0)){h.oh=R(f.data,0,c);return h;}d=new O;d.oe=1;d.of=1;Bt(d);E(d);}
let A7l=(a,b)=>{if(b instanceof Ga)return b.wl!=a.wl?0:1;if(b instanceof E6)return b.h7(a.wl);if(b instanceof FI)return 0;if(!(b instanceof FB))return 1;return 0;}
let Uy=G(G6);
let ALa=(a,b)=>{return b!=10?0:1;}
let ATd=(a,b,c)=>{return b!=10?0:1;}
let Uz=G(G6);
let A8k=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
let AVN=(a,b,c)=>{b:{a:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break a;if(c==10)break a;}b=1;break b;}b=0;}return b;}
function ZT(){let a=this;D.call(a);a.DU=null;a.CD=null;a.yV=0;a.GC=0;}
let A5X=a=>{let b=new ZT();AO4(b,a);return b;}
let AO4=(a,b)=>{let c,d;while(true){c=a.yV;if(b<c)break;a.yV=c<<1|1;}d=c<<1|1;a.yV=d;d=d+1|0;a.DU=X(d);a.CD=X(d);a.GC=b;}
let PF=(a,b,c)=>{let d,e,f,g;d=0;e=a.yV;f=b&e;while(true){g=a.DU.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.CD.data[f]=c;}
let TD=(a,b)=>{let c,d,e,f;c=a.yV;d=b&c;e=0;while(true){f=a.DU.data[d];if(!f)break;if(f==b)return a.CD.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.GC;}
let AC9=G();
let WA=G();
let A$f=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new L9;d=H(b.oh.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.Ee=d;f=IL(c);d=X(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=IL(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=IL(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.oh.length)break;e[f]=b.oh.charCodeAt(f);f=f+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}
let Di=b=>{let c,d,e,f,g,h,i,j,k,l;c=new L9;d=H(b.oh.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.Ee=d;f=IL(c);d=X(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+IL(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=IL(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.oh.length)break;e[f]=b.oh.charCodeAt(f);f=f+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}
let De=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=X(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new V;l.oe=1;l.of=1;E(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new UG;l.FN=b;l.Ht=c;return l;}
let Nh=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
let AWN=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=Bs(Kb,16384);d=c.data;e=BX(16384).data;f=0;g=0;h=0;i=0;a:{d:{k:{while(true){if(i>=b.oh.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new CN;b.oJ=j;k=b;j.classObject=k;}}b=EQ(b);if(b===null){b=new Dv;b.oe=1;b.of=1;E(b);}if(b===BI(CO)){b=new V;b.oe=1;b.of=1;E(b);}if(g<0){b=new D_;b.oe=1;b.of=1;E(b);}k=EO(b.oJ,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break k;if(i>=b.oh.length)break k;l
=Nh(b.oh.charCodeAt(i));if(l==64){i=i+1|0;if(i<0)break d;if(i>=b.oh.length)break d;l=Nh(b.oh.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.oh.length)break a;m=m|C7(n,Nh(b.oh.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.oh.length)break;m=Nh(b.oh.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new Kb;l=h+f|0;q=BX(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.Ep=h;j.Do=l;j.Es=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f
=0;}else{n=f+m|0;o=e.length;if(n<o)s=g;else{s=g+1|0;j=new Kb;t=h+f|0;q=BX(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.Ep=h;j.Do=t;j.Es=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let D_=G(B0);
let V4=G();
function L9(){let a=this;D.call(a);a.Ee=null;a.He=0;}
let AD0=G();
let IL=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.Ee.data;f=b.He;b.He=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+C7(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
let No=G(BN);
let Bcr=()=>{let a=new No();AOF(a);return a;}
let AOF=a=>{return;}
let A2U=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return DG(Ca(b,9,13),32);}
let MQ=G(BN);
let BeN=()=>{let a=new MQ();AUz(a);return a;}
let AUz=a=>{return;}
let A4u=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(b,48,57);}
let ZP=G(BN);
let BcX=()=>{let a=new ZP();ANW(a);return a;}
let ANW=a=>{return;}
let A7T=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(b,97,122);}
let AAa=G(BN);
let A_s=()=>{let a=new AAa();AO$(a);return a;}
let AO$=a=>{return;}
let AUH=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(b,65,90);}
let AAb=G(BN);
let Bf6=()=>{let a=new AAb();AKj(a);return a;}
let AKj=a=>{return;}
let AMO=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(b,0,127);}
let Nl=G(BN);
let Bgx=()=>{let a=new Nl();ALP(a);return a;}
let ALP=a=>{return;}
let ALy=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(Ca(b,97,122),65,90);}
let L1=G(Nl);
let Be6=()=>{let a=new L1();AOQ(a);return a;}
let AOQ=a=>{return;}
let ANp=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(Ca(Ca(b,97,122),65,90),48,57);}
let ABo=G(BN);
let Ba7=()=>{let a=new ABo();A5i(a);return a;}
let A5i=a=>{return;}
let A2n=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(Ca(Ca(b,33,64),91,96),123,126);}
let N3=G(L1);
let Bdu=()=>{let a=new N3();ASW(a);return a;}
let ASW=a=>{return;}
let AW6=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(Ca(Ca(Ca(Ca(Ca(b,97,122),65,90),48,57),33,64),91,96),123,126);}
let AEG=G(N3);
let Bdm=()=>{let a=new AEG();AT$(a);return a;}
let AT$=a=>{return;}
let AQ1=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return DG(Ca(Ca(Ca(Ca(Ca(Ca(b,97,122),65,90),48,57),33,64),91,96),123,126),32);}
let YA=G(BN);
let A_J=()=>{let a=new YA();A7_(a);return a;}
let A7_=a=>{return;}
let A0s=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return DG(DG(b,32),9);}
let WX=G(BN);
let Baq=()=>{let a=new WX();A9U(a);return a;}
let A9U=a=>{return;}
let AQV=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return DG(Ca(b,0,31),127);}
let ACW=G(BN);
let Bdw=()=>{let a=new ACW();AKC(a);return a;}
let AKC=a=>{return;}
let AVU=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(Ca(Ca(b,48,57),97,102),65,70);}
let AGX=G(BN);
let BbX=()=>{let a=new AGX();AYG(a);return a;}
let AYG=a=>{return;}
let A5T=a=>{let b,c;b=new TK;b.Ju=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let ABu=G(BN);
let A_n=()=>{let a=new ABu();AS_(a);return a;}
let AS_=a=>{return;}
let AXd=a=>{let b,c;b=new RO;b.Jz=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let AGq=G(BN);
let Bgm=()=>{let a=new AGq();AKn(a);return a;}
let AKn=a=>{return;}
let AOM=a=>{let b,c;b=new PU;b.Jk=a;BO();c=new BG;c.ov=X(64);b.oA=c;return b;}
let ZB=G(BN);
let Ban=()=>{let a=new ZB();AQX(a);return a;}
let AQX=a=>{return;}
let ATk=a=>{let b,c;b=new PT;b.Is=a;BO();c=new BG;c.ov=X(64);b.oA=c;return b;}
let AAs=G(BN);
let Be4=()=>{let a=new AAs();ALM(a);return a;}
let ALM=a=>{return;}
let A0q=a=>{let b,c;b=new Q6;b.II=a;BO();c=new BG;c.ov=X(64);b.oA=c;Jw(c,0,2048);b.pv=1;return b;}
let Wi=G(BN);
let Bd8=()=>{let a=new Wi();AK8(a);return a;}
let AK8=a=>{return;}
let AMt=a=>{let b,c;b=new Su;b.JG=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let ABV=G(BN);
let Be5=()=>{let a=new ABV();AQu(a);return a;}
let AQu=a=>{return;}
let A90=a=>{let b,c;b=new OD;b.IQ=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let AGz=G(BN);
let A_S=()=>{let a=new AGz();ARc(a);return a;}
let ARc=a=>{return;}
let AW4=a=>{let b,c;b=new S8;b.IB=a;BO();c=new BG;c.ov=X(64);b.oA=c;return b;}
let Z3=G(BN);
let BgH=()=>{let a=new Z3();A2I(a);return a;}
let A2I=a=>{return;}
let APE=a=>{let b,c;b=new RM;b.H4=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let ADr=G(BN);
let BdS=()=>{let a=new ADr();AJt(a);return a;}
let AJt=a=>{return;}
let AMB=a=>{let b,c;b=new RN;b.IC=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let YF=G(BN);
let Bbu=()=>{let a=new YF();ALh(a);return a;}
let ALh=a=>{return;}
let A1R=a=>{let b,c;b=new OA;b.IH=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let AA3=G(BN);
let Bf4=()=>{let a=new AA3();APQ(a);return a;}
let APQ=a=>{return;}
let A3Q=a=>{let b,c;b=new SK;b.JV=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let AGK=G(BN);
let Bf1=()=>{let a=new AGK();A5L(a);return a;}
let A5L=a=>{return;}
let AU1=a=>{let b,c;b=new SN;b.Iw=a;BO();c=new BG;c.ov=X(64);b.oA=c;return b;}
let XN=G(BN);
let BcG=()=>{let a=new XN();AK$(a);return a;}
let AK$=a=>{return;}
let ASO=a=>{let b,c;b=new T5;b.JJ=a;BO();c=new BG;c.ov=X(64);b.oA=c;return b;}
let Xb=G(BN);
let A_Q=()=>{let a=new Xb();A7B(a);return a;}
let A7B=a=>{return;}
let ARw=a=>{let b,c;b=new TA;b.H5=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let ABs=G(BN);
let BfK=()=>{let a=new ABs();A2B(a);return a;}
let A2B=a=>{return;}
let A7P=a=>{let b,c;b=new Od;b.J6=a;BO();c=new BG;c.ov=X(64);b.oA=c;b.pv=1;return b;}
let Lb=G(BN);
let BbE=()=>{let a=new Lb();AMJ(a);return a;}
let AMJ=a=>{return;}
let AP2=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return DG(Ca(Ca(Ca(b,97,122),65,90),48,57),95);}
let AHr=G(Lb);
let Bdv=()=>{let a=new AHr();A2N(a);return a;}
let A2N=a=>{return;}
let ARe=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;b=FO(DG(Ca(Ca(Ca(b,97,122),65,90),48,57),95),1);b.pv=1;return b;}
let AEQ=G(No);
let A_h=()=>{let a=new AEQ();AVk(a);return a;}
let AVk=a=>{return;}
let AYR=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;b=FO(DG(Ca(b,9,13),32),1);b.pv=1;return b;}
let W9=G(MQ);
let BaK=()=>{let a=new W9();A3x(a);return a;}
let A3x=a=>{return;}
let AN7=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;b=FO(Ca(b,48,57),1);b.pv=1;return b;}
function AC1(){let a=this;BN.call(a);a.FI=0;a.Hl=0;}
let Bn=(a,b)=>{let c=new AC1();A9Z(c,a,b);return c;}
let A9Z=(a,b,c)=>{a.FI=b;a.Hl=c;}
let AP5=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(b,a.FI,a.Hl);}
let ADk=G(BN);
let Bdy=()=>{let a=new ADk();AVY(a);return a;}
let AVY=a=>{return;}
let AVy=a=>{let b,c;b=new Df;BO();c=new BG;c.ov=X(64);b.oA=c;c=new BG;c.ov=X(2);b.oE=c;return Ca(Ca(b,65279,65279),65520,65533);}
function AEr(){let a=this;BN.call(a);a.EU=0;a.D2=0;a.G0=0;}
let CW=(a,b)=>{let c=new AEr();ALH(c,a,b);return c;}
let Bbf=(a,b,c)=>{let d=new AEr();AVI(d,a,b,c);return d;}
let ALH=(a,b,c)=>{a.D2=c;a.EU=b;}
let AVI=(a,b,c,d)=>{a.G0=d;a.D2=c;a.EU=b;}
let A1t=a=>{let b,c,d;b=new J3;c=a.EU;BO();d=new BG;d.ov=X(64);b.oA=d;b.AJ=c;if(a.G0)Jw(d,0,2048);b.pv=a.D2;return b;}
function AEH(){let a=this;BN.call(a);a.DF=0;a.CF=0;a.Fe=0;}
let KW=(a,b)=>{let c=new AEH();AMC(c,a,b);return c;}
let BeG=(a,b,c)=>{let d=new AEH();AW5(d,a,b,c);return d;}
let AMC=(a,b,c)=>{a.CF=c;a.DF=b;}
let AW5=(a,b,c,d)=>{a.Fe=d;a.CF=c;a.DF=b;}
let AIC=a=>{let b,c,d;b=new To;c=a.DF;BO();d=new BG;d.ov=X(64);b.oA=d;b.AJ=c;if(a.Fe)Jw(d,0,2048);b.pv=a.CF;return b;}
function UG(){let a=this;D.call(a);a.FN=null;a.Ht=null;}
function Kb(){let a=this;D.call(a);a.Ep=0;a.Do=0;a.Es=null;}
let ACk=G();
let Br=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=b.length;if(d<=e){while(d<e){f=d+1|0;b[d]=c;d=f;}return;}g=new V;g.oe=1;g.of=1;E(g);}
let A6n=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new V;f.oe=1;f.of=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;}
let A7u=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new V;f.oe=1;f.of=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=B9(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;}
let AG1=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;k:{while(true){if(e>=d){e=(-1);break k;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
let Z8=G();
function Po(){let a=this;Ew.call(a);a.Fr=null;a.Fp=0;a.yO=null;}
let AUf=(a,b)=>{return;}
let AMG=(a,b)=>{let c,d,e,f,g,h,i,j;if(BY===null){c=new Do;c.p$=DX;b=new L;b.og=H(16);c.o_=b;c.p7=H(32);c.qf=0;Dn();c.qa=Du;BY=c;}b=BY;c=a.Fr;d=new L;d.og=H(16);F(d,d.od,C(432));e=d.od;if(c===null)c=C(2);F(d,e,c);f=new P;g=d.og;h=g.data;i=d.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);c=b.o_;F(c,c.od,f);i=c.od;Bo(c,i,i+1|0);c.og.data[i]=10;Dy(b);return;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let V$=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(Ka(Hz(C(128),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){bg:{b=a.yO;b.ED=b.Aa.oo;if(a.Fp){e=0;while(true){b=a.yO;c=b.Aa;f=B9(e,c.oo);if(f>=0)break bg;if(f>=0){g=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,e,10);F(b,b.od,C(38));e=c.oo;N(b,b.od,e,10);c=new P;d=b.og;h=d.data;f=b.od;U();i=h.length;if(f>=0&&f<=(i-0|0)){c.oh=R(d.data,0,f);g.oe=1;g.of=1;g.oi=c;E(g);}b=new O;Bl(b);E(b);}XZ(b,c.ox.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(Ka(Hz(C(126),0),j,0)).data;if
(h.length!=4)break;k=h[0];l=AEZ(h[1]);b=h[2];if(b===null){b=new CV;b.oe=1;b.of=1;b.oi=C(76);E(b);}m=AAw(b,0,b.oh.length,10);n=h[3];F$();o=Ii;if(k===C(433))i=1;else if(!(C(433) instanceof P))i=0;else{b=C(433);i=k.oh!==b.oh?0:1;}if(i)o=I2;if(k===C(434))i=1;else if(!(C(434) instanceof P))i=0;else{b=C(434);i=k.oh!==b.oh?0:1;}if(i)o=IN;if(k===C(435))i=1;else if(!(C(435) instanceof P))i=0;else{b=C(435);i=k.oh!==b.oh?0:1;}if(i)o=Hv;if(k===C(272))i=1;else if(!(C(272) instanceof P))i=0;else{b=C(272);i=k.oh!==b.oh?0:
1;}if(i)o=Ra;if(o===Hv&&!KF.HK)m=M;g=new TB;g.Ew=l;g.Fw=o;g.HT=m;g.GX=n;B3(a.yO.G9,l,l);Dj(a.yO.Aa,g);f=f+1|0;}b=new Bc;b.oe=1;b.of=1;b.oi=C(436);E(b);}
let ARn=(a,b,c)=>{return V$(a,b,c);}
let CM=G(BW);
let A_0=null;let Bfp=null;let Baf=null;let Bae=null;let A_1=null;let A_V=null;let A_N=null;let Bab=null;let A_G=null;let Ba9=null;let AZI=()=>{AZI=Bk(CM);AX3();}
let AX3=()=>{let b,c,d,e,f,g,h,i,j;b=new UR;AZI();b.oq=C(437);b.on=0;A_0=b;c=new US;c.oq=C(438);c.on=1;Bfp=c;d=new UV;d.oq=C(439);d.on=2;Baf=d;e=new UW;e.oq=C(440);e.on=3;Bae=e;f=new UT;f.oq=C(441);f.on=4;A_1=f;g=new UU;g.oq=C(442);g.on=5;A_V=g;h=new UO;h.oq=C(443);h.on=6;A_N=h;i=new UP;i.oq=C(444);i.on=7;Bab=i;j=new UN;j.oq=C(445);j.on=8;A_G=j;Ba9=S(CM,[b,c,d,e,f,g,h,i,j]);}
function Gt(){let a=this;Id.call(a);a.t3=0;a.q_=null;}
let AId=G(0);
let AZe=b=>{let c,d;if(b===C(446))c=1;else if(!(C(446) instanceof P))c=0;else{d=C(446);c=b.oh!==d.oh?0:1;}c:{if(!c){if(b===C(447))c=1;else if(!(C(447) instanceof P))c=0;else{d=C(447);c=b.oh!==d.oh?0:1;}if(!c){if(b===C(448))c=1;else if(!(C(448) instanceof P))c=0;else{d=C(448);c=b.oh!==d.oh?0:1;}if(!c){if(b===C(449))c=1;else if(!(C(449) instanceof P))c=0;else{d=C(449);c=b.oh!==d.oh?0:1;}if(!c){if(b===C(450))c=1;else if(!(C(450) instanceof P))c=0;else{d=C(450);c=b.oh!==d.oh?0:1;}if(!c){c=0;break c;}}}}}c=1;}return c;}
let AOC=b=>{let c,d;if(b===C(451))c=1;else if(!(C(451) instanceof P))c=0;else{d=C(451);c=b.oh!==d.oh?0:1;}c:{e:{if(c)break e;if(b===C(452))c=1;else if(!(C(452) instanceof P))c=0;else{d=C(452);c=b.oh!==d.oh?0:1;}if(c)break e;if(b===C(453))c=1;else if(!(C(453) instanceof P))c=0;else{d=C(453);c=b.oh!==d.oh?0:1;}if(c)break e;if(b===C(454))c=1;else if(!(C(454) instanceof P))c=0;else{d=C(454);c=b.oh!==d.oh?0:1;}if(c)break e;if(b===C(455))c=1;else if(!(C(455) instanceof P))c=0;else{d=C(455);c=b.oh!==d.oh?0:1;}if(c)break e;if
(b===C(456))c=1;else if(!(C(456) instanceof P))c=0;else{d=C(456);c=b.oh!==d.oh?0:1;}if(c)break e;if(b===C(457))c=1;else if(!(C(457) instanceof P))c=0;else{d=C(457);c=b.oh!==d.oh?0:1;}if(c)break e;if(b===C(458))c=1;else if(!(C(458) instanceof P))c=0;else{d=C(458);c=b.oh!==d.oh?0:1;}if(c)break e;if(b===C(459))c=1;else if(!(C(459) instanceof P))c=0;else{d=C(459);c=b.oh!==d.oh?0:1;}if(!c){c=0;break c;}}c=1;}return c;}
let Qv=G(0);
let ADi=G();
let A9T=(a,b,c)=>{a.iC(Bv(b),Em(c,"handleEvent"));}
let ARJ=(a,b)=>{return !!a.iD(b);}
let AZx=(a,b,c)=>{a.dN(Bv(b),Em(c,"handleEvent"));}
let A3q=(a,b,c,d)=>{a.iE(Bv(b),Em(c,"handleEvent"),d?1:0);}
let A8p=(a,b,c,d)=>{a.iF(Bv(b),Em(c,"handleEvent"),d?1:0);}
function Qn(){let a=this;D.call(a);a.En=null;a.DY=null;a.z3=null;a.E_=0;a.AP=null;}
let AFU=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.En;F$();if(e!==IN&&e!==Hv){if(e===I2){b=window.document.createElement("img");d=Cp(Bv(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new J_;d.q9=c;d.EK=e;d.Dx=b;}else if(e===Ii)d=Bv(c.result);}else{e=c.result;b=new Int8Array(e);d=new J_;d.q9=b;d.EK=e;}if(d!==null){Jm(a.AP.GZ,a.En,a.DY,d);Dj(a.z3,a.DY);if(a.z3.oo==a.E_){b=a.AP.Fk;d=new Of;d.Dl=a;Dj(b.ys,d);}}}
let A4H=(a,b)=>{AFU(a,b);}
function Eq(){BW.call(this);this.zw=null;}
let I2=null;let Hv=null;let Ii=null;let IN=null;let Ra=null;let AH9=null;let F$=()=>{F$=Bk(Eq);A59();}
let A59=()=>{let b,c,d,e,f;b=new Eq;F$();b.oq=C(460);b.on=0;b.zw=C(433);I2=b;c=new Eq;c.oq=C(461);c.on=1;c.zw=C(435);Hv=c;d=new Eq;d.oq=C(462);d.on=2;d.zw=C(463);Ii=d;e=new Eq;e.oq=C(464);e.on=3;e.zw=C(434);IN=e;f=new Eq;f.oq=C(465);f.on=4;f.zw=C(272);Ra=f;AH9=S(Eq,[b,c,d,e,f]);}
let Na=G();
let W5=null;let AKw=null;let AHj=b=>{let c,d,e,f,g,h,i,j,k,l;c=new L;c.og=H(16);d=AGM();e=0;f=AKw.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.od;if(i>0){Bo(c,i,i+1|0);c.og.data[i]=32;}j=d.data[e];F(c,c.od,j);}e=e+1|0;h=h+1|0;}j=new P;d=c.og;k=d.data;e=c.od;U();l=k.length;if(e>=0&&e<=(l-0|0)){j.oh=R(d.data,0,e);return j;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let AGM=()=>{if(W5===null)W5=S(P,[C(466),C(467),C(468),C(469),C(470),C(471),C(472),C(473),C(474),C(475),C(476),C(477)]);return W5;}
let AB3=()=>{AKw=E2([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
let L0=G();
let PL=G(0);
function I4(){let a=this;L0.call(a);a.rw=null;a.Jj=null;a.yc=0;a.BM=0;a.t1=null;a.DI=null;}
let AJ5=a=>{let b,c,d,e,f,g,h;b=new L;b.og=H(16);c=AHj(Pb(a.yc,a.BM));F(b,b.od,c);d=b.od;if(d>0){Bo(b,d,d+1|0);b.og.data[d]=32;}c=a.rw;if(c.oV===null)c.oV=Bv(c.oJ.$meta.name);c=c.oV;F(b,b.od,c);d=b.od;Bo(b,d,d+1|0);b.og.data[d]=40;e=a.t1.t();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.od;Bo(b,h,h+1|0);b.og.data[h]=44;}c=g[f];if(c.oV===null)c.oV=Bv(c.oJ.$meta.name);c=c.oV;F(b,b.od,c);f=f+1|0;}d=b.od;Bo(b,d,d+1|0);g=b.og;e=g.data;e[d]=41;c=new P;d=b.od;U();h=e.length;if(d>=0&&d<=(h-0|0)){c.oh=R(g.data,
0,d);return c;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let AG4=(a,b)=>{let c,d,e,f,g;if(a.yc&1){c=new LT;c.oe=1;c.of=1;E(c);}if(a.DI===null){c=new Mv;c.oe=1;c.of=1;E(c);}d=b.data;e=d.length;if(e!=a.t1.data.length){c=new V;c.oe=1;c.of=1;E(c);}f=0;while(f<e){if(!(a.t1.data[f].oJ.$meta.primitive?1:0)&&d[f]!==null){c=a.t1.data[f];g=d[f];c=c.oJ;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&T2(g.constructor,c)?1:0)){c=new V;c.oe=1;c.of=1;E(c);}}if((a.t1.data[f].oJ.$meta.primitive?1:0)&&d[f]===null){c=new V;c.oe=1;c.of=1;E(c);}f=f+1|0;}c=b.data;g=new
(a.rw.oJ);a.DI.call(g,c);return g;}
let Ba=G(O);
function Q0(){let a=this;BF.call(a);a.GQ=null;a.JR=null;}
let AMW=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.qH^Dk(a.GQ,c):0;}
function QZ(){let a=this;BF.call(a);a.HL=null;a.Gn=null;a.IE=null;}
let AXH=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.qH^Dk(a.HL,c):0;return a.Gn.h7(b)&&!d?1:0;}
function OL(){let a=this;BF.call(a);a.BB=null;a.IY=null;}
let APT=(a,b)=>{return a.oY^Dk(a.BB,b);}
let A1Z=a=>{let b,c,d,e,f,g,h,i,j,k;b=new L;b.og=H(16);c=Ji(a.BB,0);while(c>=0){d=(Go(c)).data;e=0;f=d.length;g=b.od;Bo(b,g,g+f|0);f=f+e|0;while(e<f){h=b.og.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.od;Bo(b,g,g+1|0);b.og.data[g]=124;c=Ji(a.BB,c+1|0);}e=b.od;if(e>0)U5(b,e-1|0);k=new P;d=b.og;h=d.data;e=b.od;U();g=h.length;if(e>=0&&e<=(g-0|0)){k.oh=R(d.data,0,e);return k;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
function Sh(){let a=this;BF.call(a);a.Hj=null;a.Jy=null;}
let A7z=(a,b)=>{return a.Hj.h7(b);}
function Sf(){let a=this;BF.call(a);a.D3=0;a.GY=null;a.Et=null;}
let ATP=(a,b)=>{return !(a.D3^Dk(a.Et.oE,b))&&!(a.D3^a.Et.sn^a.GY.h7(b))?0:1;}
function Sg(){let a=this;BF.call(a);a.CE=0;a.Gi=null;a.Dv=null;}
let A4x=(a,b)=>{return !(a.CE^Dk(a.Dv.oE,b))&&!(a.CE^a.Dv.sn^a.Gi.h7(b))?1:0;}
function Sk(){let a=this;BF.call(a);a.HX=0;a.Gj=null;a.Gg=null;a.I9=null;}
let A0R=(a,b)=>{return a.HX^(!a.Gj.h7(b)&&!a.Gg.h7(b)?0:1);}
function Sl(){let a=this;BF.call(a);a.FM=0;a.Hg=null;a.G$=null;a.J2=null;}
let AIv=(a,b)=>{return a.FM^(!a.Hg.h7(b)&&!a.G$.h7(b)?0:1)?0:1;}
function Si(){let a=this;BF.call(a);a.FC=null;a.J5=null;}
let ANX=(a,b)=>{let c,d;c=a.FC;d=c.pw;return d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b);}
function Sj(){let a=this;BF.call(a);a.HS=null;a.Je=null;}
let AQC=(a,b)=>{let c,d;c=a.HS;d=c.pw;return (d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b))?0:1;}
function Sm(){let a=this;BF.call(a);a.FO=null;a.Hh=0;a.F$=null;}
let AU8=(a,b)=>{let c,d,e;c=a.FO;d=c.pw;e=d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b);return !e&&!(a.Hh^Dk(a.F$.oE,b))?0:1;}
function Sn(){let a=this;BF.call(a);a.FZ=null;a.Hy=0;a.FT=null;}
let A0e=(a,b)=>{let c,d,e;c=a.FZ;d=c.pw;e=d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b);return !e&&!(a.Hy^Dk(a.FT.oE,b))?1:0;}
function OK(){let a=this;BF.call(a);a.F9=0;a.HO=null;a.Gq=null;a.H9=null;}
let A_d=(a,b)=>{let c,d;b:{if(!(a.F9^a.HO.h7(b))){c=a.Gq;d=c.pw;if(!(d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b))){b=0;break b;}}b=1;}return b;}
function OY(){let a=this;BF.call(a);a.HU=0;a.Fc=null;a.Ff=null;a.Im=null;}
let AN2=(a,b)=>{let c,d;b:{if(!(a.HU^a.Fc.h7(b))){c=a.Ff;d=c.pw;if(!(d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b))){b=1;break b;}}b=0;}return b;}
function OI(){let a=this;BF.call(a);a.G4=null;a.Iq=null;}
let ALU=(a,b)=>{let c,d;c=a.G4;d=c.pw;return d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b);}
function OJ(){let a=this;BF.call(a);a.Fz=null;a.J1=null;}
let A1G=(a,b)=>{let c,d;c=a.Fz;d=c.pw;return (d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b))?0:1;}
function OO(){let a=this;BF.call(a);a.HW=null;a.FY=0;a.H2=null;}
let AO8=(a,b)=>{let c,d,e;c=a.HW;d=c.pw;e=d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b);return e&&a.FY^Dk(a.H2.oE,b)?1:0;}
function OH(){let a=this;BF.call(a);a.HD=null;a.Hk=0;a.FX=null;}
let A80=(a,b)=>{let c,d,e;c=a.HD;d=c.pw;e=d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b);return e&&a.Hk^Dk(a.FX.oE,b)?0:1;}
function OM(){let a=this;BF.call(a);a.HG=0;a.GP=null;a.FL=null;a.I8=null;}
let AY_=(a,b)=>{let c,d;b:{if(a.HG^a.GP.h7(b)){c=a.FL;d=c.pw;if(d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b)){b=1;break b;}}b=0;}return b;}
function ON(){let a=this;BF.call(a);a.HA=0;a.GI=null;a.HE=null;a.Jh=null;}
let ASE=(a,b)=>{let c,d;b:{if(a.HA^a.GI.h7(b)){c=a.HE;d=c.pw;if(d!==null?c.oY^d.h7(b):c.oY^Dk(c.oE,b)){b=0;break b;}}b=1;}return b;}
function Js(){let a=this;D.call(a);a.tb=null;a.Du=null;a.ql=null;a.qZ=0;}
function E7(){let a=this;D.call(a);a.IV=null;a.sV=M;a.tZ=M;a.rk=null;a.G1=null;a.sv=null;a.rj=0;a.sZ=null;}
let PY=null;let CG=null;let DL=0;let GV=0;let AOT=null;let Dq=()=>{Dq=Bk(E7);AKe();}
let AE9=a=>{let b,c,$$je;b:{a:{d:{k:{try{Dq();GV=GV+1|0;ZI(a);a.cV();}catch($$e){$$je=BH($$e);if($$je instanceof Eb){b=$$je;break k;}else{b=$$je;break d;}}b=a.rk;Hq(b);n:{try{NU(b);EV(b);break n;}catch($$e){$$je=BH($$e);c=$$je;}EV(b);E(c);}a.rj=0;GV=GV-1|0;b=PY;if(CG!==b)CG=b;CG.tZ=F4();break b;}try{Wc(XL(a),a,b);break a;}catch($$e){$$je=BH($$e);b=$$je;}}c=a.rk;Hq(c);o:{try{NU(c);EV(c);break o;}catch($$e){$$je=BH($$e);b=$$je;}EV(c);E(b);}a.rj=0;GV=GV-1|0;c=PY;if(CG!==c)CG=c;CG.tZ=F4();E(b);}b=a.rk;Hq(b);r:{try
{NU(b);EV(b);break r;}catch($$e){$$je=BH($$e);c=$$je;}EV(b);E(c);}a.rj=0;GV=GV-1|0;b=PY;if(CG!==b)CG=b;CG.tZ=F4();}}
let ZI=b=>{Dq();if(CG!==b)CG=b;CG.tZ=F4();}
let AIx=()=>{Dq();return CG;}
let Kk=b=>{let $p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Dq();$p=1;case 1:Q2(b);if(HB()){break _;}return;default:DU();}}Co().s(b,$p);}
let W2=(b,c)=>{let d,e;Dq();d=CG;e=new OE;e.GG=d;e.Gf=c;e.JS=QU(e,DB(b,I(2147483647))?2147483647:Z(b));d.G1=e;}
let XL=a=>{let b;b=a.IV;if(b!==null)return b;Dq();return AOT;}
let AKe=()=>{let b,c,d;b=new E7;Dq();c=null;b.rk=new D;b.rj=1;b.sv=C(478);b.sZ=c;d=DL;DL=d+1|0;b.sV=I(d);PY=b;CG=b;DL=1;GV=1;AOT=new PW;}
let Q2=b=>{let thread=Co();let javaThread=AIK();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;N5(javaThread);thread.resume();};callback.iP=e=>{thread.attribute=AUx(e);N5(javaThread);thread.resume();};callback=Yz(callback);thread.suspend(()=>{try {W2(b,callback);;}catch(RB){callback.iP(RB);}});return null;}
let Cb=G(B0);
let Bfv=()=>{let a=new Cb();A8o(a);return a;}
let BaQ=a=>{let b=new Cb();A6m(b,a);return b;}
let A8o=a=>{a.oe=1;a.of=1;}
let A6m=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
let Ko=G(B0);
function AGE(){let a=this;D.call(a);a.pJ=null;a.px=null;a.sj=null;a.sD=null;a.r$=0;a.q3=0;a.qJ=0;a.o2=0;a.sf=0;a.AD=0;a.vQ=0;a.qO=0;a.JQ=0;a.wS=0;a.xz=0;}
let Bcw=(a,b,c,d,e,f)=>{let g=new AGE();ARq(g,a,b,c,d,e,f);return g;}
let ARq=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.wS=(-1);h=e+1|0;a.r$=h;i=X(h*2|0);a.pJ=i;j=X(g);k=j.data;a.px=j;e=0;g=k.length;l=B9(e,g);if(l>0){b=new V;b.oe=1;b.of=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.sj=X(f);i=i.data;h=0;m=i.length;e=B9(h,m);if(e>0){b=new V;b.oe=1;b.of=1;E(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.q3=0;a.xz=2;f=0;if(e>0){b=new V;b.oe=1;b.of=1;E(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new V;b.oe=1;b.of=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.sD=b;if(c>=0)
{a.qJ=c;a.o2=d;}a.sf=a.qJ;}
let AGH=G();
let Yu=b=>{bh:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break bh;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break bh;}return 67;}return 0;}
let Me=b=>{if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
let ADF=G();
let GD=()=>{return By(performance.now()*1000000.0);}
let ABX=G();
let Hh=G(0);
function Rv(){D.call(this);this.G_=null;}
let A9j=a=>{ATX(a.G_);}
let UR=G(CM);
let US=G(CM);
let UV=G(CM);
let UW=G(CM);
let UT=G(CM);
let UU=G(CM);
let UO=G(CM);
let UP=G(CM);
let UN=G(CM);
let Oo=G(0);
let PW=G();
let Wc=(a,b,c)=>{let d;if(Fc===null){d=new Do;d.p$=Km;b=new L;b.og=H(16);d.o_=b;d.p7=H(32);d.qf=0;Dn();d.qa=Du;Fc=d;}J5(c,Fc);}
let Xx=G();
let PK=G(0);
function Ta(){D.call(this);this.wc=null;}
let Yz=b=>{let c;c=new Ta;c.wc=b;return c;}
let A3w=(a,b)=>{a.wc.e(b);}
let AV6=(a,b)=>{a.wc.iP(b);}
function Qc(){let a=this;D.call(a);a.Fu=null;a.Fv=null;a.Fs=0;a.Ft=null;}
let Ok=G(I3);
let ANh=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.o2;b:{while(true){if(b>f){b=e;break b;}g=a.pH;h=d.pJ.data;i=g*2|0;j=h[i];h[i]=b;e=a.q2.hE(b,c,d);if(e>=0)break;i=a.pH;d.pJ.data[i*2|0]=j;b=b+1|0;}}return b;}
let A$5=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;b:{while(true){if(c<b){c=f;break b;}g=a.pH;h=e.pJ.data;i=g*2|0;j=h[i];h[i]=c;f=a.q2.hE(c,d,e);if(f>=0)break;i=a.pH;e.pJ.data[i*2|0]=j;c=c+(-1)|0;}}return c;}
let ALD=a=>{return null;}
function ACa(){let a=this;D.call(a);a.Y8=0;a.Y$=0;a.Va=0;a.WG=0;a.Tb=null;}
function HU(){let a=this;E7.call(a);a.vh=0;a.r_=null;a.sG=null;a.sl=null;}
let ASg=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new QI;c.tU=a;c.xm=b;c=CK(c,"handleEvent");b.onreadystatechange=c;c=a.sl;d=a.sG;e=new Jn;e.DL=c;e.Bp=d;c=CK(e,"handleEvent");b.onprogress=c;d=a.r_;f=a.vh;b.open("GET",Cp(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
let Oe=G();
let A64=null;let BbI=()=>{BbI=Bk(Oe);A75();}
let A75=()=>{let b,c;Kn();b=X((A8x.t()).data.length);c=b.data;A64=b;c[AAX.on]=1;c[Tw.on]=2;}
let AHs=G();
let A4a=(a,b,c)=>{a.f$(Bv(b),Em(c,"handleEvent"));}
let AQU=(a,b,c)=>{a.f_(Bv(b),Em(c,"handleEvent"));}
let AIU=(a,b,c,d)=>{a.ga(Bv(b),Em(c,"handleEvent"),d?1:0);}
let AIZ=(a,b)=>{return !!a.gb(b);}
let A15=(a,b,c,d)=>{a.gd(Bv(b),Em(c,"handleEvent"),d?1:0);}
let IE=G(0);
function Oh(){let a=this;D.call(a);a.uD=null;a.De=0;a.BS=null;a.DG=null;a.xy=null;}
let Rs=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.uD.readyState==4){if(a.uD.status==200){if(a.xy.q1){if(BY===null){c=new Do;c.p$=DX;b=new L;b.og=H(16);c.o_=b;c.p7=H(32);c.qf=0;Dn();c.qa=Du;BY=c;}d=BY;b=a.BS;c=new L;c.og=H(16);F(c,c.od,C(479));e=c.od;if(b===null)b=C(2);F(c,e,b);f=new P;g=c.og;h=g.data;i=c.od;U();j=h.length;if(i>=0&&i<=(j-0|
0)){f.oh=R(g.data,0,i);b=d.o_;F(b,b.od,f);i=b.od;Bo(b,i,i+1|0);b.og.data[i]=10;Dy(d);}else{b=new O;b.oe=1;b.of=1;Bt(b);E(b);}}c=a.uD.response;Jv();d=Jq.ry.document;f=d.createElement("script");b=d.createTextNode(c);f.appendChild(b);d.body.appendChild(f);Bv(a.uD.responseText);}else if(a.uD.status!=404&&a.uD.status!=403){try{k=I(100);$p=1;continue _;}catch($$e){$$je=BH($$e);if($$je instanceof Eb){}else{throw $$e;}}Ms(a.xy,a.De,a.BS,a.DG);}b=a.xy;b.pu=b.pu-1|0;}return;case 1:b:{try{Kk(k);if(HB()){break _;}break b;}
catch($$e){$$je=BH($$e);if($$je instanceof Eb){}else{throw $$e;}}}Ms(a.xy,a.De,a.BS,a.DG);b=a.xy;b.pu=b.pu-1|0;return;default:DU();}}Co().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
let Ya=(a,b)=>{let $p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Rs(a,b);if(HB()){break _;}return;default:DU();}}Co().s(a,b,$p);}
let Qe=G();
let AJc=0;function IU(){let a=this;D.call(a);a.xD=null;a.B2=0;a.xQ=0;a.rJ=0;}
let Tl=a=>{let b;if(a.rJ)return a.xQ>=a.xD.oo?0:1;b=new Bc;b.oe=1;b.of=1;b.oi=C(480);E(b);}
let Sz=a=>{let b,c,d,e,f,g,h;b=a.xQ;c=a.xD;if(b<c.oo){if(a.rJ){d=c.ox.data;a.xQ=b+1|0;return d[b];}c=new Bc;c.oe=1;c.of=1;c.oi=C(480);E(c);}c=new Mu;U();e=new L;e.og=H(16);N(e,e.od,b,10);f=new P;d=e.og;g=d.data;b=e.od;h=g.length;if(b>=0&&b<=(h-0|0)){f.oh=R(d.data,0,b);c.oe=1;c.of=1;c.oi=f;E(c);}c=new O;Bl(c);E(c);}
function Sb(){let a=this;D.call(a);a.Db=null;a.EZ=0;a.EI=null;a.EJ=null;}
let AEb=a=>{let b,c,d;if(AJc){b=new IU;c=a.Db;d=a.EZ;b.rJ=1;b.xD=c;b.B2=d;return b;}if(a.EI===null){b=new IU;c=a.Db;d=a.EZ;b.rJ=1;b.xD=c;b.B2=d;a.EI=b;b=new IU;b.rJ=1;b.xD=c;b.B2=d;a.EJ=b;}b=a.EI;if(b.rJ){c=a.EJ;c.xQ=0;c.rJ=1;b.rJ=0;return c;}b.xQ=0;b.rJ=1;a.EJ.rJ=0;return b;}
function J_(){let a=this;D.call(a);a.EK=null;a.q9=null;a.Dx=null;}
let ZZ=a=>{let b,c,d,e,f,g,h,i,j;b=a.q9.length;c=new L;c.og=H(((b*4|0)/3|0)+2|0);d=0;a:{d:{k:{n:{c:{while(true){if(d>=b){e=new P;f=c.og;g=f.data;h=c.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){e.oh=R(f.data,0,h);return e;}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}j=b-d|0;if(j<3){if(j>=2){j=((a.q9[d]&255)<<16)+((a.q9[d+1|0]&255)<<8)|0;Ey(c,Dz(C(481),j>>18&63));Ey(c,Dz(C(481),j>>12&63));Ey(c,Dz(C(481),j>>6&63));B5(c,C(482));}else{i=(a.q9[d]&255)<<16;h=i>>18&63;if(h<0)break a;if(h>=C(481).oh.length)break a;h=C(481).oh.charCodeAt(h);j
=c.od;Bo(c,j,j+1|0);c.og.data[j]=h;h=i>>12&63;if(h<0)break;if(h>=C(481).oh.length)break;Tm(c,C(481).oh.charCodeAt(h));LV(c,C(483));}}else{j=(((a.q9[d]&255)<<16)+((a.q9[d+1|0]&255)<<8)|0)+(a.q9[d+2|0]&255)|0;h=j>>18&63;if(h<0)break d;if(h>=C(481).oh.length)break d;i=C(481).oh.charCodeAt(h);h=c.od;Bo(c,h,h+1|0);c.og.data[h]=i;h=j>>12&63;if(h<0)break k;if(h>=C(481).oh.length)break k;i=C(481).oh.charCodeAt(h);h=c.od;Bo(c,h,h+1|0);c.og.data[h]=i;h=j>>6&63;if(h<0)break n;if(h>=C(481).oh.length)break n;i=C(481).oh.charCodeAt(h);h
=c.od;Bo(c,h,h+1|0);c.og.data[h]=i;j=j&63;if(j<0)break c;if(j>=C(481).oh.length)break c;h=C(481).oh.charCodeAt(j);j=c.od;Bo(c,j,j+1|0);c.og.data[j]=h;}d=d+3|0;}e=new Ba;Bl(e);E(e);}e=new Ba;e.oe=1;e.of=1;E(e);}e=new Ba;e.oe=1;e.of=1;E(e);}e=new Ba;e.oe=1;e.of=1;E(e);}e=new Ba;e.oe=1;e.of=1;E(e);}e=new Ba;e.oe=1;e.of=1;E(e);}
function Of(){D.call(this);this.Dl=null;}
let AIP=a=>{let b,c,d,e,f,g,h;b=a.Dl.z3;c=b.ox.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CN;d.oJ=c;e=d;c.classObject=e;}}f=d.oJ.$meta.item;if(f===null)c=null;else{c=f.classObject;if(c===null){c=new CN;c.oJ=f;d=c;f.classObject=d;}}g=b.oo;if(c===null){b=new Dv;b.oe=1;b.of=1;Bt(b);E(b);}if(c===BI(CO)){b=new V;b.oe=1;b.of=1;Bt(b);E(b);}if(g<0){b=new D_;b.oe=1;b.of=1;Bt(b);E(b);}d=EO(c.oJ,g);Fh(b.ox,0,d,0,b.oo);h=d;a.Dl.AP.GM.GW.iR(h);}
let Rx=G(0);
let JF=G(0);
let Uq=G(0);
let Ia=G();
function ME(){Ia.call(this);this.p$=null;}
function Do(){let a=this;ME.call(a);a.qf=0;a.wD=0;a.o_=null;a.p7=null;a.qa=null;}
let Sa=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,$$je;e=b.data;d=d-c|0;f=new Jx;g=e.length;h=c+d|0;f.ow=(-1);f.oD=g;f.oj=g;f.ok=c;f.oj=h;f.v5=0;f.xH=0;f.uL=b;i=1024;if(d<i)i=d;if(16>i)i=16;e=BX(i);d=e.data.length;if(d>=0&&d<=(d-0|0)){j=new C8;h=0+d|0;j.ow=(-1);j.oD=d;j.oj=d;CP();j.o9=CR;j.pg=0;j.o4=e;j.ok=0;j.oj=h;j.pW=0;j.py=0;k=AAZ(a.qa);EN();l=Fx;if(l===null){l=new V;l.oe=1;l.of=1;l.oi=C(484);E(l);}k.u0=l;k.uK=l;while(true){g=(MH(k,f,j,1)).pb!=1?0:1;i=j.ok;l=a.p$;if(l===null)a.wD=1;if(a.wD?0:1)u:{try{l.iT(e,0,i);break u;}
catch($$e){$$je=BH($$e);if($$je instanceof FH){}else{throw $$e;}}a.wD=1;}j.ok=0;j.oj=j.oD;j.ow=(-1);if(!g)break;}while(true){g=(Ob(k,j)).pb!=1?0:1;i=j.ok;l=a.p$;if(l===null)a.wD=1;if(a.wD?0:1)bi:{try{l.iT(e,0,i);break bi;}catch($$e){$$je=BH($$e);if($$je instanceof FH){}else{throw $$e;}}a.wD=1;}j.ok=0;j.oj=j.oD;j.ow=(-1);if(!g)break;}return;}k=new O;k.oe=1;k.of=1;E(k);}
let MN=(a,b)=>{let c,d;c=a.o_;F(c,c.od,b);d=c.od;Bo(c,d,d+1|0);c.og.data[d]=10;Dy(a);}
let Dy=a=>{let b,c,d,e,f,g,h,i,j;b=a.o_;c=b.od;d=a.p7;if(c>d.data.length)d=H(c);e=0;f=0;if(e>c){b=new O;b.oe=1;b.of=1;b.oi=C(485);E(b);}while(e<c){g=d.data;h=f+1|0;i=b.og.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Sa(a,d,0,c);a.o_.od=0;}
function IS(){Ia.call(this);this.B6=null;}
let JJ=G(IS);
let DX=null;let APc=(a,b,c,d)=>{let e;e=0;while(e<d){BbJ(b.data[e+c|0]&255);e=e+1|0;}}
let ASV=()=>{let b;b=new JJ;b.B6=BX(1);DX=b;}
function Jn(){let a=this;D.call(a);a.Bp=null;a.DL=null;}
let ARM=(a,b)=>{a.Bp.iV(b.loaded);}
function Fo(){let a=this;D.call(a);a.tD=null;a.xa=null;}
let EH=b=>{let c,d,e;if(b.oh.length?0:1){c=new Ir;c.oe=1;c.of=1;c.CN=b;E(c);}if(0>=b.oh.length){b=new Ba;b.oe=1;b.of=1;E(b);}if(!AGI(b.oh.charCodeAt(0))){c=new Ir;c.oe=1;c.of=1;c.CN=b;E(c);}d=1;o:{while(d<b.oh.length){if(d<0)break o;if(d>=b.oh.length)break o;r:{e=b.oh.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(AGI(e))break r;else{c=new Ir;c.oe=1;c.of=1;c.CN=b;E(c);}}}d=d+1|0;}return;}b=new Ba;b.oe=1;b.of=1;E(b);}
let AGI=b=>{b:{a:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}b=1;break b;}b=0;}return b;}
let AI6=b=>{let c,d,e,f,g,h,i;if(b===null){b=new V;b.oe=1;b.of=1;b.oi=C(486);E(b);}EH(b);BeO();c=ABd;d=b.oh.toUpperCase();e=d===b.oh?b:Zu(d);k:{if(!e.pz){f=0;while(true){if(f>=e.oh.length)break k;e.pz=(31*e.pz|0)+e.oh.charCodeAt(f)|0;f=f+1|0;}}}g=e.pz;h=c.qv.data;c=h[g&(h.length-1|0)];while(c!==null){if(c.t3==g){e:{d=c.q0;if(e!==d){if(e===d)i=1;else if(!(d instanceof P))i=0;else{d=d;i=e.oh!==d.oh?0:1;}if(!i){i=0;break e;}}i=1;}if(i)break;}c=c.q_;}c=c===null?null:c.rv;if(c!==null)return c;c=new Nc;c.oe=1;c.of
=1;c.Jv=b;E(c);}
let A50=a=>{return a.tD;}
let AVP=(a,b)=>{let c,d,$$je;b:{try{c=a.c6();EN();b=SU(Rk(P5(c,Fx),Fx),b);}catch($$e){$$je=BH($$e);if($$je instanceof GQ){d=$$je;break b;}else{throw $$e;}}return b;}c=new NS;c.oe=1;c.of=1;c.oi=C(75);c.qd=d;E(c);}
let Mr=G(Fo);
let Du=null;let Dn=()=>{Dn=Bk(Mr);AMP();}
let AAZ=a=>{let b,c,d,e,f;b=new O7;c=BX(1);d=c.data;d[0]=63;EN();e=Gz;b.u0=e;b.uK=e;f=d.length;if(f&&f>=b.tB){b.Bj=a;b.x4=c.t();b.yd=2.0;b.tB=4.0;b.y2=H(512);b.xS=BX(512);return b;}e=new V;KY(e,C(487));E(e);}
let AMP=()=>{let b,c,d,e,f;b=new Mr;Dn();c=Bs(P,0);d=c.data;EH(C(137));e=d.length;f=0;while(f<e){EH(d[f]);f=f+1|0;}b.tD=C(137);b.xa=c.t();Du=b;}
function Ir(){V.call(this);this.CN=null;}
let SD=G(0);
function Mf(){let a=this;D.call(a);a.DP=null;a.y4=null;a.rE=0;a.zP=null;a.GD=0.0;a.GO=0.0;a.s1=0;a.HI=null;a.AO=null;a.Cl=null;a.ET=0;a.F8=0;a.Fx=0;a.G5=0;a.Fa=0;a.wf=null;a.yP=null;a.I3=0;a.JB=null;a.JT=0.0;a.Ah=0;a.C$=0;a.E0=0;}
let A$p=null;let AAf=()=>{AAf=Bk(Mf);A4_();}
let BiX=(a,b)=>{let c=new Mf();OV(c,a,b);return c;}
let OV=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;AAf();a.rE=0;a.zP=null;a.GD=0.0;a.GO=0.0;a.s1=0;a.HI=FP();a.AO=FP();a.Cl=FP();a.ET=0;a.F8=770;a.Fx=771;a.G5=770;a.Fa=771;a.yP=null;d=new BD;Fp();d.p0=1.0;d.pZ=1.0;d.pY=1.0;d.pX=1.0;Eh(d);a.JB=d;a.JT=AFT;a.Ah=0;a.C$=0;a.E0=0;if(b>8191){c=new V;d=new L;d.og=H(16);F(d,d.od,C(488));N(d,d.od,b,10);e=new P;f=d.og;g=f.data;h=d.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){e.oh=R(f.data,0,h);c.oe=1;c.of=1;c.oi=e;E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}if(GK===null)j=A$p;else{S6();j
=X6;}k=new JD;l=b*4|0;m=b*6|0;g=Bs(EI,3);f=g.data;d=new EI;d.sd=1;d.qs=2;d.qU=5126;d.qW=0;d.qL=C(489);d.so=0;d.t8=EY(1);f[0]=d;d=new EI;d.sd=4;d.qs=4;d.qU=5121;d.qW=1;d.qL=C(490);d.so=0;d.t8=EY(4);f[1]=d;d=new EI;d.sd=16;d.qs=2;d.qU=5126;d.qW=0;d.qL=C(491);d.so=0;d.t8=EY(16);f[2]=d;Va(k,j,0,l,m,A2a(g));a.DP=k;AFt(a.AO,0.0,0.0,Bb.oX.width,Bb.oX.height);a.y4=CU(b*20|0);f=MV(m);g=f.data;i=0;n=0;while(n<m){g[n]=i;g[n+1|0]=(i+1|0)<<16>>16;b=n+2|0;h=(i+2|0)<<16>>16;g[b]=h;g[n+3|0]=h;g[n+4|0]=(i+3|0)<<16>>16;g[n+5
|0]=i;n=n+6|0;i=(i+4|0)<<16>>16;}WG(a.DP,f);if(c!==null)a.wf=c;else{a.wf=ZG();a.I3=1;}}
let ZG=()=>{let b,c,d,e,f,g,h,i;AAf();b=Cz(C(492),C(493));if(b.oI)return b;c=new V;d=new L;d.og=H(16);F(d,d.od,C(494));if(!b.oI)e=b.oF;else{e=Bq.i4(b.o6);b.oF=e;}F(d,d.od,e);b=new P;f=d.og;g=f.data;h=d.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){b.oh=R(f.data,0,h);c.oe=1;c.of=1;c.oi=b;E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let Cm=a=>{let b,c;if(a.s1){b=new Cb;b.oe=1;b.of=1;b.oi=C(495);E(b);}a.Ah=0;Cd.i5(0);c=a.yP;if(c!==null)c.i6();else{c=a.wf;b=Bq;if(c.o$){Dg(c,c.p9,c.p8);c.o$=0;}b.i8(c.o6);}O9(a);a.s1=1;}
let Cl=a=>{let b,c;if(!a.s1){b=new Cb;b.oe=1;b.of=1;b.oi=C(496);E(b);}if(a.rE>0)Ib(a);a.zP=null;a.s1=0;c=Cd;c.i5(1);if(a.ET?0:1)c.i_(3042);}
let Yh=(a,b,c,d,e)=>{let f,g;if(!a.s1){b=new Cb;b.oe=1;b.of=1;b.oi=C(497);E(b);}f=a.y4.data.length;if(b!==a.zP){Ib(a);a.zP=b;b=b.vI;a.GD=1.0/b.tV;a.GO=1.0/b.tI;g=f;}else{g=f-a.rE|0;if(!g){Ib(a);g=f;}}if(g>=e)g=e;CY(c,d,a.y4,a.rE,g);a.rE=a.rE+g|0;e=e-g|0;while(e>0){d=d+g|0;Ib(a);g=f>=e?e:f;CY(c,d,a.y4,0,g);a.rE=a.rE+g|0;e=e-g|0;}}
let Ib=a=>{let b,c,d,e,f,g;b=a.rE;if(!b)return;a.Ah=a.Ah+1|0;a.C$=a.C$+1|0;c=b/20|0;if(c>a.E0)a.E0=c;b=c*6|0;d=a.zP;Cd.cr(d.tH,d.Ez);d=a.DP;e=a.y4;f=a.rE;d.rb.ja(e,0,f);g=d.qm.jb(1);CH(g,0);Ds(g,b);if(a.ET)Cd.i_(3042);else{Cd.jc(3042);c=a.F8;if(c!=(-1))Cd.jd(c,a.Fx,a.G5,a.Fa);}g=a.yP;if(g===null)g=a.wf;TI(d,g,4,0,b,d.Br);a.rE=0;}
let Cq=(a,b)=>{if(a.s1)Ib(a);GC(a.AO,b.qe);if(a.s1)O9(a);}
let O9=a=>{let b,c,d,e;Qd(GC(a.Cl,a.AO.qe),a.HI);b=a.yP;if(b!==null){b.jg(C(498),a.Cl);a.yP.jh(C(499),0);}else{b=a.wf;c=a.Cl;Ry();d=KC(b,C(498),Nv);e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}ADE(e,d,1,0,c.qe,0);b=a.wf;c=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}c.jk(KC(b,C(499),Nv),0);}}
let A4_=()=>{S6();A$p=Xz;}
let Lz=G(0);
let BL=G();
let ANK=a=>{return;}
let A1q=a=>{return;}
let A1W=a=>{return;}
function Rb(){let a=this;BL.call(a);a.yW=null;a.um=null;a.rY=null;a.vy=null;a.ui=M;a.A_=null;a.A2=null;a.tr=null;}
let A8b=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.tr;a.A_=b.pf;b:{try{a.yW=BdO(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new S0;b.oy=a.tr.oU;if(isNaN(0.0)?1:0)c=0;else{b.yH=0.0;b.AH=1.0;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(500);E(d);}a.yW=b;}a.um=a.tr.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;e=new Bf;BU();d.pl=e;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.A2=b;b=new Cj;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oI){Cr(b,1536,0,1,0,f);b.pt=1;a.rY=b;g=a.vy.data;c=0;h=g.length;if(c>h){b=new V;b.oe
=1;b.of=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.ui=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!f.oI)e=f.oF;else{e=Bq.i4(f.o6);f.oF=e;}F(d,d.od,e);e=new P;g=d.og;j=g.data;h=d.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){e.oh=R(g.data,0,h);b.oe=1;b.of=1;b.oi=e;E(b);}b=new O;BZ(b);E(b);}
let A7N=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){D5(a.tr);return;}if(d[72]){c=a.tr;e=c.oz+1|0;d=c.o7.data;e=e%d.length|0;c.oz=e;Ce(c,d[e]);return;}if(B7(c,76)){Dp(a.tr);D5(a.tr);return;}if(B7(Be,111))return;Ez(1.0,1.0,1.0,1.0);f=a.A2.o0;CS(f);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vy,M);a.ui=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vy,M);a.ui=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vy,M);a.ui=M;}a.ui=T(a.ui,I(1));ZY(a.yW,Bm,Bp,BC);e=0;while(e<65536){g=Yl(a.yW)
*128.0+256.0|0;if(g>=0&&g<512){d=a.vy.data;d[g]=T(d[g],I(1));}e=e+1|0;}Cy(a.rY,f.oK,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rY,i);c=a.rY;b=h;Bh(c,b,0.0,0.0);Bj(a.rY,i);Bh(a.rY,b,Bz(BS(a.vy.data[h],a.ui)),0.0);h=h+1|0;}j=8;while(j<520){Bj(a.rY,(-6.221923240859403E37));c=a.rY;i=j;Bh(c,0.0,i,0.0);Bj(a.rY,(-6.221923240859403E37));Bh(a.rY,10.0,i,0.0);j=j+32|0;}Cw(a.rY);Cq(a.um,f.oK);Cm(a.um);Bw(a.A_,a.um,CF(C(501),S(D,[BK(Bm),BK(Bp),BK(AEp(a.yW)),Cc(Ct(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.A_,a.um,C(502),64.0,494.0,384.0,1,1);Bw(a.A_,a.um,C(503),64.0,468.0,384.0,1,1);Cl(a.um);}
let ALz=(a,b,c)=>{let d,e,f;d=a.A2;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.A2,1);}
function R1(){let a=this;BL.call(a);a.q6=null;a.vP=null;a.qh=null;a.vs=null;a.tQ=null;a.t0=null;a.re=M;a.Bs=null;a.BG=null;a.ta=null;}
let AMV=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.ta;a.Bs=b.pf;b:{try{a.q6=ANd(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new K6;b.oy=a.ta.oU;b.uJ=0.0;b.vE=1.0;a.q6=b;}a.vP=a.ta.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.BG=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,3584,0,1,0,e);b.pt=1;a.qh=b;f=a.vs.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}f=a.tQ.data;g=0;h=f.length;if
(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}f=a.t0.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.re=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A$g=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(B7(Be,71)){D5(a.ta);return;}if(B7(Be,72)){Dp(a.ta);return;}if(B7(Be,76)){Dp(a.ta);D5(a.ta);return;}if(B7(Be,111)){Mo(Eg);return;}Ez(1.0,1.0,1.0,1.0);c=DR(a.BG);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vs,M);Br(a.tQ,M);Br(a.t0,M);a.re=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vs,M);Br(a.tQ,M);Br(a.t0,M);a.re=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vs,M);Br(a.tQ,M);Br(a.t0,M);a.re=M;}a.re=T(a.re,I(1));OC(a.q6,Bm,Bp,BC);d=0;while
(d<65536){e=S1(a.q6)*128.0+256.0|0;if(e>=0&&e<512){f=a.vs.data;f[e]=T(f[e],I(1));}g=NL(1.5707963267948966*a.q6.oy.jJ());h=(KE(a.q6)+(Uh(a.q6)-KE(a.q6))*g*g)*128.0+256.0|0;if(h>=0&&h<512){f=a.tQ.data;f[h]=T(f[h],I(1));}i=ACf(1.5707963267948966*a.q6.oy.jJ());h=(KE(a.q6)+(Uh(a.q6)-KE(a.q6))*i*i)*128.0+256.0|0;if(h>=0&&h<512){f=a.t0.data;f[h]=T(f[h],I(1));}d=d+1|0;}Cy(a.qh,c.oK,1);h=0;while(h<512){d=h&63;j=d?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.qh,j);k=a.qh;l=h;Bh(k,l,0.0,0.0);Bj(a.qh,j);Bh(a.qh,
l,Bz(BS(a.vs.data[h],a.re)),0.0);b=d?(-7.163207052854073E37):(-6.694328448841655E37);Bj(a.qh,b);Bh(a.qh,l,Bz(BS(a.tQ.data[h],a.re))-0.75,0.0);Bj(a.qh,b);Bh(a.qh,l,Bz(BS(a.tQ.data[h],a.re))+0.75,0.0);b=d?(-4.593754331106985E37):(-4.60022594095127E37);Bj(a.qh,b);Bh(a.qh,l,Bz(BS(a.t0.data[h],a.re))-0.75,0.0);Bj(a.qh,b);Bh(a.qh,l,Bz(BS(a.t0.data[h],a.re))+0.75,0.0);h=h+1|0;}m=8;while(m<520){Bj(a.qh,(-6.221923240859403E37));k=a.qh;j=m;Bh(k,0.0,j,0.0);Bj(a.qh,(-6.221923240859403E37));Bh(a.qh,10.0,j,0.0);m=m+32|0;}Cw(a.qh);Cq(a.vP,
c.oK);Cm(a.vP);Bw(a.Bs,a.vP,CF(C(504),S(D,[BK(Bm),BK(Bp),BK(Oa(a.q6)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.Bs,a.vP,C(502),64.0,494.0,384.0,1,1);Bw(a.Bs,a.vP,C(505),64.0,468.0,384.0,1,1);Cl(a.vP);}
let AKg=(a,b,c)=>{let d,e,f;d=a.BG;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.BG,1);}
function Ti(){let a=this;BL.call(a);a.o5=null;a.uA=null;a.rL=null;a.qx=null;a.ti=M;a.Am=null;a.Af=null;a.vq=0;a.s$=null;}
let AS6=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.s$;a.Am=b.pf;b:{try{a.o5=OG(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new HZ;b.oy=a.s$.oU;if(isNaN(0.0)?1:0)c=0;else{b.sY=0.0;b.tc=1.0;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(506);E(d);}a.o5=b;}a.uA=a.s$.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;e=new Bf;BU();d.pl=e;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.Af=b;b=new Cj;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oI){Cr(b,1536,0,1,0,f);b.pt=1;a.rL=b;g=a.qx.data;c=0;h=g.length;if(c>h){b=new V;b.oe
=1;b.of=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.ti=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!f.oI)e=f.oF;else{e=Bq.i4(f.o6);f.oF=e;}F(d,d.od,e);e=new P;g=d.og;j=g.data;h=d.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){e.oh=R(g.data,0,h);b.oe=1;b.of=1;b.oi=e;E(b);}b=new O;BZ(b);E(b);}
let AUh=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;if(B7(Be,71)){D5(a.s$);return;}if(B7(Be,72)){Dp(a.s$);return;}if(B7(Be,38)){a.vq=(a.vq+10|0)%11|0;return;}if(B7(Be,39)){a.vq=(a.vq+1|0)%11|0;return;}if(B7(Be,76)){Dp(a.s$);D5(a.s$);return;}if(B7(Be,111)){Mo(Eg);return;}Ez(1.0,1.0,1.0,1.0);c=DR(a.Af);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.qx,M);a.ti=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.qx,M);a.ti=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.qx,M);a.ti=M;}u:{bj:{bc:{a.ti
=T(a.ti,I(4));JR(a.o5,Bm,Bp,BC);switch(a.vq){case 0:break;case 1:break bj;case 2:d=0;while(d<262144){e=(Fs(a.o5)+Fe(a.o5)*A1m(a.o5.oy.jJ()))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 3:d=0;while(d<262144){e=Z2(a,a.o5.oy.jJ(),Fs(a.o5),Fe(a.o5))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 4:d=0;while(d<262144){e=(Fs(a.o5)+Fe(a.o5)*AN0(a.o5.oy.jJ()))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 5:d
=0;while(d<262144){e=(Fs(a.o5)+Fe(a.o5)*AG_(a))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 6:d=0;while(d<262144){e=(Fs(a.o5)+Fe(a.o5)*R5(a.o5.oy.em()))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 7:d=0;while(d<262144){e=(Fs(a.o5)+Fe(a.o5)*(KT(a.o5.oy.em())-32.0+a.o5.oy.ev()-a.o5.oy.ev())/66.0)*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 8:d=0;while(d<262144){g=Fs(a.o5);h=Fe(a.o5);i=a.o5.oy.jT();j
=BC;e=(g+h*(i*(4.0-3.6666666666666665*j)+j*0.3333333333333333*(a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT()+a.o5.oy.jT())))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 9:d=0;while(d<262144){k=Fs(a.o5);j=Fe(a.o5);g=a.o5.oy.jT();i=BC;e=(k+j*(g*(1.0-i)+i*R5(a.o5.oy.em())))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;case 10:break bc;default:break u;}d=0;while
(d<262144){e=IT(a.o5)*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}break u;}d=0;while(true){if(d>=262144)break u;e=(Fs(a.o5)+Fe(a.o5)*ACr(a))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}}d=0;while(d<262144){e=(Fs(a.o5)+Fe(a.o5)*WB(a))*128.0+256.0|0;if(e>=0&&e<512){f=a.qx.data;f[e]=T(f[e],I(1));}d=d+1|0;}}Cy(a.rL,c.oK,1);l=0;while(l<512){m=l&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rL,m);n=a.rL;b=l;Bh(n,b,0.0,0.0);Bj(a.rL,m);Bh(a.rL,b,Bz(BS(a.qx.data[l],
a.ti)),0.0);l=l+1|0;}o=8;while(o<520){Bj(a.rL,(-6.221923240859403E37));n=a.rL;m=o;Bh(n,0.0,m,0.0);Bj(a.rL,(-6.221923240859403E37));Bh(a.rL,10.0,m,0.0);o=o+32|0;}Cw(a.rL);Cq(a.uA,c.oK);Cm(a.uA);Bw(a.Am,a.uA,CF(C(507),S(D,[BK(Bm),BK(Bp),BK(BC),BK(Jr(a.o5)),Cc(Ct(Bb)),Cc(a.vq)])),64.0,522.0,384.0,1,1);Bw(a.Am,a.uA,C(502),64.0,494.0,384.0,1,1);Bw(a.Am,a.uA,C(508),64.0,468.0,384.0,1,1);Cl(a.uA);}
let A5J=(a,b,c)=>{let d,e,f;d=a.Af;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Af,1);}
let WB=a=>{let b,c;b=I(KT(a.o5.oy.em())-32|0);c=a.o5.oy.em();return Bz(T(BP(b,32),B4(Bd(c,B(4294967295, 0)),Q(c,32))))*5.7691650068303346E-11;}
let Z2=(a,b,c,d)=>{let e,f,g;if(b<=0.0)return (-Infinity);if(b>=1.0)return Infinity;if(d===0.0)return c;e=b-0.5;if(Lv(e)<=0.425){b=0.180625-e*e;f=e*(((((((b*2509.0809287301227+33430.57558358813)*b+67265.7709270087)*b+45921.95393154987)*b+13731.69376550946)*b+1971.5909503065513)*b+133.14166789178438)*b+3.3871328727963665)/(((((((b*5226.495278852854+28729.085735721943)*b+39307.89580009271)*b+21213.794301586597)*b+5394.196021424751)*b+687.1870074920579)*b+42.31333070160091)*b+1.0);}else{g=B9(e,0.0);if(g>0)b=1.0
-b;b=Ch( -C$(b));if(b>5.0){f=b-5.0;f=(((((((f*2.0103343992922881E-7+2.7115555687434876E-5)*f+0.0012426609473880784)*f+0.026532189526576124)*f+0.29656057182850487)*f+1.7848265399172913)*f+5.463784911164114)*f+6.657904643501103)/(((((((f*2.0442631033899397E-15+1.421511758316446E-7)*f+1.8463183175100548E-5)*f+7.868691311456133E-4)*f+0.014875361290850615)*f+0.1369298809227358)*f+0.599832206555888)*f+1.0);}else{b=b-1.6;f=(((((((b*7.745450142783414E-4+0.022723844989269184)*b+0.2417807251774506)*b+1.2704582524523684)
*b+3.6478483247632045)*b+5.769497221460691)*b+4.630337846156546)*b+1.4234371107496835)/(((((((b*1.0507500716444169E-9+5.475938084995345E-4)*b+0.015198666563616457)*b+0.14810397642748008)*b+0.6897673349851)*b+1.6763848301838038)*b+2.053191626637759)*b+1.0);}if(g<0)f= -f;}return c+d*f;}
let AN0=b=>{let c,d,e;c=b+b-1.0;d=C$(1.0-c*c);e=d*0.5+4.54689435453805;b=Ch(Ch(e*e-d*7.14224495043282)-e);return 1.4142135623730951*E5(B2(Bd(Ee(c),B(0, 2147483648)),Bd(Ee(b),B(4294967295, 2147483647))));}
let AG_=a=>{let b,c,d;while(true){while(true){b=a.o5.oy.jT();c=a.o5.oy.jT();d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}return b*Ch((-2.0)*C$(d)/d);}
let ACr=a=>{let b;b=a.o5.oy.em();return E5(B2(BP(T(Q(T(W(b,B(3733122965, 3509855555)),B(3333171685, 3333171684)),59),I(1008)),52),Bd(b,B(4294967295, 2148532223))));}
function Pl(){let a=this;BL.call(a);a.ut=null;a.uG=null;a.qT=null;a.sk=null;a.sK=M;a.zY=null;a.Ce=null;a.vN=0;a.s9=null;}
let AIF=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.s9;a.zY=b.pf;b:{try{a.ut=AOD(b.oU,Bm,Bp,BC);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new MP;b.oy=a.s9.oU;b.wX=0.0;b.wj=1.0;b.w0=0.5;a.ut=b;}a.uG=a.s9.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Ce=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,3584,0,1,0,e);b.pt=1;a.qT=b;f=a.sk.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.sK=M;return;}b
=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A6W=(a,b)=>{let c,d,e,f,g,h,i,j;if(B7(Be,71)){D5(a.s9);return;}if(B7(Be,72)){Dp(a.s9);return;}if(B7(Be,38)){a.vN=(a.vN+2|0)%3|0;return;}if(B7(Be,39)){a.vN=(a.vN+1|0)%3|0;return;}if(B7(Be,76)){Dp(a.s9);D5(a.s9);return;}if(B7(Be,111)){Mo(Eg);return;}Ez(1.0,1.0,1.0,1.0);c=DR(a.Ce);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.sk,M);a.sK=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.sk,M);a.sK=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.sk,M);a.sK=M;}u:{i:{v:{a.sK=T(a.sK,I(4));QH(a.ut,
Bm,Bp,BC);switch(a.vN){case 0:break i;case 1:break;case 2:break v;default:break u;}d=0;while(d<262144){e=a.ut.oy.jY(15);e=((e&1)+((e>>>1|0)&127)|0)+((e>>>8|0)&127)|0;f=a.sk.data;f[e]=T(f[e],I(1));d=d+1|0;}break u;}d=0;while(true){if(d>=262144)break u;e=a.ut.oy.jZ(0.0,256.0)|0;if(e>=0&&e<256){f=a.sk.data;f[e]=T(f[e],I(1));}d=d+1|0;}}d=0;while(d<262144){e=AM$(a.ut.oy,0.0,256.0,128.0)|0;if(e>=0&&e<256){f=a.sk.data;f[e]=T(f[e],I(1));}d=d+1|0;}}Cy(a.qT,c.oK,1);g=0;while(g<256){h=g&31?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.qT,
h);i=a.qT;d=g<<1;b=d;Bh(i,b,0.0,0.0);Bj(a.qT,h);Bh(a.qT,b,Bz(BS(a.sk.data[g],a.sK)),0.0);Bj(a.qT,h);i=a.qT;b=d|1;Bh(i,b,0.0,0.0);Bj(a.qT,h);Bh(a.qT,b,Bz(BS(a.sk.data[g],a.sK)),0.0);g=g+1|0;}j=8;while(j<520){Bj(a.qT,(-6.221923240859403E37));i=a.qT;h=j;Bh(i,0.0,h,0.0);Bj(a.qT,(-6.221923240859403E37));Bh(a.qT,10.0,h,0.0);j=j+32|0;}Cw(a.qT);Cq(a.uG,c.oK);Cm(a.uG);Bw(a.zY,a.uG,CF(C(509),S(D,[BK(Bm),BK(Bp),BK(SZ(a.ut)),Cc(Ct(Bb)),Cc(a.vN)])),64.0,522.0,384.0,1,1);Bw(a.zY,a.uG,C(502),64.0,494.0,384.0,1,1);Bw(a.zY,
a.uG,C(508),64.0,468.0,384.0,1,1);Cl(a.uG);}
let A1X=(a,b,c)=>{let d,e,f;d=a.Ce;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Ce,1);}
function ZF(){let a=this;BL.call(a);a.IZ=null;a.zM=null;a.rt=null;a.GH=null;a.BU=null;a.BX=null;}
let BgR=a=>{let b=new ZF();A6G(b,a);return b;}
let AJw=a=>{let b,c,d,e,f,g,h,i;b=a.BX;a.GH=b.pf;a.IZ=b.oU;a.zM=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.BU=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rt=b;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;g=f.data;h=c.od;U();i=g.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A6G=(a,b)=>{a.BX=b;}
let AOb=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Be.ph.data;if(c[71]){d=a.BX;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.BX;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[111])return;Cd.j1(1.0,1.0,1.0,1.0);Cd.j2(16384);h=a.BU.o0;F8(h,1);d=a.rt;g=h.oK;GC(d.Ay,g.qe);d.Dr=0;d=a.rt;LU();g=AEa;i=g.un;j=g.uo;g.un=j;i=Bg(i,BP(i,23));i=Bg(Bg(Bg(i,
j),Q(i,17)),Q(j,26));g.uo=i;JW(d,Bz(Q(T(i,j),40))*5.9604644775390625E-8,AEf(g),Fv(),1.0);Bh(a.rt,0.0,0.0,0.0);JW(a.rt,Fv(),Fv(),Fv(),1.0);Bh(a.rt,SG(Bb)-1|0,0.0,0.0);JW(a.rt,Fv(),Fv(),Fv(),1.0);Bh(a.rt,SG(Bb)-1|0,Qm(Bb)-1|0,0.0);JW(a.rt,Fv(),Fv(),Fv(),1.0);Bh(a.rt,0.0,Qm(Bb)-1|0,0.0);U3(a.rt);Cq(a.zM,h.oK);Cm(a.zM);g=a.GH;k=a.zM;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(510),c),64.0,522.0,384.0,1,1);Cl(a.zM);}
let ASz=(a,b,c)=>{let d,e,f;d=a.BU;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.BU,1);}
function Xp(){let a=this;BL.call(a);a.yF=null;a.uP=null;a.rn=null;a.us=null;a.tw=M;a.A6=null;a.B_=null;a.vu=null;}
let Bf8=a=>{let b=new Xp();AKT(b,a);return b;}
let A0j=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.vu;a.A6=b.pf;b:{try{a.yF=BeY(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new O5;b.oy=a.vu.oU;b.xv=1.0;b.xU=1.0;a.yF=b;}a.uP=a.vu.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.B_=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rn=b;f=a.us.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tw=M;return;}b=new Bc;c
=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AKT=(a,b)=>{a.us=Cu(512);a.tw=M;a.vu=b;}
let A9O=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){D5(a.vu);return;}if(d[72]){Dp(a.vu);return;}if(d[76]){c=a.vu;Ce(c,c.E$);return;}if(B7(c,111))return;Ez(1.0,1.0,1.0,1.0);c=DR(a.B_);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.us,M);a.tw=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.us,M);a.tw=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.us,M);a.tw=M;}a.tw=T(a.tw,I(1));AAr(a.yF,Bm,Bp,BC);e=0;while(e<65536){f=XK(a.yF)*512.0|0;if(f>=0&&f<512){d=a.us.data;d[f]=T(d[f],I(1));}e
=e+1|0;}Cy(a.rn,c.oK,1);g=0;while(g<512){h=g&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rn,h);i=a.rn;b=g;Bh(i,b,0.0,0.0);Bj(a.rn,h);Bh(a.rn,b,Bz(BS(a.us.data[g],a.tw)),0.0);g=g+1|0;}j=8;while(j<520){Bj(a.rn,(-6.221923240859403E37));i=a.rn;h=j;Bh(i,0.0,h,0.0);Bj(a.rn,(-6.221923240859403E37));Bh(a.rn,10.0,h,0.0);j=j+32|0;}Cw(a.rn);Cq(a.uP,c.oK);Cm(a.uP);Bw(a.A6,a.uP,CF(C(511),S(D,[BK(Bm),BK(Bp),BK(ADQ(a.yF)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.A6,a.uP,C(502),64.0,494.0,384.0,1,1);Bw(a.A6,a.uP,
C(512),64.0,468.0,384.0,1,1);Cl(a.uP);}
let A40=(a,b,c)=>{let d,e,f;d=a.B_;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.B_,1);}
function ABN(){let a=this;BL.call(a);a.yD=null;a.vm=null;a.rV=null;a.uz=null;a.t$=M;a.AU=null;a.zU=null;a.wO=null;}
let BfS=a=>{let b=new ABN();ASt(b,a);return b;}
let ALk=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wO;a.AU=b.pf;b:{try{a.yD=Bdj(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new R2;b.oy=a.wO.oU;b.zg=1.0;b.zx=1.0;a.yD=b;}a.vm=a.wO.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.zU=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rV=b;f=a.uz.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t$=M;return;}b=new Bc;c
=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let ASt=(a,b)=>{a.uz=Cu(512);a.t$=M;a.wO=b;}
let AMu=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.wO;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wO);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);g=a.zU.o0;F8(g,1);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.uz,M);a.t$=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.uz,M);a.t$=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.uz,M);a.t$=M;}a.t$=T(a.t$,I(1));AAE(a.yD,Bm,Bp,BC);e=0;while(e<65536){h=AH5(a.yD)*512.0|0;if(h>=0&&h<
512){d=a.uz.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.rV,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rV,i);c=a.rV;b=f;Bh(c,b,0.0,0.0);Bj(a.rV,i);Bh(a.rV,b,Bz(BS(a.uz.data[f],a.t$)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rV,(-6.221923240859403E37));c=a.rV;i=j;Bh(c,0.0,i,0.0);Bj(a.rV,(-6.221923240859403E37));Bh(a.rV,10.0,i,0.0);j=j+32|0;}Cw(a.rV);Cq(a.vm,g.oK);Cm(a.vm);Bw(a.AU,a.vm,CF(C(513),S(D,[BK(Bm),BK(Bp),BK(Y3(a.yD)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.AU,a.vm,C(502),
64.0,494.0,384.0,1,1);Bw(a.AU,a.vm,C(512),64.0,468.0,384.0,1,1);Cl(a.vm);}
let A8R=(a,b,c)=>{let d,e,f;d=a.zU;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.zU,1);}
function AHf(){let a=this;BL.call(a);a.zZ=null;a.v6=null;a.rx=null;a.uQ=null;a.tl=M;a.zW=null;a.B$=null;a.w4=null;}
let Bcz=a=>{let b=new AHf();A86(b,a);return b;}
let A7m=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.w4;a.zW=b.pf;b:{try{a.zZ=BcV(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new Qf;b.oy=a.w4.oU;b.Az=0.0;b.zV=0.25;a.zZ=b;}a.v6=a.w4.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.B$=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rx=b;f=a.uQ.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tl=M;return;}b=new Bc;c
=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A86=(a,b)=>{a.uQ=Cu(512);a.tl=M;a.w4=b;}
let A9Q=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.w4;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){c=a.w4;e=c.oz+1|0;d=c.o7.data;e=e%d.length|0;c.oz=e;Ce(c,d[e]);return;}if(B7(c,111))return;Ez(1.0,1.0,1.0,1.0);c=DR(a.B$);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.uQ,M);a.tl=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.uQ,M);a.tl=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.uQ,M);a.tl=M;}a.tl=T(a.tl,I(1));WT(a.zZ,Bm,Bp,BC);e
=0;while(e<65536){g=AAN(a.zZ)*512.0|0;if(g>=0&&g<512){d=a.uQ.data;d[g]=T(d[g],I(1));}e=e+1|0;}Cy(a.rx,c.oK,1);f=0;while(f<512){h=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rx,h);i=a.rx;b=f;Bh(i,b,0.0,0.0);Bj(a.rx,h);Bh(a.rx,b,Bz(BS(a.uQ.data[f],a.tl)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rx,(-6.221923240859403E37));i=a.rx;h=j;Bh(i,0.0,h,0.0);Bj(a.rx,(-6.221923240859403E37));Bh(a.rx,10.0,h,0.0);j=j+32|0;}Cw(a.rx);Cq(a.v6,c.oK);Cm(a.v6);Bw(a.zW,a.v6,CF(C(514),S(D,[BK(Bm),BK(Bp),Cc(Ct(Bb))])),64.0,
522.0,384.0,1,1);Bw(a.zW,a.v6,C(502),64.0,494.0,384.0,1,1);Bw(a.zW,a.v6,C(512),64.0,468.0,384.0,1,1);Cl(a.v6);}
let A_c=(a,b,c)=>{let d,e,f;d=a.B$;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.B$,1);}
function VU(){let a=this;BL.call(a);a.x7=null;a.vz=null;a.rB=null;a.vK=null;a.ub=M;a.Au=null;a.A$=null;a.vS=null;}
let BfP=a=>{let b=new VU();A1B(b,a);return b;}
let A$7=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.vS;a.Au=b.pf;b:{try{a.x7=OG(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new HZ;b.oy=a.vS.oU;if(isNaN(0.0)?1:0)c=0;else{b.sY=0.0;b.tc=1.0;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(506);E(d);}a.x7=b;}a.vz=a.vS.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;e=new Bf;BU();d.pl=e;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.A$=b;b=new Cj;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oI){Cr(b,1536,0,1,0,f);b.pt=1;a.rB=b;g=a.vK.data;c=0;h=g.length;if(c>h){b=new V;b.oe
=1;b.of=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.ub=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!f.oI)e=f.oF;else{e=Bq.i4(f.o6);f.oF=e;}F(d,d.od,e);e=new P;g=d.og;j=g.data;h=d.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){e.oh=R(g.data,0,h);b.oe=1;b.of=1;b.oi=e;E(b);}b=new O;BZ(b);E(b);}
let A1B=(a,b)=>{a.vK=Cu(512);a.ub=M;a.vS=b;}
let AM5=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){D5(a.vS);return;}if(d[72]){c=a.vS;e=c.oz+1|0;d=c.o7.data;e=e%d.length|0;c.oz=e;Ce(c,d[e]);return;}if(B7(c,76)){c=a.vS;Ce(c,c.GJ);return;}if(B7(Be,111))return;Ez(1.0,1.0,1.0,1.0);f=a.A$.o0;CS(f);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vK,M);a.ub=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vK,M);a.ub=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vK,M);a.ub=M;}a.ub=T(a.ub,I(1));JR(a.x7,Bm,Bp,BC);e=0;while(e<65536){g=IT(a.x7)
*128.0+256.0|0;if(g>=0&&g<512){d=a.vK.data;d[g]=T(d[g],I(1));}e=e+1|0;}Cy(a.rB,f.oK,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rB,i);c=a.rB;b=h;Bh(c,b,0.0,0.0);Bj(a.rB,i);Bh(a.rB,b,Bz(BS(a.vK.data[h],a.ub)),0.0);h=h+1|0;}j=8;while(j<520){Bj(a.rB,(-6.221923240859403E37));c=a.rB;i=j;Bh(c,0.0,i,0.0);Bj(a.rB,(-6.221923240859403E37));Bh(a.rB,10.0,i,0.0);j=j+32|0;}Cw(a.rB);Cq(a.vz,f.oK);Cm(a.vz);Bw(a.Au,a.vz,CF(C(515),S(D,[BK(Bm),BK(Bp),BK(Jr(a.x7)),Cc(Ct(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.Au,a.vz,C(502),64.0,494.0,384.0,1,1);Bw(a.Au,a.vz,C(508),64.0,468.0,384.0,1,1);Cl(a.vz);}
let AMg=(a,b,c)=>{let d,e,f;d=a.A$;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.A$,1);}
function AAl(){let a=this;BL.call(a);a.zr=null;a.AF=0.0;a.uj=null;a.rs=null;a.u1=null;a.tp=M;a.B0=null;a.Ck=null;a.xB=null;}
let Bgp=a=>{let b=new AAl();AI3(b,a);return b;}
let ATn=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;b=a.xB;a.B0=b.pf;b:{try{a.zr=OG(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new HZ;b.oy=a.xB.oU;if(isNaN(0.0)?1:0)c=0;else{b.sY=0.0;b.tc=1.0;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(506);E(d);}a.zr=b;}e=BC;a.AF=Bz(By(e+PQ(e)*0.5));a.uj=a.xB.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;f=new Bf;BU();d.pl=f;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.Ck=b;b=new Cj;g=Cz(CD(0,1,0),CE(0,1,0));if(g.oI){Cr(b,1536,0,1,0,g);b.pt=1;a.rs=b;h=a.u1.data;c
=0;i=h.length;if(c>i){b=new V;b.oe=1;b.of=1;E(b);}while(c<i){j=c+1|0;h[c]=M;c=j;}a.tp=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!g.oI)f=g.oF;else{f=Bq.i4(g.o6);g.oF=f;}F(d,d.od,f);f=new P;h=d.og;k=h.data;i=d.od;U();j=k.length;if(i>=0&&i<=(j-0|0)){f.oh=R(h.data,0,i);b.oe=1;b.of=1;b.oi=f;E(b);}b=new O;BZ(b);E(b);}
let AI3=(a,b)=>{a.AF=1.0;a.u1=Cu(512);a.tp=M;a.xB=b;}
let A2q=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){D5(a.xB);return;}if(d[72]){c=a.xB;e=c.oz+1|0;d=c.o7.data;e=e%d.length|0;c.oz=e;Ce(c,d[e]);return;}if(B7(c,111))return;Ez(1.0,1.0,1.0,1.0);c=DR(a.Ck);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.u1,M);a.tp=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.u1,M);a.tp=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.u1,M);a.tp=M;a.AF=Bz(AQv(BC));}a.tp=T(a.tp,I(1));JR(a.zr,Bm,Bp,BC);e=0;while(e<65536){f=AWR(IT(a.zr),a.AF)*128.0+
256.0|0;if(f>=0&&f<512){d=a.u1.data;d[f]=T(d[f],I(1));}e=e+1|0;}Cy(a.rs,c.oK,1);g=0;while(g<512){h=g&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rs,h);i=a.rs;b=g;Bh(i,b,0.0,0.0);Bj(a.rs,h);Bh(a.rs,b,Bz(BS(a.u1.data[g],a.tp)),0.0);g=g+1|0;}j=8;while(j<520){Bj(a.rs,(-6.221923240859403E37));i=a.rs;h=j;Bh(i,0.0,h,0.0);Bj(a.rs,(-6.221923240859403E37));Bh(a.rs,10.0,h,0.0);j=j+32|0;}Cw(a.rs);Cq(a.uj,c.oK);Cm(a.uj);Bw(a.B0,a.uj,CF(C(516),S(D,[BK(Bm),BK(Bp),BK(BC),BK(Jr(a.zr)),Cc(Ct(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.B0,a.uj,C(502),64.0,494.0,384.0,1,1);Bw(a.B0,a.uj,C(517),64.0,468.0,384.0,1,1);Cl(a.uj);}
let AUe=(a,b,c)=>{let d,e,f;d=a.Ck;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Ck,1);}
function YP(){let a=this;BL.call(a);a.wQ=null;a.AM=0.0;a.vp=null;a.rZ=null;a.u2=null;a.td=M;a.A4=null;a.Bh=null;a.wH=null;}
let Bb1=a=>{let b=new YP();A1E(b,a);return b;}
let AOX=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wH;a.A4=b.pf;b:{try{a.wQ=OG(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new HZ;b.oy=a.wH.oU;if(isNaN(0.0)?1:0)c=0;else{b.sY=0.0;b.tc=1.0;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(506);E(d);}a.wQ=b;}a.AM=Yq(BC,1.0);a.vp=a.wH.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;e=new Bf;BU();d.pl=e;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.Bh=b;b=new Cj;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oI){Cr(b,1536,0,1,0,f);b.pt=1;a.rZ=b;g=a.u2.data;c=0;h=g.length;if
(c>h){b=new V;b.oe=1;b.of=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.td=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!f.oI)e=f.oF;else{e=Bq.i4(f.o6);f.oF=e;}F(d,d.od,e);e=new P;g=d.og;j=g.data;h=d.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){e.oh=R(g.data,0,h);b.oe=1;b.of=1;b.oi=e;E(b);}b=new O;BZ(b);E(b);}
let A1E=(a,b)=>{a.AM=1.0;a.u2=Cu(512);a.td=M;a.wH=b;}
let A38=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Be;d=c.ph.data;if(d[71]){D5(a.wH);return;}if(d[72]){Dp(a.wH);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);e=a.Bh.o0;CS(e);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.u2,M);a.td=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.u2,M);a.td=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.u2,M);a.td=M;a.AM=ASP(BC,1.0);}a.td=T(a.td,I(1));JR(a.wQ,Bm,Bp,BC);f=0;while(f<65536){g=IT(a.wQ);h=1;while(h<a.AM){g=g*IT(a.wQ);h=h+1|0;}i=g*128.0+256.0|0;if(i>=0&&i
<512){d=a.u2.data;d[i]=T(d[i],I(1));}f=f+1|0;}Cy(a.rZ,e.oK,1);j=0;while(j<512){k=j&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rZ,k);c=a.rZ;b=j;Bh(c,b,0.0,0.0);Bj(a.rZ,k);Bh(a.rZ,b,Bz(BS(a.u2.data[j],a.td)),0.0);j=j+1|0;}h=8;while(h<520){Bj(a.rZ,(-6.221923240859403E37));c=a.rZ;k=h;Bh(c,0.0,k,0.0);Bj(a.rZ,(-6.221923240859403E37));Bh(a.rZ,10.0,k,0.0);h=h+32|0;}Cw(a.rZ);Cq(a.vp,e.oK);Cm(a.vp);Bw(a.A4,a.vp,CF(C(518),S(D,[BK(Bm),BK(Bp),BK(BC),BK(Jr(a.wQ)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.A4,
a.vp,C(502),64.0,494.0,384.0,1,1);Bw(a.A4,a.vp,C(519),64.0,468.0,384.0,1,1);Cl(a.vp);}
let A6R=(a,b,c)=>{let d,e,f;d=a.Bh;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Bh,1);}
function Xl(){let a=this;BL.call(a);a.zf=null;a.uw=null;a.rq=null;a.vU=null;a.tT=M;a.Bu=null;a.AQ=null;a.vv=null;}
let Bbk=a=>{let b=new Xl();AUa(b,a);return b;}
let A3v=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.vv;a.Bu=b.pf;b:{try{a.zf=Bf0(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new RP;b.oy=a.vv.oU;if(isNaN(0.0)?1:0)c=0;else{b.yG=0.0;b.z9=1.0;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(500);E(d);}a.zf=b;}a.uw=a.vv.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;e=new Bf;BU();d.pl=e;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.AQ=b;b=new Cj;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oI){Cr(b,1536,0,1,0,f);b.pt=1;a.rq=b;g=a.vU.data;c=0;h=g.length;if(c>h){b=new V;b.oe
=1;b.of=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.tT=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!f.oI)e=f.oF;else{e=Bq.i4(f.o6);f.oF=e;}F(d,d.od,e);e=new P;g=d.og;j=g.data;h=d.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){e.oh=R(g.data,0,h);b.oe=1;b.of=1;b.oi=e;E(b);}b=new O;BZ(b);E(b);}
let AUa=(a,b)=>{a.vU=Cu(512);a.tT=M;a.vv=b;}
let A5I=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){D5(a.vv);return;}if(d[72]){c=a.vv;e=c.oz+1|0;d=c.o7.data;e=e%d.length|0;c.oz=e;Ce(c,d[e]);return;}if(B7(c,76)){c=a.vv;Ce(c,c.Gx);return;}if(B7(Be,111))return;Ez(1.0,1.0,1.0,1.0);f=a.AQ.o0;CS(f);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vU,M);a.tT=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vU,M);a.tT=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vU,M);a.tT=M;}a.tT=T(a.tT,I(1));ADw(a.zf,Bm,Bp,BC);e=0;while(e<65536){g=ACo(a.zf)
*128.0+256.0|0;if(g>=0&&g<512){d=a.vU.data;d[g]=T(d[g],I(1));}e=e+1|0;}Cy(a.rq,f.oK,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rq,i);c=a.rq;b=h;Bh(c,b,0.0,0.0);Bj(a.rq,i);Bh(a.rq,b,Bz(BS(a.vU.data[h],a.tT)),0.0);h=h+1|0;}j=8;while(j<520){Bj(a.rq,(-6.221923240859403E37));c=a.rq;i=j;Bh(c,0.0,i,0.0);Bj(a.rq,(-6.221923240859403E37));Bh(a.rq,10.0,i,0.0);j=j+32|0;}Cw(a.rq);Cq(a.uw,f.oK);Cm(a.uw);Bw(a.Bu,a.uw,CF(C(520),S(D,[BK(Bm),BK(Bp),BK(ZA(a.zf)),Cc(Ct(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.Bu,a.uw,C(502),64.0,494.0,384.0,1,1);Bw(a.Bu,a.uw,C(503),64.0,468.0,384.0,1,1);Cl(a.uw);}
let AS$=(a,b,c)=>{let d,e,f;d=a.AQ;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.AQ,1);}
function ACG(){let a=this;BL.call(a);a.zC=null;a.uF=null;a.rA=null;a.u$=null;a.s3=M;a.Co=null;a.zT=null;a.xl=null;}
let Bep=a=>{let b=new ACG();A2S(b,a);return b;}
let A9E=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.xl;a.Co=b.pf;b:{try{a.zC=Bdt(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new PP;b.oy=a.xl.oU;if(isNaN(0.0)?1:0)c=0;else{b.zH=0.0;b.AK=1.0;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(506);E(d);}a.zC=b;}a.uF=a.xl.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;e=new Bf;BU();d.pl=e;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.zT=b;b=new Cj;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oI){Cr(b,1536,0,1,0,f);b.pt=1;a.rA=b;g=a.u$.data;c=0;h=g.length;if(c>h){b=new V;b.oe
=1;b.of=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.s3=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!f.oI)e=f.oF;else{e=Bq.i4(f.o6);f.oF=e;}F(d,d.od,e);e=new P;g=d.og;j=g.data;h=d.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){e.oh=R(g.data,0,h);b.oe=1;b.of=1;b.oi=e;E(b);}b=new O;BZ(b);E(b);}
let A2S=(a,b)=>{a.u$=Cu(512);a.s3=M;a.xl=b;}
let A7O=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.xl;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.xl);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);g=a.zT.o0;F8(g,1);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.u$,M);a.s3=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.u$,M);a.s3=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.u$,M);a.s3=M;}a.s3=T(a.s3,I(1));AHl(a.zC,Bm,Bp,BC);e=0;while(e<65536){h=AG0(a.zC)*128.0|0;if(h>=0&&h<
512){d=a.u$.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.rA,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rA,i);c=a.rA;b=f;Bh(c,b,0.0,0.0);Bj(a.rA,i);Bh(a.rA,b,Bz(BS(a.u$.data[f],a.s3)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rA,(-6.221923240859403E37));c=a.rA;i=j;Bh(c,0.0,i,0.0);Bj(a.rA,(-6.221923240859403E37));Bh(a.rA,10.0,i,0.0);j=j+32|0;}Cw(a.rA);Cq(a.uF,g.oK);Cm(a.uF);Bw(a.Co,a.uF,CF(C(521),S(D,[BK(Bm),BK(Bp),BK(AGj(a.zC)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.Co,a.uF,C(502),
64.0,494.0,384.0,1,1);Bw(a.Co,a.uF,C(508),64.0,468.0,384.0,1,1);Cl(a.uF);}
let ASU=(a,b,c)=>{let d,e,f;d=a.zT;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.zT,1);}
function Vt(){let a=this;BL.call(a);a.Bl=null;a.vo=null;a.r1=null;a.vc=null;a.t2=M;a.Bq=null;a.Bk=null;a.wJ=null;}
let Ba5=a=>{let b=new Vt();ARK(b,a);return b;}
let A2c=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wJ;a.Bq=b.pf;b:{try{a.Bl=BdX(b.oU,Bm|0,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new OS;b.oy=a.wJ.oU;b.AW=1;b.z0=1.0;a.Bl=b;}a.vo=a.wJ.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Bk=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.r1=b;f=a.vc.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t2=M;return;}b=new Bc;c
=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let ARK=(a,b)=>{a.vc=Cu(512);a.t2=M;a.wJ=b;}
let AUR=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.wJ;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){c=a.wJ;e=c.oz+1|0;d=c.o7.data;e=e%d.length|0;c.oz=e;Ce(c,d[e]);return;}if(B7(c,111))return;Ez(1.0,1.0,1.0,1.0);c=DR(a.Bk);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-2.5):2.5)*BV(Bb);Br(a.vc,M);a.t2=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vc,M);a.t2=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vc,M);a.t2=M;}a.t2=T(a.t2,I(1));VV(a.Bl,Bm,Bp,0.0);e
=0;while(e<65536){g=ACw(a.Bl)*128.0|0;if(g>=0&&g<512){d=a.vc.data;d[g]=T(d[g],I(1));}e=e+1|0;}Cy(a.r1,c.oK,1);f=0;while(f<512){h=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.r1,h);i=a.r1;b=f;Bh(i,b,0.0,0.0);Bj(a.r1,h);Bh(a.r1,b,Bz(BS(a.vc.data[f],a.t2)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.r1,(-6.221923240859403E37));i=a.r1;h=j;Bh(i,0.0,h,0.0);Bj(a.r1,(-6.221923240859403E37));Bh(a.r1,10.0,h,0.0);j=j+32|0;}Cw(a.r1);Cq(a.vo,c.oK);Cm(a.vo);Bw(a.Bq,a.vo,CF(C(522),S(D,[BK(Bm),BK(Bp),Cc(Ct(Bb))])),64.0,
522.0,384.0,1,1);Bw(a.Bq,a.vo,C(502),64.0,494.0,384.0,1,1);Bw(a.Bq,a.vo,C(523),64.0,468.0,384.0,1,1);Cl(a.vo);}
let AY$=(a,b,c)=>{let d,e,f;d=a.Bk;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Bk,1);}
function ACE(){let a=this;BL.call(a);a.yK=null;a.vb=null;a.r4=null;a.v_=null;a.tP=M;a.AV=null;a.z$=null;a.wK=null;}
let Bbn=a=>{let b=new ACE();A27(b,a);return b;}
let APu=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wK;a.AV=b.pf;b:{try{a.yK=BbV(b.oU,Bm);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new R8;b.oy=a.wK.oU;b.yp=1.0;a.yK=b;}a.vb=a.wK.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.z$=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.r4=b;f=a.v_.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tP=M;return;}b=new Bc;c=new L;c.og=
H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A27=(a,b)=>{a.v_=Cu(512);a.tP=M;a.wK=b;}
let ARG=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Be;d=c.ph.data;if(d[71]){c=a.wK;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wK);return;}if(B7(c,111))return;Cd.j1(1.0,1.0,1.0,1.0);Cd.j2(16384);g=a.z$.o0;CS(g);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.v_,M);a.tP=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v_,M);a.tP=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v_,M);a.tP=M;}a.tP=T(a.tP,I(1));Vu(a.yK,Bm,Bp,BC);e=0;while(e<65536){h=AIm(a.yK)*128.0
|0;if(h>=0&&h<512){d=a.v_.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.r4,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.r4,i);c=a.r4;b=f;Bh(c,b,0.0,0.0);Bj(a.r4,i);Bh(a.r4,b,Bz(BS(a.v_.data[f],a.tP)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.r4,(-6.221923240859403E37));c=a.r4;k=j;Bh(c,0.0,k,0.0);Bj(a.r4,(-6.221923240859403E37));Bh(a.r4,10.0,k,0.0);j=j+32|0;}Cw(a.r4);Cq(a.vb,g.oK);Cm(a.vb);Bw(a.AV,a.vb,CF(C(524),S(D,[BK(Bm),BK(AHd(a.yK)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.AV,
a.vb,C(502),64.0,494.0,384.0,1,1);Bw(a.AV,a.vb,C(525),64.0,468.0,384.0,1,1);Cl(a.vb);}
let AYS=(a,b,c)=>{let d,e,f;d=a.z$;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.z$,1);}
function AH6(){let a=this;BL.call(a);a.zc=null;a.vO=null;a.rP=null;a.vi=null;a.t9=M;a.BW=null;a.AS=null;a.wq=null;}
let BdT=a=>{let b=new AH6();APS(b,a);return b;}
let A4k=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wq;a.BW=b.pf;b:{try{a.zc=BaZ(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new Vk;b.oy=a.wq.oU;b.zJ=1.0;b.zm=1.0;a.zc=b;}a.vO=a.wq.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.AS=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rP=b;f=a.vi.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t9=M;return;}b=new Bc;c
=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let APS=(a,b)=>{a.vi=Cu(512);a.t9=M;a.wq=b;}
let AXR=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.wq;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wq);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);g=a.AS.o0;F8(g,1);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vi,M);a.t9=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vi,M);a.t9=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vi,M);a.t9=M;}a.t9=T(a.t9,I(1));ADj(a.zc,Bm,Bp,BC);e=0;while(e<65536){h=ZS(a.zc)*128.0|0;if(h>=0&&h<512)
{d=a.vi.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.rP,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rP,i);c=a.rP;b=f;Bh(c,b,0.0,0.0);Bj(a.rP,i);Bh(a.rP,b,Bz(BS(a.vi.data[f],a.t9)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rP,(-6.221923240859403E37));c=a.rP;i=j;Bh(c,0.0,i,0.0);Bj(a.rP,(-6.221923240859403E37));Bh(a.rP,10.0,i,0.0);j=j+32|0;}Cw(a.rP);Cq(a.vO,g.oK);Cm(a.vO);Bw(a.BW,a.vO,CF(C(526),S(D,[BK(Bm),BK(Bp),BK(AFw(a.zc)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BW,a.vO,C(502),
64.0,494.0,384.0,1,1);Bw(a.BW,a.vO,C(512),64.0,468.0,384.0,1,1);Cl(a.vO);}
let AIy=(a,b,c)=>{let d,e,f;d=a.AS;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.AS,1);}
function XP(){let a=this;BL.call(a);a.zl=null;a.uv=null;a.rN=null;a.vF=null;a.uc=M;a.BT=null;a.Ar=null;a.wE=null;}
let Bf_=a=>{let b=new XP();A3G(b,a);return b;}
let AUZ=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wE;a.BT=b.pf;b:{try{a.zl=BeV(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new R9;b.oy=a.wE.oU;b.zL=1.0;b.xM=1.0;a.zl=b;}a.uv=a.wE.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Ar=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rN=b;f=a.vF.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.uc=M;return;}b=new Bc;c
=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A3G=(a,b)=>{a.vF=Cu(512);a.uc=M;a.wE=b;}
let AJX=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.wE;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wE);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);g=a.Ar.o0;F8(g,1);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vF,M);a.uc=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vF,M);a.uc=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vF,M);a.uc=M;}a.uc=T(a.uc,I(1));Vs(a.zl,Bm,Bp,BC);e=0;while(e<65536){h=Z_(a.zl)*128.0|0;if(h>=0&&h<512)
{d=a.vF.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.rN,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rN,i);c=a.rN;b=f;Bh(c,b,0.0,0.0);Bj(a.rN,i);Bh(a.rN,b,Bz(BS(a.vF.data[f],a.uc)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rN,(-6.221923240859403E37));c=a.rN;i=j;Bh(c,0.0,i,0.0);Bj(a.rN,(-6.221923240859403E37));Bh(a.rN,10.0,i,0.0);j=j+32|0;}Cw(a.rN);Cq(a.uv,g.oK);Cm(a.uv);Bw(a.BT,a.uv,CF(C(527),S(D,[BK(Bm),BK(Bp),BK(ABQ(a.zl)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BT,a.uv,C(502),
64.0,494.0,384.0,1,1);Bw(a.BT,a.uv,C(512),64.0,468.0,384.0,1,1);Cl(a.uv);}
let A9n=(a,b,c)=>{let d,e,f;d=a.Ar;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Ar,1);}
function AGd(){let a=this;BL.call(a);a.zv=null;a.uC=null;a.rz=null;a.uO=null;a.tG=M;a.B9=null;a.Aw=null;a.xg=null;}
let Bdi=a=>{let b=new AGd();AMT(b,a);return b;}
let AWm=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.xg;a.B9=b.pf;b:{try{a.zv=BaL(b.oU,Bm|0);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new Pv;b.oy=a.xg.oU;b.ws=1;a.zv=b;}a.uC=a.xg.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Aw=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rz=b;f=a.uO.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tG=M;return;}b=new Bc;c=new L;c.og=
H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AMT=(a,b)=>{a.uO=Cu(512);a.tG=M;a.xg=b;}
let AOB=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Be;d=c.ph.data;if(d[71]){c=a.xg;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.xg);return;}if(B7(c,111))return;Cd.j1(1.0,1.0,1.0,1.0);Cd.j2(16384);g=a.Aw.o0;CS(g);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.uO,M);a.tG=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.uO,M);a.tG=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.uO,M);a.tG=M;}a.tG=T(a.tG,I(1));AD$(a.zv,Bm,Bp,BC);e=0;while(e<65536){h=ABC(a.zv)*128.0
|0;if(h>=0&&h<512){d=a.uO.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.rz,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rz,i);c=a.rz;b=f;Bh(c,b,0.0,0.0);Bj(a.rz,i);Bh(a.rz,b,Bz(BS(a.uO.data[f],a.tG)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rz,(-6.221923240859403E37));c=a.rz;k=j;Bh(c,0.0,k,0.0);Bj(a.rz,(-6.221923240859403E37));Bh(a.rz,10.0,k,0.0);j=j+32|0;}Cw(a.rz);Cq(a.uC,g.oK);Cm(a.uC);Bw(a.B9,a.uC,CF(C(528),S(D,[BK(Bm),BK(AAS(a.zv)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.B9,
a.uC,C(502),64.0,494.0,384.0,1,1);Bw(a.B9,a.uC,C(525),64.0,468.0,384.0,1,1);Cl(a.uC);}
let A7G=(a,b,c)=>{let d,e,f;d=a.Aw;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Aw,1);}
function AFc(){let a=this;BL.call(a);a.za=null;a.u3=null;a.rT=null;a.v4=null;a.tt=M;a.BY=null;a.BF=null;a.wy=null;}
let Beg=a=>{let b=new AFc();A17(b,a);return b;}
let AUp=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wy;a.BY=b.pf;b:{try{a.za=Bbh(b.oU,Bm|0);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new Sv;b.oy=a.wy.oU;b.zi=1;a.za=b;}a.u3=a.wy.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.BF=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rT=b;f=a.v4.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tt=M;return;}b=new Bc;c=new L;c.og=
H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A17=(a,b)=>{a.v4=Cu(512);a.tt=M;a.wy=b;}
let A6f=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Be;d=c.ph.data;if(d[71]){c=a.wy;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wy);return;}if(B7(c,111))return;Cd.j1(1.0,1.0,1.0,1.0);Cd.j2(16384);g=a.BF.o0;CS(g);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.v4,M);a.tt=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v4,M);a.tt=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v4,M);a.tt=M;}a.tt=T(a.tt,I(1));AAp(a.za,Bm,Bp,BC);e=0;while(e<65536){h=ADJ(a.za)*128.0
|0;if(h>=0&&h<512){d=a.v4.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.rT,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rT,i);c=a.rT;b=f;Bh(c,b,0.0,0.0);Bj(a.rT,i);Bh(a.rT,b,Bz(BS(a.v4.data[f],a.tt)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rT,(-6.221923240859403E37));c=a.rT;k=j;Bh(c,0.0,k,0.0);Bj(a.rT,(-6.221923240859403E37));Bh(a.rT,10.0,k,0.0);j=j+32|0;}Cw(a.rT);Cq(a.u3,g.oK);Cm(a.u3);Bw(a.BY,a.u3,CF(C(529),S(D,[BK(Bm),BK(AB4(a.za)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BY,
a.u3,C(502),64.0,494.0,384.0,1,1);Bw(a.BY,a.u3,C(525),64.0,468.0,384.0,1,1);Cl(a.u3);}
let A0i=(a,b,c)=>{let d,e,f;d=a.BF;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.BF,1);}
function ACe(){let a=this;BL.call(a);a.zj=null;a.vW=null;a.rI=null;a.uR=null;a.te=M;a.BC=null;a.AB=null;a.wg=null;}
let A_L=a=>{let b=new ACe();ALr(b,a);return b;}
let A5m=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wg;a.BC=b.pf;b:{try{a.zj=BdA(b.oU,Bm|0);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new U1;b.oy=a.wg.oU;b.BA=1.0;a.zj=b;}a.vW=a.wg.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.AB=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rI=b;f=a.uR.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.te=M;return;}b=new Bc;c=new L;c.og
=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let ALr=(a,b)=>{a.uR=Cu(512);a.te=M;a.wg=b;}
let A3U=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Be;d=c.ph.data;if(d[71]){c=a.wg;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wg);return;}if(B7(c,111))return;Cd.j1(1.0,1.0,1.0,1.0);Cd.j2(16384);g=a.AB.o0;CS(g);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.uR,M);a.te=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.uR,M);a.te=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.uR,M);a.te=M;}a.te=T(a.te,I(1));AEn(a.zj,Bm,Bp,BC);e=0;while(e<65536){h=Wd(a.zj)*128.0
|0;if(h>=0&&h<512){d=a.uR.data;d[h]=T(d[h],I(1));}e=e+1|0;}Cy(a.rI,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rI,i);c=a.rI;b=f;Bh(c,b,0.0,0.0);Bj(a.rI,i);Bh(a.rI,b,Bz(BS(a.uR.data[f],a.te)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rI,(-6.221923240859403E37));c=a.rI;k=j;Bh(c,0.0,k,0.0);Bj(a.rI,(-6.221923240859403E37));Bh(a.rI,10.0,k,0.0);j=j+32|0;}Cw(a.rI);Cq(a.vW,g.oK);Cm(a.vW);Bw(a.BC,a.vW,CF(C(530),S(D,[BK(Bm),BK(Zw(a.zj)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BC,
a.vW,C(502),64.0,494.0,384.0,1,1);Bw(a.BC,a.vW,C(531),64.0,468.0,384.0,1,1);Cl(a.vW);}
let AST=(a,b,c)=>{let d,e,f;d=a.AB;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.AB,1);}
function Vv(){let a=this;BL.call(a);a.x2=null;a.uk=null;a.rS=null;a.v$=null;a.ty=M;a.Ak=null;a.z6=null;a.vT=null;}
let Be2=a=>{let b=new Vv();ANC(b,a);return b;}
let A22=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.vT;a.Ak=b.pf;b:{try{a.x2=ANd(b.oU,Bm,Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new K6;b.oy=a.vT.oU;b.uJ=0.0;b.vE=1.0;a.x2=b;}a.uk=a.vT.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.z6=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rS=b;f=a.v$.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.ty=M;return;}b=new Bc;c
=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let ANC=(a,b)=>{a.v$=Cu(512);a.ty=M;a.vT=b;}
let A0T=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){D5(a.vT);return;}if(d[72]){c=a.vT;e=c.oz+1|0;d=c.o7.data;e=e%d.length|0;c.oz=e;Ce(c,d[e]);return;}if(B7(c,76)){c=a.vT;Ce(c,c.FG);return;}if(B7(Be,111))return;Ez(1.0,1.0,1.0,1.0);f=a.z6.o0;CS(f);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v$,M);a.ty=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v$,M);a.ty=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v$,M);a.ty=M;}a.ty=T(a.ty,I(1));OC(a.x2,Bm,Bp,BC);e=0;while(e<65536){g=S1(a.x2)
*128.0+256.0|0;if(g>=0&&g<512){d=a.v$.data;d[g]=T(d[g],I(1));}e=e+1|0;}Cy(a.rS,f.oK,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rS,i);c=a.rS;b=h;Bh(c,b,0.0,0.0);Bj(a.rS,i);Bh(a.rS,b,Bz(BS(a.v$.data[h],a.ty)),0.0);h=h+1|0;}j=8;while(j<520){Bj(a.rS,(-6.221923240859403E37));c=a.rS;i=j;Bh(c,0.0,i,0.0);Bj(a.rS,(-6.221923240859403E37));Bh(a.rS,10.0,i,0.0);j=j+32|0;}Cw(a.rS);Cq(a.uk,f.oK);Cm(a.uk);Bw(a.Ak,a.uk,CF(C(504),S(D,[BK(Bm),BK(Bp),BK(Oa(a.x2)),Cc(Ct(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.Ak,a.uk,C(502),64.0,494.0,384.0,1,1);Bw(a.Ak,a.uk,C(532),64.0,468.0,384.0,1,1);Cl(a.uk);}
let AUn=(a,b,c)=>{let d,e,f;d=a.z6;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.z6,1);}
function AD3(){let a=this;BL.call(a);a.zz=null;a.vr=null;a.r0=null;a.vw=null;a.s7=M;a.Cf=null;a.A3=null;a.wM=null;}
let A_D=a=>{let b=new AD3();A$I(b,a);return b;}
let A34=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wM;a.Cf=b.pf;b:{try{a.zz=Bb8(b.oU,Bm,Bp|0);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new P6;b.oy=a.wM.oU;if(1<0.0)c=0;else{b.yn=0.5;b.x6=1;c=1;}if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(533);E(d);}a.zz=b;}a.vr=a.wM.pc;b=new Ck;d=new Ci;Cs(d);d.po=1.0;e=new Bf;BU();d.pl=e;d.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=d;a.A3=b;b=new Cj;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oI){Cr(b,1536,0,1,0,f);b.pt=1;a.r0=b;g=a.vw.data;c=0;h=g.length;if(c>h){b=new V;b.oe=1;b.of
=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.s7=M;return;}b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(494));if(!f.oI)e=f.oF;else{e=Bq.i4(f.o6);f.oF=e;}F(d,d.od,e);e=new P;g=d.og;j=g.data;h=d.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){e.oh=R(g.data,0,h);b.oe=1;b.of=1;b.oi=e;E(b);}b=new O;BZ(b);E(b);}
let A$I=(a,b)=>{a.vw=Cu(512);a.s7=M;a.wM=b;}
let ARg=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.wM;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wM);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);g=a.A3.o0;F8(g,1);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vw,M);a.s7=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-2.5):2.5)*Bb.pN;Br(a.vw,M);a.s7=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.vw,M);a.s7=M;}a.s7=T(a.s7,I(1));VT(a.zz,Bm,Bp,BC);e=0;while(e<2048){h=WQ(a.zz)|0;if(h>=0&&h<16){d=a.vw.data;d[h]
=T(d[h],I(1));}e=e+1|0;}Cy(a.r0,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.r0,i);c=a.r0;b=f;Bh(c,b,0.0,0.0);Bj(a.r0,i);Bh(a.r0,b,Bz(BS(a.vw.data[f>>>5|0],a.s7)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.r0,(-6.221923240859403E37));c=a.r0;i=j;Bh(c,0.0,i,0.0);Bj(a.r0,(-6.221923240859403E37));Bh(a.r0,10.0,i,0.0);j=j+32|0;}Cw(a.r0);Cq(a.vr,g.oK);Cm(a.vr);Bw(a.Cf,a.vr,CF(C(534),S(D,[BK(Bm),BK(Bp),BK(W$(a.zz)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.Cf,a.vr,C(535),64.0,494.0,
384.0,1,1);Bw(a.Cf,a.vr,C(536),64.0,468.0,384.0,1,1);Cl(a.vr);}
let A0I=(a,b,c)=>{let d,e,f;d=a.A3;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.A3,1);}
function AGo(){let a=this;BL.call(a);a.xK=null;a.vk=null;a.rU=null;a.u7=null;a.tJ=M;a.z5=null;a.AC=null;a.wi=null;}
let Bdc=a=>{let b=new AGo();AQL(b,a);return b;}
let APk=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wi;a.z5=b.pf;b:{try{a.xK=Bcq(b.oU,By(Bm),Bp);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new Se;b.oy=a.wi.oU;if(!Ln(b,16.0,0.5,0.0)){c=new V;c.oe=1;c.of=1;c.oi=C(537);E(c);}a.xK=b;}a.vk=a.wi.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.AC=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rU=b;f=a.u7.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g
<h){i=g+1|0;f[g]=M;g=i;}a.tJ=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AQL=(a,b)=>{a.u7=Cu(512);a.tJ=M;a.wi=b;}
let AJx=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.wi;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wi);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);g=a.AC.o0;F8(g,1);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-2.5):2.5)*Bb.pN;Br(a.u7,M);a.tJ=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.u7,M);a.tJ=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*Bb.pN;Br(a.u7,M);a.tJ=M;}a.tJ=T(a.tJ,I(1));Ln(a.xK,Bm,Bp,0.0);e=0;while(e<4096){h=ACR(a.xK)|0;if(h>=0&&h<32){d=a.u7.data;d[h]
=T(d[h],I(1));}e=e+1|0;}Cy(a.rU,g.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rU,i);c=a.rU;b=f;Bh(c,b,0.0,0.0);Bj(a.rU,i);Bh(a.rU,b,Bz(BS(a.u7.data[f>>4],a.tJ)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rU,(-6.221923240859403E37));c=a.rU;i=j;Bh(c,0.0,i,0.0);Bj(a.rU,(-6.221923240859403E37));Bh(a.rU,10.0,i,0.0);j=j+32|0;}Cw(a.rU);Cq(a.vk,g.oK);Cm(a.vk);Bw(a.z5,a.vk,CF(C(538),S(D,[BK(Bm),BK(Bp),BK(AHG(a.xK)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.z5,a.vk,C(502),64.0,494.0,384.0,
1,1);Bw(a.z5,a.vk,C(539),64.0,468.0,384.0,1,1);Cl(a.vk);}
let A5p=(a,b,c)=>{let d,e,f;d=a.AC;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.AC,1);}
function ABn(){let a=this;BL.call(a);a.zo=null;a.vx=null;a.rW=null;a.v9=null;a.tk=M;a.B4=null;a.Bg=null;a.uN=null;}
let BeD=a=>{let b=new ABn();AVG(b,a);return b;}
let AT5=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.uN;a.B4=b.pf;b:{try{a.zo=AOD(b.oU,Bm,Bp,BC);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new MP;b.oy=a.uN.oU;b.wX=0.0;b.wj=1.0;b.w0=0.5;a.zo=b;}a.vx=a.uN.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Bg=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rW=b;f=a.v9.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tk=M;return;}b
=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AVG=(a,b)=>{a.v9=Cu(512);a.tk=M;a.uN=b;}
let AIQ=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){D5(a.uN);return;}if(d[72]){Dp(a.uN);return;}if(B7(c,76)){c=a.uN;Ce(c,c.FJ);return;}if(B7(Be,111))return;Cd.j1(1.0,1.0,1.0,1.0);Cd.j2(16384);c=DR(a.Bg);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v9,M);a.tk=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v9,M);a.tk=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.v9,M);a.tk=M;}a.tk=T(a.tk,I(1));QH(a.zo,Bm,Bp,BC);e=0;while(e<65536){f=ABr(a.zo)*128.0+256.0|0;if(f>=0&&f<512){d
=a.v9.data;d[f]=T(d[f],I(1));}e=e+1|0;}Cy(a.rW,c.oK,1);g=0;while(g<512){h=g&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rW,h);i=a.rW;b=g;Bh(i,b,0.0,0.0);Bj(a.rW,h);Bh(a.rW,b,Bz(BS(a.v9.data[g],a.tk)),0.0);g=g+1|0;}j=8;while(j<520){Bj(a.rW,(-6.221923240859403E37));i=a.rW;h=j;Bh(i,0.0,h,0.0);Bj(a.rW,(-6.221923240859403E37));Bh(a.rW,10.0,h,0.0);j=j+32|0;}Cw(a.rW);Cq(a.vx,c.oK);Cm(a.vx);Bw(a.B4,a.vx,CF(C(540),S(D,[BK(Bm),BK(Bp),BK(BC),BK(SZ(a.zo)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.B4,a.vx,C(502),
64.0,494.0,384.0,1,1);Bw(a.B4,a.vx,C(541),64.0,468.0,384.0,1,1);Cl(a.vx);}
let A0n=(a,b,c)=>{let d,e,f;d=a.Bg;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Bg,1);}
function AE0(){let a=this;BL.call(a);a.yZ=null;a.vM=null;a.rO=null;a.vJ=null;a.s6=M;a.By=null;a.Al=null;a.wB=null;}
let Bct=a=>{let b=new AE0();A$K(b,a);return b;}
let AWr=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wB;a.By=b.pf;b:{try{a.yZ=BcO(b.oU,Bm,Bp,BC);break b;}catch($$e){$$je=BH($$e);if($$je instanceof V){}else{throw $$e;}}b=new RH;b.oy=a.wB.oU;if(!NN(b,0.0,1.0,0.5)){c=new V;c.oe=1;c.of=1;c.oi=C(542);E(c);}a.yZ=b;}a.vM=a.wB.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Al=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rO=b;f=a.vJ.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<
h){i=g+1|0;f[g]=M;g=i;}a.s6=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A$K=(a,b)=>{a.vJ=Cu(512);a.s6=M;a.wB=b;}
let AP9=(a,b)=>{let c,d,e,f,g,h,i,j;c=Be;d=c.ph.data;if(d[71]){c=a.wB;e=c.oz;d=c.o7.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.oz=e;Ce(c,d[e]);return;}if(d[72]){Dp(a.wB);return;}if(B7(c,111))return;D9(1.0,1.0,1.0,1.0,0);c=DR(a.Al);CS(c);if(Bu(Be,29)){Bm=Bm+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vJ,M);a.s6=M;}if(Bu(Be,30)){Bp=Bp+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vJ,M);a.s6=M;}if(Bu(Be,31)){BC=BC+(!BJ()?(-0.5):0.5)*BV(Bb);Br(a.vJ,M);a.s6=M;}a.s6=T(a.s6,I(1));NN(a.yZ,Bm,Bp,BC);e=0;while(e<65536){g=ABx(a.yZ)*128.0+256.0|0;if(g
>=0&&g<512){d=a.vJ.data;d[g]=T(d[g],I(1));}e=e+1|0;}Cy(a.rO,c.oK,1);f=0;while(f<512){h=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rO,h);i=a.rO;b=f;Bh(i,b,0.0,0.0);Bj(a.rO,h);Bh(a.rO,b,Bz(BS(a.vJ.data[f],a.s6)),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rO,(-6.221923240859403E37));i=a.rO;b=j;Bh(i,0.0,b,0.0);Bj(a.rO,(-6.221923240859403E37));Bh(a.rO,10.0,b,0.0);j=j+32|0;}Cw(a.rO);Cq(a.vM,c.oK);Cm(a.vM);Bw(a.By,a.vM,CF(C(543),S(D,[BK(Bm),BK(Bp),BK(BC),BK(AGU(a.yZ)),Cc(Ct(Bb))])),64.0,522.0,384.0,1,1);Bw(a.By,
a.vM,C(502),64.0,494.0,384.0,1,1);Bw(a.By,a.vM,C(544),64.0,468.0,384.0,1,1);Cl(a.vM);}
let AN_=(a,b,c)=>{let d,e,f;d=a.Al;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Al,1);}
function YN(){let a=this;BL.call(a);a.Cz=null;a.xG=null;a.ru=null;a.uM=null;a.tN=M;a.D0=null;a.BN=null;a.BK=null;}
let BeL=a=>{let b=new YN();A6_(b,a);return b;}
let A1e=a=>{let b,c,d,e,f,g,h,i,j;b=a.BK;a.D0=b.pf;a.Cz=b.oU;a.xG=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.BN=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.ru=b;f=a.uM.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tN=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A6_=(a,b)=>{a.uM=Cu(512);a.tN=M;a.BK=b;}
let A2Z=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.BK;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.BK;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.BN);CS(d);if(Bu(Be,29)){Br(a.uM,M);a.tN=M;}if(Bu(Be,30)){Br(a.uM,M);a.tN=M;}if(Bu(Be,31)){Br(a.uM,M);a.tN=M;}a.tN=T(a.tN,I(1));e=0;while(e<262144){h=YD(a.Cz.ki())*128.0+128.0|0;if(h
>=0&&h<512){c=a.uM.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.ru,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.ru,i);g=a.ru;b=f;Bh(g,b,0.0,0.0);Bj(a.ru,i);Bh(a.ru,b,0.125*Bz(a.uM.data[f])/Bz(a.tN),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.ru,(-6.221923240859403E37));g=a.ru;i=j;Bh(g,0.0,i,0.0);Bj(a.ru,(-6.221923240859403E37));Bh(a.ru,10.0,i,0.0);j=j+32|0;}Cw(a.ru);Cq(a.xG,d.oK);Cm(a.xG);g=a.D0;k=a.xG;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(545),c),64.0,522.0,384.0,1,1);d=a.D0;g
=a.xG;k=a.Cz.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.xG);}
let A83=(a,b,c)=>{let d,e,f;d=a.BN;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.BN,1);}
function ADY(){let a=this;BL.call(a);a.DW=null;a.xj=null;a.rC=null;a.u8=null;a.tz=M;a.EX=null;a.Ch=null;a.Cg=null;}
let BbT=a=>{let b=new ADY();AJC(b,a);return b;}
let ASK=a=>{let b,c,d,e,f,g,h,i,j;b=a.Cg;a.EX=b.pf;a.DW=b.oU;a.xj=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Ch=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rC=b;f=a.u8.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tz=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AJC=(a,b)=>{a.u8=Cu(512);a.tz=M;a.Cg=b;}
let A4U=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.Cg;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.Cg;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;Ez(1.0,1.0,1.0,1.0);h=a.Ch.o0;CS(h);if(Bu(Be,29)){Br(a.u8,M);a.tz=M;}if(Bu(Be,30)){Br(a.u8,M);a.tz=M;}if(Bu(Be,31)){Br(a.u8,M);a.tz=M;}a.tz=T(a.tz,I(1));e=0;while(e<262144){i=NL(a.DW.ki())*128.0+128.0|0;if(i>=0
&&i<512){c=a.u8.data;c[i]=T(c[i],I(1));}e=e+1|0;}Cy(a.rC,h.oK,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rC,j);d=a.rC;b=f;Bh(d,b,0.0,0.0);Bj(a.rC,j);Bh(a.rC,b,0.125*Bz(a.u8.data[f])/Bz(a.tz),0.0);f=f+1|0;}k=8;while(k<520){Bj(a.rC,(-6.221923240859403E37));d=a.rC;j=k;Bh(d,0.0,j,0.0);Bj(a.rC,(-6.221923240859403E37));Bh(a.rC,10.0,j,0.0);k=k+32|0;}Cw(a.rC);Cq(a.xj,h.oK);Cm(a.xj);g=a.EX;h=a.xj;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,h,CF(C(547),c),64.0,522.0,384.0,1,1);d=a.EX;g=
a.xj;h=a.DW.kj();l=Dw();CT(CT(l,C(546)),h);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.xj);}
let A3X=(a,b,c)=>{let d,e,f;d=a.Ch;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Ch,1);}
function WO(){let a=this;BL.call(a);a.ER=null;a.wr=null;a.r3=null;a.ur=null;a.uf=M;a.E9=null;a.AN=null;a.z4=null;}
let BdC=a=>{let b=new WO();ASR(b,a);return b;}
let ANl=a=>{let b,c,d,e,f,g,h,i,j;b=a.z4;a.E9=b.pf;a.ER=b.oU;a.wr=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.AN=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.r3=b;f=a.ur.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.uf=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let ASR=(a,b)=>{a.ur=Cu(512);a.uf=M;a.z4=b;}
let AIX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.z4;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.z4;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.AN);CS(d);if(Bu(Be,29)){Br(a.ur,M);a.uf=M;}if(Bu(Be,30)){Br(a.ur,M);a.uf=M;}if(Bu(Be,31)){Br(a.ur,M);a.uf=M;}a.uf=T(a.uf,I(1));e=0;while(e<262144){h=AAT(a.ER.ki())*128.0+128.0|0;if(h
>=0&&h<512){c=a.ur.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.r3,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.r3,i);g=a.r3;b=f;Bh(g,b,0.0,0.0);Bj(a.r3,i);Bh(a.r3,b,0.125*Bz(a.ur.data[f])/Bz(a.uf),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.r3,(-6.221923240859403E37));g=a.r3;i=j;Bh(g,0.0,i,0.0);Bj(a.r3,(-6.221923240859403E37));Bh(a.r3,10.0,i,0.0);j=j+32|0;}Cw(a.r3);Cq(a.wr,d.oK);Cm(a.wr);g=a.E9;k=a.wr;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(548),c),64.0,522.0,384.0,1,1);d=a.E9;g
=a.wr;k=a.ER.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.wr);}
let A5w=(a,b,c)=>{let d,e,f;d=a.AN;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.AN,1);}
function AHi(){let a=this;BL.call(a);a.Dz=null;a.wZ=null;a.rK=null;a.vH=null;a.tL=M;a.D9=null;a.Ae=null;a.z_=null;}
let Bev=a=>{let b=new AHi();AVQ(b,a);return b;}
let AMm=a=>{let b,c,d,e,f,g,h,i,j;b=a.z_;a.D9=b.pf;a.Dz=b.oU;a.wZ=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.Ae=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rK=b;f=a.vH.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tL=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AVQ=(a,b)=>{a.vH=Cu(512);a.tL=M;a.z_=b;}
let A_e=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.z_;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.z_;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.Ae);CS(d);if(Bu(Be,29)){Br(a.vH,M);a.tL=M;}if(Bu(Be,30)){Br(a.vH,M);a.tL=M;}if(Bu(Be,31)){Br(a.vH,M);a.tL=M;}a.tL=T(a.tL,I(1));e=0;while(e<262144){h=ABB(a.Dz.ki())*128.0+128.0|0;if(h
>=0&&h<512){c=a.vH.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.rK,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rK,i);g=a.rK;b=f;Bh(g,b,0.0,0.0);Bj(a.rK,i);Bh(a.rK,b,0.125*Bz(a.vH.data[f])/Bz(a.tL),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rK,(-6.221923240859403E37));g=a.rK;i=j;Bh(g,0.0,i,0.0);Bj(a.rK,(-6.221923240859403E37));Bh(a.rK,10.0,i,0.0);j=j+32|0;}Cw(a.rK);Cq(a.wZ,d.oK);Cm(a.wZ);g=a.D9;k=a.wZ;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(549),c),64.0,522.0,384.0,1,1);d=a.D9;g
=a.wZ;k=a.Dz.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.wZ);}
let AJV=(a,b,c)=>{let d,e,f;d=a.Ae;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.Ae,1);}
function Y1(){let a=this;BL.call(a);a.Eg=null;a.wo=null;a.r2=null;a.uu=null;a.tE=M;a.Ev=null;a.A0=null;a.z7=null;}
let Bei=a=>{let b=new Y1();AZF(b,a);return b;}
let AYd=a=>{let b,c,d,e,f,g,h,i,j;b=a.z7;a.Ev=b.pf;a.Eg=b.oU;a.wo=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.A0=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.r2=b;f=a.uu.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tE=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AZF=(a,b)=>{a.uu=Cu(512);a.tE=M;a.z7=b;}
let AYm=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.z7;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.z7;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.A0);CS(d);if(Bu(Be,29)){Br(a.uu,M);a.tE=M;}if(Bu(Be,30)){Br(a.uu,M);a.tE=M;}if(Bu(Be,31)){Br(a.uu,M);a.tE=M;}a.tE=T(a.tE,I(1));e=0;while(e<262144){h=AIh(a.Eg.ki())*128.0+128.0|0;if(h
>=0&&h<512){c=a.uu.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.r2,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.r2,i);g=a.r2;b=f;Bh(g,b,0.0,0.0);Bj(a.r2,i);Bh(a.r2,b,0.125*Bz(a.uu.data[f])/Bz(a.tE),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.r2,(-6.221923240859403E37));g=a.r2;i=j;Bh(g,0.0,i,0.0);Bj(a.r2,(-6.221923240859403E37));Bh(a.r2,10.0,i,0.0);j=j+32|0;}Cw(a.r2);Cq(a.wo,d.oK);Cm(a.wo);g=a.Ev;k=a.wo;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(550),c),64.0,522.0,384.0,1,1);d=a.Ev;g
=a.wo;k=a.Eg.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.wo);}
let A_a=(a,b,c)=>{let d,e,f;d=a.A0;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.A0,1);}
function AEE(){let a=this;BL.call(a);a.EA=null;a.xp=null;a.r7=null;a.uB=null;a.s8=M;a.CZ=null;a.zQ=null;a.AA=null;}
let Bgd=a=>{let b=new AEE();AYI(b,a);return b;}
let AIM=a=>{let b,c,d,e,f,g,h,i,j;b=a.AA;a.CZ=b.pf;a.EA=b.oU;a.xp=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.zQ=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.r7=b;f=a.uB.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.s8=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AYI=(a,b)=>{a.uB=Cu(512);a.s8=M;a.AA=b;}
let APW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.AA;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.AA;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.zQ);CS(d);if(Bu(Be,29)){Br(a.uB,M);a.s8=M;}if(Bu(Be,30)){Br(a.uB,M);a.s8=M;}if(Bu(Be,31)){Br(a.uB,M);a.s8=M;}a.s8=T(a.s8,I(1));e=0;while(e<262144){h=AGT(a.EA.ki())*256.0+128.0|0;if(h
>=0&&h<512){c=a.uB.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.r7,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.r7,i);g=a.r7;b=f;Bh(g,b,0.0,0.0);Bj(a.r7,i);Bh(a.r7,b,0.125*Bz(a.uB.data[f])/Bz(a.s8),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.r7,(-6.221923240859403E37));g=a.r7;i=j;Bh(g,0.0,i,0.0);Bj(a.r7,(-6.221923240859403E37));Bh(a.r7,10.0,i,0.0);j=j+32|0;}Cw(a.r7);Cq(a.xp,d.oK);Cm(a.xp);g=a.CZ;k=a.xp;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(551),c),64.0,522.0,384.0,1,1);d=a.CZ;g
=a.xp;k=a.EA.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.xp);}
let A6e=(a,b,c)=>{let d,e,f;d=a.zQ;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.zQ,1);}
function AEi(){let a=this;BL.call(a);a.DN=null;a.xi=null;a.rQ=null;a.wa=null;a.tn=M;a.D$=null;a.BJ=null;a.As=null;}
let Bci=a=>{let b=new AEi();AS7(b,a);return b;}
let APP=a=>{let b,c,d,e,f,g,h,i,j;b=a.As;a.D$=b.pf;a.DN=b.oU;a.xi=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.BJ=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rQ=b;f=a.wa.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tn=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AS7=(a,b)=>{a.wa=Cu(512);a.tn=M;a.As=b;}
let A7M=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.As;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.As;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;Ez(1.0,1.0,1.0,1.0);h=a.BJ.o0;CS(h);if(Bu(Be,29)){Br(a.wa,M);a.tn=M;}if(Bu(Be,30)){Br(a.wa,M);a.tn=M;}if(Bu(Be,31)){Br(a.wa,M);a.tn=M;}a.tn=T(a.tn,I(1));e=0;while(e<262144){i=Wb(a.DN.ki())*256.0+128.0|0;if(i>=0
&&i<512){c=a.wa.data;c[i]=T(c[i],I(1));}e=e+1|0;}Cy(a.rQ,h.oK,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rQ,j);d=a.rQ;b=f;Bh(d,b,0.0,0.0);Bj(a.rQ,j);Bh(a.rQ,b,0.125*Bz(a.wa.data[f])/Bz(a.tn),0.0);f=f+1|0;}k=8;while(k<520){Bj(a.rQ,(-6.221923240859403E37));d=a.rQ;j=k;Bh(d,0.0,j,0.0);Bj(a.rQ,(-6.221923240859403E37));Bh(a.rQ,10.0,j,0.0);k=k+32|0;}Cw(a.rQ);Cq(a.xi,h.oK);Cm(a.xi);g=a.D$;h=a.xi;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,h,CF(C(552),c),64.0,522.0,384.0,1,1);d=a.D$;g=
a.xi;h=a.DN.kj();l=Dw();CT(CT(l,C(546)),h);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.xi);}
let APx=(a,b,c)=>{let d,e,f;d=a.BJ;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.BJ,1);}
function AEN(){let a=this;BL.call(a);a.EE=null;a.wT=null;a.rF=null;a.vn=null;a.t_=M;a.CV=null;a.BZ=null;a.Cy=null;}
let Bai=a=>{let b=new AEN();AXN(b,a);return b;}
let A4I=a=>{let b,c,d,e,f,g,h,i,j;b=a.Cy;a.CV=b.pf;a.EE=b.oU;a.wT=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.BZ=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rF=b;f=a.vn.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t_=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AXN=(a,b)=>{a.vn=Cu(512);a.t_=M;a.Cy=b;}
let AXa=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.Cy;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.Cy;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.BZ);CS(d);if(Bu(Be,29)){Br(a.vn,M);a.t_=M;}if(Bu(Be,30)){Br(a.vn,M);a.t_=M;}if(Bu(Be,31)){Br(a.vn,M);a.t_=M;}a.t_=T(a.t_,I(1));e=0;while(e<262144){h=V7(a.EE.ki())*256.0+128.0|0;if(h
>=0&&h<512){c=a.vn.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.rF,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rF,i);g=a.rF;b=f;Bh(g,b,0.0,0.0);Bj(a.rF,i);Bh(a.rF,b,0.125*Bz(a.vn.data[f])/Bz(a.t_),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rF,(-6.221923240859403E37));g=a.rF;i=j;Bh(g,0.0,i,0.0);Bj(a.rF,(-6.221923240859403E37));Bh(a.rF,10.0,i,0.0);j=j+32|0;}Cw(a.rF);Cq(a.wT,d.oK);Cm(a.wT);g=a.CV;k=a.wT;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(553),c),64.0,522.0,384.0,1,1);d=a.CV;g
=a.wT;k=a.EE.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.wT);}
let AZC=(a,b,c)=>{let d,e,f;d=a.BZ;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.BZ,1);}
function ADn(){let a=this;BL.call(a);a.Em=null;a.w1=null;a.r6=null;a.uI=null;a.tq=M;a.CB=null;a.AT=null;a.A8=null;}
let Bdx=a=>{let b=new ADn();A4g(b,a);return b;}
let ARb=a=>{let b,c,d,e,f,g,h,i,j;b=a.A8;a.CB=b.pf;a.Em=b.oU;a.w1=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.AT=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.r6=b;f=a.uI.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tq=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let A4g=(a,b)=>{a.uI=Cu(512);a.tq=M;a.A8=b;}
let A5j=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.A8;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.A8;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.AT);CS(d);if(Bu(Be,29)){Br(a.uI,M);a.tq=M;}if(Bu(Be,30)){Br(a.uI,M);a.tq=M;}if(Bu(Be,31)){Br(a.uI,M);a.tq=M;}a.tq=T(a.tq,I(1));e=0;while(e<262144){h=ADa(a.Em.ki())*256.0+128.0|0;if(h
>=0&&h<512){c=a.uI.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.r6,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.r6,i);g=a.r6;b=f;Bh(g,b,0.0,0.0);Bj(a.r6,i);Bh(a.r6,b,0.125*Bz(a.uI.data[f])/Bz(a.tq),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.r6,(-6.221923240859403E37));g=a.r6;i=j;Bh(g,0.0,i,0.0);Bj(a.r6,(-6.221923240859403E37));Bh(a.r6,10.0,i,0.0);j=j+32|0;}Cw(a.r6);Cq(a.w1,d.oK);Cm(a.w1);g=a.CB;k=a.w1;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(554),c),64.0,522.0,384.0,1,1);d=a.CB;g
=a.w1;k=a.Em.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.w1);}
let AZb=(a,b,c)=>{let d,e,f;d=a.AT;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.AT,1);}
function ADc(){let a=this;BL.call(a);a.EN=null;a.xo=null;a.rD=null;a.v2=null;a.tM=M;a.DD=null;a.BH=null;a.An=null;}
let Bfw=a=>{let b=new ADc();AXl(b,a);return b;}
let AQ0=a=>{let b,c,d,e,f,g,h,i,j;b=a.An;a.DD=b.pf;a.EN=b.oU;a.xo=b.pc;b=new Ck;c=new Ci;Cs(c);c.po=1.0;d=new Bf;BU();c.pl=d;c.pi=0.0;b.ps=new Bf;b.oM=1.0;b.o0=c;a.BH=b;b=new Cj;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oI){Cr(b,1536,0,1,0,e);b.pt=1;a.rD=b;f=a.v2.data;g=0;h=f.length;if(g>h){b=new V;b.oe=1;b.of=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tM=M;return;}b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(494));if(!e.oI)d=e.oF;else{d=Bq.i4(e.o6);e.oF=d;}F(c,c.od,d);d=new P;f=c.og;j=f.data;h=c.od;U();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oh=R(f.data,0,h);b.oe=1;b.of=1;b.oi=d;E(b);}b=new O;BZ(b);E(b);}
let AXl=(a,b)=>{a.v2=Cu(512);a.tM=M;a.An=b;}
let A2X=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Be.ph.data;if(c[71]){d=a.An;e=d.oz;c=d.o7.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.oz=e;g=c[e];d.pF=g;if(g!==null){g.d1();d.pF.dY(Bb.oX.width,Bb.oX.height);}return;}if(c[72]){d=a.An;e=d.oz+1|0;c=d.o7.data;e=e%c.length|0;d.oz=e;Ce(d,c[e]);return;}if(c[111])return;D9(1.0,1.0,1.0,1.0,0);d=DR(a.BH);CS(d);if(Bu(Be,29)){Br(a.v2,M);a.tM=M;}if(Bu(Be,30)){Br(a.v2,M);a.tM=M;}if(Bu(Be,31)){Br(a.v2,M);a.tM=M;}a.tM=T(a.tM,I(1));e=0;while(e<262144){h=ADX(a.EN.ki())*256.0+128.0|0;if(h
>=0&&h<512){c=a.v2.data;c[h]=T(c[h],I(1));}e=e+1|0;}Cy(a.rD,d.oK,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bj(a.rD,i);g=a.rD;b=f;Bh(g,b,0.0,0.0);Bj(a.rD,i);Bh(a.rD,b,0.125*Bz(a.v2.data[f])/Bz(a.tM),0.0);f=f+1|0;}j=8;while(j<520){Bj(a.rD,(-6.221923240859403E37));g=a.rD;i=j;Bh(g,0.0,i,0.0);Bj(a.rD,(-6.221923240859403E37));Bh(a.rD,10.0,i,0.0);j=j+32|0;}Cw(a.rD);Cq(a.xo,d.oK);Cm(a.xo);g=a.DD;k=a.xo;c=Bs(D,1);c.data[0]=Cc(Ct(Bb));Bw(g,k,CF(C(555),c),64.0,522.0,384.0,1,1);d=a.DD;g
=a.xo;k=a.EN.kj();l=Dw();CT(CT(l,C(546)),k);Bw(d,g,Cx(l),64.0,494.0,384.0,1,1);Cl(a.xo);}
let AQT=(a,b,c)=>{let d,e,f;d=a.BH;d.pm=0;d.pn=0;d.pk=b;d.pp=c;e=b;f=d.oM;e=e*f;f=c*f;d.pq=e;d.pr=f;BM(d,1);BM(a.BH,1);}
let Mu=G(B0);
let Bc=G(B0);
let A4F=(a,b)=>{let c=new Bc();AJs(c,a,b);return c;}
let GA=a=>{let b=new Bc();Pd(b,a);return b;}
let AJs=(a,b,c)=>{a.oe=1;a.of=1;a.oi=b;a.qd=c;}
let Pd=(a,b)=>{a.oe=1;a.of=1;a.oi=b;}
let WU=G();
let Pb=(b,c)=>{let d;b:{d=0;switch(c){case 1:d=2;break b;case 2:d=4;break b;case 3:d=1;break b;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function TK(){BF.call(this);this.Ju=null;}
let AVd=(a,b)=>{return Dt(b)!=2?0:1;}
function RO(){BF.call(this);this.Jz=null;}
let AYL=(a,b)=>{return Dt(b)!=1?0:1;}
function PU(){BF.call(this);this.Jk=null;}
let AJM=(a,b)=>{b:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break b;default:k:{switch(Dt(b)){case 12:case 13:case 14:break;default:b=0;break k;}b=1;}break b;}b=1;}return b;}
function PT(){BF.call(this);this.Is=null;}
let A1s=(a,b)=>{return 0;}
function Q6(){BF.call(this);this.II=null;}
let AOZ=(a,b)=>{return !Dt(b)?0:1;}
function Su(){BF.call(this);this.JG=null;}
let A9x=(a,b)=>{return Dt(b)!=9?0:1;}
function OD(){BF.call(this);this.IQ=null;}
let AR7=(a,b)=>{return I0(b);}
function S8(){BF.call(this);this.IB=null;}
let ATq=(a,b)=>{b:{a:{if(!(b>=0&&b<=31)){if(b<127)break a;if(b>159)break a;}b=1;break b;}b=0;}return b;}
function RM(){BF.call(this);this.H4=null;}
let A$F=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=I0(b);}return b;}
function RN(){BF.call(this);this.IC=null;}
let AMi=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=I0(b);}return b;}
function OA(){BF.call(this);this.IH=null;}
let AVt=(a,b)=>{b:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break b;}b=1;}return b;}
function SK(){BF.call(this);this.JV=null;}
let A4S=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}b=1;break b;}b=0;}return b;}
function SN(){BF.call(this);this.Iw=null;}
let A68=(a,b)=>{b:{switch(Dt(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}return b;}
function T5(){BF.call(this);this.JJ=null;}
let A9i=(a,b)=>{return Dt(b)!=3?0:1;}
function TA(){BF.call(this);this.H5=null;}
let AV1=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}b=1;break b;}b=I0(b);}return b;}
function Od(){BF.call(this);this.J6=null;}
let AL6=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}b=1;break b;}b=I0(b);}return b;}
function J3(){BF.call(this);this.AJ=0;}
let AR_=(a,b)=>{return a.oY^(a.AJ!=Dt(b&65535)?0:1);}
let To=G(J3);
let A8A=(a,b)=>{return a.oY^(!(a.AJ>>Dt(b&65535)&1)?0:1);}
function F3(){D.call(this);this.sx=null;}
let AYy=a=>{AE9(a.sx);}
let ADs=G();
let Rq=G();
let AJO=null;let BcE=()=>{BcE=Bk(Rq);ATZ();}
let ATZ=()=>{let b,c;F$();b=X((AH9.t()).data.length);c=b.data;AJO=b;c[Ii.on]=1;c[I2.on]=2;c[IN.on]=3;c[Hv.on]=4;c[Ra.on]=5;}
let NP=G(B0);
let Kz=G(IS);
let Km=null;let AM7=(a,b,c,d)=>{let e;e=0;while(e<d){Bek(b.data[e+c|0]&255);e=e+1|0;}}
let AWU=()=>{let b;b=new Kz;b.B6=BX(1);Km=b;}
function MS(){E3.call(this);this.AL=0.0;}
let AWS=null;let A$0=a=>{return a.AL;}
let A1H=a=>{return By(a.AL);}
let BK=b=>{let c;c=new MS;c.AL=b;return c;}
let AYj=a=>{let b,c,d,e,f,g,h;b=a.AL;c=new L;c.og=H(16);MR(c,c.od,b);d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;Bl(c);E(c);}
let AZX=()=>{AWS=BI(A03);}
let HL=G();
let Bdb=null;let Bdf=null;let AXb=null;let AML=null;let A1_=null;let AEB=()=>{Bdb=E2([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bdf=Sq([I(1),I(10),I(100),I(1000),I(10000),I(100000),I(1000000),I(10000000),I(100000000),I(1000000000),B(1410065408, 2),B(1215752192, 23),B(3567587328, 232),B(1316134912, 2328),B(276447232, 23283),B(2764472320, 232830),B(1874919424, 2328306),B(1569325056, 23283064),B(2808348672, 232830643)]);AXb=Sq([I(1),I(10),I(100),I(10000),I(100000000),B(1874919424, 2328306)]);AML
=new Uf;A1_=new QN;}
let KN=G();
let ACK=M;let LK=null;let RS=null;let X8=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?Ee(b):B(0, 2146959360);c.Fg=Dh(Bd(d,B(0, 2147483648)),M)?0:1;e=Bd(d,B(4294967295, 1048575));f=Z(Gn(d,52))&2047;if(Dh(e,M)&&!f){c.Dn=M;c.CP=0;return;}if(f)e=B2(e,B(0, 1048576));else{e=BP(e,1);while(Dh(Bd(e,B(0, 1048576)),M)){e=BP(e,1);f=f+(-1)|0;}}g=RS;h=A7u(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=RS.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Jz(e,LK.data[i],j);if(Gb(k,ACK)){while(E9(k,ACK)<=0){h=h+(-1)|0;k=T(W(k,I(10)),
I(9));}g=RS.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Jz(e,LK.data[i],j);}e=BP(e,1);d=T(e,I(1));g=LK.data;i=h+1|0;l=g[i];f=j-1|0;m=Jz(d,l,f);l=Jz(B4(e,I(1)),LK.data[i],f);n=I(1);while(true){o=W(n,I(10));if(E9(EJ(k,o),EJ(l,o))<=0)break;n=o;}p=I(1);while(true){q=W(p,I(10));if(E9(EJ(k,q),EJ(m,q))>=0)break;p=q;}i=E9(n,p);e=i>0?W(EJ(k,n),n):i<0?T(W(EJ(k,p),p),p):W(EJ(T(k,BS(p,I(2))),p),p);if(E9(e,B(2808348672, 232830643))>=0)while(true){h=h+1|0;e=EJ(e,I(10));if(E9(e,B(2808348672, 232830643))<0)break;}else if(E9(e,B(1569325056, 23283064))
<0){h=h+(-1)|0;e=W(e,I(10));}c.Dn=e;c.CP=h-330|0;}
let Jz=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Bd(b,I(65535));f=Bd(Q(b,16),I(65535));g=Bd(Q(b,32),I(65535));h=Bd(Q(b,48),I(65535));i=Bd(c,I(65535));j=Bd(Q(c,16),I(65535));k=Bd(Q(c,32),I(65535));l=Bd(Q(c,48),I(65535));return T(T(T(BP(W(l,h),32+d|0),BP(T(W(l,g),W(k,h)),16+d|0)),BP(T(T(W(l,f),W(k,g)),W(j,h)),d)),Q(T(T(T(W(k,e),W(j,f)),W(i,g)),BP(T(T(T(W(l,e),W(k,f)),W(j,g)),W(i,h)),16)),32-d|0));}
let XI=()=>{ACK=EJ(I(-1),I(10));LK=Sq([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
B(3141732885, 4047385770),B(2513386308, 3237908616),B(1151715587, 2590326893),B(983751480, 4144523029),B(1645994643, 3315618423),B(3034782633, 2652494738),B(3996658754, 4243991581),B(2338333544, 3395193265),B(1870666835, 2716154612),B(4073513845, 2172923689),B(3940641775, 3476677903),B(575533043, 2781342323),B(2178413352, 2225073858),B(2626467905, 3560118173),B(3819161242, 2848094538),B(478348616, 2278475631),B(3342338164, 3645561009),B(3532863990, 2916448807),B(1108304273, 2333159046),B(55299919, 3733054474),
B(903233395, 2986443579),B(1581580175, 2389154863),B(1671534821, 3822647781),B(478234397, 3058118225),B(382587518, 2446494580),B(612140029, 3914391328),B(2207698941, 3131513062),B(48172235, 2505210450),B(77075576, 4008336720),B(61660460, 3206669376),B(3485302205, 2565335500),B(1281516232, 4104536801),B(166219527, 3283629441),B(3568949458, 2626903552),B(2274345296, 4203045684),B(2678469696, 3362436547),B(424788838, 2689949238),B(2057817989, 2151959390),B(3292508783, 3443135024),B(3493000485, 2754508019),B(3653393847, 2203606415),
B(1550462860, 3525770265),B(1240370288, 2820616212),B(3569276608, 2256492969),B(3133862195, 3610388751),B(1648096297, 2888311001),B(459483578, 2310648801),B(3312154103, 3697038081),B(1790729823, 2957630465),B(1432583858, 2366104372),B(3151127633, 3785766995),B(2520902106, 3028613596),B(1157728226, 2422890877),B(2711358621, 3876625403),B(3887073815, 3101300322),B(1391672133, 2481040258),B(1367681954, 3969664413),B(2812132482, 3175731530),B(2249705985, 2540585224),B(1022549199, 4064936359),B(1677032818, 3251949087),
B(3918606632, 2601559269),B(3692790234, 4162494831),B(2095238728, 3329995865),B(1676190982, 2663996692),B(3540899031, 4262394707),B(1114732307, 3409915766),B(32792386, 2727932613),B(1744220827, 2182346090),B(2790753324, 3491753744),B(3091596118, 2793402995),B(2473276894, 2234722396),B(2239256113, 3575555834),B(2650398349, 2860444667),B(402331761, 2288355734),B(2361717736, 3661369174),B(2748367648, 2929095339),B(3057687578, 2343276271),B(3174313206, 3749242034),B(3398444024, 2999393627),B(1000768301, 2399514902),
B(2460222741, 3839223843),B(3686165111, 3071379074),B(3807925548, 2457103259),B(3515700499, 3931365215),B(2812560399, 3145092172),B(532061401, 2516073738),B(4287272078, 4025717980),B(3429817663, 3220574384),B(3602847589, 2576459507),B(2328582306, 4122335212),B(144878926, 3297868170),B(115903141, 2638294536),B(2762425404, 4221271257),B(491953404, 3377017006),B(3829536560, 2701613604),B(3922622707, 2161290883),B(1122235577, 3458065414),B(1756781920, 2766452331),B(546432077, 2213161865),B(874291324, 3541058984),
B(1558426518, 2832847187),B(3823721592, 2266277749),B(3540974170, 3626044399),B(3691772795, 2900835519),B(3812411695, 2320668415),B(1804891416, 3713069465),B(1443913133, 2970455572),B(3732110884, 2376364457),B(2535403578, 3802183132),B(310335944, 3041746506),B(3684242592, 2433397204),B(3317807769, 3893435527),B(936259297, 3114748422),B(3325987815, 2491798737),B(1885606668, 3986877980),B(1508485334, 3189502384),B(2065781726, 2551601907),B(4164244222, 4082563051),B(2472401918, 3266050441),B(1118928075, 2612840353),
B(931291461, 4180544565),B(745033169, 3344435652),B(3173006913, 2675548521),B(3358824142, 4280877634),B(3546052773, 3424702107),B(1118855300, 2739761686),B(36090780, 2191809349),B(1775732167, 3506894958),B(3138572652, 2805515966),B(1651864662, 2244412773),B(1783990001, 3591060437),B(4004172378, 2872848349),B(4062331362, 2298278679),B(3922749802, 3677245887),B(1420212923, 2941796710),B(1136170338, 2353437368),B(958879082, 3765499789),B(1626096725, 3012399831),B(441883920, 2409919865),B(707014273, 3855871784),
B(1424604878, 3084697427),B(3716664280, 2467757941),B(4228675929, 3948412706),B(2523947284, 3158730165),B(2019157827, 2526984132),B(4089645983, 4043174611),B(2412723327, 3234539689),B(2789172121, 2587631751),B(2744688475, 4140210802),B(477763862, 3312168642),B(2959191467, 2649734913),B(3875712888, 4239575861),B(2241576851, 3391660689),B(2652254940, 2713328551),B(1262810493, 2170662841),B(302509870, 3473060546),B(3677981733, 2778448436),B(2083391927, 2222758749),B(756446706, 3556413999),B(1464150824, 2845131199),
B(2030314118, 2276104959),B(671522212, 3641767935),B(537217769, 2913414348),B(2147761134, 2330731478),B(2577424355, 3729170365),B(2061939484, 2983336292),B(4226531965, 2386669033),B(1608490388, 3818670454),B(2145785770, 3054936363),B(3434615534, 2443949090),B(1200417559, 3910318545),B(960334047, 3128254836),B(4204241074, 2502603868),B(1572824964, 4004166190),B(1258259971, 3203332952),B(3583588354, 2562666361),B(4015754449, 4100266178),B(635623181, 3280212943),B(2226485463, 2624170354),B(985396364, 4198672567),
B(3365297469, 3358938053),B(115257597, 2687150443),B(1810192996, 2149720354),B(319328417, 3439552567),B(2832443111, 2751642053),B(3983941407, 2201313642),B(2938332415, 3522101828),B(4068652850, 2817681462),B(1536935362, 2254145170),B(2459096579, 3606632272),B(249290345, 2885305818),B(1917419194, 2308244654),B(490890333, 3693191447),B(2969692644, 2954553157),B(657767197, 2363642526),B(3629407892, 3781828041),B(2044532855, 3025462433),B(3353613202, 2420369946),B(3647794205, 3872591914),B(3777228823, 3098073531),
B(2162789599, 2478458825),B(3460463359, 3965534120),B(2768370687, 3172427296),B(1355703090, 2537941837),B(3028118404, 4060706939),B(3281488183, 3248565551),B(1766197087, 2598852441),B(1107928421, 4158163906),B(27349277, 3326531125),B(21879422, 2661224900),B(35007075, 4257959840),B(28005660, 3406367872),B(2599384905, 2725094297),B(361521006, 2180075438),B(4014407446, 3488120700),B(3211525957, 2790496560),B(2569220766, 2232397248),B(3251759766, 3571835597),B(883420894, 2857468478),B(2424723634, 2285974782),B(443583977, 3657559652),
B(2931847559, 2926047721),B(1486484588, 2340838177),B(3237368801, 3745341083),B(12914663, 2996272867),B(2587312108, 2397018293),B(3280705914, 3835229269),B(3483558190, 3068183415),B(2786846552, 2454546732),B(1022980646, 3927274772),B(3395364895, 3141819817),B(998304997, 2513455854),B(3315274914, 4021529366),B(1793226472, 3217223493),B(3152568096, 2573778794),B(2467128576, 4118046071),B(1114709402, 3294436857),B(3468747899, 2635549485),B(1255029343, 4216879177),B(3581003852, 3373503341),B(2005809622, 2698802673),
B(3322634616, 2159042138),B(162254630, 3454467422),B(2706784082, 2763573937),B(447440347, 2210859150),B(715904555, 3537374640),B(572723644, 2829899712),B(3035159293, 2263919769),B(2279274491, 3622271631),B(964426134, 2897817305),B(771540907, 2318253844),B(2952452370, 3709206150),B(2361961896, 2967364920),B(1889569516, 2373891936),B(1305324308, 3798227098),B(2762246365, 3038581678),B(3927784010, 2430865342),B(2848480580, 3889384548),B(3996771382, 3111507638),B(620436728, 2489206111),B(3569679143, 3982729777),
B(1137756396, 3186183822),B(3487185494, 2548947057),B(2143522954, 4078315292),B(4291798741, 3262652233),B(856458615, 2610121787),B(2229327243, 4176194859),B(2642455254, 3340955887),B(395977285, 2672764710),B(633563656, 4276423536),B(3942824761, 3421138828),B(577279431, 2736911063),B(2179810463, 2189528850),B(3487696741, 3503246160),B(2790157393, 2802596928),B(3950112833, 2242077542),B(2884206696, 3587324068),B(4025352275, 2869859254),B(4079275279, 2295887403),B(1372879692, 3673419846),B(239310294, 2938735877),
B(2768428613, 2350988701),B(2711498862, 3761581922),B(451212171, 3009265538),B(2078956655, 2407412430),B(3326330649, 3851859888),B(84084141, 3081487911),B(3503241150, 2465190328),B(451225085, 3944304526),B(3796953905, 3155443620),B(3037563124, 2524354896),B(3142114080, 4038967834),B(3372684723, 3231174267),B(980160860, 2584939414),B(3286244294, 4135903062),B(911008517, 3308722450),B(728806813, 2646977960),B(1166090902, 4235164736),B(73879262, 3388131789),B(918096869, 2710505431),B(4170451332, 2168404344),B(4095741754, 3469446951),
B(2417599944, 2775557561),B(1075086496, 2220446049),B(3438125312, 3552713678),B(173519872, 2842170943),B(1856802816, 2273736754),B(393904128, 3637978807),B(2892103680, 2910383045),B(2313682944, 2328306436),B(1983905792, 3725290298),B(3305111552, 2980232238),B(67108864, 2384185791),B(2684354560, 3814697265),B(2147483648, 3051757812),B(0, 2441406250),B(0, 3906250000),B(0, 3125000000),B(0, 2500000000),B(0, 4000000000),B(0, 3200000000),B(0, 2560000000),B(0, 4096000000),B(0, 3276800000),B(0, 2621440000),B(0, 4194304000),
B(0, 3355443200),B(0, 2684354560),B(0, 2147483648),B(3435973836, 3435973836),B(1889785610, 2748779069),B(2370821947, 2199023255),B(3793315115, 3518437208),B(457671715, 2814749767),B(2943117749, 2251799813),B(3849994940, 3602879701),B(2221002492, 2882303761),B(917808535, 2305843009),B(3186480574, 3689348814),B(3408177918, 2951479051),B(1867548875, 2361183241),B(1270091283, 3777893186),B(157079567, 3022314549),B(984657113, 2417851639),B(3293438299, 3868562622),B(916763721, 3094850098),B(2451397895, 2475880078),
B(3063243173, 3961408125),B(2450594538, 3169126500),B(1960475630, 2535301200),B(3136761009, 4056481920),B(2509408807, 3245185536),B(1148533586, 2596148429),B(3555640657, 4153837486),B(1985519066, 3323069989),B(2447408712, 2658455991),B(2197867021, 4253529586),B(899300158, 3402823669),B(1578433585, 2722258935),B(1262746868, 2177807148),B(1161401530, 3484491437),B(3506101601, 2787593149),B(3663874740, 2230074519),B(3285219207, 3568119231),B(1769181906, 2854495385),B(1415345525, 2283596308),B(1405559381, 3653754093),
B(2842434423, 2923003274),B(3132940998, 2338402619),B(2435725219, 3741444191),B(1089586716, 2993155353),B(2589656291, 2394524282),B(707476229, 3831238852),B(3142961361, 3064991081),B(1655375629, 2451992865),B(2648601007, 3923188584),B(2977874265, 3138550867),B(664312493, 2510840694),B(2780886908, 4017345110),B(2224709526, 3213876088),B(3497754539, 2571100870),B(1301439967, 4113761393),B(2759138892, 3291009114),B(3066304573, 2632807291),B(3188100398, 4212491666),B(1691486859, 3369993333),B(3071176406, 2695994666),
B(1597947665, 2156795733),B(1697722806, 3450873173),B(3076165163, 2760698538),B(4178919049, 2208558830),B(2391303182, 3533694129),B(2772036005, 2826955303),B(3935615722, 2261564242),B(2861011319, 3618502788),B(4006795973, 2894802230),B(3205436779, 2315841784),B(2551718468, 3705346855),B(2041374775, 2964277484),B(2492093279, 2371421987),B(551375410, 3794275180),B(441100328, 3035420144),B(1211873721, 2428336115),B(1938997954, 3885337784),B(2410191822, 3108270227),B(210166539, 2486616182),B(1195259923, 3978585891),
B(97214479, 3182868713),B(1795758501, 2546294970),B(2873213602, 4074071952),B(580583963, 3259257562),B(3041447548, 2607406049),B(2289335700, 4171849679),B(2690462019, 3337479743),B(3870356534, 2669983794),B(3615590076, 4271974071),B(2033478602, 3417579257),B(4203763259, 2734063405),B(3363010607, 2187250724),B(2803836594, 3499601159),B(3102062734, 2799680927),B(763663269, 2239744742),B(2080854690, 3583591587),B(4241664129, 2866873269),B(4252324763, 2293498615),B(2508752324, 3669597785),B(2007001859, 2935678228),
B(3323588406, 2348542582),B(1881767613, 3757668132),B(4082394468, 3006134505),B(3265915574, 2404907604),B(2648484541, 3847852167),B(400800715, 3078281734),B(1179634031, 2462625387),B(2746407909, 3940200619),B(3056119786, 3152160495),B(2444895829, 2521728396),B(2193846408, 4034765434),B(2614070585, 3227812347),B(373269550, 2582249878),B(4033205117, 4131599804),B(4085557553, 3305279843),B(691465664, 2644223875),B(1106345063, 4230758200),B(885076050, 3384606560),B(708060840, 2707685248),B(2284435591, 2166148198),
B(2796103486, 3465837117),B(518895870, 2772669694),B(1274110155, 2218135755),B(2038576249, 3549017208),B(3348847917, 2839213766),B(1820084875, 2271371013),B(2053142340, 3634193621),B(783520413, 2907354897),B(3203796708, 2325883917),B(1690100896, 3721414268),B(3070067635, 2977131414),B(3315047567, 2381705131),B(3586089190, 3810728210),B(2868871352, 3048582568),B(4013084000, 2438866054),B(3843954022, 3902185687),B(1357176299, 3121748550),B(1085741039, 2497398840),B(1737185663, 3995838144),B(2248741989, 3196670515),
B(1798993591, 2557336412),B(3737383206, 4091738259),B(3848900024, 3273390607),B(1361133101, 2618712486),B(459826043, 4189939978),B(2085847752, 3351951982),B(4245658579, 2681561585),B(2498086431, 4290498537),B(280482227, 3432398830),B(224385781, 2745919064),B(1038502084, 2196735251),B(4238583712, 3514776401),B(2531873511, 2811821121),B(1166505349, 2249456897),B(2725402018, 3599131035),B(2180321615, 2879304828),B(3462244210, 2303443862),B(2103616899, 3685510180),B(1682893519, 2948408144),B(2205308275, 2358726515),
B(3528493240, 3773962424),B(3681788051, 3019169939),B(3804423900, 2415335951),B(74124026, 3864537523),B(1777286139, 3091630018),B(3139815829, 2473304014),B(2446724950, 3957286423),B(3675366878, 3165829138),B(363313125, 2532663311),B(3158281377, 4052261297),B(808638183, 3241809038),B(2364897465, 2593447230),B(3783835944, 4149515568),B(450088378, 3319612455),B(360070702, 2655689964),B(2294100042, 4249103942),B(117293115, 3399283154),B(952827951, 2719426523),B(2480249279, 2175541218),B(3109405388, 3480865949),
B(3346517769, 2784692759),B(3536207675, 2227754207),B(2221958443, 3564406732),B(59579836, 2851525386),B(3483637705, 2281220308),B(419859574, 3649952494),B(1194881118, 2919961995),B(955904894, 2335969596),B(4106428209, 3737551353),B(708162189, 2990041083),B(2284516670, 2392032866),B(1937239754, 3827252586),B(690798344, 3061802069),B(1411632134, 2449441655),B(2258611415, 3919106648),B(3524876050, 3135285318),B(242920462, 2508228255),B(388672740, 4013165208),B(2028925110, 3210532166),B(764146629, 2568425733),B(363641147, 4109481173),
B(2008899836, 3287584938),B(3325106787, 2630067950),B(1025203564, 4208108721),B(4256136688, 3366486976),B(2545915891, 2693189581),B(1177739254, 2154551665),B(1884382806, 3447282664),B(2366499704, 2757826131),B(1034206304, 2206260905),B(1654730086, 3530017448),B(3041770987, 2824013958),B(4151403708, 2259211166),B(629291719, 3614737867),B(3080413753, 2891790293),B(4182317920, 2313432234),B(4114728295, 3701491575),B(3291782636, 2961193260),B(2633426109, 2368954608),B(3354488315, 3790327373),B(106610275, 3032261899),
B(944281679, 2425809519),B(3228837605, 3881295230),B(2583070084, 3105036184),B(2925449526, 2484028947),B(1244745405, 3974446316),B(136802865, 3179557053),B(1827429210, 2543645642),B(3782880196, 4069833027),B(1308317238, 3255866422),B(3623634168, 2604693137),B(2361840832, 4167509020),B(1889472666, 3334007216),B(652584673, 2667205773),B(185142018, 4267529237),B(2725093992, 3414023389),B(3039068653, 2731218711),B(1572261463, 2184974969),B(4233605259, 3495959950),B(3386884207, 2796767960),B(2709507366, 2237414368),
B(3476218326, 3579862989),B(3639968120, 2863890391),B(2052981037, 2291112313),B(2425776200, 3665779701),B(1081627501, 2932623761),B(6308541, 2346099009),B(1728080585, 3753758414),B(2241457927, 3003006731),B(934172882, 2402405385),B(1494676612, 3843848616),B(336747830, 3075078893),B(1987385183, 2460063114),B(602835915, 3936100983),B(2200255650, 3148880786),B(901211061, 2519104629),B(3159924616, 4030567406),B(1668946233, 3224453925),B(1335156987, 2579563140),B(2136251179, 4127301024),B(2567994402, 3301840819),
B(2913388981, 2641472655),B(366455074, 4226356249),B(1152157518, 3381084999),B(1780719474, 2704867999),B(2283569038, 2163894399),B(1076730083, 3462231039),B(1720377526, 2769784831),B(517308561, 2215827865),B(827693699, 3545324584),B(1521148418, 2836259667),B(3793899112, 2269007733),B(916277824, 3630412374),B(1592015718, 2904329899),B(2132606034, 2323463919),B(835189277, 3717542271),B(4104125258, 2974033816),B(2424306747, 2379227053),B(3019897337, 3806763285),B(2415917869, 3045410628),B(3650721214, 2436328502),
B(2405180105, 3898125604),B(2783137543, 3118500483),B(3944496953, 2494800386),B(298240911, 3991680619),B(1097586188, 3193344495),B(878068950, 2554675596),B(3981890698, 4087480953),B(608532181, 3269984763),B(2204812663, 2615987810),B(3527700261, 4185580496),B(1963166749, 3348464397),B(4147513777, 2678771517),B(3200048207, 4286034428),B(4278025484, 3428827542),B(1704433468, 2743062034),B(2222540234, 2194449627),B(120090538, 3511119404),B(955065889, 2808895523),B(2482039630, 2247116418),B(3112269949, 3595386269),
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);RS=BcZ([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Uf(){let a=this;D.call(a);a.Dn=M;a.CP=0;a.Fg=0;}
function GI(){let a=this;D.call(a);a.JF=null;a.wV=null;a.Gb=null;a.C_=0;a.Go=0.0;a.vL=0.0;a.CX=0.0;a.AR=0.0;a.Dy=0.0;a.sP=0.0;a.y8=0.0;a.ww=0.0;a.z2=0.0;a.FD=0.0;a.tu=0.0;a.GB=0.0;a.zt=0;a.uH=null;a.CY=null;a.E6=0.0;a.Eo=0.0;a.JE=null;a.Fq=null;a.FF=null;}
let Bdr=(a,b)=>{let c=new GI();A5z(c,a,b);return c;}
let A5z=(a,b,c)=>{a.sP=1.0;a.FD=1.0;a.tu=1.0;a.GB=1.0;a.uH=Bs(LA(KZ),128);a.Eo=1.0;a.Fq=Tc([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.FF=Tc([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.Gb=b;a.C_=c;WH(a,b,c);}
let WH=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$$je;if(a.wV!==null)E(BaQ(C(556)));a.JF=AH0(b);d=BbK(BdF(Zg(b)),512);a:{d:{try{e=IC(d);if(e===null)E(GA(C(557)));e=Jy(e,AF8(e,C(558))+8|0);f=(Q7(Cv(e,0,ADl(e,32)),C(559),4)).data;if(f.length!=4)E(GA(C(560)));a.Go=Dd(f[0]);a.vL=Dd(f[1]);a.CX=Dd(f[2]);a.AR=Dd(f[3]);g=a.Go+a.CX;e=IC(d);if(e===null)E(GA(C(561)));f=(Q7(e,C(211),9)).data;h=f.length;if(h<3)E(GA(C(562)));if(!Gq(f[1],C(563)))E(GA(C(564)));a.Dy=Dd(Jy(f[1],11));if
(!Gq(f[2],C(565)))E(GA(C(566)));bf:{i=Dd(Jy(f[2],5));j=1;if(h<6)k=j;else if(f[5]===null)k=j;else if(!Gq(f[5],C(567)))k=j;else{try{k=Kt(1,Dd(Jy(f[5],6)));j=k;break bf;}catch($$e){$$je=BH($$e);if($$je instanceof CV){}else{throw $$e;}}k=j;}}a.wV=Bs(P,k);h=0;q:{u:{i:{while(true){if(h>=k)break q;e=IC(d);if(e===null)E(GA(C(568)));m:{l=S4(AC6(C(569)),e);if(H9(l)){m=LO(l,1);try{if(Dd(m)!=h)break i;break m;}catch($$e){$$je=BH($$e);if($$je instanceof CV){n=$$je;break u;}else{throw $$e;}}}}e=S4(AC6(C(570)),e);if(!H9(e))break;o
=LO(e,1);a.wV.data[h]=Xc(VC(Vz(VF(b),o)),C(571),C(124));h=h+1|0;}E(GA(C(572)));}try{E(GA(Cx(B5(B5(Dw(),C(573)),m))));}catch($$e){$$je=BH($$e);if($$je instanceof CV){n=$$je;}else{throw $$e;}}}E(A4F(Cx(B5(B5(Dw(),C(574)),m)),n));}a.ww=0.0;bb:{while(true){e=IC(d);if(e===null)break;if(Gq(e,C(575)))break bb;if(Gq(e,C(576)))break bb;if(!Gq(e,C(577)))continue;p=AKD();q=AAC(e,C(578));B8(q);B8(q);k=Dd(B8(q));if(k<=0)a.CY=p;else{if(k>65535)continue;Rw(a,k,p);}p.tK=k;B8(q);p.GR=Dd(B8(q));B8(q);p.GS=Dd(B8(q));B8(q);p.qK
=Dd(B8(q));B8(q);p.rd=Dd(B8(q));B8(q);p.rl=Dd(B8(q));B8(q);if(c)p.w2=Dd(B8(q));else p.w2= -(p.rd+Dd(B8(q))|0)|0;B8(q);p.vC=Dd(B8(q));if(Vo(q))B8(q);bk:{if(Vo(q))try{p.xA=Dd(B8(q));break bk;}catch($$e){$$je=BH($$e);if($$je instanceof CV){}else{throw $$e;}}}if(p.qK>0&&p.rd>0)a.ww=A8U(i+p.w2,a.ww);}}a.ww=a.ww+a.CX;bl:{while(true){e=IC(d);if(e===null)break;if(!Gq(e,C(579)))break bl;q=AAC(e,C(578));B8(q);B8(q);r=Dd(B8(q));B8(q);s=Dd(B8(q));if(r<0)continue;if(r>65535)continue;if(s<0)continue;if(s>65535)continue;p
=H0(a,r&65535);B8(q);t=Dd(B8(q));if(p!==null)AGm(p,s,t);}}u=0;v=0.0;w=0.0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;if(e!==null&&Gq(e,C(576))){u=1;q=AAC(e,C(578));B8(q);B8(q);v=G9(B8(q));B8(q);w=G9(B8(q));B8(q);x=G9(B8(q));B8(q);y=G9(B8(q));B8(q);z=G9(B8(q));B8(q);ba=G9(B8(q));B8(q);bb=G9(B8(q));}bc=H0(a,32);if(bc===null){bc=AKD();bc.tK=32;bd=H0(a,108);if(bd===null)bd=TH(a);bc.vC=bd.vC;Rw(a,32,bc);}if(!bc.qK){be=a.AR;bc.qK=be+bc.vC+a.vL|0;bc.rl= -be|0;}a.E6=bc.vC;bf=null;f=a.Fq.data;k=f.length;h=0;bm:{while(h<k){bf=H0(a,
f[h]);if(bf!==null)break bm;h=h+1|0;}}if(bf===null)bf=TH(a);a.Eo=bf.rd-g;bg=null;f=a.FF.data;k=f.length;h=0;be:{while(h<k){bg=H0(a,f[h]);if(bg!==null)break be;h=h+1|0;}}if(bg!==null)a.sP=bg.rd;else{bh=a.uH.data;j=bh.length;k=0;while(k<j){bn:{bi=bh[k];if(bi!==null){f=bi.data;h=f.length;r=0;while(true){if(r>=h)break bn;p=f[r];if(p!==null){s=p.rd;if(s&&p.qK)a.sP=AKV(a.sP,s);}r=r+1|0;}}}k=k+1|0;}}g=a.sP-g;a.sP=g;i=i-g;a.y8=i;g= -a.Dy;a.z2=g;if(c){a.y8= -i;a.z2= -g;}if(u){a.y8=v;a.ww=w;a.z2=x;a.sP=y;a.Dy=z;a.E6=
ba;a.Eo=bb;}}catch($$e){$$je=BH($$e);if($$je instanceof Da){n=$$je;break d;}else{b=$$je;break a;}}Rz(d);return;}try{E(A4F(Cx(CT(B5(Dw(),C(580)),b)),n));}catch($$e){$$je=BH($$e);b=$$je;}}Rz(d);E(b);}
let RY=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=c.zD.vI;e=1.0/d.tV;f=1.0/d.tI;g=0.0;h=0.0;i=c.Gu;j=c.Gw;k=c.AX;l=c.CJ;if(c instanceof Ps){m=c;g=m.Jx;h=(m.Jg-m.JI|0)-m.Jw;}n=b.GR;o=n;p=b.qK;q=n+p|0;n=b.GS;r=n;s=b.rd;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.qK=p+o|0;b.rl=b.rl-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.qK=b.qK-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.rd=n;if(n<0)b.rd=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.rd=b.rd-u|0;b.w2=b.w2+u|0;}}b.Fb=i+o*e;b.GU=i+k*e;if(!a.C_){b.Ef=j+
r*f;b.CA=j+l*f;}else{b.CA=j+r*f;b.Ef=j+l*f;}}
let Rw=(a,b,c)=>{let d,e,f;d=a.uH.data;e=b/512|0;f=d[e];if(f===null){f=Bs(KZ,512);d[e]=f;}f.data[b&511]=c;}
let TH=a=>{let b,c,d,e,f,g,h,i;b=a.uH.data;c=b.length;d=0;a:while(true){if(d>=c){e=new Bc;e.oe=1;e.of=1;e.oi=C(581);E(e);}k:{f=b[d];if(f!==null){f=f.data;g=f.length;h=0;while(true){if(h>=g)break k;i=f[h];if(i!==null&&i.rd&&i.qK)break a;h=h+1|0;}}}d=d+1|0;}return i;}
let H0=(a,b)=>{let c;c=a.uH.data[b/512|0];if(c===null)return null;return c.data[b&511];}
let OU=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.zt;i=a.tu;j=b.pG;k=b.pU;AAA(j,g);Z1(b.pU,g+1|0);d:{while(true){g=d+1|0;if(d<0)break;if(d>=c.oh.length)break;n:{l=c.oh.charCodeAt(d);if(l!=13){m=a.uH.data[l/512|0];n=m===null?null:m.data[l&511];if(n===null){n=a.CY;if(n===null)break n;}Dj(j,n);if(f===null)o=n.yJ?0.0:( -n.rl|0)*i-a.AR;else{q:{d=f.vC;m=f.Ap;if(m!==null){m=m.data[l>>>9|0];if(m!==null){p=m.data[l&511];break q;}}p=0;}o=(d+p|0)*i;}St(k,o);if(!h)f=n;else if(l!=91)f=n;else if(g>=
e)f=n;else{if(g<0)break d;if(g>=c.oh.length)break d;if(c.oh.charCodeAt(g)!=91)f=n;else{g=g+1|0;f=n;}}}}if(g>=e){if(f!==null)St(k,f.yJ?f.vC*i:(f.qK+f.rl|0)*i-a.vL);return;}d=g;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let Vy=(a,b,c)=>{let d,e,f,g,h,i;b:{d=c-1|0;e=b.ox.data;f=e[d].tK&65535;switch(f){case 9:case 10:case 13:case 32:break;default:c=0;break b;}c=1;}if(c)return d;k:{g=a.JE;if(g===null)c=0;else{h=g.data;c=h.length;i=0;while(i<c){if(f==h[i]){c=1;break k;}i=i+1|0;}c=0;}}if(c)d=d+(-1)|0;bf:{while(d>0){f:{c=e[d].tK&65535;switch(c){case 9:case 10:case 13:case 32:break;default:f=0;break f;}f=1;}if(f)break bf;h:{if(g===null)c=0;else{h=g.data;f=h.length;i=0;while(i<f){if(c==h[i]){c=1;break h;}i=i+1|0;}c=0;}}if(c)break bf;d
=d+(-1)|0;}return 0;}return d+1|0;}
let EZ=G(BW);
let Xz=null;let AYo=null;let AQz=null;let X6=null;let A8l=null;let S6=()=>{S6=Bk(EZ);AVx();}
let AVx=()=>{let b,c,d,e;b=new EZ;S6();b.oq=C(582);b.on=0;Xz=b;c=new EZ;c.oq=C(583);c.on=1;AYo=c;d=new EZ;d.oq=C(584);d.on=2;AQz=d;e=new EZ;e.oq=C(585);e.on=3;X6=e;A8l=S(EZ,[b,c,d,e]);}
function JD(){let a=this;D.call(a);a.rb=null;a.qm=null;a.Br=0;a.xu=0;a.zb=null;a.zG=0;a.F6=null;}
let NF=null;let BiY=(a,b,c,d,e)=>{let f=new JD();Va(f,a,b,c,d,e);return f;}
let Va=(a,b,c,d,e,f)=>{let g,h,i,j,k;b:{d:{a.Br=1;a.zG=0;g=new Bf;BU();a.F6=g;Bfs();switch(ARh.data[b.on]){case 1:a.rb=A4o(c,d,f);b=new Ie;b.sX=1;b.xc=0;b.C7=1;if(!D0){h=MV(e);e=h.data.length;f=new KV;i=0+e|0;Dm(f);f.ow=(-1);f.oD=e;f.oj=e;f.ok=0;f.oj=i;f.yo=0;f.Bd=0;f.y$=h;}else{d=e*2|0;if(d<0){b=new V;f=new L;f.og=H(16);DI(f,f.od,DJ(C(586)));N(f,f.od,d,10);g=new P;h=f.og;j=h.data;d=f.od;e=j.length;if(d>=0&&d<=(e-0|0)){g.oh=R(h.data,0,d);b.oe=1;b.of=1;b.oi=g;E(b);}b=new O;K$(b);E(b);}f=new C8;h=BX(d);f.ow=(-1);f.oD
=d;f.oj=d;CP();f.o9=CR;f.pg=0;f.o4=h;f.ok=0;f.oj=d;f.pW=1;f.py=0;f.o9=DT();f=K2(f);}b.sH=f;f.oj=f.ok;f.ok=0;f.ow=(-1);f=Bq;g=f.ol.createBuffer();e=f.qS;f.qS=e+1|0;C6(f.rp,e,C_(g));b.Bo=e;b.x$=!c?35048:35044;a.qm=b;a.xu=0;break b;case 2:break;case 3:a.rb=A3I(c,d,f);a.qm=A$G(c,e);a.xu=0;break b;case 4:break d;default:break d;}a.rb=BgE(c,d,f);a.qm=A$G(c,e);a.xu=0;break b;}b=new R_;AFG(b,0,d,f);a.rb=b;b=new O8;b.sX=1;b.xc=0;b.C7=1;if(!D0){h=MV(e);d=h.data.length;f=new KV;k=0+d|0;UM(f,d);f.ok=0;f.oj=k;f.yo=0;f.Bd
=0;f.y$=h;}else{c=e*2|0;if(c<0){b=new V;f=new L;F_(f);Nb(f,C(586));EX(f,c);AIq(b,Cx(f));E(b);}g=new C8;h=BX(c);Dm(g);g.ow=(-1);g.oD=c;g.oj=c;CP();g.o9=CR;g.pg=0;g.o4=h;g.ok=0;g.oj=c;g.pW=1;g.py=0;UD(g,DT());f=K2(g);}b.sH=f;AHI(f);b.Bo=AEt(Bq);b.x$=35044;a.qm=b;a.xu=1;}Yj(Eg,a);}
let WG=(a,b)=>{let c;c=b.data;a.qm.k4(b,0,c.length);return a;}
let TI=(a,b,c,d,e,f)=>{let g,h,i,j;if(!e)return;if(f){g=null;h=null;a.rb.k5(b,g);g=a.zb;if(g!==null&&g.k6()>0)a.zb.k5(b,h);if(a.qm.k7()>0)a.qm.i6();}if(a.xu){if(a.qm.k7()<=0)Bq.k8(c,d,e);else{g=a.qm.jb(0);i=g.ok;CH(g,d);Bq.k9(c,e,5123,g);CH(g,i);}}else{j=0;if(a.zG)j=a.zb.k6();if(a.qm.k7()<=0){if(a.zG&&j>0)GK.k$(c,d,e,j);else Bq.k8(c,d,e);}else{if((e+d|0)>a.qm.k_()){b=new Bc;g=new L;g.og=H(16);F(g,g.od,C(587));N(g,g.od,e,10);F(g,g.od,C(588));N(g,g.od,d,10);F(g,g.od,C(589));c=a.qm.k_();N(g,g.od,c,10);F(g,g.od,
C(590));g=Bi(g);b.oe=1;b.of=1;b.oi=g;E(b);}if(a.zG&&j>0)GK.la(c,e,5123,d*2|0,j);else Bq.lb(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.rb.lc(b,g);g=a.zb;if(g!==null&&g.k6()>0)a.zb.lc(b,h);if(a.qm.k7()>0)a.qm.ld();}}
let HK=(a,b)=>{let c,d,e;c=(a.rb.le()).qz.data;d=c.length;e=0;while(e<d){if(c[e].sd==b)return c[e];e=e+1|0;}return null;}
let ACV=a=>{return a.rb.le();}
let Yj=(b,c)=>{let d,e,f,g,h;d=NF;if(b===null){d=d.qv.data[0];while(d!==null&&d.q0!==null){d=d.q_;}}else{e=b;if(!e.$id$){f=Ff();e.$id$=f;}g=b.$id$;h=d.qv.data;d=h[g&(h.length-1|0)];while(d!==null){if(d.t3==g){f=d.q0;if(b!==f&&!(b!==f?0:1)?0:1)break;}d=d.q_;}}d=d===null?null:d.rv;if(d===null){d=new CQ;d.pD=1;d.ox=Bs(D,16);}Dj(d,c);JX(NF,b,d);}
let ABe=()=>{let b,c,d,e;b=new JA;c=J1(16);b.tF=0;d=Bs(Gt,c);e=d.data;b.qv=d;b.zO=0.75;b.uE=e.length*0.75|0;NF=b;}
function Fb(){let a=this;D.call(a);a.oD=0;a.ok=0;a.oj=0;a.ow=0;}
let UM=(a,b)=>{a.ow=(-1);a.oD=b;a.oj=b;}
let AMH=a=>{return a.oD;}
let A58=a=>{return a.ok;}
let CH=(a,b)=>{let c,d,e;if(b>=0&&b<=a.oj){a.ok=b;if(b<a.ow)a.ow=0;return a;}c=new V;d=a.oj;e=new L;e.og=H(16);F(e,e.od,C(591));N(e,e.od,b,10);F(e,e.od,C(592));N(e,e.od,d,10);d=e.od;Bo(e,d,d+1|0);e.og.data[d]=93;e=Bi(e);c.oe=1;c.of=1;c.oi=e;E(c);}
let AUI=a=>{return a.oj;}
let Ds=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.oD){if(a.ow>b)a.ow=(-1);a.oj=b;if(a.ok>b)a.ok=b;return a;}c=new V;d=a.oD;e=new L;e.og=H(16);F(e,e.od,C(593));N(e,e.od,b,10);F(e,e.od,C(592));N(e,e.od,d,10);d=e.od;Bo(e,d,d+1|0);f=e.og;g=f.data;g[d]=93;h=new P;d=e.od;U();i=g.length;if(d>=0&&d<=(i-0|0)){h.oh=R(f.data,0,d);c.oe=1;c.of=1;c.oi=h;E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let AUL=a=>{return a.oj-a.ok|0;}
let Nk=G(0);
let LP=G(Fb);
let Ov=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new O;i=new L;i.og=H(16);F(i,i.od,C(594));N(i,i.od,g,10);F(i,i.od,C(595));N(i,i.od,f,10);i=Bi(i);h.oe=1;h.of=1;h.oi=i;E(h);}f=a.oj;j=a.ok;if((f-j|0)<d){h=new I_;h.oe=1;h.of=1;E(h);}if(d>=0){g=0;k=j;while(g<d){l=c+1|0;f=k+1|0;e[c]=a.uL.data[k+a.v5|0];g=g+1|0;c=l;k=f;}a.ok=j+d|0;return a;}h=new O;i=new L;i.og=H(16);F(i,i.od,C(596));N(i,i.od,d,10);F(i,i.od,C(597));i=Bi(i);h.oe=1;h.of=1;h.oi=i;E(h);}}b=b.data;h=new O;d
=b.length;i=new L;i.og=H(16);F(i,i.od,C(598));N(i,i.od,c,10);F(i,i.od,C(592));N(i,i.od,d,10);d=i.od;Bo(i,d,d+1|0);i.og.data[d]=41;i=Bi(i);h.oe=1;h.of=1;h.oi=i;E(h);}
let AIj=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.xH){e=new EW;e.oe=1;e.of=1;E(e);}f=a.oj;g=a.ok;if((f-g|0)<d){e=new G1;e.oe=1;e.of=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new O;j=new L;j.og=H(16);F(j,j.od,C(599));N(j,j.od,i,10);F(j,j.od,C(595));N(j,j.od,f,10);j=Bi(j);e.oe=1;e.of=1;e.oi=j;E(e);}if(d>=0){i=0;k=g;while(i<d){l=k+1|0;f=c+1|0;a.uL.data[k+a.v5|0]=h[c];i=i+1|0;k=l;c=f;}a.ok=g+d|0;return a;}e=new O;j=new L;j.og=H(16);F(j,j.od,C(596));N(j,j.od,d,10);F(j,j.od,C(597));j=Bi(j);e.oe=1;e.of
=1;e.oi=j;E(e);}}b=b.data;e=new O;d=b.length;j=new L;j.og=H(16);F(j,j.od,C(598));N(j,j.od,c,10);F(j,j.od,C(592));N(j,j.od,d,10);d=j.od;Bo(j,d,d+1|0);j.og.data[d]=41;j=Bi(j);e.oe=1;e.of=1;e.oi=j;E(e);}
let MI=(a,b,c,d)=>{let e,f,g,h,i;if(a.xH){b=new EW;b.oe=1;b.of=1;E(b);}e=d-c|0;if((a.oj-a.ok|0)<e){b=new G1;b.oe=1;b.of=1;E(b);}if(c>=0&&c<=b.oh.length){if(d>b.oh.length){f=new O;g=b.oh.length;b=new L;b.og=H(16);F(b,b.od,C(599));N(b,b.od,d,10);F(b,b.od,C(600));N(b,b.od,g,10);b=Bi(b);f.oe=1;f.of=1;f.oi=b;E(f);}if(c<=d){h=a.ok;o:{while(c<d){i=h+1|0;g=c+1|0;if(c<0)break o;if(c>=b.oh.length)break o;a.uL.data[h+a.v5|0]=b.oh.charCodeAt(c);h=i;c=g;}a.ok=a.ok+e|0;return a;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new O;f=new L;f.og
=H(16);F(f,f.od,C(601));N(f,f.od,c,10);F(f,f.od,C(602));N(f,f.od,d,10);f=Bi(f);b.oe=1;b.of=1;b.oi=f;E(b);}f=new O;e=b.oh.length;b=new L;b.og=H(16);F(b,b.od,C(601));N(b,b.od,c,10);F(b,b.od,C(592));N(b,b.od,e,10);d=b.od;Bo(b,d,d+1|0);b.og.data[d]=41;b=Bi(b);f.oe=1;f.of=1;f.oi=b;E(f);}
function Gk(){let a=this;Fb.call(a);a.pg=0;a.o4=null;a.o9=null;}
let SF=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new O;i=new L;i.og=H(16);F(i,i.od,C(603));N(i,i.od,g,10);F(i,i.od,C(595));N(i,i.od,f,10);i=Bi(i);h.oe=1;h.of=1;h.oi=i;E(h);}f=a.oj;j=a.ok;if((f-j|0)<d){h=new I_;h.oe=1;h.of=1;E(h);}if(d>=0){g=j+a.pg|0;k=0;while(k<d){l=c+1|0;b=a.o4.data;f=g+1|0;e[c]=b[g];k=k+1|0;c=l;g=f;}a.ok=j+d|0;return a;}h=new O;i=new L;i.og=H(16);F(i,i.od,C(596));N(i,i.od,d,10);F(i,i.od,C(597));i=Bi(i);h.oe=1;h.of=1;h.oi=i;E(h);}}b=b.data;h=new O;g
=b.length;i=new L;i.og=H(16);F(i,i.od,C(598));N(i,i.od,c,10);F(i,i.od,C(592));N(i,i.od,g,10);f=i.od;Bo(i,f,f+1|0);i.og.data[f]=41;i=Bi(i);h.oe=1;h.of=1;h.oi=i;E(h);}
let U9=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.py){e=new EW;e.oe=1;e.of=1;E(e);}f=a.oj;g=a.ok;if((f-g|0)<d){e=new G1;e.oe=1;e.of=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=g+a.pg|0;j=0;while(j<d){b=a.o4.data;k=i+1|0;f=c+1|0;b[i]=h[c];j=j+1|0;i=k;c=f;}a.ok=g+d|0;return a;}e=new O;l=new L;l.og=H(16);F(l,l.od,C(596));N(l,l.od,d,10);EA(l,l.od,C(597));Ks(e,Bi(l));E(e);}e=new O;l=new L;l.og=H(16);F(l,l.od,C(604));N(l,l.od,i,10);F(l,l.od,C(595));N(l,l.od,f,10);m=new P;b
=l.og;h=b.data;d=l.od;U();f=h.length;if(d>=0&&d<=(f-0|0)){m.oh=R(b.data,0,d);e.oe=1;e.of=1;e.oi=m;E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}}b=b.data;e=new O;d=b.length;l=new L;l.og=H(16);F(l,l.od,C(598));N(l,l.od,c,10);F(l,l.od,C(592));N(l,l.od,d,10);d=l.od;Bo(l,d,d+1|0);b=l.og;h=b.data;h[d]=41;m=new P;d=l.od;U();f=h.length;if(d>=0&&d<=(f-0|0)){m.oh=R(b.data,0,d);e.oe=1;e.of=1;e.oi=m;E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}
let UD=(a,b)=>{a.o9=b;return a;}
let AHw=a=>{a.oj=a.ok;a.ok=0;a.ow=(-1);return a;}
let ASr=(a,b)=>{Ds(a,b);return a;}
let AX0=(a,b)=>{CH(a,b);return a;}
function GG(){D.call(this);this.DK=null;}
let AUA=null;let Fx=null;let Gz=null;let EN=()=>{EN=Bk(GG);AQN();}
let AQN=()=>{let b;b=new GG;EN();b.DK=C(605);AUA=b;b=new GG;b.DK=C(606);Fx=b;b=new GG;b.DK=C(607);Gz=b;}
let Mg=G(0);
let Q1=G(0);
function OE(){let a=this;D.call(a);a.GG=null;a.Gf=null;a.Js=0;a.JS=0;}
let A66=a=>{let b,c;if(!a.Js){b=a.GG;b.G1=null;Dq();if(CG!==b)CG=b;CG.tZ=F4();c=a.Gf;b=null;c.wc.e(b);}}
function KZ(){let a=this;D.call(a);a.tK=0;a.GR=0;a.GS=0;a.qK=0;a.rd=0;a.Fb=0.0;a.CA=0.0;a.GU=0.0;a.Ef=0.0;a.rl=0;a.w2=0;a.vC=0;a.Ap=null;a.yJ=0;a.xA=0;}
let AKD=()=>{let a=new KZ();A8v(a);return a;}
let A8v=a=>{a.xA=0;}
let AGm=(a,b,c)=>{let d,e,f;if(a.Ap===null)a.Ap=Bs(LA(Bch),128);d=a.Ap.data;e=b>>>9|0;f=d[e];if(f===null){f=BX(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
let AN6=a=>{let b,c,d,e;b=a.tK&65535;c=new P;d=H(1);e=d.data;e[0]=b;U();c.oh=R(d.data,0,e.length);return c;}
function Wv(){let a=this;D.call(a);a.qz=null;a.qX=0;a.Id=M;a.Jq=0;a.JL=0;}
let A2a=a=>{let b=new Wv();A4W(b,a);return b;}
let A4W=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.Id=I(-1);a.Jq=(-1);a.JL=(-1);c=b.length;if(!c){d=new V;d.oe=1;d.of=1;d.oi=C(608);E(d);}e=Bs(EI,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.qz=e;c=0;h=0;while(h<f.length){k:{o:{d=f[h];d.sJ=c;switch(d.qU){case 5120:case 5121:break;case 5122:case 5123:g=2*d.qs|0;break k;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break o;case 5126:case 5132:g=4*d.qs|0;break k;default:break o;}g=d.qs;break k;}g=0;}c=c+g|0;h=h+1|0;}a.qX=c;}
function HH(){let a=this;D.call(a);a.oF=null;a.oI=0;a.Ba=null;a.Hb=null;a.HC=null;a.Hn=null;a.sg=null;a.Hm=null;a.Ga=null;a.G3=null;a.o6=0;a.C8=0;a.GK=0;a.JX=null;a.p9=null;a.p8=null;a.o$=0;a.IJ=0;a.ro=null;a.yQ=null;}
let Nv=0;let AHH=null;let Yx=null;let AHq=null;let BfY=null;let Ry=()=>{Ry=Bk(HH);AS8();}
let Cz=(a,b)=>{let c=new HH();ABc(c,a,b);return c;}
let ABc=(a,b,c)=>{let d,e,f,g,h;Ry();a.oF=C(43);a.Ba=Kw(51,0.800000011920929);a.Hb=Kw(51,0.800000011920929);a.HC=Kw(51,0.800000011920929);a.sg=Kw(51,0.800000011920929);a.Hm=Kw(51,0.800000011920929);a.Ga=Kw(51,0.800000011920929);a.IJ=0;if(!D0){d=X(1);e=d.data.length;f=new HC;g=0+e|0;f.ow=(-1);f.oD=e;f.oj=e;f.ok=0;f.oj=g;f.v1=0;f.wW=0;f.vt=d;}else{h=new C8;d=BX(4);h.ow=(-1);h.oD=4;h.oj=4;CP();h.o9=CR;h.pg=0;h.o4=d;h.ok=0;h.oj=4;h.pW=1;h.py=0;h.o9=DT();f=Hu(h);}a.ro=f;if(!D0){d=X(1);e=d.data.length;f=new HC;g=
0+e|0;f.ow=(-1);f.oD=e;f.oj=e;f.ok=0;f.oj=g;f.v1=0;f.wW=0;f.vt=d;}else{h=new C8;d=BX(4);h.ow=(-1);h.oD=4;h.oj=4;CP();h.o9=CR;h.pg=0;h.o4=d;h.ok=0;h.oj=4;h.pW=1;h.py=0;UD(h,DT());f=Hu(h);}a.yQ=f;if(b===null)E(AQq(C(609)));if(c===null)E(AQq(C(610)));f=AHH;if(f!==null&&FU(f)>0)b=Cx(B5(B5(Dw(),AHH),b));f=Yx;if(f!==null&&FU(f)>0)c=Cx(B5(B5(Dw(),Yx),c));a.p9=b;a.p8=c;a.JX=ARu(16);Dg(a,b,c);if(AHE(a)){Xg(a);YT(a);AGa(a,Eg,a);}}
let Dg=(a,b,c)=>{let d;a.C8=Vp(a,35633,b);d=Vp(a,35632,c);a.GK=d;if(a.C8!=(-1)&&d!=(-1)){d=Bq.lm();if(!d)d=(-1);d=AHo(a,d);a.o6=d;if(d!=(-1)){a.oI=1;return;}a.oI=0;return;}a.oI=0;}
let Vp=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bq;if(!D0){e=X(1);f=e.data.length;g=new HC;h=0+f|0;g.ow=(-1);g.oD=f;g.oj=f;g.ok=0;g.oj=h;g.v1=0;g.wW=0;g.vt=e;}else{g=new C8;e=BX(4);g.ow=(-1);g.oD=4;g.oj=4;CP();g.o9=CR;g.pg=0;g.o4=e;g.ok=0;g.oj=4;g.pW=1;g.py=0;g.o9=DT();g=Hu(g);}i=d.lo(b);if(!i)return (-1);d.lp(i,c);d.lq(i);d.f0(i,35713,g);if(Gd(g,0))return i;j=d.lr(i);c=new L;c.og=H(16);d=a.oF;F(c,c.od,d);d=b!=35633?C(611):C(612);F(c,c.od,d);d=new P;e=c.og;k=e.data;i=c.od;U();l=k.length;if(i>=0&&i<=(l-0|0)){d.oh=R(e.data,
0,i);a.oF=d;c=new L;c.og=H(16);F(c,c.od,d);F(c,c.od,j);d=new P;e=c.og;k=e.data;i=c.od;l=k.length;if(i>=0&&i<=(l-0|0)){d.oh=R(e.data,0,i);a.oF=d;return (-1);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let AHo=(a,b)=>{let c,d,e,f;c=Bq;if(b==(-1))return (-1);c.ls(b,a.C8);c.ls(b,a.GK);c.lt(b);d=new C8;e=BX(4);d.ow=(-1);d.oD=4;d.oj=4;CP();d.o9=CR;d.pg=0;d.o4=e;d.ok=0;d.oj=4;d.pW=1;d.py=0;d.o9=DT();f=Hu(d);c.fZ(b,35714,f);if(Gd(f,0))return b;a.oF=Bq.i4(b);return (-1);}
let AHE=a=>{return a.oI;}
let KC=(a,b,c)=>{let d,e,f,g,h,i;d=a.Ba;e=(-2);f=Gl(d,b);if(f>=0)e=d.q5.data[f];if(e==(-2)){e=Bq.lu(a.o6,b);if(e==(-1)&&c){if(a.oI){d=new V;g=new L;g.og=H(16);F(g,g.od,C(613));F(g,g.od,b);F(g,g.od,C(614));b=new P;h=g.og;i=h.data;e=g.od;U();f=i.length;if(e>=0&&e<=(f-0|0)){b.oh=R(h.data,0,e);d.oe=1;d.of=1;d.oi=b;E(d);}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}b=new Cb;d=new L;d.og=H(16);F(d,d.od,C(615));if(!a.oI)g=a.oF;else{g=Bq.i4(a.o6);a.oF=g;}F(d,d.od,g);g=new P;h=d.og;i=h.data;e=d.od;U();f=i.length;if(e>=0&&e<=(f
-0|0)){g.oh=R(h.data,0,e);b.oe=1;b.of=1;b.oi=g;E(b);}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}FM(a.Ba,b,e);}return e;}
let AIb=(a,b,c,d,e,f,g)=>{let h;h=Bq;if(a.o$){Dg(a,a.p9,a.p8);a.o$=0;}h.lw(b,c,d,e,f,g);}
let AGk=(a,b)=>{let c;c=Bq;if(a.o$){Dg(a,a.p9,a.p8);a.o$=0;}c.lx(b);}
let AGa=(a,b,c)=>{let d,e;Ry();d=AHq;e=Dl(d,b);d=e<0?null:d.qg.data[e];if(d===null){d=new CQ;d.pD=1;d.ox=Bs(D,16);}Dj(d,c);B3(AHq,b,d);}
let YT=a=>{let b,c,d,e,f;b=a.ro;b.ok=0;b.oj=b.oD;b.ow=(-1);Bq.fZ(a.o6,35718,b);c=Gd(a.ro,0);a.Hn=Bs(P,c);d=0;while(d<c){b=a.ro;b.ok=0;b.oj=b.oD;b.ow=(-1);U4(b,0,1);b=a.yQ;b.ok=0;b.oj=b.oD;b.ow=(-1);e=Bq.fY(a.o6,d,a.ro,b);f=Bq.lu(a.o6,e);FM(a.Ba,e,f);FM(a.Hb,e,Gd(a.yQ,0));FM(a.HC,e,Gd(a.ro,0));a.Hn.data[d]=e;d=d+1|0;}}
let Xg=a=>{let b,c,d,e,f;b=a.ro;b.ok=0;b.oj=b.oD;b.ow=(-1);Bq.fZ(a.o6,35721,b);c=Gd(a.ro,0);a.G3=Bs(P,c);d=0;while(d<c){b=a.ro;b.ok=0;b.oj=b.oD;b.ow=(-1);U4(b,0,1);b=a.yQ;b.ok=0;b.oj=b.oD;b.ow=(-1);e=Bq.fX(a.o6,d,a.ro,b);f=Bq.lz(a.o6,e);FM(a.sg,e,f);FM(a.Hm,e,Gd(a.yQ,0));FM(a.Ga,e,Gd(a.ro,0));a.G3.data[d]=e;d=d+1|0;}}
let AS8=()=>{let b,c,d,e;Nv=1;AHH=C(43);Yx=C(43);AHq=F7(51,0.800000011920929);if(!D0){b=X(1);c=b.data.length;d=new HC;e=0+c|0;d.ow=(-1);d.oD=c;d.oj=c;d.ok=0;d.oj=e;d.v1=0;d.wW=0;d.vt=b;}else{d=new C8;b=BX(4);d.ow=(-1);d.oD=4;d.oj=4;CP();d.o9=CR;d.pg=0;d.o4=b;d.ok=0;d.oj=4;d.pW=1;d.py=0;d.o9=DT();d=Hu(d);}BfY=d;}
let Lp=G(LP);
let Wa=a=>{let b,c,d,e,f,g,h,i;if(a.xH){b=new EW;b.oe=1;b.of=1;E(b);}a:{c=a.oj;d=a.ok;e=c-d|0;if(d>0){f=0;while(true){if(f>=e)break a;c=d+1|0;g=a.uL.data;h=a.v5;i=g[d+h|0];g[f+h|0]=i;f=f+1|0;d=c;}}}a.ok=e;a.oj=a.oD;a.ow=(-1);return a;}
function Jx(){let a=this;Lp.call(a);a.xH=0;a.v5=0;a.uL=null;}
function LH(){let a=this;D.call(a);a.Bj=null;a.x4=null;a.yd=0.0;a.tB=0.0;a.u0=null;a.uK=null;a.xb=0;}
let P5=(a,b)=>{let c;if(b!==null){a.u0=b;return a;}c=new V;c.oe=1;c.of=1;c.oi=C(484);E(c);}
let AV9=(a,b)=>{return;}
let Rk=(a,b)=>{let c;if(b!==null){a.uK=b;return a;}c=new V;c.oe=1;c.of=1;c.oi=C(484);E(c);}
let A20=(a,b)=>{return;}
let MH=(a,b,c,d)=>{let e,f,g,h,i,j,k,$$je;b:{e=a.xb;if(e!=3){if(d)break b;if(e!=2)break b;}b=new Cb;b.oe=1;b.of=1;E(b);}a.xb=!d?1:2;while(true){try{f=Wl(a,b,c);}catch($$e){$$je=BH($$e);if($$je instanceof B0){g=$$je;b=new Nw;b.oe=1;b.of=1;b.qd=g;E(b);}else{throw $$e;}}e=f.pb;if(e?0:1){if(!d)return f;e=b.oj-b.ok|0;if(e<=0)return f;f=new CZ;f.pb=2;f.pA=e;}else if(e!=1?0:1)break;h=!(f.pb!=3?0:1)?a.u0:a.uK;p:{EN();if(h!==Fx){if(h===AUA)break p;else return f;}i=c.oj-c.ok|0;j=a.x4;e=j.data.length;if(i<e)return DK;U9(c,
j,0,e);}k=b.ok;e=f.pb;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Hk;b.oe=1;b.of=1;E(b);}CH(b,k+f.pA|0);}return f;}
let SU=(a,b)=>{let c,d,e,f,g,h,i;c=b.oj-b.ok|0;if(!c){b=new C8;d=BX(0);b.ow=(-1);b.oD=0;b.oj=0;CP();b.o9=CR;b.pg=0;b.o4=d;b.ok=0;b.oj=0;b.pW=0;b.py=0;return b;}a.xb=0;e=c*a.yd|0;if(e<0){b=new V;f=new L;f.og=H(16);F(f,f.od,C(586));N(f,f.od,e,10);g=new P;d=f.og;h=d.data;c=f.od;U();i=h.length;if(c>=0&&c<=(i-0|0)){g.oh=R(d.data,0,c);b.oe=1;b.of=1;b.oi=g;E(b);}b=new O;Bl(b);E(b);}f=new C8;d=BX(e);f.ow=(-1);f.oD=e;f.oj=e;CP();f.o9=CR;f.pg=0;f.o4=d;f.ok=0;f.oj=e;f.pW=0;f.py=0;while(true){g=MH(a,b,f,0);if(g===DW)break;if
(g===DK){f=Ox(a,f);continue;}if(!AE4(g))continue;Z$(g);}b=MH(a,b,f,1);c=b.pb;e=c!=2?0:1;e=!e&&!(c!=3?0:1)?0:1;q:{if(e){switch(c){case 0:b=new Lt;b.oe=1;b.of=1;E(b);case 1:b=new Ml;b.oe=1;b.of=1;E(b);case 2:f=new L$;e=b.pA;Bl(f);f.DS=e;E(f);case 3:break;default:break q;}f=new Ls;e=b.pA;BZ(f);f.E1=e;E(f);}}while(true){b=Ob(a,f);if(b.pb?0:1)break;if(!AHC(b))continue;f=Ox(a,f);}AHw(f);return f;}
let Ox=(a,b)=>{let c,d,e,f,g,h,i;c=b.o4.data;d=c.length;e=d*2|0;f=BX(e);if(e<d)d=e;g=f.data;e=0;while(e<d){g[e]=c[e];e=e+1|0;}d=g.length;if(d>=0&&d<=(d-0|0)){h=new C8;i=0+d|0;h.ow=(-1);h.oD=d;h.oj=d;CP();h.o9=CR;h.pg=0;h.o4=f;h.ok=0;h.oj=i;h.pW=0;h.py=0;CH(h,b.ok);return h;}b=new O;b.oe=1;b.of=1;E(b);}
let Ob=(a,b)=>{let c,d;c=a.xb;if(c!=2&&c!=4){b=new Cb;b.oe=1;b.of=1;E(b);}d=DW;if(d===d)a.xb=3;return d;}
let A4N=(a,b)=>{return DW;}
let AIY=a=>{a.xb=0;return a;}
let AR3=a=>{return;}
function CZ(){let a=this;D.call(a);a.pb=0;a.pA=0;}
let DW=null;let DK=null;let A_M=(a,b)=>{let c=new CZ();AC0(c,a,b);return c;}
let AC0=(a,b,c)=>{a.pb=b;a.pA=c;}
let AHC=a=>{return a.pb!=1?0:1;}
let AE4=a=>{let b,c;b=a.pb;c=b!=2?0:1;return !c&&!(b!=3?0:1)?0:1;}
let AF4=b=>{let c;c=new CZ;c.pb=2;c.pA=b;return c;}
let Z$=a=>{let b,c;switch(a.pb){case 0:b=new Lt;b.oe=1;b.of=1;E(b);case 1:b=new Ml;b.oe=1;b.of=1;E(b);case 2:b=new L$;c=a.pA;b.oe=1;b.of=1;b.DS=c;E(b);case 3:b=new Ls;c=a.pA;b.oe=1;b.of=1;b.E1=c;E(b);default:}}
let A01=()=>{let b;b=new CZ;b.pb=0;b.pA=0;DW=b;b=new CZ;b.pb=1;b.pA=0;DK=b;}
function QN(){let a=this;D.call(a);a.C9=0;a.C0=0;a.Fl=0;}
let RC=G();
let ARh=null;let Bfs=()=>{Bfs=Bk(RC);A7Q();}
let A7Q=()=>{let b,c;S6();b=X((A8l.t()).data.length);c=b.data;ARh=b;c[AYo.on]=1;c[AQz.on]=2;c[X6.on]=3;c[Xz.on]=4;}
let KI=G(0);
function Ng(){let a=this;D.call(a);a.ss=null;a.u9=null;a.FQ=0;a.IL=0;a.Ey=0;a.yy=0;a.Bi=0;}
let A4o=(a,b,c)=>{let d=new Ng();AFG(d,a,b,c);return d;}
let AFG=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.yy=0;a.Bi=0;a.IL=b;a.ss=d;c=C7(d.qX/4|0,c);if(!D0){e=CU(c);f=e.data.length;d=new Jb;g=0+f|0;d.ow=(-1);d.oD=f;d.oj=f;d.ok=0;d.oj=g;d.xF=0;d.zk=0;d.xe=e;}else{c=c*4|0;if(c<0){d=new V;h=new L;h.og=H(16);G3(h,h.od,C(586));N(h,h.od,c,10);i=new P;e=h.og;j=e.data;c=h.od;U();k=j.length;if(c>=0&&c<=(k-0|0)){i.oh=R(e.data,0,c);d.oe=1;d.of=1;d.oi=i;E(d);}d=new O;BZ(d);E(d);}h=new C8;e=BX(c);h.ow=(-1);h.oD=c;h.oj=c;CP();h.o9=CR;h.pg=0;h.o4=e;h.ok=0;h.oj=c;h.pW=1;h.py=0;h.o9=DT();d
=Ge(h);}a.u9=d;d.oj=d.ok;d.ok=0;d.ow=(-1);d=Bq;h=d.ol.createBuffer();k=d.qS;d.qS=k+1|0;C6(d.rp,k,C_(h));a.FQ=k;a.Ey=!b?35048:35044;}
let ANE=a=>{return a.ss;}
let ATe=a=>{return a.u9.oj/(a.ss.qX/4|0)|0;}
let A54=(a,b,c,d)=>{let e,f,g;a.yy=1;e=a.u9;f=null;g=e instanceof Gk;if(g)f=Ge(e);else if(e instanceof Fk)f=e;if(f===null){f=new Bc;f.oe=1;f.of=1;f.oi=C(616);E(f);}f.ok=0;f.oj=f.oD;f.ow=(-1);CH(e,0);JE(f,b,c,d);CH(e,0);if(!g)Ds(e,d);else Ds(e,d<<2);CH(a.u9,0);Ds(a.u9,d);if(a.Bi){e=Bq;f=a.u9;e.fV(34962,f.oj,f,a.Ey);a.yy=0;}}
let A1g=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bq;d.lI(34962,a.FQ);if(a.yy){e=a.u9;d.fV(34962,e.oj,e,a.Ey);a.yy=0;}a:{f=a.ss.qz.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.ss.qz.data[g];j=h[g];if(j>=0){e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}e.lx(j);k=i.qs;l=i.qU;m=i.qW;n=a.ss.qX;o=i.sJ;e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}e.lw(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.ss.qz.data[g];d=i.qL;e=b.sg;p=(-1);j=Gl(e,d);if(j>=0)p=e.q5.data[j];if(p>=0){e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$
=0;}e.lx(p);j=i.qs;k=i.qU;l=i.qW;m=a.ss.qX;n=i.sJ;e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}e.lw(p,j,k,l,m,n);}g=g+1|0;}}a.Bi=1;}
let AYD=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bq;e=a.ss.qz.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}h.lJ(g);}f=f+1|0;}}i=0;while(i<e){j=a.ss.qz.data[i].qL;k=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}l=Bq;h=b.sg;g=(-2);f=Gl(h,j);if(f>=0)g=h.q5.data[f];if(g==(-2)){g=l.lz(b.o6,j);FM(b.sg,j,g);}if(g!=(-1))k.lJ(g);i=i+1|0;}}d.lI(34962,0);a.Bi=0;}
let La=G(0);
function Ie(){let a=this;D.call(a);a.sH=null;a.Bo=0;a.C7=0;a.sX=0;a.xc=0;a.x$=0;}
let AOo=a=>{return a.sH.oj;}
let AXT=a=>{return a.sH.oD;}
let ARz=(a,b,c,d)=>{let e;a.sX=1;e=a.sH;e.ok=0;e.oj=e.oD;e.ow=(-1);UZ(e,b,c,d);e=a.sH;c=e.ok;e.oj=c;e.ok=0;e.ow=(-1);if(a.xc){Bq.fV(34963,c,e,a.x$);a.sX=0;}}
let AJS=(a,b)=>{a.sX=a.sX|b;return a.sH;}
let A9J=a=>{let b,c,d;b=a.Bo;if(!b){c=new Bc;c.oe=1;c.of=1;c.oi=C(617);E(c);}Bq.lI(34963,b);if(a.sX){c=Bq;d=a.sH;c.fV(34963,d.oj,d,a.x$);a.sX=0;}a.xc=1;}
let A7F=a=>{Bq.lI(34963,0);a.xc=0;}
function ACL(){let a=this;D.call(a);a.sm=null;a.su=null;a.sW=null;a.Fd=0;a.Fm=0;a.I2=0;a.Eb=0;a.ya=0;a.Bv=0;}
let BgE=(a,b,c)=>{let d=new ACL();AQ5(d,a,b,c);return d;}
let AQ5=(a,b,c,d)=>{let e,f,g,h,i,j,k;b:{a.ya=0;a.Bv=0;a.I2=b;a.sm=d;c=C7(d.qX,c);if(!D0){e=BX(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new C8;g=0+f|0;d.ow=(-1);d.oD=f;d.oj=f;CP();d.o9=CR;d.pg=0;d.o4=e;d.ok=0;d.oj=g;d.pW=0;d.py=0;break b;}d=new O;d.oe=1;d.of=1;Bt(d);E(d);}if(c<0){d=new V;h=new L;h.og=H(16);G3(h,h.od,C(586));N(h,h.od,c,10);i=new P;e=h.og;j=e.data;c=h.od;U();k=j.length;if(c>=0&&c<=(k-0|0)){i.oh=R(e.data,0,c);d.oe=1;d.of=1;d.oi=i;E(d);}d=new O;BZ(d);E(d);}d=new C8;e=BX(c);d.ow=(-1);d.oD=c;d.oj
=c;CP();d.o9=CR;d.pg=0;d.o4=e;d.ok=0;d.oj=c;d.pW=1;d.py=0;d.o9=DT();}a.sW=d;a.Fm=1;a.Eb=!b?35048:35044;a.su=Ge(d);d=Bq;h=d.ol.createBuffer();f=d.qS;d.qS=f+1|0;C6(d.rp,f,C_(h));Bq.lI(34962,f);Bq.fV(34962,a.sW.oD,null,a.Eb);Bq.lI(34962,0);a.Fd=f;d=a.su;d.oj=d.ok;d.ok=0;d.ow=(-1);d=a.sW;d.oj=d.ok;d.ok=0;d.ow=(-1);}
let AZE=a=>{return a.sm;}
let ALZ=a=>{return (a.su.oj*4|0)/a.sm.qX|0;}
let AKq=(a,b,c,d)=>{let e,f,g;a.ya=1;if(!a.Fm){e=a.su;e.ok=0;e.oj=e.oD;e.ow=(-1);JE(e,b,c,d);e=a.su;e.oj=e.ok;e.ok=0;e.ow=(-1);CH(a.sW,0);Ds(a.sW,a.su.oj<<2);}else{e=a.sW;f=null;g=e instanceof Gk;if(g)f=Ge(e);else if(e instanceof Fk)f=e;if(f===null){f=new Bc;f.oe=1;f.of=1;f.oi=C(616);E(f);}f.ok=0;f.oj=f.oD;f.ow=(-1);CH(e,0);JE(f,b,c,d);CH(e,0);if(!g)Ds(e,d);else Ds(e,d<<2);CH(a.su,0);Ds(a.su,d);}if(a.Bv){e=Bq;f=a.sW;e.fW(34962,0,f.oj,f);a.ya=0;}}
let ARo=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bq;d.lI(34962,a.Fd);if(a.ya){Ds(a.sW,a.su.oj*4|0);e=a.sW;d.fV(34962,e.oj,e,a.Eb);a.ya=0;}a:{f=a.sm.qz.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.sm.qz.data[g];j=h[g];if(j>=0){e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}e.lx(j);k=i.qs;l=i.qU;m=i.qW;n=a.sm.qX;o=i.sJ;e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}e.lw(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.sm.qz.data[g];p=i.qL;e=b.sg;q=(-1);j=Gl(e,p);if(j>=0)q=e.q5.data[j];if(q>=0){e=Bq;if(b.o$)
{Dg(b,b.p9,b.p8);b.o$=0;}e.lx(q);j=i.qs;k=i.qU;l=i.qW;m=a.sm.qX;n=i.sJ;e=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}e.lw(q,j,k,l,m,n);}g=g+1|0;}}a.Bv=1;}
let AM4=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bq;e=a.sm.qz.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}h.lJ(g);}f=f+1|0;}}i=0;while(i<e){j=a.sm.qz.data[i].qL;k=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}l=Bq;h=b.sg;g=(-2);f=Gl(h,j);if(f>=0)g=h.q5.data[f];if(g==(-2)){g=l.lz(b.o6,j);FM(b.sg,j,g);}if(g!=(-1))k.lJ(g);i=i+1|0;}}d.lI(34962,0);a.Bv=0;}
function AE2(){let a=this;D.call(a);a.u6=null;a.s2=null;a.FS=0;a.Iy=0;a.vd=0;a.Bx=0;a.F7=0;}
let A$G=(a,b)=>{let c=new AE2();A0X(c,a,b);return c;}
let A0X=(a,b,c)=>{let d,e,f,g,h,i,j,k;b:{a.vd=1;a.Bx=0;c=c*2|0;if(!D0){d=BX(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new C8;g=0+e|0;f.ow=(-1);f.oD=e;f.oj=e;CP();f.o9=CR;f.pg=0;f.o4=d;f.ok=0;f.oj=g;f.pW=0;f.py=0;break b;}f=new O;f.oe=1;f.of=1;Bt(f);E(f);}if(c<0){f=new V;h=new L;h.og=H(16);G3(h,h.od,C(586));N(h,h.od,c,10);i=new P;d=h.og;j=d.data;c=h.od;U();g=j.length;if(c>=0&&c<=(g-0|0)){i.oh=R(d.data,0,c);f.oe=1;f.of=1;f.oi=i;E(f);}f=new O;BZ(f);E(f);}f=new C8;d=BX(c);f.ow=(-1);f.oD=c;f.oj=c;CP();f.o9=CR;f.pg
=0;f.o4=d;f.ok=0;f.oj=c;f.pW=1;f.py=0;f.o9=DT();}a.s2=f;a.Iy=1;a.F7=!b?35048:35044;f=K2(f);a.u6=f;f.oj=f.ok;f.ok=0;f.ow=(-1);f=a.s2;f.oj=f.ok;f.ok=0;f.ow=(-1);f=Bq;h=f.ol.createBuffer();k=f.qS;f.qS=k+1|0;C6(f.rp,k,C_(h));Bq.lI(34963,k);Bq.fV(34963,a.s2.oD,null,a.F7);Bq.lI(34963,0);a.FS=k;}
let ASX=a=>{return a.u6.oj;}
let AXh=a=>{return a.u6.oD;}
let A26=(a,b,c,d)=>{let e,f;a.vd=1;e=a.u6;e.ok=0;e.oj=e.oD;e.ow=(-1);UZ(e,b,c,d);e=a.u6;e.oj=e.ok;e.ok=0;e.ow=(-1);CH(a.s2,0);Ds(a.s2,d<<1);if(a.Bx){e=Bq;f=a.s2;e.fW(34963,0,f.oj,f);a.vd=0;}}
let A8W=(a,b)=>{a.vd=a.vd|b;return a.u6;}
let APl=a=>{let b,c,d;b=a.FS;if(!b){c=new Bc;c.oe=1;c.of=1;c.oi=C(618);E(c);}Bq.lI(34963,b);if(a.vd){Ds(a.s2,a.u6.oj*2|0);c=Bq;d=a.s2;c.fW(34963,0,d.oj,d);a.vd=0;}a.Bx=1;}
let AKQ=a=>{Bq.lI(34963,0);a.Bx=0;}
function Pj(){let a=this;D.call(a);a.tC=null;a.ue=null;a.Dw=0;a.IN=0;a.EG=0;a.yh=0;a.Cu=0;a.Ei=0;a.sb=null;}
let AFP=null;let BaB=()=>{BaB=Bk(Pj);A$W();}
let A3I=(a,b,c)=>{let d=new Pj();AC2(d,a,b,c);return d;}
let AC2=(a,b,c,d)=>{let e,f,g,h,i,j;BaB();a.yh=0;a.Cu=0;a.Ei=(-1);e=new Et;e.rf=1;e.pI=X(16);a.sb=e;a.IN=b;a.tC=d;c=C7(d.qX/4|0,c);if(!D0){f=CU(c);g=f.data.length;d=new Jb;h=0+g|0;d.ow=(-1);d.oD=g;d.oj=g;d.ok=0;d.oj=h;d.xF=0;d.zk=0;d.xe=f;}else{c=c*4|0;if(c<0){d=new V;e=new L;e.og=H(16);G3(e,e.od,C(586));N(e,e.od,c,10);i=new P;f=e.og;j=f.data;c=e.od;U();g=j.length;if(c>=0&&c<=(g-0|0)){i.oh=R(f.data,0,c);d.oe=1;d.of=1;d.oi=i;E(d);}d=new O;BZ(d);E(d);}e=new C8;f=BX(c);e.ow=(-1);e.oD=c;e.oj=c;CP();e.o9=CR;e.pg
=0;e.o4=f;e.ok=0;e.oj=c;e.pW=1;e.py=0;e.o9=DT();d=Ge(e);}a.ue=d;d.oj=d.ok;d.ok=0;d.ow=(-1);d=Bq;e=d.ol.createBuffer();g=d.qS;d.qS=g+1|0;C6(d.rp,g,C_(e));a.Dw=g;a.EG=!b?35048:35044;d=AFP;d.ok=0;d.oj=d.oD;d.ow=(-1);GK.lL(1,d);d=AFP;c=d.ok;if(c<d.oj){d.ok=c+1|0;a.Ei=d.lM(c);return;}d=new I_;d.oe=1;d.of=1;E(d);}
let AYJ=a=>{return a.tC;}
let A5F=a=>{return (a.ue.oj*4|0)/a.tC.qX|0;}
let AYX=(a,b,c,d)=>{let e,f,g;a.yh=1;e=a.ue;f=null;g=e instanceof Gk;if(g)f=Ge(e);else if(e instanceof Fk)f=e;if(f===null){f=new Bc;f.oe=1;f.of=1;f.oi=C(616);E(f);}f.ok=0;f.oj=f.oD;f.ow=(-1);CH(e,0);JE(f,b,c,d);CH(e,0);if(!g)Ds(e,d);else Ds(e,d<<2);CH(a.ue,0);Ds(a.ue,d);if(a.Cu){e=Bq;f=a.ue;e.fV(34962,f.oj,f,a.EG);a.yh=0;}}
let AUr=(a,b,c)=>{let d;d=GK;d.lN(a.Ei);AGY(a,b,c);if(a.yh){d.lI(34962,a.Dw);b=a.ue;Ds(b,b.oj);b=a.ue;d.fV(34962,b.oj,b,a.EG);a.yh=0;}a.Cu=1;}
let AGY=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.sb.o8;e=!d?0:1;d:{f=a.tC.qz.data.length;if(e){if(c===null){d=0;c:{while(true){if(!e)break c;if(d>=f)break c;g=a.tC.qz.data[d].qL;h=b.sg;i=(-1);e=Gl(h,g);if(e>=0)i=h.q5.data[e];g=a.sb;if(d>=g.o8)break;e=i!=g.pI.data[d]?0:1;d=d+1|0;}h=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,d,10);F(b,b.od,C(38));d=g.o8;N(b,b.od,d,10);g=new P;c=b.og;j=c.data;e=b.od;U();f=j.length;if(e>=0&&e<=(f-0|0)){g.oh=R(c.data,0,e);h.oe=1;h.of=1;h.oi=g;E(h);}b=new O;Bl(b);E(b);}}else{j=
c.data;e=j.length!=d?0:1;i=0;while(e){if(i>=f)break d;e=j[i]!=GN(a.sb,i)?0:1;i=i+1|0;}}}}bb:{if(!e){Cd.lI(34962,a.Dw);if(a.sb.o8){k=a.tC.qz.data.length;d=0;while(d<k){g=a.sb;if(d>=g.o8){h=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,d,10);F(b,b.od,C(38));d=g.o8;N(b,b.od,d,10);g=new P;c=b.og;j=c.data;e=b.od;U();f=j.length;if(e>=0&&e<=(f-0|0)){g.oh=R(c.data,0,e);h.oe=1;h.of=1;h.oi=g;E(h);}b=new O;BZ(b);E(b);}i=g.pI.data[d];if(i>=0){g=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}g.lJ(i);}d=d+1|0;}}a.sb.o8=0;d=0;while
(true){if(d>=f)break bb;l=a.tC.qz.data[d];if(c!==null){j=c.data;Gp(a.sb,j[d]);}else{g=a.sb;h=l.qL;Gp(g,ACC(b.sg,h,(-1)));}k=GN(a.sb,d);if(k>=0){AGk(b,k);AIb(b,k,l.qs,l.qU,l.qW,a.tC.qX,l.sJ);}d=d+1|0;}}}}
let AMw=(a,b,c)=>{GK.lN(0);a.Cu=0;}
let A$W=()=>{let b,c,d,e;if(!D0){b=X(1);c=b.data.length;d=new HC;e=0+c|0;d.ow=(-1);d.oD=c;d.oj=c;d.ok=0;d.oj=e;d.v1=0;d.wW=0;d.vt=b;}else{d=new C8;b=BX(4);d.ow=(-1);d.oD=4;d.oj=4;CP();d.o9=CR;d.pg=0;d.o4=b;d.ok=0;d.oj=4;d.pW=1;d.py=0;d.o9=DT();d=Hu(d);}AFP=d;}
let R_=G(Ng);
let O8=G(Ie);
function AGx(){let a=this;D.call(a);a.Ea=0;a.vg=null;a.q5=null;a.Fy=0.0;a.Eh=0;a.Cn=0;a.Ci=0;}
let Kw=(a,b)=>{let c=new AGx();A2g(c,a,b);return c;}
let A2g=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.Fy=c;d=NG(b,c);a.Eh=d*c|0;b=d-1|0;a.Ci=b;a.Cn=Ed(I(b));a.vg=Bs(D,d);a.q5=X(d);return;}e=new V;f=new L;f.og=H(16);F(f,f.od,C(60));ER(f,f.od,c);g=new P;h=f.og;i=h.data;d=f.od;U();j=i.length;if(d>=0&&d<=(j-0|0)){g.oh=R(h.data,0,d);e.oe=1;e.of=1;e.oi=g;E(e);}f=new O;f.oe=1;f.of=1;Bt(f);E(f);}
let Gl=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new V;c.oe=1;c.of=1;c.oi=C(61);E(c);}a:{d=a.vg;if(!b.pz){e=0;while(true){if(e>=b.oh.length)break a;b.pz=(31*b.pz|0)+b.oh.charCodeAt(e)|0;e=e+1|0;}}}f=Z(Q(W(I(b.pz),B(2135587861, 2654435769)),a.Cn));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof P))g=0;else{h=b;g=c.oh!==h.oh?0:1;}if(g)break;f=(f+1|0)&a.Ci;}return f;}
let FM=(a,b,c)=>{let d,e;d=Gl(a,b);if(d>=0){a.q5.data[d]=c;return;}d= -(d+1|0)|0;e=a.vg.data;e[d]=b;a.q5.data[d]=c;c=a.Ea+1|0;a.Ea=c;if(c>=a.Eh)AAv(a,e.length<<1);}
let ACC=(a,b,c)=>{let d;d=Gl(a,b);if(d>=0)c=a.q5.data[d];return c;}
let AAv=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.vg.data.length;a.Eh=b*a.Fy|0;d=b-1|0;a.Ci=d;a.Cn=Ed(I(d));e=a.vg;f=a.q5;a.vg=Bs(D,b);a.q5=X(b);if(a.Ea>0){g=0;while(true){if(g>=c)break b;h=e.data[g];if(h!==null){k:{i=f.data[g];j=a.vg;if(!h.pz){k=0;while(true){if(k>=h.oh.length)break k;h.pz=(31*h.pz|0)+h.oh.charCodeAt(k)|0;k=k+1|0;}}}b=Z(Q(W(I(h.pz),B(2135587861, 2654435769)),a.Cn));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.Ci;}l[b]=h;a.q5.data[b]=i;}g=g+1|0;}}}}
let AGu=G();
let ARu=b=>{let c,d,e,f,g;if(!D0){c=CU(b);d=c.data.length;e=new Jb;f=0+d|0;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=f;e.xF=0;e.zk=0;e.xe=c;return e;}b=b*4|0;if(b>=0){e=new C8;c=BX(b);e.ow=(-1);e.oD=b;e.oj=b;CP();e.o9=CR;e.pg=0;e.o4=c;e.ok=0;e.oj=b;e.pW=1;e.py=0;e.o9=DT();return Ge(e);}e=new V;g=new L;g.og=H(16);F(g,g.od,C(586));N(g,g.od,b,10);g=Bi(g);e.oe=1;e.of=1;e.oi=g;E(e);}
let Fr=G(0);
function C8(){let a=this;Gk.call(a);a.pW=0;a.py=0;}
let Vw=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oj)return a.o4.data[a.pg+b|0];c=new O;d=a.oj;e=new L;e.og=H(16);F(e,e.od,C(619));N(e,e.od,b,10);F(e,e.od,C(592));N(e,e.od,d,10);d=e.od;Bo(e,d,d+1|0);f=e.og;g=f.data;g[d]=41;h=new P;d=e.od;U();i=g.length;if(d>=0&&d<=(i-0|0)){h.oh=R(f.data,0,d);c.oe=1;c.of=1;c.oi=h;E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let YS=a=>{let b,c,d,e,f,g,h,i,j;if(a.py){b=new EW;b.oe=1;b.of=1;E(b);}a:{c=a.oj;d=a.ok;e=c-d|0;if(d>0){c=a.pg;f=c+d|0;g=0;while(true){if(g>=e)break a;h=a.o4.data;i=c+1|0;j=f+1|0;h[c]=h[f];g=g+1|0;c=i;f=j;}}}a.ok=e;a.oj=a.oD;a.ow=(-1);return a;}
let K2=a=>{let b,c,d,e,f,g;b=a.oj;c=a.ok;d=(b-c|0)/2|0;e=a.o9;CP();if(e!==CR){e=new RV;f=a.pg+c|0;c=a.py;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=d;e.xh=f;e.ud=a;e.C4=c;return e;}e=new SV;b=a.pg+c|0;g=a.py;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=d;e.xh=b;e.ud=a;e.C4=g;return e;}
let AHh=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.oj){c=a.o4.data;b=a.pg+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;h=a.o9;CP();if(h!==CR)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new O;d=a.oj-3|0;i=new L;i.og=H(16);F(i,i.od,C(619));N(i,i.od,b,10);F(i,i.od,C(592));N(i,i.od,d,10);d=i.od;Bo(i,d,d+1|0);c=i.og;j=c.data;j[d]=41;k=new P;d=i.od;U();e=j.length;if(d>=0&&d<=(e-0|0)){k.oh=R(c.data,0,d);h.oe=1;h.of=1;h.oi=k;E(h);}h=new O;h.oe=1;h.of=1;Bt(h);E(h);}
let Xv=(a,b,c)=>{let d,e,f;if(a.py){d=new EW;d.oe=1;d.of=1;E(d);}if(b>=0&&(b+3|0)<a.oj){d=a.o9;CP();if(d!==CR){e=a.o4.data;b=a.pg+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.o4.data;b=a.pg+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new O;c=a.oj-3|0;f=new L;f.og=H(16);F(f,f.od,C(619));N(f,f.od,b,10);F(f,f.od,C(592));N(f,f.od,c,10);c=f.od;Bo(f,c,c+1|0);f.og.data[c]=41;f=Bi(f);d.oe=1;d.of=1;d.oi=f;E(d);}
let Hu=a=>{let b,c,d,e,f,g;b=a.oj;c=a.ok;d=(b-c|0)/4|0;e=a.o9;CP();if(e!==CR){e=new OB;f=a.pg+c|0;c=a.py;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=d;e.wp=f;e.w9=a;e.Dk=c;return e;}e=new TO;b=a.pg+c|0;g=a.py;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=d;e.wp=b;e.w9=a;e.Dk=g;return e;}
let Ge=a=>{let b,c,d,e,f,g;b=a.oj;c=a.ok;d=(b-c|0)/4|0;e=a.o9;CP();if(e!==AA$){e=new Ou;f=a.pg+c|0;c=a.py;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=d;e.we=f;e.uh=a;e.E3=c;return e;}e=new PA;b=a.pg+c|0;g=a.py;e.ow=(-1);e.oD=d;e.oj=d;e.ok=0;e.oj=d;e.we=b;e.uh=a;e.E3=g;return e;}
let AWO=a=>{return a.o4.data;}
let MD=G();
let IM=G(Fb);
let ATC=a=>{a.ok=0;a.oj=a.oD;a.ow=(-1);return a;}
let AXe=(a,b)=>{CH(a,b);return a;}
let A5x=a=>{a.ok=0;a.oj=a.oD;a.ow=(-1);return a;}
function HD(){D.call(this);this.F5=null;}
let CR=null;let AA$=null;let YO=null;let CP=()=>{CP=Bk(HD);A$X();}
let DT=()=>{let b,c;CP();if(YO===null){b=new ArrayBuffer(2);c=new Int16Array(b);0;c[0]=1;YO=(new Int8Array(b))[0]?AA$:CR;}return YO;}
let A$X=()=>{let b;b=new HD;CP();b.F5=C(620);CR=b;b=new HD;b.F5=C(621);AA$=b;}
let Fk=G(Fb);
let JE=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.lS()){e=new EW;e.oe=1;e.of=1;E(e);}f=a.oj;g=a.ok;if((f-g|0)<d){e=new G1;e.oe=1;e.of=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.lT(g,h[c]);i=i+1|0;g=j;c=f;}a.ok=a.ok+d|0;return a;}e=new O;k=new L;k.og=H(16);F(k,k.od,C(596));N(k,k.od,d,10);F(k,k.od,C(597));Ks(e,Bi(k));E(e);}e=new O;k=new L;k.og=H(16);F(k,k.od,C(622));N(k,k.od,i,10);F(k,k.od,C(595));N(k,k.od,f,10);l=new P;b=k.og;h=b.data;d=k.od;U();f=h.length;if
(d>=0&&d<=(f-0|0)){l.oh=R(b.data,0,d);e.oe=1;e.of=1;e.oi=l;E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}}b=b.data;e=new O;d=b.length;k=new L;k.og=H(16);F(k,k.od,C(598));N(k,k.od,c,10);F(k,k.od,C(592));N(k,k.od,d,10);d=k.od;Bo(k,d,d+1|0);b=k.og;h=b.data;h[d]=41;l=new P;d=k.od;U();f=h.length;if(d>=0&&d<=(f-0|0)){l.oh=R(b.data,0,d);e.oe=1;e.of=1;e.oi=l;E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}
let AQD=a=>{a.ok=0;a.oj=a.oD;a.ow=(-1);return a;}
let AY3=a=>{a.oj=a.ok;a.ok=0;a.ow=(-1);return a;}
let ANP=(a,b)=>{Ds(a,b);return a;}
let A5Q=(a,b)=>{CH(a,b);return a;}
let AN5=a=>{a.oj=a.ok;a.ok=0;a.ow=(-1);return a;}
let AWC=a=>{a.ok=0;a.oj=a.oD;a.ow=(-1);return a;}
let ASv=(a,b)=>{Ds(a,b);return a;}
let AVL=(a,b)=>{CH(a,b);return a;}
let AEl=G();
let IQ=G(Fb);
let UZ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.lS()){e=new EW;e.oe=1;e.of=1;E(e);}f=a.oj;g=a.ok;if((f-g|0)<d){e=new G1;e.oe=1;e.of=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.lU(g,h[c]);i=i+1|0;g=j;c=f;}a.ok=a.ok+d|0;return a;}e=new O;k=new L;k.og=H(16);F(k,k.od,C(596));N(k,k.od,d,10);F(k,k.od,C(597));Ks(e,Cx(k));E(e);}e=new O;k=new L;k.og=H(16);F(k,k.od,C(623));N(k,k.od,i,10);F(k,k.od,C(595));N(k,k.od,f,10);l=new P;b=k.og;h=b.data;d=k.od;U();f=h.length;if
(d>=0&&d<=(f-0|0)){l.oh=R(b.data,0,d);e.oe=1;e.of=1;e.oi=l;E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}}b=b.data;e=new O;d=b.length;k=new L;k.og=H(16);F(k,k.od,C(598));N(k,k.od,c,10);F(k,k.od,C(592));N(k,k.od,d,10);d=k.od;Bo(k,d,d+1|0);b=k.og;h=b.data;h[d]=41;l=new P;d=k.od;U();f=h.length;if(d>=0&&d<=(f-0|0)){l.oh=R(b.data,0,d);e.oe=1;e.of=1;e.oi=l;E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}
let AVr=a=>{a.ok=0;a.oj=a.oD;a.ow=(-1);return a;}
let AHI=a=>{a.oj=a.ok;a.ok=0;a.ow=(-1);return a;}
let ATg=(a,b)=>{Ds(a,b);return a;}
let A76=(a,b)=>{CH(a,b);return a;}
let A8X=a=>{a.oj=a.ok;a.ok=0;a.ow=(-1);return a;}
let AWo=a=>{a.ok=0;a.oj=a.oD;a.ow=(-1);return a;}
let A4G=(a,b)=>{Ds(a,b);return a;}
let AXX=(a,b)=>{CH(a,b);return a;}
let AFx=G();
let Qi=G(0);
function Lm(){let a=this;D.call(a);a.G6=null;a.tV=0;a.tI=0;a.wu=null;a.xJ=null;a.Hr=0;a.vY=0;}
let Bgu=0;let BeK=(a,b,c,d)=>{let e=new Lm();AZ0(e,a,b,c,d);return e;}
let AZ0=(a,b,c,d,e)=>{a.tV=0;a.tI=0;a.vY=0;a.G6=b;a.xJ=c;a.wu=d;a.Hr=e;if(c!==null){b=UF(a,c);a.xJ=b;c=b.pE;a.tV=c===null?b.qA:c.qq;a.tI=c===null?b.qB:c.qo;if(d===null){if(c===null){IR();b=H_;}else b=Iy(c.p2);a.wu=b;}}}
let SA=a=>{let b,c;if(a.vY){b=new Bc;b.oe=1;b.of=1;b.oi=C(624);E(b);}if(a.xJ===null){b=UF(a,ASZ(a.G6));a.xJ=b;c=b.pE;a.tV=c===null?b.qA:c.qq;a.tI=c===null?b.qB:c.qo;if(a.wu===null){if(c===null){IR();b=H_;}else b=Iy(c.p2);a.wu=b;}}a.vY=1;}
let UF=(a,b)=>{let c,d,e,f,g,h,i,j;b:{if(Bq===null&&Bgu){c=b.pE;d=c===null?b.qA:c.qq;e=c===null?b.qB:c.qo;f=M0(d);g=M0(e);if(d!=f)break b;if(e!=g)break b;}return b;}h=new Ih;c=b.pE;if(c===null){IR();c=H_;}else c=Iy(c.p2);JY(h,f,g,c);c=h.pE;if(c===null){Gu(b);K5(h,b.sU,0,0,d,e,0,0,d,e);}else{i=b.pE.qi;j=c.qi;NR(i,j,0,0,d,e,0,0,d,e);}if(b.xd){c=new Bc;c.oe=1;c.of=1;c.oi=C(48);E(c);}JL();Jd(KO,b.y1);c=b.pE;if(c!==null)NK(c.qi);b.xd=1;return h;}
function Ih(){let a=this;D.call(a);a.qA=0;a.qB=0;a.sU=null;a.p_=null;a.y1=0;a.yE=null;a.Gp=0;a.Gr=0;a.Gt=0;a.Gs=0.0;a.At=null;a.ze=null;a.Gh=null;a.IG=null;a.wt=null;a.xV=null;a.Fn=0;a.pE=null;a.xd=0;}
let ADR=null;let TJ=()=>{TJ=Bk(Ih);APC();}
let ASZ=a=>{let b=new Ih();VN(b,a);return b;}
let BiZ=(a,b,c)=>{let d=new Ih();JY(d,a,b,c);return d;}
let VN=(a,b)=>{let c,d,e,f,g;TJ();a.Gp=255;a.Gr=255;a.Gt=255;a.At=Ny(255,255,255,a.Gs);JV();a.ze=ACb;Zx();a.Gh=AGn;a.Fn=0;c=b.qp;d=b.xL.x9;e=Dl(d,c);d=e<0?null:d.qg.data[e];if(Eg.rR.EO){f=ASA(d.q9);a.pE=Bfb(f,0,f.data.length,0);My(a,(-1),(-1),null,null);}else{My(a,(-1),(-1),d.Dx,null);if(a.wt===null){d=new Bc;g=b.qp;b=new L;b.og=H(16);F(b,b.od,C(625));e=b.od;if(g===null)g=C(2);F(b,e,g);F(b,b.od,C(626));b=Bi(b);d.oe=1;d.of=1;d.oi=b;E(d);}}}
let JY=(a,b,c,d)=>{TJ();a.Gp=255;a.Gr=255;a.Gt=255;a.At=Ny(255,255,255,a.Gs);JV();a.ze=ACb;Zx();a.Gh=AGn;a.Fn=0;My(a,b,c,null,null);}
let My=(a,b,c,d,e)=>{let f,g;if(e!==null){a.xV=e;a.qA=e.getWidth();a.qB=e.getHeight();}else if(d===null){a.qA=b;a.qB=c;}else{a.wt=d;a.qA=d.width;a.qB=d.height;}if(D0){d=new C8;f=BX(4);d.ow=(-1);d.oD=4;d.oj=4;CP();d.o9=CR;d.pg=0;d.o4=f;d.ok=0;d.oj=4;d.pW=1;d.py=0;d.o9=DT();}else{f=BX(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new C8;g=0+c|0;d.ow=(-1);d.oD=c;d.oj=c;CP();d.o9=CR;d.pg=0;d.o4=f;d.ok=0;d.oj=g;d.pW=0;d.py=0;}else{d=new O;d.oe=1;d.of=1;Bt(d);E(d);}}a.yE=d;JL();c=AHR;AHR=c+1|0;a.y1=c;Xv(d,0,c);C6(KO,
a.y1,a);}
let X5=a=>{let b,c;Jv();b=Jq.ry.document.createElement("canvas");a.sU=b;c=a.qA;b.width=c;b=a.sU;c=a.qB;b.height=c;b=a.sU.getContext("2d");a.p_=b;TJ();IF();c=Cp(HS.oq);b.globalCompositeOperation=c;}
let Ny=(b,c,d,e)=>{let f;TJ();f=new L;f.og=H(16);F(f,f.od,C(627));N(f,f.od,b,10);b=f.od;Bo(f,b,b+1|0);f.og.data[b]=44;N(f,f.od,c,10);b=f.od;Bo(f,b,b+1|0);f.og.data[b]=44;N(f,f.od,d,10);c=f.od;Bo(f,c,c+1|0);f.og.data[c]=44;ER(f,f.od,e);d=f.od;Bo(f,d,d+1|0);f.og.data[d]=41;return Bi(f);}
let Gu=a=>{let b,c;if(a.sU===null){X5(a);if(a.wt!==null){b=a.p_;IF();c=Cp(XU.qF);b.globalCompositeOperation=c;b=a.p_;c=a.wt;b.drawImage(c,0.0,0.0);b=a.p_;c=Cp(HS.qF);b.globalCompositeOperation=c;}if(a.xV!==null){c=a.p_;IF();b=Cp(XU.qF);c.globalCompositeOperation=b;b=a.p_;c=a.xV;b.drawImage(c,0.0,0.0);b=a.p_;c=Cp(HS.qF);b.globalCompositeOperation=c;}}}
let ZM=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m;k=a.pE;if(k===null){Gu(b);K5(a,b.sU,c,d,e,f,g,h,i,j);}else{l=b.pE.qi;m=k.qi;NR(l,m,c,d,e,f,g,h,i,j);}}
let Lw=a=>{let b;b=a.pE;if(b===null)return a.qA;return b.qq;}
let LJ=a=>{let b;b=a.pE;if(b===null)return a.qB;return b.qo;}
let Ss=a=>{let b,c;if(a.xd){b=new Bc;b.oe=1;b.of=1;b.oi=C(48);E(b);}JL();Jd(KO,a.y1);c=a.pE;if(c!==null)NK(c.qi);a.xd=1;}
let Y5=a=>{let b,c,d;b=a.pE;if(b===null)return 6408;d:{c=b.p2;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new Bc;d=new L;d.og=H(16);DI(d,d.od,DJ(C(49)));N(d,d.od,c,10);d=Bi(d);b.oe=1;b.of=1;b.oi=d;E(b);}c=6406;}return c;}
let X_=a=>{let b,c,d;b=a.pE;if(b===null)return 6408;d:{c=b.p2;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(49));N(d,d.od,c,10);d=Bi(d);b.oe=1;b.of=1;b.oi=d;E(b);}c=6406;}return c;}
let QR=a=>{let b,c,d;b=a.pE;if(b===null)return 5121;d:{c=b.p2;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break d;case 6:c=32819;break d;default:b=new Bc;d=new L;d.og=H(16);F(d,d.od,C(49));N(d,d.od,c,10);d=Bi(d);b.oe=1;b.of=1;b.oi=d;E(b);}c=5121;}return c;}
let UB=a=>{return a.yE;}
let K5=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;Gu(a);k=a.ze;JV();if(k===P3){a:{l=a.p_;k=Cp(ADR);l.fillStyle=k;l=a.p_;k=Cp(ADR);l.strokeStyle=k;l=a.p_;k="destination-out";l.globalCompositeOperation=k;a.p_.beginPath();m=a.p_;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);AEx();l=Xy;Gu(a);BaR();switch(AWX.data[l.on]){case 1:break;case 2:a.p_.stroke();break a;default:break a;}a.p_.fill();}a.p_.closePath();r=a.p_;l=Cp(a.At);r.fillStyle=l;r=a.p_;k=Cp(a.At);r.strokeStyle=k;r=a.p_;IF();l=Cp(HS.qF);r.globalCompositeOperation
=l;}if(e&&f&&i&&j){l=a.p_;n=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;l.drawImage(b,n,o,p,q,s,t,u,v);}a.IG=null;}
let APC=()=>{ADR=Ny(255,255,255,1.0);}
let I1=G(IM);
let AUM=a=>{let b,c;b=a.ok;if(b<a.oj){a.ok=b+1|0;return a.lM(b);}c=new I_;c.oe=1;c.of=1;E(c);}
let Ft=(a,b)=>{let c,d;if(a.lS()){c=new EW;c.oe=1;c.of=1;E(c);}d=a.ok;if(d<a.oj){a.ok=d+1|0;a.l1(d,b);return a;}c=new G1;c.oe=1;c.of=1;E(c);}
let Gd=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oj)return a.lM(b);c=new O;d=a.oj;e=new L;e.og=H(16);F(e,e.od,C(619));N(e,e.od,b,10);F(e,e.od,C(592));N(e,e.od,d,10);d=e.od;Bo(e,d,d+1|0);f=e.og;g=f.data;g[d]=41;h=new P;d=e.od;U();i=g.length;if(d>=0&&d<=(i-0|0)){h.oh=R(f.data,0,d);c.oe=1;c.of=1;c.oi=h;E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let U4=(a,b,c)=>{let d,e,f,g,h,i;if(a.lS()){d=new EW;d.oe=1;d.of=1;E(d);}if(b>=0&&b<a.oj){a.l1(b,c);return a;}d=new O;c=a.oj;e=new L;e.og=H(16);F(e,e.od,C(619));N(e,e.od,b,10);F(e,e.od,C(592));N(e,e.od,c,10);c=e.od;Bo(e,c,c+1|0);f=e.og;g=f.data;g[c]=41;h=new P;c=e.od;U();i=g.length;if(c>=0&&c<=(i-0|0)){h.oh=R(f.data,0,c);d.oe=1;d.of=1;d.oi=h;E(d);}d=new O;d.oe=1;d.of=1;Bt(d);E(d);}
let AP4=a=>{return a.lS();}
function HC(){let a=this;I1.call(a);a.wW=0;a.v1=0;a.vt=null;}
let A52=(a,b)=>{return a.vt.data[b+a.v1|0];}
let A4q=(a,b,c)=>{a.vt.data[b+a.v1|0]=c;}
let AIE=a=>{return a.wW;}
let IV=G(Fk);
let PN=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oj)return a.l2(b);c=new O;d=a.oj;e=new L;e.og=H(16);F(e,e.od,C(619));N(e,e.od,b,10);F(e,e.od,C(592));N(e,e.od,d,10);d=e.od;Bo(e,d,d+1|0);f=e.og;g=f.data;g[d]=41;h=new P;d=e.od;U();i=g.length;if(d>=0&&d<=(i-0|0)){h.oh=R(f.data,0,d);c.oe=1;c.of=1;c.oi=h;E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let NV=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.lS()){d=new EW;d.oe=1;d.of=1;E(d);}if(b>=0&&b<a.oj){a.lT(b,c);return a;}d=new O;e=a.oj;f=new L;f.og=H(16);F(f,f.od,C(619));N(f,f.od,b,10);F(f,f.od,C(592));N(f,f.od,e,10);e=f.od;Bo(f,e,e+1|0);g=f.og;h=g.data;h[e]=41;i=new P;e=f.od;U();j=h.length;if(e>=0&&e<=(j-0|0)){i.oh=R(g.data,0,e);d.oe=1;d.of=1;d.oi=i;E(d);}d=new O;d.oe=1;d.of=1;Bt(d);E(d);}
let A0y=a=>{return a.lS();}
function Jb(){let a=this;IV.call(a);a.zk=0;a.xF=0;a.xe=null;}
let ASF=(a,b)=>{return a.xe.data[b+a.xF|0];}
let ARS=(a,b,c)=>{a.xe.data[b+a.xF|0]=c;}
let A6d=a=>{return a.zk;}
let GP=G(BW);
let P3=null;let ACb=null;let Bfe=null;let JV=()=>{JV=Bk(GP);A10();}
let A10=()=>{let b,c;b=new GP;JV();b.oq=C(628);b.on=0;P3=b;c=new GP;c.oq=C(629);c.on=1;ACb=c;Bfe=S(GP,[b,c]);}
let Gx=G(BW);
let A_w=null;let AGn=null;let Bf3=null;let Zx=()=>{Zx=Bk(Gx);A8d();}
let A8d=()=>{let b,c;b=new Gx;Zx();b.oq=C(630);b.on=0;A_w=b;c=new Gx;c.oq=C(631);c.on=1;AGn=c;Bf3=S(Gx,[b,c]);}
function JU(){let a=this;MD.call(a);a.xL=null;a.qp=null;a.xX=null;}
let ASH=(a,b,c)=>{let d=new JU();M3(d,a,b,c);return d;}
let M3=(a,b,c,d)=>{Ns();if(d!==Rm&&d!==ANw&&d!==Zj){b=new Bc;c=new L;c.og=H(16);F(c,c.od,C(632));F(c,c.od,d===null?C(2):d.oq);F(c,c.od,C(633));c=Bi(c);b.oe=1;b.of=1;b.oi=c;E(b);}a.xL=b;b=NB(c,C(634),C(124));if(SX(b,C(124)))b=Cv(b,0,b.oh.length-1|0);a.qp=b;a.xX=d;}
let VC=a=>{return a.qp;}
let AH0=a=>{let b,c,d;b=a.qp;c=GX(b,47,b.oh.length-1|0);if(c<0)b=a.qp;else{b=a.qp;b=Cv(b,c+1|0,b.oh.length);}d=GX(b,46,b.oh.length-1|0);if(d==(-1))return b;return Cv(b,0,d);}
let Zg=a=>{let b,c,d,e,f;b=a.xX;Ns();if(b===Zj){if(M7===null){c=new Os;b=new JS;d=new S$;e=Eg.rR.HY;d.C2=window.localStorage;d.CQ=e;Bbp();b.wC=d;c.Ha=b;b=new JS;d=new TX;e=new CQ;e.pD=1;e.ox=Bs(D,16);d.Hd=e;d.DJ=F7(16,0.800000011920929);b.wC=d;c.C5=b;M7=c;}b=M7;return !AHu(b.C5,a)?Q4(b.Ha,a):Q4(b.C5,a);}c=Wz(a.xL,a.qp);if(c!==null)return c;c=new Bc;b=a.qp;d=new L;d.og=H(16);f=d.od;if(b===null)b=C(2);F(d,f,b);F(d,d.od,C(635));b=Bi(d);c.oe=1;c.of=1;c.oi=b;E(c);}
let Vz=(a,b)=>{let c,d,e,f,g,h;c=new JU;d=a.xL;if(a.qp.oh.length?0:1)e=C(43);else{e=a.qp;f=!SX(e,C(124))?C(124):C(43);g=new L;g.og=H(16);F(g,g.od,e);F(g,g.od,f);e=Bi(g);}g=new L;g.og=H(16);h=g.od;if(e===null)e=C(2);F(g,h,e);h=g.od;if(b===null)b=C(2);F(g,h,b);M3(c,d,Bi(g),a.xX);return c;}
let VF=a=>{let b,c,d;b=a.qp;c=Pc(b,C(124),b.oh.length);d=C(43);if(c>0)d=Cv(a.qp,0,c);return ASH(a.xL,d,a.xX);}
let A$Y=a=>{return a.qp;}
function AE6(){let a=this;D.call(a);a.qi=0;a.qq=0;a.qo=0;a.p2=0;a.xC=null;a.zI=null;}
let Bfb=(a,b,c,d)=>{let e=new AE6();AZ5(e,a,b,c,d);return e;}
let Bej=(a,b,c)=>{let d=new AE6();A$1(d,a,b,c);return d;}
let AZ5=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=X(4);a.xC=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];j;h[j]=k;j=j+1|0;}}a.zI=A8S(g,h,c,d);b=a.xC.data;a.qi=b[0];a.qq=b[1];a.qo=b[2];c=b[3];a.p2=c;if(e&&e!=c)ACM(a,e);}
let A$1=(a,b,c,d)=>{let e;e=X(4);a.xC=e;a.zI=ATj(e.data,b,c,d);e=a.xC.data;a.qi=e[0];a.qq=e[1];a.qo=e[2];a.p2=e[3];}
let ACM=(a,b)=>{let c,d,e,f,g;c=Bej(a.qq,a.qo,b);Ug(c.qi,0);d=a.qq;e=a.qo;f=a.qi;g=c.qi;NR(f,g,0,0,d,e,0,0,d,e);NK(a.qi);a.qi=c.qi;a.p2=c.p2;a.qo=c.qo;a.xC=c.xC;a.zI=c.zI;a.qq=c.qq;}
let A8S=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let ATj=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let NK=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);}
let NR=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
let Ug=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
let It=G(IQ);
let AGv=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oj)return a.l_(b);c=new O;d=a.oj;e=new L;e.og=H(16);F(e,e.od,C(619));N(e,e.od,b,10);F(e,e.od,C(592));N(e,e.od,d,10);d=e.od;Bo(e,d,d+1|0);f=e.og;g=f.data;g[d]=41;h=new P;d=e.od;U();i=g.length;if(d>=0&&d<=(i-0|0)){h.oh=R(f.data,0,d);c.oe=1;c.of=1;c.oi=h;E(c);}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let A3E=a=>{return a.lS();}
function KV(){let a=this;It.call(a);a.Bd=0;a.yo=0;a.y$=null;}
let ANv=(a,b)=>{return a.y$.data[b+a.yo|0];}
let A3e=(a,b,c)=>{a.y$.data[b+a.yo|0]=c;}
let A0o=a=>{return a.Bd;}
let Zf=G();
function DN(){BW.call(this);this.sR=0;}
let AQl=null;let Bbq=null;let BbQ=null;let Bbd=null;let BbM=null;let BgD=null;let BaO=null;let BaT=null;let ALE=()=>{ALE=Bk(DN);AKB();}
let AKB=()=>{let b,c,d,e,f,g,h;b=new DN;ALE();b.oq=C(636);b.on=0;b.sR=9728;AQl=b;c=new DN;c.oq=C(637);c.on=1;c.sR=9729;Bbq=c;d=new DN;d.oq=C(638);d.on=2;d.sR=9987;BbQ=d;e=new DN;e.oq=C(639);e.on=3;e.sR=9984;Bbd=e;f=new DN;f.oq=C(640);f.on=4;f.sR=9985;BbM=f;g=new DN;g.oq=C(641);g.on=5;g.sR=9986;BgD=g;h=new DN;h.oq=C(642);h.on=6;h.sR=9987;BaO=h;BaT=S(DN,[b,c,d,e,f,g,h]);}
function F5(){BW.call(this);this.yN=0;}
let Bcv=null;let ATo=null;let Bbt=null;let BcB=null;let AW$=()=>{AW$=Bk(F5);A2J();}
let A2J=()=>{let b,c,d;b=new F5;AW$();b.oq=C(643);b.on=0;b.yN=33648;Bcv=b;c=new F5;c.oq=C(644);c.on=1;c.yN=33071;ATo=c;d=new F5;d.oq=C(645);d.on=2;d.yN=10497;Bbt=d;BcB=S(F5,[b,c,d]);}
let Xm=G();
let A$O=(a,b)=>{b=a.bq(b);BR();return b===null?null:b instanceof HM()&&b instanceof Ev?b.oW:b;}
let ALe=a=>{return a.gc();}
function H6(){let a=this;IV.call(a);a.uh=null;a.E3=0;a.we=0;}
let A6l=a=>{return a.E3;}
let AS2=a=>{return a.uh.o4.data;}
let Ou=G(H6);
let APX=(a,b)=>{let c;c=a.uh.o4.data;b=a.we+(b*4|0)|0;return HA((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);}
let A69=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:H7(c);e=a.uh.o4.data;b=a.we+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;}
let PA=G(H6);
let AXi=(a,b)=>{let c;c=a.uh.o4.data;b=a.we+(b*4|0)|0;return HA(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);}
let A3S=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:H7(c);e=a.uh.o4.data;b=a.we+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;}
function IK(){let a=this;It.call(a);a.ud=null;a.C4=0;a.xh=0;}
let A2s=a=>{return a.C4;}
let A7D=a=>{return a.ud.o4.data;}
let RV=G(IK);
let A0c=(a,b)=>{let c;c=a.ud.o4.data;b=a.xh+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;}
let AZG=(a,b,c)=>{let d;d=a.ud.o4.data;b=a.xh+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;}
let SV=G(IK);
let A5U=(a,b)=>{let c;c=a.ud.o4.data;b=a.xh+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;}
let A0f=(a,b,c)=>{let d;d=a.ud.o4.data;b=a.xh+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;}
let Hk=G(B0);
let EW=G(Hk);
function I$(){let a=this;I1.call(a);a.w9=null;a.Dk=0;a.wp=0;}
let APN=a=>{return a.Dk;}
let OB=G(I$);
let ANr=(a,b)=>{let c;c=a.w9.o4.data;b=a.wp+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;}
let AID=(a,b,c)=>{let d;d=a.w9.o4.data;b=a.wp+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;}
let TO=G(I$);
let AUo=(a,b)=>{let c;c=a.w9.o4.data;b=a.wp+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;}
let AJ6=(a,b,c)=>{let d;d=a.w9.o4.data;b=a.wp+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;}
let I_=G(B0);
let Ex=G(BW);
let ANw=null;let Rm=null;let Be$=null;let Baw=null;let Zj=null;let Bb6=null;let Ns=()=>{Ns=Bk(Ex);AMQ();}
let AMQ=()=>{let b,c,d,e,f;b=new Ex;Ns();b.oq=C(646);b.on=0;ANw=b;c=new Ex;c.oq=C(647);c.on=1;Rm=c;d=new Ex;d.oq=C(648);d.on=2;Be$=d;e=new Ex;e.oq=C(649);e.on=3;Baw=e;f=new Ex;f.oq=C(650);f.on=4;Zj=f;Bb6=S(Ex,[b,c,d,e,f]);}
function FY(){let a=this;LH.call(a);a.y2=null;a.xS=null;}
let Wl=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=a.y2;e=0;f=0;g=a.xS;b:{while(true){if((e+32|0)>f){h=b.ok;i=b.oj;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;Ov(b,d,j,f-j|0);e=0;}}j=c.ok;m=c.oj;if(!(j>=m?0:1)){j=b.ok>=b.oj?0:1;n=!j&&e>=f?DW:DK;break b;}k=g.data;h=m-j|0;m=k.length;if(h<m)m=h;o=new R4;o.wh=b;o.sO=c;n=a.mb(d,e,f,g,0,m,o);e=o.wR;l=o.wY;if(n===null){j=b.ok>=b.oj?0:1;if(!j&&e>=f)n=DW;else if(!(c.ok>=c.oj?0:1)&&e>=f)n=DK;}U9(c,g,0,l);if
(n!==null)break;}}CH(b,b.ok-(f-e|0)|0);return n;}
let O7=G(FY);
let APF=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;n=h.sO;if((n.oj-n.ok|0)<2?0:1)break b;i=DK;break b;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{o=l&64512;m=B9(o,55296);c=m?0:1;if(!(!c&&!(o!=56320?0:1)?0:1)){if((f+3|0)>g){j=j+(-1)|0;n=h.sO;if((n.oj-n.ok|0)<3?0:1)break b;i=DK;break b;}k=e.data;c=f+1|0;k[f]=(224|l>>12)<<24>>24;f
=c+1|0;k[c]=(128|l>>6&63)<<24>>24;m=f+1|0;k[f]=(128|l&63)<<24>>24;}else{if(!(m?0:1)){i=new CZ;i.pb=2;i.pA=1;break b;}if(j>=d){n=h.wh;if(n.ok>=n.oj?0:1)break b;i=DW;break b;}p=j+1|0;m=k[j];if(!((m&64512)!=56320?0:1)){j=p+(-2)|0;i=new CZ;i.pb=2;i.pA=1;break b;}if((f+4|0)>g){j=p+(-2)|0;n=h.sO;if((n.oj-n.ok|0)<4?0:1)break b;i=DK;break b;}k=e.data;o=((l&1023)<<10|m&1023)+65536|0;m=f+1|0;k[f]=(240|o>>18)<<24>>24;c=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=c+1|0;k[c]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j
=p;}}c=j;f=m;}j=c;}h.wR=j;h.wY=f;return i;}
let FH=G(Da);
function H2(){D.call(this);this.FA=null;}
function Y7(){let a=this;H2.call(a);a.zK=null;a.BO=null;a.wd=0;a.z8=0;a.EH=0;a.Gc=0;}
let BbK=(a,b)=>{let c=new Y7();A0O(c,a,b);return c;}
let A0O=(a,b,c)=>{a.FA=new D;a.Gc=(-1);if(c<0){b=new V;b.oe=1;b.of=1;E(b);}a.zK=b;if(64>c)c=64;a.BO=H(c);}
let Yv=a=>{let b;b=a.zK;if(b!==null){b.EQ.mc();a.zK=null;return;}b=new FH;b.oe=1;b.of=1;E(b);}
let IC=a=>{let b,c,d,e;if(a.zK===null){b=new FH;b.oe=1;b.of=1;E(b);}if(a.EH&&a.wd>=a.z8)return null;b=new L;b.og=H(16);d:{while(true){if(a.wd>=a.z8&&!Qa(a,0))break d;c=a.BO.data;d=a.wd;e=d+1|0;a.wd=e;d=c[d];if(d==10)break;if(d==13){if(e>=a.z8&&!Qa(a,0))break d;c=a.BO.data;e=a.wd;if(c[e]!=10)break d;a.wd=e+1|0;break d;}e=b.od;Bo(b,e,e+1|0);b.og.data[e]=d;}}return Bi(b);}
let Qa=(a,b)=>{let c,d;if(a.EH)return 0;a:{while(true){c=a.BO;d=c.data.length;if(b>=d)break a;d=X1(a.zK,c,b,d-b|0);if(d==(-1)){a.EH=1;break a;}if(!d)break;b=b+d|0;}}a.z8=b;a.wd=0;a.Gc=(-1);return 1;}
function Wn(){let a=this;H2.call(a);a.EQ=null;a.EY=null;a.J4=null;a.sQ=null;a.Jf=null;a.v0=null;a.Cp=0;a.EV=0;}
let BdF=a=>{let b=new Wn();AIT(b,a);return b;}
let Bi0=(a,b)=>{let c=new Wn();AGt(c,a,b);return c;}
let AIT=(a,b)=>{let c,d;Dn();c=Du;d=new Qj;ABg(d,c,0.3333333432674408,0.5);d.GT=BX(512);d.Hz=H(512);EN();c=Fx;if(c!==null){d.yX=c;d.DE=c;AGt(a,b,d);return;}c=new V;c.oe=1;c.of=1;c.oi=C(651);E(c);}
let AGt=(a,b,c)=>{let d,e,f,g,h,i;a.FA=new D;d=BX(8192);e=d.data;a.J4=d;f=e.length;if(f>=0&&f<=(f-0|0)){g=new C8;h=0+f|0;g.ow=(-1);g.oD=f;g.oj=f;CP();g.o9=CR;g.pg=0;g.o4=d;g.ok=0;g.oj=h;g.pW=0;g.py=0;a.sQ=g;e=H(1024);d=e.data;a.Jf=e;h=d.length;g=new Jx;i=0+h|0;g.ow=(-1);g.oD=h;g.oj=h;g.ok=0;g.oj=i;g.v5=0;g.xH=0;g.uL=e;a.v0=g;a.EQ=b;a.EY=c;CH(g,i);b=a.sQ;CH(b,b.oj);return;}b=new O;b.oe=1;b.of=1;E(b);}
let X1=(a,b,c,d)=>{let e,f,g,h;if(a.EV){e=a.v0;if(!(e.ok>=e.oj?0:1))return (-1);}f=0;k:{while(d>0){e=a.v0;g=e.oj-e.ok|0;if(d<g)g=d;Ov(e,b,c+f|0,g);d=d-g|0;f=f+g|0;e=a.v0;h=e.ok>=e.oj?0:1;if(!h&&!AHT(a))break k;}}return f;}
let AHT=a=>{let b,c,d;if(a.EV)return 0;Wa(a.v0);a:{while(true){b=a.sQ;c=b.ok>=b.oj?0:1;if(!c&&!Ut(a))break a;d=(ADA(a.EY,a.sQ,a.v0,a.Cp)).pb;if(d!=1?0:1)break;if(d?0:1)Ut(a);}}b=a.sQ;c=b.ok>=b.oj?0:1;if(!c&&a.Cp){b=a.EY;d=b.Aq;if(d!=3&&d!=2){b=new Cb;b.oe=1;b.of=1;E(b);}b.Aq=3;if(DW.pb?0:1)a.EV=1;}b=a.v0;b.oj=b.ok;b.ok=0;b.ow=(-1);return 1;}
let Ut=a=>{let b,c,d;if(a.Cp)return 0;YS(a.sQ);a:{while(true){b=a.sQ;c=b.ok;d=b.oj;if(!(c>=d?0:1))break a;c=a.EQ.mm(b.o4,c,d-c|0);if(c==(-1)){a.Cp=1;break a;}b=a.sQ;CH(b,b.ok+c|0);if(!c)break;}}b=a.sQ;b.oj=b.ok;b.ok=0;b.ow=(-1);return 1;}
function ABy(){let a=this;D.call(a);a.rc=null;a.tS=null;a.DH=0;a.qj=0;}
let AAC=(a,b)=>{let c=new ABy();A9r(c,a,b);return c;}
let A9r=(a,b,c)=>{if(b!==null){a.rc=b;a.tS=c;a.DH=0;a.qj=0;return;}b=new Dv;b.oe=1;b.of=1;E(b);}
let Vo=a=>{let b,c,d,e;if(a.tS===null){b=new Dv;b.oe=1;b.of=1;E(b);}a:{k:{c=a.rc.oh.length;d=a.qj;if(d<c){if(a.DH)return 1;while(true){if(d>=c)break k;b=a.tS;e=a.rc;if(d<0)break a;if(d>=e.oh.length)break a;if(E$(b,e.oh.charCodeAt(d),0)==(-1))return 1;d=d+1|0;}}}return 0;}b=new Ba;b.oe=1;b.of=1;E(b);}
let B8=a=>{let b,c,d,e,f,g,h;if(a.tS===null){b=new Dv;b.oe=1;b.of=1;E(b);}c=a.qj;d=a.rc.oh.length;if(c<d){if(a.DH){b=a.tS;e=a.rc;f=a.qj;if(f>=0&&f<e.oh.length){if(E$(b,e.oh.charCodeAt(f),0)>=0){b=a.rc;c=a.qj;a.qj=c+1|0;if(c>=0&&c<b.oh.length){c=b.oh.charCodeAt(c);b=new P;g=H(1);h=g.data;h[0]=c;b.oh=R(g.data,0,h.length);return b;}b=new Ba;b.oe=1;b.of=1;E(b);}a.qj=a.qj+1|0;bf:{while(true){f=a.qj;if(f>=d){b=a.rc;return Cv(b,c,b.oh.length);}b=a.tS;e=a.rc;if(f<0)break bf;if(f>=e.oh.length)break bf;if(E$(b,e.oh.charCodeAt(f),
0)>=0)break;a.qj=a.qj+1|0;}return Cv(a.rc,c,a.qj);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}h:{while(true){f=B9(c,d);if(f>=0)break h;b=a.tS;e=a.rc;if(c<0)break;if(c>=e.oh.length)break;if(E$(b,e.oh.charCodeAt(c),0)<0)break h;c=c+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}a.qj=c;if(f<0){a.qj=c+1|0;i:{while(true){f=a.qj;if(f>=d){b=a.rc;return Cv(b,c,b.oh.length);}b=a.tS;e=a.rc;if(f<0)break i;if(f>=e.oh.length)break i;if(E$(b,e.oh.charCodeAt(f),0)>=0)break;a.qj=a.qj+1|0;}return Cv(a.rc,c,a.qj);}b=new Ba;b.oe
=1;b.of=1;E(b);}}b=new Mu;b.oe=1;b.of=1;E(b);}
let Py=G();
let AUE=null;let Rz=b=>{let $$je;b:{if(b!==null)try{Yv(b);break b;}catch($$e){$$je=BH($$e);if($$je instanceof Eb){}else{throw $$e;}}}}
let ATR=()=>{AUE=BX(0);}
function UE(){let a=this;D.call(a);a.ts=null;a.G7=0;a.DX=null;a.y3=null;a.Gv=0;a.Ii=0.0;a.Ih=0.0;a.Cr=null;a.Ir=0.0;a.r8=null;a.vj=null;a.xI=null;a.D7=null;}
let Bg5=null;let Bfa=()=>{Bfa=Bk(UE);AQg();}
let Bf$=(a,b)=>{let c=new UE();AHU(c,a,b);return c;}
let AHU=(a,b,c)=>{let d,e,f,g,h,i;Bfa();d=new CQ;d.pD=1;d.ox=Bs(D,16);a.DX=d;d=new CQ;d.pD=1;d.ox=Bs(D,16);a.y3=d;d=new BD;Fp();d.p0=1.0;d.pZ=1.0;d.pY=1.0;d.pX=1.0;Eh(d);a.Cr=d;a.ts=b;a.G7=c;e=b.t7.oo;if(!e){b=new V;b.oe=1;b.of=1;b.oi=C(652);E(b);}a:{a.r8=Bs(LA(Fu),e);a.vj=X(e);if(e>1){f=Bs(Et,e);g=f.data;a.xI=f;h=0;i=g.length;while(true){if(h>=i)break a;b=new Et;b.rf=1;b.pI=X(16);g[h]=b;h=h+1|0;}}}a.D7=X(e);}
let O_=(a,b)=>{let c,d,e,f,g,h,i;c=a.ts.t7;d=0;e=a.r8.data.length;while(d<e){f=a.vj.data;if(f[d]>0){g=a.r8.data[d];if(d>=c.oo){h=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,d,10);F(b,b.od,C(38));i=c.oo;N(b,b.od,i,10);b=Bi(b);h.oe=1;h.of=1;h.oi=b;E(h);}Yh(b,c.ox.data[d].zD,g,0,f[d]);}d=d+1|0;}}
let T6=a=>{let b,c,d,e,f,g,h;a.Ii=0.0;a.Ih=0.0;Zb(a.y3,1);b=a.y3;c=b.ox;d=0;e=b.oo;f=null;if(d>e){b=new V;b.oe=1;b.of=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oo=0;b=a.DX;c=b.ox;d=0;e=b.oo;f=null;if(d>e){b=new V;b.oe=1;b.of=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oo=0;e=0;c=a.vj.data;h=c.length;while(e<h){g=a.xI;if(g!==null)g.data[e].o8=0;c[e]=0;e=e+1|0;}}
let ACd=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{if(a.r8.data.length==1)Ux(a,0,b.qC);else{c=a.D7.data;d=0;e=c.length;if(d>e){b=new V;b.oe=1;b.of=1;E(b);}while(d<e){f=d+1|0;c[d]=0;d=f;}g=0;b=b.qn;d=b.oo;while(true){f=B9(g,d);if(f>=0)break;if(f>=0){h=new O;i=new L;i.og=H(16);F(i,i.od,C(37));N(i,i.od,g,10);F(i,i.od,C(38));g=b.oo;N(i,i.od,g,10);b=Bi(i);h.oe=1;h.of=1;h.oi=b;E(h);}i=b.ox.data[g].pG;j=i.ox;k=0;l=i.oo;while(k<l){f=j.data[k].xA;c[f]=c[f]+1|0;k=k+1|0;}g=g+1|0;}g=0;while(true){if(g>=e)break a;Ux(a,g,c[g]);g
=g+1|0;}}}}
let Ux=(a,b,c)=>{let d,e,f,g;d=a.xI;if(d!==null){e=d.data;if(c>e[b].pI.data.length)Ze(e[b],c-e[b].o8|0);}d=a.vj.data;f=d[b]+(c*20|0)|0;e=a.r8.data;g=e[b];if(g===null)e[b]=CU(f);else if(g.data.length<f){e=CU(f);CY(g,0,e,0,d[b]);a.r8.data[b]=e;}}
let WK=(a,b)=>{let c,d,e,f,g;c=Bs(LA(Fu),b);d=a.r8;CY(d,0,c,0,d.data.length);a.r8=c;e=X(b);c=a.vj;CY(c,0,e,0,c.data.length);a.vj=e;d=Bs(Et,b);f=0;e=a.xI;if(e!==null){f=e.data.length;CY(e,0,d,0,f);}e=d.data;while(f<b){g=new Et;g.rf=1;g.pI=X(16);e[f]=g;f=f+1|0;}a.xI=d;a.D7=X(b);}
let Qb=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;e=b.qn.oo;if(!e)return;f=a.r8.data.length;g=a.ts.t7.oo;if(f<g)WK(a,g);Dj(a.DX,b);ACd(a,b);h=b.p1;i=0;j=0;g=0;k=0.0;l=0;while(l<e){m=b.qn;if(l>=m.oo){n=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,l,10);F(b,b.od,C(38));f=m.oo;N(b,b.od,f,10);b=Bi(b);n.oe=1;n.of=1;n.oi=b;E(n);}m=m.ox.data[l];n=m.pG;o=n.ox;p=m.pU.pQ;q=c+m.sc;r=d+m.Ax;s=0;t=n.oo;while(s<t){u=g+1|0;if(g==j){f=i+1|0;if(f>=h.o8){m=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,f,10);F(b,
b.od,C(38));f=h.o8;N(b,b.od,f,10);b=Bi(b);m.oe=1;m.of=1;m.oi=b;E(m);}k=HA(h.pI.data[f]&(-16777217));i=f+1|0;f=B9(i,h.o8);if(f>=0)j=(-1);else{if(f>=0){m=new O;b=new L;b.og=H(16);F(b,b.od,C(37));N(b,b.od,i,10);F(b,b.od,C(38));f=h.o8;N(b,b.od,f,10);b=Bi(b);m.oe=1;m.of=1;m.oi=b;E(m);}j=h.pI.data[i];}}v=p.data;w=o.data;q=q+v[s];Z4(a,w[s],q,r,k);s=s+1|0;g=u;}l=l+1|0;}Fp();a.Ir=AFT;}
let Z4=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.ts.xT;g=f.tu;h=f.GB;i=c+b.rl*g;j=d+b.w2*h;k=b.qK*g;l=b.rd*h;m=b.Fb;n=b.GU;o=b.CA;p=b.Ef;if(a.G7){i=i+FJ(i)*0.5|0;j=j+FJ(j)*0.5|0;k=k+FJ(k)*0.5|0;l=l+FJ(l)*0.5|0;}q=i+k;r=j+l;s=b.xA;t=a.vj.data;u=t[s];t[s]=t[s]+20|0;t=a.xI;if(t!==null){b=t.data[s];v=a.Gv;a.Gv=v+1|0;Gp(b,v);}t=a.r8.data[s].data;v=u+1|0;t[u]=i;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=o;w=v+1|0;t[v]=i;s=w+1|0;t[w]=r;v=s+1|0;t[s]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=p;w=v
+1|0;t[v]=q;v=w+1|0;t[w]=r;w=v+1|0;t[v]=e;v=w+1|0;t[w]=n;w=v+1|0;t[v]=p;v=w+1|0;t[w]=q;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=n;t[w]=o;}
let WM=(a,b,c,d)=>{Qb(a,b,c,d+a.ts.xT.y8);}
let AQg=()=>{let b;b=new BD;Fp();b.p0=1.0;b.pZ=1.0;b.pY=1.0;b.pX=1.0;Eh(b);Bg5=b;}
let DS=G(BW);
let A23=null;let Bcf=null;let A2t=null;let A7n=null;let A4c=null;let ANR=null;let H_=null;let Bfy=null;let IR=()=>{IR=Bk(DS);AW8();}
let Iy=b=>{let c,d;IR();if(b==1)return A23;if(b==2)return A2t;if(b==5)return A7n;if(b==6)return A4c;if(b==3)return ANR;if(b==4)return H_;c=new Bc;d=new L;d.og=H(16);F(d,d.od,C(653));N(d,d.od,b,10);d=Bi(d);c.oe=1;c.of=1;c.oi=d;E(c);}
let AW8=()=>{let b,c,d,e,f,g,h;b=new DS;IR();b.oq=C(242);b.on=0;A23=b;c=new DS;c.oq=C(654);c.on=1;Bcf=c;d=new DS;d.oq=C(655);d.on=2;A2t=d;e=new DS;e.oq=C(656);e.on=3;A7n=e;f=new DS;f.oq=C(657);f.on=4;A4c=f;g=new DS;g.oq=C(658);g.on=5;ANR=g;h=new DS;h.oq=C(659);h.on=6;H_=h;Bfy=S(DS,[b,c,d,e,f,g,h]);}
let Kl=G();
let Yn=0;let Tx=null;let P2=null;let AFA=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:H7(b);c.Fl=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.C9=0;c.C0=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Dh(Bd(I(d),I(8388608)),M)){d=d<<1;f=f+(-1)|0;}}g=P2;h=A6n(g,0,g.data.length,f);if(h<0)h= -h|0;g=P2.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=Tx.data[e];j=Bd(I(d),B(4294967295, 0));k=Z(Q(W(j,Bd(I(e),B(4294967295, 0))),32-i|0));if(k<Yn){while(Gy(k,Yn)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=
P2.data;e=h+1|0;i=9+(f-g[e]|0)|0;k=Z(Q(W(j,Bd(I(Tx.data[e]),B(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=Tx.data;f=h+1|0;e=g[f];m=i-1|0;n=W(Bd(I(l),B(4294967295, 0)),Bd(I(e),B(4294967295, 0)));e=32-m|0;o=Z(Q(n,e));p=Z(Q(W(Bd(I(d-1|0),B(4294967295, 0)),Bd(I(g[f]),B(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(Gy(ED(k,r),ED(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(Gy(ED(k,l),ED(o,l))>=0)break;m=l;}s=Gy(q,m);d=s>0?C7(ED(k,q),q):s<0?C7(ED(k,m),m)+m|0:C7(ED((k+(m/2|0)|0),m),m);if(E9(I(d),I(1000000000))
>=0)while(true){h=h+1|0;d=ED(d,10);if(Gy(d,1000000000)<0)break;}else if(Gy(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.C9=d;c.C0=h-50|0;}
let ADq=()=>{Yn=ED((-1),10);Tx=E2([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);P2=E2([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
let Mw=G();
let AXL=null;let A2K=null;let AH2=(b,c,d)=>{let e,f,g,h,i,j;e=50+c|0;if(b){f=AXL.data;if(e<=f.length&&e>=0){g=GF(W(Bd(I(b),B(4294967295, 0)),Bd(I(f[e]),B(4294967295, 0))));h=A2K.data[e]-1|0;i=(32-Ef(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){c=( -c|0)+1|0;e=32;if(c<e)e=c;b=b>>e;c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return HA(j);}}return HA(!d?0:(-2147483648));}
let ZN=()=>{AXL=E2([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);A2K=E2([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
let G8=G(BW);
let Xy=null;let AZv=null;let AUb=null;let AEx=()=>{AEx=Bk(G8);AWz();}
let AWz=()=>{let b,c;b=new G8;AEx();b.oq=C(660);b.on=0;Xy=b;c=new G8;c.oq=C(661);c.on=1;AZv=c;AUb=S(G8,[b,c]);}
function C5(){BW.call(this);this.qF=null;}
let XU=null;let BdG=null;let A_9=null;let Bda=null;let Bcn=null;let Bg1=null;let BdK=null;let BeF=null;let BeW=null;let HS=null;let BfM=null;let Bb$=null;let IF=()=>{IF=Bk(C5);A1V();}
let A1V=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new C5;IF();b.oq=C(662);b.on=0;b.qF=C(663);XU=b;c=new C5;c.oq=C(664);c.on=1;c.qF=C(665);BdG=c;d=new C5;d.oq=C(666);d.on=2;d.qF=C(667);A_9=d;e=new C5;e.oq=C(668);e.on=3;e.qF=C(669);Bda=e;f=new C5;f.oq=C(670);f.on=4;f.qF=C(671);Bcn=f;g=new C5;g.oq=C(672);g.on=5;g.qF=C(673);Bg1=g;h=new C5;h.oq=C(674);h.on=6;h.qF=C(675);BdK=h;i=new C5;i.oq=C(676);i.on=7;i.qF=C(677);BeF=i;j=new C5;j.oq=C(678);j.on=8;j.qF=C(679);BeW=j;k=new C5;k.oq=C(680);k.on=9;k.qF=C(681);HS=k;l=new C5;l.oq
=C(682);l.on=10;l.qF=C(683);BfM=l;Bb$=S(C5,[b,c,d,e,f,g,h,i,j,k,l]);}
let GE=G(BW);
let AJ1=null;let AT3=null;let Bd6=null;let AJe=()=>{AJe=Bk(GE);AZW();}
let AZW=()=>{let b,c;b=new GE;AJe();b.oq=C(684);b.on=0;AJ1=b;c=new GE;c.oq=C(685);c.on=1;AT3=c;Bd6=S(GE,[b,c]);}
let Uc=G();
let Ww=0;let AGG=(b,c,d,e)=>{let f,g,h,i,j,k,l;if(!Ww){SQ(b,c,d,e);return;}RL();f=PD;if(f!==AA4&&f!==f&&f!==AGA)AGp(b,c,d,e);else{g=Cd;f=c.pE;if(f===null)h=6408;else o:{e=f.p2;switch(e){case 1:h=6406;break o;case 2:h=6410;break o;case 3:case 5:h=6407;break o;case 4:case 6:h=6408;break o;default:}c=new Bc;g=new L;g.og=H(16);EA(g,g.od,C(49));N(g,g.od,e,10);g=Bi(g);c.oe=1;c.of=1;c.oi=g;E(c);}i=f===null?c.qA:f.qq;j=f===null?c.qB:f.qo;if(f===null)k=6408;else v:{k=f.p2;switch(k){case 1:k=6406;break v;case 2:k=6410;break v;case 3:case 5:k
=6407;break v;case 4:case 6:k=6408;break v;default:}c=new Bc;g=new L;Dm(g);g.og=H(16);AIa(g,g.od,C(49));N(g,g.od,k,10);g=Bi(g);c.oe=1;c.of=1;c.oi=g;E(c);}if(f===null)l=5121;else bj:{l=f.p2;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break bj;case 6:l=32819;break bj;default:c=new Bc;g=new L;g.og=H(16);EA(g,g.od,C(49));N(g,g.od,l,10);g=Bi(g);c.oe=1;c.of=1;c.oi=g;E(c);}l=5121;}g.cn(b,0,h,i,j,0,k,l,c.yE);Bq.my(b);}}
let AGp=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=Bb.w8.getExtension("GL_ARB_framebuffer_object")===null?0:1;k:{if(!f&&!(Bb.w8.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bq.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CN;h.oJ=g;i=h;g.classObject=i;}}if(h.oV===null)h.oV=Bv(h.oJ.$meta.name);h=h.oV;if(h===C(686))f=1;else if(!(C(686) instanceof P))f=0;else{j=C(686);f=h.oh!==j.oh?0:1;}if(!f&&GK===null){SQ(b,c,d,e);break k;}}j=Cd;h=c.pE;if(h===null)f=6408;else m:{e=h.p2;switch(e)
{case 1:f=6406;break m;case 2:f=6410;break m;case 3:case 5:f=6407;break m;case 4:case 6:f=6408;break m;default:}c=new Bc;j=new L;j.og=H(16);DI(j,j.od,DJ(C(49)));N(j,j.od,e,10);j=Bi(j);c.oe=1;c.of=1;c.oi=j;E(c);}k=h===null?c.qA:h.qq;l=h===null?c.qB:h.qo;if(h===null)m=6408;else bo:{m=h.p2;switch(m){case 1:m=6406;break bo;case 2:m=6410;break bo;case 3:case 5:m=6407;break bo;case 4:case 6:m=6408;break bo;default:}c=new Bc;j=new L;j.og=H(16);EA(j,j.od,C(49));N(j,j.od,m,10);j=Bi(j);c.oe=1;c.of=1;c.oi=j;E(c);}if(h
===null)n=5121;else bp:{n=h.p2;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break bp;case 6:n=32819;break bp;default:c=new Bc;j=new L;j.og=H(16);DI(j,j.od,DJ(C(49)));N(j,j.od,n,10);j=Bi(j);c.oe=1;c.of=1;c.oi=j;E(c);}n=5121;}j.cn(b,0,f,k,l,0,m,n,c.yE);Bq.my(b);}}
let SQ=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;f=Cd;g=c.pE;if(g===null)h=6408;else d:{i=g.p2;switch(i){case 1:h=6406;break d;case 2:h=6410;break d;case 3:case 5:h=6407;break d;case 4:case 6:h=6408;break d;default:}c=new Bc;f=new L;f.og=H(16);DI(f,f.od,DJ(C(49)));N(f,f.od,i,10);f=Bi(f);c.oe=1;c.of=1;c.oi=f;E(c);}j=g===null?c.qA:g.qq;k=g===null?c.qB:g.qo;if(g===null)l=6408;else h:{l=g.p2;switch(l){case 1:l=6406;break h;case 2:l=6410;break h;case 3:case 5:l=6407;break h;case 4:case 6:l=6408;break h;default:}c=new Bc;f
=new L;f.og=H(16);EA(f,f.od,C(49));N(f,f.od,l,10);f=Bi(f);c.oe=1;c.of=1;c.oi=f;E(c);}if(g===null)m=5121;else bq:{m=g.p2;switch(m){case 1:case 2:case 3:case 4:m=5121;break bq;case 5:m=33635;break bq;case 6:m=32819;break bq;default:}c=new Bc;f=new L;f.og=H(16);DI(f,f.od,DJ(C(49)));N(f,f.od,m,10);f=Bi(f);c.oe=1;c.of=1;c.oi=f;E(c);}f.cn(b,0,h,j,k,0,l,m,c.yE);if(Bq===null&&d!=e){c=new Bc;c.oe=1;c.of=1;c.oi=C(687);E(c);}f=c.pE;n=(f===null?c.qA:f.qq)/2|0;i=(f===null?c.qB:f.qo)/2|0;h=1;while(n>0&&i>0){o=new Ih;f=c.pE;if
(f===null){IR();f=H_;}else f=Iy(f.p2);JY(o,n,i,f);JV();f=P3;o.ze=f;g=o.pE;if(g===null){Gu(o);g=o.p_;IF();p=Cp(HS.oq);g.globalCompositeOperation=p;}else{e=f!==f?1:0;Ug(g.qi,e);}f=c.pE;ZM(o,c,0,0,f===null?c.qA:f.qq,f===null?c.qB:f.qo,0,0,n,i);if(h>1)Ss(c);Cd.cn(b,h,X_(o),Lw(o),LJ(o),0,Y5(o),QR(o),UB(o));n=Lw(o)/2|0;i=LJ(o)/2|0;h=h+1|0;c=o;}}
let A32=()=>{Ww=1;}
let T1=G();
let AWX=null;let BaR=()=>{BaR=Bk(T1);A$T();}
let A$T=()=>{let b,c;AEx();b=X((AUb.t()).data.length);c=b.data;AWX=b;c[Xy.on]=1;c[AZv.on]=2;}
function NQ(){let a=this;D.call(a);a.Ji=null;a.IW=0.0;a.Ix=0.0;a.vA=null;a.yX=null;a.DE=null;a.Aq=0;}
let ABg=(a,b,c,d)=>{let e;a.vA=C(688);EN();e=Gz;a.yX=e;a.DE=e;if(c<=0.0){b=new V;e=new L;e.og=H(16);F(e,e.od,C(689));ER(e,e.od,c);e=Bi(e);b.oe=1;b.of=1;b.oi=e;E(b);}if(d>0.0){a.Ji=b;a.IW=c;a.Ix=d;return;}b=new V;e=new L;e.og=H(16);F(e,e.od,C(690));ER(e,e.od,d);e=Bi(e);b.oe=1;b.of=1;b.oi=e;E(b);}
let ADA=(a,b,c,d)=>{let e,f,g,h,i,$$je;e=a.Aq;if(!(e==2&&!d)&&e!=3){a.Aq=d?2:1;while(true){try{f=AAG(a,b,c);}catch($$e){$$je=BH($$e);if($$je instanceof B0){g=$$je;b=new Nw;b.oe=1;b.of=1;b.qd=g;E(b);}else{throw $$e;}}e=f.pb;if(e!=1?0:1)break;if(e?0:1){if(d){d=b.ok;h=b.oj;if(d>=h?0:1){g=a.yX;EN();if(g===Gz){h=h-d|0;b=new CZ;b.pb=2;b.pA=h;return b;}if((c.oj-c.ok|0)<=a.vA.oh.length)return DK;h=b.ok;CH(b,h+(b.oj-h|0)|0);if(a.yX===Fx){b=a.vA;MI(c,b,0,b.oh.length);}}}return f;}if(e!=2?0:1){g=a.yX;EN();if(g===Gz)return f;if
(g===Fx){if((c.oj-c.ok|0)<a.vA.oh.length)return DK;g=a.vA;MI(c,g,0,g.oh.length);}i=b.ok;e=f.pb;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new Hk;b.oe=1;b.of=1;E(b);}CH(b,i+f.pA|0);}else if(e!=3?0:1){g=a.DE;EN();if(g===Gz)return f;if(g===Fx){if((c.oj-c.ok|0)<a.vA.oh.length)return DK;g=a.vA;MI(c,g,0,g.oh.length);}i=b.ok;e=f.pb;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new Hk;b.oe=1;b.of=1;E(b);}CH(b,i+f.pA|0);}}return f;}b=new Cb;b.oe=1;b.of=1;E(b);}
let G1=G(B0);
let Hm=G();
let M7=null;let AYT=()=>{M7=null;}
let ABH=G();
let Ez=(b,c,d,e)=>{Cd.j1(b,c,d,e);Cd.j2(16384);}
let D9=(b,c,d,e,f)=>{let g;Cd.j1(b,c,d,e);g=16384;if(f)g=16640;Cd.j2(g);}
function NT(){let a=this;D.call(a);a.Dp=null;a.Hp=null;a.HB=null;a.Eq=null;a.DC=null;a.oK=null;a.BP=null;a.pi=0.0;a.Hx=0.0;a.C6=0.0;a.EF=0.0;a.F1=null;a.Jb=null;a.Ia=null;}
let Cs=a=>{let b,c,d;b=new Bf;BU();a.Dp=b;b=new Bf;b.os=0.0;b.ou=0.0;b.ot=(-1.0);a.Hp=b;b=new Bf;b.os=0.0;b.ou=1.0;b.ot=0.0;a.HB=b;a.Eq=FP();a.DC=FP();a.oK=FP();a.BP=FP();a.pi=1.0;a.Hx=100.0;a.C6=0.0;a.EF=0.0;a.F1=BfA();a.Jb=new Bf;b=new Nf;Bfi();c=new Bf;b.I$=c;d=new Bf;b.JO=d;c.os=0.0;c.ou=0.0;c.ot=0.0;d.os=0.0;d.ou=0.0;d.ot=0.0;a.Ia=b;}
let ABt=G();
let A5K=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=b.oh.length;e=0;f=new L;f.og=H(d);g=0;b:{a:{while(g<d){if(g<0)break b;if(g>=b.oh.length)break b;k:{h=b.oh.charCodeAt(g);if(h!=37){i=f.od;Bo(f,i,i+1|0);f.og.data[i]=h;break k;}g=g+1|0;if(g<0)break a;if(g>=b.oh.length)break a;j=b.oh.charCodeAt(g);if(j==37){j=f.od;Bo(f,j,j+1|0);f.og.data[j]=37;break k;}if(j==115){k=c.data;i=e+1|0;l=k[e].l();F(f,f.od,l);e=i;break k;}if(j==100){k=c.data;i=e+1|0;m=k[e].mE();P$(f,f.od,m,10);e=i;break k;}if(j==102){k=c.data;i=e+1|0;n=k[e].mG();IA();B5(f,
H$(AFh(n),0,n>=0.0?5:6));e=i;break k;}if(j==48){g=g+1|0;if(Dz(b,g)==88){k=c.data;IA();l=Mm;i=e+1|0;AIg(l,f,k[e].mE());e=i;break k;}IA();i=LC(GR,b,g,d);while(true){g=g+1|0;h=Dz(b,g);if(h<48)break;if(h>57)break;}if(h==88){k=c.data;l=Mm;j=e+1|0;B5(f,H$(S9(l,k[e].mE()),16-i|0,16));}else if(h!=100)j=e;else{k=c.data;l=GR;j=e+1|0;l=S9(l,k[e].mE());B5(f,H$(l,FU(l)-i|0,FU(l)));}e=j;break k;}if(j==46){g=g+1|0;if(Dz(b,g)==102){k=c.data;IA();l=GR;i=e+1|0;Xh(l,f,k[e].mG());e=i;break k;}IA();j=LC(GR,b,g,d)+2|0;while(true)
{g=g+1|0;i=Dz(b,g);if(i<48)break;if(i>57)break;}if(i==102){k=c.data;i=e+1|0;o=k[e].mG();l=AGg(GR,o);if(o<0.0)j=j+1|0;B5(f,H$(l,0,j));e=i;}break k;}if(j<49)break k;if(j>57)break k;IA();i=LC(GR,b,g,d);while(true){g=g+1|0;j=Dz(b,g);if(j<48)break;if(j>57)break;}if(j==88){k=c.data;l=Mm;j=e+1|0;l=QO(l,k[e].mE());B5(f,H$(l,FU(l)-i|0,FU(l)));}else if(j!=100)j=e;else{k=c.data;l=GR;j=e+1|0;l=QO(l,k[e].mE());B5(f,H$(l,FU(l)-i|0,FU(l)));}e=j;}g=g+1|0;}return f;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let CF=(b,c)=>{let d,e,f,g;b=A5K(b,c);d=new P;c=b.og;e=c.data;f=b.od;U();g=e.length;if(f>=0&&f<=(g-0|0)){d.oh=R(c.data,0,f);return d;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let Iz=G();
let NM=null;let LM=null;let NC=null;let S7=null;let AAT=b=>{return NM.data[(b*2607.594482421875+16384.5|0)&16383];}
let V7=b=>{return NC.data[(b*2607.594482421875+16384.5|0)&16383];}
let ACf=b=>{return LM.data[(b*2607.5945876176133+16384.5|0)&16383];}
let ABB=b=>{let c,d;b=b*0.6366197466850281;c=(GY(b)|0)&(-2);b=b-c;d=b*b;return (11.0*b-3.0*b*d)/(7.0+d)*(1-(c&2)|0);}
let ADa=b=>{let c,d;b=b*0.6366197466850281+1.0;c=(GY(b)|0)&(-2);b=b-c;d=b*b;return (11.0*b-3.0*b*d)/(7.0+d)*(1-(c&2)|0);}
let AIh=b=>{let c,d,e,f;b=b*2607.594482421875;c=(b+16384.0|0)-16384|0;d=c&16383;e=NM.data;f=e[d];return f+(e[d+1|0]-f)*(b-c);}
let ADX=b=>{let c,d,e,f;b=Jp(b)*2607.594482421875;c=b|0;d=c&16383;e=NC.data;f=e[d];return f+(e[d+1|0]-f)*(b-c);}
let RG=b=>{let c,d,e,f,g,h;b=b*16384.0+16384.0;c=b|0;d=c&16383;b=b-c;e=LM.data;f=e[d];c=d+1|0;g=e[c];e=S7.data;h=e[d];return (f+(g-f)*b)/(h+(e[c]-h)*b);}
let Nj=b=>{let c,d,e,f,g,h,i,j;c=Lv(b);d=(c-1.0)/(c+1.0);e=d*d;f=d*e;g=f*e;h=g*e;i=h*e;j=i*e;return PQ(b)*(0.125+0.15915132390848943*d-0.052938669438878753*f+0.030803398362108523*g-0.01853086679887605*h+0.008380036148199356*i-0.0018654869189687236*j);}
let Yc=(b,c)=>{let d,e,f;d=b/c;if(d===d){e=d-d;if(e!==e)c=0.0;}else d=b!==c?(-1.0):1.0;f=B9(c,0.0);if(f>0){if(b>=0.0)return Nj(d);return Nj(d)+1.0;}if(f<0)return Nj(d)+0.5;f=B9(b,0.0);if(f>0)return c+0.25;if(f>=0)return c+b;return c+0.75;}
let AEP=()=>{let b,c,d,e,f;NM=CU(16385);LM=LI(16385);NC=CU(16385);S7=LI(16385);b=0;while(b<=16384){c=b/16384.0*6.283185307179586;d=NM.data;e=LM.data;f=NL(c);e[b]=f;d[b]=f;d=NC.data;e=S7.data;c=Wb(c);e[b]=c;d[b]=c;b=b+1|0;}e=NM.data;e[0]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e[16384]=0.0;e=LM.data;e[0]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e[16384]=0.0;e=NC.data;e[0]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;e[16384]=1.0;e=S7.data;e[0]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;e[16384]=1.0;}
function NZ(){let a=this;D.call(a);a.o0=null;a.pq=0.0;a.pr=0.0;a.pm=0;a.pn=0;a.pk=0;a.pp=0;a.ps=null;}
let BM=(a,b)=>{let c,d,e,f;AE$(a.pm,a.pn,a.pk,a.pp);c=a.o0;d=a.pq;c.C6=d;e=a.pr;c.EF=e;if(b){f=c.Dp;d=d/2.0;e=e/2.0;f.os=d;f.ou=e;f.ot=0.0;}F8(c,1);}
let DR=a=>{return a.o0;}
function Ck(){NZ.call(this);this.oM=0.0;}
let O1=G(0);
function Cj(){let a=this;D.call(a);a.Dr=0;a.w$=0;a.HJ=0;a.Ie=0;a.z1=0;a.sp=null;a.zs=null;a.pt=0;a.Gm=0;a.FE=0;a.JK=0;a.ES=0;a.I0=0;a.Ay=null;a.x8=null;a.EB=null;}
let Bi1=(a,b,c,d,e)=>{let f=new Cj();Cr(f,a,b,c,d,e);return f;}
let Cr=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m;a.Ay=FP();a.Ie=b;a.Gm=e;a.zs=f;g=Wq(a,c,d,e);h=new JD;h.Br=1;h.zG=0;f=new Bf;BU();h.F6=f;f=A2a(g);h.rb=GK===null?A4o(0,b,f):A3I(0,b,f);f=new Ie;f.sX=1;f.xc=0;f.C7=1;if(!D0){g=MV(0);d=g.data.length;i=new KV;j=0+d|0;UM(i,d);i.ok=0;i.oj=j;i.yo=0;i.Bd=0;i.y$=g;}else{k=new C8;g=BX(0);Dm(k);k.ow=(-1);k.oD=0;k.oj=0;CP();k.o9=CR;k.pg=0;k.o4=g;k.ok=0;k.oj=0;k.pW=1;k.py=0;k.o9=DT();i=K2(k);}f.sH=i;i.oj=i.ok;i.ok=0;i.ow=(-1);i=Bq;k=i.ol.createBuffer();d=i.qS;i.qS=d+1|0;C6(i.rp,
d,C_(k));f.Bo=d;f.x$=35048;h.qm=f;h.xu=0;f=Eg;i=NF;if(f===null){i=i.qv.data[0];while(i!==null&&i.q0!==null){i=i.q_;}}else{k=f;if(!k.$id$){l=Ff();k.$id$=l;}m=f.$id$;i=Xj(i,f,m&(i.qv.data.length-1|0),m);}i=i===null?null:i.rv;if(i===null)i=BcR();Dj(i,h);JX(NF,f,i);a.sp=h;a.x8=CU(C7(b,(h.rb.le()).qX/4|0));a.FE=(ACV(a.sp)).qX/4|0;a.JK=HK(a.sp,8)===null?0:(HK(a.sp,8)).sJ/4|0;a.ES=HK(a.sp,4)===null?0:(HK(a.sp,4)).sJ/4|0;a.I0=HK(a.sp,16)===null?0:(HK(a.sp,16)).sJ/4|0;a.EB=Bs(P,e);m=0;while(m<e){a.EB.data[m]=Cx(EX(B5(Dw(),
C(691)),m));m=m+1|0;}}
let Wq=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new CQ;e.pD=1;e.ox=Bs(D,16);f=new EI;f.sd=1;f.qs=3;f.qU=5126;f.qW=0;f.qL=C(489);f.so=0;f.t8=EY(1);Dj(e,f);if(b){g=new EI;g.sd=8;g.qs=3;g.qU=5126;g.qW=0;g.qL=C(692);g.so=0;g.t8=EY(8);Dj(e,g);}if(c){g=new EI;g.sd=4;g.qs=4;g.qU=5121;g.qW=1;g.qL=C(490);g.so=0;g.t8=EY(4);Dj(e,g);}h=0;while(true){if(h>=d){b=e.oo;i=Bs(EI,b);j=i.data;h=0;while(true){c=B9(h,b);if(c>=0)break;if(c>=0){f=new O;g=new L;g.og=H(16);F(g,g.od,C(37));N(g,g.od,h,10);F(g,g.od,C(38));b=e.oo;N(g,g.od,b,
10);e=new P;i=g.og;j=i.data;c=g.od;U();d=j.length;if(c>=0&&c<=(d-0|0)){e.oh=R(i.data,0,c);f.oe=1;f.of=1;f.oi=e;E(f);}e=new O;Bl(e);E(e);}j[h]=e.ox.data[h];h=h+1|0;}return i;}g=new EI;f=new L;f.og=H(16);F(f,f.od,C(693));N(f,f.od,h,10);k=new P;i=f.og;j=i.data;l=f.od;U();m=j.length;if(l<0)break;if(l>(m-0|0))break;k.oh=R(i.data,0,l);g.sd=16;g.qs=2;g.qU=5126;g.qW=0;g.qL=k;g.so=0;g.t8=EY(16);Dj(e,g);h=h+1|0;}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}
let Cy=(a,b,c)=>{GC(a.Ay,b.qe);a.Dr=c;}
let JW=(a,b,c,d,e)=>{a.x8.data[a.w$+a.ES|0]=Xi(b,c,d,e);}
let Bj=(a,b)=>{a.x8.data[a.w$+a.ES|0]=b;}
let Bh=(a,b,c,d)=>{let e,f;e=a.w$;f=a.x8.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.HJ=0;a.w$=e+a.FE|0;a.z1=a.z1+1|0;}
let U3=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!a.z1)return;b=a.zs;c=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}c.i8(b.o6);c=a.zs;d=a.Ay;Ry();e=KC(c,C(694),Nv);f=Bq;if(c.o$){Dg(c,c.p9,c.p8);c.o$=0;}g=d.qe;b=f.q7;h=f.sh;if(!h)b=!b.oR?null:b.oP;else{i=b.oN;j=Z(Q(W(I(h),B(2135587861, 2654435769)),b.oT));e:{while(true){k=i.data[j];if(!k){j= -(j+1|0)|0;break e;}if(k==h)break;j=(j+1|0)&b.oQ;}}b=j<0?null:b.oO.data[j];}b=b;if(!e)b=!b.oR?null:b.oP;else{i=b.oN;h=Z(Q(W(I(e),B(2135587861, 2654435769)),b.oT));v:{while(true){j=i.data[h];if
(!j){h= -(h+1|0)|0;break v;}if(j==e)break;h=(h+1|0)&b.oQ;}}b=h<0?null:b.oO.data[h];}BR();b=b===null?null:b.oW;c=f.ol;d="uniformMatrix4fv";l=!!0;if(g===null)f=null;else{g=g.data;m=g.length;f=new Array(m);h=0;while(h<m){n=g[h];h;f[h]=n;h=h+1|0;}}c[d](b,l,f);m=0;while(m<a.Gm){b=a.zs;c=a.EB.data[m];d=Bq;if(b.o$){Dg(b,b.p9,b.p8);b.o$=0;}d.jk(KC(b,c,Nv),m);m=m+1|0;}b=a.sp;g=a.x8;h=a.w$;b.rb.ja(g,0,h);b=a.sp;TI(b,a.zs,a.Dr,0,b.qm.k_()<=0?b.rb.mV():b.qm.k7(),b.Br);a.HJ=0;a.w$=0;a.z1=0;}
let Cw=a=>{U3(a);}
let CD=(b,c,d)=>{let e,f,g,h,i,j,k;e=new L;e.og=H(16);F(e,e.od,C(695));f=!b?C(43):C(696);F(e,e.od,f);f=!c?C(43):C(697);F(e,e.od,f);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);i=0;while(true){if(i>=d){e=new L;e.og=H(16);F(e,e.od,f);F(e,e.od,C(698));f=!c?C(43):C(699);F(e,e.od,f);f=new P;g=e.og;h=g.data;i=e.od;j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);i=0;while(i<d){e=new L;e.og=H(16);F(e,e.od,f);F(e,e.od,C(700));N(e,e.od,i,10);F(e,e.od,C(701));f=Bi(e);i=i+1|0;}e
=new L;e.og=H(16);F(e,e.od,f);F(e,e.od,C(702));f=new P;g=e.og;h=g.data;i=e.od;j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);if(c){e=new L;F_(e);f=Cx(B5(B5(e,f),C(703)));}i=0;while(i<d){f=Cx(B5(EX(B5(B5(EX(B5(B5(Dw(),f),C(704)),i),C(705)),C(693)),i),C(701)));i=i+1|0;}return Cx(B5(B5(Dw(),f),C(706)));}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}e=new L;e.og=H(16);F(e,e.od,f);F(e,e.od,C(707));N(e,e.od,i,10);F(e,e.od,C(701));f=new P;g=e.og;h=g.data;j=e.od;k=h.length;if(j<0)break;if(j
>(k-0|0))break;f.oh=R(g.data,0,j);i=i+1|0;}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}
let CE=(b,c,d)=>{let e,f,g,h,i,j,k;e=C(708);if(c){f=new L;f.og=H(16);F(f,f.od,e);F(f,f.od,C(699));e=new P;g=f.og;h=g.data;i=f.od;U();j=h.length;if(i>=0&&i<=(j-0|0))e.oh=R(g.data,0,i);else{e=new O;e.oe=1;e.of=1;Bt(e);E(e);}}i=0;c:{while(true){if(i>=d){f=new L;f.og=H(16);F(f,f.od,e);F(f,f.od,C(709));e=!c?C(710):C(711);F(f,f.od,e);e=new P;g=f.og;h=g.data;c=f.od;U();i=h.length;if(c>=0&&c<=(i-0|0)){e.oh=R(g.data,0,c);if(d>0){f=new L;f.og=H(16);F(f,f.od,e);F(f,f.od,C(712));e=OT(f.og,0,f.od);}i=0;c=d-1|0;while(i<d)
{e=i!=c?Cx(B5(EX(B5(EX(B5(B5(Dw(),e),C(713)),i),C(714)),i),C(715))):Cx(B5(EX(B5(EX(B5(B5(Dw(),e),C(713)),i),C(714)),i),C(590)));i=i+1|0;}f=new L;F_(f);LV(f,e);return Cx(B5(f,C(716)));}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}f=new L;f.og=H(16);F(f,f.od,e);F(f,f.od,C(700));N(f,f.od,i,10);F(f,f.od,C(701));e=new P;g=f.og;h=g.data;j=f.od;U();k=h.length;if(j<0)break c;if(j>(k-0|0))break c;e.oh=R(g.data,0,j);f=new L;f.og=H(16);F(f,f.od,e);F(f,f.od,C(717));N(f,f.od,i,10);F(f,f.od,C(701));e=new P;g=f.og;h=g.data;j=f.od;k=
h.length;if(j<0)break;if(j>(k-0|0))break;e.oh=R(g.data,0,j);i=i+1|0;}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}e=new O;e.oe=1;e.of=1;Bt(e);E(e);}
function B_(){D.call(this);this.oy=null;}
function O5(){let a=this;B_.call(a);a.xv=0.0;a.xU=0.0;}
let BeY=(a,b,c)=>{let d=new O5();A41(d,a,b,c);return d;}
let A41=(a,b,c,d)=>{let e,f;a.oy=b;if(c>0.0&&d>0.0){a.xv=1.0/c;a.xU=1.0/d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(533);E(f);}
let ADQ=a=>{let b;b=1.0/a.xU;return IG(a.xv)*IG(b-1.0)*b/IG(a.xv+b);}
let AAr=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.xv=1.0/b;a.xU=1.0/c;return 1;}return 0;}
let XK=a=>{let b,c,d;b=a.oy;c=a.xv;d=a.xU;return D7(1.0-D7(b.jJ(),d),c);}
function R2(){let a=this;B_.call(a);a.zg=0.0;a.zx=0.0;}
let Bdj=(a,b,c)=>{let d=new R2();A9p(d,a,b,c);return d;}
let A9p=(a,b,c,d)=>{let e,f;a.oy=b;if(c>0.0&&d>0.0){a.zg=c;a.zx=d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(533);E(f);}
let Y3=a=>{let b;b=a.zg;return b/(b+a.zx);}
let AAE=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.zg=b;a.zx=c;return 1;}return 0;}
let AH5=a=>{let b,c,d,e;b=a.oy;c=a.zg;d=a.zx;e=ABJ(b,c,1.0);while(true){c=e+ABJ(b,d,1.0);if(Lv(c)>1.3552527156068805E-20?0:1)continue;else break;}return e/c;}
function Qf(){let a=this;B_.call(a);a.Az=0.0;a.zV=0.0;}
let BcV=(a,b,c)=>{let d=new Qf();AP1(d,a,b,c);return d;}
let AP1=(a,b,c,d)=>{let e,f;a.oy=b;if(c===c&&d===d){a.Az=c;a.zV=d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(533);E(f);}
let WT=(a,b,c,d)=>{if(b===b&&c===c){a.Az=b;a.zV=c;return 1;}return 0;}
let AAN=a=>{let b,c,d;b=a.oy;c=a.Az;d=a.zV;return Yc(b.ep()-c,b.ep()+d);}
function HZ(){let a=this;B_.call(a);a.sY=0.0;a.tc=0.0;}
let OG=(a,b,c)=>{let d=new HZ();AXy(d,a,b,c);return d;}
let Fs=a=>{return a.sY;}
let Fe=a=>{return a.tc;}
let AXy=(a,b,c,d)=>{let e,f;a.oy=b;if(!(isNaN(c)?1:0)&&d>0.0){a.sY=c;a.tc=d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(506);E(f);}
let Jr=a=>{return a.sY;}
let JR=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.sY=b;a.tc=c;return 1;}return 0;}
let IT=a=>{let b;b=a.oy;return a.sY+a.tc*b.ep();}
function RP(){let a=this;B_.call(a);a.yG=0.0;a.z9=0.0;}
let Bf0=(a,b,c)=>{let d=new RP();A0D(d,a,b,c);return d;}
let A0D=(a,b,c,d)=>{let e,f;a.oy=b;if(!(isNaN(c)?1:0)&&d>0.0){a.yG=c;a.z9=d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(500);E(f);}
let ZA=a=>{return a.yG;}
let ADw=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.yG=b;a.z9=c;return 1;}return 0;}
let ACo=a=>{let b,c,d,e;b=a.oy;c=a.yG;d=a.z9;e=b.em();return c+d*RG(E5(B2(BP(B4(I(1021),I(Ed(e))),52),Bd(e,B(4294967295, 1048575))))-0.25);}
function PP(){let a=this;B_.call(a);a.zH=0.0;a.AK=0.0;}
let Bdt=(a,b,c)=>{let d=new PP();AZn(d,a,b,c);return d;}
let AZn=(a,b,c,d)=>{let e,f;a.oy=b;if(!(isNaN(c)?1:0)&&d>0.0){a.zH=c;a.AK=d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(506);E(f);}
let AGj=a=>{return Fl(a.zH);}
let AHl=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.zH=b;a.AK=c;return 1;}return 0;}
let AG0=a=>{let b,c,d,e;b=a.oy;c=a.zH;d=a.AK;e=b.em();return Fl(c+d*RG(E5(B2(BP(B4(I(1021),I(Ed(e))),52),Bd(e,B(4294967295, 1048575))))-0.25));}
function OS(){let a=this;B_.call(a);a.AW=0;a.z0=0.0;}
let BdX=(a,b,c)=>{let d=new OS();A7J(d,a,b,c);return d;}
let A7J=(a,b,c,d)=>{let e,f;a.oy=b;e=c;if(e>=1.0&&d>0.0){a.AW=e|0;a.z0=d;c=1;}else c=0;if(c)return;f=new V;f.oe=1;f.of=1;f.oi=C(718);E(f);}
let VV=(a,b,c,d)=>{if(b>=1.0&&c>0.0){a.AW=b|0;a.z0=c;return 1;}return 0;}
let ACw=a=>{return ASf(a.oy,a.AW,a.z0);}
let ASf=(b,c,d)=>{let e,f,g,h,i,j;if(Infinity===d)return c;e=c-0.3333333333333333;f=1.0/Ch(9.0*e);while(true){g=b.ep();h=1.0+f*g;while(h<=0.0){g=b.ep();h=1.0+f*g;}i=h*h*h;j=b.jJ();g=g*g;if(j<1.0-0.0331*g*g)return e*i/d;if(C$(j)<0.5*g+e*(1.0-i+C$(i)))break;}return e*i/d;}
function R8(){B_.call(this);this.yp=0.0;}
let BbV=(a,b)=>{let c=new R8();AZ_(c,a,b);return c;}
let AZ_=(a,b,c)=>{let d,e;a.oy=b;if(c<=0.0)d=0;else{a.yp=1.0/c;d=1;}if(d)return;e=new V;e.oe=1;e.of=1;e.oi=C(719);E(e);}
let AHd=a=>{return a.yp;}
let Vu=(a,b,c,d)=>{if(b<=0.0)return 0;a.yp=1.0/b;return 1;}
let AIm=a=>{let b,c;b=a.oy;c=a.yp;return  -C$(b.jJ())*c;}
function Vk(){let a=this;B_.call(a);a.zJ=0.0;a.zm=0.0;}
let BaZ=(a,b,c)=>{let d=new Vk();A3u(d,a,b,c);return d;}
let A3u=(a,b,c,d)=>{let e,f;a.oy=b;if(c>0.0&&d>0.0){a.zJ=c;a.zm=1.0/d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(533);E(f);}
let AFw=a=>{return a.zJ*D7(2.0,a.zm);}
let ADj=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.zJ=b;a.zm=1.0/c;return 1;}return 0;}
let ZS=a=>{let b,c,d;b=a.oy;c=a.zJ;d=a.zm;return c/D7(b.jJ(),d);}
function R9(){let a=this;B_.call(a);a.zL=0.0;a.xM=0.0;}
let BeV=(a,b,c)=>{let d=new R9();AYb(d,a,b,c);return d;}
let AYb=(a,b,c,d)=>{let e,f;a.oy=b;if(c>0.0&&d>0.0){a.zL=1.0/c;a.xM=1.0/d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(533);E(f);}
let ABQ=a=>{let b;b=1.0/a.zL;return b*a.xM/(b+1.0);}
let Vs=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.zL=1.0/b;a.xM=1.0/c;return 1;}return 0;}
let Z_=a=>{let b,c,d;b=a.oy;c=a.zL;d=a.xM;return D7(b.jJ(),c)*d;}
function Pv(){B_.call(this);this.ws=0;}
let BaL=(a,b)=>{let c=new Pv();AVF(c,a,b);return c;}
let AVF=(a,b,c)=>{let d,e;a.oy=b;d=c;if(d<1.0)c=0;else{a.ws=d|0;c=1;}if(c)return;e=new V;e.oe=1;e.of=1;e.oi=C(720);E(e);}
let AAS=a=>{return 1.4142135623730951*IG((a.ws+1.0)*0.5-1.0)/IG(a.ws*0.5-1.0);}
let AD$=(a,b,c,d)=>{if(b<1.0)return 0;a.ws=b|0;return 1;}
let ABC=a=>{let b,c,d,e,f;b=a.oy;c=a.ws;d=0.0;e=0;while(e<c){f=b.ep();d=d+f*f;e=e+1|0;}return Ch(d);}
function Sv(){B_.call(this);this.zi=0;}
let Bbh=(a,b)=>{let c=new Sv();AKR(c,a,b);return c;}
let AKR=(a,b,c)=>{let d,e;a.oy=b;d=c;if(d<1.0)c=0;else{a.zi=d|0;c=1;}if(c)return;e=new V;e.oe=1;e.of=1;e.oi=C(720);E(e);}
let AB4=a=>{return a.zi;}
let AAp=(a,b,c,d)=>{if(b<1.0)return 0;a.zi=b|0;return 1;}
let ADJ=a=>{let b,c,d,e,f;b=a.oy;c=a.zi;d=0.0;e=0;while(e<c){f=b.ep();d=d+f*f;e=e+1|0;}return d;}
function U1(){B_.call(this);this.BA=0.0;}
let BdA=(a,b)=>{let c=new U1();A$M(c,a,b);return c;}
let A$M=(a,b,c)=>{let d,e;a.oy=b;if(c<=0.0)d=0;else{a.BA=c;d=1;}if(d)return;e=new V;e.oe=1;e.of=1;e.oi=C(721);E(e);}
let Zw=a=>{return 0.0;}
let AEn=(a,b,c,d)=>{if(b<=0.0)return 0;a.BA=b;return 1;}
let Wd=a=>{let b,c,d,e,f,g;b=a.oy;c=a.BA;d=b.ep();e=0.0;f=0;while(f<c){g=b.ep();e=e+g*g;f=f+1|0;}return d/Ch(e/c);}
function K6(){let a=this;B_.call(a);a.uJ=0.0;a.vE=0.0;}
let ANd=(a,b,c)=>{let d=new K6();ARd(d,a,b,c);return d;}
let KE=a=>{return a.uJ;}
let Uh=a=>{return a.vE;}
let ARd=(a,b,c,d)=>{let e,f;a.oy=b;if(c>=d)e=0;else{a.uJ=c;a.vE=d;e=1;}if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(533);E(f);}
let Oa=a=>{return 0.5*(a.uJ+a.vE);}
let OC=(a,b,c,d)=>{if(b>=c)return 0;a.uJ=b;a.vE=c;return 1;}
let S1=a=>{let b,c,d,e;b=a.oy;c=a.uJ;d=a.vE;e=ANY(b.jJ());return c+(d-c)*e*e;}
let ANY=b=>{let c,d;c=Bd(By(GY(b)),I(-2));b=b-Bz(c);d=b*b;return (11.0*b-3.0*b*d)/(7.0+d)*Bz(B4(I(1),Bd(c,I(2))));}
function P6(){let a=this;B_.call(a);a.yn=0.0;a.x6=0;}
let Bb8=(a,b,c)=>{let d=new P6();AJu(d,a,b,c);return d;}
let AJu=(a,b,c,d)=>{let e,f;b:{a.oy=b;e=d;if(c>=0.0&&c<=1.0){d=e|0;if(d>=0.0){a.yn=c;a.x6=d;d=1;break b;}}d=0;}if(d)return;f=new V;f.oe=1;f.of=1;f.oi=C(533);E(f);}
let W$=a=>{return a.x6*a.yn;}
let VT=(a,b,c,d)=>{let e;if(b>=0.0&&b<=1.0){e=c|0;if(e>=0.0){a.yn=b;a.x6=e;return 1;}}return 0;}
let WQ=a=>{let b,c,d,e,f;b=a.oy;c=a.yn;d=a.x6;e=0.0;f=0;while(f<d){if(b.jJ()<c)e=e+1.0;f=f+1|0;}return e;}
function Se(){let a=this;B_.call(a);a.Gd=0.0;a.E2=0.0;a.DA=0.0;a.F2=0.0;}
let Bcq=(a,b,c)=>{let d=new Se();AQj(d,a,b,c);return d;}
let AHG=a=>{return a.DA;}
let AQj=(a,b,c,d)=>{let e;a.oy=b;if(Ln(a,Bz(c),d,0.0))return;e=new V;e.oe=1;e.of=1;e.oi=C(537);E(e);}
let Ln=(a,b,c,d)=>{let e,f,g;if(b>=1.0&&c>=0.0&&c<1.0){e=Bz(By(b));a.Gd=e;a.E2=c;if(!(d===d&&d<0.0)){f=By(e);b=1.0;g=I(2);while(Gb(g,f)){b=b+D7(1.0/Bz(g),c);g=T(g,I(1));}a.DA=b;}a.F2=1.0+D7(0.5,a.E2);return 1;}return 0;}
let ACR=a=>{return ATa(a.oy,a.Gd,a.E2,a.DA,a.F2);}
let ATa=(b,c,d,e,f)=>{let g,h,i,j;g=1.0-d;h=1.0/g;g=(1.0-D7(2.0/c,g))/(1.0-f/e);i=b.jJ();j=i*e;if(j<1.0)return 1.0;if(j<f)return 2.0;return 1.0+c*D7(g*i-g+1.0,h);}
function MP(){let a=this;B_.call(a);a.wX=0.0;a.wj=0.0;a.w0=0.0;}
let AOD=(a,b,c,d)=>{let e=new MP();AYl(e,a,b,c,d);return e;}
let AYl=(a,b,c,d,e)=>{let f,g;a.oy=b;if(c<d&&c<=e&&e<=d){a.wX=c;a.wj=d;a.w0=e;f=1;}else f=0;if(f)return;g=new V;g.oe=1;g.of=1;g.oi=C(722);E(g);}
let SZ=a=>{let b,c,d,e;b=a.w0;c=a.wj;d=a.wX;e=c-d;if(b<e*0.5)return c-Ch(e*(c-b))/Ch(2.0);return d+Ch(e*(b-d))/Ch(2.0);}
let QH=(a,b,c,d)=>{if(b<c&&b<=d&&d<=c){a.wX=b;a.wj=c;a.w0=d;return 1;}return 0;}
let ABr=a=>{let b,c,d,e,f,g,h,i,j;b=a.oy;c=a.wX;d=a.wj;e=a.w0;f=e-c;g=d-c;h=Ch(f*g);i=Ch(d-e);j=b.ev();return j<=f/g?c+Ch(j)*h:d-Ch(j*g-f)*i;}
let AM$=(b,c,d,e)=>{let f,g,h,i,j;f=e-c;g=d-c;h=Ch(f*g);i=Ch(d-e);j=b.ev();if(j<=f/g)return c+Ch(j)*h;return d-Ch(j*g-f)*i;}
function RH(){let a=this;B_.call(a);a.EC=0.0;a.Hi=0.0;a.Hv=0.0;}
let BcO=(a,b,c,d)=>{let e=new RH();AYp(e,a,b,c,d);return e;}
let AYp=(a,b,c,d,e)=>{let f;a.oy=b;if(NN(a,c,d,e))return;f=new V;f.oe=1;f.of=1;f.oi=C(542);E(f);}
let AGU=a=>{return a.EC;}
let NN=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0&&d>=0.0&&d<=1.0){a.EC=b;a.Hi=c;a.Hv=d;return 1;}return 0;}
let ABx=a=>{let b,c,d,e,f;b=a.oy;c=a.EC;d=a.Hi;e=a.Hv;f=b.m4( -d,d)+c;return f+(c+d*b.ep()-f)*e;}
let Xe=G();
function Ps(){let a=this;HP.call(a);a.Jx=0.0;a.Jw=0.0;a.JI=0;a.Jg=0;}
let W7=G();
function QI(){let a=this;D.call(a);a.xm=null;a.tU=null;}
let U2=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.xm.readyState==4){if(a.xm.status==200){b=a.tU;if(b.sl.q1){if(BY===null){c=new Do;c.p$=DX;d=new L;d.og=H(16);c.o_=d;c.p7=H(32);c.qf=0;Dn();c.qa=Du;BY=c;}e=BY;b=b.r_;d=new L;d.og=H(16);F(d,d.od,C(723));f=d.od;if(b===null)b=C(2);F(d,f,b);b=new P;g=d.og;h=g.data;i
=d.od;U();K1(0,i,h.length);b.oh=R(g.data,0,i);MN(e,b);}b=a.tU;b.sG.eV(b.r_,Bv(a.xm.responseText));}else if(a.xm.status!=404&&a.xm.status!=403){try{j=I(100);$p=1;continue _;}catch($$e){$$je=BH($$e);if($$je instanceof Eb){}else{throw $$e;}}b=a.tU;d=b.sl;f=b.vh;c=b.r_;e=b.sG;if(d.q1){if(BY===null){k=new Do;k.p$=DX;b=new L;b.og=H(16);k.o_=b;k.p7=H(32);k.qf=0;Dn();k.qa=Du;BY=k;}k=BY;b=new L;b.og=H(16);F(b,b.od,C(133));F(b,b.od,c===null?C(2):c);l=new P;g=b.og;h=g.data;m=b.od;U();n=h.length;if(m>=0&&m<=(n-0|0)){l.oh
=R(g.data,0,m);b=k.o_;F(b,b.od,l);n=b.od;Bo(b,n,n+1|0);b.og.data[n]=10;Dy(k);}else{b=new O;Bl(b);E(b);}}d.pu=d.pu+1|0;b=new HU;b.sl=d;b.vh=f;b.r_=c;b.sG=e;d=null;c=null;b.rk=new D;b.rj=1;b.sv=c;b.sZ=d;i=DL;DL=i+1|0;b.sV=I(i);d=new F3;d.sx=b;GL(d);}else{b=a.tU;b.sG.m5(b.r_);}b=a.tU.sl;b.pu=b.pu-1|0;}return;case 1:b:{try{Kk(j);if(HB()){break _;}break b;}catch($$e){$$je=BH($$e);if($$je instanceof Eb){}else{throw $$e;}}}b=a.tU;d=b.sl;f=b.vh;c=b.r_;e=b.sG;if(d.q1){if(BY===null){k=new Do;k.p$=DX;b=new L;b.og=H(16);k.o_
=b;k.p7=H(32);k.qf=0;Dn();k.qa=Du;BY=k;}k=BY;b=new L;b.og=H(16);F(b,b.od,C(133));F(b,b.od,c===null?C(2):c);l=new P;g=b.og;h=g.data;m=b.od;U();n=h.length;if(m>=0&&m<=(n-0|0)){l.oh=R(g.data,0,m);b=k.o_;F(b,b.od,l);n=b.od;Bo(b,n,n+1|0);b.og.data[n]=10;Dy(k);}else{b=new O;Bl(b);E(b);}}d.pu=d.pu+1|0;b=new HU;b.sl=d;b.vh=f;b.r_=c;b.sG=e;d=null;c=null;b.rk=new D;b.rj=1;b.sv=c;b.sZ=d;i=DL;DL=i+1|0;b.sV=I(i);d=new F3;d.sx=b;GL(d);b=a.tU.sl;b.pu=b.pu-1|0;return;default:DU();}}Co().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let AD_=(a,b)=>{let $p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:U2(a,b);if(HB()){break _;}return;default:DU();}}Co().s(a,b,$p);}
let ZK=G(0);
function Ly(){let a=this;NQ.call(a);a.GT=null;a.Hz=null;}
let AAG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.GT;e=0;f=0;g=a.Hz;b:{while(true){if((e+32|0)>f){h=b.ok;i=b.oj;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;SF(b,d,j,f-j|0);e=0;}}j=c.ok;l=c.oj;if(!(j>=l?0:1)){j=b.ok>=b.oj?0:1;m=!j&&e>=f?DW:DK;break b;}k=g.data;l=l-j|0;h=k.length;if(l<h)h=l;n=new Uw;n.AE=b;n.HM=c;m=AHZ(a,d,e,f,g,0,h,n);e=n.GA;if(m===null&&0==n.CT)m=DW;AIj(c,g,0,n.CT);if(m!==null)break;}}CH(b,b.ok-(f-e|0)|0);return m;}
let Qj=G(Ly);
let AHZ=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,r,s;i=null;b:{o:{bf:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;n=h.AE;if((n.oj-n.ok|0)<2?0:1)break b;i=DW;break b;}o=k+1|0;k=j[k];if(!((k&192)!=128?0:1)){c=o+(-2)|0;i=new CZ;i.pb=2;i.pA=1;break b;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=o;}else if((l&240)!=224){if((l&248)!=240){c=k+(-1)|0;i=A_M(2,1);break b;}if((k+3|0)>d){c=k+(-1)|0;if(AEo(h,4))break b;i
=DW;break b;}if((f+2|0)>g){c=k+(-1)|0;if(ACq(h,2))break b;i=DK;break b;}o=k+1|0;m=j[k];c=o+1|0;o=j[o];k=c+1|0;p=j[c];if(!NJ(a,m))break bf;if(!NJ(a,o))break bf;if(!NJ(a,p))break bf;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|p&63;c=f+1|0;j[f]=AFa(q);m=c+1|0;j[c]=AAI(q);}else{if((k+2|0)>d){c=k+(-1)|0;n=h.AE;if((n.oj-n.ok|0)<3?0:1)break b;i=DW;break b;}c=k+1|0;r=j[k];k=c+1|0;o=j[c];if(!((r&192)!=128?0:1))break o;if(!((o&192)!=128?0:1))break o;s=((l&15)<<12|(r&63)<<6|o&63)&65535;m=s&64512;c=m!=55296?0:1;if(!c&&!(m
!=56320?0:1)?0:1){c=k+(-3)|0;i=new CZ;i.pb=2;i.pA=3;break b;}j=e.data;m=f+1|0;j[f]=s;}c=k;f=m;}break b;}c=k+(-3)|0;i=AF4(1);break b;}c=k+(-3)|0;i=new CZ;i.pb=2;i.pA=1;}h.GA=c;h.CT=f;return i;}
let NJ=(a,b)=>{return (b&192)!=128?0:1;}
function Os(){let a=this;Hm.call(a);a.Ha=null;a.C5=null;}
function Ci(){let a=this;NT.call(a);a.po=0.0;a.pl=null;}
let CS=a=>{F8(a,1);}
let F8=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.Eq;d=a.po;e=a.C6;f=d* -e/2.0;e=d*e/2.0;g=a.EF;TR(c,f,e,d* -(g/2.0),d*g/2.0,a.pi,a.Hx);c=a.DC;h=a.Dp;i=a.pl;d=h.os;j=h.ou;f=h.ot;i.os=d;i.ou=j;i.ot=f;k=a.Hp;l=k.os;e=k.ou;g=k.ot;d=d+l;j=j+e;f=f+g;i.os=d;i.ou=j;i.ot=f;i=a.HB;k=A9v;k.os=d;k.ou=j;k.ot=f;l=h.os;e=h.ou;g=h.ot;l=d-l;e=j-e;g=f-g;k.os=l;k.ou=e;k.ot=g;Xa(c,k,i);i=AZD;l= -h.os;e= -h.ou;g= -h.ot;Lr(i);m=i.qe.data;m[12]=l;m[13]=e;m[14]=g;Qd(c,i);GC(a.oK,a.Eq.qe);VJ(a.oK.qe,a.DC.qe);if(b){GC(a.BP,a.oK.qe);Xf(a.BP.qe);AFW(a.F1,
a.BP);}}
function JS(){Hm.call(this);this.wC=null;}
let Bah=0;let Bbp=()=>{Bbp=Bk(JS);A1F();}
let Q4=(a,b)=>{let c,d,e,f,$$je;c=a.wC;d=b.qp;e=new L;e.og=H(16);F(e,e.od,C(724));f=e.od;if(d===null)d=C(2);F(e,f,d);c=c.nh(Bi(e));d:{try{e=A0m(AEs(c));}catch($$e){$$je=BH($$e);if($$je instanceof B0){e=$$je;break d;}else{throw $$e;}}return e;}c=a.wC;d=b.qp;b=new L;b.og=H(16);F(b,b.od,C(724));f=b.od;if(d===null)d=C(2);F(b,f,d);c.nj(Bi(b));E(e);}
let AHu=(a,b)=>{let c,d,e,f,g;c=a.wC;d=b.qp;e=new L;e.og=H(16);F(e,e.od,C(725));f=e.od;if(d===null)d=C(2);d:{F(e,f,d);if(c.nh(Bi(e))===null){c=a.wC;g=b.qp;b=new L;b.og=H(16);F(b,b.od,C(724));f=b.od;if(g===null)g=C(2);F(b,f,g);if(c.nh(Bi(b))===null){f=0;break d;}}f=1;}return f;}
let A1F=()=>{Bah=C(724).oh.length;}
let Nx=G(0);
function S$(){let a=this;D.call(a);a.C2=null;a.CQ=null;}
let AZ7=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.C2;d=a.CQ;e=new L;e.og=H(16);f=e.od;if(d===null)d=C(2);F(e,f,d);f=e.od;if(b===null)b=C(2);F(e,f,b);d=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){d.oh=R(g.data,0,i);return Bv(c.getItem(Cp(d)));}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let A6s=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.C2;d=a.CQ;e=new L;e.og=H(16);f=e.od;if(d===null)d=C(2);F(e,f,d);f=e.od;if(b===null)b=C(2);F(e,f,b);d=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){d.oh=R(g.data,0,i);c.removeItem(Cp(d));return;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
function TX(){let a=this;D.call(a);a.Hd=null;a.DJ=null;}
let A6O=(a,b)=>{let c,d;c=a.DJ;d=Dl(c,b);return d<0?null:c.qg.data[d];}
let AUB=(a,b)=>{WS(a.Hd,b,0);YE(a.DJ,b);}
function DD(){let a=this;D.call(a);a.yb=null;a.Be=null;a.H6=0;a.Fj=0;a.El=0;a.H$=0;a.w7=0;a.JD=0;a.Iv=0;a.Cs=0;a.AG=0;a.xk=null;}
let A$N=null;let A$P=null;let GR=null;let Mm=null;let AVz=null;let AVA=null;let A0d=null;let A9W=null;let BcF=null;let BgV=null;let Bff=null;let Bfh=null;let Bd5=null;let Ber=null;let A_l=null;let Bar=null;let Bas=null;let IA=()=>{IA=Bk(DD);ASa();}
let G0=(a,b,c,d,e)=>{let f=new DD();Xn(f,a,b,c,d,e);return f;}
let Xn=(a,b,c,d,e,f)=>{let g,h,i,j,k;IA();a.H6=d;a.H$=c;a.Fj=e;a.El=f;g=H(b.oh.length);h=g.data;d=0;e=h.length;while(true){if(d>=e){a.yb=g;a.w7=e;g=X(128);h=g.data;a.Be=g;e=0;f=h.length;if(e>f){b=new V;b.oe=1;b.of=1;E(b);}while(e<f){i=e+1|0;h[e]=(-1);e=i;}i=0;while(true){d=a.w7;if(i>=d)break;j=a.yb.data[i];g=a.Be.data;g[j&127]=i;if(c){if(CA===null){if(B1===null)B1=ES();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}g[C1(CA,j)&65535&127]=i;}i=i+1|0;}k=1.0/C$(d);a.JD=GY(C$(256.0)*k)|0;a.Iv=GY(C$(65536.0)*k)|
0;a.Cs=GY(C$(4.294967296E9)*k)|0;c=GY(C$(1.8446744073709552E19)*k)|0;a.AG=c;c=c+1|0;d=32;if(c>d)d=c;a.xk=H(d);return;}if(d<0)break;if(d>=b.oh.length)break;h[d]=b.oh.charCodeAt(d);d=d+1|0;}b=new Ba;b.oe=1;b.of=1;E(b);}
let S9=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.AG;d=c-1|0;e=a.w7;f=e>>>1|0;g=0;h=I(f);i=I(e);while(g<=d){j=BS(Q(b,1),h);a.xk.data[d-g|0]=a.yb.data[Z(B4(b,W(j,i)))];g=g+1|0;b=j;}k=a.xk;l=k.data;U();m=new P;f=l.length;if(c>=0&&c<=(f-0|0)){m.oh=R(k.data,0,c);return m;}m=new O;m.oe=1;m.of=1;E(m);}
let AIg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.AG;e=d-1|0;f=a.w7;g=f>>>1|0;h=0;i=I(g);j=I(f);while(h<=e){k=BS(Q(c,1),i);a.xk.data[e-h|0]=a.yb.data[Z(B4(c,W(k,j)))];h=h+1|0;c=k;}l=a.xk;f=0;g=b.od;Bo(b,g,g+d|0);h=d+f|0;while(f<h){m=l.data;n=b.og.data;e=g+1|0;d=f+1|0;n[g]=m[f];g=e;f=d;}return b;}
let QO=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.AG;d=Gn(b,(-1));b=HJ(Bg(T(b,d),d));e=c;while(true){f=a.xk;g=f.data;h=a.yb.data;i=I(a.w7);g[e]=h[Z(HJ(Dx(b,i)))];b=BS(b,i);if(Dh(b,M))break;e=e+(-1)|0;}if(Ej(d,M)){e=e+(-1)|0;g[e]=a.El;}j=(c+1|0)-e|0;U();k=new P;c=g.length;if(e>=0&&j>=0&&j<=(c-e|0)){k.oh=R(f.data,e,j);return k;}k=new O;k.oe=1;k.of=1;E(k);}
let LC=(a,b,c,d)=>{let e,f,g,h,i,j;if(c>=0&&d>0&&(d-c|0)>0){e=b.oh.length;if((e-c|0)>0&&d<=e){if(c>=0&&c<b.oh.length){e=b.oh.charCodeAt(c);if(e==a.El){f=(-1);g=0;h=a.Cs+1|0;}else if(e==a.Fj){f=1;g=0;h=a.Cs+1|0;}else{g=a.Be.data[e&127];if(g<0)return 0;f=1;h=a.Cs;}i=c+1|0;r:{while(i<d&&i<(c+h|0)){j=a.Be;if(i<0)break r;if(i>=b.oh.length)break r;e=j.data[b.oh.charCodeAt(i)&127];if(e<0)return C7(g,f);g=C7(g,a.w7)+e|0;i=i+1|0;}return C7(g,f);}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}}return 0;}
let AGg=(a,b)=>{let c,d,e,f,g,h;FE();c=new L;c.og=H(16);c=MW(c,b,(-10000));d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;Bl(c);E(c);}
let Xh=(a,b,c)=>{FE();return MW(b,c,(-10000));}
let ASa=()=>{let b,c;A$N=G0(C(726),1,36,43,45);A$P=G0(C(727),1,36,43,45);GR=G0(C(728),1,36,43,45);Mm=G0(C(729),1,112,43,45);AVz=G0(C(730),1,36,43,45);AVA=G0(C(481),0,61,42,45);A0d=G0(C(731),0,36,42,33);A9W=G0(C(732),0,36,43,45);b=G0(C(733),0,92,43,45);BcF=b;c=S(DD,[A$N,A$P,GR,Mm,AVz,AVA,A0d,A9W,b]);b=new Op;b.Jo=c;BgV=b;Bff=Bb4([0,0]);Bfh=AE3([0,0]);Bd5=Bdh([0,0]);Ber=BfH([0,0]);A_l=BfI([0,0]);Bar=A_P([0,0]);Bas=Ba0([0,0]);}
let AHz=G();
let H$=(b,c,d)=>{if(b!==null&&!(b.oh.length?0:1)){if(c<0)c=0;if(!(d>=0&&d<=b.oh.length))d=b.oh.length;if(c<d)return Cv(b,c,d);return C(43);}return C(43);}
let ACl=G();
let YL=G();
function Op(){IJ.call(this);this.Jo=null;}
let QP=G();
let AN8=null;let BgO=()=>{BgO=Bk(QP);AJq();}
let AE$=(b,c,d,e)=>{let f;BgO();b:{a:{f=AN8;YB();if(f===ZH){if(Bb.oX.width!=Bb.oX.width)break a;if(Bb.oX.height!=Bb.oX.height)break a;}Cd.dX(b,c,d,e);break b;}Cd.dX(C7(b,Bb.oX.width)/Bb.oX.width|0,C7(c,Bb.oX.height)/Bb.oX.height|0,C7(d,Bb.oX.width)/Bb.oX.width|0,C7(e,Bb.oX.height)/Bb.oX.height|0);}}
let AJq=()=>{YB();AN8=ZH;}
let Pu=G();
let IH=null;let IG=b=>{let c,d,e;c=b+1.0;d=1.0;while(c<7.0){d=d*c;c=c+1.0;}e=Fl(c*C$(c)-c+1.0/(12.0*c+2.0/(5.0*c+53.0/(42.0*c))));if(b<7.0)e=e/d;return e*Ch(6.283185307179586/c);}
let ADZ=()=>{IH=Sq([B(2135587861, 2654435769),B(44446351, 3242174889),B(3349052189, 2447445413),B(3516067075, 3518319154),B(4220496899, 2882110344),B(792563159, 2360945575),B(1974346085, 3679390609),B(61104479, 3152041523),B(2717783413, 2700274805),B(2107561609, 2313257605),B(2638399027, 3785032106),B(3977025073, 3335640776),B(4149317051, 2939605022),B(922161383, 2590590015),B(865850413, 2283013049),B(726904555, 3859688306),B(3988170991, 3468523225),B(1372588901, 3117001274),B(1871222847, 2801104767),B(3083878267, 2517223198),
B(184855323, 2262111973),B(2100658189, 3915259345),B(1060927535, 3569120481),B(1550363685, 3253582939),B(4042125149, 2965941328),B(1456590261, 2703729436),B(219495859, 2464699080),B(37979587, 2246800835),B(3624126485, 3958238937),B(281718623, 3647910312),B(2943946197, 3361911661),B(338682123, 3098335500),B(3738725225, 2855423888),B(1072304303, 2631556713),B(2186705523, 2425240876),B(3175444131, 2235100341),B(408298925, 3992473300),B(2286196537, 3711283917),B(540913033, 3449898667),B(1665355779, 3206922746),
B(2533377249, 2981059588),B(140729735, 2771103944),B(2571838365, 2575935448),B(1165664619, 2394512645),B(3084378565, 2225867426),B(3757080831, 4020386218),B(392431367, 3763359354),B(1075784915, 3522764445),B(3444329293, 3297550982),B(880492101, 3086735617),B(1413668725, 2889397865),B(1497336189, 2704676091),B(2499559823, 2531763744),B(3649628817, 2369905837),B(4183304109, 2218395650),B(2465561693, 4043581216),B(2477898943, 3806908860),B(625799731, 3584089028),B(3328636793, 3374310925),B(58454521, 3176811216),
B(3622426963, 2990871239),B(2721556363, 2815814401),B(664829645, 2651003707),B(2977524627, 2495839445),B(3578028407, 2349757007),B(4137923419, 2212224830),B(299451247, 4063161590),B(1032047359, 3843866779),B(389361657, 3636407632),B(1860991083, 3440145360),B(1800847905, 3254475652),B(3434193803, 3078826811),B(2633028883, 2912657997),B(3784707173, 2755457558),B(781027743, 2606741459),B(1077589413, 2466051786),B(98971483, 2332955342),B(3307641433, 2207042308),B(1655087069, 4079911411),B(45545517, 3875623719),
B(1120116171, 3681565038),B(674663173, 3497223186),B(2327313551, 3322111625),B(4086785117, 3155768180),B(3381810105, 2997753818),B(2428957597, 2847651488),B(803501563, 2705065022),B(1390395247, 2569618088),B(682613341, 2440953199),B(3707092341, 2318730766),B(1343059315, 2202628207),B(1434366087, 4094403221),B(185610423, 3903204980),B(2035855439, 3720935211),B(2600049117, 3547176978),B(1362659373, 3381532814),B(840279687, 3223623812),B(3412489071, 3073088759),B(1600565057, 2929583312),B(920967475, 2792779205),
B(3150438117, 2662363502),B(2754988097, 2538037882),B(2334904223, 2419517953),B(1726710761, 2306532604),B(1615445299, 2198823384),B(3594570011, 4107064871),B(4077885187, 3927383073),B(2242692581, 3755562254),B(562667145, 3591258500),B(1599629931, 3434142943),B(2613331269, 3283901104),B(2189795893, 3140232262),B(592059733, 3002848852),B(1543671825, 2871475889),B(1906881013, 2745850420),B(3178546077, 2625720995),B(1624404265, 2510847166),B(4264597877, 2400999002),B(2148532489, 2295956635),B(41874743, 2195509813),
B(641537289, 4118222524),B(1176590313, 3948751082),B(924495185, 3786253661),B(3716298733, 3630443268),B(1289034163, 3481044723),B(3316296111, 3337794166),B(3014326683, 3200438599),B(3637735069, 3068735433),B(3691173299, 2942452063),B(2031528361, 2821365456),B(2564552949, 2705261756),B(2663061279, 2593935909),B(1096383875, 2487191299),B(1249132821, 2384839400),B(2700246253, 2286699445),B(111480555, 2192598107),B(484288485, 4128129171),B(3688565221, 3967771877),B(652319887, 3813643668),B(288382903, 3665502573),
B(4163732939, 3523116022),B(1707730403, 3386260482),B(565760935, 3254721099),B(3832689765, 3128291366),B(611267689, 3006772801),B(2069237639, 2889974627),B(634983037, 2777713482),B(636115015, 2669813124),B(2475869197, 2566104158),B(2906207805, 2466423770),B(1014548671, 2370615470),B(3905664711, 2278528845),B(357442699, 2190019329),B(12130311, 4136984068),B(1150517819, 3984811990),B(1282781127, 3838237309),B(711027869, 3697054134),B(1263716113, 3561064147),B(3833432755, 3430076325),B(2679937791, 3303906673),
B(649446999, 3182377962),B(801194933, 3065319482),B(3004119803, 2952566803),B(4056986791, 2843961544),B(4233447393, 2739351149),B(1729952471, 2638588674),B(3788447979, 2541532578),B(1708958715, 2448046530),B(3041859429, 2357999210),B(3840355911, 2271264131),B(2939528895, 2187719458),B(3097990875, 4144946282),B(3385274701, 4000165426),B(781118245, 3860441692),B(1022838697, 3725598436),B(1421070371, 3595465186),B(1527281017, 3469877424),B(3183585153, 3348676378),B(3120482551, 3231708823),B(2782433689, 3118826885),
B(4264678509, 3009887855),B(4231117427, 2904754010),B(2013497133, 2803292437),B(3766623243, 2705374864),B(292377171, 2610877503),B(3551366237, 2519680885),B(3573492563, 2431669719),B(3861151503, 2346732738),B(1349639165, 2264762563),B(355292345, 2185655564),B(1094008353, 4152144342),B(888005365, 4014070760),B(1452672371, 3880588616),B(4221971395, 3751545228),B(2937507469, 3626792993),B(1535887035, 3506189214),B(315054121, 3389595940),B(1117350423, 3276879807),B(689331449, 3167911887),B(1533691129, 3062567538),
B(874091419, 2960726264),B(4277131405, 2862271574),B(3124799087, 2767090854),B(1182153489, 2675075232),B(3728060647, 2586119456),B(2996935223, 2500121777),B(2289718091, 2416983827),B(872903591, 2336610510),B(3537364441, 2258909891),B(2742986603, 2183793095),B(2200172025, 4158683227),B(1875562303, 4026723603),B(1560090639, 3898951204),B(24576567, 3775233165),B(174449861, 3655440836),B(1416889171, 3539449650),B(1669722245, 3427138993),B(4138608545, 3318392077),B(2532545389, 3213095822),B(9891713, 3111140734),
B(1200196917, 3012420793),B(2563132405, 2916833345),B(2066991597, 2824278993),B(1940207399, 2734661493),B(4034267623, 2647887655),B(1646023827, 2563867248),B(1726343053, 2482512901),B(4041602373, 2403740017),B(1306776767, 2327466685),B(4192203911, 2253613589),B(629295511, 2182103935),B(3150795225, 4164649529),B(616107769, 4038285861),B(510442367, 3915756315),B(3565845011, 3796944556),B(1184999105, 3681737781),B(773250693, 3570026606),B(603408307, 3461704968),B(3984139147, 3356670021),B(3601842963, 3254822042),
B(62330819, 3156064332),B(2706600599, 3060303124),B(3736389115, 2967447500),B(2595886179, 2877409299),B(2948188283, 2790103034),B(3379998057, 2705445813),B(2978432265, 2623357259),B(4279137901, 2543759433),B(389620833, 2466576763),B(1820610517, 2391735966),B(3948617289, 2319165986),B(2200146915, 2248797923),B(3142855687, 2180564965),B(2491132963, 4170115308),B(2584870519, 4048892689),B(2647770133, 3931193935),B(402011561, 3816916610),B(1151499819, 3705961254),B(2484240215, 3598231300),B(2667022533, 3493632988),
B(2353478783, 3392075283),B(3595449867, 3293469796),B(1566529015, 3197730709),B(3069964837, 3104774696),B(2832250753, 3014520856),B(3210666357, 2926890638),B(4037126377, 2841807775),B(997493705, 2759198218),B(888170537, 2678990068),B(1969452227, 2601113518),B(3606248489, 2525500790),B(2019393645, 2452086077),B(1991813467, 2380805483),B(1365782021, 2311596971),B(3957973285, 2244400306),B(560937993, 2179157007),B(4136114425, 4175141017),B(3221925527, 4058657800),B(2321323915, 3945424375),B(2754002575, 3835350075),
B(3824727975, 3728346763),B(366782245, 3624328762),B(1626682789, 3523212782),B(2534776209, 3424917860),B(1621642867, 3329365291),B(932856985, 3236478565),B(610278491, 3146183307),B(814099327, 3058407217),B(2190908249, 2973080012),B(393719207, 2890133371),B(230233889, 2809500877),B(2006564411, 2731117967),B(2833204109, 2654921880),B(4125529205, 2580851605),B(3651172241, 2508847834),B(2021037329, 2438852913),B(1985806797, 2370810796),B(379181681, 2304667002),B(2618298721, 2240368568),B(3776726313, 2177864011),
B(1129286193, 4179777752),B(1798832365, 4067677552),B(1410471819, 3958583841),B(4289362395, 3852415985),B(4234136555, 3749095515),B(1701829311, 3648546065),B(1903860267, 3550693316),B(2223826025, 3455464944),B(3142468519, 3362790564),B(3845417439, 3272601679),B(3823398209, 3184831629),B(1714255085, 3099415542),B(4115285739, 3016290284),B(1264003569, 2935394418),B(3928479757, 2856668150),B(3924155761, 2780053294),B(4145724803, 2705493222),B(2013438251, 2632932826),B(3510382807, 2562318474),B(3256917023, 2493597975),
B(3510876953, 2426720536),B(3251614853, 2361636727),B(178368829, 2298298444),B(1212017309, 2236658871),B(2732644369, 2176672450),B(1792251825, 4184068990),B(776986435, 4076034137),B(1937844025, 3970788800),B(1935301797, 3868260953),B(733219823, 3768380429),B(1512026089, 3671078872),B(3022359941, 3576289692),B(1421539503, 3483948019),B(1458899903, 3393990656),B(2519769491, 3306356039),B(2350632009, 3220984194),B(1161762983, 3137816695),B(1691728125, 3056796624),B(821246681, 2977868534),B(2686695727, 2900978408),
B(1642109063, 2826073626),B(3680488685, 2753102924),B(309229733, 2682016365),B(2150721381, 2612765297),B(3318647395, 2545302328),B(1026174481, 2479581289),B(1611215051, 2415557201),B(987553, 2353186249),B(1244874237, 2292425747),B(2423056981, 2233234113),B(3564543025, 2175570838),B(1697609065, 4188051963),B(3786621833, 4083798091),B(1147592771, 3982139429),B(2520046727, 3883011372),B(203735887, 3786350927),B(4278791809, 3692096665),B(3796554179, 3600188691),B(863419413, 3510568598),B(1549699407, 3423179432),
B(2176889629, 3337965659),B(949332969, 3254873127),B(474215407, 3173849031),B(1075965763, 3094841881),B(1993339149, 3017801469),B(1779939883, 2942678837),B(2116064789, 2869426245),B(2062046391, 2797997142),B(4145127825, 2728346135),B(2134355001, 2660428963),B(1964360117, 2594202464),B(2716818977, 2529624552),B(2009229175, 2466654189),B(4243173851, 2405251357),B(1576118275, 2345377037),B(561773609, 2286993178),B(4197032737, 2230062677),B(849088629, 2174549358),B(1801383609, 4191758744),B(201777275, 4091030306),
B(2065086747, 3992722383),B(1938673237, 3896776811),B(1748774399, 3803136822),B(3983004567, 3711747012),B(4044386613, 3622553310),B(3168451603, 3535502943),B(3167401885, 3450544406),B(101861791, 3367627433),B(2572581367, 3286702963),B(1542071589, 3207723118),B(3281559379, 3130641167),B(817221985, 3055411505),B(4064526005, 2981989619),B(4028048851, 2910332070),B(4143845933, 2840396460),B(2734931859, 2772141411),B(3825541753, 2705526538),B(417384487, 2640512429),B(3181613435, 2577060615),B(2838105705, 2515133556),
B(3603168051, 2454694611),B(3095172281, 2395708021),B(247409709, 2338138886),B(1109628193, 2281953143),B(1010941931, 2227117550),B(3162443771, 2173599662),B(3861607787, 4195217112),B(3261875581, 4097783617),B(3162808291, 4002613005),B(2565433391, 3909652721),B(3004751143, 3818851430),B(2759776933, 3730158990),B(2481244349, 3643526423),B(696458821, 3558905889),B(601989949, 3476250658),B(2311740179, 3395515086),B(1974022979, 3316654590),B(1992835977, 3239625621),B(2230164509, 3164385642),B(2197049395, 3090893104),
B(1292804511, 3019107423),B(1332932737, 2948988957),B(2722650951, 2880498985),B(2814038363, 2813599686),B(691061045, 2748254117),B(4037968789, 2684426191),B(3682939785, 2622080663),B(1669056719, 2561183104),B(2612136361, 2501699884),B(2660058523, 2443598156),B(1779352877, 2386845835),B(671315715, 2331411581),B(3750469985, 2277264781),B(2374517703, 2224375536),B(2710200391, 2172714638),B(2065133329, 4198451311),B(2009546815, 4104104222),B(3454144359, 4011877289),B(2548423103, 3921722869),B(2519419243, 3833594388),
B(531388197, 3747446320),B(2637411897, 3663234160),B(2346241289, 3580914406),B(62775539, 3500444532),B(3222772241, 3421782966),B(2778078333, 3344889074),B(3294145347, 3269723132),B(3534036953, 3196246310),B(497842575, 3124420651),B(3988088061, 3054209048),B(1528094293, 2985575233),B(2439773357, 2918483748),B(2125498741, 2852899935),B(3952363711, 2788789913),B(4209821269, 2726120564),B(231414461, 2664859514),B(167799853, 2604975114),B(14218147, 2546436429),B(870582193, 2489213218),B(1974214291, 2433275920),B(3830309369, 2378595638),
B(4226371933, 2325144125),B(4277374459, 2272893768),B(2994423619, 2221817575),B(1820121133, 2171889160),B(2072238271, 4201481661),B(1047994417, 4110030865),B(1471085899, 4020570616),B(3808711401, 3933057587),B(225892427, 3847449396),B(2386373531, 3763704579),B(2453034627, 3681782579),B(390032245, 3601643720),B(3036529067, 3523249188),B(3501975517, 3446561017),B(973384821, 3371542066),B(766809683, 3298156001),B(3175538029, 3226367280),B(2553241599, 3156141136),B(891238723, 3087443557),B(1495106225, 3020241271),
B(4201212749, 2954501731),B(2099655079, 2890193100),B(1205645053, 2827284231),B(2917729819, 2765744656),B(771075939, 2705544572),B(45057921, 2646654822),B(65583087, 2589046885),B(3597289827, 2532692860),B(1757278643, 2477565456),B(3141745051, 2423637972),B(4058803409, 2370884291),B(2919819405, 2319278864),B(2928364461, 2268796697),B(3041052847, 2219413341),B(2944886349, 2171104879),B(1012129099, 4204326895),B(248250883, 4115599357),B(2906658199, 4028744312),B(1031880611, 3943722245),B(3668919365, 3860494471),
B(4222612087, 3779023125),B(951852541, 3699271140),B(1845522809, 3621202229),B(962280615, 3544780874),B(3511353187, 3469972304),B(858510767, 3396742485),B(2800489465, 3325058097),B(2523551609, 3254886527),B(3065580787, 3186195848),B(2173499911, 3118954808),B(4247104443, 3053132813),B(3506950341, 2988699917),B(2783606963, 2925626804),B(3477140309, 2863884777),B(1020501637, 2803445746),B(3001177405, 2744282211),B(1196648955, 2686367256),B(578429267, 2629674530),B(2181529863, 2574178239),B(4240440519, 2519853134),
B(93852931, 2466674500),B(2900450991, 2414618139),B(2654512491, 2363660369),B(1508699401, 2313778005),B(2828928187, 2264948351),B(1205347841, 2217149192),B(3464019163, 2170358779),B(4272472711, 4207010660),B(3919960541, 4120855289),B(2877607989, 4036464294),B(2637004665, 3953801542),B(225520219, 3872831641),B(431271901, 3793519922),B(3591152645, 3715832427),B(3274362349, 3639735895),B(2424640197, 3565197744),B(690368547, 3492186060),B(161535803, 3420669582),B(3718626957, 3350617689),B(1673861563, 3282000390),
B(2515245117, 3214788304),B(355636251, 3148952655),B(3617749829, 3084465253),B(378386457, 3021298490),B(2083615409, 2959425318),B(2404414357, 2898819247),B(1535327175, 2839454328),B(1426001251, 2781305143),B(1989944487, 2724346795),B(2565456825, 2668554897),B(19199035, 2613905562),B(653066757, 2560375390),B(2945888857, 2507941462),B(2651134833, 2456581329),B(3052716543, 2406273000),B(296437223, 2356994936),B(3909315931, 2308726036),B(2295514803, 2261445636),B(2041275857, 2215133491),B(3573642003, 2169769772),
B(4247596199, 4209525489),B(177784931, 4125783418),B(2351495163, 4043707266),B(2437715641, 3963263894),B(1933663763, 3884420820),B(3078641715, 3807146208),B(888507393, 3731408857),B(2058271003, 3657178184),B(1991491139, 3584424217),B(1539434213, 3513117579),B(3299466311, 3443229477),B(337008175, 3374731693),B(260564241, 3307596567),B(3025686261, 3241796991),B(1167980427, 3177306398),B(2446175527, 3114098746),B(1862203227, 3052148514),B(1824303553, 2991430687),B(3125872233, 2931920748),B(1082271829, 2873594669),
B(3988307835, 2816428897),B(865099247, 2760400352),B(3033903455, 2705486408),B(586941873, 2651664894),B(1243108741, 2598914076),B(1249180779, 2547212655),B(4275426667, 2496539754),B(2391355065, 2446874914),B(711361227, 2398198080),B(4091565779, 2350489596),B(223541287, 2303730201),B(3535672649, 2257901011),B(974871745, 2212983524),B(1518888051, 2168959601),B(3989249707, 4211904589),B(2833941509, 4130448278),B(1078739019, 4050567295),B(2497221447, 3972231173),B(3135782643, 3895410036),B(2502554183, 3820074585),
B(2817915801, 3746196087),B(603255767, 3673746366),B(654801651, 3602697789),B(845310379, 3533023259),B(3570929389, 3464696202),B(2286692125, 3397690560),B(3243588195, 3331980776),B(806548879, 3267541790),B(826662581, 3204349024),B(1857649953, 3142378377),B(2920721113, 3081606214),B(3443019255, 3022009357),B(3944819063, 2963565076),B(3166032113, 2906251081),B(207753257, 2850045513),B(1674922165, 2794926934),B(3741672305, 2740874323),B(665582511, 2687867066),B(2557828449, 2635884944),B(2266812403, 2584908133),
B(3031790661, 2534917190),B(3814897331, 2485893049),B(2428960103, 2437817013),B(3564294427, 2390670745),B(1638023755, 2344436265),B(2878979859, 2299095938),B(737603495, 2254632473),B(3394076595, 2211028910),B(1684732815, 2168268621),B(1731062467, 4214124784),B(848059109, 4134803940),B(2685516091, 4056976121),B(177335085, 3980613226),B(3288008199, 3905687679),B(544706441, 3832172428),B(2978655987, 3760040925),B(2956927195, 3689267126),B(2508593691, 3619825475),B(3756493635, 3551690897),B(94987803, 3484838791),
B(2459411307, 3419245015),B(1889193779, 3354885886),B(1515116223, 3291738164),B(1993324035, 3229779047),B(502624387, 3168986163),B(3292299101, 3109337559),B(228296833, 3050811699),B(109759633, 2993387448),B(2189770901, 2937044071),B(2672738179, 2881761224),B(1817060847, 2827518945),B(3041755025, 2774297647),B(4025857143, 2722078113),B(1264474439, 2670841488),B(3775753367, 2620569269),B(113631879, 2571243306),B(3230066759, 2522845785),B(1377878769, 2475359233),B(4022802513, 2428766501),B(2366328315, 2383050767),
B(3383523885, 2338195522),B(4222428235, 2294184570),B(1445054275, 2251002020),B(741191701, 2208632278),B(1336307013, 2167060045),B(2071525389, 4216377412),B(509328635, 4139225577),B(1340891587, 4063485476),B(4106985223, 3989131277),B(2676156289, 3916137622),B(3931488455, 3844479614),B(4187426187, 3774132814),B(633634713, 3705073230),B(3433947439, 3637277306),B(1223773685, 3570721922),B(253283461, 3505384377),B(4020830943, 3441242386),B(2104752483, 3378274075),B(2542144281, 3316457966),B(369507649, 3255772977),
B(2573616617, 3196198409),B(2067892151, 3137713945),B(3763157587, 3080299637),B(3938376143, 3023935904),B(210816257, 2968603523),B(2031090459, 2914283620),B(3038757925, 2860957670),B(1168408137, 2808607486),B(2072460297, 2757215212),B(1556624593, 2706763321),B(2853679883, 2657234605),B(7333937, 2608612173),B(372013487, 2560879440),B(320798539, 2514020127),B(52561843, 2468018252),B(1655605093, 2422858125),B(3304709109, 2378524344),B(2468661279, 2335001789),B(3825597845, 2292275615),B(1813835603, 2250331251),
B(2235286363, 2209154390),B(1299795125, 2168730989),B(3186701265, 4218246553),B(2080518007, 4142896269),B(3515760231, 4068891962),B(2696258787, 3996209590),B(1185600891, 3924825539),B(4021819559, 3854716616),B(240799189, 3785860046),B(4107294747, 3718233455),B(2424415841, 3651814875),B(1184962423, 3586582726),B(4050927085, 3522515814),B(4255760109, 3459593326),B(2804691345, 3397794819),B(1424065221, 3337100215),B(315192375, 3277489795),B(703615837, 3218944192),B(3584917731, 3161444385),B(363319417, 3104971695),
B(2619092385, 3049507772),B(3622128595, 2995034598),B(432371509, 2941534476),B(3564494737, 2888990022),B(4144034083, 2837384167),B(1626308281, 2786700145),B(1876076167, 2736921488),B(2780198629, 2688032024),B(1745578689, 2640015870),B(3600211511, 2592857425),B(3120339871, 2546541369),B(2306185081, 2501052654),B(2269765497, 2456376501),B(4087719245, 2412498395),B(1432562151, 2369404082),B(3630506359, 2327079559),B(3240031097, 2285511077),B(4108975417, 2244685130),B(2529736657, 2204588455),B(3090830845, 2165208024),
B(2521249667, 4220488434),B(958265935, 4147301108),B(1928615277, 4075382920),B(780434393, 4004711863),B(4206225697, 3935266309),B(1818646631, 3867025009),B(2643711563, 3799967078),B(3378872667, 3734071996),B(76730287, 3669319599),B(296446295, 3605690070),B(1355011629, 3543163938),B(3389875007, 3481722069),B(1390526361, 3421345662),B(3435979503, 3362016239),B(2116147659, 3303715646),B(2208895829, 3246426041),B(1526252511, 3190129893),B(2232016477, 3134809974),B(1084099769, 3080449356),B(1544350917, 3027031403),
B(504409301, 2974539769),B(1160507441, 2922958390),B(491038975, 2872271482),B(2870039125, 2822463533),B(3975654167, 2773519302),B(821936119, 2725423812),B(2138028521, 2678162343),B(434013511, 2631720434),B(236781079, 2586083872),B(3705855751, 2541238691),B(868104789, 2497171170),B(3120416647, 2453867821),B(4030713065, 2411315394),B(575857141, 2369500868),B(1796683527, 2328411445),B(3390076871, 2288034552),B(1247395997, 2248357834),B(984513519, 2209369148),B(1983664809, 2171056563),B(3640336905, 4222455278),
B(2164175367, 4151167483),B(1752731263, 4081083241),B(4067703825, 4012182232),B(2423209201, 3944444481),B(4154707201, 3877850347),B(1868297653, 3812380524),B(937478285, 3748016029),B(161178251, 3684738201),B(2885625543, 3622528693),B(2748736063, 3561369470),B(4169942857, 3501242799),B(269542369, 3442131249),B(2700436353, 3384017679),B(3126891385, 3326885242),B(3783081879, 3270717373),B(1141216603, 3215497788),B(4287646881, 3161210475),B(2101731241, 3107839697),B(3785727887, 3055369978),B(2416177131, 3003786107),
B(3245107909, 2953073127),B(781459121, 2903216336),B(3431564011, 2854201277),B(2614174101, 2806013741),B(2308920867, 2758639756),B(1658902085, 2712065587),B(3636792847, 2666277730),B(2524882057, 2621262911),B(1743766813, 2577008078),B(1895369669, 2533500400),B(1965239755, 2490727263),B(794603509, 2448676266),B(3112578103, 2407335216),B(59299211, 2366692129),B(1504972711, 2326735219),B(4196405971, 2287452902),B(3100946753, 2248833790),B(2993974275, 2210866685),B(221059471, 2173540580),B(2934728717, 4223377626),
B(932263647, 4152981233),B(3258518067, 4083758225),B(4272616403, 4015689045),B(2642498347, 3948754461),B(3776259595, 3882935560),B(1167667917, 3818213747),B(1073879781, 3754570734),B(324668277, 3691988540),B(3156238469, 3630449482),B(4049020833, 3569936174),B(987889705, 3510431519),B(484139619, 3451918703),B(1468455521, 3394381194),B(998785435, 3337802736),B(302610793, 3282167343),B(2558105993, 3227459295),B(2408706285, 3173663136),B(1565432763, 3120763666),B(3247034487, 3068745938),B(2632605525, 3017595256),
B(3386323447, 2967297167),B(119728037, 2917837461),B(4095996403, 2869202161),B(502192285, 2821377529),B(493455489, 2774350050),B(3320826285, 2728106437),B(1682058003, 2682633626),B(226091099, 2637918768),B(4257035947, 2593949228),B(108095755, 2550712586),B(195542001, 2508196623),B(2424627509, 2466389327),B(1382202259, 2425278887),B(4067272941, 2384853686),B(2910816061, 2345102304),B(570142589, 2306013509),B(594552143, 2267576256),B(2613131493, 2229779685),B(2040910809, 2192613118),B(2889588627, 2156066053),
B(1619766551, 4226268426),B(228881527, 4158668409),B(2851648299, 4092149667),B(4218033251, 4026694906),B(1809575583, 3962287108),B(2624291107, 3898909525),B(180792183, 3836545680),B(3361140097, 3775179356),B(1123528293, 3714794600),B(519041945, 3655375710),B(568907623, 3596907237),B(781922271, 3539373979),B(1357902797, 3482760977),B(3662676949, 3427053511),B(2380337475, 3372237098),B(3698224103, 3318297484),B(800951035, 3265220646),B(1158622255, 3212992782),B(2525947451, 3161600313),B(3547597557, 3111029877),
B(1721216829, 3061268326),B(189048147, 3012302721),B(1879517357, 2964120330),B(3879921899, 2916708626),B(626461755, 2870055283),B(202942555, 2824148169),B(2204964071, 2778975348),B(1590581531, 2734525076),B(1334104881, 2690785795),B(3814854715, 2647746132),B(2412355679, 2605394898),B(3369436365, 2563721080),B(610575239, 2522713844),B(2296543137, 2482362526),B(1738013863, 2442656636),B(39229561, 2403585850),B(3159263237, 2365140008),B(1977815553, 2327309116),B(4082073041, 2290083336),B(1307608337, 2253452991),
B(1879485393, 2217408555),B(2596707749, 2181940657),B(1243904867, 4227021531),B(3443156135, 4160150658),B(3847620475, 4094337673),B(4049219077, 4029565840),B(293706627, 3965818689),B(4146379137, 3903080007),B(3312823001, 3841333843),B(49156653, 3780564495),B(2603282433, 3720756508),B(4042526241, 3661894675),B(2980799, 3603964029),B(2406655659, 3546949836),B(1897636699, 3490837600),B(3547215355, 3435613051),B(2679974891, 3381262147),B(3896085933, 3327771066),B(1681532485, 3275126207),B(4206808561, 3223314181),
B(1526059905, 3172321815),B(2727004397, 3122136140),B(294051183, 3072744396),B(3414938079, 3024134021),B(2788389413, 2976292656),B(73292281, 2929208135),B(3191710355, 2882868483),B(367258385, 2837261919),B(3089825317, 2792376843),B(3384550695, 2748201843),B(656107, 2704725686),B(3322648459, 2661937314),B(1820906147, 2619825849),B(1707727307, 2578380581),B(2356864847, 2537590971),B(1972854665, 2497446647),B(3442438973, 2457937400),B(3185334811, 2419053184),B(1656218299, 2380784111),B(1135395921, 2343120449),
B(3690318621, 2306052620),B(715301379, 2269571200),B(1291428583, 2233666910),B(579779521, 2198330621),B(4209514519, 2163553346),B(247308087, 4227359773),B(442178665, 4160816467),B(802336541, 4095320626),B(231937477, 4030855762),B(4263662937, 3967405645),B(3216671573, 3904954304),B(2170368657, 3843486016),B(3965397839, 3782985306),B(1062150623, 3723436945),B(2022385299, 3664825940),B(2415496371, 3607137537),B(3224569077, 3550357213),B(3733758715, 3494470674),B(3252780109, 3439463851),B(3084681797, 3385322896),
B(143140773, 3332034180),B(2280279593, 3279584286),B(896786421, 3227960012),B(3909901575, 3177148360),B(226657621, 3127136541),B(1747723561, 3077911962),B(3984581361, 3029462232),B(2725561277, 2981775155),B(2322853451, 2934838725),B(2712273961, 2888641126),B(3817223245, 2843170728),B(1563816857, 2798416085),B(1273826695, 2754365929),B(1187676631, 2711009171),B(1949000609, 2668334896),B(3393039069, 2626332361),B(1520804599, 2584990993),B(2835961789, 2544300383),B(206968245, 2504250289),B(445957129, 2464830627),
B(522357807, 2426031474),B(2602823447, 2387843062),B(3490254927, 2350255778),B(1408935345, 2313260160),B(2953289105, 2276846893),B(132918909, 2241006812),B(3410731453, 2205730892),B(1882637787, 2171010255),B(920227769, 2136836159),B(3990647301, 4231470188),B(2923444115, 4168911827),B(3300463109, 4107278333),B(3809265703, 4046556033),B(3769367693, 3986731456),B(3181382655, 3927791330),B(2965930113, 3869722579),B(1094535731, 3812512321),B(1789628619, 3756147863),B(3431174297, 3700616701),B(3821966049, 3645906516),
B(1334094953, 3592005171),B(523929045, 3538900707),B(738199453, 3486581343),B(2068404181, 3435035472),B(2881235381, 3384251659),B(1807478471, 3334218638),B(4186965863, 3284925308),B(2902432659, 3236360735),B(2319404769, 3188514144),B(3725429183, 3141374920),B(3805976489, 3094932606),B(1859804573, 3049176899),B(2866670995, 3004097647),B(3520314207, 2959684850),B(4174230867, 2915928655),B(3748462267, 2872819355),B(3365110895, 2830347386),B(1530665987, 2788503326),B(2337952929, 2747277891),B(2325976375, 2706661936),
B(3240335089, 2666646450),B(3447634927, 2627222556),B(2361733651, 2588381508),B(700071853, 2550114689),B(863208469, 2512413609),B(3140772131, 2475269904),B(2037001125, 2438675335),B(4188940407, 2402621782),B(3451044383, 2367101248),B(3338782567, 2332105852),B(930211407, 2297627831),B(943323327, 2263659535),B(4152956951, 2230193428),B(210422779, 2197222088),B(1624923009, 4233689118),B(1410029961, 4173285223),B(334655011, 4113743137),B(3538935995, 4055050563),B(828278377, 3997195383),B(3167989053, 3940165647),
B(2021873871, 3883949580),B(1856465949, 3828535572),B(1254676177, 3773912180),B(4241118247, 3720068123),B(1687470139, 3666992284),B(105217329, 3614673701),B(3334460703, 3563101569),B(2961356475, 3512265240),B(3232013063, 3462154215),B(3151482953, 3412758146),B(190436199, 3364066833),B(2712718329, 3316070219),B(3877284055, 3268758394),B(2912011067, 3222121588),B(743134483, 3176150170),B(43283535, 3130834646),B(1106421977, 3086165658),B(2137887969, 3042133982),B(3957819501, 2998730525),B(1936406635, 2955946325),
B(3814010807, 2913772545),B(390065485, 2872200478),B(748289679, 2831221537),B(3167600249, 2790827260),B(501398415, 2751009307),B(2843811379, 2711759453),B(171949837, 2673069595),B(2401628847, 2634931741),B(2236244817, 2597338017),B(2541266025, 2560280659),B(868711763, 2523752015),B(4144642221, 2487744540),B(503813467, 2452250801),B(4234232849, 2417263465),B(2031561115, 2382775310),B(2425481611, 2348779212),B(3693119555, 2315268151),B(517291183, 2282235208),B(3618493157, 2249673559),B(3639888027, 2217576482),
B(2619678827, 4234323768),B(3892022395, 4174536507),B(2939395575, 4115593423),B(1932360979, 4057482596),B(32207055, 4000192275),B(364551103, 3943710874),B(4252149531, 3888026971),B(1294815167, 3833129308),B(2539075839, 3779006781),B(771479509, 3725648447),B(3962484253, 3673043514),B(125090015, 3621181347),B(3910172411, 3570051455),B(253056473, 3519643502),B(4112820461, 3469947291),B(79312461, 3420952776),B(2364258039, 3372650046),B(3246459913, 3325029335),B(3242877801, 3278081013),B(2744788635, 3231795586),
B(2361976015, 3186163694),B(3383346903, 3141176109),B(4057364295, 3096823734),B(280609797, 3053097601),B(3577780159, 3009988865),B(3357098487, 2967488811),B(2288605981, 2925588844),B(249751543, 2884280491),B(4146181099, 2843555397),B(3476696361, 2803405329),B(1835229061, 2763822167),B(1269169169, 2724797906),B(3917130483, 2686324654),B(859976699, 2648394633),B(4018296749, 2611000170),B(835878681, 2574133706),B(3546526781, 2537787783),B(4044332751, 2501955053),B(1859816121, 2466628270),B(2161427909, 2431800289),
B(961014015, 2397464068),B(471656635, 2363612663),B(3077049165, 2330239228),B(1091054237, 2297337016),B(960948287, 2264899372),B(308788693, 2232919737),B(3709080817, 2201391643),B(3395442119, 4237041586),B(2917908047, 4179897114),B(924818739, 4123523343),B(219642807, 4067909878),B(115397311, 4013046465),B(1199099951, 3958922988),B(1615806205, 3905529468),B(2050623499, 3852856060),B(2227376099, 3800893052),B(1807385083, 3749630863),B(1391978005, 3699060041),B(3627329241, 3649171261),B(1525349021, 3599955326),
B(1243899887, 3551403160),B(2015586105, 3503505811),B(1943267749, 3456254448),B(3891188485, 3409640358),B(4290558389, 3363654947),B(3513025287, 3318289736),B(3451041275, 3273536360),B(893820967, 3229386568),B(2467473879, 3185832218),B(1008563919, 3142865281),B(3564220561, 3100477833),B(3643446699, 3058662060),B(797681513, 3017410252),B(3104967677, 2976714801),B(3966662561, 2936568205),B(1935059529, 2896963062),B(3441281551, 2857892068),B(4127398981, 2819348020),B(321312769, 2781323812),B(588580141, 2743812431),
B(3000406657, 2706806961),B(2541290359, 2670300580),B(2885504353, 2634286556),B(2476650427, 2598758249),B(2153941135, 2563709108),B(4259469655, 2529132670),B(3225510907, 2495022561),B(2000648693, 2461372491),B(2774190387, 2428176255),B(2062721917, 2395427733),B(3042798989, 2363120886),B(2179207827, 2331249758),B(1687521329, 2299808472),B(585440573, 2268791231),B(2986769275, 2238192315),B(53119351, 4235893290),B(52254179, 4177631802),B(1859450035, 4120171656),B(1802301491, 4063501831),B(3068439849, 4007611456),
B(2455110367, 3952489811),B(3011728725, 3898126322),B(1034115015, 3844510562),B(3243309197, 3791632245),B(1132876115, 3739481230),B(1267322619, 3688047512),B(4155841521, 3637321225),B(419278307, 3587292641),B(1428630651, 3537952161),B(1334328033, 3489290322),B(3628761091, 3441297789),B(571415413, 3393965358),B(4259382465, 3347283947),B(492774033, 3301244605),B(1527264519, 3255838498),B(143850451, 3211056918),B(1128090765, 3166891274),B(1308432593, 3123333095),B(4051611049, 3080374025),B(3789274761, 3038005825),
B(704058981, 2996220368),B(2624131047, 2955009637),B(1240022073, 2914365729),B(4246856837, 2874280846),B(3151648367, 2834747301),B(1298476795, 2795757510),B(3326089613, 2757303993),B(416463277, 2719379376),B(2872751885, 2681976382),B(4061340283, 2645087838),B(270903585, 2608706669),B(2062829895, 2572825894),B(2752149657, 2537438632),B(2802116659, 2502538095),B(4232007103, 2468117588),B(806867843, 2434170510),B(2662861543, 2400690347),B(877884843, 2367670679),B(835449407, 2335105171),B(4121726675, 2302987576),
B(3379264861, 2271311735),B(3001292937, 2240071571),B(1241128581, 2209261092),B(2455206659, 2178874387),B(3881309801, 4236873756),B(2005241837, 4179565988),B(1675623841, 4123033362),B(566587667, 4067265394),B(4140967207, 4012251740),B(231984093, 3957982200),B(2455842971, 3904446706),B(3539939191, 3851635331),B(1773949277, 3799538281),B(1798089639, 3748145893),B(2611998547, 3697448636),B(2867585061, 3647437108),B(1969600447, 3598102034),B(1277510401, 3549434264),B(1112330575, 3501424772),B(2157008345, 3454064654),
B(2659082869, 3407345127),B(24242675, 3361257527),B(1094450521, 3315793305),B(2454649885, 3270944030),B(896332525, 3226701385),B(3971950451, 3183057163),B(1984237853, 3140003272),B(193478709, 3097531726),B(3867341883, 3055634647),B(3416744419, 3014304267),B(2566252385, 2973532920),B(3658525463, 2933313044),B(1631280481, 2893637181),B(3845526063, 2854497971),B(2749522411, 2815888157),B(161627035, 2777800578),B(1566575477, 2740228169),B(1898975689, 2703163963),B(1467678255, 2666601086),B(480385475, 2630532757),
B(2232254953, 2594952286),B(3482659463, 2559853075),B(2083885969, 2525228615),B(385962535, 2491072484),B(121684175, 2457378347),B(1655790911, 2424139955),B(3302394957, 2391351144),B(709733905, 2359005834),B(3491208407, 2327098024),B(382329347, 2295621799),B(1771707145, 2264571319),B(691419091, 2233940827),B(2589747667, 2203724641),B(3626354885, 2173917158)]);}
let Xk=G();
let A6E=b=>{return !(isNaN(b)?1:0)?Ee(b):B(0, 2146959360);}
let JT=G();
let AB_=null;let Lq=null;let Bgl=null;let FE=()=>{FE=Bk(JT);AXV();}
let AFh=b=>{let c,d,e,f,g,h;FE();c=new L;c.og=H(16);c=MW(c,b,(-10000));d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let MW=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;FE();if(isNaN(c)?1:0){a:{e=Dr(b);B5(b,C(734));if(d!=(-10000)){if(GH(T(I(e),I(d)),I(Dr(b))))I6(b,e+d|0);else{e=e+d|0;while(true){if(Dr(b)>=e)break a;Ey(b,32);}}}}return b;}if(c!==Infinity&&c!==(-Infinity)){f=A6E(c);e=Bba(f,M);if(!e){g:{e=Dr(b);B5(b,C(735));if(d!=(-10000)){if(GH(T(I(e),I(d)),I(Dr(b))))I6(b,e+d|0);else{e=e+d|0;while(true){if(Dr(b)>=e)break g;Ey(b,48);}}}}return b;}if(Dh(f,B(0, 2147483648))){i:{e=Dr(b);B5(b,C(736));if
(d!=(-10000)){if(GH(T(I(e),I(d)),I(Dr(b))))I6(b,e+d|0);else{e=e+d|0;while(true){if(Dr(b)>=e)break i;Ey(b,48);}}}}return b;}g=Z(Bd(Q(f,52),I(2047)));h=Bd(f,B(4294967295, 1048575));if(!g)i=(-1074);else{i=(g-1023|0)-52|0;h=B2(h,B(0, 1048576));}j=e>=0?0:1;k=Ej(Bd(h,I(1)),M)?0:1;l=W(I(4),h);m=T(l,I(2));n=Dh(h,B(0, 1048576))&&g!=1?0:1;o=B4(B4(l,I(1)),I(n));e=i+(-2)|0;p=0;q=0;if(e>=0){r=Kt(0,((e*78913|0)>>>18|0)-1|0);s=(( -e|0)+r|0)+((122+TQ(r)|0)-1|0)|0;t=L7(l,r,s);u=L7(m,r,s);v=L7(o,r,s);if(r<=21){if(Dh(Dx(l,I(5)),
M))q=LZ(l,r);else if(k)p=LZ(o,r);else if(LZ(m,r))u=B4(u,I(1));}}else{w= -e|0;x=Kt(0,(C7(w,732923)>>>20|0)-1|0);s=w-x|0;y=x-(TQ(s)-121|0)|0;t=LY(l,s,y);u=LY(m,s,y);v=LY(o,s,y);r=x+e|0;if(x<=1){q=1;if(!k)u=B4(u,I(1));else p=n!=1?0:1;}else if(x<63)q=Ej(Bd(l,B4(BP(I(1),x-1|0),I(1))),M)?0:1;}z=XS(u);w=(r+z|0)-1|0;ba=0;bb=0;if(!p&&!q){while(true){u=BS(u,I(10));bc=BS(v,I(10));if(Gb(u,bc))break;bb=Z(Dx(t,I(10)));t=BS(t,I(10));ba=ba+1|0;v=bc;}bc=T(t,I(Ej(t,v)&&bb<5?0:1));}else{while(true){u=BS(u,I(10));h=BS(v,I(10));if
(Gb(u,h))break;p=p&(Ej(Dx(v,I(10)),M)?0:1);q=q&(bb?0:1);bb=Z(Dx(t,I(10)));t=BS(t,I(10));ba=ba+1|0;v=h;}if(p)while(Dh(Dx(v,I(10)),M)){q=q&(bb?0:1);bb=Z(Dx(t,I(10)));t=BS(t,I(10));v=BS(v,I(10));ba=ba+1|0;}if(q&&bb==5&&Dh(Bd(t,I(1)),M))bb=4;bc=T(t,I(!(Dh(t,v)&&!p)&&bb<5?0:1));}s=z-ba|0;bd=Dr(b);if(j)Ey(b,45);br:{if(w<0){B5(b,C(737));be=(-1);while(be>w){Ey(b,48);be=be+(-1)|0;}bf=Dr(b);be=0;while(be<s){Im(b,bf,Z(T(I(48),Dx(bc,I(10))))&65535);bc=BS(bc,I(10));be=be+1|0;}}else{e=w+1|0;if(e>=s){j=Dr(b);be=0;while(be
<s){Im(b,j,Z(T(I(48),Dx(bc,I(10))))&65535);bc=BS(bc,I(10));be=be+1|0;}while(s<e){Ey(b,48);s=s+1|0;}B5(b,C(738));}else{bf=Dr(b);be=0;while(true){if(be>=s)break br;if(((s-be|0)-1|0)==w)Im(b,bf,46);Im(b,bf,Z(T(I(48),Dx(bc,I(10))))&65535);bc=BS(bc,I(10));be=be+1|0;}}}}if(d!=(-10000)){while(ba>=(-1)){Ey(b,48);ba=ba+(-1)|0;}if(GH(T(I(bd),I(d)),I(Dr(b))))I6(b,bd+d|0);}return b;}e=Dr(b);if(c!==(-Infinity))B5(b,C(739));else B5(b,C(740));r:{if(d!=(-10000)){if(GH(T(I(e),I(d)),I(Dr(b))))I6(b,e+d|0);else{e=e+d|0;while(true)
{if(Dr(b)>=e)break r;Ey(b,32);}}}}return b;}
let TQ=b=>{FE();return (C7(b,1217359)>>>19|0)+1|0;}
let XS=b=>{FE();if(DB(b,B(2808348672, 232830643)))return 19;if(DB(b,B(1569325056, 23283064)))return 18;if(DB(b,B(1874919424, 2328306)))return 17;if(DB(b,B(2764472320, 232830)))return 16;if(DB(b,B(276447232, 23283)))return 15;if(DB(b,B(1316134912, 2328)))return 14;if(DB(b,B(3567587328, 232)))return 13;if(DB(b,B(1215752192, 23)))return 12;if(DB(b,B(1410065408, 2)))return 11;if(DB(b,I(1000000000)))return 10;if(DB(b,I(100000000)))return 9;if(DB(b,I(10000000)))return 8;if(DB(b,I(1000000)))return 7;if(DB(b,I(100000)))return 6;if
(DB(b,I(10000)))return 5;if(DB(b,I(1000)))return 4;if(DB(b,I(100)))return 3;if(GH(b,I(10)))return 1;return 2;}
let LZ=(b,c)=>{FE();return YJ(b)<c?0:1;}
let YJ=b=>{let c,d,e,f,g,h,i,j;FE();if(Ej(Dx(b,I(5)),M))return 0;if(Ej(Dx(b,I(25)),M))return 1;if(Ej(Dx(b,I(125)),M))return 2;if(Ej(Dx(b,I(625)),M))return 3;c=4;b=BS(b,I(625));while(true){if(Gb(b,M)){d=new V;e=new L;e.og=H(16);F(e,e.od,C(43));P$(e,e.od,b,10);f=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if(i>=0&&i<=(j-0|0)){f.oh=R(g.data,0,i);d.oe=1;d.of=1;d.oi=f;E(d);}d=new O;d.oe=1;d.of=1;Bt(d);E(d);}if(Ej(Dx(b,I(5)),M))break;b=BS(b,I(5));c=c+1|0;}return c;}
let LY=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FE();e=Q(b,31);f=Bd(b,I(2147483647));g=AB_.data;h=W(e,I(g[c].data[0]));i=W(f,I(g[c].data[0]));j=W(e,I(g[c].data[1]));k=W(f,I(g[c].data[1]));l=W(e,I(g[c].data[2]));m=W(f,I(g[c].data[2]));n=W(e,I(g[c].data[3]));o=W(f,I(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Q(T(Q(T(T(Q(T(T(Q(T(T(Q(o,31),m),n),31),k),l),31),i),j),21),BP(h,10)),p);q=new V;r=new L;r.og=H(16);F(r,r.od,C(43));N(r,r.od,p,10);s=new P;g=r.og;t=g.data;d=r.od;U();p=t.length;if(d>=0&&d<=(p-0|0))
{s.oh=R(g.data,0,d);q.oe=1;q.of=1;q.oi=s;E(q);}q=new O;q.oe=1;q.of=1;Bt(q);E(q);}
let L7=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FE();e=Q(b,31);f=Bd(b,I(2147483647));g=Lq.data;h=W(e,I(g[c].data[0]));i=W(f,I(g[c].data[0]));j=W(e,I(g[c].data[1]));k=W(f,I(g[c].data[1]));l=W(e,I(g[c].data[2]));m=W(f,I(g[c].data[2]));n=W(e,I(g[c].data[3]));o=W(f,I(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Q(T(Q(T(T(Q(T(T(Q(T(T(Q(o,31),m),n),31),k),l),31),i),j),21),BP(h,10)),p);q=new V;r=new L;r.og=H(16);F(r,r.od,C(43));N(r,r.od,p,10);s=new P;g=r.og;t=g.data;d=r.od;U();p=t.length;if(d>=0&&d<=(p-0|0))
{s.oh=R(g.data,0,d);q.oe=1;q.of=1;q.oi=s;E(q);}q=new O;q.oe=1;q.of=1;Bt(q);E(q);}
let AXV=()=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;AB_=AE3([4,326]);Lq=AE3([4,291]);Bgl=H(32);B6();b=Fy;if(b.or){c=(b.oC+0|0)+1|0;d=X(c);El(d,b.op,0,31);e=new BT;f=b.or;e.oS=(-2);e.or=f;e.oC=c;e.op=d;DA(e);b=e;}g=ID(b,Fy);e=Fy;if(e.or){c=(e.oC+0|0)+1|0;d=X(c);El(d,e.op,0,31);b=new BT;f=e.or;b.oS=(-2);b.or=f;b.oC=c;b.op=d;DA(b);e=b;}e=ID(e,Fy);h=0;while(h<326){i=TT(G$(I(5)),h);j=A4h(i);FE();f=(C7(h,1217359)>>>19|0)+1|0;if(f!=j){b=new Cb;e=new L;e.og=H(16);N(e,e.od,j,10);F(e,e.od,C(741));N(e,e.od,f,10);g=new P;d=
e.og;k=d.data;h=e.od;U();c=k.length;if(h>=0&&h<=(c-0|0)){g.oh=R(d.data,0,h);b.oe=1;b.of=1;b.oi=g;E(b);}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}l=0;m=j-121|0;while(l<4){n=AB_.data[h];f=m+((3-l|0)*31|0)|0;if(f&&i.or){if(f>0)b=FR(i,f);else{c= -f|0;o=c>>5;f=c&31;c=(i.oC+o|0)+(f?1:0)|0;d=X(c);El(d,i.op,o,f);b=new BT;f=i.or;b.oS=(-2);b.or=f;b.oC=c;b.op=d;DA(b);}}else b=i;d=n.data;b=Ys(b,g);d[l]=C7(b.or,b.op.data[0]);l=l+1|0;}q:{if(h<Lq.data.length){p=(j-1|0)+122|0;b=ZR(AAD(Vx(Fy,p),i),Fy);c=0;while(true){if(c>=4)break q;if
(!c)Lq.data[h].data[c]=TG(QV(b,(3-c|0)*31|0));else Lq.data[h].data[c]=TG(V9(QV(b,(3-c|0)*31|0),e));c=c+1|0;}}}h=h+1|0;}}
let Ip=G();
let A9a=(a,b,c,d)=>{let e,f,g,h;e=0;while(e<d){f=a.nJ();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
let A2l=a=>{return;}
function NE(){let a=this;Ip.call(a);a.y0=null;a.ua=0;a.Df=0;a.xW=0;}
let A0m=a=>{let b=new NE();AKv(b,a);return b;}
let AKv=(a,b)=>{let c;c=b.data.length;a.y0=b;a.ua=0;a.Df=0;a.xW=0+c|0;}
let AZV=a=>{let b,c,d;b=a.ua;if(b>=a.xW)c=(-1);else{d=a.y0.data;a.ua=b+1|0;c=d[b]&255;}return c;}
let A$i=(a,b,c,d)=>{let e,f,g,h,i;e=a.xW-a.ua|0;if(d<e)e=d;f=0;while(f<e){g=b.data;d=c+1|0;h=a.y0.data;i=a.ua;a.ua=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
let AOn=a=>{return;}
let MX=G(FH);
let Qg=G();
let IW=null;let R5=b=>{let c,d,e,f,g,h,i,j,k;a:{while(true){c=Z(Bd(b,I(255)));d=Q(b,11);e=Bz(d)*1.1102230246251565E-16;f=IW.data;e=e*f[c];g=c+1|0;if(e<f[g])break;if(!c){while(true){b=T(Bg(b,Q(b,11)),B(2135587861, 2654435769));h=C$(Bz(T(Bd(b,B(4294967295, 2097151)),I(1)))*1.1102230246251565E-16)*0.2736612373297584;b=T(Bg(b,Q(b,11)),B(2135587861, 2654435769));i=C$(Bz(T(Bd(b,B(4294967295, 2097151)),I(1)))*1.1102230246251565E-16);if( -(i+i)>=h*h)break;}return Ej(Bd(I(KT(b)),I(1)),M)?3.654152885361007-h:h-3.654152885361007;}i
=e*e;j=Fl((-0.5)*(f[c]*f[c]-i));f=IW.data;k=Fl((-0.5)*(f[g]*f[g]-i));b=T(Bg(b,d),B(2135587861, 2654435769));if(k+Bz(Bd(b,B(4294967295, 2097151)))*1.1102230246251565E-16*(j-k)<1.0)break a;}}return E5(B2(Bd(Ee(Bz(B4(I(256),Bd(b,I(512))))),B(0, 2147483648)),Bd(Ee(e),B(4294967295, 2147483647))));}
let AGP=()=>{let b,c,d,e;IW=LI(257);b=Fl((-6.676416654796086));c=IW.data;c[0]=0.004928673233974655/b;c[1]=3.654152885361007;d=2;while(d<256){e=C$(0.004928673233974655/IW.data[d-1|0]+b);IW.data[d]=Ch((-2.0)*e);b=Fl(e);d=d+1|0;}IW.data[256]=0.0;}
function S0(){let a=this;B_.call(a);a.yH=0.0;a.AH=0.0;}
let BdO=(a,b,c)=>{let d=new S0();AVl(d,a,b,c);return d;}
let AVl=(a,b,c,d)=>{let e,f;a.oy=b;if(!(isNaN(c)?1:0)&&d>0.0){a.yH=c;a.AH=d;e=1;}else e=0;if(e)return;f=new V;f.oe=1;f.of=1;f.oi=C(500);E(f);}
let AEp=a=>{return a.yH;}
let ZY=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.yH=b;a.AH=c;return 1;}return 0;}
let Yl=a=>{let b;b=a.oy;return a.yH+a.AH*AT0(3.141592653589793*b.jJ()-1.5707963267948966);}
let GM=G(BW);
let ZH=null;let Be_=null;let Bak=null;let YB=()=>{YB=Bk(GM);AKt();}
let AKt=()=>{let b,c;b=new GM;YB();b.oq=C(742);b.on=0;ZH=b;c=new GM;c.oq=C(743);c.on=1;Be_=c;Bak=S(GM,[b,c]);}
let ACJ=G(B_);
let ABJ=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=c>=1.0?c:c+1.0;f=e-0.3333333333333333;g=1.0/Ch(9.0*f);while(true){while(true){h=0.0+1.0*b.ep();i=1.0+g*h;if(i<=0.0)continue;else break;}j=i*i*i;k=b.ev();l=h*h;if(k<=1.0-0.331*l*l)break;if(C$(k)>0.5*l+f*(1.0-j+C$(j)))continue;else break;}if(Lv(e-c)>5.9604644775390625E-8?0:1)return f*j/d;return D7(b.jJ(),1.0/c)*f*j/d;}
function BT(){let a=this;E3.call(a);a.op=null;a.oC=0;a.or=0;a.oS=0;}
let DF=null;let Fy=null;let AQA=null;let J4=null;let AS0=null;let Zo=null;let B6=()=>{B6=Bk(BT);A$$();}
let AO0=(a,b)=>{let c=new BT();YY(c,a,b);return c;}
let Bcj=(a,b)=>{let c=new BT();AIl(c,a,b);return c;}
let YY=(a,b,c)=>{let d;B6();a.oS=(-2);a.or=b;if(Dh(Bd(c,B(0, 4294967295)),M)){a.oC=1;d=X(1);d.data[0]=Z(c);a.op=d;}else{a.oC=2;a.op=E2([Z(c),GF(c)]);}}
let AIl=(a,b,c)=>{let d,e;B6();d=c.data;a.oS=(-2);e=d.length;if(e){a.or=b;a.oC=e;a.op=c;DA(a);}else{a.or=0;a.oC=1;c=X(1);c.data[0]=0;a.op=c;}}
let G$=b=>{B6();if(GH(b,M)){if(Dh(b,I(-1)))return J4;return AO0((-1),HJ(b));}if(W0(b,I(10)))return AO0(1,b);return AS0.data[Z(b)];}
let ZR=(a,b)=>{return Ku(a,b);}
let QV=(a,b)=>{let c,d,e,f;if(b&&a.or){if(b>0)c=FR(a,b);else{b= -b|0;d=b>>5;b=b&31;e=(a.oC+d|0)+(b?1:0)|0;f=X(e);El(f,a.op,d,b);c=new BT;b=a.or;B6();c.oS=(-2);c.or=b;c.oC=e;c.op=f;DA(c);}return c;}return a;}
let Vx=(a,b)=>{let c,d,e,f;if(b&&a.or){if(b<=0)c=FR(a, -b|0);else{d=b>>5;b=b&31;e=(a.oC+d|0)+(b?1:0)|0;f=X(e);El(f,a.op,d,b);c=new BT;b=a.or;B6();c.oS=(-2);c.or=b;c.oC=e;c.op=f;DA(c);}return c;}return a;}
let QK=(a,b)=>{let c,d,e,f,g,h;if(!b)return !(a.op.data[0]&1)?0:1;if(b<0){c=new KD;c.oe=1;c.of=1;c.oi=C(744);E(c);}d=b>>5;if(d>=a.oC)return a.or>=0?0:1;e=a.op.data;f=e[d];b=1<<(b&31);g=a.or;if(g<0){if(a.oS==(-2)){if(!g)g=(-1);else{g=0;while(!e[g]){g=g+1|0;}}a.oS=g;}h=a.oS;if(d<h)return 0;f=h==d? -f|0:f^(-1);}return !(f&b)?0:1;}
let V9=(a,b)=>{return Ys(a,b);}
let TG=a=>{return C7(a.or,a.op.data[0]);}
let Kh=(a,b)=>{let c,d,e;if(a===b)return 1;if(!(b instanceof BT))return 0;d:{if(a.or==b.or){c=a.oC;if(c==b.oC){d=b.op;c=c-1|0;while(c>=0){e=d.data;if(a.op.data[c]!=e[c])break;c=c+(-1)|0;}if(c>=0?0:1){c=1;break d;}}}c=0;}return c;}
let TT=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new KD;c.oe=1;c.of=1;c.oi=C(745);E(c);}if(!b){B6();return Fy;}if(b!=1){B6();if(!Kh(a,Fy)&&!Kh(a,DF)){if(QK(a,0))return ADH(a,b);d=1;while(!QK(a,d)){d=d+1|0;}c=ABb(C7(d,b));if(d&&a.or){if(d>0)a=FR(a,d);else{d= -d|0;e=d>>5;d=d&31;f=(a.oC+e|0)+(d?1:0)|0;g=X(f);El(g,a.op,e,d);h=new BT;d=a.or;h.oS=(-2);h.or=d;h.oC=f;h.op=g;DA(h);a=h;}}h=TT(a,b);if(!h.or)c=DF;else if(!c.or)c=DF;else{Gm();c=FD(c,h);}return c;}}return a;}
let AAD=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.or;if(!c){b=new KD;b.oe=1;b.of=1;b.oi=C(746);E(b);}d=b.oC;e=B9(d,1);if(!e&&b.op.data[0]==1?1:0){if(c<=0){c=a.or;if(!c)b=a;else{b=new BT;c= -c|0;f=a.oC;g=a.op;B6();b.oS=(-2);b.or=c;b.oC=f;b.op=g;}a=b;}return a;}f=a.or;h=a.oC;if((h+d|0)==2){i=BS(Bd(I(a.op.data[0]),B(4294967295, 0)),Bd(I(b.op.data[0]),B(4294967295, 0)));if(f!=c)i=HJ(i);return G$(i);}j=B9(h,d);j=!j?Pk(a.op,b.op,h):j<=0?(-1):1;if(!j){if(f!=c){B6();b=J4;}else{B6();b=Fy;}return b;}if(j==(-1)){B6();return DF;}k
=(h-d|0)+1|0;g=X(k);l=f!=c?(-1):1;if(e)A36(g,k,a.op,h,b.op,d);else A0a(g,a.op,h,b.op.data[0]);m=new BT;B6();m.oS=(-2);m.or=l;m.oC=k;m.op=g;DA(m);return m;}
let DA=a=>{let b,c,d;while(true){b=a.oC;if(b<=0)break;c=a.op.data;b=b-1|0;a.oC=b;if(c[b])break;}c=a.op.data;d=a.oC;a.oC=d+1|0;if(!c[d])a.or=0;}
let ABb=b=>{let c,d,e,f,g;B6();c=Zo.data;if(b<c.length)return c[b];d=b>>5;e=b&31;f=d+1|0;c=X(f);c.data[d]=1<<e;g=new BT;g.oS=(-2);g.or=1;g.oC=f;g.op=c;return g;}
let A$$=()=>{let b,c,d,e,f,g,h,i;b=new BT;B6();b.oS=(-2);b.or=0;b.oC=1;c=X(1);c.data[0]=0;b.op=c;DF=b;d=new BT;d.oS=(-2);d.or=1;d.oC=1;c=X(1);c.data[0]=1;d.op=c;Fy=d;e=new BT;e.oS=(-2);e.or=1;e.oC=1;c=X(1);c.data[0]=10;e.op=c;AQA=e;f=new BT;f.oS=(-2);f.or=(-1);f.oC=1;c=X(1);c.data[0]=1;f.op=c;J4=f;c=Bs(BT,11);g=c.data;g[0]=b;g[1]=d;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]=2;b.op=h;g[2]=b;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]=3;b.op=h;g[3]=b;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]
=4;b.op=h;g[4]=b;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]=5;b.op=h;g[5]=b;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]=6;b.op=h;g[6]=b;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]=7;b.op=h;g[7]=b;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]=8;b.op=h;g[8]=b;b=new BT;b.oS=(-2);b.or=1;b.oC=1;h=X(1);h.data[0]=9;b.op=h;g[9]=b;g[10]=e;AS0=c;Zo=Bs(BT,32);i=0;while(true){c=Zo.data;if(i>=c.length)break;c[i]=G$(BP(I(1),i));i=i+1|0;}}
let Nw=G(G2);
let KD=G(B0);
let HR=G();
let A_Z=null;let Bb9=null;let UQ=null;let Wf=null;let Gm=()=>{Gm=Bk(HR);AJT();}
let FD=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;Gm();if(c.oC<=b.oC){d=c;c=b;b=d;}if(b.oC<63)return ACD(c,b);e=c.oC;f=(e&(-2))<<4;if(f&&c.or){if(f>0)d=FR(c,f);else{g= -f|0;h=g>>5;g=g&31;e=(e+h|0)+(g?1:0)|0;i=X(e);El(i,c.op,h,g);d=new BT;h=c.or;B6();d.oS=(-2);d.or=h;d.oC=e;d.op=i;DA(d);}}else d=c;if(f&&b.or){if(f>0)j=FR(b,f);else{e= -f|0;h=e>>5;e=e&31;g=(b.oC+h|0)+(e?1:0)|0;i=X(g);El(i,b.op,h,e);j=new BT;e=b.or;B6();j.oS=(-2);j.or=e;j.oC=g;j.op=i;DA(j);}}else j=b;if(f&&d.or){if(f<=0)k=FR(d, -f|0);else{e=f>>5;h=f&31;g
=(d.oC+e|0)+(h?1:0)|0;i=X(g);El(i,d.op,e,h);k=new BT;e=d.or;B6();k.oS=(-2);k.or=e;k.oC=g;k.op=i;DA(k);}}else k=d;l=ID(c,k);if(f&&j.or){if(f<=0)c=FR(j, -f|0);else{e=f>>5;h=f&31;g=(j.oC+e|0)+(h?1:0)|0;i=X(g);El(i,j.op,e,h);c=new BT;e=j.or;B6();c.oS=(-2);c.or=e;c.oC=g;c.op=i;DA(c);}}else c=j;m=ID(b,c);k=FD(d,j);n=FD(l,m);b=Ku(Ku(FD(ID(d,l),ID(m,j)),k),n);if(f&&b.or){if(f<=0)b=FR(b, -f|0);else{e=f>>5;h=f&31;g=(b.oC+e|0)+(h?1:0)|0;i=X(g);El(i,b.op,e,h);c=new BT;e=b.or;B6();c.oS=(-2);c.or=e;c.oC=g;c.op=i;DA(c);b=
c;}}e=f<<1;if(e&&k.or){if(e<=0)k=FR(k, -e|0);else{f=e>>5;e=e&31;h=(k.oC+f|0)+(e?1:0)|0;i=X(h);El(i,k.op,f,e);c=new BT;e=k.or;B6();c.oS=(-2);c.or=e;c.oC=h;c.op=i;DA(c);k=c;}}return Ku(Ku(k,b),n);}
let ACD=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;Gm();d=b.oC;e=c.oC;f=d+e|0;g=b.or==c.or?1:(-1);if(f!=2){h=b.op;i=c.op;j=X(f);Z7(h,d,i,e,j);k=new BT;B6();k.oS=(-2);k.or=g;k.oC=f;k.op=j;DA(k);return k;}l=T(T(W(Bd(I(b.op.data[0]),B(4294967295, 0)),Bd(I(c.op.data[0]),B(4294967295, 0))),M),M);m=Z(l);n=GF(l);if(!n){b=new BT;B6();b.oS=(-2);b.or=g;b.oC=1;h=X(1);h.data[0]=m;b.op=h;}else{b=new BT;h=E2([m,n]);B6();b.oS=(-2);b.or=g;b.oC=2;b.op=h;}return b;}
let Z7=(b,c,d,e,f)=>{let g,h,i,j,k;Gm();if(c&&e){if(c==1){g=b.data[0];h=M;c=0;i=Bd(I(g),B(4294967295, 0));while(c<e){b=d.data;j=f.data;h=T(T(W(Bd(I(b[c]),B(4294967295, 0)),i),Bd(I(Z(h)),B(4294967295, 0))),M);j[c]=Z(h);h=Q(h,32);c=c+1|0;}f.data[e]=Z(h);}else if(e!=1)VP(b,d,f,c,e);else{e=d.data[0];k=M;g=0;h=Bd(I(e),B(4294967295, 0));while(g<c){d=b.data;j=f.data;k=T(T(W(Bd(I(d[g]),B(4294967295, 0)),h),Bd(I(Z(k)),B(4294967295, 0))),M);j[g]=Z(k);k=Q(k,32);g=g+1|0;}f.data[c]=Z(k);}return;}}
let VP=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;Gm();if(b===c&&e==f){PC(b,e,d);return;}g=0;while(g<e){h=b.data;i=M;j=h[g];k=0;l=Bd(I(j),B(4294967295, 0));while(k<f){h=c.data;m=d.data;j=h[k];n=g+k|0;o=m[n];p=Z(i);i=T(T(W(l,Bd(I(j),B(4294967295, 0))),Bd(I(o),B(4294967295, 0))),Bd(I(p),B(4294967295, 0)));m[n]=Z(i);i=Q(i,32);k=k+1|0;}d.data[g+f|0]=Z(i);g=g+1|0;}}
let ADH=(b,c)=>{let d,e,f,g;Gm();B6();d=Fy;while(c>1){if(c&1)d=!b.or?DF:!d.or?DF:FD(d,b);e=b.oC;if(e!=1)f=Bcj(1,PC(b.op,e,X(e<<1)));else{g=b.or;f=!g?DF:!g?DF:FD(b,b);}c=c>>1;b=f;}return !b.or?DF:!d.or?DF:FD(d,b);}
let PC=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;Gm();e=0;while(e<c){f=M;g=e+1|0;h=g;while(h<c){i=b.data;j=d.data;k=i[e];l=i[h];m=e+h|0;n=j[m];o=Z(f);f=T(T(W(Bd(I(k),B(4294967295, 0)),Bd(I(l),B(4294967295, 0))),Bd(I(n),B(4294967295, 0))),Bd(I(o),B(4294967295, 0)));j[m]=Z(f);f=Q(f,32);h=h+1|0;}d.data[e+c|0]=Z(f);e=g;}e=c<<1;k=0;h=0;while(h<e){i=d.data;l=i[h];i[h]=l<<1|k;k=l>>>31|0;h=h+1|0;}if(k)d.data[e]=k;f=M;e=0;k=0;while(e<c){i=b.data;j=d.data;g=i[e];h=i[e];m=j[k];l=Z(f);f=T(T(W(Bd(I(g),B(4294967295, 0)),Bd(I(h),
B(4294967295, 0))),Bd(I(m),B(4294967295, 0))),Bd(I(l),B(4294967295, 0)));j[k]=Z(f);p=Q(f,32);k=k+1|0;f=T(p,Bd(I(j[k]),B(4294967295, 0)));j[k]=Z(f);f=Q(f,32);e=e+1|0;k=k+1|0;}return d;}
let AJT=()=>{let b,c,d,e,f,g;A_Z=E2([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bb9=E2([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);UQ=Bs(BT,32);Wf=Bs(BT,32);b=I(1);c=0;while(c<=18){Wf.data[c]=G$(b);UQ.data[c]=G$(BP(b,c));b=W(b,I(5));c=c+1|0;}while(c<UQ.data.length){d=Wf.data;e=c-1|0;f=d[e];g=d[1];if(!g.or){B6();f=DF;}else if(!f.or){B6();f=DF;}else{Gm();f=FD(f,g);}d[c]=f;d=UQ.data;f=d[e];B6();g=AQA;if(!g.or)f=DF;else if(!f.or)f=DF;else{Gm();f
=FD(f,g);}d[c]=f;c=c+1|0;}}
let WL=G();
let A4h=b=>{let c,d,e,f,g,h;c=b.or;if(!c)return 0;d=b.oC;e=d<<5;f=b.op.data;g=d-1|0;h=f[g];if(c<0){if(b.oS==(-2)){if(!c)c=(-1);else{c=0;while(!f[c]){c=c+1|0;}}b.oS=c;}if(b.oS==g)h=h+(-1)|0;}return e-Ef(h)|0;}
let El=(b,c,d,e)=>{let f,g,h,i,j,k;b:{if(!e)CY(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break b;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|(i[k]>>>g|0);f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}}
let FR=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;d=c>>5;c=c&31;e=b.oC;if(d>=e){if(b.or>=0){B6();b=DF;}else{B6();b=J4;}return b;}k:{e=e-d|0;f=e+1|0;g=X(f);AAY(g,e,b.op,d,c);h=b.or;if(h>=0)f=e;else{i=0;while(true){j=B9(i,d);if(j>=0)break;if(b.op.data[i])break;i=i+1|0;}if(j>=0){if(c<=0){f=e;break k;}if(!(b.op.data[i]<<(32-c|0))){f=e;break k;}}k=g.data;l=0;while(true){i=B9(l,e);if(i>=0)break;if(k[l]!=(-1))break;k[l]=0;l=l+1|0;}if(i)f=e;k[l]=k[l]+1|0;}}m=new BT;B6();m.oS=(-2);m.or=h;m.oC=f;m.op=g;DA(m);return m;}
let AAY=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)CY(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=(i[c]>>>f|0)|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f|0;}return g;}
let NH=G();
let BbS=null;let A2L=null;let AEs=b=>{let c,d,e,f,g,h,i,j;c=BX(b.oh.length/2|0);d=c.data;e=0;f=d.length;b:{a:{while(e<f){g=e*2|0;if(g<0)break b;if(g>=b.oh.length)break b;h=b.oh.charCodeAt(g);g=g+1|0;if(g<0)break a;if(g>=b.oh.length)break a;i=b.oh.charCodeAt(g);j=A2L.data;d[e]=((j[h]<<4)+j[i]|0)<<24>>24;e=e+1|0;}return c;}b=new Ba;b.oe=1;b.of=1;E(b);}b=new Ba;b.oe=1;b.of=1;E(b);}
let ZW=()=>{let b,c,d,e;b=H(16);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;BbS=b;b=X(128);d=b.data;A2L=b;e=0;while(e<c.length){d[c[e]]=e;if(c[e]>=65)d[(c[e]-65|0)+97|0]=e;e=e+1|0;}}
function Nc(){V.call(this);this.Jv=null;}
function Rr(){let a=this;Ip.call(a);a.Ex=0;a.EM=null;}
let A4z=a=>{let b,c;if(a.Ex==a.EM.q9.length)return (-1);b=a.EM;c=a.Ex;a.Ex=c+1|0;return b.q9[c]&255;}
let Tu=G();
let IB=null;let Ky=b=>{let c,d,e,f,g,h,i,j;a:{while(true){c=Z(Bd(b,I(255)));d=Bz(Q(b,11))*1.1102230246251565E-16;e=IB.data;d=d*e[c];f=c+1|0;if(d<e[f])break;if(!c){while(true){b=W(Bg(b,B(778217925, 4046813930)),B(4220496899, 2882110344));g=C$(Bz(T(Q(b,11),I(1)))*1.1102230246251565E-16)*0.2736612373297584;b=W(Bg(b,B(778217925, 4046813930)),B(4220496899, 2882110344));h=C$(Bz(T(Q(b,11),I(1)))*1.1102230246251565E-16);if( -(h+h)>=g*g)break;}return Ej(Bd(I(KT(b)),I(1)),M)?3.654152885361007-g:g-3.654152885361007;}h
=d*d;i=Fl((-0.5)*(e[c]*e[c]-h));e=IB.data;j=Fl((-0.5)*(e[f]*e[f]-h));b=W(Bg(b,B(778217925, 4046813930)),B(4220496899, 2882110344));if(j+Bz(Q(b,11))*1.1102230246251565E-16*(i-j)<1.0)break a;}}return E5(B2(Bd(Ee(Bz(B4(I(256),Bd(b,I(512))))),B(0, 2147483648)),Bd(Ee(d),B(4294967295, 2147483647))));}
let XW=()=>{let b,c,d,e;IB=LI(257);b=Fl((-6.676416654796086));c=IB.data;c[0]=0.004928673233974655/b;c[1]=3.654152885361007;d=2;while(d<256){e=C$(0.004928673233974655/IB.data[d-1|0]+b);IB.data[d]=Ch((-2.0)*e);b=Fl(e);d=d+1|0;}IB.data[256]=0.0;}
function J(){D.call(this);this.H8=M;}
let AKz=null;let ASC=null;let AKG=null;let AOS=null;let A09=null;let A2y=null;let AS3=null;let AI1=null;let A8y=null;let A2b=null;let A70=null;let ALx=null;let AK0=null;let AKr=null;let APj=null;let AK1=null;let A0t=null;let A3R=null;let AXj=null;let APR=null;let A3M=null;let AWM=null;let A29=null;let ARY=null;let AUV=null;let A$q=null;let A1M=null;let AVS=null;let ASD=null;let A1Y=null;let A8V=null;let AVn=null;let A3k=null;let A$A=null;let A7E=null;let A8g=null;let A6y=null;let AQF=null;let A9$=null;let A3y
=null;let AK7=null;let ANV=null;let A7r=null;let AZp=null;let A3n=null;let ATp=null;let AKX=null;let AWv=null;let A0J=null;let A9q=null;let AQS=null;let AOw=null;let ATv=null;let A0N=null;let A2F=null;let AU3=null;let AZs=null;let ARP=null;let A0V=null;let AVZ=null;let AMd=null;let AQJ=null;let ASk=null;let AUC=null;let AJJ=null;let A44=null;let AOJ=null;let A0Q=null;let A0u=null;let A$z=null;let AZ9=null;let A0b=null;let A2f=null;let ARr=null;let ATb=null;let A$Q=null;let A4l=null;let A0E=null;let AVo=null;let AS9
=null;let AUl=null;let ATy=null;let AXw=null;let A2u=null;let AWh=null;let A5t=null;let A5l=null;let AWd=null;let A7i=null;let A8c=null;let AU_=null;let ANu=null;let A05=null;let A0Z=null;let AKl=null;let AJj=null;let AMA=null;let AKN=null;let APz=null;let A1d=null;let A0$=null;let ARy=null;let A4i=null;let A1h=null;let A4T=null;let AZN=null;let A39=null;let ANx=null;let A2$=null;let AUq=null;let A89=null;let A04=null;let A4Y=null;let AU0=null;let AVw=null;let A5A=null;let AVO=null;let ATs=null;let AWx=null;let A2G
=null;let AZ3=null;let AMN=null;let A6X=null;let A9P=null;let AN3=null;let ATi=null;let A7L=null;let A8I=null;let A8$=null;let AJd=null;let AYx=null;let ATE=null;let A46=null;let ALF=null;let AUJ=null;let A1o=null;let AXZ=null;let ALg=null;let A0g=null;let AQW=null;let ASm=null;let ANn=null;let A9V=null;let ASu=null;let A$j=null;let A3i=null;let AJl=null;let AQI=null;let APp=null;let A4X=null;let A7y=null;let APY=null;let AQP=null;let AI8=null;let APV=null;let A2H=null;let AOj=null;let ANA=null;let ARp=null;let AZi
=null;let AXr=null;let A7d=null;let A4f=null;let AZ1=null;let APt=null;let AV5=null;let AMS=null;let AJA=null;let AWK=null;let A8D=null;let A6h=null;let AWa=null;let AQh=null;let A3g=null;let AQY=null;let A8i=null;let A5H=null;let AYv=null;let AR2=null;let AWs=null;let A6g=null;let AZd=null;let AXm=null;let AQ2=null;let APq=null;let A2x=null;let A6N=null;let AOv=null;let AOP=null;let AL8=null;let ALX=null;let A0l=null;let APU=null;let AUU=null;let A$t=null;let A5q=null;let A77=null;let AT4=null;let APZ=null;let A9w
=null;let A19=null;let AT2=null;let A3J=null;let ARW=null;let AKL=null;let AOq=null;let AQ3=null;let AJ9=null;let A0x=null;let AVs=null;let AO9=null;let A6k=null;let AXD=null;let A0P=null;let A3l=null;let A$R=null;let A$x=null;let A63=null;let AUu=null;let A4p=null;let AKb=null;let AWk=null;let AP0=null;let A2T=null;let AZt=null;let AXn=null;let AYQ=null;let A84=null;let AWW=null;let AQr=null;let AUs=null;let AXB=null;let A2Y=null;let A5b=null;let AW7=null;let AUi=null;let A8M=null;let AJa=null;let AYk=null;let AYU
=null;let A3Y=null;let AWJ=null;let ANj=null;let A4C=null;let A8n=null;let A4d=null;let AS5=null;let ARB=null;let A5D=null;let AX6=null;let ARH=null;let AKd=null;let A$H=null;let A6a=null;let AY2=null;let AV2=null;let A2D=null;let ALT=null;let ATJ=null;let A9m=null;let AOU=null;let AMK=null;let ASo=null;let AYi=null;let AOs=null;let A3W=null;let AT_=null;let AU7=null;let AZu=null;let A7a=null;let AYC=null;let AXg=null;let ATV=null;let AOx=null;let A0z=null;let AK5=null;let A$w=null;let AX8=null;let A8w=null;let AJG
=null;let A5c=null;let A4s=null;let A96=null;let ALv=null;let A4B=null;let API=null;let APw=null;let A18=null;let AWD=null;let ATz=null;let AMr=null;let A5W=null;let A4Q=null;let APM=null;let AKo=null;let AQe=null;let A5B=null;let A5y=null;let ANg=null;let A2o=null;let AMq=null;let A3p=null;let A4J=null;let A3z=null;let A47=null;let AJR=null;let ATt=null;let AXU=null;let AJp=null;let AJE=null;let A$d=null;let A7h=null;let AKU=null;let ARs=null;let A9Y=null;let ALL=null;let AMn=null;let A1$=null;let ARi=null;let AMf
=null;let AZj=null;let ASM=null;let AYc=null;let ARE=null;let A9k=null;let ANt=null;let APH=null;let APr=null;let AMD=null;let A3s=null;let A$m=null;let AR$=null;let A8u=null;let AKO=null;let AMZ=null;let A5r=null;let AWL=null;let AU9=null;let AVp=null;let AWZ=null;let A7H=null;let AOc=null;let AT7=null;let A9b=null;let A1c=null;let AVb=null;let AWP=null;let AUg=null;let AVC=null;let AMX=null;let AOR=null;let AJ_=null;let A1Q=null;let ATH=null;let A$u=null;let ATf=null;let AVD=null;let AXG=null;let ALK=null;let AQf
=null;let APg=null;let A2E=null;let ALl=null;let AL7=null;let AOK=null;let A9t=null;let AYB=null;let A1K=null;let ARx=null;let AUc=null;let ATG=null;let A1T=null;let APo=null;let AR1=null;let A7o=null;let AMI=null;let A7s=null;let A1O=null;let A5Z=null;let AYZ=null;let A$v=null;let AI9=null;let A$C=null;let AKp=null;let AU2=null;let AO5=null;let A6H=null;let A11=null;let AV4=null;let ASL=null;let AOd=null;let AUW=null;let A07=null;let A7Y=null;let ARI=null;let A9H=null;let A7b=null;let A1C=null;let A$L=null;let A2v
=null;let AM_=null;let AUD=null;let AW0=null;let A2C=null;let AMl=null;let A8q=null;let AMU=null;let A2A=null;let A6Z=null;let ASJ=null;let A5$=null;let AYW=null;let A1i=null;let A2M=null;let AQQ=null;let AMv=null;let ALN=null;let AXC=null;let ANi=null;let A78=null;let AOe=null;let A57=null;let AIA=null;let A28=null;let AOA=null;let A2O=null;let AK2=null;let BgL=null;let Bfz=null;let Um=()=>{Um=Bk(J);A8C();}
let K=a=>{let b=new J();ACF(b,a);return b;}
let L2=b=>{Um();b=Bg(b,B(4220496899, 2882110344));b=W(Bg(b,Q(b,32)),B(3946075501, 3198297593));b=W(Bg(b,Q(b,29)),B(3946075501, 3198297593));b=W(Bg(b,Q(b,32)),B(3946075501, 3198297593));return Bg(b,Q(b,29));}
let ACF=(a,b)=>{Um();a.H8=L2(b===null?M:Zz(I(1),b,0,b.oh.length));}
let Vl=(b,c)=>{let d;Um();d=W(b,c);return Bg(d,Q(d,30));}
let Zz=(b,c,d,e)=>{let f,g,h,i;Um();if(c!==null&&d>=0&&e>=0&&d<e){f=c.oh.length;if(e<f)f=e;g=d+3|0;c:{o:{e:{while(true){if(g>=f){l:{switch(f&3){case 0:b=W(B4(B(2696161499, 3875765969),b),T(B(3296531023, 495865383),b));b=Bg(b,Q(b,30));break l;case 1:h=B4(B(3025523045, 3947146442),b);d=(d+f|0)-1|0;if(d>=0&&d<c.oh.length){b=W(h,Bg(B(1966558403, 1486448076),I(c.oh.charCodeAt(d))));b=Bg(b,Q(b,30));break l;}c=new Ba;c.oe=1;c.of=1;E(c);case 2:d=d+f|0;e=d-2|0;if(e>=0&&e<c.oh.length){b=B4(I(c.oh.charCodeAt(e)),b);d=
d-1|0;if(d>=0&&d<c.oh.length){b=W(b,Bg(B(2025677871, 2692095332),I(c.oh.charCodeAt(d))));b=Bg(b,Q(b,30));break l;}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);case 3:d=d+f|0;e=d-3|0;if(e>=0&&e<c.oh.length){b=T(Vl(B4(I(c.oh.charCodeAt(e)),b),Bg(B(2626209507, 2394712816),I(Dz(c,d-2|0)))),Vl(Bg(B(3025523045, 3947146442),b),Bg(B(3296531023, 495865383),I(Dz(c,d-1|0)))));break l;}c=new Ba;BZ(c);E(c);default:}}b=W(Bg(b,I(f)),Bg(BP(b,16),B(2025677871, 2692095332)));return Bg(Bg(b,B2(BP(b,33),Q(b,31))),B2(BP(b,
19),Q(b,45)));}e=g-3|0;if(e<0)break c;if(e>=c.oh.length)break c;i=Bg(I(c.oh.charCodeAt(e)),B(2696161499, 3875765969));e=g-2|0;if(e<0)break o;if(e>=c.oh.length)break o;i=W(i,Bg(I(c.oh.charCodeAt(e)),B(2626209507, 2394712816)));b=B4(Bg(i,Q(i,30)),b);e=g-1|0;if(e<0)break e;if(e>=c.oh.length)break e;i=Bg(I(c.oh.charCodeAt(e)),B(1966558403, 1486448076));if(g<0)break;if(g>=c.oh.length)break;i=W(i,Bg(I(c.oh.charCodeAt(g)),B(3296531023, 495865383)));b=W(b,Bg(i,Q(i,30)));b=Bg(b,Q(b,30));g=g+4|0;}c=new Ba;c.oe=1;c.of
=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}c=new Ba;c.oe=1;c.of=1;E(c);}return M;}
let A8C=()=>{let b;AKz=K(C(747));ASC=K(C(748));AKG=K(C(749));AOS=K(C(750));A09=K(C(751));A2y=K(C(752));AS3=K(C(753));AI1=K(C(754));A8y=K(C(755));A2b=K(C(756));A70=K(C(757));ALx=K(C(758));AK0=K(C(759));AKr=K(C(760));APj=K(C(761));AK1=K(C(762));A0t=K(C(763));A3R=K(C(764));AXj=K(C(765));APR=K(C(766));A3M=K(C(767));AWM=K(C(768));A29=K(C(769));ARY=K(C(770));AUV=K(C(771));A$q=K(C(772));A1M=K(C(773));AVS=K(C(774));ASD=K(C(775));A1Y=K(C(776));A8V=K(C(777));AVn=K(C(778));A3k=K(C(779));A$A=K(C(780));A7E=K(C(781));A8g
=K(C(782));A6y=K(C(783));AQF=K(C(784));A9$=K(C(785));A3y=K(C(786));AK7=K(C(787));ANV=K(C(788));A7r=K(C(789));AZp=K(C(790));A3n=K(C(791));ATp=K(C(792));AKX=K(C(793));AWv=K(C(794));A0J=K(C(795));A9q=K(C(796));AQS=K(C(797));AOw=K(C(798));ATv=K(C(799));A0N=K(C(800));A2F=K(C(801));AU3=K(C(802));AZs=K(C(803));ARP=K(C(804));A0V=K(C(805));AVZ=K(C(806));AMd=K(C(807));AQJ=K(C(808));ASk=K(C(809));AUC=K(C(810));AJJ=K(C(811));A44=K(C(812));AOJ=K(C(813));A0Q=K(C(814));A0u=K(C(815));A$z=K(C(816));AZ9=K(C(817));A0b=K(C(818));A2f
=K(C(819));ARr=K(C(820));ATb=K(C(821));A$Q=K(C(822));A4l=K(C(823));A0E=K(C(824));AVo=K(C(825));AS9=K(C(826));AUl=K(C(827));ATy=K(C(828));AXw=K(C(829));A2u=K(C(830));AWh=K(C(831));A5t=K(C(832));A5l=K(C(833));AWd=K(C(834));A7i=K(C(835));A8c=K(C(836));AU_=K(C(837));ANu=K(C(838));A05=K(C(839));A0Z=K(C(840));AKl=K(C(841));AJj=K(C(842));AMA=K(C(843));AKN=K(C(844));APz=K(C(845));A1d=K(C(846));A0$=K(C(847));ARy=K(C(848));A4i=K(C(849));A1h=K(C(850));A4T=K(C(851));AZN=K(C(852));A39=K(C(853));ANx=K(C(854));A2$=K(C(855));AUq
=K(C(856));A89=K(C(857));A04=K(C(858));A4Y=K(C(859));AU0=K(C(860));AVw=K(C(861));A5A=K(C(862));AVO=K(C(863));ATs=K(C(864));AWx=K(C(865));A2G=K(C(866));AZ3=K(C(867));AMN=K(C(868));A6X=K(C(869));A9P=K(C(870));AN3=K(C(871));ATi=K(C(872));A7L=K(C(873));A8I=K(C(874));A8$=K(C(875));AJd=K(C(876));AYx=K(C(877));ATE=K(C(878));A46=K(C(879));ALF=K(C(880));AUJ=K(C(881));A1o=K(C(882));AXZ=K(C(883));ALg=K(C(884));A0g=K(C(885));AQW=K(C(886));ASm=K(C(887));ANn=K(C(888));A9V=K(C(889));ASu=K(C(890));A$j=K(C(891));A3i=K(C(892));AJl
=K(C(893));AQI=K(C(894));APp=K(C(895));A4X=K(C(896));A7y=K(C(897));APY=K(C(898));AQP=K(C(899));AI8=K(C(900));APV=K(C(901));A2H=K(C(902));AOj=K(C(903));ANA=K(C(904));ARp=K(C(905));AZi=K(C(906));AXr=K(C(907));A7d=K(C(908));A4f=K(C(909));AZ1=K(C(910));APt=K(C(911));AV5=K(C(912));AMS=K(C(913));AJA=K(C(914));AWK=K(C(915));A8D=K(C(916));A6h=K(C(917));AWa=K(C(918));AQh=K(C(919));A3g=K(C(920));AQY=K(C(921));A8i=K(C(922));A5H=K(C(923));AYv=K(C(924));AR2=K(C(925));AWs=K(C(926));A6g=K(C(927));AZd=K(C(928));AXm=K(C(929));AQ2
=K(C(930));APq=K(C(931));A2x=K(C(932));A6N=K(C(933));AOv=K(C(934));AOP=K(C(935));AL8=K(C(936));ALX=K(C(937));A0l=K(C(938));APU=K(C(939));AUU=K(C(940));A$t=K(C(941));A5q=K(C(942));A77=K(C(943));AT4=K(C(944));APZ=K(C(945));A9w=K(C(946));A19=K(C(947));AT2=K(C(948));A3J=K(C(949));ARW=K(C(950));AKL=K(C(951));AOq=K(C(952));AQ3=K(C(953));AJ9=K(C(954));A0x=K(C(955));AVs=K(C(956));AO9=K(C(957));A6k=K(C(958));AXD=K(C(959));A0P=K(C(960));A3l=K(C(961));A$R=K(C(962));A$x=K(C(963));A63=K(C(964));AUu=K(C(965));A4p=K(C(966));AKb
=K(C(967));AWk=K(C(968));AP0=K(C(969));A2T=K(C(970));AZt=K(C(971));AXn=K(C(972));AYQ=K(C(973));A84=K(C(974));AWW=K(C(975));AQr=K(C(976));AUs=K(C(977));AXB=K(C(978));A2Y=K(C(979));A5b=K(C(980));AW7=K(C(981));AUi=K(C(982));A8M=K(C(983));AJa=K(C(984));AYk=K(C(985));AYU=K(C(986));A3Y=K(C(987));AWJ=K(C(988));ANj=K(C(989));A4C=K(C(990));A8n=K(C(991));A4d=K(C(992));AS5=K(C(993));ARB=K(C(994));A5D=K(C(995));AX6=K(C(996));ARH=K(C(997));AKd=K(C(998));A$H=K(C(999));A6a=K(C(1000));AY2=K(C(1001));AV2=K(C(1002));A2D=K(C(1003));ALT
=K(C(1004));ATJ=K(C(1005));A9m=K(C(1006));AOU=K(C(1007));AMK=K(C(1008));ASo=K(C(1009));AYi=K(C(1010));AOs=K(C(1011));A3W=K(C(1012));AT_=K(C(1013));AU7=K(C(1014));AZu=K(C(1015));A7a=K(C(1016));AYC=K(C(1017));AXg=K(C(1018));ATV=K(C(1019));AOx=K(C(1020));A0z=K(C(1021));AK5=K(C(1022));A$w=K(C(1023));AX8=K(C(1024));A8w=K(C(1025));AJG=K(C(1026));A5c=K(C(1027));A4s=K(C(1028));A96=K(C(1029));ALv=K(C(1030));A4B=K(C(1031));API=K(C(1032));APw=K(C(1033));A18=K(C(1034));AWD=K(C(1035));ATz=K(C(1036));AMr=K(C(1037));A5W=K(C(1038));A4Q
=K(C(1039));APM=K(C(1040));AKo=K(C(1041));AQe=K(C(1042));A5B=K(C(1043));A5y=K(C(1044));ANg=K(C(1045));A2o=K(C(1046));AMq=K(C(1047));A3p=K(C(1048));A4J=K(C(1049));A3z=K(C(1050));A47=K(C(1051));AJR=K(C(1052));ATt=K(C(1053));AXU=K(C(1054));AJp=K(C(1055));AJE=K(C(1056));A$d=K(C(1057));A7h=K(C(1058));AKU=K(C(1059));ARs=K(C(1060));A9Y=K(C(1061));ALL=K(C(1062));AMn=K(C(1063));A1$=K(C(1064));ARi=K(C(1065));AMf=K(C(1066));AZj=K(C(1067));ASM=K(C(1068));AYc=K(C(1069));ARE=K(C(1070));A9k=K(C(1071));ANt=K(C(1072));APH=K(C(1073));APr
=K(C(1074));AMD=K(C(1075));A3s=K(C(1076));A$m=K(C(1077));AR$=K(C(1078));A8u=K(C(1079));AKO=K(C(1080));AMZ=K(C(1081));A5r=K(C(1082));AWL=K(C(1083));AU9=K(C(1084));AVp=K(C(1085));AWZ=K(C(1086));A7H=K(C(1087));AOc=K(C(1088));AT7=K(C(1089));A9b=K(C(1090));A1c=K(C(1091));AVb=K(C(1092));AWP=K(C(1093));AUg=K(C(1094));AVC=K(C(1095));AMX=K(C(1096));AOR=K(C(1097));AJ_=K(C(1098));A1Q=K(C(1099));ATH=K(C(1100));A$u=K(C(1101));ATf=K(C(1102));AVD=K(C(1103));AXG=K(C(1104));ALK=K(C(1105));AQf=K(C(1106));APg=K(C(1107));A2E=K(C(1108));ALl
=K(C(1109));AL7=K(C(1110));AOK=K(C(1111));A9t=K(C(1112));AYB=K(C(1113));A1K=K(C(1114));ARx=K(C(1115));AUc=K(C(1116));ATG=K(C(1117));A1T=K(C(1118));APo=K(C(1119));AR1=K(C(1120));A7o=K(C(1121));AMI=K(C(1122));A7s=K(C(1123));A1O=K(C(1124));A5Z=K(C(1125));AYZ=K(C(1126));A$v=K(C(1127));AI9=K(C(1128));A$C=K(C(1129));AKp=K(C(1130));AU2=K(C(1131));AO5=K(C(1132));A6H=K(C(1133));A11=K(C(1134));AV4=K(C(1135));ASL=K(C(1136));AOd=K(C(1137));AUW=K(C(1138));A07=K(C(1139));A7Y=K(C(1140));ARI=K(C(1141));A9H=K(C(1142));A7b=K(C(1143));A1C
=K(C(1144));A$L=K(C(1145));A2v=K(C(1146));AM_=K(C(1147));AUD=K(C(1148));AW0=K(C(1149));A2C=K(C(1150));AMl=K(C(1151));A8q=K(C(1152));AMU=K(C(1153));A2A=K(C(1154));A6Z=K(C(1155));ASJ=K(C(1156));A5$=K(C(1157));AYW=K(C(1158));A1i=K(C(1159));A2M=K(C(1160));AQQ=K(C(1161));AMv=K(C(1162));ALN=K(C(1163));AXC=K(C(1164));ANi=K(C(1165));A78=K(C(1166));AOe=K(C(1167));A57=K(C(1168));AIA=K(C(1169));A28=K(C(1170));AOA=K(C(1171));A2O=K(C(1172));AK2=K(C(1173));b=K(C(1174));BgL=b;Bfz=S(J,[AKz,ASC,AKG,AOS,A09,A2y,AS3,AI1,A8y,A2b,
A70,ALx,AK0,AKr,APj,AK1,A0t,A3R,AXj,APR,A3M,AWM,A29,ARY,AUV,A$q,A1M,AVS,ASD,A1Y,A8V,AVn,A3k,A$A,A7E,A8g,A6y,AQF,A9$,A3y,AK7,ANV,A7r,AZp,A3n,ATp,AKX,AWv,A0J,A9q,AQS,AOw,ATv,A0N,A2F,AU3,AZs,ARP,A0V,AVZ,AMd,AQJ,ASk,AUC,AJJ,A44,AOJ,A0Q,A0u,A$z,AZ9,A0b,A2f,ARr,ATb,A$Q,A4l,A0E,AVo,AS9,AUl,ATy,AXw,A2u,AWh,A5t,A5l,AWd,A7i,A8c,AU_,ANu,A05,A0Z,AKl,AJj,AMA,AKN,APz,A1d,A0$,ARy,A4i,A1h,A4T,AZN,A39,ANx,A2$,AUq,A89,A04,A4Y,AU0,AVw,A5A,AVO,ATs,AWx,A2G,AZ3,AMN,A6X,A9P,AN3,ATi,A7L,A8I,A8$,AJd,AYx,ATE,A46,ALF,AUJ,A1o,AXZ,ALg,
A0g,AQW,ASm,ANn,A9V,ASu,A$j,A3i,AJl,AQI,APp,A4X,A7y,APY,AQP,AI8,APV,A2H,AOj,ANA,ARp,AZi,AXr,A7d,A4f,AZ1,APt,AV5,AMS,AJA,AWK,A8D,A6h,AWa,AQh,A3g,AQY,A8i,A5H,AYv,AR2,AWs,A6g,AZd,AXm,AQ2,APq,A2x,A6N,AOv,AOP,AL8,ALX,A0l,APU,AUU,A$t,A5q,A77,AT4,APZ,A9w,A19,AT2,A3J,ARW,AKL,AOq,AQ3,AJ9,A0x,AVs,AO9,A6k,AXD,A0P,A3l,A$R,A$x,A63,AUu,A4p,AKb,AWk,AP0,A2T,AZt,AXn,AYQ,A84,AWW,AQr,AUs,AXB,A2Y,A5b,AW7,AUi,A8M,AJa,AYk,AYU,A3Y,AWJ,ANj,A4C,A8n,A4d,AS5,ARB,A5D,AX6,ARH,AKd,A$H,A6a,AY2,AV2,A2D,ALT,ATJ,A9m,AOU,AMK,ASo,AYi,AOs,A3W,
AT_,AU7,AZu,A7a,AYC,AXg,ATV,AOx,A0z,AK5,A$w,AX8,A8w,AJG,A5c,A4s,A96,ALv,A4B,API,APw,A18,AWD,ATz,AMr,A5W,A4Q,APM,AKo,AQe,A5B,A5y,ANg,A2o,AMq,A3p,A4J,A3z,A47,AJR,ATt,AXU,AJp,AJE,A$d,A7h,AKU,ARs,A9Y,ALL,AMn,A1$,ARi,AMf,AZj,ASM,AYc,ARE,A9k,ANt,APH,APr,AMD,A3s,A$m,AR$,A8u,AKO,AMZ,A5r,AWL,AU9,AVp,AWZ,A7H,AOc,AT7,A9b,A1c,AVb,AWP,AUg,AVC,AMX,AOR,AJ_,A1Q,ATH,A$u,ATf,AVD,AXG,ALK,AQf,APg,A2E,ALl,AL7,AOK,A9t,AYB,A1K,ARx,AUc,ATG,A1T,APo,AR1,A7o,AMI,A7s,A1O,A5Z,AYZ,A$v,AI9,A$C,AKp,AU2,AO5,A6H,A11,AV4,ASL,AOd,AUW,A07,A7Y,
ARI,A9H,A7b,A1C,A$L,A2v,AM_,AUD,AW0,A2C,AMl,A8q,AMU,A2A,A6Z,ASJ,A5$,AYW,A1i,A2M,AQQ,AMv,ALN,AXC,ANi,A78,AOe,A57,AIA,A28,AOA,A2O,AK2,b]);}
let Q8=G();
let ABd=null;let BeO=()=>{BeO=Bk(Q8);ATN();}
let ATN=()=>{let b,c,d,e,f;b=new JA;c=J1(16);b.tF=0;d=Bs(Gt,c);e=d.data;b.qv=d;b.zO=0.75;b.uE=e.length*0.75|0;ABd=b;e=Bs(Fo,6).data;Bd$();e[0]=AOi;e[1]=AUO;e[2]=ASS;e[3]=ASp;e[4]=ATc;e[5]=ATx;c=e.length;f=0;while(f<c){b=e[f];JX(ABd,b.tD,b);f=f+1|0;}}
let Ha=G();
let AOi=null;let AUO=null;let ASS=null;let ASp=null;let ATc=null;let ATx=null;let Bd$=()=>{Bd$=Bk(Ha);ARt();}
let ARt=()=>{let b,c,d,e,f,g,h,i;Dn();AOi=Du;b=new PR;c=Bs(P,0);d=c.data;EH(C(1175));e=d.length;f=0;while(f<e){EH(d[f]);f=f+1|0;}b.tD=C(1175);b.xa=c.t();AUO=b;b=new Pf;c=Bs(P,0);d=c.data;EH(C(1176));e=d.length;f=0;while(f<e){EH(d[f]);f=f+1|0;}b.tD=C(1176);b.xa=c.t();ASS=b;g=new JB;c=Bs(P,0);d=c.data;EH(C(1177));h=d.length;i=0;while(i<h){EH(d[i]);i=i+1|0;}g.tD=C(1177);g.xa=c.t();g.Cb=1;g.Bf=0;ASp=g;b=new JB;c=Bs(P,0);d=c.data;EH(C(1178));h=d.length;i=0;while(i<h){EH(d[i]);i=i+1|0;}b.tD=C(1178);b.xa=c.t();b.Cb
=0;b.Bf=0;ATc=b;b=new JB;c=Bs(P,0);d=c.data;EH(C(1179));h=d.length;i=0;while(i<h){EH(d[i]);i=i+1|0;}b.tD=C(1179);b.xa=c.t();b.Cb=0;b.Bf=1;ATx=b;}
let PR=G(Fo);
let AXc=a=>{let b,c,d,e,f;b=new Uk;c=BX(1);d=c.data;d[0]=63;EN();e=Gz;b.u0=e;b.uK=e;f=d.length;if(f&&f>=b.tB){b.Bj=a;b.x4=c.t();b.yd=1.0;b.tB=1.0;b.y2=H(512);b.xS=BX(512);return b;}e=new V;KY(e,C(487));E(e);}
let Pf=G(Fo);
let A8m=a=>{let b,c,d,e,f;b=new UY;c=BX(1);d=c.data;d[0]=63;EN();e=Gz;b.u0=e;b.uK=e;f=d.length;if(f&&f>=b.tB){b.Bj=a;b.x4=c.t();b.yd=1.0;b.tB=1.0;b.y2=H(512);b.xS=BX(512);return b;}e=new V;KY(e,C(487));E(e);}
function JB(){let a=this;Fo.call(a);a.Cb=0;a.Bf=0;}
let AJh=a=>{let b,c,d,e,f,g,h;b=new SE;c=a.Cb;d=a.Bf;e=BX(1);f=e.data;f[0]=63;EN();g=Gz;b.u0=g;b.uK=g;h=f.length;if(h&&h>=b.tB){b.Bj=a;b.x4=e.t();b.yd=2.0;b.tB=4.0;b.y2=H(512);b.xS=BX(512);b.Er=c;b.Di=d;return b;}g=new V;KY(g,C(487));E(g);}
let AGV=G();
let Pk=(b,c,d)=>{let e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=DB(Bd(I(b.data[e]),B(4294967295, 0)),Bd(I(c[e]),B(4294967295, 0)))?1:(-1);}return d;}
let Ku=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.or;e=c.or;if(!d)return c;if(!e)return b;f=b.oC;g=c.oC;if((f+g|0)==2){h=Bd(I(b.op.data[0]),B(4294967295, 0));i=Bd(I(c.op.data[0]),B(4294967295, 0));if(d!=e)return G$(d>=0?B4(h,i):B4(i,h));j=T(h,i);k=Z(j);l=GF(j);if(!l){b=new BT;B6();b.oS=(-2);b.or=d;b.oC=1;m=X(1);m.data[0]=k;b.op=m;}else{b=new BT;m=E2([k,l]);B6();b.oS=(-2);b.or=d;b.oC=2;b.op=m;}return b;}if(d==e){if(f<g){m=c.op;n=b.op;o=X(g+1|0);NA(o,m,g,n,f);}else{n=b.op;m=c.op;o=X(f+1|0);NA(o,n,f,m,g);}}else
{p=B9(f,g);p=!p?Pk(b.op,c.op,f):p<=0?(-1):1;if(!p){B6();return DF;}if(p!=1){m=c.op;n=b.op;o=X(g);L5(o,m,g,n,f);d=e;}else{m=b.op;n=c.op;o=X(f);L5(o,m,f,n,g);}}m=o.data;q=new BT;e=m.length;B6();q.oS=(-2);q.or=d;q.oC=e;q.op=o;DA(q);return q;}
let NA=(b,c,d,e,f)=>{let g,h,i,j;g=b.data;b=e.data;c=c.data;h=T(Bd(I(c[0]),B(4294967295, 0)),Bd(I(b[0]),B(4294967295, 0)));g[0]=Z(h);i=Gn(h,32);if(d<f){j=1;while(j<d){h=T(i,T(Bd(I(c[j]),B(4294967295, 0)),Bd(I(b[j]),B(4294967295, 0))));g[j]=Z(h);i=Gn(h,32);j=j+1|0;}while(j<f){h=T(i,Bd(I(b[j]),B(4294967295, 0)));g[j]=Z(h);i=Gn(h,32);j=j+1|0;}}else{j=1;while(j<f){h=T(i,T(Bd(I(c[j]),B(4294967295, 0)),Bd(I(b[j]),B(4294967295, 0))));g[j]=Z(h);i=Gn(h,32);j=j+1|0;}while(j<d){h=T(i,Bd(I(c[j]),B(4294967295, 0)));g[j]
=Z(h);i=Gn(h,32);j=j+1|0;}}if(Ej(i,M))g[j]=Z(i);}
let ID=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=b.or;e=c.or;if(!e)return b;if(!d){if(!e)b=c;else{b=new BT;d= -e|0;e=c.oC;f=c.op;B6();b.oS=(-2);b.or=d;b.oC=e;b.op=f;}return b;}g=b.oC;h=c.oC;if((g+h|0)==2){i=Bd(I(b.op.data[0]),B(4294967295, 0));j=Bd(I(c.op.data[0]),B(4294967295, 0));if(d<0)i=HJ(i);if(e<0)j=HJ(j);return G$(B4(i,j));}k=B9(g,h);l=!k?Pk(b.op,c.op,g):k<=0?(-1):1;if(l==(-1)){k= -e|0;if(d==e){f=c.op;m=b.op;n=X(h);L5(n,f,h,m,g);}else{f=c.op;m=b.op;n=X(h+1|0);NA(n,f,h,m,g);}}else if(d!=e){f=b.op;m=c.op;n
=X(g+1|0);NA(n,f,g,m,h);k=d;}else{if(!l){B6();return DF;}f=b.op;m=c.op;n=X(g);L5(n,f,g,m,h);k=d;}f=n.data;o=new BT;d=f.length;B6();o.oS=(-2);o.or=k;o.oC=d;o.op=n;DA(o);return o;}
let L5=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=M;h=0;while(h<f){i=b.data;j=e.data;k=T(g,B4(Bd(I(c.data[h]),B(4294967295, 0)),Bd(I(j[h]),B(4294967295, 0))));i[h]=Z(k);g=Gn(k,32);h=h+1|0;}while(h<d){l=b.data;k=T(g,Bd(I(c.data[h]),B(4294967295, 0)));l[h]=Z(k);g=Gn(k,32);h=h+1|0;}}
let YW=G();
let A36=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=f.data;i=X(e+1|0);j=X(g+1|0);k=g-1|0;l=Ef(h[k]);if(l){El(j,f,0,l);El(i,d,0,l);}else{CY(d,0,i,0,e);CY(f,0,j,0,g);}h=j.data;f=i.data;m=h[k];n=c-1|0;o=g-2|0;p=Bd(I(m),B(4294967295, 0));while(n>=0){k:{if(f[e]==m)q=(-1);else{r=A1l(T(BP(Bd(I(f[e]),B(4294967295, 0)),32),Bd(I(f[e-1|0]),B(4294967295, 0))),m);q=Z(r);s=GF(r);if(q){t=0;q=q+1|0;while(true){q=q+(-1)|0;if(t)break;u=W(Bd(I(q),B(4294967295, 0)),Bd(I(h[o]),B(4294967295, 0)));v=I(s);r=T(BP(v,32),
Bd(I(f[e-2|0]),B(4294967295, 0)));w=T(Bd(v,B(4294967295, 0)),p);if(Ef(GF(w))>=32)s=Z(w);else t=1;if(Gb(Bg(u,B(0, 2147483648)),Bg(r,B(0, 2147483648))))break k;}}}}if(q){c=e-g|0;if(A5C(i,c,j,g,q)){q=q+(-1)|0;v=M;x=0;while(x<g){k=c+x|0;v=T(v,T(Bd(I(f[k]),B(4294967295, 0)),Bd(I(h[x]),B(4294967295, 0))));f[k]=Z(v);v=Q(v,32);x=x+1|0;}}}if(b!==null)b.data[n]=q;e=e+(-1)|0;n=n+(-1)|0;}if(l){AAY(j,g,i,0,l);return j;}CY(i,0,j,0,g);return i;}
let A0a=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=M;g=Bd(I(e),B(4294967295, 0));h=d-1|0;i=I(e>>>1|0);e=e&1;j=BP(g,1);while(h>=0){k=c.data;l=B2(BP(f,32),Bd(I(k[h]),B(4294967295, 0)));if(DB(l,M)){m=BS(l,g);f=Dx(l,g);}else{n=Q(l,1);m=BS(n,i);f=T(BP(Dx(n,i),1),Bd(l,I(1)));if(e){if(Gb(m,f))f=B4(f,m);else if(W0(B4(m,f),g)){f=T(f,B4(j,m));m=B4(m,I(2));}else{f=T(f,B4(g,m));m=B4(m,I(1));}}}b.data[h]=Z(Bd(m,B(4294967295, 0)));h=h+(-1)|0;}return Z(f);}
let A1l=(b,c)=>{let d,e,f,g,h;d=Bd(I(c),B(4294967295, 0));if(DB(b,M)){e=BS(b,d);f=Dx(b,d);}else{g=Q(b,1);h=I(c>>>1|0);e=BS(g,h);f=T(BP(Dx(g,h),1),Bd(b,I(1)));if(c&1){if(Gb(e,f))f=B4(f,e);else if(Gb(B4(e,f),d)){f=T(f,B4(d,e));e=B4(e,I(1));}else{f=T(f,B4(BP(d,1),e));e=B4(e,I(2));}}}return B2(BP(f,32),Bd(e,B(4294967295, 0)));}
let A5C=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=M;h=M;i=0;j=Bd(I(f),B(4294967295, 0));while(i<e){k=d.data;l=b.data;f=k[i];m=Z(g);Gm();g=T(T(W(Bd(I(f),B(4294967295, 0)),j),Bd(I(m),B(4294967295, 0))),M);m=c+i|0;n=T(B4(Bd(I(l[m]),B(4294967295, 0)),Bd(g,B(4294967295, 0))),h);l[m]=Z(n);h=Gn(n,32);g=Q(g,32);i=i+1|0;}b=b.data;c=c+e|0;j=T(B4(Bd(I(b[c]),B(4294967295, 0)),g),h);b[c]=Z(j);return GF(j);}
function R4(){let a=this;D.call(a);a.wh=null;a.sO=null;a.wR=0;a.wY=0;}
function TB(){let a=this;D.call(a);a.zu=0;a.wz=0;a.se=0;a.Ao=M;a.Ew=null;a.Fw=null;a.HT=M;a.GX=null;}
let O4=G(0);
function UL(){D.call(this);this.IS=null;}
let AFJ=G();
let AWA=b=>{let c,d,e,f;while(true){while(true){c=2.0*Math.random()-1.0;d=2.0*Math.random()-1.0;e=c*c+d*d;if(e>=1.0)continue;else break;}if(e===0.0)continue;else break;}f=Ch((-2.0)*C$(e)/e);return Be3([c*f,d*f]);}
let ABO=G();
let ABj=G();
let Ys=(b,c)=>{if(c.or&&b.or){B6();if(Kh(c,J4))return b;if(Kh(b,J4))return c;if(b.or>0){if(c.or<=0)return AG6(b,c);return A9R(b,c);}if(c.or>0)return AG6(c,b);if(b.oC<=c.oC)return ZU(c,b);return ZU(b,c);}B6();return DF;}
let A9R=(b,c)=>{let d,e,f,g,h,i,j;d=b.oC;e=c.oC;if(d<e)e=d;if(b.oS==(-2)){if(!b.or)d=(-1);else{d=0;while(!b.op.data[d]){d=d+1|0;}}b.oS=d;}f=b.oS;if(c.oS==(-2)){if(!c.or)d=(-1);else{d=0;while(!c.op.data[d]){d=d+1|0;}}c.oS=d;}g=c.oS;if(f>g)g=f;if(g>=e){B6();return DF;}h=X(e);i=h.data;while(g<e){i[g]=b.op.data[g]&c.op.data[g];g=g+1|0;}j=new BT;B6();j.oS=(-2);j.or=1;j.oC=e;j.op=h;DA(j);return j;}
let AG6=(b,c)=>{let d,e,f,g,h,i,j;if(b.oS==(-2)){if(!b.or)d=(-1);else{d=0;while(!b.op.data[d]){d=d+1|0;}}b.oS=d;}e=b.oS;if(c.oS==(-2)){if(!c.or)d=(-1);else{d=0;while(!c.op.data[d]){d=d+1|0;}}c.oS=d;}f=c.oS;d=b.oC;if(f>=d){B6();return DF;}g=X(d);if(e<=f)e=f;if(e==f){g.data[e]=( -c.op.data[e]|0)&b.op.data[e];e=e+1|0;}f=c.oC;h=f>=d?d:f;i=g.data;while(e<h){i[e]=(c.op.data[e]^(-1))&b.op.data[e];e=e+1|0;}i:{if(e>=f)while(true){if(e>=d)break i;i[e]=b.op.data[e];e=e+1|0;}}j=new BT;B6();j.oS=(-2);j.or=1;j.oC=d;j.op=
g;DA(j);return j;}
let ZU=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;if(b.oS==(-2)){if(!b.or)d=(-1);else{d=0;while(!b.op.data[d]){d=d+1|0;}}b.oS=d;}e=b.oS;if(c.oS==(-2)){if(!c.or)d=(-1);else{d=0;while(!c.op.data[d]){d=d+1|0;}}c.oS=d;}f=c.oS;d=c.oC;if(e>=d)return b;g=B9(f,e);if(g>0)e=f;h=g>0?( -c.op.data[e]|0)&(b.op.data[e]^(-1)):g>=0?( -c.op.data[e]|0)&( -b.op.data[e]|0):(c.op.data[e]^(-1))&( -b.op.data[e]|0);if(!h){e=e+1|0;i:{while(e<d){h=(b.op.data[e]|c.op.data[e])^(-1);if(h)break i;e=e+1|0;}}if(!h){bq:{while(true){g=b.oC;if(e>=g)break;h
=b.op.data[e]^(-1);if(h)break bq;e=e+1|0;}}if(!h){d=g+1|0;i=X(d);i.data[d-1|0]=1;j=new BT;B6();j.oS=(-2);j.or=(-1);j.oC=d;j.op=i;return j;}}}k=b.oC;l=X(k);m=l.data;m[e]= -h|0;h=e+1|0;while(h<d){m[h]=b.op.data[h]|c.op.data[h];h=h+1|0;}while(h<k){m[h]=b.op.data[h];h=h+1|0;}j=new BT;B6();j.oS=(-2);j.or=(-1);j.oC=k;j.op=l;return j;}
function Uw(){let a=this;D.call(a);a.AE=null;a.HM=null;a.GA=0;a.CT=0;}
let AEo=(a,b)=>{let c;c=a.AE;return (c.oj-c.ok|0)<b?0:1;}
let ACq=(a,b)=>{let c;c=a.HM;return (c.oj-c.ok|0)<b?0:1;}
let GQ=G(FH);
let NS=G(G2);
function Pp(){let a=this;Ew.call(a);a.rr=null;a.IR=null;}
let LT=G(FX);
let Mv=G(FX);
let RZ=G(FX);
function AFB(){let a=this;D.call(a);a.GV=0;a.JW=0;a.HF=null;}
let Bbj=(a,b)=>{let c=new AFB();AMo(c,a,b);return c;}
let AMo=(a,b,c)=>{a.HF=b;a.JW=c;a.GV=c;}
let AP8=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.HF;c=a.GV;b=b.qY;d=b.q3;if(!d){b=new Cb;b.oe=1;b.of=1;Bt(b);E(b);}if(c>=0){e=B9(c,b.r$);if(e<0){k:{f=b.pJ.data;g=c*2|0;if(f[g]<0)b=null;else{b=b.sD;if(!d){b=new Cb;b.oe=1;b.of=1;Bt(b);E(b);}if(c>=0&&e<0){h=f[g];if(!d){b=new Cb;b.oe=1;b.of=1;Bt(b);E(b);}if(c<0)break k;if(e>=0)break k;b=Cv(b,h,f[g+1|0]);}else{b=new O;U();i=new L;Dm(i);i.og=H(16);N(i,i.od,c,10);j=new P;f=i.og;k=f.data;h=i.od;Dm(j);K1(0,h,k.length);j.oh=R(f.data,0,h);b.oe=1;b.of=1;Bt(b);b.oi=j;E(b);}}return b;}b
=new O;U();i=new L;Dm(i);i.og=H(16);N(i,i.od,c,10);j=new P;f=i.og;k=f.data;h=i.od;Dm(j);K1(0,h,k.length);j.oh=R(f.data,0,h);b.oe=1;b.of=1;Bt(b);b.oi=j;E(b);}}b=new O;U();i=new L;Dm(i);i.og=H(16);N(i,i.od,c,10);j=new P;f=i.og;k=f.data;h=i.od;Dm(j);K1(0,h,k.length);j.oh=R(f.data,0,h);b.oe=1;b.of=1;Bt(b);b.oi=j;E(b);}
let Uk=G(FY);
let AN4=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j>=d){n=h.wh;if(!((n.oj-n.ok|0)<2?0:1)){i=DW;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new CZ;i.pb=2;i.pA=1;break b;}j=j+(-1)|0;i=new CZ;i.pb=3;i.pA=2;break b;}if(m!=56320?0:1){i=new CZ;i.pb=2;i.pA=1;}if(l>=128){i=new CZ;i.pb=3;i.pA=1;j=j+(-1)|0;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.wR=j;h.wY=f;return i;}
let UY=G(FY);
let ATD=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j==d){n=h.wh;if(!((n.oj-n.ok|0)<2?0:1)){i=DW;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new CZ;i.pb=2;i.pA=1;break b;}j=j+(-1)|0;i=new CZ;i.pb=3;i.pA=2;break b;}if(m!=56320?0:1){i=new CZ;i.pb=2;i.pA=1;}if(l>=256){j=j+(-1)|0;i=new CZ;i.pb=3;i.pA=1;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.wR=j;h.wY=f;return i;}
function SE(){let a=this;FY.call(a);a.Er=0;a.Di=0;}
let A7C=(a,b,c,d,e,f,g,h)=>{let i,j;if(a.Er){if((f+2|0)>g){h=h.sO;return !(h.ok>=h.oj?0:1)?DK:null;}a.Er=0;if(!a.Di){i=e.data;j=f+1|0;i[f]=(-2);f=j+1|0;i[j]=(-1);}else{i=e.data;j=f+1|0;i[f]=(-1);f=j+1|0;i[j]=(-2);}}return !a.Di?Wo(a,b,c,d,e,f,g,h):ACh(a,b,c,d,e,f,g,h);}
let ACh=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new CZ;i.pb=2;i.pA=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.sO;if((m.oj-m.ok|0)<2?0:1)break b;i=DK;break b;}j=e.data;c=f+1|0;j[f]=(l&255)<<24>>24;f=c+1|0;j[c]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.wh;if((m.oj-m.ok|0)<2?0:1)break b;i=DW;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new CZ;i.pb=2;i.pA=1;break b;}if((f+4|
0)>g){c=c+(-2)|0;m=h.sO;if((m.oj-m.ok|0)<4?0:1)break b;i=DK;break b;}j=e.data;k=f+1|0;j[f]=(l&255)<<24>>24;f=k+1|0;j[k]=l>>8<<24>>24;k=f+1|0;j[f]=(n&255)<<24>>24;f=k+1|0;j[k]=n>>8<<24>>24;}}}h.wR=c;h.wY=f;return i;}
let Wo=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new CZ;i.pb=2;i.pA=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.sO;if((m.oj-m.ok|0)<2?0:1)break b;i=DK;break b;}j=e.data;c=f+1|0;j[f]=l>>8<<24>>24;f=c+1|0;j[c]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.wh;if((m.oj-m.ok|0)<2?0:1)break b;i=DW;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new CZ;i.pb=2;i.pA=1;break b;}if((f+4|0)
>g){c=c+(-2)|0;m=h.sO;if((m.oj-m.ok|0)<4?0:1)break b;i=DK;break b;}j=e.data;k=f+1|0;j[f]=l>>8<<24>>24;f=k+1|0;j[k]=(l&255)<<24>>24;k=f+1|0;j[f]=n>>8<<24>>24;f=k+1|0;j[k]=(n&255)<<24>>24;}}}h.wR=c;h.wY=f;return i;}
function Pm(){let a=this;Ew.call(a);a.r5=null;a.AY=null;a.BQ=null;a.B8=null;}
let AKa=(a,b)=>{a.r5.rr.Ao=By(b);}
let AXp=(a,b)=>{b=a.r5.rr;b.wz=1;b.se=0;}
let YQ=(a,b,c)=>{Jm(a.B8,a.AY,a.BQ,c);b=a.r5.rr;b.zu=1;b.se=0;return 0;}
let ADG=G();
function Gc(){D.call(this);this.yI=0;}
let A37=null;let AQ6=null;let ANe=null;let Kq=a=>{return a.yI;}
let AYY=()=>{let b;b=new Gc;b.yI=1;A37=b;b=new Gc;b.yI=0;AQ6=b;ANe=BI(Kr);}
function Kx(){let a=this;D.call(a);a.pj=null;a.o1=0;}
let FT=null;let DQ=(a,b)=>{let c,d,e,f;c=a.pj;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=H(e);CY(c,0,f,0,a.o1);a.pj=f;}
let KR=a=>{let b,c,d;b=a.o1+4|0;if(b>a.pj.data.length)DQ(a,b);c=a.pj.data;d=a.o1;b=d+1|0;a.o1=b;c[d]=110;d=b+1|0;a.o1=d;c[b]=117;b=d+1|0;a.o1=b;c[d]=108;a.o1=b+1|0;c[b]=108;}
let Hx=(a,b)=>{let c,d,e;c=a.o1;if(c==a.pj.data.length)DQ(a,c+1|0);d=a.pj.data;e=a.o1;a.o1=e+1|0;d[e]=b;}
let Oq=(a,b,c,d)=>{let e,f,g,h;if(b==(-2147483648)){e=C(1180).oh.length;b=a.o1+e|0;if(b>a.pj.data.length)DQ(a,b);H5(C(1180),0,e,a.pj,a.o1);a.o1=b;return a;}if(b<0){f=a.o1;if(f==a.pj.data.length)DQ(a,f+1|0);g=a.pj.data;f=a.o1;a.o1=f+1|0;g[f]=45;b= -b|0;}c:{if(c>1){h=b>=0?1:2;f=b;while(true){f=f/10|0;if(!f)break;h=h+1|0;}e=c-h|0;while(true){if(e<=0)break c;c=a.o1;if(c==a.pj.data.length)DQ(a,c+1|0);g=a.pj.data;h=a.o1;a.o1=h+1|0;g[h]=d;e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){c=FT.data[Z(BS(Dx(I(b),B(1410065408, 2)),
I(1000000000)))];d=a.o1;if(d==a.pj.data.length)DQ(a,d+1|0);g=a.pj.data;e=a.o1;a.o1=e+1|0;g[e]=c;}if(b>=100000000){c=FT.data[(b%1000000000|0)/100000000|0];d=a.o1;if(d==a.pj.data.length)DQ(a,d+1|0);g=a.pj.data;e=a.o1;a.o1=e+1|0;g[e]=c;}if(b>=10000000){c=FT.data[(b%100000000|0)/10000000|0];d=a.o1;if(d==a.pj.data.length)DQ(a,d+1|0);g=a.pj.data;e=a.o1;a.o1=e+1|0;g[e]=c;}if(b>=1000000){c=FT.data[(b%10000000|0)/1000000|0];d=a.o1;if(d==a.pj.data.length)DQ(a,d+1|0);g=a.pj.data;e=a.o1;a.o1=e+1|0;g[e]=c;}if(b>=100000)Hx(a,
FT.data[(b%1000000|0)/100000|0]);Hx(a,FT.data[(b%100000|0)/10000|0]);}if(b>=1000)Hx(a,FT.data[(b%10000|0)/1000|0]);if(b>=100)Hx(a,FT.data[(b%1000|0)/100|0]);if(b>=10)Hx(a,FT.data[(b%100|0)/10|0]);Hx(a,FT.data[b%10|0]);return a;}
let AFF=()=>{FT=Tc([48,49,50,51,52,53,54,55,56,57]);}
let UX=G();
let CC=null;let AM8=()=>{AM8=Bk(UX);AIL();}
let AH8=()=>{let b,c,d,e,f,g;AM8();b=CC;if(b.vX){b.vX=0;c=b.sI.data;d=null;e=0;f=c.length;if(e>f){b=new V;b.oe=1;b.of=1;E(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}c=b.qg.data;d=null;e=0;f=c.length;if(e>f){b=new V;b.oe=1;b.of=1;E(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}}Fp();B3(b,C(1181),AJB);B3(CC,C(1182),AEk);B3(CC,C(1183),ADu);B3(CC,C(1184),A2m);B3(CC,C(1185),A5M);B3(CC,C(1186),AWy);B3(CC,C(1187),AVB);B3(CC,C(1188),AXz);B3(CC,C(1189),AUN);B3(CC,C(1190),A9B);B3(CC,C(1191),AR9);B3(CC,C(1192),A8H);B3(CC,C(1193),A1P);B3(CC,
C(1194),A1z);B3(CC,C(1195),AS1);B3(CC,C(1196),AVM);B3(CC,C(1197),AUK);B3(CC,C(1198),A$8);B3(CC,C(1199),AX4);B3(CC,C(1135),A2V);B3(CC,C(1200),A$4);B3(CC,C(1201),A4O);B3(CC,C(1202),AVV);B3(CC,C(1203),AVc);B3(CC,C(1204),AT8);B3(CC,C(1205),AQM);B3(CC,C(1206),AI_);B3(CC,C(1207),AQx);B3(CC,C(1208),ANy);B3(CC,C(1209),A2r);B3(CC,C(1210),A1p);B3(CC,C(1211),AQp);B3(CC,C(1212),A6J);B3(CC,C(1213),A7q);}
let AIL=()=>{CC=F7(51,0.800000011920929);AH8();}
let Lt=G(B0);
let Ml=G(B0);
function L$(){GQ.call(this);this.DS=0;}
let AM1=a=>{let b,c,d,e,f,g,h;b=a.DS;c=new L;c.og=H(16);F(c,c.od,C(1214));N(c,c.od,b,10);d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
function Ls(){GQ.call(this);this.E1=0;}
let AMk=a=>{let b,c,d,e,f,g,h;b=a.E1;c=new L;c.og=H(16);F(c,c.od,C(1215));N(c,c.od,b,10);d=new P;e=c.og;f=e.data;g=c.od;U();h=f.length;if(g>=0&&g<=(h-0|0)){d.oh=R(e.data,0,g);return d;}c=new O;c.oe=1;c.of=1;Bt(c);E(c);}
let Oj=G();
let ATL=null;let Bf5=()=>{Bf5=Bk(Oj);AQi();}
let AQi=()=>{let b,c;F$();b=X((AH9.t()).data.length);c=b.data;ATL=b;c[Ii.on]=1;c[I2.on]=2;c[IN.on]=3;c[Hv.on]=4;c[Ra.on]=5;}
function HV(){let a=this;E7.call(a);a.tm=0;a.si=null;a.sS=null;a.sa=null;}
let AZB=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new R6;c.tv=a;c.w3=b;c=CK(c,"handleEvent");b.onreadystatechange=c;c=a.sa;d=a.sS;e=new Jn;e.DL=c;e.Bp=d;c=CK(e,"handleEvent");b.onprogress=c;d=a.si;f=a.tm;b.open("GET",Cp(d),!!f);if(a.tm){d="arraybuffer";b.responseType=d;}b.send();}
function VK(){let a=this;Ew.call(a);a.B1=null;a.IF=null;}
let A_Y=(a,b)=>{let c=new VK();A9c(c,a,b);return c;}
let A9c=(a,b,c)=>{a.IF=b;a.B1=c;}
let AK_=(a,b)=>{a.B1.r5.rr.Ao=By(b);}
let A5a=(a,b)=>{b=a.B1.r5.rr;b.wz=1;b.se=0;}
let AYA=(a,b,c)=>{c=a.B1;b=null;Jm(c.B8,c.AY,c.BQ,b);b=c.r5.rr;b.zu=1;b.se=0;return 0;}
function Oi(){let a=this;Ew.call(a);a.xO=null;a.G8=null;a.Gy=null;a.zS=null;}
let ANz=(a,b)=>{a.xO.r5.rr.Ao=By(b);}
let AXM=(a,b)=>{b=a.xO.r5.rr;b.wz=1;b.se=0;}
let ABW=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.G8;if(e!==null)d.setAttribute("crossOrigin",Cp(e));a:{e=a.zS;e.pu=e.pu+1|0;e=new SP;e.Cd=a;e.IT=b;e.Ge=c;e.Fi=d;d.addEventListener("load",CK(e,"handleEvent"),!!0);d.addEventListener("error",CK(e,"handleEvent"),!!0);if(!a.zS.GE){b=Cp(b);d.src=b;}else{b=a.Gy;c=ZZ(c);e=new L;e.og=H(16);F(e,e.od,C(1216));f=e.od;if(b===null)b=C(2);F(e,f,b);F(e,e.od,C(1217));f=e.od;if(c===null)c=C(2);F(e,f,c);b=new P;g=e.og;h=g.data;i=e.od;U();j=h.length;if
(i<0)break a;if(i>(j-0|0))break a;b.oh=R(g.data,0,i);b=Cp(b);d.src=b;}return 0;}b=new O;b.oe=1;b.of=1;Bt(b);E(b);}
let AN1=(a,b,c)=>{return ABW(a,b,c);}
function R6(){let a=this;D.call(a);a.w3=null;a.tv=null;}
let P8=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.w3.readyState==4){if(a.w3.status==200){b=a.tv;if(b.sa.q1){if(BY===null){c=new Do;c.p$=DX;d=new L;d.og=H(16);c.o_=d;c.p7=H(32);c.qf=0;Dn();c.qa=Du;BY=c;}e=BY;b=b.si;d=new L;d.og=H(16);F(d,d.od,C(723));f=d.od;if(b===null)b=C(2);F(d,f,b);MN(e,OT(d.og,0,d.od));}e
=a.w3.response;g=new Int8Array(e);b=a.tv;d=b.sS;c=b.si;b=new J_;b.q9=g;b.EK=e;d.eV(c,b);}else if(a.w3.status!=404&&a.w3.status!=403){try{h=I(100);$p=1;continue _;}catch($$e){$$je=BH($$e);if($$je instanceof Eb){}else{throw $$e;}}b=a.tv;d=b.sa;f=b.tm;c=b.si;e=b.sS;if(d.q1){if(BY===null){g=new Do;g.p$=DX;b=new L;b.og=H(16);g.o_=b;g.p7=H(32);g.qf=0;Dn();g.qa=Du;BY=g;}g=BY;b=new L;b.og=H(16);F(b,b.od,C(133));F(b,b.od,c===null?C(2):c);i=new P;j=b.og;k=j.data;l=b.od;U();m=k.length;if(l>=0&&l<=(m-0|0)){i.oh=R(j.data,
0,l);b=g.o_;F(b,b.od,i);m=b.od;Bo(b,m,m+1|0);b.og.data[m]=10;Dy(g);}else{b=new O;Bl(b);E(b);}}d.pu=d.pu+1|0;b=new HV;b.sa=d;b.tm=f;b.si=c;b.sS=e;d=null;c=null;b.rk=new D;b.rj=1;b.sv=c;b.sZ=d;n=DL;DL=n+1|0;b.sV=I(n);d=new F3;d.sx=b;GL(d);}else{b=a.tv;b.sS.m5(b.si);}b=a.tv.sa;b.pu=b.pu-1|0;}return;case 1:b:{try{Kk(h);if(HB()){break _;}break b;}catch($$e){$$je=BH($$e);if($$je instanceof Eb){}else{throw $$e;}}}b=a.tv;d=b.sa;f=b.tm;c=b.si;e=b.sS;if(d.q1){if(BY===null){g=new Do;g.p$=DX;b=new L;b.og=H(16);g.o_=b;g.p7
=H(32);g.qf=0;Dn();g.qa=Du;BY=g;}g=BY;b=new L;b.og=H(16);F(b,b.od,C(133));F(b,b.od,c===null?C(2):c);i=new P;j=b.og;k=j.data;l=b.od;U();m=k.length;if(l>=0&&l<=(m-0|0)){i.oh=R(j.data,0,l);b=g.o_;F(b,b.od,i);m=b.od;Bo(b,m,m+1|0);b.og.data[m]=10;Dy(g);}else{b=new O;Bl(b);E(b);}}d.pu=d.pu+1|0;b=new HV;b.sa=d;b.tm=f;b.si=c;b.sS=e;d=null;c=null;b.rk=new D;b.rj=1;b.sv=c;b.sZ=d;n=DL;DL=n+1|0;b.sV=I(n);d=new F3;d.sx=b;GL(d);b=a.tv.sa;b.pu=b.pu-1|0;return;default:DU();}}Co().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let AH3=(a,b)=>{let $p,$z;$p=0;if(DV()){let $T=Co();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:P8(a,b);if(HB()){break _;}return;default:DU();}}Co().s(a,b,$p);}
function SP(){let a=this;D.call(a);a.IT=null;a.Ge=null;a.Fi=null;a.Cd=null;}
let XC=(a,b)=>{let c,d;c=Bv(b.type);if(c===C(1218))d=1;else if(!(C(1218) instanceof P))d=0;else{b=C(1218);d=c.oh!==b.oh?0:1;}if(d){b=a.Cd.xO.r5.rr;b.wz=1;b.se=0;}else{b=a.Ge;b.Dx=a.Fi;c=a.Cd.xO;Jm(c.B8,c.AY,c.BQ,b);b=c.r5.rr;b.zu=1;b.se=0;}b=a.Cd.zS;b.pu=b.pu-1|0;}
let AMY=(a,b)=>{XC(a,b);}
BhC([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang"]);
BhD([D,0,0,[],0,3,0,0,["cF",BhE(A0r),"cG",BhF(AQO),"l",BhE(AKY)],AAy,0,D,[],0,3,0,0,0,He,0,D,[],0,3,0,Bii,0,RK,0,D,[],3,3,0,0,0,Np,0,D,[RK],0,3,0,0,0,DZ,0,D,[],3,3,0,0,0,AAt,0,Np,[DZ],0,3,0,0,0,Ea,0,D,[],3,3,0,0,0,G7,0,D,[Ea],0,3,0,0,0,DO,0,D,[],3,3,0,0,0,CI,0,D,[],3,3,0,0,0,BW,0,D,[DO,CI],1,3,0,0,["l",BhE(A2e)],FA,0,BW,[],12,3,0,Beh,0,G_,0,D,[],0,3,0,0,0,Nr,0,D,[],3,3,0,0,0,Kp,0,G_,[Nr],0,3,0,0,0,HF,0,D,[],3,3,0,0,0,EK,0,D,[],3,3,0,0,0,HT,0,D,[HF,EK],0,3,0,0,0,Hp,0,D,[],3,3,0,0,0,CB,0,D,[Hp],0,3,0,0,0,H4,0,
CB,[],0,3,0,0,0,AGb,0,H4,[],0,0,0,0,0,GO,0,BW,[],12,3,0,A9G,0,Mh,0,D,[],3,3,0,0,0,Kv,0,D,[Mh],3,3,0,0,0,Ho,0,D,[],3,3,0,0,0,Ek,0,D,[Ho],1,3,0,0,0,AG8,0,Ek,[],0,0,0,0,0,L_,0,HT,[],0,3,0,0,0,In,0,D,[Hp],0,3,0,0,0,ADe,0,D,[],1,3,0,0,0,ABK,0,D,[],0,3,0,0,0,Vh,0,D,[],3,3,0,0,0,M8,0,D,[Vh],0,3,0,0,0,AFY,0,M8,[],0,0,0,0,0,AEu,0,G7,[],0,3,0,0,0,S_,0,D,[],32,0,0,Bij,0,AFj,0,D,[],1,3,0,0,0,T7,0,D,[],32,0,0,Bik,0,AG7,0,Ek,[],0,0,0,0,0,GU,0,D,[Mh],0,3,0,0,0,Ql,0,GU,[Kv],0,3,0,0,0,Hs,0,D,[],4,3,0,Bb_,0,LD,0,D,[Hp],1,3,0,
0,0,Ve,0,H4,[],0,3,0,0,0,S2,0,D,[],0,3,0,0,0,KS,0,D,[],0,3,0,Bil,0,ND,0,D,[Hp],1,3,0,0,0,Ki,0,GU,[Kv],0,3,0,0,0]);
BhD([Rn,0,GU,[Kv],0,3,0,0,0,EE,0,CB,[],0,3,0,0,0,Re,0,Ki,[],0,3,0,0,0,WI,0,G7,[],0,3,0,0,0,Ld,0,D,[],3,3,0,0,0,YC,0,G7,[],0,3,0,0,0,XJ,0,D,[Ea],4,3,0,0,0,N4,0,D,[],32,0,0,Bim,0,Db,0,BW,[],12,3,0,AFz,0,CX,0,D,[Ea],1,3,0,0,0,F9,0,CX,[],1,3,0,0,0,X3,0,F9,[],0,3,0,0,0,Zi,0,F9,[],0,3,0,0,0,DE,0,CX,[],1,3,0,0,0,F2,0,DE,[],1,3,0,0,0,ABT,0,F2,[],0,3,0,0,0,ACt,0,D,[Hp],0,0,0,0,0,Mp,0,CX,[],0,3,0,0,0,ACT,0,Mp,[],0,3,0,0,0,ADD,0,CX,[],0,3,0,0,0,Yy,0,CX,[],0,3,0,0,0,AGw,0,CX,[],0,3,0,0,0,AGN,0,D,[],0,3,0,0,0,Nd,0,CX,[],
1,3,0,0,0,Yo,0,Nd,[],0,3,0,0,0,WV,0,DE,[],0,3,0,0,0,AG5,0,DE,[],0,3,0,0,0,AAu,0,F2,[],0,3,0,0,0,AF$,0,CX,[],0,3,0,0,0,Zt,0,F2,[],0,3,0,0,0,AHQ,0,DE,[],0,3,0,0,0,AAJ,0,DE,[],0,3,0,0,0,Xw,0,CX,[],0,3,0,0,0,Yi,0,DE,[],0,3,0,0,0,Yk,0,CX,[],0,3,0,0,0,ADV,0,CX,[],0,3,0,0,0,AEY,0,F9,[],0,3,0,0,0,AB8,0,DE,[],0,3,0,0,0,AAW,0,CX,[],0,3,0,0,0,AFV,0,F2,[],0,3,0,0,0,ADN,0,F9,[],0,3,0,0,0,Y_,0,CX,[],0,3,0,0,0,Wu,0,DE,[],0,3,0,0,0,AEz,0,DE,[],0,3,0,0,0,Sw,0,D,[DZ],0,3,0,0,0,DM,0,Kp,[Ld],0,3,0,0,0,D1,0,DM,[],0,3,0,Bin,0,GS,
0,D1,[HF],0,3,0,0,0,Lu,0,GS,[],0,3,0,0,0,AC7,0,Lu,[],0,3,0,0,0]);
BhD([AAj,0,CB,[],0,0,0,0,0,LW,0,DM,[],0,3,0,0,0,PS,0,D,[],3,3,0,0,0,FZ,0,D,[PS],1,3,0,0,0,Xr,0,FZ,[],0,0,0,0,0,D8,0,G_,[Ld],0,3,0,0,0,ACg,0,D8,[],0,3,0,0,0,AAi,0,CB,[],0,0,0,0,0,Cf,0,D,[],1,3,0,AIS,0,Ua,0,Cf,[],0,0,0,0,0,AFZ,0,Cf,[],0,0,0,0,0,MC,0,EE,[],0,3,0,0,0,AEU,0,MC,[],0,3,0,0,0,Rh,0,Cf,[],0,0,0,0,0,AHJ,0,CB,[],0,0,0,0,0,I7,0,D1,[],0,3,0,0,0,AF0,0,Cf,[],0,0,0,0,0,HE,0,D,[],3,3,0,0,0,Fj,0,D,[CI,HE],0,3,0,0,0,E4,"Table$DebugRect",12,Fj,[],0,3,0,AWf,0,Xu,0,FZ,[],0,0,0,0,0,Gf,0,D8,[HF],0,3,0,0,0,WZ,0,Gf,[],
0,3,0,0,0,AEF,0,CB,[],0,0,0,0,0,O$,0,D,[],3,3,0,0,0,AGy,0,D,[O$],0,3,0,0,0,Hl,0,D,[],0,3,0,0,0,Hr,0,Hl,[],0,3,0,0,0,Uu,0,Hr,[],0,3,0,0,0,L8,0,D8,[HF],0,3,0,0,0,XR,0,L8,[],0,3,0,0,0,AIf,0,LW,[],0,0,0,0,0,MF,0,DM,[],0,3,0,0,0,ABv,0,GS,[],0,3,0,0,0,NO,0,D8,[Nr],0,3,0,0,0,Rf,0,Cf,[],0,0,0,0,0,UH,0,D,[],0,3,0,0,0,ADS,0,D,[Ho],0,0,0,0,0,AEV,0,CB,[],0,0,0,0,0,YU,0,Ek,[],0,0,0,0,0,AEj,0,D,[],0,3,0,0,0,ZO,0,CB,[],0,0,0,0,0,AA7,0,EE,[],0,0,0,0,0,AEC,0,In,[],0,0,0,0,0,T8,0,Cf,[],0,0,0,0,0,T_,0,Cf,[],0,0,0,0,0,TL,0,D,[],
3,3,0,0,0,K0,0,D,[],0,3,0,0,0,R3,0,K0,[],0,3,0,0,0,Xs,0,FZ,[],0,0,0,0,0]);
BhD([AAh,0,LD,[],0,0,0,0,0,AAk,0,ND,[],0,0,0,0,0,AHK,0,CB,[],0,0,0,0,0,AHL,0,EE,[],0,0,0,0,0,Rg,0,Cf,[],0,0,0,0,0,Fd,0,D,[Ea],0,3,0,Bip,0,Tn,0,Hr,[],0,3,0,0,0,Yf,0,CB,[],0,0,0,0,0,Wk,0,Ek,[],0,0,0,0,0,Ub,0,Cf,[],0,0,0,0,0,ADh,0,DM,[],0,3,0,0,0,AED,0,CB,[],0,0,0,0,0,P4,0,D,[],0,3,0,0,0,Ig,0,Cf,[],0,3,0,0,0,XE,0,MF,[],0,3,0,0,0,T9,0,Cf,[],0,0,0,0,0,Tv,0,D8,[HF],0,3,0,0,0,AEI,0,L_,[],0,0,0,0,0,Q3,0,D,[],0,3,0,0,0,MK,0,D8,[],0,3,0,Biq,0,Sd,0,D,[],0,3,0,0,0,AF1,0,Cf,[],0,0,0,0,0,Ri,0,Cf,[],0,0,0,0,0,AGQ,0,I7,[],
0,3,0,0,0,T$,0,Cf,[],0,0,0,0,0,PB,0,D,[],0,3,0,0,0,AH_,0,D,[],0,3,0,0,0,Er,0,BW,[],12,3,0,Bgo,0,AIc,0,Cf,[],0,0,0,0,0,AEv,0,Ek,[],0,0,0,0,0,D6,0,D,[],1,3,0,0,0,Rj,0,D6,[],0,0,0,0,0,Wg,0,D,[TL],0,3,0,0,0,U8,0,D,[],0,3,0,0,0,TC,0,D,[],0,3,0,0,0,T4,0,D,[],0,3,0,0,0,KU,0,CB,[],0,3,0,0,0,Wj,0,Ek,[],0,0,0,0,0,AHM,0,NO,[],0,0,0,0,0,Wh,0,D,[],3,3,0,0,0,Yg,0,CB,[],0,0,0,0,0,AIp,0,DM,[],0,3,0,0,0,Zh,0,DM,[],0,3,0,0,0,AEJ,0,EE,[],0,0,0,0,0,Mc,0,D,[],0,3,0,0,0,Xq,0,Mc,[],0,0,0,0,0,AHD,0,G_,[DZ],0,3,0,0,0,V1,0,CB,[],0,0,
0,0,0,AGW,0,GS,[],0,3,0,0,0,Y0,0,CB,[],0,0,0,0,0]);
BhD([AH4,0,EE,[],0,0,0,0,0,QW,0,Hl,[],0,3,0,0,0,Zk,0,DM,[],0,3,0,0,0,Ty,0,D,[],0,3,0,0,0,Tf,0,D,[],0,3,0,0,0,YV,0,D8,[],0,3,0,0,0,AA8,0,HT,[],0,0,0,0,0,V2,0,CB,[],0,0,0,0,0,Uo,0,DM,[],0,3,0,0,0,ABf,0,KU,[],0,3,0,0,0,V3,0,D1,[],0,0,0,0,0,Xt,0,FZ,[],0,0,0,0,0,ABw,0,D,[],1,3,0,0,0,Rc,0,D,[],0,3,0,0,0,EM,0,D,[CI],0,3,0,Bir,0,BA,0,D,[],1,3,0,EL,0,Wy,0,BA,[],0,3,0,0,0,AEw,0,D,[],0,3,0,0,0,QA,0,BA,[],0,0,0,0,0,AHW,0,D,[],0,3,0,0,0,FF,0,BA,[],0,3,0,0,0,I9,0,FF,[],0,3,0,0,0,Ij,0,FF,[],0,3,0,0,0,JN,0,D,[],3,3,0,0,0,WP,
0,D,[JN],0,3,0,0,0,QD,0,BA,[],0,0,0,0,0,AAo,0,D,[HE],0,3,0,0,0,Qz,0,BA,[],0,0,0,0,0,Il,0,BA,[],0,3,0,0,0,Qy,0,BA,[],0,0,0,0,0,Qx,0,BA,[],0,0,0,0,0,KJ,0,D,[],4,3,0,0,0,ABI,0,D6,[],0,0,0,0,0,JC,0,D,[],3,3,0,0,0,BQ,0,D,[CI,JC],0,3,0,0,0,AFN,0,BA,[],0,0,0,0,0,HN,0,BA,[],0,3,0,0,0,AFn,0,D,[],0,3,0,0,0,QF,0,BA,[],0,0,0,0,0,Ru,0,HN,[],0,3,0,0,0,XA,0,D,[Ea],0,3,0,0,0,FV,0,BW,[],12,3,0,Bcc,0,P9,0,D,[],0,3,0,Bis,0,Jh,0,BA,[],0,3,0,0,0,Yd,0,Jh,[],0,3,0,0,0,TY,0,BA,[],0,0,0,0,0,Y9,0,D,[CI],4,3,0,0,0,Qw,0,BA,[],0,0,0,0,
0,E1,0,D,[CI,JC],0,3,0,BbP,0,ACi,0,Il,[],0,3,0,0,0]);
BhD([X0,0,BA,[],0,3,0,0,0,WJ,0,D,[],0,3,0,0,0,ABk,0,D,[HE],0,3,0,0,0,QB,0,BA,[],0,0,0,0,0,AHF,0,BA,[],0,3,0,0,0,AFO,0,BA,[],0,0,0,0,0,XY,0,Il,[],0,3,0,0,0,K3,0,D,[CI],0,3,0,Bit,0,Lc,0,D,[CI],0,3,0,Bc2,0,Nf,0,D,[CI],0,3,0,Bfi,0,ACX,0,D,[CI],0,3,0,0,0,VQ,0,D,[CI],0,3,0,0,0,ZJ,0,D,[CI,HE],0,3,0,0,0,AEc,0,D,[JN],0,3,0,0,0,Qq,0,D,[],4,3,0,LU,0,C3,0,D,[],4,3,0,Biu,0,Wm,0,D,[],4,3,0,0,0,ADI,0,Jh,[],0,3,0,0,0,EP,0,D,[CI],0,3,0,HI,0,Sp,0,D,[],3,3,0,0,0,Hn,0,D,[Sp,CI],0,3,0,0,0,TS,0,Hn,[],0,3,0,0,0,AFM,0,BA,[],0,0,0,
0,0,QC,0,BA,[],0,0,0,0,0,JP,0,D,[],0,3,0,AO1,0,Fw,0,D,[CI],0,3,0,QJ,0,VB,0,D,[],0,3,0,0,0,AFQ,0,D,[],0,3,0,0,0,Bf,0,D,[CI,JC],0,3,0,BU,0,XD,0,D,[CI,HE],0,3,0,0,0,W4,0,D6,[],0,0,0,0,0,P1,0,HN,[],0,3,0,0,0,AF2,0,D,[JN],0,3,0,0,0,Wr,0,D,[],0,3,0,0,0,AHn,0,D,[CI],0,3,0,0,0,JZ,0,D,[CI],0,3,0,0,0,TZ,0,BA,[],0,0,0,0,0,AHp,0,D,[],0,3,0,0,0,ACs,0,D,[],0,3,0,0,0,AGl,0,D,[],0,3,0,0,0,AHm,0,D,[CI],0,3,0,0,0,Y4,0,D,[],3,3,0,0,0,ADW,0,D,[CI],0,3,0,0,0,Uv,0,D,[],0,0,0,0,0,DH,"GlyphLayout",14,D,[Ea],0,3,0,E8,["D",BhE(U0),"l",
BhE(Zm)],HP,0,D,[],0,3,0,0,0,AFK,0,HP,[],0,3,0,0,0,FC,"BitmapFont",14,D,[DZ],0,3,0,0,0,Qs,0,D,[],0,3,0,BiA,0,BD,"Color",13,D,[],0,3,0,Fp,["cG",BhF(A0W),"cF",BhE(AP7),"l",BhE(AL3)]]);
BhD([J8,0,D,[DZ],1,3,0,0,0,Md,0,J8,[],0,3,0,0,["l",BhE(ARf)],CQ,"Array",8,D,[EK],0,3,0,0,["cF",BhE(AYM),"cG",BhF(APK),"l",BhE(AUQ)],J7,0,D,[EK],0,3,0,0,0,XO,0,J7,[],0,3,0,0,0,AH$,0,D,[EK],0,3,0,0,0,EI,0,D,[],4,3,0,0,["cG",BhF(ARk),"cF",BhE(A0A)],ABa,0,D,[],0,3,0,0,0,AES,0,D,[],0,3,0,0,0,AFL,0,D,[],0,3,0,0,0,AFg,0,D,[],0,3,0,0,0,PG,0,D,[],0,3,0,BiB,0,VX,0,D,[],0,3,0,0,0,AFq,0,D,[],0,3,0,0,0,AE_,0,D,[],0,3,0,0,0,YR,0,D,[],0,3,0,0,0,AAm,0,D,[],0,3,0,0,0,XF,0,D,[],0,3,0,0,0,AAQ,0,D,[],0,3,0,0,0,Ye,0,D,[],0,3,0,
0,0,ACv,0,D,[],0,3,0,0,0,ACQ,0,D,[],0,3,0,0,0,Hb,0,BW,[],12,3,0,Bbo,0,YX,0,D,[],0,3,0,0,0,Ul,0,D,[],3,3,0,0,0,Ep,0,D,[],0,3,0,0,0,V6,0,Ep,[],0,3,0,0,0,V5,0,Ep,[],0,3,0,0,0,Yp,0,Ep,[],0,3,0,0,0,ADg,0,Ep,[],0,3,0,0,0,ZL,0,Ep,[],0,3,0,0,0,LE,0,Ep,[],0,3,0,0,0,ADb,0,LE,[],0,3,0,0,0,I5,0,D,[],3,3,0,0,0,ADz,0,D,[DZ,I5],0,3,0,0,0,Gh,0,D,[],3,3,0,0,0,ZE,0,D,[Gh,I5],0,3,0,0,0,AAM,0,D,[Gh],0,3,0,0,0,WE,0,D,[],0,3,0,0,0,FK,0,D,[Gh],0,3,0,0,0,Zq,0,FK,[],0,3,0,0,0,Ic,0,FK,[I5,Gh],1,3,0,0,0,EB,0,Ic,[],1,3,0,BiC,0,AGi,0,D,
[],0,3,0,0,0,AHa,0,EB,[],4,3,0,0,0,AEO,0,EB,[],4,3,0,0,0,Rl,0,FK,[],0,3,0,0,0,M1,0,FK,[],0,3,0,0,0,AB2,0,M1,[],0,3,0,0,0,AC_,0,EB,[],4,3,0,0,0]);
BhD([HW,0,Ic,[],1,3,0,0,0,YH,0,HW,[],4,3,0,0,0,AEL,0,EB,[],4,3,0,0,0,AFi,0,EB,[],4,3,0,0,0,YG,0,HW,[],4,3,0,0,0,FW,0,BW,[],12,3,0,Ben,0,Hc,0,D,[DZ,Gh,I5],1,3,0,0,0,L6,0,Hc,[Gh],1,3,0,0,0,ABz,0,L6,[Gh],0,3,0,0,0,F0,0,BW,[],12,3,0,Ba$,0,DC,0,Hc,[],1,3,0,0,0,Je,0,DC,[],1,3,0,0,0,ACH,0,D,[],0,3,0,0,0,FL,0,DC,[],1,3,0,BiD,0,Fz,0,FL,[],1,3,0,0,0,GT,0,Fz,[],1,3,0,0,0,ADy,0,GT,[],0,3,0,0,0,I8,0,DC,[],1,3,0,0,0,ABm,0,I8,[],0,3,0,0,0,AG$,0,DC,[],0,3,0,0,0,GZ,0,DC,[],1,3,0,0,0,V0,0,GZ,[],0,3,0,0,0,H3,0,DC,[],1,3,0,0,0,ADt,
0,Fz,[],0,3,0,0,0,XV,0,Fz,[],0,3,0,0,0,Li,0,DC,[],1,3,0,0,0,AF6,0,Li,[],0,3,0,0,0,ACm,0,GZ,[],0,3,0,0,0,AER,0,GT,[],0,3,0,0,0,Zp,0,DC,[],0,3,0,0,0,AFm,0,GZ,[],0,3,0,0,0,AF9,0,DC,[],0,3,0,0,0,ZV,0,FL,[],0,3,0,0,0,AEd,0,D6,[],0,0,0,0,0,Wx,0,D6,[],0,0,0,0,0,WC,0,Fz,[],0,3,0,0,0,Zs,0,H3,[],0,3,0,0,0,AHV,0,Je,[],0,3,0,0,0,Y$,0,Je,[],0,3,0,0,0,AGr,0,H3,[],0,3,0,0,0,AE8,0,GT,[],0,3,0,0,0,AH7,0,I8,[],0,3,0,0,0,F1,0,Hc,[],1,3,0,0,0,YI,0,F1,[],0,3,0,0,0,G4,0,D,[],1,3,0,0,0,ZD,0,G4,[],0,3,0,0,0,AGJ,0,F1,[],0,3,0,0,0,AG9,
0,F1,[],0,3,0,0,0,AAB,0,G4,[],0,3,0,0,0,W_,0,F1,[],0,3,0,0,0]);
BhD([AAn,0,G4,[],0,3,0,0,0,MB,0,D,[],3,3,0,0,0,RJ,0,D,[],3,3,0,0,0,CN,0,D,[MB,RJ],0,3,0,0,["l",BhE(AQc)],ACU,0,D,[],4,0,0,0,0,ACB,0,D,[],4,3,0,0,0,Eb,0,D,[],0,3,0,0,["cW",BhE(ATA)],Da,0,Eb,[],0,3,0,0,0,B0,"RuntimeException",21,Da,[],0,3,0,0,0,AEK,"ClassCastException",21,B0,[],0,3,0,0,0,EU,"CharSequence",21,D,[],3,3,0,0,0,P,"String",21,D,[CI,DO,EU],0,3,0,U,["l",BhE(DJ),"cG",BhF(Gg),"cF",BhE(A53)],G2,0,Eb,[],0,3,0,0,0,Jl,0,G2,[],0,3,0,0,0,AD7,0,Jl,[],0,3,0,0,0,E3,0,D,[CI],1,3,0,0,0,FS,0,E3,[DO],0,3,0,0,["mE",
BhE(A2P),"mG",BhE(AI$),"l",BhE(AVv)],Bx,0,D,[CI,EU],0,0,0,0,["dk",BhF(R$),"l",BhE(Bi)],IZ,0,D,[],3,3,0,0,0,L,0,Bx,[IZ],0,3,0,0,["ii",BhI(A3D),"Jl",BhH(AMs),"l",BhE(Cx),"dk",BhF(APG),"dv",BhG(A4v),"k",BhG(DI)],Ja,0,Jl,[],0,3,0,0,0,AFX,0,Ja,[],0,3,0,0,0,ADM,0,Ja,[],0,3,0,0,0,XM,0,D,[],0,3,0,0,0,O0,0,D,[],3,3,0,0,0,M_,0,D,[O0,Ho],0,3,0,0,["cV",BhE(AEq)],Q9,0,D,[],3,3,0,0,0,Nt,0,D,[Q9],1,3,0,0,0,J$,0,Nt,[],0,3,0,0,0,Z6,0,D,[],4,3,0,0,0,Cg,0,Hn,[],1,3,0,0,["jY",BhF(AYr),"es",BhE(AP$),"ev",BhE(A5g),"en",BhE(A33),
"m4",BhG(A0B),"jJ",BhE(A7g),"jT",BhE(ALo),"ki",BhE(AJY),"ep",BhE(A4L),"jZ",BhG(AYE),"er",BhH(AOr)],N7,0,Cg,[],0,3,0,0,["kj",BhE(A0h),"em",BhE(A_b),"jY",BhF(A9z),"es",BhE(AYg)],Tt,0,Cg,[],0,3,0,0,["kj",BhE(ALb),"em",BhE(AQs),"jY",BhF(ATT),"es",BhE(ATF)],Vm,0,Cg,[],0,3,0,0,["kj",BhE(AW_),"em",BhE(AKE),"jY",BhF(AVg),"es",BhE(AIN)],RU,0,Cg,[],0,3,0,0,["kj",BhE(AVT),"em",BhE(A6A),"jY",BhF(A1v),"es",BhE(A4M),"ev",BhE(A4V),"ep",BhE(AQ7)],SO,0,Cg,[],0,3,0,0,["kj",BhE(ATB),"em",BhE(AV3),"jY",BhF(AIJ)],W6,0,Cg,[],0,3,
0,0,["kj",BhE(AZR),"em",BhE(A1D),"jY",BhF(ALu)],AAc,0,Cg,[],0,3,0,0,["kj",BhE(A92),"em",BhE(AXk),"jY",BhF(A0G)],YM,0,Cg,[],0,3,0,0,["kj",BhE(AWV),"em",BhE(A6C),"jY",BhF(AI4)],X7,0,Cg,[],0,3,0,0,["kj",BhE(A7j),"em",BhE(ATw),"jY",BhF(AJL)],AIo,0,Cg,[],0,3,0,0,["kj",BhE(AOy),"em",BhE(AOW),"jY",BhF(AMa),"es",BhE(AVK)],AIk,0,Cg,[],0,3,0,0,["kj",BhE(AQB),"jY",BhF(ANq),"em",BhE(A3K),"es",BhE(A7W),"ev",BhE(Y2),"en",BhE(A5k),"m4",BhG(AY6),"ep",BhE(A3L),"jZ",BhG(A9L),"er",BhH(Wt)],AFb,0,Cg,[],0,3,0,0,["kj",BhE(A3t),"em",
BhE(A8G),"jY",BhF(A$B)],AEW,0,Cg,[],0,3,0,0,["kj",BhE(AY9),"em",BhE(ANO),"jY",BhF(AOI)],AEg,0,Cg,[],0,3,0,0,["kj",BhE(AR6),"em",BhE(A62),"jY",BhF(A$a)],Vr,0,Cg,[],0,3,0,0,["kj",BhE(AZP),"em",BhE(AJ2),"jY",BhF(AJk),"jJ",BhE(AZq),"jT",BhE(A24),"ki",BhE(AKF),"ep",BhE(A6I)],Yw,0,Cg,[],0,3,0,0,["kj",BhE(AL4),"em",BhE(AWw),"jY",BhF(AT1),"jJ",BhE(A6U),"jT",BhE(A0v),"ki",BhE(A6w),"ep",BhE(A3h)],ABS,0,Cg,[],0,3,0,0,["kj",BhE(AUT),"em",BhE(A8B)],ADf,0,Cg,[],0,3,0,0,["kj",BhE(A5N),"em",BhE(AUX),"jY",BhF(A7x),"jJ",BhE(ARC),
"jT",BhE(A8O),"ki",BhE(A49),"ep",BhE(AZa)],FN,0,BW,[],12,3,0,Kn,0]);
BhD([Og,0,D,[],3,3,0,0,0,C4,0,D,[],3,3,0,0,0,Tg,0,D,[C4],3,3,0,0,0,LR,0,D,[Og,Tg],0,3,0,Jv,["OL",BhF(A6q)],Zr,0,D,[],0,3,0,0,0,Pw,0,D,[],0,3,0,M2,0,KX,0,E3,[DO],0,3,0,0,0,KQ,0,D,[],0,3,0,0,0,AEh,0,D,[],4,3,0,0,0,DY,"GlyphLayout$GlyphRun",14,D,[Ea],0,3,0,0,["D",BhE(Ym),"l",BhE(Ot)],Et,0,D,[],0,3,0,0,["cF",BhE(AQa),"cG",BhF(A9y),"l",BhE(A30)],LL,0,D,[],3,3,0,0,0,Lj,0,D,[LL],1,3,0,0,0,Gv,0,D,[],3,3,0,0,0,JA,0,Lj,[Gv,CI],0,3,0,0,0,Ro,0,D,[],3,3,0,0,0,TM,0,D,[Ro],0,3,0,0,0,Eu,0,D,[DO],0,3,0,0,0,AC$,0,D,[],0,3,0,
0,0,JK,0,D,[],4,3,0,0,0,RE,0,D,[],3,3,0,0,0,Oz,0,D,[RE],0,3,0,0,0,O2,0,D,[],0,3,0,0,0,M5,0,D,[],0,3,0,0,0,Qo,0,D,[],3,3,0,0,0,MG,0,D,[Qo],0,3,0,JL,0,ABP,0,D,[],0,3,0,0,0,Ew,0,D,[],0,3,0,0,["iV",BhF(AQR)],T0,0,D,[],3,3,0,0,0,FQ,0,D,[C4],3,3,0,0,0,AFv,0,D,[T0,FQ],0,3,0,0,["rH",BhF(AJv)],P7,0,D,[],3,3,0,0,0,QL,0,D,[P7],0,3,0,0,0,Ui,0,D,[Ul],0,3,0,0,0,Ud,0,D,[],3,3,0,0,0,Pz,0,D,[Ud],0,3,0,0,0,So,0,D,[],3,3,0,0,0,AGe,0,D,[So],0,3,0,0,0,Fi,0,D,[],0,3,0,0,0,UA,0,D,[],3,3,0,0,0,Uj,0,D,[UA],3,3,0,0,0,ADB,0,D,[Uj],0,
3,0,0,0,VH,0,D,[FQ],0,0,0,0,["rH",BhF(A67)],VI,0,D,[FQ],0,0,0,0,["rH",BhF(AVR)],V,"IllegalArgumentException",21,B0,[],0,3,0,0,0,AHt,0,D,[],4,3,0,0,0,ACn,0,D,[EK],0,3,0,0,0,Tr,0,E3,[DO],0,3,0,0,0,AEX,0,D,[C4],1,3,0,0,0,Nn,0,D,[],3,3,0,0,0]);
BhD([Jk,"TeaGL20",5,D,[Nn],0,3,0,0,["ls",BhG(ANZ),"lI",BhG(AVJ),"cr",BhG(AZH),"jd",BhI(A1L),"fV",BhI(Ph),"fW",BhI(SY),"j2",BhF(A8J),"j1",BhI(ALm),"lq",BhF(AOH),"lm",BhE(AWe),"lo",BhF(ASn),"i5",BhF(AUj),"i_",BhF(ASc),"lJ",BhF(A5v),"k8",BhH(ALR),"k9",BhI(APd),"lb",BhI(AQ4),"jc",BhF(AVu),"lx",BhF(A81),"my",BhF(AIG),"fX",BhI(R0),"fY",BhI(Tp),"lz",BhG(A02),"b9",BhG(LN),"i4",BhF(AV_),"fZ",BhH(TP),"lr",BhF(APD),"f0",BhH(OZ),"eZ",BhF(ANk),"lu",BhG(A1u),"lt",BhF(AYF),"ch",BhG(ALQ),"lp",BhG(AW9),"cn",function(b,c,d,e,
f,g,h,i,j){T3(this,b,c,d,e,f,g,h,i,j);},"cx",BhH(AQo),"b4",BhH(ART),"jk",BhG(ASb),"i8",BhF(AJ$),"lw",function(b,c,d,e,f,g){A3_(this,b,c,d,e,f,g);},"dX",BhI(AXt)],Tz,0,D,[Nn],3,3,0,0,0,NX,"TeaGL30",5,Jk,[Tz],0,3,0,0,["lN",BhF(A1S),"k$",BhI(A5h),"la",function(b,c,d,e,f){A$U(this,b,c,d,e,f);},"lL",BhG(A5S),"b9",BhG(A3o)],R7,"TeaGL30Debug",5,NX,[],0,3,0,0,["lN",BhF(A08),"k$",BhI(AZc),"la",function(b,c,d,e,f){A9X(this,b,c,d,e,f);},"lL",BhG(AJ3),"cr",BhG(AKx),"j2",BhF(AUm),"j1",BhI(AQt),"i5",BhF(AYw),"i_",BhF(A85),
"k8",BhH(A0M),"k9",BhI(A6x),"jc",BhF(A7I),"eZ",BhF(AW1),"ch",BhG(AXQ),"cn",function(b,c,d,e,f,g,h,i,j){A4R(this,b,c,d,e,f,g,h,i,j);},"cx",BhH(A0C),"dX",BhI(ANB),"ls",BhG(A3P),"lI",BhG(AVh),"jd",BhI(AMR),"fV",BhI(AQH),"fW",BhI(AVe),"lq",BhF(ARv),"lm",BhE(A$s),"lo",BhF(A6S),"lJ",BhF(AV8),"lb",BhI(AYP),"lx",BhF(A6V),"my",BhF(A8N),"fX",BhI(AOz),"fY",BhI(AUk),"lz",BhG(A48),"b9",BhG(AM0),"fZ",BhH(ALs),"i4",BhF(AJf),"f0",BhH(A$r),"lr",BhF(AYh),"lu",BhG(AJg),"lt",BhF(A9N),"lp",BhG(AXO),"b4",BhH(AJ8),"jk",BhG(AKM),"i8",
BhF(A$Z),"lw",function(b,c,d,e,f,g){A7p(this,b,c,d,e,f,g);}],Pe,0,D,[],0,3,0,0,0,D4,0,BW,[],12,3,0,RL,0,Up,0,D,[C4],3,3,0,0,0,Ue,0,D,[Up],0,0,0,0,["QE",BhE(A0F)],U$,"TeaGL20Debug",5,Jk,[],0,3,0,0,["cr",BhG(A9_),"j2",BhF(AZU),"j1",BhI(AL$),"i5",BhF(AQG),"i_",BhF(A$E),"k8",BhH(AOG),"k9",BhI(AV0),"jc",BhF(AKi),"eZ",BhF(APy),"ch",BhG(ARA),"cn",function(b,c,d,e,f,g,h,i,j){AM2(this,b,c,d,e,f,g,h,i,j);},"cx",BhH(A0S),"dX",BhI(A$n),"ls",BhG(AJb),"lI",BhG(AIz),"jd",BhI(AIw),"fV",BhI(APb),"fW",BhI(A1U),"lq",BhF(AWu),
"lm",BhE(ARQ),"lo",BhF(AWj),"lJ",BhF(ARO),"lb",BhI(A14),"lx",BhF(AWn),"my",BhF(A5e),"fX",BhI(A3m),"fY",BhI(AKA),"lz",BhG(A16),"b9",BhG(AXx),"fZ",BhH(AM6),"i4",BhF(A1k),"f0",BhH(AJm),"lr",BhF(A7t),"lu",BhG(A8T),"lt",BhF(AP3),"lp",BhG(AVW),"b4",BhH(A8P),"jk",BhG(AWc),"i8",BhF(AXY),"lw",function(b,c,d,e,f,g){ALf(this,b,c,d,e,f,g);}],ZQ,0,D,[EK],0,3,0,0,0,Yr,0,D,[],0,3,0,0,0,QS,0,D,[C4],3,3,0,0,0,TE,0,D,[QS],0,0,0,0,["SG",BhE(AXJ),"NA",BhE(ALY),"ZT",BhE(AXs)],Vg,0,D,[],3,3,0,0,0,Vi,0,D,[Vg],0,3,0,0,0,Oc,0,Ew,[],
0,0,0,0,0,QQ,"CloneNotSupportedException",21,Da,[],0,3,0,0,0,HX,0,D6,[],0,3,0,0,0,O,"IndexOutOfBoundsException",21,B0,[],0,3,0,0,0,Gs,0,D,[C4],3,3,0,0,0,SJ,0,D,[Gs],3,3,0,0,0,PJ,0,D,[Gs],3,3,0,0,0,Td,0,D,[Gs],3,3,0,0,0,Qk,0,D,[Gs],3,3,0,0,0,Vd,0,D,[Gs],3,3,0,0,0,Ur,0,D,[Gs,SJ,PJ,Td,Qk,Vd],3,3,0,0,0,OQ,0,D,[],3,3,0,0,0,Ll,0,D,[C4],3,3,0,0,0,V_,0,D,[C4,Ur,OQ,Ll],1,3,0,0,["IO",BhF(AR4),"L7",BhG(A8t),"Rn",BhG(A72),"OI",BhH(ARX),"M7",BhF(AVq),"U4",BhE(ALi),"Tp",BhH(AIV)],M$,0,D,[],1,3,0,0,0,Iw,0,M$,[LL,Gv,CI],0,
3,0,0,0,L4,0,Iw,[],0,3,0,0,0,AD2,0,D,[],0,3,0,0,0,E_,0,BW,[],12,3,0,Hf,0,En,0,D,[C4],1,3,0,0,0,ADd,0,En,[],1,3,0,0,0,ACY,0,En,[],1,3,0,0,0,AET,0,En,[],1,3,0,0,0,AFI,0,En,[],1,3,0,0,0,XT,0,En,[],1,3,0,0,0,Pq,0,D,[FQ],0,0,0,0,["rH",BhF(A3d)],Pr,0,D,[FQ],0,0,0,0,["rH",BhF(A$h)],Pn,0,D,[FQ],0,0,0,0,["rH",BhF(ASB)],PZ,0,D6,[],0,3,0,0,0,UI,0,D,[C4],3,3,0,0,0,RX,0,D,[UI],0,0,0,0,["Ta",BhE(A0Y)],WN,0,En,[],1,3,0,0,0,Tb,0,D,[CI],4,3,0,0,0,ACu,0,D,[],4,3,0,0,0,Eo,"ReflectionException",9,Da,[],0,3,0,0,0]);
BhD([Ev,0,D,[],4,3,0,BR,0,M6,0,D,[],3,3,0,0,0,K9,0,D,[M6],0,0,0,0,0,JQ,0,D,[],3,3,0,0,0,K8,0,D,[JQ],0,0,0,0,0,Mi,0,D,[],3,3,0,0,0,AFe,0,D,[Mi],4,3,0,0,0,CV,"NumberFormatException",21,V,[],0,3,0,0,0,OR,0,D,[],4,3,0,0,0,Lf,0,B0,[],0,3,0,0,0,FX,0,Da,[],0,3,0,0,0,IX,"NoSuchMethodException",21,FX,[],0,3,0,0,0,Dv,"NullPointerException",21,B0,[],0,3,0,0,0,CL,0,D,[],1,0,0,0,["hB",BhH(AMc),"hT",BhI(ANS),"g0",BhE(AZo),"l",BhE(ATl),"gr",BhF(Mj),"gY",BhF(A9d),"hF",BhE(A$b),"gn",BhE(K7)],AA1,0,D,[C4],1,3,0,0,0,Xo,0,D,[C4],
1,3,0,0,0,ABp,0,D,[C4],1,3,0,0,0,MO,0,D,[C4],3,3,0,0,0,OW,0,D,[MO],0,3,0,0,["IU",BhF(ALc)],AD4,0,D,[C4],1,3,0,0,0,OX,0,D,[MO],0,3,0,0,["IU",BhF(AXv)],RF,0,D,[],3,3,0,0,0,Id,0,D,[RF,Gv],0,0,0,0,0,Kj,0,Id,[],0,0,0,0,0,Ec,0,CL,[],0,0,0,Gw,["hE",BhH(AJ7),"eh",BhE(AOk),"h$",BhF(AKy)],JG,0,D,[],0,0,0,0,0,D$,"PatternSyntaxException",17,V,[],0,3,0,0,["cW",BhE(A97)],MJ,0,D,[EK],3,3,0,0,0,Nm,0,D,[MJ],1,3,0,0,0,Tq,0,D,[MJ],3,3,0,0,0,RR,0,D,[Tq],3,3,0,0,0,IJ,0,Nm,[RR],1,3,0,0,0,LX,0,D,[],3,3,0,0,0,Kd,0,IJ,[Gv,CI,LX],0,
3,0,0,0,PO,0,Ec,[],0,0,0,0,["hE",BhH(AXW),"eh",BhE(A0k),"h$",BhF(A7V)],Vj,0,Ec,[],0,0,0,0,["hE",BhH(AZ2),"eh",BhE(A3f)],Pa,0,Ec,[],0,0,0,0,["hE",BhH(AKI),"eh",BhE(A8_)],P_,0,Ec,[],0,0,0,0,["hE",BhH(AX7),"eh",BhE(ATY),"h$",BhF(A6r)],Ik,0,Ec,[],0,0,0,0,["hE",BhH(AVf),"eh",BhE(AZz)],C9,0,CL,[],1,0,0,0,["hE",BhH(A$J),"hQ",BhE(A8L),"h$",BhF(AO2)],QX,0,C9,[],0,0,0,0,["hR",BhG(A8e),"hB",BhH(A1j),"hT",BhI(AZT),"eh",BhE(AOl),"h$",BhF(AX2)],C2,0,CL,[],0,0,0,0,["hE",BhH(ANU),"gr",BhF(ASi),"eh",BhE(APa),"gY",BhF(A4e),"h$",
BhF(ASY),"gn",BhE(ALn)],NW,0,C2,[],0,0,0,0,["hE",BhH(AR0),"eh",BhE(AQk),"h$",BhF(A7v)],F6,0,NW,[],0,0,0,0,["hE",BhH(A0H),"gr",BhF(A7c),"eh",BhE(AJr)],ABG,0,F6,[],0,0,0,0,["hE",BhH(ASd),"h$",BhF(AU6),"eh",BhE(A99)],AHk,0,F6,[],0,0,0,0,["hE",BhH(AKs),"h$",BhF(A8Q),"eh",BhE(ANL)],AEe,0,F6,[],0,0,0,0,["hE",BhH(ALj),"h$",BhF(A$_),"eh",BhE(ARN)],Zd,0,F6,[],0,0,0,0,["hE",BhH(AXo),"h$",BhF(A7K),"eh",BhE(AKJ)],I3,0,C2,[],0,0,0,0,["hE",BhH(AI7),"hB",BhH(AQw),"hT",BhI(A73),"gY",BhF(A35),"hF",BhE(A6p),"gn",BhE(AVX)],AFE,
0,D,[],4,3,0,0,0]);
BhD([J0,"ArrayStoreException",21,B0,[],0,3,0,0,0,Io,0,D,[],1,0,0,0,0,BF,0,Io,[],1,0,0,BO,["h5",BhE(AY4),"hW",BhE(AYf),"ib",BhE(A8F),"hq",BhE(A98)],Df,0,BF,[],0,0,0,0,["h7",BhF(ALA),"h5",BhE(AWI),"hW",BhE(A0_),"ib",BhE(AUS),"l",BhE(A5E),"hq",BhE(ANb)],Mz,"MissingResourceException",16,B0,[],0,3,0,0,0,FG,0,CL,[],1,0,0,0,["gY",BhF(ATI),"h$",BhF(A9s),"gn",BhE(AQZ)],EC,0,FG,[],0,0,0,0,["hE",BhH(AXq),"eh",BhE(AZK)],Hg,0,EC,[],0,0,0,0,["hE",BhH(AYH),"eh",BhE(AY8)],EF,0,FG,[],0,0,0,0,["hE",BhH(AXI),"eh",BhE(A2W)],Hd,
0,EC,[],0,0,0,0,["hE",BhH(A4A),"gr",BhF(AWQ)],AAz,0,EC,[],0,0,0,0,["hE",BhH(A$D),"hB",BhH(ARj)],BN,0,D,[],1,0,0,0,0,RT,0,Io,[Gv],0,0,0,0,["l",BhE(TW)],Sc,0,CL,[],0,0,0,0,["hE",BhH(APs),"eh",BhE(A6i),"h$",BhF(A6o)],BG,0,D,[Gv,CI],0,3,0,0,0,N_,0,C2,[],0,0,0,0,["eh",BhE(A6v)],H8,0,C2,[],0,0,0,0,["hE",BhH(AJ4),"gr",BhF(A6c),"eh",BhE(A6P),"h$",BhF(AKS),"gY",BhF(AKu)],E6,0,C2,[],0,0,0,0,["hE",BhH(A06),"eh",BhE(A93),"h7",BhF(ANo),"gY",BhF(AJU),"gr",BhF(A8z),"h$",BhF(AM3)],RQ,0,E6,[],0,0,0,0,["h7",BhF(AO3),"eh",BhE(AV7)],OP,
0,C9,[],0,0,0,0,["hR",BhG(A3C),"eh",BhE(AZf)],FB,0,C9,[],0,0,0,0,["hR",BhG(AWY),"eh",BhE(APB),"gY",BhF(ASj)],Kf,0,C2,[],0,0,0,0,["gr",BhF(AQE),"eh",BhE(ATu),"hE",BhH(AII),"gY",BhF(AZk),"h$",BhF(AUY)],FI,0,C9,[],0,0,0,0,["hQ",BhE(A3j),"hR",BhG(AN$),"hB",BhH(AMM),"hT",BhI(APi),"eh",BhE(AU$),"gY",BhF(AUP)],Rd,0,C9,[],0,0,0,0,["hR",BhG(AW3),"eh",BhE(A6b)],N9,0,C9,[],0,0,0,0,["hR",BhG(AI0),"eh",BhE(AOt)],Hj,0,C2,[],0,0,0,0,["gr",BhF(A$e),"hE",BhH(ARZ),"eh",BhE(A55),"gY",BhF(APv),"h$",BhF(A7f)],AA2,0,Hj,[],0,0,0,
0,0,AF5,0,Hj,[],0,0,0,0,0,RD,0,EF,[],0,0,0,0,["hE",BhH(AZ$)],SS,0,EF,[],0,0,0,0,["hE",BhH(A5f)],Jg,0,EF,[],0,0,0,0,["hE",BhH(A8s),"gr",BhF(A9C)],O3,0,Jg,[],0,0,0,0,["hE",BhH(APe),"gr",BhF(A5O)],Hy,0,EF,[],0,0,0,0,["hE",BhH(A$6),"eh",BhE(AVm)],Ol,0,Hy,[],0,0,0,0,["hE",BhH(AOE)],PM,0,EF,[],0,0,0,0,["hE",BhH(AV$)],ADP,0,Jg,[],0,0,0,0,["hE",BhH(AKW)],QG,0,Hy,[],0,0,0,0,["hE",BhH(AX9)],Yb,0,FG,[],0,0,0,0,["hE",BhH(A$S),"hB",BhH(AUd),"eh",BhE(A6T)],ACy,0,FG,[],0,0,0,0,["hE",BhH(ASl),"hB",BhH(AIO),"eh",BhE(A7S)],G6,
0,D,[],1,0,0,0,0,AIs,0,EC,[],0,0,0,0,["hE",BhH(AJD)],AAx,0,Hd,[],0,0,0,0,["hE",BhH(AQ$)],ACN,0,Hg,[],0,0,0,0,["hE",BhH(A79)],ADK,0,EC,[],0,0,0,0,["hE",BhH(ASe)],AGc,0,Hd,[],0,0,0,0,["hE",BhH(AJN)],X2,0,Hg,[],0,0,0,0,["hE",BhH(A8h)],PE,0,CL,[],4,0,0,0,["hE",BhH(A3$),"h$",BhF(A3b),"eh",BhE(ARa)],W3,0,CL,[],0,0,0,0,["hE",BhH(AY0),"h$",BhF(AZg),"eh",BhE(A$3)],ACx,0,CL,[],0,0,0,0,["hE",BhH(AO6),"h$",BhF(AWG),"eh",BhE(AYK)],Q_,0,CL,[],4,0,0,0,["hE",BhH(A61),"h$",BhF(AZZ),"eh",BhE(A4K)]]);
BhD([AHA,0,CL,[],0,0,0,0,["hE",BhH(A5_),"h$",BhF(AW2),"eh",BhE(ANT)],AB7,0,CL,[],0,0,0,0,["hE",BhH(AZL),"h$",BhF(ANG),"eh",BhE(AYu)],AAF,0,C2,[],0,0,0,0,["hE",BhH(AWb),"eh",BhE(AMp),"gr",BhF(AZm),"g0",BhE(A5Y),"h$",BhF(AZl)],WD,0,C2,[],4,0,0,0,["hE",BhH(A56),"eh",BhE(AZ8),"gr",BhF(A7R),"g0",BhE(AIu),"h$",BhF(AWt)],AHv,0,CL,[],4,0,0,0,["hE",BhH(APA),"h$",BhF(A1I),"eh",BhE(AQb)],AFs,0,CL,[],0,0,0,0,["hE",BhH(ARV),"h$",BhF(A1x),"eh",BhE(AJn)],ABD,0,CL,[],0,0,0,0,["hE",BhH(A21),"h$",BhF(ALI),"eh",BhE(ANI)],Jc,0,
C2,[],0,0,0,0,["hE",BhH(AJI),"gr",BhF(A6$),"eh",BhE(AX1),"h$",BhF(ATh)],AHx,0,Jc,[],0,0,0,0,["hE",BhH(ALO),"hB",BhH(AU5),"hT",BhI(AJo),"gY",BhF(A45),"eh",BhE(A9A)],AD8,0,Jc,[],0,0,0,0,["hE",BhH(AQn),"eh",BhE(AZh)],Lh,0,Bx,[IZ],0,3,0,0,["ii",BhI(ANc),"Jl",BhH(AY7),"dk",BhF(AZy),"dv",BhG(A8K),"k",BhG(AXA)],AEM,0,C9,[],0,0,0,0,["hR",BhG(AMb),"hB",BhH(AYV),"hT",BhI(A1N),"eh",BhE(AR8),"gY",BhF(AOh)],N6,0,C9,[],0,0,0,0,["hR",BhG(AQy),"eh",BhE(AOu)],VY,0,C9,[],0,0,0,0,["hR",BhG(A7$),"eh",BhE(A87)],AIr,0,D,[],4,3,0,
0,0,Iu,0,D,[],4,0,0,ATr,0,RI,0,C9,[],0,0,0,0,["hR",BhG(ATQ),"eh",BhE(A$2)],KG,0,C2,[],0,0,0,0,["gr",BhF(A6j),"hE",BhH(Sy),"hB",BhH(AOf),"hT",BhI(A0K),"eh",BhE(AUw),"gY",BhF(AJi),"h$",BhF(AUG)],Nu,0,C2,[],0,0,0,0,["gr",BhF(AZw),"hE",BhH(N$),"hB",BhH(A6D),"hT",BhI(ATM),"eh",BhE(A$o),"gY",BhF(AMe),"h$",BhF(A6Q)],Ga,0,C9,[],0,0,0,0,["hR",BhG(A7w),"hB",BhH(A5G),"hT",BhI(AK3),"eh",BhE(A9D),"gY",BhF(A7l)],Uy,0,G6,[],0,0,0,0,["ik",BhF(ALa),"im",BhG(ATd)],Uz,0,G6,[],0,0,0,0,["ik",BhF(A8k),"im",BhG(AVN)],ZT,0,D,[],0,
0,0,0,0,AC9,0,D,[],4,0,0,0,0,WA,0,D,[],4,3,0,0,0,D_,"NegativeArraySizeException",21,B0,[],0,3,0,0,0,V4,0,D,[],0,0,0,0,0,L9,0,D,[],0,3,0,0,0,AD0,0,D,[],4,3,0,0,0,No,0,BN,[],0,0,0,0,["hY",BhE(A2U)],MQ,0,BN,[],0,0,0,0,["hY",BhE(A4u)],ZP,0,BN,[],0,0,0,0,["hY",BhE(A7T)],AAa,0,BN,[],0,0,0,0,["hY",BhE(AUH)],AAb,0,BN,[],0,0,0,0,["hY",BhE(AMO)],Nl,0,BN,[],0,0,0,0,["hY",BhE(ALy)],L1,0,Nl,[],0,0,0,0,["hY",BhE(ANp)],ABo,0,BN,[],0,0,0,0,["hY",BhE(A2n)],N3,0,L1,[],0,0,0,0,["hY",BhE(AW6)],AEG,0,N3,[],0,0,0,0,["hY",BhE(AQ1)],YA,
0,BN,[],0,0,0,0,["hY",BhE(A0s)],WX,0,BN,[],0,0,0,0,["hY",BhE(AQV)],ACW,0,BN,[],0,0,0,0,["hY",BhE(AVU)],AGX,0,BN,[],0,0,0,0,["hY",BhE(A5T)],ABu,0,BN,[],0,0,0,0,["hY",BhE(AXd)],AGq,0,BN,[],0,0,0,0,["hY",BhE(AOM)],ZB,0,BN,[],0,0,0,0,["hY",BhE(ATk)],AAs,0,BN,[],0,0,0,0,["hY",BhE(A0q)],Wi,0,BN,[],0,0,0,0,["hY",BhE(AMt)],ABV,0,BN,[],0,0,0,0,["hY",BhE(A90)],AGz,0,BN,[],0,0,0,0,["hY",BhE(AW4)]]);
BhD([Z3,0,BN,[],0,0,0,0,["hY",BhE(APE)],ADr,0,BN,[],0,0,0,0,["hY",BhE(AMB)],YF,0,BN,[],0,0,0,0,["hY",BhE(A1R)],AA3,0,BN,[],0,0,0,0,["hY",BhE(A3Q)],AGK,0,BN,[],0,0,0,0,["hY",BhE(AU1)],XN,0,BN,[],0,0,0,0,["hY",BhE(ASO)],Xb,0,BN,[],0,0,0,0,["hY",BhE(ARw)],ABs,0,BN,[],0,0,0,0,["hY",BhE(A7P)],Lb,0,BN,[],0,0,0,0,["hY",BhE(AP2)],AHr,0,Lb,[],0,0,0,0,["hY",BhE(ARe)],AEQ,0,No,[],0,0,0,0,["hY",BhE(AYR)],W9,0,MQ,[],0,0,0,0,["hY",BhE(AN7)],AC1,0,BN,[],0,0,0,0,["hY",BhE(AP5)],ADk,0,BN,[],0,0,0,0,["hY",BhE(AVy)],AEr,0,BN,
[],0,0,0,0,["hY",BhE(A1t)],AEH,0,BN,[],0,0,0,0,["hY",BhE(AIC)],UG,0,D,[],0,3,0,0,0,Kb,0,D,[],0,3,0,0,0,ACk,0,D,[],0,3,0,0,0,Z8,0,D,[],4,3,0,0,0,Po,0,Ew,[],0,0,0,0,["iV",BhF(AUf),"m5",BhF(AMG),"eV",BhG(ARn)],CM,0,BW,[],9,3,0,AZI,0,Gt,0,Id,[],0,0,0,0,0,AId,0,D,[],3,3,0,0,0,Qv,0,D,[C4],3,3,0,0,0,ADi,0,D,[Qv,C4],1,3,0,0,["SH",BhG(A9T),"TR",BhF(ARJ),"Lt",BhG(AZx),"WQ",BhH(A3q),"YU",BhH(A8p)],Qn,0,D,[FQ],0,0,0,0,["rH",BhF(A4H)],Eq,0,BW,[],12,3,0,F$,0,Na,0,D,[],0,3,0,0,0,L0,0,D,[MB],0,3,0,0,0,PL,0,D,[],3,3,0,0,0,I4,
0,L0,[PL],0,3,0,0,["l",BhE(AJ5)],Ba,"StringIndexOutOfBoundsException",21,O,[],0,3,0,0,0,Q0,0,BF,[],0,0,0,0,["h7",BhF(AMW)],QZ,0,BF,[],0,0,0,0,["h7",BhF(AXH)],OL,0,BF,[],0,0,0,0,["h7",BhF(APT),"l",BhE(A1Z)],Sh,0,BF,[],0,0,0,0,["h7",BhF(A7z)],Sf,0,BF,[],0,0,0,0,["h7",BhF(ATP)],Sg,0,BF,[],0,0,0,0,["h7",BhF(A4x)],Sk,0,BF,[],0,0,0,0,["h7",BhF(A0R)],Sl,0,BF,[],0,0,0,0,["h7",BhF(AIv)],Si,0,BF,[],0,0,0,0,["h7",BhF(ANX)],Sj,0,BF,[],0,0,0,0,["h7",BhF(AQC)],Sm,0,BF,[],0,0,0,0,["h7",BhF(AU8)],Sn,0,BF,[],0,0,0,0,["h7",BhF(A0e)],OK,
0,BF,[],0,0,0,0,["h7",BhF(A_d)],OY,0,BF,[],0,0,0,0,["h7",BhF(AN2)],OI,0,BF,[],0,0,0,0,["h7",BhF(ALU)],OJ,0,BF,[],0,0,0,0,["h7",BhF(A1G)],OO,0,BF,[],0,0,0,0,["h7",BhF(AO8)]]);
BhD([OH,0,BF,[],0,0,0,0,["h7",BhF(A80)],OM,0,BF,[],0,0,0,0,["h7",BhF(AY_)],ON,0,BF,[],0,0,0,0,["h7",BhF(ASE)],Js,0,D,[],0,0,0,0,0,E7,0,D,[Ho],0,3,0,Dq,0,Cb,"IllegalStateException",21,B0,[],0,3,0,0,0,Ko,"IllegalMonitorStateException",21,B0,[],0,3,0,0,0,AGE,0,D,[Mi],0,0,0,0,0,AGH,0,D,[],0,3,0,0,0,ADF,0,D,[],4,3,0,0,0,ABX,0,D,[C4],1,3,0,0,0,Hh,0,D,[],3,3,0,0,0,Rv,0,D,[Hh],0,3,0,0,["cV",BhE(A9j)],UR,0,CM,[],12,0,0,0,0,US,0,CM,[],12,0,0,0,0,UV,0,CM,[],12,0,0,0,0,UW,0,CM,[],12,0,0,0,0,UT,0,CM,[],12,0,0,0,0,UU,0,CM,
[],12,0,0,0,0,UO,0,CM,[],12,0,0,0,0,UP,0,CM,[],12,0,0,0,0,UN,0,CM,[],12,0,0,0,0,Oo,0,D,[],3,3,0,0,0,PW,0,D,[Oo],0,3,0,0,0,Xx,0,D,[C4],4,3,0,0,0,PK,0,D,[],3,3,0,0,0,Ta,0,D,[PK],0,0,0,0,["e",BhF(A3w),"iP",BhF(AV6)],Qc,0,D,[Hh],0,3,0,0,0,Ok,0,I3,[],0,0,0,0,["hB",BhH(ANh),"hT",BhI(A$5),"hF",BhE(ALD)],ACa,0,D,[JQ],0,0,0,0,0,HU,0,E7,[],0,0,0,0,["cV",BhE(ASg)],Oe,0,D,[],32,0,0,BbI,0,AHs,0,D,[C4,Gs],1,3,0,0,["Xv",BhG(A4a),"Zn",BhG(AQU),"L9",BhH(AIU),"UL",BhF(AIZ),"Pw",BhH(A15)],IE,0,D,[C4],3,3,0,0,0,Oh,0,D,[IE],0,0,
0,0,["rH",BhF(Ya)],Qe,0,D,[],0,3,0,0,0,IU,0,D,[JQ,EK],0,3,0,0,0,Sb,0,D,[EK],0,3,0,0,0,J_,0,D,[],4,3,0,0,0,Of,0,D,[Ho],0,0,0,0,["cV",BhE(AIP)],Rx,0,D,[],3,3,0,0,0,JF,0,D,[Rx],3,3,0,0,0,Uq,0,D,[],3,3,0,0,0,Ia,0,D,[JF,Uq],1,3,0,0,0,ME,0,Ia,[],0,3,0,0,0,Do,0,ME,[],0,3,0,0,0,IS,0,Ia,[],1,3,0,0,0,JJ,0,IS,[],0,3,0,0,["iT",BhH(APc)],Jn,0,D,[IE],0,0,0,0,["rH",BhF(ARM)],Fo,0,D,[DO],1,3,0,0,0]);
BhD([Mr,0,Fo,[],0,3,0,Dn,["c6",BhE(AAZ)],Ir,"IllegalCharsetNameException",19,V,[],0,3,0,0,0,SD,0,D,[DZ],3,3,0,0,0,Mf,0,D,[SD],0,3,0,AAf,0,Lz,0,D,[],3,3,0,0,0,BL,0,D,[Lz],0,3,0,0,0,Rb,0,BL,[],0,3,0,0,["d1",BhE(A8b),"d_",BhF(A7N),"dY",BhG(ALz)],R1,0,BL,[],0,3,0,0,["d1",BhE(AMV),"d_",BhF(A$g),"dY",BhG(AKg)],Ti,0,BL,[],0,3,0,0,["d1",BhE(AS6),"d_",BhF(AUh),"dY",BhG(A5J)],Pl,0,BL,[],0,3,0,0,["d1",BhE(AIF),"d_",BhF(A6W),"dY",BhG(A1X)],ZF,0,BL,[],0,3,0,0,["d1",BhE(AJw),"d_",BhF(AOb),"dY",BhG(ASz)],Xp,0,BL,[],0,3,0,
0,["d1",BhE(A0j),"d_",BhF(A9O),"dY",BhG(A40)],ABN,0,BL,[],0,3,0,0,["d1",BhE(ALk),"d_",BhF(AMu),"dY",BhG(A8R)],AHf,0,BL,[],0,3,0,0,["d1",BhE(A7m),"d_",BhF(A9Q),"dY",BhG(A_c)],VU,0,BL,[],0,3,0,0,["d1",BhE(A$7),"d_",BhF(AM5),"dY",BhG(AMg)],AAl,0,BL,[],0,3,0,0,["d1",BhE(ATn),"d_",BhF(A2q),"dY",BhG(AUe)],YP,0,BL,[],0,3,0,0,["d1",BhE(AOX),"d_",BhF(A38),"dY",BhG(A6R)],Xl,0,BL,[],0,3,0,0,["d1",BhE(A3v),"d_",BhF(A5I),"dY",BhG(AS$)],ACG,0,BL,[],0,3,0,0,["d1",BhE(A9E),"d_",BhF(A7O),"dY",BhG(ASU)],Vt,0,BL,[],0,3,0,0,["d1",
BhE(A2c),"d_",BhF(AUR),"dY",BhG(AY$)],ACE,0,BL,[],0,3,0,0,["d1",BhE(APu),"d_",BhF(ARG),"dY",BhG(AYS)],AH6,0,BL,[],0,3,0,0,["d1",BhE(A4k),"d_",BhF(AXR),"dY",BhG(AIy)],XP,0,BL,[],0,3,0,0,["d1",BhE(AUZ),"d_",BhF(AJX),"dY",BhG(A9n)],AGd,0,BL,[],0,3,0,0,["d1",BhE(AWm),"d_",BhF(AOB),"dY",BhG(A7G)],AFc,0,BL,[],0,3,0,0,["d1",BhE(AUp),"d_",BhF(A6f),"dY",BhG(A0i)],ACe,0,BL,[],0,3,0,0,["d1",BhE(A5m),"d_",BhF(A3U),"dY",BhG(AST)],Vv,0,BL,[],0,3,0,0,["d1",BhE(A22),"d_",BhF(A0T),"dY",BhG(AUn)],AD3,0,BL,[],0,3,0,0,["d1",BhE(A34),
"d_",BhF(ARg),"dY",BhG(A0I)],AGo,0,BL,[],0,3,0,0,["d1",BhE(APk),"d_",BhF(AJx),"dY",BhG(A5p)],ABn,0,BL,[],0,3,0,0,["d1",BhE(AT5),"d_",BhF(AIQ),"dY",BhG(A0n)],AE0,0,BL,[],0,3,0,0,["d1",BhE(AWr),"d_",BhF(AP9),"dY",BhG(AN_)],YN,0,BL,[],0,3,0,0,["d1",BhE(A1e),"d_",BhF(A2Z),"dY",BhG(A83)],ADY,0,BL,[],0,3,0,0,["d1",BhE(ASK),"d_",BhF(A4U),"dY",BhG(A3X)],WO,0,BL,[],0,3,0,0,["d1",BhE(ANl),"d_",BhF(AIX),"dY",BhG(A5w)],AHi,0,BL,[],0,3,0,0,["d1",BhE(AMm),"d_",BhF(A_e),"dY",BhG(AJV)],Y1,0,BL,[],0,3,0,0,["d1",BhE(AYd),"d_",
BhF(AYm),"dY",BhG(A_a)],AEE,0,BL,[],0,3,0,0,["d1",BhE(AIM),"d_",BhF(APW),"dY",BhG(A6e)],AEi,0,BL,[],0,3,0,0,["d1",BhE(APP),"d_",BhF(A7M),"dY",BhG(APx)],AEN,0,BL,[],0,3,0,0,["d1",BhE(A4I),"d_",BhF(AXa),"dY",BhG(AZC)],ADn,0,BL,[],0,3,0,0,["d1",BhE(ARb),"d_",BhF(A5j),"dY",BhG(AZb)],ADc,0,BL,[],0,3,0,0,["d1",BhE(AQ0),"d_",BhF(A2X),"dY",BhG(AQT)],Mu,"NoSuchElementException",16,B0,[],0,3,0,0,0,Bc,"GdxRuntimeException",8,B0,[],0,3,0,0,0,WU,0,D,[],4,3,0,0,0,TK,0,BF,[],0,0,0,0,["h7",BhF(AVd)],RO,0,BF,[],0,0,0,0,["h7",
BhF(AYL)],PU,0,BF,[],0,0,0,0,["h7",BhF(AJM)],PT,0,BF,[],0,0,0,0,["h7",BhF(A1s)],Q6,0,BF,[],0,0,0,0,["h7",BhF(AOZ)],Su,0,BF,[],0,0,0,0,["h7",BhF(A9x)]]);
BhD([OD,0,BF,[],0,0,0,0,["h7",BhF(AR7)],S8,0,BF,[],0,0,0,0,["h7",BhF(ATq)],RM,0,BF,[],0,0,0,0,["h7",BhF(A$F)],RN,0,BF,[],0,0,0,0,["h7",BhF(AMi)],OA,0,BF,[],0,0,0,0,["h7",BhF(AVt)],SK,0,BF,[],0,0,0,0,["h7",BhF(A4S)],SN,0,BF,[],0,0,0,0,["h7",BhF(A68)],T5,0,BF,[],0,0,0,0,["h7",BhF(A9i)],TA,0,BF,[],0,0,0,0,["h7",BhF(AV1)],Od,0,BF,[],0,0,0,0,["h7",BhF(AL6)],J3,0,BF,[],0,0,0,0,["h7",BhF(AR_)],To,0,J3,[],0,0,0,0,["h7",BhF(A8A)],F3,0,D,[Hh],0,3,0,0,["cV",BhE(AYy)],ADs,0,D,[],4,3,0,0,0,Rq,0,D,[],32,0,0,BcE,0,NP,"ConcurrentModificationException",
16,B0,[],0,3,0,0,0,Kz,0,IS,[],0,3,0,0,["iT",BhH(AM7)],MS,0,E3,[DO],0,3,0,0,["mG",BhE(A$0),"mE",BhE(A1H),"l",BhE(AYj)],HL,0,D,[],0,0,0,0,0,KN,0,D,[],4,3,0,0,0,Uf,0,D,[],0,3,0,0,0,GI,"BitmapFont$BitmapFontData",14,D,[],0,3,0,0,0,EZ,0,BW,[],12,3,0,S6,0,JD,0,D,[DZ],0,3,0,0,0,Fb,0,D,[],1,3,0,0,0,Nk,0,D,[],3,3,0,0,0,LP,0,Fb,[DO,IZ,EU,Nk],1,3,0,0,0,Gk,0,Fb,[DO],1,3,0,0,["b8",BhF(ASr),"b7",BhF(AX0)],GG,0,D,[],0,3,0,EN,0,Mg,0,D,[],3,3,0,0,0,Q1,0,D,[],3,3,0,0,0,OE,0,D,[Hh,Mg,Q1],0,0,0,0,["cV",BhE(A66)],KZ,"BitmapFont$Glyph",
14,D,[],0,3,0,0,["l",BhE(AN6)],Wv,0,D,[EK,DO],4,3,0,0,0,HH,0,D,[DZ],0,3,0,Ry,0,Lp,0,LP,[],1,0,0,0,0,Jx,0,Lp,[],0,0,0,0,0,LH,0,D,[],1,3,0,0,0,CZ,0,D,[],0,3,0,0,0,QN,0,D,[],0,3,0,0,0,RC,0,D,[],32,0,0,Bfs,0,KI,0,D,[DZ],3,3,0,0,0,Ng,0,D,[KI],0,3,0,0,["le",BhE(ANE),"mV",BhE(ATe),"ja",BhH(A54),"k5",BhG(A1g),"lc",BhG(AYD)],La,0,D,[DZ],3,3,0,0,0,Ie,0,D,[La],0,3,0,0,["k7",BhE(AOo),"k_",BhE(AXT),"k4",BhH(ARz),"jb",BhF(AJS),"i6",BhE(A9J),"ld",BhE(A7F)],ACL,0,D,[KI],0,3,0,0,["le",BhE(AZE),"mV",BhE(ALZ),"ja",BhH(AKq),"k5",
BhG(ARo),"lc",BhG(AM4)],AE2,0,D,[La],0,3,0,0,["k7",BhE(ASX),"k_",BhE(AXh),"k4",BhH(A26),"jb",BhF(A8W),"i6",BhE(APl),"ld",BhE(AKQ)],Pj,0,D,[KI],0,3,0,BaB,["le",BhE(AYJ),"mV",BhE(A5F),"ja",BhH(AYX),"k5",BhG(AUr),"lc",BhG(AMw)],R_,0,Ng,[],0,3,0,0,0,O8,0,Ie,[],0,3,0,0,0]);
BhD([AGx,0,D,[EK],0,3,0,0,0,AGu,0,D,[],4,3,0,0,0,Fr,0,D,[],3,3,0,0,0,C8,0,Gk,[Fr],0,0,0,0,["fM",BhE(AWO)],MD,0,D,[],0,3,0,0,0,IM,0,Fb,[DO],1,3,0,0,0,HD,0,D,[],4,3,0,CP,0,Fk,0,Fb,[DO],1,3,0,0,["b8",BhF(ASv),"b7",BhF(AVL)],AEl,0,D,[],0,3,0,0,0,IQ,0,Fb,[DO],1,3,0,0,0,AFx,0,D,[C4],1,3,0,0,0,Qi,0,D,[],3,3,0,0,0,Lm,0,D,[Qi],0,3,0,0,0,Ih,0,D,[DZ],0,3,0,TJ,0,I1,0,IM,[],1,0,0,0,0,HC,0,I1,[],0,0,0,0,["lM",BhF(A52),"l1",BhG(A4q),"lS",BhE(AIE)],IV,0,Fk,[],1,0,0,0,0,Jb,0,IV,[],0,0,0,0,["l2",BhF(ASF),"lT",BhG(ARS),"lS",BhE(A6d)],GP,
0,BW,[],12,3,0,JV,0,Gx,0,BW,[],12,3,0,Zx,0,JU,0,MD,[],0,3,0,0,["l",BhE(A$Y)],AE6,0,D,[DZ],0,3,0,0,0,It,0,IQ,[],1,0,0,0,0,KV,0,It,[],0,0,0,0,["l_",BhF(ANv),"lU",BhG(A3e),"lS",BhE(A0o)],Zf,0,D,[C4],1,3,0,0,0,DN,0,BW,[],12,3,0,ALE,0,F5,0,BW,[],12,3,0,AW$,0,Xm,0,D,[Ll],1,3,0,0,["IO",BhF(A$O),"YN",BhE(ALe)],H6,0,IV,[Fr],1,0,0,0,["lS",BhE(A6l),"fM",BhE(AS2)],Ou,0,H6,[],0,0,0,0,["l2",BhF(APX),"lT",BhG(A69)],PA,0,H6,[],0,0,0,0,["l2",BhF(AXi),"lT",BhG(A3S)],IK,0,It,[Fr],1,0,0,0,["lS",BhE(A2s),"fM",BhE(A7D)],RV,0,IK,
[],0,0,0,0,["l_",BhF(A0c),"lU",BhG(AZG)],SV,0,IK,[],0,0,0,0,["l_",BhF(A5U),"lU",BhG(A0f)],Hk,"UnsupportedOperationException",21,B0,[],0,3,0,0,0,EW,"ReadOnlyBufferException",18,Hk,[],0,3,0,0,0,I$,0,I1,[Fr],1,0,0,0,["lS",BhE(APN)],OB,0,I$,[],0,0,0,0,["lM",BhF(ANr),"l1",BhG(AID)],TO,0,I$,[],0,0,0,0,["lM",BhF(AUo),"l1",BhG(AJ6)],I_,"BufferUnderflowException",18,B0,[],0,3,0,0,0,Ex,0,BW,[],12,3,0,Ns,0,FY,0,LH,[],1,3,0,0,0,O7,0,FY,[],0,3,0,0,["mb",function(b,c,d,e,f,g,h){return APF(this,b,c,d,e,f,g,h);}],FH,"IOException",
20,Da,[],0,3,0,0,0,H2,0,D,[JF,Nk],1,3,0,0,0,Y7,0,H2,[],0,3,0,0,0,Wn,0,H2,[],0,3,0,0,0,ABy,0,D,[M6],0,3,0,0,0,Py,0,D,[],4,3,0,0,0,UE,0,D,[],0,3,0,Bfa,0]);
BhD([DS,0,BW,[],12,3,0,IR,0,Kl,0,D,[],4,3,0,0,0,Mw,0,D,[],4,3,0,0,0,G8,0,BW,[],12,0,0,AEx,0,C5,0,BW,[],12,3,0,IF,0,GE,0,BW,[],12,3,0,AJe,0,Uc,0,D,[],0,3,0,0,0,T1,0,D,[],32,0,0,BaR,0,NQ,0,D,[],1,3,0,0,0,G1,"BufferOverflowException",18,B0,[],0,3,0,0,0,Hm,0,D,[],1,3,0,0,0,ABH,0,D,[],4,3,0,0,0,NT,0,D,[],1,3,0,0,0,ABt,0,D,[],4,3,0,0,0,Iz,0,D,[],4,3,0,0,0,NZ,0,D,[],1,3,0,0,0,Ck,0,NZ,[],0,3,0,0,0,O1,0,D,[],3,3,0,0,0,Cj,0,D,[O1],0,3,0,0,0,B_,0,D,[],1,3,0,0,0,O5,0,B_,[],0,3,0,0,0,R2,0,B_,[],0,3,0,0,0,Qf,0,B_,[],0,3,
0,0,0,HZ,0,B_,[],0,3,0,0,0,RP,0,B_,[],0,3,0,0,0,PP,0,B_,[],0,3,0,0,0,OS,0,B_,[],0,3,0,0,0,R8,0,B_,[],0,3,0,0,0,Vk,0,B_,[],0,3,0,0,0,R9,0,B_,[],0,3,0,0,0,Pv,0,B_,[],0,3,0,0,0,Sv,0,B_,[],0,3,0,0,0,U1,0,B_,[],0,3,0,0,0,K6,0,B_,[],0,3,0,0,0,P6,0,B_,[],0,3,0,0,0,Se,0,B_,[],0,3,0,0,0,MP,0,B_,[],0,3,0,0,0,RH,0,B_,[],0,3,0,0,0,Xe,0,D,[],4,3,0,0,0,Ps,0,HP,[],0,3,0,0,0,W7,0,D,[],0,3,0,0,0,QI,0,D,[IE],0,0,0,0,["rH",BhF(AD_)],ZK,0,D,[Hh,Mg],3,0,0,0,0,Ly,0,NQ,[],1,3,0,0,0,Qj,0,Ly,[],0,3,0,0,0,Os,0,Hm,[],4,3,0,0,0,Ci,0,NT,
[],0,3,0,0,0,JS,0,Hm,[],4,0,0,Bbp,0,Nx,0,D,[],3,3,0,0,0,S$,0,D,[Nx],0,0,0,0,["nh",BhF(AZ7),"nj",BhF(A6s)]]);
BhD([TX,0,D,[Nx],0,0,0,0,["nh",BhF(A6O),"nj",BhF(AUB)],DD,0,D,[],0,3,0,IA,0,AHz,0,D,[],4,3,0,0,0,ACl,0,D,[],0,0,0,0,0,YL,0,D,[C4],1,3,0,0,0,Op,0,IJ,[LX],0,0,0,0,0,QP,0,D,[],0,3,0,BgO,0,Pu,0,D,[],4,3,0,0,0,Xk,0,D,[],4,3,0,0,0,JT,0,D,[],4,0,0,FE,0,Ip,0,D,[JF],1,3,0,0,["mm",BhH(A9a),"mc",BhE(A2l)],NE,0,Ip,[],0,3,0,0,["nJ",BhE(AZV),"mm",BhH(A$i),"mc",BhE(AOn)],MX,"UnsupportedEncodingException",20,FH,[],0,3,0,0,0,Qg,0,D,[],0,3,0,0,0,S0,0,B_,[],0,3,0,0,0,GM,0,BW,[],12,3,0,YB,0,ACJ,0,B_,[],0,3,0,0,0,BT,0,E3,[DO,CI],
0,3,0,B6,0,Nw,"CoderMalfunctionError",19,G2,[],0,3,0,0,0,KD,"ArithmeticException",21,B0,[],0,3,0,0,0,HR,0,D,[],0,0,0,Gm,0,WL,0,D,[],0,0,0,0,0,NH,0,D,[],0,3,0,0,0,Nc,"UnsupportedCharsetException",19,V,[],0,3,0,0,0,Rr,0,Ip,[],0,0,0,0,["nJ",BhE(A4z)],Tu,0,D,[],0,3,0,0,0,J,0,D,[],0,3,0,Um,0,Q8,0,D,[],0,0,0,BeO,0,Ha,0,D,[],4,3,0,Bd$,0,PR,0,Fo,[],0,3,0,0,["c6",BhE(AXc)],Pf,0,Fo,[],0,3,0,0,["c6",BhE(A8m)],JB,0,Fo,[],0,3,0,0,["c6",BhE(AJh)],AGV,0,D,[],0,0,0,0,0,YW,0,D,[],0,0,0,0,0,R4,0,D,[],0,3,0,0,0,TB,0,D,[],0,3,
0,0,0,O4,0,D,[],3,3,0,0,0,UL,0,D,[O4],0,3,0,0,0,AFJ,0,D,[],0,3,0,0,0,ABO,0,D,[],4,3,0,0,0,ABj,0,D,[],0,0,0,0,0,Uw,0,D,[],0,3,0,0,0,GQ,0,FH,[],0,3,0,0,0,NS,"AssertionError",21,G2,[],0,3,0,0,0,Pp,0,Ew,[],0,0,0,0,0,LT,"InstantiationException",21,FX,[],0,3,0,0,0,Mv,"IllegalAccessException",21,FX,[],0,3,0,0,0,RZ,0,FX,[],0,3,0,0,0,AFB,0,D,[],0,0,0,0,["l",BhE(AP8)],Uk,0,FY,[],0,3,0,0,["mb",function(b,c,d,e,f,g,h){return AN4(this,b,c,d,e,f,g,h);}]]);
BhD([UY,0,FY,[],0,3,0,0,["mb",function(b,c,d,e,f,g,h){return ATD(this,b,c,d,e,f,g,h);}],SE,0,FY,[],0,3,0,0,["mb",function(b,c,d,e,f,g,h){return A7C(this,b,c,d,e,f,g,h);}],Pm,0,Ew,[],0,0,0,0,["iV",BhF(AKa),"m5",BhF(AXp),"eV",BhG(YQ)],ADG,0,D,[],4,3,0,0,0,Gc,0,D,[CI,DO],0,3,0,0,0,Kx,0,D,[IZ,EU],0,3,0,0,0,UX,0,D,[],4,3,0,AM8,0,Lt,"BufferUnderflowException",19,B0,[],0,3,0,0,0,Ml,"BufferOverflowException",19,B0,[],0,3,0,0,0,L$,"MalformedInputException",19,GQ,[],0,3,0,0,["cW",BhE(AM1)],Ls,"UnmappableCharacterException",
19,GQ,[],0,3,0,0,["cW",BhE(AMk)],Oj,0,D,[],32,0,0,Bf5,0,HV,0,E7,[],0,0,0,0,["cV",BhE(AZB)],VK,0,Ew,[],0,0,0,0,["iV",BhF(AK_),"m5",BhF(A5a),"eV",BhG(AYA)],Oi,0,Ew,[],0,0,0,0,["iV",BhF(ANz),"m5",BhF(AXM),"eV",BhG(AN1)],R6,0,D,[IE],0,0,0,0,["rH",BhF(AH3)],SP,0,D,[FQ],0,0,0,0,["rH",BhF(AMY)]]);
let BfN=LA(Kr);let BbW=LA(AKf);let A_T=LA(Bch);let Bbc=LA(Bhj);let A_W=LA(Es);let A_y=LA(AQ8);let Bd7=LA(Fu);let A_t=LA(A03);BhM(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none","all",
"table","cell","actor","Array is empty.","Unable to create new instance: ","object cannot be null.","objects cannot be null.","index can\'t be >= size: "," >= ","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","","If no regions are specified, the font data must have an images path.","0","This TextureData implementation does not upload data itself","Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","start + count must be <= size: "," + "," <= ","end can\'t be >= size: ",
"start can\'t be > end: "," > ","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","\tat ","Caused by: ","Should never been thrown","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","Illegal radix: ","java.runtime.name","userAgent",
"os.name","Windows","OS X","no OS",".html","index.html","index-debug.html","assets/","assets.txt","resize","gdx.wasm.js","Cozette.fnt"," FPS using ","Re3R","JS3R","ChpR","RndR","WhiR","AceR","PouR","ScrR","MizR","XPPR","LasR","FloR","TrmR","DisR","GoQR","VCQR","LCQR","TuQR","LOAD_ASSETS","APP_CREATE","APP_LOOP","offset + length must be <= size: ","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version",
"user.home","Loading asset : ","Unsupported asset type ","Loading script : ","px","UTF-8","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","hidden","capacity must be >= 0: ","The required capacity is too large: ","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","\\.",
"Invalid version string: ","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL","iOS","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","object","function","string","number","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ",
"Could not instantiate instance of class: ","fSet","\\Q","\\E","\\\\E\\Q","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch",
"<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase",
"javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement",
"Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures",
"OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml",
"txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary","Directory","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","=","==","Action must be non-null","Index out of bounds","charsetName is null","Replacement preconditions do not hold","Can\'t have more than 8191 sprites per batch: ",
"a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n","#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}",
"Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Given alpha and/or gamma are invalid.","CauchyAlternateDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","Lower parameters A/B/C by holding a, b, or c;\nhold Shift and A/B/C to raise.","a – alpha; must not be NaN\nb – gamma; should be greater than 0.0","ArcsineDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS",
"a – alpha; must be less than b\nb – beta; must be greater than a\nThe green line is the most accurate.","Given mu and/or sigma are invalid.","NormalAlternateDistribution with A=%.3f, B=%.3f; C=%.3f; median=%.3f at %d FPS, mode %d (J or K to change)","a – mu; must not be NaN\nb – sigma; should be greater than 0.0","TriangleVariantsScreen with A=%.3f, B=%.3f; median=%.3f at %d FPS, mode %d (J or K to change)","Pixel in each corner at %d FPS","KumaraswamyDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS",
"a – alpha; should be greater than 0.0\nb – beta; should be greater than 0.0","BetaDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS","LumpDistribution with A=%.3f, B=%.3f at %d FPS","NormalDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","Raised NormalDistribution with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS","a – mu; must not be NaN\nb – sigma; should be greater than 0.0\nc - power; will be rounded to an int","Product of NormalDistribution s with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS",
"a – mu; must not be NaN\nb – sigma; should be greater than 0.0\nc - count; will be rounded to an int of at least 1","CauchyDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","LogCauchyDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","ErlangDistribution with A=%.3f, B=%.3f; at %d FPS","a – alpha; will be cast to an int, and should be greater or equal to 1\nb – lambda; should be greater than 0.0","ExponentialDistribution with A=%.3f; mean=%.3f at %d FPS","a – lambda; should be greater than 0.0",
"ParetoDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","PowerDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS","ChiDistribution with A=%.3f; mean=%.3f at %d FPS","ChiSquareDistribution with A=%.3f; mean=%.3f at %d FPS","StudentsTDistribution with A=%.3f; median=%.3f at %d FPS","a – nu; should be greater than 0.0","a – alpha; must be less than b\nb – beta; must be greater than a","Given alpha and/or beta are invalid.","BinomialDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS","Lower parameter A by holding a;\nhold Shift and A to raise.",
"a – alpha; should be greater than or equal to 0.0 and less than or equal to 1.0\nb – beta; will be cast to an int, and should be greater or equal to 0","Given alpha and/or skew are invalid.","ZipfianDistribution with A=%.3f, B=%.3f, zeta=%.6f; at %d FPS","a – alpha; should be an int or long greater than 0\nb – skew; should be greater than or equal to 0.0","TriangularDistribution with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS","a – alpha; requires a < b && a <= c\nb – beta; requires b > a && b >= c\nc – gamma; requires c >= a && c <= b",
"Given mu, sigma and/or iota are invalid.","KnobDistribution with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS","a mu; must not be NaN\nb sigma; should be greater than 0.0\nc iota; must be between 0.0 and 1.0, both inclusive","MathUtils.sin() at %d FPS","Using ","Math.sin() at %d FPS","TrigTools.sin() at %d FPS","TrigTools.sinSmooth() at %d FPS","TrigTools.sinSmoother() at %d FPS","MathUtils.cos() at %d FPS","Math.cos() at %d FPS","TrigTools.cos() at %d FPS","TrigTools.cosSmooth() at %d FPS","TrigTools.cosSmoother() at %d FPS",
"Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ","Error loading font file: ","No glyphs found.","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO",
"Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","New position "," is outside of range [0;","New limit ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null",
"Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","Index ","BIG_ENDIAN","LITTLE_ENDIAN","The last float in src ","The last short in src ","Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend",
"\\"," does not exist","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","newAction must be non-null","The specified font must contain at least one texture page.","Unknown Gdx2DPixmap Format: ","Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in",
"DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n",
"attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex",";\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * "," texture2D(u_sampler",",  v_tex",") *",";\n}","uniform sampler2D u_sampler",
"Given alpha and/or lambda are invalid.","Given lambda is invalid.","Given alpha is invalid.","Given nu is invalid.","Given alpha, beta, and/or gamma are invalid.","Asset loaded: ","file-f:","file-d:","01","01234567","0123456789","0123456789ABCDEF","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\'/!@#$%^&*()[]{}<>:?;|_=",
"NaN","0.0","-0.0","0.",".0","Infinity","-Infinity"," != ","Logical","Pixels","Negative bit address","Negative exponent","BigInteger divide by zero","alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigma","tau","upsilon","phi","chi","psi","omega","ALPHA","BETA","GAMMA","DELTA","EPSILON","ZETA","ETA","THETA","IOTA","KAPPA","LAMBDA","MU","NU","XI","OMICRON","PI","RHO","SIGMA","TAU","UPSILON","PHI","CHI","PSI","OMEGA","baal","agares","vassago",
"samigina","marbas","valefor","amon","barbatos","paimon","buer","gusion","sitri","beleth","leraje","eligos","zepar","botis","bathin","sallos","purson","marax","ipos","aim","naberius","glasya_labolas","bune","ronove","berith","astaroth","forneus","foras","asmoday","gaap","furfur","marchosias","stolas","phenex","halphas","malphas","raum","focalor","vepar","sabnock","shax","vine","bifrons","vual","haagenti","crocell","furcas","balam","alloces","caim","murmur","orobas","gremory","ose","amy","orias","vapula","zagan",
"valac","andras","flauros","andrealphus","kimaris","amdusias","belial","decarabia","seere","dantalion","andromalius","BAAL","AGARES","VASSAGO","SAMIGINA","MARBAS","VALEFOR","AMON","BARBATOS","PAIMON","BUER","GUSION","SITRI","BELETH","LERAJE","ELIGOS","ZEPAR","BOTIS","BATHIN","SALLOS","PURSON","MARAX","IPOS","AIM","NABERIUS","GLASYA_LABOLAS","BUNE","RONOVE","BERITH","ASTAROTH","FORNEUS","FORAS","ASMODAY","GAAP","FURFUR","MARCHOSIAS","STOLAS","PHENEX","HALPHAS","MALPHAS","RAUM","FOCALOR","VEPAR","SABNOCK","SHAX",
"VINE","BIFRONS","VUAL","HAAGENTI","CROCELL","FURCAS","BALAM","ALLOCES","CAIM","MURMUR","OROBAS","GREMORY","OSE","AMY","ORIAS","VAPULA","ZAGAN","VALAC","ANDRAS","FLAUROS","ANDREALPHUS","KIMARIS","AMDUSIAS","BELIAL","DECARABIA","SEERE","DANTALION","ANDROMALIUS","hydrogen","helium","lithium","beryllium","boron","carbon","nitrogen","oxygen","fluorine","neon","sodium","magnesium","aluminium","silicon","phosphorus","sulfur","chlorine","argon","potassium","calcium","scandium","titanium","vanadium","chromium","manganese",
"iron","cobalt","nickel","copper","zinc","gallium","germanium","arsenic","selenium","bromine","krypton","rubidium","strontium","yttrium","zirconium","niobium","molybdenum","technetium","ruthenium","rhodium","palladium","silver","cadmium","indium","tin","antimony","tellurium","iodine","xenon","caesium","barium","lanthanum","cerium","praseodymium","neodymium","promethium","samarium","europium","gadolinium","terbium","dysprosium","holmium","erbium","thulium","ytterbium","lutetium","hafnium","tantalum","tungsten",
"rhenium","osmium","iridium","platinum","gold","mercury","thallium","lead","bismuth","polonium","astatine","radon","francium","radium","actinium","thorium","protactinium","uranium","neptunium","plutonium","americium","curium","berkelium","californium","einsteinium","fermium","mendelevium","nobelium","lawrencium","rutherfordium","dubnium","seaborgium","bohrium","hassium","meitnerium","darmstadtium","roentgenium","copernicium","nihonium","flerovium","moscovium","livermorium","tennessine","oganesson","HYDROGEN",
"HELIUM","LITHIUM","BERYLLIUM","BORON","CARBON","NITROGEN","OXYGEN","FLUORINE","NEON","SODIUM","MAGNESIUM","ALUMINIUM","SILICON","PHOSPHORUS","SULFUR","CHLORINE","ARGON","POTASSIUM","CALCIUM","SCANDIUM","TITANIUM","VANADIUM","CHROMIUM","MANGANESE","IRON","COBALT","NICKEL","COPPER","ZINC","GALLIUM","GERMANIUM","ARSENIC","SELENIUM","BROMINE","KRYPTON","RUBIDIUM","STRONTIUM","YTTRIUM","ZIRCONIUM","NIOBIUM","MOLYBDENUM","TECHNETIUM","RUTHENIUM","RHODIUM","PALLADIUM","SILVER","CADMIUM","INDIUM","TIN","ANTIMONY",
"TELLURIUM","IODINE","XENON","CAESIUM","BARIUM","LANTHANUM","CERIUM","PRASEODYMIUM","NEODYMIUM","PROMETHIUM","SAMARIUM","EUROPIUM","GADOLINIUM","TERBIUM","DYSPROSIUM","HOLMIUM","ERBIUM","THULIUM","YTTERBIUM","LUTETIUM","HAFNIUM","TANTALUM","TUNGSTEN","RHENIUM","OSMIUM","IRIDIUM","PLATINUM","GOLD","MERCURY","THALLIUM","LEAD","BISMUTH","POLONIUM","ASTATINE","RADON","FRANCIUM","RADIUM","ACTINIUM","THORIUM","PROTACTINIUM","URANIUM","NEPTUNIUM","PLUTONIUM","AMERICIUM","CURIUM","BERKELIUM","CALIFORNIUM","EINSTEINIUM",
"FERMIUM","MENDELEVIUM","NOBELIUM","LAWRENCIUM","RUTHERFORDIUM","DUBNIUM","SEABORGIUM","BOHRIUM","HASSIUM","MEITNERIUM","DARMSTADTIUM","ROENTGENIUM","COPERNICIUM","NIHONIUM","FLEROVIUM","MOSCOVIUM","LIVERMORIUM","TENNESSINE","OGANESSON","US-ASCII","ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","-2147483648","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK",
"RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","Malformed input of length ","Unmappable characters of length ","data:",";base64,","error"]);
P.prototype.toString=()=>{return Cp(this);};
P.prototype.valueOf=P.prototype.toString;D.prototype.toString=()=>{return Cp(AKY(this));};
D.prototype.__teavm_class__=function(){return Bh2(this);};
let Dh;let Ej;let W0;let DB;let GH;let Gb;let Bba;let BbA;let T;let B4;let Bi2;let Bi3;let W;let BS;let Dx;let Bfj;let A_8;let HJ;let Bd;let B2;let Bg;let BP;let Gn;let Q;let Bi4;if(typeof BigInt!=='function'){Dh=(a,b)=>a.hi===b.hi&&a.lo===b.lo;Ej=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;W0=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};DB=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y=
b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};GH=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Gb=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};T=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return By(a.lo+b.lo);}else if(Bi5.abs(a.hi)<Bh6&&Bi5.abs(b.hi)<Bh6){return By(Bz(a)+Bz(b));}let a_lolo=a.lo&0xFFFF;let a_lohi
=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo+b_lolo|0;let lohi=a_lohi+b_lohi+(lolo>>16)|0;let hilo=a_hilo+b_hilo+(lohi>>16)|0;let hihi=a_hihi+b_hihi+(hilo>>16)|0;return new BhU(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Bi2=a=>{let lo=a.lo+1|0;let hi=a.hi;if(lo===0){hi=hi+1|0;}return new BhU(lo,hi);};Bi3=a=>{let lo=a.lo -1|0;let hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new BhU(lo,
hi);};HJ=a=>Bi2(new BhU(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));B4=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return By(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo -b_lolo|0;let lohi=a_lohi -b_lohi+(lolo>>16)|0;let hilo=a_hilo -b_hilo+(lohi>>16)|0;let hihi=a_hihi -b_hihi+(hilo>>16)|0;return new BhU(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)
<<16);};Bba=(a,b)=>{let r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};BbA=(a,b)=>{let r=Gy(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};W=(a,b)=>{let positive=Bh5(a)===Bh5(b);if(Bh5(a)){a=HJ(a);}if(Bh5(b)){b=HJ(b);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo
=0;let lohi=0;let hilo=0;let hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new BhU(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive
?result:HJ(result);};BS=(a,b)=>{if(Bi5.abs(a.hi)<Bh6&&Bi5.abs(b.hi)<Bh6){return By(Bz(a)/Bz(b));}return (Long_divRem(a,b))[0];};Bfj=(a,b)=>{if(a.hi>=0&&a.hi<Bh6&&b.hi>=0&&b.hi<Bh6){return By(Bz(a)/Bz(b));}return (Long_udivRem(a,b))[0];};Dx=(a,b)=>{if(Bi5.abs(a.hi)<Bh6&&Bi5.abs(b.hi)<Bh6){return By(Bz(a)%Bz(b));}return (Long_divRem(a,b))[1];};A_8=(a,b)=>{if(a.hi>=0&&a.hi<Bh6&&b.hi>=0&&b.hi<Bh6){return By(Bz(a)/Bz(b));}return (Long_udivRem(a,b))[1];};let Long_divRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive
=Bh5(a)===Bh5(b);if(Bh5(a)){a=HJ(a);}if(Bh5(b)){b=HJ(b);}a=new Bi6(a.lo,a.hi,0);b=new Bi6(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new BhU(a.lo,a.hi);q=new BhU(q.lo,q.hi);return positive?[q,a]:[HJ(q),HJ(a)];};let Long_udivRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new Bi6(a.lo,a.hi,0);b=new Bi6(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new BhU(a.lo,a.hi);q=new BhU(q.lo,q.hi);return [q,a];};Bd=(a,b)=>new BhU(a.lo&b.lo,a.hi&b.hi);B2=(a,b)=>new BhU(a.lo|b.lo,a.hi|b.hi);Bg=(a,b)=>new BhU(a.lo
^b.lo,a.hi^b.hi);BP=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new BhU(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new BhU(0,a.lo);}else {return new BhU(0,a.lo<<b -32);}};Gn=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new BhU(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new BhU(a.hi,a.hi>>31);}else {return new BhU(a.hi>>b -32,a.hi>>31);}};Q=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new BhU(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new BhU(a.hi,
0);}else {return new BhU(a.hi>>>b -32,0);}};Bi4=a=>new BhU(~a.hi,~a.lo);function Bi6(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let LongInt_mul=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0;let a_lohi=(a.lo>>>16)*b|0;let a_hilo=(a.hi&0xFFFF)*b|0;let a_hihi=(a.hi>>>16)*b|0;let sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;};let LongInt_sub=(a,b)=>{let a_lolo
=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_add=(a,b)=>{let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi
>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_inc=a=>{a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}};let LongInt_dec=a=>{a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup
=a.sup -1&0xFFFF;}}};let LongInt_ucompare=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};let LongInt_numOfLeadingZeroBits=a=>{let n=0;let d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;};let LongInt_shl=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup
=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}};let LongInt_shr=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup
=0;}};let LongInt_copy=a=>new Bi6(a.lo,a.hi,a.sup);let LongInt_div=(a,b)=>{let bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;let sz=1+(bits/16|0);let dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);let q=new Bi6(0,0,0);while(sz-->0){LongInt_shl(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup;let digitB=b.hi>>>16;let digit=digitA/digitB|0;let t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,
b); --digit;}}else {while(true){let nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;};}else {Dh=(a,b)=>a===b;Ej=(a,b)=>a!==b;W0=(a,b)=>a>b;DB=(a,b)=>a>=b;GH=(a,b)=>a<b;Gb=(a,b)=>a<=b;T=(a,b)=>BigInt.asIntN(64,a+b);Bi2=a=>BigInt.asIntN(64,a+1);Bi3=a=>BigInt.asIntN(64,a -1);HJ=a=>BigInt.asIntN(64, -a);B4=(a,b)=>BigInt.asIntN(64,a -b);Bba=(a,b)=>a<b? -1:a>b?1:0;BbA=(a,b)=>{a=BigInt.asUintN(64,
a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};W=(a,b)=>BigInt.asIntN(64,a*b);BS=(a,b)=>BigInt.asIntN(64,a/b);Bfj=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));Dx=(a,b)=>BigInt.asIntN(64,a%b);A_8=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)%BigInt.asUintN(64,b));Bd=(a,b)=>BigInt.asIntN(64,a&b);B2=(a,b)=>BigInt.asIntN(64,a|b);Bg=(a,b)=>BigInt.asIntN(64,a^b);BP=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));Gn=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));Q=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));Bi4=a=>BigInt.asIntN(64,~a);}function Bi7(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}Bi7.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};Bi7.prototype.s=Bi7.prototype.push;Bi7.prototype.pop=function(){return this.stack.pop();};Bi7.prototype.l=Bi7.prototype.pop;Bi7.prototype.isResuming=function(){return this.status===2;};Bi7.prototype.isSuspending=
function(){return this.status===1;};Bi7.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};Bi7.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(Bi8!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};Bi7.prototype.resume=function(){if(Bi8!==null){throw new Error("Another thread is running");}this.status=2;this.run();};Bi7.prototype.run
=function(){Bi8=this;let result;try {result=this.runner();}catch(BhY){result=BhY;}finally {Bi8=null;}if(this.suspendCallback!==null){let self=this;let callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let HB=()=>{let thread=Co();return thread!=null&&thread.isSuspending();};let DV=()=>{let thread=Co();return thread!=null&&thread.isResuming();};let Bi9=callback=>{let nativeThread=Co();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);};let BhJ
=(runner,callback)=>(new Bi7(runner)).start(callback);let Bi8=null;let Co=()=>Bi8;let DU=()=>{throw new Error("Invalid recorded state");};Bg7.main=BhK(Bfo);
Bg7.main.javaException=BhZ;
(function(){var c;c=LR.prototype;c.onAnimationFrame=c.OL;c=AFv.prototype;c.handleEvent=c.rH;c=VH.prototype;c.handleEvent=c.rH;c=VI.prototype;c.handleEvent=c.rH;c=Ue.prototype;c.fullscreenChanged=c.QE;c=TE.prototype;c.denied=c.ZT;c.prompt=c.NA;c.granted=c.SG;c=V_.prototype;c.removeEventListener=c.OI;c.dispatchEvent=c.M7;c.get=c.IO;c.addEventListener=c.Tp;Object.defineProperty(c,"length",{get:c.U4});c=Pq.prototype;c.handleEvent=c.rH;c=Pr.prototype;c.handleEvent=c.rH;c=Pn.prototype;c.handleEvent=c.rH;c=RX.prototype;c.unlockFunction
=c.Ta;c=OW.prototype;c.accept=c.IU;c=OX.prototype;c.accept=c.IU;c=ADi.prototype;c.removeEventListener=c.YU;c.dispatchEvent=c.TR;c.addEventListener=c.WQ;c=Qn.prototype;c.handleEvent=c.rH;c=AHs.prototype;c.removeEventListener=c.L9;c.dispatchEvent=c.UL;c.addEventListener=c.Pw;c=Oh.prototype;c.handleEvent=c.rH;c=Jn.prototype;c.handleEvent=c.rH;c=Xm.prototype;c.get=c.IO;Object.defineProperty(c,"length",{get:c.YN});c=QI.prototype;c.handleEvent=c.rH;c=R6.prototype;c.handleEvent=c.rH;c=SP.prototype;c.handleEvent=c.rH;})();
}));
