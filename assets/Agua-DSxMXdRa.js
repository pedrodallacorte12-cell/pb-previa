import{$n as e,$t as t,A as n,Cn as r,Dt as i,Et as a,Hn as o,Ht as s,I as c,Jn as l,N as u,Nt as d,Ot as f,P as p,Ut as m,Vt as h,Wn as g,X as _,Zn as v,Zt as y,_t as b,bn as x,dn as S,en as C,er as w,h as T,mn as E,nn as D,on as O,tt as ee,u as k,wn as A,xn as j,y as M,yn as N,z as P}from"./events-e51d7528.esm-Ox0bj2Ds.js";import{a as F}from"./roteiro-DlK7Xoq7.js";var I=w(v(),1),L=class extends f{constructor(e,t={}){super(e),this.isWater=!0;let n=this,a=t.textureWidth===void 0?512:t.textureWidth,o=t.textureHeight===void 0?512:t.textureHeight,l=t.clipBias===void 0?0:t.clipBias,u=t.alpha===void 0?1:t.alpha,d=t.time===void 0?0:t.time,f=t.waterNormals===void 0?null:t.waterNormals,p=t.sunDirection===void 0?new x(.70707,.70707,0):t.sunDirection,m=new c(t.sunColor===void 0?16777215:t.sunColor),g=new c(t.waterColor===void 0?8355711:t.waterColor),_=t.eye===void 0?new x(0,0,0):t.eye,v=t.distortionScale===void 0?20:t.distortionScale,y=t.side===void 0?0:t.side,b=t.fog!==void 0&&t.fog,S=new s,C=new x,w=new x,T=new x,O=new i,k=new x(0,0,-1),A=new j,N=new x,P=new x,F=new j,I=new i,L=new h,R=new r(a,o,{type:ee}),z={name:`MirrorShader`,uniforms:E.merge([M.fog,M.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new i},sunColor:{value:new c(8355711)},sunDirection:{value:new x(.70707,.70707,0)},eye:{value:new x},waterColor:{value:new c(5592405)}}]),vertexShader:`
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
				}`},B=new D({name:z.name,uniforms:E.clone(z.uniforms),vertexShader:z.vertexShader,fragmentShader:z.fragmentShader,lights:!0,side:y,fog:b});B.uniforms.mirrorSampler.value=R.texture,B.uniforms.textureMatrix.value=I,B.uniforms.alpha.value=u,B.uniforms.time.value=d,B.uniforms.normalSampler.value=f,B.uniforms.sunColor.value=m,B.uniforms.waterColor.value=g,B.uniforms.sunDirection.value=p,B.uniforms.distortionScale.value=v,B.uniforms.eye.value=_,n.material=B,n.onBeforeRender=function(e,t,r){if(w.setFromMatrixPosition(n.matrixWorld),T.setFromMatrixPosition(r.matrixWorld),O.extractRotation(n.matrixWorld),C.set(0,0,1),C.applyMatrix4(O),N.subVectors(w,T),N.dot(C)>0)return;N.reflect(C).negate(),N.add(w),O.extractRotation(r.matrixWorld),k.set(0,0,-1),k.applyMatrix4(O),k.add(T),P.subVectors(w,k),P.reflect(C).negate(),P.add(w),L.position.copy(N),L.up.set(0,1,0),L.up.applyMatrix4(O),L.up.reflect(C),L.lookAt(P),L.far=r.far,L.updateMatrixWorld(),L.projectionMatrix.copy(r.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(L.projectionMatrix),I.multiply(L.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(C,w),S.applyMatrix4(L.matrixWorldInverse),A.set(S.normal.x,S.normal.y,S.normal.z,S.constant);let i=L.projectionMatrix;F.x=(Math.sign(A.x)+i.elements[8])/i.elements[0],F.y=(Math.sign(A.y)+i.elements[9])/i.elements[5],F.z=-1,F.w=(1+i.elements[10])/i.elements[14],A.multiplyScalar(2/A.dot(F)),i.elements[2]=A.x,i.elements[6]=A.y,i.elements[10]=A.z+1-l,i.elements[14]=A.w,_.setFromMatrixPosition(r.matrixWorld);let a=e.getRenderTarget(),o=e.xr.enabled,s=e.shadowMap.autoUpdate;n.visible=!1,e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(R),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,L),n.visible=!0,e.xr.enabled=o,e.shadowMap.autoUpdate=s,e.setRenderTarget(a);let c=r.viewport;c!==void 0&&e.state.viewport(c)}}},R=e({NIVEL_AGUA:()=>B,PONTES_DEF:()=>H,alturaTerrenoAgua:()=>K,default:()=>me,distanciaAgua:()=>W,gerarMargens:()=>q,naFaixaPonte:()=>G,semReflexo:()=>J,useSemReflexo:()=>Y,zCosta:()=>U}),z=A(),B=-1.25,te=[[360,62],[270,66],[202,50],[160,22],[174,-22],[158,-70],[146,-112],[136,-158]],V=(()=>{let e=new p(te.map(([e,t])=>new x(e,0,t)),!1,`centripetal`),t=[],n=new x,r=new x;for(let i=0;i<=96;i++){let a=i/96;e.getPoint(a,n),e.getTangent(a,r).normalize();let o=Math.max(0,(a-.78)/.22),s=7.6+1.1*Math.sin(a*Math.PI*3)+o*o*16;t.push({x:n.x,z:n.z,tx:r.x,tz:r.z,u:a,meiaLarg:s})}return t})(),H=[{id:`ponte_principal`,x:160,z:22,larguraRua:10,vao:28},{id:`ponte_norte`,x:158,z:-70,larguraRua:10,vao:28}];function U(e){let t=8*Math.sin(e*.012+.5)+4*Math.cos(e*.025),n=e>170?Math.min(36,(e-170)*.22):0;return-142+t+n}function ne(e,t,n){let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25}function W(e,t){let n=t-U(e),r=1e6;if(e>95&&e<420&&t>-210&&t<130){let n=0xe8d4a51000,i=8;for(let r=0;r<V.length;r++){let a=V[r],o=e-a.x,s=t-a.z,c=o*o+s*s;c<n&&(n=c,i=a.meiaLarg)}r=Math.sqrt(n)-i}return ne(n,r,14)}function G(e,t,n=3.5){for(let r of H)if(Math.abs(e-r.x)<r.vao/2+n&&Math.abs(t-r.z)<r.larguraRua/2+3.2+n)return!0;return!1}function K(e,t){let n=W(e,t);if(n>=8.5)return-.1;if(n<=-6)return-3.1;let r=(n+6)/14.5;return-3.1+3*(r*r*(3-2*r))}function q(e=409){let t=e,n=()=>(t=t*16807%2147483647,(t-1)/2147483646),r=[],i=[],a=[];for(let e=2;e<V.length-2;e++){let t=V[e],o=-t.tz,s=t.tx;for(let e of[-1,1]){if(n()<.88){let i=t.meiaLarg+.8+n()*3.2,a=t.x+o*e*i+(n()-.5)*2,c=t.z+s*e*i+(n()-.5)*2,l=W(a,c);if(!G(a,c,2.5)&&l>.6&&l<5.5){let e=.5+n()*1.1;if(r.push([a,K(a,c),c,e]),n()<.65){let t=a+(n()-.5)*1.8,i=c+(n()-.5)*1.8;!G(t,i,2.5)&&W(t,i)>.4&&r.push([t,K(t,i),i,e*(.42+n()*.35)])}}}for(let r=0;r<2;r++)if(n()<.72){let r=t.meiaLarg+1.5+n()*2.4,i=t.x+o*e*r+(n()-.5)*2.4,c=t.z+s*e*r+(n()-.5)*2.4,l=W(i,c);!G(i,c,2.5)&&l>1.7&&l<4.6&&a.push([i,K(i,c),c,.75+n()*.75])}for(let r=0;r<2;r++){let r=t.meiaLarg+3.6+n()*6,a=t.x+o*e*r+(n()-.5)*3,c=t.z+s*e*r+(n()-.5)*3;!G(a,c,3.5)&&W(a,c)>2.4&&i.push([a,K(a,c),c,.6+n()*1])}}}for(let e=-285;e<=325;e+=3.4){let t=U(e);if(n()<.76){let i=e+(n()-.5)*2.6,a=t+1.3+n()*3.1,o=W(i,a);if(o>.6&&o<5.8){let e=.6+n()*1.3;if(r.push([i,K(i,a),a,e]),n()<.72){let t=i+(n()-.5)*2.1,o=a+(n()-.5)*1.6;W(t,o)>.4&&r.push([t,K(t,o),o,e*(.4+n()*.38)])}}}let o=Math.sin(e*.055+1.1);if(n()<(o>-.25?.85:.35)){let r=o>.2?3:2;for(let i=0;i<r;i++){let r=e+(n()-.5)*3.2,i=t+1.9+n()*2.8,o=W(r,i);o>1.75&&o<5.2&&a.push([r,K(r,i),i,.8+n()*.95])}}if(n()<.82){let r=e+(n()-.5)*3.4,a=t+4.4+n()*5.8;W(r,a)>3.2&&i.push([r,K(r,a),a,.68+n()*1.12])}}return{pedras:r,arbustos:i,juncos:a}}var J=new Set;function Y(){let e=(0,I.useRef)(null);return(0,I.useEffect)(()=>{let t=e.current;if(t)return J.add(t),()=>void J.delete(t)},[]),e}var X=new c(`#1a5b67`),Z=new c(`#133c4c`),re=new c(`#05101c`),ie=new c(`#6b84b8`),ae=2.38,Q={x0:-300,x1:420,z0:-205,z1:100,passo:2},$=null;function oe(){if($)return $;let e=Math.round((Q.x1-Q.x0)/Q.passo)+1,t=Math.round((Q.z1-Q.z0)/Q.passo)+1,n=new Float32Array(e*t);for(let r=0;r<t;r++)for(let t=0;t<e;t++)n[r*e+t]=W(Q.x0+t*Q.passo,Q.z0+r*Q.passo);return $={nx:e,nz:t,d:n},$}function se(){let{nx:e,nz:t,d:n}=oe(),r=new Uint8Array(e*t*4);for(let i=0;i<e*t;i++){let e=Math.round(a.clamp((n[i]+16)/24,0,1)*255);r[i*4]=r[i*4+1]=r[i*4+2]=e,r[i*4+3]=255}let i=new P(r,e,t,y);return i.magFilter=i.minFilter=b,i.needsUpdate=!0,i}function ce(e){let n=e?512:256,r=document.createElement(`canvas`);r.width=r.height=n;let i=r.getContext(`2d`);i.fillStyle=`#c8baa0`,i.fillRect(0,0,n,n);let a=31,o=()=>((a=a*16807%2147483647)-1)/2147483646,s=n/256;for(let e=0;e<40;e++){let e=o()*n,t=o()*n,r=(14+o()*34)*s,a=i.createRadialGradient(e,t,0,e,t,r),c=o()<.55;a.addColorStop(0,c?`rgba(130, 118, 96, 0.22)`:`rgba(225, 214, 190, 0.2)`),a.addColorStop(1,`rgba(0,0,0,0)`),i.fillStyle=a,i.fillRect(e-r,t-r,r*2,r*2)}let c=e?18e3:8e3;for(let e=0;e<c;e++){let e=o();i.fillStyle=e<.5?`rgba(128,115,92,${.22+e*.32})`:`rgba(235,224,202,${.18+(e-.5)*.36})`,i.fillRect(o()*n,o()*n,(1+o()*1.4)*s,(1+o()*1.4)*s)}let l=e?340:140;for(let e=0;e<l;e++){let e=o()*n,t=o()*n,r=(1.4+o()*3.4)*s,a=102+o()*76;i.fillStyle=`rgb(${a},${a*.96},${a*.89})`,i.beginPath(),i.ellipse(e,t,r,r*(.58+o()*.4),o()*Math.PI,0,Math.PI*2),i.fill()}let d=new u(r);return d.wrapS=d.wrapT=t,d.colorSpace=C,d.anisotropy=e?6:2,d}function le(){let{nx:e,nz:t,d:r}=oe(),i=[],o=[],s=[],c=[],l=new Int32Array(e*t).fill(-1),u=(t,n)=>{let c=n*e+t;if(l[c]>=0)return l[c];let u=Q.x0+t*Q.passo,d=Q.z0+n*Q.passo;l[c]=i.length/3,i.push(u,K(u,d)+.045,d);let f=Math.sin(u*.14+d*.11)*.95+Math.cos(u*.31-d*.27)*.45,p=r[c]+f,m=1-a.smoothstep(p,4.800000000000001,7.4),h=.56+a.smoothstep(r[c],2.23,3.9299999999999997)*.4;return o.push(h,h*.98,h*.93,m),s.push(u/3.2,d/3.2),l[c]};for(let n=0;n<t-1;n++)for(let t=0;t<e-1;t++){let i=n*e+t,a=[r[i],r[i+1],r[i+e],r[i+e+1]];if(Math.max(...a)<.8799999999999999||Math.min(...a)>8.9||G(Q.x0+t*Q.passo,Q.z0+n*Q.passo,1))continue;let o=u(t,n),s=u(t+1,n),l=u(t,n+1),d=u(t+1,n+1);c.push(o,l,s,s,l,d)}let d=new n;return d.setAttribute(`position`,new _(i,3)),d.setAttribute(`color`,new _(o,4)),d.setAttribute(`uv`,new _(s,2)),d.setIndex(c),d.computeVertexNormals(),d}var ue=`
  #include <fog_pars_vertex>
  varying vec2 vMundo;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vMundo = wp.xz;
    vec4 mvPosition = viewMatrix * wp;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,de=`
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
    float prof = ${ae.toFixed(2)} - d; // metros da linha d'água para dentro
    if (prof < -0.18 || prof > 12.0) discard;
    // Transição natural de água rasa de lago (fundo arenoso translúcido perto da margem)
    float raso = (1.0 - smoothstep(0.0, 7.5, prof)) * smoothstep(-0.18, 0.35, prof) * 0.42;
    // Pequenas marolas suaves lambendo a margem do lago (delicadas, sem ressaca de mar)
    float n = ruido(vMundo * 0.55 + vec2(uTempo * 0.18, -uTempo * 0.14)) * 0.62 + ruido(vMundo * 2.1 - uTempo * 0.32) * 0.38;
    float borda = exp(-max(prof, 0.0) / 0.38) * smoothstep(0.38, 0.78, n + 0.14) * smoothstep(-0.15, 0.08, prof);
    float marola = smoothstep(0.86, 1.0, sin(prof * 4.2 - uTempo * 1.4)) * exp(-max(prof, 0.0) / 1.1) * smoothstep(0.45, 0.78, n);
    float espuma = clamp(borda * 0.62 + marola * 0.35, 0.0, 0.75) * (1.0 - uNoite * 0.82);
    vec3 cor = mix(uRaso, vec3(0.92, 0.95, 0.95), espuma / max(espuma + raso, 1e-3));
    float a = clamp(espuma * 0.72 + raso * (1.0 - uNoite * 0.72), 0.0, 0.78);
    gl_FragColor = vec4(cor, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;function fe({alta:e}){let{espuma:t,praia:n,descartar:r}=(0,I.useMemo)(()=>{let t=se(),n=Q.x1-Q.x0,r=Q.z1-Q.z0,i=new D({vertexShader:ue,fragmentShader:de,uniforms:{...E.clone(M.fog),uDist:{value:t},uJanela:{value:new j(Q.x0,Q.z0,n,r)},uTempo:{value:0},uNoite:{value:0},uRaso:{value:new c(`#66a39c`)}},transparent:!0,depthWrite:!1,fog:!0}),a=new m(n,r).rotateX(-Math.PI/2).translate(Q.x0+n/2,-1.225,Q.z0+r/2),o=new f(a,i);o.renderOrder=1;let s=ce(e),l=new d({map:s,vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.94,metalness:.01,envMapIntensity:.42,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});l.customProgramCacheKey=()=>`orla_areia_nat_v1`,l.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vAreiaW;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vAreiaW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vAreiaW;
float sHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float sNoise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);return mix(mix(sHash(i),sHash(i+vec2(1,0)),u.x),mix(sHash(i+vec2(0,1)),sHash(i+vec2(1,1)),u.x),u.y);}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
          // Areia molhada junto à linha d'água (y ≈ NIVEL_AGUA) levemente mais lisa; seca mais áspera e irregular
          float umida = 1.0 - smoothstep(${(-1.23).toFixed(2)}, ${(-.8300000000000001).toFixed(2)}, vAreiaW.y);
          float nAr = sNoise(vAreiaW.xz * 0.55);
          roughnessFactor = clamp(mix(roughnessFactor + (nAr - 0.5) * 0.12, 0.52, umida * 0.72), 0.45, 0.99);`)};let u=le(),p=new f(u,l);return p.receiveShadow=e,{espuma:o,praia:p,descartar:()=>{for(let e of[t,i,a,s,l,u])e.dispose()}}},[e]);return(0,I.useEffect)(()=>r,[r]),k((e,n)=>{let r=t.material.uniforms;o.reduzirMovimento||(r.uTempo.value+=Math.min(n,.05)),r.uNoite.value=F(g.t).noite}),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`primitive`,{object:n}),(0,z.jsx)(`primitive`,{object:t})]})}function pe(){let{malha:e,normal:n,descartar:r}=(0,I.useMemo)(()=>{let e=new S().load(l(`texturas/waternormals.webp`));e.wrapS=e.wrapT=t,e.repeat.set(165,130);let n=new d({color:X,roughness:.13,metalness:.26,normalMap:e,normalScale:new N(.28,.28),envMapIntensity:1.2}),r=new m(1900,1450).rotateX(-Math.PI/2),i=new f(r,n);return i.position.set(80,B,-410),i.frustumCulled=!1,{malha:i,normal:e,descartar:()=>(r.dispose(),n.dispose(),e.dispose())}},[]);return(0,I.useEffect)(()=>r,[r]),k((t,r)=>{o.reduzirMovimento||(n.offset.x+=Math.min(r,.05)*.004,n.offset.y+=Math.min(r,.05)*.0027);let i=F(g.t),a=Math.max(0,Math.min(1,i.luzes*(1-i.noite)));e.material.color.copy(X).lerp(Z,a*.85).lerp(re,i.noite)}),(0,z.jsx)(`primitive`,{object:e})}function me({qualidade:e}){let t=e===`alta`;return(0,z.jsxs)(z.Fragment,{children:[t?(0,z.jsx)(he,{}):(0,z.jsx)(pe,{}),(0,z.jsx)(fe,{alta:t})]})}function he(){let e=T(e=>e.gl),n=(0,I.useMemo)(()=>new x,[]),r=(0,I.useMemo)(()=>new c,[]),i=(0,I.useMemo)(()=>new c,[]),a=(0,I.useRef)(null),s=(0,I.useMemo)(()=>{let n=new S().load(l(`texturas/waternormals.webp`));return n.wrapS=t,n.wrapT=t,n.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),n.colorSpace=``,n},[e]),u=(0,I.useMemo)(()=>{let e=1024,t=new L(new m(1900,1450),{textureWidth:e,textureHeight:e,waterNormals:s,sunDirection:new x(-.55,.75,.75).normalize(),sunColor:16314337,waterColor:X.getHex(),distortionScale:.62,fog:!0});t.rotation.x=-Math.PI/2,t.position.set(80,B,-410),t.receiveShadow=!1,t.frustumCulled=!1;let n=t.material;n.uniforms.size.value=6.2,n.fragmentShader=n.fragmentShader.replace(`vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;`,`float distSmooth = clamp( 1.0 / ( 1.0 + distance * 0.0045 ), 0.28, 1.0 );
					vec2 distortion = surfaceNormal.xz * ( 0.0008 + 0.9 / max( distance, 6.0 ) ) * distortionScale * distSmooth;`).replace(`float rf0 = 0.02;`,`float rf0 = 0.045;`).replace(`float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );`,`float reflectance = clamp( rf0 + ( 1.0 - rf0 ) * pow( clamp( 1.0 - theta, 0.0, 1.0 ), 4.0 ), 0.045, 0.94 );`).replace(`mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance )`,`mix( ( sunColor * diffuseLight * 0.20 + scatter ), reflectionSample * mix( vec3( 1.0 ), waterColor * 2.7, 0.12 ) + specularLight * 0.68, reflectance )`).replace(`#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>`,`#include <fog_fragment>
					#include <tonemapping_fragment>
					#include <colorspace_fragment>`),n.needsUpdate=!0;let r=t.onBeforeRender,i=new O,a=[],o=0;return t.onBeforeRender=function(e,n,...s){if(t.userData.refletiu)return;t.userData.refletiu=!0,o++%120==0&&(a=[],n.traverse(e=>{let n=e;n.isMesh&&!n.isInstancedMesh&&n!==t&&(n.geometry.boundingSphere||n.geometry.computeBoundingSphere(),i.copy(n.geometry.boundingSphere).applyMatrix4(n.matrixWorld),([].concat(n.material).some(e=>e.transmission>0)||i.radius<1.6||i.center.y+i.radius<-1.55)&&a.push(n))}));let c=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1;let l=[];J.forEach(e=>e.visible&&=(l.push(e),!1)),a.forEach(e=>e.visible&&=(l.push(e),!1)),r.call(t,e,n,...s),l.forEach(e=>e.visible=!0),e.shadowMap.autoUpdate=c},t},[s]);return(0,I.useEffect)(()=>(a.current=u,()=>{u.geometry.dispose();let e=u.material;(e.uniforms?.mirrorSampler?.value)?.dispose(),e.dispose()}),[u]),(0,I.useEffect)(()=>()=>{s.dispose()},[s]),k((e,t)=>{let s=a.current;if(!s)return;s.userData.refletiu=!1;let c=s.material.uniforms;o.reduzirMovimento||(c.time.value+=Math.min(t,.05)*.32);let l=F(g.t);n.set(-.55,.2+.8*l.altSol,.75).normalize(),c.sunDirection.value.copy(n);let u=Math.max(0,Math.min(1,l.luzes*(1-l.noite)));r.copy(X).lerp(Z,u*.85).lerp(re,l.noite),c.waterColor.value.copy(r),i.copy(l.sol).lerp(ie,l.noite*.65).multiplyScalar(.34+.54*(1-l.noite*.78)),c.sunColor.value.copy(i)}),(0,z.jsx)(`primitive`,{object:u})}export{W as a,Y as c,K as i,U as l,B as n,q as o,H as r,G as s,R as t};