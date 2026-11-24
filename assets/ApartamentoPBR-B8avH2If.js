import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{$ as t,$t as n,At as r,B as i,E as a,Et as o,Kt as s,L as c,Lt as l,Qt as u,R as d,Rt as f,Tt as p,Z as m,Zt as h,a as g,bt as _,cn as v,ct as y,dn as b,en as x,ft as S,k as C,kt as w,pn as T,t as E,tn as D,u as O,v as k,x as A,xt as j,yt as M,zt as N}from"./roteiro-BzfiaTyL.js";import{t as P}from"./extends-CvVTau-c.js";import{a as F,i as I}from"./Cena-o5KVrpva.js";var L=class extends N{constructor(e=new u){super({uniforms:{inputBuffer:new s(null),depthBuffer:new s(null),resolution:new s(new u),texelSize:new s(new u),halfTexelSize:new s(new u),kernel:new s(0),scale:new s(1),cameraNear:new s(0),cameraFar:new s(1),minDepthThreshold:new s(0),maxDepthThreshold:new s(1),depthScale:new s(0),depthToBlurRatioBias:new s(.25)},fragmentShader:`#include <common>
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
          #include <${I>=154?`colorspace_fragment`:`encodings_fragment`}>
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
        }`,blending:0,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}},R=class{constructor({gl:e,resolution:t,width:n=500,height:r=500,minDepthThreshold:a=0,maxDepthThreshold:o=1,depthScale:s=0,depthToBlurRatioBias:l=.25}){this.renderToScreen=!1,this.renderTargetA=new D(t,t,{minFilter:S,magFilter:S,stencilBuffer:!1,depthBuffer:!1,type:y}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new L,this.convolutionMaterial.setTexelSize(1/n,1/r),this.convolutionMaterial.setResolution(new u(n,r)),this.scene=new f,this.camera=new i,this.convolutionMaterial.uniforms.minDepthThreshold.value=a,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=s,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=l,this.convolutionMaterial.defines.USE_DEPTH=s>0;let p=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),m=new Float32Array([0,0,2,0,0,2]),h=new d;h.setAttribute(`position`,new c(p,3)),h.setAttribute(`uv`,new c(m,2)),this.screen=new j(h,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,n){let r=this.scene,i=this.camera,a=this.renderTargetA,o=this.renderTargetB,s=this.convolutionMaterial,c=s.uniforms;c.depthBuffer.value=t.depthTexture;let l=s.kernel,u=t,d,f,p;for(f=0,p=l.length-1;f<p;++f)d=f&1?o:a,c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(d),e.render(r,i),u=d;c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(this.renderToScreen?null:n),e.render(r,i)}},z=class extends o{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;(t=e.defines)!=null&&t.USE_UV||(e.defines.USE_UV=``),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}},B=e(T()),V=B.forwardRef(({mixBlur:e=0,mixStrength:i=1,resolution:o=256,blur:s=[0,0],minDepthThreshold:c=.9,maxDepthThreshold:l=1,depthScale:u=0,depthToBlurRatioBias:d=.25,mirror:f=0,distortion:p=1,mixContrast:g=1,distortionMap:v,reflectorOffset:b=0,...C},T)=>{k({MeshReflectorMaterialImpl:z});let E=a(({gl:e})=>e),O=a(({camera:e})=>e),j=a(({scene:e})=>e);s=Array.isArray(s)?s:[s,s];let M=s[0]+s[1]>0,N=s[0],F=s[1],I=B.useRef(null);B.useImperativeHandle(T,()=>I.current,[]);let[L]=B.useState(()=>new r),[V]=B.useState(()=>new n),[H]=B.useState(()=>new n),[U]=B.useState(()=>new n),[W]=B.useState(()=>new _),[G]=B.useState(()=>new n(0,0,-1)),[K]=B.useState(()=>new x),[q]=B.useState(()=>new n),[J]=B.useState(()=>new n),[Y]=B.useState(()=>new x),[X]=B.useState(()=>new _),[Z]=B.useState(()=>new w),ee=B.useCallback(()=>{var e;let t=I.current.parent||((e=I.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t||(H.setFromMatrixPosition(t.matrixWorld),U.setFromMatrixPosition(O.matrixWorld),W.extractRotation(t.matrixWorld),V.set(0,0,1),V.applyMatrix4(W),H.addScaledVector(V,b),q.subVectors(H,U),q.dot(V)>0))return;q.reflect(V).negate(),q.add(H),W.extractRotation(O.matrixWorld),G.set(0,0,-1),G.applyMatrix4(W),G.add(U),J.subVectors(H,G),J.reflect(V).negate(),J.add(H),Z.position.copy(q),Z.up.set(0,1,0),Z.up.applyMatrix4(W),Z.up.reflect(V),Z.lookAt(J),Z.far=O.far,Z.updateMatrixWorld(),Z.projectionMatrix.copy(O.projectionMatrix),X.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),X.multiply(Z.projectionMatrix),X.multiply(Z.matrixWorldInverse),X.multiply(t.matrixWorld),L.setFromNormalAndCoplanarPoint(V,H),L.applyMatrix4(Z.matrixWorldInverse),K.set(L.normal.x,L.normal.y,L.normal.z,L.constant);let n=Z.projectionMatrix;Y.x=(Math.sign(K.x)+n.elements[8])/n.elements[0],Y.y=(Math.sign(K.y)+n.elements[9])/n.elements[5],Y.z=-1,Y.w=(1+n.elements[10])/n.elements[14],K.multiplyScalar(2/K.dot(Y)),n.elements[2]=K.x,n.elements[6]=K.y,n.elements[10]=K.z+1,n.elements[14]=K.w},[O,b]),[Q,te,ne,$]=B.useMemo(()=>{let n={minFilter:S,magFilter:S,type:y},r=new D(o,o,n);r.depthBuffer=!0,r.depthTexture=new t(o,o),r.depthTexture.format=m,r.depthTexture.type=h;let a=new D(o,o,n);return[r,a,new R({gl:E,resolution:o,width:N,height:F,minDepthThreshold:c,maxDepthThreshold:l,depthScale:u,depthToBlurRatioBias:d}),{mirror:f,textureMatrix:X,mixBlur:e,tDiffuse:r.texture,tDepth:r.depthTexture,tDiffuseBlur:a.texture,hasBlur:M,mixStrength:i,minDepthThreshold:c,maxDepthThreshold:l,depthScale:u,depthToBlurRatioBias:d,distortion:p,distortionMap:v,mixContrast:g,"defines-USE_BLUR":M?``:void 0,"defines-USE_DEPTH":u>0?``:void 0,"defines-USE_DISTORTION":v?``:void 0}]},[E,N,F,X,o,f,M,e,i,c,l,u,d,p,v,g]);return A(()=>{var e;let t=I.current.parent||((e=I.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t)return;t.visible=!1;let n=E.xr.enabled,r=E.shadowMap.autoUpdate;ee(),E.xr.enabled=!1,E.shadowMap.autoUpdate=!1,E.setRenderTarget(Q),E.state.buffers.depth.setMask(!0),E.autoClear||E.clear(),E.render(j,Z),M&&ne.render(E,Q,te),E.xr.enabled=n,E.shadowMap.autoUpdate=r,t.visible=!0,E.setRenderTarget(null)}),B.createElement(`meshReflectorMaterialImpl`,P({attach:`material`,key:`key`+$[`defines-USE_BLUR`]+$[`defines-USE_DEPTH`]+$[`defines-USE_DISTORTION`],ref:I},$,C))}),H=C(),U=b(`modelos/apartamento.glb`),W=b(`texturas/interior/lightmap_gi.webp`),G=new Set([`vidro`,`vidro_guarda`,`vidro_vaso`,`espelho`,`luz`,`luz_sanca`,`lareira_brasa`,`tela`]);function K(){return typeof window>`u`?!1:window.matchMedia(`(max-width: 900px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024}function q(e,t){return new p({color:t,metalness:.12,roughness:.04,transparent:!0,opacity:e,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1})}function J(){let{scene:e}=O(U,!1,!0),t=F(W),[n,r]=(0,B.useState)(()=>K()),[i,a]=(0,B.useState)(!1),s=(0,B.useRef)(!1);(0,B.useEffect)(()=>{let e=()=>r(K());return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let{lmUV1:c,lmUV0:u}=(0,B.useMemo)(()=>{t.flipY=!1,t.channel=1,t.colorSpace=l,t.anisotropy=4,t.needsUpdate=!0;let e=t.clone();return e.flipY=!1,e.channel=0,e.colorSpace=l,e.anisotropy=4,e.needsUpdate=!0,{lmUV1:t,lmUV0:e}},[t]);(0,B.useEffect)(()=>()=>{u.dispose()},[u]);let{raiz:d,materiaisLightMap:f,materiaisLed:p,materialBrasa:m,pisoTextura:h}=(0,B.useMemo)(()=>{let t=e.clone(!0),n=[],r=[],i=null,a=null,s=q(.46,`#26343e`),d=q(.22,`#dce7ec`),f=q(.32,`#eaf2f4`),p=new o({color:`#e8ecee`,metalness:1,roughness:.025,envMapIntensity:1.6}),m=new Map;return t.traverse(e=>{let t=e;if(!t.isMesh)return;let o=t.material,h=o?.name??``,g=m.get(h);if(!g){if(h===`vidro`)g=s;else if(h===`vidro_guarda`)g=d;else if(h===`vidro_vaso`)g=f;else if(h===`espelho`)g=p;else{let e=o.clone();if(e.name=h,e.envMapIntensity=h===`inox`||h===`latao`?1.35:.85,e.map&&(e.map.anisotropy=8,e.map.colorSpace=l),h===`porcelanato`&&e.map&&(a=e.map),h===`luz`||h===`luz_sanca`)e.color.set(`#fff9ee`),e.emissive.set(h===`luz`?`#ffdfa8`:`#ffd594`),e.emissiveIntensity=h===`luz`?2.8:2.1,e.toneMapped=!1,r.push(e);else if(h===`lareira_brasa`)e.color.set(`#2a1208`),e.emissive.set(`#ff7624`),e.emissiveIntensity=2.4,e.toneMapped=!1,i=e;else if(!G.has(h)){let r=!!t.geometry.attributes.uv1,i=!!t.geometry.attributes.uv;(r||i)&&(e.lightMap=r?c:u,e.lightMapIntensity=.72,e.aoMap&&(e.aoMap.channel=+!!r,e.aoMapIntensity=.78),n.push(e))}g=e}m.set(h,g)}t.material=g;let _=h.startsWith(`vidro`);t.castShadow=!_&&!h.startsWith(`luz`)&&h!==`lareira_brasa`,t.receiveShadow=!_}),{raiz:t,materiaisLightMap:n,materiaisLed:r,materialBrasa:i,pisoTextura:a}},[e,c,u]),_=(0,B.useRef)(null),y=(0,B.useRef)(null),b=(0,B.useRef)(null),x=(0,B.useRef)(null),S=(0,B.useRef)(null),C=(0,B.useRef)(null);return A(({clock:e})=>{let t=v.t,n=t>2.75&&t<4.1;if(_.current&&(_.current.visible=n),n!==s.current&&(s.current=n,a(n)),!n)return;let r=g(t).luzes,i=+(t>3.12&&t<3.99);y.current&&(y.current.intensity=8+10*r),b.current&&(b.current.intensity=9+11*r),x.current&&(x.current.intensity=7+8*r),S.current&&(S.current.intensity=6+9*r),C.current&&(C.current.intensity=M.lerp(C.current.intensity,i*.55,.08));let o=.65+.35*r;for(let e=0;e<f.length;e++)f[e].lightMapIntensity=o;let c=1+.65*r;for(let e=0;e<p.length;e++){let t=p[e];t.emissiveIntensity=(t.name===`luz`?2.6:1.9)*c}m&&(m.emissiveIntensity=2.1+.35*Math.sin(e.elapsedTime*5.2)+.6*r)}),(0,H.jsxs)(`group`,{ref:_,position:[0,E,0],children:[(0,H.jsx)(`primitive`,{object:d}),!n&&i&&(0,H.jsxs)(`mesh`,{name:`apto_piso_reflexo_desktop`,position:[0,.023,3.25],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[(0,H.jsx)(`planeGeometry`,{args:[13.92,9.44]}),(0,H.jsx)(V,{mirror:.28,blur:[280,120],resolution:512,mixBlur:1.4,mixStrength:.62,mixContrast:1.04,roughness:.3,metalness:.04,color:`#ede7dd`,map:h??void 0,polygonOffset:!0,polygonOffsetFactor:-1})]}),(0,H.jsx)(`pointLight`,{ref:y,position:[-2.6,2.25,5.1],color:`#ffe6c2`,distance:12,decay:1.6}),(0,H.jsx)(`pointLight`,{ref:b,position:[-3.6,2.2,.4],color:`#ffdca8`,distance:10,decay:1.6}),(0,H.jsx)(`pointLight`,{ref:x,position:[3.6,2.25,5.5],color:`#fff0d8`,distance:11,decay:1.6}),(0,H.jsx)(`pointLight`,{ref:S,position:[-4,2.15,-4.2],color:`#ffddb0`,distance:9,decay:1.6}),(0,H.jsx)(`ambientLight`,{ref:C,color:`#fff4e4`,intensity:0})]})}export{J as ApartamentoPBR,J as default};