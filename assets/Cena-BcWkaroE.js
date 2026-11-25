const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Agua-DSxMXdRa.js","./events-e51d7528.esm-Ox0bj2Ds.js","./roteiro-DlK7Xoq7.js","./Cidade-o9nMG7n_.js","./index-Cb4ezeUV.js","./Gltf-CVSNoIWC.js","./constants-BqlKFZjA.js","./materiais-0pKk6M1H.js","./index-DxqgPOfC.css","./Montanhas-CtbeoZzL.js","./ApartamentoPBR-Cg2HqLEC.js","./ProjetosExtras-CQoVlaI3.js","./Clicaveis-CdHFUs_e.js","./PosProcesso-CFIm3Mm4.js"])))=>i.map(i=>d[i]);
import{$n as e,An as t,B as n,Bt as r,Cn as i,F as a,Gn as o,H as s,Hn as c,I as l,Jn as u,Jt as d,L as f,Ln as p,Nn as m,Ot as h,Q as g,Qt as _,S as v,St as y,Ut as b,V as x,Wn as S,Xn as C,Y as w,Yn as T,Z as E,Zn as D,Zt as O,_ as k,_n as A,_t as j,a as M,at as N,b as ee,bn as P,c as F,cn as te,d as ne,en as re,er as ie,f as ae,g as oe,h as I,hn as se,i as ce,it as L,j as le,jn as ue,kt as de,l as fe,m as pe,n as me,nn as R,nt as he,o as ge,on as z,p as _e,qn as ve,r as B,rn as V,s as ye,st as H,t as be,tn as xe,tt as U,u as W,un as Se,v as Ce,vt as we,wn as Te,wt as Ee,x as De,xt as Oe,y as ke,yt as Ae,z as je,zn as Me}from"./events-e51d7528.esm-Ox0bj2Ds.js";import{t as Ne}from"./constants-BqlKFZjA.js";import{a as G,c as K,l as Pe}from"./roteiro-DlK7Xoq7.js";import{t as Fe}from"./materiais-0pKk6M1H.js";import{g as q,y as Ie}from"./index-Cb4ezeUV.js";var J=ie(D(),1);function Le(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}function Re({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){let i=n||(typeof window>`u`?class{}:window.ResizeObserver);if(!i)throw Error(`This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills`);let[a,o]=(0,J.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),s=(0,J.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:a,orientationHandler:null}),c=e?typeof e==`number`?e:e.scroll:null,l=e?typeof e==`number`?e:e.resize:null,u=(0,J.useRef)(!1);(0,J.useEffect)(()=>(u.current=!0,()=>void(u.current=!1)));let[d,f,p]=(0,J.useMemo)(()=>{let e=()=>{if(!s.current.element)return;let{left:e,top:t,width:n,height:i,bottom:a,right:c,x:l,y:d}=s.current.element.getBoundingClientRect(),f={left:e,top:t,width:n,height:i,bottom:a,right:c,x:l,y:d};s.current.element instanceof HTMLElement&&r&&(f.height=s.current.element.offsetHeight,f.width=s.current.element.offsetWidth),Object.freeze(f),u.current&&!Ue(s.current.lastBounds,f)&&o(s.current.lastBounds=f)};return[e,l?Le(e,l):e,c?Le(e,c):e]},[o,r,c,l]);function m(){s.current.scrollContainers&&(s.current.scrollContainers.forEach(e=>e.removeEventListener(`scroll`,p,!0)),s.current.scrollContainers=null),s.current.resizeObserver&&(s.current.resizeObserver.disconnect(),s.current.resizeObserver=null),s.current.orientationHandler&&(`orientation`in screen&&`removeEventListener`in screen.orientation?screen.orientation.removeEventListener(`change`,s.current.orientationHandler):`onorientationchange`in window&&window.removeEventListener(`orientationchange`,s.current.orientationHandler))}function h(){s.current.element&&(s.current.resizeObserver=new i(p),s.current.resizeObserver.observe(s.current.element),t&&s.current.scrollContainers&&s.current.scrollContainers.forEach(e=>e.addEventListener(`scroll`,p,{capture:!0,passive:!0})),s.current.orientationHandler=()=>{p()},`orientation`in screen&&`addEventListener`in screen.orientation?screen.orientation.addEventListener(`change`,s.current.orientationHandler):`onorientationchange`in window&&window.addEventListener(`orientationchange`,s.current.orientationHandler))}return Be(p,!!t),ze(f),(0,J.useEffect)(()=>{m(),h()},[t,p,f]),(0,J.useEffect)(()=>m,[]),[e=>{!e||e===s.current.element||(m(),s.current.element=e,s.current.scrollContainers=Ve(e),h())},a,d]}function ze(e){(0,J.useEffect)(()=>{let t=e;return window.addEventListener(`resize`,t),()=>void window.removeEventListener(`resize`,t)},[e])}function Be(e,t){(0,J.useEffect)(()=>{if(t){let t=e;return window.addEventListener(`scroll`,t,{capture:!0,passive:!0}),()=>void window.removeEventListener(`scroll`,t,!0)}},[e,t])}function Ve(e){let t=[];if(!e||e===document.body)return t;let{overflow:n,overflowX:r,overflowY:i}=window.getComputedStyle(e);return[n,r,i].some(e=>e===`auto`||e===`scroll`)&&t.push(e),[...t,...Ve(e.parentElement)]}var He=[`x`,`y`,`top`,`bottom`,`left`,`right`,`width`,`height`],Ue=(e,t)=>He.every(n=>e[n]===t[n]),Y=Te();C();function We({ref:e,children:t,fallback:n,resize:r,style:i,gl:a,events:o=ce,eventSource:s,eventPrefix:c,shadows:l,linear:u,flat:d,legacy:f,orthographic:p,frameloop:m,dpr:h,performance:g,raycaster:_,camera:y,scene:b,onPointerMissed:x,onCreated:S,...C}){J.useMemo(()=>ye(v),[]);let w=fe(),[T,E]=Re({scroll:!0,debounce:{scroll:50,resize:0},...r}),D=J.useRef(null),O=J.useRef(null);J.useImperativeHandle(e,()=>D.current);let k=pe(x),A=J.useCallback(e=>k.current==null?void 0:k.current(e),[k]),[j,M]=J.useState(!1),[N,ee]=J.useState(!1);if(j)throw j;if(N)throw N;let P=J.useRef(null),[te,re]=ne(),ie=J.useRef(null),oe=()=>s?F(s)?s.current:s:O.current;return J.useInsertionEffect(()=>()=>{let e=P.current;P.current=null,e?.unmount()},[]),ae(()=>{let e=D.current;E.width>0&&E.height>0&&e&&(P.current||=ge(e),P.current.configure({gl:a,scene:b,events:o,shadows:l,linear:u,flat:d,legacy:f,orthographic:p,frameloop:m,dpr:h,performance:g,raycaster:_,camera:y,size:E,onPointerMissed:A,onCreated:e=>{ie.current=e,e.events.connect==null||e.events.connect(oe()??O.current),c&&e.setEvents({compute:(e,t)=>{let n=e[c+`X`],r=e[c+`Y`];t.pointer.set(n/t.size.width*2-1,-(r/t.size.height)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),S?.(e)}}).catch(ee),P.current.ready.status===`fulfilled`?P.current.render((0,Y.jsx)(w,{children:(0,Y.jsx)(me,{set:ee,children:(0,Y.jsx)(J.Suspense,{fallback:(0,Y.jsx)(be,{set:M}),children:t??null})})})):P.current.ready.status===`pending`&&re(P.current.ready))}),J.useEffect(()=>{let e=ie.current?.get(),t=oe();e&&t&&e.events.connected!==t&&(e.events.connect==null||e.events.connect(t))}),J.useEffect(()=>{let e=D.current;return()=>{var t;e.isConnected||(t=P.current)==null||t.unmount()}},[]),(0,Y.jsxs)(`div`,{ref:O,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,pointerEvents:s?`none`:`auto`,...i},...C,children:[(0,Y.jsx)(`div`,{ref:T,style:{width:`100%`,height:`100%`},children:(0,Y.jsx)(`canvas`,{ref:D,style:{display:`block`},children:n})}),te]})}function Ge(e){return(0,Y.jsx)(oe,{children:(0,Y.jsx)(We,{...e})})}function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(null,arguments)}var X=Uint8Array,qe=Uint16Array,Je=Uint32Array,Ye=new X([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xe=new X([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ze=new X([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qe=function(e,t){for(var n=new qe(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Je(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},$e=Qe(Ye,2),et=$e[0],tt=$e[1];et[28]=258,tt[258]=28;var nt=Qe(Xe,0),rt=nt[0];nt[1];for(var it=new qe(32768),Z=0;Z<32768;++Z){var at=(Z&43690)>>>1|(Z&21845)<<1;at=(at&52428)>>>2|(at&13107)<<2,at=(at&61680)>>>4|(at&3855)<<4,it[Z]=((at&65280)>>>8|(at&255)<<8)>>>1}for(var ot=(function(e,t,n){for(var r=e.length,i=0,a=new qe(t);i<r;++i)++a[e[i]-1];var o=new qe(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new qe(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[it[d]>>>c]=l}else for(s=new qe(r),i=0;i<r;++i)e[i]&&(s[i]=it[o[e[i]-1]++]>>>15-e[i]);return s}),st=new X(288),Z=0;Z<144;++Z)st[Z]=8;for(var Z=144;Z<256;++Z)st[Z]=9;for(var Z=256;Z<280;++Z)st[Z]=7;for(var Z=280;Z<288;++Z)st[Z]=8;for(var ct=new X(32),Z=0;Z<32;++Z)ct[Z]=5;var lt=ot(st,9,1),ut=ot(ct,5,1),dt=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Q=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},ft=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},pt=function(e){return(e/8|0)+(e&7&&1)},mt=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e instanceof qe?qe:e instanceof Je?Je:X)(n-t);return r.set(e.subarray(t,n)),r},ht=function(e,t,n){var r=e.length;if(!r||n&&!n.l&&r<5)return t||new X(0);var i=!t||n,a=!n||n.i;n||={},t||=new X(r*3);var o=function(e){var n=t.length;if(e>n){var r=new X(Math.max(n*2,e));r.set(t),t=r}},s=n.f||0,c=n.p||0,l=n.b||0,u=n.l,d=n.d,f=n.m,p=n.n,m=r*8;do{if(!u){n.f=s=Q(e,c,1);var h=Q(e,c+1,3);if(c+=3,!h){var g=pt(c)+4,_=e[g-4]|e[g-3]<<8,v=g+_;if(v>r){if(a)throw`unexpected EOF`;break}i&&o(l+_),t.set(e.subarray(g,v),l),n.b=l+=_,n.p=c=v*8;continue}if(h==1)u=lt,d=ut,f=9,p=5;else if(h==2){var y=Q(e,c,31)+257,b=Q(e,c+10,15)+4,x=y+Q(e,c+5,31)+1;c+=14;for(var S=new X(x),C=new X(19),w=0;w<b;++w)C[Ze[w]]=Q(e,c+w*3,7);c+=b*3;for(var T=dt(C),E=(1<<T)-1,D=ot(C,T,1),w=0;w<x;){var O=D[Q(e,c,E)];c+=O&15;var g=O>>>4;if(g<16)S[w++]=g;else{var k=0,A=0;for(g==16?(A=3+Q(e,c,3),c+=2,k=S[w-1]):g==17?(A=3+Q(e,c,7),c+=3):g==18&&(A=11+Q(e,c,127),c+=7);A--;)S[w++]=k}}var j=S.subarray(0,y),M=S.subarray(y);f=dt(j),p=dt(M),u=ot(j,f,1),d=ot(M,p,1)}else throw`invalid block type`;if(c>m){if(a)throw`unexpected EOF`;break}}i&&o(l+131072);for(var N=(1<<f)-1,ee=(1<<p)-1,P=c;;P=c){var k=u[ft(e,c)&N],F=k>>>4;if(c+=k&15,c>m){if(a)throw`unexpected EOF`;break}if(!k)throw`invalid length/literal`;if(F<256)t[l++]=F;else if(F==256){P=c,u=null;break}else{var te=F-254;if(F>264){var w=F-257,ne=Ye[w];te=Q(e,c,(1<<ne)-1)+et[w],c+=ne}var re=d[ft(e,c)&ee],ie=re>>>4;if(!re)throw`invalid distance`;c+=re&15;var M=rt[ie];if(ie>3){var ne=Xe[ie];M+=ft(e,c)&(1<<ne)-1,c+=ne}if(c>m){if(a)throw`unexpected EOF`;break}i&&o(l+131072);for(var ae=l+te;l<ae;l+=4)t[l]=t[l-M],t[l+1]=t[l+1-M],t[l+2]=t[l+2-M],t[l+3]=t[l+3-M];l=ae}}n.l=u,n.p=P,n.b=l,u&&(s=1,n.m=f,n.d=d,n.n=p)}while(!s);return l==t.length?t:mt(t,0,l)},gt=new X(0),_t=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw`invalid zlib data`;if(e[1]&32)throw`invalid zlib data: preset dictionaries not supported`};function vt(e,t){return ht((_t(e),e.subarray(2,-4)),t)}var yt=typeof TextDecoder<`u`&&new TextDecoder;try{yt.decode(gt,{stream:!0})}catch{}var bt=e=>e&&e.isCubeTexture,xt=class extends h{constructor(e,t){let n=bt(e),r=((n?e.image[0]?.width:e.image.width)??1024)/4,i=Math.floor(Math.log2(r)),a=2**i,o=3*Math.max(a,112),s=4*a,c=[n?`#define ENVMAP_TYPE_CUBE`:``,`#define CUBEUV_TEXEL_WIDTH ${1/o}`,`#define CUBEUV_TEXEL_HEIGHT ${1/s}`,`#define CUBEUV_MAX_MIP ${i}.0`].join(`
`)+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${Ne>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
        `,l={map:{value:e},height:{value:t?.height||15},radius:{value:t?.radius||100}},u=new he(1,16),d=new R({uniforms:l,fragmentShader:c,vertexShader:`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,side:2});super(u,d)}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}},St=class extends n{constructor(e){super(e),this.type=U}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.RGBELoader: Read Error: `+(t||``));case 2:throw Error(`THREE.RGBELoader: Write Error: `+(t||``));case 3:throw Error(`THREE.RGBELoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.RGBELoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;)if(c.string+=l+`
`,l.charAt(0)===`#`)c.comments+=l+`
`;else if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break;return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=x.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=x.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=x.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=x.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let c=r(s),l=c.width,u=c.height,d=i(s.subarray(s.pos),l,u),f,p,m;switch(this.type){case E:m=d.length/4;let e=new Float32Array(m*4);for(let t=0;t<m;t++)a(d,t*4,e,t*4);f=e,p=E;break;case U:m=d.length/4;let t=new Uint16Array(m*4);for(let e=0;e<m;e++)o(d,e*4,t,e*4);f=t,p=U;break;default:throw Error(`THREE.RGBELoader: Unsupported type: `+this.type)}return{width:l,height:u,data:f,header:c.string,gamma:c.gamma,exposure:c.exposure,type:p}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case E:case U:`colorSpace`in e?e.colorSpace=`srgb-linear`:e.encoding=3e3,e.minFilter=j,e.magFilter=j,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}return super.load(e,i,n,r)}},Ct=Ne>=152,wt=class extends n{constructor(e){super(e),this.type=U}parse(e){let t=65536,n=8192,r=65537,i=16384,a=16383,o=65535,s=2.7182818**2.2;function c(e,n){for(var r=0,i=0;i<t;++i)(i==0||e[i>>3]&1<<(i&7))&&(n[r++]=i);for(var a=r-1;r<t;)n[r++]=0;return a}function l(e){for(var t=0;t<i;t++)e[t]={},e[t].len=0,e[t].lit=0,e[t].p=null}let u={l:0,c:0,lc:0};function d(e,t,n,r,i){for(;n<e;)t=t<<8|_e(r,i),n+=8;n-=e,u.l=t>>n&(1<<e)-1,u.c=t,u.lc=n}let f=Array(59);function p(e){for(var t=0;t<=58;++t)f[t]=0;for(var t=0;t<r;++t)f[e[t]]+=1;for(var n=0,t=58;t>0;--t){var i=n+f[t]>>1;f[t]=n,n=i}for(var t=0;t<r;++t){var a=e[t];a>0&&(e[t]=a|f[a]++<<6)}}function m(e,t,n,r,i,a,o){for(var s=n,c=0,l=0;i<=a;i++){if(s.value-n.value>r)return!1;d(6,c,l,e,s);var f=u.l;if(c=u.c,l=u.lc,o[i]=f,f==63){if(s.value-n.value>r)throw`Something wrong with hufUnpackEncTable`;d(8,c,l,e,s);var m=u.l+6;if(c=u.c,l=u.lc,i+m>a+1)throw`Something wrong with hufUnpackEncTable`;for(;m--;)o[i++]=0;i--}else if(f>=59){var m=f-59+2;if(i+m>a+1)throw`Something wrong with hufUnpackEncTable`;for(;m--;)o[i++]=0;i--}}p(o)}function h(e){return e&63}function g(e){return e>>6}function v(e,t,n,r){for(;t<=n;t++){var i=g(e[t]),a=h(e[t]);if(i>>a)throw`Invalid table entry`;if(a>14){var o=r[i>>a-14];if(o.len)throw`Invalid table entry`;if(o.lit++,o.p){var s=o.p;o.p=Array(o.lit);for(var c=0;c<o.lit-1;++c)o.p[c]=s[c]}else o.p=[,];o.p[o.lit-1]=t}else if(a)for(var l=0,c=1<<14-a;c>0;c--){var o=r[(i<<14-a)+l];if(o.len||o.p)throw`Invalid table entry`;o.len=a,o.lit=t,l++}}return!0}let y={c:0,lc:0};function b(e,t,n,r){e=e<<8|_e(n,r),t+=8,y.c=e,y.lc=t}let S={c:0,lc:0};function C(e,t,n,r,i,a,o,s,c,l){if(e==t){r<8&&(b(n,r,i,o),n=y.c,r=y.lc),r-=8;var u=n>>r,u=new Uint8Array([u])[0];if(c.value+u>l)return!1;for(var d=s[c.value-1];u-->0;)s[c.value++]=d}else if(c.value<l)s[c.value++]=e;else return!1;S.c=n,S.lc=r}function w(e){return e&65535}function T(e){var t=w(e);return t>32767?t-65536:t}let D={a:0,b:0};function k(e,t){var n=T(e),r=T(t),i=n+(r&1)+(r>>1),a=i,o=i-r;D.a=a,D.b=o}function A(e,t){var n=w(e),r=w(t),i=n-(r>>1)&o,a=r+i-32768&o;D.a=a,D.b=i}function j(e,t,n,r,i,a,o){for(var s=o<16384,c=n>i?i:n,l=1,u;l<=c;)l<<=1;for(l>>=1,u=l,l>>=1;l>=1;){for(var d=0,f=d+a*(i-u),p=a*l,m=a*u,h=r*l,g=r*u,_,v,y,b;d<=f;d+=m){for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h,w=x+p,T=w+h;s?(k(e[x+t],e[w+t]),_=D.a,y=D.b,k(e[C+t],e[T+t]),v=D.a,b=D.b,k(_,v),e[x+t]=D.a,e[C+t]=D.b,k(y,b),e[w+t]=D.a,e[T+t]=D.b):(A(e[x+t],e[w+t]),_=D.a,y=D.b,A(e[C+t],e[T+t]),v=D.a,b=D.b,A(_,v),e[x+t]=D.a,e[C+t]=D.b,A(y,b),e[w+t]=D.a,e[T+t]=D.b)}if(n&l){var w=x+p;s?k(e[x+t],e[w+t]):A(e[x+t],e[w+t]),_=D.a,e[w+t]=D.b,e[x+t]=_}}if(i&l)for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h;s?k(e[x+t],e[C+t]):A(e[x+t],e[C+t]),_=D.a,e[C+t]=D.b,e[x+t]=_}u=l,l>>=1}return d}function M(e,t,n,r,i,o,s,c,l,u){for(var d=0,f=0,p=c,m=Math.trunc(i.value+(o+7)/8);i.value<m;)for(b(d,f,n,i),d=y.c,f=y.lc;f>=14;){var _=t[d>>f-14&a];if(_.len)f-=_.len,C(_.lit,s,d,f,n,r,i,l,u,p),d=S.c,f=S.lc;else{if(!_.p)throw`hufDecode issues`;for(var v=0;v<_.lit;v++){for(var x=h(e[_.p[v]]);f<x&&i.value<m;)b(d,f,n,i),d=y.c,f=y.lc;if(f>=x&&g(e[_.p[v]])==(d>>f-x&(1<<x)-1)){f-=x,C(_.p[v],s,d,f,n,r,i,l,u,p),d=S.c,f=S.lc;break}}if(v==_.lit)throw`hufDecode issues`}}var w=8-o&7;for(d>>=w,f-=w;f>0;){var _=t[d<<14-f&a];if(_.len)f-=_.len,C(_.lit,s,d,f,n,r,i,l,u,p),d=S.c,f=S.lc;else throw`hufDecode issues`}return!0}function N(e,t,n,a,o,s){var c={value:0},u=n.value,d=z(t,n),f=z(t,n);n.value+=4;var p=z(t,n);if(n.value+=4,d<0||d>=r||f<0||f>=r)throw`Something wrong with HUF_ENCSIZE`;var h=Array(r),g=Array(i);if(l(g),m(e,t,n,a-(n.value-u),d,f,h),p>8*(a-(n.value-u)))throw`Something wrong with hufUncompress`;v(h,d,f,g),M(h,g,e,t,n,p,f,s,o,c)}function ee(e,t,n){for(var r=0;r<n;++r)t[r]=e[t[r]]}function P(e){for(var t=1;t<e.length;t++){var n=e[t-1]+e[t]-128;e[t]=n}}function F(e,t){for(var n=0,r=Math.floor((e.length+1)/2),i=0,a=e.length-1;!(i>a||(t[i++]=e[n++],i>a));)t[i++]=e[r++]}function te(e){for(var t=e.byteLength,n=[],r=0,i=new DataView(e);t>0;){var a=i.getInt8(r++);if(a<0){var o=-a;t-=o+1;for(var s=0;s<o;s++)n.push(i.getUint8(r++))}else{var o=a;t-=2;for(var c=i.getUint8(r++),s=0;s<o+1;s++)n.push(c)}}return n}function ne(e,t,n,r,i,a){var o=new DataView(a.buffer),s=n[e.idx[0]].width,c=n[e.idx[0]].height,l=3,u=Math.floor(s/8),d=Math.ceil(s/8),f=Math.ceil(c/8),p=s-(d-1)*8,m=c-(f-1)*8,h={value:0},g=Array(l),_=Array(l),v=Array(l),y=Array(l),b=Array(l);for(let n=0;n<l;++n)b[n]=t[e.idx[n]],g[n]=n<1?0:g[n-1]+d*f,_[n]=new Float32Array(64),v[n]=new Uint16Array(64),y[n]=new Uint16Array(d*64);for(let t=0;t<f;++t){var x=8;t==f-1&&(x=m);var S=8;for(let e=0;e<d;++e){e==d-1&&(S=p);for(let e=0;e<l;++e)v[e].fill(0),v[e][0]=i[g[e]++],re(h,r,v[e]),ie(v[e],_[e]),ae(_[e]);oe(_);for(let t=0;t<l;++t)I(_[t],y[t],e*64)}let a=0;for(let r=0;r<l;++r){let i=n[e.idx[r]].type;for(let e=8*t;e<8*t+x;++e){a=b[r][e];for(let t=0;t<u;++t){let n=t*64+(e&7)*8;o.setUint16(a+0*i,y[r][n+0],!0),o.setUint16(a+2*i,y[r][n+1],!0),o.setUint16(a+4*i,y[r][n+2],!0),o.setUint16(a+6*i,y[r][n+3],!0),o.setUint16(a+8*i,y[r][n+4],!0),o.setUint16(a+10*i,y[r][n+5],!0),o.setUint16(a+12*i,y[r][n+6],!0),o.setUint16(a+14*i,y[r][n+7],!0),a+=16*i}}if(u!=d)for(let e=8*t;e<8*t+x;++e){let t=b[r][e]+8*u*2*i,n=u*64+(e&7)*8;for(let e=0;e<S;++e)o.setUint16(t+e*2*i,y[r][n+e],!0)}}}for(var C=new Uint16Array(s),o=new DataView(a.buffer),w=0;w<l;++w){n[e.idx[w]].decoded=!0;var T=n[e.idx[w]].type;if(n[w].type==2)for(var E=0;E<c;++E){let e=b[w][E];for(var D=0;D<s;++D)C[D]=o.getUint16(e+D*2*T,!0);for(var D=0;D<s;++D)o.setFloat32(e+D*2*T,H(C[D]),!0)}}}function re(e,t,n){for(var r,i=1;i<64;)r=t[e.value],r==65280?i=64:r>>8==255?i+=r&255:(n[i]=r,i++),e.value++}function ie(e,t){t[0]=H(e[0]),t[1]=H(e[1]),t[2]=H(e[5]),t[3]=H(e[6]),t[4]=H(e[14]),t[5]=H(e[15]),t[6]=H(e[27]),t[7]=H(e[28]),t[8]=H(e[2]),t[9]=H(e[4]),t[10]=H(e[7]),t[11]=H(e[13]),t[12]=H(e[16]),t[13]=H(e[26]),t[14]=H(e[29]),t[15]=H(e[42]),t[16]=H(e[3]),t[17]=H(e[8]),t[18]=H(e[12]),t[19]=H(e[17]),t[20]=H(e[25]),t[21]=H(e[30]),t[22]=H(e[41]),t[23]=H(e[43]),t[24]=H(e[9]),t[25]=H(e[11]),t[26]=H(e[18]),t[27]=H(e[24]),t[28]=H(e[31]),t[29]=H(e[40]),t[30]=H(e[44]),t[31]=H(e[53]),t[32]=H(e[10]),t[33]=H(e[19]),t[34]=H(e[23]),t[35]=H(e[32]),t[36]=H(e[39]),t[37]=H(e[45]),t[38]=H(e[52]),t[39]=H(e[54]),t[40]=H(e[20]),t[41]=H(e[22]),t[42]=H(e[33]),t[43]=H(e[38]),t[44]=H(e[46]),t[45]=H(e[51]),t[46]=H(e[55]),t[47]=H(e[60]),t[48]=H(e[21]),t[49]=H(e[34]),t[50]=H(e[37]),t[51]=H(e[47]),t[52]=H(e[50]),t[53]=H(e[56]),t[54]=H(e[59]),t[55]=H(e[61]),t[56]=H(e[35]),t[57]=H(e[36]),t[58]=H(e[48]),t[59]=H(e[49]),t[60]=H(e[57]),t[61]=H(e[58]),t[62]=H(e[62]),t[63]=H(e[63])}function ae(e){let t=.5*Math.cos(3.14159/4),n=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),i=.5*Math.cos(3*3.14159/16),a=.5*Math.cos(15.70795/16),o=.5*Math.cos(3*3.14159/8),s=.5*Math.cos(21.99113/16);for(var c=[,,,,],l=[,,,,],u=[,,,,],d=[,,,,],f=0;f<8;++f){var p=f*8;c[0]=r*e[p+2],c[1]=o*e[p+2],c[2]=r*e[p+6],c[3]=o*e[p+6],l[0]=n*e[p+1]+i*e[p+3]+a*e[p+5]+s*e[p+7],l[1]=i*e[p+1]-s*e[p+3]-n*e[p+5]-a*e[p+7],l[2]=a*e[p+1]-n*e[p+3]+s*e[p+5]+i*e[p+7],l[3]=s*e[p+1]-a*e[p+3]+i*e[p+5]-n*e[p+7],u[0]=t*(e[p+0]+e[p+4]),u[3]=t*(e[p+0]-e[p+4]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[p+0]=d[0]+l[0],e[p+1]=d[1]+l[1],e[p+2]=d[2]+l[2],e[p+3]=d[3]+l[3],e[p+4]=d[3]-l[3],e[p+5]=d[2]-l[2],e[p+6]=d[1]-l[1],e[p+7]=d[0]-l[0]}for(var m=0;m<8;++m)c[0]=r*e[16+m],c[1]=o*e[16+m],c[2]=r*e[48+m],c[3]=o*e[48+m],l[0]=n*e[8+m]+i*e[24+m]+a*e[40+m]+s*e[56+m],l[1]=i*e[8+m]-s*e[24+m]-n*e[40+m]-a*e[56+m],l[2]=a*e[8+m]-n*e[24+m]+s*e[40+m]+i*e[56+m],l[3]=s*e[8+m]-a*e[24+m]+i*e[40+m]-n*e[56+m],u[0]=t*(e[m]+e[32+m]),u[3]=t*(e[m]-e[32+m]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[0+m]=d[0]+l[0],e[8+m]=d[1]+l[1],e[16+m]=d[2]+l[2],e[24+m]=d[3]+l[3],e[32+m]=d[3]-l[3],e[40+m]=d[2]-l[2],e[48+m]=d[1]-l[1],e[56+m]=d[0]-l[0]}function oe(e){for(var t=0;t<64;++t){var n=e[0][t],r=e[1][t],i=e[2][t];e[0][t]=n+1.5747*i,e[1][t]=n-.1873*r-.4682*i,e[2][t]=n+1.8556*r}}function I(e,t,n){for(var r=0;r<64;++r)t[n+r]=x.toHalfFloat(se(e[r]))}function se(e){return e<=1?Math.sign(e)*Math.abs(e)**2.2:Math.sign(e)*s**(Math.abs(e)-1)}function ce(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function L(e){var t=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),n=new Uint8Array(te(t)),r=new Uint8Array(n.length);return P(n),F(n,r),new DataView(r.buffer)}function le(e){var t=vt(e.array.slice(e.offset.value,e.offset.value+e.size)),n=new Uint8Array(t.length);return P(t),F(t,n),new DataView(n.buffer)}function ue(e){for(var r=e.viewer,i={value:e.offset.value},a=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),o=new Uint8Array(n),s=0,l=Array(e.channels),u=0;u<e.channels;u++)l[u]={},l[u].start=s,l[u].end=l[u].start,l[u].nx=e.width,l[u].ny=e.lines,l[u].size=e.type,s+=l[u].nx*l[u].ny*l[u].size;var d=be(r,i),f=be(r,i);if(f>=n)throw`Something is wrong with PIZ_COMPRESSION BITMAP_SIZE`;if(d<=f)for(var u=0;u<f-d+1;u++)o[u+d]=ve(r,i);var p=new Uint16Array(t),m=c(o,p),h=z(r,i);N(e.array,r,i,h,a,s);for(var u=0;u<e.channels;++u)for(var g=l[u],_=0;_<l[u].size;++_)j(a,g.start+_,g.nx,g.size,g.ny,g.nx*g.size,m);ee(p,a,s);for(var v=0,y=new Uint8Array(a.buffer.byteLength),b=0;b<e.lines;b++)for(var x=0;x<e.channels;x++){var g=l[x],S=g.nx*g.size,C=new Uint8Array(a.buffer,g.end*2,S*2);y.set(C,v),v+=S*2,g.end+=S}return new DataView(y.buffer)}function de(e){var t=vt(e.array.slice(e.offset.value,e.offset.value+e.size));let n=e.lines*e.channels*e.width,r=e.type==1?new Uint16Array(n):new Uint32Array(n),i=0,a=0,o=[,,,,];for(let n=0;n<e.lines;n++)for(let n=0;n<e.channels;n++){let n=0;switch(e.type){case 1:o[0]=i,o[1]=o[0]+e.width,i=o[1]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<8|t[o[1]++];n+=e,r[a]=n,a++}break;case 2:o[0]=i,o[1]=o[0]+e.width,o[2]=o[1]+e.width,i=o[2]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<24|t[o[1]++]<<16|t[o[2]++]<<8;n+=e,r[a]=n,a++}}}return new DataView(r.buffer)}function fe(e){var t=e.viewer,n={value:e.offset.value},r=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:B(t,n),unknownUncompressedSize:B(t,n),unknownCompressedSize:B(t,n),acCompressedSize:B(t,n),dcCompressedSize:B(t,n),rleCompressedSize:B(t,n),rleUncompressedSize:B(t,n),rleRawSize:B(t,n),totalAcUncompressedCount:B(t,n),totalDcUncompressedCount:B(t,n),acCompression:B(t,n)};if(i.version<2)throw`EXRLoader.parse: `+G.compression+` version `+i.version+` is unsupported`;for(var a=[],o=be(t,n)-2;o>0;){var s=pe(t.buffer,n),c=ve(t,n),l=c>>2&3,u=(c>>4)-1,d=new Int8Array([u])[0],f=ve(t,n);a.push({name:s,index:d,type:f,compression:l}),o-=s.length+3}for(var p=G.channels,m=Array(e.channels),h=0;h<e.channels;++h){var g=m[h]={},_=p[h];g.name=_.name,g.compression=0,g.decoded=!1,g.type=_.pixelType,g.pLinear=_.pLinear,g.width=e.width,g.height=e.lines}for(var v={idx:[,,,]},y=0;y<e.channels;++y)for(var g=m[y],h=0;h<a.length;++h){var b=a[h];g.name==b.name&&(g.compression=b.compression,b.index>=0&&(v.idx[b.index]=y),g.offset=y)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var x=new Uint16Array(i.totalAcUncompressedCount);N(e.array,t,n,i.acCompressedSize,x,i.totalAcUncompressedCount);break;case 1:var S=e.array.slice(n.value,n.value+i.totalAcUncompressedCount),C=vt(S),x=new Uint16Array(C.buffer);n.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var w={array:e.array,offset:n,size:i.dcCompressedSize},T=new Uint16Array(le(w).buffer);n.value+=i.dcCompressedSize}if(i.rleRawSize>0){var S=e.array.slice(n.value,n.value+i.rleCompressedSize),C=vt(S),E=te(C.buffer);n.value+=i.rleCompressedSize}for(var D=0,O=Array(m.length),h=0;h<O.length;++h)O[h]=[];for(var k=0;k<e.lines;++k)for(var A=0;A<m.length;++A)O[A].push(D),D+=m[A].width*e.type*2;ne(v,O,m,x,T,r);for(var h=0;h<m.length;++h){var g=m[h];if(!g.decoded)switch(g.compression){case 2:for(var j=0,M=0,k=0;k<e.lines;++k){for(var ee=O[h][j],P=0;P<g.width;++P){for(var F=0;F<2*g.type;++F)r[ee++]=E[M+F*g.width*g.height];M++}j++}break;default:throw`EXRLoader.parse: unsupported channel compression`}}return new DataView(r.buffer)}function pe(e,t){for(var n=new Uint8Array(e),r=0;n[t.value+r]!=0;)r+=1;var i=new TextDecoder().decode(n.slice(t.value,t.value+r));return t.value=t.value+r+1,i}function me(e,t,n){var r=new TextDecoder().decode(new Uint8Array(e).slice(t.value,t.value+n));return t.value+=n,r}function R(e,t){return[ge(e,t),z(e,t)]}function he(e,t){return[z(e,t),z(e,t)]}function ge(e,t){var n=e.getInt32(t.value,!0);return t.value+=4,n}function z(e,t){var n=e.getUint32(t.value,!0);return t.value+=4,n}function _e(e,t){var n=e[t.value];return t.value+=1,n}function ve(e,t){var n=e.getUint8(t.value);return t.value+=1,n}let B=function(e,t){let n;return n=`getBigInt64`in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,n};function V(e,t){var n=e.getFloat32(t.value,!0);return t.value+=4,n}function ye(e,t){return x.toHalfFloat(V(e,t))}function H(e){var t=(e&31744)>>10,n=e&1023;return(e>>15?-1:1)*(t?t===31?n?NaN:1/0:2**(t-15)*(1+n/1024):n/1024*6103515625e-14)}function be(e,t){var n=e.getUint16(t.value,!0);return t.value+=2,n}function xe(e,t){return H(be(e,t))}function W(e,t,n,r){for(var i=n.value,a=[];n.value<i+r-1;){var o=pe(t,n),s=ge(e,n),c=ve(e,n);n.value+=3;var l=ge(e,n),u=ge(e,n);a.push({name:o,pixelType:s,pLinear:c,xSampling:l,ySampling:u})}return n.value+=1,a}function Se(e,t){return{redX:V(e,t),redY:V(e,t),greenX:V(e,t),greenY:V(e,t),blueX:V(e,t),blueY:V(e,t),whiteX:V(e,t),whiteY:V(e,t)}}function Ce(e,t){return[`NO_COMPRESSION`,`RLE_COMPRESSION`,`ZIPS_COMPRESSION`,`ZIP_COMPRESSION`,`PIZ_COMPRESSION`,`PXR24_COMPRESSION`,`B44_COMPRESSION`,`B44A_COMPRESSION`,`DWAA_COMPRESSION`,`DWAB_COMPRESSION`][ve(e,t)]}function we(e,t){return{xMin:z(e,t),yMin:z(e,t),xMax:z(e,t),yMax:z(e,t)}}function Te(e,t){return[`INCREASING_Y`][ve(e,t)]}function Ee(e,t){return[V(e,t),V(e,t)]}function De(e,t){return[V(e,t),V(e,t),V(e,t)]}function Oe(e,t,n,r,i){if(r===`string`||r===`stringvector`||r===`iccProfile`)return me(t,n,i);if(r===`chlist`)return W(e,t,n,i);if(r===`chromaticities`)return Se(e,n);if(r===`compression`)return Ce(e,n);if(r===`box2i`)return we(e,n);if(r===`lineOrder`)return Te(e,n);if(r===`float`)return V(e,n);if(r===`v2f`)return Ee(e,n);if(r===`v3f`)return De(e,n);if(r===`int`)return ge(e,n);if(r===`rational`)return R(e,n);if(r===`timecode`)return he(e,n);if(r===`preview`)return n.value+=i,`skipped`;n.value+=i}function ke(e,t,n){let r={};if(e.getUint32(0,!0)!=20000630)throw`THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.`;r.version=e.getUint8(4);let i=e.getUint8(5);r.spec={singleTile:!!(i&2),longName:!!(i&4),deepFormat:!!(i&8),multiPart:!!(i&16)},n.value=8;for(var a=!0;a;){var o=pe(t,n);if(o==0)a=!1;else{var s=pe(t,n),c=Oe(e,t,n,s,z(e,n));c===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`):r[o]=c}}if(i&-5)throw console.error(`EXRHeader:`,r),`THREE.EXRLoader: provided file is currently unsupported.`;return r}function Ae(e,t,n,r,i){let a={size:0,viewer:t,array:n,offset:r,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[Ct?`colorSpace`:`encoding`]:null};switch(e.compression){case`NO_COMPRESSION`:a.lines=1,a.uncompress=ce;break;case`RLE_COMPRESSION`:a.lines=1,a.uncompress=L;break;case`ZIPS_COMPRESSION`:a.lines=1,a.uncompress=le;break;case`ZIP_COMPRESSION`:a.lines=16,a.uncompress=le;break;case`PIZ_COMPRESSION`:a.lines=32,a.uncompress=ue;break;case`PXR24_COMPRESSION`:a.lines=16,a.uncompress=de;break;case`DWAA_COMPRESSION`:a.lines=32,a.uncompress=fe;break;case`DWAB_COMPRESSION`:a.lines=256,a.uncompress=fe;break;default:throw`EXRLoader.parse: `+e.compression+` is unsupported`}if(a.scanlineBlockSize=a.lines,a.type==1)switch(i){case E:a.getter=xe,a.inputSize=2;break;case U:a.getter=be,a.inputSize=2}else if(a.type==2)switch(i){case E:a.getter=V,a.inputSize=4;break;case U:a.getter=ye,a.inputSize=4}else throw`EXRLoader.parse: unsupported pixelType `+a.type+` for `+e.compression+`.`;a.blockCount=(e.dataWindow.yMax+1)/a.scanlineBlockSize;for(var o=0;o<a.blockCount;o++)B(t,r);a.outputChannels=a.channels==3?4:a.channels;let s=a.width*a.height*a.outputChannels;switch(i){case E:a.byteArray=new Float32Array(s),a.channels<a.outputChannels&&a.byteArray.fill(1,0,s);break;case U:a.byteArray=new Uint16Array(s),a.channels<a.outputChannels&&a.byteArray.fill(15360,0,s);break;default:console.error(`THREE.EXRLoader: unsupported type: `,i)}return a.bytesPerLine=a.width*a.inputSize*a.channels,a.format=a.outputChannels==4?O:_,Ct?a.colorSpace=`srgb-linear`:a.encoding=3e3,a}let je=new DataView(e),Me=new Uint8Array(e),Ne={value:0},G=ke(je,e,Ne),K=Ae(G,je,Me,Ne,this.type),Pe={value:0},Fe={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<K.height/K.scanlineBlockSize;e++){let t=z(je,Ne);K.size=z(je,Ne),K.lines=t+K.scanlineBlockSize>K.height?K.height-t:K.scanlineBlockSize;let n=K.size<K.lines*K.bytesPerLine?K.uncompress(K):ce(K);Ne.value+=K.size;for(let t=0;t<K.scanlineBlockSize;t++){let r=t+e*K.scanlineBlockSize;if(r>=K.height)break;for(let e=0;e<K.channels;e++){let i=Fe[G.channels[e].name];for(let a=0;a<K.width;a++){Pe.value=(t*(K.channels*K.width)+e*K.width+a)*K.inputSize;let o=(K.height-1-r)*(K.width*K.outputChannels)+a*K.outputChannels+i;K.byteArray[o]=K.getter(n,Pe)}}}}return{header:G,width:K.width,height:K.height,data:K.byteArray,format:K.format,[Ct?`colorSpace`:`encoding`]:K[Ct?`colorSpace`:`encoding`],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){Ct?e.colorSpace=n.colorSpace:e.encoding=n.encoding,e.minFilter=j,e.magFilter=j,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,n)}return super.load(e,i,n,r)}},Tt=parseInt(`187`.replace(/\D+/g,``)),Et=(e,t,n)=>{let r;switch(e){case se:r=new Uint8ClampedArray(t*n*4);break;case U:r=new Uint16Array(t*n*4);break;case A:r=new Uint32Array(t*n*4);break;case le:r=new Int8Array(t*n*4);break;case V:r=new Int16Array(t*n*4);break;case H:r=new Int32Array(t*n*4);break;case E:r=new Float32Array(t*n*4);break;default:throw Error(`Unsupported data type`)}return r},Dt,Ot=(e,t,n,r)=>{if(Dt!==void 0)return Dt;let a=new i(1,1,r);t.setRenderTarget(a);let o=new h(new b,new de({color:16777215}));t.render(o,n),t.setRenderTarget(null);let s=Et(e,a.width,a.height);return t.readRenderTargetPixels(a,0,0,a.width,a.height,s),a.dispose(),o.geometry.dispose(),o.material.dispose(),Dt=s[0]!==0,Dt},kt=class e{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(t){this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;let n={format:O,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:t.renderTargetOptions?.anisotropy===void 0?1:t.renderTargetOptions?.anisotropy,generateMipmaps:t.renderTargetOptions?.generateMipmaps!==void 0&&t.renderTargetOptions?.generateMipmaps,magFilter:t.renderTargetOptions?.magFilter===void 0?j:t.renderTargetOptions?.magFilter,minFilter:t.renderTargetOptions?.minFilter===void 0?j:t.renderTargetOptions?.minFilter,samples:t.renderTargetOptions?.samples===void 0?void 0:t.renderTargetOptions?.samples,wrapS:t.renderTargetOptions?.wrapS===void 0?a:t.renderTargetOptions?.wrapS,wrapT:t.renderTargetOptions?.wrapT===void 0?a:t.renderTargetOptions?.wrapT};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=e.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new xe,this._camera=new r,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!Ot(this._type,this._renderer,this._camera,n)){let e;switch(this._type){case U:e=this._renderer.extensions.has(`EXT_color_buffer_float`)?E:void 0}e===void 0?(this._supportsReadPixels=!1,console.warn(`This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown`)):(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${E}`),this._type=e)}this._quad=new h(new b,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new i(this.width,this.height,n),this._renderTarget.texture.mapping=t.renderTargetOptions?.mapping===void 0?300:t.renderTargetOptions?.mapping}static instantiateRenderer(){let e=new De;return e.setSize(128,128),e}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw Error(`Can't read pixels in this browser`);let e=Et(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){let t=new je(this.toArray(),this.width,this.height,O,this._type,e?.mapping||300,e?.wrapS||1001,e?.wrapT||1001,e?.magFilter||1006,e?.minFilter||1006,e?.anisotropy||1,Oe);return t.generateMipmaps=e?.generateMipmaps!==void 0&&e?.generateMipmaps,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof R&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof Se&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof Se&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}},At=`urn:iso:std:iso:ts:21496:-1\0`,jt=128,Mt=8,Nt=4,Pt=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,r=()=>{let e=t.getUint16(n);return n+=2,e},i=()=>{let e=t.getUint32(n);return n+=4,e},a=()=>{let e=t.getInt32(n);return n+=4,e},o=r();if(o!==0)throw Error(`Unsupported ISO 21496-1 minimum_version ${o}`);r();let s=t.getUint8(n++);if(s&Nt)throw Error(`ISO 21496-1 metadata with HDR base image is not supported`);let c=s&jt?3:1,l=s&Mt?i():void 0,u=e=>{let t=e?a():i(),n=l??i();if(n===0)throw Error(`Invalid ISO 21496-1 fraction with zero denominator`);return t/n},d=u(!1),f=u(!1);if(d>f)throw Error(`ISO 21496-1 metadata with HDR base image is not supported`);let p=[],m=[],h=[],g=[],_=[];for(let e=0;e<c;e++)p.push(u(!0)),m.push(u(!0)),h.push(u(!1)),g.push(u(!0)),_.push(u(!0));let v=e=>c===3?e:[e[0],e[0],e[0]];return{gainMapMin:v(p),gainMapMax:v(m),gamma:v(h),offsetSdr:v(g),offsetHdr:v(_),hdrCapacityMin:d,hdrCapacityMax:f}},Ft=class extends Error{},It=class extends Error{},Lt=Array.from(At,e=>e.charCodeAt(0)),Rt=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=4+Lt.length;for(let r=0;r+n<e.length;r++){if(e[r]!==255||e[r+1]!==226||!Lt.every((t,n)=>e[r+4+n]===t))continue;let i=Math.min(e.length,r+2+t.getUint16(r+2));if(!(i-(r+n)<=4))try{return Pt(e.subarray(r+n,i))}catch{return}}},zt=(e,t,n)=>{let r=RegExp(`${t}="([^"]*)"`,`i`).exec(e);if(r)return r[1];let i=RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,`i`).exec(e);if(i){let e=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return e&&e.length===3?e.map(e=>e.replace(/<\/?rdf:li>/g,``)):i[1].trim()}if(n!==void 0)return n;throw Error(`Can't find ${t} in gainmap metadata`)},Bt=e=>{let t;t=typeof TextDecoder<`u`?new TextDecoder().decode(e):e.toString();let n=t.indexOf(`<x:xmpmeta`);for(;n!==-1;){let e=t.indexOf(`x:xmpmeta>`,n),r=t.slice(n,e+10);try{let e=zt(r,`hdrgm:GainMapMin`,`0`),t=zt(r,`hdrgm:GainMapMax`),n=zt(r,`hdrgm:Gamma`,`1`),i=zt(r,`hdrgm:OffsetSDR`,`0.015625`),a=zt(r,`hdrgm:OffsetHDR`,`0.015625`),o=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(r),s=o?o[1]:`0`,c=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(r);if(!c)throw Error(`Incomplete gainmap metadata`);let l=c[1];return{gainMapMin:Array.isArray(e)?e.map(e=>parseFloat(e)):[parseFloat(e),parseFloat(e),parseFloat(e)],gainMapMax:Array.isArray(t)?t.map(e=>parseFloat(e)):[parseFloat(t),parseFloat(t),parseFloat(t)],gamma:Array.isArray(n)?n.map(e=>parseFloat(e)):[parseFloat(n),parseFloat(n),parseFloat(n)],offsetSdr:Array.isArray(i)?i.map(e=>parseFloat(e)):[parseFloat(i),parseFloat(i),parseFloat(i)],offsetHdr:Array.isArray(a)?a.map(e=>parseFloat(e)):[parseFloat(a),parseFloat(a),parseFloat(a)],hdrCapacityMin:parseFloat(s),hdrCapacityMax:parseFloat(l)}}catch{}n=t.indexOf(`<x:xmpmeta`,e)}},Vt=class{options;constructor(e){this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,n)=>{let r=this.options.debug,i=new DataView(e.buffer);if(i.getUint16(0)!==65496){n(Error(`Not a valid jpeg`));return}let a=i.byteLength,o=2,s=0,c;for(;o<a;){if(++s>250){n(Error(`Found no marker after ${s} loops 😵`));return}if(i.getUint8(o)!==255){n(Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${i.getUint8(o).toString(16)}`));return}if(c=i.getUint8(o+1),r&&console.log(`Marker: ${c.toString(16)}`),c===226){r&&console.log(`Found APP2 marker (0xffe2)`);let e=o+4;if(i.getUint32(e)===1297106432){let r=e+4,a;if(i.getUint16(r)===18761)a=!1;else if(i.getUint16(r)===19789)a=!0;else{n(Error(`No valid endianness marker found in TIFF header`));return}if(i.getUint16(r+2,!a)!==42){n(Error(`Not valid TIFF data! (no 0x002A marker)`));return}let o=i.getUint32(r+4,!a);if(o<8){n(Error(`Not valid TIFF data! (First offset less than 8)`));return}let s=r+o,c=i.getUint16(s,!a),l=s+2,u=0;for(let e=l;e<l+12*c;e+=12)i.getUint16(e,!a)===45057&&(u=i.getUint32(e+8,!a));let d=s+2+c*12+4,f=[];for(let e=d;e<d+u*16;e+=16){let t={MPType:i.getUint32(e,!a),size:i.getUint32(e+4,!a),dataOffset:i.getUint32(e+8,!a),dependantImages:i.getUint32(e+12,!a),start:-1,end:-1,isFII:!1};t.dataOffset?(t.start=r+t.dataOffset,t.isFII=!1):(t.start=0,t.isFII=!0),t.end=t.start+t.size,f.push(t)}if(this.options.extractNonFII&&f.length){let e=new Blob([i]),n=[];for(let t of f){if(t.isFII&&!this.options.extractFII)continue;let r=e.slice(t.start,t.end+1,`image/jpeg`);n.push(r)}t(n)}}}o+=2+i.getUint16(o+2)}})}},Ht=async e=>{let t=Rt(e)??Bt(e);if(!t)throw new It(`Gain map XMP metadata not found`);let n=await new Vt({extractFII:!0,extractNonFII:!0}).extract(e);if(n.length!==2)throw new Ft(`Gain map recovery image not found`);return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:t}},Ut=e=>new Promise((t,n)=>{let r=document.createElement(`img`);r.onload=()=>{t(r)},r.onerror=e=>{n(e)},r.src=URL.createObjectURL(e)}),Wt=async(e,t,n)=>{let r=t?new Blob([t],{type:`image/jpeg`}):void 0,i=new Blob([e],{type:`image/jpeg`}),a,o,s=!1;if(typeof createImageBitmap>`u`){let e=await Promise.all([r?Ut(r):Promise.resolve(void 0),Ut(i)]);o=e[0],a=e[1],s=n===`flipY`}else{let e=await Promise.all([r?createImageBitmap(r,{imageOrientation:n||`flipY`}):Promise.resolve(void 0),createImageBitmap(i,{imageOrientation:n||`flipY`})]);o=e[0],a=e[1]}return{sdrImage:a,gainMapImage:o,needsFlip:s}},Gt=(e,t,n)=>{let r=new Se(t||new ImageData(2,2),300,a,a,j,we,O,se,1,Oe);r.flipY=n,r.needsUpdate=!0;let i=new Se(e,300,a,a,j,we,O,se,1,re);return i.flipY=n,i.needsUpdate=!0,{gainMap:r,sdr:i}},Kt=class extends y{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(e,t){super(t),this._config=e,e.renderer&&(this._renderer=e.renderer),this._internalLoadingManager=new Ee}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn(`WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.`);let e=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new Se,sdr:new Se});return this._config.createQuadRenderer({width:16,height:16,type:U,colorSpace:Oe,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}processImages(e,t,n){return Wt(e,t,n)}createTextures(e,t,n){return Gt(e,t,n)}updateQuadRenderer(e,t,n,r,i){e.width=t.width,e.height=t.height,e.material.gainMap=n,e.material.sdr=r,e.material.gainMapMin=i.gainMapMin,e.material.gainMapMax=i.gainMapMax,e.material.offsetHdr=i.offsetHdr,e.material.offsetSdr=i.offsetSdr,e.material.gamma=i.gamma,e.material.hdrCapacityMin=i.hdrCapacityMin,e.material.hdrCapacityMax=i.hdrCapacityMax,e.material.maxDisplayBoost=2**i.hdrCapacityMax,e.material.needsUpdate=!0}},qt=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Jt=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`,Yt=class extends R{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:e,offsetHdr:t,offsetSdr:n,gainMapMin:r,gainMapMax:i,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:s,sdr:c,gainMap:l}){super({name:`GainMapDecoderMaterial`,vertexShader:qt,fragmentShader:Jt,uniforms:{sdr:{value:c},gainMap:{value:l},gamma:{value:new P(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new P().fromArray(t)},offsetSdr:{value:new P().fromArray(n)},gainMapMin:{value:new P().fromArray(r)},gainMapMax:{value:new P().fromArray(i)},weightFactor:{value:(Math.log2(a)-o)/(s-o)}},blending:0,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=s,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){let e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){let t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){let e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}},Xt=class extends Kt{constructor(e,t){super({renderer:e,createMaterial:e=>new Yt(e),createQuadRenderer:e=>new kt(e)},t)}async render(e,t,n,r){let{sdrImage:i,gainMapImage:a,needsFlip:o}=await this.processImages(n,r,`flipY`),{gainMap:s,sdr:c}=this.createTextures(i,a,o);this.updateQuadRenderer(e,i,s,c,t),e.render()}},Zt=class extends Xt{load([e,t,n],r,i,a){let o=this.prepareQuadRenderer(),s,c,l,u=async()=>{if(s&&c&&l){try{await this.render(o,l,s,c)}catch(r){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(n),typeof a==`function`&&a(r),o.disposeOnDemandRenderer();return}typeof r==`function`&&r(o),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(n),o.disposeOnDemandRenderer()}},d=!0,f=0,p=0,m=!0,h=0,g=0,_=!0,v=0,y=0,b=()=>{if(typeof i==`function`){let e=f+h+v,t=p+g+y;i(new ProgressEvent(`progress`,{lengthComputable:d&&m&&_,loaded:t,total:e}))}};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(n);let x=new w(this._internalLoadingManager);x.setResponseType(`arraybuffer`),x.setRequestHeader(this.requestHeader),x.setPath(this.path),x.setWithCredentials(this.withCredentials),x.load(e,async e=>{if(typeof e==`string`)throw Error(`Invalid sdr buffer`);s=e,await u()},e=>{d=e.lengthComputable,p=e.loaded,f=e.total,b()},t=>{this.manager.itemError(e),typeof a==`function`&&a(t)});let S=new w(this._internalLoadingManager);S.setResponseType(`arraybuffer`),S.setRequestHeader(this.requestHeader),S.setPath(this.path),S.setWithCredentials(this.withCredentials),S.load(t,async e=>{if(typeof e==`string`)throw Error(`Invalid gainmap buffer`);c=e,await u()},e=>{m=e.lengthComputable,g=e.loaded,h=e.total,b()},e=>{this.manager.itemError(t),typeof a==`function`&&a(e)});let C=new w(this._internalLoadingManager);return C.setRequestHeader(this.requestHeader),C.setPath(this.path),C.setWithCredentials(this.withCredentials),C.load(n,async e=>{if(typeof e!=`string`)throw Error(`Invalid metadata string`);l=JSON.parse(e),await u()},e=>{_=e.lengthComputable,y=e.loaded,v=e.total,b()},e=>{this.manager.itemError(n),typeof a==`function`&&a(e)}),o}},Qt=class extends Xt{load(e,t,n,r){let i=this.prepareQuadRenderer(),a=new w(this._internalLoadingManager);return a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async n=>{if(typeof n==`string`)throw Error(`Invalid buffer, received [string], was expecting [ArrayBuffer]`);let a=new Uint8Array(n),o,s,c;try{let e=await Ht(a);o=e.sdr,s=e.gainMap,c=e.metadata}catch(t){if(t instanceof It||t instanceof Ft)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),c={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},o=a;else throw t}try{await this.render(i,c,o.buffer,s?.buffer)}catch(t){this.manager.itemError(e),typeof r==`function`&&r(t),i.disposeOnDemandRenderer();return}typeof t==`function`&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},n,t=>{this.manager.itemError(e),typeof r==`function`&&r(t)}),i}},$t={apartment:`lebombo_1k.hdr`,city:`potsdamer_platz_1k.hdr`,dawn:`kiara_1_dawn_1k.hdr`,forest:`forest_slope_1k.hdr`,lobby:`st_fagans_interior_1k.hdr`,night:`dikhololo_night_1k.hdr`,park:`rooitou_park_1k.hdr`,studio:`studio_small_03_1k.hdr`,sunset:`venice_sunset_1k.hdr`,warehouse:`empty_warehouse_01_1k.hdr`},en=`https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/`,tn=e=>Array.isArray(e),nn=[`/px.png`,`/nx.png`,`/py.png`,`/ny.png`,`/pz.png`,`/nz.png`];function rn({files:e=nn,path:t=``,preset:n=void 0,colorSpace:r=void 0,extensions:i}={}){n&&(sn(n),e=$t[n],t=en);let a=tn(e),{extension:o,isCubemap:s}=cn(e),c=ln(o);if(!c)throw Error(`useEnvironment: Unrecognized file extension: `+e);let l=I(e=>e.gl);(0,J.useLayoutEffect)(()=>{if(o!==`webp`&&o!==`jpg`&&o!==`jpeg`)return;function t(){_e.clear(c,a?[e]:e)}l.domElement.addEventListener(`webglcontextlost`,t,{once:!0})},[e,l.domElement]);let u=_e(c,a?[e]:e,e=>{(o===`webp`||o===`jpg`||o===`jpeg`)&&e.setRenderer(l),e.setPath==null||e.setPath(t),i&&i(e)}),d=a?u[0]:u;return(o===`jpg`||o===`jpeg`||o===`webp`)&&(d=d.renderTarget?.texture),d.mapping=s?301:303,d.colorSpace=r??(s?`srgb`:`srgb-linear`),d}var an={files:nn,path:``,preset:void 0,extensions:void 0};rn.preload=e=>{let t={...an,...e},{files:n,path:r=``}=t,{preset:i,extensions:a}=t;i&&(sn(i),n=$t[i],r=en);let{extension:o}=cn(n);if(o===`webp`||o===`jpg`||o===`jpeg`)throw Error(`useEnvironment: Preloading gainmaps is not supported`);let s=ln(o);if(!s)throw Error(`useEnvironment: Unrecognized file extension: `+n);_e.preload(s,tn(n)?[n]:n,e=>{e.setPath==null||e.setPath(r),a&&a(e)})};var on={files:nn,preset:void 0};rn.clear=e=>{let t={...on,...e},{files:n}=t,{preset:r}=t;r&&(sn(r),n=$t[r]);let{extension:i}=cn(n),a=ln(i);if(!a)throw Error(`useEnvironment: Unrecognized file extension: `+n);_e.clear(a,tn(n)?[n]:n)};function sn(e){if(!(e in $t))throw Error(`Preset must be one of: `+Object.keys($t).join(`, `))}function cn(e){var t;let n=tn(e)&&e.length===6,r=tn(e)&&e.length===3&&e.some(e=>e.endsWith(`json`)),i=tn(e)?e[0]:e;return{extension:n?`cube`:r?`webp`:i.startsWith(`data:application/exr`)?`exr`:i.startsWith(`data:application/hdr`)?`hdr`:i.startsWith(`data:image/jpeg`)?`jpg`:(t=i.split(`.`).pop())==null||(t=t.split(`?`))==null||(t=t.shift())==null?void 0:t.toLowerCase(),isCubemap:n,isGainmap:r}}function ln(e){return e===`cube`?f:e===`hdr`?St:e===`exr`?wt:e===`jpg`||e===`jpeg`?Qt:e===`webp`?Zt:null}var un=e=>e.current&&e.current.isScene,dn=e=>un(e)?e.current:e;function fn(e,t,n,r,i={}){var a,o;i={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...i};let s=dn(t||n),c=s.background,l=s.environment,u={backgroundBlurriness:s.backgroundBlurriness,backgroundIntensity:s.backgroundIntensity,backgroundRotation:((a=s.backgroundRotation)==null||a.clone==null?void 0:a.clone())??[0,0,0],environmentIntensity:s.environmentIntensity,environmentRotation:((o=s.environmentRotation)==null||o.clone==null?void 0:o.clone())??[0,0,0]};return e!==`only`&&(s.environment=r),e&&(s.background=r),B(s,i),()=>{e!==`only`&&(s.environment=l),e&&(s.background=c),B(s,u)}}function pn({scene:e,background:t=!1,map:n,...r}){let i=I(e=>e.scene);return J.useLayoutEffect(()=>{if(n)return fn(t,e,i,n,r)}),null}function mn({background:e=!1,scene:t,blur:n,backgroundBlurriness:r,backgroundIntensity:i,backgroundRotation:a,environmentIntensity:o,environmentRotation:s,...c}){let l=rn(c),u=I(e=>e.scene);return J.useLayoutEffect(()=>fn(e,t,u,l,{backgroundBlurriness:n??r,backgroundIntensity:i,backgroundRotation:a,environmentIntensity:o,environmentRotation:s})),J.useEffect(()=>()=>{l.dispose()},[l]),null}function hn({children:e,near:t=.1,far:n=1e3,resolution:r=256,frames:i=1,map:a,background:o=!1,blur:s,backgroundBlurriness:c,backgroundIntensity:l,backgroundRotation:u,environmentIntensity:d,environmentRotation:f,scene:p,files:m,path:h,preset:g=void 0,extensions:_}){let v=I(e=>e.gl),y=I(e=>e.scene),b=J.useRef(null),[x]=J.useState(()=>new xe),S=J.useMemo(()=>{let e=new ee(r);return e.texture.type=U,e},[r]);J.useEffect(()=>()=>{S.dispose()},[S]),J.useLayoutEffect(()=>{if(i===1){let e=v.autoClear;v.autoClear=!0,b.current.update(v,x),v.autoClear=e}return fn(o,p,y,S.texture,{backgroundBlurriness:s??c,backgroundIntensity:l,backgroundRotation:u,environmentIntensity:d,environmentRotation:f})},[e,x,S.texture,p,y,o,i,v]);let C=1;return W(()=>{if(i===1/0||C<i){let e=v.autoClear;v.autoClear=!0,b.current.update(v,x),v.autoClear=e,C++}}),J.createElement(J.Fragment,null,M(J.createElement(J.Fragment,null,e,J.createElement(`cubeCamera`,{ref:b,args:[t,n,S]}),m||g?J.createElement(mn,{background:!0,files:m,preset:g,path:h,extensions:_}):a?J.createElement(pn,{background:!0,map:a,extensions:_}):null),x))}function gn(e){let t=rn(e),n=e.map||t;J.useMemo(()=>ye({GroundProjectedEnvImpl:xt}),[]),J.useEffect(()=>()=>{t.dispose()},[t]);let r=J.useMemo(()=>[n],[n]),i=e.ground?.height,a=e.ground?.radius,o=e.ground?.scale??1e3;return J.createElement(J.Fragment,null,J.createElement(pn,Ke({},e,{map:n})),J.createElement(`groundProjectedEnvImpl`,{args:r,scale:o,height:i,radius:a}))}function _n(e){return e.ground?J.createElement(gn,e):e.map?J.createElement(pn,e):e.children?J.createElement(hn,e):J.createElement(mn,e)}var vn=class extends R{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${Tt>=154?`colorspace_fragment`:`encodings_fragment`}>
      }`})}},yn=e=>new P().setFromSpherical(new te(e,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),bn=J.forwardRef(({radius:e=100,depth:t=50,count:n=5e3,saturation:r=0,factor:i=4,fade:a=!1,speed:o=1},s)=>{let c=J.useRef(null),[u,d,f]=J.useMemo(()=>{let a=[],o=[],s=Array.from({length:n},()=>(.5+.5*Math.random())*i),c=new l,u=e+t,d=t/n;for(let e=0;e<n;e++)u-=d*Math.random(),a.push(...yn(u).toArray()),c.setHSL(e/n,r,.9),o.push(c.r,c.g,c.b);return[new Float32Array(a),new Float32Array(o),new Float32Array(s)]},[n,t,i,e,r]);W(e=>c.current&&(c.current.uniforms.time.value=e.clock.elapsedTime*o));let[p]=J.useState(()=>new vn);return J.createElement(`points`,{ref:s},J.createElement(`bufferGeometry`,null,J.createElement(`bufferAttribute`,{attach:`attributes-position`,args:[u,3]}),J.createElement(`bufferAttribute`,{attach:`attributes-color`,args:[d,3]}),J.createElement(`bufferAttribute`,{attach:`attributes-size`,args:[f,1]})),J.createElement(`primitive`,{ref:c,object:p,attach:`material`,blending:2,"uniforms-fade-value":a,depthWrite:!1,transparent:!0,vertexColors:!0}))});function xn({pixelated:e}){let t=I(e=>e.gl),n=I(e=>e.internal.active),r=I(e=>e.performance.current),i=I(e=>e.viewport.initialDpr),a=I(e=>e.setDpr);return J.useEffect(()=>{let r=t.domElement;return()=>{n&&a(i),e&&r&&(r.style.imageRendering=`auto`)}},[]),J.useEffect(()=>{a(r*i),e&&t.domElement&&(t.domElement.style.imageRendering=r===1?`auto`:`pixelated`)},[r]),null}var Sn=(0,J.createContext)(null);function Cn({iterations:e=10,ms:t=250,threshold:n=.75,step:r=.1,factor:i=.5,flipflops:a=1/0,bounds:o=e=>e>100?[60,100]:[40,60],onIncline:s,onDecline:c,onChange:l,onFallback:u,children:d}){let[f,p]=(0,J.useState)(()=>({fps:0,index:0,factor:i,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{let t=Symbol();return f.subscriptions.set(t,e.current),()=>void f.subscriptions.delete(t)}})),m=0;return W(()=>{let{frames:i,averages:d}=f;if(!f.fallback&&d.length<e){i.push(performance.now());let p=i[i.length-1]-i[0];if(p>=t){if(f.fps=Math.round(i.length/p*1e3*1)/1,f.refreshrate=Math.max(f.refreshrate,f.fps),d[f.index++%e]=f.fps,d.length===e){let[t,i]=o(f.refreshrate),p=d.filter(e=>e>=i),h=d.filter(e=>e<t);p.length>e*n&&(f.factor=Math.min(1,f.factor+r),f.flipped++,s&&s(f),f.subscriptions.forEach(e=>e.onIncline&&e.onIncline(f))),h.length>e*n&&(f.factor=Math.max(0,f.factor-r),f.flipped++,c&&c(f),f.subscriptions.forEach(e=>e.onDecline&&e.onDecline(f))),m!==f.factor&&(m=f.factor,l&&l(f),f.subscriptions.forEach(e=>e.onChange&&e.onChange(f))),f.flipped>a&&!f.fallback&&(f.fallback=!0,u&&u(f),f.subscriptions.forEach(e=>e.onFallback&&e.onFallback(f))),f.averages=[]}f.frames=[]}}}),J.createElement(Sn.Provider,{value:f},d)}var wn=.1846,$=new Float32Array([.725,.725,.318,.00172,.84,.76,.64,.024,.84,3.4,-2,1,.72,0,0,.35]),Tn=!1,En=Math.atan2(.36,.82),Dn=Math.asin(.82/Math.hypot(.82,.82,.36)),On=Math.atan2(-.92,.34),kn=.195,An=Math.atan2(-.67,-.48),jn=.59;function Mn(e,t,n=0,r=0){let i=Math.max(0,Math.min(1,n+r)),a=En+(On-En)*i,o=a+(An-a)*r,s=.21+(Dn-.21)*Math.max(0,Math.min(1,e)),c=s+(kn-s)*n,l=c+(jn-c)*r,u=Math.cos(l);return t.set(Math.cos(o)*u,Math.sin(l),Math.sin(o)*u).normalize()}function Nn(e){let{dirSol:t,corSolNevoa:n,densidade:r,decaimentoAltura:i,nevoaMax:a,potenciaMie:o,baseAltura:s=-2,forcaMie:c=.72,entardecer:l=0,noite:u=0,reforcoHorizonte:d=.35,leve:f}=e;$[0]=t.x,$[1]=t.y,$[2]=t.z,$[3]=r,$[4]=n.r,$[5]=n.g,$[6]=n.b,$[7]=i,$[8]=a,$[9]=o,$[10]=s,$[11]=+!f,$[12]=c,$[13]=l,$[14]=u,$[15]=d}function Pn(){if(Tn)return;Tn=!0;let e={value:$};ke.fog.uAtmFog=e;for(let t of Object.values(Ce)){let n=t?.uniforms;n&&`fogColor`in n&&(n.uAtmFog=e)}k.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorldOffset;
#endif
`,k.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorldOffset = mvPosition.xyz * mat3( viewMatrix );
#endif
`,k.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  uniform vec4 uAtmFog[ 4 ];
  varying float vFogDepth;
  varying vec3 vFogWorldOffset;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif
`,k.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #else
    // Acompanha TransicaoVento quando fogFar é encolhido temporariamente no deslocamento rápido
    float atmVento = clamp( ( 700.0 - fogFar ) / 520.0, 0.0, 1.0 );
    float atmStart = max( 24.0, fogNear * 0.72 );

    if ( uAtmFog[ 2 ].w > 0.5 ) {
      float atmDist = length( vFogWorldOffset );
      float atmD = max( atmDist - atmStart, 0.0 );
      // Rampa suave nos primeiros 68 m após atmStart: primeiro plano e quarteirões vizinhos ficam cristalinos
      float atmRamp = atmD * smoothstep( 0.0, 68.0, atmD );

      // Integral analítica de densidade exponencial em altura: mais névoa embaixo (vales/solo), mais límpido no alto
      float atmK = max( uAtmFog[ 1 ].w, 0.0005 );
      float atmY0 = max( cameraPosition.y - uAtmFog[ 2 ].z, 0.0 );
      float atmY1 = max( cameraPosition.y + vFogWorldOffset.y - uAtmFog[ 2 ].z, 0.0 );
      float atmDy = atmY1 - atmY0;
      float atmAltura = abs( atmDy ) < 0.05
        ? exp( - atmK * atmY0 )
        : ( exp( - atmK * atmY0 ) - exp( - atmK * atmY1 ) ) / ( atmK * atmDy );

      float atmSigma = uAtmFog[ 0 ].w * ( 1.0 + atmVento * 2.2 );
      float atmOpt = atmSigma * atmRamp * ( 0.42 + 0.58 * atmAltura );
      float fogFactor = min( 1.0 - exp( - atmOpt ), mix( uAtmFog[ 2 ].x, 0.96, atmVento ) );

      // Espalhamento direcional: dourado/quente perto do sol (Mie) e azulado-frio no lado oposto (Rayleigh)
      vec3 atmRayDir = vFogWorldOffset / max( atmDist, 0.001 );
      float atmDotRaw = dot( atmRayDir, uAtmFog[ 0 ].xyz );
      float atmSunDot = max( atmDotRaw, 0.0 );
      float atmAntiSun = clamp( 0.5 - 0.5 * atmDotRaw, 0.0, 1.0 );
      float atmHoriz = exp( - abs( atmRayDir.y ) * 4.2 );

      float atmEnt = uAtmFog[ 3 ].y;
      float atmNoite = uAtmFog[ 3 ].z;
      float atmMie = pow( atmSunDot, uAtmFog[ 2 ].y ) * ( 1.0 + atmHoriz * uAtmFog[ 3 ].w );
      // Faixa azimutal mais larga no entardecer para transição suave dourado → azulado sem recorte
      float atmLargo = pow( atmSunDot, 1.65 ) * 0.32 * atmEnt * ( 0.55 + 0.45 * atmHoriz );

      vec3 atmFrio = fogColor * mix( vec3( 1.0 ), vec3( 0.88, 0.96, 1.12 ), atmAntiSun * ( 0.45 * atmEnt + 0.18 * ( 1.0 - atmNoite ) ) );
      vec3 atmCol = mix( atmFrio, uAtmFog[ 1 ].rgb, clamp( atmMie * uAtmFog[ 3 ].x + atmLargo, 0.0, 0.88 ) );

      // Desbotamento atmosférico sutil antes da mistura final (como em fotografias aéreas reais)
      float atmLuma = dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
      vec3 atmDesat = mix( gl_FragColor.rgb, vec3( atmLuma ), fogFactor * mix( 0.24, 0.30, atmEnt ) );
      gl_FragColor.rgb = mix( atmDesat, atmCol, fogFactor );
    } else {
      // Modo leve (celular): exponencial simples em distância + leve deslocamento quente/frio barato
      float atmD = max( vFogDepth - atmStart, 0.0 );
      float atmSigma = uAtmFog[ 0 ].w * ( 0.92 + atmVento * 2.0 );
      float fogFactor = min( 1.0 - exp( - atmSigma * atmD ), mix( uAtmFog[ 2 ].x, 0.95, atmVento ) );
      vec3 atmRayDir = normalize( vFogWorldOffset + vec3( 0.0001 ) );
      float atmWarm = max( dot( atmRayDir, uAtmFog[ 0 ].xyz ), 0.0 ) * uAtmFog[ 3 ].y * 0.45;
      gl_FragColor.rgb = mix( gl_FragColor.rgb, mix( fogColor, uAtmFog[ 1 ].rgb, atmWarm ), fogFactor );
    }
  #endif
#endif
`}var Fn=[{cx:-6,cy:148,cz:62,rx:86,ry:12,rz:46,puffs:15,escala:62,along:1.85},{cx:-94,cy:140,cz:-38,rx:78,ry:14,rz:48,puffs:14,escala:66,along:1.75},{cx:102,cy:146,cz:-26,rx:82,ry:13,rz:54,puffs:14,escala:64,along:1.9},{cx:18,cy:160,cz:-162,rx:145,ry:18,rz:56,puffs:18,escala:80,along:2.15},{cx:-24,cy:126,cz:138,rx:76,ry:9,rz:36,puffs:11,escala:52,along:1.8},{cx:44,cy:174,cz:196,rx:52,ry:8,rz:28,puffs:9,escala:44,along:1.7},{cx:-148,cy:158,cz:92,rx:74,ry:12,rz:42,puffs:10,escala:58,along:2}],In=[{ang:-1.18,raio:520,y:126,comp:160,alt:22,puffs:6},{ang:-1.62,raio:560,y:142,comp:190,alt:26,puffs:6},{ang:-2.22,raio:540,y:132,comp:170,alt:24,puffs:5},{ang:-.45,raio:550,y:136,comp:155,alt:22,puffs:5},{ang:.72,raio:540,y:144,comp:165,alt:24,puffs:4}];function Ln(e){let t=29417,n=()=>(t=t*16807%2147483647,(t-1)/2147483646),r=[];for(let t of Fn){let i=e?Math.max(6,Math.round(t.puffs*.36)):t.puffs;for(let e=0;e<i;e++){let e=(n()-.5)*2,i=(n()-.5)*2,a=e*e+i*i,o=Math.min(1,n()**.58),s=n()*Math.PI*2,c=Math.cos(s)*o*t.rx+(n()-.5)*t.rx*.25,l=Math.sin(s)*o*t.rz+(n()-.5)*t.rz*.22,u=Math.max(0,1-Math.hypot(c/t.rx,l/t.rz)),d=Math.min(1,Math.max(0,(.15+.85*n())*(.35+.65*u))),f=(d-.32)*t.ry*(1+.5*u),p=.62+.72*n()*(.65+.35*u),m=t.escala*p*(t.along*(.82+.36*n())),h=t.escala*p*(.48+.34*n()),g=(.52+.42*u)*(a<1.2?1:.78);r.push({x:t.cx+c,y:t.cy+f,z:t.cz+l,sx:m,sy:h,grupo:0,alturaRel:d,dens:g,seedX:n()*47,seedY:n()*47,rot:(n()-.5)*.55,drift:.75+n()*.55})}}if(!e)for(let e of In){let t=Math.cos(e.ang)*e.raio,i=Math.sin(e.ang)*e.raio,a=-Math.sin(e.ang),o=Math.cos(e.ang);for(let s=0;s<e.puffs;s++){let c=(s/Math.max(1,e.puffs-1)-.5)*e.comp+(n()-.5)*28,l=(n()-.5)*42,u=1-Math.min(1,Math.abs(c)/(e.comp*.62)),d=Math.min(1,Math.max(0,.25+n()*.75*(.45+.55*u))),f=(d-.35)*e.alt,p=(82+n()*58)*(.75+.35*u),m=(24+n()*18)*(.7+.35*u);r.push({x:t+a*c+Math.cos(e.ang)*l,y:e.y+f,z:i+o*c+Math.sin(e.ang)*l,sx:p,sy:m,grupo:1,alturaRel:d,dens:.42+.32*u,seedX:n()*61,seedY:n()*61,rot:(n()-.5)*.28,drift:.45+n()*.4})}}return r}function Rn(e){let t=new b(1,1,1,1),n=new N;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;let r=e.length,i=new Float32Array(r*3),a=new Float32Array(r*4),o=new Float32Array(r*4),s=new Float32Array(r);for(let t=0;t<r;t++){let n=e[t];i[t*3+0]=n.x,i[t*3+1]=n.y,i[t*3+2]=n.z,a[t*4+0]=n.sx,a[t*4+1]=n.sy,a[t*4+2]=n.rot,a[t*4+3]=n.grupo,o[t*4+0]=n.alturaRel,o[t*4+1]=n.dens,o[t*4+2]=n.seedX,o[t*4+3]=n.seedY,s[t]=n.drift}return n.setAttribute(`aCentro`,new L(i,3)),n.setAttribute(`aEscala`,new L(a,4)),n.setAttribute(`aDados`,new L(o,4)),n.setAttribute(`aDrift`,new L(s,1)),n.instanceCount=r,n.boundingSphere=new z(new P(0,140,0),900),t.dispose(),n}function zn(){return new R({transparent:!0,depthWrite:!1,depthTest:!0,side:2,fog:!1,uniforms:{uOpAbertura:{value:1},uOpHorizonte:{value:.72},uTempo:{value:0},uLeve:{value:0},uSunDir:{value:new P(.725,.725,.318)},uCorTopo:{value:new l(`#fff9f0`)},uCorBase:{value:new l(`#8da7c4`)},uCorBorda:{value:new l(`#ffe0b5`)},uCorNevoa:{value:new l(`#b6cce2`)},uEntardecer:{value:0},uNoite:{value:0}},vertexShader:`
      attribute vec3 aCentro;
      attribute vec4 aEscala;
      attribute vec4 aDados;
      attribute float aDrift;

      uniform float uTempo;
      uniform float uOpAbertura;
      uniform float uOpHorizonte;
      uniform vec3 uSunDir;

      varying vec2 vUv;
      varying vec4 vDados;
      varying float vOpacidade;
      varying float vSunDot;
      varying vec2 vSunTela;
      varying float vDist;

      void main() {
        vUv = uv;
        vDados = aDados;

        float ehHoriz = aEscala.w;
        float opGrupo = mix(uOpAbertura, uOpHorizonte, ehHoriz);

        // Descarte imediato em clip-space quando o grupo está oculto (zero rasterização/overdraw)
        if (opGrupo < 0.008) {
          vOpacidade = 0.0;
          vSunDot = 0.0;
          vSunTela = vec2(0.0);
          vDist = 1000.0;
          gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          return;
        }

        // Deriva lenta e natural com o vento (mais sutil no horizonte distante)
        vec3 centro = aCentro;
        float vel = mix(1.85, 0.95, ehHoriz) * aDrift;
        centro.x += sin(uTempo * 0.045 + aDados.z) * 4.5 + uTempo * vel * 0.22;
        centro.z += cos(uTempo * 0.038 + aDados.w) * 3.0 + uTempo * vel * 0.09;

        // Billboard orientado para a câmera mantendo horizonte natural
        vec3 camUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 toCam = normalize(cameraPosition - centro + vec3(0.0, 0.0, 0.0001));
        vec3 upMix = normalize(mix(camUp, vec3(0.0, 1.0, 0.0), mix(0.45, 0.78, ehHoriz)));
        vec3 rightMix = normalize(cross(upMix, toCam));
        upMix = cross(toCam, rightMix);

        float cr = cos(aEscala.z);
        float sr = sin(aEscala.z);
        vec2 p = position.xy;
        vec2 pr = vec2(p.x * cr - p.y * sr, p.x * sr + p.y * cr);
        vec3 wPos = centro + rightMix * (pr.x * aEscala.x) + upMix * (pr.y * aEscala.y);

        vec3 viewVec = wPos - cameraPosition;
        float dist = length(viewVec);
        vec3 viewDir = viewVec / max(dist, 0.001);
        vDist = dist;

        // Proximidade suave: atravessar a camada na abertura nunca mostra corte duro de plano
        float fadePerto = smoothstep(10.0, 46.0, dist);
        vOpacidade = opGrupo * fadePerto;
        vSunDot = dot(viewDir, normalize(uSunDir));
        vSunTela = vec2(dot(uSunDir, rightMix), dot(uSunDir, upMix));

        gl_Position = projectionMatrix * viewMatrix * vec4(wPos, 1.0);
      }
    `,fragmentShader:`
      uniform float uLeve;
      uniform float uTempo;
      uniform vec3 uCorTopo;
      uniform vec3 uCorBase;
      uniform vec3 uCorBorda;
      uniform vec3 uCorNevoa;
      uniform float uEntardecer;
      uniform float uNoite;

      varying vec2 vUv;
      varying vec4 vDados;
      varying float vOpacidade;
      varying float vSunDot;
      varying vec2 vSunTela;
      varying float vDist;

      float hash21(vec2 p) {
        p = fract(p * vec2(127.1, 311.7));
        p += dot(p, p + 34.53);
        return fract(p.x * p.y);
      }

      float vnoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
          mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p, bool simples) {
        float v = 0.0;
        float a = 0.56;
        mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
        v += a * vnoise(p); p = rot * p * 2.05 + vec2(9.2, 4.1); a *= 0.50;
        v += a * vnoise(p);
        if (!simples) {
          p = rot * p * 2.10 + vec2(-5.7, 11.8); a *= 0.48;
          v += a * vnoise(p);
        }
        return v;
      }

      void main() {
        if (vOpacidade < 0.008) discard;

        vec2 p = vUv * 2.0 - 1.0;
        // Silhueta natural: base de condensação mais achatada embaixo, cúpula orgânica no topo
        float yAchat = p.y < 0.0 ? p.y * 1.48 : p.y * 0.98;
        vec2 pForma = vec2(p.x, yAchat);
        float r = length(pForma);
        if (r > 1.05) discard;

        bool simples = uLeve > 0.5;
        vec2 seed = vDados.zw;
        vec2 uvN = p * vec2(1.65, 1.85) + seed + vec2(uTempo * 0.012, 0.0);

        // Domain warp leve (2 amostras de vnoise) no desktop quebra qualquer aspecto repetitivo de bola de algodão
        vec2 warp = simples
          ? vec2(0.0)
          : vec2(vnoise(uvN * 0.88 + vec2(3.1, -1.7)) - 0.5, vnoise(uvN * 0.88 + vec2(-2.4, 5.3)) - 0.5) * 0.68;
        float forma = fbm(uvN + warp, simples);

        // Máscara volumétrica com bordas erodidas pelo vento
        float env = smoothstep(1.02, 0.22, r);
        float dens = smoothstep(0.30, 0.78, env * 0.76 + forma * 0.56 - r * 0.34);
        if (dens < 0.012) discard;

        // Iluminação volumétrica pelo sol: topo/lado solar iluminado + base sombreada + brilho de borda (silver/golden lining)
        vec2 sun2 = normalize(vSunTela + vec2(0.0001));
        float luzLateral = dot(p, sun2) * 0.42 + 0.5;
        float gradVert = clamp(p.y * 0.52 + 0.5 + (vDados.x - 0.5) * 0.48, 0.0, 1.0);
        // Auto-sombreamento barato amostrando o ruído deslocado na direção do sol na tela
        float densSol = simples ? dens : vnoise(uvN + warp + sun2 * 0.28);
        float transm = clamp(0.45 + (forma - densSol) * 1.55, 0.0, 1.0);

        float luz = clamp(gradVert * 0.56 + luzLateral * 0.24 + transm * 0.32, 0.0, 1.0);
        vec3 cor = mix(uCorBase, uCorTopo, smoothstep(0.14, 0.88, luz));

        // Espalhamento frontal Henyey-Greenstein nas bordas finas (borda dourada no entardecer / prateada de dia)
        float sunPos = max(vSunDot, 0.0);
        float g = 0.62;
        float hg = (1.0 - g * g) / pow(max(0.08, 1.0 + g * g - 2.0 * g * sunPos), 1.5);
        float rim = (1.0 - smoothstep(0.16, 0.72, dens)) * smoothstep(0.02, 0.24, dens);
        float forcaRim = (0.28 + 0.68 * uEntardecer) * (1.0 - uNoite * 0.76);
        cor += uCorBorda * (rim * clamp(hg * 0.22 + pow(sunPos, 4.0) * 0.55, 0.0, 1.35) * forcaRim);

        // Mistura atmosférica suave à distância para integrar as nuvens do horizonte ao ar da cena
        float nevoaDist = smoothstep(320.0, 760.0, vDist) * 0.46;
        cor = mix(cor, uCorNevoa, nevoaDist);

        float alpha = clamp(dens * vDados.y * vOpacidade, 0.0, 0.86);
        gl_FragColor = vec4(cor, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function Bn({leve:e=!1}){let t=(0,J.useRef)(null),n=(0,J.useMemo)(()=>new P,[]),r=(0,J.useMemo)(()=>new l,[]),i=(0,J.useMemo)(()=>new l,[]),a=(0,J.useMemo)(()=>new l,[]),o=(0,J.useMemo)(()=>new l,[]),s=(0,J.useMemo)(()=>new l(`#fbfaf7`),[]),u=(0,J.useMemo)(()=>new l(`#fff0db`),[]),{geo:d,mat:f}=(0,J.useMemo)(()=>({geo:Rn(Ln(e)),mat:zn()}),[e]);return(0,J.useEffect)(()=>()=>{d.dispose(),f.dispose()},[d,f]),W((l,d)=>{let p=t.current;if(!p)return;let m=S.t,h=K(m),g=e?0:.62*(1-.35*Math.min(1,Math.max(0,(m-5.15)/.65))),_=h>.008||g>.01;if(p.visible=_,!_)return;let v=G(m);Mn(v.altSol,n,v.entardecer,v.noite);let y=1-Math.min(1,Math.max(0,(m-.12)/.82));r.copy(s).lerp(u,y*.65).lerp(v.nevoaSol,v.entardecer*.58).lerp(v.ceuHorizonte,v.noite*.82).multiplyScalar(1.08-.24*v.noite),i.copy(v.ceuMeio).lerp(v.ceuTopo,.38+.32*v.entardecer+.35*v.noite).multiplyScalar(.84-.22*v.noite),a.copy(v.sol).lerp(v.nevoaSol,.35).multiplyScalar(1.18-.42*v.noite),o.copy(v.nevoa).lerp(v.nevoaSol,v.entardecer*.35);let b=f.uniforms;b.uOpAbertura.value=h,b.uOpHorizonte.value=g,b.uLeve.value=+!!e,b.uSunDir.value.copy(n),b.uCorTopo.value.copy(r),b.uCorBase.value.copy(i),b.uCorBorda.value.copy(a),b.uCorNevoa.value.copy(o),b.uEntardecer.value=v.entardecer,b.uNoite.value=v.noite,c.reduzirMovimento||(b.uTempo.value+=Math.min(d,.05))}),(0,Y.jsx)(`mesh`,{ref:t,geometry:d,material:f,frustumCulled:!1,renderOrder:1})}var Vn=360;function Hn(){let e=new b(1,1,1,1),t=new N;t.index=e.index,t.attributes.position=e.attributes.position,t.attributes.uv=e.attributes.uv;let n=new Float32Array(Vn*3),r=new Float32Array(Vn*4),i=19307,a=()=>(i=i*16807%2147483647,(i-1)/2147483646);for(let e=0;e<Vn;e++){let t=e<56,i=a()*Math.PI*2,o=t?3.2:2.6,s=t?14.5:16.5,c=o+a()**.72*(s-o),l=Math.cos(i)*c*1.25,u=Math.sin(i)*c*.82,d=-2.6-a()*30;n[e*3+0]=l,n[e*3+1]=u,n[e*3+2]=d;let f=a(),p=t?.65+a()*.55:.9+a()*1.15,m=t?5.5+a()*4.5:1.5+a()*2.8,h=t?-(.18+a()*.22):.015+a()*.018;r[e*4+0]=f,r[e*4+1]=p,r[e*4+2]=m,r[e*4+3]=h}return t.setAttribute(`aOffset`,new L(n,3)),t.setAttribute(`aSeed`,new L(r,4)),t.instanceCount=Vn,e.dispose(),t}function Un(){return new R({transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,fog:!1,uniforms:{uForca:{value:0},uFase:{value:0},uDirLocal:{value:new P(0,0,1)},uCor:{value:new l(`#eef2f8`)},uGanho:{value:1}},vertexShader:`
      attribute vec3 aOffset;
      attribute vec4 aSeed;

      uniform float uForca;
      uniform float uFase;
      uniform vec3 uDirLocal;

      varying vec2 vUv;
      varying float vAlpha;
      varying float vSmear;

      void main() {
        vUv = uv;
        float ehSmear = aSeed.w < 0.0 ? 1.0 : 0.0;
        vSmear = ehSmear;

        // Progresso cíclico contínuo ao longo do fluxo de vento
        float ciclo = fract(aSeed.x + uFase * aSeed.y);
        vec3 dir = normalize(uDirLocal);

        // Posição no volume local da câmera deslocada na direção oposta ao voo
        float curso = (ciclo - 0.5) * 32.0;
        vec3 centro = aOffset + dir * curso;

        // Mantém o fluxo dentro do campo visível na frente da câmera (z entre -34 e -1.8)
        centro.z = -1.8 - mod(-centro.z - 1.8, 32.2);

        // Eixo do streak (alinhado ao fluxo) e largura perpendicular à linha de visão (billboard cilíndrico)
        vec3 vista = normalize(-centro);
        vec3 lado = cross(dir, vista);
        float ladoLen = length(lado);
        if (ladoLen < 0.001) {
          lado = vec3(1.0, 0.0, 0.0);
        } else {
          lado /= ladoLen;
        }

        float comp = aSeed.z * (0.45 + 1.3 * uForca);
        float profEsc = 0.45 + 0.026 * (-centro.z);
        float larg = abs(aSeed.w) * profEsc * (ehSmear > 0.5 ? (0.85 + 0.6 * uForca) : (0.9 + 0.4 * uForca));

        vec3 pLocal = centro + dir * (position.x * comp) + lado * (position.y * larg);

        // Fade suave na entrada/saída do ciclo e nas bordas de profundidade
        float fadeCiclo = smoothstep(0.0, 0.18, ciclo) * (1.0 - smoothstep(0.8, 1.0, ciclo));
        float fadeProf = smoothstep(-34.0, -24.0, centro.z) * (1.0 - smoothstep(-3.8, -2.0, centro.z));
        vAlpha = fadeCiclo * fadeProf * uForca;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pLocal, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uCor;
      uniform float uGanho;

      varying vec2 vUv;
      varying float vAlpha;
      varying float vSmear;

      void main() {
        // Perfil de cometa/risco de vento: ponta suave à frente e cauda alongada
        float along = smoothstep(0.0, 0.35, vUv.x) * (1.0 - smoothstep(0.55, 1.0, vUv.x));
        float transv = 1.0 - abs(vUv.y * 2.0 - 1.0);
        transv = pow(clamp(transv, 0.0, 1.0), vSmear > 0.5 ? 2.2 : 1.75);

        float baseOp = vSmear > 0.5 ? 0.055 : 0.24;
        float a = along * transv * vAlpha * baseOp * uGanho;
        if (a < 0.002) discard;

        gl_FragColor = vec4(uCor, a);
      }
    `})}function Wn({leve:e}){let t=I(e=>e.scene),n=I(e=>e.camera),r=(0,J.useRef)(null),i=typeof window<`u`&&window.location.search.includes(`vento_particulas`),a=!e||i,s=(0,J.useMemo)(()=>a?{geo:Hn(),mat:Un()}:null,[a]);(0,J.useEffect)(()=>{if(s)return()=>{s.geo.dispose(),s.mat.dispose()}},[s]);let u=(0,J.useRef)({iniciado:!1,prevPos:new P,delta:new P,velDirMundo:new P(0,0,-1),invQuat:new d,dirLocal:new P(0,0,1),corAlvo:new l,corNeblina:new l,velSuave:0,intensidade:0,fase:0});return W((e,i)=>{let a=u.current;if(c.reduzirMovimento){T.forca=0,T.vel=0,a.velSuave=0,a.intensidade=0,a.prevPos.copy(n.position),a.iniciado=!0,r.current&&(r.current.visible=!1);return}let l=Math.min(Math.max(i,1/120),.1);if(!a.iniciado){a.prevPos.copy(n.position),a.iniciado=!0,r.current&&(r.current.visible=!1);return}a.delta.subVectors(n.position,a.prevPos),a.prevPos.copy(n.position);let d=a.delta.length(),f=d/l;d>.004&&(a.delta.divideScalar(d),a.velDirMundo.lerp(a.delta,1-Math.exp(-10*l)).normalize());let m=f>a.velSuave?1-Math.exp(-9*l):1-Math.exp(-4.5*l);a.velSuave+=(f-a.velSuave)*m;let h=o(12,52,a.velSuave),_=typeof performance<`u`?performance.now():0,v=(ve.ate-_)/1e3,y=v>0?o(0,.55,v):0,b=Math.max(h,y),x=b>a.intensidade?1-Math.exp(-6.5*l):1-Math.exp(-3*l);a.intensidade=p(a.intensidade+(b-a.intensidade)*x);let C=a.intensidade,w=C*C*(3-2*C);if(T.forca=w,T.vel=a.velSuave,w>.002&&t.fog instanceof g){let e=t.fog;e.near=Math.max(8,e.near*(1-.78*w)),e.far=Math.max(e.near+45,e.far*(1-.64*w));let n=G(S.t);a.corNeblina.set(n.noite>.5?`#35456d`:`#f2efe9`),e.color.lerp(a.corNeblina,.18*w)}if(!s||!r.current)return;let E=w>.005;if(r.current.visible=E,!E)return;r.current.position.copy(n.position),r.current.quaternion.copy(n.quaternion),a.invQuat.copy(n.quaternion).invert(),a.velSuave>3?a.dirLocal.copy(a.velDirMundo).negate().applyQuaternion(a.invQuat):a.dirLocal.set(0,0,1),a.dirLocal.lengthSq()<1e-4?a.dirLocal.set(0,0,1):a.dirLocal.normalize(),a.fase+=l*(.85+1.65*w+Math.min(1.4,a.velSuave/70));let D=G(S.t);a.corAlvo.set(`#f4f6fa`).lerp(a.corNeblina.set(`#9fb8ff`),D.noite*.75);let O=s.mat.uniforms;O.uForca.value=w,O.uFase.value=a.fase,O.uDirLocal.value.copy(a.dirLocal),O.uCor.value.copy(a.corAlvo),O.uGanho.value=.95-.25*D.noite}),!a||!s?null:(0,Y.jsx)(`mesh`,{ref:r,geometry:s.geo,material:s.mat,visible:!1,frustumCulled:!1,renderOrder:10})}var Gn=typeof window>`u`||!new URLSearchParams(window.location.search).has(`aces`),Kn=[`map`,`normalMap`,`roughnessMap`,`metalnessMap`,`aoMap`,`emissiveMap`,`bumpMap`,`alphaMap`];function qn({leve:e}){let t=I(e=>e.gl),n=I(e=>e.scene);return(0,J.useEffect)(()=>{let r=Math.min(e?4:16,t.capabilities.getMaxAnisotropy()),i=new WeakSet,a=()=>{n.traverse(e=>{let t=e.material;if(t){for(let e of Array.isArray(t)?t:[t])if(!i.has(e)){i.add(e);for(let t of Kn){let n=e[t];n&&n.isTexture&&!n.isDataTexture&&(n.anisotropy>=r||(n.anisotropy=r,n.generateMipmaps===!1&&!n.isCompressedTexture&&(n.generateMipmaps=!0,n.minFilter=Ae),n.needsUpdate=!0))}}}})};a();let o=window.setInterval(a,1500);return()=>window.clearInterval(o)},[t,n,e]),null}var Jn=e({default:()=>hr});Pn();var Yn=(0,J.lazy)(()=>q(()=>import(`./Agua-DSxMXdRa.js`).then(e=>e.t),__vite__mapDeps([0,1,2]),import.meta.url)),Xn=(0,J.lazy)(()=>q(()=>import(`./Cidade-o9nMG7n_.js`).then(e=>e.t),__vite__mapDeps([3,1,4,2,5,6,7,8,0]),import.meta.url)),Zn=(0,J.lazy)(()=>q(()=>import(`./Montanhas-CtbeoZzL.js`),__vite__mapDeps([9,1,5,6]),import.meta.url)),Qn=(0,J.lazy)(()=>q(()=>import(`./index-Cb4ezeUV.js`).then(e=>e.n).then(e=>({default:e.Unique})),__vite__mapDeps([4,1,2,5,6,7,8]),import.meta.url)),$n=(0,J.lazy)(()=>q(()=>import(`./index-Cb4ezeUV.js`).then(e=>e.n).then(e=>({default:e.Comerciais})),__vite__mapDeps([4,1,2,5,6,7,8]),import.meta.url)),er=(0,J.lazy)(()=>q(()=>import(`./ApartamentoPBR-Cg2HqLEC.js`),__vite__mapDeps([10,1,5,6,2,4,7,8]),import.meta.url)),tr=(0,J.lazy)(()=>q(()=>import(`./ProjetosExtras-CQoVlaI3.js`),__vite__mapDeps([11,1,5,6,7,2,12,3,4,8,0]),import.meta.url)),nr=(0,J.lazy)(()=>q(()=>import(`./Clicaveis-CdHFUs_e.js`),__vite__mapDeps([12,1,3,4,2,5,6,7,8,0]),import.meta.url)),rr=(0,J.lazy)(()=>q(()=>import(`./PosProcesso-CFIm3Mm4.js`),__vite__mapDeps([13,1,2]),import.meta.url));function ir({de:e,ate:t,children:n}){let[r,i]=(0,J.useState)(()=>S.t>=e&&S.t<=t);return W(()=>{let n=S.t>=e&&S.t<=t;n!==r&&i(n)}),r?(0,Y.jsx)(J.Suspense,{fallback:null,children:n}):null}var ar=new P,or=.17;function sr(){let e=I(e=>e.camera),t=(0,J.useMemo)(()=>new P,[]),n=(0,J.useMemo)(()=>new P,[]),r=(0,J.useRef)(!1),i=(0,J.useRef)(0);return W(({size:a},s)=>{let l=Me.ativa?Ie(s,e.position,t,n,a.width/Math.max(1,a.height)):Pe(S.t,t,n),u=a.width>=900&&!Me.ativa,d=u?o(2.86,3.02,S.t)*(1-o(4.96,5.12,S.t)):0;if(!r.current||c.reduzirMovimento)e.position.copy(t),ar.copy(n),e.fov=l,i.current=d,r.current=!0;else{let r=1-Math.exp(-4*Math.min(s,.1));e.position.lerp(t,r),ar.lerp(n,r),e.fov+=(l-e.fov)*r,i.current=u?i.current+(d-i.current)*r:0}e.lookAt(ar),i.current>5e-4?e.setViewOffset(a.width,a.height,-i.current*or*a.width,0,a.width,a.height):e.view?.enabled?e.clearViewOffset():e.updateProjectionMatrix()}),null}function cr({estrelasQtd:e=2500,leve:t=!1}){let n=(0,J.useMemo)(()=>new R({side:1,depthWrite:!1,fog:!1,uniforms:{uTopo:{value:new l(`#2e68b0`)},uMeio:{value:new l(`#6fa8da`)},uHorizonte:{value:new l(`#d5e4f0`)},uNevoaSol:{value:new l(`#eee0c9`)},uSolCor:{value:new l(`#ffebd0`)},uSunDir:{value:new P(.725,.725,.318)},uEntardecer:{value:0},uNoite:{value:0},uTempo:{value:0},uLeve:{value:0}},vertexShader:`
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 uTopo;
          uniform vec3 uMeio;
          uniform vec3 uHorizonte;
          uniform vec3 uNevoaSol;
          uniform vec3 uSolCor;
          uniform vec3 uSunDir;
          uniform float uEntardecer;
          uniform float uNoite;
          uniform float uTempo;
          uniform float uLeve;
          varying vec3 vDir;

          float hash21(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
          }

          float vnoise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
              mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
              u.y
            );
          }

          float fbmCloud(vec2 p, bool simples) {
            float v = 0.0;
            float a = 0.52;
            mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
            v += a * vnoise(p); p = rot * p * 2.04 + vec2(11.3, 4.7); a *= 0.5;
            v += a * vnoise(p);
            if (!simples) {
              p = rot * p * 2.07 + vec2(-6.1, 13.4); a *= 0.5;
              v += a * vnoise(p);
              p = rot * p * 2.11 + vec2(5.2, -9.8); a *= 0.5;
              v += a * vnoise(p);
            }
            return v;
          }

          void main() {
            vec3 dir = normalize(vDir);
            vec3 sunDir = normalize(uSunDir);
            float y = dir.y;
            float h = clamp(y, 0.0, 1.0);

            // Direção azimutal relativa ao sol: quente/dourada perto do sol, azulada/fria no lado oposto
            vec2 dirXZ = normalize(dir.xz + vec2(0.0001));
            vec2 sunXZ = normalize(sunDir.xz + vec2(0.0001));
            float azDot = dot(dirXZ, sunXZ);
            float sunAz = clamp(azDot * 0.5 + 0.5, 0.0, 1.0);
            float antiSun = 1.0 - sunAz;
            float horBand = exp(-abs(y) * mix(5.2, 4.0, uEntardecer));

            // Gradiente físico Rayleigh em 3 faixas com separação quente/fria no entardecer (referência Samar)
            // e azul-profundo graduado à noite (referência Aurelle)
            vec3 horBase = mix(
              uHorizonte * mix(vec3(1.0), vec3(0.84, 0.94, 1.14), antiSun * uEntardecer * 0.72),
              uNevoaSol * mix(1.0, 1.14, uEntardecer),
              pow(sunAz, 2.2) * (0.28 + 0.58 * uEntardecer) * (1.0 - uNoite * 0.85)
            );
            vec3 meioBase = mix(
              uMeio,
              mix(uMeio, uNevoaSol * 0.96, 0.24),
              pow(sunAz, 2.4) * uEntardecer * (1.0 - uNoite)
            );

            vec3 ceu = mix(horBase, meioBase, smoothstep(0.0, 0.28, pow(h, 0.68)));
            ceu = mix(ceu, uTopo, smoothstep(0.16, 0.88, pow(h, 0.62)));

            // Abaixo do horizonte: mistura suave para a bruma (evita recorte duro em reflexos na água)
            float abaixo = smoothstep(0.0, -0.18, y);
            ceu = mix(ceu, horBase * mix(0.82, 0.72, uNoite), abaixo);

            // Espalhamento Mie solar (dourado largo no entardecer) + halo lunar frio discreto à noite
            float sunDot = max(dot(dir, sunDir), 0.0);
            float mieExp = mix(3.2, 2.1, uEntardecer);
            float mieLargo = pow(sunDot, mieExp) * (0.30 + (0.44 + 0.36 * uEntardecer) * horBand) * (1.0 - uNoite * 0.86);
            float mieAureola = pow(sunDot, mix(26.0, 14.0, uEntardecer)) * mix(0.52, 0.78, uEntardecer) * (1.0 - uNoite * 0.90);
            float discoSolar = smoothstep(0.9988, 0.99975, sunDot) * mix(3.6, 2.6, uEntardecer) * (1.0 - uNoite * 0.96);

            // Lua fria suave à noite (mantém a noite clara realista sem estourar bloom)
            float haloLua = pow(sunDot, 10.0) * 0.22 * uNoite + pow(sunDot, 64.0) * 0.34 * uNoite;
            float discoLua = smoothstep(0.99925, 0.99968, sunDot) * 1.45 * uNoite;

            ceu = mix(ceu, uNevoaSol, clamp(mieLargo, 0.0, 0.82));
            ceu += uSolCor * (mieAureola + discoSolar + haloLua + discoLua);

            // Camada de nuvens altas com formas irregulares (domain warp) e iluminação de borda pelo sol/lua
            if (y > 0.012) {
              vec2 uv = dir.xz / (y + 0.16);
              vec2 drift = vec2(uTempo * 0.0042, uTempo * 0.0019);
              bool simples = uLeve > 0.5;

              // Domain warp orgânico leve + estratos cirrus estirados pelo vento (sem aspecto de algodão repetido)
              vec2 warp = simples
                ? vec2(0.0)
                : vec2(
                    vnoise(uv * 0.42 + drift * 0.7 + vec2(4.2, -1.9)) - 0.5,
                    vnoise(uv * 0.42 - drift * 0.5 + vec2(-3.7, 6.1)) - 0.5
                  ) * 0.78;
              vec2 uvW = uv * vec2(0.56, 0.74) + warp + drift;
              float nBase = fbmCloud(uvW, simples);
              float nCirrus = simples ? nBase : vnoise(uv * vec2(0.48, 1.55) + drift * 1.35 + warp * 0.45);
              float forma = nBase * 0.76 + nCirrus * 0.24;

              float cob = smoothstep(0.48, 0.79, forma) * smoothstep(0.018, 0.22, y) * (1.0 - smoothstep(0.76, 0.99, y) * 0.22);

              // Iluminação direcional de borda (silver/golden lining) com 1 passo filtrado em direção ao sol
              float sombraNuvem = simples ? 0.5 : fbmCloud(uvW + sunDir.xz * 0.11, true);
              float bordaFina = (1.0 - smoothstep(0.18, 0.72, cob)) * smoothstep(0.02, 0.25, cob);
              float luzDirecional = clamp(0.48 + (forma - sombraNuvem) * 2.5, 0.0, 1.0);

              vec3 baseDia = uMeio * 0.80 + vec3(0.14);
              vec3 basePor = mix(uTopo * 0.92, uMeio * 0.86, 0.45) * vec3(0.88, 0.88, 1.02);
              vec3 baseNuvem = mix(mix(baseDia, basePor, uEntardecer), uTopo * 0.76, uNoite * 0.88);

              vec3 topoDia = vec3(1.05, 1.03, 1.00) * mix(vec3(1.0), uSolCor, 0.28);
              vec3 topoPor = mix(uNevoaSol * 1.15, uSolCor * 1.12, 0.55);
              vec3 topoNoite = uHorizonte * 1.06;
              vec3 topoNuvem = mix(mix(topoDia, topoPor, uEntardecer), topoNoite, uNoite * 0.88);

              vec3 corNuvem = mix(baseNuvem, topoNuvem, luzDirecional);
              // Borda iluminada (golden lining no entardecer, silver lining de dia, contorno lunar suave à noite)
              float scatterRim = pow(sunDot, mix(7.0, 3.8, uEntardecer)) * (0.38 + 0.82 * bordaFina);
              corNuvem += uSolCor * scatterRim * mix(0.32, 0.72, uEntardecer) * (1.0 - uNoite * 0.72);
              corNuvem += uSolCor * pow(sunDot, 12.0) * 0.18 * uNoite;

              ceu = mix(ceu, corNuvem, cob * mix(0.68, 0.42, uNoite));
            }

            // Radiância física para AgX: céu diurno luminoso, entardecer fotográfico e noite azul-profundo preservada
            float rad = mix(1.30, 1.14, uEntardecer);
            rad = mix(rad, 0.96, uNoite);
            gl_FragColor = vec4(ceu * rad, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `}),[]),r=(0,J.useRef)(null),i=(0,J.useMemo)(()=>new P,[]);W(({camera:e},o)=>{let s=G(S.t);Mn(s.altSol,i,s.entardecer,s.noite),n.uniforms.uTopo.value.copy(s.ceuTopo),n.uniforms.uMeio.value.copy(s.ceuMeio),n.uniforms.uHorizonte.value.copy(s.ceuHorizonte),n.uniforms.uNevoaSol.value.copy(s.nevoaSol),n.uniforms.uSolCor.value.copy(s.sol),n.uniforms.uSunDir.value.copy(i),n.uniforms.uEntardecer.value=s.entardecer,n.uniforms.uNoite.value=s.noite,n.uniforms.uLeve.value=+!!t,c.reduzirMovimento||(n.uniforms.uTempo.value+=Math.min(o,.05)),r.current&&(r.current.visible=s.noite>.42),a.current?.position.copy(e.position)});let a=(0,J.useRef)(null);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`mesh`,{ref:a,material:n,renderOrder:-1,frustumCulled:!1,children:(0,Y.jsx)(`sphereGeometry`,{args:[1200,32,16]})}),(0,Y.jsx)(`group`,{ref:r,children:(0,Y.jsx)(bn,{radius:700,depth:120,count:e,factor:8,saturation:0,fade:!0,speed:0})})]})}function lr({leve:e}){let t=(0,J.useRef)(null),[n,r]=(0,J.useState)(null);(0,J.useEffect)(()=>{let e=!0;return q(()=>import(`./Agua-DSxMXdRa.js`).then(e=>e.t).then(t=>{e&&r({distanciaAgua:t.distanciaAgua,naFaixaPonte:t.naFaixaPonte})}),__vite__mapDeps([0,1,2]),import.meta.url),()=>{e=!1}},[]);let i=(0,J.useMemo)(()=>{if(!n)return null;let{distanciaAgua:t,naFaixaPonte:r}=n,i=[];for(let e=-120;e<=160;e+=16)for(let n of[15.6,28.4]){if(r(e,n,3)||t(e,n)<5)continue;let a=n<22?n+1.35:n-1.35;i.push({x:e,z:a,rx:13.5,rz:10.5,ganho:1,varTom:Math.abs(e*13+Math.round(n*7))%17/17*2-1})}if(!e){for(let[e,t,n,r,a]of[[0,14.4,15,8.5,.78],[46,13.8,12.5,7.5,.82],[66,13.8,12.5,7.5,.82],[88,13.8,13,7.5,.8],[112,13.8,13,7.5,.82]])i.push({x:e,z:t,rx:n,rz:r,ganho:a,varTom:.25});let e=[22,-70,100],n=[-34,33,136,-116];for(let a of e)for(let e of n)a!==22&&(r(e,a,6)||t(e,a)<8||i.push({x:e,z:a,rx:16,rz:16,ganho:.65,varTom:-.2}))}let a=e?2:6,o=new b(1,1,a,a);o.rotateX(-Math.PI/2);let s=new N;s.index=o.index,s.attributes.position=o.attributes.position,s.attributes.uv=o.attributes.uv;let c=i.length,l=new Float32Array(c*4),u=new Float32Array(c*2);for(let e=0;e<c;e++){let t=i[e];l[e*4+0]=t.x,l[e*4+1]=t.z,l[e*4+2]=t.rx,l[e*4+3]=t.rz,u[e*2+0]=t.ganho,u[e*2+1]=t.varTom}return s.setAttribute(`aPosEsc`,new L(l,4)),s.setAttribute(`aMeta`,new L(u,2)),s.instanceCount=c,s.boundingSphere=new z(new P(20,0,20),300),o.dispose(),{geo:s,mat:new R({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,fog:!1,uniforms:{uForca:{value:0},uNoite:{value:0}},vertexShader:`
        attribute vec4 aPosEsc;
        attribute vec2 aMeta;

        varying vec2 vUv;
        varying vec2 vMeta;
        varying float vDist;

        void main() {
          vUv = uv;
          vMeta = aMeta;

          vec3 wPos = vec3(
            aPosEsc.x + position.x * aPosEsc.z,
            0.0,
            aPosEsc.y + position.z * aPosEsc.w
          );

          // Ajusta altura exata sobre a pista (y=0.03) vs calçada elevada (y=0.18) nas vias principais/transversais
          float naRuaX1 = smoothstep(16.75, 17.25, wPos.z) * (1.0 - smoothstep(26.75, 27.25, wPos.z));
          float naRuaX2 = smoothstep(-75.25, -74.75, wPos.z) * (1.0 - smoothstep(-65.25, -64.75, wPos.z));
          float naRuaX3 = smoothstep(94.75, 95.25, wPos.z) * (1.0 - smoothstep(104.75, 105.25, wPos.z));
          float naRuaZ1 = smoothstep(-38.25, -37.75, wPos.x) * (1.0 - smoothstep(-30.25, -29.75, wPos.x));
          float naRuaZ2 = smoothstep(28.75, 29.25, wPos.x) * (1.0 - smoothstep(36.75, 37.25, wPos.x));
          float naRuaZ3 = smoothstep(131.75, 132.25, wPos.x) * (1.0 - smoothstep(139.75, 140.25, wPos.x));
          float naRua = max(max(naRuaX1, max(naRuaX2, naRuaX3)), max(naRuaZ1, max(naRuaZ2, naRuaZ3)));
          wPos.y = mix(0.205, 0.068, naRua);

          vDist = length(wPos - cameraPosition);
          gl_Position = projectionMatrix * viewMatrix * vec4(wPos, 1.0);
        }
      `,fragmentShader:`
        uniform float uForca;
        uniform float uNoite;

        varying vec2 vUv;
        varying vec2 vMeta;
        varying float vDist;

        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float r2 = dot(p, p);
          if (r2 >= 1.0) discard;

          // Queda física suave (núcleo dourado sob a luminária + halo âmbar largo que se dissolve sem borda dura)
          float r = sqrt(r2);
          float nucleo = exp(-r2 * 6.8);
          float halo = exp(-r2 * 2.35) * (1.0 - smoothstep(0.55, 1.0, r));
          float curva = nucleo * 0.62 + halo * 0.52;

          // Leve variação de temperatura (2600K–3000K) entre postes para naturalidade fotográfica
          vec3 corNucleo = vec3(1.0, 0.80, 0.48) + vec3(0.0, 0.03, 0.05) * vMeta.y;
          vec3 corHalo = vec3(0.95, 0.56, 0.22);
          vec3 cor = mix(corHalo, corNucleo, clamp(nucleo * 1.15, 0.0, 1.0));

          // Dissolução atmosférica à distância (em AdditiveBlending: decair para 0 em vez de misturar fogColor)
          float fadeDist = exp(-max(0.0, vDist - 120.0) * 0.0042);
          float intens = uForca * vMeta.x * mix(0.32, 0.56, uNoite) * fadeDist;

          gl_FragColor = vec4(cor * (curva * intens), 1.0);
        }
      `})}},[n,e]);return(0,J.useEffect)(()=>{if(i)return()=>{i.geo.dispose(),i.mat.dispose()}},[i]),W(()=>{let e=t.current;if(!e||!i)return;let n=G(S.t),r=n.luzes;e.visible=r>.01,e.visible&&(i.mat.uniforms.uForca.value=r,i.mat.uniforms.uNoite.value=n.noite)}),i?(0,Y.jsx)(`mesh`,{ref:t,geometry:i.geo,material:i.mat,frustumCulled:!1,renderOrder:2}):null}function ur({sombras:e,leve:t}){let n=(0,J.useRef)(null),r=(0,J.useRef)(null),i=(0,J.useRef)(null),a=I(e=>e.scene),s=I(e=>e.camera),u=I(e=>e.gl),d=(0,J.useMemo)(()=>new P,[]),f=(0,J.useMemo)(()=>new l,[]),p=(0,J.useMemo)(()=>new l,[]),m=(0,J.useMemo)(()=>new l,[]);return(0,J.useEffect)(()=>{a.environmentRotation.set(0,wn,0)},[a]),W((e,l)=>{let h=S.t,g=G(h),_=.025*o(2.98,3.22,h)*(1-o(4.92,5.1,h)),v=g.exposicao+_;if(i.current===null||c.reduzirMovimento)i.current=v;else{let e=1-Math.exp(-3.4*Math.min(l,.05));i.current+=(v-i.current)*e}u.toneMappingExposure=i.current,Mn(g.altSol,d,g.entardecer,g.noite),n.current&&(n.current.position.copy(ar).addScaledVector(d,210),n.current.target.position.copy(ar),n.current.target.updateMatrixWorld(),n.current.color.copy(g.sol),n.current.intensity=g.solInt,n.current.shadow.radius=2.6+1.5*g.entardecer+.6*g.noite),r.current&&(f.copy(g.ceuTopo).lerp(g.ceuMeio,.35+.15*g.entardecer),r.current.color.copy(f),r.current.groundColor.copy(g.chao),r.current.intensity=g.amb),a.environmentIntensity=g.env*(.36-.08*g.entardecer-.06*g.noite),a.environmentRotation.set(0,wn-1.48*g.entardecer-2.1*g.noite,0);let y=1.04+.04*g.entardecer-.08*g.noite;p.copy(g.nevoa).multiplyScalar(y),m.copy(g.nevoaSol).multiplyScalar(y+.06*g.entardecer);let b=Math.max(0,s.position.y-70);if(a.fog){let e=a.fog;e.color.copy(p),e.near=185+b*3,e.far=780+b*7.5}let x=(.0017+32e-5*g.entardecer-28e-5*g.noite)/(1+b*.015);Nn({dirSol:d,corSolNevoa:m,densidade:x,decaimentoAltura:.024+.004*g.entardecer,nevoaMax:.84+.04*g.entardecer,potenciaMie:3.4-1.05*g.entardecer+.8*g.noite,baseAltura:-2,forcaMie:.72+.22*g.entardecer-.26*g.noite,entardecer:g.entardecer,noite:g.noite,reforcoHorizonte:.35+.45*g.entardecer,leve:t}),Fe(g.luzes)}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`hemisphereLight`,{ref:r,args:[`#568ed4`,`#3c3d37`,.34]}),(0,Y.jsx)(`directionalLight`,{ref:n,castShadow:e,"shadow-mapSize":[2048,2048],"shadow-bias":-26e-5,"shadow-normalBias":.055,"shadow-radius":2.6,"shadow-blurSamples":12,"shadow-camera-left":-115,"shadow-camera-right":115,"shadow-camera-top":115,"shadow-camera-bottom":-115,"shadow-camera-near":15,"shadow-camera-far":520})]})}function dr({aoPronto:e}){return(0,J.useEffect)(()=>{ue(),e()},[e]),null}function fr(){let e=I(e=>e.gl),t=I(e=>e.scene),n=I(e=>e.camera);return(0,J.useEffect)(()=>{let r=window.setTimeout(()=>{e.compileAsync(t,n).catch(()=>{})},400);return()=>clearTimeout(r)},[e,t,n]),null}function pr(){return(0,J.useEffect)(()=>{let e=window.setTimeout(()=>{q(()=>import(`./ApartamentoPBR-Cg2HqLEC.js`),__vite__mapDeps([10,1,5,6,2,4,7,8]),import.meta.url)},2800);return()=>clearTimeout(e)},[]),null}function mr(){return typeof window>`u`?!1:window.matchMedia(`(max-width: 768px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024}function hr(){let[e]=(0,J.useState)(mr),[n,r]=(0,J.useState)(()=>mr()?`baixa`:`alta`),[i,a]=(0,J.useState)(!1),o=typeof window<`u`?window.location.search:``,c=e||n===`baixa`,l=(0,J.useRef)(0);(0,J.useEffect)(()=>{i&&!l.current&&(l.current=performance.now())},[i]);let d=n===`alta`&&!e&&!o.includes(`sempos`),f=e?`hdri/kloofendal_48d_partly_cloudy_puresky_512.hdr`:`hdri/kloofendal_48d_partly_cloudy_puresky_1k.hdr`;return(0,Y.jsxs)(Ge,{shadows:!c&&{type:1},dpr:e?[.75,1]:n===`baixa`?[1,1.25]:[1,2],gl:{antialias:!c,powerPreference:`high-performance`,stencil:!1},camera:{fov:38,near:.1,far:2600,position:[95,70,135]},onCreated:({gl:e})=>{e.toneMapping=Gn?6:4,e.toneMappingExposure=.84;let n=s,r=n.onProgress;n.onProgress=(e,n,i)=>{typeof r==`function`&&r(e,n,i),!t.aberturaPronta&&i&&m(n/i*100)}},children:[(0,Y.jsx)(Cn,{flipflops:3,onDecline:()=>{l.current&&performance.now()-l.current>12e3&&r(`baixa`)}}),(0,Y.jsx)(xn,{}),(0,Y.jsx)(qn,{leve:c}),(0,Y.jsx)(`fog`,{attach:`fog`,args:[`#b1cae2`,185,780]}),(0,Y.jsx)(cr,{estrelasQtd:c?400:2500,leve:c}),(0,Y.jsx)(ur,{sombras:!c,leve:c}),(0,Y.jsx)(sr,{}),(0,Y.jsx)(Wn,{leve:c}),(0,Y.jsxs)(J.Suspense,{fallback:null,children:[(0,Y.jsx)(_n,{files:u(f),background:!1,environmentRotation:[0,wn,0]}),(0,Y.jsx)(Bn,{leve:c}),(0,Y.jsx)(dr,{aoPronto:()=>a(!0)})]}),i&&(0,Y.jsxs)(J.Suspense,{fallback:null,children:[(0,Y.jsx)(Zn,{}),!o.includes(`semagua`)&&(0,Y.jsx)(Yn,{qualidade:c?`baixa`:n}),(0,Y.jsx)(Xn,{}),(0,Y.jsx)(lr,{leve:c}),(0,Y.jsx)(Qn,{}),(0,Y.jsx)(ir,{de:1.6,ate:4.5,children:(0,Y.jsx)(er,{})}),(0,Y.jsx)(ir,{de:3.7,ate:5.75,children:(0,Y.jsx)($n,{})}),(0,Y.jsx)(ir,{de:.7,ate:8,children:(0,Y.jsx)(tr,{})}),(0,Y.jsx)(nr,{}),(0,Y.jsx)(pr,{}),(0,Y.jsx)(fr,{})]}),d&&i&&(0,Y.jsx)(J.Suspense,{fallback:null,children:(0,Y.jsx)(rr,{ativo:!0})})]})}export{hr as default,Ke as i,Gn as n,Tt as r,Jn as t};