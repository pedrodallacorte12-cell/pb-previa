import{$n as e,Cn as t,Dt as n,Et as r,Ht as i,L as a,M as o,Nt as s,O as c,Ot as l,P as u,Pt as d,Qn as f,Qt as p,Un as m,Ut as ee,Vn as h,Wt as g,X as _,Xn as v,_ as y,_t as b,bn as x,en as S,fn as C,h as w,j as T,mn as E,qn as D,rn as O,sn as k,tn as A,tt as te,u as j,wn as M,xn as N,yn as P}from"./events-e51d7528.esm-BiFxDpwp.js";import{a as F}from"./roteiro-rXkd738U.js";var I=e(v(),1),L=class extends l{constructor(e,r={}){super(e),this.isWater=!0;let a=this,o=r.textureWidth===void 0?512:r.textureWidth,s=r.textureHeight===void 0?512:r.textureHeight,c=r.clipBias===void 0?0:r.clipBias,l=r.alpha===void 0?1:r.alpha,d=r.time===void 0?0:r.time,f=r.waterNormals===void 0?null:r.waterNormals,p=r.sunDirection===void 0?new x(.70707,.70707,0):r.sunDirection,m=new u(r.sunColor===void 0?16777215:r.sunColor),h=new u(r.waterColor===void 0?8355711:r.waterColor),g=r.eye===void 0?new x(0,0,0):r.eye,_=r.distortionScale===void 0?20:r.distortionScale,v=r.side===void 0?0:r.side,b=r.fog!==void 0&&r.fog,S=new ee,C=new x,w=new x,T=new x,D=new n,k=new x(0,0,-1),A=new N,j=new x,M=new x,P=new N,F=new n,I=new i,L=new t(o,s,{type:te}),R={name:`MirrorShader`,uniforms:E.merge([y.fog,y.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new n},sunColor:{value:new u(8355711)},sunDirection:{value:new x(.70707,.70707,0)},eye:{value:new x},waterColor:{value:new u(5592405)}}]),vertexShader:`
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
				}`},z=new O({name:R.name,uniforms:E.clone(R.uniforms),vertexShader:R.vertexShader,fragmentShader:R.fragmentShader,lights:!0,side:v,fog:b});z.uniforms.mirrorSampler.value=L.texture,z.uniforms.textureMatrix.value=F,z.uniforms.alpha.value=l,z.uniforms.time.value=d,z.uniforms.normalSampler.value=f,z.uniforms.sunColor.value=m,z.uniforms.waterColor.value=h,z.uniforms.sunDirection.value=p,z.uniforms.distortionScale.value=_,z.uniforms.eye.value=g,a.material=z,a.onBeforeRender=function(e,t,n){if(w.setFromMatrixPosition(a.matrixWorld),T.setFromMatrixPosition(n.matrixWorld),D.extractRotation(a.matrixWorld),C.set(0,0,1),C.applyMatrix4(D),j.subVectors(w,T),j.dot(C)>0)return;j.reflect(C).negate(),j.add(w),D.extractRotation(n.matrixWorld),k.set(0,0,-1),k.applyMatrix4(D),k.add(T),M.subVectors(w,k),M.reflect(C).negate(),M.add(w),I.position.copy(j),I.up.set(0,1,0),I.up.applyMatrix4(D),I.up.reflect(C),I.lookAt(M),I.far=n.far,I.updateMatrixWorld(),I.projectionMatrix.copy(n.projectionMatrix),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(I.projectionMatrix),F.multiply(I.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(C,w),S.applyMatrix4(I.matrixWorldInverse),A.set(S.normal.x,S.normal.y,S.normal.z,S.constant);let r=I.projectionMatrix;P.x=(Math.sign(A.x)+r.elements[8])/r.elements[0],P.y=(Math.sign(A.y)+r.elements[9])/r.elements[5],P.z=-1,P.w=(1+r.elements[10])/r.elements[14],A.multiplyScalar(2/A.dot(P)),r.elements[2]=A.x,r.elements[6]=A.y,r.elements[10]=A.z+1-c,r.elements[14]=A.w,g.setFromMatrixPosition(n.matrixWorld);let i=e.getRenderTarget(),o=e.xr.enabled,s=e.shadowMap.autoUpdate;a.visible=!1,e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(L),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,I),a.visible=!0,e.xr.enabled=o,e.shadowMap.autoUpdate=s,e.setRenderTarget(i);let l=n.viewport;l!==void 0&&e.state.viewport(l)}}},R=f({NIVEL_AGUA:()=>B,PONTES_DEF:()=>H,alturaTerrenoAgua:()=>K,default:()=>he,distanciaAgua:()=>W,gerarMargens:()=>q,naFaixaPonte:()=>G,semReflexo:()=>J,useSemReflexo:()=>Y,zCosta:()=>U}),z=M(),B=-1.25,ne=[[360,62],[270,66],[202,50],[160,22],[174,-22],[158,-70],[146,-112],[136,-158]],V=(()=>{let e=new o(ne.map(([e,t])=>new x(e,0,t)),!1,`centripetal`),t=[],n=new x,r=new x;for(let i=0;i<=96;i++){let a=i/96;e.getPoint(a,n),e.getTangent(a,r).normalize();let o=Math.max(0,(a-.78)/.22),s=7.6+1.1*Math.sin(a*Math.PI*3)+o*o*16;t.push({x:n.x,z:n.z,tx:r.x,tz:r.z,u:a,meiaLarg:s})}return t})(),H=[{id:`ponte_principal`,x:160,z:22,larguraRua:10,vao:28},{id:`ponte_norte`,x:158,z:-70,larguraRua:10,vao:28}];function U(e){let t=8*Math.sin(e*.012+.5)+4*Math.cos(e*.025),n=e>170?Math.min(36,(e-170)*.22):0;return-142+t+n}function re(e,t,n){let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25}function W(e,t){let n=t-U(e),r=1e6;if(e>95&&e<420&&t>-210&&t<130){let n=0xe8d4a51000,i=8;for(let r=0;r<V.length;r++){let a=V[r],o=e-a.x,s=t-a.z,c=o*o+s*s;c<n&&(n=c,i=a.meiaLarg)}r=Math.sqrt(n)-i}return re(n,r,14)}function G(e,t,n=3.5){for(let r of H)if(Math.abs(e-r.x)<r.vao/2+n&&Math.abs(t-r.z)<r.larguraRua/2+3.2+n)return!0;return!1}function K(e,t){let n=W(e,t);if(n>=8.5)return-.1;if(n<=-6)return-3.1;let r=(n+6)/14.5;return-3.1+3*(r*r*(3-2*r))}function q(e=409){let t=e,n=()=>(t=t*16807%2147483647,(t-1)/2147483646),r=[],i=[];for(let e=2;e<V.length-2;e++){let t=V[e],a=-t.tz,o=t.tx;for(let e of[-1,1]){if(n()<.85){let i=t.meiaLarg+.6+n()*3.8,s=t.x+a*e*i+(n()-.5)*2.2,c=t.z+o*e*i+(n()-.5)*2.2;if(!G(s,c,2.5)&&W(s,c)>-.6){let e=K(s,c);r.push([s,e,c,.45+n()*1.05])}}for(let r=0;r<2;r++){let r=t.meiaLarg+3.2+n()*6.5,s=t.x+a*e*r+(n()-.5)*3,c=t.z+o*e*r+(n()-.5)*3;if(!G(s,c,3.5)&&W(s,c)>1.8){let e=K(s,c);i.push([s,e,c,.55+n()*.95])}}}}for(let e=-280;e<=320;e+=4.5){let t=U(e);if(n()<.72){let i=e+(n()-.5)*3.2,a=t+1+n()*3.4;W(i,a)>-.5&&r.push([i,K(i,a),a,.55+n()*1.25])}if(n()<.78){let r=e+(n()-.5)*3.8,a=t+4.2+n()*5.8;W(r,a)>2.2&&i.push([r,K(r,a),a,.65+n()*1.05])}}return{pedras:r,arbustos:i}}var J=new Set;function Y(){let e=(0,I.useRef)(null);return(0,I.useEffect)(()=>{let t=e.current;if(t)return J.add(t),()=>void J.delete(t)},[]),e}var X=new u(`#2a8e98`),Z=new u(`#1d5a68`),ie=new u(`#05101c`),ae=new u(`#6b84b8`),oe=2.38,Q={x0:-300,x1:420,z0:-205,z1:100,passo:2},$=null;function se(){if($)return $;let e=Math.round((Q.x1-Q.x0)/Q.passo)+1,t=Math.round((Q.z1-Q.z0)/Q.passo)+1,n=new Float32Array(e*t);for(let r=0;r<t;r++)for(let t=0;t<e;t++)n[r*e+t]=W(Q.x0+t*Q.passo,Q.z0+r*Q.passo);return $={nx:e,nz:t,d:n},$}function ce(){let{nx:e,nz:t,d:n}=se(),i=new Uint8Array(e*t*4);for(let a=0;a<e*t;a++){let e=Math.round(r.clamp((n[a]+16)/24,0,1)*255);i[a*4]=i[a*4+1]=i[a*4+2]=e,i[a*4+3]=255}let o=new a(i,e,t,p);return o.magFilter=o.minFilter=b,o.needsUpdate=!0,o}function le(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#d7c8a6`,t.fillRect(0,0,256,256);let n=31,r=()=>((n=n*16807%2147483647)-1)/2147483646;for(let e=0;e<9e3;e++){let e=r();t.fillStyle=e<.5?`rgba(150,135,105,${.25+e*.3})`:`rgba(245,236,214,${.2+(e-.5)*.4})`,t.fillRect(r()*256,r()*256,1+r()*1.5,1+r()*1.5)}for(let e=0;e<160;e++){let e=r()*256,n=r()*256,i=1.5+r()*3.5,a=120+r()*70;t.fillStyle=`rgb(${a},${a*.96},${a*.9})`,t.beginPath(),t.ellipse(e,n,i,i*(.6+r()*.4),r()*3,0,Math.PI*2),t.fill()}let i=new T(e);return i.wrapS=i.wrapT=S,i.colorSpace=A,i.anisotropy=4,i}function ue(){let{nx:e,nz:t,d:n}=se(),i=[],a=[],o=[],s=[],l=new Int32Array(e*t).fill(-1),u=(t,s)=>{let c=s*e+t;if(l[c]>=0)return l[c];let u=Q.x0+t*Q.passo,d=Q.z0+s*Q.passo;l[c]=i.length/3,i.push(u,K(u,d)+.05,d);let f=1-r.smoothstep(n[c],4.8,7);return a.push(1,1,1,f),o.push(u/3,d/3),l[c]};for(let r=0;r<t-1;r++)for(let t=0;t<e-1;t++){let i=r*e+t,a=[n[i],n[i+1],n[i+e],n[i+e+1]];if(Math.max(...a)<1.18||Math.min(...a)>7||G(Q.x0+t*Q.passo,Q.z0+r*Q.passo,1))continue;let o=u(t,r),c=u(t+1,r),l=u(t,r+1),d=u(t+1,r+1);s.push(o,l,c,c,l,d)}let d=new c;return d.setAttribute(`position`,new _(i,3)),d.setAttribute(`color`,new _(a,4)),d.setAttribute(`uv`,new _(o,2)),d.setIndex(s),d.computeVertexNormals(),d}var de=`
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
    float prof = ${oe.toFixed(2)} - d; // metros da linha d'água para dentro
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
`;function pe(){let{espuma:e,praia:t,descartar:n}=(0,I.useMemo)(()=>{let e=ce(),t=Q.x1-Q.x0,n=Q.z1-Q.z0,r=new O({vertexShader:de,fragmentShader:fe,uniforms:{...E.clone(y.fog),uDist:{value:e},uJanela:{value:new N(Q.x0,Q.z0,t,n)},uTempo:{value:0},uNoite:{value:0},uRaso:{value:new u(`#8fd3cc`)}},transparent:!0,depthWrite:!1,fog:!0}),i=new g(t,n).rotateX(-Math.PI/2).translate(Q.x0+t/2,-1.22,Q.z0+n/2),a=new l(i,r);a.renderOrder=1;let o=le(),s=new d({map:o,vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.96,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),c=ue(),f=new l(c,s);return f.receiveShadow=!0,{espuma:a,praia:f,descartar:()=>{for(let t of[e,r,i,o,s,c])t.dispose()}}},[]);return(0,I.useEffect)(()=>n,[n]),j((t,n)=>{let r=e.material.uniforms;h.reduzirMovimento||(r.uTempo.value+=Math.min(n,.05)),r.uNoite.value=F(m.t).noite}),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`primitive`,{object:t}),(0,z.jsx)(`primitive`,{object:e})]})}function me(){let{malha:e,normal:t,descartar:n}=(0,I.useMemo)(()=>{let e=new C().load(D(`texturas/waternormals.webp`));e.wrapS=e.wrapT=S,e.repeat.set(140,110);let t=new s({color:X,roughness:.12,metalness:0,normalMap:e,normalScale:new P(.35,.35),envMapIntensity:1.1,ior:1.33,specularIntensity:1}),n=new g(1900,1450).rotateX(-Math.PI/2),r=new l(n,t);return r.position.set(80,B,-410),r.frustumCulled=!1,{malha:r,normal:e,descartar:()=>(n.dispose(),t.dispose(),e.dispose())}},[]);return(0,I.useEffect)(()=>n,[n]),j((n,r)=>{h.reduzirMovimento||(t.offset.x+=Math.min(r,.05)*.004,t.offset.y+=Math.min(r,.05)*.0027);let i=F(m.t),a=Math.max(0,Math.min(1,i.luzes*(1-i.noite)));e.material.color.copy(X).lerp(Z,a*.85).lerp(ie,i.noite)}),(0,z.jsx)(`primitive`,{object:e})}function he({qualidade:e}){return(0,z.jsxs)(z.Fragment,{children:[e===`alta`?(0,z.jsx)(ge,{}):(0,z.jsx)(me,{}),(0,z.jsx)(pe,{})]})}function ge(){let e=w(e=>e.gl),t=(0,I.useMemo)(()=>new x,[]),n=(0,I.useMemo)(()=>new u,[]),r=(0,I.useMemo)(()=>new u,[]),i=(0,I.useRef)(null),a=(0,I.useMemo)(()=>{let t=new C().load(D(`texturas/waternormals.webp`));return t.wrapS=S,t.wrapT=S,t.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()),t.colorSpace=``,t},[e]),o=(0,I.useMemo)(()=>{let e=new L(new g(1900,1450),{textureWidth:768,textureHeight:768,waterNormals:a,sunDirection:new x(-.55,.75,.75).normalize(),sunColor:16314337,waterColor:X.getHex(),distortionScale:.95,fog:!0});e.rotation.x=-Math.PI/2,e.position.set(80,B,-410),e.receiveShadow=!1,e.frustumCulled=!1;let t=e.material;t.uniforms.size.value=4.6,t.fragmentShader=t.fragmentShader.replace(`float rf0 = 0.02;`,`float rf0 = 0.05;`).replace(`float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );`,`float reflectance = rf0 + ( 1.0 - rf0 ) * pow( clamp( 1.0 - theta, 0.0, 1.0 ), 4.0 );`).replace(`mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance )`,`mix( ( sunColor * diffuseLight * 0.24 + scatter ), reflectionSample * mix( vec3( 1.0 ), waterColor * 3.0, 0.18 ) + specularLight * 0.85, reflectance )`).replace(`#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>`,`#include <fog_fragment>
					#include <tonemapping_fragment>
					#include <colorspace_fragment>`),t.needsUpdate=!0;let n=e.onBeforeRender,r=new k,i=[],o=0;return e.onBeforeRender=function(t,a,...s){if(e.userData.refletiu)return;e.userData.refletiu=!0,o++%120==0&&(i=[],a.traverse(t=>{let n=t;n.isMesh&&!n.isInstancedMesh&&n!==e&&(n.geometry.boundingSphere||n.geometry.computeBoundingSphere(),r.copy(n.geometry.boundingSphere).applyMatrix4(n.matrixWorld),([].concat(n.material).some(e=>e.transmission>0)||r.radius<1.6||r.center.y+r.radius<-1.55)&&i.push(n))}));let c=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1;let l=[];J.forEach(e=>e.visible&&=(l.push(e),!1)),i.forEach(e=>e.visible&&=(l.push(e),!1)),n.call(e,t,a,...s),l.forEach(e=>e.visible=!0),t.shadowMap.autoUpdate=c},e},[a]);return(0,I.useEffect)(()=>(i.current=o,()=>{o.geometry.dispose();let e=o.material;(e.uniforms?.mirrorSampler?.value)?.dispose(),e.dispose()}),[o]),(0,I.useEffect)(()=>()=>{a.dispose()},[a]),j((e,a)=>{let o=i.current;if(!o)return;o.userData.refletiu=!1;let s=o.material.uniforms;h.reduzirMovimento||(s.time.value+=Math.min(a,.05)*.36);let c=F(m.t);t.set(-.55,.2+.8*c.altSol,.75).normalize(),s.sunDirection.value.copy(t);let l=Math.max(0,Math.min(1,c.luzes*(1-c.noite)));n.copy(X).lerp(Z,l*.85).lerp(ie,c.noite),s.waterColor.value.copy(n),r.copy(c.sol).lerp(ae,c.noite*.65).multiplyScalar(.32+.52*(1-c.noite*.78)),s.sunColor.value.copy(r)}),(0,z.jsx)(`primitive`,{object:o})}export{W as a,Y as c,K as i,U as l,B as n,q as o,H as r,G as s,R as t};