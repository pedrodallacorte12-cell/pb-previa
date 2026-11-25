import{$t as e,A as t,Cn as n,D as r,Dt as i,En as a,Ft as o,Gn as s,Gt as c,Hn as l,Jn as u,L as d,Ln as f,M as p,Ot as m,P as h,Pt as g,Rn as _,Sn as v,Tn as ee,Ut as te,Wt as ne,Z as y,_ as b,gn as x,h as S,in as C,kt as w,ln as T,mn as E,nn as D,nt as re,qn as O,tn as k,u as A,vt as j,xn as M}from"./events-e51d7528.esm-BMBK5n3J.js";import{a as N}from"./roteiro-DrM4ebA1.js";var P=u(s(),1),F=class extends w{constructor(e,t={}){super(e),this.isWater=!0;let r=this,i=t.textureWidth===void 0?512:t.textureWidth,a=t.textureHeight===void 0?512:t.textureHeight,o=t.clipBias===void 0?0:t.clipBias,s=t.alpha===void 0?1:t.alpha,c=t.time===void 0?0:t.time,l=t.waterNormals===void 0?null:t.waterNormals,u=t.sunDirection===void 0?new v(.70707,.70707,0):t.sunDirection,d=new h(t.sunColor===void 0?16777215:t.sunColor),f=new h(t.waterColor===void 0?8355711:t.waterColor),p=t.eye===void 0?new v(0,0,0):t.eye,g=t.distortionScale===void 0?20:t.distortionScale,_=t.side===void 0?0:t.side,y=t.fog!==void 0&&t.fog,S=new ne,w=new v,T=new v,E=new v,D=new m,O=new v(0,0,-1),k=new n,A=new v,j=new v,M=new n,N=new m,P=new te,F=new ee(i,a,{type:re}),I={name:`MirrorShader`,uniforms:x.merge([b.fog,b.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new m},sunColor:{value:new h(8355711)},sunDirection:{value:new v(.70707,.70707,0)},eye:{value:new v},waterColor:{value:new h(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},L=new C({name:I.name,uniforms:x.clone(I.uniforms),vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,lights:!0,side:_,fog:y});L.uniforms.mirrorSampler.value=F.texture,L.uniforms.textureMatrix.value=N,L.uniforms.alpha.value=s,L.uniforms.time.value=c,L.uniforms.normalSampler.value=l,L.uniforms.sunColor.value=d,L.uniforms.waterColor.value=f,L.uniforms.sunDirection.value=u,L.uniforms.distortionScale.value=g,L.uniforms.eye.value=p,r.material=L,r.onBeforeRender=function(e,t,n){if(T.setFromMatrixPosition(r.matrixWorld),E.setFromMatrixPosition(n.matrixWorld),D.extractRotation(r.matrixWorld),w.set(0,0,1),w.applyMatrix4(D),A.subVectors(T,E),A.dot(w)>0)return;A.reflect(w).negate(),A.add(T),D.extractRotation(n.matrixWorld),O.set(0,0,-1),O.applyMatrix4(D),O.add(E),j.subVectors(T,O),j.reflect(w).negate(),j.add(T),P.position.copy(A),P.up.set(0,1,0),P.up.applyMatrix4(D),P.up.reflect(w),P.lookAt(j),P.far=n.far,P.updateMatrixWorld(),P.projectionMatrix.copy(n.projectionMatrix),N.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),N.multiply(P.projectionMatrix),N.multiply(P.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(w,T),S.applyMatrix4(P.matrixWorldInverse),k.set(S.normal.x,S.normal.y,S.normal.z,S.constant);let i=P.projectionMatrix;M.x=(Math.sign(k.x)+i.elements[8])/i.elements[0],M.y=(Math.sign(k.y)+i.elements[9])/i.elements[5],M.z=-1,M.w=(1+i.elements[10])/i.elements[14],k.multiplyScalar(2/k.dot(M)),i.elements[2]=k.x,i.elements[6]=k.y,i.elements[10]=k.z+1-o,i.elements[14]=k.w,p.setFromMatrixPosition(n.matrixWorld);let a=e.getRenderTarget(),s=e.xr.enabled,c=e.shadowMap.autoUpdate;r.visible=!1,e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(F),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,P),r.visible=!0,e.xr.enabled=s,e.shadowMap.autoUpdate=c,e.setRenderTarget(a);let l=n.viewport;l!==void 0&&e.state.viewport(l)}}},I=O({NIVEL_AGUA:()=>R,PONTES_DEF:()=>B,alturaTerrenoAgua:()=>W,default:()=>he,distanciaAgua:()=>H,gerarMargens:()=>G,naFaixaPonte:()=>U,semReflexo:()=>K,useSemReflexo:()=>q,zCosta:()=>V}),L=a(),R=-1.25,ie=[[360,62],[270,66],[202,50],[160,22],[174,-22],[158,-70],[146,-112],[136,-158]],z=(()=>{let e=new p(ie.map(([e,t])=>new v(e,0,t)),!1,`centripetal`),t=[],n=new v,r=new v;for(let i=0;i<=96;i++){let a=i/96;e.getPoint(a,n),e.getTangent(a,r).normalize();let o=Math.max(0,(a-.78)/.22),s=7.6+1.1*Math.sin(a*Math.PI*3)+o*o*16;t.push({x:n.x,z:n.z,tx:r.x,tz:r.z,u:a,meiaLarg:s})}return t})(),B=[{id:`ponte_principal`,x:160,z:22,larguraRua:10,vao:28},{id:`ponte_norte`,x:158,z:-70,larguraRua:10,vao:28}];function V(e){let t=8*Math.sin(e*.012+.5)+4*Math.cos(e*.025),n=e>170?Math.min(36,(e-170)*.22):0;return-142+t+n}function ae(e,t,n){let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25}function H(e,t){let n=t-V(e),r=1e6;if(e>95&&e<420&&t>-210&&t<130){let n=0xe8d4a51000,i=8;for(let r=0;r<z.length;r++){let a=z[r],o=e-a.x,s=t-a.z,c=o*o+s*s;c<n&&(n=c,i=a.meiaLarg)}r=Math.sqrt(n)-i}return ae(n,r,14)}function U(e,t,n=3.5){for(let r of B)if(Math.abs(e-r.x)<r.vao/2+n&&Math.abs(t-r.z)<r.larguraRua/2+3.2+n)return!0;return!1}function W(e,t){let n=H(e,t);if(n>=8.5)return-.1;if(n<=-6)return-3.1;let r=(n+6)/14.5;return-3.1+3*(r*r*(3-2*r))}function G(e=409){let t=e,n=()=>(t=t*16807%2147483647,(t-1)/2147483646),r=[],i=[];for(let e=2;e<z.length-2;e++){let t=z[e],a=-t.tz,o=t.tx;for(let e of[-1,1]){if(n()<.85){let i=t.meiaLarg+.6+n()*3.8,s=t.x+a*e*i+(n()-.5)*2.2,c=t.z+o*e*i+(n()-.5)*2.2;if(!U(s,c,2.5)&&H(s,c)>-.6){let e=W(s,c);r.push([s,e,c,.45+n()*1.05])}}for(let r=0;r<2;r++){let r=t.meiaLarg+3.2+n()*6.5,s=t.x+a*e*r+(n()-.5)*3,c=t.z+o*e*r+(n()-.5)*3;if(!U(s,c,3.5)&&H(s,c)>1.8){let e=W(s,c);i.push([s,e,c,.55+n()*.95])}}}}for(let e=-280;e<=320;e+=4.5){let t=V(e);if(n()<.72){let i=e+(n()-.5)*3.2,a=t+1+n()*3.4;H(i,a)>-.5&&r.push([i,W(i,a),a,.55+n()*1.25])}if(n()<.78){let r=e+(n()-.5)*3.8,a=t+4.2+n()*5.8;H(r,a)>2.2&&i.push([r,W(r,a),a,.65+n()*1.05])}}return{pedras:r,arbustos:i}}var K=new Set;function q(){let e=(0,P.useRef)(null);return(0,P.useEffect)(()=>{let t=e.current;if(t)return K.add(t),()=>void K.delete(t)},[]),e}var J=new h(`#2a8e98`),Y=new h(`#1d5a68`),X=new h(`#05101c`),oe=new h(`#6b84b8`),se=2.38,Z={x0:-300,x1:420,z0:-205,z1:100,passo:2},Q=null;function $(){if(Q)return Q;let e=Math.round((Z.x1-Z.x0)/Z.passo)+1,t=Math.round((Z.z1-Z.z0)/Z.passo)+1,n=new Float32Array(e*t);for(let r=0;r<t;r++)for(let t=0;t<e;t++)n[r*e+t]=H(Z.x0+t*Z.passo,Z.z0+r*Z.passo);return Q={nx:e,nz:t,d:n},Q}function ce(){let{nx:t,nz:n,d:r}=$(),a=new Uint8Array(t*n*4);for(let e=0;e<t*n;e++){let t=Math.round(i.clamp((r[e]+16)/24,0,1)*255);a[e*4]=a[e*4+1]=a[e*4+2]=t,a[e*4+3]=255}let o=new d(a,t,n,e);return o.magFilter=o.minFilter=j,o.needsUpdate=!0,o}function le(){let e=document.createElement(`canvas`);e.width=e.height=256;let n=e.getContext(`2d`);n.fillStyle=`#d7c8a6`,n.fillRect(0,0,256,256);let r=31,i=()=>((r=r*16807%2147483647)-1)/2147483646;for(let e=0;e<9e3;e++){let e=i();n.fillStyle=e<.5?`rgba(150,135,105,${.25+e*.3})`:`rgba(245,236,214,${.2+(e-.5)*.4})`,n.fillRect(i()*256,i()*256,1+i()*1.5,1+i()*1.5)}for(let e=0;e<160;e++){let e=i()*256,t=i()*256,r=1.5+i()*3.5,a=120+i()*70;n.fillStyle=`rgb(${a},${a*.96},${a*.9})`,n.beginPath(),n.ellipse(e,t,r,r*(.6+i()*.4),i()*3,0,Math.PI*2),n.fill()}let a=new t(e);return a.wrapS=a.wrapT=k,a.colorSpace=D,a.anisotropy=4,a}function ue(){let{nx:e,nz:t,d:n}=$(),a=[],o=[],s=[],c=[],l=new Int32Array(e*t).fill(-1),u=(t,r)=>{let c=r*e+t;if(l[c]>=0)return l[c];let u=Z.x0+t*Z.passo,d=Z.z0+r*Z.passo;l[c]=a.length/3,a.push(u,W(u,d)+.05,d);let f=1-i.smoothstep(n[c],4.8,7);return o.push(1,1,1,f),s.push(u/3,d/3),l[c]};for(let r=0;r<t-1;r++)for(let t=0;t<e-1;t++){let i=r*e+t,a=[n[i],n[i+1],n[i+e],n[i+e+1]];if(Math.max(...a)<1.18||Math.min(...a)>7||U(Z.x0+t*Z.passo,Z.z0+r*Z.passo,1))continue;let o=u(t,r),s=u(t+1,r),l=u(t,r+1),d=u(t+1,r+1);c.push(o,l,s,s,l,d)}let d=new r;return d.setAttribute(`position`,new y(a,3)),d.setAttribute(`color`,new y(o,4)),d.setAttribute(`uv`,new y(s,2)),d.setIndex(c),d.computeVertexNormals(),d}var de=`
  #include <fog_pars_vertex>
  varying vec2 vMundo;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vMundo = wp.xz;
    vec4 mvPosition = viewMatrix * wp;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,fe=`
  #include <common>
  #include <fog_pars_fragment>
  uniform sampler2D uDist;
  uniform vec4 uJanela; // x0, z0, largura, profundidade
  uniform float uTempo;
  uniform float uNoite;
  uniform vec3 uRaso;
  varying vec2 vMundo;
  float ruido(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5453);
    float b = fract(sin(dot(i + vec2(1.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
    float c = fract(sin(dot(i + vec2(0.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
    float d = fract(sin(dot(i + vec2(1.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  void main() {
    vec2 uv = (vMundo - uJanela.xy) / uJanela.zw;
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) discard;
    float d = texture2D(uDist, uv).r * 24.0 - 16.0;
    float prof = ${se.toFixed(2)} - d; // metros da linha d'água para dentro
    if (prof < -0.2 || prof > 14.0) discard;
    // raso turquesa claro (areia sob lâmina fina)
    float raso = (1.0 - smoothstep(0.0, 9.0, prof)) * 0.55;
    // espuma: franja na linha d'água + ondas que chegam à margem, quebradas por ruído
    float n = ruido(vMundo * 0.45 + vec2(uTempo * 0.25, -uTempo * 0.18)) * 0.6 + ruido(vMundo * 1.7 - uTempo * 0.4) * 0.4;
    float franja = exp(-max(prof, 0.0) / 0.55) * smoothstep(0.25, 0.65, n + 0.25);
    float onda = smoothstep(0.82, 1.0, sin(prof * 3.2 - uTempo * 1.9)) * exp(-prof / 1.6) * smoothstep(0.35, 0.7, n);
    float espuma = clamp(franja + onda * 0.8, 0.0, 1.0) * (1.0 - uNoite * 0.8);
    vec3 cor = mix(uRaso, vec3(0.96, 0.97, 0.96), espuma / max(espuma + raso, 1e-3));
    float a = clamp(espuma * 0.9 + raso * (1.0 - uNoite * 0.7), 0.0, 0.92);
    gl_FragColor = vec4(cor, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;function pe(){let{espuma:e,praia:t,descartar:r}=(0,P.useMemo)(()=>{let e=ce(),t=Z.x1-Z.x0,r=Z.z1-Z.z0,i=new C({vertexShader:de,fragmentShader:fe,uniforms:{...x.clone(b.fog),uDist:{value:e},uJanela:{value:new n(Z.x0,Z.z0,t,r)},uTempo:{value:0},uNoite:{value:0},uRaso:{value:new h(`#8fd3cc`)}},transparent:!0,depthWrite:!1,fog:!0}),a=new c(t,r).rotateX(-Math.PI/2).translate(Z.x0+t/2,-1.22,Z.z0+r/2),s=new w(a,i);s.renderOrder=1;let l=le(),u=new o({map:l,vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.96,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),d=ue(),f=new w(d,u);return f.receiveShadow=!0,{espuma:s,praia:f,descartar:()=>{for(let t of[e,i,a,l,u,d])t.dispose()}}},[]);return(0,P.useEffect)(()=>r,[r]),A((t,n)=>{let r=e.material.uniforms;f.reduzirMovimento||(r.uTempo.value+=Math.min(n,.05)),r.uNoite.value=N(_.t).noite}),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`primitive`,{object:t}),(0,L.jsx)(`primitive`,{object:e})]})}function me(){let{malha:e,normal:t,descartar:n}=(0,P.useMemo)(()=>{let e=new E().load(l(`texturas/waternormals.webp`));e.wrapS=e.wrapT=k,e.repeat.set(140,110);let t=new g({color:J,roughness:.12,metalness:0,normalMap:e,normalScale:new M(.35,.35),envMapIntensity:1.1,ior:1.33,specularIntensity:1}),n=new c(1900,1450).rotateX(-Math.PI/2),r=new w(n,t);return r.position.set(80,R,-410),r.frustumCulled=!1,{malha:r,normal:e,descartar:()=>(n.dispose(),t.dispose(),e.dispose())}},[]);return(0,P.useEffect)(()=>n,[n]),A((n,r)=>{f.reduzirMovimento||(t.offset.x+=Math.min(r,.05)*.004,t.offset.y+=Math.min(r,.05)*.0027);let i=N(_.t),a=Math.max(0,Math.min(1,i.luzes*(1-i.noite)));e.material.color.copy(J).lerp(Y,a*.85).lerp(X,i.noite)}),(0,L.jsx)(`primitive`,{object:e})}function he({qualidade:e}){return(0,L.jsxs)(L.Fragment,{children:[e===`alta`?(0,L.jsx)(ge,{}):(0,L.jsx)(me,{}),(0,L.jsx)(pe,{})]})}function ge(){let e=S(e=>e.gl),t=(0,P.useMemo)(()=>new v,[]),n=(0,P.useMemo)(()=>new h,[]),r=(0,P.useMemo)(()=>new h,[]),i=(0,P.useRef)(null),a=(0,P.useMemo)(()=>{let t=new E().load(l(`texturas/waternormals.webp`));return t.wrapS=k,t.wrapT=k,t.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()),t.colorSpace=``,t},[e]),o=(0,P.useMemo)(()=>{let e=new F(new c(1900,1450),{textureWidth:512,textureHeight:512,waterNormals:a,sunDirection:new v(-.55,.75,.75).normalize(),sunColor:16314337,waterColor:J.getHex(),distortionScale:1.55,fog:!0});e.rotation.x=-Math.PI/2,e.position.set(80,R,-410),e.receiveShadow=!1,e.frustumCulled=!1;let t=e.material;t.uniforms.size.value=3.6,t.fragmentShader=t.fragmentShader.replace(`float rf0 = 0.02;`,`float rf0 = 0.075;`).replace(`mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance )`,`mix( ( sunColor * diffuseLight * 0.24 + scatter ), reflectionSample * mix( vec3( 1.0 ), waterColor * 3.2, 0.32 ) + specularLight * 0.75, reflectance )`).replace(`#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>`,`#include <fog_fragment>
					#include <tonemapping_fragment>
					#include <colorspace_fragment>`),t.needsUpdate=!0;let n=e.onBeforeRender,r=new T,i=[],o=0;return e.onBeforeRender=function(t,a,...s){if(e.userData.refletiu)return;e.userData.refletiu=!0,o++%120==0&&(i=[],a.traverse(t=>{let n=t;n.isMesh&&!n.isInstancedMesh&&n!==e&&(n.geometry.boundingSphere||n.geometry.computeBoundingSphere(),r.copy(n.geometry.boundingSphere).applyMatrix4(n.matrixWorld),([].concat(n.material).some(e=>e.transmission>0)||r.radius<1.6||r.center.y+r.radius<-1.55)&&i.push(n))}));let c=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;let l=[];K.forEach(e=>e.visible&&=(l.push(e),!1)),i.forEach(e=>e.visible&&=(l.push(e),!1)),n.call(e,t,a,...s),l.forEach(e=>e.visible=!0),t.shadowMap.autoUpdate=c},e},[a]);return(0,P.useEffect)(()=>(i.current=o,()=>{o.geometry.dispose();let e=o.material;(e.uniforms?.mirrorSampler?.value)?.dispose(),e.dispose()}),[o]),(0,P.useEffect)(()=>()=>{a.dispose()},[a]),A((e,a)=>{let o=i.current;if(!o)return;o.userData.refletiu=!1;let s=o.material.uniforms;f.reduzirMovimento||(s.time.value+=Math.min(a,.05)*.36);let c=N(_.t);t.set(-.55,.2+.8*c.altSol,.75).normalize(),s.sunDirection.value.copy(t);let l=Math.max(0,Math.min(1,c.luzes*(1-c.noite)));n.copy(J).lerp(Y,l*.85).lerp(X,c.noite),s.waterColor.value.copy(n),r.copy(c.sol).lerp(oe,c.noite*.65).multiplyScalar(.32+.52*(1-c.noite*.78)),s.sunColor.value.copy(r)}),(0,L.jsx)(`primitive`,{object:o})}export{H as a,q as c,W as i,V as l,R as n,G as o,B as r,U as s,I as t};