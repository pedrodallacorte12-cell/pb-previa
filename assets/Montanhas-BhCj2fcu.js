import{$n as e,Pt as t,Xn as n,qn as r,wn as i}from"./events-e51d7528.esm-BiFxDpwp.js";import{t as a}from"./Gltf-BGlEogoG.js";var o=e(n(),1),s=i(),c=r(`modelos/montanhas.glb`);function l(){let{scene:e}=a(c,!1,!0),n=(0,o.useMemo)(()=>{let n=e.clone(!0);return n.traverse(e=>{let n=e;if(!n.isMesh)return;let r=new t({color:`#ffffff`,vertexColors:!0,roughness:.96,metalness:0,envMapIntensity:.35,fog:!0,side:0});r.customProgramCacheKey=()=>`serra_montanhas_micro_atm`,r.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
            varying vec3 vSerraPos;
            varying vec3 vSerraNor;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
            vSerraPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
            vSerraNor = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
            varying vec3 vSerraPos;
            varying vec3 vSerraNor;
            float sHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
            float sNoise(vec2 p) {
              vec2 i = floor(p), f = fract(p);
              vec2 u = f * f * (3.0 - 2.0 * f);
              return mix(mix(sHash(i), sHash(i + vec2(1.0, 0.0)), u.x),
                         mix(sHash(i + vec2(0.0, 1.0)), sHash(i + vec2(1.0, 1.0)), u.x), u.y);
            }`).replace(`#include <color_fragment>`,`#include <color_fragment>
            float nCopa = sNoise(vSerraPos.xz * 0.14) * 0.6 + sNoise(vSerraPos.xz * 0.35 + 4.1) * 0.4;
            float nRocha = sNoise(vec2(vSerraPos.x * 0.08 + vSerraPos.z * 0.08, vSerraPos.y * 0.25));
            float incl = 1.0 - clamp(vSerraNor.y, 0.0, 1.0);
            float gran = mix(nCopa, nRocha, smoothstep(0.15, 0.35, incl));
            diffuseColor.rgb *= (0.86 + gran * 0.28);`).replace(`#include <fog_fragment>`,`#include <fog_fragment>
            #ifdef USE_FOG
            // perspectiva aérea: quanto mais longe e mais baixo (vales), mais a serra se dissolve na névoa azulada
            float sDist = length(vSerraPos - cameraPosition);
            float sLonge = smoothstep(140.0, 820.0, sDist);
            float sVale = 1.0 - smoothstep(4.0, 70.0, vSerraPos.y);
            float sAtm = clamp(sLonge * 0.55 + sVale * 0.35 * (0.4 + 0.6 * sLonge), 0.0, 0.82);
            gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor * vec3(0.96, 1.0, 1.06), sAtm);
            #endif`)},n.material=r,n.castShadow=!1,n.receiveShadow=!1,n.frustumCulled=!0}),n},[e]);return(0,s.jsx)(`primitive`,{object:n})}a.preload(c,!1,!0);export{l as default};