"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(BgU){let BgV=2463534242;let Fd=()=>{let x=BgV;x^=x<<13;x^=x>>>17;x^=x<<5;BgV=x;return x;};let B9=(a,b)=>a>b?1:a<b? -1:a===b?0:1;let Fk=(obj,cls)=>obj instanceof HL()&&!!obj.constructor.$meta&&BgW(obj.constructor,cls);let BgW=(from,
to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&BgW(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(BgW(supertypes[i],to)){return true;}}return false;};let BgX=(obj,cls)=>{if(obj!==null&&!Fk(obj,cls)){BgY();}return obj;};let BgZ=(obj,cls)=>{if(obj!==null&&!(obj instanceof cls)){BgY();}return obj;};let Bt=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (Lz(cls))(data);};let R=(cls,init)=>Bg0(cls,
init);let Bg0=(cls,data)=>new (Lz(cls))(data);let Bg1=(cls,sz)=>new (Lz(cls))(new Array(sz));let Co;let Sn;if(typeof BigInt64Array!=='function'){Co=sz=>{let data=new Array(sz);let arr=new A_m(data);data.fill(M);return arr;};Sn=init=>new A_m(init);}else {Co=sz=>new A_m(new BigInt64Array(sz));Sn=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new A_m(buffer);};}let H=sz=>new BbJ(new Uint16Array(sz));let S$=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new BbJ(buffer);};let BW
=sz=>new A_H(new Int8Array(sz));let Bg2=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new A_H(buffer);};let MT=sz=>new Ba2(new Int16Array(sz));let BcL=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new Ba2(buffer);};let X=sz=>new A_K(new Int32Array(sz));let E2=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new A_K(buffer);};let NZ=sz=>new BfA(new Int8Array(sz));let Bg3=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new BfA(buffer);};let CT
=sz=>new BdT(new Float32Array(sz));let Bg4=data=>{let buffer=new Float32Array(data.length);buffer.set(data);return new BdT(buffer);};let LH=sz=>new A_h(new Float64Array(sz));let BeQ=data=>{let buffer=new Float64Array(data.length);buffer.set(data);return new A_h(buffer);};let Lz=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(HL()).call(this);this.data=data;}JavaArray.prototype=Object.create((HL()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};Bg5(JavaArray.prototype,function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (Lz(this.type))(dataCopy);});let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[HL()],primitive:false,superclass:HL(),name:name,
binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let Bg6=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};};let Bg7=(name,binaryName)=>{let cls=Bg6();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass
=null;return cls;};let Kp=Bg7("boolean","Z");let AJ$=Bg7("char","C");let Bb6=Bg7("byte","B");let Bg8=Bg7("short","S");let Es=Bg7("int","I");let AQ0=Bg7("long","J");let Fr=Bg7("float","F");let A0S=Bg7("double","D");let CO=Bg7("void","V");let E=ex=>{throw AUp(ex);};let Bg9=Symbol("javaException");let AUp=ex=>{let err=ex.$jsException;if(!err){let javaCause=Bg$(ex);let jsCause=javaCause!==null?javaCause.$jsException:void 0;let cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new Bg_("Java exception thrown",
cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[Bg9]=ex;ex.$jsException=err;Bha(err,ex);}return err;};let Bha=(err,ex)=>{if(typeof Bhb==="function"&&err.stack){let stack=Bhb(err.stack);let javaStack=Bt(Bhc(),stack.length);let elem;let noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=Bhd(Bv(element.className),Bv(element.methodName),Bv(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){Bhe(ex,
javaStack);}}};let Bhf=(cls,dimensions)=>{let first=0;for(let i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(let i=0;i<first;i=i+1|0){cls=Lz(cls);}if(first===dimensions.length -1){return Bt(cls,dimensions[first]);}}let arrays=new Array(Bhg(dimensions,first));let firstDim=dimensions[first]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Bt(cls,firstDim);}return Bhh(cls,arrays,dimensions,first);};let Bfu=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length
===0){return Bhf(Bb6,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=BW(firstDim);}return Bhh(Bb6,arrays,dimensions);};let Bfv=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length===0){return Bhf(AJ$,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=H(firstDim);}return Bhh(AJ$,arrays,dimensions,0);};let Bhi=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length===0){return Bhf(Kp,dimensions);}let firstDim
=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=NZ(firstDim);}return Bhh(Kp,arrays,dimensions,0);};let Bc5=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length===0){return Bhf(Bg8,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=MT(firstDim);}return Bhh(Bg8,arrays,dimensions,0);};let AEY=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length===0){return Bhf(Es,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i
=i+1|0){arrays[i]=X(firstDim);}return Bhh(Es,arrays,dimensions,0);};let BbR=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length===0){return Bhf(AQ0,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Co(firstDim);}return Bhh(AQ0,arrays,dimensions,0);};let BaO=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length===0){return Bhf(Fr,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=CT(firstDim);}return Bhh(Fr,
arrays,dimensions,0);};let A_D=dimensions=>{let arrays=new Array(Bhg(dimensions,0));if(arrays.length===0){return Bhf(A0S,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=LH(firstDim);}return Bhh(A0S,arrays,dimensions,0);};let Bhg=(dimensions,start)=>{let val=dimensions[start+1]|0;for(let i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;};let Bhh=(cls,arrays,dimensions,start)=>{let limit=arrays.length;for(let i=start+1|0;i
<dimensions.length;i=i+1|0){cls=Lz(cls);let dim=dimensions[i];let index=0;let packedIndex=0;while(index<limit){let arr=Bg1(cls,dim);for(let j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];};let Bhj=value=>{if(typeof value==='number'&&Bhk(value)){throw "NaN";}return value;};let Bhl=printFunction=>{let buffer="";let utf8Buffer=0;let utf8Remaining=0;let putCodePoint=ch=>{if(ch===0xA){printFunction(buffer);buffer
="";}else if(ch<0x10000){buffer+=Bhm.fromCharCode(ch);}else {ch=ch -0x10000|0;let hi=(ch>>10)+0xD800;let lo=(ch&0x3FF)+0xDC00;buffer+=Bhm.fromCharCode(hi,lo);}};return ch=>{if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch
&0x07;utf8Buffer=3;}};};let Bbw=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof Bhn==="object"?Bhl(function(msg){Bhn.info(msg);}):function(){};let Bd8=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof Bhn==="object"?Bhl(function(msg){Bhn.error(msg);}):function(){};let Bho=null;let Bhp=data=>{let i=0;let packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++];let prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}Bho
=packages;};let Bhq=data=>{let packages=Bho;let i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta;let className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype
={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName
=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j];let func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};let Bhr=f=>function(){return f(this);};let Bhs=f=>function(p1){return f(this,p1);};let Bht=f=>function(p1,p2){return f(this,p1,p2);};let Bhu=f=>
function(p1,p2,p3){return f(this,p1,p2,p3,p3);};let Bhv=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};let BbP=f=>function(){let args=Array.prototype.slice.apply(arguments);Bhw(function(){f.apply(this,args);});};let Bhx=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=Bt(HL(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=Bv(args[i]);}Bhw(()=>{f.call(null,javaArgs);},callback);};let Bhy;let Bhz=strings=>{BhA();Bhy=new Array(strings.length);for(let i=0;i<strings.length;++i){Bhy[i]=BhB(Bv(strings[i]));}};let C
=index=>Bhy[index];let Bj=target=>target.$clinit=()=>{};let BhC=new ArrayBuffer(16);let BhD=new DataView(BhC);let BhE=new Float32Array(BhC);let BhF=new Float64Array(BhC);let BhG=new Int32Array(BhC);let Ed;let Fn;if(typeof BigInt!=='function'){Ed=n=>{BhD.setFloat64(0,n,true);return new BhH(BhD.getInt32(0,true),BhD.getInt32(4,true));};Fn=n=>{BhD.setInt32(0,n.lo,true);BhD.setInt32(4,n.hi,true);return BhD.getFloat64(0,true);};}else if(typeof BigInt64Array!=='function'){Ed=n=>{BhD.setFloat64(0,n,true);let lo=BhD.getInt32(0,
true);let hi=BhD.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};Fn=n=>{BhD.setFloat64(0,n,true);let lo=BhD.getInt32(0,true);let hi=BhD.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let $rt_numberConversionLongArray=new BigInt64Array(BhC);Ed=n=>{BhF[0]=n;return $rt_numberConversionLongArray[0];};Fn=n=>{$rt_numberConversionLongArray[0]=n;return BhF[0];};}let H6=n=>{BhE[0]=n;return BhG[0];};let IU=n=>{BhG[0]
=n;return BhE[0];};let BhI=(a,b)=>{if(a!==a){return b!==b;}BhF[0]=a;BhF[1]=b;return BhG[0]===BhG[2]&&BhG[1]===BhG[3];};let Bg_;if(typeof BhJ==='object'){let defaultMessage=Symbol("defaultMessage");Bg_=function Bg_(message,cause){let self=Reflect.construct(Error,[void 0,cause],Bg_);Object.setPrototypeOf(self,Bg_.prototype);self[defaultMessage]=message;return self;};Bg_.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:Bg_},message:{get:()=>{try {let javaException=this[Bg9];if
(typeof javaException==='object'){let javaMessage=BhK(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(BhL){return "Exception occurred trying to extract Java exception message: "+BhL;}}}});}else {Bg_=Error;}let BhM=e=>e instanceof Error&&typeof e[Bg9]==='object'?e[Bg9]:null;let BhN=e=>typeof e.$jsException==='object'?e.$jsException:null;let BG=err=>{let ex=err[Bg9];if(!ex){ex=BhO(Bv("(JavaScript) "+err.toString()));err[Bg9]
=ex;ex.$jsException=err;Bha(err,ex);}return ex;};let BhP=obj=>{let cls=obj.constructor;let arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName="";if(cls===Kp){clsName="boolean";}else if(cls===Bb6){clsName="byte";}else if(cls===Bg8){clsName="short";}else if(cls===AJ$){clsName="char";}else if(cls===Es){clsName="int";}else if(cls===BhQ){clsName="long";}else if(cls===Fr){clsName="float";}else if(cls===A0S){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name
:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;};function BhH(lo,hi){this.lo=lo|0;this.hi=hi|0;}BhH.prototype.__teavm_class__=()=>{return "long";};let BhR=a=>(a.hi&0x80000000)===0;let BhS=a=>(a.hi&0x80000000)!==0;let BhT=1<<18;let M;let B;let I;let BC;let BB;let GE;let Z;if(typeof BigInt!=="function"){BhH.prototype.toString=function(){let result=[];let n=this;let positive=BhR(n);if(!positive){n=HI(n);}let radix=new BhH(10,0);do {let divRem=BhU(n,radix);result.push(String.fromCharCode(48
+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};BhH.prototype.valueOf=function(){return BB(this);};M=new BhH(0,0);I=val=>new BhH(val, -(val<0)|0);BC=val=>val>=0?new BhH(val|0,val/0x100000000|0):HI(new BhH( -val|0, -val/0x100000000|0));B=(lo,hi)=>new BhH(lo,hi);BB=val=>0x100000000*val.hi+(val.lo>>>0);GE=val=>val.hi;Z=val=>val.lo;}else {M=BigInt(0);B=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)
<<BigInt(32)));I=val=>BigInt.asIntN(64,BigInt(val|0));BC=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));BB=val=>Number(val);GE=val=>Number(BigInt.asIntN(64,val>>BigInt(32)))|0;Z=val=>Number(BigInt.asIntN(32,val))|0;}let C7=Math.imul||function(a,b){let ah=a>>>16&0xFFFF;let al=a&0xFFFF;let bh=b>>>16&0xFFFF;let bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};let EC=(a,b)=>(a>>>0)/(b>>>0)>>>0;let BeM=(a,b)=>(a>>>0)%(b>>>0)>>>0;let Gy=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};let BhV
=(index,array)=>{if(index<0||index>=array.length){BhW();}return index;};let BhX=(index,array)=>{if(index>=array.length){BhW();}return index;};let BhY=index=>{if(index<0){BhW();}return index;};let G=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=HL();}return function(){superclass.call(this);};};let Q=(array,offset,count)=>{let result="";let limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;};let BhZ=array=>Q(array,0,array.length);let Bdu=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}};let A_w=string=>{let array=new Uint16Array(string.length);for(let i=0;i<array.length;++i){array[i]=string.charCodeAt(i);}return new BbJ(array);};let Bh0=(string,start,end)=>{if(start===0&&end===string.length){return string;}let result=start.substring(start,end -1)+start.substring(end -1,end);Bh1=Bh1+result.charCodeAt(result.length -
1)|0;};let Bh1=0;let Bg5=(target,method)=>target.t=method;let BH=cls=>Bbs(cls);let Bv=str=>str===null?null:Zs(str);let Cr=str=>str===null?null:str.oc;let Bh2=val=>{if(val===null){E(Bh3());}return val;};let BhA=()=>S();let HL=()=>D;let BhO=message=>Bh4(message);let BhK=t=>ATr(t);let Bg$=t=>A7M(t);let Bhc=()=>HL();let BhW=()=>E(BhO(Bv("")));let BgY=()=>E(Bh5());let AIE=()=>{{return AIr();}};let N3=t=>{{return ZF(t);}};let Bhd=(className,methodName,fileName,lineNumber)=>{{return null;}};let Bhe=(e,stack)=>{};let BhB;{BhB
=str=>str;}var A=Object.create(null);
function D(){this.qm=null;this.$id$=0;}
let Bh6=()=>{let a=new D();Dn(a);return a;}
let Hq=b=>{let c;if(b.qm===null){c=new Jr;Dq();c.qg=CG;b.qm=c;}b=b.qm;c=b.qg;if(c===null){Dq();b.qg=CG;}else{Dq();if(c!==CG){c=new Cb;c.n_=1;c.oa=1;c.od=C(0);E(c);}}b.qU=b.qU+1|0;}
let EU=b=>{let c,d,e;if(!H0(b)){c=b.qm;d=c.qg;Dq();if(d===CG){e=c.qU-1|0;c.qU=e;if(!e)c.qg=null;H0(b);return;}}b=new Km;b.n_=1;b.oa=1;E(b);}
let Bby=b=>{XD(b,1);}
let XD=(b,c)=>{let d,e,$p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.qm===null){d=new Jr;Dq();d.qg=CG;b.qm=d;}d=b.qm;if(d.qg===null){Dq();d.qg=CG;}e=d.qg;Dq();if(e===CG){d.qU=d.qU+c|0;return;}$p=1;case 1:ABZ(b,c);if(HA()){break _;}return;default:DU();}}Cn().s(b,c,d,e,$p);}
let A3O=(b,c,d)=>{let e,f,g;Dq();e=CG;f=b.qm;if(f===null){f=new Jr;f.qg=e;b.qm=f;if(e!==e)CG=e;CG.tU=F4();b=b.qm;b.qU=b.qU+c|0;b=null;d.v7.e(b);return;}if(f.qg===null){f.qg=e;if(e!==e)CG=e;CG.tU=F4();b=b.qm;b.qU=b.qU+c|0;b=null;d.v7.e(b);return;}if(f.s8===null)f.s8=APf();f=f.s8;g=new P_;g.Fk=e;g.Fl=b;g.Fi=c;g.Fj=d;d=g;f.push(d);}
let Bfk=b=>{AIZ(b,1);}
let AIZ=(b,c)=>{let d,e;if(!H0(b)){d=b.qm;e=d.qg;Dq();if(e===CG){c=d.qU-c|0;d.qU=c;if(c>0)return;d.qg=null;d=d.s8;if(d!==null&&!(d.length?0:1)){d=new Rr;d.G1=b;QQ(d,0);}else H0(b);return;}}b=new Km;b.n_=1;b.oa=1;E(b);}
let ATP=b=>{let c,d,e;if(!H0(b)){c=b.qm;if(c.qg===null){b=c.s8;if(b!==null&&!(b.length?0:1)){b=c.s8.shift();BR();if(b!==null&&!(b instanceof HL()))b=C_(b);d=b;c.s8=null;b=d.Fk;c=d.Fl;e=d.Fi;d=d.Fj;Dq();if(CG!==b)CG=b;CG.tU=F4();c=c.qm;c.qg=b;c.qU=c.qU+e|0;b=null;d.v7.e(b);}return;}}}
let H0=a=>{let b,c;b=a.qm;if(b===null)return 1;a:{if(b.qg===null){c=b.s8;if(!(c!==null&&!(c.length?0:1))){b=b.Dl;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.qm=null;return 1;}
let Dn=a=>{return;}
let AR_=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new CN;c.oE=b;d=c;b.classObject=d;}}return c;}
let A0g=a=>{let b,c;b=a;if(!b.$id$){c=Fd();b.$id$=c;}return a.$id$;}
let AQG=(a,b)=>{return a!==b?0:1;}
let AKR=a=>{let b,c,d,e;b=a;if(!b.$id$){c=Fd();b.$id$=c;}d=BA(a.$id$,4);b=new L;b.ob=H(16);F(b,b.n$,C(1));e=b.n$;if(d===null)d=C(2);F(b,e,d);return Bi(b);}
let ABD=a=>{let b,c;b=a;if(!b.$id$){c=Fd();b.$id$=c;}return a.$id$;}
let APD=a=>{let b,c,d;if(!Fk(a,Gv)&&a.constructor.$meta.item===null){b=new QM;b.n_=1;b.oa=1;E(b);}b=AIQ(a);c=b;d=Fd();c.$id$=d;return b;}
let NS=a=>{let b,c,d;b:{b=a.qm;if(b!==null){c=b.qg;Dq();if(c===CG){d=1;break b;}}d=0;}if(!d){b=new Km;b.n_=1;b.oa=1;E(b);}b=b.Dl;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BR();if(c!==null&&!(c instanceof HL()))c=C_(c);c=c;if(!c.n())QQ(c,0);}a.qm.Dl=null;}
let ABZ=(b,c)=>{let thread=Cn();let javaThread=AIE();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;N3(javaThread);thread.resume();};callback.iP=e=>{thread.attribute=AUp(e);N3(javaThread);thread.resume();};callback=Yw(callback);thread.suspend(()=>{try {A3O(b,c,callback);;}catch(Rx){callback.iP(Rx);}});return null;}
let AAv=G();
let Bfb=b=>{let c;c=new BQ;c.wZ=1.0;c.wY=0.0;AJA=c;c=new BQ;c.wZ=0.0;c.wY=1.0;AJy=c;c=new BQ;c.wZ=0.0;c.wY=0.0;AN2=c;A1l=new BQ;A5i=new BQ;ASx=new BQ;ASH=new BQ;APY=new BQ;A4j=new BQ;A0P=new Fh;A5L=new Fh;AUq=0.10000000149011612;AA8();ANJ=BH(Fr);AKA=Bt(If,111);A6k=new BQ;A6z=new BQ;A06=new D;AEw();AXv=BH(Es);ADn();AZF=BH(AQ0);AIW=BH(AJ$);A6N=Bt(Eu,128);AB1();AFz();Y=1;ANw=new BQ;ANy=new BQ;ANA=new BQ;ARd=0.4000000059604645;AXu=0.10000000149011612;A7$=new BQ;AOG=new BQ;A3I=new BQ;AWs=new BQ;AWw=new BQ;AWv=new BQ;WY();AGm();Mi
=0.0;A2G=CT(3);Bl=1.0;Bo=1.0;Bz=1.0;D1=1;AWy=new K7;A1p=new K6;c=new JI;c.BW=BW(1);DY=c;c=new Kx;c.BW=BW(1);Kk=c;AWI=BH(A0S);XF();ABb();c=new CZ;c.o8=0;c.pw=0;DX=c;c=new CZ;c.o8=1;c.pw=0;DK=c;AUw=BW(0);ZK();Wt=1;M5=null;ADW();AEK();AGJ();ZT();XT();c=new Gb;c.yA=1;A3X=c;c=new Gb;c.yA=0;AQY=c;AM9=BH(Kp);c=BcK(C(3));c.Bd=512;c.wf=520;AC5(new M9,BcC(),c);}
let Hd=G();
let Baq=0;let Bea=0;let Bc_=0;let BgH=0;let BdL=0;let Bh7=()=>{Bh7=Bj(Hd);A23();}
let A23=()=>{Baq=DP(Bv(navigator.platform),C(4));Bea=DP(Bv(navigator.platform),C(5));Bc_=DP(Bv(navigator.platform),C(6));BgH=!DP(Bv(navigator.platform),C(7))&&!DP(Bv(navigator.platform),C(8))?0:1;BdL=!DP(Bv(navigator.platform),C(9))&&!DP(Bv(navigator.platform),C(10))&&!DP(Bv(navigator.platform),C(11))?0:1;}
let RH=G(0);
let Nn=G();
let D0=G(0);
let AAq=G(Nn);
let D_=G(0);
let G6=G();
let DO=G(0);
let CI=G(0);
function BV(){let a=this;D.call(a);a.ol=null;a.oi=0;}
let AAn=a=>{return a.oi;}
let A15=a=>{return a.ol;}
let Fy=G(BV);
let Bco=null;let BcI=null;let BaA=null;let A_i=null;let Bd5=()=>{Bd5=Bj(Fy);ATF();}
let ATF=()=>{let b,c,d;b=new Fy;Bd5();b.ol=C(12);b.oi=0;Bco=b;c=new Fy;c.ol=C(13);c.oi=1;BcI=c;d=new Fy;d.ol=C(14);d.oi=2;BaA=d;A_i=R(Fy,[b,c,d]);}
let G$=G();
let Np=G(0);
let Kn=G(G$);
let A1l=null;let AOF=()=>{A1l=new BQ;}
let HE=G(0);
let EJ=G(0);
let HS=G();
let Hp=G(0);
let CB=G();
let A5i=null;let A9G=()=>{A5i=new BQ;}
let H3=G(CB);
let AF7=G(H3);
let GN=G(BV);
let AQ1=null;let A9P=null;let ATM=null;let A9u=()=>{A9u=Bj(GN);AJD();}
let AJD=()=>{let b,c;b=new GN;A9u();b.ol=C(15);b.oi=0;AQ1=b;c=new GN;c.ol=C(16);c.oi=1;A9P=c;ATM=R(GN,[b,c]);}
let Mf=G(0);
let Kt=G(0);
let Ho=G(0);
let Ek=G();
let AG2=G(Ek);
let L9=G(HS);
let Im=G();
let ASx=null;let ASH=null;let A1n=()=>{ASx=new BQ;ASH=new BQ;}
let ADb=G();
let ABI=G();
let Ve=G(0);
let M6=G();
let AFS=G(M6);
let AEp=G(G6);
let S7=G();
let Bc2=null;let Bh8=()=>{Bh8=Bj(S7);A4h();}
let A4h=()=>{let b,c;A9u();b=X((ATM.t()).data.length);c=b.data;Bc2=b;c[AQ1.oi]=1;c[A9P.oi]=2;}
let AFd=G();
let T4=G();
let A$9=null;let Bh9=()=>{Bh9=Bj(T4);AZH();}
let AZH=()=>{let b,c;AFt();b=X((ACP.t()).data.length);c=b.data;A$9=b;c[WT.oi]=1;c[ACa.oi]=2;c[ADQ.oi]=3;}
let AG1=G(Ek);
let GT=G();
let Qi=G(GT);
let Hs=G();
let Bb_=0;let BcF=0;let BeW=0;let BcG=0;let Bef=0;let BbY=()=>{BbY=Bj(Hs);A9T();}
let BI=()=>{let b;BbY();b=Bd.wd.data;return !b[59]&&!b[60]?0:1;}
let A9T=()=>{Bb_=DP(Bv(navigator.platform),C(4));BcF=DP(Bv(navigator.platform),C(5));BeW=DP(Bv(navigator.platform),C(6));BcG=!DP(Bv(navigator.platform),C(7))&&!DP(Bv(navigator.platform),C(8))?0:1;Bef=!DP(Bv(navigator.platform),C(9))&&!DP(Bv(navigator.platform),C(10))&&!DP(Bv(navigator.platform),C(11))?0:1;}
let LC=G();
let Vb=G(H3);
let APY=null;let A3D=()=>{APY=new BQ;}
let SY=G();
let A4j=null;let AV_=()=>{A4j=new BQ;}
let KQ=G();
let BdK=null;let Bc9=null;let BgF=null;let Bh$=()=>{Bh$=Bj(KQ);A7O();}
let A7O=()=>{let b;b=new CQ;b.pz=1;b.os=Bt(D,16);BdK=b;b=new Bf;BU();Bc9=b;BgF=new Fh;}
let NB=G();
let Kg=G(GT);
let Rj=G(GT);
let ED=G(CB);
let AUq=0.0;let A8W=()=>{AUq=0.10000000149011612;}
let Ra=G(Kg);
let WF=G(G6);
let Lb=G(0);
let Yz=G(G6);
let XG=G();
let N2=G();
let Bdt=null;let Bh_=()=>{Bh_=Bj(N2);A8_();}
let A8_=()=>{let b,c;AFt();b=X((ACP.t()).data.length);c=b.data;Bdt=b;c[AYQ.oi]=1;c[A4u.oi]=2;c[AUx.oi]=3;c[WT.oi]=4;c[ACa.oi]=5;c[ADQ.oi]=6;c[ALO.oi]=7;c[ANf.oi]=8;c[A7Q.oi]=9;c[A1S.oi]=10;}
let Db=G(BV);
let WT=null;let ACa=null;let ADQ=null;let ALO=null;let A7Q=null;let A1S=null;let ANf=null;let AYQ=null;let A4u=null;let AUx=null;let ACP=null;let AFt=()=>{AFt=Bj(Db);ALi();}
let ALi=()=>{let b,c,d,e,f,g,h,i,j,k;b=new Db;AFt();b.ol=C(17);b.oi=0;WT=b;c=new Db;c.ol=C(18);c.oi=1;ACa=c;d=new Db;d.ol=C(19);d.oi=2;ADQ=d;e=new Db;e.ol=C(20);e.oi=3;ALO=e;f=new Db;f.ol=C(21);f.oi=4;A7Q=f;g=new Db;g.ol=C(22);g.oi=5;A1S=g;h=new Db;h.ol=C(23);h.oi=6;ANf=h;i=new Db;i.ol=C(24);i.oi=7;AYQ=i;j=new Db;j.ol=C(25);j.oi=8;A4u=j;k=new Db;k.ol=C(26);k.oi=9;AUx=k;ACP=R(Db,[b,c,d,e,f,g,h,i,j,k]);}
let CW=G();
let F8=G(CW);
let X0=G(F8);
let Zf=G(F8);
let DE=G(CW);
let F2=G(DE);
let ABR=G(F2);
let ACq=G();
let Mn=G(CW);
let ACQ=G(Mn);
let ADA=G(CW);
let Yv=G(CW);
let AGq=G(CW);
let AGH=G();
let Nb=G(CW);
let Yl=G(Nb);
let WS=G(DE);
let AGZ=G(DE);
let AAr=G(F2);
let AF4=G(CW);
let Zr=G(F2);
let AHK=G(DE);
let AAG=G(DE);
let Xt=G(CW);
let Yf=G(DE);
let Yh=G(CW);
let ADS=G(CW);
let AET=G(F8);
let AB6=G(DE);
let AAT=G(CW);
let AFP=G(F2);
let ADK=G(F8);
let Y8=G(CW);
let Wr=G(DE);
let AEu=G(DE);
let St=G();
let Beu=null;let AA8=()=>{Beu=R(CN,[BH(FA),BH(BD),BH(Tz),BH(Qi),BH(Rj),BH(Kg),BH(Ra),BH(Hl),BH(Tk),BH(QS),BH(Ur),BH(Py),BH(U5),BH(KY),BH(Q$),BH(T1),BH(R0),BH(QZ),BH(Hr),BH(Tv),BH(UE),BH(P1),BH(Tc),BH(Sa)]);}
let DM=G(Kn);
let D2=G(DM);
let A_t=null;let BaW=null;let BfE=null;let BgJ=null;let Bbq=null;let A_a=null;let Bai=null;let Be5=null;let Bia=()=>{Bia=Bj(D2);A76();}
let A76=()=>{let b,c;b=new BD;FQ();b.pV=0.0;b.pU=0.0;b.pT=1.0;b.pS=1.0;Eh(b);A_t=b;b=new BD;b.pV=1.0;b.pU=0.0;b.pT=0.0;b.pS=1.0;Eh(b);BaW=b;b=new BD;b.pV=0.0;b.pU=1.0;b.pT=0.0;b.pS=1.0;Eh(b);BfE=b;b=new Rf;c=new CQ;c.pz=0;c.os=Bt(D,16);b.qx=c;b.sz=2147483647;BgJ=b;b=new Re;AIM();Bbq=b;A_a=new Rd;Bai=new Rc;Be5=new Rb;}
let GR=G(D2);
let Ls=G(GR);
let AC4=G(Ls);
let AAg=G(CB);
let LU=G(DM);
let PP=G(0);
let FY=G();
let Xo=G(FY);
let D8=G(G$);
let ACe=G(D8);
let AAf=G(CB);
let Ce=G();
let Bga=null;let BbS=null;let Bcb=null;let A_9=null;let BeC=null;let Bep=null;let BbQ=null;let AIM=()=>{AIM=Bj(Ce);AYD();}
let AYD=()=>{let b;b=new If;AIM();b.Jl=0.0;Bga=b;BbS=new T$;Bcb=new T7;A_9=new T6;BeC=new T9;Bep=new T8;BbQ=new T5;}
let T9=G(Ce);
let AFT=G(Ce);
let MA=G(ED);
let AEP=G(MA);
let Rd=G(Ce);
let AHD=G(CB);
let I6=G(D2);
let A6k=null;let A6z=null;let AZB=()=>{A6k=new BQ;A6z=new BQ;}
let AFU=G(Ce);
let HD=G(0);
let Fh=G();
let A0P=null;let A5L=null;let ATB=()=>{A0P=new Fh;A5L=new Fh;}
let E4=G(Fh);
let A$6=null;let AV8=()=>{AV8=Bj(E4);VW();}
let Bib=()=>{let a=new E4();Qe(a);return a;}
let Qe=a=>{AV8();}
let VW=()=>{let b,c,d,e,$$je;M0();b=Gh;c=Dm(b,BH(E4));b=c<0?null:b.qa.data[c];if(b===null){b=new HW;d=new CQ;d.pz=0;d.os=Bt(D,4);b.qx=d;b.sz=100;c:{try{d=LP(BH(E4),null);break c;}catch($$e){$$je=BG($$e);if($$je instanceof Da){}else{throw $$e;}}try{d=MS(BH(E4),null);JN(d,1);break c;}catch($$e){$$je=BG($$e);if($$je instanceof Eo){}else{throw $$e;}}d=null;}b.rd=d;if(d===null){b=new B0;d=new L;d.ob=H(16);F(d,d.n$,C(27));if(BH(E4).oQ===null)BH(E4).oQ=Bv(BH(E4).oE.$meta.name);e=BH(E4).oQ;F(d,d.n$,e);e=Bi(d);b.n_=
1;b.oa=1;b.od=e;E(b);}B2(Gh,BH(E4),b);}A$6=b;}
let Xr=G(FY);
let Ge=G(D8);
let ANw=null;let ANy=null;let ANA=null;let ARd=0.0;let AXu=0.0;let A9$=()=>{ANw=new BQ;ANy=new BQ;ANA=new BQ;ARd=0.4000000059604645;AXu=0.10000000149011612;}
let WW=G(Ge);
let AEA=G(CB);
let O8=G(0);
let AGs=G();
let Hl=G();
let Hr=G(Hl);
let Ur=G(Hr);
let L6=G(D8);
let XO=G(L6);
let AH_=G(LU);
let MD=G(DM);
let ABt=G(GR);
let NM=G(D8);
let Rb=G(Ce);
let UE=G();
let ADP=G();
let AEQ=G(CB);
let YR=G(Ek);
let AEe=G();
let ZL=G(CB);
let AA4=G(ED);
let AEx=G(Im);
let T5=G(Ce);
let T8=G(Ce);
let TI=G(0);
let KY=G();
let R0=G(KY);
let Xp=G(FY);
let AAe=G(LC);
let AAh=G(NB);
let AHE=G(CB);
let AHF=G(ED);
let Rc=G(Ce);
let Fc=G();
let BaD=null;let Be_=null;let BaB=null;let Be9=null;let A$$=null;let A_L=null;let Bbj=null;let A_f=null;let Bfp=null;let Bic=()=>{Bic=Bj(Fc);ALz();}
let ALz=()=>{let b;b=new KV;b.DX=0.0;BaD=b;b=new KV;b.DX=1.0;Be_=b;Gj();BaB=Gr.data[128];Gj();b=Gr.data[129];Be9=b;A$$=b;Gj();A_L=Gr.data[130];Gj();Bbj=Gr.data[132];Gj();A_f=Gr.data[136];Gj();Bfp=Gr.data[144];}
let Tk=G(Hr);
let Yc=G(CB);
let Wh=G(Ek);
let T$=G(Ce);
let ADe=G(DM);
let AEy=G(CB);
let P1=G();
function If(){Ce.call(this);this.Jl=0.0;}
let AKA=null;let A9c=()=>{AKA=Bt(If,111);}
let XB=G(MD);
let T6=G(Ce);
let Ts=G(D8);
let A7$=null;let AVa=()=>{A7$=new BQ;}
let AED=G(L9);
let QZ=G();
let MI=G(D8);
let Bde=null;let BdX=null;let Bid=()=>{Bid=Bj(MI);AX0();}
let AX0=()=>{let b,c;b=new BD;FQ();Bde=b;b=new DH;E7();c=new CQ;c.pz=1;c.os=Bt(D,1);b.qi=c;c=new Et;c.ra=1;c.pE=X(2);b.pW=c;BdX=b;}
let Sa=G();
let AFV=G(Ce);
let Re=G(Ce);
let AGK=G(I6);
let T7=G(Ce);
let Py=G();
let AH5=G();
let Er=G(BV);
let BaG=null;let A_s=null;let BbA=null;let BcX=null;let A_F=null;let BfB=null;let Bgb=()=>{Bgb=Bj(Er);ASk();}
let ASk=()=>{let b,c,d,e,f;b=new Er;Bgb();b.ol=C(28);b.oi=0;BaG=b;c=new Er;c.ol=C(29);c.oi=1;A_s=c;d=new Er;d.ol=C(30);d.oi=2;BbA=d;e=new Er;e.ol=C(31);e.oi=3;BcX=e;f=new Er;f.ol=C(32);f.oi=4;A_F=f;BfB=R(Er,[b,c,d,e,f]);}
let AH8=G(Ce);
let AEq=G(Ek);
function D6(){let a=this;D.call(a);a.sz=0;a.xm=0;a.qx=null;}
let VB=a=>{let b,c,d,e,f,g,h,$$je;a:{b=a.qx;c=b.oj;if(c){if(c){c=c-1|0;b.oj=c;d=b.os.data;b=d[c];d[c]=null;break a;}b=new Cb;b.n_=1;b.oa=1;b.od=C(33);E(b);}try{b=K2(a.rd,null);break a;}catch($$e){$$je=BG($$e);if($$je instanceof Da){h=$$je;e=new Bc;b=new L;b.ob=H(16);F(b,b.n$,C(34));f=a.rd.rS.rq;if(f.oQ===null)f.oQ=Bv(f.oE.$meta.name);g=f.oQ;F(b,b.n$,g);b=Bi(b);e.n_=1;e.oa=1;e.od=b;e.p$=h;E(e);}else{throw $$e;}}}return b;}
let Js=(a,b)=>{let c,d,e;if(b===null){b=new V;b.n_=1;b.oa=1;b.od=C(35);E(b);}c=a.qx;if(c.oj<a.sz){Dk(c,b);d=a.xm;e=a.qx.oj;if(d>e)e=d;a.xm=e;if(Fk(b,D_))b.D();}else if(Fk(b,D_))b.D();}
let AA2=(a,b)=>{let c,d,e,f,g;if(b===null){b=new V;b.n_=1;b.oa=1;b.od=C(36);E(b);}c=a.qx;d=a.sz;e=0;f=b.oj;while(e<f){if(e>=b.oj){g=new O;c=new L;c.ob=H(16);F(c,c.n$,C(37));N(c,c.n$,e,10);F(c,c.n$,C(38));d=b.oj;N(c,c.n$,d,10);b=Bi(c);g.n_=1;g.oa=1;g.od=b;E(g);}g=b.os.data[e];if(g!==null){if(c.oj<d){Dk(c,g);if(Fk(g,D_))g.D();}else if(Fk(g,D_))g.D();}e=e+1|0;}d=a.xm;e=c.oj;if(d>e)e=d;a.xm=e;}
let Rf=G(D6);
let Wd=G();
let U5=G();
let Tz=G();
let T1=G();
let KS=G(CB);
let AOG=null;let AJs=()=>{AOG=new BQ;}
let Wg=G(Ek);
let AHG=G(NM);
let We=G(0);
let Yd=G(CB);
let AIj=G(DM);
let Ze=G(DM);
let AEE=G(ED);
let Ma=G();
let Xn=G(Ma);
let AHx=G(G$);
let VY=G(CB);
let AGQ=G(GR);
let YX=G(CB);
let AHY=G(ED);
let QS=G(Hl);
let Zh=G(DM);
let Tv=G();
let Tc=G();
let YS=G(D8);
let AA5=G(HS);
let VZ=G(CB);
let Ul=G(DM);
let A3I=null;let A33=()=>{A3I=new BQ;}
let ABc=G(KS);
let V0=G(D2);
let Xq=G(FY);
let ABu=G();
let Q$=G();
let EL=G();
let Bdq=null;let A_o=null;let Bdv=null;let Bcu=null;let Bcw=null;let Bcv=null;let BdO=null;let Ban=null;let BgA=null;let Bc8=null;let Bcz=null;let Bie=()=>{Bie=Bj(EL);A4o();}
let A4o=()=>{let b;Bdq=CT(16);b=new Fs;QF();b.uT=0.0;b.uQ=0.0;b.uR=0.0;b.uS=1.0;A_o=b;b=new Fs;b.uT=0.0;b.uQ=0.0;b.uR=0.0;b.uS=1.0;Bdv=b;b=new Bf;BU();Bcu=b;Bcw=new Bf;Bcv=new Bf;BdO=new Bf;Ban=FN();BgA=new Bf;Bc8=new Bf;Bcz=new Bf;}
let By=G();
let Bdl=null;let Bb0=null;let BdN=null;let Bb2=null;let BdG=null;let Bd1=null;let Bez=null;let BcW=null;let BeG=null;let A_2=null;let Bbf=null;let Baa=null;let Bd0=null;let Bda=null;let BcR=null;let Bft=null;let Bee=null;let Bd3=null;let BdH=null;let Bfo=null;let Bd2=null;let Bgg=null;let Baj=null;let BeK=null;let Bcm=null;let Ba_=null;let A$8=null;let BcV=null;let BbZ=null;let Bao=null;let BgK=null;let BbB=null;let Bgo=null;let BaU=null;let Bfq=null;let BgR=null;let Bek=null;let Ber=null;let A_j=null;let BfI
=null;let BgM=null;let Bgs=null;let BbE=null;let BcM=null;let EK=()=>{EK=Bj(By);AYU();}
let AYU=()=>{let b,c;b=new QB;EK();Bdl=b;Bb0=new Qt;BdN=new Qs;b=new Qv;Bb2=b;BdG=b;b=new FD;b.rc=2;Bd1=b;b=new I8;b.rc=2;Bez=b;BcW=b;b=new Ii;b.rc=2;BeG=b;A_2=b;Bbf=new Qu;Baa=new Qx;b=new FD;b.rc=3;Bd0=b;b=new I8;b.rc=3;Bda=b;b=new Ii;b.rc=3;BcR=b;Bft=new Qw;Bee=new Qz;b=new FD;b.rc=4;Bd3=b;b=new I8;b.rc=4;BdH=b;b=new Ii;b.rc=4;Bfo=b;b=new FD;b.rc=5;Bd2=b;b=new I8;b.rc=5;Bgg=b;b=new Ii;b.rc=5;Baj=b;BeK=new Qy;Bcm=new TV;Ba_=new TW;b=new HM;b.y2=2.0;b.x8=10.0;c=D7(2.0,(-10.0));b.yD=c;b.x$=1.0/(1.0-c);A$8=b;b
=new PY;b.y2=2.0;b.x8=10.0;c=D7(2.0,(-10.0));b.yD=c;b.x$=1.0/(1.0-c);BcV=b;b=new Rq;Zl(b,2.0,10.0);BbZ=b;Bao=BdC(2.0,5.0);BgK=BdY(2.0,5.0);BbB=Bbp(2.0,5.0);Bgo=BaK();BaU=Bd9();Bfq=BfJ();BgR=Bb3(2.0,10.0,7,1.0);Bek=BdQ(2.0,10.0,6,1.0);Ber=Bfg(2.0,10.0,7,1.0);A_j=Bax(1.5);BfI=Bgx(2.0);BgM=Bfa(2.0);Bgs=BaQ(4);BbE=Bbk(4);BcM=BdI(4);}
function Wv(){By.call(this);this.JS=0.0;}
let Bgx=a=>{let b=new Wv();A1c(b,a);return b;}
let A1c=(a,b)=>{EK();a.JS=b;}
let AEr=G();
let Qw=G(By);
let AHQ=G();
function FD(){By.call(this);this.rc=0;}
let I8=G(FD);
let Ii=G(FD);
let JM=G(0);
let WM=G();
let Qz=G(By);
let AAl=G();
let Qv=G(By);
function Ik(){let a=this;By.call(a);a.DK=0.0;a.CF=0.0;a.CL=0.0;a.El=0.0;}
let Bb3=(a,b,c,d)=>{let e=new Ik();AO_(e,a,b,c,d);return e;}
let AO_=(a,b,c,d,e)=>{EK();a.DK=b;a.CF=c;a.CL=e;a.El=d*3.1415927410125732*(d%2|0?(-1):1);}
let Qu=G(By);
let Qt=G(By);
let KH=G();
let AWs=null;let AWw=null;let AWv=null;let ALV=()=>{AWs=new BQ;AWw=new BQ;AWv=new BQ;}
let ABG=G(D6);
let JB=G(0);
function BQ(){let a=this;D.call(a);a.wZ=0.0;a.wY=0.0;}
let AJA=null;let AJy=null;let AN2=null;let AZN=()=>{let b;b=new BQ;b.wZ=1.0;b.wY=0.0;AJA=b;b=new BQ;b.wZ=0.0;b.wY=1.0;AJy=b;b=new BQ;b.wZ=0.0;b.wY=0.0;AN2=b;}
let AFH=G(By);
let Bd9=()=>{let a=new AFH();A5F(a);return a;}
let A5F=a=>{EK();}
function HM(){let a=this;By.call(a);a.y2=0.0;a.x8=0.0;a.yD=0.0;a.x$=0.0;}
let BdC=(a,b)=>{let c=new HM();Zl(c,a,b);return c;}
let Zl=(a,b,c)=>{EK();a.y2=b;a.x8=c;c=D7(b, -c);a.yD=c;a.x$=1.0/(1.0-c);}
let AFh=G();
let QB=G(By);
let Rq=G(HM);
let Bbp=(a,b)=>{let c=new Rq();AOh(c,a,b);return c;}
let AOh=(a,b,c)=>{EK();a.y2=b;a.x8=c;c=D7(b, -c);a.yD=c;a.x$=1.0/(1.0-c);}
let Xx=G();
let FU=G(BV);
let A_6=null;let Beg=null;let Bb$=null;let Bbi=null;let Bb1=()=>{Bb1=Bj(FU);A9t();}
let A9t=()=>{let b,c,d;b=new FU;Bb1();b.ol=C(39);b.oi=0;A_6=b;c=new FU;c.ol=C(40);c.oi=1;Beg=c;d=new FU;d.ol=C(41);d.oi=2;Bb$=d;Bbi=R(FU,[b,c,d]);}
let P6=G();
let Bcx=null;let Bif=()=>{Bif=Bj(P6);A3w();}
let A3w=()=>{let b;b=new Bf;BU();Bcx=b;}
function Jg(){let a=this;By.call(a);a.In=null;a.H$=null;}
let BdI=a=>{let b=new Jg();Pr(b,a);return b;}
let Pr=(a,b)=>{let c,d,e,f,g;EK();if(b>=2&&b<=5){d:{c=CT(b);a.In=c;d=CT(b);e=d.data;a.H$=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break d;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break d;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break d;default:break d;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new V;g=new L;g.ob=H(16);F(g,g.n$,C(42));N(g,g.n$,b,10);g=Bi(g);f.n_=1;f.oa=1;f.od=g;E(f);}
let Ya=G(Jg);
let Bbk=a=>{let b=new Ya();A3p(b,a);return b;}
let A3p=(a,b)=>{Pr(a,b);}
let TV=G(By);
let Y6=G();
let Qs=G(By);
function E1(){let a=this;D.call(a);a.yY=0.0;a.yX=0.0;a.y0=0.0;a.yW=0.0;}
let Bf6=null;let Bf3=null;let Bf4=null;let Bf5=null;let BdD=null;let BbC=()=>{BbC=Bj(E1);AWc();}
let AWc=()=>{let b;b=new E1;BbC();b.yY=1.0;b.yX=0.0;b.y0=0.0;b.yW=0.0;Bf6=b;b=new E1;b.yY=0.0;b.yX=1.0;b.y0=0.0;b.yW=0.0;Bf3=b;b=new E1;b.yY=0.0;b.yX=0.0;b.y0=1.0;b.yW=0.0;Bf4=b;b=new E1;b.yY=0.0;b.yX=0.0;b.y0=0.0;b.yW=1.0;Bf5=b;b=new E1;b.yY=0.0;b.yX=0.0;b.y0=0.0;b.yW=0.0;BdD=b;}
let ACg=G(Ik);
let BdQ=(a,b,c,d)=>{let e=new ACg();AJr(e,a,b,c,d);return e;}
let AJr=(a,b,c,d,e)=>{EK();a.DK=b;a.CF=c;a.CL=e;a.El=d*3.1415927410125732*(d%2|0?(-1):1);}
function XX(){By.call(this);this.I4=0.0;}
let Bax=a=>{let b=new XX();AKf(b,a);return b;}
let AKf=(a,b)=>{EK();a.I4=b*2.0;}
let WG=G();
let ABh=G();
let Qx=G(By);
function AHz(){By.call(this);this.It=0.0;}
let Bfa=a=>{let b=new AHz();A3Q(b,a);return b;}
let A3Q=(a,b)=>{EK();a.It=b;}
let AFI=G(By);
let BfJ=()=>{let a=new AFI();AP3(a);return a;}
let AP3=a=>{EK();}
let XV=G(Ik);
let Bfg=(a,b,c,d)=>{let e=new XV();ALL(e,a,b,c,d);return e;}
let ALL=(a,b,c,d,e)=>{EK();a.DK=b;a.CF=c;a.CL=e;a.El=d*3.1415927410125732*(d%2|0?(-1):1);}
let K1=G();
let Bah=null;let A_n=null;let BgB=null;let Big=()=>{Big=Bj(K1);AXF();}
let AXF=()=>{let b,c,d,e,f,g;Bah=Bt(Bf,15);b=Bt(Bf,8);A_n=b;c=Bt(Bf,9);d=c.data;BgB=c;e=0;f=d.length;while(e<f){g=new Bf;BU();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bf;BU();b[e]=g;e=e+1|0;}}
function La(){let a=this;D.call(a);a.FK=null;a.FU=null;a.FA=null;a.Hm=null;}
let Bac=null;let BcO=()=>{BcO=Bj(La);A7T();}
let AFX=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.FK;e=b.on;f=c.on;if(e<f)f=e;e=b.op;g=c.op;if(e<g)g=e;e=b.oo;h=c.oo;if(e<h)h=e;d.on=f;d.op=g;d.oo=h;i=a.FU;e=b.on;g=c.on;if(e>g)g=e;e=b.op;h=c.op;if(e>h)h=e;e=b.oo;f=c.oo;if(e>f)f=e;i.on=g;i.op=h;i.oo=f;b=a.FA;h=d.on;j=d.op;k=d.oo;b.on=h;b.op=j;b.oo=k;e=i.on;f=i.op;g=i.oo;h=h+e;j=j+f;k=k+g;b.on=h;b.op=j;b.oo=k;f=h*0.5;g=j*0.5;e=k*0.5;b.on=f;b.op=g;b.oo=e;b=a.Hm;g=i.on;h=i.op;j=i.oo;b.on=g;b.op=h;b.oo=j;e=d.on;f=d.op;k=d.oo;g=g-e;e=h-f;f=j-k;b.on=g;b.op=e;b.oo=f;return a;}
let A7T=()=>{let b;b=new Bf;BU();Bac=b;}
function Nd(){let a=this;D.call(a);a.I2=null;a.JG=null;}
let Bc1=null;let Be7=()=>{Be7=Bj(Nd);ATJ();}
let ATJ=()=>{let b;b=new Bf;BU();Bc1=b;}
let ACU=G();
let VN=G();
let ZG=G();
let AD_=G();
let Qm=G();
let Beo=null;let Zk=()=>{Zk=Bj(Qm);AO3();}
let YA=b=>{Zk();return MJ.data[(b*2607.594482421875|0)&16383];}
let AGN=b=>{Zk();return MJ.data[((b+1.5707963705062866)*2607.594482421875|0)&16383];}
let MY=b=>{let c;Zk();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let AO3=()=>{let b,c,d,e;b=new TP;c=B8(BP(I(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),I(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(Dh(c,M))c=B(0, 2147483648);d=W(Bk(c,T(c,33)),B(3981806797, 4283543511));d=W(Bk(d,T(d,33)),B(444984403, 3301882366));e=Bk(d,T(d,33));d=W(Bk(e,T(e,33)),B(3981806797, 4283543511));d=W(Bk(d,T(d,33)),B(444984403, 3301882366));d=Bk(d,T(d,33));b.HX=e;b.HY=d;Beo=b;}
let C3=G();
let A_c=null;let A_d=null;let A_e=null;let A_0=null;let BfW=null;let Ba4=null;let A_p=null;let A_q=null;let BeF=null;let BeD=null;let Bat=null;let Bau=null;let Bav=null;let Baw=null;let BeH=null;let BeE=null;let Ba6=null;let Bej=null;let Bfy=null;let BaI=null;let Bgf=null;let Bge=null;let Bgd=null;let BaR=null;let Bih=()=>{Bih=Bj(C3);ALT();}
let ALT=()=>{let b,c;b=new Bf;BU();A_c=b;A_d=new Bf;A_e=new Bf;b=new KO;b.AX=1;b.pL=CT(16);A_0=b;b=new KO;b.AX=1;b.pL=CT(16);BfW=b;Ba4=new BQ;A_p=new BQ;A_q=new BQ;BeF=new BQ;BeD=new BQ;Bat=new BQ;Bau=new BQ;Bav=new BQ;Baw=new BQ;b=new JX;c=new Bf;b.s0=c;b.vf=0.0;c.on=0.0;c.op=0.0;c.oo=0.0;b.vf=0.0;BeH=b;BeE=new Bf;Ba6=new Bf;Bej=new Bf;Bfy=new Bf;BaI=new Bf;Bgf=new Bf;Bge=new Bf;Bgd=new Bf;BaR=new Bf;}
let Wj=G();
let ADF=G(Jg);
let BaQ=a=>{let b=new ADF();A45(b,a);return b;}
let A45=(a,b)=>{Pr(a,b);}
function EO(){D.call(this);this.qb=null;}
let AX6=null;let BeU=null;let Bcj=null;let Tg=null;let Nc=null;let AEv=null;let A9j=null;let AZs=null;let Bbt=null;let BcN=null;let Bfd=null;let HH=()=>{HH=Bj(EO);AXV();}
let FN=()=>{let a=new EO();ZU(a);return a;}
let ZU=a=>{let b,c;HH();b=CT(16);c=b.data;a.qb=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;}
let Hg=(a,b)=>{let c;c=b.data;b=a.qb.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;}
let Qa=(a,b)=>{let c,d,e,f,g;HH();c=AX6;d=c.data;e=a.qb.data;f=e[0];g=b.qb.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]
*g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Hg(a,c);}
let Lp=a=>{let b;b=a.qb.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;}
let AFn=(a,b,c,d,e)=>{TO(a,b,b+d,c,c+e,0.0,1.0);return a;}
let TO=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Lp(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.qb.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;}
let W$=(a,b,c)=>{let d,e,f,g,h,i;HH();d=Tg;e=b.on;f=b.op;g=b.oo;d.on=e;d.op=f;d.oo=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cf(f);f=d.on*e;g=d.op*e;e=d.oo*e;d.on=f;d.op=g;d.oo=e;}d=Nc;e=b.on;f=b.op;g=b.oo;d.on=e;d.op=f;d.oo=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Cf(f);f=d.on*e;g=d.op*e;e=d.oo*e;d.on=f;d.op=g;d.oo=e;}b=SH(Nc,c);e=b.on;e=e*e;f=b.op;e=e+f*f;f=b.oo;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Cf(e);h=b.on*g;e=b.op*g;f=b.oo*g;b.on=h;b.op=e;b.oo=f;}b=AEv;c=Nc;e=c.on;f=c.op;g=c.oo;b.on=e;b.op=f;b.oo=g;b
=SH(b,Tg);e=b.on;e=e*e;f=b.op;e=e+f*f;f=b.oo;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Cf(f);f=b.on*e;g=b.op*e;e=b.oo*e;b.on=f;b.op=g;b.oo=e;}Lp(a);i=a.qb.data;b=Nc;i[0]=b.on;i[4]=b.op;i[8]=b.oo;b=AEv;i[1]=b.on;i[5]=b.op;i[9]=b.oo;b=Tg;i[2]= -b.on;i[6]= -b.op;i[10]= -b.oo;return a;}
let VG=(b,c)=>{let d,e,f;HH();d=b.data;c=c.data;e=CT(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]
*c[5]+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];CX(e,0,b,0,16);}
let AAO=b=>{HH();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]
*b[10]*b[15]+b[0]*b[5]*b[10]*b[15];}
let Xd=b=>{let c,d,e;HH();c=CT(16);d=AAO(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;}
let AEh=(b,c,d)=>{let e,f,g,h,i,j,k,l;HH();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;}
let AXV=()=>{let b;AX6=CT(16);b=new Fs;QF();b.uT=0.0;b.uQ=0.0;b.uR=0.0;b.uS=1.0;BeU=b;b=new Fs;b.uT=0.0;b.uQ=0.0;b.uR=0.0;b.uS=1.0;Bcj=b;b=new Bf;BU();Tg=b;Nc=new Bf;AEv=new Bf;A9j=new Bf;AZs=FN();Bbt=new Bf;BcN=new Bf;Bfd=new Bf;}
let Sm=G(0);
function Hn(){let a=this;D.call(a);a.FR=0.0;a.Ea=0;}
let Bii=a=>{let b=new Hn();W6(b,a);return b;}
let W6=(a,b)=>{return;}
function TP(){let a=this;Hn.call(a);a.HX=M;a.HY=M;}
let AFG=G(By);
let BaK=()=>{let a=new AFG();A9w(a);return a;}
let A9w=a=>{EK();}
let Qy=G(By);
function JO(){let a=this;D.call(a);a.u6=null;a.sZ=null;a.Cd=null;}
let BgQ=null;let A87=null;let Bbo=null;let AOT=()=>{AOT=Bj(JO);A3C();}
let Bfn=()=>{let a=new JO();ABX(a);return a;}
let ABX=a=>{let b,c,d,e,f,g;AOT();b=Bt(JX,6);c=b.data;a.u6=b;b=Bt(Bf,8);d=b.data;e=new Bf;BU();d[0]=e;d[1]=new Bf;d[2]=new Bf;d[3]=new Bf;d[4]=new Bf;d[5]=new Bf;d[6]=new Bf;d[7]=new Bf;a.sZ=b;a.Cd=CT(24);f=0;while(f<6){e=new JX;g=new Bf;e.s0=g;e.vf=0.0;g.on=0.0;g.op=0.0;g.oo=0.0;e.vf=0.0;c[f]=e;f=f+1|0;}}
let AFQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;AOT();c=A87;d=c.data;CX(c,0,a.Cd,0,d.length);c=b.qb;e=a.Cd;f=0;HH();g=0;while(g<8){AEh(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.sZ.data[f];c=a.Cd.data;j=h+1|0;i.on=c[h];g=j+1|0;i.op=c[j];h=g+1|0;i.oo=c[g];f=f+1|0;}b=a.u6.data[0];c=a.sZ.data;i=c[1];k=c[0];l=c[2];m=b.s0;n=i.on;o=i.op;p=i.oo;m.on=n;m.op=o;m.oo=p;q=k.on;r=k.op;s=k.oo;q=n-q;o=o-r;n=p-s;m.on=q;m.op=o;m.oo=n;p=k.on-l.on;r=k.op-l.op;s=k.oo-l.oo;t=o*s-n*r;s=n*p-q*s;q=q*r-o*p;m.on=t;m.op=s;m.oo
=q;p=t*t+s*s+q*q;if(p!==0.0&&p!==1.0){o=1.0/Cf(p);p=m.on*o;q=m.op*o;o=m.oo*o;m.on=p;m.op=q;m.oo=o;}k=b.s0;b.vf= -(i.on*k.on+i.op*k.op+i.oo*k.oo);b=a.u6.data[1];c=a.sZ.data;i=c[4];k=c[5];l=c[7];m=b.s0;r=i.on;s=i.op;n=i.oo;m.on=r;m.op=s;m.oo=n;o=k.on;p=k.op;q=k.oo;o=r-o;p=s-p;q=n-q;m.on=o;m.op=p;m.oo=q;AIn(AFf(m,k.on-l.on,k.op-l.op,k.oo-l.oo));b.vf= -AAE(i,b.s0);b=a.u6.data[2];c=a.sZ.data;Kz(b,c[0],c[4],c[3]);b=a.u6.data[3];c=a.sZ.data;Kz(b,c[5],c[1],c[6]);b=a.u6.data[4];c=a.sZ.data;Kz(b,c[2],c[3],c[6]);b=a.u6.data[5];c
=a.sZ.data;Kz(b,c[4],c[0],c[1]);}
let A3C=()=>{let b,c,d,e,f,g,h,i,j;b=Bt(Bf,8);c=b.data;d=new Bf;BU();d.on=(-1.0);d.op=(-1.0);d.oo=(-1.0);c[0]=d;d=new Bf;d.on=1.0;d.op=(-1.0);d.oo=(-1.0);c[1]=d;d=new Bf;d.on=1.0;d.op=1.0;d.oo=(-1.0);c[2]=d;d=new Bf;d.on=(-1.0);d.op=1.0;d.oo=(-1.0);c[3]=d;d=new Bf;d.on=(-1.0);d.op=(-1.0);d.oo=1.0;c[4]=d;d=new Bf;d.on=1.0;d.op=(-1.0);d.oo=1.0;c[5]=d;d=new Bf;d.on=1.0;d.op=1.0;d.oo=1.0;c[6]=d;d=new Bf;d.on=(-1.0);d.op=1.0;d.oo=1.0;c[7]=d;BgQ=b;b=CT(24);e=b.data;A87=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1
|0;e[f]=d.on;j=i+1|0;e[i]=d.op;f=j+1|0;e[j]=d.oo;h=h+1|0;}Bbo=new Bf;}
function Fs(){let a=this;D.call(a);a.uT=0.0;a.uQ=0.0;a.uR=0.0;a.uS=0.0;}
let Bem=null;let Bel=null;let QF=()=>{QF=Bj(Fs);AOe();}
let AOe=()=>{let b;b=new Fs;QF();b.uT=0.0;b.uQ=0.0;b.uR=0.0;b.uS=0.0;Bem=b;b=new Fs;b.uT=0.0;b.uQ=0.0;b.uR=0.0;b.uS=0.0;Bel=b;}
let Vy=G();
let AFK=G();
function Bf(){let a=this;D.call(a);a.on=0.0;a.op=0.0;a.oo=0.0;}
let A_T=null;let A_U=null;let A_S=null;let Be1=null;let Bgy=null;let BU=()=>{BU=Bj(Bf);AJT();}
let AIn=a=>{let b,c,d;b=a.on;b=b*b;c=a.op;b=b+c*c;c=a.oo;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/Cf(c);c=a.on*b;d=a.op*b;b=a.oo*b;a.on=c;a.op=d;a.oo=b;return a;}return a;}
let AAE=(a,b)=>{return a.on*b.on+a.op*b.op+a.oo*b.oo;}
let SH=(a,b)=>{let c,d,e,f,g,h,i;c=a.op;d=b.oo;e=c*d;f=a.oo;g=b.op;h=e-f*g;e=b.on;f=f*e;i=a.on;d=f-i*d;c=i*g-c*e;a.on=h;a.op=d;a.oo=c;return a;}
let AFf=(a,b,c,d)=>{let e,f,g,h;e=a.op;f=e*d;g=a.oo;h=f-g*c;g=g*b;f=a.on;d=g-f*d;b=f*c-e*b;a.on=h;a.op=d;a.oo=b;return a;}
let AJT=()=>{let b;b=new Bf;BU();b.on=1.0;b.op=0.0;b.oo=0.0;A_T=b;b=new Bf;b.on=0.0;b.op=1.0;b.oo=0.0;A_U=b;b=new Bf;b.on=0.0;b.op=0.0;b.oo=1.0;A_S=b;b=new Bf;b.on=0.0;b.op=0.0;b.oo=0.0;Be1=b;Bgy=FN();}
let XA=G();
let W1=G(D6);
let PY=G(HM);
let BdY=(a,b)=>{let c=new PY();A5e(c,a,b);return c;}
let A5e=(a,b,c)=>{EK();a.y2=b;a.x8=c;c=D7(b, -c);a.yD=c;a.x$=1.0/(1.0-c);}
let AFW=G();
let Wo=G();
let AHh=G();
function JX(){let a=this;D.call(a);a.s0=null;a.vf=0.0;}
let Kz=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=a.s0;f=b.on;g=b.op;h=b.oo;e.on=f;e.op=g;e.oo=h;i=c.on;j=c.op;k=c.oo;f=f-i;g=g-j;k=h-k;e.on=f;e.op=g;e.oo=k;h=c.on-d.on;j=c.op-d.op;l=c.oo-d.oo;i=g*l-k*j;k=k*h-f*l;f=f*j-g*h;e.on=i;e.op=k;e.oo=f;f=i*i+k*k+f*f;if(f!==0.0&&f!==1.0){k=1.0/Cf(f);f=e.on*k;g=e.op*k;k=e.oo*k;e.on=f;e.op=g;e.oo=k;}c=a.s0;a.vf= -(b.on*c.on+b.op*c.op+b.oo*c.oo);}
let TW=G(By);
let AHj=G();
let ACp=G();
let AGf=G();
let AHg=G();
let Y1=G(0);
let ADT=G();
let Us=G();
let MJ=null;let WY=()=>{let b,c;MJ=CT(16384);b=0;while(b<16384){MJ.data[b]=NJ((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=MJ.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);}
function DH(){let a=this;D.call(a);a.qi=null;a.pW=null;a.qw=0;a.EG=0.0;a.Al=0.0;}
let GV=null;let Je=null;let E7=()=>{E7=Bj(DH);AC1();}
let Bij=()=>{let a=new DH();U_(a);return a;}
let Bik=(a,b)=>{let c=new DH();OD(c,a,b);return c;}
let Bil=(a,b,c,d,e,f)=>{let g=new DH();QA(g,a,b,c,d,e,f);return g;}
let Bim=(a,b,c,d,e,f,g,h,i)=>{let j=new DH();Uz(j,a,b,c,d,e,f,g,h,i);return j;}
let U_=a=>{let b;E7();b=new CQ;b.pz=1;b.os=Bt(D,1);a.qi=b;b=new Et;b.ra=1;b.pE=X(2);a.pW=b;}
let OD=(a,b,c)=>{let d;E7();d=new CQ;d.pz=1;d.os=Bt(D,1);a.qi=d;d=new Et;d.ra=1;d.pE=X(2);a.pW=d;Hi(a,b,c,0,c.Y(),b.Z(),0.0,8,0,null);}
let QA=(a,b,c,d,e,f,g)=>{let h;E7();h=new CQ;h.pz=1;h.os=Bt(D,1);a.qi=h;h=new Et;h.ra=1;h.pE=X(2);a.pW=h;Hi(a,b,c,0,c.Y(),d,e,f,g,null);}
let Uz=(a,b,c,d,e,f,g,h,i,j)=>{let k;E7();k=new CQ;k.pz=1;k.os=Bt(D,1);a.qi=k;k=new Et;k.ra=1;k.pE=X(2);a.pW=k;Hi(a,b,c,d,e,f,g,h,i,j);}
let Hi=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;UX(a);k=b.xM;if(d==e){a.Al=k.sK;return;}if(i)g=J0(g,k.EW*3.0);l=!i&&j===null?0:1;m=J4(f);AHI(a.pW,0,m);n=k.zk;if(n)Gp(Je,m);o=0;p=0.0;q=k.zS;r=null;s=null;t=m;u=d;e:{f:{g:while(true){h:{v=0;if(d==e){if(u==e)break e;o=1;w=e;}else{i=d+1|0;if(d<0)break f;if(d>=c.oc.length)break f;i:{switch(c.oc.charCodeAt(d)){case 10:w=i-1|0;v=1;d=i;break h;case 91:if(!n){d=i;break i;}x=Qn(a,c,i,e);if(x>=0){w=i-1|0;d=i+(x+1|0)|0;if(d==e){o=1;break h;}m
=Tp(Je);break h;}if(x!=(-2)){d=i;break i;}d=i+1|0;break i;default:}d=i;}continue g;}}b=GV;f=b.qx;i=f.oj;if(!i)b=Tb(b);else{if(!i){b=new Cb;b.n_=1;b.oa=1;b.od=C(33);E(b);}i=i-1|0;f.oj=i;y=f.os.data;b=y[i];y[i]=null;}z=b;z.r9=0.0;z.Ao=p;OS(k,z,c,u,w,s);a.qw=a.qw+z.pB.oj|0;if(m!=t){b=a.pW;i=GM(b,b.o3-2|0);ba=a.qw;if(i!=ba){Gp(a.pW,ba);Gp(a.pW,m);}else{b=a.pW;KF(b,b.o3-1|0,m);}t=m;}j:{if(!z.pB.oj){Js(GV,z);if(r===null)break j;}else if(r!==null){RT(r,z);Js(GV,z);}else{Dk(a.qi,z);r=z;}if(!v&&!o){b=r.pB;ba=b.oj;if
(!ba)break g;s=b.os.data[ba-1|0];}else{L_(a,k,r);s=null;}if(l&&r.pB.oj&&!(!v&&!o)){bb=SS(r.pP)+Sy(r.pP,1);bc=2;while(bc<r.pP.py){b=r.pB;i=bc-1|0;if(bb+Li(a,AHM(b,i),k)-9.999999747378752E-5<=g)bb=bb+r.pP.pL.data[bc];else{if(j!==null){Ow(a,k,r,g,j);break e;}ba=Vv(k,r.pB,bc);if(!(!ba&&r.r9===0.0)&&ba<r.pB.oj)i=ba;r=QP(a,k,r,i);if(r===null)break j;Dk(a.qi,r);p=p+q;r.r9=0.0;r.Ao=p;bb=SS(r.pP)+Sy(r.pP,1);bc=1;}bc=bc+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.Ft;}u=d;}b=new Cb;U$(b,C(33));E(b);}b=new Ba;b.n_=1;b.oa
=1;E(b);}a.Al=k.sK+Jo(p);SN(a,k);TK(a,g,h);if(n)Je.o3=0;}
let SN=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=0.0;d=a.qi;e=d.os;f=0;g=d.oj;while(f<g){d=e.data[f];h=d.pP.pL.data;i=d.r9+h[0];j=0.0;k=d.pB;l=k.os;m=0;n=k.oj;while(m<n){k=l.data[m];j=J0(j,i+(k.qE+k.rg|0)*b.tp-b.vE);m=m+1|0;i=i+h[m];}i=J0(i,j);j=d.r9;i=i-j;d.Cm=i;c=J0(c,j+i);f=f+1|0;}a.EG=c;}
let TK=(a,b,c)=>{let d,e,f,g,h;b:{if(!(c&8)){d=!(c&1)?0:1;e=a.qi;f=e.os;g=0;h=e.oj;while(true){if(g>=h)break b;e=f.data[g];e.r9=e.r9+(!d?b-e.Cm:0.5*(b-e.Cm));g=g+1|0;}}}}
let Ow=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;f=c.pB.oj;E7();g=GV;h=g.qx;i=h.oj;if(i){if(!i){b=new Cb;b.n_=1;b.oa=1;b.od=C(33);E(b);}i=i-1|0;h.oj=i;j=h.os.data;h=j[i];j[i]=null;}else k:{try{h=K2(g.rd,null);break k;}catch($$e){$$je=BG($$e);if($$je instanceof Da){c=$$je;}else{throw $$e;}}e=new Bc;b=new L;b.ob=H(16);F(b,b.n$,C(34));g=g.rd.rS.rq;if(g.oQ===null)g.oQ=Bv(g.oE.$meta.name);h=g.oQ;F(b,b.n$,h);b=Bi(b);e.n_=1;e.oa=1;e.od=b;e.p$=c;E(e);}k=h;OS(b,k,e,0,e.Y(),null);l=0.0;g=k.pP;m=g.py;if(m>0){h
=k.pB;n=h.oj;if(!n){b=new Cb;b.n_=1;b.oa=1;b.od=C(33);E(b);}h=h.os.data[n-1|0];if(!h.yB)g.pL.data[m-1|0]=(h.qE+h.rg|0)*b.tp-b.vE;j=g.pL;o=1;while(o<m){l=l+j.data[o];o=o+1|0;}}d=d-l;n=0;p=c.r9;q=c.pP;j=q.pL;l:{while(true){if(n>=q.py)break l;p=p+j.data[n];if(p>d)break;n=n+1|0;}}if(n<=1){r=c.pB;j=r.os;i=0;n=r.oj;h=null;if(i>n){b=new V;b.n_=1;b.oa=1;E(b);}while(i<n){s=j.data;o=i+1|0;s[i]=h;i=o;}r.oj=0;q.py=0;K9(q,g.pL,0,g.py);}else{Ok(c.pB,n-1|0);h=c.pP;if(h.py>n)h.py=n;h=AA3(c.pB);if(!h.yB){g=c.pP;g.pL.data[g.py
-1|0]=Li(a,h,b);}h=k.pP;i=h.py;if(i>0)QU(c.pP,h,1,i-1|0);}m:{i=f-c.pB.oj|0;if(i>0){a.qw=a.qw-i|0;if(b.zk)while(true){b=a.pW;i=b.o3;if(i<=2)break m;if(GM(b,i-2|0)<a.qw)break m;b=a.pW;b.o3=b.o3-2|0;}}}XN(c.pB,k.pB);a.qw=a.qw+e.Y()|0;Js(GV,k);}
let QP=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.pB;f=e.oj;g=c.pP;h=d;b:{while(true){if(h<=0)break b;i=h-1|0;if(i>=f)break;n:{switch(e.os.data[i].tF&65535){case 9:case 10:case 13:case 32:break;default:i=0;break n;}i=1;}if(!i)break b;h=h+(-1)|0;}c=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,i,10);F(b,b.n$,C(38));d=e.oj;N(b,b.n$,d,10);b=Bi(b);c.n_=1;c.oa=1;c.od=b;E(c);}o:{while(true){j=B9(d,f);if(j>=0)break o;if(j>=0)break;l:{switch(e.os.data[d].tF&65535){case 9:case 10:case 13:case 32:break;default:i
=0;break l;}i=1;}if(!i)break o;d=d+1|0;}c=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,d,10);F(b,b.n$,C(38));d=e.oj;N(b,b.n$,d,10);b=Bi(b);c.n_=1;c.oa=1;c.od=b;E(c);}k=null;if(j>=0){Ok(e,h);j=h+1|0;if(g.py>j)g.py=j;l=d-h|0;if(l>0){a.qw=a.qw-l|0;if(b.zk){m=a.pW;if(GM(m,m.o3-2|0)>a.qw){n=Tp(a.pW);while(true){m=a.pW;d=GM(m,m.o3-2|0);i=a.qw;if(d<=i)break;m=a.pW;m.o3=m.o3-2|0;}m=a.pW;KF(m,m.o3-2|0,i);m=a.pW;KF(m,m.o3-1|0,n);}}}}else{E7();o=GV;m=o.qx;i=m.oj;if(!i)m=Tb(o);else{if(!i){b=new Cb;b.n_=1;b.oa=1;b.od
=C(33);E(b);}i=i-1|0;m.oj=i;p=m.os.data;m=p[i];p[i]=null;}p:{k=m;m=k.pB;VJ(m,e,0,h);WV(e,0,d-1|0);c.pB=m;k.pB=e;o=k.pP;QU(o,g,0,h+1|0);ABK(g,1,d);g.pL.data[0]=U3(a,e,b);c.pP=o;k.pP=g;i=c.pB.oj;j=k.pB.oj;l=(f-i|0)-j|0;d=a.qw-l|0;a.qw=d;if(b.zk&&l>0){q=d-j|0;r=a.pW.o3-2|0;while(true){if(r<2)break p;s=GM(a.pW,r);if(s<=q)break;KF(a.pW,r,s-l|0);r=r+(-2)|0;}}}}if(h)L_(a,b,c);else{E7();Js(GV,c);ABY(a.qi);}return k;}
let L_=(a,b,c)=>{let d,e;d=c.pB;e=d.oj;if(!e){b=new Cb;b.n_=1;b.oa=1;b.od=C(33);E(b);}d=d.os.data[e-1|0];if(!d.yB){c=c.pP;c.pL.data[c.py-1|0]=(d.qE+d.rg|0)*b.tp-b.vE;}}
let Li=(a,b,c)=>{return (b.qE+b.rg|0)*c.tp-c.vE;}
let U3=(a,b,c)=>{if(b.oj)return ( -b.os.data[0].rg|0)*c.tp-c.AH;c=new Cb;c.n_=1;c.oa=1;c.od=C(33);E(c);}
let Qn=(a,b,c,d)=>{let e,f,g,h;if(c==d)return (-1);if(c>=0&&c<b.oc.length){switch(b.oc.charCodeAt(c)){case 35:e=0;f=c+1|0;q:{while(true){if(f>=d)break q;if(f<0)break;if(f>=b.oc.length)break;g=b.oc.charCodeAt(f);if(g==93){if(f<(c+2|0))break q;if(f<=(c+9|0)){c=f-c|0;if(c<8)e=e<<((9-c|0)<<2)|255;E7();b=Je;d=((e&(-16711936))>>>8|0)|(e&16711935)<<8;Gp(b,(d>>>16|0)+(d<<16)|0);return c;}break q;}e=(e<<4)+g|0;if(g>=48&&g<=57)e=e+(-48)|0;else if(g>=65&&g<=70)e=e+(-55)|0;else{if(g<97)break q;if(g>102)break q;e=e+(-87)
|0;}f=f+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}return (-1);case 91:break;case 93:E7();b=Je;c=b.o3;if(c>1)b.o3=c-1|0;return 0;default:f=c+1|0;r:{while(f<d){if(f<0)break r;if(f>=b.oc.length)break r;if(b.oc.charCodeAt(f)==93){b=Cw(b,c,f);AM1();h=CC;d=Dm(h,b);h=d<0?null:h.qa.data[d];if(h===null)return (-1);E7();Gp(Je,J4(h));return f-c|0;}f=f+1|0;}return (-1);}b=new Ba;b.n_=1;b.oa=1;E(b);}return (-2);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let UX=a=>{let b,c,d,e,f,g,h;E7();AA2(GV,a.qi);b=a.qi;c=b.os;d=0;e=b.oj;f=null;if(d>e){b=new V;b.n_=1;b.oa=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oj=0;a.pW.o3=0;a.qw=0;a.EG=0.0;a.Al=0.0;}
let Zj=a=>{let b,c,d,e,f,g,h;if(!a.qi.oj)return C(43);b=new L;b.ob=H(128);c=a.EG;EQ(b,b.n$,c);d=b.n$;Bp(b,d,d+1|0);b.ob.data[d]=120;c=a.Al;EQ(b,b.n$,c);d=b.n$;Bp(b,d,d+1|0);b.ob.data[d]=10;e=0;d=a.qi.oj;while(e<d){f=a.qi;if(e>=f.oj){g=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,e,10);F(b,b.n$,C(38));e=f.oj;N(b,b.n$,e,10);b=Bi(b);g.n_=1;g.oa=1;g.od=b;E(g);}f=Or(f.os.data[e]);F(b,b.n$,f);h=b.n$;Bp(b,h,h+1|0);b.ob.data[h]=10;e=e+1|0;}b.n$=b.n$-1|0;return Bi(b);}
let AC1=()=>{let b,c,d,e,$$je;M0();b=Gh;c=Dm(b,BH(DZ));b=c<0?null:b.qa.data[c];if(b===null){b=new HW;d=new CQ;d.pz=0;d.os=Bt(D,4);b.qx=d;b.sz=100;c:{try{d=LP(BH(DZ),null);break c;}catch($$e){$$je=BG($$e);if($$je instanceof Da){}else{throw $$e;}}try{d=MS(BH(DZ),null);JN(d,1);break c;}catch($$e){$$je=BG($$e);if($$je instanceof Eo){}else{throw $$e;}}d=null;}b.rd=d;if(d===null){b=new B0;d=new L;d.ob=H(16);F(d,d.n$,C(27));if(BH(DZ).oQ===null)BH(DZ).oQ=Bv(BH(DZ).oE.$meta.name);e=BH(DZ).oQ;F(d,d.n$,e);e=Bi(d);b.n_
=1;b.oa=1;b.od=e;E(b);}B2(Gh,BH(DZ),b);}GV=b;e=new Et;e.ra=1;e.pE=X(4);Je=e;}
function HO(){let a=this;D.call(a);a.zu=null;a.Gl=0.0;a.Gn=0.0;a.JR=0.0;a.JQ=0.0;a.AN=0;a.CA=0;}
let AGX=(a,b,c,d,e)=>{let f,g,h;f=a.zu.vB;g=1.0/f.tQ;h=1.0/f.tD;Wp(a,b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.AN=d;if(e<0)e= -e|0;a.CA=e;}
let Wp=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.zu.vB;g=f.tQ;h=f.tD;i=Jo(d-b);j=g;i=i*j;a.AN=i+FH(i)*0.5|0;k=Jo(e-c);i=h;k=k*i;l=k+FH(k)*0.5|0;a.CA=l;if(a.AN==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.Gl=b;a.Gn=c;a.JR=d;a.JQ=e;}
let AFE=G(HO);
function FA(){let a=this;D.call(a);a.xM=null;a.t2=null;a.sV=null;a.IZ=0;a.HS=0;a.HE=0;}
let Bin=(a,b,c)=>{let d=new FA();ADR(d,a,b,c);return d;}
let ADR=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n;a.IZ=b.C2;a.xM=b;a.HS=d;if(c!==null&&c.oj){a.t2=c;a.HE=0;}else{e=b.wO;if(e===null){b=new V;b.n_=1;b.oa=1;b.od=C(44);E(b);}f=e.data.length;c=new CQ;c.pz=1;c.os=Bt(D,f);a.t2=c;g=0;while(g<f){h=b.F4;if(h!==null){i=PS;c=b.wO.data[g];j=h.xQ;k=ASy(i.AP,c,j);}else{c=PS;h=b.wO.data[g];k=new JT;i=c.AP;Nq();M1(k,i,h,Ri);}c=a.t2;h=new HO;l=new Mb;m=null;j=Bex(k,ASQ(k),m,0);i=Cj;m=i.og.createTexture();n=i.yO;i.yO=n+1|0;C6(i.wg,n,C_(m));ALx();k=AQd;l.Bo=k;l.AZ=k;AW0();k=ATf;l.A3
=k;l.z5=k;l.EU=1.0;l.tC=3553;l.Eq=n;AAM(l,j);k=Ef;i=ABf;if(k===null){i=i.qq.data[0];while(i!==null&&i.qV!==null){i=i.q6;}}else{d=ABD(k);e=i.qq.data;i=e[d&(e.length-1|0)];while(i!==null&&!(i.tY==d&&AYo(k,i.qV))){i=i.q6;}}i=i===null?null:i.rp;if(i===null){i=new CQ;i.pz=1;i.os=Bt(D,16);}Dk(i,l);JV(ABf,k,i);h.zu=l;k=l.vB;AGX(h,0,0,k.tQ,k.tD);Dk(c,h);g=g+1|0;}a.HE=1;}a.sV=BfX(a,a.HS);ABi(a,b);}
let ABi=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.uB.data;d=c.length;e=0;a:while(true){if(e>=d){f=b.CP;if(f!==null){g=a.t2;d=f.xt;if(d>=g.oj){f=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,d,10);F(b,b.n$,C(38));d=g.oj;N(b,b.n$,d,10);b=Bi(b);f.n_=1;f.oa=1;f.od=b;E(f);}RV(b,f,g.os.data[d]);}return;}k:{h=c[e];if(h!==null){h=h.data;i=h.length;j=0;while(true){if(j>=i)break k;g=h[j];if(g!==null){f=a.t2;k=g.xt;if(k>=f.oj)break a;RV(b,g,f.os.data[k]);}j=j+1|0;}}}e=e+1|0;}g=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,
b.n$,k,10);F(b,b.n$,C(38));d=f.oj;N(b,b.n$,d,10);b=Bi(b);g.n_=1;g.oa=1;g.od=b;E(g);}
let Bw=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,$$je;T3(a.sV);i=a.sV;j=c.oc.length;k=null;M0();l=Gh;m=Dm(l,BH(DH));n=m<0?null:l.qa.data[m];if(n===null){n=new HW;l=new CQ;Dn(l);l.pz=0;l.os=Bt(D,4);n.qx=l;n.sz=100;n:{try{l=LP(BH(DH),null);break n;}catch($$e){$$je=BG($$e);if($$je instanceof Da){}else{throw $$e;}}try{l=MS(BH(DH),null);JN(l,1);break n;}catch($$e){$$je=BG($$e);if($$je instanceof Eo){}else{throw $$e;}}l=null;}n.rd=l;if(l===null){b=new B0;c=new L;Jn(c,16);DI(c,c.n$,C(27));if(BH(DH).oQ===null)BH(DH).oQ
=Bv(BH(DH).oE.$meta.name);l=BH(DH).oQ;DI(c,c.n$,l);c=Bi(c);b.n_=1;b.oa=1;b.od=c;E(b);}B2(Gh,BH(DH),n);}l:{l=n.qx;o=l.oj;if(o){if(!o){b=new Cb;b.n_=1;b.oa=1;b.od=C(33);E(b);}o=o-1|0;l.oj=o;p=l.os.data;l=p[o];p[o]=null;}else try{l=K2(n.rd,null);break l;}catch($$e){$$je=BG($$e);if($$je instanceof Da){c=$$je;l=new Bc;b=new L;Dn(b);b.ob=H(16);F(b,b.n$,C(34));i=n.rd.rS.rq;if(i.oQ===null)i.oQ=Bv(i.oE.$meta.name);q=i.oQ;F(b,b.n$,q);AE0(l,Bi(b),c);E(l);}else{throw $$e;}}}l=l;Dk(i.yU,l);Hi(l,i.tn,c,0,j,i.Ci,f,g,h,k);P$(i,
l,d,e+i.tn.xM.yZ);O9(a.sV,b);return l;}
let Qo=G();
let A_y=null;let Bio=()=>{Bio=Bj(Qo);A9y();}
let A9y=()=>{let b;b=new BD;FQ();A_y=b;}
function BD(){let a=this;D.call(a);a.pV=0.0;a.pU=0.0;a.pT=0.0;a.pS=0.0;}
let ADr=null;let A2b=null;let A5C=null;let AWp=null;let AEf=null;let AFN=0.0;let AJu=null;let AVt=null;let AXp=null;let AUF=null;let A9p=null;let AR1=null;let A8v=null;let A1E=null;let A1o=null;let ASS=null;let AVD=null;let AUC=null;let A$W=null;let AXU=null;let A2K=null;let A$S=null;let A4E=null;let AVM=null;let AU6=null;let AT0=null;let AQE=null;let AI5=null;let AQp=null;let ANr=null;let A2g=null;let A1e=null;let AQh=null;let A6y=null;let A7f=null;let FQ=()=>{FQ=Bj(BD);AW7();}
let Eh=a=>{let b,c;b=a.pV;if(b<0.0)a.pV=0.0;else if(b>1.0)a.pV=1.0;c=a.pU;if(c<0.0)a.pU=0.0;else if(c>1.0)a.pU=1.0;c=a.pT;if(c<0.0)a.pT=0.0;else if(c>1.0)a.pT=1.0;c=a.pS;if(c<0.0)a.pS=0.0;else if(c>1.0)a.pS=1.0;return a;}
let A0L=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b!==null){c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CN;d.oE=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new CN;c.oE=e;f=c;e.classObject=f;}}if(d===c){c=b;return J4(a)!=J4(c)?0:1;}}return 0;}
let APZ=a=>{let b,c,d;b=a.pV;c=31*(b===0.0?0:(isNaN(b)?1:0)?2143289344:H6(b))|0;b=a.pU;c=31*(c+(b===0.0?0:(isNaN(b)?1:0)?2143289344:H6(b))|0)|0;d=a.pT;c=31*(c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:H6(d))|0)|0;d=a.pS;return c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:H6(d))|0;}
let AAH=a=>{return IU(((255.0*a.pS|0)<<24|(255.0*a.pT|0)<<16|(255.0*a.pU|0)<<8|255.0*a.pV|0)&(-16777217));}
let J4=a=>{return (255.0*a.pS|0)<<24|(255.0*a.pT|0)<<16|(255.0*a.pU|0)<<8|255.0*a.pV|0;}
let ALW=a=>{let b,c;b=BA((255.0*a.pV|0)<<24|(255.0*a.pU|0)<<16|(255.0*a.pT|0)<<8|255.0*a.pS|0,4);while(b.oc.length<8){c=new L;c.ob=H(16);F(c,c.n$,C(45));F(c,c.n$,b);b=Bi(c);}return b;}
let C0=(b,c)=>{FQ();b.pV=((c&(-16777216))>>>24|0)/255.0;b.pU=((c&16711680)>>>16|0)/255.0;b.pT=((c&65280)>>>8|0)/255.0;b.pS=(c&255)/255.0;}
let AW7=()=>{let b;b=new BD;FQ();b.pV=1.0;b.pU=1.0;b.pT=1.0;b.pS=1.0;Eh(b);ADr=b;b=new BD;C0(b,(-1077952513));A2b=b;b=new BD;C0(b,2139062271);A5C=b;b=new BD;C0(b,1061109759);AWp=b;b=new BD;b.pV=0.0;b.pU=0.0;b.pT=0.0;b.pS=1.0;Eh(b);AEf=b;AFN=AAH(ADr);b=new BD;b.pV=0.0;b.pU=0.0;b.pT=0.0;b.pS=0.0;Eh(b);AJu=b;b=new BD;b.pV=0.0;b.pU=0.0;b.pT=1.0;b.pS=1.0;Eh(b);AVt=b;b=new BD;b.pV=0.0;b.pU=0.0;b.pT=0.5;b.pS=1.0;Eh(b);AXp=b;b=new BD;C0(b,1097458175);AUF=b;b=new BD;C0(b,1887473919);A9p=b;b=new BD;C0(b,(-2016482305));AR1
=b;b=new BD;b.pV=0.0;b.pU=1.0;b.pT=1.0;b.pS=1.0;Eh(b);A8v=b;b=new BD;b.pV=0.0;b.pU=0.5;b.pT=0.5;b.pS=1.0;Eh(b);A1E=b;b=new BD;C0(b,16711935);A1o=b;b=new BD;C0(b,2147418367);ASS=b;b=new BD;C0(b,852308735);AVD=b;b=new BD;C0(b,579543807);AUC=b;b=new BD;C0(b,1804477439);A$W=b;b=new BD;C0(b,(-65281));AXU=b;b=new BD;C0(b,(-2686721));A2K=b;b=new BD;C0(b,(-626712321));A$S=b;b=new BD;C0(b,(-5963521));A4E=b;b=new BD;C0(b,(-1958407169));AVM=b;b=new BD;C0(b,(-759919361));AU6=b;b=new BD;C0(b,(-1306385665));AT0=b;b=new BD;C0(b,
(-16776961));AQE=b;b=new BD;C0(b,(-13361921));AI5=b;b=new BD;C0(b,(-8433409));AQp=b;b=new BD;C0(b,(-92245249));ANr=b;b=new BD;C0(b,(-9849601));A2g=b;b=new BD;b.pV=1.0;b.pU=0.0;b.pT=1.0;b.pS=1.0;Eh(b);A1e=b;b=new BD;C0(b,(-1608453889));AQh=b;b=new BD;C0(b,(-293409025));A6y=b;b=new BD;C0(b,(-1339006721));A7f=b;}
function J6(){let a=this;D.call(a);a.tC=0;a.Eq=0;a.Bo=null;a.AZ=null;a.A3=null;a.z5=null;a.EU=0.0;}
let Mi=0.0;let Zw=(a,b,c,d)=>{if(b!==null&&!(!d&&a.A3===b)){Cj.b4(a.tC,10242,b.yF);a.A3=b;}if(c!==null&&!(!d&&a.z5===c)){Cj.b4(a.tC,10243,c.yF);a.z5=c;}}
let VA=(a,b,c,d)=>{if(b!==null&&!(!d&&a.Bo===b)){Cj.b4(a.tC,10241,b.sM);a.Bo=b;}if(c!==null&&!(!d&&a.AZ===c)){Cj.b4(a.tC,10240,c.sM);a.AZ=c;}}
let ADL=()=>{let b,c,d,e,f;b=Mi;if(b>0.0)return b;if(!(Bb.w1.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){Mi=1.0;return 1.0;}if(!D1){c=CT(16);d=c.data.length;e=new Ja;f=0+d|0;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=f;e.xy=0;e.zb=0;e.w9=c;}else{e=new C8;c=BW(64);e.or=(-1);e.oy=64;e.oe=64;CP();e.o4=CR;e.pb=0;e.oZ=c;e.of=0;e.oe=64;e.pR=1;e.pt=0;e.o4=DT();e=Gd(e);}CH(e,0);Ds(e,e.oy);Bq.b9(34047,e);b=PK(e,0);Mi=b;return b;}
let AHV=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;if(c===null)return;if(!c.vR)Sx(c);AI$();if(AJU===ATV){c=new Bc;c.n_=1;c.oa=1;c.od=C(46);E(c);}if(!c.vR){e=new Bc;e.n_=1;e.oa=1;e.od=C(47);E(e);}c.vR=0;f=c.xC;c.xC=null;g=1;h=c.wn;e=f.pA;if(e===null){IP();e=H$;}else e=Ix(e.pX);if(h===e)e=f;else{e=new Ig;h=f.pA;JW(e,h===null?f.qu:h.ql,h===null?f.qv:h.qj,c.wn);JU();h=P0;e.y7=h;i=e.pA;if(i===null){Gu(e);h=e.p6;IE();i=Cr(HR.ol);h.globalCompositeOperation=i;}else{j=h!==h?1:0;Ud(i.qd,j);}i=f.pA;k=i===null?f.qu:i.ql;l=i
===null?f.qv:i.qj;h=e.pA;if(h===null){Gu(f);K3(e,f.sP,0,0,k,l,0,0,k,l);}else{g=i.qd;m=h.qd;NP(g,m,0,0,k,l,0,0,k,l);}if(f.w8){e=new Bc;e.n_=1;e.oa=1;e.od=C(48);E(e);}JK();Jc(KM,f.yR);h=f.pA;if(h!==null)NI(h.qd);f.w8=1;g=1;}Cj.ch(3317,1);if(c.Hh)AGA(b,e,Lv(e),LI(e));else{h=Cj;c=e.pA;if(c===null)n=6408;else s:{j=c.pX;switch(j){case 1:n=6406;break s;case 2:n=6410;break s;case 3:case 5:n=6407;break s;case 4:case 6:n=6408;break s;default:}c=new Bc;e=new L;e.ob=H(16);DI(e,e.n$,DJ(C(49)));N(e,e.n$,j,10);e=Bi(e);c.n_
=1;c.oa=1;c.od=e;E(c);}o=c===null?e.qu:c.ql;p=c===null?e.qv:c.qj;if(c===null)k=6408;else t:{k=c.pX;switch(k){case 1:k=6406;break t;case 2:k=6410;break t;case 3:case 5:k=6407;break t;case 4:case 6:k=6408;break t;default:}c=new Bc;e=new L;F$(e);M_(e,C(49));EX(e,k);Pb(c,Cy(e));E(c);}h.cn(b,d,n,o,p,0,k,QN(e),Uy(e));}if(g)Sp(e);}
let AN$=()=>{Mi=0.0;}
function Mb(){J6.call(this);this.vB=null;}
let ABf=null;let AAM=(a,b)=>{let c,d;a.vB=b;if(!b.vR)Sx(b);Cj.cr(a.tC,a.Eq);AHV(3553,b,0);VA(a,a.Bo,a.AZ,1);Zw(a,a.A3,a.z5,1);c=a.EU;d=ADL();if(d!==1.0){c=ZX(c,d);Bq.cx(3553,34046,c);a.EU=c;}Cj.cr(a.tC,0);}
let AQ9=a=>{let b,c,d,e;b=a.vB;if(!(b instanceof Lk)){b=a;if(!b.$id$){c=Fd();b.$id$=c;}d=BA(a.$id$,4);b=new L;b.ob=H(16);F(b,b.n$,C(1));e=b.n$;if(d===null)d=C(2);F(b,e,d);return Bi(b);}c=b;if(!c.$id$){d=Fd();c.$id$=d;}d=BA(b.$id$,4);b=new L;b.ob=H(16);F(b,b.n$,C(1));e=b.n$;if(d===null)d=C(2);F(b,e,d);return Bi(b);}
let AGm=()=>{let b,c,d,e;b=new Jz;c=JZ(16);b.tA=0;d=Bt(Gt,c);e=d.data;b.qq=d;b.zE=0.75;b.uy=e.length*0.75|0;ABf=b;}
function CQ(){let a=this;D.call(a);a.os=null;a.oj=0;a.pz=0;a.CC=null;}
let BcD=()=>{let a=new CQ();AKI(a);return a;}
let Bdz=(a,b)=>{let c=new CQ();ALu(c,a,b);return c;}
let AKI=a=>{a.pz=1;a.os=Bt(D,16);}
let ALu=(a,b,c)=>{a.pz=b;a.os=Bt(D,c);}
let Dk=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=a.os;d=c.data;e=a.oj;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CN;i.oE=h;f=i;h.classObject=f;}}f=EP(i);if(f===null){b=new Dv;b.n_=1;b.oa=1;E(b);}if(f===BH(CO)){b=new V;b.n_=1;b.oa=1;E(b);}if(g<0){b=new D$;b.n_=1;b.oa=1;E(b);}f=EN(f.oE,g);j=f.data;k=a.oj;l=j.length;if(k<l)l=k;Ff(c,0,f,0,l);a.os=f;}f=f.data;g=a.oj;a.oj=g+1|0;f[g]=b;}
let XN=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=b.os;d=b.oj;e=a.os;f=e.data;g=a.oj;h=g+d|0;if(h<=f.length)i=e;else{j=8;if(j<=h)j=h;g=g*1.75|0;if(j>g)g=j;i=e.constructor;if(i===null)b=null;else{b=i.classObject;if(b===null){b=new CN;b.oE=i;k=b;i.classObject=k;}}b=EP(b);if(b===null){b=new Dv;b.n_=1;b.oa=1;Bu(b);E(b);}if(b===BH(CO)){b=new V;b.n_=1;b.oa=1;Bu(b);E(b);}if(g<0){b=new D$;b.n_=1;b.oa=1;Bu(b);E(b);}i=EN(b.oE,g);b=i.data;j=a.oj;l=b.length;if(j<l)l=j;Ff(e,0,i,0,l);a.os=i;}Ff(c,0,i,a.oj,d);a.oj=h;}
let VJ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if((c+d|0)>b.oj){e=new V;f=new L;f.ob=H(16);F(f,f.n$,C(50));N(f,f.n$,c,10);F(f,f.n$,C(51));N(f,f.n$,d,10);F(f,f.n$,C(52));c=b.oj;N(f,f.n$,c,10);b=Bi(f);e.n_=1;e.oa=1;e.od=b;E(e);}g=b.os;h=a.os;i=h.data;j=a.oj;k=j+d|0;if(k<=i.length)b=h;else{l=8;if(l<=k)l=k;j=j*1.75|0;if(l>j)j=l;e=h.constructor;if(e===null)b=null;else{b=e.classObject;if(b===null){b=new CN;b.oE=e;f=b;e.classObject=f;}}b=EP(b);if(b===null){b=new Dv;b.n_=1;b.oa=1;Bu(b);E(b);}if(b===BH(CO)){b=new V;b.n_=1;b.oa
=1;Bu(b);E(b);}if(j<0){b=new D$;b.n_=1;b.oa=1;Bu(b);E(b);}b=EN(b.oE,j);e=b.data;l=a.oj;m=e.length;if(l<m)m=l;Ff(h,0,b,0,m);a.os=b;}Ff(g,c,b,a.oj,d);a.oj=k;}
let AHM=(a,b)=>{let c,d;if(b<a.oj)return a.os.data[b];c=new O;d=new L;d.ob=H(16);F(d,d.n$,C(37));N(d,d.n$,b,10);F(d,d.n$,C(38));b=a.oj;N(d,d.n$,b,10);d=Bi(d);c.n_=1;c.oa=1;c.od=d;E(c);}
let WP=(a,b,c)=>{let d,e,f,g;a:{d=a.os;if(!(!c&&b!==null)){e=0;f=a.oj;while(e<f){if(d.data[e]===b){Qp(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.oj;while(true){if(e>=f)break a;g=d.data[e];if(b===g)c=1;else if(!(g instanceof P))c=0;else{g=g;c=b.oc!==g.oc?0:1;}if(c){Qp(a,e);return 1;}e=e+1|0;}}}return 0;}
let Qp=(a,b)=>{let c,d,e,f,g;c=a.oj;if(b<c){d=a.os;e=d.data;f=e[b];c=c-1|0;a.oj=c;if(!a.pz)e[b]=e[c];else CX(d,b+1|0,d,b,c-b|0);e[a.oj]=null;return f;}f=new O;g=new L;g.ob=H(16);F(g,g.n$,C(37));N(g,g.n$,b,10);F(g,g.n$,C(38));b=a.oj;N(g,g.n$,b,10);g=Bi(g);f.n_=1;f.oa=1;f.od=g;E(f);}
let WV=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.oj;if(c>=d){e=new O;f=new L;f.ob=H(16);F(f,f.n$,C(53));N(f,f.n$,c,10);F(f,f.n$,C(38));b=a.oj;N(f,f.n$,b,10);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}if(b>c){e=new O;f=new L;f.ob=H(16);F(f,f.n$,C(54));N(f,f.n$,b,10);F(f,f.n$,C(55));N(f,f.n$,c,10);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}g=a.os;h=(c-b|0)+1|0;i=d-h|0;if(a.pz){j=b+h|0;CX(g,j,g,b,d-j|0);}else{j=c+1|0;if(i>j)j=i;CX(g,j,g,b,d-j|0);}j=i;while(j<d){g.data[j]=null;j=j+1|0;}a.oj=i;}
let ABY=a=>{let b,c,d,e;b=a.oj;if(b){c=b-1|0;a.oj=c;d=a.os.data;e=d[c];d[c]=null;return e;}e=new Cb;e.n_=1;e.oa=1;e.od=C(33);E(e);}
let AA3=a=>{let b,c;b=a.oj;if(b)return a.os.data[b-1|0];c=new Cb;c.n_=1;c.oa=1;c.od=C(33);E(c);}
let ADl=a=>{let b,c,d,e,f,g;b=a.os;c=0;d=a.oj;e=null;if(c>d){e=new V;e.n_=1;e.oa=1;E(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.oj=0;}
let AAx=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new V;d=new L;d.ob=H(16);F(d,d.n$,C(56));N(d,d.n$,b,10);d=Bi(d);c.n_=1;c.oa=1;c.od=d;E(c);}e=a.oj;f=e+b|0;g=a.os;if(f>g.data.length){if(8>f)f=8;b=e*1.75|0;if(f>b)b=f;d=g.constructor;if(d===null)c=null;else{c=d.classObject;if(c===null){c=new CN;c.oE=d;h=c;d.classObject=h;}}c=EP(c);if(c===null){c=new Dv;c.n_=1;c.oa=1;E(c);}if(c===BH(CO)){c=new V;c.n_=1;c.oa=1;E(c);}if(b<0){c=new D$;c.n_=1;c.oa=1;E(c);}d=EN(c.oE,b);c=d.data;f=a.oj;i=c.length;if(f<i)i=f;Ff(g,0,d,0,i);a.os
=d;}return a.os;}
let PF=a=>{let b;if(AI8){b=new IS;b.rE=1;b.xw=a;b.BS=1;return b;}if(a.CC===null){b=new R$;b.C4=a;b.EP=1;a.CC=b;}return AD$(a.CC);}
let Ok=(a,b)=>{let c,d,e,f;if(b>=0){c=a.oj;if(c<=b)return;d=b;while(d<c){a.os.data[d]=null;d=d+1|0;}a.oj=b;return;}e=new V;f=new L;f.ob=H(16);F(f,f.n$,C(57));N(f,f.n$,b,10);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}
let AYB=a=>{let b,c,d,e,f,g,h;if(a.pz){b=a.os;c=1;d=0;e=a.oj;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.cF()|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=Fd();g.$id$=h;}return a.$id$;}
let APC=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.pz)return 0;if(!(b instanceof CQ))return 0;c=b;if(!c.pz)return 0;d=a.oj;if(d!=c.oj)return 0;e=a.os;f=c.os;g=0;c:{while(g<d){e:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cG(j))break e;else break c;}if(j!==null)break c;}g=g+1|0;}return 1;}return 0;}
let AUI=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.oj)return C(58);b=a.os;c=new Kv;d=H(32);e=d.data;c.pe=d;f=c.oW;if(f==e.length)DQ(c,f+1|0);b=b.data;e=c.pe.data;g=c.oW;c.oW=g+1|0;e[g]=91;h=b[0];if(h===null)KP(c);else{h=h.l();if(h===null)KP(c);else{i=h.oc.length;j=c.oW+i|0;if(j>c.pe.data.length)DQ(c,j);H4(h,0,i,c.pe,c.oW);c.oW=j;}}i=1;while(i<a.oj){g=C(59).oc.length;k=c.oW+g|0;if(k>c.pe.data.length)DQ(c,k);H4(C(59),0,g,c.pe,c.oW);c.oW=k;h=b[i];if(h===null)KP(c);else{h=h.l();if(h===null)KP(c);else{k=h.oc.length;j=c.oW
+k|0;if(j>c.pe.data.length)DQ(c,j);H4(h,0,k,c.pe,c.oW);c.oW=j;}}i=i+1|0;}f=c.oW;if(f==c.pe.data.length)DQ(c,f+1|0);u:{b=c.pe;e=b.data;g=c.oW;f=g+1|0;c.oW=f;e[g]=93;if(!f)c=C(43);else{c=new P;S();g=e.length;if(f<0)break u;if(f>(g-0|0))break u;c.oc=Q(b.data,0,f);}return c;}c=new O;c.n_=1;c.oa=1;E(c);}
function J5(){let a=this;D.call(a);a.vQ=0;a.sD=null;a.qa=null;a.G7=0.0;a.DQ=0;a.zv=0;a.yp=0;}
let A06=null;let F7=(a,b)=>{let c=new J5();AFi(c,a,b);return c;}
let AFi=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.G7=c;d=NE(b,c);a.DQ=d*c|0;b=d-1|0;a.yp=b;a.zv=Ec(I(b));a.sD=Bt(D,d);a.qa=Bt(D,d);return;}e=new V;f=new L;f.ob=H(16);F(f,f.n$,C(60));EQ(f,f.n$,c);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}
let Dm=(a,b)=>{let c,d,e;if(b===null){c=new V;c.n_=1;c.oa=1;c.od=C(61);E(c);}d=a.sD;e=Z(T(W(I(b.cF()),B(2135587861, 2654435769)),a.zv));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cG(b))break;e=(e+1|0)&a.yp;}return e;}
let B2=(a,b,c)=>{let d,e,f;d=Dm(a,b);if(d>=0){e=a.qa.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.sD.data;e[d]=b;a.qa.data[d]=c;d=a.vQ+1|0;a.vQ=d;if(d>=a.DQ)ACL(a,e.length<<1);return null;}
let ACn=(a,b)=>{let c;c=Dm(a,b);return c<0?null:a.qa.data[c];}
let YB=(a,b)=>{let c,d,e,f,g,h,i,j;c=Dm(a,b);if(c<0)return null;d=a.sD;e=a.qa.data;f=e[c];g=a.yp;h=(c+1|0)&g;while(true){i=d.data;b=i[h];if(b===null)break;j=Z(T(W(I(b.cF()),B(2135587861, 2654435769)),a.zv));if(((h-j|0)&g)>((c-j|0)&g)){i[c]=b;e[c]=e[h];c=h;}h=(h+1|0)&g;}i[c]=null;e[c]=null;a.vQ=a.vQ-1|0;return f;}
let ACL=(a,b)=>{let c,d,e,f,g,h,i,j;b:{c=a.sD.data.length;a.DQ=b*a.G7|0;d=b-1|0;a.yp=d;a.zv=Ec(I(d));e=a.sD;f=a.qa;a.sD=Bt(D,b);a.qa=Bt(D,b);if(a.vQ>0){d=0;while(true){if(d>=c)break b;g=e.data[d];if(g!==null){h=f.data[d];i=a.sD;b=Z(T(W(I(g.cF()),B(2135587861, 2654435769)),a.zv));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.yp;}j[b]=g;a.qa.data[b]=h;}d=d+1|0;}}}}
let AMx=()=>{A06=new D;}
let XL=G(J5);
let AH4=G();
function EH(){let a=this;D.call(a);a.r$=0;a.qn=0;a.qR=0;a.qP=0;a.sE=0;a.qG=null;a.sj=0;a.t3=0;}
let ARc=(a,b)=>{if(!(b instanceof EH))return 0;return XE(a,b);}
let XE=(a,b)=>{let c,d,e;b:{if(b!==null&&a.r$==b.r$&&a.qn==b.qn&&a.qP==b.qP&&a.qR==b.qR){c=a.qG;d=b.qG;if(c===d)e=1;else if(!(d instanceof P))e=0;else{d=d;e=c.oc!==d.oc?0:1;}if(e&&a.sj==b.sj){e=1;break b;}}e=0;}return e;}
let A0p=a=>{let b,c,d;b:{b=541*((541*((a.t3<<8)+(a.sj&255)|0)|0)+a.qn|0)|0;c=a.qG;if(!c.pv){d=0;while(true){if(d>=c.oc.length)break b;c.pv=(31*c.pv|0)+c.oc.charCodeAt(d)|0;d=d+1|0;}}}return b+c.pv|0;}
let AA9=G();
let AEN=G();
let AFF=G();
let AFa=G();
let PD=G();
let BcU=null;let Bip=()=>{Bip=Bj(PD);APe();}
let APe=()=>{let b,c,d;b=new La;BcO();c=new Bf;BU();b.FK=c;d=new Bf;b.FU=d;b.FA=new Bf;b.Hm=new Bf;c.on=0.0;c.op=0.0;c.oo=0.0;d.on=0.0;d.op=0.0;d.oo=0.0;AFX(b,c,d);BcU=b;}
let VU=G();
let AFk=G();
let AE6=G();
let YO=G();
let AAj=G();
let XC=G();
let AAN=G();
let Yb=G();
let ACs=G();
let ACN=G();
let Ha=G(BV);
let BgL=null;let Bgl=null;let Bec=null;let Bbb=()=>{Bbb=Bj(Ha);A2e();}
let A2e=()=>{let b,c;b=new Ha;Bbb();b.ol=C(62);b.oi=0;BgL=b;c=new Ha;c.ol=C(63);c.oi=1;Bgl=c;Bec=R(Ha,[b,c]);}
let YU=G();
let Ui=G(0);
let Ep=G();
let V3=G(Ep);
let V2=G(Ep);
let Ym=G(Ep);
let ADd=G(Ep);
let ZI=G(Ep);
let LD=G(Ep);
let AC$=G(LD);
let I4=G(0);
let ADw=G();
let Gg=G(0);
let ZC=G();
let AAJ=G();
let WB=G();
let FI=G();
let Zo=G(FI);
let Ib=G(FI);
let EA=G(Ib);
let Bal=null;let Biq=()=>{Biq=Bj(EA);AYi();}
let AYi=()=>{let b;b=new Bf;BU();Bal=b;}
let AGc=G();
let AG6=G(EA);
let AEJ=G(EA);
let Rh=G(FI);
let A2G=null;let AM$=()=>{A2G=CT(3);}
let MZ=G(FI);
let AB0=G(MZ);
let AC8=G(EA);
let HV=G(Ib);
let YE=G(HV);
let AEG=G(EA);
let AFc=G(EA);
let YD=G(HV);
let FV=G(BV);
let BeN=null;let Bfe=null;let Bam=null;let A_Z=null;let Bd_=()=>{Bd_=Bj(FV);ARv();}
let ARv=()=>{let b,c,d;b=new FV;Bd_();b.ol=C(64);b.oi=0;BeN=b;c=new FV;c.ol=C(65);c.oi=1;Bfe=c;d=new FV;d.ol=C(66);d.oi=2;Bam=d;A_Z=R(FV,[b,c,d]);}
let Hb=G();
let L4=G(Hb);
let ABx=G(L4);
let F0=G(BV);
let Bgj=null;let Bcy=null;let A$5=null;let Bgw=null;let BaY=()=>{BaY=Bj(F0);A20();}
let A20=()=>{let b,c,d;b=new F0;BaY();b.ol=C(67);b.oi=0;Bgj=b;c=new F0;c.ol=C(68);c.oi=1;Bcy=c;d=new F0;d.ol=C(69);d.oi=2;A$5=d;Bgw=R(F0,[b,c,d]);}
let DC=G(Hb);
let Jd=G(DC);
let ACE=G();
let FJ=G(DC);
let Bf0=null;let BfZ=null;let Bf1=null;let Bgn=null;let Bir=()=>{Bir=Bj(FJ);A3K();}
let A3K=()=>{let b;b=new Bf;BU();Bf0=b;BfZ=new Bf;Bf1=new Bf;b=new Fs;QF();b.uT=0.0;b.uQ=0.0;b.uR=0.0;b.uS=1.0;Bgn=b;}
let Fx=G(FJ);
let GS=G(Fx);
let ADv=G(GS);
let I7=G(DC);
let ABj=G(I7);
let AG4=G(DC);
let GY=G(DC);
let VX=G(GY);
let H2=G(DC);
let ADq=G(Fx);
let XS=G(Fx);
let Lg=G(DC);
let AF0=G(Lg);
let ACk=G(GY);
let AEM=G(GS);
let Zn=G(DC);
let AFg=G(GY);
let AF3=G(DC);
let ZS=G(FJ);
let AEa=G(D6);
let Wu=G(D6);
let Wz=G(Fx);
let Zq=G(H2);
let AHP=G(Jd);
let Y7=G(Jd);
let AGl=G(H2);
let AE3=G(GS);
let AH1=G(I7);
let F1=G(Hb);
let YF=G(F1);
let G3=G();
let ZB=G(G3);
let AGD=G(F1);
let AG3=G(F1);
let AAy=G(G3);
let W9=G(F1);
let AAk=G(G3);
let Mz=G(0);
let RG=G(0);
function CN(){let a=this;D.call(a);a.oQ=null;a.oE=null;a.wz=null;}
let A71=0;let Bis=a=>{let b=new CN();A8t(b,a);return b;}
let A8t=(a,b)=>{let c;a.oE=b;c=a;b.classObject=c;}
let Bbs=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new CN;c.oE=b;d=c;b.classObject=d;}return c;}
let AP6=a=>{let b,c,d;b=a;if(!b.$id$){c=Fd();b.$id$=c;}d=a.$id$;b=new L;b.ob=H(16);F(b,b.n$,C(70));N(b,b.n$,d,10);return Bi(b);}
let AEW=a=>{if(a.oQ===null)a.oQ=Bv(a.oE.$meta.name);return a.oQ;}
let EP=a=>{let b,c,d;b=a.oE.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new CN;c.oE=b;d=c;b.classObject=d;}}return c;}
let A3u=()=>{E4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){Qe(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:CO,callable:function(obj,args){AV8();VW();return null;}}];DZ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){ADI(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[DZ],returnType:CO,callable
:function(obj,args){RT(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){Yj(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:P,callable:function(obj,args){return Or(obj);}}];DH.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){U_(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FA,ET],returnType:
CO,callable:function(obj,args){OD(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FA,ET,BD,Fr,Es,Kp],returnType:CO,callable:function(obj,args){QA(obj,args[0],args[1],args[2],HN(args[3]),D4(args[4]),Ko(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[FA,ET,Es,Es,BD,Fr,Es,Kp,P],returnType:CO,callable:function(obj,args){Uz(obj,args[0],args[1],D4(args[2]),D4(args[3]),args[4],HN(args[5]),D4(args[6]),Ko(args[7]),args[8]);return null;}},
{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[FA,ET],returnType:CO,callable:function(obj,args){BfK(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[FA,ET,BD,Fr,Es,Kp],returnType:CO,callable:function(obj,args){BeV(obj,args[0],args[1],args[2],HN(args[3]),D4(args[4]),Ko(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[FA,ET,Es,Es,BD,Fr,Es,Kp,P],returnType:CO,callable:function(obj,args){Hi(obj,args[0],args[1],D4(args[2]),
D4(args[3]),args[4],HN(args[5]),D4(args[6]),Ko(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[GH],returnType:CO,callable:function(obj,args){SN(obj,args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[Fr,Es],returnType:CO,callable:function(obj,args){TK(obj,HN(args[0]),D4(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[GH,DZ,Fr,P],returnType:CO,callable:function(obj,args){Ow(obj,args[0],args[1],
HN(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[GH,DZ,Es],returnType:DZ,callable:function(obj,args){return QP(obj,args[0],args[1],D4(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[GH,DZ],returnType:CO,callable:function(obj,args){L_(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[KX,GH],returnType:Fr,callable:function(obj,args){return Li(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers
:0,accessLevel:1,parameterTypes:[CQ,GH],returnType:Fr,callable:function(obj,args){return U3(obj,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[ET,Es,Es],returnType:Es,callable:function(obj,args){return Qn(obj,args[0],D4(args[1]),D4(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CO,callable:function(obj,args){UX(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:P,callable:function(obj,args){return Zj(obj
);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:CO,callable:function(obj,args){E7();AC1();return null;}}];}
let NW=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.oE.$meta.primitive?1:0)&&!(a.oE.$meta.item===null?0:1)){if(a.wz===null){if(!A71){A71=1;A3u();}b=a.oE.$meta.methods;a.wz=Bt(I3,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof HL())?e:e.oR;g=Bv(f.name);if(g===C(71))h=1;else if(!(C(71) instanceof P))h=0;else{e=C(71);h=g.oc!==e.oc?0:1;}if(h){g=f.parameterTypes;i=Bt(CN,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new CN;e.oE=l;m
=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.wz.data;h=c+1|0;e=new I3;g=Bv(f.name);k=f.modifiers;n=f.accessLevel;f=Em(f.callable,"call");e.rq=a;e.Jb=g;e.x6=k;e.BE=n;e.tW=i;e.Dz=f;j[c]=e;c=h;}d=d+1|0;}i=a.wz;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new CN;e.oE=b;f=e;b.classObject=f;}}b=EP(e);if(b===null){e=new Dv;e.n_=1;e.oa=1;E(e);}if(b===BH(CO)){e=new V;e.n_=1;e.oa=1;E(e);}if(c<0){e=new D$;e.n_=1;e.oa=1;E(e);}i=i.data;f=EN(b.oE,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=i[c];c
=c+1|0;}a.wz=f;}return a.wz.t();}return Bt(I3,0);}
let AAX=a=>{let b,c,d,e,f,g,h,i,j,k;b=(NW(a)).data;c=b.length;d=Bt(I3,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(O_(h.x6,h.BE)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=B9(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new CN;h.oE=j;k=h;j.classObject=k;}}j=EP(h);if(j===null){h=new Dv;h.n_=1;h.oa=1;E(h);}if(j===BH(CO)){h=new V;h.n_=1;h.oa=1;E(h);}if(f<0){h=new D$;h.n_=1;h.oa=1;E(h);}k=EN(j.oE,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;}
let AGW=(a,b)=>{let c,d,e,f;c=(NW(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new IW;f.n_=1;f.oa=1;E(f);}f=c[e];if(AGV(f.tW.t(),b))break;e=e+1|0;}return f;}
let AGT=(a,b)=>{let c,d,e,f,g;c=(NW(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new IW;f.n_=1;f.oa=1;E(f);}f=c[e];g=!(O_(f.x6,f.BE)&1)?0:1;if(g&&AGV(f.tW.t(),b))break;e=e+1|0;}return f;}
let ACR=G();
let ASr=b=>{let c,d,e,f,g;if(b===null)return null;c=BW(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof HL())?g:g.oR;e=e+1|0;}return c;}
let CK=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();}
let Em=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;}
let ACy=G();
let AIQ=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;}
let TZ=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(TZ(d[e],c))return 1;e=e+1|0;}return 0;}
let GK=b=>{setTimeout(()=>{BbP(ACh)(b);},0);}
let ACh=b=>{b.cV();}
let QQ=(b,c)=>{setTimeout(()=>{ACh(b);},c);}
let APf=()=>{return [];}
function Ea(){let a=this;D.call(a);a.od=null;a.p$=null;a.n_=0;a.oa=0;a.Ih=null;}
let Bit=()=>{let a=new Ea();Bm(a);return a;}
let Biu=a=>{let b=new Ea();KW(b,a);return b;}
let Biv=(a,b)=>{let c=new Ea();AE0(c,a,b);return c;}
let Bm=a=>{a.n_=1;a.oa=1;}
let KW=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
let AE0=(a,b,c)=>{a.n_=1;a.oa=1;a.od=b;a.p$=c;}
let Bu=a=>{return a;}
let ATr=a=>{return a.od;}
let ANG=a=>{return a.cW();}
let A7M=a=>{let b;b=a.p$;if(b===a)b=null;return b;}
let A2l=a=>{let b,c;if(Fb===null){b=new Dp;b.p5=Kk;c=new L;c.ob=H(16);b.o6=c;b.p2=H(32);b.p_=0;Do();b.p7=Du;Fb=b;}J3(a,Fb);}
let J3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CN;d.oE=c;e=d;c.classObject=e;}}if(d.oQ===null)d.oQ=Bv(d.oE.$meta.name);e=d.oQ;c=b.o6;F(c,c.n$,e);Dy(b);f=a.cW();if(f!==null){c=new L;c.ob=H(16);F(c,c.n$,C(72));F(c,c.n$,f);e=Bi(c);c=b.o6;F(c,c.n$,e);Dy(b);}o:{g=b.p2;g.data[0]=10;R9(b,g,0,1);g=a.Ih;if(g!==null){g=g.data;h=g.length;i=0;while(true){if(i>=h)break o;d=g[i];c=b.o6;F(c,c.n$,C(73));Dy(b);e=b.o6;F(e,e.n$,d===null?C(2):d.l());j=e.n$;Bp(e,j,j
+1|0);e.ob.data[j]=10;Dy(b);i=i+1|0;}}}c=a.p$;if(c!==null&&c!==a){e=b.o6;F(e,e.n$,C(74));Dy(b);J3(a.p$,b);}}
let Da=G(Ea);
let Biw=()=>{let a=new Da();BY(a);return a;}
let BY=a=>{a.n_=1;a.oa=1;}
let B0=G(Da);
let Bix=()=>{let a=new B0();K8(a);return a;}
let Bh4=a=>{let b=new B0();U$(b,a);return b;}
let K8=a=>{a.n_=1;a.oa=1;}
let U$=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
let AEF=G(B0);
let ET=G(0);
function P(){D.call(this);this.pv=0;}
let Bct=null;let A4T=null;let BcS=null;let S=()=>{S=Bj(P);AUW();}
let Biy=a=>{let b=new P();AB3(b,a);return b;}
let Zs=a=>{let b=new P();Xy(b,a);return b;}
let OR=(a,b,c)=>{let d=new P();Vn(d,a,b,c);return d;}
let AB3=(a,b)=>{S();a.oc=Q(b.data,0,b.data.length);}
let Xy=(a,b)=>{a.oc=b;}
let Vn=(a,b,c,d)=>{let e,f;S();e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.oc=Q(b.data,c,d);return;}f=new O;f.n_=1;f.oa=1;E(f);}
let Dz=(a,b)=>{let c;if(b>=0&&b<a.oc.length)return a.oc.charCodeAt(b);c=new Ba;c.n_=1;c.oa=1;E(c);}
let FT=a=>{return a.oc.length;}
let H4=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.oc.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){Bdu(a.oc,b,d.data,e,g);return;}}h=new O;h.n_=1;h.oa=1;E(h);}
let KK=(a,b,c)=>{let d,e,f;if((c+b.oc.length|0)>a.oc.length)return 0;d=0;a:{d:{while(d<b.oc.length){if(d<0)break a;if(d>=b.oc.length)break a;e=b.oc.charCodeAt(d);f=c+1|0;if(c<0)break d;if(c>=a.oc.length)break d;if(e!=a.oc.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let Gq=(a,b)=>{if(a===b)return 1;return KK(a,b,0);}
let ST=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.oc.length>a.oc.length)return 0;c=0;d=a.oc.length-b.oc.length|0;d:{k:{while(d<a.oc.length){if(d<0)break d;if(d>=a.oc.length)break d;e=a.oc.charCodeAt(d);f=c+1|0;if(c<0)break k;if(c>=b.oc.length)break k;if(e!=b.oc.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let E9=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.oc.length)return (-1);if(a.oc.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.oc.length-1|0))return (-1);if(a.oc.charCodeAt(c)==e&&a.oc.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;}
let ADi=(a,b)=>{return E9(a,b,0);}
let GW=(a,b,c)=>{let d,e,f,g;d=a.oc.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.oc.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.oc.charCodeAt(d)==g){b=d-1|0;if(a.oc.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;}
let MR=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.oc.length-b.oc.length|0;d:{k:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.oc.length)break c;f=c+e|0;if(f<0)break d;if(f>=a.oc.length)break d;g=a.oc.charCodeAt(f);if(e<0)break k;if(e>=b.oc.length)break k;if(g!=b.oc.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let AF2=(a,b)=>{return MR(a,b,0);}
let Pa=(a,b,c)=>{let d,e,f;d=a.oc.length-b.oc.length|0;if(c<d)d=c;d:{k:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.oc.length)break c;f=d+e|0;if(f<0)break d;if(f>=a.oc.length)break d;f=a.oc.charCodeAt(f);if(e<0)break k;if(e>=b.oc.length)break k;if(f!=b.oc.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let Cw=(a,b,c)=>{let d,e,f;d=a.oc.length;e=B9(b,c);if(!e)return A4T;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return Zs(a.oc.substring(b,c));f=new Ba;f.n_=1;f.oa=1;E(f);}
let Jx=(a,b)=>{return Cw(a,b,a.oc.length);}
let Pe=(a,b,c)=>{return Cw(a,b,c);}
let DP=(a,b)=>{let c,d,e,f;c=a.oc.length-b.oc.length|0;d=0;b:{a:{while(d<=c){e=0;while(true){if(e>=b.oc.length)return 1;f=d+e|0;if(f<0)break b;if(f>=a.oc.length)break b;f=a.oc.charCodeAt(f);if(e<0)break a;if(e>=b.oc.length)break a;if(f!=b.oc.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let Nz=(a,b,c)=>{let d,e,f,g,h,i;d=new L;d.ob=H(16);e=a.oc.length-b.oc.length|0;f=0;a:{d:{k:while(true){if(f>e){b=Cw(a,f,a.oc.length);g=d.n$;if(b===null)b=C(2);F(d,g,b);return Bi(d);}g=0;c:{while(g<b.oc.length){h=f+g|0;if(h<0)break d;if(h>=a.oc.length)break d;i=a.oc.charCodeAt(h);if(g<0)break k;if(g>=b.oc.length)break k;if(i!=b.oc.charCodeAt(g)){if(f<0)break a;if(f>=a.oc.length)break a;i=a.oc.charCodeAt(f);h=d.n$;Bp(d,h,h+1|0);d.ob.data[h]=i;break c;}g=g+1|0;}F(d,d.n$,c===null?C(2):c);f=f+(b.oc.length-1|0)|
0;}f=f+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let AEU=a=>{let b,c,d;b=0;c=a.oc.length-1|0;b:{while(true){if(b>c)break b;if(b<0)break;if(b>=a.oc.length)break;if(a.oc.charCodeAt(b)>32)break b;b=b+1|0;}d=new Ba;d.n_=1;d.oa=1;E(d);}c:{while(b<=c){if(c<0)break c;if(c>=a.oc.length)break c;if(a.oc.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cw(a,b,c+1|0);}d=new Ba;d.n_=1;d.oa=1;E(d);}
let DJ=a=>{return a;}
let AC0=b=>{S();return b===null?C(2):b.l();}
let AFL=b=>{let c;S();c=new L;c.ob=H(16);N(c,c.n$,b,10);return Bi(c);}
let Gf=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof P))return 0;c=b;return a.oc!==c.oc?0:1;}
let Y3=(a,b)=>{let c,$$je;b:{try{c=AFM(a,AI0(DJ(b)));}catch($$e){$$je=BG($$e);if($$je instanceof Na){break b;}else if($$je instanceof Iq){break b;}else{throw $$e;}}return c;}b=new MV;b.n_=1;b.oa=1;E(b);}
let AFM=(a,b)=>{let c,d,e,f,g,h,$$je;c=A_w(a.oc);d=c.data.length;e=new Jw;f=0+d|0;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=f;e.vY=0;e.xA=0;e.uF=c;b:{try{g=b.c6();EM();e=SQ(Rg(P2(g,Fu),Fu),e);break b;}catch($$e){$$je=BG($$e);if($$je instanceof GP){e=$$je;}else{throw $$e;}}g=new NQ;g.n_=1;g.oa=1;g.od=C(75);g.p$=e;E(g);}h=e.of;if(!h&&e.oe==e.oy)return e.oZ;c=BW(e.oe-h|0);SC(e,c,0,c.data.length);return c;}
let A5T=a=>{let b;b:{if(!a.pv){b=0;while(true){if(b>=a.oc.length)break b;a.pv=(31*a.pv|0)+a.oc.charCodeAt(b)|0;b=b+1|0;}}}return a.pv;}
let AE2=(a,b)=>{return J$(Hz(b,0),a,0);}
let Q3=(a,b,c)=>{return J$(Hz(b,0),a,c);}
let Xa=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;b=Pg(Hz(b,0),a);d=new Lf;d.ob=H(16);b.wq=0;e=b.tS.oc.length;b.Bv=e;f=b.qT;g=b.tS;h=b.wq;f.qY=0;f.xs=2;i=f.pF.data;j=0;k=i.length;if(j>k){b=new V;Bm(b);E(b);}while(j<k){l=j+1|0;i[j]=(-1);j=l;}i=f.ps.data;m=0;j=i.length;if(m>j){b=new V;Bm(b);E(b);}while(m<j){k=m+1|0;i[m]=(-1);m=k;}if(g!==null)f.sy=g;if(h>=0){f.qD=h;f.oX=e;}f.sa=f.qD;b.BA=0;b.CJ=null;f.wL=(-1);while(true){if(!H8(b)){c=b.tS;b=Cw(c,b.BA,c.oc.length);l=b.oc.length;TC(d,d.n$,b,0,l);return Bi(d);}b.CU=AF_(b,
c);f=b.tS;j=b.BA;g=b.qT;if(!g.qY){b=new Cb;BY(b);E(b);}if(0>=g.r5){b=new O;c=new L;F$(c);Le(c,0);c=Bi(c);b.n_=1;b.oa=1;b.od=c;E(b);}f=Cw(f,j,g.pF.data[0]);h=f.oc.length;TC(d,d.n$,f,0,h);f=b.CU;F(d,d.n$,f);f=b.qT;if(!f.qY)break;if(0>=f.r5){b=new O;c=new L;F$(c);Le(c,0);c=Bi(c);b.n_=1;b.oa=1;b.od=c;E(b);}b.BA=f.pF.data[1];}b=new Cb;BY(b);E(b);}
let AUW=()=>{let b;Bct=H(0);b=new P;S();b.oc="";A4T=b;BcS=new TJ;}
let G1=G(Ea);
let Jk=G(G1);
let AD5=G(Jk);
let E3=G();
function FR(){E3.call(this);this.rB=0;}
let AXv=null;let Gr=null;let SD=(b,c)=>{let d;if(!(c>=2&&c<=36))c=10;d=new Bx;d.ob=H(20);return (N(d,d.n$,b,c)).l();}
let Lc=(b,c)=>{if(b!==null)return Q6(b,0,b.oc.length,c);b=new CU;b.n_=1;b.oa=1;b.od=C(76);E(b);}
let Q6=(b,c,d,e)=>{let f,g,h,i,j,k,l,m;if(c==d){b=new CU;b.n_=1;b.oa=1;b.od=C(77);E(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.oc.length){c:{switch(b.oc.charCodeAt(c)){case 43:g=c+1|0;break c;case 45:f=1;g=c+1|0;break c;default:}g=c;}h=0;if(g==d){b=new CU;b.n_=1;b.oa=1;E(b);}g:{while(g<d){i=g+1|0;if(g<0)break g;if(g>=b.oc.length)break g;j=Ke(b.oc.charCodeAt(g));if(j<0){k=new CU;b=Cw(b,c,d);if(b===null)b=C(2);l=new L;l.ob=H(16);F(l,l.n$,C(78));F(l,l.n$,b);b=Bi(l);k.n_=1;k.oa=1;k.od=b;E(k);}if(j>=e){k=new CU;m=Cw(b,
c,d);if(m===null)m=C(2);b=new L;b.ob=H(16);F(b,b.n$,C(79));N(b,b.n$,e,10);F(b,b.n$,C(72));F(b,b.n$,m);b=Bi(b);k.n_=1;k.oa=1;k.od=b;E(k);}h=C7(e,h)+j|0;if(h<0){if(i==d&&h==(-2147483648)&&f)return (-2147483648);k=new CU;m=Cw(b,c,d);if(m===null)m=C(2);b=new L;b.ob=H(16);Ez(b,b.n$,C(80));CS(b,m);LE(k,Cy(b));E(k);}g=i;}if(f)h= -h|0;return h;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new CU;k=new L;k.ob=H(16);F(k,k.n$,C(81));N(k,k.n$,e,10);k=Bi(k);b.n_=1;b.oa=1;b.od=k;E(b);}
let Dd=b=>{if(b!==null)return Q6(b,0,b.oc.length,10);b=new CU;b.n_=1;b.oa=1;b.od=C(76);E(b);}
let Cc=b=>{let c;if(b>=(-128)&&b<=127){Gj();return Gr.data[b+128|0];}c=new FR;c.rB=b;return c;}
let Gj=()=>{let b,c,d,e,f;b:{if(Gr===null){b=Bt(FR,256);c=b.data;Gr=b;d=0;e=c.length;while(true){if(d>=e)break b;f=new FR;f.rB=d-128|0;c[d]=f;d=d+1|0;}}}}
let D4=a=>{return a.rB;}
let A2E=a=>{return I(a.rB);}
let AI4=a=>{return a.rB;}
let AVn=a=>{let b,c;b=a.rB;c=new Bx;c.ob=H(20);return (N(c,c.n$,b,10)).l();}
let Ee=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
let EY=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
let A8g=()=>{AXv=BH(Es);}
function Bx(){let a=this;D.call(a);a.ob=null;a.n$=0;}
let Biz=()=>{let a=new Bx();F$(a);return a;}
let BiA=a=>{let b=new Bx();Jn(b,a);return b;}
let F$=a=>{a.ob=H(16);}
let Jn=(a,b)=>{a.ob=H(b);}
let M_=(a,b)=>{F(a,a.n$,b===null?C(2):b.l());return a;}
let LT=(a,b)=>{return a.k(a.n$,b);}
let F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.n$){if(c===null)c=C(2);else if(c.oc.length?0:1)return a;a.dk(a.n$+c.oc.length|0);d=a.n$-1|0;while(d>=b){a.ob.data[d+c.oc.length|0]=a.ob.data[d];d=d+(-1)|0;}a.n$=a.n$+c.oc.length|0;e=0;r:{while(e<c.oc.length){f=a.ob;d=b+1|0;if(e<0)break r;if(e>=c.oc.length)break r;f.data[b]=c.oc.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let Le=(a,b)=>{return N(a,a.n$,b,10);}
let AB8=(a,b,c)=>{return N(a,a.n$,b,c);}
let N=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}d:{if(Gy(c,d)<0){if(e)Bp(a,b,b+1|0);else{Bp(a,b,b+2|0);f=a.ob.data;g=b+1|0;f[b]=45;b=g;}a.ob.data[b]=Ji(c,d);}else{h=1;i=1;j=EC((-1),d);o:{while(true){k=C7(h,d);if(Gy(k,c)>0){k=h;break o;}i=i+1|0;if(Gy(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bp(a,b,b+i|0);if(e)e=b;else{f=a.ob.data;e=b+1|0;f[b]=45;}while(true){if(!k)break d;f=a.ob.data;b=e+1|0;f[e]=Ji(EC(c,k),d);c=BeM(c,k);k=EC(k,d);e=b;}}}return a;}
let P7=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=1;if(GG(c,M)){e=0;c=HI(c);}d:{f=I(d);if(E8(c,f)<0){if(e)Bp(a,b,b+1|0);else{Bp(a,b,b+2|0);g=a.ob.data;h=b+1|0;g[b]=45;b=h;}a.ob.data[b]=Ji(Z(c),d);}else{i=1;j=I(1);k=EI(I(-1),f);o:{while(true){l=W(j,f);if(E8(l,c)>0){l=j;break o;}i=i+1|0;if(E8(l,k)>0)break;j=l;}}if(!e)i=i+1|0;Bp(a,b,b+i|0);if(e)e=b;else{g=a.ob.data;e=b+1|0;g[b]=45;}while(true){if(Dh(l,M))break d;g=a.ob.data;b=e+1|0;g[e]=Ji(Z((EI(c,l))),d);c=AB7(c,l);l=EI(l,f);e=b;}}}return a;}
let EQ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B9(c,0.0);if(!d){if(1.0/c===Infinity){Bp(a,b,b+3|0);e=a.ob.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bp(a,b,b+4|0);e=a.ob.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bp(a,b,b+3|0);e=a.ob.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bp(a,b,b+8|0);d=b;}else{Bp(a,b,b+9|0);e=a.ob.data;d=b+1|0;e[b]=45;}e=a.ob.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A10;AFu(c,f);d=f.C0;g=f.CR;h=f.Fa;i=1;j=1;if(h)j=2;k=9;l=AUl(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Kr(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bp(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.ob.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.ob.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;p
=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.ob.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.ob.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
let MP=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B9(c,0.0);if(!d){if(1.0/c===Infinity){Bp(a,b,b+3|0);e=a.ob.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bp(a,b,b+4|0);e=a.ob.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bp(a,b,b+3|0);e=a.ob.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bp(a,b,b+8|0);d=b;}else{Bp(a,b,b+9|0);e=a.ob.data;d=b+1|0;e[b]=45;}e=a.ob.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AME;X5(c,f);g=f.Df;h=f.CG;i=f.E7;j=1;k=1;if(i)k=2;l=18;m=ASq(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Kr(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bp(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.ob.data;k=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.ob.data;b=k+1|0;e[k]=48;k=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(Ga(p,M))d=0;else{d=Z(BS(g,p));g=Dx(g,p);}e=a.ob.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=BS(p,I(10));q=q+1|0;}if(h){e=a.ob.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
let AUl=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
let ASq=b=>{let c,d,e,f,g;c=I(1);d=0;e=16;f=AW3.data;g=f.length-1|0;while(g>=0){if(Dh(Dx(b,W(c,f[g])),M)){d=d|e;c=W(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
let Tj=(a,b)=>{return a.dv(a.n$,b);}
let Ez=(a,b,c)=>{F(a,b,c===null?C(2):c.l());return a;}
let R7=(a,b)=>{let c,d,e,f,g,h;c=a.ob.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=H(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.ob=g;}
let Bi=a=>{let b,c,d,e,f;b=new P;c=a.ob;d=c.data;e=a.n$;S();f=d.length;if(e>=0&&e<=(f-0|0)){b.oc=Q(c.data,0,e);return b;}b=new O;b.n_=1;b.oa=1;E(b);}
let ADY=a=>{return a.n$;}
let VI=(a,b)=>{let c;if(b>=0&&b<a.n$)return a.ob.data[b];c=new O;c.n_=1;c.oa=1;E(c);}
let AFs=(a,b,c,d,e)=>{let f,g;if(d<=e&&e<=c.oc.length&&d>=0){Bp(a,b,(b+e|0)-d|0);d:{while(d<e){f=a.ob;g=b+1|0;if(d<0)break d;if(d>=c.oc.length)break d;f.data[b]=c.oc.charCodeAt(d);d=d+1|0;b=g;}return a;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new O;c.n_=1;c.oa=1;E(c);}
let My=(a,b,c,d,e)=>{let f,g,h,i;Bp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ob.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let U2=(a,b)=>{let c,d,e,f;if(b>=0){c=a.n$;if(b<c){c=c-1|0;a.n$=c;while(b<c){d=a.ob.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ba;f.n_=1;f.oa=1;E(f);}
let AHJ=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B9(b,c);if(d<=0){e=a.n$;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.n$=e-(c-b|0)|0;g=0;while(g<f){h=a.ob.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Ba;i.n_=1;i.oa=1;E(i);}
let Bp=(a,b,c)=>{let d,e,f,g;d=a.n$;e=d-b|0;a.dk((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.ob.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.n$=a.n$+(c-b|0)|0;}
let IY=G(0);
let L=G(Bx);
let Dw=()=>{let a=new L();A92(a);return a;}
let A92=a=>{a.ob=H(16);}
let CS=(a,b)=>{F(a,a.n$,b===null?C(2):b.l());return a;}
let B4=(a,b)=>{F(a,a.n$,b);return a;}
let EX=(a,b)=>{N(a,a.n$,b,10);return a;}
let Ey=(a,b)=>{let c;c=a.n$;Bp(a,c,c+1|0);a.ob.data[c]=b;return a;}
let AH6=(a,b,c)=>{F(a,b,c===null?C(2):c.l());return a;}
let Il=(a,b,c)=>{Bp(a,b,b+1|0);a.ob.data[b]=c;return a;}
let AAS=(a,b,c)=>{AHJ(a,b,c);return a;}
let G2=(a,b,c)=>{F(a,b,c);return a;}
let I5=(a,b)=>{a.n$=b;}
let AGw=(a,b,c)=>{let d,e,f,g;if(b<=c&&b>=0&&c<=a.n$){d=new P;e=a.ob;f=e.data;c=c-b|0;S();g=f.length;if(b>=0&&c>=0&&c<=(g-b|0)){d.oc=Q(e.data,b,c);return d;}d=new O;Bm(d);E(d);}d=new O;d.n_=1;d.oa=1;E(d);}
let A3s=(a,b,c,d,e)=>{let f,g,h,i;Bp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ob.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AMl=(a,b,c,d)=>{let e,f,g,h,i;e=a.n$;Bp(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.ob.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let Dr=a=>{return a.n$;}
let Cy=a=>{return Bi(a);}
let APy=(a,b)=>{R7(a,b);}
let AFo=(a,b,c)=>{F(a,b,c===null?C(2):c.l());return a;}
let A4l=(a,b,c)=>{Bp(a,b,b+1|0);a.ob.data[b]=c;return a;}
let DI=(a,b,c)=>{F(a,b,c);return a;}
let I_=G(Jk);
let AFR=G(I_);
let BiB=a=>{let b=new AFR();AKZ(b,a);return b;}
let AKZ=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
let ADJ=G(I_);
let BiC=a=>{let b=new ADJ();ALp(b,a);return b;}
let ALp=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
function XJ(){let a=this;D.call(a);a.DM=0;a.Gq=0;a.EF=0;a.GM=null;a.HM=0;a.HP=null;a.GB=0;a.Gw=null;a.Bd=0;a.wf=0;a.CS=0;a.EY=0;a.G4=0;a.GS=0;a.Hy=0;a.FH=0;a.Hk=0;a.DD=0;a.BX=0;}
let BcK=a=>{let b=new XJ();AJJ(b,a);return b;}
let AGv=a=>{return !a.Bd&&!a.wf?1:0;}
let AJJ=(a,b)=>{a.DM=0;a.Gq=1;a.EF=0;a.HM=1;a.HP=C(43);a.GB=0;a.Bd=(-1);a.wf=(-1);a.CS=0;a.EY=0;a.G4=0;a.GS=0;a.Hy=0;a.FH=0;a.Hk=0;a.DD=0;a.BX=1;a.Gw=b;}
let OY=G(0);
function M9(){let a=this;D.call(a);a.ub=null;a.ze=null;a.Fx=null;a.FL=null;a.Jj=null;a.rM=null;a.Bl=null;a.z8=null;a.zH=null;a.tZ=null;a.wN=null;a.Cx=0;a.DF=0;a.H7=null;a.xl=0;a.zN=null;a.I6=null;a.IX=null;a.yk=null;a.DS=null;a.ts=null;}
let J7=null;let BiD=(a,b)=>{let c=new M9();AC5(c,a,b);return c;}
let AC5=(a,b,c)=>{let d;d=new CQ;d.pz=1;d.os=Bt(D,4);a.zH=d;Kl();a.wN=AAU;a.Cx=(-1);a.DF=1;a.xl=1;a.I6=F7(51,0.800000011920929);d=new CQ;d.pz=1;d.os=Bt(D,16);a.yk=d;d=new CQ;d.pz=1;d.os=Bt(D,16);a.DS=d;Ju();a.tZ=Jp;a.rM=c;a.Bl=b;Z6(a);}
let Z6=a=>{let b,c,d,e,f,g,h,i;J7=A5d();MW();EF(JH,C(82),C(43));b=Bv(J7.userAgent);MW();EF(JH,C(83),b);if(J7.windows?1:0){MW();EF(JH,C(84),C(85));}else if(J7.macOS?1:0)Qq(C(84),C(86));else if(!(J7.linux?1:0))Qq(C(84),C(87));else Qq(C(84),C(7));c=new Ox;d=a.rM.GB;c.HB=0;c.Gv=0;c.qW=1;c.qW=d;KD=c;Ju();b=Bv(Jp.rs.location.href);a.ts=b;if(DP(b,C(88))){c=Nz(a.ts,C(89),C(43));a.ts=c;a.ts=Nz(c,C(90),C(43));}e=E9(a.ts,63,0);if(e>=0)a.ts=Cw(a.ts,0,e);c=a.rM;Ky=c.Gq;b=BbM(c);a.ub=b;c=Bbl(a.ts,b.oU,a);a.zN=c;d=a.rM.HM;f
=KD;g=c.Bw;h=new L;h.ob=H(16);i=h.n$;if(g===null)g=C(2);F(h,i,g);F(h,h.n$,C(91));h=Bi(h);g=new L;g.ob=H(16);i=g.n$;if(h===null)h=C(2);F(g,i,h);F(g,g.n$,C(92));h=Bi(g);g=new Pm;g.yG=c;g.Fh=C(92);g.Ff=d;VT(f,1,h,g);a.ze=Bdp(a.ub.oU);c=new QH;c.AP=a.zN;a.Fx=c;c=new Uf;c.Is=BfD(16,0.75);a.FL=c;a.H7=new Pw;a.IX=Bbm();if(a.rM.EF)AE_(a);Ef=a;c=a.ub;Bb=c;b=c.wB;Cj=b;Bq=b;GJ=c.FM;Bd=a.ze;PS=a.Fx;Bfr=a.FL;c=BgE();a.Jj=c;BeO=c;c=AD3(a.tZ);g=BfG(a);c.addEventListener("visibilitychange",CK(g,"handleEvent"));AG7(a.tZ,a);if
(AGv(a.rM))ACM(a.tZ,C(93),A_Q(a));}
let AEl=a=>{let b,c,d,e,f,g,h,$$je;b=a.wN;b:{try{a:{Bbv();switch(A6T.data[AAn(b)]){case 1:c=X6(AIL());if(!c){Kl();a.wN=Tt;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break a;}e=a.zN.Eu;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=Dw();Ey(EX(g,f),37);h=Cy(g);d.setProperty("width",Cr(h));}}break a;case 2:break;default:break a;}if(a.Bl!==null){b=a.z8;if(b!==null){AFl(b);AF1(a.z8);}W5(a.ze,null);PE(a.ze);ADl(a.yk);a.z8
=a.Bl;a.Bl=null;Kl();a.wN=ABP;a.ub.AR=M;}V5(a,a.z8);}}catch($$e){$$je=BG($$e);if($$je instanceof Ea){h=$$je;break b;}else{throw $$e;}}b=a.tZ;b.Be=a;requestAnimationFrame(CK(b,"onAnimationFrame"));return;}if(Fb===null){d=new Dp;d.p5=Kk;b=new L;b.ob=H(16);d.o6=b;d.p2=H(32);d.p_=0;Do();d.p7=Du;Fb=d;}J3(h,Fb);E(h);}
let V5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;WO(a.ub);c=Bb.oU.width;d=Bb.oU.height;e=0;f=a.wN;Kl();if(f===ABP){a.wN=Tt;Z2(b);e=1;}if(!(c==a.Cx&&d==a.DF&&!e)){a.Cx=c;a.DF=d;Cj.dX(0,0,c,d);g=b.pD;if(g!==null)g.dY(c,d);}g=a.DS;f=a.yk;h=f.os;d=f.oj;i=g.os;j=i.data;k=g.oj;c=k+d|0;if(c<=j.length)l=i;else{m=8;if(m<=c)m=c;k=k*1.75|0;if(m>k)k=m;l=i.constructor;if(l===null)f=null;else{f=l.classObject;if(f===null){f=new CN;f.oE=l;n=f;l.classObject=n;}}l=f.oE.$meta.item;if(l===null)n=null;else{n=l.classObject;if(n===
null){n=new CN;n.oE=l;o=n;l.classObject=o;}}if(n===null){b=new Dv;Bm(b);E(b);}if(n===BH(CO)){b=new V;Bm(b);E(b);}if(k<0){b=new D$;Bm(b);E(b);}l=EN(n.oE,k);f=l.data;e=g.oj;k=f.length;if(e<k)k=e;Ff(i,0,l,0,k);g.os=l;}Ff(h,0,l,g.oj,d);g.oj=c;g=a.yk;h=g.os;e=0;p=g.oj;f=null;if(e>p){b=new V;b.n_=1;b.oa=1;E(b);}while(e<p){i=h.data;d=e+1|0;i[e]=f;e=d;}g.oj=0;p=0;while(true){g=a.DS;e=g.oj;d=B9(p,e);if(d>=0){h=g.os;p=0;f=null;if(p>e){b=new V;b.n_=1;b.oa=1;E(b);}while(p<e){i=h.data;d=p+1|0;i[p]=f;p=d;}g.oj=0;g=a.ub;q
=U(g.AR,I(1));g.AR=q;if(WX(q,I(60)))AFB(b);PE(a.ze);return;}if(d>=0)break;g.os.data[p].cV();p=p+1|0;}f=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,p,10);F(b,b.n$,C(38));Le(b,g.oj);Kq(f,Bi(b));E(f);}
let Mm=a=>{return;}
let AE_=a=>{let b,c,d,e,f;b=a.zN;c=new Oa;c.H0=a;d=KD;b=b.Bw;e=new L;e.ob=H(16);f=e.n$;if(b===null)b=C(2);F(e,f,b);F(e,e.n$,C(91));b=Bi(e);e=new L;e.ob=H(16);f=e.n$;if(b===null)b=C(2);F(e,f,b);F(e,e.n$,C(94));Mq(d,1,Bi(e),c);}
let Q5=G(0);
function Nr(){D.call(this);this.pD=null;}
let AF1=a=>{return;}
let AFl=a=>{return;}
let Cd=(a,b)=>{a.pD=b;if(b!==null){b.d1();a.pD.dY(Bb.oU.width,Bb.oU.height);}}
function J8(){let a=this;Nr.call(a);a.o2=null;a.Go=null;a.Fw=null;a.Gz=null;a.Fz=null;a.ou=0;a.DH=null;a.y$=0;a.oP=null;a.pa=null;a.o9=null;}
let Bl=0.0;let Bo=0.0;let Bz=0.0;let BcC=()=>{let a=new J8();Zt(a);return a;}
let Zt=a=>{let b,c,d,e,f,g,h,i;b=Bt(Cp,17);c=b.data;d=new N5;ADs(d,Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));c[0]=d;d=new Tq;ABS(d,I(Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)))));c[1]=d;d=new Vj;e=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));f=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));g=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));h
=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));d.uM=e;d.uN=f;d.uO=g;d.uP=h;c[2]=d;d=new RR;BJ();BJ();d.HI=new Hn;c[3]=d;d=new SK;d.yn=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));d.yl=Lt();d.ym=Lt();d.yo=Lt();c[4]=d;c[5]=Bgt();c[6]=BdP();c[7]=BcP();c[8]=Be2();c[9]=A_R();c[10]=A_Y();c[11]=Bei();d=new S_;i=Lt();W6(d,i);d.xK=i;c[12]=d;c[13]=BfU();c[14]=BgN();c[15]=BcT();c[16]=Bev(M);a.DH=b;a.y$=5;a.oP=c[5];}
let Z2=a=>{let b,c,d,e,f,g,h;Ef.xl=1;b=new FA;c=PS;d=new JT;e=c.AP;Nq();M1(d,e,C(95),Ri);ADR(b,Bdd(d,0),null,1);a.pa=b;FQ();c=AEf;f=b.sV.Ci;f.pV=c.pV;f.pU=c.pU;f.pT=c.pT;f.pS=c.pS;c=new Md;AAc();OT(c,1000,null);a.o9=c;c=new Q9;c.vr=Co(512);c.ud=M;c.tm=a;a.Go=c;c=new RY;c.vm=Co(512);c.tL=Co(512);c.tV=Co(512);c.q_=M;c.s7=a;a.Fw=c;c=new Tf;c.qF=Co(512);c.td=M;c.vk=0;c.s5=a;a.Gz=c;c=new Pj;c.sf=Co(256);c.sF=M;c.vG=0;c.s4=a;a.Fz=c;g=Bt(Ly,31);h=g.data;h[0]=Bgu(a);h[1]=BfF(a);h[2]=BfV(a);h[3]=Bcl(a);h[4]=BfC(a);h[5]
=Bgc(a);h[6]=BbO(a);h[7]=Ba$(a);h[8]=Beb(a);h[9]=BaT(a);h[10]=Bba(a);h[11]=BdF(a);h[12]=BfY(a);h[13]=Bc6(a);h[14]=Bd4(a);h[15]=A_z(a);h[16]=BeP(a);h[17]=A_r(a);h[18]=Bc0(a);h[19]=Beq(a);h[20]=Bcf(a);h[21]=Bey(a);h[22]=BbG(a);h[23]=Bdo(a);h[24]=Beh(a);h[25]=Bd6(a);h[26]=Bf2(a);h[27]=Bb7(a);h[28]=A_8(a);h[29]=Bdj(a);h[30]=Bfj(a);a.o2=g;a.ou=0;Cd(a,h[0]);}
let Dj=a=>{let b,c,d;b=a.ou+1|0;c=a.o2.data;b=b%c.length|0;a.ou=b;d=c[b];a.pD=d;if(d!==null){d.d1();a.pD.dY(Bb.oU.width,Bb.oU.height);}}
let Eg=a=>{let b,c,d,e;b=a.ou;c=a.o2.data;d=c.length;b=((b+d|0)-1|0)%d|0;a.ou=b;e=c[b];a.pD=e;if(e!==null){e.d1();a.pD.dY(Bb.oU.width,Bb.oU.height);}}
let AFB=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je;b=a.pD;if(b!==null)b.d_(Bb.pu);c=Bd;if(!c.wd.data[55]){if(c.pc.data[16]){d=a.DH.data;e=a.y$;f=d.length;e=((e+f|0)-1|0)%f|0;a.y$=e;a.oP=d[e];Cd(a,a.o2.data[a.ou]);}else if(B5(c,7)){d=a.DH.data;e=(a.y$+1|0)%d.length|0;a.y$=e;a.oP=d[e];Cd(a,a.o2.data[a.ou]);}}else{Cl(a.o9);c=a.pa;b=a.o9;g=Bb.Cn|0;h=a.oP.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CN;i.oE=h;j=i;h.classObject=j;}}h=new L;h.ob=H(16);N(h,h.n$,g,10);F(h,h.n$,C(96));e=
h.n$;if(i===null)j=C(2);else{j=i;if(!j.$id$){k=Fd();j.$id$=k;}g=i.$id$;i=new L;Jn(i,16);AFo(i,i.n$,C(70));AB8(i,g,10);j=OR(i.ob,0,i.n$);}F(h,e,j);l=new P;d=h.ob;m=d.data;f=h.n$;S();g=m.length;if(f>=0&&f<=(g-0|0)){l.oc=Q(d.data,0,f);n=Bb.oU.height*0.5;o=Bb.oU.width;T3(c.sV);h=c.sV;p=l.oc.length;j=null;M0();k=Gh;q=Dm(k,BH(DH));r=q<0?null:k.qa.data[q];if(r===null){r=new HW;Dn(r);r.qx=Bdz(0,4);r.sz=100;v:{try{k=LP(BH(DH),null);break v;}catch($$e){$$je=BG($$e);if($$je instanceof Da){}else{throw $$e;}}try{k=MS(BH(DH),
null);JN(k,1);break v;}catch($$e){$$je=BG($$e);if($$je instanceof Eo){}else{throw $$e;}}k=null;}r.rd=k;if(k===null){c=new B0;b=new L;F$(b);LT(b,C(27));U$(c,Cy(B4(b,AEW(BH(DH)))));E(c);}B2(Gh,BH(DH),r);}i=VB(r);Dk(h.yU,i);Hi(i,h.tn,l,0,p,h.Ci,o,1,0,j);WJ(h,i,0.0,n);O9(c.sV,b);Ck(a.o9);}else{c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}}}
let A3_=()=>{Bl=1.0;Bo=1.0;Bz=1.0;}
let Z3=G();
let BA=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return C(45);d=1<<c;e=d-1|0;f=(((32-Ee(b)|0)+c|0)-1|0)/c|0;g=H(f);h=g.data;i=C7(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=Ji((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new P;S();l.oc=Q(g.data,0,h.length);return l;}
let Cp=G(Hn);
let Lt=()=>{return Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));}
let AYh=(a,b)=>{return Z((a.em()))>>>(32-b|0)|0;}
let AP2=a=>{return BB(T(a.em(),40))*5.9604644775390625E-8;}
let A48=a=>{return BB(T(a.em(),11))*1.1102230246251565E-16;}
let A3T=a=>{let b;b=a.em();return Fn(B8(BP(B3(I(1022),I(Ec(b))),52),Be(b,B(4294967295, 1048575))))+2.44140625E-4-2.44140625E-4;}
let A0q=(a,b,c)=>{return b+a.en()*(c-b);}
let A67=a=>{let b;b=a.em();return Fn(B8(BP(B3(I(1022),I(Ec(b))),52),Be(b,B(4294967295, 1048575))));}
let ALh=a=>{let b;b=a.em();return Fn(B8(BP(B3(I(1022),I(Ec(b))),52),Be(B8(BP(b,63),T(b,1)),B(4294967295, 2148532223))));}
let AJR=a=>{let b;b=a.em();return IU((126-Ec(b)|0)<<23|Z(b)&8388607);}
let A4B=a=>{return Kw(a.em());}
let A6P=(a,b,c)=>{return b+c*a.ep();}
let A1b=b=>{let c,d;if(b>0.0&&b<1.0){if(b<0.02425){c=Cf((-2.0)*C$(b));return ((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}if(0.97575<b){c=Cf((-2.0)*C$(1.0-b));return  -((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462
*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}c=b-0.5;d=c*c;return ((((((-39.69683028665376)*d+220.9460984245205)*d-275.9285104469687)*d+138.357751867269)*d-30.66479806614716)*d+2.506628277459239)*c/((((((-54.47609879822406)*d+161.5858368580409)*d-155.6989798598866)*d+66.80131188771972)*d-13.28068155288572)*d+1.0);}return Fn(B8(Be(Ed((b-0.5)),B(0, 2147483648)),Be(Ed(38.5),B(4294967295, 2147483647))));}
let AYt=(a,b,c)=>{return a.er(b,c,(b+c)*0.5);}
let AOj=(a,b,c,d)=>{let e,f,g;e=a.es();f=c-b;g=d-b;if(e<=g/f)return b+Cf(e*f*g);return c-Cf((1.0-e)*f*(c-d));}
function N5(){let a=this;Cp.call(a);a.sv=0;a.su=0;a.st=0;}
let AZ8=a=>{return C(97);}
let ADs=(a,b)=>{let c,d,e,f,g;c=Z(b);d=GE(b);e=Z(T(Bk(b,I(-1)),16));f=0;while(f<5){g=(d<<24|(d>>>8|0))+c|0;e=e+1|0;d=g^e;c=(c<<3|(c>>>29|0))^d;f=f+1|0;}a.sv=c;f=0;while(f<5){g=(d<<24|(d>>>8|0))+c|0;e=e+1|0;d=g^e;c=(c<<3|(c>>>29|0))^d;f=f+1|0;}a.su=c;g=0;while(g<5){d=(d<<24|(d>>>8|0))+c|0;e=e+1|0;d=d^e;c=(c<<3|(c>>>29|0))^d;g=g+1|0;}a.st=c;}
let A$1=a=>{let b,c,d,e,f;b=a.sv+(-1847521883)|0;a.sv=b;c=a.su+(1821285621^Ee(b))|0;a.su=c;d=a.st+(2146121005^Ee(b&c))|0;a.st=d;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;e=I((b<<3|(b>>>29|0))^((c<<24|(c>>>8|0))+b|0)^d);b=a.sv+(-1847521883)|0;a.sv=b;c=a.su+(1821285621^Ee(b))|0;a.su=c;d=a.st+(2146121005^Ee(b&c))|0;a.st=d;f=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^f;c=((f<<24|(f>>>8|0))+b|0)^d;b=(b<<
3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;return Bk(BP(e,32),Be(I((b<<3|(b>>>29|0))^((c<<24|(c>>>8|0))+b|0)^d),B(4294967295, 0)));}
let A9n=(a,b)=>{let c,d,e,f,g;c=a.sv+(-1847521883)|0;a.sv=c;d=a.su+(1821285621^Ee(c))|0;a.su=d;e=a.st+(2146121005^Ee(c&d))|0;a.st=e;f=((d<<24|(d>>>8|0))+c|0)^e;d=(c<<3|(c>>>29|0))^f;c=((f<<24|(f>>>8|0))+d|0)^e;f=(d<<3|(d>>>29|0))^c;g=((c<<24|(c>>>8|0))+f|0)^e;c=(f<<3|(f>>>29|0))^g;return ((c<<3|(c>>>29|0))^((g<<24|(g>>>8|0))+c|0)^e)>>>(32-b|0)|0;}
let Vx=a=>{let b,c,d;b=a.sv+(-1847521883)|0;a.sv=b;c=a.su+(1821285621^Ee(b))|0;a.su=c;d=a.st+(2146121005^Ee(b&c))|0;a.st=d;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;c=((c<<24|(c>>>8|0))+b|0)^d;b=(b<<3|(b>>>29|0))^c;return (b<<3|(b>>>29|0))^((c<<24|(c>>>8|0))+b|0)^d;}
let AX8=a=>{return (Vx(a)>>>8|0)*5.9604644775390625E-8;}
function Tq(){let a=this;Cp.call(a);a.tM=0;a.sG=0;a.sH=0;a.sI=0;}
let AK6=a=>{return C(98);}
let ABS=(a,b)=>{let c,d,e;a.tM=(-236298515);c=Z(b);if(Dh(b,I(c))){a.sI=c;a.sH=c;a.sG=c;d=0;while(d<20){Th(a);d=d+1|0;}return;}e=W(Bk(b,T(b,27)),B(732411475, 1014606921));e=W(Bk(e,T(e,33)),B(1254403637, 476689399));a.sG=Z(Bk(e,T(e,27)));b=U(b,B(2135587861, 2654435769));b=W(Bk(b,T(b,27)),B(732411475, 1014606921));b=W(Bk(b,T(b,33)),B(1254403637, 476689399));b=Bk(b,T(b,27));a.sH=Z(b);a.sI=GE(b);}
let AQk=a=>{let b,c,d,e,f;b=a.tM;c=a.sG;b=b-(c<<27|(c>>>5|0))|0;d=a.sH;e=c^(d<<17|(d>>>15|0));a.tM=e;c=a.sI;d=d+c|0;a.sG=d;c=c+b|0;a.sH=c;f=b+e|0;a.sI=f;e=e-(d<<27|(d>>>5|0))|0;b=d^(c<<17|(c>>>15|0));a.tM=b;a.sG=c+f|0;a.sH=f+e|0;e=e+b|0;a.sI=e;return Bk(BP(I(f),32),Be(I(e),B(4294967295, 0)));}
let ATK=(a,b)=>{let c,d,e,f;c=a.tM;d=a.sG;c=c-(d<<27|(d>>>5|0))|0;e=a.sH;f=d^(e<<17|(e>>>15|0));a.tM=f;d=a.sI;a.sG=e+d|0;a.sH=d+c|0;f=c+f|0;a.sI=f;return f>>>(32-b|0)|0;}
let Th=a=>{let b,c,d,e,f;b=a.tM;c=a.sG;b=b-(c<<27|(c>>>5|0))|0;d=a.sH;c=c^(d<<17|(d>>>15|0));a.tM=c;e=a.sI;a.sG=d+e|0;a.sH=e+b|0;f=b+c|0;a.sI=f;return f;}
let ATw=a=>{return (Th(a)>>>8|0)*5.9604644775390625E-8;}
function Vj(){let a=this;Cp.call(a);a.uM=0;a.uN=0;a.uO=0;a.uP=0;}
let AW1=a=>{return C(99);}
let AKx=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.uM;c=a.uN;d=a.uO;e=a.uP;f=c^d;f=f<<26|(f>>>6|0);g=d^e;g=g<<11|(g>>>21|0);h=b^(c+d|0);i=e+(-1380601499)|0;j=g^h;a.uM=j<<26|(j>>>6|0);k=h^i;a.uN=k<<11|(k>>>21|0);a.uO=f^(g+h|0);a.uP=i+(-1380601499)|0;return Bk(BP(I(d),32),I(h));}
let AU$=(a,b)=>{let c,d,e,f,g,h;c=a.uM;d=a.uN;e=a.uO;f=a.uP;g=d^e;a.uM=g<<26|(g>>>6|0);h=e^f;a.uN=h<<11|(h>>>21|0);a.uO=c^(d+e|0);a.uP=f+(-1380601499)|0;return e>>>(32-b|0)|0;}
let VL=a=>{let b,c,d,e,f,g;b=a.uM;c=a.uN;d=a.uO;e=a.uP;f=c^d;a.uM=f<<26|(f>>>6|0);g=d^e;a.uN=g<<11|(g>>>21|0);a.uO=b^(c+d|0);a.uP=e+(-1380601499)|0;return d;}
let AIH=a=>{return (VL(a)>>>8|0)*5.9604644775390625E-8;}
function RR(){Cp.call(this);this.HI=null;}
let AVK=a=>{return C(100);}
let A6q=a=>{return B8(BP(I(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),I(4.294967296E9*Math.random()+(-2.147483648E9)|0));}
let A1k=(a,b)=>{return (4.294967296E9*Math.random()+(-2.147483648E9)|0)>>>(32-b|0)|0;}
let A4C=a=>{return Math.random();}
let A4L=a=>{return Math.random();}
let AQZ=a=>{let b,c,d,e;b=a.HI;if(b.Ea){b.Ea=0;c=b.FR;}else{d=new UI;d.IL=b;e=(AWr(d)).data;b.Ea=1;b.FR=e[1];c=e[0];}return c;}
function SK(){let a=this;Cp.call(a);a.yn=M;a.yl=M;a.ym=M;a.yo=M;}
let ATs=a=>{return C(101);}
let AVU=a=>{let b,c,d,e;b=a.yn;c=a.yl;d=a.ym;a.yn=W(a.yo,B(778217925, 4046813930));a.yl=B8(BP(b,44),T(b,20));a.ym=U(c,B(2135587861, 2654435769));e=Bk(b,d);a.yo=e;return e;}
let AID=(a,b)=>{let c,d,e,f;c=a.yn;d=a.yl;e=a.ym;a.yn=W(a.yo,B(778217925, 4046813930));a.yl=B8(BP(c,44),T(c,20));a.ym=U(d,B(2135587861, 2654435769));f=Bk(c,e);a.yo=f;return Z(f)>>>(32-b|0)|0;}
function W3(){let a=this;Cp.call(a);a.ye=M;a.yb=M;a.ya=M;a.yd=M;a.yc=M;}
let Bgt=()=>{let a=new W3();A6_(a);return a;}
let AZG=a=>{return C(102);}
let A6_=a=>{a.ye=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.yb=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.ya=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.yd=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.yc=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));}
let A1s=a=>{let b,c,d,e,f,g;b=a.ye;c=a.yb;d=a.ya;e=a.yd;f=a.yc;a.ye=U(b,B(2135587861, 2654435769));a.yb=Bk(b,f);a.ya=U(c,e);a.yd=B8(BP(d,52),T(d,12));g=B3(c,d);a.yc=g;return g;}
let ALn=(a,b)=>{let c,d,e,f,g,h;c=a.ye;d=a.yb;e=a.ya;f=a.yd;g=a.yc;a.ye=U(c,B(2135587861, 2654435769));a.yb=Bk(c,g);a.ya=U(d,f);a.yd=B8(BP(e,52),T(e,12));h=B3(d,e);a.yc=h;return Z(h)>>>(32-b|0)|0;}
function Z_(){let a=this;Cp.call(a);a.vW=M;a.xq=M;a.xp=M;a.zr=M;}
let BdP=()=>{let a=new Z_();A0A(a);return a;}
let A9Q=a=>{return C(103);}
let A0A=a=>{a.vW=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.xq=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.xp=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.zr=B8(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)),I(1));if(Dh(B8(B8(a.vW,a.xq),a.xp),M))a.vW=I(1);}
let AXa=a=>{let b,c,d,e;b=a.vW;c=a.xq;d=a.xp;e=a.zr;a.vW=W(d,e);a.xq=B8(BP(b,47),T(b,17));a.xp=B3(c,b);a.zr=U(e,B(588569818, 3814593898));return d;}
let A0v=(a,b)=>{let c,d,e,f;c=a.vW;d=a.xq;e=a.xp;f=a.zr;a.vW=W(e,f);a.xq=B8(BP(c,47),T(c,17));a.xp=B3(d,c);a.zr=U(f,B(588569818, 3814593898));return Z(e)>>>(32-b|0)|0;}
function YJ(){let a=this;Cp.call(a);a.xU=M;a.xS=M;a.xT=M;a.xR=M;}
let BcP=()=>{let a=new YJ();ALY(a);return a;}
let AWL=a=>{return C(104);}
let ALY=a=>{a.xU=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.xS=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.xT=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.xR=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));}
let A6s=a=>{let b,c,d,e;b=a.xU;c=a.xS;d=a.xT;e=a.xR;a.xU=U(b,B(2135587861, 2654435769));a.xS=W(e,B(3733122965, 3509855555));a.xT=Bk(b,c);a.xR=B8(BP(d,21),T(d,43));return B3(e,d);}
let AIY=(a,b)=>{let c,d,e,f;c=a.xU;d=a.xS;e=a.xT;f=a.xR;a.xU=U(c,B(2135587861, 2654435769));a.xS=W(f,B(3733122965, 3509855555));a.xT=Bk(c,d);a.xR=B8(BP(e,21),T(e,43));return Z(B3(f,e))>>>(32-b|0)|0;}
function X4(){let a=this;Cp.call(a);a.xI=M;a.Cz=M;}
let Be2=()=>{let a=new X4();A21(a);return a;}
let A21=a=>{a.xI=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.Cz=B8(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)),I(1));}
let A6$=a=>{return C(105);}
let ATn=a=>{let b;b=U(W(a.xI,B(2405954229, 4156746688)),a.Cz);a.xI=b;b=W(Bk(Bk(b,T(b,23)),T(b,47)),B(277803737, 2935059714));return Bk(b,T(b,25));}
let AJE=(a,b)=>{let c;c=U(W(a.xI,B(2405954229, 4156746688)),a.Cz);a.xI=c;c=W(Bk(Bk(c,T(c,23)),T(c,47)),B(277803737, 2935059714));return Z(Bk(c,T(c,25)))>>>(32-b|0)|0;}
function AIi(){let a=this;Cp.call(a);a.v0=0;a.v1=0;a.sl=0;a.sm=0;}
let A_R=()=>{let a=new AIi();A0e(a);return a;}
let A0e=a=>{let b,c,d,e;b=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));c=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));d=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));e=Z(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)));a.v0=b;a.v1=c;a.sl=d;if(!(b|c|d|e))e=1;a.sm=e;}
let AOq=a=>{return C(106);}
let AOO=a=>{let b,c,d,e,f,g,h,i;b=a.v0;c=a.sm;d=b+c|0;d=(d<<7|(d>>>25|0))+b|0;e=a.sl;f=a.v1;g=e-f|0;h=(g<<13|(g>>>19|0))+e|0;i=f<<9;e=e^b;a.sl=e;c=c^f;a.sm=c;a.v1=f^e;a.v0=b^c;a.sl=e^i;a.sm=c<<11|(c>>>21|0);return Bk(BP(I(d),32),Be(I(h),B(4294967295, 0)));}
let AL5=(a,b)=>{let c,d,e,f,g,h;c=a.v0;d=a.sm;e=c+d|0;e=(e<<7|(e>>>25|0))+c|0;f=a.v1;g=f<<9;h=a.sl^c;a.sl=h;d=d^f;a.sm=d;a.v1=f^h;a.v0=c^d;a.sl=h^g;a.sm=d<<11|(d>>>21|0);return e>>>(32-b|0)|0;}
let AGL=a=>{let b,c,d,e,f,g;b=a.v0;c=a.sm;d=b+c|0;e=(d<<7|(d>>>25|0))+b|0;f=a.v1;g=f<<9;d=a.sl^b;a.sl=d;c=c^f;a.sm=c;a.v1=f^d;a.v0=b^c;a.sl=d^g;a.sm=c<<11|(c>>>21|0);return e;}
let AVB=a=>{return (AGL(a)>>>8|0)*5.9604644775390625E-8;}
function AIe(){let a=this;Cp.call(a);a.qL=M;a.qM=M;}
let A_Y=()=>{let a=new AIe();A85(a);return a;}
let A85=a=>{a.qL=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.qM=B8(Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19)),I(1));}
let AQt=a=>{return C(107);}
let ANj=(a,b)=>{let c,d;c=U(a.qL,B(2461385507, 3334219670));a.qL=c;d=Bk(c,T(c,31));c=U(a.qM,B(2135587862, 2654435769));a.qM=c;c=W(d,c);return Z(Bk(Bk(c,T(c,26)),T(c,6)))>>>(32-b|0)|0;}
let A3z=a=>{let b,c;b=U(a.qL,B(2461385507, 3334219670));a.qL=b;c=Bk(b,T(b,31));b=U(a.qM,B(2135587862, 2654435769));a.qM=b;b=W(c,b);return Bk(Bk(b,T(b,26)),T(b,6));}
let A7L=a=>{let b,c;b=U(a.qL,B(2461385507, 3334219670));a.qL=b;c=Bk(b,T(b,31));b=U(a.qM,B(2135587862, 2654435769));a.qM=b;b=W(c,b);return BB(T(Bk(b,T(b,6)),40))*5.9604644775390625E-8;}
let YZ=a=>{let b,c;b=U(a.qL,B(2461385507, 3334219670));a.qL=b;c=Bk(b,T(b,31));b=U(a.qM,B(2135587862, 2654435769));a.qM=b;b=W(c,b);return BB(Bk(Bk(T(b,11),T(b,37)),T(b,17)))*1.1102230246251565E-16;}
let A5a=a=>{let b,c,d;b=U(a.qL,B(2461385507, 3334219670));a.qL=b;c=Bk(b,T(b,31));b=U(a.qM,B(2135587862, 2654435769));a.qM=b;b=W(c,b);d=Bk(Bk(b,T(b,26)),T(b,6));return BB(U(T(W(Be(d,B(4294967295, 0)),I(2097152)),32),W(T(d,32),I(2097152))))*1.1102230246251565E-16;}
let AYV=(a,b,c)=>{let d,e;d=U(a.qL,B(2461385507, 3334219670));a.qL=d;e=Bk(d,T(d,31));d=U(a.qM,B(2135587862, 2654435769));a.qM=d;d=W(e,d);e=Bk(Bk(d,T(d,26)),T(d,6));return b+BB(U(T(W(Be(e,B(4294967295, 0)),I(2097152)),32),W(T(e,32),I(2097152))))*1.1102230246251565E-16*(c-b);}
let A3A=a=>{let b,c,d;b=YZ(a);if(b===0.0)return (-38.5);if(b<0.02425){c=Cf((-2.0)*C$(b));return ((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}if(0.97575<b){c=Cf((-2.0)*C$(1.0-b));return  -((((((-0.007784894002430293)*c-0.3223964580411365)*c-2.400758277161838)*c-2.549732539343734)*c+4.374664141464968)*c+2.938163982698783)/((((0.007784695709041462
*c+0.3224671290700398)*c+2.445134137142996)*c+3.754408661907416)*c+1.0);}c=b-0.5;d=c*c;return ((((((-39.69683028665376)*d+220.9460984245205)*d-275.9285104469687)*d+138.357751867269)*d-30.66479806614716)*d+2.506628277459239)*c/((((((-54.47609879822406)*d+161.5858368580409)*d-155.6989798598866)*d+66.80131188771972)*d-13.28068155288572)*d+1.0);}
let A9z=(a,b,c)=>{return Wq(a,b,c,(b+c)*0.5);}
let Wq=(a,b,c,d)=>{let e,f,g,h,i;e=U(a.qL,B(2461385507, 3334219670));a.qL=e;e=Bk(e,T(e,31));f=U(a.qM,B(2135587862, 2654435769));a.qM=f;e=W(e,f);g=BB(T(Bk(e,T(e,6)),40))*5.9604644775390625E-8;h=c-b;i=d-b;if(g<=i/h)return b+Cf(g*h*i);return c-Cf((1.0-g)*h*(c-d));}
function AER(){let a=this;Cp.call(a);a.yt=M;a.yu=M;a.yr=M;a.ys=M;}
let Bei=()=>{let a=new AER();A4P(a);return a;}
let A4P=a=>{a.yt=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.yu=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.yr=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.ys=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));}
let AYY=a=>{return C(108);}
let ANH=a=>{let b,c,d,e,f,g;b=a.yt;c=a.yu;d=a.yr;e=a.ys;f=Bk(c,d);g=Bk(d,e);a.yt=B8(BP(f,57),T(f,7));a.yu=B8(BP(g,18),T(g,46));b=U(b,f);a.yr=b;a.ys=U(e,B(3378872667, 3734071996));return b;}
let AOA=(a,b)=>{let c,d,e,f,g,h;c=a.yt;d=a.yu;e=a.yr;f=a.ys;g=Bk(d,e);h=Bk(e,f);a.yt=B8(BP(g,57),T(g,7));a.yu=B8(BP(h,18),T(h,46));c=U(c,g);a.yr=c;a.ys=U(f,B(3378872667, 3734071996));return Z(c)>>>(32-b|0)|0;}
function S_(){Cp.call(this);this.xK=M;}
let ARY=a=>{return C(109);}
let A6R=a=>{let b;b=U(a.xK,B(2135587861, 2654435769));a.xK=b;b=W(Bk(b,T(b,27)),B(732411475, 1014606921));b=W(Bk(b,T(b,33)),B(1254403637, 476689399));return Bk(b,T(b,27));}
let A90=(a,b)=>{let c;c=U(a.xK,B(2135587861, 2654435769));a.xK=c;c=W(Bk(c,T(c,27)),B(732411475, 1014606921));c=W(Bk(c,T(c,33)),B(1254403637, 476689399));return Z(Bk(c,T(c,27)))>>>(32-b|0)|0;}
function Vo(){Cp.call(this);this.q5=M;}
let BfU=()=>{let a=new Vo();APB(a);return a;}
let APB=a=>{a.q5=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));}
let AZE=a=>{return C(110);}
let AJV=a=>{let b;b=U(a.q5,B(2135587861, 2654435769));a.q5=b;return b;}
let AJe=(a,b)=>{let c;c=U(a.q5,B(2135587861, 2654435769));a.q5=c;return Z(T(c,64-b|0));}
let AZf=a=>{let b,c;b=U(a.q5,B(2135587861, 2654435769));a.q5=b;c=BB(T(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return c;}
let A2T=a=>{let b,c;b=U(a.q5,B(2135587861, 2654435769));a.q5=b;c=BB(T(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return Fn(B8(Be(Ed(BB(BP(b,54))),B(0, 2147483648)),Be(Ed(c),B(4294967295, 2147483647))));}
let AKy=a=>{let b,c;b=U(a.q5,B(2135587861, 2654435769));a.q5=b;c=BB(T(b,40))*5.9604644775390625E-8;if(c===0.0)c=2.9802322387695312E-8;return c;}
let A6x=a=>{let b;b=U(a.q5,B(2135587861, 2654435769));a.q5=b;return Kw(L0(b));}
function Yt(){Cp.call(this);this.qZ=M;}
let BgN=()=>{let a=new Yt();AN5(a);return a;}
let AN5=a=>{a.qZ=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));}
let ALX=a=>{return C(111);}
let AWn=a=>{let b;b=U(a.qZ,I(1));a.qZ=b;return HX(b);}
let ATT=(a,b)=>{let c;c=U(a.qZ,I(1));a.qZ=c;return Z(T(HX(c),64-b|0));}
let A6J=a=>{let b,c;b=U(a.qZ,I(1));a.qZ=b;c=BB(T(HX(b),11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return c;}
let A0k=a=>{let b,c;b=U(a.qZ,I(1));a.qZ=b;b=HX(b);c=BB(T(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return Fn(B8(Be(Ed(BB(BP(b,54))),B(0, 2147483648)),Be(Ed(c),B(4294967295, 2147483647))));}
let A6m=a=>{let b,c;b=U(a.qZ,I(1));a.qZ=b;c=BB(T(HX(b),40))*5.9604644775390625E-8;if(c===0.0)c=2.9802322387695312E-8;return c;}
let A29=a=>{let b;b=U(a.qZ,I(1));a.qZ=b;return Kw(L0(b));}
function ABQ(){let a=this;Cp.call(a);a.CB=M;a.C6=M;}
let BcT=()=>{let a=new ABQ();ARe(a);return a;}
let ARe=a=>{a.CB=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));a.C6=Bk(BC((BJ()-0.5)*4.503599627370496E15),BC((BJ()-0.5)*1.8446744073709552E19));}
let AUL=a=>{return C(112);}
let A8q=a=>{let b,c,d;b=a.CB;c=U(a.C6,B(2135587861, 2654435769));a.C6=c;d=Bk(b,BP(I(1),Z(T(c,58))));a.CB=d;return d;}
function ADc(){Cp.call(this);this.q3=M;}
let Bev=a=>{let b=new ADc();A4t(b,a);return b;}
let A4t=(a,b)=>{a.q3=b;}
let A5D=a=>{return C(113);}
let AUP=a=>{let b;b=U(a.q3,B(2135587861, 2654435769));a.q3=b;return W(T(b,10),IF.data[Z(Be(b,I(1023)))]);}
let A7m=(a,b)=>{let c;c=U(a.q3,B(2135587861, 2654435769));a.q3=c;return Z(T(W(T(c,10),IF.data[Z(Be(c,I(1023)))]),64-b|0));}
let ARu=a=>{let b,c;b=U(a.q3,B(2135587861, 2654435769));a.q3=b;c=BB(T(W(T(b,10),IF.data[Z(Be(b,I(1023)))]),11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return c;}
let A8C=a=>{let b,c;b=U(a.q3,B(2135587861, 2654435769));a.q3=b;b=W(T(b,10),IF.data[Z(Be(b,I(1023)))]);c=BB(T(b,11))*1.1102230246251565E-16;if(c===0.0)c=5.551115123125783E-17;return Fn(B8(Be(Ed(BB(BP(b,54))),B(0, 2147483648)),Be(Ed(c),B(4294967295, 2147483647))));}
let A4Z=a=>{let b,c;b=U(a.q3,B(2135587861, 2654435769));a.q3=b;c=BB(T(W(T(b,10),IF.data[Z(Be(b,I(1023)))]),40))*5.9604644775390625E-8;if(c===0.0)c=2.9802322387695312E-8;return c;}
let AY1=a=>{let b;b=U(a.q3,B(2135587861, 2654435769));a.q3=b;return Kw(W(T(b,10),IF.data[Z(Be(b,I(1023)))]));}
let FL=G(BV);
let AAU=null;let ABP=null;let Tt=null;let A8m=null;let Kl=()=>{Kl=Bj(FL);A4c();}
let A4c=()=>{let b,c,d;b=new FL;Kl();b.ol=C(114);b.oi=0;AAU=b;c=new FL;c.ol=C(115);c.oi=1;ABP=c;d=new FL;d.ol=C(116);d.oi=2;Tt=d;A8m=R(FL,[b,c,d]);}
let Oe=G(0);
let C4=G(0);
let Td=G(0);
function LQ(){let a=this;D.call(a);a.rs=null;a.Be=null;}
let Jp=null;let Ju=()=>{Ju=Bj(LQ);A1R();}
let AD3=a=>{return a.rs.document;}
let AG7=(a,b)=>{a.Be=b;requestAnimationFrame(CK(a,"onAnimationFrame"));}
let ACM=(a,b,c)=>{let d;d=Em(c,"handleEvent");a.rs.addEventListener(Cr(b),CK(d,"handleEvent"));}
let A1R=()=>{let b;b=new LQ;Ju();b.rs=window;Jp=b;}
let A6g=(a,b)=>{let c;b;c=a.Be;a.Be=null;AEl(c);}
let Zp=G();
let Pu=G();
let Gh=null;let M0=()=>{M0=Bj(Pu);A5H();}
let Y$=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;M0();if(b===null){d=new V;d.n_=1;d.oa=1;d.od=C(36);E(d);}d=null;e=0;f=b.oj;while(e<f){if(e>=b.oj){g=new O;d=new L;d.ob=H(16);F(d,d.n$,C(37));N(d,d.n$,e,10);F(d,d.n$,C(38));c=b.oj;N(d,d.n$,c,10);b=Bi(d);g.n_=1;g.oa=1;g.od=b;E(g);}k:{h=b.os.data[e];if(h!==null){if(d===null){g=Gh;i=h.constructor;if(i===null)j=null;else{j=i.classObject;if(j===null){j=new CN;j.oE=i;k=j;i.classObject=k;}}l=Dm(g,j);d=l<0?null:g.qa.data[l];if(d===null)break k;}g=d.qx;if(g.oj<d.sz){Dk(g,h);l=d.xm;m
=d.qx.oj;if(l>m)m=l;d.xm=m;if(Fk(h,D_))h.D();}else if(Fk(h,D_))h.D();if(!c)d=null;}}e=e+1|0;}}
let A5H=()=>{Gh=F7(51,0.800000011920929);}
function KV(){E3.call(this);this.DX=0.0;}
let ANJ=null;let HN=a=>{return a.DX;}
let G8=b=>{let c,d,e,f,g,h,i,j,k,l,m;if(b.oc.length?0:1){b=new CU;b.n_=1;b.oa=1;E(b);}c=0;d=b.oc.length;while(c>=0&&c<b.oc.length){if(b.oc.charCodeAt(c)>32){while(true){e=d-1|0;if(e<0)break;if(e>=b.oc.length)break;if(b.oc.charCodeAt(e)>32){f=0;if(c>=0&&c<b.oc.length){if(b.oc.charCodeAt(c)==45){c=c+1|0;f=1;}else if(Dz(b,c)==43)c=c+1|0;if(c==d){b=new CU;Bm(b);E(b);}q:{e=Dz(b,c);g=0;h=(-1);i=100000000;j=0;if(e!=46){j=1;if(e>=48&&e<=57){w:{while(c<d){if(Dz(b,c)!=48)break w;c=c+1|0;}}while(c<d){k=Dz(b,c);if(k<48)break q;if
(k>57)break q;if(i>0){g=g+C7(i,k-48|0)|0;i=EC(i,10);}h=h+1|0;c=c+1|0;}}else{b=new CU;Bm(b);E(b);}}}if(c<d&&Dz(b,c)==46){c=c+1|0;j:{while(true){if(c>=d)break j;e=Dz(b,c);k=B9(e,48);if(k<0)break j;if(e>57)break;if(!g&&!k)h=h+(-1)|0;else if(i>0){g=g+C7(i,e-48|0)|0;i=EC(i,10);}c=c+1|0;j=1;}}if(!j)E(Vk());}if(c<d){k=Dz(b,c);if(k!=101&&k!=69)E(Vk());k=c+1|0;l=0;if(k==d)E(Vk());if(Dz(b,k)==45){k=k+1|0;l=1;}else if(Dz(b,k)==43)k=k+1|0;m=0;c=0;x:{while(true){if(k>=d)break x;e=Dz(b,k);if(e<48)break x;if(e>57)break;m=
(10*m|0)+(e-48|0)|0;c=1;k=k+1|0;}}if(!c)E(Vk());if(l)m= -m|0;h=h+m|0;}return AHW(g,h,f);}b=new Ba;b.n_=1;b.oa=1;E(b);}d=d+(-1)|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}c=c+1|0;if(c==d){b=new CU;b.n_=1;b.oa=1;E(b);}}b=new Ba;b.n_=1;b.oa=1;E(b);}
let ASp=()=>{ANJ=BH(Fr);}
function KO(){let a=this;D.call(a);a.pL=null;a.py=0;a.AX=0;}
let Sq=(a,b)=>{let c,d,e,f,g;c=a.pL;d=c.data;e=a.py;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=CT(f);g=d.data.length;if(e<g)g=e;CX(c,0,d,0,g);a.pL=d;}c=d.data;f=a.py;a.py=f+1|0;c[f]=b;}
let QU=(a,b,c,d)=>{let e,f;if((c+d|0)<=b.py){K9(a,b.pL,c,d);return;}e=new V;f=new L;f.ob=H(16);F(f,f.n$,C(117));N(f,f.n$,c,10);F(f,f.n$,C(51));N(f,f.n$,d,10);F(f,f.n$,C(52));c=b.py;N(f,f.n$,c,10);b=Bi(f);e.n_=1;e.oa=1;e.od=b;E(e);}
let K9=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pL;f=e.data;g=a.py;h=g+d|0;if(h<=f.length)f=e;else{if(8>h)h=8;i=g*1.75|0;if(h>i)i=h;f=CT(i);j=f.data.length;if(g<j)j=g;CX(e,0,f,0,j);a.pL=f;}CX(b,c,f,a.py,d);a.py=a.py+d|0;}
let Sy=(a,b)=>{let c,d;if(b<a.py)return a.pL.data[b];c=new O;d=new L;d.ob=H(16);F(d,d.n$,C(37));N(d,d.n$,b,10);F(d,d.n$,C(38));b=a.py;N(d,d.n$,b,10);d=Bi(d);c.n_=1;c.oa=1;c.od=d;E(c);}
let ABK=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.py;if(c>=d){e=new O;f=new L;f.ob=H(16);F(f,f.n$,C(53));N(f,f.n$,c,10);F(f,f.n$,C(38));b=a.py;N(f,f.n$,b,10);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}if(b<=c){g=(c-b|0)+1|0;h=d-g|0;if(a.AX){i=a.pL;c=b+g|0;CX(i,c,i,b,d-c|0);}else{j=c+1|0;if(h>j)j=h;i=a.pL;CX(i,j,i,b,d-j|0);}a.py=h;return;}e=new O;f=new L;f.ob=H(16);F(f,f.n$,C(54));N(f,f.n$,b,10);F(f,f.n$,C(55));N(f,f.n$,c,10);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}
let SS=a=>{let b;if(a.py)return a.pL.data[0];b=new Cb;b.n_=1;b.oa=1;b.od=C(33);E(b);}
let ZY=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new V;d=new L;d.ob=H(16);F(d,d.n$,C(56));N(d,d.n$,b,10);d=Bi(d);c.n_=1;c.oa=1;c.od=d;E(c);}e=a.py;f=e+b|0;g=a.pL;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=CT(h);b=i.data.length;if(e<b)b=e;CX(g,0,i,0,b);a.pL=i;}return a.pL;}
let AEc=G();
let NJ=b=>{return Math.sin(b);}
let V$=b=>{return Math.cos(b);}
let ATS=b=>{return Math.tan(b);}
let Fj=b=>{return Math.exp(b);}
let C$=b=>{return Math.log(b);}
let Cf=b=>{return Math.sqrt(b);}
let GX=b=>{return Math.ceil(b);}
let Rz=(b,c)=>{return D7(b,c);}
let D7=(b,c)=>{return Math.pow(b,c);}
let AQn=b=>{return BC(b+PN(b)*0.5);}
let BJ=()=>{return Math.random();}
let Kr=(b,c)=>{if(b>c)c=b;return c;}
let Yn=(b,c)=>{return Math.max(b,c);}
let ASG=(b,c)=>{return Yn(b,c);}
let ZX=(b,c)=>{return Math.min(b,c);}
let A8I=(b,c)=>{return ZX(b,c);}
let J0=(b,c)=>{return Math.max(b,c);}
let AKO=(b,c)=>{return J0(b,c);}
let Jo=b=>{return Math.abs(b);}
let Lu=b=>{return Math.abs(b);}
let PN=b=>{return Math.sign(b);}
let FH=b=>{return Math.sign(b);}
function DZ(){let a=this;D.call(a);a.pB=null;a.pP=null;a.r9=0.0;a.Ao=0.0;a.Cm=0.0;}
let BiE=()=>{let a=new DZ();ADI(a);return a;}
let ADI=a=>{let b;b=new CQ;b.pz=1;b.os=Bt(D,16);a.pB=b;b=new KO;b.AX=1;b.pL=CT(16);a.pP=b;}
let RT=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.pB;d=b.pB;e=d.os;f=d.oj;g=c.os;h=g.data;i=c.oj;j=i+f|0;if(j<=h.length)d=g;else{k=8;if(k<=j)k=j;i=i*1.75|0;if(k>i)i=k;l=g.constructor;if(l===null)d=null;else{d=l.classObject;if(d===null){d=new CN;d.oE=l;m=d;l.classObject=m;}}l=EP(d);if(l===null){b=new Dv;Bm(b);E(b);}if(l===BH(CO)){b=new V;Bm(b);E(b);}if(i<0){b=new D$;Bm(b);E(b);}d=EN(l.oE,i);l=d.data;k=c.oj;n=l.length;if(k<n)n=k;Ff(g,0,d,0,n);c.os=d;}Ff(e,0,d,c.oj,f);c.oj=j;c=a.pP;o=c.py;if(o<=0?0:1)c.py=o-1|0;b
=b.pP;K9(c,b.pL,0,b.py);}
let Yj=a=>{let b,c,d,e,f,g,h;b=a.pB;c=b.os;d=0;e=b.oj;f=null;if(d>e){b=new V;b.n_=1;b.oa=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oj=0;a.pP.py=0;}
let Or=a=>{let b,c,d,e,f,g,h,i,j,k;b=new L;c=a.pB;d=c.oj;b.ob=H(d+32|0);e=0;while(true){if(e>=d){F(b,b.n$,C(59));f=a.r9;EQ(b,b.n$,f);F(b,b.n$,C(59));f=a.Ao;EQ(b,b.n$,f);F(b,b.n$,C(59));f=a.Cm;EQ(b,b.n$,f);c=new P;g=b.ob;h=g.data;d=b.n$;S();i=h.length;if(d>=0&&d<=(i-0|0)){c.oc=Q(g.data,0,d);return c;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}if(e>=c.oj)break;i=c.os.data[e].tF&65535;j=b.n$;Bp(b,j,j+1|0);b.ob.data[j]=i;e=e+1|0;}k=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,e,10);F(b,b.n$,C(38));e=c.oj;N(b,b.n$,e,
10);c=new P;g=b.ob;h=g.data;d=b.n$;S();i=h.length;if(d>=0&&d<=(i-0|0)){c.oc=Q(g.data,0,d);k.n_=1;k.oa=1;k.od=c;E(k);}b=new O;Bm(b);E(b);}
function Et(){let a=this;D.call(a);a.pE=null;a.o3=0;a.ra=0;}
let Gp=(a,b)=>{let c,d,e,f,g;c=a.pE;d=c.data;e=a.o3;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=X(f);g=d.data.length;if(e<g)g=e;CX(c,0,d,0,g);a.pE=d;}c=d.data;f=a.o3;a.o3=f+1|0;c[f]=b;}
let AHI=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.pE;e=d.data;f=a.o3;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=X(h);i=g.data.length;if(f<i)i=f;CX(d,0,g,0,i);a.pE=g;}e=g.data;j=a.o3;e[j]=b;e[j+1|0]=c;a.o3=j+2|0;}
let GM=(a,b)=>{let c,d;if(b<a.o3)return a.pE.data[b];c=new O;d=new L;d.ob=H(16);F(d,d.n$,C(37));N(d,d.n$,b,10);F(d,d.n$,C(38));b=a.o3;N(d,d.n$,b,10);d=Bi(d);c.n_=1;c.oa=1;c.od=d;E(c);}
let KF=(a,b,c)=>{let d,e;if(b<a.o3){a.pE.data[b]=c;return;}d=new O;e=new L;e.ob=H(16);F(e,e.n$,C(37));N(e,e.n$,b,10);F(e,e.n$,C(38));b=a.o3;N(e,e.n$,b,10);e=Bi(e);d.n_=1;d.oa=1;d.od=e;E(d);}
let Tp=a=>{return a.pE.data[a.o3-1|0];}
let Zb=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new V;d=new L;d.ob=H(16);F(d,d.n$,C(56));N(d,d.n$,b,10);d=Bi(d);c.n_=1;c.oa=1;c.od=d;E(c);}e=a.o3;f=e+b|0;g=a.pE;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=X(h);b=i.data.length;if(e<b)b=e;CX(g,0,i,0,b);a.pE=i;}return a.pE;}
let AP4=a=>{let b,c,d,e,f,g,h;if(a.ra){b=a.pE;c=1;d=0;e=a.o3;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=Fd();g.$id$=h;}return a.$id$;}
let A9m=(a,b)=>{let c,d,e,f,g,h;if(b===a)return 1;if(!a.ra)return 0;if(!(b instanceof Et))return 0;c=b;if(!c.ra)return 0;d=a.o3;if(d!=c.o3)return 0;e=a.pE;f=c.pE;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
let A3P=a=>{let b,c,d,e,f,g,h,i;if(!a.o3)return C(58);b=a.pE;c=new Kv;d=H(32);e=d.data;c.pe=d;f=c.oW;if(f==e.length)DQ(c,f+1|0);b=b.data;e=c.pe.data;g=c.oW;c.oW=g+1|0;e[g]=91;Oo(c,b[0],0,48);h=1;while(h<a.o3){i=C(59).oc.length;f=c.oW+i|0;if(f>c.pe.data.length)DQ(c,f);H4(C(59),0,i,c.pe,c.oW);c.oW=f;Oo(c,b[h],0,48);h=h+1|0;}f=c.oW;if(f==c.pe.data.length)DQ(c,f+1|0);c:{b=c.pe;e=b.data;g=c.oW;f=g+1|0;c.oW=f;e[g]=93;if(!f)c=C(43);else{c=new P;S();g=e.length;if(f<0)break c;if(f>(g-0|0))break c;c.oc=Q(b.data,0,f);}return c;}c
=new O;c.n_=1;c.oa=1;E(c);}
let LK=G(0);
let Lh=G();
let Gv=G(0);
function Jz(){let a=this;Lh.call(a);a.tA=0;a.qq=null;a.Ck=0;a.zE=0.0;a.uy=0;}
let BfD=(a,b)=>{let c=new Jz();A9S(c,a,b);return c;}
let JZ=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let A9S=(a,b,c)=>{let d,e,f;if(b>=0&&c>0.0){b=JZ(b);a.tA=0;d=Bt(Gt,b);e=d.data;a.qq=d;a.zE=c;a.uy=e.length*c|0;return;}f=new V;f.n_=1;f.oa=1;E(f);}
let Xg=(a,b,c,d)=>{let e,f;e=a.qq.data[c];while(e!==null){if(e.tY==d){f=e.qV;if(b!==f&&!b.cG(f)?0:1)break;}e=e.q6;}return e;}
let JV=(a,b,c)=>{let d,e,f,g,h,i;if(b===null){d=a.qq.data;e=d[0];while(e!==null&&e.qV!==null){e=e.q6;}if(e===null){a.Ck=a.Ck+1|0;f=null;e=new Gt;b=null;e.qV=f;e.rp=b;e.tY=0;e.q6=d[0];d[0]=e;g=a.tA+1|0;a.tA=g;if(g>a.uy)SZ(a,d.length);}}else{h=b.cF();d=a.qq.data;i=h&(d.length-1|0);e=d[i];while(e!==null){if(e.tY==h){f=e.qV;if(b!==f&&!b.cG(f)?0:1)break;}e=e.q6;}if(e===null){a.Ck=a.Ck+1|0;e=new Gt;f=null;e.qV=b;e.rp=f;e.tY=h;d=a.qq.data;e.q6=d[i];d[i]=e;g=a.tA+1|0;a.tA=g;if(g>a.uy)SZ(a,d.length);}}f=e.rp;e.rp=c;return f;}
let SZ=(a,b)=>{let c,d,e,f,g,h,i,j;c=JZ(!b?1:b<<1);d=Bt(Gt,c);e=d.data;f=0;c=c-1|0;while(true){g=a.qq.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.tY&c;j=h.q6;h.q6=e[i];e[i]=h;h=j;}f=f+1|0;}a.qq=d;a.uy=e.length*a.zE|0;}
let AYo=(b,c)=>{return b!==c&&!b.cG(c)?0:1;}
let Rk=G(0);
let TJ=G();
let Eu=G();
let AIW=null;let ADu=null;let CJ=null;let CA=null;let AGb=null;let A6N=null;let B1=null;let B$=null;let UG=null;let UH=null;let AAR=b=>{let c,d,e;c=new P;d=H(1);e=d.data;e[0]=b;S();c.oc=Q(d.data,0,e.length);return c;}
let ACx=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new O;e.n_=1;e.oa=1;E(e);}
let AE7=b=>{return (55296|(b-65536|0)>>10&1023)&65535;}
let AAF=b=>{return (56320|b&1023)&65535;}
let Te=()=>{if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return CA;}
let Ol=()=>{if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}return CJ;}
let C1=(b,c)=>{let d,e;d=b.Hj.data;if(c<d.length)return c+d[c]|0;d=b.FD;e=AG8(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;}
let AG8=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=B9(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;}
let Ke=b=>{let c,d,e,f,g,h;if(ADu===null){if(UG===null)UG=AD7();ADu=A95((UG.value!==null?Bv(UG.value):null));}c=ADu.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=B9(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);}
let Ji=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
let Go=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new V;c.n_=1;c.oa=1;E(c);}if(b<65536){d=H(1);d.data[0]=b&65535;return d;}return S$([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);}
let Dt=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(AGb===null){if(UH===null)UH=ABe();AGb=AWE((UH.value!==null?Bv(UH.value):null));}e=AGb.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.Dg)c=f+1|0;else{d=g.Eg;if(b>=d)return g.Ej.data[b-d|0];d=f-1|0;}}return 0;}
let IZ=b=>{b:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break b;if(b>159)break b;}return 1;}return Dt(b)!=16?0:1;}
let AX2=()=>{AIW=BH(AJ$);A6N=Bt(Eu,128);}
let ER=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
let E_=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
let AD7=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
let ABe=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let AC7=G();
let A5d=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
let JJ=G();
let BX=null;let Fb=null;let JH=null;let Ff=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Nx(b)&&(e+f|0)<=Nx(d)){c:{o:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CN;h.oE=g;i=h;g.classObject=i;}}j=EP(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CN;h.oE=g;i=h;g.classObject=i;}}i=EP(h);if(j!==null&&i!==null){if(j===i)break o;if(!(j.oE.$meta.primitive?1:0)&&!(i.oE.$meta.primitive?1:0)){k=b;l=0;m
=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p=i.oE;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&TZ(g.constructor,p)?1:0)){Ng(b,c,d,e,l);b=new JY;b.n_=1;b.oa=1;E(b);}l=l+1|0;m=o;}Ng(b,c,d,e,f);return;}if(!(j.oE.$meta.primitive?1:0))break c;if(i.oE.$meta.primitive?1:0)break o;else break c;}b=new JY;b.n_=1;b.oa=1;E(b);}}Ng(b,c,d,e,f);return;}b=new JY;b.n_=1;b.oa=1;E(b);}b=new O;b.n_=1;b.oa=1;E(b);}d=new Dv;d.n_=1;d.oa=1;d.od=C(118);E(d);}
let CX=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Nx(b)&&(e+f|0)<=Nx(d)){Ng(b,c,d,e,f);return;}b=new O;b.n_=1;b.oa=1;E(b);}
let Ng=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}}
let F4=()=>{return BC((new Date()).getTime());}
let MW=()=>{let b,c;if(JH===null){b=new L2;MK(b,11);EF(b,C(119),C(120));EF(b,C(84),C(121));EF(b,C(122),C(123));EF(b,C(124),C(125));EF(b,C(126),C(127));EF(b,C(128),C(129));EF(b,C(130),C(120));EF(b,C(131),C(123));c=new L2;MK(c,11);c.Iw=b;JH=c;}}
let Qq=(b,c)=>{MW();return EF(JH,b,c);}
let RB=G(0);
function Ox(){let a=this;D.call(a);a.pp=0;a.HB=0;a.Gv=0;a.qW=0;}
let X6=a=>{return a.pp;}
let WC=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;b:{BfS();switch(ATC.data[d.oi]){case 1:if(a.qW){if(BX===null){e=new Dp;e.p5=DY;d=new L;d.ob=H(16);e.o6=d;e.p2=H(32);e.p_=0;Do();e.p7=Du;BX=e;}e=BX;g=new L;g.ob=H(16);F(g,g.n$,C(132));F(g,g.n$,c===null?C(2):c);d=new P;h=g.ob;i=h.data;j=g.n$;S();k=i.length;if(j>=0&&j<=(k-0|0)){d.oc=Q(h.data,0,j);g=e.o6;F(g,g.n$,d);j=g.n$;Bp(g,j,j+1|0);g.ob.data[j]=10;Dy(e);}else{c=new O;Bm(c);E(c);}}a.pp=a.pp+1|0;d=new HT;d.sg=a;d.vb=b;d.r6=c;d.sB=f;Dq();c=null;e=null;d.rf=new D;d.re=1;d.sq
=e;d.sU=c;k=DL;DL=k+1|0;d.sQ=I(k);c=new F3;c.ss=d;GK(c);break b;case 2:d=null;g=new Og;g.zI=a;g.xH=f;g.GY=d;g.Gp=e;if(a.qW){if(BX===null){e=new Dp;e.p5=DY;d=new L;Dn(d);d.ob=H(16);e.o6=d;e.p2=H(32);e.p_=0;Do();e.p7=Du;BX=e;}f=BX;d=new L;d.ob=H(16);DI(d,d.n$,DJ(C(132)));DI(d,d.n$,c===null?C(2):DJ(c));e=new P;h=d.ob;i=h.data;l=d.n$;KZ(0,l,i.length);e.oc=Q(h.data,0,l);ML(f,e);}a.pp=a.pp+1|0;d=new HU;d.r7=a;d.th=b;d.sd=c;d.sN=g;Dq();c=null;e=null;d.rf=new D;d.re=1;d.sq=e;d.sU=c;k=DL;DL=k+1|0;d.sQ=I(k);c=new F3;c.ss
=d;GK(c);break b;case 3:break;case 4:Sz(a,b,c,A_M(a,f));break b;case 5:YN(f,c,null);break b;default:c=new Bc;e=new L;F$(e);CS(CS(e,C(133)),d);Pb(c,Cy(e));E(c);}Sz(a,b,c,f);}}
let VT=(a,b,c,d)=>{let e,f,g,h,i;if(a.qW){if(BX===null){e=new Dp;e.p5=DY;f=new L;f.ob=H(16);e.o6=f;e.p2=H(32);e.p_=0;Do();e.p7=Du;BX=e;}e=BX;f=new L;f.ob=H(16);F(f,f.n$,C(132));F(f,f.n$,c===null?C(2):c);g=Bi(f);f=e.o6;F(f,f.n$,g);h=f.n$;Bp(f,h,h+1|0);f.ob.data[h]=10;Dy(e);}a.pp=a.pp+1|0;f=new HT;f.sg=a;f.vb=b;f.r6=c;f.sB=d;Dq();c=null;d=null;f.rf=new D;f.re=1;f.sq=d;f.sU=c;i=DL;DL=i+1|0;f.sQ=I(i);c=new F3;c.ss=f;GK(c);}
let Mq=(a,b,c,d)=>{let e,f,g,h;if(a.qW){if(BX===null){e=new Dp;e.p5=DY;f=new L;f.ob=H(16);e.o6=f;e.p2=H(32);e.p_=0;Do();e.p7=Du;BX=e;}e=BX;f=new L;f.ob=H(16);F(f,f.n$,C(134));F(f,f.n$,c===null?C(2):c);g=Bi(f);f=e.o6;F(f,f.n$,g);h=f.n$;Bp(f,h,h+1|0);f.ob.data[h]=10;Dy(e);}a.pp=a.pp+1|0;e=new XMLHttpRequest();f=new Of;f.xr=a;f.ux=e;f.C7=b;f.BK=c;f.Dx=d;f=CK(f,"handleEvent");e.onreadystatechange=f;f=new Jm;f.DC=a;f.Bg=d;d=CK(f,"handleEvent");e.onprogress=d;e.open("GET",Cr(c),!!b);e.setRequestHeader("Content-Type",
"text/plain; charset=utf-8");e.send();}
let Sz=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.qW){if(BX===null){e=new Dp;e.p5=DY;f=new L;f.ob=H(16);e.o6=f;e.p2=H(32);e.p_=0;Do();e.p7=Du;BX=e;}e=BX;f=new L;f.ob=H(16);F(f,f.n$,C(132));F(f,f.n$,c===null?C(2):c);g=new P;h=f.ob;i=h.data;j=f.n$;S();k=i.length;if(j>=0&&j<=(k-0|0)){g.oc=Q(h.data,0,j);f=e.o6;F(f,f.n$,g);k=f.n$;Bp(f,k,k+1|0);f.ob.data[k]=10;Dy(e);}else{c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}}a.pp=a.pp+1|0;f=new HU;f.r7=a;f.th=b;f.sd=c;f.sN=d;Dq();c=null;d=null;f.rf=new D;f.re=1;f.sq=d;f.sU=c;l=DL;DL=l+1|
0;f.sQ=I(l);c=new F3;c.ss=f;GK(c);}
let O0=G();
let KD=null;let AIL=()=>{return KD;}
let M3=G();
let D1=0;let Ky=0;let A2o=()=>{D1=1;}
let Qk=G(0);
function ME(){let a=this;D.call(a);a.w1=null;a.oU=null;a.HH=null;a.wB=null;a.FM=null;a.H_=null;a.Cn=0.0;a.DV=M;a.AR=M;a.pu=0.0;a.Ca=0.0;a.EV=0;}
let AHL=0;let KM=null;let JK=()=>{JK=Bj(ME);AYC();}
let BbM=a=>{let b=new ME();AE9(b,a);return b;}
let AE9=(a,b)=>{let c,d,e,f,g,h,i,j,k;JK();a.Cn=0.0;a.DV=F4();a.AR=I(-1);a.pu=0.0;a.Ca=0.0;a.HH=b;Ju();c=window.document;d=b.Gw;a.oU=c.getElementById(Cr(d));e=AMq();d=!!b.Hy;e.alpha=d;d=!!b.GS;e.antialias=d;d=!!b.G4;e.stencil=d;d=!!b.FH;e.premultipliedAlpha=d;d=!!b.Hk;e.preserveDrawingBuffer=d;f=a.oU;if(b.DM)a.w1=f.getContext("webgl2",e);a:{if(b.DM){d=a.w1;if(d!==null){if(!b.DD)f=Bgp(d);else{f=new R4;ABy(f,d);}a.FM=f;a.wB=f;break a;}}f=f.getContext("webgl",e);a.w1=f;if(!b.DD)d=Bf8(f);else{d=new U7;TR(d,f);}a.wB
=d;}d=a.wB.eZ(7938);c=a.wB.eZ(7936);g=a.wB.eZ(7937);f=new Pc;RI();Yq(f,PA,d,c,g);a.H_=f;h=b.Bd;if(!(h<0&&b.wf<0)){if(h&&b.wf?1:0)Mv(a,h,b.wf);else{i=Jp;h=i.rs.document.documentElement.clientWidth-b.CS|0;j=i.rs.document.documentElement.clientHeight-b.EY|0;k=!b.BX?1.0:devicePixelRatio||1;Mv(a,k*h|0,k*j|0);}}b=a.oU;d=new Ub;d.H4=a;VP(b,CK(d,"fullscreenChanged"));}
let WO=a=>{let b,c,d;b=F4();c=BB(B3(b,a.DV))/1000.0;a.pu=c;a.DV=b;c=a.Ca+c;a.Ca=c;d=a.EV+1|0;a.EV=d;if(c>1.0){a.Cn=d;a.Ca=0.0;a.EV=0;}}
let AHS=a=>{return a.oU.width;}
let ABn=a=>{return a.oU.height;}
let BZ=a=>{return a.pu;}
let Cv=a=>{return a.Cn|0;}
let Mv=(a,b,c)=>{let d,e,f,g,h,i;d=a.oU;e=b;d.width=e;d=a.oU;e=c;d.height=e;if(a.HH.BX){f=devicePixelRatio||1;e=a.oU.style;g=b/f;AZx();h=new L;h.ob=H(16);MP(h,h.n$,g);F(h,h.n$,C(135));i=Bi(h);e.setProperty("width",Cr(i));f=c/f;h=new L;h.ob=H(16);MP(h,h.n$,f);F(h,h.n$,C(135));d=Bi(h);e.setProperty("height",Cr(d));}}
let AYC=()=>{AHL=0;KM=Ei(51,0.800000011920929);}
let VP=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}}
function ABN(){let a=this;D.call(a);a.EC=null;a.x1=null;a.BV=null;a.zp=null;a.zs=null;a.GZ=null;a.z2=null;a.Eu=0;a.Bw=null;}
let Bbl=(a,b,c)=>{let d=new ABN();A3q(d,a,b,c);return d;}
let A3q=(a,b,c,d)=>{let e;a.EC=F7(51,0.800000011920929);a.x1=F7(51,0.800000011920929);a.BV=F7(51,0.800000011920929);a.zp=F7(51,0.800000011920929);a.zs=F7(51,0.800000011920929);a.GZ=F7(51,0.800000011920929);e=new CQ;e.pz=1;e.os=Bt(D,16);a.z2=e;a.Eu=(-1);a.Bw=b;AAa(a,c,d);}
let AAa=(a,b,c)=>{let d,e,f;d=c.rM;if(d.GM!==null){e=b.ownerDocument;f=new Po;f.Js=a;e.addEventListener("dragenter",CK(f,"handleEvent"),!!0);f=new Pp;f.ID=a;e.addEventListener("dragover",CK(f,"handleEvent"),!!0);f=new Pl;f.GP=a;f.E_=c;f.GC=d;e.addEventListener("drop",CK(f,"handleEvent"));}}
let XW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(X1(a,b.En)){b.Ae=b.HK;b.zl=1;b.ws=0;b.r_=0;return 0;}if(b.r_)return 0;b.ws=0;b.zl=0;b.r_=1;c=b.En;d=b.Fm;e=b.GN;f=new Pn;f.IK=a;f.rm=b;b=KD;g=a.Bw;h=new L;h.ob=H(16);i=h.n$;if(g===null)g=C(2);G2(h,i,g);G2(h,h.n$,C(91));g=new P;j=h.ob;k=j.data;l=h.n$;S();m=k.length;if(l>=0&&l<=(m-0|0)){g.oc=Q(j.data,0,l);h=new L;h.ob=H(16);F(h,h.n$,g);F(h,h.n$,c===null?C(2):c);g=new P;k=h.ob;j=k.data;m=h.n$;i=j.length;if(m>=0&&m<=(i-0|0)){g.oc=Q(k.data,0,m);h=new Pk;h.BZ=a;h.r0=f;h.AO
=d;h.BI=c;WC(b,1,g,d,e,h);return 1;}b=new O;Bm(b);E(b);}b=new O;BY(b);E(b);}
let Jl=(a,b,c,d)=>{b:{Bcq();switch(AJH.data[b.oi]){case 1:break;case 2:B2(a.x1,c,d);break b;case 3:B2(a.zs,c,d);break b;case 4:B2(a.BV,c,d);break b;case 5:B2(a.EC,c,null);break b;default:break b;}B2(a.zp,c,d);}}
let Ww=(a,b)=>{let c,d,e,f,$$je;if(Dm(a.zp,b)<0?0:1){k:{try{c=A0b(Y3(ACn(a.zp,b),C(136)));}catch($$e){$$je=BG($$e);if($$je instanceof MV){break k;}else{throw $$e;}}return c;}return null;}if(Dm(a.x1,b)<0?0:1){b=new NC;d=BW(1);e=d.data.length;b.yQ=d;b.t7=0;b.C8=0;b.xP=0+e|0;return b;}if(Dm(a.zs,b)<0?0:1){c=a.zs;f=Dm(c,b);b=f<0?null:c.qa.data[f];c=new Rn;c.ED=b;return c;}if(!(Dm(a.BV,b)<0?0:1))return null;b=new NC;d=BW(1);e=d.data.length;b.yQ=d;b.t7=0;b.C8=0;b.xP=0+e|0;return b;}
let X1=(a,b)=>{let c;c=Dm(a.zp,b)<0?0:1;return !c&&!(Dm(a.x1,b)<0?0:1)&&!(Dm(a.zs,b)<0?0:1)&&!(Dm(a.BV,b)<0?0:1)&&!(Dm(a.EC,b)<0?0:1)?0:1;}
let Ew=G();
let AQJ=(a,b)=>{return;}
let TX=G(0);
let FO=G(0);
function AFp(){let a=this;D.call(a);a.pG=null;a.yJ=0;a.ta=null;a.sx=null;a.p1=null;a.p0=null;a.z3=null;a.z4=null;a.B5=null;a.w4=0;a.wd=null;a.x9=0;a.pc=null;a.DI=null;a.C$=null;a.qK=null;a.tj=M;a.wG=0;}
let Bdp=a=>{let b=new AFp();ASo(b,a);return b;}
let AV9=b=>{let c,d,e,f;c=J7;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(Jo(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
let ASo=(a,b)=>{a.yJ=0;a.ta=Ei(20,0.800000011920929);a.sx=NZ(20);a.p1=X(20);a.p0=X(20);a.z3=X(20);a.z4=X(20);a.B5=AJS(51,0.800000011920929);a.w4=0;a.wd=NZ(256);a.x9=0;a.pc=NZ(256);a.DI=NZ(5);a.C$=AJS(51,0.800000011920929);a.wG=1;a.pG=b;AFj(a);}
let AFj=a=>{let b;b=a.pG.ownerDocument;b.addEventListener("mousedown",CK(a,"handleEvent"),!!0);b.addEventListener("mouseup",CK(a,"handleEvent"),!!0);b.addEventListener("mousemove",CK(a,"handleEvent"),!!0);b.addEventListener("wheel",CK(a,"handleEvent"),!!0);b.addEventListener("keydown",CK(a,"handleEvent"),!!0);b.addEventListener("keyup",CK(a,"handleEvent"),!!0);b.addEventListener("keypress",CK(a,"handleEvent"),!!0);a.pG.addEventListener("touchstart",CK(a,"handleEvent"),!!1);a.pG.addEventListener("touchmove",
CK(a,"handleEvent"),!!1);a.pG.addEventListener("touchcancel",CK(a,"handleEvent"),!!1);a.pG.addEventListener("touchend",CK(a,"handleEvent"),!!1);}
let AFw=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b:{c=Bv(b.type);if(Gf(c,C(137))){window.focus();d=b.target;e=a.pG;if(d!==e?0:1){f=a.sx.data;if(!f[0]){a.wG=1;a.yJ=1;f[0]=1;g=Mc(b.button);ACW(a.B5,g);a.DI.data[g]=1;a.z3.data[0]=0;a.z4.data[0]=0;if(!LR(a)){h=Ie(a,b,a.pG);i=Ir(a,b,a.pG);a.p1.data[0]=h;a.p0.data[0]=i;}else{f=a.p1.data;f[0]=f[0]+b.movementX|0;f=a.p0.data;f[0]=f[0]+b.movementY|0;}a.tj=GC();j=a.qK;if(j!==null)j.fg(a.p1.data[0],a.p0.data[0],0,Mc(b.button));b.preventDefault();b.stopPropagation();break b;}}k
=Ie(a,b,e);l=Ir(a,b,a.pG);if(!(k>=0.0&&k<=AHS(Bb)&&l>=0.0&&l<=ABn(Bb)))a.wG=0;return;}if(Gf(c,C(138))){if(!a.sx.data[0])return;AAI(a.B5,Mc(b.button));f=a.sx;f.data[0]=a.B5.r4<=0?0:1;if(!LR(a)){GI(a,0,Ie(a,b,a.pG)-a.p1.data[0]|0,Ir(a,b,a.pG)-a.p0.data[0]|0);a.p1.data[0]=Ie(a,b,a.pG);a.p0.data[0]=Ir(a,b,a.pG);}else{GI(a,0,b.movementX|0,b.movementY|0);f=a.p1.data;f[0]=f[0]+b.movementX|0;f=a.p0.data;f[0]=f[0]+b.movementY|0;}a.tj=GC();a.sx.data[0]=0;j=a.qK;if(j!==null)j.fj(a.p1.data[0],a.p0.data[0],0,Mc(b.button));}
else if(!Gf(c,C(139))){if(Gf(c,C(140))){if(a.qK!==null){m=AV9(b);a.qK.fl(0.0,m|0);}a.tj=GC();}else if(Gf(c,C(141))){a.yJ=1;n=b.changedTouches;o=0;p=n.length;while(o<p){j=n.item(o);q=j.identifier;e=a.ta;r=AHs(a);C6(e,q,Cc(r));a.sx.data[r]=1;a.p1.data[r]=IX(a,j,a.pG);a.p0.data[r]=Ip(a,j,a.pG);a.z3.data[r]=0;a.z4.data[r]=0;j=a.qK;if(j!==null)j.fg(a.p1.data[r],a.p0.data[r],r,0);o=o+1|0;}a.tj=GC();b.preventDefault();}}else{if(!LR(a)){h=Ie(a,b,a.pG);i=Ir(a,b,a.pG);GI(a,0,h-a.p1.data[0]|0,i-a.p0.data[0]|0);a.p1.data[0]
=h;a.p0.data[0]=i;}else{GI(a,0,b.movementX|0,b.movementY|0);f=a.p1.data;f[0]=f[0]+b.movementX|0;f=a.p0.data;f[0]=f[0]+b.movementY|0;}a.tj=GC();j=a.qK;if(j!==null){if(!a.sx.data[0])j.fq(a.p1.data[0],a.p0.data[0]);else j.fr(a.p1.data[0],a.p0.data[0],0);}}}if(Gf(c,C(142))){n=b.changedTouches;o=0;p=n.length;while(o<p){s=n.item(o);q=s.identifier;t=D4(Mr(a.ta,q));GI(a,t,IX(a,s,a.pG)-a.p1.data[t]|0,Ip(a,s,a.pG)-a.p0.data[t]|0);a.p1.data[t]=IX(a,s,a.pG);a.p0.data[t]=Ip(a,s,a.pG);j=a.qK;if(j!==null)j.fr(a.p1.data[t],
a.p0.data[t],t);o=o+1|0;}a.tj=GC();b.preventDefault();}if(Gf(c,C(143))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=D4(Mr(a.ta,q));Jc(a.ta,q);a.sx.data[t]=0;h=IX(a,s,a.pG);i=Ip(a,s,a.pG);GI(a,t,h-a.p1.data[t]|0,i-a.p0.data[t]|0);f=a.p1.data;f[t]=h;v=a.p0.data;v[t]=i;j=a.qK;if(j!==null)j.fj(f[t],v[t],t,0);o=o+1|0;}a.tj=GC();b.preventDefault();}if(Gf(c,C(144))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=D4(Mr(a.ta,q));Jc(a.ta,q);a.sx.data[t]=0;h=IX(a,
s,a.pG);i=Ip(a,s,a.pG);GI(a,t,h-a.p1.data[t]|0,i-a.p0.data[t]|0);f=a.p1.data;f[t]=h;v=a.p0.data;v[t]=i;j=a.qK;if(j!==null)j.fj(f[t],v[t],t,0);o=o+1|0;}a.tj=GC();b.preventDefault();}}
let VD=(a,b)=>{let c,d,e,f,g,h,i;c=Bv(b.type);if(c===C(145))d=1;else if(!(C(145) instanceof P))d=0;else{e=C(145);d=c.oc!==e.oc?0:1;}if(d&&a.wG){e:{f=Yr(b.keyCode);g=0;switch(f){case 67:g=8;break e;case 112:g=127;break e;default:}}e=a.C$;if(!f)d=e.xg;else{h=e.tc;d=Z(T(W(I(f),B(2135587861, 2654435769)),e.wo));g:{while(true){i=h.data[d];if(!i){d= -(d+1|0)|0;break g;}if(i==f)break;d=(d+1|0)&e.tJ;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.qK;if(e!==null){e.fu(f);a.qK.fv(g);}}
else{h=a.wd.data;if(!h[f]){a.w4=a.w4+1|0;h[f]=1;a.x9=1;a.pc.data[f]=1;e=a.qK;if(e!==null)e.fu(f);}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===C(146))d=1;else if(!(C(146) instanceof P))d=0;else{e=C(146);d=c.oc!==e.oc?0:1;}if(d&&a.wG){d=b.charCode&65535;e=a.qK;if(e!==null)e.fv(d);if(d==9){b.preventDefault();b.stopPropagation();}}else{if(c===C(147))d=1;else if(!(C(147) instanceof P))d=0;else{e=C(147);d=c.oc!==e.oc?0:1;}if(d&&a.wG){f=Yr(b.keyCode);e=a.C$;if(!f)d=e.xg;else{h=e.tc;d=Z(T(W(I(f),
B(2135587861, 2654435769)),e.wo));y:{while(true){g=h.data[d];if(!g){d= -(d+1|0)|0;break y;}if(g==f)break;d=(d+1|0)&e.tJ;}}d=d<0?0:1;}if(d)b.preventDefault();h=a.wd.data;if(h[f]){a.w4=a.w4-1|0;h[f]=0;}e=a.qK;if(e!==null)e.fw(f);if(f==61){b.preventDefault();b.stopPropagation();}}}}}
let AHs=a=>{let b,c,d;b=0;while(true){if(b>=20)return (-1);c=a.ta;if(b>=(-128)&&b<=127){Gj();d=Gr.data[b+128|0];}else{d=new FR;d.rB=b;}if(!AA6(c,d,0))break;b=b+1|0;}return b;}
let PE=a=>{let b,c,d;b:{if(a.yJ){a.yJ=0;b=0;while(true){c=a.DI.data;if(b>=c.length)break b;c[b]=0;b=b+1|0;}}}d:{if(a.x9){a.x9=0;d=0;while(true){c=a.pc.data;if(d>=c.length)break d;c[d]=0;d=d+1|0;}}}}
let GI=(a,b,c,d)=>{a.z3.data[b]=c;a.z4.data[b]=d;}
let Ie=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Op(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(148))g=1;else if(!(C(148) instanceof P))g=0;else{c=C(148);g=f.oc!==c.oc?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+FH(d)*0.5|0;}
let Ir=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Ql(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(148))g=1;else if(!(C(148) instanceof P))g=0;else{c=C(148);g=f.oc!==c.oc?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+FH(d)*0.5|0;}
let IX=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Op(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(148))g=1;else if(!(C(148) instanceof P))g=0;else{c=C(148);g=f.oc!==c.oc?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+FH(d)*0.5|0;}
let Ip=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Ql(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Bv(b.compatMode);if(f===C(148))g=1;else if(!(C(148) instanceof P))g=0;else{c=C(148);g=f.oc!==c.oc?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+FH(d)*0.5|0;}
let Ql=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
let Op=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
let Bs=(a,b)=>{if(b==(-1))return a.w4<=0?0:1;if(b>=0&&b<=255)return a.wd.data[b];return 0;}
let B5=(a,b)=>{if(b==(-1))return a.x9;if(b>=0&&b<=255)return a.pc.data[b];return 0;}
let W5=(a,b)=>{a.qK=b;}
let LR=a=>{return A8M(a.pG)?1:0;}
let A8M=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;}
let AJp=(a,b)=>{AFw(a,b);VD(a,b);}
let P4=G(0);
function QH(){D.call(this);this.AP=null;}
function Uf(){D.call(this);this.Is=null;}
let Ua=G(0);
let Pw=G();
let Sl=G(0);
function AF$(){let a=this;D.call(a);a.Jh=0;a.BJ=0;a.I3=null;a.De=null;}
let Bbm=()=>{let a=new AF$();AMy(a);return a;}
let AMy=a=>{let b;a.Jh=0;a.BJ=1;b=new TB;b.Br=a;a.I3=b;a.De=C(43);}
let AGM=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}}
let Fg=G();
let Ef=null;let Bb=null;let BeO=null;let Bd=null;let PS=null;let Bfr=null;let Cj=null;let Bq=null;let GJ=null;let Ux=G(0);
let Ug=G(0);
function ADy(){D.call(this);this.F2=null;}
let BgE=()=>{let a=new ADy();AKd(a);return a;}
let AKd=a=>{a.F2=null;a.F2=Bgi();}
function VE(){D.call(this);this.Co=null;}
let BfG=a=>{let b=new VE();AZy(b,a);return b;}
let AZy=(a,b)=>{a.Co=b;}
let ADm=(a,b)=>{let c,d,$$je;c=Bv(a.Co.tZ.rs.document.visibilityState);if(C(149)===c)d=1;else if(!(c instanceof P))d=0;else{c=c;d=C(149).oc!==c.oc?0:1;}if(!d){b=a.Co.zH;Hq(b);e:{try{c=PF(b);while(Ti(c)){Y5(Sw(c));}EU(b);break e;}catch($$e){$$je=BG($$e);c=$$je;}EU(b);E(c);}}else{b=a.Co.zH;Hq(b);f:{try{c=PF(b);while(Ti(c)){AAb(Sw(c));}EU(b);break f;}catch($$e){$$je=BG($$e);c=$$je;}EU(b);E(c);}}}
let A6W=(a,b)=>{ADm(a,b);}
function VF(){D.call(this);this.xW=null;}
let A_Q=a=>{let b=new VF();AJ7(b,a);return b;}
let AJ7=(a,b)=>{a.xW=b;}
let AIc=(a,b)=>{let c,d,e,f,g;c=a.xW.tZ.rs.document.documentElement.clientWidth;b=a.xW;d=c-b.rM.CS|0;e=b.tZ.rs.document.documentElement.clientHeight;b=a.xW;f=b.rM;c=e-f.EY|0;if(d>0&&c>0){if(b.ub!==null){if(f.BX){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Mv(a.xW.ub,d,c);}return;}}
let AVI=(a,b)=>{AIc(a,b);}
let V=G(B0);
let AQi=a=>{let b=new V();AIk(b,a);return b;}
let AIk=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
let AHn=G();
let KZ=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new O;e.n_=1;e.oa=1;E(e);}
let ACl=G();
let NE=(b,c)=>{let d,e,f,g;if(b<0){d=new V;e=new L;e.ob=H(16);F(e,e.n$,C(150));N(e,e.n$,b,10);e=Bi(e);d.n_=1;d.oa=1;d.od=e;E(d);}f=GX(b/c)|0;if(2>f)f=2;g=MY(f);if(g<=1073741824)return g;d=new V;e=new L;e.ob=H(16);F(e,e.n$,C(151));N(e,e.n$,b,10);e=Bi(e);d.n_=1;d.oa=1;d.od=e;E(d);}
let To=G(E3);
let AZF=null;let AAt=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new CU;b.n_=1;b.oa=1;b.od=C(77);E(b);}f=0;if(c>=0&&c<b.oc.length){e:{switch(b.oc.charCodeAt(c)){case 43:g=c+1|0;break e;case 45:f=1;g=c+1|0;break e;default:}g=c;}h=M;i=I(e);h:{while(g<d){j=g+1|0;if(g<0)break h;if(g>=b.oc.length)break h;k=Ke(b.oc.charCodeAt(g));if(k<0){l=new CU;b=Cw(b,c,d);if(b===null)b=C(2);m=new L;m.ob=H(16);F(m,m.n$,C(78));F(m,m.n$,b);b=new P;n=m.ob;o=n.data;d=m.n$;e=o.length;if(d>=0&&d<=(e-0|0)){b.oc=Q(n.data,
0,d);l.n_=1;l.oa=1;l.od=b;E(l);}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}if(k>=e){l=new CU;p=Cw(b,c,d);if(p===null)p=C(2);b=new L;Jn(b,16);M_(b,C(79));CS(CS(EX(b,e),C(72)),p);LE(l,Cy(b));E(l);}h=U(W(i,h),I(k));if(GG(h,M)){if(j==d&&Dh(h,B(0, 2147483648))&&f)return B(0, 2147483648);l=new CU;b=AC0(Pe(b,c,d));m=Dw();CS(CS(m,C(80)),b);LE(l,Cy(m));E(l);}g=j;}if(f)h=HI(h);return h;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new CU;l=new L;l.ob=H(16);F(l,l.n$,C(81));N(l,l.n$,e,10);m=new P;n=l.ob;o=n.data;d
=l.n$;S();e=o.length;if(d>=0&&d<=(e-0|0)){m.oc=Q(n.data,0,d);b.n_=1;b.oa=1;b.od=m;E(b);}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let Ec=b=>{let c,d;if(Dh(b,M))return 64;c=0;d=T(b,32);if(Ej(d,M))c=32;else d=b;b=T(d,16);if(Dh(b,M))b=d;else c=c|16;d=T(b,8);if(Dh(d,M))d=b;else c=c|8;b=T(d,4);if(Dh(b,M))b=d;else c=c|4;d=T(b,2);if(Dh(d,M))d=b;else c=c|2;if(Ej(T(d,1),M))c=c|1;return (64-c|0)-1|0;}
let KR=b=>{b=U(T(Be(b,B(2863311530, 2863311530)),1),Be(b,B(1431655765, 1431655765)));b=U(T(Be(b,B(3435973836, 3435973836)),2),Be(b,B(858993459, 858993459)));b=U(T(Be(b,B(1886417008, 1886417008)),4),Be(b,B(117901063, 117901063)));b=U(T(Be(b,B(251662080, 251662080)),8),Be(b,B(983055, 983055)));b=U(T(Be(b,B(2031616, 2031616)),16),Be(b,B(31, 31)));return Z(U(T(Be(b,B(0, 63)),32),Be(b,I(63))));}
let HX=b=>{b=B8(T(Be(b,B(2863311530, 2863311530)),1),BP(Be(b,B(1431655765, 1431655765)),1));b=B8(T(Be(b,B(3435973836, 3435973836)),2),BP(Be(b,B(858993459, 858993459)),2));b=B8(T(Be(b,B(4042322160, 4042322160)),4),BP(Be(b,B(252645135, 252645135)),4));b=B8(T(Be(b,B(4278255360, 4278255360)),8),BP(Be(b,B(16711935, 16711935)),8));b=B8(T(Be(b,B(4294901760, 4294901760)),16),BP(Be(b,B(65535, 65535)),16));return B8(T(Be(b,B(0, 4294967295)),32),BP(Be(b,B(4294967295, 0)),32));}
let EI=(b,c)=>{return Be8(b,c);}
let AB7=(b,c)=>{return A_W(b,c);}
let E8=(b,c)=>{return Bbn(b,c);}
let A14=()=>{AZF=BH(AQ0);}
let AES=G();
let AMq=()=>{return {};}
let Nl=G(0);
function Jj(){let a=this;D.call(a);a.og=null;a.vu=0;a.uj=0;a.qN=0;a.Id=0;a.I7=0;a.yO=0;a.vK=0;a.pN=null;a.qo=null;a.rk=null;a.Ju=null;a.Im=null;a.wg=null;a.q2=null;a.sc=0;a.zw=null;a.vz=null;a.yK=null;a.zD=null;a.IW=null;}
let Bf8=a=>{let b=new Jj();TR(b,a);return b;}
let TR=(a,b)=>{a.vu=1;a.uj=1;a.qN=1;a.Id=1;a.I7=1;a.yO=1;a.vK=1;a.pN=Ei(51,0.800000011920929);a.qo=Ei(51,0.800000011920929);a.rk=Ei(51,0.800000011920929);a.Ju=Ei(51,0.800000011920929);a.Im=Ei(51,0.800000011920929);a.wg=Ei(51,0.800000011920929);a.q2=Ei(51,0.800000011920929);a.sc=0;a.zw=new Float32Array(40000);a.vz=new Int32Array(12000);a.yK=new Int16Array(12000);a.zD=new Int8Array(12000);a.IW=new Uint8Array(240000);a.og=b;b.pixelStorei(37441,0);}
let Mo=(a,b)=>{let c,d,e,f,g;if(Ky){c=(!Fk(b,Fp)?null:b.uc.oZ.data).buffer;d=b.of;e=b.oe-d|0;return new Float32Array(c,d,e);}if((b.oe-b.of|0)>a.zw.length)a.zw=new Float32Array(b.oe-b.of|0);e=b.of;d=0;while(true){f=b.oe;if(e>=f)break;c=a.zw;g=PK(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.zw;e=f-b.of|0;return c.subarray(0,e);}
let PX=(a,b)=>{let c,d,e,f,g;if(Ky){c=(!Fk(b,Fp)?null:b.t$.oZ.data).buffer;d=b.of;e=b.oe-d|0;return new Int16Array(c,d,e);}if((b.oe-b.of|0)>a.yK.length)a.yK=new Int16Array(b.oe-b.of|0);e=b.of;d=0;while(true){f=b.oe;if(e>=f)break;c=a.yK;g=AGp(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.yK;e=f-b.of|0;return c.subarray(0,e);}
let U8=(a,b)=>{let c,d,e,f,g;if(Ky){c=(!Fk(b,Fp)?null:b.fM()).buffer;d=b.of;e=b.oe-d|0;return new Int32Array(c,d,e);}if((b.oe-b.of|0)>a.vz.length)a.vz=new Int32Array(b.oe-b.of|0);e=b.of;d=0;while(true){f=b.oe;if(e>=f)break;c=a.vz;g=b.bi(e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.vz;e=f-b.of|0;return c.subarray(0,e);}
let No=(a,b)=>{let c,d,e,f,g;if(Ky)return !Fk(b,Fp)?null:b.oZ.data;if((b.oe-b.of|0)>a.zD.length)a.zD=new Int8Array(b.oe-b.of|0);c=b.of;d=0;while(true){e=b.oe;if(c>=e)break;f=a.zD;g=Vt(b,c);d;f[d]=g;c=c+1|0;d=d+1|0;}f=a.zD;c=e-b.of|0;return f.subarray(0,c);}
let AVb=(a,b)=>{if((b.oe-b.of|0)>a.vz.length)a.vz=new Int32Array(b.oe-b.of|0);}
let AIB=(a,b)=>{let c,d,e,f,g;c=a.q2;d=a.sc;if(!d)c=!c.oM?null:c.oK;else{e=c.oI;f=Z(T(W(I(d),B(2135587861, 2654435769)),c.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==d)break;f=(f+1|0)&c.oL;}}c=f<0?null:c.oJ.data[f];}c=c;if(!b)c=!c.oM?null:c.oK;else{e=c.oI;d=Z(T(W(I(b),B(2135587861, 2654435769)),c.oO));q:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break q;}if(f==b)break;d=(d+1|0)&c.oL;}}c=d<0?null:c.oJ.data[d];}BR();return c===null?null:c.oR;}
let ANS=(a,b,c)=>{let d,e,f,g,h,i;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();h=d===null?null:d.oR;d=a.qo;if(!c)d=!d.oM?null:d.oK;else{e=d.oI;b=Z(T(W(I(c),B(2135587861, 2654435769)),d.oO));i:{while(true){g=e.data[b];if(!g){b= -(b+1|0)|0;break i;}if(g==c)break;b=(b+1|0)&d.oL;}}d=b<0?null:d.oJ.data[b];}i=d===null?null:d.oR;a.og.attachShader(h,i);}
let AVA=(a,b,c)=>{let d,e,f,g,h;d=a.og;e=a.rk;if(!c)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(c),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.bindBuffer(b,e);}
let AZw=(a,b,c)=>{let d,e,f,g,h;d=a.og;e=a.wg;if(!c)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(c),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.bindTexture(b,e);}
let A1A=(a,b,c,d,e)=>{a.og.blendFuncSeparate(b,c,d,e);}
let Pf=(a,b,c,d,e)=>{let f,g;if(d instanceof Fi){f=a.og;d=Mo(a,d);f.bufferData(b,d,e);}else if(d instanceof IK){f=a.og;d=U8(a,d);f.bufferData(b,d,e);}else if(d instanceof IO){f=a.og;d=PX(a,d);f.bufferData(b,d,e);}else if(d instanceof Gk){f=a.og;g=No(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Bc;f.n_=1;f.oa=1;f.od=C(152);E(f);}a.og.bufferData(b,c,e);}}
let SU=(a,b,c,d,e)=>{let f,g;if(e instanceof Fi){f=a.og;e=Mo(a,e);f.bufferSubData(b,c,e);}else if(e instanceof IK){f=a.og;g=U8(a,e);f.bufferSubData(b,c,g);}else if(e instanceof IO){f=a.og;e=PX(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof Gk)){f=new Bc;f.n_=1;f.oa=1;f.od=C(152);E(f);}f=a.og;e=No(a,e);f.bufferSubData(b,c,e);}}
let A8x=(a,b)=>{a.og.clear(b);}
let ALf=(a,b,c,d,e)=>{a.og.clearColor(b,c,d,e);}
let AOz=(a,b)=>{let c,d,e,f;c=a.qo;if(!b)c=!c.oM?null:c.oK;else{d=c.oI;e=Z(T(W(I(b),B(2135587861, 2654435769)),c.oO));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.oL;}}c=e<0?null:c.oJ.data[e];}BR();c=c===null?null:c.oR;a.og.compileShader(c);}
let AV7=a=>{let b,c;b=a.og.createProgram();c=a.vu;a.vu=c+1|0;C6(a.pN,c,C_(b));return c;}
let ASf=(a,b)=>{let c,d;c=a.og.createShader(b);d=a.uj;a.uj=d+1|0;C6(a.qo,d,C_(c));return d;}
let AUb=(a,b)=>{a.og.depthMask(!!b);}
let AR6=(a,b)=>{a.og.disable(b);}
let A5l=(a,b)=>{a.og.disableVertexAttribArray(b);}
let ALK=(a,b,c,d)=>{a.og.drawArrays(b,c,d);}
let AO7=(a,b,c,d,e)=>{let f,g;f=a.og;g=e.of;f.drawElements(b,c,d,g);}
let AQW=(a,b,c,d,e)=>{a.og.drawElements(b,c,d,e);}
let AVm=(a,b)=>{a.og.enable(b);}
let A8P=(a,b)=>{a.og.enableVertexAttribArray(b);}
let AEo=a=>{let b,c;b=a.og.createBuffer();c=a.qN;a.qN=c+1|0;C6(a.rk,c,C_(b));return c;}
let AIA=(a,b)=>{a.og.generateMipmap(b);}
let AVy=a=>{let b,c;b=a.og.createTexture();c=a.yO;a.yO=c+1|0;C6(a.wg,c,C_(b));return c;}
let RX=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.og;g=a.pN;if(!b)g=!g.oM?null:g.oK;else{h=g.oI;i=Z(T(W(I(b),B(2135587861, 2654435769)),g.oO));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.oL;}}g=i<0?null:g.oJ.data[i];}BR();g=g===null?null:g.oR;g=f.getActiveAttrib(g,c);Fq(d,g.size);Fq(e,g.type);d.of=0;d.oe=d.oy;d.or=(-1);e.of=0;e.oe=e.oy;e.or=(-1);return Bv(g.name);}
let Tm=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.og;g=a.pN;if(!b)g=!g.oM?null:g.oK;else{h=g.oI;i=Z(T(W(I(b),B(2135587861, 2654435769)),g.oO));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.oL;}}g=i<0?null:g.oJ.data[i];}BR();g=g===null?null:g.oR;g=f.getActiveUniform(g,c);Fq(d,g.size);Fq(e,g.type);d.of=0;d.oe=d.oy;d.or=(-1);e.of=0;e.oe=e.oy;e.or=(-1);return Bv(g.name);}
let A0R=(a,b,c)=>{let d,e,f,g,h;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();h=d===null?null:d.oR;return a.og.getAttribLocation(h,Cr(c));}
let LM=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Bc;c.n_=1;c.oa=1;c.od=C(153);E(c);}NT(c,0,a.og.getParameter(b));c.of=0;c.oe=c.oy;c.or=(-1);}
let AV2=(a,b)=>{let c,d,e,f,g;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;return Bv(c.getProgramInfoLog(d));}
let TM=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.og;f=a.pN;if(!b)f=!f.oM?null:f.oK;else{g=f.oI;h=Z(T(W(I(b),B(2135587861, 2654435769)),f.oO));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.oL;}}f=h<0?null:f.oJ.data[h];}BR();f=f===null?null:f.oR;Fq(d,e.getProgramParameter(f,c));}else{f=a.og;e=a.pN;if(!b)e=!e.oM?null:e.oK;else{g=e.oI;i=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));w:{while(true){h=g.data[i];if(!h){i= -(i+1|0)|0;break w;}if(h==b)break;i=(i
+1|0)&e.oL;}}e=i<0?null:e.oJ.data[i];}BR();e=e===null?null:e.oR;Fq(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.of=0;d.oe=d.oy;d.or=(-1);}
let APv=(a,b)=>{let c,d,e,f,g;c=a.og;d=a.qo;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;return Bv(c.getShaderInfoLog(d));}
let OX=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.og;f=a.qo;if(!b)f=!f.oM?null:f.oK;else{g=f.oI;h=Z(T(W(I(b),B(2135587861, 2654435769)),f.oO));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.oL;}}f=h<0?null:f.oJ.data[h];}BR();f=f===null?null:f.oR;Fq(d,e.getShaderParameter(f,c));}else{f=a.og;e=a.qo;if(!b)e=!e.oM?null:e.oK;else{g=e.oI;h=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));w:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break w;}if(i==b)break;h=(h+1|0)&e.oL;}}e
=h<0?null:e.oJ.data[h];}BR();e=e===null?null:e.oR;Fq(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.of=0;d.oe=d.oy;d.or=(-1);}
let ANd=(a,b)=>{return Bv(a.og.getParameter(b));}
let A1j=(a,b,c)=>{let d,e,f,g,h,i;d=a.og;e=a.pN;if(!b)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d=d.getUniformLocation(e,Cr(c));if(d===null)return (-1);c=a.q2;if(!b)c=!c.oM?null:c.oK;else{i=c.oI;h=Z(T(W(I(b),B(2135587861, 2654435769)),c.oO));v:{while(true){g=i.data[h];if(!g){h= -(h+1|0)|0;break v;}if(g==b)break;h=(h+1|0)&c.oL;}}c=h<0?null
:c.oJ.data[h];}c=c;if(c===null){c=Ei(51,0.800000011920929);C6(a.q2,b,c);}h=a.vK;a.vK=h+1|0;C6(c,h,C_(d));return h;}
let AYu=(a,b)=>{let c,d,e,f,g;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.linkProgram(d);}
let ALJ=(a,b,c)=>{a.og.pixelStorei(b,c);}
let AWZ=(a,b,c)=>{let d,e,f,g,h;d=a.og;e=a.qo;if(!b)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.shaderSource(e,Cr(c));}
let T0=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.og;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.oe>4){if(!Ky)l=!(j instanceof Fi)?Uint8Array.from(No(a,j)):Mo(a,j);else{m=!Fk(j,Fp)?null:j.oZ.data;if(!(j instanceof Fi)){n=j.oe-j.of|0;o=m.byteOffset+j.of|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.oe-j.of|0;o=m.byteOffset+j.of|0;l=new Float32Array(m.buffer,o,n);}}a.og.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=AHb(j,0);JK();j=KM;if(!p)j=!j.oM?null:j.oK;else{q=j.oI;n=Z(T(W(I(p),B(2135587861, 2654435769)),
j.oO));q:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break q;}if(o==p)break;n=(n+1|0)&j.oL;}}j=n<0?null:j.oJ.data[n];}k=j;r=k.sP;if(r===null&&k.pA!==null?1:0){j=a.og;s=k.pA.zz;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.wm!==null?1:0){j=a.og;s=k.wm;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.xO!==null?1:0){j=a.og;s=k.xO;j.texImage2D(b,c,d,h,i,s);}else{j=a.og;Gu(k);s=k.sP;j.texImage2D(b,c,d,h,i,s);}}}
let AQg=(a,b,c,d)=>{a.og.texParameterf(b,c,d);}
let ARL=(a,b,c,d)=>{let e,f;e=a.og;f=d;e.texParameterf(b,c,f);}
let AR5=(a,b,c)=>{let d,e,f,g,h,i;d=a.q2;e=a.sc;if(!e)d=!d.oM?null:d.oK;else{f=d.oI;g=Z(T(W(I(e),B(2135587861, 2654435769)),d.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.oL;}}d=g<0?null:d.oJ.data[g];}d=d;if(!b)d=!d.oM?null:d.oK;else{f=d.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));q:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break q;}if(h==b)break;g=(g+1|0)&d.oL;}}d=g<0?null:d.oJ.data[g];}BR();i=d===null?null:d.oR;a.og.uniform1i(i,c);}
let ADB=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.q2;f=a.sc;if(!f)g=!g.oM?null:g.oK;else{h=g.oI;i=Z(T(W(I(f),B(2135587861, 2654435769)),g.oO));n:{while(true){c=h.data[i];if(!c){i= -(i+1|0)|0;break n;}if(c==f)break;i=(i+1|0)&g.oL;}}g=i<0?null:g.oJ.data[i];}g=g;if(!b)g=!g.oM?null:g.oK;else{h=g.oI;c=Z(T(W(I(b),B(2135587861, 2654435769)),g.oO));q:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break q;}if(f==b)break;c=(c+1|0)&g.oL;}}g=c<0?null:g.oJ.data[c];}BR();j=g===null?null:g.oR;g=a.og;k="uniformMatrix4fv";l=!!d;if
(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];c;m[c]=n;c=c+1|0;}}g[k](j,l,m);}
let AJ3=(a,b)=>{let c,d,e,f,g;a.sc=b;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.useProgram(d);}
let A31=(a,b,c,d,e,f,g)=>{a.og.vertexAttribPointer(b,c,d,!!e,f,g);}
let AXj=(a,b,c,d,e)=>{a.og.viewport(b,c,d,e);}
let Tw=G(0);
function NV(){let a=this;Jj.call(a);a.oY=null;a.IF=null;a.JE=0;a.IY=null;a.Ig=0;a.Je=null;a.IQ=0;a.yi=null;a.x3=0;a.Jz=null;}
let Bgp=a=>{let b=new NV();ABy(b,a);return b;}
let ABy=(a,b)=>{TR(a,b);a.IF=Ei(51,0.800000011920929);a.JE=1;a.IY=Ei(51,0.800000011920929);a.Ig=1;a.Je=Ei(51,0.800000011920929);a.IQ=1;a.yi=Ei(51,0.800000011920929);a.x3=1;a.Jz=new Uint32Array(12000);a.oY=b;}
let A1H=(a,b)=>{let c,d,e,f,g;c=a.oY;d=a.yi;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.bindVertexArray(d);}
let A49=(a,b,c,d,e)=>{a.oY.drawArraysInstanced(b,c,d,e);}
let A$H=(a,b,c,d,e,f)=>{a.oY.drawElementsInstanced(b,c,d,e,f);}
let A5I=(a,b,c)=>{let d,e,f,g;d=c.of;e=0;while(e<b){f=a.oY.createVertexArray();g=a.x3;a.x3=g+1|0;C6(a.yi,g,C_(f));Fq(c,g);e=e+1|0;}CH(c,d);}
let A3e=(a,b,c)=>{if(b!=34045)LM(a,b,c);else{NT(c,0,a.oY.getParameter(b));c.of=0;c.oe=c.oy;c.or=(-1);}}
let R4=G(NV);
let A0X=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.oY;d=a.yi;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.bindVertexArray(d);b=a.oY.getError();if(!b)return;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=(g-0|0)){i.oc
=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let AY3=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.oY.drawArraysInstanced(b,c,d,e);b=a.oY.getError();if(!b)return;f=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;Bm(f);E(f);}
let A9L=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.oY.drawElementsInstanced(b,c,d,e,f);b=a.oY.getError();if(!b)return;g=new Bc;h=BA(b,4);i=new L;i.ob=H(16);F(i,i.n$,C(154));N(i,i.n$,b,10);F(i,i.n$,C(59));b=i.n$;if(h===null)h=C(2);F(i,b,h);j=new P;k=i.ob;l=k.data;c=i.n$;S();d=l.length;if(c>=0&&c<=(d-0|0)){j.oc=Q(k.data,0,c);g.n_=1;g.oa=1;g.od=j;E(g);}g=new O;Bm(g);E(g);}
let AJW=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.of;e=0;while(e<b){f=a.oY.createVertexArray();g=a.x3;a.x3=g+1|0;C6(a.yi,g,C_(f));Fq(c,g);e=e+1|0;}CH(c,d);b=a.oY.getError();if(!b)return;c=new Bc;h=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(h===null)h=C(2);F(f,b,h);i=new P;j=f.ob;k=j.data;e=f.n$;S();l=k.length;if(e>=0&&e<=(l-0|0)){i.oc=Q(j.data,0,e);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let AKq=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.og;e=a.wg;if(!c)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(c),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.bindTexture(b,e);b=a.oY.getError();if(!b)return;d=new Bc;i=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.ob;k=f.data;c=e.n$;S();g=k.length;if(c>=0&&c<=(g-0|0)){j.oc
=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=j;E(d);}d=new O;Bm(d);E(d);}
let AUe=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.clear(b);b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let AQl=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.og.clearColor(b,c,d,e);f=a.oY.getError();if(!f)return;g=new Bc;h=BA(f,4);i=new L;i.ob=H(16);F(i,i.n$,C(154));N(i,i.n$,f,10);F(i,i.n$,C(59));f=i.n$;if(h===null)h=C(2);F(i,f,h);j=new P;k=i.ob;l=k.data;m=i.n$;S();n=l.length;if(m>=0&&m<=(n-0|0)){j.oc=Q(k.data,0,m);g.n_=1;g.oa=1;g.od=j;E(g);}g=new O;Bm(g);E(g);}
let AYl=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.depthMask(!!b);b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let A8T=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.disable(b);b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let A0B=(a,b,c,d)=>{let e,f,g,h,i,j;a.og.drawArrays(b,c,d);b=a.oY.getError();if(!b)return;e=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();d=j.length;if(c>=0&&c<=(d-0|0)){h.oc=Q(i.data,0,c);e.n_=1;e.oa=1;e.od=h;E(e);}e=new O;Bm(e);E(e);}
let A6n=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.og;g=e.of;f.drawElements(b,c,d,g);b=a.oY.getError();if(!b)return;e=new Bc;h=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(h===null)h=C(2);F(f,b,h);i=new P;j=f.ob;k=j.data;c=f.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);e.n_=1;e.oa=1;e.od=i;E(e);}e=new O;Bm(e);E(e);}
let A7x=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.enable(b);b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let AWR=(a,b)=>{return Bv(a.og.getParameter(b));}
let AXG=(a,b,c)=>{let d,e,f,g,h,i,j;a.og.pixelStorei(b,c);b=a.oY.getError();if(!b)return;d=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=g;E(d);}d=new O;Bm(d);E(d);}
let A4H=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;T0(a,b,c,d,e,f,g,h,i,j);b=a.oY.getError();if(!b)return;j=new Bc;k=BA(b,4);l=new L;l.ob=H(16);F(l,l.n$,C(154));N(l,l.n$,b,10);F(l,l.n$,C(59));b=l.n$;if(k===null)k=C(2);F(l,b,k);m=new P;n=l.ob;o=n.data;c=l.n$;S();d=o.length;if(c>=0&&c<=(d-0|0)){m.oc=Q(n.data,0,c);j.n_=1;j.oa=1;j.od=m;E(j);}j=new O;Bm(j);E(j);}
let A0r=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.og.texParameterf(b,c,d);b=a.oY.getError();if(!b)return;e=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();k=j.length;if(c>=0&&c<=(k-0|0)){h.oc=Q(i.data,0,c);e.n_=1;e.oa=1;e.od=h;E(e);}e=new O;Bm(e);E(e);}
let ANu=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.og.viewport(b,c,d,e);b=a.oY.getError();if(!b)return;f=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;Bm(f);E(f);}
let A3E=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();h=d===null?null:d.oR;d=a.qo;if(!c)d=!d.oM?null:d.oK;else{e=d.oI;b=Z(T(W(I(c),B(2135587861, 2654435769)),d.oO));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.oL;}}d=b<0?null:d.oJ.data[b];}i=d===null?null:d.oR;a.og.attachShader(h,i);b
=a.oY.getError();if(!b)return;d=new Bc;j=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(j===null)j=C(2);F(h,b,j);i=new P;e=h.ob;k=e.data;c=h.n$;S();f=k.length;if(c>=0&&c<=(f-0|0)){i.oc=Q(e.data,0,c);d.n_=1;d.oa=1;d.od=i;E(d);}d=new O;Bm(d);E(d);}
let AU_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.og;e=a.rk;if(!c)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(c),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.bindBuffer(b,e);b=a.oY.getError();if(!b)return;d=new Bc;i=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.ob;k=f.data;c=e.n$;S();g=k.length;if(c>=0&&c<=(g-0|0)){j.oc
=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=j;E(d);}d=new O;Bm(d);E(d);}
let AMK=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.og.blendFuncSeparate(b,c,d,e);b=a.oY.getError();if(!b)return;f=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;Bm(f);E(f);}
let AQz=(a,b,c,d,e)=>{let f,g,h,i,j;Pf(a,b,c,d,e);b=a.oY.getError();if(!b)return;d=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();e=j.length;if(c>=0&&c<=(e-0|0)){h.oc=Q(i.data,0,c);d.n_=1;d.oa=1;d.od=h;E(d);}d=new O;Bm(d);E(d);}
let AU8=(a,b,c,d,e)=>{let f,g,h,i,j;SU(a,b,c,d,e);b=a.oY.getError();if(!b)return;e=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();d=j.length;if(c>=0&&c<=(d-0|0)){h.oc=Q(i.data,0,c);e.n_=1;e.oa=1;e.od=h;E(e);}e=new O;Bm(e);E(e);}
let ARn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.qo;if(!b)c=!c.oM?null:c.oK;else{d=c.oI;e=Z(T(W(I(b),B(2135587861, 2654435769)),c.oO));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.oL;}}c=e<0?null:c.oJ.data[e];}BR();g=c===null?null:c.oR;a.og.compileShader(g);b=a.oY.getError();if(!b)return;c=new Bc;h=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(h===null)h=C(2);F(g,b,h);i=new P;d=g.ob;j=d.data;e=g.n$;S();f=j.length;if(e>=0&&e<=(f-0|0)){i.oc=Q(d.data,
0,e);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let A$g=a=>{let b,c,d,e,f,g,h,i,j;b=a.og.createProgram();c=a.vu;a.vu=c+1|0;C6(a.pN,c,C_(b));d=a.oY.getError();if(!d)return c;b=new Bc;e=BA(d,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,d,10);F(f,f.n$,C(59));d=f.n$;if(e===null)e=C(2);F(f,d,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);b.n_=1;b.oa=1;b.od=g;E(b);}b=new O;Bm(b);E(b);}
let A6H=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og.createShader(b);d=a.uj;a.uj=d+1|0;C6(a.qo,d,C_(c));b=a.oY.getError();if(!b)return d;c=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;d=f.n$;S();j=i.length;if(d>=0&&d<=(j-0|0)){g.oc=Q(h.data,0,d);c.n_=1;c.oa=1;c.od=g;E(c);}c=new O;Bm(c);E(c);}
let AVZ=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.disableVertexAttribArray(b);b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let AYE=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.og.drawElements(b,c,d,e);b=a.oY.getError();if(!b)return;f=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;Bm(f);E(f);}
let A6K=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.enableVertexAttribArray(b);b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let A8B=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.generateMipmap(b);b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let AOr=(a,b,c,d,e)=>{let f,g,h,i,j;f=RX(a,b,c,d,e);b=a.oY.getError();if(!b)return f;d=new Bc;g=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.ob;i=h.data;c=e.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){f.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=f;E(d);}d=new O;Bm(d);E(d);}
let AUc=(a,b,c,d,e)=>{let f,g,h,i,j;f=Tm(a,b,c,d,e);b=a.oY.getError();if(!b)return f;d=new Bc;g=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.ob;i=h.data;c=e.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){f.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=f;E(d);}d=new O;Bm(d);E(d);}
let A4Y=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();h=d===null?null:d.oR;b=a.og.getAttribLocation(h,Cr(c));f=a.oY.getError();if(!f)return b;c=new Bc;i=BA(f,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,f,10);F(d,d.n$,C(59));b=d.n$;if(i===null)i=C(2);F(d,b,i);h=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=(g
-0|0)){h.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=h;E(c);}c=new O;Bm(c);E(c);}
let AMT=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)LM(a,b,c);else{NT(c,0,a.oY.getParameter(b));c.of=0;c.oe=c.oy;c.or=(-1);}b=a.oY.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let ALl=(a,b,c,d)=>{let e,f,g,h,i,j;TM(a,b,c,d);b=a.oY.getError();if(!b)return;d=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=g;E(d);}d=new O;Bm(d);E(d);}
let AI_=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c=Bv(c.getProgramInfoLog(d));b=a.oY.getError();if(!b)return c;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let A$f=(a,b,c,d)=>{let e,f,g,h,i,j;OX(a,b,c,d);b=a.oY.getError();if(!b)return;d=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=g;E(d);}d=new O;Bm(d);E(d);}
let AX9=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og;d=a.qo;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c=Bv(c.getShaderInfoLog(d));b=a.oY.getError();if(!b)return c;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let AJa=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.og;e=a.pN;if(!b)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;c=d.getUniformLocation(e,Cr(c));if(c===null)g=(-1);else{d=a.q2;if(!b)d=!d.oM?null:d.oK;else{f=d.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));w:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break w;}if(h==b)break;g=(g+1|0)&d.oL;}}d=g<0?
null:d.oJ.data[g];}d=d;if(d===null){d=Ei(51,0.800000011920929);C6(a.q2,b,d);}g=a.vK;a.vK=g+1|0;C6(d,g,C_(c));}b=a.oY.getError();if(!b)return g;c=new Bc;i=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.ob;j=f.data;g=d.n$;S();h=j.length;if(g>=0&&g<=(h-0|0)){e.oc=Q(f.data,0,g);c.n_=1;c.oa=1;c.od=e;E(c);}c=new O;Bm(c);E(c);}
let A9B=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.linkProgram(d);b=a.oY.getError();if(!b)return;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=(g-0|0)){i.oc
=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let AXE=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.og;e=a.qo;if(!b)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.shaderSource(e,Cr(c));b=a.oY.getError();if(!b)return;c=new Bc;i=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.ob;j=f.data;g=d.n$;S();h=j.length;if(g>=0&&g<=(h-0|0))
{e.oc=Q(f.data,0,g);c.n_=1;c.oa=1;c.od=e;E(c);}c=new O;Bm(c);E(c);}
let AJ1=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.og;f=d;e.texParameterf(b,c,f);b=a.oY.getError();if(!b)return;e=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);e.n_=1;e.oa=1;e.od=i;E(e);}e=new O;Bm(e);E(e);}
let AKF=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.q2;e=a.sc;if(!e)d=!d.oM?null:d.oK;else{f=d.oI;g=Z(T(W(I(e),B(2135587861, 2654435769)),d.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.oL;}}d=g<0?null:d.oJ.data[g];}d=d;if(!b)d=!d.oM?null:d.oK;else{f=d.oI;e=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.oL;}}d=e<0?null:d.oJ.data[e];}BR();i=d===null?null:d.oR;a.og.uniform1i(i,c);b=a.oY.getError();if
(!b)return;d=new Bc;i=BA(b,4);j=new L;j.ob=H(16);F(j,j.n$,C(154));N(j,j.n$,b,10);F(j,j.n$,C(59));b=j.n$;if(i===null)i=C(2);F(j,b,i);k=new P;f=j.ob;l=f.data;c=j.n$;S();e=l.length;if(c>=0&&c<=(e-0|0)){k.oc=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=k;E(d);}d=new O;Bm(d);E(d);}
let A$N=(a,b)=>{let c,d,e,f,g,h,i,j;a.sc=b;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.useProgram(d);b=a.oY.getError();if(!b)return;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=(g-0|0))
{i.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let A7e=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.og.vertexAttribPointer(b,c,d,!!e,f,g);b=a.oY.getError();if(!b)return;h=new Bc;i=BA(b,4);j=new L;j.ob=H(16);F(j,j.n$,C(154));N(j,j.n$,b,10);F(j,j.n$,C(59));b=j.n$;if(i===null)i=C(2);F(j,b,i);k=new P;l=j.ob;m=l.data;c=j.n$;S();d=m.length;if(c>=0&&c<=(d-0|0)){k.oc=Q(l.data,0,c);h.n_=1;h.oa=1;h.od=k;E(h);}h=new O;Bm(h);E(h);}
function Pc(){let a=this;D.call(a);a.EX=0;a.Dk=0;a.Ds=0;a.IT=null;a.Jf=null;a.u_=null;a.HU=C(155);}
let BiF=(a,b,c,d)=>{let e=new Pc();Yq(e,a,b,c,d);return e;}
let Yq=(a,b,c,d,e)=>{a.HU=C(155);RI();if(b===AA1){He();a.u_=Uk;}else if(b===AGu){He();a.u_=Uk;}else if(b===A7J){He();a.u_=U4;}else if(b===A6r){He();a.u_=U4;}else if(b!==PA){He();a.u_=A4d;}else{He();a.u_=AD4;}b=a.u_;He();if(b===Uk)M2(a,C(156),c);else if(b===AD4)M2(a,C(157),c);else if(b===U4)M2(a,C(158),c);else{a.EX=(-1);a.Dk=(-1);a.Ds=(-1);d=C(43);e=C(43);}a.IT=d;a.Jf=e;}
let M2=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=Pg(Hz(b,0),c);if(H8(d)){b=d.qT;e=b.qY;if(!e){b=new Cb;b.n_=1;b.oa=1;Bu(b);E(b);}f=B9(1,b.r5);if(f>=0){b=new O;S();c=new L;Dn(c);c.ob=H(16);N(c,c.n$,1,10);c=Bi(c);b.n_=1;b.oa=1;b.od=c;E(b);}g=b.pF.data;if(g[2]<0)h=null;else{b=b.sy;if(!e){b=new Cb;b.n_=1;b.oa=1;Bu(b);E(b);}if(f>=0){b=new O;S();c=new L;Dn(c);c.ob=H(16);N(c,c.n$,1,10);c=Bi(c);b.n_=1;b.oa=1;b.od=c;E(b);}i=g[2];if(!e)E(Bfi());if(f>=0)E(BfM(AFL(1)));h=Pe(b,i,g[3]);}g=(AE2(h,C(159))).data;a.EX=MX(a,g[0],2);j=g.length;a.Dk
=j<2?0:MX(a,g[1],0);a.Ds=j<3?0:MX(a,g[2],0);}else{h=Ef;b=new L;b.ob=H(16);F(b,b.n$,C(160));F(b,b.n$,c);k=Bi(b);if(h.xl>=2){if(BX===null){c=new Dp;c.p5=DY;b=new L;b.ob=H(16);c.o6=b;c.p2=H(32);c.p_=0;Do();c.p7=Du;BX=c;}h=BX;b=new L;b.ob=H(16);F(b,b.n$,C(155));F(b,b.n$,C(72));j=b.n$;if(k===null)k=C(2);F(b,j,k);c=Bi(b);b=h.o6;F(b,b.n$,c);i=b.n$;Bp(b,i,i+1|0);b.ob.data[i]=10;Dy(h);}a.EX=2;a.Dk=0;a.Ds=0;}}
let MX=(a,b,c)=>{let d,e,f,g,h,$$je;b:{try{d=Dd(b);}catch($$e){$$je=BG($$e);if($$je instanceof CU){break b;}else{throw $$e;}}return d;}e=Ef;f=new L;f.ob=H(16);F(f,f.n$,C(161));F(f,f.n$,b);F(f,f.n$,C(162));N(f,f.n$,c,10);b=Bi(f);if(e.xl>=1){if(Fb===null){e=new Dp;e.p5=Kk;f=new L;f.ob=H(16);e.o6=f;e.p2=H(32);e.p_=0;Do();e.p7=Du;Fb=e;}e=Fb;f=new L;f.ob=H(16);F(f,f.n$,C(163));F(f,f.n$,C(72));d=f.n$;if(b===null)b=C(2);F(f,d,b);g=Bi(f);b=e.o6;F(b,b.n$,g);h=b.n$;Bp(b,h,h+1|0);b.ob.data[h]=10;Dy(e);}return c;}
let D5=G(BV);
let AA1=null;let A7J=null;let Bdy=null;let A6r=null;let PA=null;let AGu=null;let Bas=null;let RI=()=>{RI=Bj(D5);AZT();}
let AZT=()=>{let b,c,d,e,f,g;b=new D5;RI();b.ol=C(4);b.oi=0;AA1=b;c=new D5;c.ol=C(164);c.oi=1;A7J=c;d=new D5;d.ol=C(165);d.oi=2;Bdy=d;e=new D5;e.ol=C(166);e.oi=3;A6r=e;f=new D5;f.ol=C(167);f.oi=4;PA=f;g=new D5;g.ol=C(168);g.oi=5;AGu=g;Bas=R(D5,[b,c,d,e,f,g]);}
let Um=G(0);
function Ub(){D.call(this);this.H4=null;}
let A0u=a=>{return;}
let U7=G(Jj);
let A9Z=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.og;e=a.wg;if(!c)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(c),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.bindTexture(b,e);b=a.og.getError();if(!b)return;d=new Bc;i=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.ob;k=f.data;c=e.n$;S();g=k.length;if(c>=0&&c<=(g-0|0)){j.oc
=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=j;E(d);}d=new O;Bm(d);E(d);}
let AZJ=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.clear(b);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let AL3=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.og.clearColor(b,c,d,e);f=a.og.getError();if(!f)return;g=new Bc;h=BA(f,4);i=new L;i.ob=H(16);F(i,i.n$,C(154));N(i,i.n$,f,10);F(i,i.n$,C(59));f=i.n$;if(h===null)h=C(2);F(i,f,h);j=new P;k=i.ob;l=k.data;m=i.n$;S();n=l.length;if(m>=0&&m<=(n-0|0)){j.oc=Q(k.data,0,m);g.n_=1;g.oa=1;g.od=j;E(g);}g=new O;Bm(g);E(g);}
let AQy=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.depthMask(!!b);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let A$r=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.disable(b);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let AOy=(a,b,c,d)=>{let e,f,g,h,i,j;a.og.drawArrays(b,c,d);b=a.og.getError();if(!b)return;e=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();d=j.length;if(c>=0&&c<=(d-0|0)){h.oc=Q(i.data,0,c);e.n_=1;e.oa=1;e.od=h;E(e);}e=new O;Bm(e);E(e);}
let AVR=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.og;g=e.of;f.drawElements(b,c,d,g);b=a.og.getError();if(!b)return;e=new Bc;h=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(h===null)h=C(2);F(f,b,h);i=new P;j=f.ob;k=j.data;c=f.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);e.n_=1;e.oa=1;e.od=i;E(e);}e=new O;Bm(e);E(e);}
let AKb=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.enable(b);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let APq=(a,b)=>{return Bv(a.og.getParameter(b));}
let ARs=(a,b,c)=>{let d,e,f,g,h,i,j;a.og.pixelStorei(b,c);b=a.og.getError();if(!b)return;d=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=g;E(d);}d=new O;Bm(d);E(d);}
let AMV=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;T0(a,b,c,d,e,f,g,h,i,j);b=a.og.getError();if(!b)return;j=new Bc;k=BA(b,4);l=new L;l.ob=H(16);F(l,l.n$,C(154));N(l,l.n$,b,10);F(l,l.n$,C(59));b=l.n$;if(k===null)k=C(2);F(l,b,k);m=new P;n=l.ob;o=n.data;c=l.n$;S();d=o.length;if(c>=0&&c<=(d-0|0)){m.oc=Q(n.data,0,c);j.n_=1;j.oa=1;j.od=m;E(j);}j=new O;Bm(j);E(j);}
let A0H=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.og.texParameterf(b,c,d);b=a.og.getError();if(!b)return;e=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();k=j.length;if(c>=0&&c<=(k-0|0)){h.oc=Q(i.data,0,c);e.n_=1;e.oa=1;e.od=h;E(e);}e=new O;Bm(e);E(e);}
let A$b=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.og.viewport(b,c,d,e);b=a.og.getError();if(!b)return;f=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;Bm(f);E(f);}
let AI7=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();h=d===null?null:d.oR;d=a.qo;if(!c)d=!d.oM?null:d.oK;else{e=d.oI;b=Z(T(W(I(c),B(2135587861, 2654435769)),d.oO));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.oL;}}d=b<0?null:d.oJ.data[b];}i=d===null?null:d.oR;a.og.attachShader(h,i);b
=a.og.getError();if(!b)return;d=new Bc;j=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(j===null)j=C(2);F(h,b,j);i=new P;e=h.ob;k=e.data;c=h.n$;S();f=k.length;if(c>=0&&c<=(f-0|0)){i.oc=Q(e.data,0,c);d.n_=1;d.oa=1;d.od=i;E(d);}d=new O;Bm(d);E(d);}
let AIt=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.og;e=a.rk;if(!c)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(c),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.bindBuffer(b,e);b=a.og.getError();if(!b)return;d=new Bc;i=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(i===null)i=C(2);F(e,b,i);j=new P;f=e.ob;k=f.data;c=e.n$;S();g=k.length;if(c>=0&&c<=(g-0|0)){j.oc
=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=j;E(d);}d=new O;Bm(d);E(d);}
let AIq=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.og.blendFuncSeparate(b,c,d,e);b=a.og.getError();if(!b)return;f=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;Bm(f);E(f);}
let AO5=(a,b,c,d,e)=>{let f,g,h,i,j;Pf(a,b,c,d,e);b=a.og.getError();if(!b)return;d=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();e=j.length;if(c>=0&&c<=(e-0|0)){h.oc=Q(i.data,0,c);d.n_=1;d.oa=1;d.od=h;E(d);}d=new O;Bm(d);E(d);}
let A1J=(a,b,c,d,e)=>{let f,g,h,i,j;SU(a,b,c,d,e);b=a.og.getError();if(!b)return;e=new Bc;f=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(f===null)f=C(2);F(g,b,f);h=new P;i=g.ob;j=i.data;c=g.n$;S();d=j.length;if(c>=0&&c<=(d-0|0)){h.oc=Q(i.data,0,c);e.n_=1;e.oa=1;e.od=h;E(e);}e=new O;Bm(e);E(e);}
let AWl=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.qo;if(!b)c=!c.oM?null:c.oK;else{d=c.oI;e=Z(T(W(I(b),B(2135587861, 2654435769)),c.oO));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.oL;}}c=e<0?null:c.oJ.data[e];}BR();g=c===null?null:c.oR;a.og.compileShader(g);b=a.og.getError();if(!b)return;c=new Bc;h=BA(b,4);g=new L;g.ob=H(16);F(g,g.n$,C(154));N(g,g.n$,b,10);F(g,g.n$,C(59));b=g.n$;if(h===null)h=C(2);F(g,b,h);i=new P;d=g.ob;j=d.data;e=g.n$;S();f=j.length;if(e>=0&&e<=(f-0|0)){i.oc=Q(d.data,
0,e);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let ARI=a=>{let b,c,d,e,f,g,h,i,j;b=a.og.createProgram();c=a.vu;a.vu=c+1|0;C6(a.pN,c,C_(b));d=a.og.getError();if(!d)return c;b=new Bc;e=BA(d,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,d,10);F(f,f.n$,C(59));d=f.n$;if(e===null)e=C(2);F(f,d,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);b.n_=1;b.oa=1;b.od=g;E(b);}b=new O;Bm(b);E(b);}
let AWa=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og.createShader(b);d=a.uj;a.uj=d+1|0;C6(a.qo,d,C_(c));b=a.og.getError();if(!b)return d;c=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;d=f.n$;S();j=i.length;if(d>=0&&d<=(j-0|0)){g.oc=Q(h.data,0,d);c.n_=1;c.oa=1;c.od=g;E(c);}c=new O;Bm(c);E(c);}
let ARG=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.disableVertexAttribArray(b);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let A1T=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.og.drawElements(b,c,d,e);b=a.og.getError();if(!b)return;f=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;Bm(f);E(f);}
let AWe=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.enableVertexAttribArray(b);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let A46=(a,b)=>{let c,d,e,f,g,h,i,j;a.og.generateMipmap(b);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let A3c=(a,b,c,d,e)=>{let f,g,h,i,j;f=RX(a,b,c,d,e);b=a.og.getError();if(!b)return f;d=new Bc;g=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.ob;i=h.data;c=e.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){f.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=f;E(d);}d=new O;Bm(d);E(d);}
let AKt=(a,b,c,d,e)=>{let f,g,h,i,j;f=Tm(a,b,c,d,e);b=a.og.getError();if(!b)return f;d=new Bc;g=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(g===null)g=C(2);F(e,b,g);f=new P;h=e.ob;i=h.data;c=e.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){f.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=f;E(d);}d=new O;Bm(d);E(d);}
let A1V=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();h=d===null?null:d.oR;b=a.og.getAttribLocation(h,Cr(c));f=a.og.getError();if(!f)return b;c=new Bc;i=BA(f,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,f,10);F(d,d.n$,C(59));b=d.n$;if(i===null)i=C(2);F(d,b,i);h=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=(g
-0|0)){h.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=h;E(c);}c=new O;Bm(c);E(c);}
let AXn=(a,b,c)=>{let d,e,f,g,h,i,j;LM(a,b,c);b=a.og.getError();if(!b)return;c=new Bc;d=BA(b,4);e=new L;e.ob=H(16);F(e,e.n$,C(154));N(e,e.n$,b,10);F(e,e.n$,C(59));b=e.n$;if(d===null)d=C(2);F(e,b,d);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
let AMZ=(a,b,c,d)=>{let e,f,g,h,i,j;TM(a,b,c,d);b=a.og.getError();if(!b)return;d=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=g;E(d);}d=new O;Bm(d);E(d);}
let A0_=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c=Bv(c.getProgramInfoLog(d));b=a.og.getError();if(!b)return c;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let AJg=(a,b,c,d)=>{let e,f,g,h,i,j;OX(a,b,c,d);b=a.og.getError();if(!b)return;d=new Bc;e=BA(b,4);f=new L;f.ob=H(16);F(f,f.n$,C(154));N(f,f.n$,b,10);F(f,f.n$,C(59));b=f.n$;if(e===null)e=C(2);F(f,b,e);g=new P;h=f.ob;i=h.data;c=f.n$;S();j=i.length;if(c>=0&&c<=(j-0|0)){g.oc=Q(h.data,0,c);d.n_=1;d.oa=1;d.od=g;E(d);}d=new O;Bm(d);E(d);}
let A7i=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og;d=a.qo;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c=Bv(c.getShaderInfoLog(d));b=a.og.getError();if(!b)return c;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=
(g-0|0)){i.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let A8H=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.og;e=a.pN;if(!b)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;c=d.getUniformLocation(e,Cr(c));if(c===null)g=(-1);else{d=a.q2;if(!b)d=!d.oM?null:d.oK;else{f=d.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));w:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break w;}if(h==b)break;g=(g+1|0)&d.oL;}}d=g<0?
null:d.oJ.data[g];}d=d;if(d===null){d=Ei(51,0.800000011920929);C6(a.q2,b,d);}g=a.vK;a.vK=g+1|0;C6(d,g,C_(c));}b=a.og.getError();if(!b)return g;c=new Bc;i=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.ob;j=f.data;g=d.n$;S();h=j.length;if(g>=0&&g<=(h-0|0)){e.oc=Q(f.data,0,g);c.n_=1;c.oa=1;c.od=e;E(c);}c=new O;Bm(c);E(c);}
let APV=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.linkProgram(d);b=a.og.getError();if(!b)return;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=(g-0|0)){i.oc
=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let AVN=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.og;e=a.qo;if(!b)e=!e.oM?null:e.oK;else{f=e.oI;g=Z(T(W(I(b),B(2135587861, 2654435769)),e.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.oL;}}e=g<0?null:e.oJ.data[g];}BR();e=e===null?null:e.oR;d.shaderSource(e,Cr(c));b=a.og.getError();if(!b)return;c=new Bc;i=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(i===null)i=C(2);F(d,b,i);e=new P;f=d.ob;j=f.data;g=d.n$;S();h=j.length;if(g>=0&&g<=(h-0|0))
{e.oc=Q(f.data,0,g);c.n_=1;c.oa=1;c.od=e;E(c);}c=new O;Bm(c);E(c);}
let A8D=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.og;f=d;e.texParameterf(b,c,f);b=a.og.getError();if(!b)return;e=new Bc;g=BA(b,4);h=new L;h.ob=H(16);F(h,h.n$,C(154));N(h,h.n$,b,10);F(h,h.n$,C(59));b=h.n$;if(g===null)g=C(2);F(h,b,g);i=new P;j=h.ob;k=j.data;c=h.n$;S();d=k.length;if(c>=0&&c<=(d-0|0)){i.oc=Q(j.data,0,c);e.n_=1;e.oa=1;e.od=i;E(e);}e=new O;Bm(e);E(e);}
let AV5=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.q2;e=a.sc;if(!e)d=!d.oM?null:d.oK;else{f=d.oI;g=Z(T(W(I(e),B(2135587861, 2654435769)),d.oO));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.oL;}}d=g<0?null:d.oJ.data[g];}d=d;if(!b)d=!d.oM?null:d.oK;else{f=d.oI;e=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.oL;}}d=e<0?null:d.oJ.data[e];}BR();i=d===null?null:d.oR;a.og.uniform1i(i,c);b=a.og.getError();if
(!b)return;d=new Bc;i=BA(b,4);j=new L;j.ob=H(16);F(j,j.n$,C(154));N(j,j.n$,b,10);F(j,j.n$,C(59));b=j.n$;if(i===null)i=C(2);F(j,b,i);k=new P;f=j.ob;l=f.data;c=j.n$;S();e=l.length;if(c>=0&&c<=(e-0|0)){k.oc=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=k;E(d);}d=new O;Bm(d);E(d);}
let AXO=(a,b)=>{let c,d,e,f,g,h,i,j;a.sc=b;c=a.og;d=a.pN;if(!b)d=!d.oM?null:d.oK;else{e=d.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),d.oO));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.oL;}}d=f<0?null:d.oJ.data[f];}BR();d=d===null?null:d.oR;c.useProgram(d);b=a.og.getError();if(!b)return;c=new Bc;h=BA(b,4);d=new L;d.ob=H(16);F(d,d.n$,C(154));N(d,d.n$,b,10);F(d,d.n$,C(59));b=d.n$;if(h===null)h=C(2);F(d,b,h);i=new P;e=d.ob;j=e.data;f=d.n$;S();g=j.length;if(f>=0&&f<=(g-0|0))
{i.oc=Q(e.data,0,f);c.n_=1;c.oa=1;c.od=i;E(c);}c=new O;Bm(c);E(c);}
let AK$=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.og.vertexAttribPointer(b,c,d,!!e,f,g);b=a.og.getError();if(!b)return;h=new Bc;i=BA(b,4);j=new L;j.ob=H(16);F(j,j.n$,C(154));N(j,j.n$,b,10);F(j,j.n$,C(59));b=j.n$;if(i===null)i=C(2);F(j,b,i);k=new P;l=j.ob;m=l.data;c=j.n$;S();d=m.length;if(c>=0&&c<=(d-0|0)){k.oc=Q(l.data,0,c);h.n_=1;h.oa=1;h.od=k;E(h);}h=new O;Bm(h);E(h);}
function ZN(){let a=this;D.call(a);a.sA=0;a.oI=null;a.oJ=null;a.oK=null;a.oM=0;a.Fr=0.0;a.Ct=0;a.oO=0;a.oL=0;}
let Ei=(a,b)=>{let c=new ZN();ANC(c,a,b);return c;}
let ANC=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.Fr=c;d=NE(b,c);a.Ct=d*c|0;b=d-1|0;a.oL=b;a.oO=Ec(I(b));a.oI=X(d);a.oJ=Bt(D,d);return;}e=new V;f=new L;f.ob=H(16);F(f,f.n$,C(60));EQ(f,f.n$,c);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}
let C6=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.oK;a.oK=c;if(!a.oM){a.oM=1;a.sA=a.sA+1|0;}return d;}e=a.oI;f=Z(T(W(I(b),B(2135587861, 2654435769)),a.oO));d:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.oL;}}if(f>=0){e=a.oJ.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.oJ.data[f]=c;b=a.sA+1|0;a.sA=b;if(b>=a.Ct)AAd(a,g.length<<1);return null;}
let Mr=(a,b)=>{let c,d,e;if(!b)return !a.oM?null:a.oK;c=a.oI;d=Z(T(W(I(b),B(2135587861, 2654435769)),a.oO));k:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break k;}if(e==b)break;d=(d+1|0)&a.oL;}}return d<0?null:a.oJ.data[d];}
let Jc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.oM)return null;a.oM=0;c=a.oK;a.oK=null;a.sA=a.sA-1|0;return c;}d=a.oI;e=W(I(b),B(2135587861, 2654435769));f=a.oO;g=Z(T(e,f));d:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break d;}if(i==b)break;g=(g+1|0)&a.oL;}}if(g<0)return null;j=a.oJ.data;k=j[g];l=a.oL;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Z(T(W(I(n),B(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.sA=a.sA-1|0;return k;}
let AA6=(a,b,c)=>{let d,e,f,g;a:{d=a.oJ;if(b===null){if(a.oM&&a.oK===null)return 1;d=d.data;e=a.oI;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.oK)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.oM){g=a.oK;if(b===g?1:g instanceof FR&&g.rB==b.rB?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof FR&&g.rB==b.rB?1:0)return 1;f=f+(-1)|0;}}return 0;}
let AAd=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.oI.data.length;a.Ct=b*a.Fr|0;d=b-1|0;a.oL=d;d=Ec(I(d));a.oO=d;e=a.oI;f=a.oJ;g=X(b);a.oI=g;h=Bt(D,b);a.oJ=h;if(a.sA>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break b;k=e.data[j];if(k){l=f.data[j];b=Z(T(W(I(k),B(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.oL;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
function Yo(){let a=this;D.call(a);a.r4=0;a.tc=null;a.xg=0;a.HQ=0.0;a.CI=0;a.wo=0;a.tJ=0;}
let AJS=(a,b)=>{let c=new Yo();A0J(c,a,b);return c;}
let A0J=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.HQ=c;d=NE(b,c);a.CI=d*c|0;b=d-1|0;a.tJ=b;a.wo=Ec(I(b));a.tc=X(d);return;}e=new V;f=new L;f.ob=H(16);F(f,f.n$,C(60));EQ(f,f.n$,c);f=Bi(f);e.n_=1;e.oa=1;e.od=f;E(e);}
let ACW=(a,b)=>{let c,d,e,f;if(!b){if(a.xg)return 0;a.xg=1;a.r4=a.r4+1|0;return 1;}c=a.tc;d=Z(T(W(I(b),B(2135587861, 2654435769)),a.wo));d:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break d;}if(f==b)break;d=(d+1|0)&a.tJ;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.r4+1|0;a.r4=b;if(b>=a.CI)AC2(a,e.length<<1);return 1;}
let AAI=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.xg)return 0;a.xg=0;a.r4=a.r4-1|0;return 1;}c=a.tc;d=W(I(b),B(2135587861, 2654435769));e=a.wo;f=Z(T(d,e));d:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.tJ;}}if(f<0)return 0;h=a.tJ;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Z(T(W(I(b),B(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.r4=a.r4-1|0;return 1;}
let AC2=(a,b)=>{let c,d,e,f,g,h,i;b:{c=a.tc.data.length;a.CI=b*a.HQ|0;d=b-1|0;a.tJ=d;d=Ec(I(d));a.wo=d;e=a.tc;f=X(b);a.tc=f;if(a.r4>0){f=f.data;g=0;while(true){if(g>=c)break b;h=e.data[g];if(h){i=Z(T(W(I(h),B(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.tJ;}f[i]=h;}g=g+1|0;}}}}
let QO=G(0);
function TB(){D.call(this);this.Br=null;}
let AXz=a=>{let b;b=a.Br;b.BJ=1;AGM(Cr(b.De));}
let ALR=a=>{let b;b=a.Br;b.BJ=1;AGM(Cr(b.De));}
let AXi=a=>{a.Br.BJ=0;}
let Vd=G(0);
function Vf(){let a=this;D.call(a);a.wI=null;a.EM=null;a.JH=null;}
let TS=0;let Bgi=()=>{let a=new Vf();A84(a);return a;}
let A84=a=>{let b,c,d,e,f,$$je;b=AKX();a.wI=b;c=ARD(b);a.EM=c;b=new PW;d=a.wI;e=new CQ;e.pz=0;e.os=Bt(D,16);b.qx=e;b.sz=2147483647;b.Ic=d;b.Ii=c;a.JH=b;b=Ef.zH;Hq(b);b:{try{Dk(b,a);EU(b);break b;}catch($$e){$$je=BG($$e);d=$$je;}EU(b);E(d);}if(a.wI.state!=='running'?1:0){b=new RU;b.JF=a;AK8(a.wI,CK(b,"unlockFunction"));}else{if(!TS&&Ef.xl>=2){if(BX===null){e=new Dp;e.p5=DY;c=new L;Dn(c);c.ob=H(16);e.o6=c;e.p2=H(32);e.p_=0;Do();e.p7=Du;BX=e;}e=BX;c=new L;c.ob=H(16);DI(c,c.n$,DJ(C(169)));DI(c,c.n$,DJ(C(72)));DI(c,
c.n$,DJ(C(170)));d=Bi(c);b=e.o6;F(b,b.n$,d);f=b.n$;Bp(b,f,f+1|0);b.ob.data[f]=10;Dy(e);}TS=1;}}
let AAb=a=>{a.EM.disconnect(a.wI.destination);}
let Y5=a=>{a.EM.connect(a.wI.destination);}
let AK8=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});}
let AKX=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
let ARD=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function Oa(){Ew.call(this);this.H0=null;}
let QM=G(Da);
function HW(){D6.call(this);this.rd=null;}
let Tb=a=>{let b,c,d,e,f,$$je;b:{try{b=K2(a.rd,null);}catch($$e){$$je=BG($$e);if($$je instanceof Da){c=$$je;break b;}else{throw $$e;}}return b;}d=new Bc;b=new L;b.ob=H(16);F(b,b.n$,C(34));e=a.rd.rS.rq;if(e.oQ===null)e.oQ=Bv(e.oE.$meta.name);f=e.oQ;F(b,b.n$,f);b=Bi(b);d.n_=1;d.oa=1;d.od=b;d.p$=c;E(d);}
let O=G(B0);
let AJP=()=>{let a=new O();AK2(a);return a;}
let BfM=a=>{let b=new O();Kq(b,a);return b;}
let AK2=a=>{a.n_=1;a.oa=1;}
let Kq=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
let Gs=G(0);
let SF=G(0);
let PG=G(0);
let Ta=G(0);
let Qh=G(0);
let Va=G(0);
let Uo=G(0);
let OO=G(0);
let Lj=G(0);
let V8=G();
let ARW=(a,b)=>{b=a.bq(b);BR();return b===null?null:b instanceof HL()&&b instanceof Ev?b.oR:b;}
let A8i=(a,b,c)=>{a.f$(Bv(b),Em(c,"handleEvent"));}
let A7R=(a,b,c)=>{a.f_(Bv(b),Em(c,"handleEvent"));}
let ARP=(a,b,c,d)=>{a.ga(Bv(b),Em(c,"handleEvent"),d?1:0);}
let AVi=(a,b)=>{return !!a.gb(b);}
let ALb=a=>{return a.gc();}
let AIP=(a,b,c,d)=>{a.gd(Bv(b),Em(c,"handleEvent"),d?1:0);}
let M8=G();
function Iv(){let a=this;M8.call(a);a.DZ=0;a.ur=null;a.Hg=0.0;a.D5=0;a.yE=0;a.zg=0;a.HR=0;}
let AWy=null;let A1p=null;let BiG=a=>{let b=new Iv();MK(b,a);return b;}
let MK=(a,b)=>{let c,d,e;a.zg=(-1);if(b<0){c=new V;c.n_=1;c.oa=1;E(c);}a.DZ=0;if(!b)b=1;d=Bt(Kh,b);e=d.data;a.ur=d;b=e.length;a.yE=b;a.Hg=0.75;a.D5=b*0.75|0;}
let EF=(a,b,c)=>{let d,e,f,g,h,i,j;Hq(a);try{if(b!==null&&c!==null){d:{if(!b.pv){d=0;while(true){if(d>=b.oc.length)break d;b.pv=(31*b.pv|0)+b.oc.charCodeAt(d)|0;d=d+1|0;}}}e=b.pv&2147483647;f=a.ur.data;g=e%f.length|0;h=f[g];while(h!==null){c:{d=h.FV;if(!b.pv){i=0;while(true){if(i>=b.oc.length)break c;b.pv=(31*b.pv|0)+b.oc.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.pv&&h.qV.cG(b)?1:0)break;h=h.B3;}if(h!==null){j=h.rp;h.rp=c;return j;}a.HR=a.HR+1|0;d=a.DZ+1|0;a.DZ=d;if(d>a.D5){YH(a);g=e%a.ur.data.length|0;}if(g<a.yE)a.yE
=g;if(g>a.zg)a.zg=g;u:{j=new Kh;j.qV=b;j.rp=c;if(!b.pv){d=0;while(true){if(d>=b.oc.length)break u;b.pv=(31*b.pv|0)+b.oc.charCodeAt(d)|0;d=d+1|0;}}}j.FV=b.pv;f=a.ur.data;j.B3=f[g];f[g]=j;return null;}b=new Dv;b.n_=1;b.oa=1;E(b);}finally{EU(a);}}
let YH=a=>{let b,c,d,e,f,g,h,i,j;b=(a.ur.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Bt(Kh,b);e=d.data;f=a.zg+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.yE)break;h=a.ur.data[f];while(h!==null){i=(h.qV.cF()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.B3;h.B3=e[i];e[i]=h;h=j;}}a.yE=g;a.zg=c;a.ur=d;a.D5=e.length*a.Hg|0;}
let A$m=()=>{AWy=new K7;A1p=new K6;}
function L2(){Iv.call(this);this.Iw=null;}
let ADZ=G();
let E$=G(BV);
let U4=null;let Uk=null;let AD4=null;let A4d=null;let Bfs=null;let He=()=>{He=Bj(E$);AQC();}
let AQC=()=>{let b,c,d,e;b=new E$;He();b.ol=C(171);b.oi=0;U4=b;c=new E$;c.ol=C(172);c.oi=1;Uk=c;d=new E$;d.ol=C(167);d.oi=2;AD4=d;e=new E$;e.ol=C(173);e.oi=3;A4d=e;Bfs=R(E$,[b,c,d,e]);}
let En=G();
let ADa=G(En);
let ACV=G(En);
let AEO=G(En);
let AFC=G(En);
let XQ=G(En);
function Po(){D.call(this);this.Js=null;}
let A24=(a,b)=>{b.preventDefault();}
function Pp(){D.call(this);this.ID=null;}
let A97=(a,b)=>{b.preventDefault();}
function Pl(){let a=this;D.call(a);a.E_=null;a.GC=null;a.GP=null;}
let YW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new CQ;e.pz=1;e.os=Bt(D,16);f=0;while(true){if(f>=d)break b;g=c[f];h=Bv(g.name);i=GW(h,46,h.oc.length-1|0);b=i==(-1)?C(43):Cw(h,i+1|0,h.oc.length);j=b.oc.toLowerCase();if(j!==b.oc)b=Zs(j);if(AY5(b)){F9();j=I1;}else{if(b===C(174))k=1;else if(!(C(174) instanceof P))k=0;else{j=C(174);k=b.oc!==j.oc?0:1;}h:{if(!k){if(b===C(175))k=1;else if(!(C(175) instanceof P))k=0;else{j=C(175);k=b.oc!==j.oc?0:1;}if(!k){if(b
===C(176))k=1;else if(!(C(176) instanceof P))k=0;else{j=C(176);k=b.oc!==j.oc?0:1;}if(!k){k=0;break h;}}}k=1;}if(k){F9();j=Hv;}else if(!AOu(b)){F9();j=IL;}else{F9();j=Ih;}}l=new FileReader();b=new Qj;b.AF=a;b.Ee=j;b.DP=h;b.zT=e;b.E0=d;l.addEventListener("load",CK(b,"handleEvent"));F9();if(j!==IL&&j!==Hv){if(j===I1)l.readAsDataURL(g);else if(j===Ih)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}}
let ASs=(a,b)=>{YW(a,b);}
function PW(){let a=this;D6.call(a);a.Ic=null;a.Ii=null;}
let UF=G(0);
function RU(){D.call(this);this.JF=null;}
let A0N=a=>{let b,c,d,e,f,g,h,i;if(!TS&&Ef.xl>=2){if(BX===null){b=new Dp;c=DY;Dn(b);b.p5=c;c=new L;Jn(c,16);b.o6=c;b.p2=H(32);b.p_=0;Do();b.p7=Du;BX=b;}b=BX;c=new L;c.ob=H(16);Ez(c,c.n$,C(169));Ez(c,c.n$,C(72));Ez(c,c.n$,C(170));d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);i=b.o6;G2(i,i.n$,d);Il(i,i.n$,10);Dy(b);}else E(AJP());}TS=1;}
let WK=G(En);
function S9(){let a=this;D.call(a);a.oG=null;a.qs=0;a.CN=null;a.E8=0;a.xj=0;a.t0=0;a.pY=0;a.FF=null;}
let S0=(a,b)=>{return Pg(a,b);}
let J$=(a,b,c)=>{let d,e,f,g,h,i,j;d=new Kb;d.pQ=Bt(D,10);e=Pg(a,b);f=0;g=0;if(!b.oc.length){h=Bt(P,1);h.data[0]=C(43);return h;}a:{while(true){if(!H8(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.qT;if(!j.qY){b=new Cb;b.n_=1;b.oa=1;Bu(b);E(b);}if(0>=j.r5){b=new O;d=new L;Dn(d);d.ob=H(16);N(d,d.n$,0,10);d=Bi(d);b.n_=1;b.oa=1;b.od=d;E(b);}j=Cw(b,g,j.pF.data[0]);Ka(d,d.o$+1|0);h=d.pQ.data;g=d.o$;d.o$=g+1|0;h[g]=j;d.q7=d.q7+1|0;j=e.qT;if(!j.qY)break;if(0>=j.r5){b=new O;d=new L;Dn(d);d.ob=H(16);N(d,d.n$,0,10);d=Bi(d);b.n_
=1;b.oa=1;b.od=d;E(b);}g=j.pF.data[1];f=i;}b=new Cb;b.n_=1;b.oa=1;Bu(b);E(b);}r:{b=Cw(b,g,b.oc.length);Ka(d,d.o$+1|0);h=d.pQ.data;g=d.o$;d.o$=g+1|0;h[g]=b;d.q7=d.q7+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break r;if(f<0)break;if(f>=d.o$)break;if(d.pQ.data[f].oc.length)break r;QI(d,f);}b=new O;b.n_=1;b.oa=1;E(b);}}if(f<0)f=0;return ADj(d,Bt(P,f));}
let SI=a=>{return a.oG.qr;}
let Hz=(b,c)=>{let d;if(b===null){b=new Dv;b.n_=1;b.oa=1;b.od=C(177);E(b);}if(c&&(c|255)!=255){b=new V;b.n_=1;b.oa=1;b.od=C(43);E(b);}Y=1;d=new S9;d.CN=Bt(Eb,10);d.xj=(-1);d.t0=(-1);d.pY=(-1);return ADz(d,b,c);}
let ADz=(a,b,c)=>{let d,e,f;a.oG=BdZ(b,c);a.qs=c;b=Rw(a,(-1),c,null);a.FF=b;d=a.oG;if(!d.pO&&!d.oB&&d.oC==d.qQ&&!(d.pI===null?0:1)?1:0){if(a.E8)b.gn();return a;}b=new D9;e=d.qr;f=d.u$;b.n_=1;b.oa=1;b.px=(-1);b.qy=C(43);b.qp=e;b.px=f;E(b);}
let AHR=(a,b)=>{let c,d,e,f,g,h;c=new Df;d=a.qs;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;BO();g=new BF;g.oq=X(64);c.ov=g;g=new BF;g.oq=X(2);c.oz=g;c.BT=e;c.Cy=f;while(true){h=a.oG;d=h.pO;if(!d&&!h.oB&&h.oC==h.qQ&&!(h.pI===null?0:1)?1:0)break;f=!d&&!h.oB&&h.oC==h.qQ&&!(h.pI===null?0:1)?1:0;if(!(!f&&!(h.pI===null?0:1)&&(d<0?0:1)?1:0))break;f=h.oB;if(f&&f!=(-536870788)&&f!=(-536870871))break;Dc(h);DG(c,h.s6);g=a.oG;if(g.pO!=(-536870788))continue;Dc(g);}g=LF(a,c);g.gr(b);return g;}
let Rw=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new Kb;e.pQ=Bt(D,10);f=a.qs;g=0;if(c!=f)a.qs=c;a:{switch(b){case -1073741784:h=new PL;c=a.pY+1|0;a.pY=c;Gw();i=Y;Y=i+1|0;d=new Bx;d.ob=H(20);h.ow=(N(d,d.n$,i,10)).l();h.p8=c;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new O$;j=a.pY+1|0;a.pY=j;Gw();c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);h.ow=(N(d,d.n$,c,10)).l();h.p8=j;break a;case -33554392:h=new P8;k=a.pY+1|0;a.pY=k;Gw();c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);h.ow=(N(d,d.n$,c,10)).l();h.p8=k;break a;default:c
=a.xj+1|0;a.xj=c;if(d===null){h=Ben();g=1;}else{h=new Eb;Gw();KN(h);h.p8=c;}i=a.xj;if(i<=(-1))break a;if(i>=10)break a;a.CN.data[i]=h;break a;}h=new Vg;Gw();i=Y;Y=i+1|0;d=new Bx;d.ob=H(20);h.ow=(N(d,d.n$,i,10)).l();h.p8=(-1);}while(true){if(Rl(a.oG)&&Hw(a.oG)==(-536870788))l=AHR(a,h);else if(a.oG.pO==(-536870788)){l=KJ(h);Cm(a.oG);}else{l=Su(a,h);if(G4(a.oG)==(-536870788))Cm(a.oG);}if(l!==null)Iw(e,l);if(M7(a.oG))break;if(G4(a.oG)==(-536870871))break;}if(Xb(a.oG)==(-536870788))Iw(e,KJ(h));if(a.qs!=f&&!g){a.qs
=f;ACw(a.oG,f);}switch(b){case -1073741784:break;case -536870872:return BdM(e,h);case -268435416:return BcQ(e,h);case -134217688:return A_3(e,h);case -67108824:return Bd$(e,h);case -33554392:return Bdc(e,h);default:switch(AF5(e)){case 0:break;case 1:return Bfh(AGx(e,0),h);default:return BaZ(e,h);}return KJ(h);}return BcE(e,h);}
let AGF=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Lf;b.ob=H(16);while(true){c=a.oG;d=c.pO;if(!d&&!c.oB&&c.oC==c.qQ&&!(c.pI===null?0:1)?1:0)break;e=!d&&!c.oB&&c.oC==c.qQ&&!(c.pI===null?0:1)?1:0;if(!(!e&&!(c.pI===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.sw;e=f===null?0:1;if(!(!e&&!c.oB)){e=f===null?0:1;if(!(!e&&(c.oB<0?0:1))){g=c.oB;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Dc(c);d=c.s6;if(!(d>=65536&&d<=1114111
?1:0)){e=d&65535;d=b.n$;Bp(b,d,d+1|0);b.ob.data[d]=e;}else{h=(Go(d)).data;e=0;d=h.length;g=b.n$;Bp(b,g,g+d|0);i=d+e|0;while(e<i){j=b.ob.data;k=g+1|0;d=e+1|0;j[g]=h[e];g=k;e=d;}}}d=a.qs;if(!((d&2)!=2?0:1))return BaS(b);if(!((d&64)!=64?0:1))return BgT(b);c=new N4;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);c.ow=(N(f,f.n$,e,10)).l();c.o7=1;f=new L;f.ob=H(16);e=0;while(e<ADY(b)){d=VI(b,e);d=C1(Ol(),d)&65535;Tj(f,C1(Te(),d)&65535);e=e+1|0;}c.zh=Bi(f);c.o7=f.n$;return c;}
let AGI=a=>{let b,c,d,e,f,g,h,i,j;b=X(4);c=(-1);d=(-1);e=a.oG;f=e.pO;if(!(!f&&!e.oB&&e.oC==e.qQ&&!(e.pI===null?0:1)?1:0)){g=!f&&!e.oB&&e.oC==e.qQ&&!(e.pI===null?0:1)?1:0;if(!g&&!(e.pI===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Dc(e);c=e.s6;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=H(3);b=h.data;b[0]=c&65535;e=a.oG;i=e.pO;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Dc(e);e=a.oG;i=e.pO;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Dc(e);e=new Kd;c=Y;Y=c+1|0;j=new Bx;j.ob=H(20);e.ow=(N(j,j.n$,c,10)).l();e.tv=h;e.yj=3;return e;}j=new Kd;i
=Y;Y=i+1|0;e=new Bx;e.ob=H(20);j.ow=(N(e,e.n$,i,10)).l();j.tv=h;j.yj=2;return j;}c=a.qs;if(!((c&2)!=2?0:1)){e=new FG;i=b[0];c=Y;Y=c+1|0;e.ow=SD(c,10);e.o7=1;e.qH=i;return e;}if((c&64)!=64?0:1)return Bfw(b[0]);return Bdx(b[0]);}h=b.data;c=1;while(c<4&&!M7(a.oG)&&Rl(a.oG)){i=c+1|0;e=a.oG;Dc(e);h[c]=e.s6;c=i;}if(c==1&&!AP7(h[0]))return Rp(a,h[0]);if(!Fl(a,2))return BgP(b,c);if(Fl(a,64))return Bgm(b,c);return Ba1(b,c);}
let Su=(a,b)=>{let c,d,e,f,g,h;c=a.oG;d=c.pO;e=!d&&!c.oB&&c.oC==c.qQ&&!(c.pI===null?0:1)?1:0;e=!e&&!(c.pI===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.sw===null?0:1)&&(c.oB<0?0:1)){if(!((a.qs&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!AGz(c)?AGF(a):Ml(a,b,Vc(a,b));}else{f=AGI(a);g=a.oG;d=g.pO;if(!(!d&&!g.oB&&g.oC==g.qQ&&!(g.pI===null?0:1)?1:0)&&!(d==(-536870871)&&!(b instanceof Ij))&&d!=(-536870788)){e=!d&&!g.oB&&g.oC==g.qQ&&!(g.pI===null?0:1)?1:0;if(!(!e&&!(g.pI===null?0:1)&&(d<0?0:1)?1:0))f=Ml(a,b,f);}}}else if
(d!=(-536870871))f=Ml(a,b,Vc(a,b));else{if(b instanceof Ij)E(Fo(C(43),Fe(c),GB(a.oG)));f=new QT;AB4(f,b);f.o7=0;}c=a.oG;e=c.pO;h=!e&&!c.oB&&c.oC==c.qQ&&!(c.pI===null?0:1)?1:0;if(!h&&!(e==(-536870871)&&!(b instanceof Ij))&&e!=(-536870788)){g=Su(a,b);if(f instanceof EB&&!(f instanceof Hf)&&!(f instanceof EE)&&!(f instanceof Hc)){c=f;if(!g.gY(c.oV))f=A_V(c);}if((g.g0()&65535)!=43)f.gr(g);else f.gr(g.oV);}else{if(f===null)return null;f.gr(b);}if((f.g0()&65535)!=43)return f;return f.oV;}
let Ml=(a,b,c)=>{let d,e,f,g,h,i;d=a.oG;e=d.pO;if(c!==null&&!(c instanceof C9)){switch(e){case -2147483606:Dc(d);d=new RA;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);d.ow=(N(g,g.n$,f,10)).l();d.oh=b;d.oV=c;d.pJ=e;Gw();c.gr(NG);return d;case -2147483605:Dc(d);d=new SO;e=Y;Y=e+1|0;g=new Bx;g.ob=H(20);d.ow=(N(g,g.n$,e,10)).l();d.oh=b;d.oV=c;d.pJ=(-2147483606);Gw();c.gr(NG);return d;case -2147483585:Dc(d);d=new O1;e=Y;Y=e+1|0;g=new Bx;Dn(g);g.ob=H(20);d.ow=(N(g,g.n$,e,10)).l();d.oh=b;d.oV=c;d.pJ=(-536870849);Gw();c.gr(NG);return d;case -2147483525:g
=new Oj;h=d.pI;Dc(d);d=h;f=a.t0+1|0;a.t0=f;i=Y;Y=i+1|0;g.ow=SD(i,10);g.oh=b;g.oV=c;g.pJ=(-536870849);g.sr=d;g.rb=f;Gw();c.gr(NG);return g;case -1073741782:case -1073741781:Dc(d);d=new PJ;Wm(d,c,b,e);c.gr(d);return d;case -1073741761:Dc(d);d=Bad(c,b,(-536870849));c.gr(b);return d;case -1073741701:h=new QC;d=IN(d);e=a.t0+1|0;a.t0=e;Y9(h,d,c,b,(-536870849),e);c.gr(h);return h;case -536870870:case -536870869:Cm(d);d=c.g0()!=(-2147483602)?BdB(c,b,e):Fl(a,32)?Bar(c,b,e):A_C(c,b,e,SE(a.qs));c.gr(d);return d;case -536870849:Cm(d);d
=BgD(c,b,(-536870849));c.gr(b);return d;case -536870789:h=new Hy;d=IN(d);e=a.t0+1|0;a.t0=e;ABJ(h,d,c,b,(-536870849),e);c.gr(h);return h;default:}return c;}g=null;if(c!==null)g=c;switch(e){case -2147483606:case -2147483605:Cm(d);d=Bb5(g,b,e);Mh(g,d);return d;case -2147483585:Cm(d);return Bc4(g,b,(-2147483585));case -2147483525:return Bcp(IN(d),g,b,(-2147483525));case -1073741782:case -1073741781:Cm(d);d=Bf9(g,b,e);Mh(g,d);return d;case -1073741761:Cm(d);return BfP(g,b,(-1073741761));case -1073741701:return BaP(IN(d),
g,b,(-1073741701));case -536870870:case -536870869:Cm(d);d=BbL(g,b,e);Mh(g,d);return d;case -536870849:Cm(d);return Bbe(g,b,(-536870849));case -536870789:return BdV(IN(d),g,b,(-536870789));default:}return c;}
let Vc=(a,b)=>{let c,d,e,f,g,h,i,j;c=null;d=b instanceof Ij;while(true){o:{e=a.oG;f=e.pO;if((f&(-2147418113))==(-2147483608)){Dc(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.qs=g;else{if(f!=(-1073741784))g=a.qs;c=Rw(a,f,g,b);e=a.oG;if(e.pO!=(-536870871)){b=new D9;h=e.qr;i=e.u$;b.n_=1;b.oa=1;b.px=(-1);b.qy=C(43);b.qp=h;b.px=i;E(b);}Dc(e);}}else{g:{h:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break h;case -2147483583:Cm(e);c
=new PB;KN(c);break o;case -2147483582:Cm(e);c=A8N(0);break o;case -2147483577:break;case -2147483558:Cm(e);c=new Q7;j=a.pY+1|0;a.pY=j;AHa(c,j);break o;case -2147483550:Cm(e);c=A8N(1);break o;case -2147483526:Cm(e);c=Bce();break o;case -536870876:Cm(e);a.pY=a.pY+1|0;if(Fl(a,8)){if(Fl(a,1)){c=BaL(a.pY);break o;}c=A_l(a.pY);break o;}if(Fl(a,1)){c=Ba8(a.pY);break o;}c=Bb9(a.pY);break o;case -536870866:Cm(e);if(Fl(a,32)){c=BcB();break o;}c=BbU(SE(a.qs));break o;case -536870821:Cm(e);i=0;if(G4(a.oG)==(-536870818))
{i=1;Cm(a.oG);}c=Y_(a,i,b);if(G4(a.oG)!=(-536870819))E(Fo(C(43),Fe(a.oG),GB(a.oG)));So(a.oG,1);Cm(a.oG);break o;case -536870818:Cm(e);a.pY=a.pY+1|0;if(!Fl(a,8)){c=Bck();break o;}c=Bf7(SE(a.qs));break o;case 0:e=O4(e);if(e!==null)c=LF(a,e);else{if(M7(a.oG)){c=KJ(b);break o;}c=AMa(f&65535);}Cm(a.oG);break o;default:break g;}Cm(e);c=A__();break o;}j=(f&2147483647)-48|0;if(a.xj<j)E(Fo(C(43),Fe(e),GB(a.oG)));Cm(e);a.pY=a.pY+1|0;c=!Fl(a,2)?Bdb(j,a.pY):Fl(a,64)?BaM(j,a.pY):BgG(j,a.pY);a.CN.data[j].D6=1;a.E8=1;break o;}if
(f>=0&&!JL(e)){c=Rp(a,f);Cm(a.oG);}else if(f==(-536870788))c=KJ(b);else{if(f!=(-536870871))E(Fo(!JL(a.oG)?AAR(f&65535):(O4(a.oG)).l(),Fe(a.oG),GB(a.oG)));if(d)E(Fo(C(43),Fe(a.oG),GB(a.oG)));c=KJ(b);}}}if(f!=(-16777176))break;}return c;}
let Y_=(a,b,c)=>{let d;d=LF(a,IG(a,b));d.gr(c);return d;}
let IG=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new Df;d=a.qs;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;BO();f=new BF;f.oq=X(64);c.ov=f;f=new BF;f.oq=X(2);c.oz=f;c.BT=e;c.Cy=d;FM(c,b);g=(-1);h=0;i=0;j=1;n:{e:{r:while(true){f=a.oG;if(!f.pO&&!f.oB&&f.oC==f.qQ&&!JL(f)?1:0)break n;f=a.oG;b=f.pO;i=b==(-536870819)&&!j?0:1;if(!i)break n;i:{switch(b){case -536870874:if(g>=0)DG(c,g);g=Cm(a.oG);if(G4(a.oG)!=(-536870874)){g=38;break i;}if(Hw(a.oG)==(-536870821)){Cm(a.oG);h=1;g=(-1);break i;}Cm(a.oG);if(j){c=IG(a,0);break i;}if(G4(a.oG)
==(-536870819))break i;Q1(c,IG(a,0));break i;case -536870867:if(!j&&Hw(f)!=(-536870819)&&Hw(a.oG)!=(-536870821)&&g>=0){Cm(a.oG);d=G4(a.oG);if(JL(a.oG))break r;if(d<0&&Hw(a.oG)!=(-536870819)&&Hw(a.oG)!=(-536870821)&&g>=0)break r;z:{try{if(A1_(d))break z;d=d&65535;break z;}catch($$e){$$je=BG($$e);if($$je instanceof Da){break e;}else{throw $$e;}}}try{Ca(c,g,d);}catch($$e){$$je=BG($$e);if($$je instanceof Da){break e;}else{throw $$e;}}Cm(a.oG);g=(-1);break i;}if(g>=0)DG(c,g);g=45;Cm(a.oG);break i;case -536870821:if
(g>=0){DG(c,g);g=(-1);}Cm(a.oG);e=0;f=a.oG;if(f.pO==(-536870818)){Cm(f);e=1;}if(!h)ABC(c,IG(a,e));else Q1(c,IG(a,e));h=0;Cm(a.oG);break i;case -536870819:break;case -536870818:if(g>=0)DG(c,g);g=94;Cm(a.oG);break i;case 0:if(g>=0)DG(c,g);f=a.oG.pI;if(f===null)g=0;else{AIh(c,f);g=(-1);}Dc(a.oG);break i;default:if(g>=0)DG(c,g);f=a.oG;Dc(f);g=f.s6;break i;}if(g>=0)DG(c,g);g=93;Cm(a.oG);}j=0;}E(Fo(C(43),SI(a),GB(a.oG)));}E(Fo(C(43),SI(a),GB(a.oG)));}if(!i){if(g>=0)DG(c,g);return c;}c=new D9;k=a.oG;l=k.qr;b=k.u$-
1|0;c.n_=1;c.oa=1;c.px=(-1);c.qy=C(43);c.qp=l;c.px=b;E(c);}
let Rp=(a,b)=>{let c,d,e,f,g;c=b>=65536&&b<=1114111?1:0;d=a.qs;if((d&2)!=2?0:1){e:{if(!(b>=97&&b<=122)){if(b<65)break e;if(b>90)break e;}e=new N7;b=b&65535;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);e.ow=(N(g,g.n$,f,10)).l();e.o7=1;e.AV=b;e.D2=IM(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new RF;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);e.ow=(N(g,g.n$,f,10)).l();e.o7=1;e.o7=2;if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b);if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==
null?Bv(B1.value):null)));}e.C9=C1(CA,b);return e;}if(b<=57343&&b>=56320?1:0){e=new KE;b=b&65535;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);e.ow=(N(g,g.n$,f,10)).l();e.te=b;return e;}if(b<=56319&&b>=55296?1:0)return A2U(b&65535);e=new Q_;b=b&65535;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);e.ow=(N(g,g.n$,f,10)).l();e.o7=1;b=C1(Ol(),b)&65535;e.A4=C1(Te(),b)&65535;return e;}}if(c)return A_v(b);if(ALm(b))return Bbu(b&65535);if(!AQe(b))return AMa(b&65535);return A2U(b&65535);}
let LF=(a,b)=>{let c,d,e,f,g,h;if(!AFe(b)){if(!b.pq){if(b.hq())return BaJ(b);return Bcg(b);}if(b.hq())return Be$(b);return Bew(b);}c=Wb(b);d=new N9;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);d.ow=(N(f,f.n$,e,10)).l();d.z_=c;d.DW=c.oS;if(!b.pq){if(!b.hq()){c=new H7;f=new Fz;b=Kc(b);KN(f);f.o7=1;f.rH=b;f.Dj=b.oS;ACF(c);c.uZ=f;c.vS=d;return c;}c=new H7;f=new ON;b=Kc(b);e=Y;Y=e+1|0;g=new Bx;g.ob=H(20);f.ow=(N(g,g.n$,e,10)).l();f.o7=1;f.BD=b;f.C3=b.oS;e=Y;Y=e+1|0;b=new Bx;b.ob=H(20);c.ow=(N(b,b.n$,e,10)).l();c.uZ=f;c.vS=d;return c;}if
(!b.hq()){c=new H7;f=new E5;b=Kc(b);e=Y;Y=e+1|0;g=new Bx;g.ob=H(20);f.ow=(N(g,g.n$,e,10)).l();f.qI=b;f.wy=b.oS;e=Y;Y=e+1|0;b=new Bx;b.ob=H(20);c.ow=(N(b,b.n$,e,10)).l();c.uZ=f;c.vS=d;return c;}c=new H7;f=new RN;g=Kc(b);h=Y;Y=h+1|0;b=new Bx;b.ob=H(20);f.ow=(N(b,b.n$,h,10)).l();f.qI=g;f.wy=g.oS;e=Y;Y=e+1|0;b=new Bx;b.ob=H(20);c.ow=(N(b,b.n$,e,10)).l();c.uZ=f;c.vS=d;return c;}
let AC3=b=>{return Hz(b,0);}
let IM=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
let Fl=(a,b)=>{return (a.qs&b)!=b?0:1;}
let ACr=G();
let LP=(b,c)=>{let d,e,f,g,$$je;if(c!==null&&c.data.length){n:{c:{try{d=AKD(AGT(b,c));}catch($$e){$$je=BG($$e);if($$je instanceof Ld){d=$$je;break n;}else if($$je instanceof IW){d=$$je;break c;}else{throw $$e;}}return d;}e=new Eo;if(b.oQ===null)b.oQ=Bv(b.oE.$meta.name);f=b.oQ;b=new L;b.ob=H(16);F(b,b.n$,C(178));g=b.n$;if(f===null)f=C(2);F(b,g,f);b=Bi(b);e.n_=1;e.oa=1;e.od=b;e.p$=d;E(e);}e=new Eo;if(b.oQ===null)b.oQ=Bv(b.oE.$meta.name);f=b.oQ;b=new L;b.ob=H(16);F(b,b.n$,C(179));g=b.n$;if(f===null)f=C(2);F(b,
g,f);F(b,b.n$,C(180));b=Bi(b);e.n_=1;e.oa=1;e.od=b;e.p$=d;E(e);}c=(AAX(b)).data;if(c.length<=0)b=null;else{b=new OP;b.rS=c[0];}return b;}
let MS=(b,c)=>{let d,e,f,g,h,$$je;a:{try{d=AKD(AGW(b,c));}catch($$e){$$je=BG($$e);if($$je instanceof Ld){d=$$je;break a;}else if($$je instanceof IW){d=$$je;e=new Eo;if(b.oQ===null)b.oQ=Bv(b.oE.$meta.name);b=b.oQ;f=new L;f.ob=H(16);F(f,f.n$,C(178));g=f.n$;if(b===null)b=C(2);F(f,g,b);b=Bi(f);e.n_=1;e.oa=1;e.od=b;e.p$=d;E(e);}else{throw $$e;}}return d;}e=new Eo;if(b.oQ===null)b.oQ=Bv(b.oE.$meta.name);h=b.oQ;b=new L;b.ob=H(16);F(b,b.n$,C(181));g=b.n$;if(h===null)h=C(2);F(b,g,h);b=Bi(b);e.n_=1;e.oa=1;e.od=b;e.p$
=d;E(e);}
let Eo=G(Da);
function Ev(){D.call(this);this.oR=null;}
let BbH=null;let Up=null;let Lm=null;let NY=null;let A9A=null;let AZp=null;let BR=()=>{BR=Bj(Ev);AZD();}
let C_=b=>{let c,d,e,f,g,h,i;BR();if(b===null)return null;d:{c=b;if(Up!==null){d=Bv(typeof c);if(d===C(182))e=1;else if(!(C(182) instanceof P))e=0;else{b=C(182);e=d.oc!==b.oc?0:1;}if(!e){if(d===C(183))e=1;else if(!(C(183) instanceof P))e=0;else{b=C(183);e=d.oc!==b.oc?0:1;}if(!e){if(d===C(184))e=1;else if(!(C(184) instanceof P))e=0;else{b=C(184);e=d.oc!==b.oc?0:1;}if(e){f=Lm.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ev;h.oR=c;i=h;Lm.set(c,new WeakRef(i));Ou(A9A,
i,c);return h;}if(d===C(185))e=1;else if(!(C(185) instanceof P))e=0;else{b=C(185);e=d.oc!==b.oc?0:1;}if(!e)break d;else{f=NY.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ev;h.oR=c;i=h;NY.set(c,new WeakRef(i));Ou(AZp,i,c);return h;}}}f=Up.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new Ev;h.oR=c;Up.set(c,new WeakRef(h));return h;}}b=new Ev;b.oR=c;return b;}
let AZD=()=>{BbH=new WeakMap();Up=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Lm=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();NY=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();A9A=Lm===null?null:new FinalizationRegistry(CK(new OU,"accept"));AZp=NY===null?null:new FinalizationRegistry(CK(new OV,"accept"));}
let Ou=(b,c,d)=>{return b.register(c,d);}
let M4=G(0);
let K7=G();
let JP=G(0);
let K6=G();
let Mg=G(0);
function AE$(){let a=this;D.call(a);a.Ie=null;a.HG=null;a.tS=null;a.qT=null;a.wq=0;a.Bv=0;a.BA=0;a.CJ=null;a.CU=null;a.t1=null;}
let Pg=(a,b)=>{let c=new AE$();AIv(c,a,b);return c;}
let AF_=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=a.CJ;if(c!==null){if(c===b)d=1;else if(!(b instanceof P))d=0;else{e=b;d=c.oc!==e.oc?0:1;}if(d){if(a.t1===null)return a.CU;f=new L;f.ob=H(16);g=0;e:{while(true){b=a.t1;d=B9(g,b.o$);if(d>=0)break;if(g<0)break e;if(d>=0)break e;b=b.pQ.data[g];F(f,f.n$,b===null?C(2):b.l());g=g+1|0;}return Bi(f);}b=new O;b.n_=1;b.oa=1;E(b);}}a.CJ=b;h=H(b.oc.length);i=h.data;j=0;k=i.length;while(true){if(j>=k){c=new L;c.ob=H(16);a.t1=null;j=0;l=0;m=0;u:{i:while(true){if(j>=k){ba:
{e=a.t1;if(e!==null){j=c.n$;d=B9(l,j);if(d){if(d<=0&&l>=0&&j<=j){b=new P;n=c.ob;h=n.data;d=j-l|0;j=h.length;if(l>=0&&d>=0&&d<=(j-l|0)){b.oc=Q(n.data,l,d);Iw(e,b);break ba;}b=new O;BY(b);E(b);}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}}}return Bi(c);}if(i[j]==92&&!m){m=1;j=j+1|0;}bb:{if(m){if(j>=k)break i;d=i[j];g=c.n$;Bp(c,g,g+1|0);c.ob.data[g]=d;m=0;}else if(i[j]!=36){o=i[j];d=c.n$;Bp(c,d,d+1|0);c.ob.data[d]=o;}else{if(a.t1===null){b=new Kb;b.pQ=Bt(D,10);a.t1=b;}bc:{try{b=new P;j=j+1|0;Vn(b,h,j,1);d=Dd(b);if(l==Dr(c))break bc;Iw(a.t1,
AGw(c,l,Dr(c)));l=Dr(c);break bc;}catch($$e){$$je=BG($$e);if($$je instanceof Da){break u;}else{throw $$e;}}}try{Iw(a.t1,Ba9(a,d));e=LN(a,d);l=l+FT(e)|0;B4(c,e);break bb;}catch($$e){$$je=BG($$e);if($$je instanceof Da){break u;}else{throw $$e;}}}}j=j+1|0;}b=new O;b.n_=1;b.oa=1;E(b);}b=new V;b.n_=1;b.oa=1;b.od=C(43);E(b);}if(j<0)break;if(j>=b.oc.length)break;i[j]=b.oc.charCodeAt(j);j=j+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}
let LN=(a,b)=>{let c,d,e,f,g,h,i;c=a.qT;d=c.qY;if(!d){c=new Cb;c.n_=1;c.oa=1;E(c);}if(b>=0){e=B9(b,c.r5);if(e<0){k:{f=c.pF.data;g=b*2|0;if(f[g]<0)c=null;else{c=c.sy;if(!d){c=new Cb;c.n_=1;c.oa=1;E(c);}if(b>=0&&e<0){h=f[g];if(!d){c=new Cb;c.n_=1;c.oa=1;E(c);}if(b<0)break k;if(e>=0)break k;c=Cw(c,h,f[g+1|0]);}else{c=new O;S();i=new L;i.ob=H(16);N(i,i.n$,b,10);i=Bi(i);c.n_=1;c.oa=1;c.od=i;E(c);}}return c;}c=new O;S();i=new L;i.ob=H(16);N(i,i.n$,b,10);i=Bi(i);c.n_=1;c.oa=1;c.od=i;E(c);}}c=new O;S();i=new L;i.ob
=H(16);N(i,i.n$,b,10);i=Bi(i);c.n_=1;c.oa=1;c.od=i;E(c);}
let N6=(a,b)=>{let c,d,e,f,g,h,i;c=a.tS.oc.length;if(b>=0&&b<=c){d=a.qT;d.qY=0;d.xs=2;e=d.pF.data;f=0;g=e.length;if(f>g){d=new V;Bm(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.ps.data;f=0;g=e.length;if(f>g){d=new V;Bm(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.sa=d.qD;d.xs=1;d.sa=b;c=d.wL;if(c<0)c=b;d.wL=c;b=a.HG.hB(b,a.tS,d);if(b==(-1))a.qT.qJ=1;if(b>=0){d=a.qT;b=d.qY;if(b){e=d.pF.data;if(e[0]==(-1)){f=d.sa;e[0]=f;e[1]=f;}if(!b){d=new Cb;d.n_=1;d.oa=1;Bu(d);E(d);}if(0<d.r5){d.wL=e[1];return 1;}d=new O;i
=new L;Dn(i);i.ob=H(16);N(i,i.n$,0,10);i=Bi(i);d.n_=1;d.oa=1;d.od=i;E(d);}}a.qT.sa=(-1);return 0;}d=new O;i=new L;i.ob=H(16);N(i,i.n$,b,10);i=Bi(i);d.n_=1;d.oa=1;d.od=i;E(d);}
let H8=a=>{let b,c,d,e,f,g,h,i,j;b=a.tS.oc.length;c=a.qT;if(!c.At)b=a.Bv;if(c.sa>=0&&c.xs==1){d=c.qY;if(!d){c=new Cb;c.n_=1;c.oa=1;E(c);}e=B9(0,c.r5);if(e>=0){c=new O;f=new L;f.ob=H(16);N(f,f.n$,0,10);f=Bi(f);c.n_=1;c.oa=1;c.od=f;E(c);}g=c.pF.data;h=g[1];c.sa=h;if(!d){c=new Cb;c.n_=1;c.oa=1;E(c);}if(e>=0){c=new O;f=new L;f.ob=H(16);N(f,f.n$,0,10);f=Bi(f);c.n_=1;c.oa=1;c.od=f;E(c);}i=g[1];if(!d){c=new Cb;c.n_=1;c.oa=1;E(c);}if(e>=0){c=new O;f=new L;f.ob=H(16);N(f,f.n$,0,10);f=Bi(f);c.n_=1;c.oa=1;c.od=f;E(c);}if
(i==g[0])c.sa=h+1|0;j=c.sa;return j<=b&&N6(a,j)?1:0;}return N6(a,a.wq);}
let AIv=(a,b,c)=>{let d,e;a.wq=(-1);a.Bv=(-1);a.Ie=b;a.HG=b.FF;a.tS=c;a.wq=0;d=c.oc.length;a.Bv=d;e=Bci(c,a.wq,d,b.xj,b.t0+1|0,b.pY+1|0);a.qT=e;e.vJ=1;}
let CU=G(V);
let Vk=()=>{let a=new CU();AYg(a);return a;}
let BiH=a=>{let b=new CU();LE(b,a);return b;}
let AYg=a=>{a.n_=1;a.oa=1;}
let LE=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
function OP(){D.call(this);this.rS=null;}
let AKD=a=>{let b=new OP();AU4(b,a);return b;}
let AU4=(a,b)=>{a.rS=b;}
let JN=(a,b)=>{return;}
let K2=(a,b)=>{let c,d,e,f,g,$$je;if(b===null)b=Bt(D,0);d:{k:{c:{try{c=AGY(a.rS,b);}catch($$e){$$je=BG($$e);if($$je instanceof V){c=$$je;break c;}else if($$je instanceof LS){c=$$je;break d;}else if($$je instanceof Mt){c=$$je;break k;}else if($$je instanceof RW){c=$$je;d=new Eo;e=a.rS.rq;if(e.oQ===null)e.oQ=Bv(e.oE.$meta.name);e=e.oQ;f=new L;f.ob=H(16);F(f,f.n$,C(186));g=f.n$;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.n_=1;d.oa=1;d.od=f;d.p$=c;E(d);}else{throw $$e;}}return c;}d=new Eo;e=a.rS.rq;if(e.oQ===null)e.oQ
=Bv(e.oE.$meta.name);e=e.oQ;f=new L;f.ob=H(16);F(f,f.n$,C(187));g=f.n$;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.n_=1;d.oa=1;d.od=f;d.p$=c;E(d);}d=new Eo;e=a.rS.rq;if(e.oQ===null)e.oQ=Bv(e.oE.$meta.name);e=e.oQ;f=new L;f.ob=H(16);F(f,f.n$,C(188));g=f.n$;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.n_=1;d.oa=1;d.od=f;d.p$=c;E(d);}d=new Eo;e=a.rS.rq;if(e.oQ===null)e.oQ=Bv(e.oE.$meta.name);e=e.oQ;f=new L;f.ob=H(16);F(f,f.n$,C(188));g=f.n$;if(e===null)e=C(2);F(f,g,e);f=Bi(f);d.n_=1;d.oa=1;d.od=f;d.p$=c;E(d);}
let Ld=G(B0);
let FW=G(Da);
let IW=G(FW);
let Dv=G(B0);
function CL(){let a=this;D.call(a);a.oh=null;a.qC=0;a.ow=null;a.pJ=0;}
let Y=0;let KN=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.ob=H(20);a.ow=(N(c,c.n$,b,10)).l();}
let AL7=(a,b,c,d)=>{let e;e=d.oX;while(true){if(b>e)return (-1);if(a.hE(b,c,d)>=0)break;b=b+1|0;}return b;}
let ANL=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.hE(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
let AZV=(a,b)=>{a.pJ=b;}
let AZd=a=>{return a.pJ;}
let AQ3=a=>{let b,c,d,e,f,g,h,i;b=a.ow;c=a.eh();d=new L;d.ob=H(16);e=d.n$;Bp(d,e,e+1|0);d.ob.data[e]=60;f=d.n$;if(b===null)b=C(2);F(d,f,b);e=d.n$;Bp(d,e,e+1|0);d.ob.data[e]=58;f=d.n$;if(c===null)c=C(2);F(d,f,c);e=d.n$;Bp(d,e,e+1|0);g=d.ob;h=g.data;h[e]=62;b=new P;e=d.n$;S();i=h.length;if(e>=0&&e<=(i-0|0)){b.oc=Q(g.data,0,e);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let ATc=a=>{let b,c,d,e,f,g,h,i;b=a.ow;c=a.eh();d=new L;d.ob=H(16);e=d.n$;Bp(d,e,e+1|0);d.ob.data[e]=60;f=d.n$;if(b===null)b=C(2);F(d,f,b);e=d.n$;Bp(d,e,e+1|0);d.ob.data[e]=58;f=d.n$;if(c===null)c=C(2);F(d,f,c);e=d.n$;Bp(d,e,e+1|0);g=d.ob;h=g.data;h[e]=62;b=new P;e=d.n$;S();i=h.length;if(e>=0&&e<=(i-0|0)){b.oc=Q(g.data,0,e);return b;}b=new O;Bm(b);E(b);}
let ATO=a=>{return a.oh;}
let Mh=(a,b)=>{a.oh=b;}
let A83=(a,b)=>{return 1;}
let A91=a=>{return null;}
let K5=a=>{let b;a.qC=1;b=a.oh;if(b!==null){if(!b.qC){b=b.hF();if(b!==null){a.oh.qC=1;a.oh=b;}a.oh.gn();}else if(b instanceof I2&&b.qA.D6)a.oh=b.oh;}}
let AWg=()=>{Y=1;}
let AAY=G();
let Xl=G();
let ABm=G();
let MM=G(0);
let OU=G();
let AK7=(a,b)=>{let c;BR();b=b===null?null:b instanceof HL()?b:C_(b);c=Lm;b=b===null?null:b.oR;c.delete(b);}
let AD2=G();
let OV=G();
let AXl=(a,b)=>{let c;BR();b=b===null?null:b instanceof HL()?b:C_(b);c=NY;b=b===null?null:b.oR;c.delete(b);}
let RC=G(0);
function Ic(){let a=this;D.call(a);a.qV=null;a.rp=null;}
function Kh(){let a=this;Ic.call(a);a.B3=null;a.FV=0;}
function Eb(){let a=this;CL.call(a);a.D6=0;a.p8=0;}
let NG=null;let Gw=()=>{Gw=Bj(Eb);A01();}
let AJ0=(a,b,c,d)=>{let e,f,g;e=a.p8;f=d.pF.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.oh.hE(b,c,d);if(g<0){b=a.p8;d.pF.data[(b*2|0)+1|0]=e;}return g;}
let A4F=a=>{return a.p8;}
let AOc=a=>{return C(189);}
let AKr=(a,b)=>{return 0;}
let A01=()=>{let b,c,d;b=new R_;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);b.ow=(N(d,d.n$,c,10)).l();NG=b;}
function JF(){let a=this;D.call(a);a.pH=null;a.p9=0;a.tb=0;a.Gc=0;a.s6=0;a.pO=0;a.oB=0;a.qQ=0;a.pI=null;a.sw=null;a.oC=0;a.pZ=0;a.u$=0;a.y6=0;a.qr=null;}
let A02=null;let Bdn=null;let BfH=0;let BdZ=(a,b)=>{let c=new JF();A86(c,a,b);return c;}
let A86=(a,b,c)=>{let d,e,f,g,h,i,j;a.tb=1;a.qr=b;if((c&16)>0){d=new L;d.ob=H(16);F(d,d.n$,C(190));e=0;while(true){f=MR(b,C(191),e);if(f<0)break;g=f+2|0;h=Cw(b,e,g);F(d,d.n$,h);F(d,d.n$,C(192));e=g;}b=Cw(b,e,b.oc.length);F(d,d.n$,b);F(d,d.n$,C(191));b=Bi(d);}a.pH=H(b.oc.length+2|0);i=H(b.oc.length);j=i.data;f=0;g=j.length;while(true){if(f>=g){CX(i,0,a.pH,0,b.oc.length);i=a.pH.data;g=i.length;i[g-1|0]=0;i[g-2|0]=0;a.qQ=g;a.p9=c;Dc(a);Dc(a);return;}if(f<0)break;if(f>=b.oc.length)break;j[f]=b.oc.charCodeAt(f);f
=f+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}
let G4=a=>{return a.pO;}
let So=(a,b)=>{if(b>0&&b<3)a.tb=b;if(b==1){a.oB=a.pO;a.sw=a.pI;a.oC=a.y6;a.y6=a.u$;Dc(a);}}
let ACw=(a,b)=>{let c;a.p9=b;a.oB=a.pO;a.sw=a.pI;c=a.u$;a.oC=c+1|0;a.y6=c;Dc(a);}
let O4=a=>{return a.pI;}
let JL=a=>{return a.pI===null?0:1;}
let Cm=a=>{Dc(a);return a.s6;}
let IN=a=>{let b;b=a.pI;Dc(a);return b;}
let Hw=a=>{return a.oB;}
let Xb=a=>{return a.s6;}
let Dc=a=>{let b,c,d,e,f,g,h,$$je;a.s6=a.pO;a.pO=a.oB;a.pI=a.sw;a.u$=a.y6;a.y6=a.oC;while(true){b=0;c=a.oC>=a.pH.data.length?0:L$(a);a.oB=c;a.sw=null;if(a.tb==4){if(c!=92)return;c=a.oC;d=a.pH.data;c=c>=d.length?0:d[E0(a)];a.oB=c;switch(c){case 69:break;default:a.oB=92;a.oC=a.pZ;return;}a.tb=a.Gc;a.oB=a.oC>(a.pH.data.length-2|0)?0:L$(a);}u:{c=a.oB;if(c!=92){e=a.tb;if(e==1)switch(c){case 36:a.oB=(-536870876);break u;case 40:if(a.pH.data[a.oC]!=63){a.oB=(-2147483608);break u;}E0(a);c=a.pH.data[a.oC];e=0;while(true)
{bd:{if(e){e=0;switch(c){case 33:break;case 61:a.oB=(-134217688);E0(a);break bd;default:E(Fo(C(43),Fe(a),a.oC));}a.oB=(-67108824);E0(a);}else{switch(c){case 33:break;case 60:E0(a);c=a.pH.data[a.oC];e=1;break bd;case 61:a.oB=(-536870872);E0(a);break bd;case 62:a.oB=(-33554392);E0(a);break bd;default:f=AH$(a);a.oB=f;if(f<256){a.p9=f;f=f<<16;a.oB=f;a.oB=(-1073741784)|f;break bd;}f=f&255;a.oB=f;a.p9=f;f=f<<16;a.oB=f;a.oB=(-16777176)|f;break bd;}a.oB=(-268435416);E0(a);}}if(!e)break;}break u;case 41:a.oB=(-536870871);break u;case 42:case 43:case 63:e
=a.oC;d=a.pH.data;switch(e>=d.length?42:d[e]){case 43:a.oB=c|(-2147483648);E0(a);break u;case 63:a.oB=c|(-1073741824);E0(a);break u;default:}a.oB=c|(-536870912);break u;case 46:a.oB=(-536870866);break u;case 91:a.oB=(-536870821);So(a,2);break u;case 93:if(e!=2)break u;a.oB=(-536870819);break u;case 94:a.oB=(-536870818);break u;case 123:a.sw=AAL(a,c);break u;case 124:a.oB=(-536870788);break u;default:}else if(e==2)switch(c){case 38:a.oB=(-536870874);break u;case 45:a.oB=(-536870867);break u;case 91:a.oB=(-536870821);break u;case 93:a.oB
=(-536870819);break u;case 94:a.oB=(-536870818);break u;default:}}else{c=a.oC>=(a.pH.data.length-2|0)?(-1):L$(a);be:{a.oB=c;switch(c){case -1:E(Fo(C(43),Fe(a),a.oC));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.oB
=Zi(a);break u;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.tb!=1)break u;a.oB=(-2147483648)|c;break u;case 65:a.oB=(-2147483583);break u;case 66:a.oB=(-2147483582);break u;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:E(Fo(C(43),Fe(a),a.oC));case 68:case 83:case 87:case 100:case 115:case 119:a.sw=PU(OR(a.pH,
a.pZ,1),0);a.oB=0;break u;case 71:a.oB=(-2147483577);break u;case 80:case 112:break be;case 81:a.Gc=a.tb;a.tb=4;b=1;break u;case 90:a.oB=(-2147483558);break u;case 97:a.oB=7;break u;case 98:a.oB=(-2147483550);break u;case 99:c=a.oC;d=a.pH.data;if(c>=(d.length-2|0))E(Fo(C(43),Fe(a),a.oC));a.oB=d[E0(a)]&31;break u;case 101:a.oB=27;break u;case 102:a.oB=12;break u;case 110:a.oB=10;break u;case 114:a.oB=13;break u;case 116:a.oB=9;break u;case 117:a.oB=SP(a,4);break u;case 120:a.oB=SP(a,2);break u;case 122:a.oB=
(-2147483526);break u;default:}break u;}g=AFx(a);h=0;if(a.oB==80)h=1;try{a.sw=PU(g,h);}catch($$e){$$je=BG($$e);if($$je instanceof Mx){E(Fo(C(43),Fe(a),a.oC));}else{throw $$e;}}a.oB=0;}}if(b)continue;else break;}}
let AFx=a=>{let b,c,d,e,f,g,h,i;b=new L;b.ob=H(10);c=a.oC;d=a.pH;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new P;a.pZ=c;if(a.p9&4)D3(a);else a.oC=c+1|0;g=a.pZ;S();if(g>=0&&1<=(f-g|0)){b.oc=Q(d.data,g,1);h=new L;h.ob=H(16);F(h,h.n$,C(193));F(h,h.n$,b);return Bi(h);}b=new O;b.n_=1;b.oa=1;E(b);}a.pZ=c;if(a.p9&4)D3(a);else a.oC=c+1|0;c=0;r:{while(true){f=a.oC;d=a.pH.data;if(f>=(d.length-2|0))break;a.pZ=f;if(a.p9&4)D3(a);else a.oC=f+1|0;c=d[a.pZ];if(c==125)break r;f=b.n$;Bp(b,f,f+1|0);b.ob.data[f]=c;}}if
(c!=125){b=new D9;i=a.qr;f=a.oC;b.n_=1;b.oa=1;b.px=(-1);b.qy=C(43);b.qp=i;b.px=f;E(b);}}if(!b.n$){b=new D9;i=a.qr;c=a.oC;b.n_=1;b.oa=1;b.px=(-1);b.qy=C(43);b.qp=i;b.px=c;E(b);}h=Bi(b);if(h.oc.length==1){b=new L;b.ob=H(16);F(b,b.n$,C(193));F(b,b.n$,h);return Bi(b);}u:{i:{if(h.oc.length>3){if(h===C(193)?1:KK(h,C(193),0))break i;if(h===C(194)?1:KK(h,C(194),0))break i;}break u;}h=Cw(h,2,h.oc.length);}return h;}
let AAL=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new L;c.ob=H(4);d=(-1);e=2147483647;b:{while(true){f=a.oC;g=a.pH.data;if(f>=g.length)break b;a.pZ=f;if(a.p9&4)D3(a);else a.oC=f+1|0;b=g[a.pZ];if(b==125)break b;if(b==44&&d<0)try{d=Lc(Cy(c),10);AAS(c,0,Dr(c));continue;}catch($$e){$$je=BG($$e);if($$je instanceof CU){break;}else{throw $$e;}}h=b&65535;f=c.n$;Bp(c,f,f+1|0);c.ob.data[f]=h;}c=new D9;i=a.qr;b=a.oC;c.n_=1;c.oa=1;c.px=(-1);c.qy=C(43);c.qp=i;c.px=b;E(c);}if(b!=125){c=new D9;i=a.qr;b=a.oC;c.n_=1;c.oa=1;c.px=(-1);c.qy
=C(43);c.qp=i;c.px=b;E(c);}if(c.n$>0)h:{try{e=Lc(Cy(c),10);if(d>=0)break h;d=e;break h;}catch($$e){$$je=BG($$e);if($$je instanceof CU){}else{throw $$e;}}c=new D9;i=a.qr;b=a.oC;c.n_=1;c.oa=1;c.px=(-1);c.qy=C(43);c.qp=i;c.px=b;E(c);}else if(d<0){c=new D9;i=a.qr;b=a.oC;c.n_=1;c.oa=1;c.px=(-1);c.qy=C(43);c.qp=i;c.px=b;E(c);}if((d|e|(e-d|0))<0){c=new D9;i=a.qr;b=a.oC;c.n_=1;c.oa=1;c.px=(-1);c.qy=C(43);c.qp=i;c.px=b;E(c);}f=a.oC;g=a.pH.data;h=f>=g.length?42:g[f];m:{switch(h){case 43:a.oB=(-2147483525);a.pZ=f;if(a.p9
&4)D3(a);else a.oC=f+1|0;break m;case 63:a.oB=(-1073741701);a.pZ=f;if(a.p9&4)D3(a);else a.oC=f+1|0;break m;default:}a.oB=(-536870789);}c=new RQ;c.tT=d;c.tR=e;return c;}
let Fe=a=>{return a.qr;}
let M7=a=>{return !a.pO&&!a.oB&&a.oC==a.qQ&&!(a.pI===null?0:1)?1:0;}
let A1_=b=>{return b<0?0:1;}
let Rl=a=>{let b,c;b=a.pO;c=!b&&!a.oB&&a.oC==a.qQ&&!(a.pI===null?0:1)?1:0;return !c&&!(a.pI===null?0:1)&&(b<0?0:1)?1:0;}
let AGz=a=>{let b;b=a.pO;return b<=57343&&b>=56320?1:0;}
let AQe=b=>{return b<=56319&&b>=55296?1:0;}
let ALm=b=>{return b<=57343&&b>=56320?1:0;}
let SP=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new L;c.ob=H(b);d=a.pH.data.length-2|0;e=0;while(true){f=B9(e,b);if(f>=0)break;g=a.oC;if(g>=d)break;h=a.pH;a.pZ=g;if(a.p9&4)D3(a);else a.oC=g+1|0;g=h.data[a.pZ];i=c.n$;Bp(c,i,i+1|0);c.ob.data[i]=g;e=e+1|0;}if(!f)n:{try{b=Lc(Cy(c),16);}catch($$e){$$je=BG($$e);if($$je instanceof CU){break n;}else{throw $$e;}}return b;}c=new D9;j=a.qr;b=a.oC;c.n_=1;c.oa=1;c.px=(-1);c.qy=C(43);c.qp=j;c.px=b;E(c);}
let Zi=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.pH.data;e=d.length-2|0;f=Ke(d[a.oC]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.oC;a.pZ=g;if(a.p9&4)D3(a);else a.oC=g+1|0;e:{while(true){if(c>=b)break e;h=a.oC;if(h>=e)break e;i=Ke(a.pH.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.oC;a.pZ=g;if(a.p9&4)D3(a);else a.oC=g+1|0;c=c+1|0;}}return f;}j=new D9;k=a.qr;b=a.oC;j.n_=1;j.oa=1;j.px=(-1);j.qy=C(43);j.qp=k;j.px=b;E(j);}
let AH$=a=>{let b,c,d,e,f,g,h;b=1;c=a.p9;k:while(true){d=a.oC;e=a.pH.data;if(d>=e.length){f=new D9;g=a.qr;f.n_=1;f.oa=1;f.px=(-1);f.qy=C(43);f.qp=g;f.px=d;E(f);}c:{f:{switch(e[d]){case 41:a.pZ=d;if(a.p9&4)D3(a);else a.oC=d+1|0;return c|256;case 45:if(!b){h=new D9;g=a.qr;h.n_=1;h.oa=1;h.px=(-1);h.qy=C(43);h.qp=g;h.px=d;E(h);}b=0;break c;case 58:break k;case 100:break f;case 105:c=b?c|2:(c^2)&c;break c;case 109:c=b?c|8:(c^8)&c;break c;case 115:c=b?c|32:(c^32)&c;break c;case 117:c=b?c|64:(c^64)&c;break c;case 120:c
=b?c|4:(c^4)&c;break c;default:}break c;}c=b?c|1:(c^1)&c;}a.pZ=d;if(a.p9&4)D3(a);else a.oC=d+1|0;}a.pZ=d;if(a.p9&4)D3(a);else a.oC=d+1|0;return c;}
let E0=a=>{let b;b=a.oC;a.pZ=b;if(a.p9&4)D3(a);else a.oC=b+1|0;return a.pZ;}
let D3=a=>{let b,c,d,e;b=a.pH.data.length-2|0;a.oC=a.oC+1|0;b:while(true){c=a.oC;if(c<b){d:{c=a.pH.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break d;default:c:{switch(Dt(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break d;}c=1;}if(c){a.oC=a.oC+1|0;continue;}}c=a.oC;if(c>=b)break;d=a.pH.data;if(d[c]!=35)break;a.oC=c+1|0;while(true){e=a.oC;if(e>=b)continue b;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue b;a.oC
=e+1|0;}}return c;}
let AL4=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?E2([d,e]):E2([d,e,4519+f|0]);}return null;}
let AP7=b=>{return Bdn.bi(b)==BfH?0:1;}
let A6j=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
let L$=a=>{let b,c,d,e,f;b=a.pH;c=a.oC;a.pZ=c;if(a.p9&4)D3(a);else a.oC=c+1|0;b=b.data;d=a.pZ;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.pH.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.oC;a.pZ=d;if(a.p9&4)D3(a);else a.oC=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;}
let GB=a=>{return a.u$;}
function D9(){let a=this;V.call(a);a.qy=null;a.qp=null;a.px=0;}
let Fo=(a,b,c)=>{let d=new D9();AX1(d,a,b,c);return d;}
let AX1=(a,b,c,d)=>{a.n_=1;a.oa=1;a.px=(-1);a.qy=b;a.qp=c;a.px=d;}
let A9V=a=>{let b,c,d,e,f,g,h,i,j,k;b=C(43);c=a.px;if(c>=1){d=H(c);e=d.data;c=0;f=e.length;if(c>f){b=new V;b.n_=1;b.oa=1;E(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new P;S();b.oc=Q(d.data,0,f);}n:{h=a.qy;i=a.qp;if(i!==null&&i.oc.length){j=a.px;i=a.qp;k=new L;k.ob=H(16);N(k,k.n$,j,10);F(k,k.n$,C(59));j=k.n$;if(i===null)i=C(2);F(k,j,i);F(k,k.n$,C(59));F(k,k.n$,b);b=new P;d=k.ob;e=d.data;c=k.n$;f=e.length;if(c>=0&&c<=(f-0|0)){b.oc=Q(d.data,0,c);break n;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}b=C(43);}i=new L;i.ob=H(16);j
=i.n$;if(h===null)h=C(2);F(i,j,h);F(i,i.n$,b);b=new P;d=i.ob;e=d.data;c=i.n$;S();f=e.length;if(c>=0&&c<=(f-0|0)){b.oc=Q(d.data,0,c);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let MH=G(0);
let Nk=G();
let ADj=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.o$;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new CN;b.oE=f;c=b;f.classObject=c;}}b=EP(b);if(b===null){b=new Dv;b.n_=1;b.oa=1;E(b);}if(b===BH(CO)){b=new V;b.n_=1;b.oa=1;E(b);}if(d<0){b=new D$;b.n_=1;b.oa=1;E(b);}b=EN(b.oE,d);}e=0;g=0;h=a.q7;i=a.o$;d=B9(h,h);f:{while(true){j=B9(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new NN;b.n_=1;b.oa=1;E(b);}k=g+1|0;if(g<0)break f;if(j>=0)break f;b.data[e]
=a.pQ.data[g];e=h;g=k;}return b;}b=new O;b.n_=1;b.oa=1;E(b);}
let Tn=G(0);
let RO=G(0);
function IH(){Nk.call(this);this.q7=0;}
let LV=G(0);
function Kb(){let a=this;IH.call(a);a.pQ=null;a.o$=0;}
let Ka=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.pQ;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CN;i.oE=h;j=i;h.classObject=j;}}h=EP(i);if(h===null){i=new Dv;i.n_=1;i.oa=1;E(i);}if(h===BH(CO)){i=new V;i.n_=1;i.oa=1;E(i);}if(f<0){i=new D$;i.n_=1;i.oa=1;E(i);}j=EN(h.oE,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.pQ=j;}}
let AGx=(a,b)=>{let c;if(b>=0&&b<a.o$)return a.pQ.data[b];c=new O;c.n_=1;c.oa=1;E(c);}
let AF5=a=>{return a.o$;}
let Iw=(a,b)=>{let c,d;Ka(a,a.o$+1|0);c=a.pQ.data;d=a.o$;a.o$=d+1|0;c[d]=b;a.q7=a.q7+1|0;return 1;}
let AEt=(a,b,c)=>{let d,e,f;if(b>=0){d=a.o$;if(b<=d){Ka(a,d+1|0);d=a.o$;e=d;while(e>b){f=a.pQ.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.pQ.data[b]=c;a.o$=d+1|0;a.q7=a.q7+1|0;return;}}c=new O;c.n_=1;c.oa=1;E(c);}
let QI=(a,b)=>{let c,d,e,f;if(b>=0){c=a.o$;if(b<c){d=a.pQ.data;e=d[b];c=c-1|0;a.o$=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.q7=a.q7+1|0;return e;}}e=new O;e.n_=1;e.oa=1;E(e);}
let PL=G(Eb);
let AXM=(a,b,c,d)=>{let e,f;e=a.p8;f=d.ps.data;f[e]=b-f[e]|0;return a.oh.hE(b,c,d);}
let AZ_=a=>{return C(195);}
let A7K=(a,b)=>{return 0;}
let Vg=G(Eb);
let AZR=(a,b,c,d)=>{return b;}
let A27=a=>{return C(196);}
let O$=G(Eb);
let AKB=(a,b,c,d)=>{let e;e=a.p8;if(d.ps.data[e]!=b)b=(-1);return b;}
let A8Z=a=>{return C(197);}
function P8(){Eb.call(this);this.GD=0;}
let AXX=(a,b,c,d)=>{let e,f;e=a.p8;f=d.ps.data;f[e]=b-f[e]|0;a.GD=b;return b;}
let ATQ=a=>{return C(198);}
let A6h=(a,b)=>{return 0;}
let Ij=G(Eb);
let Ben=()=>{let a=new Ij();A8Q(a);return a;}
let A8Q=a=>{let b,c;Gw();b=Y;Y=b+1|0;c=new Bx;c.ob=H(20);a.ow=(N(c,c.n$,b,10)).l();a.p8=0;}
let AU9=(a,b,c,d)=>{if(d.xs!=1&&b!=d.oX)return (-1);d.qY=1;d.pF.data[1]=b;return b;}
let AZo=a=>{return C(199);}
function C9(){CL.call(this);this.o7=0;}
let AB4=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.oh=b;a.o7=1;a.pJ=1;}
let A$w=(a,b,c,d)=>{let e;if((b+a.hQ()|0)>d.oX){d.qJ=1;return (-1);}e=a.hR(b,c);if(e<0)return (-1);return a.oh.hE(b+e|0,c,d);}
let A8z=a=>{return a.o7;}
let AOU=(a,b)=>{return 1;}
let QT=G(C9);
let KJ=a=>{let b=new QT();A4S(b,a);return b;}
let A4S=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.oh=b;a.o7=1;a.pJ=1;a.o7=0;}
let A75=(a,b,c)=>{return 0;}
let A0$=(a,b,c,d)=>{let e,f,g;e=d.oX;f=d.qD;b:{a:{while(true){g=B9(b,e);if(g>0)return (-1);if(g<0){if(b<0)break a;if(b>=c.oc.length)break a;if(((c.oc.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break b;if(g>=c.oc.length)break b;if((c.oc.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.oh.hE(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AZI=(a,b,c,d,e)=>{let f,g,h;f=e.oX;g=e.qD;b:{a:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break a;if(c>=d.oc.length)break a;if(((d.oc.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break b;if(h>=d.oc.length)break b;if((d.oc.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.oh.hE(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Ba;d.n_=1;d.oa=1;E(d);}d=new Ba;d.n_=1;d.oa=1;E(d);}
let AOd=a=>{return C(200);}
let AXS=(a,b)=>{return 0;}
function C2(){let a=this;CL.call(a);a.pM=null;a.qA=null;a.pC=0;}
let BiI=()=>{let a=new C2();ACF(a);return a;}
let BaZ=(a,b)=>{let c=new C2();ARM(c,a,b);return c;}
let ACF=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.ob=H(20);a.ow=(N(c,c.n$,b,10)).l();}
let ARM=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.pM=b;a.qA=c;a.pC=c.p8;}
let ANN=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pM;if(e===null)return (-1);f=a.pC;g=d.pF.data;h=f*2|0;i=g[h];g[h]=b;f=e.o$;j=0;a:{while(true){if(j>=f){b=a.pC;d.pF.data[b*2|0]=i;return (-1);}e=a.pM;if(j<0)break a;if(j>=e.o$)break a;h=e.pQ.data[j].hE(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new O;c.n_=1;c.oa=1;E(c);}
let ASa=(a,b)=>{a.qA.oh=b;}
let AO4=a=>{return C(201);}
let A36=(a,b)=>{let c,d,e,f,g;a:{d:{c=a.pM;if(c!==null){d=0;e=c.q7;f=c.o$;while(true){if(!(d>=f?0:1))break d;if(e<c.q7){b=new NN;b.n_=1;b.oa=1;E(b);}g=d+1|0;if(d<0)break a;if(d>=c.o$)break a;if(c.pQ.data[d].gY(b))break;d=g;}return 1;}}return 0;}b=new O;b.n_=1;b.oa=1;E(b);}
let ASP=(a,b)=>{let c,d,e;c=a.pC;d=b.pF.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;}
let ALg=a=>{let b,c,d,e;a.qC=1;b=a.qA;if(b!==null&&!b.qC)K5(b);a:{d:{b=a.pM;if(b!==null){c=b.o$;d=0;while(true){if(d>=c)break d;b=a.pM;if(d<0)break a;if(d>=b.o$)break a;b=b.pQ.data[d];e=b.hF();if(e===null)e=b;else{b.qC=1;QI(a.pM,d);AEt(a.pM,d,e);}if(!e.qC)e.gn();d=d+1|0;}}}if(a.oh!==null)K5(a);return;}b=new O;b.n_=1;b.oa=1;E(b);}
let NU=G(C2);
let BcE=(a,b)=>{let c=new NU();AYd(c,a,b);return c;}
let AYd=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.pM=b;a.qA=c;a.pC=c.p8;}
let ARS=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pC;f=d.ps.data;g=f[e];f[e]=b;h=a.pM.o$;e=0;b:{while(true){if(e>=h){b=a.pC;d.ps.data[b]=g;return (-1);}i=a.pM;if(e<0)break b;if(e>=i.o$)break b;j=i.pQ.data[e].hE(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new O;c.n_=1;c.oa=1;E(c);}
let AQc=a=>{return C(202);}
let A7k=(a,b)=>{let c;c=a.pC;return !b.ps.data[c]?0:1;}
let F6=G(NU);
let Bdc=(a,b)=>{let c=new F6();AOD(c,a,b);return c;}
let AOD=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.pM=b;a.qA=c;a.pC=c.p8;}
let A0w=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.pC;f=d.ps.data;g=f[e];f[e]=b;h=a.pM.o$;i=0;b:{while(i<h){j=a.pM;if(i<0)break b;if(i>=j.o$)break b;if(j.pQ.data[i].hE(b,c,d)>=0)return a.oh.hE(a.qA.GD,c,d);i=i+1|0;}b=a.pC;d.ps.data[b]=g;return (-1);}c=new O;c.n_=1;c.oa=1;E(c);}
let A63=(a,b)=>{a.oh=b;}
let AJl=a=>{return C(202);}
let ABE=G(F6);
let BdM=(a,b)=>{let c=new ABE();ANF(c,a,b);return c;}
let ANF=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.pM=b;a.qA=c;a.pC=c.p8;}
let AR7=(a,b,c,d)=>{let e,f,g;e=a.pM.o$;f=0;b:{while(f<e){g=a.pM;if(f<0)break b;if(f>=g.o$)break b;if(g.pQ.data[f].hE(b,c,d)>=0)return a.oh.hE(b,c,d);f=f+1|0;}return (-1);}c=new O;c.n_=1;c.oa=1;E(c);}
let AUY=(a,b)=>{return 0;}
let A9X=a=>{return C(203);}
let AHe=G(F6);
let BcQ=(a,b)=>{let c=new AHe();AM2(c,a,b);return c;}
let AM2=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.pM=b;a.qA=c;a.pC=c.p8;}
let AKl=(a,b,c,d)=>{let e,f,g;e=a.pM.o$;f=0;b:{while(true){if(f>=e)return a.oh.hE(b,c,d);g=a.pM;if(f<0)break b;if(f>=g.o$)break b;if(g.pQ.data[f].hE(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new O;c.n_=1;c.oa=1;E(c);}
let A8E=(a,b)=>{return 0;}
let ANE=a=>{return C(204);}
let AEb=G(F6);
let A_3=(a,b)=>{let c=new AEb();AUn(c,a,b);return c;}
let AUn=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.pM=b;a.qA=c;a.pC=c.p8;}
let ALc=(a,b,c,d)=>{let e,f,g,h,i;e=a.pM.o$;f=d.At?0:d.qD;d:{n:{g=a.oh.hE(b,c,d);if(g>=0){h=a.pC;d.ps.data[h]=b;h=0;while(true){if(h>=e)break n;i=a.pM;if(h<0)break d;if(h>=i.o$)break d;if(i.pQ.data[h].hT(f,b,c,d)>=0){b=a.pC;d.ps.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new O;c.n_=1;c.oa=1;E(c);}
let A$Z=(a,b)=>{return 0;}
let ARF=a=>{return C(205);}
let Za=G(F6);
let Bd$=(a,b)=>{let c=new Za();AXI(c,a,b);return c;}
let AXI=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.pM=b;a.qA=c;a.pC=c.p8;}
let AXe=(a,b,c,d)=>{let e,f,g;e=a.pM.o$;f=a.pC;d.ps.data[f]=b;f=0;b:{while(true){if(f>=e)return a.oh.hE(b,c,d);g=a.pM;if(f<0)break b;if(f>=g.o$)break b;if(g.pQ.data[f].hT(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new O;c.n_=1;c.oa=1;E(c);}
let A7z=(a,b)=>{return 0;}
let AKC=a=>{return C(206);}
function I2(){C2.call(this);this.qX=null;}
let Bfh=(a,b)=>{let c=new I2();ALP(c,a,b);return c;}
let ALP=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.qX=b;a.qA=c;a.pC=c.p8;}
let AI1=(a,b,c,d)=>{let e,f,g;e=a.pC;f=d.pF.data;e=e*2|0;g=f[e];f[e]=b;e=a.qX.hE(b,c,d);if(e>=0)return e;e=a.pC;d.pF.data[e*2|0]=g;return (-1);}
let AQo=(a,b,c,d)=>{let e;e=a.qX.hB(b,c,d);if(e>=0){b=a.pC;d.pF.data[b*2|0]=e;}return e;}
let A7S=(a,b,c,d,e)=>{let f;f=a.qX.hT(b,c,d,e);if(f>=0){b=a.pC;e.pF.data[b*2|0]=f;}return f;}
let A3V=(a,b)=>{return a.qX.gY(b);}
let A6f=a=>{let b,c,d,e,f;b=new Oi;c=a.qX;d=a.qA;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);b.ow=(N(f,f.n$,e,10)).l();b.qX=c;b.qA=d;b.pC=d.p8;a.oh=b;return b;}
let AVO=a=>{let b;a.qC=1;b=a.qA;if(b!==null&&!b.qC)K5(b);b=a.qX;if(b!==null&&!b.qC){b=b.hF();if(b!==null){a.qX.qC=1;a.qX=b;}a.qX.gn();}}
let AFy=G();
let Nx=b=>{if(b===null||b.constructor.$meta.item==='undefined'){E(A_I());}return b.data.length;}
let BbN=(b,c)=>{if(b===null){b=new Dv;b.n_=1;b.oa=1;E(b);}if(b===BH(CO)){b=new V;b.n_=1;b.oa=1;E(b);}if(c>=0)return EN(b.oE,c);b=new D$;b.n_=1;b.oa=1;E(b);}
let EN=(b,c)=>{if(b.$meta.primitive){switch(b){case BfA:return NZ(c);case A_H:return BW(c);case Ba2:return MT(c);case BbJ:return H(c);case A_K:return X(c);case A_m:return Co(c);case BdT:return CT(c);case A_h:return LH(c);}}return Bt(b,c);}
let JY=G(B0);
let In=G();
function BE(){let a=this;In.call(a);a.oS=0;a.qB=0;a.ov=null;a.Ch=null;a.CD=null;a.pq=0;}
let AMr=null;let BO=()=>{BO=Bj(BE);ALU();}
let Lw=a=>{let b;BO();b=new BF;b.oq=X(64);a.ov=b;}
let AYT=a=>{return null;}
let AX7=a=>{return a.ov;}
let AFe=a=>{return !a.qB?(Jh(a.ov,0)>=2048?0:1):ZA(a.ov,0)>=2048?0:1;}
let A19=a=>{return a.pq;}
let A8u=a=>{return a;}
let Wb=a=>{let b,c;if(a.CD===null){b=a.hW();c=new QW;c.JJ=a;c.GG=b;b=new BF;b.oq=X(64);c.ov=b;a.CD=c;FM(c,a.qB);}return a.CD;}
let Kc=a=>{let b,c;if(a.Ch===null){b=a.hW();c=new QV;c.Ix=a;c.HC=b;c.Ge=a;b=new BF;b.oq=X(64);c.ov=b;a.Ch=c;FM(c,a.oS);a.Ch.pq=a.pq;}return a.Ch;}
let A9W=a=>{return 0;}
let FM=(a,b)=>{let c;c=a.oS;if(c^b){a.oS=c?0:1;a.qB=a.qB?0:1;}if(!a.pq)a.pq=1;return a;}
let AM5=a=>{return a.oS;}
let PU=(b,c)=>{BO();b=AHH(AMr,b);if(!c&&b.wE===null)b.wE=b.hY();else if(c&&b.wt===null)b.wt=FM(b.hY(),1);return c?b.wt:b.wE;}
let ALU=()=>{let b;b=new It;ATi();AMr=b;}
function Df(){let a=this;BE.call(a);a.BT=0;a.Cy=0;a.xk=0;a.C5=0;a.si=0;a.rh=0;a.oz=null;a.pr=null;}
let DG=(a,b)=>{let c;b:{if(a.BT){d:{if(!(b>=97&&b<=122)){if(b<65)break d;if(b>90)break d;}if(a.si){N0(a.oz,IM(b&65535));break b;}L1(a.oz,IM(b&65535));break b;}if(a.Cy&&b>128){a.xk=1;if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b);if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}b=C1(CA,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.C5)N0(a.ov,b-55296|0);else L1(a.ov,b-55296|0);}if(a.si)N0(a.oz,b);else L1(a.oz,
b);if(!a.pq&&(b>=65536&&b<=1114111?1:0))a.pq=1;return a;}
let AIh=(a,b)=>{let c,d,e;if(!a.pq&&b.pq)a.pq=1;if(a.C5){if(!b.qB)Ht(a.ov,b.hW());else ES(a.ov,b.hW());}else if(!b.qB)HP(a.ov,b.hW());else{HF(a.ov,b.hW());ES(a.ov,b.hW());a.qB=a.qB?0:1;a.C5=1;}if(!a.rh&&b.h5()!==null){if(a.si){if(!b.oS)Ht(a.oz,b.h5());else ES(a.oz,b.h5());}else if(!b.oS)HP(a.oz,b.h5());else{HF(a.oz,b.h5());ES(a.oz,b.h5());a.oS=a.oS?0:1;a.si=1;}}else{c=a.oS;d=a.pr;if(d!==null){if(!c){e=new Sh;e.I1=a;e.HO=c;e.Ga=d;e.F9=b;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}else{e=new Si;e.JU=a;e.FC=c;e.G8
=d;e.G0=b;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}}else{if(c&&!a.si&&(a.oz.pK?0:1)){d=new Se;d.Jq=a;d.G_=b;BO();b=new BF;b.oq=X(64);d.ov=b;a.pr=d;}else if(!c){d=new Sc;d.Ek=a;d.DU=c;d.GO=b;BO();b=new BF;b.oq=X(64);d.ov=b;a.pr=d;}else{d=new Sd;d.Dm=a;d.Cv=c;d.F_=b;BO();b=new BF;b.oq=X(64);d.ov=b;a.pr=d;}a.rh=1;}}return a;}
let Ca=(a,b,c)=>{let d;if(b>c){d=new V;d.n_=1;d.oa=1;E(d);}a:{d:{if(!a.BT){if(c<55296)break d;if(b>57343)break d;}c=c+1|0;while(true){if(b>=c)break a;DG(a,b);b=b+1|0;}}if(a.si)ABW(a.oz,b,c+1|0);else Jv(a.oz,b,c+1|0);}return a;}
let ABC=(a,b)=>{let c,d,e,f;if(!a.pq&&b.pq)a.pq=1;if(b.xk)a.xk=1;c=a.qB;if(!(c^b.qB)){if(!c)HP(a.ov,b.ov);else ES(a.ov,b.ov);}else if(c)Ht(a.ov,b.ov);else{HF(a.ov,b.ov);ES(a.ov,b.ov);a.qB=1;}o:{if(!a.rh){d=b.rh;if((!d?b.oz:null)!==null){c=a.oS;if(!(c^b.oS)){if(!c){HP(a.oz,!d?b.oz:null);break o;}ES(a.oz,!d?b.oz:null);break o;}if(c){Ht(a.oz,!d?b.oz:null);break o;}HF(a.oz,!d?b.oz:null);ES(a.oz,!b.rh?b.oz:null);a.oS=1;break o;}}c=a.oS;e=a.pr;if(e!==null){if(c){f=new OW;f.If=a;f.HL=c;f.E3=e;f.E6=b;Lw(f);a.pr=f;}
else{f=new OI;f.H2=a;f.F0=c;f.HF=e;f.Gh=b;BO();f.ov=A65(2048);a.pr=f;}}else{if(!a.si&&(a.oz.pK?0:1)){if(!c){e=new Sf;e.JX=a;e.Fs=b;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}else{e=new Sg;e.I8=a;e.HJ=b;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}}else if(!c){e=new Sj;e.F1=a;e.FE=b;e.G9=c;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}else{e=new Sk;e.FJ=a;e.FQ=b;e.Ho=c;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}a.rh=1;}}}
let Q1=(a,b)=>{let c,d,e,f;if(!a.pq&&b.pq)a.pq=1;if(b.xk)a.xk=1;c=a.qB;if(!(c^b.qB)){if(!c)ES(a.ov,b.ov);else HP(a.ov,b.ov);}else if(!c)Ht(a.ov,b.ov);else{HF(a.ov,b.ov);ES(a.ov,b.ov);a.qB=0;}o:{if(!a.rh){d=b.rh;if((!d?b.oz:null)!==null){c=a.oS;if(!(c^b.oS)){if(!c){ES(a.oz,!d?b.oz:null);break o;}HP(a.oz,!d?b.oz:null);break o;}if(!c){Ht(a.oz,!d?b.oz:null);break o;}HF(a.oz,!d?b.oz:null);ES(a.oz,!b.rh?b.oz:null);a.oS=0;break o;}}c=a.oS;e=a.pr;if(e!==null){if(c){f=new OL;f.I_=a;f.Hq=c;f.Gy=e;f.Hu=b;Lw(f);a.pr=f;}
else{f=new OK;f.I0=a;f.Hx=c;f.GF=e;f.FB=b;BO();f.ov=A65(2048);a.pr=f;}}else{if(!a.si&&(a.oz.pK?0:1)){if(!c){e=new OG;e.Ij=a;e.GU=b;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}else{e=new OH;e.JT=a;e.Fp=b;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}}else if(!c){e=new OM;e.HT=a;e.HN=b;e.FO=c;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}else{e=new OF;e.FN=a;e.Ht=b;e.Ha=c;BO();b=new BF;b.oq=X(64);e.ov=b;a.pr=e;}a.rh=1;}}}
let ALt=(a,b)=>{let c;c=a.pr;if(c!==null)return a.oS^c.h7(b);return a.oS^Dl(a.oz,b);}
let AWz=a=>{if(!a.rh)return a.oz;return null;}
let A00=a=>{return a.ov;}
let AUK=a=>{let b,c;if(a.pr!==null)return a;b=!a.rh?a.oz:null;c=new OJ;c.IR=a;c.Bt=b;BO();b=new BF;b.oq=X(64);c.ov=b;return FM(c,a.oS);}
let A5u=a=>{let b,c,d,e,f,g,h,i,j,k;b=new L;b.ob=H(16);c=Jh(a.oz,0);while(c>=0){d=(Go(c)).data;e=0;f=d.length;g=b.n$;Bp(b,g,g+f|0);f=f+e|0;while(e<f){h=b.ob.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.n$;Bp(b,g,g+1|0);b.ob.data[g]=124;c=Jh(a.oz,c+1|0);}e=b.n$;if(e>0)U2(b,e-1|0);k=new P;d=b.ob;h=d.data;e=b.n$;S();g=h.length;if(e>=0&&e<=(g-0|0)){k.oc=Q(d.data,0,e);return k;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let AM6=a=>{return a.xk;}
function Mx(){let a=this;B0.call(a);a.II=null;a.JM=null;}
function FE(){CL.call(this);this.oV=null;}
let Wm=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;}
let A$I=a=>{return a.oV;}
let ATz=(a,b)=>{return !a.oV.gY(b)&&!a.oh.gY(b)?0:1;}
let A9g=(a,b)=>{return 1;}
let AQR=a=>{let b;a.qC=1;b=a.oh;if(b!==null&&!b.qC){b=b.hF();if(b!==null){a.oh.qC=1;a.oh=b;}a.oh.gn();}b=a.oV;if(b!==null){if(!b.qC){b=b.hF();if(b!==null){a.oV.qC=1;a.oV=b;}a.oV.gn();}else if(b instanceof I2&&b.qA.D6)a.oV=b.oh;}}
function EB(){FE.call(this);this.o_=null;}
let BbL=(a,b,c)=>{let d=new EB();ARX(d,a,b,c);return d;}
let ARX=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;a.o_=b;}
let AXg=(a,b,c,d)=>{let e,f;e=0;b:{while((b+a.o_.hQ()|0)<=d.oX){f=a.o_.hR(b,c);if(f<=0)break b;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.oh.hE(b,c,d);if(f>=0)break;b=b-a.o_.hQ()|0;e=e+(-1)|0;}return f;}
let AZz=a=>{return C(207);}
function Hf(){EB.call(this);this.uY=null;}
let BdV=(a,b,c,d)=>{let e=new Hf();APG(e,a,b,c,d);return e;}
let APG=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);a.ow=(N(g,g.n$,f,10)).l();a.oh=d;a.oV=c;a.pJ=e;a.o_=c;a.uY=b;}
let AYw=(a,b,c,d)=>{let e,f,g,h,i;e=a.uY;f=e.tT;g=e.tR;h=0;while(true){if(h>=f){n:{while(h<g){if((b+a.o_.hQ()|0)>d.oX)break n;i=a.o_.hR(b,c);if(i<1)break n;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.oh.hE(b,c,d);if(i>=0)break;b=b-a.o_.hQ()|0;h=h+(-1)|0;}return i;}if((b+a.o_.hQ()|0)>d.oX){d.qJ=1;return (-1);}i=a.o_.hR(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let AYX=a=>{return TT(a.uY);}
let EE=G(FE);
let BdB=(a,b,c)=>{let d=new EE();ATY(d,a,b,c);return d;}
let ATY=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;}
let AXy=(a,b,c,d)=>{let e;if(!a.oV.h$(d))return a.oh.hE(b,c,d);e=a.oV.hE(b,c,d);if(e>=0)return e;return a.oh.hE(b,c,d);}
let A2L=a=>{return C(208);}
let Hc=G(EB);
let Bbe=(a,b,c)=>{let d=new Hc();A4m(d,a,b,c);return d;}
let A4m=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;a.o_=b;}
let A4q=(a,b,c,d)=>{let e;e=a.oV.hE(b,c,d);if(e<0)e=a.oh.hE(b,c,d);return e;}
let AWH=(a,b)=>{a.oh=b;a.oV.gr(b);}
let AAw=G(EB);
let A_V=a=>{let b=new AAw();AOQ(b,a);return b;}
let AOQ=(a,b)=>{let c,d,e,f;c=b.oV;d=b.oh;e=b.pJ;f=Y;Y=f+1|0;b=new Bx;b.ob=H(20);a.ow=(N(b,b.n$,f,10)).l();a.oh=d;a.oV=c;a.pJ=e;a.o_=c;c.gr(a);}
let A$q=(a,b,c,d)=>{while((b+a.o_.hQ()|0)<=d.oX&&a.o_.hR(b,c)>0){b=b+a.o_.hQ()|0;}return a.oh.hE(b,c,d);}
let ARb=(a,b,c,d)=>{let e,f,g;e=a.oh.hB(b,c,d);if(e<0)return (-1);f=e-a.o_.hQ()|0;while(f>=b&&a.o_.hR(f,c)>0){g=f-a.o_.hQ()|0;e=f;f=g;}return e;}
function BN(){let a=this;D.call(a);a.wE=null;a.wt=null;}
let A7p=(a,b)=>{if(!b&&a.wE===null)a.wE=a.hY();else if(b&&a.wt===null)a.wt=FM(a.hY(),1);if(b)return a.wt;return a.wE;}
function RQ(){let a=this;In.call(a);a.tT=0;a.tR=0;}
let TT=a=>{let b,c,d,e,f,g,h;b=a.tT;c=a.tR;if(c==2147483647)d=C(43);else{d=new Bx;d.ob=H(20);d=(N(d,d.n$,c,10)).l();}e=new L;e.ob=H(16);c=e.n$;Bp(e,c,c+1|0);e.ob.data[c]=123;N(e,e.n$,b,10);b=e.n$;Bp(e,b,b+1|0);e.ob.data[b]=44;f=e.n$;if(d===null)d=C(2);F(e,f,d);b=e.n$;Bp(e,b,b+1|0);g=e.ob;h=g.data;h[b]=125;d=new P;b=e.n$;S();c=h.length;if(b>=0&&b<=(c-0|0)){d.oc=Q(g.data,0,b);return d;}d=new O;d.n_=1;d.oa=1;Bu(d);E(d);}
let R_=G(CL);
let APk=(a,b,c,d)=>{return b;}
let A5$=a=>{return C(209);}
let A6e=(a,b)=>{return 0;}
function BF(){let a=this;D.call(a);a.oq=null;a.pK=0;}
let A65=a=>{let b=new BF();AXA(b,a);return b;}
let AXA=(a,b)=>{let c;if(b>=0){a.oq=X(((b+32|0)-1|0)/32|0);return;}c=new D$;c.n_=1;c.oa=1;E(c);}
let L1=(a,b)=>{let c,d,e;if(b<0){c=new O;c.n_=1;c.oa=1;E(c);}d=b/32|0;if(b>=a.pK){KI(a,d+1|0);a.pK=b+1|0;}e=a.oq.data;e[d]=e[d]|1<<(b%32|0);}
let Jv=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B9(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.pK){KI(a,e+1|0);a.pK=c;}if(d==e){f=a.oq.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.oq.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new O;i.n_=1;i.oa=1;E(i);}
let N0=(a,b)=>{let c,d,e,f,g;if(b<0){c=new O;c.n_=1;c.oa=1;E(c);}d=b/32|0;e=a.oq.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.pK-1|0))Iu(a);}}
let ABW=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.pK;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.oq.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.oq.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}Iu(a);return;}i=new O;i.n_=1;i.oa=1;E(i);}
let Dl=(a,b)=>{let c,d,e;if(b<0){c=new O;c.n_=1;c.oa=1;E(c);}d=b/32|0;e=a.oq.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
let Jh=(a,b)=>{let c,d,e,f,g;if(b<0){c=new O;c.n_=1;c.oa=1;E(c);}d=a.pK;if(b>=d)return (-1);e=b/32|0;f=a.oq.data;g=f[e]>>>(b%32|0)|0;if(g)return EY(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+EY(f[g])|0;g=g+1|0;}return (-1);}
let ZA=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new O;c.n_=1;c.oa=1;E(c);}d=a.pK;if(b>=d)return b;e=b/32|0;f=a.oq.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return EY(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+EY(f[h]^(-1))|0;h=h+1|0;}return d;}
let KI=(a,b)=>{let c,d,e,f,g,h;c=a.oq.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=X(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.oq=g;}
let Iu=a=>{let b,c,d;b=(a.pK+31|0)/32|0;a.pK=b*32|0;c=b-1|0;b:{while(true){if(c<0)break b;d=Ee(a.oq.data[c]);if(d<32)break;c=c+(-1)|0;a.pK=a.pK-32|0;}a.pK=a.pK-d|0;}}
let JG=(a,b)=>{let c,d,e,f,g;c=a.oq.data;d=c.length;e=b.oq.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;}
let ES=(a,b)=>{let c,d,e,f,g,h,i;c=a.oq.data;d=c.length;e=b.oq.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.pK;i=b.pK;if(h<i)i=h;a.pK=i;Iu(a);}
let Ht=(a,b)=>{let c,d,e,f,g;c=a.oq.data;d=c.length;e=b.oq.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}Iu(a);}
let HP=(a,b)=>{let c,d,e,f,g;c=a.pK;d=b.pK;if(c>d)d=c;a.pK=d;KI(a,(d+31|0)/32|0);e=a.oq.data;c=e.length;f=b.oq.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}}
let HF=(a,b)=>{let c,d,e,f,g;c=a.pK;d=b.pK;if(c>d)d=c;a.pK=d;KI(a,(d+31|0)/32|0);e=a.oq.data;c=e.length;f=b.oq.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}Iu(a);}
function N9(){let a=this;C2.call(a);a.z_=null;a.DW=0;}
let XU=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.qD;f=d.oX;g=b+1|0;f=B9(g,f);if(f>0){d.qJ=1;return (-1);}if(b>=0&&b<c.oc.length){h=c.oc.charCodeAt(b);if(!a.z_.h7(h))return (-1);i=h&64512;j=i!=55296?0:1;o:{if(j){if(f>=0)break o;if(g>=0&&g<c.oc.length){if((c.oc.charCodeAt(g)&64512)!=56320?0:1)return (-1);break o;}c=new Ba;c.n_=1;c.oa=1;E(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.oc.length){if(!((c.oc.charCodeAt(j)&64512)!=55296?0:1))break o;return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}}return a.oh.hE(g,c,d);}c=new Ba;c.n_
=1;c.oa=1;E(c);}
let A6l=a=>{let b,c,d,e,f,g,h,i;b=!a.DW?C(210):C(211);c=a.z_.l();d=new L;d.ob=H(16);F(d,d.n$,C(212));F(d,d.n$,b);e=d.n$;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.ob;g=f.data;h=d.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){b.oc=Q(f.data,0,h);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
function H7(){let a=this;C2.call(a);a.uZ=null;a.vS=null;}
let AJX=(a,b,c,d)=>{let e;e=a.uZ.hE(b,c,d);if(e<0)e=XU(a.vS,b,c,d);if(e>=0)return e;return (-1);}
let A54=(a,b)=>{a.oh=b;a.vS.oh=b;a.uZ.gr(b);}
let A6E=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.uZ;S();if(b===null)b=C(2);else{c=b.ow;b=b.eh();d=new L;d.ob=H(16);e=d.n$;Bp(d,e,e+1|0);d.ob.data[e]=60;DI(d,d.n$,c===null?C(2):DJ(c));e=d.n$;Bp(d,e,e+1|0);d.ob.data[e]=58;DI(d,d.n$,b===null?C(2):DJ(b));e=d.n$;Bp(d,e,e+1|0);f=d.ob;g=f.data;g[e]=62;b=new P;e=d.n$;h=g.length;if(e>=0&&e<=(h-0|0))b.oc=Q(f.data,0,e);else{b=new O;K8(b);E(b);}}r:{c=a.vS;if(c===null)i=C(2);else{d=c.ow;i=!c.DW?C(210):C(211);j=c.z_.l();c=new L;c.ob=H(16);Ez(c,c.n$,C(212));Ez(c,c.n$,i);Ez(c,c.n$,
j);i=new P;f=c.ob;g=f.data;e=c.n$;h=g.length;if(e>=0&&e<=(h-0|0)){i.oc=Q(f.data,0,e);c=new L;c.ob=H(16);k=c.n$;Bp(c,k,k+1|0);c.ob.data[k]=60;DI(c,c.n$,d===null?C(2):DJ(d));h=c.n$;Bp(c,h,h+1|0);c.ob.data[h]=58;DI(c,c.n$,DJ(i));h=c.n$;Bp(c,h,h+1|0);f=c.ob;g=f.data;g[h]=62;i=new P;e=c.n$;h=g.length;if(e>=0&&e<=(h-0|0)){i.oc=Q(f.data,0,e);break r;}b=new O;K8(b);E(b);}E(AJP());}}c=new L;c.ob=H(16);F(c,c.n$,C(213));F(c,c.n$,b);F(c,c.n$,C(214));F(c,c.n$,i);b=new P;f=c.ob;g=f.data;e=c.n$;h=g.length;if(e>=0&&e<=(h-0
|0)){b.oc=Q(f.data,0,e);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let AKL=(a,b)=>{return 1;}
let AKn=(a,b)=>{return 1;}
function E5(){let a=this;C2.call(a);a.qI=null;a.wy=0;}
let Bew=a=>{let b=new E5();A6A(b,a);return b;}
let A6A=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.qI=b.ib();a.wy=b.oS;}
let A0V=(a,b,c,d)=>{let e,f,g,h;a:{e=d.oX;if(b<e){f=b+1|0;if(b>=0&&b<c.oc.length){g=c.oc.charCodeAt(b);if(a.h7(g)){h=a.oh.hE(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.oc.length){f=c.oc.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.h7(((g&1023)<<10|f&1023)+65536|0))break a;else return a.oh.hE(e,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}}return (-1);}
let A9R=a=>{let b,c,d,e,f,g,h,i;b=!a.wy?C(210):C(211);c=a.qI.l();d=new L;d.ob=H(16);F(d,d.n$,C(212));F(d,d.n$,b);e=d.n$;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.ob;g=f.data;h=d.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){b.oc=Q(f.data,0,h);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let ANh=(a,b)=>{return a.qI.h7(b);}
let AJN=(a,b)=>{let c,d,e;if(b instanceof F_){c=a.qI;d=b.we;BO();return c.h7(d);}if(b instanceof FG){c=a.qI;d=b.qH;BO();return c.h7(d);}if(b instanceof E5){c=a.qI;b=b.qI;BO();return c.h5()!==null&&b.h5()!==null?JG(c.h5(),b.h5()):1;}if(!(b instanceof Fz))return 1;c=a.qI;e=b.rH;BO();return c.h5()!==null&&e.h5()!==null?JG(c.h5(),e.h5()):1;}
let AO9=a=>{return a.qI;}
let A8o=(a,b)=>{a.oh=b;}
let AMW=(a,b)=>{return 1;}
let RN=G(E5);
let Be$=a=>{let b=new RN();AL2(b,a);return b;}
let AL2=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.qI=b.ib();a.wy=b.oS;}
let AOV=(a,b)=>{let c;c=a.qI;if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b);if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return c.h7(C1(CA,b));}
let AVY=a=>{let b,c,d,e,f,g,h,i;b=!a.wy?C(210):C(211);c=a.qI.l();d=new L;d.ob=H(16);F(d,d.n$,C(215));F(d,d.n$,b);e=d.n$;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.ob;g=f.data;h=d.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){b.oc=Q(f.data,0,h);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
function ON(){let a=this;C9.call(a);a.BD=null;a.C3=0;}
let BaJ=a=>{let b=new ON();ARx(b,a);return b;}
let ARx=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;a.BD=b.ib();a.C3=b.oS;}
let A3r=(a,b,c)=>{let d;d=a.BD;if(b>=0&&b<c.oc.length){b=c.oc.charCodeAt(b);if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b)&65535;if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return !d.h7(C1(CA,b)&65535)?(-1):1;}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AY6=a=>{let b,c,d,e,f,g,h,i;b=!a.C3?C(210):C(211);c=a.BD.l();d=new L;d.ob=H(16);F(d,d.n$,C(215));F(d,d.n$,b);e=d.n$;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.ob;g=f.data;h=d.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){b.oc=Q(f.data,0,h);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
function Fz(){let a=this;C9.call(a);a.rH=null;a.Dj=0;}
let Bcg=a=>{let b=new Fz();ASz(b,a);return b;}
let ASz=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;a.rH=b.ib();a.Dj=b.oS;}
let AWO=(a,b,c)=>{let d;d=a.rH;if(b>=0&&b<c.oc.length)return !d.h7(c.oc.charCodeAt(b))?(-1):1;c=new Ba;c.n_=1;c.oa=1;E(c);}
let APt=a=>{let b,c,d,e,f,g,h,i;b=!a.Dj?C(210):C(211);c=a.rH.l();d=new L;d.ob=H(16);F(d,d.n$,C(212));F(d,d.n$,b);e=d.n$;if(c===null)c=C(2);F(d,e,c);b=new P;f=d.ob;g=f.data;h=d.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){b.oc=Q(f.data,0,h);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let ASb=(a,b)=>{let c,d,e;if(b instanceof FG){c=a.rH;d=b.qH;BO();return c.h7(d);}if(b instanceof Fz){c=a.rH;b=b.rH;BO();return c.h5()!==null&&b.h5()!==null?JG(c.h5(),b.h5()):1;}if(!(b instanceof E5)){if(!(b instanceof F_))return 1;return 0;}c=a.rH;e=b.qI;BO();return c.h5()!==null&&e.h5()!==null?JG(c.h5(),e.h5()):1;}
function Kd(){let a=this;C2.call(a);a.tv=null;a.sO=null;a.yj=0;}
let AQw=(a,b)=>{a.oh=b;}
let ATl=a=>{let b,c,d,e,f,g,h,i;if(a.sO===null){b=new P;c=a.tv;d=c.data;S();b.oc=Q(c.data,0,d.length);a.sO=b;}e=a.sO;b=new L;b.ob=H(16);F(b,b.n$,C(216));f=b.n$;if(e===null)e=C(2);F(b,f,e);g=new P;c=b.ob;d=c.data;h=b.n$;S();i=d.length;if(h>=0&&h<=(i-0|0)){g.oc=Q(c.data,0,h);return g;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let AIC=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.oX;f=X(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.oc.length){j=c.oc.charCodeAt(b);k=AL4(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.yj;if(b!=m)return (-1);while(true){if(l>=m)return a.oh.hE(i,c,d);if(f[l]!=a.tv.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.oc.length){j=c.oc.charCodeAt(i);g=j-4449|0;}else{c=new Ba;c.n_=1;c.oa=1;E(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.oc.length){j
=c.oc.charCodeAt(b);h=j-4519|0;}else{c=new Ba;c.n_=1;c.oa=1;E(c);}}if(h>=0&&h<28){bc:{b=b+1|0;k[2]=j;if(a.yj==3){m=k[0];f=a.tv.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.oh.hE(b,c,d);break bc;}}b=(-1);}return b;}p:{if(a.yj==2){m=k[0];f=a.tv.data;if(m==f[0]&&k[1]==f[1]){b=a.oh.hE(b,c,d);break p;}}b=(-1);}return b;}return (-1);}return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AY_=(a,b)=>{let c,d,e,f;b:{if(b instanceof Kd){b=b;if(b.sO===null){c=new P;d=b.tv;e=d.data;S();c.oc=Q(d.data,0,e.length);b.sO=c;}c=b.sO;if(a.sO===null){b=new P;d=a.tv;e=d.data;S();b.oc=Q(d.data,0,e.length);a.sO=b;}b=a.sO;if(c===b)f=1;else if(!(b instanceof P))f=0;else{b=b;f=c.oc!==b.oc?0:1;}if(!f){f=0;break b;}}f=1;}return f;}
let AUQ=(a,b)=>{return 1;}
function FG(){C9.call(this);this.qH=0;}
let AMa=a=>{let b=new FG();ASE(b,a);return b;}
let ASE=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;a.qH=b;}
let A2_=a=>{return 1;}
let AN3=(a,b,c)=>{let d;d=a.qH;if(b>=0&&b<c.oc.length)return d!=c.oc.charCodeAt(b)?(-1):1;c=new Ba;c.n_=1;c.oa=1;E(c);}
let AMF=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof P){e=d.oX;while(true){if(b>=e)return (-1);f=E9(c,a.qH,b);if(f<0)return (-1);g=a.oh;b=f+1|0;if(g.hE(b,c,d)>=0)break;}return f;}h=d.oX;c:{o:{while(true){if(b>h){b=(-1);break o;}i=b+1|0;if(i>d.oX){d.qJ=1;e=(-1);}else{e=a.qH;if(b<0)break c;if(b>=c.oc.length)break c;e=e!=c.oc.charCodeAt(b)?(-1):1;e=e<0?(-1):a.oh.hE(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new Ba;Bm(c);E(c);}
let APa=(a,b,c,d,e)=>{let f;if(d instanceof P){a:{while(true){if(c<b)return (-1);c=GW(d,a.qH,c);if(c<0)break a;if(c<b)break a;if(a.oh.hE(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}c:{o:{while(true){if(c<b){c=(-1);break o;}if((c+1|0)>e.oX){e.qJ=1;f=(-1);}else{f=a.qH;if(c<0)break c;if(c>=d.oc.length)break c;f=f!=d.oc.charCodeAt(c)?(-1):1;f=f<0?(-1):a.oh.hE(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Ba;Bm(d);E(d);}
let AU2=a=>{let b,c,d,e,f,g,h;b=a.qH;c=new L;c.ob=H(16);d=c.n$;Bp(c,d,d+1|0);e=c.ob;f=e.data;f[d]=b;g=new P;d=c.n$;S();h=f.length;if(d>=0&&d<=(h-0|0)){g.oc=Q(e.data,0,d);return g;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let AUH=(a,b)=>{let c,d,e,f;if(b instanceof FG)return b.qH!=a.qH?0:1;if(!(b instanceof Fz)){if(b instanceof E5)return b.h7(a.qH);if(!(b instanceof F_))return 1;return 0;}b=b;c=a.qH;d=new P;e=H(1);f=e.data;f[0]=c;S();d.oc=Q(e.data,0,f.length);b=b.rH;if(0>=d.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}return (!b.h7(d.oc.charCodeAt(0))?(-1):1)<=0?0:1;}
function Q_(){C9.call(this);this.A4=0;}
let Bfw=a=>{let b=new Q_();A5k(b,a);return b;}
let A5k=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b)&65535;if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}a.A4=C1(CA,b)&65535;}
let AWT=(a,b,c)=>{let d;d=a.A4;if(b>=0&&b<c.oc.length){b=c.oc.charCodeAt(b);if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}b=C1(CJ,b)&65535;if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return d!=(C1(CA,b)&65535)?(-1):1;}c=new Ba;c.n_=1;c.oa=1;E(c);}
let A53=a=>{let b,c,d,e,f,g,h;b=a.A4;c=new L;c.ob=H(16);F(c,c.n$,C(217));d=c.n$;Bp(c,d,d+1|0);e=c.ob;f=e.data;f[d]=b;g=new P;d=c.n$;S();h=f.length;if(d>=0&&d<=(h-0|0)){g.oc=Q(e.data,0,d);return g;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
function N7(){let a=this;C9.call(a);a.AV=0;a.D2=0;}
let Bdx=a=>{let b=new N7();ATd(b,a);return b;}
let ATd=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;a.AV=b;a.D2=IM(b);}
let AIU=(a,b,c)=>{let d;d=a.AV;if(b>=0&&b<c.oc.length){d:{k:{if(d!=c.oc.charCodeAt(b)){d=a.D2;if(b<0)break d;if(b>=c.oc.length)break d;if(d!=c.oc.charCodeAt(b)){b=(-1);break k;}}b=1;}return b;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AOl=a=>{let b,c,d,e,f,g,h;b=a.AV;c=new L;c.ob=H(16);F(c,c.n$,C(218));d=c.n$;Bp(c,d,d+1|0);e=c.ob;f=e.data;f[d]=b;g=new P;d=c.n$;S();h=f.length;if(d>=0&&d<=(h-0|0)){g.oc=Q(e.data,0,d);return g;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
function Hj(){let a=this;C2.call(a);a.vO=0;a.so=null;a.ui=null;a.ug=0;}
let BgP=(a,b)=>{let c=new Hj();AKa(c,a,b);return c;}
let AKa=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.vO=1;a.ui=b;a.ug=c;}
let A94=(a,b)=>{a.oh=b;}
let ARR=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=X(4);f=d.oX;if(b>=f)return (-1);g=LA(a,b,c,f);h=b+a.vO|0;i=A02.ig(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;CX(i,0,e,0,b);b=0+b|0;}k:{if(h<f){i=e.data;g=LA(a,h,c,f);while(b<4){if(!A6j(g)){k=b+1|0;i[b]=g;}else{j=(A02.ig(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.vO|0;if(h>=f){b=k;break k;}g=LA(a,h,c,f);b=k;}}}if(b!=a.ug)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.oh.hE(h,c,d);if(j[g]!=a.ui.data[g])break;g
=g+1|0;}return (-1);}
let A5V=a=>{let b,c,d,e,f,g,h,i;if(a.so===null){b=new L;b.ob=H(16);c=0;while(c<a.ug){d=Go(a.ui.data[c]);e=d.data.length;My(b,b.n$,d,0,e);c=c+1|0;}f=new P;d=b.ob;g=d.data;h=b.n$;S();e=g.length;if(h>=0&&h<=(e-0|0)){f.oc=Q(d.data,0,h);a.so=f;}else{b=new O;Bm(b);E(b);}}i=a.so;b=new L;b.ob=H(16);F(b,b.n$,C(219));c=b.n$;if(i===null)i=C(2);F(b,c,i);f=new P;d=b.ob;g=d.data;h=b.n$;S();e=g.length;if(h>=0&&h<=(e-0|0)){f.oc=Q(d.data,0,h);return f;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let LA=(a,b,c,d)=>{let e,f,g,h;b:{a.vO=1;if(b>=(d-1|0)){if(b>=0&&b<c.oc.length){e=c.oc.charCodeAt(b);break b;}c=new Ba;c.n_=1;c.oa=1;E(c);}d=b+1|0;if(b>=0&&b<c.oc.length){e=c.oc.charCodeAt(b);if(d>=0&&d<c.oc.length){f=c.oc.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=H(2);h=g.data;h[0]=e;h[1]=f;e=ACx(g,0,h.length);a.vO=2;}break b;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}return e;}
let APn=(a,b)=>{let c,d,e,f,g,h,i;b:{if(b instanceof Hj){b=b;if(b.so===null){c=new L;c.ob=H(16);d=0;while(d<b.ug){e=Go(b.ui.data[d]);f=e.data.length;My(c,c.n$,e,0,f);d=d+1|0;}g=new P;e=c.ob;h=e.data;i=c.n$;S();f=h.length;if(i>=0&&i<=(f-0|0)){g.oc=Q(e.data,0,i);b.so=g;}else{b=new O;Bm(b);E(b);}}g=b.so;if(a.so===null){b=new L;b.ob=H(16);d=0;while(d<a.ug){e=Go(a.ui.data[d]);f=e.data.length;My(b,b.n$,e,0,f);d=d+1|0;}c=new P;e=b.ob;h=e.data;f=b.n$;S();i=h.length;if(f>=0&&f<=(i-0|0)){c.oc=Q(e.data,0,f);a.so=c;}else
{b=new O;Bm(b);E(b);}}b=a.so;if(g===b)d=1;else if(!(b instanceof P))d=0;else{b=b;d=g.oc!==b.oc?0:1;}if(!d){d=0;break b;}}d=1;}return d;}
let A66=(a,b)=>{return 1;}
let AAZ=G(Hj);
let Bgm=(a,b)=>{let c=new AAZ();A2F(c,a,b);return c;}
let A2F=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.vO=1;a.ui=b;a.ug=c;}
let AFZ=G(Hj);
let Ba1=(a,b)=>{let c=new AFZ();AZg(c,a,b);return c;}
let AZg=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.vO=1;a.ui=b;a.ug=c;}
let RA=G(EE);
let AZZ=(a,b,c,d)=>{let e;while(true){e=a.oV.hE(b,c,d);if(e<=0)break;b=e;}return a.oh.hE(b,c,d);}
let SO=G(EE);
let A47=(a,b,c,d)=>{let e;e=a.oV.hE(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.oV.hE(e,c,d);if(b<=e)break;e=b;}b=e;}return a.oh.hE(b,c,d);}
let Jf=G(EE);
let BgD=(a,b,c)=>{let d=new Jf();AXk(d,a,b,c);return d;}
let AXk=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;}
let A8h=(a,b,c,d)=>{let e;if(!a.oV.h$(d))return a.oh.hE(b,c,d);e=a.oV.hE(b,c,d);if(e>=0)return e;return a.oh.hE(b,c,d);}
let A9q=(a,b)=>{a.oh=b;a.oV.gr(b);}
let O1=G(Jf);
let AO8=(a,b,c,d)=>{let e;e=a.oV.hE(b,c,d);if(e<=0)e=b;return a.oh.hE(e,c,d);}
let A5E=(a,b)=>{a.oh=b;}
function Hy(){let a=this;EE.call(a);a.sr=null;a.rb=0;}
let BiJ=(a,b,c,d,e)=>{let f=new Hy();ABJ(f,a,b,c,d,e);return f;}
let ABJ=(a,b,c,d,e,f)=>{let g,h;g=Y;Y=g+1|0;h=new Bx;h.ob=H(20);a.ow=(N(h,h.n$,g,10)).l();a.oh=d;a.oV=c;a.pJ=e;a.sr=b;a.rb=f;}
let A$U=(a,b,c,d)=>{let e,f,g,h;e=a.rb;e=d.se.data[e];if(!a.oV.h$(d))return a.oh.hE(b,c,d);if(e>=a.sr.tR)return a.oh.hE(b,c,d);f=a.rb;e=e+1|0;d.se.data[f]=e;g=a.oV.hE(b,c,d);if(g>=0){b=a.rb;d.se.data[b]=0;return g;}g=a.rb;e=e+(-1)|0;h=d.se.data;h[g]=e;if(e>=a.sr.tT)return a.oh.hE(b,c,d);h[g]=0;return (-1);}
let AVe=a=>{return TT(a.sr);}
let Oj=G(Hy);
let AOw=(a,b,c,d)=>{let e,f,g;e=0;f=a.sr.tR;b:{while(true){g=a.oV.hE(b,c,d);if(g<=b)break b;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.sr.tT)return (-1);return a.oh.hE(b,c,d);}
let PJ=G(EE);
let AV1=(a,b,c,d)=>{let e;if(!a.oV.h$(d))return a.oh.hE(b,c,d);e=a.oh.hE(b,c,d);if(e>=0)return e;return a.oV.hE(b,c,d);}
let ADM=G(Jf);
let Bad=(a,b,c)=>{let d=new ADM();ASi(d,a,b,c);return d;}
let ASi=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;}
let AKP=(a,b,c,d)=>{let e;if(!a.oV.h$(d))return a.oh.hE(b,c,d);e=a.oh.hE(b,c,d);if(e<0)e=a.oV.hE(b,c,d);return e;}
let QC=G(Hy);
let BiK=(a,b,c,d,e)=>{let f=new QC();Y9(f,a,b,c,d,e);return f;}
let Y9=(a,b,c,d,e,f)=>{let g,h;g=Y;Y=g+1|0;h=new Bx;h.ob=H(20);a.ow=(N(h,h.n$,g,10)).l();a.oh=d;a.oV=c;a.pJ=e;a.sr=b;a.rb=f;}
let AXZ=(a,b,c,d)=>{let e,f,g;e=a.rb;f=d.se.data[e];if(!a.oV.h$(d))return a.oh.hE(b,c,d);g=a.sr;if(f>=g.tR){e=a.rb;d.se.data[e]=0;return a.oh.hE(b,c,d);}if(f<g.tT){e=a.rb;d.se.data[e]=f+1|0;e=a.oV.hE(b,c,d);}else{e=a.oh.hE(b,c,d);if(e>=0){b=a.rb;d.se.data[b]=0;return e;}e=a.rb;d.se.data[e]=f+1|0;e=a.oV.hE(b,c,d);}return e;}
let X$=G(FE);
let Bar=(a,b,c)=>{let d=new X$();AJI(d,a,b,c);return d;}
let AJI=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;}
let A$F=(a,b,c,d)=>{let e;e=d.oX;if(e>b)return a.oh.hT(b,e,c,d);return a.oh.hE(b,c,d);}
let AT7=(a,b,c,d)=>{let e;e=d.oX;if(a.oh.hT(b,e,c,d)>=0)return b;return (-1);}
let A6I=a=>{return C(220);}
function ACv(){FE.call(this);this.z$=null;}
let A_C=(a,b,c,d)=>{let e=new ACv();A6B(e,a,b,c,d);return e;}
let A6B=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);a.ow=(N(g,g.n$,f,10)).l();a.oh=c;a.oV=b;a.pJ=d;a.z$=e;}
let ASd=(a,b,c,d)=>{let e,f,g;e=d.oX;f=b;b:{while(true){if(f>=e){f=(-1);break b;}g=a.z$;if(f<0)break;if(f>=c.oc.length)break;if(g.ik(c.oc.charCodeAt(f)))break b;f=f+1|0;}c=new Ba;c.n_=1;c.oa=1;E(c);}if(f>=0)e=f;if(e>b)return a.oh.hT(b,e,c,d);return a.oh.hE(b,c,d);}
let AII=(a,b,c,d)=>{let e,f,g,h,i;e=d.oX;f=a.oh.hB(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.z$;if(g<0)break;if(g>=c.oc.length)break;if(h.ik(c.oc.charCodeAt(g)))break a;g=g+1|0;}c=new Ba;c.n_=1;c.oa=1;E(c);}if(g>=0)e=g;g=a.oh.hT(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;h:{while(true){if(i<b){i=(-1);break h;}d=a.z$;if(i<0)break;if(i>=c.oc.length)break;if(d.ik(c.oc.charCodeAt(i)))break h;i=i+(-1)|0;}c=new Ba;c.n_=1;c.oa=1;E(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;}
let A7H=a=>{return C(221);}
let G5=G();
let A3h=null;let ALC=null;let SE=b=>{let c;if(!(b&1)){c=ALC;if(c!==null)return c;c=new Uw;ALC=c;return c;}c=A3h;if(c!==null)return c;c=new Uv;A3h=c;return c;}
let AIm=G(EB);
let Bb5=(a,b,c)=>{let d=new AIm();ASV(d,a,b,c);return d;}
let ASV=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;a.o_=b;}
let AJw=(a,b,c,d)=>{let e;b:{while(true){if((b+a.o_.hQ()|0)>d.oX)break b;e=a.o_.hR(b,c);if(e<1)break;b=b+e|0;}}return a.oh.hE(b,c,d);}
let AAu=G(Hc);
let Bc4=(a,b,c)=>{let d=new AAu();A9_(d,a,b,c);return d;}
let A9_=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;a.o_=b;}
let AQ2=(a,b,c,d)=>{let e;if((b+a.o_.hQ()|0)<=d.oX){e=a.o_.hR(b,c);if(e>=1)b=b+e|0;}return a.oh.hE(b,c,d);}
let ACK=G(Hf);
let Bcp=(a,b,c,d)=>{let e=new ACK();A40(e,a,b,c,d);return e;}
let A40=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);a.ow=(N(g,g.n$,f,10)).l();a.oh=d;a.oV=c;a.pJ=e;a.o_=c;a.uY=b;}
let A7Y=(a,b,c,d)=>{let e,f,g,h,i;e=a.uY;f=e.tT;g=e.tR;h=0;while(true){if(h>=f){n:{while(true){if(h>=g)break n;if((b+a.o_.hQ()|0)>d.oX)break n;i=a.o_.hR(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.oh.hE(b,c,d);}if((b+a.o_.hQ()|0)>d.oX){d.qJ=1;return (-1);}i=a.o_.hR(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let ADH=G(EB);
let Bf9=(a,b,c)=>{let d=new ADH();AWJ(d,a,b,c);return d;}
let AWJ=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;a.o_=b;}
let AR8=(a,b,c,d)=>{let e;while(true){e=a.oh.hE(b,c,d);if(e>=0)break;if((b+a.o_.hQ()|0)<=d.oX){e=a.o_.hR(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
let AF8=G(Hc);
let BfP=(a,b,c)=>{let d=new AF8();A1g(d,a,b,c);return d;}
let A1g=(a,b,c,d)=>{let e,f;e=Y;Y=e+1|0;f=new Bx;f.ob=H(20);a.ow=(N(f,f.n$,e,10)).l();a.oh=c;a.oV=b;a.pJ=d;a.o_=b;}
let AJG=(a,b,c,d)=>{let e;e=a.oh.hE(b,c,d);if(e>=0)return e;return a.oV.hE(b,c,d);}
let XZ=G(Hf);
let BaP=(a,b,c,d)=>{let e=new XZ();A6p(e,a,b,c,d);return e;}
let A6p=(a,b,c,d,e)=>{let f,g;f=Y;Y=f+1|0;g=new Bx;g.ob=H(20);a.ow=(N(g,g.n$,f,10)).l();a.oh=d;a.oV=c;a.pJ=e;a.o_=c;a.uY=b;}
let A78=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.uY;f=e.tT;g=e.tR;h=0;while(true){if(h>=f){n:{while(true){i=a.oh.hE(b,c,d);if(i>=0)break;if((b+a.o_.hQ()|0)<=d.oX){i=a.o_.hR(b,c);b=b+i|0;h=h+1|0;}if(i<1)break n;if(h>g)break n;}return i;}return (-1);}if((b+a.o_.hQ()|0)>d.oX){d.qJ=1;return (-1);}j=a.o_.hR(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
let PB=G(CL);
let Bck=()=>{let a=new PB();AMc(a);return a;}
let AMc=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.ob=H(20);a.ow=(N(c,c.n$,b,10)).l();}
let A30=(a,b,c,d)=>{if(b&&!(d.vJ&&b==d.qD))return (-1);return a.oh.hE(b,c,d);}
let A22=(a,b)=>{return 0;}
let AQ4=a=>{return C(222);}
function W0(){CL.call(this);this.Gb=0;}
let A8N=a=>{let b=new W0();AOZ(b,a);return b;}
let AOZ=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.Gb=b;}
let AYP=(a,b,c,d)=>{let e,f,g;if(b>=d.oX)e=32;else if(b>=0&&b<c.oc.length)e=c.oc.charCodeAt(b);else{c=new Ba;c.n_=1;c.oa=1;E(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.oc.length)f=c.oc.charCodeAt(f);else{c=new Ba;c.n_=1;c.oa=1;E(c);}}g=d.At?0:d.qD;return (e!=32&&!S1(a,e,b,g,c)?0:1)^(f!=32&&!S1(a,f,b-1|0,g,c)?0:1)^a.Gb?(-1):a.oh.hE(b,c,d);}
let AY7=(a,b)=>{return 0;}
let A$R=a=>{return C(223);}
let S1=(a,b,c,d,e)=>{let f;b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}f=1;break b;}f=0;}if(!f&&b!=95){n:{e:{if(Dt(b)==6)while(true){c=c+(-1)|0;if(c<d)break e;if(c<0)break n;if(c>=e.oc.length)break n;bf:{l:{f=e.oc.charCodeAt(c);switch(Dt(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break l;default:break l;}b=1;break bf;}b=0;}if(b)return 0;if(Dt(f)!=6)return 1;}}return 1;}e=new Ba;e.n_=1;e.oa=1;E(e);}return 0;}
let ACu=G(CL);
let A__=()=>{let a=new ACu();AT1(a);return a;}
let AT1=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.ob=H(20);a.ow=(N(c,c.n$,b,10)).l();}
let AOY=(a,b,c,d)=>{if(b!=d.wL)return (-1);return a.oh.hE(b,c,d);}
let AWx=(a,b)=>{return 0;}
let AYz=a=>{return C(224);}
function Q7(){CL.call(this);this.xY=0;}
let Bb9=a=>{let b=new Q7();AHa(b,a);return b;}
let AHa=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.xY=b;}
let A6Q=(a,b,c,d)=>{let e,f,g;e=!d.vJ?c.oc.length:d.oX;if(b>=e){f=a.xY;d.ps.data[f]=0;return a.oh.hE(b,c,d);}k:{e=e-b|0;if(e==2){if(b>=0&&b<c.oc.length){if(c.oc.charCodeAt(b)!=13)break k;g=b+1|0;if(g>=0&&g<c.oc.length){if(c.oc.charCodeAt(g)!=10)break k;f=a.xY;d.ps.data[f]=0;return a.oh.hE(b,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}}r:{bf:{if(e==1){if(b>=0&&b<c.oc.length){f=c.oc.charCodeAt(b);if(f==10)break r;if(f==13)break r;if(f==133)break r;if((f|1)!=8233)break bf;else break r;}c=new Ba;c.n_
=1;c.oa=1;E(c);}}return (-1);}e=a.xY;d.ps.data[e]=0;return a.oh.hE(b,c,d);}
let AZO=(a,b)=>{let c,d,e;c=a.xY;d=b.ps.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let A4A=a=>{return C(225);}
let AHu=G(CL);
let Bce=()=>{let a=new AHu();AON(a);return a;}
let AON=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.ob=H(20);a.ow=(N(c,c.n$,b,10)).l();}
let A51=(a,b,c,d)=>{if(b<(!d.At?d.oX:c.oc.length))return (-1);d.qJ=1;d.JI=1;return a.oh.hE(b,c,d);}
let AWS=(a,b)=>{return 0;}
let ANM=a=>{return C(226);}
function AB5(){CL.call(this);this.He=null;}
let Bf7=a=>{let b=new AB5();A6U(b,a);return b;}
let A6U=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.He=b;}
let AZA=(a,b,c,d)=>{let e,f;b:{a:{d:{if(b!=d.oX){if(!b)break a;if(d.vJ&&b==d.qD)break a;e=a.He;f=b-1|0;if(f>=0&&f<c.oc.length){f=c.oc.charCodeAt(f);if(b<0)break b;if(b>=c.oc.length)break b;if(!e.im(f,c.oc.charCodeAt(b)))break d;else break a;}c=new Ba;c.n_=1;c.oa=1;E(c);}}return (-1);}return a.oh.hE(b,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let ANz=(a,b)=>{return 0;}
let AYj=a=>{return C(227);}
let AAC=G(C2);
let BcB=()=>{let a=new AAC();A5R(a);return a;}
let A5R=a=>{let b,c;b=Y;Y=b+1|0;c=new Bx;c.ob=H(20);a.ow=(N(c,c.n$,b,10)).l();}
let AV4=(a,b,c,d)=>{let e,f,g,h,i;e=d.oX;f=b+1|0;if(f>e){d.qJ=1;return (-1);}if(b>=0&&b<c.oc.length){g=B9(c.oc.charCodeAt(b)&64512,55296);h=g?0:1;o:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.oc.length){h=c.oc.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break o;else return a.oh.hE(i,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}}}return a.oh.hE(f,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AMi=a=>{return C(228);}
let AZb=(a,b)=>{a.oh=b;}
let A5O=a=>{return (-2147483602);}
let AZa=(a,b)=>{return 1;}
function WA(){C2.call(this);this.Da=null;}
let BbU=a=>{let b=new WA();ALv(b,a);return b;}
let ALv=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.Da=b;}
let A5W=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.oX;f=b+1|0;if(f>e){d.qJ=1;return (-1);}if(b>=0&&b<c.oc.length){g=c.oc.charCodeAt(b);h=B9(g&64512,55296);i=h?0:1;o:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.oc.length){i=c.oc.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break o;else return a.Da.ik(((g&1023)<<10|i&1023)+65536|0)?(-1):a.oh.hE(j,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}}}return a.Da.ik(g)?(-1):a.oh.hE(f,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AZX=a=>{return C(229);}
let A7G=(a,b)=>{a.oh=b;}
let AIo=a=>{return (-2147483602);}
let AWk=(a,b)=>{return 1;}
function AHp(){CL.call(this);this.BM=0;}
let Ba8=a=>{let b=new AHp();A1y(b,a);return b;}
let A1y=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.BM=b;}
let APs=(a,b,c,d)=>{let e,f;e=!d.vJ?c.oc.length:d.oX;if(b>=e){e=a.BM;d.ps.data[e]=0;return a.oh.hE(b,c,d);}n:{if((e-b|0)==1){if(b>=0&&b<c.oc.length){if(c.oc.charCodeAt(b)!=10)break n;else{f=a.BM;d.ps.data[f]=1;return a.oh.hE(b+1|0,c,d);}}c=new Ba;c.n_=1;c.oa=1;E(c);}}return (-1);}
let A1x=(a,b)=>{let c,d,e;c=a.BM;d=b.ps.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AP5=a=>{return C(225);}
function AFm(){CL.call(this);this.Ay=0;}
let BaL=a=>{let b=new AFm();A1$(b,a);return b;}
let A1$=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.Ay=b;}
let ARN=(a,b,c,d)=>{let e;if((!d.vJ?c.oc.length-b|0:d.oX-b|0)<=0){e=a.Ay;d.ps.data[e]=0;return a.oh.hE(b,c,d);}if(b>=0&&b<c.oc.length){if(c.oc.charCodeAt(b)!=10)return (-1);e=a.Ay;d.ps.data[e]=1;return a.oh.hE(b+1|0,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let A1m=(a,b)=>{let c,d,e;c=a.Ay;d=b.ps.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AJh=a=>{return C(230);}
function ABB(){CL.call(this);this.xx=0;}
let A_l=a=>{let b=new ABB();A$X(b,a);return b;}
let A$X=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.xx=b;}
let A2Q=(a,b,c,d)=>{let e,f,g;e=!d.vJ?c.oc.length-b|0:d.oX-b|0;if(!e){e=a.xx;d.ps.data[e]=0;return a.oh.hE(b,c,d);}k:{if(e<2){if(b>=0&&b<c.oc.length){f=c.oc.charCodeAt(b);g=97;break k;}c=new Ba;c.n_=1;c.oa=1;E(c);}if(b>=0&&b<c.oc.length){f=c.oc.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.oc.length){g=c.oc.charCodeAt(e);break k;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.xx;d.ps.data[e]=0;return a.oh.hE(b,c,d);case 13:if(g!=10){e=a.xx;d.ps.data[e]=0;return a.oh.hE(b,
c,d);}e=a.xx;d.ps.data[e]=0;return a.oh.hE(b,c,d);default:}return (-1);}
let ALB=(a,b)=>{let c,d,e;c=a.xx;d=b.ps.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let ANB=a=>{return C(231);}
function Jb(){let a=this;C2.call(a);a.xG=0;a.u5=0;}
let BgG=(a,b)=>{let c=new Jb();ALj(c,a,b);return c;}
let ALj=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.xG=b;a.u5=c;}
let AJB=(a,b,c,d)=>{let e,f,g,h,i;e=Jt(a,d);if(e!==null&&(b+e.oc.length|0)<=d.oX){f=0;k:{n:{c:{o:{while(true){if(f>=e.oc.length){g=a.u5;d.ps.data[g]=e.oc.length;return a.oh.hE(b+e.oc.length|0,c,d);}if(f<0)break c;if(f>=e.oc.length)break c;h=e.oc.charCodeAt(f);i=b+f|0;if(i<0)break o;if(i>=c.oc.length)break o;if(h!=c.oc.charCodeAt(i)){if(f<0)break k;if(f>=e.oc.length)break k;g=IM(e.oc.charCodeAt(f));if(i<0)break n;if(i>=c.oc.length)break n;if(g!=c.oc.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new Ba;c.n_=1;c.oa
=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}return (-1);}
let A6Z=(a,b)=>{a.oh=b;}
let Jt=(a,b)=>{let c,d,e,f,g;c=a.xG;d=b.pF.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.sy.oc.length?Cw(b.sy,f,g):null;}
let AXR=a=>{let b,c,d,e,f,g,h;b=a.pC;c=new L;c.ob=H(16);F(c,c.n$,C(232));N(c,c.n$,b,10);d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let AS$=(a,b)=>{let c,d,e;c=a.u5;d=b.ps.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AHr=G(Jb);
let Bdb=(a,b)=>{let c=new AHr();A9i(c,a,b);return c;}
let A9i=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.xG=b;a.u5=c;}
let ALH=(a,b,c,d)=>{let e,f,g;e=Jt(a,d);if(e!==null&&(b+e.oc.length|0)<=d.oX){f=!KK(c,e,b)?(-1):e.oc.length;if(f<0)return (-1);g=a.u5;d.ps.data[g]=f;return a.oh.hE(b+f|0,c,d);}return (-1);}
let AUX=(a,b,c,d)=>{let e,f,g;e=Jt(a,d);f=d.qD;if(e!==null&&(b+e.oc.length|0)<=f){while(true){if(b>f)return (-1);g=MR(c,e,b);if(g<0)return (-1);if(a.oh.hE(g+e.oc.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);}
let AJi=(a,b,c,d,e)=>{let f,g;f=Jt(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Pa(d,f,c);if(g<0)break a;if(g<b)break a;if(a.oh.hE(g+f.oc.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
let A4V=(a,b)=>{return 1;}
let A9o=a=>{let b,c,d,e,f,g,h;b=a.pC;c=new L;c.ob=H(16);F(c,c.n$,C(233));N(c,c.n$,b,10);d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
function AD6(){Jb.call(this);this.H6=0;}
let BaM=(a,b)=>{let c=new AD6();ANl(c,a,b);return c;}
let ANl=(a,b,c)=>{let d,e;d=Y;Y=d+1|0;e=new Bx;e.ob=H(20);a.ow=(N(e,e.n$,d,10)).l();a.xG=b;a.u5=c;}
let AQf=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.xG;f=d.pF.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.sy.oc.length?Cw(d.sy,h,i):null;if(j!==null&&(b+j.oc.length|0)<=d.oX){i=0;o:{e:{while(true){if(i>=j.oc.length){e=a.u5;d.ps.data[e]=j.oc.length;return a.oh.hE(b+j.oc.length|0,c,d);}if(i<0)break o;if(i>=j.oc.length)break o;e=j.oc.charCodeAt(i);if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}e=C1(CJ,e)&65535;if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value)
:null)));}g=C1(CA,e)&65535;h=b+i|0;if(h<0)break e;if(h>=c.oc.length)break e;e=c.oc.charCodeAt(h);if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}e=C1(CJ,e)&65535;if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}if(g!=(C1(CA,e)&65535))break;i=i+1|0;}return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}return (-1);}
let AY8=a=>{let b,c,d,e,f,g,h;b=a.H6;c=new L;c.ob=H(16);F(c,c.n$,C(234));N(c,c.n$,b,10);d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let Lf=G(Bx);
let TC=(a,b,c,d,e)=>{AFs(a,b,c,d,e);return a;}
let AM7=(a,b,c,d,e)=>{let f,g,h,i;Bp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.ob.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AYW=(a,b,c,d)=>{let e,f,g,h,i;e=a.n$;Bp(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.ob.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let AZn=(a,b)=>{R7(a,b);}
let A8y=(a,b,c)=>{Bp(a,b,b+1|0);a.ob.data[b]=c;return a;}
let AXq=(a,b,c)=>{F(a,b,c);return a;}
function AEH(){let a=this;C9.call(a);a.qf=null;a.Eb=null;a.Di=null;}
let BaS=a=>{let b=new AEH();A0l(b,a);return b;}
let A0l=(a,b)=>{let c,d,e;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;a.qf=Bi(b);c=b.n$;a.o7=c;a.Eb=A5N(c);a.Di=A5N(a.o7);c=0;b:{a:{while(c<(a.o7-1|0)){b=a.Eb;d=a.qf;if(c<0)break b;if(c>=d.oc.length)break b;PC(b,d.oc.charCodeAt(c),(a.o7-c|0)-1|0);b=a.Di;d=a.qf;e=(a.o7-c|0)-1|0;if(e<0)break a;if(e>=d.oc.length)break a;PC(b,d.oc.charCodeAt(e),(a.o7-c|0)-1|0);c=c+1|0;}return;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let AL6=(a,b,c)=>{let d,e,f,g;d=0;b:{a:{d:{while(d<a.o7){e=d+b|0;if(e<0)break b;if(e>=c.oc.length)break b;f=c.oc.charCodeAt(e);g=a.qf;if(d<0)break a;if(d>=g.oc.length)break a;if(f!=g.oc.charCodeAt(d)){b=0;break d;}d=d+1|0;}b=1;}return !b?(-1):a.o7;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AYK=(a,b,c,d)=>{let e,f;e=d.oX;while(true){if(b>e)return (-1);f=AHv(a,c,b,e);if(f<0)return (-1);if(a.oh.hE(f+a.o7|0,c,d)>=0)break;b=f+1|0;}return f;}
let A1C=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AG$(a,d,b,c);if(c<0)return (-1);if(a.oh.hE(c+a.o7|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
let AR0=a=>{let b,c,d,e,f,g,h;b=a.qf;c=new L;c.ob=H(16);F(c,c.n$,C(235));d=c.n$;if(b===null)b=C(2);F(c,d,b);b=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){b.oc=Q(e.data,0,g);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let AN_=(a,b)=>{let c,d,e;if(b instanceof FG){c=b.qH;b=a.qf;if(0<b.oc.length)return c!=b.oc.charCodeAt(0)?0:1;b=new Ba;b.n_=1;b.oa=1;E(b);}if(b instanceof Fz){b=b;d=Cw(a.qf,0,1);b=b.rH;if(0>=d.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}return (!b.h7(d.oc.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof E5)){if(!(b instanceof F_))return 1;g:{if(a.qf.oc.length>1){e=b.we;b=a.qf;if(0>=b.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}c=b.oc.charCodeAt(0);b=a.qf;if(1>=b.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}if(e==(((c&1023)
<<10|b.oc.charCodeAt(1)&1023)+65536|0)){c=1;break g;}}c=0;}return c;}b=b;d=a.qf;if(0>=d.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}w:{m:{if(!b.h7(d.oc.charCodeAt(0))){if(a.qf.oc.length<=1)break m;d=a.qf;if(0>=d.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}c=d.oc.charCodeAt(0);d=a.qf;if(1>=d.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}if(!b.h7(((c&1023)<<10|d.oc.charCodeAt(1)&1023)+65536|0))break m;}c=1;break w;}c=0;}return c;}
let AHv=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.qf;f=a.o7-1|0;if(f>=0&&f<e.oc.length){g=e.oc.charCodeAt(f);d:{k:{n:{while(true){f=a.o7;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break n;if(f>=b.oc.length)break n;h=b.oc.charCodeAt(f);if(h==g){f=0;bf:{while(f<a.o7){i=f+c|0;if(i<0)break d;if(i>=b.oc.length)break d;j=b.oc.charCodeAt(i);e=a.qf;if(f<0)break k;if(f>=e.oc.length)break k;if(j!=e.oc.charCodeAt(f)){f=0;break bf;}f=f+1|0;}f=1;}if(f)break;}c=c+TA(a.Eb,h)|0;}return c;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_
=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let AG$=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.qf;if(0>=e.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}f=e.oc.charCodeAt(0);g=(b.oc.length-d|0)-a.o7|0;if(g<=0)d=d+g|0;k:{n:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.oc.length)break c;h=b.oc.charCodeAt(d);if(h==f){g=0;l:{while(g<a.o7){i=g+d|0;if(i<0)break k;if(i>=b.oc.length)break k;j=b.oc.charCodeAt(i);e=a.qf;if(g<0)break n;if(g>=e.oc.length)break n;if(j!=e.oc.charCodeAt(g)){g=0;break l;}g=g+1|0;}g=1;}if(g)break;}d=d-TA(a.Di,h)|0;}return d;}b=new Ba;b.n_=
1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
function N4(){C9.call(this);this.zh=null;}
let AQq=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{while(true){if(d>=a.zh.oc.length)return a.zh.oc.length;e=a.zh;if(d<0)break b;if(d>=e.oc.length)break b;f=e.oc.charCodeAt(d);g=b+d|0;if(g<0)break a;if(g>=c.oc.length)break a;h=c.oc.charCodeAt(g);if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}h=C1(CJ,h)&65535;if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}if(f!=(C1(CA,h)&65535))break;d=d+1|0;}return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_
=1;c.oa=1;E(c);}
let AOm=a=>{let b,c,d,e,f,g,h;b=a.zh;c=new L;c.ob=H(16);F(c,c.n$,C(236));d=c.n$;if(b===null)b=C(2);F(c,d,b);b=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){b.oc=Q(e.data,0,g);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
function VV(){C9.call(this);this.w$=null;}
let BgT=a=>{let b=new VV();A18(b,a);return b;}
let A18=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;a.w$=Bi(b);a.o7=b.n$;}
let A7Z=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{d:{k:{while(true){if(d>=a.w$.oc.length)return a.w$.oc.length;e=a.w$;if(d<0)break d;if(d>=e.oc.length)break d;f=e.oc.charCodeAt(d);g=b+d|0;if(g<0)break k;if(g>=c.oc.length)break k;if(f!=c.oc.charCodeAt(g)){e=a.w$;if(d<0)break b;if(d>=e.oc.length)break b;h=IM(e.oc.charCodeAt(d));if(g<0)break a;if(g>=c.oc.length)break a;if(h!=c.oc.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_
=1;c.oa=1;E(c);}
let A8V=a=>{let b,c,d,e,f,g,h;b=a.w$;c=new L;c.ob=H(16);F(c,c.n$,C(237));d=c.n$;if(b===null)b=C(2);F(c,d,b);b=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){b.oc=Q(e.data,0,g);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let AIl=G();
let It=G();
let VO=null;let X7=null;let A6v=null;let ATi=()=>{ATi=Bj(It);AMs();}
let AHH=(a,b)=>{let c,d,e,f,g;c=0;while(true){ATi();d=A6v.data;if(c>=d.length){e=new Mx;e.n_=1;e.oa=1;e.od=C(43);e.II=C(43);e.JM=b;E(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof P))g=0;else{f=f;g=b.oc!==f.oc?0:1;}if(g)break;c=c+1|0;}return d[1];}
let AMs=()=>{VO=Bcd();X7=BeA();A6v=R(Lz(D),[R(D,[C(238),BcJ()]),R(D,[C(239),A_g()]),R(D,[C(240),BfT()]),R(D,[C(241),Bgk()]),R(D,[C(242),X7]),R(D,[C(243),BeT()]),R(D,[C(244),BaV()]),R(D,[C(245),Bdg()]),R(D,[C(246),Bc$()]),R(D,[C(247),A_x()]),R(D,[C(248),Bae()]),R(D,[C(249),Bdi()]),R(D,[C(250),BbK()]),R(D,[C(251),A_b()]),R(D,[C(252),Bf_()]),R(D,[C(253),Bab()]),R(D,[C(254),BeR()]),R(D,[C(255),BdU()]),R(D,[C(256),BeS()]),R(D,[C(257),A_G()]),R(D,[C(258),Bgv()]),R(D,[C(259),BdE()]),R(D,[C(260),Bbh()]),R(D,[C(261),
BfR()]),R(D,[C(262),BfO()]),R(D,[C(263),Bcs()]),R(D,[C(264),A_E()]),R(D,[C(265),Bfx()]),R(D,[C(266),VO]),R(D,[C(267),Bbr()]),R(D,[C(268),Bdh()]),R(D,[C(269),VO]),R(D,[C(270),A$7()]),R(D,[C(271),X7]),R(D,[C(272),Bay()]),R(D,[C(273),Bn(0,127)]),R(D,[C(274),Bn(128,255)]),R(D,[C(275),Bn(256,383)]),R(D,[C(276),Bn(384,591)]),R(D,[C(277),Bn(592,687)]),R(D,[C(278),Bn(688,767)]),R(D,[C(279),Bn(768,879)]),R(D,[C(280),Bn(880,1023)]),R(D,[C(281),Bn(1024,1279)]),R(D,[C(282),Bn(1280,1327)]),R(D,[C(283),Bn(1328,1423)]),R(D,
[C(284),Bn(1424,1535)]),R(D,[C(285),Bn(1536,1791)]),R(D,[C(286),Bn(1792,1871)]),R(D,[C(287),Bn(1872,1919)]),R(D,[C(288),Bn(1920,1983)]),R(D,[C(289),Bn(2304,2431)]),R(D,[C(290),Bn(2432,2559)]),R(D,[C(291),Bn(2560,2687)]),R(D,[C(292),Bn(2688,2815)]),R(D,[C(293),Bn(2816,2943)]),R(D,[C(294),Bn(2944,3071)]),R(D,[C(295),Bn(3072,3199)]),R(D,[C(296),Bn(3200,3327)]),R(D,[C(297),Bn(3328,3455)]),R(D,[C(298),Bn(3456,3583)]),R(D,[C(299),Bn(3584,3711)]),R(D,[C(300),Bn(3712,3839)]),R(D,[C(301),Bn(3840,4095)]),R(D,[C(302),
Bn(4096,4255)]),R(D,[C(303),Bn(4256,4351)]),R(D,[C(304),Bn(4352,4607)]),R(D,[C(305),Bn(4608,4991)]),R(D,[C(306),Bn(4992,5023)]),R(D,[C(307),Bn(5024,5119)]),R(D,[C(308),Bn(5120,5759)]),R(D,[C(309),Bn(5760,5791)]),R(D,[C(310),Bn(5792,5887)]),R(D,[C(311),Bn(5888,5919)]),R(D,[C(312),Bn(5920,5951)]),R(D,[C(313),Bn(5952,5983)]),R(D,[C(314),Bn(5984,6015)]),R(D,[C(315),Bn(6016,6143)]),R(D,[C(316),Bn(6144,6319)]),R(D,[C(317),Bn(6400,6479)]),R(D,[C(318),Bn(6480,6527)]),R(D,[C(319),Bn(6528,6623)]),R(D,[C(320),Bn(6624,
6655)]),R(D,[C(321),Bn(6656,6687)]),R(D,[C(322),Bn(7424,7551)]),R(D,[C(323),Bn(7552,7615)]),R(D,[C(324),Bn(7616,7679)]),R(D,[C(325),Bn(7680,7935)]),R(D,[C(326),Bn(7936,8191)]),R(D,[C(327),Bn(8192,8303)]),R(D,[C(328),Bn(8304,8351)]),R(D,[C(329),Bn(8352,8399)]),R(D,[C(330),Bn(8400,8447)]),R(D,[C(331),Bn(8448,8527)]),R(D,[C(332),Bn(8528,8591)]),R(D,[C(333),Bn(8592,8703)]),R(D,[C(334),Bn(8704,8959)]),R(D,[C(335),Bn(8960,9215)]),R(D,[C(336),Bn(9216,9279)]),R(D,[C(337),Bn(9280,9311)]),R(D,[C(338),Bn(9312,9471)]),
R(D,[C(339),Bn(9472,9599)]),R(D,[C(340),Bn(9600,9631)]),R(D,[C(341),Bn(9632,9727)]),R(D,[C(342),Bn(9728,9983)]),R(D,[C(343),Bn(9984,10175)]),R(D,[C(344),Bn(10176,10223)]),R(D,[C(345),Bn(10224,10239)]),R(D,[C(346),Bn(10240,10495)]),R(D,[C(347),Bn(10496,10623)]),R(D,[C(348),Bn(10624,10751)]),R(D,[C(349),Bn(10752,11007)]),R(D,[C(350),Bn(11008,11263)]),R(D,[C(351),Bn(11264,11359)]),R(D,[C(352),Bn(11392,11519)]),R(D,[C(353),Bn(11520,11567)]),R(D,[C(354),Bn(11568,11647)]),R(D,[C(355),Bn(11648,11743)]),R(D,[C(356),
Bn(11776,11903)]),R(D,[C(357),Bn(11904,12031)]),R(D,[C(358),Bn(12032,12255)]),R(D,[C(359),Bn(12272,12287)]),R(D,[C(360),Bn(12288,12351)]),R(D,[C(361),Bn(12352,12447)]),R(D,[C(362),Bn(12448,12543)]),R(D,[C(363),Bn(12544,12591)]),R(D,[C(364),Bn(12592,12687)]),R(D,[C(365),Bn(12688,12703)]),R(D,[C(366),Bn(12704,12735)]),R(D,[C(367),Bn(12736,12783)]),R(D,[C(368),Bn(12784,12799)]),R(D,[C(369),Bn(12800,13055)]),R(D,[C(370),Bn(13056,13311)]),R(D,[C(371),Bn(13312,19893)]),R(D,[C(372),Bn(19904,19967)]),R(D,[C(373),Bn(19968,
40959)]),R(D,[C(374),Bn(40960,42127)]),R(D,[C(375),Bn(42128,42191)]),R(D,[C(376),Bn(42752,42783)]),R(D,[C(377),Bn(43008,43055)]),R(D,[C(378),Bn(44032,55203)]),R(D,[C(379),Bn(55296,56191)]),R(D,[C(380),Bn(56192,56319)]),R(D,[C(381),Bn(56320,57343)]),R(D,[C(382),Bn(57344,63743)]),R(D,[C(383),Bn(63744,64255)]),R(D,[C(384),Bn(64256,64335)]),R(D,[C(385),Bn(64336,65023)]),R(D,[C(386),Bn(65024,65039)]),R(D,[C(387),Bn(65040,65055)]),R(D,[C(388),Bn(65056,65071)]),R(D,[C(389),Bn(65072,65103)]),R(D,[C(390),Bn(65104,65135)]),
R(D,[C(391),Bn(65136,65279)]),R(D,[C(392),Bn(65280,65519)]),R(D,[C(29),Bn(0,1114111)]),R(D,[C(393),Bdk()]),R(D,[C(394),CV(0,1)]),R(D,[C(395),KU(62,1)]),R(D,[C(396),CV(1,1)]),R(D,[C(397),CV(2,1)]),R(D,[C(398),CV(3,0)]),R(D,[C(399),CV(4,0)]),R(D,[C(400),CV(5,1)]),R(D,[C(401),KU(448,1)]),R(D,[C(402),CV(6,1)]),R(D,[C(403),CV(7,0)]),R(D,[C(404),CV(8,1)]),R(D,[C(405),KU(3584,1)]),R(D,[C(406),CV(9,1)]),R(D,[C(407),CV(10,1)]),R(D,[C(408),CV(11,1)]),R(D,[C(409),KU(28672,0)]),R(D,[C(410),CV(12,0)]),R(D,[C(411),CV(13,
0)]),R(D,[C(412),CV(14,0)]),R(D,[C(413),Bet(983040,1,1)]),R(D,[C(414),CV(15,0)]),R(D,[C(415),CV(16,1)]),R(D,[C(416),CV(18,1)]),R(D,[C(417),Ba5(19,0,1)]),R(D,[C(418),KU(1643118592,1)]),R(D,[C(419),CV(20,0)]),R(D,[C(420),CV(21,0)]),R(D,[C(421),CV(22,0)]),R(D,[C(422),CV(23,0)]),R(D,[C(423),CV(24,1)]),R(D,[C(424),KU(2113929216,1)]),R(D,[C(425),CV(25,1)]),R(D,[C(426),CV(26,0)]),R(D,[C(427),CV(27,0)]),R(D,[C(428),CV(28,1)]),R(D,[C(429),CV(29,0)]),R(D,[C(430),CV(30,0)])]);}
function RF(){C9.call(this);this.C9=0;}
let ATH=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.oc.length){e=c.oc.charCodeAt(b);if(d>=0&&d<c.oc.length){d=c.oc.charCodeAt(d);b=a.C9;d=((e&1023)<<10|d&1023)+65536|0;if(CJ===null){if(B$===null)B$=E_();CJ=De(Di((B$.value!==null?Bv(B$.value):null)));}d=C1(CJ,d);if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}return b!=C1(CA,d)?(-1):2;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let A$Q=a=>{let b,c,d,e,f,g;b=new P;c=Go(a.C9);d=c.data;S();b.oc=Q(c.data,0,d.length);e=new L;e.ob=H(16);F(e,e.n$,C(217));F(e,e.n$,b);b=new P;c=e.ob;d=c.data;f=e.n$;g=d.length;if(f>=0&&f<=(g-0|0)){b.oc=Q(c.data,0,f);return b;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
function KE(){C2.call(this);this.te=0;}
let Bbu=a=>{let b=new KE();AKS(b,a);return b;}
let AKS=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.te=b;}
let A5_=(a,b)=>{a.oh=b;}
let Sv=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.oX){d.qJ=1;return (-1);}if(b>=0&&b<c.oc.length){k:{f=c.oc.charCodeAt(b);if(b>d.qD){b=b-1|0;if(b>=0&&b<c.oc.length){if(!((c.oc.charCodeAt(b)&64512)!=55296?0:1))break k;return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}}if(a.te!=f)return (-1);return a.oh.hE(e,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let AN9=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof P)){e=d.oX;a:{while(true){if(b>e){b=(-1);break a;}if(Sv(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.qD;g=d.oX;c:{while(true){if(b>=g)return (-1);h=E9(c,a.te,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break c;if(b>=c.oc.length)break c;if((c.oc.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.oh;b=h+1|0;if(i.hE(b,c,d)>=0)break;}return h;}c=new Ba;c.n_=1;c.oa=1;E(c);}
let A0z=(a,b,c,d,e)=>{let f,g;if(!(d instanceof P)){a:{while(true){if(c<b){c=(-1);break a;}if(Sv(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.qD;c:{o:{while(true){if(c<b)return (-1);g=GW(d,a.te,c);if(g<0)break o;if(g<b)break o;if(g>f){c=g-1|0;if(c<0)break c;if(c>=d.oc.length)break c;if((d.oc.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.oh.hE(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Ba;d.n_=1;d.oa=1;E(d);}
let AUo=a=>{let b,c,d,e,f,g,h;b=a.te;c=new L;c.ob=H(16);d=c.n$;Bp(c,d,d+1|0);e=c.ob;f=e.data;f[d]=b;g=new P;d=c.n$;S();h=f.length;if(d>=0&&d<=(h-0|0)){g.oc=Q(e.data,0,d);return g;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let AJc=(a,b)=>{if(b instanceof FG)return 0;if(b instanceof Fz)return 0;if(b instanceof E5)return 0;if(b instanceof F_)return 0;if(b instanceof Ns)return 0;if(!(b instanceof KE))return 1;return b.te!=a.te?0:1;}
let AUy=(a,b)=>{return 1;}
function Ns(){C2.call(this);this.uq=0;}
let A2U=a=>{let b=new Ns();ARJ(b,a);return b;}
let ARJ=(a,b)=>{let c,d;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.uq=b;}
let AZl=(a,b)=>{a.oh=b;}
let N8=(a,b,c,d)=>{let e,f,g;e=d.oX;f=b+1|0;e=B9(f,e);if(e>0){d.qJ=1;return (-1);}if(b>=0&&b<c.oc.length){k:{g=c.oc.charCodeAt(b);if(e<0){if(f>=0&&f<c.oc.length){if(!((c.oc.charCodeAt(f)&64512)!=56320?0:1))break k;return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}}if(a.uq!=g)return (-1);return a.oh.hE(f,c,d);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let A6t=(a,b,c,d)=>{let e,f;if(!(c instanceof P)){e=d.oX;a:{while(true){if(b>e){b=(-1);break a;}if(N8(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.oX;c:{while(true){if(b>=e)return (-1);f=E9(c,a.uq,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break c;if(b>=c.oc.length)break c;if((c.oc.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.oh.hE(b,c,d)>=0)break;}return f;}c=new Ba;c.n_=1;c.oa=1;E(c);}
let ATD=(a,b,c,d,e)=>{let f,g;if(!(d instanceof P)){a:{while(true){if(c<b){c=(-1);break a;}if(N8(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.oX;c:{o:{while(true){if(c<b)return (-1);g=GW(d,a.uq,c);if(g<0)break o;if(g<b)break o;c=g+1|0;if(c<f){if(c<0)break c;if(c>=d.oc.length)break c;if((d.oc.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.oh.hE(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Ba;d.n_=1;d.oa=1;E(d);}
let A$c=a=>{let b,c,d,e,f,g,h;b=a.uq;c=new L;c.ob=H(16);d=c.n$;Bp(c,d,d+1|0);e=c.ob;f=e.data;f[d]=b;g=new P;d=c.n$;S();h=f.length;if(d>=0&&d<=(h-0|0)){g.oc=Q(e.data,0,d);return g;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let AL9=(a,b)=>{if(b instanceof FG)return 0;if(b instanceof Fz)return 0;if(b instanceof E5)return 0;if(b instanceof F_)return 0;if(b instanceof KE)return 0;if(!(b instanceof Ns))return 1;return b.uq!=a.uq?0:1;}
let A6F=(a,b)=>{return 1;}
function F_(){let a=this;C9.call(a);a.v6=0;a.vw=0;a.we=0;}
let A_v=a=>{let b=new F_();AWh(b,a);return b;}
let AWh=(a,b)=>{let c,d,e;c=Y;Y=c+1|0;d=new Bx;d.ob=H(20);a.ow=(N(d,d.n$,c,10)).l();a.o7=1;a.o7=2;a.we=b;e=(Go(b)).data;a.v6=e[0];a.vw=e[1];}
let A7l=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.oc.length){e=c.oc.charCodeAt(b);if(d>=0&&d<c.oc.length){d=c.oc.charCodeAt(d);return a.v6==e&&a.vw==d?2:(-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}
let A5w=(a,b,c,d)=>{let e,f,g,h;if(c instanceof P){e=d.oX;a:{while(b<e){b=E9(c,a.v6,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.oc.length)break a;f=c.oc.charCodeAt(b);if(a.vw==f&&a.oh.hE(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Ba;c.n_=1;c.oa=1;E(c);}g=d.oX;e:{r:{bf:{while(true){if(b>g){b=(-1);break bf;}if((b+a.o7|0)>d.oX){d.qJ=1;h=(-1);}else{h=b+1|0;if(b<0)break e;if(b>=c.oc.length)break e;e=c.oc.charCodeAt(b);if(h<0)break r;if(h>=c.oc.length)break r;f=c.oc.charCodeAt(h);h
=a.v6==e&&a.vw==f?2:(-1);h=h<0?(-1):a.oh.hE(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new Ba;Bm(c);E(c);}c=new Ba;Bm(c);E(c);}
let AKW=(a,b,c,d,e)=>{let f,g,h;if(d instanceof P){a:{d:{while(true){if(c<b)return (-1);c=GW(d,a.vw,c)+(-1)|0;if(c<0)break d;if(c<b)break d;f=a.v6;if(c<0)break a;if(c>=d.oc.length)break a;if(f==d.oc.charCodeAt(c)&&a.oh.hE(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Ba;d.n_=1;d.oa=1;E(d);}e:{r:{bf:{while(true){if(c<b){c=(-1);break bf;}if((c+a.o7|0)>e.oX){e.qJ=1;f=(-1);}else{g=c+1|0;if(c<0)break e;if(c>=d.oc.length)break e;h=d.oc.charCodeAt(c);if(g<0)break r;if(g>=d.oc.length)break r;g=d.oc.charCodeAt(g);f
=a.v6==h&&a.vw==g?2:(-1);f=f<0?(-1):a.oh.hE(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Ba;Bm(d);E(d);}d=new Ba;Bm(d);E(d);}
let A9r=a=>{let b,c,d,e,f,g,h;b=a.v6;c=a.vw;d=new L;d.ob=H(16);e=d.n$;Bp(d,e,e+1|0);d.ob.data[e]=b;b=d.n$;Bp(d,b,b+1|0);f=d.ob;g=f.data;g[b]=c;h=new P;c=d.n$;S();e=g.length;if(c>=0&&c<=(e-0|0)){h.oc=Q(f.data,0,c);return h;}d=new O;d.n_=1;d.oa=1;Bu(d);E(d);}
let A7a=(a,b)=>{if(b instanceof F_)return b.we!=a.we?0:1;if(b instanceof E5)return b.h7(a.we);if(b instanceof FG)return 0;if(!(b instanceof Fz))return 1;return 0;}
let Uv=G(G5);
let AK5=(a,b)=>{return b!=10?0:1;}
let AS6=(a,b,c)=>{return b!=10?0:1;}
let Uw=G(G5);
let A7_=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
let AVE=(a,b,c)=>{b:{a:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break a;if(c==10)break a;}b=1;break b;}b=0;}return b;}
function ZQ(){let a=this;D.call(a);a.DL=null;a.Cu=null;a.yL=0;a.Gt=0;}
let A5N=a=>{let b=new ZQ();AOW(b,a);return b;}
let AOW=(a,b)=>{let c,d;while(true){c=a.yL;if(b<c)break;a.yL=c<<1|1;}d=c<<1|1;a.yL=d;d=d+1|0;a.DL=X(d);a.Cu=X(d);a.Gt=b;}
let PC=(a,b,c)=>{let d,e,f,g;d=0;e=a.yL;f=b&e;while(true){g=a.DL.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.Cu.data[f]=c;}
let TA=(a,b)=>{let c,d,e,f;c=a.yL;d=b&c;e=0;while(true){f=a.DL.data[d];if(!f)break;if(f==b)return a.Cu.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.Gt;}
let AC6=G();
let Wx=G();
let A95=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new L7;d=H(b.oc.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.D7=d;f=IJ(c);d=X(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=IJ(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=IJ(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.oc.length)break;e[f]=b.oc.charCodeAt(f);f=f+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}
let Di=b=>{let c,d,e,f,g,h,i,j,k,l;c=new L7;d=H(b.oc.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.D7=d;f=IJ(c);d=X(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+IJ(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=IJ(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.oc.length)break;e[f]=b.oc.charCodeAt(f);f=f+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}
let De=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=X(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new V;l.n_=1;l.oa=1;E(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new UD;l.FD=b;l.Hj=c;return l;}
let Nf=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
let AWE=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=Bt(J_,16384);d=c.data;e=BW(16384).data;f=0;g=0;h=0;i=0;a:{d:{k:{while(true){if(i>=b.oc.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new CN;b.oE=j;k=b;j.classObject=k;}}b=EP(b);if(b===null){b=new Dv;b.n_=1;b.oa=1;E(b);}if(b===BH(CO)){b=new V;b.n_=1;b.oa=1;E(b);}if(g<0){b=new D$;b.n_=1;b.oa=1;E(b);}k=EN(b.oE,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break k;if(i>=b.oc.length)break k;l
=Nf(b.oc.charCodeAt(i));if(l==64){i=i+1|0;if(i<0)break d;if(i>=b.oc.length)break d;l=Nf(b.oc.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.oc.length)break a;m=m|C7(n,Nf(b.oc.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.oc.length)break;m=Nf(b.oc.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new J_;l=h+f|0;q=BW(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.Eg=h;j.Dg=l;j.Ej=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f
=0;}else{n=f+m|0;o=e.length;if(n<o)s=g;else{s=g+1|0;j=new J_;t=h+f|0;q=BW(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.Eg=h;j.Dg=t;j.Ej=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let D$=G(B0);
let V1=G();
function L7(){let a=this;D.call(a);a.D7=null;a.G6=0;}
let ADX=G();
let IJ=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.D7.data;f=b.G6;b.G6=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+C7(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
let Nm=G(BN);
let Bcd=()=>{let a=new Nm();AOx(a);return a;}
let AOx=a=>{return;}
let A2J=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return DG(Ca(b,9,13),32);}
let MO=G(BN);
let BeA=()=>{let a=new MO();AUr(a);return a;}
let AUr=a=>{return;}
let A4k=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(b,48,57);}
let ZM=G(BN);
let BcJ=()=>{let a=new ZM();ANP(a);return a;}
let ANP=a=>{return;}
let A7I=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(b,97,122);}
let Z9=G(BN);
let A_g=()=>{let a=new Z9();AO2(a);return a;}
let AO2=a=>{return;}
let AUz=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(b,65,90);}
let Z$=G(BN);
let BfT=()=>{let a=new Z$();AKc(a);return a;}
let AKc=a=>{return;}
let AMH=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(b,0,127);}
let Nj=G(BN);
let Bgk=()=>{let a=new Nj();ALI(a);return a;}
let ALI=a=>{return;}
let ALr=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(Ca(b,97,122),65,90);}
let LZ=G(Nj);
let BeT=()=>{let a=new LZ();AOI(a);return a;}
let AOI=a=>{return;}
let ANi=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(Ca(Ca(b,97,122),65,90),48,57);}
let ABl=G(BN);
let BaV=()=>{let a=new ABl();A4$(a);return a;}
let A4$=a=>{return;}
let A2c=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(Ca(Ca(b,33,64),91,96),123,126);}
let N1=G(LZ);
let Bdg=()=>{let a=new N1();ASN(a);return a;}
let ASN=a=>{return;}
let AWW=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(Ca(Ca(Ca(Ca(Ca(b,97,122),65,90),48,57),33,64),91,96),123,126);}
let AEB=G(N1);
let Bc$=()=>{let a=new AEB();AT2(a);return a;}
let AT2=a=>{return;}
let AQT=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return DG(Ca(Ca(Ca(Ca(Ca(Ca(b,97,122),65,90),48,57),33,64),91,96),123,126),32);}
let Yx=G(BN);
let A_x=()=>{let a=new Yx();A70(a);return a;}
let A70=a=>{return;}
let A0h=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return DG(DG(b,32),9);}
let WU=G(BN);
let Bae=()=>{let a=new WU();A9I(a);return a;}
let A9I=a=>{return;}
let AQN=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return DG(Ca(b,0,31),127);}
let ACT=G(BN);
let Bdi=()=>{let a=new ACT();AKv(a);return a;}
let AKv=a=>{return;}
let AVL=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(Ca(Ca(b,48,57),97,102),65,70);}
let AGR=G(BN);
let BbK=()=>{let a=new AGR();AYv(a);return a;}
let AYv=a=>{return;}
let A5J=a=>{let b,c;b=new TH;b.Jm=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let ABr=G(BN);
let A_b=()=>{let a=new ABr();AS2(a);return a;}
let AS2=a=>{return;}
let AW5=a=>{let b,c;b=new RL;b.Jr=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let AGk=G(BN);
let Bf_=()=>{let a=new AGk();AKg(a);return a;}
let AKg=a=>{return;}
let AOE=a=>{let b,c;b=new PR;b.Jc=a;BO();c=new BF;c.oq=X(64);b.ov=c;return b;}
let Zz=G(BN);
let Bab=()=>{let a=new Zz();AQP(a);return a;}
let AQP=a=>{return;}
let ATb=a=>{let b,c;b=new PQ;b.Il=a;BO();c=new BF;c.oq=X(64);b.ov=c;return b;}
let AAp=G(BN);
let BeR=()=>{let a=new AAp();ALF(a);return a;}
let ALF=a=>{return;}
let A0f=a=>{let b,c;b=new Q2;b.IB=a;BO();c=new BF;c.oq=X(64);b.ov=c;Jv(c,0,2048);b.pq=1;return b;}
let Wf=G(BN);
let BdU=()=>{let a=new Wf();AK1(a);return a;}
let AK1=a=>{return;}
let AMm=a=>{let b,c;b=new Sr;b.Jy=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let ABT=G(BN);
let BeS=()=>{let a=new ABT();AQm(a);return a;}
let AQm=a=>{return;}
let A9O=a=>{let b,c;b=new OB;b.IJ=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let AGt=G(BN);
let A_G=()=>{let a=new AGt();AQ6(a);return a;}
let AQ6=a=>{return;}
let AWU=a=>{let b,c;b=new S4;b.Iu=a;BO();c=new BF;c.oq=X(64);b.ov=c;return b;}
let Z0=G(BN);
let Bgv=()=>{let a=new Z0();A2x(a);return a;}
let A2x=a=>{return;}
let APw=a=>{let b,c;b=new RJ;b.HV=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let ADo=G(BN);
let BdE=()=>{let a=new ADo();AJn(a);return a;}
let AJn=a=>{return;}
let AMu=a=>{let b,c;b=new RK;b.Iv=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let YC=G(BN);
let Bbh=()=>{let a=new YC();ALa(a);return a;}
let ALa=a=>{return;}
let A1G=a=>{let b,c;b=new Oy;b.IA=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let AA0=G(BN);
let BfR=()=>{let a=new AA0();API(a);return a;}
let API=a=>{return;}
let A3F=a=>{let b,c;b=new SG;b.JN=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let AGE=G(BN);
let BfO=()=>{let a=new AGE();A5B(a);return a;}
let A5B=a=>{return;}
let AUT=a=>{let b,c;b=new SJ;b.Ip=a;BO();c=new BF;c.oq=X(64);b.ov=c;return b;}
let XK=G(BN);
let Bcs=()=>{let a=new XK();AK3(a);return a;}
let AK3=a=>{return;}
let ASF=a=>{let b,c;b=new T2;b.JB=a;BO();c=new BF;c.oq=X(64);b.ov=c;return b;}
let W_=G(BN);
let A_E=()=>{let a=new W_();A7q(a);return a;}
let A7q=a=>{return;}
let ARo=a=>{let b,c;b=new Tx;b.HW=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let ABp=G(BN);
let Bfx=()=>{let a=new ABp();A2q(a);return a;}
let A2q=a=>{return;}
let A7E=a=>{let b,c;b=new Ob;b.JY=a;BO();c=new BF;c.oq=X(64);b.ov=c;b.pq=1;return b;}
let K_=G(BN);
let Bbr=()=>{let a=new K_();AMC(a);return a;}
let AMC=a=>{return;}
let APU=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return DG(Ca(Ca(Ca(b,97,122),65,90),48,57),95);}
let AHl=G(K_);
let Bdh=()=>{let a=new AHl();A2C(a);return a;}
let A2C=a=>{return;}
let AQ8=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;b=FM(DG(Ca(Ca(Ca(b,97,122),65,90),48,57),95),1);b.pq=1;return b;}
let AEL=G(Nm);
let A$7=()=>{let a=new AEL();AVc(a);return a;}
let AVc=a=>{return;}
let AYG=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;b=FM(DG(Ca(b,9,13),32),1);b.pq=1;return b;}
let W7=G(MO);
let Bay=()=>{let a=new W7();A3m(a);return a;}
let A3m=a=>{return;}
let AN0=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;b=FM(Ca(b,48,57),1);b.pq=1;return b;}
function ACY(){let a=this;BN.call(a);a.Fy=0;a.Hb=0;}
let Bn=(a,b)=>{let c=new ACY();A9N(c,a,b);return c;}
let A9N=(a,b,c)=>{a.Fy=b;a.Hb=c;}
let APX=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(b,a.Fy,a.Hb);}
let ADh=G(BN);
let Bdk=()=>{let a=new ADh();AVP(a);return a;}
let AVP=a=>{return;}
let AVq=a=>{let b,c;b=new Df;BO();c=new BF;c.oq=X(64);b.ov=c;c=new BF;c.oq=X(2);b.oz=c;return Ca(Ca(b,65279,65279),65520,65533);}
function AEm(){let a=this;BN.call(a);a.EK=0;a.DT=0;a.GQ=0;}
let CV=(a,b)=>{let c=new AEm();ALA(c,a,b);return c;}
let Ba5=(a,b,c)=>{let d=new AEm();AVz(d,a,b,c);return d;}
let ALA=(a,b,c)=>{a.DT=c;a.EK=b;}
let AVz=(a,b,c,d)=>{a.GQ=d;a.DT=c;a.EK=b;}
let A1i=a=>{let b,c,d;b=new J1;c=a.EK;BO();d=new BF;d.oq=X(64);b.ov=d;b.Az=c;if(a.GQ)Jv(d,0,2048);b.pq=a.DT;return b;}
function AEC(){let a=this;BN.call(a);a.Dw=0;a.Cw=0;a.E5=0;}
let KU=(a,b)=>{let c=new AEC();AMv(c,a,b);return c;}
let Bet=(a,b,c)=>{let d=new AEC();AWV(d,a,b,c);return d;}
let AMv=(a,b,c)=>{a.Cw=c;a.Dw=b;}
let AWV=(a,b,c,d)=>{a.E5=d;a.Cw=c;a.Dw=b;}
let AIw=a=>{let b,c,d;b=new Tl;c=a.Dw;BO();d=new BF;d.oq=X(64);b.ov=d;b.Az=c;if(a.E5)Jv(d,0,2048);b.pq=a.Cw;return b;}
function UD(){let a=this;D.call(a);a.FD=null;a.Hj=null;}
function J_(){let a=this;D.call(a);a.Eg=0;a.Dg=0;a.Ej=null;}
let ACi=G();
let Br=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=b.length;if(d<=e){while(d<e){f=d+1|0;b[d]=c;d=f;}return;}g=new V;g.n_=1;g.oa=1;E(g);}
let A6d=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new V;f.n_=1;f.oa=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;}
let A7j=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new V;f.n_=1;f.oa=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=B9(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;}
let AGV=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;k:{while(true){if(e>=d){e=(-1);break k;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
let Z5=G();
function Pm(){let a=this;Ew.call(a);a.Fh=null;a.Ff=0;a.yG=null;}
let AT9=(a,b)=>{return;}
let AMz=(a,b)=>{let c,d,e,f,g,h,i,j;if(BX===null){c=new Dp;c.p5=DY;b=new L;b.ob=H(16);c.o6=b;c.p2=H(32);c.p_=0;Do();c.p7=Du;BX=c;}b=BX;c=a.Fh;d=new L;d.ob=H(16);F(d,d.n$,C(431));e=d.n$;if(c===null)c=C(2);F(d,e,c);f=new P;g=d.ob;h=g.data;i=d.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);c=b.o6;F(c,c.n$,f);i=c.n$;Bp(c,i,i+1|0);c.ob.data[i]=10;Dy(b);return;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let V7=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(J$(Hz(C(127),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){bg:{b=a.yG;b.Eu=b.z2.oj;if(a.Ff){e=0;while(true){b=a.yG;c=b.z2;f=B9(e,c.oj);if(f>=0)break bg;if(f>=0){g=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,e,10);F(b,b.n$,C(38));e=c.oj;N(b,b.n$,e,10);c=new P;d=b.ob;h=d.data;f=b.n$;S();i=h.length;if(f>=0&&f<=(i-0|0)){c.oc=Q(d.data,0,f);g.n_=1;g.oa=1;g.od=c;E(g);}b=new O;Bm(b);E(b);}XW(b,c.os.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(J$(Hz(C(125),0),j,0)).data;if
(h.length!=4)break;k=h[0];l=AEU(h[1]);b=h[2];if(b===null){b=new CU;b.n_=1;b.oa=1;b.od=C(76);E(b);}m=AAt(b,0,b.oc.length,10);n=h[3];F9();o=Ih;if(k===C(432))i=1;else if(!(C(432) instanceof P))i=0;else{b=C(432);i=k.oc!==b.oc?0:1;}if(i)o=I1;if(k===C(433))i=1;else if(!(C(433) instanceof P))i=0;else{b=C(433);i=k.oc!==b.oc?0:1;}if(i)o=IL;if(k===C(434))i=1;else if(!(C(434) instanceof P))i=0;else{b=C(434);i=k.oc!==b.oc?0:1;}if(i)o=Hv;if(k===C(271))i=1;else if(!(C(271) instanceof P))i=0;else{b=C(271);i=k.oc!==b.oc?0:
1;}if(i)o=Q8;if(o===Hv&&!KD.HB)m=M;g=new Ty;g.En=l;g.Fm=o;g.HK=m;g.GN=n;B2(a.yG.GZ,l,l);Dk(a.yG.z2,g);f=f+1|0;}b=new Bc;b.n_=1;b.oa=1;b.od=C(435);E(b);}
let ARf=(a,b,c)=>{return V7(a,b,c);}
let CM=G(BV);
let A_O=null;let Bfc=null;let A_5=null;let A_4=null;let A_P=null;let A_J=null;let A_B=null;let A_1=null;let A_u=null;let BaX=null;let AZx=()=>{AZx=Bj(CM);AXT();}
let AXT=()=>{let b,c,d,e,f,g,h,i,j;b=new UO;AZx();b.ol=C(436);b.oi=0;A_O=b;c=new UP;c.ol=C(437);c.oi=1;Bfc=c;d=new US;d.ol=C(438);d.oi=2;A_5=d;e=new UT;e.ol=C(439);e.oi=3;A_4=e;f=new UQ;f.ol=C(440);f.oi=4;A_P=f;g=new UR;g.ol=C(441);g.oi=5;A_J=g;h=new UL;h.ol=C(442);h.oi=6;A_B=h;i=new UM;i.ol=C(443);i.oi=7;A_1=i;j=new UK;j.ol=C(444);j.oi=8;A_u=j;BaX=R(CM,[b,c,d,e,f,g,h,i,j]);}
function Gt(){let a=this;Ic.call(a);a.tY=0;a.q6=null;}
let AH9=G(0);
let AY5=b=>{let c,d;if(b===C(445))c=1;else if(!(C(445) instanceof P))c=0;else{d=C(445);c=b.oc!==d.oc?0:1;}c:{if(!c){if(b===C(446))c=1;else if(!(C(446) instanceof P))c=0;else{d=C(446);c=b.oc!==d.oc?0:1;}if(!c){if(b===C(447))c=1;else if(!(C(447) instanceof P))c=0;else{d=C(447);c=b.oc!==d.oc?0:1;}if(!c){if(b===C(448))c=1;else if(!(C(448) instanceof P))c=0;else{d=C(448);c=b.oc!==d.oc?0:1;}if(!c){if(b===C(449))c=1;else if(!(C(449) instanceof P))c=0;else{d=C(449);c=b.oc!==d.oc?0:1;}if(!c){c=0;break c;}}}}}c=1;}return c;}
let AOu=b=>{let c,d;if(b===C(450))c=1;else if(!(C(450) instanceof P))c=0;else{d=C(450);c=b.oc!==d.oc?0:1;}c:{e:{if(c)break e;if(b===C(451))c=1;else if(!(C(451) instanceof P))c=0;else{d=C(451);c=b.oc!==d.oc?0:1;}if(c)break e;if(b===C(452))c=1;else if(!(C(452) instanceof P))c=0;else{d=C(452);c=b.oc!==d.oc?0:1;}if(c)break e;if(b===C(453))c=1;else if(!(C(453) instanceof P))c=0;else{d=C(453);c=b.oc!==d.oc?0:1;}if(c)break e;if(b===C(454))c=1;else if(!(C(454) instanceof P))c=0;else{d=C(454);c=b.oc!==d.oc?0:1;}if(c)break e;if
(b===C(455))c=1;else if(!(C(455) instanceof P))c=0;else{d=C(455);c=b.oc!==d.oc?0:1;}if(c)break e;if(b===C(456))c=1;else if(!(C(456) instanceof P))c=0;else{d=C(456);c=b.oc!==d.oc?0:1;}if(c)break e;if(b===C(457))c=1;else if(!(C(457) instanceof P))c=0;else{d=C(457);c=b.oc!==d.oc?0:1;}if(c)break e;if(b===C(458))c=1;else if(!(C(458) instanceof P))c=0;else{d=C(458);c=b.oc!==d.oc?0:1;}if(!c){c=0;break c;}}c=1;}return c;}
let Qr=G(0);
let ADf=G();
let A9H=(a,b,c)=>{a.iC(Bv(b),Em(c,"handleEvent"));}
let ARB=(a,b)=>{return !!a.iD(b);}
let AZm=(a,b,c)=>{a.dN(Bv(b),Em(c,"handleEvent"));}
let A3g=(a,b,c,d)=>{a.iE(Bv(b),Em(c,"handleEvent"),d?1:0);}
let A8e=(a,b,c,d)=>{a.iF(Bv(b),Em(c,"handleEvent"),d?1:0);}
function Qj(){let a=this;D.call(a);a.Ee=null;a.DP=null;a.zT=null;a.E0=0;a.AF=null;}
let AFO=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.Ee;F9();if(e!==IL&&e!==Hv){if(e===I1){b=window.document.createElement("img");d=Cr(Bv(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new J9;d.q4=c;d.EB=e;d.Do=b;}else if(e===Ih)d=Bv(c.result);}else{e=c.result;b=new Int8Array(e);d=new J9;d.q4=b;d.EB=e;}if(d!==null){Jl(a.AF.GP,a.Ee,a.DP,d);Dk(a.zT,a.DP);if(a.zT.oj==a.E0){b=a.AF.E_;d=new Od;d.Dd=a;Dk(b.yk,d);}}}
let A4x=(a,b)=>{AFO(a,b);}
function Eq(){BV.call(this);this.zn=null;}
let I1=null;let Hv=null;let Ih=null;let IL=null;let Q8=null;let AH3=null;let F9=()=>{F9=Bj(Eq);A5Z();}
let A5Z=()=>{let b,c,d,e,f;b=new Eq;F9();b.ol=C(459);b.oi=0;b.zn=C(432);I1=b;c=new Eq;c.ol=C(460);c.oi=1;c.zn=C(434);Hv=c;d=new Eq;d.ol=C(461);d.oi=2;d.zn=C(462);Ih=d;e=new Eq;e.ol=C(463);e.oi=3;e.zn=C(433);IL=e;f=new Eq;f.ol=C(464);f.oi=4;f.zn=C(271);Q8=f;AH3=R(Eq,[b,c,d,e,f]);}
let M$=G();
let W2=null;let AKp=null;let AHd=b=>{let c,d,e,f,g,h,i,j,k,l;c=new L;c.ob=H(16);d=AGG();e=0;f=AKp.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.n$;if(i>0){Bp(c,i,i+1|0);c.ob.data[i]=32;}j=d.data[e];F(c,c.n$,j);}e=e+1|0;h=h+1|0;}j=new P;d=c.ob;k=d.data;e=c.n$;S();l=k.length;if(e>=0&&e<=(l-0|0)){j.oc=Q(d.data,0,e);return j;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let AGG=()=>{if(W2===null)W2=R(P,[C(465),C(466),C(467),C(468),C(469),C(470),C(471),C(472),C(473),C(474),C(475),C(476)]);return W2;}
let AB1=()=>{AKp=E2([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
let LY=G();
let PI=G(0);
function I3(){let a=this;LY.call(a);a.rq=null;a.Jb=null;a.x6=0;a.BE=0;a.tW=null;a.Dz=null;}
let AJY=a=>{let b,c,d,e,f,g,h;b=new L;b.ob=H(16);c=AHd(O_(a.x6,a.BE));F(b,b.n$,c);d=b.n$;if(d>0){Bp(b,d,d+1|0);b.ob.data[d]=32;}c=a.rq;if(c.oQ===null)c.oQ=Bv(c.oE.$meta.name);c=c.oQ;F(b,b.n$,c);d=b.n$;Bp(b,d,d+1|0);b.ob.data[d]=40;e=a.tW.t();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.n$;Bp(b,h,h+1|0);b.ob.data[h]=44;}c=g[f];if(c.oQ===null)c.oQ=Bv(c.oE.$meta.name);c=c.oQ;F(b,b.n$,c);f=f+1|0;}d=b.n$;Bp(b,d,d+1|0);g=b.ob;e=g.data;e[d]=41;c=new P;d=b.n$;S();h=e.length;if(d>=0&&d<=(h-0|0)){c.oc=Q(g.data,
0,d);return c;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let AGY=(a,b)=>{let c,d,e,f,g;if(a.x6&1){c=new LS;c.n_=1;c.oa=1;E(c);}if(a.Dz===null){c=new Mt;c.n_=1;c.oa=1;E(c);}d=b.data;e=d.length;if(e!=a.tW.data.length){c=new V;c.n_=1;c.oa=1;E(c);}f=0;while(f<e){if(!(a.tW.data[f].oE.$meta.primitive?1:0)&&d[f]!==null){c=a.tW.data[f];g=d[f];c=c.oE;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&TZ(g.constructor,c)?1:0)){c=new V;c.n_=1;c.oa=1;E(c);}}if((a.tW.data[f].oE.$meta.primitive?1:0)&&d[f]===null){c=new V;c.n_=1;c.oa=1;E(c);}f=f+1|0;}c=b.data;g=new
(a.rq.oE);a.Dz.call(g,c);return g;}
let Ba=G(O);
function QW(){let a=this;BE.call(a);a.GG=null;a.JJ=null;}
let AMP=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.qB^Dl(a.GG,c):0;}
function QV(){let a=this;BE.call(a);a.HC=null;a.Ge=null;a.Ix=null;}
let AXx=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.qB^Dl(a.HC,c):0;return a.Ge.h7(b)&&!d?1:0;}
function OJ(){let a=this;BE.call(a);a.Bt=null;a.IR=null;}
let APL=(a,b)=>{return a.oS^Dl(a.Bt,b);}
let A1O=a=>{let b,c,d,e,f,g,h,i,j,k;b=new L;b.ob=H(16);c=Jh(a.Bt,0);while(c>=0){d=(Go(c)).data;e=0;f=d.length;g=b.n$;Bp(b,g,g+f|0);f=f+e|0;while(e<f){h=b.ob.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.n$;Bp(b,g,g+1|0);b.ob.data[g]=124;c=Jh(a.Bt,c+1|0);}e=b.n$;if(e>0)U2(b,e-1|0);k=new P;d=b.ob;h=d.data;e=b.n$;S();g=h.length;if(e>=0&&e<=(g-0|0)){k.oc=Q(d.data,0,e);return k;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
function Se(){let a=this;BE.call(a);a.G_=null;a.Jq=null;}
let A7o=(a,b)=>{return a.G_.h7(b);}
function Sc(){let a=this;BE.call(a);a.DU=0;a.GO=null;a.Ek=null;}
let ATG=(a,b)=>{return !(a.DU^Dl(a.Ek.oz,b))&&!(a.DU^a.Ek.si^a.GO.h7(b))?0:1;}
function Sd(){let a=this;BE.call(a);a.Cv=0;a.F_=null;a.Dm=null;}
let A4n=(a,b)=>{return !(a.Cv^Dl(a.Dm.oz,b))&&!(a.Cv^a.Dm.si^a.F_.h7(b))?1:0;}
function Sh(){let a=this;BE.call(a);a.HO=0;a.Ga=null;a.F9=null;a.I1=null;}
let A0G=(a,b)=>{return a.HO^(!a.Ga.h7(b)&&!a.F9.h7(b)?0:1);}
function Si(){let a=this;BE.call(a);a.FC=0;a.G8=null;a.G0=null;a.JU=null;}
let AIp=(a,b)=>{return a.FC^(!a.G8.h7(b)&&!a.G0.h7(b)?0:1)?0:1;}
function Sf(){let a=this;BE.call(a);a.Fs=null;a.JX=null;}
let ANQ=(a,b)=>{let c,d;c=a.Fs;d=c.pr;return d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b);}
function Sg(){let a=this;BE.call(a);a.HJ=null;a.I8=null;}
let AQu=(a,b)=>{let c,d;c=a.HJ;d=c.pr;return (d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b))?0:1;}
function Sj(){let a=this;BE.call(a);a.FE=null;a.G9=0;a.F1=null;}
let AU0=(a,b)=>{let c,d,e;c=a.FE;d=c.pr;e=d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b);return !e&&!(a.G9^Dl(a.F1.oz,b))?0:1;}
function Sk(){let a=this;BE.call(a);a.FQ=null;a.Ho=0;a.FJ=null;}
let AZ5=(a,b)=>{let c,d,e;c=a.FQ;d=c.pr;e=d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b);return !e&&!(a.Ho^Dl(a.FJ.oz,b))?1:0;}
function OI(){let a=this;BE.call(a);a.F0=0;a.HF=null;a.Gh=null;a.H2=null;}
let A$3=(a,b)=>{let c,d;b:{if(!(a.F0^a.HF.h7(b))){c=a.Gh;d=c.pr;if(!(d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b))){b=0;break b;}}b=1;}return b;}
function OW(){let a=this;BE.call(a);a.HL=0;a.E3=null;a.E6=null;a.If=null;}
let ANV=(a,b)=>{let c,d;b:{if(!(a.HL^a.E3.h7(b))){c=a.E6;d=c.pr;if(!(d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b))){b=1;break b;}}b=0;}return b;}
function OG(){let a=this;BE.call(a);a.GU=null;a.Ij=null;}
let ALN=(a,b)=>{let c,d;c=a.GU;d=c.pr;return d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b);}
function OH(){let a=this;BE.call(a);a.Fp=null;a.JT=null;}
let A1v=(a,b)=>{let c,d;c=a.Fp;d=c.pr;return (d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b))?0:1;}
function OM(){let a=this;BE.call(a);a.HN=null;a.FO=0;a.HT=null;}
let AO0=(a,b)=>{let c,d,e;c=a.HN;d=c.pr;e=d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b);return e&&a.FO^Dl(a.HT.oz,b)?1:0;}
function OF(){let a=this;BE.call(a);a.Ht=null;a.Ha=0;a.FN=null;}
let A8O=(a,b)=>{let c,d,e;c=a.Ht;d=c.pr;e=d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b);return e&&a.Ha^Dl(a.FN.oz,b)?0:1;}
function OK(){let a=this;BE.call(a);a.Hx=0;a.GF=null;a.FB=null;a.I0=null;}
let AY0=(a,b)=>{let c,d;b:{if(a.Hx^a.GF.h7(b)){c=a.FB;d=c.pr;if(d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b)){b=1;break b;}}b=0;}return b;}
function OL(){let a=this;BE.call(a);a.Hq=0;a.Gy=null;a.Hu=null;a.I_=null;}
let ASv=(a,b)=>{let c,d;b:{if(a.Hq^a.Gy.h7(b)){c=a.Hu;d=c.pr;if(d!==null?c.oS^d.h7(b):c.oS^Dl(c.oz,b)){b=0;break b;}}b=1;}return b;}
function Jr(){let a=this;D.call(a);a.s8=null;a.Dl=null;a.qg=null;a.qU=0;}
function E6(){let a=this;D.call(a);a.IO=null;a.sQ=M;a.tU=M;a.rf=null;a.GR=null;a.sq=null;a.re=0;a.sU=null;}
let PV=null;let CG=null;let DL=0;let GU=0;let AOL=null;let Dq=()=>{Dq=Bj(E6);AJ9();}
let AE4=a=>{let b,c,$$je;b:{a:{d:{k:{try{Dq();GU=GU+1|0;ZF(a);a.cV();}catch($$e){$$je=BG($$e);if($$je instanceof Ea){b=$$je;break k;}else{b=$$je;break d;}}b=a.rf;Hq(b);n:{try{NS(b);EU(b);break n;}catch($$e){$$je=BG($$e);c=$$je;}EU(b);E(c);}a.re=0;GU=GU-1|0;b=PV;if(CG!==b)CG=b;CG.tU=F4();break b;}try{V_(XI(a),a,b);break a;}catch($$e){$$je=BG($$e);b=$$je;}}c=a.rf;Hq(c);o:{try{NS(c);EU(c);break o;}catch($$e){$$je=BG($$e);b=$$je;}EU(c);E(b);}a.re=0;GU=GU-1|0;c=PV;if(CG!==c)CG=c;CG.tU=F4();E(b);}b=a.rf;Hq(b);r:{try
{NS(b);EU(b);break r;}catch($$e){$$je=BG($$e);c=$$je;}EU(b);E(c);}a.re=0;GU=GU-1|0;b=PV;if(CG!==b)CG=b;CG.tU=F4();}}
let ZF=b=>{Dq();if(CG!==b)CG=b;CG.tU=F4();}
let AIr=()=>{Dq();return CG;}
let Ki=b=>{let $p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Dq();$p=1;case 1:QY(b);if(HA()){break _;}return;default:DU();}}Cn().s(b,$p);}
let WZ=(b,c)=>{let d,e;Dq();d=CG;e=new OC;e.Gx=d;e.F8=c;e.JK=QQ(e,DB(b,I(2147483647))?2147483647:Z(b));d.GR=e;}
let XI=a=>{let b;b=a.IO;if(b!==null)return b;Dq();return AOL;}
let AJ9=()=>{let b,c,d;b=new E6;Dq();c=null;b.rf=new D;b.re=1;b.sq=C(477);b.sU=c;d=DL;DL=d+1|0;b.sQ=I(d);PV=b;CG=b;DL=1;GU=1;AOL=new PT;}
let QY=b=>{let thread=Cn();let javaThread=AIE();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;N3(javaThread);thread.resume();};callback.iP=e=>{thread.attribute=AUp(e);N3(javaThread);thread.resume();};callback=Yw(callback);thread.suspend(()=>{try {WZ(b,callback);;}catch(Rx){callback.iP(Rx);}});return null;}
let Cb=G(B0);
let Bfi=()=>{let a=new Cb();A8d(a);return a;}
let BaE=a=>{let b=new Cb();A6c(b,a);return b;}
let A8d=a=>{a.n_=1;a.oa=1;}
let A6c=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
let Km=G(B0);
function AGy(){let a=this;D.call(a);a.pF=null;a.ps=null;a.se=null;a.sy=null;a.r5=0;a.qY=0;a.qD=0;a.oX=0;a.sa=0;a.At=0;a.vJ=0;a.qJ=0;a.JI=0;a.wL=0;a.xs=0;}
let Bci=(a,b,c,d,e,f)=>{let g=new AGy();ARi(g,a,b,c,d,e,f);return g;}
let ARi=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.wL=(-1);h=e+1|0;a.r5=h;i=X(h*2|0);a.pF=i;j=X(g);k=j.data;a.ps=j;e=0;g=k.length;l=B9(e,g);if(l>0){b=new V;b.n_=1;b.oa=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.se=X(f);i=i.data;h=0;m=i.length;e=B9(h,m);if(e>0){b=new V;b.n_=1;b.oa=1;E(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.qY=0;a.xs=2;f=0;if(e>0){b=new V;b.n_=1;b.oa=1;E(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new V;b.n_=1;b.oa=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.sy=b;if(c>=0)
{a.qD=c;a.oX=d;}a.sa=a.qD;}
let AGB=G();
let Yr=b=>{bh:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break bh;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break bh;}return 67;}return 0;}
let Mc=b=>{if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
let ADC=G();
let GC=()=>{return BC(performance.now()*1000000.0);}
let ABV=G();
let Hh=G(0);
function Rr(){D.call(this);this.G1=null;}
let A89=a=>{ATP(a.G1);}
let UO=G(CM);
let UP=G(CM);
let US=G(CM);
let UT=G(CM);
let UQ=G(CM);
let UR=G(CM);
let UL=G(CM);
let UM=G(CM);
let UK=G(CM);
let Om=G(0);
let PT=G();
let V_=(a,b,c)=>{let d;if(Fb===null){d=new Dp;d.p5=Kk;b=new L;b.ob=H(16);d.o6=b;d.p2=H(32);d.p_=0;Do();d.p7=Du;Fb=d;}J3(c,Fb);}
let Xu=G();
let PH=G(0);
function S8(){D.call(this);this.v7=null;}
let Yw=b=>{let c;c=new S8;c.v7=b;return c;}
let A3l=(a,b)=>{a.v7.e(b);}
let AVX=(a,b)=>{a.v7.iP(b);}
function P_(){let a=this;D.call(a);a.Fk=null;a.Fl=null;a.Fi=0;a.Fj=null;}
let Oi=G(I2);
let ANa=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.oX;b:{while(true){if(b>f){b=e;break b;}g=a.pC;h=d.pF.data;i=g*2|0;j=h[i];h[i]=b;e=a.qX.hE(b,c,d);if(e>=0)break;i=a.pC;d.pF.data[i*2|0]=j;b=b+1|0;}}return b;}
let A$T=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;b:{while(true){if(c<b){c=f;break b;}g=a.pC;h=e.pF.data;i=g*2|0;j=h[i];h[i]=c;f=a.qX.hE(c,d,e);if(f>=0)break;i=a.pC;e.pF.data[i*2|0]=j;c=c+(-1)|0;}}return c;}
let ALw=a=>{return null;}
function AB$(){let a=this;D.call(a);a.Y0=0;a.Y2=0;a.U4=0;a.Wy=0;a.S5=null;}
function HT(){let a=this;E6.call(a);a.vb=0;a.r6=null;a.sB=null;a.sg=null;}
let AR$=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new QE;c.tP=a;c.xf=b;c=CK(c,"handleEvent");b.onreadystatechange=c;c=a.sg;d=a.sB;e=new Jm;e.DC=c;e.Bg=d;c=CK(e,"handleEvent");b.onprogress=c;d=a.r6;f=a.vb;b.open("GET",Cr(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
let Oc=G();
let A6T=null;let Bbv=()=>{Bbv=Bj(Oc);A7U();}
let A7U=()=>{let b,c;Kl();b=X((A8m.t()).data.length);c=b.data;A6T=b;c[AAU.oi]=1;c[Tt.oi]=2;}
let AHm=G();
let A32=(a,b,c)=>{a.f$(Bv(b),Em(c,"handleEvent"));}
let AQM=(a,b,c)=>{a.f_(Bv(b),Em(c,"handleEvent"));}
let AIO=(a,b,c,d)=>{a.ga(Bv(b),Em(c,"handleEvent"),d?1:0);}
let AIT=(a,b)=>{return !!a.gb(b);}
let A1U=(a,b,c,d)=>{a.gd(Bv(b),Em(c,"handleEvent"),d?1:0);}
let ID=G(0);
function Of(){let a=this;D.call(a);a.ux=null;a.C7=0;a.BK=null;a.Dx=null;a.xr=null;}
let Ro=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ux.readyState==4){if(a.ux.status==200){if(a.xr.qW){if(BX===null){c=new Dp;c.p5=DY;b=new L;b.ob=H(16);c.o6=b;c.p2=H(32);c.p_=0;Do();c.p7=Du;BX=c;}d=BX;b=a.BK;c=new L;c.ob=H(16);F(c,c.n$,C(478));e=c.n$;if(b===null)b=C(2);F(c,e,b);f=new P;g=c.ob;h=g.data;i=c.n$;S();j=h.length;if(i>=0&&i<=(j-0|
0)){f.oc=Q(g.data,0,i);b=d.o6;F(b,b.n$,f);i=b.n$;Bp(b,i,i+1|0);b.ob.data[i]=10;Dy(d);}else{b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}}c=a.ux.response;Ju();d=Jp.rs.document;f=d.createElement("script");b=d.createTextNode(c);f.appendChild(b);d.body.appendChild(f);Bv(a.ux.responseText);}else if(a.ux.status!=404&&a.ux.status!=403){try{k=I(100);$p=1;continue _;}catch($$e){$$je=BG($$e);if($$je instanceof Ea){}else{throw $$e;}}Mq(a.xr,a.C7,a.BK,a.Dx);}b=a.xr;b.pp=b.pp-1|0;}return;case 1:b:{try{Ki(k);if(HA()){break _;}break b;}
catch($$e){$$je=BG($$e);if($$je instanceof Ea){}else{throw $$e;}}}Mq(a.xr,a.C7,a.BK,a.Dx);b=a.xr;b.pp=b.pp-1|0;return;default:DU();}}Cn().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
let X9=(a,b)=>{let $p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Ro(a,b);if(HA()){break _;}return;default:DU();}}Cn().s(a,b,$p);}
let Qb=G();
let AI8=0;function IS(){let a=this;D.call(a);a.xw=null;a.BS=0;a.xJ=0;a.rE=0;}
let Ti=a=>{let b;if(a.rE)return a.xJ>=a.xw.oj?0:1;b=new Bc;b.n_=1;b.oa=1;b.od=C(479);E(b);}
let Sw=a=>{let b,c,d,e,f,g,h;b=a.xJ;c=a.xw;if(b<c.oj){if(a.rE){d=c.os.data;a.xJ=b+1|0;return d[b];}c=new Bc;c.n_=1;c.oa=1;c.od=C(479);E(c);}c=new Ms;S();e=new L;e.ob=H(16);N(e,e.n$,b,10);f=new P;d=e.ob;g=d.data;b=e.n$;h=g.length;if(b>=0&&b<=(h-0|0)){f.oc=Q(d.data,0,b);c.n_=1;c.oa=1;c.od=f;E(c);}c=new O;Bm(c);E(c);}
function R$(){let a=this;D.call(a);a.C4=null;a.EP=0;a.Ez=null;a.EA=null;}
let AD$=a=>{let b,c,d;if(AI8){b=new IS;c=a.C4;d=a.EP;b.rE=1;b.xw=c;b.BS=d;return b;}if(a.Ez===null){b=new IS;c=a.C4;d=a.EP;b.rE=1;b.xw=c;b.BS=d;a.Ez=b;b=new IS;b.rE=1;b.xw=c;b.BS=d;a.EA=b;}b=a.Ez;if(b.rE){c=a.EA;c.xJ=0;c.rE=1;b.rE=0;return c;}b.xJ=0;b.rE=1;a.EA.rE=0;return b;}
function J9(){let a=this;D.call(a);a.EB=null;a.q4=null;a.Do=null;}
let ZW=a=>{let b,c,d,e,f,g,h,i,j;b=a.q4.length;c=new L;c.ob=H(((b*4|0)/3|0)+2|0);d=0;a:{d:{k:{n:{c:{while(true){if(d>=b){e=new P;f=c.ob;g=f.data;h=c.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(f.data,0,h);return e;}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}j=b-d|0;if(j<3){if(j>=2){j=((a.q4[d]&255)<<16)+((a.q4[d+1|0]&255)<<8)|0;Ey(c,Dz(C(480),j>>18&63));Ey(c,Dz(C(480),j>>12&63));Ey(c,Dz(C(480),j>>6&63));B4(c,C(481));}else{i=(a.q4[d]&255)<<16;h=i>>18&63;if(h<0)break a;if(h>=C(480).oc.length)break a;h=C(480).oc.charCodeAt(h);j
=c.n$;Bp(c,j,j+1|0);c.ob.data[j]=h;h=i>>12&63;if(h<0)break;if(h>=C(480).oc.length)break;Tj(c,C(480).oc.charCodeAt(h));LT(c,C(482));}}else{j=(((a.q4[d]&255)<<16)+((a.q4[d+1|0]&255)<<8)|0)+(a.q4[d+2|0]&255)|0;h=j>>18&63;if(h<0)break d;if(h>=C(480).oc.length)break d;i=C(480).oc.charCodeAt(h);h=c.n$;Bp(c,h,h+1|0);c.ob.data[h]=i;h=j>>12&63;if(h<0)break k;if(h>=C(480).oc.length)break k;i=C(480).oc.charCodeAt(h);h=c.n$;Bp(c,h,h+1|0);c.ob.data[h]=i;h=j>>6&63;if(h<0)break n;if(h>=C(480).oc.length)break n;i=C(480).oc.charCodeAt(h);h
=c.n$;Bp(c,h,h+1|0);c.ob.data[h]=i;j=j&63;if(j<0)break c;if(j>=C(480).oc.length)break c;h=C(480).oc.charCodeAt(j);j=c.n$;Bp(c,j,j+1|0);c.ob.data[j]=h;}d=d+3|0;}e=new Ba;Bm(e);E(e);}e=new Ba;e.n_=1;e.oa=1;E(e);}e=new Ba;e.n_=1;e.oa=1;E(e);}e=new Ba;e.n_=1;e.oa=1;E(e);}e=new Ba;e.n_=1;e.oa=1;E(e);}e=new Ba;e.n_=1;e.oa=1;E(e);}
function Od(){D.call(this);this.Dd=null;}
let AIJ=a=>{let b,c,d,e,f,g,h;b=a.Dd.zT;c=b.os.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CN;d.oE=c;e=d;c.classObject=e;}}f=d.oE.$meta.item;if(f===null)c=null;else{c=f.classObject;if(c===null){c=new CN;c.oE=f;d=c;f.classObject=d;}}g=b.oj;if(c===null){b=new Dv;b.n_=1;b.oa=1;Bu(b);E(b);}if(c===BH(CO)){b=new V;b.n_=1;b.oa=1;Bu(b);E(b);}if(g<0){b=new D$;b.n_=1;b.oa=1;Bu(b);E(b);}d=EN(c.oE,g);Ff(b.os,0,d,0,b.oj);h=d;a.Dd.AF.GC.GM.iR(h);}
let Rt=G(0);
let JE=G(0);
let Un=G(0);
let H_=G();
function MC(){H_.call(this);this.p5=null;}
function Dp(){let a=this;MC.call(a);a.p_=0;a.ww=0;a.o6=null;a.p2=null;a.p7=null;}
let R9=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,$$je;e=b.data;d=d-c|0;f=new Jw;g=e.length;h=c+d|0;f.or=(-1);f.oy=g;f.oe=g;f.of=c;f.oe=h;f.vY=0;f.xA=0;f.uF=b;i=1024;if(d<i)i=d;if(16>i)i=16;e=BW(i);d=e.data.length;if(d>=0&&d<=(d-0|0)){j=new C8;h=0+d|0;j.or=(-1);j.oy=d;j.oe=d;CP();j.o4=CR;j.pb=0;j.oZ=e;j.of=0;j.oe=h;j.pR=0;j.pt=0;k=AAW(a.p7);EM();l=Fu;if(l===null){l=new V;l.n_=1;l.oa=1;l.od=C(483);E(l);}k.uU=l;k.uE=l;while(true){g=(MF(k,f,j,1)).o8!=1?0:1;i=j.of;l=a.p5;if(l===null)a.ww=1;if(a.ww?0:1)u:{try{l.iT(e,0,i);break u;}
catch($$e){$$je=BG($$e);if($$je instanceof FF){}else{throw $$e;}}a.ww=1;}j.of=0;j.oe=j.oy;j.or=(-1);if(!g)break;}while(true){g=(N_(k,j)).o8!=1?0:1;i=j.of;l=a.p5;if(l===null)a.ww=1;if(a.ww?0:1)bi:{try{l.iT(e,0,i);break bi;}catch($$e){$$je=BG($$e);if($$je instanceof FF){}else{throw $$e;}}a.ww=1;}j.of=0;j.oe=j.oy;j.or=(-1);if(!g)break;}return;}k=new O;k.n_=1;k.oa=1;E(k);}
let ML=(a,b)=>{let c,d;c=a.o6;F(c,c.n$,b);d=c.n$;Bp(c,d,d+1|0);c.ob.data[d]=10;Dy(a);}
let Dy=a=>{let b,c,d,e,f,g,h,i,j;b=a.o6;c=b.n$;d=a.p2;if(c>d.data.length)d=H(c);e=0;f=0;if(e>c){b=new O;b.n_=1;b.oa=1;b.od=C(484);E(b);}while(e<c){g=d.data;h=f+1|0;i=b.ob.data;j=e+1|0;g[f]=i[e];f=h;e=j;}R9(a,d,0,c);a.o6.n$=0;}
function IQ(){H_.call(this);this.BW=null;}
let JI=G(IQ);
let DY=null;let AO6=(a,b,c,d)=>{let e;e=0;while(e<d){Bbw(b.data[e+c|0]&255);e=e+1|0;}}
let ASM=()=>{let b;b=new JI;b.BW=BW(1);DY=b;}
function Jm(){let a=this;D.call(a);a.Bg=null;a.DC=null;}
let ARE=(a,b)=>{a.Bg.iV(b.loaded);}
function Fm(){let a=this;D.call(a);a.ty=null;a.w5=null;}
let EG=b=>{let c,d,e;if(b.oc.length?0:1){c=new Iq;c.n_=1;c.oa=1;c.CE=b;E(c);}if(0>=b.oc.length){b=new Ba;b.n_=1;b.oa=1;E(b);}if(!AGC(b.oc.charCodeAt(0))){c=new Iq;c.n_=1;c.oa=1;c.CE=b;E(c);}d=1;o:{while(d<b.oc.length){if(d<0)break o;if(d>=b.oc.length)break o;r:{e=b.oc.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(AGC(e))break r;else{c=new Iq;c.n_=1;c.oa=1;c.CE=b;E(c);}}}d=d+1|0;}return;}b=new Ba;b.n_=1;b.oa=1;E(b);}
let AGC=b=>{b:{a:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}b=1;break b;}b=0;}return b;}
let AI0=b=>{let c,d,e,f,g,h,i;if(b===null){b=new V;b.n_=1;b.oa=1;b.od=C(485);E(b);}EG(b);BeB();c=ABa;d=b.oc.toUpperCase();e=d===b.oc?b:Zs(d);k:{if(!e.pv){f=0;while(true){if(f>=e.oc.length)break k;e.pv=(31*e.pv|0)+e.oc.charCodeAt(f)|0;f=f+1|0;}}}g=e.pv;h=c.qq.data;c=h[g&(h.length-1|0)];while(c!==null){if(c.tY==g){e:{d=c.qV;if(e!==d){if(e===d)i=1;else if(!(d instanceof P))i=0;else{d=d;i=e.oc!==d.oc?0:1;}if(!i){i=0;break e;}}i=1;}if(i)break;}c=c.q6;}c=c===null?null:c.rp;if(c!==null)return c;c=new Na;c.n_=1;c.oa
=1;c.Jn=b;E(c);}
let A5Q=a=>{return a.ty;}
let AVG=(a,b)=>{let c,d,$$je;b:{try{c=a.c6();EM();b=SQ(Rg(P2(c,Fu),Fu),b);}catch($$e){$$je=BG($$e);if($$je instanceof GP){d=$$je;break b;}else{throw $$e;}}return b;}c=new NQ;c.n_=1;c.oa=1;c.od=C(75);c.p$=d;E(c);}
let Mp=G(Fm);
let Du=null;let Do=()=>{Do=Bj(Mp);AMI();}
let AAW=a=>{let b,c,d,e,f;b=new O5;c=BW(1);d=c.data;d[0]=63;EM();e=Gz;b.uU=e;b.uE=e;f=d.length;if(f&&f>=b.tw){b.Ba=a;b.xX=c.t();b.x7=2.0;b.tw=4.0;b.yT=H(512);b.xL=BW(512);return b;}e=new V;KW(e,C(486));E(e);}
let AMI=()=>{let b,c,d,e,f;b=new Mp;Do();c=Bt(P,0);d=c.data;EG(C(136));e=d.length;f=0;while(f<e){EG(d[f]);f=f+1|0;}b.ty=C(136);b.w5=c.t();Du=b;}
function Iq(){V.call(this);this.CE=null;}
let SA=G(0);
function Md(){let a=this;D.call(a);a.DG=null;a.yV=null;a.rz=0;a.zF=null;a.Gu=0.0;a.GE=0.0;a.sW=0;a.Hz=null;a.AE=null;a.Cc=null;a.EJ=0;a.FZ=0;a.Fn=0;a.GV=0;a.E1=0;a.v$=null;a.yH=null;a.IV=0;a.Jt=null;a.JL=0.0;a.z9=0;a.C1=0;a.EQ=0;}
let A$d=null;let AAc=()=>{AAc=Bj(Md);A41();}
let BiL=(a,b)=>{let c=new Md();OT(c,a,b);return c;}
let OT=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;AAc();a.rz=0;a.zF=null;a.Gu=0.0;a.GE=0.0;a.sW=0;a.Hz=FN();a.AE=FN();a.Cc=FN();a.EJ=0;a.FZ=770;a.Fn=771;a.GV=770;a.E1=771;a.yH=null;d=new BD;FQ();d.pV=1.0;d.pU=1.0;d.pT=1.0;d.pS=1.0;Eh(d);a.Jt=d;a.JL=AFN;a.z9=0;a.C1=0;a.EQ=0;if(b>8191){c=new V;d=new L;d.ob=H(16);F(d,d.n$,C(487));N(d,d.n$,b,10);e=new P;f=d.ob;g=f.data;h=d.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(f.data,0,h);c.n_=1;c.oa=1;c.od=e;E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}if(GJ===null)j=A$d;else{S2();j
=X3;}k=new JC;l=b*4|0;m=b*6|0;g=Bt(EH,3);f=g.data;d=new EH;d.r$=1;d.qn=2;d.qP=5126;d.qR=0;d.qG=C(488);d.sj=0;d.t3=EY(1);f[0]=d;d=new EH;d.r$=4;d.qn=4;d.qP=5121;d.qR=1;d.qG=C(489);d.sj=0;d.t3=EY(4);f[1]=d;d=new EH;d.r$=16;d.qn=2;d.qP=5126;d.qR=0;d.qG=C(490);d.sj=0;d.t3=EY(16);f[2]=d;U9(k,j,0,l,m,A11(g));a.DG=k;AFn(a.AE,0.0,0.0,Bb.oU.width,Bb.oU.height);a.yV=CT(b*20|0);f=MT(m);g=f.data;i=0;n=0;while(n<m){g[n]=i;g[n+1|0]=(i+1|0)<<16>>16;b=n+2|0;h=(i+2|0)<<16>>16;g[b]=h;g[n+3|0]=h;g[n+4|0]=(i+3|0)<<16>>16;g[n+5
|0]=i;n=n+6|0;i=(i+4|0)<<16>>16;}WD(a.DG,f);if(c!==null)a.v$=c;else{a.v$=ZD();a.IV=1;}}
let ZD=()=>{let b,c,d,e,f,g,h,i;AAc();b=Cz(C(491),C(492));if(b.oD)return b;c=new V;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!b.oD)e=b.oA;else{e=Bq.i4(b.o0);b.oA=e;}F(d,d.n$,e);b=new P;f=d.ob;g=f.data;h=d.n$;S();i=g.length;if(h>=0&&h<=(i-0|0)){b.oc=Q(f.data,0,h);c.n_=1;c.oa=1;c.od=b;E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let Cl=a=>{let b,c;if(a.sW){b=new Cb;b.n_=1;b.oa=1;b.od=C(494);E(b);}a.z9=0;Cj.i5(0);c=a.yH;if(c!==null)c.i6();else{c=a.v$;b=Bq;if(c.o5){Dg(c,c.p4,c.p3);c.o5=0;}b.i8(c.o0);}O7(a);a.sW=1;}
let Ck=a=>{let b,c;if(!a.sW){b=new Cb;b.n_=1;b.oa=1;b.od=C(495);E(b);}if(a.rz>0)Ia(a);a.zF=null;a.sW=0;c=Cj;c.i5(1);if(a.EJ?0:1)c.i_(3042);}
let Ye=(a,b,c,d,e)=>{let f,g;if(!a.sW){b=new Cb;b.n_=1;b.oa=1;b.od=C(496);E(b);}f=a.yV.data.length;if(b!==a.zF){Ia(a);a.zF=b;b=b.vB;a.Gu=1.0/b.tQ;a.GE=1.0/b.tD;g=f;}else{g=f-a.rz|0;if(!g){Ia(a);g=f;}}if(g>=e)g=e;CX(c,d,a.yV,a.rz,g);a.rz=a.rz+g|0;e=e-g|0;while(e>0){d=d+g|0;Ia(a);g=f>=e?e:f;CX(c,d,a.yV,0,g);a.rz=a.rz+g|0;e=e-g|0;}}
let Ia=a=>{let b,c,d,e,f,g;b=a.rz;if(!b)return;a.z9=a.z9+1|0;a.C1=a.C1+1|0;c=b/20|0;if(c>a.EQ)a.EQ=c;b=c*6|0;d=a.zF;Cj.cr(d.tC,d.Eq);d=a.DG;e=a.yV;f=a.rz;d.q8.ja(e,0,f);g=d.qh.jb(1);CH(g,0);Ds(g,b);if(a.EJ)Cj.i_(3042);else{Cj.jc(3042);c=a.FZ;if(c!=(-1))Cj.jd(c,a.Fn,a.GV,a.E1);}g=a.yH;if(g===null)g=a.v$;TF(d,g,4,0,b,d.Bj);a.rz=0;}
let Cs=(a,b)=>{if(a.sW)Ia(a);Hg(a.AE,b.qb);if(a.sW)O7(a);}
let O7=a=>{let b,c,d,e;Qa(Hg(a.Cc,a.AE.qb),a.Hz);b=a.yH;if(b!==null){b.jg(C(497),a.Cc);a.yH.jh(C(498),0);}else{b=a.v$;c=a.Cc;Ru();d=KA(b,C(497),Nt);e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}ADB(e,d,1,0,c.qb,0);b=a.v$;c=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}c.jk(KA(b,C(498),Nt),0);}}
let A41=()=>{S2();A$d=Xw;}
let Ly=G(0);
let BL=G();
let AND=a=>{return;}
let A1f=a=>{return;}
let A1L=a=>{return;}
function Q9(){let a=this;BL.call(a);a.yM=null;a.uh=null;a.rT=null;a.vr=null;a.ud=M;a.A1=null;a.AS=null;a.tm=null;}
let A72=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.tm;a.A1=b.pa;b:{try{a.yM=BdA(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new SW;b.ot=a.tm.oP;if(isNaN(0.0)?1:0)c=0;else{b.yz=0.0;b.Ax=1.0;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(499);E(d);}a.yM=b;}a.uh=a.tm.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;e=new Bf;BU();d.pg=e;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.AS=b;b=new Ch;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oD){Ct(b,1536,0,1,0,f);b.po=1;a.rT=b;g=a.vr.data;c=0;h=g.length;if(c>h){b=new V;b.n_
=1;b.oa=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.ud=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!f.oD)e=f.oA;else{e=Bq.i4(f.o0);f.oA=e;}F(d,d.n$,e);e=new P;g=d.ob;j=g.data;h=d.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(g.data,0,h);b.n_=1;b.oa=1;b.od=e;E(b);}b=new O;BY(b);E(b);}
let A7C=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){Eg(a.tm);return;}if(d[72]){c=a.tm;e=c.ou+1|0;d=c.o2.data;e=e%d.length|0;c.ou=e;Cd(c,d[e]);return;}if(B5(c,76)){Dj(a.tm);Eg(a.tm);return;}if(B5(Bd,111))return;EW(1.0,1.0,1.0,1.0);f=a.AS.oT;CY(f);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vr,M);a.ud=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vr,M);a.ud=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vr,M);a.ud=M;}a.ud=U(a.ud,I(1));ZV(a.yM,Bl,Bo,Bz);e=0;while(e<65536){g=Yi(a.yM)
*128.0+256.0|0;if(g>=0&&g<512){d=a.vr.data;d[g]=U(d[g],I(1));}e=e+1|0;}Cq(a.rT,f.oF,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rT,i);c=a.rT;b=h;Bh(c,b,0.0,0.0);Bg(a.rT,i);Bh(a.rT,b,BB(BS(a.vr.data[h],a.ud)),0.0);h=h+1|0;}j=8;while(j<520){Bg(a.rT,(-6.221923240859403E37));c=a.rT;i=j;Bh(c,0.0,i,0.0);Bg(a.rT,(-6.221923240859403E37));Bh(a.rT,10.0,i,0.0);j=j+32|0;}Cx(a.rT);Cs(a.uh,f.oF);Cl(a.uh);Bw(a.A1,a.uh,CF(C(500),R(D,[BK(Bl),BK(Bo),BK(AEk(a.yM)),Cc(Cv(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.A1,a.uh,C(501),64.0,494.0,384.0,1,1);Bw(a.A1,a.uh,C(502),64.0,468.0,384.0,1,1);Ck(a.uh);}
let ALs=(a,b,c)=>{let d,e,f;d=a.AS;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.AS,1);}
function RY(){let a=this;BL.call(a);a.q1=null;a.vI=null;a.qc=null;a.vm=null;a.tL=null;a.tV=null;a.q_=M;a.Bk=null;a.By=null;a.s7=null;}
let AMO=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.s7;a.Bk=b.pa;b:{try{a.q1=AM8(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new K4;b.ot=a.s7.oP;b.uD=0.0;b.vx=1.0;a.q1=b;}a.vI=a.s7.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.By=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,3584,0,1,0,e);b.po=1;a.qc=b;f=a.vm.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}f=a.tL.data;g=0;h=f.length;if
(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}f=a.tV.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.q_=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A96=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(B5(Bd,71)){Eg(a.s7);return;}if(B5(Bd,72)){Dj(a.s7);return;}if(B5(Bd,76)){Dj(a.s7);Eg(a.s7);return;}if(B5(Bd,111)){Mm(Ef);return;}EW(1.0,1.0,1.0,1.0);c=DW(a.By);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vm,M);Br(a.tL,M);Br(a.tV,M);a.q_=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vm,M);Br(a.tL,M);Br(a.tV,M);a.q_=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vm,M);Br(a.tL,M);Br(a.tV,M);a.q_=M;}a.q_=U(a.q_,I(1));OA(a.q1,Bl,Bo,Bz);d=0;while
(d<65536){e=SX(a.q1)*128.0+256.0|0;if(e>=0&&e<512){f=a.vm.data;f[e]=U(f[e],I(1));}g=NJ(1.5707963267948966*a.q1.ot.jJ());h=(KC(a.q1)+(Ue(a.q1)-KC(a.q1))*g*g)*128.0+256.0|0;if(h>=0&&h<512){f=a.tL.data;f[h]=U(f[h],I(1));}i=ACd(1.5707963267948966*a.q1.ot.jJ());h=(KC(a.q1)+(Ue(a.q1)-KC(a.q1))*i*i)*128.0+256.0|0;if(h>=0&&h<512){f=a.tV.data;f[h]=U(f[h],I(1));}d=d+1|0;}Cq(a.qc,c.oF,1);h=0;while(h<512){d=h&63;j=d?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.qc,j);k=a.qc;l=h;Bh(k,l,0.0,0.0);Bg(a.qc,j);Bh(a.qc,
l,BB(BS(a.vm.data[h],a.q_)),0.0);b=d?(-7.163207052854073E37):(-6.694328448841655E37);Bg(a.qc,b);Bh(a.qc,l,BB(BS(a.tL.data[h],a.q_))-0.75,0.0);Bg(a.qc,b);Bh(a.qc,l,BB(BS(a.tL.data[h],a.q_))+0.75,0.0);b=d?(-4.593754331106985E37):(-4.60022594095127E37);Bg(a.qc,b);Bh(a.qc,l,BB(BS(a.tV.data[h],a.q_))-0.75,0.0);Bg(a.qc,b);Bh(a.qc,l,BB(BS(a.tV.data[h],a.q_))+0.75,0.0);h=h+1|0;}m=8;while(m<520){Bg(a.qc,(-6.221923240859403E37));k=a.qc;j=m;Bh(k,0.0,j,0.0);Bg(a.qc,(-6.221923240859403E37));Bh(a.qc,10.0,j,0.0);m=m+32|0;}Cx(a.qc);Cs(a.vI,
c.oF);Cl(a.vI);Bw(a.Bk,a.vI,CF(C(503),R(D,[BK(Bl),BK(Bo),BK(N$(a.q1)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.Bk,a.vI,C(501),64.0,494.0,384.0,1,1);Bw(a.Bk,a.vI,C(504),64.0,468.0,384.0,1,1);Ck(a.vI);}
let AJ_=(a,b,c)=>{let d,e,f;d=a.By;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.By,1);}
function Tf(){let a=this;BL.call(a);a.o1=null;a.ut=null;a.rG=null;a.qF=null;a.td=M;a.Ac=null;a.z7=null;a.vk=0;a.s5=null;}
let ASX=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.s5;a.Ac=b.pa;b:{try{a.o1=OE(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new HY;b.ot=a.s5.oP;if(isNaN(0.0)?1:0)c=0;else{b.sT=0.0;b.s9=1.0;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(505);E(d);}a.o1=b;}a.ut=a.s5.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;e=new Bf;BU();d.pg=e;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.z7=b;b=new Ch;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oD){Ct(b,1536,0,1,0,f);b.po=1;a.rG=b;g=a.qF.data;c=0;h=g.length;if(c>h){b=new V;b.n_
=1;b.oa=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.td=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!f.oD)e=f.oA;else{e=Bq.i4(f.o0);f.oA=e;}F(d,d.n$,e);e=new P;g=d.ob;j=g.data;h=d.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(g.data,0,h);b.n_=1;b.oa=1;b.od=e;E(b);}b=new O;BY(b);E(b);}
let AT_=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;if(B5(Bd,71)){Eg(a.s5);return;}if(B5(Bd,72)){Dj(a.s5);return;}if(B5(Bd,38)){a.vk=(a.vk+9|0)%10|0;return;}if(B5(Bd,39)){a.vk=(a.vk+1|0)%10|0;return;}if(B5(Bd,76)){Dj(a.s5);Eg(a.s5);return;}if(B5(Bd,111)){Mm(Ef);return;}EW(1.0,1.0,1.0,1.0);c=DW(a.z7);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.qF,M);a.td=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.qF,M);a.td=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.qF,M);a.td=M;}u:{v:{w:{a.td=U(a.td,
I(4));JQ(a.o1,Bl,Bo,Bz);switch(a.vk){case 0:break;case 1:d=0;while(d<262144){e=(FZ(a.o1)+Fw(a.o1)*Wy(a))*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;case 2:d=0;while(d<262144){e=(FZ(a.o1)+Fw(a.o1)*A1b(a.o1.ot.jJ()))*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;case 3:d=0;while(d<262144){e=ZZ(a,a.o1.ot.jJ(),FZ(a.o1),Fw(a.o1))*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;case 4:d=0;while(d<262144){e=(FZ(a.o1)+Fw(a.o1)
*ANT(a.o1.ot.jJ()))*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;case 5:d=0;while(d<262144){e=(FZ(a.o1)+Fw(a.o1)*AG5(a))*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;case 6:d=0;while(d<262144){e=(FZ(a.o1)+Fw(a.o1)*R2(a.o1.ot.em()))*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;case 7:break v;case 8:d=0;while(d<262144){g=FZ(a.o1);h=Fw(a.o1);i=a.o1.ot.jT();j=Bz;e=(g+h*(i*(4.0-3.6666666666666665*j)+j*0.3333333333333333
*(a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT()+a.o1.ot.jT())))*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;case 9:break w;default:break u;}d=0;while(d<262144){e=IR(a.o1)*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}break u;}d=0;while(true){if(d>=262144)break u;k=FZ(a.o1);j=Fw(a.o1);g=a.o1.ot.jT();i=Bz;e=(k+j*(g*(1.0-i)+i*R2(a.o1.ot.em())))*128.0+256.0|0;if(e>=0&&e<512)
{f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}}d=0;while(d<262144){e=(FZ(a.o1)+Fw(a.o1)*(KR(a.o1.ot.em())-32.0+a.o1.ot.ev()-a.o1.ot.ev())/66.0)*128.0+256.0|0;if(e>=0&&e<512){f=a.qF.data;f[e]=U(f[e],I(1));}d=d+1|0;}}Cq(a.rG,c.oF,1);l=0;while(l<512){m=l&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rG,m);n=a.rG;b=l;Bh(n,b,0.0,0.0);Bg(a.rG,m);Bh(a.rG,b,BB(BS(a.qF.data[l],a.td)),0.0);l=l+1|0;}o=8;while(o<520){Bg(a.rG,(-6.221923240859403E37));n=a.rG;m=o;Bh(n,0.0,m,0.0);Bg(a.rG,(-6.221923240859403E37));Bh(a.rG,
10.0,m,0.0);o=o+32|0;}Cx(a.rG);Cs(a.ut,c.oF);Cl(a.ut);Bw(a.Ac,a.ut,CF(C(506),R(D,[BK(Bl),BK(Bo),BK(Bz),BK(Jq(a.o1)),Cc(Cv(Bb)),Cc(a.vk)])),64.0,522.0,384.0,1,1);Bw(a.Ac,a.ut,C(501),64.0,494.0,384.0,1,1);Bw(a.Ac,a.ut,C(507),64.0,468.0,384.0,1,1);Ck(a.ut);}
let A5z=(a,b,c)=>{let d,e,f;d=a.z7;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.z7,1);}
let Wy=a=>{let b,c;b=I(KR(a.o1.ot.em())-32|0);c=a.o1.ot.em();return BB(U(BP(b,32),B3(Be(c,B(4294967295, 0)),T(c,32))))*5.7691650068303346E-11;}
let ZZ=(a,b,c,d)=>{let e,f,g;if(b<=0.0)return (-Infinity);if(b>=1.0)return Infinity;if(d===0.0)return c;e=b-0.5;if(Lu(e)<=0.425){b=0.180625-e*e;f=e*(((((((b*2509.0809287301227+33430.57558358813)*b+67265.7709270087)*b+45921.95393154987)*b+13731.69376550946)*b+1971.5909503065513)*b+133.14166789178438)*b+3.3871328727963665)/(((((((b*5226.495278852854+28729.085735721943)*b+39307.89580009271)*b+21213.794301586597)*b+5394.196021424751)*b+687.1870074920579)*b+42.31333070160091)*b+1.0);}else{g=B9(e,0.0);if(g>0)b=1.0
-b;b=Cf( -C$(b));if(b>5.0){f=b-5.0;f=(((((((f*2.0103343992922881E-7+2.7115555687434876E-5)*f+0.0012426609473880784)*f+0.026532189526576124)*f+0.29656057182850487)*f+1.7848265399172913)*f+5.463784911164114)*f+6.657904643501103)/(((((((f*2.0442631033899397E-15+1.421511758316446E-7)*f+1.8463183175100548E-5)*f+7.868691311456133E-4)*f+0.014875361290850615)*f+0.1369298809227358)*f+0.599832206555888)*f+1.0);}else{b=b-1.6;f=(((((((b*7.745450142783414E-4+0.022723844989269184)*b+0.2417807251774506)*b+1.2704582524523684)
*b+3.6478483247632045)*b+5.769497221460691)*b+4.630337846156546)*b+1.4234371107496835)/(((((((b*1.0507500716444169E-9+5.475938084995345E-4)*b+0.015198666563616457)*b+0.14810397642748008)*b+0.6897673349851)*b+1.6763848301838038)*b+2.053191626637759)*b+1.0);}if(g<0)f= -f;}return c+d*f;}
let ANT=b=>{let c,d,e;c=b+b-1.0;d=C$(1.0-c*c);e=d*0.5+4.54689435453805;b=Cf(Cf(e*e-d*7.14224495043282)-e);return 1.4142135623730951*Fn(B8(Be(Ed(c),B(0, 2147483648)),Be(Ed(b),B(4294967295, 2147483647))));}
let AG5=a=>{let b,c,d;while(true){while(true){b=a.o1.ot.jT();c=a.o1.ot.jT();d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}return b*Cf((-2.0)*C$(d)/d);}
function Pj(){let a=this;BL.call(a);a.um=null;a.uA=null;a.qO=null;a.sf=null;a.sF=M;a.zO=null;a.B7=null;a.vG=0;a.s4=null;}
let AIz=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.s4;a.zO=b.pa;b:{try{a.um=AOv(b.oP,Bl,Bo,Bz);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new MN;b.ot=a.s4.oP;b.wQ=0.0;b.wc=1.0;b.wT=0.5;a.um=b;}a.uA=a.s4.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.B7=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,3584,0,1,0,e);b.po=1;a.qO=b;f=a.sf.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.sF=M;return;}b
=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A6L=(a,b)=>{let c,d,e,f,g,h,i,j;if(B5(Bd,71)){Eg(a.s4);return;}if(B5(Bd,72)){Dj(a.s4);return;}if(B5(Bd,38)){a.vG=(a.vG+2|0)%3|0;return;}if(B5(Bd,39)){a.vG=(a.vG+1|0)%3|0;return;}if(B5(Bd,76)){Dj(a.s4);Eg(a.s4);return;}if(B5(Bd,111)){Mm(Ef);return;}EW(1.0,1.0,1.0,1.0);c=DW(a.B7);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.sf,M);a.sF=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.sf,M);a.sF=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.sf,M);a.sF=M;}u:{i:{v:{a.sF=U(a.sF,I(4));QD(a.um,
Bl,Bo,Bz);switch(a.vG){case 0:break i;case 1:break;case 2:break v;default:break u;}d=0;while(d<262144){e=a.um.ot.jX(15);e=((e&1)+((e>>>1|0)&127)|0)+((e>>>8|0)&127)|0;f=a.sf.data;f[e]=U(f[e],I(1));d=d+1|0;}break u;}d=0;while(true){if(d>=262144)break u;e=a.um.ot.jY(0.0,256.0)|0;if(e>=0&&e<256){f=a.sf.data;f[e]=U(f[e],I(1));}d=d+1|0;}}d=0;while(d<262144){e=AM3(a.um.ot,0.0,256.0,128.0)|0;if(e>=0&&e<256){f=a.sf.data;f[e]=U(f[e],I(1));}d=d+1|0;}}Cq(a.qO,c.oF,1);g=0;while(g<256){h=g&31?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.qO,
h);i=a.qO;d=g<<1;b=d;Bh(i,b,0.0,0.0);Bg(a.qO,h);Bh(a.qO,b,BB(BS(a.sf.data[g],a.sF)),0.0);Bg(a.qO,h);i=a.qO;b=d|1;Bh(i,b,0.0,0.0);Bg(a.qO,h);Bh(a.qO,b,BB(BS(a.sf.data[g],a.sF)),0.0);g=g+1|0;}j=8;while(j<520){Bg(a.qO,(-6.221923240859403E37));i=a.qO;h=j;Bh(i,0.0,h,0.0);Bg(a.qO,(-6.221923240859403E37));Bh(a.qO,10.0,h,0.0);j=j+32|0;}Cx(a.qO);Cs(a.uA,c.oF);Cl(a.uA);Bw(a.zO,a.uA,CF(C(508),R(D,[BK(Bl),BK(Bo),BK(SV(a.um)),Cc(Cv(Bb)),Cc(a.vG)])),64.0,522.0,384.0,1,1);Bw(a.zO,a.uA,C(501),64.0,494.0,384.0,1,1);Bw(a.zO,
a.uA,C(507),64.0,468.0,384.0,1,1);Ck(a.uA);}
let A1M=(a,b,c)=>{let d,e,f;d=a.B7;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.B7,1);}
function ABs(){let a=this;BL.call(a);a.uw=null;a.ru=null;a.Fc=null;a.Bi=null;a.A7=null;a.BY=null;}
let Bgu=a=>{let b=new ABs();A25(b,a);return b;}
let ATL=a=>{let b,c,d,e,f,g,h,i,j;b=a.BY;a.Bi=b.pa;a.uw=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.A7=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.ru=b;f=a.Fc.data;g=0;h=f.length;if(g<=h){while(g<h){i=g+1|0;f[g]=M;g=i;}return;}b=new V;b.n_=1;b.oa=1;E(b);}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,
0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A25=(a,b)=>{a.Fc=Co(512);a.BY=b;}
let A3S=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd;d=c.pc.data;if(d[71]){c=a.BY;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;g=d[e];c.pD=g;if(g!==null){g.d1();c.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(d[72]){Dj(a.BY);return;}if(B5(c,111))return;h=1.0/Bl;i=1.0/Bo;DR(1.0,1.0,1.0,1.0,0);g=a.A7.oT;Ft(g,1);if(Bs(Bd,29))Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;if(Bs(Bd,30))Bo=Bo+(!BI()?(-0.5):0.5)*Bb.pu;if(Bs(Bd,31))Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Cq(a.ru,g.oF,1);e=0;while(e<512){j=e&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.ru,
j);c=a.ru;b=e;Bh(c,b,0.0,0.0);Bg(a.ru,j);Bh(a.ru,b,Rz(1.0-Rz(1.0-e*0.001953125,i),h)*512.0,0.0);e=e+1|0;}f=8;while(f<520){Bg(a.ru,(-6.221923240859403E37));c=a.ru;j=f;Bh(c,0.0,j,0.0);Bg(a.ru,(-6.221923240859403E37));Bh(a.ru,10.0,j,0.0);f=f+32|0;}U0(a.ru);Cs(a.uw,g.oF);Cl(a.uw);c=a.Bi;g=a.uw;d=Bt(D,4);k=d.data;k[0]=BK(Bl);k[1]=BK(Bo);i=Gi(h)*AD1(Bo);l=Bo;k[2]=BK(i*l/Gi(h+l));k[3]=Cc(Cv(Bb));Bw(c,g,CF(C(509),d),64.0,522.0,384.0,1,1);Bw(a.Bi,a.uw,C(510),64.0,494.0,384.0,1,1);Bw(a.Bi,a.uw,C(511),64.0,468.0,384.0,
1,1);Ck(a.uw);}
let A$J=(a,b,c)=>{let d,e,f;d=a.A7;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.A7,1);}
function ABL(){let a=this;BL.call(a);a.yv=null;a.vg=null;a.rQ=null;a.us=null;a.t5=M;a.AK=null;a.zK=null;a.wH=null;}
let BfF=a=>{let b=new ABL();ASl(b,a);return b;}
let ALd=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wH;a.AK=b.pa;b:{try{a.yv=Bc7(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new RZ;b.ot=a.wH.oP;b.y9=1.0;b.zo=1.0;a.yv=b;}a.vg=a.wH.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.zK=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rQ=b;f=a.us.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t5=M;return;}b=new Bc;c
=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let ASl=(a,b)=>{a.us=Co(512);a.t5=M;a.wH=b;}
let AMn=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wH;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wH);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);g=a.zK.oT;Ft(g,1);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.us,M);a.t5=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.us,M);a.t5=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.us,M);a.t5=M;}a.t5=U(a.t5,I(1));AAB(a.yv,Bl,Bo,Bz);e=0;while(e<65536){h=AHZ(a.yv)*512.0|0;if(h>=0&&h<
512){d=a.us.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rQ,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rQ,i);c=a.rQ;b=f;Bh(c,b,0.0,0.0);Bg(a.rQ,i);Bh(a.rQ,b,BB(BS(a.us.data[f],a.t5)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rQ,(-6.221923240859403E37));c=a.rQ;i=j;Bh(c,0.0,i,0.0);Bg(a.rQ,(-6.221923240859403E37));Bh(a.rQ,10.0,i,0.0);j=j+32|0;}Cx(a.rQ);Cs(a.vg,g.oF);Cl(a.vg);Bw(a.AK,a.vg,CF(C(512),R(D,[BK(Bl),BK(Bo),BK(Y0(a.yv)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.AK,a.vg,C(501),
64.0,494.0,384.0,1,1);Bw(a.AK,a.vg,C(511),64.0,468.0,384.0,1,1);Ck(a.vg);}
let A8F=(a,b,c)=>{let d,e,f;d=a.zK;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.zK,1);}
function Xm(){let a=this;BL.call(a);a.yx=null;a.uJ=null;a.ri=null;a.ul=null;a.tr=M;a.AW=null;a.B2=null;a.w3=null;}
let BfV=a=>{let b=new Xm();AKM(b,a);return b;}
let AZ$=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.w3;a.AW=b.pa;b:{try{a.yx=BeL(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new O3;b.ot=a.w3.oP;b.xo=1.0;b.xN=1.0;a.yx=b;}a.uJ=a.w3.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.B2=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.ri=b;f=a.ul.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tr=M;return;}b=new Bc;c
=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AKM=(a,b)=>{a.ul=Co(512);a.tr=M;a.w3=b;}
let A9C=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.w3;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.w3);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);g=a.B2.oT;Ft(g,1);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.ul,M);a.tr=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.ul,M);a.tr=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.ul,M);a.tr=M;}a.tr=U(a.tr,I(1));AAo(a.yx,Bl,Bo,Bz);e=0;while(e<65536){h=XH(a.yx)*512.0|0;if(h>=0&&h<512)
{d=a.ul.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.ri,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.ri,i);c=a.ri;b=f;Bh(c,b,0.0,0.0);Bg(a.ri,i);Bh(a.ri,b,BB(BS(a.ul.data[f],a.tr)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.ri,(-6.221923240859403E37));c=a.ri;i=j;Bh(c,0.0,i,0.0);Bg(a.ri,(-6.221923240859403E37));Bh(a.ri,10.0,i,0.0);j=j+32|0;}Cx(a.ri);Cs(a.uJ,g.oF);Cl(a.uJ);Bw(a.AW,a.uJ,CF(C(509),R(D,[BK(Bl),BK(Bo),BK(ADN(a.yx)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.AW,a.uJ,C(501),
64.0,494.0,384.0,1,1);Bw(a.AW,a.uJ,C(511),64.0,468.0,384.0,1,1);Ck(a.uJ);}
let A4Q=(a,b,c)=>{let d,e,f;d=a.B2;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.B2,1);}
function AG_(){let a=this;BL.call(a);a.zP=null;a.vZ=null;a.rr=null;a.uK=null;a.tg=M;a.zM=null;a.B1=null;a.wX=null;}
let Bcl=a=>{let b=new AG_();A8U(b,a);return b;}
let A7b=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wX;a.zM=b.pa;b:{try{a.zP=BcH(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new Qc;b.ot=a.wX.oP;b.Ap=0.0;b.zL=0.25;a.zP=b;}a.vZ=a.wX.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.B1=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rr=b;f=a.uK.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tg=M;return;}b=new Bc;c
=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A8U=(a,b)=>{a.uK=Co(512);a.tg=M;a.wX=b;}
let A9E=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wX;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){c=a.wX;e=c.ou+1|0;d=c.o2.data;e=e%d.length|0;c.ou=e;Cd(c,d[e]);return;}if(B5(c,111))return;EW(1.0,1.0,1.0,1.0);c=DW(a.B1);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uK,M);a.tg=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uK,M);a.tg=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uK,M);a.tg=M;}a.tg=U(a.tg,I(1));WQ(a.zP,Bl,Bo,Bz);e
=0;while(e<65536){g=AAK(a.zP)*512.0|0;if(g>=0&&g<512){d=a.uK.data;d[g]=U(d[g],I(1));}e=e+1|0;}Cq(a.rr,c.oF,1);f=0;while(f<512){h=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rr,h);i=a.rr;b=f;Bh(i,b,0.0,0.0);Bg(a.rr,h);Bh(a.rr,b,BB(BS(a.uK.data[f],a.tg)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rr,(-6.221923240859403E37));i=a.rr;h=j;Bh(i,0.0,h,0.0);Bg(a.rr,(-6.221923240859403E37));Bh(a.rr,10.0,h,0.0);j=j+32|0;}Cx(a.rr);Cs(a.vZ,c.oF);Cl(a.vZ);Bw(a.zM,a.vZ,CF(C(513),R(D,[BK(Bl),BK(Bo),Cc(Cv(Bb))])),64.0,
522.0,384.0,1,1);Bw(a.zM,a.vZ,C(501),64.0,494.0,384.0,1,1);Bw(a.zM,a.vZ,C(511),64.0,468.0,384.0,1,1);Ck(a.vZ);}
let A$2=(a,b,c)=>{let d,e,f;d=a.B1;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.B1,1);}
function VR(){let a=this;BL.call(a);a.x0=null;a.vs=null;a.rw=null;a.vD=null;a.t8=M;a.Ak=null;a.A0=null;a.vL=null;}
let BfC=a=>{let b=new VR();A1q(b,a);return b;}
let A$V=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.vL;a.Ak=b.pa;b:{try{a.x0=OE(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new HY;b.ot=a.vL.oP;if(isNaN(0.0)?1:0)c=0;else{b.sT=0.0;b.s9=1.0;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(505);E(d);}a.x0=b;}a.vs=a.vL.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;e=new Bf;BU();d.pg=e;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.A0=b;b=new Ch;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oD){Ct(b,1536,0,1,0,f);b.po=1;a.rw=b;g=a.vD.data;c=0;h=g.length;if(c>h){b=new V;b.n_
=1;b.oa=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.t8=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!f.oD)e=f.oA;else{e=Bq.i4(f.o0);f.oA=e;}F(d,d.n$,e);e=new P;g=d.ob;j=g.data;h=d.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(g.data,0,h);b.n_=1;b.oa=1;b.od=e;E(b);}b=new O;BY(b);E(b);}
let A1q=(a,b)=>{a.vD=Co(512);a.t8=M;a.vL=b;}
let AMY=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){Eg(a.vL);return;}if(d[72]){c=a.vL;e=c.ou+1|0;d=c.o2.data;e=e%d.length|0;c.ou=e;Cd(c,d[e]);return;}if(B5(c,76)){c=a.vL;Cd(c,c.Gz);return;}if(B5(Bd,111))return;EW(1.0,1.0,1.0,1.0);f=a.A0.oT;CY(f);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vD,M);a.t8=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vD,M);a.t8=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vD,M);a.t8=M;}a.t8=U(a.t8,I(1));JQ(a.x0,Bl,Bo,Bz);e=0;while(e<65536){g=IR(a.x0)
*128.0+256.0|0;if(g>=0&&g<512){d=a.vD.data;d[g]=U(d[g],I(1));}e=e+1|0;}Cq(a.rw,f.oF,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rw,i);c=a.rw;b=h;Bh(c,b,0.0,0.0);Bg(a.rw,i);Bh(a.rw,b,BB(BS(a.vD.data[h],a.t8)),0.0);h=h+1|0;}j=8;while(j<520){Bg(a.rw,(-6.221923240859403E37));c=a.rw;i=j;Bh(c,0.0,i,0.0);Bg(a.rw,(-6.221923240859403E37));Bh(a.rw,10.0,i,0.0);j=j+32|0;}Cx(a.rw);Cs(a.vs,f.oF);Cl(a.vs);Bw(a.Ak,a.vs,CF(C(514),R(D,[BK(Bl),BK(Bo),BK(Jq(a.x0)),Cc(Cv(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.Ak,a.vs,C(501),64.0,494.0,384.0,1,1);Bw(a.Ak,a.vs,C(507),64.0,468.0,384.0,1,1);Ck(a.vs);}
let AL_=(a,b,c)=>{let d,e,f;d=a.A0;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.A0,1);}
function AAi(){let a=this;BL.call(a);a.zi=null;a.Av=0.0;a.ue=null;a.rn=null;a.uV=null;a.tk=M;a.BQ=null;a.Cb=null;a.xu=null;}
let Bgc=a=>{let b=new AAi();AIX(b,a);return b;}
let ATe=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;b=a.xu;a.BQ=b.pa;b:{try{a.zi=OE(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new HY;b.ot=a.xu.oP;if(isNaN(0.0)?1:0)c=0;else{b.sT=0.0;b.s9=1.0;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(505);E(d);}a.zi=b;}e=Bz;a.Av=BB(BC(e+PN(e)*0.5));a.ue=a.xu.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;f=new Bf;BU();d.pg=f;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.Cb=b;b=new Ch;g=Cz(CD(0,1,0),CE(0,1,0));if(g.oD){Ct(b,1536,0,1,0,g);b.po=1;a.rn=b;h=a.uV.data;c
=0;i=h.length;if(c>i){b=new V;b.n_=1;b.oa=1;E(b);}while(c<i){j=c+1|0;h[c]=M;c=j;}a.tk=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!g.oD)f=g.oA;else{f=Bq.i4(g.o0);g.oA=f;}F(d,d.n$,f);f=new P;h=d.ob;k=h.data;i=d.n$;S();j=k.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(h.data,0,i);b.n_=1;b.oa=1;b.od=f;E(b);}b=new O;BY(b);E(b);}
let AIX=(a,b)=>{a.Av=1.0;a.uV=Co(512);a.tk=M;a.xu=b;}
let A2f=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){Eg(a.xu);return;}if(d[72]){c=a.xu;e=c.ou+1|0;d=c.o2.data;e=e%d.length|0;c.ou=e;Cd(c,d[e]);return;}if(B5(c,111))return;EW(1.0,1.0,1.0,1.0);c=DW(a.Cb);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uV,M);a.tk=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uV,M);a.tk=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uV,M);a.tk=M;a.Av=BB(AQn(Bz));}a.tk=U(a.tk,I(1));JQ(a.zi,Bl,Bo,Bz);e=0;while(e<65536){f=Rz(IR(a.zi),a.Av)*128.0+256.0
|0;if(f>=0&&f<512){d=a.uV.data;d[f]=U(d[f],I(1));}e=e+1|0;}Cq(a.rn,c.oF,1);g=0;while(g<512){h=g&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rn,h);i=a.rn;b=g;Bh(i,b,0.0,0.0);Bg(a.rn,h);Bh(a.rn,b,BB(BS(a.uV.data[g],a.tk)),0.0);g=g+1|0;}j=8;while(j<520){Bg(a.rn,(-6.221923240859403E37));i=a.rn;h=j;Bh(i,0.0,h,0.0);Bg(a.rn,(-6.221923240859403E37));Bh(a.rn,10.0,h,0.0);j=j+32|0;}Cx(a.rn);Cs(a.ue,c.oF);Cl(a.ue);Bw(a.BQ,a.ue,CF(C(515),R(D,[BK(Bl),BK(Bo),BK(Bz),BK(Jq(a.zi)),Cc(Cv(Bb))])),64.0,522.0,384.0,
1,1);Bw(a.BQ,a.ue,C(501),64.0,494.0,384.0,1,1);Bw(a.BQ,a.ue,C(516),64.0,468.0,384.0,1,1);Ck(a.ue);}
let AT8=(a,b,c)=>{let d,e,f;d=a.Cb;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Cb,1);}
function YM(){let a=this;BL.call(a);a.wJ=null;a.AC=0.0;a.vj=null;a.rU=null;a.uW=null;a.s$=M;a.AU=null;a.A$=null;a.wA=null;}
let BbO=a=>{let b=new YM();A1t(b,a);return b;}
let AOP=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wA;a.AU=b.pa;b:{try{a.wJ=OE(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new HY;b.ot=a.wA.oP;if(isNaN(0.0)?1:0)c=0;else{b.sT=0.0;b.s9=1.0;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(505);E(d);}a.wJ=b;}a.AC=Yn(Bz,1.0);a.vj=a.wA.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;e=new Bf;BU();d.pg=e;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.A$=b;b=new Ch;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oD){Ct(b,1536,0,1,0,f);b.po=1;a.rU=b;g=a.uW.data;c=0;h=g.length;if
(c>h){b=new V;b.n_=1;b.oa=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.s$=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!f.oD)e=f.oA;else{e=Bq.i4(f.o0);f.oA=e;}F(d,d.n$,e);e=new P;g=d.ob;j=g.data;h=d.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(g.data,0,h);b.n_=1;b.oa=1;b.od=e;E(b);}b=new O;BY(b);E(b);}
let A1t=(a,b)=>{a.AC=1.0;a.uW=Co(512);a.s$=M;a.wA=b;}
let A3Y=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bd;d=c.pc.data;if(d[71]){Eg(a.wA);return;}if(d[72]){Dj(a.wA);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);e=a.A$.oT;CY(e);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.uW,M);a.s$=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uW,M);a.s$=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uW,M);a.s$=M;a.AC=ASG(Bz,1.0);}a.s$=U(a.s$,I(1));JQ(a.wJ,Bl,Bo,Bz);f=0;while(f<65536){g=IR(a.wJ);h=1;while(h<a.AC){g=g*IR(a.wJ);h=h+1|0;}i=g*128.0+256.0|0;if(i>=0&&i
<512){d=a.uW.data;d[i]=U(d[i],I(1));}f=f+1|0;}Cq(a.rU,e.oF,1);j=0;while(j<512){k=j&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rU,k);c=a.rU;b=j;Bh(c,b,0.0,0.0);Bg(a.rU,k);Bh(a.rU,b,BB(BS(a.uW.data[j],a.s$)),0.0);j=j+1|0;}h=8;while(h<520){Bg(a.rU,(-6.221923240859403E37));c=a.rU;k=h;Bh(c,0.0,k,0.0);Bg(a.rU,(-6.221923240859403E37));Bh(a.rU,10.0,k,0.0);h=h+32|0;}Cx(a.rU);Cs(a.vj,e.oF);Cl(a.vj);Bw(a.AU,a.vj,CF(C(517),R(D,[BK(Bl),BK(Bo),BK(Bz),BK(Jq(a.wJ)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.AU,
a.vj,C(501),64.0,494.0,384.0,1,1);Bw(a.AU,a.vj,C(518),64.0,468.0,384.0,1,1);Ck(a.vj);}
let A6G=(a,b,c)=>{let d,e,f;d=a.A$;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.A$,1);}
function Xi(){let a=this;BL.call(a);a.y8=null;a.up=null;a.rl=null;a.vN=null;a.tO=M;a.Bm=null;a.AG=null;a.vo=null;}
let Ba$=a=>{let b=new Xi();AT4(b,a);return b;}
let A3k=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.vo;a.Bm=b.pa;b:{try{a.y8=BfN(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new RM;b.ot=a.vo.oP;if(isNaN(0.0)?1:0)c=0;else{b.yy=0.0;b.zZ=1.0;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(499);E(d);}a.y8=b;}a.up=a.vo.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;e=new Bf;BU();d.pg=e;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.AG=b;b=new Ch;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oD){Ct(b,1536,0,1,0,f);b.po=1;a.rl=b;g=a.vN.data;c=0;h=g.length;if(c>h){b=new V;b.n_
=1;b.oa=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.tO=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!f.oD)e=f.oA;else{e=Bq.i4(f.o0);f.oA=e;}F(d,d.n$,e);e=new P;g=d.ob;j=g.data;h=d.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(g.data,0,h);b.n_=1;b.oa=1;b.od=e;E(b);}b=new O;BY(b);E(b);}
let AT4=(a,b)=>{a.vN=Co(512);a.tO=M;a.vo=b;}
let A5y=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){Eg(a.vo);return;}if(d[72]){c=a.vo;e=c.ou+1|0;d=c.o2.data;e=e%d.length|0;c.ou=e;Cd(c,d[e]);return;}if(B5(c,76)){c=a.vo;Cd(c,c.Go);return;}if(B5(Bd,111))return;EW(1.0,1.0,1.0,1.0);f=a.AG.oT;CY(f);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vN,M);a.tO=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vN,M);a.tO=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vN,M);a.tO=M;}a.tO=U(a.tO,I(1));ADt(a.y8,Bl,Bo,Bz);e=0;while(e<65536){g=ACm(a.y8)
*128.0+256.0|0;if(g>=0&&g<512){d=a.vN.data;d[g]=U(d[g],I(1));}e=e+1|0;}Cq(a.rl,f.oF,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rl,i);c=a.rl;b=h;Bh(c,b,0.0,0.0);Bg(a.rl,i);Bh(a.rl,b,BB(BS(a.vN.data[h],a.tO)),0.0);h=h+1|0;}j=8;while(j<520){Bg(a.rl,(-6.221923240859403E37));c=a.rl;i=j;Bh(c,0.0,i,0.0);Bg(a.rl,(-6.221923240859403E37));Bh(a.rl,10.0,i,0.0);j=j+32|0;}Cx(a.rl);Cs(a.up,f.oF);Cl(a.up);Bw(a.Bm,a.up,CF(C(519),R(D,[BK(Bl),BK(Bo),BK(Zy(a.y8)),Cc(Cv(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.Bm,a.up,C(501),64.0,494.0,384.0,1,1);Bw(a.Bm,a.up,C(502),64.0,468.0,384.0,1,1);Ck(a.up);}
let AS1=(a,b,c)=>{let d,e,f;d=a.AG;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.AG,1);}
function ACD(){let a=this;BL.call(a);a.zt=null;a.uz=null;a.rv=null;a.u4=null;a.sY=M;a.Cf=null;a.zJ=null;a.xe=null;}
let Beb=a=>{let b=new ACD();A2H(b,a);return b;}
let A9s=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.xe;a.Cf=b.pa;b:{try{a.zt=Bdf(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new PM;b.ot=a.xe.oP;if(isNaN(0.0)?1:0)c=0;else{b.zy=0.0;b.AA=1.0;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(505);E(d);}a.zt=b;}a.uz=a.xe.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;e=new Bf;BU();d.pg=e;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.zJ=b;b=new Ch;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oD){Ct(b,1536,0,1,0,f);b.po=1;a.rv=b;g=a.u4.data;c=0;h=g.length;if(c>h){b=new V;b.n_
=1;b.oa=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.sY=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!f.oD)e=f.oA;else{e=Bq.i4(f.o0);f.oA=e;}F(d,d.n$,e);e=new P;g=d.ob;j=g.data;h=d.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(g.data,0,h);b.n_=1;b.oa=1;b.od=e;E(b);}b=new O;BY(b);E(b);}
let A2H=(a,b)=>{a.u4=Co(512);a.sY=M;a.xe=b;}
let A7D=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.xe;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.xe);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);g=a.zJ.oT;Ft(g,1);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.u4,M);a.sY=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.u4,M);a.sY=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.u4,M);a.sY=M;}a.sY=U(a.sY,I(1));AHf(a.zt,Bl,Bo,Bz);e=0;while(e<65536){h=AGU(a.zt)*128.0|0;if(h>=0&&h<
512){d=a.u4.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rv,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rv,i);c=a.rv;b=f;Bh(c,b,0.0,0.0);Bg(a.rv,i);Bh(a.rv,b,BB(BS(a.u4.data[f],a.sY)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rv,(-6.221923240859403E37));c=a.rv;i=j;Bh(c,0.0,i,0.0);Bg(a.rv,(-6.221923240859403E37));Bh(a.rv,10.0,i,0.0);j=j+32|0;}Cx(a.rv);Cs(a.uz,g.oF);Cl(a.uz);Bw(a.Cf,a.uz,CF(C(520),R(D,[BK(Bl),BK(Bo),BK(AGd(a.zt)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.Cf,a.uz,C(501),
64.0,494.0,384.0,1,1);Bw(a.Cf,a.uz,C(507),64.0,468.0,384.0,1,1);Ck(a.uz);}
let ASL=(a,b,c)=>{let d,e,f;d=a.zJ;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.zJ,1);}
function Vq(){let a=this;BL.call(a);a.Bc=null;a.vi=null;a.rW=null;a.u8=null;a.tX=M;a.Bh=null;a.Bb=null;a.wC=null;}
let BaT=a=>{let b=new Vq();ARC(b,a);return b;}
let A13=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wC;a.Bh=b.pa;b:{try{a.Bc=BdJ(b.oP,Bl|0,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new OQ;b.ot=a.wC.oP;b.AM=1;b.zQ=1.0;a.Bc=b;}a.vi=a.wC.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.Bb=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rW=b;f=a.u8.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tX=M;return;}b=new Bc;c
=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let ARC=(a,b)=>{a.u8=Co(512);a.tX=M;a.wC=b;}
let AUJ=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wC;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){c=a.wC;e=c.ou+1|0;d=c.o2.data;e=e%d.length|0;c.ou=e;Cd(c,d[e]);return;}if(B5(c,111))return;EW(1.0,1.0,1.0,1.0);c=DW(a.Bb);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-2.5):2.5)*BZ(Bb);Br(a.u8,M);a.tX=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.u8,M);a.tX=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.u8,M);a.tX=M;}a.tX=U(a.tX,I(1));VS(a.Bc,Bl,Bo,0.0);e
=0;while(e<65536){g=ACt(a.Bc)*128.0|0;if(g>=0&&g<512){d=a.u8.data;d[g]=U(d[g],I(1));}e=e+1|0;}Cq(a.rW,c.oF,1);f=0;while(f<512){h=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rW,h);i=a.rW;b=f;Bh(i,b,0.0,0.0);Bg(a.rW,h);Bh(a.rW,b,BB(BS(a.u8.data[f],a.tX)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rW,(-6.221923240859403E37));i=a.rW;h=j;Bh(i,0.0,h,0.0);Bg(a.rW,(-6.221923240859403E37));Bh(a.rW,10.0,h,0.0);j=j+32|0;}Cx(a.rW);Cs(a.vi,c.oF);Cl(a.vi);Bw(a.Bh,a.vi,CF(C(521),R(D,[BK(Bl),BK(Bo),Cc(Cv(Bb))])),64.0,
522.0,384.0,1,1);Bw(a.Bh,a.vi,C(501),64.0,494.0,384.0,1,1);Bw(a.Bh,a.vi,C(522),64.0,468.0,384.0,1,1);Ck(a.vi);}
let AYZ=(a,b,c)=>{let d,e,f;d=a.Bb;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Bb,1);}
function ACB(){let a=this;BL.call(a);a.yC=null;a.u7=null;a.rZ=null;a.v4=null;a.tK=M;a.AL=null;a.z0=null;a.wD=null;}
let Bba=a=>{let b=new ACB();A2W(b,a);return b;}
let APm=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wD;a.AL=b.pa;b:{try{a.yC=BbI(b.oP,Bl);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new R5;b.ot=a.wD.oP;b.yh=1.0;a.yC=b;}a.u7=a.wD.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.z0=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rZ=b;f=a.v4.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tK=M;return;}b=new Bc;c=new L;c.ob=
H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A2W=(a,b)=>{a.v4=Co(512);a.tK=M;a.wD=b;}
let ARy=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bd;d=c.pc.data;if(d[71]){c=a.wD;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wD);return;}if(B5(c,111))return;Cj.j$(1.0,1.0,1.0,1.0);Cj.j_(16384);g=a.z0.oT;CY(g);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.v4,M);a.tK=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v4,M);a.tK=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v4,M);a.tK=M;}a.tK=U(a.tK,I(1));Vr(a.yC,Bl,Bo,Bz);e=0;while(e<65536){h=AIg(a.yC)*128.0
|0;if(h>=0&&h<512){d=a.v4.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rZ,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rZ,i);c=a.rZ;b=f;Bh(c,b,0.0,0.0);Bg(a.rZ,i);Bh(a.rZ,b,BB(BS(a.v4.data[f],a.tK)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rZ,(-6.221923240859403E37));c=a.rZ;k=j;Bh(c,0.0,k,0.0);Bg(a.rZ,(-6.221923240859403E37));Bh(a.rZ,10.0,k,0.0);j=j+32|0;}Cx(a.rZ);Cs(a.u7,g.oF);Cl(a.u7);Bw(a.AL,a.u7,CF(C(523),R(D,[BK(Bl),BK(AG9(a.yC)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.AL,
a.u7,C(501),64.0,494.0,384.0,1,1);Bw(a.AL,a.u7,C(524),64.0,468.0,384.0,1,1);Ck(a.u7);}
let AYH=(a,b,c)=>{let d,e,f;d=a.z0;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.z0,1);}
function AH0(){let a=this;BL.call(a);a.y5=null;a.vH=null;a.rK=null;a.vc=null;a.t4=M;a.BN=null;a.AI=null;a.wj=null;}
let BdF=a=>{let b=new AH0();APK(b,a);return b;}
let A4a=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wj;a.BN=b.pa;b:{try{a.y5=BaN(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new Vh;b.ot=a.wj.oP;b.zA=1.0;b.zd=1.0;a.y5=b;}a.vH=a.wj.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.AI=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rK=b;f=a.vc.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t4=M;return;}b=new Bc;c
=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let APK=(a,b)=>{a.vc=Co(512);a.t4=M;a.wj=b;}
let AXH=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wj;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wj);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);g=a.AI.oT;Ft(g,1);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vc,M);a.t4=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vc,M);a.t4=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vc,M);a.t4=M;}a.t4=U(a.t4,I(1));ADg(a.y5,Bl,Bo,Bz);e=0;while(e<65536){h=ZP(a.y5)*128.0|0;if(h>=0&&h<512)
{d=a.vc.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rK,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rK,i);c=a.rK;b=f;Bh(c,b,0.0,0.0);Bg(a.rK,i);Bh(a.rK,b,BB(BS(a.vc.data[f],a.t4)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rK,(-6.221923240859403E37));c=a.rK;i=j;Bh(c,0.0,i,0.0);Bg(a.rK,(-6.221923240859403E37));Bh(a.rK,10.0,i,0.0);j=j+32|0;}Cx(a.rK);Cs(a.vH,g.oF);Cl(a.vH);Bw(a.BN,a.vH,CF(C(525),R(D,[BK(Bl),BK(Bo),BK(AFq(a.y5)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BN,a.vH,C(501),
64.0,494.0,384.0,1,1);Bw(a.BN,a.vH,C(511),64.0,468.0,384.0,1,1);Ck(a.vH);}
let AIs=(a,b,c)=>{let d,e,f;d=a.AI;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.AI,1);}
function XM(){let a=this;BL.call(a);a.zc=null;a.uo=null;a.rI=null;a.vy=null;a.t9=M;a.BL=null;a.Ah=null;a.wx=null;}
let BfY=a=>{let b=new XM();A3v(b,a);return b;}
let AUR=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wx;a.BL=b.pa;b:{try{a.zc=BeI(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new R6;b.ot=a.wx.oP;b.zC=1.0;b.xF=1.0;a.zc=b;}a.uo=a.wx.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.Ah=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rI=b;f=a.vy.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t9=M;return;}b=new Bc;c
=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A3v=(a,b)=>{a.vy=Co(512);a.t9=M;a.wx=b;}
let AJQ=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wx;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wx);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);g=a.Ah.oT;Ft(g,1);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vy,M);a.t9=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vy,M);a.t9=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vy,M);a.t9=M;}a.t9=U(a.t9,I(1));Vp(a.zc,Bl,Bo,Bz);e=0;while(e<65536){h=Z8(a.zc)*128.0|0;if(h>=0&&h<512)
{d=a.vy.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rI,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rI,i);c=a.rI;b=f;Bh(c,b,0.0,0.0);Bg(a.rI,i);Bh(a.rI,b,BB(BS(a.vy.data[f],a.t9)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rI,(-6.221923240859403E37));c=a.rI;i=j;Bh(c,0.0,i,0.0);Bg(a.rI,(-6.221923240859403E37));Bh(a.rI,10.0,i,0.0);j=j+32|0;}Cx(a.rI);Cs(a.uo,g.oF);Cl(a.uo);Bw(a.BL,a.uo,CF(C(526),R(D,[BK(Bl),BK(Bo),BK(ABO(a.zc)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BL,a.uo,C(501),
64.0,494.0,384.0,1,1);Bw(a.BL,a.uo,C(511),64.0,468.0,384.0,1,1);Ck(a.uo);}
let A9b=(a,b,c)=>{let d,e,f;d=a.Ah;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Ah,1);}
function AF9(){let a=this;BL.call(a);a.zm=null;a.uv=null;a.rt=null;a.uI=null;a.tB=M;a.B0=null;a.Am=null;a.w_=null;}
let Bc6=a=>{let b=new AF9();AMM(b,a);return b;}
let AWd=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.w_;a.B0=b.pa;b:{try{a.zm=Baz(b.oP,Bl|0);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new Pt;b.ot=a.w_.oP;b.wl=1;a.zm=b;}a.uv=a.w_.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.Am=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rt=b;f=a.uI.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tB=M;return;}b=new Bc;c=new L;c.ob=
H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AMM=(a,b)=>{a.uI=Co(512);a.tB=M;a.w_=b;}
let AOt=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bd;d=c.pc.data;if(d[71]){c=a.w_;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.w_);return;}if(B5(c,111))return;Cj.j$(1.0,1.0,1.0,1.0);Cj.j_(16384);g=a.Am.oT;CY(g);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.uI,M);a.tB=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uI,M);a.tB=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uI,M);a.tB=M;}a.tB=U(a.tB,I(1));AD8(a.zm,Bl,Bo,Bz);e=0;while(e<65536){h=ABA(a.zm)*128.0
|0;if(h>=0&&h<512){d=a.uI.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rt,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rt,i);c=a.rt;b=f;Bh(c,b,0.0,0.0);Bg(a.rt,i);Bh(a.rt,b,BB(BS(a.uI.data[f],a.tB)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rt,(-6.221923240859403E37));c=a.rt;k=j;Bh(c,0.0,k,0.0);Bg(a.rt,(-6.221923240859403E37));Bh(a.rt,10.0,k,0.0);j=j+32|0;}Cx(a.rt);Cs(a.uv,g.oF);Cl(a.uv);Bw(a.B0,a.uv,CF(C(527),R(D,[BK(Bl),BK(AAP(a.zm)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.B0,
a.uv,C(501),64.0,494.0,384.0,1,1);Bw(a.B0,a.uv,C(524),64.0,468.0,384.0,1,1);Ck(a.uv);}
let A7v=(a,b,c)=>{let d,e,f;d=a.Am;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Am,1);}
function AE8(){let a=this;BL.call(a);a.y3=null;a.uX=null;a.rO=null;a.vX=null;a.to=M;a.BO=null;a.Bx=null;a.wr=null;}
let Bd4=a=>{let b=new AE8();A1W(b,a);return b;}
let AUh=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wr;a.BO=b.pa;b:{try{a.y3=Ba7(b.oP,Bl|0);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new Ss;b.ot=a.wr.oP;b.y_=1;a.y3=b;}a.uX=a.wr.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.Bx=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rO=b;f=a.vX.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.to=M;return;}b=new Bc;c=new L;c.ob=
H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A1W=(a,b)=>{a.vX=Co(512);a.to=M;a.wr=b;}
let A57=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bd;d=c.pc.data;if(d[71]){c=a.wr;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wr);return;}if(B5(c,111))return;Cj.j$(1.0,1.0,1.0,1.0);Cj.j_(16384);g=a.Bx.oT;CY(g);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vX,M);a.to=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vX,M);a.to=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vX,M);a.to=M;}a.to=U(a.to,I(1));AAm(a.y3,Bl,Bo,Bz);e=0;while(e<65536){h=ADG(a.y3)*128.0
|0;if(h>=0&&h<512){d=a.vX.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rO,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rO,i);c=a.rO;b=f;Bh(c,b,0.0,0.0);Bg(a.rO,i);Bh(a.rO,b,BB(BS(a.vX.data[f],a.to)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rO,(-6.221923240859403E37));c=a.rO;k=j;Bh(c,0.0,k,0.0);Bg(a.rO,(-6.221923240859403E37));Bh(a.rO,10.0,k,0.0);j=j+32|0;}Cx(a.rO);Cs(a.uX,g.oF);Cl(a.uX);Bw(a.BO,a.uX,CF(C(528),R(D,[BK(Bl),BK(AB2(a.y3)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BO,
a.uX,C(501),64.0,494.0,384.0,1,1);Bw(a.BO,a.uX,C(524),64.0,468.0,384.0,1,1);Ck(a.uX);}
let AZ9=(a,b,c)=>{let d,e,f;d=a.Bx;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Bx,1);}
function ACc(){let a=this;BL.call(a);a.za=null;a.vP=null;a.rD=null;a.uL=null;a.s_=M;a.Bu=null;a.Ar=null;a.v_=null;}
let A_z=a=>{let b=new ACc();ALk(b,a);return b;}
let A5c=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.v_;a.Bu=b.pa;b:{try{a.za=Bdm(b.oP,Bl|0);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new UY;b.ot=a.v_.oP;b.Bs=1.0;a.za=b;}a.vP=a.v_.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.Ar=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rD=b;f=a.uL.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.s_=M;return;}b=new Bc;c=new L;c.ob
=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let ALk=(a,b)=>{a.uL=Co(512);a.s_=M;a.v_=b;}
let A3J=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bd;d=c.pc.data;if(d[71]){c=a.v_;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.v_);return;}if(B5(c,111))return;Cj.j$(1.0,1.0,1.0,1.0);Cj.j_(16384);g=a.Ar.oT;CY(g);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.uL,M);a.s_=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uL,M);a.s_=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.uL,M);a.s_=M;}a.s_=U(a.s_,I(1));AEi(a.za,Bl,Bo,Bz);e=0;while(e<65536){h=Wa(a.za)*128.0
|0;if(h>=0&&h<512){d=a.uL.data;d[h]=U(d[h],I(1));}e=e+1|0;}Cq(a.rD,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rD,i);c=a.rD;b=f;Bh(c,b,0.0,0.0);Bg(a.rD,i);Bh(a.rD,b,BB(BS(a.uL.data[f],a.s_)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rD,(-6.221923240859403E37));c=a.rD;k=j;Bh(c,0.0,k,0.0);Bg(a.rD,(-6.221923240859403E37));Bh(a.rD,10.0,k,0.0);j=j+32|0;}Cx(a.rD);Cs(a.vP,g.oF);Cl(a.vP);Bw(a.Bu,a.vP,CF(C(529),R(D,[BK(Bl),BK(Zu(a.za)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.Bu,
a.vP,C(501),64.0,494.0,384.0,1,1);Bw(a.Bu,a.vP,C(530),64.0,468.0,384.0,1,1);Ck(a.vP);}
let ASK=(a,b,c)=>{let d,e,f;d=a.Ar;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Ar,1);}
function Vs(){let a=this;BL.call(a);a.xV=null;a.uf=null;a.rN=null;a.v3=null;a.tt=M;a.Aa=null;a.zW=null;a.vM=null;}
let BeP=a=>{let b=new Vs();ANv(b,a);return b;}
let A2R=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.vM;a.Aa=b.pa;b:{try{a.xV=AM8(b.oP,Bl,Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new K4;b.ot=a.vM.oP;b.uD=0.0;b.vx=1.0;a.xV=b;}a.uf=a.vM.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.zW=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rN=b;f=a.v3.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tt=M;return;}b=new Bc;c
=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let ANv=(a,b)=>{a.v3=Co(512);a.tt=M;a.vM=b;}
let A0I=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){Eg(a.vM);return;}if(d[72]){c=a.vM;e=c.ou+1|0;d=c.o2.data;e=e%d.length|0;c.ou=e;Cd(c,d[e]);return;}if(B5(c,76)){c=a.vM;Cd(c,c.Fw);return;}if(B5(Bd,111))return;EW(1.0,1.0,1.0,1.0);f=a.zW.oT;CY(f);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v3,M);a.tt=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v3,M);a.tt=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v3,M);a.tt=M;}a.tt=U(a.tt,I(1));OA(a.xV,Bl,Bo,Bz);e=0;while(e<65536){g=SX(a.xV)
*128.0+256.0|0;if(g>=0&&g<512){d=a.v3.data;d[g]=U(d[g],I(1));}e=e+1|0;}Cq(a.rN,f.oF,1);h=0;while(h<512){i=h&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rN,i);c=a.rN;b=h;Bh(c,b,0.0,0.0);Bg(a.rN,i);Bh(a.rN,b,BB(BS(a.v3.data[h],a.tt)),0.0);h=h+1|0;}j=8;while(j<520){Bg(a.rN,(-6.221923240859403E37));c=a.rN;i=j;Bh(c,0.0,i,0.0);Bg(a.rN,(-6.221923240859403E37));Bh(a.rN,10.0,i,0.0);j=j+32|0;}Cx(a.rN);Cs(a.uf,f.oF);Cl(a.uf);Bw(a.Aa,a.uf,CF(C(503),R(D,[BK(Bl),BK(Bo),BK(N$(a.xV)),Cc(Cv(Bb))])),64.0,522.0,
384.0,1,1);Bw(a.Aa,a.uf,C(501),64.0,494.0,384.0,1,1);Bw(a.Aa,a.uf,C(531),64.0,468.0,384.0,1,1);Ck(a.uf);}
let AUf=(a,b,c)=>{let d,e,f;d=a.zW;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.zW,1);}
function AD0(){let a=this;BL.call(a);a.zq=null;a.vl=null;a.rV=null;a.vp=null;a.s2=M;a.B8=null;a.AT=null;a.wF=null;}
let A_r=a=>{let b=new AD0();A$v(b,a);return b;}
let A3U=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wF;a.B8=b.pa;b:{try{a.zq=BbV(b.oP,Bl,Bo|0);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new P3;b.ot=a.wF.oP;if(1<0.0)c=0;else{b.yf=0.5;b.xZ=1;c=1;}if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(532);E(d);}a.zq=b;}a.vl=a.wF.o9;b=new Ci;d=new Cg;Cu(d);d.pj=1.0;e=new Bf;BU();d.pg=e;d.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=d;a.AT=b;b=new Ch;f=Cz(CD(0,1,0),CE(0,1,0));if(f.oD){Ct(b,1536,0,1,0,f);b.po=1;a.rV=b;g=a.vp.data;c=0;h=g.length;if(c>h){b=new V;b.n_=1;b.oa
=1;E(b);}while(c<h){i=c+1|0;g[c]=M;c=i;}a.s2=M;return;}b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(493));if(!f.oD)e=f.oA;else{e=Bq.i4(f.o0);f.oA=e;}F(d,d.n$,e);e=new P;g=d.ob;j=g.data;h=d.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){e.oc=Q(g.data,0,h);b.n_=1;b.oa=1;b.od=e;E(b);}b=new O;BY(b);E(b);}
let A$v=(a,b)=>{a.vp=Co(512);a.s2=M;a.wF=b;}
let AQ$=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wF;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wF);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);g=a.AT.oT;Ft(g,1);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vp,M);a.s2=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-2.5):2.5)*Bb.pu;Br(a.vp,M);a.s2=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.vp,M);a.s2=M;}a.s2=U(a.s2,I(1));VQ(a.zq,Bl,Bo,Bz);e=0;while(e<2048){h=WN(a.zq)|0;if(h>=0&&h<16){d=a.vp.data;d[h]
=U(d[h],I(1));}e=e+1|0;}Cq(a.rV,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rV,i);c=a.rV;b=f;Bh(c,b,0.0,0.0);Bg(a.rV,i);Bh(a.rV,b,BB(BS(a.vp.data[f>>>5|0],a.s2)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rV,(-6.221923240859403E37));c=a.rV;i=j;Bh(c,0.0,i,0.0);Bg(a.rV,(-6.221923240859403E37));Bh(a.rV,10.0,i,0.0);j=j+32|0;}Cx(a.rV);Cs(a.vl,g.oF);Cl(a.vl);Bw(a.B8,a.vl,CF(C(533),R(D,[BK(Bl),BK(Bo),BK(W8(a.zq)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.B8,a.vl,C(534),64.0,494.0,
384.0,1,1);Bw(a.B8,a.vl,C(535),64.0,468.0,384.0,1,1);Ck(a.vl);}
let A0x=(a,b,c)=>{let d,e,f;d=a.AT;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.AT,1);}
function AGi(){let a=this;BL.call(a);a.xD=null;a.ve=null;a.rP=null;a.u1=null;a.tE=M;a.zV=null;a.As=null;a.wb=null;}
let Bc0=a=>{let b=new AGi();AQD(b,a);return b;}
let APc=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wb;a.zV=b.pa;b:{try{a.xD=Bcc(b.oP,BC(Bl),Bo);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new Sb;b.ot=a.wb.oP;if(!Ll(b,16.0,0.5,0.0)){c=new V;c.n_=1;c.oa=1;c.od=C(536);E(c);}a.xD=b;}a.ve=a.wb.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.As=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rP=b;f=a.u1.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g
<h){i=g+1|0;f[g]=M;g=i;}a.tE=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AQD=(a,b)=>{a.u1=Co(512);a.tE=M;a.wb=b;}
let AJq=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wb;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wb);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);g=a.As.oT;Ft(g,1);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-2.5):2.5)*Bb.pu;Br(a.u1,M);a.tE=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.u1,M);a.tE=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*Bb.pu;Br(a.u1,M);a.tE=M;}a.tE=U(a.tE,I(1));Ll(a.xD,Bl,Bo,0.0);e=0;while(e<4096){h=ACO(a.xD)|0;if(h>=0&&h<32){d=a.u1.data;d[h]
=U(d[h],I(1));}e=e+1|0;}Cq(a.rP,g.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rP,i);c=a.rP;b=f;Bh(c,b,0.0,0.0);Bg(a.rP,i);Bh(a.rP,b,BB(BS(a.u1.data[f>>4],a.tE)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rP,(-6.221923240859403E37));c=a.rP;i=j;Bh(c,0.0,i,0.0);Bg(a.rP,(-6.221923240859403E37));Bh(a.rP,10.0,i,0.0);j=j+32|0;}Cx(a.rP);Cs(a.ve,g.oF);Cl(a.ve);Bw(a.zV,a.ve,CF(C(537),R(D,[BK(Bl),BK(Bo),BK(AHA(a.xD)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.zV,a.ve,C(501),64.0,494.0,384.0,
1,1);Bw(a.zV,a.ve,C(538),64.0,468.0,384.0,1,1);Ck(a.ve);}
let A5f=(a,b,c)=>{let d,e,f;d=a.As;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.As,1);}
function ABk(){let a=this;BL.call(a);a.zf=null;a.vq=null;a.rR=null;a.v2=null;a.tf=M;a.BU=null;a.A9=null;a.uH=null;}
let Beq=a=>{let b=new ABk();AVx(b,a);return b;}
let ATX=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.uH;a.BU=b.pa;b:{try{a.zf=AOv(b.oP,Bl,Bo,Bz);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new MN;b.ot=a.uH.oP;b.wQ=0.0;b.wc=1.0;b.wT=0.5;a.zf=b;}a.vq=a.uH.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.A9=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rR=b;f=a.v2.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tf=M;return;}b
=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AVx=(a,b)=>{a.v2=Co(512);a.tf=M;a.uH=b;}
let AIK=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){Eg(a.uH);return;}if(d[72]){Dj(a.uH);return;}if(B5(c,76)){c=a.uH;Cd(c,c.Fz);return;}if(B5(Bd,111))return;Cj.j$(1.0,1.0,1.0,1.0);Cj.j_(16384);c=DW(a.A9);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v2,M);a.tf=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v2,M);a.tf=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.v2,M);a.tf=M;}a.tf=U(a.tf,I(1));QD(a.zf,Bl,Bo,Bz);e=0;while(e<65536){f=ABo(a.zf)*128.0+256.0|0;if(f>=0&&f<512){d
=a.v2.data;d[f]=U(d[f],I(1));}e=e+1|0;}Cq(a.rR,c.oF,1);g=0;while(g<512){h=g&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rR,h);i=a.rR;b=g;Bh(i,b,0.0,0.0);Bg(a.rR,h);Bh(a.rR,b,BB(BS(a.v2.data[g],a.tf)),0.0);g=g+1|0;}j=8;while(j<520){Bg(a.rR,(-6.221923240859403E37));i=a.rR;h=j;Bh(i,0.0,h,0.0);Bg(a.rR,(-6.221923240859403E37));Bh(a.rR,10.0,h,0.0);j=j+32|0;}Cx(a.rR);Cs(a.vq,c.oF);Cl(a.vq);Bw(a.BU,a.vq,CF(C(539),R(D,[BK(Bl),BK(Bo),BK(Bz),BK(SV(a.zf)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.BU,a.vq,C(501),
64.0,494.0,384.0,1,1);Bw(a.BU,a.vq,C(540),64.0,468.0,384.0,1,1);Ck(a.vq);}
let A0c=(a,b,c)=>{let d,e,f;d=a.A9;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.A9,1);}
function AEV(){let a=this;BL.call(a);a.yP=null;a.vF=null;a.rJ=null;a.vC=null;a.s1=M;a.Bq=null;a.Ab=null;a.wu=null;}
let Bcf=a=>{let b=new AEV();A$x(b,a);return b;}
let AWi=a=>{let b,c,d,e,f,g,h,i,j,$$je;b=a.wu;a.Bq=b.pa;b:{try{a.yP=BcA(b.oP,Bl,Bo,Bz);break b;}catch($$e){$$je=BG($$e);if($$je instanceof V){}else{throw $$e;}}b=new RE;b.ot=a.wu.oP;if(!NL(b,0.0,1.0,0.5)){c=new V;c.n_=1;c.oa=1;c.od=C(541);E(c);}a.yP=b;}a.vF=a.wu.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.Ab=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rJ=b;f=a.vC.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<
h){i=g+1|0;f[g]=M;g=i;}a.s1=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A$x=(a,b)=>{a.vC=Co(512);a.s1=M;a.wu=b;}
let AP1=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bd;d=c.pc.data;if(d[71]){c=a.wu;e=c.ou;d=c.o2.data;f=d.length;e=((e+f|0)-1|0)%f|0;c.ou=e;Cd(c,d[e]);return;}if(d[72]){Dj(a.wu);return;}if(B5(c,111))return;DR(1.0,1.0,1.0,1.0,0);c=DW(a.Ab);CY(c);if(Bs(Bd,29)){Bl=Bl+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vC,M);a.s1=M;}if(Bs(Bd,30)){Bo=Bo+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vC,M);a.s1=M;}if(Bs(Bd,31)){Bz=Bz+(!BI()?(-0.5):0.5)*BZ(Bb);Br(a.vC,M);a.s1=M;}a.s1=U(a.s1,I(1));NL(a.yP,Bl,Bo,Bz);e=0;while(e<65536){g=ABv(a.yP)*128.0+256.0|0;if(g
>=0&&g<512){d=a.vC.data;d[g]=U(d[g],I(1));}e=e+1|0;}Cq(a.rJ,c.oF,1);f=0;while(f<512){h=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rJ,h);i=a.rJ;b=f;Bh(i,b,0.0,0.0);Bg(a.rJ,h);Bh(a.rJ,b,BB(BS(a.vC.data[f],a.s1)),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rJ,(-6.221923240859403E37));i=a.rJ;b=j;Bh(i,0.0,b,0.0);Bg(a.rJ,(-6.221923240859403E37));Bh(a.rJ,10.0,b,0.0);j=j+32|0;}Cx(a.rJ);Cs(a.vF,c.oF);Cl(a.vF);Bw(a.Bq,a.vF,CF(C(542),R(D,[BK(Bl),BK(Bo),BK(Bz),BK(AGO(a.yP)),Cc(Cv(Bb))])),64.0,522.0,384.0,1,1);Bw(a.Bq,
a.vF,C(501),64.0,494.0,384.0,1,1);Bw(a.Bq,a.vF,C(543),64.0,468.0,384.0,1,1);Ck(a.vF);}
let AN4=(a,b,c)=>{let d,e,f;d=a.Ab;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Ab,1);}
function YK(){let a=this;BL.call(a);a.Cq=null;a.xz=null;a.ro=null;a.uG=null;a.tI=M;a.DR=null;a.BF=null;a.BC=null;}
let Bey=a=>{let b=new YK();A60(b,a);return b;}
let A05=a=>{let b,c,d,e,f,g,h,i,j;b=a.BC;a.DR=b.pa;a.Cq=b.oP;a.xz=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.BF=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.ro=b;f=a.uG.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tI=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A60=(a,b)=>{a.uG=Co(512);a.tI=M;a.BC=b;}
let A2O=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.BC;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.BC;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.BF);CY(d);if(Bs(Bd,29)){Br(a.uG,M);a.tI=M;}if(Bs(Bd,30)){Br(a.uG,M);a.tI=M;}if(Bs(Bd,31)){Br(a.uG,M);a.tI=M;}a.tI=U(a.tI,I(1));e=0;while(e<262144){h=YA(a.Cq.kf())*128.0+128.0|0;if(h
>=0&&h<512){c=a.uG.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.ro,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.ro,i);g=a.ro;b=f;Bh(g,b,0.0,0.0);Bg(a.ro,i);Bh(a.ro,b,0.125*BB(a.uG.data[f])/BB(a.tI),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.ro,(-6.221923240859403E37));g=a.ro;i=j;Bh(g,0.0,i,0.0);Bg(a.ro,(-6.221923240859403E37));Bh(a.ro,10.0,i,0.0);j=j+32|0;}Cx(a.ro);Cs(a.xz,d.oF);Cl(a.xz);g=a.DR;k=a.xz;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(544),c),64.0,522.0,384.0,1,1);d=a.DR;g
=a.xz;k=a.Cq.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.xz);}
let A8R=(a,b,c)=>{let d,e,f;d=a.BF;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.BF,1);}
function ADV(){let a=this;BL.call(a);a.DN=null;a.xc=null;a.rx=null;a.u2=null;a.tu=M;a.EN=null;a.B$=null;a.B9=null;}
let BbG=a=>{let b=new ADV();AJv(b,a);return b;}
let ASB=a=>{let b,c,d,e,f,g,h,i,j;b=a.B9;a.EN=b.pa;a.DN=b.oP;a.xc=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.B$=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rx=b;f=a.u2.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tu=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AJv=(a,b)=>{a.u2=Co(512);a.tu=M;a.B9=b;}
let A4K=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.B9;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.B9;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;EW(1.0,1.0,1.0,1.0);h=a.B$.oT;CY(h);if(Bs(Bd,29)){Br(a.u2,M);a.tu=M;}if(Bs(Bd,30)){Br(a.u2,M);a.tu=M;}if(Bs(Bd,31)){Br(a.u2,M);a.tu=M;}a.tu=U(a.tu,I(1));e=0;while(e<262144){i=NJ(a.DN.kf())*128.0+128.0|0;if(i>=0
&&i<512){c=a.u2.data;c[i]=U(c[i],I(1));}e=e+1|0;}Cq(a.rx,h.oF,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rx,j);d=a.rx;b=f;Bh(d,b,0.0,0.0);Bg(a.rx,j);Bh(a.rx,b,0.125*BB(a.u2.data[f])/BB(a.tu),0.0);f=f+1|0;}k=8;while(k<520){Bg(a.rx,(-6.221923240859403E37));d=a.rx;j=k;Bh(d,0.0,j,0.0);Bg(a.rx,(-6.221923240859403E37));Bh(a.rx,10.0,j,0.0);k=k+32|0;}Cx(a.rx);Cs(a.xc,h.oF);Cl(a.xc);g=a.EN;h=a.xc;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,h,CF(C(546),c),64.0,522.0,384.0,1,1);d=a.EN;g=
a.xc;h=a.DN.kg();l=Dw();CS(CS(l,C(545)),h);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.xc);}
let A3M=(a,b,c)=>{let d,e,f;d=a.B$;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.B$,1);}
function WL(){let a=this;BL.call(a);a.EI=null;a.wk=null;a.rY=null;a.uk=null;a.ua=M;a.EZ=null;a.AD=null;a.zU=null;}
let Bdo=a=>{let b=new WL();ASI(b,a);return b;}
let ANe=a=>{let b,c,d,e,f,g,h,i,j;b=a.zU;a.EZ=b.pa;a.EI=b.oP;a.wk=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.AD=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rY=b;f=a.uk.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.ua=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let ASI=(a,b)=>{a.uk=Co(512);a.ua=M;a.zU=b;}
let AIR=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.zU;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.zU;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.AD);CY(d);if(Bs(Bd,29)){Br(a.uk,M);a.ua=M;}if(Bs(Bd,30)){Br(a.uk,M);a.ua=M;}if(Bs(Bd,31)){Br(a.uk,M);a.ua=M;}a.ua=U(a.ua,I(1));e=0;while(e<262144){h=AAQ(a.EI.kf())*128.0+128.0|0;if(h
>=0&&h<512){c=a.uk.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.rY,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rY,i);g=a.rY;b=f;Bh(g,b,0.0,0.0);Bg(a.rY,i);Bh(a.rY,b,0.125*BB(a.uk.data[f])/BB(a.ua),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rY,(-6.221923240859403E37));g=a.rY;i=j;Bh(g,0.0,i,0.0);Bg(a.rY,(-6.221923240859403E37));Bh(a.rY,10.0,i,0.0);j=j+32|0;}Cx(a.rY);Cs(a.wk,d.oF);Cl(a.wk);g=a.EZ;k=a.wk;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(547),c),64.0,522.0,384.0,1,1);d=a.EZ;g
=a.wk;k=a.EI.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.wk);}
let A5m=(a,b,c)=>{let d,e,f;d=a.AD;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.AD,1);}
function AHc(){let a=this;BL.call(a);a.Dq=null;a.wS=null;a.rF=null;a.vA=null;a.tG=M;a.D0=null;a.z6=null;a.z1=null;}
let Beh=a=>{let b=new AHc();AVH(b,a);return b;}
let AMf=a=>{let b,c,d,e,f,g,h,i,j;b=a.z1;a.D0=b.pa;a.Dq=b.oP;a.wS=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.z6=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rF=b;f=a.vA.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tG=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AVH=(a,b)=>{a.vA=Co(512);a.tG=M;a.z1=b;}
let A$4=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.z1;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.z1;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.z6);CY(d);if(Bs(Bd,29)){Br(a.vA,M);a.tG=M;}if(Bs(Bd,30)){Br(a.vA,M);a.tG=M;}if(Bs(Bd,31)){Br(a.vA,M);a.tG=M;}a.tG=U(a.tG,I(1));e=0;while(e<262144){h=ABz(a.Dq.kf())*128.0+128.0|0;if(h
>=0&&h<512){c=a.vA.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.rF,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rF,i);g=a.rF;b=f;Bh(g,b,0.0,0.0);Bg(a.rF,i);Bh(a.rF,b,0.125*BB(a.vA.data[f])/BB(a.tG),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rF,(-6.221923240859403E37));g=a.rF;i=j;Bh(g,0.0,i,0.0);Bg(a.rF,(-6.221923240859403E37));Bh(a.rF,10.0,i,0.0);j=j+32|0;}Cx(a.rF);Cs(a.wS,d.oF);Cl(a.wS);g=a.D0;k=a.wS;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(548),c),64.0,522.0,384.0,1,1);d=a.D0;g
=a.wS;k=a.Dq.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.wS);}
let AJO=(a,b,c)=>{let d,e,f;d=a.z6;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.z6,1);}
function YY(){let a=this;BL.call(a);a.D9=null;a.wh=null;a.rX=null;a.un=null;a.tz=M;a.Em=null;a.AQ=null;a.zX=null;}
let Bd6=a=>{let b=new YY();AZu(b,a);return b;}
let AX5=a=>{let b,c,d,e,f,g,h,i,j;b=a.zX;a.Em=b.pa;a.D9=b.oP;a.wh=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.AQ=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rX=b;f=a.un.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tz=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AZu=(a,b)=>{a.un=Co(512);a.tz=M;a.zX=b;}
let AYc=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.zX;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.zX;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.AQ);CY(d);if(Bs(Bd,29)){Br(a.un,M);a.tz=M;}if(Bs(Bd,30)){Br(a.un,M);a.tz=M;}if(Bs(Bd,31)){Br(a.un,M);a.tz=M;}a.tz=U(a.tz,I(1));e=0;while(e<262144){h=AIb(a.D9.kf())*128.0+128.0|0;if(h
>=0&&h<512){c=a.un.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.rX,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rX,i);g=a.rX;b=f;Bh(g,b,0.0,0.0);Bg(a.rX,i);Bh(a.rX,b,0.125*BB(a.un.data[f])/BB(a.tz),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rX,(-6.221923240859403E37));g=a.rX;i=j;Bh(g,0.0,i,0.0);Bg(a.rX,(-6.221923240859403E37));Bh(a.rX,10.0,i,0.0);j=j+32|0;}Cx(a.rX);Cs(a.wh,d.oF);Cl(a.wh);g=a.Em;k=a.wh;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(549),c),64.0,522.0,384.0,1,1);d=a.Em;g
=a.wh;k=a.D9.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.wh);}
let A$0=(a,b,c)=>{let d,e,f;d=a.AQ;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.AQ,1);}
function AEz(){let a=this;BL.call(a);a.Er=null;a.xi=null;a.r2=null;a.uu=null;a.s3=M;a.CQ=null;a.zG=null;a.Aq=null;}
let Bf2=a=>{let b=new AEz();AYx(b,a);return b;}
let AIG=a=>{let b,c,d,e,f,g,h,i,j;b=a.Aq;a.CQ=b.pa;a.Er=b.oP;a.xi=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.zG=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.r2=b;f=a.uu.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.s3=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AYx=(a,b)=>{a.uu=Co(512);a.s3=M;a.Aq=b;}
let APO=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.Aq;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.Aq;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.zG);CY(d);if(Bs(Bd,29)){Br(a.uu,M);a.s3=M;}if(Bs(Bd,30)){Br(a.uu,M);a.s3=M;}if(Bs(Bd,31)){Br(a.uu,M);a.s3=M;}a.s3=U(a.s3,I(1));e=0;while(e<262144){h=AGN(a.Er.kf())*256.0+128.0|0;if(h
>=0&&h<512){c=a.uu.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.r2,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.r2,i);g=a.r2;b=f;Bh(g,b,0.0,0.0);Bg(a.r2,i);Bh(a.r2,b,0.125*BB(a.uu.data[f])/BB(a.s3),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.r2,(-6.221923240859403E37));g=a.r2;i=j;Bh(g,0.0,i,0.0);Bg(a.r2,(-6.221923240859403E37));Bh(a.r2,10.0,i,0.0);j=j+32|0;}Cx(a.r2);Cs(a.xi,d.oF);Cl(a.xi);g=a.CQ;k=a.xi;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(550),c),64.0,522.0,384.0,1,1);d=a.CQ;g
=a.xi;k=a.Er.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.xi);}
let A56=(a,b,c)=>{let d,e,f;d=a.zG;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.zG,1);}
function AEd(){let a=this;BL.call(a);a.DE=null;a.xb=null;a.rL=null;a.v5=null;a.ti=M;a.D1=null;a.BB=null;a.Ai=null;}
let Bb7=a=>{let b=new AEd();ASY(b,a);return b;}
let APH=a=>{let b,c,d,e,f,g,h,i,j;b=a.Ai;a.D1=b.pa;a.DE=b.oP;a.xb=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.BB=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rL=b;f=a.v5.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.ti=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let ASY=(a,b)=>{a.v5=Co(512);a.ti=M;a.Ai=b;}
let A7B=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.Ai;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.Ai;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;EW(1.0,1.0,1.0,1.0);h=a.BB.oT;CY(h);if(Bs(Bd,29)){Br(a.v5,M);a.ti=M;}if(Bs(Bd,30)){Br(a.v5,M);a.ti=M;}if(Bs(Bd,31)){Br(a.v5,M);a.ti=M;}a.ti=U(a.ti,I(1));e=0;while(e<262144){i=V$(a.DE.kf())*256.0+128.0|0;if(i>=0
&&i<512){c=a.v5.data;c[i]=U(c[i],I(1));}e=e+1|0;}Cq(a.rL,h.oF,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rL,j);d=a.rL;b=f;Bh(d,b,0.0,0.0);Bg(a.rL,j);Bh(a.rL,b,0.125*BB(a.v5.data[f])/BB(a.ti),0.0);f=f+1|0;}k=8;while(k<520){Bg(a.rL,(-6.221923240859403E37));d=a.rL;j=k;Bh(d,0.0,j,0.0);Bg(a.rL,(-6.221923240859403E37));Bh(a.rL,10.0,j,0.0);k=k+32|0;}Cx(a.rL);Cs(a.xb,h.oF);Cl(a.xb);g=a.D1;h=a.xb;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,h,CF(C(551),c),64.0,522.0,384.0,1,1);d=a.D1;g=
a.xb;h=a.DE.kg();l=Dw();CS(CS(l,C(545)),h);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.xb);}
let APp=(a,b,c)=>{let d,e,f;d=a.BB;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.BB,1);}
function AEI(){let a=this;BL.call(a);a.Ev=null;a.wM=null;a.rA=null;a.vh=null;a.t6=M;a.CM=null;a.BP=null;a.Cp=null;}
let A_8=a=>{let b=new AEI();AXD(b,a);return b;}
let A4y=a=>{let b,c,d,e,f,g,h,i,j;b=a.Cp;a.CM=b.pa;a.Ev=b.oP;a.wM=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.BP=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.rA=b;f=a.vh.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.t6=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AXD=(a,b)=>{a.vh=Co(512);a.t6=M;a.Cp=b;}
let AW2=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.Cp;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.Cp;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.BP);CY(d);if(Bs(Bd,29)){Br(a.vh,M);a.t6=M;}if(Bs(Bd,30)){Br(a.vh,M);a.t6=M;}if(Bs(Bd,31)){Br(a.vh,M);a.t6=M;}a.t6=U(a.t6,I(1));e=0;while(e<262144){h=V4(a.Ev.kf())*256.0+128.0|0;if(h
>=0&&h<512){c=a.vh.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.rA,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.rA,i);g=a.rA;b=f;Bh(g,b,0.0,0.0);Bg(a.rA,i);Bh(a.rA,b,0.125*BB(a.vh.data[f])/BB(a.t6),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.rA,(-6.221923240859403E37));g=a.rA;i=j;Bh(g,0.0,i,0.0);Bg(a.rA,(-6.221923240859403E37));Bh(a.rA,10.0,i,0.0);j=j+32|0;}Cx(a.rA);Cs(a.wM,d.oF);Cl(a.wM);g=a.CM;k=a.wM;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(552),c),64.0,522.0,384.0,1,1);d=a.CM;g
=a.wM;k=a.Ev.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.wM);}
let AZr=(a,b,c)=>{let d,e,f;d=a.BP;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.BP,1);}
function ADk(){let a=this;BL.call(a);a.Ed=null;a.wU=null;a.r1=null;a.uC=null;a.tl=M;a.Cs=null;a.AJ=null;a.AY=null;}
let Bdj=a=>{let b=new ADk();A38(b,a);return b;}
let AQ5=a=>{let b,c,d,e,f,g,h,i,j;b=a.AY;a.Cs=b.pa;a.Ed=b.oP;a.wU=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.AJ=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.r1=b;f=a.uC.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tl=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let A38=(a,b)=>{a.uC=Co(512);a.tl=M;a.AY=b;}
let A4_=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.AY;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.AY;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.AJ);CY(d);if(Bs(Bd,29)){Br(a.uC,M);a.tl=M;}if(Bs(Bd,30)){Br(a.uC,M);a.tl=M;}if(Bs(Bd,31)){Br(a.uC,M);a.tl=M;}a.tl=U(a.tl,I(1));e=0;while(e<262144){h=AC9(a.Ed.kf())*256.0+128.0|0;if(h
>=0&&h<512){c=a.uC.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.r1,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.r1,i);g=a.r1;b=f;Bh(g,b,0.0,0.0);Bg(a.r1,i);Bh(a.r1,b,0.125*BB(a.uC.data[f])/BB(a.tl),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.r1,(-6.221923240859403E37));g=a.r1;i=j;Bh(g,0.0,i,0.0);Bg(a.r1,(-6.221923240859403E37));Bh(a.r1,10.0,i,0.0);j=j+32|0;}Cx(a.r1);Cs(a.wU,d.oF);Cl(a.wU);g=a.Cs;k=a.wU;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(553),c),64.0,522.0,384.0,1,1);d=a.Cs;g
=a.wU;k=a.Ed.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.wU);}
let AY2=(a,b,c)=>{let d,e,f;d=a.AJ;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.AJ,1);}
function AC_(){let a=this;BL.call(a);a.EE=null;a.xh=null;a.ry=null;a.vV=null;a.tH=M;a.Du=null;a.Bz=null;a.Ad=null;}
let Bfj=a=>{let b=new AC_();AXb(b,a);return b;}
let AQS=a=>{let b,c,d,e,f,g,h,i,j;b=a.Ad;a.Du=b.pa;a.EE=b.oP;a.xh=b.o9;b=new Ci;c=new Cg;Cu(c);c.pj=1.0;d=new Bf;BU();c.pg=d;c.pd=0.0;b.pn=new Bf;b.oH=1.0;b.oT=c;a.Bz=b;b=new Ch;e=Cz(CD(0,1,0),CE(0,1,0));if(e.oD){Ct(b,1536,0,1,0,e);b.po=1;a.ry=b;f=a.vV.data;g=0;h=f.length;if(g>h){b=new V;b.n_=1;b.oa=1;E(b);}while(g<h){i=g+1|0;f[g]=M;g=i;}a.tH=M;return;}b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(493));if(!e.oD)d=e.oA;else{d=Bq.i4(e.o0);e.oA=d;}F(c,c.n$,d);d=new P;f=c.ob;j=f.data;h=c.n$;S();i=j.length;if(h>=0&&h<=
(i-0|0)){d.oc=Q(f.data,0,h);b.n_=1;b.oa=1;b.od=d;E(b);}b=new O;BY(b);E(b);}
let AXb=(a,b)=>{a.vV=Co(512);a.tH=M;a.Ad=b;}
let A2M=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=Bd.pc.data;if(c[71]){d=a.Ad;e=d.ou;c=d.o2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ou=e;g=c[e];d.pD=g;if(g!==null){g.d1();d.pD.dY(Bb.oU.width,Bb.oU.height);}return;}if(c[72]){d=a.Ad;e=d.ou+1|0;c=d.o2.data;e=e%c.length|0;d.ou=e;Cd(d,c[e]);return;}if(c[111])return;DR(1.0,1.0,1.0,1.0,0);d=DW(a.Bz);CY(d);if(Bs(Bd,29)){Br(a.vV,M);a.tH=M;}if(Bs(Bd,30)){Br(a.vV,M);a.tH=M;}if(Bs(Bd,31)){Br(a.vV,M);a.tH=M;}a.tH=U(a.tH,I(1));e=0;while(e<262144){h=ADU(a.EE.kf())*256.0+128.0|0;if(h
>=0&&h<512){c=a.vV.data;c[h]=U(c[h],I(1));}e=e+1|0;}Cq(a.ry,d.oF,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bg(a.ry,i);g=a.ry;b=f;Bh(g,b,0.0,0.0);Bg(a.ry,i);Bh(a.ry,b,0.125*BB(a.vV.data[f])/BB(a.tH),0.0);f=f+1|0;}j=8;while(j<520){Bg(a.ry,(-6.221923240859403E37));g=a.ry;i=j;Bh(g,0.0,i,0.0);Bg(a.ry,(-6.221923240859403E37));Bh(a.ry,10.0,i,0.0);j=j+32|0;}Cx(a.ry);Cs(a.xh,d.oF);Cl(a.xh);g=a.Du;k=a.xh;c=Bt(D,1);c.data[0]=Cc(Cv(Bb));Bw(g,k,CF(C(554),c),64.0,522.0,384.0,1,1);d=a.Du;g
=a.xh;k=a.EE.kg();l=Dw();CS(CS(l,C(545)),k);Bw(d,g,Cy(l),64.0,494.0,384.0,1,1);Ck(a.xh);}
let AQL=(a,b,c)=>{let d,e,f;d=a.Bz;d.ph=0;d.pi=0;d.pf=b;d.pk=c;e=b;f=d.oH;e=e*f;f=c*f;d.pl=e;d.pm=f;BM(d,1);BM(a.Bz,1);}
let Ms=G(B0);
let Bc=G(B0);
let A4v=(a,b)=>{let c=new Bc();AJm(c,a,b);return c;}
let GA=a=>{let b=new Bc();Pb(b,a);return b;}
let AJm=(a,b,c)=>{a.n_=1;a.oa=1;a.od=b;a.p$=c;}
let Pb=(a,b)=>{a.n_=1;a.oa=1;a.od=b;}
let WR=G();
let O_=(b,c)=>{let d;b:{d=0;switch(c){case 1:d=2;break b;case 2:d=4;break b;case 3:d=1;break b;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function TH(){BE.call(this);this.Jm=null;}
let AU7=(a,b)=>{return Dt(b)!=2?0:1;}
function RL(){BE.call(this);this.Jr=null;}
let AYA=(a,b)=>{return Dt(b)!=1?0:1;}
function PR(){BE.call(this);this.Jc=null;}
let AJF=(a,b)=>{b:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break b;default:k:{switch(Dt(b)){case 12:case 13:case 14:break;default:b=0;break k;}b=1;}break b;}b=1;}return b;}
function PQ(){BE.call(this);this.Il=null;}
let A1h=(a,b)=>{return 0;}
function Q2(){BE.call(this);this.IB=null;}
let AOR=(a,b)=>{return !Dt(b)?0:1;}
function Sr(){BE.call(this);this.Jy=null;}
let A9l=(a,b)=>{return Dt(b)!=9?0:1;}
function OB(){BE.call(this);this.IJ=null;}
let ARZ=(a,b)=>{return IZ(b);}
function S4(){BE.call(this);this.Iu=null;}
let ATh=(a,b)=>{b:{a:{if(!(b>=0&&b<=31)){if(b<127)break a;if(b>159)break a;}b=1;break b;}b=0;}return b;}
function RJ(){BE.call(this);this.HV=null;}
let A$s=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=IZ(b);}return b;}
function RK(){BE.call(this);this.Iv=null;}
let AMb=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=IZ(b);}return b;}
function Oy(){BE.call(this);this.IA=null;}
let AVl=(a,b)=>{b:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break b;}b=1;}return b;}
function SG(){BE.call(this);this.JN=null;}
let A4I=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}b=1;break b;}b=0;}return b;}
function SJ(){BE.call(this);this.Ip=null;}
let A6X=(a,b)=>{b:{switch(Dt(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}return b;}
function T2(){BE.call(this);this.JB=null;}
let A88=(a,b)=>{return Dt(b)!=3?0:1;}
function Tx(){BE.call(this);this.HW=null;}
let AVS=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}b=1;break b;}b=IZ(b);}return b;}
function Ob(){BE.call(this);this.JY=null;}
let ALZ=(a,b)=>{b:{a:{switch(Dt(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}b=1;break b;}b=IZ(b);}return b;}
function J1(){BE.call(this);this.Az=0;}
let AR3=(a,b)=>{return a.oS^(a.Az!=Dt(b&65535)?0:1);}
let Tl=G(J1);
let A8p=(a,b)=>{return a.oS^(!(a.Az>>Dt(b&65535)&1)?0:1);}
function F3(){D.call(this);this.ss=null;}
let AYn=a=>{AE4(a.ss);}
let ADp=G();
let Rm=G();
let AJH=null;let Bcq=()=>{Bcq=Bj(Rm);ATR();}
let ATR=()=>{let b,c;F9();b=X((AH3.t()).data.length);c=b.data;AJH=b;c[Ih.oi]=1;c[I1.oi]=2;c[IL.oi]=3;c[Hv.oi]=4;c[Q8.oi]=5;}
let NN=G(B0);
let Kx=G(IQ);
let Kk=null;let AM0=(a,b,c,d)=>{let e;e=0;while(e<d){Bd8(b.data[e+c|0]&255);e=e+1|0;}}
let AWK=()=>{let b;b=new Kx;b.BW=BW(1);Kk=b;}
function MQ(){E3.call(this);this.AB=0.0;}
let AWI=null;let A$O=a=>{return a.AB;}
let A1w=a=>{return BC(a.AB);}
let BK=b=>{let c;c=new MQ;c.AB=b;return c;}
let AX_=a=>{let b,c,d,e,f,g,h;b=a.AB;c=new L;c.ob=H(16);MP(c,c.n$,b);d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;Bm(c);E(c);}
let AZM=()=>{AWI=BH(A0S);}
let HK=G();
let BcZ=null;let Bc3=null;let AW3=null;let AME=null;let A10=null;let AEw=()=>{BcZ=E2([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bc3=Sn([I(1),I(10),I(100),I(1000),I(10000),I(100000),I(1000000),I(10000000),I(100000000),I(1000000000),B(1410065408, 2),B(1215752192, 23),B(3567587328, 232),B(1316134912, 2328),B(276447232, 23283),B(2764472320, 232830),B(1874919424, 2328306),B(1569325056, 23283064),B(2808348672, 232830643)]);AW3=Sn([I(1),I(10),I(100),I(10000),I(100000000),B(1874919424, 2328306)]);AME
=new Uc;A10=new QJ;}
let KL=G();
let ACH=M;let LJ=null;let RP=null;let X5=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?Ed(b):B(0, 2146959360);c.E7=Dh(Be(d,B(0, 2147483648)),M)?0:1;e=Be(d,B(4294967295, 1048575));f=Z(Gn(d,52))&2047;if(Dh(e,M)&&!f){c.Df=M;c.CG=0;return;}if(f)e=B8(e,B(0, 1048576));else{e=BP(e,1);while(Dh(Be(e,B(0, 1048576)),M)){e=BP(e,1);f=f+(-1)|0;}}g=RP;h=A7j(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=RP.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Jy(e,LJ.data[i],j);if(Ga(k,ACH)){while(E8(k,ACH)<=0){h=h+(-1)|0;k=U(W(k,I(10)),
I(9));}g=RP.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Jy(e,LJ.data[i],j);}e=BP(e,1);d=U(e,I(1));g=LJ.data;i=h+1|0;l=g[i];f=j-1|0;m=Jy(d,l,f);l=Jy(B3(e,I(1)),LJ.data[i],f);n=I(1);while(true){o=W(n,I(10));if(E8(EI(k,o),EI(l,o))<=0)break;n=o;}p=I(1);while(true){q=W(p,I(10));if(E8(EI(k,q),EI(m,q))>=0)break;p=q;}i=E8(n,p);e=i>0?W(EI(k,n),n):i<0?U(W(EI(k,p),p),p):W(EI(U(k,BS(p,I(2))),p),p);if(E8(e,B(2808348672, 232830643))>=0)while(true){h=h+1|0;e=EI(e,I(10));if(E8(e,B(2808348672, 232830643))<0)break;}else if(E8(e,B(1569325056, 23283064))
<0){h=h+(-1)|0;e=W(e,I(10));}c.Df=e;c.CG=h-330|0;}
let Jy=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Be(b,I(65535));f=Be(T(b,16),I(65535));g=Be(T(b,32),I(65535));h=Be(T(b,48),I(65535));i=Be(c,I(65535));j=Be(T(c,16),I(65535));k=Be(T(c,32),I(65535));l=Be(T(c,48),I(65535));return U(U(U(BP(W(l,h),32+d|0),BP(U(W(l,g),W(k,h)),16+d|0)),BP(U(U(W(l,f),W(k,g)),W(j,h)),d)),T(U(U(U(W(k,e),W(j,f)),W(i,g)),BP(U(U(U(W(l,e),W(k,f)),W(j,g)),W(i,h)),16)),32-d|0));}
let XF=()=>{ACH=EI(I(-1),I(10));LJ=Sn([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
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
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);RP=BcL([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Uc(){let a=this;D.call(a);a.Df=M;a.CG=0;a.E7=0;}
function GH(){let a=this;D.call(a);a.Jx=null;a.wO=null;a.F4=null;a.C2=0;a.Gf=0.0;a.vE=0.0;a.CO=0.0;a.AH=0.0;a.Dp=0.0;a.sK=0.0;a.yZ=0.0;a.wp=0.0;a.zS=0.0;a.Ft=0.0;a.tp=0.0;a.Gs=0.0;a.zk=0;a.uB=null;a.CP=null;a.EW=0.0;a.Ef=0.0;a.Jw=null;a.Fg=null;a.Fv=null;}
let Bdd=(a,b)=>{let c=new GH();A5p(c,a,b);return c;}
let A5p=(a,b,c)=>{a.sK=1.0;a.Ft=1.0;a.tp=1.0;a.Gs=1.0;a.uB=Bt(Lz(KX),128);a.Ef=1.0;a.Fg=S$([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.Fv=S$([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.F4=b;a.C2=c;WE(a,b,c);}
let WE=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$$je;if(a.wO!==null)E(BaE(C(555)));a.Jx=AHU(b);d=Bbx(Bdr(Zd(b)),512);a:{d:{try{e=IB(d);if(e===null)E(GA(C(556)));e=Jx(e,AF2(e,C(557))+8|0);f=(Q3(Cw(e,0,ADi(e,32)),C(558),4)).data;if(f.length!=4)E(GA(C(559)));a.Gf=Dd(f[0]);a.vE=Dd(f[1]);a.CO=Dd(f[2]);a.AH=Dd(f[3]);g=a.Gf+a.CO;e=IB(d);if(e===null)E(GA(C(560)));f=(Q3(e,C(210),9)).data;h=f.length;if(h<3)E(GA(C(561)));if(!Gq(f[1],C(562)))E(GA(C(563)));a.Dp=Dd(Jx(f[1],11));if
(!Gq(f[2],C(564)))E(GA(C(565)));bf:{i=Dd(Jx(f[2],5));j=1;if(h<6)k=j;else if(f[5]===null)k=j;else if(!Gq(f[5],C(566)))k=j;else{try{k=Kr(1,Dd(Jx(f[5],6)));j=k;break bf;}catch($$e){$$je=BG($$e);if($$je instanceof CU){}else{throw $$e;}}k=j;}}a.wO=Bt(P,k);h=0;q:{u:{i:{while(true){if(h>=k)break q;e=IB(d);if(e===null)E(GA(C(567)));m:{l=S0(AC3(C(568)),e);if(H8(l)){m=LN(l,1);try{if(Dd(m)!=h)break i;break m;}catch($$e){$$je=BG($$e);if($$je instanceof CU){n=$$je;break u;}else{throw $$e;}}}}e=S0(AC3(C(569)),e);if(!H8(e))break;o
=LN(e,1);a.wO.data[h]=Xa(Vz(Vw(VC(b),o)),C(570),C(123));h=h+1|0;}E(GA(C(571)));}try{E(GA(Cy(B4(B4(Dw(),C(572)),m))));}catch($$e){$$je=BG($$e);if($$je instanceof CU){n=$$je;}else{throw $$e;}}}E(A4v(Cy(B4(B4(Dw(),C(573)),m)),n));}a.wp=0.0;bb:{while(true){e=IB(d);if(e===null)break;if(Gq(e,C(574)))break bb;if(Gq(e,C(575)))break bb;if(!Gq(e,C(576)))continue;p=AKw();q=AAz(e,C(577));B7(q);B7(q);k=Dd(B7(q));if(k<=0)a.CP=p;else{if(k>65535)continue;Rs(a,k,p);}p.tF=k;B7(q);p.GH=Dd(B7(q));B7(q);p.GI=Dd(B7(q));B7(q);p.qE
=Dd(B7(q));B7(q);p.q$=Dd(B7(q));B7(q);p.rg=Dd(B7(q));B7(q);if(c)p.wV=Dd(B7(q));else p.wV= -(p.q$+Dd(B7(q))|0)|0;B7(q);p.vv=Dd(B7(q));if(Vl(q))B7(q);bj:{if(Vl(q))try{p.xt=Dd(B7(q));break bj;}catch($$e){$$je=BG($$e);if($$je instanceof CU){}else{throw $$e;}}}if(p.qE>0&&p.q$>0)a.wp=A8I(i+p.wV,a.wp);}}a.wp=a.wp+a.CO;bk:{while(true){e=IB(d);if(e===null)break;if(!Gq(e,C(578)))break bk;q=AAz(e,C(577));B7(q);B7(q);r=Dd(B7(q));B7(q);s=Dd(B7(q));if(r<0)continue;if(r>65535)continue;if(s<0)continue;if(s>65535)continue;p
=HZ(a,r&65535);B7(q);t=Dd(B7(q));if(p!==null)AGg(p,s,t);}}u=0;v=0.0;w=0.0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;if(e!==null&&Gq(e,C(575))){u=1;q=AAz(e,C(577));B7(q);B7(q);v=G8(B7(q));B7(q);w=G8(B7(q));B7(q);x=G8(B7(q));B7(q);y=G8(B7(q));B7(q);z=G8(B7(q));B7(q);ba=G8(B7(q));B7(q);bb=G8(B7(q));}bc=HZ(a,32);if(bc===null){bc=AKw();bc.tF=32;bd=HZ(a,108);if(bd===null)bd=TE(a);bc.vv=bd.vv;Rs(a,32,bc);}if(!bc.qE){be=a.AH;bc.qE=be+bc.vv+a.vE|0;bc.rg= -be|0;}a.EW=bc.vv;bf=null;f=a.Fg.data;k=f.length;h=0;bl:{while(h<k){bf=HZ(a,
f[h]);if(bf!==null)break bl;h=h+1|0;}}if(bf===null)bf=TE(a);a.Ef=bf.q$-g;bg=null;f=a.Fv.data;k=f.length;h=0;be:{while(h<k){bg=HZ(a,f[h]);if(bg!==null)break be;h=h+1|0;}}if(bg!==null)a.sK=bg.q$;else{bh=a.uB.data;j=bh.length;k=0;while(k<j){bm:{bi=bh[k];if(bi!==null){f=bi.data;h=f.length;r=0;while(true){if(r>=h)break bm;p=f[r];if(p!==null){s=p.q$;if(s&&p.qE)a.sK=AKO(a.sK,s);}r=r+1|0;}}}k=k+1|0;}}g=a.sK-g;a.sK=g;i=i-g;a.yZ=i;g= -a.Dp;a.zS=g;if(c){a.yZ= -i;a.zS= -g;}if(u){a.yZ=v;a.wp=w;a.zS=x;a.sK=y;a.Dp=z;a.EW=
ba;a.Ef=bb;}}catch($$e){$$je=BG($$e);if($$je instanceof Da){n=$$je;break d;}else{b=$$je;break a;}}Rv(d);return;}try{E(A4v(Cy(CS(B4(Dw(),C(579)),b)),n));}catch($$e){$$je=BG($$e);b=$$je;}}Rv(d);E(b);}
let RV=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=c.zu.vB;e=1.0/d.tQ;f=1.0/d.tD;g=0.0;h=0.0;i=c.Gl;j=c.Gn;k=c.AN;l=c.CA;if(c instanceof Pq){m=c;g=m.Jp;h=(m.I$-m.JA|0)-m.Jo;}n=b.GH;o=n;p=b.qE;q=n+p|0;n=b.GI;r=n;s=b.q$;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.qE=p+o|0;b.rg=b.rg-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.qE=b.qE-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.q$=n;if(n<0)b.q$=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.q$=b.q$-u|0;b.wV=b.wV+u|0;}}b.E2=i+o*e;b.GK=i+k*e;if(!a.C2){b.D8=j+
r*f;b.Cr=j+l*f;}else{b.Cr=j+r*f;b.D8=j+l*f;}}
let Rs=(a,b,c)=>{let d,e,f;d=a.uB.data;e=b/512|0;f=d[e];if(f===null){f=Bt(KX,512);d[e]=f;}f.data[b&511]=c;}
let TE=a=>{let b,c,d,e,f,g,h,i;b=a.uB.data;c=b.length;d=0;a:while(true){if(d>=c){e=new Bc;e.n_=1;e.oa=1;e.od=C(580);E(e);}k:{f=b[d];if(f!==null){f=f.data;g=f.length;h=0;while(true){if(h>=g)break k;i=f[h];if(i!==null&&i.q$&&i.qE)break a;h=h+1|0;}}}d=d+1|0;}return i;}
let HZ=(a,b)=>{let c;c=a.uB.data[b/512|0];if(c===null)return null;return c.data[b&511];}
let OS=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.zk;i=a.tp;j=b.pB;k=b.pP;AAx(j,g);ZY(b.pP,g+1|0);d:{while(true){g=d+1|0;if(d<0)break;if(d>=c.oc.length)break;n:{l=c.oc.charCodeAt(d);if(l!=13){m=a.uB.data[l/512|0];n=m===null?null:m.data[l&511];if(n===null){n=a.CP;if(n===null)break n;}Dk(j,n);if(f===null)o=n.yB?0.0:( -n.rg|0)*i-a.AH;else{q:{d=f.vv;m=f.Af;if(m!==null){m=m.data[l>>>9|0];if(m!==null){p=m.data[l&511];break q;}}p=0;}o=(d+p|0)*i;}Sq(k,o);if(!h)f=n;else if(l!=91)f=n;else if(g>=
e)f=n;else{if(g<0)break d;if(g>=c.oc.length)break d;if(c.oc.charCodeAt(g)!=91)f=n;else{g=g+1|0;f=n;}}}}if(g>=e){if(f!==null)Sq(k,f.yB?f.vv*i:(f.qE+f.rg|0)*i-a.vE);return;}d=g;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let Vv=(a,b,c)=>{let d,e,f,g,h,i;b:{d=c-1|0;e=b.os.data;f=e[d].tF&65535;switch(f){case 9:case 10:case 13:case 32:break;default:c=0;break b;}c=1;}if(c)return d;k:{g=a.Jw;if(g===null)c=0;else{h=g.data;c=h.length;i=0;while(i<c){if(f==h[i]){c=1;break k;}i=i+1|0;}c=0;}}if(c)d=d+(-1)|0;bf:{while(d>0){f:{c=e[d].tF&65535;switch(c){case 9:case 10:case 13:case 32:break;default:f=0;break f;}f=1;}if(f)break bf;h:{if(g===null)c=0;else{h=g.data;f=h.length;i=0;while(i<f){if(c==h[i]){c=1;break h;}i=i+1|0;}c=0;}}if(c)break bf;d
=d+(-1)|0;}return 0;}return d+1|0;}
let EZ=G(BV);
let Xw=null;let AYe=null;let AQr=null;let X3=null;let A8a=null;let S2=()=>{S2=Bj(EZ);AVp();}
let AVp=()=>{let b,c,d,e;b=new EZ;S2();b.ol=C(581);b.oi=0;Xw=b;c=new EZ;c.ol=C(582);c.oi=1;AYe=c;d=new EZ;d.ol=C(583);d.oi=2;AQr=d;e=new EZ;e.ol=C(584);e.oi=3;X3=e;A8a=R(EZ,[b,c,d,e]);}
function JC(){let a=this;D.call(a);a.q8=null;a.qh=null;a.Bj=0;a.xn=0;a.y4=null;a.zx=0;a.FX=null;}
let ND=null;let BiM=(a,b,c,d,e)=>{let f=new JC();U9(f,a,b,c,d,e);return f;}
let U9=(a,b,c,d,e,f)=>{let g,h,i,j,k;b:{d:{a.Bj=1;a.zx=0;g=new Bf;BU();a.FX=g;Bff();switch(AQ_.data[b.oi]){case 1:a.q8=A4e(c,d,f);b=new Id;b.sS=1;b.w7=0;b.CY=1;if(!D1){h=MT(e);e=h.data.length;f=new KT;i=0+e|0;Dn(f);f.or=(-1);f.oy=e;f.oe=e;f.of=0;f.oe=i;f.yg=0;f.A5=0;f.y1=h;}else{d=e*2|0;if(d<0){b=new V;f=new L;f.ob=H(16);DI(f,f.n$,DJ(C(585)));N(f,f.n$,d,10);g=new P;h=f.ob;j=h.data;d=f.n$;e=j.length;if(d>=0&&d<=(e-0|0)){g.oc=Q(h.data,0,d);b.n_=1;b.oa=1;b.od=g;E(b);}b=new O;K8(b);E(b);}f=new C8;h=BW(d);f.or=(-1);f.oy
=d;f.oe=d;CP();f.o4=CR;f.pb=0;f.oZ=h;f.of=0;f.oe=d;f.pR=1;f.pt=0;f.o4=DT();f=K0(f);}b.sC=f;f.oe=f.of;f.of=0;f.or=(-1);f=Bq;g=f.og.createBuffer();e=f.qN;f.qN=e+1|0;C6(f.rk,e,C_(g));b.Bf=e;b.x2=!c?35048:35044;a.qh=b;a.xn=0;break b;case 2:break;case 3:a.q8=A3x(c,d,f);a.qh=A$t(c,e);a.xn=0;break b;case 4:break d;default:break d;}a.q8=Bgr(c,d,f);a.qh=A$t(c,e);a.xn=0;break b;}b=new R8;AFA(b,0,d,f);a.q8=b;b=new O6;b.sS=1;b.w7=0;b.CY=1;if(!D1){h=MT(e);d=h.data.length;f=new KT;k=0+d|0;UJ(f,d);f.of=0;f.oe=k;f.yg=0;f.A5
=0;f.y1=h;}else{c=e*2|0;if(c<0){b=new V;f=new L;F$(f);M_(f,C(585));EX(f,c);AIk(b,Cy(f));E(b);}g=new C8;h=BW(c);Dn(g);g.or=(-1);g.oy=c;g.oe=c;CP();g.o4=CR;g.pb=0;g.oZ=h;g.of=0;g.oe=c;g.pR=1;g.pt=0;UA(g,DT());f=K0(g);}b.sC=f;AHC(f);b.Bf=AEo(Bq);b.x2=35044;a.qh=b;a.xn=1;}Yg(Ef,a);}
let WD=(a,b)=>{let c;c=b.data;a.qh.k1(b,0,c.length);return a;}
let TF=(a,b,c,d,e,f)=>{let g,h,i,j;if(!e)return;if(f){g=null;h=null;a.q8.k2(b,g);g=a.y4;if(g!==null&&g.k3()>0)a.y4.k2(b,h);if(a.qh.k4()>0)a.qh.i6();}if(a.xn){if(a.qh.k4()<=0)Bq.k5(c,d,e);else{g=a.qh.jb(0);i=g.of;CH(g,d);Bq.k6(c,e,5123,g);CH(g,i);}}else{j=0;if(a.zx)j=a.y4.k3();if(a.qh.k4()<=0){if(a.zx&&j>0)GJ.k7(c,d,e,j);else Bq.k5(c,d,e);}else{if((e+d|0)>a.qh.k8()){b=new Bc;g=new L;g.ob=H(16);F(g,g.n$,C(586));N(g,g.n$,e,10);F(g,g.n$,C(587));N(g,g.n$,d,10);F(g,g.n$,C(588));c=a.qh.k8();N(g,g.n$,c,10);F(g,g.n$,
C(589));g=Bi(g);b.n_=1;b.oa=1;b.od=g;E(b);}if(a.zx&&j>0)GJ.k9(c,e,5123,d*2|0,j);else Bq.k$(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.q8.k_(b,g);g=a.y4;if(g!==null&&g.k3()>0)a.y4.k_(b,h);if(a.qh.k4()>0)a.qh.la();}}
let HJ=(a,b)=>{let c,d,e;c=(a.q8.lb()).qt.data;d=c.length;e=0;while(e<d){if(c[e].r$==b)return c[e];e=e+1|0;}return null;}
let ACS=a=>{return a.q8.lb();}
let Yg=(b,c)=>{let d,e,f,g,h;d=ND;if(b===null){d=d.qq.data[0];while(d!==null&&d.qV!==null){d=d.q6;}}else{e=b;if(!e.$id$){f=Fd();e.$id$=f;}g=b.$id$;h=d.qq.data;d=h[g&(h.length-1|0)];while(d!==null){if(d.tY==g){f=d.qV;if(b!==f&&!(b!==f?0:1)?0:1)break;}d=d.q6;}}d=d===null?null:d.rp;if(d===null){d=new CQ;d.pz=1;d.os=Bt(D,16);}Dk(d,c);JV(ND,b,d);}
let ABb=()=>{let b,c,d,e;b=new Jz;c=JZ(16);b.tA=0;d=Bt(Gt,c);e=d.data;b.qq=d;b.zE=0.75;b.uy=e.length*0.75|0;ND=b;}
function Fa(){let a=this;D.call(a);a.oy=0;a.of=0;a.oe=0;a.or=0;}
let UJ=(a,b)=>{a.or=(-1);a.oy=b;a.oe=b;}
let AMA=a=>{return a.oy;}
let A5Y=a=>{return a.of;}
let CH=(a,b)=>{let c,d,e;if(b>=0&&b<=a.oe){a.of=b;if(b<a.or)a.or=0;return a;}c=new V;d=a.oe;e=new L;e.ob=H(16);F(e,e.n$,C(590));N(e,e.n$,b,10);F(e,e.n$,C(591));N(e,e.n$,d,10);d=e.n$;Bp(e,d,d+1|0);e.ob.data[d]=93;e=Bi(e);c.n_=1;c.oa=1;c.od=e;E(c);}
let AUA=a=>{return a.oe;}
let Ds=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.oy){if(a.or>b)a.or=(-1);a.oe=b;if(a.of>b)a.of=b;return a;}c=new V;d=a.oy;e=new L;e.ob=H(16);F(e,e.n$,C(592));N(e,e.n$,b,10);F(e,e.n$,C(591));N(e,e.n$,d,10);d=e.n$;Bp(e,d,d+1|0);f=e.ob;g=f.data;g[d]=93;h=new P;d=e.n$;S();i=g.length;if(d>=0&&d<=(i-0|0)){h.oc=Q(f.data,0,d);c.n_=1;c.oa=1;c.od=h;E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let AUD=a=>{return a.oe-a.of|0;}
let Ni=G(0);
let LO=G(Fa);
let Ot=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new O;i=new L;i.ob=H(16);F(i,i.n$,C(593));N(i,i.n$,g,10);F(i,i.n$,C(594));N(i,i.n$,f,10);i=Bi(i);h.n_=1;h.oa=1;h.od=i;E(h);}f=a.oe;j=a.of;if((f-j|0)<d){h=new I$;h.n_=1;h.oa=1;E(h);}if(d>=0){g=0;k=j;while(g<d){l=c+1|0;f=k+1|0;e[c]=a.uF.data[k+a.vY|0];g=g+1|0;c=l;k=f;}a.of=j+d|0;return a;}h=new O;i=new L;i.ob=H(16);F(i,i.n$,C(595));N(i,i.n$,d,10);F(i,i.n$,C(596));i=Bi(i);h.n_=1;h.oa=1;h.od=i;E(h);}}b=b.data;h=new O;d
=b.length;i=new L;i.ob=H(16);F(i,i.n$,C(597));N(i,i.n$,c,10);F(i,i.n$,C(591));N(i,i.n$,d,10);d=i.n$;Bp(i,d,d+1|0);i.ob.data[d]=41;i=Bi(i);h.n_=1;h.oa=1;h.od=i;E(h);}
let AId=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.xA){e=new EV;e.n_=1;e.oa=1;E(e);}f=a.oe;g=a.of;if((f-g|0)<d){e=new G0;e.n_=1;e.oa=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new O;j=new L;j.ob=H(16);F(j,j.n$,C(598));N(j,j.n$,i,10);F(j,j.n$,C(594));N(j,j.n$,f,10);j=Bi(j);e.n_=1;e.oa=1;e.od=j;E(e);}if(d>=0){i=0;k=g;while(i<d){l=k+1|0;f=c+1|0;a.uF.data[k+a.vY|0]=h[c];i=i+1|0;k=l;c=f;}a.of=g+d|0;return a;}e=new O;j=new L;j.ob=H(16);F(j,j.n$,C(595));N(j,j.n$,d,10);F(j,j.n$,C(596));j=Bi(j);e.n_=1;e.oa
=1;e.od=j;E(e);}}b=b.data;e=new O;d=b.length;j=new L;j.ob=H(16);F(j,j.n$,C(597));N(j,j.n$,c,10);F(j,j.n$,C(591));N(j,j.n$,d,10);d=j.n$;Bp(j,d,d+1|0);j.ob.data[d]=41;j=Bi(j);e.n_=1;e.oa=1;e.od=j;E(e);}
let MG=(a,b,c,d)=>{let e,f,g,h,i;if(a.xA){b=new EV;b.n_=1;b.oa=1;E(b);}e=d-c|0;if((a.oe-a.of|0)<e){b=new G0;b.n_=1;b.oa=1;E(b);}if(c>=0&&c<=b.oc.length){if(d>b.oc.length){f=new O;g=b.oc.length;b=new L;b.ob=H(16);F(b,b.n$,C(598));N(b,b.n$,d,10);F(b,b.n$,C(599));N(b,b.n$,g,10);b=Bi(b);f.n_=1;f.oa=1;f.od=b;E(f);}if(c<=d){h=a.of;o:{while(c<d){i=h+1|0;g=c+1|0;if(c<0)break o;if(c>=b.oc.length)break o;a.uF.data[h+a.vY|0]=b.oc.charCodeAt(c);h=i;c=g;}a.of=a.of+e|0;return a;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new O;f=new L;f.ob
=H(16);F(f,f.n$,C(600));N(f,f.n$,c,10);F(f,f.n$,C(601));N(f,f.n$,d,10);f=Bi(f);b.n_=1;b.oa=1;b.od=f;E(b);}f=new O;e=b.oc.length;b=new L;b.ob=H(16);F(b,b.n$,C(600));N(b,b.n$,c,10);F(b,b.n$,C(591));N(b,b.n$,e,10);d=b.n$;Bp(b,d,d+1|0);b.ob.data[d]=41;b=Bi(b);f.n_=1;f.oa=1;f.od=b;E(f);}
function Gk(){let a=this;Fa.call(a);a.pb=0;a.oZ=null;a.o4=null;}
let SC=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new O;i=new L;i.ob=H(16);F(i,i.n$,C(602));N(i,i.n$,g,10);F(i,i.n$,C(594));N(i,i.n$,f,10);i=Bi(i);h.n_=1;h.oa=1;h.od=i;E(h);}f=a.oe;j=a.of;if((f-j|0)<d){h=new I$;h.n_=1;h.oa=1;E(h);}if(d>=0){g=j+a.pb|0;k=0;while(k<d){l=c+1|0;b=a.oZ.data;f=g+1|0;e[c]=b[g];k=k+1|0;c=l;g=f;}a.of=j+d|0;return a;}h=new O;i=new L;i.ob=H(16);F(i,i.n$,C(595));N(i,i.n$,d,10);F(i,i.n$,C(596));i=Bi(i);h.n_=1;h.oa=1;h.od=i;E(h);}}b=b.data;h=new O;g
=b.length;i=new L;i.ob=H(16);F(i,i.n$,C(597));N(i,i.n$,c,10);F(i,i.n$,C(591));N(i,i.n$,g,10);f=i.n$;Bp(i,f,f+1|0);i.ob.data[f]=41;i=Bi(i);h.n_=1;h.oa=1;h.od=i;E(h);}
let U6=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.pt){e=new EV;e.n_=1;e.oa=1;E(e);}f=a.oe;g=a.of;if((f-g|0)<d){e=new G0;e.n_=1;e.oa=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=g+a.pb|0;j=0;while(j<d){b=a.oZ.data;k=i+1|0;f=c+1|0;b[i]=h[c];j=j+1|0;i=k;c=f;}a.of=g+d|0;return a;}e=new O;l=new L;l.ob=H(16);F(l,l.n$,C(595));N(l,l.n$,d,10);Ez(l,l.n$,C(596));Kq(e,Bi(l));E(e);}e=new O;l=new L;l.ob=H(16);F(l,l.n$,C(603));N(l,l.n$,i,10);F(l,l.n$,C(594));N(l,l.n$,f,10);m=new P;b
=l.ob;h=b.data;d=l.n$;S();f=h.length;if(d>=0&&d<=(f-0|0)){m.oc=Q(b.data,0,d);e.n_=1;e.oa=1;e.od=m;E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}}b=b.data;e=new O;d=b.length;l=new L;l.ob=H(16);F(l,l.n$,C(597));N(l,l.n$,c,10);F(l,l.n$,C(591));N(l,l.n$,d,10);d=l.n$;Bp(l,d,d+1|0);b=l.ob;h=b.data;h[d]=41;m=new P;d=l.n$;S();f=h.length;if(d>=0&&d<=(f-0|0)){m.oc=Q(b.data,0,d);e.n_=1;e.oa=1;e.od=m;E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}
let UA=(a,b)=>{a.o4=b;return a;}
let AHq=a=>{a.oe=a.of;a.of=0;a.or=(-1);return a;}
let ASj=(a,b)=>{Ds(a,b);return a;}
let AXQ=(a,b)=>{CH(a,b);return a;}
function GF(){D.call(this);this.DB=null;}
let AUs=null;let Fu=null;let Gz=null;let EM=()=>{EM=Bj(GF);AQF();}
let AQF=()=>{let b;b=new GF;EM();b.DB=C(604);AUs=b;b=new GF;b.DB=C(605);Fu=b;b=new GF;b.DB=C(606);Gz=b;}
let Me=G(0);
let QX=G(0);
function OC(){let a=this;D.call(a);a.Gx=null;a.F8=null;a.Jk=0;a.JK=0;}
let A6V=a=>{let b,c;if(!a.Jk){b=a.Gx;b.GR=null;Dq();if(CG!==b)CG=b;CG.tU=F4();c=a.F8;b=null;c.v7.e(b);}}
function KX(){let a=this;D.call(a);a.tF=0;a.GH=0;a.GI=0;a.qE=0;a.q$=0;a.E2=0.0;a.Cr=0.0;a.GK=0.0;a.D8=0.0;a.rg=0;a.wV=0;a.vv=0;a.Af=null;a.yB=0;a.xt=0;}
let AKw=()=>{let a=new KX();A8k(a);return a;}
let A8k=a=>{a.xt=0;}
let AGg=(a,b,c)=>{let d,e,f;if(a.Af===null)a.Af=Bt(Lz(Bb6),128);d=a.Af.data;e=b>>>9|0;f=d[e];if(f===null){f=BW(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
let ANZ=a=>{let b,c,d,e;b=a.tF&65535;c=new P;d=H(1);e=d.data;e[0]=b;S();c.oc=Q(d.data,0,e.length);return c;}
function Ws(){let a=this;D.call(a);a.qt=null;a.qS=0;a.H8=M;a.Ji=0;a.JD=0;}
let A11=a=>{let b=new Ws();A4M(b,a);return b;}
let A4M=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.H8=I(-1);a.Ji=(-1);a.JD=(-1);c=b.length;if(!c){d=new V;d.n_=1;d.oa=1;d.od=C(607);E(d);}e=Bt(EH,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.qt=e;c=0;h=0;while(h<f.length){k:{o:{d=f[h];d.sE=c;switch(d.qP){case 5120:case 5121:break;case 5122:case 5123:g=2*d.qn|0;break k;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break o;case 5126:case 5132:g=4*d.qn|0;break k;default:break o;}g=d.qn;break k;}g=0;}c=c+g|0;h=h+1|0;}a.qS=c;}
function HG(){let a=this;D.call(a);a.oA=null;a.oD=0;a.A2=null;a.G3=null;a.Hs=null;a.Hd=null;a.sb=null;a.Hc=null;a.F3=null;a.GT=null;a.o0=0;a.CZ=0;a.GA=0;a.JP=null;a.p4=null;a.p3=null;a.o5=0;a.IC=0;a.rj=null;a.yI=null;}
let Nt=0;let AHB=null;let Yu=null;let AHk=null;let BfL=null;let Ru=()=>{Ru=Bj(HG);ASZ();}
let Cz=(a,b)=>{let c=new HG();AA_(c,a,b);return c;}
let AA_=(a,b,c)=>{let d,e,f,g,h;Ru();a.oA=C(43);a.A2=Ku(51,0.800000011920929);a.G3=Ku(51,0.800000011920929);a.Hs=Ku(51,0.800000011920929);a.sb=Ku(51,0.800000011920929);a.Hc=Ku(51,0.800000011920929);a.F3=Ku(51,0.800000011920929);a.IC=0;if(!D1){d=X(1);e=d.data.length;f=new HB;g=0+e|0;f.or=(-1);f.oy=e;f.oe=e;f.of=0;f.oe=g;f.vU=0;f.wP=0;f.vn=d;}else{h=new C8;d=BW(4);h.or=(-1);h.oy=4;h.oe=4;CP();h.o4=CR;h.pb=0;h.oZ=d;h.of=0;h.oe=4;h.pR=1;h.pt=0;h.o4=DT();f=Hu(h);}a.rj=f;if(!D1){d=X(1);e=d.data.length;f=new HB;g=
0+e|0;f.or=(-1);f.oy=e;f.oe=e;f.of=0;f.oe=g;f.vU=0;f.wP=0;f.vn=d;}else{h=new C8;d=BW(4);h.or=(-1);h.oy=4;h.oe=4;CP();h.o4=CR;h.pb=0;h.oZ=d;h.of=0;h.oe=4;h.pR=1;h.pt=0;UA(h,DT());f=Hu(h);}a.yI=f;if(b===null)E(AQi(C(608)));if(c===null)E(AQi(C(609)));f=AHB;if(f!==null&&FT(f)>0)b=Cy(B4(B4(Dw(),AHB),b));f=Yu;if(f!==null&&FT(f)>0)c=Cy(B4(B4(Dw(),Yu),c));a.p4=b;a.p3=c;a.JP=ARm(16);Dg(a,b,c);if(AHy(a)){Xe(a);YQ(a);AF6(a,Ef,a);}}
let Dg=(a,b,c)=>{let d;a.CZ=Vm(a,35633,b);d=Vm(a,35632,c);a.GA=d;if(a.CZ!=(-1)&&d!=(-1)){d=Bq.lj();if(!d)d=(-1);d=AHi(a,d);a.o0=d;if(d!=(-1)){a.oD=1;return;}a.oD=0;return;}a.oD=0;}
let Vm=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bq;if(!D1){e=X(1);f=e.data.length;g=new HB;h=0+f|0;g.or=(-1);g.oy=f;g.oe=f;g.of=0;g.oe=h;g.vU=0;g.wP=0;g.vn=e;}else{g=new C8;e=BW(4);g.or=(-1);g.oy=4;g.oe=4;CP();g.o4=CR;g.pb=0;g.oZ=e;g.of=0;g.oe=4;g.pR=1;g.pt=0;g.o4=DT();g=Hu(g);}i=d.ll(b);if(!i)return (-1);d.lm(i,c);d.ln(i);d.f0(i,35713,g);if(Gc(g,0))return i;j=d.lo(i);c=new L;c.ob=H(16);d=a.oA;F(c,c.n$,d);d=b!=35633?C(610):C(611);F(c,c.n$,d);d=new P;e=c.ob;k=e.data;i=c.n$;S();l=k.length;if(i>=0&&i<=(l-0|0)){d.oc=Q(e.data,
0,i);a.oA=d;c=new L;c.ob=H(16);F(c,c.n$,d);F(c,c.n$,j);d=new P;e=c.ob;k=e.data;i=c.n$;l=k.length;if(i>=0&&i<=(l-0|0)){d.oc=Q(e.data,0,i);a.oA=d;return (-1);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let AHi=(a,b)=>{let c,d,e,f;c=Bq;if(b==(-1))return (-1);c.lp(b,a.CZ);c.lp(b,a.GA);c.lq(b);d=new C8;e=BW(4);d.or=(-1);d.oy=4;d.oe=4;CP();d.o4=CR;d.pb=0;d.oZ=e;d.of=0;d.oe=4;d.pR=1;d.pt=0;d.o4=DT();f=Hu(d);c.fZ(b,35714,f);if(Gc(f,0))return b;a.oA=Bq.i4(b);return (-1);}
let AHy=a=>{return a.oD;}
let KA=(a,b,c)=>{let d,e,f,g,h,i;d=a.A2;e=(-2);f=Gl(d,b);if(f>=0)e=d.q0.data[f];if(e==(-2)){e=Bq.lr(a.o0,b);if(e==(-1)&&c){if(a.oD){d=new V;g=new L;g.ob=H(16);F(g,g.n$,C(612));F(g,g.n$,b);F(g,g.n$,C(613));b=new P;h=g.ob;i=h.data;e=g.n$;S();f=i.length;if(e>=0&&e<=(f-0|0)){b.oc=Q(h.data,0,e);d.n_=1;d.oa=1;d.od=b;E(d);}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}b=new Cb;d=new L;d.ob=H(16);F(d,d.n$,C(614));if(!a.oD)g=a.oA;else{g=Bq.i4(a.o0);a.oA=g;}F(d,d.n$,g);g=new P;h=d.ob;i=h.data;e=d.n$;S();f=i.length;if(e>=0&&e<=(f
-0|0)){g.oc=Q(h.data,0,e);b.n_=1;b.oa=1;b.od=g;E(b);}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}FK(a.A2,b,e);}return e;}
let AH7=(a,b,c,d,e,f,g)=>{let h;h=Bq;if(a.o5){Dg(a,a.p4,a.p3);a.o5=0;}h.lt(b,c,d,e,f,g);}
let AGe=(a,b)=>{let c;c=Bq;if(a.o5){Dg(a,a.p4,a.p3);a.o5=0;}c.lu(b);}
let AF6=(a,b,c)=>{let d,e;Ru();d=AHk;e=Dm(d,b);d=e<0?null:d.qa.data[e];if(d===null){d=new CQ;d.pz=1;d.os=Bt(D,16);}Dk(d,c);B2(AHk,b,d);}
let YQ=a=>{let b,c,d,e,f;b=a.rj;b.of=0;b.oe=b.oy;b.or=(-1);Bq.fZ(a.o0,35718,b);c=Gc(a.rj,0);a.Hd=Bt(P,c);d=0;while(d<c){b=a.rj;b.of=0;b.oe=b.oy;b.or=(-1);U1(b,0,1);b=a.yI;b.of=0;b.oe=b.oy;b.or=(-1);e=Bq.fY(a.o0,d,a.rj,b);f=Bq.lr(a.o0,e);FK(a.A2,e,f);FK(a.G3,e,Gc(a.yI,0));FK(a.Hs,e,Gc(a.rj,0));a.Hd.data[d]=e;d=d+1|0;}}
let Xe=a=>{let b,c,d,e,f;b=a.rj;b.of=0;b.oe=b.oy;b.or=(-1);Bq.fZ(a.o0,35721,b);c=Gc(a.rj,0);a.GT=Bt(P,c);d=0;while(d<c){b=a.rj;b.of=0;b.oe=b.oy;b.or=(-1);U1(b,0,1);b=a.yI;b.of=0;b.oe=b.oy;b.or=(-1);e=Bq.fX(a.o0,d,a.rj,b);f=Bq.lw(a.o0,e);FK(a.sb,e,f);FK(a.Hc,e,Gc(a.yI,0));FK(a.F3,e,Gc(a.rj,0));a.GT.data[d]=e;d=d+1|0;}}
let ASZ=()=>{let b,c,d,e;Nt=1;AHB=C(43);Yu=C(43);AHk=F7(51,0.800000011920929);if(!D1){b=X(1);c=b.data.length;d=new HB;e=0+c|0;d.or=(-1);d.oy=c;d.oe=c;d.of=0;d.oe=e;d.vU=0;d.wP=0;d.vn=b;}else{d=new C8;b=BW(4);d.or=(-1);d.oy=4;d.oe=4;CP();d.o4=CR;d.pb=0;d.oZ=b;d.of=0;d.oe=4;d.pR=1;d.pt=0;d.o4=DT();d=Hu(d);}BfL=d;}
let Ln=G(LO);
let V9=a=>{let b,c,d,e,f,g,h,i;if(a.xA){b=new EV;b.n_=1;b.oa=1;E(b);}a:{c=a.oe;d=a.of;e=c-d|0;if(d>0){f=0;while(true){if(f>=e)break a;c=d+1|0;g=a.uF.data;h=a.vY;i=g[d+h|0];g[f+h|0]=i;f=f+1|0;d=c;}}}a.of=e;a.oe=a.oy;a.or=(-1);return a;}
function Jw(){let a=this;Ln.call(a);a.xA=0;a.vY=0;a.uF=null;}
function LG(){let a=this;D.call(a);a.Ba=null;a.xX=null;a.x7=0.0;a.tw=0.0;a.uU=null;a.uE=null;a.w6=0;}
let P2=(a,b)=>{let c;if(b!==null){a.uU=b;return a;}c=new V;c.n_=1;c.oa=1;c.od=C(483);E(c);}
let AV0=(a,b)=>{return;}
let Rg=(a,b)=>{let c;if(b!==null){a.uE=b;return a;}c=new V;c.n_=1;c.oa=1;c.od=C(483);E(c);}
let A2P=(a,b)=>{return;}
let MF=(a,b,c,d)=>{let e,f,g,h,i,j,k,$$je;b:{e=a.w6;if(e!=3){if(d)break b;if(e!=2)break b;}b=new Cb;b.n_=1;b.oa=1;E(b);}a.w6=!d?1:2;while(true){try{f=Wi(a,b,c);}catch($$e){$$je=BG($$e);if($$je instanceof B0){g=$$je;b=new Nu;b.n_=1;b.oa=1;b.p$=g;E(b);}else{throw $$e;}}e=f.o8;if(e?0:1){if(!d)return f;e=b.oe-b.of|0;if(e<=0)return f;f=new CZ;f.o8=2;f.pw=e;}else if(e!=1?0:1)break;h=!(f.o8!=3?0:1)?a.uU:a.uE;p:{EM();if(h!==Fu){if(h===AUs)break p;else return f;}i=c.oe-c.of|0;j=a.xX;e=j.data.length;if(i<e)return DK;U6(c,
j,0,e);}k=b.of;e=f.o8;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Hk;b.n_=1;b.oa=1;E(b);}CH(b,k+f.pw|0);}return f;}
let SQ=(a,b)=>{let c,d,e,f,g,h,i;c=b.oe-b.of|0;if(!c){b=new C8;d=BW(0);b.or=(-1);b.oy=0;b.oe=0;CP();b.o4=CR;b.pb=0;b.oZ=d;b.of=0;b.oe=0;b.pR=0;b.pt=0;return b;}a.w6=0;e=c*a.x7|0;if(e<0){b=new V;f=new L;f.ob=H(16);F(f,f.n$,C(585));N(f,f.n$,e,10);g=new P;d=f.ob;h=d.data;c=f.n$;S();i=h.length;if(c>=0&&c<=(i-0|0)){g.oc=Q(d.data,0,c);b.n_=1;b.oa=1;b.od=g;E(b);}b=new O;Bm(b);E(b);}f=new C8;d=BW(e);f.or=(-1);f.oy=e;f.oe=e;CP();f.o4=CR;f.pb=0;f.oZ=d;f.of=0;f.oe=e;f.pR=0;f.pt=0;while(true){g=MF(a,b,f,0);if(g===DX)break;if
(g===DK){f=Ov(a,f);continue;}if(!AEZ(g))continue;Z7(g);}b=MF(a,b,f,1);c=b.o8;e=c!=2?0:1;e=!e&&!(c!=3?0:1)?0:1;q:{if(e){switch(c){case 0:b=new Lr;b.n_=1;b.oa=1;E(b);case 1:b=new Mj;b.n_=1;b.oa=1;E(b);case 2:f=new L8;e=b.pw;Bm(f);f.DJ=e;E(f);case 3:break;default:break q;}f=new Lq;e=b.pw;BY(f);f.ER=e;E(f);}}while(true){b=N_(a,f);if(b.o8?0:1)break;if(!AHw(b))continue;f=Ov(a,f);}AHq(f);return f;}
let Ov=(a,b)=>{let c,d,e,f,g,h,i;c=b.oZ.data;d=c.length;e=d*2|0;f=BW(e);if(e<d)d=e;g=f.data;e=0;while(e<d){g[e]=c[e];e=e+1|0;}d=g.length;if(d>=0&&d<=(d-0|0)){h=new C8;i=0+d|0;h.or=(-1);h.oy=d;h.oe=d;CP();h.o4=CR;h.pb=0;h.oZ=f;h.of=0;h.oe=i;h.pR=0;h.pt=0;CH(h,b.of);return h;}b=new O;b.n_=1;b.oa=1;E(b);}
let N_=(a,b)=>{let c,d;c=a.w6;if(c!=2&&c!=4){b=new Cb;b.n_=1;b.oa=1;E(b);}d=DX;if(d===d)a.w6=3;return d;}
let A4D=(a,b)=>{return DX;}
let AIS=a=>{a.w6=0;return a;}
let ARV=a=>{return;}
function CZ(){let a=this;D.call(a);a.o8=0;a.pw=0;}
let DX=null;let DK=null;let A_A=(a,b)=>{let c=new CZ();ACX(c,a,b);return c;}
let ACX=(a,b,c)=>{a.o8=b;a.pw=c;}
let AHw=a=>{return a.o8!=1?0:1;}
let AEZ=a=>{let b,c;b=a.o8;c=b!=2?0:1;return !c&&!(b!=3?0:1)?0:1;}
let AFY=b=>{let c;c=new CZ;c.o8=2;c.pw=b;return c;}
let Z7=a=>{let b,c;switch(a.o8){case 0:b=new Lr;b.n_=1;b.oa=1;E(b);case 1:b=new Mj;b.n_=1;b.oa=1;E(b);case 2:b=new L8;c=a.pw;b.n_=1;b.oa=1;b.DJ=c;E(b);case 3:b=new Lq;c=a.pw;b.n_=1;b.oa=1;b.ER=c;E(b);default:}}
let A0Q=()=>{let b;b=new CZ;b.o8=0;b.pw=0;DX=b;b=new CZ;b.o8=1;b.pw=0;DK=b;}
function QJ(){let a=this;D.call(a);a.C0=0;a.CR=0;a.Fa=0;}
let Ry=G();
let AQ_=null;let Bff=()=>{Bff=Bj(Ry);A7F();}
let A7F=()=>{let b,c;S2();b=X((A8a.t()).data.length);c=b.data;AQ_=b;c[AYe.oi]=1;c[AQr.oi]=2;c[X3.oi]=3;c[Xw.oi]=4;}
let KG=G(0);
function Ne(){let a=this;D.call(a);a.sn=null;a.u3=null;a.FG=0;a.IE=0;a.Ep=0;a.yq=0;a.A_=0;}
let A4e=(a,b,c)=>{let d=new Ne();AFA(d,a,b,c);return d;}
let AFA=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.yq=0;a.A_=0;a.IE=b;a.sn=d;c=C7(d.qS/4|0,c);if(!D1){e=CT(c);f=e.data.length;d=new Ja;g=0+f|0;d.or=(-1);d.oy=f;d.oe=f;d.of=0;d.oe=g;d.xy=0;d.zb=0;d.w9=e;}else{c=c*4|0;if(c<0){d=new V;h=new L;h.ob=H(16);G2(h,h.n$,C(585));N(h,h.n$,c,10);i=new P;e=h.ob;j=e.data;c=h.n$;S();k=j.length;if(c>=0&&c<=(k-0|0)){i.oc=Q(e.data,0,c);d.n_=1;d.oa=1;d.od=i;E(d);}d=new O;BY(d);E(d);}h=new C8;e=BW(c);h.or=(-1);h.oy=c;h.oe=c;CP();h.o4=CR;h.pb=0;h.oZ=e;h.of=0;h.oe=c;h.pR=1;h.pt=0;h.o4=DT();d
=Gd(h);}a.u3=d;d.oe=d.of;d.of=0;d.or=(-1);d=Bq;h=d.og.createBuffer();k=d.qN;d.qN=k+1|0;C6(d.rk,k,C_(h));a.FG=k;a.Ep=!b?35048:35044;}
let ANx=a=>{return a.sn;}
let AS7=a=>{return a.u3.oe/(a.sn.qS/4|0)|0;}
let A5U=(a,b,c,d)=>{let e,f,g;a.yq=1;e=a.u3;f=null;g=e instanceof Gk;if(g)f=Gd(e);else if(e instanceof Fi)f=e;if(f===null){f=new Bc;f.n_=1;f.oa=1;f.od=C(615);E(f);}f.of=0;f.oe=f.oy;f.or=(-1);CH(e,0);JD(f,b,c,d);CH(e,0);if(!g)Ds(e,d);else Ds(e,d<<2);CH(a.u3,0);Ds(a.u3,d);if(a.A_){e=Bq;f=a.u3;e.fV(34962,f.oe,f,a.Ep);a.yq=0;}}
let A07=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bq;d.lF(34962,a.FG);if(a.yq){e=a.u3;d.fV(34962,e.oe,e,a.Ep);a.yq=0;}a:{f=a.sn.qt.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.sn.qt.data[g];j=h[g];if(j>=0){e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}e.lu(j);k=i.qn;l=i.qP;m=i.qR;n=a.sn.qS;o=i.sE;e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}e.lt(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.sn.qt.data[g];d=i.qG;e=b.sb;p=(-1);j=Gl(e,d);if(j>=0)p=e.q0.data[j];if(p>=0){e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5
=0;}e.lu(p);j=i.qn;k=i.qP;l=i.qR;m=a.sn.qS;n=i.sE;e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}e.lt(p,j,k,l,m,n);}g=g+1|0;}}a.A_=1;}
let AYs=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bq;e=a.sn.qt.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}h.lG(g);}f=f+1|0;}}i=0;while(i<e){j=a.sn.qt.data[i].qG;k=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}l=Bq;h=b.sb;g=(-2);f=Gl(h,j);if(f>=0)g=h.q0.data[f];if(g==(-2)){g=l.lw(b.o0,j);FK(b.sb,j,g);}if(g!=(-1))k.lG(g);i=i+1|0;}}d.lF(34962,0);a.A_=0;}
let K$=G(0);
function Id(){let a=this;D.call(a);a.sC=null;a.Bf=0;a.CY=0;a.sS=0;a.w7=0;a.x2=0;}
let AOg=a=>{return a.sC.oe;}
let AXJ=a=>{return a.sC.oy;}
let ARr=(a,b,c,d)=>{let e;a.sS=1;e=a.sC;e.of=0;e.oe=e.oy;e.or=(-1);UW(e,b,c,d);e=a.sC;c=e.of;e.oe=c;e.of=0;e.or=(-1);if(a.w7){Bq.fV(34963,c,e,a.x2);a.sS=0;}}
let AJL=(a,b)=>{a.sS=a.sS|b;return a.sC;}
let A9x=a=>{let b,c,d;b=a.Bf;if(!b){c=new Bc;c.n_=1;c.oa=1;c.od=C(616);E(c);}Bq.lF(34963,b);if(a.sS){c=Bq;d=a.sC;c.fV(34963,d.oe,d,a.x2);a.sS=0;}a.w7=1;}
let A7u=a=>{Bq.lF(34963,0);a.w7=0;}
function ACI(){let a=this;D.call(a);a.sh=null;a.sp=null;a.sR=null;a.E4=0;a.Fb=0;a.IU=0;a.D4=0;a.x4=0;a.Bn=0;}
let Bgr=(a,b,c)=>{let d=new ACI();AQX(d,a,b,c);return d;}
let AQX=(a,b,c,d)=>{let e,f,g,h,i,j,k;b:{a.x4=0;a.Bn=0;a.IU=b;a.sh=d;c=C7(d.qS,c);if(!D1){e=BW(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new C8;g=0+f|0;d.or=(-1);d.oy=f;d.oe=f;CP();d.o4=CR;d.pb=0;d.oZ=e;d.of=0;d.oe=g;d.pR=0;d.pt=0;break b;}d=new O;d.n_=1;d.oa=1;Bu(d);E(d);}if(c<0){d=new V;h=new L;h.ob=H(16);G2(h,h.n$,C(585));N(h,h.n$,c,10);i=new P;e=h.ob;j=e.data;c=h.n$;S();k=j.length;if(c>=0&&c<=(k-0|0)){i.oc=Q(e.data,0,c);d.n_=1;d.oa=1;d.od=i;E(d);}d=new O;BY(d);E(d);}d=new C8;e=BW(c);d.or=(-1);d.oy=c;d.oe
=c;CP();d.o4=CR;d.pb=0;d.oZ=e;d.of=0;d.oe=c;d.pR=1;d.pt=0;d.o4=DT();}a.sR=d;a.Fb=1;a.D4=!b?35048:35044;a.sp=Gd(d);d=Bq;h=d.og.createBuffer();f=d.qN;d.qN=f+1|0;C6(d.rk,f,C_(h));Bq.lF(34962,f);Bq.fV(34962,a.sR.oy,null,a.D4);Bq.lF(34962,0);a.E4=f;d=a.sp;d.oe=d.of;d.of=0;d.or=(-1);d=a.sR;d.oe=d.of;d.of=0;d.or=(-1);}
let AZt=a=>{return a.sh;}
let ALS=a=>{return (a.sp.oe*4|0)/a.sh.qS|0;}
let AKj=(a,b,c,d)=>{let e,f,g;a.x4=1;if(!a.Fb){e=a.sp;e.of=0;e.oe=e.oy;e.or=(-1);JD(e,b,c,d);e=a.sp;e.oe=e.of;e.of=0;e.or=(-1);CH(a.sR,0);Ds(a.sR,a.sp.oe<<2);}else{e=a.sR;f=null;g=e instanceof Gk;if(g)f=Gd(e);else if(e instanceof Fi)f=e;if(f===null){f=new Bc;f.n_=1;f.oa=1;f.od=C(615);E(f);}f.of=0;f.oe=f.oy;f.or=(-1);CH(e,0);JD(f,b,c,d);CH(e,0);if(!g)Ds(e,d);else Ds(e,d<<2);CH(a.sp,0);Ds(a.sp,d);}if(a.Bn){e=Bq;f=a.sR;e.fW(34962,0,f.oe,f);a.x4=0;}}
let ARg=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bq;d.lF(34962,a.E4);if(a.x4){Ds(a.sR,a.sp.oe*4|0);e=a.sR;d.fV(34962,e.oe,e,a.D4);a.x4=0;}a:{f=a.sh.qt.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.sh.qt.data[g];j=h[g];if(j>=0){e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}e.lu(j);k=i.qn;l=i.qP;m=i.qR;n=a.sh.qS;o=i.sE;e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}e.lt(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.sh.qt.data[g];p=i.qG;e=b.sb;q=(-1);j=Gl(e,p);if(j>=0)q=e.q0.data[j];if(q>=0){e=Bq;if(b.o5)
{Dg(b,b.p4,b.p3);b.o5=0;}e.lu(q);j=i.qn;k=i.qP;l=i.qR;m=a.sh.qS;n=i.sE;e=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}e.lt(q,j,k,l,m,n);}g=g+1|0;}}a.Bn=1;}
let AMX=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bq;e=a.sh.qt.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}h.lG(g);}f=f+1|0;}}i=0;while(i<e){j=a.sh.qt.data[i].qG;k=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}l=Bq;h=b.sb;g=(-2);f=Gl(h,j);if(f>=0)g=h.q0.data[f];if(g==(-2)){g=l.lw(b.o0,j);FK(b.sb,j,g);}if(g!=(-1))k.lG(g);i=i+1|0;}}d.lF(34962,0);a.Bn=0;}
function AEX(){let a=this;D.call(a);a.u0=null;a.sX=null;a.FI=0;a.Ir=0;a.u9=0;a.Bp=0;a.FY=0;}
let A$t=(a,b)=>{let c=new AEX();A0M(c,a,b);return c;}
let A0M=(a,b,c)=>{let d,e,f,g,h,i,j,k;b:{a.u9=1;a.Bp=0;c=c*2|0;if(!D1){d=BW(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new C8;g=0+e|0;f.or=(-1);f.oy=e;f.oe=e;CP();f.o4=CR;f.pb=0;f.oZ=d;f.of=0;f.oe=g;f.pR=0;f.pt=0;break b;}f=new O;f.n_=1;f.oa=1;Bu(f);E(f);}if(c<0){f=new V;h=new L;h.ob=H(16);G2(h,h.n$,C(585));N(h,h.n$,c,10);i=new P;d=h.ob;j=d.data;c=h.n$;S();g=j.length;if(c>=0&&c<=(g-0|0)){i.oc=Q(d.data,0,c);f.n_=1;f.oa=1;f.od=i;E(f);}f=new O;BY(f);E(f);}f=new C8;d=BW(c);f.or=(-1);f.oy=c;f.oe=c;CP();f.o4=CR;f.pb
=0;f.oZ=d;f.of=0;f.oe=c;f.pR=1;f.pt=0;f.o4=DT();}a.sX=f;a.Ir=1;a.FY=!b?35048:35044;f=K0(f);a.u0=f;f.oe=f.of;f.of=0;f.or=(-1);f=a.sX;f.oe=f.of;f.of=0;f.or=(-1);f=Bq;h=f.og.createBuffer();k=f.qN;f.qN=k+1|0;C6(f.rk,k,C_(h));Bq.lF(34963,k);Bq.fV(34963,a.sX.oy,null,a.FY);Bq.lF(34963,0);a.FI=k;}
let ASO=a=>{return a.u0.oe;}
let AW9=a=>{return a.u0.oy;}
let A2V=(a,b,c,d)=>{let e,f;a.u9=1;e=a.u0;e.of=0;e.oe=e.oy;e.or=(-1);UW(e,b,c,d);e=a.u0;e.oe=e.of;e.of=0;e.or=(-1);CH(a.sX,0);Ds(a.sX,d<<1);if(a.Bp){e=Bq;f=a.sX;e.fW(34963,0,f.oe,f);a.u9=0;}}
let A8K=(a,b)=>{a.u9=a.u9|b;return a.u0;}
let APd=a=>{let b,c,d;b=a.FI;if(!b){c=new Bc;c.n_=1;c.oa=1;c.od=C(617);E(c);}Bq.lF(34963,b);if(a.u9){Ds(a.sX,a.u0.oe*2|0);c=Bq;d=a.sX;c.fW(34963,0,d.oe,d);a.u9=0;}a.Bp=1;}
let AKJ=a=>{Bq.lF(34963,0);a.Bp=0;}
function Ph(){let a=this;D.call(a);a.tx=null;a.t_=null;a.Dn=0;a.IG=0;a.Ex=0;a.x_=0;a.Cl=0;a.D_=0;a.r8=null;}
let AFJ=null;let Bap=()=>{Bap=Bj(Ph);A$K();}
let A3x=(a,b,c)=>{let d=new Ph();ACZ(d,a,b,c);return d;}
let ACZ=(a,b,c,d)=>{let e,f,g,h,i,j;Bap();a.x_=0;a.Cl=0;a.D_=(-1);e=new Et;e.ra=1;e.pE=X(16);a.r8=e;a.IG=b;a.tx=d;c=C7(d.qS/4|0,c);if(!D1){f=CT(c);g=f.data.length;d=new Ja;h=0+g|0;d.or=(-1);d.oy=g;d.oe=g;d.of=0;d.oe=h;d.xy=0;d.zb=0;d.w9=f;}else{c=c*4|0;if(c<0){d=new V;e=new L;e.ob=H(16);G2(e,e.n$,C(585));N(e,e.n$,c,10);i=new P;f=e.ob;j=f.data;c=e.n$;S();g=j.length;if(c>=0&&c<=(g-0|0)){i.oc=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=i;E(d);}d=new O;BY(d);E(d);}e=new C8;f=BW(c);e.or=(-1);e.oy=c;e.oe=c;CP();e.o4=CR;e.pb
=0;e.oZ=f;e.of=0;e.oe=c;e.pR=1;e.pt=0;e.o4=DT();d=Gd(e);}a.t_=d;d.oe=d.of;d.of=0;d.or=(-1);d=Bq;e=d.og.createBuffer();g=d.qN;d.qN=g+1|0;C6(d.rk,g,C_(e));a.Dn=g;a.Ex=!b?35048:35044;d=AFJ;d.of=0;d.oe=d.oy;d.or=(-1);GJ.lI(1,d);d=AFJ;c=d.of;if(c<d.oe){d.of=c+1|0;a.D_=d.lJ(c);return;}d=new I$;d.n_=1;d.oa=1;E(d);}
let AYy=a=>{return a.tx;}
let A5v=a=>{return (a.t_.oe*4|0)/a.tx.qS|0;}
let AYM=(a,b,c,d)=>{let e,f,g;a.x_=1;e=a.t_;f=null;g=e instanceof Gk;if(g)f=Gd(e);else if(e instanceof Fi)f=e;if(f===null){f=new Bc;f.n_=1;f.oa=1;f.od=C(615);E(f);}f.of=0;f.oe=f.oy;f.or=(-1);CH(e,0);JD(f,b,c,d);CH(e,0);if(!g)Ds(e,d);else Ds(e,d<<2);CH(a.t_,0);Ds(a.t_,d);if(a.Cl){e=Bq;f=a.t_;e.fV(34962,f.oe,f,a.Ex);a.x_=0;}}
let AUj=(a,b,c)=>{let d;d=GJ;d.lK(a.D_);AGS(a,b,c);if(a.x_){d.lF(34962,a.Dn);b=a.t_;Ds(b,b.oe);b=a.t_;d.fV(34962,b.oe,b,a.Ex);a.x_=0;}a.Cl=1;}
let AGS=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.r8.o3;e=!d?0:1;d:{f=a.tx.qt.data.length;if(e){if(c===null){d=0;c:{while(true){if(!e)break c;if(d>=f)break c;g=a.tx.qt.data[d].qG;h=b.sb;i=(-1);e=Gl(h,g);if(e>=0)i=h.q0.data[e];g=a.r8;if(d>=g.o3)break;e=i!=g.pE.data[d]?0:1;d=d+1|0;}h=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,d,10);F(b,b.n$,C(38));d=g.o3;N(b,b.n$,d,10);g=new P;c=b.ob;j=c.data;e=b.n$;S();f=j.length;if(e>=0&&e<=(f-0|0)){g.oc=Q(c.data,0,e);h.n_=1;h.oa=1;h.od=g;E(h);}b=new O;Bm(b);E(b);}}else{j=
c.data;e=j.length!=d?0:1;i=0;while(e){if(i>=f)break d;e=j[i]!=GM(a.r8,i)?0:1;i=i+1|0;}}}}bb:{if(!e){Cj.lF(34962,a.Dn);if(a.r8.o3){k=a.tx.qt.data.length;d=0;while(d<k){g=a.r8;if(d>=g.o3){h=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,d,10);F(b,b.n$,C(38));d=g.o3;N(b,b.n$,d,10);g=new P;c=b.ob;j=c.data;e=b.n$;S();f=j.length;if(e>=0&&e<=(f-0|0)){g.oc=Q(c.data,0,e);h.n_=1;h.oa=1;h.od=g;E(h);}b=new O;BY(b);E(b);}i=g.pE.data[d];if(i>=0){g=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}g.lG(i);}d=d+1|0;}}a.r8.o3=0;d=0;while
(true){if(d>=f)break bb;l=a.tx.qt.data[d];if(c!==null){j=c.data;Gp(a.r8,j[d]);}else{g=a.r8;h=l.qG;Gp(g,ACz(b.sb,h,(-1)));}k=GM(a.r8,d);if(k>=0){AGe(b,k);AH7(b,k,l.qn,l.qP,l.qR,a.tx.qS,l.sE);}d=d+1|0;}}}}
let AMp=(a,b,c)=>{GJ.lK(0);a.Cl=0;}
let A$K=()=>{let b,c,d,e;if(!D1){b=X(1);c=b.data.length;d=new HB;e=0+c|0;d.or=(-1);d.oy=c;d.oe=c;d.of=0;d.oe=e;d.vU=0;d.wP=0;d.vn=b;}else{d=new C8;b=BW(4);d.or=(-1);d.oy=4;d.oe=4;CP();d.o4=CR;d.pb=0;d.oZ=b;d.of=0;d.oe=4;d.pR=1;d.pt=0;d.o4=DT();d=Hu(d);}AFJ=d;}
let R8=G(Ne);
let O6=G(Id);
function AGr(){let a=this;D.call(a);a.D3=0;a.va=null;a.q0=null;a.Fo=0.0;a.D$=0;a.Ce=0;a.B_=0;}
let Ku=(a,b)=>{let c=new AGr();A17(c,a,b);return c;}
let A17=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.Fo=c;d=NE(b,c);a.D$=d*c|0;b=d-1|0;a.B_=b;a.Ce=Ec(I(b));a.va=Bt(D,d);a.q0=X(d);return;}e=new V;f=new L;f.ob=H(16);F(f,f.n$,C(60));EQ(f,f.n$,c);g=new P;h=f.ob;i=h.data;d=f.n$;S();j=i.length;if(d>=0&&d<=(j-0|0)){g.oc=Q(h.data,0,d);e.n_=1;e.oa=1;e.od=g;E(e);}f=new O;f.n_=1;f.oa=1;Bu(f);E(f);}
let Gl=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new V;c.n_=1;c.oa=1;c.od=C(61);E(c);}a:{d=a.va;if(!b.pv){e=0;while(true){if(e>=b.oc.length)break a;b.pv=(31*b.pv|0)+b.oc.charCodeAt(e)|0;e=e+1|0;}}}f=Z(T(W(I(b.pv),B(2135587861, 2654435769)),a.Ce));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof P))g=0;else{h=b;g=c.oc!==h.oc?0:1;}if(g)break;f=(f+1|0)&a.B_;}return f;}
let FK=(a,b,c)=>{let d,e;d=Gl(a,b);if(d>=0){a.q0.data[d]=c;return;}d= -(d+1|0)|0;e=a.va.data;e[d]=b;a.q0.data[d]=c;c=a.D3+1|0;a.D3=c;if(c>=a.D$)AAs(a,e.length<<1);}
let ACz=(a,b,c)=>{let d;d=Gl(a,b);if(d>=0)c=a.q0.data[d];return c;}
let AAs=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.va.data.length;a.D$=b*a.Fo|0;d=b-1|0;a.B_=d;a.Ce=Ec(I(d));e=a.va;f=a.q0;a.va=Bt(D,b);a.q0=X(b);if(a.D3>0){g=0;while(true){if(g>=c)break b;h=e.data[g];if(h!==null){k:{i=f.data[g];j=a.va;if(!h.pv){k=0;while(true){if(k>=h.oc.length)break k;h.pv=(31*h.pv|0)+h.oc.charCodeAt(k)|0;k=k+1|0;}}}b=Z(T(W(I(h.pv),B(2135587861, 2654435769)),a.Ce));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.B_;}l[b]=h;a.q0.data[b]=i;}g=g+1|0;}}}}
let AGo=G();
let ARm=b=>{let c,d,e,f,g;if(!D1){c=CT(b);d=c.data.length;e=new Ja;f=0+d|0;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=f;e.xy=0;e.zb=0;e.w9=c;return e;}b=b*4|0;if(b>=0){e=new C8;c=BW(b);e.or=(-1);e.oy=b;e.oe=b;CP();e.o4=CR;e.pb=0;e.oZ=c;e.of=0;e.oe=b;e.pR=1;e.pt=0;e.o4=DT();return Gd(e);}e=new V;g=new L;g.ob=H(16);F(g,g.n$,C(585));N(g,g.n$,b,10);g=Bi(g);e.n_=1;e.oa=1;e.od=g;E(e);}
let Fp=G(0);
function C8(){let a=this;Gk.call(a);a.pR=0;a.pt=0;}
let Vt=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oe)return a.oZ.data[a.pb+b|0];c=new O;d=a.oe;e=new L;e.ob=H(16);F(e,e.n$,C(618));N(e,e.n$,b,10);F(e,e.n$,C(591));N(e,e.n$,d,10);d=e.n$;Bp(e,d,d+1|0);f=e.ob;g=f.data;g[d]=41;h=new P;d=e.n$;S();i=g.length;if(d>=0&&d<=(i-0|0)){h.oc=Q(f.data,0,d);c.n_=1;c.oa=1;c.od=h;E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let YP=a=>{let b,c,d,e,f,g,h,i,j;if(a.pt){b=new EV;b.n_=1;b.oa=1;E(b);}a:{c=a.oe;d=a.of;e=c-d|0;if(d>0){c=a.pb;f=c+d|0;g=0;while(true){if(g>=e)break a;h=a.oZ.data;i=c+1|0;j=f+1|0;h[c]=h[f];g=g+1|0;c=i;f=j;}}}a.of=e;a.oe=a.oy;a.or=(-1);return a;}
let K0=a=>{let b,c,d,e,f,g;b=a.oe;c=a.of;d=(b-c|0)/2|0;e=a.o4;CP();if(e!==CR){e=new RS;f=a.pb+c|0;c=a.pt;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=d;e.xa=f;e.t$=a;e.CV=c;return e;}e=new SR;b=a.pb+c|0;g=a.pt;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=d;e.xa=b;e.t$=a;e.CV=g;return e;}
let AHb=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.oe){c=a.oZ.data;b=a.pb+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;h=a.o4;CP();if(h!==CR)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new O;d=a.oe-3|0;i=new L;i.ob=H(16);F(i,i.n$,C(618));N(i,i.n$,b,10);F(i,i.n$,C(591));N(i,i.n$,d,10);d=i.n$;Bp(i,d,d+1|0);c=i.ob;j=c.data;j[d]=41;k=new P;d=i.n$;S();e=j.length;if(d>=0&&d<=(e-0|0)){k.oc=Q(c.data,0,d);h.n_=1;h.oa=1;h.od=k;E(h);}h=new O;h.n_=1;h.oa=1;Bu(h);E(h);}
let Xs=(a,b,c)=>{let d,e,f;if(a.pt){d=new EV;d.n_=1;d.oa=1;E(d);}if(b>=0&&(b+3|0)<a.oe){d=a.o4;CP();if(d!==CR){e=a.oZ.data;b=a.pb+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.oZ.data;b=a.pb+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new O;c=a.oe-3|0;f=new L;f.ob=H(16);F(f,f.n$,C(618));N(f,f.n$,b,10);F(f,f.n$,C(591));N(f,f.n$,c,10);c=f.n$;Bp(f,c,c+1|0);f.ob.data[c]=41;f=Bi(f);d.n_=1;d.oa=1;d.od=f;E(d);}
let Hu=a=>{let b,c,d,e,f,g;b=a.oe;c=a.of;d=(b-c|0)/4|0;e=a.o4;CP();if(e!==CR){e=new Oz;f=a.pb+c|0;c=a.pt;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=d;e.wi=f;e.w2=a;e.Db=c;return e;}e=new TL;b=a.pb+c|0;g=a.pt;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=d;e.wi=b;e.w2=a;e.Db=g;return e;}
let Gd=a=>{let b,c,d,e,f,g;b=a.oe;c=a.of;d=(b-c|0)/4|0;e=a.o4;CP();if(e!==AA7){e=new Os;f=a.pb+c|0;c=a.pt;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=d;e.v9=f;e.uc=a;e.ET=c;return e;}e=new Px;b=a.pb+c|0;g=a.pt;e.or=(-1);e.oy=d;e.oe=d;e.of=0;e.oe=d;e.v9=b;e.uc=a;e.ET=g;return e;}
let AWF=a=>{return a.oZ.data;}
let MB=G();
let IK=G(Fa);
let ATt=a=>{a.of=0;a.oe=a.oy;a.or=(-1);return a;}
let AW6=(a,b)=>{CH(a,b);return a;}
let A5n=a=>{a.of=0;a.oe=a.oy;a.or=(-1);return a;}
function HC(){D.call(this);this.FW=null;}
let CR=null;let AA7=null;let YL=null;let CP=()=>{CP=Bj(HC);A$L();}
let DT=()=>{let b,c;CP();if(YL===null){b=new ArrayBuffer(2);c=new Int16Array(b);0;c[0]=1;YL=(new Int8Array(b))[0]?AA7:CR;}return YL;}
let A$L=()=>{let b;b=new HC;CP();b.FW=C(619);CR=b;b=new HC;b.FW=C(620);AA7=b;}
let Fi=G(Fa);
let JD=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.lP()){e=new EV;e.n_=1;e.oa=1;E(e);}f=a.oe;g=a.of;if((f-g|0)<d){e=new G0;e.n_=1;e.oa=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.lQ(g,h[c]);i=i+1|0;g=j;c=f;}a.of=a.of+d|0;return a;}e=new O;k=new L;k.ob=H(16);F(k,k.n$,C(595));N(k,k.n$,d,10);F(k,k.n$,C(596));Kq(e,Bi(k));E(e);}e=new O;k=new L;k.ob=H(16);F(k,k.n$,C(621));N(k,k.n$,i,10);F(k,k.n$,C(594));N(k,k.n$,f,10);l=new P;b=k.ob;h=b.data;d=k.n$;S();f=h.length;if
(d>=0&&d<=(f-0|0)){l.oc=Q(b.data,0,d);e.n_=1;e.oa=1;e.od=l;E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}}b=b.data;e=new O;d=b.length;k=new L;k.ob=H(16);F(k,k.n$,C(597));N(k,k.n$,c,10);F(k,k.n$,C(591));N(k,k.n$,d,10);d=k.n$;Bp(k,d,d+1|0);b=k.ob;h=b.data;h[d]=41;l=new P;d=k.n$;S();f=h.length;if(d>=0&&d<=(f-0|0)){l.oc=Q(b.data,0,d);e.n_=1;e.oa=1;e.od=l;E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}
let AQv=a=>{a.of=0;a.oe=a.oy;a.or=(-1);return a;}
let AYS=a=>{a.oe=a.of;a.of=0;a.or=(-1);return a;}
let ANI=(a,b)=>{Ds(a,b);return a;}
let A5G=(a,b)=>{CH(a,b);return a;}
let ANY=a=>{a.oe=a.of;a.of=0;a.or=(-1);return a;}
let AWt=a=>{a.of=0;a.oe=a.oy;a.or=(-1);return a;}
let ASn=(a,b)=>{Ds(a,b);return a;}
let AVC=(a,b)=>{CH(a,b);return a;}
let AEg=G();
let IO=G(Fa);
let UW=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.lP()){e=new EV;e.n_=1;e.oa=1;E(e);}f=a.oe;g=a.of;if((f-g|0)<d){e=new G0;e.n_=1;e.oa=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.lR(g,h[c]);i=i+1|0;g=j;c=f;}a.of=a.of+d|0;return a;}e=new O;k=new L;k.ob=H(16);F(k,k.n$,C(595));N(k,k.n$,d,10);F(k,k.n$,C(596));Kq(e,Cy(k));E(e);}e=new O;k=new L;k.ob=H(16);F(k,k.n$,C(622));N(k,k.n$,i,10);F(k,k.n$,C(594));N(k,k.n$,f,10);l=new P;b=k.ob;h=b.data;d=k.n$;S();f=h.length;if
(d>=0&&d<=(f-0|0)){l.oc=Q(b.data,0,d);e.n_=1;e.oa=1;e.od=l;E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}}b=b.data;e=new O;d=b.length;k=new L;k.ob=H(16);F(k,k.n$,C(597));N(k,k.n$,c,10);F(k,k.n$,C(591));N(k,k.n$,d,10);d=k.n$;Bp(k,d,d+1|0);b=k.ob;h=b.data;h[d]=41;l=new P;d=k.n$;S();f=h.length;if(d>=0&&d<=(f-0|0)){l.oc=Q(b.data,0,d);e.n_=1;e.oa=1;e.od=l;E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}
let AVj=a=>{a.of=0;a.oe=a.oy;a.or=(-1);return a;}
let AHC=a=>{a.oe=a.of;a.of=0;a.or=(-1);return a;}
let AS9=(a,b)=>{Ds(a,b);return a;}
let A7V=(a,b)=>{CH(a,b);return a;}
let A8L=a=>{a.oe=a.of;a.of=0;a.or=(-1);return a;}
let AWf=a=>{a.of=0;a.oe=a.oy;a.or=(-1);return a;}
let A4w=(a,b)=>{Ds(a,b);return a;}
let AXN=(a,b)=>{CH(a,b);return a;}
let AFr=G();
let Qf=G(0);
function Lk(){let a=this;D.call(a);a.GW=null;a.tQ=0;a.tD=0;a.wn=null;a.xC=null;a.Hh=0;a.vR=0;}
let Bgh=0;let Bex=(a,b,c,d)=>{let e=new Lk();AZP(e,a,b,c,d);return e;}
let AZP=(a,b,c,d,e)=>{a.tQ=0;a.tD=0;a.vR=0;a.GW=b;a.xC=c;a.wn=d;a.Hh=e;if(c!==null){b=UC(a,c);a.xC=b;c=b.pA;a.tQ=c===null?b.qu:c.ql;a.tD=c===null?b.qv:c.qj;if(d===null){if(c===null){IP();b=H$;}else b=Ix(c.pX);a.wn=b;}}}
let Sx=a=>{let b,c;if(a.vR){b=new Bc;b.n_=1;b.oa=1;b.od=C(623);E(b);}if(a.xC===null){b=UC(a,ASQ(a.GW));a.xC=b;c=b.pA;a.tQ=c===null?b.qu:c.ql;a.tD=c===null?b.qv:c.qj;if(a.wn===null){if(c===null){IP();b=H$;}else b=Ix(c.pX);a.wn=b;}}a.vR=1;}
let UC=(a,b)=>{let c,d,e,f,g,h,i,j;b:{if(Bq===null&&Bgh){c=b.pA;d=c===null?b.qu:c.ql;e=c===null?b.qv:c.qj;f=MY(d);g=MY(e);if(d!=f)break b;if(e!=g)break b;}return b;}h=new Ig;c=b.pA;if(c===null){IP();c=H$;}else c=Ix(c.pX);JW(h,f,g,c);c=h.pA;if(c===null){Gu(b);K3(h,b.sP,0,0,d,e,0,0,d,e);}else{i=b.pA.qd;j=c.qd;NP(i,j,0,0,d,e,0,0,d,e);}if(b.w8){c=new Bc;c.n_=1;c.oa=1;c.od=C(48);E(c);}JK();Jc(KM,b.yR);c=b.pA;if(c!==null)NI(c.qd);b.w8=1;return h;}
function Ig(){let a=this;D.call(a);a.qu=0;a.qv=0;a.sP=null;a.p6=null;a.yR=0;a.yw=null;a.Gg=0;a.Gi=0;a.Gk=0;a.Gj=0.0;a.Aj=null;a.y7=null;a.F$=null;a.Iz=null;a.wm=null;a.xO=null;a.Fd=0;a.pA=null;a.w8=0;}
let ADO=null;let TG=()=>{TG=Bj(Ig);APu();}
let ASQ=a=>{let b=new Ig();VK(b,a);return b;}
let BiN=(a,b,c)=>{let d=new Ig();JW(d,a,b,c);return d;}
let VK=(a,b)=>{let c,d,e,f,g;TG();a.Gg=255;a.Gi=255;a.Gk=255;a.Aj=Nw(255,255,255,a.Gj);JU();a.y7=AB_;Zv();a.F$=AGh;a.Fd=0;c=b.qk;d=b.xE.x1;e=Dm(d,c);d=e<0?null:d.qa.data[e];if(Ef.rM.EF){f=ASr(d.q4);a.pA=Be0(f,0,f.data.length,0);Mw(a,(-1),(-1),null,null);}else{Mw(a,(-1),(-1),d.Do,null);if(a.wm===null){d=new Bc;g=b.qk;b=new L;b.ob=H(16);F(b,b.n$,C(624));e=b.n$;if(g===null)g=C(2);F(b,e,g);F(b,b.n$,C(625));b=Bi(b);d.n_=1;d.oa=1;d.od=b;E(d);}}}
let JW=(a,b,c,d)=>{TG();a.Gg=255;a.Gi=255;a.Gk=255;a.Aj=Nw(255,255,255,a.Gj);JU();a.y7=AB_;Zv();a.F$=AGh;a.Fd=0;Mw(a,b,c,null,null);}
let Mw=(a,b,c,d,e)=>{let f,g;if(e!==null){a.xO=e;a.qu=e.getWidth();a.qv=e.getHeight();}else if(d===null){a.qu=b;a.qv=c;}else{a.wm=d;a.qu=d.width;a.qv=d.height;}if(D1){d=new C8;f=BW(4);d.or=(-1);d.oy=4;d.oe=4;CP();d.o4=CR;d.pb=0;d.oZ=f;d.of=0;d.oe=4;d.pR=1;d.pt=0;d.o4=DT();}else{f=BW(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new C8;g=0+c|0;d.or=(-1);d.oy=c;d.oe=c;CP();d.o4=CR;d.pb=0;d.oZ=f;d.of=0;d.oe=g;d.pR=0;d.pt=0;}else{d=new O;d.n_=1;d.oa=1;Bu(d);E(d);}}a.yw=d;JK();c=AHL;AHL=c+1|0;a.yR=c;Xs(d,0,c);C6(KM,
a.yR,a);}
let X2=a=>{let b,c;Ju();b=Jp.rs.document.createElement("canvas");a.sP=b;c=a.qu;b.width=c;b=a.sP;c=a.qv;b.height=c;b=a.sP.getContext("2d");a.p6=b;TG();IE();c=Cr(HR.ol);b.globalCompositeOperation=c;}
let Nw=(b,c,d,e)=>{let f;TG();f=new L;f.ob=H(16);F(f,f.n$,C(626));N(f,f.n$,b,10);b=f.n$;Bp(f,b,b+1|0);f.ob.data[b]=44;N(f,f.n$,c,10);b=f.n$;Bp(f,b,b+1|0);f.ob.data[b]=44;N(f,f.n$,d,10);c=f.n$;Bp(f,c,c+1|0);f.ob.data[c]=44;EQ(f,f.n$,e);d=f.n$;Bp(f,d,d+1|0);f.ob.data[d]=41;return Bi(f);}
let Gu=a=>{let b,c;if(a.sP===null){X2(a);if(a.wm!==null){b=a.p6;IE();c=Cr(XR.qz);b.globalCompositeOperation=c;b=a.p6;c=a.wm;b.drawImage(c,0.0,0.0);b=a.p6;c=Cr(HR.qz);b.globalCompositeOperation=c;}if(a.xO!==null){c=a.p6;IE();b=Cr(XR.qz);c.globalCompositeOperation=b;b=a.p6;c=a.xO;b.drawImage(c,0.0,0.0);b=a.p6;c=Cr(HR.qz);b.globalCompositeOperation=c;}}}
let ZJ=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m;k=a.pA;if(k===null){Gu(b);K3(a,b.sP,c,d,e,f,g,h,i,j);}else{l=b.pA.qd;m=k.qd;NP(l,m,c,d,e,f,g,h,i,j);}}
let Lv=a=>{let b;b=a.pA;if(b===null)return a.qu;return b.ql;}
let LI=a=>{let b;b=a.pA;if(b===null)return a.qv;return b.qj;}
let Sp=a=>{let b,c;if(a.w8){b=new Bc;b.n_=1;b.oa=1;b.od=C(48);E(b);}JK();Jc(KM,a.yR);c=a.pA;if(c!==null)NI(c.qd);a.w8=1;}
let Y2=a=>{let b,c,d;b=a.pA;if(b===null)return 6408;d:{c=b.pX;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new Bc;d=new L;d.ob=H(16);DI(d,d.n$,DJ(C(49)));N(d,d.n$,c,10);d=Bi(d);b.n_=1;b.oa=1;b.od=d;E(b);}c=6406;}return c;}
let X8=a=>{let b,c,d;b=a.pA;if(b===null)return 6408;d:{c=b.pX;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(49));N(d,d.n$,c,10);d=Bi(d);b.n_=1;b.oa=1;b.od=d;E(b);}c=6406;}return c;}
let QN=a=>{let b,c,d;b=a.pA;if(b===null)return 5121;d:{c=b.pX;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break d;case 6:c=32819;break d;default:b=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(49));N(d,d.n$,c,10);d=Bi(d);b.n_=1;b.oa=1;b.od=d;E(b);}c=5121;}return c;}
let Uy=a=>{return a.yw;}
let K3=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;Gu(a);k=a.y7;JU();if(k===P0){a:{l=a.p6;k=Cr(ADO);l.fillStyle=k;l=a.p6;k=Cr(ADO);l.strokeStyle=k;l=a.p6;k="destination-out";l.globalCompositeOperation=k;a.p6.beginPath();m=a.p6;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);AEs();l=Xv;Gu(a);BaF();switch(AWN.data[l.oi]){case 1:break;case 2:a.p6.stroke();break a;default:break a;}a.p6.fill();}a.p6.closePath();r=a.p6;l=Cr(a.Aj);r.fillStyle=l;r=a.p6;k=Cr(a.Aj);r.strokeStyle=k;r=a.p6;IE();l=Cr(HR.qz);r.globalCompositeOperation
=l;}if(e&&f&&i&&j){l=a.p6;n=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;l.drawImage(b,n,o,p,q,s,t,u,v);}a.Iz=null;}
let APu=()=>{ADO=Nw(255,255,255,1.0);}
let I0=G(IK);
let AUE=a=>{let b,c;b=a.of;if(b<a.oe){a.of=b+1|0;return a.lJ(b);}c=new I$;c.n_=1;c.oa=1;E(c);}
let Fq=(a,b)=>{let c,d;if(a.lP()){c=new EV;c.n_=1;c.oa=1;E(c);}d=a.of;if(d<a.oe){a.of=d+1|0;a.lY(d,b);return a;}c=new G0;c.n_=1;c.oa=1;E(c);}
let Gc=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oe)return a.lJ(b);c=new O;d=a.oe;e=new L;e.ob=H(16);F(e,e.n$,C(618));N(e,e.n$,b,10);F(e,e.n$,C(591));N(e,e.n$,d,10);d=e.n$;Bp(e,d,d+1|0);f=e.ob;g=f.data;g[d]=41;h=new P;d=e.n$;S();i=g.length;if(d>=0&&d<=(i-0|0)){h.oc=Q(f.data,0,d);c.n_=1;c.oa=1;c.od=h;E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let U1=(a,b,c)=>{let d,e,f,g,h,i;if(a.lP()){d=new EV;d.n_=1;d.oa=1;E(d);}if(b>=0&&b<a.oe){a.lY(b,c);return a;}d=new O;c=a.oe;e=new L;e.ob=H(16);F(e,e.n$,C(618));N(e,e.n$,b,10);F(e,e.n$,C(591));N(e,e.n$,c,10);c=e.n$;Bp(e,c,c+1|0);f=e.ob;g=f.data;g[c]=41;h=new P;c=e.n$;S();i=g.length;if(c>=0&&c<=(i-0|0)){h.oc=Q(f.data,0,c);d.n_=1;d.oa=1;d.od=h;E(d);}d=new O;d.n_=1;d.oa=1;Bu(d);E(d);}
let APW=a=>{return a.lP();}
function HB(){let a=this;I0.call(a);a.wP=0;a.vU=0;a.vn=null;}
let A5S=(a,b)=>{return a.vn.data[b+a.vU|0];}
let A4g=(a,b,c)=>{a.vn.data[b+a.vU|0]=c;}
let AIy=a=>{return a.wP;}
let IT=G(Fi);
let PK=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oe)return a.lZ(b);c=new O;d=a.oe;e=new L;e.ob=H(16);F(e,e.n$,C(618));N(e,e.n$,b,10);F(e,e.n$,C(591));N(e,e.n$,d,10);d=e.n$;Bp(e,d,d+1|0);f=e.ob;g=f.data;g[d]=41;h=new P;d=e.n$;S();i=g.length;if(d>=0&&d<=(i-0|0)){h.oc=Q(f.data,0,d);c.n_=1;c.oa=1;c.od=h;E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let NT=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.lP()){d=new EV;d.n_=1;d.oa=1;E(d);}if(b>=0&&b<a.oe){a.lQ(b,c);return a;}d=new O;e=a.oe;f=new L;f.ob=H(16);F(f,f.n$,C(618));N(f,f.n$,b,10);F(f,f.n$,C(591));N(f,f.n$,e,10);e=f.n$;Bp(f,e,e+1|0);g=f.ob;h=g.data;h[e]=41;i=new P;e=f.n$;S();j=h.length;if(e>=0&&e<=(j-0|0)){i.oc=Q(g.data,0,e);d.n_=1;d.oa=1;d.od=i;E(d);}d=new O;d.n_=1;d.oa=1;Bu(d);E(d);}
let A0n=a=>{return a.lP();}
function Ja(){let a=this;IT.call(a);a.zb=0;a.xy=0;a.w9=null;}
let ASw=(a,b)=>{return a.w9.data[b+a.xy|0];}
let ARK=(a,b,c)=>{a.w9.data[b+a.xy|0]=c;}
let A55=a=>{return a.zb;}
let GO=G(BV);
let P0=null;let AB_=null;let Be3=null;let JU=()=>{JU=Bj(GO);A1P();}
let A1P=()=>{let b,c;b=new GO;JU();b.ol=C(627);b.oi=0;P0=b;c=new GO;c.ol=C(628);c.oi=1;AB_=c;Be3=R(GO,[b,c]);}
let Gx=G(BV);
let A_k=null;let AGh=null;let BfQ=null;let Zv=()=>{Zv=Bj(Gx);A74();}
let A74=()=>{let b,c;b=new Gx;Zv();b.ol=C(629);b.oi=0;A_k=b;c=new Gx;c.ol=C(630);c.oi=1;AGh=c;BfQ=R(Gx,[b,c]);}
function JT(){let a=this;MB.call(a);a.xE=null;a.qk=null;a.xQ=null;}
let ASy=(a,b,c)=>{let d=new JT();M1(d,a,b,c);return d;}
let M1=(a,b,c,d)=>{Nq();if(d!==Ri&&d!==ANp&&d!==Zg){b=new Bc;c=new L;c.ob=H(16);F(c,c.n$,C(631));F(c,c.n$,d===null?C(2):d.ol);F(c,c.n$,C(632));c=Bi(c);b.n_=1;b.oa=1;b.od=c;E(b);}a.xE=b;b=Nz(c,C(633),C(123));if(ST(b,C(123)))b=Cw(b,0,b.oc.length-1|0);a.qk=b;a.xQ=d;}
let Vz=a=>{return a.qk;}
let AHU=a=>{let b,c,d;b=a.qk;c=GW(b,47,b.oc.length-1|0);if(c<0)b=a.qk;else{b=a.qk;b=Cw(b,c+1|0,b.oc.length);}d=GW(b,46,b.oc.length-1|0);if(d==(-1))return b;return Cw(b,0,d);}
let Zd=a=>{let b,c,d,e,f;b=a.xQ;Nq();if(b===Zg){if(M5===null){c=new Oq;b=new JR;d=new S6;e=Ef.rM.HP;d.CT=window.localStorage;d.CH=e;Bbc();b.wv=d;c.G2=b;b=new JR;d=new TU;e=new CQ;e.pz=1;e.os=Bt(D,16);d.G5=e;d.DA=F7(16,0.800000011920929);b.wv=d;c.CW=b;M5=c;}b=M5;return !AHo(b.CW,a)?Q0(b.G2,a):Q0(b.CW,a);}c=Ww(a.xE,a.qk);if(c!==null)return c;c=new Bc;b=a.qk;d=new L;d.ob=H(16);f=d.n$;if(b===null)b=C(2);F(d,f,b);F(d,d.n$,C(634));b=Bi(d);c.n_=1;c.oa=1;c.od=b;E(c);}
let Vw=(a,b)=>{let c,d,e,f,g,h;c=new JT;d=a.xE;if(a.qk.oc.length?0:1)e=C(43);else{e=a.qk;f=!ST(e,C(123))?C(123):C(43);g=new L;g.ob=H(16);F(g,g.n$,e);F(g,g.n$,f);e=Bi(g);}g=new L;g.ob=H(16);h=g.n$;if(e===null)e=C(2);F(g,h,e);h=g.n$;if(b===null)b=C(2);F(g,h,b);M1(c,d,Bi(g),a.xQ);return c;}
let VC=a=>{let b,c,d;b=a.qk;c=Pa(b,C(123),b.oc.length);d=C(43);if(c>0)d=Cw(a.qk,0,c);return ASy(a.xE,d,a.xQ);}
let A$M=a=>{return a.qk;}
function AE1(){let a=this;D.call(a);a.qd=0;a.ql=0;a.qj=0;a.pX=0;a.xv=null;a.zz=null;}
let Be0=(a,b,c,d)=>{let e=new AE1();AZU(e,a,b,c,d);return e;}
let Bd7=(a,b,c)=>{let d=new AE1();A$P(d,a,b,c);return d;}
let AZU=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=X(4);a.xv=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];j;h[j]=k;j=j+1|0;}}a.zz=A8G(g,h,c,d);b=a.xv.data;a.qd=b[0];a.ql=b[1];a.qj=b[2];c=b[3];a.pX=c;if(e&&e!=c)ACJ(a,e);}
let A$P=(a,b,c,d)=>{let e;e=X(4);a.xv=e;a.zz=ATa(e.data,b,c,d);e=a.xv.data;a.qd=e[0];a.ql=e[1];a.qj=e[2];a.pX=e[3];}
let ACJ=(a,b)=>{let c,d,e,f,g;c=Bd7(a.ql,a.qj,b);Ud(c.qd,0);d=a.ql;e=a.qj;f=a.qd;g=c.qd;NP(f,g,0,0,d,e,0,0,d,e);NI(a.qd);a.qd=c.qd;a.pX=c.pX;a.qj=c.qj;a.xv=c.xv;a.zz=c.zz;a.ql=c.ql;}
let A8G=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let ATa=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let NI=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);}
let NP=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
let Ud=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
let Is=G(IO);
let AGp=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.oe)return a.l8(b);c=new O;d=a.oe;e=new L;e.ob=H(16);F(e,e.n$,C(618));N(e,e.n$,b,10);F(e,e.n$,C(591));N(e,e.n$,d,10);d=e.n$;Bp(e,d,d+1|0);f=e.ob;g=f.data;g[d]=41;h=new P;d=e.n$;S();i=g.length;if(d>=0&&d<=(i-0|0)){h.oc=Q(f.data,0,d);c.n_=1;c.oa=1;c.od=h;E(c);}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let A3t=a=>{return a.lP();}
function KT(){let a=this;Is.call(a);a.A5=0;a.yg=0;a.y1=null;}
let ANo=(a,b)=>{return a.y1.data[b+a.yg|0];}
let A26=(a,b,c)=>{a.y1.data[b+a.yg|0]=c;}
let A0d=a=>{return a.A5;}
let Zc=G();
function DN(){BV.call(this);this.sM=0;}
let AQd=null;let Bbd=null;let BbD=null;let Ba3=null;let Bbz=null;let Bgq=null;let BaC=null;let BaH=null;let ALx=()=>{ALx=Bj(DN);AKu();}
let AKu=()=>{let b,c,d,e,f,g,h;b=new DN;ALx();b.ol=C(635);b.oi=0;b.sM=9728;AQd=b;c=new DN;c.ol=C(636);c.oi=1;c.sM=9729;Bbd=c;d=new DN;d.ol=C(637);d.oi=2;d.sM=9987;BbD=d;e=new DN;e.ol=C(638);e.oi=3;e.sM=9984;Ba3=e;f=new DN;f.ol=C(639);f.oi=4;f.sM=9985;Bbz=f;g=new DN;g.ol=C(640);g.oi=5;g.sM=9986;Bgq=g;h=new DN;h.ol=C(641);h.oi=6;h.sM=9987;BaC=h;BaH=R(DN,[b,c,d,e,f,g,h]);}
function F5(){BV.call(this);this.yF=0;}
let Bch=null;let ATf=null;let Bbg=null;let Bcn=null;let AW0=()=>{AW0=Bj(F5);A2y();}
let A2y=()=>{let b,c,d;b=new F5;AW0();b.ol=C(642);b.oi=0;b.yF=33648;Bch=b;c=new F5;c.ol=C(643);c.oi=1;c.yF=33071;ATf=c;d=new F5;d.ol=C(644);d.oi=2;d.yF=10497;Bbg=d;Bcn=R(F5,[b,c,d]);}
let Xj=G();
let A$B=(a,b)=>{b=a.bq(b);BR();return b===null?null:b instanceof HL()&&b instanceof Ev?b.oR:b;}
let AK9=a=>{return a.gc();}
function H5(){let a=this;IT.call(a);a.uc=null;a.ET=0;a.v9=0;}
let A6b=a=>{return a.ET;}
let AST=a=>{return a.uc.oZ.data;}
let Os=G(H5);
let APP=(a,b)=>{let c;c=a.uc.oZ.data;b=a.v9+(b*4|0)|0;return IU((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);}
let A6Y=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:H6(c);e=a.uc.oZ.data;b=a.v9+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;}
let Px=G(H5);
let AW$=(a,b)=>{let c;c=a.uc.oZ.data;b=a.v9+(b*4|0)|0;return IU(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);}
let A3H=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:H6(c);e=a.uc.oZ.data;b=a.v9+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;}
function II(){let a=this;Is.call(a);a.t$=null;a.CV=0;a.xa=0;}
let A2h=a=>{return a.CV;}
let A7s=a=>{return a.t$.oZ.data;}
let RS=G(II);
let AZ3=(a,b)=>{let c;c=a.t$.oZ.data;b=a.xa+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;}
let AZv=(a,b,c)=>{let d;d=a.t$.oZ.data;b=a.xa+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;}
let SR=G(II);
let A5K=(a,b)=>{let c;c=a.t$.oZ.data;b=a.xa+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;}
let AZ6=(a,b,c)=>{let d;d=a.t$.oZ.data;b=a.xa+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;}
let Hk=G(B0);
let EV=G(Hk);
function I9(){let a=this;I0.call(a);a.w2=null;a.Db=0;a.wi=0;}
let APF=a=>{return a.Db;}
let Oz=G(I9);
let ANk=(a,b)=>{let c;c=a.w2.oZ.data;b=a.wi+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;}
let AIx=(a,b,c)=>{let d;d=a.w2.oZ.data;b=a.wi+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;}
let TL=G(I9);
let AUg=(a,b)=>{let c;c=a.w2.oZ.data;b=a.wi+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;}
let AJZ=(a,b,c)=>{let d;d=a.w2.oZ.data;b=a.wi+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;}
let I$=G(B0);
let Ex=G(BV);
let ANp=null;let Ri=null;let BeX=null;let Bak=null;let Zg=null;let BbT=null;let Nq=()=>{Nq=Bj(Ex);AMJ();}
let AMJ=()=>{let b,c,d,e,f;b=new Ex;Nq();b.ol=C(645);b.oi=0;ANp=b;c=new Ex;c.ol=C(646);c.oi=1;Ri=c;d=new Ex;d.ol=C(647);d.oi=2;BeX=d;e=new Ex;e.ol=C(648);e.oi=3;Bak=e;f=new Ex;f.ol=C(649);f.oi=4;Zg=f;BbT=R(Ex,[b,c,d,e,f]);}
function FX(){let a=this;LG.call(a);a.yT=null;a.xL=null;}
let Wi=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=a.yT;e=0;f=0;g=a.xL;b:{while(true){if((e+32|0)>f){h=b.of;i=b.oe;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;Ot(b,d,j,f-j|0);e=0;}}j=c.of;m=c.oe;if(!(j>=m?0:1)){j=b.of>=b.oe?0:1;n=!j&&e>=f?DX:DK;break b;}k=g.data;h=m-j|0;m=k.length;if(h<m)m=h;o=new R1;o.wa=b;o.sJ=c;n=a.l$(d,e,f,g,0,m,o);e=o.wK;l=o.wR;if(n===null){j=b.of>=b.oe?0:1;if(!j&&e>=f)n=DX;else if(!(c.of>=c.oe?0:1)&&e>=f)n=DK;}U6(c,g,0,l);if
(n!==null)break;}}CH(b,b.of-(f-e|0)|0);return n;}
let O5=G(FX);
let APx=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;n=h.sJ;if((n.oe-n.of|0)<2?0:1)break b;i=DK;break b;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{o=l&64512;m=B9(o,55296);c=m?0:1;if(!(!c&&!(o!=56320?0:1)?0:1)){if((f+3|0)>g){j=j+(-1)|0;n=h.sJ;if((n.oe-n.of|0)<3?0:1)break b;i=DK;break b;}k=e.data;c=f+1|0;k[f]=(224|l>>12)<<24>>24;f
=c+1|0;k[c]=(128|l>>6&63)<<24>>24;m=f+1|0;k[f]=(128|l&63)<<24>>24;}else{if(!(m?0:1)){i=new CZ;i.o8=2;i.pw=1;break b;}if(j>=d){n=h.wa;if(n.of>=n.oe?0:1)break b;i=DX;break b;}p=j+1|0;m=k[j];if(!((m&64512)!=56320?0:1)){j=p+(-2)|0;i=new CZ;i.o8=2;i.pw=1;break b;}if((f+4|0)>g){j=p+(-2)|0;n=h.sJ;if((n.oe-n.of|0)<4?0:1)break b;i=DK;break b;}k=e.data;o=((l&1023)<<10|m&1023)+65536|0;m=f+1|0;k[f]=(240|o>>18)<<24>>24;c=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=c+1|0;k[c]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j
=p;}}c=j;f=m;}j=c;}h.wK=j;h.wR=f;return i;}
let FF=G(Da);
function H1(){D.call(this);this.Fq=null;}
function Y4(){let a=this;H1.call(a);a.zB=null;a.BG=null;a.v8=0;a.zY=0;a.Ey=0;a.F5=0;}
let Bbx=(a,b)=>{let c=new Y4();A0D(c,a,b);return c;}
let A0D=(a,b,c)=>{a.Fq=new D;a.F5=(-1);if(c<0){b=new V;b.n_=1;b.oa=1;E(b);}a.zB=b;if(64>c)c=64;a.BG=H(c);}
let Ys=a=>{let b;b=a.zB;if(b!==null){b.EH.l_();a.zB=null;return;}b=new FF;b.n_=1;b.oa=1;E(b);}
let IB=a=>{let b,c,d,e;if(a.zB===null){b=new FF;b.n_=1;b.oa=1;E(b);}if(a.Ey&&a.v8>=a.zY)return null;b=new L;b.ob=H(16);d:{while(true){if(a.v8>=a.zY&&!P9(a,0))break d;c=a.BG.data;d=a.v8;e=d+1|0;a.v8=e;d=c[d];if(d==10)break;if(d==13){if(e>=a.zY&&!P9(a,0))break d;c=a.BG.data;e=a.v8;if(c[e]!=10)break d;a.v8=e+1|0;break d;}e=b.n$;Bp(b,e,e+1|0);b.ob.data[e]=d;}}return Bi(b);}
let P9=(a,b)=>{let c,d;if(a.Ey)return 0;a:{while(true){c=a.BG;d=c.data.length;if(b>=d)break a;d=XY(a.zB,c,b,d-b|0);if(d==(-1)){a.Ey=1;break a;}if(!d)break;b=b+d|0;}}a.zY=b;a.v8=0;a.F5=(-1);return 1;}
function Wk(){let a=this;H1.call(a);a.EH=null;a.EO=null;a.JW=null;a.sL=null;a.I9=null;a.vT=null;a.Cg=0;a.EL=0;}
let Bdr=a=>{let b=new Wk();AIN(b,a);return b;}
let BiO=(a,b)=>{let c=new Wk();AGn(c,a,b);return c;}
let AIN=(a,b)=>{let c,d;Do();c=Du;d=new Qg;ABd(d,c,0.3333333432674408,0.5);d.GJ=BW(512);d.Hp=H(512);EM();c=Fu;if(c!==null){d.yN=c;d.Dv=c;AGn(a,b,d);return;}c=new V;c.n_=1;c.oa=1;c.od=C(650);E(c);}
let AGn=(a,b,c)=>{let d,e,f,g,h,i;a.Fq=new D;d=BW(8192);e=d.data;a.JW=d;f=e.length;if(f>=0&&f<=(f-0|0)){g=new C8;h=0+f|0;g.or=(-1);g.oy=f;g.oe=f;CP();g.o4=CR;g.pb=0;g.oZ=d;g.of=0;g.oe=h;g.pR=0;g.pt=0;a.sL=g;e=H(1024);d=e.data;a.I9=e;h=d.length;g=new Jw;i=0+h|0;g.or=(-1);g.oy=h;g.oe=h;g.of=0;g.oe=i;g.vY=0;g.xA=0;g.uF=e;a.vT=g;a.EH=b;a.EO=c;CH(g,i);b=a.sL;CH(b,b.oe);return;}b=new O;b.n_=1;b.oa=1;E(b);}
let XY=(a,b,c,d)=>{let e,f,g,h;if(a.EL){e=a.vT;if(!(e.of>=e.oe?0:1))return (-1);}f=0;k:{while(d>0){e=a.vT;g=e.oe-e.of|0;if(d<g)g=d;Ot(e,b,c+f|0,g);d=d-g|0;f=f+g|0;e=a.vT;h=e.of>=e.oe?0:1;if(!h&&!AHN(a))break k;}}return f;}
let AHN=a=>{let b,c,d;if(a.EL)return 0;V9(a.vT);a:{while(true){b=a.sL;c=b.of>=b.oe?0:1;if(!c&&!Uq(a))break a;d=(ADx(a.EO,a.sL,a.vT,a.Cg)).o8;if(d!=1?0:1)break;if(d?0:1)Uq(a);}}b=a.sL;c=b.of>=b.oe?0:1;if(!c&&a.Cg){b=a.EO;d=b.Ag;if(d!=3&&d!=2){b=new Cb;b.n_=1;b.oa=1;E(b);}b.Ag=3;if(DX.o8?0:1)a.EL=1;}b=a.vT;b.oe=b.of;b.of=0;b.or=(-1);return 1;}
let Uq=a=>{let b,c,d;if(a.Cg)return 0;YP(a.sL);a:{while(true){b=a.sL;c=b.of;d=b.oe;if(!(c>=d?0:1))break a;c=a.EH.mj(b.oZ,c,d-c|0);if(c==(-1)){a.Cg=1;break a;}b=a.sL;CH(b,b.of+c|0);if(!c)break;}}b=a.sL;b.oe=b.of;b.of=0;b.or=(-1);return 1;}
function ABw(){let a=this;D.call(a);a.q9=null;a.tN=null;a.Dy=0;a.qe=0;}
let AAz=(a,b)=>{let c=new ABw();A9f(c,a,b);return c;}
let A9f=(a,b,c)=>{if(b!==null){a.q9=b;a.tN=c;a.Dy=0;a.qe=0;return;}b=new Dv;b.n_=1;b.oa=1;E(b);}
let Vl=a=>{let b,c,d,e;if(a.tN===null){b=new Dv;b.n_=1;b.oa=1;E(b);}a:{k:{c=a.q9.oc.length;d=a.qe;if(d<c){if(a.Dy)return 1;while(true){if(d>=c)break k;b=a.tN;e=a.q9;if(d<0)break a;if(d>=e.oc.length)break a;if(E9(b,e.oc.charCodeAt(d),0)==(-1))return 1;d=d+1|0;}}}return 0;}b=new Ba;b.n_=1;b.oa=1;E(b);}
let B7=a=>{let b,c,d,e,f,g,h;if(a.tN===null){b=new Dv;b.n_=1;b.oa=1;E(b);}c=a.qe;d=a.q9.oc.length;if(c<d){if(a.Dy){b=a.tN;e=a.q9;f=a.qe;if(f>=0&&f<e.oc.length){if(E9(b,e.oc.charCodeAt(f),0)>=0){b=a.q9;c=a.qe;a.qe=c+1|0;if(c>=0&&c<b.oc.length){c=b.oc.charCodeAt(c);b=new P;g=H(1);h=g.data;h[0]=c;b.oc=Q(g.data,0,h.length);return b;}b=new Ba;b.n_=1;b.oa=1;E(b);}a.qe=a.qe+1|0;bf:{while(true){f=a.qe;if(f>=d){b=a.q9;return Cw(b,c,b.oc.length);}b=a.tN;e=a.q9;if(f<0)break bf;if(f>=e.oc.length)break bf;if(E9(b,e.oc.charCodeAt(f),
0)>=0)break;a.qe=a.qe+1|0;}return Cw(a.q9,c,a.qe);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}h:{while(true){f=B9(c,d);if(f>=0)break h;b=a.tN;e=a.q9;if(c<0)break;if(c>=e.oc.length)break;if(E9(b,e.oc.charCodeAt(c),0)<0)break h;c=c+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}a.qe=c;if(f<0){a.qe=c+1|0;i:{while(true){f=a.qe;if(f>=d){b=a.q9;return Cw(b,c,b.oc.length);}b=a.tN;e=a.q9;if(f<0)break i;if(f>=e.oc.length)break i;if(E9(b,e.oc.charCodeAt(f),0)>=0)break;a.qe=a.qe+1|0;}return Cw(a.q9,c,a.qe);}b=new Ba;b.n_
=1;b.oa=1;E(b);}}b=new Ms;b.n_=1;b.oa=1;E(b);}
let Pv=G();
let AUw=null;let Rv=b=>{let $$je;b:{if(b!==null)try{Ys(b);break b;}catch($$e){$$je=BG($$e);if($$je instanceof Ea){}else{throw $$e;}}}}
let ATI=()=>{AUw=BW(0);}
function UB(){let a=this;D.call(a);a.tn=null;a.GX=0;a.DO=null;a.yU=null;a.Gm=0;a.Ib=0.0;a.Ia=0.0;a.Ci=null;a.Ik=0.0;a.r3=null;a.vd=null;a.xB=null;a.DY=null;}
let BgS=null;let BeZ=()=>{BeZ=Bj(UB);AP$();}
let BfX=(a,b)=>{let c=new UB();AHO(c,a,b);return c;}
let AHO=(a,b,c)=>{let d,e,f,g,h,i;BeZ();d=new CQ;d.pz=1;d.os=Bt(D,16);a.DO=d;d=new CQ;d.pz=1;d.os=Bt(D,16);a.yU=d;d=new BD;FQ();d.pV=1.0;d.pU=1.0;d.pT=1.0;d.pS=1.0;Eh(d);a.Ci=d;a.tn=b;a.GX=c;e=b.t2.oj;if(!e){b=new V;b.n_=1;b.oa=1;b.od=C(651);E(b);}a:{a.r3=Bt(Lz(Fr),e);a.vd=X(e);if(e>1){f=Bt(Et,e);g=f.data;a.xB=f;h=0;i=g.length;while(true){if(h>=i)break a;b=new Et;b.ra=1;b.pE=X(16);g[h]=b;h=h+1|0;}}}a.DY=X(e);}
let O9=(a,b)=>{let c,d,e,f,g,h,i;c=a.tn.t2;d=0;e=a.r3.data.length;while(d<e){f=a.vd.data;if(f[d]>0){g=a.r3.data[d];if(d>=c.oj){h=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,d,10);F(b,b.n$,C(38));i=c.oj;N(b,b.n$,i,10);b=Bi(b);h.n_=1;h.oa=1;h.od=b;E(h);}Ye(b,c.os.data[d].zu,g,0,f[d]);}d=d+1|0;}}
let T3=a=>{let b,c,d,e,f,g,h;a.Ib=0.0;a.Ia=0.0;Y$(a.yU,1);b=a.yU;c=b.os;d=0;e=b.oj;f=null;if(d>e){b=new V;b.n_=1;b.oa=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oj=0;b=a.DO;c=b.os;d=0;e=b.oj;f=null;if(d>e){b=new V;b.n_=1;b.oa=1;E(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.oj=0;e=0;c=a.vd.data;h=c.length;while(e<h){g=a.xB;if(g!==null)g.data[e].o3=0;c[e]=0;e=e+1|0;}}
let ACb=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{if(a.r3.data.length==1)Uu(a,0,b.qw);else{c=a.DY.data;d=0;e=c.length;if(d>e){b=new V;b.n_=1;b.oa=1;E(b);}while(d<e){f=d+1|0;c[d]=0;d=f;}g=0;b=b.qi;d=b.oj;while(true){f=B9(g,d);if(f>=0)break;if(f>=0){h=new O;i=new L;i.ob=H(16);F(i,i.n$,C(37));N(i,i.n$,g,10);F(i,i.n$,C(38));g=b.oj;N(i,i.n$,g,10);b=Bi(i);h.n_=1;h.oa=1;h.od=b;E(h);}i=b.os.data[g].pB;j=i.os;k=0;l=i.oj;while(k<l){f=j.data[k].xt;c[f]=c[f]+1|0;k=k+1|0;}g=g+1|0;}g=0;while(true){if(g>=e)break a;Uu(a,g,c[g]);g
=g+1|0;}}}}
let Uu=(a,b,c)=>{let d,e,f,g;d=a.xB;if(d!==null){e=d.data;if(c>e[b].pE.data.length)Zb(e[b],c-e[b].o3|0);}d=a.vd.data;f=d[b]+(c*20|0)|0;e=a.r3.data;g=e[b];if(g===null)e[b]=CT(f);else if(g.data.length<f){e=CT(f);CX(g,0,e,0,d[b]);a.r3.data[b]=e;}}
let WH=(a,b)=>{let c,d,e,f,g;c=Bt(Lz(Fr),b);d=a.r3;CX(d,0,c,0,d.data.length);a.r3=c;e=X(b);c=a.vd;CX(c,0,e,0,c.data.length);a.vd=e;d=Bt(Et,b);f=0;e=a.xB;if(e!==null){f=e.data.length;CX(e,0,d,0,f);}e=d.data;while(f<b){g=new Et;g.ra=1;g.pE=X(16);e[f]=g;f=f+1|0;}a.xB=d;a.DY=X(b);}
let P$=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;e=b.qi.oj;if(!e)return;f=a.r3.data.length;g=a.tn.t2.oj;if(f<g)WH(a,g);Dk(a.DO,b);ACb(a,b);h=b.pW;i=0;j=0;g=0;k=0.0;l=0;while(l<e){m=b.qi;if(l>=m.oj){n=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,l,10);F(b,b.n$,C(38));f=m.oj;N(b,b.n$,f,10);b=Bi(b);n.n_=1;n.oa=1;n.od=b;E(n);}m=m.os.data[l];n=m.pB;o=n.os;p=m.pP.pL;q=c+m.r9;r=d+m.Ao;s=0;t=n.oj;while(s<t){u=g+1|0;if(g==j){f=i+1|0;if(f>=h.o3){m=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,f,10);F(b,
b.n$,C(38));f=h.o3;N(b,b.n$,f,10);b=Bi(b);m.n_=1;m.oa=1;m.od=b;E(m);}k=IU(h.pE.data[f]&(-16777217));i=f+1|0;f=B9(i,h.o3);if(f>=0)j=(-1);else{if(f>=0){m=new O;b=new L;b.ob=H(16);F(b,b.n$,C(37));N(b,b.n$,i,10);F(b,b.n$,C(38));f=h.o3;N(b,b.n$,f,10);b=Bi(b);m.n_=1;m.oa=1;m.od=b;E(m);}j=h.pE.data[i];}}v=p.data;w=o.data;q=q+v[s];Z1(a,w[s],q,r,k);s=s+1|0;g=u;}l=l+1|0;}FQ();a.Ik=AFN;}
let Z1=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.tn.xM;g=f.tp;h=f.Gs;i=c+b.rg*g;j=d+b.wV*h;k=b.qE*g;l=b.q$*h;m=b.E2;n=b.GK;o=b.Cr;p=b.D8;if(a.GX){i=i+FH(i)*0.5|0;j=j+FH(j)*0.5|0;k=k+FH(k)*0.5|0;l=l+FH(l)*0.5|0;}q=i+k;r=j+l;s=b.xt;t=a.vd.data;u=t[s];t[s]=t[s]+20|0;t=a.xB;if(t!==null){b=t.data[s];v=a.Gm;a.Gm=v+1|0;Gp(b,v);}t=a.r3.data[s].data;v=u+1|0;t[u]=i;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=o;w=v+1|0;t[v]=i;s=w+1|0;t[w]=r;v=s+1|0;t[s]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=p;w=v
+1|0;t[v]=q;v=w+1|0;t[w]=r;w=v+1|0;t[v]=e;v=w+1|0;t[w]=n;w=v+1|0;t[v]=p;v=w+1|0;t[w]=q;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=n;t[w]=o;}
let WJ=(a,b,c,d)=>{P$(a,b,c,d+a.tn.xM.yZ);}
let AP$=()=>{let b;b=new BD;FQ();b.pV=1.0;b.pU=1.0;b.pT=1.0;b.pS=1.0;Eh(b);BgS=b;}
let DS=G(BV);
let A2S=null;let Bb4=null;let A2i=null;let A7c=null;let A34=null;let ANK=null;let H$=null;let Bfl=null;let IP=()=>{IP=Bj(DS);AWY();}
let Ix=b=>{let c,d;IP();if(b==1)return A2S;if(b==2)return A2i;if(b==5)return A7c;if(b==6)return A34;if(b==3)return ANK;if(b==4)return H$;c=new Bc;d=new L;d.ob=H(16);F(d,d.n$,C(652));N(d,d.n$,b,10);d=Bi(d);c.n_=1;c.oa=1;c.od=d;E(c);}
let AWY=()=>{let b,c,d,e,f,g,h;b=new DS;IP();b.ol=C(241);b.oi=0;A2S=b;c=new DS;c.ol=C(653);c.oi=1;Bb4=c;d=new DS;d.ol=C(654);d.oi=2;A2i=d;e=new DS;e.ol=C(655);e.oi=3;A7c=e;f=new DS;f.ol=C(656);f.oi=4;A34=f;g=new DS;g.ol=C(657);g.oi=5;ANK=g;h=new DS;h.ol=C(658);h.oi=6;H$=h;Bfl=R(DS,[b,c,d,e,f,g,h]);}
let Kj=G();
let Yk=0;let Tu=null;let PZ=null;let AFu=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:H6(b);c.Fa=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.C0=0;c.CR=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Dh(Be(I(d),I(8388608)),M)){d=d<<1;f=f+(-1)|0;}}g=PZ;h=A6d(g,0,g.data.length,f);if(h<0)h= -h|0;g=PZ.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=Tu.data[e];j=Be(I(d),B(4294967295, 0));k=Z(T(W(j,Be(I(e),B(4294967295, 0))),32-i|0));if(k<Yk){while(Gy(k,Yk)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=
PZ.data;e=h+1|0;i=9+(f-g[e]|0)|0;k=Z(T(W(j,Be(I(Tu.data[e]),B(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=Tu.data;f=h+1|0;e=g[f];m=i-1|0;n=W(Be(I(l),B(4294967295, 0)),Be(I(e),B(4294967295, 0)));e=32-m|0;o=Z(T(n,e));p=Z(T(W(Be(I(d-1|0),B(4294967295, 0)),Be(I(g[f]),B(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(Gy(EC(k,r),EC(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(Gy(EC(k,l),EC(o,l))>=0)break;m=l;}s=Gy(q,m);d=s>0?C7(EC(k,q),q):s<0?C7(EC(k,m),m)+m|0:C7(EC((k+(m/2|0)|0),m),m);if(E8(I(d),I(1000000000))
>=0)while(true){h=h+1|0;d=EC(d,10);if(Gy(d,1000000000)<0)break;}else if(Gy(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.C0=d;c.CR=h-50|0;}
let ADn=()=>{Yk=EC((-1),10);Tu=E2([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);PZ=E2([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
let Mu=G();
let AXB=null;let A2z=null;let AHW=(b,c,d)=>{let e,f,g,h,i,j;e=50+c|0;if(b){f=AXB.data;if(e<=f.length&&e>=0){g=GE(W(Be(I(b),B(4294967295, 0)),Be(I(f[e]),B(4294967295, 0))));h=A2z.data[e]-1|0;i=(32-Ee(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){c=( -c|0)+1|0;e=32;if(c<e)e=c;b=b>>e;c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return IU(j);}}return IU(!d?0:(-2147483648));}
let ZK=()=>{AXB=E2([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);A2z=E2([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
let G7=G(BV);
let Xv=null;let AZk=null;let AT5=null;let AEs=()=>{AEs=Bj(G7);AWq();}
let AWq=()=>{let b,c;b=new G7;AEs();b.ol=C(659);b.oi=0;Xv=b;c=new G7;c.ol=C(660);c.oi=1;AZk=c;AT5=R(G7,[b,c]);}
function C5(){BV.call(this);this.qz=null;}
let XR=null;let Bds=null;let A_X=null;let BcY=null;let Bca=null;let BgO=null;let Bdw=null;let Bes=null;let BeJ=null;let HR=null;let Bfz=null;let BbX=null;let IE=()=>{IE=Bj(C5);A1K();}
let A1K=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new C5;IE();b.ol=C(661);b.oi=0;b.qz=C(662);XR=b;c=new C5;c.ol=C(663);c.oi=1;c.qz=C(664);Bds=c;d=new C5;d.ol=C(665);d.oi=2;d.qz=C(666);A_X=d;e=new C5;e.ol=C(667);e.oi=3;e.qz=C(668);BcY=e;f=new C5;f.ol=C(669);f.oi=4;f.qz=C(670);Bca=f;g=new C5;g.ol=C(671);g.oi=5;g.qz=C(672);BgO=g;h=new C5;h.ol=C(673);h.oi=6;h.qz=C(674);Bdw=h;i=new C5;i.ol=C(675);i.oi=7;i.qz=C(676);Bes=i;j=new C5;j.ol=C(677);j.oi=8;j.qz=C(678);BeJ=j;k=new C5;k.ol=C(679);k.oi=9;k.qz=C(680);HR=k;l=new C5;l.ol
=C(681);l.oi=10;l.qz=C(682);Bfz=l;BbX=R(C5,[b,c,d,e,f,g,h,i,j,k,l]);}
let GD=G(BV);
let AJU=null;let ATV=null;let BdS=null;let AI$=()=>{AI$=Bj(GD);AZL();}
let AZL=()=>{let b,c;b=new GD;AI$();b.ol=C(683);b.oi=0;AJU=b;c=new GD;c.ol=C(684);c.oi=1;ATV=c;BdS=R(GD,[b,c]);}
let T_=G();
let Wt=0;let AGA=(b,c,d,e)=>{let f,g,h,i,j,k,l;if(!Wt){SM(b,c,d,e);return;}RI();f=PA;if(f!==AA1&&f!==f&&f!==AGu)AGj(b,c,d,e);else{g=Cj;f=c.pA;if(f===null)h=6408;else o:{e=f.pX;switch(e){case 1:h=6406;break o;case 2:h=6410;break o;case 3:case 5:h=6407;break o;case 4:case 6:h=6408;break o;default:}c=new Bc;g=new L;g.ob=H(16);Ez(g,g.n$,C(49));N(g,g.n$,e,10);g=Bi(g);c.n_=1;c.oa=1;c.od=g;E(c);}i=f===null?c.qu:f.ql;j=f===null?c.qv:f.qj;if(f===null)k=6408;else v:{k=f.pX;switch(k){case 1:k=6406;break v;case 2:k=6410;break v;case 3:case 5:k
=6407;break v;case 4:case 6:k=6408;break v;default:}c=new Bc;g=new L;Dn(g);g.ob=H(16);AH6(g,g.n$,C(49));N(g,g.n$,k,10);g=Bi(g);c.n_=1;c.oa=1;c.od=g;E(c);}if(f===null)l=5121;else bn:{l=f.pX;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break bn;case 6:l=32819;break bn;default:c=new Bc;g=new L;g.ob=H(16);Ez(g,g.n$,C(49));N(g,g.n$,l,10);g=Bi(g);c.n_=1;c.oa=1;c.od=g;E(c);}l=5121;}g.cn(b,0,h,i,j,0,k,l,c.yw);Bq.mv(b);}}
let AGj=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=Bb.w1.getExtension("GL_ARB_framebuffer_object")===null?0:1;k:{if(!f&&!(Bb.w1.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bq.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CN;h.oE=g;i=h;g.classObject=i;}}if(h.oQ===null)h.oQ=Bv(h.oE.$meta.name);h=h.oQ;if(h===C(685))f=1;else if(!(C(685) instanceof P))f=0;else{j=C(685);f=h.oc!==j.oc?0:1;}if(!f&&GJ===null){SM(b,c,d,e);break k;}}j=Cj;h=c.pA;if(h===null)f=6408;else m:{e=h.pX;switch(e)
{case 1:f=6406;break m;case 2:f=6410;break m;case 3:case 5:f=6407;break m;case 4:case 6:f=6408;break m;default:}c=new Bc;j=new L;j.ob=H(16);DI(j,j.n$,DJ(C(49)));N(j,j.n$,e,10);j=Bi(j);c.n_=1;c.oa=1;c.od=j;E(c);}k=h===null?c.qu:h.ql;l=h===null?c.qv:h.qj;if(h===null)m=6408;else bo:{m=h.pX;switch(m){case 1:m=6406;break bo;case 2:m=6410;break bo;case 3:case 5:m=6407;break bo;case 4:case 6:m=6408;break bo;default:}c=new Bc;j=new L;j.ob=H(16);Ez(j,j.n$,C(49));N(j,j.n$,m,10);j=Bi(j);c.n_=1;c.oa=1;c.od=j;E(c);}if(h
===null)n=5121;else bp:{n=h.pX;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break bp;case 6:n=32819;break bp;default:c=new Bc;j=new L;j.ob=H(16);DI(j,j.n$,DJ(C(49)));N(j,j.n$,n,10);j=Bi(j);c.n_=1;c.oa=1;c.od=j;E(c);}n=5121;}j.cn(b,0,f,k,l,0,m,n,c.yw);Bq.mv(b);}}
let SM=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;f=Cj;g=c.pA;if(g===null)h=6408;else d:{i=g.pX;switch(i){case 1:h=6406;break d;case 2:h=6410;break d;case 3:case 5:h=6407;break d;case 4:case 6:h=6408;break d;default:}c=new Bc;f=new L;f.ob=H(16);DI(f,f.n$,DJ(C(49)));N(f,f.n$,i,10);f=Bi(f);c.n_=1;c.oa=1;c.od=f;E(c);}j=g===null?c.qu:g.ql;k=g===null?c.qv:g.qj;if(g===null)l=6408;else h:{l=g.pX;switch(l){case 1:l=6406;break h;case 2:l=6410;break h;case 3:case 5:l=6407;break h;case 4:case 6:l=6408;break h;default:}c=new Bc;f
=new L;f.ob=H(16);Ez(f,f.n$,C(49));N(f,f.n$,l,10);f=Bi(f);c.n_=1;c.oa=1;c.od=f;E(c);}if(g===null)m=5121;else bq:{m=g.pX;switch(m){case 1:case 2:case 3:case 4:m=5121;break bq;case 5:m=33635;break bq;case 6:m=32819;break bq;default:}c=new Bc;f=new L;f.ob=H(16);DI(f,f.n$,DJ(C(49)));N(f,f.n$,m,10);f=Bi(f);c.n_=1;c.oa=1;c.od=f;E(c);}f.cn(b,0,h,j,k,0,l,m,c.yw);if(Bq===null&&d!=e){c=new Bc;c.n_=1;c.oa=1;c.od=C(686);E(c);}f=c.pA;n=(f===null?c.qu:f.ql)/2|0;i=(f===null?c.qv:f.qj)/2|0;h=1;while(n>0&&i>0){o=new Ig;f=c.pA;if
(f===null){IP();f=H$;}else f=Ix(f.pX);JW(o,n,i,f);JU();f=P0;o.y7=f;g=o.pA;if(g===null){Gu(o);g=o.p6;IE();p=Cr(HR.ol);g.globalCompositeOperation=p;}else{e=f!==f?1:0;Ud(g.qd,e);}f=c.pA;ZJ(o,c,0,0,f===null?c.qu:f.ql,f===null?c.qv:f.qj,0,0,n,i);if(h>1)Sp(c);Cj.cn(b,h,X8(o),Lv(o),LI(o),0,Y2(o),QN(o),Uy(o));n=Lv(o)/2|0;i=LI(o)/2|0;h=h+1|0;c=o;}}
let A3R=()=>{Wt=1;}
let TY=G();
let AWN=null;let BaF=()=>{BaF=Bj(TY);A$G();}
let A$G=()=>{let b,c;AEs();b=X((AT5.t()).data.length);c=b.data;AWN=b;c[Xv.oi]=1;c[AZk.oi]=2;}
function NO(){let a=this;D.call(a);a.Ja=null;a.IP=0.0;a.Iq=0.0;a.vt=null;a.yN=null;a.Dv=null;a.Ag=0;}
let ABd=(a,b,c,d)=>{let e;a.vt=C(687);EM();e=Gz;a.yN=e;a.Dv=e;if(c<=0.0){b=new V;e=new L;e.ob=H(16);F(e,e.n$,C(688));EQ(e,e.n$,c);e=Bi(e);b.n_=1;b.oa=1;b.od=e;E(b);}if(d>0.0){a.Ja=b;a.IP=c;a.Iq=d;return;}b=new V;e=new L;e.ob=H(16);F(e,e.n$,C(689));EQ(e,e.n$,d);e=Bi(e);b.n_=1;b.oa=1;b.od=e;E(b);}
let ADx=(a,b,c,d)=>{let e,f,g,h,i,$$je;e=a.Ag;if(!(e==2&&!d)&&e!=3){a.Ag=d?2:1;while(true){try{f=AAD(a,b,c);}catch($$e){$$je=BG($$e);if($$je instanceof B0){g=$$je;b=new Nu;b.n_=1;b.oa=1;b.p$=g;E(b);}else{throw $$e;}}e=f.o8;if(e!=1?0:1)break;if(e?0:1){if(d){d=b.of;h=b.oe;if(d>=h?0:1){g=a.yN;EM();if(g===Gz){h=h-d|0;b=new CZ;b.o8=2;b.pw=h;return b;}if((c.oe-c.of|0)<=a.vt.oc.length)return DK;h=b.of;CH(b,h+(b.oe-h|0)|0);if(a.yN===Fu){b=a.vt;MG(c,b,0,b.oc.length);}}}return f;}if(e!=2?0:1){g=a.yN;EM();if(g===Gz)return f;if
(g===Fu){if((c.oe-c.of|0)<a.vt.oc.length)return DK;g=a.vt;MG(c,g,0,g.oc.length);}i=b.of;e=f.o8;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new Hk;b.n_=1;b.oa=1;E(b);}CH(b,i+f.pw|0);}else if(e!=3?0:1){g=a.Dv;EM();if(g===Gz)return f;if(g===Fu){if((c.oe-c.of|0)<a.vt.oc.length)return DK;g=a.vt;MG(c,g,0,g.oc.length);}i=b.of;e=f.o8;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new Hk;b.n_=1;b.oa=1;E(b);}CH(b,i+f.pw|0);}}return f;}b=new Cb;b.n_=1;b.oa=1;E(b);}
let G0=G(B0);
let Hm=G();
let M5=null;let AYI=()=>{M5=null;}
let ABF=G();
let EW=(b,c,d,e)=>{Cj.j$(b,c,d,e);Cj.j_(16384);}
let DR=(b,c,d,e,f)=>{let g;Cj.j$(b,c,d,e);g=16384;if(f)g=16640;Cj.j_(g);}
function NR(){let a=this;D.call(a);a.Dh=null;a.Hf=null;a.Hr=null;a.Eh=null;a.Dt=null;a.oF=null;a.BH=null;a.pd=0.0;a.Hn=0.0;a.CX=0.0;a.Ew=0.0;a.FS=null;a.I5=null;a.H5=null;}
let Cu=a=>{let b,c,d;b=new Bf;BU();a.Dh=b;b=new Bf;b.on=0.0;b.op=0.0;b.oo=(-1.0);a.Hf=b;b=new Bf;b.on=0.0;b.op=1.0;b.oo=0.0;a.Hr=b;a.Eh=FN();a.Dt=FN();a.oF=FN();a.BH=FN();a.pd=1.0;a.Hn=100.0;a.CX=0.0;a.Ew=0.0;a.FS=Bfn();a.I5=new Bf;b=new Nd;Be7();c=new Bf;b.I2=c;d=new Bf;b.JG=d;c.on=0.0;c.op=0.0;c.oo=0.0;d.on=0.0;d.op=0.0;d.oo=0.0;a.H5=b;}
let ABq=G();
let A5A=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=b.oc.length;e=0;f=new L;f.ob=H(d);g=0;b:{a:{while(g<d){if(g<0)break b;if(g>=b.oc.length)break b;k:{h=b.oc.charCodeAt(g);if(h!=37){i=f.n$;Bp(f,i,i+1|0);f.ob.data[i]=h;break k;}g=g+1|0;if(g<0)break a;if(g>=b.oc.length)break a;j=b.oc.charCodeAt(g);if(j==37){j=f.n$;Bp(f,j,j+1|0);f.ob.data[j]=37;break k;}if(j==115){k=c.data;i=e+1|0;l=k[e].l();F(f,f.n$,l);e=i;break k;}if(j==100){k=c.data;i=e+1|0;m=k[e].mB();P7(f,f.n$,m,10);e=i;break k;}if(j==102){k=c.data;i=e+1|0;n=k[e].mD();Iz();B4(f,
H9(AFb(n),0,n>=0.0?5:6));e=i;break k;}if(j==48){g=g+1|0;if(Dz(b,g)==88){k=c.data;Iz();l=Mk;i=e+1|0;AIa(l,f,k[e].mB());e=i;break k;}Iz();i=LB(GQ,b,g,d);while(true){g=g+1|0;h=Dz(b,g);if(h<48)break;if(h>57)break;}if(h==88){k=c.data;l=Mk;j=e+1|0;B4(f,H9(S5(l,k[e].mB()),16-i|0,16));}else if(h!=100)j=e;else{k=c.data;l=GQ;j=e+1|0;l=S5(l,k[e].mB());B4(f,H9(l,FT(l)-i|0,FT(l)));}e=j;break k;}if(j==46){g=g+1|0;if(Dz(b,g)==102){k=c.data;Iz();l=GQ;i=e+1|0;Xf(l,f,k[e].mD());e=i;break k;}Iz();j=LB(GQ,b,g,d)+2|0;while(true)
{g=g+1|0;i=Dz(b,g);if(i<48)break;if(i>57)break;}if(i==102){k=c.data;i=e+1|0;o=k[e].mD();l=AGa(GQ,o);if(o<0.0)j=j+1|0;B4(f,H9(l,0,j));e=i;}break k;}if(j<49)break k;if(j>57)break k;Iz();i=LB(GQ,b,g,d);while(true){g=g+1|0;j=Dz(b,g);if(j<48)break;if(j>57)break;}if(j==88){k=c.data;l=Mk;j=e+1|0;l=QK(l,k[e].mB());B4(f,H9(l,FT(l)-i|0,FT(l)));}else if(j!=100)j=e;else{k=c.data;l=GQ;j=e+1|0;l=QK(l,k[e].mB());B4(f,H9(l,FT(l)-i|0,FT(l)));}e=j;}g=g+1|0;}return f;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let CF=(b,c)=>{let d,e,f,g;b=A5A(b,c);d=new P;c=b.ob;e=c.data;f=b.n$;S();g=e.length;if(f>=0&&f<=(g-0|0)){d.oc=Q(c.data,0,f);return d;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let Ps=G();
let IF=null;let AD1=b=>{return Gi(b-1.0);}
let Gi=b=>{let c,d,e;c=b+1.0;d=1.0;while(c<7.0){d=d*c;c=c+1.0;}e=Fj(c*C$(c)-c+1.0/(12.0*c+2.0/(5.0*c+53.0/(42.0*c))));if(b<7.0)e=e/d;return e*Cf(6.283185307179586/c);}
let ADW=()=>{IF=Sn([B(2135587861, 2654435769),B(44446351, 3242174889),B(3349052189, 2447445413),B(3516067075, 3518319154),B(4220496899, 2882110344),B(792563159, 2360945575),B(1974346085, 3679390609),B(61104479, 3152041523),B(2717783413, 2700274805),B(2107561609, 2313257605),B(2638399027, 3785032106),B(3977025073, 3335640776),B(4149317051, 2939605022),B(922161383, 2590590015),B(865850413, 2283013049),B(726904555, 3859688306),B(3988170991, 3468523225),B(1372588901, 3117001274),B(1871222847, 2801104767),B(3083878267, 2517223198),
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
let Iy=G();
let NK=null;let LL=null;let NA=null;let S3=null;let AAQ=b=>{return NK.data[(b*2607.594482421875+16384.5|0)&16383];}
let V4=b=>{return NA.data[(b*2607.594482421875+16384.5|0)&16383];}
let ACd=b=>{return LL.data[(b*2607.5945876176133+16384.5|0)&16383];}
let ABz=b=>{let c,d;b=b*0.6366197466850281;c=(GX(b)|0)&(-2);b=b-c;d=b*b;return (11.0*b-3.0*b*d)/(7.0+d)*(1-(c&2)|0);}
let AC9=b=>{let c,d;b=b*0.6366197466850281+1.0;c=(GX(b)|0)&(-2);b=b-c;d=b*b;return (11.0*b-3.0*b*d)/(7.0+d)*(1-(c&2)|0);}
let AIb=b=>{let c,d,e,f;b=b*2607.594482421875;c=(b+16384.0|0)-16384|0;d=c&16383;e=NK.data;f=e[d];return f+(e[d+1|0]-f)*(b-c);}
let ADU=b=>{let c,d,e,f;b=Jo(b)*2607.594482421875;c=b|0;d=c&16383;e=NA.data;f=e[d];return f+(e[d+1|0]-f)*(b-c);}
let RD=b=>{let c,d,e,f,g,h;b=b*16384.0+16384.0;c=b|0;d=c&16383;b=b-c;e=LL.data;f=e[d];c=d+1|0;g=e[c];e=S3.data;h=e[d];return (f+(g-f)*b)/(h+(e[c]-h)*b);}
let Nh=b=>{let c,d,e,f,g,h,i,j;c=Lu(b);d=(c-1.0)/(c+1.0);e=d*d;f=d*e;g=f*e;h=g*e;i=h*e;j=i*e;return PN(b)*(0.125+0.15915132390848943*d-0.052938669438878753*f+0.030803398362108523*g-0.01853086679887605*h+0.008380036148199356*i-0.0018654869189687236*j);}
let X_=(b,c)=>{let d,e,f;d=b/c;if(d===d){e=d-d;if(e!==e)c=0.0;}else d=b!==c?(-1.0):1.0;f=B9(c,0.0);if(f>0){if(b>=0.0)return Nh(d);return Nh(d)+1.0;}if(f<0)return Nh(d)+0.5;f=B9(b,0.0);if(f>0)return c+0.25;if(f>=0)return c+b;return c+0.75;}
let AEK=()=>{let b,c,d,e,f;NK=CT(16385);LL=LH(16385);NA=CT(16385);S3=LH(16385);b=0;while(b<=16384){c=b/16384.0*6.283185307179586;d=NK.data;e=LL.data;f=NJ(c);e[b]=f;d[b]=f;d=NA.data;e=S3.data;c=V$(c);e[b]=c;d[b]=c;b=b+1|0;}e=NK.data;e[0]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e[16384]=0.0;e=LL.data;e[0]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e[16384]=0.0;e=NA.data;e[0]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;e[16384]=1.0;e=S3.data;e[0]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;e[16384]=1.0;}
function NX(){let a=this;D.call(a);a.oT=null;a.pl=0.0;a.pm=0.0;a.ph=0;a.pi=0;a.pf=0;a.pk=0;a.pn=null;}
let BM=(a,b)=>{let c,d,e,f;AE5(a.ph,a.pi,a.pf,a.pk);c=a.oT;d=a.pl;c.CX=d;e=a.pm;c.Ew=e;if(b){f=c.Dh;d=d/2.0;e=e/2.0;f.on=d;f.op=e;f.oo=0.0;}Ft(c,1);}
let DW=a=>{return a.oT;}
function Ci(){NX.call(this);this.oH=0.0;}
let OZ=G(0);
function Ch(){let a=this;D.call(a);a.FP=0;a.yS=0;a.HA=0;a.H9=0;a.zR=0;a.sk=null;a.zj=null;a.po=0;a.Gd=0;a.Fu=0;a.JC=0;a.Hv=0;a.IS=0;a.Dc=null;a.An=null;a.Es=null;}
let BiP=(a,b,c,d,e)=>{let f=new Ch();Ct(f,a,b,c,d,e);return f;}
let Ct=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m;a.Dc=FN();a.H9=b;a.Gd=e;a.zj=f;g=Wn(a,c,d,e);h=new JC;h.Bj=1;h.zx=0;f=new Bf;BU();h.FX=f;f=A11(g);h.q8=GJ===null?A4e(0,b,f):A3x(0,b,f);f=new Id;f.sS=1;f.w7=0;f.CY=1;if(!D1){g=MT(0);d=g.data.length;i=new KT;j=0+d|0;UJ(i,d);i.of=0;i.oe=j;i.yg=0;i.A5=0;i.y1=g;}else{k=new C8;g=BW(0);Dn(k);k.or=(-1);k.oy=0;k.oe=0;CP();k.o4=CR;k.pb=0;k.oZ=g;k.of=0;k.oe=0;k.pR=1;k.pt=0;k.o4=DT();i=K0(k);}f.sC=i;i.oe=i.of;i.of=0;i.or=(-1);i=Bq;k=i.og.createBuffer();d=i.qN;i.qN=d+1|0;C6(i.rk,
d,C_(k));f.Bf=d;f.x2=35048;h.qh=f;h.xn=0;f=Ef;i=ND;if(f===null){i=i.qq.data[0];while(i!==null&&i.qV!==null){i=i.q6;}}else{k=f;if(!k.$id$){l=Fd();k.$id$=l;}m=f.$id$;i=Xg(i,f,m&(i.qq.data.length-1|0),m);}i=i===null?null:i.rp;if(i===null)i=BcD();Dk(i,h);JV(ND,f,i);a.sk=h;a.An=CT(C7(b,(h.q8.lb()).qS/4|0));a.Fu=(ACS(a.sk)).qS/4|0;a.JC=HJ(a.sk,8)===null?0:(HJ(a.sk,8)).sE/4|0;a.Hv=HJ(a.sk,4)===null?0:(HJ(a.sk,4)).sE/4|0;a.IS=HJ(a.sk,16)===null?0:(HJ(a.sk,16)).sE/4|0;a.Es=Bt(P,e);m=0;while(m<e){a.Es.data[m]=Cy(EX(B4(Dw(),
C(690)),m));m=m+1|0;}}
let Wn=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new CQ;e.pz=1;e.os=Bt(D,16);f=new EH;f.r$=1;f.qn=3;f.qP=5126;f.qR=0;f.qG=C(488);f.sj=0;f.t3=EY(1);Dk(e,f);if(b){g=new EH;g.r$=8;g.qn=3;g.qP=5126;g.qR=0;g.qG=C(691);g.sj=0;g.t3=EY(8);Dk(e,g);}if(c){g=new EH;g.r$=4;g.qn=4;g.qP=5121;g.qR=1;g.qG=C(489);g.sj=0;g.t3=EY(4);Dk(e,g);}h=0;while(true){if(h>=d){b=e.oj;i=Bt(EH,b);j=i.data;h=0;while(true){c=B9(h,b);if(c>=0)break;if(c>=0){f=new O;g=new L;g.ob=H(16);F(g,g.n$,C(37));N(g,g.n$,h,10);F(g,g.n$,C(38));b=e.oj;N(g,g.n$,b,
10);e=new P;i=g.ob;j=i.data;c=g.n$;S();d=j.length;if(c>=0&&c<=(d-0|0)){e.oc=Q(i.data,0,c);f.n_=1;f.oa=1;f.od=e;E(f);}e=new O;Bm(e);E(e);}j[h]=e.os.data[h];h=h+1|0;}return i;}g=new EH;f=new L;f.ob=H(16);F(f,f.n$,C(692));N(f,f.n$,h,10);k=new P;i=f.ob;j=i.data;l=f.n$;S();m=j.length;if(l<0)break;if(l>(m-0|0))break;k.oc=Q(i.data,0,l);g.r$=16;g.qn=2;g.qP=5126;g.qR=0;g.qG=k;g.sj=0;g.t3=EY(16);Dk(e,g);h=h+1|0;}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}
let Cq=(a,b,c)=>{Hg(a.Dc,b.qb);a.FP=c;}
let Bg=(a,b)=>{a.An.data[a.yS+a.Hv|0]=b;}
let Bh=(a,b,c,d)=>{let e,f;e=a.yS;f=a.An.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.HA=0;a.yS=e+a.Fu|0;a.zR=a.zR+1|0;}
let U0=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!a.zR)return;b=a.zj;c=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}c.i8(b.o0);c=a.zj;d=a.Dc;Ru();e=KA(c,C(693),Nt);f=Bq;if(c.o5){Dg(c,c.p4,c.p3);c.o5=0;}g=d.qb;b=f.q2;h=f.sc;if(!h)b=!b.oM?null:b.oK;else{i=b.oI;j=Z(T(W(I(h),B(2135587861, 2654435769)),b.oO));e:{while(true){k=i.data[j];if(!k){j= -(j+1|0)|0;break e;}if(k==h)break;j=(j+1|0)&b.oL;}}b=j<0?null:b.oJ.data[j];}b=b;if(!e)b=!b.oM?null:b.oK;else{i=b.oI;h=Z(T(W(I(e),B(2135587861, 2654435769)),b.oO));v:{while(true){j=i.data[h];if
(!j){h= -(h+1|0)|0;break v;}if(j==e)break;h=(h+1|0)&b.oL;}}b=h<0?null:b.oJ.data[h];}BR();b=b===null?null:b.oR;c=f.og;d="uniformMatrix4fv";l=!!0;if(g===null)f=null;else{g=g.data;m=g.length;f=new Array(m);h=0;while(h<m){n=g[h];h;f[h]=n;h=h+1|0;}}c[d](b,l,f);m=0;while(m<a.Gd){b=a.zj;c=a.Es.data[m];d=Bq;if(b.o5){Dg(b,b.p4,b.p3);b.o5=0;}d.jk(KA(b,c,Nt),m);m=m+1|0;}b=a.sk;g=a.An;h=a.yS;b.q8.ja(g,0,h);b=a.sk;TF(b,a.zj,a.FP,0,b.qh.k8()<=0?b.q8.mS():b.qh.k4(),b.Bj);a.HA=0;a.yS=0;a.zR=0;}
let Cx=a=>{U0(a);}
let CD=(b,c,d)=>{let e,f,g,h,i,j,k;e=new L;e.ob=H(16);F(e,e.n$,C(694));f=!b?C(43):C(695);F(e,e.n$,f);f=!c?C(43):C(696);F(e,e.n$,f);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);i=0;while(true){if(i>=d){e=new L;e.ob=H(16);F(e,e.n$,f);F(e,e.n$,C(697));f=!c?C(43):C(698);F(e,e.n$,f);f=new P;g=e.ob;h=g.data;i=e.n$;j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);i=0;while(i<d){e=new L;e.ob=H(16);F(e,e.n$,f);F(e,e.n$,C(699));N(e,e.n$,i,10);F(e,e.n$,C(700));f=Bi(e);i=i+1|0;}e
=new L;e.ob=H(16);F(e,e.n$,f);F(e,e.n$,C(701));f=new P;g=e.ob;h=g.data;i=e.n$;j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);if(c){e=new L;F$(e);f=Cy(B4(B4(e,f),C(702)));}i=0;while(i<d){f=Cy(B4(EX(B4(B4(EX(B4(B4(Dw(),f),C(703)),i),C(704)),C(692)),i),C(700)));i=i+1|0;}return Cy(B4(B4(Dw(),f),C(705)));}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}e=new L;e.ob=H(16);F(e,e.n$,f);F(e,e.n$,C(706));N(e,e.n$,i,10);F(e,e.n$,C(700));f=new P;g=e.ob;h=g.data;j=e.n$;k=h.length;if(j<0)break;if(j
>(k-0|0))break;f.oc=Q(g.data,0,j);i=i+1|0;}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}
let CE=(b,c,d)=>{let e,f,g,h,i,j,k;e=C(707);if(c){f=new L;f.ob=H(16);F(f,f.n$,e);F(f,f.n$,C(698));e=new P;g=f.ob;h=g.data;i=f.n$;S();j=h.length;if(i>=0&&i<=(j-0|0))e.oc=Q(g.data,0,i);else{e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}}i=0;c:{while(true){if(i>=d){f=new L;f.ob=H(16);F(f,f.n$,e);F(f,f.n$,C(708));e=!c?C(709):C(710);F(f,f.n$,e);e=new P;g=f.ob;h=g.data;c=f.n$;S();i=h.length;if(c>=0&&c<=(i-0|0)){e.oc=Q(g.data,0,c);if(d>0){f=new L;f.ob=H(16);F(f,f.n$,e);F(f,f.n$,C(711));e=OR(f.ob,0,f.n$);}i=0;c=d-1|0;while(i<d)
{e=i!=c?Cy(B4(EX(B4(EX(B4(B4(Dw(),e),C(712)),i),C(713)),i),C(714))):Cy(B4(EX(B4(EX(B4(B4(Dw(),e),C(712)),i),C(713)),i),C(589)));i=i+1|0;}f=new L;F$(f);LT(f,e);return Cy(B4(f,C(715)));}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}f=new L;f.ob=H(16);F(f,f.n$,e);F(f,f.n$,C(699));N(f,f.n$,i,10);F(f,f.n$,C(700));e=new P;g=f.ob;h=g.data;j=f.n$;S();k=h.length;if(j<0)break c;if(j>(k-0|0))break c;e.oc=Q(g.data,0,j);f=new L;f.ob=H(16);F(f,f.n$,e);F(f,f.n$,C(716));N(f,f.n$,i,10);F(f,f.n$,C(700));e=new P;g=f.ob;h=g.data;j=f.n$;k=
h.length;if(j<0)break;if(j>(k-0|0))break;e.oc=Q(g.data,0,j);i=i+1|0;}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}e=new O;e.n_=1;e.oa=1;Bu(e);E(e);}
function B_(){D.call(this);this.ot=null;}
function RZ(){let a=this;B_.call(a);a.y9=0.0;a.zo=0.0;}
let Bc7=(a,b,c)=>{let d=new RZ();A9d(d,a,b,c);return d;}
let A9d=(a,b,c,d)=>{let e,f;a.ot=b;if(c>0.0&&d>0.0){a.y9=c;a.zo=d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(532);E(f);}
let Y0=a=>{let b;b=a.y9;return b/(b+a.zo);}
let AAB=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.y9=b;a.zo=c;return 1;}return 0;}
let AHZ=a=>{let b,c,d,e;b=a.ot;c=a.y9;d=a.zo;e=ABH(b,c,1.0);while(true){c=e+ABH(b,d,1.0);if(Lu(c)>1.3552527156068805E-20?0:1)continue;else break;}return e/c;}
function O3(){let a=this;B_.call(a);a.xo=0.0;a.xN=0.0;}
let BeL=(a,b,c)=>{let d=new O3();A4R(d,a,b,c);return d;}
let A4R=(a,b,c,d)=>{let e,f;a.ot=b;if(c>0.0&&d>0.0){a.xo=1.0/c;a.xN=1.0/d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(532);E(f);}
let ADN=a=>{let b;b=1.0/a.xN;return Gi(a.xo)*Gi(b-1.0)*b/Gi(a.xo+b);}
let AAo=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.xo=1.0/b;a.xN=1.0/c;return 1;}return 0;}
let XH=a=>{let b,c,d;b=a.ot;c=a.xo;d=a.xN;return D7(1.0-D7(b.jJ(),d),c);}
function Qc(){let a=this;B_.call(a);a.Ap=0.0;a.zL=0.0;}
let BcH=(a,b,c)=>{let d=new Qc();APT(d,a,b,c);return d;}
let APT=(a,b,c,d)=>{let e,f;a.ot=b;if(c===c&&d===d){a.Ap=c;a.zL=d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(532);E(f);}
let WQ=(a,b,c,d)=>{if(b===b&&c===c){a.Ap=b;a.zL=c;return 1;}return 0;}
let AAK=a=>{let b,c,d;b=a.ot;c=a.Ap;d=a.zL;return X_(b.ep()-c,b.ep()+d);}
function HY(){let a=this;B_.call(a);a.sT=0.0;a.s9=0.0;}
let OE=(a,b,c)=>{let d=new HY();AXo(d,a,b,c);return d;}
let FZ=a=>{return a.sT;}
let Fw=a=>{return a.s9;}
let AXo=(a,b,c,d)=>{let e,f;a.ot=b;if(!(isNaN(c)?1:0)&&d>0.0){a.sT=c;a.s9=d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(505);E(f);}
let Jq=a=>{return a.sT;}
let JQ=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.sT=b;a.s9=c;return 1;}return 0;}
let IR=a=>{let b;b=a.ot;return a.sT+a.s9*b.ep();}
function RM(){let a=this;B_.call(a);a.yy=0.0;a.zZ=0.0;}
let BfN=(a,b,c)=>{let d=new RM();A0s(d,a,b,c);return d;}
let A0s=(a,b,c,d)=>{let e,f;a.ot=b;if(!(isNaN(c)?1:0)&&d>0.0){a.yy=c;a.zZ=d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(499);E(f);}
let Zy=a=>{return a.yy;}
let ADt=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.yy=b;a.zZ=c;return 1;}return 0;}
let ACm=a=>{let b,c,d,e;b=a.ot;c=a.yy;d=a.zZ;e=b.em();return c+d*RD(Fn(B8(BP(B3(I(1021),I(Ec(e))),52),Be(e,B(4294967295, 1048575))))-0.25);}
function PM(){let a=this;B_.call(a);a.zy=0.0;a.AA=0.0;}
let Bdf=(a,b,c)=>{let d=new PM();AZc(d,a,b,c);return d;}
let AZc=(a,b,c,d)=>{let e,f;a.ot=b;if(!(isNaN(c)?1:0)&&d>0.0){a.zy=c;a.AA=d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(505);E(f);}
let AGd=a=>{return Fj(a.zy);}
let AHf=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.zy=b;a.AA=c;return 1;}return 0;}
let AGU=a=>{let b,c,d,e;b=a.ot;c=a.zy;d=a.AA;e=b.em();return Fj(c+d*RD(Fn(B8(BP(B3(I(1021),I(Ec(e))),52),Be(e,B(4294967295, 1048575))))-0.25));}
function OQ(){let a=this;B_.call(a);a.AM=0;a.zQ=0.0;}
let BdJ=(a,b,c)=>{let d=new OQ();A7y(d,a,b,c);return d;}
let A7y=(a,b,c,d)=>{let e,f;a.ot=b;e=c;if(e>=1.0&&d>0.0){a.AM=e|0;a.zQ=d;c=1;}else c=0;if(c)return;f=new V;f.n_=1;f.oa=1;f.od=C(717);E(f);}
let VS=(a,b,c,d)=>{if(b>=1.0&&c>0.0){a.AM=b|0;a.zQ=c;return 1;}return 0;}
let ACt=a=>{return AR9(a.ot,a.AM,a.zQ);}
let AR9=(b,c,d)=>{let e,f,g,h,i,j;if(Infinity===d)return c;e=c-0.3333333333333333;f=1.0/Cf(9.0*e);while(true){g=b.ep();h=1.0+f*g;while(h<=0.0){g=b.ep();h=1.0+f*g;}i=h*h*h;j=b.jJ();g=g*g;if(j<1.0-0.0331*g*g)return e*i/d;if(C$(j)<0.5*g+e*(1.0-i+C$(i)))break;}return e*i/d;}
function R5(){B_.call(this);this.yh=0.0;}
let BbI=(a,b)=>{let c=new R5();AZ0(c,a,b);return c;}
let AZ0=(a,b,c)=>{let d,e;a.ot=b;if(c<=0.0)d=0;else{a.yh=1.0/c;d=1;}if(d)return;e=new V;e.n_=1;e.oa=1;e.od=C(718);E(e);}
let AG9=a=>{return a.yh;}
let Vr=(a,b,c,d)=>{if(b<=0.0)return 0;a.yh=1.0/b;return 1;}
let AIg=a=>{let b,c;b=a.ot;c=a.yh;return  -C$(b.jJ())*c;}
function Vh(){let a=this;B_.call(a);a.zA=0.0;a.zd=0.0;}
let BaN=(a,b,c)=>{let d=new Vh();A3j(d,a,b,c);return d;}
let A3j=(a,b,c,d)=>{let e,f;a.ot=b;if(c>0.0&&d>0.0){a.zA=c;a.zd=1.0/d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(532);E(f);}
let AFq=a=>{return a.zA*D7(2.0,a.zd);}
let ADg=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.zA=b;a.zd=1.0/c;return 1;}return 0;}
let ZP=a=>{let b,c,d;b=a.ot;c=a.zA;d=a.zd;return c/D7(b.jJ(),d);}
function R6(){let a=this;B_.call(a);a.zC=0.0;a.xF=0.0;}
let BeI=(a,b,c)=>{let d=new R6();AX3(d,a,b,c);return d;}
let AX3=(a,b,c,d)=>{let e,f;a.ot=b;if(c>0.0&&d>0.0){a.zC=1.0/c;a.xF=1.0/d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(532);E(f);}
let ABO=a=>{let b;b=1.0/a.zC;return b*a.xF/(b+1.0);}
let Vp=(a,b,c,d)=>{if(b>0.0&&c>0.0){a.zC=1.0/b;a.xF=1.0/c;return 1;}return 0;}
let Z8=a=>{let b,c,d;b=a.ot;c=a.zC;d=a.xF;return D7(b.jJ(),c)*d;}
function Pt(){B_.call(this);this.wl=0;}
let Baz=(a,b)=>{let c=new Pt();AVw(c,a,b);return c;}
let AVw=(a,b,c)=>{let d,e;a.ot=b;d=c;if(d<1.0)c=0;else{a.wl=d|0;c=1;}if(c)return;e=new V;e.n_=1;e.oa=1;e.od=C(719);E(e);}
let AAP=a=>{return 1.4142135623730951*Gi((a.wl+1.0)*0.5-1.0)/Gi(a.wl*0.5-1.0);}
let AD8=(a,b,c,d)=>{if(b<1.0)return 0;a.wl=b|0;return 1;}
let ABA=a=>{let b,c,d,e,f;b=a.ot;c=a.wl;d=0.0;e=0;while(e<c){f=b.ep();d=d+f*f;e=e+1|0;}return Cf(d);}
function Ss(){B_.call(this);this.y_=0;}
let Ba7=(a,b)=>{let c=new Ss();AKK(c,a,b);return c;}
let AKK=(a,b,c)=>{let d,e;a.ot=b;d=c;if(d<1.0)c=0;else{a.y_=d|0;c=1;}if(c)return;e=new V;e.n_=1;e.oa=1;e.od=C(719);E(e);}
let AB2=a=>{return a.y_;}
let AAm=(a,b,c,d)=>{if(b<1.0)return 0;a.y_=b|0;return 1;}
let ADG=a=>{let b,c,d,e,f;b=a.ot;c=a.y_;d=0.0;e=0;while(e<c){f=b.ep();d=d+f*f;e=e+1|0;}return d;}
function UY(){B_.call(this);this.Bs=0.0;}
let Bdm=(a,b)=>{let c=new UY();A$z(c,a,b);return c;}
let A$z=(a,b,c)=>{let d,e;a.ot=b;if(c<=0.0)d=0;else{a.Bs=c;d=1;}if(d)return;e=new V;e.n_=1;e.oa=1;e.od=C(720);E(e);}
let Zu=a=>{return 0.0;}
let AEi=(a,b,c,d)=>{if(b<=0.0)return 0;a.Bs=b;return 1;}
let Wa=a=>{let b,c,d,e,f,g;b=a.ot;c=a.Bs;d=b.ep();e=0.0;f=0;while(f<c){g=b.ep();e=e+g*g;f=f+1|0;}return d/Cf(e/c);}
function K4(){let a=this;B_.call(a);a.uD=0.0;a.vx=0.0;}
let AM8=(a,b,c)=>{let d=new K4();AQ7(d,a,b,c);return d;}
let KC=a=>{return a.uD;}
let Ue=a=>{return a.vx;}
let AQ7=(a,b,c,d)=>{let e,f;a.ot=b;if(c>=d)e=0;else{a.uD=c;a.vx=d;e=1;}if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(532);E(f);}
let N$=a=>{return 0.5*(a.uD+a.vx);}
let OA=(a,b,c,d)=>{if(b>=c)return 0;a.uD=b;a.vx=c;return 1;}
let SX=a=>{let b,c,d,e;b=a.ot;c=a.uD;d=a.vx;e=ANR(b.jJ());return c+(d-c)*e*e;}
let ANR=b=>{let c,d;c=Be(BC(GX(b)),I(-2));b=b-BB(c);d=b*b;return (11.0*b-3.0*b*d)/(7.0+d)*BB(B3(I(1),Be(c,I(2))));}
function P3(){let a=this;B_.call(a);a.yf=0.0;a.xZ=0;}
let BbV=(a,b,c)=>{let d=new P3();AJo(d,a,b,c);return d;}
let AJo=(a,b,c,d)=>{let e,f;b:{a.ot=b;e=d;if(c>=0.0&&c<=1.0){d=e|0;if(d>=0.0){a.yf=c;a.xZ=d;d=1;break b;}}d=0;}if(d)return;f=new V;f.n_=1;f.oa=1;f.od=C(532);E(f);}
let W8=a=>{return a.xZ*a.yf;}
let VQ=(a,b,c,d)=>{let e;if(b>=0.0&&b<=1.0){e=c|0;if(e>=0.0){a.yf=b;a.xZ=e;return 1;}}return 0;}
let WN=a=>{let b,c,d,e,f;b=a.ot;c=a.yf;d=a.xZ;e=0.0;f=0;while(f<d){if(b.jJ()<c)e=e+1.0;f=f+1|0;}return e;}
function Sb(){let a=this;B_.call(a);a.F6=0.0;a.ES=0.0;a.Dr=0.0;a.FT=0.0;}
let Bcc=(a,b,c)=>{let d=new Sb();AQb(d,a,b,c);return d;}
let AHA=a=>{return a.Dr;}
let AQb=(a,b,c,d)=>{let e;a.ot=b;if(Ll(a,BB(c),d,0.0))return;e=new V;e.n_=1;e.oa=1;e.od=C(536);E(e);}
let Ll=(a,b,c,d)=>{let e,f,g;if(b>=1.0&&c>=0.0&&c<1.0){e=BB(BC(b));a.F6=e;a.ES=c;if(!(d===d&&d<0.0)){f=BC(e);b=1.0;g=I(2);while(Ga(g,f)){b=b+D7(1.0/BB(g),c);g=U(g,I(1));}a.Dr=b;}a.FT=1.0+D7(0.5,a.ES);return 1;}return 0;}
let ACO=a=>{return AS3(a.ot,a.F6,a.ES,a.Dr,a.FT);}
let AS3=(b,c,d,e,f)=>{let g,h,i,j;g=1.0-d;h=1.0/g;g=(1.0-D7(2.0/c,g))/(1.0-f/e);i=b.jJ();j=i*e;if(j<1.0)return 1.0;if(j<f)return 2.0;return 1.0+c*D7(g*i-g+1.0,h);}
function MN(){let a=this;B_.call(a);a.wQ=0.0;a.wc=0.0;a.wT=0.0;}
let AOv=(a,b,c,d)=>{let e=new MN();AYb(e,a,b,c,d);return e;}
let AYb=(a,b,c,d,e)=>{let f,g;a.ot=b;if(c<d&&c<=e&&e<=d){a.wQ=c;a.wc=d;a.wT=e;f=1;}else f=0;if(f)return;g=new V;g.n_=1;g.oa=1;g.od=C(721);E(g);}
let SV=a=>{let b,c,d,e;b=a.wT;c=a.wc;d=a.wQ;e=c-d;if(b<e*0.5)return c-Cf(e*(c-b))/Cf(2.0);return d+Cf(e*(b-d))/Cf(2.0);}
let QD=(a,b,c,d)=>{if(b<c&&b<=d&&d<=c){a.wQ=b;a.wc=c;a.wT=d;return 1;}return 0;}
let ABo=a=>{let b,c,d,e,f,g,h,i,j;b=a.ot;c=a.wQ;d=a.wc;e=a.wT;f=e-c;g=d-c;h=Cf(f*g);i=Cf(d-e);j=b.ev();return j<=f/g?c+Cf(j)*h:d-Cf(j*g-f)*i;}
let AM3=(b,c,d,e)=>{let f,g,h,i,j;f=e-c;g=d-c;h=Cf(f*g);i=Cf(d-e);j=b.ev();if(j<=f/g)return c+Cf(j)*h;return d-Cf(j*g-f)*i;}
function RE(){let a=this;B_.call(a);a.Et=0.0;a.G$=0.0;a.Hl=0.0;}
let BcA=(a,b,c,d)=>{let e=new RE();AYf(e,a,b,c,d);return e;}
let AYf=(a,b,c,d,e)=>{let f;a.ot=b;if(NL(a,c,d,e))return;f=new V;f.n_=1;f.oa=1;f.od=C(541);E(f);}
let AGO=a=>{return a.Et;}
let NL=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0&&d>=0.0&&d<=1.0){a.Et=b;a.G$=c;a.Hl=d;return 1;}return 0;}
let ABv=a=>{let b,c,d,e,f;b=a.ot;c=a.Et;d=a.G$;e=a.Hl;f=b.mZ( -d,d)+c;return f+(c+d*b.ep()-f)*e;}
let Xc=G();
function Pq(){let a=this;HO.call(a);a.Jp=0.0;a.Jo=0.0;a.JA=0;a.I$=0;}
let W4=G();
function QE(){let a=this;D.call(a);a.xf=null;a.tP=null;}
let UZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.xf.readyState==4){if(a.xf.status==200){b=a.tP;if(b.sg.qW){if(BX===null){c=new Dp;c.p5=DY;d=new L;d.ob=H(16);c.o6=d;c.p2=H(32);c.p_=0;Do();c.p7=Du;BX=c;}e=BX;b=b.r6;d=new L;d.ob=H(16);F(d,d.n$,C(722));f=d.n$;if(b===null)b=C(2);F(d,f,b);b=new P;g=d.ob;h=g.data;i
=d.n$;S();KZ(0,i,h.length);b.oc=Q(g.data,0,i);ML(e,b);}b=a.tP;b.sB.eV(b.r6,Bv(a.xf.responseText));}else if(a.xf.status!=404&&a.xf.status!=403){try{j=I(100);$p=1;continue _;}catch($$e){$$je=BG($$e);if($$je instanceof Ea){}else{throw $$e;}}b=a.tP;d=b.sg;f=b.vb;c=b.r6;e=b.sB;if(d.qW){if(BX===null){k=new Dp;k.p5=DY;b=new L;b.ob=H(16);k.o6=b;k.p2=H(32);k.p_=0;Do();k.p7=Du;BX=k;}k=BX;b=new L;b.ob=H(16);F(b,b.n$,C(132));F(b,b.n$,c===null?C(2):c);l=new P;g=b.ob;h=g.data;m=b.n$;S();n=h.length;if(m>=0&&m<=(n-0|0)){l.oc
=Q(g.data,0,m);b=k.o6;F(b,b.n$,l);n=b.n$;Bp(b,n,n+1|0);b.ob.data[n]=10;Dy(k);}else{b=new O;Bm(b);E(b);}}d.pp=d.pp+1|0;b=new HT;b.sg=d;b.vb=f;b.r6=c;b.sB=e;d=null;c=null;b.rf=new D;b.re=1;b.sq=c;b.sU=d;i=DL;DL=i+1|0;b.sQ=I(i);d=new F3;d.ss=b;GK(d);}else{b=a.tP;b.sB.m0(b.r6);}b=a.tP.sg;b.pp=b.pp-1|0;}return;case 1:b:{try{Ki(j);if(HA()){break _;}break b;}catch($$e){$$je=BG($$e);if($$je instanceof Ea){}else{throw $$e;}}}b=a.tP;d=b.sg;f=b.vb;c=b.r6;e=b.sB;if(d.qW){if(BX===null){k=new Dp;k.p5=DY;b=new L;b.ob=H(16);k.o6
=b;k.p2=H(32);k.p_=0;Do();k.p7=Du;BX=k;}k=BX;b=new L;b.ob=H(16);F(b,b.n$,C(132));F(b,b.n$,c===null?C(2):c);l=new P;g=b.ob;h=g.data;m=b.n$;S();n=h.length;if(m>=0&&m<=(n-0|0)){l.oc=Q(g.data,0,m);b=k.o6;F(b,b.n$,l);n=b.n$;Bp(b,n,n+1|0);b.ob.data[n]=10;Dy(k);}else{b=new O;Bm(b);E(b);}}d.pp=d.pp+1|0;b=new HT;b.sg=d;b.vb=f;b.r6=c;b.sB=e;d=null;c=null;b.rf=new D;b.re=1;b.sq=c;b.sU=d;i=DL;DL=i+1|0;b.sQ=I(i);d=new F3;d.ss=b;GK(d);b=a.tP.sg;b.pp=b.pp-1|0;return;default:DU();}}Cn().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let AD9=(a,b)=>{let $p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:UZ(a,b);if(HA()){break _;}return;default:DU();}}Cn().s(a,b,$p);}
let ZH=G(0);
function Lx(){let a=this;NO.call(a);a.GJ=null;a.Hp=null;}
let AAD=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.GJ;e=0;f=0;g=a.Hp;b:{while(true){if((e+32|0)>f){h=b.of;i=b.oe;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;SC(b,d,j,f-j|0);e=0;}}j=c.of;l=c.oe;if(!(j>=l?0:1)){j=b.of>=b.oe?0:1;m=!j&&e>=f?DX:DK;break b;}k=g.data;l=l-j|0;h=k.length;if(l<h)h=l;n=new Ut;n.Au=b;n.HD=c;m=AHT(a,d,e,f,g,0,h,n);e=n.Gr;if(m===null&&0==n.CK)m=DX;AId(c,g,0,n.CK);if(m!==null)break;}}CH(b,b.of-(f-e|0)|0);return m;}
let Qg=G(Lx);
let AHT=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,r,s;i=null;b:{o:{bf:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;n=h.Au;if((n.oe-n.of|0)<2?0:1)break b;i=DX;break b;}o=k+1|0;k=j[k];if(!((k&192)!=128?0:1)){c=o+(-2)|0;i=new CZ;i.o8=2;i.pw=1;break b;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=o;}else if((l&240)!=224){if((l&248)!=240){c=k+(-1)|0;i=A_A(2,1);break b;}if((k+3|0)>d){c=k+(-1)|0;if(AEj(h,4))break b;i
=DX;break b;}if((f+2|0)>g){c=k+(-1)|0;if(ACo(h,2))break b;i=DK;break b;}o=k+1|0;m=j[k];c=o+1|0;o=j[o];k=c+1|0;p=j[c];if(!NH(a,m))break bf;if(!NH(a,o))break bf;if(!NH(a,p))break bf;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|p&63;c=f+1|0;j[f]=AE7(q);m=c+1|0;j[c]=AAF(q);}else{if((k+2|0)>d){c=k+(-1)|0;n=h.Au;if((n.oe-n.of|0)<3?0:1)break b;i=DX;break b;}c=k+1|0;r=j[k];k=c+1|0;o=j[c];if(!((r&192)!=128?0:1))break o;if(!((o&192)!=128?0:1))break o;s=((l&15)<<12|(r&63)<<6|o&63)&65535;m=s&64512;c=m!=55296?0:1;if(!c&&!(m
!=56320?0:1)?0:1){c=k+(-3)|0;i=new CZ;i.o8=2;i.pw=3;break b;}j=e.data;m=f+1|0;j[f]=s;}c=k;f=m;}break b;}c=k+(-3)|0;i=AFY(1);break b;}c=k+(-3)|0;i=new CZ;i.o8=2;i.pw=1;}h.Gr=c;h.CK=f;return i;}
let NH=(a,b)=>{return (b&192)!=128?0:1;}
function Oq(){let a=this;Hm.call(a);a.G2=null;a.CW=null;}
function Cg(){let a=this;NR.call(a);a.pj=0.0;a.pg=null;}
let CY=a=>{Ft(a,1);}
let Ft=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.Eh;d=a.pj;e=a.CX;f=d* -e/2.0;e=d*e/2.0;g=a.Ew;TO(c,f,e,d* -(g/2.0),d*g/2.0,a.pd,a.Hn);c=a.Dt;h=a.Dh;i=a.pg;d=h.on;j=h.op;f=h.oo;i.on=d;i.op=j;i.oo=f;k=a.Hf;l=k.on;e=k.op;g=k.oo;d=d+l;j=j+e;f=f+g;i.on=d;i.op=j;i.oo=f;i=a.Hr;k=A9j;k.on=d;k.op=j;k.oo=f;l=h.on;e=h.op;g=h.oo;l=d-l;e=j-e;g=f-g;k.on=l;k.op=e;k.oo=g;W$(c,k,i);i=AZs;l= -h.on;e= -h.op;g= -h.oo;Lp(i);m=i.qb.data;m[12]=l;m[13]=e;m[14]=g;Qa(c,i);Hg(a.oF,a.Eh.qb);VG(a.oF.qb,a.Dt.qb);if(b){Hg(a.BH,a.oF.qb);Xd(a.BH.qb);AFQ(a.FS,
a.BH);}}
function JR(){Hm.call(this);this.wv=null;}
let A_7=0;let Bbc=()=>{Bbc=Bj(JR);A1u();}
let Q0=(a,b)=>{let c,d,e,f,$$je;c=a.wv;d=b.qk;e=new L;e.ob=H(16);F(e,e.n$,C(723));f=e.n$;if(d===null)d=C(2);F(e,f,d);c=c.nc(Bi(e));d:{try{e=A0b(AEn(c));}catch($$e){$$je=BG($$e);if($$je instanceof B0){e=$$je;break d;}else{throw $$e;}}return e;}c=a.wv;d=b.qk;b=new L;b.ob=H(16);F(b,b.n$,C(723));f=b.n$;if(d===null)d=C(2);F(b,f,d);c.ne(Bi(b));E(e);}
let AHo=(a,b)=>{let c,d,e,f,g;c=a.wv;d=b.qk;e=new L;e.ob=H(16);F(e,e.n$,C(724));f=e.n$;if(d===null)d=C(2);d:{F(e,f,d);if(c.nc(Bi(e))===null){c=a.wv;g=b.qk;b=new L;b.ob=H(16);F(b,b.n$,C(723));f=b.n$;if(g===null)g=C(2);F(b,f,g);if(c.nc(Bi(b))===null){f=0;break d;}}f=1;}return f;}
let A1u=()=>{A_7=C(723).oc.length;}
let Nv=G(0);
function S6(){let a=this;D.call(a);a.CT=null;a.CH=null;}
let AZW=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.CT;d=a.CH;e=new L;e.ob=H(16);f=e.n$;if(d===null)d=C(2);F(e,f,d);f=e.n$;if(b===null)b=C(2);F(e,f,b);d=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){d.oc=Q(g.data,0,i);return Bv(c.getItem(Cr(d)));}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let A6i=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.CT;d=a.CH;e=new L;e.ob=H(16);f=e.n$;if(d===null)d=C(2);F(e,f,d);f=e.n$;if(b===null)b=C(2);F(e,f,b);d=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){d.oc=Q(g.data,0,i);c.removeItem(Cr(d));return;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
function TU(){let a=this;D.call(a);a.G5=null;a.DA=null;}
let A6D=(a,b)=>{let c,d;c=a.DA;d=Dm(c,b);return d<0?null:c.qa.data[d];}
let AUt=(a,b)=>{WP(a.G5,b,0);YB(a.DA,b);}
function DD(){let a=this;D.call(a);a.x5=null;a.A6=null;a.HZ=0;a.E$=0;a.Ec=0;a.H3=0;a.w0=0;a.Jv=0;a.Io=0;a.Cj=0;a.Aw=0;a.xd=null;}
let A$A=null;let A$C=null;let GQ=null;let Mk=null;let AVr=null;let AVs=null;let AZ4=null;let A9K=null;let Bcr=null;let BgI=null;let Be4=null;let Be6=null;let BdR=null;let Bed=null;let A$_=null;let Baf=null;let Bag=null;let Iz=()=>{Iz=Bj(DD);AR4();}
let GZ=(a,b,c,d,e)=>{let f=new DD();Xk(f,a,b,c,d,e);return f;}
let Xk=(a,b,c,d,e,f)=>{let g,h,i,j,k;Iz();a.HZ=d;a.H3=c;a.E$=e;a.Ec=f;g=H(b.oc.length);h=g.data;d=0;e=h.length;while(true){if(d>=e){a.x5=g;a.w0=e;g=X(128);h=g.data;a.A6=g;e=0;f=h.length;if(e>f){b=new V;b.n_=1;b.oa=1;E(b);}while(e<f){i=e+1|0;h[e]=(-1);e=i;}i=0;while(true){d=a.w0;if(i>=d)break;j=a.x5.data[i];g=a.A6.data;g[j&127]=i;if(c){if(CA===null){if(B1===null)B1=ER();CA=De(Di((B1.value!==null?Bv(B1.value):null)));}g[C1(CA,j)&65535&127]=i;}i=i+1|0;}k=1.0/C$(d);a.Jv=GX(C$(256.0)*k)|0;a.Io=GX(C$(65536.0)*k)|
0;a.Cj=GX(C$(4.294967296E9)*k)|0;c=GX(C$(1.8446744073709552E19)*k)|0;a.Aw=c;c=c+1|0;d=32;if(c>d)d=c;a.xd=H(d);return;}if(d<0)break;if(d>=b.oc.length)break;h[d]=b.oc.charCodeAt(d);d=d+1|0;}b=new Ba;b.n_=1;b.oa=1;E(b);}
let S5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.Aw;d=c-1|0;e=a.w0;f=e>>>1|0;g=0;h=I(f);i=I(e);while(g<=d){j=BS(T(b,1),h);a.xd.data[d-g|0]=a.x5.data[Z(B3(b,W(j,i)))];g=g+1|0;b=j;}k=a.xd;l=k.data;S();m=new P;f=l.length;if(c>=0&&c<=(f-0|0)){m.oc=Q(k.data,0,c);return m;}m=new O;m.n_=1;m.oa=1;E(m);}
let AIa=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.Aw;e=d-1|0;f=a.w0;g=f>>>1|0;h=0;i=I(g);j=I(f);while(h<=e){k=BS(T(c,1),i);a.xd.data[e-h|0]=a.x5.data[Z(B3(c,W(k,j)))];h=h+1|0;c=k;}l=a.xd;f=0;g=b.n$;Bp(b,g,g+d|0);h=d+f|0;while(f<h){m=l.data;n=b.ob.data;e=g+1|0;d=f+1|0;n[g]=m[f];g=e;f=d;}return b;}
let QK=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.Aw;d=Gn(b,(-1));b=HI(Bk(U(b,d),d));e=c;while(true){f=a.xd;g=f.data;h=a.x5.data;i=I(a.w0);g[e]=h[Z(HI(Dx(b,i)))];b=BS(b,i);if(Dh(b,M))break;e=e+(-1)|0;}if(Ej(d,M)){e=e+(-1)|0;g[e]=a.Ec;}j=(c+1|0)-e|0;S();k=new P;c=g.length;if(e>=0&&j>=0&&j<=(c-e|0)){k.oc=Q(f.data,e,j);return k;}k=new O;k.n_=1;k.oa=1;E(k);}
let LB=(a,b,c,d)=>{let e,f,g,h,i,j;if(c>=0&&d>0&&(d-c|0)>0){e=b.oc.length;if((e-c|0)>0&&d<=e){if(c>=0&&c<b.oc.length){e=b.oc.charCodeAt(c);if(e==a.Ec){f=(-1);g=0;h=a.Cj+1|0;}else if(e==a.E$){f=1;g=0;h=a.Cj+1|0;}else{g=a.A6.data[e&127];if(g<0)return 0;f=1;h=a.Cj;}i=c+1|0;r:{while(i<d&&i<(c+h|0)){j=a.A6;if(i<0)break r;if(i>=b.oc.length)break r;e=j.data[b.oc.charCodeAt(i)&127];if(e<0)return C7(g,f);g=C7(g,a.w0)+e|0;i=i+1|0;}return C7(g,f);}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}}return 0;}
let AGa=(a,b)=>{let c,d,e,f,g,h;FC();c=new L;c.ob=H(16);c=MU(c,b,(-10000));d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;Bm(c);E(c);}
let Xf=(a,b,c)=>{FC();return MU(b,c,(-10000));}
let AR4=()=>{let b,c;A$A=GZ(C(725),1,36,43,45);A$C=GZ(C(726),1,36,43,45);GQ=GZ(C(727),1,36,43,45);Mk=GZ(C(728),1,112,43,45);AVr=GZ(C(729),1,36,43,45);AVs=GZ(C(480),0,61,42,45);AZ4=GZ(C(730),0,36,42,33);A9K=GZ(C(731),0,36,43,45);b=GZ(C(732),0,92,43,45);Bcr=b;c=R(DD,[A$A,A$C,GQ,Mk,AVr,AVs,AZ4,A9K,b]);b=new On;b.Jg=c;BgI=b;Be4=BbR([0,0]);Be6=AEY([0,0]);BdR=Bc5([0,0]);Bed=Bfu([0,0]);A$_=Bfv([0,0]);Baf=A_D([0,0]);Bag=BaO([0,0]);}
let AHt=G();
let H9=(b,c,d)=>{if(b!==null&&!(b.oc.length?0:1)){if(c<0)c=0;if(!(d>=0&&d<=b.oc.length))d=b.oc.length;if(c<d)return Cw(b,c,d);return C(43);}return C(43);}
let ACj=G();
let YI=G();
function On(){IH.call(this);this.Jg=null;}
let QL=G();
let AN1=null;let BgC=()=>{BgC=Bj(QL);AJk();}
let AE5=(b,c,d,e)=>{let f;BgC();b:{a:{f=AN1;Yy();if(f===ZE){if(Bb.oU.width!=Bb.oU.width)break a;if(Bb.oU.height!=Bb.oU.height)break a;}Cj.dX(b,c,d,e);break b;}Cj.dX(C7(b,Bb.oU.width)/Bb.oU.width|0,C7(c,Bb.oU.height)/Bb.oU.height|0,C7(d,Bb.oU.width)/Bb.oU.width|0,C7(e,Bb.oU.height)/Bb.oU.height|0);}}
let AJk=()=>{Yy();AN1=ZE;}
let Xh=G();
let A6u=b=>{return !(isNaN(b)?1:0)?Ed(b):B(0, 2146959360);}
let JS=G();
let AB9=null;let Lo=null;let Bf$=null;let FC=()=>{FC=Bj(JS);AXL();}
let AFb=b=>{let c,d,e,f,g,h;FC();c=new L;c.ob=H(16);c=MU(c,b,(-10000));d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let MU=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;FC();if(isNaN(c)?1:0){a:{e=Dr(b);B4(b,C(733));if(d!=(-10000)){if(GG(U(I(e),I(d)),I(Dr(b))))I5(b,e+d|0);else{e=e+d|0;while(true){if(Dr(b)>=e)break a;Ey(b,32);}}}}return b;}if(c!==Infinity&&c!==(-Infinity)){f=A6u(c);e=Ba0(f,M);if(!e){g:{e=Dr(b);B4(b,C(734));if(d!=(-10000)){if(GG(U(I(e),I(d)),I(Dr(b))))I5(b,e+d|0);else{e=e+d|0;while(true){if(Dr(b)>=e)break g;Ey(b,48);}}}}return b;}if(Dh(f,B(0, 2147483648))){i:{e=Dr(b);B4(b,C(735));if
(d!=(-10000)){if(GG(U(I(e),I(d)),I(Dr(b))))I5(b,e+d|0);else{e=e+d|0;while(true){if(Dr(b)>=e)break i;Ey(b,48);}}}}return b;}g=Z(Be(T(f,52),I(2047)));h=Be(f,B(4294967295, 1048575));if(!g)i=(-1074);else{i=(g-1023|0)-52|0;h=B8(h,B(0, 1048576));}j=e>=0?0:1;k=Ej(Be(h,I(1)),M)?0:1;l=W(I(4),h);m=U(l,I(2));n=Dh(h,B(0, 1048576))&&g!=1?0:1;o=B3(B3(l,I(1)),I(n));e=i+(-2)|0;p=0;q=0;if(e>=0){r=Kr(0,((e*78913|0)>>>18|0)-1|0);s=(( -e|0)+r|0)+((122+TN(r)|0)-1|0)|0;t=L5(l,r,s);u=L5(m,r,s);v=L5(o,r,s);if(r<=21){if(Dh(Dx(l,I(5)),
M))q=LX(l,r);else if(k)p=LX(o,r);else if(LX(m,r))u=B3(u,I(1));}}else{w= -e|0;x=Kr(0,(C7(w,732923)>>>20|0)-1|0);s=w-x|0;y=x-(TN(s)-121|0)|0;t=LW(l,s,y);u=LW(m,s,y);v=LW(o,s,y);r=x+e|0;if(x<=1){q=1;if(!k)u=B3(u,I(1));else p=n!=1?0:1;}else if(x<63)q=Ej(Be(l,B3(BP(I(1),x-1|0),I(1))),M)?0:1;}z=XP(u);w=(r+z|0)-1|0;ba=0;bb=0;if(!p&&!q){while(true){u=BS(u,I(10));bc=BS(v,I(10));if(Ga(u,bc))break;bb=Z(Dx(t,I(10)));t=BS(t,I(10));ba=ba+1|0;v=bc;}bc=U(t,I(Ej(t,v)&&bb<5?0:1));}else{while(true){u=BS(u,I(10));h=BS(v,I(10));if
(Ga(u,h))break;p=p&(Ej(Dx(v,I(10)),M)?0:1);q=q&(bb?0:1);bb=Z(Dx(t,I(10)));t=BS(t,I(10));ba=ba+1|0;v=h;}if(p)while(Dh(Dx(v,I(10)),M)){q=q&(bb?0:1);bb=Z(Dx(t,I(10)));t=BS(t,I(10));v=BS(v,I(10));ba=ba+1|0;}if(q&&bb==5&&Dh(Be(t,I(1)),M))bb=4;bc=U(t,I(!(Dh(t,v)&&!p)&&bb<5?0:1));}s=z-ba|0;bd=Dr(b);if(j)Ey(b,45);br:{if(w<0){B4(b,C(736));be=(-1);while(be>w){Ey(b,48);be=be+(-1)|0;}bf=Dr(b);be=0;while(be<s){Il(b,bf,Z(U(I(48),Dx(bc,I(10))))&65535);bc=BS(bc,I(10));be=be+1|0;}}else{e=w+1|0;if(e>=s){j=Dr(b);be=0;while(be
<s){Il(b,j,Z(U(I(48),Dx(bc,I(10))))&65535);bc=BS(bc,I(10));be=be+1|0;}while(s<e){Ey(b,48);s=s+1|0;}B4(b,C(737));}else{bf=Dr(b);be=0;while(true){if(be>=s)break br;if(((s-be|0)-1|0)==w)Il(b,bf,46);Il(b,bf,Z(U(I(48),Dx(bc,I(10))))&65535);bc=BS(bc,I(10));be=be+1|0;}}}}if(d!=(-10000)){while(ba>=(-1)){Ey(b,48);ba=ba+(-1)|0;}if(GG(U(I(bd),I(d)),I(Dr(b))))I5(b,bd+d|0);}return b;}e=Dr(b);if(c!==(-Infinity))B4(b,C(738));else B4(b,C(739));r:{if(d!=(-10000)){if(GG(U(I(e),I(d)),I(Dr(b))))I5(b,e+d|0);else{e=e+d|0;while(true)
{if(Dr(b)>=e)break r;Ey(b,32);}}}}return b;}
let TN=b=>{FC();return (C7(b,1217359)>>>19|0)+1|0;}
let XP=b=>{FC();if(DB(b,B(2808348672, 232830643)))return 19;if(DB(b,B(1569325056, 23283064)))return 18;if(DB(b,B(1874919424, 2328306)))return 17;if(DB(b,B(2764472320, 232830)))return 16;if(DB(b,B(276447232, 23283)))return 15;if(DB(b,B(1316134912, 2328)))return 14;if(DB(b,B(3567587328, 232)))return 13;if(DB(b,B(1215752192, 23)))return 12;if(DB(b,B(1410065408, 2)))return 11;if(DB(b,I(1000000000)))return 10;if(DB(b,I(100000000)))return 9;if(DB(b,I(10000000)))return 8;if(DB(b,I(1000000)))return 7;if(DB(b,I(100000)))return 6;if
(DB(b,I(10000)))return 5;if(DB(b,I(1000)))return 4;if(DB(b,I(100)))return 3;if(GG(b,I(10)))return 1;return 2;}
let LX=(b,c)=>{FC();return YG(b)<c?0:1;}
let YG=b=>{let c,d,e,f,g,h,i,j;FC();if(Ej(Dx(b,I(5)),M))return 0;if(Ej(Dx(b,I(25)),M))return 1;if(Ej(Dx(b,I(125)),M))return 2;if(Ej(Dx(b,I(625)),M))return 3;c=4;b=BS(b,I(625));while(true){if(Ga(b,M)){d=new V;e=new L;e.ob=H(16);F(e,e.n$,C(43));P7(e,e.n$,b,10);f=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if(i>=0&&i<=(j-0|0)){f.oc=Q(g.data,0,i);d.n_=1;d.oa=1;d.od=f;E(d);}d=new O;d.n_=1;d.oa=1;Bu(d);E(d);}if(Ej(Dx(b,I(5)),M))break;b=BS(b,I(5));c=c+1|0;}return c;}
let LW=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FC();e=T(b,31);f=Be(b,I(2147483647));g=AB9.data;h=W(e,I(g[c].data[0]));i=W(f,I(g[c].data[0]));j=W(e,I(g[c].data[1]));k=W(f,I(g[c].data[1]));l=W(e,I(g[c].data[2]));m=W(f,I(g[c].data[2]));n=W(e,I(g[c].data[3]));o=W(f,I(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return T(U(T(U(U(T(U(U(T(U(U(T(o,31),m),n),31),k),l),31),i),j),21),BP(h,10)),p);q=new V;r=new L;r.ob=H(16);F(r,r.n$,C(43));N(r,r.n$,p,10);s=new P;g=r.ob;t=g.data;d=r.n$;S();p=t.length;if(d>=0&&d<=(p-0|0))
{s.oc=Q(g.data,0,d);q.n_=1;q.oa=1;q.od=s;E(q);}q=new O;q.n_=1;q.oa=1;Bu(q);E(q);}
let L5=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FC();e=T(b,31);f=Be(b,I(2147483647));g=Lo.data;h=W(e,I(g[c].data[0]));i=W(f,I(g[c].data[0]));j=W(e,I(g[c].data[1]));k=W(f,I(g[c].data[1]));l=W(e,I(g[c].data[2]));m=W(f,I(g[c].data[2]));n=W(e,I(g[c].data[3]));o=W(f,I(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return T(U(T(U(U(T(U(U(T(U(U(T(o,31),m),n),31),k),l),31),i),j),21),BP(h,10)),p);q=new V;r=new L;r.ob=H(16);F(r,r.n$,C(43));N(r,r.n$,p,10);s=new P;g=r.ob;t=g.data;d=r.n$;S();p=t.length;if(d>=0&&d<=(p-0|0))
{s.oc=Q(g.data,0,d);q.n_=1;q.oa=1;q.od=s;E(q);}q=new O;q.n_=1;q.oa=1;Bu(q);E(q);}
let AXL=()=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;AB9=AEY([4,326]);Lo=AEY([4,291]);Bf$=H(32);B6();b=Fv;if(b.om){c=(b.ox+0|0)+1|0;d=X(c);El(d,b.ok,0,31);e=new BT;f=b.om;e.oN=(-2);e.om=f;e.ox=c;e.ok=d;DA(e);b=e;}g=IC(b,Fv);e=Fv;if(e.om){c=(e.ox+0|0)+1|0;d=X(c);El(d,e.ok,0,31);b=new BT;f=e.om;b.oN=(-2);b.om=f;b.ox=c;b.ok=d;DA(b);e=b;}e=IC(e,Fv);h=0;while(h<326){i=TQ(G9(I(5)),h);j=A39(i);FC();f=(C7(h,1217359)>>>19|0)+1|0;if(f!=j){b=new Cb;e=new L;e.ob=H(16);N(e,e.n$,j,10);F(e,e.n$,C(740));N(e,e.n$,f,10);g=new P;d=
e.ob;k=d.data;h=e.n$;S();c=k.length;if(h>=0&&h<=(c-0|0)){g.oc=Q(d.data,0,h);b.n_=1;b.oa=1;b.od=g;E(b);}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}l=0;m=j-121|0;while(l<4){n=AB9.data[h];f=m+((3-l|0)*31|0)|0;if(f&&i.om){if(f>0)b=FP(i,f);else{c= -f|0;o=c>>5;f=c&31;c=(i.ox+o|0)+(f?1:0)|0;d=X(c);El(d,i.ok,o,f);b=new BT;f=i.om;b.oN=(-2);b.om=f;b.ox=c;b.ok=d;DA(b);}}else b=i;d=n.data;b=Yp(b,g);d[l]=C7(b.om,b.ok.data[0]);l=l+1|0;}q:{if(h<Lo.data.length){p=(j-1|0)+122|0;b=ZO(AAA(Vu(Fv,p),i),Fv);c=0;while(true){if(c>=4)break q;if
(!c)Lo.data[h].data[c]=TD(QR(b,(3-c|0)*31|0));else Lo.data[h].data[c]=TD(V6(QR(b,(3-c|0)*31|0),e));c=c+1|0;}}}h=h+1|0;}}
let Io=G();
let A80=(a,b,c,d)=>{let e,f,g,h;e=0;while(e<d){f=a.nE();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
let A2a=a=>{return;}
function NC(){let a=this;Io.call(a);a.yQ=null;a.t7=0;a.C8=0;a.xP=0;}
let A0b=a=>{let b=new NC();AKo(b,a);return b;}
let AKo=(a,b)=>{let c;c=b.data.length;a.yQ=b;a.t7=0;a.C8=0;a.xP=0+c|0;}
let AZK=a=>{let b,c,d;b=a.t7;if(b>=a.xP)c=(-1);else{d=a.yQ.data;a.t7=b+1|0;c=d[b]&255;}return c;}
let A98=(a,b,c,d)=>{let e,f,g,h,i;e=a.xP-a.t7|0;if(d<e)e=d;f=0;while(f<e){g=b.data;d=c+1|0;h=a.yQ.data;i=a.t7;a.t7=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
let AOf=a=>{return;}
let MV=G(FF);
function SW(){let a=this;B_.call(a);a.yz=0.0;a.Ax=0.0;}
let BdA=(a,b,c)=>{let d=new SW();AVd(d,a,b,c);return d;}
let AVd=(a,b,c,d)=>{let e,f;a.ot=b;if(!(isNaN(c)?1:0)&&d>0.0){a.yz=c;a.Ax=d;e=1;}else e=0;if(e)return;f=new V;f.n_=1;f.oa=1;f.od=C(499);E(f);}
let AEk=a=>{return a.yz;}
let ZV=(a,b,c,d)=>{if(!(isNaN(b)?1:0)&&c>0.0){a.yz=b;a.Ax=c;return 1;}return 0;}
let Yi=a=>{let b;b=a.ot;return a.yz+a.Ax*ATS(3.141592653589793*b.jJ()-1.5707963267948966);}
let Qd=G();
let IV=null;let R2=b=>{let c,d,e,f,g,h,i,j,k;a:{while(true){c=Z(Be(b,I(255)));d=T(b,11);e=BB(d)*1.1102230246251565E-16;f=IV.data;e=e*f[c];g=c+1|0;if(e<f[g])break;if(!c){while(true){b=U(Bk(b,T(b,11)),B(2135587861, 2654435769));h=C$(BB(U(Be(b,B(4294967295, 2097151)),I(1)))*1.1102230246251565E-16)*0.2736612373297584;b=U(Bk(b,T(b,11)),B(2135587861, 2654435769));i=C$(BB(U(Be(b,B(4294967295, 2097151)),I(1)))*1.1102230246251565E-16);if( -(i+i)>=h*h)break;}return Ej(Be(I(KR(b)),I(1)),M)?3.654152885361007-h:h-3.654152885361007;}i
=e*e;j=Fj((-0.5)*(f[c]*f[c]-i));f=IV.data;k=Fj((-0.5)*(f[g]*f[g]-i));b=U(Bk(b,d),B(2135587861, 2654435769));if(k+BB(Be(b,B(4294967295, 2097151)))*1.1102230246251565E-16*(j-k)<1.0)break a;}}return Fn(B8(Be(Ed(BB(B3(I(256),Be(b,I(512))))),B(0, 2147483648)),Be(Ed(e),B(4294967295, 2147483647))));}
let AGJ=()=>{let b,c,d,e;IV=LH(257);b=Fj((-6.676416654796086));c=IV.data;c[0]=0.004928673233974655/b;c[1]=3.654152885361007;d=2;while(d<256){e=C$(0.004928673233974655/IV.data[d-1|0]+b);IV.data[d]=Cf((-2.0)*e);b=Fj(e);d=d+1|0;}IV.data[256]=0.0;}
let GL=G(BV);
let ZE=null;let BeY=null;let A_$=null;let Yy=()=>{Yy=Bj(GL);AKm();}
let AKm=()=>{let b,c;b=new GL;Yy();b.ol=C(741);b.oi=0;ZE=b;c=new GL;c.ol=C(742);c.oi=1;BeY=c;A_$=R(GL,[b,c]);}
let ACG=G(B_);
let ABH=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=c>=1.0?c:c+1.0;f=e-0.3333333333333333;g=1.0/Cf(9.0*f);while(true){while(true){h=0.0+1.0*b.ep();i=1.0+g*h;if(i<=0.0)continue;else break;}j=i*i*i;k=b.ev();l=h*h;if(k<=1.0-0.331*l*l)break;if(C$(k)>0.5*l+f*(1.0-j+C$(j)))continue;else break;}if(Lu(e-c)>5.9604644775390625E-8?0:1)return f*j/d;return D7(b.jJ(),1.0/c)*f*j/d;}
function BT(){let a=this;E3.call(a);a.ok=null;a.ox=0;a.om=0;a.oN=0;}
let DF=null;let Fv=null;let AQs=null;let J2=null;let ASR=null;let Zm=null;let B6=()=>{B6=Bj(BT);A$Y();}
let AOS=(a,b)=>{let c=new BT();YV(c,a,b);return c;}
let Bb8=(a,b)=>{let c=new BT();AIf(c,a,b);return c;}
let YV=(a,b,c)=>{let d;B6();a.oN=(-2);a.om=b;if(Dh(Be(c,B(0, 4294967295)),M)){a.ox=1;d=X(1);d.data[0]=Z(c);a.ok=d;}else{a.ox=2;a.ok=E2([Z(c),GE(c)]);}}
let AIf=(a,b,c)=>{let d,e;B6();d=c.data;a.oN=(-2);e=d.length;if(e){a.om=b;a.ox=e;a.ok=c;DA(a);}else{a.om=0;a.ox=1;c=X(1);c.data[0]=0;a.ok=c;}}
let G9=b=>{B6();if(GG(b,M)){if(Dh(b,I(-1)))return J2;return AOS((-1),HI(b));}if(WX(b,I(10)))return AOS(1,b);return ASR.data[Z(b)];}
let ZO=(a,b)=>{return Ks(a,b);}
let QR=(a,b)=>{let c,d,e,f;if(b&&a.om){if(b>0)c=FP(a,b);else{b= -b|0;d=b>>5;b=b&31;e=(a.ox+d|0)+(b?1:0)|0;f=X(e);El(f,a.ok,d,b);c=new BT;b=a.om;B6();c.oN=(-2);c.om=b;c.ox=e;c.ok=f;DA(c);}return c;}return a;}
let Vu=(a,b)=>{let c,d,e,f;if(b&&a.om){if(b<=0)c=FP(a, -b|0);else{d=b>>5;b=b&31;e=(a.ox+d|0)+(b?1:0)|0;f=X(e);El(f,a.ok,d,b);c=new BT;b=a.om;B6();c.oN=(-2);c.om=b;c.ox=e;c.ok=f;DA(c);}return c;}return a;}
let QG=(a,b)=>{let c,d,e,f,g,h;if(!b)return !(a.ok.data[0]&1)?0:1;if(b<0){c=new KB;c.n_=1;c.oa=1;c.od=C(743);E(c);}d=b>>5;if(d>=a.ox)return a.om>=0?0:1;e=a.ok.data;f=e[d];b=1<<(b&31);g=a.om;if(g<0){if(a.oN==(-2)){if(!g)g=(-1);else{g=0;while(!e[g]){g=g+1|0;}}a.oN=g;}h=a.oN;if(d<h)return 0;f=h==d? -f|0:f^(-1);}return !(f&b)?0:1;}
let V6=(a,b)=>{return Yp(a,b);}
let TD=a=>{return C7(a.om,a.ok.data[0]);}
let Kf=(a,b)=>{let c,d,e;if(a===b)return 1;if(!(b instanceof BT))return 0;d:{if(a.om==b.om){c=a.ox;if(c==b.ox){d=b.ok;c=c-1|0;while(c>=0){e=d.data;if(a.ok.data[c]!=e[c])break;c=c+(-1)|0;}if(c>=0?0:1){c=1;break d;}}}c=0;}return c;}
let TQ=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new KB;c.n_=1;c.oa=1;c.od=C(744);E(c);}if(!b){B6();return Fv;}if(b!=1){B6();if(!Kf(a,Fv)&&!Kf(a,DF)){if(QG(a,0))return ADE(a,b);d=1;while(!QG(a,d)){d=d+1|0;}c=AA$(C7(d,b));if(d&&a.om){if(d>0)a=FP(a,d);else{d= -d|0;e=d>>5;d=d&31;f=(a.ox+e|0)+(d?1:0)|0;g=X(f);El(g,a.ok,e,d);h=new BT;d=a.om;h.oN=(-2);h.om=d;h.ox=f;h.ok=g;DA(h);a=h;}}h=TQ(a,b);if(!h.om)c=DF;else if(!c.om)c=DF;else{Gm();c=FB(c,h);}return c;}}return a;}
let AAA=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.om;if(!c){b=new KB;b.n_=1;b.oa=1;b.od=C(745);E(b);}d=b.ox;e=B9(d,1);if(!e&&b.ok.data[0]==1?1:0){if(c<=0){c=a.om;if(!c)b=a;else{b=new BT;c= -c|0;f=a.ox;g=a.ok;B6();b.oN=(-2);b.om=c;b.ox=f;b.ok=g;}a=b;}return a;}f=a.om;h=a.ox;if((h+d|0)==2){i=BS(Be(I(a.ok.data[0]),B(4294967295, 0)),Be(I(b.ok.data[0]),B(4294967295, 0)));if(f!=c)i=HI(i);return G9(i);}j=B9(h,d);j=!j?Pi(a.ok,b.ok,h):j<=0?(-1):1;if(!j){if(f!=c){B6();b=J2;}else{B6();b=Fv;}return b;}if(j==(-1)){B6();return DF;}k
=(h-d|0)+1|0;g=X(k);l=f!=c?(-1):1;if(e)A3W(g,k,a.ok,h,b.ok,d);else AZ1(g,a.ok,h,b.ok.data[0]);m=new BT;B6();m.oN=(-2);m.om=l;m.ox=k;m.ok=g;DA(m);return m;}
let DA=a=>{let b,c,d;while(true){b=a.ox;if(b<=0)break;c=a.ok.data;b=b-1|0;a.ox=b;if(c[b])break;}c=a.ok.data;d=a.ox;a.ox=d+1|0;if(!c[d])a.om=0;}
let AA$=b=>{let c,d,e,f,g;B6();c=Zm.data;if(b<c.length)return c[b];d=b>>5;e=b&31;f=d+1|0;c=X(f);c.data[d]=1<<e;g=new BT;g.oN=(-2);g.om=1;g.ox=f;g.ok=c;return g;}
let A$Y=()=>{let b,c,d,e,f,g,h,i;b=new BT;B6();b.oN=(-2);b.om=0;b.ox=1;c=X(1);c.data[0]=0;b.ok=c;DF=b;d=new BT;d.oN=(-2);d.om=1;d.ox=1;c=X(1);c.data[0]=1;d.ok=c;Fv=d;e=new BT;e.oN=(-2);e.om=1;e.ox=1;c=X(1);c.data[0]=10;e.ok=c;AQs=e;f=new BT;f.oN=(-2);f.om=(-1);f.ox=1;c=X(1);c.data[0]=1;f.ok=c;J2=f;c=Bt(BT,11);g=c.data;g[0]=b;g[1]=d;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]=2;b.ok=h;g[2]=b;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]=3;b.ok=h;g[3]=b;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]
=4;b.ok=h;g[4]=b;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]=5;b.ok=h;g[5]=b;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]=6;b.ok=h;g[6]=b;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]=7;b.ok=h;g[7]=b;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]=8;b.ok=h;g[8]=b;b=new BT;b.oN=(-2);b.om=1;b.ox=1;h=X(1);h.data[0]=9;b.ok=h;g[9]=b;g[10]=e;ASR=c;Zm=Bt(BT,32);i=0;while(true){c=Zm.data;if(i>=c.length)break;c[i]=G9(BP(I(1),i));i=i+1|0;}}
let Nu=G(G1);
let KB=G(B0);
let HQ=G();
let A_N=null;let BbW=null;let UN=null;let Wc=null;let Gm=()=>{Gm=Bj(HQ);AJM();}
let FB=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;Gm();if(c.ox<=b.ox){d=c;c=b;b=d;}if(b.ox<63)return ACA(c,b);e=c.ox;f=(e&(-2))<<4;if(f&&c.om){if(f>0)d=FP(c,f);else{g= -f|0;h=g>>5;g=g&31;e=(e+h|0)+(g?1:0)|0;i=X(e);El(i,c.ok,h,g);d=new BT;h=c.om;B6();d.oN=(-2);d.om=h;d.ox=e;d.ok=i;DA(d);}}else d=c;if(f&&b.om){if(f>0)j=FP(b,f);else{e= -f|0;h=e>>5;e=e&31;g=(b.ox+h|0)+(e?1:0)|0;i=X(g);El(i,b.ok,h,e);j=new BT;e=b.om;B6();j.oN=(-2);j.om=e;j.ox=g;j.ok=i;DA(j);}}else j=b;if(f&&d.om){if(f<=0)k=FP(d, -f|0);else{e=f>>5;h=f&31;g
=(d.ox+e|0)+(h?1:0)|0;i=X(g);El(i,d.ok,e,h);k=new BT;e=d.om;B6();k.oN=(-2);k.om=e;k.ox=g;k.ok=i;DA(k);}}else k=d;l=IC(c,k);if(f&&j.om){if(f<=0)c=FP(j, -f|0);else{e=f>>5;h=f&31;g=(j.ox+e|0)+(h?1:0)|0;i=X(g);El(i,j.ok,e,h);c=new BT;e=j.om;B6();c.oN=(-2);c.om=e;c.ox=g;c.ok=i;DA(c);}}else c=j;m=IC(b,c);k=FB(d,j);n=FB(l,m);b=Ks(Ks(FB(IC(d,l),IC(m,j)),k),n);if(f&&b.om){if(f<=0)b=FP(b, -f|0);else{e=f>>5;h=f&31;g=(b.ox+e|0)+(h?1:0)|0;i=X(g);El(i,b.ok,e,h);c=new BT;e=b.om;B6();c.oN=(-2);c.om=e;c.ox=g;c.ok=i;DA(c);b=
c;}}e=f<<1;if(e&&k.om){if(e<=0)k=FP(k, -e|0);else{f=e>>5;e=e&31;h=(k.ox+f|0)+(e?1:0)|0;i=X(h);El(i,k.ok,f,e);c=new BT;e=k.om;B6();c.oN=(-2);c.om=e;c.ox=h;c.ok=i;DA(c);k=c;}}return Ks(Ks(k,b),n);}
let ACA=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;Gm();d=b.ox;e=c.ox;f=d+e|0;g=b.om==c.om?1:(-1);if(f!=2){h=b.ok;i=c.ok;j=X(f);Z4(h,d,i,e,j);k=new BT;B6();k.oN=(-2);k.om=g;k.ox=f;k.ok=j;DA(k);return k;}l=U(U(W(Be(I(b.ok.data[0]),B(4294967295, 0)),Be(I(c.ok.data[0]),B(4294967295, 0))),M),M);m=Z(l);n=GE(l);if(!n){b=new BT;B6();b.oN=(-2);b.om=g;b.ox=1;h=X(1);h.data[0]=m;b.ok=h;}else{b=new BT;h=E2([m,n]);B6();b.oN=(-2);b.om=g;b.ox=2;b.ok=h;}return b;}
let Z4=(b,c,d,e,f)=>{let g,h,i,j,k;Gm();if(c&&e){if(c==1){g=b.data[0];h=M;c=0;i=Be(I(g),B(4294967295, 0));while(c<e){b=d.data;j=f.data;h=U(U(W(Be(I(b[c]),B(4294967295, 0)),i),Be(I(Z(h)),B(4294967295, 0))),M);j[c]=Z(h);h=T(h,32);c=c+1|0;}f.data[e]=Z(h);}else if(e!=1)VM(b,d,f,c,e);else{e=d.data[0];k=M;g=0;h=Be(I(e),B(4294967295, 0));while(g<c){d=b.data;j=f.data;k=U(U(W(Be(I(d[g]),B(4294967295, 0)),h),Be(I(Z(k)),B(4294967295, 0))),M);j[g]=Z(k);k=T(k,32);g=g+1|0;}f.data[c]=Z(k);}return;}}
let VM=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;Gm();if(b===c&&e==f){Pz(b,e,d);return;}g=0;while(g<e){h=b.data;i=M;j=h[g];k=0;l=Be(I(j),B(4294967295, 0));while(k<f){h=c.data;m=d.data;j=h[k];n=g+k|0;o=m[n];p=Z(i);i=U(U(W(l,Be(I(j),B(4294967295, 0))),Be(I(o),B(4294967295, 0))),Be(I(p),B(4294967295, 0)));m[n]=Z(i);i=T(i,32);k=k+1|0;}d.data[g+f|0]=Z(i);g=g+1|0;}}
let ADE=(b,c)=>{let d,e,f,g;Gm();B6();d=Fv;while(c>1){if(c&1)d=!b.om?DF:!d.om?DF:FB(d,b);e=b.ox;if(e!=1)f=Bb8(1,Pz(b.ok,e,X(e<<1)));else{g=b.om;f=!g?DF:!g?DF:FB(b,b);}c=c>>1;b=f;}return !b.om?DF:!d.om?DF:FB(d,b);}
let Pz=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;Gm();e=0;while(e<c){f=M;g=e+1|0;h=g;while(h<c){i=b.data;j=d.data;k=i[e];l=i[h];m=e+h|0;n=j[m];o=Z(f);f=U(U(W(Be(I(k),B(4294967295, 0)),Be(I(l),B(4294967295, 0))),Be(I(n),B(4294967295, 0))),Be(I(o),B(4294967295, 0)));j[m]=Z(f);f=T(f,32);h=h+1|0;}d.data[e+c|0]=Z(f);e=g;}e=c<<1;k=0;h=0;while(h<e){i=d.data;l=i[h];i[h]=l<<1|k;k=l>>>31|0;h=h+1|0;}if(k)d.data[e]=k;f=M;e=0;k=0;while(e<c){i=b.data;j=d.data;g=i[e];h=i[e];m=j[k];l=Z(f);f=U(U(W(Be(I(g),B(4294967295, 0)),Be(I(h),
B(4294967295, 0))),Be(I(m),B(4294967295, 0))),Be(I(l),B(4294967295, 0)));j[k]=Z(f);p=T(f,32);k=k+1|0;f=U(p,Be(I(j[k]),B(4294967295, 0)));j[k]=Z(f);f=T(f,32);e=e+1|0;k=k+1|0;}return d;}
let AJM=()=>{let b,c,d,e,f,g;A_N=E2([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BbW=E2([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);UN=Bt(BT,32);Wc=Bt(BT,32);b=I(1);c=0;while(c<=18){Wc.data[c]=G9(b);UN.data[c]=G9(BP(b,c));b=W(b,I(5));c=c+1|0;}while(c<UN.data.length){d=Wc.data;e=c-1|0;f=d[e];g=d[1];if(!g.om){B6();f=DF;}else if(!f.om){B6();f=DF;}else{Gm();f=FB(f,g);}d[c]=f;d=UN.data;f=d[e];B6();g=AQs;if(!g.om)f=DF;else if(!f.om)f=DF;else{Gm();f
=FB(f,g);}d[c]=f;c=c+1|0;}}
let WI=G();
let A39=b=>{let c,d,e,f,g,h;c=b.om;if(!c)return 0;d=b.ox;e=d<<5;f=b.ok.data;g=d-1|0;h=f[g];if(c<0){if(b.oN==(-2)){if(!c)c=(-1);else{c=0;while(!f[c]){c=c+1|0;}}b.oN=c;}if(b.oN==g)h=h+(-1)|0;}return e-Ee(h)|0;}
let El=(b,c,d,e)=>{let f,g,h,i,j,k;b:{if(!e)CX(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break b;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|(i[k]>>>g|0);f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}}
let FP=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;d=c>>5;c=c&31;e=b.ox;if(d>=e){if(b.om>=0){B6();b=DF;}else{B6();b=J2;}return b;}k:{e=e-d|0;f=e+1|0;g=X(f);AAV(g,e,b.ok,d,c);h=b.om;if(h>=0)f=e;else{i=0;while(true){j=B9(i,d);if(j>=0)break;if(b.ok.data[i])break;i=i+1|0;}if(j>=0){if(c<=0){f=e;break k;}if(!(b.ok.data[i]<<(32-c|0))){f=e;break k;}}k=g.data;l=0;while(true){i=B9(l,e);if(i>=0)break;if(k[l]!=(-1))break;k[l]=0;l=l+1|0;}if(i)f=e;k[l]=k[l]+1|0;}}m=new BT;B6();m.oN=(-2);m.om=h;m.ox=f;m.ok=g;DA(m);return m;}
let AAV=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)CX(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=(i[c]>>>f|0)|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f|0;}return g;}
let NF=G();
let BbF=null;let A2A=null;let AEn=b=>{let c,d,e,f,g,h,i,j;c=BW(b.oc.length/2|0);d=c.data;e=0;f=d.length;b:{a:{while(e<f){g=e*2|0;if(g<0)break b;if(g>=b.oc.length)break b;h=b.oc.charCodeAt(g);g=g+1|0;if(g<0)break a;if(g>=b.oc.length)break a;i=b.oc.charCodeAt(g);j=A2A.data;d[e]=((j[h]<<4)+j[i]|0)<<24>>24;e=e+1|0;}return c;}b=new Ba;b.n_=1;b.oa=1;E(b);}b=new Ba;b.n_=1;b.oa=1;E(b);}
let ZT=()=>{let b,c,d,e;b=H(16);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;BbF=b;b=X(128);d=b.data;A2A=b;e=0;while(e<c.length){d[c[e]]=e;if(c[e]>=65)d[(c[e]-65|0)+97|0]=e;e=e+1|0;}}
function Na(){V.call(this);this.Jn=null;}
function Rn(){let a=this;Io.call(a);a.Eo=0;a.ED=null;}
let A4p=a=>{let b,c;if(a.Eo==a.ED.q4.length)return (-1);b=a.ED;c=a.Eo;a.Eo=c+1|0;return b.q4[c]&255;}
let Tr=G();
let IA=null;let Kw=b=>{let c,d,e,f,g,h,i,j;a:{while(true){c=Z(Be(b,I(255)));d=BB(T(b,11))*1.1102230246251565E-16;e=IA.data;d=d*e[c];f=c+1|0;if(d<e[f])break;if(!c){while(true){b=W(Bk(b,B(778217925, 4046813930)),B(4220496899, 2882110344));g=C$(BB(U(T(b,11),I(1)))*1.1102230246251565E-16)*0.2736612373297584;b=W(Bk(b,B(778217925, 4046813930)),B(4220496899, 2882110344));h=C$(BB(U(T(b,11),I(1)))*1.1102230246251565E-16);if( -(h+h)>=g*g)break;}return Ej(Be(I(KR(b)),I(1)),M)?3.654152885361007-g:g-3.654152885361007;}h
=d*d;i=Fj((-0.5)*(e[c]*e[c]-h));e=IA.data;j=Fj((-0.5)*(e[f]*e[f]-h));b=W(Bk(b,B(778217925, 4046813930)),B(4220496899, 2882110344));if(j+BB(T(b,11))*1.1102230246251565E-16*(i-j)<1.0)break a;}}return Fn(B8(Be(Ed(BB(B3(I(256),Be(b,I(512))))),B(0, 2147483648)),Be(Ed(d),B(4294967295, 2147483647))));}
let XT=()=>{let b,c,d,e;IA=LH(257);b=Fj((-6.676416654796086));c=IA.data;c[0]=0.004928673233974655/b;c[1]=3.654152885361007;d=2;while(d<256){e=C$(0.004928673233974655/IA.data[d-1|0]+b);IA.data[d]=Cf((-2.0)*e);b=Fj(e);d=d+1|0;}IA.data[256]=0.0;}
function J(){D.call(this);this.H1=M;}
let AKs=null;let ASt=null;let AKz=null;let AOK=null;let A0Y=null;let A2n=null;let ASU=null;let AIV=null;let A8n=null;let A12=null;let A7P=null;let ALq=null;let AKT=null;let AKk=null;let APb=null;let AKU=null;let A0i=null;let A3G=null;let AW_=null;let APJ=null;let A3B=null;let AWD=null;let A2Y=null;let ARQ=null;let AUN=null;let A$e=null;let A1B=null;let AVJ=null;let ASu=null;let A1N=null;let A8J=null;let AVf=null;let A3a=null;let A$o=null;let A7t=null;let A77=null;let A6o=null;let AQx=null;let A9Y=null;let A3n
=null;let AK0=null;let ANO=null;let A7g=null;let AZe=null;let A3d=null;let ATg=null;let AKQ=null;let AWm=null;let A0y=null;let A9e=null;let AQK=null;let AOo=null;let ATm=null;let A0C=null;let A2u=null;let AUV=null;let AZh=null;let ARH=null;let A0K=null;let AVQ=null;let AL8=null;let AQB=null;let ASc=null;let AUu=null;let AJC=null;let A4U=null;let AOB=null;let A0F=null;let A0j=null;let A$n=null;let AZY=null;let AZ2=null;let A16=null;let ARj=null;let AS4=null;let A$D=null;let A4b=null;let A0t=null;let AVg=null;let AS0
=null;let AUd=null;let ATp=null;let AXm=null;let A2j=null;let AV$=null;let A5j=null;let A5b=null;let AV6=null;let A69=null;let A73=null;let AU3=null;let ANn=null;let A0U=null;let A0O=null;let AKe=null;let AJd=null;let AMt=null;let AKG=null;let APr=null;let A04=null;let A0Z=null;let ARq=null;let A3$=null;let A08=null;let A4J=null;let AZC=null;let A3Z=null;let ANq=null;let A2Z=null;let AUi=null;let A8X=null;let A0T=null;let A4O=null;let AUS=null;let AVo=null;let A5q=null;let AVF=null;let ATj=null;let AWo=null;let A2v
=null;let AZS=null;let AMG=null;let A6M=null;let A9D=null;let ANW=null;let AS_=null;let A7A=null;let A8w=null;let A8Y=null;let AI9=null;let AYm=null;let ATv=null;let A4W=null;let ALy=null;let AUB=null;let A1d=null;let AXP=null;let AK_=null;let AZ7=null;let AQO=null;let ASe=null;let ANg=null;let A9J=null;let ASm=null;let A99=null;let A2$=null;let AJf=null;let AQA=null;let APh=null;let A4N=null;let A7n=null;let APQ=null;let AQH=null;let AI2=null;let APN=null;let A2w=null;let AOb=null;let ANt=null;let ARh=null;let AY9
=null;let AXh=null;let A64=null;let A37=null;let AZQ=null;let APl=null;let AVW=null;let AML=null;let AJt=null;let AWB=null;let A8s=null;let A59=null;let AV3=null;let AP_=null;let A28=null;let AQQ=null;let A79=null;let A5x=null;let AYk=null;let ARU=null;let AWj=null;let A58=null;let AY4=null;let AXc=null;let AQU=null;let APi=null;let A2m=null;let A6C=null;let AOn=null;let AOH=null;let AL1=null;let ALQ=null;let A0a=null;let APM=null;let AUM=null;let A$h=null;let A5g=null;let A7W=null;let ATW=null;let APR=null;let A9k
=null;let A1Y=null;let ATU=null;let A3y=null;let ARO=null;let AKE=null;let AOi=null;let AQV=null;let AJ2=null;let A0m=null;let AVk=null;let AO1=null;let A6a=null;let AXt=null;let A0E=null;let A3b=null;let A$E=null;let A$l=null;let A6S=null;let AUm=null;let A4f=null;let AJ6=null;let AWb=null;let APS=null;let A2I=null;let AZi=null;let AXd=null;let AYF=null;let A8S=null;let AWM=null;let AQj=null;let AUk=null;let AXr=null;let A2N=null;let A43=null;let AWX=null;let AUa=null;let A8A=null;let AI6=null;let AYa=null;let AYJ
=null;let A3N=null;let AWA=null;let ANc=null;let A4s=null;let A8c=null;let A35=null;let ASW=null;let ARt=null;let A5t=null;let AXW=null;let ARz=null;let AJ8=null;let A$u=null;let A52=null;let AYR=null;let AVT=null;let A2s=null;let ALM=null;let ATA=null;let A9a=null;let AOM=null;let AMD=null;let ASg=null;let AX$=null;let AOk=null;let A3L=null;let AT3=null;let AUZ=null;let AZj=null;let A61=null;let AYr=null;let AW8=null;let ATN=null;let AOp=null;let A0o=null;let AKY=null;let A$k=null;let AXY=null;let A8l=null;let AJz
=null;let A44=null;let A4i=null;let A9U=null;let ALo=null;let A4r=null;let APA=null;let APo=null;let A1X=null;let AWu=null;let ATq=null;let AMk=null;let A5M=null;let A4G=null;let APE=null;let AKh=null;let AP8=null;let A5r=null;let A5o=null;let AM_=null;let A2d=null;let AMj=null;let A3f=null;let A4z=null;let A3o=null;let A4X=null;let AJK=null;let ATk=null;let AXK=null;let AJj=null;let AJx=null;let A93=null;let A68=null;let AKN=null;let ARk=null;let A9M=null;let ALE=null;let AMg=null;let A1Z=null;let ARa=null;let AL$
=null;let AY$=null;let ASD=null;let AX4=null;let ARw=null;let A8$=null;let ANm=null;let APz=null;let APj=null;let AMw=null;let A3i=null;let A$a=null;let AR2=null;let A8j=null;let AKH=null;let AMS=null;let A5h=null;let AWC=null;let AU1=null;let AVh=null;let AWP=null;let A7w=null;let AN6=null;let ATZ=null;let A81=null;let A03=null;let AU5=null;let AWG=null;let AT$=null;let AVu=null;let AMQ=null;let AOJ=null;let AJ4=null;let A1F=null;let ATy=null;let A$i=null;let AS8=null;let AVv=null;let AXw=null;let ALD=null;let AP9
=null;let AO$=null;let A2t=null;let ALe=null;let AL0=null;let AOC=null;let A9h=null;let AYq=null;let A1z=null;let ARp=null;let AT6=null;let ATx=null;let A1I=null;let APg=null;let ART=null;let A7d=null;let AMB=null;let A7h=null;let A1D=null;let A5P=null;let AYO=null;let A$j=null;let AI3=null;let A$p=null;let AKi=null;let AUU=null;let AOX=null;let A6w=null;let A1Q=null;let AVV=null;let ASC=null;let AN7=null;let AUO=null;let A0W=null;let A7N=null;let ARA=null;let A9v=null;let A62=null;let A1r=null;let A$y=null;let A2k
=null;let AM4=null;let AUv=null;let AWQ=null;let A2r=null;let AMe=null;let A8f=null;let AMN=null;let A2p=null;let A6O=null;let ASA=null;let A50=null;let AYL=null;let A09=null;let A2B=null;let AQI=null;let AMo=null;let ALG=null;let AXs=null;let ANb=null;let A7X=null;let AN8=null;let A5X=null;let AIu=null;let A2X=null;let AOs=null;let A2D=null;let AKV=null;let Bgz=null;let Bfm=null;let Uj=()=>{Uj=Bj(J);A8r();}
let K=a=>{let b=new J();ACC(b,a);return b;}
let L0=b=>{Uj();b=Bk(b,B(4220496899, 2882110344));b=W(Bk(b,T(b,32)),B(3946075501, 3198297593));b=W(Bk(b,T(b,29)),B(3946075501, 3198297593));b=W(Bk(b,T(b,32)),B(3946075501, 3198297593));return Bk(b,T(b,29));}
let ACC=(a,b)=>{Uj();a.H1=L0(b===null?M:Zx(I(1),b,0,b.oc.length));}
let Vi=(b,c)=>{let d;Uj();d=W(b,c);return Bk(d,T(d,30));}
let Zx=(b,c,d,e)=>{let f,g,h,i;Uj();if(c!==null&&d>=0&&e>=0&&d<e){f=c.oc.length;if(e<f)f=e;g=d+3|0;c:{o:{e:{while(true){if(g>=f){l:{switch(f&3){case 0:b=W(B3(B(2696161499, 3875765969),b),U(B(3296531023, 495865383),b));b=Bk(b,T(b,30));break l;case 1:h=B3(B(3025523045, 3947146442),b);d=(d+f|0)-1|0;if(d>=0&&d<c.oc.length){b=W(h,Bk(B(1966558403, 1486448076),I(c.oc.charCodeAt(d))));b=Bk(b,T(b,30));break l;}c=new Ba;c.n_=1;c.oa=1;E(c);case 2:d=d+f|0;e=d-2|0;if(e>=0&&e<c.oc.length){b=B3(I(c.oc.charCodeAt(e)),b);d=
d-1|0;if(d>=0&&d<c.oc.length){b=W(b,Bk(B(2025677871, 2692095332),I(c.oc.charCodeAt(d))));b=Bk(b,T(b,30));break l;}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);case 3:d=d+f|0;e=d-3|0;if(e>=0&&e<c.oc.length){b=U(Vi(B3(I(c.oc.charCodeAt(e)),b),Bk(B(2626209507, 2394712816),I(Dz(c,d-2|0)))),Vi(Bk(B(3025523045, 3947146442),b),Bk(B(3296531023, 495865383),I(Dz(c,d-1|0)))));break l;}c=new Ba;BY(c);E(c);default:}}b=W(Bk(b,I(f)),Bk(BP(b,16),B(2025677871, 2692095332)));return Bk(Bk(b,B8(BP(b,33),T(b,31))),B8(BP(b,
19),T(b,45)));}e=g-3|0;if(e<0)break c;if(e>=c.oc.length)break c;i=Bk(I(c.oc.charCodeAt(e)),B(2696161499, 3875765969));e=g-2|0;if(e<0)break o;if(e>=c.oc.length)break o;i=W(i,Bk(I(c.oc.charCodeAt(e)),B(2626209507, 2394712816)));b=B3(Bk(i,T(i,30)),b);e=g-1|0;if(e<0)break e;if(e>=c.oc.length)break e;i=Bk(I(c.oc.charCodeAt(e)),B(1966558403, 1486448076));if(g<0)break;if(g>=c.oc.length)break;i=W(i,Bk(I(c.oc.charCodeAt(g)),B(3296531023, 495865383)));b=W(b,Bk(i,T(i,30)));b=Bk(b,T(b,30));g=g+4|0;}c=new Ba;c.n_=1;c.oa
=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}c=new Ba;c.n_=1;c.oa=1;E(c);}return M;}
let A8r=()=>{let b;AKs=K(C(746));ASt=K(C(747));AKz=K(C(748));AOK=K(C(749));A0Y=K(C(750));A2n=K(C(751));ASU=K(C(752));AIV=K(C(753));A8n=K(C(754));A12=K(C(755));A7P=K(C(756));ALq=K(C(757));AKT=K(C(758));AKk=K(C(759));APb=K(C(760));AKU=K(C(761));A0i=K(C(762));A3G=K(C(763));AW_=K(C(764));APJ=K(C(765));A3B=K(C(766));AWD=K(C(767));A2Y=K(C(768));ARQ=K(C(769));AUN=K(C(770));A$e=K(C(771));A1B=K(C(772));AVJ=K(C(773));ASu=K(C(774));A1N=K(C(775));A8J=K(C(776));AVf=K(C(777));A3a=K(C(778));A$o=K(C(779));A7t=K(C(780));A77
=K(C(781));A6o=K(C(782));AQx=K(C(783));A9Y=K(C(784));A3n=K(C(785));AK0=K(C(786));ANO=K(C(787));A7g=K(C(788));AZe=K(C(789));A3d=K(C(790));ATg=K(C(791));AKQ=K(C(792));AWm=K(C(793));A0y=K(C(794));A9e=K(C(795));AQK=K(C(796));AOo=K(C(797));ATm=K(C(798));A0C=K(C(799));A2u=K(C(800));AUV=K(C(801));AZh=K(C(802));ARH=K(C(803));A0K=K(C(804));AVQ=K(C(805));AL8=K(C(806));AQB=K(C(807));ASc=K(C(808));AUu=K(C(809));AJC=K(C(810));A4U=K(C(811));AOB=K(C(812));A0F=K(C(813));A0j=K(C(814));A$n=K(C(815));AZY=K(C(816));AZ2=K(C(817));A16
=K(C(818));ARj=K(C(819));AS4=K(C(820));A$D=K(C(821));A4b=K(C(822));A0t=K(C(823));AVg=K(C(824));AS0=K(C(825));AUd=K(C(826));ATp=K(C(827));AXm=K(C(828));A2j=K(C(829));AV$=K(C(830));A5j=K(C(831));A5b=K(C(832));AV6=K(C(833));A69=K(C(834));A73=K(C(835));AU3=K(C(836));ANn=K(C(837));A0U=K(C(838));A0O=K(C(839));AKe=K(C(840));AJd=K(C(841));AMt=K(C(842));AKG=K(C(843));APr=K(C(844));A04=K(C(845));A0Z=K(C(846));ARq=K(C(847));A3$=K(C(848));A08=K(C(849));A4J=K(C(850));AZC=K(C(851));A3Z=K(C(852));ANq=K(C(853));A2Z=K(C(854));AUi
=K(C(855));A8X=K(C(856));A0T=K(C(857));A4O=K(C(858));AUS=K(C(859));AVo=K(C(860));A5q=K(C(861));AVF=K(C(862));ATj=K(C(863));AWo=K(C(864));A2v=K(C(865));AZS=K(C(866));AMG=K(C(867));A6M=K(C(868));A9D=K(C(869));ANW=K(C(870));AS_=K(C(871));A7A=K(C(872));A8w=K(C(873));A8Y=K(C(874));AI9=K(C(875));AYm=K(C(876));ATv=K(C(877));A4W=K(C(878));ALy=K(C(879));AUB=K(C(880));A1d=K(C(881));AXP=K(C(882));AK_=K(C(883));AZ7=K(C(884));AQO=K(C(885));ASe=K(C(886));ANg=K(C(887));A9J=K(C(888));ASm=K(C(889));A99=K(C(890));A2$=K(C(891));AJf
=K(C(892));AQA=K(C(893));APh=K(C(894));A4N=K(C(895));A7n=K(C(896));APQ=K(C(897));AQH=K(C(898));AI2=K(C(899));APN=K(C(900));A2w=K(C(901));AOb=K(C(902));ANt=K(C(903));ARh=K(C(904));AY9=K(C(905));AXh=K(C(906));A64=K(C(907));A37=K(C(908));AZQ=K(C(909));APl=K(C(910));AVW=K(C(911));AML=K(C(912));AJt=K(C(913));AWB=K(C(914));A8s=K(C(915));A59=K(C(916));AV3=K(C(917));AP_=K(C(918));A28=K(C(919));AQQ=K(C(920));A79=K(C(921));A5x=K(C(922));AYk=K(C(923));ARU=K(C(924));AWj=K(C(925));A58=K(C(926));AY4=K(C(927));AXc=K(C(928));AQU
=K(C(929));APi=K(C(930));A2m=K(C(931));A6C=K(C(932));AOn=K(C(933));AOH=K(C(934));AL1=K(C(935));ALQ=K(C(936));A0a=K(C(937));APM=K(C(938));AUM=K(C(939));A$h=K(C(940));A5g=K(C(941));A7W=K(C(942));ATW=K(C(943));APR=K(C(944));A9k=K(C(945));A1Y=K(C(946));ATU=K(C(947));A3y=K(C(948));ARO=K(C(949));AKE=K(C(950));AOi=K(C(951));AQV=K(C(952));AJ2=K(C(953));A0m=K(C(954));AVk=K(C(955));AO1=K(C(956));A6a=K(C(957));AXt=K(C(958));A0E=K(C(959));A3b=K(C(960));A$E=K(C(961));A$l=K(C(962));A6S=K(C(963));AUm=K(C(964));A4f=K(C(965));AJ6
=K(C(966));AWb=K(C(967));APS=K(C(968));A2I=K(C(969));AZi=K(C(970));AXd=K(C(971));AYF=K(C(972));A8S=K(C(973));AWM=K(C(974));AQj=K(C(975));AUk=K(C(976));AXr=K(C(977));A2N=K(C(978));A43=K(C(979));AWX=K(C(980));AUa=K(C(981));A8A=K(C(982));AI6=K(C(983));AYa=K(C(984));AYJ=K(C(985));A3N=K(C(986));AWA=K(C(987));ANc=K(C(988));A4s=K(C(989));A8c=K(C(990));A35=K(C(991));ASW=K(C(992));ARt=K(C(993));A5t=K(C(994));AXW=K(C(995));ARz=K(C(996));AJ8=K(C(997));A$u=K(C(998));A52=K(C(999));AYR=K(C(1000));AVT=K(C(1001));A2s=K(C(1002));ALM
=K(C(1003));ATA=K(C(1004));A9a=K(C(1005));AOM=K(C(1006));AMD=K(C(1007));ASg=K(C(1008));AX$=K(C(1009));AOk=K(C(1010));A3L=K(C(1011));AT3=K(C(1012));AUZ=K(C(1013));AZj=K(C(1014));A61=K(C(1015));AYr=K(C(1016));AW8=K(C(1017));ATN=K(C(1018));AOp=K(C(1019));A0o=K(C(1020));AKY=K(C(1021));A$k=K(C(1022));AXY=K(C(1023));A8l=K(C(1024));AJz=K(C(1025));A44=K(C(1026));A4i=K(C(1027));A9U=K(C(1028));ALo=K(C(1029));A4r=K(C(1030));APA=K(C(1031));APo=K(C(1032));A1X=K(C(1033));AWu=K(C(1034));ATq=K(C(1035));AMk=K(C(1036));A5M=K(C(1037));A4G
=K(C(1038));APE=K(C(1039));AKh=K(C(1040));AP8=K(C(1041));A5r=K(C(1042));A5o=K(C(1043));AM_=K(C(1044));A2d=K(C(1045));AMj=K(C(1046));A3f=K(C(1047));A4z=K(C(1048));A3o=K(C(1049));A4X=K(C(1050));AJK=K(C(1051));ATk=K(C(1052));AXK=K(C(1053));AJj=K(C(1054));AJx=K(C(1055));A93=K(C(1056));A68=K(C(1057));AKN=K(C(1058));ARk=K(C(1059));A9M=K(C(1060));ALE=K(C(1061));AMg=K(C(1062));A1Z=K(C(1063));ARa=K(C(1064));AL$=K(C(1065));AY$=K(C(1066));ASD=K(C(1067));AX4=K(C(1068));ARw=K(C(1069));A8$=K(C(1070));ANm=K(C(1071));APz=K(C(1072));APj
=K(C(1073));AMw=K(C(1074));A3i=K(C(1075));A$a=K(C(1076));AR2=K(C(1077));A8j=K(C(1078));AKH=K(C(1079));AMS=K(C(1080));A5h=K(C(1081));AWC=K(C(1082));AU1=K(C(1083));AVh=K(C(1084));AWP=K(C(1085));A7w=K(C(1086));AN6=K(C(1087));ATZ=K(C(1088));A81=K(C(1089));A03=K(C(1090));AU5=K(C(1091));AWG=K(C(1092));AT$=K(C(1093));AVu=K(C(1094));AMQ=K(C(1095));AOJ=K(C(1096));AJ4=K(C(1097));A1F=K(C(1098));ATy=K(C(1099));A$i=K(C(1100));AS8=K(C(1101));AVv=K(C(1102));AXw=K(C(1103));ALD=K(C(1104));AP9=K(C(1105));AO$=K(C(1106));A2t=K(C(1107));ALe
=K(C(1108));AL0=K(C(1109));AOC=K(C(1110));A9h=K(C(1111));AYq=K(C(1112));A1z=K(C(1113));ARp=K(C(1114));AT6=K(C(1115));ATx=K(C(1116));A1I=K(C(1117));APg=K(C(1118));ART=K(C(1119));A7d=K(C(1120));AMB=K(C(1121));A7h=K(C(1122));A1D=K(C(1123));A5P=K(C(1124));AYO=K(C(1125));A$j=K(C(1126));AI3=K(C(1127));A$p=K(C(1128));AKi=K(C(1129));AUU=K(C(1130));AOX=K(C(1131));A6w=K(C(1132));A1Q=K(C(1133));AVV=K(C(1134));ASC=K(C(1135));AN7=K(C(1136));AUO=K(C(1137));A0W=K(C(1138));A7N=K(C(1139));ARA=K(C(1140));A9v=K(C(1141));A62=K(C(1142));A1r
=K(C(1143));A$y=K(C(1144));A2k=K(C(1145));AM4=K(C(1146));AUv=K(C(1147));AWQ=K(C(1148));A2r=K(C(1149));AMe=K(C(1150));A8f=K(C(1151));AMN=K(C(1152));A2p=K(C(1153));A6O=K(C(1154));ASA=K(C(1155));A50=K(C(1156));AYL=K(C(1157));A09=K(C(1158));A2B=K(C(1159));AQI=K(C(1160));AMo=K(C(1161));ALG=K(C(1162));AXs=K(C(1163));ANb=K(C(1164));A7X=K(C(1165));AN8=K(C(1166));A5X=K(C(1167));AIu=K(C(1168));A2X=K(C(1169));AOs=K(C(1170));A2D=K(C(1171));AKV=K(C(1172));b=K(C(1173));Bgz=b;Bfm=R(J,[AKs,ASt,AKz,AOK,A0Y,A2n,ASU,AIV,A8n,A12,
A7P,ALq,AKT,AKk,APb,AKU,A0i,A3G,AW_,APJ,A3B,AWD,A2Y,ARQ,AUN,A$e,A1B,AVJ,ASu,A1N,A8J,AVf,A3a,A$o,A7t,A77,A6o,AQx,A9Y,A3n,AK0,ANO,A7g,AZe,A3d,ATg,AKQ,AWm,A0y,A9e,AQK,AOo,ATm,A0C,A2u,AUV,AZh,ARH,A0K,AVQ,AL8,AQB,ASc,AUu,AJC,A4U,AOB,A0F,A0j,A$n,AZY,AZ2,A16,ARj,AS4,A$D,A4b,A0t,AVg,AS0,AUd,ATp,AXm,A2j,AV$,A5j,A5b,AV6,A69,A73,AU3,ANn,A0U,A0O,AKe,AJd,AMt,AKG,APr,A04,A0Z,ARq,A3$,A08,A4J,AZC,A3Z,ANq,A2Z,AUi,A8X,A0T,A4O,AUS,AVo,A5q,AVF,ATj,AWo,A2v,AZS,AMG,A6M,A9D,ANW,AS_,A7A,A8w,A8Y,AI9,AYm,ATv,A4W,ALy,AUB,A1d,AXP,AK_,
AZ7,AQO,ASe,ANg,A9J,ASm,A99,A2$,AJf,AQA,APh,A4N,A7n,APQ,AQH,AI2,APN,A2w,AOb,ANt,ARh,AY9,AXh,A64,A37,AZQ,APl,AVW,AML,AJt,AWB,A8s,A59,AV3,AP_,A28,AQQ,A79,A5x,AYk,ARU,AWj,A58,AY4,AXc,AQU,APi,A2m,A6C,AOn,AOH,AL1,ALQ,A0a,APM,AUM,A$h,A5g,A7W,ATW,APR,A9k,A1Y,ATU,A3y,ARO,AKE,AOi,AQV,AJ2,A0m,AVk,AO1,A6a,AXt,A0E,A3b,A$E,A$l,A6S,AUm,A4f,AJ6,AWb,APS,A2I,AZi,AXd,AYF,A8S,AWM,AQj,AUk,AXr,A2N,A43,AWX,AUa,A8A,AI6,AYa,AYJ,A3N,AWA,ANc,A4s,A8c,A35,ASW,ARt,A5t,AXW,ARz,AJ8,A$u,A52,AYR,AVT,A2s,ALM,ATA,A9a,AOM,AMD,ASg,AX$,AOk,A3L,
AT3,AUZ,AZj,A61,AYr,AW8,ATN,AOp,A0o,AKY,A$k,AXY,A8l,AJz,A44,A4i,A9U,ALo,A4r,APA,APo,A1X,AWu,ATq,AMk,A5M,A4G,APE,AKh,AP8,A5r,A5o,AM_,A2d,AMj,A3f,A4z,A3o,A4X,AJK,ATk,AXK,AJj,AJx,A93,A68,AKN,ARk,A9M,ALE,AMg,A1Z,ARa,AL$,AY$,ASD,AX4,ARw,A8$,ANm,APz,APj,AMw,A3i,A$a,AR2,A8j,AKH,AMS,A5h,AWC,AU1,AVh,AWP,A7w,AN6,ATZ,A81,A03,AU5,AWG,AT$,AVu,AMQ,AOJ,AJ4,A1F,ATy,A$i,AS8,AVv,AXw,ALD,AP9,AO$,A2t,ALe,AL0,AOC,A9h,AYq,A1z,ARp,AT6,ATx,A1I,APg,ART,A7d,AMB,A7h,A1D,A5P,AYO,A$j,AI3,A$p,AKi,AUU,AOX,A6w,A1Q,AVV,ASC,AN7,AUO,A0W,A7N,
ARA,A9v,A62,A1r,A$y,A2k,AM4,AUv,AWQ,A2r,AMe,A8f,AMN,A2p,A6O,ASA,A50,AYL,A09,A2B,AQI,AMo,ALG,AXs,ANb,A7X,AN8,A5X,AIu,A2X,AOs,A2D,AKV,b]);}
let Q4=G();
let ABa=null;let BeB=()=>{BeB=Bj(Q4);ATE();}
let ATE=()=>{let b,c,d,e,f;b=new Jz;c=JZ(16);b.tA=0;d=Bt(Gt,c);e=d.data;b.qq=d;b.zE=0.75;b.uy=e.length*0.75|0;ABa=b;e=Bt(Fm,6).data;BdW();e[0]=AOa;e[1]=AUG;e[2]=ASJ;e[3]=ASh;e[4]=AS5;e[5]=ATo;c=e.length;f=0;while(f<c){b=e[f];JV(ABa,b.ty,b);f=f+1|0;}}
let G_=G();
let AOa=null;let AUG=null;let ASJ=null;let ASh=null;let AS5=null;let ATo=null;let BdW=()=>{BdW=Bj(G_);ARl();}
let ARl=()=>{let b,c,d,e,f,g,h,i;Do();AOa=Du;b=new PO;c=Bt(P,0);d=c.data;EG(C(1174));e=d.length;f=0;while(f<e){EG(d[f]);f=f+1|0;}b.ty=C(1174);b.w5=c.t();AUG=b;b=new Pd;c=Bt(P,0);d=c.data;EG(C(1175));e=d.length;f=0;while(f<e){EG(d[f]);f=f+1|0;}b.ty=C(1175);b.w5=c.t();ASJ=b;g=new JA;c=Bt(P,0);d=c.data;EG(C(1176));h=d.length;i=0;while(i<h){EG(d[i]);i=i+1|0;}g.ty=C(1176);g.w5=c.t();g.B4=1;g.A8=0;ASh=g;b=new JA;c=Bt(P,0);d=c.data;EG(C(1177));h=d.length;i=0;while(i<h){EG(d[i]);i=i+1|0;}b.ty=C(1177);b.w5=c.t();b.B4
=0;b.A8=0;AS5=b;b=new JA;c=Bt(P,0);d=c.data;EG(C(1178));h=d.length;i=0;while(i<h){EG(d[i]);i=i+1|0;}b.ty=C(1178);b.w5=c.t();b.B4=0;b.A8=1;ATo=b;}
let PO=G(Fm);
let AW4=a=>{let b,c,d,e,f;b=new Uh;c=BW(1);d=c.data;d[0]=63;EM();e=Gz;b.uU=e;b.uE=e;f=d.length;if(f&&f>=b.tw){b.Ba=a;b.xX=c.t();b.x7=1.0;b.tw=1.0;b.yT=H(512);b.xL=BW(512);return b;}e=new V;KW(e,C(486));E(e);}
let Pd=G(Fm);
let A8b=a=>{let b,c,d,e,f;b=new UV;c=BW(1);d=c.data;d[0]=63;EM();e=Gz;b.uU=e;b.uE=e;f=d.length;if(f&&f>=b.tw){b.Ba=a;b.xX=c.t();b.x7=1.0;b.tw=1.0;b.yT=H(512);b.xL=BW(512);return b;}e=new V;KW(e,C(486));E(e);}
function JA(){let a=this;Fm.call(a);a.B4=0;a.A8=0;}
let AJb=a=>{let b,c,d,e,f,g,h;b=new SB;c=a.B4;d=a.A8;e=BW(1);f=e.data;f[0]=63;EM();g=Gz;b.uU=g;b.uE=g;h=f.length;if(h&&h>=b.tw){b.Ba=a;b.xX=e.t();b.x7=2.0;b.tw=4.0;b.yT=H(512);b.xL=BW(512);b.Ei=c;b.C_=d;return b;}g=new V;KW(g,C(486));E(g);}
let AGP=G();
let Pi=(b,c,d)=>{let e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=DB(Be(I(b.data[e]),B(4294967295, 0)),Be(I(c[e]),B(4294967295, 0)))?1:(-1);}return d;}
let Ks=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.om;e=c.om;if(!d)return c;if(!e)return b;f=b.ox;g=c.ox;if((f+g|0)==2){h=Be(I(b.ok.data[0]),B(4294967295, 0));i=Be(I(c.ok.data[0]),B(4294967295, 0));if(d!=e)return G9(d>=0?B3(h,i):B3(i,h));j=U(h,i);k=Z(j);l=GE(j);if(!l){b=new BT;B6();b.oN=(-2);b.om=d;b.ox=1;m=X(1);m.data[0]=k;b.ok=m;}else{b=new BT;m=E2([k,l]);B6();b.oN=(-2);b.om=d;b.ox=2;b.ok=m;}return b;}if(d==e){if(f<g){m=c.ok;n=b.ok;o=X(g+1|0);Ny(o,m,g,n,f);}else{n=b.ok;m=c.ok;o=X(f+1|0);Ny(o,n,f,m,g);}}else
{p=B9(f,g);p=!p?Pi(b.ok,c.ok,f):p<=0?(-1):1;if(!p){B6();return DF;}if(p!=1){m=c.ok;n=b.ok;o=X(g);L3(o,m,g,n,f);d=e;}else{m=b.ok;n=c.ok;o=X(f);L3(o,m,f,n,g);}}m=o.data;q=new BT;e=m.length;B6();q.oN=(-2);q.om=d;q.ox=e;q.ok=o;DA(q);return q;}
let Ny=(b,c,d,e,f)=>{let g,h,i,j;g=b.data;b=e.data;c=c.data;h=U(Be(I(c[0]),B(4294967295, 0)),Be(I(b[0]),B(4294967295, 0)));g[0]=Z(h);i=Gn(h,32);if(d<f){j=1;while(j<d){h=U(i,U(Be(I(c[j]),B(4294967295, 0)),Be(I(b[j]),B(4294967295, 0))));g[j]=Z(h);i=Gn(h,32);j=j+1|0;}while(j<f){h=U(i,Be(I(b[j]),B(4294967295, 0)));g[j]=Z(h);i=Gn(h,32);j=j+1|0;}}else{j=1;while(j<f){h=U(i,U(Be(I(c[j]),B(4294967295, 0)),Be(I(b[j]),B(4294967295, 0))));g[j]=Z(h);i=Gn(h,32);j=j+1|0;}while(j<d){h=U(i,Be(I(c[j]),B(4294967295, 0)));g[j]
=Z(h);i=Gn(h,32);j=j+1|0;}}if(Ej(i,M))g[j]=Z(i);}
let IC=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=b.om;e=c.om;if(!e)return b;if(!d){if(!e)b=c;else{b=new BT;d= -e|0;e=c.ox;f=c.ok;B6();b.oN=(-2);b.om=d;b.ox=e;b.ok=f;}return b;}g=b.ox;h=c.ox;if((g+h|0)==2){i=Be(I(b.ok.data[0]),B(4294967295, 0));j=Be(I(c.ok.data[0]),B(4294967295, 0));if(d<0)i=HI(i);if(e<0)j=HI(j);return G9(B3(i,j));}k=B9(g,h);l=!k?Pi(b.ok,c.ok,g):k<=0?(-1):1;if(l==(-1)){k= -e|0;if(d==e){f=c.ok;m=b.ok;n=X(h);L3(n,f,h,m,g);}else{f=c.ok;m=b.ok;n=X(h+1|0);Ny(n,f,h,m,g);}}else if(d!=e){f=b.ok;m=c.ok;n
=X(g+1|0);Ny(n,f,g,m,h);k=d;}else{if(!l){B6();return DF;}f=b.ok;m=c.ok;n=X(g);L3(n,f,g,m,h);k=d;}f=n.data;o=new BT;d=f.length;B6();o.oN=(-2);o.om=k;o.ox=d;o.ok=n;DA(o);return o;}
let L3=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=M;h=0;while(h<f){i=b.data;j=e.data;k=U(g,B3(Be(I(c.data[h]),B(4294967295, 0)),Be(I(j[h]),B(4294967295, 0))));i[h]=Z(k);g=Gn(k,32);h=h+1|0;}while(h<d){l=b.data;k=U(g,Be(I(c.data[h]),B(4294967295, 0)));l[h]=Z(k);g=Gn(k,32);h=h+1|0;}}
let YT=G();
let A3W=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=f.data;i=X(e+1|0);j=X(g+1|0);k=g-1|0;l=Ee(h[k]);if(l){El(j,f,0,l);El(i,d,0,l);}else{CX(d,0,i,0,e);CX(f,0,j,0,g);}h=j.data;f=i.data;m=h[k];n=c-1|0;o=g-2|0;p=Be(I(m),B(4294967295, 0));while(n>=0){k:{if(f[e]==m)q=(-1);else{r=A1a(U(BP(Be(I(f[e]),B(4294967295, 0)),32),Be(I(f[e-1|0]),B(4294967295, 0))),m);q=Z(r);s=GE(r);if(q){t=0;q=q+1|0;while(true){q=q+(-1)|0;if(t)break;u=W(Be(I(q),B(4294967295, 0)),Be(I(h[o]),B(4294967295, 0)));v=I(s);r=U(BP(v,32),
Be(I(f[e-2|0]),B(4294967295, 0)));w=U(Be(v,B(4294967295, 0)),p);if(Ee(GE(w))>=32)s=Z(w);else t=1;if(Ga(Bk(u,B(0, 2147483648)),Bk(r,B(0, 2147483648))))break k;}}}}if(q){c=e-g|0;if(A5s(i,c,j,g,q)){q=q+(-1)|0;v=M;x=0;while(x<g){k=c+x|0;v=U(v,U(Be(I(f[k]),B(4294967295, 0)),Be(I(h[x]),B(4294967295, 0))));f[k]=Z(v);v=T(v,32);x=x+1|0;}}}if(b!==null)b.data[n]=q;e=e+(-1)|0;n=n+(-1)|0;}if(l){AAV(j,g,i,0,l);return j;}CX(i,0,j,0,g);return i;}
let AZ1=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=M;g=Be(I(e),B(4294967295, 0));h=d-1|0;i=I(e>>>1|0);e=e&1;j=BP(g,1);while(h>=0){k=c.data;l=B8(BP(f,32),Be(I(k[h]),B(4294967295, 0)));if(DB(l,M)){m=BS(l,g);f=Dx(l,g);}else{n=T(l,1);m=BS(n,i);f=U(BP(Dx(n,i),1),Be(l,I(1)));if(e){if(Ga(m,f))f=B3(f,m);else if(WX(B3(m,f),g)){f=U(f,B3(j,m));m=B3(m,I(2));}else{f=U(f,B3(g,m));m=B3(m,I(1));}}}b.data[h]=Z(Be(m,B(4294967295, 0)));h=h+(-1)|0;}return Z(f);}
let A1a=(b,c)=>{let d,e,f,g,h;d=Be(I(c),B(4294967295, 0));if(DB(b,M)){e=BS(b,d);f=Dx(b,d);}else{g=T(b,1);h=I(c>>>1|0);e=BS(g,h);f=U(BP(Dx(g,h),1),Be(b,I(1)));if(c&1){if(Ga(e,f))f=B3(f,e);else if(Ga(B3(e,f),d)){f=U(f,B3(d,e));e=B3(e,I(1));}else{f=U(f,B3(BP(d,1),e));e=B3(e,I(2));}}}return B8(BP(f,32),Be(e,B(4294967295, 0)));}
let A5s=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=M;h=M;i=0;j=Be(I(f),B(4294967295, 0));while(i<e){k=d.data;l=b.data;f=k[i];m=Z(g);Gm();g=U(U(W(Be(I(f),B(4294967295, 0)),j),Be(I(m),B(4294967295, 0))),M);m=c+i|0;n=U(B3(Be(I(l[m]),B(4294967295, 0)),Be(g,B(4294967295, 0))),h);l[m]=Z(n);h=Gn(n,32);g=T(g,32);i=i+1|0;}b=b.data;c=c+e|0;j=U(B3(Be(I(b[c]),B(4294967295, 0)),g),h);b[c]=Z(j);return GE(j);}
function R1(){let a=this;D.call(a);a.wa=null;a.sJ=null;a.wK=0;a.wR=0;}
function Ty(){let a=this;D.call(a);a.zl=0;a.ws=0;a.r_=0;a.Ae=M;a.En=null;a.Fm=null;a.HK=M;a.GN=null;}
let O2=G(0);
function UI(){D.call(this);this.IL=null;}
let AFD=G();
let AWr=b=>{let c,d,e,f;while(true){while(true){c=2.0*Math.random()-1.0;d=2.0*Math.random()-1.0;e=c*c+d*d;if(e>=1.0)continue;else break;}if(e===0.0)continue;else break;}f=Cf((-2.0)*C$(e)/e);return BeQ([c*f,d*f]);}
let ABM=G();
let ABg=G();
let Yp=(b,c)=>{if(c.om&&b.om){B6();if(Kf(c,J2))return b;if(Kf(b,J2))return c;if(b.om>0){if(c.om<=0)return AG0(b,c);return A9F(b,c);}if(c.om>0)return AG0(c,b);if(b.ox<=c.ox)return ZR(c,b);return ZR(b,c);}B6();return DF;}
let A9F=(b,c)=>{let d,e,f,g,h,i,j;d=b.ox;e=c.ox;if(d<e)e=d;if(b.oN==(-2)){if(!b.om)d=(-1);else{d=0;while(!b.ok.data[d]){d=d+1|0;}}b.oN=d;}f=b.oN;if(c.oN==(-2)){if(!c.om)d=(-1);else{d=0;while(!c.ok.data[d]){d=d+1|0;}}c.oN=d;}g=c.oN;if(f>g)g=f;if(g>=e){B6();return DF;}h=X(e);i=h.data;while(g<e){i[g]=b.ok.data[g]&c.ok.data[g];g=g+1|0;}j=new BT;B6();j.oN=(-2);j.om=1;j.ox=e;j.ok=h;DA(j);return j;}
let AG0=(b,c)=>{let d,e,f,g,h,i,j;if(b.oN==(-2)){if(!b.om)d=(-1);else{d=0;while(!b.ok.data[d]){d=d+1|0;}}b.oN=d;}e=b.oN;if(c.oN==(-2)){if(!c.om)d=(-1);else{d=0;while(!c.ok.data[d]){d=d+1|0;}}c.oN=d;}f=c.oN;d=b.ox;if(f>=d){B6();return DF;}g=X(d);if(e<=f)e=f;if(e==f){g.data[e]=( -c.ok.data[e]|0)&b.ok.data[e];e=e+1|0;}f=c.ox;h=f>=d?d:f;i=g.data;while(e<h){i[e]=(c.ok.data[e]^(-1))&b.ok.data[e];e=e+1|0;}i:{if(e>=f)while(true){if(e>=d)break i;i[e]=b.ok.data[e];e=e+1|0;}}j=new BT;B6();j.oN=(-2);j.om=1;j.ox=d;j.ok=
g;DA(j);return j;}
let ZR=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;if(b.oN==(-2)){if(!b.om)d=(-1);else{d=0;while(!b.ok.data[d]){d=d+1|0;}}b.oN=d;}e=b.oN;if(c.oN==(-2)){if(!c.om)d=(-1);else{d=0;while(!c.ok.data[d]){d=d+1|0;}}c.oN=d;}f=c.oN;d=c.ox;if(e>=d)return b;g=B9(f,e);if(g>0)e=f;h=g>0?( -c.ok.data[e]|0)&(b.ok.data[e]^(-1)):g>=0?( -c.ok.data[e]|0)&( -b.ok.data[e]|0):(c.ok.data[e]^(-1))&( -b.ok.data[e]|0);if(!h){e=e+1|0;i:{while(e<d){h=(b.ok.data[e]|c.ok.data[e])^(-1);if(h)break i;e=e+1|0;}}if(!h){bq:{while(true){g=b.ox;if(e>=g)break;h
=b.ok.data[e]^(-1);if(h)break bq;e=e+1|0;}}if(!h){d=g+1|0;i=X(d);i.data[d-1|0]=1;j=new BT;B6();j.oN=(-2);j.om=(-1);j.ox=d;j.ok=i;return j;}}}k=b.ox;l=X(k);m=l.data;m[e]= -h|0;h=e+1|0;while(h<d){m[h]=b.ok.data[h]|c.ok.data[h];h=h+1|0;}while(h<k){m[h]=b.ok.data[h];h=h+1|0;}j=new BT;B6();j.oN=(-2);j.om=(-1);j.ox=k;j.ok=l;return j;}
function Ut(){let a=this;D.call(a);a.Au=null;a.HD=null;a.Gr=0;a.CK=0;}
let AEj=(a,b)=>{let c;c=a.Au;return (c.oe-c.of|0)<b?0:1;}
let ACo=(a,b)=>{let c;c=a.HD;return (c.oe-c.of|0)<b?0:1;}
let GP=G(FF);
let NQ=G(G1);
function Pn(){let a=this;Ew.call(a);a.rm=null;a.IK=null;}
let LS=G(FW);
let Mt=G(FW);
let RW=G(FW);
function AFv(){let a=this;D.call(a);a.GL=0;a.JO=0;a.Hw=null;}
let Ba9=(a,b)=>{let c=new AFv();AMh(c,a,b);return c;}
let AMh=(a,b,c)=>{a.Hw=b;a.JO=c;a.GL=c;}
let AP0=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.Hw;c=a.GL;b=b.qT;d=b.qY;if(!d){b=new Cb;b.n_=1;b.oa=1;Bu(b);E(b);}if(c>=0){e=B9(c,b.r5);if(e<0){k:{f=b.pF.data;g=c*2|0;if(f[g]<0)b=null;else{b=b.sy;if(!d){b=new Cb;b.n_=1;b.oa=1;Bu(b);E(b);}if(c>=0&&e<0){h=f[g];if(!d){b=new Cb;b.n_=1;b.oa=1;Bu(b);E(b);}if(c<0)break k;if(e>=0)break k;b=Cw(b,h,f[g+1|0]);}else{b=new O;S();i=new L;Dn(i);i.ob=H(16);N(i,i.n$,c,10);j=new P;f=i.ob;k=f.data;h=i.n$;Dn(j);KZ(0,h,k.length);j.oc=Q(f.data,0,h);b.n_=1;b.oa=1;Bu(b);b.od=j;E(b);}}return b;}b
=new O;S();i=new L;Dn(i);i.ob=H(16);N(i,i.n$,c,10);j=new P;f=i.ob;k=f.data;h=i.n$;Dn(j);KZ(0,h,k.length);j.oc=Q(f.data,0,h);b.n_=1;b.oa=1;Bu(b);b.od=j;E(b);}}b=new O;S();i=new L;Dn(i);i.ob=H(16);N(i,i.n$,c,10);j=new P;f=i.ob;k=f.data;h=i.n$;Dn(j);KZ(0,h,k.length);j.oc=Q(f.data,0,h);b.n_=1;b.oa=1;Bu(b);b.od=j;E(b);}
let Uh=G(FX);
let ANX=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j>=d){n=h.wa;if(!((n.oe-n.of|0)<2?0:1)){i=DX;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new CZ;i.o8=2;i.pw=1;break b;}j=j+(-1)|0;i=new CZ;i.o8=3;i.pw=2;break b;}if(m!=56320?0:1){i=new CZ;i.o8=2;i.pw=1;}if(l>=128){i=new CZ;i.o8=3;i.pw=1;j=j+(-1)|0;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.wK=j;h.wR=f;return i;}
let UV=G(FX);
let ATu=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j==d){n=h.wa;if(!((n.oe-n.of|0)<2?0:1)){i=DX;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new CZ;i.o8=2;i.pw=1;break b;}j=j+(-1)|0;i=new CZ;i.o8=3;i.pw=2;break b;}if(m!=56320?0:1){i=new CZ;i.o8=2;i.pw=1;}if(l>=256){j=j+(-1)|0;i=new CZ;i.o8=3;i.pw=1;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.wK=j;h.wR=f;return i;}
function SB(){let a=this;FX.call(a);a.Ei=0;a.C_=0;}
let A7r=(a,b,c,d,e,f,g,h)=>{let i,j;if(a.Ei){if((f+2|0)>g){h=h.sJ;return !(h.of>=h.oe?0:1)?DK:null;}a.Ei=0;if(!a.C_){i=e.data;j=f+1|0;i[f]=(-2);f=j+1|0;i[j]=(-1);}else{i=e.data;j=f+1|0;i[f]=(-1);f=j+1|0;i[j]=(-2);}}return !a.C_?Wl(a,b,c,d,e,f,g,h):ACf(a,b,c,d,e,f,g,h);}
let ACf=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new CZ;i.o8=2;i.pw=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.sJ;if((m.oe-m.of|0)<2?0:1)break b;i=DK;break b;}j=e.data;c=f+1|0;j[f]=(l&255)<<24>>24;f=c+1|0;j[c]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.wa;if((m.oe-m.of|0)<2?0:1)break b;i=DX;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new CZ;i.o8=2;i.pw=1;break b;}if((f+4|
0)>g){c=c+(-2)|0;m=h.sJ;if((m.oe-m.of|0)<4?0:1)break b;i=DK;break b;}j=e.data;k=f+1|0;j[f]=(l&255)<<24>>24;f=k+1|0;j[k]=l>>8<<24>>24;k=f+1|0;j[f]=(n&255)<<24>>24;f=k+1|0;j[k]=n>>8<<24>>24;}}}h.wK=c;h.wR=f;return i;}
let Wl=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new CZ;i.o8=2;i.pw=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.sJ;if((m.oe-m.of|0)<2?0:1)break b;i=DK;break b;}j=e.data;c=f+1|0;j[f]=l>>8<<24>>24;f=c+1|0;j[c]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.wa;if((m.oe-m.of|0)<2?0:1)break b;i=DX;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new CZ;i.o8=2;i.pw=1;break b;}if((f+4|0)
>g){c=c+(-2)|0;m=h.sJ;if((m.oe-m.of|0)<4?0:1)break b;i=DK;break b;}j=e.data;k=f+1|0;j[f]=l>>8<<24>>24;f=k+1|0;j[k]=(l&255)<<24>>24;k=f+1|0;j[f]=n>>8<<24>>24;f=k+1|0;j[k]=(n&255)<<24>>24;}}}h.wK=c;h.wR=f;return i;}
function Pk(){let a=this;Ew.call(a);a.r0=null;a.AO=null;a.BI=null;a.BZ=null;}
let AJ5=(a,b)=>{a.r0.rm.Ae=BC(b);}
let AXf=(a,b)=>{b=a.r0.rm;b.ws=1;b.r_=0;}
let YN=(a,b,c)=>{Jl(a.BZ,a.AO,a.BI,c);b=a.r0.rm;b.zl=1;b.r_=0;return 0;}
let ADD=G();
function Gb(){D.call(this);this.yA=0;}
let A3X=null;let AQY=null;let AM9=null;let Ko=a=>{return a.yA;}
let AYN=()=>{let b;b=new Gb;b.yA=1;A3X=b;b=new Gb;b.yA=0;AQY=b;AM9=BH(Kp);}
function Kv(){let a=this;D.call(a);a.pe=null;a.oW=0;}
let FS=null;let DQ=(a,b)=>{let c,d,e,f;c=a.pe;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=H(e);CX(c,0,f,0,a.oW);a.pe=f;}
let KP=a=>{let b,c,d;b=a.oW+4|0;if(b>a.pe.data.length)DQ(a,b);c=a.pe.data;d=a.oW;b=d+1|0;a.oW=b;c[d]=110;d=b+1|0;a.oW=d;c[b]=117;b=d+1|0;a.oW=b;c[d]=108;a.oW=b+1|0;c[b]=108;}
let Hx=(a,b)=>{let c,d,e;c=a.oW;if(c==a.pe.data.length)DQ(a,c+1|0);d=a.pe.data;e=a.oW;a.oW=e+1|0;d[e]=b;}
let Oo=(a,b,c,d)=>{let e,f,g,h;if(b==(-2147483648)){e=C(1179).oc.length;b=a.oW+e|0;if(b>a.pe.data.length)DQ(a,b);H4(C(1179),0,e,a.pe,a.oW);a.oW=b;return a;}if(b<0){f=a.oW;if(f==a.pe.data.length)DQ(a,f+1|0);g=a.pe.data;f=a.oW;a.oW=f+1|0;g[f]=45;b= -b|0;}c:{if(c>1){h=b>=0?1:2;f=b;while(true){f=f/10|0;if(!f)break;h=h+1|0;}e=c-h|0;while(true){if(e<=0)break c;c=a.oW;if(c==a.pe.data.length)DQ(a,c+1|0);g=a.pe.data;h=a.oW;a.oW=h+1|0;g[h]=d;e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){c=FS.data[Z(BS(Dx(I(b),B(1410065408, 2)),
I(1000000000)))];d=a.oW;if(d==a.pe.data.length)DQ(a,d+1|0);g=a.pe.data;e=a.oW;a.oW=e+1|0;g[e]=c;}if(b>=100000000){c=FS.data[(b%1000000000|0)/100000000|0];d=a.oW;if(d==a.pe.data.length)DQ(a,d+1|0);g=a.pe.data;e=a.oW;a.oW=e+1|0;g[e]=c;}if(b>=10000000){c=FS.data[(b%100000000|0)/10000000|0];d=a.oW;if(d==a.pe.data.length)DQ(a,d+1|0);g=a.pe.data;e=a.oW;a.oW=e+1|0;g[e]=c;}if(b>=1000000){c=FS.data[(b%10000000|0)/1000000|0];d=a.oW;if(d==a.pe.data.length)DQ(a,d+1|0);g=a.pe.data;e=a.oW;a.oW=e+1|0;g[e]=c;}if(b>=100000)Hx(a,
FS.data[(b%1000000|0)/100000|0]);Hx(a,FS.data[(b%100000|0)/10000|0]);}if(b>=1000)Hx(a,FS.data[(b%10000|0)/1000|0]);if(b>=100)Hx(a,FS.data[(b%1000|0)/100|0]);if(b>=10)Hx(a,FS.data[(b%100|0)/10|0]);Hx(a,FS.data[b%10|0]);return a;}
let AFz=()=>{FS=S$([48,49,50,51,52,53,54,55,56,57]);}
let UU=G();
let CC=null;let AM1=()=>{AM1=Bj(UU);AIF();}
let AH2=()=>{let b,c,d,e,f,g;AM1();b=CC;if(b.vQ){b.vQ=0;c=b.sD.data;d=null;e=0;f=c.length;if(e>f){b=new V;b.n_=1;b.oa=1;E(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}c=b.qa.data;d=null;e=0;f=c.length;if(e>f){b=new V;b.n_=1;b.oa=1;E(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}}FQ();B2(b,C(1180),AJu);B2(CC,C(1181),AEf);B2(CC,C(1182),ADr);B2(CC,C(1183),A2b);B2(CC,C(1184),A5C);B2(CC,C(1185),AWp);B2(CC,C(1186),AVt);B2(CC,C(1187),AXp);B2(CC,C(1188),AUF);B2(CC,C(1189),A9p);B2(CC,C(1190),AR1);B2(CC,C(1191),A8v);B2(CC,C(1192),A1E);B2(CC,
C(1193),A1o);B2(CC,C(1194),ASS);B2(CC,C(1195),AVD);B2(CC,C(1196),AUC);B2(CC,C(1197),A$W);B2(CC,C(1198),AXU);B2(CC,C(1134),A2K);B2(CC,C(1199),A$S);B2(CC,C(1200),A4E);B2(CC,C(1201),AVM);B2(CC,C(1202),AU6);B2(CC,C(1203),AT0);B2(CC,C(1204),AQE);B2(CC,C(1205),AI5);B2(CC,C(1206),AQp);B2(CC,C(1207),ANr);B2(CC,C(1208),A2g);B2(CC,C(1209),A1e);B2(CC,C(1210),AQh);B2(CC,C(1211),A6y);B2(CC,C(1212),A7f);}
let AIF=()=>{CC=F7(51,0.800000011920929);AH2();}
let Lr=G(B0);
let Mj=G(B0);
function L8(){GP.call(this);this.DJ=0;}
let AMU=a=>{let b,c,d,e,f,g,h;b=a.DJ;c=new L;c.ob=H(16);F(c,c.n$,C(1213));N(c,c.n$,b,10);d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
function Lq(){GP.call(this);this.ER=0;}
let AMd=a=>{let b,c,d,e,f,g,h;b=a.ER;c=new L;c.ob=H(16);F(c,c.n$,C(1214));N(c,c.n$,b,10);d=new P;e=c.ob;f=e.data;g=c.n$;S();h=f.length;if(g>=0&&g<=(h-0|0)){d.oc=Q(e.data,0,g);return d;}c=new O;c.n_=1;c.oa=1;Bu(c);E(c);}
let Oh=G();
let ATC=null;let BfS=()=>{BfS=Bj(Oh);AQa();}
let AQa=()=>{let b,c;F9();b=X((AH3.t()).data.length);c=b.data;ATC=b;c[Ih.oi]=1;c[I1.oi]=2;c[IL.oi]=3;c[Hv.oi]=4;c[Q8.oi]=5;}
function HU(){let a=this;E6.call(a);a.th=0;a.sd=null;a.sN=null;a.r7=null;}
let AZq=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new R3;c.tq=a;c.wW=b;c=CK(c,"handleEvent");b.onreadystatechange=c;c=a.r7;d=a.sN;e=new Jm;e.DC=c;e.Bg=d;c=CK(e,"handleEvent");b.onprogress=c;d=a.sd;f=a.th;b.open("GET",Cr(d),!!f);if(a.th){d="arraybuffer";b.responseType=d;}b.send();}
function VH(){let a=this;Ew.call(a);a.BR=null;a.Iy=null;}
let A_M=(a,b)=>{let c=new VH();A82(c,a,b);return c;}
let A82=(a,b,c)=>{a.Iy=b;a.BR=c;}
let AK4=(a,b)=>{a.BR.r0.rm.Ae=BC(b);}
let A42=(a,b)=>{b=a.BR.r0.rm;b.ws=1;b.r_=0;}
let AYp=(a,b,c)=>{c=a.BR;b=null;Jl(c.BZ,c.AO,c.BI,b);b=c.r0.rm;b.zl=1;b.r_=0;return 0;}
function Og(){let a=this;Ew.call(a);a.xH=null;a.GY=null;a.Gp=null;a.zI=null;}
let ANs=(a,b)=>{a.xH.r0.rm.Ae=BC(b);}
let AXC=(a,b)=>{b=a.xH.r0.rm;b.ws=1;b.r_=0;}
let ABU=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.GY;if(e!==null)d.setAttribute("crossOrigin",Cr(e));a:{e=a.zI;e.pp=e.pp+1|0;e=new SL;e.B6=a;e.IM=b;e.F7=c;e.E9=d;d.addEventListener("load",CK(e,"handleEvent"),!!0);d.addEventListener("error",CK(e,"handleEvent"),!!0);if(!a.zI.Gv){b=Cr(b);d.src=b;}else{b=a.Gp;c=ZW(c);e=new L;e.ob=H(16);F(e,e.n$,C(1215));f=e.n$;if(b===null)b=C(2);F(e,f,b);F(e,e.n$,C(1216));f=e.n$;if(c===null)c=C(2);F(e,f,c);b=new P;g=e.ob;h=g.data;i=e.n$;S();j=h.length;if
(i<0)break a;if(i>(j-0|0))break a;b.oc=Q(g.data,0,i);b=Cr(b);d.src=b;}return 0;}b=new O;b.n_=1;b.oa=1;Bu(b);E(b);}
let ANU=(a,b,c)=>{return ABU(a,b,c);}
function R3(){let a=this;D.call(a);a.wW=null;a.tq=null;}
let P5=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.wW.readyState==4){if(a.wW.status==200){b=a.tq;if(b.r7.qW){if(BX===null){c=new Dp;c.p5=DY;d=new L;d.ob=H(16);c.o6=d;c.p2=H(32);c.p_=0;Do();c.p7=Du;BX=c;}e=BX;b=b.sd;d=new L;d.ob=H(16);F(d,d.n$,C(722));f=d.n$;if(b===null)b=C(2);F(d,f,b);ML(e,OR(d.ob,0,d.n$));}e
=a.wW.response;g=new Int8Array(e);b=a.tq;d=b.sN;c=b.sd;b=new J9;b.q4=g;b.EB=e;d.eV(c,b);}else if(a.wW.status!=404&&a.wW.status!=403){try{h=I(100);$p=1;continue _;}catch($$e){$$je=BG($$e);if($$je instanceof Ea){}else{throw $$e;}}b=a.tq;d=b.r7;f=b.th;c=b.sd;e=b.sN;if(d.qW){if(BX===null){g=new Dp;g.p5=DY;b=new L;b.ob=H(16);g.o6=b;g.p2=H(32);g.p_=0;Do();g.p7=Du;BX=g;}g=BX;b=new L;b.ob=H(16);F(b,b.n$,C(132));F(b,b.n$,c===null?C(2):c);i=new P;j=b.ob;k=j.data;l=b.n$;S();m=k.length;if(l>=0&&l<=(m-0|0)){i.oc=Q(j.data,
0,l);b=g.o6;F(b,b.n$,i);m=b.n$;Bp(b,m,m+1|0);b.ob.data[m]=10;Dy(g);}else{b=new O;Bm(b);E(b);}}d.pp=d.pp+1|0;b=new HU;b.r7=d;b.th=f;b.sd=c;b.sN=e;d=null;c=null;b.rf=new D;b.re=1;b.sq=c;b.sU=d;n=DL;DL=n+1|0;b.sQ=I(n);d=new F3;d.ss=b;GK(d);}else{b=a.tq;b.sN.m0(b.sd);}b=a.tq.r7;b.pp=b.pp-1|0;}return;case 1:b:{try{Ki(h);if(HA()){break _;}break b;}catch($$e){$$je=BG($$e);if($$je instanceof Ea){}else{throw $$e;}}}b=a.tq;d=b.r7;f=b.th;c=b.sd;e=b.sN;if(d.qW){if(BX===null){g=new Dp;g.p5=DY;b=new L;b.ob=H(16);g.o6=b;g.p2
=H(32);g.p_=0;Do();g.p7=Du;BX=g;}g=BX;b=new L;b.ob=H(16);F(b,b.n$,C(132));F(b,b.n$,c===null?C(2):c);i=new P;j=b.ob;k=j.data;l=b.n$;S();m=k.length;if(l>=0&&l<=(m-0|0)){i.oc=Q(j.data,0,l);b=g.o6;F(b,b.n$,i);m=b.n$;Bp(b,m,m+1|0);b.ob.data[m]=10;Dy(g);}else{b=new O;Bm(b);E(b);}}d.pp=d.pp+1|0;b=new HU;b.r7=d;b.th=f;b.sd=c;b.sN=e;d=null;c=null;b.rf=new D;b.re=1;b.sq=c;b.sU=d;n=DL;DL=n+1|0;b.sQ=I(n);d=new F3;d.ss=b;GK(d);b=a.tq.r7;b.pp=b.pp-1|0;return;default:DU();}}Cn().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let AHX=(a,b)=>{let $p,$z;$p=0;if(DV()){let $T=Cn();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:P5(a,b);if(HA()){break _;}return;default:DU();}}Cn().s(a,b,$p);}
function SL(){let a=this;D.call(a);a.IM=null;a.F7=null;a.E9=null;a.B6=null;}
let Xz=(a,b)=>{let c,d;c=Bv(b.type);if(c===C(1217))d=1;else if(!(C(1217) instanceof P))d=0;else{b=C(1217);d=c.oc!==b.oc?0:1;}if(d){b=a.B6.xH.r0.rm;b.ws=1;b.r_=0;}else{b=a.F7;b.Do=a.E9;c=a.B6.xH;Jl(c.BZ,c.AO,c.BI,b);b=c.r0.rm;b.zl=1;b.r_=0;}b=a.B6.zI;b.pp=b.pp-1|0;}
let AMR=(a,b)=>{Xz(a,b);}
Bhp([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang"]);
Bhq([D,0,0,[],0,3,0,0,["cF",Bhr(A0g),"cG",Bhs(AQG),"l",Bhr(AKR)],AAv,0,D,[],0,3,0,0,0,Hd,0,D,[],0,3,0,Bh7,0,RH,0,D,[],3,3,0,0,0,Nn,0,D,[RH],0,3,0,0,0,D0,0,D,[],3,3,0,0,0,AAq,0,Nn,[D0],0,3,0,0,0,D_,0,D,[],3,3,0,0,0,G6,0,D,[D_],0,3,0,0,0,DO,0,D,[],3,3,0,0,0,CI,0,D,[],3,3,0,0,0,BV,0,D,[DO,CI],1,3,0,0,["l",Bhr(A15)],Fy,0,BV,[],12,3,0,Bd5,0,G$,0,D,[],0,3,0,0,0,Np,0,D,[],3,3,0,0,0,Kn,0,G$,[Np],0,3,0,0,0,HE,0,D,[],3,3,0,0,0,EJ,0,D,[],3,3,0,0,0,HS,0,D,[HE,EJ],0,3,0,0,0,Hp,0,D,[],3,3,0,0,0,CB,0,D,[Hp],0,3,0,0,0,H3,0,
CB,[],0,3,0,0,0,AF7,0,H3,[],0,0,0,0,0,GN,0,BV,[],12,3,0,A9u,0,Mf,0,D,[],3,3,0,0,0,Kt,0,D,[Mf],3,3,0,0,0,Ho,0,D,[],3,3,0,0,0,Ek,0,D,[Ho],1,3,0,0,0,AG2,0,Ek,[],0,0,0,0,0,L9,0,HS,[],0,3,0,0,0,Im,0,D,[Hp],0,3,0,0,0,ADb,0,D,[],1,3,0,0,0,ABI,0,D,[],0,3,0,0,0,Ve,0,D,[],3,3,0,0,0,M6,0,D,[Ve],0,3,0,0,0,AFS,0,M6,[],0,0,0,0,0,AEp,0,G6,[],0,3,0,0,0,S7,0,D,[],32,0,0,Bh8,0,AFd,0,D,[],1,3,0,0,0,T4,0,D,[],32,0,0,Bh9,0,AG1,0,Ek,[],0,0,0,0,0,GT,0,D,[Mf],0,3,0,0,0,Qi,0,GT,[Kt],0,3,0,0,0,Hs,0,D,[],4,3,0,BbY,0,LC,0,D,[Hp],1,3,0,
0,0,Vb,0,H3,[],0,3,0,0,0,SY,0,D,[],0,3,0,0,0,KQ,0,D,[],0,3,0,Bh$,0,NB,0,D,[Hp],1,3,0,0,0,Kg,0,GT,[Kt],0,3,0,0,0]);
Bhq([Rj,0,GT,[Kt],0,3,0,0,0,ED,0,CB,[],0,3,0,0,0,Ra,0,Kg,[],0,3,0,0,0,WF,0,G6,[],0,3,0,0,0,Lb,0,D,[],3,3,0,0,0,Yz,0,G6,[],0,3,0,0,0,XG,0,D,[D_],4,3,0,0,0,N2,0,D,[],32,0,0,Bh_,0,Db,0,BV,[],12,3,0,AFt,0,CW,0,D,[D_],1,3,0,0,0,F8,0,CW,[],1,3,0,0,0,X0,0,F8,[],0,3,0,0,0,Zf,0,F8,[],0,3,0,0,0,DE,0,CW,[],1,3,0,0,0,F2,0,DE,[],1,3,0,0,0,ABR,0,F2,[],0,3,0,0,0,ACq,0,D,[Hp],0,0,0,0,0,Mn,0,CW,[],0,3,0,0,0,ACQ,0,Mn,[],0,3,0,0,0,ADA,0,CW,[],0,3,0,0,0,Yv,0,CW,[],0,3,0,0,0,AGq,0,CW,[],0,3,0,0,0,AGH,0,D,[],0,3,0,0,0,Nb,0,CW,[],
1,3,0,0,0,Yl,0,Nb,[],0,3,0,0,0,WS,0,DE,[],0,3,0,0,0,AGZ,0,DE,[],0,3,0,0,0,AAr,0,F2,[],0,3,0,0,0,AF4,0,CW,[],0,3,0,0,0,Zr,0,F2,[],0,3,0,0,0,AHK,0,DE,[],0,3,0,0,0,AAG,0,DE,[],0,3,0,0,0,Xt,0,CW,[],0,3,0,0,0,Yf,0,DE,[],0,3,0,0,0,Yh,0,CW,[],0,3,0,0,0,ADS,0,CW,[],0,3,0,0,0,AET,0,F8,[],0,3,0,0,0,AB6,0,DE,[],0,3,0,0,0,AAT,0,CW,[],0,3,0,0,0,AFP,0,F2,[],0,3,0,0,0,ADK,0,F8,[],0,3,0,0,0,Y8,0,CW,[],0,3,0,0,0,Wr,0,DE,[],0,3,0,0,0,AEu,0,DE,[],0,3,0,0,0,St,0,D,[D0],0,3,0,0,0,DM,0,Kn,[Lb],0,3,0,0,0,D2,0,DM,[],0,3,0,Bia,0,GR,
0,D2,[HE],0,3,0,0,0,Ls,0,GR,[],0,3,0,0,0,AC4,0,Ls,[],0,3,0,0,0]);
Bhq([AAg,0,CB,[],0,0,0,0,0,LU,0,DM,[],0,3,0,0,0,PP,0,D,[],3,3,0,0,0,FY,0,D,[PP],1,3,0,0,0,Xo,0,FY,[],0,0,0,0,0,D8,0,G$,[Lb],0,3,0,0,0,ACe,0,D8,[],0,3,0,0,0,AAf,0,CB,[],0,0,0,0,0,Ce,0,D,[],1,3,0,AIM,0,T9,0,Ce,[],0,0,0,0,0,AFT,0,Ce,[],0,0,0,0,0,MA,0,ED,[],0,3,0,0,0,AEP,0,MA,[],0,3,0,0,0,Rd,0,Ce,[],0,0,0,0,0,AHD,0,CB,[],0,0,0,0,0,I6,0,D2,[],0,3,0,0,0,AFU,0,Ce,[],0,0,0,0,0,HD,0,D,[],3,3,0,0,0,Fh,0,D,[CI,HD],0,3,0,0,0,E4,"Table$DebugRect",12,Fh,[],0,3,0,AV8,0,Xr,0,FY,[],0,0,0,0,0,Ge,0,D8,[HE],0,3,0,0,0,WW,0,Ge,[],
0,3,0,0,0,AEA,0,CB,[],0,0,0,0,0,O8,0,D,[],3,3,0,0,0,AGs,0,D,[O8],0,3,0,0,0,Hl,0,D,[],0,3,0,0,0,Hr,0,Hl,[],0,3,0,0,0,Ur,0,Hr,[],0,3,0,0,0,L6,0,D8,[HE],0,3,0,0,0,XO,0,L6,[],0,3,0,0,0,AH_,0,LU,[],0,0,0,0,0,MD,0,DM,[],0,3,0,0,0,ABt,0,GR,[],0,3,0,0,0,NM,0,D8,[Np],0,3,0,0,0,Rb,0,Ce,[],0,0,0,0,0,UE,0,D,[],0,3,0,0,0,ADP,0,D,[Ho],0,0,0,0,0,AEQ,0,CB,[],0,0,0,0,0,YR,0,Ek,[],0,0,0,0,0,AEe,0,D,[],0,3,0,0,0,ZL,0,CB,[],0,0,0,0,0,AA4,0,ED,[],0,0,0,0,0,AEx,0,Im,[],0,0,0,0,0,T5,0,Ce,[],0,0,0,0,0,T8,0,Ce,[],0,0,0,0,0,TI,0,D,[],
3,3,0,0,0,KY,0,D,[],0,3,0,0,0,R0,0,KY,[],0,3,0,0,0,Xp,0,FY,[],0,0,0,0,0]);
Bhq([AAe,0,LC,[],0,0,0,0,0,AAh,0,NB,[],0,0,0,0,0,AHE,0,CB,[],0,0,0,0,0,AHF,0,ED,[],0,0,0,0,0,Rc,0,Ce,[],0,0,0,0,0,Fc,0,D,[D_],0,3,0,Bic,0,Tk,0,Hr,[],0,3,0,0,0,Yc,0,CB,[],0,0,0,0,0,Wh,0,Ek,[],0,0,0,0,0,T$,0,Ce,[],0,0,0,0,0,ADe,0,DM,[],0,3,0,0,0,AEy,0,CB,[],0,0,0,0,0,P1,0,D,[],0,3,0,0,0,If,0,Ce,[],0,3,0,0,0,XB,0,MD,[],0,3,0,0,0,T6,0,Ce,[],0,0,0,0,0,Ts,0,D8,[HE],0,3,0,0,0,AED,0,L9,[],0,0,0,0,0,QZ,0,D,[],0,3,0,0,0,MI,0,D8,[],0,3,0,Bid,0,Sa,0,D,[],0,3,0,0,0,AFV,0,Ce,[],0,0,0,0,0,Re,0,Ce,[],0,0,0,0,0,AGK,0,I6,[],
0,3,0,0,0,T7,0,Ce,[],0,0,0,0,0,Py,0,D,[],0,3,0,0,0,AH5,0,D,[],0,3,0,0,0,Er,0,BV,[],12,3,0,Bgb,0,AH8,0,Ce,[],0,0,0,0,0,AEq,0,Ek,[],0,0,0,0,0,D6,0,D,[],1,3,0,0,0,Rf,0,D6,[],0,0,0,0,0,Wd,0,D,[TI],0,3,0,0,0,U5,0,D,[],0,3,0,0,0,Tz,0,D,[],0,3,0,0,0,T1,0,D,[],0,3,0,0,0,KS,0,CB,[],0,3,0,0,0,Wg,0,Ek,[],0,0,0,0,0,AHG,0,NM,[],0,0,0,0,0,We,0,D,[],3,3,0,0,0,Yd,0,CB,[],0,0,0,0,0,AIj,0,DM,[],0,3,0,0,0,Ze,0,DM,[],0,3,0,0,0,AEE,0,ED,[],0,0,0,0,0,Ma,0,D,[],0,3,0,0,0,Xn,0,Ma,[],0,0,0,0,0,AHx,0,G$,[D0],0,3,0,0,0,VY,0,CB,[],0,0,
0,0,0,AGQ,0,GR,[],0,3,0,0,0,YX,0,CB,[],0,0,0,0,0]);
Bhq([AHY,0,ED,[],0,0,0,0,0,QS,0,Hl,[],0,3,0,0,0,Zh,0,DM,[],0,3,0,0,0,Tv,0,D,[],0,3,0,0,0,Tc,0,D,[],0,3,0,0,0,YS,0,D8,[],0,3,0,0,0,AA5,0,HS,[],0,0,0,0,0,VZ,0,CB,[],0,0,0,0,0,Ul,0,DM,[],0,3,0,0,0,ABc,0,KS,[],0,3,0,0,0,V0,0,D2,[],0,0,0,0,0,Xq,0,FY,[],0,0,0,0,0,ABu,0,D,[],1,3,0,0,0,Q$,0,D,[],0,3,0,0,0,EL,0,D,[CI],0,3,0,Bie,0,By,0,D,[],1,3,0,EK,0,Wv,0,By,[],0,3,0,0,0,AEr,0,D,[],0,3,0,0,0,Qw,0,By,[],0,0,0,0,0,AHQ,0,D,[],0,3,0,0,0,FD,0,By,[],0,3,0,0,0,I8,0,FD,[],0,3,0,0,0,Ii,0,FD,[],0,3,0,0,0,JM,0,D,[],3,3,0,0,0,WM,
0,D,[JM],0,3,0,0,0,Qz,0,By,[],0,0,0,0,0,AAl,0,D,[HD],0,3,0,0,0,Qv,0,By,[],0,0,0,0,0,Ik,0,By,[],0,3,0,0,0,Qu,0,By,[],0,0,0,0,0,Qt,0,By,[],0,0,0,0,0,KH,0,D,[],4,3,0,0,0,ABG,0,D6,[],0,0,0,0,0,JB,0,D,[],3,3,0,0,0,BQ,0,D,[CI,JB],0,3,0,0,0,AFH,0,By,[],0,0,0,0,0,HM,0,By,[],0,3,0,0,0,AFh,0,D,[],0,3,0,0,0,QB,0,By,[],0,0,0,0,0,Rq,0,HM,[],0,3,0,0,0,Xx,0,D,[D_],0,3,0,0,0,FU,0,BV,[],12,3,0,Bb1,0,P6,0,D,[],0,3,0,Bif,0,Jg,0,By,[],0,3,0,0,0,Ya,0,Jg,[],0,3,0,0,0,TV,0,By,[],0,0,0,0,0,Y6,0,D,[CI],4,3,0,0,0,Qs,0,By,[],0,0,0,0,
0,E1,0,D,[CI,JB],0,3,0,BbC,0,ACg,0,Ik,[],0,3,0,0,0]);
Bhq([XX,0,By,[],0,3,0,0,0,WG,0,D,[],0,3,0,0,0,ABh,0,D,[HD],0,3,0,0,0,Qx,0,By,[],0,0,0,0,0,AHz,0,By,[],0,3,0,0,0,AFI,0,By,[],0,0,0,0,0,XV,0,Ik,[],0,3,0,0,0,K1,0,D,[CI],0,3,0,Big,0,La,0,D,[CI],0,3,0,BcO,0,Nd,0,D,[CI],0,3,0,Be7,0,ACU,0,D,[CI],0,3,0,0,0,VN,0,D,[CI],0,3,0,0,0,ZG,0,D,[CI,HD],0,3,0,0,0,AD_,0,D,[JM],0,3,0,0,0,Qm,0,D,[],4,3,0,Zk,0,C3,0,D,[],4,3,0,Bih,0,Wj,0,D,[],4,3,0,0,0,ADF,0,Jg,[],0,3,0,0,0,EO,0,D,[CI],0,3,0,HH,0,Sm,0,D,[],3,3,0,0,0,Hn,0,D,[Sm,CI],0,3,0,0,0,TP,0,Hn,[],0,3,0,0,0,AFG,0,By,[],0,0,0,
0,0,Qy,0,By,[],0,0,0,0,0,JO,0,D,[],0,3,0,AOT,0,Fs,0,D,[CI],0,3,0,QF,0,Vy,0,D,[],0,3,0,0,0,AFK,0,D,[],0,3,0,0,0,Bf,0,D,[CI,JB],0,3,0,BU,0,XA,0,D,[CI,HD],0,3,0,0,0,W1,0,D6,[],0,0,0,0,0,PY,0,HM,[],0,3,0,0,0,AFW,0,D,[JM],0,3,0,0,0,Wo,0,D,[],0,3,0,0,0,AHh,0,D,[CI],0,3,0,0,0,JX,0,D,[CI],0,3,0,0,0,TW,0,By,[],0,0,0,0,0,AHj,0,D,[],0,3,0,0,0,ACp,0,D,[],0,3,0,0,0,AGf,0,D,[],0,3,0,0,0,AHg,0,D,[CI],0,3,0,0,0,Y1,0,D,[],3,3,0,0,0,ADT,0,D,[CI],0,3,0,0,0,Us,0,D,[],0,0,0,0,0,DH,"GlyphLayout",14,D,[D_],0,3,0,E7,["D",Bhr(UX),"l",
Bhr(Zj)],HO,0,D,[],0,3,0,0,0,AFE,0,HO,[],0,3,0,0,0,FA,"BitmapFont",14,D,[D0],0,3,0,0,0,Qo,0,D,[],0,3,0,Bio,0,BD,"Color",13,D,[],0,3,0,FQ,["cG",Bhs(A0L),"cF",Bhr(APZ),"l",Bhr(ALW)]]);
Bhq([J6,0,D,[D0],1,3,0,0,0,Mb,0,J6,[],0,3,0,0,["l",Bhr(AQ9)],CQ,"Array",8,D,[EJ],0,3,0,0,["cF",Bhr(AYB),"cG",Bhs(APC),"l",Bhr(AUI)],J5,0,D,[EJ],0,3,0,0,0,XL,0,J5,[],0,3,0,0,0,AH4,0,D,[EJ],0,3,0,0,0,EH,0,D,[],4,3,0,0,["cG",Bhs(ARc),"cF",Bhr(A0p)],AA9,0,D,[],0,3,0,0,0,AEN,0,D,[],0,3,0,0,0,AFF,0,D,[],0,3,0,0,0,AFa,0,D,[],0,3,0,0,0,PD,0,D,[],0,3,0,Bip,0,VU,0,D,[],0,3,0,0,0,AFk,0,D,[],0,3,0,0,0,AE6,0,D,[],0,3,0,0,0,YO,0,D,[],0,3,0,0,0,AAj,0,D,[],0,3,0,0,0,XC,0,D,[],0,3,0,0,0,AAN,0,D,[],0,3,0,0,0,Yb,0,D,[],0,3,0,
0,0,ACs,0,D,[],0,3,0,0,0,ACN,0,D,[],0,3,0,0,0,Ha,0,BV,[],12,3,0,Bbb,0,YU,0,D,[],0,3,0,0,0,Ui,0,D,[],3,3,0,0,0,Ep,0,D,[],0,3,0,0,0,V3,0,Ep,[],0,3,0,0,0,V2,0,Ep,[],0,3,0,0,0,Ym,0,Ep,[],0,3,0,0,0,ADd,0,Ep,[],0,3,0,0,0,ZI,0,Ep,[],0,3,0,0,0,LD,0,Ep,[],0,3,0,0,0,AC$,0,LD,[],0,3,0,0,0,I4,0,D,[],3,3,0,0,0,ADw,0,D,[D0,I4],0,3,0,0,0,Gg,0,D,[],3,3,0,0,0,ZC,0,D,[Gg,I4],0,3,0,0,0,AAJ,0,D,[Gg],0,3,0,0,0,WB,0,D,[],0,3,0,0,0,FI,0,D,[Gg],0,3,0,0,0,Zo,0,FI,[],0,3,0,0,0,Ib,0,FI,[I4,Gg],1,3,0,0,0,EA,0,Ib,[],1,3,0,Biq,0,AGc,0,D,
[],0,3,0,0,0,AG6,0,EA,[],4,3,0,0,0,AEJ,0,EA,[],4,3,0,0,0,Rh,0,FI,[],0,3,0,0,0,MZ,0,FI,[],0,3,0,0,0,AB0,0,MZ,[],0,3,0,0,0,AC8,0,EA,[],4,3,0,0,0]);
Bhq([HV,0,Ib,[],1,3,0,0,0,YE,0,HV,[],4,3,0,0,0,AEG,0,EA,[],4,3,0,0,0,AFc,0,EA,[],4,3,0,0,0,YD,0,HV,[],4,3,0,0,0,FV,0,BV,[],12,3,0,Bd_,0,Hb,0,D,[D0,Gg,I4],1,3,0,0,0,L4,0,Hb,[Gg],1,3,0,0,0,ABx,0,L4,[Gg],0,3,0,0,0,F0,0,BV,[],12,3,0,BaY,0,DC,0,Hb,[],1,3,0,0,0,Jd,0,DC,[],1,3,0,0,0,ACE,0,D,[],0,3,0,0,0,FJ,0,DC,[],1,3,0,Bir,0,Fx,0,FJ,[],1,3,0,0,0,GS,0,Fx,[],1,3,0,0,0,ADv,0,GS,[],0,3,0,0,0,I7,0,DC,[],1,3,0,0,0,ABj,0,I7,[],0,3,0,0,0,AG4,0,DC,[],0,3,0,0,0,GY,0,DC,[],1,3,0,0,0,VX,0,GY,[],0,3,0,0,0,H2,0,DC,[],1,3,0,0,0,ADq,
0,Fx,[],0,3,0,0,0,XS,0,Fx,[],0,3,0,0,0,Lg,0,DC,[],1,3,0,0,0,AF0,0,Lg,[],0,3,0,0,0,ACk,0,GY,[],0,3,0,0,0,AEM,0,GS,[],0,3,0,0,0,Zn,0,DC,[],0,3,0,0,0,AFg,0,GY,[],0,3,0,0,0,AF3,0,DC,[],0,3,0,0,0,ZS,0,FJ,[],0,3,0,0,0,AEa,0,D6,[],0,0,0,0,0,Wu,0,D6,[],0,0,0,0,0,Wz,0,Fx,[],0,3,0,0,0,Zq,0,H2,[],0,3,0,0,0,AHP,0,Jd,[],0,3,0,0,0,Y7,0,Jd,[],0,3,0,0,0,AGl,0,H2,[],0,3,0,0,0,AE3,0,GS,[],0,3,0,0,0,AH1,0,I7,[],0,3,0,0,0,F1,0,Hb,[],1,3,0,0,0,YF,0,F1,[],0,3,0,0,0,G3,0,D,[],1,3,0,0,0,ZB,0,G3,[],0,3,0,0,0,AGD,0,F1,[],0,3,0,0,0,AG3,
0,F1,[],0,3,0,0,0,AAy,0,G3,[],0,3,0,0,0,W9,0,F1,[],0,3,0,0,0]);
Bhq([AAk,0,G3,[],0,3,0,0,0,Mz,0,D,[],3,3,0,0,0,RG,0,D,[],3,3,0,0,0,CN,0,D,[Mz,RG],0,3,0,0,["l",Bhr(AP6)],ACR,0,D,[],4,0,0,0,0,ACy,0,D,[],4,3,0,0,0,Ea,0,D,[],0,3,0,0,["cW",Bhr(ATr)],Da,0,Ea,[],0,3,0,0,0,B0,"RuntimeException",21,Da,[],0,3,0,0,0,AEF,"ClassCastException",21,B0,[],0,3,0,0,0,ET,"CharSequence",21,D,[],3,3,0,0,0,P,"String",21,D,[CI,DO,ET],0,3,0,S,["l",Bhr(DJ),"cG",Bhs(Gf),"cF",Bhr(A5T)],G1,0,Ea,[],0,3,0,0,0,Jk,0,G1,[],0,3,0,0,0,AD5,0,Jk,[],0,3,0,0,0,E3,0,D,[CI],1,3,0,0,0,FR,0,E3,[DO],0,3,0,0,["mB",
Bhr(A2E),"mD",Bhr(AI4),"l",Bhr(AVn)],Bx,0,D,[CI,ET],0,0,0,0,["dk",Bhs(R7),"l",Bhr(Bi)],IY,0,D,[],3,3,0,0,0,L,0,Bx,[IY],0,3,0,0,["ii",Bhv(A3s),"Jd",Bhu(AMl),"l",Bhr(Cy),"dk",Bhs(APy),"dv",Bht(A4l),"k",Bht(DI)],I_,0,Jk,[],0,3,0,0,0,AFR,0,I_,[],0,3,0,0,0,ADJ,0,I_,[],0,3,0,0,0,XJ,0,D,[],0,3,0,0,0,OY,0,D,[],3,3,0,0,0,M9,0,D,[OY,Ho],0,3,0,0,["cV",Bhr(AEl)],Q5,0,D,[],3,3,0,0,0,Nr,0,D,[Q5],1,3,0,0,0,J8,0,Nr,[],0,3,0,0,0,Z3,0,D,[],4,3,0,0,0,Cp,0,Hn,[],1,3,0,0,["jX",Bhs(AYh),"es",Bhr(AP2),"ev",Bhr(A48),"en",Bhr(A3T),
"mZ",Bht(A0q),"jJ",Bhr(A67),"jT",Bhr(ALh),"kf",Bhr(AJR),"ep",Bhr(A4B),"jY",Bht(AYt),"er",Bhu(AOj)],N5,0,Cp,[],0,3,0,0,["kg",Bhr(AZ8),"em",Bhr(A$1),"jX",Bhs(A9n),"es",Bhr(AX8)],Tq,0,Cp,[],0,3,0,0,["kg",Bhr(AK6),"em",Bhr(AQk),"jX",Bhs(ATK),"es",Bhr(ATw)],Vj,0,Cp,[],0,3,0,0,["kg",Bhr(AW1),"em",Bhr(AKx),"jX",Bhs(AU$),"es",Bhr(AIH)],RR,0,Cp,[],0,3,0,0,["kg",Bhr(AVK),"em",Bhr(A6q),"jX",Bhs(A1k),"es",Bhr(A4C),"ev",Bhr(A4L),"ep",Bhr(AQZ)],SK,0,Cp,[],0,3,0,0,["kg",Bhr(ATs),"em",Bhr(AVU),"jX",Bhs(AID)],W3,0,Cp,[],0,3,
0,0,["kg",Bhr(AZG),"em",Bhr(A1s),"jX",Bhs(ALn)],Z_,0,Cp,[],0,3,0,0,["kg",Bhr(A9Q),"em",Bhr(AXa),"jX",Bhs(A0v)],YJ,0,Cp,[],0,3,0,0,["kg",Bhr(AWL),"em",Bhr(A6s),"jX",Bhs(AIY)],X4,0,Cp,[],0,3,0,0,["kg",Bhr(A6$),"em",Bhr(ATn),"jX",Bhs(AJE)],AIi,0,Cp,[],0,3,0,0,["kg",Bhr(AOq),"em",Bhr(AOO),"jX",Bhs(AL5),"es",Bhr(AVB)],AIe,0,Cp,[],0,3,0,0,["kg",Bhr(AQt),"jX",Bhs(ANj),"em",Bhr(A3z),"es",Bhr(A7L),"ev",Bhr(YZ),"en",Bhr(A5a),"mZ",Bht(AYV),"ep",Bhr(A3A),"jY",Bht(A9z),"er",Bhu(Wq)],AER,0,Cp,[],0,3,0,0,["kg",Bhr(AYY),"em",
Bhr(ANH),"jX",Bhs(AOA)],S_,0,Cp,[],0,3,0,0,["kg",Bhr(ARY),"em",Bhr(A6R),"jX",Bhs(A90)],Vo,0,Cp,[],0,3,0,0,["kg",Bhr(AZE),"em",Bhr(AJV),"jX",Bhs(AJe),"jJ",Bhr(AZf),"jT",Bhr(A2T),"kf",Bhr(AKy),"ep",Bhr(A6x)],Yt,0,Cp,[],0,3,0,0,["kg",Bhr(ALX),"em",Bhr(AWn),"jX",Bhs(ATT),"jJ",Bhr(A6J),"jT",Bhr(A0k),"kf",Bhr(A6m),"ep",Bhr(A29)],ABQ,0,Cp,[],0,3,0,0,["kg",Bhr(AUL),"em",Bhr(A8q)],ADc,0,Cp,[],0,3,0,0,["kg",Bhr(A5D),"em",Bhr(AUP),"jX",Bhs(A7m),"jJ",Bhr(ARu),"jT",Bhr(A8C),"kf",Bhr(A4Z),"ep",Bhr(AY1)],FL,0,BV,[],12,3,0,
Kl,0,Oe,0,D,[],3,3,0,0,0]);
Bhq([C4,0,D,[],3,3,0,0,0,Td,0,D,[C4],3,3,0,0,0,LQ,0,D,[Oe,Td],0,3,0,Ju,["OD",Bhs(A6g)],Zp,0,D,[],0,3,0,0,0,Pu,0,D,[],0,3,0,M0,0,KV,0,E3,[DO],0,3,0,0,0,KO,0,D,[],0,3,0,0,0,AEc,0,D,[],4,3,0,0,0,DZ,"GlyphLayout$GlyphRun",14,D,[D_],0,3,0,0,["D",Bhr(Yj),"l",Bhr(Or)],Et,0,D,[],0,3,0,0,["cF",Bhr(AP4),"cG",Bhs(A9m),"l",Bhr(A3P)],LK,0,D,[],3,3,0,0,0,Lh,0,D,[LK],1,3,0,0,0,Gv,0,D,[],3,3,0,0,0,Jz,0,Lh,[Gv,CI],0,3,0,0,0,Rk,0,D,[],3,3,0,0,0,TJ,0,D,[Rk],0,3,0,0,0,Eu,0,D,[DO],0,3,0,0,0,AC7,0,D,[],0,3,0,0,0,JJ,0,D,[],4,3,0,
0,0,RB,0,D,[],3,3,0,0,0,Ox,0,D,[RB],0,3,0,0,0,O0,0,D,[],0,3,0,0,0,M3,0,D,[],0,3,0,0,0,Qk,0,D,[],3,3,0,0,0,ME,0,D,[Qk],0,3,0,JK,0,ABN,0,D,[],0,3,0,0,0,Ew,0,D,[],0,3,0,0,["iV",Bhs(AQJ)],TX,0,D,[],3,3,0,0,0,FO,0,D,[C4],3,3,0,0,0,AFp,0,D,[TX,FO],0,3,0,0,["rC",Bhs(AJp)],P4,0,D,[],3,3,0,0,0,QH,0,D,[P4],0,3,0,0,0,Uf,0,D,[Ui],0,3,0,0,0,Ua,0,D,[],3,3,0,0,0,Pw,0,D,[Ua],0,3,0,0,0,Sl,0,D,[],3,3,0,0,0,AF$,0,D,[Sl],0,3,0,0,0,Fg,0,D,[],0,3,0,0,0,Ux,0,D,[],3,3,0,0,0,Ug,0,D,[Ux],3,3,0,0,0,ADy,0,D,[Ug],0,3,0,0,0,VE,0,D,[FO],
0,0,0,0,["rC",Bhs(A6W)],VF,0,D,[FO],0,0,0,0,["rC",Bhs(AVI)],V,"IllegalArgumentException",21,B0,[],0,3,0,0,0,AHn,0,D,[],4,3,0,0,0,ACl,0,D,[EJ],0,3,0,0,0,To,0,E3,[DO],0,3,0,0,0,AES,0,D,[C4],1,3,0,0,0,Nl,0,D,[],3,3,0,0,0,Jj,"TeaGL20",5,D,[Nl],0,3,0,0,["lp",Bht(ANS),"lF",Bht(AVA),"cr",Bht(AZw),"jd",Bhv(A1A),"fV",Bhv(Pf),"fW",Bhv(SU),"j_",Bhs(A8x),"j$",Bhv(ALf),"ln",Bhs(AOz),"lj",Bhr(AV7),"ll",Bhs(ASf),"i5",Bhs(AUb),"i_",Bhs(AR6),"lG",Bhs(A5l),"k5",Bhu(ALK),"k6",Bhv(AO7),"k$",Bhv(AQW),"jc",Bhs(AVm),"lu",Bhs(A8P),
"mv",Bhs(AIA),"fX",Bhv(RX),"fY",Bhv(Tm),"lw",Bht(A0R),"b9",Bht(LM),"i4",Bhs(AV2),"fZ",Bhu(TM),"lo",Bhs(APv),"f0",Bhu(OX),"eZ",Bhs(ANd),"lr",Bht(A1j),"lq",Bhs(AYu),"ch",Bht(ALJ),"lm",Bht(AWZ),"cn",function(b,c,d,e,f,g,h,i,j){T0(this,b,c,d,e,f,g,h,i,j);},"cx",Bhu(AQg),"b4",Bhu(ARL),"jk",Bht(AR5),"i8",Bhs(AJ3),"lt",function(b,c,d,e,f,g){A31(this,b,c,d,e,f,g);},"dX",Bhv(AXj)]]);
Bhq([Tw,0,D,[Nl],3,3,0,0,0,NV,"TeaGL30",5,Jj,[Tw],0,3,0,0,["lK",Bhs(A1H),"k7",Bhv(A49),"k9",function(b,c,d,e,f){A$H(this,b,c,d,e,f);},"lI",Bht(A5I),"b9",Bht(A3e)],R4,"TeaGL30Debug",5,NV,[],0,3,0,0,["lK",Bhs(A0X),"k7",Bhv(AY3),"k9",function(b,c,d,e,f){A9L(this,b,c,d,e,f);},"lI",Bht(AJW),"cr",Bht(AKq),"j_",Bhs(AUe),"j$",Bhv(AQl),"i5",Bhs(AYl),"i_",Bhs(A8T),"k5",Bhu(A0B),"k6",Bhv(A6n),"jc",Bhs(A7x),"eZ",Bhs(AWR),"ch",Bht(AXG),"cn",function(b,c,d,e,f,g,h,i,j){A4H(this,b,c,d,e,f,g,h,i,j);},"cx",Bhu(A0r),"dX",Bhv(ANu),
"lp",Bht(A3E),"lF",Bht(AU_),"jd",Bhv(AMK),"fV",Bhv(AQz),"fW",Bhv(AU8),"ln",Bhs(ARn),"lj",Bhr(A$g),"ll",Bhs(A6H),"lG",Bhs(AVZ),"k$",Bhv(AYE),"lu",Bhs(A6K),"mv",Bhs(A8B),"fX",Bhv(AOr),"fY",Bhv(AUc),"lw",Bht(A4Y),"b9",Bht(AMT),"fZ",Bhu(ALl),"i4",Bhs(AI_),"f0",Bhu(A$f),"lo",Bhs(AX9),"lr",Bht(AJa),"lq",Bhs(A9B),"lm",Bht(AXE),"b4",Bhu(AJ1),"jk",Bht(AKF),"i8",Bhs(A$N),"lt",function(b,c,d,e,f,g){A7e(this,b,c,d,e,f,g);}],Pc,0,D,[],0,3,0,0,0,D5,0,BV,[],12,3,0,RI,0,Um,0,D,[C4],3,3,0,0,0,Ub,0,D,[Um],0,0,0,0,["Qw",Bhr(A0u)],U7,
"TeaGL20Debug",5,Jj,[],0,3,0,0,["cr",Bht(A9Z),"j_",Bhs(AZJ),"j$",Bhv(AL3),"i5",Bhs(AQy),"i_",Bhs(A$r),"k5",Bhu(AOy),"k6",Bhv(AVR),"jc",Bhs(AKb),"eZ",Bhs(APq),"ch",Bht(ARs),"cn",function(b,c,d,e,f,g,h,i,j){AMV(this,b,c,d,e,f,g,h,i,j);},"cx",Bhu(A0H),"dX",Bhv(A$b),"lp",Bht(AI7),"lF",Bht(AIt),"jd",Bhv(AIq),"fV",Bhv(AO5),"fW",Bhv(A1J),"ln",Bhs(AWl),"lj",Bhr(ARI),"ll",Bhs(AWa),"lG",Bhs(ARG),"k$",Bhv(A1T),"lu",Bhs(AWe),"mv",Bhs(A46),"fX",Bhv(A3c),"fY",Bhv(AKt),"lw",Bht(A1V),"b9",Bht(AXn),"fZ",Bhu(AMZ),"i4",Bhs(A0_),
"f0",Bhu(AJg),"lo",Bhs(A7i),"lr",Bht(A8H),"lq",Bhs(APV),"lm",Bht(AVN),"b4",Bhu(A8D),"jk",Bht(AV5),"i8",Bhs(AXO),"lt",function(b,c,d,e,f,g){AK$(this,b,c,d,e,f,g);}],ZN,0,D,[EJ],0,3,0,0,0,Yo,0,D,[],0,3,0,0,0,QO,0,D,[C4],3,3,0,0,0,TB,0,D,[QO],0,0,0,0,["Sy",Bhr(AXz),"Ns",Bhr(ALR),"ZL",Bhr(AXi)],Vd,0,D,[],3,3,0,0,0,Vf,0,D,[Vd],0,3,0,0,0,Oa,0,Ew,[],0,0,0,0,0,QM,"CloneNotSupportedException",21,Da,[],0,3,0,0,0,HW,0,D6,[],0,3,0,0,0,O,"IndexOutOfBoundsException",21,B0,[],0,3,0,0,0,Gs,0,D,[C4],3,3,0,0,0,SF,0,D,[Gs],3,
3,0,0,0,PG,0,D,[Gs],3,3,0,0,0,Ta,0,D,[Gs],3,3,0,0,0,Qh,0,D,[Gs],3,3,0,0,0,Va,0,D,[Gs],3,3,0,0,0,Uo,0,D,[Gs,SF,PG,Ta,Qh,Va],3,3,0,0,0,OO,0,D,[],3,3,0,0,0,Lj,0,D,[C4],3,3,0,0,0,V8,0,D,[C4,Uo,OO,Lj],1,3,0,0,["IH",Bhs(ARW),"LZ",Bht(A8i),"Rf",Bht(A7R),"OA",Bhu(ARP),"MZ",Bhs(AVi),"UW",Bhr(ALb),"Th",Bhu(AIP)],M8,0,D,[],1,3,0,0,0,Iv,0,M8,[LK,Gv,CI],0,3,0,0,0,L2,0,Iv,[],0,3,0,0,0,ADZ,0,D,[],0,3,0,0,0,E$,0,BV,[],12,3,0,He,0,En,0,D,[C4],1,3,0,0,0,ADa,0,En,[],1,3,0,0,0,ACV,0,En,[],1,3,0,0,0,AEO,0,En,[],1,3,0,0,0,AFC,0,
En,[],1,3,0,0,0,XQ,0,En,[],1,3,0,0,0,Po,0,D,[FO],0,0,0,0,["rC",Bhs(A24)],Pp,0,D,[FO],0,0,0,0,["rC",Bhs(A97)],Pl,0,D,[FO],0,0,0,0,["rC",Bhs(ASs)],PW,0,D6,[],0,3,0,0,0,UF,0,D,[C4],3,3,0,0,0,RU,0,D,[UF],0,0,0,0,["S4",Bhr(A0N)],WK,0,En,[],1,3,0,0,0,S9,0,D,[CI],4,3,0,0,0,ACr,0,D,[],4,3,0,0,0,Eo,"ReflectionException",9,Da,[],0,3,0,0,0,Ev,0,D,[],4,3,0,BR,0]);
Bhq([M4,0,D,[],3,3,0,0,0,K7,0,D,[M4],0,0,0,0,0,JP,0,D,[],3,3,0,0,0,K6,0,D,[JP],0,0,0,0,0,Mg,0,D,[],3,3,0,0,0,AE$,0,D,[Mg],4,3,0,0,0,CU,"NumberFormatException",21,V,[],0,3,0,0,0,OP,0,D,[],4,3,0,0,0,Ld,0,B0,[],0,3,0,0,0,FW,0,Da,[],0,3,0,0,0,IW,"NoSuchMethodException",21,FW,[],0,3,0,0,0,Dv,"NullPointerException",21,B0,[],0,3,0,0,0,CL,0,D,[],1,0,0,0,["hB",Bhu(AL7),"hT",Bhv(ANL),"g0",Bhr(AZd),"l",Bhr(ATc),"gr",Bhs(Mh),"gY",Bhs(A83),"hF",Bhr(A91),"gn",Bhr(K5)],AAY,0,D,[C4],1,3,0,0,0,Xl,0,D,[C4],1,3,0,0,0,ABm,0,D,
[C4],1,3,0,0,0,MM,0,D,[C4],3,3,0,0,0,OU,0,D,[MM],0,3,0,0,["IN",Bhs(AK7)],AD2,0,D,[C4],1,3,0,0,0,OV,0,D,[MM],0,3,0,0,["IN",Bhs(AXl)],RC,0,D,[],3,3,0,0,0,Ic,0,D,[RC,Gv],0,0,0,0,0,Kh,0,Ic,[],0,0,0,0,0,Eb,0,CL,[],0,0,0,Gw,["hE",Bhu(AJ0),"eh",Bhr(AOc),"h$",Bhs(AKr)],JF,0,D,[],0,0,0,0,0,D9,"PatternSyntaxException",17,V,[],0,3,0,0,["cW",Bhr(A9V)],MH,0,D,[EJ],3,3,0,0,0,Nk,0,D,[MH],1,3,0,0,0,Tn,0,D,[MH],3,3,0,0,0,RO,0,D,[Tn],3,3,0,0,0,IH,0,Nk,[RO],1,3,0,0,0,LV,0,D,[],3,3,0,0,0,Kb,0,IH,[Gv,CI,LV],0,3,0,0,0,PL,0,Eb,[],
0,0,0,0,["hE",Bhu(AXM),"eh",Bhr(AZ_),"h$",Bhs(A7K)],Vg,0,Eb,[],0,0,0,0,["hE",Bhu(AZR),"eh",Bhr(A27)],O$,0,Eb,[],0,0,0,0,["hE",Bhu(AKB),"eh",Bhr(A8Z)],P8,0,Eb,[],0,0,0,0,["hE",Bhu(AXX),"eh",Bhr(ATQ),"h$",Bhs(A6h)],Ij,0,Eb,[],0,0,0,0,["hE",Bhu(AU9),"eh",Bhr(AZo)],C9,0,CL,[],1,0,0,0,["hE",Bhu(A$w),"hQ",Bhr(A8z),"h$",Bhs(AOU)],QT,0,C9,[],0,0,0,0,["hR",Bht(A75),"hB",Bhu(A0$),"hT",Bhv(AZI),"eh",Bhr(AOd),"h$",Bhs(AXS)],C2,0,CL,[],0,0,0,0,["hE",Bhu(ANN),"gr",Bhs(ASa),"eh",Bhr(AO4),"gY",Bhs(A36),"h$",Bhs(ASP),"gn",Bhr(ALg)],NU,
0,C2,[],0,0,0,0,["hE",Bhu(ARS),"eh",Bhr(AQc),"h$",Bhs(A7k)],F6,0,NU,[],0,0,0,0,["hE",Bhu(A0w),"gr",Bhs(A63),"eh",Bhr(AJl)],ABE,0,F6,[],0,0,0,0,["hE",Bhu(AR7),"h$",Bhs(AUY),"eh",Bhr(A9X)],AHe,0,F6,[],0,0,0,0,["hE",Bhu(AKl),"h$",Bhs(A8E),"eh",Bhr(ANE)],AEb,0,F6,[],0,0,0,0,["hE",Bhu(ALc),"h$",Bhs(A$Z),"eh",Bhr(ARF)],Za,0,F6,[],0,0,0,0,["hE",Bhu(AXe),"h$",Bhs(A7z),"eh",Bhr(AKC)],I2,0,C2,[],0,0,0,0,["hE",Bhu(AI1),"hB",Bhu(AQo),"hT",Bhv(A7S),"gY",Bhs(A3V),"hF",Bhr(A6f),"gn",Bhr(AVO)],AFy,0,D,[],4,3,0,0,0,JY,"ArrayStoreException",
21,B0,[],0,3,0,0,0]);
Bhq([In,0,D,[],1,0,0,0,0,BE,0,In,[],1,0,0,BO,["h5",Bhr(AYT),"hW",Bhr(AX7),"ib",Bhr(A8u),"hq",Bhr(A9W)],Df,0,BE,[],0,0,0,0,["h7",Bhs(ALt),"h5",Bhr(AWz),"hW",Bhr(A00),"ib",Bhr(AUK),"l",Bhr(A5u),"hq",Bhr(AM6)],Mx,"MissingResourceException",16,B0,[],0,3,0,0,0,FE,0,CL,[],1,0,0,0,["gY",Bhs(ATz),"h$",Bhs(A9g),"gn",Bhr(AQR)],EB,0,FE,[],0,0,0,0,["hE",Bhu(AXg),"eh",Bhr(AZz)],Hf,0,EB,[],0,0,0,0,["hE",Bhu(AYw),"eh",Bhr(AYX)],EE,0,FE,[],0,0,0,0,["hE",Bhu(AXy),"eh",Bhr(A2L)],Hc,0,EB,[],0,0,0,0,["hE",Bhu(A4q),"gr",Bhs(AWH)],AAw,
0,EB,[],0,0,0,0,["hE",Bhu(A$q),"hB",Bhu(ARb)],BN,0,D,[],1,0,0,0,0,RQ,0,In,[Gv],0,0,0,0,["l",Bhr(TT)],R_,0,CL,[],0,0,0,0,["hE",Bhu(APk),"eh",Bhr(A5$),"h$",Bhs(A6e)],BF,0,D,[Gv,CI],0,3,0,0,0,N9,0,C2,[],0,0,0,0,["eh",Bhr(A6l)],H7,0,C2,[],0,0,0,0,["hE",Bhu(AJX),"gr",Bhs(A54),"eh",Bhr(A6E),"h$",Bhs(AKL),"gY",Bhs(AKn)],E5,0,C2,[],0,0,0,0,["hE",Bhu(A0V),"eh",Bhr(A9R),"h7",Bhs(ANh),"gY",Bhs(AJN),"gr",Bhs(A8o),"h$",Bhs(AMW)],RN,0,E5,[],0,0,0,0,["h7",Bhs(AOV),"eh",Bhr(AVY)],ON,0,C9,[],0,0,0,0,["hR",Bht(A3r),"eh",Bhr(AY6)],Fz,
0,C9,[],0,0,0,0,["hR",Bht(AWO),"eh",Bhr(APt),"gY",Bhs(ASb)],Kd,0,C2,[],0,0,0,0,["gr",Bhs(AQw),"eh",Bhr(ATl),"hE",Bhu(AIC),"gY",Bhs(AY_),"h$",Bhs(AUQ)],FG,0,C9,[],0,0,0,0,["hQ",Bhr(A2_),"hR",Bht(AN3),"hB",Bhu(AMF),"hT",Bhv(APa),"eh",Bhr(AU2),"gY",Bhs(AUH)],Q_,0,C9,[],0,0,0,0,["hR",Bht(AWT),"eh",Bhr(A53)],N7,0,C9,[],0,0,0,0,["hR",Bht(AIU),"eh",Bhr(AOl)],Hj,0,C2,[],0,0,0,0,["gr",Bhs(A94),"hE",Bhu(ARR),"eh",Bhr(A5V),"gY",Bhs(APn),"h$",Bhs(A66)],AAZ,0,Hj,[],0,0,0,0,0,AFZ,0,Hj,[],0,0,0,0,0,RA,0,EE,[],0,0,0,0,["hE",
Bhu(AZZ)],SO,0,EE,[],0,0,0,0,["hE",Bhu(A47)],Jf,0,EE,[],0,0,0,0,["hE",Bhu(A8h),"gr",Bhs(A9q)],O1,0,Jf,[],0,0,0,0,["hE",Bhu(AO8),"gr",Bhs(A5E)],Hy,0,EE,[],0,0,0,0,["hE",Bhu(A$U),"eh",Bhr(AVe)],Oj,0,Hy,[],0,0,0,0,["hE",Bhu(AOw)],PJ,0,EE,[],0,0,0,0,["hE",Bhu(AV1)],ADM,0,Jf,[],0,0,0,0,["hE",Bhu(AKP)],QC,0,Hy,[],0,0,0,0,["hE",Bhu(AXZ)],X$,0,FE,[],0,0,0,0,["hE",Bhu(A$F),"hB",Bhu(AT7),"eh",Bhr(A6I)],ACv,0,FE,[],0,0,0,0,["hE",Bhu(ASd),"hB",Bhu(AII),"eh",Bhr(A7H)],G5,0,D,[],1,0,0,0,0,AIm,0,EB,[],0,0,0,0,["hE",Bhu(AJw)],AAu,
0,Hc,[],0,0,0,0,["hE",Bhu(AQ2)],ACK,0,Hf,[],0,0,0,0,["hE",Bhu(A7Y)],ADH,0,EB,[],0,0,0,0,["hE",Bhu(AR8)],AF8,0,Hc,[],0,0,0,0,["hE",Bhu(AJG)],XZ,0,Hf,[],0,0,0,0,["hE",Bhu(A78)],PB,0,CL,[],4,0,0,0,["hE",Bhu(A30),"h$",Bhs(A22),"eh",Bhr(AQ4)],W0,0,CL,[],0,0,0,0,["hE",Bhu(AYP),"h$",Bhs(AY7),"eh",Bhr(A$R)],ACu,0,CL,[],0,0,0,0,["hE",Bhu(AOY),"h$",Bhs(AWx),"eh",Bhr(AYz)],Q7,0,CL,[],4,0,0,0,["hE",Bhu(A6Q),"h$",Bhs(AZO),"eh",Bhr(A4A)],AHu,0,CL,[],0,0,0,0,["hE",Bhu(A51),"h$",Bhs(AWS),"eh",Bhr(ANM)]]);
Bhq([AB5,0,CL,[],0,0,0,0,["hE",Bhu(AZA),"h$",Bhs(ANz),"eh",Bhr(AYj)],AAC,0,C2,[],0,0,0,0,["hE",Bhu(AV4),"eh",Bhr(AMi),"gr",Bhs(AZb),"g0",Bhr(A5O),"h$",Bhs(AZa)],WA,0,C2,[],4,0,0,0,["hE",Bhu(A5W),"eh",Bhr(AZX),"gr",Bhs(A7G),"g0",Bhr(AIo),"h$",Bhs(AWk)],AHp,0,CL,[],4,0,0,0,["hE",Bhu(APs),"h$",Bhs(A1x),"eh",Bhr(AP5)],AFm,0,CL,[],0,0,0,0,["hE",Bhu(ARN),"h$",Bhs(A1m),"eh",Bhr(AJh)],ABB,0,CL,[],0,0,0,0,["hE",Bhu(A2Q),"h$",Bhs(ALB),"eh",Bhr(ANB)],Jb,0,C2,[],0,0,0,0,["hE",Bhu(AJB),"gr",Bhs(A6Z),"eh",Bhr(AXR),"h$",Bhs(AS$)],AHr,
0,Jb,[],0,0,0,0,["hE",Bhu(ALH),"hB",Bhu(AUX),"hT",Bhv(AJi),"gY",Bhs(A4V),"eh",Bhr(A9o)],AD6,0,Jb,[],0,0,0,0,["hE",Bhu(AQf),"eh",Bhr(AY8)],Lf,0,Bx,[IY],0,3,0,0,["ii",Bhv(AM7),"Jd",Bhu(AYW),"dk",Bhs(AZn),"dv",Bht(A8y),"k",Bht(AXq)],AEH,0,C9,[],0,0,0,0,["hR",Bht(AL6),"hB",Bhu(AYK),"hT",Bhv(A1C),"eh",Bhr(AR0),"gY",Bhs(AN_)],N4,0,C9,[],0,0,0,0,["hR",Bht(AQq),"eh",Bhr(AOm)],VV,0,C9,[],0,0,0,0,["hR",Bht(A7Z),"eh",Bhr(A8V)],AIl,0,D,[],4,3,0,0,0,It,0,D,[],4,0,0,ATi,0,RF,0,C9,[],0,0,0,0,["hR",Bht(ATH),"eh",Bhr(A$Q)],KE,
0,C2,[],0,0,0,0,["gr",Bhs(A5_),"hE",Bhu(Sv),"hB",Bhu(AN9),"hT",Bhv(A0z),"eh",Bhr(AUo),"gY",Bhs(AJc),"h$",Bhs(AUy)],Ns,0,C2,[],0,0,0,0,["gr",Bhs(AZl),"hE",Bhu(N8),"hB",Bhu(A6t),"hT",Bhv(ATD),"eh",Bhr(A$c),"gY",Bhs(AL9),"h$",Bhs(A6F)],F_,0,C9,[],0,0,0,0,["hR",Bht(A7l),"hB",Bhu(A5w),"hT",Bhv(AKW),"eh",Bhr(A9r),"gY",Bhs(A7a)],Uv,0,G5,[],0,0,0,0,["ik",Bhs(AK5),"im",Bht(AS6)],Uw,0,G5,[],0,0,0,0,["ik",Bhs(A7_),"im",Bht(AVE)],ZQ,0,D,[],0,0,0,0,0,AC6,0,D,[],4,0,0,0,0,Wx,0,D,[],4,3,0,0,0,D$,"NegativeArraySizeException",
21,B0,[],0,3,0,0,0,V1,0,D,[],0,0,0,0,0,L7,0,D,[],0,3,0,0,0,ADX,0,D,[],4,3,0,0,0,Nm,0,BN,[],0,0,0,0,["hY",Bhr(A2J)],MO,0,BN,[],0,0,0,0,["hY",Bhr(A4k)],ZM,0,BN,[],0,0,0,0,["hY",Bhr(A7I)],Z9,0,BN,[],0,0,0,0,["hY",Bhr(AUz)],Z$,0,BN,[],0,0,0,0,["hY",Bhr(AMH)],Nj,0,BN,[],0,0,0,0,["hY",Bhr(ALr)],LZ,0,Nj,[],0,0,0,0,["hY",Bhr(ANi)],ABl,0,BN,[],0,0,0,0,["hY",Bhr(A2c)],N1,0,LZ,[],0,0,0,0,["hY",Bhr(AWW)],AEB,0,N1,[],0,0,0,0,["hY",Bhr(AQT)],Yx,0,BN,[],0,0,0,0,["hY",Bhr(A0h)],WU,0,BN,[],0,0,0,0,["hY",Bhr(AQN)],ACT,0,BN,[],
0,0,0,0,["hY",Bhr(AVL)],AGR,0,BN,[],0,0,0,0,["hY",Bhr(A5J)],ABr,0,BN,[],0,0,0,0,["hY",Bhr(AW5)],AGk,0,BN,[],0,0,0,0,["hY",Bhr(AOE)],Zz,0,BN,[],0,0,0,0,["hY",Bhr(ATb)],AAp,0,BN,[],0,0,0,0,["hY",Bhr(A0f)],Wf,0,BN,[],0,0,0,0,["hY",Bhr(AMm)],ABT,0,BN,[],0,0,0,0,["hY",Bhr(A9O)],AGt,0,BN,[],0,0,0,0,["hY",Bhr(AWU)],Z0,0,BN,[],0,0,0,0,["hY",Bhr(APw)]]);
Bhq([ADo,0,BN,[],0,0,0,0,["hY",Bhr(AMu)],YC,0,BN,[],0,0,0,0,["hY",Bhr(A1G)],AA0,0,BN,[],0,0,0,0,["hY",Bhr(A3F)],AGE,0,BN,[],0,0,0,0,["hY",Bhr(AUT)],XK,0,BN,[],0,0,0,0,["hY",Bhr(ASF)],W_,0,BN,[],0,0,0,0,["hY",Bhr(ARo)],ABp,0,BN,[],0,0,0,0,["hY",Bhr(A7E)],K_,0,BN,[],0,0,0,0,["hY",Bhr(APU)],AHl,0,K_,[],0,0,0,0,["hY",Bhr(AQ8)],AEL,0,Nm,[],0,0,0,0,["hY",Bhr(AYG)],W7,0,MO,[],0,0,0,0,["hY",Bhr(AN0)],ACY,0,BN,[],0,0,0,0,["hY",Bhr(APX)],ADh,0,BN,[],0,0,0,0,["hY",Bhr(AVq)],AEm,0,BN,[],0,0,0,0,["hY",Bhr(A1i)],AEC,0,BN,
[],0,0,0,0,["hY",Bhr(AIw)],UD,0,D,[],0,3,0,0,0,J_,0,D,[],0,3,0,0,0,ACi,0,D,[],0,3,0,0,0,Z5,0,D,[],4,3,0,0,0,Pm,0,Ew,[],0,0,0,0,["iV",Bhs(AT9),"m0",Bhs(AMz),"eV",Bht(ARf)],CM,0,BV,[],9,3,0,AZx,0,Gt,0,Ic,[],0,0,0,0,0,AH9,0,D,[],3,3,0,0,0,Qr,0,D,[C4],3,3,0,0,0,ADf,0,D,[Qr,C4],1,3,0,0,["Sz",Bht(A9H),"TJ",Bhs(ARB),"Ll",Bht(AZm),"WI",Bhu(A3g),"YM",Bhu(A8e)],Qj,0,D,[FO],0,0,0,0,["rC",Bhs(A4x)],Eq,0,BV,[],12,3,0,F9,0,M$,0,D,[],0,3,0,0,0,LY,0,D,[Mz],0,3,0,0,0,PI,0,D,[],3,3,0,0,0,I3,0,LY,[PI],0,3,0,0,["l",Bhr(AJY)],Ba,
"StringIndexOutOfBoundsException",21,O,[],0,3,0,0,0,QW,0,BE,[],0,0,0,0,["h7",Bhs(AMP)],QV,0,BE,[],0,0,0,0,["h7",Bhs(AXx)],OJ,0,BE,[],0,0,0,0,["h7",Bhs(APL),"l",Bhr(A1O)],Se,0,BE,[],0,0,0,0,["h7",Bhs(A7o)],Sc,0,BE,[],0,0,0,0,["h7",Bhs(ATG)],Sd,0,BE,[],0,0,0,0,["h7",Bhs(A4n)],Sh,0,BE,[],0,0,0,0,["h7",Bhs(A0G)],Si,0,BE,[],0,0,0,0,["h7",Bhs(AIp)],Sf,0,BE,[],0,0,0,0,["h7",Bhs(ANQ)],Sg,0,BE,[],0,0,0,0,["h7",Bhs(AQu)],Sj,0,BE,[],0,0,0,0,["h7",Bhs(AU0)],Sk,0,BE,[],0,0,0,0,["h7",Bhs(AZ5)],OI,0,BE,[],0,0,0,0,["h7",Bhs(A$3)],OW,
0,BE,[],0,0,0,0,["h7",Bhs(ANV)],OG,0,BE,[],0,0,0,0,["h7",Bhs(ALN)],OH,0,BE,[],0,0,0,0,["h7",Bhs(A1v)],OM,0,BE,[],0,0,0,0,["h7",Bhs(AO0)],OF,0,BE,[],0,0,0,0,["h7",Bhs(A8O)]]);
Bhq([OK,0,BE,[],0,0,0,0,["h7",Bhs(AY0)],OL,0,BE,[],0,0,0,0,["h7",Bhs(ASv)],Jr,0,D,[],0,0,0,0,0,E6,0,D,[Ho],0,3,0,Dq,0,Cb,"IllegalStateException",21,B0,[],0,3,0,0,0,Km,"IllegalMonitorStateException",21,B0,[],0,3,0,0,0,AGy,0,D,[Mg],0,0,0,0,0,AGB,0,D,[],0,3,0,0,0,ADC,0,D,[],4,3,0,0,0,ABV,0,D,[C4],1,3,0,0,0,Hh,0,D,[],3,3,0,0,0,Rr,0,D,[Hh],0,3,0,0,["cV",Bhr(A89)],UO,0,CM,[],12,0,0,0,0,UP,0,CM,[],12,0,0,0,0,US,0,CM,[],12,0,0,0,0,UT,0,CM,[],12,0,0,0,0,UQ,0,CM,[],12,0,0,0,0,UR,0,CM,[],12,0,0,0,0,UL,0,CM,[],12,0,0,0,
0,UM,0,CM,[],12,0,0,0,0,UK,0,CM,[],12,0,0,0,0,Om,0,D,[],3,3,0,0,0,PT,0,D,[Om],0,3,0,0,0,Xu,0,D,[C4],4,3,0,0,0,PH,0,D,[],3,3,0,0,0,S8,0,D,[PH],0,0,0,0,["e",Bhs(A3l),"iP",Bhs(AVX)],P_,0,D,[Hh],0,3,0,0,0,Oi,0,I2,[],0,0,0,0,["hB",Bhu(ANa),"hT",Bhv(A$T),"hF",Bhr(ALw)],AB$,0,D,[JP],0,0,0,0,0,HT,0,E6,[],0,0,0,0,["cV",Bhr(AR$)],Oc,0,D,[],32,0,0,Bbv,0,AHm,0,D,[C4,Gs],1,3,0,0,["Xn",Bht(A32),"Zf",Bht(AQM),"L1",Bhu(AIO),"UD",Bhs(AIT),"Po",Bhu(A1U)],ID,0,D,[C4],3,3,0,0,0,Of,0,D,[ID],0,0,0,0,["rC",Bhs(X9)],Qb,0,D,[],0,3,
0,0,0,IS,0,D,[JP,EJ],0,3,0,0,0,R$,0,D,[EJ],0,3,0,0,0,J9,0,D,[],4,3,0,0,0,Od,0,D,[Ho],0,0,0,0,["cV",Bhr(AIJ)],Rt,0,D,[],3,3,0,0,0,JE,0,D,[Rt],3,3,0,0,0,Un,0,D,[],3,3,0,0,0,H_,0,D,[JE,Un],1,3,0,0,0,MC,0,H_,[],0,3,0,0,0,Dp,0,MC,[],0,3,0,0,0,IQ,0,H_,[],1,3,0,0,0,JI,0,IQ,[],0,3,0,0,["iT",Bhu(AO6)],Jm,0,D,[ID],0,0,0,0,["rC",Bhs(ARE)],Fm,0,D,[DO],1,3,0,0,0,Mp,0,Fm,[],0,3,0,Do,["c6",Bhr(AAW)]]);
Bhq([Iq,"IllegalCharsetNameException",19,V,[],0,3,0,0,0,SA,0,D,[D0],3,3,0,0,0,Md,0,D,[SA],0,3,0,AAc,0,Ly,0,D,[],3,3,0,0,0,BL,0,D,[Ly],0,3,0,0,0,Q9,0,BL,[],0,3,0,0,["d1",Bhr(A72),"d_",Bhs(A7C),"dY",Bht(ALs)],RY,0,BL,[],0,3,0,0,["d1",Bhr(AMO),"d_",Bhs(A96),"dY",Bht(AJ_)],Tf,0,BL,[],0,3,0,0,["d1",Bhr(ASX),"d_",Bhs(AT_),"dY",Bht(A5z)],Pj,0,BL,[],0,3,0,0,["d1",Bhr(AIz),"d_",Bhs(A6L),"dY",Bht(A1M)],ABs,0,BL,[],0,3,0,0,["d1",Bhr(ATL),"d_",Bhs(A3S),"dY",Bht(A$J)],ABL,0,BL,[],0,3,0,0,["d1",Bhr(ALd),"d_",Bhs(AMn),"dY",
Bht(A8F)],Xm,0,BL,[],0,3,0,0,["d1",Bhr(AZ$),"d_",Bhs(A9C),"dY",Bht(A4Q)],AG_,0,BL,[],0,3,0,0,["d1",Bhr(A7b),"d_",Bhs(A9E),"dY",Bht(A$2)],VR,0,BL,[],0,3,0,0,["d1",Bhr(A$V),"d_",Bhs(AMY),"dY",Bht(AL_)],AAi,0,BL,[],0,3,0,0,["d1",Bhr(ATe),"d_",Bhs(A2f),"dY",Bht(AT8)],YM,0,BL,[],0,3,0,0,["d1",Bhr(AOP),"d_",Bhs(A3Y),"dY",Bht(A6G)],Xi,0,BL,[],0,3,0,0,["d1",Bhr(A3k),"d_",Bhs(A5y),"dY",Bht(AS1)],ACD,0,BL,[],0,3,0,0,["d1",Bhr(A9s),"d_",Bhs(A7D),"dY",Bht(ASL)],Vq,0,BL,[],0,3,0,0,["d1",Bhr(A13),"d_",Bhs(AUJ),"dY",Bht(AYZ)],ACB,
0,BL,[],0,3,0,0,["d1",Bhr(APm),"d_",Bhs(ARy),"dY",Bht(AYH)],AH0,0,BL,[],0,3,0,0,["d1",Bhr(A4a),"d_",Bhs(AXH),"dY",Bht(AIs)],XM,0,BL,[],0,3,0,0,["d1",Bhr(AUR),"d_",Bhs(AJQ),"dY",Bht(A9b)],AF9,0,BL,[],0,3,0,0,["d1",Bhr(AWd),"d_",Bhs(AOt),"dY",Bht(A7v)],AE8,0,BL,[],0,3,0,0,["d1",Bhr(AUh),"d_",Bhs(A57),"dY",Bht(AZ9)],ACc,0,BL,[],0,3,0,0,["d1",Bhr(A5c),"d_",Bhs(A3J),"dY",Bht(ASK)],Vs,0,BL,[],0,3,0,0,["d1",Bhr(A2R),"d_",Bhs(A0I),"dY",Bht(AUf)],AD0,0,BL,[],0,3,0,0,["d1",Bhr(A3U),"d_",Bhs(AQ$),"dY",Bht(A0x)],AGi,0,
BL,[],0,3,0,0,["d1",Bhr(APc),"d_",Bhs(AJq),"dY",Bht(A5f)],ABk,0,BL,[],0,3,0,0,["d1",Bhr(ATX),"d_",Bhs(AIK),"dY",Bht(A0c)],AEV,0,BL,[],0,3,0,0,["d1",Bhr(AWi),"d_",Bhs(AP1),"dY",Bht(AN4)],YK,0,BL,[],0,3,0,0,["d1",Bhr(A05),"d_",Bhs(A2O),"dY",Bht(A8R)],ADV,0,BL,[],0,3,0,0,["d1",Bhr(ASB),"d_",Bhs(A4K),"dY",Bht(A3M)],WL,0,BL,[],0,3,0,0,["d1",Bhr(ANe),"d_",Bhs(AIR),"dY",Bht(A5m)],AHc,0,BL,[],0,3,0,0,["d1",Bhr(AMf),"d_",Bhs(A$4),"dY",Bht(AJO)],YY,0,BL,[],0,3,0,0,["d1",Bhr(AX5),"d_",Bhs(AYc),"dY",Bht(A$0)],AEz,0,BL,
[],0,3,0,0,["d1",Bhr(AIG),"d_",Bhs(APO),"dY",Bht(A56)],AEd,0,BL,[],0,3,0,0,["d1",Bhr(APH),"d_",Bhs(A7B),"dY",Bht(APp)],AEI,0,BL,[],0,3,0,0,["d1",Bhr(A4y),"d_",Bhs(AW2),"dY",Bht(AZr)],ADk,0,BL,[],0,3,0,0,["d1",Bhr(AQ5),"d_",Bhs(A4_),"dY",Bht(AY2)],AC_,0,BL,[],0,3,0,0,["d1",Bhr(AQS),"d_",Bhs(A2M),"dY",Bht(AQL)],Ms,"NoSuchElementException",16,B0,[],0,3,0,0,0,Bc,"GdxRuntimeException",8,B0,[],0,3,0,0,0,WR,0,D,[],4,3,0,0,0,TH,0,BE,[],0,0,0,0,["h7",Bhs(AU7)],RL,0,BE,[],0,0,0,0,["h7",Bhs(AYA)],PR,0,BE,[],0,0,0,0,["h7",
Bhs(AJF)],PQ,0,BE,[],0,0,0,0,["h7",Bhs(A1h)],Q2,0,BE,[],0,0,0,0,["h7",Bhs(AOR)],Sr,0,BE,[],0,0,0,0,["h7",Bhs(A9l)],OB,0,BE,[],0,0,0,0,["h7",Bhs(ARZ)]]);
Bhq([S4,0,BE,[],0,0,0,0,["h7",Bhs(ATh)],RJ,0,BE,[],0,0,0,0,["h7",Bhs(A$s)],RK,0,BE,[],0,0,0,0,["h7",Bhs(AMb)],Oy,0,BE,[],0,0,0,0,["h7",Bhs(AVl)],SG,0,BE,[],0,0,0,0,["h7",Bhs(A4I)],SJ,0,BE,[],0,0,0,0,["h7",Bhs(A6X)],T2,0,BE,[],0,0,0,0,["h7",Bhs(A88)],Tx,0,BE,[],0,0,0,0,["h7",Bhs(AVS)],Ob,0,BE,[],0,0,0,0,["h7",Bhs(ALZ)],J1,0,BE,[],0,0,0,0,["h7",Bhs(AR3)],Tl,0,J1,[],0,0,0,0,["h7",Bhs(A8p)],F3,0,D,[Hh],0,3,0,0,["cV",Bhr(AYn)],ADp,0,D,[],4,3,0,0,0,Rm,0,D,[],32,0,0,Bcq,0,NN,"ConcurrentModificationException",16,B0,
[],0,3,0,0,0,Kx,0,IQ,[],0,3,0,0,["iT",Bhu(AM0)],MQ,0,E3,[DO],0,3,0,0,["mD",Bhr(A$O),"mB",Bhr(A1w),"l",Bhr(AX_)],HK,0,D,[],0,0,0,0,0,KL,0,D,[],4,3,0,0,0,Uc,0,D,[],0,3,0,0,0,GH,"BitmapFont$BitmapFontData",14,D,[],0,3,0,0,0,EZ,0,BV,[],12,3,0,S2,0,JC,0,D,[D0],0,3,0,0,0,Fa,0,D,[],1,3,0,0,0,Ni,0,D,[],3,3,0,0,0,LO,0,Fa,[DO,IY,ET,Ni],1,3,0,0,0,Gk,0,Fa,[DO],1,3,0,0,["b8",Bhs(ASj),"b7",Bhs(AXQ)],GF,0,D,[],0,3,0,EM,0,Me,0,D,[],3,3,0,0,0,QX,0,D,[],3,3,0,0,0,OC,0,D,[Hh,Me,QX],0,0,0,0,["cV",Bhr(A6V)],KX,"BitmapFont$Glyph",
14,D,[],0,3,0,0,["l",Bhr(ANZ)],Ws,0,D,[EJ,DO],4,3,0,0,0,HG,0,D,[D0],0,3,0,Ru,0,Ln,0,LO,[],1,0,0,0,0,Jw,0,Ln,[],0,0,0,0,0,LG,0,D,[],1,3,0,0,0,CZ,0,D,[],0,3,0,0,0,QJ,0,D,[],0,3,0,0,0,Ry,0,D,[],32,0,0,Bff,0,KG,0,D,[D0],3,3,0,0,0,Ne,0,D,[KG],0,3,0,0,["lb",Bhr(ANx),"mS",Bhr(AS7),"ja",Bhu(A5U),"k2",Bht(A07),"k_",Bht(AYs)],K$,0,D,[D0],3,3,0,0,0,Id,0,D,[K$],0,3,0,0,["k4",Bhr(AOg),"k8",Bhr(AXJ),"k1",Bhu(ARr),"jb",Bhs(AJL),"i6",Bhr(A9x),"la",Bhr(A7u)],ACI,0,D,[KG],0,3,0,0,["lb",Bhr(AZt),"mS",Bhr(ALS),"ja",Bhu(AKj),"k2",
Bht(ARg),"k_",Bht(AMX)],AEX,0,D,[K$],0,3,0,0,["k4",Bhr(ASO),"k8",Bhr(AW9),"k1",Bhu(A2V),"jb",Bhs(A8K),"i6",Bhr(APd),"la",Bhr(AKJ)],Ph,0,D,[KG],0,3,0,Bap,["lb",Bhr(AYy),"mS",Bhr(A5v),"ja",Bhu(AYM),"k2",Bht(AUj),"k_",Bht(AMp)],R8,0,Ne,[],0,3,0,0,0,O6,0,Id,[],0,3,0,0,0,AGr,0,D,[EJ],0,3,0,0,0]);
Bhq([AGo,0,D,[],4,3,0,0,0,Fp,0,D,[],3,3,0,0,0,C8,0,Gk,[Fp],0,0,0,0,["fM",Bhr(AWF)],MB,0,D,[],0,3,0,0,0,IK,0,Fa,[DO],1,3,0,0,0,HC,0,D,[],4,3,0,CP,0,Fi,0,Fa,[DO],1,3,0,0,["b8",Bhs(ASn),"b7",Bhs(AVC)],AEg,0,D,[],0,3,0,0,0,IO,0,Fa,[DO],1,3,0,0,0,AFr,0,D,[C4],1,3,0,0,0,Qf,0,D,[],3,3,0,0,0,Lk,0,D,[Qf],0,3,0,0,0,Ig,0,D,[D0],0,3,0,TG,0,I0,0,IK,[],1,0,0,0,0,HB,0,I0,[],0,0,0,0,["lJ",Bhs(A5S),"lY",Bht(A4g),"lP",Bhr(AIy)],IT,0,Fi,[],1,0,0,0,0,Ja,0,IT,[],0,0,0,0,["lZ",Bhs(ASw),"lQ",Bht(ARK),"lP",Bhr(A55)],GO,0,BV,[],12,
3,0,JU,0,Gx,0,BV,[],12,3,0,Zv,0,JT,0,MB,[],0,3,0,0,["l",Bhr(A$M)],AE1,0,D,[D0],0,3,0,0,0,Is,0,IO,[],1,0,0,0,0,KT,0,Is,[],0,0,0,0,["l8",Bhs(ANo),"lR",Bht(A26),"lP",Bhr(A0d)],Zc,0,D,[C4],1,3,0,0,0,DN,0,BV,[],12,3,0,ALx,0,F5,0,BV,[],12,3,0,AW0,0,Xj,0,D,[Lj],1,3,0,0,["IH",Bhs(A$B),"YF",Bhr(AK9)],H5,0,IT,[Fp],1,0,0,0,["lP",Bhr(A6b),"fM",Bhr(AST)],Os,0,H5,[],0,0,0,0,["lZ",Bhs(APP),"lQ",Bht(A6Y)],Px,0,H5,[],0,0,0,0,["lZ",Bhs(AW$),"lQ",Bht(A3H)],II,0,Is,[Fp],1,0,0,0,["lP",Bhr(A2h),"fM",Bhr(A7s)],RS,0,II,[],0,0,0,0,
["l8",Bhs(AZ3),"lR",Bht(AZv)],SR,0,II,[],0,0,0,0,["l8",Bhs(A5K),"lR",Bht(AZ6)],Hk,"UnsupportedOperationException",21,B0,[],0,3,0,0,0,EV,"ReadOnlyBufferException",18,Hk,[],0,3,0,0,0,I9,0,I0,[Fp],1,0,0,0,["lP",Bhr(APF)],Oz,0,I9,[],0,0,0,0,["lJ",Bhs(ANk),"lY",Bht(AIx)],TL,0,I9,[],0,0,0,0,["lJ",Bhs(AUg),"lY",Bht(AJZ)],I$,"BufferUnderflowException",18,B0,[],0,3,0,0,0,Ex,0,BV,[],12,3,0,Nq,0,FX,0,LG,[],1,3,0,0,0,O5,0,FX,[],0,3,0,0,["l$",function(b,c,d,e,f,g,h){return APx(this,b,c,d,e,f,g,h);}],FF,"IOException",20,
Da,[],0,3,0,0,0,H1,0,D,[JE,Ni],1,3,0,0,0,Y4,0,H1,[],0,3,0,0,0,Wk,0,H1,[],0,3,0,0,0,ABw,0,D,[M4],0,3,0,0,0,Pv,0,D,[],4,3,0,0,0,UB,0,D,[],0,3,0,BeZ,0,DS,0,BV,[],12,3,0,IP,0]);
Bhq([Kj,0,D,[],4,3,0,0,0,Mu,0,D,[],4,3,0,0,0,G7,0,BV,[],12,0,0,AEs,0,C5,0,BV,[],12,3,0,IE,0,GD,0,BV,[],12,3,0,AI$,0,T_,0,D,[],0,3,0,0,0,TY,0,D,[],32,0,0,BaF,0,NO,0,D,[],1,3,0,0,0,G0,"BufferOverflowException",18,B0,[],0,3,0,0,0,Hm,0,D,[],1,3,0,0,0,ABF,0,D,[],4,3,0,0,0,NR,0,D,[],1,3,0,0,0,ABq,0,D,[],4,3,0,0,0,Ps,0,D,[],4,3,0,0,0,Iy,0,D,[],4,3,0,0,0,NX,0,D,[],1,3,0,0,0,Ci,0,NX,[],0,3,0,0,0,OZ,0,D,[],3,3,0,0,0,Ch,0,D,[OZ],0,3,0,0,0,B_,0,D,[],1,3,0,0,0,RZ,0,B_,[],0,3,0,0,0,O3,0,B_,[],0,3,0,0,0,Qc,0,B_,[],0,3,0,0,
0,HY,0,B_,[],0,3,0,0,0,RM,0,B_,[],0,3,0,0,0,PM,0,B_,[],0,3,0,0,0,OQ,0,B_,[],0,3,0,0,0,R5,0,B_,[],0,3,0,0,0,Vh,0,B_,[],0,3,0,0,0,R6,0,B_,[],0,3,0,0,0,Pt,0,B_,[],0,3,0,0,0,Ss,0,B_,[],0,3,0,0,0,UY,0,B_,[],0,3,0,0,0,K4,0,B_,[],0,3,0,0,0,P3,0,B_,[],0,3,0,0,0,Sb,0,B_,[],0,3,0,0,0,MN,0,B_,[],0,3,0,0,0,RE,0,B_,[],0,3,0,0,0,Xc,0,D,[],4,3,0,0,0,Pq,0,HO,[],0,3,0,0,0,W4,0,D,[],0,3,0,0,0,QE,0,D,[ID],0,0,0,0,["rC",Bhs(AD9)],ZH,0,D,[Hh,Me],3,0,0,0,0,Lx,0,NO,[],1,3,0,0,0,Qg,0,Lx,[],0,3,0,0,0,Oq,0,Hm,[],4,3,0,0,0,Cg,0,NR,[],
0,3,0,0,0,JR,0,Hm,[],4,0,0,Bbc,0,Nv,0,D,[],3,3,0,0,0,S6,0,D,[Nv],0,0,0,0,["nc",Bhs(AZW),"ne",Bhs(A6i)]]);
Bhq([TU,0,D,[Nv],0,0,0,0,["nc",Bhs(A6D),"ne",Bhs(AUt)],DD,0,D,[],0,3,0,Iz,0,AHt,0,D,[],4,3,0,0,0,ACj,0,D,[],0,0,0,0,0,YI,0,D,[C4],1,3,0,0,0,On,0,IH,[LV],0,0,0,0,0,QL,0,D,[],0,3,0,BgC,0,Xh,0,D,[],4,3,0,0,0,JS,0,D,[],4,0,0,FC,0,Io,0,D,[JE],1,3,0,0,["mj",Bhu(A80),"l_",Bhr(A2a)],NC,0,Io,[],0,3,0,0,["nE",Bhr(AZK),"mj",Bhu(A98),"l_",Bhr(AOf)],MV,"UnsupportedEncodingException",20,FF,[],0,3,0,0,0,SW,0,B_,[],0,3,0,0,0,Qd,0,D,[],0,3,0,0,0,GL,0,BV,[],12,3,0,Yy,0,ACG,0,B_,[],0,3,0,0,0,BT,0,E3,[DO,CI],0,3,0,B6,0,Nu,"CoderMalfunctionError",
19,G1,[],0,3,0,0,0,KB,"ArithmeticException",21,B0,[],0,3,0,0,0,HQ,0,D,[],0,0,0,Gm,0,WI,0,D,[],0,0,0,0,0,NF,0,D,[],0,3,0,0,0,Na,"UnsupportedCharsetException",19,V,[],0,3,0,0,0,Rn,0,Io,[],0,0,0,0,["nE",Bhr(A4p)],Tr,0,D,[],0,3,0,0,0,J,0,D,[],0,3,0,Uj,0,Q4,0,D,[],0,0,0,BeB,0,G_,0,D,[],4,3,0,BdW,0,PO,0,Fm,[],0,3,0,0,["c6",Bhr(AW4)],Pd,0,Fm,[],0,3,0,0,["c6",Bhr(A8b)],JA,0,Fm,[],0,3,0,0,["c6",Bhr(AJb)],AGP,0,D,[],0,0,0,0,0,YT,0,D,[],0,0,0,0,0,R1,0,D,[],0,3,0,0,0,Ty,0,D,[],0,3,0,0,0,O2,0,D,[],3,3,0,0,0,UI,0,D,[O2],
0,3,0,0,0,AFD,0,D,[],0,3,0,0,0,ABM,0,D,[],4,3,0,0,0,ABg,0,D,[],0,0,0,0,0,Ut,0,D,[],0,3,0,0,0,GP,0,FF,[],0,3,0,0,0,NQ,"AssertionError",21,G1,[],0,3,0,0,0,Pn,0,Ew,[],0,0,0,0,0,LS,"InstantiationException",21,FW,[],0,3,0,0,0,Mt,"IllegalAccessException",21,FW,[],0,3,0,0,0,RW,0,FW,[],0,3,0,0,0,AFv,0,D,[],0,0,0,0,["l",Bhr(AP0)],Uh,0,FX,[],0,3,0,0,["l$",function(b,c,d,e,f,g,h){return ANX(this,b,c,d,e,f,g,h);}],UV,0,FX,[],0,3,0,0,["l$",function(b,c,d,e,f,g,h){return ATu(this,b,c,d,e,f,g,h);}]]);
Bhq([SB,0,FX,[],0,3,0,0,["l$",function(b,c,d,e,f,g,h){return A7r(this,b,c,d,e,f,g,h);}],Pk,0,Ew,[],0,0,0,0,["iV",Bhs(AJ5),"m0",Bhs(AXf),"eV",Bht(YN)],ADD,0,D,[],4,3,0,0,0,Gb,0,D,[CI,DO],0,3,0,0,0,Kv,0,D,[IY,ET],0,3,0,0,0,UU,0,D,[],4,3,0,AM1,0,Lr,"BufferUnderflowException",19,B0,[],0,3,0,0,0,Mj,"BufferOverflowException",19,B0,[],0,3,0,0,0,L8,"MalformedInputException",19,GP,[],0,3,0,0,["cW",Bhr(AMU)],Lq,"UnmappableCharacterException",19,GP,[],0,3,0,0,["cW",Bhr(AMd)],Oh,0,D,[],32,0,0,BfS,0,HU,0,E6,[],0,0,0,0,["cV",
Bhr(AZq)],VH,0,Ew,[],0,0,0,0,["iV",Bhs(AK4),"m0",Bhs(A42),"eV",Bht(AYp)],Og,0,Ew,[],0,0,0,0,["iV",Bhs(ANs),"m0",Bhs(AXC),"eV",Bht(ANU)],R3,0,D,[ID],0,0,0,0,["rC",Bhs(AHX)],SL,0,D,[FO],0,0,0,0,["rC",Bhs(AMR)]]);
let BfA=Lz(Kp);let BbJ=Lz(AJ$);let A_H=Lz(Bb6);let Ba2=Lz(Bg8);let A_K=Lz(Es);let A_m=Lz(AQ0);let BdT=Lz(Fr);let A_h=Lz(A0S);Bhz(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none","all",
"table","cell","actor","Array is empty.","Unable to create new instance: ","object cannot be null.","objects cannot be null.","index can\'t be >= size: "," >= ","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","","If no regions are specified, the font data must have an images path.","0","This TextureData implementation does not upload data itself","Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","start + count must be <= size: "," + "," <= ","end can\'t be >= size: ",
"start can\'t be > end: "," > ","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","\tat ","Caused by: ","Should never been thrown","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","Illegal radix: ","java.runtime.name","userAgent",
"os.name","Windows","OS X","no OS",".html","index.html","index-debug.html","assets/","assets.txt","resize","gdx.wasm.js","Cozette.fnt"," FPS using ","Re3R","JS3R","ChpR","RndR","WhiR","AceR","PouR","ScrR","MizR","XPPR","LasR","TrmR","DisR","GoQR","VCQR","LCQR","TuQR","LOAD_ASSETS","APP_CREATE","APP_LOOP","offset + length must be <= size: ","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home",
"Loading asset : ","Unsupported asset type ","Loading script : ","px","UTF-8","mousedown","mouseup","mousemove","wheel","touchstart","touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","hidden","capacity must be >= 0: ","The required capacity is too large: ","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","\\.","Invalid version string: ",
"Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL","iOS","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","object","function","string","number","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ",
"fSet","\\Q","\\E","\\\\E\\Q","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>",
"<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio",
"Text","t","Binary","Directory","public","protected","private","abstract","static","final","transient","volatile","synchronized","native","strictfp","interface","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","=","==","Action must be non-null","Index out of bounds","charsetName is null","Replacement preconditions do not hold","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","Given alpha and/or gamma are invalid.","CauchyAlternateDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS",
"Lower parameters A/B/C by holding a, b, or c;\nhold Shift and A/B/C to raise.","a – alpha; must not be NaN\nb – gamma; should be greater than 0.0","ArcsineDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","a – alpha; must be less than b\nb – beta; must be greater than a\nThe green line is the most accurate.","Given mu and/or sigma are invalid.","NormalAlternateDistribution with A=%.3f, B=%.3f; C=%.3f; median=%.3f at %d FPS, mode %d (J or K to change)","a – mu; must not be NaN\nb – sigma; should be greater than 0.0",
"TriangleVariantsScreen with A=%.3f, B=%.3f; median=%.3f at %d FPS, mode %d (J or K to change)","KumaraswamyDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS","Lower parameters A/B by holding a or b;\nhold Shift and A/B to raise.","a – alpha; should be greater than 0.0\nb – beta; should be greater than 0.0","BetaDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS","LumpDistribution with A=%.3f, B=%.3f at %d FPS","NormalDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","Raised NormalDistribution with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS",
"a – mu; must not be NaN\nb – sigma; should be greater than 0.0\nc - power; will be rounded to an int","Product of NormalDistribution s with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS","a – mu; must not be NaN\nb – sigma; should be greater than 0.0\nc - count; will be rounded to an int of at least 1","CauchyDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","LogCauchyDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","ErlangDistribution with A=%.3f, B=%.3f; at %d FPS","a – alpha; will be cast to an int, and should be greater or equal to 1\nb – lambda; should be greater than 0.0",
"ExponentialDistribution with A=%.3f; mean=%.3f at %d FPS","a – lambda; should be greater than 0.0","ParetoDistribution with A=%.3f, B=%.3f; median=%.3f at %d FPS","PowerDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS","ChiDistribution with A=%.3f; mean=%.3f at %d FPS","ChiSquareDistribution with A=%.3f; mean=%.3f at %d FPS","StudentsTDistribution with A=%.3f; median=%.3f at %d FPS","a – nu; should be greater than 0.0","a – alpha; must be less than b\nb – beta; must be greater than a","Given alpha and/or beta are invalid.",
"BinomialDistribution with A=%.3f, B=%.3f; mean=%.3f at %d FPS","Lower parameter A by holding a;\nhold Shift and A to raise.","a – alpha; should be greater than or equal to 0.0 and less than or equal to 1.0\nb – beta; will be cast to an int, and should be greater or equal to 0","Given alpha and/or skew are invalid.","ZipfianDistribution with A=%.3f, B=%.3f, zeta=%.6f; at %d FPS","a – alpha; should be an int or long greater than 0\nb – skew; should be greater than or equal to 0.0","TriangularDistribution with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS",
"a – alpha; requires a < b && a <= c\nb – beta; requires b > a && b >= c\nc – gamma; requires c >= a && c <= b","Given mu, sigma and/or iota are invalid.","KnobDistribution with A=%.3f, B=%.3f, C=%.3f; median=%.3f at %d FPS","a mu; must not be NaN\nb sigma; should be greater than 0.0\nc iota; must be between 0.0 and 1.0, both inclusive","MathUtils.sin() at %d FPS","Using ","Math.sin() at %d FPS","TrigTools.sin() at %d FPS","TrigTools.sinSmooth() at %d FPS","TrigTools.sinSmoother() at %d FPS","MathUtils.cos() at %d FPS",
"Math.cos() at %d FPS","TrigTools.cos() at %d FPS","TrigTools.cosSmooth() at %d FPS","TrigTools.cosSmoother() at %d FPS","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ","char "," =","kerning ",
"Error loading font file: ","No glyphs found.","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","New position "," is outside of range [0;","New limit ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ","The last byte in dst ",
"The last byte in src ","IGNORE","REPLACE","REPORT","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","Index ","BIG_ENDIAN","LITTLE_ENDIAN","The last float in src ","The last short in src ","Already prepared",
"Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\"," does not exist","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","newAction must be non-null","The specified font must contain at least one texture page.","Unknown Gdx2DPixmap Format: ","Intensity",
"LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.","�","averageCharsPerByte must be positive. Actual value is ",
"maxCharsPerByte must be positive. Actual value is ","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex",";\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n",
"void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * "," texture2D(u_sampler",",  v_tex",") *",";\n}","uniform sampler2D u_sampler","Given alpha and/or lambda are invalid.","Given lambda is invalid.","Given alpha is invalid.","Given nu is invalid.","Given alpha, beta, and/or gamma are invalid.","Asset loaded: ","file-f:","file-d:","01","01234567","0123456789","0123456789ABCDEF","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?",
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\'/!@#$%^&*()[]{}<>:?;|_=","NaN","0.0","-0.0","0.",".0","Infinity","-Infinity"," != ","Logical","Pixels","Negative bit address","Negative exponent","BigInteger divide by zero","alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigma","tau","upsilon","phi","chi","psi","omega","ALPHA","BETA","GAMMA","DELTA","EPSILON","ZETA","ETA","THETA","IOTA","KAPPA","LAMBDA","MU","NU","XI",
"OMICRON","PI","RHO","SIGMA","TAU","UPSILON","PHI","CHI","PSI","OMEGA","baal","agares","vassago","samigina","marbas","valefor","amon","barbatos","paimon","buer","gusion","sitri","beleth","leraje","eligos","zepar","botis","bathin","sallos","purson","marax","ipos","aim","naberius","glasya_labolas","bune","ronove","berith","astaroth","forneus","foras","asmoday","gaap","furfur","marchosias","stolas","phenex","halphas","malphas","raum","focalor","vepar","sabnock","shax","vine","bifrons","vual","haagenti","crocell",
"furcas","balam","alloces","caim","murmur","orobas","gremory","ose","amy","orias","vapula","zagan","valac","andras","flauros","andrealphus","kimaris","amdusias","belial","decarabia","seere","dantalion","andromalius","BAAL","AGARES","VASSAGO","SAMIGINA","MARBAS","VALEFOR","AMON","BARBATOS","PAIMON","BUER","GUSION","SITRI","BELETH","LERAJE","ELIGOS","ZEPAR","BOTIS","BATHIN","SALLOS","PURSON","MARAX","IPOS","AIM","NABERIUS","GLASYA_LABOLAS","BUNE","RONOVE","BERITH","ASTAROTH","FORNEUS","FORAS","ASMODAY","GAAP",
"FURFUR","MARCHOSIAS","STOLAS","PHENEX","HALPHAS","MALPHAS","RAUM","FOCALOR","VEPAR","SABNOCK","SHAX","VINE","BIFRONS","VUAL","HAAGENTI","CROCELL","FURCAS","BALAM","ALLOCES","CAIM","MURMUR","OROBAS","GREMORY","OSE","AMY","ORIAS","VAPULA","ZAGAN","VALAC","ANDRAS","FLAUROS","ANDREALPHUS","KIMARIS","AMDUSIAS","BELIAL","DECARABIA","SEERE","DANTALION","ANDROMALIUS","hydrogen","helium","lithium","beryllium","boron","carbon","nitrogen","oxygen","fluorine","neon","sodium","magnesium","aluminium","silicon","phosphorus",
"sulfur","chlorine","argon","potassium","calcium","scandium","titanium","vanadium","chromium","manganese","iron","cobalt","nickel","copper","zinc","gallium","germanium","arsenic","selenium","bromine","krypton","rubidium","strontium","yttrium","zirconium","niobium","molybdenum","technetium","ruthenium","rhodium","palladium","silver","cadmium","indium","tin","antimony","tellurium","iodine","xenon","caesium","barium","lanthanum","cerium","praseodymium","neodymium","promethium","samarium","europium","gadolinium",
"terbium","dysprosium","holmium","erbium","thulium","ytterbium","lutetium","hafnium","tantalum","tungsten","rhenium","osmium","iridium","platinum","gold","mercury","thallium","lead","bismuth","polonium","astatine","radon","francium","radium","actinium","thorium","protactinium","uranium","neptunium","plutonium","americium","curium","berkelium","californium","einsteinium","fermium","mendelevium","nobelium","lawrencium","rutherfordium","dubnium","seaborgium","bohrium","hassium","meitnerium","darmstadtium","roentgenium",
"copernicium","nihonium","flerovium","moscovium","livermorium","tennessine","oganesson","HYDROGEN","HELIUM","LITHIUM","BERYLLIUM","BORON","CARBON","NITROGEN","OXYGEN","FLUORINE","NEON","SODIUM","MAGNESIUM","ALUMINIUM","SILICON","PHOSPHORUS","SULFUR","CHLORINE","ARGON","POTASSIUM","CALCIUM","SCANDIUM","TITANIUM","VANADIUM","CHROMIUM","MANGANESE","IRON","COBALT","NICKEL","COPPER","ZINC","GALLIUM","GERMANIUM","ARSENIC","SELENIUM","BROMINE","KRYPTON","RUBIDIUM","STRONTIUM","YTTRIUM","ZIRCONIUM","NIOBIUM","MOLYBDENUM",
"TECHNETIUM","RUTHENIUM","RHODIUM","PALLADIUM","SILVER","CADMIUM","INDIUM","TIN","ANTIMONY","TELLURIUM","IODINE","XENON","CAESIUM","BARIUM","LANTHANUM","CERIUM","PRASEODYMIUM","NEODYMIUM","PROMETHIUM","SAMARIUM","EUROPIUM","GADOLINIUM","TERBIUM","DYSPROSIUM","HOLMIUM","ERBIUM","THULIUM","YTTERBIUM","LUTETIUM","HAFNIUM","TANTALUM","TUNGSTEN","RHENIUM","OSMIUM","IRIDIUM","PLATINUM","GOLD","MERCURY","THALLIUM","LEAD","BISMUTH","POLONIUM","ASTATINE","RADON","FRANCIUM","RADIUM","ACTINIUM","THORIUM","PROTACTINIUM",
"URANIUM","NEPTUNIUM","PLUTONIUM","AMERICIUM","CURIUM","BERKELIUM","CALIFORNIUM","EINSTEINIUM","FERMIUM","MENDELEVIUM","NOBELIUM","LAWRENCIUM","RUTHERFORDIUM","DUBNIUM","SEABORGIUM","BOHRIUM","HASSIUM","MEITNERIUM","DARMSTADTIUM","ROENTGENIUM","COPERNICIUM","NIHONIUM","FLEROVIUM","MOSCOVIUM","LIVERMORIUM","TENNESSINE","OGANESSON","US-ASCII","ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","-2147483648","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN",
"CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","Malformed input of length ","Unmappable characters of length ","data:",";base64,","error"]);
P.prototype.toString=()=>{return Cr(this);};
P.prototype.valueOf=P.prototype.toString;D.prototype.toString=()=>{return Cr(AKR(this));};
D.prototype.__teavm_class__=function(){return BhP(this);};
let Dh;let Ej;let WX;let DB;let GG;let Ga;let Ba0;let Bbn;let U;let B3;let BiQ;let BiR;let W;let BS;let Dx;let Be8;let A_W;let HI;let Be;let B8;let Bk;let BP;let Gn;let T;let BiS;if(typeof BigInt!=='function'){Dh=(a,b)=>a.hi===b.hi&&a.lo===b.lo;Ej=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;WX=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};DB=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y=
b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};GG=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Ga=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};U=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return BC(a.lo+b.lo);}else if(BiT.abs(a.hi)<BhT&&BiT.abs(b.hi)<BhT){return BC(BB(a)+BB(b));}let a_lolo=a.lo&0xFFFF;let a_lohi
=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo+b_lolo|0;let lohi=a_lohi+b_lohi+(lolo>>16)|0;let hilo=a_hilo+b_hilo+(lohi>>16)|0;let hihi=a_hihi+b_hihi+(hilo>>16)|0;return new BhH(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};BiQ=a=>{let lo=a.lo+1|0;let hi=a.hi;if(lo===0){hi=hi+1|0;}return new BhH(lo,hi);};BiR=a=>{let lo=a.lo -1|0;let hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new BhH(lo,
hi);};HI=a=>BiQ(new BhH(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));B3=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return BC(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo -b_lolo|0;let lohi=a_lohi -b_lohi+(lolo>>16)|0;let hilo=a_hilo -b_hilo+(lohi>>16)|0;let hihi=a_hihi -b_hihi+(hilo>>16)|0;return new BhH(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)
<<16);};Ba0=(a,b)=>{let r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Bbn=(a,b)=>{let r=Gy(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};W=(a,b)=>{let positive=BhS(a)===BhS(b);if(BhS(a)){a=HI(a);}if(BhS(b)){b=HI(b);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo
=0;let lohi=0;let hilo=0;let hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new BhH(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive
?result:HI(result);};BS=(a,b)=>{if(BiT.abs(a.hi)<BhT&&BiT.abs(b.hi)<BhT){return BC(BB(a)/BB(b));}return (Long_divRem(a,b))[0];};Be8=(a,b)=>{if(a.hi>=0&&a.hi<BhT&&b.hi>=0&&b.hi<BhT){return BC(BB(a)/BB(b));}return (Long_udivRem(a,b))[0];};Dx=(a,b)=>{if(BiT.abs(a.hi)<BhT&&BiT.abs(b.hi)<BhT){return BC(BB(a)%BB(b));}return (Long_divRem(a,b))[1];};A_W=(a,b)=>{if(a.hi>=0&&a.hi<BhT&&b.hi>=0&&b.hi<BhT){return BC(BB(a)/BB(b));}return (Long_udivRem(a,b))[1];};let Long_divRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive
=BhS(a)===BhS(b);if(BhS(a)){a=HI(a);}if(BhS(b)){b=HI(b);}a=new BiU(a.lo,a.hi,0);b=new BiU(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new BhH(a.lo,a.hi);q=new BhH(q.lo,q.hi);return positive?[q,a]:[HI(q),HI(a)];};let Long_udivRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new BiU(a.lo,a.hi,0);b=new BiU(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new BhH(a.lo,a.hi);q=new BhH(q.lo,q.hi);return [q,a];};Be=(a,b)=>new BhH(a.lo&b.lo,a.hi&b.hi);B8=(a,b)=>new BhH(a.lo|b.lo,a.hi|b.hi);Bk=(a,b)=>new BhH(a.lo
^b.lo,a.hi^b.hi);BP=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new BhH(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new BhH(0,a.lo);}else {return new BhH(0,a.lo<<b -32);}};Gn=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new BhH(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new BhH(a.hi,a.hi>>31);}else {return new BhH(a.hi>>b -32,a.hi>>31);}};T=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new BhH(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new BhH(a.hi,
0);}else {return new BhH(a.hi>>>b -32,0);}};BiS=a=>new BhH(~a.hi,~a.lo);function BiU(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let LongInt_mul=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0;let a_lohi=(a.lo>>>16)*b|0;let a_hilo=(a.hi&0xFFFF)*b|0;let a_hihi=(a.hi>>>16)*b|0;let sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;};let LongInt_sub=(a,b)=>{let a_lolo
=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_add=(a,b)=>{let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi
>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_inc=a=>{a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}};let LongInt_dec=a=>{a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup
=a.sup -1&0xFFFF;}}};let LongInt_ucompare=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};let LongInt_numOfLeadingZeroBits=a=>{let n=0;let d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;};let LongInt_shl=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup
=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}};let LongInt_shr=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup
=0;}};let LongInt_copy=a=>new BiU(a.lo,a.hi,a.sup);let LongInt_div=(a,b)=>{let bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;let sz=1+(bits/16|0);let dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);let q=new BiU(0,0,0);while(sz-->0){LongInt_shl(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup;let digitB=b.hi>>>16;let digit=digitA/digitB|0;let t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,
b); --digit;}}else {while(true){let nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;};}else {Dh=(a,b)=>a===b;Ej=(a,b)=>a!==b;WX=(a,b)=>a>b;DB=(a,b)=>a>=b;GG=(a,b)=>a<b;Ga=(a,b)=>a<=b;U=(a,b)=>BigInt.asIntN(64,a+b);BiQ=a=>BigInt.asIntN(64,a+1);BiR=a=>BigInt.asIntN(64,a -1);HI=a=>BigInt.asIntN(64, -a);B3=(a,b)=>BigInt.asIntN(64,a -b);Ba0=(a,b)=>a<b? -1:a>b?1:0;Bbn=(a,b)=>{a=BigInt.asUintN(64,
a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};W=(a,b)=>BigInt.asIntN(64,a*b);BS=(a,b)=>BigInt.asIntN(64,a/b);Be8=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));Dx=(a,b)=>BigInt.asIntN(64,a%b);A_W=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)%BigInt.asUintN(64,b));Be=(a,b)=>BigInt.asIntN(64,a&b);B8=(a,b)=>BigInt.asIntN(64,a|b);Bk=(a,b)=>BigInt.asIntN(64,a^b);BP=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));Gn=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));T=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));BiS=a=>BigInt.asIntN(64,~a);}function BiV(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}BiV.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};BiV.prototype.s=BiV.prototype.push;BiV.prototype.pop=function(){return this.stack.pop();};BiV.prototype.l=BiV.prototype.pop;BiV.prototype.isResuming=function(){return this.status===2;};BiV.prototype.isSuspending=
function(){return this.status===1;};BiV.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};BiV.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(BiW!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};BiV.prototype.resume=function(){if(BiW!==null){throw new Error("Another thread is running");}this.status=2;this.run();};BiV.prototype.run
=function(){BiW=this;let result;try {result=this.runner();}catch(BhL){result=BhL;}finally {BiW=null;}if(this.suspendCallback!==null){let self=this;let callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let HA=()=>{let thread=Cn();return thread!=null&&thread.isSuspending();};let DV=()=>{let thread=Cn();return thread!=null&&thread.isResuming();};let BiX=callback=>{let nativeThread=Cn();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);};let Bhw
=(runner,callback)=>(new BiV(runner)).start(callback);let BiW=null;let Cn=()=>BiW;let DU=()=>{throw new Error("Invalid recorded state");};BgU.main=Bhx(Bfb);
BgU.main.javaException=BhM;
(function(){var c;c=LQ.prototype;c.onAnimationFrame=c.OD;c=AFp.prototype;c.handleEvent=c.rC;c=VE.prototype;c.handleEvent=c.rC;c=VF.prototype;c.handleEvent=c.rC;c=Ub.prototype;c.fullscreenChanged=c.Qw;c=TB.prototype;c.denied=c.ZL;c.prompt=c.Ns;c.granted=c.Sy;c=V8.prototype;c.removeEventListener=c.OA;c.dispatchEvent=c.MZ;c.get=c.IH;c.addEventListener=c.Th;Object.defineProperty(c,"length",{get:c.UW});c=Po.prototype;c.handleEvent=c.rC;c=Pp.prototype;c.handleEvent=c.rC;c=Pl.prototype;c.handleEvent=c.rC;c=RU.prototype;c.unlockFunction
=c.S4;c=OU.prototype;c.accept=c.IN;c=OV.prototype;c.accept=c.IN;c=ADf.prototype;c.removeEventListener=c.YM;c.dispatchEvent=c.TJ;c.addEventListener=c.WI;c=Qj.prototype;c.handleEvent=c.rC;c=AHm.prototype;c.removeEventListener=c.L1;c.dispatchEvent=c.UD;c.addEventListener=c.Po;c=Of.prototype;c.handleEvent=c.rC;c=Jm.prototype;c.handleEvent=c.rC;c=Xj.prototype;c.get=c.IH;Object.defineProperty(c,"length",{get:c.YF});c=QE.prototype;c.handleEvent=c.rC;c=R3.prototype;c.handleEvent=c.rC;c=SL.prototype;c.handleEvent=c.rC;})();
}));
