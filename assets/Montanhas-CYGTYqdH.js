import{Bn as e,Kn as t,Pt as n,Un as r,wn as i}from"./events-e51d7528.esm-BBOnX4Hz.js";import{t as a}from"./Gltf-DLa3qgI9.js";var o=t(r(),1),s=i(),c=e(`modelos/montanhas.glb`);function l(){let{scene:e}=a(c,!1,!0),t=(0,o.useMemo)(()=>{let t=e.clone(!0);return t.traverse(e=>{let t=e;if(!t.isMesh)return;let r=new n({color:`#ffffff`,vertexColors:!0,roughness:.96,metalness:0,envMapIntensity:.35,fog:!0,side:0});r.customProgramCacheKey=()=>`serra_montanhas_micro`,r.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
            diffuseColor.rgb *= (0.86 + gran * 0.28);`)},t.material=r,t.castShadow=!1,t.receiveShadow=!1,t.frustumCulled=!0}),t},[e]);return(0,s.jsx)(`primitive`,{object:t})}a.preload(c,!1,!0);export{l as default};