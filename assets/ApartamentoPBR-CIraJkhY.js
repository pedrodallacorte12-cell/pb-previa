import{$n as e,A as t,Cn as n,D as r,Dt as i,Et as a,Ht as o,Nt as s,O as c,Ot as l,Pt as u,U as d,Un as f,Ut as p,V as m,Xn as h,_t as g,bn as _,h as v,nn as y,pn as b,qn as x,rn as S,s as C,tn as w,tt as T,u as E,vn as D,wn as O,xn as k,yn as A}from"./events-e51d7528.esm-BiFxDpwp.js";import{a as j,i as M,r as N}from"./Cena-HqRPgmWD.js";import{t as P}from"./Gltf-BGlEogoG.js";import{a as F,t as I}from"./roteiro-rXkd738U.js";import{r as L}from"./index-DJ9xw1tX.js";var R=class extends S{constructor(e=new A){super({uniforms:{inputBuffer:new b(null),depthBuffer:new b(null),resolution:new b(new A),texelSize:new b(new A),halfTexelSize:new b(new A),kernel:new b(0),scale:new b(1),cameraNear:new b(0),cameraFar:new b(1),minDepthThreshold:new b(0),maxDepthThreshold:new b(1),depthScale:new b(0),depthToBlurRatioBias:new b(.25)},fragmentShader:`#include <common>
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
          #include <${N>=154?`colorspace_fragment`:`encodings_fragment`}>
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
        }`,blending:0,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}},z=class{constructor({gl:e,resolution:i,width:a=500,height:o=500,minDepthThreshold:s=0,maxDepthThreshold:u=1,depthScale:d=0,depthToBlurRatioBias:f=.25}){this.renderToScreen=!1,this.renderTargetA=new n(i,i,{minFilter:g,magFilter:g,stencilBuffer:!1,depthBuffer:!1,type:T}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new R,this.convolutionMaterial.setTexelSize(1/a,1/o),this.convolutionMaterial.setResolution(new A(a,o)),this.scene=new y,this.camera=new t,this.convolutionMaterial.uniforms.minDepthThreshold.value=s,this.convolutionMaterial.uniforms.maxDepthThreshold.value=u,this.convolutionMaterial.uniforms.depthScale.value=d,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=f,this.convolutionMaterial.defines.USE_DEPTH=d>0;let p=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),m=new Float32Array([0,0,2,0,0,2]),h=new c;h.setAttribute(`position`,new r(p,3)),h.setAttribute(`uv`,new r(m,2)),this.screen=new l(h,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,n){let r=this.scene,i=this.camera,a=this.renderTargetA,o=this.renderTargetB,s=this.convolutionMaterial,c=s.uniforms;c.depthBuffer.value=t.depthTexture;let l=s.kernel,u=t,d,f,p;for(f=0,p=l.length-1;f<p;++f)d=f&1?o:a,c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(d),e.render(r,i),u=d;c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(this.renderToScreen?null:n),e.render(r,i)}},B=class extends u{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;(t=e.defines)!=null&&t.USE_UV||(e.defines.USE_UV=``),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}},V=e(h()),H=V.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:a=[0,0],minDepthThreshold:s=.9,maxDepthThreshold:c=1,depthScale:l=0,depthToBlurRatioBias:u=.25,mirror:f=0,distortion:h=1,mixContrast:y=1,distortionMap:b,reflectorOffset:x=0,...S},w)=>{C({MeshReflectorMaterialImpl:B});let O=v(({gl:e})=>e),A=v(({camera:e})=>e),M=v(({scene:e})=>e);a=Array.isArray(a)?a:[a,a];let N=a[0]+a[1]>0,P=a[0],F=a[1],I=V.useRef(null);V.useImperativeHandle(w,()=>I.current,[]);let[L]=V.useState(()=>new p),[R]=V.useState(()=>new _),[H]=V.useState(()=>new _),[U]=V.useState(()=>new _),[W]=V.useState(()=>new i),[G]=V.useState(()=>new _(0,0,-1)),[K]=V.useState(()=>new k),[q]=V.useState(()=>new _),[J]=V.useState(()=>new _),[Y]=V.useState(()=>new k),[X]=V.useState(()=>new i),[Z]=V.useState(()=>new o),ee=V.useCallback(()=>{var e;let t=I.current.parent||((e=I.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t||(H.setFromMatrixPosition(t.matrixWorld),U.setFromMatrixPosition(A.matrixWorld),W.extractRotation(t.matrixWorld),R.set(0,0,1),R.applyMatrix4(W),H.addScaledVector(R,x),q.subVectors(H,U),q.dot(R)>0))return;q.reflect(R).negate(),q.add(H),W.extractRotation(A.matrixWorld),G.set(0,0,-1),G.applyMatrix4(W),G.add(U),J.subVectors(H,G),J.reflect(R).negate(),J.add(H),Z.position.copy(q),Z.up.set(0,1,0),Z.up.applyMatrix4(W),Z.up.reflect(R),Z.lookAt(J),Z.far=A.far,Z.updateMatrixWorld(),Z.projectionMatrix.copy(A.projectionMatrix),X.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),X.multiply(Z.projectionMatrix),X.multiply(Z.matrixWorldInverse),X.multiply(t.matrixWorld),L.setFromNormalAndCoplanarPoint(R,H),L.applyMatrix4(Z.matrixWorldInverse),K.set(L.normal.x,L.normal.y,L.normal.z,L.constant);let n=Z.projectionMatrix;Y.x=(Math.sign(K.x)+n.elements[8])/n.elements[0],Y.y=(Math.sign(K.y)+n.elements[9])/n.elements[5],Y.z=-1,Y.w=(1+n.elements[10])/n.elements[14],K.multiplyScalar(2/K.dot(Y)),n.elements[2]=K.x,n.elements[6]=K.y,n.elements[10]=K.z+1,n.elements[14]=K.w},[A,x]),[Q,te,ne,$]=V.useMemo(()=>{let i={minFilter:g,magFilter:g,type:T},a=new n(r,r,i);a.depthBuffer=!0,a.depthTexture=new d(r,r),a.depthTexture.format=m,a.depthTexture.type=D;let o=new n(r,r,i);return[a,o,new z({gl:O,resolution:r,width:P,height:F,minDepthThreshold:s,maxDepthThreshold:c,depthScale:l,depthToBlurRatioBias:u}),{mirror:f,textureMatrix:X,mixBlur:e,tDiffuse:a.texture,tDepth:a.depthTexture,tDiffuseBlur:o.texture,hasBlur:N,mixStrength:t,minDepthThreshold:s,maxDepthThreshold:c,depthScale:l,depthToBlurRatioBias:u,distortion:h,distortionMap:b,mixContrast:y,"defines-USE_BLUR":N?``:void 0,"defines-USE_DEPTH":l>0?``:void 0,"defines-USE_DISTORTION":b?``:void 0}]},[O,P,F,X,r,f,N,e,t,s,c,l,u,h,b,y]);return E(()=>{var e;let t=I.current.parent||((e=I.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t)return;t.visible=!1;let n=O.xr.enabled,r=O.shadowMap.autoUpdate;ee(),O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,O.setRenderTarget(Q),O.state.buffers.depth.setMask(!0),O.autoClear||O.clear(),O.render(M,Z),N&&ne.render(O,Q,te),O.xr.enabled=n,O.shadowMap.autoUpdate=r,t.visible=!0,O.setRenderTarget(null)}),V.createElement(`meshReflectorMaterialImpl`,j({attach:`material`,key:`key`+$[`defines-USE_BLUR`]+$[`defines-USE_DEPTH`]+$[`defines-USE_DISTORTION`],ref:I},$,S))}),U=O(),W=typeof window<`u`&&(window.matchMedia(`(max-width: 768px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024),G=x(W?`modelos/apartamento-leve.glb`:`modelos/apartamento.glb`),K=x(`texturas/interior/lightmap_gi.webp`),q=new Set([`vidro`,`vidro_guarda`,`vidro_vaso`,`espelho`,`luz`,`luz_sanca`,`lareira_brasa`,`tela`]);function J(){return typeof window>`u`?!1:window.matchMedia(`(max-width: 900px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024}function Y(e,t){return new s({color:t,metalness:.12,roughness:.04,transparent:!0,opacity:e,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1})}function X(){let{scene:e}=P(G,!1,!0),t=M(K),[n,r]=(0,V.useState)(()=>J()),[i,o]=(0,V.useState)(!1),s=(0,V.useRef)(!1);(0,V.useEffect)(()=>{let e=()=>r(J());return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let{lmUV1:c,lmUV0:l}=(0,V.useMemo)(()=>{t.flipY=!1,t.channel=1,t.colorSpace=w,t.anisotropy=4,t.needsUpdate=!0;let e=t.clone();return e.flipY=!1,e.channel=0,e.colorSpace=w,e.anisotropy=4,e.needsUpdate=!0,{lmUV1:t,lmUV0:e}},[t]);(0,V.useEffect)(()=>()=>{l.dispose()},[l]);let{raiz:d,materiaisLightMap:p,materiaisLed:m,materialBrasa:h,pisoTextura:g}=(0,V.useMemo)(()=>{let t=e.clone(!0),n=[],r=[],i=null,a=null,o=Y(.46,`#26343e`),s=Y(.22,`#dce7ec`),d=Y(.32,`#eaf2f4`),f=new u({color:`#e8ecee`,metalness:1,roughness:.025,envMapIntensity:1.6}),p=new Map;return t.traverse(e=>{let t=e;if(!t.isMesh)return;let u=t.material,m=u?.name??``,h=p.get(m);if(!h){if(m===`vidro`)h=o;else if(m===`vidro_guarda`)h=s;else if(m===`vidro_vaso`)h=d;else if(m===`espelho`)h=f;else{let e=u.clone();if(e.name=m,e.envMapIntensity=m===`inox`||m===`latao`?1.35:.85,e.map&&(e.map.anisotropy=8,e.map.colorSpace=w),m===`porcelanato`&&e.map&&(a=e.map),m===`luz`||m===`luz_sanca`)e.color.set(`#fff9ee`),e.emissive.set(m===`luz`?`#ffdfa8`:`#ffd594`),e.emissiveIntensity=m===`luz`?2.8:2.1,e.toneMapped=!1,r.push(e);else if(m===`lareira_brasa`)e.color.set(`#2a1208`),e.emissive.set(`#ff7624`),e.emissiveIntensity=2.4,e.toneMapped=!1,i=e;else if(!q.has(m)){let r=!!t.geometry.attributes.uv1,i=!!t.geometry.attributes.uv;(r||i)&&(e.lightMap=r?c:l,e.lightMapIntensity=.72,e.aoMap&&(e.aoMap.channel=+!!r,e.aoMapIntensity=.78),n.push(e))}h=e}p.set(m,h)}t.material=h;let g=m.startsWith(`vidro`);t.castShadow=!g&&!m.startsWith(`luz`)&&m!==`lareira_brasa`,t.receiveShadow=!g}),{raiz:t,materiaisLightMap:n,materiaisLed:r,materialBrasa:i,pisoTextura:a}},[e,c,l]);(0,V.useEffect)(()=>()=>{W&&(L(d),P.clear(G))},[d]);let _=(0,V.useRef)(null),v=(0,V.useRef)(null),y=(0,V.useRef)(null),b=(0,V.useRef)(null),x=(0,V.useRef)(null),S=(0,V.useRef)(null);return E(({clock:e})=>{let t=f.t,n=t>2.75&&t<4.1;if(_.current&&(_.current.visible=n),n!==s.current&&(s.current=n,o(n)),!n)return;let r=F(t).luzes,i=+(t>3.12&&t<3.99);v.current&&(v.current.intensity=8+10*r),y.current&&(y.current.intensity=9+11*r),b.current&&(b.current.intensity=7+8*r),x.current&&(x.current.intensity=6+9*r),S.current&&(S.current.intensity=a.lerp(S.current.intensity,i*.55,.08));let c=.65+.35*r;for(let e=0;e<p.length;e++)p[e].lightMapIntensity=c;let l=1+.65*r;for(let e=0;e<m.length;e++){let t=m[e];t.emissiveIntensity=(t.name===`luz`?2.6:1.9)*l}h&&(h.emissiveIntensity=2.1+.35*Math.sin(e.elapsedTime*5.2)+.6*r)}),(0,U.jsxs)(`group`,{ref:_,position:[0,I,0],children:[(0,U.jsx)(`primitive`,{object:d}),!n&&i&&(0,U.jsxs)(`mesh`,{name:`apto_piso_reflexo_desktop`,position:[0,.023,3.25],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[(0,U.jsx)(`planeGeometry`,{args:[13.92,9.44]}),(0,U.jsx)(H,{mirror:.28,blur:[280,120],resolution:512,mixBlur:1.4,mixStrength:.62,mixContrast:1.04,roughness:.3,metalness:.04,color:`#ede7dd`,map:g??void 0,polygonOffset:!0,polygonOffsetFactor:-1})]}),(0,U.jsx)(`pointLight`,{ref:v,position:[-2.6,2.25,5.1],color:`#ffe6c2`,distance:12,decay:1.6}),!W&&(0,U.jsx)(`pointLight`,{ref:y,position:[-3.6,2.2,.4],color:`#ffdca8`,distance:10,decay:1.6}),(0,U.jsx)(`pointLight`,{ref:b,position:[3.6,2.25,5.5],color:`#fff0d8`,distance:11,decay:1.6}),!W&&(0,U.jsx)(`pointLight`,{ref:x,position:[-4,2.15,-4.2],color:`#ffddb0`,distance:9,decay:1.6}),(0,U.jsx)(`ambientLight`,{ref:S,color:`#fff4e4`,intensity:0})]})}export{X as ApartamentoPBR,X as default};