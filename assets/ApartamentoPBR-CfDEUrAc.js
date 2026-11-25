import{$n as e,A as t,At as n,Cn as r,En as i,Ft as a,K as o,M as s,On as c,Ot as l,Pt as u,Tn as d,Ut as f,W as p,Wt as m,an as h,gn as g,h as _,hn as v,in as y,ir as b,k as x,kn as S,kt as C,nt as w,on as T,p as E,s as ee,sr as D,u as O,ur as k,vn as A,vt as j,wn as M}from"./events-e51d7528.esm-LHO7OEip.js";import{i as N,r as P}from"./Cena-CZyRH6rF.js";import{t as F}from"./Gltf-nN8Mjbe2.js";import{a as I,t as L}from"./roteiro-BchlzkjK.js";import{r as R}from"./index-BLKIRXfp.js";var z=k(D()),B=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!=`function`;function V(e,t){let n=_(e=>e.gl),r=E(g,B(e)?Object.values(e):e);return(0,z.useLayoutEffect)(()=>{t?.(r)},[t]),(0,z.useEffect)(()=>{if(`initTexture`in n){let e=[];Array.isArray(r)?e=r:r instanceof v?e=[r]:B(r)&&(e=Object.values(r)),e.forEach(e=>{e instanceof v&&n.initTexture(e)})}},[n,r]),(0,z.useMemo)(()=>{if(B(e)){let t={},n=0;for(let i in e)t[i]=r[n++];return t}return r},[e,r])}V.preload=e=>E.preload(g,e),V.clear=e=>E.clear(g,e);var H=class extends T{constructor(e=new M){super({uniforms:{inputBuffer:new A(null),depthBuffer:new A(null),resolution:new A(new M),texelSize:new A(new M),halfTexelSize:new A(new M),kernel:new A(0),scale:new A(1),cameraNear:new A(0),cameraFar:new A(1),minDepthThreshold:new A(0),maxDepthThreshold:new A(1),depthScale:new A(0),depthToBlurRatioBias:new A(.25)},fragmentShader:`#include <common>
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
        }`,blending:0,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}},U=class{constructor({gl:e,resolution:r,width:i=500,height:a=500,minDepthThreshold:o=0,maxDepthThreshold:l=1,depthScale:u=0,depthToBlurRatioBias:d=.25}){this.renderToScreen=!1,this.renderTargetA=new c(r,r,{minFilter:j,magFilter:j,stencilBuffer:!1,depthBuffer:!1,type:w}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new H,this.convolutionMaterial.setTexelSize(1/i,1/a),this.convolutionMaterial.setResolution(new M(i,a)),this.scene=new h,this.camera=new s,this.convolutionMaterial.uniforms.minDepthThreshold.value=o,this.convolutionMaterial.uniforms.maxDepthThreshold.value=l,this.convolutionMaterial.uniforms.depthScale.value=u,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=d,this.convolutionMaterial.defines.USE_DEPTH=u>0;let f=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),p=new Float32Array([0,0,2,0,0,2]),m=new t;m.setAttribute(`position`,new x(f,3)),m.setAttribute(`uv`,new x(p,2)),this.screen=new n(m,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,n){let r=this.scene,i=this.camera,a=this.renderTargetA,o=this.renderTargetB,s=this.convolutionMaterial,c=s.uniforms;c.depthBuffer.value=t.depthTexture;let l=s.kernel,u=t,d,f,p;for(f=0,p=l.length-1;f<p;++f)d=f&1?o:a,c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(d),e.render(r,i),u=d;c.kernel.value=l[f],c.inputBuffer.value=u.texture,e.setRenderTarget(this.renderToScreen?null:n),e.render(r,i)}},te=class extends a{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;(t=e.defines)!=null&&t.USE_UV||(e.defines.USE_UV=``),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}},W=z.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:n=256,blur:a=[0,0],minDepthThreshold:s=.9,maxDepthThreshold:l=1,depthScale:u=0,depthToBlurRatioBias:h=.25,mirror:g=0,distortion:v=1,mixContrast:y=1,distortionMap:b,reflectorOffset:x=0,...S},T)=>{ee({MeshReflectorMaterialImpl:te});let E=_(({gl:e})=>e),D=_(({camera:e})=>e),k=_(({scene:e})=>e);a=Array.isArray(a)?a:[a,a];let A=a[0]+a[1]>0,M=a[0],P=a[1],F=z.useRef(null);z.useImperativeHandle(T,()=>F.current,[]);let[I]=z.useState(()=>new m),[L]=z.useState(()=>new d),[R]=z.useState(()=>new d),[B]=z.useState(()=>new d),[V]=z.useState(()=>new C),[H]=z.useState(()=>new d(0,0,-1)),[W]=z.useState(()=>new i),[G]=z.useState(()=>new d),[K]=z.useState(()=>new d),[q]=z.useState(()=>new i),[J]=z.useState(()=>new C),[Y]=z.useState(()=>new f),X=z.useCallback(()=>{var e;let t=F.current.parent||((e=F.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t||(R.setFromMatrixPosition(t.matrixWorld),B.setFromMatrixPosition(D.matrixWorld),V.extractRotation(t.matrixWorld),L.set(0,0,1),L.applyMatrix4(V),R.addScaledVector(L,x),G.subVectors(R,B),G.dot(L)>0))return;G.reflect(L).negate(),G.add(R),V.extractRotation(D.matrixWorld),H.set(0,0,-1),H.applyMatrix4(V),H.add(B),K.subVectors(R,H),K.reflect(L).negate(),K.add(R),Y.position.copy(G),Y.up.set(0,1,0),Y.up.applyMatrix4(V),Y.up.reflect(L),Y.lookAt(K),Y.far=D.far,Y.updateMatrixWorld(),Y.projectionMatrix.copy(D.projectionMatrix),J.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),J.multiply(Y.projectionMatrix),J.multiply(Y.matrixWorldInverse),J.multiply(t.matrixWorld),I.setFromNormalAndCoplanarPoint(L,R),I.applyMatrix4(Y.matrixWorldInverse),W.set(I.normal.x,I.normal.y,I.normal.z,I.constant);let n=Y.projectionMatrix;q.x=(Math.sign(W.x)+n.elements[8])/n.elements[0],q.y=(Math.sign(W.y)+n.elements[9])/n.elements[5],q.z=-1,q.w=(1+n.elements[10])/n.elements[14],W.multiplyScalar(2/W.dot(q)),n.elements[2]=W.x,n.elements[6]=W.y,n.elements[10]=W.z+1,n.elements[14]=W.w},[D,x]),[Z,Q,ne,$]=z.useMemo(()=>{let i={minFilter:j,magFilter:j,type:w},a=new c(n,n,i);a.depthBuffer=!0,a.depthTexture=new o(n,n),a.depthTexture.format=p,a.depthTexture.type=r;let d=new c(n,n,i);return[a,d,new U({gl:E,resolution:n,width:M,height:P,minDepthThreshold:s,maxDepthThreshold:l,depthScale:u,depthToBlurRatioBias:h}),{mirror:g,textureMatrix:J,mixBlur:e,tDiffuse:a.texture,tDepth:a.depthTexture,tDiffuseBlur:d.texture,hasBlur:A,mixStrength:t,minDepthThreshold:s,maxDepthThreshold:l,depthScale:u,depthToBlurRatioBias:h,distortion:v,distortionMap:b,mixContrast:y,"defines-USE_BLUR":A?``:void 0,"defines-USE_DEPTH":u>0?``:void 0,"defines-USE_DISTORTION":b?``:void 0}]},[E,M,P,J,n,g,A,e,t,s,l,u,h,v,b,y]);return O(()=>{var e;let t=F.current.parent||((e=F.current)==null||(e=e.__r3f.parent)==null?void 0:e.object);if(!t)return;t.visible=!1;let n=E.xr.enabled,r=E.shadowMap.autoUpdate;X(),E.xr.enabled=!1,E.shadowMap.autoUpdate=!1,E.setRenderTarget(Z),E.state.buffers.depth.setMask(!0),E.autoClear||E.clear(),E.render(k,Y),A&&ne.render(E,Z,Q),E.xr.enabled=n,E.shadowMap.autoUpdate=r,t.visible=!0,E.setRenderTarget(null)}),z.createElement(`meshReflectorMaterialImpl`,N({attach:`material`,key:`key`+$[`defines-USE_BLUR`]+$[`defines-USE_DEPTH`]+$[`defines-USE_DISTORTION`],ref:F},$,S))}),G=S(),K=typeof window<`u`&&(window.matchMedia(`(max-width: 768px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024),q=b(K?`modelos/apartamento-leve.glb`:`modelos/apartamento.glb`),J=b(`texturas/interior/lightmap_gi.webp`),Y=new Set([`vidro`,`vidro_guarda`,`vidro_vaso`,`espelho`,`luz`,`luz_sanca`,`lareira_brasa`,`tela`]);function X(){return typeof window>`u`?!1:window.matchMedia(`(max-width: 900px)`).matches||navigator.maxTouchPoints>0&&window.innerWidth<1024}function Z(e,t){return new u({color:t,metalness:.12,roughness:.04,transparent:!0,opacity:e,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1})}function Q(){let{scene:t}=F(q,!1,!0),n=V(J),[r,i]=(0,z.useState)(()=>X()),[o,s]=(0,z.useState)(!1),c=(0,z.useRef)(!1);(0,z.useEffect)(()=>{let e=()=>i(X());return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let{lmUV1:u,lmUV0:d}=(0,z.useMemo)(()=>{n.flipY=!1,n.channel=1,n.colorSpace=y,n.anisotropy=4,n.needsUpdate=!0;let e=n.clone();return e.flipY=!1,e.channel=0,e.colorSpace=y,e.anisotropy=4,e.needsUpdate=!0,{lmUV1:n,lmUV0:e}},[n]);(0,z.useEffect)(()=>()=>{d.dispose()},[d]);let{raiz:f,materiaisLightMap:p,materiaisLed:m,materialBrasa:h,pisoTextura:g}=(0,z.useMemo)(()=>{let e=t.clone(!0),n=[],r=[],i=null,o=null,s=Z(.46,`#26343e`),c=Z(.22,`#dce7ec`),l=Z(.32,`#eaf2f4`),f=new a({color:`#e8ecee`,metalness:1,roughness:.025,envMapIntensity:1.6}),p=new Map;return e.traverse(e=>{let t=e;if(!t.isMesh)return;let a=t.material,m=a?.name??``,h=p.get(m);if(!h){if(m===`vidro`)h=s;else if(m===`vidro_guarda`)h=c;else if(m===`vidro_vaso`)h=l;else if(m===`espelho`)h=f;else{let e=a.clone();if(e.name=m,e.envMapIntensity=m===`inox`||m===`latao`?1.35:.85,e.map&&(e.map.anisotropy=8,e.map.colorSpace=y),m===`porcelanato`&&e.map&&(o=e.map),m===`luz`||m===`luz_sanca`)e.color.set(`#fff9ee`),e.emissive.set(m===`luz`?`#ffdfa8`:`#ffd594`),e.emissiveIntensity=m===`luz`?2.8:2.1,e.toneMapped=!1,r.push(e);else if(m===`lareira_brasa`)e.color.set(`#2a1208`),e.emissive.set(`#ff7624`),e.emissiveIntensity=2.4,e.toneMapped=!1,i=e;else if(!Y.has(m)){let r=!!t.geometry.attributes.uv1,i=!!t.geometry.attributes.uv;(r||i)&&(e.lightMap=r?u:d,e.lightMapIntensity=.72,e.aoMap&&(e.aoMap.channel=+!!r,e.aoMapIntensity=.78),n.push(e))}h=e}p.set(m,h)}t.material=h;let g=m.startsWith(`vidro`);t.castShadow=!g&&!m.startsWith(`luz`)&&m!==`lareira_brasa`,t.receiveShadow=!g}),{raiz:e,materiaisLightMap:n,materiaisLed:r,materialBrasa:i,pisoTextura:o}},[t,u,d]);(0,z.useEffect)(()=>()=>{K&&(R(f),F.clear(q))},[f]);let _=(0,z.useRef)(null),v=(0,z.useRef)(null),b=(0,z.useRef)(null),x=(0,z.useRef)(null),S=(0,z.useRef)(null),C=(0,z.useRef)(null);return O(({clock:t})=>{let n=e.t,r=n>2.75&&n<4.1;if(_.current&&(_.current.visible=r),r!==c.current&&(c.current=r,s(r)),!r)return;let i=I(n).luzes,a=+(n>3.12&&n<3.99);v.current&&(v.current.intensity=8+10*i),b.current&&(b.current.intensity=9+11*i),x.current&&(x.current.intensity=7+8*i),S.current&&(S.current.intensity=6+9*i),C.current&&(C.current.intensity=l.lerp(C.current.intensity,a*.55,.08));let o=.65+.35*i;for(let e=0;e<p.length;e++)p[e].lightMapIntensity=o;let u=1+.65*i;for(let e=0;e<m.length;e++){let t=m[e];t.emissiveIntensity=(t.name===`luz`?2.6:1.9)*u}h&&(h.emissiveIntensity=2.1+.35*Math.sin(t.elapsedTime*5.2)+.6*i)}),(0,G.jsxs)(`group`,{ref:_,position:[0,L,0],children:[(0,G.jsx)(`primitive`,{object:f}),!r&&o&&(0,G.jsxs)(`mesh`,{name:`apto_piso_reflexo_desktop`,position:[0,.023,3.25],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[(0,G.jsx)(`planeGeometry`,{args:[13.92,9.44]}),(0,G.jsx)(W,{mirror:.28,blur:[280,120],resolution:512,mixBlur:1.4,mixStrength:.62,mixContrast:1.04,roughness:.3,metalness:.04,color:`#ede7dd`,map:g??void 0,polygonOffset:!0,polygonOffsetFactor:-1})]}),(0,G.jsx)(`pointLight`,{ref:v,position:[-2.6,2.25,5.1],color:`#ffe6c2`,distance:12,decay:1.6}),!K&&(0,G.jsx)(`pointLight`,{ref:b,position:[-3.6,2.2,.4],color:`#ffdca8`,distance:10,decay:1.6}),(0,G.jsx)(`pointLight`,{ref:x,position:[3.6,2.25,5.5],color:`#fff0d8`,distance:11,decay:1.6}),!K&&(0,G.jsx)(`pointLight`,{ref:S,position:[-4,2.15,-4.2],color:`#ffddb0`,distance:9,decay:1.6}),(0,G.jsx)(`ambientLight`,{ref:C,color:`#fff4e4`,intensity:0})]})}export{Q as ApartamentoPBR,Q as default};