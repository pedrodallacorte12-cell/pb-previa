import{Ft as e,ir as t,kn as n,sr as r,ur as i}from"./events-e51d7528.esm-LHO7OEip.js";import{t as a}from"./Gltf-nN8Mjbe2.js";var o=i(r(),1),s=n(),c=t(`modelos/montanhas.glb`);function l(){let{scene:t}=a(c,!1,!0),n=(0,o.useMemo)(()=>{let n=t.clone(!0);return n.traverse(t=>{let n=t;if(!n.isMesh)return;let r=new e({color:`#ffffff`,vertexColors:!0,roughness:.94,metalness:0,envMapIntensity:.42,fog:!0,side:0});r.customProgramCacheKey=()=>`serra_montanhas_relevo_v3`,r.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
            varying vec3 vSerraPos;
            varying vec3 vSerraNor;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
            vSerraPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
            vSerraNor = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
            varying vec3 vSerraPos;
            varying vec3 vSerraNor;

            float sHash(vec2 p) {
              vec3 p3 = fract(vec3(p.xyx) * 0.1031);
              p3 += dot(p3, p3.yzx + 33.33);
              return fract((p3.x + p3.y) * p3.z);
            }

            // Valor + gradiente analítico (x = valor, yz = d/dx, d/dy) para bump nítido sem costura
            vec3 sNoiseGrad(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);
              vec2 u = f * f * (3.0 - 2.0 * f);
              vec2 du = 6.0 * f * (1.0 - f);
              float a = sHash(i);
              float b = sHash(i + vec2(1.0, 0.0));
              float c = sHash(i + vec2(0.0, 1.0));
              float d = sHash(i + vec2(1.0, 1.0));
              float k0 = a;
              float k1 = b - a;
              float k2 = c - a;
              float k3 = a - b - c + d;
              float val = k0 + k1 * u.x + k2 * u.y + k3 * u.x * u.y;
              vec2 grad = du * vec2(k1 + k3 * u.y, k2 + k3 * u.x);
              return vec3(val, grad);
            }

            // fBm com gradiente para cristas, ravinas e dossel florestal
            vec3 sFbmGrad(vec2 p) {
              vec3 n1 = sNoiseGrad(p);
              vec3 n2 = sNoiseGrad(p * 2.13 + vec2(17.3, 9.2));
              vec3 n3 = sNoiseGrad(p * 4.47 + vec2(-11.4, 23.1));
              float v = n1.x * 0.56 + n2.x * 0.29 + n3.x * 0.15;
              vec2 g = n1.yz * 0.56 + n2.yz * (0.29 * 2.13) + n3.yz * (0.15 * 4.47);
              return vec3(v, g);
            }`).replace(`#include <color_fragment>`,`#include <color_fragment>
            vec3 sNor = normalize(vSerraNor);
            float sIncl = 1.0 - clamp(sNor.y, 0.0, 1.0);
            float sAlt = vSerraPos.y;
            float sRaio = length(vSerraPos.xz);

            // Macro-variação de mata (manchas de araucária, clareiras e ravinas) + micro-copas
            vec3 sMacro = sFbmGrad(vSerraPos.xz * 0.018 + vec2(3.7, -2.1));
            vec3 sCopa = sFbmGrad(vSerraPos.xz * 0.115 + vec2(-6.2, 4.8));

            // Escarpas de basalto: estratos horizontais quebrados por fraturas verticais
            vec3 sFrat = sFbmGrad(vec2(vSerraPos.x * 0.045 + vSerraPos.z * 0.045, sAlt * 0.09));
            float sEstrato = 0.5 + 0.5 * sin(sAlt * 0.34 + sFrat.x * 4.5);
            float sRochaDet = mix(sFrat.x, sEstrato, 0.52);

            // Máscara refinada de rocha (encostas íngremes + cristas expostas, suave no sopé)
            float sSope = 1.0 - smoothstep(325.0, 415.0, sRaio);
            float sMaskRocha = clamp(
              max(
                smoothstep(0.085, 0.24, sIncl + (sMacro.x - 0.5) * 0.07),
                smoothstep(82.0, 165.0, sAlt) * smoothstep(0.04, 0.14, sIncl) * 0.85
              ),
              0.0,
              1.0
            ) * (1.0 - sSope * 0.88);

            // Paleta realista em linear (reforça o vertex color sem perder o relevo do Blender)
            vec3 corMataEsc = vec3(0.032, 0.068, 0.028); // mata atlântica densa em ravinas
            vec3 corMataMed = vec3(0.062, 0.115, 0.042); // dossel iluminado / araucárias
            vec3 corMataCla = vec3(0.115, 0.165, 0.068); // clareiras e bordas de campo
            vec3 corMata = mix(corMataEsc, corMataMed, smoothstep(0.24, 0.72, sMacro.x));
            corMata = mix(corMata, corMataCla, smoothstep(0.62, 0.92, sCopa.x) * 0.45);
            // Sombreamento de micro-copas (dossel granulado visível à média distância)
            corMata *= (0.76 + sCopa.x * 0.48);

            vec3 corBasaltoEsc = vec3(0.095, 0.098, 0.096); // basalto úmido sombreado
            vec3 corBasaltoCla = vec3(0.245, 0.232, 0.208); // paredão rochoso seco/ocres
            vec3 corRocha = mix(corBasaltoEsc, corBasaltoCla, clamp(sRochaDet * 0.85 + 0.12, 0.0, 1.0));

            // Mescla o vertex color original (preserva AO e macro-composição do Blender) com o detalhe procedural
            vec3 corBioma = mix(corMata, corRocha, sMaskRocha);
            diffuseColor.rgb = mix(diffuseColor.rgb * (0.82 + sCopa.x * 0.34), corBioma, 0.62);

            // Oclusão de ravinas e base de encosta para leitura escultórica do relevo
            float sCav = smoothstep(0.18, 0.78, sMacro.x);
            float sBaseAo = mix(0.84, 1.04, smoothstep(6.0, 95.0, sAlt));
            diffuseColor.rgb *= mix(0.74, 1.12, sCav) * sBaseAo;`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
            // Rocha exposta levemente mais responsiva ao sol que a mata fosca
            roughnessFactor = mix(0.96, 0.84, sMaskRocha);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
            // Perturbação analítica de normal no espaço do mundo → relevo legível nas cristas, ravinas e dossel
            float sDistNorm = length(vSerraPos - cameraPosition);
            float sFadeBump = 1.0 - smoothstep(520.0, 1050.0, sDistNorm);
            vec2 gMata = sMacro.yz * 0.48 + sCopa.yz * 0.24;
            vec2 gRocha = sFrat.yz * 0.65;
            vec2 gXZ = mix(gMata, gRocha, sMaskRocha) * (0.62 * sFadeBump);
            float gY = cos(sAlt * 0.34 + sFrat.x * 4.5) * 0.16 * sMaskRocha * sFadeBump;
            vec3 gWorld = vec3(gXZ.x, gY, gXZ.y);
            // Projeta o gradiente no plano tangente da superfície para não inverter normais em paredões
            gWorld -= sNor * dot(gWorld, sNor);
            vec3 gView = (viewMatrix * vec4(gWorld, 0.0)).xyz;
            normal = normalize(normal - gView);`).replace(`#include <fog_fragment>`,`#include <fog_fragment>
            #ifdef USE_FOG
            // Bruma de vale e gradiente quente/frio sincronizados com uAtmFog[0..3] (sem alterar escala)
            float sDistAtm = length(vSerraPos - cameraPosition);
            float sEnt = uAtmFog[3].y;
            float sNoite = uAtmFog[3].z;
            vec3 sAtmRay = normalize(vSerraPos - cameraPosition);
            float sDotRaw = dot(sAtmRay, uAtmFog[0].xyz);
            float sAtmSun = pow(max(sDotRaw, 1e-4), max(1.4, uAtmFog[2].y * 0.72));
            float sAntiSun = clamp(0.5 - 0.5 * sDotRaw, 0.0, 1.0);

            // Dourado sutil nas cristas voltadas ao sol baixo no entardecer; silhueta mais fria/dessaturada à noite
            float sCrista = smoothstep(32.0, 130.0, vSerraPos.y);
            gl_FragColor.rgb += uAtmFog[1].rgb * (sCrista * sAtmSun * sEnt * 0.085);
            float sLumaNoite = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(sLumaNoite) * vec3(0.84, 0.94, 1.12), sNoite * 0.32);

            float sValeAlt = 1.0 - smoothstep(4.0, mix(62.0, 82.0, sEnt), vSerraPos.y);
            float sValeMist = sValeAlt * smoothstep(245.0, 660.0, sDistAtm) * mix(0.26, 0.38, sEnt) * (1.0 - sNoite * 0.25);
            vec3 sMistFrio = fogColor * mix(vec3(1.0), vec3(0.88, 0.96, 1.12), sAntiSun * 0.45 * sEnt);
            vec3 sMistCol = mix(sMistFrio, uAtmFog[1].rgb, clamp(sAtmSun * mix(0.65, 0.88, sEnt), 0.0, 0.90));
            gl_FragColor.rgb = mix(gl_FragColor.rgb, sMistCol, sValeMist);
            #endif`)},n.material=r,n.castShadow=!1,n.receiveShadow=!1,n.frustumCulled=!0}),n},[t]);return(0,s.jsx)(`primitive`,{object:n})}a.preload(c,!1,!0);export{l as default};