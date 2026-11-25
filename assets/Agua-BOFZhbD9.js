import{$t as e,A as t,Bn as n,Cn as r,D as i,Dt as a,Fn as o,Gn as s,Ht as c,In as l,Kn as u,L as d,M as f,Nt as p,Ot as m,P as h,Pt as g,Un as _,Ut as ee,Wt as v,Z as y,Zt as b,_ as x,bn as S,en as C,fn as w,h as T,kt as E,mn as D,nn as O,nt as k,u as A,vt as j,wn as M,xn as N,yn as P}from"./events-e51d7528.esm-BBOnX4Hz.js";import{a as F}from"./roteiro-BqEXDLr9.js";var I=u(_(),1),L=class extends E{constructor(e,t={}){super(e),this.isWater=!0;let n=this,i=t.textureWidth===void 0?512:t.textureWidth,a=t.textureHeight===void 0?512:t.textureHeight,o=t.clipBias===void 0?0:t.clipBias,s=t.alpha===void 0?1:t.alpha,l=t.time===void 0?0:t.time,u=t.waterNormals===void 0?null:t.waterNormals,d=t.sunDirection===void 0?new S(.70707,.70707,0):t.sunDirection,f=new h(t.sunColor===void 0?16777215:t.sunColor),p=new h(t.waterColor===void 0?8355711:t.waterColor),g=t.eye===void 0?new S(0,0,0):t.eye,_=t.distortionScale===void 0?20:t.distortionScale,v=t.side===void 0?0:t.side,y=t.fog!==void 0&&t.fog,b=new ee,C=new S,w=new S,T=new S,E=new m,A=new S(0,0,-1),j=new N,M=new S,P=new S,F=new N,I=new m,L=new c,R=new r(i,a,{type:k}),z={name:`MirrorShader`,uniforms:D.merge([x.fog,x.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new m},sunColor:{value:new h(8355711)},sunDirection:{value:new S(.70707,.70707,0)},eye:{value:new S},waterColor:{value:new h(5592405)}}]),vertexShader:`
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
				}`},B=new O({name:z.name,uniforms:D.clone(z.uniforms),vertexShader:z.vertexShader,fragmentShader:z.fragmentShader,lights:!0,side:v,fog:y});B.uniforms.mirrorSampler.value=R.texture,B.uniforms.textureMatrix.value=I,B.uniforms.alpha.value=s,B.uniforms.time.value=l,B.uniforms.normalSampler.value=u,B.uniforms.sunColor.value=f,B.uniforms.waterColor.value=p,B.uniforms.sunDirection.value=d,B.uniforms.distortionScale.value=_,B.uniforms.eye.value=g,n.material=B,n.onBeforeRender=function(e,t,r){if(w.setFromMatrixPosition(n.matrixWorld),T.setFromMatrixPosition(r.matrixWorld),E.extractRotation(n.matrixWorld),C.set(0,0,1),C.applyMatrix4(E),M.subVectors(w,T),M.dot(C)>0)return;M.reflect(C).negate(),M.add(w),E.extractRotation(r.matrixWorld),A.set(0,0,-1),A.applyMatrix4(E),A.add(T),P.subVectors(w,A),P.reflect(C).negate(),P.add(w),L.position.copy(M),L.up.set(0,1,0),L.up.applyMatrix4(E),L.up.reflect(C),L.lookAt(P),L.far=r.far,L.updateMatrixWorld(),L.projectionMatrix.copy(r.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(L.projectionMatrix),I.multiply(L.matrixWorldInverse),b.setFromNormalAndCoplanarPoint(C,w),b.applyMatrix4(L.matrixWorldInverse),j.set(b.normal.x,b.normal.y,b.normal.z,b.constant);let i=L.projectionMatrix;F.x=(Math.sign(j.x)+i.elements[8])/i.elements[0],F.y=(Math.sign(j.y)+i.elements[9])/i.elements[5],F.z=-1,F.w=(1+i.elements[10])/i.elements[14],j.multiplyScalar(2/j.dot(F)),i.elements[2]=j.x,i.elements[6]=j.y,i.elements[10]=j.z+1-o,i.elements[14]=j.w,g.setFromMatrixPosition(r.matrixWorld);let a=e.getRenderTarget(),s=e.xr.enabled,c=e.shadowMap.autoUpdate;n.visible=!1,e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(R),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,L),n.visible=!0,e.xr.enabled=s,e.shadowMap.autoUpdate=c,e.setRenderTarget(a);let l=r.viewport;l!==void 0&&e.state.viewport(l)}}},R=s({NIVEL_AGUA:()=>B,PONTES_DEF:()=>H,alturaTerrenoAgua:()=>K,default:()=>fe,distanciaAgua:()=>W,gerarMargens:()=>q,naFaixaPonte:()=>G,zCosta:()=>U}),z=M(),B=-1.25,te=[[360,62],[270,66],[202,50],[160,22],[174,-22],[158,-70],[146,-112],[136,-158]],V=(()=>{let e=new f(te.map(([e,t])=>new S(e,0,t)),!1,`centripetal`),t=[],n=new S,r=new S;for(let i=0;i<=96;i++){let a=i/96;e.getPoint(a,n),e.getTangent(a,r).normalize();let o=Math.max(0,(a-.78)/.22),s=7.6+1.1*Math.sin(a*Math.PI*3)+o*o*16;t.push({x:n.x,z:n.z,tx:r.x,tz:r.z,u:a,meiaLarg:s})}return t})(),H=[{id:`ponte_principal`,x:160,z:22,larguraRua:10,vao:28},{id:`ponte_norte`,x:158,z:-70,larguraRua:10,vao:28}];function U(e){let t=8*Math.sin(e*.012+.5)+4*Math.cos(e*.025),n=e>170?Math.min(36,(e-170)*.22):0;return-142+t+n}function ne(e,t,n){let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25}function W(e,t){let n=t-U(e),r=1e6;if(e>95&&e<420&&t>-210&&t<130){let n=0xe8d4a51000,i=8;for(let r=0;r<V.length;r++){let a=V[r],o=e-a.x,s=t-a.z,c=o*o+s*s;c<n&&(n=c,i=a.meiaLarg)}r=Math.sqrt(n)-i}return ne(n,r,14)}function G(e,t,n=3.5){for(let r of H)if(Math.abs(e-r.x)<r.vao/2+n&&Math.abs(t-r.z)<r.larguraRua/2+3.2+n)return!0;return!1}function K(e,t){let n=W(e,t);if(n>=8.5)return-.1;if(n<=-6)return-3.1;let r=(n+6)/14.5;return-3.1+3*(r*r*(3-2*r))}function q(e=409){let t=e,n=()=>(t=t*16807%2147483647,(t-1)/2147483646),r=[],i=[];for(let e=2;e<V.length-2;e++){let t=V[e],a=-t.tz,o=t.tx;for(let e of[-1,1]){if(n()<.85){let i=t.meiaLarg+.6+n()*3.8,s=t.x+a*e*i+(n()-.5)*2.2,c=t.z+o*e*i+(n()-.5)*2.2;if(!G(s,c,2.5)&&W(s,c)>-.6){let e=K(s,c);r.push([s,e,c,.45+n()*1.05])}}for(let r=0;r<2;r++){let r=t.meiaLarg+3.2+n()*6.5,s=t.x+a*e*r+(n()-.5)*3,c=t.z+o*e*r+(n()-.5)*3;if(!G(s,c,3.5)&&W(s,c)>1.8){let e=K(s,c);i.push([s,e,c,.55+n()*.95])}}}}for(let e=-280;e<=320;e+=4.5){let t=U(e);if(n()<.72){let i=e+(n()-.5)*3.2,a=t+1+n()*3.4;W(i,a)>-.5&&r.push([i,K(i,a),a,.55+n()*1.25])}if(n()<.78){let r=e+(n()-.5)*3.8,a=t+4.2+n()*5.8;W(r,a)>2.2&&i.push([r,K(r,a),a,.65+n()*1.05])}}return{pedras:r,arbustos:i}}var J=new h(`#2a8e98`),Y=new h(`#1d5a68`),X=new h(`#05101c`),re=new h(`#6b84b8`),ie=2.38,Z={x0:-300,x1:420,z0:-205,z1:100,passo:2},Q=null;function $(){if(Q)return Q;let e=Math.round((Z.x1-Z.x0)/Z.passo)+1,t=Math.round((Z.z1-Z.z0)/Z.passo)+1,n=new Float32Array(e*t);for(let r=0;r<t;r++)for(let t=0;t<e;t++)n[r*e+t]=W(Z.x0+t*Z.passo,Z.z0+r*Z.passo);return Q={nx:e,nz:t,d:n},Q}function ae(){let{nx:e,nz:t,d:n}=$(),r=new Uint8Array(e*t*4);for(let i=0;i<e*t;i++){let e=Math.round(a.clamp((n[i]+16)/24,0,1)*255);r[i*4]=r[i*4+1]=r[i*4+2]=e,r[i*4+3]=255}let i=new d(r,e,t,b);return i.magFilter=i.minFilter=j,i.needsUpdate=!0,i}function oe(){let n=document.createElement(`canvas`);n.width=n.height=256;let r=n.getContext(`2d`);r.fillStyle=`#d7c8a6`,r.fillRect(0,0,256,256);let i=31,a=()=>((i=i*16807%2147483647)-1)/2147483646;for(let e=0;e<9e3;e++){let e=a();r.fillStyle=e<.5?`rgba(150,135,105,${.25+e*.3})`:`rgba(245,236,214,${.2+(e-.5)*.4})`,r.fillRect(a()*256,a()*256,1+a()*1.5,1+a()*1.5)}for(let e=0;e<160;e++){let e=a()*256,t=a()*256,n=1.5+a()*3.5,i=120+a()*70;r.fillStyle=`rgb(${i},${i*.96},${i*.9})`,r.beginPath(),r.ellipse(e,t,n,n*(.6+a()*.4),a()*3,0,Math.PI*2),r.fill()}let o=new t(n);return o.wrapS=o.wrapT=e,o.colorSpace=C,o.anisotropy=4,o}function se(){let{nx:e,nz:t,d:n}=$(),r=[],o=[],s=[],c=[],l=new Int32Array(e*t).fill(-1),u=(t,i)=>{let c=i*e+t;if(l[c]>=0)return l[c];let u=Z.x0+t*Z.passo,d=Z.z0+i*Z.passo;l[c]=r.length/3,r.push(u,K(u,d)+.05,d);let f=1-a.smoothstep(n[c],4.8,7);return o.push(1,1,1,f),s.push(u/3,d/3),l[c]};for(let r=0;r<t-1;r++)for(let t=0;t<e-1;t++){let i=r*e+t,a=[n[i],n[i+1],n[i+e],n[i+e+1]];if(Math.max(...a)<1.18||Math.min(...a)>7||G(Z.x0+t*Z.passo,Z.z0+r*Z.passo,1))continue;let o=u(t,r),s=u(t+1,r),l=u(t,r+1),d=u(t+1,r+1);c.push(o,l,s,s,l,d)}let d=new i;return d.setAttribute(`position`,new y(r,3)),d.setAttribute(`color`,new y(o,4)),d.setAttribute(`uv`,new y(s,2)),d.setIndex(c),d.computeVertexNormals(),d}var ce=`
  #include <fog_pars_vertex>
  varying vec2 vMundo;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vMundo = wp.xz;
    vec4 mvPosition = viewMatrix * wp;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,le=`
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
    float prof = ${ie.toFixed(2)} - d; // metros da linha d'água para dentro
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
`;function ue(){let{espuma:e,praia:t,descartar:n}=(0,I.useMemo)(()=>{let e=ae(),t=Z.x1-Z.x0,n=Z.z1-Z.z0,r=new O({vertexShader:ce,fragmentShader:le,uniforms:{...D.clone(x.fog),uDist:{value:e},uJanela:{value:new N(Z.x0,Z.z0,t,n)},uTempo:{value:0},uNoite:{value:0},uRaso:{value:new h(`#8fd3cc`)}},transparent:!0,depthWrite:!1,fog:!0}),i=new v(t,n).rotateX(-Math.PI/2).translate(Z.x0+t/2,-1.22,Z.z0+n/2),a=new E(i,r);a.renderOrder=1;let o=oe(),s=new g({map:o,vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.96,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),c=se(),l=new E(c,s);return l.receiveShadow=!0,{espuma:a,praia:l,descartar:()=>{for(let t of[e,r,i,o,s,c])t.dispose()}}},[]);return(0,I.useEffect)(()=>n,[n]),A((t,n)=>{let r=e.material.uniforms;o.reduzirMovimento||(r.uTempo.value+=Math.min(n,.05)),r.uNoite.value=F(l.t).noite}),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`primitive`,{object:t}),(0,z.jsx)(`primitive`,{object:e})]})}function de(){let{malha:t,normal:r,descartar:i}=(0,I.useMemo)(()=>{let t=new w().load(n(`texturas/waternormals.webp`));t.wrapS=t.wrapT=e,t.repeat.set(140,110);let r=new p({color:J,roughness:.12,metalness:0,normalMap:t,normalScale:new P(.35,.35),envMapIntensity:1.1,ior:1.33,specularIntensity:1}),i=new v(1900,1450).rotateX(-Math.PI/2),a=new E(i,r);return a.position.set(80,B,-410),a.frustumCulled=!1,{malha:a,normal:t,descartar:()=>(i.dispose(),r.dispose(),t.dispose())}},[]);return(0,I.useEffect)(()=>i,[i]),A((e,n)=>{o.reduzirMovimento||(r.offset.x+=Math.min(n,.05)*.004,r.offset.y+=Math.min(n,.05)*.0027);let i=F(l.t),a=Math.max(0,Math.min(1,i.luzes*(1-i.noite)));t.material.color.copy(J).lerp(Y,a*.85).lerp(X,i.noite)}),(0,z.jsx)(`primitive`,{object:t})}function fe({qualidade:e}){return(0,z.jsxs)(z.Fragment,{children:[e===`alta`?(0,z.jsx)(pe,{}):(0,z.jsx)(de,{}),(0,z.jsx)(ue,{})]})}function pe(){let t=T(e=>e.gl),r=(0,I.useMemo)(()=>new S,[]),i=(0,I.useMemo)(()=>new h,[]),a=(0,I.useMemo)(()=>new h,[]),s=(0,I.useRef)(null),c=(0,I.useMemo)(()=>{let r=new w().load(n(`texturas/waternormals.webp`));return r.wrapS=e,r.wrapT=e,r.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),r.colorSpace=``,r},[t]),u=(0,I.useMemo)(()=>{let e=new L(new v(1900,1450),{textureWidth:512,textureHeight:512,waterNormals:c,sunDirection:new S(-.55,.75,.75).normalize(),sunColor:16314337,waterColor:J.getHex(),distortionScale:1.55,fog:!0});e.rotation.x=-Math.PI/2,e.position.set(80,B,-410),e.receiveShadow=!1,e.frustumCulled=!1;let t=e.material;return t.uniforms.size.value=3.6,t.fragmentShader=t.fragmentShader.replace(`float rf0 = 0.02;`,`float rf0 = 0.075;`).replace(`mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance )`,`mix( ( sunColor * diffuseLight * 0.24 + scatter ), reflectionSample * mix( vec3( 1.0 ), waterColor * 3.2, 0.32 ) + specularLight * 0.75, reflectance )`).replace(`#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>`,`#include <fog_fragment>
					#include <tonemapping_fragment>
					#include <colorspace_fragment>`),t.needsUpdate=!0,e},[c]);return(0,I.useEffect)(()=>(s.current=u,()=>{u.geometry.dispose();let e=u.material;(e.uniforms?.mirrorSampler?.value)?.dispose(),e.dispose()}),[u]),(0,I.useEffect)(()=>()=>{c.dispose()},[c]),A((e,t)=>{let n=s.current;if(!n)return;let c=n.material.uniforms;o.reduzirMovimento||(c.time.value+=Math.min(t,.05)*.36);let u=F(l.t);r.set(-.55,.2+.8*u.altSol,.75).normalize(),c.sunDirection.value.copy(r);let d=Math.max(0,Math.min(1,u.luzes*(1-u.noite)));i.copy(J).lerp(Y,d*.85).lerp(X,u.noite),c.waterColor.value.copy(i),a.copy(u.sol).lerp(re,u.noite*.65).multiplyScalar(.32+.52*(1-u.noite*.78)),c.sunColor.value.copy(a)}),(0,z.jsx)(`primitive`,{object:u})}export{W as a,U as c,K as i,B as n,q as o,H as r,G as s,R as t};