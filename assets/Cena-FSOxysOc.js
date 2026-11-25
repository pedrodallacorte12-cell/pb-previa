const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Agua-CoZg6oaY.js","./events-e51d7528.esm-LHO7OEip.js","./roteiro-BchlzkjK.js","./Cidade-CuYrq3xy.js","./conteudo-gWdI1uBP.js","./index-CWCdXYYb.js","./Gltf-nN8Mjbe2.js","./constants-BqlKFZjA.js","./materiais-ClDzC8vP.js","./index-HiSVJWdh.css","./Montanhas-Cjs00Qtg.js","./ApartamentoPBR-DvQQEVDN.js","./ProjetosExtras-BTgzd9Tg.js","./Clicaveis-q-WG7lgt.js","./ExplorarCidade-B4EuM7Tp.js","./PosProcesso-DMqpLgrc.js"])))=>i.map(i=>d[i]);
import{$ as e,$n as t,$t as n,At as r,B as i,Bn as a,Ct as o,F as s,Gt as c,H as l,Hn as u,Ht as d,I as f,In as p,Jn as m,Kn as h,Ln as g,On as _,Pn as v,Q as y,R as b,S as x,Sn as S,St as C,Tn as w,Tt as T,U as E,V as D,X as O,Xt as k,Zn as A,_ as j,a as M,an as ee,ar as N,at as P,b as F,bn as te,bt as I,c as ne,ct as re,d as ie,f as ae,fn as oe,g as se,h as L,hn as R,i as ce,in as le,ir as ue,j as de,jt as fe,kn as pe,l as me,lr as he,m as z,n as ge,nn as _e,nt as B,o as ve,on as V,or as H,ot as ye,p as U,r as be,rr as xe,rt as Se,s as Ce,sn as we,sr as Te,t as Ee,tr as De,u as W,un as Oe,ur as ke,v as Ae,vt as G,x as je,y as Me,yt as Ne}from"./events-e51d7528.esm-LHO7OEip.js";import{t as K}from"./constants-BqlKFZjA.js";import{a as Pe,c as Fe,l as Ie}from"./roteiro-BchlzkjK.js";import{t as Le}from"./materiais-ClDzC8vP.js";import{g as q,v as Re}from"./index-CWCdXYYb.js";var J=ke(Te(),1);function ze(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}function Be({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){let i=n||(typeof window>`u`?class{}:window.ResizeObserver);if(!i)throw Error(`This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills`);let[a,o]=(0,J.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),s=(0,J.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:a,orientationHandler:null}),c=e?typeof e==`number`?e:e.scroll:null,l=e?typeof e==`number`?e:e.resize:null,u=(0,J.useRef)(!1);(0,J.useEffect)(()=>(u.current=!0,()=>void(u.current=!1)));let[d,f,p]=(0,J.useMemo)(()=>{let e=()=>{if(!s.current.element)return;let{left:e,top:t,width:n,height:i,bottom:a,right:c,x:l,y:d}=s.current.element.getBoundingClientRect(),f={left:e,top:t,width:n,height:i,bottom:a,right:c,x:l,y:d};s.current.element instanceof HTMLElement&&r&&(f.height=s.current.element.offsetHeight,f.width=s.current.element.offsetWidth),Object.freeze(f),u.current&&!Ge(s.current.lastBounds,f)&&o(s.current.lastBounds=f)};return[e,l?ze(e,l):e,c?ze(e,c):e]},[o,r,c,l]);function m(){s.current.scrollContainers&&(s.current.scrollContainers.forEach(e=>e.removeEventListener(`scroll`,p,!0)),s.current.scrollContainers=null),s.current.resizeObserver&&(s.current.resizeObserver.disconnect(),s.current.resizeObserver=null),s.current.orientationHandler&&(`orientation`in screen&&`removeEventListener`in screen.orientation?screen.orientation.removeEventListener(`change`,s.current.orientationHandler):`onorientationchange`in window&&window.removeEventListener(`orientationchange`,s.current.orientationHandler))}function h(){s.current.element&&(s.current.resizeObserver=new i(p),s.current.resizeObserver.observe(s.current.element),t&&s.current.scrollContainers&&s.current.scrollContainers.forEach(e=>e.addEventListener(`scroll`,p,{capture:!0,passive:!0})),s.current.orientationHandler=()=>{p()},`orientation`in screen&&`addEventListener`in screen.orientation?screen.orientation.addEventListener(`change`,s.current.orientationHandler):`onorientationchange`in window&&window.addEventListener(`orientationchange`,s.current.orientationHandler))}return He(p,!!t),Ve(f),(0,J.useEffect)(()=>{m(),h()},[t,p,f]),(0,J.useEffect)(()=>m,[]),[e=>{!e||e===s.current.element||(m(),s.current.element=e,s.current.scrollContainers=Ue(e),h())},a,d]}function Ve(e){(0,J.useEffect)(()=>{let t=e;return window.addEventListener(`resize`,t),()=>void window.removeEventListener(`resize`,t)},[e])}function He(e,t){(0,J.useEffect)(()=>{if(t){let t=e;return window.addEventListener(`scroll`,t,{capture:!0,passive:!0}),()=>void window.removeEventListener(`scroll`,t,!0)}},[e,t])}function Ue(e){let t=[];if(!e||e===document.body)return t;let{overflow:n,overflowX:r,overflowY:i}=window.getComputedStyle(e);return[n,r,i].some(e=>e===`auto`||e===`scroll`)&&t.push(e),[...t,...Ue(e.parentElement)]}var We=[`x`,`y`,`top`,`bottom`,`left`,`right`,`width`,`height`],Ge=(e,t)=>We.every(n=>e[n]===t[n]),Y=pe();H();function Ke({ref:e,children:t,fallback:n,resize:r,style:i,gl:a,events:o=ce,eventSource:s,eventPrefix:c,shadows:l,linear:u,flat:d,legacy:f,orthographic:p,frameloop:m,dpr:h,performance:g,raycaster:_,camera:v,scene:y,onPointerMissed:b,onCreated:S,...C}){J.useMemo(()=>Ce(x),[]);let w=me(),[T,E]=Be({scroll:!0,debounce:{scroll:50,resize:0},...r}),D=J.useRef(null),O=J.useRef(null);J.useImperativeHandle(e,()=>D.current);let k=z(b),A=J.useCallback(e=>k.current==null?void 0:k.current(e),[k]),[j,M]=J.useState(!1),[ee,N]=J.useState(!1);if(j)throw j;if(ee)throw ee;let P=J.useRef(null),[F,te]=ie(),I=J.useRef(null),re=()=>s?ne(s)?s.current:s:O.current;return J.useInsertionEffect(()=>()=>{let e=P.current;P.current=null,e?.unmount()},[]),ae(()=>{let e=D.current;E.width>0&&E.height>0&&e&&(P.current||=ve(e),P.current.configure({gl:a,scene:y,events:o,shadows:l,linear:u,flat:d,legacy:f,orthographic:p,frameloop:m,dpr:h,performance:g,raycaster:_,camera:v,size:E,onPointerMissed:A,onCreated:e=>{I.current=e,e.events.connect==null||e.events.connect(re()??O.current),c&&e.setEvents({compute:(e,t)=>{let n=e[c+`X`],r=e[c+`Y`];t.pointer.set(n/t.size.width*2-1,-(r/t.size.height)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),S?.(e)}}).catch(N),P.current.ready.status===`fulfilled`?P.current.render((0,Y.jsx)(w,{children:(0,Y.jsx)(ge,{set:N,children:(0,Y.jsx)(J.Suspense,{fallback:(0,Y.jsx)(Ee,{set:M}),children:t??null})})})):P.current.ready.status===`pending`&&te(P.current.ready))}),J.useEffect(()=>{let e=I.current?.get(),t=re();e&&t&&e.events.connected!==t&&(e.events.connect==null||e.events.connect(t))}),J.useEffect(()=>{let e=D.current;return()=>{var t;e.isConnected||(t=P.current)==null||t.unmount()}},[]),(0,Y.jsxs)(`div`,{ref:O,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,pointerEvents:s?`none`:`auto`,...i},...C,children:[(0,Y.jsx)(`div`,{ref:T,style:{width:`100%`,height:`100%`},children:(0,Y.jsx)(`canvas`,{ref:D,style:{display:`block`},children:n})}),F]})}function qe(e){return(0,Y.jsx)(se,{children:(0,Y.jsx)(Ke,{...e})})}function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Je.apply(null,arguments)}var X=Uint8Array,Ye=Uint16Array,Xe=Uint32Array,Ze=new X([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qe=new X([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$e=new X([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),et=function(e,t){for(var n=new Ye(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Xe(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},tt=et(Ze,2),nt=tt[0],rt=tt[1];nt[28]=258,rt[258]=28;var it=et(Qe,0),at=it[0];it[1];for(var ot=new Ye(32768),Z=0;Z<32768;++Z){var st=(Z&43690)>>>1|(Z&21845)<<1;st=(st&52428)>>>2|(st&13107)<<2,st=(st&61680)>>>4|(st&3855)<<4,ot[Z]=((st&65280)>>>8|(st&255)<<8)>>>1}for(var ct=(function(e,t,n){for(var r=e.length,i=0,a=new Ye(t);i<r;++i)++a[e[i]-1];var o=new Ye(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Ye(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[ot[d]>>>c]=l}else for(s=new Ye(r),i=0;i<r;++i)e[i]&&(s[i]=ot[o[e[i]-1]++]>>>15-e[i]);return s}),lt=new X(288),Z=0;Z<144;++Z)lt[Z]=8;for(var Z=144;Z<256;++Z)lt[Z]=9;for(var Z=256;Z<280;++Z)lt[Z]=7;for(var Z=280;Z<288;++Z)lt[Z]=8;for(var ut=new X(32),Z=0;Z<32;++Z)ut[Z]=5;var dt=ct(lt,9,1),ft=ct(ut,5,1),pt=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Q=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},mt=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},ht=function(e){return(e/8|0)+(e&7&&1)},gt=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e instanceof Ye?Ye:e instanceof Xe?Xe:X)(n-t);return r.set(e.subarray(t,n)),r},_t=function(e,t,n){var r=e.length;if(!r||n&&!n.l&&r<5)return t||new X(0);var i=!t||n,a=!n||n.i;n||={},t||=new X(r*3);var o=function(e){var n=t.length;if(e>n){var r=new X(Math.max(n*2,e));r.set(t),t=r}},s=n.f||0,c=n.p||0,l=n.b||0,u=n.l,d=n.d,f=n.m,p=n.n,m=r*8;do{if(!u){n.f=s=Q(e,c,1);var h=Q(e,c+1,3);if(c+=3,!h){var g=ht(c)+4,_=e[g-4]|e[g-3]<<8,v=g+_;if(v>r){if(a)throw`unexpected EOF`;break}i&&o(l+_),t.set(e.subarray(g,v),l),n.b=l+=_,n.p=c=v*8;continue}if(h==1)u=dt,d=ft,f=9,p=5;else if(h==2){var y=Q(e,c,31)+257,b=Q(e,c+10,15)+4,x=y+Q(e,c+5,31)+1;c+=14;for(var S=new X(x),C=new X(19),w=0;w<b;++w)C[$e[w]]=Q(e,c+w*3,7);c+=b*3;for(var T=pt(C),E=(1<<T)-1,D=ct(C,T,1),w=0;w<x;){var O=D[Q(e,c,E)];c+=O&15;var g=O>>>4;if(g<16)S[w++]=g;else{var k=0,A=0;for(g==16?(A=3+Q(e,c,3),c+=2,k=S[w-1]):g==17?(A=3+Q(e,c,7),c+=3):g==18&&(A=11+Q(e,c,127),c+=7);A--;)S[w++]=k}}var j=S.subarray(0,y),M=S.subarray(y);f=pt(j),p=pt(M),u=ct(j,f,1),d=ct(M,p,1)}else throw`invalid block type`;if(c>m){if(a)throw`unexpected EOF`;break}}i&&o(l+131072);for(var ee=(1<<f)-1,N=(1<<p)-1,P=c;;P=c){var k=u[mt(e,c)&ee],F=k>>>4;if(c+=k&15,c>m){if(a)throw`unexpected EOF`;break}if(!k)throw`invalid length/literal`;if(F<256)t[l++]=F;else if(F==256){P=c,u=null;break}else{var te=F-254;if(F>264){var w=F-257,I=Ze[w];te=Q(e,c,(1<<I)-1)+nt[w],c+=I}var ne=d[mt(e,c)&N],re=ne>>>4;if(!ne)throw`invalid distance`;c+=ne&15;var M=at[re];if(re>3){var I=Qe[re];M+=mt(e,c)&(1<<I)-1,c+=I}if(c>m){if(a)throw`unexpected EOF`;break}i&&o(l+131072);for(var ie=l+te;l<ie;l+=4)t[l]=t[l-M],t[l+1]=t[l+1-M],t[l+2]=t[l+2-M],t[l+3]=t[l+3-M];l=ie}}n.l=u,n.p=P,n.b=l,u&&(s=1,n.m=f,n.d=d,n.n=p)}while(!s);return l==t.length?t:gt(t,0,l)},vt=new X(0),yt=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw`invalid zlib data`;if(e[1]&32)throw`invalid zlib data: preset dictionaries not supported`};function bt(e,t){return _t((yt(e),e.subarray(2,-4)),t)}var xt=typeof TextDecoder<`u`&&new TextDecoder;try{xt.decode(vt,{stream:!0})}catch{}var St=e=>e&&e.isCubeTexture,Ct=class extends r{constructor(e,t){let n=St(e),r=((n?e.image[0]?.width:e.image.width)??1024)/4,i=Math.floor(Math.log2(r)),a=2**i,o=3*Math.max(a,112),s=4*a,c=[n?`#define ENVMAP_TYPE_CUBE`:``,`#define CUBEUV_TEXEL_WIDTH ${1/o}`,`#define CUBEUV_TEXEL_HEIGHT ${1/s}`,`#define CUBEUV_MAX_MIP ${i}.0`].join(`
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
            #include <${K>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
        `,l={map:{value:e},height:{value:t?.height||15},radius:{value:t?.radius||100}},u=new Se(1,16),d=new V({uniforms:l,fragmentShader:c,vertexShader:`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,side:2});super(u,d)}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}},wt=class extends D{constructor(e){super(e),this.type=B}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.RGBELoader: Read Error: `+(t||``));case 2:throw Error(`THREE.RGBELoader: Write Error: `+(t||``));case 3:throw Error(`THREE.RGBELoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.RGBELoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;)if(c.string+=l+`
`,l.charAt(0)===`#`)c.comments+=l+`
`;else if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break;return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=l.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=l.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=l.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=l.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let c=r(s),u=c.width,d=c.height,f=i(s.subarray(s.pos),u,d),p,m,h;switch(this.type){case y:h=f.length/4;let e=new Float32Array(h*4);for(let t=0;t<h;t++)a(f,t*4,e,t*4);p=e,m=y;break;case B:h=f.length/4;let t=new Uint16Array(h*4);for(let e=0;e<h;e++)o(f,e*4,t,e*4);p=t,m=B;break;default:throw Error(`THREE.RGBELoader: Unsupported type: `+this.type)}return{width:u,height:d,data:p,header:c.string,gamma:c.gamma,exposure:c.exposure,type:m}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case y:case B:`colorSpace`in e?e.colorSpace=`srgb-linear`:e.encoding=3e3,e.minFilter=G,e.magFilter=G,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}return super.load(e,i,n,r)}},Tt=K>=152,Et=class extends D{constructor(e){super(e),this.type=B}parse(e){let t=65536,r=8192,i=65537,a=16384,o=16383,s=65535,c=2.7182818**2.2;function u(e,n){for(var r=0,i=0;i<t;++i)(i==0||e[i>>3]&1<<(i&7))&&(n[r++]=i);for(var a=r-1;r<t;)n[r++]=0;return a}function d(e){for(var t=0;t<a;t++)e[t]={},e[t].len=0,e[t].lit=0,e[t].p=null}let f={l:0,c:0,lc:0};function p(e,t,n,r,i){for(;n<e;)t=t<<8|ge(r,i),n+=8;n-=e,f.l=t>>n&(1<<e)-1,f.c=t,f.lc=n}let m=Array(59);function h(e){for(var t=0;t<=58;++t)m[t]=0;for(var t=0;t<i;++t)m[e[t]]+=1;for(var n=0,t=58;t>0;--t){var r=n+m[t]>>1;m[t]=n,n=r}for(var t=0;t<i;++t){var a=e[t];a>0&&(e[t]=a|m[a]++<<6)}}function g(e,t,n,r,i,a,o){for(var s=n,c=0,l=0;i<=a;i++){if(s.value-n.value>r)return!1;p(6,c,l,e,s);var u=f.l;if(c=f.c,l=f.lc,o[i]=u,u==63){if(s.value-n.value>r)throw`Something wrong with hufUnpackEncTable`;p(8,c,l,e,s);var d=f.l+6;if(c=f.c,l=f.lc,i+d>a+1)throw`Something wrong with hufUnpackEncTable`;for(;d--;)o[i++]=0;i--}else if(u>=59){var d=u-59+2;if(i+d>a+1)throw`Something wrong with hufUnpackEncTable`;for(;d--;)o[i++]=0;i--}}h(o)}function _(e){return e&63}function v(e){return e>>6}function b(e,t,n,r){for(;t<=n;t++){var i=v(e[t]),a=_(e[t]);if(i>>a)throw`Invalid table entry`;if(a>14){var o=r[i>>a-14];if(o.len)throw`Invalid table entry`;if(o.lit++,o.p){var s=o.p;o.p=Array(o.lit);for(var c=0;c<o.lit-1;++c)o.p[c]=s[c]}else o.p=[,];o.p[o.lit-1]=t}else if(a)for(var l=0,c=1<<14-a;c>0;c--){var o=r[(i<<14-a)+l];if(o.len||o.p)throw`Invalid table entry`;o.len=a,o.lit=t,l++}}return!0}let x={c:0,lc:0};function S(e,t,n,r){e=e<<8|ge(n,r),t+=8,x.c=e,x.lc=t}let C={c:0,lc:0};function w(e,t,n,r,i,a,o,s,c,l){if(e==t){r<8&&(S(n,r,i,o),n=x.c,r=x.lc),r-=8;var u=n>>r,u=new Uint8Array([u])[0];if(c.value+u>l)return!1;for(var d=s[c.value-1];u-->0;)s[c.value++]=d}else if(c.value<l)s[c.value++]=e;else return!1;C.c=n,C.lc=r}function T(e){return e&65535}function E(e){var t=T(e);return t>32767?t-65536:t}let D={a:0,b:0};function O(e,t){var n=E(e),r=E(t),i=n+(r&1)+(r>>1),a=i,o=i-r;D.a=a,D.b=o}function k(e,t){var n=T(e),r=T(t),i=n-(r>>1)&s,a=r+i-32768&s;D.a=a,D.b=i}function A(e,t,n,r,i,a,o){for(var s=o<16384,c=n>i?i:n,l=1,u;l<=c;)l<<=1;for(l>>=1,u=l,l>>=1;l>=1;){for(var d=0,f=d+a*(i-u),p=a*l,m=a*u,h=r*l,g=r*u,_,v,y,b;d<=f;d+=m){for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h,w=x+p,T=w+h;s?(O(e[x+t],e[w+t]),_=D.a,y=D.b,O(e[C+t],e[T+t]),v=D.a,b=D.b,O(_,v),e[x+t]=D.a,e[C+t]=D.b,O(y,b),e[w+t]=D.a,e[T+t]=D.b):(k(e[x+t],e[w+t]),_=D.a,y=D.b,k(e[C+t],e[T+t]),v=D.a,b=D.b,k(_,v),e[x+t]=D.a,e[C+t]=D.b,k(y,b),e[w+t]=D.a,e[T+t]=D.b)}if(n&l){var w=x+p;s?O(e[x+t],e[w+t]):k(e[x+t],e[w+t]),_=D.a,e[w+t]=D.b,e[x+t]=_}}if(i&l)for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h;s?O(e[x+t],e[C+t]):k(e[x+t],e[C+t]),_=D.a,e[C+t]=D.b,e[x+t]=_}u=l,l>>=1}return d}function j(e,t,n,r,i,a,s,c,l,u){for(var d=0,f=0,p=c,m=Math.trunc(i.value+(a+7)/8);i.value<m;)for(S(d,f,n,i),d=x.c,f=x.lc;f>=14;){var h=t[d>>f-14&o];if(h.len)f-=h.len,w(h.lit,s,d,f,n,r,i,l,u,p),d=C.c,f=C.lc;else{if(!h.p)throw`hufDecode issues`;for(var g=0;g<h.lit;g++){for(var y=_(e[h.p[g]]);f<y&&i.value<m;)S(d,f,n,i),d=x.c,f=x.lc;if(f>=y&&v(e[h.p[g]])==(d>>f-y&(1<<y)-1)){f-=y,w(h.p[g],s,d,f,n,r,i,l,u,p),d=C.c,f=C.lc;break}}if(g==h.lit)throw`hufDecode issues`}}var b=8-a&7;for(d>>=b,f-=b;f>0;){var h=t[d<<14-f&o];if(h.len)f-=h.len,w(h.lit,s,d,f,n,r,i,l,u,p),d=C.c,f=C.lc;else throw`hufDecode issues`}return!0}function M(e,t,n,r,o,s){var c={value:0},l=n.value,u=z(t,n),f=z(t,n);n.value+=4;var p=z(t,n);if(n.value+=4,u<0||u>=i||f<0||f>=i)throw`Something wrong with HUF_ENCSIZE`;var m=Array(i),h=Array(a);if(d(h),g(e,t,n,r-(n.value-l),u,f,m),p>8*(r-(n.value-l)))throw`Something wrong with hufUncompress`;b(m,u,f,h),j(m,h,e,t,n,p,f,s,o,c)}function ee(e,t,n){for(var r=0;r<n;++r)t[r]=e[t[r]]}function N(e){for(var t=1;t<e.length;t++){var n=e[t-1]+e[t]-128;e[t]=n}}function P(e,t){for(var n=0,r=Math.floor((e.length+1)/2),i=0,a=e.length-1;!(i>a||(t[i++]=e[n++],i>a));)t[i++]=e[r++]}function F(e){for(var t=e.byteLength,n=[],r=0,i=new DataView(e);t>0;){var a=i.getInt8(r++);if(a<0){var o=-a;t-=o+1;for(var s=0;s<o;s++)n.push(i.getUint8(r++))}else{var o=a;t-=2;for(var c=i.getUint8(r++),s=0;s<o+1;s++)n.push(c)}}return n}function te(e,t,n,r,i,a){var o=new DataView(a.buffer),s=n[e.idx[0]].width,c=n[e.idx[0]].height,l=3,u=Math.floor(s/8),d=Math.ceil(s/8),f=Math.ceil(c/8),p=s-(d-1)*8,m=c-(f-1)*8,h={value:0},g=Array(l),_=Array(l),v=Array(l),y=Array(l),b=Array(l);for(let n=0;n<l;++n)b[n]=t[e.idx[n]],g[n]=n<1?0:g[n-1]+d*f,_[n]=new Float32Array(64),v[n]=new Uint16Array(64),y[n]=new Uint16Array(d*64);for(let t=0;t<f;++t){var x=8;t==f-1&&(x=m);var S=8;for(let e=0;e<d;++e){e==d-1&&(S=p);for(let e=0;e<l;++e)v[e].fill(0),v[e][0]=i[g[e]++],I(h,r,v[e]),ne(v[e],_[e]),re(_[e]);ie(_);for(let t=0;t<l;++t)ae(_[t],y[t],e*64)}let a=0;for(let r=0;r<l;++r){let i=n[e.idx[r]].type;for(let e=8*t;e<8*t+x;++e){a=b[r][e];for(let t=0;t<u;++t){let n=t*64+(e&7)*8;o.setUint16(a+0*i,y[r][n+0],!0),o.setUint16(a+2*i,y[r][n+1],!0),o.setUint16(a+4*i,y[r][n+2],!0),o.setUint16(a+6*i,y[r][n+3],!0),o.setUint16(a+8*i,y[r][n+4],!0),o.setUint16(a+10*i,y[r][n+5],!0),o.setUint16(a+12*i,y[r][n+6],!0),o.setUint16(a+14*i,y[r][n+7],!0),a+=16*i}}if(u!=d)for(let e=8*t;e<8*t+x;++e){let t=b[r][e]+8*u*2*i,n=u*64+(e&7)*8;for(let e=0;e<S;++e)o.setUint16(t+e*2*i,y[r][n+e],!0)}}}for(var C=new Uint16Array(s),o=new DataView(a.buffer),w=0;w<l;++w){n[e.idx[w]].decoded=!0;var T=n[e.idx[w]].type;if(n[w].type==2)for(var E=0;E<c;++E){let e=b[w][E];for(var D=0;D<s;++D)C[D]=o.getUint16(e+D*2*T,!0);for(var D=0;D<s;++D)o.setFloat32(e+D*2*T,U(C[D]),!0)}}}function I(e,t,n){for(var r,i=1;i<64;)r=t[e.value],r==65280?i=64:r>>8==255?i+=r&255:(n[i]=r,i++),e.value++}function ne(e,t){t[0]=U(e[0]),t[1]=U(e[1]),t[2]=U(e[5]),t[3]=U(e[6]),t[4]=U(e[14]),t[5]=U(e[15]),t[6]=U(e[27]),t[7]=U(e[28]),t[8]=U(e[2]),t[9]=U(e[4]),t[10]=U(e[7]),t[11]=U(e[13]),t[12]=U(e[16]),t[13]=U(e[26]),t[14]=U(e[29]),t[15]=U(e[42]),t[16]=U(e[3]),t[17]=U(e[8]),t[18]=U(e[12]),t[19]=U(e[17]),t[20]=U(e[25]),t[21]=U(e[30]),t[22]=U(e[41]),t[23]=U(e[43]),t[24]=U(e[9]),t[25]=U(e[11]),t[26]=U(e[18]),t[27]=U(e[24]),t[28]=U(e[31]),t[29]=U(e[40]),t[30]=U(e[44]),t[31]=U(e[53]),t[32]=U(e[10]),t[33]=U(e[19]),t[34]=U(e[23]),t[35]=U(e[32]),t[36]=U(e[39]),t[37]=U(e[45]),t[38]=U(e[52]),t[39]=U(e[54]),t[40]=U(e[20]),t[41]=U(e[22]),t[42]=U(e[33]),t[43]=U(e[38]),t[44]=U(e[46]),t[45]=U(e[51]),t[46]=U(e[55]),t[47]=U(e[60]),t[48]=U(e[21]),t[49]=U(e[34]),t[50]=U(e[37]),t[51]=U(e[47]),t[52]=U(e[50]),t[53]=U(e[56]),t[54]=U(e[59]),t[55]=U(e[61]),t[56]=U(e[35]),t[57]=U(e[36]),t[58]=U(e[48]),t[59]=U(e[49]),t[60]=U(e[57]),t[61]=U(e[58]),t[62]=U(e[62]),t[63]=U(e[63])}function re(e){let t=.5*Math.cos(3.14159/4),n=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),i=.5*Math.cos(3*3.14159/16),a=.5*Math.cos(15.70795/16),o=.5*Math.cos(3*3.14159/8),s=.5*Math.cos(21.99113/16);for(var c=[,,,,],l=[,,,,],u=[,,,,],d=[,,,,],f=0;f<8;++f){var p=f*8;c[0]=r*e[p+2],c[1]=o*e[p+2],c[2]=r*e[p+6],c[3]=o*e[p+6],l[0]=n*e[p+1]+i*e[p+3]+a*e[p+5]+s*e[p+7],l[1]=i*e[p+1]-s*e[p+3]-n*e[p+5]-a*e[p+7],l[2]=a*e[p+1]-n*e[p+3]+s*e[p+5]+i*e[p+7],l[3]=s*e[p+1]-a*e[p+3]+i*e[p+5]-n*e[p+7],u[0]=t*(e[p+0]+e[p+4]),u[3]=t*(e[p+0]-e[p+4]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[p+0]=d[0]+l[0],e[p+1]=d[1]+l[1],e[p+2]=d[2]+l[2],e[p+3]=d[3]+l[3],e[p+4]=d[3]-l[3],e[p+5]=d[2]-l[2],e[p+6]=d[1]-l[1],e[p+7]=d[0]-l[0]}for(var m=0;m<8;++m)c[0]=r*e[16+m],c[1]=o*e[16+m],c[2]=r*e[48+m],c[3]=o*e[48+m],l[0]=n*e[8+m]+i*e[24+m]+a*e[40+m]+s*e[56+m],l[1]=i*e[8+m]-s*e[24+m]-n*e[40+m]-a*e[56+m],l[2]=a*e[8+m]-n*e[24+m]+s*e[40+m]+i*e[56+m],l[3]=s*e[8+m]-a*e[24+m]+i*e[40+m]-n*e[56+m],u[0]=t*(e[m]+e[32+m]),u[3]=t*(e[m]-e[32+m]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[0+m]=d[0]+l[0],e[8+m]=d[1]+l[1],e[16+m]=d[2]+l[2],e[24+m]=d[3]+l[3],e[32+m]=d[3]-l[3],e[40+m]=d[2]-l[2],e[48+m]=d[1]-l[1],e[56+m]=d[0]-l[0]}function ie(e){for(var t=0;t<64;++t){var n=e[0][t],r=e[1][t],i=e[2][t];e[0][t]=n+1.5747*i,e[1][t]=n-.1873*r-.4682*i,e[2][t]=n+1.8556*r}}function ae(e,t,n){for(var r=0;r<64;++r)t[n+r]=l.toHalfFloat(oe(e[r]))}function oe(e){return e<=1?Math.sign(e)*Math.abs(e)**2.2:Math.sign(e)*c**(Math.abs(e)-1)}function se(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function L(e){var t=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),n=new Uint8Array(F(t)),r=new Uint8Array(n.length);return N(n),P(n,r),new DataView(r.buffer)}function R(e){var t=bt(e.array.slice(e.offset.value,e.offset.value+e.size)),n=new Uint8Array(t.length);return N(t),P(t,n),new DataView(n.buffer)}function ce(e){for(var n=e.viewer,i={value:e.offset.value},a=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),o=new Uint8Array(r),s=0,c=Array(e.channels),l=0;l<e.channels;l++)c[l]={},c[l].start=s,c[l].end=c[l].start,c[l].nx=e.width,c[l].ny=e.lines,c[l].size=e.type,s+=c[l].nx*c[l].ny*c[l].size;var d=be(n,i),f=be(n,i);if(f>=r)throw`Something is wrong with PIZ_COMPRESSION BITMAP_SIZE`;if(d<=f)for(var l=0;l<f-d+1;l++)o[l+d]=ve(n,i);var p=new Uint16Array(t),m=u(o,p),h=z(n,i);M(e.array,n,i,h,a,s);for(var l=0;l<e.channels;++l)for(var g=c[l],_=0;_<c[l].size;++_)A(a,g.start+_,g.nx,g.size,g.ny,g.nx*g.size,m);ee(p,a,s);for(var v=0,y=new Uint8Array(a.buffer.byteLength),b=0;b<e.lines;b++)for(var x=0;x<e.channels;x++){var g=c[x],S=g.nx*g.size,C=new Uint8Array(a.buffer,g.end*2,S*2);y.set(C,v),v+=S*2,g.end+=S}return new DataView(y.buffer)}function le(e){var t=bt(e.array.slice(e.offset.value,e.offset.value+e.size));let n=e.lines*e.channels*e.width,r=e.type==1?new Uint16Array(n):new Uint32Array(n),i=0,a=0,o=[,,,,];for(let n=0;n<e.lines;n++)for(let n=0;n<e.channels;n++){let n=0;switch(e.type){case 1:o[0]=i,o[1]=o[0]+e.width,i=o[1]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<8|t[o[1]++];n+=e,r[a]=n,a++}break;case 2:o[0]=i,o[1]=o[0]+e.width,o[2]=o[1]+e.width,i=o[2]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<24|t[o[1]++]<<16|t[o[2]++]<<8;n+=e,r[a]=n,a++}}}return new DataView(r.buffer)}function ue(e){var t=e.viewer,n={value:e.offset.value},r=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:V(t,n),unknownUncompressedSize:V(t,n),unknownCompressedSize:V(t,n),acCompressedSize:V(t,n),dcCompressedSize:V(t,n),rleCompressedSize:V(t,n),rleUncompressedSize:V(t,n),rleRawSize:V(t,n),totalAcUncompressedCount:V(t,n),totalDcUncompressedCount:V(t,n),acCompression:V(t,n)};if(i.version<2)throw`EXRLoader.parse: `+Ne.compression+` version `+i.version+` is unsupported`;for(var a=[],o=be(t,n)-2;o>0;){var s=de(t.buffer,n),c=ve(t,n),l=c>>2&3,u=(c>>4)-1,d=new Int8Array([u])[0],f=ve(t,n);a.push({name:s,index:d,type:f,compression:l}),o-=s.length+3}for(var p=Ne.channels,m=Array(e.channels),h=0;h<e.channels;++h){var g=m[h]={},_=p[h];g.name=_.name,g.compression=0,g.decoded=!1,g.type=_.pixelType,g.pLinear=_.pLinear,g.width=e.width,g.height=e.lines}for(var v={idx:[,,,]},y=0;y<e.channels;++y)for(var g=m[y],h=0;h<a.length;++h){var b=a[h];g.name==b.name&&(g.compression=b.compression,b.index>=0&&(v.idx[b.index]=y),g.offset=y)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var x=new Uint16Array(i.totalAcUncompressedCount);M(e.array,t,n,i.acCompressedSize,x,i.totalAcUncompressedCount);break;case 1:var S=e.array.slice(n.value,n.value+i.totalAcUncompressedCount),C=bt(S),x=new Uint16Array(C.buffer);n.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var w={array:e.array,offset:n,size:i.dcCompressedSize},T=new Uint16Array(R(w).buffer);n.value+=i.dcCompressedSize}if(i.rleRawSize>0){var S=e.array.slice(n.value,n.value+i.rleCompressedSize),C=bt(S),E=F(C.buffer);n.value+=i.rleCompressedSize}for(var D=0,O=Array(m.length),h=0;h<O.length;++h)O[h]=[];for(var k=0;k<e.lines;++k)for(var A=0;A<m.length;++A)O[A].push(D),D+=m[A].width*e.type*2;te(v,O,m,x,T,r);for(var h=0;h<m.length;++h){var g=m[h];if(!g.decoded)switch(g.compression){case 2:for(var j=0,ee=0,k=0;k<e.lines;++k){for(var N=O[h][j],P=0;P<g.width;++P){for(var I=0;I<2*g.type;++I)r[N++]=E[ee+I*g.width*g.height];ee++}j++}break;default:throw`EXRLoader.parse: unsupported channel compression`}}return new DataView(r.buffer)}function de(e,t){for(var n=new Uint8Array(e),r=0;n[t.value+r]!=0;)r+=1;var i=new TextDecoder().decode(n.slice(t.value,t.value+r));return t.value=t.value+r+1,i}function fe(e,t,n){var r=new TextDecoder().decode(new Uint8Array(e).slice(t.value,t.value+n));return t.value+=n,r}function pe(e,t){return[he(e,t),z(e,t)]}function me(e,t){return[z(e,t),z(e,t)]}function he(e,t){var n=e.getInt32(t.value,!0);return t.value+=4,n}function z(e,t){var n=e.getUint32(t.value,!0);return t.value+=4,n}function ge(e,t){var n=e[t.value];return t.value+=1,n}function ve(e,t){var n=e.getUint8(t.value);return t.value+=1,n}let V=function(e,t){let n;return n=`getBigInt64`in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,n};function H(e,t){var n=e.getFloat32(t.value,!0);return t.value+=4,n}function ye(e,t){return l.toHalfFloat(H(e,t))}function U(e){var t=(e&31744)>>10,n=e&1023;return(e>>15?-1:1)*(t?t===31?n?NaN:1/0:2**(t-15)*(1+n/1024):n/1024*6103515625e-14)}function be(e,t){var n=e.getUint16(t.value,!0);return t.value+=2,n}function xe(e,t){return U(be(e,t))}function Se(e,t,n,r){for(var i=n.value,a=[];n.value<i+r-1;){var o=de(t,n),s=he(e,n),c=ve(e,n);n.value+=3;var l=he(e,n),u=he(e,n);a.push({name:o,pixelType:s,pLinear:c,xSampling:l,ySampling:u})}return n.value+=1,a}function Ce(e,t){return{redX:H(e,t),redY:H(e,t),greenX:H(e,t),greenY:H(e,t),blueX:H(e,t),blueY:H(e,t),whiteX:H(e,t),whiteY:H(e,t)}}function we(e,t){return[`NO_COMPRESSION`,`RLE_COMPRESSION`,`ZIPS_COMPRESSION`,`ZIP_COMPRESSION`,`PIZ_COMPRESSION`,`PXR24_COMPRESSION`,`B44_COMPRESSION`,`B44A_COMPRESSION`,`DWAA_COMPRESSION`,`DWAB_COMPRESSION`][ve(e,t)]}function Te(e,t){return{xMin:z(e,t),yMin:z(e,t),xMax:z(e,t),yMax:z(e,t)}}function Ee(e,t){return[`INCREASING_Y`][ve(e,t)]}function De(e,t){return[H(e,t),H(e,t)]}function W(e,t){return[H(e,t),H(e,t),H(e,t)]}function Oe(e,t,n,r,i){if(r===`string`||r===`stringvector`||r===`iccProfile`)return fe(t,n,i);if(r===`chlist`)return Se(e,t,n,i);if(r===`chromaticities`)return Ce(e,n);if(r===`compression`)return we(e,n);if(r===`box2i`)return Te(e,n);if(r===`lineOrder`)return Ee(e,n);if(r===`float`)return H(e,n);if(r===`v2f`)return De(e,n);if(r===`v3f`)return W(e,n);if(r===`int`)return he(e,n);if(r===`rational`)return pe(e,n);if(r===`timecode`)return me(e,n);if(r===`preview`)return n.value+=i,`skipped`;n.value+=i}function ke(e,t,n){let r={};if(e.getUint32(0,!0)!=20000630)throw`THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.`;r.version=e.getUint8(4);let i=e.getUint8(5);r.spec={singleTile:!!(i&2),longName:!!(i&4),deepFormat:!!(i&8),multiPart:!!(i&16)},n.value=8;for(var a=!0;a;){var o=de(t,n);if(o==0)a=!1;else{var s=de(t,n),c=Oe(e,t,n,s,z(e,n));c===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`):r[o]=c}}if(i&-5)throw console.error(`EXRHeader:`,r),`THREE.EXRLoader: provided file is currently unsupported.`;return r}function Ae(e,t,r,i,a){let o={size:0,viewer:t,array:r,offset:i,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[Tt?`colorSpace`:`encoding`]:null};switch(e.compression){case`NO_COMPRESSION`:o.lines=1,o.uncompress=se;break;case`RLE_COMPRESSION`:o.lines=1,o.uncompress=L;break;case`ZIPS_COMPRESSION`:o.lines=1,o.uncompress=R;break;case`ZIP_COMPRESSION`:o.lines=16,o.uncompress=R;break;case`PIZ_COMPRESSION`:o.lines=32,o.uncompress=ce;break;case`PXR24_COMPRESSION`:o.lines=16,o.uncompress=le;break;case`DWAA_COMPRESSION`:o.lines=32,o.uncompress=ue;break;case`DWAB_COMPRESSION`:o.lines=256,o.uncompress=ue;break;default:throw`EXRLoader.parse: `+e.compression+` is unsupported`}if(o.scanlineBlockSize=o.lines,o.type==1)switch(a){case y:o.getter=xe,o.inputSize=2;break;case B:o.getter=be,o.inputSize=2}else if(o.type==2)switch(a){case y:o.getter=H,o.inputSize=4;break;case B:o.getter=ye,o.inputSize=4}else throw`EXRLoader.parse: unsupported pixelType `+o.type+` for `+e.compression+`.`;o.blockCount=(e.dataWindow.yMax+1)/o.scanlineBlockSize;for(var s=0;s<o.blockCount;s++)V(t,i);o.outputChannels=o.channels==3?4:o.channels;let c=o.width*o.height*o.outputChannels;switch(a){case y:o.byteArray=new Float32Array(c),o.channels<o.outputChannels&&o.byteArray.fill(1,0,c);break;case B:o.byteArray=new Uint16Array(c),o.channels<o.outputChannels&&o.byteArray.fill(15360,0,c);break;default:console.error(`THREE.EXRLoader: unsupported type: `,a)}return o.bytesPerLine=o.width*o.inputSize*o.channels,o.format=o.outputChannels==4?n:_e,Tt?o.colorSpace=`srgb-linear`:o.encoding=3e3,o}let G=new DataView(e),je=new Uint8Array(e),Me={value:0},Ne=ke(G,e,Me),K=Ae(Ne,G,je,Me,this.type),Pe={value:0},Fe={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<K.height/K.scanlineBlockSize;e++){let t=z(G,Me);K.size=z(G,Me),K.lines=t+K.scanlineBlockSize>K.height?K.height-t:K.scanlineBlockSize;let n=K.size<K.lines*K.bytesPerLine?K.uncompress(K):se(K);Me.value+=K.size;for(let t=0;t<K.scanlineBlockSize;t++){let r=t+e*K.scanlineBlockSize;if(r>=K.height)break;for(let e=0;e<K.channels;e++){let i=Fe[Ne.channels[e].name];for(let a=0;a<K.width;a++){Pe.value=(t*(K.channels*K.width)+e*K.width+a)*K.inputSize;let o=(K.height-1-r)*(K.width*K.outputChannels)+a*K.outputChannels+i;K.byteArray[o]=K.getter(n,Pe)}}}}return{header:Ne,width:K.width,height:K.height,data:K.byteArray,format:K.format,[Tt?`colorSpace`:`encoding`]:K[Tt?`colorSpace`:`encoding`],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){Tt?e.colorSpace=n.colorSpace:e.encoding=n.encoding,e.minFilter=G,e.magFilter=G,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,n)}return super.load(e,i,n,r)}},Dt=parseInt(`187`.replace(/\D+/g,``)),Ot=(e,t,n)=>{let r;switch(e){case te:r=new Uint8ClampedArray(t*n*4);break;case B:r=new Uint16Array(t*n*4);break;case S:r=new Uint32Array(t*n*4);break;case de:r=new Int8Array(t*n*4);break;case we:r=new Int16Array(t*n*4);break;case re:r=new Int32Array(t*n*4);break;case y:r=new Float32Array(t*n*4);break;default:throw Error(`Unsupported data type`)}return r},kt,At=(e,t,n,i)=>{if(kt!==void 0)return kt;let a=new _(1,1,i);t.setRenderTarget(a);let o=new r(new c,new fe({color:16777215}));t.render(o,n),t.setRenderTarget(null);let s=Ot(e,a.width,a.height);return t.readRenderTargetPixels(a,0,0,a.width,a.height,s),a.dispose(),o.geometry.dispose(),o.material.dispose(),kt=s[0]!==0,kt},jt=class e{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(t){this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;let i={format:n,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:t.renderTargetOptions?.anisotropy===void 0?1:t.renderTargetOptions?.anisotropy,generateMipmaps:t.renderTargetOptions?.generateMipmaps!==void 0&&t.renderTargetOptions?.generateMipmaps,magFilter:t.renderTargetOptions?.magFilter===void 0?G:t.renderTargetOptions?.magFilter,minFilter:t.renderTargetOptions?.minFilter===void 0?G:t.renderTargetOptions?.minFilter,samples:t.renderTargetOptions?.samples===void 0?void 0:t.renderTargetOptions?.samples,wrapS:t.renderTargetOptions?.wrapS===void 0?s:t.renderTargetOptions?.wrapS,wrapT:t.renderTargetOptions?.wrapT===void 0?s:t.renderTargetOptions?.wrapT};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=e.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new ee,this._camera=new d,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!At(this._type,this._renderer,this._camera,i)){let e;switch(this._type){case B:e=this._renderer.extensions.has(`EXT_color_buffer_float`)?y:void 0}e===void 0?(this._supportsReadPixels=!1,console.warn(`This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown`)):(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${y}`),this._type=e)}this._quad=new r(new c,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new _(this.width,this.height,i),this._renderTarget.texture.mapping=t.renderTargetOptions?.mapping===void 0?300:t.renderTargetOptions?.mapping}static instantiateRenderer(){let e=new je;return e.setSize(128,128),e}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw Error(`Can't read pixels in this browser`);let e=Ot(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){let t=new i(this.toArray(),this.width,this.height,n,this._type,e?.mapping||300,e?.wrapS||1001,e?.wrapT||1001,e?.magFilter||1006,e?.minFilter||1006,e?.anisotropy||1,C);return t.generateMipmaps=e?.generateMipmaps!==void 0&&e?.generateMipmaps,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof V&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof R&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof R&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}},Mt=`urn:iso:std:iso:ts:21496:-1\0`,Nt=128,Pt=8,Ft=4,It=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,r=()=>{let e=t.getUint16(n);return n+=2,e},i=()=>{let e=t.getUint32(n);return n+=4,e},a=()=>{let e=t.getInt32(n);return n+=4,e},o=r();if(o!==0)throw Error(`Unsupported ISO 21496-1 minimum_version ${o}`);r();let s=t.getUint8(n++);if(s&Ft)throw Error(`ISO 21496-1 metadata with HDR base image is not supported`);let c=s&Nt?3:1,l=s&Pt?i():void 0,u=e=>{let t=e?a():i(),n=l??i();if(n===0)throw Error(`Invalid ISO 21496-1 fraction with zero denominator`);return t/n},d=u(!1),f=u(!1);if(d>f)throw Error(`ISO 21496-1 metadata with HDR base image is not supported`);let p=[],m=[],h=[],g=[],_=[];for(let e=0;e<c;e++)p.push(u(!0)),m.push(u(!0)),h.push(u(!1)),g.push(u(!0)),_.push(u(!0));let v=e=>c===3?e:[e[0],e[0],e[0]];return{gainMapMin:v(p),gainMapMax:v(m),gamma:v(h),offsetSdr:v(g),offsetHdr:v(_),hdrCapacityMin:d,hdrCapacityMax:f}},Lt=class extends Error{},Rt=class extends Error{},zt=Array.from(Mt,e=>e.charCodeAt(0)),Bt=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=4+zt.length;for(let r=0;r+n<e.length;r++){if(e[r]!==255||e[r+1]!==226||!zt.every((t,n)=>e[r+4+n]===t))continue;let i=Math.min(e.length,r+2+t.getUint16(r+2));if(!(i-(r+n)<=4))try{return It(e.subarray(r+n,i))}catch{return}}},Vt=(e,t,n)=>{let r=RegExp(`${t}="([^"]*)"`,`i`).exec(e);if(r)return r[1];let i=RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,`i`).exec(e);if(i){let e=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return e&&e.length===3?e.map(e=>e.replace(/<\/?rdf:li>/g,``)):i[1].trim()}if(n!==void 0)return n;throw Error(`Can't find ${t} in gainmap metadata`)},Ht=e=>{let t;t=typeof TextDecoder<`u`?new TextDecoder().decode(e):e.toString();let n=t.indexOf(`<x:xmpmeta`);for(;n!==-1;){let e=t.indexOf(`x:xmpmeta>`,n),r=t.slice(n,e+10);try{let e=Vt(r,`hdrgm:GainMapMin`,`0`),t=Vt(r,`hdrgm:GainMapMax`),n=Vt(r,`hdrgm:Gamma`,`1`),i=Vt(r,`hdrgm:OffsetSDR`,`0.015625`),a=Vt(r,`hdrgm:OffsetHDR`,`0.015625`),o=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(r),s=o?o[1]:`0`,c=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(r);if(!c)throw Error(`Incomplete gainmap metadata`);let l=c[1];return{gainMapMin:Array.isArray(e)?e.map(e=>parseFloat(e)):[parseFloat(e),parseFloat(e),parseFloat(e)],gainMapMax:Array.isArray(t)?t.map(e=>parseFloat(e)):[parseFloat(t),parseFloat(t),parseFloat(t)],gamma:Array.isArray(n)?n.map(e=>parseFloat(e)):[parseFloat(n),parseFloat(n),parseFloat(n)],offsetSdr:Array.isArray(i)?i.map(e=>parseFloat(e)):[parseFloat(i),parseFloat(i),parseFloat(i)],offsetHdr:Array.isArray(a)?a.map(e=>parseFloat(e)):[parseFloat(a),parseFloat(a),parseFloat(a)],hdrCapacityMin:parseFloat(s),hdrCapacityMax:parseFloat(l)}}catch{}n=t.indexOf(`<x:xmpmeta`,e)}},Ut=class{options;constructor(e){this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,n)=>{let r=this.options.debug,i=new DataView(e.buffer);if(i.getUint16(0)!==65496){n(Error(`Not a valid jpeg`));return}let a=i.byteLength,o=2,s=0,c;for(;o<a;){if(++s>250){n(Error(`Found no marker after ${s} loops 😵`));return}if(i.getUint8(o)!==255){n(Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${i.getUint8(o).toString(16)}`));return}if(c=i.getUint8(o+1),r&&console.log(`Marker: ${c.toString(16)}`),c===226){r&&console.log(`Found APP2 marker (0xffe2)`);let e=o+4;if(i.getUint32(e)===1297106432){let r=e+4,a;if(i.getUint16(r)===18761)a=!1;else if(i.getUint16(r)===19789)a=!0;else{n(Error(`No valid endianness marker found in TIFF header`));return}if(i.getUint16(r+2,!a)!==42){n(Error(`Not valid TIFF data! (no 0x002A marker)`));return}let o=i.getUint32(r+4,!a);if(o<8){n(Error(`Not valid TIFF data! (First offset less than 8)`));return}let s=r+o,c=i.getUint16(s,!a),l=s+2,u=0;for(let e=l;e<l+12*c;e+=12)i.getUint16(e,!a)===45057&&(u=i.getUint32(e+8,!a));let d=s+2+c*12+4,f=[];for(let e=d;e<d+u*16;e+=16){let t={MPType:i.getUint32(e,!a),size:i.getUint32(e+4,!a),dataOffset:i.getUint32(e+8,!a),dependantImages:i.getUint32(e+12,!a),start:-1,end:-1,isFII:!1};t.dataOffset?(t.start=r+t.dataOffset,t.isFII=!1):(t.start=0,t.isFII=!0),t.end=t.start+t.size,f.push(t)}if(this.options.extractNonFII&&f.length){let e=new Blob([i]),n=[];for(let t of f){if(t.isFII&&!this.options.extractFII)continue;let r=e.slice(t.start,t.end+1,`image/jpeg`);n.push(r)}t(n)}}}o+=2+i.getUint16(o+2)}})}},Wt=async e=>{let t=Bt(e)??Ht(e);if(!t)throw new Rt(`Gain map XMP metadata not found`);let n=await new Ut({extractFII:!0,extractNonFII:!0}).extract(e);if(n.length!==2)throw new Lt(`Gain map recovery image not found`);return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:t}},Gt=e=>new Promise((t,n)=>{let r=document.createElement(`img`);r.onload=()=>{t(r)},r.onerror=e=>{n(e)},r.src=URL.createObjectURL(e)}),Kt=async(e,t,n)=>{let r=t?new Blob([t],{type:`image/jpeg`}):void 0,i=new Blob([e],{type:`image/jpeg`}),a,o,s=!1;if(typeof createImageBitmap>`u`){let e=await Promise.all([r?Gt(r):Promise.resolve(void 0),Gt(i)]);o=e[0],a=e[1],s=n===`flipY`}else{let e=await Promise.all([r?createImageBitmap(r,{imageOrientation:n||`flipY`}):Promise.resolve(void 0),createImageBitmap(i,{imageOrientation:n||`flipY`})]);o=e[0],a=e[1]}return{sdrImage:a,gainMapImage:o,needsFlip:s}},qt=(e,t,r)=>{let i=new R(t||new ImageData(2,2),300,s,s,G,Ne,n,te,1,C);i.flipY=r,i.needsUpdate=!0;let a=new R(e,300,s,s,G,Ne,n,te,1,le);return a.flipY=r,a.needsUpdate=!0,{gainMap:i,sdr:a}},Jt=class extends o{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(e,t){super(t),this._config=e,e.renderer&&(this._renderer=e.renderer),this._internalLoadingManager=new T}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn(`WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.`);let e=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new R,sdr:new R});return this._config.createQuadRenderer({width:16,height:16,type:B,colorSpace:C,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}processImages(e,t,n){return Kt(e,t,n)}createTextures(e,t,n){return qt(e,t,n)}updateQuadRenderer(e,t,n,r,i){e.width=t.width,e.height=t.height,e.material.gainMap=n,e.material.sdr=r,e.material.gainMapMin=i.gainMapMin,e.material.gainMapMax=i.gainMapMax,e.material.offsetHdr=i.offsetHdr,e.material.offsetSdr=i.offsetSdr,e.material.gamma=i.gamma,e.material.hdrCapacityMin=i.hdrCapacityMin,e.material.hdrCapacityMax=i.hdrCapacityMax,e.material.maxDisplayBoost=2**i.hdrCapacityMax,e.material.needsUpdate=!0}},Yt=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Xt=`
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
`,Zt=class extends V{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:e,offsetHdr:t,offsetSdr:n,gainMapMin:r,gainMapMax:i,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:s,sdr:c,gainMap:l}){super({name:`GainMapDecoderMaterial`,vertexShader:Yt,fragmentShader:Xt,uniforms:{sdr:{value:c},gainMap:{value:l},gamma:{value:new w(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new w().fromArray(t)},offsetSdr:{value:new w().fromArray(n)},gainMapMin:{value:new w().fromArray(r)},gainMapMax:{value:new w().fromArray(i)},weightFactor:{value:(Math.log2(a)-o)/(s-o)}},blending:0,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=s,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){let e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){let t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){let e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}},Qt=class extends Jt{constructor(e,t){super({renderer:e,createMaterial:e=>new Zt(e),createQuadRenderer:e=>new jt(e)},t)}async render(e,t,n,r){let{sdrImage:i,gainMapImage:a,needsFlip:o}=await this.processImages(n,r,`flipY`),{gainMap:s,sdr:c}=this.createTextures(i,a,o);this.updateQuadRenderer(e,i,s,c,t),e.render()}},$t=class extends Qt{load([e,t,n],r,i,a){let o=this.prepareQuadRenderer(),s,c,l,u=async()=>{if(s&&c&&l){try{await this.render(o,l,s,c)}catch(r){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(n),typeof a==`function`&&a(r),o.disposeOnDemandRenderer();return}typeof r==`function`&&r(o),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(n),o.disposeOnDemandRenderer()}},d=!0,f=0,p=0,m=!0,h=0,g=0,_=!0,v=0,y=0,b=()=>{if(typeof i==`function`){let e=f+h+v,t=p+g+y;i(new ProgressEvent(`progress`,{lengthComputable:d&&m&&_,loaded:t,total:e}))}};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(n);let x=new O(this._internalLoadingManager);x.setResponseType(`arraybuffer`),x.setRequestHeader(this.requestHeader),x.setPath(this.path),x.setWithCredentials(this.withCredentials),x.load(e,async e=>{if(typeof e==`string`)throw Error(`Invalid sdr buffer`);s=e,await u()},e=>{d=e.lengthComputable,p=e.loaded,f=e.total,b()},t=>{this.manager.itemError(e),typeof a==`function`&&a(t)});let S=new O(this._internalLoadingManager);S.setResponseType(`arraybuffer`),S.setRequestHeader(this.requestHeader),S.setPath(this.path),S.setWithCredentials(this.withCredentials),S.load(t,async e=>{if(typeof e==`string`)throw Error(`Invalid gainmap buffer`);c=e,await u()},e=>{m=e.lengthComputable,g=e.loaded,h=e.total,b()},e=>{this.manager.itemError(t),typeof a==`function`&&a(e)});let C=new O(this._internalLoadingManager);return C.setRequestHeader(this.requestHeader),C.setPath(this.path),C.setWithCredentials(this.withCredentials),C.load(n,async e=>{if(typeof e!=`string`)throw Error(`Invalid metadata string`);l=JSON.parse(e),await u()},e=>{_=e.lengthComputable,y=e.loaded,v=e.total,b()},e=>{this.manager.itemError(n),typeof a==`function`&&a(e)}),o}},en=class extends Qt{load(e,t,n,r){let i=this.prepareQuadRenderer(),a=new O(this._internalLoadingManager);return a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async n=>{if(typeof n==`string`)throw Error(`Invalid buffer, received [string], was expecting [ArrayBuffer]`);let a=new Uint8Array(n),o,s,c;try{let e=await Wt(a);o=e.sdr,s=e.gainMap,c=e.metadata}catch(t){if(t instanceof Rt||t instanceof Lt)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),c={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},o=a;else throw t}try{await this.render(i,c,o.buffer,s?.buffer)}catch(t){this.manager.itemError(e),typeof r==`function`&&r(t),i.disposeOnDemandRenderer();return}typeof t==`function`&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},n,t=>{this.manager.itemError(e),typeof r==`function`&&r(t)}),i}},tn={apartment:`lebombo_1k.hdr`,city:`potsdamer_platz_1k.hdr`,dawn:`kiara_1_dawn_1k.hdr`,forest:`forest_slope_1k.hdr`,lobby:`st_fagans_interior_1k.hdr`,night:`dikhololo_night_1k.hdr`,park:`rooitou_park_1k.hdr`,studio:`studio_small_03_1k.hdr`,sunset:`venice_sunset_1k.hdr`,warehouse:`empty_warehouse_01_1k.hdr`},nn=`https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/`,rn=e=>Array.isArray(e),an=[`/px.png`,`/nx.png`,`/py.png`,`/ny.png`,`/pz.png`,`/nz.png`];function on({files:e=an,path:t=``,preset:n=void 0,colorSpace:r=void 0,extensions:i}={}){n&&(ln(n),e=tn[n],t=nn);let a=rn(e),{extension:o,isCubemap:s}=un(e),c=dn(o);if(!c)throw Error(`useEnvironment: Unrecognized file extension: `+e);let l=L(e=>e.gl);(0,J.useLayoutEffect)(()=>{if(o!==`webp`&&o!==`jpg`&&o!==`jpeg`)return;function t(){U.clear(c,a?[e]:e)}l.domElement.addEventListener(`webglcontextlost`,t,{once:!0})},[e,l.domElement]);let u=U(c,a?[e]:e,e=>{(o===`webp`||o===`jpg`||o===`jpeg`)&&e.setRenderer(l),e.setPath==null||e.setPath(t),i&&i(e)}),d=a?u[0]:u;return(o===`jpg`||o===`jpeg`||o===`webp`)&&(d=d.renderTarget?.texture),d.mapping=s?301:303,d.colorSpace=r??(s?`srgb`:`srgb-linear`),d}var sn={files:an,path:``,preset:void 0,extensions:void 0};on.preload=e=>{let t={...sn,...e},{files:n,path:r=``}=t,{preset:i,extensions:a}=t;i&&(ln(i),n=tn[i],r=nn);let{extension:o}=un(n);if(o===`webp`||o===`jpg`||o===`jpeg`)throw Error(`useEnvironment: Preloading gainmaps is not supported`);let s=dn(o);if(!s)throw Error(`useEnvironment: Unrecognized file extension: `+n);U.preload(s,rn(n)?[n]:n,e=>{e.setPath==null||e.setPath(r),a&&a(e)})};var cn={files:an,preset:void 0};on.clear=e=>{let t={...cn,...e},{files:n}=t,{preset:r}=t;r&&(ln(r),n=tn[r]);let{extension:i}=un(n),a=dn(i);if(!a)throw Error(`useEnvironment: Unrecognized file extension: `+n);U.clear(a,rn(n)?[n]:n)};function ln(e){if(!(e in tn))throw Error(`Preset must be one of: `+Object.keys(tn).join(`, `))}function un(e){var t;let n=rn(e)&&e.length===6,r=rn(e)&&e.length===3&&e.some(e=>e.endsWith(`json`)),i=rn(e)?e[0]:e;return{extension:n?`cube`:r?`webp`:i.startsWith(`data:application/exr`)?`exr`:i.startsWith(`data:application/hdr`)?`hdr`:i.startsWith(`data:image/jpeg`)?`jpg`:(t=i.split(`.`).pop())==null||(t=t.split(`?`))==null||(t=t.shift())==null?void 0:t.toLowerCase(),isCubemap:n,isGainmap:r}}function dn(e){return e===`cube`?b:e===`hdr`?wt:e===`exr`?Et:e===`jpg`||e===`jpeg`?en:e===`webp`?$t:null}var fn=e=>e.current&&e.current.isScene,pn=e=>fn(e)?e.current:e;function mn(e,t,n,r,i={}){var a,o;i={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...i};let s=pn(t||n),c=s.background,l=s.environment,u={backgroundBlurriness:s.backgroundBlurriness,backgroundIntensity:s.backgroundIntensity,backgroundRotation:((a=s.backgroundRotation)==null||a.clone==null?void 0:a.clone())??[0,0,0],environmentIntensity:s.environmentIntensity,environmentRotation:((o=s.environmentRotation)==null||o.clone==null?void 0:o.clone())??[0,0,0]};return e!==`only`&&(s.environment=r),e&&(s.background=r),be(s,i),()=>{e!==`only`&&(s.environment=l),e&&(s.background=c),be(s,u)}}function hn({scene:e,background:t=!1,map:n,...r}){let i=L(e=>e.scene);return J.useLayoutEffect(()=>{if(n)return mn(t,e,i,n,r)}),null}function gn({background:e=!1,scene:t,blur:n,backgroundBlurriness:r,backgroundIntensity:i,backgroundRotation:a,environmentIntensity:o,environmentRotation:s,...c}){let l=on(c),u=L(e=>e.scene);return J.useLayoutEffect(()=>mn(e,t,u,l,{backgroundBlurriness:n??r,backgroundIntensity:i,backgroundRotation:a,environmentIntensity:o,environmentRotation:s})),J.useEffect(()=>()=>{l.dispose()},[l]),null}function _n({children:e,near:t=.1,far:n=1e3,resolution:r=256,frames:i=1,map:a,background:o=!1,blur:s,backgroundBlurriness:c,backgroundIntensity:l,backgroundRotation:u,environmentIntensity:d,environmentRotation:f,scene:p,files:m,path:h,preset:g=void 0,extensions:_}){let v=L(e=>e.gl),y=L(e=>e.scene),b=J.useRef(null),[x]=J.useState(()=>new ee),S=J.useMemo(()=>{let e=new F(r);return e.texture.type=B,e},[r]);J.useEffect(()=>()=>{S.dispose()},[S]),J.useLayoutEffect(()=>{if(i===1){let e=v.autoClear;v.autoClear=!0,b.current.update(v,x),v.autoClear=e}return mn(o,p,y,S.texture,{backgroundBlurriness:s??c,backgroundIntensity:l,backgroundRotation:u,environmentIntensity:d,environmentRotation:f})},[e,x,S.texture,p,y,o,i,v]);let C=1;return W(()=>{if(i===1/0||C<i){let e=v.autoClear;v.autoClear=!0,b.current.update(v,x),v.autoClear=e,C++}}),J.createElement(J.Fragment,null,M(J.createElement(J.Fragment,null,e,J.createElement(`cubeCamera`,{ref:b,args:[t,n,S]}),m||g?J.createElement(gn,{background:!0,files:m,preset:g,path:h,extensions:_}):a?J.createElement(hn,{background:!0,map:a,extensions:_}):null),x))}function vn(e){let t=on(e),n=e.map||t;J.useMemo(()=>Ce({GroundProjectedEnvImpl:Ct}),[]),J.useEffect(()=>()=>{t.dispose()},[t]);let r=J.useMemo(()=>[n],[n]),i=e.ground?.height,a=e.ground?.radius,o=e.ground?.scale??1e3;return J.createElement(J.Fragment,null,J.createElement(hn,Je({},e,{map:n})),J.createElement(`groundProjectedEnvImpl`,{args:r,scale:o,height:i,radius:a}))}function yn(e){return e.ground?J.createElement(vn,e):e.map?J.createElement(hn,e):e.children?J.createElement(_n,e):J.createElement(gn,e)}var bn=class extends V{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
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
	      #include <${Dt>=154?`colorspace_fragment`:`encodings_fragment`}>
      }`})}},xn=e=>new w().setFromSpherical(new oe(e,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),Sn=J.forwardRef(({radius:e=100,depth:t=50,count:n=5e3,saturation:r=0,factor:i=4,fade:a=!1,speed:o=1},s)=>{let c=J.useRef(null),[l,u,d]=J.useMemo(()=>{let a=[],o=[],s=Array.from({length:n},()=>(.5+.5*Math.random())*i),c=new f,l=e+t,u=t/n;for(let e=0;e<n;e++)l-=u*Math.random(),a.push(...xn(l).toArray()),c.setHSL(e/n,r,.9),o.push(c.r,c.g,c.b);return[new Float32Array(a),new Float32Array(o),new Float32Array(s)]},[n,t,i,e,r]);W(e=>c.current&&(c.current.uniforms.time.value=e.clock.elapsedTime*o));let[p]=J.useState(()=>new bn);return J.createElement(`points`,{ref:s},J.createElement(`bufferGeometry`,null,J.createElement(`bufferAttribute`,{attach:`attributes-position`,args:[l,3]}),J.createElement(`bufferAttribute`,{attach:`attributes-color`,args:[u,3]}),J.createElement(`bufferAttribute`,{attach:`attributes-size`,args:[d,1]})),J.createElement(`primitive`,{ref:c,object:p,attach:`material`,blending:2,"uniforms-fade-value":a,depthWrite:!1,transparent:!0,vertexColors:!0}))});function Cn({pixelated:e}){let t=L(e=>e.gl),n=L(e=>e.internal.active),r=L(e=>e.performance.current),i=L(e=>e.viewport.initialDpr),a=L(e=>e.setDpr);return J.useEffect(()=>{let r=t.domElement;return()=>{n&&a(i),e&&r&&(r.style.imageRendering=`auto`)}},[]),J.useEffect(()=>{a(r*i),e&&t.domElement&&(t.domElement.style.imageRendering=r===1?`auto`:`pixelated`)},[r]),null}var wn=(0,J.createContext)(null);function Tn({iterations:e=10,ms:t=250,threshold:n=.75,step:r=.1,factor:i=.5,flipflops:a=1/0,bounds:o=e=>e>100?[60,100]:[40,60],onIncline:s,onDecline:c,onChange:l,onFallback:u,children:d}){let[f,p]=(0,J.useState)(()=>({fps:0,index:0,factor:i,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{let t=Symbol();return f.subscriptions.set(t,e.current),()=>void f.subscriptions.delete(t)}})),m=0;return W(()=>{let{frames:i,averages:d}=f;if(!f.fallback&&d.length<e){i.push(performance.now());let p=i[i.length-1]-i[0];if(p>=t){if(f.fps=Math.round(i.length/p*1e3*1)/1,f.refreshrate=Math.max(f.refreshrate,f.fps),d[f.index++%e]=f.fps,d.length===e){let[t,i]=o(f.refreshrate),p=d.filter(e=>e>=i),h=d.filter(e=>e<t);p.length>e*n&&(f.factor=Math.min(1,f.factor+r),f.flipped++,s&&s(f),f.subscriptions.forEach(e=>e.onIncline&&e.onIncline(f))),h.length>e*n&&(f.factor=Math.max(0,f.factor-r),f.flipped++,c&&c(f),f.subscriptions.forEach(e=>e.onDecline&&e.onDecline(f))),m!==f.factor&&(m=f.factor,l&&l(f),f.subscriptions.forEach(e=>e.onChange&&e.onChange(f))),f.flipped>a&&!f.fallback&&(f.fallback=!0,u&&u(f),f.subscriptions.forEach(e=>e.onFallback&&e.onFallback(f))),f.averages=[]}f.frames=[]}}}),J.createElement(wn.Provider,{value:f},d)}var En=.1846,$=new Float32Array([.725,.725,.318,.00172,.84,.76,.64,.024,.84,3.4,-2,1,.72,0,0,.35]),Dn=!1,On=Math.atan2(.36,.82),kn=Math.asin(.82/Math.hypot(.82,.82,.36)),An=Math.atan2(-.92,.34),jn=.195,Mn=Math.atan2(-.67,-.48),Nn=.59;function Pn(e,t,n=0,r=0){let i=Math.max(0,Math.min(1,n+r)),a=On+(An-On)*i,o=a+(Mn-a)*r,s=.21+(kn-.21)*Math.max(0,Math.min(1,e)),c=s+(jn-s)*n,l=c+(Nn-c)*r,u=Math.cos(l);return t.set(Math.cos(o)*u,Math.sin(l),Math.sin(o)*u).normalize()}function Fn(e){let{dirSol:t,corSolNevoa:n,densidade:r,decaimentoAltura:i,nevoaMax:a,potenciaMie:o,baseAltura:s=-2,forcaMie:c=.72,entardecer:l=0,noite:u=0,reforcoHorizonte:d=.35,leve:f}=e;$[0]=t.x,$[1]=t.y,$[2]=t.z,$[3]=r,$[4]=n.r,$[5]=n.g,$[6]=n.b,$[7]=i,$[8]=a,$[9]=o,$[10]=s,$[11]=+!f,$[12]=c,$[13]=l,$[14]=u,$[15]=d}function In(){if(Dn)return;Dn=!0;let e={value:$};Me.fog.uAtmFog=e;for(let t of Object.values(Ae)){let n=t?.uniforms;n&&`fogColor`in n&&(n.uAtmFog=e)}j.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorldOffset;
#endif
`,j.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorldOffset = mvPosition.xyz * mat3( viewMatrix );
#endif
`,j.fog_pars_fragment=`
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
`,j.fog_fragment=`
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
      float atmSunDot = max( atmDotRaw, 1e-4 );
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
`}var Ln=[{cx:-6,cy:148,cz:62,rx:86,ry:12,rz:46,puffs:15,escala:62,along:1.85},{cx:-94,cy:140,cz:-38,rx:78,ry:14,rz:48,puffs:14,escala:66,along:1.75},{cx:102,cy:146,cz:-26,rx:82,ry:13,rz:54,puffs:14,escala:64,along:1.9},{cx:18,cy:160,cz:-162,rx:145,ry:18,rz:56,puffs:18,escala:80,along:2.15},{cx:-24,cy:126,cz:138,rx:76,ry:9,rz:36,puffs:11,escala:52,along:1.8},{cx:44,cy:174,cz:196,rx:52,ry:8,rz:28,puffs:9,escala:44,along:1.7},{cx:-148,cy:158,cz:92,rx:74,ry:12,rz:42,puffs:10,escala:58,along:2}],Rn=[{ang:-1.18,raio:520,y:126,comp:160,alt:22,puffs:6},{ang:-1.62,raio:560,y:142,comp:190,alt:26,puffs:6},{ang:-2.22,raio:540,y:132,comp:170,alt:24,puffs:5},{ang:-.45,raio:550,y:136,comp:155,alt:22,puffs:5},{ang:.72,raio:540,y:144,comp:165,alt:24,puffs:4}];function zn(e){let t=29417,n=()=>(t=t*16807%2147483647,(t-1)/2147483646),r=[];for(let t of Ln){let i=e?Math.max(6,Math.round(t.puffs*.36)):t.puffs;for(let e=0;e<i;e++){let e=(n()-.5)*2,i=(n()-.5)*2,a=e*e+i*i,o=Math.min(1,n()**.58),s=n()*Math.PI*2,c=Math.cos(s)*o*t.rx+(n()-.5)*t.rx*.25,l=Math.sin(s)*o*t.rz+(n()-.5)*t.rz*.22,u=Math.max(0,1-Math.hypot(c/t.rx,l/t.rz)),d=Math.min(1,Math.max(0,(.15+.85*n())*(.35+.65*u))),f=(d-.32)*t.ry*(1+.5*u),p=.62+.72*n()*(.65+.35*u),m=t.escala*p*(t.along*(.82+.36*n())),h=t.escala*p*(.48+.34*n()),g=(.52+.42*u)*(a<1.2?1:.78);r.push({x:t.cx+c,y:t.cy+f,z:t.cz+l,sx:m,sy:h,grupo:0,alturaRel:d,dens:g,seedX:n()*47,seedY:n()*47,rot:(n()-.5)*.55,drift:.75+n()*.55})}}if(!e)for(let e of Rn){let t=Math.cos(e.ang)*e.raio,i=Math.sin(e.ang)*e.raio,a=-Math.sin(e.ang),o=Math.cos(e.ang);for(let s=0;s<e.puffs;s++){let c=(s/Math.max(1,e.puffs-1)-.5)*e.comp+(n()-.5)*28,l=(n()-.5)*42,u=1-Math.min(1,Math.abs(c)/(e.comp*.62)),d=Math.min(1,Math.max(0,.25+n()*.75*(.45+.55*u))),f=(d-.35)*e.alt,p=(82+n()*58)*(.75+.35*u),m=(24+n()*18)*(.7+.35*u);r.push({x:t+a*c+Math.cos(e.ang)*l,y:e.y+f,z:i+o*c+Math.sin(e.ang)*l,sx:p,sy:m,grupo:1,alturaRel:d,dens:.42+.32*u,seedX:n()*61,seedY:n()*61,rot:(n()-.5)*.28,drift:.45+n()*.4})}}return r}function Bn(e){let t=new c(1,1,1,1),n=new ye;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;let r=e.length,i=new Float32Array(r*3),a=new Float32Array(r*4),o=new Float32Array(r*4),s=new Float32Array(r);for(let t=0;t<r;t++){let n=e[t];i[t*3+0]=n.x,i[t*3+1]=n.y,i[t*3+2]=n.z,a[t*4+0]=n.sx,a[t*4+1]=n.sy,a[t*4+2]=n.rot,a[t*4+3]=n.grupo,o[t*4+0]=n.alturaRel,o[t*4+1]=n.dens,o[t*4+2]=n.seedX,o[t*4+3]=n.seedY,s[t]=n.drift}return n.setAttribute(`aCentro`,new P(i,3)),n.setAttribute(`aEscala`,new P(a,4)),n.setAttribute(`aDados`,new P(o,4)),n.setAttribute(`aDrift`,new P(s,1)),n.instanceCount=r,n.boundingSphere=new Oe(new w(0,140,0),900),t.dispose(),n}function Vn(){return new V({transparent:!0,depthWrite:!1,depthTest:!0,side:2,fog:!1,uniforms:{uOpAbertura:{value:1},uOpHorizonte:{value:.72},uTempo:{value:0},uLeve:{value:0},uSunDir:{value:new w(.725,.725,.318)},uCorTopo:{value:new f(`#fff9f0`)},uCorBase:{value:new f(`#8da7c4`)},uCorBorda:{value:new f(`#ffe0b5`)},uCorNevoa:{value:new f(`#b6cce2`)},uEntardecer:{value:0},uNoite:{value:0}},vertexShader:`
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
        float sunPos = max(vSunDot, 1e-4);
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
    `})}function Hn({leve:e=!1}){let n=(0,J.useRef)(null),r=(0,J.useMemo)(()=>new w,[]),i=(0,J.useMemo)(()=>new f,[]),a=(0,J.useMemo)(()=>new f,[]),o=(0,J.useMemo)(()=>new f,[]),s=(0,J.useMemo)(()=>new f,[]),c=(0,J.useMemo)(()=>new f(`#fbfaf7`),[]),l=(0,J.useMemo)(()=>new f(`#fff0db`),[]),{geo:u,mat:d}=(0,J.useMemo)(()=>({geo:Bn(zn(e)),mat:Vn()}),[e]);return(0,J.useEffect)(()=>()=>{u.dispose(),d.dispose()},[u,d]),W((u,f)=>{let p=n.current;if(!p)return;let m=t.t,h=Fe(m),g=e?0:.62*(1-.35*Math.min(1,Math.max(0,(m-5.15)/.65))),_=h>.008||g>.01;if(p.visible=_,!_)return;let v=Pe(m);Pn(v.altSol,r,v.entardecer,v.noite);let y=1-Math.min(1,Math.max(0,(m-.12)/.82));i.copy(c).lerp(l,y*.65).lerp(v.nevoaSol,v.entardecer*.58).lerp(v.ceuHorizonte,v.noite*.82).multiplyScalar(1.08-.24*v.noite),a.copy(v.ceuMeio).lerp(v.ceuTopo,.38+.32*v.entardecer+.35*v.noite).multiplyScalar(.84-.22*v.noite),o.copy(v.sol).lerp(v.nevoaSol,.35).multiplyScalar(1.18-.42*v.noite),s.copy(v.nevoa).lerp(v.nevoaSol,v.entardecer*.35);let b=d.uniforms;b.uOpAbertura.value=h,b.uOpHorizonte.value=g,b.uLeve.value=+!!e,b.uSunDir.value.copy(r),b.uCorTopo.value.copy(i),b.uCorBase.value.copy(a),b.uCorBorda.value.copy(o),b.uCorNevoa.value.copy(s),b.uEntardecer.value=v.entardecer,b.uNoite.value=v.noite,A.reduzirMovimento||(b.uTempo.value+=Math.min(f,.05))}),(0,Y.jsx)(`mesh`,{ref:n,geometry:u,material:d,frustumCulled:!1,renderOrder:1})}var Un=360;function Wn(){let e=new c(1,1,1,1),t=new ye;t.index=e.index,t.attributes.position=e.attributes.position,t.attributes.uv=e.attributes.uv;let n=new Float32Array(Un*3),r=new Float32Array(Un*4),i=19307,a=()=>(i=i*16807%2147483647,(i-1)/2147483646);for(let e=0;e<Un;e++){let t=e<56,i=a()*Math.PI*2,o=t?3.2:2.6,s=t?14.5:16.5,c=o+a()**.72*(s-o),l=Math.cos(i)*c*1.25,u=Math.sin(i)*c*.82,d=-2.6-a()*30;n[e*3+0]=l,n[e*3+1]=u,n[e*3+2]=d;let f=a(),p=t?.65+a()*.55:.9+a()*1.15,m=t?5.5+a()*4.5:1.5+a()*2.8,h=t?-(.18+a()*.22):.015+a()*.018;r[e*4+0]=f,r[e*4+1]=p,r[e*4+2]=m,r[e*4+3]=h}return t.setAttribute(`aOffset`,new P(n,3)),t.setAttribute(`aSeed`,new P(r,4)),t.instanceCount=Un,e.dispose(),t}function Gn(){return new V({transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,fog:!1,uniforms:{uForca:{value:0},uFase:{value:0},uDirLocal:{value:new w(0,0,1)},uCor:{value:new f(`#eef2f8`)},uGanho:{value:1}},vertexShader:`
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
    `})}function Kn({leve:n}){let r=L(e=>e.scene),i=L(e=>e.camera),a=(0,J.useRef)(null),o=typeof window<`u`&&window.location.search.includes(`vento_particulas`),s=!n||o,c=(0,J.useMemo)(()=>s?{geo:Wn(),mat:Gn()}:null,[s]);(0,J.useEffect)(()=>{if(c)return()=>{c.geo.dispose(),c.mat.dispose()}},[c]);let l=(0,J.useRef)({iniciado:!1,prevPos:new w,delta:new w,velDirMundo:new w(0,0,-1),invQuat:new k,dirLocal:new w(0,0,1),corAlvo:new f,corNeblina:new f,velSuave:0,intensidade:0,fase:0});return W((n,o)=>{let s=l.current;if(A.reduzirMovimento){N.forca=0,N.vel=0,s.velSuave=0,s.intensidade=0,s.prevPos.copy(i.position),s.iniciado=!0,a.current&&(a.current.visible=!1);return}let d=Math.min(Math.max(o,1/120),.1);if(!s.iniciado){s.prevPos.copy(i.position),s.iniciado=!0,a.current&&(a.current.visible=!1);return}s.delta.subVectors(i.position,s.prevPos),s.prevPos.copy(i.position);let f=s.delta.length(),p=f/d;f>.004&&(s.delta.divideScalar(f),s.velDirMundo.lerp(s.delta,1-Math.exp(-10*d)).normalize());let g=p>s.velSuave?1-Math.exp(-9*d):1-Math.exp(-4.5*d);s.velSuave+=(p-s.velSuave)*g;let _=u.ativa&&!m.ativa?0:De(12,52,s.velSuave),v=typeof performance<`u`?performance.now():0,y=(xe.ate-v)/1e3,b=y>0?De(0,.55,y):0,x=Math.max(_,b),S=x>s.intensidade?1-Math.exp(-6.5*d):1-Math.exp(-3*d);s.intensidade=h(s.intensidade+(x-s.intensidade)*S);let C=s.intensidade,w=C*C*(3-2*C);if(N.forca=w,N.vel=s.velSuave,w>.002&&r.fog instanceof e){let e=r.fog;e.near=Math.max(28,e.near*(1-.42*w)),e.far=Math.max(e.near+120,e.far*(1-.32*w));let n=Pe(t.t);s.corNeblina.set(n.noite>.5?`#4a5f8a`:`#f2efe9`),e.color.lerp(s.corNeblina,.12*w)}if(!c||!a.current)return;let T=w>.005;if(a.current.visible=T,!T)return;a.current.position.copy(i.position),a.current.quaternion.copy(i.quaternion),s.invQuat.copy(i.quaternion).invert(),s.velSuave>3?s.dirLocal.copy(s.velDirMundo).negate().applyQuaternion(s.invQuat):s.dirLocal.set(0,0,1),s.dirLocal.lengthSq()<1e-4?s.dirLocal.set(0,0,1):s.dirLocal.normalize(),s.fase+=d*(.85+1.65*w+Math.min(1.4,s.velSuave/70));let E=Pe(t.t);s.corAlvo.set(`#f4f6fa`).lerp(s.corNeblina.set(`#9fb8ff`),E.noite*.75);let D=c.mat.uniforms;D.uForca.value=w,D.uFase.value=s.fase,D.uDirLocal.value.copy(s.dirLocal),D.uCor.value.copy(s.corAlvo),D.uGanho.value=.95-.25*E.noite}),!s||!c?null:(0,Y.jsx)(`mesh`,{ref:a,geometry:c.geo,material:c.mat,visible:!1,frustumCulled:!1,renderOrder:10})}var qn=typeof window>`u`||!new URLSearchParams(window.location.search).has(`aces`),Jn=[`map`,`normalMap`,`roughnessMap`,`metalnessMap`,`aoMap`,`emissiveMap`,`bumpMap`,`alphaMap`];function Yn({leve:e}){let t=L(e=>e.gl),n=L(e=>e.scene);return(0,J.useEffect)(()=>{let r=Math.min(e?4:16,t.capabilities.getMaxAnisotropy()),i=new WeakSet,a=()=>{n.traverse(e=>{let t=e.material;if(t){for(let e of Array.isArray(t)?t:[t])if(!i.has(e)){i.add(e);for(let t of Jn){let n=e[t];n&&n.isTexture&&!n.isDataTexture&&(n.anisotropy>=r||(n.anisotropy=r,n.generateMipmaps===!1&&!n.isCompressedTexture&&(n.generateMipmaps=!0,n.minFilter=I),n.needsUpdate=!0))}}}})};a();let o=window.setInterval(a,1500);return()=>window.clearInterval(o)},[t,n,e]),null}var Xn=he({default:()=>br});In();var Zn=(0,J.lazy)(()=>q(()=>import(`./Agua-CoZg6oaY.js`).then(e=>e.t),__vite__mapDeps([0,1,2]),import.meta.url)),Qn=(0,J.lazy)(()=>q(()=>import(`./Cidade-CuYrq3xy.js`).then(e=>e.t),__vite__mapDeps([3,1,4,5,2,6,7,8,9,0]),import.meta.url)),$n=(0,J.lazy)(()=>q(()=>import(`./Montanhas-Cjs00Qtg.js`),__vite__mapDeps([10,1,6,7]),import.meta.url)),er=(0,J.lazy)(()=>q(()=>import(`./index-CWCdXYYb.js`).then(e=>e.n).then(e=>({default:e.Unique})),__vite__mapDeps([5,1,4,2,6,7,8,9]),import.meta.url)),tr=(0,J.lazy)(()=>q(()=>import(`./index-CWCdXYYb.js`).then(e=>e.n).then(e=>({default:e.Comerciais})),__vite__mapDeps([5,1,4,2,6,7,8,9]),import.meta.url)),nr=(0,J.lazy)(()=>q(()=>import(`./ApartamentoPBR-DvQQEVDN.js`),__vite__mapDeps([11,1,6,7,2,5,4,8,9]),import.meta.url)),rr=(0,J.lazy)(()=>q(()=>import(`./ProjetosExtras-BTgzd9Tg.js`),__vite__mapDeps([12,1,6,7,8,2,13,3,4,5,9,0]),import.meta.url)),ir=(0,J.lazy)(()=>q(()=>import(`./Clicaveis-q-WG7lgt.js`),__vite__mapDeps([13,1,3,4,5,2,6,7,8,9,0]),import.meta.url)),ar=(0,J.lazy)(()=>q(()=>import(`./ExplorarCidade-B4EuM7Tp.js`),__vite__mapDeps([14,1,3,4,5,2,6,7,8,9,0,13]),import.meta.url)),or=(0,J.lazy)(()=>q(()=>import(`./PosProcesso-DMqpLgrc.js`),__vite__mapDeps([15,1,2]),import.meta.url));function sr({de:e,ate:n,children:r}){let[i,a]=(0,J.useState)(()=>t.t>=e&&t.t<=n);return W(()=>{let r=t.t>=e&&t.t<=n;r!==i&&a(r)}),i?(0,Y.jsx)(J.Suspense,{fallback:null,children:r}):null}var cr=new w,lr=.17;function ur(){let e=L(e=>e.camera),n=(0,J.useMemo)(()=>new w,[]),r=(0,J.useMemo)(()=>new w,[]),i=(0,J.useRef)(!1),a=(0,J.useRef)(0);return(0,J.useEffect)(()=>{if(typeof location<`u`&&location.search.includes(`dbg`))return Object.assign(window,{__cam:e,__glCam:e}),()=>{let t=window;t.__cam===e&&delete t.__cam,t.__glCam===e&&delete t.__glCam}},[e]),W(({size:o},s)=>{if(u.ativa&&!m.ativa){a.current=0,e.view?.enabled&&e.clearViewOffset();return}let c=m.ativa?Re(s,e.position,n,r,o.width/Math.max(1,o.height)):Ie(t.t,n,r),l=o.width>=900&&!m.ativa,d=l?De(2.86,3.02,t.t)*(1-De(4.96,5.12,t.t)):0;if(!Number.isFinite(n.x)||!Number.isFinite(r.x)||!Number.isFinite(c))return;let f=Number.isFinite(s)&&s>0?Math.min(s,.1):1/60;if(!i.current||A.reduzirMovimento)e.position.copy(n),cr.copy(r),e.fov=c,a.current=d,i.current=!0;else{let t=1-Math.exp(-4*f);e.position.lerp(n,t),cr.lerp(r,t),e.fov+=(c-e.fov)*t,a.current=l?a.current+(d-a.current)*t:0}e.lookAt(cr),a.current>5e-4?e.setViewOffset(o.width,o.height,-a.current*lr*o.width,0,o.width,o.height):e.view?.enabled?e.clearViewOffset():e.updateProjectionMatrix()}),null}function dr({estrelasQtd:e=2500,leve:n=!1}){let r=(0,J.useMemo)(()=>new V({side:1,depthWrite:!1,fog:!1,uniforms:{uTopo:{value:new f(`#2e68b0`)},uMeio:{value:new f(`#6fa8da`)},uHorizonte:{value:new f(`#d5e4f0`)},uNevoaSol:{value:new f(`#eee0c9`)},uSolCor:{value:new f(`#ffebd0`)},uSunDir:{value:new w(.725,.725,.318)},uEntardecer:{value:0},uNoite:{value:0},uTempo:{value:0},uLeve:{value:0}},vertexShader:`
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
            float sunAz = clamp(azDot * 0.5 + 0.5, 1e-4, 1.0);
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

            vec3 ceu = mix(horBase, meioBase, smoothstep(0.0, 0.28, pow(max(h, 1e-4), 0.68)));
            ceu = mix(ceu, uTopo, smoothstep(0.16, 0.88, pow(max(h, 1e-4), 0.62)));

            // Abaixo do horizonte: mistura suave para a bruma (evita recorte duro em reflexos na água)
            float abaixo = smoothstep(0.0, -0.18, y);
            ceu = mix(ceu, horBase * mix(0.82, 0.72, uNoite), abaixo);

            // Espalhamento Mie solar (dourado largo no entardecer) + halo lunar frio discreto à noite
            float sunDot = max(dot(dir, sunDir), 1e-4);
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
        `}),[]),i=(0,J.useRef)(null),a=(0,J.useMemo)(()=>new w,[]);W(({camera:e},s)=>{let c=Pe(t.t);Pn(c.altSol,a,c.entardecer,c.noite),r.uniforms.uTopo.value.copy(c.ceuTopo),r.uniforms.uMeio.value.copy(c.ceuMeio),r.uniforms.uHorizonte.value.copy(c.ceuHorizonte),r.uniforms.uNevoaSol.value.copy(c.nevoaSol),r.uniforms.uSolCor.value.copy(c.sol),r.uniforms.uSunDir.value.copy(a),r.uniforms.uEntardecer.value=c.entardecer,r.uniforms.uNoite.value=c.noite,r.uniforms.uLeve.value=+!!n,A.reduzirMovimento||(r.uniforms.uTempo.value+=Math.min(s,.05)),i.current&&(i.current.visible=c.noite>.42),o.current?.position.copy(e.position)});let o=(0,J.useRef)(null);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`mesh`,{ref:o,material:r,renderOrder:-1,frustumCulled:!1,children:(0,Y.jsx)(`sphereGeometry`,{args:[1200,32,16]})}),(0,Y.jsx)(`group`,{ref:i,children:(0,Y.jsx)(Sn,{radius:700,depth:120,count:e,factor:8,saturation:0,fade:!0,speed:0})})]})}function fr({leve:e}){let n=(0,J.useRef)(null),[r,i]=(0,J.useState)(null);(0,J.useEffect)(()=>{let e=!0;return q(()=>import(`./Agua-CoZg6oaY.js`).then(e=>e.t).then(t=>{e&&i({distanciaAgua:t.distanciaAgua,naFaixaPonte:t.naFaixaPonte})}),__vite__mapDeps([0,1,2]),import.meta.url),()=>{e=!1}},[]);let a=(0,J.useMemo)(()=>{if(!r)return null;let{distanciaAgua:t,naFaixaPonte:n}=r,i=[];for(let e=-120;e<=160;e+=16)for(let r of[15.6,28.4]){if(n(e,r,3)||t(e,r)<5)continue;let a=r<22?r+1.35:r-1.35;i.push({x:e,z:a,rx:13.5,rz:10.5,ganho:1,varTom:Math.abs(e*13+Math.round(r*7))%17/17*2-1})}if(!e){for(let[e,t,n,r,a]of[[0,14.4,15,8.5,.78],[46,13.8,12.5,7.5,.82],[66,13.8,12.5,7.5,.82],[88,13.8,13,7.5,.8],[112,13.8,13,7.5,.82]])i.push({x:e,z:t,rx:n,rz:r,ganho:a,varTom:.25});let e=[22,-70,100],r=[-34,33,136,-116];for(let a of e)for(let e of r)a!==22&&(n(e,a,6)||t(e,a)<8||i.push({x:e,z:a,rx:16,rz:16,ganho:.65,varTom:-.2}))}let a=e?2:6,o=new c(1,1,a,a);o.rotateX(-Math.PI/2);let s=new ye;s.index=o.index,s.attributes.position=o.attributes.position,s.attributes.uv=o.attributes.uv;let l=i.length,u=new Float32Array(l*4),d=new Float32Array(l*2);for(let e=0;e<l;e++){let t=i[e];u[e*4+0]=t.x,u[e*4+1]=t.z,u[e*4+2]=t.rx,u[e*4+3]=t.rz,d[e*2+0]=t.ganho,d[e*2+1]=t.varTom}return s.setAttribute(`aPosEsc`,new P(u,4)),s.setAttribute(`aMeta`,new P(d,2)),s.instanceCount=l,s.boundingSphere=new Oe(new w(20,0,20),300),o.dispose(),{geo:s,mat:new V({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,fog:!1,uniforms:{uForca:{value:0},uNoite:{value:0}},vertexShader:`
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
      `})}},[r,e]);return(0,J.useEffect)(()=>{if(a)return()=>{a.geo.dispose(),a.mat.dispose()}},[a]),W(()=>{let e=n.current;if(!e||!a)return;let r=Pe(t.t),i=r.luzes;e.visible=i>.01,e.visible&&(a.mat.uniforms.uForca.value=i,a.mat.uniforms.uNoite.value=r.noite)}),a?(0,Y.jsx)(`mesh`,{ref:n,geometry:a.geo,material:a.mat,frustumCulled:!1,renderOrder:2}):null}function pr({sombras:e,leve:n,semNevoa:r}){let i=(0,J.useRef)(null),a=(0,J.useRef)(null),o=(0,J.useRef)(null),s=L(e=>e.scene),c=L(e=>e.camera),l=L(e=>e.gl),u=(0,J.useMemo)(()=>new w,[]),d=(0,J.useMemo)(()=>new f,[]),p=(0,J.useMemo)(()=>new f,[]),m=(0,J.useMemo)(()=>new f,[]);return(0,J.useEffect)(()=>{s.environmentRotation.set(0,En,0)},[s]),W((e,f)=>{let h=t.t,g=Pe(h),_=.025*De(2.98,3.22,h)*(1-De(4.92,5.1,h)),v=g.exposicao+_,y=Number.isFinite(f)&&f>0?Math.min(f,.05):1/60;if(o.current===null||!Number.isFinite(o.current)||A.reduzirMovimento)o.current=Number.isFinite(v)?v:.84;else if(Number.isFinite(v)){let e=1-Math.exp(-3.4*y);o.current+=(v-o.current)*e}Number.isFinite(o.current)&&(l.toneMappingExposure=o.current),Pn(g.altSol,u,g.entardecer,g.noite),i.current&&(i.current.position.copy(cr).addScaledVector(u,210),i.current.target.position.copy(cr),i.current.target.updateMatrixWorld(),i.current.color.copy(g.sol),i.current.intensity=g.solInt,i.current.shadow.radius=2.6+1.5*g.entardecer+.6*g.noite),a.current&&(d.copy(g.ceuTopo).lerp(g.ceuMeio,.35+.15*g.entardecer),a.current.color.copy(d),a.current.groundColor.copy(g.chao),a.current.intensity=g.amb),s.environmentIntensity=g.env*(.36-.08*g.entardecer-.06*g.noite),s.environmentRotation.set(0,En-1.48*g.entardecer-2.1*g.noite,0);let b=1.04+.04*g.entardecer-.08*g.noite;p.copy(g.nevoa).multiplyScalar(b),m.copy(g.nevoaSol).multiplyScalar(b+.06*g.entardecer);let x=Math.max(0,c.position.y-70);if(r)s.fog&&=null,Fn({dirSol:u,corSolNevoa:m,densidade:0,decaimentoAltura:.024,nevoaMax:0,potenciaMie:3.4,baseAltura:-2,forcaMie:0,entardecer:g.entardecer,noite:g.noite,reforcoHorizonte:0,leve:!0});else{if(s.fog){let e=s.fog;e.color.copy(p),e.near=185+x*3,e.far=780+x*7.5}let e=(.0017+32e-5*g.entardecer-28e-5*g.noite)/(1+x*.015);Fn({dirSol:u,corSolNevoa:m,densidade:e,decaimentoAltura:.024+.004*g.entardecer,nevoaMax:.84+.04*g.entardecer,potenciaMie:3.4-1.05*g.entardecer+.8*g.noite,baseAltura:-2,forcaMie:.72+.22*g.entardecer-.26*g.noite,entardecer:g.entardecer,noite:g.noite,reforcoHorizonte:.35+.45*g.entardecer,leve:n})}Le(g.luzes)}),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`hemisphereLight`,{ref:a,args:[`#568ed4`,`#3c3d37`,.34]}),(0,Y.jsx)(`directionalLight`,{ref:i,castShadow:e,"shadow-mapSize":[2048,2048],"shadow-bias":-26e-5,"shadow-normalBias":.055,"shadow-radius":2.6,"shadow-blurSamples":12,"shadow-camera-left":-115,"shadow-camera-right":115,"shadow-camera-top":115,"shadow-camera-bottom":-115,"shadow-camera-near":15,"shadow-camera-far":520})]})}function mr({aoPronto:e}){return(0,J.useEffect)(()=>{g(),e()},[e]),null}function hr(){let e=L(e=>e.gl),t=L(e=>e.scene),n=L(e=>e.camera);return(0,J.useEffect)(()=>{let r=window.setTimeout(()=>{e.compileAsync(t,n).catch(()=>{})},400);return()=>clearTimeout(r)},[e,t,n]),null}function gr(){return(0,J.useEffect)(()=>{let e=window.setTimeout(()=>{q(()=>import(`./ApartamentoPBR-DvQQEVDN.js`),__vite__mapDeps([11,1,6,7,2,5,4,8,9]),import.meta.url)},2800);return()=>clearTimeout(e)},[]),null}function _r(){return typeof window>`u`?!1:window.matchMedia(`(max-width: 768px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024}function vr({ativo:e,aoDetectarPreto:t}){let n=L(e=>e.gl),r=(0,J.useRef)(0),i=(0,J.useRef)(!1),a=(0,J.useMemo)(()=>new Uint8Array(4),[]);return W(()=>{if(!e||i.current||(r.current+=1,r.current<120||r.current%90!=0))return;let o=n.getContext(),s=n.domElement.width,c=n.domElement.height;if(s<4||c<4)return;let l=[[Math.floor(s*.5),Math.floor(c*.5)],[Math.floor(s*.25),Math.floor(c*.35)],[Math.floor(s*.75),Math.floor(c*.65)]],u=0;for(let[e,t]of l){o.readPixels(e,t,1,1,o.RGBA,o.UNSIGNED_BYTE,a);let n=Math.max(a[0],a[1],a[2]);n>u&&(u=n)}u<5&&(i.current=!0,t())}),null}var yr=class extends J.Component{state={erro:!1};static getDerivedStateFromError(){return{erro:!0}}componentDidCatch(){this.props.aoFalhar()}render(){return this.state.erro?null:this.props.children}};function br({aoPerderContexto:e}){let[t]=(0,J.useState)(_r),[n,r]=(0,J.useState)(()=>_r()?`baixa`:`alta`),[i,o]=(0,J.useState)(!1),[s,c]=(0,J.useState)(!1),[l,d]=(0,J.useState)(!1),[f,m]=(0,J.useState)(()=>u.ativa),h=typeof window<`u`?window.location.search:``,g=t||n===`baixa`,_=(0,J.useRef)(0);(0,J.useEffect)(()=>{i&&!_.current&&(_.current=performance.now())},[i]);let y=h.includes(`pos`)&&n===`alta`&&!t&&!s&&!h.includes(`sempos`),b=t?`hdri/kloofendal_48d_partly_cloudy_puresky_512.hdr`:`hdri/kloofendal_48d_partly_cloudy_puresky_1k.hdr`;return(0,J.useEffect)(()=>{let e=()=>m(u.ativa);return e(),v(e)},[]),(0,Y.jsxs)(qe,{shadows:!g&&{type:1},dpr:t?[.75,1]:n===`baixa`?[1,1.25]:[1,2],gl:{antialias:!g&&!y,powerPreference:`high-performance`,stencil:!1},camera:{fov:38,near:.1,far:2600,position:[95,70,135]},onCreated:({gl:t})=>{t.toneMapping=qn?6:4,t.toneMappingExposure=.84;let n=null;t.domElement.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),c(!0),r(`baixa`),n!==null&&window.clearTimeout(n),n=window.setTimeout(()=>e?.(),1500)}),t.domElement.addEventListener(`webglcontextrestored`,()=>{n!==null&&(window.clearTimeout(n),n=null),t.toneMapping=qn?6:4});let i=E,o=i.onProgress;i.onProgress=(e,t,n)=>{typeof o==`function`&&o(e,t,n),!p.aberturaPronta&&n&&a(t/n*100)}},children:[(0,Y.jsx)(Tn,{flipflops:3,onDecline:()=>{_.current&&performance.now()-_.current>12e3&&r(`baixa`)}}),(0,Y.jsx)(Cn,{}),(0,Y.jsx)(Yn,{leve:g}),(0,Y.jsx)(vr,{ativo:i,aoDetectarPreto:()=>{c(!0),d(!0),r(`baixa`)}}),!l&&(0,Y.jsx)(`fog`,{attach:`fog`,args:[`#b1cae2`,185,780]}),(0,Y.jsx)(dr,{estrelasQtd:g?400:2500,leve:g}),(0,Y.jsx)(pr,{sombras:!g,leve:g,semNevoa:l}),(0,Y.jsx)(ur,{}),!l&&(0,Y.jsx)(Kn,{leve:g}),(0,Y.jsxs)(J.Suspense,{fallback:null,children:[(0,Y.jsx)(yn,{files:ue(b),background:!1,environmentRotation:[0,En,0]}),(0,Y.jsx)(Hn,{leve:g}),(0,Y.jsx)(mr,{aoPronto:()=>o(!0)})]}),i&&(0,Y.jsxs)(J.Suspense,{fallback:null,children:[(0,Y.jsx)($n,{}),!h.includes(`semagua`)&&(0,Y.jsx)(Zn,{qualidade:g?`baixa`:n}),(0,Y.jsx)(Qn,{}),(0,Y.jsx)(fr,{leve:g}),(0,Y.jsx)(er,{}),(0,Y.jsx)(sr,{de:1.6,ate:4.5,children:(0,Y.jsx)(nr,{})}),(0,Y.jsx)(sr,{de:3.7,ate:5.75,children:(0,Y.jsx)(tr,{})}),(0,Y.jsx)(sr,{de:.7,ate:8,children:(0,Y.jsx)(rr,{})}),(0,Y.jsx)(ir,{}),f&&(0,Y.jsx)(J.Suspense,{fallback:null,children:(0,Y.jsx)(ar,{foco:cr})}),(0,Y.jsx)(gr,{}),(0,Y.jsx)(hr,{})]}),y&&i&&(0,Y.jsx)(yr,{aoFalhar:()=>c(!0),children:(0,Y.jsx)(J.Suspense,{fallback:null,children:(0,Y.jsx)(or,{ativo:!0})})})]})}export{br as default,Je as i,qn as n,Dt as r,Xn as t};