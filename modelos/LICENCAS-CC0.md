# Licenças CC0 — Modelos 3D (Carros e Pessoas)

Todos os modelos de veículos e pedestres adicionados em `public/modelos/` são **CC0 1.0 Universal (Domínio Público)** — livres para uso comercial e editorial, sem exigência de atribuição, sem créditos pagos e sem ativos proprietários.

## Veículos (`carro_sedan.glb`, `carro_hatch.glb`, `carro_suv.glb`)

- **Autor:** Quaternius (Tomás Laulhé)
- **Pacote original:** *Realistic Car Pack* (Nov 2018 — pacote gratuito público, excluídos itens Patreon Exclusive)
- **Arquivos fonte:** `NormalCar1.fbx` (sedan), `NormalCar2.fbx` (hatch), `SUV.fbx` (SUV)
- **Site oficial:** https://quaternius.com/
- **Espelho público:** https://github.com/beep2bleep/FreeAssetsByKenneyNLandQuaternius
- **Licença:** CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)
- **Adaptações:** Normalização de escala métrica real (sedan 4,60×1,82×1,45 m; hatch 4,05×1,76×1,46 m; SUV 4,70×1,92×1,72 m), separação por submalha (`carroceria`, `vidro`, `detalhes`, `farol`, `lanterna`), cores de vértice em rodas/frisos e compressão `EXT_meshopt_compression` + `KHR_mesh_quantization` via `gltf-transform`.

## Pedestres Animados (`pessoa_h_casual.glb`, `pessoa_h_social.glb`, `pessoa_m_casual.glb`, `pessoa_m_vestido.glb`)

- **Autor:** Quaternius (Tomás Laulhé)
- **Pacotes originais:** *Animated Men Characters* (Feb 2019) e *Animated Women Characters* (Feb 2019)
- **Arquivos fonte:** `Smooth_Male_Casual.fbx`, `Smooth_Male_Suit.fbx`, `Smooth_Female_Casual.fbx`, `Smooth_Female_Dress.fbx`
- **Site oficial:** https://quaternius.com/
- **Espelho público:** https://github.com/beep2bleep/FreeAssetsByKenneyNLandQuaternius
- **Licença:** CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)
- **Adaptações:** Normalização de altura (1,78 m masculino / 1,68 m feminino, pés em `y = 0`), seleção exclusiva dos ciclos `Walk` e `Idle`, consolidação em material único com paleta UV (1 draw call por personagem, permitindo variação de roupas/pele/cabelo com geometria compartilhada) e compressão `meshopt` via `gltf-transform`.

## Referência auxiliar baixada no worktree (`quaternius-ual/`)

- **Pacote:** Quaternius *Universal Animation Library* (versão gratuita padrão, espelho `J-Ponzo/gltf-universal-animation-library`)
- **Licença:** CC0 1.0 Universal
- **Uso:** Referência local no worktree (não empacotada no build de produção).
