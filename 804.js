(self.webpackChunkaccount=self.webpackChunkaccount||[]).push([[804],{18:(e,t,n)=>{var r=n(19),_=r,o=Function("return this")(),a=n(774);_.object.extend(proto,a),_.exportSymbol("proto.auth.LoginRequest",null,o),_.exportSymbol("proto.auth.LoginResponse",null,o),_.exportSymbol("proto.auth.RegisterRequest",null,o),proto.auth.LoginRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},_.inherits(proto.auth.LoginRequest,r.Message),_.DEBUG&&!COMPILED&&(proto.auth.LoginRequest.displayName="proto.auth.LoginRequest"),r.Message.GENERATE_TO_OBJECT&&(proto.auth.LoginRequest.prototype.toObject=function(e){return proto.auth.LoginRequest.toObject(e,this)},proto.auth.LoginRequest.toObject=function(e,t){var n={username:r.Message.getFieldWithDefault(t,1,""),password:r.Message.getFieldWithDefault(t,2,"")};return e&&(n.$jspbMessageInstance=t),n}),proto.auth.LoginRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.auth.LoginRequest;return proto.auth.LoginRequest.deserializeBinaryFromReader(n,t)},proto.auth.LoginRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setUsername(n);break;case 2:n=t.readString(),e.setPassword(n);break;default:t.skipField()}return e},proto.auth.LoginRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.auth.LoginRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.auth.LoginRequest.serializeBinaryToWriter=function(e,t){var n=void 0;(n=e.getUsername()).length>0&&t.writeString(1,n),(n=e.getPassword()).length>0&&t.writeString(2,n)},proto.auth.LoginRequest.prototype.getUsername=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.auth.LoginRequest.prototype.setUsername=function(e){r.Message.setProto3StringField(this,1,e)},proto.auth.LoginRequest.prototype.getPassword=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.auth.LoginRequest.prototype.setPassword=function(e){r.Message.setProto3StringField(this,2,e)},proto.auth.LoginResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},_.inherits(proto.auth.LoginResponse,r.Message),_.DEBUG&&!COMPILED&&(proto.auth.LoginResponse.displayName="proto.auth.LoginResponse"),r.Message.GENERATE_TO_OBJECT&&(proto.auth.LoginResponse.prototype.toObject=function(e){return proto.auth.LoginResponse.toObject(e,this)},proto.auth.LoginResponse.toObject=function(e,t){var n={token:r.Message.getFieldWithDefault(t,1,"")};return e&&(n.$jspbMessageInstance=t),n}),proto.auth.LoginResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.auth.LoginResponse;return proto.auth.LoginResponse.deserializeBinaryFromReader(n,t)},proto.auth.LoginResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setToken(n);break;default:t.skipField()}return e},proto.auth.LoginResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.auth.LoginResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.auth.LoginResponse.serializeBinaryToWriter=function(e,t){var n;(n=e.getToken()).length>0&&t.writeString(1,n)},proto.auth.LoginResponse.prototype.getToken=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.auth.LoginResponse.prototype.setToken=function(e){r.Message.setProto3StringField(this,1,e)},proto.auth.RegisterRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},_.inherits(proto.auth.RegisterRequest,r.Message),_.DEBUG&&!COMPILED&&(proto.auth.RegisterRequest.displayName="proto.auth.RegisterRequest"),r.Message.GENERATE_TO_OBJECT&&(proto.auth.RegisterRequest.prototype.toObject=function(e){return proto.auth.RegisterRequest.toObject(e,this)},proto.auth.RegisterRequest.toObject=function(e,t){var n={username:r.Message.getFieldWithDefault(t,1,""),password:r.Message.getFieldWithDefault(t,2,"")};return e&&(n.$jspbMessageInstance=t),n}),proto.auth.RegisterRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),n=new proto.auth.RegisterRequest;return proto.auth.RegisterRequest.deserializeBinaryFromReader(n,t)},proto.auth.RegisterRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();)switch(t.getFieldNumber()){case 1:var n=t.readString();e.setUsername(n);break;case 2:n=t.readString(),e.setPassword(n);break;default:t.skipField()}return e},proto.auth.RegisterRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.auth.RegisterRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.auth.RegisterRequest.serializeBinaryToWriter=function(e,t){var n=void 0;(n=e.getUsername()).length>0&&t.writeString(1,n),(n=e.getPassword()).length>0&&t.writeString(2,n)},proto.auth.RegisterRequest.prototype.getUsername=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.auth.RegisterRequest.prototype.setUsername=function(e){r.Message.setProto3StringField(this,1,e)},proto.auth.RegisterRequest.prototype.getPassword=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.auth.RegisterRequest.prototype.setPassword=function(e){r.Message.setProto3StringField(this,2,e)},_.object.extend(t,proto.auth)},804:(e,t,n)=>{"use strict";n.a(e,(async e=>{n.r(t),n.d(t,{__wbg_addEventListener_e8fdfac380f9ea25:()=>r.mz,__wbg_alert_2bee8756b0c6ec99:()=>r.Np,__wbg_appendChild_98dedaeac24501f2:()=>r.nZ,__wbg_call_ab183a630df3a257:()=>r.Kt,__wbg_createElementNS_ae76308e06470c87:()=>r.dW,__wbg_createElement_7cbe07ad3289abea:()=>r.kZ,__wbg_createTextNode_bbff6f9f6e6b38bf:()=>r.Po,__wbg_document_2b44f2a86e03665a:()=>r.vZ,__wbg_error_4bb6c2a97407129a:()=>r.kF,__wbg_globalThis_34bac2d08ebb9b58:()=>r.fe,__wbg_global_1c436164a66c9c22:()=>r.mm,__wbg_hash_0522c66963abec0e:()=>r.Cd,__wbg_history_4a086e80d4814e51:()=>r.g_,__wbg_insertBefore_5886cc01dc0233e3:()=>r.D8,__wbg_instanceof_HtmlButtonElement_56d6508cc80478bf:()=>r.Ml,__wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2:()=>r.GH,__wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087:()=>r.uL,__wbg_instanceof_PopStateEvent_95152e2939b0b1f6:()=>r.sY,__wbg_instanceof_Window_fbe0320f34c4cd31:()=>r.OC,__wbg_is_e8ad5aa6da4b8c83:()=>r.nB,__wbg_lastChild_5fc52139f307fbaa:()=>r.fY,__wbg_location_df2a42f020b6b0fe:()=>r.M,__wbg_namespaceURI_5ab9ad8edd6b745e:()=>r.hA,__wbg_new_4454a805e0aef46b:()=>r.qP,__wbg_new_59cb74e423758ede:()=>r.h9,__wbg_new_9d54d0f039692981:()=>r.bc,__wbg_new_dc5b27cfd2149b8f:()=>r.u7,__wbg_newnoargs_ab5e899738c0eff4:()=>r.dM,__wbg_pathname_64dbb2cc59d827b3:()=>r.rK,__wbg_preventDefault_4eb36ec8e5563ad6:()=>r.JQ,__wbg_pushState_14bda476a428fd88:()=>r.Ev,__wbg_querySelector_be2514e5de79507f:()=>r.mX,__wbg_register_13fae3273e84afb7:()=>r.RA,__wbg_removeAttribute_43b052e0560d223b:()=>r.jS,__wbg_removeChild_51369e223cb8a779:()=>r.cB,__wbg_removeEventListener_0007cd1449f82876:()=>r.Y0,__wbg_replaceState_452a5e828796c789:()=>r.rF,__wbg_search_fe6bd2ae061a51fa:()=>r.LC,__wbg_self_77eca7b42660e1bb:()=>r.U,__wbg_setAttribute_b638fce95071fff6:()=>r.fS,__wbg_setPassword_828baef24c5290c1:()=>r.o9,__wbg_setUsername_11b92d07d5f5e0cb:()=>r.Yq,__wbg_set_3afd31f38e771338:()=>r.Rr,__wbg_setchecked_1fe693236b4c24f3:()=>r.jP,__wbg_setnodeValue_7404ea475784eb1c:()=>r.w_,__wbg_settype_2628aa2562917c8e:()=>r.yt,__wbg_settype_ad8678a602cc664d:()=>r.FP,__wbg_setvalue_4f1af4fbd0b9942b:()=>r.Bs,__wbg_setvalue_e3b8a9c5a4ad0114:()=>r.mD,__wbg_stack_558ba5917b466edd:()=>r.Dz,__wbg_state_9ad78c8079223a86:()=>r.KG,__wbg_state_a3024a8a1af2c159:()=>r.rp,__wbg_value_41a8d072fc94a8a4:()=>r.FH,__wbg_value_e27a74c3db49694f:()=>r.C0,__wbg_window_51dac01569f1ba70:()=>r.KF,__wbindgen_cb_drop:()=>r.G6,__wbindgen_closure_wrapper335:()=>r.m8,__wbindgen_closure_wrapper541:()=>r.pC,__wbindgen_debug_string:()=>r.Dd,__wbindgen_is_undefined:()=>r.XP,__wbindgen_object_clone_ref:()=>r.m_,__wbindgen_object_drop_ref:()=>r.ug,__wbindgen_string_get:()=>r.qt,__wbindgen_string_new:()=>r.h4,__wbindgen_throw:()=>r.Or,start:()=>r.BL});var r=n(802),_=e([r]);r=(_.then?await _:_)[0]}))},802:(e,t,n)=>{"use strict";n.a(e,(async r=>{n.d(t,{BL:()=>C,ug:()=>P,qP:()=>k,bc:()=>D,Yq:()=>O,o9:()=>j,RA:()=>A,G6:()=>z,m_:()=>W,h4:()=>x,XP:()=>I,h9:()=>U,Dz:()=>G,kF:()=>N,OC:()=>H,vZ:()=>K,M:()=>Y,g_:()=>$,Np:()=>Z,kZ:()=>J,dW:()=>X,Po:()=>Q,mX:()=>V,uL:()=>ee,FH:()=>te,mD:()=>ne,Ml:()=>re,FP:()=>_e,GH:()=>oe,jP:()=>ae,yt:()=>ie,C0:()=>se,Bs:()=>ue,JQ:()=>ce,mz:()=>be,Y0:()=>ge,hA:()=>fe,jS:()=>de,fS:()=>le,KG:()=>we,Ev:()=>he,rF:()=>pe,fY:()=>me,w_:()=>Re,nZ:()=>ye,D8:()=>ve,cB:()=>Le,sY:()=>Be,rp:()=>Ee,rK:()=>qe,LC:()=>Fe,Cd:()=>Me,Kt:()=>Se,dM:()=>Ce,nB:()=>Te,u7:()=>Pe,U:()=>ke,KF:()=>De,fe:()=>Oe,mm:()=>je,Rr:()=>Ae,qt:()=>ze,Dd:()=>We,Or:()=>xe,m8:()=>Ie,pC:()=>Ue});var _=n(922),o=n(18),a=n(620);e=n.hmd(e);var i=r([a]);a=(i.then?await i:i)[0];const s=new Array(32).fill(void 0);function u(e){return s[e]}s.push(void 0,null,!0,!1);let c=s.length;function b(e){const t=u(e);return function(e){e<36||(s[e]=c,c=e)}(e),t}function g(e){c===s.length&&s.push(s.length+1);const t=c;return c=s[t],s[t]=e,t}let f=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let d=null;function l(){return null!==d&&d.buffer===a.memory.buffer||(d=new Uint8Array(a.memory.buffer)),d}function w(e,t){return f.decode(l().subarray(e,e+t))}let h=0,p=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const m="function"==typeof p.encodeInto?function(e,t){return p.encodeInto(e,t)}:function(e,t){const n=p.encode(e);return t.set(n),{read:e.length,written:n.length}};function R(e,t,n){if(void 0===n){const n=p.encode(e),r=t(n.length);return l().subarray(r,r+n.length).set(n),h=n.length,r}let r=e.length,_=t(r);const o=l();let a=0;for(;a<r;a++){const t=e.charCodeAt(a);if(t>127)break;o[_+a]=t}if(a!==r){0!==a&&(e=e.slice(a)),_=n(_,r,r=a+3*e.length);const t=l().subarray(_+a,_+r);a+=m(e,t).written}return h=a,_}function y(e){return null==e}let v=null;function L(){return null!==v&&v.buffer===a.memory.buffer||(v=new Int32Array(a.memory.buffer)),v}function B(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=B(e[0]));for(let r=1;r<t;r++)n+=", "+B(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}function E(e,t,n,r){const _={a:e,b:t,cnt:1,dtor:n},o=(...e)=>{_.cnt++;const t=_.a;_.a=0;try{return r(t,_.b,...e)}finally{0==--_.cnt?a.__wbindgen_export_2.get(_.dtor)(t,_.b):_.a=t}};return o.original=_,o}let q=32;function F(e){if(1==q)throw new Error("out of js stack");return s[--q]=e,q}function M(e,t,n){try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcdb72eaab0a1e167(e,t,F(n))}finally{s[q++]=void 0}}function S(e,t,n){try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd882a675b634f5a8(e,t,F(n))}finally{s[q++]=void 0}}function C(e){var t=R(e,a.__wbindgen_malloc,a.__wbindgen_realloc),n=h;a.start(t,n)}function T(e){return function(){try{return e.apply(this,arguments)}catch(e){a.__wbindgen_exn_store(g(e))}}}const P=function(e){b(e)},k=function(e,t,n,r){return g(new _.L(w(e,t),b(n),b(r)))},D=function(){return g(new o.RegisterRequest)},O=function(e,t,n){return g(u(e).setUsername(w(t,n)))},j=function(e,t,n){return g(u(e).setPassword(w(t,n)))},A=function(e,t,n,r){u(e).register(b(t),b(n),b(r))},z=function(e){const t=b(e).original;return 1==t.cnt--&&(t.a=0,!0)},W=function(e){return g(u(e))},x=function(e,t){return g(w(e,t))},I=function(e){return void 0===u(e)},U=function(){return g(new Error)},G=function(e,t){var n=R(u(t).stack,a.__wbindgen_malloc,a.__wbindgen_realloc),r=h;L()[e/4+1]=r,L()[e/4+0]=n},N=function(e,t){try{console.error(w(e,t))}finally{a.__wbindgen_free(e,t)}},H=function(e){return u(e)instanceof Window},K=function(e){var t=u(e).document;return y(t)?0:g(t)},Y=function(e){return g(u(e).location)},$=T((function(e){return g(u(e).history)})),Z=T((function(e,t,n){u(e).alert(w(t,n))})),J=T((function(e,t,n){return g(u(e).createElement(w(t,n)))})),X=T((function(e,t,n,r,_){return g(u(e).createElementNS(0===t?void 0:w(t,n),w(r,_)))})),Q=function(e,t,n){return g(u(e).createTextNode(w(t,n)))},V=T((function(e,t,n){var r=u(e).querySelector(w(t,n));return y(r)?0:g(r)})),ee=function(e){return u(e)instanceof HTMLTextAreaElement},te=function(e,t){var n=R(u(t).value,a.__wbindgen_malloc,a.__wbindgen_realloc),r=h;L()[e/4+1]=r,L()[e/4+0]=n},ne=function(e,t,n){u(e).value=w(t,n)},re=function(e){return u(e)instanceof HTMLButtonElement},_e=function(e,t,n){u(e).type=w(t,n)},oe=function(e){return u(e)instanceof HTMLInputElement},ae=function(e,t){u(e).checked=0!==t},ie=function(e,t,n){u(e).type=w(t,n)},se=function(e,t){var n=R(u(t).value,a.__wbindgen_malloc,a.__wbindgen_realloc),r=h;L()[e/4+1]=r,L()[e/4+0]=n},ue=function(e,t,n){u(e).value=w(t,n)},ce=function(e){u(e).preventDefault()},be=T((function(e,t,n,r,_){u(e).addEventListener(w(t,n),u(r),u(_))})),ge=T((function(e,t,n,r,_){u(e).removeEventListener(w(t,n),u(r),0!==_)})),fe=function(e,t){var n=u(t).namespaceURI,r=y(n)?0:R(n,a.__wbindgen_malloc,a.__wbindgen_realloc),_=h;L()[e/4+1]=_,L()[e/4+0]=r},de=T((function(e,t,n){u(e).removeAttribute(w(t,n))})),le=T((function(e,t,n,r,_){u(e).setAttribute(w(t,n),w(r,_))})),we=T((function(e){return g(u(e).state)})),he=T((function(e,t,n,r,_,o){u(e).pushState(u(t),w(n,r),0===_?void 0:w(_,o))})),pe=T((function(e,t,n,r,_,o){u(e).replaceState(u(t),w(n,r),0===_?void 0:w(_,o))})),me=function(e){var t=u(e).lastChild;return y(t)?0:g(t)},Re=function(e,t,n){u(e).nodeValue=0===t?void 0:w(t,n)},ye=T((function(e,t){return g(u(e).appendChild(u(t)))})),ve=T((function(e,t,n){return g(u(e).insertBefore(u(t),u(n)))})),Le=T((function(e,t){return g(u(e).removeChild(u(t)))})),Be=function(e){return u(e)instanceof PopStateEvent},Ee=function(e){return g(u(e).state)},qe=T((function(e,t){var n=R(u(t).pathname,a.__wbindgen_malloc,a.__wbindgen_realloc),r=h;L()[e/4+1]=r,L()[e/4+0]=n})),Fe=T((function(e,t){var n=R(u(t).search,a.__wbindgen_malloc,a.__wbindgen_realloc),r=h;L()[e/4+1]=r,L()[e/4+0]=n})),Me=T((function(e,t){var n=R(u(t).hash,a.__wbindgen_malloc,a.__wbindgen_realloc),r=h;L()[e/4+1]=r,L()[e/4+0]=n})),Se=T((function(e,t){return g(u(e).call(u(t)))})),Ce=function(e,t){return g(new Function(w(e,t)))},Te=function(e,t){return Object.is(u(e),u(t))},Pe=function(){return g(new Object)},ke=T((function(){return g(self.self)})),De=T((function(){return g(window.window)})),Oe=T((function(){return g(globalThis.globalThis)})),je=T((function(){return g(n.g.global)})),Ae=T((function(e,t,n){return Reflect.set(u(e),u(t),u(n))})),ze=function(e,t){const n=u(t);var r="string"==typeof n?n:void 0,_=y(r)?0:R(r,a.__wbindgen_malloc,a.__wbindgen_realloc),o=h;L()[e/4+1]=o,L()[e/4+0]=_},We=function(e,t){var n=R(B(u(t)),a.__wbindgen_malloc,a.__wbindgen_realloc),r=h;L()[e/4+1]=r,L()[e/4+0]=n},xe=function(e,t){throw new Error(w(e,t))},Ie=function(e,t,n){return g(E(e,t,139,M))},Ue=function(e,t,n){return g(E(e,t,197,S))}}))},620:(e,t,n)=>{"use strict";var r=([r])=>n.v(t,e.id,"23e83c480c4f672edf7d",{"./index_bg.js":{__wbindgen_object_drop_ref:r.ug,__wbg_new_4454a805e0aef46b:r.qP,__wbg_new_9d54d0f039692981:r.bc,__wbg_setUsername_11b92d07d5f5e0cb:r.Yq,__wbg_setPassword_828baef24c5290c1:r.o9,__wbg_register_13fae3273e84afb7:r.RA,__wbindgen_cb_drop:r.G6,__wbindgen_object_clone_ref:r.m_,__wbindgen_string_new:r.h4,__wbindgen_is_undefined:r.XP,__wbg_new_59cb74e423758ede:r.h9,__wbg_stack_558ba5917b466edd:r.Dz,__wbg_error_4bb6c2a97407129a:r.kF,__wbg_instanceof_Window_fbe0320f34c4cd31:r.OC,__wbg_document_2b44f2a86e03665a:r.vZ,__wbg_location_df2a42f020b6b0fe:r.M,__wbg_history_4a086e80d4814e51:r.g_,__wbg_alert_2bee8756b0c6ec99:r.Np,__wbg_createElement_7cbe07ad3289abea:r.kZ,__wbg_createElementNS_ae76308e06470c87:r.dW,__wbg_createTextNode_bbff6f9f6e6b38bf:r.Po,__wbg_querySelector_be2514e5de79507f:r.mX,__wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087:r.uL,__wbg_value_41a8d072fc94a8a4:r.FH,__wbg_setvalue_e3b8a9c5a4ad0114:r.mD,__wbg_instanceof_HtmlButtonElement_56d6508cc80478bf:r.Ml,__wbg_settype_ad8678a602cc664d:r.FP,__wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2:r.GH,__wbg_setchecked_1fe693236b4c24f3:r.jP,__wbg_settype_2628aa2562917c8e:r.yt,__wbg_value_e27a74c3db49694f:r.C0,__wbg_setvalue_4f1af4fbd0b9942b:r.Bs,__wbg_preventDefault_4eb36ec8e5563ad6:r.JQ,__wbg_addEventListener_e8fdfac380f9ea25:r.mz,__wbg_removeEventListener_0007cd1449f82876:r.Y0,__wbg_namespaceURI_5ab9ad8edd6b745e:r.hA,__wbg_removeAttribute_43b052e0560d223b:r.jS,__wbg_setAttribute_b638fce95071fff6:r.fS,__wbg_state_9ad78c8079223a86:r.KG,__wbg_pushState_14bda476a428fd88:r.Ev,__wbg_replaceState_452a5e828796c789:r.rF,__wbg_lastChild_5fc52139f307fbaa:r.fY,__wbg_setnodeValue_7404ea475784eb1c:r.w_,__wbg_appendChild_98dedaeac24501f2:r.nZ,__wbg_insertBefore_5886cc01dc0233e3:r.D8,__wbg_removeChild_51369e223cb8a779:r.cB,__wbg_instanceof_PopStateEvent_95152e2939b0b1f6:r.sY,__wbg_state_a3024a8a1af2c159:r.rp,__wbg_pathname_64dbb2cc59d827b3:r.rK,__wbg_search_fe6bd2ae061a51fa:r.LC,__wbg_hash_0522c66963abec0e:r.Cd,__wbg_call_ab183a630df3a257:r.Kt,__wbg_newnoargs_ab5e899738c0eff4:r.dM,__wbg_is_e8ad5aa6da4b8c83:r.nB,__wbg_new_dc5b27cfd2149b8f:r.u7,__wbg_self_77eca7b42660e1bb:r.U,__wbg_window_51dac01569f1ba70:r.KF,__wbg_globalThis_34bac2d08ebb9b58:r.fe,__wbg_global_1c436164a66c9c22:r.mm,__wbg_set_3afd31f38e771338:r.Rr,__wbindgen_string_get:r.qt,__wbindgen_debug_string:r.Dd,__wbindgen_throw:r.Or,__wbindgen_closure_wrapper335:r.m8,__wbindgen_closure_wrapper541:r.pC}});n.a(e,(e=>{var t=e([n(802)]);return t.then?t.then(r):r(t)}),1)},922:(e,t,n)=>{"use strict";n.d(t,{L:()=>a});var r=n(40),_=n(774),o=n(18);class a{constructor(e,t,n){this.methodInfoLogin=new r.AbstractClientBase.MethodInfo(o.LoginResponse,(e=>e.serializeBinary()),o.LoginResponse.deserializeBinary),this.methodInfoRegister=new r.AbstractClientBase.MethodInfo(_.Empty,(e=>e.serializeBinary()),_.Empty.deserializeBinary),n||(n={}),t||(t={}),n.format="binary",this.client_=new r.GrpcWebClientBase(n),this.hostname_=e,this.credentials_=t,this.options_=n}login(e,t,n){return void 0!==n?this.client_.rpcCall(this.hostname_+"/auth.Auth/Login",e,t||{},this.methodInfoLogin,n):this.client_.unaryCall(this.hostname_+"/auth.Auth/Login",e,t||{},this.methodInfoLogin)}register(e,t,n){return void 0!==n?this.client_.rpcCall(this.hostname_+"/auth.Auth/Register",e,t||{},this.methodInfoRegister,n):this.client_.unaryCall(this.hostname_+"/auth.Auth/Register",e,t||{},this.methodInfoRegister)}}}}]);