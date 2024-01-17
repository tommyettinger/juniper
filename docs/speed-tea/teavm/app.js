"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.cH=f;}
function $rt_cls(cls){return AYo(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AZJ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.e.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return AR3(t);}
function $rt_throwableCause(t){return AR$(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AZK());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AEB();}
function $rt_setThread(t){return AAP(t);}
function $rt_createException(message){return AZL(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var Bw=$rt_compare;var AZM=$rt_nullCheck;var J=$rt_cls;var Bt=$rt_createArray;var EY=$rt_isInstance;var RN=$rt_nativeThread;var GS=$rt_suspending;var ALw=$rt_resuming;var AFf=$rt_invalidPointer;var B=$rt_s;var Bi=$rt_eraseClinit;var B3=$rt_imul;var BJ=$rt_wrapException;var AZN=$rt_checkBounds;var AZO=$rt_checkUpperBound;var AZP=$rt_checkLowerBound;var AZQ=$rt_wrapFunction0;var AZR=$rt_wrapFunction1;var AZS=$rt_wrapFunction2;var AZT=$rt_wrapFunction3;var AZU=$rt_wrapFunction4;var I=$rt_classWithoutFields;var U
=$rt_createArrayFromData;var E$=$rt_createCharArrayFromData;var AZV=$rt_createByteArrayFromData;var AZE=$rt_createShortArrayFromData;var Ew=$rt_createIntArrayFromData;var AZW=$rt_createBooleanArrayFromData;var AZX=$rt_createFloatArrayFromData;var AZY=$rt_createDoubleArrayFromData;var U3=$rt_createLongArrayFromData;var S5=$rt_createBooleanArray;var BS=$rt_createByteArray;var OW=$rt_createShortArray;var D=$rt_createCharArray;var Y=$rt_createIntArray;var CF=$rt_createLongArray;var CU=$rt_createFloatArray;var AN$
=$rt_createDoubleArray;var Bw=$rt_compare;var AZZ=$rt_castToClass;var AZ0=$rt_castToInterface;var AZ1=$rt_equalDoubles;var BF=Long_toNumber;var M=Long_fromInt;var AZ2=Long_fromNumber;var F=Long_create;var R=Long_ZERO;var AZ3=Long_hi;var V=Long_lo;
function C(){this.c1=null;this.$id$=0;}
function AZ4(){var a=new C();Di(a);return a;}
function Il(b){var c;if(b.c1===null){c=new I1;Dj();c.cV=AZ5;b.c1=c;}b=b.c1;c=b.cV;if(c===null){Dj();b.cV=AZ5;}else{Dj();if(c!==AZ5){c=new B2;c.c=1;c.d=1;c.f=B(0);G(c);}}b.dD=b.dD+1|0;}
function EI(b){var c,d,e;if(!HD(b)){c=b.c1;d=c.cV;Dj();if(d===AZ5){e=c.dD-1|0;c.dD=e;if(!e)c.cV=null;HD(b);return;}}b=new I_;b.c=1;b.d=1;G(b);}
function AYv(b){ALt(b,1);}
function ALt(b,c){var d,e,$p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.c1===null){d=new I1;Dj();d.cV=AZ5;b.c1=d;}d=b.c1;if(d.cV===null){Dj();d.cV=AZ5;}e=d.cV;Dj();if(e===AZ5){d.dD=d.dD+c|0;return;}$p=1;case 1:AFT(b,c);if(GS()){break _;}return;default:AFf();}}RN().s(b,c,d,e,$p);}
function AXY(b,c,d){var e,f,g;Dj();e=AZ5;f=b.c1;if(f===null){f=new I1;f.cV=e;b.c1=f;if(e!==e)AZ5=e;AZ5.gt=Fr();b=b.c1;b.dD=b.dD+c|0;b=null;d.is.ld(b);return;}if(f.cV===null){f.cV=e;if(e!==e)AZ5=e;AZ5.gt=Fr();b=b.c1;b.dD=b.dD+c|0;b=null;d.is.ld(b);return;}if(f.gi===null)f.gi=AM2();f=f.gi;g=new Qo;g.un=e;g.uo=b;g.ul=c;g.um=d;d=g;f.push(d);}
function AYA(b){AFo(b,1);}
function AFo(b,c){var d,e;if(!HD(b)){d=b.c1;e=d.cV;Dj();if(e===AZ5){c=d.dD-c|0;d.dD=c;if(c>0)return;d.cV=null;d=d.gi;if(d!==null&&!(d.length?0:1)){d=new SV;d.u5=b;RS(d,0);}else HD(b);return;}}b=new I_;b.c=1;b.d=1;G(b);}
function ASE(b){var c,d,e;if(!HD(b)){c=b.c1;if(c.cV===null){b=c.gi;if(b!==null&&!(b.length?0:1)){b=c.gi.shift();BM();if(b!==null&&!(b instanceof $rt_objcls()))b=CY(b);d=b;c.gi=null;b=d.un;c=d.uo;e=d.ul;d=d.um;Dj();if(AZ5!==b)AZ5=b;AZ5.gt=Fr();c=c.c1;c.cV=b;c.dD=c.dD+e|0;b=null;d.is.ld(b);}return;}}}
function HD(a){var b,c;b=a.c1;if(b===null)return 1;a:{if(b.cV===null){c=b.gi;if(!(c!==null&&!(c.length?0:1))){b=b.rB;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.c1=null;return 1;}
function Di(a){}
function AQw(a){var b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new CE;c.P=b;d=c;b.classObject=d;}}return c;}
function AJd(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOD(a,b){return a!==b?0:1;}
function AHM(a){var b,c,d,e,f,g,h;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=Bv(a.$id$,4);b=new N;b.b=D(16);H(b,b.a,B(1));e=b.a;if(d===null)d=B(2);H(b,e,d);c=new L;f=b.b;g=b.a;O();h=D(g);c.e=h;K(f,0,h,0,g);return c;}
function Ti(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ANs(a){var b,c,d;if(!EY(a,FT)&&a.constructor.$meta.item===null){b=new RO;b.c=1;b.d=1;G(b);}b=AFc(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Mw(a){var b,c,d;a:{b=a.c1;if(b!==null){c=b.cV;Dj();if(c===AZ5){d=1;break a;}}d=0;}if(!d){b=new I_;b.c=1;b.d=1;G(b);}b=b.rB;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BM();if(c!==null&&!(c instanceof $rt_objcls()))c=CY(c);c=c;if(!c.Mx())RS(c,0);}a.c1.rB=null;}
function AFT(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.ld=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.C5=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AXZ(callback);thread.suspend(function(){try{AXY(b,c,callback);}catch($e){callback.C5($rt_exception($e));}});return null;}
var ACG=I();
function AYm(b){var c;c=new BL;c.iI=1.0;c.iH=0.0;AZ6=c;c=new BL;c.iI=0.0;c.iH=1.0;AZ7=c;c=new BL;c.iI=0.0;c.iH=0.0;AZ8=c;AZ9=new BL;AZ$=new BL;AZ_=new BL;A0a=new BL;A0b=new BL;A0c=new BL;A0d=new EW;A0e=new EW;A0f=0.10000000149011612;AD0();A0g=J($rt_floatcls());A0h=Bt(H9,111);A0i=new BL;A0j=new BL;A0k=new C;XY();A0l=J($rt_intcls());Wd();A0m=J($rt_longcls());A0n=J($rt_charcls());A0o=Bt(D6,128);TP();ZN();A0p=1;A0q=new BL;A0r=new BL;A0s=new BL;A0t=0.4000000059604645;A0u=0.10000000149011612;A0v=new BL;A0w=new BL;A0x
=new BL;A0y=new BL;A0z=new BL;A0A=new BL;VM();AA7();A0B=0.0;A0C=CU(3);A0D=1;A0E=new Ks;A0F=new Kr;c=new JC;c.nY=BS(1);A0G=c;c=new Jl;c.nY=BS(1);A0H=c;A0I=J($rt_doublecls());W7();AD6();c=new CK;c.by=0;c.bR=0;A0J=c;c=new CK;c.by=1;c.bR=0;A0K=c;A0L=BS(0);AAU();A0M=1;A0N=null;U6();ABj();c=new FK;c.lY=1;A0O=c;c=new FK;c.lY=0;A0P=c;A0Q=J($rt_booleancls());c=AZD(B(3));c.mE=512;c.iL=520;VD(new Le,new Qs,c);}
var GG=I();
var A0R=0;var A0S=0;var A0T=0;var A0U=0;var A0V=0;function A0W(){A0W=Bi(GG);AMt();}
function AMt(){A0R=Du($rt_str($rt_globals.navigator.platform),B(4));A0S=Du($rt_str($rt_globals.navigator.platform),B(5));A0T=Du($rt_str($rt_globals.navigator.platform),B(6));A0U=!Du($rt_str($rt_globals.navigator.platform),B(7))&&!Du($rt_str($rt_globals.navigator.platform),B(8))?0:1;A0V=!Du($rt_str($rt_globals.navigator.platform),B(9))&&!Du($rt_str($rt_globals.navigator.platform),B(10))&&!Du($rt_str($rt_globals.navigator.platform),B(11))?0:1;}
var MS=I(0);
var LA=I();
var DL=I(0);
var ACr=I(LA);
var DR=I(0);
var Gl=I();
var DB=I(0);
var Cd=I(0);
function BQ(){var a=this;C.call(a);a.u=null;a.n=0;}
function ACi(a){return a.n;}
function ALx(a){return a.u;}
var E7=I(BQ);
var A0X=null;var A0Y=null;var A0Z=null;var A00=null;function AXj(){AXj=Bi(E7);ASr();}
function ASr(){var b,c,d;b=new E7;AXj();b.u=B(12);b.n=0;A0X=b;c=new E7;c.u=B(13);c.n=1;A0Y=c;d=new E7;d.u=B(14);d.n=2;A0Z=d;A00=U(E7,[b,c,d]);}
var Gs=I();
var LF=I(0);
var Ja=I(Gs);
var AZ9=null;function AMk(){AZ9=new BL;}
var GZ=I(0);
var Eo=I(0);
var Hl=I();
var G9=I(0);
var B8=I();
var AZ$=null;function AUH(){AZ$=new BL;}
var HH=I(B8);
var AAw=I(HH);
var Gu=I(BQ);
var A01=null;var A02=null;var A03=null;function AUs(){AUs=Bi(Gu);AGf();}
function AGf(){var b,c;b=new Gu;AUs();b.u=B(15);b.n=0;A01=b;c=new Gu;c.u=B(16);c.n=1;A02=c;A03=U(Gu,[b,c]);}
var Mk=I(0);
var Jh=I(0);
var G7=I(0);
var D2=I();
var ACb=I(D2);
var L8=I(Hl);
var Ig=I();
var AZ_=null;var A0a=null;function AKG(){AZ_=new BL;A0a=new BL;}
var VU=I();
var Ts=I();
var SN=I(0);
var La=I();
var AAd=I(La);
var XP=I(Gl);
var Pr=I();
var A04=null;function A05(){A05=Bi(Pr);AN9();}
function AN9(){var b,c;AUs();b=Y((A03.cH()).data.length);c=b.data;A04=b;c[A01.n]=1;c[A02.n]=2;}
var Y$=I();
var QR=I();
var A06=null;function A07(){A07=Bi(QR);AIr();}
function AIr(){var b,c;Zw();b=Y((A08.cH()).data.length);c=b.data;A06=b;c[A09.n]=1;c[A0$.n]=2;c[A0_.n]=3;}
var ACa=I(D2);
var FX=I();
var QO=I(FX);
var He=I();
var A1a=0;var A1b=0;var A1c=0;var A1d=0;var A1e=0;function A1f(){A1f=Bi(He);AUX();}
function AUX(){A1a=Du($rt_str($rt_globals.navigator.platform),B(4));A1b=Du($rt_str($rt_globals.navigator.platform),B(5));A1c=Du($rt_str($rt_globals.navigator.platform),B(6));A1d=!Du($rt_str($rt_globals.navigator.platform),B(7))&&!Du($rt_str($rt_globals.navigator.platform),B(8))?0:1;A1e=!Du($rt_str($rt_globals.navigator.platform),B(9))&&!Du($rt_str($rt_globals.navigator.platform),B(10))&&!Du($rt_str($rt_globals.navigator.platform),B(11))?0:1;}
var Ln=I();
var SI=I(HH);
var A0b=null;function ANm(){A0b=new BL;}
var O7=I();
var A0c=null;function AVB(){A0c=new BL;}
var JV=I();
var A1g=null;var A1h=null;var A1i=null;function A1j(){A1j=Bi(JV);ASa();}
function ASa(){var b;b=new CJ;b.b2=1;b.C=Bt(C,16);A1g=b;b=new Be;BT();A1h=b;A1i=new EW;}
var Mb=I();
var I6=I(FX);
var SJ=I(FX);
var Eh=I(B8);
var A0f=0.0;function ATI(){A0f=0.10000000149011612;}
var Sz=I(I6);
var Vf=I(Gl);
var KC=I(0);
var YO=I(Gl);
var W_=I();
var MM=I();
var A1k=null;function A1l(){A1l=Bi(MM);AT3();}
function AT3(){var b,c;Zw();b=Y((A08.cH()).data.length);c=b.data;A1k=b;c[A1m.n]=1;c[A1n.n]=2;c[A1o.n]=3;c[A09.n]=4;c[A0$.n]=5;c[A0_.n]=6;c[A1p.n]=7;c[A1q.n]=8;c[A1r.n]=9;c[A1s.n]=10;}
var CZ=I(BQ);
var A09=null;var A0$=null;var A0_=null;var A1p=null;var A1r=null;var A1s=null;var A1q=null;var A1m=null;var A1n=null;var A1o=null;var A08=null;function Zw(){Zw=Bi(CZ);AIj();}
function AIj(){var b,c,d,e,f,g,h,i,j,k;b=new CZ;Zw();b.u=B(17);b.n=0;A09=b;c=new CZ;c.u=B(18);c.n=1;A0$=c;d=new CZ;d.u=B(19);d.n=2;A0_=d;e=new CZ;e.u=B(20);e.n=3;A1p=e;f=new CZ;f.u=B(21);f.n=4;A1r=f;g=new CZ;g.u=B(22);g.n=5;A1s=g;h=new CZ;h.u=B(23);h.n=6;A1q=h;i=new CZ;i.u=B(24);i.n=7;A1m=i;j=new CZ;j.u=B(25);j.n=8;A1n=j;k=new CZ;k.u=B(26);k.n=9;A1o=k;A08=U(CZ,[b,c,d,e,f,g,h,i,j,k]);}
var CI=I();
var Fz=I(CI);
var XA=I(Fz);
var Z5=I(Fz);
var Ds=I(CI);
var Fn=I(Ds);
var TD=I(Fn);
var UG=I();
var MA=I(CI);
var Vm=I(MA);
var Wx=I(CI);
var YJ=I(CI);
var ABa=I(CI);
var ABE=I();
var Lh=I(CI);
var Yr=I(Lh);
var VG=I(Ds);
var AB7=I(Ds);
var ACs=I(Fn);
var AAs=I(CI);
var AAB=I(Fn);
var ADo=I(Ds);
var AC1=I(Ds);
var WP=I(CI);
var Yh=I(Ds);
var Yn=I(CI);
var W1=I(CI);
var Ys=I(Fz);
var T7=I(Ds);
var ADp=I(CI);
var Z$=I(Fn);
var WS=I(Fz);
var ZM=I(CI);
var UH=I(Ds);
var XX=I(Ds);
var Oc=I();
var A1t=null;function AD0(){A1t=U(CE,[J(K7),J(Bx),J(Qc),J(QO),J(SJ),J(I6),J(Sz),J(G0),J(PN),J(RX),J(Rv),J(Ps),J(Sl),J(Ka),J(Sx),J(QP),J(Nu),J(Sh),J(Ha),J(P8),J(RU),J(P6),J(PA),J(NK)]);}
var Dx=I(Ja);
var DG=I(Dx);
var A1u=null;var A1v=null;var A1w=null;var A1x=null;var A1y=null;var A1z=null;var A1A=null;var A1B=null;function A1C(){A1C=Bi(DG);ASy();}
function ASy(){var b,c;b=new Bx;E4();b.cr=0.0;b.cq=0.0;b.cp=1.0;b.co=1.0;DV(b);A1u=b;b=new Bx;b.cr=1.0;b.cq=0.0;b.cp=0.0;b.co=1.0;DV(b);A1v=b;b=new Bx;b.cr=0.0;b.cq=1.0;b.cp=0.0;b.co=1.0;DV(b);A1w=b;b=new SE;c=new CJ;c.b2=0;c.C=Bt(C,16);b.dH=c;b.gx=2147483647;A1x=b;b=new SD;AE6();A1y=b;A1z=new SC;A1A=new SB;A1B=new SA;}
var GC=I(DG);
var K8=I(GC);
var VC=I(K8);
var AB$=I(B8);
var LN=I(Dx);
var PT=I(0);
var Fd=I();
var WI=I(Fd);
var DM=I(Gs);
var Uf=I(DM);
var AB8=I(B8);
var B1=I();
var A1D=null;var A1E=null;var A1F=null;var A1G=null;var A1H=null;var A1I=null;var A1J=null;function AE6(){AE6=Bi(B1);AGX();}
function AGX(){var b;b=new H9;AE6();b.B6=0.0;A1D=b;A1E=new QX;A1F=new QU;A1G=new QT;A1H=new QW;A1I=new QV;A1J=new QS;}
var QW=I(B1);
var AAe=I(B1);
var Kw=I(Eh);
var Yo=I(Kw);
var SC=I(B1);
var ADe=I(B8);
var H8=I(DG);
var A0i=null;var A0j=null;function AIo(){A0i=new BL;A0j=new BL;}
var AAf=I(B1);
var GY=I(0);
var EW=I();
var A0d=null;var A0e=null;function ASl(){A0d=new EW;A0e=new EW;}
var EN=I(EW);
var A1K=null;function AZA(){AZA=Bi(EN);AF2();}
function A1L(){var a=new EN();ZP(a);return a;}
function ZP(a){AZA();}
function AF2(){var b,c,d,e,f,g,$$je;O4();b=A1M;c=Df(b,J(EN));b=c<0?null:b.cZ.data[c];if(b===null){b=new I0;d=new CJ;d.b2=0;d.C=Bt(C,4);b.dH=d;b.gx=100;a:{try{d=QA(J(EN),null);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){}else{throw $$e;}}try{d=OP(J(EN),null);L2(d,1);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.ft=d;if(d===null){b=new BU;d=new N;d.b=D(16);H(d,d.a,B(27));if(J(EN).bk===null)J(EN).bk=$rt_str(J(EN).P.$meta.name);e=J(EN).bk;H(d,d.a,e);e=new L;f=d.b;c
=d.a;O();g=D(c);e.e=g;K(f,0,g,0,c);b.c=1;b.d=1;b.f=e;G(b);}BW(A1M,J(EN),b);}A1K=b;}
var WL=I(Fd);
var FS=I(DM);
var A0q=null;var A0r=null;var A0s=null;var A0t=0.0;var A0u=0.0;function AVj(){A0q=new BL;A0r=new BL;A0s=new BL;A0t=0.4000000059604645;A0u=0.10000000149011612;}
var VK=I(FS);
var X1=I(B8);
var OJ=I(0);
var ABc=I();
var G0=I();
var Ha=I(G0);
var Rv=I(Ha);
var L4=I(DM);
var Xi=I(L4);
var AD$=I(LN);
var KD=I(Dx);
var AEv=I(GC);
var Ml=I(DM);
var SA=I(B1);
var RU=I();
var WY=I();
var Yp=I(B8);
var Ze=I(D2);
var XB=I();
var AAV=I(B8);
var ADX=I(Eh);
var XZ=I(Ig);
var QS=I(B1);
var QV=I(B1);
var Qt=I(0);
var Ka=I();
var Nu=I(Ka);
var WJ=I(Fd);
var AB6=I(Ln);
var AB_=I(Mb);
var ADf=I(B8);
var ADg=I(Eh);
var SB=I(B1);
var EL=I();
var A1N=null;var A1O=null;var A1P=null;var A1Q=null;var A1R=null;var A1S=null;var A1T=null;var A1U=null;var A1V=null;function A1W(){A1W=Bi(EL);AIG();}
function AIG(){var b;b=new J9;b.o7=0.0;A1N=b;b=new J9;b.o7=1.0;A1O=b;FA();A1P=A1X.data[128];FA();b=A1X.data[129];A1Q=b;A1R=b;FA();A1S=A1X.data[130];FA();A1T=A1X.data[132];FA();A1U=A1X.data[136];FA();A1V=A1X.data[144];}
var PN=I(Ha);
var Ya=I(B8);
var Up=I(D2);
var QX=I(B1);
var VW=I(Dx);
var X0=I(B8);
var P6=I();
function H9(){B1.call(this);this.B6=0.0;}
var A0h=null;function AT6(){A0h=Bt(H9,111);}
var WZ=I(KD);
var QT=I(B1);
var P2=I(DM);
var A0v=null;function AUm(){A0v=new BL;}
var X8=I(L8);
var Sh=I();
var KL=I(DM);
var A1Y=null;var A1Z=null;function A10(){A10=Bi(KL);AF8();}
function AF8(){var b,c;b=new Bx;E4();A1Y=b;b=new D$;EU();c=new CJ;c.b2=1;c.C=Bt(C,1);b.cX=c;c=new D5;c.dT=1;c.cc=Y(2);b.cv=c;A1Z=b;}
var NK=I();
var AAg=I(B1);
var SD=I(B1);
var ABK=I(H8);
var QU=I(B1);
var Ps=I();
var ADU=I();
var D1=I(BQ);
var A11=null;var A12=null;var A13=null;var A14=null;var A15=null;var A16=null;function AZd(){AZd=Bi(D1);AQP();}
function AQP(){var b,c,d,e,f;b=new D1;AZd();b.u=B(28);b.n=0;A11=b;c=new D1;c.u=B(29);c.n=1;A12=c;d=new D1;d.u=B(30);d.n=2;A13=d;e=new D1;e.u=B(31);e.n=3;A14=e;f=new D1;f.u=B(32);f.n=4;A15=f;A16=U(D1,[b,c,d,e,f]);}
var AD2=I(B1);
var XQ=I(D2);
function DJ(){var a=this;C.call(a);a.gx=0;a.jl=0;a.dH=null;}
function I2(a,b){var c,d,e;if(b===null){b=new Bg;b.c=1;b.d=1;b.f=B(33);G(b);}c=a.dH;if(c.o<a.gx){Dh(c,b);d=a.jl;e=a.dH.o;if(d>e)e=d;a.jl=e;if(EY(b,DR))b.ga();}else if(EY(b,DR))b.ga();}
function ADP(a,b){var c,d,e,f,g,h,i;if(b===null){b=new Bg;b.c=1;b.d=1;b.f=B(34);G(b);}c=a.dH;d=a.gx;e=0;f=b.o;while(e<f){if(e>=b.o){g=new Bh;c=new N;c.b=D(16);H(c,c.a,B(35));P(c,c.a,e,10);H(c,c.a,B(36));d=b.o;P(c,c.a,d,10);b=new L;h=c.b;e=c.a;O();i=D(e);b.e=i;K(h,0,i,0,e);g.c=1;g.d=1;g.f=b;G(g);}g=b.C.data[e];if(g!==null){if(c.o<d){Dh(c,g);if(EY(g,DR))g.ga();}else if(EY(g,DR))g.ga();}e=e+1|0;}d=a.jl;e=c.o;if(d>e)e=d;a.jl=e;}
var SE=I(DJ);
var Uj=I();
var Sl=I();
var Qc=I();
var QP=I();
var JY=I(B8);
var A0w=null;function AF5(){A0w=new BL;}
var Uo=I(D2);
var ADh=I(Ml);
var Um=I(0);
var Yb=I(B8);
var AEm=I(Dx);
var Z4=I(Dx);
var X9=I(Eh);
var L_=I();
var WH=I(L_);
var AC6=I(Gs);
var TY=I(B8);
var ABR=I(GC);
var Zu=I(B8);
var ADM=I(Eh);
var RX=I(G0);
var Z6=I(Dx);
var P8=I();
var PA=I();
var Zh=I(DM);
var ADY=I(Hl);
var TZ=I(B8);
var Rd=I(Dx);
var A0x=null;function ANM(){A0x=new BL;}
var AD9=I(JY);
var T0=I(DG);
var WK=I(Fd);
var S$=I();
var Sx=I();
var Eq=I();
var A17=null;var A18=null;var A19=null;var A1$=null;var A1_=null;var A2a=null;var A2b=null;var A2c=null;var A2d=null;var A2e=null;var A2f=null;function A2g(){A2g=Bi(Eq);AOn();}
function AOn(){var b;A17=CU(16);b=new E0;RB();b.h0=0.0;b.hX=0.0;b.hY=0.0;b.hZ=1.0;A18=b;b=new E0;b.h0=0.0;b.hX=0.0;b.hY=0.0;b.hZ=1.0;A19=b;b=new Be;BT();A1$=b;A1_=new Be;A2a=new Be;A2b=new Be;A2c=Fx();A2d=new Be;A2e=new Be;A2f=new Be;}
var Bu=I();
var A2h=null;var A2i=null;var A2j=null;var A2k=null;var A2l=null;var A2m=null;var A2n=null;var A2o=null;var A2p=null;var A2q=null;var A2r=null;var A2s=null;var A2t=null;var A2u=null;var A2v=null;var A2w=null;var A2x=null;var A2y=null;var A2z=null;var A2A=null;var A2B=null;var A2C=null;var A2D=null;var A2E=null;var A2F=null;var A2G=null;var A2H=null;var A2I=null;var A2J=null;var A2K=null;var A2L=null;var A2M=null;var A2N=null;var A2O=null;var A2P=null;var A2Q=null;var A2R=null;var A2S=null;var A2T=null;var A2U
=null;var A2V=null;var A2W=null;var A2X=null;var A2Y=null;function Ep(){Ep=Bi(Bu);AHh();}
function AHh(){var b,c;b=new Rs;Ep();A2h=b;A2i=new Rk;A2j=new Rj;b=new Rm;A2k=b;A2l=b;b=new Ff;b.ec=2;A2m=b;b=new Ik;b.ec=2;A2n=b;A2o=b;b=new Ic;b.ec=2;A2p=b;A2q=b;A2r=new Rl;A2s=new Ro;b=new Ff;b.ec=3;A2t=b;b=new Ik;b.ec=3;A2u=b;b=new Ic;b.ec=3;A2v=b;A2w=new Rn;A2x=new Rq;b=new Ff;b.ec=4;A2y=b;b=new Ik;b.ec=4;A2z=b;b=new Ic;b.ec=4;A2A=b;b=new Ff;b.ec=5;A2B=b;b=new Ik;b.ec=5;A2C=b;b=new Ic;b.ec=5;A2D=b;A2E=new Rp;A2F=new QH;A2G=new QJ;b=new G_;b.kN=2.0;b.lp=10.0;c=Ju(2.0,(-10.0));b.l_=c;b.lr=1.0/(1.0-c);A2H
=b;b=new P5;b.kN=2.0;b.lp=10.0;c=Ju(2.0,(-10.0));b.l_=c;b.lr=1.0/(1.0-c);A2I=b;b=new ST;AAb(b,2.0,10.0);A2J=b;A2K=AWZ(2.0,5.0);A2L=AXh(2.0,5.0);A2M=AYj(2.0,5.0);A2N=AXz();A2O=AXm();A2P=AYX();A2Q=AYN(2.0,10.0,7,1.0);A2R=AW6(2.0,10.0,6,1.0);A2S=AYx(2.0,10.0,7,1.0);A2T=AXs(1.5);A2U=AZs(2.0);A2V=AYl(2.0);A2W=AXF(4);A2X=AYc(4);A2Y=AW2(4);}
function UR(){Bu.call(this);this.EJ=0.0;}
function AZs(a){var b=new UR();AKr(b,a);return b;}
function AKr(a,b){Ep();a.EJ=b;}
var XS=I();
var Rn=I(Bu);
var ADx=I();
function Ff(){Bu.call(this);this.ec=0;}
var Ik=I(Ff);
var Ic=I(Ff);
var JJ=I(0);
var Vo=I();
var Rq=I(Bu);
var ACh=I();
var Rm=I(Bu);
function Ie(){var a=this;Bu.call(a);a.sD=0.0;a.px=0.0;a.pI=0.0;a.qw=0.0;}
function AYN(a,b,c,d){var e=new Ie();AMV(e,a,b,c,d);return e;}
function AMV(a,b,c,d,e){Ep();a.sD=b;a.px=c;a.pI=e;a.qw=d*3.1415927410125732*(d%2|0?(-1):1);}
var Rl=I(Bu);
var Rk=I(Bu);
var JA=I();
var A0y=null;var A0z=null;var A0A=null;function AI9(){A0y=new BL;A0z=new BL;A0A=new BL;}
var Tq=I(DJ);
var Jo=I(0);
function BL(){var a=this;C.call(a);a.iI=0.0;a.iH=0.0;}
var AZ6=null;var AZ7=null;var AZ8=null;function AIC(){var b;b=new BL;b.iI=1.0;b.iH=0.0;AZ6=b;b=new BL;b.iI=0.0;b.iH=1.0;AZ7=b;b=new BL;b.iI=0.0;b.iH=0.0;AZ8=b;}
var ZY=I(Bu);
function AXm(){var a=new ZY();APz(a);return a;}
function APz(a){Ep();}
function G_(){var a=this;Bu.call(a);a.kN=0.0;a.lp=0.0;a.l_=0.0;a.lr=0.0;}
function AWZ(a,b){var c=new G_();AAb(c,a,b);return c;}
function AAb(a,b,c){Ep();a.kN=b;a.lp=c;c=Ju(b, -c);a.l_=c;a.lr=1.0/(1.0-c);}
var Zf=I();
var Rs=I(Bu);
var ST=I(G_);
function AYj(a,b){var c=new ST();ALW(c,a,b);return c;}
function ALW(a,b,c){Ep();a.kN=b;a.lp=c;c=Ju(b, -c);a.l_=c;a.lr=1.0/(1.0-c);}
var WV=I();
var E9=I(BQ);
var A2Z=null;var A20=null;var A21=null;var A22=null;function AYL(){AYL=Bi(E9);AUq();}
function AUq(){var b,c,d;b=new E9;AYL();b.u=B(37);b.n=0;A2Z=b;c=new E9;c.u=B(38);c.n=1;A20=c;d=new E9;d.u=B(39);d.n=2;A21=d;A22=U(E9,[b,c,d]);}
var Qa=I();
var A23=null;function A24(){A24=Bi(Qa);ANc();}
function ANc(){var b;b=new Be;BT();A23=b;}
function IF(){var a=this;Bu.call(a);a.A2=null;a.zI=null;}
function AW2(a){var b=new IF();Pd(b,a);return b;}
function Pd(a,b){var c,d,e,f,g,h,i;Ep();if(b>=2&&b<=5){a:{c=CU(b);a.A2=c;d=CU(b);e=d.data;a.zI=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bg;g=new N;g.b=D(16);H(g,g.a,B(40));P(g,g.a,b,10);h=new L;c=g.b;i=g.a;O();d=D(i);h.e=d;K(c,0,d,0,i);f.c=1;f.d=1;f.f=h;G(f);}
var X4=I(IF);
function AYc(a){var b=new X4();AM7(b,a);return b;}
function AM7(a,b){Pd(a,b);}
var QH=I(Bu);
var ZI=I();
var Rj=I(Bu);
function Ev(){var a=this;C.call(a);a.kD=0.0;a.kC=0.0;a.kE=0.0;a.kB=0.0;}
var A25=null;var A26=null;var A27=null;var A28=null;var A29=null;function AYz(){AYz=Bi(Ev);AVE();}
function AVE(){var b;b=new Ev;AYz();b.kD=1.0;b.kC=0.0;b.kE=0.0;b.kB=0.0;A25=b;b=new Ev;b.kD=0.0;b.kC=1.0;b.kE=0.0;b.kB=0.0;A26=b;b=new Ev;b.kD=0.0;b.kC=0.0;b.kE=1.0;b.kB=0.0;A27=b;b=new Ev;b.kD=0.0;b.kC=0.0;b.kE=0.0;b.kB=1.0;A28=b;b=new Ev;b.kD=0.0;b.kC=0.0;b.kE=0.0;b.kB=0.0;A29=b;}
var Ul=I(Ie);
function AW6(a,b,c,d){var e=new Ul();AF4(e,a,b,c,d);return e;}
function AF4(a,b,c,d,e){Ep();a.sD=b;a.px=c;a.pI=e;a.qw=d*3.1415927410125732*(d%2|0?(-1):1);}
function Xv(){Bu.call(this);this.z2=0.0;}
function AXs(a){var b=new Xv();AG7(b,a);return b;}
function AG7(a,b){Ep();a.z2=b*2.0;}
var Vg=I();
var AEg=I();
var Ro=I(Bu);
function ADa(){Bu.call(this);this.BS=0.0;}
function AYl(a){var b=new ADa();ANy(b,a);return b;}
function ANy(a,b){Ep();a.BS=b;}
var ZZ=I(Bu);
function AYX(){var a=new ZZ();ANX(a);return a;}
function ANX(a){Ep();}
var Xq=I(Ie);
function AYx(a,b,c,d){var e=new Xq();AIX(e,a,b,c,d);return e;}
function AIX(a,b,c,d,e){Ep();a.sD=b;a.px=c;a.pI=e;a.qw=d*3.1415927410125732*(d%2|0?(-1):1);}
var Kg=I();
var A2$=null;var A2_=null;var A3a=null;function A3b(){A3b=Bi(Kg);AFz();}
function AFz(){var b,c,d,e,f,g;A2$=Bt(Be,15);b=Bt(Be,8);A2_=b;c=Bt(Be,9);d=c.data;A3a=c;e=0;f=d.length;while(e<f){g=new Be;BT();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Be;BT();b[e]=g;e=e+1|0;}}
function KB(){var a=this;C.call(a);a.v6=null;a.wf=null;a.vv=null;a.wg=null;}
var A3c=null;function AZH(){AZH=Bi(KB);ASf();}
function AAj(a,b,c){var d,e,f,g,h,i,j,k;d=a.v6;e=b.x;f=c.x;if(e<f)f=e;e=b.z;g=c.z;if(e<g)g=e;e=b.y;h=c.y;if(e<h)h=e;d.x=f;d.z=g;d.y=h;i=a.wf;e=b.x;g=c.x;if(e>g)g=e;e=b.z;h=c.z;if(e>h)h=e;e=b.y;f=c.y;if(e>f)f=e;i.x=g;i.z=h;i.y=f;b=a.vv;h=d.x;j=d.z;k=d.y;b.x=h;b.z=j;b.y=k;e=i.x;f=i.z;g=i.y;h=h+e;j=j+f;k=k+g;b.x=h;b.z=j;b.y=k;f=h*0.5;g=j*0.5;e=k*0.5;b.x=f;b.z=g;b.y=e;b=a.wg;g=i.x;h=i.z;j=i.y;b.x=g;b.z=h;b.y=j;e=d.x;f=d.z;k=d.y;g=g-e;e=h-f;f=j-k;b.x=g;b.z=e;b.y=f;return a;}
function ASf(){var b;b=new Be;BT();A3c=b;}
function Lj(){var a=this;C.call(a);a.zS=null;a.DK=null;}
var A3d=null;function AYh(){AYh=Bi(Lj);ASv();}
function ASv(){var b;b=new Be;BT();A3d=b;}
var Vr=I();
var TL=I();
var AAQ=I();
var Xt=I();
var Q8=I();
var A3e=null;function AYs(){AYs=Bi(Q8);AMI();}
function K1(b){var c;AYs();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function AMI(){var b,c,d,e;b=new Qz;c=FF(CL(M(4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0),32),M(4.294967296E9*$rt_globals.Math.random()+(-2.147483648E9)|0));if(Dl(c,R))c=F(0, 2147483648);d=Bb(Bm(c,Bc(c,33)),F(3981806797, 4283543511));d=Bb(Bm(d,Bc(d,33)),F(444984403, 3301882366));e=Bm(d,Bc(d,33));d=Bb(Bm(e,Bc(e,33)),F(3981806797, 4283543511));d=Bb(Bm(d,Bc(d,33)),F(444984403, 3301882366));d=Bm(d,Bc(d,33));b.yX=e;b.yY=d;A3e=b;}
var CR=I();
var A3f=null;var A3g=null;var A3h=null;var A3i=null;var A3j=null;var A3k=null;var A3l=null;var A3m=null;var A3n=null;var A3o=null;var A3p=null;var A3q=null;var A3r=null;var A3s=null;var A3t=null;var A3u=null;var A3v=null;var A3w=null;var A3x=null;var A3y=null;var A3z=null;var A3A=null;var A3B=null;var A3C=null;function A3D(){A3D=Bi(CR);AI7();}
function AI7(){var b,c;b=new Be;BT();A3f=b;A3g=new Be;A3h=new Be;b=new JS;b.oK=1;b.cm=CU(16);A3i=b;b=new JS;b.oK=1;b.cm=CU(16);A3j=b;A3k=new BL;A3l=new BL;A3m=new BL;A3n=new BL;A3o=new BL;A3p=new BL;A3q=new BL;A3r=new BL;A3s=new BL;b=new J1;c=new Be;b.f8=c;b.hi=0.0;c.x=0.0;c.z=0.0;c.y=0.0;b.hi=0.0;A3t=b;A3u=new Be;A3v=new Be;A3w=new Be;A3x=new Be;A3y=new Be;A3z=new Be;A3A=new Be;A3B=new Be;A3C=new Be;}
var Us=I();
var WM=I(IF);
function AXF(a){var b=new WM();AO0(b,a);return b;}
function AO0(a,b){Pd(a,b);}
function Ee(){C.call(this);this.cR=null;}
var A3E=null;var A3F=null;var A3G=null;var A3H=null;var A3I=null;var A3J=null;var A3K=null;var A3L=null;var A3M=null;var A3N=null;var A3O=null;function G3(){G3=Bi(Ee);AF1();}
function Fx(){var a=new Ee();ABl(a);return a;}
function ABl(a){var b,c;G3();b=CU(16);c=b.data;a.cR=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;}
function GL(a,b){var c;c=b.data;b=a.cR.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;}
function Qr(a,b){var c,d,e,f,g;G3();c=A3E;d=c.data;e=a.cR.data;f=e[0];g=b.cR.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]
=e[2]*g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return GL(a,c);}
function KX(a){var b;b=a.cR.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;}
function Qy(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;KX(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.cR.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;}
function Wb(a,b,c){var d,e,f,g,h,i;G3();d=A3H;e=b.x;f=b.z;g=b.y;d.x=e;d.z=f;d.y=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Hf(f);f=d.x*e;g=d.z*e;e=d.y*e;d.x=f;d.z=g;d.y=e;}d=A3I;e=b.x;f=b.z;g=b.y;d.x=e;d.z=f;d.y=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Hf(f);f=d.x*e;g=d.z*e;e=d.y*e;d.x=f;d.z=g;d.y=e;}b=Ox(A3I,c);e=b.x;e=e*e;f=b.z;e=e+f*f;f=b.y;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Hf(e);h=b.x*g;e=b.z*g;f=b.y*g;b.x=h;b.z=e;b.y=f;}b=A3J;c=A3I;e=c.x;f=c.z;g=c.y;b.x=e;b.z=f;b.y=g;b=Ox(b,A3H);e=b.x;e=e*e;f=b.z;e=
e+f*f;f=b.y;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Hf(f);f=b.x*e;g=b.z*e;e=b.y*e;b.x=f;b.z=g;b.y=e;}KX(a);i=a.cR.data;b=A3I;i[0]=b.x;i[4]=b.z;i[8]=b.y;b=A3J;i[1]=b.x;i[5]=b.z;i[9]=b.y;b=A3H;i[2]= -b.x;i[6]= -b.z;i[10]= -b.y;return a;}
function TB(b,c){var d,e,f;G3();d=b.data;c=c.data;e=CU(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+
d[6]*c[5]+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];K(e,0,b,0,16);}
function ADb(b){G3();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]
*b[4]*b[10]*b[15]+b[0]*b[5]*b[10]*b[15];}
function Wt(b){var c,d,e;G3();c=CU(16);d=ADb(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]
*b[10]*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]
=b[12]*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]
*b[3]-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;}
function XF(b,c,d){var e,f,g,h,i,j,k,l;G3();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;}
function AF1(){var b;A3E=CU(16);b=new E0;RB();b.h0=0.0;b.hX=0.0;b.hY=0.0;b.hZ=1.0;A3F=b;b=new E0;b.h0=0.0;b.hX=0.0;b.hY=0.0;b.hZ=1.0;A3G=b;b=new Be;BT();A3H=b;A3I=new Be;A3J=new Be;A3K=new Be;A3L=Fx();A3M=new Be;A3N=new Be;A3O=new Be;}
var N6=I(0);
var Ib=I();
function Qz(){var a=this;Ib.call(a);a.yX=R;a.yY=R;}
var ZX=I(Bu);
function AXz(){var a=new ZX();AUt(a);return a;}
function AUt(a){Ep();}
var Rp=I(Bu);
function JL(){var a=this;C.call(a);a.im=null;a.f7=null;a.oz=null;}
var A3P=null;var A3Q=null;var A3R=null;function AMw(){AMw=Bi(JL);ANi();}
function AYB(){var a=new JL();TN(a);return a;}
function TN(a){var b,c,d,e,f,g;AMw();b=Bt(J1,6);c=b.data;a.im=b;b=Bt(Be,8);d=b.data;e=new Be;BT();d[0]=e;d[1]=new Be;d[2]=new Be;d[3]=new Be;d[4]=new Be;d[5]=new Be;d[6]=new Be;d[7]=new Be;a.f7=b;a.oz=CU(24);f=0;while(f<6){e=new J1;g=new Be;e.f8=g;e.hi=0.0;g.x=0.0;g.z=0.0;g.y=0.0;e.hi=0.0;c[f]=e;f=f+1|0;}}
function Z_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;AMw();c=A3Q;d=c.data;K(c,0,a.oz,0,d.length);c=b.cR;e=a.oz;f=0;G3();g=0;while(g<8){XF(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.f7.data[f];c=a.oz.data;j=h+1|0;i.x=c[h];g=j+1|0;i.z=c[j];h=g+1|0;i.y=c[g];f=f+1|0;}b=a.im.data[0];c=a.f7.data;i=c[1];k=c[0];l=c[2];m=b.f8;n=i.x;o=i.z;p=i.y;m.x=n;m.z=o;m.y=p;q=k.x;r=k.z;s=k.y;q=n-q;o=o-r;n=p-s;m.x=q;m.z=o;m.y=n;p=k.x-l.x;r=k.z-l.z;s=k.y-l.y;t=o*s-n*r;s=n*p-q*s;q=q*r-o*p;m.x=t;m.z=s;m.y=q;p=t*t+s*s+q*q;if(p
!==0.0&&p!==1.0){o=1.0/Hf(p);p=m.x*o;q=m.z*o;o=m.y*o;m.x=p;m.z=q;m.y=o;}k=b.f8;b.hi= -(i.x*k.x+i.z*k.z+i.y*k.y);b=a.im.data[1];c=a.f7.data;i=c[4];k=c[5];l=c[7];m=b.f8;r=i.x;s=i.z;n=i.y;m.x=r;m.z=s;m.y=n;o=k.x;p=k.z;q=k.y;o=r-o;p=s-p;q=n-q;m.x=o;m.z=p;m.y=q;AEw(Zb(m,k.x-l.x,k.z-l.z,k.y-l.y));b.hi= -ACY(i,b.f8);b=a.im.data[2];c=a.f7.data;Jp(b,c[0],c[4],c[3]);b=a.im.data[3];c=a.f7.data;Jp(b,c[5],c[1],c[6]);b=a.im.data[4];c=a.f7.data;Jp(b,c[2],c[3],c[6]);b=a.im.data[5];c=a.f7.data;Jp(b,c[4],c[0],c[1]);}
function ANi(){var b,c,d,e,f,g,h,i,j;b=Bt(Be,8);c=b.data;d=new Be;BT();d.x=(-1.0);d.z=(-1.0);d.y=(-1.0);c[0]=d;d=new Be;d.x=1.0;d.z=(-1.0);d.y=(-1.0);c[1]=d;d=new Be;d.x=1.0;d.z=1.0;d.y=(-1.0);c[2]=d;d=new Be;d.x=(-1.0);d.z=1.0;d.y=(-1.0);c[3]=d;d=new Be;d.x=(-1.0);d.z=(-1.0);d.y=1.0;c[4]=d;d=new Be;d.x=1.0;d.z=(-1.0);d.y=1.0;c[5]=d;d=new Be;d.x=1.0;d.z=1.0;d.y=1.0;c[6]=d;d=new Be;d.x=(-1.0);d.z=1.0;d.y=1.0;c[7]=d;A3P=b;b=CU(24);e=b.data;A3Q=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]=d.x;j=i+1|0;e[i]
=d.z;f=j+1|0;e[j]=d.y;h=h+1|0;}A3R=new Be;}
function E0(){var a=this;C.call(a);a.h0=0.0;a.hX=0.0;a.hY=0.0;a.hZ=0.0;}
var A3S=null;var A3T=null;function RB(){RB=Bi(E0);ALS();}
function ALS(){var b;b=new E0;RB();b.h0=0.0;b.hX=0.0;b.hY=0.0;b.hZ=0.0;A3S=b;b=new E0;b.h0=0.0;b.hX=0.0;b.hY=0.0;b.hZ=0.0;A3T=b;}
var Tm=I();
var Z2=I();
function Be(){var a=this;C.call(a);a.x=0.0;a.z=0.0;a.y=0.0;}
var A3U=null;var A3V=null;var A3W=null;var A3X=null;var A3Y=null;function BT(){BT=Bi(Be);AGz();}
function AEw(a){var b,c,d;b=a.x;b=b*b;c=a.z;b=b+c*c;c=a.y;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/Hf(c);c=a.x*b;d=a.z*b;b=a.y*b;a.x=c;a.z=d;a.y=b;return a;}return a;}
function ACY(a,b){return a.x*b.x+a.z*b.z+a.y*b.y;}
function Ox(a,b){var c,d,e,f,g,h,i;c=a.z;d=b.y;e=c*d;f=a.y;g=b.z;h=e-f*g;e=b.x;f=f*e;i=a.x;d=f-i*d;c=i*g-c*e;a.x=h;a.z=d;a.y=c;return a;}
function Zb(a,b,c,d){var e,f,g,h;e=a.z;f=e*d;g=a.y;h=f-g*c;g=g*b;f=a.x;d=g-f*d;b=f*c-e*b;a.x=h;a.z=d;a.y=b;return a;}
function AGz(){var b;b=new Be;BT();b.x=1.0;b.z=0.0;b.y=0.0;A3U=b;b=new Be;b.x=0.0;b.z=1.0;b.y=0.0;A3V=b;b=new Be;b.x=0.0;b.z=0.0;b.y=1.0;A3W=b;b=new Be;b.x=0.0;b.z=0.0;b.y=0.0;A3X=b;A3Y=Fx();}
var WX=I();
var VY=I(DJ);
var P5=I(G_);
function AXh(a,b){var c=new P5();AO$(c,a,b);return c;}
function AO$(a,b,c){Ep();a.kN=b;a.lp=c;c=Ju(b, -c);a.l_=c;a.lr=1.0/(1.0-c);}
var AAh=I();
var UC=I();
var ACu=I();
function J1(){var a=this;C.call(a);a.f8=null;a.hi=0.0;}
function Jp(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.f8;f=b.x;g=b.z;h=b.y;e.x=f;e.z=g;e.y=h;i=c.x;j=c.z;k=c.y;f=f-i;g=g-j;k=h-k;e.x=f;e.z=g;e.y=k;h=c.x-d.x;j=c.z-d.z;l=c.y-d.y;i=g*l-k*j;k=k*h-f*l;f=f*j-g*h;e.x=i;e.z=k;e.y=f;f=i*i+k*k+f*f;if(f!==0.0&&f!==1.0){k=1.0/Hf(f);f=e.x*k;g=e.z*k;k=e.y*k;e.x=f;e.z=g;e.y=k;}c=a.f8;a.hi= -(b.x*c.x+b.z*c.z+b.y*c.y);}
var QJ=I(Bu);
var ACw=I();
var UF=I();
var AAM=I();
var ACt=I();
var ZD=I(0);
var W3=I();
var Rw=I();
var A3Z=null;function VM(){var b,c;A3Z=CU(16384);b=0;while(b<16384){A3Z.data[b]=ATh((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=A3Z.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);}
function D$(){var a=this;C.call(a);a.cX=null;a.cv=null;a.dh=0;a.rR=0.0;a.nD=0.0;}
var A30=null;var A31=null;function EU(){EU=Bi(D$);AJg();}
function A32(){var a=new D$();ADs(a);return a;}
function A33(a,b){var c=new D$();UE(c,a,b);return c;}
function A34(a,b,c,d,e,f){var g=new D$();AAY(g,a,b,c,d,e,f);return g;}
function A35(a,b,c,d,e,f,g,h,i){var j=new D$();ABD(j,a,b,c,d,e,f,g,h,i);return j;}
function ADs(a){var b;EU();b=new CJ;b.b2=1;b.C=Bt(C,1);a.cX=b;b=new D5;b.dT=1;b.cc=Y(2);a.cv=b;}
function UE(a,b,c){var d;EU();d=new CJ;d.b2=1;d.C=Bt(C,1);a.cX=d;d=new D5;d.dT=1;d.cc=Y(2);a.cv=d;I5(a,b,c,0,c.iW(),b.KF(),0.0,8,0,null);}
function AAY(a,b,c,d,e,f,g){var h;EU();h=new CJ;h.b2=1;h.C=Bt(C,1);a.cX=h;h=new D5;h.dT=1;h.cc=Y(2);a.cv=h;I5(a,b,c,0,c.iW(),d,e,f,g,null);}
function ABD(a,b,c,d,e,f,g,h,i,j){var k;EU();k=new CJ;k.b2=1;k.C=Bt(C,1);a.cX=k;k=new D5;k.dT=1;k.cc=Y(2);a.cv=k;I5(a,b,c,d,e,f,g,h,i,j);}
function I5(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;ACD(a);k=b.mI;if(d==e){a.nD=k.fF;return;}if(i)g=J8(g,k.sL*3.0);l=!i&&j===null?0:1;m=Ke(f);ADl(a.cv,0,m);n=k.le;if(n)FI(A31,m);o=0;p=0.0;q=k.mK;r=null;s=null;t=m;u=d;a:{b:while(true){c:{v=0;if(d==e){if(u==e)break a;o=1;w=e;}else{i=d+1|0;if(d<0)break b;x=c.e.data;if(d>=x.length)break b;d:{switch(x[d]){case 10:w=i-1|0;v=1;d=i;break c;case 91:if(!n){d=i;break d;}y=AAC(a,c,i,e);if(y>=0){w=i-1|0;d=i+(y+1|0)|0;if(d==e){o=1;break c;}m=
P0(A31);break c;}if(y!=(-2)){d=i;break d;}d=i+1|0;break d;default:}d=i;}continue b;}}f=A30;b=f.dH;i=b.o;if(!i)b=Pz(f);else{if(!i){b=new B2;b.c=1;b.d=1;b.f=B(41);G(b);}i=i-1|0;b.o=i;x=b.C.data;b=x[i];x[i]=null;}z=b;z.e_=0.0;z.nG=p;N_(k,z,c,u,w,s);a.dh=a.dh+z.b8.o|0;if(m!=t){b=a.cv;i=Gt(b,b.br-2|0);ba=a.dh;if(i!=ba){FI(a.cv,ba);FI(a.cv,m);}else{b=a.cv;Jx(b,b.br-1|0,m);}t=m;}e:{if(!z.b8.o){I2(A30,z);if(r===null)break e;}else if(r!==null){TT(r,z);I2(A30,z);}else{Dh(a.cX,z);r=z;}if(!v&&!o)s=ADS(r.b8);else{L$(a,k,
r);s=null;}if(l&&r.b8.o&&!(!v&&!o)){bb=OT(r.cs)+Ok(r.cs,1);bc=2;while(bc<r.cs.b0){b=r.b8;y=bc-1|0;bd=ADr(b,y);if(bb+(bd.dg+bd.dY|0)*k.g1-k.hF-9.999999747378752E-5<=g)bb=bb+r.cs.cm.data[bc];else{if(j!==null){Uh(a,k,r,g,j);break a;}ba=Tj(k,r.b8,bc);if(!(!ba&&r.e_===0.0)&&ba<r.b8.o)y=ba;r=AB1(a,k,r,y);if(r===null)break e;Dh(a.cX,r);p=p+q;r.e_=0.0;r.nG=p;bb=OT(r.cs)+Ok(r.cs,1);bc=1;}bc=bc+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.uV;}u=d;}b=new Bd;b.c=1;b.d=1;G(b);}a.nD=k.fF+KF(p);VO(a,k);Zz(a,g,h);if(n)A31.br
=0;}
function VO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=0.0;d=a.cX;e=d.C;f=0;g=d.o;while(f<g){d=e.data[f];h=d.cs.cm.data;i=d.e_+h[0];j=0.0;k=d.b8;l=k.C;m=0;n=k.o;while(m<n){k=l.data[m];j=J8(j,i+(k.dg+k.dY|0)*b.g1-b.hF);m=m+1|0;i=i+h[m];}i=J8(i,j);j=d.e_;i=i-j;d.oQ=i;c=J8(c,j+i);f=f+1|0;}a.rR=c;}
function Zz(a,b,c){var d,e,f,g,h;a:{if(!(c&8)){d=!(c&1)?0:1;e=a.cX;f=e.C;g=0;h=e.o;while(true){if(g>=h)break a;e=f.data[g];e.e_=e.e_+(!d?b-e.oQ:0.5*(b-e.oQ));g=g+1|0;}}}}
function Uh(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;f=c.b8.o;EU();g=A30;h=g.dH;i=h.o;if(i){if(!i){b=new B2;b.c=1;b.d=1;b.f=B(41);G(b);}i=i-1|0;h.o=i;j=h.C.data;h=j[i];j[i]=null;}else a:{try{h=MI(g.ft,null);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){c=$$je;}else{throw $$e;}}e=new Ba;b=new N;b.b=D(16);H(b,b.a,B(42));k=g.ft.fd.e6;if(k.bk===null)k.bk=$rt_str(k.P.$meta.name);g=k.bk;H(b,b.a,g);g=new L;j=b.b;i=b.a;O();l=D(i);g.e=l;K(j,0,l,0,i);e.c=1;e.d=1;e.f=g;e.cY=c;G(e);}h=h;N_(b,h,e,0,e.iW(),
null);m=0.0;g=h.cs;n=g.b0;if(n>0){k=h.b8;o=k.o;if(!o){b=new B2;b.c=1;b.d=1;b.f=B(41);G(b);}k=k.C.data[o-1|0];if(!k.oJ)g.cm.data[n-1|0]=(k.dg+k.dY|0)*b.g1-b.hF;j=g.cm;p=1;while(p<n){m=m+j.data[p];p=p+1|0;}}d=d-m;i=0;q=c.e_;k=c.cs;j=k.cm;b:{while(true){if(i>=k.b0)break b;q=q+j.data[i];if(q>d)break;i=i+1|0;}}if(i<=1){r=c.b8;j=r.C;i=0;o=r.o;s=null;if(i>o){b=new Bg;b.c=1;b.d=1;G(b);}while(i<o){l=j.data;n=i+1|0;l[i]=s;i=n;}r.o=0;k.b0=0;Ku(k,g.cm,0,g.b0);}else{Ng(c.b8,i-1|0);g=c.cs;if(g.b0>i)g.b0=i;L$(a,b,c);g=h.cs;i
=g.b0;if(i>0)R5(c.cs,g,1,i-1|0);}c:{o=f-c.b8.o|0;if(o>0){a.dh=a.dh-o|0;if(b.le)while(true){b=a.cv;f=b.br;if(f<=2)break c;if(Gt(b,f-2|0)<a.dh)break c;b=a.cv;b.br=b.br-2|0;}}}b=c.b8;c=h.b8;UJ(b,c.C,0,c.o);a.dh=a.dh+e.iW()|0;I2(A30,h);}
function AB1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;e=c.b8;f=e.o;g=c.cs;h=d;a:{while(true){if(h<=0)break a;i=h-1|0;if(i>=f)break;b:{switch(e.C.data[i].gb&65535){case 9:case 10:case 13:case 32:break;default:j=0;break b;}j=1;}if(!j)break a;h=h+(-1)|0;}c=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,i,10);H(b,b.a,B(36));d=e.o;P(b,b.a,d,10);k=new L;l=b.b;j=b.a;O();m=D(j);k.e=m;K(l,0,m,0,j);c.c=1;c.d=1;c.f=k;G(c);}c:{while(true){j=Bw(d,f);if(j>=0)break c;if(j>=0)break;d:{switch(e.C.data[d].gb&65535){case 9:case 10:case 13:case 32:break;default:i
=0;break d;}i=1;}if(!i)break c;d=d+1|0;}c=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,d,10);H(b,b.a,B(36));d=e.o;P(b,b.a,d,10);k=new L;l=b.b;j=b.a;O();m=D(j);k.e=m;K(l,0,m,0,j);c.c=1;c.d=1;c.f=k;G(c);}k=null;if(j>=0){Ng(e,h);f=h+1|0;if(g.b0>f)g.b0=f;n=d-h|0;if(n>0){a.dh=a.dh-n|0;if(b.le){g=a.cv;if(Gt(g,g.br-2|0)>a.dh){o=P0(a.cv);while(true){g=a.cv;d=Gt(g,g.br-2|0);j=a.dh;if(d<=j)break;g=a.cv;g.br=g.br-2|0;}g=a.cv;Jx(g,g.br-2|0,j);g=a.cv;Jx(g,g.br-1|0,o);}}}}else{EU();p=A30;k=p.dH;k=k.o?Ne(k):Pz(p);e:{k=
k;p=k.b8;TE(p,e,0,h);VJ(e,0,d-1|0);c.b8=p;k.b8=e;q=k.cs;R5(q,g,0,h+1|0);Tu(g,1,d);g.cm.data[0]=( -(AEo(e)).dY|0)*b.g1-b.oj;c.cs=q;k.cs=g;j=c.b8.o;i=k.b8.o;n=(f-j|0)-i|0;d=a.dh-n|0;a.dh=d;if(b.le&&n>0){r=d-i|0;s=a.cv.br-2|0;while(true){if(s<2)break e;t=Gt(a.cv,s);if(t<=r)break;Jx(a.cv,s,t-n|0);s=s+(-2)|0;}}}}if(h)L$(a,b,c);else{EU();I2(A30,c);Ne(a.cX);}return k;}
function L$(a,b,c){var d,e;d=c.b8;e=d.o;if(!e){b=new B2;b.c=1;b.d=1;b.f=B(41);G(b);}d=d.C.data[e-1|0];if(!d.oJ){c=c.cs;c.cm.data[c.b0-1|0]=(d.dg+d.dY|0)*b.g1-b.hF;}}
function AAC(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c==d)return (-1);if(c>=0){e=b.e;f=e.data;g=f.length;if(c<g){switch(f[c]){case 35:h=0;i=c+1|0;a:{while(true){if(i>=d)break a;if(i<0)break;if(i>=g)break;j=f[i];if(j==93){if(i<(c+2|0))break a;if(i<=(c+9|0)){c=i-c|0;if(c<8)h=h<<((9-c|0)<<2)|255;EU();b=A31;d=((h&(-16711936))>>>8|0)|(h&16711935)<<8;FI(b,(d>>>16|0)+(d<<16)|0);return c;}break a;}k=(h<<4)+j|0;if(j>=48&&j<=57)h=k+(-48)|0;else if(j>=65&&j<=70)h=k+(-55)|0;else{if(j<97)break a;if(j>102)break a;h=k+(-87)|0;}i
=i+1|0;}b=new Bd;b.c=1;b.d=1;G(b);}return (-1);case 91:break;case 93:EU();b=A31;c=b.br;if(c>1)b.br=c-1|0;return 0;default:l=c+1|0;b:{while(l<d){if(l<0)break b;i=Bw(l,g);if(i>=0)break b;if(f[l]==93){d=Bw(c,l);if(d>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!d){O();b=A36;}else if(!(!c&&!i)){b=new L;d=l-c|0;O();f=D(d);b.e=f;K(e,c,f,0,d);}AKl();m=A37;d=Df(m,b);m=d<0?null:m.cZ.data[d];if(m===null)return (-1);EU();FI(A31,Ke(m));return l-c|0;}l=l+1|0;}return (-1);}b=new Bd;b.c=1;b.d=1;G(b);}return (-2);}}b=new Bd;b.c=1;b.d=
1;G(b);}
function ACD(a){var b,c,d,e,f,g,h;EU();ADP(A30,a.cX);b=a.cX;c=b.C;d=0;e=b.o;f=null;if(d>e){b=new Bg;b.c=1;b.d=1;G(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.o=0;a.cv.br=0;a.dh=0;a.rR=0.0;a.nD=0.0;}
function APY(a){var b,c,d,e,f,g,h,i,j;if(!a.cX.o)return B(43);b=new N;b.b=D(128);c=a.rR;Ei(b,b.a,c);d=b.a;Bo(b,d,d+1|0);b.b.data[d]=120;c=a.nD;Ei(b,b.a,c);d=b.a;Bo(b,d,d+1|0);b.b.data[d]=10;e=0;d=a.cX.o;while(e<d){f=a.cX;if(e>=f.o){g=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,e,10);H(b,b.a,B(36));e=f.o;P(b,b.a,e,10);f=new L;h=b.b;d=b.a;O();i=D(d);f.e=i;K(h,0,i,0,d);g.c=1;g.d=1;g.f=f;G(g);}f=T9(f.C.data[e]);H(b,b.a,f);j=b.a;Bo(b,j,j+1|0);b.b.data[j]=10;e=e+1|0;}e=b.a-1|0;b.a=e;f=new L;h=b.b;O();i=D(e);f.e
=i;K(h,0,i,0,e);return f;}
function AJg(){var b,c,d,e,f,g,$$je;O4();b=A1M;c=Df(b,J(E3));b=c<0?null:b.cZ.data[c];if(b===null){b=new I0;d=new CJ;d.b2=0;d.C=Bt(C,4);b.dH=d;b.gx=100;a:{try{d=QA(J(E3),null);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){}else{throw $$e;}}try{d=OP(J(E3),null);L2(d,1);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.ft=d;if(d===null){b=new BU;d=new N;d.b=D(16);H(d,d.a,B(27));if(J(E3).bk===null)J(E3).bk=$rt_str(J(E3).P.$meta.name);e=J(E3).bk;H(d,d.a,e);e=new L;f=d.b;c
=d.a;O();g=D(c);e.e=g;K(f,0,g,0,c);b.c=1;b.d=1;b.f=e;G(b);}BW(A1M,J(E3),b);}A30=b;e=new D5;e.dT=1;e.cc=Y(4);A31=e;}
function Hb(){var a=this;C.call(a);a.lJ=null;a.x2=0.0;a.x4=0.0;a.EH=0.0;a.EG=0.0;a.or=0;a.pj=0;}
function AB4(a,b,c,d,e){var f,g,h;f=a.lJ.hx;g=1.0/f.gm;h=1.0/f.f_;UD(a,b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.or=d;if(e<0)e= -e|0;a.pj=e;}
function UD(a,b,c,d,e){var f,g,h,i,j,k,l;f=a.lJ.hx;g=f.gm;h=f.f_;i=KF(d-b);j=g;i=i*j;a.or=i+Fm(i)*0.5|0;k=KF(e-c);i=h;k=k*i;l=k+Fm(k)*0.5|0;a.pj=l;if(a.or==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.x2=b;a.x4=c;a.EH=d;a.EG=e;}
var ZU=I(Hb);
function K7(){var a=this;C.call(a);a.mI=null;a.gC=null;a.jM=null;a.zK=0;a.yB=0;a.xm=0;}
function A38(a,b,c){var d=new K7();W0(d,a,b,c);return d;}
function W0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;a.zK=b.qv;a.mI=b;a.yB=d;if(c!==null&&c.o){a.gC=c;a.xm=0;}else{e=b.jC;if(e===null){b=new Bg;b.c=1;b.d=1;b.f=B(44);G(b);}f=e.data.length;c=new CJ;c.b2=1;c.C=Bt(C,f);a.gC=c;g=0;while(g<f){h=b.w3;if(h!==null){i=A39;c=b.jC.data[g];j=h.kk;k=AQ8(i.ox,c,j);}else{c=A39;h=b.jC.data[g];k=new JW;i=c.ox;LG();K4(k,i,h,A3$);}c=a.gC;h=new Hb;l=new Ma;m=null;j=AXP(k,ARm(k),m,0);i=A3_;m=i.l.createTexture();n=i.ko;i.ko=n+1|0;CP(i.iM,n,CY(m));AIF();k=A4a;l.m1=k;l.oT=k;AES();k=A4b;l.mm
=k;l.m7=k;l.sz=1.0;l.f9=3553;l.qJ=n;AC9(l,j);k=A4c;i=A4d;if(k===null){i=i.c9.data[0];while(i!==null&&i.du!==null){i=i.dJ;}}else{d=Ti(k);e=i.c9.data;i=e[d&(e.length-1|0)];while(i!==null&&!(i.gy==d&&AGB(k,i.du))){i=i.dJ;}}i=i===null?null:i.ev;if(i===null){i=new CJ;i.b2=1;i.C=Bt(C,16);}Dh(i,l);JZ(A4d,k,i);h.lJ=l;k=l.hx;AB4(h,0,0,k.gm,k.f_);Dh(c,h);g=g+1|0;}a.xm=1;}a.jM=AY6(a,a.yB);AEh(a,b);}
function AEh(a,b){var c,d,e,f,g,h,i,j,k,l;c=b.hD.data;d=c.length;e=0;a:while(true){if(e>=d){f=b.pX;if(f!==null){g=a.gC;d=f.jt;if(d>=g.o){f=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,d,10);H(b,b.a,B(36));d=g.o;P(b,b.a,d,10);g=new L;c=b.b;e=b.a;O();h=D(e);g.e=h;K(c,0,h,0,e);f.c=1;f.d=1;f.f=g;G(f);}Nk(b,f,g.C.data[d]);}return;}b:{h=c[e];if(h!==null){h=h.data;i=h.length;j=0;while(true){if(j>=i)break b;f=h[j];if(f!==null){g=a.gC;k=f.jt;if(k>=g.o)break a;Nk(b,f,g.C.data[k]);}j=j+1|0;}}}e=e+1|0;}b=new Bh;l=new N;l.b
=D(16);H(l,l.a,B(35));P(l,l.a,k,10);H(l,l.a,B(36));d=g.o;P(l,l.a,d,10);f=new L;c=l.b;e=l.a;O();h=D(e);f.e=h;K(c,0,h,0,e);b.c=1;b.d=1;b.f=f;G(b);}
function Cn(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$$je;AAa(a.jM);i=a.jM;j=c.e.data.length;k=null;O4();l=A1M;m=Df(l,J(D$));n=m<0?null:l.cZ.data[m];if(n===null){n=new I0;l=new CJ;Di(l);l.b2=0;l.C=Bt(C,4);n.dH=l;n.gx=100;a:{try{l=QA(J(D$),null);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){}else{throw $$e;}}try{l=OP(J(D$),null);L2(l,1);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof D_){}else{throw $$e;}}l=null;}n.ft=l;if(l===null){b=new BU;c=new N;IP(c,16);DY(c,c.a,B(27));if(J(D$).bk===null)J(D$).bk
=$rt_str(J(D$).P.$meta.name);l=J(D$).bk;DY(c,c.a,l);l=new L;o=c.b;h=c.a;O();p=D(h);l.e=p;K(o,0,p,0,h);b.c=1;b.d=1;b.f=l;G(b);}BW(A1M,J(D$),n);}b:{l=n.dH;q=l.o;if(q){if(!q){b=new B2;b.c=1;b.d=1;b.f=B(41);G(b);}m=q-1|0;l.o=m;o=l.C.data;r=o[m];o[m]=null;}else try{r=MI(n.ft,null);break b;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){c=$$je;l=new Ba;b=new N;Di(b);b.b=D(16);H(b,b.a,B(42));i=n.ft.fd.e6;if(i.bk===null)i.bk=$rt_str(i.P.$meta.name);r=i.bk;H(b,b.a,r);r=new L;o=b.b;h=b.a;O();p=D(h);r.e=p;K(o,0,p,0,h);PY(l,
r,c);G(l);}else{throw $$e;}}}l=r;Dh(i.ni,l);I5(l,i.jA,c,0,j,i.ss,f,g,h,k);Zn(i,l,d,e+i.jA.mI.nj);VX(a.jM,b);return l;}
var Q$=I();
var A4e=null;function A4f(){A4f=Bi(Q$);AUx();}
function AUx(){var b;b=new Bx;E4();A4e=b;}
function Bx(){var a=this;C.call(a);a.cr=0.0;a.cq=0.0;a.cp=0.0;a.co=0.0;}
var A4g=null;var A4h=null;var A4i=null;var A4j=null;var A4k=null;var A4l=0.0;var A4m=null;var A4n=null;var A4o=null;var A4p=null;var A4q=null;var A4r=null;var A4s=null;var A4t=null;var A4u=null;var A4v=null;var A4w=null;var A4x=null;var A4y=null;var A4z=null;var A4A=null;var A4B=null;var A4C=null;var A4D=null;var A4E=null;var A4F=null;var A4G=null;var A4H=null;var A4I=null;var A4J=null;var A4K=null;var A4L=null;var A4M=null;var A4N=null;var A4O=null;function E4(){E4=Bi(Bx);AEZ();}
function DV(a){var b,c;b=a.cr;if(b<0.0)a.cr=0.0;else if(b>1.0)a.cr=1.0;c=a.cq;if(c<0.0)a.cq=0.0;else if(c>1.0)a.cq=1.0;c=a.cp;if(c<0.0)a.cp=0.0;else if(c>1.0)a.cp=1.0;c=a.co;if(c<0.0)a.co=0.0;else if(c>1.0)a.co=1.0;return a;}
function AJP(a,b){var c,d,e,f;if(a===b)return 1;if(b!==null){c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CE;d.P=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new CE;c.P=e;f=c;e.classObject=f;}}if(d===c){c=b;return Ke(a)!=Ke(c)?0:1;}}return 0;}
function ANU(a){var b,c,d;b=a.cr;c=31*(b===0.0?0:($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b))|0;b=a.cq;c=31*(c+(b===0.0?0:($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b))|0)|0;d=a.cp;c=31*(c+(d===0.0?0:($rt_globals.isNaN(d)?1:0)?2143289344:$rt_floatToRawIntBits(d))|0)|0;d=a.co;return c+(d===0.0?0:($rt_globals.isNaN(d)?1:0)?2143289344:$rt_floatToRawIntBits(d))|0;}
function AC3(a){return $rt_intBitsToFloat(((255.0*a.co|0)<<24|(255.0*a.cp|0)<<16|(255.0*a.cq|0)<<8|255.0*a.cr|0)&(-16777217));}
function Ke(a){return (255.0*a.co|0)<<24|(255.0*a.cp|0)<<16|(255.0*a.cq|0)<<8|255.0*a.cr|0;}
function AI$(a){var b,c,d,e,f;b=Bv((255.0*a.cr|0)<<24|(255.0*a.cq|0)<<16|(255.0*a.cp|0)<<8|255.0*a.co|0,4);while(b.e.data.length<8){c=new N;c.b=D(16);H(c,c.a,B(45));H(c,c.a,b);b=new L;d=c.b;e=c.a;O();f=D(e);b.e=f;K(d,0,f,0,e);}return b;}
function CM(b,c){E4();b.cr=((c&(-16777216))>>>24|0)/255.0;b.cq=((c&16711680)>>>16|0)/255.0;b.cp=((c&65280)>>>8|0)/255.0;b.co=(c&255)/255.0;}
function AEZ(){var b;b=new Bx;E4();b.cr=1.0;b.cq=1.0;b.cp=1.0;b.co=1.0;DV(b);A4g=b;b=new Bx;CM(b,(-1077952513));A4h=b;b=new Bx;CM(b,2139062271);A4i=b;b=new Bx;CM(b,1061109759);A4j=b;b=new Bx;b.cr=0.0;b.cq=0.0;b.cp=0.0;b.co=1.0;DV(b);A4k=b;A4l=AC3(A4g);b=new Bx;b.cr=0.0;b.cq=0.0;b.cp=0.0;b.co=0.0;DV(b);A4m=b;b=new Bx;b.cr=0.0;b.cq=0.0;b.cp=1.0;b.co=1.0;DV(b);A4n=b;b=new Bx;b.cr=0.0;b.cq=0.0;b.cp=0.5;b.co=1.0;DV(b);A4o=b;b=new Bx;CM(b,1097458175);A4p=b;b=new Bx;CM(b,1887473919);A4q=b;b=new Bx;CM(b,(-2016482305));A4r
=b;b=new Bx;b.cr=0.0;b.cq=1.0;b.cp=1.0;b.co=1.0;DV(b);A4s=b;b=new Bx;b.cr=0.0;b.cq=0.5;b.cp=0.5;b.co=1.0;DV(b);A4t=b;b=new Bx;CM(b,16711935);A4u=b;b=new Bx;CM(b,2147418367);A4v=b;b=new Bx;CM(b,852308735);A4w=b;b=new Bx;CM(b,579543807);A4x=b;b=new Bx;CM(b,1804477439);A4y=b;b=new Bx;CM(b,(-65281));A4z=b;b=new Bx;CM(b,(-2686721));A4A=b;b=new Bx;CM(b,(-626712321));A4B=b;b=new Bx;CM(b,(-5963521));A4C=b;b=new Bx;CM(b,(-1958407169));A4D=b;b=new Bx;CM(b,(-759919361));A4E=b;b=new Bx;CM(b,(-1306385665));A4F=b;b=new Bx;CM(b,
(-16776961));A4G=b;b=new Bx;CM(b,(-13361921));A4H=b;b=new Bx;CM(b,(-8433409));A4I=b;b=new Bx;CM(b,(-92245249));A4J=b;b=new Bx;CM(b,(-9849601));A4K=b;b=new Bx;b.cr=1.0;b.cq=0.0;b.cp=1.0;b.co=1.0;DV(b);A4L=b;b=new Bx;CM(b,(-1608453889));A4M=b;b=new Bx;CM(b,(-293409025));A4N=b;b=new Bx;CM(b,(-1339006721));A4O=b;}
function Kh(){var a=this;C.call(a);a.f9=0;a.qJ=0;a.m1=null;a.oT=null;a.mm=null;a.m7=null;a.sz=0.0;}
var A0B=0.0;function AAH(a,b,c,d){if(b!==null&&!(!d&&a.mm===b)){A3_.jI(a.f9,10242,b.mc);a.mm=b;}if(c!==null&&!(!d&&a.m7===c)){A3_.jI(a.f9,10243,c.mc);a.m7=c;}}
function Tp(a,b,c,d){if(b!==null&&!(!d&&a.m1===b)){A3_.jI(a.f9,10241,b.fH);a.m1=b;}if(c!==null&&!(!d&&a.oT===c)){A3_.jI(a.f9,10240,c.fH);a.oT=c;}}
function WT(){var b,c,d,e,f;b=A0B;if(b>0.0)return b;if(!(A4P.iO.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){A0B=1.0;return 1.0;}if(!A0D){c=CU(16);d=c.data.length;e=new It;f=0+d|0;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=f;e.jB=0;e.k0=0;e.i6=c;}else{e=new CT;c=BS(64);e.B=(-1);e.J=64;e.g=64;CB();e.bt=A4Q;e.bB=0;e.bl=c;e.h=0;e.g=64;e.cu=1;e.bL=0;e.bt=DE();e=FP(e);}B_(e,0);De(e,e.J);A4R.mY(34047,e);b=PL(e,0);A0B=b;return b;}
function ADH(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;if(c===null)return;if(!c.hR)Oh(c);AFA();if(A4S===A4T){c=new Ba;c.c=1;c.d=1;c.f=B(46);G(c);}if(!c.hR){e=new Ba;e.c=1;e.d=1;e.f=B(47);G(e);}c.hR=0;f=c.jL;c.jL=null;g=1;h=c.iS;e=f.bO;if(e===null){HB();e=A4U;}else e=IA(e.cn);if(h===e)e=f;else{e=new H$;h=f.bO;J0(e,h===null?f.dd:h.c3,h===null?f.df:h.c2,c.iS);Iq();h=A4V;e.kX=h;i=e.bO;if(i===null){FR(e);h=e.cL;Hr();i=$rt_ustr(A4W.u);h.globalCompositeOperation=i;}else{j=h!==h?1:0;Q5(i.cP,j);}i=f.bO;g=i===null?f.dd:i.c3;k
=i===null?f.df:i.c2;h=e.bO;if(h===null){FR(f);Ki(e,f.fO,0,0,g,k,0,0,g,k);}else{l=i.cP;m=h.cP;Mq(l,m,0,0,g,k,0,0,g,k);}if(f.i5){e=new Ba;e.c=1;e.d=1;e.f=B(48);G(e);}JE();Iy(A4X,f.ku);h=f.bO;if(h!==null)Mj(h.cP);f.i5=1;g=1;}A3_.pG(3317,1);if(c.vP)ABp(b,e,K$(e),Lx(e));else{h=A3_;c=e.bO;if(c===null)k=6408;else a:{j=c.cn;switch(j){case 1:k=6406;break a;case 2:k=6410;break a;case 3:case 5:k=6407;break a;case 4:case 6:k=6408;break a;default:}c=new Ba;e=new N;e.b=D(16);DY(e,e.a,Ea(B(49)));P(e,e.a,j,10);h=new L;n=e.b;d
=e.a;o=D(d);h.e=o;K(n,0,o,0,d);c.c=1;c.d=1;c.f=h;G(c);}l=c===null?e.dd:c.c3;p=c===null?e.df:c.c2;q=c===null?6408:ATz(c.cn);c=e.bO;h.hv(b,d,k,l,p,0,q,c===null?5121:ATW(c.cn),ABB(e));}if(g)N8(e);}
function ALJ(){A0B=0.0;}
function Ma(){Kh.call(this);this.hx=null;}
var A4d=null;function AC9(a,b){var c,d;a.hx=b;if(!b.hR)Oh(b);A3_.lT(a.f9,a.qJ);ADH(3553,b,0);Tp(a,a.m1,a.oT,1);AAH(a,a.mm,a.m7,1);c=a.sz;d=WT();if(d!==1.0){c=ABw(c,d);A4R.rI(3553,34046,c);a.sz=c;}A3_.lT(a.f9,0);}
function APa(a){var b,c,d,e,f,g,h;b=a.hx;if(!(b instanceof KT)){b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=Bv(a.$id$,4);b=new N;b.b=D(16);H(b,b.a,B(1));e=b.a;if(d===null)d=B(2);H(b,e,d);c=new L;f=b.b;g=b.a;O();h=D(g);c.e=h;K(f,0,h,0,g);return c;}c=b;if(!c.$id$){d=$rt_nextId();c.$id$=d;}d=Bv(b.$id$,4);b=new N;b.b=D(16);H(b,b.a,B(1));e=b.a;if(d===null)d=B(2);H(b,e,d);c=new L;f=b.b;g=b.a;O();h=D(g);c.e=h;K(f,0,h,0,g);return c;}
function AA7(){var b,c,d,e;b=new H0;c=J6(16);b.f5=0;d=Bt(FO,c);e=d.data;b.c9=d;b.mf=0.75;b.hC=e.length*0.75|0;A4d=b;}
function CJ(){var a=this;C.call(a);a.C=null;a.o=0;a.b2=0;a.pm=null;}
function AZr(){var a=new CJ();AHG(a);return a;}
function AHG(a){a.b2=1;a.C=Bt(C,16);}
function Dh(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.C;d=c.data;e=a.o;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CE;i.P=h;f=i;h.classObject=f;}}f=Eg(i);if(f===null){b=new Dm;b.c=1;b.d=1;G(b);}if(f===J($rt_voidcls())){b=new Bg;b.c=1;b.d=1;G(b);}if(g<0){b=new DP;b.c=1;b.d=1;G(b);}f=Et(f.P,g);j=f.data;k=a.o;l=j.length;if(k<l)l=k;ES(c,0,f,0,l);a.C=f;}f=f.data;g=a.o;a.o=g+1|0;f[g]=b;}
function TE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;if((c+d|0)>b.o){e=new Bg;f=new N;f.b=D(16);H(f,f.a,B(50));P(f,f.a,c,10);H(f,f.a,B(51));P(f,f.a,d,10);H(f,f.a,B(52));c=b.o;P(f,f.a,c,10);b=new L;g=f.b;d=f.a;O();h=D(d);b.e=h;K(g,0,h,0,d);e.c=1;e.d=1;e.f=b;G(e);}g=b.C;h=a.C;i=h.data;j=a.o;k=j+d|0;if(k<=i.length)b=h;else{l=8;if(l<=k)l=k;j=j*1.75|0;if(l>j)j=l;f=h.constructor;if(f===null)e=null;else{e=f.classObject;if(e===null){e=new CE;e.P=f;m=e;f.classObject=m;}}b=Eg(e);if(b===null){b=new Dm;b.c=1;b.d=1;C3(b);G(b);}if
(b===J($rt_voidcls())){b=new Bg;b.c=1;b.d=1;C3(b);G(b);}if(j<0){b=new DP;b.c=1;b.d=1;C3(b);G(b);}b=Et(b.P,j);e=b.data;l=a.o;n=e.length;if(l<n)n=l;ES(h,0,b,0,n);a.C=b;}ES(g,c,b,a.o,d);a.o=k;}
function UJ(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=a.C;f=e.data;g=a.o;h=g+d|0;if(h<=f.length)i=e;else{j=8;if(j<=h)j=h;g=g*1.75|0;if(j>g)g=j;i=e.constructor;if(i===null)k=null;else{k=i.classObject;if(k===null){k=new CE;k.P=i;l=k;i.classObject=l;}}k=Eg(k);if(k===null){k=new Dm;k.c=1;k.d=1;G(k);}if(k===J($rt_voidcls())){k=new Bg;k.c=1;k.d=1;G(k);}if(g<0){k=new DP;k.c=1;k.d=1;G(k);}i=Et(k.P,g);k=i.data;j=a.o;m=k.length;if(j<m)m=j;ES(e,0,i,0,m);a.C=i;}ES(b,c,i,a.o,d);a.o=h;}
function ADr(a,b){var c,d,e,f,g,h;if(b<a.o)return a.C.data[b];c=new Bh;d=new N;d.b=D(16);H(d,d.a,B(35));P(d,d.a,b,10);H(d,d.a,B(36));b=a.o;P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}
function Vx(a,b,c){var d,e,f;a:{d=a.C;if(!(!c&&b!==null)){e=0;f=a.o;while(e<f){if(d.data[e]===b){Re(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.o;while(true){if(e>=f)break a;if(BO(b,d.data[e])){Re(a,e);return 1;}e=e+1|0;}}}return 0;}
function Re(a,b){var c,d,e,f,g,h,i;c=a.o;if(b<c){d=a.C;e=d.data;f=e[b];g=c-1|0;a.o=g;if(!a.b2)e[b]=e[g];else K(d,b+1|0,d,b,g-b|0);e[a.o]=null;return f;}f=new Bh;h=new N;h.b=D(16);H(h,h.a,B(35));P(h,h.a,b,10);H(h,h.a,B(36));c=a.o;P(h,h.a,c,10);i=new L;e=h.b;b=h.a;O();d=D(b);i.e=d;K(e,0,d,0,b);f.c=1;f.d=1;f.f=i;G(f);}
function VJ(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.o;if(c>=d){e=new Bh;f=new N;f.b=D(16);H(f,f.a,B(53));P(f,f.a,c,10);H(f,f.a,B(36));g=a.o;P(f,f.a,g,10);h=new L;i=f.b;c=f.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}if(b>c){e=new Bh;h=new N;h.b=D(16);H(h,h.a,B(54));P(h,h.a,b,10);H(h,h.a,B(55));P(h,h.a,c,10);f=new L;i=h.b;c=h.a;O();j=D(c);f.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=f;G(e);}i=a.C;g=(c-b|0)+1|0;k=d-g|0;if(a.b2){c=b+g|0;K(i,c,i,b,d-c|0);}else{l=c+1|0;if(k>l)l=k;K(i,l,i,b,d-l|0);}l=k;while(l<d){i.data[l]
=null;l=l+1|0;}a.o=k;}
function Ne(a){var b,c,d,e;b=a.o;if(b){c=b-1|0;a.o=c;d=a.C.data;e=d[c];d[c]=null;return e;}e=new B2;e.c=1;e.d=1;e.f=B(41);G(e);}
function ADS(a){var b,c;b=a.o;if(b)return a.C.data[b-1|0];c=new B2;c.c=1;c.d=1;c.f=B(41);G(c);}
function AEo(a){var b;if(a.o)return a.C.data[0];b=new B2;b.c=1;b.d=1;b.f=B(41);G(b);}
function V_(a){var b,c,d,e,f,g;b=a.C;c=0;d=a.o;e=null;if(c>d){e=new Bg;e.c=1;e.d=1;G(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.o=0;}
function ACJ(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Bg;d=new N;d.b=D(16);H(d,d.a,B(56));P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}g=a.o;i=g+b|0;f=a.C;if(i>f.data.length){if(8>i)i=8;b=g*1.75|0;if(i>b)b=i;d=f.constructor;if(d===null)c=null;else{c=d.classObject;if(c===null){c=new CE;c.P=d;e=c;d.classObject=e;}}c=Eg(c);if(c===null){c=new Dm;c.c=1;c.d=1;G(c);}if(c===J($rt_voidcls())){c=new Bg;c.c=1;c.d=1;G(c);}if(b<0){c=new DP;c.c=1;c.d=1;G(c);}d=Et(c.P,b);c=d.data;i
=a.o;j=c.length;if(i<j)j=i;ES(f,0,d,0,j);a.C=d;}return a.C;}
function PF(a){var b;if(A4Y){b=new HI;b.el=1;b.jx=a;b.nM=1;return b;}if(a.pm===null){b=new NI;b.qL=a;b.sk=1;a.pm=b;}return Xs(a.pm);}
function Ng(a,b){var c,d,e,f,g,h,i;if(b>=0){c=a.o;if(c<=b)return;d=b;while(d<c){a.C.data[d]=null;d=d+1|0;}a.o=b;return;}e=new Bg;f=new N;f.b=D(16);H(f,f.a,B(57));P(f,f.a,b,10);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);e.c=1;e.d=1;e.f=g;G(e);}
function AGV(a){var b,c,d,e,f,g,h;if(a.b2){b=a.C;c=1;d=0;e=a.o;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.eP()|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=$rt_nextId();g.$id$=h;}return a.$id$;}
function ANp(a,b){var c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.b2)return 0;if(!(b instanceof CJ))return 0;c=b;if(!c.b2)return 0;d=a.o;if(d!=c.o)return 0;e=a.C;f=c.C;g=0;a:{while(g<d){b:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.ek(j))break b;else break a;}if(j!==null)break a;}g=g+1|0;}return 1;}return 0;}
function ATD(a){var b,c,d,e,f,g,h,i,j,k;if(!a.o)return B(58);b=a.C;c=new Jk;d=D(32);e=d.data;c.bD=d;f=c.bf;if(f==e.length)Dv(c,f+1|0);b=b.data;e=c.bD.data;g=c.bf;c.bf=g+1|0;e[g]=91;h=b[0];if(h===null)JU(c);else{h=h.r();if(h===null)JU(c);else{i=h.e.data.length;j=c.bf+i|0;if(j>c.bD.data.length)Dv(c,j);HK(h,0,i,c.bD,c.bf);c.bf=j;}}k=1;while(k<a.o){i=B(59).e.data.length;j=c.bf+i|0;if(j>c.bD.data.length)Dv(c,j);HK(B(59),0,i,c.bD,c.bf);c.bf=j;h=b[k];if(h===null)JU(c);else{h=h.r();if(h===null)JU(c);else{g=h.e.data.length;i
=c.bf+g|0;if(i>c.bD.data.length)Dv(c,i);HK(h,0,g,c.bD,c.bf);c.bf=i;}}k=k+1|0;}f=c.bf;if(f==c.bD.data.length)Dv(c,f+1|0);b=c.bD;e=b.data;g=c.bf;f=g+1|0;c.bf=f;e[g]=93;if(!f)c=B(43);else{c=new L;O();e=D(f);c.e=e;K(b,0,e,0,f);}return c;}
function Kf(){var a=this;C.call(a);a.hQ=0;a.fu=null;a.cZ=null;a.vl=0.0;a.sR=0;a.lN=0;a.lG=0;}
var A0k=null;function Fy(a,b){var c=new Kf();Zj(c,a,b);return c;}
function Zj(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.vl=c;d=Mf(b,c);a.sR=d*c|0;b=d-1|0;a.lG=b;a.lN=Fg(M(b));a.fu=Bt(C,d);a.cZ=Bt(C,d);return;}e=new Bg;f=new N;f.b=D(16);H(f,f.a,B(60));Ei(f,f.a,c);g=new L;h=f.b;d=f.a;O();i=D(d);g.e=i;K(h,0,i,0,d);e.c=1;e.d=1;e.f=g;G(e);}
function Df(a,b){var c,d,e;if(b===null){c=new Bg;c.c=1;c.d=1;c.f=B(61);G(c);}d=a.fu;e=V(Bc(Bb(M(b.eP()),F(2135587861, 2654435769)),a.lN));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.ek(b))break;e=(e+1|0)&a.lG;}return e;}
function BW(a,b,c){var d,e,f;d=Df(a,b);if(d>=0){e=a.cZ.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.fu.data;e[d]=b;a.cZ.data[d]=c;d=a.hQ+1|0;a.hQ=d;if(d>=a.sR)Vd(a,e.length<<1);return null;}
function UA(a,b){var c;c=Df(a,b);return c<0?null:a.cZ.data[c];}
function YQ(a,b){var c,d,e,f,g,h,i,j;c=Df(a,b);if(c<0)return null;d=a.fu;e=a.cZ.data;f=e[c];g=a.lG;h=(c+1|0)&g;while(true){i=d.data;b=i[h];if(b===null)break;j=V(Bc(Bb(M(b.eP()),F(2135587861, 2654435769)),a.lN));if(((h-j|0)&g)>((c-j|0)&g)){i[c]=b;e[c]=e[h];c=h;}h=(h+1|0)&g;}i[c]=null;e[c]=null;a.hQ=a.hQ-1|0;return f;}
function Vd(a,b){var c,d,e,f,g,h,i,j;a:{c=a.fu.data.length;a.sR=b*a.vl|0;d=b-1|0;a.lG=d;a.lN=Fg(M(d));e=a.fu;f=a.cZ;a.fu=Bt(C,b);a.cZ=Bt(C,b);if(a.hQ>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.fu;b=V(Bc(Bb(M(g.eP()),F(2135587861, 2654435769)),a.lN));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.lG;}j[b]=g;a.cZ.data[b]=h;}d=d+1|0;}}}}
function AJQ(){A0k=new C;}
var Xe=I(Kf);
var ADT=I();
function Em(){var a=this;C.call(a);a.fa=0;a.c5=0;a.dB=0;a.dw=0;a.fy=0;a.dp=null;a.fk=0;a.gH=0;}
function APh(a,b){if(!(b instanceof Em))return 0;return W5(a,b);}
function W5(a,b){return b!==null&&a.fa==b.fa&&a.c5==b.c5&&a.dw==b.dw&&a.dB==b.dB&&BO(a.dp,b.dp)&&a.fk==b.fk?1:0;}
function AJm(a){var b,c,d,e,f,g;a:{b=541*((541*((a.gH<<8)+(a.fk&255)|0)|0)+a.c5|0)|0;c=a.dp;if(!c.bQ){d=c.e.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];c.bQ=(31*c.bQ|0)+g|0;f=f+1|0;}}}return b+c.bQ|0;}
var AD1=I();
var Yj=I();
var ZW=I();
var Y0=I();
var PC=I();
var A4Z=null;function A40(){A40=Bi(PC);AM1();}
function AM1(){var b,c,d;b=new KB;AZH();c=new Be;BT();b.v6=c;d=new Be;b.wf=d;b.vv=new Be;b.wg=new Be;c.x=0.0;c.z=0.0;c.y=0.0;d.x=0.0;d.z=0.0;d.y=0.0;AAj(b,c,d);A4Z=b;}
var TU=I();
var Zl=I();
var YK=I();
var Y6=I();
var ACf=I();
var W2=I();
var AC$=I();
var X5=I();
var UK=I();
var Vk=I();
var Gx=I(BQ);
var A41=null;var A42=null;var A43=null;function AX8(){AX8=Bi(Gx);ALI();}
function ALI(){var b,c;b=new Gx;AX8();b.u=B(62);b.n=0;A41=b;c=new Gx;c.u=B(63);c.n=1;A42=c;A43=U(Gx,[b,c]);}
var Zp=I();
var Rc=I(0);
var DZ=I();
var T3=I(DZ);
var T2=I(DZ);
var Yu=I(DZ);
var VV=I(DZ);
var AAS=I(DZ);
var Lp=I(DZ);
var VP=I(Lp);
var H5=I(0);
var Wm=I();
var FV=I(0);
var AAL=I();
var AC7=I();
var U8=I();
var Fo=I();
var AAm=I(Fo);
var HZ=I(Fo);
var Ec=I(HZ);
var A44=null;function A45(){A45=Bi(Ec);AGu();}
function AGu(){var b;b=new Be;BT();A44=b;}
var AAF=I();
var ACe=I(Ec);
var Ye=I(Ec);
var SG=I(Fo);
var A0C=null;function AKz(){A0C=CU(3);}
var K2=I(Fo);
var TO=I(K2);
var VN=I(Ec);
var Hp=I(HZ);
var YW=I(Hp);
var Yc=I(Ec);
var Y9=I(Ec);
var YU=I(Hp);
var E_=I(BQ);
var A46=null;var A47=null;var A48=null;var A49=null;function AXp(){AXp=Bi(E_);APD();}
function APD(){var b,c,d;b=new E_;AXp();b.u=B(64);b.n=0;A46=b;c=new E_;c.u=B(65);c.n=1;A47=c;d=new E_;d.u=B(66);d.n=2;A48=d;A49=U(E_,[b,c,d]);}
var Gz=I();
var L1=I(Gz);
var Tb=I(L1);
var Fe=I(BQ);
var A4$=null;var A4_=null;var A5a=null;var A5b=null;function AXR(){AXR=Bi(Fe);AMm();}
function AMm(){var b,c,d;b=new Fe;AXR();b.u=B(67);b.n=0;A4$=b;c=new Fe;c.u=B(68);c.n=1;A4_=c;d=new Fe;d.u=B(69);d.n=2;A5a=d;A5b=U(Fe,[b,c,d]);}
var Dq=I(Gz);
var Iz=I(Dq);
var U4=I();
var Fp=I(Dq);
var A5c=null;var A5d=null;var A5e=null;var A5f=null;function A5g(){A5g=Bi(Fp);ANt();}
function ANt(){var b;b=new Be;BT();A5c=b;A5d=new Be;A5e=new Be;b=new E0;RB();b.h0=0.0;b.hX=0.0;b.hY=0.0;b.hZ=1.0;A5f=b;}
var E5=I(Fp);
var GD=I(E5);
var Wl=I(GD);
var Ia=I(Dq);
var AEi=I(Ia);
var ACd=I(Dq);
var Gb=I(Dq);
var TX=I(Gb);
var HG=I(Dq);
var Wi=I(E5);
var Xo=I(E5);
var KN=I(Dq);
var AAo=I(KN);
var Uy=I(Gb);
var Yi=I(GD);
var AAi=I(Dq);
var Zd=I(Gb);
var AAr=I(Dq);
var ABe=I(Fp);
var Xu=I(DJ);
var UQ=I(DJ);
var U0=I(E5);
var AAA=I(HG);
var ADv=I(Iz);
var ZL=I(Iz);
var AA4=I(HG);
var YF=I(GD);
var ADN=I(Ia);
var Fk=I(Gz);
var YY=I(Fk);
var Gi=I();
var AAK=I(Gi);
var ABs=I(Fk);
var ACc=I(Fk);
var ACK=I(Gi);
var V9=I(Fk);
var ACg=I(Gi);
var Kt=I(0);
var MQ=I(0);
function CE(){var a=this;C.call(a);a.bk=null;a.P=null;a.i$=null;}
var A5h=0;function A5i(a){var b=new CE();ASV(b,a);return b;}
function ASV(a,b){var c;a.P=b;c=a;b.classObject=c;}
function AYo(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new CE;c.P=b;d=c;b.classObject=d;}return c;}
function AN1(a){var b,c,d,e,f,g;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;b=new N;b.b=D(16);H(b,b.a,B(70));P(b,b.a,d,10);c=new L;e=b.b;f=b.a;O();g=D(f);c.e=g;K(e,0,g,0,f);return c;}
function Eg(a){var b,c,d;b=a.P.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new CE;c.P=b;d=c;b.classObject=d;}}return c;}
function ANb(){EN.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ZP(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AZA();AF2();return null;}}];E3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AKT(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes
:[E3],returnType:$rt_voidcls(),callable:function(obj,args){TT(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){AM3(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:L,callable:function(obj,args){return T9(obj);}}];D$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ADs(obj);return null;}},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[K7,IC],returnType:$rt_voidcls(),callable:function(obj,args){UE(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[K7,IC,Bx,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){AAY(obj,args[0],args[1],args[2],ATJ(args[3]),KA(args[4]),ALk(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[K7,IC,$rt_intcls(),$rt_intcls(),Bx,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),
L],returnType:$rt_voidcls(),callable:function(obj,args){ABD(obj,args[0],args[1],KA(args[2]),KA(args[3]),args[4],ATJ(args[5]),KA(args[6]),ALk(args[7]),args[8]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[K7,IC],returnType:$rt_voidcls(),callable:function(obj,args){A5j(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[K7,IC,Bx,$rt_floatcls(),$rt_intcls(),$rt_booleancls()],returnType:$rt_voidcls(),callable:function(obj,args){A5k(obj,args[0],
args[1],args[2],ATJ(args[3]),KA(args[4]),ALk(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[K7,IC,$rt_intcls(),$rt_intcls(),Bx,$rt_floatcls(),$rt_intcls(),$rt_booleancls(),L],returnType:$rt_voidcls(),callable:function(obj,args){I5(obj,args[0],args[1],KA(args[2]),KA(args[3]),args[4],ATJ(args[5]),KA(args[6]),ALk(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[Xa],returnType:$rt_voidcls(),callable:function(obj,args){VO(obj,args[0]);return null;}},
{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:function(obj,args){Zz(obj,ATJ(args[0]),KA(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Xa,E3,$rt_floatcls(),L],returnType:$rt_voidcls(),callable:function(obj,args){Uh(obj,args[0],args[1],ATJ(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Xa,E3,$rt_intcls()],returnType:E3,callable:function(obj,args){return AB1(obj
,args[0],args[1],KA(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[Xa,E3],returnType:$rt_voidcls(),callable:function(obj,args){L$(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[Mv,Xa],returnType:$rt_floatcls(),callable:function(obj,args){return A5l(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers:0,accessLevel:1,parameterTypes:[CJ,Xa],returnType:$rt_floatcls(),callable:function(obj,args){return A5m(obj,args[0],args[1]);}},
{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[IC,$rt_intcls(),$rt_intcls()],returnType:$rt_intcls(),callable:function(obj,args){return AAC(obj,args[0],KA(args[1]),KA(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:function(obj,args){ACD(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:L,callable:function(obj,args){return APY(obj);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes
:[],returnType:$rt_voidcls(),callable:function(obj,args){EU();AJg();return null;}}];}
function ME(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.P.$meta.primitive?1:0)&&!(a.P.$meta.item===null?0:1)){if(a.i$===null){if(!A5h){A5h=1;ANb();}b=a.P.$meta.methods;a.i$=Bt(H4,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof $rt_objcls())?e:e[A5n]===true?e:e.bb;if(BO($rt_str(f.name),B(71))){g=f.parameterTypes;h=Bt(CE,g.length);i=h.data;j=0;k=i.length;while(j<k){l=g[j];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new CE;e.P=l;m=e;l.classObject=m;}}i[j]=e;j=j+1|0;}i=a.i$.data;j
=c+1|0;e=new H4;g=$rt_str(f.name);k=f.modifiers;n=f.accessLevel;f=D4(f.callable,"call");e.e6=a;e.AV=g;e.ln=k;e.nt=n;e.gw=h;e.r_=f;i[c]=e;c=j;}d=d+1|0;}h=a.i$;e=h.constructor;if(e===null)g=null;else{g=e.classObject;if(g===null){g=new CE;g.P=e;b=g;e.classObject=b;}}e=Eg(g);if(e===null){e=new Dm;e.c=1;e.d=1;G(e);}if(e===J($rt_voidcls())){e=new Bg;e.c=1;e.d=1;G(e);}if(c<0){e=new DP;e.c=1;e.d=1;G(e);}h=h.data;f=Et(e.P,c);d=h.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=h[c];c=c+1|0;}a.i$=f;}return a.i$.cH();}return Bt(H4,
0);}
function ADC(a){var b,c,d,e,f,g,h,i,j,k;b=(ME(a)).data;c=b.length;d=Bt(H4,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(OO(h.ln,h.nt)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=Bw(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new CE;h.P=j;k=h;j.classObject=k;}}j=Eg(h);if(j===null){h=new Dm;h.c=1;h.d=1;G(h);}if(j===J($rt_voidcls())){h=new Bg;h.c=1;h.d=1;G(h);}if(f<0){h=new DP;h.c=1;h.d=1;G(h);}k=Et(j.P,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;}
function AB0(a,b){var c,d,e,f;c=(ME(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HP;f.c=1;f.d=1;G(f);}f=c[e];if(ABZ(f.gw.cH(),b))break;e=e+1|0;}return f;}
function ABX(a,b){var c,d,e,f,g;c=(ME(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new HP;f.c=1;f.d=1;G(f);}f=c[e];g=!(OO(f.ln,f.nt)&1)?0:1;if(g&&ABZ(f.gw.cH(),b))break;e=e+1|0;}return f;}
var Vn=I();
function AQY(b){var c,d,e,f,g;if(b===null)return null;c=BS(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof $rt_objcls())?g:g[A5n]===true?g:g.bb;e=e+1|0;}return c;}
function Cm(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function D4(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var UX=I();
function AFc(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function QM(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(QM(d[e],c))return 1;e=e+1|0;}return 0;}
function Gq(b){return setTimeout(function(){$rt_threadStarter(AWD)(b);},0);}
function AWD(b){b.fU();}
function RS(b,c){return setTimeout(function(){AWD(b);},c);}
function AM2(){return [];}
function DS(){var a=this;C.call(a);a.f=null;a.cY=null;a.c=0;a.d=0;a.Ad=null;}
function A5o(){var a=new DS();Dw(a);return a;}
function A5p(a){var b=new DS();J$(b,a);return b;}
function A5q(a,b){var c=new DS();PY(c,a,b);return c;}
function Dw(a){a.c=1;a.d=1;}
function J$(a,b){a.c=1;a.d=1;a.f=b;}
function PY(a,b,c){a.c=1;a.d=1;a.f=b;a.cY=c;}
function C3(a){return a;}
function AR3(a){return a.f;}
function AK9(a){return a.jR();}
function AR$(a){var b;b=a.cY;if(b===a)b=null;return b;}
function ALM(a){var b,c;if(A5r===null){b=new Dd;b.cI=A0H;c=new N;c.b=D(16);b.bs=c;b.cE=D(32);b.cO=0;Dc();b.cM=A5s;A5r=b;}Kc(a,A5r);}
function Kc(a,b){var c,d,e,f,g,h,i,j,k;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CE;d.P=c;e=d;c.classObject=e;}}if(d.bk===null)d.bk=$rt_str(d.P.$meta.name);e=d.bk;c=b.bs;H(c,c.a,e);C7(b);f=a.jR();if(f!==null){c=new N;c.b=D(16);H(c,c.a,B(72));H(c,c.a,f);e=new L;g=c.b;h=c.a;O();i=D(h);e.e=i;K(g,0,i,0,h);c=b.bs;H(c,c.a,e);C7(b);}a:{g=b.cE;g.data[0]=10;NF(b,g,0,1);g=a.Ad;if(g!==null){g=g.data;j=g.length;k=0;while(true){if(k>=j)break a;d=g[k];c=b.bs;H(c,c.a,B(73));C7(b);e=b.bs;H(e,
e.a,d===null?B(2):d.r());h=e.a;Bo(e,h,h+1|0);e.b.data[h]=10;C7(b);k=k+1|0;}}}c=a.cY;if(c!==null&&c!==a){e=b.bs;H(e,e.a,B(74));C7(b);Kc(a.cY,b);}}
var Db=I(DS);
function A5t(){var a=new Db();LU(a);return a;}
function LU(a){a.c=1;a.d=1;}
var BU=I(Db);
function AZL(a){var b=new BU();Sw(b,a);return b;}
function Sw(a,b){a.c=1;a.d=1;a.f=b;}
var X_=I(BU);
var IC=I(0);
function L(){var a=this;C.call(a);a.e=null;a.bQ=0;}
var A5u=null;var A36=null;var A5v=null;function O(){O=Bi(L);ATS();}
function AZJ(a){var b=new L();TS(b,a);return b;}
function AIc(a,b,c){var d=new L();S8(d,a,b,c);return d;}
function ATV(a,b,c){var d=new L();S_(d,a,b,c);return d;}
function TS(a,b){var c,d;O();c=b.data.length;d=D(c);a.e=d;K(b,0,d,0,c);}
function S8(a,b,c,d){var e;O();e=D(d);a.e=e;K(b,c,e,0,d);}
function S_(a,b,c,d){var e,f,g,h,i,j,k,l;O();e=D(d*2|0);f=e.data;a.e=e;g=0;h=0;while(h<d){e=b.data;i=c+1|0;j=e[c];if(j<65536){k=g+1|0;f[g]=j&65535;}else{l=g+1|0;f[g]=(55296|(j-65536|0)>>10&1023)&65535;k=l+1|0;f[l]=(56320|j&1023)&65535;}h=h+1|0;c=i;g=k;}c=f.length;d=Bw(g,c);if(d<0){b=D(g);if(d<0)c=g;e=b.data;d=0;while(d<c){e[d]=f[d];d=d+1|0;}a.e=b;}}
function C8(a,b){var c,d;if(b>=0){c=a.e.data;if(b<c.length)return c[b];}d=new Bd;d.c=1;d.d=1;G(d);}
function EO(a){return a.e.data.length;}
function HK(a,b,c,d,e){var f,g,h,i;if(b>=0&&b<=c){f=a.e;if(c<=f.data.length&&e>=0){g=d.data;h=c-b|0;if((e+h|0)<=g.length){K(f,b,d,e,h);return;}}}i=new Bh;i.c=1;i.d=1;G(i);}
function JH(a,b,c){var d,e,f,g,h,i,j;d=b.e.data;e=d.length;f=c+e|0;g=a.e.data;h=g.length;if(f>h)return 0;i=0;a:{b:{while(true){f=Bw(i,e);if(f>=0)break;if(i<0)break a;if(f>=0)break a;j=d[i];f=c+1|0;if(c<0)break b;if(c>=h)break b;if(j!=g[c])return 0;i=i+1|0;c=f;}return 1;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function FJ(a,b){if(a===b)return 1;return JH(a,b,0);}
function OU(a,b){var c,d,e,f,g,h,i,j;if(a===b)return 1;c=b.e.data;d=c.length;e=a.e.data;f=e.length;if(d>f)return 0;g=0;h=f-d|0;a:{b:{while(true){i=Bw(h,f);if(i>=0)break;if(h<0)break a;if(i>=0)break a;j=e[h];i=g+1|0;if(g<0)break b;if(g>=d)break b;if(j!=c[g])return 0;h=h+1|0;g=i;}return 1;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function EC(a,b,c){var d,e,f,g;if(0>c)c=0;if(b<65536){d=b&65535;while(true){e=a.e.data;if(c>=e.length)return (-1);if(e[c]==d)break;c=c+1|0;}return c;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){e=a.e.data;if(c>=(e.length-1|0))return (-1);if(e[c]==f&&e[c+1|0]==g)break;c=c+1|0;}return c;}
function V6(a,b){return EC(a,b,0);}
function F2(a,b,c){var d,e,f,g,h;d=a.e.data;e=d.length-1|0;if(c<e)e=c;if(b<65536){f=b&65535;while(true){if(e<0)return (-1);if(d[e]==f)break;e=e+(-1)|0;}return e;}g=(55296|(b-65536|0)>>10&1023)&65535;h=(56320|b&1023)&65535;while(true){if(e<1)return (-1);if(d[e]==h){b=e-1|0;if(d[b]==g)break;}e=e+(-1)|0;}return b;}
function KV(a,b,c){var d,e,f,g,h,i,j,k,l;if(0>c)c=0;d=a.e.data;e=d.length;f=b.e.data;g=f.length;h=e-g|0;a:{b:{c:while(true){if(c>h)return (-1);i=0;while(true){j=Bw(i,g);if(j>=0)break c;k=c+i|0;if(k<0)break a;if(k>=e)break a;l=d[k];if(i<0)break b;if(j>=0)break b;if(l!=f[i])break;i=i+1|0;}c=c+1|0;}return c;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function AAq(a,b){return KV(a,b,0);}
function OQ(a,b,c){var d,e,f,g,h,i,j,k;d=a.e.data;e=d.length;f=b.e.data;g=f.length;h=e-g|0;if(c<h)h=c;a:{b:{c:while(true){if(h<0)return (-1);i=0;while(true){j=Bw(i,g);if(j>=0)break c;k=h+i|0;if(k<0)break a;if(k>=e)break a;k=d[k];if(i<0)break b;if(j>=0)break b;if(k!=f[i])break;i=i+1|0;}h=h+(-1)|0;}return h;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function FZ(a,b,c){var d,e,f,g;d=Bw(b,c);if(d>0){e=new Bh;e.c=1;e.d=1;G(e);}if(!d){O();return A36;}if(!b&&c==a.e.data.length)return a;e=new L;f=a.e;c=c-b|0;O();g=D(c);e.e=g;K(f,b,g,0,c);return e;}
function HX(a,b){var c,d,e,f,g;c=a.e;d=c.data.length;e=Bw(b,d);if(e>0){f=new Bh;f.c=1;f.d=1;G(f);}if(!e){O();a=A36;}else if(!(!b&&d==d)){a=new L;e=d-b|0;O();g=D(e);a.e=g;K(c,b,g,0,e);}return a;}
function OZ(a,b,c){var d,e,f,g;d=Bw(b,c);if(d>0){e=new Bh;e.c=1;e.d=1;G(e);}if(!d){O();e=A36;}else if(!b&&c==a.e.data.length)e=a;else{e=new L;f=a.e;c=c-b|0;O();g=D(c);e.e=g;K(f,b,g,0,c);}return e;}
function Du(a,b){var c,d,e,f,g,h,i,j,k;c=a.e.data;d=c.length;e=b.e.data;f=e.length;g=d-f|0;h=0;a:{b:{while(h<=g){i=0;while(true){j=Bw(i,f);if(j>=0)return 1;k=h+i|0;if(k<0)break a;if(k>=d)break a;k=c[k];if(i<0)break b;if(j>=0)break b;if(k!=e[i])break;i=i+1|0;}h=h+1|0;}return 0;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function L5(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=new N;d.b=D(16);e=a.e.data.length-b.e.data.length|0;f=0;a:{b:{c:while(true){if(f>e){g=a.e;h=g.data.length;i=Bw(f,h);if(i>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!i){O();a=A36;}else if(!(!f&&h==h)){a=new L;i=h-f|0;O();j=D(i);a.e=j;K(g,f,j,0,i);}i=d.a;if(a===null)a=B(2);H(d,i,a);b=new L;j=d.b;h=d.a;O();g=D(h);b.e=g;K(j,0,g,0,h);return b;}k=0;d:{while(true){j=b.e.data;l=Bw(k,j.length);if(l>=0)break;i=f+k|0;if(i<0)break b;g=a.e.data;h=g.length;if(i>=h)break b;m=g[i];if(k<0)break c;if
(l>=0)break c;if(m!=j[k]){if(f<0)break a;if(f>=h)break a;h=g[f];i=d.a;Bo(d,i,i+1|0);d.b.data[i]=h;break d;}k=k+1|0;}H(d,d.a,c===null?B(2):c);f=f+(b.e.data.length-1|0)|0;}f=f+1|0;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function Yt(a){var b,c,d,e,f,g,h;b=0;c=a.e;d=c.data;e=d.length;f=e-1|0;a:{while(true){if(b>f)break a;if(b<0)break;if(b>=e)break;if(d[b]>32)break a;b=b+1|0;}g=new Bd;g.c=1;g.d=1;G(g);}b:{while(true){if(b>f)break b;if(f<0)break;if(f>=e)break;if(d[f]>32)break b;f=f+(-1)|0;}g=new Bd;g.c=1;g.d=1;G(g);}h=f+1|0;f=Bw(b,h);if(f>0){g=new Bh;g.c=1;g.d=1;G(g);}if(!f){O();a=A36;}else if(!(!b&&h==e)){a=new L;h=h-b|0;O();d=D(h);a.e=d;K(c,b,d,0,h);}return a;}
function Ea(a){return a;}
function BO(a,b){var c,d,e,f,g,h,i;if(a===b)return 1;if(!(b instanceof L))return 0;c=b.e.data;d=c.length;e=a.e.data;f=e.length;if(d!=f)return 0;g=0;a:{b:{while(true){h=Bw(g,d);if(h>=0)break;if(g<0)break a;if(g>=f)break a;i=e[g];if(g<0)break b;if(h>=0)break b;if(i!=c[g])return 0;g=g+1|0;}return 1;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function ZF(a,b){var c,d,e,f,g,h,i,j,$$je;if(b===null){b=new Bg;b.c=1;b.d=1;b.f=B(75);G(b);}El(b);AXU();c=A5w;d=ZB(b);if(d===null){c=c.c9.data[0];while(c!==null&&c.du!==null){c=c.dJ;}}else{a:{if(!d.bQ){e=d.e.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];d.bQ=(31*d.bQ|0)+h|0;g=g+1|0;}}}h=d.bQ;e=c.c9.data;c=e[h&(e.length-1|0)];while(c!==null){if(c.gy==h){i=c.du;if(d!==i&&!BO(d,i)?0:1)break;}c=c.dJ;}}c=c===null?null:c.ev;if(c===null){c=new PD;c.c=1;c.d=1;c.B8=b;G(c);}e=a.e;g=e.data.length;b=new Jd;j=0
+g|0;b.B=(-1);b.J=g;b.g=g;b.h=0;b.g=j;b.h$=0;b.jG=0;b.hJ=e;b:{try{d=c.lM();Er();b=ON(SF(P7(d,A5x),A5x),b);break b;}catch($$e){$$je=BJ($$e);if($$je instanceof Gy){c=$$je;}else{throw $$e;}}d=new Mr;d.c=1;d.d=1;d.f=B(76);d.cY=c;G(d);}h=b.h;if(!h&&b.g==b.J)e=b.bl;else{e=BS(b.g-h|0);Ot(b,e,0,e.data.length);}return e;}
function APT(a){var b,c,d,e;a:{if(!a.bQ){b=a.e.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.bQ=(31*a.bQ|0)+e|0;d=d+1|0;}}}return a.bQ;}
function Vw(a){var b,c,d,e,f,g,h;b=a.e.data;c=b.length;if(c?0:1)return a;d=0;e=0;f=0;a:{while(f<c){g=b[f];if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}if((B$(A5y,g)&65535)!=g){d=1;break a;}h=g&64512;g=h!=55296?0:1;if(!g&&!(h!=56320?0:1)?0:1)e=1;f=f+1|0;}}if(!d)return a;return !e?U9(a):UY(a);}
function U9(a){var b,c,d,e,f,g;b=D(a.e.data.length);c=b.data;d=0;while(true){e=a.e.data;if(d>=e.length)break;f=e[d];if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}c[d]=B$(A5y,f)&65535;d=d+1|0;}g=new L;O();f=c.length;c=D(f);g.e=c;K(b,0,c,0,f);return g;}
function UY(a){var b,c,d,e,f,g,h;b=Y(a.e.data.length);c=b.data;d=0;e=0;while(true){f=a.e.data;g=f.length;if(e>=g)break;a:{if(e!=(g-1|0)&&((f[e]&64512)!=55296?0:1)){g=e+1|0;if((f[g]&64512)!=56320?0:1){h=d+1|0;e=((f[e]&1023)<<10|f[g]&1023)+65536|0;if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}c[d]=B$(A5y,e);d=h;break a;}}h=d+1|0;g=f[e];if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}c[d]=B$(A5y,g)&65535;d=h;g=e;}e=g+
1|0;}return ATV(b,0,d);}
function ZB(a){var b,c,d,e,f,g,h;b=a.e.data;c=b.length;if(c?0:1)return a;d=0;e=0;f=0;a:{while(f<c){g=b[f];if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}if((B$(A5A,g)&65535)!=g){d=1;break a;}h=g&64512;g=h!=55296?0:1;if(!g&&!(h!=56320?0:1)?0:1)e=1;f=f+1|0;}}if(!d)return a;return !e?W6(a):Vq(a);}
function W6(a){var b,c,d,e,f,g;b=D(a.e.data.length);c=b.data;d=0;while(true){e=a.e.data;if(d>=e.length)break;f=e[d];if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}c[d]=B$(A5A,f)&65535;d=d+1|0;}g=new L;O();f=c.length;c=D(f);g.e=c;K(b,0,c,0,f);return g;}
function Vq(a){var b,c,d,e,f,g,h;b=Y(a.e.data.length);c=b.data;d=0;e=0;while(true){f=a.e.data;g=f.length;if(e>=g)break;a:{if(e!=(g-1|0)&&((f[e]&64512)!=55296?0:1)){g=e+1|0;if((f[g]&64512)!=56320?0:1){h=d+1|0;e=((f[e]&1023)<<10|f[g]&1023)+65536|0;if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}c[d]=B$(A5A,e);d=h;break a;}}h=d+1|0;g=f[e];if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}c[d]=B$(A5A,g)&65535;d=h;g=e;}e=g+
1|0;}return ATV(b,0,d);}
function YE(a,b){return IQ(GQ(b,0),a,0);}
function Sm(a,b,c){return IQ(GQ(b,0),a,c);}
function Wg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;b=O3(GQ(b,0),a);d=new KM;d.b=D(16);b.m_=0;e=b.i8;f=e.e.data.length;b.na=f;g=b.dI;g.dG=0;g.jr=2;h=g.ca.data;i=0;j=h.length;if(i>j){b=new Bg;Dw(b);G(b);}while(i<j){k=i+1|0;h[i]=(-1);i=k;}h=g.bP.data;l=0;i=h.length;if(l>i){b=new Bg;Dw(b);G(b);}while(l<i){j=l+1|0;h[l]=(-1);l=j;}g.hK=e;g.dt=0;g.bi=f;g.fl=0;b.np=0;b.pC=null;g.ju=(-1);while(true){if(!HO(b)){c=b.i8;k=b.np;m=c.e;l=m.data.length;n=Bw(k,l);if(n>0){b=new Bh;b.c=1;b.d=1;C3(b);G(b);}if(!n){O();c=A36;}else if(!(!k
&&l==l)){c=new L;n=l-k|0;O();h=D(n);c.e=h;K(m,k,h,0,n);}l=c.e.data.length;Qf(d,d.a,c,0,l);b=new L;h=d.b;n=d.a;O();m=D(n);b.e=m;K(h,0,m,0,n);return b;}b.p3=AAz(b,c);e=b.i8;i=b.np;g=b.dI;if(!g.dG)break;if(0>=g.er){b=new Bh;O();c=new N;IW(c);IV(c,0);d=new L;h=c.b;n=c.a;m=D(n);d.e=m;K(h,0,m,0,n);b.c=1;b.d=1;b.f=d;G(b);}l=g.ca.data[0];k=Bw(i,l);if(k>0){b=new Bh;b.c=1;b.d=1;C3(b);G(b);}if(!k){O();g=A36;}else if(!i&&l==e.e.data.length)g=e;else{g=new L;h=e.e;k=l-i|0;O();m=D(k);g.e=m;K(h,i,m,0,k);}i=g.e.data.length;Qf(d,
d.a,g,0,i);e=b.p3;H(d,d.a,e);e=b.dI;Ym(e,0);b.np=e.ca.data[1];}b=new B2;LU(b);G(b);}
function ATS(){var b,c;b=D(0);A5u=b;c=new L;O();c.e=b;A36=c;A5v=new RI;}
var Gf=I(DS);
var IK=I(Gf);
var Xh=I(IK);
var Ex=I();
function E6(){Ex.call(this);this.eZ=0;}
var A0l=null;var A1X=null;function KS(b,c){var d;if(!(c>=2&&c<=36))c=10;d=new Bq;d.b=D(20);return (P(d,d.a,b,c)).r();}
function KG(b,c){if(b!==null)return Su(b,0,b.e.data.length,c);b=new CG;b.c=1;b.d=1;b.f=B(77);G(b);}
function Su(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=Bw(c,d);if(!f){b=new CG;b.c=1;b.d=1;b.f=B(78);G(b);}if(e>=2&&e<=36){g=0;if(c>=0){h=b.e.data;if(c<h.length){a:{switch(h[c]){case 43:i=c+1|0;break a;case 45:g=1;i=c+1|0;break a;default:}i=c;}j=0;if(i==d){b=new CG;b.c=1;b.d=1;G(b);}b:{while(i<d){k=i+1|0;if(i<0)break b;h=b.e.data;if(i>=h.length)break b;l=IZ(h[i]);if(l<0){m=new CG;if(f>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!f){O();n=A36;}else if(!c&&d==b.e.data.length)n=b;else{n=new L;h=b.e;d=d-c|0;O();o=D(d);n.e=o;K(h,
c,o,0,d);}b=new N;b.b=D(16);H(b,b.a,B(79));c=b.a;if(n===null)n=B(2);H(b,c,n);p=new L;h=b.b;d=b.a;O();o=D(d);p.e=o;K(h,0,o,0,d);m.c=1;m.d=1;m.f=p;G(m);}if(l>=e){m=new CG;q=FZ(b,c,d);b=new N;b.b=D(16);H(b,b.a,B(80));DK(DK(FQ(b,e),B(72)),q);Jn(m,C$(b));G(m);}j=B3(e,j)+l|0;if(j<0){if(k==d&&j==(-2147483648)&&g)return (-2147483648);m=new CG;b=OZ(b,c,d);p=FU();DK(DK(p,B(81)),b);Jn(m,C$(p));G(m);}i=k;}if(g)j= -j|0;return j;}b=new Bd;b.c=1;b.d=1;G(b);}}b=new Bd;b.c=1;b.d=1;G(b);}b=new CG;m=new N;m.b=D(16);H(m,m.a,B(82));P(m,
m.a,e,10);p=new L;h=m.b;d=m.a;O();o=D(d);p.e=o;K(h,0,o,0,d);b.c=1;b.d=1;b.f=p;G(b);}
function C1(b){if(b!==null)return Su(b,0,b.e.data.length,10);b=new CG;b.c=1;b.d=1;b.f=B(77);G(b);}
function Cg(b){var c;if(b>=(-128)&&b<=127){FA();return A1X.data[b+128|0];}c=new E6;c.eZ=b;return c;}
function FA(){var b,c,d,e,f;a:{if(A1X===null){b=Bt(E6,256);c=b.data;A1X=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new E6;f.eZ=d-128|0;c[d]=f;d=d+1|0;}}}}
function KA(a){return a.eZ;}
function GX(a){return M(a.eZ);}
function Ko(a){return a.eZ;}
function AUB(a){var b,c;b=a.eZ;c=new Bq;c.b=D(20);return (P(c,c.a,b,10)).r();}
function CV(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function ED(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function ASK(){A0l=J($rt_intcls());}
function Bq(){var a=this;C.call(a);a.b=null;a.a=0;}
function A5C(){var a=new Bq();IW(a);return a;}
function A5D(a){var b=new Bq();IP(b,a);return b;}
function IW(a){a.b=D(16);}
function IP(a,b){a.b=D(b);}
function Je(a,b){H(a,a.a,b===null?B(2):b.r());return a;}
function QZ(a,b){return a.r7(a.a,b);}
function H(a,b,c){var d,e,f,g,h,i;if(b>=0){d=a.a;if(b<=d){if(c===null)c=B(2);else if(c.e.data.length?0:1)return a;a.jF(d+c.e.data.length|0);d=a.a;e=d-1|0;while(e>=b){f=a.b.data;f[e+c.e.data.length|0]=f[e];e=e+(-1)|0;}f=c.e.data;g=f.length;a.a=d+g|0;d=0;a:{while(true){e=Bw(d,g);if(e>=0)break;h=a.b;i=b+1|0;if(d<0)break a;if(e>=0)break a;h.data[b]=f[d];d=d+1|0;b=i;}return a;}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}
function IV(a,b){return P(a,a.a,b,10);}
function P(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=IH(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=B3(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)e=b;else{f=a.b.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.b.data;b=e+1|0;f[e]=IH($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function Qi(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(F9(c,R)){e=0;c=G4(c);}a:{f=M(d);if(EB(c,f)<0){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=IH(V(c),d);}else{i=1;j=M(1);k=En(M(-1),f);b:{while(true){l=Bb(j,f);if(EB(l,c)>0){l=j;break b;}i=i+1|0;if(EB(l,k)>0)break;j=l;}}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)e=b;else{g=a.b.data;e=b+1|0;g[b]=45;}while(true){if(Dl(l,R))break a;g=a.b.data;b=e+1|0;g[e]=IH(V((En(c,l))),d);c=T8(c,l);l=En(l,f);e=b;}}}return a;}
function Ei(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bw(c,0.0);if(!d){if(1.0/c===Infinity){Bo(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bo(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bo(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bo(a,b,b+8|0);d=b;}else{Bo(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A5E;Zx(c,f);d=f.qp;g=f.pZ;h=f.tI;i=1;j=1;if(h)j=2;k=9;l=ATa(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Jf(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bo(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.b.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.b.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.b.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.b.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function OC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bw(c,0.0);if(!d){if(1.0/c===Infinity){Bo(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bo(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bo(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bo(a,b,b+8|0);d=b;}else{Bo(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A5F;XO(c,f);g=f.rd;h=f.py;i=f.tl;j=1;k=1;if(i)k=2;l=18;m=AQX(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Jf(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bo(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.b.data;k=b+1|0;e[b]=45;}p=F(1569325056, 23283064);if(o){e=a.b.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(F$(p,R))d=0;else{d=V(C5(g,p));g=Dk(g,p);}e=a.b.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=C5(p,M(10));q=q+1|0;}if(h){e=a.b.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ATa(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQX(b){var c,d,e,f,g;c=M(1);d=0;e=16;f=A5G.data;g=f.length-1|0;while(g>=0){if(Dl(Dk(b,Bb(c,f[g])),R)){d=d|e;c=Bb(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Gg(a,b){return a.si(a.a,b);}
function ADI(a,b,c){Bo(a,b,b+1|0);a.b.data[b]=c;return a;}
function FG(a,b,c){H(a,b,c===null?B(2):c.r());return a;}
function ND(a,b){var c,d,e,f,g,h;c=a.b.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=D(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.b=g;}
function LD(a){var b,c,d,e;b=new L;c=a.b;d=a.a;O();e=D(d);b.e=e;K(c,0,e,0,d);return b;}
function Zv(a,b,c,d,e){var f,g,h;if(d<=e&&e<=c.e.data.length&&d>=0){Bo(a,b,(b+e|0)-d|0);a:{while(d<e){f=a.b;g=b+1|0;if(d<0)break a;h=c.e.data;if(d>=h.length)break a;f.data[b]=h[d];d=d+1|0;b=g;}return a;}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bh;c.c=1;c.d=1;G(c);}
function Kq(a,b,c,d,e){var f,g,h,i;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Sg(a,b){var c,d,e,f;if(b>=0){c=a.a;if(b<c){c=c-1|0;a.a=c;while(b<c){d=a.b.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Bd;f.c=1;f.d=1;G(f);}
function ADm(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Bw(b,c);if(d<=0){e=a.a;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.a=e-(c-b|0)|0;g=0;while(g<f){h=a.b.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Bd;i.c=1;i.d=1;G(i);}
function Bo(a,b,c){var d,e,f,g;d=a.a;e=d-b|0;a.jF((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.b.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.a=a.a+(c-b|0)|0;}
var HS=I(0);
var N=I(Bq);
function FU(){var a=new N();AU6(a);return a;}
function AU6(a){a.b=D(16);}
function DK(a,b){H(a,a.a,b===null?B(2):b.r());return a;}
function B7(a,b){H(a,a.a,b);return a;}
function FQ(a,b){P(a,a.a,b,10);return a;}
function W4(a,b){Qi(a,a.a,b,10);return a;}
function DQ(a,b){var c;c=a.a;Bo(a,c,c+1|0);a.b.data[c]=b;return a;}
function ADV(a,b,c){H(a,b,c===null?B(2):c.r());return a;}
function If(a,b,c){Bo(a,b,b+1|0);a.b.data[b]=c;return a;}
function ADk(a,b,c){ADm(a,b,c);return a;}
function Gh(a,b,c){H(a,b,c);return a;}
function H6(a,b){a.a=b;}
function ABk(a,b,c){var d,e,f;if(b<=c&&b>=0&&c<=a.a){d=new L;e=a.b;c=c-b|0;O();f=D(c);d.e=f;K(e,b,f,0,c);return d;}d=new Bh;d.c=1;d.d=1;G(d);}
function AM_(a,b,c,d,e){var f,g,h,i;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AJE(a,b,c,d){var e,f,g,h,i;e=a.a;Bo(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.b.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
function C9(a){return a.a;}
function C$(a){var b,c,d,e;b=new L;c=a.b;d=a.a;O();e=D(d);b.e=e;K(c,0,e,0,d);return b;}
function ANn(a,b){ND(a,b);}
function AOd(a,b,c){Bo(a,b,b+1|0);a.b.data[b]=c;return a;}
function DY(a,b,c){H(a,b,c);return a;}
var Ir=I(IK);
var AAc=I(Ir);
function A5H(a){var b=new AAc();AHV(b,a);return b;}
function AHV(a,b){a.c=1;a.d=1;a.f=b;}
var WR=I(Ir);
function A5I(a){var b=new WR();AIq(b,a);return b;}
function AIq(a,b){a.c=1;a.d=1;a.f=b;}
function Xc(){var a=this;C.call(a);a.sK=0;a.ye=0;a.rK=0;a.t4=null;a.x0=0;a.yi=null;a.s$=0;a.yE=null;a.mE=0;a.iL=0;a.p1=0;a.sQ=0;a.vd=0;a.uw=0;a.w4=0;a.vX=0;a.wb=0;a.sn=0;a.n0=0;}
function AZD(a){var b=new Xc();AGp(b,a);return b;}
function ABi(a){return !a.mE&&!a.iL?1:0;}
function AGp(a,b){a.sK=0;a.ye=1;a.rK=0;a.x0=1;a.yi=B(43);a.s$=0;a.mE=(-1);a.iL=(-1);a.p1=0;a.sQ=0;a.vd=0;a.uw=0;a.w4=0;a.vX=0;a.wb=0;a.sn=0;a.n0=1;a.yE=b;}
var Om=I(0);
function Le(){var a=this;C.call(a);a.fq=null;a.k3=null;a.va=null;a.v7=null;a.B3=null;a.ey=null;a.mW=null;a.m8=null;a.mq=null;a.gz=null;a.jz=null;a.pf=0;a.sq=0;a.zn=null;a.ji=0;a.mx=null;a.Aa=null;a.zA=null;a.lD=null;a.sT=null;a.g6=null;}
var A5J=null;function A5K(a,b){var c=new Le();VD(c,a,b);return c;}
function VD(a,b,c){var d;d=new CJ;d.b2=1;d.C=Bt(C,4);a.mq=d;I$();a.jz=A5L;a.pf=(-1);a.sq=1;a.ji=1;a.Aa=Fy(51,0.800000011920929);d=new CJ;d.b2=1;d.C=Bt(C,16);a.lD=d;d=new CJ;d.b2=1;d.C=Bt(C,16);a.sT=d;Jb();a.gz=A5M;a.ey=c;a.mW=b;ABI(a);}
function ABI(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;A5J=AO9();KY();Ek(A5N,B(83),B(43));b=$rt_str(A5J.userAgent);KY();Ek(A5N,B(84),b);if(A5J.windows?1:0){KY();Ek(A5N,B(85),B(86));}else if(A5J.macOS?1:0)Rf(B(85),B(87));else if(!(A5J.linux?1:0))Rf(B(85),B(88));else Rf(B(85),B(7));c=new Nz;d=a.ey.s$;c.xe=0;c.yx=0;c.dK=1;c.dK=d;A5O=c;Jb();b=$rt_str(A5M.ez.location.href);a.g6=b;if(Du(b,B(89))){c=L5(a.g6,B(90),B(43));a.g6=c;a.g6=L5(c,B(91),B(43));}e=EC(a.g6,63,0);if(e>=0)a.g6=FZ(a.g6,0,e);c=a.ey;A5P=c.ye;b=AYE(c);a.fq=b;c
=AYe(a.g6,b.I,a);a.mx=c;d=a.ey.x0;f=A5O;g=c.nc;h=new N;h.b=D(16);i=h.a;if(g===null)g=B(2);H(h,i,g);H(h,h.a,B(92));j=new L;k=h.b;l=h.a;m=D(l);j.e=m;K(k,0,m,0,l);g=new N;g.b=D(16);H(g,g.a,j);H(g,g.a,B(93));h=new L;m=g.b;n=g.a;k=D(n);h.e=k;K(m,0,k,0,n);TR(f,1,h,AXS(c,B(93),d));a.k3=AWN(a.fq.I);a.va=AWY(a.mx);a.v7=AXy();a.zn=AWC();a.zA=AYg();if(a.ey.rK)YZ(a);A4c=a;c=a.fq;A4P=c;A3_=Q_(c);A4R=Q_(a.fq);A5Q=Ud(a.fq);A5R=a.k3;A39=a.va;A5S=a.v7;c=AZz();a.B3=c;A5T=c;c=Xg(a.gz);g=AYU(a);c.addEventListener("visibilitychange",
Cm(g,"handleEvent"));ACj(a.gz,a);if(ABi(a.ey))Vj(a.gz,B(94),AWU(a));}
function XI(a){var b,c,d,e,f,g,h,$$je;b=a.jz;a:{try{b:{AYq();switch(A5U.data[ACi(b)]){case 1:c=XR(AE5());if(!c){I$();a.jz=A5V;d=$rt_globals.window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.mx.qS;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=$rt_globals.window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=FU();DQ(FQ(g,f),37);h=C$(g);d.setProperty("width",$rt_ustr(h));}}break b;case 2:break;default:break b;}if(a.mW!==null){b=a.m8;if(b!==null)
{Zm(b);AAp(a.m8);}V5(a.k3,null);PE(a.k3);V_(a.lD);a.m8=a.mW;a.mW=null;I$();a.jz=A5W;a.fq.oA=R;}T5(a,a.m8);}}catch($$e){$$je=BJ($$e);if($$je instanceof DS){h=$$je;break a;}else{throw $$e;}}b=a.gz;b.mM=a;$rt_globals.requestAnimationFrame(Cm(b,"onAnimationFrame"));return;}if(A5r===null){d=new Dd;d.cI=A0H;b=new N;b.b=D(16);d.bs=b;d.cE=D(32);d.cO=0;Dc();d.cM=A5s;A5r=d;}Kc(h,A5r);G(h);}
function T5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;Vt(a.fq);c=A4P.I.width;d=A4P.I.height;e=0;f=a.jz;I$();if(f===A5W){a.jz=A5V;ACM(b);e=1;}if(!(c==a.pf&&d==a.sq&&!e)){a.pf=c;a.sq=d;A3_.j5(0,0,c,d);g=b.q;if(g!==null)g.D(c,d);}g=a.sT;f=a.lD;h=f.C;d=f.o;i=g.C;j=i.data;k=g.o;c=k+d|0;if(c<=j.length)l=i;else{m=8;if(m<=c)m=c;k=k*1.75|0;if(m>k)k=m;l=i.constructor;if(l===null)f=null;else{f=l.classObject;if(f===null){f=new CE;f.P=l;n=f;l.classObject=n;}}l=f.P.$meta.item;if(l===null)n=null;else{n=l.classObject;if(n===null)
{n=new CE;n.P=l;o=n;l.classObject=o;}}if(n===null){b=new Dm;Dw(b);G(b);}if(n===J($rt_voidcls())){b=new Bg;Dw(b);G(b);}if(k<0){b=new DP;Dw(b);G(b);}l=Et(n.P,k);f=l.data;e=g.o;k=f.length;if(e<k)k=e;ES(i,0,l,0,k);g.C=l;}ES(h,0,l,g.o,d);g.o=c;g=a.lD;h=g.C;e=0;p=g.o;f=null;if(e>p){b=new Bg;b.c=1;b.d=1;G(b);}while(e<p){i=h.data;d=e+1|0;i[e]=f;e=d;}g.o=0;p=0;while(true){g=a.sT;e=g.o;d=Bw(p,e);if(d>=0){h=g.C;p=0;f=null;if(p>e){b=new Bg;b.c=1;b.d=1;G(b);}while(p<e){i=h.data;d=p+1|0;i[p]=f;p=d;}g.o=0;g=a.fq;q=Z(g.oA,
M(1));g.oA=q;if(VL(q,M(60)))XU(b);PE(a.k3);return;}if(d>=0)break;g.C.data[p].fU();p=p+1|0;}f=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,p,10);H(b,b.a,B(36));IV(b,g.o);XC(f,LD(b));G(f);}
function YZ(a){var b,c,d,e,f,g,h,i,j;b=a.mx;c=new M5;c.y2=a;d=A5O;b=b.nc;e=new N;e.b=D(16);f=e.a;if(b===null)b=B(2);H(e,f,b);H(e,e.a,B(92));b=new L;g=e.b;h=e.a;O();i=D(h);b.e=i;K(g,0,i,0,h);e=new N;e.b=D(16);H(e,e.a,b);H(e,e.a,B(95));j=new L;g=e.b;h=e.a;i=D(h);j.e=i;K(g,0,i,0,h);MD(d,1,j,c);}
var Ss=I(0);
function LJ(){C.call(this);this.q=null;}
function AAp(a){}
function Zm(a){}
function XU(a){var b;b=a.q;if(b!==null)b.b9(A4P.q$);}
function ADq(a,b){a.q=b;if(b!==null){b.E();a.q.D(A4P.I.width,A4P.I.height);}}
function Qs(){var a=this;LJ.call(a);a.bc=null;a.s=0;a.bY=null;a.bW=null;}
function ACM(a){var b,c,d,e,f,g,h;A4c.ji=1;b=new K7;c=A39;d=new JW;e=c.ox;LG();K4(d,e,B(96),A3$);W0(b,AWB(d,0),null,1);a.bY=b;E4();c=A4k;f=b.jM.ss;f.cr=c.cr;f.cq=c.cq;f.cp=c.cp;f.co=c.co;c=new Me;ABY();Oa(c,1000,null);a.bW=c;g=Bt(Lf,30);h=g.data;c=new Po;c.ic=CF(512);c.g5=R;c.kt=a;h[0]=c;c=new P1;c.hz=CF(512);c.gd=R;c.l4=a;h[1]=c;c=new Q7;c.hj=CF(512);c.f$=R;c.k8=a;h[2]=c;c=new Nf;c.h6=CF(512);c.f6=R;c.jN=a;h[3]=c;c=new OS;c.hG=CF(512);c.gY=R;c.kR=a;h[4]=c;c=new S1;c.ii=CF(512);c.gc=R;c.jW=a;h[5]=c;c=new MN;c.g$
=CF(512);c.fW=R;c.k4=a;h[6]=c;h[7]=AWs(a);h[8]=AYW(a);h[9]=AYr(a);h[10]=AXk(a);h[11]=AWn(a);h[12]=AXG(a);h[13]=AZF(a);h[14]=AXJ(a);h[15]=AWW(a);h[16]=AZt(a);h[17]=AYd(a);h[18]=AW4(a);h[19]=AYK(a);h[20]=AYf(a);h[21]=AYb(a);h[22]=AWv(a);h[23]=AW5(a);h[24]=AWG(a);h[25]=AXA(a);h[26]=AYS(a);h[27]=AXq(a);h[28]=AZy(a);h[29]=AXa(a);a.bc=g;a.s=0;ADq(a,h[0]);}
var JD=I();
var A5X=null;var A5r=null;var A5N=null;function ES(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LT(b)&&(e+f|0)<=LT(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CE;h.P=g;i=h;g.classObject=i;}}j=Eg(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CE;h.P=g;i=h;g.classObject=i;}}i=Eg(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.P.$meta.primitive?1:0)&&!(i.P.$meta.primitive?1:0)){k=b;l=0;m
=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p=i.P;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&QM(g.constructor,p)?1:0)){Lo(b,c,d,e,l);b=new J2;b.c=1;b.d=1;G(b);}l=l+1|0;m=o;}Lo(b,c,d,e,f);return;}if(!(j.P.$meta.primitive?1:0))break a;if(i.P.$meta.primitive?1:0)break b;else break a;}b=new J2;b.c=1;b.d=1;G(b);}}Lo(b,c,d,e,f);return;}b=new J2;b.c=1;b.d=1;G(b);}b=new Bh;b.c=1;b.d=1;G(b);}d=new Dm;d.c=1;d.d=1;d.f=B(97);G(d);}
function K(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LT(b)&&(e+f|0)<=LT(d)){Lo(b,c,d,e,f);return;}b=new Bh;b.c=1;b.d=1;G(b);}
function Lo(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fr(){return Long_fromNumber(new Date().getTime());}
function KY(){var b,c;if(A5N===null){b=new LY;KO(b,11);Ek(b,B(98),B(99));Ek(b,B(85),B(100));Ek(b,B(101),B(102));Ek(b,B(103),B(104));Ek(b,B(105),B(106));Ek(b,B(107),B(108));Ek(b,B(109),B(99));Ek(b,B(110),B(102));c=new LY;KO(c,11);c.C6=b;A5N=c;}}
function Rf(b,c){KY();return Ek(A5N,b,c);}
var ABC=I();
function Bv(b,c){var d,e,f,g,h,i,j,k,l;if(!b)return B(45);d=1<<c;e=d-1|0;f=(((32-CV(b)|0)+c|0)-1|0)/c|0;g=D(f);h=g.data;i=B3(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=IH((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new L;O();c=h.length;h=D(c);l.e=h;K(g,0,h,0,c);return l;}
var Fu=I(BQ);
var A5L=null;var A5W=null;var A5V=null;var A5Y=null;function I$(){I$=Bi(Fu);ANZ();}
function ANZ(){var b,c,d;b=new Fu;I$();b.u=B(111);b.n=0;A5L=b;c=new Fu;c.u=B(112);c.n=1;A5W=c;d=new Fu;d.u=B(113);d.n=2;A5V=d;A5Y=U(Fu,[b,c,d]);}
var M9=I(0);
var CN=I(0);
var PB=I(0);
function LH(){var a=this;C.call(a);a.ez=null;a.mM=null;}
var A5M=null;function Jb(){Jb=Bi(LH);ALc();}
function Xg(a){return a.ez.document;}
function ACj(a,b){a.mM=b;$rt_globals.requestAnimationFrame(Cm(a,"onAnimationFrame"));}
function Vj(a,b,c){var d;d=D4(c,"handleEvent");a.ez.addEventListener($rt_ustr(b),Cm(d,"handleEvent"));}
function ALc(){var b;b=new LH;Jb();b.ez=$rt_globals.window;A5M=b;}
function AQC(a,b){var c;b;c=a.mM;a.mM=null;XI(c);}
var AAt=I();
var Ph=I();
var A1M=null;function O4(){O4=Bi(Ph);APB();}
function ZS(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;O4();if(b===null){d=new Bg;d.c=1;d.d=1;d.f=B(34);G(d);}d=null;e=0;f=b.o;while(e<f){if(e>=b.o){g=new Bh;d=new N;d.b=D(16);H(d,d.a,B(35));P(d,d.a,e,10);H(d,d.a,B(36));c=b.o;P(d,d.a,c,10);b=new L;h=d.b;e=d.a;O();i=D(e);b.e=i;K(h,0,i,0,e);g.c=1;g.d=1;g.f=b;G(g);}a:{g=b.C.data[e];if(g!==null){if(d===null){d=A1M;j=g.constructor;if(j===null)k=null;else{k=j.classObject;if(k===null){k=new CE;k.P=j;l=k;j.classObject=l;}}m=Df(d,k);d=m<0?null:d.cZ.data[m];if(d===null)break a;}k
=d.dH;if(k.o<d.gx){Dh(k,g);n=d.jl;o=d.dH.o;if(n>o)o=n;d.jl=o;if(EY(g,DR))g.ga();}else if(EY(g,DR))g.ga();if(!c)d=null;}}e=e+1|0;}}
function APB(){A1M=Fy(51,0.800000011920929);}
function J9(){Ex.call(this);this.o7=0.0;}
var A0g=null;function ATJ(a){return a.o7;}
function Gn(b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.e.data;d=c.length;if(d?0:1){b=new CG;b.c=1;b.d=1;G(b);}e=0;while(e>=0&&e<d){if(c[e]>32){f=d;while(true){g=f-1|0;if(g<0)break;if(g>=d)break;if(c[g]>32){g=0;if(C8(b,e)==45){e=e+1|0;g=1;}else if(C8(b,e)==43)e=e+1|0;if(e==f){b=new CG;b.c=1;b.d=1;G(b);}a:{h=C8(b,e);i=0;j=(-1);k=100000000;l=0;if(h!=46){l=1;if(h>=48&&h<=57){b:{while(e<f){if(C8(b,e)!=48)break b;e=e+1|0;}}while(e<f){m=C8(b,e);if(m<48)break a;if(m>57)break a;if(k>0){i=i+B3(k,m-48|0)|0;k=$rt_udiv(k,10);}j
=j+1|0;e=e+1|0;}}else{b=new CG;LU(b);G(b);}}}if(e<f&&C8(b,e)==46){e=e+1|0;c:{while(true){if(e>=f)break c;d=C8(b,e);m=Bw(d,48);if(m<0)break c;if(d>57)break;if(!i&&!m)j=j+(-1)|0;else if(k>0){i=i+B3(k,d-48|0)|0;k=$rt_udiv(k,10);}e=e+1|0;l=1;}}if(!l)G(S2());}if(e<f){m=C8(b,e);if(m!=101&&m!=69)G(S2());m=e+1|0;d=0;if(m==f)G(S2());if(C8(b,m)==45){m=m+1|0;d=1;}else if(C8(b,m)==43)m=m+1|0;n=0;e=0;d:{while(true){if(m>=f)break d;k=C8(b,m);if(k<48)break d;if(k>57)break;n=(10*n|0)+(k-48|0)|0;e=1;m=m+1|0;}}if(!e)G(S2());if
(d)n= -n|0;j=j+n|0;}return ADK(i,j,g);}f=f+(-1)|0;}b=new Bd;b.c=1;b.d=1;G(b);}e=e+1|0;if(e==d){b=new CG;b.c=1;b.d=1;G(b);}}b=new Bd;b.c=1;b.d=1;G(b);}
function AQU(){A0g=J($rt_floatcls());}
function JS(){var a=this;C.call(a);a.cm=null;a.b0=0;a.oK=0;}
function N$(a,b){var c,d,e,f,g;c=a.cm;d=c.data;e=a.b0;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=CU(f);g=d.data.length;if(e<g)g=e;K(c,0,d,0,g);a.cm=d;}c=d.data;f=a.b0;a.b0=f+1|0;c[f]=b;}
function R5(a,b,c,d){var e,f,g,h;if((c+d|0)<=b.b0){Ku(a,b.cm,c,d);return;}e=new Bg;f=new N;f.b=D(16);H(f,f.a,B(114));P(f,f.a,c,10);H(f,f.a,B(51));P(f,f.a,d,10);H(f,f.a,B(52));c=b.b0;P(f,f.a,c,10);b=new L;g=f.b;d=f.a;O();h=D(d);b.e=h;K(g,0,h,0,d);e.c=1;e.d=1;e.f=b;G(e);}
function Ku(a,b,c,d){var e,f,g,h,i,j;e=a.cm;f=e.data;g=a.b0;h=g+d|0;if(h<=f.length)f=e;else{if(8>h)h=8;i=g*1.75|0;if(h>i)i=h;f=CU(i);j=f.data.length;if(g<j)j=g;K(e,0,f,0,j);a.cm=f;}K(b,c,f,a.b0,d);a.b0=a.b0+d|0;}
function Ok(a,b){var c,d,e,f,g,h;if(b<a.b0)return a.cm.data[b];c=new Bh;d=new N;d.b=D(16);H(d,d.a,B(35));P(d,d.a,b,10);H(d,d.a,B(36));b=a.b0;P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}
function Tu(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.b0;if(c>=d){e=new Bh;f=new N;f.b=D(16);H(f,f.a,B(53));P(f,f.a,c,10);H(f,f.a,B(36));g=a.b0;P(f,f.a,g,10);h=new L;i=f.b;c=f.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}if(b<=c){g=(c-b|0)+1|0;k=d-g|0;if(a.oK){i=a.cm;c=b+g|0;K(i,c,i,b,d-c|0);}else{l=c+1|0;if(k>l)l=k;i=a.cm;K(i,l,i,b,d-l|0);}a.b0=k;return;}e=new Bh;f=new N;f.b=D(16);H(f,f.a,B(54));P(f,f.a,b,10);H(f,f.a,B(55));P(f,f.a,c,10);h=new L;i=f.b;c=f.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}
function OT(a){var b;if(a.b0)return a.cm.data[0];b=new B2;b.c=1;b.d=1;b.f=B(41);G(b);}
function ABx(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Bg;d=new N;d.b=D(16);H(d,d.a,B(56));P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}i=a.b0;g=i+b|0;h=a.cm;if(g>h.data.length){if(8>g)g=8;b=i*1.75|0;if(g>b)b=g;f=CU(b);j=f.data.length;if(i<j)j=i;K(h,0,f,0,j);a.cm=f;}return a.cm;}
var Xz=I();
function ATh(b){return Math.sin(b);}
function IS(b){return Math.log(b);}
function Hf(b){return Math.sqrt(b);}
function I7(b){return Math.ceil(b);}
function Pn(b){return Math.floor(b);}
function Ju(b,c){return Math.pow(b,c);}
function X(){return Math.random();}
function Jf(b,c){if(b>c)c=b;return c;}
function ABw(b,c){return Math.min(b,c);}
function ATp(b,c){return ABw(b,c);}
function J8(b,c){return Math.max(b,c);}
function AHJ(b,c){return J8(b,c);}
function KF(b){return Math.abs(b);}
function Fm(b){return Math.sign(b);}
function E3(){var a=this;C.call(a);a.b8=null;a.cs=null;a.e_=0.0;a.nG=0.0;a.oQ=0.0;}
function A5Z(){var a=new E3();AKT(a);return a;}
function AKT(a){var b;b=new CJ;b.b2=1;b.C=Bt(C,16);a.b8=b;b=new JS;b.oK=1;b.cm=CU(16);a.cs=b;}
function TT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.b8;d=b.b8;e=d.C;f=d.o;g=c.C;h=g.data;i=c.o;j=i+f|0;if(j<=h.length)d=g;else{k=8;if(k<=j)k=j;i=i*1.75|0;if(k>i)i=k;l=g.constructor;if(l===null)d=null;else{d=l.classObject;if(d===null){d=new CE;d.P=l;m=d;l.classObject=m;}}l=Eg(d);if(l===null){b=new Dm;Dw(b);G(b);}if(l===J($rt_voidcls())){b=new Bg;Dw(b);G(b);}if(i<0){b=new DP;Dw(b);G(b);}d=Et(l.P,i);l=d.data;k=c.o;n=l.length;if(k<n)n=k;ES(g,0,d,0,n);c.C=d;}ES(e,0,d,c.o,f);c.o=j;c=a.cs;o=c.b0;if(o<=0?0:1)c.b0=o-
1|0;b=b.cs;Ku(c,b.cm,0,b.b0);}
function AM3(a){var b,c,d,e,f,g,h;b=a.b8;c=b.C;d=0;e=b.o;f=null;if(d>e){b=new Bg;b.c=1;b.d=1;G(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.o=0;a.cs.b0=0;}
function T9(a){var b,c,d,e,f,g,h,i,j,k,l;b=new N;c=a.b8;d=c.o;b.b=D(d+32|0);e=0;while(e<d){if(e>=c.o){f=new Bh;g=new N;g.b=D(16);H(g,g.a,B(35));P(g,g.a,e,10);H(g,g.a,B(36));e=c.o;P(g,g.a,e,10);b=new L;h=g.b;d=g.a;O();i=D(d);b.e=i;K(h,0,i,0,d);f.c=1;f.d=1;f.f=b;G(f);}j=c.C.data[e].gb&65535;k=b.a;Bo(b,k,k+1|0);b.b.data[k]=j;e=e+1|0;}H(b,b.a,B(59));l=a.e_;Ei(b,b.a,l);H(b,b.a,B(59));l=a.nG;Ei(b,b.a,l);H(b,b.a,B(59));l=a.oQ;Ei(b,b.a,l);c=new L;h=b.b;d=b.a;O();i=D(d);c.e=i;K(h,0,i,0,d);return c;}
function D5(){var a=this;C.call(a);a.cc=null;a.br=0;a.dT=0;}
function FI(a,b){var c,d,e,f,g;c=a.cc;d=c.data;e=a.br;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Y(f);g=d.data.length;if(e<g)g=e;K(c,0,d,0,g);a.cc=d;}c=d.data;f=a.br;a.br=f+1|0;c[f]=b;}
function ADl(a,b,c){var d,e,f,g,h,i,j;d=a.cc;e=d.data;f=a.br;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=Y(h);i=g.data.length;if(f<i)i=f;K(d,0,g,0,i);a.cc=g;}e=g.data;j=a.br;e[j]=b;e[j+1|0]=c;a.br=j+2|0;}
function Gt(a,b){var c,d,e,f,g,h;if(b<a.br)return a.cc.data[b];c=new Bh;d=new N;d.b=D(16);H(d,d.a,B(35));P(d,d.a,b,10);H(d,d.a,B(36));b=a.br;P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}
function Jx(a,b,c){var d,e,f,g,h;if(b<a.br){a.cc.data[b]=c;return;}d=new Bh;e=new N;e.b=D(16);H(e,e.a,B(35));P(e,e.a,b,10);H(e,e.a,B(36));b=a.br;P(e,e.a,b,10);f=new L;g=e.b;c=e.a;O();h=D(c);f.e=h;K(g,0,h,0,c);d.c=1;d.d=1;d.f=f;G(d);}
function P0(a){return a.cc.data[a.br-1|0];}
function Z0(a,b){var c,d,e,f,g,h,i,j;if(b<0){c=new Bg;d=new N;d.b=D(16);H(d,d.a,B(56));P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}i=a.br;g=i+b|0;h=a.cc;if(g>h.data.length){if(8>g)g=8;b=i*1.75|0;if(g>b)b=g;f=Y(b);j=f.data.length;if(i<j)j=i;K(h,0,f,0,j);a.cc=f;}return a.cc;}
function ANY(a){var b,c,d,e,f,g,h;if(a.dT){b=a.cc;c=1;d=0;e=a.br;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=$rt_nextId();g.$id$=h;}return a.$id$;}
function AUh(a,b){var c,d,e,f,g,h;if(b===a)return 1;if(!a.dT)return 0;if(!(b instanceof D5))return 0;c=b;if(!c.dT)return 0;d=a.br;if(d!=c.br)return 0;e=a.cc;f=c.cc;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
function ANw(a){var b,c,d,e,f,g,h,i;if(!a.br)return B(58);b=a.cc;c=new Jk;d=D(32);e=d.data;c.bD=d;f=c.bf;if(f==e.length)Dv(c,f+1|0);b=b.data;e=c.bD.data;g=c.bf;c.bf=g+1|0;e[g]=91;No(c,b[0],0,48);h=1;while(h<a.br){g=B(59).e.data.length;i=c.bf+g|0;if(i>c.bD.data.length)Dv(c,i);HK(B(59),0,g,c.bD,c.bf);c.bf=i;No(c,b[h],0,48);h=h+1|0;}f=c.bf;if(f==c.bD.data.length)Dv(c,f+1|0);b=c.bD;e=b.data;g=c.bf;f=g+1|0;c.bf=f;e[g]=93;if(!f)c=B(43);else{c=new L;O();e=D(f);c.e=e;K(b,0,e,0,f);}return c;}
var Ly=I(0);
var KP=I();
var FT=I(0);
function H0(){var a=this;KP.call(a);a.f5=0;a.c9=null;a.oM=0;a.mf=0.0;a.hC=0;}
function J6(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function YH(a){var b;b=a.c9.data[0];while(b!==null&&b.du!==null){b=b.dJ;}return b;}
function JZ(a,b,c){var d,e,f,g,h,i;if(b===null){d=a.c9.data;e=d[0];while(e!==null&&e.du!==null){e=e.dJ;}if(e===null){a.oM=a.oM+1|0;f=null;e=new FO;b=null;e.du=f;e.ev=b;e.gy=0;e.dJ=d[0];d[0]=e;g=a.f5+1|0;a.f5=g;if(g>a.hC)Pe(a,d.length);}}else{h=b.eP();d=a.c9.data;i=h&(d.length-1|0);e=d[i];while(e!==null){if(e.gy==h){f=e.du;if(b!==f&&!b.ek(f)?0:1)break;}e=e.dJ;}if(e===null){a.oM=a.oM+1|0;e=new FO;f=null;e.du=b;e.ev=f;e.gy=h;d=a.c9.data;e.dJ=d[i];d[i]=e;g=a.f5+1|0;a.f5=g;if(g>a.hC)Pe(a,d.length);}}f=e.ev;e.ev=
c;return f;}
function Pe(a,b){var c,d,e,f,g,h,i,j;c=J6(!b?1:b<<1);d=Bt(FO,c);e=d.data;f=0;c=c-1|0;while(true){g=a.c9.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.gy&c;j=h.dJ;h.dJ=e[i];e[i]=h;h=j;}f=f+1|0;}a.c9=d;a.hC=e.length*a.mf|0;}
function AGB(b,c){return b!==c&&!b.ek(c)?0:1;}
var SM=I(0);
var RI=I();
var Bh=I(BU);
function A50(){var a=new Bh();U1(a);return a;}
function A51(a){var b=new Bh();XC(b,a);return b;}
function U1(a){a.c=1;a.d=1;}
function XC(a,b){a.c=1;a.d=1;a.f=b;}
var ZK=I();
function LT(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A52());}return b.data.length;}
function AYF(b,c){if(b===null){b=new Dm;b.c=1;b.d=1;G(b);}if(b===J($rt_voidcls())){b=new Bg;b.c=1;b.d=1;G(b);}if(c>=0)return Et(b.P,c);b=new DP;b.c=1;b.d=1;G(b);}
function Et(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Dm=I(BU);
var J2=I(BU);
var D6=I();
var A0n=null;var A53=null;var A5A=null;var A5y=null;var A54=null;var A0o=null;var A5z=null;var A5B=null;var A55=null;var A56=null;function ADj(b){var c,d,e,f;c=new L;d=D(1);e=d.data;e[0]=b;O();f=e.length;e=D(f);c.e=e;K(d,0,e,0,f);return c;}
function AC2(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function US(b,c,d){var e;if(c<(d-1|0)){e=b.data;if((e[c]&64512)!=55296?0:1){d=c+1|0;if((e[d]&64512)!=56320?0:1)return ((e[c]&1023)<<10|e[d]&1023)+65536|0;}}return b.data[c];}
function YL(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function ACZ(b){return (56320|b&1023)&65535;}
function ACH(b){if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}return B$(A5y,b)&65535;}
function XL(){if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}return A5y;}
function Tr(b){if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}return B$(A5A,b)&65535;}
function TQ(){if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}return A5A;}
function B$(b,c){var d,e;d=b.vV.data;if(c<d.length)return c+d[c]|0;d=b.vC;e=ACk(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;}
function ACk(b,c){var d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=Bw(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;}
function IZ(b){var c,d,e,f,g,h;if(A53===null){if(A55===null)A55=Xk();A53=AU$((A55.value!==null?$rt_str(A55.value):null));}c=A53.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=Bw(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);}
function IH(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Dg(b){var c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(A54===null){if(A56===null)A56=AEc();A54=AWf((A56.value!==null?$rt_str(A56.value):null));}e=A54.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.re)c=f+1|0;else{d=g.qm;if(b>=d)return g.qq.data[b-d|0];d=f-1|0;}}return 0;}
function HU(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Dg(b)!=16?0:1;}
function AGa(){A0n=J($rt_charcls());A0o=Bt(D6,128);}
function Dz(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function DF(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Xk(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEc(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var VH=I();
function AO9(){var userAgent=$rt_globals.navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
var ML=I(0);
function Nz(){var a=this;C.call(a);a.bH=0;a.xe=0;a.yx=0;a.dK=0;}
function XR(a){return a.bH;}
function Va(a,b,c,d,e,f){var g,h,i,j,k,l;a:{AY3();switch(A57.data[d.n]){case 1:if(a.dK){if(A5X===null){e=new Dd;e.cI=A0G;d=new N;d.b=D(16);e.bs=d;e.cE=D(32);e.cO=0;Dc();e.cM=A5s;A5X=e;}e=A5X;g=new N;g.b=D(16);H(g,g.a,B(115));H(g,g.a,c===null?B(2):c);d=new L;h=g.b;i=g.a;O();j=D(i);d.e=j;K(h,0,j,0,i);g=e.bs;H(g,g.a,d);k=g.a;Bo(g,k,k+1|0);g.b.data[k]=10;C7(e);}a.bH=a.bH+1|0;d=new Hn;d.fc=a;d.g_=b;d.e7=c;d.fr=f;Dj();c=null;e=null;d.dS=new C;d.dR=1;d.fz=e;d.fV=c;l=A58;A58=l+1|0;d.fR=M(l);c=new Fq;c.fB=d;Gq(c);break a;case 2:d
=null;g=new M_;g.mu=a;g.j2=f;g.uP=d;g.yb=e;if(a.dK){if(A5X===null){e=new Dd;e.cI=A0G;d=new N;Di(d);d.b=D(16);e.bs=d;e.cE=D(32);e.cO=0;Dc();e.cM=A5s;A5X=e;}f=A5X;d=new N;d.b=D(16);DY(d,d.a,Ea(B(115)));DY(d,d.a,c===null?B(2):Ea(c));e=new L;h=d.b;i=d.a;j=D(i);e.e=j;K(h,0,j,0,i);d=f.bs;H(d,d.a,e);ADI(d,d.a,10);C7(f);}a.bH=a.bH+1|0;d=new Ho;d.e8=a;d.gN=b;d.e4=c;d.fI=g;Dj();c=null;e=null;d.dS=new C;d.dR=1;d.fz=e;d.fV=c;l=A58;A58=l+1|0;d.fR=M(l);c=new Fq;c.fB=d;Gq(c);break a;case 3:break;case 4:Ol(a,b,c,AWS(a,f));break a;case 5:Y5(f,
c,null);break a;default:c=new Ba;e=new N;IW(e);DK(DK(e,B(116)),d);V2(c,C$(e));G(c);}Ol(a,b,c,f);}}
function TR(a,b,c,d){var e,f,g,h,i,j,k;if(a.dK){if(A5X===null){e=new Dd;e.cI=A0G;f=new N;f.b=D(16);e.bs=f;e.cE=D(32);e.cO=0;Dc();e.cM=A5s;A5X=e;}e=A5X;f=new N;f.b=D(16);H(f,f.a,B(115));H(f,f.a,c===null?B(2):c);g=new L;h=f.b;i=f.a;O();j=D(i);g.e=j;K(h,0,j,0,i);f=e.bs;H(f,f.a,g);i=f.a;Bo(f,i,i+1|0);f.b.data[i]=10;C7(e);}a.bH=a.bH+1|0;e=new Hn;e.fc=a;e.g_=b;e.e7=c;e.fr=d;Dj();c=null;d=null;e.dS=new C;e.dR=1;e.fz=d;e.fV=c;k=A58;A58=k+1|0;e.fR=M(k);c=new Fq;c.fB=e;Gq(c);}
function MD(a,b,c,d){var e,f,g,h,i,j,k;if(a.dK){if(A5X===null){e=new Dd;e.cI=A0G;f=new N;f.b=D(16);e.bs=f;e.cE=D(32);e.cO=0;Dc();e.cM=A5s;A5X=e;}e=A5X;f=new N;f.b=D(16);H(f,f.a,B(117));H(f,f.a,c===null?B(2):c);g=new L;h=f.b;i=f.a;O();j=D(i);g.e=j;K(h,0,j,0,i);f=e.bs;H(f,f.a,g);k=f.a;Bo(f,k,k+1|0);f.b.data[k]=10;C7(e);}a.bH=a.bH+1|0;f=new $rt_globals.XMLHttpRequest();e=new M$;e.jq=a;e.hA=f;e.qN=b;e.nB=c;e.r5=d;e=Cm(e,"handleEvent");f.onreadystatechange=e;e=new IM;e.sj=a;e.mP=d;d=Cm(e,"handleEvent");f.onprogress
=d;f.open("GET",$rt_ustr(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();}
function Ol(a,b,c,d){var e,f,g,h,i,j,k;if(a.dK){if(A5X===null){e=new Dd;e.cI=A0G;f=new N;f.b=D(16);e.bs=f;e.cE=D(32);e.cO=0;Dc();e.cM=A5s;A5X=e;}e=A5X;f=new N;f.b=D(16);H(f,f.a,B(115));H(f,f.a,c===null?B(2):c);g=new L;h=f.b;i=f.a;O();j=D(i);g.e=j;K(h,0,j,0,i);f=e.bs;H(f,f.a,g);i=f.a;Bo(f,i,i+1|0);f.b.data[i]=10;C7(e);}a.bH=a.bH+1|0;e=new Ho;e.e8=a;e.gN=b;e.e4=c;e.fI=d;Dj();c=null;d=null;e.dS=new C;e.dR=1;e.fz=d;e.fV=c;k=A58;A58=k+1|0;e.fR=M(k);c=new Fq;c.fB=e;Gq(c);}
var Oq=I();
var A5O=null;function AE5(){return A5O;}
var K6=I();
var A0D=0;var A5P=0;function ALP(){A0D=1;}
var Q1=I(0);
function KE(){var a=this;C.call(a);a.iO=null;a.I=null;a.xx=null;a.jb=null;a.v8=null;a.zY=null;a.sS=0.0;a.o0=R;a.oA=R;a.q$=0.0;a.oq=0.0;a.sJ=0;}
var A59=0;var A4X=null;function JE(){JE=Bi(KE);AGW();}
function AYE(a){var b=new KE();YS(b,a);return b;}
function YS(a,b){var c,d,e,f,g,h,i,j,k;JE();a.sS=0.0;a.o0=Fr();a.oA=M(-1);a.q$=0.0;a.oq=0.0;a.xx=b;Jb();c=$rt_globals.window.document;d=b.yE;a.I=c.getElementById($rt_ustr(d));e=AJK();d=!!b.w4;e.alpha=d;d=!!b.uw;e.antialias=d;d=!!b.vd;e.stencil=d;d=!!b.vX;e.premultipliedAlpha=d;d=!!b.wb;e.preserveDrawingBuffer=d;f=a.I;if(b.sK)a.iO=f.getContext("webgl2",e);a:{if(b.sK){d=a.iO;if(d!==null){if(!b.sn)f=AZm(d);else{f=new NA;Tc(f,d);}a.v8=f;a.jb=f;break a;}}f=f.getContext("webgl",e);a.iO=f;if(!b.sn)d=AY$(f);else{d=
new Sq;QC(d,f);}a.jb=d;}d=a.jb.kV(7938);c=a.jb.kV(7936);g=a.jb.kV(7937);f=new OV;MT();Yz(f,A5$,d,c,g);a.zY=f;h=b.mE;if(!(h<0&&b.iL<0)){if(h&&b.iL?1:0)Km(a,h,b.iL);else{i=A5M;h=i.ez.document.documentElement.clientWidth-b.p1|0;j=i.ez.document.documentElement.clientHeight-b.sQ|0;k=!b.n0?1.0:$rt_globals.devicePixelRatio||1;Km(a,k*h|0,k*j|0);}}b=a.I;d=new Q3;d.ze=a;TM(b,Cm(d,"fullscreenChanged"));}
function Vt(a){var b,c,d;b=Fr();c=BF(Cf(b,a.o0))/1000.0;a.q$=c;a.o0=b;c=a.oq+c;a.oq=c;d=a.sJ+1|0;a.sJ=d;if(c>1.0){a.sS=d;a.oq=0.0;a.sJ=0;}}
function Q_(a){return a.jb;}
function Ud(a){return a.v8;}
function Ck(a){return a.I.width;}
function Cl(a){return a.I.height;}
function Cw(a){return a.sS|0;}
function Km(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.I;e=b;d.width=e;d=a.I;e=c;d.height=e;if(a.xx.n0){f=$rt_globals.devicePixelRatio||1;e=a.I.style;g=b/f;AH9();h=new N;h.b=D(16);OC(h,h.a,g);H(h,h.a,B(118));i=new L;j=h.b;k=h.a;O();l=D(k);i.e=l;K(j,0,l,0,k);e.setProperty("width",$rt_ustr(i));f=c/f;h=new N;h.b=D(16);OC(h,h.a,f);H(h,h.a,B(118));d=new L;l=h.b;c=h.a;j=D(c);d.e=j;K(l,0,j,0,c);e.setProperty("height",$rt_ustr(d));}}
function AGW(){A59=0;A4X=DW(51,0.800000011920929);}
function TM(b,c){if(b.requestFullscreen){$rt_globals.document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){$rt_globals.document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){$rt_globals.document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){$rt_globals.document.addEventListener("msfullscreenchange",c,false);}}
function Ty(){var a=this;C.call(a);a.rw=null;a.kZ=null;a.nV=null;a.lv=null;a.lE=null;a.uQ=null;a.m2=null;a.qS=0;a.nc=null;}
function AYe(a,b,c){var d=new Ty();AM8(d,a,b,c);return d;}
function AM8(a,b,c,d){var e;a.rw=Fy(51,0.800000011920929);a.kZ=Fy(51,0.800000011920929);a.nV=Fy(51,0.800000011920929);a.lv=Fy(51,0.800000011920929);a.lE=Fy(51,0.800000011920929);a.uQ=Fy(51,0.800000011920929);e=new CJ;e.b2=1;e.C=Bt(C,16);a.m2=e;a.qS=(-1);a.nc=b;ABQ(a,c,d);}
function ABQ(a,b,c){var d,e,f;d=c.ey;if(d.t4!==null){e=b.ownerDocument;f=new Pa;f.Cr=a;e.addEventListener("dragenter",Cm(f,"handleEvent"),!!0);f=new Pb;f.Ej=a;e.addEventListener("dragover",Cm(f,"handleEvent"),!!0);f=new O9;f.ue=a;f.tB=c;f.tc=d;e.addEventListener("drop",Cm(f,"handleEvent"));}}
function Xr(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(XD(a,b.qx)){b.no=b.xN;b.lq=1;b.iZ=0;b.fb=0;return 0;}if(b.fb)return 0;b.iZ=0;b.lq=0;b.fb=1;c=b.qx;d=b.up;e=b.t9;f=new O$;f.EU=a;f.en=b;g=A5O;b=a.nc;h=new N;h.b=D(16);i=h.a;if(b===null)b=B(2);Gh(h,i,b);Gh(h,h.a,B(92));b=new L;j=h.b;k=h.a;O();l=D(k);b.e=l;K(j,0,l,0,k);h=new N;h.b=D(16);H(h,h.a,b);H(h,h.a,c===null?B(2):c);m=new L;j=h.b;k=h.a;l=D(k);m.e=l;K(j,0,l,0,k);b=new O8;b.n6=a;b.eV=f;b.os=d;b.nx=c;Va(g,1,m,d,e,b);return 1;}
function IL(a,b,c,d){a:{AZk();switch(A5_.data[b.n]){case 1:break;case 2:BW(a.kZ,c,d);break a;case 3:BW(a.lE,c,d);break a;case 4:BW(a.nV,c,d);break a;case 5:BW(a.rw,c,null);break a;default:break a;}BW(a.lv,c,d);}}
function UT(a,b){var c,d,e,f,$$je;if(Df(a.lv,b)<0?0:1){a:{try{c=AI_(ZF(UA(a.lv,b),B(119)));}catch($$e){$$je=BJ($$e);if($$je instanceof O0){break a;}else{throw $$e;}}return c;}return null;}if(Df(a.kZ,b)<0?0:1){b=new Mc;d=BS(1);e=d.data.length;b.ks=d;b.gJ=0;b.qP=0;b.kj=0+e|0;return b;}if(Df(a.lE,b)<0?0:1){c=a.lE;f=Df(c,b);b=f<0?null:c.cZ.data[f];c=new SQ;c.rF=b;return c;}if(!(Df(a.nV,b)<0?0:1))return null;b=new Mc;d=BS(1);e=d.data.length;b.ks=d;b.gJ=0;b.qP=0;b.kj=0+e|0;return b;}
function XD(a,b){var c;c=Df(a.lv,b)<0?0:1;return !c&&!(Df(a.kZ,b)<0?0:1)&&!(Df(a.lE,b)<0?0:1)&&!(Df(a.nV,b)<0?0:1)&&!(Df(a.rw,b)<0?0:1)?0:1;}
var D7=I();
function AOH(a,b){}
var QK=I(0);
var E1=I(0);
function Zr(){var a=this;C.call(a);a.cd=null;a.jZ=0;a.gk=null;a.fE=null;a.cD=null;a.cC=null;a.m4=null;a.m5=null;a.oc=null;a.iX=0;a.mC=null;a.n8=0;a.bN=null;a.sw=null;a.qU=null;a.dz=null;a.gP=R;a.jk=0;}
function AWN(a){var b=new Zr();AQS(b,a);return b;}
function AVA(b){var c,d,e,f;c=A5J;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(KF(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
function AQS(a,b){a.jZ=0;a.gk=DW(20,0.800000011920929);a.fE=S5(20);a.cD=Y(20);a.cC=Y(20);a.m4=Y(20);a.m5=Y(20);a.oc=AGv(51,0.800000011920929);a.iX=0;a.mC=S5(256);a.n8=0;a.bN=S5(256);a.sw=S5(5);a.qU=AGv(51,0.800000011920929);a.jk=1;a.cd=b;Zk(a);}
function Zk(a){var b;b=a.cd.ownerDocument;b.addEventListener("mousedown",Cm(a,"handleEvent"),!!0);b.addEventListener("mouseup",Cm(a,"handleEvent"),!!0);b.addEventListener("mousemove",Cm(a,"handleEvent"),!!0);b.addEventListener("wheel",Cm(a,"handleEvent"),!!0);b.addEventListener("keydown",Cm(a,"handleEvent"),!!0);b.addEventListener("keyup",Cm(a,"handleEvent"),!!0);b.addEventListener("keypress",Cm(a,"handleEvent"),!!0);a.cd.addEventListener("touchstart",Cm(a,"handleEvent"),!!1);a.cd.addEventListener("touchmove",
Cm(a,"handleEvent"),!!1);a.cd.addEventListener("touchcancel",Cm(a,"handleEvent"),!!1);a.cd.addEventListener("touchend",Cm(a,"handleEvent"),!!1);}
function ZC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;a:{c=$rt_str(b.type);if(BO(c,B(120))){$rt_globals.window.focus();d=b.target;e=a.cd;if(d!==e?0:1){f=a.fE.data;if(!f[0]){a.jk=1;a.jZ=1;f[0]=1;g=Md(b.button);Vu(a.oc,g);a.sw.data[g]=1;a.m4.data[0]=0;a.m5.data[0]=0;if(!LI(a)){h=H7(a,b,a.cd);i=Io(a,b,a.cd);a.cD.data[0]=h;a.cC.data[0]=i;}else{f=a.cD.data;f[0]=f[0]+b.movementX|0;f=a.cC.data;f[0]=f[0]+b.movementY|0;}a.gP=F5();j=a.dz;if(j!==null)j.zb(a.cD.data[0],a.cC.data[0],0,Md(b.button));b.preventDefault();b.stopPropagation();break a;}}k
=H7(a,b,e);l=Io(a,b,a.cd);if(!(k>=0.0&&k<=Ck(A4P)&&l>=0.0&&l<=Cl(A4P)))a.jk=0;return;}if(BO(c,B(121))){if(!a.fE.data[0])return;AC5(a.oc,Md(b.button));f=a.fE;f.data[0]=a.oc.e2<=0?0:1;if(!LI(a)){Ge(a,0,H7(a,b,a.cd)-a.cD.data[0]|0,Io(a,b,a.cd)-a.cC.data[0]|0);a.cD.data[0]=H7(a,b,a.cd);a.cC.data[0]=Io(a,b,a.cd);}else{Ge(a,0,b.movementX|0,b.movementY|0);f=a.cD.data;f[0]=f[0]+b.movementX|0;f=a.cC.data;f[0]=f[0]+b.movementY|0;}a.gP=F5();a.fE.data[0]=0;j=a.dz;if(j!==null)j.u0(a.cD.data[0],a.cC.data[0],0,Md(b.button));}
else if(!BO(c,B(122))){if(BO(c,B(123))){if(a.dz!==null){m=AVA(b);a.dz.Gi(0.0,m|0);}a.gP=F5();}else if(BO(c,B(124))){a.jZ=1;n=b.changedTouches;o=0;p=n.length;while(o<p){j=n.item(o);q=j.identifier;e=a.gk;r=ACU(a);CP(e,q,Cg(r));a.fE.data[r]=1;a.cD.data[r]=HR(a,j,a.cd);a.cC.data[r]=Im(a,j,a.cd);a.m4.data[r]=0;a.m5.data[r]=0;j=a.dz;if(j!==null)j.zb(a.cD.data[r],a.cC.data[r],r,0);o=o+1|0;}a.gP=F5();b.preventDefault();}}else{if(!LI(a)){h=H7(a,b,a.cd);i=Io(a,b,a.cd);Ge(a,0,h-a.cD.data[0]|0,i-a.cC.data[0]|0);a.cD.data[0]
=h;a.cC.data[0]=i;}else{Ge(a,0,b.movementX|0,b.movementY|0);f=a.cD.data;f[0]=f[0]+b.movementX|0;f=a.cC.data;f[0]=f[0]+b.movementY|0;}a.gP=F5();j=a.dz;if(j!==null){if(!a.fE.data[0])j.G3(a.cD.data[0],a.cC.data[0]);else j.Ew(a.cD.data[0],a.cC.data[0],0);}}}if(BO(c,B(125))){n=b.changedTouches;o=0;p=n.length;while(o<p){s=n.item(o);q=s.identifier;t=KA(MF(a.gk,q));Ge(a,t,HR(a,s,a.cd)-a.cD.data[t]|0,Im(a,s,a.cd)-a.cC.data[t]|0);a.cD.data[t]=HR(a,s,a.cd);a.cC.data[t]=Im(a,s,a.cd);j=a.dz;if(j!==null)j.Ew(a.cD.data[t],
a.cC.data[t],t);o=o+1|0;}a.gP=F5();b.preventDefault();}if(BO(c,B(126))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=KA(MF(a.gk,q));Iy(a.gk,q);a.fE.data[t]=0;h=HR(a,s,a.cd);i=Im(a,s,a.cd);Ge(a,t,h-a.cD.data[t]|0,i-a.cC.data[t]|0);f=a.cD.data;f[t]=h;v=a.cC.data;v[t]=i;j=a.dz;if(j!==null)j.u0(f[t],v[t],t,0);o=o+1|0;}a.gP=F5();b.preventDefault();}if(BO(c,B(127))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=KA(MF(a.gk,q));Iy(a.gk,q);a.fE.data[t]=0;h=HR(a,
s,a.cd);i=Im(a,s,a.cd);Ge(a,t,h-a.cD.data[t]|0,i-a.cC.data[t]|0);f=a.cD.data;f[t]=h;v=a.cC.data;v[t]=i;j=a.dz;if(j!==null)j.u0(f[t],v[t],t,0);o=o+1|0;}a.gP=F5();b.preventDefault();}}
function Tx(a,b){var c,d,e,f,g,h,i;c=$rt_str(b.type);if(!(BO(c,B(128))&&a.jk)){if(BO(c,B(129))&&a.jk){d=b.charCode&65535;e=a.dz;if(e!==null)e.yO(d);if(d==9){b.preventDefault();b.stopPropagation();}}else if(BO(c,B(130))&&a.jk){f=YB(b.keyCode);e=a.qU;if(!f)d=e.je;else{g=e.gv;h=V(Bc(Bb(M(f),F(2135587861, 2654435769)),e.iU));a:{while(true){d=g.data[h];if(!d){h= -(h+1|0)|0;break a;}if(d==f)break;h=(h+1|0)&e.gh;}}d=h<0?0:1;}if(d)b.preventDefault();g=a.mC.data;if(g[f]){a.iX=a.iX-1|0;g[f]=0;}e=a.dz;if(e!==null)e.F$(f);if
(f==61){b.preventDefault();b.stopPropagation();}}}else{b:{f=YB(b.keyCode);h=0;switch(f){case 67:h=8;break b;case 112:h=127;break b;default:}}e=a.qU;if(!f)d=e.je;else{g=e.gv;d=V(Bc(Bb(M(f),F(2135587861, 2654435769)),e.iU));c:{while(true){i=g.data[d];if(!i){d= -(d+1|0)|0;break c;}if(i==f)break;d=(d+1|0)&e.gh;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.dz;if(e!==null){e.zp(f);a.dz.yO(h);}}else{g=a.mC.data;if(!g[f]){a.iX=a.iX+1|0;g[f]=1;a.n8=1;a.bN.data[f]=1;e=a.dz;if(e!==null)e.zp(f);}}if
(f==61){b.preventDefault();b.stopPropagation();}}}
function ACU(a){var b,c,d;b=0;while(true){if(b>=20)return (-1);c=a.gk;if(b>=(-128)&&b<=127){FA();d=A1X.data[b+128|0];}else{d=new E6;d.eZ=b;}if(!ADZ(c,d,0))break;b=b+1|0;}return b;}
function PE(a){var b,c,d;a:{if(a.jZ){a.jZ=0;b=0;while(true){c=a.sw.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.n8){a.n8=0;d=0;while(true){c=a.bN.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}}
function Ge(a,b,c,d){a.m4.data[b]=c;a.m5.data[b]=d;}
function H7(a,b,c){var d,e;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Np(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;if(BO($rt_str(b.compatMode),B(131)))b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Fm(d)*0.5|0;}
function Io(a,b,c){var d,e;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Q6(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;if(BO($rt_str(b.compatMode),B(131)))b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Fm(d)*0.5|0;}
function HR(a,b,c){var d,e;d=c.width*1.0/c.clientWidth;e=(b.clientX-(Np(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;if(BO($rt_str(b.compatMode),B(131)))b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Fm(d)*0.5|0;}
function Im(a,b,c){var d,e;d=c.height*1.0/c.clientHeight;e=(b.clientY-(Q6(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;if(BO($rt_str(b.compatMode),B(131)))b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Fm(d)*0.5|0;}
function Q6(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
function Np(a,b){var c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
function Br(a,b){if(b==(-1))return a.iX<=0?0:1;if(b>=0&&b<=255)return a.mC.data[b];return 0;}
function V5(a,b){a.dz=b;}
function LI(a){return ATt(a.cd)?1:0;}
function ATt(b){if($rt_globals.document.pointerLockElement===$rt_globals.canvas||$rt_globals.document.mozPointerLockElement===$rt_globals.canvas){return true;}return false;}
function AFZ(a,b){ZC(a,b);Tx(a,b);}
var P$=I(0);
function ABu(){C.call(this);this.ox=null;}
function AWY(a){var b=new ABu();ARM(b,a);return b;}
function ARM(a,b){a.ox=b;}
function AAD(){C.call(this);this.Bz=null;}
function AXy(){var a=new AAD();ANB(a);return a;}
function ANB(a){var b,c,d,e;b=new H0;c=J6(16);b.f5=0;d=Bt(FO,c);e=d.data;b.c9=d;b.mf=0.75;b.hC=e.length*0.75|0;a.Bz=b;}
var Q2=I(0);
var W$=I();
function AWC(){var a=new W$();AMg(a);return a;}
function AMg(a){}
var N3=I(0);
function AAy(){var a=this;C.call(a);a.BF=0;a.nz=0;a.zV=null;a.rc=null;}
function AYg(){var a=new AAy();AJR(a);return a;}
function AJR(a){var b;a.BF=0;a.nz=1;b=new Qe;b.m6=a;a.zV=b;a.rc=B(43);}
function ABM(b){if("clipboard" in $rt_globals.navigator){$rt_globals.navigator.clipboard.writeText(b);}}
var EV=I();
var A4c=null;var A4P=null;var A5T=null;var A5R=null;var A39=null;var A5S=null;var A3_=null;var A4R=null;var A5Q=null;var RG=I(0);
var Ra=I(0);
function Wp(){C.call(this);this.w0=null;}
function AZz(){var a=new Wp();AG6(a);return a;}
function AG6(a){a.w0=null;a.w0=AZg();}
function Tz(){C.call(this);this.oV=null;}
function AYU(a){var b=new Tz();AIe(b,a);return b;}
function AIe(a,b){a.oV=b;}
function Wa(a,b){var c,$$je;if(!BO(B(132),$rt_str(a.oV.gz.ez.document.visibilityState))){b=a.oV.mq;Il(b);a:{try{c=PF(b);while(PM(c)){ZH(Of(c));}EI(b);break a;}catch($$e){$$je=BJ($$e);c=$$je;}EI(b);G(c);}}else{b=a.oV.mq;Il(b);b:{try{c=PF(b);while(PM(c)){ABV(Of(c));}EI(b);break b;}catch($$e){$$je=BJ($$e);c=$$je;}EI(b);G(c);}}}
function ARh(a,b){Wa(a,b);}
function TA(){C.call(this);this.kw=null;}
function AWU(a){var b=new TA();AGT(b,a);return b;}
function AGT(a,b){a.kw=b;}
function AEd(a,b){var c,d,e,f,g;c=a.kw.gz.ez.document.documentElement.clientWidth;b=a.kw;d=c-b.ey.p1|0;e=b.gz.ez.document.documentElement.clientHeight;b=a.kw;f=b.ey;c=e-f.sQ|0;if(d>0&&c>0){if(b.fq!==null){if(f.n0){g=$rt_globals.devicePixelRatio||1;d=d*g|0;c=c*g|0;}Km(a.kw.fq,d,c);}return;}}
function AUY(a,b){AEd(a,b);}
var Bg=I(BU);
function AOe(a){var b=new Bg();AEp(b,a);return b;}
function AEp(a,b){a.c=1;a.d=1;a.f=b;}
var Uz=I();
function Mf(b,c){var d,e,f,g,h,i,j;if(b<0){d=new Bg;e=new N;e.b=D(16);H(e,e.a,B(133));P(e,e.a,b,10);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);d.c=1;d.d=1;d.f=f;G(d);}j=I7(b/c)|0;if(2>j)j=2;h=K1(j);if(h<=1073741824)return h;d=new Bg;e=new N;e.b=D(16);H(e,e.a,B(134));P(e,e.a,b,10);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);d.c=1;d.d=1;d.f=f;G(d);}
var PZ=I(Ex);
var A0m=null;function ACy(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;if(e>=2&&e<=36){f=Bw(c,d);if(!f){b=new CG;b.c=1;b.d=1;b.f=B(78);G(b);}g=0;if(c>=0){h=b.e.data;if(c<h.length){a:{switch(h[c]){case 43:i=c+1|0;break a;case 45:g=1;i=c+1|0;break a;default:}i=c;}j=R;k=M(e);b:{while(i<d){l=i+1|0;if(i<0)break b;h=b.e.data;if(i>=h.length)break b;m=IZ(h[i]);if(m<0){n=new CG;if(f>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!f){O();o=A36;}else if(!c&&d==b.e.data.length)o=b;else{o=new L;h=b.e;d=d-c|0;O();p=D(d);o.e=p;K(h,c,p,0,d);}b
=new N;b.b=D(16);H(b,b.a,B(79));c=b.a;if(o===null)o=B(2);H(b,c,o);q=new L;h=b.b;d=b.a;O();p=D(d);q.e=p;K(h,0,p,0,d);n.c=1;n.d=1;n.f=q;G(n);}if(m>=e){n=new CG;r=FZ(b,c,d);b=new N;IP(b,16);DK(DK(FQ(DK(b,B(80)),e),B(72)),r);Jn(n,C$(b));G(n);}j=Z(Bb(k,j),M(m));if(F9(j,R)){if(l==d&&Dl(j,F(0, 2147483648))&&g)return F(0, 2147483648);n=new CG;b=OZ(b,c,d);q=FU();DK(DK(q,B(81)),b);Jn(n,C$(q));G(n);}i=l;}if(g)j=G4(j);return j;}b=new Bd;b.c=1;b.d=1;G(b);}}b=new Bd;b.c=1;b.d=1;G(b);}b=new CG;n=new N;n.b=D(16);H(n,n.a,B(82));P(n,
n.a,e,10);q=new L;h=n.b;d=n.a;O();p=D(d);q.e=p;K(h,0,p,0,d);b.c=1;b.d=1;b.f=q;G(b);}
function Fg(b){var c,d;if(Dl(b,R))return 64;c=0;d=Bc(b,32);if(Ey(d,R))c=32;else d=b;b=Bc(d,16);if(Dl(b,R))b=d;else c=c|16;d=Bc(b,8);if(Dl(d,R))d=b;else c=c|8;b=Bc(d,4);if(Dl(b,R))b=d;else c=c|4;d=Bc(b,2);if(Dl(d,R))d=b;else c=c|2;if(Ey(Bc(d,1),R))c=c|1;return (64-c|0)-1|0;}
function En(b,c){return Long_udiv(b, c);}
function T8(b,c){return Long_urem(b, c);}
function EB(b,c){return Long_ucompare(b, c);}
function ALv(){A0m=J($rt_longcls());}
var Yq=I();
function AJK(){return {};}
var Lv=I(0);
function II(){var a=this;C.call(a);a.l=null;a.hs=0;a.hc=0;a.dr=0;a.z3=0;a.Al=0;a.ko=0;a.hM=0;a.cj=null;a.c6=null;a.eh=null;a.CC=null;a.AC=null;a.iM=null;a.dF=null;a.em=0;a.lO=null;a.hw=null;a.j6=null;a.md=null;a.zl=null;}
function AY$(a){var b=new II();QC(b,a);return b;}
function QC(a,b){a.hs=1;a.hc=1;a.dr=1;a.z3=1;a.Al=1;a.ko=1;a.hM=1;a.cj=DW(51,0.800000011920929);a.c6=DW(51,0.800000011920929);a.eh=DW(51,0.800000011920929);a.CC=DW(51,0.800000011920929);a.AC=DW(51,0.800000011920929);a.iM=DW(51,0.800000011920929);a.dF=DW(51,0.800000011920929);a.em=0;a.lO=new $rt_globals.Float32Array(40000);a.hw=new $rt_globals.Int32Array(12000);a.j6=new $rt_globals.Int16Array(12000);a.md=new $rt_globals.Int8Array(12000);a.zl=new $rt_globals.Uint8Array(240000);a.l=b;b.pixelStorei(37441,0);}
function MB(a,b){var c,d,e,f,g;if(A5P){c=(!EY(b,ER)?null:b.g0.bl.data).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Float32Array(c,d,e);}if((b.g-b.h|0)>a.lO.length)a.lO=new $rt_globals.Float32Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.lO;g=PL(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.lO;e=f-b.h|0;return c.subarray(0,e);}
function P4(a,b){var c,d,e,f,g;if(A5P){c=(!EY(b,ER)?null:b.gS.bl.data).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Int16Array(c,d,e);}if((b.g-b.h|0)>a.j6.length)a.j6=new $rt_globals.Int16Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.j6;g=AA$(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.j6;e=f-b.h|0;return c.subarray(0,e);}
function Sr(a,b){var c,d,e,f,g;if(A5P){c=(!EY(b,ER)?null:b.pt()).buffer;d=b.h;e=b.g-d|0;return new $rt_globals.Int32Array(c,d,e);}if((b.g-b.h|0)>a.hw.length)a.hw=new $rt_globals.Int32Array(b.g-b.h|0);e=b.h;d=0;while(true){f=b.g;if(e>=f)break;c=a.hw;g=b.ov(e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.hw;e=f-b.h|0;return c.subarray(0,e);}
function LE(a,b){var c,d,e,f,g;if(A5P)return !EY(b,ER)?null:b.bl.data;if((b.g-b.h|0)>a.md.length)a.md=new $rt_globals.Int8Array(b.g-b.h|0);c=b.h;d=0;while(true){e=b.g;if(c>=e)break;f=a.md;g=Td(b,c);d;f[d]=g;c=c+1|0;d=d+1|0;}f=a.md;c=e-b.h|0;return f.subarray(0,c);}
function AUn(a,b){if((b.g-b.h|0)>a.hw.length)a.hw=new $rt_globals.Int32Array(b.g-b.h|0);}
function AET(a,b){var c,d,e,f,g;c=a.dF;d=a.em;if(!d)c=!c.V?null:c.S;else{e=c.Q;f=V(Bc(Bb(M(d),F(2135587861, 2654435769)),c.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.U;}}c=f<0?null:c.R.data[f];}c=c;if(!b)c=!c.V?null:c.S;else{e=c.Q;d=V(Bc(Bb(M(b),F(2135587861, 2654435769)),c.X));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.U;}}c=d<0?null:c.R.data[d];}BM();return c===null?null:c[A5n]===true?c:c.bb;}
function ALl(a,b,c){var d,e,f,g,h,i;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();h=d===null?null:d[A5n]===true?d:d.bb;d=a.c6;if(!c)d=!d.V?null:d.S;else{e=d.Q;b=V(Bc(Bb(M(c),F(2135587861, 2654435769)),d.X));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.U;}}d=b<0?null:d.R.data[b];}i=d===null?null:d[A5n]===true?d:d.bb;a.l.attachShader(h,
i);}
function AUQ(a,b,c){var d,e,f,g,h;d=a.l;e=a.eh;if(!c)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(c),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.bindBuffer(b,e);}
function AH5(a,b,c){var d,e,f,g,h;d=a.l;e=a.iM;if(!c)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(c),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.bindTexture(b,e);}
function AKQ(a,b,c,d,e){a.l.blendFuncSeparate(b,c,d,e);}
function O2(a,b,c,d,e){var f,g;if(d instanceof EX){f=a.l;d=MB(a,d);f.bufferData(b,d,e);}else if(d instanceof Hx){f=a.l;d=Sr(a,d);f.bufferData(b,d,e);}else if(d instanceof HA){f=a.l;d=P4(a,d);f.bufferData(b,d,e);}else if(d instanceof FD){f=a.l;g=LE(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Ba;f.c=1;f.d=1;f.f=B(135);G(f);}a.l.bufferData(b,c,e);}}
function O1(a,b,c,d,e){var f,g;if(e instanceof EX){f=a.l;e=MB(a,e);f.bufferSubData(b,c,e);}else if(e instanceof Hx){f=a.l;g=Sr(a,e);f.bufferSubData(b,c,g);}else if(e instanceof HA){f=a.l;e=P4(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof FD)){f=new Ba;f.c=1;f.d=1;f.f=B(135);G(f);}f=a.l;e=LE(a,e);f.bufferSubData(b,c,e);}}
function AS1(a,b){a.l.clear(b);}
function AIh(a,b,c,d,e){a.l.clearColor(b,c,d,e);}
function AL_(a,b){var c,d,e,f;c=a.c6;if(!b)c=!c.V?null:c.S;else{d=c.Q;e=V(Bc(Bb(M(b),F(2135587861, 2654435769)),c.X));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.U;}}c=e<0?null:c.R.data[e];}BM();c=c===null?null:c[A5n]===true?c:c.bb;a.l.compileShader(c);}
function AVy(a){var b,c;b=a.l.createProgram();c=a.hs;a.hs=c+1|0;CP(a.cj,c,CY(b));return c;}
function AQD(a,b){var c,d;c=a.l.createShader(b);d=a.hc;a.hc=d+1|0;CP(a.c6,d,CY(c));return d;}
function AS2(a,b){a.l.depthMask(!!b);}
function AQo(a,b){a.l.disable(b);}
function APd(a,b){a.l.disableVertexAttribArray(b);}
function AIW(a,b,c,d){a.l.drawArrays(b,c,d);}
function AMO(a,b,c,d,e){var f,g;f=a.l;g=e.h;f.drawElements(b,c,d,g);}
function AOP(a,b,c,d,e){a.l.drawElements(b,c,d,e);}
function AUz(a,b){a.l.enable(b);}
function ATA(a,b){a.l.enableVertexAttribArray(b);}
function XN(a){var b,c;b=a.l.createBuffer();c=a.dr;a.dr=c+1|0;CP(a.eh,c,CY(b));return c;}
function AER(a,b){a.l.generateMipmap(b);}
function AUM(a){var b,c;b=a.l.createTexture();c=a.ko;a.ko=c+1|0;CP(a.iM,c,CY(b));return c;}
function Nr(a,b,c,d,e){var f,g,h,i,j;f=a.l;g=a.cj;if(!b)g=!g.V?null:g.S;else{h=g.Q;i=V(Bc(Bb(M(b),F(2135587861, 2654435769)),g.X));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.U;}}g=i<0?null:g.R.data[i];}BM();g=g===null?null:g[A5n]===true?g:g.bb;g=f.getActiveAttrib(g,c);ET(d,g.size);ET(e,g.type);d.h=0;d.g=d.J;d.B=(-1);e.h=0;e.g=e.J;e.B=(-1);return $rt_str(g.name);}
function PQ(a,b,c,d,e){var f,g,h,i,j;f=a.l;g=a.cj;if(!b)g=!g.V?null:g.S;else{h=g.Q;i=V(Bc(Bb(M(b),F(2135587861, 2654435769)),g.X));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.U;}}g=i<0?null:g.R.data[i];}BM();g=g===null?null:g[A5n]===true?g:g.bb;g=f.getActiveUniform(g,c);ET(d,g.size);ET(e,g.type);d.h=0;d.g=d.J;d.B=(-1);e.h=0;e.g=e.J;e.B=(-1);return $rt_str(g.name);}
function AJ0(a,b,c){var d,e,f,g,h;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();h=d===null?null:d[A5n]===true?d:d.bb;return a.l.getAttribLocation(h,$rt_ustr(c));}
function Lz(a,b,c){if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new Ba;c.c=1;c.d=1;c.f=B(136);G(c);}Mx(c,0,a.l.getParameter(b));c.h=0;c.g=c.J;c.B=(-1);}
function AVp(a,b){var c,d,e,f,g;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;return $rt_str(c.getProgramInfoLog(d));}
function Qw(a,b,c,d){var e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.l;f=a.cj;if(!b)f=!f.V?null:f.S;else{g=f.Q;h=V(Bc(Bb(M(b),F(2135587861, 2654435769)),f.X));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.U;}}f=h<0?null:f.R.data[h];}BM();f=f===null?null:f[A5n]===true?f:f.bb;ET(d,e.getProgramParameter(f,c));}else{f=a.l;e=a.cj;if(!b)e=!e.V?null:e.S;else{g=e.Q;h=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.U;}}e=h<0?null:e.R.data[h];}BM();e=e===null?null:e[A5n]===true?e:e.bb;ET(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.h=0;d.g=d.J;d.B=(-1);}
function ANj(a,b){var c,d,e,f,g;c=a.l;d=a.c6;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;return $rt_str(c.getShaderInfoLog(d));}
function Oj(a,b,c,d){var e,f,g,h,i;if(c!=35713&&c!=35712){e=a.l;f=a.c6;if(!b)f=!f.V?null:f.S;else{g=f.Q;h=V(Bc(Bb(M(b),F(2135587861, 2654435769)),f.X));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.U;}}f=h<0?null:f.R.data[h];}BM();f=f===null?null:f[A5n]===true?f:f.bb;ET(d,e.getShaderParameter(f,c));}else{f=a.l;e=a.c6;if(!b)e=!e.V?null:e.S;else{g=e.Q;h=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h=(h
+1|0)&e.U;}}e=h<0?null:e.R.data[h];}BM();e=e===null?null:e[A5n]===true?e:e.bb;ET(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.h=0;d.g=d.J;d.B=(-1);}
function AKF(a,b){return $rt_str(a.l.getParameter(b));}
function AKA(a,b,c){var d,e,f,g,h;d=a.l;e=a.cj;if(!b)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d=d.getUniformLocation(e,$rt_ustr(c));if(d===null)return (-1);c=a.dF;if(!b)c=!c.V?null:c.S;else{f=c.Q;h=V(Bc(Bb(M(b),F(2135587861, 2654435769)),c.X));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
c.U;}}c=h<0?null:c.R.data[h];}c=c;if(c===null){c=DW(51,0.800000011920929);CP(a.dF,b,c);}h=a.hM;a.hM=h+1|0;CP(c,h,CY(d));return h;}
function AGK(a,b){var c,d,e,f,g;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.linkProgram(d);}
function AIV(a,b,c){a.l.pixelStorei(b,c);}
function AEQ(a,b,c){var d,e,f,g,h;d=a.l;e=a.c6;if(!b)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.shaderSource(e,$rt_ustr(c));}
function QN(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s;if(j===null){j=a.l;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.g>4){if(!A5P)l=!(j instanceof EX)?$rt_globals.Uint8Array.from(LE(a,j)):MB(a,j);else{m=!EY(j,ER)?null:j.bl.data;if(!(j instanceof EX)){n=j.g-j.h|0;o=m.byteOffset+j.h|0;l=new $rt_globals.Uint8Array(m.buffer,o,n);}else{n=j.g-j.h|0;o=m.byteOffset+j.h|0;l=new $rt_globals.Float32Array(m.buffer,o,n);}}a.l.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=ACn(j,0);JE();j=A4X;if(!p)j=!j.V?null:j.S;else{q=j.Q;n
=V(Bc(Bb(M(p),F(2135587861, 2654435769)),j.X));a:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break a;}if(o==p)break;n=(n+1|0)&j.U;}}j=n<0?null:j.R.data[n];}k=j;r=k.fO;if(r===null&&k.bO!==null?1:0){j=a.l;s=k.bO.lU;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.iR!==null?1:0){j=a.l;s=k.iR;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.kd!==null?1:0){j=a.l;s=k.kd;j.texImage2D(b,c,d,h,i,s);}else{j=a.l;FR(k);s=k.fO;j.texImage2D(b,c,d,h,i,s);}}}
function AOb(a,b,c,d){a.l.texParameterf(b,c,d);}
function AP2(a,b,c,d){var e,f;e=a.l;f=d;e.texParameterf(b,c,f);}
function AQn(a,b,c){var d,e,f,g,h,i;d=a.dF;e=a.em;if(!e)d=!d.V?null:d.S;else{f=d.Q;g=V(Bc(Bb(M(e),F(2135587861, 2654435769)),d.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.U;}}d=g<0?null:d.R.data[g];}d=d;if(!b)d=!d.V?null:d.S;else{f=d.Q;g=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.U;}}d=g<0?null:d.R.data[g];}BM();i=d===null?null:d[A5n]===true?d:d.bb;a.l.uniform1i(i,c);}
function AKE(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;g=a.dF;f=a.em;if(!f)g=!g.V?null:g.S;else{h=g.Q;i=V(Bc(Bb(M(f),F(2135587861, 2654435769)),g.X));a:{while(true){c=h.data[i];if(!c){i= -(i+1|0)|0;break a;}if(c==f)break;i=(i+1|0)&g.U;}}g=i<0?null:g.R.data[i];}g=g;if(!b)g=!g.V?null:g.S;else{h=g.Q;c=V(Bc(Bb(M(b),F(2135587861, 2654435769)),g.X));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.U;}}g=c<0?null:g.R.data[c];}BM();j=g===null?null:g[A5n]===true?g:g.bb;g=a.l;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new $rt_globals.Array(b);c=0;while(c<b){n=e[c];c;m[c]=n;c=c+1|0;}}g[k](j,l,m);}
function AGN(a,b){var c,d,e,f,g;a.em=b;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.useProgram(d);}
function ANK(a,b,c,d,e,f,g){a.l.vertexAttribPointer(b,c,d,!!e,f,g);}
function AFd(a,b,c,d,e){a.l.viewport(b,c,d,e);}
var P9=I(0);
function Mz(){var a=this;II.call(a);a.bj=null;a.Ev=null;a.DD=0;a.zB=null;a.Ac=0;a.Bq=null;a.yT=0;a.lB=null;a.lg=0;a.CU=null;}
function AZm(a){var b=new Mz();Tc(b,a);return b;}
function Tc(a,b){QC(a,b);a.Ev=DW(51,0.800000011920929);a.DD=1;a.zB=DW(51,0.800000011920929);a.Ac=1;a.Bq=DW(51,0.800000011920929);a.yT=1;a.lB=DW(51,0.800000011920929);a.lg=1;a.CU=new $rt_globals.Uint32Array(12000);a.bj=b;}
function AK1(a,b){var c,d,e,f,g;c=a.bj;d=a.lB;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.bindVertexArray(d);}
function AO3(a,b,c,d,e){a.bj.drawArraysInstanced(b,c,d,e);}
function AVX(a,b,c,d,e,f){a.bj.drawElementsInstanced(b,c,d,e,f);}
function APC(a,b,c){var d,e,f,g;d=c.h;e=0;while(e<b){f=a.bj.createVertexArray();g=a.lg;a.lg=g+1|0;CP(a.lB,g,CY(f));ET(c,g);e=e+1|0;}B_(c,d);}
function AMX(a,b,c){if(b!=34045)Lz(a,b,c);else{Mx(c,0,a.bj.getParameter(b));c.h=0;c.g=c.J;c.B=(-1);}}
var NA=I(Mz);
function AJ7(a,b){var c,d,e,f,g,h,i,j;c=a.bj;d=a.lB;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.bindVertexArray(d);b=a.bj.getError();if(!b)return;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,0,f);c.c=1;c.d
=1;c.f=i;G(c);}
function AHp(a,b,c,d,e){var f,g,h,i,j,k;a.bj.drawArraysInstanced(b,c,d,e);b=a.bj.getError();if(!b)return;f=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);f.c=1;f.d=1;f.f=i;G(f);}
function AUK(a,b,c,d,e,f){var g,h,i,j,k,l;a.bj.drawElementsInstanced(b,c,d,e,f);b=a.bj.getError();if(!b)return;g=new Ba;h=Bv(b,4);i=new N;i.b=D(16);H(i,i.a,B(137));P(i,i.a,b,10);H(i,i.a,B(59));b=i.a;if(h===null)h=B(2);H(i,b,h);j=new L;k=i.b;c=i.a;O();l=D(c);j.e=l;K(k,0,l,0,c);g.c=1;g.d=1;g.f=j;G(g);}
function AGA(a,b,c){var d,e,f,g,h,i,j,k;d=c.h;e=0;while(e<b){f=a.bj.createVertexArray();g=a.lg;a.lg=g+1|0;CP(a.lB,g,CY(f));ET(c,g);e=e+1|0;}B_(c,d);b=a.bj.getError();if(!b)return;c=new Ba;h=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(h===null)h=B(2);H(f,b,h);i=new L;j=f.b;e=f.a;O();k=D(e);i.e=k;K(j,0,k,0,e);c.c=1;c.d=1;c.f=i;G(c);}
function AHk(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.iM;if(!c)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(c),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.bindTexture(b,e);b=a.bj.getError();if(!b)return;d=new Ba;i=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(i===null)i=B(2);H(e,b,i);j=new L;f=e.b;c=e.a;O();k=D(c);j.e=k;K(f,0,k,0,c);d.c=1;d.d
=1;d.f=j;G(d);}
function AS5(a,b){var c,d,e,f,g,h,i;a.l.clear(b);b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AOf(a,b,c,d,e){var f,g,h,i,j,k,l,m;a.l.clearColor(b,c,d,e);f=a.bj.getError();if(!f)return;g=new Ba;h=Bv(f,4);i=new N;i.b=D(16);H(i,i.a,B(137));P(i,i.a,f,10);H(i,i.a,B(59));f=i.a;if(h===null)h=B(2);H(i,f,h);j=new L;k=i.b;l=i.a;O();m=D(l);j.e=m;K(k,0,m,0,l);g.c=1;g.d=1;g.f=j;G(g);}
function AGx(a,b){var c,d,e,f,g,h,i;a.l.depthMask(!!b);b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function ATF(a,b){var c,d,e,f,g,h,i;a.l.disable(b);b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AJA(a,b,c,d){var e,f,g,h,i,j;a.l.drawArrays(b,c,d);b=a.bj.getError();if(!b)return;e=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}
function AQQ(a,b,c,d,e){var f,g,h,i,j,k;f=a.l;g=e.h;f.drawElements(b,c,d,g);b=a.bj.getError();if(!b)return;e=new Ba;h=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(h===null)h=B(2);H(f,b,h);i=new L;j=f.b;c=f.a;O();k=D(c);i.e=k;K(j,0,k,0,c);e.c=1;e.d=1;e.f=i;G(e);}
function ARY(a,b){var c,d,e,f,g,h,i;a.l.enable(b);b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AEE(a,b){return $rt_str(a.l.getParameter(b));}
function AFC(a,b,c){var d,e,f,g,h,i;a.l.pixelStorei(b,c);b=a.bj.getError();if(!b)return;d=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function AOF(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o;QN(a,b,c,d,e,f,g,h,i,j);b=a.bj.getError();if(!b)return;j=new Ba;k=Bv(b,4);l=new N;l.b=D(16);H(l,l.a,B(137));P(l,l.a,b,10);H(l,l.a,B(59));b=l.a;if(k===null)k=B(2);H(l,b,k);m=new L;n=l.b;c=l.a;O();o=D(c);m.e=o;K(n,0,o,0,c);j.c=1;j.d=1;j.f=m;G(j);}
function AJn(a,b,c,d){var e,f,g,h,i,j;a.l.texParameterf(b,c,d);b=a.bj.getError();if(!b)return;e=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}
function AKU(a,b,c,d,e){var f,g,h,i,j,k;a.l.viewport(b,c,d,e);b=a.bj.getError();if(!b)return;f=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);f.c=1;f.d=1;f.f=i;G(f);}
function ANo(a,b,c){var d,e,f,g,h,i,j,k;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();h=d===null?null:d[A5n]===true?d:d.bb;d=a.c6;if(!c)d=!d.V?null:d.S;else{e=d.Q;b=V(Bc(Bb(M(c),F(2135587861, 2654435769)),d.X));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.U;}}d=b<0?null:d.R.data[b];}i=d===null?null:d[A5n]===true?d:
d.bb;a.l.attachShader(h,i);b=a.bj.getError();if(!b)return;d=new Ba;j=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(j===null)j=B(2);H(h,b,j);i=new L;e=h.b;c=h.a;O();k=D(c);i.e=k;K(e,0,k,0,c);d.c=1;d.d=1;d.f=i;G(d);}
function AUj(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.eh;if(!c)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(c),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.bindBuffer(b,e);b=a.bj.getError();if(!b)return;d=new Ba;i=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(i===null)i=B(2);H(e,b,i);j=new L;f=e.b;c=e.a;O();k=D(c);j.e=k;K(f,0,k,0,c);d.c=1;d.d=
1;d.f=j;G(d);}
function AJ9(a,b,c,d,e){var f,g,h,i,j,k;a.l.blendFuncSeparate(b,c,d,e);b=a.bj.getError();if(!b)return;f=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);f.c=1;f.d=1;f.f=i;G(f);}
function AOv(a,b,c,d,e){var f,g,h,i,j;O2(a,b,c,d,e);b=a.bj.getError();if(!b)return;d=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);d.c=1;d.d=1;d.f=h;G(d);}
function AUe(a,b,c,d,e){var f,g,h,i,j;O1(a,b,c,d,e);b=a.bj.getError();if(!b)return;e=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}
function APr(a,b){var c,d,e,f,g,h,i,j;c=a.c6;if(!b)c=!c.V?null:c.S;else{d=c.Q;e=V(Bc(Bb(M(b),F(2135587861, 2654435769)),c.X));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.U;}}c=e<0?null:c.R.data[e];}BM();g=c===null?null:c[A5n]===true?c:c.bb;a.l.compileShader(g);b=a.bj.getError();if(!b)return;c=new Ba;h=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(h===null)h=B(2);H(g,b,h);i=new L;d=g.b;e=g.a;O();j=D(e);i.e=j;K(d,0,j,0,e);c.c=1;c.d=1;c.f
=i;G(c);}
function AVw(a){var b,c,d,e,f,g,h,i;b=a.l.createProgram();c=a.hs;a.hs=c+1|0;CP(a.cj,c,CY(b));d=a.bj.getError();if(!d)return c;b=new Ba;e=Bv(d,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,d,10);H(f,f.a,B(59));d=f.a;if(e===null)e=B(2);H(f,d,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);b.c=1;b.d=1;b.f=g;G(b);}
function AQ7(a,b){var c,d,e,f,g,h,i;c=a.l.createShader(b);d=a.hc;a.hc=d+1|0;CP(a.c6,d,CY(c));b=a.bj.getError();if(!b)return d;c=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;d=f.a;O();i=D(d);g.e=i;K(h,0,i,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function AVl(a,b){var c,d,e,f,g,h,i;a.l.disableVertexAttribArray(b);b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AGY(a,b,c,d,e){var f,g,h,i,j,k;a.l.drawElements(b,c,d,e);b=a.bj.getError();if(!b)return;f=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);f.c=1;f.d=1;f.f=i;G(f);}
function AQ_(a,b){var c,d,e,f,g,h,i;a.l.enableVertexAttribArray(b);b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AS8(a,b){var c,d,e,f,g,h,i;a.l.generateMipmap(b);b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AL3(a,b,c,d,e){var f,g,h,i;f=Nr(a,b,c,d,e);b=a.bj.getError();if(!b)return f;d=new Ba;g=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(g===null)g=B(2);H(e,b,g);f=new L;h=e.b;c=e.a;O();i=D(c);f.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=f;G(d);}
function AS3(a,b,c,d,e){var f,g,h,i;f=PQ(a,b,c,d,e);b=a.bj.getError();if(!b)return f;d=new Ba;g=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(g===null)g=B(2);H(e,b,g);f=new L;h=e.b;c=e.a;O();i=D(c);f.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=f;G(d);}
function AOS(a,b,c){var d,e,f,g,h,i,j;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();h=d===null?null:d[A5n]===true?d:d.bb;b=a.l.getAttribLocation(h,$rt_ustr(c));f=a.bj.getError();if(!f)return b;c=new Ba;i=Bv(f,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,f,10);H(d,d.a,B(59));b=d.a;if(i===null)i=B(2);H(d,b,i);h=new L;e=d.b;f=d.a;O();j=D(f);h.e=j;K(e,0,j,
0,f);c.c=1;c.d=1;c.f=h;G(c);}
function AKc(a,b,c){var d,e,f,g,h,i;if(b!=34045)Lz(a,b,c);else{Mx(c,0,a.bj.getParameter(b));c.h=0;c.g=c.J;c.B=(-1);}b=a.bj.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AIm(a,b,c,d){var e,f,g,h,i;Qw(a,b,c,d);b=a.bj.getError();if(!b)return;d=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function AFB(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c=$rt_str(c.getProgramInfoLog(d));b=a.bj.getError();if(!b)return c;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,
0,f);c.c=1;c.d=1;c.f=i;G(c);}
function AVu(a,b,c,d){var e,f,g,h,i;Oj(a,b,c,d);b=a.bj.getError();if(!b)return;d=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function AGh(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.c6;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c=$rt_str(c.getShaderInfoLog(d));b=a.bj.getError();if(!b)return c;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,
0,f);c.c=1;c.d=1;c.f=i;G(c);}
function AFD(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.cj;if(!b)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;c=d.getUniformLocation(e,$rt_ustr(c));if(c===null)h=(-1);else{d=a.dF;if(!b)d=!d.V?null:d.S;else{f=d.Q;h=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1
|0)&d.U;}}d=h<0?null:d.R.data[h];}d=d;if(d===null){d=DW(51,0.800000011920929);CP(a.dF,b,d);}h=a.hM;a.hM=h+1|0;CP(d,h,CY(c));}b=a.bj.getError();if(!b)return h;c=new Ba;i=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(i===null)i=B(2);H(d,b,i);e=new L;f=d.b;h=d.a;O();j=D(h);e.e=j;K(f,0,j,0,h);c.c=1;c.d=1;c.f=e;G(c);}
function AUD(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.linkProgram(d);b=a.bj.getError();if(!b)return;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;G(c);}
function AFy(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.c6;if(!b)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.shaderSource(e,$rt_ustr(c));b=a.bj.getError();if(!b)return;c=new Ba;i=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(i===null)i=B(2);H(d,b,i);e=new L;f=d.b;g=d.a;O();j=D(g);e.e=j;K(f,0,j,0,g);c.c
=1;c.d=1;c.f=e;G(c);}
function AGI(a,b,c,d){var e,f,g,h,i,j,k;e=a.l;f=d;e.texParameterf(b,c,f);b=a.bj.getError();if(!b)return;e=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);e.c=1;e.d=1;e.f=i;G(e);}
function AHE(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.dF;e=a.em;if(!e)d=!d.V?null:d.S;else{f=d.Q;g=V(Bc(Bb(M(e),F(2135587861, 2654435769)),d.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.U;}}d=g<0?null:d.R.data[g];}d=d;if(!b)d=!d.V?null:d.S;else{f=d.Q;e=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));b:{while(true){h=f.data[e];if(!h){e= -(e+1|0)|0;break b;}if(h==b)break;e=(e+1|0)&d.U;}}d=e<0?null:d.R.data[e];}BM();i=d===null?null:d[A5n]===true?d:d.bb;a.l.uniform1i(i,c);b=a.bj.getError();if
(!b)return;d=new Ba;i=Bv(b,4);j=new N;j.b=D(16);H(j,j.a,B(137));P(j,j.a,b,10);H(j,j.a,B(59));b=j.a;if(i===null)i=B(2);H(j,b,i);k=new L;f=j.b;c=j.a;O();l=D(c);k.e=l;K(f,0,l,0,c);d.c=1;d.d=1;d.f=k;G(d);}
function AV5(a,b){var c,d,e,f,g,h,i,j;a.em=b;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.useProgram(d);b=a.bj.getError();if(!b)return;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,0,f);c.c=1;c.d
=1;c.f=i;G(c);}
function ARB(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.l.vertexAttribPointer(b,c,d,!!e,f,g);b=a.bj.getError();if(!b)return;h=new Ba;i=Bv(b,4);j=new N;j.b=D(16);H(j,j.a,B(137));P(j,j.a,b,10);H(j,j.a,B(59));b=j.a;if(i===null)i=B(2);H(j,b,i);k=new L;l=j.b;c=j.a;O();m=D(c);k.e=m;K(l,0,m,0,c);h.c=1;h.d=1;h.f=k;G(h);}
function OV(){var a=this;C.call(a);a.sO=0;a.rA=0;a.rT=0;a.y8=null;a.Bu=null;a.g8=null;a.yJ=B(138);}
function A6a(a,b,c,d){var e=new OV();Yz(e,a,b,c,d);return e;}
function Yz(a,b,c,d,e){a.yJ=B(138);MT();if(b===A6b){GH();a.g8=A6c;}else if(b===A6d){GH();a.g8=A6c;}else if(b===A6e){GH();a.g8=A6f;}else if(b===A6g){GH();a.g8=A6f;}else if(b!==A5$){GH();a.g8=A6h;}else{GH();a.g8=A6i;}b=a.g8;GH();if(b===A6c)K5(a,B(139),c);else if(b===A6i)K5(a,B(140),c);else if(b===A6f)K5(a,B(141),c);else{a.sO=(-1);a.rA=(-1);a.rT=(-1);d=B(43);e=B(43);}a.y8=d;a.Bu=e;}
function K5(a,b,c){var d,e,f,g,h,i,j,k,l;d=O3(GQ(b,0),c);if(HO(d)){b=d.dI;e=b.dG;if(!e){b=new B2;b.c=1;b.d=1;C3(b);G(b);}f=Bw(1,b.er);if(f>=0){b=new Bh;O();c=new N;Di(c);c.b=D(16);P(c,c.a,1,10);g=new L;h=c.b;i=c.a;j=D(i);g.e=j;K(h,0,j,0,i);b.c=1;b.d=1;b.f=g;G(b);}h=b.ca.data;if(h[2]<0)g=null;else{c=b.hK;if(!e){b=new B2;b.c=1;b.d=1;C3(b);G(b);}if(f>=0){b=new Bh;O();c=new N;Di(c);c.b=D(16);P(c,c.a,1,10);Sw(b,C$(c));G(b);}g=FZ(c,h[2],YA(b,1));}h=(YE(g,B(142))).data;a.sO=KZ(a,h[0],2);k=h.length;a.rA=k<2?0:KZ(a,
h[1],0);a.rT=k<3?0:KZ(a,h[2],0);}else{g=A4c;b=new N;b.b=D(16);H(b,b.a,B(143));H(b,b.a,c);l=new L;h=b.b;i=b.a;O();j=D(i);l.e=j;K(h,0,j,0,i);if(g.ji>=2){if(A5X===null){c=new Dd;c.cI=A0G;b=new N;b.b=D(16);c.bs=b;c.cE=D(32);c.cO=0;Dc();c.cM=A5s;A5X=c;}g=A5X;b=new N;b.b=D(16);H(b,b.a,B(138));H(b,b.a,B(72));H(b,b.a,l);c=new L;h=b.b;i=b.a;j=D(i);c.e=j;K(h,0,j,0,i);b=g.bs;H(b,b.a,c);i=b.a;Bo(b,i,i+1|0);b.b.data[i]=10;C7(g);}a.sO=2;a.rA=0;a.rT=0;}}
function KZ(a,b,c){var d,e,f,g,h,i,j,$$je;a:{try{d=C1(b);}catch($$e){$$je=BJ($$e);if($$je instanceof CG){break a;}else{throw $$e;}}return d;}e=A4c;f=new N;f.b=D(16);H(f,f.a,B(144));H(f,f.a,b);H(f,f.a,B(145));P(f,f.a,c,10);b=new L;g=f.b;h=f.a;O();i=D(h);b.e=i;K(g,0,i,0,h);if(e.ji>=1){if(A5r===null){e=new Dd;e.cI=A0H;f=new N;f.b=D(16);e.bs=f;e.cE=D(32);e.cO=0;Dc();e.cM=A5s;A5r=e;}e=A5r;f=new N;f.b=D(16);H(f,f.a,B(146));H(f,f.a,B(72));H(f,f.a,b);b=new L;i=f.b;h=f.a;g=D(h);b.e=g;K(i,0,g,0,h);j=e.bs;H(j,j.a,b);h
=j.a;Bo(j,h,h+1|0);j.b.data[h]=10;C7(e);}return c;}
var DI=I(BQ);
var A6b=null;var A6e=null;var A6j=null;var A6g=null;var A5$=null;var A6d=null;var A6k=null;function MT(){MT=Bi(DI);AIL();}
function AIL(){var b,c,d,e,f,g;b=new DI;MT();b.u=B(4);b.n=0;A6b=b;c=new DI;c.u=B(147);c.n=1;A6e=c;d=new DI;d.u=B(148);d.n=2;A6j=d;e=new DI;e.u=B(149);e.n=3;A6g=e;f=new DI;f.u=B(150);f.n=4;A5$=f;g=new DI;g.u=B(151);g.n=5;A6d=g;A6k=U(DI,[b,c,d,e,f,g]);}
var Rg=I(0);
function Q3(){C.call(this);this.ze=null;}
function AJr(a){}
var Sq=I(II);
function AU4(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.iM;if(!c)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(c),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.bindTexture(b,e);b=a.l.getError();if(!b)return;d=new Ba;i=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(i===null)i=B(2);H(e,b,i);j=new L;f=e.b;c=e.a;O();k=D(c);j.e=k;K(f,0,k,0,c);d.c=1;d.d=
1;d.f=j;G(d);}
function AIu(a,b){var c,d,e,f,g,h,i;a.l.clear(b);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AJj(a,b,c,d,e){var f,g,h,i,j,k,l,m;a.l.clearColor(b,c,d,e);f=a.l.getError();if(!f)return;g=new Ba;h=Bv(f,4);i=new N;i.b=D(16);H(i,i.a,B(137));P(i,i.a,f,10);H(i,i.a,B(59));f=i.a;if(h===null)h=B(2);H(i,f,h);j=new L;k=i.b;l=i.a;O();m=D(l);j.e=m;K(k,0,m,0,l);g.c=1;g.d=1;g.f=j;G(g);}
function AOt(a,b){var c,d,e,f,g,h,i;a.l.depthMask(!!b);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AVI(a,b){var c,d,e,f,g,h,i;a.l.disable(b);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AL$(a,b,c,d){var e,f,g,h,i,j;a.l.drawArrays(b,c,d);b=a.l.getError();if(!b)return;e=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}
function AVc(a,b,c,d,e){var f,g,h,i,j,k;f=a.l;g=e.h;f.drawElements(b,c,d,g);b=a.l.getError();if(!b)return;e=new Ba;h=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(h===null)h=B(2);H(f,b,h);i=new L;j=f.b;c=f.a;O();k=D(c);i.e=k;K(j,0,k,0,c);e.c=1;e.d=1;e.f=i;G(e);}
function AG2(a,b){var c,d,e,f,g,h,i;a.l.enable(b);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function ANd(a,b){return $rt_str(a.l.getParameter(b));}
function APw(a,b,c){var d,e,f,g,h,i;a.l.pixelStorei(b,c);b=a.l.getError();if(!b)return;d=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function AKe(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o;QN(a,b,c,d,e,f,g,h,i,j);b=a.l.getError();if(!b)return;j=new Ba;k=Bv(b,4);l=new N;l.b=D(16);H(l,l.a,B(137));P(l,l.a,b,10);H(l,l.a,B(59));b=l.a;if(k===null)k=B(2);H(l,b,k);m=new L;n=l.b;c=l.a;O();o=D(c);m.e=o;K(n,0,o,0,c);j.c=1;j.d=1;j.f=m;G(j);}
function AJJ(a,b,c,d){var e,f,g,h,i,j;a.l.texParameterf(b,c,d);b=a.l.getError();if(!b)return;e=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}
function AVr(a,b,c,d,e){var f,g,h,i,j,k;a.l.viewport(b,c,d,e);b=a.l.getError();if(!b)return;f=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);f.c=1;f.d=1;f.f=i;G(f);}
function AFv(a,b,c){var d,e,f,g,h,i,j,k;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();h=d===null?null:d[A5n]===true?d:d.bb;d=a.c6;if(!c)d=!d.V?null:d.S;else{e=d.Q;b=V(Bc(Bb(M(c),F(2135587861, 2654435769)),d.X));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.U;}}d=b<0?null:d.R.data[b];}i=d===null?null:d[A5n]===true?d:
d.bb;a.l.attachShader(h,i);b=a.l.getError();if(!b)return;d=new Ba;j=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(j===null)j=B(2);H(h,b,j);i=new L;e=h.b;c=h.a;O();k=D(c);i.e=k;K(e,0,k,0,c);d.c=1;d.d=1;d.f=i;G(d);}
function AED(a,b,c){var d,e,f,g,h,i,j,k;d=a.l;e=a.eh;if(!c)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(c),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.bindBuffer(b,e);b=a.l.getError();if(!b)return;d=new Ba;i=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(i===null)i=B(2);H(e,b,i);j=new L;f=e.b;c=e.a;O();k=D(c);j.e=k;K(f,0,k,0,c);d.c=1;d.d=1;d.f
=j;G(d);}
function AEA(a,b,c,d,e){var f,g,h,i,j,k;a.l.blendFuncSeparate(b,c,d,e);b=a.l.getError();if(!b)return;f=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);f.c=1;f.d=1;f.f=i;G(f);}
function AML(a,b,c,d,e){var f,g,h,i,j;O2(a,b,c,d,e);b=a.l.getError();if(!b)return;d=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);d.c=1;d.d=1;d.f=h;G(d);}
function AK2(a,b,c,d,e){var f,g,h,i,j;O1(a,b,c,d,e);b=a.l.getError();if(!b)return;e=new Ba;f=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(f===null)f=B(2);H(g,b,f);h=new L;i=g.b;c=g.a;O();j=D(c);h.e=j;K(i,0,j,0,c);e.c=1;e.d=1;e.f=h;G(e);}
function AVR(a,b){var c,d,e,f,g,h,i,j;c=a.c6;if(!b)c=!c.V?null:c.S;else{d=c.Q;e=V(Bc(Bb(M(b),F(2135587861, 2654435769)),c.X));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.U;}}c=e<0?null:c.R.data[e];}BM();g=c===null?null:c[A5n]===true?c:c.bb;a.l.compileShader(g);b=a.l.getError();if(!b)return;c=new Ba;h=Bv(b,4);g=new N;g.b=D(16);H(g,g.a,B(137));P(g,g.a,b,10);H(g,g.a,B(59));b=g.a;if(h===null)h=B(2);H(g,b,h);i=new L;d=g.b;e=g.a;O();j=D(e);i.e=j;K(d,0,j,0,e);c.c=1;c.d=1;c.f=
i;G(c);}
function APW(a){var b,c,d,e,f,g,h,i;b=a.l.createProgram();c=a.hs;a.hs=c+1|0;CP(a.cj,c,CY(b));d=a.l.getError();if(!d)return c;b=new Ba;e=Bv(d,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,d,10);H(f,f.a,B(59));d=f.a;if(e===null)e=B(2);H(f,d,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);b.c=1;b.d=1;b.f=g;G(b);}
function AVC(a,b){var c,d,e,f,g,h,i;c=a.l.createShader(b);d=a.hc;a.hc=d+1|0;CP(a.c6,d,CY(c));b=a.l.getError();if(!b)return d;c=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;d=f.a;O();i=D(d);g.e=i;K(h,0,i,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function APS(a,b){var c,d,e,f,g,h,i;a.l.disableVertexAttribArray(b);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function ALd(a,b,c,d,e){var f,g,h,i,j,k;a.l.drawElements(b,c,d,e);b=a.l.getError();if(!b)return;f=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);f.c=1;f.d=1;f.f=i;G(f);}
function AVJ(a,b){var c,d,e,f,g,h,i;a.l.enableVertexAttribArray(b);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AO1(a,b){var c,d,e,f,g,h,i;a.l.generateMipmap(b);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AMP(a,b,c,d,e){var f,g,h,i;f=Nr(a,b,c,d,e);b=a.l.getError();if(!b)return f;d=new Ba;g=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(g===null)g=B(2);H(e,b,g);f=new L;h=e.b;c=e.a;O();i=D(c);f.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=f;G(d);}
function AHn(a,b,c,d,e){var f,g,h,i;f=PQ(a,b,c,d,e);b=a.l.getError();if(!b)return f;d=new Ba;g=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(g===null)g=B(2);H(e,b,g);f=new L;h=e.b;c=e.a;O();i=D(c);f.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=f;G(d);}
function ALm(a,b,c){var d,e,f,g,h,i,j;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();h=d===null?null:d[A5n]===true?d:d.bb;b=a.l.getAttribLocation(h,$rt_ustr(c));f=a.l.getError();if(!f)return b;c=new Ba;i=Bv(f,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,f,10);H(d,d.a,B(59));b=d.a;if(i===null)i=B(2);H(d,b,i);h=new L;e=d.b;f=d.a;O();j=D(f);h.e=j;K(e,0,j,0,
f);c.c=1;c.d=1;c.f=h;G(c);}
function AFg(a,b,c){var d,e,f,g,h,i;Lz(a,b,c);b=a.l.getError();if(!b)return;c=new Ba;d=Bv(b,4);e=new N;e.b=D(16);H(e,e.a,B(137));P(e,e.a,b,10);H(e,e.a,B(59));b=e.a;if(d===null)d=B(2);H(e,b,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c.c=1;c.d=1;c.f=f;G(c);}
function AKj(a,b,c,d){var e,f,g,h,i;Qw(a,b,c,d);b=a.l.getError();if(!b)return;d=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function AKp(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c=$rt_str(c.getProgramInfoLog(d));b=a.l.getError();if(!b)return c;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,
0,f);c.c=1;c.d=1;c.f=i;G(c);}
function AFL(a,b,c,d){var e,f,g,h,i;Oj(a,b,c,d);b=a.l.getError();if(!b)return;d=new Ba;e=Bv(b,4);f=new N;f.b=D(16);H(f,f.a,B(137));P(f,f.a,b,10);H(f,f.a,B(59));b=f.a;if(e===null)e=B(2);H(f,b,e);g=new L;h=f.b;c=f.a;O();i=D(c);g.e=i;K(h,0,i,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function ARE(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.c6;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c=$rt_str(c.getShaderInfoLog(d));b=a.l.getError();if(!b)return c;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,0,
f);c.c=1;c.d=1;c.f=i;G(c);}
function ATl(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.cj;if(!b)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;c=d.getUniformLocation(e,$rt_ustr(c));if(c===null)h=(-1);else{d=a.dF;if(!b)d=!d.V?null:d.S;else{f=d.Q;h=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1
|0)&d.U;}}d=h<0?null:d.R.data[h];}d=d;if(d===null){d=DW(51,0.800000011920929);CP(a.dF,b,d);}h=a.hM;a.hM=h+1|0;CP(d,h,CY(c));}b=a.l.getError();if(!b)return h;c=new Ba;i=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(i===null)i=B(2);H(d,b,i);e=new L;f=d.b;h=d.a;O();j=D(h);e.e=j;K(f,0,j,0,h);c.c=1;c.d=1;c.f=e;G(c);}
function ANP(a,b){var c,d,e,f,g,h,i,j;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.linkProgram(d);b=a.l.getError();if(!b)return;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,0,f);c.c=1;c.d=1;c.f
=i;G(c);}
function AU_(a,b,c){var d,e,f,g,h,i,j;d=a.l;e=a.c6;if(!b)e=!e.V?null:e.S;else{f=e.Q;g=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.U;}}e=g<0?null:e.R.data[g];}BM();e=e===null?null:e[A5n]===true?e:e.bb;d.shaderSource(e,$rt_ustr(c));b=a.l.getError();if(!b)return;c=new Ba;i=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(i===null)i=B(2);H(d,b,i);e=new L;f=d.b;g=d.a;O();j=D(g);e.e=j;K(f,0,j,0,g);c.c
=1;c.d=1;c.f=e;G(c);}
function ATe(a,b,c,d){var e,f,g,h,i,j,k;e=a.l;f=d;e.texParameterf(b,c,f);b=a.l.getError();if(!b)return;e=new Ba;g=Bv(b,4);h=new N;h.b=D(16);H(h,h.a,B(137));P(h,h.a,b,10);H(h,h.a,B(59));b=h.a;if(g===null)g=B(2);H(h,b,g);i=new L;j=h.b;c=h.a;O();k=D(c);i.e=k;K(j,0,k,0,c);e.c=1;e.d=1;e.f=i;G(e);}
function AVv(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.dF;e=a.em;if(!e)d=!d.V?null:d.S;else{f=d.Q;g=V(Bc(Bb(M(e),F(2135587861, 2654435769)),d.X));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.U;}}d=g<0?null:d.R.data[g];}d=d;if(!b)d=!d.V?null:d.S;else{f=d.Q;e=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));b:{while(true){h=f.data[e];if(!h){e= -(e+1|0)|0;break b;}if(h==b)break;e=(e+1|0)&d.U;}}d=e<0?null:d.R.data[e];}BM();i=d===null?null:d[A5n]===true?d:d.bb;a.l.uniform1i(i,c);b=a.l.getError();if
(!b)return;d=new Ba;i=Bv(b,4);j=new N;j.b=D(16);H(j,j.a,B(137));P(j,j.a,b,10);H(j,j.a,B(59));b=j.a;if(i===null)i=B(2);H(j,b,i);k=new L;f=j.b;c=j.a;O();l=D(c);k.e=l;K(f,0,l,0,c);d.c=1;d.d=1;d.f=k;G(d);}
function AFM(a,b){var c,d,e,f,g,h,i,j;a.em=b;c=a.l;d=a.cj;if(!b)d=!d.V?null:d.S;else{e=d.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),d.X));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.U;}}d=f<0?null:d.R.data[f];}BM();d=d===null?null:d[A5n]===true?d:d.bb;c.useProgram(d);b=a.l.getError();if(!b)return;c=new Ba;h=Bv(b,4);d=new N;d.b=D(16);H(d,d.a,B(137));P(d,d.a,b,10);H(d,d.a,B(59));b=d.a;if(h===null)h=B(2);H(d,b,h);i=new L;e=d.b;f=d.a;O();j=D(f);i.e=j;K(e,0,j,0,f);c.c=1;c.d
=1;c.f=i;G(c);}
function AH_(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.l.vertexAttribPointer(b,c,d,!!e,f,g);b=a.l.getError();if(!b)return;h=new Ba;i=Bv(b,4);j=new N;j.b=D(16);H(j,j.a,B(137));P(j,j.a,b,10);H(j,j.a,B(59));b=j.a;if(i===null)i=B(2);H(j,b,i);k=new L;l=j.b;c=j.a;O();m=D(c);k.e=m;K(l,0,m,0,c);h.c=1;h.d=1;h.f=k;G(h);}
function AAX(){var a=this;C.call(a);a.fL=0;a.Q=null;a.R=null;a.S=null;a.V=0;a.uR=0.0;a.o5=0;a.X=0;a.U=0;}
function DW(a,b){var c=new AAX();AK0(c,a,b);return c;}
function AK0(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.uR=c;d=Mf(b,c);a.o5=d*c|0;b=d-1|0;a.U=b;a.X=Fg(M(b));a.Q=Y(d);a.R=Bt(C,d);return;}e=new Bg;f=new N;f.b=D(16);H(f,f.a,B(60));Ei(f,f.a,c);g=new L;h=f.b;d=f.a;O();i=D(d);g.e=i;K(h,0,i,0,d);e.c=1;e.d=1;e.f=g;G(e);}
function CP(a,b,c){var d,e,f,g,h;if(!b){d=a.S;a.S=c;if(!a.V){a.V=1;a.fL=a.fL+1|0;}return d;}e=a.Q;f=V(Bc(Bb(M(b),F(2135587861, 2654435769)),a.X));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.U;}}if(f>=0){e=a.R.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.R.data[f]=c;b=a.fL+1|0;a.fL=b;if(b>=a.o5)AB3(a,g.length<<1);return null;}
function MF(a,b){var c,d,e;if(!b)return !a.V?null:a.S;c=a.Q;d=V(Bc(Bb(M(b),F(2135587861, 2654435769)),a.X));a:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break a;}if(e==b)break;d=(d+1|0)&a.U;}}return d<0?null:a.R.data[d];}
function Iy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.V)return null;a.V=0;c=a.S;a.S=null;a.fL=a.fL-1|0;return c;}d=a.Q;e=Bb(M(b),F(2135587861, 2654435769));f=a.X;g=V(Bc(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.U;}}if(g<0)return null;j=a.R.data;k=j[g];l=a.U;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=V(Bc(Bb(M(n),F(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.fL=a.fL-1|0;return k;}
function ADZ(a,b,c){var d,e,f,g;a:{d=a.R;if(b===null){if(a.V&&a.S===null)return 1;d=d.data;e=a.Q;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.S)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.V){g=a.S;if(b===g?1:g instanceof E6&&g.eZ==b.eZ?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof E6&&g.eZ==b.eZ?1:0)return 1;f=f+(-1)|0;}}return 0;}
function AB3(a,b){var c,d,e,f,g,h,i,j,k,l;a:{c=a.Q.data.length;a.o5=b*a.uR|0;d=b-1|0;a.U=d;d=Fg(M(d));a.X=d;e=a.Q;f=a.R;g=Y(b);a.Q=g;h=Bt(C,b);a.R=h;if(a.fL>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=V(Bc(Bb(M(k),F(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.U;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
function Yw(){var a=this;C.call(a);a.e2=0;a.gv=null;a.je=0;a.yn=0.0;a.pA=0;a.iU=0;a.gh=0;}
function AGv(a,b){var c=new Yw();AJL(c,a,b);return c;}
function AJL(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.yn=c;d=Mf(b,c);a.pA=d*c|0;b=d-1|0;a.gh=b;a.iU=Fg(M(b));a.gv=Y(d);return;}e=new Bg;f=new N;f.b=D(16);H(f,f.a,B(60));Ei(f,f.a,c);g=new L;h=f.b;d=f.a;O();i=D(d);g.e=i;K(h,0,i,0,d);e.c=1;e.d=1;e.f=g;G(e);}
function Vu(a,b){var c,d,e,f;if(!b){if(a.je)return 0;a.je=1;a.e2=a.e2+1|0;return 1;}c=a.gv;d=V(Bc(Bb(M(b),F(2135587861, 2654435769)),a.iU));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.gh;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.e2+1|0;a.e2=b;if(b>=a.pA)VA(a,e.length<<1);return 1;}
function AC5(a,b){var c,d,e,f,g,h,i,j;if(!b){if(!a.je)return 0;a.je=0;a.e2=a.e2-1|0;return 1;}c=a.gv;d=Bb(M(b),F(2135587861, 2654435769));e=a.iU;f=V(Bc(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.gh;}}if(f<0)return 0;h=a.gh;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=V(Bc(Bb(M(b),F(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.e2=a.e2-1|0;return 1;}
function VA(a,b){var c,d,e,f,g,h,i;a:{c=a.gv.data.length;a.pA=b*a.yn|0;d=b-1|0;a.gh=d;d=Fg(M(d));a.iU=d;e=a.gv;f=Y(b);a.gv=f;if(a.e2>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=V(Bc(Bb(M(h),F(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.gh;}f[i]=h;}g=g+1|0;}}}}
var RQ=I(0);
function Qe(){C.call(this);this.m6=null;}
function AFq(a){var b;b=a.m6;b.nz=1;ABM($rt_ustr(b.rc));}
function AI3(a){var b;b=a.m6;b.nz=1;ABM($rt_ustr(b.rc));}
function AFb(a){a.m6.nz=0;}
var SL=I(0);
function SS(){var a=this;C.call(a);a.jn=null;a.sd=null;a.DQ=null;}
var A6l=0;function AZg(){var a=new SS();ATR(a);return a;}
function ATR(a){var b,c,d,e,f,g,h,$$je;b=AHP();a.jn=b;c=APP(b);a.sd=c;b=new P3;d=a.jn;e=new CJ;e.b2=0;e.C=Bt(C,16);b.dH=e;b.gx=2147483647;b.z1=d;b.Ao=c;a.DQ=b;b=A4c.mq;Il(b);a:{try{Dh(b,a);EI(b);break a;}catch($$e){$$je=BJ($$e);d=$$je;}EI(b);G(d);}if(a.jn.state!=='running'?1:0){b=new Nj;b.DF=a;AH8(a.jn,Cm(b,"unlockFunction"));}else{if(!A6l&&A4c.ji>=2){if(A5X===null){e=new Dd;e.cI=A0G;c=new N;Di(c);c.b=D(16);e.bs=c;e.cE=D(32);e.cO=0;Dc();e.cM=A5s;A5X=e;}e=A5X;c=new N;c.b=D(16);DY(c,c.a,Ea(B(152)));DY(c,c.a,Ea(B(72)));DY(c,
c.a,Ea(B(153)));b=new L;f=c.b;g=c.a;h=D(g);b.e=h;K(f,0,h,0,g);d=e.bs;H(d,d.a,b);g=d.a;Bo(d,g,g+1|0);d.b.data[g]=10;C7(e);}A6l=1;}}
function ABV(a){a.sd.disconnect(a.jn.destination);}
function ZH(a){a.sd.connect(a.jn.destination);}
function AH8(b,c){var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){$rt_globals.document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){$rt_globals.document.addEventListener(eventName,unlock);});}
function AHP(){var AudioContext=$rt_globals.window.AudioContext||$rt_globals.window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
function APP(b){var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function M5(){D7.call(this);this.y2=null;}
var RO=I(Db);
function I0(){DJ.call(this);this.ft=null;}
function Pz(a){var b,c,d,e,f,g,h,i,$$je;a:{try{b=MI(a.ft,null);}catch($$e){$$je=BJ($$e);if($$je instanceof Db){c=$$je;break a;}else{throw $$e;}}return b;}d=new Ba;b=new N;b.b=D(16);H(b,b.a,B(42));e=a.ft.fd.e6;if(e.bk===null)e.bk=$rt_str(e.P.$meta.name);f=e.bk;H(b,b.a,f);f=new L;g=b.b;h=b.a;O();i=D(h);f.e=i;K(g,0,i,0,h);d.c=1;d.d=1;d.f=f;d.cY=c;G(d);}
var FN=I(0);
var Ov=I(0);
var PH=I(0);
var Px=I(0);
var QI=I(0);
var SH=I(0);
var Rr=I(0);
var N5=I(0);
var KQ=I(0);
var T$=I();
function AQf(a,b){b=a.n3(b);BM();return b===null?null:b instanceof $rt_objcls()&&b instanceof DN?(b[A5n]===true?b:b.bb):b;}
function ASM(a,b,c){a.CG($rt_str(b),D4(c,"handleEvent"));}
function ASc(a,b,c){a.AP($rt_str(b),D4(c,"handleEvent"));}
function AP9(a,b,c,d){a.zj($rt_str(b),D4(c,"handleEvent"),d?1:0);}
function AUu(a,b){return !!a.CL(b);}
function AIb(a){return a.Dr();}
function AFa(a,b,c,d){a.BX($rt_str(b),D4(c,"handleEvent"),d?1:0);}
var Lc=I();
function Ix(){var a=this;Lc.call(a);a.pe=0;a.hq=null;a.vN=0.0;a.pH=0;a.mb=0;a.k6=0;a.yv=0;}
var A0E=null;var A0F=null;function A6m(a){var b=new Ix();KO(b,a);return b;}
function KO(a,b){var c,d,e;a.k6=(-1);if(b<0){c=new Bg;c.c=1;c.d=1;G(c);}a.pe=0;if(!b)b=1;d=Bt(I8,b);e=d.data;a.hq=d;b=e.length;a.mb=b;a.vN=0.75;a.pH=b*0.75|0;}
function Ek(a,b,c){var d,e,f,g,h,i,j,k,l;Il(a);try{if(b!==null&&c!==null){a:{if(!b.bQ){d=b.e.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.bQ=(31*b.bQ|0)+g|0;f=f+1|0;}}}h=b.bQ&2147483647;d=a.hq.data;i=h%d.length|0;j=d[i];while(j!==null){b:{e=j.wk;if(!b.bQ){d=b.e.data;f=d.length;g=0;while(true){if(g>=f)break b;k=d[g];b.bQ=(31*b.bQ|0)+k|0;g=g+1|0;}}}if(e==b.bQ&&j.du.ek(b)?1:0)break;j=j.n9;}if(j!==null){l=j.ev;j.ev=c;return l;}a.yv=a.yv+1|0;e=a.pe+1|0;a.pe=e;if(e>a.pH){Y3(a);i=h%a.hq.data.length|0;}if
(i<a.mb)a.mb=i;if(i>a.k6)a.k6=i;c:{l=new I8;l.du=b;l.ev=c;if(!b.bQ){d=b.e.data;e=d.length;f=0;while(true){if(f>=e)break c;g=d[f];b.bQ=(31*b.bQ|0)+g|0;f=f+1|0;}}}l.wk=b.bQ;d=a.hq.data;l.n9=d[i];d[i]=l;return null;}b=new Dm;b.c=1;b.d=1;G(b);}finally{EI(a);}}
function Y3(a){var b,c,d,e,f,g,h,i,j;b=(a.hq.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Bt(I8,b);e=d.data;f=a.k6+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.mb)break;h=a.hq.data[f];while(h!==null){i=(h.du.eP()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.n9;h.n9=e[i];e[i]=h;h=j;}}a.mb=g;a.k6=c;a.hq=d;a.pH=e.length*a.vN|0;}
function AVD(){A0E=new Ks;A0F=new Kr;}
function LY(){Ix.call(this);this.C6=null;}
var W9=I();
var EE=I(BQ);
var A6f=null;var A6c=null;var A6i=null;var A6h=null;var A6n=null;function GH(){GH=Bi(EE);AOA();}
function AOA(){var b,c,d,e;b=new EE;GH();b.u=B(154);b.n=0;A6f=b;c=new EE;c.u=B(155);c.n=1;A6c=c;d=new EE;d.u=B(150);d.n=2;A6i=d;e=new EE;e.u=B(156);e.n=3;A6h=e;A6n=U(EE,[b,c,d,e]);}
var D8=I();
var VR=I(D8);
var Vs=I(D8);
var Yl=I(D8);
var ZQ=I(D8);
var Xm=I(D8);
function Pa(){C.call(this);this.Cr=null;}
function AMu(a,b){b.preventDefault();}
function Pb(){C.call(this);this.Ej=null;}
function AVe(a,b){b.preventDefault();}
function O9(){var a=this;C.call(a);a.tB=null;a.tc=null;a.ue=null;}
function Zt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new CJ;e.b2=1;e.C=Bt(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=$rt_str(g.name);i=F2(h,46,h.e.data.length-1|0);if(i==(-1))b=B(43);else{j=i+1|0;k=h.e;i=k.data.length;l=Bw(j,i);if(l>0){b=new Bh;b.c=1;b.d=1;C3(b);G(b);}if(!l)b=A36;else if(!j&&i==i)b=h;else{b=new L;i=i-j|0;m=D(i);b.e=m;K(k,j,m,0,i);}}b=Vw(b);if(AHq(b)){FB();n=A6o;}else if(!BO(b,B(157))&&!BO(b,B(158))&&!BO(b,B(159))?0:1){FB();n=A6p;}
else if(!AL6(b)){FB();n=A6q;}else{FB();n=A6r;}o=new $rt_globals.FileReader();b=new QY;b.og=a;b.qi=n;b.sP=h;b.mN=e;b.sV=d;o.addEventListener("load",Cm(b,"handleEvent"));FB();if(n!==A6q&&n!==A6p){if(n===A6o)o.readAsDataURL(g);else if(n===A6r)o.readAsText(g);}else o.readAsArrayBuffer(g);f=f+1|0;}}}}
function AQZ(a,b){Zt(a,b);}
function P3(){var a=this;DJ.call(a);a.z1=null;a.Ao=null;}
var RV=I(0);
function Nj(){C.call(this);this.DF=null;}
function AJW(a){var b,c,d,e,f,g,h;if(!A6l&&A4c.ji>=2){if(A5X===null){b=new Dd;c=A0G;Di(b);b.cI=c;c=new N;IP(c,16);b.bs=c;b.cE=D(32);b.cO=0;Dc();b.cM=A5s;A5X=b;}b=A5X;c=new N;c.b=D(16);FG(c,c.a,B(152));FG(c,c.a,B(72));FG(c,c.a,B(153));d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);h=b.bs;Gh(h,h.a,d);If(h,h.a,10);C7(b);}A6l=1;}
var Vl=I(D8);
function Pv(){var a=this;C.call(a);a.O=null;a.da=0;a.pS=null;a.tp=0;a.jf=0;a.gA=0;a.cz=0;a.vR=null;}
function Pf(a,b){return O3(a,b);}
function IQ(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=new IU;d.ct=Bt(C,10);e=O3(a,b);f=0;g=0;if(!b.e.data.length){h=Bt(L,1);h.data[0]=B(43);return h;}a:{while(true){if(!HO(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.dI;if(!j.dG){b=new B2;b.c=1;b.d=1;C3(b);G(b);}if(0>=j.er){b=new Bh;O();d=new N;Di(d);d.b=D(16);P(d,d.a,0,10);e=new L;h=d.b;k=d.a;l=D(k);e.e=l;K(h,0,l,0,k);b.c=1;b.d=1;b.f=e;G(b);}f=j.ca.data[0];k=Bw(g,f);if(k>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!k){O();j=A36;}else if(!g&&f==b.e.data.length)j=b;else{j=new L;h
=b.e;k=f-g|0;O();l=D(k);j.e=l;K(h,g,l,0,k);}Hs(d,d.bx+1|0);h=d.ct.data;k=d.bx;d.bx=k+1|0;h[k]=j;d.dA=d.dA+1|0;j=e.dI;if(!j.dG)break;if(0>=j.er){b=new Bh;O();d=new N;Di(d);d.b=D(16);IV(d,0);Sw(b,C$(d));G(b);}g=j.ca.data[1];f=i;}b=new B2;b.c=1;b.d=1;C3(b);G(b);}l=b.e;m=l.data.length;k=Bw(g,m);if(k>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!k){O();b=A36;}else if(!(!g&&m==m)){b=new L;k=m-g|0;O();h=D(k);b.e=h;K(l,g,h,0,k);}b:{Hs(d,d.bx+1|0);h=d.ct.data;m=d.bx;d.bx=m+1|0;h[m]=b;d.dA=d.dA+1|0;k=f+1|0;if(!c)while(true){k=k+
(-1)|0;if(k<0)break;if(EO(RA(d,k)))break b;RF(d,k);}}if(k<0)k=0;return V7(d,Bt(L,k));}
function Oy(a){return a.O.c8;}
function GQ(b,c){var d;if(b===null){b=new Dm;b.c=1;b.d=1;b.f=B(160);G(b);}if(c&&(c|255)!=255){b=new Bg;b.c=1;b.d=1;b.f=B(43);G(b);}A0p=1;d=new Pv;d.pS=Bt(DT,10);d.jf=(-1);d.gA=(-1);d.cz=(-1);return Wv(d,b,c);}
function Wv(a,b,c){var d,e,f;a.O=AXi(b,c);a.da=c;b=S0(a,(-1),c,null);a.vR=b;d=a.O;if(!d.cl&&!d.M&&d.N==d.dx&&!(d.cg===null?0:1)?1:0){if(a.tp)b.fQ();return a;}b=new DO;e=d.c8;f=d.ix;b.c=1;b.d=1;b.bS=(-1);b.dl=B(43);b.dj=e;b.bS=f;G(b);}
function ADy(a,b){var c,d,e,f,g,h;c=new C_;d=a.da;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;BE();g=new Bz;g.A=Y(64);c.G=g;g=new Bz;g.A=Y(2);c.L=g;c.nU=e;c.pg=f;while(true){h=a.O;d=h.cl;if(!d&&!h.M&&h.N==h.dx&&!(h.cg===null?0:1)?1:0)break;f=!d&&!h.M&&h.N==h.dx&&!(h.cg===null?0:1)?1:0;if(!(!f&&!(h.cg===null?0:1)&&(d<0?0:1)?1:0))break;f=h.M;if(f&&f!=(-536870788)&&f!=(-536870871))break;C0(h);Dt(c,h.gg);g=a.O;if(g.cl!=(-536870788))continue;C0(g);}g=Lq(a,c);g.bM(b);return g;}
function S0(a,b,c,d){var e,f,g,h,i,j,k,l;e=new IU;e.ct=Bt(C,10);f=a.da;g=0;if(c!=f)a.da=c;a:{switch(b){case -1073741784:h=new PO;c=a.cz+1|0;a.cz=c;FW();i=A0p;A0p=i+1|0;d=new Bq;d.b=D(20);h.F=(P(d,d.a,i,10)).r();h.cJ=c;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new OM;j=a.cz+1|0;a.cz=j;FW();c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);h.F=(P(d,d.a,c,10)).r();h.cJ=j;break a;case -33554392:h=new Qj;k=a.cz+1|0;a.cz=k;FW();c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);h.F=(P(d,d.a,c,10)).r();h.cJ=
k;break a;default:c=a.jf+1|0;a.jf=c;if(d===null){h=AXD();g=1;}else{h=new DT;FW();JP(h);h.cJ=c;}i=a.jf;if(i<=(-1))break a;if(i>=10)break a;a.pS.data[i]=h;break a;}h=new SU;FW();i=A0p;A0p=i+1|0;d=new Bq;d.b=D(20);h.F=(P(d,d.a,i,10)).r();h.cJ=(-1);}while(true){if(SO(a.O)&&GJ(a.O)==(-536870788))l=ADy(a,h);else if(a.O.cl==(-536870788)){l=JG(h);B5(a.O);}else{l=Od(a,h);if(Gj(a.O)==(-536870788))B5(a.O);}if(l!==null)J5(e,l);if(Lb(a.O))break;if(Gj(a.O)==(-536870871))break;}if(Wj(a.O)==(-536870788))J5(e,JG(h));if(a.da
!=f&&!g){a.da=f;UP(a.O,f);}switch(b){case -1073741784:break;case -536870872:return AW3(e,h);case -268435416:return AWp(e,h);case -134217688:return AW1(e,h);case -67108824:return AXn(e,h);case -33554392:return AWA(e,h);default:switch(AAu(e)){case 0:break;case 1:return AYy(RA(e,0),h);default:return AXV(e,h);}return JG(h);}return AZu(e,h);}
function ABv(a){var b,c,d,e,f,g,h,i,j,k;b=new KM;b.b=D(16);while(true){c=a.O;d=c.cl;if(!d&&!c.M&&c.N==c.dx&&!(c.cg===null?0:1)?1:0)break;e=!d&&!c.M&&c.N==c.dx&&!(c.cg===null?0:1)?1:0;if(!(!e&&!(c.cg===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.fD;e=f===null?0:1;if(!(!e&&!c.M)){e=f===null?0:1;if(!(!e&&(c.M<0?0:1))){d=c.M;if(d!=(-536870871)&&(d&(-2147418113))!=(-2147483608)&&d!=(-536870788)&&d!=(-536870876))break;}}C0(c);g=c.gg;e=Bw(g,65536);if(!(e>=0&&
g<=1114111?1:0)){e=g&65535;h=b.a;Bo(b,h,h+1|0);b.b.data[h]=e;}else{if(e<0){i=D(1);i.data[0]=g&65535;}else i=E$([(55296|(g-65536|0)>>10&1023)&65535,(56320|g&1023)&65535]);i=i.data;e=0;h=i.length;d=b.a;Bo(b,d,d+h|0);j=h+e|0;while(e<j){k=b.b.data;g=d+1|0;h=e+1|0;k[d]=i[e];d=g;e=h;}}}h=a.da;if(!((h&2)!=2?0:1))return AXI(b);if(!((h&64)!=64?0:1))return AZI(b);c=new MR;e=A0p;A0p=e+1|0;c.F=KS(e,10);c.bC=1;f=new N;f.b=D(16);e=0;while(e<AD_(b)){DQ(f,ACH(Tr(Th(b,e))));e=e+1|0;}c.ra=C$(f);c.bC=C9(f);return c;}
function ABH(a){var b,c,d,e,f,g,h,i,j;b=Y(4);c=(-1);d=(-1);e=a.O;f=e.cl;if(!(!f&&!e.M&&e.N==e.dx&&!(e.cg===null?0:1)?1:0)){g=!f&&!e.M&&e.N==e.dx&&!(e.cg===null?0:1)?1:0;if(!g&&!(e.cg===null?0:1)&&(f<0?0:1)?1:0){h=b.data;C0(e);c=e.gg;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=D(3);b=h.data;b[0]=c&65535;e=a.O;i=e.cl;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;C0(e);e=a.O;i=e.cl;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;C0(e);e=new IY;c=A0p;A0p=c+1|0;j=new Bq;j.b=D(20);e.F=(P(j,j.a,c,10)).r();e.fX=h;e.lC=3;return e;}j=new IY;i
=A0p;A0p=i+1|0;e=new Bq;e.b=D(20);j.F=(P(e,e.a,i,10)).r();j.fX=h;j.lC=2;return j;}c=a.da;if(!((c&2)!=2?0:1)){e=new Fl;i=b[0];c=A0p;A0p=c+1|0;e.F=KS(c,10);e.bC=1;e.ds=i;return e;}if((c&64)!=64?0:1)return AYH(b[0]);return AWT(b[0]);}h=b.data;c=1;while(c<4&&!Lb(a.O)&&SO(a.O)){i=c+1|0;e=a.O;C0(e);h[c]=e.gg;c=i;}if(c==1&&!AN2(h[0]))return SR(a,h[0]);if(!EZ(a,2))return AZG(b,c);if(EZ(a,64))return AZj(b,c);return AXX(b,c);}
function Od(a,b){var c,d,e,f,g,h;c=a.O;d=c.cl;e=!d&&!c.M&&c.N==c.dx&&!(c.cg===null?0:1)?1:0;e=!e&&!(c.cg===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.fD===null?0:1)&&(c.M<0?0:1)){if(!((a.da&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!ABn(c)?ABv(a):Mu(a,b,SK(a,b));}else{f=ABH(a);g=a.O;d=g.cl;if(!(!d&&!g.M&&g.N==g.dx&&!(g.cg===null?0:1)?1:0)&&!(d==(-536870871)&&!(b instanceof Id))&&d!=(-536870788)){e=!d&&!g.M&&g.N==g.dx&&!(g.cg===null?0:1)?1:0;if(!(!e&&!(g.cg===null?0:1)&&(d<0?0:1)?1:0))f=Mu(a,b,f);}}}else if(d!=
(-536870871))f=Mu(a,b,SK(a,b));else{if(b instanceof Id)G(EQ(B(43),EP(c),F4(a.O)));f=new RZ;TV(f,b);f.bC=0;}c=a.O;e=c.cl;h=!e&&!c.M&&c.N==c.dx&&!(c.cg===null?0:1)?1:0;if(!h&&!(e==(-536870871)&&!(b instanceof Id))&&e!=(-536870788)){g=Od(a,b);if(f instanceof Ef&&!(f instanceof GI)&&!(f instanceof Ej)&&!(f instanceof GF)){c=f;if(!g.cS(c.bh))f=AWX(c);}if((g.lP()&65535)!=43)f.bM(g);else f.bM(g.bh);}else{if(f===null)return null;f.bM(b);}if((f.lP()&65535)!=43)return f;return f.bh;}
function Mu(a,b,c){var d,e,f,g,h,i;d=a.O;e=d.cl;if(c!==null&&!(c instanceof CX)){switch(e){case -2147483606:C0(d);d=new S9;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);d.F=(P(g,g.a,f,10)).r();d.m=b;d.bh=c;d.cf=e;FW();c.bM(A6s);return d;case -2147483605:C0(d);d=new OI;e=A0p;A0p=e+1|0;g=new Bq;g.b=D(20);d.F=(P(g,g.a,e,10)).r();d.m=b;d.bh=c;d.cf=(-2147483606);FW();c.bM(A6s);return d;case -2147483585:C0(d);d=new Os;e=A0p;A0p=e+1|0;g=new Bq;Di(g);g.b=D(20);d.F=(P(g,g.a,e,10)).r();d.m=b;d.bh=c;d.cf=(-536870849);FW();c.bM(A6s);return d;case -2147483525:g
=new Nd;h=d.cg;C0(d);d=h;f=a.gA+1|0;a.gA=f;i=A0p;A0p=i+1|0;g.F=KS(i,10);g.m=b;g.bh=c;g.cf=(-536870849);g.fA=d;g.d5=f;FW();c.bM(A6s);return g;case -1073741782:case -1073741781:C0(d);d=new PK;Uv(d,c,b,e);c.bM(d);return d;case -1073741761:C0(d);d=AXc(c,b,(-536870849));c.bM(b);return d;case -1073741701:h=new Rt;d=Hz(d);e=a.gA+1|0;a.gA=e;ZR(h,d,c,b,(-536870849),e);c.bM(h);return h;case -536870870:case -536870869:B5(d);d=c.lP()!=(-2147483602)?AWV(c,b,e):EZ(a,32)?AXr(c,b,e):AWO(c,b,e,Ou(a.da));c.bM(d);return d;case -536870849:B5(d);d
=AZx(c,b,(-536870849));c.bM(b);return d;case -536870789:h=new GP;d=Hz(d);e=a.gA+1|0;a.gA=e;Tt(h,d,c,b,(-536870849),e);c.bM(h);return h;default:}return c;}g=null;if(c!==null)g=c;switch(e){case -2147483606:case -2147483605:B5(d);d=AYR(g,b,e);Mo(g,d);return d;case -2147483585:B5(d);return AWw(g,b,(-2147483585));case -2147483525:return AZh(Hz(d),g,b,(-2147483525));case -1073741782:case -1073741781:B5(d);d=AZa(g,b,e);Mo(g,d);return d;case -1073741761:B5(d);return AY1(g,b,(-1073741761));case -1073741701:return AXE(Hz(d),
g,b,(-1073741701));case -536870870:case -536870869:B5(d);d=AYD(g,b,e);Mo(g,d);return d;case -536870849:B5(d);return AX$(g,b,(-536870849));case -536870789:return AW8(Hz(d),g,b,(-536870789));default:}return c;}
function SK(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Id;while(true){a:{e=a.O;f=e.cl;if((f&(-2147418113))==(-2147483608)){C0(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.da=g;else{if(f!=(-1073741784))g=a.da;c=S0(a,f,g,b);e=a.O;if(e.cl!=(-536870871)){b=new DO;h=e.c8;i=e.ix;b.c=1;b.d=1;b.bS=(-1);b.dl=B(43);b.dj=h;b.bS=i;G(b);}C0(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:B5(e);c
=new Pw;JP(c);break a;case -2147483582:B5(e);c=ATu(0);break a;case -2147483577:break;case -2147483558:B5(e);c=new Sv;j=a.cz+1|0;a.cz=j;ACm(c,j);break a;case -2147483550:B5(e);c=ATu(1);break a;case -2147483526:B5(e);c=AY7();break a;case -536870876:B5(e);a.cz=a.cz+1|0;if(EZ(a,8)){if(EZ(a,1)){c=AXB(a.cz);break a;}c=AWu(a.cz);break a;}if(EZ(a,1)){c=AX1(a.cz);break a;}c=AYZ(a.cz);break a;case -536870866:B5(e);if(EZ(a,32)){c=AZp();break a;}c=AYJ(Ou(a.da));break a;case -536870821:B5(e);i=0;if(Gj(a.O)==(-536870818))
{i=1;B5(a.O);}c=ZT(a,i,b);if(Gj(a.O)!=(-536870819))G(EQ(B(43),EP(a.O),F4(a.O)));N7(a.O,1);B5(a.O);break a;case -536870818:B5(e);a.cz=a.cz+1|0;if(!EZ(a,8)){c=AZb();break a;}c=AY8(Ou(a.da));break a;case 0:e=Oz(e);if(e!==null)c=Lq(a,e);else{if(Lb(a.O)){c=JG(b);break a;}c=AJu(f&65535);}B5(a.O);break a;default:break b;}B5(e);c=AW9();break a;}j=(f&2147483647)-48|0;if(a.jf<j)G(EQ(B(43),EP(e),F4(a.O)));B5(e);a.cz=a.cz+1|0;c=!EZ(a,2)?AWz(j,a.cz):EZ(a,64)?AXC(j,a.cz):AZB(j,a.cz);a.pS.data[j].pM=1;a.tp=1;break a;}if(f
>=0&&!JI(e)){c=SR(a,f);B5(a.O);}else if(f==(-536870788))c=JG(b);else{if(f!=(-536870871))G(EQ(!JI(a.O)?ADj(f&65535):(Oz(a.O)).r(),EP(a.O),F4(a.O)));if(d)G(EQ(B(43),EP(a.O),F4(a.O)));c=JG(b);}}}if(f!=(-16777176))break;}return c;}
function ZT(a,b,c){var d;d=Lq(a,Ht(a,b));d.bM(c);return d;}
function Ht(a,b){var c,d,e,f,g,h,i,j,k,l,$$je;c=new C_;d=a.da;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;BE();f=new Bz;f.A=Y(64);c.G=f;f=new Bz;f.A=Y(2);c.L=f;c.nU=e;c.pg=d;Fv(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){f=a.O;if(!f.cl&&!f.M&&f.N==f.dx&&!JI(f)?1:0)break a;f=a.O;b=f.cl;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)Dt(c,g);g=B5(a.O);if(Gj(a.O)!=(-536870874)){g=38;break d;}if(GJ(a.O)==(-536870821)){B5(a.O);h=1;g=(-1);break d;}B5(a.O);if(j){c=Ht(a,0);break d;}if(Gj(a.O)==(-536870819))break d;Sj(c,
Ht(a,0));break d;case -536870867:if(!j&&GJ(f)!=(-536870819)&&GJ(a.O)!=(-536870821)&&g>=0){B5(a.O);d=Gj(a.O);if(JI(a.O))break c;if(d<0&&GJ(a.O)!=(-536870819)&&GJ(a.O)!=(-536870821)&&g>=0)break c;e:{try{if(ALD(d))break e;d=d&65535;break e;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){break b;}else{throw $$e;}}}try{BY(c,g,d);}catch($$e){$$je=BJ($$e);if($$je instanceof Db){break b;}else{throw $$e;}}B5(a.O);g=(-1);break d;}if(g>=0)Dt(c,g);g=45;B5(a.O);break d;case -536870821:if(g>=0){Dt(c,g);g=(-1);}B5(a.O);e=
0;f=a.O;if(f.cl==(-536870818)){B5(f);e=1;}if(!h)Tf(c,Ht(a,e));else Sj(c,Ht(a,e));h=0;B5(a.O);break d;case -536870819:break;case -536870818:if(g>=0)Dt(c,g);g=94;B5(a.O);break d;case 0:if(g>=0)Dt(c,g);f=a.O.cg;if(f===null)g=0;else{AEl(c,f);g=(-1);}C0(a.O);break d;default:if(g>=0)Dt(c,g);f=a.O;C0(f);g=f.gg;break d;}if(g>=0)Dt(c,g);g=93;B5(a.O);}j=0;}G(EQ(B(43),Oy(a),F4(a.O)));}G(EQ(B(43),Oy(a),F4(a.O)));}if(!i){if(g>=0)Dt(c,g);return c;}c=new DO;k=a.O;l=k.c8;b=k.ix-1|0;c.c=1;c.d=1;c.bS=(-1);c.dl=B(43);c.dj=l;c.bS
=b;G(c);}
function SR(a,b){var c,d,e,f,g;c=b>=65536&&b<=1114111?1:0;d=a.da;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new MW;b=b&65535;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);e.F=(P(g,g.a,f,10)).r();e.bC=1;e.oE=b;e.pn=Hy(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new MP;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);e.F=(P(g,g.a,f,10)).r();e.bC=1;e.bC=2;if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}b=B$(A5A,b);if(A5y===null){if(A5z===null)A5z=Dz();A5y
=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}e.qR=B$(A5y,b);return e;}if(b<=57343&&b>=56320?1:0){e=new Jt;b=b&65535;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);e.F=(P(g,g.a,f,10)).r();e.gD=b;return e;}if(b<=56319&&b>=55296?1:0)return AMh(b&65535);e=new Sy;b=b&65535;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);e.F=(P(g,g.a,f,10)).r();e.bC=1;b=B$(TQ(),b)&65535;e.mn=B$(XL(),b)&65535;return e;}}if(c)return AWK(b);if(AIn(b))return AYp(b&65535);if(!AN_(b))return AJu(b&65535);return AMh(b&65535);}
function Lq(a,b){var c,d,e,f,g,h;if(!Za(b)){if(!b.bJ){if(b.kf())return AXx(b);return AY9(b);}if(b.kf())return AYi(b);return AXO(b);}c=Ui(b);d=new M1;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);d.F=(P(f,f.a,e,10)).r();d.ng=c;d.o3=c.be;if(!b.bJ){if(!b.kf()){c=new HN;f=new E8;b=IX(b);JP(f);f.bC=1;f.ep=b;f.rv=b.be;U5(c);c.h8=f;c.hS=d;return c;}c=new HN;f=new N4;b=IX(b);e=A0p;A0p=e+1|0;g=new Bq;g.b=D(20);f.F=(P(g,g.a,e,10)).r();f.bC=1;f.ns=b;f.qy=b.be;e=A0p;A0p=e+1|0;b=new Bq;b.b=D(20);c.F=(P(b,b.a,e,10)).r();c.h8=f;c.hS
=d;return c;}if(!b.kf()){c=new HN;f=new Ez;b=IX(b);e=A0p;A0p=e+1|0;g=new Bq;g.b=D(20);f.F=(P(g,g.a,e,10)).r();f.dv=b;f.i9=b.be;e=A0p;A0p=e+1|0;b=new Bq;b.b=D(20);c.F=(P(b,b.a,e,10)).r();c.h8=f;c.hS=d;return c;}c=new HN;f=new M2;g=IX(b);h=A0p;A0p=h+1|0;b=new Bq;b.b=D(20);f.F=(P(b,b.a,h,10)).r();f.dv=g;f.i9=g.be;e=A0p;A0p=e+1|0;b=new Bq;b.b=D(20);c.F=(P(b,b.a,e,10)).r();c.h8=f;c.hS=d;return c;}
function VB(b){return GQ(b,0);}
function Hy(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function EZ(a,b){return (a.da&b)!=b?0:1;}
var UI=I();
function QA(b,c){var d,e,f,g,h,i,j,$$je;if(c!==null&&c.data.length){a:{b:{try{d=AHC(ABX(b,c));}catch($$e){$$je=BJ($$e);if($$je instanceof KK){d=$$je;break a;}else if($$je instanceof HP){d=$$je;break b;}else{throw $$e;}}return d;}e=new D_;if(b.bk===null)b.bk=$rt_str(b.P.$meta.name);f=b.bk;b=new N;b.b=D(16);H(b,b.a,B(161));g=b.a;if(f===null)f=B(2);H(b,g,f);h=new L;c=b.b;i=b.a;O();j=D(i);h.e=j;K(c,0,j,0,i);e.c=1;e.d=1;e.f=h;e.cY=d;G(e);}e=new D_;if(b.bk===null)b.bk=$rt_str(b.P.$meta.name);f=b.bk;b=new N;b.b=D(16);H(b,
b.a,B(162));g=b.a;if(f===null)f=B(2);H(b,g,f);H(b,b.a,B(163));h=new L;c=b.b;i=b.a;O();j=D(i);h.e=j;K(c,0,j,0,i);e.c=1;e.d=1;e.f=h;e.cY=d;G(e);}c=(ADC(b)).data;if(c.length<=0)b=null;else{b=new N9;b.fd=c[0];}return b;}
function OP(b,c){var d,e,f,g,h,i,j,$$je;a:{try{d=AHC(AB0(b,c));}catch($$e){$$je=BJ($$e);if($$je instanceof KK){d=$$je;break a;}else if($$je instanceof HP){d=$$je;e=new D_;if(b.bk===null)b.bk=$rt_str(b.P.$meta.name);b=b.bk;f=new N;f.b=D(16);H(f,f.a,B(161));g=f.a;if(b===null)b=B(2);H(f,g,b);b=new L;c=f.b;h=f.a;O();i=D(h);b.e=i;K(c,0,i,0,h);e.c=1;e.d=1;e.f=b;e.cY=d;G(e);}else{throw $$e;}}return d;}e=new D_;if(b.bk===null)b.bk=$rt_str(b.P.$meta.name);j=b.bk;b=new N;b.b=D(16);H(b,b.a,B(164));g=b.a;if(j===null)j=
B(2);H(b,g,j);f=new L;c=b.b;h=b.a;O();i=D(h);f.e=i;K(c,0,i,0,h);e.c=1;e.d=1;e.f=f;e.cY=d;G(e);}
var D_=I(Db);
function DN(){C.call(this);this.bb=null;}
var A6t=null;var A6u=null;var A6v=null;var A6w=null;var A6x=null;var A6y=null;var A6z=null;function BM(){BM=Bi(DN);AIp();}
function CY(b){var c,d,e,f,g,h,i;BM();if(b===null)return null;c=b;d=$rt_str(typeof c);e=!BO(d,B(165))&&!BO(d,B(166))?0:1;if(e&&b[A5n]===true)return b;b=A6u;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DN;h.bb=c;A6u.set(c,new $rt_globals.WeakRef(h));return h;}if(BO(d,B(167))){f=A6v.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DN;h.bb=c;i=h;A6v.set(c,new $rt_globals.WeakRef(i));Nv(A6y,
i,c);return h;}if(BO(d,B(168))){f=A6w.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DN;h.bb=c;i=h;A6w.set(c,new $rt_globals.WeakRef(i));Nv(A6z,i,c);return h;}if(BO(d,B(169))){f=A6x;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DN;h.bb=c;A6x=new $rt_globals.WeakRef(h);return h;}}b=new DN;b.bb=c;return b;}
function AIp(){A6t=new $rt_globals.WeakMap();A6u=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();A6v=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A6w=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();A6y=A6v===null?null:new $rt_globals.FinalizationRegistry(Cm(new Qp,"accept"));A6z=A6w===null?null:new $rt_globals.FinalizationRegistry(Cm(new Qn,"accept"));}
function Nv(b,c,d){return b.register(c,d);}
var K9=I(0);
var Ks=I();
var JM=I(0);
var Kr=I();
var Mn=I(0);
function YX(){var a=this;C.call(a);a.z5=null;a.xw=null;a.i8=null;a.dI=null;a.m_=0;a.na=0;a.np=0;a.pC=null;a.p3=null;a.gB=null;}
function O3(a,b){var c=new YX();AEG(c,a,b);return c;}
function AAz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=a.pC;if(c!==null&&BO(c,b)){if(a.gB===null)return a.p3;d=new N;d.b=D(16);e=0;while(true){b=a.gB;f=Bw(e,b.bx);if(f>=0){b=new L;g=d.b;h=d.a;i=D(h);b.e=i;K(g,0,i,0,h);return b;}if(e<0)break;if(f>=0)break;b=b.ct.data[e];H(d,d.a,b===null?B(2):b.r());e=e+1|0;}b=new Bh;b.c=1;b.d=1;G(b);}a.pC=b;g=b.e.data;i=D(g.length);j=i.data;f=0;e=j.length;while(f<e){j[f]=g[f];f=f+1|0;}c=new N;c.b=D(16);a.gB=null;h=0;k=0;l=0;a:{b:while(true){if(h>=e){b=a.gB;if(b!==null){h=c.a;f
=Bw(k,h);if(f){if(f<=0&&k>=0&&h<=h){m=new L;g=c.b;f=h-k|0;O();i=D(f);m.e=i;K(g,k,i,0,f);Hs(b,b.bx+1|0);g=b.ct.data;h=b.bx;b.bx=h+1|0;g[h]=m;b.dA=b.dA+1|0;}else{b=new Bh;b.c=1;b.d=1;C3(b);G(b);}}}b=new L;g=c.b;h=c.a;O();i=D(h);b.e=i;K(g,0,i,0,h);return b;}if(j[h]==92&&!l){l=1;h=h+1|0;}c:{if(l){if(h>=e)break b;l=j[h];n=c.a;Bo(c,n,n+1|0);c.b.data[n]=l;l=0;}else if(j[h]!=36){n=j[h];o=c.a;Bo(c,o,o+1|0);c.b.data[o]=n;}else{if(a.gB===null){b=new IU;b.ct=Bt(C,10);a.gB=b;}d:{try{b=new L;h=h+1|0;S8(b,i,h,1);f=C1(b);if
(k==C9(c))break d;J5(a.gB,ABk(c,k,C9(c)));k=C9(c);break d;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){break a;}else{throw $$e;}}}try{J5(a.gB,AX2(a,f));m=LB(a,f);k=k+EO(m)|0;B7(c,m);break c;}catch($$e){$$je=BJ($$e);if($$je instanceof Db){break a;}else{throw $$e;}}}}h=h+1|0;}b=new Bh;b.c=1;b.d=1;G(b);}b=new Bg;b.c=1;b.d=1;b.f=B(43);G(b);}
function LB(a,b){var c,d,e,f,g,h,i,j,k;c=a.dI;d=c.dG;if(!d){c=new B2;c.c=1;c.d=1;G(c);}if(b>=0){e=Bw(b,c.er);if(e<0){a:{f=c.ca.data;g=b*2|0;if(f[g]<0)h=null;else{c=c.hK;if(!d){c=new B2;c.c=1;c.d=1;G(c);}if(b>=0&&e<0){i=f[g];if(!d){c=new B2;c.c=1;c.d=1;G(c);}if(b>=0&&e<0){g=f[g+1|0];b=Bw(i,g);if(b>0){c=new Bh;c.c=1;c.d=1;G(c);}if(!b){O();h=A36;}else if(!i&&g==c.e.data.length)h=c;else{h=new L;f=c.e;b=g-i|0;O();j=D(b);h.e=j;K(f,i,j,0,b);}break a;}c=new Bh;O();h=new N;h.b=D(16);P(h,h.a,b,10);k=new L;f=h.b;i=h.a;j
=D(i);k.e=j;K(f,0,j,0,i);c.c=1;c.d=1;c.f=k;G(c);}c=new Bh;O();h=new N;h.b=D(16);P(h,h.a,b,10);k=new L;f=h.b;i=h.a;j=D(i);k.e=j;K(f,0,j,0,i);c.c=1;c.d=1;c.f=k;G(c);}}return h;}}c=new Bh;O();h=new N;h.b=D(16);P(h,h.a,b,10);k=new L;f=h.b;i=h.a;j=D(i);k.e=j;K(f,0,j,0,i);c.c=1;c.d=1;c.f=k;G(c);}
function MV(a,b){var c,d,e,f,g,h,i,j,k;c=a.i8;d=c.e.data.length;if(b>=0&&b<=d){e=a.dI;e.dG=0;e.jr=2;f=e.ca.data;g=0;h=f.length;if(g>h){c=new Bg;Dw(c);G(c);}while(g<h){i=g+1|0;f[g]=(-1);g=i;}f=e.bP.data;g=0;h=f.length;if(g>h){c=new Bg;Dw(c);G(c);}while(g<h){i=g+1|0;f[g]=(-1);g=i;}e.fl=e.dt;e.jr=1;e.fl=b;d=e.ju;if(d<0)d=b;e.ju=d;b=a.xw.di(b,c,e);if(b==(-1))a.dI.dy=1;if(b>=0){c=a.dI;b=c.dG;if(b){f=c.ca.data;if(f[0]==(-1)){g=c.fl;f[0]=g;f[1]=g;}if(!b){c=new B2;c.c=1;c.d=1;C3(c);G(c);}if(0<c.er){c.ju=f[1];return 1;}c
=new Bh;O();e=new N;Di(e);e.b=D(16);P(e,e.a,0,10);j=new L;f=e.b;d=e.a;k=D(d);j.e=k;K(f,0,k,0,d);c.c=1;c.d=1;c.f=j;G(c);}}a.dI.fl=(-1);return 0;}c=new Bh;O();e=new N;e.b=D(16);P(e,e.a,b,10);j=new L;f=e.b;d=e.a;k=D(d);j.e=k;K(f,0,k,0,d);c.c=1;c.d=1;c.f=j;G(c);}
function HO(a){var b,c,d,e,f,g,h,i,j,k,l;b=a.i8.e.data.length;c=a.dI;if(!c.nL)b=a.na;if(c.fl>=0&&c.jr==1){d=c.dG;if(!d){c=new B2;c.c=1;c.d=1;G(c);}e=Bw(0,c.er);if(e>=0){c=new Bh;O();f=new N;f.b=D(16);P(f,f.a,0,10);g=new L;h=f.b;b=f.a;i=D(b);g.e=i;K(h,0,i,0,b);c.c=1;c.d=1;c.f=g;G(c);}h=c.ca.data;j=h[1];c.fl=j;if(!d){c=new B2;c.c=1;c.d=1;G(c);}if(e>=0){c=new Bh;O();f=new N;f.b=D(16);P(f,f.a,0,10);g=new L;h=f.b;b=f.a;i=D(b);g.e=i;K(h,0,i,0,b);c.c=1;c.d=1;c.f=g;G(c);}k=h[1];if(!d){c=new B2;c.c=1;c.d=1;G(c);}if(e
<0){if(k==h[0])c.fl=j+1|0;l=c.fl;return l<=b&&MV(a,l)?1:0;}c=new Bh;O();f=new N;f.b=D(16);P(f,f.a,0,10);g=new L;h=f.b;b=f.a;i=D(b);g.e=i;K(h,0,i,0,b);c.c=1;c.d=1;c.f=g;G(c);}return MV(a,a.m_);}
function AEG(a,b,c){var d,e;a.m_=(-1);a.na=(-1);a.z5=b;a.xw=b.vR;a.i8=c;a.m_=0;d=c.e.data.length;a.na=d;e=AY_(c,0,d,b.jf,b.gA+1|0,b.cz+1|0);a.dI=e;e.hL=1;}
var CG=I(Bg);
function S2(){var a=new CG();AGt(a);return a;}
function A6A(a){var b=new CG();Jn(b,a);return b;}
function AGt(a){a.c=1;a.d=1;}
function Jn(a,b){a.c=1;a.d=1;a.f=b;}
function N9(){C.call(this);this.fd=null;}
function AHC(a){var b=new N9();AT7(b,a);return b;}
function AT7(a,b){a.fd=b;}
function L2(a,b){}
function MI(a,b){var c,d,e,f,g,h,i,j,$$je;if(b===null)b=Bt(C,0);a:{b:{c:{try{c=AB5(a.fd,b);}catch($$e){$$je=BJ($$e);if($$je instanceof Bg){c=$$je;break b;}else if($$je instanceof LK){c=$$je;break c;}else if($$je instanceof Kj){c=$$je;break a;}else if($$je instanceof Nl){c=$$je;d=new D_;e=a.fd.e6;if(e.bk===null)e.bk=$rt_str(e.P.$meta.name);e=e.bk;f=new N;f.b=D(16);H(f,f.a,B(170));g=f.a;if(e===null)e=B(2);H(f,g,e);h=new L;b=f.b;i=f.a;O();j=D(i);h.e=j;K(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cY=c;G(d);}else{throw $$e;}}return c;}d
=new D_;e=a.fd.e6;if(e.bk===null)e.bk=$rt_str(e.P.$meta.name);e=e.bk;f=new N;f.b=D(16);H(f,f.a,B(171));g=f.a;if(e===null)e=B(2);H(f,g,e);h=new L;b=f.b;i=f.a;O();j=D(i);h.e=j;K(b,0,j,0,i);PY(d,h,c);G(d);}d=new D_;e=a.fd.e6;if(e.bk===null)e.bk=$rt_str(e.P.$meta.name);e=e.bk;f=new N;f.b=D(16);H(f,f.a,B(172));g=f.a;if(e===null)e=B(2);H(f,g,e);h=new L;b=f.b;i=f.a;O();j=D(i);h.e=j;K(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cY=c;G(d);}d=new D_;e=a.fd.e6;if(e.bk===null)e.bk=$rt_str(e.P.$meta.name);e=e.bk;f=new N;f.b=D(16);H(f,
f.a,B(171));g=f.a;if(e===null)e=B(2);H(f,g,e);h=new L;b=f.b;i=f.a;O();j=D(i);h.e=j;K(b,0,j,0,i);d.c=1;d.d=1;d.f=h;d.cY=c;G(d);}
var KK=I(BU);
var Fa=I(Db);
var HP=I(Fa);
function Cr(){var a=this;C.call(a);a.m=null;a.de=0;a.F=null;a.cf=0;}
var A0p=0;function JP(a){var b,c;b=A0p;A0p=b+1|0;c=new Bq;c.b=D(20);a.F=(P(c,c.a,b,10)).r();}
function AJp(a,b,c,d){var e;e=d.bi;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function ALe(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIN(a,b){a.cf=b;}
function AHD(a){return a.cf;}
function AOX(a){var b,c,d,e,f,g,h;b=a.F;c=a.bg();d=new N;d.b=D(16);e=d.a;Bo(d,e,e+1|0);d.b.data[e]=60;f=d.a;if(b===null)b=B(2);H(d,f,b);e=d.a;Bo(d,e,e+1|0);d.b.data[e]=58;f=d.a;if(c===null)c=B(2);H(d,f,c);e=d.a;Bo(d,e,e+1|0);g=d.b;g.data[e]=62;b=new L;e=d.a;O();h=D(e);b.e=h;K(g,0,h,0,e);return b;}
function ARO(a){var b,c,d,e,f,g,h;b=a.F;c=a.bg();d=new N;d.b=D(16);e=d.a;Bo(d,e,e+1|0);d.b.data[e]=60;f=d.a;if(b===null)b=B(2);H(d,f,b);e=d.a;Bo(d,e,e+1|0);d.b.data[e]=58;f=d.a;if(c===null)c=B(2);H(d,f,c);e=d.a;Bo(d,e,e+1|0);g=d.b;g.data[e]=62;b=new L;e=d.a;O();h=D(e);b.e=h;K(g,0,h,0,e);return b;}
function ASD(a){return a.m;}
function Mo(a,b){a.m=b;}
function ATQ(a,b){return 1;}
function AU5(a){return null;}
function Kk(a){var b;a.de=1;b=a.m;if(b!==null){if(!b.de){b=b.h1();if(b!==null){a.m.de=1;a.m=b;}a.m.fQ();}else if(b instanceof H2&&b.dq.pM)a.m=b.m;}}
function AVM(){A0p=1;}
var ADE=I();
var WD=I();
var AEn=I();
var KR=I(0);
var Qp=I();
function AT2(a,b){var c;BM();b=b===null?null:b instanceof $rt_objcls()?b:CY(b);c=A6v;b=b===null?null:b[A5n]===true?b:b.bb;c.delete(b);}
var Xf=I();
var Qn=I();
function AGo(a,b){var c;BM();b=b===null?null:b instanceof $rt_objcls()?b:CY(b);c=A6w;b=b===null?null:b[A5n]===true?b:b.bb;c.delete(b);}
var MO=I(0);
function H1(){var a=this;C.call(a);a.du=null;a.ev=null;}
function I8(){var a=this;H1.call(a);a.n9=null;a.wk=0;}
function DT(){var a=this;Cr.call(a);a.pM=0;a.cJ=0;}
var A6s=null;function FW(){FW=Bi(DT);AKb();}
function AGH(a,b,c,d){var e,f,g;e=a.cJ;f=d.ca.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.m.k(b,c,d);if(g<0){b=a.cJ;d.ca.data[(b*2|0)+1|0]=e;}return g;}
function AOE(a){return a.cJ;}
function ALO(a){return B(173);}
function AHl(a,b){return 0;}
function AKb(){var b,c,d;b=new NJ;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);b.F=(P(d,d.a,c,10)).r();A6s=b;}
function Jz(){var a=this;C.call(a);a.ci=null;a.cN=0;a.gs=0;a.xI=0;a.gg=0;a.cl=0;a.M=0;a.dx=0;a.cg=null;a.fD=null;a.N=0;a.cA=0;a.ix=0;a.kW=0;a.c8=null;}
var A6B=null;var A6C=null;var A6D=0;function AXi(a,b){var c=new Jz();ATU(c,a,b);return c;}
function ATU(a,b,c){var d,e,f,g,h,i,j,k,l,m;a:{a.gs=1;a.c8=b;if((c&16)>0){d=new N;d.b=D(16);H(d,d.a,B(174));e=0;while(true){f=KV(b,B(175),e);if(f<0){g=b.e;f=g.data.length;h=Bw(e,f);if(h>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!h)b=A36;else if(!(!e&&f==f)){b=new L;h=f-e|0;i=D(h);b.e=i;K(g,e,i,0,h);}H(d,d.a,b);H(d,d.a,B(175));b=new L;i=d.b;f=d.a;g=D(f);b.e=g;K(i,0,g,0,f);break a;}j=f+2|0;h=Bw(e,j);if(h>0)break;if(!h)k=A36;else if(!e&&j==b.e.data.length)k=b;else{k=new L;g=b.e;h=j-e|0;i=D(h);k.e=i;K(g,e,i,0,h);}H(d,d.a,
k);H(d,d.a,B(176));e=j;}b=new Bh;b.c=1;b.d=1;G(b);}else if((c&128)<=0){}}i=b.e.data;f=i.length;g=D(f+2|0);a.ci=g;l=D(f);m=l.data;h=0;e=m.length;while(h<e){m[h]=i[h];h=h+1|0;}K(l,0,g,0,f);i=a.ci.data;h=i.length;i[h-1|0]=0;i[h-2|0]=0;a.dx=h;a.cN=c;C0(a);C0(a);}
function Gj(a){return a.cl;}
function N7(a,b){if(b>0&&b<3)a.gs=b;if(b==1){a.M=a.cl;a.fD=a.cg;a.N=a.kW;a.kW=a.ix;C0(a);}}
function UP(a,b){var c;a.cN=b;a.M=a.cl;a.fD=a.cg;c=a.ix;a.N=c+1|0;a.kW=c;C0(a);}
function Oz(a){return a.cg;}
function JI(a){return a.cg===null?0:1;}
function B5(a){C0(a);return a.gg;}
function Hz(a){var b;b=a.cg;C0(a);return b;}
function GJ(a){return a.M;}
function Wj(a){return a.gg;}
function C0(a){var b,c,d,e,f,g,h,$$je;a.gg=a.cl;a.cl=a.M;a.cg=a.fD;a.ix=a.kW;a.kW=a.N;while(true){b=0;c=a.N>=a.ci.data.length?0:L9(a);a.M=c;a.fD=null;if(a.gs==4){if(c!=92)return;c=a.N;d=a.ci.data;c=c>=d.length?0:d[EJ(a)];a.M=c;switch(c){case 69:break;default:a.M=92;a.N=a.cA;return;}a.gs=a.xI;a.M=a.N>(a.ci.data.length-2|0)?0:L9(a);}a:{c=a.M;if(c!=92){e=a.gs;if(e==1)switch(c){case 36:a.M=(-536870876);break a;case 40:if(a.ci.data[a.N]!=63){a.M=(-2147483608);break a;}EJ(a);c=a.ci.data[a.N];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.M=(-134217688);EJ(a);break b;default:G(EQ(B(43),EP(a),a.N));}a.M=(-67108824);EJ(a);}else{switch(c){case 33:break;case 60:EJ(a);c=a.ci.data[a.N];e=1;break b;case 61:a.M=(-536870872);EJ(a);break b;case 62:a.M=(-33554392);EJ(a);break b;default:f=AD8(a);a.M=f;if(f<256){a.cN=f;f=f<<16;a.M=f;a.M=(-1073741784)|f;break b;}f=f&255;a.M=f;a.cN=f;f=f<<16;a.M=f;a.M=(-16777176)|f;break b;}a.M=(-268435416);EJ(a);}}if(!e)break;}break a;case 41:a.M=(-536870871);break a;case 42:case 43:case 63:e
=a.N;d=a.ci.data;switch(e>=d.length?42:d[e]){case 43:a.M=c|(-2147483648);EJ(a);break a;case 63:a.M=c|(-1073741824);EJ(a);break a;default:}a.M=c|(-536870912);break a;case 46:a.M=(-536870866);break a;case 91:a.M=(-536870821);N7(a,2);break a;case 93:if(e!=2)break a;a.M=(-536870819);break a;case 94:a.M=(-536870818);break a;case 123:a.fD=AC8(a,c);break a;case 124:a.M=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.M=(-536870874);break a;case 45:a.M=(-536870867);break a;case 91:a.M=(-536870821);break a;case 93:a.M
=(-536870819);break a;case 94:a.M=(-536870818);break a;default:}}else{c=a.N>=(a.ci.data.length-2|0)?(-1):L9(a);c:{a.M=c;switch(c){case -1:G(EQ(B(43),EP(a),a.N));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.M
=Z7(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.gs!=1)break a;a.M=(-2147483648)|c;break a;case 65:a.M=(-2147483583);break a;case 66:a.M=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:G(EQ(B(43),EP(a),a.N));case 68:case 83:case 87:case 100:case 115:case 119:a.fD=PX(AIc(a.ci,
a.cA,1),0);a.M=0;break a;case 71:a.M=(-2147483577);break a;case 80:case 112:break c;case 81:a.xI=a.gs;a.gs=4;b=1;break a;case 90:a.M=(-2147483558);break a;case 97:a.M=7;break a;case 98:a.M=(-2147483550);break a;case 99:c=a.N;d=a.ci.data;if(c>=(d.length-2|0))G(EQ(B(43),EP(a),a.N));a.M=d[EJ(a)]&31;break a;case 101:a.M=27;break a;case 102:a.M=12;break a;case 110:a.M=10;break a;case 114:a.M=13;break a;case 116:a.M=9;break a;case 117:a.M=OK(a,4);break a;case 120:a.M=OK(a,2);break a;case 122:a.M=(-2147483526);break a;default:}break a;}g
=ZJ(a);h=0;if(a.M==80)h=1;try{a.fD=PX(g,h);}catch($$e){$$je=BJ($$e);if($$je instanceof Kp){G(EQ(B(43),EP(a),a.N));}else{throw $$e;}}a.M=0;}}if(b)continue;else break;}}
function ZJ(a){var b,c,d,e,f,g,h,i;b=new N;b.b=D(10);c=a.N;d=a.ci;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=new L;a.cA=c;if(a.cN&4)DH(a);else a.N=c+1|0;f=a.cA;O();e=D(1);b.e=e;K(d,f,e,0,1);g=new N;g.b=D(16);H(g,g.a,B(177));H(g,g.a,b);b=new L;d=g.b;h=g.a;e=D(h);b.e=e;K(d,0,e,0,h);return b;}a.cA=c;if(a.cN&4)DH(a);else a.N=c+1|0;c=0;a:{while(true){h=a.N;d=a.ci.data;if(h>=(d.length-2|0))break;a.cA=h;if(a.cN&4)DH(a);else a.N=h+1|0;c=d[a.cA];if(c==125)break a;h=b.a;Bo(b,h,h+1|0);b.b.data[h]=c;}}if(c!=125){b=new DO;i
=a.c8;c=a.N;b.c=1;b.d=1;b.bS=(-1);b.dl=B(43);b.dj=i;b.bS=c;G(b);}}c=b.a;if(!c){b=new DO;i=a.c8;c=a.N;b.c=1;b.d=1;b.bS=(-1);b.dl=B(43);b.dj=i;b.bS=c;G(b);}g=new L;d=b.b;O();e=D(c);g.e=e;K(d,0,e,0,c);h=g.e.data.length;if(h==1){b=new N;b.b=D(16);H(b,b.a,B(177));H(b,b.a,g);g=new L;d=b.b;h=b.a;e=D(h);g.e=e;K(d,0,e,0,h);return g;}b:{c:{if(h>3){if(g===B(177)?1:JH(g,B(177),0))break c;if(g===B(178)?1:JH(g,B(178),0))break c;}break b;}g=FZ(g,2,g.e.data.length);}return g;}
function AC8(a,b){var c,d,e,f,g,h,i,$$je;c=new N;c.b=D(4);d=(-1);e=2147483647;a:{while(true){f=a.N;g=a.ci.data;if(f>=g.length)break a;a.cA=f;if(a.cN&4)DH(a);else a.N=f+1|0;b=g[a.cA];if(b==125)break a;if(b==44&&d<0)try{d=KG(C$(c),10);ADk(c,0,C9(c));continue;}catch($$e){$$je=BJ($$e);if($$je instanceof CG){break;}else{throw $$e;}}h=b&65535;f=c.a;Bo(c,f,f+1|0);c.b.data[f]=h;}c=new DO;i=a.c8;b=a.N;c.c=1;c.d=1;c.bS=(-1);c.dl=B(43);c.dj=i;c.bS=b;G(c);}if(b!=125){c=new DO;i=a.c8;b=a.N;c.c=1;c.d=1;c.bS=(-1);c.dl=B(43);c.dj
=i;c.bS=b;G(c);}if(c.a>0)b:{try{e=KG(C$(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=BJ($$e);if($$je instanceof CG){}else{throw $$e;}}c=new DO;i=a.c8;b=a.N;c.c=1;c.d=1;c.bS=(-1);c.dl=B(43);c.dj=i;c.bS=b;G(c);}else if(d<0){c=new DO;i=a.c8;b=a.N;c.c=1;c.d=1;c.bS=(-1);c.dl=B(43);c.dj=i;c.bS=b;G(c);}if((d|e|(e-d|0))<0){c=new DO;i=a.c8;b=a.N;c.c=1;c.d=1;c.bS=(-1);c.dl=B(43);c.dj=i;c.bS=b;G(c);}f=a.N;g=a.ci.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.M=(-2147483525);a.cA=f;if(a.cN&4)DH(a);else a.N=f+
1|0;break c;case 63:a.M=(-1073741701);a.cA=f;if(a.cN&4)DH(a);else a.N=f+1|0;break c;default:}a.M=(-536870789);}c=new Nb;c.gq=d;c.go=e;return c;}
function EP(a){return a.c8;}
function Lb(a){return !a.cl&&!a.M&&a.N==a.dx&&!(a.cg===null?0:1)?1:0;}
function ALD(b){return b<0?0:1;}
function SO(a){var b,c;b=a.cl;c=!b&&!a.M&&a.N==a.dx&&!(a.cg===null?0:1)?1:0;return !c&&!(a.cg===null?0:1)&&(b<0?0:1)?1:0;}
function ABn(a){var b;b=a.cl;return b<=57343&&b>=56320?1:0;}
function AN_(b){return b<=56319&&b>=55296?1:0;}
function AIn(b){return b<=57343&&b>=56320?1:0;}
function OK(a,b){var c,d,e,f,g,h,i,j,$$je;c=new N;c.b=D(b);d=a.ci.data.length-2|0;e=0;while(true){f=Bw(e,b);if(f>=0)break;g=a.N;if(g>=d)break;h=a.ci;a.cA=g;if(a.cN&4)DH(a);else a.N=g+1|0;g=h.data[a.cA];i=c.a;Bo(c,i,i+1|0);c.b.data[i]=g;e=e+1|0;}if(!f)a:{try{b=KG(C$(c),16);}catch($$e){$$je=BJ($$e);if($$je instanceof CG){break a;}else{throw $$e;}}return b;}c=new DO;j=a.c8;b=a.N;c.c=1;c.d=1;c.bS=(-1);c.dl=B(43);c.dj=j;c.bS=b;G(c);}
function Z7(a){var b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.ci.data;e=d.length-2|0;f=IZ(d[a.N]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.N;a.cA=g;if(a.cN&4)DH(a);else a.N=g+1|0;a:{while(true){if(c>=b)break a;h=a.N;if(h>=e)break a;i=IZ(a.ci.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.N;a.cA=g;if(a.cN&4)DH(a);else a.N=g+1|0;c=c+1|0;}}return f;}j=new DO;k=a.c8;b=a.N;j.c=1;j.d=1;j.bS=(-1);j.dl=B(43);j.dj=k;j.bS=b;G(j);}
function AD8(a){var b,c,d,e,f,g,h;b=1;c=a.cN;a:while(true){d=a.N;e=a.ci.data;if(d>=e.length){f=new DO;g=a.c8;f.c=1;f.d=1;f.bS=(-1);f.dl=B(43);f.dj=g;f.bS=d;G(f);}b:{c:{switch(e[d]){case 41:a.cA=d;if(a.cN&4)DH(a);else a.N=d+1|0;return c|256;case 45:if(!b){h=new DO;g=a.c8;h.c=1;h.d=1;h.bS=(-1);h.dl=B(43);h.dj=g;h.bS=d;G(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.cA=d;if(a.cN&4)DH(a);else a.N=d+1|0;}a.cA=d;if(a.cN&4)DH(a);else a.N=d+1|0;return c;}
function EJ(a){var b;b=a.N;a.cA=b;if(a.cN&4)DH(a);else a.N=b+1|0;return a.cA;}
function DH(a){var b,c,d,e;b=a.ci.data.length-2|0;a.N=a.N+1|0;a:while(true){c=a.N;if(c<b){b:{c=a.ci.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(Dg(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.N=a.N+1|0;continue;}}c=a.N;if(c>=b)break;d=a.ci.data;if(d[c]!=35)break;a.N=c+1|0;while(true){e=a.N;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.N
=e+1|0;}}return c;}
function AJl(b){var c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?Ew([d,e]):Ew([d,e,4519+f|0]);}return null;}
function AN2(b){return A6C.ov(b)==A6D?0:1;}
function AQI(b){return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
function L9(a){var b,c,d,e,f;b=a.ci;c=a.N;a.cA=c;if(a.cN&4)DH(a);else a.N=c+1|0;b=b.data;d=a.cA;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.ci.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.N;a.cA=d;if(a.cN&4)DH(a);else a.N=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;}
function F4(a){return a.ix;}
function DO(){var a=this;Bg.call(a);a.dl=null;a.dj=null;a.bS=0;}
function EQ(a,b,c){var d=new DO();AF$(d,a,b,c);return d;}
function AF$(a,b,c,d){a.c=1;a.d=1;a.bS=(-1);a.dl=b;a.dj=c;a.bS=d;}
function AU0(a){var b,c,d,e,f,g,h,i,j,k;b=B(43);c=a.bS;if(c>=1){d=D(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bg;b.c=1;b.d=1;G(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new L;O();e=D(f);b.e=e;K(d,0,e,0,f);}h=a.dl;i=a.dj;if(i!==null&&i.e.data.length){j=a.bS;k=new N;k.b=D(16);P(k,k.a,j,10);H(k,k.a,B(59));H(k,k.a,i);H(k,k.a,B(59));H(k,k.a,b);b=new L;d=k.b;c=k.a;O();e=D(c);b.e=e;K(d,0,e,0,c);}else b=B(43);i=new N;i.b=D(16);j=i.a;if(h===null)h=B(2);H(i,j,h);H(i,i.a,b);b=new L;d=i.b;c=i.a;O();e=D(c);b.e=e;K(d,0,e,0,c);return b;}
var KJ=I(0);
var Lu=I();
function V7(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.bx;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new CE;b.P=f;c=b;f.classObject=c;}}b=Eg(b);if(b===null){b=new Dm;b.c=1;b.d=1;G(b);}if(b===J($rt_voidcls())){b=new Bg;b.c=1;b.d=1;G(b);}if(d<0){b=new DP;b.c=1;b.d=1;G(b);}b=Et(b.P,d);}e=0;g=0;h=a.dA;i=a.bx;d=Bw(h,h);a:{while(true){j=Bw(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new Mm;b.c=1;b.d=1;G(b);}k=g+1|0;if(g<0)break a;if(j>=
0)break a;b.data[e]=a.ct.data[g];e=h;g=k;}return b;}b=new Bh;b.c=1;b.d=1;G(b);}
var PS=I(0);
var M4=I(0);
function Hu(){Lu.call(this);this.dA=0;}
var LP=I(0);
function IU(){var a=this;Hu.call(a);a.ct=null;a.bx=0;}
function Hs(a,b){var c,d,e,f,g,h,i,j;c=a.ct;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new CE;i.P=h;j=i;h.classObject=j;}}h=Eg(i);if(h===null){i=new Dm;i.c=1;i.d=1;G(i);}if(h===J($rt_voidcls())){i=new Bg;i.c=1;i.d=1;G(i);}if(f<0){i=new DP;i.c=1;i.d=1;G(i);}j=Et(h.P,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.ct=j;}}
function RA(a,b){var c;if(b>=0&&b<a.bx)return a.ct.data[b];c=new Bh;c.c=1;c.d=1;G(c);}
function AAu(a){return a.bx;}
function J5(a,b){var c,d;Hs(a,a.bx+1|0);c=a.ct.data;d=a.bx;a.bx=d+1|0;c[d]=b;a.dA=a.dA+1|0;return 1;}
function XV(a,b,c){var d,e,f;if(b>=0){d=a.bx;if(b<=d){Hs(a,d+1|0);d=a.bx;e=d;while(e>b){f=a.ct.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ct.data[b]=c;a.bx=d+1|0;a.dA=a.dA+1|0;return;}}c=new Bh;c.c=1;c.d=1;G(c);}
function RF(a,b){var c,d,e,f;if(b>=0){c=a.bx;if(b<c){d=a.ct.data;e=d[b];c=c-1|0;a.bx=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.dA=a.dA+1|0;return e;}}e=new Bh;e.c=1;e.d=1;G(e);}
var PO=I(DT);
function AFJ(a,b,c,d){var e,f;e=a.cJ;f=d.bP.data;f[e]=b-f[e]|0;return a.m.k(b,c,d);}
function AI4(a){return B(179);}
function AR9(a,b){return 0;}
var SU=I(DT);
function AIK(a,b,c,d){return b;}
function AME(a){return B(180);}
var OM=I(DT);
function AHA(a,b,c,d){var e;e=a.cJ;if(d.bP.data[e]!=b)b=(-1);return b;}
function ATK(a){return B(181);}
function Qj(){DT.call(this);this.th=0;}
function AF3(a,b,c,d){var e,f;e=a.cJ;f=d.bP.data;f[e]=b-f[e]|0;a.th=b;return b;}
function ASF(a){return B(182);}
function AQF(a,b){return 0;}
var Id=I(DT);
function AXD(){var a=new Id();ATC(a);return a;}
function ATC(a){var b,c;FW();b=A0p;A0p=b+1|0;c=new Bq;c.b=D(20);a.F=(P(c,c.a,b,10)).r();a.cJ=0;}
function AUf(a,b,c,d){if(d.jr!=1&&b!=d.bi)return (-1);d.dG=1;d.ca.data[1]=b;return b;}
function AHU(a){return B(183);}
function CX(){Cr.call(this);this.bC=0;}
function TV(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.m=b;a.bC=1;a.cf=1;}
function AVS(a,b,c,d){var e;if((b+a.cU()|0)>d.bi){d.dy=1;return (-1);}e=a.cy(b,c);if(e<0)return (-1);return a.m.k(b+e|0,c,d);}
function AS6(a){return a.bC;}
function AMx(a,b){return 1;}
var RZ=I(CX);
function JG(a){var b=new RZ();AOO(b,a);return b;}
function AOO(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.m=b;a.bC=1;a.cf=1;a.bC=0;}
function ASx(a,b,c){return 0;}
function AKn(a,b,c,d){var e,f,g,h,i;e=d.bi;f=d.dt;a:{b:{while(true){g=Bw(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;h=c.e.data;i=h.length;if(b>=i)break b;if(((h[b]&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=i)break a;if((h[g]&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.m.k(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}
function AIt(a,b,c,d,e){var f,g,h,i,j;f=e.bi;g=e.dt;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;h=d.e.data;i=h.length;if(c>=i)break b;if(((h[c]&64512)!=56320?0:1)&&c>g){j=c-1|0;if(j<0)break a;if(j>=i)break a;if((h[j]&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.m.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Bd;d.c=1;d.d=1;G(d);}d=new Bd;d.c=1;d.d=1;G(d);}
function ALQ(a){return B(184);}
function AFX(a,b){return 0;}
function CQ(){var a=this;Cr.call(a);a.ch=null;a.dq=null;a.b6=0;}
function A6E(){var a=new CQ();U5(a);return a;}
function AXV(a,b){var c=new CQ();AP4(c,a,b);return c;}
function U5(a){var b,c;b=A0p;A0p=b+1|0;c=new Bq;c.b=D(20);a.F=(P(c,c.a,b,10)).r();}
function AP4(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.ch=b;a.dq=c;a.b6=c.cJ;}
function ALg(a,b,c,d){var e,f,g,h,i,j;e=a.ch;if(e===null)return (-1);f=a.b6;g=d.ca.data;h=f*2|0;i=g[h];g[h]=b;f=e.bx;j=0;a:{while(true){if(j>=f){b=a.b6;d.ca.data[b*2|0]=i;return (-1);}e=a.ch;if(j<0)break a;if(j>=e.bx)break a;h=e.ct.data[j].k(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new Bh;c.c=1;c.d=1;G(c);}
function AQy(a,b){a.dq.m=b;}
function AMJ(a){return B(185);}
function ANO(a,b){var c,d,e,f,g;a:{b:{c=a.ch;if(c!==null){d=0;e=c.dA;f=c.bx;while(true){if(!(d>=f?0:1))break b;if(e<c.dA){b=new Mm;b.c=1;b.d=1;G(b);}g=d+1|0;if(d<0)break a;if(d>=c.bx)break a;if(c.ct.data[d].cS(b))break;d=g;}return 1;}}return 0;}b=new Bh;b.c=1;b.d=1;G(b);}
function ARl(a,b){var c,d,e;c=a.b6;d=b.ca.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;}
function AIi(a){var b,c,d,e;a.de=1;b=a.dq;if(b!==null&&!b.de)Kk(b);a:{b:{b=a.ch;if(b!==null){c=b.bx;d=0;while(true){if(d>=c)break b;b=a.ch;if(d<0)break a;if(d>=b.bx)break a;b=b.ct.data[d];e=b.h1();if(e===null)e=b;else{b.de=1;RF(a.ch,d);XV(a.ch,d,e);}if(!e.de)e.fQ();d=d+1|0;}}}if(a.m!==null)Kk(a);return;}b=new Bh;b.c=1;b.d=1;G(b);}
var My=I(CQ);
function AZu(a,b){var c=new My();AGl(c,a,b);return c;}
function AGl(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.ch=b;a.dq=c;a.b6=c.cJ;}
function AQb(a,b,c,d){var e,f,g,h,i,j;e=a.b6;f=d.bP.data;g=f[e];f[e]=b;h=a.ch.bx;e=0;a:{while(true){if(e>=h){b=a.b6;d.bP.data[b]=g;return (-1);}i=a.ch;if(e<0)break a;if(e>=i.bx)break a;j=i.ct.data[e].k(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new Bh;c.c=1;c.d=1;G(c);}
function AN8(a){return B(186);}
function ARH(a,b){var c;c=a.b6;return !b.bP.data[c]?0:1;}
var Fw=I(My);
function AWA(a,b){var c=new Fw();AMf(c,a,b);return c;}
function AMf(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.ch=b;a.dq=c;a.b6=c.cJ;}
function AJt(a,b,c,d){var e,f,g,h,i,j;e=a.b6;f=d.bP.data;g=f[e];f[e]=b;h=a.ch.bx;i=0;a:{while(i<h){j=a.ch;if(i<0)break a;if(i>=j.bx)break a;if(j.ct.data[i].k(b,c,d)>=0)return a.m.k(a.dq.th,c,d);i=i+1|0;}b=a.b6;d.bP.data[b]=g;return (-1);}c=new Bh;c.c=1;c.d=1;G(c);}
function ARr(a,b){a.m=b;}
function AFR(a){return B(186);}
var Tl=I(Fw);
function AW3(a,b){var c=new Tl();AK7(c,a,b);return c;}
function AK7(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.ch=b;a.dq=c;a.b6=c.cJ;}
function AQq(a,b,c,d){var e,f,g;e=a.ch.bx;f=0;a:{while(f<e){g=a.ch;if(f<0)break a;if(f>=g.bx)break a;if(g.ct.data[f].k(b,c,d)>=0)return a.m.k(b,c,d);f=f+1|0;}return (-1);}c=new Bh;c.c=1;c.d=1;G(c);}
function ATY(a,b){return 0;}
function AU3(a){return B(187);}
var ACq=I(Fw);
function AWp(a,b){var c=new ACq();AKm(c,a,b);return c;}
function AKm(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.ch=b;a.dq=c;a.b6=c.cJ;}
function AHa(a,b,c,d){var e,f,g;e=a.ch.bx;f=0;a:{while(true){if(f>=e)return a.m.k(b,c,d);g=a.ch;if(f<0)break a;if(f>=g.bx)break a;if(g.ct.data[f].k(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new Bh;c.c=1;c.d=1;G(c);}
function ATj(a,b){return 0;}
function AK5(a){return B(188);}
var Xw=I(Fw);
function AW1(a,b){var c=new Xw();ATb(c,a,b);return c;}
function ATb(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.ch=b;a.dq=c;a.b6=c.cJ;}
function AId(a,b,c,d){var e,f,g,h,i;e=a.ch.bx;f=d.nL?0:d.dt;a:{b:{g=a.m.k(b,c,d);if(g>=0){h=a.b6;d.bP.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.ch;if(h<0)break a;if(h>=i.bx)break a;if(i.ct.data[h].dm(f,b,c,d)>=0){b=a.b6;d.bP.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new Bh;c.c=1;c.d=1;G(c);}
function AWe(a,b){return 0;}
function APR(a){return B(189);}
var ZV=I(Fw);
function AXn(a,b){var c=new ZV();AFF(c,a,b);return c;}
function AFF(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.ch=b;a.dq=c;a.b6=c.cJ;}
function AE7(a,b,c,d){var e,f,g;e=a.ch.bx;f=a.b6;d.bP.data[f]=b;f=0;a:{while(true){if(f>=e)return a.m.k(b,c,d);g=a.ch;if(f<0)break a;if(f>=g.bx)break a;if(g.ct.data[f].dm(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new Bh;c.c=1;c.d=1;G(c);}
function ARZ(a,b){return 0;}
function AHB(a){return B(190);}
function H2(){CQ.call(this);this.dL=null;}
function AYy(a,b){var c=new H2();AI2(c,a,b);return c;}
function AI2(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.dL=b;a.dq=c;a.b6=c.cJ;}
function AFr(a,b,c,d){var e,f,g;e=a.b6;f=d.ca.data;e=e*2|0;g=f[e];f[e]=b;e=a.dL.k(b,c,d);if(e>=0)return e;e=a.b6;d.ca.data[e*2|0]=g;return (-1);}
function AOh(a,b,c,d){var e;e=a.dL.di(b,c,d);if(e>=0){b=a.b6;d.ca.data[b*2|0]=e;}return e;}
function ASd(a,b,c,d,e){var f;f=a.dL.dm(b,c,d,e);if(f>=0){b=a.b6;e.ca.data[b*2|0]=f;}return f;}
function ANE(a,b){return a.dL.cS(b);}
function AQA(a){var b,c,d,e,f;b=new Nc;c=a.dL;d=a.dq;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);b.F=(P(f,f.a,e,10)).r();b.dL=c;b.dq=d;b.b6=d.cJ;a.m=b;return b;}
function AVa(a){var b;a.de=1;b=a.dq;if(b!==null&&!b.de)Kk(b);b=a.dL;if(b!==null&&!b.de){b=b.h1();if(b!==null){a.dL.de=1;a.dL=b;}a.dL.fQ();}}
var Ii=I();
function By(){var a=this;Ii.call(a);a.be=0;a.db=0;a.G=null;a.oC=null;a.pr=null;a.bJ=0;}
var A6F=null;function BE(){BE=Bi(By);AI8();}
function K_(a){var b;BE();b=new Bz;b.A=Y(64);a.G=b;}
function AHe(a){return null;}
function AGg(a){return a.G;}
function Za(a){return !a.db?(IG(a.G,0)>=2048?0:1):AAJ(a.G,0)>=2048?0:1;}
function ALB(a){return a.bJ;}
function ASX(a){return a;}
function Ui(a){var b,c;if(a.pr===null){b=a.gM();c=new Sc;c.Ee=a;c.tD=b;b=new Bz;b.A=Y(64);c.G=b;a.pr=c;Fv(c,a.db);}return a.pr;}
function IX(a){var b,c;if(a.oC===null){b=a.gM();c=new Sb;c.Ds=a;c.xk=b;c.xO=a;b=new Bz;b.A=Y(64);c.G=b;a.oC=c;Fv(c,a.be);a.oC.bJ=a.bJ;}return a.oC;}
function AU2(a){return 0;}
function Fv(a,b){var c;c=a.be;if(c^b){a.be=c?0:1;a.db=a.db?0:1;}if(!a.bJ)a.bJ=1;return a;}
function AKs(a){return a.be;}
function PX(b,c){BE();b=ADi(A6F,b);if(!c&&b.jj===null)b.jj=b.bw();else if(c&&b.i0===null)b.i0=Fv(b.bw(),1);return c?b.i0:b.jj;}
function AI8(){var b;b=new Iu;ARX();A6F=b;}
function C_(){var a=this;By.call(a);a.nU=0;a.pg=0;a.jg=0;a.qM=0;a.fj=0;a.dZ=0;a.L=null;a.bK=null;}
function Dt(a,b){var c;a:{if(a.nU){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.fj){MJ(a.L,Hy(b&65535));break a;}LX(a.L,Hy(b&65535));break a;}if(a.pg&&b>128){a.jg=1;if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}b=B$(A5A,b);if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}b=B$(A5y,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.qM)MJ(a.G,b-55296|0);else LX(a.G,b-55296|0);}if(a.fj)MJ(a.L,
b);else LX(a.L,b);if(!a.bJ&&(b>=65536&&b<=1114111?1:0))a.bJ=1;return a;}
function AEl(a,b){var c,d,e;if(!a.bJ&&b.bJ)a.bJ=1;if(a.qM){if(!b.db)Hg(a.G,b.gM());else Es(a.G,b.gM());}else if(!b.db)Hc(a.G,b.gM());else{G1(a.G,b.gM());Es(a.G,b.gM());a.db=a.db?0:1;a.qM=1;}if(!a.dZ&&b.cx()!==null){if(a.fj){if(!b.be)Hg(a.L,b.cx());else Es(a.L,b.cx());}else if(!b.be)Hc(a.L,b.cx());else{G1(a.L,b.cx());Es(a.L,b.cx());a.be=a.be?0:1;a.fj=1;}}else{c=a.be;d=a.bK;if(d!==null){if(!c){e=new NZ;e.zR=a;e.x_=c;e.xB=d;e.xs=b;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}else{e=new N0;e.E2=a;e.vy=c;e.vo=d;e.u1=b;BE();b
=new Bz;b.A=Y(64);e.G=b;a.bK=e;}}else{if(c&&!a.fj&&(a.L.ck?0:1)){d=new NW;d.Ck=a;d.vs=b;BE();b=new Bz;b.A=Y(64);d.G=b;a.bK=d;}else if(!c){d=new NU;d.qu=a;d.oY=c;d.t_=b;BE();b=new Bz;b.A=Y(64);d.G=b;a.bK=d;}else{d=new NV;d.rD=a;d.o_=c;d.xv=b;BE();b=new Bz;b.A=Y(64);d.G=b;a.bK=d;}a.dZ=1;}}return a;}
function BY(a,b,c){var d;if(b>c){d=new Bg;d.c=1;d.d=1;G(d);}a:{b:{if(!a.nU){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dt(a,b);b=b+1|0;}}if(a.fj)TI(a.L,b,c+1|0);else Jc(a.L,b,c+1|0);}return a;}
function Tf(a,b){var c,d,e,f;if(!a.bJ&&b.bJ)a.bJ=1;if(b.jg)a.jg=1;c=a.db;if(!(c^b.db)){if(!c)Hc(a.G,b.G);else Es(a.G,b.G);}else if(c)Hg(a.G,b.G);else{G1(a.G,b.G);Es(a.G,b.G);a.db=1;}a:{if(!a.dZ){d=b.dZ;if((!d?b.L:null)!==null){c=a.be;if(!(c^b.be)){if(!c){Hc(a.L,!d?b.L:null);break a;}Es(a.L,!d?b.L:null);break a;}if(c){Hg(a.L,!d?b.L:null);break a;}G1(a.L,!d?b.L:null);Es(a.L,!b.dZ?b.L:null);a.be=1;break a;}}c=a.be;e=a.bK;if(e!==null){if(c){f=new Og;f.Ab=a;f.xR=c;f.s_=e;f.tj=b;K_(f);a.bK=f;}else{f=new NO;f.za=a;f.wR
=c;f.xu=e;f.xT=b;BE();f.G=ARu(2048);a.bK=f;}}else{if(!a.fj&&(a.L.ck?0:1)){if(!c){e=new NX;e.E9=a;e.uT=b;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}else{e=new NY;e.An=a;e.xM=b;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}}else if(!c){e=new N1;e.wT=a;e.vO=b;e.vr=c;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}else{e=new N2;e.v4=a;e.wc=b;e.wn=c;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}a.dZ=1;}}}
function Sj(a,b){var c,d,e,f;if(!a.bJ&&b.bJ)a.bJ=1;if(b.jg)a.jg=1;c=a.db;if(!(c^b.db)){if(!c)Es(a.G,b.G);else Hc(a.G,b.G);}else if(!c)Hg(a.G,b.G);else{G1(a.G,b.G);Es(a.G,b.G);a.db=0;}a:{if(!a.dZ){d=b.dZ;if((!d?b.L:null)!==null){c=a.be;if(!(c^b.be)){if(!c){Es(a.L,!d?b.L:null);break a;}Hc(a.L,!d?b.L:null);break a;}if(!c){Hg(a.L,!d?b.L:null);break a;}G1(a.L,!d?b.L:null);Es(a.L,!b.dZ?b.L:null);a.be=0;break a;}}c=a.be;e=a.bK;if(e!==null){if(c){f=new NR;f.AG=a;f.ws=c;f.s6=e;f.wP=b;K_(f);a.bK=f;}else{f=new NQ;f.zN
=a;f.wX=c;f.tC=e;f.vw=b;BE();f.G=ARu(2048);a.bK=f;}}else{if(!a.fj&&(a.L.ck?0:1)){if(!c){e=new NM;e.Aw=a;e.uC=b;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}else{e=new NN;e.EV=a;e.uG=b;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}}else if(!c){e=new NS;e.yF=a;e.x8=b;e.v$=c;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}else{e=new NL;e.v9=a;e.wF=b;e.vz=c;BE();b=new Bz;b.A=Y(64);e.G=b;a.bK=e;}a.dZ=1;}}}
function AIz(a,b){var c;c=a.bK;if(c!==null)return a.be^c.K(b);return a.be^C6(a.L,b);}
function AWc(a){if(!a.dZ)return a.L;return null;}
function AKa(a){return a.G;}
function ATH(a){var b,c;if(a.bK!==null)return a;b=!a.dZ?a.L:null;c=new NP;c.y1=a;c.m$=b;BE();b=new Bz;b.A=Y(64);c.G=b;return Fv(c,a.be);}
function APn(a){var b,c,d,e,f,g,h,i,j,k;b=new N;b.b=D(16);c=IG(a.L,0);while(c>=0){if(c<65536){d=D(1);d.data[0]=c&65535;}else d=E$([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;f=0;g=e.length;h=b.a;Bo(b,h,h+g|0);g=g+f|0;while(f<g){d=b.b.data;i=h+1|0;j=f+1|0;d[h]=e[f];h=i;f=j;}g=b.a;Bo(b,g,g+1|0);b.b.data[g]=124;c=IG(a.L,c+1|0);}h=b.a;if(h>0)Sg(b,h-1|0);k=new L;d=b.b;h=b.a;O();e=D(h);k.e=e;K(d,0,e,0,h);return k;}
function AKu(a){return a.jg;}
function Kp(){var a=this;BU.call(a);a.EQ=null;a.Ek=null;}
function Fi(){Cr.call(this);this.bh=null;}
function Uv(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;}
function AVZ(a){return a.bh;}
function ASh(a,b){return !a.bh.cS(b)&&!a.m.cS(b)?0:1;}
function AT_(a,b){return 1;}
function AOM(a){var b;a.de=1;b=a.m;if(b!==null&&!b.de){b=b.h1();if(b!==null){a.m.de=1;a.m=b;}a.m.fQ();}b=a.bh;if(b!==null){if(!b.de){b=b.h1();if(b!==null){a.bh.de=1;a.bh=b;}a.bh.fQ();}else if(b instanceof H2&&b.dq.pM)a.bh=b.m;}}
function Ef(){Fi.call(this);this.bz=null;}
function AYD(a,b,c){var d=new Ef();AQg(d,a,b,c);return d;}
function AQg(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;a.bz=b;}
function AE9(a,b,c,d){var e,f;e=0;a:{while((b+a.bz.cU()|0)<=d.bi){f=a.bz.cy(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.m.k(b,c,d);if(f>=0)break;b=b-a.bz.cU()|0;e=e+(-1)|0;}return f;}
function AIf(a){return B(191);}
function GI(){Ef.call(this);this.h5=null;}
function AW8(a,b,c,d){var e=new GI();ANv(e,a,b,c,d);return e;}
function ANv(a,b,c,d,e){var f,g;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);a.F=(P(g,g.a,f,10)).r();a.m=d;a.bh=c;a.cf=e;a.bz=c;a.h5=b;}
function AGM(a,b,c,d){var e,f,g,h,i;e=a.h5;f=e.gq;g=e.go;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bz.cU()|0)>d.bi)break a;i=a.bz.cy(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.m.k(b,c,d);if(i>=0)break;b=b-a.bz.cU()|0;h=h+(-1)|0;}return i;}if((b+a.bz.cU()|0)>d.bi){d.dy=1;return (-1);}i=a.bz.cy(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AHj(a){return QD(a.h5);}
var Ej=I(Fi);
function AWV(a,b,c){var d=new Ej();ASP(d,a,b,c);return d;}
function ASP(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;}
function AFp(a,b,c,d){var e;if(!a.bh.bF(d))return a.m.k(b,c,d);e=a.bh.k(b,c,d);if(e>=0)return e;return a.m.k(b,c,d);}
function AL7(a){return B(192);}
var GF=I(Ef);
function AX$(a,b,c){var d=new GF();AOi(d,a,b,c);return d;}
function AOi(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;a.bz=b;}
function AOr(a,b,c,d){var e;e=a.bh.k(b,c,d);if(e<0)e=a.m.k(b,c,d);return e;}
function AWh(a,b){a.m=b;a.bh.bM(b);}
var ACI=I(Ef);
function AWX(a){var b=new ACI();AMr(b,a);return b;}
function AMr(a,b){var c,d,e,f;c=b.bh;d=b.m;e=b.cf;f=A0p;A0p=f+1|0;b=new Bq;b.b=D(20);a.F=(P(b,b.a,f,10)).r();a.m=d;a.bh=c;a.cf=e;a.bz=c;c.bM(a);}
function AVG(a,b,c,d){while((b+a.bz.cU()|0)<=d.bi&&a.bz.cy(b,c)>0){b=b+a.bz.cU()|0;}return a.m.k(b,c,d);}
function APf(a,b,c,d){var e,f,g;e=a.m.di(b,c,d);if(e<0)return (-1);f=e-a.bz.cU()|0;while(f>=b&&a.bz.cy(f,c)>0){g=f-a.bz.cU()|0;e=f;f=g;}return e;}
function BD(){var a=this;C.call(a);a.jj=null;a.i0=null;}
function ARP(a,b){if(!b&&a.jj===null)a.jj=a.bw();else if(b&&a.i0===null)a.i0=Fv(a.bw(),1);if(b)return a.i0;return a.jj;}
function Nb(){var a=this;Ii.call(a);a.gq=0;a.go=0;}
function QD(a){var b,c,d,e,f,g,h;b=a.gq;c=a.go;if(c==2147483647)d=B(43);else{d=new Bq;d.b=D(20);d=(P(d,d.a,c,10)).r();}e=new N;e.b=D(16);c=e.a;Bo(e,c,c+1|0);e.b.data[c]=123;P(e,e.a,b,10);b=e.a;Bo(e,b,b+1|0);e.b.data[b]=44;f=e.a;if(d===null)d=B(2);H(e,f,d);b=e.a;Bo(e,b,b+1|0);g=e.b;g.data[b]=125;d=new L;b=e.a;O();h=D(b);d.e=h;K(g,0,h,0,b);return d;}
var NJ=I(Cr);
function AM6(a,b,c,d){return b;}
function AQm(a){return B(193);}
function AQx(a,b){return 0;}
function Bz(){var a=this;C.call(a);a.A=null;a.ck=0;}
function ARu(a){var b=new Bz();AFs(b,a);return b;}
function AFs(a,b){var c;if(b>=0){a.A=Y(((b+32|0)-1|0)/32|0);return;}c=new DP;c.c=1;c.d=1;G(c);}
function LX(a,b){var c,d,e;if(b<0){c=new Bh;c.c=1;c.d=1;G(c);}d=b/32|0;if(b>=a.ck){JF(a,d+1|0);a.ck=b+1|0;}e=a.A.data;e[d]=e[d]|1<<(b%32|0);}
function Jc(a,b,c){var d,e,f,g,h,i;if(b>=0){d=Bw(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.ck){JF(a,e+1|0);a.ck=c;}if(d==e){f=a.A.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.A.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new Bh;i.c=1;i.d=1;G(i);}
function MJ(a,b){var c,d,e,f,g;if(b<0){c=new Bh;c.c=1;c.d=1;G(c);}d=b/32|0;e=a.A.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.ck-1|0))Iw(a);}}
function TI(a,b,c){var d,e,f,g,h,i;if(b>=0&&b<=c){d=a.ck;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.A.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.A.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}Iw(a);return;}i=new Bh;i.c=1;i.d=1;G(i);}
function C6(a,b){var c,d,e;if(b<0){c=new Bh;c.c=1;c.d=1;G(c);}d=b/32|0;e=a.A.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
function IG(a,b){var c,d,e,f,g;if(b<0){c=new Bh;c.c=1;c.d=1;G(c);}d=a.ck;if(b>=d)return (-1);e=b/32|0;f=a.A.data;g=f[e]>>>(b%32|0)|0;if(g)return ED(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+ED(f[g])|0;g=g+1|0;}return (-1);}
function AAJ(a,b){var c,d,e,f,g,h;if(b<0){c=new Bh;c.c=1;c.d=1;G(c);}d=a.ck;if(b>=d)return b;e=b/32|0;f=a.A.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return ED(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+ED(f[h]^(-1))|0;h=h+1|0;}return d;}
function JF(a,b){var c,d,e,f,g,h;c=a.A.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=Y(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.A=g;}
function Iw(a){var b,c,d;b=(a.ck+31|0)/32|0;a.ck=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=CV(a.A.data[c]);if(d<32)break;c=c+(-1)|0;a.ck=a.ck-32|0;}a.ck=a.ck-d|0;}}
function JB(a,b){var c,d,e,f,g;c=a.A.data;d=c.length;e=b.A.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;}
function Es(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c.length;e=b.A.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.ck;i=b.ck;if(h<i)i=h;a.ck=i;Iw(a);}
function Hg(a,b){var c,d,e,f,g;c=a.A.data;d=c.length;e=b.A.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}Iw(a);}
function Hc(a,b){var c,d,e,f,g;c=a.ck;d=b.ck;if(c>d)d=c;a.ck=d;JF(a,(d+31|0)/32|0);e=a.A.data;c=e.length;f=b.A.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}}
function G1(a,b){var c,d,e,f,g;c=a.ck;d=b.ck;if(c>d)d=c;a.ck=d;JF(a,(d+31|0)/32|0);e=a.A.data;c=e.length;f=b.A.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}Iw(a);}
function M1(){var a=this;CQ.call(a);a.ng=null;a.o3=0;}
function Xp(a,b,c,d){var e,f,g,h,i,j,k;e=d.dt;f=d.bi;g=b+1|0;f=Bw(g,f);if(f>0){d.dy=1;return (-1);}if(b>=0){h=c.e.data;if(b<h.length){i=h[b];if(!a.ng.K(i))return (-1);j=i&64512;k=j!=55296?0:1;a:{if(k){if(f>=0)break a;if(g>=0){h=c.e.data;if(g<h.length){if((h[g]&64512)!=56320?0:1)return (-1);break a;}}c=new Bd;c.c=1;c.d=1;G(c);}if((j!=56320?0:1)&&b>e){k=b-1|0;if(k>=0){h=c.e.data;if(k<h.length){if(!((h[k]&64512)!=55296?0:1))break a;return (-1);}}c=new Bd;c.c=1;c.d=1;G(c);}}return a.m.k(g,c,d);}}c=new Bd;c.c=1;c.d
=1;G(c);}
function AQK(a){var b,c,d,e,f,g,h;b=!a.o3?B(194):B(195);c=a.ng.r();d=new N;d.b=D(16);H(d,d.a,B(196));H(d,d.a,b);e=d.a;if(c===null)c=B(2);H(d,e,c);b=new L;f=d.b;g=d.a;O();h=D(g);b.e=h;K(f,0,h,0,g);return b;}
function HN(){var a=this;CQ.call(a);a.h8=null;a.hS=null;}
function AGC(a,b,c,d){var e;e=a.h8.k(b,c,d);if(e<0)e=Xp(a.hS,b,c,d);if(e>=0)return e;return (-1);}
function AP_(a,b){a.m=b;a.hS.m=b;a.h8.bM(b);}
function AQ5(a){var b,c,d,e,f,g,h,i,j,k;b=a.h8;c=a.hS;d=new N;d.b=D(16);H(d,d.a,B(197));e=d.a;if(b===null)b=B(2);else{f=b.F;b=b.bg();g=new N;IW(g);Gg(g,60);Je(g,f);Gg(g,58);Je(g,b);Gg(g,62);b=LD(g);}H(d,e,b);H(d,d.a,B(198));e=d.a;if(c===null)b=B(2);else{b=c.F;f=!c.o3?B(194):B(195);g=c.ng.r();h=FU();DK(DK(DK(h,B(196)),f),g);f=C$(h);c=new N;IW(c);Gg(c,60);Je(c,b);Gg(c,58);Je(c,f);Gg(c,62);b=LD(c);}H(d,e,b);b=new L;i=d.b;j=d.a;O();k=D(j);b.e=k;K(i,0,k,0,j);return b;}
function AHI(a,b){return 1;}
function AHd(a,b){return 1;}
function Ez(){var a=this;CQ.call(a);a.dv=null;a.i9=0;}
function AXO(a){var b=new Ez();AQ0(b,a);return b;}
function AQ0(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.dv=b.lf();a.i9=b.be;}
function AJ1(a,b,c,d){var e,f,g,h,i;a:{e=d.bi;if(b<e){f=b+1|0;if(b>=0){g=c.e.data;if(b<g.length){h=g[b];if(a.K(h)){i=a.m.k(f,c,d);if(i>0)return i;}if(f>=e)break a;e=f+1|0;if(f>=0){g=c.e.data;if(f<g.length){f=g[f];b=(h&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.K(((h&1023)<<10|f&1023)+65536|0))break a;else return a.m.k(e,c,d);}}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}}return (-1);}
function AUR(a){var b,c,d,e,f,g,h;b=!a.i9?B(194):B(195);c=a.dv.r();d=new N;d.b=D(16);H(d,d.a,B(196));H(d,d.a,b);e=d.a;if(c===null)c=B(2);H(d,e,c);b=new L;f=d.b;g=d.a;O();h=D(g);b.e=h;K(f,0,h,0,g);return b;}
function AKH(a,b){return a.dv.K(b);}
function AGs(a,b){var c,d,e;if(b instanceof FC){c=a.dv;d=b.iK;BE();return c.K(d);}if(b instanceof Fl){c=a.dv;d=b.ds;BE();return c.K(d);}if(b instanceof Ez){c=a.dv;b=b.dv;BE();return c.cx()!==null&&b.cx()!==null?JB(c.cx(),b.cx()):1;}if(!(b instanceof E8))return 1;c=a.dv;e=b.ep;BE();return c.cx()!==null&&e.cx()!==null?JB(c.cx(),e.cx()):1;}
function AMS(a){return a.dv;}
function ASR(a,b){a.m=b;}
function AKf(a,b){return 1;}
var M2=I(Ez);
function AYi(a){var b=new M2();AJi(b,a);return b;}
function AJi(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.dv=b.lf();a.i9=b.be;}
function AMy(a,b){var c;c=a.dv;if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}b=B$(A5A,b);if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}return c.K(B$(A5y,b));}
function AVi(a){var b,c,d,e,f,g,h;b=!a.i9?B(194):B(195);c=a.dv.r();d=new N;d.b=D(16);H(d,d.a,B(199));H(d,d.a,b);e=d.a;if(c===null)c=B(2);H(d,e,c);b=new L;f=d.b;g=d.a;O();h=D(g);b.e=h;K(f,0,h,0,g);return b;}
function N4(){var a=this;CX.call(a);a.ns=null;a.qy=0;}
function AXx(a){var b=new N4();APG(b,a);return b;}
function APG(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;a.ns=b.lf();a.qy=b.be;}
function AM9(a,b,c){var d,e;d=a.ns;if(b>=0){e=c.e.data;if(b<e.length){b=e[b];if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}b=B$(A5A,b)&65535;if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}return !d.K(B$(A5y,b)&65535)?(-1):1;}}c=new Bd;c.c=1;c.d=1;G(c);}
function AHr(a){var b,c,d,e,f,g,h;b=!a.qy?B(194):B(195);c=a.ns.r();d=new N;d.b=D(16);H(d,d.a,B(199));H(d,d.a,b);e=d.a;if(c===null)c=B(2);H(d,e,c);b=new L;f=d.b;g=d.a;O();h=D(g);b.e=h;K(f,0,h,0,g);return b;}
function E8(){var a=this;CX.call(a);a.ep=null;a.rv=0;}
function AY9(a){var b=new E8();AQ9(b,a);return b;}
function AQ9(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;a.ep=b.lf();a.rv=b.be;}
function AEC(a,b,c){var d,e;d=a.ep;if(b>=0){e=c.e.data;if(b<e.length)return !d.K(e[b])?(-1):1;}c=new Bd;c.c=1;c.d=1;G(c);}
function ANg(a){var b,c,d,e,f,g,h;b=!a.rv?B(194):B(195);c=a.ep.r();d=new N;d.b=D(16);H(d,d.a,B(196));H(d,d.a,b);e=d.a;if(c===null)c=B(2);H(d,e,c);b=new L;f=d.b;g=d.a;O();h=D(g);b.e=h;K(f,0,h,0,g);return b;}
function AQz(a,b){var c,d,e;if(b instanceof Fl){c=a.ep;d=b.ds;BE();return c.K(d);}if(b instanceof E8){c=a.ep;b=b.ep;BE();return c.cx()!==null&&b.cx()!==null?JB(c.cx(),b.cx()):1;}if(!(b instanceof Ez)){if(!(b instanceof FC))return 1;return 0;}c=a.ep;e=b.dv;BE();return c.cx()!==null&&e.cx()!==null?JB(c.cx(),e.cx()):1;}
function IY(){var a=this;CQ.call(a);a.fX=null;a.fN=null;a.lC=0;}
function AOo(a,b){a.m=b;}
function AR0(a){var b,c,d,e,f,g,h;if(a.fN===null){b=new L;c=a.fX;d=c.data;O();e=d.length;d=D(e);b.e=d;K(c,0,d,0,e);a.fN=b;}f=a.fN;b=new N;b.b=D(16);H(b,b.a,B(200));g=b.a;if(f===null)f=B(2);H(b,g,f);h=new L;c=b.b;e=b.a;O();d=D(e);h.e=d;K(c,0,d,0,e);return h;}
function AEU(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.bi;f=Y(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0){j=c.e.data;if(b<j.length){k=j[b];j=AJl(k);if(j!==null){j=j.data;l=0;b=j.length;k=a.lC;if(b!=k)return (-1);while(true){if(l>=k)return a.m.k(i,c,d);if(j[l]!=a.fX.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=k;m=k-4352|0;if(m>=0&&m<19){a:{if(i<e){if(i>=0){j=c.e.data;if(i<j.length){k=j[i];g=k-4449|0;break a;}}c=new Bd;c.c=1;c.d=1;G(c);}}if(g>=0&&g<21){b:{b=i+1|0;f[1]=k;if(b<e){if(b>=0){j=c.e.data;if
(b<j.length){k=j[b];h=k-4519|0;break b;}}c=new Bd;c.c=1;c.d=1;G(c);}}if(h>=0&&h<28){c:{b=b+1|0;f[2]=k;if(a.lC==3){k=f[0];j=a.fX.data;if(k==j[0]&&f[1]==j[1]&&f[2]==j[2]){b=a.m.k(b,c,d);break c;}}b=(-1);}return b;}d:{if(a.lC==2){k=f[0];j=a.fX.data;if(k==j[0]&&f[1]==j[1]){b=a.m.k(b,c,d);break d;}}b=(-1);}return b;}return (-1);}return (-1);}}c=new Bd;c.c=1;c.d=1;G(c);}
function AHw(a,b){var c,d,e,f,g;a:{if(b instanceof IY){b=b;if(b.fN===null){c=new L;d=b.fX;e=d.data;O();f=e.length;e=D(f);c.e=e;K(d,0,e,0,f);b.fN=c;}c=b.fN;if(a.fN===null){b=new L;d=a.fX;e=d.data;O();f=e.length;e=D(f);b.e=e;K(d,0,e,0,f);a.fN=b;}if(!BO(c,a.fN)){g=0;break a;}}g=1;}return g;}
function ATM(a,b){return 1;}
function Fl(){CX.call(this);this.ds=0;}
function AJu(a){var b=new Fl();ARb(b,a);return b;}
function ARb(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;a.ds=b;}
function AMK(a){return 1;}
function ALy(a,b,c){var d,e;d=a.ds;if(b>=0){e=c.e.data;if(b<e.length)return d!=e[b]?(-1):1;}c=new Bd;c.c=1;c.d=1;G(c);}
function AJY(a,b,c,d){var e,f,g,h,i,j;if(c instanceof L){e=d.bi;while(true){if(b>=e)return (-1);f=EC(c,a.ds,b);if(f<0)return (-1);g=a.m;b=f+1|0;if(g.k(b,c,d)>=0)break;}return f;}h=d.bi;a:{b:{while(true){if(b>h){b=(-1);break b;}f=b+1|0;if(f>d.bi){d.dy=1;i=(-1);}else{i=a.ds;if(b<0)break a;j=c.e.data;if(b>=j.length)break a;i=i!=j[b]?(-1):1;i=i<0?(-1):a.m.k(b+i|0,c,d);}if(i>=0)break;b=f;}}return b;}c=new Bd;Dw(c);G(c);}
function AMW(a,b,c,d,e){var f,g;if(d instanceof L){a:{while(true){if(c<b)return (-1);f=F2(d,a.ds,c);if(f<0)break a;if(f<b)break a;if(a.m.k(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.bi){e.dy=1;f=(-1);}else{f=a.ds;if(c<0)break b;g=d.e.data;if(c>=g.length)break b;f=f!=g[c]?(-1):1;f=f<0?(-1):a.m.k(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Bd;Dw(d);G(d);}
function AT4(a){var b,c,d,e,f,g;b=a.ds;c=new N;c.b=D(16);d=c.a;Bo(c,d,d+1|0);e=c.b;e.data[d]=b;f=new L;d=c.a;O();g=D(d);f.e=g;K(e,0,g,0,d);return f;}
function ATB(a,b){var c,d,e,f,g;if(b instanceof Fl)return b.ds!=a.ds?0:1;if(!(b instanceof E8)){if(b instanceof Ez)return b.K(a.ds);if(!(b instanceof FC))return 1;return 0;}b=b;c=a.ds;d=D(1);e=d.data;e[0]=c;O();f=e.length;g=D(f);e=g.data;K(d,0,g,0,f);b=b.ep;if(0>=e.length){b=new Bd;b.c=1;b.d=1;G(b);}return (!b.K(e[0])?(-1):1)<=0?0:1;}
function Sy(){CX.call(this);this.mn=0;}
function AYH(a){var b=new Sy();APc(b,a);return b;}
function APc(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}b=B$(A5A,b)&65535;if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}a.mn=B$(A5y,b)&65535;}
function AEH(a,b,c){var d,e;d=a.mn;if(b>=0){e=c.e.data;if(b<e.length){b=e[b];if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}b=B$(A5A,b)&65535;if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}return d!=(B$(A5y,b)&65535)?(-1):1;}}c=new Bd;c.c=1;c.d=1;G(c);}
function AP$(a){var b,c,d,e,f,g;b=a.mn;c=new N;c.b=D(16);H(c,c.a,B(201));d=c.a;Bo(c,d,d+1|0);e=c.b;e.data[d]=b;f=new L;d=c.a;O();g=D(d);f.e=g;K(e,0,g,0,d);return f;}
function MW(){var a=this;CX.call(a);a.oE=0;a.pn=0;}
function AWT(a){var b=new MW();ARR(b,a);return b;}
function ARR(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;a.oE=b;a.pn=Hy(b);}
function AFk(a,b,c){var d,e,f;d=a.oE;if(b>=0){e=c.e.data;f=Bw(b,e.length);if(f<0){a:{b:{if(d!=e[b]){d=a.pn;if(b<0)break a;if(f>=0)break a;if(d!=e[b]){b=(-1);break b;}}b=1;}return b;}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}
function ALX(a){var b,c,d,e,f,g;b=a.oE;c=new N;c.b=D(16);H(c,c.a,B(202));d=c.a;Bo(c,d,d+1|0);e=c.b;e.data[d]=b;f=new L;d=c.a;O();g=D(d);f.e=g;K(e,0,g,0,d);return f;}
function GR(){var a=this;CQ.call(a);a.hP=0;a.fw=null;a.ha=null;a.g7=0;}
function AZG(a,b){var c=new GR();AG1(c,a,b);return c;}
function AG1(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.hP=1;a.ha=b;a.g7=c;}
function AU8(a,b){a.m=b;}
function AQa(a,b,c,d){var e,f,g,h,i,j,k;e=Y(4);f=d.bi;if(b>=f)return (-1);g=Li(a,b,c,f);h=b+a.hP|0;i=A6B.BC(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;K(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=Li(a,h,c,f);while(b<4){if(!AQI(g)){k=b+1|0;i[b]=g;}else{j=(A6B.BC(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.hP|0;if(h>=f){b=k;break a;}g=Li(a,h,c,f);b=k;}}}if(b!=a.g7)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.m.k(h,c,d);if(j[g]!=a.ha.data[g])break;g
=g+1|0;}return (-1);}
function APX(a){var b,c,d,e,f,g,h,i;if(a.fw===null){b=new N;b.b=D(16);c=0;while(c<a.g7){d=a.ha.data[c];if(d<65536){e=D(1);e.data[0]=d&65535;}else e=E$([(55296|(d-65536|0)>>10&1023)&65535,(56320|d&1023)&65535]);f=e.data.length;Kq(b,b.a,e,0,f);c=c+1|0;}g=new L;h=b.b;d=b.a;O();e=D(d);g.e=e;K(h,0,e,0,d);a.fw=g;}i=a.fw;b=new N;b.b=D(16);H(b,b.a,B(203));c=b.a;if(i===null)i=B(2);H(b,c,i);g=new L;h=b.b;d=b.a;O();e=D(d);g.e=e;K(h,0,e,0,d);return g;}
function Li(a,b,c,d){var e,f,g,h;a:{a.hP=1;if(b>=(d-1|0)){if(b>=0){e=c.e.data;if(b<e.length){f=e[b];break a;}}c=new Bd;c.c=1;c.d=1;G(c);}d=b+1|0;if(b>=0){e=c.e.data;g=e.length;if(b<g){f=e[b];if(d>=0&&d<g){g=e[d];b=(f&64512)!=55296?0:1;if(b&&((g&64512)!=56320?0:1)?1:0){e=D(2);h=e.data;h[0]=f;h[1]=g;f=US(e,0,h.length);a.hP=2;}break a;}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}return f;}
function AM$(a,b){var c,d,e,f,g,h,i,j,k;a:{if(b instanceof GR){b=b;if(b.fw===null){c=new N;c.b=D(16);d=0;while(d<b.g7){e=b.ha.data[d];if(e<65536){f=D(1);f.data[0]=e&65535;}else f=E$([(55296|(e-65536|0)>>10&1023)&65535,(56320|e&1023)&65535]);g=f.data.length;Kq(c,c.a,f,0,g);d=d+1|0;}h=new L;f=c.b;e=c.a;O();i=D(e);h.e=i;K(f,0,i,0,e);b.fw=h;}c=b.fw;if(a.fw===null){b=new N;b.b=D(16);d=0;while(d<a.g7){j=a.ha.data[d];if(j<65536){f=D(1);f.data[0]=j&65535;}else f=E$([(55296|(j-65536|0)>>10&1023)&65535,(56320|j&1023)
&65535]);k=f.data.length;Kq(b,b.a,f,0,k);d=d+1|0;}h=new L;f=b.b;e=b.a;O();i=D(e);h.e=i;K(f,0,i,0,e);a.fw=h;}if(!BO(c,a.fw)){d=0;break a;}}d=1;}return d;}
function ARv(a,b){return 1;}
var ADF=I(GR);
function AZj(a,b){var c=new ADF();AL2(c,a,b);return c;}
function AL2(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.hP=1;a.ha=b;a.g7=c;}
var AAl=I(GR);
function AXX(a,b){var c=new AAl();AHF(c,a,b);return c;}
function AHF(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.hP=1;a.ha=b;a.g7=c;}
var S9=I(Ej);
function AIS(a,b,c,d){var e;while(true){e=a.bh.k(b,c,d);if(e<=0)break;b=e;}return a.m.k(b,c,d);}
var OI=I(Ej);
function AO2(a,b,c,d){var e;e=a.bh.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bh.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.m.k(b,c,d);}
var IE=I(Ej);
function AZx(a,b,c){var d=new IE();AFe(d,a,b,c);return d;}
function AFe(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;}
function ASL(a,b,c,d){var e;if(!a.bh.bF(d))return a.m.k(b,c,d);e=a.bh.k(b,c,d);if(e>=0)return e;return a.m.k(b,c,d);}
function AUk(a,b){a.m=b;a.bh.bM(b);}
var Os=I(IE);
function AMQ(a,b,c,d){var e;e=a.bh.k(b,c,d);if(e<=0)e=b;return a.m.k(e,c,d);}
function APx(a,b){a.m=b;}
function GP(){var a=this;Ej.call(a);a.fA=null;a.d5=0;}
function A6G(a,b,c,d,e){var f=new GP();Tt(f,a,b,c,d,e);return f;}
function Tt(a,b,c,d,e,f){var g,h;g=A0p;A0p=g+1|0;h=new Bq;h.b=D(20);a.F=(P(h,h.a,g,10)).r();a.m=d;a.bh=c;a.cf=e;a.fA=b;a.d5=f;}
function AV_(a,b,c,d){var e,f,g,h;e=a.d5;e=d.e$.data[e];if(!a.bh.bF(d))return a.m.k(b,c,d);if(e>=a.fA.go)return a.m.k(b,c,d);f=a.d5;e=e+1|0;d.e$.data[f]=e;g=a.bh.k(b,c,d);if(g>=0){b=a.d5;d.e$.data[b]=0;return g;}g=a.d5;e=e+(-1)|0;h=d.e$.data;h[g]=e;if(e>=a.fA.gq)return a.m.k(b,c,d);h[g]=0;return (-1);}
function AUr(a){return QD(a.fA);}
var Nd=I(GP);
function AL8(a,b,c,d){var e,f,g;e=0;f=a.fA.go;a:{while(true){g=a.bh.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fA.gq)return (-1);return a.m.k(b,c,d);}
var PK=I(Ej);
function AVo(a,b,c,d){var e;if(!a.bh.bF(d))return a.m.k(b,c,d);e=a.m.k(b,c,d);if(e>=0)return e;return a.bh.k(b,c,d);}
var WU=I(IE);
function AXc(a,b,c){var d=new WU();AQM(d,a,b,c);return d;}
function AQM(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;}
function AHK(a,b,c,d){var e;if(!a.bh.bF(d))return a.m.k(b,c,d);e=a.m.k(b,c,d);if(e<0)e=a.bh.k(b,c,d);return e;}
var Rt=I(GP);
function A6H(a,b,c,d,e){var f=new Rt();ZR(f,a,b,c,d,e);return f;}
function ZR(a,b,c,d,e,f){var g,h;g=A0p;A0p=g+1|0;h=new Bq;h.b=D(20);a.F=(P(h,h.a,g,10)).r();a.m=d;a.bh=c;a.cf=e;a.fA=b;a.d5=f;}
function AF7(a,b,c,d){var e,f,g;e=a.d5;f=d.e$.data[e];if(!a.bh.bF(d))return a.m.k(b,c,d);g=a.fA;if(f>=g.go){e=a.d5;d.e$.data[e]=0;return a.m.k(b,c,d);}if(f<g.gq){e=a.d5;d.e$.data[e]=f+1|0;e=a.bh.k(b,c,d);}else{e=a.m.k(b,c,d);if(e>=0){b=a.d5;d.e$.data[b]=0;return e;}e=a.d5;d.e$.data[e]=f+1|0;e=a.bh.k(b,c,d);}return e;}
var X3=I(Fi);
function AXr(a,b,c){var d=new X3();AGm(d,a,b,c);return d;}
function AGm(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;}
function AVV(a,b,c,d){var e;e=d.bi;if(e>b)return a.m.dm(b,e,c,d);return a.m.k(b,c,d);}
function ASZ(a,b,c,d){var e;e=d.bi;if(a.m.dm(b,e,c,d)>=0)return b;return (-1);}
function AQ$(a){return B(204);}
function UO(){Fi.call(this);this.nd=null;}
function AWO(a,b,c,d){var e=new UO();AQ1(e,a,b,c,d);return e;}
function AQ1(a,b,c,d,e){var f,g;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);a.F=(P(g,g.a,f,10)).r();a.m=c;a.bh=b;a.cf=d;a.nd=e;}
function AQB(a,b,c,d){var e,f,g,h;e=d.bi;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.nd;if(f<0)break;h=c.e.data;if(f>=h.length)break;if(g.jo(h[f]))break a;f=f+1|0;}c=new Bd;c.c=1;c.d=1;G(c);}if(f>=0)e=f;if(e>b)return a.m.dm(b,e,c,d);return a.m.k(b,c,d);}
function AE3(a,b,c,d){var e,f,g,h,i,j,k;e=d.bi;f=a.m.di(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.nd;if(g<0)break;i=c.e.data;if(g>=i.length)break;if(h.jo(i[g]))break a;g=g+1|0;}c=new Bd;c.c=1;c.d=1;G(c);}if(g>=0)e=g;j=a.m.dm(f,e,c,d);if(f>j)j=f;if(j<=0)k=j?(-1):0;else{k=j-1|0;b:{while(true){if(k<b){k=(-1);break b;}d=a.nd;if(k<0)break;i=c.e.data;if(k>=i.length)break;if(d.jo(i[k]))break b;k=k+(-1)|0;}c=new Bd;c.c=1;c.d=1;G(c);}}if(k>=b)b=k>=j?k:k+1|0;return b;}
function AR6(a){return B(205);}
var Gk=I();
var A6I=null;var A6J=null;function Ou(b){var c;if(!(b&1)){c=A6J;if(c!==null)return c;c=new RE;A6J=c;return c;}c=A6I;if(c!==null)return c;c=new RD;A6I=c;return c;}
var AEu=I(Ef);
function AYR(a,b,c){var d=new AEu();ARw(d,a,b,c);return d;}
function ARw(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;a.bz=b;}
function AGc(a,b,c,d){var e;a:{while(true){if((b+a.bz.cU()|0)>d.bi)break a;e=a.bz.cy(b,c);if(e<1)break;b=b+e|0;}}return a.m.k(b,c,d);}
var ACE=I(GF);
function AWw(a,b,c){var d=new ACE();AVk(d,a,b,c);return d;}
function AVk(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;a.bz=b;}
function AOW(a,b,c,d){var e;if((b+a.bz.cU()|0)<=d.bi){e=a.bz.cy(b,c);if(e>=1)b=b+e|0;}return a.m.k(b,c,d);}
var Vc=I(GI);
function AZh(a,b,c,d){var e=new Vc();AOT(e,a,b,c,d);return e;}
function AOT(a,b,c,d,e){var f,g;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);a.F=(P(g,g.a,f,10)).r();a.m=d;a.bh=c;a.cf=e;a.bz=c;a.h5=b;}
function ASm(a,b,c,d){var e,f,g,h,i;e=a.h5;f=e.gq;g=e.go;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bz.cU()|0)>d.bi)break a;i=a.bz.cy(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.m.k(b,c,d);}if((b+a.bz.cU()|0)>d.bi){d.dy=1;return (-1);}i=a.bz.cy(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var WO=I(Ef);
function AZa(a,b,c){var d=new WO();AWj(d,a,b,c);return d;}
function AWj(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;a.bz=b;}
function AQs(a,b,c,d){var e;while(true){e=a.m.k(b,c,d);if(e>=0)break;if((b+a.bz.cU()|0)<=d.bi){e=a.bz.cy(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AAx=I(GF);
function AY1(a,b,c){var d=new AAx();AKv(d,a,b,c);return d;}
function AKv(a,b,c,d){var e,f;e=A0p;A0p=e+1|0;f=new Bq;f.b=D(20);a.F=(P(f,f.a,e,10)).r();a.m=c;a.bh=b;a.cf=d;a.bz=b;}
function AGk(a,b,c,d){var e;e=a.m.k(b,c,d);if(e>=0)return e;return a.bh.k(b,c,d);}
var Xy=I(GI);
function AXE(a,b,c,d){var e=new Xy();AQT(e,a,b,c,d);return e;}
function AQT(a,b,c,d,e){var f,g;f=A0p;A0p=f+1|0;g=new Bq;g.b=D(20);a.F=(P(g,g.a,f,10)).r();a.m=d;a.bh=c;a.cf=e;a.bz=c;a.h5=b;}
function ASA(a,b,c,d){var e,f,g,h,i,j;e=a.h5;f=e.gq;g=e.go;h=0;while(true){if(h>=f){a:{while(true){i=a.m.k(b,c,d);if(i>=0)break;if((b+a.bz.cU()|0)<=d.bi){i=a.bz.cy(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bz.cU()|0)>d.bi){d.dy=1;return (-1);}j=a.bz.cy(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Pw=I(Cr);
function AZb(){var a=new Pw();AJw(a);return a;}
function AJw(a){var b,c;b=A0p;A0p=b+1|0;c=new Bq;c.b=D(20);a.F=(P(c,c.a,b,10)).r();}
function ANI(a,b,c,d){if(b&&!(d.hL&&b==d.dt))return (-1);return a.m.k(b,c,d);}
function AMn(a,b){return 0;}
function AOY(a){return B(206);}
function VT(){Cr.call(this);this.xF=0;}
function ATu(a){var b=new VT();AMD(b,a);return b;}
function AMD(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.xF=b;}
function AG_(a,b,c,d){var e,f,g,h;a:{if(b>=d.bi)e=32;else{if(b>=0){f=c.e.data;if(b<f.length){e=f[b];break a;}}c=new Bd;c.c=1;c.d=1;G(c);}}b:{if(!b)g=32;else{g=b-1|0;if(g>=0){f=c.e.data;if(g<f.length){g=f[g];break b;}}c=new Bd;c.c=1;c.d=1;G(c);}}h=d.nL?0:d.dt;return (e!=32&&!Pg(a,e,b,h,c)?0:1)^(g!=32&&!Pg(a,g,b-1|0,h,c)?0:1)^a.xF?(-1):a.m.k(b,c,d);}
function AHu(a,b){return 0;}
function AV9(a){return B(207);}
function Pg(a,b,c,d,e){var f,g;a:{b:{switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(Dg(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;g=e.e.data;if(c>=g.length)break c;e:{f:{b=g[c];switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}f=1;break e;}f=0;}if(f)return 0;if(Dg(b)!=6)return 1;}}return 1;}e=new Bd;e.c=1;e.d=1;G(e);}return 0;}
var UM=I(Cr);
function AW9(){var a=new UM();AST(a);return a;}
function AST(a){var b,c;b=A0p;A0p=b+1|0;c=new Bq;c.b=D(20);a.F=(P(c,c.a,b,10)).r();}
function AMC(a,b,c,d){if(b!=d.ju)return (-1);return a.m.k(b,c,d);}
function AV7(a,b){return 0;}
function AGR(a){return B(208);}
function Sv(){Cr.call(this);this.kO=0;}
function AYZ(a){var b=new Sv();ACm(b,a);return b;}
function ACm(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.kO=b;}
function ARd(a,b,c,d){var e,f,g,h;e=d.hL?d.bi:c.e.data.length;if(b>=e){f=a.kO;d.bP.data[f]=0;return a.m.k(b,c,d);}a:{g=e-b|0;if(g==2){if(b>=0){h=c.e.data;f=h.length;if(b<f){if(h[b]!=13)break a;e=b+1|0;if(e>=0&&e<f){if(h[e]!=10)break a;f=a.kO;d.bP.data[f]=0;return a.m.k(b,c,d);}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}}b:{c:{if(g==1){if(b>=0){h=c.e.data;if(b<h.length){f=h[b];if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}}c=new Bd;c.c=1;c.d=1;G(c);}}return (-1);}e
=a.kO;d.bP.data[e]=0;return a.m.k(b,c,d);}
function AIE(a,b){var c,d,e;c=a.kO;d=b.bP.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AOz(a){return B(209);}
var AC0=I(Cr);
function AY7(){var a=new AC0();AMp(a);return a;}
function AMp(a){var b,c;b=A0p;A0p=b+1|0;c=new Bq;c.b=D(20);a.F=(P(c,c.a,b,10)).r();}
function AP7(a,b,c,d){if(b<(!d.nL?d.bi:c.e.data.length))return (-1);d.dy=1;d.DV=1;return a.m.k(b,c,d);}
function AEF(a,b){return 0;}
function ALf(a){return B(210);}
function T4(){Cr.call(this);this.vH=null;}
function AY8(a){var b=new T4();ARe(b,a);return b;}
function ARe(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.vH=b;}
function AIg(a,b,c,d){var e,f,g,h,i;a:{b:{c:{if(b!=d.bi){if(!b)break b;if(d.hL&&b==d.dt)break b;e=a.vH;f=b-1|0;if(f>=0){g=c.e.data;h=g.length;if(f<h){i=g[f];if(b<0)break a;if(b>=h)break a;if(!e.wz(i,g[b]))break c;else break b;}}c=new Bd;c.c=1;c.d=1;G(c);}}return (-1);}return a.m.k(b,c,d);}c=new Bd;c.c=1;c.d=1;G(c);}
function AKW(a,b){return 0;}
function AGw(a){return B(211);}
var ACT=I(CQ);
function AZp(){var a=new ACT();APM(a);return a;}
function APM(a){var b,c;b=A0p;A0p=b+1|0;c=new Bq;c.b=D(20);a.F=(P(c,c.a,b,10)).r();}
function AVt(a,b,c,d){var e,f,g,h,i,j,k;e=d.bi;f=b+1|0;if(f>e){d.dy=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){i=Bw(g[b]&64512,55296);j=i?0:1;a:{if(j){k=b+2|0;if(k<=e){if(f>=0&&f<h){j=g[f];b=i?0:1;if(!(b&&((j&64512)!=56320?0:1)?1:0))break a;else return a.m.k(k,c,d);}c=new Bd;c.c=1;c.d=1;G(c);}}}return a.m.k(f,c,d);}}c=new Bd;c.c=1;c.d=1;G(c);}
function AJC(a){return B(212);}
function AHy(a,b){a.m=b;}
function API(a){return (-2147483602);}
function AHx(a,b){return 1;}
function U7(){CQ.call(this);this.q1=null;}
function AYJ(a){var b=new U7();AIA(b,a);return b;}
function AIA(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.q1=b;}
function APZ(a,b,c,d){var e,f,g,h,i,j,k,l;e=d.bi;f=b+1|0;if(f>e){d.dy=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){i=g[b];j=Bw(i&64512,55296);k=j?0:1;a:{if(k){l=b+2|0;if(l<=e){if(f>=0&&f<h){k=g[f];b=j?0:1;if(!(b&&((k&64512)!=56320?0:1)?1:0))break a;else return a.q1.jo(((i&1023)<<10|k&1023)+65536|0)?(-1):a.m.k(l,c,d);}c=new Bd;c.c=1;c.d=1;G(c);}}}return a.q1.jo(i)?(-1):a.m.k(f,c,d);}}c=new Bd;c.c=1;c.d=1;G(c);}
function AIQ(a){return B(213);}
function AR4(a,b){a.m=b;}
function AEx(a){return (-2147483602);}
function AVQ(a,b){return 1;}
function ACF(){Cr.call(this);this.nE=0;}
function AX1(a){var b=new ACF();AKP(b,a);return b;}
function AKP(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.nE=b;}
function ANe(a,b,c,d){var e,f,g;e=d.hL?d.bi:c.e.data.length;if(b>=e){e=a.nE;d.bP.data[e]=0;return a.m.k(b,c,d);}a:{if((e-b|0)==1){if(b>=0){f=c.e.data;if(b<f.length){if(f[b]!=10)break a;else{g=a.nE;d.bP.data[g]=1;return a.m.k(b+1|0,c,d);}}}c=new Bd;c.c=1;c.d=1;G(c);}}return (-1);}
function AKN(a,b){var c,d,e;c=a.nE;d=b.bP.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AN0(a){return B(209);}
function Zo(){Cr.call(this);this.nZ=0;}
function AXB(a){var b=new Zo();ALC(b,a);return b;}
function ALC(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.nZ=b;}
function AP5(a,b,c,d){var e,f,g;if((d.hL?d.bi-b|0:c.e.data.length-b|0)<=0){e=a.nZ;d.bP.data[e]=0;return a.m.k(b,c,d);}if(b>=0){f=c.e.data;if(b<f.length){if(f[b]!=10)return (-1);g=a.nZ;d.bP.data[g]=1;return a.m.k(b+1|0,c,d);}}c=new Bd;c.c=1;c.d=1;G(c);}
function AKD(a,b){var c,d,e;c=a.nZ;d=b.bP.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AFN(a){return B(214);}
function Te(){Cr.call(this);this.jy=0;}
function AWu(a){var b=new Te();AWb(b,a);return b;}
function AWb(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.jy=b;}
function AMc(a,b,c,d){var e,f,g,h;e=d.hL?d.bi-b|0:c.e.data.length-b|0;if(!e){e=a.jy;d.bP.data[e]=0;return a.m.k(b,c,d);}a:{if(e<2){if(b>=0){f=c.e.data;if(b<f.length){g=f[b];h=97;break a;}}c=new Bd;c.c=1;c.d=1;G(c);}if(b>=0){f=c.e.data;h=f.length;if(b<h){g=f[b];e=b+1|0;if(e>=0&&e<h){h=f[e];break a;}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}switch(g){case 10:case 133:case 8232:case 8233:e=a.jy;d.bP.data[e]=0;return a.m.k(b,c,d);case 13:if(h!=10){e=a.jy;d.bP.data[e]=0;return a.m.k(b,c,d);}e=a.jy;d.bP.data[e]
=0;return a.m.k(b,c,d);default:}return (-1);}
function AII(a,b){var c,d,e;c=a.jy;d=b.bP.data;e=!d[c]?0:1;d[c]=(-1);return e;}
function AKY(a){return B(215);}
function Iv(){var a=this;CQ.call(a);a.j1=0;a.ih=0;}
function AZB(a,b){var c=new Iv();AIk(c,a,b);return c;}
function AIk(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.j1=b;a.ih=c;}
function AGe(a,b,c,d){var e,f,g,h,i,j,k;e=I4(a,d);if(e!==null&&(b+e.e.data.length|0)<=d.bi){f=0;a:{b:{c:{d:{while(true){g=e.e.data;h=g.length;i=Bw(f,h);if(i>=0){f=a.ih;d.bP.data[f]=h;return a.m.k(b+h|0,c,d);}if(f<0)break c;if(i>=0)break c;j=g[f];h=b+f|0;if(h<0)break d;k=c.e.data;if(h>=k.length)break d;if(j!=k[h]){if(f<0)break a;if(i>=0)break a;i=Hy(g[f]);if(h<0)break b;k=c.e.data;if(h>=k.length)break b;if(i!=k[h])break;}f=f+1|0;}return (-1);}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c
=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}return (-1);}
function ARq(a,b){a.m=b;}
function I4(a,b){var c,d,e,f,g,h,i;a:{c=a.j1;d=b.ca.data;e=c*2|0;f=d[e];g=d[e+1|0];c=g|f;e=g-f|0;if((c|e)>=0){h=b.hK;i=h.e;c=Bw(g,i.data.length);if(c<=0){g=Bw(f,g);if(g>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!g){O();h=A36;}else if(!(!f&&!c)){h=new L;O();d=D(e);h.e=d;K(i,f,d,0,e);}break a;}}h=null;}return h;}
function AFU(a){var b,c,d,e,f,g;b=a.b6;c=new N;c.b=D(16);H(c,c.a,B(216));P(c,c.a,b,10);d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);return d;}
function ARI(a,b){var c,d,e;c=a.ih;d=b.bP.data;e=!d[c]?0:1;d[c]=(-1);return e;}
var ACL=I(Iv);
function AWz(a,b){var c=new ACL();AUa(c,a,b);return c;}
function AUa(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.j1=b;a.ih=c;}
function AIR(a,b,c,d){var e,f,g;e=I4(a,d);if(e!==null&&(b+e.e.data.length|0)<=d.bi){f=!JH(c,e,b)?(-1):e.e.data.length;if(f<0)return (-1);g=a.ih;d.bP.data[g]=f;return a.m.k(b+f|0,c,d);}return (-1);}
function ATT(a,b,c,d){var e,f;e=I4(a,d);f=d.dt;if(e!==null&&(b+e.e.data.length|0)<=f){while(true){if(b>f)return (-1);b=KV(c,e,b);if(b<0)return (-1);if(a.m.k(b+e.e.data.length|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFO(a,b,c,d,e){var f,g;f=I4(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=OQ(d,f,c);if(g<0)break a;if(g<b)break a;if(a.m.k(g+f.e.data.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AOR(a,b){return 1;}
function AUi(a){var b,c,d,e,f,g;b=a.b6;c=new N;c.b=D(16);H(c,c.a,B(217));P(c,c.a,b,10);d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);return d;}
function Xj(){Iv.call(this);this.zm=0;}
function AXC(a,b){var c=new Xj();AKM(c,a,b);return c;}
function AKM(a,b,c){var d,e;d=A0p;A0p=d+1|0;e=new Bq;e.b=D(20);a.F=(P(e,e.a,d,10)).r();a.j1=b;a.ih=c;}
function AOa(a,b,c,d){var e,f,g,h,i,j,k;a:{e=a.j1;f=d.ca.data;g=e*2|0;h=f[g];i=f[g+1|0];e=i|h;g=i-h|0;if((e|g)>=0){j=d.hK;k=j.e;e=Bw(i,k.data.length);if(e<=0){i=Bw(h,i);if(i>0){c=new Bh;c.c=1;c.d=1;C3(c);G(c);}if(!i){O();j=A36;}else if(!(!h&&!e)){j=new L;O();f=D(g);j.e=f;K(k,h,f,0,g);}break a;}}j=null;}if(j!==null&&(b+j.e.data.length|0)<=d.bi){i=0;b:{c:{while(true){f=j.e.data;g=f.length;e=Bw(i,g);if(e>=0){e=a.ih;d.bP.data[e]=g;return a.m.k(b+g|0,c,d);}if(i<0)break b;if(e>=0)break b;e=f[i];if(A5A===null){if(A5B
===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}e=B$(A5A,e)&65535;if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}g=B$(A5y,e)&65535;h=b+i|0;if(h<0)break c;f=c.e.data;if(h>=f.length)break c;e=f[h];if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}e=B$(A5A,e)&65535;if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}if(g!=(B$(A5y,e)&65535))break;i=i+1|0;}return (-1);}c
=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}return (-1);}
function AHv(a){var b,c,d,e,f,g;b=a.zm;c=new N;c.b=D(16);H(c,c.a,B(218));P(c,c.a,b,10);d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);return d;}
var KM=I(Bq);
function Qf(a,b,c,d,e){Zv(a,b,c,d,e);return a;}
function AKw(a,b,c,d,e){var f,g,h,i;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.b.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function AHi(a,b,c,d){var e,f,g,h,i;e=a.a;Bo(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.b.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
function Th(a,b){var c;if(b>=0&&b<a.a)return a.b.data[b];c=new Bh;c.c=1;c.d=1;G(c);}
function AD_(a){return a.a;}
function AHT(a,b){ND(a,b);}
function AS4(a,b,c){Bo(a,b,b+1|0);a.b.data[b]=c;return a;}
function AFh(a,b,c){H(a,b,c);return a;}
function Yd(){var a=this;CX.call(a);a.dC=null;a.qa=null;a.ri=null;}
function AXI(a){var b=new Yd();AJh(b,a);return b;}
function AJh(a,b){var c,d,e,f,g,h;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;d=new L;e=b.b;f=b.a;O();g=D(f);d.e=g;K(e,0,g,0,f);a.dC=d;c=b.a;a.bC=c;a.qa=APH(c);a.ri=APH(a.bC);c=0;a:{b:{while(true){f=a.bC;if(c>=(f-1|0))break;b=a.qa;d=a.dC;if(c<0)break a;e=d.e.data;if(c>=e.length)break a;Py(b,e[c],(f-c|0)-1|0);b=a.ri;d=a.dC;h=(a.bC-c|0)-1|0;if(h<0)break b;e=d.e.data;if(h>=e.length)break b;Py(b,e[h],h);c=c+1|0;}return;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function AJo(a,b,c){var d,e,f,g,h,i;d=0;a:{b:{c:{while(true){e=a.bC;if(d>=e)break;f=d+b|0;if(f<0)break a;g=c.e.data;if(f>=g.length)break a;h=g[f];i=a.dC;if(d<0)break b;g=i.e.data;if(d>=g.length)break b;if(h!=g[d]){b=0;break c;}d=d+1|0;}b=1;}if(!b)e=(-1);return e;}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}
function AG3(a,b,c,d){var e,f;e=d.bi;while(true){if(b>e)return (-1);f=AC4(a,c,b,e);if(f<0)return (-1);if(a.m.k(f+a.bC|0,c,d)>=0)break;b=f+1|0;}return f;}
function AKS(a,b,c,d,e){while(true){if(c<b)return (-1);c=ACl(a,d,b,c);if(c<0)return (-1);if(a.m.k(c+a.bC|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AQi(a){var b,c,d,e,f,g;b=a.dC;c=new N;c.b=D(16);H(c,c.a,B(219));d=c.a;if(b===null)b=B(2);H(c,d,b);b=new L;e=c.b;f=c.a;O();g=D(f);b.e=g;K(e,0,g,0,f);return b;}
function ALL(a,b){var c,d,e,f,g,h,i;if(b instanceof Fl){c=b.ds;d=a.dC.e.data;if(0<d.length)return c!=d[0]?0:1;b=new Bd;b.c=1;b.d=1;G(b);}if(b instanceof E8){b=b;e=a.dC;d=e.e;if(1!=d.data.length){e=new L;O();f=D(1);e.e=f;K(d,0,f,0,1);}b=b.ep;d=e.e.data;if(0>=d.length){b=new Bd;b.c=1;b.d=1;G(b);}return (!b.K(d[0])?(-1):1)<=0?0:1;}if(!(b instanceof Ez)){if(!(b instanceof FC))return 1;a:{d=a.dC.e.data;g=d.length;if(g>1){h=b.iK;if(0>=g){b=new Bd;b.c=1;b.d=1;G(b);}i=d[0];if(1>=g){b=new Bd;U1(b);G(b);}if(h==AC2(i,
d[1])){c=1;break a;}}c=0;}return c;}b=b;d=a.dC.e.data;if(0>=d.length){b=new Bd;b.c=1;b.d=1;G(b);}b:{c:{if(!b.K(d[0])){d=a.dC.e.data;i=d.length;if(i<=1)break c;if(0>=i){b=new Bd;b.c=1;b.d=1;G(b);}h=d[0];if(1>=i){b=new Bd;b.c=1;b.d=1;G(b);}if(!b.K(((h&1023)<<10|d[1]&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;}
function AC4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=a.dC;f=a.bC-1|0;if(f>=0){g=e.e.data;if(f<g.length){h=g[f];a:{b:{c:{while(true){i=a.bC;if(c>(d-i|0))return (-1);j=(c+i|0)-1|0;if(j<0)break c;g=b.e.data;k=g.length;if(j>=k)break c;f=g[j];if(f==h){j=0;d:{while(j<i){l=j+c|0;if(l<0)break a;if(l>=k)break a;m=g[l];e=a.dC;if(j<0)break b;n=e.e.data;if(j>=n.length)break b;if(m!=n[j]){k=0;break d;}j=j+1|0;}k=1;}if(k)break;}c=c+Qd(a.qa,f)|0;}return c;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d
=1;G(b);}}b=new Bd;b.c=1;b.d=1;G(b);}
function ACl(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.dC.e.data;if(0>=e.length){b=new Bd;b.c=1;b.d=1;G(b);}f=e[0];g=(b.e.data.length-d|0)-a.bC|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;e=b.e.data;g=e.length;if(d>=g)break c;h=e[d];if(h==f){i=0;d:{while(i<a.bC){j=i+d|0;if(j<0)break a;if(j>=g)break a;j=e[j];k=a.dC;if(i<0)break b;l=k.e.data;if(i>=l.length)break b;if(j!=l[i]){j=0;break d;}i=i+1|0;}j=1;}if(j)break;}d=d-Qd(a.ri,h)|0;}return d;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}b
=new Bd;b.c=1;b.d=1;G(b);}
function MR(){CX.call(this);this.ra=null;}
function AOk(a,b,c){var d,e,f,g,h;d=0;a:{b:{while(true){e=a.ra.e.data;f=e.length;g=Bw(d,f);if(g>=0)break;if(d<0)break a;if(g>=0)break a;f=e[d];h=b+d|0;if(h<0)break b;e=c.e.data;if(h>=e.length)break b;g=e[h];if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}g=B$(A5A,g)&65535;if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}if(f!=(B$(A5y,g)&65535))return (-1);d=d+1|0;}return f;}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d
=1;G(c);}
function ALZ(a){var b,c,d,e,f,g;b=a.ra;c=new N;c.b=D(16);H(c,c.a,B(220));d=c.a;if(b===null)b=B(2);H(c,d,b);b=new L;e=c.b;f=c.a;O();g=D(f);b.e=g;K(e,0,g,0,f);return b;}
function TW(){CX.call(this);this.qT=null;}
function AZI(a){var b=new TW();ALA(b,a);return b;}
function ALA(a,b){var c,d,e,f,g;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;d=new L;e=b.b;f=b.a;O();g=D(f);d.e=g;K(e,0,g,0,f);a.qT=d;a.bC=b.a;}
function ASp(a,b,c){var d,e,f,g,h,i,j;d=0;a:{b:{c:{d:{while(true){e=a.qT.e.data;f=e.length;g=Bw(d,f);if(g>=0)break;if(d<0)break c;if(g>=0)break c;h=e[d];i=b+d|0;if(i<0)break d;j=c.e.data;if(i>=j.length)break d;if(h!=j[i]){if(d<0)break a;if(g>=0)break a;f=Hy(e[d]);if(i<0)break b;e=c.e.data;if(i>=e.length)break b;if(f!=e[i])return (-1);}d=d+1|0;}return f;}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}c=new Bd;c.c=1;c.d=1;G(c);}
function ATG(a){var b,c,d,e,f,g;b=a.qT;c=new N;c.b=D(16);H(c,c.a,B(221));d=c.a;if(b===null)b=B(2);H(c,d,b);b=new L;e=c.b;f=c.a;O();g=D(f);b.e=g;K(e,0,g,0,f);return b;}
var AEr=I();
var Iu=I();
var A6K=null;var A6L=null;var A6M=null;function ARX(){ARX=Bi(Iu);AJM();}
function ADi(a,b){var c,d,e;c=0;while(true){ARX();d=A6M.data;if(c>=d.length){e=new Kp;e.c=1;e.d=1;e.f=B(43);e.EQ=B(43);e.Ek=b;G(e);}d=d[c].data;if(BO(b,d[0]))break;c=c+1|0;}return d[1];}
function AJM(){A6K=AY5();A6L=AXT();A6M=U($rt_arraycls(C),[U(C,[B(222),AZC()]),U(C,[B(223),AWr()]),U(C,[B(224),AY4()]),U(C,[B(225),AZi()]),U(C,[B(226),A6L]),U(C,[B(227),AX5()]),U(C,[B(228),AXK()]),U(C,[B(229),AWE()]),U(C,[B(230),AWy()]),U(C,[B(231),AWL()]),U(C,[B(232),AXd()]),U(C,[B(233),AWI()]),U(C,[B(234),AYC()]),U(C,[B(235),AWo()]),U(C,[B(236),AZc()]),U(C,[B(237),AW_()]),U(C,[B(238),AX3()]),U(C,[B(239),AW7()]),U(C,[B(240),AX4()]),U(C,[B(241),AWQ()]),U(C,[B(242),AZo()]),U(C,[B(243),AW0()]),U(C,[B(244),AYa()]),
U(C,[B(245),AY2()]),U(C,[B(246),AY0()]),U(C,[B(247),AZl()]),U(C,[B(248),AWP()]),U(C,[B(249),AYI()]),U(C,[B(250),A6K]),U(C,[B(251),AYn()]),U(C,[B(252),AWF()]),U(C,[B(253),A6K]),U(C,[B(254),AWm()]),U(C,[B(255),A6L]),U(C,[B(256),AXt()]),U(C,[B(257),Bn(0,127)]),U(C,[B(258),Bn(128,255)]),U(C,[B(259),Bn(256,383)]),U(C,[B(260),Bn(384,591)]),U(C,[B(261),Bn(592,687)]),U(C,[B(262),Bn(688,767)]),U(C,[B(263),Bn(768,879)]),U(C,[B(264),Bn(880,1023)]),U(C,[B(265),Bn(1024,1279)]),U(C,[B(266),Bn(1280,1327)]),U(C,[B(267),Bn(1328,
1423)]),U(C,[B(268),Bn(1424,1535)]),U(C,[B(269),Bn(1536,1791)]),U(C,[B(270),Bn(1792,1871)]),U(C,[B(271),Bn(1872,1919)]),U(C,[B(272),Bn(1920,1983)]),U(C,[B(273),Bn(2304,2431)]),U(C,[B(274),Bn(2432,2559)]),U(C,[B(275),Bn(2560,2687)]),U(C,[B(276),Bn(2688,2815)]),U(C,[B(277),Bn(2816,2943)]),U(C,[B(278),Bn(2944,3071)]),U(C,[B(279),Bn(3072,3199)]),U(C,[B(280),Bn(3200,3327)]),U(C,[B(281),Bn(3328,3455)]),U(C,[B(282),Bn(3456,3583)]),U(C,[B(283),Bn(3584,3711)]),U(C,[B(284),Bn(3712,3839)]),U(C,[B(285),Bn(3840,4095)]),
U(C,[B(286),Bn(4096,4255)]),U(C,[B(287),Bn(4256,4351)]),U(C,[B(288),Bn(4352,4607)]),U(C,[B(289),Bn(4608,4991)]),U(C,[B(290),Bn(4992,5023)]),U(C,[B(291),Bn(5024,5119)]),U(C,[B(292),Bn(5120,5759)]),U(C,[B(293),Bn(5760,5791)]),U(C,[B(294),Bn(5792,5887)]),U(C,[B(295),Bn(5888,5919)]),U(C,[B(296),Bn(5920,5951)]),U(C,[B(297),Bn(5952,5983)]),U(C,[B(298),Bn(5984,6015)]),U(C,[B(299),Bn(6016,6143)]),U(C,[B(300),Bn(6144,6319)]),U(C,[B(301),Bn(6400,6479)]),U(C,[B(302),Bn(6480,6527)]),U(C,[B(303),Bn(6528,6623)]),U(C,[B(304),
Bn(6624,6655)]),U(C,[B(305),Bn(6656,6687)]),U(C,[B(306),Bn(7424,7551)]),U(C,[B(307),Bn(7552,7615)]),U(C,[B(308),Bn(7616,7679)]),U(C,[B(309),Bn(7680,7935)]),U(C,[B(310),Bn(7936,8191)]),U(C,[B(311),Bn(8192,8303)]),U(C,[B(312),Bn(8304,8351)]),U(C,[B(313),Bn(8352,8399)]),U(C,[B(314),Bn(8400,8447)]),U(C,[B(315),Bn(8448,8527)]),U(C,[B(316),Bn(8528,8591)]),U(C,[B(317),Bn(8592,8703)]),U(C,[B(318),Bn(8704,8959)]),U(C,[B(319),Bn(8960,9215)]),U(C,[B(320),Bn(9216,9279)]),U(C,[B(321),Bn(9280,9311)]),U(C,[B(322),Bn(9312,
9471)]),U(C,[B(323),Bn(9472,9599)]),U(C,[B(324),Bn(9600,9631)]),U(C,[B(325),Bn(9632,9727)]),U(C,[B(326),Bn(9728,9983)]),U(C,[B(327),Bn(9984,10175)]),U(C,[B(328),Bn(10176,10223)]),U(C,[B(329),Bn(10224,10239)]),U(C,[B(330),Bn(10240,10495)]),U(C,[B(331),Bn(10496,10623)]),U(C,[B(332),Bn(10624,10751)]),U(C,[B(333),Bn(10752,11007)]),U(C,[B(334),Bn(11008,11263)]),U(C,[B(335),Bn(11264,11359)]),U(C,[B(336),Bn(11392,11519)]),U(C,[B(337),Bn(11520,11567)]),U(C,[B(338),Bn(11568,11647)]),U(C,[B(339),Bn(11648,11743)]),U(C,
[B(340),Bn(11776,11903)]),U(C,[B(341),Bn(11904,12031)]),U(C,[B(342),Bn(12032,12255)]),U(C,[B(343),Bn(12272,12287)]),U(C,[B(344),Bn(12288,12351)]),U(C,[B(345),Bn(12352,12447)]),U(C,[B(346),Bn(12448,12543)]),U(C,[B(347),Bn(12544,12591)]),U(C,[B(348),Bn(12592,12687)]),U(C,[B(349),Bn(12688,12703)]),U(C,[B(350),Bn(12704,12735)]),U(C,[B(351),Bn(12736,12783)]),U(C,[B(352),Bn(12784,12799)]),U(C,[B(353),Bn(12800,13055)]),U(C,[B(354),Bn(13056,13311)]),U(C,[B(355),Bn(13312,19893)]),U(C,[B(356),Bn(19904,19967)]),U(C,[B(357),
Bn(19968,40959)]),U(C,[B(358),Bn(40960,42127)]),U(C,[B(359),Bn(42128,42191)]),U(C,[B(360),Bn(42752,42783)]),U(C,[B(361),Bn(43008,43055)]),U(C,[B(362),Bn(44032,55203)]),U(C,[B(363),Bn(55296,56191)]),U(C,[B(364),Bn(56192,56319)]),U(C,[B(365),Bn(56320,57343)]),U(C,[B(366),Bn(57344,63743)]),U(C,[B(367),Bn(63744,64255)]),U(C,[B(368),Bn(64256,64335)]),U(C,[B(369),Bn(64336,65023)]),U(C,[B(370),Bn(65024,65039)]),U(C,[B(371),Bn(65040,65055)]),U(C,[B(372),Bn(65056,65071)]),U(C,[B(373),Bn(65072,65103)]),U(C,[B(374),Bn(65104,
65135)]),U(C,[B(375),Bn(65136,65279)]),U(C,[B(376),Bn(65280,65519)]),U(C,[B(29),Bn(0,1114111)]),U(C,[B(377),AWJ()]),U(C,[B(378),CH(0,1)]),U(C,[B(379),J4(62,1)]),U(C,[B(380),CH(1,1)]),U(C,[B(381),CH(2,1)]),U(C,[B(382),CH(3,0)]),U(C,[B(383),CH(4,0)]),U(C,[B(384),CH(5,1)]),U(C,[B(385),J4(448,1)]),U(C,[B(386),CH(6,1)]),U(C,[B(387),CH(7,0)]),U(C,[B(388),CH(8,1)]),U(C,[B(389),J4(3584,1)]),U(C,[B(390),CH(9,1)]),U(C,[B(391),CH(10,1)]),U(C,[B(392),CH(11,1)]),U(C,[B(393),J4(28672,0)]),U(C,[B(394),CH(12,0)]),U(C,[B(395),
CH(13,0)]),U(C,[B(396),CH(14,0)]),U(C,[B(397),AXH(983040,1,1)]),U(C,[B(398),CH(15,0)]),U(C,[B(399),CH(16,1)]),U(C,[B(400),CH(18,1)]),U(C,[B(401),AX0(19,0,1)]),U(C,[B(402),J4(1643118592,1)]),U(C,[B(403),CH(20,0)]),U(C,[B(404),CH(21,0)]),U(C,[B(405),CH(22,0)]),U(C,[B(406),CH(23,0)]),U(C,[B(407),CH(24,1)]),U(C,[B(408),J4(2113929216,1)]),U(C,[B(409),CH(25,1)]),U(C,[B(410),CH(26,0)]),U(C,[B(411),CH(27,0)]),U(C,[B(412),CH(28,1)]),U(C,[B(413),CH(29,0)]),U(C,[B(414),CH(30,0)])]);}
function MP(){CX.call(this);this.qR=0;}
function ASt(a,b,c){var d,e,f,g;d=b+1|0;if(b>=0){e=c.e.data;f=e.length;if(b<f){g=e[b];if(d>=0&&d<f){d=e[d];b=a.qR;d=((g&1023)<<10|d&1023)+65536|0;if(A5A===null){if(A5B===null)A5B=DF();A5A=Cc(Ce((A5B.value!==null?$rt_str(A5B.value):null)));}d=B$(A5A,d);if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}return b!=B$(A5y,d)?(-1):2;}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}
function AV8(a){var b,c,d,e,f,g;b=new L;c=a.qR;if(c<65536){d=D(1);d.data[0]=c&65535;}else d=E$([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;O();f=e.length;e=D(f);b.e=e;K(d,0,e,0,f);g=new N;g.b=D(16);H(g,g.a,B(201));H(g,g.a,b);b=new L;d=g.b;f=g.a;e=D(f);b.e=e;K(d,0,e,0,f);return b;}
function Jt(){CQ.call(this);this.gD=0;}
function AYp(a){var b=new Jt();AHN(b,a);return b;}
function AHN(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.gD=b;}
function AQp(a,b){a.m=b;}
function Oe(a,b,c,d){var e,f,g,h,i;e=b+1|0;if(e>d.bi){d.dy=1;return (-1);}if(b>=0){f=c.e.data;g=f.length;if(b<g){a:{h=f[b];if(b>d.dt){i=b-1|0;if(i>=0&&i<g){if(!((f[i]&64512)!=55296?0:1))break a;return (-1);}c=new Bd;c.c=1;c.d=1;G(c);}}if(a.gD!=h)return (-1);return a.m.k(e,c,d);}}c=new Bd;c.c=1;c.d=1;G(c);}
function ALH(a,b,c,d){var e,f,g,h,i,j;if(!(c instanceof L)){e=d.bi;a:{while(true){if(b>e){b=(-1);break a;}if(Oe(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.dt;g=d.bi;b:{while(true){if(b>=g)return (-1);h=EC(c,a.gD,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;i=c.e.data;if(b>=i.length)break b;if((i[b]&64512)!=55296?0:1){b=h+1|0;continue;}}j=a.m;b=h+1|0;if(j.k(b,c,d)>=0)break;}return h;}c=new Bd;c.c=1;c.d=1;G(c);}
function AJz(a,b,c,d,e){var f,g,h;if(!(d instanceof L)){a:{while(true){if(c<b){c=(-1);break a;}if(Oe(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.dt;b:{c:{while(true){if(c<b)return (-1);g=F2(d,a.gD,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;h=d.e.data;if(c>=h.length)break b;if((h[c]&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.m.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Bd;d.c=1;d.d=1;G(d);}
function ATc(a){var b,c,d,e,f,g;b=a.gD;c=new N;c.b=D(16);d=c.a;Bo(c,d,d+1|0);e=c.b;e.data[d]=b;f=new L;d=c.a;O();g=D(d);f.e=g;K(e,0,g,0,d);return f;}
function AFH(a,b){if(b instanceof Fl)return 0;if(b instanceof E8)return 0;if(b instanceof Ez)return 0;if(b instanceof FC)return 0;if(b instanceof LL)return 0;if(!(b instanceof Jt))return 1;return b.gD!=a.gD?0:1;}
function ATm(a,b){return 1;}
function LL(){CQ.call(this);this.hp=0;}
function AMh(a){var b=new LL();AP0(b,a);return b;}
function AP0(a,b){var c,d;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.hp=b;}
function AHR(a,b){a.m=b;}
function MZ(a,b,c,d){var e,f,g,h,i;e=d.bi;f=b+1|0;e=Bw(f,e);if(e>0){d.dy=1;return (-1);}if(b>=0){g=c.e.data;h=g.length;if(b<h){a:{i=g[b];if(e<0){if(f>=0&&f<h){if(!((g[f]&64512)!=56320?0:1))break a;return (-1);}c=new Bd;c.c=1;c.d=1;G(c);}}if(a.hp!=i)return (-1);return a.m.k(f,c,d);}}c=new Bd;c.c=1;c.d=1;G(c);}
function AQV(a,b,c,d){var e,f,g;if(!(c instanceof L)){e=d.bi;a:{while(true){if(b>e){b=(-1);break a;}if(MZ(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.bi;b:{while(true){if(b>=e)return (-1);f=EC(c,a.hp,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;g=c.e.data;if(b>=g.length)break b;if((g[b]&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.m.k(b,c,d)>=0)break;}return f;}c=new Bd;c.c=1;c.d=1;G(c);}
function ASn(a,b,c,d,e){var f,g,h;if(!(d instanceof L)){a:{while(true){if(c<b){c=(-1);break a;}if(MZ(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.bi;b:{c:{while(true){if(c<b)return (-1);g=F2(d,a.hp,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;h=d.e.data;if(c>=h.length)break b;if((h[c]&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.m.k(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Bd;d.c=1;d.d=1;G(d);}
function AVs(a){var b,c,d,e,f,g;b=a.hp;c=new N;c.b=D(16);d=c.a;Bo(c,d,d+1|0);e=c.b;e.data[d]=b;f=new L;d=c.a;O();g=D(d);f.e=g;K(e,0,g,0,d);return f;}
function AJq(a,b){if(b instanceof Fl)return 0;if(b instanceof E8)return 0;if(b instanceof Ez)return 0;if(b instanceof FC)return 0;if(b instanceof Jt)return 0;if(!(b instanceof LL))return 1;return b.hp!=a.hp?0:1;}
function AQ6(a,b){return 1;}
function FC(){var a=this;CX.call(a);a.ir=0;a.hu=0;a.iK=0;}
function AWK(a){var b=new FC();AVO(b,a);return b;}
function AVO(a,b){var c,d,e;c=A0p;A0p=c+1|0;d=new Bq;d.b=D(20);a.F=(P(d,d.a,c,10)).r();a.bC=1;a.bC=2;a.iK=b;if(b<65536){e=D(1);e.data[0]=b&65535;}else e=E$([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);e=e.data;a.ir=e[0];a.hu=e[1];}
function ARJ(a,b,c){var d,e,f,g;d=b+1|0;if(b>=0){e=c.e.data;f=e.length;if(b<f){g=e[b];if(d>=0&&d<f){d=e[d];return a.ir==g&&a.hu==d?2:(-1);}c=new Bd;c.c=1;c.d=1;G(c);}}c=new Bd;c.c=1;c.d=1;G(c);}
function APq(a,b,c,d){var e,f,g,h,i;if(c instanceof L){e=d.bi;a:{while(b<e){b=EC(c,a.ir,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;f=c.e.data;if(b>=f.length)break a;g=f[b];if(a.hu==g&&a.m.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Bd;c.c=1;c.d=1;G(c);}h=d.bi;b:{c:{d:{while(true){if(b>h){b=(-1);break d;}if((b+a.bC|0)>d.bi){d.dy=1;g=(-1);}else{g=b+1|0;if(b<0)break b;f=c.e.data;e=f.length;if(b>=e)break b;i=f[b];if(g<0)break c;if(g>=e)break c;e=f[g];g=a.ir==i&&a.hu==e?2:(-1);g
=g<0?(-1):a.m.k(b+g|0,c,d);}if(g>=0)break;b=b+1|0;}}return b;}c=new Bd;Dw(c);G(c);}c=new Bd;Dw(c);G(c);}
function AHO(a,b,c,d,e){var f,g,h,i,j;if(d instanceof L){a:{b:{while(true){if(c<b)return (-1);c=F2(d,a.hu,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.ir;if(c<0)break a;g=d.e.data;if(c>=g.length)break a;if(f==g[c]&&a.m.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Bd;d.c=1;d.d=1;G(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.bC|0)>e.bi){e.dy=1;f=(-1);}else{h=c+1|0;if(c<0)break c;g=d.e.data;f=g.length;if(c>=f)break c;i=g[c];if(h<0)break d;if(h>=f)break d;j=g[h];f=a.ir==i&&a.hu==j?
2:(-1);f=f<0?(-1):a.m.k(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Bd;Dw(d);G(d);}d=new Bd;Dw(d);G(d);}
function AUl(a){var b,c,d,e,f,g,h;b=a.ir;c=a.hu;d=new N;d.b=D(16);e=d.a;Bo(d,e,e+1|0);d.b.data[e]=b;b=d.a;Bo(d,b,b+1|0);f=d.b;f.data[b]=c;g=new L;c=d.a;O();h=D(c);g.e=h;K(f,0,h,0,c);return g;}
function ARy(a,b){if(b instanceof FC)return b.iK!=a.iK?0:1;if(b instanceof Ez)return b.K(a.iK);if(b instanceof Fl)return 0;if(!(b instanceof E8))return 1;return 0;}
var RD=I(Gk);
function AH1(a,b){return b!=10?0:1;}
function ARC(a,b,c){return b!=10?0:1;}
var RE=I(Gk);
function ASB(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AUV(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AA0(){var a=this;C.call(a);a.sH=null;a.o$=null;a.kc=0;a.yq=0;}
function APH(a){var b=new AA0();AMz(b,a);return b;}
function AMz(a,b){var c,d;while(true){c=a.kc;if(b<c)break;a.kc=c<<1|1;}d=c<<1|1;a.kc=d;d=d+1|0;a.sH=Y(d);a.o$=Y(d);a.yq=b;}
function Py(a,b,c){var d,e,f,g;d=0;e=a.kc;f=b&e;while(true){g=a.sH.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.o$.data[f]=c;}
function Qd(a,b){var c,d,e,f;c=a.kc;d=b&c;e=0;while(true){f=a.sH.data[d];if(!f)break;if(f==b)return a.o$.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.yq;}
var VE=I();
var UU=I();
function AU$(b){var c,d,e,f,g,h,i,j,k,l,m;c=new L6;d=b.e.data;e=D(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}c.pN=e;g=Hw(c);d=Y(g*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<g){l=Hw(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=Hw(c);m=l/2|0;if(l%2|0)m= -m|0;j=j+m|0;m=h+1|0;e[h]=i;h=m+1|0;e[m]=j;k=k+1|0;}return d;}
function Ce(b){var c,d,e,f,g,h,i,j,k,l;c=new L6;d=b.e.data;e=D(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}c.pN=e;g=Hw(c);d=Y(g*2|0);e=d.data;h=0;i=0;while(i<g){h=h+Hw(c)|0;j=i*2|0;e[j]=h;k=j+1|0;l=Hw(c);j=l/2|0;if(l%2|0)j= -j|0;e[k]=j;i=i+1|0;}return d;}
function Cc(b){var c,d,e,f,g,h,i,j,k,l,m;c=Y(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bg;l.c=1;l.d=1;G(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new RR;l.vC=b;l.vV=c;return l;}
function Ll(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AWf(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;c=Bt(IR,16384);d=c.data;e=BS(16384).data;f=0;g=0;h=0;i=0;a:{b:{while(true){j=b.e.data;k=Bw(i,j.length);if(k>=0){l=c.constructor;if(l===null)b=null;else{b=l.classObject;if(b===null){b=new CE;b.P=l;m=b;l.classObject=m;}}b=Eg(b);if(b===null){b=new Dm;b.c=1;b.d=1;G(b);}if(b===J($rt_voidcls())){b=new Bg;b.c=1;b.d=1;G(b);}if(g<0){b=new DP;b.c=1;b.d=1;G(b);}m=Et(b.P,g);f=d.length;if(g<f)f=g;g=0;while(g<f){m.data[g]=d[g];g=g+1|0;}return m;}if(i<0)break;if(k>=0)break;n
=Ll(j[i]);if(n==64){i=i+1|0;if(i<0)break b;j=b.e.data;if(i>=j.length)break b;n=Ll(j[i]);o=0;p=1;q=0;while(q<3){i=i+1|0;if(i<0)break a;j=b.e.data;if(i>=j.length)break a;o=o|B3(p,Ll(j[i]));p=p*64|0;q=q+1|0;}}else if(n<32)o=1;else{n=(n-32|0)<<24>>24;i=i+1|0;o=Ll(C8(b,i));}if(!n&&o>=128){if(f>0){k=g+1|0;l=new IR;p=h+f|0;j=BS(f);q=e.length;if(f<q)q=f;r=j.data;s=0;while(s<q){r[s]=e[s];s=s+1|0;}l.qm=h;l.re=p;l.qq=j;d[g]=l;g=k;}h=h+(f+o|0)|0;f=0;}else{k=f+o|0;p=e.length;if(k<p)q=g;else{q=g+1|0;l=new IR;s=h+f|0;j=BS(f);if
(f<p)p=f;r=j.data;f=0;while(f<p){r[f]=e[f];f=f+1|0;}l.qm=h;l.re=s;l.qq=j;d[g]=l;h=h+k|0;f=0;}while(true){g=o+(-1)|0;if(o<=0)break;k=f+1|0;e[f]=n;f=k;o=g;}g=q;}i=i+1|0;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
var DP=I(BU);
var T1=I();
function L6(){var a=this;C.call(a);a.pN=null;a.vk=0;}
var W8=I();
function Hw(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.pN.data;f=b.vk;b.vk=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+B3(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
var Lw=I(BD);
function AY5(){var a=new Lw();AL9(a);return a;}
function AL9(a){}
function AL4(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return Dt(BY(b,9,13),32);}
var KU=I(BD);
function AXT(){var a=new KU();ATd(a);return a;}
function ATd(a){}
function AOc(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(b,48,57);}
var AAW=I(BD);
function AZC(){var a=new AAW();ALh(a);return a;}
function ALh(a){}
function AR8(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(b,97,122);}
var ABL=I(BD);
function AWr(){var a=new ABL();AMG(a);return a;}
function AMG(a){}
function ATn(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(b,65,90);}
var ABO=I(BD);
function AY4(){var a=new ABO();AG4(a);return a;}
function AG4(a){}
function AJ2(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(b,0,127);}
var Ls=I(BD);
function AZi(){var a=new Ls();AIU(a);return a;}
function AIU(a){}
function AIx(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(BY(b,97,122),65,90);}
var LW=I(Ls);
function AX5(){var a=new LW();AMl(a);return a;}
function AMl(a){}
function AKI(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(BY(BY(b,97,122),65,90),48,57);}
var AEk=I(BD);
function AXK(){var a=new AEk();AO5(a);return a;}
function AO5(a){}
function ALG(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(BY(BY(b,33,64),91,96),123,126);}
var MK=I(LW);
function AWE(){var a=new MK();ARj(a);return a;}
function ARj(a){}
function AEM(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(BY(BY(BY(BY(BY(b,97,122),65,90),48,57),33,64),91,96),123,126);}
var X6=I(MK);
function AWy(){var a=new X6();ASW(a);return a;}
function ASW(a){}
function AON(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return Dt(BY(BY(BY(BY(BY(BY(b,97,122),65,90),48,57),33,64),91,96),123,126),32);}
var YM=I(BD);
function AWL(){var a=new YM();ASq(a);return a;}
function ASq(a){}
function AJf(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return Dt(Dt(b,32),9);}
var VI=I(BD);
function AXd(){var a=new VI();AUJ(a);return a;}
function AUJ(a){}
function AOJ(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return Dt(BY(b,0,31),127);}
var Vp=I(BD);
function AWI(){var a=new Vp();AHs(a);return a;}
function AHs(a){}
function AU1(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(BY(BY(b,48,57),97,102),65,70);}
var ABS=I(BD);
function AYC(){var a=new ABS();AGL(a);return a;}
function AGL(a){}
function APE(a){var b,c;b=new Qq;b.B7=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var AEt=I(BD);
function AWo(){var a=new AEt();ARA(a);return a;}
function ARA(a){}
function AEX(a){var b,c;b=new MY;b.Cl=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var AA1=I(BD);
function AZc(){var a=new AA1();AG9(a);return a;}
function AG9(a){}
function AMj(a){var b,c;b=new PV;b.A5=a;BE();c=new Bz;c.A=Y(64);b.G=c;return b;}
var AAI=I(BD);
function AW_(){var a=new AAI();AOL(a);return a;}
function AOL(a){}
function ARN(a){var b,c;b=new PU;b.Az=a;BE();c=new Bz;c.A=Y(64);b.G=c;return b;}
var ACo=I(BD);
function AX3(){var a=new ACo();AIO(a);return a;}
function AIO(a){}
function AJc(a){var b,c;b=new Sk;b.D$=a;BE();c=new Bz;c.A=Y(64);b.G=c;Jc(c,0,2048);b.bJ=1;return b;}
var Un=I(BD);
function AW7(){var a=new Un();AHY(a);return a;}
function AHY(a){}
function AJF(a){var b,c;b=new Ob;b.CS=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var TF=I(BD);
function AX4(){var a=new TF();AOg(a);return a;}
function AOg(a){}
function AUP(a){var b,c;b=new NG;b.ET=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var ABf=I(BD);
function AWQ(){var a=new ABf();AO6(a);return a;}
function AO6(a){}
function AEI(a){var b,c;b=new Pl;b.B9=a;BE();c=new Bz;c.A=Y(64);b.G=c;return b;}
var ABy=I(BD);
function AZo(){var a=new ABy();ALY(a);return a;}
function ALY(a){}
function ANk(a){var b,c;b=new MU;b.yN=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var Wf=I(BD);
function AW0(){var a=new Wf();AFV(a);return a;}
function AFV(a){}
function AJN(a){var b,c;b=new MX;b.CZ=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var YR=I(BD);
function AYa(){var a=new YR();AIa(a);return a;}
function AIa(a){}
function AKZ(a){var b,c;b=new NB;b.D7=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var ADJ=I(BD);
function AY2(){var a=new ADJ();ANx(a);return a;}
function ANx(a){}
function ANq(a){var b,c;b=new Ow;b.Eq=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var ABt=I(BD);
function AY0(){var a=new ABt();APu(a);return a;}
function APu(a){}
function ATO(a){var b,c;b=new OB;b.Bk=a;BE();c=new Bz;c.A=Y(64);b.G=c;return b;}
var Xd=I(BD);
function AZl(){var a=new Xd();AHZ(a);return a;}
function AHZ(a){}
function ARc(a){var b,c;b=new QQ;b.Di=a;BE();c=new Bz;c.A=Y(64);b.G=c;return b;}
var We=I(BD);
function AWP(){var a=new We();ARQ(a);return a;}
function ARQ(a){}
function APs(a){var b,c;b=new P_;b.yU=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var AEq=I(BD);
function AYI(){var a=new AEq();ALU(a);return a;}
function ALU(a){}
function AR1(a){var b,c;b=new M6;b.Fb=a;BE();c=new Bz;c.A=Y(64);b.G=c;b.bJ=1;return b;}
var Ky=I(BD);
function AYn(){var a=new Ky();AJV(a);return a;}
function AJV(a){}
function ANN(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return Dt(BY(BY(BY(b,97,122),65,90),48,57),95);}
var ACz=I(Ky);
function AWF(){var a=new ACz();AL1(a);return a;}
function AL1(a){}
function AO_(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;b=Fv(Dt(BY(BY(BY(b,97,122),65,90),48,57),95),1);b.bJ=1;return b;}
var Yg=I(Lw);
function AWm(){var a=new Yg();AUo(a);return a;}
function AUo(a){}
function AGZ(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;b=Fv(Dt(BY(b,9,13),32),1);b.bJ=1;return b;}
var V8=I(KU);
function AXt(){var a=new V8();AM5(a);return a;}
function AM5(a){}
function ALu(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;b=Fv(BY(b,48,57),1);b.bJ=1;return b;}
function Vy(){var a=this;BD.call(a);a.ve=0;a.vA=0;}
function Bn(a,b){var c=new Vy();AUL(c,a,b);return c;}
function AUL(a,b,c){a.ve=b;a.vA=c;}
function ANS(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(b,a.ve,a.vA);}
var V1=I(BD);
function AWJ(){var a=new V1();AVb(a);return a;}
function AVb(a){}
function AUE(a){var b,c;b=new C_;BE();c=new Bz;c.A=Y(64);b.G=c;c=new Bz;c.A=Y(2);b.L=c;return BY(BY(b,65279,65279),65520,65533);}
function XJ(){var a=this;BD.call(a);a.r6=0;a.oW=0;a.uk=0;}
function CH(a,b){var c=new XJ();AIH(c,a,b);return c;}
function AX0(a,b,c){var d=new XJ();AUN(d,a,b,c);return d;}
function AIH(a,b,c){a.oW=c;a.r6=b;}
function AUN(a,b,c,d){a.uk=d;a.oW=c;a.r6=b;}
function AKy(a){var b,c,d;b=new J_;c=a.r6;BE();d=new Bz;d.A=Y(64);b.G=d;b.n2=c;if(a.uk)Jc(d,0,2048);b.bJ=a.oW;return b;}
function X7(){var a=this;BD.call(a);a.r4=0;a.pc=0;a.ti=0;}
function J4(a,b){var c=new X7();AJO(c,a,b);return c;}
function AXH(a,b,c){var d=new X7();AEL(d,a,b,c);return d;}
function AJO(a,b,c){a.pc=c;a.r4=b;}
function AEL(a,b,c,d){a.ti=d;a.pc=c;a.r4=b;}
function AEJ(a){var b,c,d;b=new PP;c=a.r4;BE();d=new Bz;d.A=Y(64);b.G=d;b.n2=c;if(a.ti)Jc(d,0,2048);b.bJ=a.pc;return b;}
function RR(){var a=this;C.call(a);a.vC=null;a.vV=null;}
function IR(){var a=this;C.call(a);a.qm=0;a.re=0;a.qq=null;}
var Uq=I();
function Bs(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d<=e){while(d<e){f=d+1|0;b[d]=c;d=f;}return;}g=new Bg;g.c=1;g.d=1;G(g);}
function AQu(b,c,d,e){var f,g,h,i,j;if(c>d){f=new Bg;f.c=1;f.d=1;G(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;}
function ARG(b,c,d,e){var f,g,h,i;if(c>d){f=new Bg;f.c=1;f.d=1;G(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=Bw(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;}
function ABZ(b,c){var d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
var Bd=I(Bh);
var ABG=I();
function WB(){var a=this;D7.call(a);a.t1=null;a.tU=0;a.jP=null;}
function AXS(a,b,c){var d=new WB();AH2(d,a,b,c);return d;}
function AH2(a,b,c,d){a.jP=b;a.t1=c;a.tU=d;}
function AS0(a,b){}
function AJT(a,b){var c,d,e,f,g,h,i;if(A5X===null){c=new Dd;c.cI=A0G;b=new N;b.b=D(16);c.bs=b;c.cE=D(32);c.cO=0;Dc();c.cM=A5s;A5X=c;}b=A5X;c=a.t1;d=new N;d.b=D(16);H(d,d.a,B(415));e=d.a;if(c===null)c=B(2);H(d,e,c);f=new L;g=d.b;h=d.a;O();i=D(h);f.e=i;K(g,0,i,0,h);c=b.bs;H(c,c.a,f);h=c.a;Bo(c,h,h+1|0);c.b.data[h]=10;C7(b);}
function T6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=(IQ(GQ(B(106),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.jP;b.qS=b.m2.o;if(a.tU){e=0;while(true){b=a.jP;c=b.m2;f=Bw(e,c.o);if(f>=0)break a;if(f>=0){g=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,e,10);H(b,b.a,B(36));e=c.o;P(b,b.a,e,10);c=new L;d=b.b;f=b.a;O();h=D(f);c.e=h;K(d,0,h,0,f);g.c=1;g.d=1;g.f=c;G(g);}Xr(b,c.C.data[e]);e=e+1|0;}}}return 0;}i=d[f];h=(IQ(GQ(B(104),0),i,0)).data;if(h.length!=4)break;g=h[0];j=Yt(h[1]);b=h[2];if(b===null){b=new CG;b.c
=1;b.d=1;b.f=B(77);G(b);}k=ACy(b,0,b.e.data.length,10);l=h[3];FB();m=A6r;if(BO(g,B(416)))m=A6o;if(BO(g,B(417)))m=A6q;if(BO(g,B(418)))m=A6p;if(BO(g,B(255)))m=A6N;if(m===A6p&&!A5O.xe)k=R;n=new Qb;n.qx=j;n.up=m;n.xN=k;n.t9=l;BW(a.jP.uQ,j,j);Dh(a.jP.m2,n);f=f+1|0;}b=new Ba;b.c=1;b.d=1;b.f=B(419);G(b);}
function APi(a,b,c){return T6(a,b,c);}
var Cs=I(BQ);
var A6O=null;var A6P=null;var A6Q=null;var A6R=null;var A6S=null;var A6T=null;var A6U=null;var A6V=null;var A6W=null;var A6X=null;function AH9(){AH9=Bi(Cs);AF0();}
function AF0(){var b,c,d,e,f,g,h,i,j;b=new R3;AH9();b.u=B(420);b.n=0;A6O=b;c=new R4;c.u=B(421);c.n=1;A6P=c;d=new R8;d.u=B(422);d.n=2;A6Q=d;e=new R9;e.u=B(423);e.n=3;A6R=e;f=new R6;f.u=B(424);f.n=4;A6S=f;g=new R7;g.u=B(425);g.n=5;A6T=g;h=new R1;h.u=B(426);h.n=6;A6U=h;i=new R2;i.u=B(427);i.n=7;A6V=i;j=new R0;j.u=B(428);j.n=8;A6W=j;A6X=U(Cs,[b,c,d,e,f,g,h,i,j]);}
function FO(){var a=this;H1.call(a);a.gy=0;a.dJ=null;}
var AD5=I(0);
function AHq(b){return !BO(b,B(429))&&!BO(b,B(430))&&!BO(b,B(431))&&!BO(b,B(432))&&!BO(b,B(433))?0:1;}
function AL6(b){var c;a:{b:{if(BO(b,B(434)))break b;if(BO(b,B(435)))break b;if(BO(b,B(436)))break b;if(BO(b,B(437)))break b;if(BO(b,B(438)))break b;if(BO(b,B(439)))break b;if(BO(b,B(440)))break b;if(BO(b,B(441)))break b;if(!BO(b,B(442))){c=0;break a;}}c=1;}return c;}
var Ri=I(0);
var VZ=I();
function AUI(a,b,c){a.FD($rt_str(b),D4(c,"handleEvent"));}
function APN(a,b){return !!a.I0(b);}
function AHS(a,b,c){a.C$($rt_str(b),D4(c,"handleEvent"));}
function AMZ(a,b,c,d){a.FP($rt_str(b),D4(c,"handleEvent"),d?1:0);}
function ASJ(a,b,c,d){a.IV($rt_str(b),D4(c,"handleEvent"),d?1:0);}
function QY(){var a=this;C.call(a);a.qi=null;a.sP=null;a.mN=null;a.sV=0;a.og=null;}
function Z9(a,b){var c,d,e;c=b.target;d=null;e=a.qi;FB();if(e!==A6q&&e!==A6p){if(e===A6o){b=$rt_globals.window.document.createElement("img");d=$rt_ustr($rt_str(c.result));b.src=d;e=c.result;c=new $rt_globals.Int8Array(e);d=new IO;d.dO=c;d.ru=e;d.rN=b;}else if(e===A6r)d=$rt_str(c.result);}else{e=c.result;b=new $rt_globals.Int8Array(e);d=new IO;d.dO=b;d.ru=e;}if(d!==null){IL(a.og.ue,a.qi,a.sP,d);Dh(a.mN,a.sP);if(a.mN.o==a.sV){b=a.og.tB;d=new M8;d.q9=a;Dh(b.lD,d);}}}
function AOy(a,b){Z9(a,b);}
function D0(){BQ.call(this);this.lt=null;}
var A6o=null;var A6p=null;var A6r=null;var A6q=null;var A6N=null;var A6Y=null;function FB(){FB=Bi(D0);AP6();}
function AP6(){var b,c,d,e,f;b=new D0;FB();b.u=B(443);b.n=0;b.lt=B(416);A6o=b;c=new D0;c.u=B(444);c.n=1;c.lt=B(418);A6p=c;d=new D0;d.u=B(445);d.n=2;d.lt=B(446);A6r=d;e=new D0;e.u=B(447);e.n=3;e.lt=B(417);A6q=e;f=new D0;f.u=B(448);f.n=4;f.lt=B(255);A6N=f;A6Y=U(D0,[b,c,d,e,f]);}
var Lg=I();
var A6Z=null;var A60=null;function ACp(b){var c,d,e,f,g,h,i,j,k,l;c=new N;c.b=D(16);d=ABz();e=0;f=A60.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.a;if(i>0){Bo(c,i,i+1|0);c.b.data[i]=32;}j=d.data[e];H(c,c.a,j);}e=e+1|0;h=h+1|0;}j=new L;d=c.b;k=c.a;O();l=D(k);j.e=l;K(d,0,l,0,k);return j;}
function ABz(){if(A6Z===null)A6Z=U(L,[B(449),B(450),B(451),B(452),B(453),B(454),B(455),B(456),B(457),B(458),B(459),B(460)]);return A6Z;}
function TP(){A60=Ew([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
var LV=I();
var PJ=I(0);
function H4(){var a=this;LV.call(a);a.e6=null;a.AV=null;a.ln=0;a.nt=0;a.gw=null;a.r_=null;}
function AGE(a){var b,c,d,e,f,g,h;b=new N;b.b=D(16);c=ACp(OO(a.ln,a.nt));H(b,b.a,c);d=b.a;if(d>0){Bo(b,d,d+1|0);b.b.data[d]=32;}c=a.e6;if(c.bk===null)c.bk=$rt_str(c.P.$meta.name);c=c.bk;H(b,b.a,c);d=b.a;Bo(b,d,d+1|0);b.b.data[d]=40;e=a.gw.cH();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.a;Bo(b,h,h+1|0);b.b.data[h]=44;}c=g[f];if(c.bk===null)c.bk=$rt_str(c.P.$meta.name);c=c.bk;H(b,b.a,c);f=f+1|0;}d=b.a;Bo(b,d,d+1|0);e=b.b;e.data[d]=41;c=new L;d=b.a;O();g=D(d);c.e=g;K(e,0,g,0,d);return c;}
function AB5(a,b){var c,d,e,f,g;if(a.ln&1){c=new LK;c.c=1;c.d=1;G(c);}if(a.r_===null){c=new Kj;c.c=1;c.d=1;G(c);}d=b.data;e=d.length;if(e!=a.gw.data.length){c=new Bg;c.c=1;c.d=1;G(c);}f=0;while(f<e){if(!(a.gw.data[f].P.$meta.primitive?1:0)&&d[f]!==null){c=a.gw.data[f];g=d[f];c=c.P;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&QM(g.constructor,c)?1:0)){c=new Bg;c.c=1;c.d=1;G(c);}}if((a.gw.data[f].P.$meta.primitive?1:0)&&d[f]===null){c=new Bg;c.c=1;c.d=1;G(c);}f=f+1|0;}c=b.data;g=new (a.e6.P);a.r_.call(g,
c);return g;}
function Sc(){var a=this;By.call(a);a.tD=null;a.Ee=null;}
function AJ$(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.db^C6(a.tD,c):0;}
function Sb(){var a=this;By.call(a);a.xk=null;a.xO=null;a.Ds=null;}
function AFn(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.db^C6(a.xk,c):0;return a.xO.K(b)&&!d?1:0;}
function NP(){var a=this;By.call(a);a.m$=null;a.y1=null;}
function ANC(a,b){return a.be^C6(a.m$,b);}
function AK_(a){var b,c,d,e,f,g,h,i,j,k;b=new N;b.b=D(16);c=IG(a.m$,0);while(c>=0){if(c<65536){d=D(1);d.data[0]=c&65535;}else d=E$([(55296|(c-65536|0)>>10&1023)&65535,(56320|c&1023)&65535]);e=d.data;f=0;g=e.length;h=b.a;Bo(b,h,h+g|0);g=g+f|0;while(f<g){d=b.b.data;i=h+1|0;j=f+1|0;d[h]=e[f];h=i;f=j;}g=b.a;Bo(b,g,g+1|0);b.b.data[g]=124;c=IG(a.m$,c+1|0);}h=b.a;if(h>0)Sg(b,h-1|0);k=new L;d=b.b;h=b.a;O();e=D(h);k.e=e;K(d,0,e,0,h);return k;}
function NW(){var a=this;By.call(a);a.vs=null;a.Ck=null;}
function ARL(a,b){return a.vs.K(b);}
function NU(){var a=this;By.call(a);a.oY=0;a.t_=null;a.qu=null;}
function ASs(a,b){return !(a.oY^C6(a.qu.L,b))&&!(a.oY^a.qu.fj^a.t_.K(b))?0:1;}
function NV(){var a=this;By.call(a);a.o_=0;a.xv=null;a.rD=null;}
function AOj(a,b){return !(a.o_^C6(a.rD.L,b))&&!(a.o_^a.rD.fj^a.xv.K(b))?1:0;}
function NZ(){var a=this;By.call(a);a.x_=0;a.xB=null;a.xs=null;a.zR=null;}
function AJI(a,b){return a.x_^(!a.xB.K(b)&&!a.xs.K(b)?0:1);}
function N0(){var a=this;By.call(a);a.vy=0;a.vo=null;a.u1=null;a.E2=null;}
function AEy(a,b){return a.vy^(!a.vo.K(b)&&!a.u1.K(b)?0:1)?0:1;}
function NX(){var a=this;By.call(a);a.uT=null;a.E9=null;}
function ALi(a,b){var c,d;c=a.uT;d=c.bK;return d!==null?c.be^d.K(b):c.be^C6(c.L,b);}
function NY(){var a=this;By.call(a);a.xM=null;a.An=null;}
function AOl(a,b){var c,d;c=a.xM;d=c.bK;return (d!==null?c.be^d.K(b):c.be^C6(c.L,b))?0:1;}
function N1(){var a=this;By.call(a);a.vO=null;a.vr=0;a.wT=null;}
function ATZ(a,b){var c,d,e;c=a.vO;d=c.bK;e=d!==null?c.be^d.K(b):c.be^C6(c.L,b);return !e&&!(a.vr^C6(a.wT.L,b))?0:1;}
function N2(){var a=this;By.call(a);a.wc=null;a.wn=0;a.v4=null;}
function AI0(a,b){var c,d,e;c=a.wc;d=c.bK;e=d!==null?c.be^d.K(b):c.be^C6(c.L,b);return !e&&!(a.wn^C6(a.v4.L,b))?1:0;}
function NO(){var a=this;By.call(a);a.wR=0;a.xu=null;a.xT=null;a.za=null;}
function AWl(a,b){var c,d;a:{if(!(a.wR^a.xu.K(b))){c=a.xT;d=c.bK;if(!(d!==null?c.be^d.K(b):c.be^C6(c.L,b))){b=0;break a;}}b=1;}return b;}
function Og(){var a=this;By.call(a);a.xR=0;a.s_=null;a.tj=null;a.Ab=null;}
function ALo(a,b){var c,d;a:{if(!(a.xR^a.s_.K(b))){c=a.tj;d=c.bK;if(!(d!==null?c.be^d.K(b):c.be^C6(c.L,b))){b=1;break a;}}b=0;}return b;}
function NM(){var a=this;By.call(a);a.uC=null;a.Aw=null;}
function AIY(a,b){var c,d;c=a.uC;d=c.bK;return d!==null?c.be^d.K(b):c.be^C6(c.L,b);}
function NN(){var a=this;By.call(a);a.uG=null;a.EV=null;}
function AKL(a,b){var c,d;c=a.uG;d=c.bK;return (d!==null?c.be^d.K(b):c.be^C6(c.L,b))?0:1;}
function NS(){var a=this;By.call(a);a.x8=null;a.v$=0;a.yF=null;}
function AMF(a,b){var c,d,e;c=a.x8;d=c.bK;e=d!==null?c.be^d.K(b):c.be^C6(c.L,b);return e&&a.v$^C6(a.yF.L,b)?1:0;}
function NL(){var a=this;By.call(a);a.wF=null;a.vz=0;a.v9=null;}
function ATv(a,b){var c,d,e;c=a.wF;d=c.bK;e=d!==null?c.be^d.K(b):c.be^C6(c.L,b);return e&&a.vz^C6(a.v9.L,b)?0:1;}
function NQ(){var a=this;By.call(a);a.wX=0;a.tC=null;a.vw=null;a.zN=null;}
function AHm(a,b){var c,d;a:{if(a.wX^a.tC.K(b)){c=a.vw;d=c.bK;if(d!==null?c.be^d.K(b):c.be^C6(c.L,b)){b=1;break a;}}b=0;}return b;}
function NR(){var a=this;By.call(a);a.ws=0;a.s6=null;a.wP=null;a.AG=null;}
function AQ2(a,b){var c,d;a:{if(a.ws^a.s6.K(b)){c=a.wP;d=c.bK;if(d!==null?c.be^d.K(b):c.be^C6(c.L,b)){b=0;break a;}}b=1;}return b;}
function I1(){var a=this;C.call(a);a.gi=null;a.rB=null;a.cV=null;a.dD=0;}
function EA(){var a=this;C.call(a);a.E4=null;a.fR=R;a.gt=R;a.dS=null;a.uq=null;a.fz=null;a.dR=0;a.fV=null;}
var A61=null;var AZ5=null;var A58=0;var A62=0;var A63=null;function Dj(){Dj=Bi(EA);AGU();}
function YG(a){var b,c,$$je;a:{b:{c:{d:{try{Dj();A62=A62+1|0;AAP(a);a.fU();}catch($$e){$$je=BJ($$e);if($$je instanceof DS){b=$$je;break d;}else{b=$$je;break c;}}b=a.dS;Il(b);e:{try{Mw(b);EI(b);break e;}catch($$e){$$je=BJ($$e);c=$$je;}EI(b);G(c);}a.dR=0;A62=A62-1|0;b=A61;if(AZ5!==b)AZ5=b;AZ5.gt=Fr();break a;}try{Ua(Xb(a),a,b);break b;}catch($$e){$$je=BJ($$e);b=$$je;}}c=a.dS;Il(c);f:{try{Mw(c);EI(c);break f;}catch($$e){$$je=BJ($$e);b=$$je;}EI(c);G(b);}a.dR=0;A62=A62-1|0;c=A61;if(AZ5!==c)AZ5=c;AZ5.gt=Fr();G(b);}b
=a.dS;Il(b);g:{try{Mw(b);EI(b);break g;}catch($$e){$$je=BJ($$e);c=$$je;}EI(b);G(c);}a.dR=0;A62=A62-1|0;b=A61;if(AZ5!==b)AZ5=b;AZ5.gt=Fr();}}
function AAP(b){Dj();if(AZ5!==b)AZ5=b;AZ5.gt=Fr();}
function AEB(){Dj();return AZ5;}
function VQ(b){var $p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Dj();$p=1;case 1:ACV(b);if(GS()){break _;}return;default:AFf();}}RN().s(b,$p);}
function AJG(b,c){var d,e;Dj();d=AZ5;e=new NH;e.yG=d;e.xr=c;e.Eg=RS(e,C2(b,M(2147483647))?2147483647:V(b));d.uq=e;}
function Xb(a){var b;b=a.E4;if(b!==null)return b;Dj();return A63;}
function AGU(){var b,c,d;b=new EA;Dj();c=null;b.dS=new C;b.dR=1;b.fz=B(461);b.fV=c;d=A58;A58=d+1|0;b.fR=M(d);A61=b;AZ5=b;A58=1;A62=1;A63=new PW;}
function ACV(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.ld=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.C5=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=AXZ(callback);thread.suspend(function(){try{AJG(b,callback);}catch($e){callback.C5($rt_exception($e));}});return null;}
var B2=I(BU);
function AXu(a){var b=new B2();AQt(b,a);return b;}
function AQt(a,b){a.c=1;a.d=1;a.f=b;}
var I_=I(BU);
function ABm(){var a=this;C.call(a);a.ca=null;a.bP=null;a.e$=null;a.hK=null;a.er=0;a.dG=0;a.dt=0;a.bi=0;a.fl=0;a.nL=0;a.hL=0;a.dy=0;a.DV=0;a.ju=0;a.jr=0;}
function AY_(a,b,c,d,e,f){var g=new ABm();APk(g,a,b,c,d,e,f);return g;}
function APk(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.ju=(-1);h=e+1|0;a.er=h;i=Y(h*2|0);a.ca=i;j=Y(g);k=j.data;a.bP=j;e=0;g=k.length;l=Bw(e,g);if(l>0){b=new Bg;b.c=1;b.d=1;G(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.e$=Y(f);i=i.data;h=0;m=i.length;e=Bw(h,m);if(e>0){b=new Bg;b.c=1;b.d=1;G(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.dG=0;a.jr=2;f=0;if(e>0){b=new Bg;b.c=1;b.d=1;G(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bg;b.c=1;b.d=1;G(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.hK=b;if(c>=0){a.dt
=c;a.bi=d;}a.fl=a.dt;}
function YA(a,b){var c,d,e,f,g,h;if(!a.dG){c=new B2;c.c=1;c.d=1;G(c);}if(b>=0&&b<a.er)return a.ca.data[(b*2|0)+1|0];c=new Bh;O();d=new N;d.b=D(16);P(d,d.a,b,10);e=new L;f=d.b;g=d.a;h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}
function Ym(a,b){var c,d,e,f,g,h;if(!a.dG){c=new B2;c.c=1;c.d=1;G(c);}if(b>=0&&b<a.er)return;c=new Bh;O();d=new N;d.b=D(16);P(d,d.a,b,10);e=new L;f=d.b;g=d.a;h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}
var ABq=I();
function YB(b){a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;}
function Md(b){if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
var WE=I();
function F5(){return AZ2($rt_globals.performance.now()*1000000.0);}
var TH=I();
var GM=I(0);
function SV(){C.call(this);this.u5=null;}
function AT1(a){ASE(a.u5);}
var R3=I(Cs);
var R4=I(Cs);
var R8=I(Cs);
var R9=I(Cs);
var R6=I(Cs);
var R7=I(Cs);
var R1=I(Cs);
var R2=I(Cs);
var R0=I(Cs);
var ACB=I();
var Ni=I(0);
var PW=I();
function Ua(a,b,c){var d;if(A5r===null){d=new Dd;d.cI=A0H;b=new N;b.b=D(16);d.bs=b;d.cE=D(32);d.cO=0;Dc();d.cM=A5s;A5r=d;}Kc(c,A5r);}
var WQ=I();
var PI=I(0);
function Pu(){C.call(this);this.is=null;}
function AXZ(b){var c;c=new Pu;c.is=b;return c;}
function AM4(a,b){a.is.ld(b);}
function AVh(a,b){a.is.C5(b);}
function Qo(){var a=this;C.call(a);a.un=null;a.uo=null;a.ul=0;a.um=null;}
var Nc=I(H2);
function AKC(a,b,c,d){var e,f,g,h,i,j;e=0;f=d.bi;a:{while(true){if(b>f){b=e;break a;}g=a.b6;h=d.ca.data;i=g*2|0;j=h[i];h[i]=b;e=a.dL.k(b,c,d);if(e>=0)break;i=a.b6;d.ca.data[i*2|0]=j;b=b+1|0;}}return b;}
function AV$(a,b,c,d,e){var f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.b6;h=e.ca.data;i=g*2|0;j=h[i];h[i]=c;f=a.dL.k(c,d,e);if(f>=0)break;i=a.b6;e.ca.data[i*2|0]=j;c=c+(-1)|0;}}return c;}
function AID(a){return null;}
function Uc(){var a=this;C.call(a);a.L_=0;a.Ma=0;a.Ir=0;a.JH=0;a.GO=null;}
function Hn(){var a=this;EA.call(a);a.g_=0;a.e7=null;a.fr=null;a.fc=null;}
function AQv(a){var b,c,d,e,f;b=new $rt_globals.XMLHttpRequest();c=new Rz;c.gl=a;c.jd=b;c=Cm(c,"handleEvent");b.onreadystatechange=c;c=a.fc;d=a.fr;e=new IM;e.sj=c;e.mP=d;c=Cm(e,"handleEvent");b.onprogress=c;d=a.e7;f=a.g_;b.open("GET",$rt_ustr(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
var M7=I();
var A5U=null;function AYq(){AYq=Bi(M7);ASj();}
function ASj(){var b,c;I$();b=Y((A5Y.cH()).data.length);c=b.data;A5U=b;c[A5L.n]=1;c[A5V.n]=2;}
var ACA=I();
function ANL(a,b,c){a.CG($rt_str(b),D4(c,"handleEvent"));}
function AOI(a,b,c){a.AP($rt_str(b),D4(c,"handleEvent"));}
function AE_(a,b,c,d){a.zj($rt_str(b),D4(c,"handleEvent"),d?1:0);}
function AFj(a,b){return !!a.CL(b);}
function ALj(a,b,c,d){a.BX($rt_str(b),D4(c,"handleEvent"),d?1:0);}
var Hq=I(0);
function M$(){var a=this;C.call(a);a.hA=null;a.qN=0;a.nB=null;a.r5=null;a.jq=null;}
function ADQ(a,b){var c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.hA.readyState==4){if(a.hA.status==200){if(a.jq.dK){if(A5X===null){c=new Dd;c.cI=A0G;b=new N;b.b=D(16);c.bs=b;c.cE=D(32);c.cO=0;Dc();c.cM=A5s;A5X=c;}d=A5X;b=a.nB;c=new N;c.b=D(16);H(c,c.a,B(462));e=c.a;if(b===null)b=B(2);H(c,e,b);f=new L;g=c.b;h=c.a;O();i=D(h);f.e=i;K(g,0,i,0,h);b=d.bs;H(b,b.a,f);h
=b.a;Bo(b,h,h+1|0);b.b.data[h]=10;C7(d);}c=a.hA.response;Jb();d=A5M.ez.document;f=d.createElement("script");b=d.createTextNode(c);f.appendChild(b);d.body.appendChild(f);$rt_str(a.hA.responseText);}else if(a.hA.status!=404&&a.hA.status!=403){try{j=M(100);$p=1;continue _;}catch($$e){$$je=BJ($$e);if($$je instanceof DS){}else{throw $$e;}}MD(a.jq,a.qN,a.nB,a.r5);}b=a.jq;b.bH=b.bH-1|0;}return;case 1:a:{try{VQ(j);if(GS()){break _;}break a;}catch($$e){$$je=BJ($$e);if($$je instanceof DS){}else{throw $$e;}}}MD(a.jq,a.qN,
a.nB,a.r5);b=a.jq;b.bH=b.bH-1|0;return;default:AFf();}}RN().s(a,b,c,d,e,f,g,h,i,j,$p);}
function X2(a,b){var $p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADQ(a,b);if(GS()){break _;}return;default:AFf();}}RN().s(a,b,$p);}
var Qu=I();
var A4Y=0;function HI(){var a=this;C.call(a);a.jx=null;a.nM=0;a.j7=0;a.el=0;}
function PM(a){var b;if(a.el)return a.j7>=a.jx.o?0:1;b=new Ba;b.c=1;b.d=1;b.f=B(463);G(b);}
function Of(a){var b,c,d,e,f,g;b=a.j7;c=a.jx;if(b<c.o){if(a.el){d=c.C.data;a.j7=b+1|0;return d[b];}c=new Ba;c.c=1;c.d=1;c.f=B(463);G(c);}c=new MG;O();e=new N;e.b=D(16);P(e,e.a,b,10);f=new L;d=e.b;b=e.a;g=D(b);f.e=g;K(d,0,g,0,b);c.c=1;c.d=1;c.f=f;G(c);}
function NI(){var a=this;C.call(a);a.qL=null;a.sk=0;a.rs=null;a.rt=null;}
function Xs(a){var b,c,d;if(A4Y){b=new HI;c=a.qL;d=a.sk;b.el=1;b.jx=c;b.nM=d;return b;}if(a.rs===null){b=new HI;c=a.qL;d=a.sk;b.el=1;b.jx=c;b.nM=d;a.rs=b;b=new HI;b.el=1;b.jx=c;b.nM=d;a.rt=b;}b=a.rs;if(b.el){c=a.rt;c.j7=0;c.el=1;b.el=0;return c;}b.j7=0;b.el=1;a.rt.el=0;return b;}
function IO(){var a=this;C.call(a);a.ru=null;a.dO=null;a.rN=null;}
function ABo(a){var b,c,d,e,f,g,h,i,j;b=a.dO.length;c=new N;c.b=D(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{while(true){if(d>=b){e=new L;f=c.b;g=c.a;O();h=D(g);e.e=h;K(f,0,h,0,g);return e;}i=b-d|0;if(i<3){if(i>=2){g=((a.dO[d]&255)<<16)+((a.dO[d+1|0]&255)<<8)|0;Gg(c,C8(B(464),g>>18&63));DQ(c,C8(B(464),g>>12&63));DQ(c,C8(B(464),g>>6&63));B7(c,B(465));}else{i=(a.dO[d]&255)<<16;g=i>>18&63;if(g<0)break a;f=B(464).e.data;if(g>=f.length)break a;j=f[g];g=c.a;Bo(c,g,g+1|0);c.b.data[g]=j;i=C8(B(464),i>>12&63);g=c.a;Bo(c,g,g
+1|0);c.b.data[g]=i;H(c,c.a,B(466));}}else{i=(((a.dO[d]&255)<<16)+((a.dO[d+1|0]&255)<<8)|0)+(a.dO[d+2|0]&255)|0;g=i>>18&63;if(g<0)break b;f=B(464).e.data;if(g>=f.length)break b;j=f[g];g=c.a;Bo(c,g,g+1|0);c.b.data[g]=j;g=i>>12&63;if(g<0)break c;f=B(464).e.data;if(g>=f.length)break c;j=f[g];g=c.a;Bo(c,g,g+1|0);c.b.data[g]=j;g=i>>6&63;if(g<0)break d;f=B(464).e.data;if(g>=f.length)break d;j=f[g];g=c.a;Bo(c,g,g+1|0);c.b.data[g]=j;i=i&63;if(i<0)break;f=B(464).e.data;if(i>=f.length)break;g=f[i];i=c.a;Bo(c,i,i+1|0);c.b.data[i]
=g;}d=d+3|0;}e=new Bd;e.c=1;e.d=1;G(e);}e=new Bd;e.c=1;e.d=1;G(e);}e=new Bd;e.c=1;e.d=1;G(e);}e=new Bd;e.c=1;e.d=1;G(e);}e=new Bd;e.c=1;e.d=1;G(e);}
function M8(){C.call(this);this.q9=null;}
function AE4(a){var b,c,d,e,f,g,h;b=a.q9.mN;c=b.C.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new CE;d.P=c;e=d;c.classObject=e;}}f=d.P.$meta.item;if(f===null)c=null;else{c=f.classObject;if(c===null){c=new CE;c.P=f;d=c;f.classObject=d;}}g=b.o;if(c===null){b=new Dm;b.c=1;b.d=1;C3(b);G(b);}if(c===J($rt_voidcls())){b=new Bg;b.c=1;b.d=1;C3(b);G(b);}if(g<0){b=new DP;b.c=1;b.d=1;C3(b);G(b);}d=Et(c.P,g);ES(b.C,0,d,0,b.o);h=d;a.q9.og.tc.t4.ML(h);}
var SX=I(0);
var Jw=I(0);
var Rh=I(0);
var HW=I();
function Kz(){HW.call(this);this.cI=null;}
function Dd(){var a=this;Kz.call(a);a.cO=0;a.i7=0;a.bs=null;a.cE=null;a.cM=null;}
function NF(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;d=d-c|0;f=new Jd;g=e.length;h=c+d|0;f.B=(-1);f.J=g;f.g=g;f.h=c;f.g=h;f.h$=0;f.jG=0;f.hJ=b;i=1024;if(d<i)i=d;if(16>i)i=16;e=BS(i);h=e.data.length;j=new CT;c=0+h|0;j.B=(-1);j.J=h;j.g=h;CB();j.bt=A4Q;j.bB=0;j.bl=e;j.h=0;j.g=c;j.cu=0;j.bL=0;k=ADB(a.cM);Er();l=A5x;if(l===null){f=new Bg;f.c=1;f.d=1;f.f=B(467);G(f);}k.h2=l;k.hH=l;while(true){g=(KH(k,f,j,1)).by!=1?0:1;i=j.h;l=a.cI;if(l===null)a.i7=1;if(a.i7?0:1)a:{try{l.pT(e,0,i);break a;}catch($$e){$$je=BJ($$e);if
($$je instanceof Fj){}else{throw $$e;}}a.i7=1;}j.h=0;j.g=j.J;j.B=(-1);if(!g)break;}while(true){g=(M3(k,j)).by!=1?0:1;i=j.h;f=a.cI;if(f===null)a.i7=1;if(a.i7?0:1)b:{try{f.pT(e,0,i);break b;}catch($$e){$$je=BJ($$e);if($$je instanceof Fj){}else{throw $$e;}}a.i7=1;}j.h=0;j.g=j.J;j.B=(-1);if(!g)break;}}
function C7(a){var b,c,d,e,f,g,h,i,j;b=a.bs;c=b.a;d=a.cE;if(c>d.data.length)d=D(c);e=0;f=0;if(e>c){b=new Bh;b.c=1;b.d=1;b.f=B(468);G(b);}while(e<c){g=d.data;h=f+1|0;i=b.b.data;j=e+1|0;g[f]=i[e];f=h;e=j;}NF(a,d,0,c);a.bs.a=0;}
function HF(){HW.call(this);this.nY=null;}
var JC=I(HF);
var A0G=null;function AMM(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ARg(){var b;b=new JC;b.nY=BS(1);A0G=b;}
function IM(){var a=this;C.call(a);a.mP=null;a.sj=null;}
function APQ(a,b){a.mP.kJ(b.loaded);}
function EK(){var a=this;C.call(a);a.f2=null;a.iY=null;}
function El(b){var c,d,e,f;c=b.e.data;d=c.length;if(d?0:1){e=new JO;e.c=1;e.d=1;e.pv=b;G(e);}if(0>=d){b=new Bd;b.c=1;b.d=1;G(b);}if(!ABr(c[0])){e=new JO;e.c=1;e.d=1;e.pv=b;G(e);}f=1;a:{while(true){c=b.e.data;d=Bw(f,c.length);if(d>=0)break;if(f<0)break a;if(d>=0)break a;b:{d=c[f];switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ABr(d))break b;else{e=new JO;e.c=1;e.d=1;e.pv=b;G(e);}}}f=f+1|0;}return;}b=new Bd;b.c=1;b.d=1;G(b);}
function ABr(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function APK(a){return a.f2;}
function AUW(a,b){var c,d,$$je;a:{try{c=a.lM();Er();b=ON(SF(P7(c,A5x),A5x),b);}catch($$e){$$je=BJ($$e);if($$je instanceof Gy){d=$$je;break a;}else{throw $$e;}}return b;}c=new Mr;c.c=1;c.d=1;c.f=B(76);c.cY=d;G(c);}
var MC=I(EK);
var A5s=null;function Dc(){Dc=Bi(MC);AJ4();}
function ADB(a){var b,c,d,e,f;b=new OA;c=BS(1);d=c.data;d[0]=63;Er();e=A64;b.h2=e;b.hH=e;f=d.length;if(f&&f>=b.fY){b.mB=a;b.kL=c.cH();b.lo=2.0;b.fY=4.0;b.kx=D(512);b.ka=BS(512);return b;}e=new Bg;J$(e,B(469));G(e);}
function AJ4(){var b,c,d,e,f;b=new MC;Dc();c=Bt(L,0);d=c.data;El(B(119));e=d.length;f=0;while(f<e){El(d[f]);f=f+1|0;}b.f2=B(119);b.iY=c.cH();A5s=b;}
function JO(){Bg.call(this);this.pv=null;}
var Op=I(0);
function Me(){var a=this;C.call(a);a.sv=null;a.kA=null;a.eU=0;a.mh=null;a.ys=0.0;a.to=0.0;a.fZ=0;a.w6=null;a.of=null;a.oy=null;a.rU=0;a.wJ=0;a.us=0;a.uK=0;a.sX=0;a.iC=null;a.jS=null;a.zh=0;a.Ct=null;a.Eh=0.0;a.m9=0;a.qs=0;a.sl=0;}
var A65=null;function ABY(){ABY=Bi(Me);AOU();}
function A66(a,b){var c=new Me();Oa(c,a,b);return c;}
function Oa(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;ABY();a.eU=0;a.mh=null;a.ys=0.0;a.to=0.0;a.fZ=0;a.w6=Fx();a.of=Fx();a.oy=Fx();a.rU=0;a.wJ=770;a.us=771;a.uK=770;a.sX=771;a.jS=null;d=new Bx;E4();d.cr=1.0;d.cq=1.0;d.cp=1.0;d.co=1.0;DV(d);a.Ct=d;a.Eh=A4l;a.m9=0;a.qs=0;a.sl=0;if(b>8191){c=new Bg;d=new N;d.b=D(16);H(d,d.a,B(470));P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}if(A5Q===null)i=A65;else{Pi();i=A67;}j=new Js;k=b*4|0;l=b*6|0;f=Bt(Em,3);h=f.data;d=new Em;d.fa=1;d.c5
=2;d.dw=5126;d.dB=0;d.dp=B(471);d.fk=0;d.gH=ED(1);h[0]=d;d=new Em;d.fa=4;d.c5=4;d.dw=5121;d.dB=1;d.dp=B(472);d.fk=0;d.gH=ED(4);h[1]=d;d=new Em;d.fa=16;d.c5=2;d.dw=5126;d.dB=0;d.dp=B(473);d.fk=0;d.gH=ED(16);h[2]=d;St(j,i,0,k,l,ALp(f));a.sv=j;i=a.of;m=A4P.I.width;n=A4P.I.height;Qy(i,0.0,0.0+m,0.0,0.0+n,0.0,1.0);a.kA=CU(b*20|0);h=OW(l);f=h.data;o=0;p=0;while(p<l){f[p]=o;f[p+1|0]=(o+1|0)<<16>>16;b=p+2|0;g=(o+2|0)<<16>>16;f[b]=g;f[p+3|0]=g;f[p+4|0]=(o+3|0)<<16>>16;f[p+5|0]=o;p=p+6|0;o=(o+4|0)<<16>>16;}a.sv.cW.wl(h,
0,f.length);if(c!==null)a.iC=c;else{a.iC=AAO();a.zh=1;}}
function AAO(){var b,c,d,e,f,g,h;ABY();b=CA(B(474),B(475));if(b.W)return b;c=new Bg;d=new N;d.b=D(16);H(d,d.a,B(476));if(!b.W)e=b.T;else{e=A4R.bI(b.bu);b.T=e;}H(d,d.a,e);b=new L;f=d.b;g=d.a;O();h=D(g);b.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=b;G(c);}
function Cu(a){var b,c;if(a.fZ){b=new B2;b.c=1;b.d=1;b.f=B(477);G(b);}a.m9=0;A3_.n1(0);c=a.jS;if(c!==null)c.o9();else{c=a.iC;b=A4R;if(c.bv){Da(c,c.cB,c.cF);c.bv=0;}b.op(c.bu);}OG(a);a.fZ=1;}
function Cy(a){var b,c;if(!a.fZ){b=new B2;b.c=1;b.d=1;b.f=B(478);G(b);}if(a.eU>0)HY(a);a.mh=null;a.fZ=0;c=A3_;c.n1(1);if(a.rU?0:1)c.mG(3042);}
function Yf(a,b,c,d,e){var f,g;if(!a.fZ){b=new B2;b.c=1;b.d=1;b.f=B(479);G(b);}f=a.kA.data.length;if(b!==a.mh){HY(a);a.mh=b;b=b.hx;a.ys=1.0/b.gm;a.to=1.0/b.f_;g=f;}else{g=f-a.eU|0;if(!g){HY(a);g=f;}}if(g>=e)g=e;K(c,d,a.kA,a.eU,g);a.eU=a.eU+g|0;e=e-g|0;while(e>0){d=d+g|0;HY(a);g=f>=e?e:f;K(c,d,a.kA,0,g);a.eU=a.eU+g|0;e=e-g|0;}}
function HY(a){var b,c,d,e,f,g;b=a.eU;if(!b)return;a.m9=a.m9+1|0;a.qs=a.qs+1|0;c=b/20|0;if(c>a.sl)a.sl=c;b=c*6|0;d=a.mh;A3_.lT(d.f9,d.qJ);d=a.sv;e=a.kA;f=a.eU;d.d7.nS(e,0,f);g=d.cW.rP(1);B_(g,0);De(g,b);if(a.rU)A3_.mG(3042);else{A3_.qz(3042);c=a.wJ;if(c!=(-1))A3_.rX(c,a.us,a.uK,a.sX);}g=a.jS;if(g===null)g=a.iC;Ql(d,g,4,0,b,d.mV);a.eU=0;}
function Ct(a,b){if(a.fZ)HY(a);GL(a.of,b.cR);if(a.fZ)OG(a);}
function OG(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;Qr(GL(a.oy,a.of.cR),a.w6);b=a.jS;if(b!==null){b.Ml(B(480),a.oy);a.jS.Jw(B(481),0);}else{b=a.iC;c=a.oy;SY();d=Jq(b,B(480),A68);e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}f=c.cR;b=e.dF;g=e.em;if(!g)b=!b.V?null:b.S;else{h=b.Q;i=V(Bc(Bb(M(g),F(2135587861, 2654435769)),b.X));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==g)break;i=(i+1|0)&b.U;}}b=i<0?null:b.R.data[i];}b=b;if(!d)b=!b.V?null:b.S;else{h=b.Q;j=V(Bc(Bb(M(d),F(2135587861, 2654435769)),b.X));b:{while
(true){i=h.data[j];if(!i){j= -(j+1|0)|0;break b;}if(i==d)break;j=(j+1|0)&b.U;}}b=j<0?null:b.R.data[j];}BM();k=b===null?null:b[A5n]===true?b:b.bb;b=e.l;e="uniformMatrix4fv";c=!!0;if(f===null)l=null;else{f=f.data;m=f.length;l=new $rt_globals.Array(m);j=0;while(j<m){n=f[j];j;l[j]=n;j=j+1|0;}}b[e](k,c,l);b=a.iC;c=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}c.nl(Jq(b,B(481),A68),0);}}
function AOU(){Pi();A65=A69;}
var Lf=I(0);
var BG=I();
function AK3(a){}
function AKt(a){}
function AK6(a){}
function Po(){var a=this;BG.call(a);a.pB=null;a.kz=null;a.ex=null;a.ic=null;a.g5=R;a.tk=null;a.mX=null;a.kt=null;}
function AVU(a){var b,c,d,e,f,g,h,i,j,k;a.tk=a.kt.bY;b=new F0;c=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));d=new EM;d.ip=0;Ed(d,M(1234567890));b.fo=d;Ed(d,c);a.pB=b;a.kz=a.kt.bW;b=new Cj;d=new Ch;Cx(d);d.bX=1.0;e=new Be;BT();d.b1=e;d.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=d;a.mX=b;b=new Ci;f=CA(Cz(0,1,0),CC(0,1,0));if(f.W){Cv(b,1536,0,1,0,f);b.b$=1;a.ex=b;g=a.ic.data;h=0;i=g.length;if(h>i){b=new Bg;b.c=1;b.d=1;G(b);}while(h<i){j=h+1|0;g[h]=R;h=j;}a.g5=R;return;}b=new Ba;d=new N;d.b
=D(16);H(d,d.a,B(476));if(!f.W)e=f.T;else{e=A4R.bI(f.bu);f.T=e;}H(d,d.a,e);e=new L;g=d.b;i=d.a;O();k=D(i);e.e=k;K(g,0,k,0,i);b.c=1;b.d=1;b.f=e;G(b);}
function ATi(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.kt;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kt;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.mX);Cq(d);if(Br(A5R,29)){Bs(a.ic,R);a.g5=R;}if(Br(A5R,30)){Bs(a.ic,R);a.g5=R;}if(Br(A5R,31)){Bs(a.ic,R);a.g5=R;}a.g5=Z(a.g5,M(1));e=0;while(e<524288)
{h=IT(a.pB)*512.0|0;if(h>=0&&h<512){c=a.ic.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.ex,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.ex,i);g=a.ex;b=f;Bl(g,b,0.0,0.0);Bk(a.ex,i);Bl(a.ex,b,0.0625*BF(a.ic.data[f])/BF(a.g5),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.ex,(-6.221923240859403E37));g=a.ex;i=j;Bl(g,0.0,i,0.0);Bk(a.ex,(-6.221923240859403E37));Bl(a.ex,10.0,i,0.0);j=j+32|0;}Co(a.ex);Ct(a.kz,d.ba);Cu(a.kz);Cn(a.tk,a.kz,CD(B(482),U(C,[Hd(a.pB),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.kz);}
function APb(a,b,c){var d,e,f;d=a.mX;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mX,1);}
function P1(){var a=this;BG.call(a);a.qW=null;a.j8=null;a.eT=null;a.hz=null;a.gd=R;a.yy=null;a.oH=null;a.l4=null;}
function ATN(a){var b,c,d,e,f,g,h,i,j,k;a.yy=a.l4.bY;b=new GB;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.fe=c;b.ff=d;b.fg=e;b.fh=f;a.qW=b;a.j8=a.l4.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.oH=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eT=b;j=a.hz.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gd=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AFw(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.l4;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.l4;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.oH);Cq(d);if(Br(A5R,29)){Bs(a.hz,R);a.gd=R;}if(Br(A5R,30)){Bs(a.hz,R);a.gd=R;}if(Br(A5R,31)){Bs(a.hz,R);a.gd=R;}a.gd=Z(a.gd,M(1));e=0;while(e<524288)
{h=IT(a.qW)*512.0|0;if(h>=0&&h<512){c=a.hz.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eT,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eT,i);g=a.eT;b=f;Bl(g,b,0.0,0.0);Bk(a.eT,i);Bl(a.eT,b,0.0625*BF(a.hz.data[f])/BF(a.gd),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eT,(-6.221923240859403E37));g=a.eT;i=j;Bl(g,0.0,i,0.0);Bk(a.eT,(-6.221923240859403E37));Bl(a.eT,10.0,i,0.0);j=j+32|0;}Co(a.eT);Ct(a.j8,d.ba);Cu(a.j8);Cn(a.yy,a.j8,CD(B(482),U(C,[GE(a.qW),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.j8);}
function AHL(a,b,c){var d,e,f;d=a.oH;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.oH,1);}
function Q7(){var a=this;BG.call(a);a.q_=null;a.jO=null;a.eH=null;a.hj=null;a.f$=R;a.uY=null;a.mk=null;a.k8=null;}
function AVz(a){var b,c,d,e,f,g,h,i,j,k;a.uY=a.k8.bY;b=new F3;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.dV=c;b.dU=d;b.dX=e;b.dW=f;a.q_=b;a.jO=a.k8.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.mk=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eH=b;j=a.hj.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.f$=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function APJ(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.k8;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.k8;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.mk);Cq(d);if(Br(A5R,29)){Bs(a.hj,R);a.f$=R;}if(Br(A5R,30)){Bs(a.hj,R);a.f$=R;}if(Br(A5R,31)){Bs(a.hj,R);a.f$=R;}a.f$=Z(a.f$,M(1));e=0;while(e<524288)
{h=IT(a.q_)*512.0|0;if(h>=0&&h<512){c=a.hj.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eH,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eH,i);g=a.eH;b=f;Bl(g,b,0.0,0.0);Bk(a.eH,i);Bl(a.eH,b,0.0625*BF(a.hj.data[f])/BF(a.f$),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eH,(-6.221923240859403E37));g=a.eH;i=j;Bl(g,0.0,i,0.0);Bk(a.eH,(-6.221923240859403E37));Bl(a.eH,10.0,i,0.0);j=j+32|0;}Co(a.eH);Ct(a.jO,d.ba);Cu(a.jO);Cn(a.uY,a.jO,CD(B(482),U(C,[GV(a.q_),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.jO);}
function ALF(a,b,c){var d,e,f;d=a.mk;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mk,1);}
function Nf(){var a=this;BG.call(a);a.rb=null;a.kY=null;a.eq=null;a.h6=null;a.f6=R;a.uO=null;a.nN=null;a.jN=null;}
function AS9(a){var b,c,d,e,f,g,h,i,j,k;a.uO=a.jN.bY;b=new F7;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.d_=c;b.d$=d;b.d9=e;b.d8=f;a.rb=b;a.kY=a.jN.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.nN=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eq=b;j=a.h6.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.f6=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function ARa(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.jN;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.jN;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.nN);Cq(d);if(Br(A5R,29)){Bs(a.h6,R);a.f6=R;}if(Br(A5R,30)){Bs(a.h6,R);a.f6=R;}if(Br(A5R,31)){Bs(a.h6,R);a.f6=R;}a.f6=Z(a.f6,M(1));e=0;while(e<524288)
{h=H_(a.rb)*512.0|0;if(h>=0&&h<512){c=a.h6.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eq,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eq,i);g=a.eq;b=f;Bl(g,b,0.0,0.0);Bk(a.eq,i);Bl(a.eq,b,0.0625*BF(a.h6.data[f])/BF(a.f6),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eq,(-6.221923240859403E37));g=a.eq;i=j;Bl(g,0.0,i,0.0);Bk(a.eq,(-6.221923240859403E37));Bl(a.eq,10.0,i,0.0);j=j+32|0;}Co(a.eq);Ct(a.kY,d.ba);Cu(a.kY);Cn(a.uO,a.kY,CD(B(483),U(C,[Hi(a.rb),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.kY);}
function ALN(a,b,c){var d,e,f;d=a.nN;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nN,1);}
function OS(){var a=this;BG.call(a);a.sF=null;a.jU=null;a.eD=null;a.hG=null;a.gY=R;a.td=null;a.n4=null;a.kR=null;}
function AGi(a){var b,c,d,e,f,g,h,i,j;a.td=a.kR.bY;b=new F_;b.d4=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d1=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d0=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d3=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d2=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));a.sF=b;a.jU=a.kR.bW;b=new Cj;c=new Ch;Cx(c);c.bX
=1.0;d=new Be;BT();c.b1=d;c.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=c;a.n4=b;b=new Ci;e=CA(Cz(0,1,0),CC(0,1,0));if(e.W){Cv(b,1536,0,1,0,e);b.b$=1;a.eD=b;f=a.hG.data;g=0;h=f.length;if(g>h){b=new Bg;b.c=1;b.d=1;G(b);}while(g<h){i=g+1|0;f[g]=R;g=i;}a.gY=R;return;}b=new Ba;c=new N;c.b=D(16);H(c,c.a,B(476));if(!e.W)d=e.T;else{d=A4R.bI(e.bu);e.T=d;}H(c,c.a,d);d=new L;f=c.b;h=c.a;O();j=D(h);d.e=j;K(f,0,j,0,h);b.c=1;b.d=1;b.f=d;G(b);}
function AQc(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.kR;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kR;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.n4);Cq(d);if(Br(A5R,29)){Bs(a.hG,R);a.gY=R;}if(Br(A5R,30)){Bs(a.hG,R);a.gY=R;}if(Br(A5R,31)){Bs(a.hG,R);a.gY=R;}a.gY=Z(a.gY,M(1));e=0;while(e<524288)
{h=IT(a.sF)*512.0|0;if(h>=0&&h<512){c=a.hG.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eD,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eD,i);g=a.eD;b=f;Bl(g,b,0.0,0.0);Bk(a.eD,i);Bl(a.eD,b,0.0625*BF(a.hG.data[f])/BF(a.gY),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eD,(-6.221923240859403E37));g=a.eD;i=j;Bl(g,0.0,i,0.0);Bk(a.eD,(-6.221923240859403E37));Bl(a.eD,10.0,i,0.0);j=j+32|0;}Co(a.eD);Ct(a.jU,d.ba);Cu(a.jU);Cn(a.td,a.jU,CD(B(482),U(C,[GN(a.sF),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.jU);}
function AI5(a,b,c){var d,e,f;d=a.n4;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.n4,1);}
function S1(){var a=this;BG.call(a);a.pV=null;a.lL=null;a.ei=null;a.ii=null;a.gc=R;a.xG=null;a.nR=null;a.jW=null;}
function AQL(a){var b,c,d,e,f,g,h,i,j,k;a.xG=a.jW.bY;b=new F0;c=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));d=new EM;d.ip=0;Ed(d,M(1234567890));b.fo=d;Ed(d,c);a.pV=b;a.lL=a.jW.bW;b=new Cj;d=new Ch;Cx(d);d.bX=1.0;e=new Be;BT();d.b1=e;d.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=d;a.nR=b;b=new Ci;f=CA(Cz(0,1,0),CC(0,1,0));if(f.W){Cv(b,1536,0,1,0,f);b.b$=1;a.ei=b;g=a.ii.data;h=0;i=g.length;if(h>i){b=new Bg;b.c=1;b.d=1;G(b);}while(h<i){j=h+1|0;g[h]=R;h=j;}a.gc=R;return;}b=new Ba;d=new N;d.b
=D(16);H(d,d.a,B(476));if(!f.W)e=f.T;else{e=A4R.bI(f.bu);f.T=e;}H(d,d.a,e);e=new L;g=d.b;i=d.a;O();k=D(i);e.e=k;K(g,0,k,0,i);b.c=1;b.d=1;b.f=e;G(b);}
function ARV(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.jW;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.jW;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.nR);Cq(d);if(Br(A5R,29)){Bs(a.ii,R);a.gc=R;}if(Br(A5R,30)){Bs(a.ii,R);a.gc=R;}if(Br(A5R,31)){Bs(a.ii,R);a.gc=R;}a.gc=Z(a.gc,M(1));e=0;while(e<524288)
{h=Y_(a.pV)*512.0|0;if(h>=0&&h<512){c=a.ii.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.ei,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.ei,i);g=a.ei;b=f;Bl(g,b,0.0,0.0);Bk(a.ei,i);Bl(a.ei,b,0.0625*BF(a.ii.data[f])/BF(a.gc),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.ei,(-6.221923240859403E37));g=a.ei;i=j;Bl(g,0.0,i,0.0);Bk(a.ei,(-6.221923240859403E37));Bl(a.ei,10.0,i,0.0);j=j+32|0;}Co(a.ei);Ct(a.lL,d.ba);Cu(a.lL);Cn(a.xG,a.lL,CD(B(484),U(C,[Hd(a.pV),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.lL);}
function AJ3(a,b,c){var d,e,f;d=a.nR;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nR,1);}
function MN(){var a=this;BG.call(a);a.rJ=null;a.lx=null;a.eI=null;a.g$=null;a.fW=R;a.ug=null;a.mj=null;a.k4=null;}
function AKo(a){var b,c,d,e,f,g,h,i,j,k;a.ug=a.k4.bY;b=new GB;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.fe=c;b.ff=d;b.fg=e;b.fh=f;a.rJ=b;a.lx=a.k4.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.mj=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eI=b;j=a.g$.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.fW=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function ANJ(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.k4;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.k4;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.mj);Cq(d);if(Br(A5R,29)){Bs(a.g$,R);a.fW=R;}if(Br(A5R,30)){Bs(a.g$,R);a.fW=R;}if(Br(A5R,31)){Bs(a.g$,R);a.fW=R;}a.fW=Z(a.fW,M(1));e=0;while(e<524288)
{h=Tg(a.rJ)*512.0|0;if(h>=0&&h<512){c=a.g$.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eI,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eI,i);g=a.eI;b=f;Bl(g,b,0.0,0.0);Bk(a.eI,i);Bl(a.eI,b,0.0625*BF(a.g$.data[f])/BF(a.fW),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eI,(-6.221923240859403E37));g=a.eI;i=j;Bl(g,0.0,i,0.0);Bk(a.eI,(-6.221923240859403E37));Bl(a.eI,10.0,i,0.0);j=j+32|0;}Co(a.eI);Ct(a.lx,d.ba);Cu(a.lx);Cn(a.ug,a.lx,CD(B(484),U(C,[GE(a.rJ),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.lx);}
function AVd(a,b,c){var d,e,f;d=a.mj;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mj,1);}
function ABh(){var a=this;BG.call(a);a.rM=null;a.kM=null;a.eu=null;a.io=null;a.ge=R;a.tg=null;a.mQ=null;a.lz=null;}
function AWs(a){var b=new ABh();ANQ(b,a);return b;}
function AJs(a){var b,c,d,e,f,g,h,i,j,k;a.tg=a.lz.bY;b=new F3;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.dV=c;b.dU=d;b.dX=e;b.dW=f;a.rM=b;a.kM=a.lz.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.mQ=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eu=b;j=a.io.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.ge=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function ANQ(a,b){a.io=CF(512);a.ge=R;a.lz=b;}
function AMU(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.lz;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.lz;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.mQ);Cq(d);if(Br(A5R,29)){Bs(a.io,R);a.ge=R;}if(Br(A5R,30)){Bs(a.io,R);a.ge=R;}if(Br(A5R,31)){Bs(a.io,R);a.ge=R;}a.ge=Z(a.ge,M(1));e=0;while(e<524288)
{h=ADD(a.rM)*512.0|0;if(h>=0&&h<512){c=a.io.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eu,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eu,i);g=a.eu;b=f;Bl(g,b,0.0,0.0);Bk(a.eu,i);Bl(a.eu,b,0.0625*BF(a.io.data[f])/BF(a.ge),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eu,(-6.221923240859403E37));g=a.eu;i=j;Bl(g,0.0,i,0.0);Bk(a.eu,(-6.221923240859403E37));Bl(a.eu,10.0,i,0.0);j=j+32|0;}Co(a.eu);Ct(a.kM,d.ba);Cu(a.kM);Cn(a.tg,a.kM,CD(B(484),U(C,[GV(a.rM),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.kM);}
function AMR(a,b,c){var d,e,f;d=a.mQ;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mQ,1);}
function Wc(){var a=this;BG.call(a);a.ro=null;a.l$=null;a.eM=null;a.hl=null;a.gK=R;a.tu=null;a.mZ=null;a.kr=null;}
function AYW(a){var b=new Wc();AEK(b,a);return b;}
function AKX(a){var b,c,d,e,f,g,h,i,j,k;a.tu=a.kr.bY;b=new F7;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.d_=c;b.d$=d;b.d9=e;b.d8=f;a.ro=b;a.l$=a.kr.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.mZ=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eM=b;j=a.hl.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gK=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AEK(a,b){a.hl=CF(512);a.gK=R;a.kr=b;}
function AHQ(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.kr;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kr;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.mZ);Cq(d);if(Br(A5R,29)){Bs(a.hl,R);a.gK=R;}if(Br(A5R,30)){Bs(a.hl,R);a.gK=R;}if(Br(A5R,31)){Bs(a.hl,R);a.gK=R;}a.gK=Z(a.gK,M(1));e=0;while(e<524288)
{h=ACN(a.ro)*512.0|0;if(h>=0&&h<512){c=a.hl.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eM,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eM,i);g=a.eM;b=f;Bl(g,b,0.0,0.0);Bk(a.eM,i);Bl(a.eM,b,0.0625*BF(a.hl.data[f])/BF(a.gK),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eM,(-6.221923240859403E37));g=a.eM;i=j;Bl(g,0.0,i,0.0);Bk(a.eM,(-6.221923240859403E37));Bl(a.eM,10.0,i,0.0);j=j+32|0;}Co(a.eM);Ct(a.l$,d.ba);Cu(a.l$);Cn(a.tu,a.l$,CD(B(484),U(C,[Hi(a.ro),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.l$);}
function AGb(a,b,c){var d,e,f;d=a.mZ;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mZ,1);}
function AA2(){var a=this;BG.call(a);a.ph=null;a.lF=null;a.eW=null;a.g9=null;a.g3=R;a.wN=null;a.mA=null;a.k7=null;}
function AYr(a){var b=new AA2();AS$(b,a);return b;}
function AMH(a){var b,c,d,e,f,g,h,i,j;a.wN=a.k7.bY;b=new F_;b.d4=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d1=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d0=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d3=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d2=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));a.ph=b;a.lF=a.k7.bW;b=new Cj;c=new Ch;Cx(c);c.bX
=1.0;d=new Be;BT();c.b1=d;c.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=c;a.mA=b;b=new Ci;e=CA(Cz(0,1,0),CC(0,1,0));if(e.W){Cv(b,1536,0,1,0,e);b.b$=1;a.eW=b;f=a.g9.data;g=0;h=f.length;if(g>h){b=new Bg;b.c=1;b.d=1;G(b);}while(g<h){i=g+1|0;f[g]=R;g=i;}a.g3=R;return;}b=new Ba;c=new N;c.b=D(16);H(c,c.a,B(476));if(!e.W)d=e.T;else{d=A4R.bI(e.bu);e.T=d;}H(c,c.a,d);d=new L;f=c.b;h=c.a;O();j=D(h);d.e=j;K(f,0,j,0,h);b.c=1;b.d=1;b.f=d;G(b);}
function AS$(a,b){a.g9=CF(512);a.g3=R;a.k7=b;}
function ATE(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.k7;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.k7;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.mA);Cq(d);if(Br(A5R,29)){Bs(a.g9,R);a.g3=R;}if(Br(A5R,30)){Bs(a.g9,R);a.g3=R;}if(Br(A5R,31)){Bs(a.g9,R);a.g3=R;}a.g3=Z(a.g3,M(1));e=0;while(e<524288)
{h=YP(a.ph)*512.0|0;if(h>=0&&h<512){c=a.g9.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eW,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eW,i);g=a.eW;b=f;Bl(g,b,0.0,0.0);Bk(a.eW,i);Bl(a.eW,b,0.0625*BF(a.g9.data[f])/BF(a.g3),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eW,(-6.221923240859403E37));g=a.eW;i=j;Bl(g,0.0,i,0.0);Bk(a.eW,(-6.221923240859403E37));Bl(a.eW,10.0,i,0.0);j=j+32|0;}Co(a.eW);Ct(a.lF,d.ba);Cu(a.lF);Cn(a.wN,a.lF,CD(B(484),U(C,[GN(a.ph),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.lF);}
function ASI(a,b,c){var d,e,f;d=a.mA;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mA,1);}
function V$(){var a=this;BG.call(a);a.sm=null;a.lK=null;a.eg=null;a.hg=null;a.gI=R;a.tw=null;a.nv=null;a.kP=null;}
function AXk(a){var b=new V$();ANW(b,a);return b;}
function AHf(a){var b,c,d,e,f,g,h,i,j,k;a.tw=a.kP.bY;b=new F0;c=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));d=new EM;d.ip=0;Ed(d,M(1234567890));b.fo=d;Ed(d,c);a.sm=b;a.lK=a.kP.bW;b=new Cj;d=new Ch;Cx(d);d.bX=1.0;e=new Be;BT();d.b1=e;d.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=d;a.nv=b;b=new Ci;f=CA(Cz(0,1,0),CC(0,1,0));if(f.W){Cv(b,1536,0,1,0,f);b.b$=1;a.eg=b;g=a.hg.data;h=0;i=g.length;if(h>i){b=new Bg;b.c=1;b.d=1;G(b);}while(h<i){j=h+1|0;g[h]=R;h=j;}a.gI=R;return;}b=new Ba;d=new N;d.b
=D(16);H(d,d.a,B(476));if(!f.W)e=f.T;else{e=A4R.bI(f.bu);f.T=e;}H(d,d.a,e);e=new L;g=d.b;i=d.a;O();k=D(i);e.e=k;K(g,0,k,0,i);b.c=1;b.d=1;b.f=e;G(b);}
function ANW(a,b){a.hg=CF(512);a.gI=R;a.kP=b;}
function ASY(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.kP;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kP;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.nv);Cq(d);if(Br(A5R,29)){Bs(a.hg,R);a.gI=R;}if(Br(A5R,30)){Bs(a.hg,R);a.gI=R;}if(Br(A5R,31)){Bs(a.hg,R);a.gI=R;}a.gI=Z(a.gI,M(1));e=0;while(e<524288)
{h=Zg(a.sm)*512.0|0;if(h>=0&&h<512){c=a.hg.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eg,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eg,i);g=a.eg;b=f;Bl(g,b,0.0,0.0);Bk(a.eg,i);Bl(a.eg,b,0.0625*BF(a.hg.data[f])/BF(a.gI),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eg,(-6.221923240859403E37));g=a.eg;i=j;Bl(g,0.0,i,0.0);Bk(a.eg,(-6.221923240859403E37));Bl(a.eg,10.0,i,0.0);j=j+32|0;}Co(a.eg);Ct(a.lK,d.ba);Cu(a.lK);Cn(a.tw,a.lK,CD(B(483),U(C,[Hd(a.sm),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.lK);}
function AT$(a,b,c){var d,e,f;d=a.nv;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nv,1);}
function UV(){var a=this;BG.call(a);a.rV=null;a.lj=null;a.eC=null;a.it=null;a.g2=R;a.wU=null;a.nW=null;a.jY=null;}
function AWn(a){var b=new UV();AFY(b,a);return b;}
function ALR(a){var b,c,d,e,f,g,h,i,j,k;a.wU=a.jY.bY;b=new GB;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.fe=c;b.ff=d;b.fg=e;b.fh=f;a.rV=b;a.lj=a.jY.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.nW=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eC=b;j=a.it.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.g2=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AFY(a,b){a.it=CF(512);a.g2=R;a.jY=b;}
function ARx(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.jY;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.jY;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.nW);Cq(d);if(Br(A5R,29)){Bs(a.it,R);a.g2=R;}if(Br(A5R,30)){Bs(a.it,R);a.g2=R;}if(Br(A5R,31)){Bs(a.it,R);a.g2=R;}a.g2=Z(a.g2,M(1));e=0;while(e<524288)
{h=H_(a.rV)*512.0|0;if(h>=0&&h<512){c=a.it.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eC,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eC,i);g=a.eC;b=f;Bl(g,b,0.0,0.0);Bk(a.eC,i);Bl(a.eC,b,0.0625*BF(a.it.data[f])/BF(a.g2),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eC,(-6.221923240859403E37));g=a.eC;i=j;Bl(g,0.0,i,0.0);Bk(a.eC,(-6.221923240859403E37));Bl(a.eC,10.0,i,0.0);j=j+32|0;}Co(a.eC);Ct(a.lj,d.ba);Cu(a.lj);Cn(a.wU,a.lj,CD(B(483),U(C,[GE(a.rV),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.lj);}
function ARt(a,b,c){var d,e,f;d=a.nW;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nW,1);}
function Wq(){var a=this;BG.call(a);a.o2=null;a.la=null;a.eQ=null;a.hO=null;a.gf=R;a.uW=null;a.oI=null;a.l3=null;}
function AXG(a){var b=new Wq();AMa(b,a);return b;}
function AKi(a){var b,c,d,e,f,g,h,i,j,k;a.uW=a.l3.bY;b=new F3;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.dV=c;b.dU=d;b.dX=e;b.dW=f;a.o2=b;a.la=a.l3.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.oI=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eQ=b;j=a.hO.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gf=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AMa(a,b){a.hO=CF(512);a.gf=R;a.l3=b;}
function AOp(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.l3;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.l3;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.oI);Cq(d);if(Br(A5R,29)){Bs(a.hO,R);a.gf=R;}if(Br(A5R,30)){Bs(a.hO,R);a.gf=R;}if(Br(A5R,31)){Bs(a.hO,R);a.gf=R;}a.gf=Z(a.gf,M(1));e=0;while(e<524288)
{h=H_(a.o2)*512.0|0;if(h>=0&&h<512){c=a.hO.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eQ,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eQ,i);g=a.eQ;b=f;Bl(g,b,0.0,0.0);Bk(a.eQ,i);Bl(a.eQ,b,0.0625*BF(a.hO.data[f])/BF(a.gf),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eQ,(-6.221923240859403E37));g=a.eQ;i=j;Bl(g,0.0,i,0.0);Bk(a.eQ,(-6.221923240859403E37));Bl(a.eQ,10.0,i,0.0);j=j+32|0;}Co(a.eQ);Ct(a.la,d.ba);Cu(a.la);Cn(a.uW,a.la,CD(B(483),U(C,[GV(a.o2),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.la);}
function ATX(a,b,c){var d,e,f;d=a.oI;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.oI,1);}
function ABU(){var a=this;BG.call(a);a.o8=null;a.l1=null;a.et=null;a.hn=null;a.f0=R;a.wA=null;a.nC=null;a.kT=null;}
function AZF(a){var b=new ABU();AVF(b,a);return b;}
function AFW(a){var b,c,d,e,f,g,h,i,j,k;a.wA=a.kT.bY;b=new F7;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.d_=c;b.d$=d;b.d9=e;b.d8=f;a.o8=b;a.l1=a.kT.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.nC=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.et=b;j=a.hn.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.f0=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AVF(a,b){a.hn=CF(512);a.f0=R;a.kT=b;}
function AKB(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.kT;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kT;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.nC);Cq(d);if(Br(A5R,29)){Bs(a.hn,R);a.f0=R;}if(Br(A5R,30)){Bs(a.hn,R);a.f0=R;}if(Br(A5R,31)){Bs(a.hn,R);a.f0=R;}a.f0=Z(a.f0,M(1));e=0;while(e<524288)
{h=H_(a.o8)*512.0|0;if(h>=0&&h<512){c=a.hn.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.et,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.et,i);g=a.et;b=f;Bl(g,b,0.0,0.0);Bk(a.et,i);Bl(a.et,b,0.0625*BF(a.hn.data[f])/BF(a.f0),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.et,(-6.221923240859403E37));g=a.et;i=j;Bl(g,0.0,i,0.0);Bk(a.et,(-6.221923240859403E37));Bl(a.et,10.0,i,0.0);j=j+32|0;}Co(a.et);Ct(a.l1,d.ba);Cu(a.l1);Cn(a.wA,a.l1,CD(B(483),U(C,[Hi(a.o8),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.l1);}
function AGd(a,b,c){var d,e,f;d=a.nC;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nC,1);}
function AA_(){var a=this;BG.call(a);a.pR=null;a.lI=null;a.eG=null;a.hr=null;a.gR=R;a.tY=null;a.oS=null;a.l8=null;}
function AXJ(a){var b=new AA_();AOu(b,a);return b;}
function AMA(a){var b,c,d,e,f,g,h,i,j;a.tY=a.l8.bY;b=new F_;b.d4=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d1=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d0=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d3=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d2=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));a.pR=b;a.lI=a.l8.bW;b=new Cj;c=new Ch;Cx(c);c.bX
=1.0;d=new Be;BT();c.b1=d;c.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=c;a.oS=b;b=new Ci;e=CA(Cz(0,1,0),CC(0,1,0));if(e.W){Cv(b,1536,0,1,0,e);b.b$=1;a.eG=b;f=a.hr.data;g=0;h=f.length;if(g>h){b=new Bg;b.c=1;b.d=1;G(b);}while(g<h){i=g+1|0;f[g]=R;g=i;}a.gR=R;return;}b=new Ba;c=new N;c.b=D(16);H(c,c.a,B(476));if(!e.W)d=e.T;else{d=A4R.bI(e.bu);e.T=d;}H(c,c.a,d);d=new L;f=c.b;h=c.a;O();j=D(h);d.e=j;K(f,0,j,0,h);b.c=1;b.d=1;b.f=d;G(b);}
function AOu(a,b){a.hr=CF(512);a.gR=R;a.l8=b;}
function AVH(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.l8;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.l8;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.oS);Cq(d);if(Br(A5R,29)){Bs(a.hr,R);a.gR=R;}if(Br(A5R,30)){Bs(a.hr,R);a.gR=R;}if(Br(A5R,31)){Bs(a.hr,R);a.gR=R;}a.gR=Z(a.gR,M(1));e=0;while(e<524288)
{h=H_(a.pR)*512.0|0;if(h>=0&&h<512){c=a.hr.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eG,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eG,i);g=a.eG;b=f;Bl(g,b,0.0,0.0);Bk(a.eG,i);Bl(a.eG,b,0.0625*BF(a.hr.data[f])/BF(a.gR),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eG,(-6.221923240859403E37));g=a.eG;i=j;Bl(g,0.0,i,0.0);Bk(a.eG,(-6.221923240859403E37));Bl(a.eG,10.0,i,0.0);j=j+32|0;}Co(a.eG);Ct(a.lI,d.ba);Cu(a.lI);Cn(a.tY,a.lI,CD(B(483),U(C,[GN(a.pR),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.lI);}
function AWi(a,b,c){var d,e,f;d=a.oS;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.oS,1);}
function YV(){var a=this;BG.call(a);a.o4=null;a.ll=null;a.eJ=null;a.hb=null;a.gW=R;a.vm=null;a.mv=null;a.lk=null;}
function AWW(a){var b=new YV();AIB(b,a);return b;}
function ASO(a){var b,c,d,e,f,g,h,i,j,k;a.vm=a.lk.bY;b=new F0;c=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));d=new EM;d.ip=0;Ed(d,M(1234567890));b.fo=d;Ed(d,c);a.o4=b;a.ll=a.lk.bW;b=new Cj;d=new Ch;Cx(d);d.bX=1.0;e=new Be;BT();d.b1=e;d.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=d;a.mv=b;b=new Ci;f=CA(Cz(0,1,0),CC(0,1,0));if(f.W){Cv(b,1536,0,1,0,f);b.b$=1;a.eJ=b;g=a.hb.data;h=0;i=g.length;if(h>i){b=new Bg;b.c=1;b.d=1;G(b);}while(h<i){j=h+1|0;g[h]=R;h=j;}a.gW=R;return;}b=new Ba;d=new N;d.b
=D(16);H(d,d.a,B(476));if(!f.W)e=f.T;else{e=A4R.bI(f.bu);f.T=e;}H(d,d.a,e);e=new L;g=d.b;i=d.a;O();k=D(i);e.e=k;K(g,0,k,0,i);b.c=1;b.d=1;b.f=e;G(b);}
function AIB(a,b){a.hb=CF(512);a.gW=R;a.lk=b;}
function AGO(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.lk;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.lk;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;JX(1.0,1.0,1.0,1.0,0);d=CS(a.mv);Cq(d);if(Br(A5R,29)){Bs(a.hb,R);a.gW=R;}if(Br(A5R,30)){Bs(a.hb,R);a.gW=R;}if(Br(A5R,31)){Bs(a.hb,R);a.gW=R;}a.gW=Z(a.gW,M(1));e=0;while(e<524288)
{h=VS(a.o4,512);if(h>=0&&h<512){c=a.hb.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eJ,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eJ,i);g=a.eJ;b=f;Bl(g,b,0.0,0.0);Bk(a.eJ,i);Bl(a.eJ,b,0.0625*BF(a.hb.data[f])/BF(a.gW),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eJ,(-6.221923240859403E37));g=a.eJ;i=j;Bl(g,0.0,i,0.0);Bk(a.eJ,(-6.221923240859403E37));Bl(a.eJ,10.0,i,0.0);j=j+32|0;}Co(a.eJ);Ct(a.ll,d.ba);Cu(a.ll);Cn(a.vm,a.ll,CD(B(485),U(C,[Hd(a.o4),Cg(Cw(A4P))])),64.0,522.0,384.0,1,1);Cy(a.ll);}
function ALa(a,b,c){var d,e,f;d=a.mv;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mv,1);}
function V4(){var a=this;BG.call(a);a.rx=null;a.kU=null;a.eR=null;a.hU=null;a.gn=R;a.vK=null;a.mU=null;a.lA=null;}
function AZt(a){var b=new V4();AMq(b,a);return b;}
function AUd(a){var b,c,d,e,f,g,h,i,j,k;a.vK=a.lA.bY;b=new GB;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.fe=c;b.ff=d;b.fg=e;b.fh=f;a.rx=b;a.kU=a.lA.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.mU=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eR=b;j=a.hU.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gn=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AMq(a,b){a.hU=CF(512);a.gn=R;a.lA=b;}
function ASQ(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.lA;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.lA;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;JX(1.0,1.0,1.0,1.0,0);d=CS(a.mU);Cq(d);if(Br(A5R,29)){Bs(a.hU,R);a.gn=R;}if(Br(A5R,30)){Bs(a.hU,R);a.gn=R;}if(Br(A5R,31)){Bs(a.hU,R);a.gn=R;}a.gn=Z(a.gn,M(1));e=0;while(e<524288)
{h=AD7(a.rx,512);if(h>=0&&h<512){c=a.hU.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eR,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eR,i);g=a.eR;b=f;Bl(g,b,0.0,0.0);Bk(a.eR,i);Bl(a.eR,b,0.0625*BF(a.hU.data[f])/BF(a.gn),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eR,(-6.221923240859403E37));g=a.eR;i=j;Bl(g,0.0,i,0.0);Bk(a.eR,(-6.221923240859403E37));Bl(a.eR,10.0,i,0.0);j=j+32|0;}Co(a.eR);Ct(a.kU,d.ba);Cu(a.kU);Cn(a.vK,a.kU,CD(B(485),U(C,[GE(a.rx),Cg(Cw(A4P))])),64.0,522.0,384.0,1,
1);Cy(a.kU);}
function AUF(a,b,c){var d,e,f;d=a.mU;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mU,1);}
function Ug(){var a=this;BG.call(a);a.q3=null;a.kH=null;a.eK=null;a.h7=null;a.gE=R;a.sY=null;a.nb=null;a.kF=null;}
function AYd(a){var b=new Ug();AUb(b,a);return b;}
function AF9(a){var b,c,d,e,f,g,h,i,j,k;a.sY=a.kF.bY;b=new F3;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.dV=c;b.dU=d;b.dX=e;b.dW=f;a.q3=b;a.kH=a.kF.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.nb=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eK=b;j=a.h7.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gE=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AUb(a,b){a.h7=CF(512);a.gE=R;a.kF=b;}
function AUA(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.kF;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kF;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;JX(1.0,1.0,1.0,1.0,0);d=CS(a.nb);Cq(d);if(Br(A5R,29)){Bs(a.h7,R);a.gE=R;}if(Br(A5R,30)){Bs(a.h7,R);a.gE=R;}if(Br(A5R,31)){Bs(a.h7,R);a.gE=R;}a.gE=Z(a.gE,M(1));e=0;while(e<524288)
{h=ADw(a.q3,512);if(h>=0&&h<512){c=a.h7.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eK,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eK,i);g=a.eK;b=f;Bl(g,b,0.0,0.0);Bk(a.eK,i);Bl(a.eK,b,0.0625*BF(a.h7.data[f])/BF(a.gE),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eK,(-6.221923240859403E37));g=a.eK;i=j;Bl(g,0.0,i,0.0);Bk(a.eK,(-6.221923240859403E37));Bl(a.eK,10.0,i,0.0);j=j+32|0;}Co(a.eK);Ct(a.kH,d.ba);Cu(a.kH);Cn(a.sY,a.kH,CD(B(485),U(C,[GV(a.q3),Cg(Cw(A4P))])),64.0,522.0,384.0,1,
1);Cy(a.kH);}
function AF_(a,b,c){var d,e,f;d=a.nb;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nb,1);}
function AAn(){var a=this;BG.call(a);a.rW=null;a.lw=null;a.eX=null;a.iv=null;a.gG=R;a.uJ=null;a.oO=null;a.mi=null;}
function AW4(a){var b=new AAn();AN7(b,a);return b;}
function AIs(a){var b,c,d,e,f,g,h,i,j,k;a.uJ=a.mi.bY;b=new F7;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.d_=c;b.d$=d;b.d9=e;b.d8=f;a.rW=b;a.lw=a.mi.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.oO=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eX=b;j=a.iv.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gG=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AN7(a,b){a.iv=CF(512);a.gG=R;a.mi=b;}
function ARp(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.mi;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.mi;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;JX(1.0,1.0,1.0,1.0,0);d=CS(a.oO);Cq(d);if(Br(A5R,29)){Bs(a.iv,R);a.gG=R;}if(Br(A5R,30)){Bs(a.iv,R);a.gG=R;}if(Br(A5R,31)){Bs(a.iv,R);a.gG=R;}a.gG=Z(a.gG,M(1));e=0;while(e<524288)
{h=ABg(a.rW,512);if(h>=0&&h<512){c=a.iv.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eX,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eX,i);g=a.eX;b=f;Bl(g,b,0.0,0.0);Bk(a.eX,i);Bl(a.eX,b,0.0625*BF(a.iv.data[f])/BF(a.gG),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eX,(-6.221923240859403E37));g=a.eX;i=j;Bl(g,0.0,i,0.0);Bk(a.eX,(-6.221923240859403E37));Bl(a.eX,10.0,i,0.0);j=j+32|0;}Co(a.eX);Ct(a.lw,d.ba);Cu(a.lw);Cn(a.uJ,a.lw,CD(B(485),U(C,[Hi(a.rW),Cg(Cw(A4P))])),64.0,522.0,384.0,1,
1);Cy(a.lw);}
function AK8(a,b,c){var d,e,f;d=a.oO;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.oO,1);}
function ADn(){var a=this;BG.call(a);a.pP=null;a.lV=null;a.eN=null;a.hm=null;a.f3=R;a.ut=null;a.n$=null;a.j_=null;}
function AYK(a){var b=new ADn();AFt(b,a);return b;}
function AVP(a){var b,c,d,e,f,g,h,i,j;a.ut=a.j_.bY;b=new F_;b.d4=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d1=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d0=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d3=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d2=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));a.pP=b;a.lV=a.j_.bW;b=new Cj;c=new Ch;Cx(c);c.bX
=1.0;d=new Be;BT();c.b1=d;c.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=c;a.n$=b;b=new Ci;e=CA(Cz(0,1,0),CC(0,1,0));if(e.W){Cv(b,1536,0,1,0,e);b.b$=1;a.eN=b;f=a.hm.data;g=0;h=f.length;if(g>h){b=new Bg;b.c=1;b.d=1;G(b);}while(g<h){i=g+1|0;f[g]=R;g=i;}a.f3=R;return;}b=new Ba;c=new N;c.b=D(16);H(c,c.a,B(476));if(!e.W)d=e.T;else{d=A4R.bI(e.bu);e.T=d;}H(c,c.a,d);d=new L;f=c.b;h=c.a;O();j=D(h);d.e=j;K(f,0,j,0,h);b.c=1;b.d=1;b.f=d;G(b);}
function AFt(a,b){a.hm=CF(512);a.f3=R;a.j_=b;}
function ARi(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.j_;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.j_;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;JX(1.0,1.0,1.0,1.0,0);d=CS(a.n$);Cq(d);if(Br(A5R,29)){Bs(a.hm,R);a.f3=R;}if(Br(A5R,30)){Bs(a.hm,R);a.f3=R;}if(Br(A5R,31)){Bs(a.hm,R);a.f3=R;}a.f3=Z(a.f3,M(1));e=0;while(e<524288)
{h=AA3(a.pP,512);if(h>=0&&h<512){c=a.hm.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eN,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eN,i);g=a.eN;b=f;Bl(g,b,0.0,0.0);Bk(a.eN,i);Bl(a.eN,b,0.0625*BF(a.hm.data[f])/BF(a.f3),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eN,(-6.221923240859403E37));g=a.eN;i=j;Bl(g,0.0,i,0.0);Bk(a.eN,(-6.221923240859403E37));Bl(a.eN,10.0,i,0.0);j=j+32|0;}Co(a.eN);Ct(a.lV,d.ba);Cu(a.lV);Cn(a.ut,a.lV,CD(B(485),U(C,[GN(a.pP),Cg(Cw(A4P))])),64.0,522.0,384.0,1,
1);Cy(a.lV);}
function AMN(a,b,c){var d,e,f;d=a.n$;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.n$,1);}
function AB2(){var a=this;BG.call(a);a.pq=null;a.jV=null;a.es=null;a.hf=null;a.gj=R;a.ym=null;a.nA=null;a.kQ=null;}
function AYf(a){var b=new AB2();ATy(b,a);return b;}
function AUO(a){var b,c,d,e,f,g,h,i,j,k;a.ym=a.kQ.bY;b=new F0;c=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));d=new EM;d.ip=0;Ed(d,M(1234567890));b.fo=d;Ed(d,c);a.pq=b;a.jV=a.kQ.bW;b=new Cj;d=new Ch;Cx(d);d.bX=1.0;e=new Be;BT();d.b1=e;d.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=d;a.nA=b;b=new Ci;f=CA(Cz(0,1,0),CC(0,1,0));if(f.W){Cv(b,1536,0,1,0,f);b.b$=1;a.es=b;g=a.hf.data;h=0;i=g.length;if(h>i){b=new Bg;b.c=1;b.d=1;G(b);}while(h<i){j=h+1|0;g[h]=R;h=j;}a.gj=R;return;}b=new Ba;d=new N;d.b
=D(16);H(d,d.a,B(476));if(!f.W)e=f.T;else{e=A4R.bI(f.bu);f.T=e;}H(d,d.a,e);e=new L;g=d.b;i=d.a;O();k=D(i);e.e=k;K(g,0,k,0,i);b.c=1;b.d=1;b.f=e;G(b);}
function ATy(a,b){a.hf=CF(512);a.gj=R;a.kQ=b;}
function AMT(a,b){var c,d,e,f,g,h,i,j,k;c=A5R.bN.data;if(c[71]){d=a.kQ;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kQ;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);h=a.nA.bA;Cq(h);if(Br(A5R,29)){Bs(a.hf,R);a.gj=R;}if(Br(A5R,30)){Bs(a.hf,R);a.gj=R;}if(Br(A5R,31)){Bs(a.hf,R);a.gj=R;}a.gj=Z(a.gj,M(1));e=0;while(e<524288)
{i=V((IB(a.pq,M(512))));if(i>=0&&i<512){c=a.hf.data;c[i]=Z(c[i],M(1));}e=e+1|0;}Cp(a.es,h.ba,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.es,j);d=a.es;b=f;Bl(d,b,0.0,0.0);Bk(a.es,j);Bl(a.es,b,0.0625*BF(a.hf.data[f])/BF(a.gj),0.0);f=f+1|0;}k=8;while(k<520){Bk(a.es,(-6.221923240859403E37));d=a.es;j=k;Bl(d,0.0,j,0.0);Bk(a.es,(-6.221923240859403E37));Bl(a.es,10.0,j,0.0);k=k+32|0;}Co(a.es);Ct(a.jV,h.ba);Cu(a.jV);Cn(a.ym,a.jV,CD(B(486),U(C,[Hd(a.pq),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.jV);}
function APL(a,b,c){var d,e,f;d=a.nA;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nA,1);}
function ADR(){var a=this;BG.call(a);a.rq=null;a.l2=null;a.e0=null;a.hI=null;a.gU=R;a.uh=null;a.oL=null;a.ma=null;}
function AYb(a){var b=new ADR();AQG(b,a);return b;}
function AVm(a){var b,c,d,e,f,g,h,i,j,k;a.uh=a.ma.bY;b=new GB;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.fe=c;b.ff=d;b.fg=e;b.fh=f;a.rq=b;a.l2=a.ma.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.oL=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.e0=b;j=a.hI.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gU=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AQG(a,b){a.hI=CF(512);a.gU=R;a.ma=b;}
function ATf(a,b){var c,d,e,f,g,h,i,j,k;c=A5R.bN.data;if(c[71]){d=a.ma;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.ma;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);h=a.oL.bA;Cq(h);if(Br(A5R,29)){Bs(a.hI,R);a.gU=R;}if(Br(A5R,30)){Bs(a.hI,R);a.gU=R;}if(Br(A5R,31)){Bs(a.hI,R);a.gU=R;}a.gU=Z(a.gU,M(1));e=0;while(e<524288)
{i=V((IB(a.rq,M(512))));if(i>=0&&i<512){c=a.hI.data;c[i]=Z(c[i],M(1));}e=e+1|0;}Cp(a.e0,h.ba,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.e0,j);d=a.e0;b=f;Bl(d,b,0.0,0.0);Bk(a.e0,j);Bl(a.e0,b,0.0625*BF(a.hI.data[f])/BF(a.gU),0.0);f=f+1|0;}k=8;while(k<520){Bk(a.e0,(-6.221923240859403E37));d=a.e0;j=k;Bl(d,0.0,j,0.0);Bk(a.e0,(-6.221923240859403E37));Bl(a.e0,10.0,j,0.0);k=k+32|0;}Co(a.e0);Ct(a.l2,h.ba);Cu(a.l2);Cn(a.uh,a.l2,CD(B(486),U(C,[GE(a.rq),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.l2);}
function AWa(a,b,c){var d,e,f;d=a.oL;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.oL,1);}
function Wr(){var a=this;BG.call(a);a.qf=null;a.kb=null;a.ed=null;a.hW=null;a.gL=R;a.t$=null;a.oG=null;a.l5=null;}
function AWv(a){var b=new Wr();AR7(b,a);return b;}
function AVq(a){var b,c,d,e,f,g,h,i,j,k;a.t$=a.l5.bY;b=new F3;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.dV=c;b.dU=d;b.dX=e;b.dW=f;a.qf=b;a.kb=a.l5.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.oG=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.ed=b;j=a.hW.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gL=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AR7(a,b){a.hW=CF(512);a.gL=R;a.l5=b;}
function AJ8(a,b){var c,d,e,f,g,h,i,j,k;c=A5R.bN.data;if(c[71]){d=a.l5;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.l5;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);h=a.oG.bA;Cq(h);if(Br(A5R,29)){Bs(a.hW,R);a.gL=R;}if(Br(A5R,30)){Bs(a.hW,R);a.gL=R;}if(Br(A5R,31)){Bs(a.hW,R);a.gL=R;}a.gL=Z(a.gL,M(1));e=0;while(e<524288)
{i=V((IB(a.qf,M(512))));if(i>=0&&i<512){c=a.hW.data;c[i]=Z(c[i],M(1));}e=e+1|0;}Cp(a.ed,h.ba,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.ed,j);d=a.ed;b=f;Bl(d,b,0.0,0.0);Bk(a.ed,j);Bl(a.ed,b,0.0625*BF(a.hW.data[f])/BF(a.gL),0.0);f=f+1|0;}k=8;while(k<520){Bk(a.ed,(-6.221923240859403E37));d=a.ed;j=k;Bl(d,0.0,j,0.0);Bk(a.ed,(-6.221923240859403E37));Bl(a.ed,10.0,j,0.0);k=k+32|0;}Co(a.ed);Ct(a.kb,h.ba);Cu(a.kb);Cn(a.t$,a.kb,CD(B(486),U(C,[GV(a.qf),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.kb);}
function APV(a,b,c){var d,e,f;d=a.oG;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.oG,1);}
function UW(){var a=this;BG.call(a);a.p6=null;a.j0=null;a.eE=null;a.ie=null;a.gQ=R;a.yl=null;a.mL=null;a.lu=null;}
function AW5(a){var b=new UW();AFu(b,a);return b;}
function AGJ(a){var b,c,d,e,f,g,h,i,j,k;a.yl=a.lu.bY;b=new F7;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.d_=c;b.d$=d;b.d9=e;b.d8=f;a.p6=b;a.j0=a.lu.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.mL=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eE=b;j=a.ie.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gQ=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AFu(a,b){a.ie=CF(512);a.gQ=R;a.lu=b;}
function AOs(a,b){var c,d,e,f,g,h,i,j,k;c=A5R.bN.data;if(c[71]){d=a.lu;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.lu;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);h=a.mL.bA;Cq(h);if(Br(A5R,29)){Bs(a.ie,R);a.gQ=R;}if(Br(A5R,30)){Bs(a.ie,R);a.gQ=R;}if(Br(A5R,31)){Bs(a.ie,R);a.gQ=R;}a.gQ=Z(a.gQ,M(1));e=0;while(e<524288)
{i=V((IB(a.p6,M(512))));if(i>=0&&i<512){c=a.ie.data;c[i]=Z(c[i],M(1));}e=e+1|0;}Cp(a.eE,h.ba,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eE,j);d=a.eE;b=f;Bl(d,b,0.0,0.0);Bk(a.eE,j);Bl(a.eE,b,0.0625*BF(a.ie.data[f])/BF(a.gQ),0.0);f=f+1|0;}k=8;while(k<520){Bk(a.eE,(-6.221923240859403E37));d=a.eE;j=k;Bl(d,0.0,j,0.0);Bk(a.eE,(-6.221923240859403E37));Bl(a.eE,10.0,j,0.0);k=k+32|0;}Co(a.eE);Ct(a.j0,h.ba);Cu(a.j0);Cn(a.yl,a.j0,CD(B(486),U(C,[Hi(a.p6),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.j0);}
function AJZ(a,b,c){var d,e,f;d=a.mL;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mL,1);}
function Ve(){var a=this;BG.call(a);a.rr=null;a.kK=null;a.eA=null;a.h_=null;a.gX=R;a.u2=null;a.nH=null;a.km=null;}
function AWG(a){var b=new Ve();AUZ(b,a);return b;}
function AF6(a){var b,c,d,e,f,g,h,i,j;a.u2=a.km.bY;b=new F_;b.d4=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d1=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d0=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d3=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d2=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));a.rr=b;a.kK=a.km.bW;b=new Cj;c=new Ch;Cx(c);c.bX
=1.0;d=new Be;BT();c.b1=d;c.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=c;a.nH=b;b=new Ci;e=CA(Cz(0,1,0),CC(0,1,0));if(e.W){Cv(b,1536,0,1,0,e);b.b$=1;a.eA=b;f=a.h_.data;g=0;h=f.length;if(g>h){b=new Bg;b.c=1;b.d=1;G(b);}while(g<h){i=g+1|0;f[g]=R;g=i;}a.gX=R;return;}b=new Ba;c=new N;c.b=D(16);H(c,c.a,B(476));if(!e.W)d=e.T;else{d=A4R.bI(e.bu);e.T=d;}H(c,c.a,d);d=new L;f=c.b;h=c.a;O();j=D(h);d.e=j;K(f,0,j,0,h);b.c=1;b.d=1;b.f=d;G(b);}
function AUZ(a,b){a.h_=CF(512);a.gX=R;a.km=b;}
function AO7(a,b){var c,d,e,f,g,h,i,j,k;c=A5R.bN.data;if(c[71]){d=a.km;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.km;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);h=a.nH.bA;Cq(h);if(Br(A5R,29)){Bs(a.h_,R);a.gX=R;}if(Br(A5R,30)){Bs(a.h_,R);a.gX=R;}if(Br(A5R,31)){Bs(a.h_,R);a.gX=R;}a.gX=Z(a.gX,M(1));e=0;while(e<524288)
{i=V((IB(a.rr,M(512))));if(i>=0&&i<512){c=a.h_.data;c[i]=Z(c[i],M(1));}e=e+1|0;}Cp(a.eA,h.ba,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eA,j);d=a.eA;b=f;Bl(d,b,0.0,0.0);Bk(a.eA,j);Bl(a.eA,b,0.0625*BF(a.h_.data[f])/BF(a.gX),0.0);f=f+1|0;}k=8;while(k<520){Bk(a.eA,(-6.221923240859403E37));d=a.eA;j=k;Bl(d,0.0,j,0.0);Bk(a.eA,(-6.221923240859403E37));Bl(a.eA,10.0,j,0.0);k=k+32|0;}Co(a.eA);Ct(a.kK,h.ba);Cu(a.kK);Cn(a.u2,a.kK,CD(B(486),U(C,[GN(a.rr),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.kK);}
function AGn(a,b,c){var d,e,f;d=a.nH;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.nH,1);}
function V3(){var a=this;BG.call(a);a.pJ=null;a.me=null;a.eB=null;a.ik=null;a.gF=R;a.ua=null;a.mD=null;a.k$=null;}
function AXA(a){var b=new V3();AMe(b,a);return b;}
function AU9(a){var b,c,d,e,f,g,h,i,j,k;a.ua=a.k$.bY;b=new F0;c=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));d=new EM;d.ip=0;Ed(d,M(1234567890));b.fo=d;Ed(d,c);a.pJ=b;a.me=a.k$.bW;b=new Cj;d=new Ch;Cx(d);d.bX=1.0;e=new Be;BT();d.b1=e;d.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=d;a.mD=b;b=new Ci;f=CA(Cz(0,1,0),CC(0,1,0));if(f.W){Cv(b,1536,0,1,0,f);b.b$=1;a.eB=b;g=a.ik.data;h=0;i=g.length;if(h>i){b=new Bg;b.c=1;b.d=1;G(b);}while(h<i){j=h+1|0;g[h]=R;h=j;}a.gF=R;return;}b=new Ba;d=new N;d.b
=D(16);H(d,d.a,B(476));if(!f.W)e=f.T;else{e=A4R.bI(f.bu);f.T=e;}H(d,d.a,e);e=new L;g=d.b;i=d.a;O();k=D(i);e.e=k;K(g,0,k,0,i);b.c=1;b.d=1;b.f=e;G(b);}
function AMe(a,b){a.ik=CF(512);a.gF=R;a.k$=b;}
function AL5(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.k$;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.k$;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.mD);Cq(d);if(Br(A5R,29)){Bs(a.ik,R);a.gF=R;}if(Br(A5R,30)){Bs(a.ik,R);a.gF=R;}if(Br(A5R,31)){Bs(a.ik,R);a.gF=R;}a.gF=Z(a.gF,M(1));e=0;while(e<524288)
{h=V(Bc(AAG(a.pJ),55));if(h>=0&&h<512){c=a.ik.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eB,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eB,i);g=a.eB;b=f;Bl(g,b,0.0,0.0);Bk(a.eB,i);Bl(a.eB,b,0.0625*BF(a.ik.data[f])/BF(a.gF),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eB,(-6.221923240859403E37));g=a.eB;i=j;Bl(g,0.0,i,0.0);Bk(a.eB,(-6.221923240859403E37));Bl(a.eB,10.0,i,0.0);j=j+32|0;}Co(a.eB);Ct(a.me,d.ba);Cu(a.me);Cn(a.ua,a.me,CD(B(487),U(C,[Hd(a.pJ),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.me);}
function AOZ(a,b,c){var d,e,f;d=a.mD;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.mD,1);}
function Wk(){var a=this;BG.call(a);a.ry=null;a.li=null;a.ee=null;a.ia=null;a.gu=R;a.tb=null;a.oU=null;a.lX=null;}
function AYS(a){var b=new Wk();AHz(b,a);return b;}
function AO8(a){var b,c,d,e,f,g,h,i,j,k;a.tb=a.lX.bY;b=new GB;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.fe=c;b.ff=d;b.fg=e;b.fh=f;a.ry=b;a.li=a.lX.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.oU=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.ee=b;j=a.ia.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gu=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AHz(a,b){a.ia=CF(512);a.gu=R;a.lX=b;}
function ASg(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.lX;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.lX;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.oU);Cq(d);if(Br(A5R,29)){Bs(a.ia,R);a.gu=R;}if(Br(A5R,30)){Bs(a.ia,R);a.gu=R;}if(Br(A5R,31)){Bs(a.ia,R);a.gu=R;}a.gu=Z(a.gu,M(1));e=0;while(e<524288)
{h=V(Bc(UL(a.ry),55));if(h>=0&&h<512){c=a.ia.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.ee,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.ee,i);g=a.ee;b=f;Bl(g,b,0.0,0.0);Bk(a.ee,i);Bl(a.ee,b,0.0625*BF(a.ia.data[f])/BF(a.gu),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.ee,(-6.221923240859403E37));g=a.ee;i=j;Bl(g,0.0,i,0.0);Bk(a.ee,(-6.221923240859403E37));Bl(a.ee,10.0,i,0.0);j=j+32|0;}Co(a.ee);Ct(a.li,d.ba);Cu(a.li);Cn(a.tb,a.li,CD(B(487),U(C,[GE(a.ry),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.li);}
function AFm(a,b,c){var d,e,f;d=a.oU;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.oU,1);}
function ADd(){var a=this;BG.call(a);a.p0=null;a.kg=null;a.eY=null;a.h4=null;a.gZ=R;a.sU=null;a.om=null;a.lW=null;}
function AXq(a){var b=new ADd();AMY(b,a);return b;}
function ASz(a){var b,c,d,e,f,g,h,i,j,k;a.sU=a.lW.bY;b=new F3;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.dV=c;b.dU=d;b.dX=e;b.dW=f;a.p0=b;a.kg=a.lW.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.om=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eY=b;j=a.h4.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gZ=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AMY(a,b){a.h4=CF(512);a.gZ=R;a.lW=b;}
function AH6(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.lW;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.lW;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.om);Cq(d);if(Br(A5R,29)){Bs(a.h4,R);a.gZ=R;}if(Br(A5R,30)){Bs(a.h4,R);a.gZ=R;}if(Br(A5R,31)){Bs(a.h4,R);a.gZ=R;}a.gZ=Z(a.gZ,M(1));e=0;while(e<524288)
{h=V(Bc(ZA(a.p0),55));if(h>=0&&h<512){c=a.h4.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eY,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eY,i);g=a.eY;b=f;Bl(g,b,0.0,0.0);Bk(a.eY,i);Bl(a.eY,b,0.0625*BF(a.h4.data[f])/BF(a.gZ),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eY,(-6.221923240859403E37));g=a.eY;i=j;Bl(g,0.0,i,0.0);Bk(a.eY,(-6.221923240859403E37));Bl(a.eY,10.0,i,0.0);j=j+32|0;}Co(a.eY);Ct(a.kg,d.ba);Cu(a.kg);Cn(a.sU,a.kg,CD(B(487),U(C,[GV(a.p0),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.kg);}
function AQJ(a,b,c){var d,e,f;d=a.om;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.om,1);}
function ACS(){var a=this;BG.call(a);a.qQ=null;a.j$=null;a.eo=null;a.iu=null;a.gV=R;a.tN=null;a.ok=null;a.kn=null;}
function AZy(a){var b=new ACS();AUS(b,a);return b;}
function AP8(a){var b,c,d,e,f,g,h,i,j,k;a.tN=a.kn.bY;b=new F7;c=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));d=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));e=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));f=V(Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19)));b.d_=c;b.d$=d;b.d9=e;b.d8=f;a.qQ=b;a.j$=a.kn.bW;b=new Cj;g=new Ch;Cx(g);g.bX=1.0;h=new Be;BT();g.b1=h;g.bT=0.0;b.b7=new Be;b.bd
=1.0;b.bA=g;a.ok=b;b=new Ci;i=CA(Cz(0,1,0),CC(0,1,0));if(i.W){Cv(b,1536,0,1,0,i);b.b$=1;a.eo=b;j=a.iu.data;c=0;d=j.length;if(c>d){b=new Bg;b.c=1;b.d=1;G(b);}while(c<d){e=c+1|0;j[c]=R;c=e;}a.gV=R;return;}b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(476));if(!i.W)h=i.T;else{h=A4R.bI(i.bu);i.T=h;}H(g,g.a,h);h=new L;j=g.b;d=g.a;O();k=D(d);h.e=k;K(j,0,k,0,d);b.c=1;b.d=1;b.f=h;G(b);}
function AUS(a,b){a.iu=CF(512);a.gV=R;a.kn=b;}
function AVx(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.kn;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.kn;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.ok);Cq(d);if(Br(A5R,29)){Bs(a.iu,R);a.gV=R;}if(Br(A5R,30)){Bs(a.iu,R);a.gV=R;}if(Br(A5R,31)){Bs(a.iu,R);a.gV=R;}a.gV=Z(a.gV,M(1));e=0;while(e<524288)
{h=V(Bc(X$(a.qQ),55));if(h>=0&&h<512){c=a.iu.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eo,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eo,i);g=a.eo;b=f;Bl(g,b,0.0,0.0);Bk(a.eo,i);Bl(a.eo,b,0.0625*BF(a.iu.data[f])/BF(a.gV),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eo,(-6.221923240859403E37));g=a.eo;i=j;Bl(g,0.0,i,0.0);Bk(a.eo,(-6.221923240859403E37));Bl(a.eo,10.0,i,0.0);j=j+32|0;}Co(a.eo);Ct(a.j$,d.ba);Cu(a.j$);Cn(a.tN,a.j$,CD(B(487),U(C,[Hi(a.qQ),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.j$);}
function AMo(a,b,c){var d,e,f;d=a.ok;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.ok,1);}
function Ws(){var a=this;BG.call(a);a.r1=null;a.lS=null;a.eS=null;a.hk=null;a.gr=R;a.tx=null;a.ou=null;a.lQ=null;}
function AXa(a){var b=new Ws();AU7(b,a);return b;}
function ASC(a){var b,c,d,e,f,g,h,i,j;a.tx=a.lQ.bY;b=new F_;b.d4=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d1=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d0=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d3=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));b.d2=Bm(AZ2((X()-0.5)*4.503599627370496E15),AZ2((X()-0.5)*1.8446744073709552E19));a.r1=b;a.lS=a.lQ.bW;b=new Cj;c=new Ch;Cx(c);c.bX
=1.0;d=new Be;BT();c.b1=d;c.bT=0.0;b.b7=new Be;b.bd=1.0;b.bA=c;a.ou=b;b=new Ci;e=CA(Cz(0,1,0),CC(0,1,0));if(e.W){Cv(b,1536,0,1,0,e);b.b$=1;a.eS=b;f=a.hk.data;g=0;h=f.length;if(g>h){b=new Bg;b.c=1;b.d=1;G(b);}while(g<h){i=g+1|0;f[g]=R;g=i;}a.gr=R;return;}b=new Ba;c=new N;c.b=D(16);H(c,c.a,B(476));if(!e.W)d=e.T;else{d=A4R.bI(e.bu);e.T=d;}H(c,c.a,d);d=new L;f=c.b;h=c.a;O();j=D(h);d.e=j;K(f,0,j,0,h);b.c=1;b.d=1;b.f=d;G(b);}
function AU7(a,b){a.hk=CF(512);a.gr=R;a.lQ=b;}
function AH7(a,b){var c,d,e,f,g,h,i,j;c=A5R.bN.data;if(c[71]){d=a.lQ;e=d.s;c=d.bc.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(A4P.I.width,A4P.I.height);}return;}if(c[72]){d=a.lQ;e=d.s+1|0;c=d.bc.data;e=e%c.length|0;d.s=e;g=c[e];d.q=g;if(g!==null){g.E();d.q.D(Ck(A4P),Cl(A4P));}return;}if(c[111])return;CW(1.0,1.0,1.0,1.0);d=CS(a.ou);Cq(d);if(Br(A5R,29)){Bs(a.hk,R);a.gr=R;}if(Br(A5R,30)){Bs(a.hk,R);a.gr=R;}if(Br(A5R,31)){Bs(a.hk,R);a.gr=R;}a.gr=Z(a.gr,M(1));e=0;while(e<524288)
{h=V(Bc(Wz(a.r1),55));if(h>=0&&h<512){c=a.hk.data;c[h]=Z(c[h],M(1));}e=e+1|0;}Cp(a.eS,d.ba,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bk(a.eS,i);g=a.eS;b=f;Bl(g,b,0.0,0.0);Bk(a.eS,i);Bl(a.eS,b,0.0625*BF(a.hk.data[f])/BF(a.gr),0.0);f=f+1|0;}j=8;while(j<520){Bk(a.eS,(-6.221923240859403E37));g=a.eS;i=j;Bl(g,0.0,i,0.0);Bk(a.eS,(-6.221923240859403E37));Bl(a.eS,10.0,i,0.0);j=j+32|0;}Co(a.eS);Ct(a.lS,d.ba);Cu(a.lS);Cn(a.tx,a.lS,CD(B(487),U(C,[GN(a.r1),Cg(Cw(A4P))])),64.0,522.0,384.0,
1,1);Cy(a.lS);}
function AT8(a,b,c){var d,e,f;d=a.ou;d.bU=0;d.bV=0;d.bZ=b;d.b3=c;e=b;f=d.bd;e=e*f;f=c*f;d.b4=e;d.b5=f;BH(d,1);BH(a.ou,1);}
var MG=I(BU);
var Ba=I(BU);
function AOw(a,b){var c=new Ba();AFS(c,a,b);return c;}
function F1(a){var b=new Ba();V2(b,a);return b;}
function AFS(a,b,c){a.c=1;a.d=1;a.f=b;a.cY=c;}
function V2(a,b){a.c=1;a.d=1;a.f=b;}
var VF=I();
function OO(b,c){var d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function Qq(){By.call(this);this.B7=null;}
function AUc(a,b){return Dg(b)!=2?0:1;}
function MY(){By.call(this);this.Cl=null;}
function AGS(a,b){return Dg(b)!=1?0:1;}
function PV(){By.call(this);this.A5=null;}
function AGj(a,b){a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(Dg(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;}
function PU(){By.call(this);this.Az=null;}
function AKx(a,b){return 0;}
function Sk(){By.call(this);this.D$=null;}
function AMs(a,b){return !Dg(b)?0:1;}
function Ob(){By.call(this);this.CS=null;}
function AUg(a,b){return Dg(b)!=9?0:1;}
function NG(){By.call(this);this.ET=null;}
function AQh(a,b){return HU(b);}
function Pl(){By.call(this);this.B9=null;}
function ARW(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MU(){By.call(this);this.yN=null;}
function AVK(a,b){a:{b:{switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HU(b);}return b;}
function MX(){By.call(this);this.CZ=null;}
function AJv(a,b){a:{b:{switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HU(b);}return b;}
function NB(){By.call(this);this.D7=null;}
function AUy(a,b){a:{switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ow(){By.call(this);this.Eq=null;}
function AOG(a,b){a:{b:{switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;}
function OB(){By.call(this);this.Bk=null;}
function ARn(a,b){a:{switch(Dg(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;}
function QQ(){By.call(this);this.Di=null;}
function AT0(a,b){return Dg(b)!=3?0:1;}
function P_(){By.call(this);this.yU=null;}
function AVf(a,b){a:{b:{switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HU(b);}return b;}
function M6(){By.call(this);this.Fb=null;}
function AJe(a,b){a:{b:{switch(Dg(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HU(b);}return b;}
function J_(){By.call(this);this.n2=0;}
function AQk(a,b){return a.be^(a.n2!=Dg(b&65535)?0:1);}
var PP=I(J_);
function ASS(a,b){return a.be^(!(a.n2>>Dg(b&65535)&1)?0:1);}
function Fq(){C.call(this);this.fB=null;}
function AGy(a){YG(a.fB);}
var Wh=I();
var SP=I();
var A5_=null;function AZk(){AZk=Bi(SP);ASH();}
function ASH(){var b,c;FB();b=Y((A6Y.cH()).data.length);c=b.data;A5_=b;c[A6r.n]=1;c[A6o.n]=2;c[A6q.n]=3;c[A6p.n]=4;c[A6N.n]=5;}
var Mm=I(BU);
var Jl=I(HF);
var A0H=null;function AKk(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AWk(){var b;b=new Jl;b.nY=BS(1);A0H=b;}
var OE=I(Ex);
var A0I=null;function AIy(){A0I=J($rt_doublecls());}
var G8=I();
var A6$=null;var A6_=null;var A5G=null;var A5F=null;var A5E=null;function XY(){A6$=Ew([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A6_=U3([M(1),M(10),M(100),M(1000),M(10000),M(100000),M(1000000),M(10000000),M(100000000),M(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);A5G=U3([M(1),M(10),M(100),M(10000),M(100000000),F(1874919424, 2328306)]);A5F
=new Q4;A5E=new RJ;}
var JK=I();
var A7a=R;var A7b=null;var A7c=null;function XO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):F(0, 2146959360);c.tl=Dl(Bp(d,F(0, 2147483648)),R)?0:1;e=Bp(d,F(4294967295, 1048575));f=V(DD(d,52))&2047;if(Dl(e,R)&&!f){c.rd=R;c.py=0;return;}if(f)e=FF(e,F(0, 1048576));else{e=CL(e,1);while(Dl(Bp(e,F(0, 1048576)),R)){e=CL(e,1);f=f+(-1)|0;}}g=A7c;h=ARG(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=A7c.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Ji(e,A7b.data[i],j);if(F$(k,A7a)){while
(EB(k,A7a)<=0){h=h+(-1)|0;k=Z(Bb(k,M(10)),M(9));}g=A7c.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=Ji(e,A7b.data[i],j);}e=CL(e,1);d=Z(e,M(1));g=A7b.data;i=h+1|0;l=g[i];f=j-1|0;m=Ji(d,l,f);l=Ji(Cf(e,M(1)),A7b.data[i],f);n=M(1);while(true){o=Bb(n,M(10));if(EB(En(k,o),En(l,o))<=0)break;n=o;}p=M(1);while(true){q=Bb(p,M(10));if(EB(En(k,q),En(m,q))>=0)break;p=q;}i=EB(n,p);e=i>0?Bb(En(k,n),n):i<0?Z(Bb(En(k,p),p),p):Bb(En(Z(k,C5(p,M(2))),p),p);if(EB(e,F(2808348672, 232830643))>=0)while(true){h=h+1|0;e=En(e,M(10));if(EB(e,F(2808348672, 232830643))
<0)break;}else if(EB(e,F(1569325056, 23283064))<0){h=h+(-1)|0;e=Bb(e,M(10));}c.rd=e;c.py=h-330|0;}
function Ji(b,c,d){var e,f,g,h,i,j,k,l;e=Bp(b,M(65535));f=Bp(Bc(b,16),M(65535));g=Bp(Bc(b,32),M(65535));h=Bp(Bc(b,48),M(65535));i=Bp(c,M(65535));j=Bp(Bc(c,16),M(65535));k=Bp(Bc(c,32),M(65535));l=Bp(Bc(c,48),M(65535));return Z(Z(Z(CL(Bb(l,h),32+d|0),CL(Z(Bb(l,g),Bb(k,h)),16+d|0)),CL(Z(Z(Bb(l,f),Bb(k,g)),Bb(j,h)),d)),Bc(Z(Z(Z(Bb(k,e),Bb(j,f)),Bb(i,g)),CL(Z(Z(Z(Bb(l,e),Bb(k,f)),Bb(j,g)),Bb(i,h)),16)),32-d|0));}
function W7(){A7a=En(M(-1),M(10));A7b=U3([F(3251292512, 2194092222),F(1766094183, 3510547556),F(553881887, 2808438045),F(443105509, 2246750436),F(3285949193, 3594800697),F(910772436, 2875840558),F(2446604867, 2300672446),F(2196580869, 3681075914),F(2616258154, 2944860731),F(1234013064, 2355888585),F(1974420903, 3769421736),F(720543263, 3015537389),F(1435428070, 2412429911),F(578697993, 3859887858),F(2180945313, 3087910286),F(885762791, 2470328229),F(3135207384, 3952525166),F(1649172448, 3162020133),F(3037324877, 2529616106),
F(3141732885, 4047385770),F(2513386308, 3237908616),F(1151715587, 2590326893),F(983751480, 4144523029),F(1645994643, 3315618423),F(3034782633, 2652494738),F(3996658754, 4243991581),F(2338333544, 3395193265),F(1870666835, 2716154612),F(4073513845, 2172923689),F(3940641775, 3476677903),F(575533043, 2781342323),F(2178413352, 2225073858),F(2626467905, 3560118173),F(3819161242, 2848094538),F(478348616, 2278475631),F(3342338164, 3645561009),F(3532863990, 2916448807),F(1108304273, 2333159046),F(55299919, 3733054474),
F(903233395, 2986443579),F(1581580175, 2389154863),F(1671534821, 3822647781),F(478234397, 3058118225),F(382587518, 2446494580),F(612140029, 3914391328),F(2207698941, 3131513062),F(48172235, 2505210450),F(77075576, 4008336720),F(61660460, 3206669376),F(3485302205, 2565335500),F(1281516232, 4104536801),F(166219527, 3283629441),F(3568949458, 2626903552),F(2274345296, 4203045684),F(2678469696, 3362436547),F(424788838, 2689949238),F(2057817989, 2151959390),F(3292508783, 3443135024),F(3493000485, 2754508019),F(3653393847, 2203606415),
F(1550462860, 3525770265),F(1240370288, 2820616212),F(3569276608, 2256492969),F(3133862195, 3610388751),F(1648096297, 2888311001),F(459483578, 2310648801),F(3312154103, 3697038081),F(1790729823, 2957630465),F(1432583858, 2366104372),F(3151127633, 3785766995),F(2520902106, 3028613596),F(1157728226, 2422890877),F(2711358621, 3876625403),F(3887073815, 3101300322),F(1391672133, 2481040258),F(1367681954, 3969664413),F(2812132482, 3175731530),F(2249705985, 2540585224),F(1022549199, 4064936359),F(1677032818, 3251949087),
F(3918606632, 2601559269),F(3692790234, 4162494831),F(2095238728, 3329995865),F(1676190982, 2663996692),F(3540899031, 4262394707),F(1114732307, 3409915766),F(32792386, 2727932613),F(1744220827, 2182346090),F(2790753324, 3491753744),F(3091596118, 2793402995),F(2473276894, 2234722396),F(2239256113, 3575555834),F(2650398349, 2860444667),F(402331761, 2288355734),F(2361717736, 3661369174),F(2748367648, 2929095339),F(3057687578, 2343276271),F(3174313206, 3749242034),F(3398444024, 2999393627),F(1000768301, 2399514902),
F(2460222741, 3839223843),F(3686165111, 3071379074),F(3807925548, 2457103259),F(3515700499, 3931365215),F(2812560399, 3145092172),F(532061401, 2516073738),F(4287272078, 4025717980),F(3429817663, 3220574384),F(3602847589, 2576459507),F(2328582306, 4122335212),F(144878926, 3297868170),F(115903141, 2638294536),F(2762425404, 4221271257),F(491953404, 3377017006),F(3829536560, 2701613604),F(3922622707, 2161290883),F(1122235577, 3458065414),F(1756781920, 2766452331),F(546432077, 2213161865),F(874291324, 3541058984),
F(1558426518, 2832847187),F(3823721592, 2266277749),F(3540974170, 3626044399),F(3691772795, 2900835519),F(3812411695, 2320668415),F(1804891416, 3713069465),F(1443913133, 2970455572),F(3732110884, 2376364457),F(2535403578, 3802183132),F(310335944, 3041746506),F(3684242592, 2433397204),F(3317807769, 3893435527),F(936259297, 3114748422),F(3325987815, 2491798737),F(1885606668, 3986877980),F(1508485334, 3189502384),F(2065781726, 2551601907),F(4164244222, 4082563051),F(2472401918, 3266050441),F(1118928075, 2612840353),
F(931291461, 4180544565),F(745033169, 3344435652),F(3173006913, 2675548521),F(3358824142, 4280877634),F(3546052773, 3424702107),F(1118855300, 2739761686),F(36090780, 2191809349),F(1775732167, 3506894958),F(3138572652, 2805515966),F(1651864662, 2244412773),F(1783990001, 3591060437),F(4004172378, 2872848349),F(4062331362, 2298278679),F(3922749802, 3677245887),F(1420212923, 2941796710),F(1136170338, 2353437368),F(958879082, 3765499789),F(1626096725, 3012399831),F(441883920, 2409919865),F(707014273, 3855871784),
F(1424604878, 3084697427),F(3716664280, 2467757941),F(4228675929, 3948412706),F(2523947284, 3158730165),F(2019157827, 2526984132),F(4089645983, 4043174611),F(2412723327, 3234539689),F(2789172121, 2587631751),F(2744688475, 4140210802),F(477763862, 3312168642),F(2959191467, 2649734913),F(3875712888, 4239575861),F(2241576851, 3391660689),F(2652254940, 2713328551),F(1262810493, 2170662841),F(302509870, 3473060546),F(3677981733, 2778448436),F(2083391927, 2222758749),F(756446706, 3556413999),F(1464150824, 2845131199),
F(2030314118, 2276104959),F(671522212, 3641767935),F(537217769, 2913414348),F(2147761134, 2330731478),F(2577424355, 3729170365),F(2061939484, 2983336292),F(4226531965, 2386669033),F(1608490388, 3818670454),F(2145785770, 3054936363),F(3434615534, 2443949090),F(1200417559, 3910318545),F(960334047, 3128254836),F(4204241074, 2502603868),F(1572824964, 4004166190),F(1258259971, 3203332952),F(3583588354, 2562666361),F(4015754449, 4100266178),F(635623181, 3280212943),F(2226485463, 2624170354),F(985396364, 4198672567),
F(3365297469, 3358938053),F(115257597, 2687150443),F(1810192996, 2149720354),F(319328417, 3439552567),F(2832443111, 2751642053),F(3983941407, 2201313642),F(2938332415, 3522101828),F(4068652850, 2817681462),F(1536935362, 2254145170),F(2459096579, 3606632272),F(249290345, 2885305818),F(1917419194, 2308244654),F(490890333, 3693191447),F(2969692644, 2954553157),F(657767197, 2363642526),F(3629407892, 3781828041),F(2044532855, 3025462433),F(3353613202, 2420369946),F(3647794205, 3872591914),F(3777228823, 3098073531),
F(2162789599, 2478458825),F(3460463359, 3965534120),F(2768370687, 3172427296),F(1355703090, 2537941837),F(3028118404, 4060706939),F(3281488183, 3248565551),F(1766197087, 2598852441),F(1107928421, 4158163906),F(27349277, 3326531125),F(21879422, 2661224900),F(35007075, 4257959840),F(28005660, 3406367872),F(2599384905, 2725094297),F(361521006, 2180075438),F(4014407446, 3488120700),F(3211525957, 2790496560),F(2569220766, 2232397248),F(3251759766, 3571835597),F(883420894, 2857468478),F(2424723634, 2285974782),F(443583977, 3657559652),
F(2931847559, 2926047721),F(1486484588, 2340838177),F(3237368801, 3745341083),F(12914663, 2996272867),F(2587312108, 2397018293),F(3280705914, 3835229269),F(3483558190, 3068183415),F(2786846552, 2454546732),F(1022980646, 3927274772),F(3395364895, 3141819817),F(998304997, 2513455854),F(3315274914, 4021529366),F(1793226472, 3217223493),F(3152568096, 2573778794),F(2467128576, 4118046071),F(1114709402, 3294436857),F(3468747899, 2635549485),F(1255029343, 4216879177),F(3581003852, 3373503341),F(2005809622, 2698802673),
F(3322634616, 2159042138),F(162254630, 3454467422),F(2706784082, 2763573937),F(447440347, 2210859150),F(715904555, 3537374640),F(572723644, 2829899712),F(3035159293, 2263919769),F(2279274491, 3622271631),F(964426134, 2897817305),F(771540907, 2318253844),F(2952452370, 3709206150),F(2361961896, 2967364920),F(1889569516, 2373891936),F(1305324308, 3798227098),F(2762246365, 3038581678),F(3927784010, 2430865342),F(2848480580, 3889384548),F(3996771382, 3111507638),F(620436728, 2489206111),F(3569679143, 3982729777),
F(1137756396, 3186183822),F(3487185494, 2548947057),F(2143522954, 4078315292),F(4291798741, 3262652233),F(856458615, 2610121787),F(2229327243, 4176194859),F(2642455254, 3340955887),F(395977285, 2672764710),F(633563656, 4276423536),F(3942824761, 3421138828),F(577279431, 2736911063),F(2179810463, 2189528850),F(3487696741, 3503246160),F(2790157393, 2802596928),F(3950112833, 2242077542),F(2884206696, 3587324068),F(4025352275, 2869859254),F(4079275279, 2295887403),F(1372879692, 3673419846),F(239310294, 2938735877),
F(2768428613, 2350988701),F(2711498862, 3761581922),F(451212171, 3009265538),F(2078956655, 2407412430),F(3326330649, 3851859888),F(84084141, 3081487911),F(3503241150, 2465190328),F(451225085, 3944304526),F(3796953905, 3155443620),F(3037563124, 2524354896),F(3142114080, 4038967834),F(3372684723, 3231174267),F(980160860, 2584939414),F(3286244294, 4135903062),F(911008517, 3308722450),F(728806813, 2646977960),F(1166090902, 4235164736),F(73879262, 3388131789),F(918096869, 2710505431),F(4170451332, 2168404344),F(4095741754, 3469446951),
F(2417599944, 2775557561),F(1075086496, 2220446049),F(3438125312, 3552713678),F(173519872, 2842170943),F(1856802816, 2273736754),F(393904128, 3637978807),F(2892103680, 2910383045),F(2313682944, 2328306436),F(1983905792, 3725290298),F(3305111552, 2980232238),F(67108864, 2384185791),F(2684354560, 3814697265),F(2147483648, 3051757812),F(0, 2441406250),F(0, 3906250000),F(0, 3125000000),F(0, 2500000000),F(0, 4000000000),F(0, 3200000000),F(0, 2560000000),F(0, 4096000000),F(0, 3276800000),F(0, 2621440000),F(0, 4194304000),
F(0, 3355443200),F(0, 2684354560),F(0, 2147483648),F(3435973836, 3435973836),F(1889785610, 2748779069),F(2370821947, 2199023255),F(3793315115, 3518437208),F(457671715, 2814749767),F(2943117749, 2251799813),F(3849994940, 3602879701),F(2221002492, 2882303761),F(917808535, 2305843009),F(3186480574, 3689348814),F(3408177918, 2951479051),F(1867548875, 2361183241),F(1270091283, 3777893186),F(157079567, 3022314549),F(984657113, 2417851639),F(3293438299, 3868562622),F(916763721, 3094850098),F(2451397895, 2475880078),
F(3063243173, 3961408125),F(2450594538, 3169126500),F(1960475630, 2535301200),F(3136761009, 4056481920),F(2509408807, 3245185536),F(1148533586, 2596148429),F(3555640657, 4153837486),F(1985519066, 3323069989),F(2447408712, 2658455991),F(2197867021, 4253529586),F(899300158, 3402823669),F(1578433585, 2722258935),F(1262746868, 2177807148),F(1161401530, 3484491437),F(3506101601, 2787593149),F(3663874740, 2230074519),F(3285219207, 3568119231),F(1769181906, 2854495385),F(1415345525, 2283596308),F(1405559381, 3653754093),
F(2842434423, 2923003274),F(3132940998, 2338402619),F(2435725219, 3741444191),F(1089586716, 2993155353),F(2589656291, 2394524282),F(707476229, 3831238852),F(3142961361, 3064991081),F(1655375629, 2451992865),F(2648601007, 3923188584),F(2977874265, 3138550867),F(664312493, 2510840694),F(2780886908, 4017345110),F(2224709526, 3213876088),F(3497754539, 2571100870),F(1301439967, 4113761393),F(2759138892, 3291009114),F(3066304573, 2632807291),F(3188100398, 4212491666),F(1691486859, 3369993333),F(3071176406, 2695994666),
F(1597947665, 2156795733),F(1697722806, 3450873173),F(3076165163, 2760698538),F(4178919049, 2208558830),F(2391303182, 3533694129),F(2772036005, 2826955303),F(3935615722, 2261564242),F(2861011319, 3618502788),F(4006795973, 2894802230),F(3205436779, 2315841784),F(2551718468, 3705346855),F(2041374775, 2964277484),F(2492093279, 2371421987),F(551375410, 3794275180),F(441100328, 3035420144),F(1211873721, 2428336115),F(1938997954, 3885337784),F(2410191822, 3108270227),F(210166539, 2486616182),F(1195259923, 3978585891),
F(97214479, 3182868713),F(1795758501, 2546294970),F(2873213602, 4074071952),F(580583963, 3259257562),F(3041447548, 2607406049),F(2289335700, 4171849679),F(2690462019, 3337479743),F(3870356534, 2669983794),F(3615590076, 4271974071),F(2033478602, 3417579257),F(4203763259, 2734063405),F(3363010607, 2187250724),F(2803836594, 3499601159),F(3102062734, 2799680927),F(763663269, 2239744742),F(2080854690, 3583591587),F(4241664129, 2866873269),F(4252324763, 2293498615),F(2508752324, 3669597785),F(2007001859, 2935678228),
F(3323588406, 2348542582),F(1881767613, 3757668132),F(4082394468, 3006134505),F(3265915574, 2404907604),F(2648484541, 3847852167),F(400800715, 3078281734),F(1179634031, 2462625387),F(2746407909, 3940200619),F(3056119786, 3152160495),F(2444895829, 2521728396),F(2193846408, 4034765434),F(2614070585, 3227812347),F(373269550, 2582249878),F(4033205117, 4131599804),F(4085557553, 3305279843),F(691465664, 2644223875),F(1106345063, 4230758200),F(885076050, 3384606560),F(708060840, 2707685248),F(2284435591, 2166148198),
F(2796103486, 3465837117),F(518895870, 2772669694),F(1274110155, 2218135755),F(2038576249, 3549017208),F(3348847917, 2839213766),F(1820084875, 2271371013),F(2053142340, 3634193621),F(783520413, 2907354897),F(3203796708, 2325883917),F(1690100896, 3721414268),F(3070067635, 2977131414),F(3315047567, 2381705131),F(3586089190, 3810728210),F(2868871352, 3048582568),F(4013084000, 2438866054),F(3843954022, 3902185687),F(1357176299, 3121748550),F(1085741039, 2497398840),F(1737185663, 3995838144),F(2248741989, 3196670515),
F(1798993591, 2557336412),F(3737383206, 4091738259),F(3848900024, 3273390607),F(1361133101, 2618712486),F(459826043, 4189939978),F(2085847752, 3351951982),F(4245658579, 2681561585),F(2498086431, 4290498537),F(280482227, 3432398830),F(224385781, 2745919064),F(1038502084, 2196735251),F(4238583712, 3514776401),F(2531873511, 2811821121),F(1166505349, 2249456897),F(2725402018, 3599131035),F(2180321615, 2879304828),F(3462244210, 2303443862),F(2103616899, 3685510180),F(1682893519, 2948408144),F(2205308275, 2358726515),
F(3528493240, 3773962424),F(3681788051, 3019169939),F(3804423900, 2415335951),F(74124026, 3864537523),F(1777286139, 3091630018),F(3139815829, 2473304014),F(2446724950, 3957286423),F(3675366878, 3165829138),F(363313125, 2532663311),F(3158281377, 4052261297),F(808638183, 3241809038),F(2364897465, 2593447230),F(3783835944, 4149515568),F(450088378, 3319612455),F(360070702, 2655689964),F(2294100042, 4249103942),F(117293115, 3399283154),F(952827951, 2719426523),F(2480249279, 2175541218),F(3109405388, 3480865949),
F(3346517769, 2784692759),F(3536207675, 2227754207),F(2221958443, 3564406732),F(59579836, 2851525386),F(3483637705, 2281220308),F(419859574, 3649952494),F(1194881118, 2919961995),F(955904894, 2335969596),F(4106428209, 3737551353),F(708162189, 2990041083),F(2284516670, 2392032866),F(1937239754, 3827252586),F(690798344, 3061802069),F(1411632134, 2449441655),F(2258611415, 3919106648),F(3524876050, 3135285318),F(242920462, 2508228255),F(388672740, 4013165208),F(2028925110, 3210532166),F(764146629, 2568425733),F(363641147, 4109481173),
F(2008899836, 3287584938),F(3325106787, 2630067950),F(1025203564, 4208108721),F(4256136688, 3366486976),F(2545915891, 2693189581),F(1177739254, 2154551665),F(1884382806, 3447282664),F(2366499704, 2757826131),F(1034206304, 2206260905),F(1654730086, 3530017448),F(3041770987, 2824013958),F(4151403708, 2259211166),F(629291719, 3614737867),F(3080413753, 2891790293),F(4182317920, 2313432234),F(4114728295, 3701491575),F(3291782636, 2961193260),F(2633426109, 2368954608),F(3354488315, 3790327373),F(106610275, 3032261899),
F(944281679, 2425809519),F(3228837605, 3881295230),F(2583070084, 3105036184),F(2925449526, 2484028947),F(1244745405, 3974446316),F(136802865, 3179557053),F(1827429210, 2543645642),F(3782880196, 4069833027),F(1308317238, 3255866422),F(3623634168, 2604693137),F(2361840832, 4167509020),F(1889472666, 3334007216),F(652584673, 2667205773),F(185142018, 4267529237),F(2725093992, 3414023389),F(3039068653, 2731218711),F(1572261463, 2184974969),F(4233605259, 3495959950),F(3386884207, 2796767960),F(2709507366, 2237414368),
F(3476218326, 3579862989),F(3639968120, 2863890391),F(2052981037, 2291112313),F(2425776200, 3665779701),F(1081627501, 2932623761),F(6308541, 2346099009),F(1728080585, 3753758414),F(2241457927, 3003006731),F(934172882, 2402405385),F(1494676612, 3843848616),F(336747830, 3075078893),F(1987385183, 2460063114),F(602835915, 3936100983),F(2200255650, 3148880786),F(901211061, 2519104629),F(3159924616, 4030567406),F(1668946233, 3224453925),F(1335156987, 2579563140),F(2136251179, 4127301024),F(2567994402, 3301840819),
F(2913388981, 2641472655),F(366455074, 4226356249),F(1152157518, 3381084999),F(1780719474, 2704867999),F(2283569038, 2163894399),F(1076730083, 3462231039),F(1720377526, 2769784831),F(517308561, 2215827865),F(827693699, 3545324584),F(1521148418, 2836259667),F(3793899112, 2269007733),F(916277824, 3630412374),F(1592015718, 2904329899),F(2132606034, 2323463919),F(835189277, 3717542271),F(4104125258, 2974033816),F(2424306747, 2379227053),F(3019897337, 3806763285),F(2415917869, 3045410628),F(3650721214, 2436328502),
F(2405180105, 3898125604),F(2783137543, 3118500483),F(3944496953, 2494800386),F(298240911, 3991680619),F(1097586188, 3193344495),F(878068950, 2554675596),F(3981890698, 4087480953),F(608532181, 3269984763),F(2204812663, 2615987810),F(3527700261, 4185580496),F(1963166749, 3348464397),F(4147513777, 2678771517),F(3200048207, 4286034428),F(4278025484, 3428827542),F(1704433468, 2743062034),F(2222540234, 2194449627),F(120090538, 3511119404),F(955065889, 2808895523),F(2482039630, 2247116418),F(3112269949, 3595386269),
F(3348809418, 2876309015),F(2679047534, 2301047212),F(850502218, 3681675540),F(680401775, 2945340432),F(3121301797, 2356272345),F(699115580, 3770035753),F(2277279382, 3016028602),F(103836587, 2412822882),F(1025131999, 3860516611),F(4256079436, 3088413288),F(827883168, 2470730631),F(3901593088, 3953169009)]);A7c=AZE([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Q4(){var a=this;C.call(a);a.rd=R;a.py=0;a.tl=0;}
function Xa(){var a=this;C.call(a);a.CJ=null;a.jC=null;a.w3=null;a.qv=0;a.xQ=0.0;a.hF=0.0;a.pU=0.0;a.oj=0.0;a.rQ=0.0;a.fF=0.0;a.nj=0.0;a.iV=0.0;a.mK=0.0;a.uV=0.0;a.g1=0.0;a.yj=0.0;a.le=0;a.hD=null;a.pX=null;a.sL=0.0;a.ql=0.0;a.CI=null;a.tZ=null;a.u6=null;}
function AWB(a,b){var c=new Xa();APg(c,a,b);return c;}
function APg(a,b,c){a.fF=1.0;a.uV=1.0;a.g1=1.0;a.yj=1.0;a.hD=Bt($rt_arraycls(Mv),128);a.ql=1.0;a.tZ=E$([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.u6=E$([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.w3=b;a.qv=c;Vb(a,b,c);}
function Vb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$$je;if(a.jC!==null)G(AXu(B(488)));a.CJ=ADG(b);d=AYu(AWR(Z3(b)),512);a:{b:{try{e=IJ(d);if(e===null)G(F1(B(489)));e=HX(e,AAq(e,B(490))+8|0);f=(Sm(FZ(e,0,V6(e,32)),B(491),4)).data;if(f.length!=4)G(F1(B(492)));a.xQ=C1(f[0]);a.hF=C1(f[1]);a.pU=C1(f[2]);a.oj=C1(f[3]);g=a.xQ+a.pU;e=IJ(d);if(e===null)G(F1(B(493)));f=(Sm(e,B(194),9)).data;h=f.length;if(h<3)G(F1(B(494)));if(!FJ(f[1],B(495)))G(F1(B(496)));a.rQ=C1(HX(f[1],11));if
(!FJ(f[2],B(497)))G(F1(B(498)));c:{i=C1(HX(f[2],5));j=1;if(h<6)k=j;else if(f[5]===null)k=j;else if(!FJ(f[5],B(499)))k=j;else{try{k=Jf(1,C1(HX(f[5],6)));j=k;break c;}catch($$e){$$je=BJ($$e);if($$je instanceof CG){}else{throw $$e;}}k=j;}}a.jC=Bt(L,k);h=0;d:{e:{f:{while(true){if(h>=k)break d;e=IJ(d);if(e===null)G(F1(B(500)));g:{l=Pf(VB(B(501)),e);if(HO(l)){m=LB(l,1);try{if(C1(m)!=h)break f;break g;}catch($$e){$$je=BJ($$e);if($$je instanceof CG){n=$$je;break e;}else{throw $$e;}}}}e=Pf(VB(B(502)),e);if(!HO(e))break;o
=LB(e,1);a.jC.data[h]=Wg(Tn(Tk(Tw(b),o)),B(503),B(102));h=h+1|0;}G(F1(B(504)));}try{G(F1(C$(B7(B7(FU(),B(505)),m))));}catch($$e){$$je=BJ($$e);if($$je instanceof CG){n=$$je;}else{throw $$e;}}}G(AOw(C$(B7(B7(FU(),B(506)),m)),n));}a.iV=0.0;h:{while(true){e=IJ(d);if(e===null)break;if(FJ(e,B(507)))break h;if(FJ(e,B(508)))break h;if(!FJ(e,B(509)))continue;p=AHt();q=ACP(e,B(510));BX(q);BX(q);k=C1(BX(q));if(k<=0)a.pX=p;else{if(k>65535)continue;SW(a,k,p);}p.gb=k;BX(q);p.tG=C1(BX(q));BX(q);p.tH=C1(BX(q));BX(q);p.dg=C1(BX(q));BX(q);p.dP
=C1(BX(q));BX(q);p.dY=C1(BX(q));BX(q);if(c)p.jH=C1(BX(q));else p.jH= -(p.dP+C1(BX(q))|0)|0;BX(q);p.ht=C1(BX(q));if(S4(q))BX(q);i:{if(S4(q))try{p.jt=C1(BX(q));break i;}catch($$e){$$je=BJ($$e);if($$je instanceof CG){}else{throw $$e;}}}if(p.dg>0&&p.dP>0)a.iV=ATp(i+p.jH,a.iV);}}a.iV=a.iV+a.pU;j:{while(true){e=IJ(d);if(e===null)break;if(!FJ(e,B(511)))break j;q=ACP(e,B(510));BX(q);BX(q);r=C1(BX(q));BX(q);s=C1(BX(q));if(r<0)continue;if(r>65535)continue;if(s<0)continue;if(s>65535)continue;p=HC(a,r&65535);BX(q);t=C1(BX(q));if
(p!==null)AAN(p,s,t);}}u=0;v=0.0;w=0.0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;if(e!==null&&FJ(e,B(508))){u=1;q=ACP(e,B(510));BX(q);BX(q);v=Gn(BX(q));BX(q);w=Gn(BX(q));BX(q);x=Gn(BX(q));BX(q);y=Gn(BX(q));BX(q);z=Gn(BX(q));BX(q);ba=Gn(BX(q));BX(q);bb=Gn(BX(q));}bc=HC(a,32);if(bc===null){bc=AHt();bc.gb=32;bd=HC(a,108);if(bd===null)bd=Qh(a);bc.ht=bd.ht;SW(a,32,bc);}if(!bc.dg){be=a.oj;bc.dg=be+bc.ht+a.hF|0;bc.dY= -be|0;}a.sL=bc.ht;bf=null;f=a.tZ.data;k=f.length;h=0;k:{while(h<k){bf=HC(a,f[h]);if(bf!==null)break k;h=h+1
|0;}}if(bf===null)bf=Qh(a);a.ql=bf.dP-g;bg=null;f=a.u6.data;k=f.length;h=0;l:{while(h<k){bg=HC(a,f[h]);if(bg!==null)break l;h=h+1|0;}}if(bg!==null)a.fF=bg.dP;else{bh=a.hD.data;j=bh.length;k=0;while(k<j){m:{bi=bh[k];if(bi!==null){f=bi.data;h=f.length;r=0;while(true){if(r>=h)break m;p=f[r];if(p!==null){s=p.dP;if(s&&p.dg)a.fF=AHJ(a.fF,s);}r=r+1|0;}}}k=k+1|0;}}g=a.fF-g;a.fF=g;i=i-g;a.nj=i;g= -a.rQ;a.mK=g;if(c){a.nj= -i;a.mK= -g;}if(u){a.nj=v;a.iV=w;a.mK=x;a.fF=y;a.rQ=z;a.sL=ba;a.ql=bb;}}catch($$e){$$je=BJ($$e);if
($$je instanceof Db){n=$$je;break b;}else{b=$$je;break a;}}SZ(d);return;}try{G(AOw(C$(DK(B7(FU(),B(512)),b)),n));}catch($$e){$$je=BJ($$e);b=$$je;}}SZ(d);G(b);}
function Nk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=c.lJ.hx;e=1.0/d.gm;f=1.0/d.f_;g=0.0;h=0.0;i=c.x2;j=c.x4;k=c.or;l=c.pj;if(c instanceof Pc){m=c;g=m.B_;h=(m.AD-m.Da|0)-m.B$;}n=b.tG;o=n;p=b.dg;q=n+p|0;n=b.tH;r=n;s=b.dP;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.dg=p+o|0;b.dY=b.dY-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.dg=b.dg-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.dP=n;if(n<0)b.dP=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.dP=b.dP-u|0;b.jH=b.jH+u|0;}}b.sZ=i+o*e;b.tT=i+k*e;if(!a.qv){b.pO=
j+r*f;b.o1=j+l*f;}else{b.o1=j+r*f;b.pO=j+l*f;}}
function SW(a,b,c){var d,e,f;d=a.hD.data;e=b/512|0;f=d[e];if(f===null){f=Bt(Mv,512);d[e]=f;}f.data[b&511]=c;}
function Qh(a){var b,c,d,e,f,g,h,i;b=a.hD.data;c=b.length;d=0;a:while(true){if(d>=c){e=new Ba;e.c=1;e.d=1;e.f=B(513);G(e);}b:{f=b[d];if(f!==null){f=f.data;g=f.length;h=0;while(true){if(h>=g)break b;i=f[h];if(i!==null&&i.dP&&i.dg)break a;h=h+1|0;}}}d=d+1|0;}return i;}
function HC(a,b){var c;c=a.hD.data[b/512|0];if(c===null)return null;return c.data[b&511];}
function N_(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.le;i=a.g1;j=b.b8;k=b.cs;ACJ(j,g);ABx(b.cs,g+1|0);a:{while(true){l=d+1|0;if(d<0)break;m=c.e.data;if(d>=m.length)break;b:{n=m[d];if(n!=13){m=a.hD.data[n/512|0];o=m===null?null:m.data[n&511];if(o===null){o=a.pX;if(o===null)break b;}Dh(j,o);if(f===null)p=o.oJ?0.0:( -o.dY|0)*i-a.oj;else{c:{d=f.ht;m=f.nq;if(m!==null){m=m.data[n>>>9|0];if(m!==null){g=m.data[n&511];break c;}}g=0;}p=(d+g|0)*i;}N$(k,p);if(!h)f=o;else if(n!=91)f=o;else if(l>=e)f
=o;else{if(l<0)break a;m=c.e.data;if(l>=m.length)break a;if(m[l]!=91)f=o;else{l=l+1|0;f=o;}}}}if(l>=e){if(f!==null)N$(k,f.oJ?f.ht*i:(f.dg+f.dY|0)*i-a.hF);return;}d=l;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function Tj(a,b,c){var d,e,f,g,h,i;a:{d=c-1|0;e=b.C.data;f=e[d].gb&65535;switch(f){case 9:case 10:case 13:case 32:break;default:c=0;break a;}c=1;}if(c)return d;b:{g=a.CI;if(g===null)c=0;else{h=g.data;c=h.length;i=0;while(i<c){if(f==h[i]){c=1;break b;}i=i+1|0;}c=0;}}if(c)d=d+(-1)|0;c:{while(d>0){d:{c=e[d].gb&65535;switch(c){case 9:case 10:case 13:case 32:break;default:f=0;break d;}f=1;}if(f)break c;e:{if(g===null)c=0;else{h=g.data;f=h.length;i=0;while(i<f){if(c==h[i]){c=1;break e;}i=i+1|0;}c=0;}}if(c)break c;d
=d+(-1)|0;}return 0;}return d+1|0;}
var EH=I(BQ);
var A69=null;var A7d=null;var A7e=null;var A67=null;var A7f=null;function Pi(){Pi=Bi(EH);AUC();}
function AUC(){var b,c,d,e;b=new EH;Pi();b.u=B(514);b.n=0;A69=b;c=new EH;c.u=B(515);c.n=1;A7d=c;d=new EH;d.u=B(516);d.n=2;A7e=d;e=new EH;e.u=B(517);e.n=3;A67=e;A7f=U(EH,[b,c,d,e]);}
function Js(){var a=this;C.call(a);a.d7=null;a.cW=null;a.mV=0;a.jp=0;a.kS=null;a.lR=0;a.wG=null;}
var A7g=null;function A7h(a,b,c,d,e){var f=new Js();St(f,a,b,c,d,e);return f;}
function St(a,b,c,d,e,f){var g,h,i,j,k;a:{b:{a.mV=1;a.lR=0;g=new Be;BT();a.wG=g;AYw();switch(A7i.data[b.n]){case 1:a.d7=AN3(c,d,f);b=new H3;b.fT=1;b.i3=0;b.qe=1;if(!A0D){h=OW(e);e=h.data.length;f=new J3;i=0+e|0;Di(f);f.B=(-1);f.J=e;f.g=e;f.h=0;f.g=i;f.ly=0;f.mo=0;f.kI=h;}else{d=e*2|0;if(d<0){b=new Bg;f=new N;f.b=D(16);DY(f,f.a,Ea(B(518)));P(f,f.a,d,10);g=new L;h=f.b;d=f.a;j=D(d);g.e=j;K(h,0,j,0,d);b.c=1;b.d=1;b.f=g;G(b);}f=new CT;h=BS(d);f.B=(-1);f.J=d;f.g=d;CB();f.bt=A4Q;f.bB=0;f.bl=h;f.h=0;f.g=d;f.cu=1;f.bL
=0;f.bt=DE();f=Kd(f);}b.fs=f;f.g=f.h;f.h=0;f.B=(-1);f=A4R;g=f.l.createBuffer();e=f.dr;f.dr=e+1|0;CP(f.eh,e,CY(g));b.mO=e;b.lc=!c?35048:35044;a.cW=b;a.jp=0;break a;case 2:break;case 3:a.d7=ANf(c,d,f);a.cW=AVN(c,e);a.jp=0;break a;case 4:break b;default:break b;}a.d7=AZn(c,d,f);a.cW=AVN(c,e);a.jp=0;break a;}b=new NE;ZO(b,0,d,f);a.d7=b;b=new OF;b.fT=1;b.i3=0;b.qe=1;if(!A0D){h=OW(e);d=h.data.length;f=new J3;k=0+d|0;RY(f,d);f.h=0;f.g=k;f.ly=0;f.mo=0;f.kI=h;}else{c=e*2|0;if(c<0){b=new Bg;f=new N;f.b=D(16);FG(f,f.a,
B(518));IV(f,c);AEp(b,C$(f));G(b);}g=new CT;h=BS(c);Di(g);g.B=(-1);g.J=c;g.g=c;CB();g.bt=A4Q;g.bB=0;g.bl=h;g.h=0;g.g=c;g.cu=1;g.bL=0;RH(g,DE());f=Kd(g);}b.fs=f;ADc(f);b.mO=XN(A4R);b.lc=35044;a.cW=b;a.jp=1;}Yk(A4c,a);}
function Ql(a,b,c,d,e,f){var g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.d7.oD(b,g);g=a.kS;if(g!==null&&g.yk()>0)a.kS.oD(b,h);if(a.cW.i1()>0)a.cW.o9();}if(a.jp){if(a.cW.i1()<=0)A4R.nf(c,d,e);else{g=a.cW.rP(0);i=g.h;B_(g,d);A4R.qK(c,e,5123,g);B_(g,i);}}else{j=0;if(a.lR)j=a.kS.yk();if(a.cW.i1()<=0){if(a.lR&&j>0)A5Q.xX(c,d,e,j);else A4R.nf(c,d,e);}else{if((e+d|0)>a.cW.mR()){b=new Ba;g=new N;g.b=D(16);H(g,g.a,B(519));P(g,g.a,e,10);H(g,g.a,B(520));P(g,g.a,d,10);H(g,g.a,B(521));c=a.cW.mR();P(g,g.a,c,10);H(g,g.a,
B(522));h=new L;k=g.b;d=g.a;O();l=D(d);h.e=l;K(k,0,l,0,d);b.c=1;b.d=1;b.f=h;G(b);}if(a.lR&&j>0)A5Q.wC(c,e,5123,d*2|0,j);else A4R.rO(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.d7.oi(b,g);g=a.kS;if(g!==null&&g.yk()>0)a.kS.oi(b,h);if(a.cW.i1()>0)a.cW.wI();}}
function G6(a,b){var c,d,e;c=(a.d7.nI()).dc.data;d=c.length;e=0;while(e<d){if(c[e].fa==b)return c[e];e=e+1|0;}return null;}
function Oo(a){return a.d7.nI();}
function Yk(b,c){var d,e,f,g,h;d=A7g;if(b===null){d=d.c9.data[0];while(d!==null&&d.du!==null){d=d.dJ;}}else{e=b;if(!e.$id$){f=$rt_nextId();e.$id$=f;}g=b.$id$;h=d.c9.data;d=h[g&(h.length-1|0)];while(d!==null){if(d.gy==g){f=d.du;if(b!==f&&!(b!==f?0:1)?0:1)break;}d=d.dJ;}}d=d===null?null:d.ev;if(d===null){d=new CJ;d.b2=1;d.C=Bt(C,16);}Dh(d,c);JZ(A7g,b,d);}
function AD6(){var b,c,d,e;b=new H0;c=J6(16);b.f5=0;d=Bt(FO,c);e=d.data;b.c9=d;b.mf=0.75;b.hC=e.length*0.75|0;A7g=b;}
function EF(){var a=this;C.call(a);a.J=0;a.h=0;a.g=0;a.B=0;}
function RY(a,b){a.B=(-1);a.J=b;a.g=b;}
function AJU(a){return a.J;}
function AP3(a){return a.h;}
function B_(a,b){var c,d,e,f,g,h;if(b>=0&&b<=a.g){a.h=b;if(b<a.B)a.B=0;return a;}c=new Bg;d=a.g;e=new N;e.b=D(16);H(e,e.a,B(523));P(e,e.a,b,10);H(e,e.a,B(524));P(e,e.a,d,10);d=e.a;Bo(e,d,d+1|0);f=e.b;f.data[d]=93;g=new L;d=e.a;O();h=D(d);g.e=h;K(f,0,h,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function ATo(a){return a.g;}
function De(a,b){var c,d,e,f,g,h;if(b>=0&&b<=a.J){if(a.B>b)a.B=(-1);a.g=b;if(a.h>b)a.h=b;return a;}c=new Bg;d=a.J;e=new N;e.b=D(16);H(e,e.a,B(525));P(e,e.a,b,10);H(e,e.a,B(524));P(e,e.a,d,10);d=e.a;Bo(e,d,d+1|0);f=e.b;f.data[d]=93;g=new L;d=e.a;O();h=D(d);g.e=h;K(f,0,h,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function ADW(a){a.g=a.h;a.h=0;a.B=(-1);return a;}
function ATw(a){return a.g-a.h|0;}
var Lr=I(0);
var LC=I(EF);
function Nt(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bh;i=new N;i.b=D(16);H(i,i.a,B(526));P(i,i.a,g,10);H(i,i.a,B(527));P(i,i.a,f,10);j=new L;b=i.b;d=i.a;O();e=D(d);j.e=e;K(b,0,e,0,d);h.c=1;h.d=1;h.f=j;G(h);}f=a.g;k=a.h;if((f-k|0)<d){h=new Ip;h.c=1;h.d=1;G(h);}if(d>=0){g=0;l=k;while(g<d){m=c+1|0;f=l+1|0;e[c]=a.hJ.data[l+a.h$|0];g=g+1|0;c=m;l=f;}a.h=k+d|0;return a;}h=new Bh;i=new N;i.b=D(16);H(i,i.a,B(528));P(i,i.a,d,10);H(i,i.a,B(529));j=new L;b=i.b;d=i.a;O();e
=D(d);j.e=e;K(b,0,e,0,d);h.c=1;h.d=1;h.f=j;G(h);}}b=b.data;h=new Bh;d=b.length;i=new N;i.b=D(16);H(i,i.a,B(530));P(i,i.a,c,10);H(i,i.a,B(524));P(i,i.a,d,10);d=i.a;Bo(i,d,d+1|0);b=i.b;b.data[d]=41;j=new L;d=i.a;O();e=D(d);j.e=e;K(b,0,e,0,d);h.c=1;h.d=1;h.f=j;G(h);}
function AEf(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(a.jG){e=new Eu;e.c=1;e.d=1;G(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new Gd;e.c=1;e.d=1;G(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(531));P(j,j.a,i,10);H(j,j.a,B(527));P(j,j.a,f,10);k=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}if(d>=0){i=0;l=g;while(i<d){m=l+1|0;f=c+1|0;a.hJ.data[l+a.h$|0]=h[c];i=i+1|0;l=m;c=f;}a.h=g+d|0;return a;}e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(528));P(j,j.a,d,10);H(j,
j.a,B(529));k=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}}b=b.data;e=new Bh;d=b.length;j=new N;j.b=D(16);H(j,j.a,B(530));P(j,j.a,c,10);H(j,j.a,B(524));P(j,j.a,d,10);f=j.a;Bo(j,f,f+1|0);b=j.b;b.data[f]=41;k=new L;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}
function KI(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.jG){b=new Eu;b.c=1;b.d=1;G(b);}e=d-c|0;f=a.g;g=a.h;if((f-g|0)<e){b=new Gd;b.c=1;b.d=1;G(b);}if(c>=0){h=b.e.data.length;if(c<=h){if(d>h){b=new Bh;i=new N;i.b=D(16);H(i,i.a,B(531));P(i,i.a,d,10);H(i,i.a,B(532));P(i,i.a,h,10);j=new L;k=i.b;d=i.a;O();l=D(d);j.e=l;K(k,0,l,0,d);b.c=1;b.d=1;b.f=j;G(b);}if(c<=d){a:{while(c<d){h=g+1|0;f=c+1|0;if(c<0)break a;k=b.e.data;if(c>=k.length)break a;YT(a,g,k[c]);g=h;c=f;}a.h=a.h+e|0;return a;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bh;i
=new N;i.b=D(16);H(i,i.a,B(533));P(i,i.a,c,10);H(i,i.a,B(534));P(i,i.a,d,10);j=new L;k=i.b;d=i.a;O();l=D(d);j.e=l;K(k,0,l,0,d);b.c=1;b.d=1;b.f=j;G(b);}}i=new Bh;d=b.e.data.length;b=new N;b.b=D(16);H(b,b.a,B(533));P(b,b.a,c,10);H(b,b.a,B(524));P(b,b.a,d,10);d=b.a;Bo(b,d,d+1|0);k=b.b;k.data[d]=41;j=new L;d=b.a;O();l=D(d);j.e=l;K(k,0,l,0,d);i.c=1;i.d=1;i.f=j;G(i);}
function FD(){var a=this;EF.call(a);a.bB=0;a.bl=null;a.bt=null;}
function Ot(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new Bh;i=new N;i.b=D(16);H(i,i.a,B(535));P(i,i.a,g,10);H(i,i.a,B(527));P(i,i.a,f,10);j=new L;b=i.b;d=i.a;O();e=D(d);j.e=e;K(b,0,e,0,d);h.c=1;h.d=1;h.f=j;G(h);}f=a.g;k=a.h;if((f-k|0)<d){h=new Ip;h.c=1;h.d=1;G(h);}if(d>=0){g=k+a.bB|0;l=0;while(l<d){m=c+1|0;b=a.bl.data;f=g+1|0;e[c]=b[g];l=l+1|0;c=m;g=f;}a.h=k+d|0;return a;}h=new Bh;i=new N;i.b=D(16);H(i,i.a,B(528));P(i,i.a,d,10);H(i,i.a,B(529));j=new L;b=i.b;d=i.a;O();e
=D(d);j.e=e;K(b,0,e,0,d);h.c=1;h.d=1;h.f=j;G(h);}}b=b.data;h=new Bh;d=b.length;i=new N;i.b=D(16);H(i,i.a,B(530));P(i,i.a,c,10);H(i,i.a,B(524));P(i,i.a,d,10);d=i.a;Bo(i,d,d+1|0);e=i.b;e.data[d]=41;j=new L;d=i.a;O();b=D(d);j.e=b;K(e,0,b,0,d);h.c=1;h.d=1;h.f=j;G(h);}
function Sp(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.bL){e=new Eu;e.c=1;e.d=1;G(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new Gd;e.c=1;e.d=1;G(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(536));P(j,j.a,i,10);H(j,j.a,B(527));P(j,j.a,f,10);k=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}if(d>=0){i=g+a.bB|0;l=0;while(l<d){b=a.bl.data;m=i+1|0;f=c+1|0;b[i]=h[c];l=l+1|0;i=m;c=f;}a.h=g+d|0;return a;}e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(528));P(j,
j.a,d,10);H(j,j.a,B(529));k=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}}b=b.data;e=new Bh;d=b.length;j=new N;j.b=D(16);H(j,j.a,B(530));P(j,j.a,c,10);H(j,j.a,B(524));P(j,j.a,d,10);d=j.a;Bo(j,d,d+1|0);h=j.b;h.data[d]=41;k=new L;d=j.a;O();b=D(d);k.e=b;K(h,0,b,0,d);e.c=1;e.d=1;e.f=k;G(e);}
function RH(a,b){a.bt=b;return a;}
function AQN(a,b){De(a,b);return a;}
function AFP(a,b){B_(a,b);return a;}
function F8(){C.call(this);this.se=null;}
var A7j=null;var A5x=null;var A64=null;function Er(){Er=Bi(F8);AOB();}
function AOB(){var b;b=new F8;Er();b.se=B(537);A7j=b;b=new F8;b.se=B(538);A5x=b;b=new F8;b.se=B(539);A64=b;}
var Mh=I(0);
var Sd=I(0);
function NH(){var a=this;C.call(a);a.yG=null;a.xr=null;a.B5=0;a.Eg=0;}
function ARf(a){var b,c;if(!a.B5){b=a.yG;b.uq=null;Dj();if(AZ5!==b)AZ5=b;AZ5.gt=Fr();c=a.xr;b=null;c.is.ld(b);}}
function Mv(){var a=this;C.call(a);a.gb=0;a.tG=0;a.tH=0;a.dg=0;a.dP=0;a.sZ=0.0;a.o1=0.0;a.tT=0.0;a.pO=0.0;a.dY=0;a.jH=0;a.ht=0;a.nq=null;a.oJ=0;a.jt=0;}
function AHt(){var a=new Mv();ASN(a);return a;}
function ASN(a){a.jt=0;}
function AAN(a,b,c){var d,e,f;if(a.nq===null)a.nq=Bt($rt_arraycls($rt_bytecls()),128);d=a.nq.data;e=b>>>9|0;f=d[e];if(f===null){f=BS(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
function ALs(a){var b,c,d,e,f;b=a.gb&65535;c=new L;d=D(1);e=d.data;e[0]=b;O();f=e.length;e=D(f);c.e=e;K(d,0,e,0,f);return c;}
function UN(){var a=this;C.call(a);a.dc=null;a.dE=0;a.zv=R;a.B1=0;a.Dv=0;}
function ALp(a){var b=new UN();AOK(b,a);return b;}
function AOK(a,b){var c,d,e,f,g,h;b=b.data;a.zv=M(-1);a.B1=(-1);a.Dv=(-1);c=b.length;if(!c){d=new Bg;d.c=1;d.d=1;d.f=B(540);G(d);}e=Bt(Em,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.dc=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.fy=c;switch(d.dw){case 5120:case 5121:break;case 5122:case 5123:g=2*d.c5|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.c5|0;break a;default:break b;}g=d.c5;break a;}g=0;}c=c+g|0;h=h+1|0;}a.dE=c;}
function G2(){var a=this;C.call(a);a.T=null;a.W=0;a.ml=null;a.vb=null;a.wE=null;a.vG=null;a.fm=null;a.vB=null;a.w2=null;a.uA=null;a.bu=0;a.qg=0;a.s9=0;a.EC=null;a.cB=null;a.cF=null;a.bv=0;a.Ec=0;a.ef=null;a.jX=null;}
var A68=0;var A7k=null;var A7l=null;var A7m=null;var A7n=null;function SY(){SY=Bi(G2);ARz();}
function CA(a,b){var c=new G2();AD4(c,a,b);return c;}
function AD4(a,b,c){var d,e,f,g,h;SY();a.T=B(43);a.ml=Jj(51,0.800000011920929);a.vb=Jj(51,0.800000011920929);a.wE=Jj(51,0.800000011920929);a.fm=Jj(51,0.800000011920929);a.vB=Jj(51,0.800000011920929);a.w2=Jj(51,0.800000011920929);a.Ec=0;if(!A0D){d=Y(1);e=d.data.length;f=new GU;g=0+e|0;f.B=(-1);f.J=e;f.g=e;f.h=0;f.g=g;f.hV=0;f.jD=0;f.ho=d;}else{h=new CT;d=BS(4);h.B=(-1);h.J=4;h.g=4;CB();h.bt=A4Q;h.bB=0;h.bl=d;h.h=0;h.g=4;h.cu=1;h.bL=0;h.bt=DE();f=Hh(h);}a.ef=f;if(!A0D){d=Y(1);e=d.data.length;f=new GU;g=0+e|0;f.B
=(-1);f.J=e;f.g=e;f.h=0;f.g=g;f.hV=0;f.jD=0;f.ho=d;}else{h=new CT;d=BS(4);h.B=(-1);h.J=4;h.g=4;CB();h.bt=A4Q;h.bB=0;h.bl=d;h.h=0;h.g=4;h.cu=1;h.bL=0;RH(h,DE());f=Hh(h);}a.jX=f;if(b===null)G(AOe(B(541)));if(c===null)G(AOe(B(542)));f=A7k;if(f!==null&&EO(f)>0)b=C$(B7(B7(FU(),A7k),b));f=A7l;if(f!==null&&EO(f)>0)c=C$(B7(B7(FU(),A7l),c));a.cB=b;a.cF=c;a.EC=APp(16);Da(a,b,c);if(AC_(a)){Wu(a);Zc(a);AAv(a,A4c,a);}}
function Da(a,b,c){var d;a.qg=S7(a,35633,b);d=S7(a,35632,c);a.s9=d;if(a.qg!=(-1)&&d!=(-1)){d=A4R.qh();if(!d)d=(-1);d=ACv(a,d);a.bu=d;if(d!=(-1)){a.W=1;return;}a.W=0;return;}a.W=0;}
function S7(a,b,c){var d,e,f,g,h,i,j,k;d=A4R;if(!A0D){e=Y(1);f=e.data.length;g=new GU;h=0+f|0;g.B=(-1);g.J=f;g.g=f;g.h=0;g.g=h;g.hV=0;g.jD=0;g.ho=e;}else{i=new CT;j=BS(4);i.B=(-1);i.J=4;i.g=4;CB();i.bt=A4Q;i.bB=0;i.bl=j;i.h=0;i.g=4;i.cu=1;i.bL=0;i.bt=DE();g=Hh(i);}k=d.rn(b);if(!k)return (-1);d.sG(k,c);d.qY(k);d.q0(k,35713,g);if(FM(g,0))return k;i=d.q6(k);c=new N;c.b=D(16);d=a.T;H(c,c.a,d);d=b!=35633?B(543):B(544);H(c,c.a,d);d=new L;j=c.b;k=c.a;O();e=D(k);d.e=e;K(j,0,e,0,k);a.T=d;c=new N;c.b=D(16);H(c,c.a,d);H(c,
c.a,i);d=new L;j=c.b;k=c.a;e=D(k);d.e=e;K(j,0,e,0,k);a.T=d;return (-1);}
function ACv(a,b){var c,d,e,f;c=A4R;if(b==(-1))return (-1);c.nk(b,a.qg);c.nk(b,a.s9);c.oX(b);d=new CT;e=BS(4);d.B=(-1);d.J=4;d.g=4;CB();d.bt=A4Q;d.bB=0;d.bl=e;d.h=0;d.g=4;d.cu=1;d.bL=0;d.bt=DE();f=Hh(d);c.j3(b,35714,f);if(FM(f,0))return b;a.T=A4R.bI(b);return (-1);}
function AC_(a){return a.W;}
function Jq(a,b,c){var d,e,f,g,h,i;d=a.ml;e=(-2);f=FE(d,b);if(f>=0)e=d.ea.data[f];if(e==(-2)){e=A4R.mz(a.bu,b);if(e==(-1)&&c){if(a.W){d=new Bg;g=new N;g.b=D(16);H(g,g.a,B(545));H(g,g.a,b);H(g,g.a,B(546));b=new L;h=g.b;e=g.a;O();i=D(e);b.e=i;K(h,0,i,0,e);d.c=1;d.d=1;d.f=b;G(d);}b=new B2;d=new N;d.b=D(16);H(d,d.a,B(547));if(!a.W)g=a.T;else{g=A4R.bI(a.bu);a.T=g;}H(d,d.a,g);g=new L;h=d.b;e=d.a;O();i=D(e);g.e=i;K(h,0,i,0,e);b.c=1;b.d=1;b.f=g;G(b);}Fs(a.ml,b,e);}return e;}
function XH(a){if(a.bv){Da(a,a.cB,a.cF);a.bv=0;}}
function AAv(a,b,c){var d,e;SY();d=A7m;e=Df(d,b);d=e<0?null:d.cZ.data[e];if(d===null){d=new CJ;d.b2=1;d.C=Bt(C,16);}Dh(d,c);BW(A7m,b,d);}
function Zc(a){var b,c,d,e,f;b=a.ef;b.h=0;b.g=b.J;b.B=(-1);A4R.j3(a.bu,35718,b);c=FM(a.ef,0);a.vG=Bt(L,c);d=0;while(d<c){b=a.ef;b.h=0;b.g=b.J;b.B=(-1);Sf(b,0,1);b=a.jX;b.h=0;b.g=b.J;b.B=(-1);e=A4R.sp(a.bu,d,a.ef,b);f=A4R.mz(a.bu,e);Fs(a.ml,e,f);Fs(a.vb,e,FM(a.jX,0));Fs(a.wE,e,FM(a.ef,0));a.vG.data[d]=e;d=d+1|0;}}
function Wu(a){var b,c,d,e,f;b=a.ef;b.h=0;b.g=b.J;b.B=(-1);A4R.j3(a.bu,35721,b);c=FM(a.ef,0);a.uA=Bt(L,c);d=0;while(d<c){b=a.ef;b.h=0;b.g=b.J;b.B=(-1);Sf(b,0,1);b=a.jX;b.h=0;b.g=b.J;b.B=(-1);e=A4R.r0(a.bu,d,a.ef,b);f=A4R.k5(a.bu,e);Fs(a.fm,e,f);Fs(a.vB,e,FM(a.jX,0));Fs(a.w2,e,FM(a.ef,0));a.uA.data[d]=e;d=d+1|0;}}
function ARz(){var b,c,d,e;A68=1;A7k=B(43);A7l=B(43);A7m=Fy(51,0.800000011920929);if(!A0D){b=Y(1);c=b.data.length;d=new GU;e=0+c|0;d.B=(-1);d.J=c;d.g=c;d.h=0;d.g=e;d.hV=0;d.jD=0;d.ho=b;}else{d=new CT;b=BS(4);d.B=(-1);d.J=4;d.g=4;CB();d.bt=A4Q;d.bB=0;d.bl=b;d.h=0;d.g=4;d.cu=1;d.bL=0;d.bt=DE();d=Hh(d);}A7n=d;}
var KW=I(LC);
function T_(a){var b,c,d,e,f,g,h,i;if(a.jG){b=new Eu;b.c=1;b.d=1;G(b);}a:{c=a.g;d=a.h;e=c-d|0;if(d>0){f=0;while(true){if(f>=e)break a;c=d+1|0;g=a.hJ.data;h=a.h$;i=g[d+h|0];g[f+h|0]=i;f=f+1|0;d=c;}}}a.h=e;a.g=a.J;a.B=(-1);return a;}
function Jd(){var a=this;KW.call(a);a.jG=0;a.h$=0;a.hJ=null;}
function YT(a,b,c){a.hJ.data[b+a.h$|0]=c;}
function Lt(){var a=this;C.call(a);a.mB=null;a.kL=null;a.lo=0.0;a.fY=0.0;a.h2=null;a.hH=null;a.i2=0;}
function P7(a,b){var c;if(b!==null){a.h2=b;return a;}c=new Bg;c.c=1;c.d=1;c.f=B(467);G(c);}
function AVn(a,b){}
function SF(a,b){var c;if(b!==null){a.hH=b;return a;}c=new Bg;c.c=1;c.d=1;c.f=B(467);G(c);}
function AMb(a,b){}
function KH(a,b,c,d){var e,f,g,h,i,j,k,$$je;a:{e=a.i2;if(e!=3){if(d)break a;if(e!=2)break a;}b=new B2;b.c=1;b.d=1;G(b);}a.i2=!d?1:2;while(true){try{f=Ur(a,b,c);}catch($$e){$$je=BJ($$e);if($$je instanceof BU){g=$$je;b=new LM;b.c=1;b.d=1;b.cY=g;G(b);}else{throw $$e;}}e=f.by;if(e?0:1){if(!d)return f;e=b.g-b.h|0;if(e<=0)return f;f=new CK;f.by=2;f.bR=e;}else if(e!=1?0:1)break;h=!(f.by!=3?0:1)?a.h2:a.hH;b:{Er();if(h!==A5x){if(h===A7j)break b;else return f;}i=c.g-c.h|0;j=a.kL;e=j.data.length;if(i<e)return A0K;Sp(c,
j,0,e);}k=b.h;e=f.by;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new GT;b.c=1;b.d=1;G(b);}B_(b,k+f.bR|0);}return f;}
function ON(a,b){var c,d,e,f,g,h;c=b.g-b.h|0;if(!c){b=new CT;d=BS(0);b.B=(-1);b.J=0;b.g=0;CB();b.bt=A4Q;b.bB=0;b.bl=d;b.h=0;b.g=0;b.cu=0;b.bL=0;return b;}a.i2=0;e=c*a.lo|0;if(e<0){b=new Bg;f=new N;f.b=D(16);H(f,f.a,B(518));P(f,f.a,e,10);g=new L;d=f.b;c=f.a;O();h=D(c);g.e=h;K(d,0,h,0,c);b.c=1;b.d=1;b.f=g;G(b);}f=new CT;d=BS(e);f.B=(-1);f.J=e;f.g=e;CB();f.bt=A4Q;f.bB=0;f.bl=d;f.h=0;f.g=e;f.cu=0;f.bL=0;while(true){g=KH(a,b,f,0);if(g===A0J)break;if(g===A0K){f=Nw(a,f);continue;}if(!Yy(g))continue;ABJ(g);}b=KH(a,
b,f,1);c=b.by;e=c!=2?0:1;e=!e&&!(c!=3?0:1)?0:1;a:{if(e){switch(c){case 0:break;case 1:b=new Mt;b.c=1;b.d=1;G(b);case 2:f=new L7;e=b.bR;f.c=1;f.d=1;f.sA=e;G(f);case 3:f=new K0;e=b.bR;f.c=1;f.d=1;f.st=e;G(f);default:break a;}b=new K3;b.c=1;b.d=1;G(b);}}while(true){c=(M3(a,f)).by;if(c?0:1)break;if(!(c!=1?0:1))continue;f=Nw(a,f);}ADW(f);return f;}
function Nw(a,b){var c,d,e,f,g,h,i;c=b.bl.data;d=c.length;e=d*2|0;f=BS(e);if(e<d)d=e;g=f.data;e=0;while(e<d){g[e]=c[e];e=e+1|0;}d=g.length;h=new CT;i=0+d|0;h.B=(-1);h.J=d;h.g=d;CB();h.bt=A4Q;h.bB=0;h.bl=f;h.h=0;h.g=i;h.cu=0;h.bL=0;B_(h,b.h);return h;}
function M3(a,b){var c,d;c=a.i2;if(c!=2&&c!=4){b=new B2;b.c=1;b.d=1;G(b);}d=A0J;if(d===d)a.i2=3;return d;}
function AOC(a,b){return A0J;}
function AFi(a){a.i2=0;return a;}
function AQd(a){}
function CK(){var a=this;C.call(a);a.by=0;a.bR=0;}
var A0J=null;var A0K=null;function AWM(a,b){var c=new CK();Vv(c,a,b);return c;}
function Vv(a,b,c){a.by=b;a.bR=c;}
function Yy(a){var b,c;b=a.by;c=b!=2?0:1;return !c&&!(b!=3?0:1)?0:1;}
function AAk(b){var c;c=new CK;c.by=2;c.bR=b;return c;}
function ABJ(a){var b,c;switch(a.by){case 0:b=new K3;b.c=1;b.d=1;G(b);case 1:b=new Mt;b.c=1;b.d=1;G(b);case 2:b=new L7;c=a.bR;b.c=1;b.d=1;b.sA=c;G(b);case 3:b=new K0;c=a.bR;b.c=1;b.d=1;b.st=c;G(b);default:}}
function AJX(){var b;b=new CK;b.by=0;b.bR=0;A0J=b;b=new CK;b.by=1;b.bR=0;A0K=b;}
function RJ(){var a=this;C.call(a);a.qp=0;a.pZ=0;a.tI=0;}
var S6=I();
var A7i=null;function AYw(){AYw=Bi(S6);AR2();}
function AR2(){var b,c;Pi();b=Y((A7f.cH()).data.length);c=b.data;A7i=b;c[A7d.n]=1;c[A7e.n]=2;c[A67.n]=3;c[A69.n]=4;}
var Jy=I(0);
function Lk(){var a=this;C.call(a);a.fp=null;a.id=null;a.vT=0;a.Ep=0;a.qI=0;a.lH=0;a.my=0;}
function AN3(a,b,c){var d=new Lk();ZO(d,a,b,c);return d;}
function ZO(a,b,c,d){var e,f,g,h,i,j;a.lH=0;a.my=0;a.Ep=b;a.fp=d;c=B3(d.dE/4|0,c);if(!A0D){e=CU(c);f=e.data.length;d=new It;g=0+f|0;d.B=(-1);d.J=f;d.g=f;d.h=0;d.g=g;d.jB=0;d.k0=0;d.i6=e;}else{c=c*4|0;if(c<0){d=new Bg;h=new N;h.b=D(16);Gh(h,h.a,B(518));P(h,h.a,c,10);i=new L;e=h.b;c=h.a;O();j=D(c);i.e=j;K(e,0,j,0,c);d.c=1;d.d=1;d.f=i;G(d);}h=new CT;e=BS(c);h.B=(-1);h.J=c;h.g=c;CB();h.bt=A4Q;h.bB=0;h.bl=e;h.h=0;h.g=c;h.cu=1;h.bL=0;h.bt=DE();d=FP(h);}a.id=d;d.g=d.h;d.h=0;d.B=(-1);d=A4R;h=d.l.createBuffer();f=d.dr;d.dr
=f+1|0;CP(d.eh,f,CY(h));a.vT=f;a.qI=!b?35048:35044;}
function AKV(a){return a.fp;}
function ARD(a){return a.id.g/(a.fp.dE/4|0)|0;}
function APU(a,b,c,d){var e,f,g;a.lH=1;e=a.id;f=null;g=e instanceof FD;if(g)f=FP(e);else if(e instanceof EX)f=e;if(f===null){f=new Ba;f.c=1;f.d=1;f.f=B(548);G(f);}f.h=0;f.g=f.J;f.B=(-1);B_(e,0);Jv(f,b,c,d);B_(e,0);if(!g)De(e,d);else De(e,d<<2);B_(a.id,0);De(a.id,d);if(a.my){e=A4R;f=a.id;e.eF(34962,f.g,f,a.qI);a.lH=0;}}
function AKg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=A4R;d.dk(34962,a.vT);if(a.lH){e=a.id;d.eF(34962,e.g,e,a.qI);a.lH=0;}a:{f=a.fp.dc.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.fp.dc.data[g];j=h[g];if(j>=0){e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}e.ig(j);k=i.c5;l=i.dw;m=i.dB;n=a.fp.dE;o=i.fy;e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}e.h3(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.fp.dc.data[g];d=i.dp;e=b.fm;p=(-1);j=FE(e,d);if(j>=0)p=e.ea.data[j];if(p>=0){e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv
=0;}e.ig(p);j=i.c5;k=i.dw;l=i.dB;m=a.fp.dE;n=i.fy;e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}e.h3(p,j,k,l,m,n);}g=g+1|0;}}a.my=1;}
function AGF(a,b,c){var d,e,f,g,h,i,j,k,l;a:{d=A4R;e=a.fp.dc.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}h.hE(g);}f=f+1|0;}}i=0;while(i<e){j=a.fp.dc.data[i].dp;k=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}l=A4R;h=b.fm;g=(-2);f=FE(h,j);if(f>=0)g=h.ea.data[f];if(g==(-2)){g=l.k5(b.bu,j);Fs(b.fm,j,g);}if(g!=(-1))k.hE(g);i=i+1|0;}}d.dk(34962,0);a.my=0;}
var Kv=I(0);
function H3(){var a=this;C.call(a);a.fs=null;a.mO=0;a.qe=0;a.fT=0;a.i3=0;a.lc=0;}
function ALV(a){return a.fs.g;}
function AFG(a){return a.fs.J;}
function APv(a,b,c,d){var e;a.fT=1;e=a.fs;e.h=0;e.g=e.J;e.B=(-1);Sa(e,b,c,d);e=a.fs;c=e.h;e.g=c;e.h=0;e.B=(-1);if(a.i3){A4R.eF(34963,c,e,a.lc);a.fT=0;}}
function AGq(a,b){a.fT=a.fT|b;return a.fs;}
function AUw(a){var b,c,d;b=a.mO;if(!b){c=new Ba;c.c=1;c.d=1;c.f=B(549);G(c);}A4R.dk(34963,b);if(a.fT){c=A4R;d=a.fs;c.eF(34963,d.g,d,a.lc);a.fT=0;}a.i3=1;}
function ARU(a){A4R.dk(34963,0);a.i3=0;}
function U$(){var a=this;C.call(a);a.fi=null;a.fx=null;a.fS=null;a.tf=0;a.tO=0;a.zg=0;a.ps=0;a.lh=0;a.m0=0;}
function AZn(a,b,c){var d=new U$();AOQ(d,a,b,c);return d;}
function AOQ(a,b,c,d){var e,f,g,h,i,j,k;a.lh=0;a.m0=0;a.zg=b;a.fi=d;c=B3(d.dE,c);if(!A0D){e=BS(c);f=e.data.length;d=new CT;g=0+f|0;d.B=(-1);d.J=f;d.g=f;CB();d.bt=A4Q;d.bB=0;d.bl=e;d.h=0;d.g=g;d.cu=0;d.bL=0;}else{if(c<0){d=new Bg;h=new N;h.b=D(16);Gh(h,h.a,B(518));P(h,h.a,c,10);i=new L;e=h.b;c=h.a;O();j=D(c);i.e=j;K(e,0,j,0,c);d.c=1;d.d=1;d.f=i;G(d);}d=new CT;e=BS(c);d.B=(-1);d.J=c;d.g=c;CB();d.bt=A4Q;d.bB=0;d.bl=e;d.h=0;d.g=c;d.cu=1;d.bL=0;d.bt=DE();}a.fS=d;a.tO=1;a.ps=!b?35048:35044;a.fx=FP(d);d=A4R;h=d.l.createBuffer();k
=d.dr;d.dr=k+1|0;CP(d.eh,k,CY(h));A4R.dk(34962,k);A4R.eF(34962,a.fS.J,null,a.ps);A4R.dk(34962,0);a.tf=k;d=a.fx;d.g=d.h;d.h=0;d.B=(-1);d=a.fS;d.g=d.h;d.h=0;d.B=(-1);}
function AH3(a){return a.fi;}
function AI6(a){return (a.fx.g*4|0)/a.fi.dE|0;}
function AG$(a,b,c,d){var e,f,g;a.lh=1;if(!a.tO){e=a.fx;e.h=0;e.g=e.J;e.B=(-1);Jv(e,b,c,d);e=a.fx;e.g=e.h;e.h=0;e.B=(-1);B_(a.fS,0);De(a.fS,a.fx.g<<2);}else{e=a.fS;f=null;g=e instanceof FD;if(g)f=FP(e);else if(e instanceof EX)f=e;if(f===null){f=new Ba;f.c=1;f.d=1;f.f=B(548);G(f);}f.h=0;f.g=f.J;f.B=(-1);B_(e,0);Jv(f,b,c,d);B_(e,0);if(!g)De(e,d);else De(e,d<<2);B_(a.fx,0);De(a.fx,d);}if(a.m0){e=A4R;f=a.fS;e.j4(34962,0,f.g,f);a.lh=0;}}
function APj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=A4R;d.dk(34962,a.tf);if(a.lh){De(a.fS,a.fx.g*4|0);e=a.fS;d.eF(34962,e.g,e,a.ps);a.lh=0;}a:{f=a.fi.dc.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.fi.dc.data[g];j=h[g];if(j>=0){e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}e.ig(j);k=i.c5;l=i.dw;m=i.dB;n=a.fi.dE;o=i.fy;e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}e.h3(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.fi.dc.data[g];p=i.dp;e=b.fm;q=(-1);j=FE(e,p);if(j>=0)q=e.ea.data[j];if(q>=0){e=A4R;if
(b.bv){Da(b,b.cB,b.cF);b.bv=0;}e.ig(q);j=i.c5;k=i.dw;l=i.dB;m=a.fi.dE;n=i.fy;e=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}e.h3(q,j,k,l,m,n);}g=g+1|0;}}a.m0=1;}
function AKh(a,b,c){var d,e,f,g,h,i,j,k,l;a:{d=A4R;e=a.fi.dc.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}h.hE(g);}f=f+1|0;}}i=0;while(i<e){j=a.fi.dc.data[i].dp;k=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}l=A4R;h=b.fm;g=(-2);f=FE(h,j);if(f>=0)g=h.ea.data[f];if(g==(-2)){g=l.k5(b.bu,j);Fs(b.fm,j,g);}if(g!=(-1))k.hE(g);i=i+1|0;}}d.dk(34962,0);a.m0=0;}
function Yv(){var a=this;C.call(a);a.h9=null;a.f4=null;a.v0=0;a.By=0;a.iq=0;a.m3=0;a.wH=0;}
function AVN(a,b){var c=new Yv();AJS(c,a,b);return c;}
function AJS(a,b,c){var d,e,f,g,h,i,j,k;a.iq=1;a.m3=0;c=c*2|0;if(!A0D){d=BS(c);e=d.data.length;f=new CT;g=0+e|0;f.B=(-1);f.J=e;f.g=e;CB();f.bt=A4Q;f.bB=0;f.bl=d;f.h=0;f.g=g;f.cu=0;f.bL=0;}else{if(c<0){f=new Bg;h=new N;h.b=D(16);Gh(h,h.a,B(518));P(h,h.a,c,10);i=new L;d=h.b;c=h.a;O();j=D(c);i.e=j;K(d,0,j,0,c);f.c=1;f.d=1;f.f=i;G(f);}f=new CT;d=BS(c);f.B=(-1);f.J=c;f.g=c;CB();f.bt=A4Q;f.bB=0;f.bl=d;f.h=0;f.g=c;f.cu=1;f.bL=0;f.bt=DE();}a.f4=f;a.By=1;a.wH=!b?35048:35044;f=Kd(f);a.h9=f;f.g=f.h;f.h=0;f.B=(-1);f=a.f4;f.g
=f.h;f.h=0;f.B=(-1);f=A4R;h=f.l.createBuffer();k=f.dr;f.dr=k+1|0;CP(f.eh,k,CY(h));A4R.dk(34963,k);A4R.eF(34963,a.f4.J,null,a.wH);A4R.dk(34963,0);a.v0=k;}
function ARk(a){return a.h9.g;}
function AE0(a){return a.h9.J;}
function AMi(a,b,c,d){var e,f;a.iq=1;e=a.h9;e.h=0;e.g=e.J;e.B=(-1);Sa(e,b,c,d);e=a.h9;e.g=e.h;e.h=0;e.B=(-1);B_(a.f4,0);De(a.f4,d<<1);if(a.m3){e=A4R;f=a.f4;e.j4(34963,0,f.g,f);a.iq=0;}}
function ATq(a,b){a.iq=a.iq|b;return a.h9;}
function AM0(a){var b,c,d;b=a.v0;if(!b){c=new Ba;c.c=1;c.d=1;c.f=B(550);G(c);}A4R.dk(34963,b);if(a.iq){De(a.f4,a.h9.g*2|0);c=A4R;d=a.f4;c.j4(34963,0,d.g,d);a.iq=0;}a.m3=1;}
function AHH(a){A4R.dk(34963,0);a.m3=0;}
function O5(){var a=this;C.call(a);a.f1=null;a.gT=null;a.rE=0;a.EA=0;a.rj=0;a.ls=0;a.oP=0;a.p$=0;a.e9=null;}
var A7o=null;function AXo(){AXo=Bi(O5);AV0();}
function ANf(a,b,c){var d=new O5();Vz(d,a,b,c);return d;}
function Vz(a,b,c,d){var e,f,g,h,i,j;AXo();a.ls=0;a.oP=0;a.p$=(-1);e=new D5;e.dT=1;e.cc=Y(16);a.e9=e;a.EA=b;a.f1=d;c=B3(d.dE/4|0,c);if(!A0D){f=CU(c);g=f.data.length;d=new It;h=0+g|0;d.B=(-1);d.J=g;d.g=g;d.h=0;d.g=h;d.jB=0;d.k0=0;d.i6=f;}else{c=c*4|0;if(c<0){d=new Bg;e=new N;e.b=D(16);Gh(e,e.a,B(518));P(e,e.a,c,10);i=new L;f=e.b;c=e.a;O();j=D(c);i.e=j;K(f,0,j,0,c);d.c=1;d.d=1;d.f=i;G(d);}e=new CT;f=BS(c);e.B=(-1);e.J=c;e.g=c;CB();e.bt=A4Q;e.bB=0;e.bl=f;e.h=0;e.g=c;e.cu=1;e.bL=0;e.bt=DE();d=FP(e);}a.gT=d;d.g=
d.h;d.h=0;d.B=(-1);d=A4R;e=d.l.createBuffer();g=d.dr;d.dr=g+1|0;CP(d.eh,g,CY(e));a.rE=g;a.rj=!b?35048:35044;d=A7o;d.h=0;d.g=d.J;d.B=(-1);A5Q.tv(1,d);d=A7o;c=d.h;if(c<d.g){d.h=c+1|0;a.p$=d.l0(c);return;}d=new Ip;d.c=1;d.d=1;G(d);}
function AGQ(a){return a.f1;}
function APo(a){return (a.gT.g*4|0)/a.f1.dE|0;}
function AG5(a,b,c,d){var e,f,g;a.ls=1;e=a.gT;f=null;g=e instanceof FD;if(g)f=FP(e);else if(e instanceof EX)f=e;if(f===null){f=new Ba;f.c=1;f.d=1;f.f=B(548);G(f);}f.h=0;f.g=f.J;f.B=(-1);B_(e,0);Jv(f,b,c,d);B_(e,0);if(!g)De(e,d);else De(e,d<<2);B_(a.gT,0);De(a.gT,d);if(a.oP){e=A4R;f=a.gT;e.eF(34962,f.g,f,a.rj);a.ls=0;}}
function AS_(a,b,c){var d;d=A5Q;d.sI(a.p$);ABW(a,b,c);if(a.ls){d.dk(34962,a.rE);b=a.gT;De(b,b.g);b=a.gT;d.eF(34962,b.g,b,a.rj);a.ls=0;}a.oP=1;}
function ABW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.e9.br;e=!d?0:1;a:{f=a.f1.dc.data.length;if(e){if(c===null){d=0;b:{while(true){if(!e)break b;if(d>=f)break b;g=a.f1.dc.data[d].dp;h=b.fm;i=(-1);e=FE(h,g);if(e>=0)i=h.ea.data[e];g=a.e9;if(d>=g.br)break;e=i!=g.cc.data[d]?0:1;d=d+1|0;}h=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,d,10);H(b,b.a,B(36));f=g.br;P(b,b.a,f,10);g=new L;c=b.b;d=b.a;O();j=D(d);g.e=j;K(c,0,j,0,d);h.c=1;h.d=1;h.f=g;G(h);}}else{j=c.data;e=j.length!=d?0:1;d=0;while(e){if(d>=f)break a;e
=j[d]!=Gt(a.e9,d)?0:1;d=d+1|0;}}}}c:{if(!e){d:{A3_.dk(34962,a.rE);if(a.e9.br){k=a.f1.dc.data.length;d=0;while(true){if(d>=k)break d;g=a.e9;if(d>=g.br)break;i=g.cc.data[d];if(i>=0){g=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}g.hE(i);}d=d+1|0;}h=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,d,10);H(b,b.a,B(36));f=g.br;P(b,b.a,f,10);g=new L;c=b.b;d=b.a;O();j=D(d);g.e=j;K(c,0,j,0,d);h.c=1;h.d=1;h.f=g;G(h);}}a.e9.br=0;d=0;while(true){if(d>=f)break c;l=a.f1.dc.data[d];if(c!==null){j=c.data;FI(a.e9,j[d]);}else{g=a.e9;h
=l.dp;m=b.fm;e=(-1);i=FE(m,h);if(i>=0)e=m.ea.data[i];FI(g,e);}i=Gt(a.e9,d);if(i>=0){g=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}g.ig(i);e=l.c5;k=l.dw;n=l.dB;o=a.f1.dE;p=l.fy;g=A4R;XH(b);g.h3(i,e,k,n,o,p);}d=d+1|0;}}}}
function AJH(a,b,c){A5Q.sI(0);a.oP=0;}
function AV0(){var b,c,d,e;if(!A0D){b=Y(1);c=b.data.length;d=new GU;e=0+c|0;d.B=(-1);d.J=c;d.g=c;d.h=0;d.g=e;d.hV=0;d.jD=0;d.ho=b;}else{d=new CT;b=BS(4);d.B=(-1);d.J=4;d.g=4;CB();d.bt=A4Q;d.bB=0;d.bl=b;d.h=0;d.g=4;d.cu=1;d.bL=0;d.bt=DE();d=Hh(d);}A7o=d;}
var NE=I(Lk);
var OF=I(H3);
function ABb(){var a=this;C.call(a);a.po=0;a.iB=null;a.ea=null;a.ux=0.0;a.pW=0;a.sg=0;a.on=0;}
function Jj(a,b){var c=new ABb();ALz(c,a,b);return c;}
function ALz(a,b,c){var d,e,f,g,h,i;if(c>0.0&&c<1.0){a.ux=c;d=Mf(b,c);a.pW=d*c|0;b=d-1|0;a.on=b;a.sg=Fg(M(b));a.iB=Bt(C,d);a.ea=Y(d);return;}e=new Bg;f=new N;f.b=D(16);H(f,f.a,B(60));Ei(f,f.a,c);g=new L;h=f.b;d=f.a;O();i=D(d);g.e=i;K(h,0,i,0,d);e.c=1;e.d=1;e.f=g;G(e);}
function FE(a,b){var c,d,e,f,g,h;if(b===null){c=new Bg;c.c=1;c.d=1;c.f=B(61);G(c);}a:{d=a.iB;if(!b.bQ){e=b.e.data;f=e.length;g=0;while(true){if(g>=f)break a;h=e[g];b.bQ=(31*b.bQ|0)+h|0;g=g+1|0;}}}h=V(Bc(Bb(M(b.bQ),F(2135587861, 2654435769)),a.sg));while(true){c=d.data[h];if(c===null)return  -(h+1|0)|0;if(BO(c,b))break;h=(h+1|0)&a.on;}return h;}
function Fs(a,b,c){var d,e;d=FE(a,b);if(d>=0){a.ea.data[d]=c;return;}d= -(d+1|0)|0;e=a.iB.data;e[d]=b;a.ea.data[d]=c;c=a.po+1|0;a.po=c;if(c>=a.pW)ACx(a,e.length<<1);}
function ACx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.iB.data.length;a.pW=b*a.ux|0;d=b-1|0;a.on=d;d=Fg(M(d));a.sg=d;e=a.iB;f=a.ea;g=Bt(C,b);a.iB=g;h=Y(b);a.ea=h;if(a.po>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k!==null){b:{l=f.data[j];if(!k.bQ){g=k.e.data;m=g.length;n=0;while(true){if(n>=m)break b;o=g[n];k.bQ=(31*k.bQ|0)+o|0;n=n+1|0;}}}b=V(Bc(Bb(M(k.bQ),F(2135587861, 2654435769)),d));while(h[b]!==null){b=(b+1|0)&a.on;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
var AA9=I();
function APp(b){var c,d,e,f,g,h,i;if(!A0D){c=CU(b);d=c.data.length;e=new It;f=0+d|0;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=f;e.jB=0;e.k0=0;e.i6=c;return e;}b=b*4|0;if(b>=0){e=new CT;c=BS(b);e.B=(-1);e.J=b;e.g=b;CB();e.bt=A4Q;e.bB=0;e.bl=c;e.h=0;e.g=b;e.cu=1;e.bL=0;e.bt=DE();return FP(e);}e=new Bg;g=new N;g.b=D(16);H(g,g.a,B(518));P(g,g.a,b,10);h=new L;c=g.b;d=g.a;O();i=D(d);h.e=i;K(c,0,i,0,d);e.c=1;e.d=1;e.f=h;G(e);}
var ER=I(0);
function CT(){var a=this;FD.call(a);a.cu=0;a.bL=0;}
function Td(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.bl.data[a.bB+b|0];c=new Bh;d=a.g;e=new N;e.b=D(16);H(e,e.a,B(551));P(e,e.a,b,10);H(e,e.a,B(524));P(e,e.a,d,10);d=e.a;Bo(e,d,d+1|0);f=e.b;f.data[d]=41;g=new L;d=e.a;O();h=D(d);g.e=h;K(f,0,h,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function Y7(a){var b,c,d,e,f,g,h,i,j;if(a.bL){b=new Eu;b.c=1;b.d=1;G(b);}a:{c=a.g;d=a.h;e=c-d|0;if(d>0){c=a.bB;f=c+d|0;g=0;while(true){if(g>=e)break a;h=a.bl.data;i=c+1|0;j=f+1|0;h[c]=h[f];g=g+1|0;c=i;f=j;}}}a.h=e;a.g=a.J;a.B=(-1);return a;}
function Kd(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/2|0;e=a.bt;CB();if(e!==A4Q){e=new Nh;f=a.bB+c|0;c=a.bL;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=d;e.i_=f;e.gS=a;e.p5=c;return e;}e=new OR;b=a.bB+c|0;g=a.bL;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=d;e.i_=b;e.gS=a;e.p5=g;return e;}
function ACn(a,b){var c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.g){c=a.bl.data;b=a.bB+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;h=a.bt;CB();if(h!==A4Q)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}i=new Bh;d=a.g-3|0;h=new N;h.b=D(16);H(h,h.a,B(551));P(h,h.a,b,10);H(h,h.a,B(524));P(h,h.a,d,10);d=h.a;Bo(h,d,d+1|0);c=h.b;c.data[d]=41;j=new L;d=h.a;O();k=D(d);j.e=k;K(c,0,k,0,d);i.c=1;i.d=1;i.f=j;G(i);}
function WN(a,b,c){var d,e,f,g,h;if(a.bL){d=new Eu;d.c=1;d.d=1;G(d);}if(b>=0&&(b+3|0)<a.g){d=a.bt;CB();if(d!==A4Q){e=a.bl.data;b=a.bB+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.bl.data;b=a.bB+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new Bh;c=a.g-3|0;f=new N;f.b=D(16);H(f,f.a,B(551));P(f,f.a,b,10);H(f,f.a,B(524));P(f,f.a,c,10);c=f.a;Bo(f,c,c+1|0);e=f.b;e.data[c]=41;g=new L;c=f.a;O();h=D(c);g.e=h;K(e,
0,h,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function Hh(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/4|0;e=a.bt;CB();if(e!==A4Q){e=new NC;f=a.bB+c|0;c=a.bL;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=d;e.iQ=f;e.iP=a;e.q4=c;return e;}e=new Qv;b=a.bB+c|0;g=a.bL;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=d;e.iQ=b;e.iP=a;e.q4=g;return e;}
function FP(a){var b,c,d,e,f,g;b=a.g;c=a.h;d=(b-c|0)/4|0;e=a.bt;CB();if(e!==A7p){e=new Ns;f=a.bB+c|0;c=a.bL;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=d;e.iz=f;e.g0=a;e.sy=c;return e;}e=new Pp;b=a.bB+c|0;g=a.bL;e.B=(-1);e.J=d;e.g=d;e.h=0;e.g=d;e.iz=b;e.g0=a;e.sy=g;return e;}
function AWg(a){return a.bl.data;}
var Kx=I();
var Hx=I(EF);
function AR_(a){a.h=0;a.g=a.J;a.B=(-1);return a;}
function AEY(a,b){B_(a,b);return a;}
function APe(a){a.h=0;a.g=a.J;a.B=(-1);return a;}
function GW(){C.call(this);this.wq=null;}
var A4Q=null;var A7p=null;var A7q=null;function CB(){CB=Bi(GW);AV2();}
function DE(){var b,c;CB();if(A7q===null){b=new $rt_globals.ArrayBuffer(2);c=new $rt_globals.Int16Array(b);0;c[0]=1;A7q=(new $rt_globals.Int8Array(b))[0]?A7p:A4Q;}return A7q;}
function AV2(){var b;b=new GW;CB();b.wq=B(552);A4Q=b;b=new GW;b.wq=B(553);A7p=b;}
var EX=I(EF);
function Jv(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.dN()){e=new Eu;e.c=1;e.d=1;G(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new Gd;e.c=1;e.d=1;G(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(554));P(j,j.a,i,10);H(j,j.a,B(527));P(j,j.a,f,10);k=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.mT(g,h[c]);i=i+1|0;g=l;c=f;}a.h=a.h+d|0;return a;}e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(528));P(j,j.a,d,10);H(j,j.a,B(529));k
=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}}b=b.data;e=new Bh;d=b.length;j=new N;j.b=D(16);H(j,j.a,B(530));P(j,j.a,c,10);H(j,j.a,B(524));P(j,j.a,d,10);d=j.a;Bo(j,d,d+1|0);h=j.b;h.data[d]=41;k=new L;d=j.a;O();b=D(d);k.e=b;K(h,0,b,0,d);e.c=1;e.d=1;e.f=k;G(e);}
function AOm(a){a.h=0;a.g=a.J;a.B=(-1);return a;}
function AHc(a){a.g=a.h;a.h=0;a.B=(-1);return a;}
function AK$(a,b){De(a,b);return a;}
function APA(a,b){B_(a,b);return a;}
function ALr(a){a.g=a.h;a.h=0;a.B=(-1);return a;}
function AV4(a){a.h=0;a.g=a.J;a.B=(-1);return a;}
function AQR(a,b){De(a,b);return a;}
function AUU(a,b){B_(a,b);return a;}
var XE=I();
var HA=I(EF);
function Sa(a,b,c,d){var e,f,g,h,i,j,k,l;if(a.dN()){e=new Eu;e.c=1;e.d=1;G(e);}f=a.g;g=a.h;if((f-g|0)<d){e=new Gd;e.c=1;e.d=1;G(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(555));P(j,j.a,i,10);H(j,j.a,B(527));P(j,j.a,f,10);k=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.p7(g,h[c]);i=i+1|0;g=l;c=f;}a.h=a.h+d|0;return a;}e=new Bh;j=new N;j.b=D(16);H(j,j.a,B(528));P(j,j.a,d,10);H(j,j.a,B(529));k
=new L;b=j.b;d=j.a;O();h=D(d);k.e=h;K(b,0,h,0,d);e.c=1;e.d=1;e.f=k;G(e);}}b=b.data;e=new Bh;d=b.length;j=new N;j.b=D(16);H(j,j.a,B(530));P(j,j.a,c,10);H(j,j.a,B(524));P(j,j.a,d,10);d=j.a;Bo(j,d,d+1|0);h=j.b;h.data[d]=41;k=new L;d=j.a;O();b=D(d);k.e=b;K(h,0,b,0,d);e.c=1;e.d=1;e.f=k;G(e);}
function AUv(a){a.h=0;a.g=a.J;a.B=(-1);return a;}
function ADc(a){a.g=a.h;a.h=0;a.B=(-1);return a;}
function ARF(a,b){De(a,b);return a;}
function ASk(a,b){B_(a,b);return a;}
function ATr(a){a.g=a.h;a.h=0;a.B=(-1);return a;}
function AVL(a){a.h=0;a.g=a.J;a.B=(-1);return a;}
function AOx(a,b){De(a,b);return a;}
function AFK(a,b){B_(a,b);return a;}
var Zs=I();
var QE=I(0);
function KT(){var a=this;C.call(a);a.uM=null;a.gm=0;a.f_=0;a.iS=null;a.jL=null;a.vP=0;a.hR=0;}
var A7r=0;function AXP(a,b,c,d){var e=new KT();AIJ(e,a,b,c,d);return e;}
function AIJ(a,b,c,d,e){a.gm=0;a.f_=0;a.hR=0;a.uM=b;a.jL=c;a.iS=d;a.vP=e;if(c!==null){b=RP(a,c);a.jL=b;c=b.bO;a.gm=c===null?b.dd:c.c3;a.f_=c===null?b.df:c.c2;if(d===null){if(c===null){HB();b=A4U;}else b=IA(c.cn);a.iS=b;}}}
function Oh(a){var b,c;if(a.hR){b=new Ba;b.c=1;b.d=1;b.f=B(556);G(b);}if(a.jL===null){b=RP(a,ARm(a.uM));a.jL=b;c=b.bO;a.gm=c===null?b.dd:c.c3;a.f_=c===null?b.df:c.c2;if(a.iS===null){if(c===null){HB();b=A4U;}else b=IA(c.cn);a.iS=b;}}a.hR=1;}
function RP(a,b){var c,d,e,f,g,h,i,j;a:{if(A4R===null&&A7r){c=b.bO;d=c===null?b.dd:c.c3;e=c===null?b.df:c.c2;f=K1(d);g=K1(e);if(d!=f)break a;if(e!=g)break a;}return b;}h=new H$;c=b.bO;if(c===null){HB();c=A4U;}else c=IA(c.cn);J0(h,f,g,c);c=h.bO;if(c===null){FR(b);Ki(h,b.fO,0,0,d,e,0,0,d,e);}else{i=b.bO.cP;j=c.cP;Mq(i,j,0,0,d,e,0,0,d,e);}if(b.i5){c=new Ba;c.c=1;c.d=1;c.f=B(48);G(c);}JE();Iy(A4X,b.ku);c=b.bO;if(c!==null)Mj(c.cP);b.i5=1;return h;}
function H$(){var a=this;C.call(a);a.dd=0;a.df=0;a.fO=null;a.cL=null;a.ku=0;a.jv=null;a.xS=0;a.xU=0;a.xW=0;a.xV=0.0;a.ny=null;a.kX=null;a.xt=null;a.D5=null;a.iR=null;a.kd=null;a.tR=0;a.bO=null;a.i5=0;}
var A7s=null;function Qm(){Qm=Bi(H$);ANh();}
function ARm(a){var b=new H$();TJ(b,a);return b;}
function A7t(a,b,c){var d=new H$();J0(d,a,b,c);return d;}
function TJ(a,b){var c,d,e,f,g,h,i,j;Qm();a.xS=255;a.xU=255;a.xW=255;a.ny=LS(255,255,255,a.xV);Iq();a.kX=A7u;AAE();a.xt=A7v;a.tR=0;c=b.c$;d=b.jT.kZ;e=Df(d,c);d=e<0?null:d.cZ.data[e];if(A4c.ey.rK){f=AQY(d.dO);a.bO=AX_(f,0,f.data.length,0);Kn(a,(-1),(-1),null,null);}else{Kn(a,(-1),(-1),d.rN,null);if(a.iR===null){d=new Ba;g=b.c$;b=new N;b.b=D(16);H(b,b.a,B(557));e=b.a;if(g===null)g=B(2);H(b,e,g);H(b,b.a,B(558));h=new L;i=b.b;j=b.a;O();f=D(j);h.e=f;K(i,0,f,0,j);d.c=1;d.d=1;d.f=h;G(d);}}}
function J0(a,b,c,d){Qm();a.xS=255;a.xU=255;a.xW=255;a.ny=LS(255,255,255,a.xV);Iq();a.kX=A7u;AAE();a.xt=A7v;a.tR=0;Kn(a,b,c,null,null);}
function Kn(a,b,c,d,e){var f,g,h;if(e!==null){a.kd=e;a.dd=e.getWidth();a.df=e.getHeight();}else if(d===null){a.dd=b;a.df=c;}else{a.iR=d;a.dd=d.width;a.df=d.height;}if(!A0D){f=BS(4);g=f.data.length;d=new CT;h=0+g|0;d.B=(-1);d.J=g;d.g=g;CB();d.bt=A4Q;d.bB=0;d.bl=f;d.h=0;d.g=h;d.cu=0;d.bL=0;}else{d=new CT;f=BS(4);d.B=(-1);d.J=4;d.g=4;CB();d.bt=A4Q;d.bB=0;d.bl=f;d.h=0;d.g=4;d.cu=1;d.bL=0;d.bt=DE();}a.jv=d;JE();c=A59;A59=c+1|0;a.ku=c;WN(d,0,c);CP(A4X,a.ku,a);}
function XM(a){var b,c;Jb();b=A5M.ez.document.createElement("canvas");a.fO=b;c=a.dd;b.width=c;b=a.fO;c=a.df;b.height=c;b=a.fO.getContext("2d");a.cL=b;Qm();Hr();c=$rt_ustr(A4W.u);b.globalCompositeOperation=c;}
function LS(b,c,d,e){var f,g,h,i,j;Qm();f=new N;f.b=D(16);H(f,f.a,B(559));P(f,f.a,b,10);g=f.a;Bo(f,g,g+1|0);f.b.data[g]=44;P(f,f.a,c,10);c=f.a;Bo(f,c,c+1|0);f.b.data[c]=44;P(f,f.a,d,10);c=f.a;Bo(f,c,c+1|0);f.b.data[c]=44;Ei(f,f.a,e);d=f.a;Bo(f,d,d+1|0);h=f.b;h.data[d]=41;i=new L;c=f.a;O();j=D(c);i.e=j;K(h,0,j,0,c);return i;}
function FR(a){var b,c;if(a.fO===null){XM(a);if(a.iR!==null){b=a.cL;Hr();c=$rt_ustr(A7w.dn);b.globalCompositeOperation=c;b=a.cL;c=a.iR;b.drawImage(c,0.0,0.0);b=a.cL;c=$rt_ustr(A4W.dn);b.globalCompositeOperation=c;}if(a.kd!==null){c=a.cL;Hr();b=$rt_ustr(A7w.dn);c.globalCompositeOperation=b;b=a.cL;c=a.kd;b.drawImage(c,0.0,0.0);b=a.cL;c=$rt_ustr(A4W.dn);b.globalCompositeOperation=c;}}}
function AAT(a,b,c,d,e,f,g,h,i,j){var k,l,m;k=a.bO;if(k===null){FR(b);Ki(a,b.fO,c,d,e,f,g,h,i,j);}else{l=b.bO.cP;m=k.cP;Mq(l,m,c,d,e,f,g,h,i,j);}}
function K$(a){var b;b=a.bO;if(b===null)return a.dd;return b.c3;}
function Lx(a){var b;b=a.bO;if(b===null)return a.df;return b.c2;}
function N8(a){var b,c;if(a.i5){b=new Ba;b.c=1;b.d=1;b.f=B(48);G(b);}JE();Iy(A4X,a.ku);c=a.bO;if(c!==null)Mj(c.cP);a.i5=1;}
function ZE(a){var b,c,d,e,f,g,h;b=a.bO;if(b===null)return 6408;a:{c=b.cn;switch(c){case 1:break;case 2:c=6410;break a;case 3:case 5:c=6407;break a;case 4:case 6:c=6408;break a;default:b=new Ba;d=new N;d.b=D(16);DY(d,d.a,Ea(B(49)));P(d,d.a,c,10);e=new L;f=d.b;g=d.a;h=D(g);e.e=h;K(f,0,h,0,g);b.c=1;b.d=1;b.f=e;G(b);}c=6406;}return c;}
function XW(a){var b,c,d,e,f,g,h;b=a.bO;if(b===null)return 6408;a:{c=b.cn;switch(c){case 1:break;case 2:c=6410;break a;case 3:case 5:c=6407;break a;case 4:case 6:c=6408;break a;default:b=new Ba;d=new N;d.b=D(16);H(d,d.a,B(49));P(d,d.a,c,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);b.c=1;b.d=1;b.f=e;G(b);}c=6406;}return c;}
function ABT(a){var b,c,d,e,f,g,h;b=a.bO;if(b===null)return 5121;a:{c=b.cn;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break a;case 6:c=32819;break a;default:b=new Ba;d=new N;d.b=D(16);H(d,d.a,B(49));P(d,d.a,c,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);b.c=1;b.d=1;b.f=e;G(b);}c=5121;}return c;}
function ABB(a){return a.jv;}
function Tv(a,b){var c,d;a.kX=b;c=a.bO;if(c===null){FR(a);b=a.cL;Hr();c=$rt_ustr(A4W.u);b.globalCompositeOperation=c;}else{Iq();d=b!==A4V?1:0;Q5(c.cP,d);}}
function Ki(a,b,c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v;FR(a);k=a.kX;Iq();if(k===A4V){a:{l=a.cL;k=$rt_ustr(A7s);l.fillStyle=k;l=a.cL;k=$rt_ustr(A7s);l.strokeStyle=k;l=a.cL;k="destination-out";l.globalCompositeOperation=k;a.cL.beginPath();m=a.cL;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);XT();l=A7x;FR(a);AXv();switch(A7y.data[l.n]){case 1:break;case 2:a.cL.stroke();break a;default:break a;}a.cL.fill();}a.cL.closePath();r=a.cL;l=$rt_ustr(a.ny);r.fillStyle=l;r=a.cL;k=$rt_ustr(a.ny);r.strokeStyle=k;r=a.cL;Hr();l=$rt_ustr(A4W.dn);r.globalCompositeOperation
=l;}if(e&&f&&i&&j){l=a.cL;n=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;l.drawImage(b,n,o,p,q,s,t,u,v);}a.D5=null;}
function ANh(){A7s=LS(255,255,255,1.0);}
var HV=I(Hx);
function ATx(a){var b,c;b=a.h;if(b<a.g){a.h=b+1|0;return a.l0(b);}c=new Ip;c.c=1;c.d=1;G(c);}
function ET(a,b){var c,d;if(a.dN()){c=new Eu;c.c=1;c.d=1;G(c);}d=a.h;if(d<a.g){a.h=d+1|0;a.nX(d,b);return a;}c=new Gd;c.c=1;c.d=1;G(c);}
function FM(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.l0(b);c=new Bh;d=a.g;e=new N;e.b=D(16);H(e,e.a,B(551));P(e,e.a,b,10);H(e,e.a,B(524));P(e,e.a,d,10);d=e.a;Bo(e,d,d+1|0);f=e.b;f.data[d]=41;g=new L;d=e.a;O();h=D(d);g.e=h;K(f,0,h,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function Sf(a,b,c){var d,e,f,g,h;if(a.dN()){d=new Eu;d.c=1;d.d=1;G(d);}if(b>=0&&b<a.g){a.nX(b,c);return a;}d=new Bh;c=a.g;e=new N;e.b=D(16);H(e,e.a,B(551));P(e,e.a,b,10);H(e,e.a,B(524));P(e,e.a,c,10);c=e.a;Bo(e,c,c+1|0);f=e.b;f.data[c]=41;g=new L;c=e.a;O();h=D(c);g.e=h;K(f,0,h,0,c);d.c=1;d.d=1;d.f=g;G(d);}
function ANR(a){return a.dN();}
function GU(){var a=this;HV.call(a);a.jD=0;a.hV=0;a.ho=null;}
function APO(a,b){return a.ho.data[b+a.hV|0];}
function AN6(a,b,c){a.ho.data[b+a.hV|0]=c;}
function AEO(a){return a.jD;}
var HJ=I(EX);
function PL(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.sC(b);c=new Bh;d=a.g;e=new N;e.b=D(16);H(e,e.a,B(551));P(e,e.a,b,10);H(e,e.a,B(524));P(e,e.a,d,10);d=e.a;Bo(e,d,d+1|0);f=e.b;f.data[d]=41;g=new L;d=e.a;O();h=D(d);g.e=h;K(f,0,h,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function Mx(a,b,c){var d,e,f,g,h,i;if(a.dN()){d=new Eu;d.c=1;d.d=1;G(d);}if(b>=0&&b<a.g){a.mT(b,c);return a;}d=new Bh;e=a.g;f=new N;f.b=D(16);H(f,f.a,B(551));P(f,f.a,b,10);H(f,f.a,B(524));P(f,f.a,e,10);e=f.a;Bo(f,e,e+1|0);g=f.b;g.data[e]=41;h=new L;e=f.a;O();i=D(e);h.e=i;K(g,0,i,0,e);d.c=1;d.d=1;d.f=h;G(d);}
function AJk(a){return a.dN();}
function It(){var a=this;HJ.call(a);a.k0=0;a.jB=0;a.i6=null;}
function AQ3(a,b){return a.i6.data[b+a.jB|0];}
function AP1(a,b,c){a.i6.data[b+a.jB|0]=c;}
function AQe(a){return a.k0;}
var Gv=I(BQ);
var A4V=null;var A7u=null;var A7z=null;function Iq(){Iq=Bi(Gv);ALb();}
function ALb(){var b,c;b=new Gv;Iq();b.u=B(560);b.n=0;A4V=b;c=new Gv;c.u=B(561);c.n=1;A7u=c;A7z=U(Gv,[b,c]);}
var FY=I(BQ);
var A7A=null;var A7v=null;var A7B=null;function AAE(){AAE=Bi(FY);ASw();}
function ASw(){var b,c;b=new FY;AAE();b.u=B(562);b.n=0;A7A=b;c=new FY;c.u=B(563);c.n=1;A7v=c;A7B=U(FY,[b,c]);}
function JW(){var a=this;Kx.call(a);a.jT=null;a.c$=null;a.kk=null;}
function AQ8(a,b,c){var d=new JW();K4(d,a,b,c);return d;}
function K4(a,b,c,d){var e,f,g,h,i,j;LG();if(d!==A3$&&d!==A7C&&d!==A7D){b=new Ba;c=new N;c.b=D(16);H(c,c.a,B(564));H(c,c.a,d===null?B(2):d.u);H(c,c.a,B(565));d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);b.c=1;b.d=1;b.f=d;G(b);}a.jT=b;b=L5(c,B(566),B(102));if(OU(b,B(102))){g=b.e;h=g.data.length;i=h-1|0;j=Bw(0,i);if(j>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!j)b=A36;else if(i!=h){b=new L;i=i-0|0;e=D(i);b.e=e;K(g,0,e,0,i);}}a.c$=b;a.kk=d;}
function Tn(a){return a.c$;}
function ADG(a){var b,c,d,e,f,g;b=a.c$;c=F2(b,47,b.e.data.length-1|0);if(c<0)b=a.c$;else{b=a.c$;c=c+1|0;d=b.e;e=d.data.length;f=Bw(c,e);if(f>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!f)b=A36;else if(!(!c&&e==e)){b=new L;f=e-c|0;g=D(f);b.e=g;K(d,c,g,0,f);}}e=F2(b,46,b.e.data.length-1|0);if(e==(-1))return b;f=Bw(0,e);if(f>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!f)b=A36;else{g=b.e;if(e!=g.data.length){b=new L;f=e-0|0;d=D(f);b.e=d;K(g,0,d,0,f);}}return b;}
function Z3(a){var b,c,d,e,f,g,h,i;b=a.kk;LG();if(b===A7D){if(A0N===null){c=new Nq;b=new JQ;d=new Pq;e=A4c.ey.yi;d.p2=$rt_globals.window.localStorage;d.pz=e;AX9();b.i4=d;c.u9=b;b=new JQ;d=new QG;e=new CJ;e.b2=1;e.C=Bt(C,16);d.vj=e;d.sa=Fy(16,0.800000011920929);b.i4=d;c.p_=b;A0N=c;}b=A0N;return !ACC(b.p_,a)?Si(b.u9,a):Si(b.p_,a);}c=UT(a.jT,a.c$);if(c!==null)return c;c=new Ba;b=a.c$;d=new N;d.b=D(16);f=d.a;if(b===null)b=B(2);H(d,f,b);H(d,d.a,B(567));b=new L;g=d.b;h=d.a;O();i=D(h);b.e=i;K(g,0,i,0,h);c.c=1;c.d=
1;c.f=b;G(c);}
function Tk(a,b){var c,d,e,f,g,h,i,j,k;c=new JW;d=a.jT;e=a.c$;if(e.e.data.length?0:1)e=B(43);else{f=!OU(e,B(102))?B(102):B(43);g=new N;g.b=D(16);H(g,g.a,e);H(g,g.a,f);e=new L;h=g.b;i=g.a;j=D(i);e.e=j;K(h,0,j,0,i);}g=new N;g.b=D(16);H(g,g.a,e);k=g.a;if(b===null)b=B(2);H(g,k,b);b=new L;j=g.b;i=g.a;O();h=D(i);b.e=h;K(j,0,h,0,i);K4(c,d,b,a.kk);return c;}
function Tw(a){var b,c,d,e,f,g;b=a.c$;c=OQ(b,B(102),b.e.data.length);d=B(43);if(c>0){d=a.c$;e=Bw(0,c);if(e>0){d=new Bh;d.c=1;d.d=1;G(d);}if(!e)d=A36;else{f=d.e;if(c!=f.data.length){d=new L;e=c-0|0;g=D(e);d.e=g;K(f,0,g,0,e);}}}return AQ8(a.jT,d,a.kk);}
function AV3(a){return a.c$;}
function YC(){var a=this;C.call(a);a.cP=0;a.c3=0;a.c2=0;a.cn=0;a.jw=null;a.lU=null;}
function AX_(a,b,c,d){var e=new YC();AIM(e,a,b,c,d);return e;}
function AXl(a,b,c){var d=new YC();AV6(d,a,b,c);return d;}
function ATz(b){var c,d,e,f,g,h;switch(b){case 1:break;case 2:return 6410;case 3:case 5:return 6407;case 4:case 6:return 6408;default:c=new Ba;d=new N;d.b=D(16);H(d,d.a,B(49));P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}return 6406;}
function ATW(b){var c,d,e,f,g,h;switch(b){case 1:case 2:case 3:case 4:break;case 5:return 33635;case 6:return 32819;default:c=new Ba;d=new N;d.b=D(16);H(d,d.a,B(49));P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}return 5121;}
function AIM(a,b,c,d,e){var f,g,h,i,j,k;f=Y(4);a.jw=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new $rt_globals.Array(i);j=0;while(j<i){k=b[j];j;h[j]=k;j=j+1|0;}}a.lU=ATk(g,h,c,d);b=a.jw.data;a.cP=b[0];a.c3=b[1];a.c2=b[2];c=b[3];a.cn=c;if(e&&e!=c)U_(a,e);}
function AV6(a,b,c,d){var e;e=Y(4);a.jw=e;a.lU=ARK(e.data,b,c,d);e=a.jw.data;a.cP=e[0];a.c3=e[1];a.c2=e[2];a.cn=e[3];}
function U_(a,b){var c,d,e,f,g;c=AXl(a.c3,a.c2,b);Q5(c.cP,0);d=a.c3;e=a.c2;f=a.cP;g=c.cP;Mq(f,g,0,0,d,e,0,0,d,e);Mj(a.cP);a.cP=c.cP;a.cn=c.cn;a.c2=c.c2;a.jw=c.jw;a.lU=c.lU;a.c3=c.c3;}
function ATk(b,c,d,e){var cBufferSize=c.length*$rt_globals.Uint8Array.BYTES_PER_ELEMENT;var cBuffer=$rt_globals.Gdx._malloc(cBufferSize);$rt_globals.Gdx.writeArrayToMemory(c,cBuffer);var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);$rt_globals.Gdx._free(cBuffer);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]
=height;b[3]=format;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
function ARK(b,c,d,e){var pixmap=$rt_globals.Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=$rt_globals.Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=$rt_globals.Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=$rt_globals.Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=$rt_globals.Gdx.HEAPU8.slice(startIndex,
endIndex);return newArray;}
function Mj(b){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_free(nativeObject);}
function Mq(b,c,d,e,f,g,h,i,j,k){var nativeObjectSrc=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);var nativeObjectDst=$rt_globals.Gdx.wrapPointer(c,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
function Q5(b,c){var nativeObject=$rt_globals.Gdx.wrapPointer(b,$rt_globals.Gdx.gdx2d_pixmap);$rt_globals.Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
var Is=I(HA);
function AA$(a,b){var c,d,e,f,g,h;if(b>=0&&b<a.g)return a.sB(b);c=new Bh;d=a.g;e=new N;e.b=D(16);H(e,e.a,B(551));P(e,e.a,b,10);H(e,e.a,B(524));P(e,e.a,d,10);d=e.a;Bo(e,d,d+1|0);f=e.b;f.data[d]=41;g=new L;d=e.a;O();h=D(d);g.e=h;K(f,0,h,0,d);c.c=1;c.d=1;c.f=g;G(c);}
function ANa(a){return a.dN();}
function J3(){var a=this;Is.call(a);a.mo=0;a.ly=0;a.kI=null;}
function AKO(a,b){return a.kI.data[b+a.ly|0];}
function AMB(a,b,c){a.kI.data[b+a.ly|0]=c;}
function AJb(a){return a.mo;}
var Z1=I();
function Dy(){BQ.call(this);this.fH=0;}
var A4a=null;var A7E=null;var A7F=null;var A7G=null;var A7H=null;var A7I=null;var A7J=null;var A7K=null;function AIF(){AIF=Bi(Dy);AHo();}
function AHo(){var b,c,d,e,f,g,h;b=new Dy;AIF();b.u=B(568);b.n=0;b.fH=9728;A4a=b;c=new Dy;c.u=B(569);c.n=1;c.fH=9729;A7E=c;d=new Dy;d.u=B(570);d.n=2;d.fH=9987;A7F=d;e=new Dy;e.u=B(571);e.n=3;e.fH=9984;A7G=e;f=new Dy;f.u=B(572);f.n=4;f.fH=9985;A7H=f;g=new Dy;g.u=B(573);g.n=5;g.fH=9986;A7I=g;h=new Dy;h.u=B(574);h.n=6;h.fH=9987;A7J=h;A7K=U(Dy,[b,c,d,e,f,g,h]);}
function Ft(){BQ.call(this);this.mc=0;}
var A7L=null;var A4b=null;var A7M=null;var A7N=null;function AES(){AES=Bi(Ft);AL0();}
function AL0(){var b,c,d;b=new Ft;AES();b.u=B(575);b.n=0;b.mc=33648;A7L=b;c=new Ft;c.u=B(576);c.n=1;c.mc=33071;A4b=c;d=new Ft;d.u=B(577);d.n=2;d.mc=10497;A7M=d;A7N=U(Ft,[b,c,d]);}
var WA=I();
function AVT(a,b){b=a.n3(b);BM();return b===null?null:b instanceof $rt_objcls()&&b instanceof DN?(b[A5n]===true?b:b.bb):b;}
function AH$(a){return a.Dr();}
function HM(){var a=this;HJ.call(a);a.g0=null;a.sy=0;a.iz=0;}
function AQr(a){return a.sy;}
function ARs(a){return a.g0.bl.data;}
var Ns=I(HM);
function AND(a,b){var c;c=a.g0.bl.data;b=a.iz+(b*4|0)|0;return $rt_intBitsToFloat((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);}
function ARo(a,b,c){var d,e;d=($rt_globals.isNaN(c)?1:0)?2143289344:$rt_floatToRawIntBits(c);e=a.g0.bl.data;b=a.iz+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;}
var Pp=I(HM);
function AE1(a,b){var c;c=a.g0.bl.data;b=a.iz+(b*4|0)|0;return $rt_intBitsToFloat(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);}
function ANr(a,b,c){var d,e;d=($rt_globals.isNaN(c)?1:0)?2143289344:$rt_floatToRawIntBits(c);e=a.g0.bl.data;b=a.iz+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;}
function Hv(){var a=this;Is.call(a);a.gS=null;a.p5=0;a.i_=0;}
function ALK(a){return a.p5;}
function ART(a){return a.gS.bl.data;}
var Nh=I(Hv);
function AIZ(a,b){var c;c=a.gS.bl.data;b=a.i_+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;}
function AH4(a,b,c){var d;d=a.gS.bl.data;b=a.i_+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;}
var OR=I(Hv);
function APF(a,b){var c;c=a.gS.bl.data;b=a.i_+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;}
function AI1(a,b,c){var d;d=a.gS.bl.data;b=a.i_+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;}
var GT=I(BU);
var Eu=I(GT);
function In(){var a=this;HV.call(a);a.iP=null;a.q4=0;a.iQ=0;}
function ANu(a){return a.q4;}
var NC=I(In);
function AKK(a,b){var c;c=a.iP.bl.data;b=a.iQ+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;}
function AEN(a,b,c){var d;d=a.iP.bl.data;b=a.iQ+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;}
var Qv=I(In);
function AS7(a,b){var c;c=a.iP.bl.data;b=a.iQ+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;}
function AGG(a,b,c){var d;d=a.iP.bl.data;b=a.iQ+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;}
var Ip=I(BU);
var D9=I(BQ);
var A7C=null;var A3$=null;var A7O=null;var A7P=null;var A7D=null;var A7Q=null;function LG(){LG=Bi(D9);AJ5();}
function AJ5(){var b,c,d,e,f;b=new D9;LG();b.u=B(578);b.n=0;A7C=b;c=new D9;c.u=B(579);c.n=1;A3$=c;d=new D9;d.u=B(580);d.n=2;A7O=d;e=new D9;e.u=B(581);e.n=3;A7P=e;f=new D9;f.u=B(582);f.n=4;A7D=f;A7Q=U(D9,[b,c,d,e,f]);}
function Fc(){var a=this;Lt.call(a);a.kx=null;a.ka=null;}
function Ur(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=a.kx;e=0;f=0;g=a.ka;a:{while(true){if((e+32|0)>f){h=b.h;i=b.g;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;Nt(b,d,j,f-j|0);e=0;}}j=c.h;m=c.g;if(!(j>=m?0:1)){j=b.h>=b.g?0:1;n=!j&&e>=f?A0J:A0K;break a;}k=g.data;h=m-j|0;m=k.length;if(h<m)m=h;o=new Nx;o.iD=b;o.fC=c;n=a.mw(d,e,f,g,0,m,o);e=o.js;l=o.jE;if(n===null){j=b.h>=b.g?0:1;if(!j&&e>=f)n=A0J;else if(!(c.h>=c.g?0:1)&&e>=f)n=A0K;}Sp(c,g,0,l);if
(n!==null)break;}}B_(b,b.h-(f-e|0)|0);return n;}
var OA=I(Fc);
function ANl(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;n=h.fC;if((n.g-n.h|0)<2?0:1)break a;i=A0K;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{o=l&64512;m=Bw(o,55296);c=m?0:1;if(!(!c&&!(o!=56320?0:1)?0:1)){if((f+3|0)>g){j=j+(-1)|0;n=h.fC;if((n.g-n.h|0)<3?0:1)break a;i=A0K;break a;}k=e.data;c=f+1|0;k[f]=(224|l>>12)<<24>>24;f
=c+1|0;k[c]=(128|l>>6&63)<<24>>24;m=f+1|0;k[f]=(128|l&63)<<24>>24;}else{if(!(m?0:1)){i=new CK;i.by=2;i.bR=1;break a;}if(j>=d){n=h.iD;if(n.h>=n.g?0:1)break a;i=A0J;break a;}p=j+1|0;m=k[j];if(!((m&64512)!=56320?0:1)){j=p+(-2)|0;i=new CK;i.by=2;i.bR=1;break a;}if((f+4|0)>g){j=p+(-2)|0;n=h.fC;if((n.g-n.h|0)<4?0:1)break a;i=A0K;break a;}k=e.data;o=((l&1023)<<10|m&1023)+65536|0;m=f+1|0;k[f]=(240|o>>18)<<24>>24;c=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=c+1|0;k[c]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j
=p;}}c=j;f=m;}j=c;}h.js=j;h.jE=f;return i;}
var Fj=I(Db);
function HE(){C.call(this);this.uL=null;}
function ZG(){var a=this;HE.call(a);a.lZ=null;a.nu=null;a.iy=0;a.mS=0;a.rm=0;a.w7=0;}
function AYu(a,b){var c=new ZG();AJD(c,a,b);return c;}
function AJD(a,b,c){a.uL=new C;a.w7=(-1);if(c<0){b=new Bg;b.c=1;b.d=1;G(b);}a.lZ=b;if(64>c)c=64;a.nu=D(c);}
function YD(a){var b;b=a.lZ;if(b!==null){b.rS.o6();a.lZ=null;return;}b=new Fj;b.c=1;b.d=1;G(b);}
function IJ(a){var b,c,d,e,f,g;if(a.lZ===null){b=new Fj;b.c=1;b.d=1;G(b);}if(a.rm&&a.iy>=a.mS)return null;b=new N;b.b=D(16);a:{while(true){if(a.iy>=a.mS&&!Qk(a,0))break a;c=a.nu.data;d=a.iy;e=d+1|0;a.iy=e;d=c[d];if(d==10)break;if(d==13){if(e>=a.mS&&!Qk(a,0))break a;c=a.nu.data;e=a.iy;if(c[e]!=10)break a;a.iy=e+1|0;break a;}e=b.a;Bo(b,e,e+1|0);b.b.data[e]=d;}}f=new L;c=b.b;d=b.a;O();g=D(d);f.e=g;K(c,0,g,0,d);return f;}
function Qk(a,b){var c,d;if(a.rm)return 0;a:{while(true){c=a.nu;d=c.data.length;if(b>=d)break a;d=Xx(a.lZ,c,b,d-b|0);if(d==(-1)){a.rm=1;break a;}if(!d)break;b=b+d|0;}}a.mS=b;a.iy=0;a.w7=(-1);return 1;}
function Ut(){var a=this;HE.call(a);a.rS=null;a.sf=null;a.E6=null;a.fG=null;a.AA=null;a.hT=null;a.oB=0;a.sb=0;}
function AWR(a){var b=new Ut();AE$(b,a);return b;}
function A7R(a,b){var c=new Ut();AA8(c,a,b);return c;}
function AE$(a,b){var c,d;Dc();c=A5s;d=new QF;AEb(d,c,0.3333333432674408,0.5);d.tQ=BS(512);d.wr=D(512);Er();c=A5x;if(c!==null){d.ki=c;d.rZ=c;AA8(a,b,d);return;}c=new Bg;c.c=1;c.d=1;c.f=B(583);G(c);}
function AA8(a,b,c){var d,e,f,g,h,i,j;a.uL=new C;d=BS(8192);e=d.data;a.E6=d;f=e.length;g=new CT;h=0+f|0;g.B=(-1);g.J=f;g.g=f;CB();g.bt=A4Q;g.bB=0;g.bl=d;g.h=0;g.g=h;g.cu=0;g.bL=0;a.fG=g;d=D(1024);e=d.data;a.AA=d;i=e.length;g=new Jd;j=0+i|0;g.B=(-1);g.J=i;g.g=i;g.h=0;g.g=j;g.h$=0;g.jG=0;g.hJ=d;a.hT=g;a.rS=b;a.sf=c;B_(g,j);b=a.fG;B_(b,b.g);}
function Xx(a,b,c,d){var e,f,g,h;if(a.sb){e=a.hT;if(!(e.h>=e.g?0:1))return (-1);}f=0;a:{while(d>0){e=a.hT;g=e.g-e.h|0;if(d<g)g=d;Nt(e,b,c+f|0,g);d=d-g|0;f=f+g|0;e=a.hT;h=e.h>=e.g?0:1;if(!h&&!ADt(a))break a;}}return f;}
function ADt(a){var b,c,d;if(a.sb)return 0;T_(a.hT);a:{while(true){b=a.fG;c=b.h>=b.g?0:1;if(!c&&!Ru(a))break a;d=(Wn(a.sf,a.fG,a.hT,a.oB)).by;if(d!=1?0:1)break;if(d?0:1)Ru(a);}}b=a.fG;c=b.h>=b.g?0:1;if(!c&&a.oB){b=a.sf;d=b.nr;if(d!=3&&d!=2){b=new B2;b.c=1;b.d=1;G(b);}b.nr=3;if(A0J.by?0:1)a.sb=1;}b=a.hT;b.g=b.h;b.h=0;b.B=(-1);return 1;}
function Ru(a){var b,c,d;if(a.oB)return 0;Y7(a.fG);a:{while(true){b=a.fG;c=b.h;d=b.g;if(!(c>=d?0:1))break a;c=a.rS.vq(b.bl,c,d-c|0);if(c==(-1)){a.oB=1;break a;}b=a.fG;B_(b,b.h+c|0);if(!c)break;}}b=a.fG;b.g=b.h;b.h=0;b.B=(-1);return 1;}
function Ta(){var a=this;C.call(a);a.eb=null;a.hB=null;a.r9=0;a.c7=0;}
function ACP(a,b){var c=new Ta();AT9(c,a,b);return c;}
function AT9(a,b,c){if(b!==null){a.eb=b;a.hB=c;a.r9=0;a.c7=0;return;}b=new Dm;b.c=1;b.d=1;G(b);}
function S4(a){var b,c,d,e,f;if(a.hB===null){b=new Dm;b.c=1;b.d=1;G(b);}a:{b:{c=a.eb.e.data.length;d=a.c7;if(d<c){if(a.r9)return 1;while(true){if(d>=c)break b;b=a.hB;e=a.eb;if(d<0)break a;f=e.e.data;if(d>=f.length)break a;if(EC(b,f[d],0)==(-1))return 1;d=d+1|0;}}}return 0;}b=new Bd;b.c=1;b.d=1;G(b);}
function BX(a){var b,c,d,e,f,g,h,i;b=a.hB;if(b===null){b=new Dm;b.c=1;b.d=1;G(b);}c=a.c7;d=a.eb.e.data;e=d.length;f=Bw(c,e);if(f<0){if(a.r9){if(c>=0&&f<0){if(EC(b,d[c],0)>=0){b=a.eb;c=a.c7;a.c7=c+1|0;if(c>=0){d=b.e.data;if(c<d.length){c=d[c];b=new L;d=D(1);g=d.data;g[0]=c;c=g.length;g=D(c);b.e=g;K(d,0,g,0,c);return b;}}b=new Bd;b.c=1;b.d=1;G(b);}a.c7=a.c7+1|0;while(true){f=a.c7;if(f>=e){b=a.eb;g=b.e;h=g.data.length;f=Bw(c,h);if(f>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!f)b=A36;else if(!(!c&&h==h)){b=new L;f=h-c|0;d
=D(f);b.e=d;K(g,c,d,0,f);}return b;}b=a.hB;i=a.eb;if(f<0)break;d=i.e.data;if(f>=d.length)break;if(EC(b,d[f],0)>=0){b=a.eb;f=a.c7;h=Bw(c,f);if(h>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!h)i=A36;else if(!c&&f==b.e.data.length)i=b;else{i=new L;d=b.e;f=f-c|0;g=D(f);i.e=g;K(d,c,g,0,f);}return i;}a.c7=a.c7+1|0;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}a:{while(true){f=Bw(c,e);if(f>=0)break a;b=a.hB;i=a.eb;if(c<0)break;d=i.e.data;if(c>=d.length)break;if(EC(b,d[c],0)<0)break a;c=c+1|0;}b=new Bd;Dw(b);G(b);}a.c7
=c;if(f<0){a.c7=c+1|0;while(true){f=a.c7;if(f>=e)break;if(EC(a.hB,C8(a.eb,f),0)>=0)return FZ(a.eb,c,a.c7);a.c7=a.c7+1|0;}return HX(a.eb,c);}}b=new MG;b.c=1;b.d=1;G(b);}
var Pj=I();
var A0L=null;function SZ(b){var $$je;a:{if(b!==null)try{YD(b);break a;}catch($$e){$$je=BJ($$e);if($$je instanceof DS){}else{throw $$e;}}}}
function ASu(){A0L=BS(0);}
function RL(){var a=this;C.call(a);a.jA=null;a.uN=0;a.sN=null;a.ni=null;a.x3=0;a.z0=0.0;a.zZ=0.0;a.ss=null;a.Ax=0.0;a.e1=null;a.hh=null;a.jK=null;a.pd=null;}
var A7S=null;function AX7(){AX7=Bi(RL);AN4();}
function AY6(a,b){var c=new RL();ADu(c,a,b);return c;}
function ADu(a,b,c){var d,e,f,g,h,i;AX7();d=new CJ;d.b2=1;d.C=Bt(C,16);a.sN=d;d=new CJ;d.b2=1;d.C=Bt(C,16);a.ni=d;d=new Bx;E4();d.cr=1.0;d.cq=1.0;d.cp=1.0;d.co=1.0;DV(d);a.ss=d;a.jA=b;a.uN=c;e=b.gC.o;if(!e){b=new Bg;b.c=1;b.d=1;b.f=B(584);G(b);}a:{a.e1=Bt($rt_arraycls($rt_floatcls()),e);a.hh=Y(e);if(e>1){f=Bt(D5,e);g=f.data;a.jK=f;h=0;i=g.length;while(true){if(h>=i)break a;b=new D5;b.dT=1;b.cc=Y(16);g[h]=b;h=h+1|0;}}}a.pd=Y(e);}
function VX(a,b){var c,d,e,f,g,h,i;c=a.jA.gC;d=0;e=a.e1.data.length;while(d<e){f=a.hh.data;if(f[d]>0){g=a.e1.data[d];if(d>=c.o){h=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,d,10);H(b,b.a,B(36));i=c.o;P(b,b.a,i,10);c=new L;f=b.b;d=b.a;O();g=D(d);c.e=g;K(f,0,g,0,d);h.c=1;h.d=1;h.f=c;G(h);}Yf(b,c.C.data[d].lJ,g,0,f[d]);}d=d+1|0;}}
function AAa(a){var b,c,d,e,f,g,h;a.z0=0.0;a.zZ=0.0;ZS(a.ni,1);b=a.ni;c=b.C;d=0;e=b.o;f=null;if(d>e){b=new Bg;b.c=1;b.d=1;G(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.o=0;b=a.sN;c=b.C;d=0;e=b.o;f=null;if(d>e){b=new Bg;b.c=1;b.d=1;G(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.o=0;e=0;c=a.hh.data;h=c.length;while(e<h){g=a.jK;if(g!==null)g.data[e].br=0;c[e]=0;e=e+1|0;}}
function Ue(a,b){var c,d,e,f,g,h,i,j,k,l,m;a:{if(a.e1.data.length==1)Ry(a,0,b.dh);else{c=a.pd.data;d=0;e=c.length;if(d>e){b=new Bg;b.c=1;b.d=1;G(b);}while(d<e){f=d+1|0;c[d]=0;d=f;}g=0;b=b.cX;d=b.o;while(true){f=Bw(g,d);if(f>=0)break;if(f>=0){h=new Bh;i=new N;i.b=D(16);H(i,i.a,B(35));P(i,i.a,g,10);H(i,i.a,B(36));g=b.o;P(i,i.a,g,10);b=new L;j=i.b;d=i.a;O();c=D(d);b.e=c;K(j,0,c,0,d);h.c=1;h.d=1;h.f=b;G(h);}i=b.C.data[g].b8;k=i.C;f=0;l=i.o;while(f<l){m=k.data[f].jt;c[m]=c[m]+1|0;f=f+1|0;}g=g+1|0;}g=0;while(true)
{if(g>=e)break a;Ry(a,g,c[g]);g=g+1|0;}}}}
function Ry(a,b,c){var d,e,f,g;d=a.jK;if(d!==null){e=d.data;if(c>e[b].cc.data.length)Z0(e[b],c-e[b].br|0);}d=a.hh.data;f=d[b]+(c*20|0)|0;e=a.e1.data;g=e[b];if(g===null)e[b]=CU(f);else if(g.data.length<f){e=CU(f);K(g,0,e,0,d[b]);a.e1.data[b]=e;}}
function Vh(a,b){var c,d,e,f,g;c=Bt($rt_arraycls($rt_floatcls()),b);d=a.e1;K(d,0,c,0,d.data.length);a.e1=c;e=Y(b);c=a.hh;K(c,0,e,0,c.data.length);a.hh=e;d=Bt(D5,b);f=0;e=a.jK;if(e!==null){f=e.data.length;K(e,0,d,0,f);}e=d.data;while(f<b){g=new D5;g.dT=1;g.cc=Y(16);e[f]=g;f=f+1|0;}a.jK=d;a.pd=Y(b);}
function Zn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;e=b.cX.o;if(!e)return;f=a.e1.data.length;g=a.jA.gC.o;if(f<g)Vh(a,g);Dh(a.sN,b);Ue(a,b);h=b.cv;i=0;j=0;k=0;l=0.0;f=0;while(f<e){m=b.cX;if(f>=m.o){n=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,f,10);H(b,b.a,B(36));e=m.o;P(b,b.a,e,10);m=new L;o=b.b;f=b.a;O();p=D(f);m.e=p;K(o,0,p,0,f);n.c=1;n.d=1;n.f=m;G(n);}m=m.C.data[f];n=m.b8;o=n.C;p=m.cs.cm;q=c+m.e_;r=d+m.nG;g=0;s=n.o;while(g<s){t=k+1|0;if(k==j){i=i+1|0;if(i>=h.br){m=new Bh;b=new N;b.b=D(16);H(b,
b.a,B(35));P(b,b.a,i,10);H(b,b.a,B(36));e=h.br;P(b,b.a,e,10);n=new L;o=b.b;f=b.a;O();p=D(f);n.e=p;K(o,0,p,0,f);m.c=1;m.d=1;m.f=n;G(m);}l=$rt_intBitsToFloat(h.cc.data[i]&(-16777217));i=i+1|0;j=Bw(i,h.br);if(j>=0)j=(-1);else{if(j>=0){m=new Bh;b=new N;b.b=D(16);H(b,b.a,B(35));P(b,b.a,i,10);H(b,b.a,B(36));e=h.br;P(b,b.a,e,10);n=new L;o=b.b;f=b.a;O();p=D(f);n.e=p;K(o,0,p,0,f);m.c=1;m.d=1;m.f=n;G(m);}j=h.cc.data[i];}}u=p.data;v=o.data;q=q+u[g];ABA(a,v[g],q,r,l);g=g+1|0;k=t;}f=f+1|0;}E4();a.Ax=A4l;}
function ABA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.jA.mI;g=f.g1;h=f.yj;i=c+b.dY*g;j=d+b.jH*h;k=b.dg*g;l=b.dP*h;m=b.sZ;n=b.tT;o=b.o1;p=b.pO;if(a.uN){i=i+Fm(i)*0.5|0;j=j+Fm(j)*0.5|0;k=k+Fm(k)*0.5|0;l=l+Fm(l)*0.5|0;}q=i+k;r=j+l;s=b.jt;t=a.hh.data;u=t[s];t[s]=t[s]+20|0;t=a.jK;if(t!==null){b=t.data[s];v=a.x3;a.x3=v+1|0;FI(b,v);}t=a.e1.data[s].data;v=u+1|0;t[u]=i;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=o;w=v+1|0;t[v]=i;s=w+1|0;t[w]=r;v=s+1|0;t[s]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=p;w
=v+1|0;t[v]=q;v=w+1|0;t[w]=r;w=v+1|0;t[v]=e;v=w+1|0;t[w]=n;w=v+1|0;t[v]=p;v=w+1|0;t[w]=q;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=n;t[w]=o;}
function AN4(){var b;b=new Bx;E4();b.cr=1.0;b.cq=1.0;b.cp=1.0;b.co=1.0;DV(b);A7S=b;}
var DA=I(BQ);
var A7T=null;var A7U=null;var A7V=null;var A7W=null;var A7X=null;var A7Y=null;var A4U=null;var A7Z=null;function HB(){HB=Bi(DA);AEP();}
function IA(b){var c,d,e,f,g,h;HB();if(b==1)return A7T;if(b==2)return A7V;if(b==5)return A7W;if(b==6)return A7X;if(b==3)return A7Y;if(b==4)return A4U;c=new Ba;d=new N;d.b=D(16);H(d,d.a,B(585));P(d,d.a,b,10);e=new L;f=d.b;g=d.a;O();h=D(g);e.e=h;K(f,0,h,0,g);c.c=1;c.d=1;c.f=e;G(c);}
function AEP(){var b,c,d,e,f,g,h;b=new DA;HB();b.u=B(225);b.n=0;A7T=b;c=new DA;c.u=B(586);c.n=1;A7U=c;d=new DA;d.u=B(587);d.n=2;A7V=d;e=new DA;e.u=B(588);e.n=3;A7W=e;f=new DA;f.u=B(589);f.n=4;A7X=f;g=new DA;g.u=B(590);g.n=5;A7Y=g;h=new DA;h.u=B(591);h.n=6;A4U=h;A7Z=U(DA,[b,c,d,e,f,g,h]);}
var I9=I();
var A70=0;var A71=null;var A72=null;function Zx(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.tI=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.qp=0;c.pZ=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Dl(Bp(M(d),M(8388608)),R)){d=d<<1;f=f+(-1)|0;}}g=A72;h=AQu(g,0,g.data.length,f);if(h<0)h= -h|0;g=A72.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=A71.data[e];j=Bp(M(d),F(4294967295, 0));k=V(Bc(Bb(j,Bp(M(e),F(4294967295, 0))),32-i|0));if(k<A70){while($rt_ucmp(k,
A70)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=A72.data;e=h+1|0;i=9+(f-g[e]|0)|0;k=V(Bc(Bb(j,Bp(M(A71.data[e]),F(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=A71.data;f=h+1|0;e=g[f];m=i-1|0;n=Bb(Bp(M(l),F(4294967295, 0)),Bp(M(e),F(4294967295, 0)));e=32-m|0;o=V(Bc(n,e));p=V(Bc(Bb(Bp(M(d-1|0),F(4294967295, 0)),Bp(M(g[f]),F(4294967295, 0))),e));q=1;while(true){r=q*10|0;if($rt_ucmp($rt_udiv(k,r),$rt_udiv(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if($rt_ucmp($rt_udiv(k,l),$rt_udiv(o,l))>=0)break;m=l;}s=$rt_ucmp(q,m);d=
s>0?B3($rt_udiv(k,q),q):s<0?B3($rt_udiv(k,m),m)+m|0:B3($rt_udiv((k+(m/2|0)|0),m),m);if(EB(M(d),M(1000000000))>=0)while(true){h=h+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.qp=d;c.pZ=h-50|0;}
function Wd(){A70=$rt_udiv((-1),10);A71=Ew([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A72=Ew([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
var Kl=I();
var A73=null;var A74=null;function ADK(b,c,d){var e,f,g,h,i,j;e=50+c|0;if(b){f=A73.data;if(e<=f.length&&e>=0){g=AZ3(Bb(Bp(M(b),F(4294967295, 0)),Bp(M(f[e]),F(4294967295, 0))));h=A74.data[e]-1|0;i=(32-CV(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){c=( -c|0)+1|0;e=32;if(c<e)e=c;b=b>>e;c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return $rt_intBitsToFloat(j);}}return $rt_intBitsToFloat(!d?0:(-2147483648));}
function AAU(){A73=Ew([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);A74=Ew([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
var Gm=I(BQ);
var A7x=null;var A75=null;var A76=null;function XT(){XT=Bi(Gm);AVY();}
function AVY(){var b,c;b=new Gm;XT();b.u=B(592);b.n=0;A7x=b;c=new Gm;c.u=B(593);c.n=1;A75=c;A76=U(Gm,[b,c]);}
function CO(){BQ.call(this);this.dn=null;}
var A7w=null;var A77=null;var A78=null;var A79=null;var A7$=null;var A7_=null;var A8a=null;var A8b=null;var A8c=null;var A4W=null;var A8d=null;var A8e=null;function Hr(){Hr=Bi(CO);AK4();}
function AK4(){var b,c,d,e,f,g,h,i,j,k,l;b=new CO;Hr();b.u=B(594);b.n=0;b.dn=B(595);A7w=b;c=new CO;c.u=B(596);c.n=1;c.dn=B(597);A77=c;d=new CO;d.u=B(598);d.n=2;d.dn=B(599);A78=d;e=new CO;e.u=B(600);e.n=3;e.dn=B(601);A79=e;f=new CO;f.u=B(602);f.n=4;f.dn=B(603);A7$=f;g=new CO;g.u=B(604);g.n=5;g.dn=B(605);A7_=g;h=new CO;h.u=B(606);h.n=6;h.dn=B(607);A8a=h;i=new CO;i.u=B(608);i.n=7;i.dn=B(609);A8b=i;j=new CO;j.u=B(610);j.n=8;j.dn=B(611);A8c=j;k=new CO;k.u=B(612);k.n=9;k.dn=B(613);A4W=k;l=new CO;l.u=B(614);l.n=10;l.dn
=B(615);A8d=l;A8e=U(CO,[b,c,d,e,f,g,h,i,j,k,l]);}
var F6=I(BQ);
var A4S=null;var A4T=null;var A8f=null;function AFA(){AFA=Bi(F6);AIw();}
function AIw(){var b,c;b=new F6;AFA();b.u=B(616);b.n=0;A4S=b;c=new F6;c.u=B(617);c.n=1;A4T=c;A8f=U(F6,[b,c]);}
var Q0=I();
var A0M=0;function ABp(b,c,d,e){var f,g,h,i,j,k,l,m,n;if(!A0M){OH(b,c,d,e);return;}MT();f=A5$;if(f!==A6b&&f!==f&&f!==A6d)AAZ(b,c,d,e);else{g=A3_;f=c.bO;if(f===null)h=6408;else a:{e=f.cn;switch(e){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Ba;g=new N;g.b=D(16);FG(g,g.a,B(49));P(g,g.a,e,10);f=new L;i=g.b;d=g.a;O();j=D(d);f.e=j;K(i,0,j,0,d);c.c=1;c.d=1;c.f=f;G(c);}k=f===null?c.dd:f.c3;l=f===null?c.df:f.c2;if(f===null)m=6408;else b:{m=f.cn;switch
(m){case 1:m=6406;break b;case 2:m=6410;break b;case 3:case 5:m=6407;break b;case 4:case 6:m=6408;break b;default:}c=new Ba;g=new N;Di(g);g.b=D(16);ADV(g,g.a,B(49));P(g,g.a,m,10);f=new L;i=g.b;d=g.a;O();j=D(d);f.e=j;K(i,0,j,0,d);c.c=1;c.d=1;c.f=f;G(c);}if(f===null)n=5121;else c:{n=f.cn;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break c;case 6:n=32819;break c;default:c=new Ba;g=new N;g.b=D(16);FG(g,g.a,B(49));P(g,g.a,n,10);f=new L;i=g.b;d=g.a;O();j=D(d);f.e=j;K(i,0,j,0,d);c.c=1;c.d=1;c.f=f;G(c);}n
=5121;}g.hv(b,0,h,k,l,0,m,n,c.jv);A4R.ne(b);}}
function AAZ(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=A4P.iO.getExtension("GL_ARB_framebuffer_object")===null?0:1;a:{if(!f&&!(A4P.iO.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=A4R.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new CE;h.P=g;i=h;g.classObject=i;}}if(h.bk===null)h.bk=$rt_str(h.P.$meta.name);if(!BO(h.bk,B(618))&&A5Q===null){OH(b,c,d,e);break a;}}g=A3_;i=c.bO;if(i===null)j=6408;else b:{e=i.cn;switch(e){case 1:j=6406;break b;case 2:j=6410;break b;case 3:case 5:j=6407;break b;case 4:case 6:j
=6408;break b;default:}c=new Ba;g=new N;g.b=D(16);DY(g,g.a,Ea(B(49)));P(g,g.a,e,10);i=new L;k=g.b;d=g.a;l=D(d);i.e=l;K(k,0,l,0,d);c.c=1;c.d=1;c.f=i;G(c);}m=i===null?c.dd:i.c3;n=i===null?c.df:i.c2;if(i===null)o=6408;else c:{f=i.cn;switch(f){case 1:o=6406;break c;case 2:o=6410;break c;case 3:case 5:o=6407;break c;case 4:case 6:o=6408;break c;default:}c=new Ba;g=new N;g.b=D(16);FG(g,g.a,B(49));P(g,g.a,f,10);i=new L;k=g.b;d=g.a;O();l=D(d);i.e=l;K(k,0,l,0,d);c.c=1;c.d=1;c.f=i;G(c);}if(i===null)f=5121;else d:{f=i.cn;switch
(f){case 1:case 2:case 3:case 4:break;case 5:f=33635;break d;case 6:f=32819;break d;default:c=new Ba;g=new N;g.b=D(16);DY(g,g.a,Ea(B(49)));P(g,g.a,f,10);i=new L;k=g.b;d=g.a;l=D(d);i.e=l;K(k,0,l,0,d);c.c=1;c.d=1;c.f=i;G(c);}f=5121;}g.hv(b,0,j,m,n,0,o,f,c.jv);A4R.ne(b);}}
function OH(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=A3_;g=c.bO;if(g===null)h=6408;else a:{i=g.cn;switch(i){case 1:h=6406;break a;case 2:h=6410;break a;case 3:case 5:h=6407;break a;case 4:case 6:h=6408;break a;default:}c=new Ba;f=new N;f.b=D(16);DY(f,f.a,Ea(B(49)));P(f,f.a,i,10);g=new L;j=f.b;d=f.a;k=D(d);g.e=k;K(j,0,k,0,d);c.c=1;c.d=1;c.f=g;G(c);}l=g===null?c.dd:g.c3;m=g===null?c.df:g.c2;if(g===null)n=6408;else b:{n=g.cn;switch(n){case 1:n=6406;break b;case 2:n=6410;break b;case 3:case 5:n=6407;break b;case 4:case 6:n
=6408;break b;default:}c=new Ba;f=new N;f.b=D(16);FG(f,f.a,B(49));P(f,f.a,n,10);g=new L;j=f.b;d=f.a;O();k=D(d);g.e=k;K(j,0,k,0,d);c.c=1;c.d=1;c.f=g;G(c);}if(g===null)o=5121;else c:{o=g.cn;switch(o){case 1:case 2:case 3:case 4:o=5121;break c;case 5:o=33635;break c;case 6:o=32819;break c;default:}c=new Ba;f=new N;f.b=D(16);DY(f,f.a,Ea(B(49)));P(f,f.a,o,10);g=new L;j=f.b;d=f.a;k=D(d);g.e=k;K(j,0,k,0,d);c.c=1;c.d=1;c.f=g;G(c);}f.hv(b,0,h,l,m,0,n,o,c.jv);if(A4R===null&&d!=e){c=new Ba;c.c=1;c.d=1;c.f=B(619);G(c);}f
=c.bO;p=(f===null?c.dd:f.c3)/2|0;i=(f===null?c.df:f.c2)/2|0;h=1;while(p>0&&i>0){g=new H$;f=c.bO;if(f===null){HB();f=A4U;}else f=IA(f.cn);J0(g,p,i,f);Iq();Tv(g,A4V);f=c.bO;AAT(g,c,0,0,f===null?c.dd:f.c3,f===null?c.df:f.c2,0,0,p,i);if(h>1)N8(c);A3_.hv(b,h,XW(g),K$(g),Lx(g),0,ZE(g),ABT(g),g.jv);p=K$(g)/2|0;i=Lx(g)/2|0;h=h+1|0;c=g;}}
function ANz(){A0M=1;}
var QL=I();
var A7y=null;function AXv(){AXv=Bi(QL);AVW();}
function AVW(){var b,c;XT();b=Y((A76.cH()).data.length);c=b.data;A7y=b;c[A7x.n]=1;c[A75.n]=2;}
function Mp(){var a=this;C.call(a);a.AI=null;a.yQ=0.0;a.Bx=0.0;a.kl=null;a.ki=null;a.rZ=null;a.nr=0;}
function AEb(a,b,c,d){var e,f,g,h,i;a.kl=B(620);Er();e=A64;a.ki=e;a.rZ=e;if(c<=0.0){b=new Bg;e=new N;e.b=D(16);H(e,e.a,B(621));Ei(e,e.a,c);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);b.c=1;b.d=1;b.f=f;G(b);}if(d>0.0){a.AI=b;a.yQ=c;a.Bx=d;return;}b=new Bg;e=new N;e.b=D(16);H(e,e.a,B(622));Ei(e,e.a,d);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);b.c=1;b.d=1;b.f=f;G(b);}
function Wn(a,b,c,d){var e,f,g,h,i,$$je;e=a.nr;if(!(e==2&&!d)&&e!=3){a.nr=d?2:1;while(true){try{f=ACX(a,b,c);}catch($$e){$$je=BJ($$e);if($$je instanceof BU){g=$$je;b=new LM;b.c=1;b.d=1;b.cY=g;G(b);}else{throw $$e;}}e=f.by;if(e!=1?0:1)break;if(e?0:1){if(d){e=b.h;h=b.g;if(e>=h?0:1){g=a.ki;Er();if(g===A64){i=h-e|0;b=new CK;b.by=2;b.bR=i;return b;}if((c.g-c.h|0)<=a.kl.e.data.length)return A0K;B_(b,e+(h-e|0)|0);if(a.ki===A5x){b=a.kl;KI(c,b,0,b.e.data.length);}}}return f;}if(e!=2?0:1){g=a.ki;Er();if(g===A64)return f;if
(g===A5x){i=c.g-c.h|0;g=a.kl;e=g.e.data.length;if(i<e)return A0K;KI(c,g,0,e);}h=b.h;e=f.by;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new GT;b.c=1;b.d=1;G(b);}B_(b,h+f.bR|0);}else if(e!=3?0:1){g=a.rZ;Er();if(g===A64)return f;if(g===A5x){i=c.g-c.h|0;g=a.kl;e=g.e.data.length;if(i<e)return A0K;KI(c,g,0,e);}h=b.h;e=f.by;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new GT;b.c=1;b.d=1;G(b);}B_(b,h+f.bR|0);}}return f;}b=new B2;b.c=1;b.d=1;G(b);}
var Gd=I(BU);
var G5=I();
var A0N=null;function AG0(){A0N=null;}
var To=I();
function CW(b,c,d,e){A3_.mH(b,c,d,e);A3_.ol(16384);}
function JX(b,c,d,e,f){var g;A3_.mH(b,c,d,e);g=16384;if(f)g=16640;A3_.ol(g);}
function Ms(){var a=this;C.call(a);a.rg=null;a.vJ=null;a.wy=null;a.qn=null;a.rY=null;a.ba=null;a.nw=null;a.bT=0.0;a.wm=0.0;a.qb=0.0;a.rh=0.0;a.we=null;a.z4=null;a.zi=null;}
function Cx(a){var b,c,d;b=new Be;BT();a.rg=b;b=new Be;b.x=0.0;b.z=0.0;b.y=(-1.0);a.vJ=b;b=new Be;b.x=0.0;b.z=1.0;b.y=0.0;a.wy=b;a.qn=Fx();a.rY=Fx();a.ba=Fx();a.nw=Fx();a.bT=1.0;a.wm=100.0;a.qb=0.0;a.rh=0.0;a.we=AYB();a.z4=new Be;b=new Lj;AYh();c=new Be;b.zS=c;d=new Be;b.DK=d;c.x=0.0;c.z=0.0;c.y=0.0;d.x=0.0;d.z=0.0;d.y=0.0;a.zi=b;}
var AEs=I();
function APt(b,c){var d,e,f,g,h,i,j,k,l,m,n;d=b.e.data.length;e=0;f=new N;f.b=D(d);g=0;a:{b:{while(g<d){if(g<0)break a;h=b.e.data;i=h.length;if(g>=i)break a;c:{j=h[g];if(j!=37){k=f.a;Bo(f,k,k+1|0);f.b.data[k]=j;break c;}g=g+1|0;if(g<0)break b;if(g>=i)break b;i=h[g];if(i==37){DQ(f,37);break c;}if(i==115){h=c.data;k=e+1|0;B7(f,h[e].r());e=k;break c;}if(i==100){h=c.data;k=e+1|0;W4(f,GX(h[e]));e=k;break c;}if(i==102){h=c.data;k=e+1|0;l=Ko(h[e]);ID();B7(f,HT(Q9(A8g,l),0,l>=0.0?5:6));e=k;break c;}if(i==48){g=g+1|
0;if(C8(b,g)==88){h=c.data;ID();m=A8h;k=e+1|0;AEa(m,f,GX(h[e]));e=k;break c;}ID();k=Lm(A8g,b,g,d);while(true){g=g+1|0;i=C8(b,g);if(i<48)break;if(i>57)break;}if(i==88){h=c.data;m=A8h;i=e+1|0;B7(f,HT(Pm(m,GX(h[e])),16-k|0,16));}else if(i!=100)i=e;else{h=c.data;m=A8g;i=e+1|0;m=Pm(m,GX(h[e]));B7(f,HT(m,EO(m)-k|0,EO(m)));}e=i;break c;}if(i==46){g=g+1|0;if(C8(b,g)==102){h=c.data;ID();m=A8g;k=e+1|0;Ww(m,f,Ko(h[e]));e=k;break c;}ID();i=Lm(A8g,b,g,d)+2|0;while(true){g=g+1|0;k=C8(b,g);if(k<48)break;if(k>57)break;}if(k
==102){h=c.data;k=e+1|0;n=Ko(h[e]);m=Q9(A8g,n);if(n<0.0)i=i+1|0;B7(f,HT(m,0,i));e=k;}break c;}if(i<49)break c;if(i>57)break c;ID();k=Lm(A8g,b,g,d);while(true){g=g+1|0;i=C8(b,g);if(i<48)break;if(i>57)break;}if(i==88){h=c.data;m=A8h;i=e+1|0;m=RK(m,GX(h[e]));B7(f,HT(m,EO(m)-k|0,EO(m)));}else if(i!=100)i=e;else{h=c.data;m=A8g;i=e+1|0;m=RK(m,GX(h[e]));B7(f,HT(m,EO(m)-k|0,EO(m)));}e=i;}g=g+1|0;}return f;}b=new Bd;LU(b);G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function CD(b,c){var d,e,f;b=APt(b,c);d=new L;c=b.b;e=b.a;O();f=D(e);d.e=f;K(c,0,f,0,e);return d;}
var EG=I(Ib);
function AA3(a,b){var c,d,e,f,g,h;c=M(b);d=a.d4;e=a.d1;f=a.d0;g=a.d3;h=a.d2;a.d4=Z(d,F(2135587861, 2654435769));a.d1=Bm(d,h);a.d0=Z(e,g);a.d3=FF(CL(f,52),Bc(f,12));d=Cf(e,f);a.d2=d;return AZ3(Bb(c,Bp(d,F(4294967295, 0))))&(b>>31^(-1));}
function IB(a,b){return a.nm(R,b);}
function ASU(a,b,c){var d,e,f,g,h,i;d=a.hy();if(C2(b,c))return b;e=Cf(c,b);f=Bp(d,F(4294967295, 0));g=Bp(e,F(4294967295, 0));h=Bc(d,32);i=Bc(e,32);return Z(Z(Z(b,Bc(Bb(h,g),32)),Bc(Bb(f,i),32)),Bb(h,i));}
function YP(a){var b,c,d,e,f,g;b=a.d4;c=a.d1;d=a.d0;e=a.d3;f=a.d2;a.d4=Z(b,F(2135587861, 2654435769));a.d1=Bm(b,f);a.d0=Z(c,e);a.d3=FF(CL(d,52),Bc(d,12));g=Cf(c,d);a.d2=g;return BF(Bc(g,40))*5.9604644775390625E-8;}
function H_(a){return BF(Bc(a.hy(),11))*1.1102230246251565E-16;}
function IT(a){var b;b=a.hy();return $rt_intBitsToFloat((126-Fg(b)|0)<<23|V(b)&8388607);}
function F0(){EG.call(this);this.fo=null;}
function Hd(a){return B(623);}
function AAG(a){var b;b=a.fo;return Z(CL(AZ2(Ga(b,32)),32),AZ2(Ga(b,32)));}
function VS(a,b){return Y8(a.fo,b);}
function Y_(a){return Ga(a.fo,24)*5.9604644775390625E-8;}
function Zg(a){var b;b=a.fo;return Ga(b,26)*1.4901161193847656E-8+Ga(b,27)*1.1102230246251565E-16;}
function MH(){var a=this;C.call(a);a.bA=null;a.b4=0.0;a.b5=0.0;a.bU=0;a.bV=0;a.bZ=0;a.b3=0;a.b7=null;}
function BH(a,b){var c,d,e,f;YI(a.bU,a.bV,a.bZ,a.b3);c=a.bA;d=a.b4;c.qb=d;e=a.b5;c.rh=e;if(b){f=c.rg;d=d/2.0;e=e/2.0;f.x=d;f.z=e;f.y=0.0;}S3(c,1);}
function CS(a){return a.bA;}
function Cj(){MH.call(this);this.bd=0.0;}
var On=I(0);
function Ci(){var a=this;C.call(a);a.wa=0;a.kv=0;a.xa=0;a.zy=0;a.mJ=0;a.fn=null;a.lb=null;a.b$=0;a.xL=0;a.uX=0;a.Do=0;a.wS=0;a.y3=0;a.q7=null;a.nF=null;a.qO=null;}
function A8i(a,b,c,d,e){var f=new Ci();Cv(f,a,b,c,d,e);return f;}
function Cv(a,b,c,d,e,f){var g,h,i,j,k,l,m;a.q7=Fx();a.zy=b;a.xL=e;a.lb=f;g=Uw(a,c,d,e);h=new Js;h.mV=1;h.lR=0;f=new Be;BT();h.wG=f;f=ALp(g);h.d7=A5Q===null?AN3(0,b,f):ANf(0,b,f);f=new H3;f.fT=1;f.i3=0;f.qe=1;if(!A0D){g=OW(0);d=g.data.length;i=new J3;j=0+d|0;RY(i,d);i.h=0;i.g=j;i.ly=0;i.mo=0;i.kI=g;}else{k=new CT;g=BS(0);Di(k);k.B=(-1);k.J=0;k.g=0;CB();k.bt=A4Q;k.bB=0;k.bl=g;k.h=0;k.g=0;k.cu=1;k.bL=0;k.bt=DE();i=Kd(k);}f.fs=i;i.g=i.h;i.h=0;i.B=(-1);i=A4R;k=i.l.createBuffer();d=i.dr;i.dr=d+1|0;CP(i.eh,d,CY(k));f.mO
=d;f.lc=35048;h.cW=f;h.jp=0;f=A4c;i=A7g;if(f===null)i=YH(i);else{k=f;if(!k.$id$){l=$rt_nextId();k.$id$=l;}m=f.$id$;g=i.c9.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.gy==m){k=i.du;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.dJ;}}i=i===null?null:i.ev;if(i===null)i=AZr();Dh(i,h);JZ(A7g,f,i);a.fn=h;a.nF=CU(B3(b,(Oo(h)).dE/4|0));a.uX=(Oo(a.fn)).dE/4|0;a.Do=G6(a.fn,8)===null?0:(G6(a.fn,8)).fy/4|0;a.wS=G6(a.fn,4)===null?0:(G6(a.fn,4)).fy/4|0;a.y3=G6(a.fn,16)===null?0:(G6(a.fn,16)).fy/4|0;a.qO=Bt(L,e);m=0;while(m<e)
{a.qO.data[m]=C$(FQ(B7(FU(),B(624)),m));m=m+1|0;}}
function Uw(a,b,c,d){var e,f,g,h,i,j,k,l;e=new CJ;e.b2=1;e.C=Bt(C,16);f=new Em;f.fa=1;f.c5=3;f.dw=5126;f.dB=0;f.dp=B(471);f.fk=0;f.gH=ED(1);Dh(e,f);if(b){g=new Em;g.fa=8;g.c5=3;g.dw=5126;g.dB=0;g.dp=B(625);g.fk=0;g.gH=ED(8);Dh(e,g);}if(c){g=new Em;g.fa=4;g.c5=4;g.dw=5121;g.dB=1;g.dp=B(472);g.fk=0;g.gH=ED(4);Dh(e,g);}h=0;while(h<d){g=new Em;f=new N;f.b=D(16);H(f,f.a,B(626));P(f,f.a,h,10);i=new L;j=f.b;k=f.a;O();l=D(k);i.e=l;K(j,0,l,0,k);g.fa=16;g.c5=2;g.dw=5126;g.dB=0;g.dp=i;g.fk=0;g.gH=ED(16);Dh(e,g);h=h+1|
0;}b=e.o;j=Bt(Em,b);l=j.data;h=0;while(true){c=Bw(h,b);if(c>=0)break;if(c>=0){f=new Bh;g=new N;g.b=D(16);H(g,g.a,B(35));P(g,g.a,h,10);H(g,g.a,B(36));b=e.o;P(g,g.a,b,10);e=new L;j=g.b;c=g.a;O();l=D(c);e.e=l;K(j,0,l,0,c);f.c=1;f.d=1;f.f=e;G(f);}l[h]=e.C.data[h];h=h+1|0;}return j;}
function Cp(a,b,c){GL(a.q7,b.cR);a.wa=c;}
function Bk(a,b){a.nF.data[a.kv+a.wS|0]=b;}
function Bl(a,b,c,d){var e,f;e=a.kv;f=a.nF.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.xa=0;a.kv=e+a.uX|0;a.mJ=a.mJ+1|0;}
function ACR(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;if(!a.mJ)return;b=a.lb;c=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}c.op(b.bu);c=a.lb;d=a.q7;SY();e=Jq(c,B(627),A68);f=A4R;if(c.bv){Da(c,c.cB,c.cF);c.bv=0;}g=d.cR;b=f.dF;h=f.em;if(!h)b=!b.V?null:b.S;else{i=b.Q;j=V(Bc(Bb(M(h),F(2135587861, 2654435769)),b.X));a:{while(true){k=i.data[j];if(!k){j= -(j+1|0)|0;break a;}if(k==h)break;j=(j+1|0)&b.U;}}b=j<0?null:b.R.data[j];}b=b;if(!e)b=!b.V?null:b.S;else{i=b.Q;h=V(Bc(Bb(M(e),F(2135587861, 2654435769)),b.X));b:{while(true){j=i.data[h];if
(!j){h= -(h+1|0)|0;break b;}if(j==e)break;h=(h+1|0)&b.U;}}b=h<0?null:b.R.data[h];}BM();b=b===null?null:b[A5n]===true?b:b.bb;c=f.l;d="uniformMatrix4fv";l=!!0;if(g===null)f=null;else{g=g.data;m=g.length;f=new $rt_globals.Array(m);h=0;while(h<m){n=g[h];h;f[h]=n;h=h+1|0;}}c[d](b,l,f);m=0;while(m<a.xL){b=a.lb;c=a.qO.data[m];d=A4R;if(b.bv){Da(b,b.cB,b.cF);b.bv=0;}d.nl(Jq(b,c,A68),m);m=m+1|0;}b=a.fn;g=a.nF;h=a.kv;b.d7.nS(g,0,h);b=a.fn;Ql(b,a.lb,a.wa,0,b.cW.mR()<=0?b.d7.pk():b.cW.i1(),b.mV);a.xa=0;a.kv=0;a.mJ=0;}
function Co(a){ACR(a);}
function Cz(b,c,d){var e,f,g,h,i,j;e=new N;e.b=D(16);H(e,e.a,B(628));f=!b?B(43):B(629);H(e,e.a,f);f=!c?B(43):B(630);H(e,e.a,f);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);h=0;while(h<d){e=new N;e.b=D(16);H(e,e.a,f);H(e,e.a,B(631));P(e,e.a,h,10);H(e,e.a,B(632));f=new L;g=e.b;j=e.a;i=D(j);f.e=i;K(g,0,i,0,j);h=h+1|0;}e=new N;e.b=D(16);H(e,e.a,f);H(e,e.a,B(633));f=!c?B(43):B(634);H(e,e.a,f);f=new L;g=e.b;h=e.a;i=D(h);f.e=i;K(g,0,i,0,h);h=0;while(h<d){e=new N;e.b=D(16);H(e,e.a,f);H(e,e.a,B(635));P(e,e.a,h,
10);H(e,e.a,B(632));f=new L;g=e.b;j=e.a;i=D(j);f.e=i;K(g,0,i,0,j);h=h+1|0;}e=new N;e.b=D(16);H(e,e.a,f);H(e,e.a,B(636));f=new L;g=e.b;h=e.a;i=D(h);f.e=i;K(g,0,i,0,h);if(c){e=new N;e.b=D(16);H(e,e.a,f);H(e,e.a,B(637));f=new L;g=e.b;c=e.a;i=D(c);f.e=i;K(g,0,i,0,c);}h=0;while(h<d){e=new N;e.b=D(16);QZ(e,f);f=C$(B7(FQ(B7(B7(FQ(B7(e,B(638)),h),B(639)),B(626)),h),B(632)));h=h+1|0;}e=new N;e.b=D(16);H(e,e.a,f);H(e,e.a,B(640));f=new L;g=e.b;c=e.a;i=D(c);f.e=i;K(g,0,i,0,c);return f;}
function CC(b,c,d){var e,f,g,h,i,j;e=B(641);if(c){f=new N;f.b=D(16);H(f,f.a,e);H(f,f.a,B(634));e=new L;g=f.b;h=f.a;O();i=D(h);e.e=i;K(g,0,i,0,h);}h=0;while(h<d){f=new N;f.b=D(16);H(f,f.a,e);H(f,f.a,B(635));P(f,f.a,h,10);H(f,f.a,B(632));e=new L;g=f.b;j=f.a;O();i=D(j);e.e=i;K(g,0,i,0,j);f=new N;f.b=D(16);H(f,f.a,e);H(f,f.a,B(642));P(f,f.a,h,10);H(f,f.a,B(632));e=new L;g=f.b;j=f.a;i=D(j);e.e=i;K(g,0,i,0,j);h=h+1|0;}f=new N;f.b=D(16);H(f,f.a,e);H(f,f.a,B(643));e=!c?B(644):B(645);H(f,f.a,e);e=new L;g=f.b;c=f.a;O();i
=D(c);e.e=i;K(g,0,i,0,c);if(d>0){f=new N;f.b=D(16);H(f,f.a,e);H(f,f.a,B(646));e=new L;g=f.b;c=f.a;i=D(c);e.e=i;K(g,0,i,0,c);}h=0;c=d-1|0;while(h<d){if(h==c){f=new N;IP(f,16);QZ(f,e);e=C$(B7(FQ(B7(FQ(B7(f,B(647)),h),B(648)),h),B(522)));}else{f=new N;f.b=D(16);H(f,f.a,e);H(f,f.a,B(647));P(f,f.a,h,10);H(f,f.a,B(648));P(f,f.a,h,10);H(f,f.a,B(649));e=AIc(f.b,0,f.a);}h=h+1|0;}f=new N;f.b=D(16);H(f,f.a,e);H(f,f.a,B(650));e=new L;g=f.b;c=f.a;i=D(c);e.e=i;K(g,0,i,0,c);return e;}
function GB(){var a=this;EG.call(a);a.fe=0;a.ff=0;a.fg=0;a.fh=0;}
function GE(a){return B(651);}
function UL(a){var b,c,d,e,f,g,h,i,j,k;b=a.fe;c=a.ff;d=a.fg;e=a.fh;f=c^d;f=f<<26|(f>>>6|0);g=d^e;g=g<<11|(g>>>21|0);h=b^(c+d|0);i=e+(-1380601499)|0;j=g^h;a.fe=j<<26|(j>>>6|0);k=h^i;a.ff=k<<11|(k>>>21|0);a.fg=f^(g+h|0);a.fh=i+(-1380601499)|0;return Bm(CL(M(d),32),M(h));}
function IN(a){var b,c,d,e,f,g;b=a.fe;c=a.ff;d=a.fg;e=a.fh;f=c^d;a.fe=f<<26|(f>>>6|0);g=d^e;a.ff=g<<11|(g>>>21|0);a.fg=b^(c+d|0);a.fh=e+(-1380601499)|0;return d;}
function AD7(a,b){return AZ3(Bb(M(b),Bp(M(IN(a)),F(4294967295, 0))))&(b>>31^(-1));}
function AJy(a,b,c){var d,e,f,g,h;d=Bp(M(IN(a)),F(4294967295, 0));e=Bp(M(IN(a)),F(4294967295, 0));if(C2(b,c))return b;f=Cf(c,b);g=Bp(f,F(4294967295, 0));h=Bc(f,32);return Z(Z(Z(b,Bc(Bb(e,g),32)),Bc(Bb(d,h),32)),Bb(e,h));}
function Tg(a){return (IN(a)>>>8|0)*5.9604644775390625E-8;}
function F3(){var a=this;EG.call(a);a.dV=0;a.dU=0;a.dX=0;a.dW=0;}
function GV(a){return B(652);}
function ZA(a){var b,c,d,e;b=a.dV+(-1640531527)|0;a.dV=b;c=a.dU+(b^CV(b))|0;a.dU=c;d=a.dX;b=b&c;c=d+(c^CV(b))|0;a.dX=c;d=a.dW;b=b&c;c=d+(c^CV(b))|0;a.dW=c;b=B3(c+(b<<13|(b>>>19|0))|0,739982445);b=B3(b^(b>>>12|0),695872825);b=b^(b>>>15|0);c=a.dV+(-1640531527)|0;a.dV=c;d=a.dU+(c^CV(c))|0;a.dU=d;e=a.dX;c=c&d;d=e+(d^CV(c))|0;a.dX=d;e=a.dW;c=c&d;d=e+(d^CV(c))|0;a.dW=d;c=B3(d+(c<<13|(c>>>19|0))|0,739982445);c=B3(c^(c>>>12|0),695872825);return FF(CL(M(b),32),Bp(M(c^(c>>>15|0)),F(4294967295, 0)));}
function JT(a){var b,c,d;b=a.dV+(-1640531527)|0;a.dV=b;c=a.dU+(b^CV(b))|0;a.dU=c;d=a.dX;b=b&c;c=d+(c^CV(b))|0;a.dX=c;d=a.dW;b=b&c;c=d+(c^CV(b))|0;a.dW=c;b=B3(c+(b<<13|(b>>>19|0))|0,739982445);b=B3(b^(b>>>12|0),695872825);return b^(b>>>15|0);}
function ADw(a,b){return AZ3(Bb(M(b),Bp(M(JT(a)),F(4294967295, 0))))&(b>>31^(-1));}
function AEW(a,b,c){var d,e,f,g,h;d=Bp(M(JT(a)),F(4294967295, 0));e=Bp(M(JT(a)),F(4294967295, 0));if(C2(b,c))return b;f=Cf(c,b);g=Bp(f,F(4294967295, 0));h=Bc(f,32);return Z(Z(Z(b,Bc(Bb(e,g),32)),Bc(Bb(d,h),32)),Bb(e,h));}
function ADD(a){return (JT(a)>>>8|0)*5.9604644775390625E-8;}
function F7(){var a=this;EG.call(a);a.d_=0;a.d$=0;a.d9=0;a.d8=0;}
function Hi(a){return B(653);}
function X$(a){var b,c,d,e;b=a.d_+(-1640531527)|0;a.d_=b;c=a.d$+(b^CV(b))|0;a.d$=c;d=a.d9;b=b&c;c=d+(c^CV(b))|0;a.d9=c;d=a.d8;b=b&c;c=d+(c^CV(b))|0;a.d8=c;b=B3(c+(b<<13|(b>>>19|0))|0,739982445);b=B3(b^(b>>>12|0),695872825);b=b^(b>>>15|0);c=a.d_+(-1640531527)|0;a.d_=c;d=a.d$+(c^CV(c))|0;a.d$=d;e=a.d9;c=c&d;d=e+(d^CV(c))|0;a.d9=d;e=a.d8;c=c&d;d=e+(d^CV(c))|0;a.d8=d;c=B3(d+(c<<13|(c>>>19|0))|0,739982445);c=B3(c^(c>>>12|0),695872825);return FF(CL(M(b),32),Bp(M(c^(c>>>15|0)),F(4294967295, 0)));}
function Kb(a){var b,c,d;b=a.d_+(-1640531527)|0;a.d_=b;c=a.d$+(b^CV(b))|0;a.d$=c;d=a.d9;b=b&c;c=d+(c^CV(b))|0;a.d9=c;d=a.d8;b=b&c;c=d+(c^CV(b))|0;a.d8=c;b=B3(c+(b<<13|(b>>>19|0))|0,739982445);b=B3(b^(b>>>12|0),695872825);return b^(b>>>15|0);}
function ABg(a,b){return AZ3(Bb(M(b),Bp(M(Kb(a)),F(4294967295, 0))))&(b>>31^(-1));}
function ANA(a,b,c){var d,e,f,g,h;d=Bp(M(Kb(a)),F(4294967295, 0));e=Bp(M(Kb(a)),F(4294967295, 0));if(C2(b,c))return b;f=Cf(c,b);g=Bp(f,F(4294967295, 0));h=Bc(f,32);return Z(Z(Z(b,Bc(Bb(e,g),32)),Bc(Bb(d,h),32)),Bb(e,h));}
function ACN(a){return (Kb(a)>>>8|0)*5.9604644775390625E-8;}
function F_(){var a=this;EG.call(a);a.d4=R;a.d1=R;a.d0=R;a.d3=R;a.d2=R;}
function GN(a){return B(654);}
function Wz(a){var b,c,d,e,f,g;b=a.d4;c=a.d1;d=a.d0;e=a.d3;f=a.d2;a.d4=Z(b,F(2135587861, 2654435769));a.d1=Bm(b,f);a.d0=Z(c,e);a.d3=FF(CL(d,52),Bc(d,12));g=Cf(c,d);a.d2=g;return g;}
var Wo=I();
function Pc(){var a=this;Hb.call(a);a.B_=0.0;a.B$=0.0;a.Da=0;a.AD=0;}
var V0=I();
function Rz(){var a=this;C.call(a);a.jd=null;a.gl=null;}
function ACO(a,b){var c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jd.readyState==4){if(a.jd.status==200){b=a.gl;if(b.fc.dK){if(A5X===null){c=new Dd;c.cI=A0G;d=new N;d.b=D(16);c.bs=d;c.cE=D(32);c.cO=0;Dc();c.cM=A5s;A5X=c;}e=A5X;b=b.e7;d=new N;d.b=D(16);H(d,d.a,B(655));f=d.a;if(b===null)b=B(2);H(d,f,b);b=new L;g=d.b;h=d.a;O();i=D(h);b.e
=i;K(g,0,i,0,h);d=e.bs;H(d,d.a,b);h=d.a;Bo(d,h,h+1|0);d.b.data[h]=10;C7(e);}b=a.gl;b.fr.j9(b.e7,$rt_str(a.jd.responseText));}else if(a.jd.status!=404&&a.jd.status!=403){try{j=M(100);$p=1;continue _;}catch($$e){$$je=BJ($$e);if($$je instanceof DS){}else{throw $$e;}}b=a.gl;d=b.fc;f=b.g_;c=b.e7;b=b.fr;if(d.dK){if(A5X===null){k=new Dd;k.cI=A0G;e=new N;e.b=D(16);k.bs=e;k.cE=D(32);k.cO=0;Dc();k.cM=A5s;A5X=k;}l=A5X;e=new N;e.b=D(16);H(e,e.a,B(115));H(e,e.a,c===null?B(2):c);k=new L;g=e.b;m=e.a;O();i=D(m);k.e=i;K(g,0,
i,0,m);e=l.bs;H(e,e.a,k);m=e.a;Bo(e,m,m+1|0);e.b.data[m]=10;C7(l);}d.bH=d.bH+1|0;e=new Hn;e.fc=d;e.g_=f;e.e7=c;e.fr=b;b=null;d=null;e.dS=new C;e.dR=1;e.fz=d;e.fV=b;h=A58;A58=h+1|0;e.fR=M(h);b=new Fq;b.fB=e;Gq(b);}else{b=a.gl;b.fr.jQ(b.e7);}b=a.gl.fc;b.bH=b.bH-1|0;}return;case 1:a:{try{VQ(j);if(GS()){break _;}break a;}catch($$e){$$je=BJ($$e);if($$je instanceof DS){}else{throw $$e;}}}b=a.gl;d=b.fc;f=b.g_;c=b.e7;b=b.fr;if(d.dK){if(A5X===null){k=new Dd;k.cI=A0G;e=new N;e.b=D(16);k.bs=e;k.cE=D(32);k.cO=0;Dc();k.cM
=A5s;A5X=k;}l=A5X;e=new N;e.b=D(16);H(e,e.a,B(115));H(e,e.a,c===null?B(2):c);k=new L;g=e.b;m=e.a;O();i=D(m);k.e=i;K(g,0,i,0,m);e=l.bs;H(e,e.a,k);m=e.a;Bo(e,m,m+1|0);e.b.data[m]=10;C7(l);}d.bH=d.bH+1|0;e=new Hn;e.fc=d;e.g_=f;e.e7=c;e.fr=b;b=null;d=null;e.dS=new C;e.dR=1;e.fz=d;e.fV=b;h=A58;A58=h+1|0;e.fR=M(h);b=new Fq;b.fB=e;Gq(b);b=a.gl.fc;b.bH=b.bH-1|0;return;default:AFf();}}RN().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function Xn(a,b){var $p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACO(a,b);if(GS()){break _;}return;default:AFf();}}RN().s(a,b,$p);}
var AAR=I(0);
function Ld(){var a=this;Mp.call(a);a.tQ=null;a.wr=null;}
function ACX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.tQ;e=0;f=0;g=a.wr;a:{while(true){if((e+32|0)>f){h=b.h;i=b.g;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;Ot(b,d,j,f-j|0);e=0;}}j=c.h;l=c.g;if(!(j>=l?0:1)){j=b.h>=b.g?0:1;m=!j&&e>=f?A0J:A0K;break a;}k=g.data;l=l-j|0;h=k.length;if(l<h)h=l;n=new Rx;n.nP=b;n.xl=c;m=ADA(a,d,e,f,g,0,h,n);e=n.yf;if(m===null&&0==n.pF)m=A0J;AEf(c,g,0,n.pF);if(m!==null)break;}}B_(b,b.h-(f-e|0)|0);return m;}
var QF=I(Ld);
function ADA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;n=h.nP;if((n.g-n.h|0)<2?0:1)break a;i=A0J;break a;}o=k+1|0;k=j[k];if(!((k&192)!=128?0:1)){c=o+(-2)|0;i=new CK;i.by=2;i.bR=1;break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=o;}else if((l&240)!=224){if((l&248)!=240){c=k+(-1)|0;i=AWM(2,1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(XG(h,4))break a;i=
A0J;break a;}if((f+2|0)>g){c=k+(-1)|0;if(UB(h,2))break a;i=A0K;break a;}o=k+1|0;m=j[k];c=o+1|0;o=j[o];k=c+1|0;p=j[c];if(!Mi(a,m))break c;if(!Mi(a,o))break c;if(!Mi(a,p))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|p&63;c=f+1|0;j[f]=YL(q);m=c+1|0;j[c]=ACZ(q);}else{if((k+2|0)>d){c=k+(-1)|0;n=h.nP;if((n.g-n.h|0)<3?0:1)break a;i=A0J;break a;}c=k+1|0;r=j[k];k=c+1|0;o=j[c];if(!((r&192)!=128?0:1))break b;if(!((o&192)!=128?0:1))break b;s=((l&15)<<12|(r&63)<<6|o&63)&65535;m=s&64512;c=m!=55296?0:1;if(!c&&!(m!=56320
?0:1)?0:1){c=k+(-3)|0;i=new CK;i.by=2;i.bR=3;break a;}j=e.data;m=f+1|0;j[f]=s;}c=k;f=m;}break a;}c=k+(-3)|0;i=AAk(1);break a;}c=k+(-3)|0;i=new CK;i.by=2;i.bR=1;}h.yf=c;h.pF=f;return i;}
function Mi(a,b){return (b&192)!=128?0:1;}
function Nq(){var a=this;G5.call(a);a.u9=null;a.p_=null;}
function Ch(){var a=this;Ms.call(a);a.bX=0.0;a.b1=null;}
function Cq(a){S3(a,1);}
function S3(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.qn;d=a.bX;e=a.qb;f=d* -e/2.0;e=d*e/2.0;g=a.rh;Qy(c,f,e,d* -(g/2.0),d*g/2.0,a.bT,a.wm);c=a.rY;h=a.rg;i=a.b1;d=h.x;j=h.z;f=h.y;i.x=d;i.z=j;i.y=f;k=a.vJ;l=k.x;e=k.z;g=k.y;d=d+l;j=j+e;f=f+g;i.x=d;i.z=j;i.y=f;i=a.wy;k=A3K;k.x=d;k.z=j;k.y=f;l=h.x;e=h.z;g=h.y;l=d-l;e=j-e;g=f-g;k.x=l;k.z=e;k.y=g;Wb(c,k,i);i=A3L;l= -h.x;e= -h.z;g= -h.y;KX(i);m=i.cR.data;m[12]=l;m[13]=e;m[14]=g;Qr(c,i);GL(a.ba,a.qn.cR);TB(a.ba.cR,a.rY.cR);if(b){GL(a.nw,a.ba.cR);Wt(a.nw.cR);Z_(a.we,a.nw);}}
function JQ(){G5.call(this);this.i4=null;}
var A8j=0;function AX9(){AX9=Bi(JQ);AKJ();}
function Si(a,b){var c,d,e,f,g,h,i,j,$$je;c=a.i4;d=b.c$;e=new N;e.b=D(16);H(e,e.a,B(656));f=e.a;if(d===null)d=B(2);H(e,f,d);g=new L;h=e.b;i=e.a;O();j=D(i);g.e=j;K(h,0,j,0,i);c=c.n7(g);a:{try{e=AI_(XK(c));}catch($$e){$$je=BJ($$e);if($$je instanceof BU){e=$$je;break a;}else{throw $$e;}}return e;}c=a.i4;d=b.c$;b=new N;b.b=D(16);H(b,b.a,B(656));f=b.a;if(d===null)d=B(2);H(b,f,d);g=new L;h=b.b;i=b.a;j=D(i);g.e=j;K(h,0,j,0,i);c.yI(g);G(e);}
function ACC(a,b){var c,d,e,f,g,h,i,j;c=a.i4;d=b.c$;e=new N;e.b=D(16);H(e,e.a,B(657));f=e.a;if(d===null)d=B(2);a:{H(e,f,d);g=new L;h=e.b;i=e.a;O();j=D(i);g.e=j;K(h,0,j,0,i);if(c.n7(g)===null){c=a.i4;g=b.c$;b=new N;b.b=D(16);H(b,b.a,B(656));f=b.a;if(g===null)g=B(2);H(b,f,g);e=new L;h=b.b;i=b.a;j=D(i);e.e=j;K(h,0,j,0,i);if(c.n7(e)===null){f=0;break a;}}f=1;}return f;}
function AKJ(){A8j=B(656).e.data.length;}
var LO=I(0);
function Pq(){var a=this;C.call(a);a.p2=null;a.pz=null;}
function AIP(a,b){var c,d,e,f,g,h,i;c=a.p2;d=a.pz;e=new N;e.b=D(16);f=e.a;if(d===null)d=B(2);H(e,f,d);f=e.a;if(b===null)b=B(2);H(e,f,b);d=new L;g=e.b;h=e.a;O();i=D(h);d.e=i;K(g,0,i,0,h);return $rt_str(c.getItem($rt_ustr(d)));}
function AQH(a,b){var c,d,e,f,g,h,i;c=a.p2;d=a.pz;e=new N;e.b=D(16);f=e.a;if(d===null)d=B(2);H(e,f,d);f=e.a;if(b===null)b=B(2);H(e,f,b);d=new L;g=e.b;h=e.a;O();i=D(h);d.e=i;K(g,0,i,0,h);c.removeItem($rt_ustr(d));}
function QG(){var a=this;C.call(a);a.vj=null;a.sa=null;}
function AQ4(a,b){var c,d;c=a.sa;d=Df(c,b);return d<0?null:c.cZ.data[d];}
function ATg(a,b){Vx(a.vj,b,0);YQ(a.sa,b);}
function Dr(){var a=this;C.call(a);a.lm=null;a.mp=null;a.y0=0;a.ty=0;a.qd=0;a.zd=0;a.iJ=0;a.CF=0;a.Bj=0;a.oF=0;a.nT=0;a.ja=null;}
var A8k=null;var A8l=null;var A8g=null;var A8h=null;var A8m=null;var A8n=null;var A8o=null;var A8p=null;var A8q=null;var A8r=null;var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;var A8x=null;var A8y=null;function ID(){ID=Bi(Dr);AQl();}
function Gc(a,b,c,d,e){var f=new Dr();WC(f,a,b,c,d,e);return f;}
function WC(a,b,c,d,e,f){var g,h,i,j,k,l;ID();a.y0=d;a.zd=c;a.ty=e;a.qd=f;g=b.e.data;h=D(g.length);i=h.data;d=0;e=i.length;while(d<e){i[d]=g[d];d=d+1|0;}a.lm=h;a.iJ=e;g=Y(128);h=g.data;a.mp=g;e=0;f=h.length;if(e>f){b=new Bg;b.c=1;b.d=1;G(b);}while(e<f){j=e+1|0;h[e]=(-1);e=j;}j=0;while(true){d=a.iJ;if(j>=d)break;k=a.lm.data[j];g=a.mp.data;g[k&127]=j;if(c){if(A5y===null){if(A5z===null)A5z=Dz();A5y=Cc(Ce((A5z.value!==null?$rt_str(A5z.value):null)));}g[B$(A5y,k)&65535&127]=j;}j=j+1|0;}l=1.0/IS(d);a.CF=I7(IS(256.0)
*l)|0;a.Bj=I7(IS(65536.0)*l)|0;a.oF=I7(IS(4.294967296E9)*l)|0;c=I7(IS(1.8446744073709552E19)*l)|0;a.nT=c;c=c+1|0;d=32;if(c>d)d=c;a.ja=D(d);}
function Pm(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.nT;d=c-1|0;e=a.iJ;f=e>>>1|0;g=0;h=M(f);i=M(e);while(g<=d){j=C5(Bc(b,1),h);a.ja.data[d-g|0]=a.lm.data[V(Cf(b,Bb(j,i)))];g=g+1|0;b=j;}k=a.ja;O();l=new L;m=D(c);l.e=m;K(k,0,m,0,c);return l;}
function AEa(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.nT;e=d-1|0;f=a.iJ;g=f>>>1|0;h=0;i=M(g);j=M(f);while(h<=e){k=C5(Bc(c,1),i);a.ja.data[e-h|0]=a.lm.data[V(Cf(c,Bb(k,j)))];h=h+1|0;c=k;}l=a.ja;f=0;g=b.a;Bo(b,g,g+d|0);h=d+f|0;while(f<h){m=l.data;n=b.b.data;e=g+1|0;d=f+1|0;n[g]=m[f];g=e;f=d;}return b;}
function RK(a,b){var c,d,e,f,g,h,i,j,k;c=a.nT;d=DD(b,(-1));b=G4(Bm(Z(b,d),d));e=c;while(true){f=a.ja;g=f.data;h=a.lm.data;i=M(a.iJ);g[e]=h[V(G4(Dk(b,i)))];b=C5(b,i);if(Dl(b,R))break;e=e+(-1)|0;}if(Ey(d,R)){e=e+(-1)|0;g[e]=a.qd;}j=(c+1|0)-e|0;O();k=new L;g=D(j);k.e=g;K(f,e,g,0,j);return k;}
function Lm(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0&&d>0&&(d-c|0)>0){e=b.e.data;f=e.length;if((f-c|0)>0&&d<=f){if(c>=0&&c<f){g=e[c];if(g==a.qd){h=(-1);i=0;j=a.oF+1|0;}else if(g==a.ty){h=1;i=0;j=a.oF+1|0;}else{i=a.mp.data[g&127];if(i<0)return 0;h=1;j=a.oF;}k=c+1|0;a:{while(k<d&&k<(c+j|0)){l=a.mp;if(k<0)break a;if(k>=f)break a;g=l.data[e[k]&127];if(g<0)return B3(i,h);i=B3(i,a.iJ)+g|0;k=k+1|0;}return B3(i,h);}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}}return 0;}
function Q9(a,b){var c,d,e,f,g;FL();c=new N;c.b=D(16);c=OY(c,b,(-10000));d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);return d;}
function Ww(a,b,c){FL();return OY(b,c,(-10000));}
function AQl(){var b,c;A8k=Gc(B(658),1,36,43,45);A8l=Gc(B(659),1,36,43,45);A8g=Gc(B(660),1,36,43,45);A8h=Gc(B(661),1,112,43,45);A8m=Gc(B(662),1,36,43,45);A8n=Gc(B(464),0,61,42,45);A8o=Gc(B(663),0,36,42,33);A8p=Gc(B(664),0,36,43,45);b=Gc(B(665),0,92,43,45);A8q=b;c=U(Dr,[A8k,A8l,A8g,A8h,A8m,A8n,A8o,A8p,b]);b=new Nm;b.BE=c;A8r=b;A8s=$rt_createLongMultiArray([0,0]);A8t=$rt_createIntMultiArray([0,0]);A8u=$rt_createShortMultiArray([0,0]);A8v=$rt_createByteMultiArray([0,0]);A8w=$rt_createCharMultiArray([0,0]);A8x=
$rt_createDoubleMultiArray([0,0]);A8y=$rt_createFloatMultiArray([0,0]);}
var ACW=I();
function HT(b,c,d){var e,f,g,h;if(b!==null){e=b.e;f=e.data.length;if(!(f?0:1)){if(c<0)c=0;if(!(d>=0&&d<=f))d=f;g=Bw(c,d);if(g>=0)return B(43);if(g>0){b=new Bh;b.c=1;b.d=1;G(b);}if(!g){O();b=A36;}else if(!(!c&&d==f)){b=new L;d=d-c|0;O();h=D(d);b.e=h;K(e,c,h,0,d);}return b;}}return B(43);}
function EM(){var a=this;C.call(a);a.ip=0;a.pa=0.0;a.pp=0.0;}
var A8z=null;var A8A=null;var A8B=0;function Y8(a,b){var c,d;if((b&( -b|0))==b)return b*Ga(a,31)*4.6566128730773926E-10|0;while(true){c=Ga(a,31);d=c%b;if(c-d+(b-1|0)<0.0)continue;else break;}return d|0;}
function Ed(a,b){Il(a);try{AA5(a,V(DD(b,24))&16777215^1502,V(Bp(b,M(16777215)))^15525485);}finally{EI(a);}}
function Ga(a,b){var c,d,e,f;Il(a);try{c=a.pa*1.5525485E7;d=a.pp;e=c+d*1502.0;c=d*1.5525485E7+11.0;d=Pn(c*5.9604644775390625E-8);e=e+d;c=c-d*1.6777216E7;e=e%1.6777216E7;a.pa=e;a.pp=c;if(b<=24)return Pn(e*A8z.data[b]);f=e*(1<<(b-24|0))+Pn(c*A8A.data[b]);if(f>=2.147483648E9)f=f-4.294967296E9;return f;}finally{EI(a);}}
function AA5(a,b,c){Il(a);try{a.pa=b^1502;a.pp=c^15525485;a.ip=0;}finally{EI(a);}}
function U6(){var b,c,d,e,f,g;b=AN$(25);A8z=b;c=AN$(33);d=c.data;A8A=c;A8B=0;e=1.52587890625E-5;f=32;while(f>=0){d[f]=e;e=e*0.5;f=f+(-1)|0;}b=b.data;g=1.0;f=24;while(f>=0){b[f]=g;g=g*0.5;f=f+(-1)|0;}}
var Ux=I();
var Y4=I();
function Nm(){Hu.call(this);this.BE=null;}
var Wy=I();
function AQW(b){return !($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):F(0, 2146959360);}
var RM=I();
var A8C=null;function AZw(){AZw=Bi(RM);AFQ();}
function YI(b,c,d,e){var f;AZw();a:{b:{f=A8C;YN();if(f===A8D){if(A4P.I.width!=A4P.I.width)break b;if(A4P.I.height!=A4P.I.height)break b;}A3_.j5(b,c,d,e);break a;}A3_.j5(B3(b,A4P.I.width)/A4P.I.width|0,B3(c,A4P.I.height)/A4P.I.height|0,B3(d,A4P.I.width)/A4P.I.width|0,B3(e,A4P.I.height)/A4P.I.height|0);}}
function AFQ(){YN();A8C=A8D;}
var JR=I();
var A8E=null;var A8F=null;var A8G=null;function FL(){FL=Bi(JR);AFI();}
function OY(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;FL();if($rt_globals.isNaN(c)?1:0){a:{e=C9(b);B7(b,B(666));if(d!=(-10000)){if(F9(Z(M(e),M(d)),M(C9(b))))H6(b,e+d|0);else{e=e+d|0;while(true){if(C9(b)>=e)break a;DQ(b,32);}}}}return b;}if(c!==Infinity&&c!==(-Infinity)){f=AQW(c);e=AXW(f,R);if(!e){b:{e=C9(b);B7(b,B(667));if(d!=(-10000)){if(F9(Z(M(e),M(d)),M(C9(b))))H6(b,e+d|0);else{e=e+d|0;while(true){if(C9(b)>=e)break b;DQ(b,48);}}}}return b;}if(Dl(f,F(0, 2147483648))){c:{e=C9(b);B7(b,
B(668));if(d!=(-10000)){if(F9(Z(M(e),M(d)),M(C9(b))))H6(b,e+d|0);else{e=e+d|0;while(true){if(C9(b)>=e)break c;DQ(b,48);}}}}return b;}g=V(Bp(Bc(f,52),M(2047)));h=Bp(f,F(4294967295, 1048575));if(!g)i=(-1074);else{i=(g-1023|0)-52|0;h=FF(h,F(0, 1048576));}j=e>=0?0:1;k=Ey(Bp(h,M(1)),R)?0:1;l=Bb(M(4),h);m=Z(l,M(2));n=Dl(h,F(0, 1048576))&&g!=1?0:1;o=Cf(Cf(l,M(1)),M(n));e=i+(-2)|0;p=0;q=0;if(e>=0){r=Jf(0,((e*78913|0)>>>18|0)-1|0);s=(( -e|0)+r|0)+((122+Qx(r)|0)-1|0)|0;t=L3(l,r,s);u=L3(m,r,s);v=L3(o,r,s);if(r<=21){if
(Dl(Dk(l,M(5)),R))q=LR(l,r);else if(k)p=LR(o,r);else if(LR(m,r))u=Cf(u,M(1));}}else{w= -e|0;x=Jf(0,(B3(w,732923)>>>20|0)-1|0);s=w-x|0;y=x-(Qx(s)-121|0)|0;t=LQ(l,s,y);u=LQ(m,s,y);v=LQ(o,s,y);r=x+e|0;if(x<=1){q=1;if(!k)u=Cf(u,M(1));else p=n!=1?0:1;}else if(x<63)q=Ey(Bp(l,Cf(CL(M(1),x-1|0),M(1))),R)?0:1;}z=Xl(u);w=(r+z|0)-1|0;ba=0;bb=0;if(!p&&!q){while(true){u=C5(u,M(10));bc=C5(v,M(10));if(F$(u,bc))break;bb=V(Dk(t,M(10)));t=C5(t,M(10));ba=ba+1|0;v=bc;}bc=Z(t,M(Ey(t,v)&&bb<5?0:1));}else{while(true){u=C5(u,M(10));h
=C5(v,M(10));if(F$(u,h))break;p=p&(Ey(Dk(v,M(10)),R)?0:1);q=q&(bb?0:1);bb=V(Dk(t,M(10)));t=C5(t,M(10));ba=ba+1|0;v=h;}if(p)while(Dl(Dk(v,M(10)),R)){q=q&(bb?0:1);bb=V(Dk(t,M(10)));t=C5(t,M(10));v=C5(v,M(10));ba=ba+1|0;}if(q&&bb==5&&Dl(Bp(t,M(1)),R))bb=4;bc=Z(t,M(!(Dl(t,v)&&!p)&&bb<5?0:1));}s=z-ba|0;bd=C9(b);if(j)DQ(b,45);d:{if(w<0){B7(b,B(669));be=(-1);while(be>w){DQ(b,48);be=be+(-1)|0;}bf=C9(b);be=0;while(be<s){If(b,bf,V(Z(M(48),Dk(bc,M(10))))&65535);bc=C5(bc,M(10));be=be+1|0;}}else{e=w+1|0;if(e>=s){j=C9(b);be
=0;while(be<s){If(b,j,V(Z(M(48),Dk(bc,M(10))))&65535);bc=C5(bc,M(10));be=be+1|0;}while(s<e){DQ(b,48);s=s+1|0;}B7(b,B(670));}else{bf=C9(b);be=0;while(true){if(be>=s)break d;if(((s-be|0)-1|0)==w)If(b,bf,46);If(b,bf,V(Z(M(48),Dk(bc,M(10))))&65535);bc=C5(bc,M(10));be=be+1|0;}}}}if(d!=(-10000)){while(ba>=(-1)){DQ(b,48);ba=ba+(-1)|0;}if(F9(Z(M(bd),M(d)),M(C9(b))))H6(b,bd+d|0);}return b;}e=C9(b);if(c!==(-Infinity))B7(b,B(671));else B7(b,B(672));e:{if(d!=(-10000)){if(F9(Z(M(e),M(d)),M(C9(b))))H6(b,e+d|0);else{e=e+d
|0;while(true){if(C9(b)>=e)break e;DQ(b,32);}}}}return b;}
function Qx(b){FL();return (B3(b,1217359)>>>19|0)+1|0;}
function Xl(b){FL();if(C2(b,F(2808348672, 232830643)))return 19;if(C2(b,F(1569325056, 23283064)))return 18;if(C2(b,F(1874919424, 2328306)))return 17;if(C2(b,F(2764472320, 232830)))return 16;if(C2(b,F(276447232, 23283)))return 15;if(C2(b,F(1316134912, 2328)))return 14;if(C2(b,F(3567587328, 232)))return 13;if(C2(b,F(1215752192, 23)))return 12;if(C2(b,F(1410065408, 2)))return 11;if(C2(b,M(1000000000)))return 10;if(C2(b,M(100000000)))return 9;if(C2(b,M(10000000)))return 8;if(C2(b,M(1000000)))return 7;if(C2(b,M(100000)))return 6;if
(C2(b,M(10000)))return 5;if(C2(b,M(1000)))return 4;if(C2(b,M(100)))return 3;if(F9(b,M(10)))return 1;return 2;}
function LR(b,c){FL();return Y2(b)<c?0:1;}
function Y2(b){var c,d,e,f,g,h,i;FL();if(Ey(Dk(b,M(5)),R))return 0;if(Ey(Dk(b,M(25)),R))return 1;if(Ey(Dk(b,M(125)),R))return 2;if(Ey(Dk(b,M(625)),R))return 3;c=4;b=C5(b,M(625));while(true){if(F$(b,R)){d=new Bg;e=new N;e.b=D(16);H(e,e.a,B(43));Qi(e,e.a,b,10);f=new L;g=e.b;h=e.a;O();i=D(h);f.e=i;K(g,0,i,0,h);d.c=1;d.d=1;d.f=f;G(d);}if(Ey(Dk(b,M(5)),R))break;b=C5(b,M(5));c=c+1|0;}return c;}
function LQ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FL();e=Bc(b,31);f=Bp(b,M(2147483647));g=A8E.data;h=Bb(e,M(g[c].data[0]));i=Bb(f,M(g[c].data[0]));j=Bb(e,M(g[c].data[1]));k=Bb(f,M(g[c].data[1]));l=Bb(e,M(g[c].data[2]));m=Bb(f,M(g[c].data[2]));n=Bb(e,M(g[c].data[3]));o=Bb(f,M(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Bc(Z(Bc(Z(Z(Bc(Z(Z(Bc(Z(Z(Bc(o,31),m),n),31),k),l),31),i),j),21),CL(h,10)),p);q=new Bg;r=new N;r.b=D(16);H(r,r.a,B(43));P(r,r.a,p,10);s=new L;t=r.b;d=r.a;O();g=D(d);s.e=g;K(t,0,g,0,d);q.c
=1;q.d=1;q.f=s;G(q);}
function L3(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FL();e=Bc(b,31);f=Bp(b,M(2147483647));g=A8F.data;h=Bb(e,M(g[c].data[0]));i=Bb(f,M(g[c].data[0]));j=Bb(e,M(g[c].data[1]));k=Bb(f,M(g[c].data[1]));l=Bb(e,M(g[c].data[2]));m=Bb(f,M(g[c].data[2]));n=Bb(e,M(g[c].data[3]));o=Bb(f,M(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Bc(Z(Bc(Z(Z(Bc(Z(Z(Bc(Z(Z(Bc(o,31),m),n),31),k),l),31),i),j),21),CL(h,10)),p);q=new Bg;r=new N;r.b=D(16);H(r,r.a,B(43));P(r,r.a,p,10);s=new L;t=r.b;d=r.a;O();g=D(d);s.e=g;K(t,0,g,0,d);q.c
=1;q.d=1;q.f=s;G(q);}
function AFI(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;A8E=$rt_createIntMultiArray([4,326]);A8F=$rt_createIntMultiArray([4,291]);A8G=D(32);BV();b=A8H;if(b.v){c=(b.H+0|0)+1|0;d=Y(c);D3(d,b.p,0,31);e=new BP;f=b.v;e.Y=(-2);e.v=f;e.H=c;e.p=d;Do(e);b=e;}g=Hm(b,A8H);e=A8H;if(e.v){c=(e.H+0|0)+1|0;d=Y(c);D3(d,e.p,0,31);b=new BP;f=e.v;b.Y=(-2);b.v=f;b.H=c;b.p=d;Do(b);e=b;}e=Hm(e,A8H);h=0;while(h<326){i=QB(Gp(M(5)),h);j=ANT(i);FL();f=(B3(h,1217359)>>>19|0)+1|0;if(f!=j){b=new B2;e=new N;e.b=D(16);P(e,e.a,j,10);H(e,e.a,B(673));P(e,
e.a,f,10);g=new L;d=e.b;h=e.a;O();k=D(h);g.e=k;K(d,0,k,0,h);b.c=1;b.d=1;b.f=g;G(b);}l=0;m=j-121|0;while(l<4){n=A8E.data[h];c=m+((3-l|0)*31|0)|0;if(c&&i.v){if(c>0)b=E2(i,c);else{f= -c|0;c=f>>5;f=f&31;o=(i.H+c|0)+(f?1:0)|0;d=Y(o);D3(d,i.p,c,f);b=new BP;f=i.v;b.Y=(-2);b.v=f;b.H=o;b.p=d;Do(b);}}else b=i;k=n.data;b=Yx(b,g);k[l]=B3(b.v,b.p.data[0]);l=l+1|0;}a:{if(h<A8F.data.length){o=(j-1|0)+122|0;b=A8H;if(o&&b.v)b=o>0?AO4(b,o):E2(b, -o|0);b=Jg(ACQ(b,i),A8H);c=0;while(true){if(c>=4)break a;if(!c)A8F.data[h].data[c]
=Qg(RW(b,(3-c|0)*31|0));else A8F.data[h].data[c]=Qg(Yx(RW(b,(3-c|0)*31|0),e));c=c+1|0;}}}h=h+1|0;}}
var Ij=I();
function ATL(a,b,c,d){var e,f,g,h;e=0;while(e<d){f=a.tL();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
function ALE(a){}
function Mc(){var a=this;Ij.call(a);a.ks=null;a.gJ=0;a.qP=0;a.kj=0;}
function AI_(a){var b=new Mc();AHg(b,a);return b;}
function AHg(a,b){var c;c=b.data.length;a.ks=b;a.gJ=0;a.qP=0;a.kj=0+c|0;}
function AIv(a){var b,c,d;b=a.gJ;if(b>=a.kj)c=(-1);else{d=a.ks.data;a.gJ=b+1|0;c=d[b]&255;}return c;}
function AVg(a,b,c,d){var e,f,g,h,i;e=a.kj-a.gJ|0;if(d<e)e=d;f=0;while(f<e){g=b.data;d=c+1|0;h=a.ks.data;i=a.gJ;a.gJ=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function ALT(a){}
var O0=I(Fj);
var Gr=I(BQ);
var A8D=null;var A8I=null;var A8J=null;function YN(){YN=Bi(Gr);AHb();}
function AHb(){var b,c;b=new Gr;YN();b.u=B(674);b.n=0;A8D=b;c=new Gr;c.u=B(675);c.n=1;A8I=c;A8J=U(Gr,[b,c]);}
function BP(){var a=this;Ex.call(a);a.p=null;a.H=0;a.v=0;a.Y=0;}
var A8K=null;var A8H=null;var A8L=null;var A8M=null;var A8N=null;var A8O=null;function BV(){BV=Bi(BP);AWd();}
function AMv(a,b){var c=new BP();Zq(c,a,b);return c;}
function AYY(a,b){var c=new BP();AEj(c,a,b);return c;}
function Zq(a,b,c){var d;BV();a.Y=(-2);a.v=b;if(Dl(Bp(c,F(0, 4294967295)),R)){a.H=1;d=Y(1);d.data[0]=V(c);a.p=d;}else{a.H=2;a.p=Ew([V(c),AZ3(c)]);}}
function AEj(a,b,c){var d,e;BV();d=c.data;a.Y=(-2);e=d.length;if(e){a.v=b;a.H=e;a.p=c;Do(a);}else{a.v=0;a.H=1;c=Y(1);c.data[0]=0;a.p=c;}}
function Gp(b){BV();if(F9(b,R)){if(Dl(b,M(-1)))return A8M;return AMv((-1),G4(b));}if(VL(b,M(10)))return AMv(1,b);return A8N.data[V(b)];}
function RW(a,b){var c,d,e,f;if(b&&a.v){if(b>0)c=E2(a,b);else{b= -b|0;d=b>>5;b=b&31;e=(a.H+d|0)+(b?1:0)|0;f=Y(e);D3(f,a.p,d,b);c=new BP;b=a.v;BV();c.Y=(-2);c.v=b;c.H=e;c.p=f;Do(c);}return c;}return a;}
function RC(a,b){var c,d,e,f,g,h;if(!b)return !(a.p.data[0]&1)?0:1;if(b<0){c=new Jr;c.c=1;c.d=1;c.f=B(676);G(c);}d=b>>5;if(d>=a.H)return a.v>=0?0:1;e=a.p.data;f=e[d];b=1<<(b&31);g=a.v;if(g<0){if(a.Y==(-2)){if(!g)g=(-1);else{g=0;while(!e[g]){g=g+1|0;}}a.Y=g;}h=a.Y;if(d<h)return 0;f=h==d? -f|0:f^(-1);}return !(f&b)?0:1;}
function Qg(a){return B3(a.v,a.p.data[0]);}
function I3(a,b){var c,d,e;if(a===b)return 1;if(!(b instanceof BP))return 0;a:{if(a.v==b.v){c=a.H;if(c==b.H){d=b.p;c=c-1|0;while(c>=0){e=d.data;if(a.p.data[c]!=e[c])break;c=c+(-1)|0;}if(c>=0?0:1){c=1;break a;}}}c=0;}return c;}
function QB(a,b){var c,d,e,f,g,h;if(b<0){c=new Jr;c.c=1;c.d=1;c.f=B(677);G(c);}if(!b){BV();return A8H;}if(b!=1){BV();if(!I3(a,A8H)&&!I3(a,A8K)){if(RC(a,0))return WG(a,b);d=1;while(!RC(a,d)){d=d+1|0;}c=AD3(B3(d,b));if(d&&a.v){if(d>0)a=E2(a,d);else{d= -d|0;e=d>>5;d=d&31;f=(a.H+e|0)+(d?1:0)|0;g=Y(f);D3(g,a.p,e,d);h=new BP;d=a.v;h.Y=(-2);h.v=d;h.H=f;h.p=g;Do(h);a=h;}}h=QB(a,b);if(!h.v)c=A8K;else if(!c.v)c=A8K;else{FH();c=Fb(c,h);}return c;}}return a;}
function ACQ(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=b.v;if(!c){b=new Jr;b.c=1;b.d=1;b.f=B(678);G(b);}d=b.H;e=Bw(d,1);if(!e&&b.p.data[0]==1?1:0){if(c<=0){c=a.v;if(!c)b=a;else{b=new BP;c= -c|0;f=a.H;g=a.p;BV();b.Y=(-2);b.v=c;b.H=f;b.p=g;}a=b;}return a;}f=a.v;h=a.H;if((h+d|0)==2){i=C5(Bp(M(a.p.data[0]),F(4294967295, 0)),Bp(M(b.p.data[0]),F(4294967295, 0)));if(f!=c)i=G4(i);return Gp(i);}j=Bw(h,d);j=!j?O6(a.p,b.p,h):j<=0?(-1):1;if(!j){if(f!=c){BV();b=A8M;}else{BV();b=A8H;}return b;}if(j==(-1)){BV();return A8K;}k=(h-d|
0)+1|0;g=Y(k);l=f!=c?(-1):1;if(e)ANF(g,k,a.p,h,b.p,d);else AIT(g,a.p,h,b.p.data[0]);m=new BP;BV();m.Y=(-2);m.v=l;m.H=k;m.p=g;Do(m);return m;}
function Do(a){var b,c,d;while(true){b=a.H;if(b<=0)break;c=a.p.data;b=b-1|0;a.H=b;if(c[b])break;}c=a.p.data;d=a.H;a.H=d+1|0;if(!c[d])a.v=0;}
function AD3(b){var c,d,e,f,g;BV();c=A8O.data;if(b<c.length)return c[b];d=b>>5;e=b&31;f=d+1|0;c=Y(f);c.data[d]=1<<e;g=new BP;g.Y=(-2);g.v=1;g.H=f;g.p=c;return g;}
function AWd(){var b,c,d,e,f,g,h,i;b=new BP;BV();b.Y=(-2);b.v=0;b.H=1;c=Y(1);c.data[0]=0;b.p=c;A8K=b;d=new BP;d.Y=(-2);d.v=1;d.H=1;c=Y(1);c.data[0]=1;d.p=c;A8H=d;e=new BP;e.Y=(-2);e.v=1;e.H=1;c=Y(1);c.data[0]=10;e.p=c;A8L=e;f=new BP;f.Y=(-2);f.v=(-1);f.H=1;c=Y(1);c.data[0]=1;f.p=c;A8M=f;c=Bt(BP,11);g=c.data;g[0]=b;g[1]=d;b=new BP;b.Y=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=2;b.p=h;g[2]=b;b=new BP;b.Y=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=3;b.p=h;g[3]=b;b=new BP;b.Y=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=4;b.p=h;g[4]=b;b=new BP;b.Y
=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=5;b.p=h;g[5]=b;b=new BP;b.Y=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=6;b.p=h;g[6]=b;b=new BP;b.Y=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=7;b.p=h;g[7]=b;b=new BP;b.Y=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=8;b.p=h;g[8]=b;b=new BP;b.Y=(-2);b.v=1;b.H=1;h=Y(1);h.data[0]=9;b.p=h;g[9]=b;g[10]=e;A8N=c;A8O=Bt(BP,32);i=0;while(true){c=A8O.data;if(i>=c.length)break;c[i]=Gp(CL(M(1),i));i=i+1|0;}}
var LM=I(Gf);
var Jr=I(BU);
var Hj=I();
var A8P=null;var A8Q=null;var A8R=null;var A8S=null;function FH(){FH=Bi(Hj);AGr();}
function Fb(b,c){var d,e,f,g,h,i,j,k,l,m,n;FH();if(c.H<=b.H){d=c;c=b;b=d;}if(b.H<63)return UZ(c,b);e=c.H;f=(e&(-2))<<4;if(f&&c.v){if(f>0)d=E2(c,f);else{g= -f|0;h=g>>5;g=g&31;e=(e+h|0)+(g?1:0)|0;i=Y(e);D3(i,c.p,h,g);d=new BP;h=c.v;BV();d.Y=(-2);d.v=h;d.H=e;d.p=i;Do(d);}}else d=c;if(f&&b.v){if(f>0)j=E2(b,f);else{e= -f|0;h=e>>5;e=e&31;g=(b.H+h|0)+(e?1:0)|0;i=Y(g);D3(i,b.p,h,e);j=new BP;e=b.v;BV();j.Y=(-2);j.v=e;j.H=g;j.p=i;Do(j);}}else j=b;if(f&&d.v){if(f<=0)k=E2(d, -f|0);else{e=f>>5;h=f&31;g=(d.H+e|0)+(h?1:0)
|0;i=Y(g);D3(i,d.p,e,h);k=new BP;e=d.v;BV();k.Y=(-2);k.v=e;k.H=g;k.p=i;Do(k);}}else k=d;l=Hm(c,k);if(f&&j.v){if(f<=0)c=E2(j, -f|0);else{e=f>>5;h=f&31;g=(j.H+e|0)+(h?1:0)|0;i=Y(g);D3(i,j.p,e,h);c=new BP;e=j.v;BV();c.Y=(-2);c.v=e;c.H=g;c.p=i;Do(c);}}else c=j;m=Hm(b,c);k=Fb(d,j);n=Fb(l,m);b=Jg(Jg(Fb(Hm(d,l),Hm(m,j)),k),n);if(f&&b.v){if(f<=0)b=E2(b, -f|0);else{e=f>>5;h=f&31;g=(b.H+e|0)+(h?1:0)|0;i=Y(g);D3(i,b.p,e,h);c=new BP;e=b.v;BV();c.Y=(-2);c.v=e;c.H=g;c.p=i;Do(c);b=c;}}e=f<<1;if(e&&k.v){if(e<=0)k=E2(k, -e|
0);else{f=e>>5;e=e&31;h=(k.H+f|0)+(e?1:0)|0;i=Y(h);D3(i,k.p,f,e);c=new BP;e=k.v;BV();c.Y=(-2);c.v=e;c.H=h;c.p=i;Do(c);k=c;}}return Jg(Jg(k,b),n);}
function UZ(b,c){var d,e,f,g,h,i,j,k,l,m,n;FH();d=b.H;e=c.H;f=d+e|0;g=b.v==c.v?1:(-1);if(f!=2){h=b.p;i=c.p;j=Y(f);ABF(h,d,i,e,j);k=new BP;BV();k.Y=(-2);k.v=g;k.H=f;k.p=j;Do(k);return k;}l=Z(Z(Bb(Bp(M(b.p.data[0]),F(4294967295, 0)),Bp(M(c.p.data[0]),F(4294967295, 0))),R),R);m=V(l);n=AZ3(l);if(!n){b=new BP;BV();b.Y=(-2);b.v=g;b.H=1;h=Y(1);h.data[0]=m;b.p=h;}else{b=new BP;h=Ew([m,n]);BV();b.Y=(-2);b.v=g;b.H=2;b.p=h;}return b;}
function ABF(b,c,d,e,f){var g,h,i,j,k;FH();if(c&&e){if(c==1){g=b.data[0];h=R;c=0;i=Bp(M(g),F(4294967295, 0));while(c<e){b=d.data;j=f.data;h=Z(Z(Bb(Bp(M(b[c]),F(4294967295, 0)),i),Bp(M(V(h)),F(4294967295, 0))),R);j[c]=V(h);h=Bc(h,32);c=c+1|0;}f.data[e]=V(h);}else if(e!=1)TK(b,d,f,c,e);else{e=d.data[0];k=R;g=0;h=Bp(M(e),F(4294967295, 0));while(g<c){d=b.data;j=f.data;k=Z(Z(Bb(Bp(M(d[g]),F(4294967295, 0)),h),Bp(M(V(k)),F(4294967295, 0))),R);j[g]=V(k);k=Bc(k,32);g=g+1|0;}f.data[c]=V(k);}return;}}
function TK(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;FH();if(b===c&&e==f){Pt(b,e,d);return;}g=0;while(g<e){h=b.data;i=R;j=h[g];k=0;l=Bp(M(j),F(4294967295, 0));while(k<f){h=c.data;m=d.data;j=h[k];n=g+k|0;o=m[n];p=V(i);i=Z(Z(Bb(l,Bp(M(j),F(4294967295, 0))),Bp(M(o),F(4294967295, 0))),Bp(M(p),F(4294967295, 0)));m[n]=V(i);i=Bc(i,32);k=k+1|0;}d.data[g+f|0]=V(i);g=g+1|0;}}
function WG(b,c){var d,e,f,g;FH();BV();d=A8H;while(c>1){if(c&1)d=!b.v?A8K:!d.v?A8K:Fb(d,b);e=b.H;if(e!=1)f=AYY(1,Pt(b.p,e,Y(e<<1)));else{g=b.v;f=!g?A8K:!g?A8K:Fb(b,b);}c=c>>1;b=f;}return !b.v?A8K:!d.v?A8K:Fb(d,b);}
function Pt(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;FH();e=0;while(e<c){f=R;g=e+1|0;h=g;while(h<c){i=b.data;j=d.data;k=i[e];l=i[h];m=e+h|0;n=j[m];o=V(f);f=Z(Z(Bb(Bp(M(k),F(4294967295, 0)),Bp(M(l),F(4294967295, 0))),Bp(M(n),F(4294967295, 0))),Bp(M(o),F(4294967295, 0)));j[m]=V(f);f=Bc(f,32);h=h+1|0;}d.data[e+c|0]=V(f);e=g;}e=c<<1;k=0;h=0;while(h<e){i=d.data;l=i[h];i[h]=l<<1|k;k=l>>>31|0;h=h+1|0;}if(k)d.data[e]=k;f=R;e=0;k=0;while(e<c){i=b.data;j=d.data;g=i[e];h=i[e];m=j[k];l=V(f);f=Z(Z(Bb(Bp(M(g),F(4294967295, 0)),
Bp(M(h),F(4294967295, 0))),Bp(M(m),F(4294967295, 0))),Bp(M(l),F(4294967295, 0)));j[k]=V(f);p=Bc(f,32);k=k+1|0;f=Z(p,Bp(M(j[k]),F(4294967295, 0)));j[k]=V(f);f=Bc(f,32);e=e+1|0;k=k+1|0;}return d;}
function AGr(){var b,c,d,e,f,g;A8P=Ew([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A8Q=Ew([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);A8R=Bt(BP,32);A8S=Bt(BP,32);b=M(1);c=0;while(c<=18){A8S.data[c]=Gp(b);A8R.data[c]=Gp(CL(b,c));b=Bb(b,M(5));c=c+1|0;}while(c<A8R.data.length){d=A8S.data;e=c-1|0;f=d[e];g=d[1];if(!g.v){BV();f=A8K;}else if(!f.v){BV();f=A8K;}else{FH();f=Fb(f,g);}d[c]=f;d=A8R.data;f=d[e];BV();g=A8L;if(!g.v)f=A8K;else if(!f.v)f=A8K;else
{FH();f=Fb(f,g);}d[c]=f;c=c+1|0;}}
var Vi=I();
function ANT(b){var c,d,e,f,g,h;c=b.v;if(!c)return 0;d=b.H;e=d<<5;f=b.p.data;g=d-1|0;h=f[g];if(c<0){if(b.Y==(-2)){if(!c)c=(-1);else{c=0;while(!f[c]){c=c+1|0;}}b.Y=c;}if(b.Y==g)h=h+(-1)|0;}return e-CV(h)|0;}
function AO4(b,c){var d,e,f,g;d=c>>5;c=c&31;e=(b.H+d|0)+(c?1:0)|0;f=Y(e);D3(f,b.p,d,c);g=new BP;c=b.v;BV();g.Y=(-2);g.v=c;g.H=e;g.p=f;Do(g);return g;}
function D3(b,c,d,e){var f,g,h,i,j,k;a:{if(!e)K(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break a;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|(i[k]>>>g|0);f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}}
function E2(b,c){var d,e,f,g,h,i,j,k,l,m;d=c>>5;c=c&31;e=b.H;if(d>=e){if(b.v>=0){BV();b=A8K;}else{BV();b=A8M;}return b;}a:{e=e-d|0;f=e+1|0;g=Y(f);ADz(g,e,b.p,d,c);h=b.v;if(h>=0)f=e;else{i=0;while(true){j=Bw(i,d);if(j>=0)break;if(b.p.data[i])break;i=i+1|0;}if(j>=0){if(c<=0){f=e;break a;}if(!(b.p.data[i]<<(32-c|0))){f=e;break a;}}k=g.data;l=0;while(true){i=Bw(l,e);if(i>=0)break;if(k[l]!=(-1))break;k[l]=0;l=l+1|0;}if(i)f=e;k[l]=k[l]+1|0;}}m=new BP;BV();m.Y=(-2);m.v=h;m.H=f;m.p=g;Do(m);return m;}
function ADz(b,c,d,e,f){var g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)K(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=(i[c]>>>f|0)|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f|0;}return g;}
var Mg=I();
var A8T=null;var A8U=null;function XK(b){var c,d,e,f,g,h,i,j,k,l;c=b.e.data;d=c.length;e=BS(d/2|0);f=e.data;g=0;h=f.length;a:{b:{while(g<h){i=g*2|0;if(i<0)break a;if(i>=d)break a;j=c[i];i=i+1|0;if(i<0)break b;if(i>=d)break b;k=c[i];l=A8U.data;f[g]=((l[j]<<4)+l[k]|0)<<24>>24;g=g+1|0;}return e;}b=new Bd;b.c=1;b.d=1;G(b);}b=new Bd;b.c=1;b.d=1;G(b);}
function ABj(){var b,c,d,e;b=D(16);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;A8T=b;b=Y(128);d=b.data;A8U=b;e=0;while(e<c.length){d[c[e]]=e;if(c[e]>=65)d[(c[e]-65|0)+97|0]=e;e=e+1|0;}}
function SQ(){var a=this;Ij.call(a);a.qH=0;a.rF=null;}
function AOq(a){var b,c;if(a.qH==a.rF.dO.length)return (-1);b=a.rF;c=a.qH;a.qH=c+1|0;return b.dO[c]&255;}
var So=I();
var A5w=null;function AXU(){AXU=Bi(So);ASo();}
function ASo(){var b,c,d,e,f;b=new H0;c=J6(16);b.f5=0;d=Bt(FO,c);e=d.data;b.c9=d;b.mf=0.75;b.hC=e.length*0.75|0;A5w=b;e=Bt(EK,6).data;AW$();e[0]=A8V;e[1]=A8W;e[2]=A8X;e[3]=A8Y;e[4]=A8Z;e[5]=A80;c=e.length;f=0;while(f<c){b=e[f];JZ(A5w,b.f2,b);f=f+1|0;}}
function PD(){Bg.call(this);this.B8=null;}
var Gw=I();
var A8V=null;var A8W=null;var A8X=null;var A8Y=null;var A8Z=null;var A80=null;function AW$(){AW$=Bi(Gw);APm();}
function APm(){var b,c,d,e,f,g,h,i;Dc();A8V=A5s;b=new PR;c=Bt(L,0);d=c.data;El(B(679));e=d.length;f=0;while(f<e){El(d[f]);f=f+1|0;}b.f2=B(679);b.iY=c.cH();A8W=b;b=new OX;c=Bt(L,0);d=c.data;El(B(680));e=d.length;f=0;while(f<e){El(d[f]);f=f+1|0;}b.f2=B(680);b.iY=c.cH();A8X=b;g=new Jm;c=Bt(L,0);d=c.data;El(B(681));h=d.length;i=0;while(i<h){El(d[i]);i=i+1|0;}g.f2=B(681);g.iY=c.cH();g.oa=1;g.ms=0;A8Y=g;b=new Jm;c=Bt(L,0);d=c.data;El(B(682));h=d.length;i=0;while(i<h){El(d[i]);i=i+1|0;}b.f2=B(682);b.iY=c.cH();b.oa
=0;b.ms=0;A8Z=b;b=new Jm;c=Bt(L,0);d=c.data;El(B(683));h=d.length;i=0;while(i<h){El(d[i]);i=i+1|0;}b.f2=B(683);b.iY=c.cH();b.oa=0;b.ms=1;A80=b;}
var PR=I(EK);
function AEV(a){var b,c,d,e,f;b=new Rb;c=BS(1);d=c.data;d[0]=63;Er();e=A64;b.h2=e;b.hH=e;f=d.length;if(f&&f>=b.fY){b.mB=a;b.kL=c.cH();b.lo=1.0;b.fY=1.0;b.kx=D(512);b.ka=BS(512);return b;}e=new Bg;J$(e,B(469));G(e);}
var OX=I(EK);
function ASG(a){var b,c,d,e,f;b=new R_;c=BS(1);d=c.data;d[0]=63;Er();e=A64;b.h2=e;b.hH=e;f=d.length;if(f&&f>=b.fY){b.mB=a;b.kL=c.cH();b.lo=1.0;b.fY=1.0;b.kx=D(512);b.ka=BS(512);return b;}e=new Bg;J$(e,B(469));G(e);}
function Jm(){var a=this;EK.call(a);a.oa=0;a.ms=0;}
function AFE(a){var b,c,d,e,f,g,h;b=new Or;c=a.oa;d=a.ms;e=BS(1);f=e.data;f[0]=63;Er();g=A64;b.h2=g;b.hH=g;h=f.length;if(h&&h>=b.fY){b.mB=a;b.kL=e.cH();b.lo=2.0;b.fY=4.0;b.kx=D(512);b.ka=BS(512);b.qo=c;b.qV=d;return b;}g=new Bg;J$(g,B(469));G(g);}
var ABP=I();
function O6(b,c,d){var e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=C2(Bp(M(b.data[e]),F(4294967295, 0)),Bp(M(c[e]),F(4294967295, 0)))?1:(-1);}return d;}
function Jg(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.v;e=c.v;if(!d)return c;if(!e)return b;f=b.H;g=c.H;if((f+g|0)==2){h=Bp(M(b.p.data[0]),F(4294967295, 0));i=Bp(M(c.p.data[0]),F(4294967295, 0));if(d!=e)return Gp(d>=0?Cf(h,i):Cf(i,h));j=Z(h,i);k=V(j);l=AZ3(j);if(!l){b=new BP;BV();b.Y=(-2);b.v=d;b.H=1;m=Y(1);m.data[0]=k;b.p=m;}else{b=new BP;m=Ew([k,l]);BV();b.Y=(-2);b.v=d;b.H=2;b.p=m;}return b;}if(d==e){if(f<g){m=c.p;n=b.p;o=Y(g+1|0);L0(o,m,g,n,f);}else{n=b.p;m=c.p;o=Y(f+1|0);L0(o,n,f,m,g);}}else{p=Bw(f,g);p=
!p?O6(b.p,c.p,f):p<=0?(-1):1;if(!p){BV();return A8K;}if(p!=1){m=c.p;n=b.p;o=Y(g);LZ(o,m,g,n,f);d=e;}else{m=b.p;n=c.p;o=Y(f);LZ(o,m,f,n,g);}}m=o.data;q=new BP;e=m.length;BV();q.Y=(-2);q.v=d;q.H=e;q.p=o;Do(q);return q;}
function L0(b,c,d,e,f){var g,h,i,j;g=b.data;b=e.data;c=c.data;h=Z(Bp(M(c[0]),F(4294967295, 0)),Bp(M(b[0]),F(4294967295, 0)));g[0]=V(h);i=DD(h,32);if(d<f){j=1;while(j<d){h=Z(i,Z(Bp(M(c[j]),F(4294967295, 0)),Bp(M(b[j]),F(4294967295, 0))));g[j]=V(h);i=DD(h,32);j=j+1|0;}while(j<f){h=Z(i,Bp(M(b[j]),F(4294967295, 0)));g[j]=V(h);i=DD(h,32);j=j+1|0;}}else{j=1;while(j<f){h=Z(i,Z(Bp(M(c[j]),F(4294967295, 0)),Bp(M(b[j]),F(4294967295, 0))));g[j]=V(h);i=DD(h,32);j=j+1|0;}while(j<d){h=Z(i,Bp(M(c[j]),F(4294967295, 0)));g[j]
=V(h);i=DD(h,32);j=j+1|0;}}if(Ey(i,R))g[j]=V(i);}
function Hm(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=b.v;e=c.v;if(!e)return b;if(!d){if(!e)b=c;else{b=new BP;d= -e|0;e=c.H;f=c.p;BV();b.Y=(-2);b.v=d;b.H=e;b.p=f;}return b;}g=b.H;h=c.H;if((g+h|0)==2){i=Bp(M(b.p.data[0]),F(4294967295, 0));j=Bp(M(c.p.data[0]),F(4294967295, 0));if(d<0)i=G4(i);if(e<0)j=G4(j);return Gp(Cf(i,j));}k=Bw(g,h);l=!k?O6(b.p,c.p,g):k<=0?(-1):1;if(l==(-1)){k= -e|0;if(d==e){f=c.p;m=b.p;n=Y(h);LZ(n,f,h,m,g);}else{f=c.p;m=b.p;n=Y(h+1|0);L0(n,f,h,m,g);}}else if(d!=e){f=b.p;m=c.p;n=Y(g+1|0);L0(n,f,g,
m,h);k=d;}else{if(!l){BV();return A8K;}f=b.p;m=c.p;n=Y(g);LZ(n,f,g,m,h);k=d;}f=n.data;o=new BP;d=f.length;BV();o.Y=(-2);o.v=k;o.H=d;o.p=n;Do(o);return o;}
function LZ(b,c,d,e,f){var g,h,i,j,k,l;g=R;h=0;while(h<f){i=b.data;j=e.data;k=Z(g,Cf(Bp(M(c.data[h]),F(4294967295, 0)),Bp(M(j[h]),F(4294967295, 0))));i[h]=V(k);g=DD(k,32);h=h+1|0;}while(h<d){l=b.data;k=Z(g,Bp(M(c.data[h]),F(4294967295, 0)));l[h]=V(k);g=DD(k,32);h=h+1|0;}}
var Zi=I();
function ANF(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=f.data;i=Y(e+1|0);j=Y(g+1|0);k=g-1|0;l=CV(h[k]);if(l){D3(j,f,0,l);D3(i,d,0,l);}else{K(d,0,i,0,e);K(f,0,j,0,g);}h=j.data;f=i.data;m=h[k];n=c-1|0;o=g-2|0;p=Bp(M(m),F(4294967295, 0));while(n>=0){a:{if(f[e]==m)q=(-1);else{r=AKq(Z(CL(Bp(M(f[e]),F(4294967295, 0)),32),Bp(M(f[e-1|0]),F(4294967295, 0))),m);q=V(r);s=AZ3(r);if(q){t=0;q=q+1|0;while(true){q=q+(-1)|0;if(t)break;u=Bb(Bp(M(q),F(4294967295, 0)),Bp(M(h[o]),F(4294967295, 0)));v=M(s);r=Z(CL(v,32),
Bp(M(f[e-2|0]),F(4294967295, 0)));w=Z(Bp(v,F(4294967295, 0)),p);if(CV(AZ3(w))>=32)s=V(w);else t=1;if(F$(Bm(u,F(0, 2147483648)),Bm(r,F(0, 2147483648))))break a;}}}}if(q){c=e-g|0;if(APl(i,c,j,g,q)){q=q+(-1)|0;v=R;x=0;while(x<g){k=c+x|0;v=Z(v,Z(Bp(M(f[k]),F(4294967295, 0)),Bp(M(h[x]),F(4294967295, 0))));f[k]=V(v);v=Bc(v,32);x=x+1|0;}}}if(b!==null)b.data[n]=q;e=e+(-1)|0;n=n+(-1)|0;}if(l){ADz(j,g,i,0,l);return j;}K(i,0,j,0,g);return i;}
function AIT(b,c,d,e){var f,g,h,i,j,k,l,m,n;f=R;g=Bp(M(e),F(4294967295, 0));h=d-1|0;i=M(e>>>1|0);e=e&1;j=CL(g,1);while(h>=0){k=c.data;l=FF(CL(f,32),Bp(M(k[h]),F(4294967295, 0)));if(C2(l,R)){m=C5(l,g);f=Dk(l,g);}else{n=Bc(l,1);m=C5(n,i);f=Z(CL(Dk(n,i),1),Bp(l,M(1)));if(e){if(F$(m,f))f=Cf(f,m);else if(VL(Cf(m,f),g)){f=Z(f,Cf(j,m));m=Cf(m,M(2));}else{f=Z(f,Cf(g,m));m=Cf(m,M(1));}}}b.data[h]=V(Bp(m,F(4294967295, 0)));h=h+(-1)|0;}return V(f);}
function AKq(b,c){var d,e,f,g,h;d=Bp(M(c),F(4294967295, 0));if(C2(b,R)){e=C5(b,d);f=Dk(b,d);}else{g=Bc(b,1);h=M(c>>>1|0);e=C5(g,h);f=Z(CL(Dk(g,h),1),Bp(b,M(1)));if(c&1){if(F$(e,f))f=Cf(f,e);else if(F$(Cf(e,f),d)){f=Z(f,Cf(d,e));e=Cf(e,M(1));}else{f=Z(f,Cf(CL(d,1),e));e=Cf(e,M(2));}}}return FF(CL(f,32),Bp(e,F(4294967295, 0)));}
function APl(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=R;h=R;i=0;j=Bp(M(f),F(4294967295, 0));while(i<e){k=d.data;l=b.data;f=k[i];m=V(g);FH();g=Z(Z(Bb(Bp(M(f),F(4294967295, 0)),j),Bp(M(m),F(4294967295, 0))),R);m=c+i|0;n=Z(Cf(Bp(M(l[m]),F(4294967295, 0)),Bp(g,F(4294967295, 0))),h);l[m]=V(n);h=DD(n,32);g=Bc(g,32);i=i+1|0;}b=b.data;c=c+e|0;j=Z(Cf(Bp(M(b[c]),F(4294967295, 0)),g),h);b[c]=V(j);return AZ3(j);}
function Nx(){var a=this;C.call(a);a.iD=null;a.fC=null;a.js=0;a.jE=0;}
function Qb(){var a=this;C.call(a);a.lq=0;a.iZ=0;a.fb=0;a.no=R;a.qx=null;a.up=null;a.xN=R;a.t9=null;}
var AEe=I();
function Yx(b,c){if(c.v&&b.v){BV();if(I3(c,A8M))return b;if(I3(b,A8M))return c;if(b.v>0){if(c.v<=0)return AB9(b,c);return AUG(b,c);}if(c.v>0)return AB9(c,b);if(b.H<=c.H)return AA6(c,b);return AA6(b,c);}BV();return A8K;}
function AUG(b,c){var d,e,f,g,h,i,j;d=b.H;e=c.H;if(d<e)e=d;if(b.Y==(-2)){if(!b.v)d=(-1);else{d=0;while(!b.p.data[d]){d=d+1|0;}}b.Y=d;}f=b.Y;if(c.Y==(-2)){if(!c.v)d=(-1);else{d=0;while(!c.p.data[d]){d=d+1|0;}}c.Y=d;}g=c.Y;if(f>g)g=f;if(g>=e){BV();return A8K;}h=Y(e);i=h.data;while(g<e){i[g]=b.p.data[g]&c.p.data[g];g=g+1|0;}j=new BP;BV();j.Y=(-2);j.v=1;j.H=e;j.p=h;Do(j);return j;}
function AB9(b,c){var d,e,f,g,h,i,j;if(b.Y==(-2)){if(!b.v)d=(-1);else{d=0;while(!b.p.data[d]){d=d+1|0;}}b.Y=d;}e=b.Y;if(c.Y==(-2)){if(!c.v)d=(-1);else{d=0;while(!c.p.data[d]){d=d+1|0;}}c.Y=d;}f=c.Y;d=b.H;if(f>=d){BV();return A8K;}g=Y(d);if(e<=f)e=f;if(e==f){g.data[e]=( -c.p.data[e]|0)&b.p.data[e];e=e+1|0;}f=c.H;h=f>=d?d:f;i=g.data;while(e<h){i[e]=(c.p.data[e]^(-1))&b.p.data[e];e=e+1|0;}a:{if(e>=f)while(true){if(e>=d)break a;i[e]=b.p.data[e];e=e+1|0;}}j=new BP;BV();j.Y=(-2);j.v=1;j.H=d;j.p=g;Do(j);return j;}
function AA6(b,c){var d,e,f,g,h,i,j,k,l,m;if(b.Y==(-2)){if(!b.v)d=(-1);else{d=0;while(!b.p.data[d]){d=d+1|0;}}b.Y=d;}e=b.Y;if(c.Y==(-2)){if(!c.v)d=(-1);else{d=0;while(!c.p.data[d]){d=d+1|0;}}c.Y=d;}f=c.Y;d=c.H;if(e>=d)return b;g=Bw(f,e);if(g>0)e=f;h=g>0?( -c.p.data[e]|0)&(b.p.data[e]^(-1)):g>=0?( -c.p.data[e]|0)&( -b.p.data[e]|0):(c.p.data[e]^(-1))&( -b.p.data[e]|0);if(!h){e=e+1|0;a:{while(e<d){h=(b.p.data[e]|c.p.data[e])^(-1);if(h)break a;e=e+1|0;}}if(!h){b:{while(true){g=b.H;if(e>=g)break;h=b.p.data[e]^(-1);if
(h)break b;e=e+1|0;}}if(!h){d=g+1|0;i=Y(d);i.data[d-1|0]=1;j=new BP;BV();j.Y=(-2);j.v=(-1);j.H=d;j.p=i;return j;}}}k=b.H;l=Y(k);m=l.data;m[e]= -h|0;h=e+1|0;while(h<d){m[h]=b.p.data[h]|c.p.data[h];h=h+1|0;}while(h<k){m[h]=b.p.data[h];h=h+1|0;}j=new BP;BV();j.Y=(-2);j.v=(-1);j.H=k;j.p=l;return j;}
function Rx(){var a=this;C.call(a);a.nP=null;a.xl=null;a.yf=0;a.pF=0;}
function XG(a,b){var c;c=a.nP;return (c.g-c.h|0)<b?0:1;}
function UB(a,b){var c;c=a.xl;return (c.g-c.h|0)<b?0:1;}
var Gy=I(Fj);
var Mr=I(Gf);
function O$(){var a=this;D7.call(a);a.en=null;a.EU=null;}
function Zy(){var a=this;C.call(a);a.tW=0;a.Es=0;a.wW=null;}
function AX2(a,b){var c=new Zy();AJB(c,a,b);return c;}
function AJB(a,b,c){a.wW=b;a.Es=c;a.tW=c;}
function ANV(a){var b,c,d,e,f,g,h,i,j,k;b=a.wW;c=a.tW;b=b.dI;d=b.dG;if(!d){b=new B2;b.c=1;b.d=1;C3(b);G(b);}if(c>=0){e=Bw(c,b.er);if(e<0){a:{f=b.ca.data;g=c*2|0;if(f[g]<0)h=null;else{b=b.hK;if(!d){b=new B2;b.c=1;b.d=1;C3(b);G(b);}if(c>=0&&e<0){i=f[g];if(!d){b=new B2;b.c=1;b.d=1;C3(b);G(b);}if(c>=0&&e<0){g=f[g+1|0];c=Bw(i,g);if(c>0){b=new Bh;b.c=1;b.d=1;C3(b);G(b);}if(!c){O();h=A36;}else if(!i&&g==b.e.data.length)h=b;else{h=new L;f=b.e;c=g-i|0;O();j=D(c);h.e=j;K(f,i,j,0,c);}break a;}b=new Bh;O();h=new N;Di(h);h.b
=D(16);P(h,h.a,c,10);k=new L;f=h.b;i=h.a;Di(k);j=D(i);k.e=j;K(f,0,j,0,i);b.c=1;b.d=1;C3(b);b.f=k;G(b);}b=new Bh;O();h=new N;Di(h);h.b=D(16);P(h,h.a,c,10);k=new L;f=h.b;i=h.a;Di(k);j=D(i);k.e=j;K(f,0,j,0,i);b.c=1;b.d=1;C3(b);b.f=k;G(b);}}return h;}}b=new Bh;O();h=new N;Di(h);h.b=D(16);P(h,h.a,c,10);k=new L;f=h.b;i=h.a;Di(k);j=D(i);k.e=j;K(f,0,j,0,i);b.c=1;b.d=1;C3(b);b.f=k;G(b);}
var Rb=I(Fc);
function ALq(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j>=d){n=h.iD;if(!((n.g-n.h|0)<2?0:1)){i=A0J;break a;}j=j+(-1)|0;break a;}if(!((k[j]&64512)!=56320?0:1)){i=new CK;i.by=2;i.bR=1;break a;}j=j+(-1)|0;i=new CK;i.by=3;i.bR=2;break a;}if(m!=56320?0:1){i=new CK;i.by=2;i.bR=1;}if(l>=128){i=new CK;i.by=3;i.bR=1;j=j+(-1)|0;break a;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.js=j;h.jE=f;return i;}
var R_=I(Fc);
function ASb(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j==d){n=h.iD;if(!((n.g-n.h|0)<2?0:1)){i=A0J;break a;}j=j+(-1)|0;break a;}if(!((k[j]&64512)!=56320?0:1)){i=new CK;i.by=2;i.bR=1;break a;}j=j+(-1)|0;i=new CK;i.by=3;i.bR=2;break a;}if(m!=56320?0:1){i=new CK;i.by=2;i.bR=1;}if(l>=256){j=j+(-1)|0;i=new CK;i.by=3;i.bR=1;break a;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.js=j;h.jE=f;return i;}
function Or(){var a=this;Fc.call(a);a.qo=0;a.qV=0;}
function ARS(a,b,c,d,e,f,g,h){var i,j;if(a.qo){if((f+2|0)>g){h=h.fC;return !(h.h>=h.g?0:1)?A0K:null;}a.qo=0;if(!a.qV){i=e.data;j=f+1|0;i[f]=(-2);f=j+1|0;i[j]=(-1);}else{i=e.data;j=f+1|0;i[f]=(-1);f=j+1|0;i[j]=(-2);}}return !a.qV?Uu(a,b,c,d,e,f,g,h):Uk(a,b,c,d,e,f,g,h);}
function Uk(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new CK;i.by=2;i.bR=1;break a;}if((f+2|0)>g){c=k+(-1)|0;m=h.fC;if((m.g-m.h|0)<2?0:1)break a;i=A0K;break a;}j=e.data;c=f+1|0;j[f]=(l&255)<<24>>24;f=c+1|0;j[c]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.iD;if((m.g-m.h|0)<2?0:1)break a;i=A0J;break a;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new CK;i.by=2;i.bR=1;break a;}if((f+4|0)
>g){c=c+(-2)|0;m=h.fC;if((m.g-m.h|0)<4?0:1)break a;i=A0K;break a;}j=e.data;k=f+1|0;j[f]=(l&255)<<24>>24;f=k+1|0;j[k]=l>>8<<24>>24;k=f+1|0;j[f]=(n&255)<<24>>24;f=k+1|0;j[k]=n>>8<<24>>24;}}}h.js=c;h.jE=f;return i;}
function Uu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new CK;i.by=2;i.bR=1;break a;}if((f+2|0)>g){c=k+(-1)|0;m=h.fC;if((m.g-m.h|0)<2?0:1)break a;i=A0K;break a;}j=e.data;c=f+1|0;j[f]=l>>8<<24>>24;f=c+1|0;j[c]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.iD;if((m.g-m.h|0)<2?0:1)break a;i=A0J;break a;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new CK;i.by=2;i.bR=1;break a;}if((f+4|0)
>g){c=c+(-2)|0;m=h.fC;if((m.g-m.h|0)<4?0:1)break a;i=A0K;break a;}j=e.data;k=f+1|0;j[f]=l>>8<<24>>24;f=k+1|0;j[k]=(l&255)<<24>>24;k=f+1|0;j[f]=n>>8<<24>>24;f=k+1|0;j[k]=(n&255)<<24>>24;}}}h.js=c;h.jE=f;return i;}
function O8(){var a=this;D7.call(a);a.eV=null;a.os=null;a.nx=null;a.n6=null;}
function AGP(a,b){a.eV.en.no=AZ2(b);}
function AE8(a,b){b=a.eV.en;b.iZ=1;b.fb=0;}
function Y5(a,b,c){IL(a.n6,a.os,a.nx,c);b=a.eV.en;b.lq=1;b.fb=0;return 0;}
function Jk(){var a=this;C.call(a);a.bD=null;a.bf=0;}
var A81=null;function Dv(a,b){var c,d,e,f;c=a.bD;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=D(e);K(c,0,f,0,a.bf);a.bD=f;}
function JU(a){var b,c,d;b=a.bf+4|0;if(b>a.bD.data.length)Dv(a,b);c=a.bD.data;d=a.bf;b=d+1|0;a.bf=b;c[d]=110;d=b+1|0;a.bf=d;c[b]=117;b=d+1|0;a.bf=b;c[d]=108;a.bf=b+1|0;c[b]=108;}
function GO(a,b){var c,d,e;c=a.bf;if(c==a.bD.data.length)Dv(a,c+1|0);d=a.bD.data;e=a.bf;a.bf=e+1|0;d[e]=b;}
function No(a,b,c,d){var e,f,g,h;if(b==(-2147483648)){e=B(684).e.data.length;b=a.bf+e|0;if(b>a.bD.data.length)Dv(a,b);HK(B(684),0,e,a.bD,a.bf);a.bf=b;return a;}if(b<0){e=a.bf;if(e==a.bD.data.length)Dv(a,e+1|0);f=a.bD.data;g=a.bf;a.bf=g+1|0;f[g]=45;b= -b|0;}a:{if(c>1){h=b>=0?1:2;g=b;while(true){g=g/10|0;if(!g)break;h=h+1|0;}e=c-h|0;while(true){if(e<=0)break a;c=a.bf;if(c==a.bD.data.length)Dv(a,c+1|0);f=a.bD.data;h=a.bf;a.bf=h+1|0;f[h]=d;e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){c=A81.data[V(C5(Dk(M(b),F(1410065408, 2)),
M(1000000000)))];d=a.bf;if(d==a.bD.data.length)Dv(a,d+1|0);f=a.bD.data;e=a.bf;a.bf=e+1|0;f[e]=c;}if(b>=100000000){c=A81.data[(b%1000000000|0)/100000000|0];d=a.bf;if(d==a.bD.data.length)Dv(a,d+1|0);f=a.bD.data;e=a.bf;a.bf=e+1|0;f[e]=c;}if(b>=10000000){c=A81.data[(b%100000000|0)/10000000|0];d=a.bf;if(d==a.bD.data.length)Dv(a,d+1|0);f=a.bD.data;e=a.bf;a.bf=e+1|0;f[e]=c;}if(b>=1000000){c=A81.data[(b%10000000|0)/1000000|0];d=a.bf;if(d==a.bD.data.length)Dv(a,d+1|0);f=a.bD.data;e=a.bf;a.bf=e+1|0;f[e]=c;}if(b>=100000)GO(a,
A81.data[(b%1000000|0)/100000|0]);GO(a,A81.data[(b%100000|0)/10000|0]);}if(b>=1000)GO(a,A81.data[(b%10000|0)/1000|0]);if(b>=100)GO(a,A81.data[(b%1000|0)/100|0]);if(b>=10)GO(a,A81.data[(b%100|0)/10|0]);GO(a,A81.data[b%10|0]);return a;}
function ZN(){A81=E$([48,49,50,51,52,53,54,55,56,57]);}
var K3=I(BU);
var Mt=I(BU);
function L7(){Gy.call(this);this.sA=0;}
function AKd(a){var b,c,d,e,f,g;b=a.sA;c=new N;c.b=D(16);H(c,c.a,B(685));P(c,c.a,b,10);d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);return d;}
function K0(){Gy.call(this);this.st=0;}
function AJx(a){var b,c,d,e,f,g;b=a.st;c=new N;c.b=D(16);H(c,c.a,B(686));P(c,c.a,b,10);d=new L;e=c.b;f=c.a;O();g=D(f);d.e=g;K(e,0,g,0,f);return d;}
var Na=I();
var A57=null;function AY3(){AY3=Bi(Na);AN5();}
function AN5(){var b,c;FB();b=Y((A6Y.cH()).data.length);c=b.data;A57=b;c[A6r.n]=1;c[A6o.n]=2;c[A6q.n]=3;c[A6p.n]=4;c[A6N.n]=5;}
var LK=I(Fa);
var Kj=I(Fa);
var Nl=I(Fa);
function Ho(){var a=this;EA.call(a);a.gN=0;a.e4=null;a.fI=null;a.e8=null;}
function AHX(a){var b,c,d,e,f;b=new $rt_globals.XMLHttpRequest();c=new Ny;c.g4=a;c.iA=b;c=Cm(c,"handleEvent");b.onreadystatechange=c;c=a.e8;d=a.fI;e=new IM;e.sj=c;e.mP=d;c=Cm(e,"handleEvent");b.onprogress=c;d=a.e4;f=a.gN;b.open("GET",$rt_ustr(d),!!f);if(a.gN){d="arraybuffer";b.responseType=d;}b.send();}
function TC(){var a=this;D7.call(a);a.nK=null;a.DT=null;}
function AWS(a,b){var c=new TC();ATP(c,a,b);return c;}
function ATP(a,b,c){a.DT=b;a.nK=c;}
function AH0(a,b){a.nK.eV.en.no=AZ2(b);}
function AOV(a,b){b=a.nK.eV.en;b.iZ=1;b.fb=0;}
function AGD(a,b,c){c=a.nK;b=null;IL(c.n6,c.os,c.nx,b);b=c.eV.en;b.lq=1;b.fb=0;return 0;}
var WF=I();
function FK(){C.call(this);this.lY=0;}
var A0O=null;var A0P=null;var A0Q=null;function ALk(a){return a.lY;}
function AG8(){var b;b=new FK;b.lY=1;A0O=b;b=new FK;b.lY=0;A0P=b;A0Q=J($rt_booleancls());}
var R$=I();
var A37=null;function AKl(){AKl=Bi(R$);AE2();}
function ADO(){var b,c,d,e,f,g;AKl();b=A37;if(b.hQ){b.hQ=0;c=b.fu.data;d=null;e=0;f=c.length;if(e>f){b=new Bg;b.c=1;b.d=1;G(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}c=b.cZ.data;d=null;e=0;f=c.length;if(e>f){b=new Bg;b.c=1;b.d=1;G(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}}E4();BW(b,B(687),A4m);BW(A37,B(688),A4k);BW(A37,B(689),A4g);BW(A37,B(690),A4h);BW(A37,B(691),A4i);BW(A37,B(692),A4j);BW(A37,B(693),A4n);BW(A37,B(694),A4o);BW(A37,B(695),A4p);BW(A37,B(696),A4q);BW(A37,B(697),A4r);BW(A37,B(698),A4s);BW(A37,B(699),A4t);BW(A37,
B(700),A4u);BW(A37,B(701),A4v);BW(A37,B(702),A4w);BW(A37,B(703),A4x);BW(A37,B(704),A4y);BW(A37,B(705),A4z);BW(A37,B(706),A4A);BW(A37,B(707),A4B);BW(A37,B(708),A4C);BW(A37,B(709),A4D);BW(A37,B(710),A4E);BW(A37,B(711),A4F);BW(A37,B(712),A4G);BW(A37,B(713),A4H);BW(A37,B(714),A4I);BW(A37,B(715),A4J);BW(A37,B(716),A4K);BW(A37,B(717),A4L);BW(A37,B(718),A4M);BW(A37,B(719),A4N);BW(A37,B(720),A4O);}
function AE2(){A37=Fy(51,0.800000011920929);ADO();}
function M_(){var a=this;D7.call(a);a.j2=null;a.uP=null;a.yb=null;a.mu=null;}
function AKR(a,b){a.j2.eV.en.no=AZ2(b);}
function AFx(a,b){b=a.j2.eV.en;b.iZ=1;b.fb=0;}
function TG(a,b,c){var d,e,f,g,h,i;d=$rt_globals.window.document.createElement("img");e=a.uP;if(e!==null)d.setAttribute("crossOrigin",$rt_ustr(e));e=a.mu;e.bH=e.bH+1|0;e=new OD;e.oh=a;e.EX=b;e.xg=c;e.tr=d;d.addEventListener("load",Cm(e,"handleEvent"),!!0);d.addEventListener("error",Cm(e,"handleEvent"),!!0);if(!a.mu.yx){b=$rt_ustr(b);d.src=b;}else{b=a.yb;c=ABo(c);e=new N;e.b=D(16);H(e,e.a,B(721));f=e.a;if(b===null)b=B(2);H(e,f,b);H(e,e.a,B(722));f=e.a;if(c===null)c=B(2);H(e,f,c);b=new L;g=e.b;h=e.a;O();i=D(h);b.e
=i;K(g,0,i,0,h);b=$rt_ustr(b);d.src=b;}return 0;}
function ALn(a,b,c){return TG(a,b,c);}
function Ny(){var a=this;C.call(a);a.iA=null;a.g4=null;}
function Y1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.iA.readyState==4){if(a.iA.status==200){b=a.g4;if(b.e8.dK){if(A5X===null){c=new Dd;c.cI=A0G;d=new N;d.b=D(16);c.bs=d;c.cE=D(32);c.cO=0;Dc();c.cM=A5s;A5X=c;}e=A5X;b=b.e4;d=new N;d.b=D(16);H(d,d.a,B(655));f=d.a;if(b===null)b=B(2);H(d,f,b);b=new L;g=d.b;h=d.a;O();i
=D(h);b.e=i;K(g,0,i,0,h);DQ(B7(e.bs,b),10);C7(e);}e=a.iA.response;j=new $rt_globals.Int8Array(e);b=a.g4;d=b.fI;c=b.e4;b=new IO;b.dO=j;b.ru=e;d.j9(c,b);}else if(a.iA.status!=404&&a.iA.status!=403){try{k=M(100);$p=1;continue _;}catch($$e){$$je=BJ($$e);if($$je instanceof DS){}else{throw $$e;}}b=a.g4;d=b.e8;f=b.gN;c=b.e4;b=b.fI;if(d.dK){if(A5X===null){j=new Dd;j.cI=A0G;e=new N;e.b=D(16);j.bs=e;j.cE=D(32);j.cO=0;Dc();j.cM=A5s;A5X=j;}j=A5X;e=new N;e.b=D(16);H(e,e.a,B(115));H(e,e.a,c===null?B(2):c);l=new L;g=e.b;m
=e.a;O();i=D(m);l.e=i;K(g,0,i,0,m);e=j.bs;H(e,e.a,l);n=e.a;Bo(e,n,n+1|0);e.b.data[n]=10;C7(j);}d.bH=d.bH+1|0;e=new Ho;e.e8=d;e.gN=f;e.e4=c;e.fI=b;b=null;d=null;e.dS=new C;e.dR=1;e.fz=d;e.fV=b;h=A58;A58=h+1|0;e.fR=M(h);b=new Fq;b.fB=e;Gq(b);}else{b=a.g4;b.fI.jQ(b.e4);}b=a.g4.e8;b.bH=b.bH-1|0;}return;case 1:a:{try{VQ(k);if(GS()){break _;}break a;}catch($$e){$$je=BJ($$e);if($$je instanceof DS){}else{throw $$e;}}}b=a.g4;d=b.e8;f=b.gN;c=b.e4;b=b.fI;if(d.dK){if(A5X===null){j=new Dd;j.cI=A0G;e=new N;e.b=D(16);j.bs
=e;j.cE=D(32);j.cO=0;Dc();j.cM=A5s;A5X=j;}j=A5X;e=new N;e.b=D(16);H(e,e.a,B(115));H(e,e.a,c===null?B(2):c);l=new L;g=e.b;m=e.a;O();i=D(m);l.e=i;K(g,0,i,0,m);e=j.bs;H(e,e.a,l);n=e.a;Bo(e,n,n+1|0);e.b.data[n]=10;C7(j);}d.bH=d.bH+1|0;e=new Ho;e.e8=d;e.gN=f;e.e4=c;e.fI=b;b=null;d=null;e.dS=new C;e.dR=1;e.fz=d;e.fV=b;h=A58;A58=h+1|0;e.fR=M(h);b=new Fq;b.fB=e;Gq(b);b=a.g4.e8;b.bH=b.bH-1|0;return;default:AFf();}}RN().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ADL(a,b){var $p,$z;$p=0;if(ALw()){var $T=RN();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Y1(a,b);if(GS()){break _;}return;default:AFf();}}RN().s(a,b,$p);}
function OD(){var a=this;C.call(a);a.EX=null;a.xg=null;a.tr=null;a.oh=null;}
function WW(a,b){var c;if(BO($rt_str(b.type),B(723))){b=a.oh.j2.eV.en;b.iZ=1;b.fb=0;}else{b=a.xg;b.rN=a.tr;c=a.oh.j2;IL(c.n6,c.os,c.nx,b);b=c.eV.en;b.lq=1;b.fb=0;}b=a.oh.mu;b.bH=b.bH-1|0;}
function AJ_(a,b){WW(a,b);}
$rt_packages([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang"]);
$rt_metadata([C,0,0,[],0,3,0,0,["eP",AZQ(AJd),"ek",AZR(AOD),"r",AZQ(AHM)],ACG,0,C,[],0,3,0,0,0,GG,0,C,[],0,3,0,A0W,0,MS,0,C,[],3,3,0,0,0,LA,0,C,[MS],0,3,0,0,0,DL,0,C,[],3,3,0,0,0,ACr,0,LA,[DL],0,3,0,0,0,DR,0,C,[],3,3,0,0,0,Gl,0,C,[DR],0,3,0,0,0,DB,0,C,[],3,3,0,0,0,Cd,0,C,[],3,3,0,0,0,BQ,0,C,[DB,Cd],1,3,0,0,["r",AZQ(ALx)],E7,0,BQ,[],12,3,0,AXj,0,Gs,0,C,[],0,3,0,0,0,LF,0,C,[],3,3,0,0,0,Ja,0,Gs,[LF],0,3,0,0,0,GZ,0,C,[],3,3,0,0,0,Eo,0,C,[],3,3,0,0,0,Hl,0,C,[GZ,Eo],0,3,0,0,0,G9,0,C,[],3,3,0,0,0,B8,0,C,[G9],0,3,0,
0,0,HH,0,B8,[],0,3,0,0,0,AAw,0,HH,[],0,0,0,0,0,Gu,0,BQ,[],12,3,0,AUs,0,Mk,0,C,[],3,3,0,0,0,Jh,0,C,[Mk],3,3,0,0,0,G7,0,C,[],3,3,0,0,0,D2,0,C,[G7],1,3,0,0,0,ACb,0,D2,[],0,0,0,0,0,L8,0,Hl,[],0,3,0,0,0,Ig,0,C,[G9],0,3,0,0,0,VU,0,C,[],1,3,0,0,0,Ts,0,C,[],0,3,0,0,0,SN,0,C,[],3,3,0,0,0,La,0,C,[SN],0,3,0,0,0,AAd,0,La,[],0,0,0,0,0,XP,0,Gl,[],0,3,0,0,0,Pr,0,C,[],32,0,0,A05,0,Y$,0,C,[],1,3,0,0,0,QR,0,C,[],32,0,0,A07,0,ACa,0,D2,[],0,0,0,0,0,FX,0,C,[Mk],0,3,0,0,0,QO,0,FX,[Jh],0,3,0,0,0,He,0,C,[],4,3,0,A1f,0,Ln,0,C,[G9],
1,3,0,0,0,SI,0,HH,[],0,3,0,0,0,O7,0,C,[],0,3,0,0,0,JV,0,C,[],0,3,0,A1j,0,Mb,0,C,[G9],1,3,0,0,0,I6,0,FX,[Jh],0,3,0,0,0]);
$rt_metadata([SJ,0,FX,[Jh],0,3,0,0,0,Eh,0,B8,[],0,3,0,0,0,Sz,0,I6,[],0,3,0,0,0,Vf,0,Gl,[],0,3,0,0,0,KC,0,C,[],3,3,0,0,0,YO,0,Gl,[],0,3,0,0,0,W_,0,C,[DR],4,3,0,0,0,MM,0,C,[],32,0,0,A1l,0,CZ,0,BQ,[],12,3,0,Zw,0,CI,0,C,[DR],1,3,0,0,0,Fz,0,CI,[],1,3,0,0,0,XA,0,Fz,[],0,3,0,0,0,Z5,0,Fz,[],0,3,0,0,0,Ds,0,CI,[],1,3,0,0,0,Fn,0,Ds,[],1,3,0,0,0,TD,0,Fn,[],0,3,0,0,0,UG,0,C,[G9],0,0,0,0,0,MA,0,CI,[],0,3,0,0,0,Vm,0,MA,[],0,3,0,0,0,Wx,0,CI,[],0,3,0,0,0,YJ,0,CI,[],0,3,0,0,0,ABa,0,CI,[],0,3,0,0,0,ABE,0,C,[],0,3,0,0,0,Lh,0,CI,
[],1,3,0,0,0,Yr,0,Lh,[],0,3,0,0,0,VG,0,Ds,[],0,3,0,0,0,AB7,0,Ds,[],0,3,0,0,0,ACs,0,Fn,[],0,3,0,0,0,AAs,0,CI,[],0,3,0,0,0,AAB,0,Fn,[],0,3,0,0,0,ADo,0,Ds,[],0,3,0,0,0,AC1,0,Ds,[],0,3,0,0,0,WP,0,CI,[],0,3,0,0,0,Yh,0,Ds,[],0,3,0,0,0,Yn,0,CI,[],0,3,0,0,0,W1,0,CI,[],0,3,0,0,0,Ys,0,Fz,[],0,3,0,0,0,T7,0,Ds,[],0,3,0,0,0,ADp,0,CI,[],0,3,0,0,0,Z$,0,Fn,[],0,3,0,0,0,WS,0,Fz,[],0,3,0,0,0,ZM,0,CI,[],0,3,0,0,0,UH,0,Ds,[],0,3,0,0,0,XX,0,Ds,[],0,3,0,0,0,Oc,0,C,[DL],0,3,0,0,0,Dx,0,Ja,[KC],0,3,0,0,0,DG,0,Dx,[],0,3,0,A1C,0,GC,0,
DG,[GZ],0,3,0,0,0,K8,0,GC,[],0,3,0,0,0,VC,0,K8,[],0,3,0,0,0]);
$rt_metadata([AB$,0,B8,[],0,0,0,0,0,LN,0,Dx,[],0,3,0,0,0,PT,0,C,[],3,3,0,0,0,Fd,0,C,[PT],1,3,0,0,0,WI,0,Fd,[],0,0,0,0,0,DM,0,Gs,[KC],0,3,0,0,0,Uf,0,DM,[],0,3,0,0,0,AB8,0,B8,[],0,0,0,0,0,B1,0,C,[],1,3,0,AE6,0,QW,0,B1,[],0,0,0,0,0,AAe,0,B1,[],0,0,0,0,0,Kw,0,Eh,[],0,3,0,0,0,Yo,0,Kw,[],0,3,0,0,0,SC,0,B1,[],0,0,0,0,0,ADe,0,B8,[],0,0,0,0,0,H8,0,DG,[],0,3,0,0,0,AAf,0,B1,[],0,0,0,0,0,GY,0,C,[],3,3,0,0,0,EW,0,C,[Cd,GY],0,3,0,0,0,EN,"Table$DebugRect",12,EW,[],0,3,0,AZA,0,WL,0,Fd,[],0,0,0,0,0,FS,0,DM,[GZ],0,3,0,0,0,VK,
0,FS,[],0,3,0,0,0,X1,0,B8,[],0,0,0,0,0,OJ,0,C,[],3,3,0,0,0,ABc,0,C,[OJ],0,3,0,0,0,G0,0,C,[],0,3,0,0,0,Ha,0,G0,[],0,3,0,0,0,Rv,0,Ha,[],0,3,0,0,0,L4,0,DM,[GZ],0,3,0,0,0,Xi,0,L4,[],0,3,0,0,0,AD$,0,LN,[],0,0,0,0,0,KD,0,Dx,[],0,3,0,0,0,AEv,0,GC,[],0,3,0,0,0,Ml,0,DM,[LF],0,3,0,0,0,SA,0,B1,[],0,0,0,0,0,RU,0,C,[],0,3,0,0,0,WY,0,C,[G7],0,0,0,0,0,Yp,0,B8,[],0,0,0,0,0,Ze,0,D2,[],0,0,0,0,0,XB,0,C,[],0,3,0,0,0,AAV,0,B8,[],0,0,0,0,0,ADX,0,Eh,[],0,0,0,0,0,XZ,0,Ig,[],0,0,0,0,0,QS,0,B1,[],0,0,0,0,0,QV,0,B1,[],0,0,0,0,0,Qt,0,
C,[],3,3,0,0,0,Ka,0,C,[],0,3,0,0,0,Nu,0,Ka,[],0,3,0,0,0,WJ,0,Fd,[],0,0,0,0,0]);
$rt_metadata([AB6,0,Ln,[],0,0,0,0,0,AB_,0,Mb,[],0,0,0,0,0,ADf,0,B8,[],0,0,0,0,0,ADg,0,Eh,[],0,0,0,0,0,SB,0,B1,[],0,0,0,0,0,EL,0,C,[DR],0,3,0,A1W,0,PN,0,Ha,[],0,3,0,0,0,Ya,0,B8,[],0,0,0,0,0,Up,0,D2,[],0,0,0,0,0,QX,0,B1,[],0,0,0,0,0,VW,0,Dx,[],0,3,0,0,0,X0,0,B8,[],0,0,0,0,0,P6,0,C,[],0,3,0,0,0,H9,0,B1,[],0,3,0,0,0,WZ,0,KD,[],0,3,0,0,0,QT,0,B1,[],0,0,0,0,0,P2,0,DM,[GZ],0,3,0,0,0,X8,0,L8,[],0,0,0,0,0,Sh,0,C,[],0,3,0,0,0,KL,0,DM,[],0,3,0,A10,0,NK,0,C,[],0,3,0,0,0,AAg,0,B1,[],0,0,0,0,0,SD,0,B1,[],0,0,0,0,0,ABK,0,
H8,[],0,3,0,0,0,QU,0,B1,[],0,0,0,0,0,Ps,0,C,[],0,3,0,0,0,ADU,0,C,[],0,3,0,0,0,D1,0,BQ,[],12,3,0,AZd,0,AD2,0,B1,[],0,0,0,0,0,XQ,0,D2,[],0,0,0,0,0,DJ,0,C,[],1,3,0,0,0,SE,0,DJ,[],0,0,0,0,0,Uj,0,C,[Qt],0,3,0,0,0,Sl,0,C,[],0,3,0,0,0,Qc,0,C,[],0,3,0,0,0,QP,0,C,[],0,3,0,0,0,JY,0,B8,[],0,3,0,0,0,Uo,0,D2,[],0,0,0,0,0,ADh,0,Ml,[],0,0,0,0,0,Um,0,C,[],3,3,0,0,0,Yb,0,B8,[],0,0,0,0,0,AEm,0,Dx,[],0,3,0,0,0,Z4,0,Dx,[],0,3,0,0,0,X9,0,Eh,[],0,0,0,0,0,L_,0,C,[],0,3,0,0,0,WH,0,L_,[],0,0,0,0,0,AC6,0,Gs,[DL],0,3,0,0,0,TY,0,B8,[],
0,0,0,0,0,ABR,0,GC,[],0,3,0,0,0,Zu,0,B8,[],0,0,0,0,0]);
$rt_metadata([ADM,0,Eh,[],0,0,0,0,0,RX,0,G0,[],0,3,0,0,0,Z6,0,Dx,[],0,3,0,0,0,P8,0,C,[],0,3,0,0,0,PA,0,C,[],0,3,0,0,0,Zh,0,DM,[],0,3,0,0,0,ADY,0,Hl,[],0,0,0,0,0,TZ,0,B8,[],0,0,0,0,0,Rd,0,Dx,[],0,3,0,0,0,AD9,0,JY,[],0,3,0,0,0,T0,0,DG,[],0,0,0,0,0,WK,0,Fd,[],0,0,0,0,0,S$,0,C,[],1,3,0,0,0,Sx,0,C,[],0,3,0,0,0,Eq,0,C,[Cd],0,3,0,A2g,0,Bu,0,C,[],1,3,0,Ep,0,UR,0,Bu,[],0,3,0,0,0,XS,0,C,[],0,3,0,0,0,Rn,0,Bu,[],0,0,0,0,0,ADx,0,C,[],0,3,0,0,0,Ff,0,Bu,[],0,3,0,0,0,Ik,0,Ff,[],0,3,0,0,0,Ic,0,Ff,[],0,3,0,0,0,JJ,0,C,[],3,3,
0,0,0,Vo,0,C,[JJ],0,3,0,0,0,Rq,0,Bu,[],0,0,0,0,0,ACh,0,C,[GY],0,3,0,0,0,Rm,0,Bu,[],0,0,0,0,0,Ie,0,Bu,[],0,3,0,0,0,Rl,0,Bu,[],0,0,0,0,0,Rk,0,Bu,[],0,0,0,0,0,JA,0,C,[],4,3,0,0,0,Tq,0,DJ,[],0,0,0,0,0,Jo,0,C,[],3,3,0,0,0,BL,0,C,[Cd,Jo],0,3,0,0,0,ZY,0,Bu,[],0,0,0,0,0,G_,0,Bu,[],0,3,0,0,0,Zf,0,C,[],0,3,0,0,0,Rs,0,Bu,[],0,0,0,0,0,ST,0,G_,[],0,3,0,0,0,WV,0,C,[DR],0,3,0,0,0,E9,0,BQ,[],12,3,0,AYL,0,Qa,0,C,[],0,3,0,A24,0,IF,0,Bu,[],0,3,0,0,0,X4,0,IF,[],0,3,0,0,0,QH,0,Bu,[],0,0,0,0,0,ZI,0,C,[Cd],4,3,0,0,0,Rj,0,Bu,[],0,
0,0,0,0,Ev,0,C,[Cd,Jo],0,3,0,AYz,0,Ul,0,Ie,[],0,3,0,0,0]);
$rt_metadata([Xv,0,Bu,[],0,3,0,0,0,Vg,0,C,[],0,3,0,0,0,AEg,0,C,[GY],0,3,0,0,0,Ro,0,Bu,[],0,0,0,0,0,ADa,0,Bu,[],0,3,0,0,0,ZZ,0,Bu,[],0,0,0,0,0,Xq,0,Ie,[],0,3,0,0,0,Kg,0,C,[Cd],0,3,0,A3b,0,KB,0,C,[Cd],0,3,0,AZH,0,Lj,0,C,[Cd],0,3,0,AYh,0,Vr,0,C,[Cd],0,3,0,0,0,TL,0,C,[Cd],0,3,0,0,0,AAQ,0,C,[Cd,GY],0,3,0,0,0,Xt,0,C,[JJ],0,3,0,0,0,Q8,0,C,[],4,3,0,AYs,0,CR,0,C,[],4,3,0,A3D,0,Us,0,C,[],4,3,0,0,0,WM,0,IF,[],0,3,0,0,0,Ee,0,C,[Cd],0,3,0,G3,0,N6,0,C,[],3,3,0,0,0,Ib,0,C,[N6,Cd],0,3,0,0,0,Qz,0,Ib,[],0,3,0,0,0,ZX,0,Bu,[],
0,0,0,0,0,Rp,0,Bu,[],0,0,0,0,0,JL,0,C,[],0,3,0,AMw,0,E0,0,C,[Cd],0,3,0,RB,0,Tm,0,C,[],0,3,0,0,0,Z2,0,C,[],0,3,0,0,0,Be,0,C,[Cd,Jo],0,3,0,BT,0,WX,0,C,[Cd,GY],0,3,0,0,0,VY,0,DJ,[],0,0,0,0,0,P5,0,G_,[],0,3,0,0,0,AAh,0,C,[JJ],0,3,0,0,0,UC,0,C,[],0,3,0,0,0,ACu,0,C,[Cd],0,3,0,0,0,J1,0,C,[Cd],0,3,0,0,0,QJ,0,Bu,[],0,0,0,0,0,ACw,0,C,[],0,3,0,0,0,UF,0,C,[],0,3,0,0,0,AAM,0,C,[],0,3,0,0,0,ACt,0,C,[Cd],0,3,0,0,0,ZD,0,C,[],3,3,0,0,0,W3,0,C,[Cd],0,3,0,0,0,Rw,0,C,[],0,0,0,0,0,D$,"GlyphLayout",14,C,[DR],0,3,0,EU,["ga",AZQ(ACD),
"r",AZQ(APY)],Hb,0,C,[],0,3,0,0,0,ZU,0,Hb,[],0,3,0,0,0,K7,"BitmapFont",14,C,[DL],0,3,0,0,0,Q$,0,C,[],0,3,0,A4f,0,Bx,"Color",13,C,[],0,3,0,E4,["ek",AZR(AJP),"eP",AZQ(ANU),"r",AZQ(AI$)]]);
$rt_metadata([Kh,0,C,[DL],1,3,0,0,0,Ma,0,Kh,[],0,3,0,0,["r",AZQ(APa)],CJ,"Array",8,C,[Eo],0,3,0,0,["eP",AZQ(AGV),"ek",AZR(ANp),"r",AZQ(ATD)],Kf,0,C,[Eo],0,3,0,0,0,Xe,0,Kf,[],0,3,0,0,0,ADT,0,C,[Eo],0,3,0,0,0,Em,0,C,[],4,3,0,0,["ek",AZR(APh),"eP",AZQ(AJm)],AD1,0,C,[],0,3,0,0,0,Yj,0,C,[],0,3,0,0,0,ZW,0,C,[],0,3,0,0,0,Y0,0,C,[],0,3,0,0,0,PC,0,C,[],0,3,0,A40,0,TU,0,C,[],0,3,0,0,0,Zl,0,C,[],0,3,0,0,0,YK,0,C,[],0,3,0,0,0,Y6,0,C,[],0,3,0,0,0,ACf,0,C,[],0,3,0,0,0,W2,0,C,[],0,3,0,0,0,AC$,0,C,[],0,3,0,0,0,X5,0,C,[],0,
3,0,0,0,UK,0,C,[],0,3,0,0,0,Vk,0,C,[],0,3,0,0,0,Gx,0,BQ,[],12,3,0,AX8,0,Zp,0,C,[],0,3,0,0,0,Rc,0,C,[],3,3,0,0,0,DZ,0,C,[],0,3,0,0,0,T3,0,DZ,[],0,3,0,0,0,T2,0,DZ,[],0,3,0,0,0,Yu,0,DZ,[],0,3,0,0,0,VV,0,DZ,[],0,3,0,0,0,AAS,0,DZ,[],0,3,0,0,0,Lp,0,DZ,[],0,3,0,0,0,VP,0,Lp,[],0,3,0,0,0,H5,0,C,[],3,3,0,0,0,Wm,0,C,[DL,H5],0,3,0,0,0,FV,0,C,[],3,3,0,0,0,AAL,0,C,[FV,H5],0,3,0,0,0,AC7,0,C,[FV],0,3,0,0,0,U8,0,C,[],0,3,0,0,0,Fo,0,C,[FV],0,3,0,0,0,AAm,0,Fo,[],0,3,0,0,0,HZ,0,Fo,[H5,FV],1,3,0,0,0,Ec,0,HZ,[],1,3,0,A45,0,AAF,0,
C,[],0,3,0,0,0,ACe,0,Ec,[],4,3,0,0,0,Ye,0,Ec,[],4,3,0,0,0,SG,0,Fo,[],0,3,0,0,0,K2,0,Fo,[],0,3,0,0,0,TO,0,K2,[],0,3,0,0,0,VN,0,Ec,[],4,3,0,0,0]);
$rt_metadata([Hp,0,HZ,[],1,3,0,0,0,YW,0,Hp,[],4,3,0,0,0,Yc,0,Ec,[],4,3,0,0,0,Y9,0,Ec,[],4,3,0,0,0,YU,0,Hp,[],4,3,0,0,0,E_,0,BQ,[],12,3,0,AXp,0,Gz,0,C,[DL,FV,H5],1,3,0,0,0,L1,0,Gz,[FV],1,3,0,0,0,Tb,0,L1,[FV],0,3,0,0,0,Fe,0,BQ,[],12,3,0,AXR,0,Dq,0,Gz,[],1,3,0,0,0,Iz,0,Dq,[],1,3,0,0,0,U4,0,C,[],0,3,0,0,0,Fp,0,Dq,[],1,3,0,A5g,0,E5,0,Fp,[],1,3,0,0,0,GD,0,E5,[],1,3,0,0,0,Wl,0,GD,[],0,3,0,0,0,Ia,0,Dq,[],1,3,0,0,0,AEi,0,Ia,[],0,3,0,0,0,ACd,0,Dq,[],0,3,0,0,0,Gb,0,Dq,[],1,3,0,0,0,TX,0,Gb,[],0,3,0,0,0,HG,0,Dq,[],1,3,0,
0,0,Wi,0,E5,[],0,3,0,0,0,Xo,0,E5,[],0,3,0,0,0,KN,0,Dq,[],1,3,0,0,0,AAo,0,KN,[],0,3,0,0,0,Uy,0,Gb,[],0,3,0,0,0,Yi,0,GD,[],0,3,0,0,0,AAi,0,Dq,[],0,3,0,0,0,Zd,0,Gb,[],0,3,0,0,0,AAr,0,Dq,[],0,3,0,0,0,ABe,0,Fp,[],0,3,0,0,0,Xu,0,DJ,[],0,0,0,0,0,UQ,0,DJ,[],0,0,0,0,0,U0,0,E5,[],0,3,0,0,0,AAA,0,HG,[],0,3,0,0,0,ADv,0,Iz,[],0,3,0,0,0,ZL,0,Iz,[],0,3,0,0,0,AA4,0,HG,[],0,3,0,0,0,YF,0,GD,[],0,3,0,0,0,ADN,0,Ia,[],0,3,0,0,0,Fk,0,Gz,[],1,3,0,0,0,YY,0,Fk,[],0,3,0,0,0,Gi,0,C,[],1,3,0,0,0,AAK,0,Gi,[],0,3,0,0,0,ABs,0,Fk,[],0,3,0,
0,0,ACc,0,Fk,[],0,3,0,0,0,ACK,0,Gi,[],0,3,0,0,0,V9,0,Fk,[],0,3,0,0,0]);
$rt_metadata([ACg,0,Gi,[],0,3,0,0,0,Kt,0,C,[],3,3,0,0,0,MQ,0,C,[],3,3,0,0,0,CE,0,C,[Kt,MQ],0,3,0,0,["r",AZQ(AN1)],Vn,0,C,[],4,0,0,0,0,UX,0,C,[],4,3,0,0,0,DS,0,C,[],0,3,0,0,["jR",AZQ(AR3)],Db,0,DS,[],0,3,0,0,0,BU,"RuntimeException",21,Db,[],0,3,0,0,0,X_,"ClassCastException",21,BU,[],0,3,0,0,0,IC,"CharSequence",21,C,[],3,3,0,0,0,L,"String",21,C,[Cd,DB,IC],0,3,0,O,["r",AZQ(Ea),"ek",AZR(BO),"eP",AZQ(APT)],Gf,0,DS,[],0,3,0,0,0,IK,0,Gf,[],0,3,0,0,0,Xh,0,IK,[],0,3,0,0,0,Ex,0,C,[Cd],1,3,0,0,0,E6,0,Ex,[DB],0,3,0,0,["r",
AZQ(AUB)],Bq,0,C,[Cd,IC],0,0,0,0,["jF",AZR(ND),"r",AZQ(LD)],HS,0,C,[],3,3,0,0,0,N,0,Bq,[HS],0,3,0,0,["wo",AZU(AM_),"Bn",AZT(AJE),"r",AZQ(C$),"jF",AZR(ANn),"si",AZS(AOd),"r7",AZS(DY)],Ir,0,IK,[],0,3,0,0,0,AAc,0,Ir,[],0,3,0,0,0,WR,0,Ir,[],0,3,0,0,0,Xc,0,C,[],0,3,0,0,0,Om,0,C,[],3,3,0,0,0,Le,0,C,[Om,G7],0,3,0,0,["fU",AZQ(XI)],Ss,0,C,[],3,3,0,0,0,LJ,0,C,[Ss],1,3,0,0,0,Qs,0,LJ,[],0,3,0,0,0,JD,0,C,[],4,3,0,0,0,ABC,0,C,[],4,3,0,0,0,Fu,0,BQ,[],12,3,0,I$,0,M9,0,C,[],3,3,0,0,0,CN,0,C,[],3,3,0,0,0,PB,0,C,[CN],3,3,0,0,
0,LH,0,C,[M9,PB],0,3,0,Jb,["JB",AZR(AQC)],AAt,0,C,[],0,3,0,0,0,Ph,0,C,[],0,3,0,O4,0,J9,0,Ex,[DB],0,3,0,0,0,JS,0,C,[],0,3,0,0,0,Xz,0,C,[],4,3,0,0,0,E3,"GlyphLayout$GlyphRun",14,C,[DR],0,3,0,0,["ga",AZQ(AM3),"r",AZQ(T9)],D5,0,C,[],0,3,0,0,["eP",AZQ(ANY),"ek",AZR(AUh),"r",AZQ(ANw)],Ly,0,C,[],3,3,0,0,0,KP,0,C,[Ly],1,3,0,0,0,FT,0,C,[],3,3,0,0,0,H0,0,KP,[FT,Cd],0,3,0,0,0,SM,0,C,[],3,3,0,0,0,RI,0,C,[SM],0,3,0,0,0,Bh,"IndexOutOfBoundsException",21,BU,[],0,3,0,0,0]);
$rt_metadata([ZK,0,C,[],4,3,0,0,0,Dm,"NullPointerException",21,BU,[],0,3,0,0,0,J2,"ArrayStoreException",21,BU,[],0,3,0,0,0,D6,0,C,[DB],0,3,0,0,0,VH,0,C,[],0,3,0,0,0,ML,0,C,[],3,3,0,0,0,Nz,0,C,[ML],0,3,0,0,0,Oq,0,C,[],0,3,0,0,0,K6,0,C,[],0,3,0,0,0,Q1,0,C,[],3,3,0,0,0,KE,0,C,[Q1],0,3,0,JE,0,Ty,0,C,[],0,3,0,0,0,D7,0,C,[],0,3,0,0,["kJ",AZR(AOH)],QK,0,C,[],3,3,0,0,0,E1,0,C,[CN],3,3,0,0,0,Zr,0,C,[QK,E1],0,3,0,0,["ej",AZR(AFZ)],P$,0,C,[],3,3,0,0,0,ABu,0,C,[P$],0,3,0,0,0,AAD,0,C,[Rc],0,3,0,0,0,Q2,0,C,[],3,3,0,0,0,W$,
0,C,[Q2],0,3,0,0,0,N3,0,C,[],3,3,0,0,0,AAy,0,C,[N3],0,3,0,0,0,EV,0,C,[],0,3,0,0,0,RG,0,C,[],3,3,0,0,0,Ra,0,C,[RG],3,3,0,0,0,Wp,0,C,[Ra],0,3,0,0,0,Tz,0,C,[E1],0,0,0,0,["ej",AZR(ARh)],TA,0,C,[E1],0,0,0,0,["ej",AZR(AUY)],Bg,"IllegalArgumentException",21,BU,[],0,3,0,0,0,Uz,0,C,[Eo],0,3,0,0,0,PZ,0,Ex,[DB],0,3,0,0,0,Yq,0,C,[CN],1,3,0,0,0,Lv,0,C,[],3,3,0,0,0,II,"TeaGL20",5,C,[Lv],0,3,0,0,["nk",AZS(ALl),"dk",AZS(AUQ),"lT",AZS(AH5),"rX",AZU(AKQ),"eF",AZU(O2),"j4",AZU(O1),"ol",AZR(AS1),"mH",AZU(AIh),"qY",AZR(AL_),"qh",
AZQ(AVy),"rn",AZR(AQD),"n1",AZR(AS2),"mG",AZR(AQo),"hE",AZR(APd),"nf",AZT(AIW),"qK",AZU(AMO),"rO",AZU(AOP),"qz",AZR(AUz),"ig",AZR(ATA),"ne",AZR(AER),"r0",AZU(Nr),"sp",AZU(PQ),"k5",AZS(AJ0),"mY",AZS(Lz),"bI",AZR(AVp),"j3",AZT(Qw),"q6",AZR(ANj),"q0",AZT(Oj),"kV",AZR(AKF),"mz",AZS(AKA),"oX",AZR(AGK),"pG",AZS(AIV),"sG",AZS(AEQ),"hv",function(b,c,d,e,f,g,h,i,j){QN(this,b,c,d,e,f,g,h,i,j);},"rI",AZT(AOb),"jI",AZT(AP2),"nl",AZS(AQn),"op",AZR(AGN),"h3",function(b,c,d,e,f,g){ANK(this,b,c,d,e,f,g);},"j5",AZU(AFd)],P9,
0,C,[Lv],3,3,0,0,0,Mz,"TeaGL30",5,II,[P9],0,3,0,0,["sI",AZR(AK1),"xX",AZU(AO3),"wC",function(b,c,d,e,f){AVX(this,b,c,d,e,f);},"tv",AZS(APC),"mY",AZS(AMX)],NA,"TeaGL30Debug",5,Mz,[],0,3,0,0,["sI",AZR(AJ7),"xX",AZU(AHp),"wC",function(b,c,d,e,f){AUK(this,b,c,d,e,f);},"tv",AZS(AGA),"lT",AZS(AHk),"ol",AZR(AS5),"mH",AZU(AOf),"n1",AZR(AGx),"mG",AZR(ATF),"nf",AZT(AJA),"qK",AZU(AQQ),"qz",AZR(ARY),"kV",AZR(AEE),"pG",AZS(AFC),"hv",function(b,c,d,e,f,g,h,i,j){AOF(this,b,c,d,e,f,g,h,i,j);},"rI",AZT(AJn),"j5",AZU(AKU),"nk",
AZS(ANo),"dk",AZS(AUj),"rX",AZU(AJ9),"eF",AZU(AOv),"j4",AZU(AUe),"qY",AZR(APr),"qh",AZQ(AVw),"rn",AZR(AQ7),"hE",AZR(AVl),"rO",AZU(AGY),"ig",AZR(AQ_),"ne",AZR(AS8),"r0",AZU(AL3),"sp",AZU(AS3),"k5",AZS(AOS),"mY",AZS(AKc),"j3",AZT(AIm),"bI",AZR(AFB),"q0",AZT(AVu),"q6",AZR(AGh),"mz",AZS(AFD),"oX",AZR(AUD),"sG",AZS(AFy),"jI",AZT(AGI),"nl",AZS(AHE),"op",AZR(AV5),"h3",function(b,c,d,e,f,g){ARB(this,b,c,d,e,f,g);}],OV,0,C,[],0,3,0,0,0,DI,0,BQ,[],12,3,0,MT,0,Rg,0,C,[CN],3,3,0,0,0,Q3,0,C,[Rg],0,0,0,0,["Lx",AZQ(AJr)],Sq,
"TeaGL20Debug",5,II,[],0,3,0,0,["lT",AZS(AU4),"ol",AZR(AIu),"mH",AZU(AJj),"n1",AZR(AOt),"mG",AZR(AVI),"nf",AZT(AL$),"qK",AZU(AVc),"qz",AZR(AG2),"kV",AZR(ANd),"pG",AZS(APw),"hv",function(b,c,d,e,f,g,h,i,j){AKe(this,b,c,d,e,f,g,h,i,j);},"rI",AZT(AJJ),"j5",AZU(AVr),"nk",AZS(AFv),"dk",AZS(AED),"rX",AZU(AEA),"eF",AZU(AML),"j4",AZU(AK2),"qY",AZR(AVR),"qh",AZQ(APW),"rn",AZR(AVC),"hE",AZR(APS),"rO",AZU(ALd),"ig",AZR(AVJ),"ne",AZR(AO1),"r0",AZU(AMP),"sp",AZU(AHn),"k5",AZS(ALm),"mY",AZS(AFg),"j3",AZT(AKj),"bI",AZR(AKp),
"q0",AZT(AFL),"q6",AZR(ARE),"mz",AZS(ATl),"oX",AZR(ANP),"sG",AZS(AU_),"jI",AZT(ATe),"nl",AZS(AVv),"op",AZR(AFM),"h3",function(b,c,d,e,f,g){AH_(this,b,c,d,e,f,g);}],AAX,0,C,[Eo],0,3,0,0,0,Yw,0,C,[],0,3,0,0,0,RQ,0,C,[CN],3,3,0,0,0,Qe,0,C,[RQ],0,0,0,0,["F5",AZQ(AFq),"ID",AZQ(AI3),"M7",AZQ(AFb)],SL,0,C,[],3,3,0,0,0,SS,0,C,[SL],0,3,0,0,0,M5,0,D7,[],0,0,0,0,0]);
$rt_metadata([RO,"CloneNotSupportedException",21,Db,[],0,3,0,0,0,I0,0,DJ,[],0,3,0,0,0,FN,0,C,[CN],3,3,0,0,0,Ov,0,C,[FN],3,3,0,0,0,PH,0,C,[FN],3,3,0,0,0,Px,0,C,[FN],3,3,0,0,0,QI,0,C,[FN],3,3,0,0,0,SH,0,C,[FN],3,3,0,0,0,Rr,0,C,[FN,Ov,PH,Px,QI,SH],3,3,0,0,0,N5,0,C,[],3,3,0,0,0,KQ,0,C,[CN],3,3,0,0,0,T$,0,C,[CN,Rr,N5,KQ],1,3,0,0,["EF",AZR(AQf),"Hr",AZS(ASM),"Mj",AZS(ASc),"Jy",AZT(AP9),"Ic",AZR(AUu),"Ii",AZQ(AIb),"G0",AZT(AFa)],Lc,0,C,[],1,3,0,0,0,Ix,0,Lc,[Ly,FT,Cd],0,3,0,0,0,LY,0,Ix,[],0,3,0,0,0,W9,0,C,[],0,3,0,
0,0,EE,0,BQ,[],12,3,0,GH,0,D8,0,C,[CN],1,3,0,0,0,VR,0,D8,[],1,3,0,0,0,Vs,0,D8,[],1,3,0,0,0,Yl,0,D8,[],1,3,0,0,0,ZQ,0,D8,[],1,3,0,0,0,Xm,0,D8,[],1,3,0,0,0,Pa,0,C,[E1],0,0,0,0,["ej",AZR(AMu)],Pb,0,C,[E1],0,0,0,0,["ej",AZR(AVe)],O9,0,C,[E1],0,0,0,0,["ej",AZR(AQZ)],P3,0,DJ,[],0,3,0,0,0,RV,0,C,[CN],3,3,0,0,0,Nj,0,C,[RV],0,0,0,0,["GM",AZQ(AJW)],Vl,0,D8,[],1,3,0,0,0,Pv,0,C,[Cd],4,3,0,0,0,UI,0,C,[],4,3,0,0,0,D_,"ReflectionException",9,Db,[],0,3,0,0,0,DN,0,C,[],4,3,0,BM,0,K9,0,C,[],3,3,0,0,0,Ks,0,C,[K9],0,0,0,0,0,JM,
0,C,[],3,3,0,0,0,Kr,0,C,[JM],0,0,0,0,0,Mn,0,C,[],3,3,0,0,0,YX,0,C,[Mn],4,3,0,0,0,CG,"NumberFormatException",21,Bg,[],0,3,0,0,0,N9,0,C,[],4,3,0,0,0,KK,0,BU,[],0,3,0,0,0,Fa,0,Db,[],0,3,0,0,0,HP,"NoSuchMethodException",21,Fa,[],0,3,0,0,0,Cr,0,C,[],1,0,0,0,["di",AZT(AJp),"dm",AZU(ALe),"lP",AZQ(AHD),"r",AZQ(ARO),"bM",AZR(Mo),"cS",AZR(ATQ),"h1",AZQ(AU5),"fQ",AZQ(Kk)],ADE,0,C,[CN],1,3,0,0,0,WD,0,C,[CN],1,3,0,0,0,AEn,0,C,[CN],1,3,0,0,0,KR,0,C,[CN],3,3,0,0,0]);
$rt_metadata([Qp,0,C,[KR],0,3,0,0,["E3",AZR(AT2)],Xf,0,C,[CN],1,3,0,0,0,Qn,0,C,[KR],0,3,0,0,["E3",AZR(AGo)],MO,0,C,[],3,3,0,0,0,H1,0,C,[MO,FT],0,0,0,0,0,I8,0,H1,[],0,0,0,0,0,DT,0,Cr,[],0,0,0,FW,["k",AZT(AGH),"bg",AZQ(ALO),"bF",AZR(AHl)],Jz,0,C,[],0,0,0,0,0,DO,"PatternSyntaxException",17,Bg,[],0,3,0,0,["jR",AZQ(AU0)],KJ,0,C,[Eo],3,3,0,0,0,Lu,0,C,[KJ],1,3,0,0,0,PS,0,C,[KJ],3,3,0,0,0,M4,0,C,[PS],3,3,0,0,0,Hu,0,Lu,[M4],1,3,0,0,0,LP,0,C,[],3,3,0,0,0,IU,0,Hu,[FT,Cd,LP],0,3,0,0,0,PO,0,DT,[],0,0,0,0,["k",AZT(AFJ),"bg",
AZQ(AI4),"bF",AZR(AR9)],SU,0,DT,[],0,0,0,0,["k",AZT(AIK),"bg",AZQ(AME)],OM,0,DT,[],0,0,0,0,["k",AZT(AHA),"bg",AZQ(ATK)],Qj,0,DT,[],0,0,0,0,["k",AZT(AF3),"bg",AZQ(ASF),"bF",AZR(AQF)],Id,0,DT,[],0,0,0,0,["k",AZT(AUf),"bg",AZQ(AHU)],CX,0,Cr,[],1,0,0,0,["k",AZT(AVS),"cU",AZQ(AS6),"bF",AZR(AMx)],RZ,0,CX,[],0,0,0,0,["cy",AZS(ASx),"di",AZT(AKn),"dm",AZU(AIt),"bg",AZQ(ALQ),"bF",AZR(AFX)],CQ,0,Cr,[],0,0,0,0,["k",AZT(ALg),"bM",AZR(AQy),"bg",AZQ(AMJ),"cS",AZR(ANO),"bF",AZR(ARl),"fQ",AZQ(AIi)],My,0,CQ,[],0,0,0,0,["k",AZT(AQb),
"bg",AZQ(AN8),"bF",AZR(ARH)],Fw,0,My,[],0,0,0,0,["k",AZT(AJt),"bM",AZR(ARr),"bg",AZQ(AFR)],Tl,0,Fw,[],0,0,0,0,["k",AZT(AQq),"bF",AZR(ATY),"bg",AZQ(AU3)],ACq,0,Fw,[],0,0,0,0,["k",AZT(AHa),"bF",AZR(ATj),"bg",AZQ(AK5)],Xw,0,Fw,[],0,0,0,0,["k",AZT(AId),"bF",AZR(AWe),"bg",AZQ(APR)],ZV,0,Fw,[],0,0,0,0,["k",AZT(AE7),"bF",AZR(ARZ),"bg",AZQ(AHB)],H2,0,CQ,[],0,0,0,0,["k",AZT(AFr),"di",AZT(AOh),"dm",AZU(ASd),"cS",AZR(ANE),"h1",AZQ(AQA),"fQ",AZQ(AVa)],Ii,0,C,[],1,0,0,0,0,By,0,Ii,[],1,0,0,BE,["cx",AZQ(AHe),"gM",AZQ(AGg),
"lf",AZQ(ASX),"kf",AZQ(AU2)],C_,0,By,[],0,0,0,0,["K",AZR(AIz),"cx",AZQ(AWc),"gM",AZQ(AKa),"lf",AZQ(ATH),"r",AZQ(APn),"kf",AZQ(AKu)],Kp,"MissingResourceException",16,BU,[],0,3,0,0,0,Fi,0,Cr,[],1,0,0,0,["cS",AZR(ASh),"bF",AZR(AT_),"fQ",AZQ(AOM)],Ef,0,Fi,[],0,0,0,0,["k",AZT(AE9),"bg",AZQ(AIf)],GI,0,Ef,[],0,0,0,0,["k",AZT(AGM),"bg",AZQ(AHj)],Ej,0,Fi,[],0,0,0,0,["k",AZT(AFp),"bg",AZQ(AL7)],GF,0,Ef,[],0,0,0,0,["k",AZT(AOr),"bM",AZR(AWh)],ACI,0,Ef,[],0,0,0,0,["k",AZT(AVG),"di",AZT(APf)],BD,0,C,[],1,0,0,0,0,Nb,0,Ii,
[FT],0,0,0,0,["r",AZQ(QD)],NJ,0,Cr,[],0,0,0,0,["k",AZT(AM6),"bg",AZQ(AQm),"bF",AZR(AQx)],Bz,0,C,[FT,Cd],0,3,0,0,0,M1,0,CQ,[],0,0,0,0,["bg",AZQ(AQK)],HN,0,CQ,[],0,0,0,0,["k",AZT(AGC),"bM",AZR(AP_),"bg",AZQ(AQ5),"bF",AZR(AHI),"cS",AZR(AHd)],Ez,0,CQ,[],0,0,0,0,["k",AZT(AJ1),"bg",AZQ(AUR),"K",AZR(AKH),"cS",AZR(AGs),"bM",AZR(ASR),"bF",AZR(AKf)],M2,0,Ez,[],0,0,0,0,["K",AZR(AMy),"bg",AZQ(AVi)],N4,0,CX,[],0,0,0,0,["cy",AZS(AM9),"bg",AZQ(AHr)]]);
$rt_metadata([E8,0,CX,[],0,0,0,0,["cy",AZS(AEC),"bg",AZQ(ANg),"cS",AZR(AQz)],IY,0,CQ,[],0,0,0,0,["bM",AZR(AOo),"bg",AZQ(AR0),"k",AZT(AEU),"cS",AZR(AHw),"bF",AZR(ATM)],Fl,0,CX,[],0,0,0,0,["cU",AZQ(AMK),"cy",AZS(ALy),"di",AZT(AJY),"dm",AZU(AMW),"bg",AZQ(AT4),"cS",AZR(ATB)],Sy,0,CX,[],0,0,0,0,["cy",AZS(AEH),"bg",AZQ(AP$)],MW,0,CX,[],0,0,0,0,["cy",AZS(AFk),"bg",AZQ(ALX)],GR,0,CQ,[],0,0,0,0,["bM",AZR(AU8),"k",AZT(AQa),"bg",AZQ(APX),"cS",AZR(AM$),"bF",AZR(ARv)],ADF,0,GR,[],0,0,0,0,0,AAl,0,GR,[],0,0,0,0,0,S9,0,Ej,
[],0,0,0,0,["k",AZT(AIS)],OI,0,Ej,[],0,0,0,0,["k",AZT(AO2)],IE,0,Ej,[],0,0,0,0,["k",AZT(ASL),"bM",AZR(AUk)],Os,0,IE,[],0,0,0,0,["k",AZT(AMQ),"bM",AZR(APx)],GP,0,Ej,[],0,0,0,0,["k",AZT(AV_),"bg",AZQ(AUr)],Nd,0,GP,[],0,0,0,0,["k",AZT(AL8)],PK,0,Ej,[],0,0,0,0,["k",AZT(AVo)],WU,0,IE,[],0,0,0,0,["k",AZT(AHK)],Rt,0,GP,[],0,0,0,0,["k",AZT(AF7)],X3,0,Fi,[],0,0,0,0,["k",AZT(AVV),"di",AZT(ASZ),"bg",AZQ(AQ$)],UO,0,Fi,[],0,0,0,0,["k",AZT(AQB),"di",AZT(AE3),"bg",AZQ(AR6)],Gk,0,C,[],1,0,0,0,0,AEu,0,Ef,[],0,0,0,0,["k",AZT(AGc)],ACE,
0,GF,[],0,0,0,0,["k",AZT(AOW)],Vc,0,GI,[],0,0,0,0,["k",AZT(ASm)],WO,0,Ef,[],0,0,0,0,["k",AZT(AQs)],AAx,0,GF,[],0,0,0,0,["k",AZT(AGk)],Xy,0,GI,[],0,0,0,0,["k",AZT(ASA)],Pw,0,Cr,[],4,0,0,0,["k",AZT(ANI),"bF",AZR(AMn),"bg",AZQ(AOY)],VT,0,Cr,[],0,0,0,0,["k",AZT(AG_),"bF",AZR(AHu),"bg",AZQ(AV9)],UM,0,Cr,[],0,0,0,0,["k",AZT(AMC),"bF",AZR(AV7),"bg",AZQ(AGR)],Sv,0,Cr,[],4,0,0,0,["k",AZT(ARd),"bF",AZR(AIE),"bg",AZQ(AOz)],AC0,0,Cr,[],0,0,0,0,["k",AZT(AP7),"bF",AZR(AEF),"bg",AZQ(ALf)],T4,0,Cr,[],0,0,0,0,["k",AZT(AIg),
"bF",AZR(AKW),"bg",AZQ(AGw)],ACT,0,CQ,[],0,0,0,0,["k",AZT(AVt),"bg",AZQ(AJC),"bM",AZR(AHy),"lP",AZQ(API),"bF",AZR(AHx)],U7,0,CQ,[],4,0,0,0,["k",AZT(APZ),"bg",AZQ(AIQ),"bM",AZR(AR4),"lP",AZQ(AEx),"bF",AZR(AVQ)],ACF,0,Cr,[],4,0,0,0,["k",AZT(ANe),"bF",AZR(AKN),"bg",AZQ(AN0)],Zo,0,Cr,[],0,0,0,0,["k",AZT(AP5),"bF",AZR(AKD),"bg",AZQ(AFN)],Te,0,Cr,[],0,0,0,0,["k",AZT(AMc),"bF",AZR(AII),"bg",AZQ(AKY)],Iv,0,CQ,[],0,0,0,0,["k",AZT(AGe),"bM",AZR(ARq),"bg",AZQ(AFU),"bF",AZR(ARI)],ACL,0,Iv,[],0,0,0,0,["k",AZT(AIR),"di",
AZT(ATT),"dm",AZU(AFO),"cS",AZR(AOR),"bg",AZQ(AUi)],Xj,0,Iv,[],0,0,0,0,["k",AZT(AOa),"bg",AZQ(AHv)],KM,0,Bq,[HS],0,3,0,0,["wo",AZU(AKw),"Bn",AZT(AHi),"jF",AZR(AHT),"si",AZS(AS4),"r7",AZS(AFh)],Yd,0,CX,[],0,0,0,0,["cy",AZS(AJo),"di",AZT(AG3),"dm",AZU(AKS),"bg",AZQ(AQi),"cS",AZR(ALL)],MR,0,CX,[],0,0,0,0,["cy",AZS(AOk),"bg",AZQ(ALZ)],TW,0,CX,[],0,0,0,0,["cy",AZS(ASp),"bg",AZQ(ATG)],AEr,0,C,[],4,3,0,0,0,Iu,0,C,[],4,0,0,ARX,0,MP,0,CX,[],0,0,0,0,["cy",AZS(ASt),"bg",AZQ(AV8)],Jt,0,CQ,[],0,0,0,0,["bM",AZR(AQp),"k",
AZT(Oe),"di",AZT(ALH),"dm",AZU(AJz),"bg",AZQ(ATc),"cS",AZR(AFH),"bF",AZR(ATm)],LL,0,CQ,[],0,0,0,0,["bM",AZR(AHR),"k",AZT(MZ),"di",AZT(AQV),"dm",AZU(ASn),"bg",AZQ(AVs),"cS",AZR(AJq),"bF",AZR(AQ6)],FC,0,CX,[],0,0,0,0,["cy",AZS(ARJ),"di",AZT(APq),"dm",AZU(AHO),"bg",AZQ(AUl),"cS",AZR(ARy)]]);
$rt_metadata([RD,0,Gk,[],0,0,0,0,["jo",AZR(AH1),"wz",AZS(ARC)],RE,0,Gk,[],0,0,0,0,["jo",AZR(ASB),"wz",AZS(AUV)],AA0,0,C,[],0,0,0,0,0,VE,0,C,[],4,0,0,0,0,UU,0,C,[],4,3,0,0,0,DP,"NegativeArraySizeException",21,BU,[],0,3,0,0,0,T1,0,C,[],0,0,0,0,0,L6,0,C,[],0,3,0,0,0,W8,0,C,[],4,3,0,0,0,Lw,0,BD,[],0,0,0,0,["bw",AZQ(AL4)],KU,0,BD,[],0,0,0,0,["bw",AZQ(AOc)],AAW,0,BD,[],0,0,0,0,["bw",AZQ(AR8)],ABL,0,BD,[],0,0,0,0,["bw",AZQ(ATn)],ABO,0,BD,[],0,0,0,0,["bw",AZQ(AJ2)],Ls,0,BD,[],0,0,0,0,["bw",AZQ(AIx)],LW,0,Ls,[],0,0,
0,0,["bw",AZQ(AKI)],AEk,0,BD,[],0,0,0,0,["bw",AZQ(ALG)],MK,0,LW,[],0,0,0,0,["bw",AZQ(AEM)],X6,0,MK,[],0,0,0,0,["bw",AZQ(AON)],YM,0,BD,[],0,0,0,0,["bw",AZQ(AJf)],VI,0,BD,[],0,0,0,0,["bw",AZQ(AOJ)],Vp,0,BD,[],0,0,0,0,["bw",AZQ(AU1)],ABS,0,BD,[],0,0,0,0,["bw",AZQ(APE)],AEt,0,BD,[],0,0,0,0,["bw",AZQ(AEX)],AA1,0,BD,[],0,0,0,0,["bw",AZQ(AMj)],AAI,0,BD,[],0,0,0,0,["bw",AZQ(ARN)],ACo,0,BD,[],0,0,0,0,["bw",AZQ(AJc)],Un,0,BD,[],0,0,0,0,["bw",AZQ(AJF)],TF,0,BD,[],0,0,0,0,["bw",AZQ(AUP)],ABf,0,BD,[],0,0,0,0,["bw",AZQ(AEI)],ABy,
0,BD,[],0,0,0,0,["bw",AZQ(ANk)],Wf,0,BD,[],0,0,0,0,["bw",AZQ(AJN)],YR,0,BD,[],0,0,0,0,["bw",AZQ(AKZ)],ADJ,0,BD,[],0,0,0,0,["bw",AZQ(ANq)],ABt,0,BD,[],0,0,0,0,["bw",AZQ(ATO)],Xd,0,BD,[],0,0,0,0,["bw",AZQ(ARc)],We,0,BD,[],0,0,0,0,["bw",AZQ(APs)],AEq,0,BD,[],0,0,0,0,["bw",AZQ(AR1)],Ky,0,BD,[],0,0,0,0,["bw",AZQ(ANN)],ACz,0,Ky,[],0,0,0,0,["bw",AZQ(AO_)],Yg,0,Lw,[],0,0,0,0,["bw",AZQ(AGZ)],V8,0,KU,[],0,0,0,0,["bw",AZQ(ALu)],Vy,0,BD,[],0,0,0,0,["bw",AZQ(ANS)],V1,0,BD,[],0,0,0,0,["bw",AZQ(AUE)],XJ,0,BD,[],0,0,0,0,["bw",
AZQ(AKy)],X7,0,BD,[],0,0,0,0,["bw",AZQ(AEJ)],RR,0,C,[],0,3,0,0,0,IR,0,C,[],0,3,0,0,0,Uq,0,C,[],0,3,0,0,0,Bd,"StringIndexOutOfBoundsException",21,Bh,[],0,3,0,0,0]);
$rt_metadata([ABG,0,C,[],4,3,0,0,0,WB,0,D7,[],0,0,0,0,["kJ",AZR(AS0),"jQ",AZR(AJT),"j9",AZS(APi)],Cs,0,BQ,[],9,3,0,AH9,0,FO,0,H1,[],0,0,0,0,0,AD5,0,C,[],3,3,0,0,0,Ri,0,C,[CN],3,3,0,0,0,VZ,0,C,[Ri,CN],1,3,0,0,["F6",AZS(AUI),"Hk",AZR(APN),"GX",AZS(AHS),"JW",AZT(AMZ),"LY",AZT(ASJ)],QY,0,C,[E1],0,0,0,0,["ej",AZR(AOy)],D0,0,BQ,[],12,3,0,FB,0,Lg,0,C,[],0,3,0,0,0,LV,0,C,[Kt],0,3,0,0,0,PJ,0,C,[],3,3,0,0,0,H4,0,LV,[PJ],0,3,0,0,["r",AZQ(AGE)],Sc,0,By,[],0,0,0,0,["K",AZR(AJ$)],Sb,0,By,[],0,0,0,0,["K",AZR(AFn)],NP,0,By,
[],0,0,0,0,["K",AZR(ANC),"r",AZQ(AK_)],NW,0,By,[],0,0,0,0,["K",AZR(ARL)],NU,0,By,[],0,0,0,0,["K",AZR(ASs)],NV,0,By,[],0,0,0,0,["K",AZR(AOj)],NZ,0,By,[],0,0,0,0,["K",AZR(AJI)],N0,0,By,[],0,0,0,0,["K",AZR(AEy)],NX,0,By,[],0,0,0,0,["K",AZR(ALi)],NY,0,By,[],0,0,0,0,["K",AZR(AOl)],N1,0,By,[],0,0,0,0,["K",AZR(ATZ)],N2,0,By,[],0,0,0,0,["K",AZR(AI0)],NO,0,By,[],0,0,0,0,["K",AZR(AWl)],Og,0,By,[],0,0,0,0,["K",AZR(ALo)],NM,0,By,[],0,0,0,0,["K",AZR(AIY)],NN,0,By,[],0,0,0,0,["K",AZR(AKL)],NS,0,By,[],0,0,0,0,["K",AZR(AMF)],NL,
0,By,[],0,0,0,0,["K",AZR(ATv)],NQ,0,By,[],0,0,0,0,["K",AZR(AHm)],NR,0,By,[],0,0,0,0,["K",AZR(AQ2)],I1,0,C,[],0,0,0,0,0,EA,0,C,[G7],0,3,0,Dj,0,B2,"IllegalStateException",21,BU,[],0,3,0,0,0,I_,"IllegalMonitorStateException",21,BU,[],0,3,0,0,0,ABm,0,C,[Mn],0,0,0,0,0,ABq,0,C,[],0,3,0,0,0,WE,0,C,[],4,3,0,0,0,TH,0,C,[CN],1,3,0,0,0,GM,0,C,[],3,3,0,0,0,SV,0,C,[GM],0,3,0,0,["fU",AZQ(AT1)],R3,0,Cs,[],12,0,0,0,0,R4,0,Cs,[],12,0,0,0,0,R8,0,Cs,[],12,0,0,0,0,R9,0,Cs,[],12,0,0,0,0,R6,0,Cs,[],12,0,0,0,0,R7,0,Cs,[],12,0,0,0,
0,R1,0,Cs,[],12,0,0,0,0]);
$rt_metadata([R2,0,Cs,[],12,0,0,0,0,R0,0,Cs,[],12,0,0,0,0,ACB,0,C,[],4,3,0,0,0,Ni,0,C,[],3,3,0,0,0,PW,0,C,[Ni],0,3,0,0,0,WQ,0,C,[CN],4,3,0,0,0,PI,0,C,[],3,3,0,0,0,Pu,0,C,[PI],0,0,0,0,["ld",AZR(AM4),"C5",AZR(AVh)],Qo,0,C,[GM],0,3,0,0,0,Nc,0,H2,[],0,0,0,0,["di",AZT(AKC),"dm",AZU(AV$),"h1",AZQ(AID)],Uc,0,C,[JM],0,0,0,0,0,Hn,0,EA,[],0,0,0,0,["fU",AZQ(AQv)],M7,0,C,[],32,0,0,AYq,0,ACA,0,C,[CN,FN],1,3,0,0,["KH",AZS(ANL),"Mu",AZS(AOI),"Ht",AZT(AE_),"H$",AZR(AFj),"Ko",AZT(ALj)],Hq,0,C,[CN],3,3,0,0,0,M$,0,C,[Hq],0,0,
0,0,["ej",AZR(X2)],Qu,0,C,[],0,3,0,0,0,HI,0,C,[JM,Eo],0,3,0,0,0,NI,0,C,[Eo],0,3,0,0,0,IO,0,C,[],4,3,0,0,0,M8,0,C,[G7],0,0,0,0,["fU",AZQ(AE4)],SX,0,C,[],3,3,0,0,0,Jw,0,C,[SX],3,3,0,0,0,Rh,0,C,[],3,3,0,0,0,HW,0,C,[Jw,Rh],1,3,0,0,0,Kz,0,HW,[],0,3,0,0,0,Dd,0,Kz,[],0,3,0,0,0,HF,0,HW,[],1,3,0,0,0,JC,0,HF,[],0,3,0,0,["pT",AZT(AMM)],IM,0,C,[Hq],0,0,0,0,["ej",AZR(APQ)],EK,0,C,[DB],1,3,0,0,0,MC,0,EK,[],0,3,0,Dc,["lM",AZQ(ADB)],JO,"IllegalCharsetNameException",19,Bg,[],0,3,0,0,0,Op,0,C,[DL],3,3,0,0,0,Me,0,C,[Op],0,3,0,
ABY,0,Lf,0,C,[],3,3,0,0,0,BG,0,C,[Lf],0,3,0,0,0,Po,0,BG,[],0,3,0,0,["E",AZQ(AVU),"b9",AZR(ATi),"D",AZS(APb)],P1,0,BG,[],0,3,0,0,["E",AZQ(ATN),"b9",AZR(AFw),"D",AZS(AHL)],Q7,0,BG,[],0,3,0,0,["E",AZQ(AVz),"b9",AZR(APJ),"D",AZS(ALF)],Nf,0,BG,[],0,3,0,0,["E",AZQ(AS9),"b9",AZR(ARa),"D",AZS(ALN)],OS,0,BG,[],0,3,0,0,["E",AZQ(AGi),"b9",AZR(AQc),"D",AZS(AI5)],S1,0,BG,[],0,3,0,0,["E",AZQ(AQL),"b9",AZR(ARV),"D",AZS(AJ3)],MN,0,BG,[],0,3,0,0,["E",AZQ(AKo),"b9",AZR(ANJ),"D",AZS(AVd)],ABh,0,BG,[],0,3,0,0,["E",AZQ(AJs),"b9",
AZR(AMU),"D",AZS(AMR)],Wc,0,BG,[],0,3,0,0,["E",AZQ(AKX),"b9",AZR(AHQ),"D",AZS(AGb)],AA2,0,BG,[],0,3,0,0,["E",AZQ(AMH),"b9",AZR(ATE),"D",AZS(ASI)],V$,0,BG,[],0,3,0,0,["E",AZQ(AHf),"b9",AZR(ASY),"D",AZS(AT$)],UV,0,BG,[],0,3,0,0,["E",AZQ(ALR),"b9",AZR(ARx),"D",AZS(ARt)],Wq,0,BG,[],0,3,0,0,["E",AZQ(AKi),"b9",AZR(AOp),"D",AZS(ATX)]]);
$rt_metadata([ABU,0,BG,[],0,3,0,0,["E",AZQ(AFW),"b9",AZR(AKB),"D",AZS(AGd)],AA_,0,BG,[],0,3,0,0,["E",AZQ(AMA),"b9",AZR(AVH),"D",AZS(AWi)],YV,0,BG,[],0,3,0,0,["E",AZQ(ASO),"b9",AZR(AGO),"D",AZS(ALa)],V4,0,BG,[],0,3,0,0,["E",AZQ(AUd),"b9",AZR(ASQ),"D",AZS(AUF)],Ug,0,BG,[],0,3,0,0,["E",AZQ(AF9),"b9",AZR(AUA),"D",AZS(AF_)],AAn,0,BG,[],0,3,0,0,["E",AZQ(AIs),"b9",AZR(ARp),"D",AZS(AK8)],ADn,0,BG,[],0,3,0,0,["E",AZQ(AVP),"b9",AZR(ARi),"D",AZS(AMN)],AB2,0,BG,[],0,3,0,0,["E",AZQ(AUO),"b9",AZR(AMT),"D",AZS(APL)],ADR,0,
BG,[],0,3,0,0,["E",AZQ(AVm),"b9",AZR(ATf),"D",AZS(AWa)],Wr,0,BG,[],0,3,0,0,["E",AZQ(AVq),"b9",AZR(AJ8),"D",AZS(APV)],UW,0,BG,[],0,3,0,0,["E",AZQ(AGJ),"b9",AZR(AOs),"D",AZS(AJZ)],Ve,0,BG,[],0,3,0,0,["E",AZQ(AF6),"b9",AZR(AO7),"D",AZS(AGn)],V3,0,BG,[],0,3,0,0,["E",AZQ(AU9),"b9",AZR(AL5),"D",AZS(AOZ)],Wk,0,BG,[],0,3,0,0,["E",AZQ(AO8),"b9",AZR(ASg),"D",AZS(AFm)],ADd,0,BG,[],0,3,0,0,["E",AZQ(ASz),"b9",AZR(AH6),"D",AZS(AQJ)],ACS,0,BG,[],0,3,0,0,["E",AZQ(AP8),"b9",AZR(AVx),"D",AZS(AMo)],Ws,0,BG,[],0,3,0,0,["E",AZQ(ASC),
"b9",AZR(AH7),"D",AZS(AT8)],MG,"NoSuchElementException",16,BU,[],0,3,0,0,0,Ba,"GdxRuntimeException",8,BU,[],0,3,0,0,0,VF,0,C,[],4,3,0,0,0,Qq,0,By,[],0,0,0,0,["K",AZR(AUc)],MY,0,By,[],0,0,0,0,["K",AZR(AGS)],PV,0,By,[],0,0,0,0,["K",AZR(AGj)],PU,0,By,[],0,0,0,0,["K",AZR(AKx)],Sk,0,By,[],0,0,0,0,["K",AZR(AMs)],Ob,0,By,[],0,0,0,0,["K",AZR(AUg)],NG,0,By,[],0,0,0,0,["K",AZR(AQh)],Pl,0,By,[],0,0,0,0,["K",AZR(ARW)],MU,0,By,[],0,0,0,0,["K",AZR(AVK)],MX,0,By,[],0,0,0,0,["K",AZR(AJv)],NB,0,By,[],0,0,0,0,["K",AZR(AUy)],Ow,
0,By,[],0,0,0,0,["K",AZR(AOG)],OB,0,By,[],0,0,0,0,["K",AZR(ARn)],QQ,0,By,[],0,0,0,0,["K",AZR(AT0)],P_,0,By,[],0,0,0,0,["K",AZR(AVf)],M6,0,By,[],0,0,0,0,["K",AZR(AJe)],J_,0,By,[],0,0,0,0,["K",AZR(AQk)],PP,0,J_,[],0,0,0,0,["K",AZR(ASS)],Fq,0,C,[GM],0,3,0,0,["fU",AZQ(AGy)],Wh,0,C,[],4,3,0,0,0,SP,0,C,[],32,0,0,AZk,0,Mm,"ConcurrentModificationException",16,BU,[],0,3,0,0,0,Jl,0,HF,[],0,3,0,0,["pT",AZT(AKk)],OE,0,Ex,[DB],0,3,0,0,0,G8,0,C,[],0,0,0,0,0,JK,0,C,[],4,3,0,0,0,Q4,0,C,[],0,3,0,0,0,Xa,"BitmapFont$BitmapFontData",
14,C,[],0,3,0,0,0,EH,0,BQ,[],12,3,0,Pi,0,Js,0,C,[DL],0,3,0,0,0]);
$rt_metadata([EF,0,C,[],1,3,0,0,0,Lr,0,C,[],3,3,0,0,0,LC,0,EF,[DB,HS,IC,Lr],1,3,0,0,0,FD,0,EF,[DB],1,3,0,0,["qj",AZR(AQN),"oZ",AZR(AFP)],F8,0,C,[],0,3,0,Er,0,Mh,0,C,[],3,3,0,0,0,Sd,0,C,[],3,3,0,0,0,NH,0,C,[GM,Mh,Sd],0,0,0,0,["fU",AZQ(ARf)],Mv,"BitmapFont$Glyph",14,C,[],0,3,0,0,["r",AZQ(ALs)],UN,0,C,[Eo,DB],4,3,0,0,0,G2,0,C,[DL],0,3,0,SY,0,KW,0,LC,[],1,0,0,0,0,Jd,0,KW,[],0,0,0,0,0,Lt,0,C,[],1,3,0,0,0,CK,0,C,[],0,3,0,0,0,RJ,0,C,[],0,3,0,0,0,S6,0,C,[],32,0,0,AYw,0,Jy,0,C,[DL],3,3,0,0,0,Lk,0,C,[Jy],0,3,0,0,["nI",
AZQ(AKV),"pk",AZQ(ARD),"nS",AZT(APU),"oD",AZS(AKg),"oi",AZS(AGF)],Kv,0,C,[DL],3,3,0,0,0,H3,0,C,[Kv],0,3,0,0,["i1",AZQ(ALV),"mR",AZQ(AFG),"wl",AZT(APv),"rP",AZR(AGq),"o9",AZQ(AUw),"wI",AZQ(ARU)],U$,0,C,[Jy],0,3,0,0,["nI",AZQ(AH3),"pk",AZQ(AI6),"nS",AZT(AG$),"oD",AZS(APj),"oi",AZS(AKh)],Yv,0,C,[Kv],0,3,0,0,["i1",AZQ(ARk),"mR",AZQ(AE0),"wl",AZT(AMi),"rP",AZR(ATq),"o9",AZQ(AM0),"wI",AZQ(AHH)],O5,0,C,[Jy],0,3,0,AXo,["nI",AZQ(AGQ),"pk",AZQ(APo),"nS",AZT(AG5),"oD",AZS(AS_),"oi",AZS(AJH)],NE,0,Lk,[],0,3,0,0,0,OF,0,
H3,[],0,3,0,0,0,ABb,0,C,[Eo],0,3,0,0,0,AA9,0,C,[],4,3,0,0,0,ER,0,C,[],3,3,0,0,0,CT,0,FD,[ER],0,0,0,0,["pt",AZQ(AWg)],Kx,0,C,[],0,3,0,0,0,Hx,0,EF,[DB],1,3,0,0,0,GW,0,C,[],4,3,0,CB,0,EX,0,EF,[DB],1,3,0,0,["qj",AZR(AQR),"oZ",AZR(AUU)],XE,0,C,[],0,3,0,0,0,HA,0,EF,[DB],1,3,0,0,0,Zs,0,C,[CN],1,3,0,0,0,QE,0,C,[],3,3,0,0,0,KT,0,C,[QE],0,3,0,0,0,H$,0,C,[DL],0,3,0,Qm,0,HV,0,Hx,[],1,0,0,0,0,GU,0,HV,[],0,0,0,0,["l0",AZR(APO),"nX",AZS(AN6),"dN",AZQ(AEO)],HJ,0,EX,[],1,0,0,0,0,It,0,HJ,[],0,0,0,0,["sC",AZR(AQ3),"mT",AZS(AP1),
"dN",AZQ(AQe)],Gv,0,BQ,[],12,3,0,Iq,0,FY,0,BQ,[],12,3,0,AAE,0,JW,0,Kx,[],0,3,0,0,["r",AZQ(AV3)],YC,0,C,[DL],0,3,0,0,0,Is,0,HA,[],1,0,0,0,0,J3,0,Is,[],0,0,0,0,["sB",AZR(AKO),"p7",AZS(AMB),"dN",AZQ(AJb)]]);
$rt_metadata([Z1,0,C,[CN],1,3,0,0,0,Dy,0,BQ,[],12,3,0,AIF,0,Ft,0,BQ,[],12,3,0,AES,0,WA,0,C,[KQ],1,3,0,0,["EF",AZR(AVT),"LU",AZQ(AH$)],HM,0,HJ,[ER],1,0,0,0,["dN",AZQ(AQr),"pt",AZQ(ARs)],Ns,0,HM,[],0,0,0,0,["sC",AZR(AND),"mT",AZS(ARo)],Pp,0,HM,[],0,0,0,0,["sC",AZR(AE1),"mT",AZS(ANr)],Hv,0,Is,[ER],1,0,0,0,["dN",AZQ(ALK),"pt",AZQ(ART)],Nh,0,Hv,[],0,0,0,0,["sB",AZR(AIZ),"p7",AZS(AH4)],OR,0,Hv,[],0,0,0,0,["sB",AZR(APF),"p7",AZS(AI1)],GT,"UnsupportedOperationException",21,BU,[],0,3,0,0,0,Eu,"ReadOnlyBufferException",
18,GT,[],0,3,0,0,0,In,0,HV,[ER],1,0,0,0,["dN",AZQ(ANu)],NC,0,In,[],0,0,0,0,["l0",AZR(AKK),"nX",AZS(AEN)],Qv,0,In,[],0,0,0,0,["l0",AZR(AS7),"nX",AZS(AGG)],Ip,"BufferUnderflowException",18,BU,[],0,3,0,0,0,D9,0,BQ,[],12,3,0,LG,0,Fc,0,Lt,[],1,3,0,0,0,OA,0,Fc,[],0,3,0,0,["mw",function(b,c,d,e,f,g,h){return ANl(this,b,c,d,e,f,g,h);}],Fj,"IOException",20,Db,[],0,3,0,0,0,HE,0,C,[Jw,Lr],1,3,0,0,0,ZG,0,HE,[],0,3,0,0,0,Ut,0,HE,[],0,3,0,0,0,Ta,0,C,[K9],0,3,0,0,0,Pj,0,C,[],4,3,0,0,0,RL,0,C,[],0,3,0,AX7,0,DA,0,BQ,[],12,3,
0,HB,0,I9,0,C,[],4,3,0,0,0,Kl,0,C,[],4,3,0,0,0,Gm,0,BQ,[],12,0,0,XT,0,CO,0,BQ,[],12,3,0,Hr,0,F6,0,BQ,[],12,3,0,AFA,0,Q0,0,C,[],0,3,0,0,0,QL,0,C,[],32,0,0,AXv,0,Mp,0,C,[],1,3,0,0,0,Gd,"BufferOverflowException",18,BU,[],0,3,0,0,0,G5,0,C,[],1,3,0,0,0,To,0,C,[],4,3,0,0,0,Ms,0,C,[],1,3,0,0,0,AEs,0,C,[],4,3,0,0,0,EG,0,Ib,[],1,3,0,0,["nm",AZS(ASU)],F0,0,EG,[],0,3,0,0,["hy",AZQ(AAG)],MH,0,C,[],1,3,0,0,0,Cj,0,MH,[],0,3,0,0,0,On,0,C,[],3,3,0,0,0,Ci,0,C,[On],0,3,0,0,0,GB,0,EG,[],0,3,0,0,["hy",AZQ(UL),"nm",AZS(AJy)],F3,
0,EG,[],0,3,0,0,["hy",AZQ(ZA),"nm",AZS(AEW)],F7,0,EG,[],0,3,0,0,["hy",AZQ(X$),"nm",AZS(ANA)],F_,0,EG,[],0,3,0,0,["hy",AZQ(Wz)]]);
$rt_metadata([Wo,0,C,[],4,3,0,0,0,Pc,0,Hb,[],0,3,0,0,0,V0,0,C,[],0,3,0,0,0,Rz,0,C,[Hq],0,0,0,0,["ej",AZR(Xn)],AAR,0,C,[GM,Mh],3,0,0,0,0,Ld,0,Mp,[],1,3,0,0,0,QF,0,Ld,[],0,3,0,0,0,Nq,0,G5,[],4,3,0,0,0,Ch,0,Ms,[],0,3,0,0,0,JQ,0,G5,[],4,0,0,AX9,0,LO,0,C,[],3,3,0,0,0,Pq,0,C,[LO],0,0,0,0,["n7",AZR(AIP),"yI",AZR(AQH)],QG,0,C,[LO],0,0,0,0,["n7",AZR(AQ4),"yI",AZR(ATg)],Dr,0,C,[],0,3,0,ID,0,ACW,0,C,[],4,3,0,0,0,EM,0,C,[],0,3,0,0,0,Ux,0,C,[],0,0,0,0,0,Y4,0,C,[CN],1,3,0,0,0,Nm,0,Hu,[LP],0,0,0,0,0,Wy,0,C,[],4,3,0,0,0,RM,
0,C,[],0,3,0,AZw,0,JR,0,C,[],4,0,0,FL,0,Ij,0,C,[Jw],1,3,0,0,["vq",AZT(ATL),"o6",AZQ(ALE)],Mc,0,Ij,[],0,3,0,0,["tL",AZQ(AIv),"vq",AZT(AVg),"o6",AZQ(ALT)],O0,0,Fj,[],0,3,0,0,0,Gr,0,BQ,[],12,3,0,YN,0,BP,0,Ex,[DB,Cd],0,3,0,BV,0,LM,"CoderMalfunctionError",19,Gf,[],0,3,0,0,0,Jr,"ArithmeticException",21,BU,[],0,3,0,0,0,Hj,0,C,[],0,0,0,FH,0,Vi,0,C,[],0,0,0,0,0,Mg,0,C,[],0,3,0,0,0,SQ,0,Ij,[],0,0,0,0,["tL",AZQ(AOq)],So,0,C,[],0,0,0,AXU,0,PD,"UnsupportedCharsetException",19,Bg,[],0,3,0,0,0,Gw,0,C,[],4,3,0,AW$,0,PR,0,EK,
[],0,3,0,0,["lM",AZQ(AEV)],OX,0,EK,[],0,3,0,0,["lM",AZQ(ASG)],Jm,0,EK,[],0,3,0,0,["lM",AZQ(AFE)],ABP,0,C,[],0,0,0,0,0,Zi,0,C,[],0,0,0,0,0,Nx,0,C,[],0,3,0,0,0,Qb,0,C,[],0,3,0,0,0,AEe,0,C,[],0,0,0,0,0,Rx,0,C,[],0,3,0,0,0,Gy,0,Fj,[],0,3,0,0,0,Mr,"AssertionError",21,Gf,[],0,3,0,0,0,O$,0,D7,[],0,0,0,0,0,Zy,0,C,[],0,0,0,0,["r",AZQ(ANV)],Rb,0,Fc,[],0,3,0,0,["mw",function(b,c,d,e,f,g,h){return ALq(this,b,c,d,e,f,g,h);}]]);
$rt_metadata([R_,0,Fc,[],0,3,0,0,["mw",function(b,c,d,e,f,g,h){return ASb(this,b,c,d,e,f,g,h);}],Or,0,Fc,[],0,3,0,0,["mw",function(b,c,d,e,f,g,h){return ARS(this,b,c,d,e,f,g,h);}],O8,0,D7,[],0,0,0,0,["kJ",AZR(AGP),"jQ",AZR(AE8),"j9",AZS(Y5)],Jk,0,C,[HS,IC],0,3,0,0,0,K3,"BufferUnderflowException",19,BU,[],0,3,0,0,0,Mt,"BufferOverflowException",19,BU,[],0,3,0,0,0,L7,"MalformedInputException",19,Gy,[],0,3,0,0,["jR",AZQ(AKd)],K0,"UnmappableCharacterException",19,Gy,[],0,3,0,0,["jR",AZQ(AJx)],Na,0,C,[],32,0,0,AY3,
0,LK,"InstantiationException",21,Fa,[],0,3,0,0,0,Kj,"IllegalAccessException",21,Fa,[],0,3,0,0,0,Nl,0,Fa,[],0,3,0,0,0,Ho,0,EA,[],0,0,0,0,["fU",AZQ(AHX)],TC,0,D7,[],0,0,0,0,["kJ",AZR(AH0),"jQ",AZR(AOV),"j9",AZS(AGD)],WF,0,C,[],4,3,0,0,0,FK,0,C,[Cd,DB],0,3,0,0,0,R$,0,C,[],4,3,0,AKl,0,M_,0,D7,[],0,0,0,0,["kJ",AZR(AKR),"jQ",AZR(AFx),"j9",AZS(ALn)],Ny,0,C,[Hq],0,0,0,0,["ej",AZR(ADL)],OD,0,C,[E1],0,0,0,0,["ej",AZR(AJ_)]]);
function $rt_array(cls,data){this.c1=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none","all","table","cell",
"actor","object cannot be null.","objects cannot be null.","index can\'t be >= size: "," >= ","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","Array is empty.","Unable to create new instance: ","","If no regions are specified, the font data must have an images path.","0","This TextureData implementation does not upload data itself","Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","start + count must be <= size: "," + "," <= ","end can\'t be >= size: ","start can\'t be > end: ",
" > ","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","\tat ","Caused by: ","charsetName is null","Should never been thrown","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","Illegal radix: ","java.runtime.name","userAgent",
"os.name","Windows","OS X","no OS",".html","index.html","index-debug.html","assets/","assets.txt","resize","gdx.wasm.js","Cozette.fnt","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","LOAD_ASSETS","APP_CREATE","APP_LOOP","offset + length must be <= size: ","Loading asset : ","Unsupported asset type ","Loading script : ","px","UTF-8","mousedown","mouseup","mousemove","wheel","touchstart",
"touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","hidden","capacity must be >= 0: ","The required capacity is too large: ","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","\\.","Invalid version string: ","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL","iOS","Webaudio","Audiocontext unlocked",
"OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","object","function","string","number","undefined","Exception occurred in constructor for class: ","Could not instantiate instance of class: ","Illegal argument(s) supplied to constructor for class: ","fSet","\\Q","\\E","\\\\E\\Q","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet",
"FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ",
"sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement",
"LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer",
"Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols",
"Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes",
"KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B",
"HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary","Directory","public","protected","private","abstract",
"static","final","transient","volatile","synchronized","native","strictfp","interface","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","=","==","Action must be non-null","Index out of bounds","Replacement preconditions do not hold","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","nextExclusiveFloat() using %s at %d FPS","nextDouble() using %s at %d FPS",
"nextFloat() using %s at %d FPS","nextInt() using %s at %d FPS","nextLong() using %s at %d FPS","nextLong() (upper bits) using %s at %d FPS","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ",
"char "," =","kerning ","Error loading font file: ","No glyphs found.","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","New position "," is outside of range [0;","New limit ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ",
"The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","Index ","BIG_ENDIAN","LITTLE_ENDIAN","The last float in src ","The last short in src ",
"Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\"," does not exist","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","newAction must be non-null","The specified font must contain at least one texture page.","Unknown Gdx2DPixmap Format: ",
"Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.",
"�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","RndR","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","attribute vec2 a_texCoord",";\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ",
"   gl_PointSize = 1.0;\n}\n","#ifdef GL_ES\nprecision mediump float;\n#endif\n","uniform sampler2D u_sampler","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * "," texture2D(u_sampler",",  v_tex",") *",";\n}","ChpR","BeBR","BeJR","AceR","Asset loaded: ","file-f:","file-d:","01","01234567","0123456789","0123456789ABCDEF","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?",
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\'/!@#$%^&*()[]{}<>:?;|_=","NaN","0.0","-0.0","0.",".0","Infinity","-Infinity"," != ","Logical","Pixels","Negative bit address","Negative exponent","BigInteger divide by zero","US-ASCII","ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","-2147483648","Malformed input of length ","Unmappable characters of length ","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST",
"OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET","CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","data:",";base64,","error"]);
L.prototype.toString=function(){return $rt_ustr(this);};
L.prototype.valueOf=L.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AHM(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Z=Long_add;var Cf=Long_sub;var Bb=Long_mul;var C5=Long_div;var Dk=Long_rem;var FF=Long_or;var Bp=Long_and;var Bm=Long_xor;var CL=Long_shl;var DD=Long_shr;var Bc=Long_shru;var AXW=Long_compare;var Dl=Long_eq;var Ey=Long_ne;var F9=Long_lt;var F$=Long_le;var VL=Long_gt;var C2=Long_ge;var A82=Long_not;var G4=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}$rt_exports.main=$rt_mainStarter(AYm);
$rt_exports.main.javaException=$rt_javaException;
let A5n=$rt_globals.Symbol('jsoClass');
(function(){var c;c=LH.prototype;c[A5n]=true;c.onAnimationFrame=c.JB;c=Zr.prototype;c[A5n]=true;c.handleEvent=c.ej;c=Tz.prototype;c[A5n]=true;c.handleEvent=c.ej;c=TA.prototype;c[A5n]=true;c.handleEvent=c.ej;c=Q3.prototype;c[A5n]=true;c.fullscreenChanged=c.Lx;c=Qe.prototype;c[A5n]=true;c.denied=c.M7;c.prompt=c.ID;c.granted=c.F5;c=T$.prototype;c.removeEventListener=c.Jy;c.dispatchEvent=c.Ic;c.get=c.EF;c.addEventListener=c.G0;Object.defineProperty(c,"length",{get:c.Ii});c=Pa.prototype;c[A5n]=true;c.handleEvent
=c.ej;c=Pb.prototype;c[A5n]=true;c.handleEvent=c.ej;c=O9.prototype;c[A5n]=true;c.handleEvent=c.ej;c=Nj.prototype;c[A5n]=true;c.unlockFunction=c.GM;c=Qp.prototype;c[A5n]=true;c.accept=c.E3;c=Qn.prototype;c[A5n]=true;c.accept=c.E3;c=VZ.prototype;c.removeEventListener=c.LY;c.dispatchEvent=c.Hk;c.addEventListener=c.JW;c=QY.prototype;c[A5n]=true;c.handleEvent=c.ej;c=WQ.prototype;c[A5n]=true;c=ACA.prototype;c.removeEventListener=c.Ht;c.dispatchEvent=c.H$;c.addEventListener=c.Ko;c=M$.prototype;c[A5n]=true;c.handleEvent
=c.ej;c=IM.prototype;c[A5n]=true;c.handleEvent=c.ej;c=WA.prototype;c.get=c.EF;Object.defineProperty(c,"length",{get:c.LU});c=Rz.prototype;c[A5n]=true;c.handleEvent=c.ej;c=Ny.prototype;c[A5n]=true;c.handleEvent=c.ej;c=OD.prototype;c[A5n]=true;c.handleEvent=c.ej;})();
}));
