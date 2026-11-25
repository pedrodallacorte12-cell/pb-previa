import{A as e,Cn as t,Dt as n,Et as r,G as i,Ht as a,Jn as o,M as s,Mt as c,Nt as l,Ot as u,U as d,Vt as f,Wn as p,Zn as m,_t as h,bn as g,dn as _,en as v,er as y,h as b,k as x,nn as S,p as C,pn as w,s as ee,tn as T,tt as E,u as D,un as O,vn as k,wn as A,xn as j,yn as M}from"./events-e51d7528.esm-Ox0bj2Ds.js";import{i as N,r as P}from"./Cena-BcWkaroE.js";import{t as F}from"./Gltf-CVSNoIWC.js";import{a as I,t as L}from"./roteiro-DlK7Xoq7.js";import{r as R}from"./index-Cb4ezeUV.js";var z=y(m()),B=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!=`function`;function V(e,t){let n=b(e=>e.gl),r=C(_,B(e)?Object.values(e):e);return(0,z.useLayoutEffect)(()=>{t?.(r)},[t]),(0,z.useEffect)(()=>{if(`initTexture`in n){let e=[];Array.isArray(r)?e=r:r instanceof O?e=[r]:B(r)&&(e=Object.values(r)),e.forEach(e=>{e instanceof O&&n.initTexture(e)})}},[n,r]),(0,z.useMemo)(()=>{if(B(e)){let t={},n=0;for(let i in e)t[i]=r[n++];return t}return r},[e,r])}V.preload=e=>C.preload(_,e),V.clear=e=>C.clear(_,e);var H=class extends S{constructor(e=new M){super({uniforms:{inputBuffer:new w(null),depthBuffer:new w(null),resolution:new w(new M),texelSize:new w(new M),halfTexelSize:new w(new M),kernel:new w(0),scale:new w(1),cameraNear:new w(0),cameraFar:new w(1),minDepthThreshold:new w(0),maxDepthThreshold:new w(1),depthScale:new w(0),depthToBlurRatioBias:new w(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${P>=154?`colorspace_fragment`:`encodings_fragment`}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:0,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}},U=class{constructor({gl:n,resolution:r,width:i=500,height:a=500,minDepthThreshold:o=0,maxDepthThreshold:c=1,depthScale:l=0,depthToBlurRatioBias:d=.25}){this.renderToScreen=!1,this.renderTargetA=new t(r,r,{minFilter:h,magFilter:h,stencilBuffer:!1,depthBuffer:!1,type:E}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new H,this.convolutionMaterial.setTexelSize(1/i,1/a),this.convolutionMaterial.setResolution(new M(i,a)),this.scene=new T,this.camera=new s,this.convolutionMaterial.uniforms.minDepthThreshold.value=o,this.convolutionMaterial.uniforms.maxDepthThreshold.value=c,this.convolutionMaterial.uniforms.depthScale.value=l,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=d,this.convolutionMaterial.defines.USE_DEPTH=l>0;let f=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),p=new Float32Array([0,0,2,0,0,2]),m=new e;m.setAttribute(`position`,new x(f,3)),m.setAttribute(`uv`,new x(p,2)),this.screen=new u(m,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,n){let r=this.scene,i=this.camera,a=this.renderTargetA,o=this.renderTargetB,s=this.convolutionMaterial,c=s.uniforms;c.depthBuffer.value=t.depthTexture;let l=s.kernel,u=t,d,f,p;for(f=0,p=l.length-1;f<p;++f)d=f&1?o:a,c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(d),e.render(r,i),u=d;c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(this.renderToScreen?null:n),e.render(r,i)}},te=class extends l{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;(t=e.defines)!=null&&t.USE_UV||(e.defines.USE_UV=``),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}},W=z.forwardRef(({mixBlur:e=0,mixStrength:r=1,resolution:o=256,blur:s=[0,0],minDepthThreshold:c=.9,maxDepthThreshold:l=1,depthScale:u=0,depthToBlurRatioBias:p=.25,mirror:m=0,distortion:_=1,mixContrast:v=1,distortionMap:y,reflectorOffset:x=0,...S},C)=>{ee({MeshReflectorMaterialImpl:te});let w=b(({gl:e})=>e),T=b(({camera:e})=>e),O=b(({scene:e})=>e);s=Array.isArray(s)?s:[s,s];let A=s[0]+s[1]>0,M=s[0],P=s[1],F=z.useRef(null);z.useImperativeHandle(C,()=>F.current,[]);let[I]=z.useState(()=>new a),[L]=z.useState(()=>new g),[R]=z.useState(()=>new g),[B]=z.useState(()=>new g),[V]=z.useState(()=>new n),[H]=z.useState(()=>new g(0,0,-1)),[W]=z.useState(()=>new j),[G]=z.useState(()=>new g),[K]=z.useState(()=>new g),[q]=z.useState(()=>new j),[J]=z.useState(()=>new n),[Y]=z.useState(()=>new f),X=z.useCallback(()=>{var e;let t=F.current.parent||((e=F.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t||(R.setFromMatrixPosition(t.matrixWorld),B.setFromMatrixPosition(T.matrixWorld),V.extractRotation(t.matrixWorld),L.set(0,0,1),L.applyMatrix4(V),R.addScaledVector(L,x),G.subVectors(R,B),G.dot(L)>0))return;G.reflect(L).negate(),G.add(R),V.extractRotation(T.matrixWorld),H.set(0,0,-1),H.applyMatrix4(V),H.add(B),K.subVectors(R,H),K.reflect(L).negate(),K.add(R),Y.position.copy(G),Y.up.set(0,1,0),Y.up.applyMatrix4(V),Y.up.reflect(L),Y.lookAt(K),Y.far=T.far,Y.updateMatrixWorld(),Y.projectionMatrix.copy(T.projectionMatrix),J.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),J.multiply(Y.projectionMatrix),J.multiply(Y.matrixWorldInverse),J.multiply(t.matrixWorld),I.setFromNormalAndCoplanarPoint(L,R),I.applyMatrix4(Y.matrixWorldInverse),W.set(I.normal.x,I.normal.y,I.normal.z,I.constant);let n=Y.projectionMatrix;q.x=(Math.sign(W.x)+n.elements[8])/n.elements[0],q.y=(Math.sign(W.y)+n.elements[9])/n.elements[5],q.z=-1,q.w=(1+n.elements[10])/n.elements[14],W.multiplyScalar(2/W.dot(q)),n.elements[2]=W.x,n.elements[6]=W.y,n.elements[10]=W.z+1,n.elements[14]=W.w},[T,x]),[Z,Q,ne,$]=z.useMemo(()=>{let n={minFilter:h,magFilter:h,type:E},a=new t(o,o,n);a.depthBuffer=!0,a.depthTexture=new i(o,o),a.depthTexture.format=d,a.depthTexture.type=k;let s=new t(o,o,n);return[a,s,new U({gl:w,resolution:o,width:M,height:P,minDepthThreshold:c,maxDepthThreshold:l,depthScale:u,depthToBlurRatioBias:p}),{mirror:m,textureMatrix:J,mixBlur:e,tDiffuse:a.texture,tDepth:a.depthTexture,tDiffuseBlur:s.texture,hasBlur:A,mixStrength:r,minDepthThreshold:c,maxDepthThreshold:l,depthScale:u,depthToBlurRatioBias:p,distortion:_,distortionMap:y,mixContrast:v,"defines-USE_BLUR":A?``:void 0,"defines-USE_DEPTH":u>0?``:void 0,"defines-USE_DISTORTION":y?``:void 0}]},[w,M,P,J,o,m,A,e,r,c,l,u,p,_,y,v]);return D(()=>{var e;let t=F.current.parent||((e=F.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t)return;t.visible=!1;let n=w.xr.enabled,r=w.shadowMap.autoUpdate;X(),w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(Z),w.state.buffers.depth.setMask(!0),w.autoClear||w.clear(),w.render(O,Y),A&&ne.render(w,Z,Q),w.xr.enabled=n,w.shadowMap.autoUpdate=r,t.visible=!0,w.setRenderTarget(null)}),z.createElement(`meshReflectorMaterialImpl`,N({attach:`material`,key:`key`+$[`defines-USE_BLUR`]+$[`defines-USE_DEPTH`]+$[`defines-USE_DISTORTION`],ref:F},$,S))}),G=A(),K=typeof window<`u`&&(window.matchMedia(`(max-width: 768px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024),q=o(K?`modelos/apartamento-leve.glb`:`modelos/apartamento.glb`),J=o(`texturas/interior/lightmap_gi.webp`),Y=new Set([`vidro`,`vidro_guarda`,`vidro_vaso`,`espelho`,`luz`,`luz_sanca`,`lareira_brasa`,`tela`]);function X(){return typeof window>`u`?!1:window.matchMedia(`(max-width: 900px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024}function Z(e,t){return new c({color:t,metalness:.12,roughness:.04,transparent:!0,opacity:e,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1})}function Q(){let{scene:e}=F(q,!1,!0),t=V(J),[n,i]=(0,z.useState)(()=>X()),[a,o]=(0,z.useState)(!1),s=(0,z.useRef)(!1);(0,z.useEffect)(()=>{let e=()=>i(X());return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let{lmUV1:c,lmUV0:u}=(0,z.useMemo)(()=>{t.flipY=!1,t.channel=1,t.colorSpace=v,t.anisotropy=4,t.needsUpdate=!0;let e=t.clone();return e.flipY=!1,e.channel=0,e.colorSpace=v,e.anisotropy=4,e.needsUpdate=!0,{lmUV1:t,lmUV0:e}},[t]);(0,z.useEffect)(()=>()=>{u.dispose()},[u]);let{raiz:d,materiaisLightMap:f,materiaisLed:m,materialBrasa:h,pisoTextura:g}=(0,z.useMemo)(()=>{let t=e.clone(!0),n=[],r=[],i=null,a=null,o=Z(.46,`#26343e`),s=Z(.22,`#dce7ec`),d=Z(.32,`#eaf2f4`),f=new l({color:`#e8ecee`,metalness:1,roughness:.025,envMapIntensity:1.6}),p=new Map;return t.traverse(e=>{let t=e;if(!t.isMesh)return;let l=t.material,m=l?.name??``,h=p.get(m);if(!h){if(m===`vidro`)h=o;else if(m===`vidro_guarda`)h=s;else if(m===`vidro_vaso`)h=d;else if(m===`espelho`)h=f;else{let e=l.clone();if(e.name=m,e.envMapIntensity=m===`inox`||m===`latao`?1.35:.85,e.map&&(e.map.anisotropy=8,e.map.colorSpace=v),m===`porcelanato`&&e.map&&(a=e.map),m===`luz`||m===`luz_sanca`)e.color.set(`#fff9ee`),e.emissive.set(m===`luz`?`#ffdfa8`:`#ffd594`),e.emissiveIntensity=m===`luz`?2.8:2.1,e.toneMapped=!1,r.push(e);else if(m===`lareira_brasa`)e.color.set(`#2a1208`),e.emissive.set(`#ff7624`),e.emissiveIntensity=2.4,e.toneMapped=!1,i=e;else if(!Y.has(m)){let r=!!t.geometry.attributes.uv1,i=!!t.geometry.attributes.uv;(r||i)&&(e.lightMap=r?c:u,e.lightMapIntensity=.72,e.aoMap&&(e.aoMap.channel=+!!r,e.aoMapIntensity=.78),n.push(e))}h=e}p.set(m,h)}t.material=h;let g=m.startsWith(`vidro`);t.castShadow=!g&&!m.startsWith(`luz`)&&m!==`lareira_brasa`,t.receiveShadow=!g}),{raiz:t,materiaisLightMap:n,materiaisLed:r,materialBrasa:i,pisoTextura:a}},[e,c,u]);(0,z.useEffect)(()=>()=>{K&&(R(d),F.clear(q))},[d]);let _=(0,z.useRef)(null),y=(0,z.useRef)(null),b=(0,z.useRef)(null),x=(0,z.useRef)(null),S=(0,z.useRef)(null),C=(0,z.useRef)(null);return D(({clock:e})=>{let t=p.t,n=t>2.75&&t<4.1;if(_.current&&(_.current.visible=n),n!==s.current&&(s.current=n,o(n)),!n)return;let i=I(t).luzes,a=+(t>3.12&&t<3.99);y.current&&(y.current.intensity=8+10*i),b.current&&(b.current.intensity=9+11*i),x.current&&(x.current.intensity=7+8*i),S.current&&(S.current.intensity=6+9*i),C.current&&(C.current.intensity=r.lerp(C.current.intensity,a*.55,.08));let c=.65+.35*i;for(let e=0;e<f.length;e++)f[e].lightMapIntensity=c;let l=1+.65*i;for(let e=0;e<m.length;e++){let t=m[e];t.emissiveIntensity=(t.name===`luz`?2.6:1.9)*l}h&&(h.emissiveIntensity=2.1+.35*Math.sin(e.elapsedTime*5.2)+.6*i)}),(0,G.jsxs)(`group`,{ref:_,position:[0,L,0],children:[(0,G.jsx)(`primitive`,{object:d}),!n&&a&&(0,G.jsxs)(`mesh`,{name:`apto_piso_reflexo_desktop`,position:[0,.023,3.25],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[(0,G.jsx)(`planeGeometry`,{args:[13.92,9.44]}),(0,G.jsx)(W,{mirror:.28,blur:[280,120],resolution:512,mixBlur:1.4,mixStrength:.62,mixContrast:1.04,roughness:.3,metalness:.04,color:`#ede7dd`,map:g??void 0,polygonOffset:!0,polygonOffsetFactor:-1})]}),(0,G.jsx)(`pointLight`,{ref:y,position:[-2.6,2.25,5.1],color:`#ffe6c2`,distance:12,decay:1.6}),!K&&(0,G.jsx)(`pointLight`,{ref:b,position:[-3.6,2.2,.4],color:`#ffdca8`,distance:10,decay:1.6}),(0,G.jsx)(`pointLight`,{ref:x,position:[3.6,2.25,5.5],color:`#fff0d8`,distance:11,decay:1.6}),!K&&(0,G.jsx)(`pointLight`,{ref:S,position:[-4,2.15,-4.2],color:`#ffddb0`,distance:9,decay:1.6}),(0,G.jsx)(`ambientLight`,{ref:C,color:`#fff4e4`,intensity:0})]})}export{Q as ApartamentoPBR,Q as default};